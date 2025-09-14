import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                <Sparkles className="h-4 w-4" />
                <span>Undangan Digital Terbaik</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Undangan Digital
                <span className="text-blue-600 block">Elegan & Modern</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Buat undangan pernikahan digital yang memukau dengan desain premium, 
                mudah dibagikan, dan ramah lingkungan. Tersedia berbagai pilihan tema elegant.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
                Lihat Katalog
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-3 border-2">
                Konsultasi Gratis
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">500+</div>
                <div className="text-sm text-gray-600">Desain Template</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">10k+</div>
                <div className="text-sm text-gray-600">Klien Puas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">24/7</div>
                <div className="text-sm text-gray-600">Customer Support</div>
              </div>
            </div>
          </div>

          {/* Right Content - Mockup */}
          <div className="relative">
            <div className="relative z-10">
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="aspect-[3/4] bg-gradient-to-br from-rose-100 to-pink-100 rounded-xl flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-rose-300 rounded-full mx-auto"></div>
                    <div className="space-y-2">
                      <div className="h-4 bg-rose-200 rounded w-24 mx-auto"></div>
                      <div className="h-3 bg-rose-200 rounded w-16 mx-auto"></div>
                    </div>
                    <div className="space-y-1">
                      <div className="h-2 bg-rose-100 rounded w-20 mx-auto"></div>
                      <div className="h-2 bg-rose-100 rounded w-16 mx-auto"></div>
                      <div className="h-2 bg-rose-100 rounded w-18 mx-auto"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-8 left-8 w-full h-full bg-blue-200 rounded-2xl -z-10"></div>
            <div className="absolute top-16 left-16 w-full h-full bg-indigo-200 rounded-2xl -z-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
