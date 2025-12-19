import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Zap, TrendingUp, Award, Palette, BarChart3, Camera, Code2, Globe, Layout } from "lucide-react";
import { Link, useLocation } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ServiceCard } from "@/components/ServiceCard";

export default function Home() {
  const [location] = useLocation();

  useEffect(() => {
    if (location.includes('#')) {
      const id = location.split('#')[1];
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => element.scrollIntoView({ behavior: 'smooth' }), 100);
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-background selection:bg-primary/30">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-gradient-to-b from-background via-zinc-900 to-background">
        {/* Dynamic Background with Creative Design */}
        <div className="absolute inset-0 z-0">
          {/* Gradient Mesh Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-zinc-900/50 to-transparent" />
          
          {/* Animated Geometric Shapes */}
          <div className="absolute top-10 right-10 w-72 h-72 bg-primary/10 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute bottom-20 left-5 w-96 h-96 bg-primary/5 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-600/5 rounded-full blur-[100px]" />
          
          {/* Animated Gradient Lines */}
          <svg className="absolute inset-0 w-full h-full opacity-10" preserveAspectRatio="none">
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFA500" />
                <stop offset="100%" stopColor="#FF6B35" />
              </linearGradient>
            </defs>
            <path d="M0,0 Q250,150 500,0" stroke="url(#gradient1)" strokeWidth="2" fill="none" />
            <path d="M0,500 Q300,300 600,200" stroke="url(#gradient1)" strokeWidth="1.5" fill="none" opacity="0.5" />
          </svg>
          
          {/* Noise Texture */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-multiply" />
          
          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_24%,rgba(255,165,0,.1)_25%,rgba(255,165,0,.1)_26%,transparent_27%,transparent_74%,rgba(255,165,0,.1)_75%,rgba(255,165,0,.1)_76%,transparent_77%,transparent),linear-gradient(90deg,transparent_24%,rgba(255,165,0,.1)_25%,rgba(255,165,0,.1)_26%,transparent_27%,transparent_74%,rgba(255,165,0,.1)_75%,rgba(255,165,0,.1)_76%,transparent_77%,transparent)] bg-[length:50px_50px] opacity-5" />
        </div>

        <div className="container relative z-10 px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8 flex justify-center space-x-4 md:space-x-12"
          >
            {['G', 'F', 'G'].map((letter, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.2, duration: 0.8, type: "spring" }}
                className="text-[8rem] md:text-[12rem] font-display font-black leading-none bg-clip-text text-transparent bg-gradient-to-b from-white via-white/80 to-white/20 drop-shadow-2xl"
              >
                {letter}
              </motion.span>
            ))}
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-2xl md:text-5xl font-display font-bold text-white mb-6 tracking-tight"
          >
            Unleash Creativity & <span className="text-primary">Elevate Your Brand</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="text-white/60 text-sm md:text-lg uppercase tracking-widest max-w-3xl mx-auto mb-12"
          >
            Branding | Marketing | Graphic Design | Media
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="flex flex-col md:flex-row items-center justify-center gap-4"
          >
            <Link href="/contact">
              <button className="px-8 py-4 bg-primary text-black font-bold rounded-full hover:bg-white transition-colors flex items-center gap-2 group shadow-lg shadow-primary/25">
                Start Your Project <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link href="#portfolio">
              <button className="px-8 py-4 border border-white/20 text-white font-medium rounded-full hover:bg-white/10 transition-colors backdrop-blur-sm">
                View Our Work
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-zinc-950/50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Why Choose Us?</h2>
            <p className="text-white/60">We bridge the gap between brands and audiences with strategic creativity.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-zinc-900 border border-white/5 hover:border-primary/30 transition-colors group">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Branding & Identity</h3>
              <p className="text-white/60 text-sm">We build the foundation of your business, ensuring you stand out in a crowded market.</p>
            </div>
            <div className="p-8 rounded-2xl bg-zinc-900 border border-white/5 hover:border-primary/30 transition-colors group">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Growth Marketing</h3>
              <p className="text-white/60 text-sm">Strategic campaigns designed to convert interest into loyal customers and sales.</p>
            </div>
            <div className="p-8 rounded-2xl bg-zinc-900 border border-white/5 hover:border-primary/30 transition-colors group">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Premium Scaling</h3>
              <p className="text-white/60 text-sm">Advanced solutions to take your established business to the next level of success.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <span className="text-primary font-bold tracking-widest text-sm uppercase mb-2 block">Our Expertise</span>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white">Services We Offer</h2>
            </div>
            <Link href="/pricing">
              <button className="hidden md:flex items-center gap-2 text-white hover:text-primary transition-colors pb-2 border-b border-white/20 hover:border-primary">
                View Pricing <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/service/branding">
              <ServiceCard 
                icon={Palette}
                title="Branding"
                description="Crafting unique identities that resonate with your target audience."
                items={["Visual Identity", "Content Strategy", "Social Media Kits"]}
                delay={0}
              />
            </Link>
            <Link href="/service/marketing">
              <ServiceCard 
                icon={BarChart3}
                title="Marketing"
                description="Data-driven strategies to amplify your reach and ROI."
                items={["Email Campaigns", "Social Media Ads", "SEO & Analytics"]}
                delay={0.1}
              />
            </Link>
            <Link href="/service/media">
              <ServiceCard 
                icon={Layout}
                title="Graphic Design"
                description="Stunning visuals that communicate your message instantly."
                items={["Logo Design", "Flyers & Banners", "UI/UX Design"]}
                delay={0.2}
              />
            </Link>
            <Link href="/service/media">
              <ServiceCard 
                icon={Camera}
                title="Media Production"
                description="High-quality photography and videography for modern brands."
                items={["Event Photography", "Promotional Videos", "VFX & CGI"]}
                delay={0.3}
              />
            </Link>
            <Link href="/service/web-development">
              <ServiceCard 
                icon={Code2}
                title="Web Development"
                description="Fast, responsive, and beautiful websites that convert."
                items={["Custom Design", "Full-Stack Dev", "Maintenance"]}
                delay={0.4}
              />
            </Link>
            <Link href="/service/app-development">
              <ServiceCard 
                icon={Globe}
                title="App Development"
                description="Native and cross-platform mobile applications."
                items={["iOS & Android", "UI/UX Design", "Performance Tuning"]}
                delay={0.5}
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 bg-zinc-950 border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">Our Portfolio</h2>
            <p className="text-white/60 max-w-2xl mx-auto">A selection of our recent work across branding, photography, and digital design.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Using Unsplash images as placeholders for missing assets */}
            {/* tech workspace dark setup */}
            <Link href="/portfolio">
              <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-900 cursor-pointer">
                <img 
                  src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&q=80" 
                  alt="Workspace Design" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-center">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Office Branding</h4>
                    <p className="text-primary text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">Interior & Identity</p>
                  </div>
                </div>
              </div>
            </Link>

            {/* neon abstract shapes */}
            <Link href="/portfolio">
              <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-900 cursor-pointer">
                <img 
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80" 
                  alt="Cyberpunk Art" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-center">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Digital Art</h4>
                    <p className="text-primary text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">3D & Motion</p>
                  </div>
                </div>
              </div>
            </Link>

            {/* modern camera lens */}
            <Link href="/portfolio">
              <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-900 cursor-pointer">
                <img 
                  src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80" 
                  alt="Photography" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-center">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Product Shoot</h4>
                    <p className="text-primary text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">Photography</p>
                  </div>
                </div>
              </div>
            </Link>

            {/* minimalist web interface */}
            <Link href="/portfolio">
              <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-900 cursor-pointer">
                <img 
                  src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80" 
                  alt="Web Interface" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-center">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">E-Commerce UI</h4>
                    <p className="text-primary text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">Web Design</p>
                  </div>
                </div>
              </div>
            </Link>

            {/* brand guidelines book */}
            <Link href="/portfolio">
              <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-900 cursor-pointer">
                <img 
                  src="https://images.unsplash.com/photo-1600607686527-6fb886090705?w=800&q=80" 
                  alt="Brand Identity" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-center">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Corporate Identity</h4>
                    <p className="text-primary text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">Branding</p>
                  </div>
                </div>
              </div>
            </Link>

            {/* creative meeting */}
            <Link href="/portfolio">
              <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-900 cursor-pointer">
                <img 
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80" 
                  alt="Strategy" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-center">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Growth Strategy</h4>
                    <p className="text-primary text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">Marketing</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section id="founder" className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-primary font-bold tracking-widest text-sm uppercase mb-4 block">Visionary Behind</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Tapuwa P Mapfumo</h2>
              <p className="text-white/60 text-lg mb-8 leading-relaxed">
                Founder & Lead Developer of GFG Studios. A passionate developer and entrepreneur transforming ideas into powerful digital solutions. Specialized in React Native, Kotlin, and AI-driven applications, pushing the boundaries of technology to create meaningful innovations.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-1">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-1">Expert Developer</h3>
                    <p className="text-white/60">React Native, Web Development, Laravel & PHP</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-1">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-1">Innovation Leader</h3>
                    <p className="text-white/60">Building AI-powered apps and scalable digital solutions</p>
                  </div>
                </div>
              </div>

              <Link href="/portfolio">
                <button className="px-8 py-4 bg-primary text-black font-bold rounded-full hover:bg-white transition-colors flex items-center gap-2 group">
                  View Full Portfolio <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-zinc-900 border border-white/10">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80" 
                  alt="Tapuwa P Mapfumo" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                  <div>
                    <p className="text-primary text-sm font-bold uppercase tracking-widest mb-2">Founder & CTO</p>
                    <p className="text-white text-xl font-display font-bold">Tapuwa P Mapfumo</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-primary rounded-2xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-40 mix-blend-multiply" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-display font-black text-black mb-8">Ready to Elevate?</h2>
          <p className="text-black/80 text-xl max-w-2xl mx-auto mb-10 font-medium">
            Let's turn your vision into a digital masterpiece. The future of your brand starts here.
          </p>
          <Link href="/contact">
            <button className="px-10 py-5 bg-black text-white font-bold rounded-full hover:scale-105 transition-transform shadow-2xl">
              Get In Touch Now
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
