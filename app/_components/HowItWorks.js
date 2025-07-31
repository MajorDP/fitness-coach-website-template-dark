import { Target } from "lucide-react";
import Link from "next/link";

function HowItWorks() {
  const steps = [
    {
      title: "Initial Assessment & Goal Setting",
      desc: "We start with a 1-on-1 consultation to assess your current fitness level, lifestyle, and goals-so your plan is built around what actually works for you.",
    },
    {
      title: "Custom Plan & Coaching",
      desc: "You'll get a personalized fitness and nutrition plan, with expert guidance and weekly check-ins to keep you on track and adapting as you progress.",
    },
    {
      title: "Progress, Accountability & Results",
      desc: "We track your progress, adjust as needed, and keep you consistent with support, habit coaching, and a system designed to deliver lasting results.",
    },
  ];

  return (
    <section
      id="how-we-work"
      className="flex flex-col items-center text-center gap-8 px-4 py-32 md:px-16 bg-bg-secondary"
    >
      <h1
        className="text-3xl md:text-5xl max-w-xl mx-auto text-center font-bold tracking-wide mt-auto"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        How We Work, <span className="text-accent">Step-By-Step</span>
      </h1>
      <p className="max-w-xl text-text-muted">
        My coaching process combines personalized training, nutrition
        strategies, and accountability to help you lose weight, build strength,
        and stay consistent-no guesswork, just proven methods.
      </p>
      <p className="max-w-xl text-text-muted">
        Whether you&apos;re starting your fitness journey or looking to break
        through a plateau, I&apos;ll give you the structure, support, and
        strategy to get lasting results and feel confident in your body.
      </p>
      <article className="grid grid-cols-1 gap-8 mt-8 max-w-3xl">
        {steps.map((step, index) => (
          <div
            key={step.title}
            className="flex flex-col md:flex-row items-start md:items-center gap-4 bg-bg-primary shadow-xl border-l-4 border-accent p-4 md:p-8 rounded-lg relative"
          >
            <p className="w-6 h-6 bg-accent font-semibold rounded-full absolute top-1/2 transform -translate-y-1/2 -left-3.5">
              {index + 1}
            </p>
            <Target className="w-8 h-8 md:min-w-12 md:min-h-12 text-accent" />
            <div className="flex flex-col items-start gap-2">
              <h2 className="text-xl font-bold text-left">{step.title}</h2>
              <p className="text-left italic text-text-muted">{step.desc}</p>
            </div>
          </div>
        ))}
      </article>{" "}
      <div className="flex flex-col items-center md:flex-row gap-8">
        <Link
          href="/contact"
          className="w-fit text-center px-8 py-4 bg-gradient-to-br from-accent hover:from-accent-hover to-accent-hover text-lg transition font-semibold"
        >
          Book A Meeting
        </Link>
        <Link
          href="/testimonials"
          className="w-fit text-center px-8 py-4 bg-bg-primary hover:bg-bg-secondary border border-border text-lg transition"
        >
          Success Stories
        </Link>
      </div>
      <div className="w-full flex flex-col items-center gap-8 py-4 px-8 bg-gradient-to-br from-accent to-accent-hover rounded-lg mt-8">
        <p className="text-center font-semibold text-2xl max-w-2xl">
          Have Any Additional Questions?
        </p>
        <Link
          href="/contact"
          className="w-fit px-8 py-4 bg-bg-primary hover:bg-bg-secondary text-text-secondary text-lg transition font-semibold"
        >
          Reach Out To Us
        </Link>
      </div>
    </section>
  );
}

export default HowItWorks;
