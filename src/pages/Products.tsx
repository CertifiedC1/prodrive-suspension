import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Eye, X, Car } from 'lucide-react';

// Import product images
import controlArm1Img from '@/assets/products/control-arm-1.jpg';
import controlArm2Img from '@/assets/products/control-arm-2.jpg';
import swayBarLinksImg from '@/assets/products/sway-bar-links.jpg';
import cragsmanShocksImg from '@/assets/products/cragsman-shocks.jpg';
import coilSpringsImg from '@/assets/products/coil-springs.jpg';
import adjustableLinksImg from '@/assets/products/adjustable-links.jpg';
import cragsmanSetImg from '@/assets/products/cragsman-set.jpg';
import brakeKitBlackImg from '@/assets/products/brake-kit-black.png';
import brakeKitYellowImg from '@/assets/products/brake-kit-yellow.png';
import brakeKitBlueImg from '@/assets/products/brake-kit-blue.png';
import brakeKitRedImg from '@/assets/products/brake-kit-red.png';
import cragsmanCoilSpringsImg from '@/assets/products/cragsman-coil-springs.png';

interface Product {
  id: number;
  title: string;
  description: string;
  price: string;
  priceNote?: string;
  image: string;
  category: string;
  features: string[];
  compatibility?: string[];
}

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const products: Product[] = [
    {
      id: 1,
      title: 'Modified Upper Control Arms',
      description:
        'Heavy-duty modified upper control arms designed for Land Cruiser and 4x4 vehicles. Precision engineered for improved suspension geometry and articulation.',
      price: 'KES 20,000',
      priceNote: 'per pair',
      image: controlArm1Img,
      category: 'Control Arms',
      features: [
        'Heavy-duty steel construction',
        'Improved suspension geometry',
        'Enhanced off-road articulation',
        'Land Cruiser compatible',
      ],
      compatibility: ['Landcruiser Prado 120 & 150 series', '4-Runner'],
    },
    {
      id: 2,
      title: 'CRAGSMAN Nitrogas Shocks (Front)',
      description:
        'Premium CRAGSMAN nitrogen gas shock absorbers for front suspension. 1 Year / 40,000km warranty. Superior damping for all terrain conditions.',
      price: 'KES 13,000',
      priceNote: 'each',
      image: cragsmanShocksImg,
      category: 'Shock Absorbers',
      features: [
        'Nitrogen gas charged',
        '1 Year / 40,000km warranty',
        'Chrome piston rod',
        'All-terrain performance',
      ],
      compatibility: ['Fortuner', 'Landcruiser Prado 120 & 150 series', '4-Runner', 'FJ Cruiser', 'Hilux Vigo & Vevo (front only)'],
    },
    {
      id: 3,
      title: 'CRAGSMAN Nitrogas Shocks (Rear)',
      description:
        'Premium CRAGSMAN nitrogen gas shock absorbers for rear suspension. Designed for heavy loads and rough terrain.',
      price: 'KES 10,000',
      priceNote: 'each',
      image: cragsmanSetImg,
      category: 'Shock Absorbers',
      features: [
        'Nitrogen gas charged',
        'Heavy load capacity',
        'Chrome piston rod',
        'Durability tested',
      ],
      compatibility: ['Fortuner', 'Landcruiser Prado 120 & 150 series', '4-Runner', 'FJ Cruiser'],
    },
    {
      id: 4,
      title: 'Adjustable Sway Bar Links',
      description:
        'High-quality adjustable sway bar links with polyurethane bushings. Perfect for lifted vehicles requiring precise alignment.',
      price: 'KES 20,000',
      priceNote: 'per set',
      image: swayBarLinksImg,
      category: 'Adjustable Links',
      features: [
        'Fully adjustable length',
        'Heavy-duty construction',
        'Polyurethane bushings',
        'Easy installation',
      ],
      compatibility: ['Fortuner', 'Landcruiser Prado 120 & 150 series', '4-Runner', 'FJ Cruiser', 'Fortuner 2016+ model'],
    },
    {
      id: 5,
      title: '2-Inch Lifted Coil Springs',
      description:
        'Premium CRAGSMAN coil springs in signature yellow. Designed for heavy loads and rough terrain with progressive rate technology. Provides 2-inch lift.',
      price: 'KES 7,000',
      priceNote: 'each',
      image: coilSpringsImg,
      category: 'Springs',
      features: [
        'Progressive spring rate',
        '2-inch lift height',
        'Heavy-duty construction',
        'CRAGSMAN quality',
      ],
      compatibility: ['Landcruiser Prado 120 & 150 series', '4-Runner', 'FJ Cruiser', 'Fortuner'],
    },
    {
      id: 6,
      title: 'CRAGSMAN Coil Springs Set',
      description:
        'Complete set of CRAGSMAN yellow coil springs for front and rear. Built for African terrain and heavy-duty applications.',
      price: 'KES 28,000',
      priceNote: 'per set of 4',
      image: cragsmanCoilSpringsImg,
      category: 'Springs',
      features: [
        'Complete front & rear set',
        'Progressive spring rate',
        'Increased load capacity',
        'CRAGSMAN quality',
      ],
      compatibility: ['Landcruiser Prado 120 & 150 series', '4-Runner', 'FJ Cruiser', 'Fortuner'],
    },
    {
      id: 7,
      title: '4x4 Upper Control Arms Pro',
      description:
        'Professional-grade upper control arms with uniball joint for maximum performance. Perfect for serious off-roaders.',
      price: 'KES 20,000',
      priceNote: 'per pair',
      image: controlArm2Img,
      category: 'Control Arms',
      features: [
        'Uniball joint design',
        'Maximum articulation',
        'Heavy-duty bushings',
        'Track-tested performance',
      ],
      compatibility: ['Landcruiser Prado 120 & 150 series', '4-Runner'],
    },
    {
      id: 8,
      title: 'Performance End Links',
      description:
        'High-performance adjustable end links with heavy-duty ball joints. Available in various lengths for custom setups.',
      price: 'KES 15,000',
      priceNote: 'per set',
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
      id: 9,
      title: 'Rotora Big Brake Kit (Black)',
      description:
        'Premium Rotora big brake kit with black calipers. Complete braking upgrade for enhanced stopping power. Ships from overseas with all costs included.',
      price: 'From KES 220,000',
      priceNote: 'depends on car model',
      image: brakeKitBlackImg,
      category: 'Brake Kits',
      features: [
        'Complete brake kit',
        'Black powder-coated calipers',
        'Drilled & slotted rotors',
        'All hardware included',
        'Shipping & clearance included',
      ],
    },
    {
      id: 10,
      title: 'Brembo Brake Kit (Yellow)',
      description:
        'High-performance Brembo brake kit with signature yellow calipers. Ultimate braking performance for demanding applications.',
      price: 'From KES 220,000',
      priceNote: 'depends on car model',
      image: brakeKitYellowImg,
      category: 'Brake Kits',
      features: [
        'Brembo performance',
        'Yellow calipers',
        'Race-proven technology',
        'Complete kit with hardware',
        'Shipping & clearance included',
      ],
    },
    {
      id: 11,
      title: 'Brembo Brake Kit (Blue)',
      description:
        'High-performance Brembo brake kit with striking blue calipers. Premium braking solution for enthusiasts.',
      price: 'From KES 220,000',
      priceNote: 'depends on car model',
      image: brakeKitBlueImg,
      category: 'Brake Kits',
      features: [
        'Brembo performance',
        'Blue calipers',
        'Race-proven technology',
        'Complete kit with hardware',
        'Shipping & clearance included',
      ],
    },
    {
      id: 12,
      title: 'Brembo Brake Kit (Red)',
      description:
        'High-performance Brembo brake kit with classic red calipers. The iconic choice for performance enthusiasts.',
      price: 'From KES 220,000',
      priceNote: 'depends on car model',
      image: brakeKitRedImg,
      category: 'Brake Kits',
      features: [
        'Brembo performance',
        'Iconic red calipers',
        'Race-proven technology',
        'Complete kit with hardware',
        'Shipping & clearance included',
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
          <div className="max-w-3xl mx-auto text-center">
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
                    ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                    : 'bg-card text-foreground hover:bg-primary/10 hover:scale-105'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="card-product group hover:shadow-2xl transition-all duration-300">
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
                    <div>
                      <span className="text-2xl font-bold text-primary group-hover:scale-110 inline-block transition-transform">{product.price}</span>
                      {product.priceNote && (
                        <span className="text-xs text-muted-foreground block">{product.priceNote}</span>
                      )}
                    </div>
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

              {selectedProduct.compatibility && selectedProduct.compatibility.length > 0 && (
                <div className="mb-6 p-4 bg-primary/10 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Car size={20} className="text-primary" />
                    Compatible Vehicles:
                  </h4>
                  <ul className="space-y-1">
                    {selectedProduct.compatibility.map((vehicle, index) => (
                      <li key={index} className="text-muted-foreground text-sm">
                        • {vehicle}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex items-center justify-between pt-6 border-t">
                <div>
                  <span className="text-3xl font-bold text-primary">{selectedProduct.price}</span>
                  {selectedProduct.priceNote && (
                    <span className="text-sm text-muted-foreground block">{selectedProduct.priceNote}</span>
                  )}
                </div>
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
