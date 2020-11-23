import { BinaryLike, createHash } from "crypto";

function createETag(input: BinaryLike) {
  return createHash("md5").update(input).digest("hex");
}

function createPage(title: string) {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${title}</title>
      </head>
      <body>
        <h1>${title}</h1>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/page-1">Page 1</a></li>
          <li><a href="/page-2">Page 2</a></li>
          <li><a href="/page-3">Page 3 (SWR)</a></li>
        </ul>

        <hr />

        ${Array.from({ length: 1000 })
          .map(() => `<div>I am junk!</div>`)
          .join("\n")}
      </body>
    </html>
  `;
}

export { createETag, createPage };
