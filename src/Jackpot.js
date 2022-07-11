/*
  Create a function that would detect if you hit the jackpot.
  
  The function will receive a four element array, and should return points depending on how many repetitions have you obtained. If the 4 elements are equal then you should print Jackpot.
  
  If  2 are equal then return 200,
  
  If 3 are equal then return 800;
  
  If all of them are equal return Jackpot!!;
  
  If none are equal return Try Again :(
  
  ex:
  
jackpot(["@", "@", "@", "@"]) ➞ "Jackpot!!"

jackpot(["aBc", "aBc", "aBc", "aBc"]) ➞ "Jackpot!!"


jackpot(["&&", "&&", "&&", "&"]) ➞ 800;

jackpot(["SS", "SS", "sS", "Ss"]) ➞ 200

*/

jackpot(["@", "@", "@", "@"])  

jackpot(["aBc", "aBc", "aBc", "aBc"])  


jackpot(["&&", "&", "&&", "&&"])  

jackpot(["SS", "SS", "sS", "Ss"])  


function jackpot(args){

const count = {};
let max = 0;
for (const element of args) {
    
  if (count[element]) {
    count[element] += 1;
  } else {
    count[element] = 1;
  }
  if (max<= count[element]){
      max = count[element];
  }
  
}
	switch(max){
	    
	    case 2:
	        console.log(200);
	        break;
	    case 3:
	         console.log(800);
	        break;
	    case 4:
	         console.log("Jackpot!!");
	       break;
	       
	    default:
	        console.log("Try Again :(");
	    break;
	}
}