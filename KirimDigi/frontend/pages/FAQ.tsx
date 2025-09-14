import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqData: FAQItem[] = [
    {
      question: "Apa itu undangan digital?",
      answer: "Undangan digital adalah undangan pernikahan atau acara yang dibuat dalam format digital dan dapat dibagikan melalui WhatsApp, email, atau media sosial. Undangan ini ramah lingkungan, hemat biaya, dan dapat diakses kapan saja."
    },
    {
      question: "Berapa lama proses pembuatan undangan digital?",
      answer: "Proses pembuatan undangan digital biasanya memakan waktu 1-3 hari kerja setelah semua data dan foto diterima lengkap. Untuk paket premium dengan revisi unlimited, bisa memakan waktu hingga 5 hari kerja."
    },
    {
      question: "Apakah bisa request revisi desain?",
      answer: "Ya, tentu bisa! Setiap paket memiliki quota revisi yang berbeda. Silver (2x revisi), Gold (3x revisi), Platinum (5x revisi), dan Diamond (unlimited revisi). Revisi dapat berupa perubahan warna, font, layout, atau konten."
    },
    {
      question: "Bagaimana cara pembayaran?",
      answer: "Kami menerima pembayaran melalui transfer bank (BCA, Mandiri, BNI, BRI) dan e-wallet (DANA, OVO, GoPay). Pembayaran dilakukan 50% di awal (DP) dan 50% setelah desain selesai dan disetujui."
    },
    {
      question: "Apakah undangan digital bisa digunakan offline?",
      answer: "Undangan digital memerlukan koneksi internet untuk dibuka. Namun, kami juga menyediakan file PDF yang dapat disimpan dan dibuka offline sebagai backup."
    },
    {
      question: "Apa perbedaan paket Foto dan Tanpa Foto?",
      answer: "Paket Foto sudah termasuk editing foto prewedding profesional, sedangkan paket Tanpa Foto menggunakan foto yang sudah Anda siapkan tanpa editing tambahan. Paket Foto cocok jika Anda belum punya foto yang bagus."
    },
    {
      question: "Berapa lama undangan digital bisa diakses?",
      answer: "Undangan digital dapat diakses selama 1 tahun penuh dari tanggal acara. Setelah itu, kami akan memberikan file backup dalam format PDF dan video untuk kenang-kenangan."
    },
    {
      question: "Apakah bisa menambahkan musik di undangan?",
      answer: "Ya, semua paket sudah termasuk background music. Anda dapat memilih dari koleksi musik kami atau request lagu favorit Anda (dengan syarat tidak melanggar copyright)."
    },
    {
      question: "Bagaimana cara membagikan undangan digital?",
      answer: "Undangan digital dapat dibagikan melalui link yang kami berikan. Link ini dapat dishare via WhatsApp, Instagram, Facebook, email, atau platform digital lainnya. Sangat mudah dan praktis!"
    },
    {
      question: "Apakah ada garansi jika ada masalah teknis?",
      answer: "Ya, kami memberikan garansi teknis selama 30 hari setelah undangan selesai. Jika ada masalah loading atau error, akan kami perbaiki gratis. Customer service kami juga siap membantu 24/7."
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white py-16 border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
            <HelpCircle className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Temukan jawaban untuk pertanyaan yang sering ditanyakan tentang layanan undangan digital kami
          </p>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden"
            >
              <Button
                variant="ghost"
                className="w-full justify-between p-6 text-left hover:bg-gray-50 h-auto"
                onClick={() => toggleAccordion(index)}
              >
                <span className="font-semibold text-gray-900 text-lg pr-4">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                )}
              </Button>
              
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <div className="bg-blue-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Masih ada pertanyaan?
            </h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              Tim customer service kami siap membantu Anda 24/7. Jangan ragu untuk menghubungi kami!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-green-600 hover:bg-green-700">
                Konsultasi via WhatsApp
              </Button>
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                Kirim Email
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
