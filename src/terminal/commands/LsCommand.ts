import { Command, type TerminalContext } from "../types";

export class LsCommand extends Command {
  readonly name = "ls";
  readonly description = "List directory contents";

  execute(_args: string[], ctx: TerminalContext): void {
    const { children } = ctx.vfs.current;
    if (children.length === 0) return;
    for (const child of children) {
      const suffix = child.type === "directory" ? "/" : "";
      const cls = child.type === "directory" ? "t-line--prompt" : "";
      ctx.print(child.name + suffix, cls);
    }
  }
}
