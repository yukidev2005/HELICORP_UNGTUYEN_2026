import axios from 'axios';

const apiKey = import.meta.env.VITE_TELEGRAM_API_KEY;

export const telegramBot = axios.create({
  baseURL: `https://api.telegram.org/bot${apiKey}`,
});
