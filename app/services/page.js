import Link from "next/link";

function Page() {
  const pricing = [
    {
      title: "1-on-1 Fitness Coaching",
      desc: "Customized workout plans built around your goals, experience level, and schedule-perfect for professionals who need structure and flexibility.",
      features: [
        "Tailored training plans",
        "Weekly progress check-ins",
        "Exercise form review & feedback",
      ],
      price: "50",
      highlight: false,
    },
    {
      title: "Personalized Nutrition Coaching",
      desc: "No crash diets-just sustainable eating habits aligned with your fitness goals, lifestyle, and preferences.",
      features: [
        "Macro-based meal guidance",
        "Grocery & meal prep strategies",
        "Adjustments based on progress",
      ],
      price: "100",
      highlight: true,
    },
    {
      title: "Accountability & Habit Coaching",
      desc: "Stay consistent with expert support, habit tracking, and the mindset coaching needed to follow through and keep momentum.",
      features: [
        "Daily or weekly check-ins",
        "Habit tracking system",
        "Mindset tools to beat plateaus",
      ],
      price: "200",
      highlight: false,
    },
  ];
  return (
    <section
      className="flex flex-col items-center gap-8 px-4 pt-44 pb-20 md:px-20"
      id="pricing"
    >
      <div className="space-y-4 text-center">
        <h1
          className="text-3xl md:text-5xl max-w-xl mx-auto text-center font-bold tracking-wide mt-auto"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Choose the Plan That{" "}
          <span className="bg-gradient-to-br from-accent to-accent bg-clip-text text-transparent">
            Fits You
          </span>
        </h1>
        <p className="text-center text-text-muted max-w-xl mx-auto mt-auto">
          No hidden fees. No contracts. Just results.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {pricing.map((plan) => (
          <div
            key={plan.title}
            className={`flex flex-col gap-8 rounded-lg border border-border p-4 md:p-8 lg:p-8 ${
              plan.highlight
                ? "bg-bg-secondary text-text-secondary md:scale-105 hover:scale-110"
                : "bg-bg-primary md:hover:scale-105"
            } transition`}
          >
            <div className="space-y-4">
              <h3
                className={`tracking-wide text-2xl font-bold ${
                  plan.highlight ? "text-accent" : "text-text-muted"
                }`}
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {plan.title}
              </h3>
              <p
                className={`text-3xl md:text-4xl font-extrabold ${
                  plan.highlight ? "text-text-secondary" : "text-text-muted"
                }`}
              >
                {plan.price}
                <span className="text-xl">$/mo</span>
              </p>
            </div>
            <p
              className={`text-text-muted text-sm ${
                plan.highlight ? "text-text-secondary" : "text-text-muted"
              }`}
            >
              {plan.desc}
            </p>
            <ul className="space-y-2 text-sm">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  {feature}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className={`mt-auto w-full text-center px-8 py-4 rounded-lg font-semibold transition cursor-pointer ${
                plan.highlight
                  ? "bg-gradient-to-br from-accent hover:from-accent-hover to-accent-hover text-white"
                  : "text-text-secondary hover:bg-bg-secondary border border-border"
              }`}
            >
              Book A Meeting
            </Link>
          </div>
        ))}
      </div>

      <div className="w-full flex flex-col items-center gap-8 py-4 px-8 bg-gradient-to-br from-accent to-accent-hover rounded-lg mt-8">
        <p className="text-center font-semibold text-2xl max-w-2xl">
          Can&apos;t Find What You&apos;re Looking For? Schedule a Call So We
          Can Discuss Your Needs
        </p>
        <Link
          href="/contact"
          className="w-fit px-8 py-4 bg-bg-primary hover:bg-bg-secondary text-text-secondary text-lg transition font-semibold"
        >
          Schedule a Meeting
        </Link>
      </div>
    </section>
  );
}

export default Page;
