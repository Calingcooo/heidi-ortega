import nails1 from "../../assets/gallery/art_1.jpg";
import nails2 from "../../assets/gallery/art_2.jpg";
import nails3 from "../../assets/gallery/art_3.jpg";
import nails4 from "../../assets/gallery/art_4.jpg";
import nails5 from "../../assets/gallery/art_5.jpg";
import nails6 from "../../assets/gallery/art_6.jpg";
import nails7 from "../../assets/gallery/art_7.jpg";
import nails8 from "../../assets/gallery/art_8.jpg";
import nails9 from "../../assets/gallery/art_9.jpg";
import nails10 from "../../assets/gallery/art_10.jpg";

const portfolioImages = [
  { src: nails1, alt: "Purple floral nail art with intricate designs" },
  { src: nails2, alt: "Elegant French tips with floral accents" },
  { src: nails3, alt: "Natural nude nails with white tips and gold details" },
  { src: nails4, alt: "Gold floral design on natural nails" },
  { src: nails5, alt: "Black and red gradient with gold glitter" },
  { src: nails6, alt: "Soft nude stiletto nails" },
  { src: nails7, alt: "Pink glitter ombre with jewels and floral art" },
  { src: nails8, alt: "Natural pink gradient nails" },
  { src: nails9, alt: "White French tips with pearl accents" },
  { src: nails10, alt: "Purple butterfly and floral nail art" },
];

const Gallery = () => {
  return (
    <section id="portfolio" className="py-20 bg-(--secondary)/30">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-(--primary) to-(--accent) bg-clip-text text-transparent">
            My Works
          </h2>
          <p className="text-lg text-(--muted-foreground) max-w-2xl mx-auto">
            Every nail tells a story. Explore my collection of custom designs
            and artistic creations.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {portfolioImages.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-(--primary)/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;