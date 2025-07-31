import Link from "next/link";

function Page() {
  return (
    <section
      className="flex flex-col items-center gap-12 px-4 pt-44 pb-20 md:px-20"
      id="contact"
    >
      <div className="space-y-4 text-center max-w-2xl">
        <h1
          className="text-3xl md:text-5xl font-bold tracking-wide"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Let&apos;s{" "}
          <span className="bg-gradient-to-br from-accent to-accent-hover bg-clip-text text-transparent">
            Connect
          </span>
        </h1>
        <p className="text-text-muted text-lg">
          Got questions? Ready to take the first step? Reach out and let&apos;s
          build a plan tailored to you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-5xl">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left gap-8">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">Phone</h2>
            <p className="text-text-muted">+1 (123) 456-7890</p>
          </div>
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">Email</h2>
            <p className="text-text-muted">coach@example.com</p>
          </div>
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">Location</h2>
            <p className="text-text-muted">
              Remote Coaching • Based in Austin, TX
            </p>
          </div>
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">Book a Call</h2>
            <Link
              href="https://calendly.com/yourname"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-fit px-8 py-4 text-lg bg-gradient-to-br from-accent hover:from-accent-hover to-accent-hover text-text-secondary font-semibold rounded-lg transition"
            >
              Schedule via Calendly
            </Link>
          </div>
        </div>

        <form className="flex flex-col gap-4 bg-bg-primary p-4 md:p-8 rounded-lg border border-border w-full">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="name"
              className="font-medium text-sm text-text-secondary"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="px-4 py-3 rounded-md bg-bg-secondary text-text-secondary border border-border focus:outline-none"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="font-medium text-sm text-text-secondary"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="px-4 py-3 rounded-md bg-bg-secondary text-text-secondary border border-border focus:outline-none"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="message"
              className="font-medium text-sm text-text-secondary"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              className="px-4 py-3 rounded-md bg-bg-secondary text-text-secondary border border-border focus:outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="mt-4 w-full px-8 py-4 rounded-lg font-semibold transition bg-gradient-to-br from-accent hover:from-accent-hover to-accent-hover text-text-secondary cursor-pointer"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Page;
