import { useState, useEffect } from "react";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroWedding from "@/assets/hero-wedding.jpg";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: heroWedding,
      title: "Turning Dreams Into",
      subtitle: "Grand Celebrations",
      description: "Creating unforgettable moments with luxury event planning and premium decorations."
    },
    {
      image: heroWedding,
      title: "Your Perfect",
      subtitle: "Wedding Awaits",
      description: "From intimate ceremonies to grand celebrations, we craft your special day with perfection."
    },
    {
      image: heroWedding,
      title: "Memories Made",
      subtitle: "Beautifully",
      description: "Professional event management for birthdays, corporate events, and religious ceremonies."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handleWhatsApp = () => {
    const phoneNumber = "+919999999999";
    const message = "Hi! I want to book an event with Shree Sawariya Events.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden bg-black">
      {/* Background Slider */}
      <div className="absolute inset-0 bg-black">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={`${slide.title} ${slide.subtitle}`}
              className="image-hero"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <div className="fade-in-left">
              <h1 className="hero-text mb-4 luxury-glow">
                {slides[currentSlide].title}
                <br />
                <span className="gradient-text-elegant">
                  {slides[currentSlide].subtitle}
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-white/90 mb-8 leading-relaxed fade-in-left">
                {slides[currentSlide].description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 fade-in-up">
                <Button
                  variant="luxury"
                  size="xl"
                  onClick={handleWhatsApp}
                  className="group"
                >
                  Book Your Event Now
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
                
                <Button variant="ghost-luxury" size="xl" className="group">
                  <Play className="w-5 h-5 mr-2 transition-transform group-hover:scale-110" />
                  Watch Our Work
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-primary shadow-lg scale-125"
                : "bg-white/50 hover:bg-white/70"
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 text-white/70 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;