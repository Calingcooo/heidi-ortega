import { LuSparkles, LuHeart, LuPalette, LuStar } from "react-icons/lu";
import Card from "../../components/Card";

const services = [
  {
    icon: LuSparkles,
    title: "Gel Manicure",
    description: "Long-lasting gel polish with a flawless finish",
    price: "From ₱1,000",
  },
  {
    icon: LuHeart,
    title: "Acrylic Extensions",
    description: "Beautiful extensions for length and strength",
    price: "From ₱1,000",
  },
  {
    icon: LuPalette,
    title: "Nail Art",
    description: "Custom designs from simple to intricate",
    price: "From ₱1,000",
  },
  {
    icon: LuStar,
    title: "Luxury Pedicure",
    description: "Relaxing pedicure with premium care",
    price: "From ₱1,000",
  },
];

const Services = () => {
  return (
    <section className="py-20">
      <div className="container px-4 px- mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-(--primary) to-(--accent) bg-clip-text text-transparent">
            Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tailored treatments for every style and occasion
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-6 text-center hover:shadow-lg transition-all duration-300 border-(--primary)/10 hover:border-(--primary)/30 cursor-pointer"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-linear-to-br from-(--primary)/20 to-(--accent)/20 flex items-center justify-center">
                <service.icon className="w-8 h-8 text-(--primary)" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-(--muted-foreground) text-sm mb-4">
                {service.description}
              </p>
              <p className="text-(--primary) font-semibold">{service.price}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
