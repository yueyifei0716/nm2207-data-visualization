const sentence = "The quick brown fox jumps over the lazy dog.";

// Using split() to split the sentence into words
const words = sentence.split(" ");
console.log(words);

// Output: ["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog."]

// Using slice() to get a portion of the array
const firstThreeWords = words.slice(0, 3);
console.log(firstThreeWords);

// Output: ["The", "quick", "brown"]