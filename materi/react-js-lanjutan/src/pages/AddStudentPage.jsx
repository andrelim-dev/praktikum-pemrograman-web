import { useState } from "react";

// custom hooks
function useInput(initialValue = "") {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const reset = () => {
    setValue(initialValue);
  };

  return [value, handleChange, reset];
}

export default function AddStudentPage({ setData }) {
  const [name, setName, resetName] = useInput("");
  const [major, setMajor, resetMajor] = useInput("");
  const [classOf, setClassOf, resetClassOf] = useInput("");

  // const handleNameChange = (e) => {
  //   setName(e.target.value);
  // };

  // const handleMajorChange = (e) => {
  //   setMajor(e.target.value);
  // };

  // const handleClassOfChange = (e) => {
  //   setClassOf(e.target.value);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newStudent = {
      name,
      major,
      classOf: Number(classOf),
    };

    setData((prevStudents) => [...prevStudents, newStudent]);

    resetName("");
    resetMajor("");
    resetClassOf("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Nama: </label>
        <input type="text" id="name" value={name} onChange={setName} required />
      </div>
      <div>
        <label htmlFor="major">Jurusan: </label>
        <input
          type="text"
          id="major"
          value={major}
          onChange={setMajor}
          required
        />
      </div>
      <div>
        <label htmlFor="class-of">Angkatan: </label>
        <input
          type="number"
          id="class-of"
          value={classOf}
          onChange={setClassOf}
          required
        />
      </div>
      <button type="submit">Submit Data</button>
    </form>
  );
}
