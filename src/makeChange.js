
//Penny	0.01
//Nickel	0.05
//Dime	0.10
//Quarter	0.25

makeChange(47);// { "q": 1, "d": 2, "n": 0, "p": 2 }

makeChange(24);// { "q": 0, "d": 2, "n": 0, "p": 4 }

makeChange(92);//  "q": 3, "d": 1, "n": 1, "p": 2 }


function makeChange(a){
    const p = (0.01) * 100;
    const n = (0.05) * 100;
    const d = (0.10) * 100;
    const q = (0.25) * 100;
    display = {"q": 0, "d": 0, "n": 0, "p": 0 };
 
       while (a > 0) {
  
                if ( a > q){
                    a = a - q;
                    display['q']++;
                 }else if (a > d){
                       a = a - d;
                     display['d']++;
                }else if (a > n){
                     a =  a - n;
                     display['n']++;
                }else if(a >= p){
                     a = a - p;
                     display['p']++;
                } 
               
            }
 
      console.log(display);
  
  
}