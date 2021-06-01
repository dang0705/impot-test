export function getType(type) {
  let typeString = Object.prototype.toString.call(type).toLowerCase();
  return typeString.slice(8, typeString.length - 1);
}
