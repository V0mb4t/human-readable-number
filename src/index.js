module.exports = function toReadable (number) {
    let ones = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
    'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
    'seventeen', 'eighteen', 'nineteen'];
let tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty',
    'ninety'];

let str = number.toString()

/* 1 - 19 */
if (number < 20) {
return ones[number - 1];
}


/* 20, 30, 40... */
else if (str[1] === '0' && number <= 99) {
return tens[str[0] - 2];
} 


/* 21 - 99 */
else if (str[1] != '0' && number <= 99) {
return tens[str[0] - 2] + ' ' + ones[str[1] - 1];
}


/* 110 - 119 */
else if (str[1] === '1' && number > 100) {
return ones[str[0] - 1] + ' hundred ' + ones[str[1] + str[2]  - 1]
} 


/* 121-199 */
else if (str[1] != '0' && str[2] != '0' && number > 100) {
return ones[str[0] - 1] + ' hundred ' + tens[str[1] - 2] + ' ' + ones[str[2] - 1]
} 

/* 120, 130, 140  */
else if (str[1] != '0' && str[2] === '0' && number > 100) {
return ones[str[0] - 1] + ' hundred ' + tens[str[1] - 2]
} 


/* 100, 200, 300... */
else if (str[1] && str[2] === '0') {
return ones[str[0] - 1] + ' hundred' 
}

/* 100 - 109 */
else if (str[1] === '0' && number > 100) {
return ones[str[0] - 1] + ' hundred ' + ones[str[2] - 1] 
} 

}
