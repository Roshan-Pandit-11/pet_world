// apps/web/app/front/home.tsx
"use client";

import Link from "next/link";

const features = [
  {
    number: "01",
    icon: "🩺",
    title: "Health, organized",
    text: "Vaccines, medications, allergies and vet visits — everything important stays together.",
  },
  {
    number: "02",
    icon: "☀️",
    title: "Daily care, simplified",
    text: "Build routines around feeding, walks, medication, hydration and everything in between.",
  },
  {
    number: "03",
    icon: "♡",
    title: "Always one step ahead",
    text: "Know what's coming next with reminders and a clear view of your pet's care.",
  },
];

export default function HomeContent() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#F7F6F2] text-[#17211B]">
      {/* ─────────────────────────────────────────
          NAVIGATION
      ───────────────────────────────────────── */}
      <header className="absolute left-0 right-0 top-0 z-50">
        <div className="mx-auto flex h-24 max-w-[1400px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <Link href="/?view=front" className="group flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#173B2C] text-xl shadow-lg transition-transform duration-300 group-hover:rotate-[-8deg]">
              🐾
            </div>

            <span className="text-[22px] font-black tracking-[-0.04em]">
              pet<span className="text-[#E59B45]">care</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-9 lg:flex">
            <a
              href="#features"
              className="text-sm font-semibold text-[#566159] transition hover:text-[#173B2C]"
            >
              Features
            </a>

            <a
              href="#story"
              className="text-sm font-semibold text-[#566159] transition hover:text-[#173B2C]"
            >
              How it works
            </a>

            <a
              href="#pets"
              className="text-sm font-semibold text-[#566159] transition hover:text-[#173B2C]"
            >
              For every pet
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="hidden text-sm font-semibold text-[#68726B] transition hover:text-red-500 sm:block"
            >
              Exit
            </Link>

            <Link
              href="/?view=front"
              className="rounded-full bg-[#173B2C] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-[#173B2C]/10 transition-all hover:-translate-y-0.5 hover:bg-[#23533E]"
            >
              Open PetCare
            </Link>
          </div>
        </div>
      </header>

      {/* ─────────────────────────────────────────
          HERO
      ───────────────────────────────────────── */}
      <section className="relative min-h-[850px] overflow-hidden lg:min-h-[900px]">
        {/* Decorative shapes */}
        <div className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-[#E9D8B8]/50 blur-3xl" />
        <div className="absolute -bottom-60 -left-40 h-[600px] w-[600px] rounded-full bg-[#CFE1D6]/60 blur-3xl" />

        <div className="relative mx-auto grid min-h-[850px] max-w-[1400px] items-center gap-10 px-5 pb-16 pt-32 sm:px-8 lg:grid-cols-12 lg:px-12 lg:pt-28">
          {/* Left */}
          <div className="relative z-20 lg:col-span-6">
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-10 bg-[#E59B45]" />
              <span className="text-xs font-black uppercase tracking-[0.22em] text-[#A76A27]">
                A better way to care
              </span>
            </div>

            <h1 className="max-w-4xl text-[4rem] font-black leading-[0.91] tracking-[-0.065em] sm:text-[5.5rem] lg:text-[6.8rem]">
              They give us
              <br />
              <span className="text-[#173B2C]">everything.</span>
              <br />
              <span className="font-serif font-medium italic text-[#E59B45]">
                Give back.
              </span>
            </h1>

            <p className="mt-9 max-w-xl text-base leading-7 text-[#647069] sm:text-lg">
              PetCare brings your pet&apos;s health, routines, records and
              everyday moments into one beautifully simple place.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/?view=front"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#173B2C] px-7 py-4 text-sm font-bold text-white shadow-xl shadow-[#173B2C]/15 transition-all duration-300 hover:-translate-y-1 hover:bg-[#23533E]"
              >
                Create your pet profile
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-full border border-[#D8DDD8] bg-white/70 px-7 py-4 text-sm font-bold text-[#354239] backdrop-blur transition hover:border-[#AFC5B6] hover:bg-white"
              >
                See how it works
              </a>
            </div>

            {/* Tiny trust statement */}
            <div className="mt-9 flex items-center gap-3">
              <div className="flex -space-x-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#F7F6F2] bg-[#E8C9A5] text-sm">
                  🐶
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#F7F6F2] bg-[#D3E0D7] text-sm">
                  🐱
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#F7F6F2] bg-[#E7D8CB] text-sm">
                  🐕
                </div>
              </div>

              <p className="text-xs font-medium text-[#778078]">
                Made for the pets who make life better.
              </p>
            </div>
          </div>

          {/* Right visual */}
          <div className="relative z-10 lg:col-span-6 lg:h-[700px]">
            {/* Main photo */}
            <div className="absolute right-0 top-5 h-[560px] w-[82%] overflow-hidden rounded-[3rem] bg-[#DDD4C8] shadow-2xl shadow-[#173B2C]/10 lg:h-[650px]">
              <img
                src="https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=1200&q=90"
                alt="Golden retriever"
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

              <div className="absolute bottom-7 left-7 right-7">
                <div className="flex items-end justify-between text-white">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/70">
                      Meet Max
                    </p>
                    <p className="mt-1 text-2xl font-black">
                      Golden Retriever
                    </p>
                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-xl backdrop-blur-md">
                    ♡
                  </div>
                </div>
              </div>
            </div>

            {/* Small photo */}
            <div className="absolute -bottom-3 left-0 z-20 h-52 w-44 overflow-hidden rounded-[2rem] border-[7px] border-[#F7F6F2] bg-white shadow-2xl sm:h-60 sm:w-52">
              <img
                src="https://images.unsplash.com/photo-1519052537078-e6302a4968d4?auto=format&fit=crop&w=700&q=90"
                alt="Curious cat"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Floating dashboard */}
            <div className="absolute -bottom-10 right-[-5%] z-30 w-[280px] rounded-[1.8rem] border border-white/80 bg-white/90 p-4 shadow-2xl shadow-black/10 backdrop-blur-xl sm:w-[310px]">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-wider text-[#9AA29C]">
                    Today
                  </p>
                  <p className="mt-1 text-sm font-black text-[#17211B]">
                    Max&apos;s care
                  </p>
                </div>

                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E4F0E7] text-sm">
                  ✓
                </div>
              </div>

              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-3 rounded-xl bg-[#F4F7F4] p-3">
                  <span className="text-lg">🥣</span>
                  <div className="flex-1">
                    <p className="text-xs font-bold">Breakfast</p>
                    <p className="text-[10px] text-[#8A948D]">Completed</p>
                  </div>
                  <span className="text-xs font-black text-[#4E9A69]">
                    ✓
                  </span>
                </div>

                <div className="flex items-center gap-3 rounded-xl bg-[#FFF8EE] p-3">
                  <span className="text-lg">💊</span>
                  <div className="flex-1">
                    <p className="text-xs font-bold">Medication</p>
                    <p className="text-[10px] text-[#8A948D]">2:00 PM</p>
                  </div>
                  <span className="text-[10px] font-black text-[#C67B2D]">
                    NEXT
                  </span>
                </div>

                <div className="flex items-center gap-3 rounded-xl bg-[#EEF5F0] p-3">
                  <span className="text-lg">🦮</span>
                  <div className="flex-1">
                    <p className="text-xs font-bold">Evening walk</p>
                    <p className="text-[10px] text-[#8A948D]">6:30 PM</p>
                  </div>
                  <span className="text-[10px] font-black text-[#568263]">
                    LATER
                  </span>
                </div>
              </div>
            </div>

            {/* Decorative circle */}
            <div className="absolute -right-8 top-16 -z-10 h-28 w-28 rounded-full border border-[#E59B45]/40" />
            <div className="absolute -right-2 top-24 -z-10 h-4 w-4 rounded-full bg-[#E59B45]" />
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          INTRO STRIP
      ───────────────────────────────────────── */}
      <section className="border-y border-[#DDE2DD] bg-[#173B2C] text-white">
        <div className="mx-auto grid max-w-[1400px] gap-8 px-5 py-12 sm:px-8 md:grid-cols-3 lg:px-12">
          {[
            ["01", "Every record", "In one place"],
            ["02", "Every routine", "Right on time"],
            ["03", "Every moment", "A little easier"],
          ].map(([number, title, subtitle]) => (
            <div
              key={number}
              className="flex items-center gap-5 border-white/10 md:border-r md:last:border-0"
            >
              <span className="text-xs font-black text-[#E59B45]">
                {number}
              </span>
              <div>
                <p className="font-black">{title}</p>
                <p className="mt-1 text-sm text-white/50">{subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────────────────────────────────────
          FEATURES
      ───────────────────────────────────────── */}
      <section id="features" className="bg-white py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#A76A27]">
                Everything connected
              </p>

              <h2 className="mt-5 text-5xl font-black leading-[0.98] tracking-[-0.05em] text-[#17211B] sm:text-6xl">
                Good care
                <br />
                starts with
                <br />
                <span className="font-serif font-medium italic text-[#E59B45]">
                  knowing.
                </span>
              </h2>

              <p className="mt-7 max-w-md text-base leading-7 text-[#69736C]">
                PetCare gives you a clear picture of what your pet needs —
                without making pet care feel like another job.
              </p>
            </div>

            <div className="space-y-3 lg:col-span-7">
              {features.map((feature) => (
                <div
                  key={feature.number}
                  className="group rounded-[2rem] border border-[#E5E9E5] bg-[#F8F9F7] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#BFD1C4] hover:bg-white hover:shadow-xl hover:shadow-[#173B2C]/5 sm:p-9"
                >
                  <div className="flex gap-6">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#173B2C] text-xs font-black text-white transition-transform group-hover:scale-110">
                      {feature.number}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-5">
                        <div>
                          <div className="text-2xl">{feature.icon}</div>
                          <h3 className="mt-3 text-xl font-black">
                            {feature.title}
                          </h3>
                        </div>

                        <span className="hidden text-2xl text-[#AEB7B0] transition-transform group-hover:translate-x-1 sm:block">
                          ↗
                        </span>
                      </div>

                      <p className="mt-3 max-w-xl text-sm leading-6 text-[#707A73]">
                        {feature.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          STORY / DASHBOARD
      ───────────────────────────────────────── */}
      <section id="story" className="bg-[#F1F3EF] py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="overflow-hidden rounded-[3rem] bg-[#E1E9E3]">
            <div className="grid items-center lg:grid-cols-2">
              {/* Dashboard mockup */}
              <div className="p-6 sm:p-10 lg:p-14">
                <div className="rounded-[2rem] bg-[#17211B] p-3 shadow-2xl">
                  <div className="rounded-[1.5rem] bg-[#F8FAF8] p-5 sm:p-7">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-[#9AA49D]">
                          Pet profile
                        </p>
                        <h3 className="mt-1 text-2xl font-black">
                          Max 🐶
                        </h3>
                      </div>

                      <div className="h-12 w-12 overflow-hidden rounded-full">
                        <img
                          src="https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=200&q=80"
                          alt=""
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>

                    <div className="mt-6 grid grid-cols-2 gap-3">
                      <div className="rounded-2xl bg-white p-4">
                        <span className="text-xl">💉</span>
                        <p className="mt-3 text-[10px] font-black uppercase tracking-wider text-[#9AA49D]">
                          Vaccines
                        </p>
                        <p className="mt-1 text-sm font-black text-[#4E9A69]">
                          Up to date
                        </p>
                      </div>

                      <div className="rounded-2xl bg-white p-4">
                        <span className="text-xl">⚖️</span>
                        <p className="mt-3 text-[10px] font-black uppercase tracking-wider text-[#9AA49D]">
                          Weight
                        </p>
                        <p className="mt-1 text-sm font-black">
                          28.4 kg
                        </p>
                      </div>

                      <div className="col-span-2 rounded-2xl bg-[#173B2C] p-5 text-white">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-[10px] font-black uppercase tracking-widest text-white/50">
                              Next appointment
                            </p>
                            <p className="mt-1 font-black">
                              Annual wellness check
                            </p>
                          </div>

                          <span className="text-2xl">🩺</span>
                        </div>

                        <div className="mt-5 flex items-center justify-between text-xs">
                          <span className="text-white/50">
                            October 14
                          </span>
                          <span className="font-bold text-[#E7B16B]">
                            10:30 AM
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Copy */}
              <div className="px-6 pb-14 sm:px-10 lg:px-14 lg:py-14">
                <span className="text-xs font-black uppercase tracking-[0.2em] text-[#A76A27]">
                  Your pet. Your way.
                </span>

                <h2 className="mt-5 text-4xl font-black leading-[1] tracking-[-0.04em] text-[#17211B] sm:text-5xl">
                  Everything you need.
                  <br />
                  Nothing you don&apos;t.
                </h2>

                <p className="mt-6 max-w-lg leading-7 text-[#69746C]">
                  From the first vaccination to the hundredth walk, PetCare
                  keeps the details organized so you can focus on the part
                  that matters — being there.
                </p>

                <Link
                  href="/?view=front"
                  className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#173B2C] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#285941]"
                >
                  Build your pet profile
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          PET TYPES
      ───────────────────────────────────────── */}
      <section id="pets" className="bg-white py-28">
        <div className="mx-auto max-w-[1400px] px-5 text-center sm:px-8 lg:px-12">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-[#A76A27]">
            Every kind of companion
          </p>

          <h2 className="mx-auto mt-5 max-w-3xl text-5xl font-black tracking-[-0.05em] text-[#17211B] sm:text-6xl">
            Different personalities.
            <br />
            <span className="font-serif font-medium italic text-[#E59B45]">
              Same love.
            </span>
          </h2>

          <div className="mt-14 grid gap-4 sm:grid-cols-3">
            {[
              {
                name: "Dogs",
                emoji: "🐶",
                image:
                  "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=900&q=85",
              },
              {
                name: "Cats",
                emoji: "🐱",
                image:
                  "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?auto=format&fit=crop&w=900&q=85",
              },
              {
                name: "Every companion",
                emoji: "🐾",
                image:
                  "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=900&q=85",
              },
            ].map((pet) => (
              <div
                key={pet.name}
                className="group relative h-[390px] overflow-hidden rounded-[2.5rem]"
              >
                <img
                  src={pet.image}
                  alt={pet.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
                  <div className="text-left">
                    <p className="text-2xl font-black">{pet.name}</p>
                    <p className="mt-1 text-sm text-white/60">
                      Loved. Tracked. Cared for.
                    </p>
                  </div>

                  <span className="text-3xl">{pet.emoji}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          FINAL CTA
      ───────────────────────────────────────── */}
      <section className="px-5 pb-10 sm:px-8 lg:px-12">
        <div className="relative mx-auto max-w-[1400px] overflow-hidden rounded-[3rem] bg-[#173B2C] px-6 py-20 text-center sm:px-10">
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[#E59B45]/20 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-[#77A88B]/20 blur-3xl" />

          <div className="relative">
            <div className="text-4xl">🐾</div>

            <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-black tracking-[-0.04em] text-white sm:text-6xl">
              Better care starts with
              <span className="font-serif font-medium italic text-[#E7B16B]">
                {" "}
                one little step.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-white/55">
              Create a home for everything that makes your pet happy,
              healthy and loved.
            </p>

            <Link
              href="/?view=front"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-black text-[#173B2C] shadow-xl transition-all hover:-translate-y-1 hover:bg-[#FFF8EE]"
            >
              Get started with PetCare
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          FOOTER
      ───────────────────────────────────────── */}
      <footer className="bg-[#F7F6F2]">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-5 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
          <Link
            href="/?view=front"
            className="flex items-center gap-2"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#173B2C] text-sm">
              🐾
            </span>
            <span className="font-black">
              pet<span className="text-[#E59B45]">care</span>
            </span>
          </Link>

          <p className="text-xs text-[#8A938C]">
            © {new Date().getFullYear()} PetCare. Made for better pet days.
          </p>
        </div>
      </footer>
    </div>
  );
}
