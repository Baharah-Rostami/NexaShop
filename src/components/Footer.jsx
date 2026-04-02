import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 border-t border-fuchsia-500">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-2">NexaShop</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Your one-stop shop for everything you love. Quality products, fast delivery, and great experience.
          </p>
        </div>

        {/* Shop Links */}
        <div>
          <h3 className="font-semibold mb-2">Shop</h3>
          <ul>
            <li><Link to="/products" className="hover:text-blue-500 transition-colors">Products</Link></li>
            <li><Link to="/categories" className="hover:text-blue-500 transition-colors">Categories</Link></li>
            <li><Link to="/deals" className="hover:text-blue-500 transition-colors">Deals</Link></li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h3 className="font-semibold mb-2">Support</h3>
          <ul>
            <li><Link to="/contact" className="hover:text-blue-500 transition-colors">Contact</Link></li>
            <li><Link to="/faq" className="hover:text-blue-500 transition-colors">FAQ</Link></li>
            <li><Link to="/shipping" className="hover:text-blue-500 transition-colors">Shipping</Link></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="font-semibold mb-2">Contact</h3>
          <p>Email: baharrustami888@gmail.com</p>
          <p>Phone: +93 7786 8710</p>

          <div className="flex mt-4 space-x-3">
            <Link to="#" className="hover:text-blue-500 transition-colors">🌐</Link>
            <Link to="#" className="hover:text-blue-500 transition-colors">📸</Link>
            <Link to="#" className="hover:text-blue-500 transition-colors">🐦</Link>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="border-t border-gray-300 dark:border-gray-700 mt-8 pt-4 text-center text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} NexaShop. All rights reserved.
      </div>
    </footer>
  );
}