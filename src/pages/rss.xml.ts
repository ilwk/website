import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { HOME } from "@/consts";

type Context = {
  site: string;
};

export async function GET(context: Context) {
  const blog = await getCollection("blog");

  const items = [...blog];
  return rss({
    title: HOME.TITLE,
    description: HOME.DESCRIPTION,
    site: context.site,
    items: items.map((item) => ({
      ...item.data,
      pubDate: item.data.date,
      link: `/${item.collection}/${item.slug}/`,
    })),
  });
}
