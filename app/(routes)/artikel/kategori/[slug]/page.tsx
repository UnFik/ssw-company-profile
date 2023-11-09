import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { CardBlog } from "@/components/ui/Card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Artikel | Smart Sinergy World",
  description: "Smart Sinergy World",
};

function ArtikelKategoriPage({ params }: any) {
  const blogDir = "blogs";

  const files = fs.readdirSync(path.join(blogDir));

  const blogs = files.map((filename) => {
    const fileContent = fs.readFileSync(path.join(blogDir, filename), "utf-8");
    const { data: frontMatter } = matter(fileContent);
    return {
      meta: frontMatter,
      slug: filename.replace(".mdx", ""),
    };
  });
  const filteredBlogs = blogs.filter((blog) => blog.meta.category === params.slug);

  return (
    <>
      <main className="flex flex-col md:px-56 px-4 mt-7">
        <h1 className="text-3xl font-bold">Artikel Smart Sinergy World</h1>

        <section className="py-10">
          <h2 className="text-2xl font-bold">Artikel Terbaru</h2>

          <div className="py-5 grid md:grid-cols-3 grid-cols-1 gap-5 gap-y-10">
            {filteredBlogs.map((blog) => (
              <CardBlog
                key={blog.slug}
                href={"/artikel/" + blog.slug}
                src={blog.meta.image}
                alt={blog.meta.title}
                category={blog.meta.category}
                title={blog.meta.title}
                date={blog.meta.date}
                author={blog.meta.author}
              />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default ArtikelKategoriPage;
