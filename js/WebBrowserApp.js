function WebBrowser() {
	  <div id='TerminalApp' class='window'>
        <div class='close'></div>
        <div class='minimize'></div>
        <div class='maximize'></div>
        <h3>Terminal</h3>
        <p>mattonit@webos~# sudo chmod -R 755 ~/Desktop/Projects/WebOS/_</p>
      </div>

      <div id='WebBrowserApp' class='window'>
        <div class='close'></div>
        <div class='minimize'></div>
        <div class='maximize'></div>
        <h3>Web Browser</h3>
        <div class="main">
          <div id="navbar">
            <div><img src="arrow-back-icon.png" alt="" /></div>
            <div><img src="arrow-next-icon.png" alt="" /></div>
            <div><img src="refresh-icon.png" alt="" /></div>
            <div><img src="home-icon.png" alt="" /></div>
            <input id="address-box" type="text" placeholder="http://jpacanowski.info/webos/hello" />
          </div>
          <div id="renderer">Hello, world</div>
        </div>
      </div>
}