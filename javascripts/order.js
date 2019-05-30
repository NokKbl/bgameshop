var orders;

$(document).ready(function () {
    var order = [
        'name1',
        'cashname1',
        'yr1',
        'total1'
    ]
    
    var order1 = [
        'name2',
        'cashname2',
        'yr2',
        'total2'
    ]
    
    orders = [order, order1]

    for (let index = 0; index < orders.length; index++) {
        let n = parseInt(index)+1;
        var x = (orders[index]);
        var i = 0;
        var custname = x[i];
        var cashname = x[i+1];
        var year = x[i+2];
        var bill = x[i+3];
        $('#tablebody').append('<tr><th scope="row">'+ n +'</th><td>'+ custname +'</td><td>'+ cashname +'</td><td>'+ year + '</td><td>'+ bill + '</td></tr>');
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
    orders = [];
    // path/value //ตัวเดียวเป็น value เลย
    // path/{"category":"Thematic","price":"1","year":"2017","player":"1","time":"140"}
    //post --> value from input to filter
    // if()

    //get <-- result

    //loop 

    var norder = [
        'name',
        'cashname',
        'yr',
        'total'
    ]

    orders = [norder]


    $('#tablebody').empty();
    $('#page').remove();
    
    for (let index = 0; index < orders.length; index++) {
        let n = parseInt(index)+1;
        var x = (orders[index]);
        var i = 0;
        var custname = x[i];
        var cashname = x[i+1];
        var year = x[i+2];
        var bill = x[i+3];
        $('#tablebody').append('<tr><th scope="row">'+ n +'</th><td>'+ custname +'</td><td>'+ cashname +'</td><td>'+ year + '</td><td>'+ bill + '</td></tr>');
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