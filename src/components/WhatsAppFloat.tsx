import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "+919999999999"; // Replace with actual WhatsApp number
    const message = "Hi! I'm interested in your event management services.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="whatsapp-float group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
      
      {/* Pulse animation */}
      <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></div>
    </button>
  );
};

export default WhatsAppFloat;