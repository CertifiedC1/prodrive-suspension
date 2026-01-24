import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Instagram, Facebook } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, 'Name is required')
    .max(100, 'Name must be less than 100 characters'),
  email: z
    .string()
    .trim()
    .email('Please enter a valid email address')
    .max(255, 'Email must be less than 255 characters'),
  phone: z
    .string()
    .trim()
    .optional()
    .refine((val) => !val || /^[+]?[\d\s-]{7,20}$/.test(val), {
      message: 'Please enter a valid phone number',
    }),
  subject: z
    .string()
    .trim()
    .min(1, 'Subject is required')
    .max(200, 'Subject must be less than 200 characters'),
  message: z
    .string()
    .trim()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must be less than 1000 characters'),
});

type ContactForm = z.infer<typeof contactSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactForm, string>>>({});
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactForm]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    const result = contactSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactForm, string>> = {};
      result.error.errors.forEach((error) => {
        if (error.path[0]) {
          fieldErrors[error.path[0] as keyof ContactForm] = error.message;
        }
      });
      setErrors(fieldErrors);
      setIsSubmitting(false);
      toast({
        title: 'Validation Error',
        description: 'Please check the form for errors.',
        variant: 'destructive',
      });
      return;
    }

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: 'Message Sent!',
      description: 'Thank you for contacting ProDrive Suspension. We will get back to you soon.',
    });

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      content: 'Nairobi, Kenya 🇰🇪',
      link: 'https://maps.google.com/?q=Nairobi,Kenya',
    },
    {
      icon: Phone,
      title: 'Phone / WhatsApp',
      content: '+254 7XX XXX XXX',
      link: 'tel:+254700000000',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@prodrivesuspension.co.ke',
      link: 'mailto:info@prodrivesuspension.co.ke',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      content: 'Mon - Sat: 8:00 AM - 6:00 PM',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-32 bg-secondary">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-semibold mb-6">
              🇰🇪 Get In Touch
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-secondary-foreground mb-6">
              Contact ProDrive Suspension
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Ready to upgrade your suspension? Have questions? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Send Us a Message</h2>

              {isSubmitted ? (
                <div className="bg-accent/10 border border-accent/20 rounded-xl p-8 text-center">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={32} className="text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground">
                    Thank you for reaching out. We'll get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border bg-background text-foreground transition-all focus:outline-none focus:ring-2 focus:ring-primary ${
                          errors.name ? 'border-destructive' : 'border-input'
                        }`}
                        placeholder="Your name"
                      />
                      {errors.name && (
                        <p className="text-destructive text-sm mt-1">{errors.name}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border bg-background text-foreground transition-all focus:outline-none focus:ring-2 focus:ring-primary ${
                          errors.email ? 'border-destructive' : 'border-input'
                        }`}
                        placeholder="your@email.com"
                      />
                      {errors.email && (
                        <p className="text-destructive text-sm mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border bg-background text-foreground transition-all focus:outline-none focus:ring-2 focus:ring-primary ${
                          errors.phone ? 'border-destructive' : 'border-input'
                        }`}
                        placeholder="+254 7XX XXX XXX"
                      />
                      {errors.phone && (
                        <p className="text-destructive text-sm mt-1">{errors.phone}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border bg-background text-foreground transition-all focus:outline-none focus:ring-2 focus:ring-primary ${
                          errors.subject ? 'border-destructive' : 'border-input'
                        }`}
                      >
                        <option value="">Select a subject</option>
                        <option value="Product Inquiry">Product Inquiry</option>
                        <option value="Price Quote">Price Quote</option>
                        <option value="Technical Support">Technical Support</option>
                        <option value="Installation">Installation</option>
                        <option value="General Question">General Question</option>
                      </select>
                      {errors.subject && (
                        <p className="text-destructive text-sm mt-1">{errors.subject}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className={`w-full px-4 py-3 rounded-lg border bg-background text-foreground transition-all focus:outline-none focus:ring-2 focus:ring-primary resize-none ${
                        errors.message ? 'border-destructive' : 'border-input'
                      }`}
                      placeholder="Tell us about your requirements..."
                    />
                    {errors.message && (
                      <p className="text-destructive text-sm mt-1">{errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin mr-2">⏳</span>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} className="mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Contact Information</h2>

              <div className="space-y-6 mb-10">
                {contactInfo.map((info) => (
                  <div key={info.title} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <info.icon size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{info.title}</h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          target={info.link.startsWith('http') ? '_blank' : undefined}
                          rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mb-10">
                <h3 className="font-semibold text-foreground mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.instagram.com/prodrive_suspension"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-primary-foreground hover:scale-110 transition-transform"
                    aria-label="Instagram"
                  >
                    <Instagram size={24} />
                  </a>
                  <a
                    href="https://www.facebook.com/prodrivesuspension"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center text-secondary-foreground hover:scale-110 transition-transform"
                    aria-label="Facebook"
                  >
                    <Facebook size={24} />
                  </a>
                  <a
                    href="https://wa.me/254700000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center text-accent-foreground hover:scale-110 transition-transform"
                    aria-label="WhatsApp"
                  >
                    <Phone size={24} />
                  </a>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-card rounded-xl overflow-hidden shadow-lg">
                <div className="aspect-video bg-muted flex items-center justify-center">
                  <div className="text-center">
                    <MapPin size={48} className="text-primary mx-auto mb-4" />
                    <p className="text-muted-foreground">Nairobi, Kenya 🇰🇪</p>
                    <a
                      href="https://maps.google.com/?q=Nairobi,Kenya"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary text-sm hover:underline mt-2 inline-block"
                    >
                      View on Google Maps
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick WhatsApp CTA */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Need a Quick Response?
          </h2>
          <p className="text-primary-foreground/90 text-lg max-w-2xl mx-auto mb-10">
            Chat with us directly on WhatsApp for instant support and quick quotes.
          </p>
          <a
            href="https://wa.me/254700000000?text=Hello%20ProDrive%20Suspension!%20I%20am%20interested%20in%20your%204x4%20suspension%20products."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 bg-card text-foreground rounded-xl font-bold text-lg hover:opacity-90 transition-colors shadow-lg"
          >
            <Phone size={24} />
            Chat on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
