/* */ 
"format cjs";
import {abs, epsilon} from "./math";

export default function(a, b) {
  return abs(a[0] - b[0]) < epsilon && abs(a[1] - b[1]) < epsilon;
}
