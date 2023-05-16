export function capitalize(str: string): string {
  if (str.length === 0) {
    return "";
  }
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

export function camelCaseToPascalCase(str: string): string {
  if (str.length === 0) {
    return "";
  }
  return str[0].toUpperCase() + str.slice(1);
}

export function pascalCaseToCamelCase(str: string): string {
  if (str.length === 0) {
    return "";
  }
  return str[0].toLowerCase() + str.slice(1);
}

export function snakeCaseToCamelCase(str: string): string {
  if (str.length === 0) {
    return "";
  }
  const [firstWord, ...remWords] = str.split("_");
  return firstWord + remWords.map(capitalize).join("");
  // return remWords.reduce((result, word) => result + capitalize(word),
  //                         firstWord)
}

export function snakeCaseToPascalCase(str: string): string {
  if (str.length === 0) {
    return "";
  }
  return str.split("_").map(capitalize).join("");
  // return str.split('_').reduce((result, word) => result + capitalize(word), '')
}

export function camelCaseToSnakeCase(str: string): string {
  if (str.length === 0) {
    return "";
  }
  return str.replace(/[A-Z]/g, (match) => `_${match.toLowerCase()}`);
}

export function pascalCaseToSnakeCase(str: string): string {
  if (str.length === 0) {
    return "";
  }
  return str.replace(
    /[A-Z]/g,
    (match, offset) => (offset > 0 ? "_" : "") + match.toLowerCase()
  );
}
