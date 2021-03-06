'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the timeConversion function below.
 */
function timeConversion(s) {
    
  if ( s.includes("AM") ){
    if (s.substring(0,2)==="12" && s.includes("AM") ){
        return "00"+s.substring(2,8)
    }
    
    return s.substring(0,8)
    }

    else if(s.substring(0,2)==="12" && s.includes("PM")){
           return "12"+s.substring(2,8)
        }

    else{
            
            let firstTwo =  s.substring(0,2);
         let NumFirstTwo= Number(firstTwo) + 12;
           return `${NumFirstTwo}${s.substring(2,8)}`
        }
    }  



function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = timeConversion(s);

    ws.write(result + "\n");

    ws.end();
}
