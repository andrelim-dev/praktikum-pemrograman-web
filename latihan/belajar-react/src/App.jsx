// TODO: import komponen dan menuData

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        <Hero />
        {/* TODO: passing menuData ke komponen Menu */}
        <Menu />
      </main>

      <Footer />
    </div>
  );
}
