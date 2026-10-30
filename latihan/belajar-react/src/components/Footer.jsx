export default function Footer() {
  return (
    <footer
      id="location"
      className="mt-24 bg-brand px-6 py-10 text-center text-white"
    >
      <p className="text-lg">
        © {new Date().getFullYear()} Andre’s Steak. Crafted with passion, served
        with love.
      </p>
    </footer>
  );
}
