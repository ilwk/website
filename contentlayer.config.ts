import { makeSource, defineDatabase } from 'contentlayer-source-notion';
import { Client } from '@notionhq/client';

const client = new Client({
  auth: process.env.NOTION_TOKEN,
});

export const Posts = defineDatabase(() => ({
  name: 'Posts',
  databaseId: String(process.env.NOTION_DB_ID),
  properties: {
    date: {
      name: 'Created',
    },
    summary: {
      name: 'AI summary',
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) => `/blog/${post._id}`,
    },
  },
}));

export default makeSource({
  client,
  databaseTypes: [Posts],
});
