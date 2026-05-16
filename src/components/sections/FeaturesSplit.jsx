import React from 'react';
import vangoIcon from '../../assets/vango-icon.png';

const FeaturesSplit = () => {
  const sellerFeatures = [
    { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 7l-7 5 7 5V7z" /><rect x="1" y="5" width="15" height="14" rx="2" ry="2" /></svg>, title: 'Live Selling Tools', desc: 'Engage, showcase and sell in real time.', color: 'text-purple-500' },
    { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg>, title: 'Instant Checkout', desc: 'Viewers can buy without ever leaving the stream.', color: 'text-indigo-500' },
    { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" /></svg>, title: 'Product Drops', desc: 'Launch limited drops and create urgency.', color: 'text-blue-500' },
    { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" /></svg>, title: 'Vouchers & Offers', desc: 'Boost sales with coupons, bundles and rewards.', color: 'text-purple-400' },
    { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 20V10" /><path d="M12 20V4" /><path d="M6 20v-6" /></svg>, title: 'Analytics Dashboard', desc: 'Track performance and optimize your results.', color: 'text-indigo-400' },
    { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /></svg>, title: 'Fan Clubs', desc: 'Build a loyal community that keeps coming back.', color: 'text-blue-400' },
  ];

  const customerFeatures = [
    { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>, title: 'Live Interaction', desc: 'Ask questions and get real-time answers.', color: 'text-pink-500' },
    { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>, title: 'Exclusive Deals', desc: 'Live-only offers, flash sales and special vouchers.', color: 'text-rose-500' },
    { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>, title: 'Trusted Sellers', desc: 'Verified sellers and quality you can trust.', color: 'text-orange-500' },
    { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="m10 8 6 4-6 4V8z" /></svg>, title: 'Entertainment + Shopping', desc: 'Fun, engaging and worth your time.', color: 'text-pink-400' },
    { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>, title: 'Easy & Secure', desc: 'One-tap checkout with safe payments.', color: 'text-rose-400' },
    { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>, title: 'Never Miss Out', desc: 'Follow your favorites and get notified live.', color: 'text-orange-400' },
  ];

  return (
<section className="py-5 md:py-10 lg:py-15 bg-brand-purple/10 relative overflow-hidden">

   {/* Background Glows */}
   <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute top-1/4 left-0 w-[280px] sm:w-[400px] lg:w-[500px] h-[280px] sm:h-[400px] lg:h-[500px] bg-brand-purple/5 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-1/4 right-0 w-[280px] sm:w-[400px] lg:w-[500px] h-[280px] sm:h-[400px] lg:h-[500px] bg-brand-pink/5 blur-[120px] rounded-full"></div>
   </div>

   <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-28 items-start">

         {/* Seller Side */}
         <div
            id="for-sellers"
            className="relative group text-center lg:text-left"
         >
            <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-brand-purple to-brand-pink text-white text-[0.7rem] sm:text-[0.8rem] font-black tracking-[0.2em] mb-6 md:mb-8 border border-brand-purple/20 shadow-[0_0_20px_rgba(168,85,247,0.1)]">
               FOR SELLERS
            </div>

            <h2 className="text-[2rem] sm:text-4xl md:text-5xl xl:text-6xl font-black leading-[1.05] tracking-tight mb-5 md:mb-6">
               <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                  Powerful Tools.
               </span>
               <br />

               <span className="bg-gradient-to-r from-brand-purple to-brand-pink bg-clip-text text-transparent">
                  More Sales. Real Growth.
               </span>
            </h2>

            <p className="text-white/40 text-sm sm:text-base font-medium mb-12 md:mb-16 max-w-xl leading-relaxed mx-auto lg:mx-0">
               Everything you need to run, grow and scale your live selling business.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-6 md:gap-x-8 gap-y-10 md:gap-y-12">
               {sellerFeatures.map((f, i) => (
                  <div
                     key={i}
                     className="flex flex-col items-center text-center gap-4 md:gap-5 group/item transition-all duration-300 hover:-translate-y-1"
                  >
                     <div
                        className={`${f.color} drop-shadow-[0_0_10px_currentColor] opacity-90 transition-all duration-300 group-hover/item:opacity-100 group-hover/item:scale-110`}
                     >
                        {f.icon}
                     </div>

                     <div className="space-y-1.5">
                        <h4 className="font-bold text-[0.9rem] md:text-[1rem] text-white/90 group-hover/item:text-white transition-colors">
                           {f.title}
                        </h4>

                        <p className="text-[0.78rem] md:text-[0.85rem] text-white/30 font-medium leading-relaxed group-hover/item:text-white/40 transition-colors">
                           {f.desc}
                        </p>
                     </div>
                  </div>
               ))}
            </div>

            <div className="flex justify-center lg:justify-start">
               <a
                  href="#"
                  className="inline-flex items-center mt-12 md:mt-16 text-brand-purple font-black text-sm md:text-base hover:translate-x-3 transition-transform gap-2 group/btn"
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
            id="for-customers"
            className="relative group text-center lg:text-left lg:pl-10"
         >

            {/* Desktop Divider */}
            <div className="absolute left-[-70px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent hidden lg:block">

               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="w-24 h-24 xl:w-28 xl:h-28 flex items-center justify-center relative group/logo">

                     <div className="absolute inset-0 bg-brand-gradient opacity-10 blur-2xl rounded-full group-hover/logo:opacity-30 transition-opacity"></div>

                     <img
                        src={vangoIcon}
                        alt="Logo"
                        className="w-[80px] h-[80px] xl:w-[100px] xl:h-[100px] object-contain relative z-10 transition-transform duration-500 group-hover/logo:scale-110"
                     />
                  </div>
               </div>
            </div>

            <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-brand-purple to-brand-pink text-white text-[0.7rem] sm:text-[0.8rem] font-black tracking-[0.2em] mb-6 md:mb-8 border border-brand-pink/20 shadow-[0_0_20px_rgba(236,72,153,0.1)]">
               FOR CUSTOMERS
            </div>

            <h2 className="text-[2rem] sm:text-4xl md:text-5xl xl:text-6xl font-black leading-[1.05] tracking-tight mb-5 md:mb-6">
               <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                  Shopping Finally
               </span>
               <br />

               <span className="bg-gradient-to-r from-brand-pink to-orange-400 bg-clip-text text-transparent">
                  Feels Exciting.
               </span>
            </h2>

            <p className="text-white/40 text-sm sm:text-base font-medium mb-12 md:mb-16 max-w-xl leading-relaxed mx-auto lg:mx-0">
               Discover, interact and shop your favorite products in an all-new way.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-6 md:gap-x-8 gap-y-10 md:gap-y-12">
               {customerFeatures.map((f, i) => (
                  <div
                     key={i}
                     className="flex flex-col items-center text-center gap-4 md:gap-5 group/item transition-all duration-300 hover:-translate-y-1"
                  >
                     <div
                        className={`${f.color} drop-shadow-[0_0_10px_currentColor] opacity-90 transition-all duration-300 group-hover/item:opacity-100 group-hover/item:scale-110`}
                     >
                        {f.icon}
                     </div>

                     <div className="space-y-1.5">
                        <h4 className="font-bold text-[0.9rem] md:text-[1rem] text-white/90 group-hover/item:text-white transition-colors">
                           {f.title}
                        </h4>

                        <p className="text-[0.78rem] md:text-[0.85rem] text-white/30 font-medium leading-relaxed group-hover/item:text-white/40 transition-colors">
                           {f.desc}
                        </p>
                     </div>
                  </div>
               ))}
            </div>

            <div className="flex justify-center lg:justify-start">
               <a
                  href="#"
                  className="inline-flex items-center mt-12 md:mt-16 text-brand-pink font-black text-sm md:text-base hover:translate-x-3 transition-transform gap-2 group/btn"
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