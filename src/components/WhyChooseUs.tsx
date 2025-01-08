import { Award, Clock, Shield, Users } from "lucide-react";
import { Helmet } from "react-helmet-async";

const reasons = [
  {
    icon: Award,
    title: "25+ Years Experience",
    description:
      "Serving Penang with excellence since 1995, we bring decades of pest control expertise.",
  },
  {
    icon: Clock,
    title: "24/7 Emergency Service",
    description:
      "Round-the-clock support for urgent pest control needs across Penang.",
  },
  {
    icon: Shield,
    title: "Licensed & Certified",
    description:
      "Fully licensed by Malaysian authorities with certified pest control specialists.",
  },
  {
    icon: Users,
    title: "Local Expertise",
    description:
      "Deep understanding of Penang unique pest challenges and environmental conditions.",
  },
];

export function WhyChooseUs() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How experienced is Natan Pest Control?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We have over 25 years of experience serving Penang since 1995, bringing decades of pest control expertise.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer emergency pest control services?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we provide 24/7 emergency pest control services across Penang for urgent pest control needs.",
        },
      },
    ],
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <section id="why-us" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Why Choose Natan Pest Control?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              As Penang's leading pest control service, we combine local
              expertise with professional excellence to deliver superior
              results.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map((reason, index) => (
              <div key={index} className="text-center p-6">
                <div className="inline-block p-4 bg-green-50 rounded-full mb-6">
                  <reason.icon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
