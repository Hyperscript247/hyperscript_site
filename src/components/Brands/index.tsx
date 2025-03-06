"use client";

import { Brand } from "@/types/brand";
import Image from "next/image";
import brandsData from "./brandsData";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import SectionTitle from "../Common/SectionTitle";
import { Fade, Zoom, Slide } from "react-awesome-reveal";
import dynamic from "next/dynamic";

const handledrag = (e: React.DragEvent) => e.preventDefault();

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { href, image, imageLight, name } = brand;

  return (
    <div className="flex items-center justify-center ">
      <a
        href={href}
        target="_blank"
        rel="nofollow noreferrer"
        aria-label={`Visit ${name}`}
        className="relative flex w-full items-center justify-center opacity-70 transition hover:opacity-100 dark:opacity-60 dark:hover:opacity-100"
      >
        {/* Set larger fixed width and height for images */}
        <Image
          src={imageLight}
          alt={name}
          width={200} // Adjust this width to make the image larger
          height={200} // Adjust this height to make the image larger
          className="hidden dark:block"
        />
        <Image
          src={image}
          alt={name}
          width={200} // Same size here for consistency
          height={200} // Same size here for consistency
          className="block dark:hidden"
        />
      </a>
    </div>
  );
};

const Brand = () => {
  // Ensure 'items' is initialized AFTER 'SingleBrand' is defined
  const items = brandsData.map((brand) => (
    <SingleBrand key={brand.id} brand={brand} onDragStart={handledrag} />
  ));

  return (
    <section className="pt-20">
      <div className="container mx-auto my-20">
        <Fade direction="up" >
          <SectionTitle
            title="Brands We've Serviced"
            paragraph="The minds behind our success. Explore the driving forces propelling our vision forward."
            center
          />
        </Fade>
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="flex flex-wrap items-center justify-center rounded-sm  px-1 py-1  sm:px-2 md:px-[20px] md:py-[20px] xl:p-[50px] 2xl:px-[70px] 2xl:py-[60px]">
              <AliceCarousel
                mouseTracking
                items={items}
                autoPlay={true}
                infinite={true}
                disableDotsControls={true}
                autoPlayInterval={2000}
                autoPlayDirection="rtl"
                responsive={{
                  0: { items: 1 }, // for mobile screens, 2 items per slide
                  768: { items: 3 }, // for medium screens, 4 items per slide
                  1024: { items: 4 }, // for larger screens, 6 items per slide
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Export the Brands component dynamically for client-side rendering only
export default dynamic(() => Promise.resolve(Brand), { ssr: false });
