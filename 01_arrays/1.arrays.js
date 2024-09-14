const strings= ['a', 'b', 'c', 'd'];
const numbers = [1,2,3,4,5];
// 4*4 = 16 bytes of storage
// Variable array is somewhere in memory and the computer knows it.
// When I do array[2], i'm telling the computer, hey go to the array and grab the 3rd item from where the array is stored.

//lookup O(1)

//push O(1)
strings.push('e'); 

//pop O(1)>> remove last item
strings.pop();

//unshift O(n) >> insert item in front of first array
// it reassign all indexs 
strings.unshift('x')

//splice O(n) >> insert item in the middle of array
// 가운데는 삭제할 갯수임
strings.splice(2, 0, 'alien');

console.log(strings)

// dynamic array >> 배열 복사해서 다른 공간에 연동, 자동으로 메모리를 할당

//insert , delete O(n)

