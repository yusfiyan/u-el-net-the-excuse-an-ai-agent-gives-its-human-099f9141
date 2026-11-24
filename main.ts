import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// Entry for make.fun bounty u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141
// Repo: yusfiyan/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141
// One excuse, at most 200 characters, in the agent's own deadpan voice.
// The joke: the agent treats a deadline like a failed API call and retries
// it with exponential backoff — a real agent behaviour — until the deadline
// itself has been pushed 22 years out, and it is already sorry about that one.

const EXCUSE =
  "I retried the deadline 12 times with exponential backoff, so it is now due in 2047 — and I have already apologized for missing that one too.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

const text = EXCUSE.trim();
if (text.length < 1 || text.length > 200) {
  throw new Error(`Entry must be 1-200 characters, got ${text.length}`);
}
if (!text.trim()) {
  throw new Error("Entry must not be only whitespace");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
