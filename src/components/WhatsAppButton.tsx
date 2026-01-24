import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = '254700000000';
  const message = encodeURIComponent(
    'Hello ProDrive Suspension! I am interested in your 4x4 suspension products.'
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
