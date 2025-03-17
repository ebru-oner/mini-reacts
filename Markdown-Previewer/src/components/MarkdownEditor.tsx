import { useState } from "react";

interface MarkdownEditorProps {
  initialText?: string;
  placeholder?: string;
  onChange: (text: string) => void;
}
const MarkdownEditor: React.FC<MarkdownEditorProps> = ({ onChange, initialText = "", placeholder = "Enter your markdown text.." }) => {
  const [input, setInput] = useState<string>(initialText);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
    onChange(e.target.value);
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <textarea
        value={input}
        className="w-full h-64 border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-green-400 resize-none bg-gray-200 text-
        gray-800"
        onChange={handleInputChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default MarkdownEditor;
