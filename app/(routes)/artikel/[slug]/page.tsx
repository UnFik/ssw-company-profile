import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Image from "next/image";
import Link from "next/link";
import { Clock9, UserCircle } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";

export async function generateMetadata({ params }: any) {
  const blog = getArtikel(params);

  return {
    title: blog.frontMatter.title,
    description: blog.frontMatter.description,
  };
}

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join("blogs"));

  const paths = files.map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }));

  return paths;
}

function getArtikel({ slug }: { slug: string }) {
  const markdownFile = fs.readFileSync(
    path.join("blogs", slug + ".mdx"),
    "utf-8"
  );

  const { data: frontMatter, content } = matter(markdownFile);

  return {
    frontMatter,
    slug,
    content,
  };
}

export default function ArtikelDetail({ params }: any) {
  const props = getArtikel(params);

  return (
    <>
      <div className="md:mx-56 px-4 bg-white shadow-md">
        <article className="prose prose-sm md:prose-base lg:prose-lg prose-headings:mb-0 mx-auto py-10 border-b-2 border-gray-400">
          <div className="text-primary mb-1">{props.frontMatter.category}</div>
          <h1 className="text-black">{props.frontMatter.title}</h1>
          <div className="flex flex-row gap-7 mb-2 h-20">
            <div className="flex gap-3">
              <Clock9 className="my-auto w-6 h-6" />
              <span className="my-auto">{props.frontMatter.date}</span>
            </div>
            <div className="flex gap-3">
              <UserCircle className="my-auto w-6 h-6" />
              <span className="my-auto">{props.frontMatter.author}</span>
            </div>
          </div>
          <Image
            className="my-auto w-auto h-auto"
            src={props.frontMatter.image}
            alt={props.frontMatter.title}
            width={650}
            height={650}
          />

          <MDXRemote source={props.content} />
        </article>
        <div className="md:px-60 px-2 py-10">
          Baca Juga:{" "}
          <Link href="" className="text-primary">
            {props.frontMatter.title}
          </Link>
        </div>
      </div>
      <div className="md:px-56 px-4 w-full mt-36">
        <div className="md:text-4xl text-xl font-semibold text-start">
          Kamu Mungkin Juga Suka
        </div>
      </div>
    </>
  );
}
