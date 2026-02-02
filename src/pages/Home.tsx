import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Wrench, HeartHandshake, ChevronRight } from 'lucide-react';

// Import product images for previews
import cragsmanShocksImg from '@/assets/products/cragsman-shocks.jpg';
import coilSpringsImg from '@/assets/products/coil-springs.jpg';
import controlArm1Img from '@/assets/products/control-arm-1.jpg';

const Home = () => {
  const features = [
    {
      icon: Shield,
      title: 'Durable Components',
      description:
        'Heavy-duty suspension systems built to withstand the toughest African terrains and extreme off-road conditions.',
    },
    {
      icon: Wrench,
      title: 'Off-Road Expertise',
      description:
        'Years of experience in 4x4 and Land Cruiser suspension systems. We know what works in Kenya.',
    },
    {
      icon: HeartHandshake,
      title: 'Trusted Support',
      description:
        'Professional installation guidance and after-sales support. Your satisfaction is our priority.',
    },
  ];

  const products = [
    {
      image: cragsmanShocksImg,
      title: 'CRAGSMAN Shocks',
      category: 'Shock Absorbers',
    },
    {
      image: coilSpringsImg,
      title: 'Coil Springs',
      category: 'Springs',
    },
    {
      image: controlArm1Img,
      title: 'Control Arms',
      category: 'Components',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1920&h=1080&fit=crop)',
          }}
        >
          <div className="absolute inset-0 hero-overlay" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-3xl slide-up">
            <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
              🇰🇪 Kenya's Premier 4x4 Suspension Specialist
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              4x4 Suspension Built for{' '}
              <span className="text-gradient">African Terrain</span>
            </h1>
            <p className="text-xl text-white/80 mb-10 leading-relaxed max-w-2xl">
              Reliable suspension systems for Land Cruisers and heavy-duty off-road vehicles.
              Trusted by adventurers across Kenya and East Africa.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/products" className="btn-hero">
                View Products
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link to="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-secondary">
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="slide-up">
              <span className="text-primary font-bold uppercase tracking-wider text-lg md:text-xl">
                Welcome to ProDrive
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
                Your Trusted Partner for 4x4 Suspension Excellence
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                ProDrive Suspension is Kenya's leading specialist in 4x4 and Land Cruiser suspension
                systems. Founded by Isaac Irungu, we bring years of expertise in delivering
                high-quality suspension solutions designed specifically for African roads and
                off-road adventures.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                As an authorized dealer of CRAGSMAN Suspension Kits, we provide premium products
                that combine durability, performance, and reliability. Whether you're navigating
                Nairobi's urban streets or conquering the Maasai Mara, our suspension systems are
                built to perform.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all duration-300"
              >
                Learn More About Us
                <ChevronRight size={20} />
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&h=600&fit=crop"
                alt="4x4 vehicle on African terrain"
                className="rounded-2xl shadow-xl w-full hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4">
              Built for Performance, Trusted for Quality
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="card-feature text-center group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <feature.icon
                    size={32}
                    className="text-primary group-hover:text-primary-foreground transition-colors"
                  />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Preview */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
            <div>
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                Featured Products
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mt-4">
                Premium Suspension Solutions
              </h2>
            </div>
            <Link
              to="/products"
              className="btn-outline border-secondary-foreground/30 text-secondary-foreground hover:bg-primary hover:border-primary"
            >
              View All Products
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product) => (
              <Link
                key={product.title}
                to="/products"
                className="card-product bg-secondary-foreground/5 overflow-hidden group"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <span className="text-primary text-sm font-medium">{product.category}</span>
                  <h3 className="text-xl font-bold text-secondary-foreground mt-2">{product.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Upgrade Your Suspension?
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-10">
            Contact us today for a free consultation and quote. Our experts are ready to help you
            find the perfect suspension solution for your vehicle.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="btn-secondary"
            >
              Contact Us Now
            </Link>
            <a
              href="https://wa.me/254748418583?text=Hello%20PRODRIVE%20SUSPENSION!%20I'm%20interested%20in%20your%20products."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
