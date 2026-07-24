import { SlashCommandBuilder } from 'discord.js';
import { Client } from '../structure/Client';
import { CommandContext } from 'archangel.js';

export interface CommandPayload {
    client: Client<true>,
    context: CommandContext,
    args: string[],
}

export interface Command {
    name: string,
    aliases: string[],
    slashCommandData: SlashCommandBuilder,
    execute: (payload: CommandPayload) => unknown,
}

export interface CommandConstructor {
    name: string,
    aliases?: string[],
    slashCommandData?: SlashCommandBuilder,
}
