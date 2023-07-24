import { allPosts } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import { MDXContent } from '@/components/MDXContent';

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);
  return { title: post.title };
};

const PostLayout = async ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) notFound();
  return (
    <>
      <article className='prose max-w-full'>
        <h1>{post.title}</h1>
        <MDXContent post={post} />
      </article>
    </>
  );
};

export default PostLayout;
