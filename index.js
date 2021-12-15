function isPalindrome(word) {
  // Write your algorithm here
  const newWord = reverseWord(word)
  // console.log(reverseWord(newWord))
  if (newWord === word){
    return true
  }

  else {
    return false
  }
}

function reverseWord(word){
  const splitWord = word.split("")
  // console.log(splitWord)
  const reverseArr = splitWord.reverse()
  // console.log(reverseArr)
  const reversedWord = reverseArr.join("")
  // console.log(reversedWord)
  return reversedWord
}




/* 
  problem in my own words:

  I will write a function that takes a string. If that string is the same as the revers of that string, the function will return true, else it will return false. 

*/

/* 
  Add your pseudocode here

  function isPlaindrome(input){
    var reverseWord = function reverseWord(input)

    if reverseWord is equal to word then do this:
    return true 

    else do this:
    return false 

  }



*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");
  
  console.log("Expecting: false");
  console.log("=>", isPalindrome("kyle"));
 
  console.log("");
  console.log("Expecting: true");
  console.log("=>", isPalindrome("madam"));
}

module.exports = isPalindrome;
