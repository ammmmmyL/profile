import axios from 'axios';
import dayjs from 'dayjs';
// import relativeTime from 'dayjs/plugin/relativeTime'
import { location } from '../data';

// dayjs.extend(relativeTime);

//* functions for dynamic background
// https://sunrise-sunset.org/api
export const getSunTimesLocal = async ({ lat, lng }: location) => {
  const today = dayjs().format('YYYY-MM-DD');
  const url = `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=${today}&formatted=0`;
  try {
    const response = await axios.get(url);
    const data = response.data.results;
    const sunrise = dayjs(data.sunrise).format();
    const sunset = dayjs(data.sunset).format();

    return { sunrise, sunset };
  } catch (error) {
    console.error(error);
  }
};
