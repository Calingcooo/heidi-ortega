import {
  LuInstagram,
  LuFacebook,
  LuPhone,
  LuMail,
  LuPin,
} from "react-icons/lu";

const Footer = () => {
  return (
    <footer className="bg-(--secondary)/50 py-16 w-full">
      <div className="container px-6 mx-auto">
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-2 h-12 bg-linear-to-b from-(--primary) to-(--accent) rounded-full"></div>
              <h3 className="text-3xl font-bold bg-linear-to-r from-(--primary) to-(--accent) bg-clip-text text-transparent">
                Heidi Ortega
              </h3>
            </div>
            <p className="text-(--muted-foreground) text-lg leading-relaxed max-w-md">
              Creating beautiful nails and unforgettable experiences, one client
              at a time.
            </p>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-(--foreground)">
              Contact Info
            </h4>
            <div className="space-y-3 text-(--muted-foreground)">
              <div className="flex items-center gap-3 hover:text-(--foreground) transition-colors cursor-pointer">
                <LuPhone className="w-5 h-5 text-(--primary) shrink-0" />
                <span className="text-base">(123) 456-7890</span>
              </div>
              <div className="flex items-center gap-3 hover:text-(--foreground) transition-colors cursor-pointer">
                <LuMail className="w-5 h-5 text-(--primary) shrink-0" />
                <span className="text-base">my@email.com</span>
              </div>
              <div className="flex items-center gap-3 hover:text-(--foreground) transition-colors cursor-pointer">
                <LuPin className="w-5 h-5 text-(--primary) shrink-0" />
                <span className="text-base">123 Beauty Lane, City</span>
              </div>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg mb-6 text-(--foreground)">
              Follow Me
            </h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-(--primary)/10 hover:bg-(--primary)/20 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                aria-label="Instagram"
              >
                <LuInstagram className="w-6 h-6 text-(--primary)" />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-(--primary)/10 hover:bg-(--primary)/20 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                aria-label="Facebook"
              >
                <LuFacebook className="w-6 h-6 text-(--primary)" />
              </a>
            </div>
            <p className="text-(--muted-foreground) text-sm mt-4 max-w-xs">
              Follow me for the latest designs and promotions
            </p>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-(--muted-foreground) text-base">
            &copy; {new Date().getFullYear()} Heidi Ortega. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
