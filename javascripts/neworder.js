let x = 0;

function showBGprice1(){
    if(document.getElementById('bgn1').value == 0) document.getElementById('showprice1').value = 24;
    if(document.getElementById('bgn1').value == 1) document.getElementById('showprice1').value = 22;
    cal();
}

function showBGprice2(){
    if(document.getElementById('bgn2').value == 0) document.getElementById('showprice2').value = 24;
    if(document.getElementById('bgn2').value == 1) document.getElementById('showprice2').value = 22;
    cal();
}

function showBGprice3(){
    document.getElementById('showprice3').value = "price from api";
}

function showBGprice4(){
    document.getElementById('showprice4').value = "price from api";
}

function showBGprice5(){
    document.getElementById('showprice5').value = "price from api";
}

function cal(){
    document.getElementById('odbill').value = 
    parseFloat(document.getElementById('showprice1').value) 
    + parseFloat(document.getElementById('showprice2').value) 
    + parseFloat(document.getElementById('showprice3').value)
    + parseFloat(document.getElementById('showprice4').value)
    + parseFloat(document.getElementById('showprice5').value);
}

$(document).ready(function(){
    $("#bgn1").click(function () { 
        for (let index = 0; index < 2; index++) {
            if(x==0){
                $("select").append('<option value="' + index + '">'+ index+'</option>');
            }
        }
        x++;
    });
});