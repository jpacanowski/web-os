$(function() {

	startTime();

	

	$('.tooltip').tooltipster({
       animation: 'fade',
       delay: 200,
       theme: 'tooltipster-light',
       touchDevices: false,
       trigger: 'hover'
    });

	$('.window h3').on('mousedown', function() {
		$( ".window" ).draggable({zIndex: 100});
	});

	$('.window h3').on('mouseup', function() {
		$( ".window" ).draggable('destroy');
	});

	$('#dock img').on('click', function() {

        if($(this).attr('id') == "TerminalIcon") {
            Terminal();
        }
        else
            API.MessageBox('aaa', 'aaa', 'aaa');
    });

});

$(document).ready(function(){
	$("body").on("click", ".window .close", function() {
		var winID = $(this).parent().attr("id");
		if(confirm("Are you sure you want to close "+winID+"?")){
			$("#"+winID).remove();
		}
	});
});

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function startTime() {
    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

    var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

    Date.prototype.getMonthName = function() {
        return months[ this.getMonth() ];
    };
    Date.prototype.getDayName = function() {
        return days[ this.getDay() ];
    };

    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    // add a zero in front of numbers<10
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML = today.getDayName() + ' ' + h + ":" + m;// + ":" + s;
    t = setTimeout(function () {
        startTime()
    }, 500);
}