function sepyrot_encode(){
    document.getElementsByName("sepyrot_input_encoded")[0].value = algorithm(document.getElementsByName("sepyrot_input_clear")[0].value);
}

function sepyrot_decode(){
    document.getElementsByName("sepyrot_input_clear")[0].value = algorithm(document.getElementsByName("sepyrot_input_encoded")[0].value);
}

function algorithm(string){
    string = rot13(string);
    string = setSpaces(string);
    string = setDoubledChars(string);

    return string;
}

function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substr(0,index) + chr + str.substr(index+1);
}

function rot13(string){
    return string.replace(/[a-zA-Z]/g,function(c){return String.fromCharCode((c<="Z"?90:122)>=(c=c.charCodeAt(0)+13)?c:c-26);});
}

function setDoubledChars(string){
    for (var i = 0; i < string.length-1; i++) {
        if (string.charAt(i) == string.charAt(i+1)){
            string = setCharAt(string, i+1, "+");
            continue;
        }

        if (string.charAt(i+1) == "+"){
            string = setCharAt(string, i+1, string.charAt(i));
        }
    }
    return string;
}

function setSpaces(string){
    for (var i = 0; i < string.length; i++) {
        if (string.charAt(i) == " "){
            string = setCharAt(string, i, Math.floor((Math.random() * 9) + 1));
            continue;
        }

        if (isCharNumber(string.charAt(i))){
            string = setCharAt(string, i, " ");
        }
    }
    return string;
}

function isCharNumber(c){
    return c >= '0' && c <= '9';
}

