import { Command, type TerminalContext } from "../types";

export class ContactCommand extends Command {
  readonly name = "contact";
  readonly description = "Get my contact info and links";

  execute(_args: string[], ctx: TerminalContext): void {
    ctx.print("Email      omar@alhajj.dev");
    ctx.printHTML(
      'GitHub     <a href="https://github.com/omaralhajj" target="_blank" rel="noopener noreferrer">github.com/omaralhajj</a>',
      "t-line--link",
    );
    ctx.printHTML(
      'LinkedIn   <a href="https://linkedin.com/in/omaralhajj" target="_blank" rel="noopener noreferrer">linkedin.com/in/omaralhajj</a>',
      "t-line--link",
    );
    ctx.print("");
    ctx.print("(links are clickable)", "t-line--muted");
  }
}
