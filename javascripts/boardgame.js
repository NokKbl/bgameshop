var idata;
var pathtype;
var url;

$(document).ready(function () {
    pathtype = 'boardgame'
    idata = '/'
    url = "http://localhost:3000/" + pathtype + idata

    fetch(url)
        .then(response => response.json())
        .then(data => {
            for (let index = 0; index < (data.boardgame).length; index++) {
                var n = parseInt(index) + 1;
                var x = (data.boardgame)[index];
                var picurl = x.image_url;
                var name = x.name;
                var category = x.category;
                var price = x.price;
                $('#tablebody').append('<tr><th scope="row">' + n + '</th><td><img src=' + picurl + ' width="230px" height="140px"></td><td>' + name + '</td><td>' + category + '</td><td>' + price + '</td></tr>');
            }

            $('table.paginated').each(function () {
                var currentPage = 0;
                var numPerPage = 1;
                var $table = $(this);
                $table.bind('repaginate', function () {
                    $table.find('tbody tr').hide().slice(currentPage * numPerPage, (currentPage + 1) * numPerPage).show();
                });
                $table.trigger('repaginate');
                var numRows = $table.find('tbody tr').length;
                var numPages = Math.ceil(numRows / numPerPage);
                var $pager = $('<div class="pager" id="page"></div>');
                for (var page = 0; page < numPages; page++) {
                    $('<span class="page-number"></span>').text(page + 1).bind('click', {
                        newPage: page
                    }, function (event) {
                        currentPage = event.data['newPage'];
                        $table.trigger('repaginate');
                        $(this).addClass('active').siblings().removeClass('active');
                    }).appendTo($pager).addClass('clickable');
                }
                $pager.insertBefore($table).find('span.page-number:first').addClass('active');
            });
        })
});

