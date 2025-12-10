import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Section from "./components/Section";
import Footer from "./components/Footer";
import {
  Layout,
  Palette,
  Code,
  Smartphone,
  Mail,
  Globe,
  Zap,
  Shield,
} from "lucide-react";

// Example Service Card Component
const ServiceCard = ({
  icon: Icon,
  title,
  desc,
}: {
  icon: any;
  title: string;
  desc: string;
}) => (
  <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group">
    <div className="w-14 h-14 bg-indigo-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors">
      <Icon className="w-7 h-7 text-indigo-600 group-hover:text-white transition-colors" />
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{desc}</p>
  </div>
);

// Example Portfolio Item Component
const PortfolioItem = ({
  img,
  title,
  category,
}: {
  img: string;
  title: string;
  category: string;
}) => (
  <div className="group relative overflow-hidden rounded-2xl cursor-pointer">
    <img
      src={img}
      alt={title}
      className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
      <span className="text-indigo-400 font-medium text-sm mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
        {category}
      </span>
      <h3 className="text-2xl font-bold text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
        {title}
      </h3>
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        <Hero />

        {/* About Section */}
        <Section
          id="about"
          title="About Us"
          subtitle="We are creative problem solvers dedicated to building products that make a difference in the digital world."
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src="https://picsum.photos/800/600"
                alt="Our Team"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Who We Are
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Founded in 2023, BrandCore has quickly grown into a leading
                digital agency. We believe in the power of design and technology
                to transform businesses. Our team is composed of passionate
                individuals who share a vision of excellence.
              </p>
              <div className="space-y-4">
                {[
                  { icon: Zap, text: "Fast & Efficient Delivery" },
                  { icon: Shield, text: "Secure & Reliable Code" },
                  { icon: Globe, text: "Global Scalability" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center">
                      <item.icon className="w-3.5 h-3.5 text-indigo-600" />
                    </div>
                    <span className="font-medium text-slate-700">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* Services Section */}
        <Section
          id="service"
          title="Our Services"
          subtitle="Comprehensive digital solutions tailored to your unique business needs."
          bgColor="gray"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              icon={Layout}
              title="UI/UX Design"
              desc="Crafting intuitive and engaging user interfaces that delight your customers."
            />
            <ServiceCard
              icon={Code}
              title="Web Development"
              desc="Building robust, scalable, and secure web applications using modern tech stacks."
            />
            <ServiceCard
              icon={Smartphone}
              title="Mobile Apps"
              desc="Native and cross-platform mobile solutions for iOS and Android."
            />
            <ServiceCard
              icon={Palette}
              title="Branding"
              desc="Defining your visual identity to stand out in a crowded market."
            />
          </div>
        </Section>

        {/* Portfolio Section */}
        <Section
          id="portfolio"
          title="Our Portfolio"
          subtitle="A selection of our recent work and the value we've delivered to clients."
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PortfolioItem
              img="https://picsum.photos/600/400?random=1"
              title="Neon Finance"
              category="Fintech App"
            />
            <PortfolioItem
              img="https://picsum.photos/600/400?random=2"
              title="EcoTravel"
              category="Travel Platform"
            />
            <PortfolioItem
              img="https://picsum.photos/600/400?random=3"
              title="Urban Coffee"
              category="E-commerce"
            />
            <PortfolioItem
              img="https://picsum.photos/600/400?random=4"
              title="TechHub"
              category="Corporate Website"
            />
            <PortfolioItem
              img="https://picsum.photos/600/400?random=5"
              title="HealthPlus"
              category="Medical Dashboard"
            />
            <PortfolioItem
              img="https://picsum.photos/600/400?random=6"
              title="Creative Studio"
              category="Portfolio Site"
            />
          </div>
        </Section>

        {/* Contact Section */}
        <Section
          id="contact"
          title="Get In Touch"
          subtitle="Ready to start your next project? We'd love to hear from you."
          bgColor="gray"
        >
          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-10 bg-indigo-600 text-white flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-6">
                    Contact Information
                  </h3>
                  <p className="text-indigo-100 mb-8">
                    Fill up the form and our team will get back to you within 24
                    hours.
                  </p>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <Mail className="w-6 h-6 text-indigo-300" />
                      <span>hello@brandcore.com</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <Globe className="w-6 h-6 text-indigo-300" />
                      <span>www.brandcore.com</span>
                    </div>
                  </div>
                </div>
                <div className="mt-12">
                  <div className="w-32 h-32 bg-indigo-500 rounded-full opacity-50 blur-2xl absolute -bottom-10 -left-10"></div>
                </div>
              </div>

              <div className="p-10">
                <form
                  className="space-y-6"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all resize-none"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg transition-all shadow-lg shadow-indigo-500/30"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
