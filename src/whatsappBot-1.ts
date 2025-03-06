import { Client, Message } from 'whatsapp-web.js';

const client = new Client({ 
    puppeteer: { 
        headless: true 
    } 
});

client.on('qr', (qr: string) => {
    console.log('QR RECEIVED', qr);
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', (message: Message) => {
    console.log(message.body);
});

client.initialize();