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
            console.log(data);
            for (let index = 0; index < (data.boardgame).length; index++) {
                var n = parseInt(index) + 1;
                var x = (data.boardgame)[index];
                var bgid = x.boardgame_id;
                var name = x.name;
                var bgurl = x.boardgame_url;
                var picurl = x.image_url;
                var age = x.age;
                var category = x.category;
                var price = x.price;
                var designer = x.designer;
                var comp = x.complexity;
                var yr = x.year;
                var mint = x.min_time;
                var maxt = x.max_time;
                var avgt = x.avg_time;
                var minp = x.min_player;
                var maxp = x.max_player;
                var rate = x.avg_rating;
                $('#tablebody').append('<tr><th scope="row">' + n + '</th><td><img src=' + picurl + ' width="400px" height="auto" style="padding-top: 10px;"></td><td><div style="padding-left: 30px; padding-right: 30px; padding-bottom: 30px; padding-top: 10px;"><label><b>Board Game ID :</b> ' + bgid + '</label><br><label><b>Board Game Name :</b> ' + name + '</label><br><label><b>Game Category :</b> ' + category + '</label><br><label><b>Price :</b> $ ' + price + '</label><br><label><b>Average Rating :</b> ' + rate + '</label><br><label><b>Recommended Age :</b> ' + age + ' +</label><br><label><b>Game Complexity :</b> ' + comp + '</label><br><label><b>Minimum Play Time :</b> ' + mint + ' Minutes</label><br><label><b>Maximum Play Time :</b> ' + maxt + ' Minutes</label><br><label><b>Average Play Time :</b> ' + avgt + ' Minutes</label><br><label><b>Minimum Player :</b> ' + minp + ' Player(s)</label><br><label><b>Maximum Player :</b> ' + maxp + ' Player(s)</label><br><label><b>Designer Name(s) :</b> ' + designer + '</label><br><label><b>Publish Year :</b> ' + yr + '</label><br><hr><label><b> >> Ref. << </b></label><br><label><b>Board Game URL :</b> <a href="' + bgurl + '">' + bgurl + '</a></label><br><label><b>Image URL :</b> <a href="' + picurl + '">' + picurl + '</a></label><br></div></td></tr>');
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
    pathtype = '';
    idata = '';
    var icate = document.getElementById('cate0');

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
        } else { //if(use[0].name == 'category')
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
        } else { //if(use[0].id == 'player' && use[1].id == 'year')
            pathtype = 'boardgametwo/findByYP/'
            idata = '{"player":"' + a + '","year":"' + b + '"}'
        }
    } else if (len == 3) {
        //3
        var a = use[0].value
        var b = use[1].value
        var c = use[2].value

        if (use[0].name == 'category' && use[1].id == 'price' && use[2].id == 'time') {
            pathtype = 'boardgamethree/findByCPT/'
            idata = '{"category":"' + a + '","price":"' + b + '","time":"' + c + '"}'
        } else if (use[0].name == 'category' && use[1].id == 'price' && use[2].id == 'player') {
            pathtype = 'boardgamethree/findByCPP/'
            idata = '{"category":"' + a + '","price":"' + b + '","player":"' + c + '"}'
        } else if (use[0].name == 'category' && use[1].id == 'price' && use[2].id == 'year') {
            pathtype = 'boardgamethree/findByCPY/'
            idata = '{"category":"' + a + '","price":"' + b + '","year":"' + c + '"}'
        } else if (use[0].name == 'category' && use[1].id == 'time' && use[2].id == 'player') {
            pathtype = 'boardgamethree/findByCTP/'
            idata = '{"category":"' + a + '","time":"' + b + '","player":"' + c + '"}'
        } else if (use[0].name == 'category' && use[1].id == 'time' && use[2].id == 'year') {
            pathtype = 'boardgamethree/findByCYT/'
            idata = '{"category":"' + a + '","time":"' + b + '","year":"' + c + '"}'
        } else if (use[0].name == 'category' && use[1].id == 'player' && use[2].id == 'year') {
            pathtype = 'boardgamethree/findByCYP/'
            idata = '{"category":"' + a + '","player":"' + b + '","year":"' + c + '"}'
        } else if (use[0].id == 'price' && use[1].id == 'time' && use[2].id == 'player') {
            pathtype = 'boardgamethree/findByPTP/'
            idata = '{"price":"' + a + '","time":"' + b + '","player":"' + c + '"}'
        } else if (use[0].id == 'price' && use[1].id == 'player' && use[2].id == 'year') {
            pathtype = 'boardgamethree/findByPPY/'
            idata = '{"price":"' + a + '","player":"' + b + '","year":"' + c + '"}'
        } else if (use[0].id == 'time' && use[1].id == 'player' && use[2].id == 'year') {
            pathtype = 'boardgamethree/findByTRY/'
            idata = '{"time":"' + a + '","player":"' + b + '","year":"' + c + '"}'
        } else { //if (use[0].id == 'price' && use[1].id == 'time' && use[2].id == 'year')
            pathtype = 'boardgamethree/findByPYT/'
            idata = '{"price":"' + a + '","time":"' + b + '","year":"' + c + '"}'
        }
    } else if (len == 4) {
        //4
        var a = use[0].value
        var b = use[1].value
        var c = use[2].value
        var d = use[3].value

        if (use[0].name == 'category' && use[1].id == 'price' && use[2].id == 'time' && use[3].id == 'player') {
            pathtype = 'boardgamefour/findByCPTP/'
            idata = '{"category":"' + a + '","price":"' + b + '","time":"' + c + '","player":"' + d + '"}'
        } else if (use[0].name == 'category' && use[1].id == 'price' && use[2].id == 'time' && use[3].id == 'year') {
            pathtype = 'boardgamefour/findByCPTY/'
            idata = '{"category":"' + a + '","price":"' + b + '","time":"' + c + '","year":"' + d + '"}'
        } else if (use[0].id == 'price' && use[1].id == 'time' && use[2].id == 'player' && use[3].id == 'year') {
            pathtype = 'boardgamefour/findByYPTP/'
            idata = '{"price":"' + a + '","time":"' + b + '","player":"' + c + '","year":"' + d + '"}'
        } else if (use[0].name == 'category' && use[1].id == 'time' && use[2].id == 'player' && use[3].id == 'year') {
            pathtype = 'boardgamefour/findByYPTC/'
            idata = '{"category":"' + a + '","time":"' + b + '","player":"' + c + '","year":"' + d + '"}'
        } else { //if (use[0].name == 'category' && use[1].id == 'price' && use[2].id == 'player' && use[3].id == 'year')
            pathtype = 'boardgamefour/findByYPPC/'
            idata = '{"category":"' + a + '","price":"' + b + '","player":"' + c + '","year":"' + d + '"}'
        }
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

    fetch(url)
        .then(response => response.json())
        .then(data => {
            for (let index = 0; index < (data.boardgame).length; index++) {
                var n = parseInt(index) + 1;
                var x = (data.boardgame)[index];
                var bgid = x.boardgame_id;
                var name = x.name;
                var bgurl = x.boardgame_url;
                var picurl = x.image_url;
                var age = x.age;
                var category = x.category;
                var price = x.price;
                var designer = x.designer;
                var comp = x.complexity;
                var yr = x.year;
                var mint = x.min_time;
                var maxt = x.max_time;
                var avgt = x.avg_time;
                var minp = x.min_player;
                var maxp = x.max_player;
                var rate = x.avg_rating;
                $('#tablebody').append('<tr><th scope="row">' + n + '</th><td><img src=' + picurl + ' width="400px" height="auto" style="padding-top: 10px;"></td><td><div style="padding-left: 30px; padding-right: 30px; padding-bottom: 30px; padding-top: 10px;"><label><b>Board Game ID :</b> ' + bgid + '</label><br><label><b>Board Game Name :</b> ' + name + '</label><br><label><b>Game Category :</b> ' + category + '</label><br><label><b>Price :</b> $ ' + price + '</label><br><label><b>Average Rating :</b> ' + rate + '</label><br><label><b>Recommended Age :</b> ' + age + ' +</label><br><label><b>Game Complexity :</b> ' + comp + '</label><br><label><b>Minimum Play Time :</b> ' + mint + ' Minutes</label><br><label><b>Maximum Play Time :</b> ' + maxt + ' Minutes</label><br><label><b>Average Play Time :</b> ' + avgt + ' Minutes</label><br><label><b>Minimum Player :</b> ' + minp + ' Player(s)</label><br><label><b>Maximum Player :</b> ' + maxp + ' Player(s)</label><br><label><b>Designer Name(s) :</b> ' + designer + '</label><br><label><b>Publish Year :</b> ' + yr + '</label><br><hr><label><b> >> Ref. << </b></label><br><label><b>Board Game URL :</b> <a href="' + bgurl + '">' + bgurl + '</a></label><br><label><b>Image URL :</b> <a href="' + picurl + '">' + picurl + '</a></label><br></div></td></tr>');
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