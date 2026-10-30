export default function StudentListPage({ students }) {
  return (
    <div className="student-list">
      {students.map((student) => (
        <div key={student.name}>
          <p>Nama: {student.name}</p>
          <p>Jurusan: {student.major}</p>
          <p>Angkatan: {student.classOf}</p>
        </div>
      ))}
    </div>
  );
}
