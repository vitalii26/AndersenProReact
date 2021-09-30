import DataWrapper from "./DataWrapper";
import "./Planet.css";

const Planet = ({ data, error }) => {
  return (
    <div>
      {error ? <p>'Error!'</p> : null}
      <div className="planet-card">
        <h3>Planet name: {data.name}</h3>
        <p>
          Diameter: {data.diameter}, Population: {data.population}
        </p>
      </div>
    </div>
  );
};

const PlanetWithData = () => {
  return (
    <DataWrapper
      link="https://swapi.dev/api/planets/2"
      render={({ data, error }) => (
        <>{data && <Planet data={data} error={error} />}</>
      )}
    />
  );
};

export default PlanetWithData;
