// item(요소)의 diff type
// - none: 수정 된 사항 없음.
// - modified: 바뀌거나 수정 됨.

// slide의 diff type
// - none: 수정 된 사항 없음.
// - modified: 일부가 바뀌거나 수정 됨.
// - deleted: 삭제되거나 변경 됨. 슬라이드에서만 적용되는 타입.
// - added: 추가되거나 변경 됨. 슬라이드에서만 적용되는 타입.

// 추후 병합 로직을 위해서 isChecked 값도 넣어보았습니다. 해당 값 불필요 시 반영하겠습니다.(기본값은 모두 false)

const examplePpt1 = {
  slideWidth: 1280,
  slideHeight: 720,
  slides: [
    {
      slideId: 3569210928,
      items: [
        {
          type: "text",
          order: 1,
          id: {
            itemId: "2",
            itemName: "Text 0",
          },
          width: 466.0550131233596,
          height: 111.8532283464567,
          x: 317.3077165354331,
          y: 272.4795800524935,
          content: {
            value: "mock data",
            isBold: true,
            isItalic: true,
            isUnderlined: false,
            fontColor: "000000",
            size: 16,
            backgroundColor: null,
          },
        },
        {
          type: "image",
          order: 2,
          id: {
            itemId: "3",
            itemName: "Image 0",
          },
          width: 279.63307086614174,
          height: 279.63307086614174,
          x: 41.105721784776904,
          y: 163.48776902887138,
          content: {
            src: "https://static.vecteezy.com/system/resources/previews/001/189/562/original/leaf-png.png",
          },
        },
      ],
    },
    {
      slideId: 470326425,
      items: [
        {
          type: "image",
          order: 1,
          id: {
            itemId: "2",
            itemName: "Image 0",
          },
          width: 279.63307086614174,
          height: 279.63307086614174,
          x: 576.9230446194226,
          y: 326.97543307086613,
          content: {
            src: "https://static.vecteezy.com/system/resources/previews/001/189/562/original/leaf-png.png",
          },
        },
        {
          type: "text",
          order: 2,
          id: {
            itemId: "3",
            itemName: "Text 0",
          },
          width: 466.0550131233596,
          height: 111.8532283464567,
          x: 317.3077165354331,
          y: 272.4795800524935,
          content: {
            value: "mock data 2",
            isBold: true,
            isItalic: true,
            isUnderlined: true,
            fontColor: "000000",
            size: 16,
            backgroundColor: null,
          },
        },
        {
          type: "text",
          order: 3,
          id: {
            itemId: "4",
            itemName: "Text 1",
          },
          width: 372.84398950131236,
          height: 139.81648293963255,
          x: 317.3077165354331,
          y: 490.46320209973754,
          content: {
            value: "mock data 3",
            isBold: true,
            isItalic: true,
            isUnderlined: true,
            fontColor: "FF7777",
            size: 16,
            backgroundColor: null,
          },
        },
      ],
    },
    {
      slideId: "3193619780",
      items: [
        {
          type: "text",
          order: 1,
          id: {
            itemId: "2",
            itemName: "TextBox 2",
          },
        },
        {
          type: "text",
          order: 2,
          id: {
            itemId: "3",
            itemName: "TextBox 4",
          },
        },
        {
          type: "text",
          order: 3,
          id: {
            itemId: "4",
            itemName: "TextBox 7",
          },
        },
      ],
    },
  ],
};

const examplePpt2 = {
  slideWidth: 1280,
  slideHeight: 720,
  slides: [
    {
      slideId: 3569210928,
      items: [
        {
          type: "text",
          order: 1,
          id: {
            itemId: "2",
            itemName: "Text 0",
          },
          width: 466.0550131233596,
          height: 111.8532283464567,
          x: 317.3077165354331,
          y: 272.4795800524935,
          content: {
            value: "mock data",
            isBold: true,
            isItalic: true,
            isUnderlined: false,
            fontColor: "000000",
            size: 16,
            backgroundColor: null,
          },
        },
        {
          type: "image",
          order: 2,
          id: {
            itemId: "3",
            itemName: "Image 0",
          },
          width: 279.63307086614174,
          height: 279.63307086614174,
          x: 41.105721784776904,
          y: 163.48776902887138,
          content: {
            src: "https://static.vecteezy.com/system/resources/previews/001/189/562/original/leaf-png.png",
          },
        },
      ],
    },
    {
      slideId: "3975024808",
      items: [
        {
          type: "text",
          order: 1,
          id: {
            itemId: "2",
            itemName: "제목 1",
          },
          width: 960,
          height: 250,
          x: 160,
          y: 118,
          content: {
            value: "하나둘셋",
            isBold: false,
            isItalic: false,
            isUnderlined: false,
            fontColor: "#000",
            size: 16,
            backgroundColor: null,
          },
        },
        {
          type: "text",
          order: 2,
          id: {
            itemId: "3",
            itemName: "부제목 2",
          },
          width: 960,
          height: 174,
          x: 160,
          y: 378,
          content: {
            value: "넷둘셋",
            isBold: false,
            isItalic: false,
            isUnderlined: false,
            fontColor: "#000",
            size: 16,
            backgroundColor: null,
          },
        },
      ],
    },
    {
      slideId: "3193619780",
      items: [
        {
          type: "text",
          order: 2,
          id: {
            itemId: "3",
            itemName: "TextBox 4",
          },
        },
        {
          type: "text",
          order: 3,
          id: {
            itemId: "4",
            itemName: "TextBox 7",
          },
        },
        {
          type: "text",
          order: 4,
          id: {
            itemId: "2",
            itemName: "TextBox 6",
          },
        },
        {
          type: "image",
          order: 1,
          id: {
            itemId: "5",
            itemName: "그림 8",
          },
          width: 460,
          height: 454.6666666666667,
          x: 410,
          y: 132.66666666666669,
          content: {
            src: "https://static.vecteezy.com/system/resources/previews/001/189/562/original/leaf-png.png",
          },
        },
      ],
    },
  ],
};

// 위 sample mock data에 대한, diff diff data 예시
const mockDiffData = {
  3569210928: {
    // 빈 객체 or diff: "none" or slideId가 없을 경우, 변경사항이 없는 슬라이드.
  },
  470326425: {
    diff: "deleted",
    isChecked: false,
  },
  3975024808: {
    diff: "added",
    isChecked: false,
  },
  3193619780: {
    diff: "modified",
    items: {
      "TextBox 2": {
        diff: "modified",
        isChecked: false,
      },
      "TextBox 4": {
        diff: "added",
        isChecked: false,
      },
      "TextBox 6": {
        diff: "modified",
        isChecked: false,
      },
      "TextBox 7": {
        diff: "deleted",
        isChecked: false,
      },
      "그림 8": {
        diff: "modified",
        isChecked: false,
      },
    },
  },
  3193319780: {
    diff: "modified",
    items: {
      "TextBox 2": {
        diff: "modified",
        isChecked: false,
      },
      "TextBox 4": {
        diff: "added",
        isChecked: false,
      },
      "TextBox 6": {
        diff: "modified",
        isChecked: false,
      },
      "TextBox 7": {
        diff: "deleted",
        isChecked: false,
      },
      "그림 8": {
        diff: "modified",
        isChecked: false,
      },
    },
  },
};

export default mockDiffData;
