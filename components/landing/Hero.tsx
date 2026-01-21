"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[50%] bg-accent/30 rounded-full blur-[120px] animate-pulse-slow" />
      </div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-6"
            >
              <Sparkles className="w-4 h-4" />
              <span>Your digital identity, simplified.</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]"
            >
              Everything you are in{" "}
              <span className="text-primary">one simple link.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl"
            >
              The bio link used by the world&apos;s best creators, artists, and
              marketers. Share your content, sell products, and grow your
              audience from one place.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              <div className="relative w-full sm:w-auto">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-medium">
                  helloitsmyid.com/
                </span>
                <input
                  type="text"
                  placeholder="yourname"
                  className="w-full sm:w-80 h-14 pl-36 pr-4 rounded-2xl bg-muted border-2 border-transparent focus:border-primary focus:bg-background transition-all outline-none font-medium"
                />
              </div>
              <button className="w-full sm:w-auto h-14 px-8 rounded-2xl bg-primary text-primary-foreground font-bold hover:scale-105 transition-transform shadow-xl shadow-primary/30">
                Claim your link
              </button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex-1 relative"
          >
            {/* Replace with actual image path later */}
            {/* <div className="relative z-10 animate-float">
              <div className="relative rounded-[2.5rem] p-2 bg-linear-to-b from-white/20 to-transparent backdrop-blur-sm border border-white/20 shadow-2xl overflow-hidden aspect-square max-w-[500px] mx-auto">
                <div className="absolute inset-0 bg-primary/10 -z-10" />
                <Image
                  src="/hero-mockup.png"
                  alt="App Mockup"
                  width={469}
                  height={835}
                  className="object-cover rounded-[2.5rem]"
                />
              </div>
            </div> */}

            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 -left-8 glass p-4 rounded-2xl shadow-xl hidden md:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center text-pink-500">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold">10k+ Views</div>
                  <div className="text-[10px] text-muted-foreground">
                    This week
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute bottom-10 -right-8 glass p-4 rounded-2xl shadow-xl hidden md:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500">
                  <ArrowRight className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold">New Sale!</div>
                  <div className="text-[10px] text-muted-foreground">
                    Portfolio link
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
