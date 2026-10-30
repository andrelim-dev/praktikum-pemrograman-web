import { useState } from "react";
import MenuCard from "./MenuCard";

const categories = ["Foods", "Snacks", "Beverages"];

export default function Menu({ menuData }) {
  const [active, setActive] = useState(categories[0]);
  const items = menuData.filter((item) => item.kategori === active);

  return (
    <section id="menu" className="mx-auto max-w-6xl px-6 py-12">
      <h2 className="text-center font-heading text-3xl font-bold text-brand">
        Our Special Menu
      </h2>

      <div className="mt-8 flex flex-wrap justify-center gap-5">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            className={`rounded-md border border-brand px-5 py-4 text-lg font-medium transition cursor-pointer w-[200px] ${
              active === cat
                ? "bg-brand text-white"
                : "bg-white text-brand hover:bg-brand/10"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-8 grid-cols-3">
        {items.map((item) => (
          <MenuCard key={item.nama_menu} item={item} />
        ))}
      </div>
    </section>
  );
}
