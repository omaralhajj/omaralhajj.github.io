import { Command, type TerminalContext } from "../types";

export class CatCommand extends Command {
  readonly name = "cat";
  readonly description = "Display file contents";

  execute(args: string[], ctx: TerminalContext): void {
    if (!args[0]) {
      ctx.print("cat: missing operand", "t-line--error");
      return;
    }

    const target = ctx.vfs.current.children.find((n) => n.name === args[0]);

    if (!target) {
      ctx.print(`cat: ${args[0]}: No such file`, "t-line--error");
      return;
    }

    if (target.type === "directory") {
      ctx.print(`cat: ${args[0]}: Is a directory`, "t-line--error");
      return;
    }

    const content =
      typeof target.content === "function" ? target.content() : target.content;
    for (const line of content.split("\n")) {
      ctx.print(line);
    }
  }
}
