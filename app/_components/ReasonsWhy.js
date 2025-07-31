import { Star, Target } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function ReasonsWhy() {
  const reasons = [
    {
      title: "Personalized Weight Loss Coaching",
      desc: "Get a science-backed fitness and nutrition plan tailored to your body, goals, and schedule—no one-size-fits-all programs.",
    },
    {
      title: "Designed for Busy Professionals",
      desc: "Efficient workouts, flexible meal strategies, and real results—built to fit the demands of a busy lifestyle without burnout.",
    },
    {
      title: "Accountability That Drives Results",
      desc: "Stay consistent with expert support, weekly check-ins, and a fitness coach who actually keeps you on track and motivated.",
    },
  ];

  return (
    <section
      id="why-choose-us"
      className="flex flex-col items-center text-center gap-8 px-4 py-32 md:px-16"
    >
      <h2
        className="text-3xl md:text-5xl max-w-xs mx-auto lg:mx-0 text-center font-bold tracking-wide"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        Why You Should{" "}
        <span className="bg-gradient-to-br from-accent to-accent-hover bg-clip-text text-transparent">
          Choose Coach
        </span>
      </h2>
      <article className="grid grid-cols-1 gap-8 mt-8 max-w-3xl">
        {reasons.map((reason, index) => (
          <div
            key={reason.title}
            className="flex flex-col md:flex-row items-start md:items-center gap-4 bg-bg-secondary shadow-xl border-l-4 border-accent p-4 md:p-8 rounded-lg relative"
          >
            <p className="w-6 h-6 bg-accent font-semibold rounded-full absolute top-1/2 transform -translate-y-1/2 -left-3.5">
              {index + 1}
            </p>
            <Target className="w-8 h-8 md:min-w-12 md:min-h-12 text-accent" />
            <div className="flex flex-col items-start gap-2">
              <h2 className="text-xl font-bold text-left">{reason.title}</h2>
              <p className="text-left italic text-text-muted">{reason.desc}</p>
            </div>
          </div>
        ))}
      </article>
      <div className="flex flex-col items-center md:flex-row gap-8">
        <Link
          href="/contact"
          className="w-fit px-8 py-4 bg-gradient-to-br from-accent hover:from-accent-hover to-accent-hover text-text-secondary text-lg transition font-semibold"
        >
          Book A Meeting
        </Link>
        <Link
          href="/about#how-we-work"
          className="w-fit text-center px-8 py-4 bg-bg-primary hover:bg-bg-secondary border border-border text-lg transition"
        >
          How I Work
        </Link>
      </div>
    </section>
  );
}

export default ReasonsWhy;
