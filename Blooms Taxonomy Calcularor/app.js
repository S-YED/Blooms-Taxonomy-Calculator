/* 
 * © 2024 Syed Khaja Moinuddin. All rights reserved.
 * Bloom's Taxonomy Level Checker Script
 */
const taxonomy = {
    "L1": ["define", "list", "recall", "name", "identify", "describe", "state", "label", "tell", "show", "recognize", "match", "select", "choose"],
    "L2": ["explain", "describe", "classify", "summarize", "interpret", "contrast", "differentiate", "exemplify", "illustrate"],
    "L3": ["apply", "demonstrate", "execute", "solve", "complete", "construct", "develop", "utilize", "calculate"],
    "L4": ["analyze", "differentiate", "compare", "organize", "outline", "structure", "identify", "attribute", "deconstruct"],
    "L5": ["evaluate", "justify", "critique", "defend", "assess", "judge", "rate", "argue", "validate"],
    "L6": ["create", "design", "construct", "develop", "imagine", "compose", "formulate", "generate", "plan"]
  };
  
  function checkLevel() {
    const word = document.getElementById('word').value.toLowerCase();
    let levelFound = "Not Found";
  
    for (const level in taxonomy) {
      if (taxonomy[level].includes(word)) {
        levelFound = level;
        break;
      }
    }
  
    document.getElementById('result').innerText = 
      levelFound !== "Not Found" ? 
      `The term "${word}" belongs to ${levelFound}` : 
      `The term "${word}" is not in the Bloom's Taxonomy list.`;
  }
  