import Link from 'next/link';
import { compareDesc, format, parseISO } from 'date-fns';
import { allPosts, Post } from 'contentlayer/generated';

export default async function Home() {
  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));
  return (
    <main className="max-w-2xl px-4 py-10 mx-auto space-y-8">
      <header className="flex items-baseline justify-between ">
        <h1 className="text-3xl">VET3X</h1>
        <nav className="space-x-4">
          <a href="/about">About</a>
          <a href="/rss.xml">RSS</a>
        </nav>
      </header>
      <ul className="space-y-2">
        {posts.map((post) => {
          return (
            <li className="flex gap-4" key={post._id}>
              <time dateTime={post.date} className="min-w-[100px]">
                {format(parseISO(post.date), 'yyyy-MM-dd')}
              </time>
              <Link className="flex-1" href={post.url}>
                {post.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
