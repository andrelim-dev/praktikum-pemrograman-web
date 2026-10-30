export default function Hero() {
  return (
    <section id="home" className="flex justify-center items-center h-screen">
      <div className=" flex gap-5 items-center">
        <div className="w-140">
          <h1 className="font-heading text-5xl font-bold leading-tight text-brand">
            A Taste Worth
            <br />
            Savoring
          </h1>
          <p className="mt-6 max-w-md text-base">
            Experience exquisite flavors crafted with the finest ingredients,
            served in a warm and elegant atmosphere.
          </p>
          <a
            href="#menu"
            className="mt-8 inline-block bg-brand px-8 py-4 text-lg font-medium text-white transition hover:opacity-90"
          >
            Explore Our Menu
          </a>
        </div>

        <div className="aspect-[16/9] w-200 overflow-hidden bg-brand/10">
          <img
            src="/images/hero.jpg"
            alt="Suasana restoran Andre’s Steak"
            className="h-full w-full object-cover"
            onError={(e) => {
              e.currentTarget.style.visibility = "hidden";
            }}
          />
        </div>
      </div>
    </section>
  );
}
