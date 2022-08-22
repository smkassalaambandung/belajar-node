import fs from "fs/promises";
const buffer = await fs.readFile("require.js");

console.info(buffer.toString());

await fs.writeFile("temp.txt", "Hallo js from file-system.mjs");