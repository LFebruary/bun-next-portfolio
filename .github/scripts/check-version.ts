import { execFileSync } from "node:child_process";
import { appendFileSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

interface PackageJson {
  version: string;
}

function readPackageJson(content: string): PackageJson {
  const parsed = JSON.parse(content);
  if (typeof parsed.version !== "string") {
    throw new Error("package.json is missing a valid version field");
  }
  return parsed as PackageJson;
}

const currentPkg = readPackageJson(
  readFileSync(resolve("package.json"), "utf8"),
);

const prevPkg = readPackageJson(
  execFileSync("git", ["show", "HEAD~1:package.json"], { encoding: "utf8" }),
);

const changed = currentPkg.version !== prevPkg.version;

console.log(`Previous version: ${prevPkg.version}`);
console.log(`Current version:  ${currentPkg.version}`);
console.log(
  changed
    ? "Version was explicitly bumped — skipping auto-patch."
    : "No version change detected — patch will be applied.",
);

const outputFile = process.env.GITHUB_OUTPUT;
if (!outputFile) throw new Error("GITHUB_OUTPUT env var is not set");

appendFileSync(outputFile, `changed=${changed}\n`);
