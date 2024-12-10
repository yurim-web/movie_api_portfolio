import Movieinner from "@/app/components/Movieinner";

const Page = async ({ params }) => {
  const { id } = params; // async/await 없이 바로 destructuring으로 id 값을 추출합니다.

  // API 요청 URL을 수정하여 동적 영화 상세 페이지 데이터를 가져옵니다.
  const data = await fetch(
    `https://api.themoviedb.org/3/tv/${id}?language=ko-KR&page=1`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNzVmZTBiY2U1ZTdkYmZjZWIzYjI5NTI1YjQ3OWI4YiIsIm5iZiI6MTczMzgwNzMyMS42OTUwMDAyLCJzdWIiOiI2NzU3Y2NkOTBhYjdlODA3N2NmYmZiNDIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.ZKjJ-bs2sx258XI08JtCfT6UGfg2m6cE9bM2vQIuIis",
      },
    }
  ).then((res) => res.json());

  return (
    <div>
      <Movieinner
        poster_path={"https://image.tmdb.org/t/p/original" + data.poster_path}
        backimg={"https://image.tmdb.org/t/p/original" + data.backdrop_path}
        title={data.name}
        release_date={data.first_air_date}
        overview={data.overview}
        vote_average={data.vote_count}
      />
    </div>
  );
};

export default Page;
