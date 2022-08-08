export const conv_string = (data: string) => {
    var splitdata: string[] = data.split('');
    var output: string = '';
    for(var i=0; i<splitdata.length; i++){
        splitdata[i]=conv_character(splitdata[i])
        output=output+splitdata[i];
    }
    console.log(output);
}

export const conv_character = (ch: string) => {
    var result: string='';
    if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u' || ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U') {
        result = ch.toUpperCase();
        result = String.fromCharCode(result.charCodeAt(0) + 1)
    }
    else if (!isNaN(parseInt(ch))) {
        result=ch;
    }
    else {
        result = ch.toLowerCase();
        if (result=='z') {
            result = 'a';
        }
        else {
            result = String.fromCharCode(result.charCodeAt(0) + 1)
        }
    }
    return result;
}