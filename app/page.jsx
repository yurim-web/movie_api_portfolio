import Link from "next/link";
import ContentsBox from "./components/ContentsBox";
import HomeSlider from "./components/HomeSlider";
import Main_movie from "./components/Main_movie";
import Main_tv from "./components/Main_tv";

export default function Home() {
  return (
    <section
      style={{ maxWidth: "1400px", margin: "0 auto", padding: "30px 0px" }}
    >
      <h1>
        <span style={{ color: "#77E4C8", fontSize: "35px" }}>Waveyy </span>
        에서 최신작들을 만나보세요!
      </h1>
      <HomeSlider />
      <Main_movie></Main_movie>
      <Main_tv />
    </section>
  );
}
