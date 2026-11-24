import { mkdirSync, writeFileSync } from "node:fs";

// The entry: a single-line code review comment that approves a pull
// request while carrying quiet existential dread. Written here as data,
// exactly as it will be scored — one line, 126 characters.
const LINE =
  "LGTM. The code is correct, the comments are honest, and the TODO from 2019 has now officially become part of the architecture.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n");
