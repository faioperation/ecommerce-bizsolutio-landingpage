import React from 'react';
import mobilePic from '../../assets/mobile.png';

const Waitlist = () => {
   const avatars = [
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop',
      'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100&h=100&fit=crop'
   ];

   return (
      <section className="bg-brand-purple/10 relative overflow-hidden" id="waitlist">
         <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">

            {/* Main Containing Box */}
            <div className="p-6 md:p-12 lg:p-18 relative overflow-hidden group">
               {/* Internal Glow */}
               <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-purple/5 blur-[120px] rounded-full pointer-events-none"></div>

               <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-center relative z-10">

                  {/* Left: Phone Image */}
                  <div className="lg:col-span-4 relative flex justify-center lg:justify-start">
                     <div className="relative w-[70%] sm:w-full 
                        max-w-[240px]
                        sm:max-w-[260px]
                        md:max-w-[300px]
                        lg:max-w-[350px]
                        xl:max-w-[400px]
                        transition-all duration-1000 
                        scale-100
                        sm:scale-110
                        md:scale-[1.20]
                        lg:scale-[1.35]
                        xl:scale-[1.60]
                        mx-auto lg:mx-0"
                     >
                        <img
                           src={mobilePic}
                           alt="Mobile Sales Analytics"
                           className="w-full h-auto object-contain drop-shadow-[0_20px_80px_rgba(168,85,247,0.15)]"
                        />

                        {/* Background Aura Glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-brand-purple/10 blur-[80px] rounded-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                     </div>
                  </div>

                  {/* Center: Main CTA */}
                  <div className="lg:col-span-5 text-center lg:text-left px-4 sm:px-6 lg:px-0">
                     <h2 className="text-[2rem] sm:text-2xl md:text-4xl xl:text-5xl font-bold text-white mb-4 md:mb-3 lg:mb-4">
                        The Next Era Of <br className="hidden sm:block" />
                        Selling{" "}
                        <span className="bg-gradient-to-r from-brand-pink to-brand-orange bg-clip-text text-transparent">
                           Starts Live.
                        </span>
                     </h2>

                     <p className="text-white/60 text-sm sm:text-base md:text-lg font-semibold mb-5 md:mb-6 max-w-[500px] mx-auto lg:mx-0">
                        Be among the first to experience Vango Live.
                     </p>

                     <form
                        className="w-full max-w-lg mx-auto lg:mx-0 relative mb-5 md:mb-6"
                        onSubmit={(e) => e.preventDefault()}
                     >
                        <div className="flex flex-col sm:flex-row gap-3 bg-[#050507] border border-white/10 p-3 rounded-md focus-within:border-brand-purple/30 transition-all">
                           <input
                              type="email"
                              placeholder="Enter your email"
                              className="flex-1 bg-transparent border-none outline-none px-4 sm:px-4 py-2 text-white font-semibold text-sm md:text-base placeholder:text-white/20"
                              required
                           />

                           <button className="bg-brand-gradient text-white font-semibold px-2 py-2 rounded-xl md:rounded-md text-sm md:text-[0.9rem] hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-2 whitespace-nowrap">
                              Join the Waitlist &rarr;
                           </button>
                        </div>
                     </form>

                     <div className="flex flex-wrap justify-center lg:justify-start gap-x-2 gap-y-2">
                        {[
                           "Early Access",
                           "Founding Seller Perks",
                           "Priority Support",
                           "Lower Fees",
                        ].map((item) => (
                           <div
                              key={item}
                              className="flex items-center text-[0.70rem] sm:text-sm font-semibold text-white/40"
                           >
                              <svg
                                 className="w-4 h-4 text-emerald-500 shrink-0"
                                 fill="none"
                                 stroke="currentColor"
                                 viewBox="0 0 24 24"
                                 strokeWidth="3"
                              >
                                 <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M5 13l4 4L19 7"
                                 />
                              </svg>

                              {item}
                           </div>
                        ))}
                     </div>
                  </div>

                  {/* Right: Proof & Urgency */}
                  <div className="lg:col-span-3 flex flex-col gap-8 items-center lg:items-end px-4 sm:px-6 lg:px-0">

                     {/* Waitlist Count */}
                     <div className="flex flex-col sm:flex-row items-center sm:items-center gap-2 text-center lg:text-right">

                        <div className="flex -space-x-4">
                           {avatars.map((url, i) => (
                              <img
                                 key={i}
                                 src={url}
                                 className="w-9 h-9 sm:w-10 sm:h-10 md:w-13 md:h-13 rounded-full border-4 border-[#0a0a0c] object-cover"
                                 alt="User"
                              />
                           ))}
                        </div>

                        <div className="text-center sm:text-left">
                           <div className="text-white/70 text-base md:text-md font-semibold leading-none">
                              2,438+people
                           </div>

                           <div className="text-white/30 text-[0.68rem] sm:text-[0.75rem] font-semi mt-1">
                              are on the waitlist
                           </div>
                        </div>
                     </div>

                     {/* Founding Seller Spots Card */}
                     <div className="w-full max-w-[320px] sm:max-w-[360px] bg-[#0c0c10] border border-white/9 rounded-xl p-3 relative overflow-hidden shadow-2xl group/card">

                        {/* Glow Border */}
                        <div className="absolute inset-0 rounded p-[1.5px] bg-gradient-to-r from-[#99004d] via-[#ec4895]/10 to-transparent pointer-events-none opacity-90"></div>

                        <div className="relative z-10">
                           <span className="text-white text-xs sm:text-sm md:text-[0.9rem] block">
                              Founding Seller Spots
                           </span>

                           <div className="flex items-center gap-1.5 mt-2">

                              <span className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white tracking-tight">
                                 78
                              </span>

                              <span className="text-2xl md:text-3xl font-semibold text-[#ec4899] italic">
                                 /
                              </span>

                              <span className="text-lg sm:text-xl md:text-2xl font-semibold text-[#ec4899]">
                                 100
                              </span>

                              <span className="text-white/40 text-[0.55rem] sm:text-[0.65rem] md:text-[0.7rem] pt-2 font-semibold">
                                 Remaining
                              </span>

                              <div className="ml-auto">
                                 <div className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center text-xl md:text-2xl filter drop-shadow-[0_0_15px_rgba(234,179,8,0.4)] transition-transform duration-300 group-hover/card:scale-110">
                                    👑
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

               </div>
            </div>

         </div>
      </section>
   );
};

export default Waitlist;
