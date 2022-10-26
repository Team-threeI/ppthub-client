import React, { useState } from "react";
import ToastNotification from "../components/ToastNotification";

function useToast(initialState = false) {
  const [sendToast, setSendToast] = useState(initialState);
  const handleSendToast = () => setSendToast(true);
  const customToast = ({ message }) => (
    <ToastNotification
      message={message}
      sendToast={sendToast}
      setSendToast={setSendToast}
    />
  );

  return [customToast, handleSendToast];
}

export default useToast;
