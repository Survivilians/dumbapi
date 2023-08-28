console.log('heloworld')

var figlet = require('figlet');

figlet('KRNET VPN', function(error,output){
    if (error) {
        console.log('something went wrong')
        console.dir(error)
        return;
    }
    console.log(output);
});