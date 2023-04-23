import Alert from "@/components/Alert";
import Layout from "@/components/Layout";
import Loader from "@/components/Loader";
import SearchBar from "@/components/SearchBar";
import Weathercard from "@/components/Weathercard";
import { weatherState } from "@/types";
import { useDebounce } from "@/utils";
import { ChangeEvent, useEffect, useState } from "react";

export default function Home() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState<weatherState>();
  const [error, setError] = useState(null);
  const [loader, setLoader] = useState(false);
  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    async function fetchweather() {
      setLoader(true);
      setWeather(undefined);

      await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${debouncedQuery?.trim()}&appid=${
          process.env.NEXT_PUBLIC_OPEN_WEATHER_APP_ID
        }`
      )
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            if (data?.cod !== 200) {
              setError(data?.message || "Error");
              setWeather(weather);
            } else {
              setWeather({
                temperature: data.main?.temp,
                description: data.weather[0]?.description,
                humidity: data.main?.humidity,
                windspeed: data.wind?.speed,
                icon: data.weather[0]?.icon,
              });
              setError(null);
            }
          }
        })
        .catch((e: any) => {
          setError(e);
        });
      setLoader(false);
    }

    if (debouncedQuery) {
      fetchweather();
    }
  }, [debouncedQuery]);

  const onQuery = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery((e.target as HTMLInputElement).value);

    setWeather(undefined);
    setError(null);
  };

  const onQueryClear = () => {
    setQuery("");
  };

  const onDismiss = () => {
    setError(null);
  };
  return (
    <Layout>
      <main>
        <div className="flex flex-col justify-center items-center text-center">
          <div>
            <h1 className="text-2xl font-bold text-start"> Weather Update</h1>
          </div>
          <div>
            <SearchBar
              query={query}
              onQuery={onQuery}
              onQueryClear={onQueryClear}
            />
          </div>
          <div>
            <Loader status={loader} />
            {query && weather && !loader && <Weathercard {...weather} />}

            {query && !loader && error && (
              <Alert error={error} onDismiss={onDismiss} />
            )}
          </div>
        </div>
      </main>
    </Layout>
  );
}
