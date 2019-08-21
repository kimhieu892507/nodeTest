let sum = (a,b,callback)=>{
    setTimeout(()=>{
        let error, result;
        if(typeof a != "number" || typeof b != "number"){
            error = "gia tri truyen vao la number";
            return callback(error,null);
        }
        result = a+b;
        return callback(null,result);
    }, 1000);
}

sum(7,10,(error,total)=> {
    if(error){
        console.log(error);
    }
    sum(total,10,(error,total1)=>{
        if(error){
            console.log(error);
        }
        
        console.log(total1);
    });
})

