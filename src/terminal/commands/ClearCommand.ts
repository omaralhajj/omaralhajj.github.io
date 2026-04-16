import { Command, type TerminalContext } from "../types";

export class ClearCommand extends Command {
  readonly name = "clear";
  readonly description = "Clear the terminal";

  execute(_args: string[], ctx: TerminalContext): void {
    ctx.clear();
  }
}
