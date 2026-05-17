import React from 'react';
import vangoIcon from '../../assets/vango-icon.png';

const FeaturesSplit = () => {
   const sellerFeatures = [
      { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="15" rx="2" ry="2" /><path d="M12 11v5l4-2.5z" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg>, title: 'Live Selling Tools', desc: <>Engage, showcase and<br/>sell in real time.</>, color: 'text-brand-purple' },
      { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><path d="M3 6h18" /><path d="M13 10l-3 5h4l-3 5" /></svg>, title: 'Instant Checkout', desc: <>Viewers can buy without<br/>ever leaving the stream.</>, color: 'text-brand-blue' },
      { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="13" r="8" /><path d="M12 9v4l2 2" /><path d="M10 2h4" /></svg>, title: 'Product Drops', desc: <>Launch limited drops<br/>and create urgency.</>, color: 'text-brand-pink' },
      { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" /><path d="M9 12h6" /><path d="M12 9v6" /></svg>, title: 'Vouchers & Offers', desc: <>Boost sales with coupons,<br/>bundles and rewards.</>, color: 'text-brand-purple' },
      { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 20V10" /><path d="M12 20V4" /><path d="M6 20v-6" /></svg>, title: 'Analytics Dashboard', desc: <>Track performance and<br/>optimize your results.</>, color: 'text-brand-blue' },
      { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>, title: 'Fan Clubs', desc: <>Build a loyal community<br/>that keeps coming back.</>, color: 'text-brand-pink' },
   ];

   const customerFeatures = [
      { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /><path d="M10 8l5 4-5 4V8z" /></svg>, title: 'Live Interaction', desc: <>Ask questions and<br/>get real-time answers.</>, color: 'text-brand-pink' },
      { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><path d="M3 6h18" /><path d="M9 13l2 2 4-4" /></svg>, title: 'Exclusive Deals', desc: <>Live-only offers, flash<br/>sales and special vouchers.</>, color: 'text-brand-purple' },
      { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" /></svg>, title: 'Trusted Sellers', desc: <>Verified sellers and<br/>quality you can trust.</>, color: 'text-brand-orange' },
      { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>, title: 'Entertainment + Shopping', desc: <>Fun, engaging and<br/>worth your time.</>, color: 'text-brand-pink' },
      { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" /></svg>, title: 'Easy & Secure', desc: <>One-tap checkout with<br/>safe payments.</>, color: 'text-brand-purple' },
      { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>, title: 'Never Miss Out', desc: <>Follow your favorites<br/>and get notified live.</>, color: 'text-brand-orange' },
   ];

   return (
      <section id="seller-customer" className="py-5 md:py-10 lg:py-15 bg-brand-purple/10 relative overflow-hidden">

         {/* Background Glows */}
         <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-1/4 left-0 w-[280px] sm:w-[400px] lg:w-[500px] h-[280px] sm:h-[400px] lg:h-[500px] bg-brand-purple/5 blur-[120px] rounded-full"></div>

            <div className="absolute bottom-1/4 right-0 w-[280px] sm:w-[400px] lg:w-[500px] h-[280px] sm:h-[400px] lg:h-[500px] bg-brand-pink/5 blur-[120px] rounded-full"></div>
         </div>

         <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-20 lg:gap-28 items-center">

               {/* Seller Side */}
               <div
                  className="relative group text-center md:text-start lg:text-start"
               >
                  <div className="inline-block px-3 py-1.5 rounded-full bg-gradient-to-r from-brand-purple to-brand-pink text-white text-[0.7rem] sm:text-[0.75rem] font-bold tracking-widest mb-6 md:mb-8 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
                     FOR SELLERS
                  </div>

                  <h2 className="text-[2rem] sm:text-4xl md:text-[2.75rem] xl:text-[3.25rem] font-semibold leading-tight mb-4 md:mb-5 text-white">
                     Powerful Tools.<br />
                     More Sales. Real Growth.
                  </h2>

                  <p className="text-white/60 text-sm sm:text-[0.95rem] font-normal mb-10 md:mb-12 max-w-sm leading-relaxed">
                     Everything you need to run, grow and scale your live selling business.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-6 md:gap-x-8 gap-y-10 md:gap-y-12">
                     {sellerFeatures.map((f, i) => (
                        <div
                           key={i}
                           className="flex flex-col items-center text-center gap-3 md:gap-4 group/item transition-all duration-300 hover:-translate-y-1"
                        >
                           <div
                              className={`${f.color} drop-shadow-[0_0_10px_currentColor] opacity-90 transition-all duration-300 group-hover/item:opacity-100 group-hover/item:scale-110 mb-1`}
                           >
                              {f.icon}
                           </div>

                           <div className="space-y-1.5">
                              <h4 className="font-bold text-[0.95rem] md:text-[1.05rem] text-white/90 group-hover/item:text-white transition-colors">
                                 {f.title}
                              </h4>

                              <p className="text-[0.8rem] md:text-[0.85rem] text-white/40 font-normal leading-relaxed group-hover/item:text-white/60 transition-colors">
                                 {f.desc}
                              </p>
                           </div>
                        </div>
                     ))}
                  </div>

                  <div className="flex justify-center">
                     <a
                        href="#"
                        className="inline-flex items-center mt-10 md:mt-12 text-brand-purple font-semibold text-[0.9rem] md:text-[0.95rem] hover:translate-x-2 transition-transform gap-2 group/btn"
                     >
                        Explore Seller Benefits
                        <span className="group-hover/btn:translate-x-1 transition-transform">
                           &rarr;
                        </span>
                     </a>
                  </div>
               </div>

               {/* Customer Side */}
               <div
                  className="relative group text-center md:text-start lg:text-start lg:pl-10"
               >

                  {/* Desktop Divider */}
                  <div className="absolute left-[-70px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent hidden lg:block">

                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                        <div className="w-20 h-20 xl:w-24 xl:h-24 flex items-center justify-center relative group/logo">

                           <div className="absolute inset-0 bg-brand-gradient opacity-10 blur-xl rounded-full group-hover/logo:opacity-30 transition-opacity"></div>

                           <img
                              src={vangoIcon}
                              alt="Logo"
                              className="w-[60px] h-[60px] xl:w-[80px] xl:h-[80px] object-contain relative z-10 transition-transform duration-500 group-hover/logo:scale-110"
                           />
                        </div>
                     </div>
                  </div>

                  <div className="inline-block px-3 py-1.5 rounded-full bg-gradient-to-r from-brand-pink to-brand-orange text-white text-[0.7rem] sm:text-[0.75rem] font-semibold tracking-widest mb-6 md:mb-8 shadow-[0_0_15px_rgba(236,72,153,0.2)]">
                     FOR CUSTOMERS
                  </div>

                  <h2 className="text-[2rem] sm:text-4xl md:text-[2.75rem] xl:text-[3.25rem] font-semibold leading-tight mb-4 md:mb-5 text-white">
                     Shopping Finally<br />
                     Feels Exciting.
                  </h2>

                  <p className="text-white/60 text-sm sm:text-[0.95rem] font-normal mb-10 md:mb-12 max-w-sm leading-relaxed">
                     Discover, interact and shop your favorite products in an all-new way.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-6 md:gap-x-8 gap-y-10 md:gap-y-12">
                     {customerFeatures.map((f, i) => (
                        <div
                           key={i}
                           className="flex flex-col items-center text-center gap-3 md:gap-4 group/item transition-all duration-300 hover:-translate-y-1"
                        >
                           <div
                              className={`${f.color} drop-shadow-[0_0_10px_currentColor] opacity-90 transition-all duration-300 group-hover/item:opacity-100 group-hover/item:scale-110 mb-1`}
                           >
                              {f.icon}
                           </div>

                           <div className="space-y-1.5">
                              <h4 className="font-bold text-[0.95rem] md:text-[1.05rem] text-white/90 group-hover/item:text-white transition-colors">
                                 {f.title}
                              </h4>

                              <p className="text-[0.8rem] md:text-[0.85rem] text-white/40 font-normal leading-relaxed group-hover/item:text-white/60 transition-colors">
                                 {f.desc}
                              </p>
                           </div>
                        </div>
                     ))}
                  </div>

                  <div className="flex justify-center">
                     <a
                        href="#"
                        className="inline-flex items-center mt-10 md:mt-12 text-brand-pink font-semibold text-[0.9rem] md:text-[0.95rem] hover:translate-x-2 transition-transform gap-2 group/btn"
                     >
                        Explore Customer Benefits
                        <span className="group-hover/btn:translate-x-1 transition-transform">
                           &rarr;
                        </span>
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default FeaturesSplit;