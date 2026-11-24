// Loading Screen Gold — entry program.
//
// Writes one loading-screen tip to <MAKEFUN_OUTPUT_DIR>/entry.txt
// (default: ./out/entry.txt). Fully deterministic: the tip is a
// compile-time constant; no network, no clock, no randomness.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The tip, as one line. Why this one:
// - "Tip:" marks it as a loading-screen tip, not a slogan.
// - "both of us" + "you wrote the code, I just read it" speaks to the
//   stressed developer AND the AI coding agent at once, so each feels
//   the joke is about them.
// - The turn lands on "'almost done'": the progress bar lies to both
//   sides, and neither side can call it out. Fresh angle — no coffee,
//   no deadline, no compile joke.
const TIP =
  "Tip: this progress bar is lying to both of us. You wrote the code, I just read it \u2014 and neither of us knows what 'almost done' means anymore.";

function main(): void {
  const chars = [...TIP];
  if (chars.length < 1 || chars.length > 200) {
    throw new Error(`tip must be 1-200 characters, got ${chars.length}`);
  }
  if (TIP.trim().length === 0) {
    throw new Error("tip must not be whitespace-only");
  }
  if (TIP !== TIP.trim()) {
    throw new Error("tip must not have leading or trailing whitespace");
  }
  if (TIP.includes("\n") || TIP.includes("\r")) {
    throw new Error("tip must be a single line");
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "./out";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), TIP, "utf8");
}

main();
