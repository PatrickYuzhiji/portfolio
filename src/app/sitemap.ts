import type { MetadataRoute } from "next";

/**
 * Google's limit is 50,000 URLs per sitemap
 *
 * https://nextjs.org/docs/app/api-reference/functions/generate-sitemaps
 * https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	console.log("sitemap start");

	const sitemapList: MetadataRoute.Sitemap = []; // final result

	const sitemapRoutes: MetadataRoute.Sitemap = [
		{
			url: "https://www.patrickyu.work", // home
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 1.0,
		},
		{
			url: "https://www.patrickyu.work/projects",
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.8,
		},
		{
			url: "https://www.patrickyu.work/about",
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.7,
		},
		{
			url: "https://www.patrickyu.work/contact",
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.6,
		},
	];

	for (const route of sitemapRoutes) {
		sitemapList.push({
			url: route.url,
			lastModified: new Date(route.lastModified || new Date()).toISOString(),
			changeFrequency: route.changeFrequency,
			priority: route.priority,
		});
	}

	console.log("sitemap end, size:", sitemapList.length);
	return sitemapList;
}
