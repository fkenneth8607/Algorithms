countBoomerangs([9, 5, 9, 5, 1, 1, 1]);// ➞ 2

countBoomerangs([5, 6, 6, 7, 6, 3, 9]);// ➞ 1

countBoomerangs([4, 4, 4, 9, 9, 9, 9]);//➞ 0

countBoomerangs([1, 7, 1, 7, 1, 7, 1]);//➞ 05

function countBoomerangs (arr){
    
    var result = 0;
    var arr3 = [];
    var arrfinal = [];
    for (var i = 0; i< arr.length - 1; i++){
        var found = false; 
         arr3 = [];
        if ((arr[i + 2]!= undefined) && (arr[i + 1]!= undefined) ){ //third element
             if((arr[i + 2]==arr[i]) && (arr[i + 1]!=arr[i])){
                  found =true;
                 
             }else{
                  found =false;
             }
        }else{
            found = false;
        }
         
        if (found){
             arr3.push(arr[i]);
             arr3.push(arr[i+1]);
             arr3.push(arr[i+2]);
             arrfinal.push(arr3);
            result++;
        } 
 
    }
    
    console.log(result);
}