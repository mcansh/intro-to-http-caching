import type { NowApiHandler } from "@now/node";
import { createPage } from "./_utils";

const handler: NowApiHandler = (_req, res) => {
  const html = createPage("Page 1");
  return res.status(200).end(html);
};

export default handler;
