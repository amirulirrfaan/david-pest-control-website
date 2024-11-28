const pests = [
  {
    name: "Ants",
    description: "Carpenter, Fire & House Ants",
    image:
      "https://plus.unsplash.com/premium_photo-1723001314148-80caabdb3ab0?q=80&w=2825&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Rodents",
    description: "Mice & Rats Control",
    image:
      "https://plus.unsplash.com/premium_photo-1667066432588-9497038b21f9?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Spiders",
    description: "Including Black Widows",
    image:
      "https://plus.unsplash.com/premium_photo-1661894758998-f7ab71721695?q=80&w=2912&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Cockroaches",
    description: "All Species Treatment",
    image:
      "https://images.unsplash.com/photo-1727198634627-645ef5356455?q=80&w=2500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Termites",
    description: "Prevention & Treatment",
    image:
      "https://smarterpestcontrol.com/wp-content/uploads/2022/02/Termites-Hero-600x300.png",
  },
  {
    name: "Wasps & Bees",
    description: "Nest Removal Services",
    image:
      "https://images.unsplash.com/photo-1568526381923-caf3fd520382?auto=format&fit=crop&q=80",
  },
  {
    name: "Bed Bugs",
    description: "Complete Elimination",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Bed_bug%2C_Cimex_lectularius.jpg/800px-Bed_bug%2C_Cimex_lectularius.jpg",
  },
  {
    name: "Mosquitoes",
    description: "Yard & Garden Treatment",
    image:
      "https://plus.unsplash.com/premium_photo-1723107368358-1cf57017d5a4?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export function PestTypes() {
  return (
    <section id="pests" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Pests We Handle</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          We provide effective solutions for all common household and commercial
          pest problems. Our expert team is trained to handle any pest
          infestation safely and efficiently.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pests.map((pest, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={pest.image}
                alt={pest.name}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xl font-semibold text-white mb-1">
                    {pest.name}
                  </h3>
                  <p className="text-gray-300 text-sm">{pest.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
