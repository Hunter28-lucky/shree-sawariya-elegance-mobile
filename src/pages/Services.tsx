import Layout from "@/components/Layout";
import { Heart, Briefcase, Music, Camera, Users, Star, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroWedding from "@/assets/hero-wedding.jpg";
import serviceBirthday from "@/assets/service-birthday.jpg";
import serviceCorporate from "@/assets/service-corporate.jpg";
import serviceReligious from "@/assets/service-religious.jpg";

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "Wedding Planning & Management",
      description: "Complete wedding solutions from traditional Indian ceremonies to modern destination weddings.",
      image: heroWedding,
      price: "Starting from ₹50,000",
      features: [
        "Complete event planning and coordination",
        "Venue decoration with premium flowers",
        "Catering management and menu planning",
        "Photography and videography",
        "Entertainment and music arrangement",
        "Guest accommodation assistance",
        "Traditional and modern themes",
        "Bridal makeup and styling coordination"
      ],
      popular: true
    },
    {
      icon: Star,
      title: "Birthday & Anniversary Celebrations",
      description: "Memorable celebrations for all ages with creative themes and personalized touches.",
      image: serviceBirthday,
      price: "Starting from ₹15,000",
      features: [
        "Custom theme decoration",
        "Cake design and catering",
        "Entertainment and games",
        "Photography coverage",
        "Balloon arrangements",
        "Party favors and gifts",
        "Music and DJ services",
        "Venue booking assistance"
      ],
      popular: false
    },
    {
      icon: Briefcase,
      title: "Corporate Events & Conferences",
      description: "Professional corporate event management for conferences, launches, and team building activities.",
      image: serviceCorporate,
      price: "Starting from ₹25,000",
      features: [
        "Conference and seminar setup",
        "Product launch events",
        "Team building activities",
        "Awards and recognition ceremonies",
        "AV equipment and staging",
        "Corporate catering",
        "Registration management",
        "Branding and signage"
      ],
      popular: false
    },
    {
      icon: Users,
      title: "Religious & Cultural Functions",
      description: "Traditional ceremonies with authentic decorations and spiritual arrangements.",
      image: serviceReligious,
      price: "Starting from ₹20,000",
      features: [
        "Pooja and havan arrangements",
        "Traditional decorations",
        "Prasadam and catering",
        "Priest coordination",
        "Religious music arrangement",
        "Flower decorations",
        "Sacred fire setup",
        "Cultural program coordination"
      ],
      popular: false
    },
    {
      icon: Music,
      title: "DJ & Entertainment Services",
      description: "Professional DJ services and entertainment for all types of events.",
      image: heroWedding,
      price: "Starting from ₹8,000",
      features: [
        "Professional DJ with equipment",
        "Sound system setup",
        "Lighting arrangements",
        "Music playlist curation",
        "Live band coordination",
        "Dance floor setup",
        "Microphone and PA system",
        "Special effects and fog machines"
      ],
      popular: false
    },
    {
      icon: Camera,
      title: "Photography & Videography",
      description: "Professional photography and videography services to capture every precious moment.",
      image: serviceBirthday,
      price: "Starting from ₹12,000",
      features: [
        "Event photography coverage",
        "Professional videography",
        "Drone photography (if permitted)",
        "Photo editing and enhancement",
        "Same day photo delivery",
        "Custom photo albums",
        "Digital gallery creation",
        "Live streaming services"
      ],
      popular: false
    }
  ];

  const handleServiceInquiry = (serviceName: string) => {
    const phoneNumber = "+919999999999";
    const message = `Hi! I'm interested in your ${serviceName} service. Please provide a detailed quote and availability.`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-secondary via-secondary/80 to-accent/20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroWedding}
            alt="Our Services"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-secondary/70"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="heading-1 text-secondary-foreground mb-6 fade-in-up">
            Our <span className="gradient-text">Premium Services</span>
          </h1>
          <p className="text-xl text-secondary-foreground/80 max-w-3xl mx-auto leading-relaxed fade-in-up">
            Comprehensive event management solutions tailored to make your special occasions unforgettable. 
            From intimate gatherings to grand celebrations, we handle every detail with precision and elegance.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <Card
                key={service.title}
                className={`card-luxury group relative overflow-hidden ${
                  index % 2 === 0 ? 'fade-in-left' : 'fade-in-right'
                }`}
              >
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute top-4 right-4 z-10 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                    Most Popular
                  </div>
                )}

                {/* Service Image */}
                <div className="relative h-48 overflow-hidden rounded-lg mb-6">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  {/* Icon */}
                  <div className="absolute bottom-4 left-4 bg-white/20 backdrop-blur-sm p-3 rounded-lg">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Price */}
                  <div className="absolute top-4 left-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-lg text-sm font-semibold">
                    {service.price}
                  </div>
                </div>

                {/* Service Content */}
                <div className="space-y-6">
                  <div>
                    <h3 className="heading-3 mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground mb-3">What's Included:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    <Button
                      variant="luxury"
                      className="flex-1 group"
                      onClick={() => handleServiceInquiry(service.title)}
                    >
                      Get Quote
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1"
                      onClick={() => window.open("tel:+919999999999", "_self")}
                    >
                      Call Now
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Bottom CTA Section */}
          <div className="mt-20 text-center bg-gradient-to-r from-muted/30 to-muted/10 rounded-2xl p-12 fade-in-up">
            <h2 className="heading-2 mb-4">Need a Custom Package?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Every event is unique, and we create customized packages to match your vision, 
              budget, and requirements. Let's discuss your dream event!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="luxury"
                size="xl"
                onClick={() => handleServiceInquiry("Custom Package")}
              >
                Discuss Custom Package
              </Button>
              <Button
                variant="elegant"
                size="xl"
                onClick={() => window.open("tel:+919999999999", "_self")}
              >
                Call for Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;