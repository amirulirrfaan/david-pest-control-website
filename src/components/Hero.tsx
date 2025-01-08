import { ArrowRight, MessageCircle } from "lucide-react";

export function Hero() {
  const whatsappNumber = "+60178118887";
  const whatsappMessage = encodeURIComponent(
    "Hi, I'd like to book a pest control service."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="relative bg-gray-900 text-white">
      <div className="absolute inset-0">
        <picture>
          <source
            srcSet="/hero.jpg"
            media="(min-width: 768px)"
            type="image/jpeg"
          />
          <img
            src="/hero.jpg"
            alt="Professional pest control technician at work in Penang"
            className="w-full h-full object-cover opacity-40"
            width="1920"
            height="1080"
            loading="eager"
            fetchPriority="high"
          />
        </picture>
      </div>
      <div className="relative container mx-auto px-4 py-32">
        <div className="max-w-3xl">
          <h1 className="text-6xl font-bold mb-6 leading-tight">
            Penang's Most Trusted Pest Control Service
          </h1>
          <p className="text-xl mb-8 text-gray-200">
            Protecting homes and businesses across Penang Island and Seberang
            Perai with professional pest control solutions since 2020.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors"
              aria-label="Book pest control service via WhatsApp"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              <span>Book Now</span>
            </a>
            <a
              href="#services"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors"
              aria-label="Learn more about our pest control services"
            >
              <span>Learn More</span>
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
