import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Menu from "./components/Menu.jsx";
import Footer from "./components/Footer.jsx";
import menuData from "./assets/data/data.json";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        <Hero />
        <Menu menuData={menuData} />
      </main>

      <Footer />
    </div>
  );
}
