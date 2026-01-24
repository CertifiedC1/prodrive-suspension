import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Eye, X } from 'lucide-react';

interface Product {
  id: number;
  title: string;
  description: string;
  price: string;
  image: string;
  category: string;
  features: string[];
}

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const products: Product[] = [
    {
      id: 1,
      title: 'Heavy Duty Coilover Kit',
      description:
        'Premium heavy-duty coilover suspension system designed for Land Cruiser 70, 80, and 100 series. Built to handle the toughest African terrain.',
      price: 'KES 85,000',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
      category: 'Coilovers',
      features: [
        'Heavy-duty construction',
        'Adjustable ride height',
        'Improved handling',
        'Land Cruiser compatible',
      ],
    },
    {
      id: 2,
      title: 'Nitrogas Shock Absorbers',
      description:
        'High-performance nitrogen gas shocks that provide superior damping and consistent performance in all conditions.',
      price: 'KES 45,000',
      image: 'https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=600&h=400&fit=crop',
      category: 'Shock Absorbers',
      features: [
        'Nitrogen gas charged',
        'Fade-resistant',
        'All-terrain performance',
        'Long service life',
      ],
    },
    {
      id: 3,
      title: 'Suspension Control Arms',
      description:
        'Precision-engineered control arms for improved wheel alignment and suspension geometry. Essential for serious off-roaders.',
      price: 'KES 35,000',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&h=400&fit=crop',
      category: 'Control Components',
      features: [
        'CNC machined',
        'Improved articulation',
        'Heavy-duty bushings',
        'Precise geometry',
      ],
    },
    {
      id: 4,
      title: 'Adjustable Panhard Rods',
      description:
        'Adjustable panhard rods to correct axle centering after lift installation. Critical for proper handling.',
      price: 'KES 25,000',
      image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&h=400&fit=crop',
      category: 'Adjustable Links',
      features: [
        'Fully adjustable',
        'Corrects axle alignment',
        'Strong construction',
        'Easy installation',
      ],
    },
    {
      id: 5,
      title: 'CRAGSMAN Complete Lift Kit',
      description:
        'Premium CRAGSMAN suspension lift kit including shocks, springs, and all necessary hardware. The ultimate upgrade.',
      price: 'KES 150,000',
      image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=600&h=400&fit=crop',
      category: 'Complete Kits',
      features: [
        'Complete package',
        '2-4 inch lift options',
        'All hardware included',
        'Professional grade',
      ],
    },
    {
      id: 6,
      title: 'Heavy Duty Leaf Springs',
      description:
        'Reinforced leaf springs designed for heavy loads and rough terrain. Perfect for overlanding and work vehicles.',
      price: 'KES 55,000',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
      category: 'Springs',
      features: [
        'Increased load capacity',
        'Progressive rate',
        'Rust-resistant coating',
        'Heavy-duty construction',
      ],
    },
  ];

  const categories = ['All', ...new Set(products.map((p) => p.category))];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProducts =
    activeCategory === 'All'
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-32 bg-secondary">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-semibold mb-6">
              🇰🇪 Premium Products
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-secondary-foreground mb-6">
              4x4 Suspension Products
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              High-quality suspension components for Land Cruisers and off-road vehicles.
              Built for African terrain.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="section-padding">
        <div className="container-custom">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'bg-card text-foreground hover:bg-primary/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="card-product">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-secondary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-secondary hover:bg-primary hover:text-white transition-colors"
                      aria-label="View product details"
                    >
                      <Eye size={24} />
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-primary text-sm font-medium">{product.category}</span>
                  <h3 className="text-xl font-bold text-foreground mt-2 mb-3">{product.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-primary transition-colors text-sm font-medium"
                    >
                      <ShoppingCart size={18} />
                      Inquire
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="bg-card rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.title}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-secondary hover:bg-primary hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-8">
              <span className="text-primary text-sm font-medium">{selectedProduct.category}</span>
              <h2 className="text-2xl font-bold text-foreground mt-2 mb-4">
                {selectedProduct.title}
              </h2>
              <p className="text-muted-foreground mb-6">{selectedProduct.description}</p>
              <div className="mb-6">
                <h4 className="font-semibold text-foreground mb-3">Features:</h4>
                <ul className="space-y-2">
                  {selectedProduct.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3 text-muted-foreground">
                      <span className="w-2 h-2 bg-primary rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center justify-between pt-6 border-t">
                <span className="text-3xl font-bold text-primary">{selectedProduct.price}</span>
                <Link
                  to="/contact"
                  className="btn-primary"
                  onClick={() => setSelectedProduct(null)}
                >
                  Get Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-10">
            We stock a wide range of 4x4 suspension products. Contact us with your specific
            requirements and we'll help you find the perfect solution.
          </p>
          <Link to="/contact" className="btn-secondary">
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Products;
