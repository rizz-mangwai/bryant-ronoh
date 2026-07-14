const fs = require("fs");//node js system
/*
fs.appendfile(@param1,@param2)
@param1=>file name : <path>
@param2=>data to write to the file
@param3=>
*/
function testAppendFile(){
    const fileData = "\nHello world testing file\n";
    const cb = (error) => {
        if (error ){
            console.log("creating file failed");
            console.log(error);
        }
    };
    fs.appendFile("testfile.txt", fileData, cb)
}
testAppendFile()

///
///
function makeDate(){
    const now = new Date();
    const datestr = now.toISOString().split('T')[0]
    const filename = `${datestr}.txt`;
    
    const filepath = path.join(__dirname, filename);


}   