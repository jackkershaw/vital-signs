import fs from "fs";
import { Feed } from "feed";
import fetch from "node-fetch";

const API_URL = process.env.WORDPRESS_API_URL;

export default async function generateRssFeed() {
  const site_url = "vitalsignsmag.org";

  const response = await fetch(`${API_URL}/wp-json/wp/v2/posts`);
  const allPosts = await response.json();

  const feedOptions = {
    title: "Vital Signs Magazine",
    description: "A health workers’ magazine for a new society",
    id: site_url,
    link: site_url,
    image: `${site_url}/logo.png`,
    favicon: `${site_url}/favicon.png`,
    copyright: `All rights reserved ${new Date().getFullYear()}, Ibas`,
    generator: "Feed for Node.js",
    feedLinks: {
      rss2: `${site_url}/rss.xml`,
    },
  };

  const feed = new Feed(feedOptions);

  allPosts.forEach((post) => {
    feed.addItem({
      title: post.title.rendered,
      id: `${site_url}/blog/${post.slug}`,
      link: `${site_url}/blog/${post.slug}`,
      description: post.excerpt.rendered,
      date: new Date(post.date),
    });
  });

  fs.writeFileSync("./public/rss.xml", feed.rss2());
}
