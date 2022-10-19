import JSZip from "jszip";
import PRESET_COLORS from "../config/constants/presetColors";
import ITEM_TYPES from "../config/constants/itemTypes";

const parser = new DOMParser();
const EMUFactor = 96 / 914400;

const getSlideSize = async (pptx) => {
  const presentationTextXml = await pptx
    .file("ppt/presentation.xml")
    .async("text");
  const slideSizeXml = parser
    .parseFromString(presentationTextXml, "application/xml")
    .querySelector("sldSz");
  const {
    cx: { nodeValue: slideXSize },
    cy: { nodeValue: slideYSize },
  } = slideSizeXml.attributes;

  return {
    slideWidth: slideXSize * EMUFactor,
    slideHeight: slideYSize * EMUFactor,
  };
};

const getSlidePaths = async (pptx) => {
  const contentTypes = await pptx.file("[Content_Types].xml").async("text");
  const slideOverrides = parser
    .parseFromString(contentTypes, "application/xml")
    .querySelectorAll("Override");

  return Array.from(slideOverrides)
    .filter((el) =>
      el.attributes.PartName.nodeValue.includes("/ppt/slides/slide"),
    )
    .map((el) => el.attributes.PartName.nodeValue.slice(1));
};

const getSlideId = async (slide) => {
  const IdListXml = slide.querySelectorAll("cSld extLst");
  const slideIdXml = Array.from(IdListXml).find(
    ({ nodeName }) => nodeName === "p:extLst",
  );

  if (!slideIdXml) {
    const slideName = slide.querySelector("cSld").attributes.name.nodeValue;
    return slideName;
  }

  const creationId =
    slideIdXml.querySelector("ext creationId").attributes.val.nodeValue;

  return creationId;
};

const getItemId = (item) => {
  const {
    id: { nodeValue: itemId },
    name: { nodeValue: itemName },
  } = item.querySelector("cNvPr").attributes;

  return {
    itemId,
    itemName,
  };
};

const getItemPresetSize = (item) => {
  const presetType =
    item.querySelector("nvSpPr nvPr ph").attributes.type.nodeValue;

  switch (presetType) {
    case "ctrTitle":
      return {
        width: 960,
        height: 250,
        x: 160,
        y: 118,
      };
    case "subTitle":
      return {
        width: 960,
        height: 174,
        x: 160,
        y: 378,
      };
    default:
      return "unidentified preset";
  }
};

const getItemSize = (item) => {
  const itemSizeXml = item.querySelector("xfrm ext");
  const itemPositionXml = item.querySelector("off");

  if (!itemSizeXml) {
    return getItemPresetSize(item);
  }

  const {
    cx: { nodeValue: widthSize },
    cy: { nodeValue: heightSize },
  } = itemSizeXml.attributes;
  const {
    x: { nodeValue: xSize },
    y: { nodeValue: ySize },
  } = itemPositionXml.attributes;

  return {
    width: widthSize * EMUFactor,
    height: heightSize * EMUFactor,
    x: xSize * EMUFactor,
    y: ySize * EMUFactor,
  };
};

const getTextFontColor = (item) => {
  const textAttributeXml = item.querySelector("txBody p r rPr");
  const presetFontXml = textAttributeXml.querySelector("solidFill schemeClr");
  const presetFontColor = presetFontXml?.attributes.val.nodeValue;
  const presetFontDarkness =
    textAttributeXml.querySelector("lumMod")?.attributes.val.nodeValue;

  if (presetFontColor) {
    const darkness = presetFontDarkness ? presetFontDarkness / 1000 : 0;
    return PRESET_COLORS[presetFontColor][darkness];
  }

  const customFontColor =
    textAttributeXml.querySelector("solidFill srgbClr")?.attributes.val;

  return customFontColor ? `#${customFontColor.nodeValue}` : "#000";
};

const getTextContent = (item) => {
  const value = item.textContent;
  const textAttributeXml = item.querySelector("txBody p r rPr");
  const { b, i, u, sz } = textAttributeXml.attributes;
  const backgroundColor =
    textAttributeXml.querySelector("highlight srgbClr")?.attributes.val
      .nodeValue;
  const fontColor = getTextFontColor(item);

  return {
    value,
    isBold: !!b?.nodeValue,
    isItalic: !!i?.nodeValue,
    isUnderlined: !!u?.nodeValue,
    fontColor,
    size: sz ? sz.nodeValue / 100 : 16,
    backgroundColor: backgroundColor ? `#${backgroundColor}` : null,
  };
};

const getImageContent = async (item, slidePath, pptx) => {
  const embedId =
    item.querySelector("blipFill blip").attributes["r:embed"].nodeValue;
  const relsPath = `${slidePath.replace(
    "ppt/slides/",
    "ppt/slides/_rels/",
  )}.rels`;
  const relsXmlText = await pptx.file(relsPath).async("text");
  const relsXmlDOM = parser
    .parseFromString(relsXmlText, "application/xml")
    .querySelector("Relationships").childNodes;
  const embedIdRelXmlDOM = Array.from(relsXmlDOM).find(
    (el) => el.attributes.Id.nodeValue === embedId,
  );
  const imagePath = embedIdRelXmlDOM.attributes.Target.nodeValue;
  const imgSrc = await pptx
    .file(imagePath.replace("..", "ppt"))
    .async("base64");

  return {
    src: `data:image/*;base64,${imgSrc}`,
  };
};

const getItemContent = async (item, itemType, slidePath, pptx) => {
  if (itemType === "text") {
    return getTextContent(item);
  }
  if (itemType === "image") {
    const imageContent = await getImageContent(item, slidePath, pptx);
    return imageContent;
  }

  return undefined;
};

const getSlideItems = async (slide, slidePath, pptx) => {
  const items = Array.from(
    slide.querySelector("sld cSld spTree").children,
  ).slice(2);

  return Promise.all(
    items.map(async (item, index) => {
      const type = ITEM_TYPES[item.tagName] ?? "unidentified item";
      const id = getItemId(item);
      const { width, height, x, y } = getItemSize(item);
      const content = await getItemContent(item, type, slidePath, pptx);

      return {
        type,
        order: index + 1,
        id,
        width,
        height,
        x,
        y,
        content,
      };
    }),
  );
};

const getSlides = async (pptx) => {
  const slidePaths = await getSlidePaths(pptx);

  return Promise.all(
    slidePaths.map(async (path) => {
      const slideTextXml = await pptx.file(path).async("text");
      const slide = parser.parseFromString(slideTextXml, "application/xml");

      const slideId = await getSlideId(slide);
      const items = await getSlideItems(slide, path, pptx);

      return {
        slideId,
        items,
      };
    }),
  );
};

const pptxParser = async (pptxFile) => {
  const pptx = await JSZip.loadAsync(pptxFile);

  const { slideWidth, slideHeight } = await getSlideSize(pptx);
  const slides = await getSlides(pptx);

  return {
    slideWidth,
    slideHeight,
    slides,
  };
};

export default pptxParser;
