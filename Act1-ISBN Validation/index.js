"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.conv_ISBN = void 0;
const conv_ISBN = (data) => {
    var splitdata = data.split('');
    var output = 0;
    if (splitdata.length > 10) {
        console.log(false);
        return false;
    }
    if (splitdata[9] == 'X') {
        splitdata[9] = '10';
    }
    var valid;
    for (var i = 0; i < splitdata.length - 1; i++) {
        if (isNaN(parseInt(splitdata[i]))) {
            valid = false;
            console.log(valid);
            return false;
        }
    }
    for (var i = 0; i < splitdata.length; i++) {
        var x;
        x = parseInt(splitdata[i]) * (i + 1);
        output = output + x;
    }
    const result = output % 11 == 0 ? true : false;
    console.log(output);
    console.log(result);
};
exports.conv_ISBN = conv_ISBN;
