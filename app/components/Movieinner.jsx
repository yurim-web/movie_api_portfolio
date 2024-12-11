const Movieinner = (props) => {
  const bold = {
    fontWeight: 700,
    fontSize: "20px",
  };
  return (
    <section
      style={{
        width: "100%",
        height: "100vh",
        padding: "50px 0px",
        backgroundImage: `linear-gradient(to left, rgba(248, 24, 148, 0) 10%,  rgba(33, 211, 211, 1) 100%), url(${props.backimg})`,
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "30px",
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "30px 0px",
          width: "60%",
          lineHeight: 1.8,
        }}
      >
        <img
          style={{
            width: "350px",
            borderRadius: "15px",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          }}
          src={props.poster_path}
          alt=""
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "25px",
            fontSize: "18px",
          }}
        >
          <h1 style={{ fontSize: "40px" }}>{props.title}</h1>
          <p>
            <span style={bold}>개봉일 : </span>
            {props.release_date}
          </p>
          <p>
            <span style={bold}>평점 : </span>
            {props.vote_average}
          </p>

          <p>
            <span style={bold}>줄거리 : </span>
            {props.overview}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Movieinner;
