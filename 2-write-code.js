// 1) Sum Zero

const addToZero = (arr) => {
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            if(arr[i] + arr[j] === 0) {
                return true
            }
        }
    } 
    
    return false
}
// console.log(addToZero([1, 2, 3]))
// // console.log(addToZero([1, 2, 3, -1]))

// runtime: O(n^2)
// space: O(n)

// 2) Unique Characters

const hasUniqueChars = (str) => {
    for(let i = 0; i < str.length - 1; i++) {
        if(str.includes(str[i], i + 1)) {
            return false
        }
    }
    return true
}

// console.log(hasUniqueChars("lol"))
// console.log(hasUniqueChars("car"))

// runtime: O(n)
// space: O(n)

// 3) Pangram Sentence

const isPangram = (str) => {

    let alph = "abcdefghijklmnopqrstuvwxyz"
    let regex = /\s/g;

    let lowerC = str.toLowerCase().replace(regex, "")
   
    for(let i = 0; i < alph.length; i++) {
        if(lowerC.indexOf(alph[i]) === -1) {
            return false
        }
    }
   
    return true
}

// console.log(isPangram("The quick brown fox jumps over the lazy dog!"))
// console.log(isPangram("I like cats, but not mice"))

// runtime: O(n)
// space: O(n)

// 4) Longest Word

const findLongestWord = (arr) => {
    let theLongest = ''
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].length > theLongest.length) {
            theLongest = arr[i]
        }
    }
    return theLongest.length
}

console.log(findLongestWord(["hi", "hello", "Pneumonoultramicroscopicsilicovolcanoconiosis"]))

// runtime: O(n)
// space: O(n)