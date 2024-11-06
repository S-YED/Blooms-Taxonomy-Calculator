const taxonomy = {
  "L1": ["define", "list", "recall", "name", "identify", "describe", "state", "label", "tell", "show", "recognize", "match", "select", "choose"],
  "L2": ["explain", "describe", "classify", "summarize", "interpret", "contrast", "differentiate", "exemplify", "illustrate"],
  "L3": ["apply", "demonstrate", "execute", "solve", "complete", "construct", "develop", "utilize", "calculate"],
  "L4": ["analyze", "differentiate", "compare", "organize", "outline", "structure", "identify", "attribute", "deconstruct"],
  "L5": ["evaluate", "justify", "critique", "defend", "assess", "judge", "rate", "argue", "validate"],
  "L6": ["create", "design", "construct", "develop", "imagine", "compose", "formulate", "generate", "plan"]
};

function checkLevel(event) {
  // Prevent the form from submitting
  event.preventDefault();

  const word = document.getElementById('word').value.toLowerCase();
  const levelsFound = [];

  for (const level in taxonomy) {
    if (taxonomy[level].includes(word)) {
      levelsFound.push(level);
    }
  }

  const resultElement = document.getElementById('result');
  if (levelsFound.length > 0) {
    resultElement.innerText = `The term "${word}" belongs to the following level(s): ${levelsFound.join(', ')}`;
  } else {
    resultElement.innerText = `The term "${word}" is not in the Bloom's Taxonomy list.`;
  }
}
