import { getMetaData } from './meta/metaApi';
import { getDeepSeekData, getDeepSeekResponse } from './deepseek/deepseekApi';
import { sendMessage } from './whatsapp/whatsappApi';

const run = async () => {
    try {
        const metaData = await getMetaData();
        const deepSeekData = await getDeepSeekData();

        console.log('Meta Data:', metaData);
        console.log('DeepSeek Data:', deepSeekData);
    } catch (error) {
        console.error('Error running API integrations:', error);
    }
};

run();

export const handleIncomingMessage = async (message: string, from: string) => {
  // Obter resposta da API da DeepSeek
  const response = await getDeepSeekResponse(message);
  // Enviar resposta para o usuário no WhatsApp
  await sendMessage(from, response);
};

// Exemplo de uso
handleIncomingMessage('Olá, como você está?', '+1234567890');