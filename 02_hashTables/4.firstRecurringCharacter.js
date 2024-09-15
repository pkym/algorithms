//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

//O(n^2)
//O(1) .. space complexity
function firstRecurringCharacter(input) {
    for (let i = 0; i < input.length; i++) {
      for (let j = i + 1; j < input.length; j++) {
        if(input[i] === input[j]) {
          return input[i]; //1
        }
      }
    }
    return undefined
  }
  
  //O(n)
  function firstRecurringCharacter2(input) {
    let map = {};
    for (let i = 0; i < input.length; i++) {
      if (map[input[i]] !== undefined) {
        return input[i] //5
      } else {
        map[input[i]] = i;
      }
    }
    return undefined
  }
  
  console.log(firstRecurringCharacter2([1,5,5,1,3,4,6]));
  
  
  //Bonus... What if we had this:
  // [2,5,5,2,3,5,1,2,4]
  // return 5 because the pairs are before 2,2