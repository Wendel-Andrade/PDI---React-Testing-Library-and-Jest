import { ChangeEvent, useState } from "react";

interface TextAreaComponentProps {
  onSubmit: (value: string) => void;
}

export function TextAreaComponent({ onSubmit }: TextAreaComponentProps) {
  const [text, setText] = useState<string>("");

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = () => {
    if (text.trim() !== "") {
      onSubmit(text);
      setText("");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "8px",
      }}
    >
      <textarea
        data-testid="text-area"
        placeholder="Type your message..."
        value={text}
        onChange={handleInputChange}
      />
      <button data-testid="submit-button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}
