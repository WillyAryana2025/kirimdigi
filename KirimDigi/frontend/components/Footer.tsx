import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-blue-400">KirimDigi</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Spesialis undangan digital premium dengan desain elegan dan modern. 
              Melayani kebutuhan undangan pernikahan, engagement, dan acara spesial lainnya.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-blue-400 p-2">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-blue-400 p-2">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-blue-400 p-2">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-blue-400 text-sm transition-colors">
                  Homepage
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-300 hover:text-blue-400 text-sm transition-colors">
                  Digital Invitation
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-300 hover:text-blue-400 text-sm transition-colors">
                  Digital Guestbook
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-blue-400 text-sm transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-blue-400 text-sm transition-colors">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Kategori</h4>
            <ul className="space-y-2">
              <li className="text-gray-300 text-sm">Silver Package</li>
              <li className="text-gray-300 text-sm">Gold Package</li>
              <li className="text-gray-300 text-sm">Platinum Package</li>
              <li className="text-gray-300 text-sm">Diamond Package</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Kontak Kami</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <p className="text-gray-300 text-sm">
                  Jl. Raya Bogor No. 123,<br />
                  Jakarta Timur 13220
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <p className="text-gray-300 text-sm">+62 812-3456-7890</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <p className="text-gray-300 text-sm">info@kirimdigi.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="text-center mb-6">
            <h5 className="text-sm font-semibold text-gray-300 mb-4">Metode Pembayaran</h5>
            <div className="flex justify-center items-center space-x-6 flex-wrap gap-4">
              <div className="bg-white rounded px-3 py-1">
                <span className="text-blue-600 font-bold text-xs">BCA</span>
              </div>
              <div className="bg-white rounded px-3 py-1">
                <span className="text-red-600 font-bold text-xs">MANDIRI</span>
              </div>
              <div className="bg-white rounded px-3 py-1">
                <span className="text-green-600 font-bold text-xs">BNI</span>
              </div>
              <div className="bg-white rounded px-3 py-1">
                <span className="text-orange-600 font-bold text-xs">BRI</span>
              </div>
              <div className="bg-white rounded px-3 py-1">
                <span className="text-blue-800 font-bold text-xs">DANA</span>
              </div>
              <div className="bg-white rounded px-3 py-1">
                <span className="text-green-700 font-bold text-xs">OVO</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 KirimDigi. All rights reserved. Made with ❤️ for your special moments.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Website ini dibuat oleh CEO Willy Aryana & Co Founder Syafiq Abdurahman
          </p>
        </div>
      </div>
    </footer>
  );
}
