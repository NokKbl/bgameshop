var games;

$(document).ready(function () {
    var game = [
        "../images/logo.png",
        'helloooo',
        'fjfnjvf',
        'fjvf'
    ]

    var game1 = [
        "../images/logo.png",
        '2',
        '2',
        '2'
    ]

    games = [game, game1, game, game1]

    for (let index = 0; index < games.length; index++) {
        var n = parseInt(index)+1;
        var x = (games[index]);
        var i = 0;
        var picurl = x[i];
        var name = x[i+1];
        var category = x[i+2];
        var price = x[i+3];
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
});

function filter() {
    games = [];
    // path/value //ตัวเดียวเป็น value เลย
    // path/{"category":"Thematic","price":"1","year":"2017","player":"1","time":"140"}
    //post --> value from input to filter
    // if()

    //get <-- result

    //loop 

    var norder = [
        "../images/logo.png",
        'helloooo',
        'fjfnjvf',
        'fjvf'
    ]

    games = [norder, norder]


    $('#tablebody').empty();
    $('#page').remove();

    for (let index = 0; index < games.length; index++) {
        var n = parseInt(index)+1;
        var x = (games[index]);
        var i = 0;
        var picurl = x[i];
        var name = x[i+1];
        var category = x[i+2];
        var price = x[i+3];
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
}