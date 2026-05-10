import { Command } from '../../../structure/Command';
import { CommandPayload } from '../../../types/global';
import { SlashCommandBuilder, MessageFlags } from 'discord.js';

export default class EchoCommand extends Command {
    public constructor() {
        super({
            name: 'echo',
            slashCommandData: new SlashCommandBuilder()
                .setName('echo')
                .setDescription('Responde com ola'),
        });
    }

    public async execute({ client, context, args }: CommandPayload) {
        this.reply(context, { content: 'Ola', flags: MessageFlags.Ephemeral });
    }
}