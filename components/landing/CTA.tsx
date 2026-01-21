"use client";

import { motion } from "framer-motion";

export function CTA() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative bg-primary rounded-[3rem] px-8 py-20 text-center overflow-hidden"
        >
          {/* Decorative circles */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />

          <div className="relative z-10 max-w-2xl mx-auto text-primary-foreground">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              Ready to claim your link?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-10">
              Join 1M+ creators and start sharing your world today. It takes
              less than 30 seconds to get started.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto px-10 py-4 bg-white text-primary font-bold rounded-2xl hover:scale-105 transition-transform shadow-xl">
                Get started for free
              </button>
              <button className="w-full sm:w-auto px-10 py-4 bg-primary-foreground/10 text-white font-bold rounded-2xl border border-white/20 hover:bg-primary-foreground/20 transition-all">
                Learn more
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
