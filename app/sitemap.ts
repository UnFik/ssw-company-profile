import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MetadataRoute } from "next";

const getAllBlogUrl = () => {
  const blogDir = "blogs";

  const files = fs.readdirSync(path.join(blogDir));

  const slugs = files.map((filename) => filename.replace(".mdx", ""));
  const blogs = files.map((filename) => {
    const fileContent = fs.readFileSync(path.join(blogDir, filename), "utf-8");
    const { data: frontMatter } = matter(fileContent);
    return {
      meta: frontMatter,
      slug: filename.replace(".mdx", ""),
    };
  });

  return blogs;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const allBlogUrl = getAllBlogUrl();
  const blogUrl = allBlogUrl.map((blog) => ({
    url: `${process.env.DOMAIN}/artikel/${blog.slug}`,
    lastModified: blog.meta.date,
  }))
  const blogCategory = allBlogUrl.map((blog) => ({
    url: `${process.env.DOMAIN}/artikel/kategori/${blog.meta.category}`,
    lastModified: new Date(),
  }))

  return [
    {
      url: `${process.env.DOMAIN}`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.DOMAIN}/produk`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.DOMAIN}/seminar`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.DOMAIN}/kemitraan`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.DOMAIN}/artikel`,
      lastModified: new Date(),
    },

    ...blogUrl,
    ...blogCategory,
  ];
}
