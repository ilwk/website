import { compareDesc } from 'date-fns';
import { allPosts } from 'contentlayer/generated';
import { PostCard } from '@/components/post-card';

export default async function Blog() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );
  return (
    <main className='mx-auto flex max-w-2xl flex-col gap-20 px-4 py-20'>
      <div className='space-y-2'>
        <h1 className=''>Blog</h1>
        <p className='text-neutral-500'>随手写的一些文章</p>
      </div>
      <div>
        <ul>
          {posts.map((post) => {
            return (
              <li key={post._id}>
                <PostCard value={post}></PostCard>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
}
