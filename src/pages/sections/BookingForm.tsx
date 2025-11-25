import { useState } from "react";
import {
  LuUser,
  LuMail,
  LuPhone,
  LuCalendar,
  LuClock,
  LuMessageSquare,
} from "react-icons/lu";
import Card from "../../components/Card";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const inputStyle =
    "flex h-10 w-full rounded-md border border-(--input) bg-(--background) px-3 py-2 text-base ring-offset-(--background) placeholder:text-(--muted-foreground) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--ring) focus-visible:ring-offset-2 md:text-sm";
  const labelStyle =
    "flex items-center gap-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70";

  return (
    <section id="booking" className="py-20 bg-(--secondary)/30">
      <div className="container px-4 mx-auto max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-(--primary) to-(--accent) bg-clip-text text-transparent">
            Book Your Appointment
          </h2>
          <p className="text-lg text-(--muted-foreground)">
            Ready for beautiful nails? Fill out the form below and we'll get
            back to you soon.
          </p>
        </div>

        <Card className="p-8 shadow-xl border-(--primary)/10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className={labelStyle}>
                <LuUser className="w-4 h-4 text-(--primary)" />
                Full Name *
              </label>
              <input
                id="name"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                className={inputStyle}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="email" className={labelStyle}>
                  <LuMail className="w-4 h-4 text-(--primary)" />
                  Email *
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className={inputStyle}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className={labelStyle}>
                  <LuPhone className="w-4 h-4 text-(--primary)" />
                  Phone *
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="(123) 456-7890"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  required
                  className={inputStyle}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="date" className={labelStyle}>
                  <LuCalendar className="w-4 h-4 text-(--primary)" />
                  Preferred Date *
                </label>
                <input
                  id="date"
                  type="date"
                  value={formData.date}
                  onChange={(e) =>
                    setFormData({ ...formData, date: e.target.value })
                  }
                  required
                  className={inputStyle}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="time" className={labelStyle}>
                  <LuClock className="w-4 h-4 text-(--primary)" />
                  Preferred Time
                </label>
                <input
                  id="time"
                  type="time"
                  value={formData.time}
                  onChange={(e) =>
                    setFormData({ ...formData, time: e.target.value })
                  }
                  className={inputStyle}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className={labelStyle}>
                <LuMessageSquare className="w-4 h-4 text-(--primary)" />
                Service Details (Optional)
              </label>
              <textarea
                id="message"
                placeholder="Tell us about the service you're interested in..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows={4}
                className="flex min-h-20 w-full rounded-md border border-(--input) bg-(--background) px-3 py-2 text-sm ring-offset-(--background) placeholder:text-(--muted-foreground) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--ring) focus-visible:ring-offset-2"
              />
            </div>

            <button
              type="submit"
              className="h-11 rounded-md px-8 w-full bg-linear-to-r from-(--primary) to-(--accent) hover:opacity-90 transition-all"
            >
              Request Appointment
            </button>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default BookingForm;
