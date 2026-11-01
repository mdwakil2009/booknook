
"use client";

import Image from "next/image";
import Link from "next/link";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { FaArrowRightFromBracket } from "react-icons/fa6";

import { useEffect, useRef } from "react";

import type { Swiper as SwiperClass } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const Banner = () => {
  const swiperRef = useRef<SwiperClass | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      swiperRef.current?.slideNext();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full">
      <div className="group relative overflow-hidden bg-[#51351F]">
        <Swiper
          modules={[Pagination, Navigation, EffectFade]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          speed={900}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={{
            prevEl: ".banner-prev",
            nextEl: ".banner-next",
          }}
          className="booknook-swiper"
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="relative flex min-h-[460px] items-center sm:min-h-[520px] lg:min-h-[560px]">
              <Image
                src="/image/Frist Banner1.jpg"
                alt="BookNook Library"
                fill
                priority
                sizes="100vw"
                className="object-cover object-center"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#25170F]/60 via-[#51351F]/30 to-transparent" />

              {/* Content Container */}
              <div className="relative z-10 w-full px-4 py-16 sm:px-8 lg:px-10">
                <div className="mx-auto w-full max-w-6xl">
                  <div className="max-w-2xl">
                    <p className="mb-4 text-xs font-bold tracking-[2px] text-[#E8D4B5] sm:mb-5 sm:text-sm sm:tracking-[3px]">
                      WELCOME TO BOOKNOOK
                    </p>

                    <h1 className="text-3xl leading-tight font-bold tracking-tight text-[#FFFDF8] sm:text-4xl md:text-5xl lg:text-6xl">
                      Discover Your Next Favorite Book
                    </h1>

                    <p className="mt-4 max-w-xl text-sm leading-7 text-[#E8DDCE] sm:mt-6 sm:text-base sm:leading-8">
                      Explore a world of stories, discover amazing authors, and
                      find the perfect book for every moment of your life.
                    </p>

                    <Link
                      href="/books"
                      className="mt-7 inline-flex h-11 items-center justify-center gap-3 rounded-lg bg-[#E8D4B5] px-6 text-sm font-bold text-[#51351F] transition-all duration-300 hover:bg-[#FFFDF8] sm:mt-8 sm:h-12 sm:px-7 sm:text-base"
                    >
                      Browse Books
                      <FaArrowRightFromBracket />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="relative flex min-h-[460px] items-center sm:min-h-[520px] lg:min-h-[560px]">
              <Image
                src="/image/Banner2.jpg"
                alt="Beautiful Book Collection"
                fill
                sizes="100vw"
                className="object-cover object-center"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#25170F]/60 via-[#51351F]/30 to-transparent" />

              <div className="relative z-10 w-full px-4 py-16 sm:px-8 lg:px-10">
                <div className="mx-auto w-full max-w-6xl">
                  <div className="max-w-2xl">
                    <p className="mb-4 text-xs font-bold tracking-[2px] text-[#E8D4B5] sm:mb-5 sm:text-sm sm:tracking-[3px]">
                      A WORLD OF STORIES
                    </p>

                    <h1 className="text-3xl leading-tight font-bold tracking-tight text-[#FFFDF8] sm:text-4xl md:text-5xl lg:text-6xl">
                      Every Book Opens a New World
                    </h1>

                    <p className="mt-4 max-w-xl text-sm leading-7 text-[#E8DDCE] sm:mt-6 sm:text-base sm:leading-8">
                      Travel through imagination, experience unforgettable
                      adventures, and let every page take you somewhere new.
                    </p>

                    <Link
                      href="/books"
                      className="mt-7 inline-flex h-11 items-center justify-center gap-3 rounded-lg bg-[#E8D4B5] px-6 text-sm font-bold text-[#51351F] transition-all duration-300 hover:bg-[#FFFDF8] sm:mt-8 sm:h-12 sm:px-7 sm:text-base"
                    >
                      Browse Books
                      <FaArrowRightFromBracket />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div className="relative flex min-h-[460px] items-center sm:min-h-[520px] lg:min-h-[560px]">
              <Image
                src="/image/Banner3.jpg"
                alt="Cozy Reading Corner"
                fill
                sizes="100vw"
                className="object-cover object-center"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#25170F]/60 via-[#51351F]/30 to-transparent" />

              <div className="relative z-10 w-full px-4 py-16 sm:px-8 lg:px-10">
                <div className="mx-auto w-full max-w-6xl">
                  <div className="max-w-2xl">
                    <p className="mb-4 text-xs font-bold tracking-[2px] text-[#E8D4B5] sm:mb-5 sm:text-sm sm:tracking-[3px]">
                      LOVE READING
                    </p>

                    <h1 className="text-3xl leading-tight font-bold tracking-tight text-[#FFFDF8] sm:text-4xl md:text-5xl lg:text-6xl">
                      Make Reading Your Daily Habit
                    </h1>

                    <p className="mt-4 max-w-xl text-sm leading-7 text-[#E8DDCE] sm:mt-6 sm:text-base sm:leading-8">
                      Create beautiful reading moments with books that inspire,
                      educate, and entertain you every day.
                    </p>

                    <Link
                      href="/books"
                      className="mt-7 inline-flex h-11 items-center justify-center gap-3 rounded-lg bg-[#E8D4B5] px-6 text-sm font-bold text-[#51351F] transition-all duration-300 hover:bg-[#FFFDF8] sm:mt-8 sm:h-12 sm:px-7 sm:text-base"
                    >
                      Browse Books
                      <FaArrowRightFromBracket />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 4 */}
          <SwiperSlide>
            <div className="relative flex min-h-[460px] items-center sm:min-h-[520px] lg:min-h-[560px]">
              <Image
                src="/image/Banner4.jpg"
                alt="Classic Open Book"
                fill
                sizes="100vw"
                className="object-cover object-center"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#25170F]/60 via-[#51351F]/30 to-transparent" />

              <div className="relative z-10 w-full px-4 py-16 sm:px-8 lg:px-10">
                <div className="mx-auto w-full max-w-6xl">
                  <div className="max-w-2xl">
                    <p className="mb-4 text-xs font-bold tracking-[2px] text-[#E8D4B5] sm:mb-5 sm:text-sm sm:tracking-[3px]">
                      BORROW & ENJOY
                    </p>

                    <h1 className="text-3xl leading-tight font-bold tracking-tight text-[#FFFDF8] sm:text-4xl md:text-5xl lg:text-6xl">
                      Your Favorite Books Are Waiting
                    </h1>

                    <p className="mt-4 max-w-xl text-sm leading-7 text-[#E8DDCE] sm:mt-6 sm:text-base sm:leading-8">
                      Borrow wonderful books, enjoy your favorite stories, and
                      make every reading experience memorable.
                    </p>

                    <Link
                      href="/books"
                      className="mt-7 inline-flex h-11 items-center justify-center gap-3 rounded-lg bg-[#E8D4B5] px-6 text-sm font-bold text-[#51351F] transition-all duration-300 hover:bg-[#FFFDF8] sm:mt-8 sm:h-12 sm:px-7 sm:text-base"
                    >
                      Browse Books
                      <FaArrowRightFromBracket />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 5 */}
          <SwiperSlide>
            <div className="relative flex min-h-[460px] items-center sm:min-h-[520px] lg:min-h-[560px]">
              <Image
                src="/image/Banner5.jpg"
                alt="Premium Library Collection"
                fill
                sizes="100vw"
                className="object-cover object-center"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#25170F]/60 via-[#51351F]/30 to-transparent" />

              <div className="relative z-10 w-full px-4 py-16 sm:px-8 lg:px-10">
                <div className="mx-auto w-full max-w-6xl">
                  <div className= "max-w-2xl">
                    <p className="mt-5 text-xs font-bold tracking-[2px] text-[#E8D4B5] sm:mb-5 sm:text-sm sm:tracking-[3px]">
                      EXPLORE OUR COLLECTION
                    </p>

                    <h1 className="text-3xl leading-tight font-bold tracking-tight text-[#FFFDF8] sm:text-4xl md:text-5xl lg:text-6xl">
                      Find Stories That Inspire You
                    </h1>

                    <p className="mt-4 max-w-xl text-sm leading-7 text-[#E8DDCE] sm:mt-6 sm:text-base sm:leading-8">
                      From timeless classics to modern favorites, discover books
                      that match your interests and imagination.
                    </p>

                    <Link
                      href="/books"
                      className="mt-7 inline-flex h-11 items-center justify-center gap-3 rounded-lg bg-[#E8D4B5] px-6 text-sm font-bold text-[#51351F] transition-all duration-300 hover:bg-[#FFFDF8] sm:mt-8 sm:h-12 sm:px-7 sm:text-base"
                    >
                      Browse Books
                      <FaArrowRightFromBracket />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        {/* Previous & Next Buttons */}
        <div className="absolute right-4 bottom-5 z-20 flex items-center gap-2 sm:right-8 sm:bottom-8 sm:gap-3 lg:right-12 lg:bottom-10">
          <button
            type="button"
            className="banner-prev flex size-9 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md transition hover:bg-[#E8D4B5] hover:text-[#51351F] sm:size-11"
            aria-label="Previous slide"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            type="button"
            className="banner-next flex size-9 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md transition hover:bg-[#E8D4B5] hover:text-[#51351F] sm:size-11"
            aria-label="Next slide"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
