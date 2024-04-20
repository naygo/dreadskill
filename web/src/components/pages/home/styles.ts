type HomeStyles = "card" | "wave" | "waveContainer" | "section";

export const homePageStyles: Record<HomeStyles, string> = {
  card: "bg-neutral-100 rounded border-2 border-dsBrown shadow-brown",
  wave: "relative bg-neutral-300 dot-background px-4 lg:px-10 md:py-10",
  waveContainer: "container mx-auto flex gap-10",
  section:
    "container mx-auto flex flex-col gap-5 md:gap-10 px-4 md:py-5 lg:p-10",
};
