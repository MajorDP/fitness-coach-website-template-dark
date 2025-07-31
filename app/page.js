import Link from "next/link";
import { Star } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section
        id="hero"
        className="flex flex-col items-center gap-8 px-4 pt-44 pb-20 md:px-20"
        style={{
          background: "url(/bgImage.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundColor: "rgba(0, 0, 0, 0.65)",
          backgroundBlendMode: "darken",
        }}
      >
        <div className="justify-center flex flex-col items-center gap-8">
          <h1
            className="text-3xl md:text-5xl max-w-xl mx-auto text-center font-bold tracking-wide mt-auto"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Professional Fitness Coach for{" "}
            <span className="bg-gradient-to-br from-accent to-accent bg-clip-text text-transparent">
              Weight Loss & Strength Training
            </span>
          </h1>
          <p className="text-center text-text-muted max-w-xl mx-auto mt-auto">
            I help busy professionals and casual enthusiasts lose weight, build
            muscle, and stay in shape with customized, evidence-based fitness,
            nutrition programs and personal coaching.
          </p>

          <div className="flex flex-col items-center gap-4 mx-auto mt-auto">
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
            <p className="text-sm flex items-center justify-center gap-2 text-center text-text-muted font-semibold">
              <Star fill="yellow" stroke="yellow" /> 20+ Clients like you
              trusted my advice
            </p>
          </div>
        </div>
      </section>
      <section
        id="about"
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 py-28 md:px-16"
      >
        <div className="justify-center flex flex-col items-center lg:items-start gap-8">
          <h1
            className="text-3xl md:text-5xl max-w-xl mx-auto lg:mx-0 text-center lg:text-left font-bold tracking-wide"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            I Help People Build a{" "}
            <span className="bg-gradient-to-br from-accent to-accent-hover bg-clip-text text-transparent">
              Stronger Body & Healthier Lifestyle
            </span>
          </h1>
          <p className="text-center lg:text-left max-w-xl text-text-muted">
            I help busy professionals lose weight and boost energy through
            personalized fitness and nutrition coaching-no crash diets, just
            science-backed results.
          </p>
          <p className="text-center lg:text-left max-w-xl text-text-muted">
            My programs fit demanding schedules and focus on fat loss, strength,
            and lasting confidence. Stay consistent, stay accountable, and get
            real results.
          </p>

          <div className="flex flex-col items-center md:flex-row gap-8">
            <Link
              href="/contact"
              className="w-fit text-center px-8 py-4 bg-gradient-to-br from-accent hover:from-accent-hover to-accent-hover text-lg transition font-semibold"
            >
              Book A Meeting
            </Link>
            <Link
              href="/services"
              className="w-fit text-center px-8 py-4 bg-bg-primary hover:bg-bg-secondary border border-border text-lg transition"
            >
              What I Offer
            </Link>
          </div>
        </div>
        <div className="relative rounded-lg overflow-hidden h-[24rem]">
          <Image
            fill
            alt="Main Image"
            src="/bgImage.jpg"
            className="w-full h-full object-cover"
          />
        </div>
      </section>
    </>
  );
}
