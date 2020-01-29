/**
 * Created in PhpStorm
 * @author Brian Kiehn
 * @date 1/19/2020
 * @version 1.0
 * array-object.js
 * https://github.com/medioxumate/JS4.git
 * GreenRiverDev
 */

document.open();

let input = [ -1, 5, "cat", false, 10.2, true, "dog" ];

let result = {
        strings : [],
        numbers : [],
        booleans : []
};

function printArray(array){
    let output = 'var input = [';
    for(let item in array){
        output += item +', ';
    }

    output.slice(0, output.length-2);
    output += '];<br>';

    return output;
}

function arrayToObject(array) {

    let strings = '';
    let numbers = '';
    let booleans = '';

    for(let i = 0; i < array.length; i++){
        if(typeof array[i] === "string"){
            strings += array[i]+', ';
        }
        else if(typeof array[i] === "number"){
            numbers += array[i]+', ';
        }
        else if(typeof array[i] === "boolean"){
            booleans += array[i]+', ';
        }
    }
    result.strings = strings.slice(0, (result.strings-2));
    result.numbers =  numbers.slice(0, (result.numbers-2));
    result.booleans = booleans.slice(0, (result.booleans-2));

    return result;
}

function printObject(object){
    let output = 'var result = {<br>';
    for(let item in object){
        output += item +' : ['+ object[item]+']<br>';
    }
    output += '};';
    return '<p>'+output+'</p>';
}

let output = arrayToObject(input);
document.write(printArray(input));
document.write(printObject(output));