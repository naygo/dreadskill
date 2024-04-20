import Link from "next/link";
import { FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { homePageStyles } from "./styles";

export function GalerySection() {
  return (
    <section className="bg-dsBrown py-4">
      <div className={homePageStyles.section}>
        <div className="flex gap-5 items-center">
          <h1 className="text-white">Galeria</h1>

          <Link
            href="galeria"
            className="text-dsOrange font-medium flex gap-2 items-center underline text-xs md:text-sm lg:text-base"
          >
            Ver todas as fotos <FaArrowRight />
          </Link>
        </div>

        <div className="flex flex-col gap-5 md:flex-row items-center">
          <NavigationButtons direction="left" />
          <div className="bg-neutral-100 w-full h-56"></div>
          <div className="bg-neutral-100 w-full h-56"></div>
          <div className="bg-neutral-100 w-full h-56"></div>
          <NavigationButtons direction="right" />
        </div>
      </div>
    </section>
  );
}

function NavigationButtons({ direction }: { direction: "left" | "right" }) {
  const Icon = direction === "left" ? FaChevronLeft : FaChevronRight;
  return (
    <div className="hidden md:block bg-neutral-100 hover:bg-neutral-300 cursor-pointer p-2 rounded-full h-fit">
      <Icon className="hidden text-dsBrown md:block text-2xl" />
    </div>
  );
}
