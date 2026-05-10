import { Command } from '../../../structure/Command';
import { CommandPayload } from '../../../types/global';
import { SlashCommandBuilder } from 'discord.js';

export default class PingCommand extends Command {
    public constructor() {
        super({
            name: 'ping',
            aliases: ['pong'],
            slashCommandData: new SlashCommandBuilder()
                .setName('ping')
                .setDescription('Mostra a latência do bot'),
        });
    }

    public async execute({ client, context }: CommandPayload) {
        this.reply(context, 'Pong! `' + client.ws.ping + 'ms`');
    }
}