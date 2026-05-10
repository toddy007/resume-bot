import { CommandPayload, CommandConstructor } from '../types/global';
import { SlashCommandBuilder } from 'discord.js';

export abstract class Command {
    public name: string;
    public aliases?: string[];
    public slashCommandData?: SlashCommandBuilder;
    
    public constructor({
        name,
        aliases,
        slashCommandData,
    }: CommandConstructor) {
        this.name = name;
        this.aliases = aliases ?? [];
        this.slashCommandData = slashCommandData;
    };

    public abstract execute(payload: CommandPayload): unknown;
}