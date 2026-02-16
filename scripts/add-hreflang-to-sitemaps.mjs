/**
 * Post-build script to add hreflang cross-references to sitemaps.
 * Reads the 3 locale sitemaps, matches URLs across locales,
 * and adds <xhtml:link> alternates to each entry.
 *
 * Run after `npm run build`:
 *   node scripts/add-hreflang-to-sitemaps.mjs
 */

import {readFileSync, writeFileSync, existsSync} from 'fs';
import {join} from 'path';

const BUILD_DIR = join(process.cwd(), 'build');
const SITE_URL = 'https://docs.lokalingo.com';

const locales = [
  {code: 'en', prefix: '', sitemapPath: 'sitemap.xml', hreflang: 'en'},
  {code: 'ja', prefix: '/ja', sitemapPath: 'ja/sitemap.xml', hreflang: 'ja'},
  {code: 'ko', prefix: '/ko', sitemapPath: 'ko/sitemap.xml', hreflang: 'ko'},
];

function extractUrls(xml) {
  const urls = [];
  const re = /<url>\s*<loc>([^<]+)<\/loc>/g;
  let match;
  while ((match = re.exec(xml)) !== null) {
    urls.push(match[1]);
  }
  return urls;
}

function urlToDocPath(url, prefix) {
  let path = url.replace(SITE_URL, '');
  if (prefix && path.startsWith(prefix)) {
    path = path.slice(prefix.length);
  }
  return path || '/';
}

function addHreflangToSitemap(xml, locale, allDocPaths) {
  const xmlns = 'xmlns:xhtml="http://www.w3.org/1999/xhtml"';
  // Add xhtml namespace if not present
  if (!xml.includes(xmlns)) {
    xml = xml.replace('<urlset', `<urlset ${xmlns}`);
  }

  // For each <url> block, inject hreflang links
  return xml.replace(/<url>\s*<loc>([^<]+)<\/loc>/g, (fullMatch, loc) => {
    const docPath = urlToDocPath(loc, locale.prefix);

    // Build hreflang links for all locales that have this path
    const hreflangLinks = [];
    for (const l of locales) {
      const targetUrl = SITE_URL + l.prefix + (docPath === '/' ? '/' : docPath);
      if (allDocPaths[l.code].has(docPath)) {
        hreflangLinks.push(
          `    <xhtml:link rel="alternate" hreflang="${l.hreflang}" href="${targetUrl}" />`
        );
      }
    }
    // Add x-default pointing to EN
    const xDefaultUrl = SITE_URL + (docPath === '/' ? '/' : docPath);
    hreflangLinks.push(
      `    <xhtml:link rel="alternate" hreflang="x-default" href="${xDefaultUrl}" />`
    );

    return `<url>\n    <loc>${loc}</loc>\n${hreflangLinks.join('\n')}`;
  });
}

// Main
const allDocPaths = {};

// Read all sitemaps and extract doc paths
for (const locale of locales) {
  const sitemapFile = join(BUILD_DIR, locale.sitemapPath);
  if (!existsSync(sitemapFile)) {
    console.warn(`Sitemap not found: ${sitemapFile}`);
    allDocPaths[locale.code] = new Set();
    continue;
  }
  const xml = readFileSync(sitemapFile, 'utf-8');
  const urls = extractUrls(xml);
  allDocPaths[locale.code] = new Set(urls.map(u => urlToDocPath(u, locale.prefix)));
}

// Rewrite each sitemap with hreflang
for (const locale of locales) {
  const sitemapFile = join(BUILD_DIR, locale.sitemapPath);
  if (!existsSync(sitemapFile)) continue;

  let xml = readFileSync(sitemapFile, 'utf-8');
  xml = addHreflangToSitemap(xml, locale, allDocPaths);
  writeFileSync(sitemapFile, xml, 'utf-8');
  console.log(`Updated ${locale.sitemapPath} with hreflang cross-references`);
}

console.log('Done — hreflang annotations added to all sitemaps.');
