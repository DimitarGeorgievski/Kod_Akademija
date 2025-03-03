import { EventEmitter} from "node:events";
import * as fs from "fs";
import { dirname} from "path";
import { fileURLToPath } from "url";

const emitter = new EventEmitter();
const directory = dirname(fileURLToPath(import.meta.url));
const filePath = `${directory}/path.txt`
export const AsyncFunction = async (path,content) =>{
 try {
    await fs.writeFile(path,content, "utf-8")
    console.log(`The file is successfully created on this path ${path}`);
 } catch (error) {
    console.log(`There is problem creating file ${error.message}`);
 }
}
emitter.on("event",AsyncFunction);
emitter.emit("event", filePath,"Zapisi go ova");