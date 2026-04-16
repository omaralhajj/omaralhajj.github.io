import { Command, type TerminalContext } from "../types";

export class ThemeCommand extends Command {
  readonly name = "theme";
  readonly description = "Toggle dark / light mode";

  execute(_args: string[], ctx: TerminalContext): void {
    const themeBtn = document.getElementById("theme-toggle");
    if (themeBtn) {
      themeBtn.click();
      const isDark = document.documentElement.classList.contains("dark");
      ctx.print(`Theme switched to ${isDark ? "dark" : "light"}.`);
    } else {
      ctx.print("Theme toggle not available.", "t-line--error");
    }
  }
}
