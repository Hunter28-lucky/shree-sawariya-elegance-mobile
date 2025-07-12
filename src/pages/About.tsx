import Layout from "@/components/Layout";
import { Users, Award, Heart, Clock, Star, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroWedding from "@/assets/hero-wedding.jpg";

const About = () => {
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

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-secondary via-secondary/80 to-accent/20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroWedding}
            alt="About Us"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-secondary/70"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="heading-1 text-secondary-foreground mb-6 fade-in-up">
            About <span className="gradient-text">Shree Sawariya Events</span>
          </h1>
          <p className="text-xl text-secondary-foreground/80 max-w-3xl mx-auto leading-relaxed fade-in-up">
            Creating magical moments and unforgettable experiences through passionate event planning, 
            innovative design, and flawless execution since 2019.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="fade-in-left">
              <h2 className="heading-2 mb-6">Our Story</h2>
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
                className="mt-8"
                onClick={() => {
                  const phoneNumber = "+919999999999";
                  const message = "Hi! I'd like to know more about Shree Sawariya Events and your services.";
                  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                  window.open(whatsappUrl, "_blank");
                }}
              >
                Start Your Journey With Us
              </Button>
            </div>
            
            <div className="fade-in-right">
              <div className="relative">
                <img
                  src={heroWedding}
                  alt="Our team at work"
                  className="image-elegant w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-muted/30 to-muted/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className={`card-elegant text-center py-8 ${
                  index % 2 === 0 ? 'fade-in-left' : 'fade-in-right'
                }`}
              >
                <stat.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="heading-2 mb-4">
              Our <span className="gradient-text">Core Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              These principles guide everything we do and shape the experience we create for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className={`card-luxury p-8 ${
                  index % 2 === 0 ? 'fade-in-left' : 'fade-in-right'
                }`}
              >
                <value.icon className="w-12 h-12 text-primary mb-6" />
                <h3 className="heading-3 mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="heading-2 mb-4">
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Don't just take our word for it. Here's what our happy clients have to say about their experience with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className={`card-elegant p-6 ${
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
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-secondary via-secondary/90 to-accent/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="heading-2 text-secondary-foreground mb-6 fade-in-up">
            Ready to Create Your <span className="gradient-text">Perfect Event</span>?
          </h2>
          <p className="text-xl text-secondary-foreground/80 mb-8 leading-relaxed fade-in-up">
            Let's turn your vision into reality. Contact us today for a free consultation 
            and discover how we can make your special occasion truly unforgettable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-up">
            <Button
              variant="luxury"
              size="xl"
              onClick={() => {
                const phoneNumber = "+919999999999";
                const message = "Hi! I'd like to schedule a consultation for my upcoming event.";
                const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, "_blank");
              }}
            >
              Get Free Consultation
            </Button>
            <Button
              variant="ghost-luxury"
              size="xl"
              onClick={() => window.open("tel:+919999999999", "_self")}
            >
              Call Now
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;