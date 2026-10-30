export default function Navbar() {
  return (
    <header className="bg-brand text-white fixed left-0 right-0">
      <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-y-3 px-6 py-8">
        <a href="#home" className="font-heading font-bold text-3xl">
          Andre’s Steak
        </a>

        <ul className="flex items-center gap-5 font-semibold gap-10 text-lg">
          <li className="hover:border-b-2 border-white">
            <a href="">Home</a>
          </li>
          <li className="hover:border-b-2 border-white">
            <a href="">View Cart</a>
          </li>
          <li className="hover:border-b-2 border-white">
            <a href="">Our Location</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
