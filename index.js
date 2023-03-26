


function keyCheck(key) {
    if (key == "n0" || key == "n1" || key == "n2" || key == "n3" || key == "n4" || key == "n5" || key == "n6" || key == "n7" ||
        key == "n8" || key == "n9") {
        let number = 0;
        switch (key) {

            case "n0":
                number = 0;
                break;

            case "n1":
                number = 1;
                break;

            case "n2":
                number = 2;
                break;
            case "n3":
                number = 3;
                break;
            case "n4":
                number = 4;
                break;
            case "n5":
                number = 5;
                break;
            case "n6":
                number = 6;
                break;
            case "n7":
                number = 7;
                break;
            case "n8":
                number = 8;
                break;
            case "n9":
                number = 9;
                break;
        }
        return number;
    }
    else if (key == "del") {
        return "del";
    }
    else if (key == "AC") {
        return "clear";
    }
    else {

        switch (key) {
            case 'mul':
                return "*";

            case "divide":
                return "/";
            case "sum":
                return "+";
            case "sub":
                return "-";
            case "per":
                return "%";
            case "equal":
                return "=";
            case "decimal":
                return ".";
            case "double-zero":
                return "00";

        }

    }



}

let num1 = "";


$("button").click(function (event) {

    let ans = keyCheck(this.id);

    if ((ans >= 0 && ans <= 9) || (ans == '+' || ans == "*" || ans == "-" || ans == "/" || ans == "%" || ans == '.' || ans == "00")) {
        num1 += ans;
        $("#sc1").html(num1);

        

    }
    else if (ans == "=") {
        $("#sc2").html(eval(num1));
    }
    else if (ans == "clear") {
        num1 = '';
        console.log(num1);
        $("#sc1").html(0);
        $("#sc2").html(0);
    }
    else if (ans == "del") {
        num1 = num1.slice(0, -1);
        $("#sc1").html(num1);
        $("#sc2").html(eval(num1));
    }




});