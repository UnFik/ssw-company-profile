import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${process.env.DOMAIN}`,
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
  ];
}
