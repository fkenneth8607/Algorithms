sumPrimes([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); //17

sumPrimes([2, 3, 4, 11, 20, 50, 71]); //87

sumPrimes([]);//0

function sumPrimes(a){
   let sum = 0;
   for (const element of a){
      var cont = 0;
      
       for (var i = 1; i<= element; i++){
            if (element > 1){
							 if (Number.isInteger(element / i )){
                 cont++ 
             };
						}
    
       }
       
 
       if (cont >0 && cont<=2) sum+=element;
   }
  
  return sum;
  
}