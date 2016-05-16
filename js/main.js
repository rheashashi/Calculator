var total="";
var val="";
var op = "";
var first=true;

var operate = function(oper){
    if (val=="" || oper == "")return;

    op = oper;
    if(total=="") {
        if (op == "+" || op == "-"){
            total = 0;
        } else {
           total=1
        }
    }

    if (op=="+"){
       total += parseInt(val);
    }
    if (op=="-"){
       total -= parseInt(val);
    }
    if (op=="*"){
       total *= parseInt(val);
    }

    val="";
    $(".answer").html("&nbsp;");

}

$(document).ready(function(){

    $(".number").click(function(){
        val += $(this).text();
        $(".answer").html(val);
    });

    $(".clear").click(function(){      
        $(".answer").html("&nbsp");
        total="";
        val="";

    });

    $(".operation").click(function(){
        operate($(this).text());
    });

    $(".result").click(function(){
        operate(op);
        $(".answer").html(total);
        total="";
        val="";
    });

});
