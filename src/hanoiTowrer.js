towerHanoi(3);// ➞ 7

towerHanoi(5);// ➞ 31

towerHanoi(0);// ➞ 0

function towerHanoi(discs) {
	var M = 0;
 
    for (var i=1; i<=discs -1;i++){
        if (M>0){
             M = (2*M)+1;
        }else{
             M = (2*i)+1;
        }
      
    }
    
    console.log(M);
}