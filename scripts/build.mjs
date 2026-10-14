// Joins the sources into dist/index.scss, the single file that sites load
// (also by its path: @import 'scss-react/dist/index'), so it must stay one file.
import { mkdir, readFile, writeFile } from "node:fs/promises";

const sources = ["src/options.scss", "src/react.scss"];

const parts = await Promise.all(sources.map((source) => readFile(source, "utf8")));
await mkdir("dist", { recursive: true });
await writeFile("dist/index.scss", parts.join("\n"));
