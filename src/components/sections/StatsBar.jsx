import React from 'react';

const StatsBar = () => {
   const stats = [
      {
         icon: (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
               <line x1="18" y1="20" x2="18" y2="10" />
               <line x1="12" y1="20" x2="12" y2="4" />
               <line x1="6" y1="20" x2="6" y2="14" />
            </svg>
         ),
         title: 'Higher Conversions',
         desc: 'Up to 3X more sales compared to other platforms',
         color: 'text-purple-500',
      },
      {
         icon: (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
               <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
               <line x1="3" y1="6" x2="21" y2="6" />
               <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
         ),
         title: 'Real-Time Sales',
         desc: 'Buyers purchase without leaving the live',
         color: 'text-indigo-500',
      },
      {
         icon: (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
               <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
         ),
         title: 'Stronger Relationships',
         desc: 'Build fan clubs and loyal customer communities',
         color: 'text-blue-500',
      },
      {
         icon: (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
               <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
               <circle cx="9" cy="7" r="4" />
               <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
               <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
         ),
         title: 'Better Retention',
         desc: 'Keep customers coming back for more',
         color: 'text-pink-500',
      },
      {
         icon: (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
               <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
               <path d="m9 12 2 2 4-4" />
            </svg>
         ),
         title: 'More Profit',
         desc: 'Lower fees, more earnings for you',
         color: 'text-rose-500',
      },
   ];

   return (
      <section className="bg-brand-purple/10 relative z-20 -mt-10 sm:-mt-12 md:-mt-16 lg:-mt-20 overflow-hidden group/section">

         {/* Background Glow */}
         <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[250px] sm:w-[350px] lg:w-[450px] h-[250px] sm:h-[350px] lg:h-[450px] bg-brand-purple/10 blur-[120px] rounded-full opacity-0 group-hover/section:opacity-100 transition-opacity duration-1000"></div>

         <div className="absolute top-1/2 left-3/4 -translate-x-1/2 -translate-y-1/2 w-[250px] sm:w-[350px] lg:w-[450px] h-[250px] sm:h-[350px] lg:h-[450px] bg-brand-pink/10 blur-[120px] rounded-full opacity-0 group-hover/section:opacity-100 transition-opacity duration-1000"></div>

         <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

            <div className="relative backdrop-blur-3xl rounded-[28px] md:rounded-[40px] p-6 sm:p-8 md:p-12 lg:p-16 shadow-[0_40px_100px_rgba(0,0,0,0.6)] overflow-hidden group">

               {/* Shimmer */}
               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[2000ms] ease-in-out"></div>

               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 sm:gap-12 lg:gap-0 relative z-10">

                  {stats.map((stat, i) => (
                     <div
                        key={i}
                        className={`flex flex-col items-center text-center px-2 sm:px-4 lg:px-6 relative transition-all duration-500 hover:-translate-y-2 group/item ${
                           i !== stats.length - 1
                              ? 'lg:border-r lg:border-white/5'
                              : ''
                        }`}
                     >

                        {/* Icon Glow */}
                        <div
                           className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/4 w-24 sm:w-28 lg:w-32 h-24 sm:h-28 lg:h-32 blur-[40px] rounded-full opacity-0 group-hover/item:opacity-40 transition-opacity duration-500 ${
                              stat.color === 'text-purple-500'
                                 ? 'bg-purple-500'
                                 : stat.color === 'text-indigo-500'
                                 ? 'bg-indigo-500'
                                 : stat.color === 'text-blue-500'
                                 ? 'bg-blue-500'
                                 : stat.color === 'text-pink-500'
                                 ? 'bg-pink-500'
                                 : 'bg-rose-500'
                           }`}
                        ></div>

                        {/* Icon */}
                        <div
                           className={`${stat.color} mb-5 sm:mb-6 lg:mb-8 scale-90 sm:scale-100 filter drop-shadow-[0_0_15px_currentColor] relative z-10 transition-all duration-500 group-hover/item:scale-110 group-hover/item:rotate-3`}
                        >
                           {stat.icon}
                        </div>

                        {/* Title */}
                        <h4 className="text-lg sm:text-[1.1rem] lg:text-[1.2rem] font-black mb-2 sm:mb-3 tracking-tight text-white relative z-10 group-hover/item:text-brand-purple transition-colors duration-300">
                           {stat.title}
                        </h4>

                        {/* Description */}
                        <p className="text-xs sm:text-sm text-white/50 leading-relaxed font-semibold max-w-[240px] relative z-10 group-hover/item:text-white/80 transition-colors duration-300">
                           {stat.desc}
                        </p>

                        {/* Bottom Shine */}
                        <div className="absolute bottom-[-40px] sm:bottom-[-50px] lg:bottom-[-64px] left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-500"></div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
};

export default StatsBar;