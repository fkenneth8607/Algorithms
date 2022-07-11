
getFirstValue([1, 2, 3]);

getFirstValue([80, 5, 100]);

getFirstValue([-500, 0, 50]);

getFirstValue([]);


function getFirstValue(args){
  if (args.length>1){
      console.log('['+ args + '] --> ' + args[0])
  }else{
       console.log('without Data :( ');
  }
  
}