import axios from 'axios';

export async function getData() {
  const respons = await axios.get('http://vindev.cx.ua/dashboard');
  return respons.data;
}
