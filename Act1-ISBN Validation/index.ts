
export const conv_ISBN = (data: string) => {
    var splitdata: string[] = data.split('');
    var output: number = 0;
    if(splitdata.length>10){
        console.log(false);
        return false;
    }
    if(splitdata[9]=='X'){
        splitdata[9]='10';
    }
    var valid: boolean;
    for(var i = 0; i<splitdata.length-1; i++){
        if(isNaN(parseInt(splitdata[i]))){
            valid=false;
            console.log(valid);
            return false;
        }
    }
    for (var i = 0; i<splitdata.length; i++) {
        var x: number;
        x = parseInt(splitdata[i]) * (i+1);
        output = output + x;
    }
    const result = output % 11 == 0 ? true : false;
    console.log(output);
    console.log(result)
} 
