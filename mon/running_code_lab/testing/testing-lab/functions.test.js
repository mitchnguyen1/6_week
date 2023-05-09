const {
  returnTwo,
  greeting,
  add,
  multiply,
  subtract,
  divide,
} = require("./functions.js");

test("This should return the number 2", () => {
  expect(returnTwo()).toBe(2);
});

test("This should return hello, with your input", () => {
  expect(greeting("James")).toEqual("Hello, James");
  expect(greeting("Jill")).toEqual("Hello, Jill");
});


describe("Math Functions",()=>{
    
    test("This will add both arguments together", () => {
      expect(add(1, 2)).toEqual(3);
      expect(add(5, 9)).toEqual(14);
    });
    test("This will multiply both arguments together", () => {
      expect(multiply(1, 2)).toEqual(2);
      expect(multiply(5, 9)).toEqual(45);
    });
    test("This will subtract both arguments together", () => {
      expect(subtract(2,1)).toEqual(1);
      expect(subtract(7,4)).toEqual(3);
    });
    test("This will divide both arguments together", () => {
      expect(divide(10, 2)).toEqual(5);
      expect(divide(50, 5)).toEqual(10);
    });


})