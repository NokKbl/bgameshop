var idata;
var pathtype;
var url;

$(document).ready(function () {
    pathtype = 'order'
    idata = '/'
    url = "http://localhost:3000/" + pathtype + idata

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            for (let index = 0; index < (data.order).length; index++) {
                var n = parseInt(index) + 1;
                var x = (data.order)[index];
                var custname = x.user_name;
                var cashname = x.cashier_name;
                var year = x.year;
                var bill = x.billtotal;
                $('#tablebody').append('<tr><th scope="row">' + n + '</th><td>' + custname + '</td><td>' + cashname + '</td><td>' + year + '</td><td>' + bill + '</td></tr>');
            }

            $('table.paginated').each(function () {
                var currentPage = 0;
                var numPerPage = 10;
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
    $('#tablebody').empty();
    $('#page').remove();
    pathtype = '';
    idata = '';

    var icashname = document.getElementById('cname').value;
    var iyear = document.getElementById('yr').value;

    if(icashname!="" && iyear!=""){
        pathtype = 'order/findByYC/'
        idata = '{"cashier":"' + icashname + '","year":"' + iyear + '"}'
    }else if(icashname!="" && iyear==""){
        pathtype = 'order/findByCashiername/'
        idata = icashname
    }else if(icashname=="" && iyear!=""){
        pathtype = 'order/findByYear/'
        idata = iyear
    }else{
        pathtype = 'order'
        idata = '/'
    }

    url = "http://localhost:3000/" + pathtype + idata

    fetch(url)
        .then(response => response.json())
        .then(data => {
            for (let index = 0; index < (data.order).length; index++) {
                var n = parseInt(index) + 1;
                var x = (data.order)[index];
                var custname = x.user_name;
                var cashname = x.cashier_name;
                var year = x.year;
                var bill = x.billtotal;
                $('#tablebody').append('<tr><th scope="row">' + n + '</th><td>' + custname + '</td><td>' + cashname + '</td><td>' + year + '</td><td>' + bill + '</td></tr>');
            }

            $('table.paginated').each(function () {
                var currentPage = 0;
                var numPerPage = 10;
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