const fs = require("fs");
const BLOG_POSTS = require("./js/posts.js");

// Replace with your live domain (no trailing slash)
const SITE_URL = "https://sophiakarp.com";
const FEED_TITLE = "Sophia's Cyber Blog";
const FEED_DESCRIPTION = "Thoughts, updates, dreams...";

function escapeXml(str) {
    return String(str)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&apos;");
}

// Sort newest posts first
const sortedPosts = [...BLOG_POSTS].sort((a, b) => new Date(b.date) - new Date(a.date));

const itemsXml = sortedPosts.map(post => {
    const cleanId = String(post.slug || post.id).replace(/[^a-zA-Z0-9-_]/g, "");
    const postUrl = `${SITE_URL}/#post-${cleanId}`;

    // Use noon UTC so YYYY-MM-DD dates don't shift a day earlier in US timezones
    const pubDate = new Date(`${post.date}T12:00:00Z`).toUTCString();

    // Expand internal links (like href="#art-music") so they work inside external RSS readers
    const fullContent = post.content.replace(/href="#/g, `href="${SITE_URL}/#`);

    const categories = (post.tags || [])
        .map(tag => `      <category>${escapeXml(tag)}</category>`)
        .join("\n");

    return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${postUrl}</link>
      <guid isPermaLink="true">${postUrl}</guid>
      <pubDate>${pubDate}</pubDate>
${categories}
      <description><![CDATA[${fullContent.trim()}]]></description>
    </item>`;
}).join("\n");

const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(FEED_TITLE)}</title>
    <link>${SITE_URL}/#blog</link>
    <description>${escapeXml(FEED_DESCRIPTION)}</description>
    <language>en-us</language>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml" />
${itemsXml}
  </channel>
</rss>
`;

fs.writeFileSync("feed.xml", rssXml, "utf8");
console.log(`Generated feed.xml with ${sortedPosts.length} post(s).`);