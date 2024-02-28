import { useEffect, useState } from "react";

interface RenderMessageProps {
  message: string;
}

export function RenderMessage({ message }: RenderMessageProps) {
  const [newMessage, setNewMessage] = useState<string>("");
  const [renderedMessages, setRenderedMessages] = useState<string[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewMessage(e.target.value);
  };

  useEffect(() => {
    setNewMessage(message);
  }, [message]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && newMessage.trim() !== "") {
      setRenderedMessages((prevMessages) => [...prevMessages, newMessage]);

      setNewMessage("");
    }
  };

  return (
    <div>
      <input
        type="text"
        name="message"
        placeholder="Enter the message"
        value={newMessage}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <p data-testid="empty-paragraph">{newMessage}</p>

      <ul style={{ padding: "0" }}>
        {renderedMessages.map((renderedMessage, index) => (
          <li key={index} style={{ listStyle: "none" }}>
            {renderedMessage}
          </li>
        ))}
      </ul>
    </div>
  );
}
