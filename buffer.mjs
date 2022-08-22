const buffer = Buffer.from("agung wahyudi", "utf-8");
console.info(buffer.toString("base64"));
buffer.reverse();
console.info(buffer.toString());