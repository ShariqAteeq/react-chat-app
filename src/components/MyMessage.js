import React from "react";

const MyMessage = ({ message }) => {
  if (message?.attachments?.length > 0) {
    return (
      <img
        src={message?.attachments[0].file}
        alt="..."
        className="message-image"
        style={{ float: "right" }}
      />
    );
  }

  return (
    <div
      className="message"
      style={{
        color: "white",
        float: "right",
        marginRight: "18px",
        backgroundColor: "#3A2B50",
      }}
    >
      {message.text}
    </div>
  );
};

export default MyMessage;
