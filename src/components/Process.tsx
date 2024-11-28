import { motion } from "framer-motion";
import { ClipboardCheck, Search, Shield, SprayCan } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Inspection",
    description: "Thorough assessment of your property to identify pest issues",
  },
  {
    icon: ClipboardCheck,
    title: "Custom Plan",
    description:
      "Develop a tailored treatment plan for your specific situation",
  },
  {
    icon: SprayCan,
    title: "Treatment",
    description:
      "Professional application of eco-friendly pest control solutions",
  },
  {
    icon: Shield,
    title: "Prevention",
    description: "Ongoing protection to prevent future pest problems",
  },
];

export function Process() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Our Process</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We follow a systematic approach to ensure effective pest control
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              <div className="text-center">
                <div className="inline-block p-4 bg-green-50 rounded-full mb-6">
                  <step.icon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/4 right-0 w-full h-0.5 bg-green-100 transform translate-x-1/2">
                  <div className="absolute right-0 w-3 h-3 bg-green-500 rounded-full transform translate-x-1/2 -translate-y-1/2" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
