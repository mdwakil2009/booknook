"use client";

import Image from "next/image";
import Link from "next/link";

import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { Swiper as SwiperClass } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import {  Pagination, Navigation, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { useEffect, useRef } from "react";
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
                sizes="(max-width: 768px) 100vw, 1280px"
                className="object-cover object-center"
              />

              <div className="absolute inset-0 from-[#25170F]/40 via-[#51351F]/20 to-transparent" />

              <div className="relative z-10 w-full px-6 py-16 sm:px-12 lg:px-16">
                <div className="max-w-2xl">
                  <p className="mb-5 text-sm font-bold tracking-[3px] text-[#E8D4B5]">
                    WELCOME TO BOOKNOOK
                  </p>

                  <h1 className="text-4xl leading-tight font-bold tracking-tight text-[#FFFDF8] sm:text-5xl lg:text-6xl">
                    Discover Your Next Favorite Book
                  </h1>

                  <p className="mt-6 max-w-xl text-sm leading-7 text-[#E8DDCE] sm:text-base sm:leading-8">
                    Explore a world of stories, discover amazing authors, and
                    find the perfect book for every moment of your life.
                  </p>

                  <Button
                    size="lg"
                    className="mt-8 h-12 rounded-lg bg-[#E8D4B5] px-7 font-bold text-[#51351F] transition-all hover:bg-[#FFFDF8]"
                  >
                    <Link className="flex items-center gap-3" href="/books">
                      Browse Books <FaArrowRightFromBracket />
                    </Link>
                  </Button>
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
                sizes="(max-width: 768px) 100vw, 1280px"
                className="object-cover object-center"
              />
              <div className="absolute inset-0  from-[#25170F]/40 via-[#51351F]/20 to-transparent" />

              <div className="relative z-10 w-full px-6 py-16 sm:px-12 lg:px-16">
                <div className="max-w-2xl">
                  <p className="mb-5 text-sm font-bold tracking-[3px] text-[#E8D4B5]">
                    A WORLD OF STORIES
                  </p>

                  <h1 className="text-4xl leading-tight font-bold tracking-tight text-[#FFFDF8] sm:text-5xl lg:text-6xl">
                    Every Book Opens a New World
                  </h1>

                  <p className="mt-6 max-w-xl text-sm leading-7 text-[#E8DDCE] sm:text-base sm:leading-8">
                    Travel through imagination, experience unforgettable
                    adventures, and let every page take you somewhere new.
                  </p>

                  <Button
                    size="lg"
                    className="mt-8 h-12 rounded-lg bg-[#E8D4B5] px-7 font-bold text-[#51351F] transition-all hover:bg-[#FFFDF8]"
                  >
                    <Link className="flex items-center gap-3" href="/books">
                      Browse Books <FaArrowRightFromBracket />
                    </Link>
                  </Button>
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
                sizes="(max-width: 768px) 100vw, 1280px"
                className="object-cover object-center"
              />

              <div className="absolute inset-0  from-[#25170F]/40 via-[#51351F]/20 to-transparent" />

              <div className="relative z-10 w-full px-6 py-16 sm:px-12 lg:px-16">
                <div className="max-w-2xl">
                  <p className="mb-5 text-sm font-bold tracking-[3px] text-[#E8D4B5]">
                    LOVE READING
                  </p>

                  <h1 className="text-4xl leading-tight font-bold tracking-tight text-[#FFFDF8] sm:text-5xl lg:text-6xl">
                    Make Reading Your Daily Habit
                  </h1>

                  <p className="mt-6 max-w-xl text-sm leading-7 text-[#E8DDCE] sm:text-base sm:leading-8">
                    Create beautiful reading moments with books that inspire,
                    educate, and entertain you every day.
                  </p>

                  <Button
                    size="lg"
                    className="mt-8 h-12 rounded-lg bg-[#E8D4B5] px-7 font-bold text-[#51351F] transition-all hover:bg-[#FFFDF8]"
                  >
                    <Link className="flex items-center gap-3" href="/books">
                      Browse Books <FaArrowRightFromBracket />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 4 */}
          <SwiperSlide>
            <div className="relative flex min-h-[460px] items-center sm:min-h-[520px] lg:min-h-[560px]">
              <Image
                src="/image/Banner4photos.jpg"
                alt="Classic Open Book"
                fill
                sizes="(max-width: 768px) 100vw, 1280px"
                className="object-cover object-center"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#25170F]/40 via-[#51351F]/20 to-transparent" />

              <div className="relative z-10 w-full px-6 py-16 sm:px-12 lg:px-16">
                <div className="max-w-2xl">
                  <p className="mb-5 text-sm font-bold tracking-[3px] text-[#E8D4B5]">
                    BORROW & ENJOY
                  </p>

                  <h1 className="text-4xl leading-tight font-bold tracking-tight text-[#FFFDF8] sm:text-5xl lg:text-6xl">
                    Your Favorite Books Are Waiting
                  </h1>

                  <p className="mt-6 max-w-xl text-sm leading-7 text-[#E8DDCE] sm:text-base sm:leading-8">
                    Borrow wonderful books, enjoy your favorite stories, and
                    make every reading experience memorable.
                  </p>

                  <Button
                    size="lg"
                    className="mt-8 h-12 rounded-lg bg-[#E8D4B5] px-7 font-bold text-[#51351F] transition-all hover:bg-[#FFFDF8]"
                  >
                    <Link className="flex items-center gap-3" href="/books">
                      Browse Books <FaArrowRightFromBracket />
                    </Link>
                  </Button>
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
                sizes="(max-width: 768px) 100vw, 1280px"
                className="object-cover object-center"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#25170F]/40 via-[#51351F]/20 to-transparent" />

              <div className="relative z-10 w-full px-6 py-16 sm:px-12 lg:px-16">
                <div className="max-w-2xl">
                  <p className="mb-5 text-sm font-bold tracking-[3px] text-[#E8D4B5]">
                    EXPLORE OUR COLLECTION
                  </p>

                  <h1 className="text-4xl leading-tight font-bold tracking-tight text-[#FFFDF8] sm:text-5xl lg:text-6xl">
                    Find Stories That Inspire You
                  </h1>

                  <p className="mt-6 max-w-xl text-sm leading-7 text-[#E8DDCE] sm:text-base sm:leading-8">
                    From timeless classics to modern favorites, discover books
                    that match your interests and imagination.
                  </p>

                  <Button
                    size="lg"
                    className="mt-8 h-12 rounded-lg bg-[#E8D4B5] px-7 font-bold text-[#51351F] transition-all hover:bg-[#FFFDF8]"
                  >
                    <Link className="flex items-center gap-3" href="/books">
                      Browse Books <FaArrowRightFromBracket />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        {/* Previous & Next Buttons */}
        <div className="absolute right-5 bottom-16 z-20 hidden items-center gap-3 sm:flex lg:right-10 lg:bottom-12">
          <button
            type="button"
            className="banner-prev flex size-11 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md transition hover:bg-[#E8D4B5] hover:text-[#51351F]"
            aria-label="Previous slide"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            type="button"
            className="banner-next flex size-11 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md transition hover:bg-[#E8D4B5] hover:text-[#51351F]"
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
