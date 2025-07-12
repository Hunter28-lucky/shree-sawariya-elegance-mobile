import { useState } from "react";
import Layout from "@/components/Layout";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import heroWedding from "@/assets/hero-wedding.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    guestCount: "",
    budget: "",
    message: ""
  });

  const { toast } = useToast();

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 99999 99999", "+91 88888 88888"],
      action: () => window.open("tel:+919999999999", "_self")
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      details: ["Chat instantly", "Quick responses"],
      action: () => {
        const phoneNumber = "+919999999999";
        const message = "Hi! I'd like to inquire about your event management services.";
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, "_blank");
      }
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@shreesawariyaevents.com", "events@shreesawariya.com"],
      action: () => window.open("mailto:info@shreesawariyaevents.com", "_self")
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["123 Event Plaza", "Mumbai, Maharashtra"],
      action: () => window.open("https://maps.google.com", "_blank")
    }
  ];

  const businessHours = [
    { day: "Monday - Friday", time: "9:00 AM - 7:00 PM" },
    { day: "Saturday", time: "10:00 AM - 6:00 PM" },
    { day: "Sunday", time: "11:00 AM - 5:00 PM" }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message with form data
    const message = `
New Event Inquiry:

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Event Type: ${formData.eventType}
Event Date: ${formData.eventDate}
Guest Count: ${formData.guestCount}
Budget: ${formData.budget}

Message: ${formData.message}
    `.trim();

    const phoneNumber = "+919999999999";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");

    toast({
      title: "Inquiry Sent!",
      description: "We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      eventType: "",
      eventDate: "",
      guestCount: "",
      budget: "",
      message: ""
    });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-secondary via-secondary/80 to-accent/20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroWedding}
            alt="Contact Us"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-secondary/70"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="heading-1 text-secondary-foreground mb-6 fade-in-up">
            Get In <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-xl text-secondary-foreground/80 max-w-3xl mx-auto leading-relaxed fade-in-up">
            Ready to start planning your dream event? We're here to help bring your vision to life. 
            Contact us today for a free consultation and personalized quote.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Contact Form */}
            <div className="lg:col-span-2 fade-in-left">
              <Card className="card-luxury p-8">
                <h2 className="heading-2 mb-8">Send Us Your Event Details</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        placeholder="+91 99999 99999"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="eventType">Event Type *</Label>
                      <Input
                        id="eventType"
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleInputChange}
                        required
                        placeholder="Wedding, Birthday, Corporate, etc."
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="eventDate">Event Date</Label>
                      <Input
                        id="eventDate"
                        name="eventDate"
                        type="date"
                        value={formData.eventDate}
                        onChange={handleInputChange}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="guestCount">Guest Count</Label>
                      <Input
                        id="guestCount"
                        name="guestCount"
                        type="number"
                        value={formData.guestCount}
                        onChange={handleInputChange}
                        placeholder="Number of guests"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="budget">Budget Range</Label>
                      <Input
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        placeholder="₹50,000 - ₹1,00,000"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Event Details & Special Requirements</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your vision, preferences, and any special requirements..."
                      rows={5}
                    />
                  </div>

                  <Button type="submit" variant="luxury" size="lg" className="w-full group">
                    Send Inquiry
                    <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </form>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8 fade-in-right">
              
              {/* Contact Methods */}
              <Card className="card-elegant p-6">
                <h3 className="heading-3 mb-6">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-4 cursor-pointer group"
                      onClick={info.action}
                    >
                      <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-muted-foreground text-sm">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Business Hours */}
              <Card className="card-elegant p-6">
                <h3 className="heading-3 mb-6 flex items-center">
                  <Clock className="w-6 h-6 text-primary mr-2" />
                  Business Hours
                </h3>
                <div className="space-y-3">
                  {businessHours.map((hours, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-muted-foreground">{hours.day}</span>
                      <span className="font-medium text-foreground">{hours.time}</span>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Quick Action Buttons */}
              <div className="space-y-4">
                <Button
                  variant="whatsapp"
                  size="lg"
                  className="w-full"
                  onClick={() => {
                    const phoneNumber = "+919999999999";
                    const message = "Hi! I'd like to get a quick quote for my event.";
                    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                    window.open(whatsappUrl, "_blank");
                  }}
                >
                  <MessageCircle className="w-5 h-5" />
                  Quick WhatsApp Chat
                </Button>
                
                <Button
                  variant="elegant"
                  size="lg"
                  className="w-full"
                  onClick={() => window.open("tel:+919999999999", "_self")}
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </Button>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-20 fade-in-up">
            <Card className="card-luxury p-8">
              <h3 className="heading-3 mb-6 text-center">Visit Our Office</h3>
              <div className="bg-muted/30 rounded-lg h-64 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                  <p className="text-lg font-semibold mb-2">123 Event Plaza, Andheri West</p>
                  <p className="text-muted-foreground mb-4">Mumbai, Maharashtra 400053</p>
                  <Button
                    variant="outline"
                    onClick={() => window.open("https://maps.google.com", "_blank")}
                  >
                    Open in Google Maps
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;