function filter() {
    games = [];
    $('#tablebody').empty();
    $('#page').remove();
    var icate = document.getElementById('cate0');
    pathtype = '';
    idata = '';

    if ($('#cate1').prop('checked')) {
        icate = document.getElementById('cate1');
    } else if ($('#cate2').prop('checked')) {
        icate = document.getElementById('cate2');
    } else if ($('#cate3').prop('checked')) {
        icate = document.getElementById('cate3');
    } else if ($('#cate4').prop('checked')) {
        icate = document.getElementById('cate4');
    } else if ($('#cate5').prop('checked')) {
        icate = document.getElementById('cate5');
    } else if ($('#cate6').prop('checked')) {
        icate = document.getElementById('cate6');
    } else if ($('#cate7').prop('checked')) {
        icate = document.getElementById('cate7');
    } else if ($('#cate8').prop('checked')) {
        icate = document.getElementById('cate8');
    } else {
        icate = document.getElementById('cate0');
    }

    var iprice = document.getElementById('price');
    var itime = document.getElementById('time');
    var iplayer = document.getElementById('player');
    var iyear = document.getElementById('year');

    var elements = [icate, iprice, itime, iplayer, iyear];
    var use = [];

    for (let index = 0; index < elements.length; index++) {
        if (elements[index].value != "") {
            use.push(elements[index]);
        }
    }

    var len = use.length
    if (len == 0) {
        pathtype = 'boardgame'
        idata = "/"
    } else if (len == 1) {
        //1
        if (use[0].id == 'price') {
            pathtype = 'boardgame/findByPrice/'
            idata = use[0].value
        } else if (use[0].id == 'time') {
            pathtype = 'boardgame/findByTime/'
            idata = use[0].value
        } else if (use[0].id == 'player') {
            pathtype = 'boardgame/findByPlayer/'
            idata = use[0].value
        } else if (use[0].id == 'year') {
            pathtype = 'boardgame/findByYear/'
            idata = use[0].value
        } else {//if(use[0].name == 'category'){
            pathtype = 'boardgame/findByCategory/'
            idata = use[0].value
        }
    } else if (len == 2) {
        //2
        var a = use[0].value
        var b = use[1].value
        if (use[0].name == 'category' && use[1].id == 'price') {
            pathtype = 'boardgametwo/findByCP/'
            idata = '{"category":"' + a + '","price":"' + b + '"}'
        } else if (use[0].name == 'category' && use[1].id == 'time') {
            pathtype = 'boardgametwo/findByCT/'
            idata = '{"category":"' + a + '","time":"' + b + '"}'
        } else if (use[0].name == 'category' && use[1].id == 'player') {
            pathtype = 'boardgametwo/findByPC/'
            idata = '{"category":"' + a + '","player":"' + b + '"}'
        } else if (use[0].name == 'category' && use[1].id == 'year') {
            pathtype = 'boardgametwo/findByCY/'
            idata = '{"category":"' + a + '","year":"' + b + '"}'
        } else if (use[0].id == 'price' && use[1].id == 'time') {
            pathtype = 'boardgametwo/findByPT/'
            idata = '{"price":"' + a + '","time":"' + b + '"}'
        } else if (use[0].id == 'price' && use[1].id == 'player') {
            pathtype = 'boardgametwo/findByPP/'
            idata = '{"price":"' + a + '","player":"' + b + '"}'
        } else if (use[0].id == 'price' && use[1].id == 'year') {
            pathtype = 'boardgametwo/findByPY/'
            idata = '{"price":"' + a + '","year":"' + b + '"}'
        } else if (use[0].id == 'time' && use[1].id == 'player') {
            pathtype = 'boardgametwo/findByTP/'
            idata = '{"time":"' + a + '","player":"' + b + '"}'
        } else if (use[0].id == 'time' && use[1].id == 'year') {
            pathtype = 'boardgametwo/findByTY/'
            idata = '{"time":"' + a + '","year":"' + b + '"}'
        } else { //if(use[0].id == 'player' && use[1].id == 'year'){
            pathtype = 'boardgametwo/findByYP/'
            idata = '{"player":"' + a + '","year":"' + b + '"}'
        }
    } else if (len == 3) {
        //3
        var a = use[0].value
        var b = use[1].value
        var c = use[2].value
    } else if (len == 4) {
        //4
        var a = use[0].value
        var b = use[1].value
        var c = use[2].value
        var d = use[3].value
    } else {
        //5
        pathtype = 'boardgame/findByAll/'
        icate = use[0].value
        iprice = use[1].value
        itime = use[2].value
        iplayer = use[3].value
        iyear = use[4].value
        idata = '{"category":"' + icate + '","price":"' + iprice + '","time":"' + itime + '","player":"' + iplayer + '","year":"' + iyear + '"}'
    }

    url = "http://localhost:3000/" + pathtype + idata

    console.log("filter " + url);
    fetch(url)
        .then(response => response.json())
        .then(data => {
            for (let index = 0; index < (data.boardgame).length; index++) {
                var n = parseInt(index) + 1;
                var x = (data.boardgame)[index];
                var picurl = x.image_url;
                var name = x.name;
                var category = x.category;
                var price = x.price;
                $('#tablebody').append('<tr><th scope="row">' + n + '</th><td><img src=' + picurl + ' width="230px" height="140px"></td><td>' + name + '</td><td>' + category + '</td><td>' + price + '</td></tr>');
            }

            $('table.paginated').each(function () {
                var currentPage = 0;
                var numPerPage = 1;
                var $table = $(this);
                $table.bind('repaginate', function () {
                    $table.find('tbody tr').hide().slice(currentPage * numPerPage, (currentPage + 1) * numPerPage).show();
                });
                $table.trigger('repaginate');
                var numRows = $table.find('tbody tr').length;
                var numPages = Math.ceil(numRows / numPerPage);
                var $pager = $('<div class="pager" id="page"></div>');
                for (var page = 0; page < numPages; page++) {
                    $('<span class="page-number"></span>').text(page + 1).bind('click', {
                        newPage: page
                    }, function (event) {
                        currentPage = event.data['newPage'];
                        $table.trigger('repaginate');
                        $(this).addClass('active').siblings().removeClass('active');
                    }).appendTo($pager).addClass('clickable');
                }
                $pager.insertBefore($table).find('span.page-number:first').addClass('active');
            });
        })
}