import { Command, type TerminalContext } from "../types";

export class ExitCommand extends Command {
  readonly name = "exit";
  readonly description = "Close the terminal";

  execute(_args: string[], ctx: TerminalContext): void {
    ctx.close();
  }
}
