// Alien Field Notes: The Two Day Earth Review — make.fun bounty
// u-swift-raven-16-alien-field-notes-the-two-day-earth-7647b000
//
// Writes one line to /output/entry.txt: a review of planet Earth left by
// an alien tourist. One original line, plain text, at most 200 characters.

import { mkdirSync, writeFileSync } from "node:fs";

const REVIEW =
  "Came for the oceans, stayed after the locals taught me to apologise to furniture I walked into. Four stars; the furniture never apologised back.";

// Fail fast if the line ever breaks the house gate: UTF-8 text of
// 1 to 200 characters, not only white space, on a single line.
const charCount = [...REVIEW].length;
if (charCount < 1 || charCount > 200) {
  throw new Error(`entry must be 1-200 characters, got ${charCount}`);
}
if (REVIEW.trim().length === 0 || REVIEW.includes("\n")) {
  throw new Error("entry must be one non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", REVIEW, "utf8");
