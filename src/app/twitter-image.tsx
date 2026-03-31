import { createOgImageResponse, ogImageSize } from "@/lib/og-image";
import { site } from "@/lib/site";

export const runtime = "edge";

export const alt = `${site.name} — portfolio preview`;
export const size = ogImageSize;
export const contentType = "image/png";

export default function Image() {
  return createOgImageResponse();
}
