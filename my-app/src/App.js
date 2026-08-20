import React from "react";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import Footer from "./components/Footer";
import Greeting from "./components/Greeting";
import Card from "./components/Card";
import ProfileCard from "./components/ProfileCard";
import "./App.css";

const members = [
  { id: 1, name: 'Matika Thanaanantakul', nickname: 'Fey', major: 'เทคโนโลยีสารสนเทศ', favorites: ['Pepsi', 'Cat'] },
  { id: 2, name: 'Misa Otoshi', nickname: 'Misa', major: 'เทคโนโลยีสารสนเทศ', favorites: ['Greentea', 'Salmon'] },
  { id: 3, name: 'Methaporn Assnon', nickname: 'Mint', major: 'เทคโนโลยีสารสนเทศ', favorites: ['Thaitea', 'Buldak'] }
  // 👉 เพิ่มสมาชิกคนอื่น ๆ ของกลุ่มที่นี่
];

const students = [
  { id: 1, name: "ฝน", year: 3 },
  { id: 2, name: "เต้ย", year: 2 },
  { id: 3, name: "มายด์", year: 4 },
];

function App() {
  return (
    <div>
      <div className="container">
      <h1>สมาชิกกลุ่มของเรา</h1>
      <div className="card-row">
        {members.map((m) => (
          <ProfileCard
            key={m.id}
            name={m.name}
            nickname={m.nickname}
            major={m.major}
            favorites={m.favorites}
          />
        ))}
      </div>
    </div>
      {/* <Card title="ประกาศ">
        <p>
          สัปดาห์หน้าเรียนเรื่อง <b>State & Forms</b>
        </p>
        <p>อย่าลืม push การบ้านขึ้น GitHub!</p>
      </Card>
      <h1>รายชื่อนักศึกษา</h1>
      {students.map((s) => (
        <Greeting key={s.id} name={s.name} year={s.year} />
      ))} */}
    </div>
  );
}
export default App;