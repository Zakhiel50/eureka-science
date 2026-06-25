import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const BASE_URL = "https://eureka-science.vercel.app/";

    return [
        {
            url: BASE_URL,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: `${BASE_URL}/cours/*`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.9,
        },
        {
            url: `${BASE_URL}/laboratoire`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.5,
        }
    ];
}
