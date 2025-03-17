import { useState } from "react";
import "./App.css";
import MarkdownEditor from "./components/MarkdownEditor";
import MarkdownPreview from "./components/MarkdownPreview";

function App() {
  const [markdown, setMarkdown] = useState("");
  return (
    <div>
      <h3 className="text-red-500">Markdown Previewer</h3>
      <MarkdownEditor onChange={setMarkdown} />
      <MarkdownPreview markdown={markdown} />
    </div>
  );
}

export default App;
