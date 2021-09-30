import withData from "./withData";
import "./User.css";

const User = ({ data }) => {
  return (
    <div className="user-card">
      <h3 className="user-card__name">{data.name}</h3>
      <p className="user-card__contacts">
        Phone: {data.phone}, email: {data.email}
      </p>
    </div>
  );
};

export default withData(User);
