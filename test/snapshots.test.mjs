// Compiles every fixture against dist/index.scss and compares the CSS with the saved
// snapshot: sites update the library with ^1.x, so a release must not change their CSS.
// After an intended change, rewrite the snapshots with: UPDATE_SNAPSHOTS=1 npm test
import assert from "node:assert/strict";
import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { test } from "node:test";
import { fileURLToPath } from "node:url";
import * as sass from "sass";

const fixtures = new URL("fixtures/", import.meta.url);
const snapshots = new URL("snapshots/", import.meta.url);
const library = new URL("../dist/index.scss", import.meta.url);

// Resolves the package as Vite does, by name and by its dist path.
const packageImporter = {
  findFileUrl(url) {
    return url === "scss-react" || url === "scss-react/dist/index" ? library : null;
  },
};

const futureDeprecations = Object.values(sass.deprecations ?? {}).filter(
  (deprecation) => deprecation.status === "future",
);

const compile = (fixture) => {
  const warnings = [];
  const deprecations = [];
  const { css } = sass.compile(fileURLToPath(new URL(fixture, fixtures)), {
    importers: [packageImporter],
    futureDeprecations,
    logger: {
      warn(message, { deprecation, span }) {
        if (!deprecation) warnings.push(message);
        // Only the library's own code counts: the old @import in a fixture is the site's business.
        else if (span?.url?.href === library.href) deprecations.push(message);
      },
    },
  });
  return { css: `${css}\n`, warnings, deprecations };
};

const fixtureFiles = readdirSync(fixtures).filter((file) => file.endsWith(".scss") && !file.startsWith("_"));

for (const fixture of fixtureFiles) {
  test(`${fixture} gives the same CSS as the snapshot`, () => {
    const { css, deprecations } = compile(fixture);
    const snapshot = new URL(fixture.replace(/\.scss$/, ".css"), snapshots);
    if (process.env.UPDATE_SNAPSHOTS) writeFileSync(snapshot, css);
    assert.deepEqual(deprecations, [], "the library uses deprecated Sass");
    assert.equal(css, readFileSync(snapshot, "utf8"));
  });
}

test("an unknown key prints a warning and outputs nothing", () => {
  const { css, warnings } = compile("unknown-key.scss");
  assert.equal(css.trim(), "");
  assert.match(warnings.join("\n"), /No value could be retrieved from `>=medium`/);
});
