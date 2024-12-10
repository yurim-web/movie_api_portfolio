import Link from "next/link";
import ContentsBox from "./ContentsBox";

const Main_tv = async () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNzVmZTBiY2U1ZTdkYmZjZWIzYjI5NTI1YjQ3OWI4YiIsIm5iZiI6MTczMzgwNzMyMS42OTUwMDAyLCJzdWIiOiI2NzU3Y2NkOTBhYjdlODA3N2NmYmZiNDIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.ZKjJ-bs2sx258XI08JtCfT6UGfg2m6cE9bM2vQIuIis",
    },
  };

  const data = await fetch(
    "https://api.themoviedb.org/3/tv/popular?language=ko-KR&page=1",
    options
  )
    .then((res) => res.json())
    .then((v) =>
      v.results.filter((v, i) => {
        return i < 6;
      })
    );
  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>
          믿고보는
          <span
            style={{ color: "#77E4C8", fontSize: "35px", margin: "0px 5px" }}
          >
            Waveyy
          </span>
          TV 추천작
        </h1>
        <Link href="/tv">
          <span>+ 더보기</span>
        </Link>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
          gap: "20px",
          padding: "30px 0px 100px 0px",
        }}
      >
        {data.map((v, i) => (
          <Link key={i} href={`tv/${v.id}`}>
            <ContentsBox
              img={"https://image.tmdb.org/t/p/original" + v.poster_path}
            />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Main_tv;
