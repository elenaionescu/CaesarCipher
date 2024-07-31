import "@testing-library/jest-dom";
test("Number equality", () => {
  expect(1 + 1).toBe(2);
  expect(2 * 2).toBe(4);
  expect(5 - 3).toBe(2);
  expect(9 / 3).toBe(3);
});

test("String equality", () => {
  expect("hello").toBe("hello");
  expect("jest".toUpperCase()).toBe("JEST");
  expect("jest".substring(0, 2)).toBe("je");
  expect("foo" + "bar").toBe("foobar");
});

test("Array equality", () => {
  expect([1, 2, 3]).toEqual([1, 2, 3]);
  expect([1, 2, 3].length).toBe(3);
  expect([1, 2, 3].includes(2)).toBe(true);
});

test("Object equality", () => {
  const obj1 = { name: "Alice", age: 25 };
  const obj2 = { name: "Alice", age: 25 };
  expect(obj1).toEqual(obj2);
  expect(obj1.name).toBe("Alice");
  expect(obj1.age).toBe(25);
});

test("Truthy and falsy values", () => {
  expect(true).toBeTruthy();
  expect(false).toBeFalsy();
  expect(0).toBeFalsy();
  expect(1).toBeTruthy();
  expect("").toBeFalsy();
  expect("non-empty string").toBeTruthy();
  expect(null).toBeFalsy();
  expect(undefined).toBeFalsy();
  expect(NaN).toBeFalsy();
});

test("Deep equality", () => {
  const nestedObj1 = { a: { b: { c: 1 } } };
  const nestedObj2 = { a: { b: { c: 1 } } };
  expect(nestedObj1).toEqual(nestedObj2);
});

test("Equality with toBeCloseTo", () => {
  expect(0.1 + 0.2).toBeCloseTo(0.3, 5);
});

test("Regex match", () => {
  expect("foobar").toMatch(/foo/);
  expect("barfoo").toMatch(/^bar/);
});

test("Array containing", () => {
  expect([1, 2, 3]).toContain(2);
  expect(["apple", "banana", "cherry"]).toContain("banana");
});
