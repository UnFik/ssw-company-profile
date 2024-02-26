import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Image from "next/image";
import Link from "next/link";
import { Clock9, UserCircle } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { CardRekomendasi } from "@/components/card";
import Footer from "@/components/footer";

interface BlogData {
  slug: string;
  title: string;
  description: string;
  image: string;
  date: string;
  category: string;
  author: string;
}

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

function getAllBlogData() {
  const files = fs.readdirSync(path.join("blogs"));
  return files.map((filename) => {
    const markdownFile = fs.readFileSync(path.join("blogs", filename), "utf-8");
    const { data: frontMatter } = matter(markdownFile);
    return {
      meta: frontMatter,
      slug: filename.replace(".mdx", ""),
    };
  });
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
  const allBlog = getAllBlogData();

  const allBlogData: BlogData[] = allBlog.map((item: any) => ({
    slug: item.slug,
    title: item.meta.title,
    description: item.meta.description,
    image: item.meta.image,
    date: item.meta.date,
    category: item.meta.category,
    author: item.meta.author,
  }));

  function getRandomBlogData(
    allData: BlogData[],
    currentSlug: string,
    count: number
  ): BlogData[] {
    const dataCopy: BlogData[] = [...allData];
  
    const currentIndex = dataCopy.findIndex((data) => data.slug === currentSlug);
  
    if (currentIndex !== -1) {
      dataCopy.splice(currentIndex, 1);
    }
  
    const randomData: BlogData[] = [];
  
    for (let i = 0; i < count; i++) {
      if (dataCopy.length === 0) {
        break;
      }
  
      const randomIndex = Math.floor(Math.random() * dataCopy.length);
      randomData.push(dataCopy[randomIndex]);
      dataCopy.splice(randomIndex, 1);
    }
  
    return randomData;
  }

  const randomBlogData = getRandomBlogData(
    allBlogData,
    props.frontMatter.title,
    3
  );

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
            className="my-auto mx-auto w-full h-auto"
            src={props.frontMatter.image}
            alt={props.frontMatter.title}
            width={650}
            height={650}
          />
          <MDXRemote source={props.content} />
        </article>
        <div className="md:px-40 px-1 py-10">
          Baca Juga:{" "}
          <Link
            href={`/artikel/${randomBlogData[1].slug}`}
            className="text-primary"
          >
            {randomBlogData[1].title} 
          </Link>
        </div>
      </div>
      <div className="md:px-56 px-4 w-full mt-20">
        <div className="md:text-4xl text-xl font-semibold text-start">
          Kamu Mungkin Juga Suka
        </div>
        <div className="grid md:grid-cols-3 gap-5 mt-12">
          {randomBlogData.map((blog, index) => (
            <CardRekomendasi
              key={index}
              href={`/artikel/${blog.slug}`} // Ganti dengan rute yang sesuai untuk artikel
              src={blog.image}
              alt={blog.title}
              date={blog.date}
              title={blog.title}
              desc={blog.description}
            />
          ))}
        </div>
      </div>\
      <div className="my-10"></div>
      <Footer />
    </>
  );
}
