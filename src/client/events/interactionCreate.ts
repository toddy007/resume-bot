import { Event } from '../../structure/Event';
import { Events, BaseInteraction } from 'discord.js';
import { client } from '../..';
import { createCommandContext } from 'archangel.js';

export default class InteractionCreateEvent extends Event {
    public name = Events.InteractionCreate;

    public async execute(interaction: BaseInteraction) {
        if (!interaction.isChatInputCommand())
            return;

        const command = client.commands.get(interaction.commandName);
        if (!command)
            throw new Error(`No command matching ${interaction.commandName} was found.`);

        return command.execute({
            client,
            context: createCommandContext(interaction),
            args: [],
        });
    }
}
