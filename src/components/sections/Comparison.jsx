import React from 'react';
import vangoIcon from '../../assets/vango-icon.png';

const Comparison = () => {
   const platforms = [
      {
         name: 'TikTok Live',
         icon: (
            <svg width="24" height="24" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#00f2ea] drop-shadow-[0_0_8px_#ff0050]">
               <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" stroke="#ff0050" />
               <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
            </svg>
         ),
         points: [
            'Entertainment-first',
            'Algorithm dependent',
            'Limited seller tools',
            'No seller ownership',
            'Hard to scale'
         ],
         type: 'bad',
         rating: 1
      },
      {
         name: 'Instagram Live',
         icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="url(#ig-grad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-[0_0_8px_rgba(236,72,153,0.3)]">
               <defs>
                  <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
                     <stop offset="0%" style={{ stopColor: '#f9ce34' }} />
                     <stop offset="50%" style={{ stopColor: '#ee2a7b' }} />
                     <stop offset="100%" style={{ stopColor: '#6228d7' }} />
                  </linearGradient>
               </defs>
               <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
               <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
               <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
         ),
         points: [
            'Attention-first',
            'Weak commerce tools',
            'No real checkout flow',
            'No seller ecosystem',
            'Hard to grow'
         ],
         type: 'bad',
         rating: 1
      },
      {
         name: 'Traditional eCommerce',
         icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400 drop-shadow-[0_0_8px_rgba(96,165,250,0.3)]">
               <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
         ),
         points: [
            'Static and boring',
            'No real interaction',
            'Low engagement',
            'Hard to build trust',
            'Slow customer journey'
         ],
         type: 'neutral',
         rating: 1
      },
      {
         name: 'Vango Live',
         icon: <img src={vangoIcon} alt="Vango" className="w-8 h-8 object-contain transition-transform group-hover:scale-110" />,
         points: [
            'Commerce-first',
            'Tools built for sellers',
            'Instant live checkout',
            'Own your audience',
            'Built to help you scale'
         ],
         type: 'vango',
         rating: 5
      }
   ];

   return (
      <section
         className="py-5 md:py-10 lg:py-15 bg-brand-purple/10 relative overflow-hidden"
         id="about-us"
      >
         {/* Background Glows */}
         <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[300px] sm:w-[450px] lg:w-[600px] h-[300px] sm:h-[450px] lg:h-[600px] bg-brand-purple/5 blur-[120px] rounded-full"></div>

            <div className="absolute top-1/4 right-0 w-[250px] sm:w-[350px] lg:w-[500px] h-[250px] sm:h-[350px] lg:h-[500px] bg-brand-pink/5 blur-[100px] rounded-full"></div>
         </div>

         <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 xl:gap-16 items-start">

               {/* Header */}
               <div className="lg:col-span-3 lg:sticky lg:top-28 text-center lg:text-left">

                  <div className="hidden lg:flex items-center text-brand-blue text-[0.75rem] font-black tracking-[0.2em] mb-6 uppercase">
                     <span className="w-8 h-[2px] bg-brand-blue mr-4"></span>
                     OUR USP
                  </div>

                  <div className="text-brand-blue text-[0.75rem] font-black tracking-[0.2em] mb-5 uppercase lg:hidden">
                     OUR USP
                  </div>

                  <h2 className="text-[1.7rem] md:text-3xl xl:text-4xl font-semibold leading-tight text-white mb-5">
                     Not Social Media
                     <br />
                     With Shopping
                     <br />
                     Added On.
                  </h2>

                  <h3 className="text-[1.7rem] md:text-3xl xl:text-4xl font-semibold leading-tight  text-white/80">
                     <span className="bg-gradient-to-r from-white to-white/40 bg-clip-text text-transparent">
                        A Platform Built Specifically For
                     </span>

                     <br />

                     <span className="bg-gradient-to-r from-brand-purple via-brand-pink to-blue-500 bg-clip-text text-transparent">
                        Live Commerce.
                     </span>
                  </h3>
               </div>

               {/* Cards */}
               <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 md:gap-5">

                  {platforms.map((platform, i) => (
                     <div
                        key={i}
                        className={`relative rounded-[28px] md:rounded-[32px] p-6 md:p-7 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full group ${platform.type === 'vango'
                              ? 'bg-white/[0.05] shadow-[0_40px_100px_rgba(0,0,0,0.8)]'
                              : 'bg-white/[0.03] border border-white/10'
                           }`}
                     >

                        {/* Vango Border */}
                        {platform.type === 'vango' && (
                           <div className="absolute inset-0 rounded-[28px] md:rounded-[32px] p-[2px] bg-gradient-to-br from-brand-purple via-brand-pink to-orange-400 pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity">
                              <div className="w-full h-full bg-[#0a0a0c] rounded-[26px] md:rounded-[30px]"></div>
                           </div>
                        )}

                        <div className="relative z-10 flex flex-col h-full">

                           {/* Top */}
                           <div className="flex items-center gap-3 mb-8 md:mb-10">

                              <div className="w-11 h-11 rounded-2xl flex items-center justify-center bg-white/10 transition-transform duration-500 group-hover:scale-110 shrink-0">
                                 {platform.icon}
                              </div>

                              <span
                                 className={`font-bold text-md md:text-lg ${platform.type === 'vango'
                                       ? 'text-white'
                                       : 'text-white/80'
                                    }`}
                              >
                                 {platform.name}
                              </span>
                           </div>

                           {/* Points */}
                           <ul className="space-y-2 flex-grow mb-8 md:mb-8">

                              {platform.points.map((point, idx) => (
                                 <li
                                    key={idx}
                                    className="flex items-start gap-2 text-white/50"
                                 >

                                    {platform.type === 'vango' ? (
                                       <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center mt-0.5 shrink-0">
                                          <svg
                                             className="w-2.5 h-2.5 text-emerald-400"
                                             fill="none"
                                             stroke="currentColor"
                                             viewBox="0 0 24 24"
                                             strokeWidth="4"
                                          >
                                             <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M5 13l4 4L19 7"
                                             />
                                          </svg>
                                       </div>
                                    ) : platform.type === 'bad' ? (
                                       <div className="w-5 h-5 rounded-full bg-rose-500/20 flex items-center justify-center mt-0.5 shrink-0">
                                          <svg
                                             className="w-2 h-2 text-rose-500"
                                             fill="none"
                                             stroke="currentColor"
                                             viewBox="0 0 24 24"
                                             strokeWidth="4"
                                          >
                                             <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M6 18L18 6M6 6l12 12"
                                             />
                                          </svg>
                                       </div>
                                    ) : (
                                       <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center mt-0.5 shrink-0">
                                          <svg
                                             className="w-2.5 h-2.5 text-white/40"
                                             fill="none"
                                             stroke="currentColor"
                                             viewBox="0 0 24 24"
                                             strokeWidth="4"
                                          >
                                             <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M5 13l4 4L19 7"
                                             />
                                          </svg>
                                       </div>
                                    )}

                                    <span className="text-[0.78rem] sm:text-[0.82rem] font-semibold leading-relaxed text-white/70">
                                       {point}
                                    </span>
                                 </li>
                              ))}
                           </ul>

                           {/* Rating */}
                           <div className="flex gap-1.5 mt-auto">

                              {[...Array(5)].map((_, idx) => (
                                 <svg
                                    key={idx}
                                    className={`w-4 h-4 md:w-[18px] md:h-[18px] transition-colors duration-500 ${idx < platform.rating
                                          ? platform.type === 'vango'
                                             ? 'text-yellow-400 fill-yellow-400'
                                             : 'text-rose-500 fill-rose-500'
                                          : 'text-white/10 fill-white/10'
                                       }`}
                                    viewBox="0 0 20 20"
                                 >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                 </svg>
                              ))}
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
};

export default Comparison;