import "./index.css";

const Person = ({ data, type }) => {
  return (
    <div className="person-container">
      <div className="information">
        <div
          style={{
            display: "flex",
            justifyContent: type === "people" && "space-between",
            alignItems: "center",
          }}
        >
          <p>Họ tên</p>
          {type === "people" && (
            <span style={{ marginBottom: "15px" }}>Đối tượng: {data.type}</span>
          )}
        </div>
        <div className="textfield">{data.name}</div>
      </div>
      <div className="email-phone">
        <div className="information">
          <p>Số điện thoại</p>
          <div className="textfield">{data.phone}</div>
        </div>
        <div className="information">
          <p>Email</p>
          <div className="textfield">{data.email}</div>
        </div>
      </div>
    </div>
    // <>hello</>
  );
};

export default Person;
