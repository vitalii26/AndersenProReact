import { useState, useCallback, useEffect } from "react";

const useToggle = (initialState = false) => {
  const [state, setState] = useState(initialState);

  const toggle = useCallback(() => setState((state) => !state), []);

  return [state, toggle];
};

const useFetch = (url) => {
  const [response, setResponse] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setResponse(data));
  }, [url]);

  return response;
};

function ToggleButton() {
  const [isButtonClicked, setIsButtonClicked] = useToggle();
  const starship = useFetch("https://swapi.dev/api/starships/2");

  return (
    <div className="wrapper">
      <button
        onClick={setIsButtonClicked}
        style={{ color: isButtonClicked ? "green" : "red" }}
      >
        Change color
      </button>
      {starship && <p>{starship.name}</p>}
    </div>
  );
}

export default ToggleButton;
