var API = {

	MB_OK: 0x000001,
	MB_YESNO: 0x000002,

	MB_ICON_INFO: 0x000001,
	MB_ICON_ERROR: 0x000002,
	MB_ICON_WARNING: 0x000003,
	MB_ICON_CONFIRM: 0x000004,

	MessageBox: function( mTitle, mMsg, mType ) {

		var box =
			"<div id='messagebox' style='width: 360px; height: 190px;' class='window'>"
		+	"	<h3>System info</h3>"
		+	"	<div class='window__content'>"
		+	"		<img src='gfx/information.png' alt='' />"
		+	"		<p>The application is not available in this alpha version of Web OS. Please be patient and try another time.</p>"
		+	"		<div style='clear: both'></div><a href='#' style='position: absolute; right: 15px; bottom: 15px' class='btn'>I understand</a>"
		+	"	</div>"
		+	"</div>";

		$( "#Apps" ).append(box);

		// return values
		// (int) 1 - OK button was selected
		// (int) 2 - Yes button was selected
		// (int) 3 - No button was selected
	},

	CreateWindow: function( wTitle, wIcon, wOptions ) {},

	DestroyWindow: function( wID ) {},

	SetWindowTitle: function( wID ) {},

	CreateButton: function( wID, bCaption, bPosition ) {}

}
