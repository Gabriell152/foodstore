import { useState } from 'react';
import { ShoppingCart, Plus, Minus, Trash2, Store, X, Search, Star, Clock, Flame } from 'lucide-react';

// Tipos
interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  details: string;
  ingredients: string[];
  calories: number;
  time: string;
  rating: number;
}

interface CartItem extends Product {
  quantity: number;
}

const FoodStoreApp = () => {
  const [products] = useState<Product[]>([
    { 
      id: 1, name: 'Pizza Margarita', price: 12.99, category: 'Pizzas', image: '🍕',
      description: 'Pizza clásica con tomate y mozzarella',
      details: 'Pizza artesanal con salsa de tomate fresco, mozzarella de búfala y albahaca. Masa fermentada 48 horas.',
      ingredients: ['Masa de trigo', 'Tomate San Marzano', 'Mozzarella', 'Albahaca', 'Aceite de oliva'],
      calories: 800, time: '25-30 min', rating: 4.8
    },
    { 
      id: 2, name: 'Hamburguesa Clásica', price: 8.99, category: 'Hamburguesas', image: '🍔',
      description: 'Hamburguesa con carne, lechuga y tomate',
      details: 'Hamburguesa de carne Angus 200g, con pan brioche tostado, lechuga iceberg, tomate fresco y salsa especial.',
      ingredients: ['Carne Angus 200g', 'Pan brioche', 'Lechuga', 'Tomate', 'Cebolla', 'Salsa especial'],
      calories: 650, time: '15-20 min', rating: 4.6
    },
    { 
      id: 3, name: 'Sushi Roll', price: 15.99, category: 'Sushi', image: '🍱',
      description: 'Variedad de rolls frescos',
      details: '12 piezas de sushi roll variado: California, Philadelphia y Spicy Tuna. Preparado al momento.',
      ingredients: ['Arroz sushi', 'Salmón', 'Atún', 'Aguacate', 'Queso crema', 'Alga nori'],
      calories: 450, time: '20-25 min', rating: 4.9
    },
    { 
      id: 4, name: 'Tacos al Pastor', price: 9.99, category: 'Mexicana', image: '🌮',
      description: 'Tacos con carne al pastor y piña',
      details: '4 tacos de carne al pastor marinada 24 horas, con piña asada, cilantro y cebolla. Tortillas hechas a mano.',
      ingredients: ['Carne de cerdo', 'Piña', 'Tortillas de maíz', 'Cilantro', 'Cebolla', 'Especias'],
      calories: 550, time: '10-15 min', rating: 4.7
    },
    { 
      id: 5, name: 'Ensalada César', price: 7.99, category: 'Ensaladas', image: '🥗',
      description: 'Ensalada fresca con pollo y aderezo',
      details: 'Lechuga romana fresca, pollo a la parrilla, crutones caseros, parmesano y aderezo César tradicional.',
      ingredients: ['Lechuga romana', 'Pollo', 'Parmesano', 'Crutones', 'Aderezo César'],
      calories: 380, time: '10-12 min', rating: 4.5
    },
    { 
      id: 6, name: 'Pasta Carbonara', price: 11.99, category: 'Pastas', image: '🍝',
      description: 'Pasta con salsa carbonara cremosa',
      details: 'Fettuccine al dente con salsa carbonara auténtica: huevo, panceta, parmesano y pimienta negra.',
      ingredients: ['Pasta', 'Panceta', 'Huevo', 'Parmesano', 'Pimienta negra'],
      calories: 720, time: '15-18 min', rating: 4.7
    },
    { 
      id: 7, name: 'Hot Dog', price: 5.99, category: 'Rápida', image: '🌭',
      description: 'Hot dog con salchicha y toppings',
      details: 'Hot dog con salchicha premium, pan suave, mostaza, ketchup, mayonesa y papas trituradas.',
      ingredients: ['Salchicha', 'Pan', 'Mostaza', 'Ketchup', 'Mayonesa', 'Papas'],
      calories: 450, time: '5-8 min', rating: 4.3
    },
    { 
      id: 8, name: 'Pollo Frito', price: 10.99, category: 'Pollo', image: '🍗',
      description: 'Pollo crujiente estilo Kentucky',
      details: '4 piezas de pollo marinado 12 horas, empanizado con 11 especias secretas. Extra crujiente.',
      ingredients: ['Pollo', 'Harina especiada', 'Buttermilk', 'Especias secretas'],
      calories: 680, time: '20-25 min', rating: 4.8
    },
    { 
      id: 9, name: 'Burrito', price: 9.49, category: 'Mexicana', image: '🌯',
      description: 'Burrito relleno de carne y frijoles',
      details: 'Burrito gigante con carne asada, frijoles refritos, arroz, queso, guacamole y pico de gallo.',
      ingredients: ['Tortilla de harina', 'Carne asada', 'Frijoles', 'Arroz', 'Queso', 'Guacamole'],
      calories: 850, time: '12-15 min', rating: 4.6
    },
    { 
      id: 10, name: 'Donas', price: 4.99, category: 'Postres', image: '🍩',
      description: 'Donas glaseadas variadas',
      details: '6 donas artesanales con diferentes coberturas: chocolate, vainilla, fresa y caramelo.',
      ingredients: ['Harina', 'Azúcar', 'Huevo', 'Leche', 'Coberturas variadas'],
      calories: 520, time: '5-7 min', rating: 4.4
    },
    { 
      id: 11, name: 'Helado', price: 3.99, category: 'Postres', image: '🍦',
      description: 'Helado cremoso de vainilla',
      details: 'Helado artesanal de vainilla Madagascar, cremoso y suave. Opción de toppings adicionales.',
      ingredients: ['Leche', 'Crema', 'Vainilla Madagascar', 'Azúcar'],
      calories: 280, time: '2-3 min', rating: 4.5
    },
    { 
      id: 12, name: 'Café', price: 2.99, category: 'Bebidas', image: '☕',
      description: 'Café americano caliente',
      details: 'Café americano preparado con granos 100% arábica de Colombia. Recién molido y filtrado.',
      ingredients: ['Café arábica', 'Agua filtrada'],
      calories: 5, time: '3-5 min', rating: 4.6
    },
  ]);

  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [showCart, setShowCart] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const categories = ['Todos', ...new Set(products.map(p => p.category))];

  const addToCart = (product: Product) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    setSelectedProduct(null);
  };

  const updateQuantity = (id: number, delta: number) => {
    setCart(cart
      .map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(0, item.quantity + delta) }
          : item
      )
      .filter(item => item.quantity > 0)
    );
  };

  const removeFromCart = (id: number) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const getTotalPrice = () => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);
  };

  const getTotalItems = () => {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  };

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'Todos' || product.category === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert('El carrito está vacío');
      return;
    }
    alert(`¡Pedido realizado por $${getTotalPrice()}!\n\nGracias por tu compra.`);
    setCart([]);
    setShowCart(false);
  };

  // ---------- JSX completo ----------
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      {/* Header */}
      <header className="bg-white shadow-md z-10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Store className="text-orange-600" size={32} />
            <div>
              <h1 className="text-2xl font-bold text-gray-800">FoodStore</h1>
              <p className="text-xs text-gray-500">Tu comida favorita</p>
            </div>
          </div>
          <button
            onClick={() => setShowCart(!showCart)}
            className="relative bg-orange-600 text-white p-3 rounded-full hover:bg-orange-700 transition-colors"
          >
            <ShoppingCart size={24} />
            {getTotalItems() > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                {getTotalItems()}
              </span>
            )}
          </button>
        </div>
      </header>

      {/* Search Bar */}
      <div className="bg-white shadow-sm z-10">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Buscar productos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="bg-white shadow-sm z-10">
        <div className="max-w-7xl mx-auto px-4 py-3 overflow-x-auto">
          <div className="flex gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-medium whitespace-nowrap transition-colors ${
                  selectedCategory === category
                    ? 'bg-orange-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <Search size={64} className="mx-auto text-gray-300 mb-4" />
            <p className="text-gray-500 text-lg">No se encontraron productos</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredProducts.map(product => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-br from-orange-100 to-red-100 h-40 flex items-center justify-center text-6xl">
                  {product.image}
                </div>
                <div className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-bold text-lg text-gray-800">{product.name}</h3>
                    <div className="flex items-center gap-1 text-yellow-500">
                      <Star size={16} fill="currentColor" />
                      <span className="text-sm font-semibold text-gray-700">{product.rating}</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{product.description}</p>
                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{product.time}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Flame size={14} />
                      <span>{product.calories} cal</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-orange-600">${product.price}</span>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setSelectedProduct(product)}
                        className="bg-gray-100 text-gray-700 px-3 py-2 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium"
                      >
                        Detalles
                      </button>
                      <button
                        onClick={() => addToCart(product)}
                        className="bg-orange-600 text-white px-3 py-2 rounded-lg hover:bg-orange-700 transition-colors flex items-center gap-1"
                      >
                        <Plus size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Modal de Detalles */}
      {selectedProduct && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 flex items-center justify-center p-4"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-100 to-red-100 h-64 flex items-center justify-center text-9xl">
                {selectedProduct.image}
              </div>
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">{selectedProduct.name}</h2>
                  <span className="inline-block bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">
                    {selectedProduct.category}
                  </span>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-orange-600 mb-1">${selectedProduct.price}</div>
                  <div className="flex items-center gap-1 text-yellow-500">
                    <Star size={20} fill="currentColor" />
                    <span className="text-lg font-semibold text-gray-700">{selectedProduct.rating}</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-6 mb-6 pb-6 border-b">
                <div className="flex items-center gap-2">
                  <Clock size={20} className="text-gray-500" />
                  <div>
                    <div className="text-xs text-gray-500">Tiempo</div>
                    <div className="font-semibold">{selectedProduct.time}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Flame size={20} className="text-orange-500" />
                  <div>
                    <div className="text-xs text-gray-500">Calorías</div>
                    <div className="font-semibold">{selectedProduct.calories} cal</div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-bold text-lg mb-2">Descripción</h3>
                <p className="text-gray-600 leading-relaxed">{selectedProduct.details}</p>
              </div>

              <div className="mb-6">
                <h3 className="font-bold text-lg mb-3">Ingredientes</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProduct.ingredients.map((ingredient, index) => (
                    <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      {ingredient}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => addToCart(selectedProduct)}
                className="w-full bg-orange-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-orange-700 transition-colors flex items-center justify-center gap-2"
              >
                <Plus size={24} />
                Agregar al Carrito
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Sidebar del Carrito */}
      {showCart && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-20" onClick={() => setShowCart(false)}>
          <div
            className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-orange-600 text-white p-4 flex items-center justify-between">
              <h2 className="text-xl font-bold">Tu Carrito</h2>
              <button onClick={() => setShowCart(false)}>
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4">
              {cart.length === 0 ? (
                <div className="text-center text-gray-500 mt-8">
                  <ShoppingCart size={48} className="mx-auto mb-4 opacity-50" />
                  <p>Tu carrito está vacío</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.map(item => (
                    <div key={item.id} className="bg-gray-50 rounded-lg p-3 flex items-center gap-3">
                      <div className="text-3xl">{item.image}</div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800">{item.name}</h4>
                        <p className="text-orange-600 font-bold">${item.price}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="bg-gray-300 text-gray-700 p-1 rounded hover:bg-gray-400"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="font-bold w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="bg-orange-600 text-white p-1 rounded hover:bg-orange-700"
                        >
                          <Plus size={16} />
                        </button>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="ml-2 text-red-600 hover:text-red-800"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cart.length > 0 && (
              <div className="border-t p-4 space-y-3">
                <div className="flex justify-between text-lg font-bold">
                  <span>Total:</span>
                  <span className="text-orange-600">${getTotalPrice()}</span>
                </div>
                <button
                  onClick={handleCheckout}
                  className="w-full bg-orange-600 text-white py-3 rounded-lg font-bold hover:bg-orange-700 transition-colors"
                >
                  Realizar Pedido
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default FoodStoreApp;
