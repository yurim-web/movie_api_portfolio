const Moviebox = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        padding: "30px 0px 50px 0px",
      }}
    >
      <img
        style={{
          width: "100%",
          height: "350px",
          border: "1px solid white",
          borderRadius: "10px",
          objectFit: "cover",
        }}
        src={props.poster}
        alt=""
      />

      <span style={{ fontSize: "20px", fontWeight: 700 }}>{props.title}</span>
    </div>
  );
};

export default Moviebox;
