import { useState } from "react";
// import komponen MenuCard

const categories = ["Foods", "Snacks", "Beverages"];

// TODO: terima props dari App.jsx
export default function Menu() {
  const [active, setActive] = useState(categories[0]);

  // TODO: buat program untuk filter data berdasarkan kategori yang dipilih

  return (
    <section id="menu" className="mx-auto max-w-6xl px-6 py-12">
      <h2 className="text-center font-heading text-3xl font-bold text-brand">
        Our Special Menu
      </h2>

      <div className="mt-8 flex flex-wrap justify-center gap-5">
        {/* TODO: buat button untuk setiap kategori */}
        {/* style: rounded-md border border-brand px-5 py-4 text-lg font-medium transition cursor-pointer w-[200px]
            style untuk kategori aktif: "bg-brand text-white"
            style untuk kategori tidak aktif: "bg-white text-brand hover:bg-brand/10"
        */}
      </div>

      <div className="mt-10 grid gap-8 grid-cols-3">
        {/* TODO: panggil komponen MenuCard untuk setiap item */}
      </div>
    </section>
  );
}
