import { ArrowRight, Shield } from "lucide-react";

export function Hero() {
  return (
    <div className="relative bg-gray-900 text-white">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1503594384566-461fe158e797?auto=format&fit=crop&q=80"
          alt="Pest Control in Penang"
          className="w-full h-full object-cover opacity-40"
        />
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
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors">
              <Shield className="h-5 w-5" />
              <span>Get Free Inspection</span>
            </button>
            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors">
              <span>Learn More</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
