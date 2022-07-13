let log = {
    info : function(infoMsg){
        console.log(`Info : ${infoMsg}`);
    } ,
    warning : function(warningMsg){
        console.log(`Warning : ${warningMsg}`);
    }  , 
    error : function(errorMsg){
        console.log(`Error : ${errorMsg}`)
    }
}
module.exports = log;