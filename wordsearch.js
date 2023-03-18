const wordSearch = (letters, word) => { 
  
    const horizontalJoin = letters.map(ls => ls.join(''))
    
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }
    for (let i = 0; i < letters[0].length; i++) {
      let vert = [];
      let wordFinder = '';
      for (let j = 0; j < letters.length; j++) {
        vert.push(letters[j][i]);
      }
      wordFinder += vert.join('');
      if (wordFinder.includes(word)) {
        return true;
      }
      return false;
    }
  
}

module.exports = wordSearch