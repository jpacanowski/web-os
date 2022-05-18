function Terminal() {

	var app =
			"<div id='TerminalApp' class='window'>"
		+	" <div class='close'></div>"
		+	" <div class='minimize'></div>"
		+	" <div class='maximize'></div>"
		+	" <h3>Terminal</h3>"
		+	" <p>mattonit@webos~# sudo chmod -R 755 ~/Desktop/Projects/WebOS/_</p>"
		+	"</div>";

	$( "#Apps" ).append(app);

	$('.window h3').on('mousedown', function() {
		$( ".window" ).draggable({zIndex: 100});
	});

	$('.window h3').on('mouseup', function() {
		$( ".window" ).draggable('destroy');
	});
}