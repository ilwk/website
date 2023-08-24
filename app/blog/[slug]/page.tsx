import { allPosts } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import { MDXContent } from '@/components/mdx-content';

interface PageProps {
  params: {
    slug: string;
  };
}

const getPostBySlug = (slug: string) => {
  const post = allPosts.find((post) => post._raw.flattenedPath.endsWith(slug));
  return post;
};

export const generateStaticParams = async () =>
  allPosts.map((post) => ({
    slug: post._raw.flattenedPath,
  }));

export const generateMetadata = ({ params }: PageProps) => {
  const post = getPostBySlug(params.slug);
  if (!post) {
    return {};
  }
  return { title: post.title };
};

const PostLayout = async ({ params }: PageProps) => {
  const post = getPostBySlug(params.slug);
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
