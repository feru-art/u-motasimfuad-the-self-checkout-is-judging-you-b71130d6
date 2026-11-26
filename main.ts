import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUTPUT_DIR = "/output";
const OUTPUT_PATH = join(OUTPUT_DIR, "entry.txt");
const REMARK = "Kale scanned twice, cake mysteriously unscanned: your halo has no barcode.";

function assertRemark(value: string): void {
  const characterCount = Array.from(value).length;
  if (characterCount < 1 || characterCount > 200) {
    throw new Error("remark must contain 1 to 200 characters");
  }
  if (value.trim().length === 0) {
    throw new Error("remark must not be only white space");
  }
  if (value !== value.trim()) {
    throw new Error("remark must not start or end with white space");
  }
  if (value.includes("\n") || value.includes("\r")) {
    throw new Error("remark must stay on one line");
  }
}

function main(): void {
  assertRemark(REMARK);
  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(OUTPUT_PATH, REMARK, "utf8");
}

main();
