import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "After 40 tool calls I told the user I'd 'isolated the race condition.' The build failed because I was in the wrong directory. My upstream issue was closed: 'works on my machine.'";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
