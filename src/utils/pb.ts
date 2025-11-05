import PocketBase from "pocketbase";
import type { TypedPocketBase } from "./pocketbase-types";

var path = "";
if (import.meta.env.MODE === "development")
  path = "http://localhost:8090"; //localhost = machine de dev
else path = "https://tavue.eloishenry.fr:443"; //url du site
const PB_URL =
  process.env.PB_URL || import.meta.env.PB_URL || "http://127.0.0.1:8090/";

const pb = new PocketBase(PB_URL) as TypedPocketBase;

export default pb;



