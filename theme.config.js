export default {
  // github: 'https://github.com/shuding/nextra',
  // docsRepositoryBase: 'https://github.com/shuding/nextra/blob/master',
  titleSuffix: ' – ElasticSIEM',
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">
        SIEM WorkBook
      </span>
      <span className="text-gray-600 font-normal hidden md:inline">
        Lab Guide: Elastic Security Fundamentals
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta
        name="description"
        content="Lab Guide: Elastic Security Fundamentals
"
      />
      <meta
        name="og:description"
        content="Lab Guide: Elastic Security Fundamentals"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditLink: 'Edit this page on GitHub',
  footerText: <>{new Date().getFullYear()} © Kernellix.</>,
  unstable_faviconGlyph: '👋',
}
