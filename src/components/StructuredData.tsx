export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AQLAAN",
    "url": "https://aqlaan.com",
    "logo": "https://aqlaan.com/logo/aqlaan-logo.png",
    "description": "AQLAAN brings intelligence, scalability, and precision to your business through data-driven AI and automation solutions.",
    "sameAs": [
      // Add your social media URLs here when available
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "url": "https://aqlaan.com/contact"
    }
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "AQLAAN",
    "url": "https://aqlaan.com",
    "description": "Empowering AI and Automation - Transform your business with cutting-edge AI and automation solutions.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://aqlaan.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  }

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "AQLAAN",
    "image": "https://aqlaan.com/logo/aqlaan-logo.png",
    "description": "AI and automation solutions provider specializing in machine learning, data labeling, and enterprise automation.",
    "url": "https://aqlaan.com",
    "areaServed": "Worldwide",
    "serviceType": [
      "AI Strategy & Consulting",
      "Data Labeling & Curation",
      "Computer Vision",
      "Enterprise Automation",
      "Healthcare Intelligence",
      "Language Intelligence"
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
      />
    </>
  )
}
