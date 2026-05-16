import React from 'react';
import mobilePic from '../../assets/mobile.png';

const Waitlist = () => {
   const avatars = [
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop'
   ];

   return (
      <section className="bg-brand-purple/10 relative overflow-hidden" id="waitlist">
         <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

            {/* Main Containing Box */}
            <div className="p-6 md:p-12 lg:p-18 relative overflow-hidden group">
               {/* Internal Glow */}
               <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-purple/5 blur-[120px] rounded-full pointer-events-none"></div>

               <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">

                  {/* Left: Phone Image */}
                  <div className="lg:col-span-4 relative flex justify-center lg:justify-start">
                     <div className="relative w-full 
                        max-w-[220px]
                        sm:max-w-[260px]
                        md:max-w-[330px]
                        lg:max-w-[420px]
                        xl:max-w-[450px]
                        transition-all duration-1000
                        scale-100
                        sm:scale-110
                        md:scale-[1.25]
                        lg:scale-[1.5]
                        xl:scale-[1.75]
                        group-hover:scale-[1.85]"
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
                     <h2 className="text-[2rem] sm:text-4xl md:text-5xl xl:text-6xl font-black leading-[1.05] tracking-tight text-white mb-5 md:mb-6">
                        The Next Era Of <br className="hidden sm:block" />
                        Selling{" "}
                        <span className="bg-gradient-to-r from-[#ec4899] to-[#8b5cf6] bg-clip-text text-transparent">
                           Starts Live.
                        </span>
                     </h2>

                     <p className="text-white/60 text-sm sm:text-base md:text-lg font-bold mb-8 md:mb-12 max-w-[500px] mx-auto lg:mx-0">
                        Be among the first to experience Vango Live.
                     </p>

                     <form
                        className="w-full max-w-xl mx-auto lg:mx-0 relative mb-10 md:mb-12"
                        onSubmit={(e) => e.preventDefault()}
                     >
                        <div className="flex flex-col sm:flex-row gap-3 bg-[#050507] border border-white/10 p-2 rounded-2xl md:rounded-[20px] focus-within:border-brand-purple/30 transition-all">
                           <input
                              type="email"
                              placeholder="Enter your email"
                              className="flex-1 bg-transparent border-none outline-none px-4 sm:px-6 py-4 text-white font-bold text-sm md:text-base placeholder:text-white/20"
                              required
                           />

                           <button className="bg-brand-gradient text-white font-black px-2 md:px-4 py-4 rounded-xl md:rounded-2xl text-sm md:text-[0.9rem] hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-2 whitespace-nowrap">
                              Join the Waitlist &rarr;
                           </button>
                        </div>
                     </form>

                     <div className="flex flex-wrap justify-center lg:justify-start gap-x-5 gap-y-3">
                        {[
                           "Early Access",
                           "Founding Seller Perks",
                           "Priority Support",
                           "Lower Fees",
                        ].map((item) => (
                           <div
                              key={item}
                              className="flex items-center gap-2 text-[0.72rem] sm:text-sm font-semibold text-white/40"
                           >
                              <svg
                                 className="w-4 h-4 text-white/30 shrink-0"
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
                  <div className="lg:col-span-3 flex flex-col gap-8 md:gap-10 lg:gap-16 items-center lg:items-end px-4 sm:px-6 lg:px-0">

                     {/* Waitlist Count */}
                     <div className="flex flex-col sm:flex-row items-center sm:items-center gap-4 text-center lg:text-right">

                        <div className="flex -space-x-3">
                           {avatars.map((url, i) => (
                              <img
                                 key={i}
                                 src={url}
                                 className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border-4 border-[#0a0a0c] object-cover"
                                 alt="User"
                              />
                           ))}
                        </div>

                        <div className="text-center sm:text-left">
                           <div className="text-white text-sm sm:text-base md:text-lg font-black leading-none">
                              2,438+ people
                           </div>

                           <div className="text-white/30 text-[0.68rem] sm:text-[0.75rem] font-bold mt-1">
                              are on the waitlist
                           </div>
                        </div>
                     </div>

                     {/* Founding Seller Spots Card */}
                     <div className="w-full max-w-[320px] sm:max-w-[360px] bg-[#0c0c10] border border-white/5 rounded-[22px] md:rounded-[24px] p-4 md:p-5 relative overflow-hidden shadow-2xl group/card">

                        {/* Glow Border */}
                        <div className="absolute inset-0 rounded-[22px] md:rounded-[24px] p-[1.5px] bg-gradient-to-r from-[#ec4899] via-[#ec4899]/30 to-transparent pointer-events-none opacity-90"></div>

                        <div className="relative z-10">
                           <span className="text-white text-xs sm:text-sm md:text-[0.9rem] block">
                              Founding Seller Spots
                           </span>

                           <div className="flex items-center gap-1.5 mt-2">

                              <span className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tighter">
                                 78
                              </span>

                              <span className="text-2xl md:text-3xl font-black text-[#ec4899] italic">
                                 /
                              </span>

                              <span className="text-lg sm:text-xl md:text-2xl font-black text-[#ec4899]">
                                 100
                              </span>

                              <span className="text-white/40 text-[0.55rem] sm:text-[0.65rem] md:text-[0.7rem] pt-2">
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
