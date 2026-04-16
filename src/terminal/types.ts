import type { VirtualFileTree } from "./VirtualFileTree";

export interface TerminalContext {
  print: (text: string, cls?: string) => void;
  printHTML: (html: string, cls?: string) => void;
  clear: () => void;
  close: () => void;
  commands: ReadonlyMap<string, Command>;
  vfs: VirtualFileTree;
}

export abstract class Command {
  abstract readonly name: string;
  abstract readonly description: string;
  abstract execute(args: string[], ctx: TerminalContext): void;
}
