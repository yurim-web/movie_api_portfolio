import Link from "next/link";

const Header = () => {
  const btn_css = {
    padding: "10px 20px",
    border: "1px solid white",
    backgroundColor: "transparent",
    color: "white",
    borderRadius: "20px",
  };

  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "70px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "15px 0px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link href="/">
            <span
              style={{ fontSize: "28px", fontWeight: 700, color: "#77E4C8" }}
            >
              Waveyy
            </span>
          </Link>

          <div style={{ display: "flex", gap: "50px" }}>
            <Link href="/">
              <span>HOME</span>
            </Link>
            <Link href="/movie">
              <span>MOVIE</span>
            </Link>
            <Link href="/tv">
              <span>TV</span>
            </Link>
            <Link href="/search">
              <span>SEARCH</span>
            </Link>
          </div>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          height: "1px",
          backgroundColor: "white",
          opacity: 0.2,
        }}
      ></div>
      <div
        style={{
          padding: "15px 0px",
          display: "flex",
          gap: "10px",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        <button style={btn_css}>추천</button>
        <button style={btn_css}># 웨이비픽</button>

        <button style={btn_css}># 한국</button>
        <button style={btn_css}># 애니메이션</button>
      </div>
    </>
  );
};

export default Header;
