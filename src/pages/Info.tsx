import { Link } from 'react-router-dom';
import { AlertTriangle, TrendingUp, Wrench, Lightbulb, ChevronRight } from 'lucide-react';

const Info = () => {
  const topics = [
    {
      icon: AlertTriangle,
      title: 'Why Suspension Matters',
      content: `Your vehicle's suspension system is crucial for safety, comfort, and performance. In Kenya, where roads range from smooth highways to rough off-road trails, having a reliable suspension system is not just a luxury—it's a necessity.

A good suspension system:
• Keeps your tires in contact with the road for better traction
• Absorbs shocks from bumps and potholes
• Improves steering response and vehicle control
• Protects your vehicle's chassis and components
• Enhances passenger comfort on long journeys`,
      image: 'https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=600&h=400&fit=crop',
    },
    {
      icon: TrendingUp,
      title: 'When to Upgrade Your Suspension',
      content: `Consider upgrading your suspension if you experience any of these signs:

1. Excessive bouncing after hitting bumps
2. Nose-diving when braking
3. Uneven tire wear patterns
4. Vehicle swaying or rolling during turns
5. Difficulty steering or handling
6. Bottoming out on rough roads
7. Planning to carry heavier loads regularly
8. Preparing for serious off-road adventures

For Land Cruiser owners especially, upgrading to a quality suspension system transforms the driving experience both on and off-road.`,
      image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&h=400&fit=crop',
    },
    {
      icon: Wrench,
      title: 'Common Suspension Problems',
      content: `Understanding common suspension issues helps you maintain your vehicle better:

Oil Leaks: Worn seals in shock absorbers cause fluid leaks, reducing damping effectiveness.

Worn Bushings: Rubber bushings deteriorate over time, causing clunking noises and loose handling.

Broken Springs: Weakened or broken springs affect ride height and handling characteristics.

Damaged Shocks: Worn shocks fail to control spring oscillation, causing bouncy rides.

Alignment Issues: Poor alignment accelerates tire wear and affects handling.

If you notice any of these issues, visit ProDrive Suspension for a professional inspection.`,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
    },
  ];

  const tips = [
    {
      title: 'Regular Inspections',
      description: 'Have your suspension inspected every 20,000 km or after major off-road trips.',
    },
    {
      title: 'Match Components',
      description: 'Always replace suspension components in pairs for balanced performance.',
    },
    {
      title: 'Quality Parts',
      description: 'Invest in quality parts like CRAGSMAN—cheap parts cost more in the long run.',
    },
    {
      title: 'Professional Installation',
      description: 'Have suspension work done by experienced professionals for safety.',
    },
    {
      title: 'Alignment Check',
      description: 'Get a wheel alignment after any suspension work to prevent tire wear.',
    },
    {
      title: 'Load Considerations',
      description: 'Choose springs rated for your typical load—standard, medium, or heavy-duty.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-32 bg-secondary">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-semibold mb-6">
              🇰🇪 Knowledge Center
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-secondary-foreground mb-6">
              Suspension Knowledge Hub
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Learn about suspension systems, maintenance tips, and how to get the best
              performance from your 4x4 vehicle.
            </p>
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-20">
            {topics.map((topic, index) => (
              <div
                key={topic.title}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                      <topic.icon size={28} className="text-primary" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground">{topic.title}</h2>
                  </div>
                  <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                    {topic.content}
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <img
                    src={topic.image}
                    alt={topic.title}
                    className="rounded-2xl shadow-xl w-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Tips Section */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Lightbulb size={32} className="text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Expert Tips for Vehicle Owners
            </h2>
            <p className="text-muted-foreground mt-4">
              Follow these tips to maintain your suspension and extend its lifespan.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tips.map((tip, index) => (
              <div
                key={tip.title}
                className="bg-background p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-primary text-primary-foreground rounded-lg flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <h3 className="font-bold text-foreground">{tip.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="bg-secondary rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-secondary-foreground mb-6">
                  Have More Questions?
                </h2>
                <p className="text-muted-foreground mb-8">
                  Our team of suspension experts is ready to answer all your questions.
                  Whether you need advice on choosing the right parts or want to understand
                  more about your vehicle's suspension, we're here to help.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all"
                >
                  Contact Our Experts
                  <ChevronRight size={20} />
                </Link>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&h=400&fit=crop"
                  alt="4x4 vehicle"
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Upgrade Your Ride?
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-10">
            Now that you understand the importance of quality suspension, let us help you
            find the perfect solution for your vehicle.
          </p>
          <Link to="/products" className="btn-secondary">
            Explore Our Products
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Info;
