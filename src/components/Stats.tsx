import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const stats = [
  { value: "1000+", label: "Happy Customers" },
  { value: "4+", label: "Years Experience" },
  { value: "24/7", label: "Emergency Service" },
  { value: "100%", label: "Satisfaction Rate" },
];

export function Stats() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-16 bg-green-600 text-white">
      <div className="container mx-auto px-4">
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  delay: index * 0.1,
                }}
                className="text-4xl font-bold mb-2"
              >
                {stat.value}
              </motion.div>
              <p className="text-green-100">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
