import React, { useState } from "react";
import ToastNotification from "../components/ToastNotification";

function useToast(initialState = false) {
  const [isSendToast, setIsSendToast] = useState(initialState);
  const handleSendToast = () => setIsSendToast(true);
  const customToast = ({ message }) => (
    <ToastNotification
      message={message}
      isSendToast={isSendToast}
      setIsSendToast={setIsSendToast}
    />
  );

  return [customToast, handleSendToast];
}

export default useToast;
