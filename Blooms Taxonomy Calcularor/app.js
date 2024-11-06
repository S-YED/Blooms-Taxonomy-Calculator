const taxonomy = {
  "L1 - REMEMBER": ["define", "duplicate", "list", "memorize", "recall", "repeat", "state"],
  "L2 - UNDERSTAND": ["classify", "describe", "discuss", "explain", "identify", "locate", "recognize", "report", "select", "translate"],
  "L3 - APPLY": ["execute", "implement", "solve", "use", "demonstrate", "interpret", "operate", "schedule", "sketch"],
  "L4 - ANALYZE": ["differentiate", "organize", "relate", "compare", "contrast", "distinguish", "examine", "experiment", "question", "test"],
  "L5 - EVALUATE": ["appraise", "argue", "defend", "judge", "select", "support", "value", "critique", "weigh"],
  "L6 - CREATE": ["design", "assemble", "construct", "conjecture", "develop", "formulate", "author", "investigate"]
};

function checkLevel(event) {
  event.preventDefault();

  const word = document.getElementById('word').value.toLowerCase();
  let highestLevel = null;

  // Iterate over each level to find the highest one containing the word
  for (const level in taxonomy) {
    if (taxonomy[level].includes(word)) {
      highestLevel = level; // Assigns the highest level in sequence
    }
  }

  // Display the result with the highest applicable level
  document.getElementById('result').innerText = 
    highestLevel ? 
    `The term "${word}" belongs to ${highestLevel}` : 
    `The term "${word}" is not in the Bloom's Taxonomy list.`;
}
