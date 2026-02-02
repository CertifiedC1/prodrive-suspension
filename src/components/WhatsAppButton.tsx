import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = '254748418583';
  const message = encodeURIComponent(
    "Hello PRODRIVE SUSPENSION! I'm interested in your products."
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={32} className="text-white" fill="white" />
    </a>
  );
};

export default WhatsAppButton;
