import { mkdirSync, writeFileSync } from "node:fs";

// One excuse, delivered deadpan: the agent's own context window is the culprit.
const excuse =
  "My context window dropped your deadline to make room for the reminder email about your deadline.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", excuse, "utf8");
