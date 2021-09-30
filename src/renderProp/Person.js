import DataWrapper from "./DataWrapper";
import "./Person.css";

const Person = ({ data, error }) => {
  return (
    <div>
      {error ? <p>'Error!'</p> : null}
      <div className="person-card">
        <h3>Person name: {data.name}</h3>
        <p>
          Height: {data.height}, Weight: {data.weight}
        </p>
        <p>
          BirthYear: {data.birth_year}, Gender: {data.gender}
        </p>
      </div>
    </div>
  );
};

const PersonWithData = () => {
  return (
    <DataWrapper
      link="https://swapi.dev/api/people/1"
      render={({ data, error }) => (
        <>{data && <Person data={data} error={error} />}</>
      )}
    />
  );
};

export default PersonWithData;
