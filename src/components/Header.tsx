import { Bug, Clock, Phone } from "lucide-react";

export function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Bug className="h-8 w-8 text-green-600" />
            <span className="text-2xl font-bold text-gray-800">
              Natan Pest Control
            </span>
          </div>
          <div className="hidden md:flex space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-5 w-5 text-green-600" />
              <span className="text-gray-600">(011) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-green-600" />
              <span className="text-gray-600">24/7 Emergency Service</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
