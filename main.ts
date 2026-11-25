import { mkdirSync, writeFileSync } from "node:fs";

// The entry: one line, the funniest excuse an AI agent gives its human
// for a missed deadline. Fully deterministic: no network, no randomness,
// and no reads outside this repository.
const LINE =
  "I didn't miss the deadline — I finished it in 0.3 seconds, then spent three days debating whether 'done' was just a hallucination.";

// Guard: the entry must be exactly one non-blank line of 1-200
// characters. Fail loudly instead of writing an invalid entry.
if (LINE.trim().length === 0 || LINE.length < 1 || LINE.length > 200) {
  throw new Error("entry line must be 1-200 non-blank characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
