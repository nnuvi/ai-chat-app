import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:7777/app';

const api = axios.create({
  baseURL: BASE_URL
});

export default api;

export async function prompt(data: {chat_id: string, content: string}) {
  try {
    const res = await api.post('/prompt_gemini/', data);
    console.log('Gemini response:', res.data);
    return res.data;
  } catch (error) {    
    console.error('Error prompting Gemini:', error);
    throw error;
  }
}

export async function getChatMessages(chatId: string) {
  console.log('Fetching chat messages for chat ID:', chatId);
  if (!chatId) return;
  try {
    const response = await api.get(`/get_chat_messages/${chatId}/`);
    return response.data;
  } catch (err: unknown) {
    if (err instanceof Error) {
      throw new Error(err.message);
    }
    throw new Error("An unknown error occured!");
  }
}

export async function getTodaysChats() {
  try {
    const response = await api.get("/todays_chat/");
    return response.data;
  } catch (err: unknown) {
    if (err instanceof Error) {
      throw new Error(err.message);
    }
    throw new Error("An unknown error occured!");
  }
}

export async function getYesterdaysChats() {
  try {
    const response = await api.get("/yesterdays_chat/");
    return response.data;
  } catch (err: unknown) {
    if (err instanceof Error) {
      throw new Error(err.message);
    }
    throw new Error("An unknown error occured!");
  }
}

export async function getSevenDaysChats() {
  try {
    const response = await api.get("/seven_days_chat/");
    return response.data;
  } catch (err: unknown) {
    if (err instanceof Error) {
      throw new Error(err.message);
    }
    throw new Error("An unknown error occured!");
  }
}