import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Filter, X } from "lucide-react";
import heroWedding from "@/assets/hero-wedding.jpg";
import serviceBirthday from "@/assets/service-birthday.jpg";
import serviceCorporate from "@/assets/service-corporate.jpg";
import serviceReligious from "@/assets/service-religious.jpg";

const Gallery = () => {
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
    {
      id: 9,
      src: heroWedding,
      category: "wedding",
      title: "Destination Wedding",
      description: "Luxury destination wedding arrangements"
    },
    {
      id: 10,
      src: serviceBirthday,
      category: "birthday",
      title: "Anniversary Celebration",
      description: "Romantic anniversary party decoration"
    },
    {
      id: 11,
      src: serviceCorporate,
      category: "corporate",
      title: "Awards Ceremony",
      description: "Corporate awards and recognition event"
    },
    {
      id: 12,
      src: serviceReligious,
      category: "religious",
      title: "Wedding Rituals",
      description: "Traditional wedding ceremony rituals"
    }
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

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-secondary via-secondary/80 to-accent/20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroWedding}
            alt="Our Gallery"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-secondary/70"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="heading-1 text-secondary-foreground mb-6 fade-in-up">
            Our <span className="gradient-text">Event Gallery</span>
          </h1>
          <p className="text-xl text-secondary-foreground/80 max-w-3xl mx-auto leading-relaxed fade-in-up">
            Explore our portfolio of successfully executed events. From intimate celebrations 
            to grand festivities, witness the magic we create for our clients.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  className="transition-all duration-300"
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <Card
                key={image.id}
                className={`group cursor-pointer overflow-hidden p-0 border-none shadow-lg hover:shadow-xl transition-all duration-300 ${
                  index % 2 === 0 ? 'fade-in-left' : 'fade-in-right'
                }`}
                onClick={() => handleImageClick(image.src)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="font-semibold text-lg mb-1">{image.title}</h3>
                      <p className="text-sm text-white/80">{image.description}</p>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-primary/90 text-primary-foreground px-2 py-1 rounded text-xs font-medium capitalize">
                    {image.category}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12 fade-in-up">
            <Button variant="elegant" size="lg">
              Load More Images
            </Button>
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center bg-gradient-to-r from-muted/30 to-muted/10 rounded-2xl p-12 fade-in-up">
            <h2 className="heading-2 mb-4">Love What You See?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let us create similar magical moments for your special event. 
              Get in touch to discuss your vision and requirements.
            </p>
            <Button
              variant="luxury"
              size="xl"
              onClick={() => {
                const phoneNumber = "+919999999999";
                const message = "Hi! I loved your gallery and want to discuss my event requirements.";
                const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, "_blank");
              }}
            >
              Start Planning Your Event
            </Button>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="relative max-w-5xl max-h-full">
            <Button
              variant="ghost"
              size="icon"
              className="absolute -top-12 right-0 text-white hover:bg-white/20"
              onClick={closeModal}
            >
              <X className="w-6 h-6" />
            </Button>
            <img
              src={selectedImage}
              alt="Gallery Image"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Gallery;