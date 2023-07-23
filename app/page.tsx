import Link from 'next/link';
import { compareDesc, format, parseISO } from 'date-fns';
import { allPosts } from 'contentlayer/generated';

export default async function Home() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );
  return (
    <main className='mx-auto flex max-w-2xl flex-col gap-20 px-4 py-20'>
      <section className='space-y-2 text-neutral-500'>
        <h1 className='text-secondary'>VET3X</h1>
        <p>Hello! 欢迎来到我的主页</p>
        <p>我是一名前端, 我会在这里分享一些前端相关的技术内容</p>
        <p>还有一些与前端无关的个人生活内容</p>
      </section>
      <section className='prose prose-invert flex flex-col gap-3'>
        {posts.map((post) => {
          return (
            <article className='flex gap-8' key={post._id}>
              <time
                dateTime={post.date}
                className='w-28 shrink-0 text-neutral-500'
              >
                {format(parseISO(post.date), 'yyyy-MM-dd')}
              </time>
              <Link className='no-underline' href={post.url}>
                {post.title}
              </Link>
            </article>
          );
        })}
      </section>
    </main>
  );
}
