// eslint-disable-next-line no-unused-vars
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Layers3, MonitorSmartphone, PenTool, Compass, ShieldCheck, Gem, ScanLine } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const services = [
  {
    icon: PenTool,
    title: "Brand Identity",
    text: "Visual systems crafted with precision, from typography and color to refined brand guidelines.",
  },
  {
    icon: MonitorSmartphone,
    title: "Web Experience",
    text: "Elegant, responsive digital experiences designed to feel clear, premium and effortless.",
  },
  {
    icon: Compass,
    title: "Digital Strategy",
    text: "Structured messaging, visual hierarchy and creative direction built around business clarity.",
  },
  {
    icon: Layers3,
    title: "Interface Design",
    text: "Clean product interfaces with thoughtful layouts, intuitive flows and modern visual systems.",
  },
];

const values = [
  "Precision in every detail",
  "Minimal design with intention",
  "Premium visual consistency",
  "Human-centered digital clarity",
];

const projects = [
  "Aurora Finance",
  "Luma Wellness",
  "Vertex Labs",
];

export default function NovaurumStudioLanding() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F7F5F0] text-[#111111] selection:bg-black selection:text-white">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,184,124,0.26),transparent_34%),radial-gradient(circle_at_85%_15%,rgba(80,92,128,0.16),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.8),rgba(247,245,240,0.95))]" />
        <div className="absolute inset-0 opacity-[0.045] [background-image:linear-gradient(#111_1px,transparent_1px),linear-gradient(90deg,#111_1px,transparent_1px)] [background-size:44px_44px]" />
      </div>

      <nav className="fixed left-0 right-0 top-0 z-50 px-4 py-4 sm:px-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/60 bg-white/55 px-4 py-3 shadow-[0_18px_60px_rgba(17,17,17,0.08)] backdrop-blur-2xl sm:px-5">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#111111] text-white shadow-lg">
              <Sparkles className="h-4 w-4" />
            </div>
            <span className="text-sm font-semibold tracking-[0.22em] text-[#111111]">NOVAURUM</span>
          </a>

          <div className="hidden items-center gap-8 text-sm font-medium text-black/55 md:flex">
            <a className="transition hover:text-black" href="#studio">Studio</a>
            <a className="transition hover:text-black" href="#services">Services</a>
            <a className="transition hover:text-black" href="#process">Process</a>
            <a className="transition hover:text-black" href="#trust">Trust</a>
          </div>

          <a
            href="#work"
            className="group hidden items-center gap-2 rounded-full bg-[#111111] px-5 py-2.5 text-sm font-medium text-white shadow-[0_12px_28px_rgba(17,17,17,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-black md:flex"
          >
            View directions
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </a>

          <a href="#services" className="rounded-full bg-[#111111] px-4 py-2 text-xs font-medium text-white md:hidden">
            Explore
          </a>
        </div>
      </nav>

      <section id="home" className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-5 pb-20 pt-32 sm:px-6 lg:px-8">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1.03fr_0.97fr]">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-3xl"
          >
            <motion.div
              variants={fadeUp}
              className="mb-7 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/55 px-4 py-2 text-sm font-medium text-black/60 shadow-sm backdrop-blur-xl"
            >
              <span className="h-2 w-2 rounded-full bg-[#C6A15B]" />
              Digital design studio for ambitious brands
            </motion.div>

            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-balance text-5xl font-semibold leading-[0.95] tracking-[-0.055em] text-[#111111] sm:text-6xl md:text-7xl lg:text-[88px]"
            >
              Designing digital presence with elegance and intent.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-black/58 sm:text-xl"
            >
              NOVAURUM Studio creates refined brand identities, premium web experiences and visual systems that help modern companies communicate trust, clarity and value.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#studio"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#111111] px-7 py-4 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(17,17,17,0.22)] transition duration-300 hover:-translate-y-1 hover:bg-black"
              >
                Explore the studio
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/50 px-7 py-4 text-sm font-semibold text-black/70 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white"
              >
                View capabilities
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 28 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
            className="relative mx-auto w-full max-w-xl"
          >
            <motion.div
              animate={{ y: [0, -14, 0], rotate: [0, 1.5, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="relative rounded-[2.5rem] border border-white/70 bg-white/45 p-4 shadow-[0_40px_100px_rgba(17,17,17,0.16)] backdrop-blur-2xl"
            >
              <div className="overflow-hidden rounded-[2rem] border border-black/5 bg-[#111111] p-5 text-white">
                <div className="flex items-center justify-between border-b border-white/10 pb-5">
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-white/35">Visual System</p>
                    <p className="mt-1 text-lg font-semibold">NOVAURUM / 2026</p>
                  </div>
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#C6A15B]" />
                  </div>
                </div>

                <div className="grid gap-4 py-6 sm:grid-cols-2">
                  <div className="rounded-3xl bg-white/[0.07] p-4">
                    <div className="mb-12 h-10 w-10 rounded-2xl bg-[#C6A15B]" />
                    <p className="text-sm text-white/40">Primary tone</p>
                    <p className="mt-1 text-2xl font-semibold">Aurum</p>
                  </div>
                  <div className="rounded-3xl bg-white/[0.07] p-4">
                    <div className="mb-12 h-10 w-10 rounded-2xl border border-white/20 bg-white/10" />
                    <p className="text-sm text-white/40">Design mode</p>
                    <p className="mt-1 text-2xl font-semibold">Minimal</p>
                  </div>
                </div>

                <div className="rounded-3xl bg-gradient-to-br from-white/[0.14] to-white/[0.04] p-5">
                  <div className="mb-5 flex items-center justify-between">
                    <p className="text-sm font-medium text-white/60">Experience clarity</p>
                    <ScanLine className="h-5 w-5 text-[#C6A15B]" />
                  </div>
                  <div className="space-y-3">
                    <div className="h-3 w-full rounded-full bg-white/10">
                      <motion.div
                        initial={{ width: "0%" }}
                        animate={{ width: "82%" }}
                        transition={{ duration: 1.4, delay: 0.8, ease: "easeOut" }}
                        className="h-full rounded-full bg-white/70"
                      />
                    </div>
                    <div className="h-3 w-full rounded-full bg-white/10">
                      <motion.div
                        initial={{ width: "0%" }}
                        animate={{ width: "64%" }}
                        transition={{ duration: 1.4, delay: 1, ease: "easeOut" }}
                        className="h-full rounded-full bg-[#C6A15B]"
                      />
                    </div>
                    <div className="h-3 w-full rounded-full bg-white/10">
                      <motion.div
                        initial={{ width: "0%" }}
                        animate={{ width: "91%" }}
                        transition={{ duration: 1.4, delay: 1.2, ease: "easeOut" }}
                        className="h-full rounded-full bg-white/50"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-2 rounded-3xl border border-white/70 bg-white/65 p-4 shadow-[0_20px_55px_rgba(17,17,17,0.12)] backdrop-blur-2xl sm:-left-8"
            >
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-black/35">Signal</p>
              <p className="mt-1 text-2xl font-semibold">98%</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-1 top-10 rounded-3xl border border-white/70 bg-white/65 p-4 shadow-[0_20px_55px_rgba(17,17,17,0.12)] backdrop-blur-2xl sm:-right-8"
            >
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-black/35">Intent</p>
              <p className="mt-1 text-2xl font-semibold">Clear</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="studio" className="relative z-10 px-5 py-24 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={stagger}
          className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]"
        >
          <motion.div variants={fadeUp}>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#A77D30]">The Studio</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Less noise. More intention.</h2>
          </motion.div>
          <motion.div variants={fadeUp} className="rounded-[2rem] border border-black/5 bg-white/45 p-8 shadow-[0_24px_80px_rgba(17,17,17,0.08)] backdrop-blur-xl sm:p-10">
            <p className="text-xl leading-9 text-black/62">
              NOVAURUM Studio is built around the belief that a strong digital presence should feel effortless. Every page, component and interaction is shaped to communicate value with clarity, elegance and emotional restraint.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {values.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/55 p-4 text-sm font-medium text-black/60">
                  <ShieldCheck className="h-4 w-4 text-[#A77D30]" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section id="services" className="relative z-10 px-5 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#A77D30]">Capabilities</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">A complete visual system for modern brands.</h2>
            <p className="mt-5 text-lg leading-8 text-black/55">
              From brand identity to web experience, every capability is designed to create consistency, trust and a premium digital impression.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={stagger}
            className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4"
          >
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  variants={fadeUp}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="group rounded-[2rem] border border-black/5 bg-white/50 p-6 shadow-[0_24px_70px_rgba(17,17,17,0.07)] backdrop-blur-xl transition duration-300 hover:bg-white/75"
                >
                  <div className="mb-10 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#111111] text-white shadow-lg transition duration-300 group-hover:scale-105">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold tracking-[-0.02em]">{service.title}</h3>
                  <p className="mt-3 leading-7 text-black/55">{service.text}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section id="work" className="relative z-10 px-5 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-black/5 bg-[#111111] p-6 text-white shadow-[0_40px_120px_rgba(17,17,17,0.18)] sm:p-8 lg:p-10">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="flex flex-col justify-between rounded-[2rem] bg-white/[0.06] p-8">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#C6A15B]">Selected Directions</p>
                <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Three visual languages. One premium standard.</h2>
              </div>
              <p className="mt-10 text-lg leading-8 text-white/55">
                A glimpse into fictional brand directions created to explore clarity, atmosphere and digital refinement.
              </p>
            </div>

            <div className="grid gap-4">
              {projects.map((project, index) => (
                <motion.div
                  key={project}
                  whileHover={{ x: 8 }}
                  className="group flex items-center justify-between rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 transition hover:bg-white/[0.1]"
                >
                  <div>
                    <p className="text-sm text-white/35">0{index + 1}</p>
                    <h3 className="mt-2 text-2xl font-semibold">{project}</h3>
                    <p className="mt-2 text-white/45">Digital identity and visual experience concept.</p>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-black transition group-hover:scale-105">
                    <ArrowRight className="h-5 w-5" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="relative z-10 px-5 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#A77D30]">Process</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">A refined process for sharper outcomes.</h2>
            </div>
            <div className="space-y-4">
              {["Discover the brand essence", "Define the digital direction", "Design the experience system", "Refine every interaction"].map((step, index) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="flex gap-5 rounded-[1.75rem] border border-black/5 bg-white/45 p-5 shadow-[0_18px_60px_rgba(17,17,17,0.06)] backdrop-blur-xl"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#111111] text-sm font-semibold text-white">{index + 1}</div>
                  <div>
                    <h3 className="text-xl font-semibold tracking-[-0.02em]">{step}</h3>
                    <p className="mt-2 leading-7 text-black/52">A focused stage that keeps the project intentional, structured and visually consistent.</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="trust" className="relative z-10 px-5 py-24 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-white/70 bg-white/55 p-8 shadow-[0_35px_100px_rgba(17,17,17,0.1)] backdrop-blur-2xl sm:p-12"
        >
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.85fr]">
            <div>
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-3xl bg-[#111111] text-white shadow-lg">
                <Gem className="h-6 w-6" />
              </div>
              <h2 className="text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">Built to feel calm, credible and premium.</h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-black/58">
                NOVAURUM focuses on refined execution, thoughtful hierarchy and visual restraint, creating digital experiences that feel trustworthy from the first interaction.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {[
                ["12+", "Visual systems explored"],
                ["4", "Core design capabilities"],
                ["2026", "Modern web direction"],
              ].map(([number, label]) => (
                <div key={label} className="rounded-[2rem] bg-[#111111] p-6 text-white shadow-[0_18px_50px_rgba(17,17,17,0.14)]">
                  <p className="text-4xl font-semibold tracking-[-0.04em]">{number}</p>
                  <p className="mt-2 text-white/45">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <footer className="relative z-10 px-5 pb-8 pt-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-black/5 bg-white/45 p-6 backdrop-blur-xl sm:p-8">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#111111] text-white">
                  <Sparkles className="h-4 w-4" />
                </div>
                <span className="text-sm font-semibold tracking-[0.22em]">NOVAURUM</span>
              </div>
              <p className="mt-4 max-w-md leading-7 text-black/52">Digital design, brand identity and web experiences for ambitious modern brands.</p>
            </div>
            <div className="flex flex-wrap gap-5 text-sm font-medium text-black/45">
              <a className="transition hover:text-black" href="#home">Home</a>
              <a className="transition hover:text-black" href="#studio">Studio</a>
              <a className="transition hover:text-black" href="#services">Services</a>
              <a className="transition hover:text-black" href="#process">Process</a>
            </div>
          </div>
          <div className="mt-8 border-t border-black/5 pt-6 text-sm text-black/35">
            © 2026 NOVAURUM Studio. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
