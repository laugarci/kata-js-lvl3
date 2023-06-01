const {
	addPairs,
	findPosition,
	endsWithA,
	doubleAndSort
} = require('./kata-lvl3.js');

test('Should return the sum of the pairs in the array', () => {
	expect(addPairs([1, 2, 3, 4, 5, 6])).toBe(12);
	expect(addPairs([1, 2, 3, 4, 5, 6, 7, 8])).toBe(20);
	expect(addPairs([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(30);
});

test('Should return the index of the element in the array', () => {
	expect(findPosition([1, 2, 3, 4, 5, 6], 3)).toBe(2);
	expect(findPosition(["manzana", "pera", "aguacate"], "pera")).toBe(1);
	expect(findPosition([1, 2, 3, 4, 5, 6], 7)).toBe(-1);
});

test('Should return true if all the words in the array ends with the letter "a" or returns false if not', () => {
	expect(endsWithA(["manzana", "pera", "aguacate"])).toBe(false);
	expect(endsWithA(["manzana", "pera", "guayaba"])).toBe(true);
	expect(endsWithA(["manzana", "pera", "aguacate", "guayaba"])).toBe(false);
});

test('Should return a copy of the array using the spread operator, then multiply each element by 2 and finally sort the array in ascending order', () => {
	expect(doubleAndSort([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6, 8, 10, 12]);
	expect(doubleAndSort([2, 40, 1, 10, 5, 6, 13, 8])).toEqual([2, 4, 10, 12, 16, 20, 26, 80]);
	expect(doubleAndSort([16, 2, 3, 4, 9, 10, 15, 12, 35, 5])).toEqual([4, 6, 8, 10, 18, 20, 24, 30, 32, 70]);
});
