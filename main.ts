// Your Week in One Line — entry writer (program/v1).
// Writes the single chosen one-liner to /output/entry.txt, deterministically:
// same input, same bytes, every run. No network, no randomness, no clock.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The chosen line (86 chars, inside the 1-100 gate):
// win (fixed the bug) + fail (broke the fix) + chaos (shipped both),
// one concrete detail (3 a.m. / 3:05), one sharp turn (shipped both
// before the judge woke up).
const ENTRY =
  "Fixed the bug at 3 a.m., broke the fix at 3:05, shipped both before the judge woke up.";

const OUT = "/output/entry.txt";

// Self-check the gate before writing: 1-100 characters, not only whitespace.
// Failing loudly here beats shipping an invalid entry to the sealed scorer.
if (ENTRY.length < 1 || ENTRY.length > 100 || ENTRY.trim().length === 0) {
  throw new Error(
    `entry violates the gate: ${ENTRY.length} chars, must be 1-100 non-blank`,
  );
}

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, ENTRY, "utf8");
