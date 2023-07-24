import { compareDesc } from 'date-fns';
import { allPosts } from 'contentlayer/generated';
import { PostCard } from '@/components/post-item';

export default async function Blog() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );
  return (
    <main className='flex flex-col max-w-2xl gap-20 px-4 py-20 mx-auto'>
      <section className='flex flex-col gap-3.5'>
        <div className='flex flex-col gap-2'>
          <h1 className=''>Blog</h1>
          <p className='text-neutral-500'>随手写的一些文章</p>
        </div>
      </section>
      <section className='flex flex-col gap-3 '>
        {posts.map((post) => {
          return <PostCard value={post} key={post._id}></PostCard>;
        })}
      </section>
    </main>
  );
}
