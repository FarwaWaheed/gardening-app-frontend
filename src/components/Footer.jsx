import footerLogo from '../assets/footerLogo.png';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-green-700 to-green-400 text-white py-10 px-4 ">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10 ">
        {/* Logo + CTA */}
        <div className="flex flex-col items-start ">
          <img src={footerLogo} alt="Plantopia Logo" className="h-18 max-h-18 w-[140px] object-cover" />
          <p className="mb-4"> Plant, Care, Connect.</p>
          <button className="bg-white text-green-700 px-5 py-2 rounded-full font-semibold shadow hover:shadow-md hover:bg-green-100 transition">
            Get in Touch!
          </button>
        </div>


        {/* Links */}
        <div className="grid grid-cols-2 gap-6 text-sm font-medium mt-6">
          <div className="space-y-3">
            <p className="hover:underline cursor-pointer">About</p>
            <p className="hover:underline cursor-pointer">FAQs</p>
            <p className="hover:underline cursor-pointer">Community</p>
          </div>
          <div className="space-y-3">
            <p className="hover:underline cursor-pointer">Guides & Tips</p>
            <p className="hover:underline cursor-pointer">Gardening Tools</p>
            <p className="hover:underline cursor-pointer">Legal</p>
          </div>
        </div>

        
        {/* Contact Info + Social Icons */}
        <div className="text-sm space-y-2">
          
          {/* Social Icons */}
          <div className="flex flex-col items-center gap-4 mt-2 text-xl">
            <a href="#" className="hover:text-green-200 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-green-200 transition">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-green-200 transition">
              <FaWhatsapp />
            </a>
          </div>
          <p className="flex items-center mt-8">
            <MdEmail className="text-xl" />
            support@plantopia.app
          </p>
          <p>📞 +1 (800) 555-PLNT</p>
          
        </div>
      </div>

      {/* Copyright */}
      <p className="text-center mt-10 text-xs text-white/80">
        © 2025 Plantopia. All rights reserved.
      </p>
    </footer>
  );
}
