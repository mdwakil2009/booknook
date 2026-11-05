
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
            <div className="relative isolate flex min-h-[400px] items-center overflow-hidden sm:min-h-[460px] md:min-h-[510px] lg:min-h-[560px]">
              <Image
                src="/image/Frist Banner1.jpg"
                alt="BookNook Library"
                fill
                priority
                sizes="100vw"
                className="object-cover object-center"
                style={{
                  objectPosition: "center center",
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#25170F]/75 via-[#51351F]/40 to-transparent" />

              <div className="relative z-10 w-full px-5 py-14 sm:px-8 sm:py-16 md:px-10 lg:px-10 lg:py-20">
                <div className="mx-auto w-full max-w-6xl">
                  <div className="max-w-2xl">
                    <p className="mb-4 text-[10px] font-semibold tracking-[2px] text-[#E8D4B5] sm:mb-5 sm:text-xs sm:tracking-[3px]">
                      WELCOME TO BOOKNOOK
                    </p>

                    <h1 className="max-w-xl text-2xl leading-[1.2] font-semibold tracking-tight text-[#FFFDF8] sm:text-3xl md:text-4xl lg:text-5xl">
                      Discover Your Next Favorite Book
                    </h1>

                    <p className="mt-4 max-w-lg text-xs leading-6 font-normal text-[#E8DDCE] sm:mt-5 sm:text-sm sm:leading-7 md:text-base md:leading-8">
                      Explore a world of stories, discover amazing authors, and
                      find the perfect book for every moment of your life.
                    </p>

                    <Link
                      href="/books"
                      className="mt-6 inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-[#E8D4B5] px-4 text-xs font-semibold text-[#51351F] shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#FFFDF8] hover:shadow-lg sm:mt-7 sm:h-11 sm:gap-3 sm:px-6 sm:text-sm"
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
            <div className="relative isolate flex min-h-[400px] items-center overflow-hidden sm:min-h-[460px] md:min-h-[510px] lg:min-h-[560px]">
              <Image
                src="/image/Banner2.jpg"
                alt="Beautiful Book Collection"
                fill
                sizes="100vw"
                className="object-cover object-center"
                style={{
                  objectPosition: "center center",
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#25170F]/75 via-[#51351F]/40 to-transparent" />

              <div className="relative z-10 w-full px-5 py-14 sm:px-8 sm:py-16 md:px-10 lg:px-10 lg:py-20">
                <div className="mx-auto w-full max-w-6xl">
                  <div className="max-w-2xl">
                    <p className="mb-4 text-[10px] font-semibold tracking-[2px] text-[#E8D4B5] sm:mb-5 sm:text-xs sm:tracking-[3px]">
                      A WORLD OF STORIES
                    </p>

                    <h1 className="max-w-xl text-2xl leading-[1.2] font-semibold tracking-tight text-[#FFFDF8] sm:text-3xl md:text-4xl lg:text-5xl">
                      Every Book Opens a New World
                    </h1>

                    <p className="mt-4 max-w-lg text-xs leading-6 font-normal text-[#E8DDCE] sm:mt-5 sm:text-sm sm:leading-7 md:text-base md:leading-8">
                      Travel through imagination, experience unforgettable
                      adventures, and let every page take you somewhere new.
                    </p>

                    <Link
                      href="/books"
                      className="mt-6 inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-[#E8D4B5] px-4 text-xs font-semibold text-[#51351F] shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#FFFDF8] hover:shadow-lg sm:mt-7 sm:h-11 sm:gap-3 sm:px-6 sm:text-sm"
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
            <div className="relative isolate flex min-h-[400px] items-center overflow-hidden sm:min-h-[460px] md:min-h-[510px] lg:min-h-[560px]">
              <Image
                src="/image/Banner3.jpg"
                alt="Cozy Reading Corner"
                fill
                sizes="100vw"
                className="object-cover object-center"
                style={{
                  objectPosition: "center center",
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#25170F]/75 via-[#51351F]/40 to-transparent" />

              <div className="relative z-10 w-full px-5 py-14 sm:px-8 sm:py-16 md:px-10 lg:px-10 lg:py-20">
                <div className="mx-auto w-full max-w-6xl">
                  <div className="max-w-2xl">
                    <p className="mb-4 text-[10px] font-semibold tracking-[2px] text-[#E8D4B5] sm:mb-5 sm:text-xs sm:tracking-[3px]">
                      LOVE READING
                    </p>

                    <h1 className="max-w-xl text-2xl leading-[1.2] font-semibold tracking-tight text-[#FFFDF8] sm:text-3xl md:text-4xl lg:text-5xl">
                      Make Reading Your Daily Habit
                    </h1>

                    <p className="mt-4 max-w-lg text-xs leading-6 font-normal text-[#E8DDCE] sm:mt-5 sm:text-sm sm:leading-7 md:text-base md:leading-8">
                      Create beautiful reading moments with books that inspire,
                      educate, and entertain you every day.
                    </p>

                    <Link
                      href="/books"
                      className="mt-6 inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-[#E8D4B5] px-4 text-xs font-semibold text-[#51351F] shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#FFFDF8] hover:shadow-lg sm:mt-7 sm:h-11 sm:gap-3 sm:px-6 sm:text-sm"
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
            <div className="relative isolate flex min-h-[400px] items-center overflow-hidden sm:min-h-[460px] md:min-h-[510px] lg:min-h-[560px]">
              <Image
                src="/image/Banner4.jpg"
                alt="Classic Open Book"
                fill
                sizes="100vw"
                className="object-cover object-center"
                style={{
                  objectPosition: "center center",
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#25170F]/75 via-[#51351F]/40 to-transparent" />

              <div className="relative z-10 w-full px-5 py-14 sm:px-8 sm:py-16 md:px-10 lg:px-10 lg:py-20">
                <div className="mx-auto w-full max-w-6xl">
                  <div className="max-w-2xl">
                    <p className="mb-4 text-[10px] font-semibold tracking-[2px] text-[#E8D4B5] sm:mb-5 sm:text-xs sm:tracking-[3px]">
                      BORROW & ENJOY
                    </p>

                    <h1 className="max-w-xl text-2xl leading-[1.2] font-semibold tracking-tight text-[#FFFDF8] sm:text-3xl md:text-4xl lg:text-5xl">
                      Your Favorite Books Are Waiting
                    </h1>

                    <p className="mt-4 max-w-lg text-xs leading-6 font-normal text-[#E8DDCE] sm:mt-5 sm:text-sm sm:leading-7 md:text-base md:leading-8">
                      Borrow wonderful books, enjoy your favorite stories, and
                      make every reading experience memorable.
                    </p>

                    <Link
                      href="/books"
                      className="mt-6 inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-[#E8D4B5] px-4 text-xs font-semibold text-[#51351F] shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#FFFDF8] hover:shadow-lg sm:mt-7 sm:h-11 sm:gap-3 sm:px-6 sm:text-sm"
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
            <div className="relative isolate flex min-h-[400px] items-center overflow-hidden sm:min-h-[460px] md:min-h-[510px] lg:min-h-[560px]">
              <Image
                src="/image/Banner5.jpg"
                alt="Premium Library Collection"
                fill
                sizes="100vw"
                className="object-cover object-center"
                style={{
                  objectPosition: "center center",
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#25170F]/75 via-[#51351F]/40 to-transparent" />

              <div className="relative z-10 w-full px-5 py-14 sm:px-8 sm:py-16 md:px-10 lg:px-10 lg:py-20">
                <div className="mx-auto w-full max-w-6xl">
                  <div className="max-w-2xl">
                    <p className="mb-4 text-[10px] font-semibold tracking-[2px] text-[#E8D4B5] sm:mb-5 sm:text-xs sm:tracking-[3px]">
                      EXPLORE OUR COLLECTION
                    </p>

                    <h1 className="max-w-xl text-2xl leading-[1.2] font-semibold tracking-tight text-[#FFFDF8] sm:text-3xl md:text-4xl lg:text-5xl">
                      Find Stories That Inspire You
                    </h1>

                    <p className="mt-4 max-w-lg text-xs leading-6 font-normal text-[#E8DDCE] sm:mt-5 sm:text-sm sm:leading-7 md:text-base md:leading-8">
                      From timeless classics to modern favorites, discover
                      books that match your interests and imagination.
                    </p>

                    <Link
                      href="/books"
                      className="mt-6 inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-[#E8D4B5] px-4 text-xs font-semibold text-[#51351F] shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#FFFDF8] hover:shadow-lg sm:mt-7 sm:h-11 sm:gap-3 sm:px-6 sm:text-sm"
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
        <div className="absolute right-4 bottom-4 z-20 flex items-center gap-2 sm:right-8 sm:bottom-7 sm:gap-3 lg:right-12 lg:bottom-10">
          <button
            type="button"
            className="banner-prev flex size-8 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md transition hover:bg-[#E8D4B5] hover:text-[#51351F] sm:size-10 md:size-11"
            aria-label="Previous slide"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            type="button"
            className="banner-next flex size-8 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md transition hover:bg-[#E8D4B5] hover:text-[#51351F] sm:size-10 md:size-11"
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
