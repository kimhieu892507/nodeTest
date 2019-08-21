let sum = (a,b)=>{
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            if(typeof a != "number" || typeof b != "number"){
                return reject("parameter must be a number");
            }
            resolve(a + b);
        });
        
    })
}

let getTotal = async()=>{
    try{
        let total1 = await sum(7,10);
        let total2 = await sum(total1,10);
        console.log(total2);
    }
    catch(err){
        console.log(err);
    }
};

(async()=>{
    try{
        let total1 = await sum(7,10);
        let total2 = await sum(total1,10);
        console.log(total2);
    }
    catch(err){
        console.log(err);
    }
})();











