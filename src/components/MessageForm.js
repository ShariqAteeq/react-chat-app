import React, { useState } from "react";
import { sendMessage, isTyping } from "react-chat-engine";
import { SendOutlined, PictureOutlined } from "@ant-design/icons";

const MessageForm = (props) => {
  const [value, setValue] = useState("");
  const { creds, chatId } = props;

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = value.trim(); // remove whitespaces

    if (text.length > 0) sendMessage(creds, chatId, { text });
    setValue("");
    isTyping(props, chatId);
  };

  const handleUpload = (e) => {
    sendMessage(creds, chatId, { files: e.target.files, text: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="message-form">
      <input
        className="message-input"
        placeholder="Send a message..."
        onChange={handleChange}
        value={value}
        onSubmit={handleSubmit}
      />
      <label htmlFor="upload-button">
        <span className="image-button">
          <PictureOutlined className="picture-icon" />
        </span>
      </label>
      <input
        type="file"
        onChange={handleUpload}
        multiple={false}
        id="upload-button"
        style={{ display: "none" }}
      />
      <button type="submit" className="send-button">
        <SendOutlined className="send-icon" />
      </button>
    </form>
  );
};

export default MessageForm;
