import React from 'react';
import logo from '../../assets/vango-logo.png';
import icon from '../../assets/vango-icon.png';

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0c] py-8 md:py-8 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[1px] bg-gradient-to-r from-transparent via-brand-purple/20 to-transparent"></div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">

          {/* Left: Logo & Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-6 md:gap-10 text-center sm:text-left">
            <div className="flex items-center">
              <img src={icon} alt="Vango Icon" className="h-10 md:h-12 w-auto object-contain transition-transform hover:scale-110 duration-500" />
              <img src={logo} alt="VANGO Logo" className="h-5 md:h-6 w-auto object-contain mt-1" />
            </div>
            <p className="text-[0.75rem] md:text-[0.85rem] font-bold text-white/30 capitalize tracking-[0.2em] whitespace-nowrap">
              &copy; {new Date().getFullYear()} Vango Live. <br /> <span className="xs:inline">All rights reserved.</span>
            </p>
          </div>

          {/* Center: Links */}
          <nav className="flex flex-wrap justify-center gap-6 md:gap-10 text-[0.7rem] md:text-[0.8rem] font-black text-white/40 capitalize tracking-widest">
            {['Privacy Policy', 'Terms of Service', 'Seller Agreement', 'Contact Us'].map((link) => (
              <a key={link} href="#" className="hover:text-white transition-all hover:scale-105 active:scale-95">{link}</a>
            ))}
          </nav>

          {/* Right: Socials */}
          <div className="flex items-center gap-6 md:gap-8">
            {[
              { id: 'insta', path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
              { id: 'tiktok', path: 'M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z' },
              { id: 'yt', path: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' },
              { id: 'x', path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' }
            ].map((social) => (
              <a key={social.id} href="#" className="text-white/20 hover:text-white transition-all hover:scale-125 duration-300">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d={social.path} /></svg>
              </a>
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
