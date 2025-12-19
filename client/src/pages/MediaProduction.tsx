import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowRight, Camera, Video, Film, Lightbulb, Mic, Zap } from "lucide-react";

export default function MediaProduction() {
  const services = [
    { icon: Camera, title: "Professional Photography", desc: "High-quality product, event, and portrait photography." },
    { icon: Video, title: "Videography", desc: "Cinematic video production for commercials and events." },
    { icon: Film, title: "Video Editing & VFX", desc: "Professional post-production and special effects." },
    { icon: Lightbulb, title: "Motion Graphics", desc: "Engaging animated graphics and explainer videos." },
    { icon: Mic, title: "Audio Production", desc: "Professional audio recording and editing services." },
    { icon: Zap, title: "Drone Footage", desc: "Aerial cinematography and drone photography." }
  ];

  const packages = [
    { type: "Photography", price: "$500+", desc: "Professional photoshoots with editing included." },
    { type: "Videography", price: "$1,500+", desc: "Complete video production from concept to final edit." },
    { type: "Motion Graphics", price: "$1,000+", desc: "Custom animated content for social and web." },
    { type: "Full Production", price: "Custom", desc: "Complete media package for comprehensive campaigns." }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl"
        >
          <span className="text-primary font-bold tracking-widest text-sm uppercase mb-4 block">Our Service</span>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
            Photography & Videography
          </h1>
          <p className="text-white/60 text-xl leading-relaxed mb-8 max-w-2xl">
            Stunning visual content that tells your story. From professional photography to cinematic videos, we create media that captivates your audience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-primary text-black font-bold rounded-full hover:bg-white transition-colors flex items-center gap-2 group">
              Get Started <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 border border-white/20 text-white font-medium rounded-full hover:bg-white/10 transition-colors">
              View Gallery
            </button>
          </div>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-zinc-950/50 border-y border-white/5">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-display font-bold text-white mb-16">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-8 rounded-2xl bg-zinc-900 border border-white/5 hover:border-primary/30 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-white/60">{service.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-display font-bold text-white mb-16">Pricing Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-zinc-900 border border-white/5 text-center"
              >
                <h3 className="text-xl font-bold text-white mb-2">{pkg.type}</h3>
                <p className="text-primary font-bold text-2xl mb-3">{pkg.price}</p>
                <p className="text-white/60">{pkg.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-zinc-950/50 border-y border-white/5">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-display font-bold text-white mb-16">Our Process</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              "1. Consultation: Understand your vision and requirements",
              "2. Planning: Create shot lists and production schedules",
              "3. Production: Execute with professional equipment",
              "4. Post-Production: Edit, color grade, and enhance",
              "5. Delivery: Provide final files in all needed formats"
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-4 rounded-xl bg-zinc-900 border border-white/5 flex items-center gap-4"
              >
                <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary flex-shrink-0 font-bold">
                  {idx + 1}
                </div>
                <p className="text-white/80">{step}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-40 mix-blend-multiply" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-display font-black text-black mb-8">Ready to Capture Your Story?</h2>
          <p className="text-black/80 text-lg max-w-2xl mx-auto mb-10">
            Let's create stunning visual content that brings your brand to life.
          </p>
          <button className="px-10 py-5 bg-black text-white font-bold rounded-full hover:scale-105 transition-transform">
            Book Your Session
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
