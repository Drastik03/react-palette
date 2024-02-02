// Search.jsx
import Values from "values.js";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
export function Search({ onSearch }) {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);

  const search = () => {
    console.log("Searching...");
    try {
      const newColors = new Values(color).all();
      onSearch(newColors);
      setError(false);
    } catch (error) {
      console.log("Error al obtener color", error);
      setError(true);
    }
  };

  return (
    <>
      <h1 className="text-white text-center font-bold text-3xl py-5">
        Color Generator
      </h1>
      <div className="p-2 m-auto flex items-center justify-center w-1/2 max-w-screen-sm">
        <input
          className="rounded-md w-4/5 max-w-screen-sm px-2 py-1 mr-2"
          type="text"
          placeholder="#fffff"
          value={color}
          onChange={(event) => {
            setColor(event.target.value);
          }}
        />
        <button
          className="rounded-sm p-2 bg-primary text-white"
          onClick={search}
        >
          Search
        </button>
      </div>
      {error ? (
        <p className="text-red-500 text-center mt-2">
          Error in the color format
        </p>
      ) : null}
    </>
  );
}
