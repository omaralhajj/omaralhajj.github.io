import { Command, type TerminalContext } from "../types";

export class WhoamiCommand extends Command {
  readonly name = "whoami";
  readonly description = "Learn about me";

  execute(_args: string[], ctx: TerminalContext): void {
    ctx.print("Omar Alhajj — Software Engineer");
    ctx.print("Building things. Based in Denmark.");
  }
}
