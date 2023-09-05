import { allPosts } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import { Content } from '@/components/content';

interface PageProps {
  params: {
    slug: string;
  };
}

const getPostBySlug = (slug: string) => {
  const post = allPosts.find((post) => post._id === slug);
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
  return { title: post.name };
};

const PostLayout = async ({ params }: PageProps) => {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();
  return (
    <>
      <article className='prose max-w-full'>
        <h1>{post.name}</h1>
        <Content post={post} />
      </article>
    </>
  );
};

export default PostLayout;
