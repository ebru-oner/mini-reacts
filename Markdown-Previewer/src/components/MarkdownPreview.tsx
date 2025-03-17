import { Remarkable } from "remarkable";

const md = new Remarkable();

interface MarkdownPreviewProps {
  markdown: string;
}

const MarkdownPreview: React.FC<MarkdownPreviewProps> = ({ markdown }) => {
  return (
    <div className="w-full h-64 bg-gray-100 text-gray-900 rounded-sm shadow-md overflow-auto justify-items-start p-4">
      <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: md.render(markdown) }} />
    </div>
  );
};

export default MarkdownPreview;
