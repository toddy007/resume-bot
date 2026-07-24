import { Client } from './structure/Client';
import OpenAI from 'openai';

export const client = new Client<true>({ intents: [33281]}); // intents in https://discord-intents-calculator.vercel.app/

export const openai = new OpenAI({ 
    apiKey: process.env.OPENAI_KEY,
    baseURL: "https://api.groq.com/openai/v1",
});

client.run();