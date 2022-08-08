"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.conv_character = exports.conv_string = void 0;
const conv_string = (data) => {
    var splitdata = data.split('');
    var output = '';
    for (var i = 0; i < splitdata.length; i++) {
        splitdata[i] = (0, exports.conv_character)(splitdata[i]);
        output = output + splitdata[i];
    }
    console.log(output);
};
exports.conv_string = conv_string;
const conv_character = (ch) => {
    var result = '';
    if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u' || ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U') {
        result = ch.toUpperCase();
        result = String.fromCharCode(result.charCodeAt(0) + 1);
    }
    else if (!isNaN(parseInt(ch))) {
        result = ch;
    }
    else {
        result = ch.toLowerCase();
        if (result == 'z') {
            result = 'a';
        }
        else {
            result = String.fromCharCode(result.charCodeAt(0) + 1);
        }
    }
    return result;
};
exports.conv_character = conv_character;
