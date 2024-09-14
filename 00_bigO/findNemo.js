//#1 -- For loop in Javascript.
const nemo = ['nemo'];

function findNemo1(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') {
      console.log('Found NEMO!');
    }
  }
}

const findNemo2 = array => {
  array.array.forEach(element => {
    if(element==='nemo'){
      console.log('Found NEMO!');

    }
  });
}

const fineNemo3 = array => {
  for(let fish of array){
    if(fish === 'nemo'){
      console.log('Found nemo')
    }
  }
}

findNemo1(nemo);