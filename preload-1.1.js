a = document.querySelectorAll('iframe,#logo,.nsi[style*=\"left: 8px; top: 4px\"]');for(var i=0; i<a.length; i++) a[i].remove();render_mode=2;high_quality=0;want_quality = 0;is_ios = false;for(var i=0; i<38; i++) document.querySelector('body').insertAdjacentHTML('beforeend', '<div style="background: url(https://raw.githubusercontent.com/namlgiang/slither/master/'+i+'.png)"></div>');document.querySelector('#login').insertAdjacentHTML('beforeend','<div style="position:fixed; z-index:100; width:100%; text-align:center; top: 50%; left: 50%; transform: translateX(-50%) translateY(100px);"><span style="width:87px;height:88px;display: inline-block;background: url(\'s/prev3.png\')" onclick="prevSkin()"></span><div id="skinchooser" style="width:200px;height:88px;display: inline-block;background: url(\'https://raw.githubusercontent.com/namlgiang/slither/master/0.png\');background-repeat:no-repeat;background-position:center;"></div><span style="width:87px;height:88px;display: inline-block;background: url(\'s/next3.png\')\" onclick="nextSkin();"></span></div>');var schedule;function scheduleSetSkin(skin) { clearInterval(schedule); schedule = setInterval(function() {if(snake != null) {setSkin(snake, skin);clearInterval(schedule);}}, 100);};selectedSkin = 0;function nextSkin() {selectedSkin = (selectedSkin + 1)%38;scheduleSetSkin(selectedSkin);document.querySelector("#skinchooser").style.backgroundImage = 'url("https://raw.githubusercontent.com/namlgiang/slither/master/' + selectedSkin + '.png")';}function prevSkin() {selectedSkin = (selectedSkin + 37)%38;scheduleSetSkin(selectedSkin);document.querySelector("#skinchooser").style.backgroundImage = 'url("https://raw.githubusercontent.com/namlgiang/slither/master/' + selectedSkin + '.png")';}document.querySelector('#smh').remove();resetGame = function() {if( login_iv == -2 && !connecting) window.location.href = "namle://interstitial"; login_iv = -1;ws && (ws.close(), ws = null );snake = null ;want_close_socket = !1;snakes = [];foods = [];foods_c = 0;preys = [];sectors = [];os = {};rank = 0;best_rank = 999999999;biggest_snake_count = snake_count = 0;lagging = wfpr = playing = connected = !1;for (j = vfc - 1; 0 <= j; j--)fvxs[j] = 0,fvys[j] = 0;fvy = fvx = fvtg = 0;lag_mult = 1;cptm = 0;gsc = sgsc;scheduleSetSkin(selectedSkin);}
