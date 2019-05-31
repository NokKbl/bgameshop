function addgame(){
    var send = [];

    var iname = document.getElementById('bgname').value
    if(iname != "") send.push(iname);

    var iprice = document.getElementById('bgprice').value
    if(iprice != "") send.push(iprice);

    var iurl = document.getElementById('bgurl').value
    if(iurl != "") send.push(iurl);
    
    var iid = document.getElementById('bgid').value
    if(iid != "") send.push(iid);
    
    var iimg = document.getElementById('bgimurl').value
    if(iimg != "") send.push(iimg);

    var iage = document.getElementById('bgage').value
    if(iage != "") send.push(iage);

    var icate;
    if ($('#cate1').prop('checked')) {
        icate = document.getElementById('cate1').value;
    } else if ($('#cate2').prop('checked')) {
        icate = document.getElementById('cate2').value;
    } else if ($('#cate3').prop('checked')) {
        icate = document.getElementById('cate3').value;
    } else if ($('#cate4').prop('checked')) {
        icate = document.getElementById('cate4').value;
    } else if ($('#cate5').prop('checked')) {
        icate = document.getElementById('cate5').value;
    } else if ($('#cate6').prop('checked')) {
        icate = document.getElementById('cate6').value;
    } else if ($('#cate7').prop('checked')) {
        icate = document.getElementById('cate7').value;
    } else if ($('#cate8').prop('checked')) {
        icate = document.getElementById('cate8').value;
    }
    send.push(icate);

    var idesigner = document.getElementById('bgdesigner').value
    if(idesigner != "") send.push(idesigner);

    var icom = document.getElementById('bgcomplex').value
    if(icom != "") send.push(icom);

    var iyr = document.getElementById('bgyear').value
    if(iyr != "") send.push(iyr);

    var imint = document.getElementById('bgmint').value
    if(imint != "") send.push(imint);

    var imaxt = document.getElementById('bgmaxt').value
    if(imaxt != "") send.push(imaxt);

    var iavgt = document.getElementById('bgavgt').value
    if(iavgt != "") send.push(iavgt);
    
    var iminp = document.getElementById('bgminp').value
    if(iminp != "") send.push(iminp);

    var imaxp = document.getElementById('bgmaxp').value
    if(imaxp != "") send.push(imaxp);

    var iavgr = document.getElementById('bgavg').value
    if(iavgr != "") send.push(iavgr);

    var data;
    if(send.length == 16){
        data = {
            "name": send[0],
            "price": send[1],
            "boardgame_url": send[2],
            "boardgame_id": send[3],
            "image_url": send[4],
            "age": send[5],
            "category": send[6],
            "designer": send[7],
            "complexity": send[8],
            "year": send[9],
            "min_time": send[10],
            "max_time": send[11],
            "avg_time": send[12],
            "min_player": send[13],
            "max_player": send[14],
            "avg_rating": send[15]
        }
    }else{
        data = {
            "name": '',
            "price": '',
            "boardgame_url": '',
            "boardgame_id": '',
            "image_url": '',
            "age": '',
            "category": '',
            "designer": '',
            "complexity": '',
            "year": '',
            "min_time": '',
            "max_time": '',
            "avg_time": '',
            "min_player": '',
            "max_player": '',
            "avg_rating": ''
        }
    }
    var pathtype = 'boardgame/'
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