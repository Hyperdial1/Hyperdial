import ReactMarkdown from "react-markdown";

export function Article({ body }: { body: string }) {
  return (
    <div className="prose-body max-w-none">
      <ReactMarkdown>{body}</ReactMarkdown>
    </div>
  );
}
