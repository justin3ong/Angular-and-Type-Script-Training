//Put your array below
var array = [false, 1, 0, 1, 2, 0, 1, 3, "a"];



export const moveZeros = (data: (string | number | boolean)[]) => {
    var len: number = data.length
    for (var i = 0; i < len; i++) {
        var type: string = typeof (data[i]);
        if (type == "number" && data[i] == 0) {
            var element: number = data.splice(i, 1)[0];
            data.splice(len-1, 0, element);
        }
    }
    return data;
}
// moveZeros(array);
console.log(moveZeros(array));
