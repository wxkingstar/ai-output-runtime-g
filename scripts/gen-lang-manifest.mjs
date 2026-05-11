#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import vm from "node:vm";
import url from "node:url";

const __filename = url.fileURLToPath(import.meta.url);
const ROOT = path.resolve(path.dirname(__filename), "..");
const LANG_DIR = path.join(ROOT, "assets", "lang");
const OUT_FILE = path.join(LANG_DIR, "index.json");
const PKG = JSON.parse(fs.readFileSync(path.join(ROOT, "package.json"), "utf8"));

const files = fs
  .readdirSync(LANG_DIR)
  .filter((f) => f.endsWith(".js"))
  .sort();

const languages = {};
for (const file of files) {
  const full = path.join(LANG_DIR, file);
  const src = fs.readFileSync(full, "utf8");
  const window = { AIOutputRuntime: { registerLanguage(spec) { window.spec = spec; } } };
  vm.runInNewContext(src, { window });
  const spec = window.spec;
  if (!spec) throw new Error(`${file} did not register a language`);
  const bytes = Buffer.byteLength(src, "utf8");
  const sha384 = "sha384-" + crypto.createHash("sha384").update(src).digest("base64");
  languages[spec.name] = {
    file,
    aliases: spec.aliases,
    bytes,
    integrity: sha384
  };
}

const manifest = {
  runtime: `v${PKG.version}`,
  generatedAt: new Date().toISOString(),
  languages
};

fs.writeFileSync(OUT_FILE, JSON.stringify(manifest, null, 2) + "\n");
console.log(`Wrote ${OUT_FILE} (${Object.keys(languages).length} languages)`);
