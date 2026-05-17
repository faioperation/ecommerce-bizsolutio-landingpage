import React from 'react';
import heroImg from '../../assets/ChatGPT Image May 16, 2026, 09_47_47 AM.png';

const Hero = () => {
   const avatars = [
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop',
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop',
      'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&h=100&fit=crop',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
      'https://images.unsplash.com/photo-1528892952291-009c663ce843?w=100&h=100&fit=crop'
   ];

  return (
<section
   className="relative pt-28 sm:pt-32 md:pt-36 lg:pt-40 pb-14 md:pb-20 overflow-hidden bg-brand-purple/5"
   id="home"
>

   {/* Background Glow */}
   <div className="absolute top-0 right-0 w-[300px] sm:w-[450px] lg:w-[600px] h-[300px] sm:h-[450px] lg:h-[600px] bg-brand-purple/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>

   <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-14 lg:gap-20">

      {/* LEFT CONTENT */}
      <div className="flex-1 max-w-[620px] z-10 text-center lg:text-left">

         {/* Badge */}
         <div className="inline-flex items-center gap-2 bg-[#1a1a24]/50 border border-white/10 text-white/80 px-4 py-1.5 rounded-full text-[0.72rem] sm:text-[0.8rem] font-bold tracking-[0.2em] mb-6 md:mb-8 uppercase">
            <span className="w-1.5 h-1.5 bg-red-500 rounded-full shadow-[0_0_8px_#ef4444] animate-pulse"></span>
            COMING SOON
         </div>

         {/* Heading */}
         <h1 className="text-[2.4rem] sm:text-5xl md:text-6xl xl:text-7xl font-extrabold leading-[1.12] mb-6 md:mb-8">
            Built For
            <br />
            People Who
            <br />
            <span className="bg-gradient-to-r from-brand-pink to-brand-blue bg-clip-text text-transparent">
               Sell Live.
            </span>
         </h1>

         {/* Description */}
         <p className="text-sm sm:text-base md:text-lg text-white/50 leading-relaxed mb-8 md:mb-10 max-w-[520px] mx-auto lg:mx-0">
            Vango Live gives sellers the tools, audience engagement and checkout experience modern live commerce actually needs.
         </p>

         {/* Buttons */}
         <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 md:gap-6 mb-6 md:mb-10">

            <a
               href="#waitlist"
               className="group flex items-center justify-center gap-3 bg-btn-gradient text-white px-7 md:px-8 py-4 rounded-md font-bold shadow-2xl shadow-brand-pink/25 hover:scale-105 active:scale-95 transition-all text-sm md:text-md w-full sm:w-auto"
            >
               <span>Join the Waitlist</span>

               <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="group-hover:translate-x-1 transition-transform"
               >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
               </svg>
            </a>

            <a href="#how-it-works" className="flex items-center gap-3 md:gap-4 text-white font-bold border border-white/10 rounded-lg hover:scale-105 active:scale-95 transition-all p-1.5 hover:text-brand-pink group text-sm md:text-base">

               <span className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-brand-purple/50 flex items-center justify-center bg-brand-purple/10 text-brand-purple group-hover:bg-brand-purple/20 transition-all shadow-[0_0_15px_rgba(107,33,168,0.3)]">
                  <svg
                     width="22"
                     height="22"
                     viewBox="0 0 24 24"
                     fill="currentColor"
                     className="ml-1"
                  >
                     <path d="M5 3l14 9-14 9V3z" />
                  </svg>
               </span>

               See How It Works
            </a>
         </div>

         {/* Users */}
         <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 sm:gap-6 pt-4 border-t border-white/5 lg:border-none">

            <div className="flex -space-x-3">
               {avatars.map((url, i) => (
                  <div
                     key={i}
                     className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-[#0a0a0c] bg-cover bg-center shadow-lg"
                     style={{
                        backgroundImage: `url(${url})`,
                     }}
                  ></div>
               ))}
            </div>

            <div className="flex flex-col text-center sm:text-left">
               <strong className="text-base md:text-lg font-bold text-white">
                  3,248+ sellers already joined
               </strong>

               <span className="text-[0.73rem] md:text-lg   text-white/50">
                  Be early.Be successful.
               </span>
            </div>
         </div>
      </div>

      {/* RIGHT CONTENT */}
      <div className="flex-1 relative z-10 flex justify-center lg:justify-end w-full">

         <div className="relative w-full max-w-[260px] sm:max-w-[340px] md:max-w-[400px] lg:max-w-[460px] animate-fade-in-up lg:rotate-[6deg] hover:rotate-0 transition-transform duration-700">

            {/* Hero Image */}
            <img
               src={heroImg}
               alt="Vango Live Platform"
               className="w-full h-auto drop-shadow-[0_30px_60px_rgba(0,0,0,0.8)]"
            />

            {/* LEFT FLOATING CARDS */}
            <div className="absolute top-[18%] left-[-34%] hidden 2xl:flex flex-col gap-3.5 z-30">

               {/* Purchase */}
               <div className="bg-[#1a1a24]/40 backdrop-blur-md border border-white/10 p-3 px-5 rounded-[22px] flex items-center gap-4 shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:scale-105 transition-all duration-500">

                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-500">
                     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.5 4 6.5 2 2 3 5.5 3 8.5a7 7 0 0 1-14 0c0-1.15.3-2.35 1-3.5 1.5 2 2.5 2.5 3.5 3z" />
                     </svg>
                  </div>

                  <div className="flex flex-col">
                     <span className="text-[0.75rem] font-semibold text-white/90">
                        Someone just
                     </span>

                     <span className="text-[0.75rem] font-semibold text-white/90">
                        purchased
                     </span>
                  </div>
               </div>

               {/* Followers */}
               <div className="bg-[#1a1a24]/40 backdrop-blur-md border border-white/10 p-3 px-5 rounded-[22px] flex items-center gap-4 shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:scale-105 transition-all duration-500">

                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500">
                     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                     </svg>
                  </div>

                  <div className="flex flex-col">
                     <span className="text-[0.75rem] font-semibold text-white/90">
                        New Follower!
                     </span>

                     <span className="text-[0.65rem] font-bold text-blue-400">
                        +128
                     </span>
                  </div>
               </div>

              <div className="bg-[#1a1a24]/40 backdrop-blur-md border border-white/10 p-3 px-5 rounded-[22px] flex items-center gap-4 shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:scale-105 transition-all duration-500">

                {/* Better Voucher Icon */}
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.25)]">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 7V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2" />
                    <path d="M20 11v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8" />
                    <path d="M4 11h16" />
                    <path d="M12 7v8" />
                    <path d="M9 10h6" />
                  </svg>
                </div>

                <div className="flex flex-col">
                  <span className="text-[0.75rem] font-semibold text-white/90">
                    Voucher Unlocked!
                  </span>

                  <span className="text-[0.65rem] font-bold text-purple-400">
                    15% OFF
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT FLOATING CARDS */}
            <div className="absolute top-[15%] right-[-27%] hidden 2xl:flex flex-col gap-3.5 z-30">

               {/* Watching */}
               <div className="bg-[#1a1a24]/40 backdrop-blur-md border border-white/10 p-4 px-6 rounded-[24px] flex items-center gap-5 shadow-[0_20px_50px_rgba(0,0,0,0.4)] hover:scale-105 transition-all duration-500">

                  <div className="text-white/40">
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                     </svg>
                  </div>

                  <div className="flex flex-col">
                     <strong className="text-2xl font-bold text-white">
                        82
                     </strong>

                     <span className="text-[0.65rem] text-white/40 uppercase tracking-[0.1em]">
                        People watching
                     </span>
                  </div>
               </div>

               {/* Sold */}
               <div className="bg-[#1a1a24]/40 backdrop-blur-md border border-white/10 p-4 px-6 rounded-[24px] flex items-center gap-5 shadow-[0_20px_50px_rgba(0,0,0,0.4)] hover:scale-105 transition-all duration-500">

                  <div className="text-red-500">
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <circle cx="8" cy="21" r="1" />
                        <circle cx="19" cy="21" r="1" />
                        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                     </svg>
                  </div>

                  <div className="flex flex-col">
                     <strong className="text-2xl font-bold text-red-500">
                        57
                     </strong>

                     <span className="text-[0.65rem] text-white/40 uppercase tracking-[0.1em]">
                        Products sold
                     </span>
                  </div>
               </div>

              <div className="bg-[#1a1a24]/40 backdrop-blur-md border border-white/10 p-4 px-6 rounded-[24px] flex items-center gap-5 shadow-[0_20px_50px_rgba(0,0,0,0.4)] hover:scale-105 transition-all duration-500">

                {/* Better Flash Sale Icon */}
                <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center text-red-500 shadow-[0_0_25px_rgba(239,68,68,0.25)]">

                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />
                  </svg>
                </div>

                <div className="flex flex-col">
                  <strong className="text-2xl font-bold text-red-500 leading-none">
                    00:57
                  </strong>

                  <span className="text-[0.65rem] text-white/40 uppercase tracking-[0.1em] mt-1">
                    Flash Sale
                  </span>

                  <span className="text-[0.65rem] font-bold text-red-400 uppercase tracking-[0.1em]">
                    -20% OFF
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Hearts */}
            <div className="absolute -bottom-6 sm:-bottom-10 -right-4 sm:-right-10 flex flex-col gap-5 sm:gap-8 pointer-events-none">

               {[
                  {
                     size: 'w-6 h-6',
                     delay: '1s',
                     pos: 'translate-x-0',
                  },
                  {
                     size: 'w-4 h-4',
                     delay: '1.5s',
                     pos: 'translate-x-4',
                  },
                  {
                     size: 'w-8 h-8',
                     delay: '2s',
                     pos: '-translate-x-6',
                  },
               ].map((heart, i) => (
                  <div
                     key={i}
                     className={`text-red-500/40 animate-bounce ${heart.size} ${heart.pos}`}
                     style={{
                        animationDelay: heart.delay,
                        animationDuration: '3s',
                     }}
                  >
                     <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                     </svg>
                  </div>
               ))}
            </div>

            {/* Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-purple/20 blur-[100px] -z-10 rounded-full"></div>
         </div>
      </div>
   </div>
</section>
  );
};

export default Hero;