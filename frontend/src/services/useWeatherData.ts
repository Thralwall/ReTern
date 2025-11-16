import { useEffect, useState } from "react";
import API from "./api";

type Weather = {
  date: string,
  summary: string,
  temperatureC: number,
  temperatureF: number,
}

export default function useWeatherData() {
  const [data, setData] = useState<Array<Weather> | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await API.get<Array<Weather>>('weatherforecast');
      console.log(res)
      setData(res);
    }

    fetchData();
  }, []);
  

  return data;
}