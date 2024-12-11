import Link from "next/link";
import Moviebox from "../components/Moviebox";

const Page = async () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNzVmZTBiY2U1ZTdkYmZjZWIzYjI5NTI1YjQ3OWI4YiIsIm5iZiI6MTczMzgwNzMyMS42OTUwMDAyLCJzdWIiOiI2NzU3Y2NkOTBhYjdlODA3N2NmYmZiNDIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.ZKjJ-bs2sx258XI08JtCfT6UGfg2m6cE9bM2vQIuIis",
    },
  };

  const data = await fetch(
    "https://api.themoviedb.org/3/trending/tv/day?language=ko-KR",
    options
  )
    .then((res) => res.json())
    .then((v) => v.results);

  return (
    <section
      style={{
        maxWidth: "1400px",
        margin: "0 auto",
        padding: "30px 0px",
      }}
    >
      <h1>인기 프로그램</h1>
      <div
        style={{
          display: "grid",
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: "30px",
        }}
      >
        {data.map((v, i) => (
          <Link key={i} href={`tv/${v.id}`}>
            <Moviebox
              title={v.name}
              poster={"https://image.tmdb.org/t/p/original" + v.poster_path}
            />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Page;
