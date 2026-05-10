import { CommandPayload, CommandConstructor } from '../types/global';
import { SlashCommandBuilder } from 'discord.js';
import { NoInitializer } from 'archangel.js/dist/archangel/noInitializer';

export abstract class Command extends NoInitializer {
    public name: string;
    public aliases?: string[];
    public slashCommandData?: SlashCommandBuilder;
    
    public constructor({
        name,
        aliases,
        slashCommandData,
    }: CommandConstructor) {
        super();
        this.name = name;
        this.aliases = aliases ?? [];
        this.slashCommandData = slashCommandData;
    };

    public abstract execute(payload: CommandPayload): unknown;
}