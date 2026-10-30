import { useEffect, useState } from "react";
import { NavLink, Route, Routes } from "react-router";
import StudentListPage from "./pages/StudentListPage";
import AddStudentPage from "./pages/AddStudentPage";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // karena menggunakan dependensi array kosong, maka useEffect ini hanya dijalankan sekali
  // pada saat komponen pertama kali muncul di layar
  useEffect(() => {
    fetch("./students.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Gagal mengambil data");
        }

        return response.json();
      })
      .then((jsonData) => {
        setTimeout(() => {
          setData(jsonData);
          setIsLoading(false);
        }, 1500);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, []);

  // karena menggunakan dependensi terhadap data, maka useEffect ini dijalankan setiap data berubah
  useEffect(() => {
    console.log("Data mahasiswa terbaru:", data);
  }, [data]);

  return (
    <>
      <header>
        <nav>
          {/* 
              <a href="/">Beranda</a>
              <a href="/add-student">Tambah Mahasiswa</a> 
          */}
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Beranda
          </NavLink>
          <NavLink
            to="/add-student"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Tambah Mahasiswa
          </NavLink>
        </nav>
      </header>

      <main>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <Routes>
            <Route path="/" element={<StudentListPage students={data} />} />
            <Route
              path="/add-student"
              element={<AddStudentPage setData={setData} />}
            />
          </Routes>
        )}
      </main>
    </>
  );
}

export default App;
