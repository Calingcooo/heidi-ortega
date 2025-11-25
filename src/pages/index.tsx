import HeroSection from "./sections/HeroSection";
import Services from "./sections/Services";
import Gallery from "./sections/Gallery";
import BookingForm from "./sections/BookingForm";
import Footer from "../components/Footer";

const index = () => {
  return (
    <div className="flex-1 h-svh w-screen bg-background text-foreground">
      <HeroSection />
      <Services />
      <Gallery />
      <BookingForm />
      <Footer />
    </div>
  );
};

export default index;
