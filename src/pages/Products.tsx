import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Eye, X } from 'lucide-react';

// Import product images
import controlArm1Img from '@/assets/products/control-arm-1.jpg';
import controlArm2Img from '@/assets/products/control-arm-2.jpg';
import swayBarLinksImg from '@/assets/products/sway-bar-links.jpg';
import cragsmanShocksImg from '@/assets/products/cragsman-shocks.jpg';
import coilSpringsImg from '@/assets/products/coil-springs.jpg';
import adjustableLinksImg from '@/assets/products/adjustable-links.jpg';
import cragsmanSetImg from '@/assets/products/cragsman-set.jpg';

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
      title: 'Upper Control Arms',
      description:
        'Heavy-duty upper control arms designed for Land Cruiser and 4x4 vehicles. Precision engineered for improved suspension geometry and articulation.',
      price: 'KES 35,000',
      image: controlArm1Img,
      category: 'Control Arms',
      features: [
        'Heavy-duty steel construction',
        'Improved suspension geometry',
        'Enhanced off-road articulation',
        'Land Cruiser compatible',
      ],
    },
    {
      id: 2,
      title: 'CRAGSMAN Nitrogas Shocks',
      description:
        'Premium CRAGSMAN nitrogen gas shock absorbers. 1 Year / 40,000km warranty. Superior damping for all terrain conditions.',
      price: 'KES 45,000',
      image: cragsmanShocksImg,
      category: 'Shock Absorbers',
      features: [
        'Nitrogen gas charged',
        '1 Year / 40,000km warranty',
        'Chrome piston rod',
        'All-terrain performance',
      ],
    },
    {
      id: 3,
      title: 'Adjustable Sway Bar Links',
      description:
        'High-quality adjustable sway bar links with polyurethane bushings. Perfect for lifted vehicles requiring precise alignment.',
      price: 'KES 18,000',
      image: swayBarLinksImg,
      category: 'Adjustable Links',
      features: [
        'Fully adjustable length',
        'Heavy-duty construction',
        'Polyurethane bushings',
        'Easy installation',
      ],
    },
    {
      id: 4,
      title: 'CRAGSMAN Coil Springs',
      description:
        'Premium CRAGSMAN coil springs in signature yellow. Designed for heavy loads and rough terrain with progressive rate technology.',
      price: 'KES 28,000',
      image: coilSpringsImg,
      category: 'Springs',
      features: [
        'Progressive spring rate',
        'Heavy-duty construction',
        'Increased load capacity',
        'CRAGSMAN quality',
      ],
    },
    {
      id: 5,
      title: '4x4 Upper Control Arms Pro',
      description:
        'Professional-grade upper control arms with uniball joint for maximum performance. Perfect for serious off-roaders.',
      price: 'KES 42,000',
      image: controlArm2Img,
      category: 'Control Arms',
      features: [
        'Uniball joint design',
        'Maximum articulation',
        'Heavy-duty bushings',
        'Track-tested performance',
      ],
    },
    {
      id: 6,
      title: 'Performance End Links',
      description:
        'High-performance adjustable end links with heavy-duty ball joints. Available in various lengths for custom setups.',
      price: 'KES 15,000',
      image: adjustableLinksImg,
      category: 'Adjustable Links',
      features: [
        'Precision ball joints',
        'Adjustable length',
        'Heavy-duty construction',
        'Multiple color options',
      ],
    },
    {
      id: 7,
      title: 'CRAGSMAN Shock Set (4pc)',
      description:
        'Complete set of 4 CRAGSMAN shock absorbers. Front and rear matched set for balanced performance across all terrains.',
      price: 'KES 85,000',
      image: cragsmanSetImg,
      category: 'Complete Kits',
      features: [
        '4 shocks included',
        'Front & rear matched set',
        'CRAGSMAN quality',
        'Complete hardware kit',
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
              <div key={product.id} className="card-product group">
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
