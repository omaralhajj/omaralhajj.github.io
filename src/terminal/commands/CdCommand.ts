import { Command, type TerminalContext } from "../types";
import type { DirectoryNode } from "../VirtualFileTree";

export class CdCommand extends Command {
    readonly name = "cd";
    readonly description = "Change directory";

    execute(args: string[], ctx: TerminalContext): void {
        const target = (args[0] ?? "").replace(/\/+$/, "");

        if (target === "" || target === "~") {
            ctx.vfs.current = ctx.vfs.root;
            return;
        }

        if (target === "..") {
            if (ctx.vfs.current.parent) {
                ctx.vfs.current = ctx.vfs.current.parent;
            }
            return;
        }

        const child = ctx.vfs.current.children.find(
            (n) => n.name === target && n.type === "directory",
        );

        if (!child) {
            ctx.print(`cd: ${target}: No such directory`, "t-line--error");
            return;
        }

        ctx.vfs.current = child as DirectoryNode;
    }
}
