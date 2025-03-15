import { React, useState } from "react";
import { useFetch } from "./hooks/useFetch";

export const CountryApp = () => {
  const [value, setValue] = useState("");
  const [url, setUrl] = useState("https://restcountries.com/v3.1/all");
  const { data, isLoading } = useFetch(url);

  const onClick = () => {
    if (value === "") {
      setUrl(`https://restcountries.com/v3.1/all`);
      return
    }
    setUrl(`https://restcountries.com/v3.1/name/${value}`);
  };

  return (
    <>
      <div className="w-full flex flex-col justify-center h-full items-center">
        <div className="w-4/5">
          <h1 className="text-center mb-4 text-6xl">Paises</h1>
          <div className="flex justify-center mb-4">
            <input
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Busque una opción"
              className="p-2 border rounded w-full"
            />
            <button
              type="button"
              className="bg-blue-400 text-black p-2 rounded ml-2 border-amber-500"
              onClick={onClick}
            >
              Buscar
            </button>
          </div>
        </div>
        <div className="w-4/5 flex flex-col items-center">
          <div className="min-h-[400px] w-full flex justify-center items-center">
            {isLoading ? (
              <svg
                className="mr-3 h-5 w-5 animate-spin"
                viewBox="0 0 24 24"
              ></svg>
            ) : (
              <div className="grid grid-cols-3 gap-6 w-full">
                {data.length > 0 ? (
                  data.map((country) => (
                    <div
                      key={country.cca3}
                      className="border rounded flex flex-col items-center"
                    >
                      <img
                        src={country.flags.png}
                        alt=""
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4 w-full">
                        <h2 className="text-center">{country.name.common}</h2>
                        <p className="text-center">
                          Capital: {country.capital}
                        </p>
                        <p className="text-center">Región: {country.region}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <h2 className="text-center col-span-3">
                    No se encontraron resultados
                  </h2>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
