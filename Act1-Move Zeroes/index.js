"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moveZeros = void 0;
//Put your array below
var array = [false, 1, 0, 1, 2, 0, 1, 3, "a"];
const moveZeros = (data) => {
    var len = data.length;
    for (var i = 0; i < len; i++) {
        var type = typeof (data[i]);
        if (type == "number" && data[i] == 0) {
            var element = data.splice(i, 1)[0];
            data.splice(len - 1, 0, element);
        }
    }
    return data;
};
exports.moveZeros = moveZeros;
// moveZeros(array);
console.log((0, exports.moveZeros)(array));
