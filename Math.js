STRING = "";
TOTAL = 0;
PAREN = false;
RAD = false;

function Add(add){
    if(add == "(" && PAREN == false){
        PAREN = true;
    }else if(add == "(" && PAREN == true){
        add=")";
        PAREN = false;
    }
    STRING += add;
    document.getElementById("Answer").innerHTML = STRING;
}

function Eval(){
    answer = eval(STRING);
    STRING = answer;
    document.getElementById("Answer").innerHTML = answer;
}

function Clear(){
    STRING = ""
    document.getElementById("Answer").innerHTML = 0;
}

function Cos(){
    if(RAD){STRING = Math.cos(STRING * (Math.PI/180));
    }else{STRING = Math.cos(STRING);}
    document.getElementById("Answer").innerHTML = STRING;
}

function Sin(){
    if(RAD){STRING = Math.sin(STRING * (Math.PI/180));
    }else{STRING = Math.sin(STRING);}
    document.getElementById("Answer").innerHTML = STRING;
}

function Tan(){
    if(RAD){STRING = Math.tan(STRING * (Math.PI/180));
    }else{STRING = Math.tan(STRING);}
    document.getElementById("Answer").innerHTML = STRING;
}

function Root(){
    STRING = Math.sqrt(STRING);
    document.getElementById("Answer").innerHTML = STRING;
}

function Flip(){
    STRING = STRING * -1
    document.getElementById("Answer").innerHTML = STRING;
}

function RandomColor(){
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.round(Math.random() * 15)];
    }
    document.body.style.backgroundColor = color;
    document.addEventListener('keypress', function(event) {LogKey(event.key)});
}

function LogKey(e){
    if(e==0||e==1||e==2||e==3||e==4||e==5||e==6||e==7||e==8||e==9){
        STRING += e;
    } else if(e=="+"||e=="-"||e=="*"||e=="/"||e=="%"||e=="("||e==")"){
        STRING += e;
    }else if(e=="Enter"){Eval();
    }else if(e=="c"||e=="C"){Clear();
    }
    document.getElementById("Answer").innerHTML = STRING;
}

function Square(){
    amount = prompt("How much would you like to square:" );
    STRING = STRING ** amount;
    document.getElementById("Answer").innerHTML = STRING;
}

function Pie(){
    if(STRING == ""){STRING = Math.PI
    }else{STRING = Math.PI * (STRING);}
    document.getElementById("Answer").innerHTML = STRING;
}

function E(){
    if(STRING == ""){STRING = Math.E;
    }else{STRING = Math.E * (STRING);}
    document.getElementById("Answer").innerHTML = STRING;
}

function Rad(){
    RAD = !RAD;
    if(!RAD){
        document.getElementById("Rad").innerHTML = "Rad";
    }else{
        document.getElementById("Rad").innerHTML = "Deg";
    }
}

function Back(){
    STRING = STRING.slice(0, -1);
    if(STRING == ""){
        document.getElementById("Answer").innerHTML = 0;
    }else{
        document.getElementById("Answer").innerHTML = STRING;
    }
}

function Log(){
    STRING = Math.log10(STRING);
    document.getElementById("Answer").innerHTML = STRING;
}