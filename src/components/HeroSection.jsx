import React from 'react';
import heroImage from '../assets/images/image-mockups.png';
import heroBackgroundMobile from '../assets/images/bg-intro-mobile.svg';
import heroBackgroundDesktop from '../assets/images/bg-intro-desktop.svg';

const HeroSection = () => {
  return (
    <section className="relative bg-white dark:bg-gray-900 min-h-[70vh]">
      {/* Mobile screen */}
      <div className="lg:hidden mt-10 flex flex-col">
        <div className="relative bg-gray-50 dark:bg-gray-800 pb-8">
          <div 
            className="absolute inset-0 bg-no-repeat bg-cover opacity-80 dark:opacity-40"
            style={{
              backgroundImage: `url(${heroBackgroundMobile})`,
              backgroundPosition: "center -50px",
              backgroundSize: "100%",
            }}
          />
          
          <div className="relative px-6 -mt-20">
            <img
              src={heroImage}
              alt="Banking app interface"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        <div className="px-4 text-center pb-20">
          <h1 className="text-[40px] leading-[47px] tracking-[-0.29px] font-normal text-gray-900 dark:text-white">
            Next generation digital banking
          </h1>
          <p className="mt-4 text-[15px] leading-[25px] text-gray-500 dark:text-gray-400 px-4">
            Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.
          </p>
          <div className="mt-8">
            <button className="rounded-full bg-gradient-to-r from-green-400 to-cyan-500 text-white px-8 py-3 hover:opacity-75 transition-opacity text-sm">
              Request Invite
            </button>
          </div>
        </div>
      </div>

      {/* Desktop screen */}
      <div className="hidden lg:block">
        <div className="max-w-7xl mx-auto relative">
          <div 
            className="absolute left-[60%] w-[90%] h-[65vh] bg-no-repeat opacity-80 dark:opacity-40"
            style={{
              backgroundImage: `url(${heroBackgroundDesktop})`,
              backgroundPosition: "left 52%",
              backgroundSize: "cover",
              transform: "scale(1.12)",
              zIndex: 10,
            }}
          />

          <div className="relative lg:w-full">
            <div 
              className="relative lg:absolute -bottom-[470px] lg:right-[-34%] lg:w-[60%]"
              style={{ zIndex: 40 }}
            >
              <img
                src={heroImage}
                alt="Banking app interface"
                className="w-full h-auto object-contain relative"
              />
            </div>

            <main className="mx-auto px-8 relative top-[7em]">
              <div className="lg:text-left lg:max-w-xl pt-32 pb-8" style={{ zIndex: 5 }}>
                <h1 className="text-4xl tracking-tight font-normal text-gray-900 dark:text-white sm:text-5xl md:text-[3.25rem]">
                  <span className="block">Next generation</span>
                  <span className="block text-gray-900 dark:text-white">digital banking</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 dark:text-gray-400 sm:mt-5 sm:text-lg sm:max-w-xl md:mt-5 md:text-lg">
                  Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.
                </p>
                <div className="mt-8">
                  <button className="rounded-full bg-gradient-to-r from-green-400 to-cyan-500 text-white px-8 py-3 hover:opacity-75 transition-opacity">
                    Request Invite
                  </button>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
