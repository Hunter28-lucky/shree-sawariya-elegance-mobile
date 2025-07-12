import { Users, Award, Heart, Clock, Star, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroWedding from "@/assets/hero-wedding.jpg";

const AboutSection = () => {
  const stats = [
    { icon: Heart, number: "500+", label: "Happy Clients" },
    { icon: Award, number: "1000+", label: "Events Completed" },
    { icon: Clock, number: "5+", label: "Years Experience" },
    { icon: Star, number: "4.9", label: "Client Rating" },
  ];

  const values = [
    {
      icon: Heart,
      title: "Passion for Perfection",
      description: "We pour our heart into every event, ensuring each detail reflects your vision and exceeds expectations."
    },
    {
      icon: Users,
      title: "Client-Centric Approach",
      description: "Your satisfaction is our priority. We listen, understand, and deliver experiences tailored to your needs."
    },
    {
      icon: Award,
      title: "Excellence in Execution",
      description: "From planning to execution, we maintain the highest standards of quality and professionalism."
    },
    {
      icon: CheckCircle,
      title: "Reliable & Trustworthy",
      description: "Count on us to deliver on time, within budget, and with complete transparency throughout the process."
    }
  ];

  const testimonials = [
    {
      name: "Priya & Raj Sharma",
      event: "Wedding Ceremony",
      text: "Shree Sawariya Events made our dream wedding come true! Every detail was perfect, from the beautiful decorations to the seamless coordination. Our guests are still talking about how magical it was.",
      rating: 5
    },
    {
      name: "Amit Patel",
      event: "Corporate Conference",
      text: "Professional, efficient, and creative! They handled our annual conference flawlessly. The team's attention to detail and problem-solving skills were impressive. Highly recommended for corporate events.",
      rating: 5
    },
    {
      name: "Sunita Gupta",
      event: "Birthday Celebration",
      text: "They transformed my daughter's birthday party into a fairy tale! The decorations were stunning, and the kids had an amazing time. Thank you for making her day so special.",
      rating: 5
    }
  ];

  const handleWhatsApp = () => {
    const phoneNumber = "+919999999999";
    const message = "Hi! I'd like to know more about Shree Sawariya Events and your services.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="heading-1 mb-4">
            About <span className="gradient-text">Shree Sawariya Events</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Creating magical moments and unforgettable experiences through passionate event planning, 
            innovative design, and flawless execution since 2019.
          </p>
        </div>

        {/* Our Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="fade-in-left">
            <h3 className="heading-2 mb-6">Our Story</h3>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Founded in 2019 with a vision to transform ordinary occasions into extraordinary celebrations, 
                Shree Sawariya Events has grown from a small family business to one of the most trusted 
                event management companies in the region.
              </p>
              <p>
                Our journey began with a simple belief: every celebration deserves to be special. 
                Whether it's a traditional Indian wedding, a milestone birthday, a corporate gathering, 
                or a sacred religious ceremony, we bring the same level of passion, creativity, and 
                attention to detail to every event.
              </p>
              <p>
                Today, we're proud to have created magical moments for over 500 happy families and 
                businesses, earning their trust through our commitment to excellence and personalized service.
              </p>
            </div>
            <Button
              variant="luxury"
              size="lg"
              className="mt-8 group"
              onClick={handleWhatsApp}
            >
              Start Your Journey With Us
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          
          <div className="fade-in-right">
            <div className="relative">
              <img
                src={heroWedding}
                alt="Our team at work"
                className="image-elegant w-full rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent rounded-2xl"></div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground p-4 rounded-xl shadow-lg">
                <Star className="w-6 h-6" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-accent text-accent-foreground p-4 rounded-xl shadow-lg">
                <Heart className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className={`card-elegant text-center py-8 hover:scale-105 transition-all duration-500 ${
                index % 2 === 0 ? 'fade-in-left' : 'fade-in-right'
              }`}
            >
              <stat.icon className="w-12 h-12 text-primary mx-auto mb-4" />
              <div className="text-3xl font-bold text-foreground mb-2 gradient-text">{stat.number}</div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Our Values Section */}
        <div className="mb-20">
          <div className="text-center mb-16 fade-in-up">
            <h3 className="heading-2 mb-4">
              Our <span className="gradient-text">Core Values</span>
            </h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              These principles guide everything we do and shape the experience we create for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className={`card-luxury p-8 group hover:scale-105 transition-all duration-500 ${
                  index % 2 === 0 ? 'fade-in-left' : 'fade-in-right'
                }`}
              >
                <div className="bg-primary/10 p-4 rounded-lg w-fit mb-6 group-hover:bg-primary/20 transition-colors">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h4 className="heading-3 mb-4 group-hover:text-primary transition-colors">{value.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div>
          <div className="text-center mb-16 fade-in-up">
            <h3 className="heading-2 mb-4">
              What Our <span className="gradient-text">Clients Say</span>
            </h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Don't just take our word for it. Here's what our happy clients have to say about their experience with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className={`card-elegant p-6 hover:scale-105 transition-all duration-500 ${
                  index % 2 === 0 ? 'fade-in-left' : 'fade-in-right'
                }`}
              >
                {/* Rating Stars */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-muted-foreground italic mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.event}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;