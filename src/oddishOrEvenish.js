oddishOrEvenish(43);// ➞ "Oddish"
// 4 + 3 = 7
// 7 % 2 = 1

oddishOrEvenish(373);// ➞ "Oddish"
// 3 + 7 + 3 = 13
// 13 % 2 = 1

oddishOrEvenish(4433);// ➞ "Evenish"
// 4 + 4 + 3 + 3 = 14
// 14 % 2 = 0

function oddishOrEvenish(num) {
    var suma = 0;
	for(const a of num.toString()){
	   suma +=parseInt(a);
	}
 
	if ((suma % 2) == 1){
	    console.log("Oddish");
	}else{
	     console.log("Evenish");
	}
}