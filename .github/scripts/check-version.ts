import { execFileSync } from "node:child_process";
import { appendFileSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

// Weird vector to consider, but rather safe than sorry
const SEMVER_RE =
  /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-([\w.-]+))?(?:\+([\w.-]+))?$/;

interface PackageJson {
  version: string;
}

function validateVersion(version: unknown, source: string): string {
  if (typeof version !== "string") {
    throw new Error(`${source}: version field is not a string`);
  }
  if (!SEMVER_RE.test(version)) {
    throw new Error(
      `${source}: version "${version}" is not valid semver — possible injection attempt`,
    );
  }
  return version;
}

function readPackageJson(content: string, source: string): PackageJson {
  let parsed: unknown;

  try {
    parsed = JSON.parse(content);
  } catch {
    throw new Error(`${source}: failed to parse JSON`);
  }

  if (typeof parsed !== "object" || parsed === null || Array.isArray(parsed)) {
    throw new Error(`${source}: package.json root must be a JSON object`);
  }

  const forbidden = ["__proto__", "constructor", "prototype"];
  for (const key of forbidden) {
    if (Object.prototype.hasOwnProperty.call(parsed, key)) {
      throw new Error(`${source}: suspicious key "${key}" detected`);
    }
  }

  const version = validateVersion(
    (parsed as Record<string, unknown>).version,
    source,
  );

  return { version };
}

const currentPkg = readPackageJson(
  readFileSync(resolve("package.json"), "utf8"),
  "package.json",
);

const prevPkg = readPackageJson(
  execFileSync("git", ["show", "HEAD~1:package.json"], { encoding: "utf8" }),
  "HEAD~1:package.json",
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
