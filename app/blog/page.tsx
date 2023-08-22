import { compareDesc } from 'date-fns';
import { allBlogs } from 'contentlayer/generated';
import { PostCard } from '@/components/post-card';

export default async function Blog() {
  const posts = allBlogs.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );
  return (
    <>
      <div className='space-y-2'>
        <h1 className=''>Blog</h1>
        <p className='text-base-content'>随手写的一些文章</p>
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
    </>
  );
}
