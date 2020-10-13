import type { NowApiHandler } from "@vercel/node";
import { md5, createPage } from "./_utils";

const handler: NowApiHandler = (req, res) => {
  const html = createPage("Home");
  const etag = md5(html);

  if (etag === req.headers["if-none-match"]) {
    return res.status(304).end();
  }

  res.setHeader("cache-control", "max-age=10");
  res.setHeader("etag", etag);
  return res.status(200).end(html);
};

export default handler;
