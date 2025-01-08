import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  image?: string;
  schema?: object;
}

export function SEO({
  title = "Natan Pest Control - Professional Pest Control Services in Penang",
  description = "Penang's leading pest control service since 1995. Professional pest control solutions for homes and businesses with 24/7 emergency service.",
  canonicalUrl = "https://natanpestcontrol.com",
  image = "/og-image.jpg",
  schema,
}: SEOProps) {
  return (
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Additional SEO meta tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Natan Pest Control" />
      <meta name="geo.region" content="MY-07" />
      <meta name="geo.placename" content="Penang" />
      <meta name="geo.position" content="5.4164;100.3327" />
      <meta name="ICBM" content="5.4164, 100.3327" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="en_MY" />
      <meta property="og:site_name" content="Natan Pest Control" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Schema.org structured data */}
      {schema && (
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      )}
    </Helmet>
  );
}
