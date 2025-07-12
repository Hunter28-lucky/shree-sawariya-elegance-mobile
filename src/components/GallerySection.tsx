import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Filter, X, ArrowRight } from "lucide-react";
import heroWedding from "@/assets/hero-wedding.jpg";
import serviceBirthday from "@/assets/service-birthday.jpg";
import serviceCorporate from "@/assets/service-corporate.jpg";
import serviceReligious from "@/assets/service-religious.jpg";

const GallerySection = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = [
    { id: "all", name: "All Events" },
    { id: "wedding", name: "Weddings" },
    { id: "birthday", name: "Birthdays" },
    { id: "corporate", name: "Corporate" },
    { id: "religious", name: "Religious" },
  ];

  const galleryImages = [
    {
      id: 1,
      src: heroWedding,
      category: "wedding",
      title: "Royal Wedding Ceremony",
      description: "Traditional Indian wedding with premium decorations"
    },
    {
      id: 2,
      src: serviceBirthday,
      category: "birthday",
      title: "Luxury Birthday Celebration",
      description: "Elegant birthday party with golden theme"
    },
    {
      id: 3,
      src: serviceCorporate,
      category: "corporate",
      title: "Corporate Event Setup",
      description: "Professional conference and seminar arrangement"
    },
    {
      id: 4,
      src: serviceReligious,
      category: "religious",
      title: "Traditional Pooja Ceremony",
      description: "Sacred religious ceremony with authentic decorations"
    },
    {
      id: 5,
      src: heroWedding,
      category: "wedding",
      title: "Garden Wedding Setup",
      description: "Outdoor wedding with floral arrangements"
    },
    {
      id: 6,
      src: serviceBirthday,
      category: "birthday",
      title: "Kids Birthday Party",
      description: "Colorful and fun birthday celebration"
    },
    {
      id: 7,
      src: serviceCorporate,
      category: "corporate",
      title: "Product Launch Event",
      description: "Modern corporate product launch setup"
    },
    {
      id: 8,
      src: serviceReligious,
      category: "religious",
      title: "Festival Celebration",
      description: "Traditional festival decoration and setup"
    },
  ];

  const filteredImages = activeFilter === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const handleWhatsApp = () => {
    const phoneNumber = "+919999999999";
    const message = "Hi! I loved your gallery and want to discuss my event requirements.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-muted/20 to-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='20' height='20' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 20 0 L 0 0 0 20' fill='none' stroke='hsl(var(--primary))' strokeWidth='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)' /%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="heading-1 mb-4">
            Our <span className="gradient-text">Event Gallery</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of successfully executed events. From intimate celebrations 
            to grand festivities, witness the magic we create for our clients.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 fade-in-up">
          <div className="flex items-center gap-2 text-muted-foreground mb-4">
            <Filter className="w-4 h-4" />
            <span className="text-sm font-medium">Filter by category:</span>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeFilter === category.id ? "luxury" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(category.id)}
                className="transition-all duration-300 hover:scale-105"
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {filteredImages.map((image, index) => (
            <Card
              key={image.id}
              className={`group cursor-pointer overflow-hidden p-0 border-none shadow-lg hover:shadow-2xl transition-all duration-500 ${
                index % 2 === 0 ? 'fade-in-left' : 'fade-in-right'
              } hover:scale-105`}
              onClick={() => handleImageClick(image.src)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="font-semibold text-lg mb-1">{image.title}</h3>
                    <p className="text-sm text-white/80">{image.description}</p>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-medium capitalize backdrop-blur-sm">
                  {image.category}
                </div>

                {/* Hover Effect Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full">
                    <ArrowRight className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-muted/30 to-muted/10 rounded-2xl p-12 fade-in-up">
          <h3 className="heading-2 mb-4">Love What You See?</h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let us create similar magical moments for your special event. 
            Get in touch to discuss your vision and requirements.
          </p>
          <Button
            variant="luxury"
            size="xl"
            onClick={handleWhatsApp}
            className="group"
          >
            Start Planning Your Event
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="relative max-w-6xl max-h-full">
            <Button
              variant="ghost"
              size="icon"
              className="absolute -top-12 right-0 text-white hover:bg-white/20 z-50"
              onClick={closeModal}
            >
              <X className="w-6 h-6" />
            </Button>
            <img
              src={selectedImage}
              alt="Gallery Image"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;