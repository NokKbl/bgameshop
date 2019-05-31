let x = 0;
var mylist = [];

$(document).ready(function () {
    pathtype = 'boardgame'
    idata = '/'
    url = "http://localhost:3000/" + pathtype + idata

    fetch(url)
        .then(response => response.json())
        .then(data => {
            var list = [];
            for (let index = 0; index < (data.boardgame).length; index++) {
                var i = (data.boardgame)[index];
                var bg = [i._id, i.name, i.price];
                list.push(bg);
            }
            mylist = list;
            $("#bgn1").click(function () {
                for (let index = 0; index < list.length; index++) {
                    if (x == 0) {
                        $("select").append('<option value="' + index + '">' + (list[index])[1] + '</option>');
                    }
                }
                x++;
            });
        })
});

function showBGprice1() {
    for (let index = 0; index < mylist.length; index++) {
        if (document.getElementById('bgn1').value == index){
            document.getElementById('showprice1').value = (mylist[index])[2];
        }
    }
    cal();
}

function showBGprice2() {
    for (let index = 0; index < mylist.length; index++) {
        if (document.getElementById('bgn2').value == index){
            document.getElementById('showprice2').value = (mylist[index])[2];
        }
    }
    cal();
}

function showBGprice3() {
    for (let index = 0; index < mylist.length; index++) {
        if (document.getElementById('bgn3').value == index){
            document.getElementById('showprice3').value = (mylist[index])[2];
        }
    }
    cal();
}

function showBGprice4() {
    for (let index = 0; index < mylist.length; index++) {
        if (document.getElementById('bgn4').value == index){
            document.getElementById('showprice4').value = (mylist[index])[2];
        }
    }
    cal();
}

function showBGprice5() {
    for (let index = 0; index < mylist.length; index++) {
        if (document.getElementById('bgn5').value == index){
            document.getElementById('showprice5').value = (mylist[index])[2];
        }
    }
    cal();
}

function cal() {
    document.getElementById('odbill').value =
        parseFloat(document.getElementById('showprice1').value)
        + parseFloat(document.getElementById('showprice2').value)
        + parseFloat(document.getElementById('showprice3').value)
        + parseFloat(document.getElementById('showprice4').value)
        + parseFloat(document.getElementById('showprice5').value);
}

function addorder() {
    var send = [];
    var customer = document.getElementById('odname').value
    if(customer != "") send.push(customer);

    var cashier = document.getElementById('odcash').value
    if(cashier != "") send.push(cashier);
    
    var gender;
    if($('#m').prop('checked')) gender = document.getElementById('m').value
    else if($('#fm').prop('checked')) gender = document.getElementById('fm').value
    send.push(gender);

    var age = document.getElementById('odage').value
    if(age != "") send.push(age);

    var year = document.getElementById('odyear').value
    if(year != "") send.push(year);

    var bill = document.getElementById('odbill').value
    if(bill != "") send.push(bill);

    var bg1, bg2, bg3, bg4, bg5;
    var v1 = document.getElementById('bgn1').value
    var v2 = document.getElementById('bgn2').value
    var v3 = document.getElementById('bgn3').value
    var v4 = document.getElementById('bgn4').value
    var v5 = document.getElementById('bgn5').value
    if(v1 != -1){
        bg1 = (mylist[v1])[0];
        send.push(bg1);
    }
    if(v2 != -1){
        bg2 = (mylist[v2])[0];
        send.push(bg2);
    }
    if(v3 != -1){
        bg3 = (mylist[v3])[0];
        send.push(bg3);
    }
    if(v4 != -1){
        bg4 = (mylist[v4])[0];
        send.push(bg4);
    }
    if(v5 != -1){
        bg5 = (mylist[v5])[0];
        send.push(bg5);
    }

    var data;
    if(send.length == 7){
        data = {
            "user_name": send[0],
            "cashier_name": send[1],
            "gender": send[2],
            "age": send[3],
            "year": send[4],
            "billtotal": send[5],
            "boardgame1": send[6]
        }
    }else if(send.length == 8){
        data = {
            "user_name": send[0],
            "cashier_name": send[1],
            "gender": send[2],
            "age": send[3],
            "year": send[4],
            "billtotal": send[5],
            "boardgame1": send[6],
            "boardgame2": send[7]
        }
    }else if(send.length == 9){
        data = {
            "user_name": send[0],
            "cashier_name": send[1],
            "gender": send[2],
            "age": send[3],
            "year": send[4],
            "billtotal": send[5],
            "boardgame1": send[6],
            "boardgame2": send[7],
            "boardgame3": send[8]
        }
    }else if(send.length == 10){
        data = {
            "user_name": send[0],
            "cashier_name": send[1],
            "gender": send[2],
            "age": send[3],
            "year": send[4],
            "billtotal": send[5],
            "boardgame1": send[6],
            "boardgame2": send[7],
            "boardgame3": send[8],
            "boardgame4": send[9]
        }
    }else if(send.length == 11){
        data = {
            "user_name": send[0],
            "cashier_name": send[1],
            "gender": send[2],
            "age": send[3],
            "year": send[4],
            "billtotal": send[5],
            "boardgame1": send[6],
            "boardgame2": send[7],
            "boardgame3": send[8],
            "boardgame4": send[9],
            "boardgame5": send[10]
        }
    }else{
        data = {
            "user_name": '',
            "cashier_name": '',
            "gender": '',
            "age": '',
            "year": '',
            "billtotal": '',
            "boardgame1": ''
        }
    }
    var pathtype = 'order/'
    var url = 'http://localhost:3000/' + pathtype

    $.ajax({
        type: "POST",
        url: url,
        data: data,
        dataType: "text",
        success: function (response) {
            console.log("success");
        }
    });
}