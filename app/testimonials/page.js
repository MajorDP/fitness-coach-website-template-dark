import Link from "next/link";

import Image from "next/image";
import { Check } from "lucide-react";

function Page() {
  const successStories = [
    {
      name: "Rachel - 12-Week Weight Loss Transformation",
      image: "/beforeafterclient1.webp",
      description:
        "Rachel came in feeling tired, stuck, and frustrated with yo-yo diets. Through consistent training and guided nutrition, she lost over 18 pounds, toned her core, and reignited her confidence - proving that sustainable fat loss is possible.",
      stats: [
        "Lost 18 lbs and 4 inches off her waist in 12 weeks",
        "Went from zero energy to working out 4x a week consistently",
      ],
    },
    {
      name: "Marcus - From High Body Fat to Lean Muscle",
      image: "/beforeafterclient2.png",
      description:
        "Marcus was holding extra fat and struggled with strength. After 1 year of focused resistance training and meal coaching, he cut fat, gained muscle definition, and now confidently walks shirtless at the beach.",
      stats: [
        "Dropped 10% body fat and gained visible abs and chest definition",
        "Increased strength across all compound lifts by 30%+",
      ],
    },
    {
      name: "David - Skinny to Fit in Just 14 Weeks",
      image: "/beforeafterclient3.jpg",
      description:
        "David started lean but lacked muscle and structure. With a hypertrophy-focused plan and progressive overload, he added size to his arms, shoulders, and legs — finally achieving the athletic build he'd always wanted.",
      stats: [
        "Gained 15 lbs of lean muscle in 10 weeks",
        "Transformed from skinny frame to visibly muscular physique",
      ],
    },
  ];

  return (
    <section
      id="benefits"
      className="flex flex-col items-center text-center gap-8 px-4 pt-44 pb-20 md:px-20"
    >
      <h1
        className="text-3xl md:text-5xl max-w-xl mx-auto lg:mx-0 text-center font-bold tracking-wide"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        Clients I&apos;ve Helped{" "}
        <span className="text-accent">Lose Weight & Get Fit</span>
      </h1>
      <p className="max-w-xl text-text-muted">
        Discover real stories from clients who&apos;ve lost fat, built strength,
        and transformed their health with personalized coaching and proven
        strategies designed for busy professionals.
      </p>
      <Link
        href="/contact"
        className="w-fit px-8 py-4 bg-accent hover:bg-accent-hover text-text-secondary text-lg transition font-semibold"
      >
        Become Our Next Success Story
      </Link>
      <article className="space-y-24 mt-8">
        {successStories.map((story, index) => (
          <div
            className={`flex flex-col lg:flex-row gap-12 items-start`}
            key={story.description}
          >
            <div className="flex flex-col gap-8 w-full text-center lg:text-left">
              <h2 className="text-2xl font-semibold">{story.name}</h2>
              <p className="text-text-muted max-w-3xl">{story.description}</p>
              <ul className="text-text-muted space-y-4 flex flex-col items-center lg:items-start">
                {story.stats.map((stat) => (
                  <li
                    key={stat}
                    className="flex flex-col md:flex-row items-center gap-2"
                  >
                    <Check className="text-accent min-w-6 min-h-6" /> {stat}
                  </li>
                ))}
              </ul>
            </div>{" "}
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-1/2">
              <div className="relative w-full aspect-square md:w-[30rem] md:h-[20rem] mx-auto">
                <Image
                  src={story.image}
                  alt="Before website redesign"
                  fill
                  className="w-full h-full object-cover object-top rounded-xl border border-border"
                />
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white px-3 py-1 text-xs md:text-sm font-semibold rounded">
                  Before & After
                </span>
              </div>
            </div>
          </div>
        ))}
      </article>
      <div className="w-full flex flex-col items-center gap-8 py-4 px-8 bg-gradient-to-br from-accent to-accent-hover rounded-lg mt-8">
        <p className="text-center font-semibold text-2xl max-w-2xl">
          Are You Ready To Become The Next Big Success Story?
        </p>
        <Link
          href="/contact"
          className="w-fit px-8 py-4 bg-bg-primary hover:bg-bg-secondary text-text-secondary text-lg transition font-semibold"
        >
          Schedule A Meeting
        </Link>
      </div>
    </section>
  );
}

export default Page;
