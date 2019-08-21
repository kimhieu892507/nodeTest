let getLoginRegister = (req,res) => {
    return res.render("auth/loginRegister");
};

let getLogut = (req,res) => {
    return res.getLogut
};
module.exports={
    getLoginRegister:getLoginRegister,
    getLogut:getLogut
};