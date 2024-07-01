import axios from 'axios';
import dayjs from 'dayjs';
import { location } from '../data';

//* functions for dynamic background
// https://sunrise-sunset.org/api
export const getSunTimesLocal = async ({ lat, lng }: location) => {
  const url = `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&formatted=0`;
  try {
    const response = await axios.get(url);
    const data = response.data.results;
    const sunrise = dayjs(data.sunrise).locale();
    const sunset = dayjs(data.sunset).locale();

    console.log(sunrise, sunset);
    return { sunrise, sunset };
  } catch (error) {
    console.error(error);
  }
};
