import React, { useState, useEffect } from 'react';
import logo from '../../assets/vango-logo.png';
import icon from '../../assets/vango-icon.png';

const Header = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const [isScrolled, setIsScrolled] = useState(false);
   const [activeSection, setActiveSection] = useState('home');

   useEffect(() => {
      const handleScroll = () => {
         setIsScrolled(window.scrollY > 20);

         const ids = ['home', 'seller-customer', 'how-it-works', 'about-us'];
         let current = 'home';
         const valids = [];

         for (const id of ids) {
            const element = document.getElementById(id);
            if (element) {
               const rect = element.getBoundingClientRect();
               // If the top of the section is above the upper third of the screen
               if (rect.top <= window.innerHeight / 3) {
                  valids.push({ id, top: rect.top });
               }
            }
         }

         if (valids.length > 0) {
            // Sort by top descending so the section closest to the top (but passed the threshold) is selected
            valids.sort((a, b) => b.top - a.top);
            current = valids[0].id;
         }

         setActiveSection(current);
      };

      window.addEventListener('scroll', handleScroll);
      // Run once initially to set the correct active state on mount
      handleScroll();

      return () => window.removeEventListener('scroll', handleScroll);
   }, []);

   const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);

      document.body.style.overflow = !isMenuOpen
         ? 'hidden'
         : 'auto';
   };

   const closeMenu = () => {
      setIsMenuOpen(false);
      document.body.style.overflow = 'auto';
   };

   return (
      <>
         <header
            className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${isScrolled
               ? 'bg-black/85 backdrop-blur-2xl border-b border-white/5 shadow-2xl py-3 sm:py-4 md:py-5'
               : 'bg-transparent py-4 sm:py-5 md:py-6'
               }`}
         >
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 flex items-center justify-between">

               {/* Logo */}
               <a
                  href="#home"
                  onClick={closeMenu}
                  className="flex items-center gap-2 sm:gap-3 shrink-0"
               >
                  <div className="flex items-center">

                     <img
                        src={icon}
                        alt="Vango Icon"
                        className="h-9 sm:h-10 md:h-12 lg:h-14 w-auto object-contain transition-all duration-500"
                     />

                     <img
                        src={logo}
                        alt="VANGO Logo"
                        className="h-5 sm:h-6 md:h-7 lg:h-9 w-auto object-contain mt-1 sm:mt-2 md:mt-3"
                     />
                  </div>

                  {/* Live Badge */}
                  <div className="bg-red-500 border border-red-500/20 text-white px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[0.62rem] sm:text-[0.72rem] md:text-[0.82rem] font-bold flex items-center gap-1.5 shadow-[0_0_15px_rgba(239,68,68,0.3)]">

                     <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full animate-pulse shadow-[0_0_8px_#fff]"></span>

                     <span>LIVE</span>
                  </div>
               </a>

               {/* Desktop Nav */}
               <nav className="hidden lg:flex items-center gap-6 xl:gap-10">
                  {[
                     'Home',
                     'For Seller & Customer',
                     'How It Works',
                     'About Us',
                  ].map((item) => {
                     const id = item === 'For Seller & Customer' ? 'seller-customer' : item.toLowerCase().replace(/\s+/g, '-');
                     const isActive = activeSection === id;
                     return (
                        <a
                           key={item}
                           href={`#${id}`}
                           className={`text-[0.9rem] xl:text-[1rem] font-bold transition-all duration-300 hover:scale-105 ${isActive
                              ? 'text-brand-pink drop-shadow-[0_0_8px_rgba(236,72,153,0.5)]'
                              : 'text-white/60 hover:text-white'
                              }`}
                        >
                           {item}
                        </a>
                     );
                  })}
               </nav>

               {/* Right Actions */}
               <div className="flex items-center gap-3 sm:gap-4 md:gap-6">

                  {/* Waitlist Button */}
                  <a
                     href="#waitlist"
                     className="hidden sm:inline-flex items-center px-5 md:px-7 lg:px-8 py-2.5 md:py-3.5 rounded-full lg:rounded-xl bg-brand-gradient text-white text-sm md:text-[0.95rem] lg:text-[1rem] font-black shadow-xl shadow-brand-purple/20 hover:scale-105 active:scale-95 transition-all whitespace-nowrap"
                  >
                     Join Waitlist

                     <span className="ml-2 hidden md:inline">
                        &rarr;
                     </span>
                  </a>

                  {/* Mobile Menu Button */}
                  <button
                     onClick={toggleMenu}
                     aria-label="Toggle Menu"
                     className="lg:hidden p-2.5 sm:p-3 text-white bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors"
                  >
                     {isMenuOpen ? (
                        <svg
                           width="24"
                           height="24"
                           viewBox="0 0 24 24"
                           fill="none"
                           stroke="currentColor"
                           strokeWidth="2.5"
                           strokeLinecap="round"
                           strokeLinejoin="round"
                        >
                           <line x1="18" y1="6" x2="6" y2="18" />
                           <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                     ) : (
                        <svg
                           width="24"
                           height="24"
                           viewBox="0 0 24 24"
                           fill="none"
                           stroke="currentColor"
                           strokeWidth="2.5"
                           strokeLinecap="round"
                           strokeLinejoin="round"
                        >
                           <line x1="3" y1="12" x2="21" y2="12" />
                           <line x1="3" y1="6" x2="21" y2="6" />
                           <line x1="3" y1="18" x2="21" y2="18" />
                        </svg>
                     )}
                  </button>
               </div>
            </div>
         </header>

         {/* Mobile Menu Backdrop */}
         <div
            onClick={closeMenu}
            className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[99] lg:hidden transition-all duration-500 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
               }`}
         />

         {/* Mobile Menu Slide-Out Drawer */}
         <div
            className={`fixed top-0 right-0 bottom-0 w-full max-w-[300px] sm:max-w-[340px] bg-[#07070a] border-l border-white/10 z-[100] lg:hidden flex flex-col justify-between p-6 shadow-2xl transition-all duration-500 ease-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
               }`}
         >
            <div>
               {/* Drawer Header */}
               <div className="flex items-center justify-between pb-5 border-b border-white/5 mb-8">
                  <div className="flex items-center gap-2">
                     <img src={icon} alt="Vango Icon" className="h-8 w-auto object-contain" />
                     <img src={logo} alt="VANGO Logo" className="h-4.5 w-auto object-contain mt-0.5" />
                  </div>
                  <button
                     onClick={closeMenu}
                     className="p-2 text-white/70 hover:text-white bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all cursor-pointer"
                  >
                     <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                     </svg>
                  </button>
               </div>

               {/* Drawer Navigation Links */}
               <nav className="flex flex-col gap-3">
                  {[
                     'Home',
                     'For Seller & Customer',
                     'How It Works',
                     'About Us',
                  ].map((item, idx) => {
                     const id = item === 'For Seller & Customer' ? 'seller-customer' : item.toLowerCase().replace(/\s+/g, '-');
                     const isActive = activeSection === id;
                     return (
                        <a
                           key={item}
                           href={`#${id}`}
                           onClick={closeMenu}
                           className={`flex items-center justify-between p-3 px-4 rounded-xl font-bold text-[0.95rem] transition-all duration-300 ${isActive
                                 ? 'bg-brand-purple/15 text-brand-pink border border-brand-purple/20'
                                 : 'text-white/70 hover:text-white hover:bg-white/5 border border-transparent'
                              }`}
                           style={{
                              transitionDelay: `${idx * 40}ms`,
                           }}
                        >
                           <span>{item}</span>
                           <svg
                              width="14"
                              height="14"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.5"
                              className={`transition-transform duration-300 ${isActive ? 'translate-x-1 text-brand-pink' : 'text-white/20'}`}
                           >
                              <polyline points="9 18 15 12 9 6" />
                           </svg>
                        </a>
                     );
                  })}
               </nav>
            </div>

            {/* Drawer Bottom Section */}
            <div className="mt-auto pt-6 border-t border-white/5">
               <a
                  href="#waitlist"
                  onClick={closeMenu}
                  className="block w-full text-center py-3.5 rounded-xl bg-brand-gradient text-white font-black text-[0.95rem] shadow-xl shadow-brand-purple/20 hover:opacity-90 active:scale-[0.98] transition-all"
               >
                  Join the Waitlist
               </a>
            </div>
         </div>
      </>
   );
};

export default Header;