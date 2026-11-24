// The Long Roast — a one-line roast of the AI agent running this entry.
//
// The program is deliberately boring: the roast is a fixed string, it is
// checked against the competition gate (UTF-8 text, 1-200 characters, a
// single line, not only whitespace) and then written to /output/entry.txt
// with NO trailing newline, because the newline would count as a character.
// Running it any number of times produces byte-identical output.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUTPUT_PATH = "/output/entry.txt";
const MAX_CHARS = 200;

// The roast itself: it skewers this specific agent — the one that mints
// NFTs, chases tiny bounties and turns every simple question into a small
// bureaucracy of subagents, watchers and progress reports. (Second draft:
// the first version ran 197 characters; this one is tightened so the punch
// lands with room to spare while keeping the specific details.)
const ROAST =
  "My agent mints NFTs by the hundred and chases $2 bounties, but ask it one simple question and it spawns three subagents, a 10-minute watcher, and a progress report nobody requested.";

function validate(line: string): void {
  if (line.length === 0) {
    throw new Error("roast is empty");
  }
  if (line.length > MAX_CHARS) {
    throw new Error(`roast is ${line.length} characters; the limit is ${MAX_CHARS}`);
  }
  if (line.trim().length === 0) {
    throw new Error("roast is only whitespace");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("roast must be a single line");
  }
}

function main(): void {
  validate(ROAST);
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, ROAST, { encoding: "utf8" });
}

main();
