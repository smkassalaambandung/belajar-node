import process from "process";

process.addListener("exit", (exitCode)=>{
  console.info(`NodeJS exit with code ${exitCode}`);
})

console.info(process.version);
console.info(process.argv);
console.table(process.report);
console.table(process.env);

process.exit(1);