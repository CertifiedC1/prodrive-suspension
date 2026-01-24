import { Target, Eye, Users, Award, CheckCircle } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Award,
      title: 'Quality',
      description: 'We only stock and recommend products that meet our rigorous quality standards.',
    },
    {
      icon: Users,
      title: 'Customer First',
      description: 'Your satisfaction drives everything we do. We listen, advise, and deliver.',
    },
    {
      icon: CheckCircle,
      title: 'Expertise',
      description: 'Years of hands-on experience with 4x4 and Land Cruiser suspension systems.',
    },
  ];

  const teamMembers = [
    {
      name: 'Isaac Irungu',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      description: 'Passionate about 4x4 vehicles and African adventures for over 10 years.',
    },
    {
      name: 'Technical Team',
      role: 'Suspension Experts',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop',
      description: 'Certified professionals specializing in Land Cruiser and off-road systems.',
    },
    {
      name: 'Support Team',
      role: 'Customer Service',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop',
      description: 'Dedicated to ensuring your experience with ProDrive is exceptional.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-32 bg-secondary">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-semibold mb-6">
              🇰🇪 About ProDrive
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-secondary-foreground mb-6">
              Kenya's Trusted 4x4 Suspension Specialist
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Built on passion, expertise, and an unwavering commitment to quality.
              We are ProDrive Suspension.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
                From Passion to Profession
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                ProDrive Suspension was born from a deep love for off-road adventures and a
                frustration with the lack of quality suspension solutions in Kenya. Founded by
                Isaac Irungu, our company has grown from a small workshop into one of Kenya's
                most trusted names in 4x4 suspension.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                We specialize in Land Cruiser and 4x4 suspension systems, understanding that
                Kenyan roads and off-road trails demand more from your vehicle. From the bumpy
                streets of Nairobi to the rugged terrains of the Rift Valley, our products are
                tested and proven to perform.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                As an authorized CRAGSMAN Suspension Kits dealer, we bring world-class
                products to the Kenyan market, combined with local expertise and unmatched
                customer service.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=400&h=500&fit=crop"
                alt="Off-road vehicle"
                className="rounded-xl shadow-lg w-full h-64 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=500&fit=crop"
                alt="Suspension work"
                className="rounded-xl shadow-lg w-full h-64 object-cover mt-8"
              />
              <img
                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&h=500&fit=crop"
                alt="Quality parts"
                className="rounded-xl shadow-lg w-full h-64 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&h=500&fit=crop"
                alt="4x4 adventure"
                className="rounded-xl shadow-lg w-full h-64 object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="card-feature">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <Target size={32} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To provide Kenyan and East African 4x4 enthusiasts with premium suspension
                solutions that enhance vehicle performance, safety, and off-road capability.
                We aim to be the go-to partner for Land Cruiser owners and off-road adventurers.
              </p>
            </div>
            <div className="card-feature">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <Eye size={32} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To be East Africa's leading 4x4 suspension specialist, known for exceptional
                quality, expertise, and customer satisfaction. We envision a future where every
                off-road vehicle in Kenya is equipped with reliable, high-performance suspension.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4">
              What Drives Us Forward
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <value.icon size={40} className="text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Our Team
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mt-4">
              Meet the ProDrive Family 🇰🇪
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="bg-secondary-foreground/5 rounded-xl p-6 text-center group hover:bg-secondary-foreground/10 transition-all duration-300"
              >
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 ring-4 ring-primary/20 group-hover:ring-primary transition-all duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-secondary-foreground">{member.name}</h3>
                <p className="text-primary font-medium mb-4">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
