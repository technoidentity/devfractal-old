import { expect, test } from "vitest";
import {
  camelCaseToPascalCase,
  camelCaseToSnakeCase,
  capitalize,
  pascalCaseToCamelCase,
  pascalCaseToSnakeCase,
  snakeCaseToCamelCase,
  snakeCaseToPascalCase,
} from "../string";

test("capitalize", () => {
  expect(capitalize("")).toEqual("");
  expect(capitalize("a")).toEqual("A");
  expect(capitalize("A")).toEqual("A");
  expect(capitalize("hello")).toEqual("Hello");
  expect(capitalize("good morning")).toEqual("Good morning");
  expect(capitalize("good__morning")).toEqual("Good__morning");
  expect(capitalize("Fred")).toEqual("Fred");
});

test("camelCaseToPascalCase", () => {
  expect(camelCaseToPascalCase("")).toEqual("");
  expect(camelCaseToPascalCase("foo")).toEqual("Foo");
  expect(camelCaseToPascalCase("Foo")).toEqual("Foo");
  expect(camelCaseToPascalCase("fooBar")).toEqual("FooBar");
  expect(camelCaseToPascalCase("helloWorld")).toEqual("HelloWorld");
  expect(camelCaseToPascalCase("helloWorldUniverse")).toEqual(
    "HelloWorldUniverse"
  );
});

test("pascalCaseToCamelCase", () => {
  expect(pascalCaseToCamelCase("")).toEqual("");
  expect(pascalCaseToCamelCase("foo")).toEqual("foo");
  expect(pascalCaseToCamelCase("Foo")).toEqual("foo");
  expect(pascalCaseToCamelCase("FooBar")).toEqual("fooBar");
  expect(pascalCaseToCamelCase("HelloWorld")).toEqual("helloWorld");
});

test("snakeCaseToCamelCase", () => {
  expect(snakeCaseToCamelCase("")).toEqual("");
  expect(snakeCaseToCamelCase("foo")).toEqual("foo");
  expect(snakeCaseToCamelCase("_foo")).toEqual("Foo");
  expect(snakeCaseToCamelCase("foo_bar")).toEqual("fooBar");
  expect(snakeCaseToCamelCase("foo_Bar")).toEqual("fooBar");
  expect(snakeCaseToCamelCase("foo_bar_gaz")).toEqual("fooBarGaz");
  expect(snakeCaseToCamelCase("hello_world")).toEqual("helloWorld");
});

test("snakeCaseToPascalCase", () => {
  expect(snakeCaseToPascalCase("")).toEqual("");
  expect(snakeCaseToPascalCase("foo_bar")).toEqual("FooBar");
  expect(snakeCaseToPascalCase("hello_world")).toEqual("HelloWorld");
});

test("camelCaseToSnakeCase", () => {
  expect(camelCaseToSnakeCase("")).toEqual("");
  expect(camelCaseToSnakeCase("foo123Bar")).toEqual("foo123_bar");
  expect(camelCaseToSnakeCase("helloWorld45")).toEqual("hello_world45");
  expect(camelCaseToSnakeCase("howAre22YouToday")).toEqual(
    "how_are22_you_today"
  );
});

test("camelCaseToSnakeCase", () => {
  expect(pascalCaseToSnakeCase("")).toEqual("");
  expect(pascalCaseToSnakeCase("Foo123Bar")).toEqual("foo123_bar");
  expect(pascalCaseToSnakeCase("HelloWorld45")).toEqual("hello_world45");
  expect(pascalCaseToSnakeCase("HowAre22YouToday")).toEqual(
    "how_are22_you_today"
  );
});
