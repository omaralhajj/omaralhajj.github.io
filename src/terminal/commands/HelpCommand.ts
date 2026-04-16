import { Command, type TerminalContext } from "../types";

export class HelpCommand extends Command {
  readonly name = "help";
  readonly description = "Show this help message";

  execute(_args: string[], ctx: TerminalContext): void {
    ctx.print("Available commands:");
    ctx.print("");
    for (const [, cmd] of ctx.commands) {
      ctx.print(`  ${cmd.name.padEnd(10)}${cmd.description}`);
    }
  }
}
