import type { SubscribeDataType } from "@/lib/schema";
import { telegramBot } from "./baseUrl";

const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID;

export async function subscribeAPI({
  email,
  name,
  message,
}: SubscribeDataType) {
  const messageContent = message
    ? `Khách hàng ${name} có đia chỉ email : ${email} vùa  gủi yêu cầu nhận thông tin mới về sản phẩm với lời nhắn ${message} `
    : `Khách hàng ${name} có đia chỉ email : ${email} vùa  gủi yêu cầu nhận  thông tin mới `;

  try {
    await telegramBot.post("sendMessage", {
      chat_id: chatId,
      text: messageContent,
    });
  } catch (error) {
    console.log(error);
  }
}
