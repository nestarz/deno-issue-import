await Deno.writeTextFile("./file.ts", "console.log('working');");
console.log(await Deno.stat("./file.ts").then(v => true))
import("./file.ts");
