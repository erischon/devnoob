import { notFound } from "next/navigation";
import Link from "next/link";

import getFormattedDate from "@/lib/getFormattedDate";
import { getPostData, getSortedPostsData } from "@/lib/posts";

/**
 * @description Generates static params for a blog post page
 */
export function generateStaticParams() {
  const posts = getSortedPostsData(); //deduped!

  return posts.map((post) => ({
    postId: post.id,
  }));
}

/**
 * @description Generates metadata for a blog post page
 */
export function generateMetadata({ params }: { params: { postId: string } }) {
  const posts = getSortedPostsData(); //deduped!
  const { postId } = params;

  const post = posts.find((post) => post.id === postId);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
  };
}

/**
 * @description Renders a blog post page
 */
export default async function Post({ params }: { params: { postId: string } }) {
  const posts = getSortedPostsData(); //deduped!
  const { postId } = params;

  //   if there is no post with the id, return 404
  if (!posts.find((post) => post.id === postId)) return notFound();

  const { title, date, contentHtml } = await getPostData(postId);

  const pubDate = getFormattedDate(date);

  return (
    <div className="prose prose-md prose-stone mx-auto">
      <h1 className="text-2xl mt-4 mb-0 font-semibold">{title}</h1>
      <p className="mt-1 text-xs">{pubDate}</p>
      <article>
        <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
        <p>
          <Link href="/" className="no-underline text-sm">
            ← Back to home
          </Link>
        </p>
      </article>
    </div>
  );
}
