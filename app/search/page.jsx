"use client";
import { useState } from "react";
import { GoTrash } from "react-icons/go";

const Page = () => {
  const [input, setInput] = useState("");
  const change = (e) => {
    const value = e.target.value;
    if (value.trim() !== "") {
      setInput(value);
    }
  };

  const [push, setPush] = useState([]);
  const click = () => {
    if (input.trim() !== "") {
      setPush((prev) => [...prev, { valuetext: input, checked: false }]);
      setInput("");
    }
  };

  const remove = (i) => {
    setPush((prev) => [...prev].filter((v, idx) => idx != i));
  };

  return (
    <section
      style={{ maxWidth: "1400px", margin: "0 auto", padding: "30px 0px" }}
    >
      <h1>찾고 싶은 영화나 드라마 이름</h1>
      <div style={{ padding: "40px 0px", display: "flex", gap: "40px" }}>
        <input
          onChange={change}
          style={{
            backgroundColor: "transparent",
            border: "1px solid white",
            padding: "20px 500px 20px 20px",
            color: "white",
            borderRadius: "90px",
          }}
          type="text"
          placeholder="내용을 입력하세요"
        />
        <button
          onClick={click}
          style={{
            padding: "20px 35px",
            border: "none",
            borderRadius: "90px",
            fontWeight: 700,
          }}
        >
          search
        </button>
      </div>
      <div>
        <span>⚪ 검색기록</span>
        {push.map((v, i) => (
          <div
            style={{
              padding: "25px 10px",
              display: "flex",
              width: "700px",
              justifyContent: "space-between",
              borderBottom: "1px solid white",
            }}
            key={i}
          >
            <span
              style={{ textDecoration: v.checked ? "line-through" : "none" }}
            >
              {v.valuetext}
            </span>
            <GoTrash onClick={() => remove(i)} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Page;
