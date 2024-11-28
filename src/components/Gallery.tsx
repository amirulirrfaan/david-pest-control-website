const images = [
  {
    url: "https://images.unsplash.com/photo-1580741753044-b3f303ad361b?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Commercial Pest Control",
    description: "Service at Georgetown Heritage Building",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1678199834944-b21557c35ebd?q=80&w=2905&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Residential Treatment",
    description: "Home protection in Tanjung Bungah",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1661953124283-76d0a8436b87?q=80&w=2976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Restaurant Safety",
    description: "Food establishment protection in Gurney Drive",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?q=80&w=2820&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Hotel Services",
    description: "Premium hotel pest management",
  },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">
          Our Work in Action
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          See how we protect Penang's homes and businesses with our professional
          pest control services.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {image.title}
                  </h3>
                  <p className="text-gray-200 text-sm">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
