import { LuSparkles } from "react-icons/lu";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90svh] w-full flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 opacity-30"
        style={{ background: "var(--gradient-hero)" }}
      />

      <div className="container relative z-10 px-4 mx-auto text-center w-full">
        <div className="animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-(--background)/80 backdrop-blur-sm border border-(--primary)/20 mb-6">
            <LuSparkles className="w-4 h-4 text-(--primary)" />
            <span className="text-lg font-bold text-(--foreground)">
              Heidi Ortega
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-linear-to-r from-(--primary) to-(--accent) bg-clip-text text-transparent">
            Elegant Nails,
            <br />
            Exquisite You
          </h1>

          <p className="text-lg md:text-xl text-(--muted-foreground) max-w-2xl mx-auto mb-8">
            Transform your nails into works of art. Experience professional nail
            care with a personal touch.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              // onClick={scrollToBooking}
              className="text-(--background) font-bold tracking-wider bg-linear-to-r from-(--primary) to-(--accent) hover:opacity-90 transition-all shadow-lg hover:shadow-xl px-6 py-4 cursor-pointer rounded-(--radius) duration-150"
            >
              Book Appointment
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("portfolio")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="border border-(--primary)/30 hover:border-(--primary)/60 hover:bg-(--accent) px-6 py-4 cursor-pointer rounded-(--radius) transition-colors duration-150"
            >
              View Gallery
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-(--background) to-(--transparent)" />
    </section>
  );
};

export default HeroSection;
