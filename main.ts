// Entry C (FINAL) — "The plan make.fun will carry out in public"
// Writes the exact 279-code-point plan text to /output/entry.txt.
// Deterministic: same bytes on every run. No network, no dependencies.
// The text is written verbatim with no trailing newline, so the file
// holds exactly 279 Unicode code points (limit 280).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The plan text, exactly as specified — do not alter any character.
const TEXT =
  "Day 1: build 10 Notion templates for wedding planners, $12 each on Etsy/Gumroad. Free samples in 5 planner Facebook groups. Answer buyers, build the 3 most asked for, bundle all 13 for $39. Most likely $200-$400: planners buy daily. Judge: probable money beats possible millions.";
  "Day 1: build 10 Notion templates for wedding planners, $12 each on Etsy/Gumroad. Free samples in 5 planner Facebook groups. Answer buyers, build the 3 most asked for, bundle all 13 for $39. Most likely $200-$400: planners buy daily. Judge: probable money beats possible millions.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
