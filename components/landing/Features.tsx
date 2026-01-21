"use client";

import { motion } from "framer-motion";
import { Link as LinkIcon, Share2, BarChart3, Palette } from "lucide-react";

const features = [
  {
    icon: LinkIcon,
    title: "All in One Link",
    description:
      "Connect your TikTok, Instagram, Twitter, website, store, videos, music, and more.",
  },
  {
    icon: Palette,
    title: "Perfectly You",
    description:
      "Fully customize your page. From colors and fonts to layouts and themes.",
  },
  {
    icon: BarChart3,
    title: "Track Success",
    description:
      "Detailed analytics on who's clicking what and where they're coming from.",
  },
  {
    icon: Share2,
    title: "Share Everywhere",
    description:
      "Add your link to your social bio, email signature, website, and even offline.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold tracking-tight mb-4">
            Powerful features to help you grow
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to manage your online presence and share your
            world with others.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-4xl border border-white/20 hover:border-primary/30 transition-all hover:translate-y-[-8px] group"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
