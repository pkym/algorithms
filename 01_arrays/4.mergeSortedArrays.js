function mergeSortedArrays(array1, array2){
    const mergedArray = [];
    let array1Item = array1[0];
    let array2Item = array2[0];
    let i = 1;
    let j = 1;
    
    //Check input > 배열이 비었을 때 나머지 배열 반환
    if(array1.length === 0) {
      return array2;
    }
    if(array2.length === 0) {
      return array1;
    }  

    // 조건 충족 하지 않기전까지 반복
    while (array1Item || array2Item){
     if(array2Item === undefined || array1Item < array2Item){
       mergedArray.push(array1Item);
       array1Item = array1[i];
       i++;
     }   
     else {
       mergedArray.push(array2Item);
       array2Item = array2[j];
       j++;
     }
    }
    return mergedArray;
  }
  
  console.log(mergeSortedArrays([0,3,4,31], [3,4,6,30]));
  console.log([0,3,4,31].concat([3,4,6,30]).sort((a,b)=>(a-b)));