import { ArrowRight, Heart, Briefcase, Music, Camera, Users, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import serviceBirthday from "@/assets/service-birthday.jpg";
import serviceCorporate from "@/assets/service-corporate.jpg";
import serviceReligious from "@/assets/service-religious.jpg";
import heroWedding from "@/assets/hero-wedding.jpg";

const ServicesSection = () => {
  const services = [
    {
      icon: Heart,
      title: "Wedding Planning",
      description: "Complete wedding management from intimate ceremonies to grand celebrations with traditional and modern themes.",
      image: heroWedding,
      features: ["Venue Decoration", "Catering Management", "Photography", "Entertainment"],
      popular: true
    },
    {
      icon: Star,
      title: "Birthday Parties",
      description: "Memorable birthday celebrations for all ages with creative themes, decorations, and entertainment.",
      image: serviceBirthday,
      features: ["Theme Decoration", "Cake & Catering", "Entertainment", "Photography"],
      popular: false
    },
    {
      icon: Briefcase,
      title: "Corporate Events",
      description: "Professional corporate event management including conferences, seminars, product launches, and team building.",
      image: serviceCorporate,
      features: ["Stage Setup", "AV Equipment", "Catering", "Coordination"],
      popular: false
    },
    {
      icon: Users,
      title: "Religious Functions",
      description: "Traditional ceremonies and religious events with authentic decorations and spiritual ambiance.",
      image: serviceReligious,
      features: ["Traditional Decor", "Ritual Setup", "Catering", "Music Arrangement"],
      popular: false
    },
    {
      icon: Music,
      title: "DJ & Music",
      description: "Professional DJ services and music arrangements for all types of events and celebrations.",
      image: heroWedding,
      features: ["Live DJ", "Sound System", "Lighting", "Music Playlist"],
      popular: false
    },
    {
      icon: Camera,
      title: "Photography",
      description: "Professional event photography and videography to capture every precious moment beautifully.",
      image: serviceBirthday,
      features: ["Event Photography", "Videography", "Editing", "Digital Delivery"],
      popular: false
    }
  ];

  const handleServiceInquiry = (serviceName: string) => {
    const phoneNumber = "+919999999999";
    const message = `Hi! I'm interested in your ${serviceName} service. Please provide more details.`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="heading-1 mb-4">
            Our <span className="gradient-text">Premium Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From intimate gatherings to grand celebrations, we create unforgettable experiences 
            with attention to every detail and luxury that exceeds expectations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className={`card-elegant group cursor-pointer ${
                index % 2 === 0 ? 'fade-in-left' : 'fade-in-right'
              }`}
              onClick={() => handleServiceInquiry(service.title)}
            >
              {/* Service Image */}
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                    Most Popular
                  </div>
                )}

                {/* Icon */}
                <div className="absolute bottom-4 left-4 bg-white/20 backdrop-blur-sm p-3 rounded-lg">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Service Content */}
              <div className="space-y-4">
                <h3 className="heading-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary/60 rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button
                  variant="ghost-luxury"
                  className="w-full group-hover:bg-primary/10 transition-all duration-300"
                >
                  Get Quote
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 fade-in-up">
          <p className="text-lg text-muted-foreground mb-6">
            Don't see what you're looking for? We customize events for every occasion.
          </p>
          <Button
            variant="luxury"
            size="xl"
            onClick={() => handleServiceInquiry("Custom Event Planning")}
            className="group"
          >
            Discuss Custom Event
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;