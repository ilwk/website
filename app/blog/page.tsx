import Link from 'next/link';
import { compareDesc, format, parseISO } from 'date-fns';
import { allPosts } from 'contentlayer/generated';

export default async function Blog() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );
  return (
    <main className='mx-auto flex max-w-2xl flex-col gap-20 px-4 py-20'>
      <section className='flex flex-col gap-3.5'>
        <div className='flex flex-col gap-2'>
          <h1 className=''>Blog</h1>
          <p className='text-neutral-500'>随手写的一些文章</p>
        </div>
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
