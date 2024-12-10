const Movieinner = (props) => {
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
        }}
      >
        <img
          style={{ width: "350px", borderRadius: "15px" }}
          src={props.poster_path}
          alt=""
        />
        <div style={{ display: "flex", flexDirection: "column", gap: "25px" }}>
          <h1 style={{ fontSize: "35px" }}>{props.title}</h1>
          <p style={{ fontSize: "15px" }}>{props.release_date}</p>
          <p>평점 : {props.vote_average}</p>

          <p>{props.overview}</p>
        </div>
      </div>
    </section>
  );
};

export default Movieinner;
