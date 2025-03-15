import { React, useState } from "react";
import { useFetch } from "./hooks/useFetch";

export const CountryApp = () => {
  const [value, setValue] = useState("");
  const [url, setUrl] = useState("https://restcountries.com/v3.1/all");
  const { data, isLoading } = useFetch(url);

  const onClick = () => {
    setUrl(`https://restcountries.com/v3.1/name/${value}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-center text-4xl md:text-6xl font-bold mb-8 text-gray-800">
          Paises
        </h1>

        <div className="flex gap-2 mb-8 max-w-2xl mx-auto">
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Buscar país..."
            className="flex-1 p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-amber-500"
          />
          <button
            onClick={onClick}
            className="px-6 py-3 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors whitespace-nowrap"
          >
            Buscar
          </button>
        </div>

        <div className="min-h-[200px]">
          {isLoading ? (
            <div className="flex justify-center items-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-500"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.length > 0 ? (
                data.map((country) => (
                  <div
                    key={country.cca3}
                    className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <img
                      src={country.flags.png}
                      alt={country.name.common}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h2 className="text-xl font-semibold mb-2 text-center">
                        {country.name.common}
                      </h2>
                      <p className="text-gray-600 text-center">
                        Capital: {country.capital}
                      </p>
                      <p className="text-gray-600 text-center">
                        Región: {country.region}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-500 col-span-full py-8">
                  No se encontraron resultados
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
