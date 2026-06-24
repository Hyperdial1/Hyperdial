import { Article } from "@/components/article";
import { getBySlug } from "@/lib/content";

export default function DocsHome() {
  const intro = getBySlug("docs", "introduction");
  return (
    <article className="max-w-2xl">
      <span className="text-xs font-medium uppercase tracking-wider text-teal-dark">
        {intro?.category}
      </span>
      <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight">
        {intro?.title}
      </h1>
      <hr className="my-8 border-line" />
      <Article body={intro?.body ?? ""} />
    </article>
  );
}
