import Link from 'next/link';
import { compareDesc, format, parseISO } from 'date-fns';
import { allPosts, Post } from 'contentlayer/generated';

export default async function Home() {
  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));
  return (
    <main className="flex flex-col gap-2 py-8 prose prose-invert">
      {posts.map((post) => {
        return (
          <article className="flex gap-4" key={post._id}>
            <time dateTime={post.date} className="min-w-[100px]">
              {format(parseISO(post.date), 'yyyy-MM-dd')}
            </time>
            <Link className="flex-1" href={post.url}>
              {post.title}
            </Link>
          </article>
        );
      })}
    </main>
  );
}
