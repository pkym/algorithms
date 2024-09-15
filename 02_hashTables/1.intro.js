let user = {
    name: 'Kyle',
    age: 54,
    magic: true,
    scream: function() {
        console.log('aaaaaah!');
    }
}

console.log(user.name); // Lookup O(1) 
user.spell = 'abra kadabra'; // Insert O(1);
console.log(user);

//Collision 있을 때 O(n)이 발생
//how to deal with? ...chaning,    

//map >  삽입순서를 저장함
const a = new Map();

// set > key 만 있고 values는 없음
const b = new Set();
