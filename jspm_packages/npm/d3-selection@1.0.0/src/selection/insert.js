/* */ 
"format cjs";
import creator from "../creator";
import selector from "../selector";

function constantNull() {
  return null;
}

export default function(name, before) {
  var create = typeof name === "function" ? name : creator(name),
      select = before == null ? constantNull : typeof before === "function" ? before : selector(before);
  return this.select(function() {
    return this.insertBefore(create.apply(this, arguments), select.apply(this, arguments) || null);
  });
}
