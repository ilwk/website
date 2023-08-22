import { compareDesc } from 'date-fns';
import { allBlogs } from 'contentlayer/generated';
import { PostCard } from '@/components/post-card';
import Link from 'next/link';

export default async function Home() {
  const sortedPosts = allBlogs.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );
  const topPosts = sortedPosts.filter((item) => item.pin);
  const latestPosts = sortedPosts.slice(0, 5);
  return (
    <>
      <div className='space-y-2 text-neutral-500'>
        <h1 className='text-neutral-300'>VET3X</h1>
        <p>Hello! 欢迎来到我的主页</p>
        <p>我是一名前端, 我会在这里分享一些前端相关的技术内容</p>
        <p>还有一些与前端无关的个人生活内容</p>
      </div>

      <div className='space-y-4'>
        <h2 className='text-neutral-300'>最热文章</h2>
        <ul className='flex w-full justify-between gap-12'>
          {topPosts.slice(0, 3).map((post) => (
            <li className='flex-1 shrink-0' key={post._id}>
              <PostCard value={post}></PostCard>
            </li>
          ))}
        </ul>
      </div>
      <div className='space-y-4'>
        <h2 className='text-neutral-300'>最新文章</h2>
        <ul className='space-y-2'>
          {latestPosts.map((post) => {
            return (
              <li key={post._id}>
                <PostCard value={post}></PostCard>
              </li>
            );
          })}
          <li>
            <Link href='/blog'>查看更多</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
