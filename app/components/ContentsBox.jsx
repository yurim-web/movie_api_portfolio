const ContentsBox = (props) => {
  return (
    <div>
      <img
        style={{
          width: "100%",
          height: "300px",
          border: "1px solid white",
          borderRadius: "10px",
        }}
        src={props.img}
        alt=""
      />
    </div>
  );
};

export default ContentsBox;
