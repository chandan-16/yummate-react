export function getRandomObjects(jsonArray) {
  if (!Array.isArray(jsonArray) || jsonArray.length !== 110) {
      throw new Error("Input must be a JSON array of length 110");
  }

  let shuffled = jsonArray.sort(() => 0.5 - Math.random()); // Shuffle the array
  return shuffled.slice(0, 20); // Select the first 20 elements
}