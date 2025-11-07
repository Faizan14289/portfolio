import * as cheerio from 'cheerio';

export type SitePreview = {
  title?: string;
  description?: string;
  image?: string;
  favicon?: string;
  headings?: string[];
};

export async function getSitePreview(url: string): Promise<SitePreview | null> {
  try {
    const res = await fetch(url, { cache: 'no-store' });
    if (!res.ok) return null;
    const html = await res.text();
    const $ = cheerio.load(html);

    const title = $('meta[property="og:title"]').attr('content') || $('title').text() || undefined;
    const description =
      $('meta[name="description"]').attr('content') || $('meta[property="og:description"]').attr('content') || undefined;
    const image = $('meta[property="og:image"]').attr('content') || undefined;
    const favicon = $('link[rel="icon"]').attr('href') || $('link[rel="shortcut icon"]').attr('href') || undefined;

    const headings: string[] = [];
    $('h1, h2').each((_, el) => {
      const text = $(el).text().trim();
      if (text) headings.push(text);
    });

    // Normalize favicon if relative
    const normalizeUrl = (u?: string) => {
      if (!u) return undefined;
      try {
        return new URL(u, url).toString();
      } catch {
        return undefined;
      }
    };

    return {
      title,
      description,
      image,
      favicon: normalizeUrl(favicon),
      headings: headings.slice(0, 3)
    };
  } catch (e) {
    return null;
  }
}