import { Twilio } from 'twilio';

const accountSid = 'your_account_sid'; // Substitua pelo seu Account SID
const authToken = 'your_auth_token'; // Substitua pelo seu Auth Token
const client = new Twilio(accountSid, authToken);

export const sendMessage = async (to: string, body: string) => {
  try {
    const message = await client.messages.create({
      body,
      from: 'whatsapp:+14155238886', // Substitua pelo número do WhatsApp fornecido pelo Twilio
      to: `whatsapp:${to}`
    });
    console.log('Message sent:', message.sid);
  } catch (error) {
    console.error('Error sending message:', error);
  }
};