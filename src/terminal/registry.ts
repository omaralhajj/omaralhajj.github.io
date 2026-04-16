// src/terminal/registry.ts
import { Command, type TerminalContext } from "./types";

export class CommandRegistry {
  private readonly map = new Map<string, Command>();

  constructor(commands: Command[]) {
    for (const cmd of commands) {
      this.map.set(cmd.name, cmd);
    }
  }

  run(input: string, ctx: TerminalContext): void {
    const [name, ...args] = input.trim().split(/\s+/);
    const cmd = this.map.get(name);
    if (cmd) {
      cmd.execute(args, ctx);
    } else {
      ctx.print(`bash: ${name}: command not found`, "t-line--error");
    }
    ctx.print("");
  }

  getAll(): ReadonlyMap<string, Command> {
    return this.map;
  }
}
