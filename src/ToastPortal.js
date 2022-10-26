import ReactDOM from "react-dom";

function ToastPortal({ children }) {
  const toastRoot = document.getElementById("portal-root");
  return ReactDOM.createPortal(children, toastRoot);
}

export default ToastPortal;
