function reverse(str){
  //0. 입력값 확인 
    if(!str || typeof str != 'string' || str.length < 2 ) return str;
    
    const backwards = [];
    const totalItems = str.length - 1;
    for(let i = totalItems; i >= 0; i--){
      backwards.push(str[i]);
    }
    console.log(backwards);
    return backwards.join('');
  }
  
  function reverse2(str){
    //check for valid input
    return str.split('').reverse().join('');
  }
  const reverse22 = str => str.split('').reverse().join('');
  // ES6  
  const reverse33 = str => [...str];
  console.log(reverse33('Timbits Hi'));

  const reverse3 = str => [...str].reverse().join('');
  
  reverse('Timbits Hi')
  reverse2('Timbits Hi')
  reverse3('Timbits Hi');