let sum = (a,b)=> {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(typeof a != "number" || typeof b != "number"){
                return reject("the param ought to have a number");
            }
            resolve(a + b);
        },1000);
    });
}

sum(7,10)
    .then((total)=>sum(total,20))
    .then((total1)=>{
        console.log(total1);
    })
    .catch((err)=> {
        console.log(err)
    });