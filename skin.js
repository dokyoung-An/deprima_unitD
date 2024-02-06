// Garden Gnome Software - Skin
// Pano2VR 7.0.8/20017
// Filename: ???? ??D.ggsk
// Generated 2024-02-06T15:40:11

function pano2vrSkin(player,base) {
	player.addVariable('vis_roomchoice', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_short', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_button_1', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_button_2', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_button_3', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_button_4', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_icon5', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_skin_show', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_long', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_mobilemap', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_foot', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_foot2', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_footprint', 2, false, { ignoreInState: 0 , customProperty: { variableType: 2, propertyType: 1, defaultValue: false } });
	player.addVariable('vis_footprint_no', 2, false, { ignoreInState: 0 , customProperty: { variableType: 2, propertyType: 0, defaultValue: false } });
	player.addVariable('vis_direction', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_tag', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_buttonClick_5', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_buttonClick', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_dropdown', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_sound', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_mapangle', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_floor', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_onefloor', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_secondfloor', 2, false, { ignoreInState: 0  });
	var me=this;
	var skin=this;
	var flag=false;
	var nodeMarker=[];
	var activeNodeMarker=[];
	var hotspotTemplates={};
	var skinKeyPressed = 0;
	this.player=player;
	player.setApiVersion(7);
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	var cssPrefix="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown={};
	this.elementMouseOver={};
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	for(var i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; });
	
	var parameterToTransform=function(p) {
		return p.def + 'translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this._=function(text, params) {
		return player._(text, params);
	}
	
	this.languageChanged=function() {
		var stack=[];
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdateText) {
				e.ggUpdateText();
			}
			if (e.ggUpdateAria) {
				e.ggUpdateAria();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('sizechanged', function () { me.updateSize(me.divSkin);});
	player.addListener('languagechanged', this.languageChanged);
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me.__99=document.createElement('div');
		el.ggId="\uacf5\uac04\uc120\ud0dd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : -100%;';
		hs+='height : 50px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__99.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__99.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_roomchoice') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__99.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__99.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__99.style.transition='right 500ms ease 0ms, bottom 500ms ease 0ms';
				if (me.__99.ggCurrentLogicStatePosition == 0) {
					me.__99.style.right='0px';
					me.__99.style.bottom='0%';
				}
				else {
					me.__99.style.right='0px';
					me.__99.style.bottom='-100%';
				}
			}
		}
		me.__99.logicBlock_position();
		me.__99.ggUpdatePosition=function (useTransition) {
		}
		el=me.__105=document.createElement('div');
		el.ggId="\uacf5\uac04\uc120\ud0dd\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.470588);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -55%;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__105.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__105.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__105.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__105.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__105.style.transition='left 0s, top 0s';
				if (me.__105.ggCurrentLogicStatePosition == 0) {
					me.__105.style.left='0px';
					me.__105.style.top='-52%';
				}
				else {
					me.__105.style.left='0px';
					me.__105.style.top='-55%';
				}
			}
		}
		me.__105.logicBlock_position();
		me.__105.ggUpdatePosition=function (useTransition) {
		}
		me.__99.appendChild(me.__105);
		el=me._scrollarea_1=document.createElement('div');
		els=me._scrollarea_1__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggContentWidth = 0;
		el.ggContentHeight = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		el.ggIsDragging = false;
		hs ='';
		hs+='height : 199px;';
		hs+='left : 0px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 383px;';
		hs+="";
		els.setAttribute('style',hs);
		me._scrollarea_1.ggScrollByX = function(diffX) {
			if(!me._scrollarea_1.ggHorScrollVisible || diffX == 0 || me._scrollarea_1.ggHPercentVisible >= 1.0) return;
			me._scrollarea_1.ggScrollPosX = (me._scrollarea_1__horScrollFg.offsetLeft + diffX);
			me._scrollarea_1.ggScrollPosX = Math.max(me._scrollarea_1.ggScrollPosX, 0);
			me._scrollarea_1.ggScrollPosX = Math.min(me._scrollarea_1.ggScrollPosX, me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth);
			me._scrollarea_1__horScrollFg.style.left = me._scrollarea_1.ggScrollPosX + 'px';
			let percentScrolled = me._scrollarea_1.ggScrollPosX / (me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth);
			me._scrollarea_1__content.style.left = -(Math.round((me._scrollarea_1.ggContentWidth * (1.0 - me._scrollarea_1.ggHPercentVisible)) * percentScrolled)) + me._scrollarea_1.ggContentLeftOffset + 'px';
			me._scrollarea_1.ggScrollPosXPercent = (me._scrollarea_1__horScrollFg.offsetLeft / me._scrollarea_1__horScrollBg.offsetWidth);
		}
		me._scrollarea_1.ggScrollByXSmooth = function(diffX) {
			if(!me._scrollarea_1.ggHorScrollVisible || diffX == 0 || me._scrollarea_1.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._scrollarea_1.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._scrollarea_1.ggScrollPosX >= me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth)) {
					me._scrollarea_1.ggScrollPosX = Math.min(me._scrollarea_1.ggScrollPosX, me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._scrollarea_1.ggScrollPosX <= 0)) {
					me._scrollarea_1.ggScrollPosX = Math.max(me._scrollarea_1.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._scrollarea_1__horScrollFg.style.left = me._scrollarea_1.ggScrollPosX + 'px';
			let percentScrolled = me._scrollarea_1.ggScrollPosX / (me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth);
			me._scrollarea_1__content.style.left = -(Math.round((me._scrollarea_1.ggContentWidth * (1.0 - me._scrollarea_1.ggHPercentVisible)) * percentScrolled)) + me._scrollarea_1.ggContentLeftOffset + 'px';
			me._scrollarea_1.ggScrollPosXPercent = (me._scrollarea_1__horScrollFg.offsetLeft / me._scrollarea_1__horScrollBg.offsetWidth);
			}, 10);
		}
		me._scrollarea_1.ggScrollByY = function(diffY) {
			if(!me._scrollarea_1.ggVertScrollVisible || diffY == 0 || me._scrollarea_1.ggVPercentVisible >= 1.0) return;
			me._scrollarea_1.ggScrollPosY = (me._scrollarea_1__vertScrollFg.offsetTop + diffY);
			me._scrollarea_1.ggScrollPosY = Math.max(me._scrollarea_1.ggScrollPosY, 0);
			me._scrollarea_1.ggScrollPosY = Math.min(me._scrollarea_1.ggScrollPosY, me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight);
			me._scrollarea_1__vertScrollFg.style.top = me._scrollarea_1.ggScrollPosY + 'px';
			let percentScrolled = me._scrollarea_1.ggScrollPosY / (me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight);
			me._scrollarea_1__content.style.top = -(Math.round((me._scrollarea_1.ggContentHeight * (1.0 - me._scrollarea_1.ggVPercentVisible)) * percentScrolled)) + me._scrollarea_1.ggContentTopOffset + 'px';
			me._scrollarea_1.ggScrollPosYPercent = (me._scrollarea_1__vertScrollFg.offsetTop / me._scrollarea_1__vertScrollBg.offsetHeight);
		}
		me._scrollarea_1.ggScrollByYSmooth = function(diffY) {
			if(!me._scrollarea_1.ggVertScrollVisible || diffY == 0 || me._scrollarea_1.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._scrollarea_1.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._scrollarea_1.ggScrollPosY >= me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight)) {
					me._scrollarea_1.ggScrollPosY = Math.min(me._scrollarea_1.ggScrollPosY, me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._scrollarea_1.ggScrollPosY <= 0)) {
					me._scrollarea_1.ggScrollPosY = Math.max(me._scrollarea_1.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._scrollarea_1__vertScrollFg.style.top = me._scrollarea_1.ggScrollPosY + 'px';
			let percentScrolled = me._scrollarea_1.ggScrollPosY / (me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight);
			me._scrollarea_1__content.style.top = -(Math.round((me._scrollarea_1.ggContentHeight * (1.0 - me._scrollarea_1.ggVPercentVisible)) * percentScrolled)) + me._scrollarea_1.ggContentTopOffset + 'px';
			me._scrollarea_1.ggScrollPosYPercent = (me._scrollarea_1__vertScrollFg.offsetTop / me._scrollarea_1__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._scrollarea_1.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._scrollarea_1.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._scrollarea_1.ggHPercentVisible);
					me._scrollarea_1.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._scrollarea_1.clientWidth - (me._scrollarea_1.ggVertScrollVisible ? 0 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._scrollarea_1.clientWidth - (me._scrollarea_1.ggVertScrollVisible ? 0 : 0))) * me._scrollarea_1.ggHPercentVisible);
					me._scrollarea_1.ggScrollByXSmooth(diffX);
				}
			}
			if (me._scrollarea_1.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._scrollarea_1.ggVPercentVisible);
					me._scrollarea_1.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._scrollarea_1.clientHeight - (me._scrollarea_1.ggHorScrollVisible ? 0 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._scrollarea_1.clientHeight - (me._scrollarea_1.ggHorScrollVisible ? 0 : 0))) * me._scrollarea_1.ggVPercentVisible);
					me._scrollarea_1.ggScrollByYSmooth(diffY);
				}
			}
		}
		me._scrollarea_1__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me._scrollarea_1.ggDragInertiaX *= 0.65;
				me._scrollarea_1.ggDragInertiaY *= 0.65;
				me._scrollarea_1.ggScrollByX(me._scrollarea_1.ggDragInertiaX);
				me._scrollarea_1.ggScrollByY(me._scrollarea_1.ggDragInertiaY);
				if (Math.abs(me._scrollarea_1.ggDragInertiaX) < 1.0 && Math.abs(me._scrollarea_1.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 50);
			me._scrollarea_1__content.onmouseup = null;
			me._scrollarea_1__content.onmousemove = null;
			me._scrollarea_1__content.ontouchend = null;
			me._scrollarea_1__content.ontouchmove = null;
			me._scrollarea_1__content.onpointerup = null;
			me._scrollarea_1__content.onpointermove = null;
			setTimeout(function() { me._scrollarea_1.ggIsDragging = false; }, 100);
		}
		me._scrollarea_1__content.mousetouchmove = e => {
			e = e || window.event;
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me._scrollarea_1.ggDragStartX) > 10 || Math.abs(eventY - me._scrollarea_1.ggDragStartY) > 10) me._scrollarea_1.ggIsDragging = true;
			var diffX = (eventX - me._scrollarea_1.ggDragLastX) * me._scrollarea_1.ggHPercentVisible;
			var diffY = (eventY - me._scrollarea_1.ggDragLastY) * me._scrollarea_1.ggVPercentVisible;
			me._scrollarea_1.ggDragInertiaX = -diffX;
			me._scrollarea_1.ggDragInertiaY = -diffY;
			me._scrollarea_1.ggDragLastX = eventX;
			me._scrollarea_1.ggDragLastY = eventY;
			me._scrollarea_1.ggScrollByX(-diffX);
			me._scrollarea_1.ggScrollByY(-diffY);
		}
		me._scrollarea_1__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me._scrollarea_1.ggDragLastX = me._scrollarea_1.ggDragStartX = t ? t[0].clientX : e.clientX;
			me._scrollarea_1.ggDragLastY = me._scrollarea_1.ggDragStartY = t ? t[0].clientY : e.clientY;
			me._scrollarea_1__content.onmouseup = me._scrollarea_1__content.mousetouchend;
			me._scrollarea_1__content.ontouchend = me._scrollarea_1__content.mousetouchend;
			me._scrollarea_1__content.onmousemove = me._scrollarea_1__content.mousetouchmove;
			me._scrollarea_1__content.ontouchmove = me._scrollarea_1__content.mousetouchmove;
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._scrollarea_1__content.onpointerup = me._scrollarea_1__content.ontouchend;
				me._scrollarea_1__content.onpointermove = me._scrollarea_1__content.ontouchmove;
			}
		}
		els.onmousedown = me._scrollarea_1__content.mousetouchstart;
		els.ontouchstart = me._scrollarea_1__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me._scrollarea_1__content.mousetouchstart;
		}
		elHorScrollBg = me._scrollarea_1__horScrollBg = document.createElement('div');
		el.appendChild(elHorScrollBg);
		elHorScrollBg.setAttribute('style', 'position: absolute; left: 0px; bottom: 0px; visibility: hidden; width: 384px; height: 0px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elHorScrollBg.className='ggskin ggskin_scrollarea_hscrollbg';
		elHorScrollFg = me._scrollarea_1__horScrollFg = document.createElement('div');
		elHorScrollBg.appendChild(elHorScrollFg);
		elHorScrollFg.className='ggskin ggskin_scrollarea_hscrollfg';
		elHorScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 384px; height: 0px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		me._scrollarea_1.ggScrollPosX = 0;
		me._scrollarea_1.ggScrollPosXPercent = 0.0;
		elHorScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._scrollarea_1.ggDragLastX = e.clientX;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._scrollarea_1.ggDragInertiaX *= 0.65;
					me._scrollarea_1.ggScrollByX(me._scrollarea_1.ggDragInertiaX);
					if (Math.abs(me._scrollarea_1.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffX = e.clientX - me._scrollarea_1.ggDragLastX;
				me._scrollarea_1.ggDragInertiaX = diffX;
				me._scrollarea_1.ggDragLastX = e.clientX;
				me._scrollarea_1.ggScrollByX(diffX);
			}
		}
		elHorScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._scrollarea_1.ggDragLastX = t ? t[0].clientX : e.clientX;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._scrollarea_1.ggDragInertiaX *= 0.65;
					me._scrollarea_1.ggScrollByX(me._scrollarea_1.ggDragInertiaX);
					if (Math.abs(me._scrollarea_1.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = (t ? t[0].clientX : e.clientX) - me._scrollarea_1.ggDragLastX;
				me._scrollarea_1.ggDragInertiaX = diffX;
				me._scrollarea_1.ggDragLastX = t ? t[0].clientX : e.clientX;
				me._scrollarea_1.ggScrollByX(diffX);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elHorScrollFg.onpointerdown = elHorScrollFg.ontouchstart;
		}
		elHorScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffX = me._scrollarea_1.ggScrollWidth;
			if (e.offsetX < me._scrollarea_1.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._scrollarea_1.ggScrollByXSmooth(diffX);
		}
		elHorScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._scrollarea_1__horScrollBg.getBoundingClientRect();
			var diffX = me._scrollarea_1.ggScrollWidth;
			if ((t[0].clientX - rect.left) < me._scrollarea_1.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._scrollarea_1.ggScrollByXSmooth(diffX);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaX);
			me._scrollarea_1.ggScrollByXSmooth(30 * me._scrollarea_1.ggHPercentVisible * wheelDelta);
		});
		elCornerBg = me._scrollarea_1__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 0px; height: 0px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="Scrollarea 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : 200px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='right : 5%;';
		hs+='top : -260%;';
		hs+='visibility : inherit;';
		hs+='width : 60%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._scrollarea_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._scrollarea_1.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._scrollarea_1.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._scrollarea_1.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._scrollarea_1.style.transition='right 0s, top 0s, width 0s, height 0s';
				if (me._scrollarea_1.ggCurrentLogicStatePosition == 0) {
					me._scrollarea_1.style.right='0%';
					me._scrollarea_1.style.top='-203%';
				}
				else {
					me._scrollarea_1.style.right='5%';
					me._scrollarea_1.style.top='-260%';
				}
			}
		}
		me._scrollarea_1.logicBlock_position();
		me._scrollarea_1.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 670))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._scrollarea_1.ggCurrentLogicStateSize != newLogicStateSize) {
				me._scrollarea_1.ggCurrentLogicStateSize = newLogicStateSize;
				me._scrollarea_1.style.transition='right 0s, top 0s, width 0s, height 0s';
				if (me._scrollarea_1.ggCurrentLogicStateSize == 0) {
					me._scrollarea_1.style.width='95%';
					me._scrollarea_1.style.height='200px';
					skin.updateSize(me._scrollarea_1);
				}
				else {
					me._scrollarea_1.style.width='60%';
					me._scrollarea_1.style.height='200px';
					skin.updateSize(me._scrollarea_1);
				}
			}
		}
		me._scrollarea_1.logicBlock_size();
		me._scrollarea_1.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var contentWidth = maxX - minX;
				this.ggContent.style.width = contentWidth + 'px';
				var contentHeight = maxY - minY;
				this.ggContent.style.height = contentHeight + 'px';
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				this.ggContent.style.left = -(Math.round(me._scrollarea_1.ggScrollPosX / me._scrollarea_1.ggHPercentVisible)) + this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				me._scrollarea_1__horScrollBg.style.visibility = 'inherit';
				me._scrollarea_1__horScrollFg.style.visibility = 'inherit';
				me._scrollarea_1.ggHorScrollVisible = true;
				if(me._scrollarea_1.ggHorScrollVisible) {
					me._scrollarea_1.ggAvailableHeight = me._scrollarea_1.clientHeight - 0;
					if (me._scrollarea_1.ggVertScrollVisible) {
						me._scrollarea_1.ggAvailableWidth = me._scrollarea_1.clientWidth - 0;
						me._scrollarea_1.ggAvailableWidthWithScale = me._scrollarea_1.getBoundingClientRect().width - me._scrollarea_1__horScrollBg.getBoundingClientRect().height;
					} else {
						me._scrollarea_1.ggAvailableWidth = me._scrollarea_1.clientWidth;
						me._scrollarea_1.ggAvailableWidthWithScale = me._scrollarea_1.getBoundingClientRect().width;
					}
					me._scrollarea_1__horScrollBg.style.width = me._scrollarea_1.ggAvailableWidth + 'px';
					me._scrollarea_1.ggHPercentVisible = contentWidth != 0 ? me._scrollarea_1.ggAvailableWidthWithScale / contentWidth : 0.0;
					if (me._scrollarea_1.ggHPercentVisible > 1.0) me._scrollarea_1.ggHPercentVisible = 1.0;
					me._scrollarea_1.ggScrollWidth = Math.round(me._scrollarea_1__horScrollBg.offsetWidth * me._scrollarea_1.ggHPercentVisible);
					me._scrollarea_1__horScrollFg.style.width = me._scrollarea_1.ggScrollWidth + 'px';
					me._scrollarea_1.ggScrollPosX = me._scrollarea_1.ggScrollPosXPercent * me._scrollarea_1.ggAvailableWidth;
					me._scrollarea_1.ggScrollPosX = Math.min(me._scrollarea_1.ggScrollPosX, me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth);
					me._scrollarea_1__horScrollFg.style.left = me._scrollarea_1.ggScrollPosX + 'px';
					if (me._scrollarea_1.ggHPercentVisible < 1.0) {
						let percentScrolled = me._scrollarea_1.ggScrollPosX / (me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth);
						me._scrollarea_1__content.style.left = -(Math.round((me._scrollarea_1.ggContentWidth * (1.0 - me._scrollarea_1.ggHPercentVisible)) * percentScrolled)) + this.ggContentLeftOffset + 'px';
					}
				} else {
					me._scrollarea_1.ggAvailableHeight = me._scrollarea_1.clientHeight;
					me._scrollarea_1.ggScrollPosX = 0;
					me._scrollarea_1.ggScrollPosXPercent = 0.0;
					me._scrollarea_1__content.style.left = this.ggContentLeftOffset + 'px';
				}
				if(horScrollWasVisible != me._scrollarea_1.ggHorScrollVisible || vertScrollWasVisible != me._scrollarea_1.ggVertScrollVisible) {
					skin.updateSize(me._scrollarea_1);
					me._scrollarea_1.ggUpdatePosition();
				}
			}
		}
		el=me.__100=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__100;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="\uacf5\uac04\uc120\ud0dd \uc774\ubbf8\uc9c0";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 200px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__100.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__100.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("38A") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__100.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__100.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__100.style.transition='';
				if (me.__100.ggCurrentLogicStateVisible == 0) {
					me.__100.style.visibility=(Number(me.__100.style.opacity)>0||!me.__100.style.opacity)?'inherit':'hidden';
					me.__100.ggVisible=true;
				}
				else {
					me.__100.style.visibility="hidden";
					me.__100.ggVisible=false;
				}
			}
		}
		me.__100.logicBlock_visible();
		me.__100.ggUpdatePosition=function (useTransition) {
		}
		el=me.__103=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__103;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 150;
		el.ggHeight = 180;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me.__103.ggUpdating == true) return;
			me.__103.ggUpdating = true;
			var el=me.__103;
			var curNumRows = 0;
			curNumRows = me.__103.ggNumRepeat;
			if (curNumRows < 1) curNumRows = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumRows == curNumRows) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me.__103.ggUpdating = false;
				return;
			} else {
				el.ggNumCols = 1;
				el.ggNumRows = curNumRows;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me.__103.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me.__103.getFilteredNodes(tourNodes, filter);
			me.__103.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me.__103.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me.__103.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me.__103.ggWidth) + 'px';
				parameter.width=me.__103.ggWidth + 'px';
				parameter.height=me.__103.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner__103_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				row++;
				if (row >= el.ggNumRows) {
					row = 0;
					column++;
					el.ggNumCols++;
				}
			}
			me.__103.ggNodeCount = me.__103.ggNumFilterPassed;
			me.__103.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me.__103.parentNode && me.__103.parentNode.classList.contains('ggskin_subelement') && me.__103.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me.__103.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggFilter[0] = "가구있음";
		el.ggFilter[1] = "메인";
		el.ggFilter[2] = "38A";
		el.ggId="\uac00\uad6c\uc788\uc74c";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 180px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 150px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__103.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__103.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 670))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__103.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__103.ggCurrentLogicStateSize = newLogicStateSize;
				me.__103.style.transition='width 0s, height 0s';
				if (me.__103.ggCurrentLogicStateSize == 0) {
					me.__103.ggWidth=100;
					me.__103.ggHeight=150;
					me.__103.ggUpdate();
					skin.updateSize(me.__103);
				}
				else {
					me.__103.ggWidth=150;
					me.__103.ggHeight=180;
					me.__103.ggUpdate();
					skin.updateSize(me.__103);
				}
			}
		}
		me.__103.logicBlock_size();
		me.__103.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("\uac00\uad6c\uc788\uc74c") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__103.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__103.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__103.style.transition='width 0s, height 0s';
				if (me.__103.ggCurrentLogicStateVisible == 0) {
					me.__103.style.visibility=(Number(me.__103.style.opacity)>0||!me.__103.style.opacity)?'inherit':'hidden';
					me.__103.ggVisible=true;
				}
				else {
					me.__103.style.visibility="hidden";
					me.__103.ggVisible=false;
				}
			}
		}
		me.__103.logicBlock_visible();
		me.__103.ggCurrentLogicStateSize = -1;
		me.__103.ggCurrentLogicStateVisible = -1;
		me.__103.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me.__103.childNodes.length; i++) {
				var child=me.__103.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me.__103.ggUpdatePosition=function (useTransition) {
			me.__103.ggUpdate();
		}
		me.__100.appendChild(me.__103);
		el=me.__101=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__101;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 150;
		el.ggHeight = 200;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me.__101.ggUpdating == true) return;
			me.__101.ggUpdating = true;
			var el=me.__101;
			var curNumRows = 0;
			curNumRows = me.__101.ggNumRepeat;
			if (curNumRows < 1) curNumRows = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumRows == curNumRows) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me.__101.ggUpdating = false;
				return;
			} else {
				el.ggNumCols = 1;
				el.ggNumRows = curNumRows;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me.__101.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me.__101.getFilteredNodes(tourNodes, filter);
			me.__101.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me.__101.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me.__101.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me.__101.ggWidth) + 'px';
				parameter.width=me.__101.ggWidth + 'px';
				parameter.height=me.__101.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner__101_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				row++;
				if (row >= el.ggNumRows) {
					row = 0;
					column++;
					el.ggNumCols++;
				}
			}
			me.__101.ggNodeCount = me.__101.ggNumFilterPassed;
			me.__101.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me.__101.parentNode && me.__101.parentNode.classList.contains('ggskin_subelement') && me.__101.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me.__101.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggFilter[0] = "가구없음";
		el.ggFilter[1] = "메인";
		el.ggFilter[2] = "38A";
		el.ggId="\uac00\uad6c\uc5c6\uc74c";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 200px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 150px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__101.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__101.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 670))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__101.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__101.ggCurrentLogicStateSize = newLogicStateSize;
				me.__101.style.transition='width 0s, height 0s';
				if (me.__101.ggCurrentLogicStateSize == 0) {
					me.__101.ggWidth=100;
					me.__101.ggHeight=150;
					me.__101.ggUpdate();
					skin.updateSize(me.__101);
				}
				else {
					me.__101.ggWidth=150;
					me.__101.ggHeight=200;
					me.__101.ggUpdate();
					skin.updateSize(me.__101);
				}
			}
		}
		me.__101.logicBlock_size();
		me.__101.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("\uac00\uad6c\uc5c6\uc74c") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__101.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__101.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__101.style.transition='width 0s, height 0s';
				if (me.__101.ggCurrentLogicStateVisible == 0) {
					me.__101.style.visibility=(Number(me.__101.style.opacity)>0||!me.__101.style.opacity)?'inherit':'hidden';
					me.__101.ggVisible=true;
				}
				else {
					me.__101.style.visibility="hidden";
					me.__101.ggVisible=false;
				}
			}
		}
		me.__101.logicBlock_visible();
		me.__101.ggCurrentLogicStateSize = -1;
		me.__101.ggCurrentLogicStateVisible = -1;
		me.__101.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me.__101.childNodes.length; i++) {
				var child=me.__101.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me.__101.ggUpdatePosition=function (useTransition) {
			me.__101.ggUpdate();
		}
		me.__100.appendChild(me.__101);
		me._scrollarea_1__content.appendChild(me.__100);
		el=me.__38c=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__38c;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="\uacf5\uac04\uc120\ud0dd \uc774\ubbf8\uc9c0-38C";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 200px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__38c.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__38c.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("38C") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__38c.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__38c.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__38c.style.transition='';
				if (me.__38c.ggCurrentLogicStateVisible == 0) {
					me.__38c.style.visibility=(Number(me.__38c.style.opacity)>0||!me.__38c.style.opacity)?'inherit':'hidden';
					me.__38c.ggVisible=true;
				}
				else {
					me.__38c.style.visibility="hidden";
					me.__38c.ggVisible=false;
				}
			}
		}
		me.__38c.logicBlock_visible();
		me.__38c.ggUpdatePosition=function (useTransition) {
		}
		el=me.__38c2=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__38c2;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 150;
		el.ggHeight = 180;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me.__38c2.ggUpdating == true) return;
			me.__38c2.ggUpdating = true;
			var el=me.__38c2;
			var curNumRows = 0;
			curNumRows = me.__38c2.ggNumRepeat;
			if (curNumRows < 1) curNumRows = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumRows == curNumRows) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me.__38c2.ggUpdating = false;
				return;
			} else {
				el.ggNumCols = 1;
				el.ggNumRows = curNumRows;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me.__38c2.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me.__38c2.getFilteredNodes(tourNodes, filter);
			me.__38c2.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me.__38c2.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me.__38c2.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me.__38c2.ggWidth) + 'px';
				parameter.width=me.__38c2.ggWidth + 'px';
				parameter.height=me.__38c2.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner__38c2_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				row++;
				if (row >= el.ggNumRows) {
					row = 0;
					column++;
					el.ggNumCols++;
				}
			}
			me.__38c2.ggNodeCount = me.__38c2.ggNumFilterPassed;
			me.__38c2.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me.__38c2.parentNode && me.__38c2.parentNode.classList.contains('ggskin_subelement') && me.__38c2.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me.__38c2.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggFilter[0] = "가구있음";
		el.ggFilter[1] = "메인";
		el.ggFilter[2] = "38C";
		el.ggId="\uac00\uad6c\uc788\uc74c-38C";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 180px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 150px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__38c2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__38c2.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 670))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__38c2.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__38c2.ggCurrentLogicStateSize = newLogicStateSize;
				me.__38c2.style.transition='width 0s, height 0s';
				if (me.__38c2.ggCurrentLogicStateSize == 0) {
					me.__38c2.ggWidth=100;
					me.__38c2.ggHeight=150;
					me.__38c2.ggUpdate();
					skin.updateSize(me.__38c2);
				}
				else {
					me.__38c2.ggWidth=150;
					me.__38c2.ggHeight=180;
					me.__38c2.ggUpdate();
					skin.updateSize(me.__38c2);
				}
			}
		}
		me.__38c2.logicBlock_size();
		me.__38c2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("\uac00\uad6c\uc788\uc74c") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__38c2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__38c2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__38c2.style.transition='width 0s, height 0s';
				if (me.__38c2.ggCurrentLogicStateVisible == 0) {
					me.__38c2.style.visibility=(Number(me.__38c2.style.opacity)>0||!me.__38c2.style.opacity)?'inherit':'hidden';
					me.__38c2.ggVisible=true;
				}
				else {
					me.__38c2.style.visibility="hidden";
					me.__38c2.ggVisible=false;
				}
			}
		}
		me.__38c2.logicBlock_visible();
		me.__38c2.ggCurrentLogicStateSize = -1;
		me.__38c2.ggCurrentLogicStateVisible = -1;
		me.__38c2.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me.__38c2.childNodes.length; i++) {
				var child=me.__38c2.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me.__38c2.ggUpdatePosition=function (useTransition) {
			me.__38c2.ggUpdate();
		}
		me.__38c.appendChild(me.__38c2);
		el=me.__38c0=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__38c0;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 150;
		el.ggHeight = 200;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me.__38c0.ggUpdating == true) return;
			me.__38c0.ggUpdating = true;
			var el=me.__38c0;
			var curNumRows = 0;
			curNumRows = me.__38c0.ggNumRepeat;
			if (curNumRows < 1) curNumRows = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumRows == curNumRows) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me.__38c0.ggUpdating = false;
				return;
			} else {
				el.ggNumCols = 1;
				el.ggNumRows = curNumRows;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me.__38c0.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me.__38c0.getFilteredNodes(tourNodes, filter);
			me.__38c0.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me.__38c0.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me.__38c0.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me.__38c0.ggWidth) + 'px';
				parameter.width=me.__38c0.ggWidth + 'px';
				parameter.height=me.__38c0.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner__38c0_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				row++;
				if (row >= el.ggNumRows) {
					row = 0;
					column++;
					el.ggNumCols++;
				}
			}
			me.__38c0.ggNodeCount = me.__38c0.ggNumFilterPassed;
			me.__38c0.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me.__38c0.parentNode && me.__38c0.parentNode.classList.contains('ggskin_subelement') && me.__38c0.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me.__38c0.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggFilter[0] = "가구없음";
		el.ggFilter[1] = "메인";
		el.ggFilter[2] = "38C";
		el.ggId="\uac00\uad6c\uc5c6\uc74c-38C";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 200px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 150px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__38c0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__38c0.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 670))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__38c0.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__38c0.ggCurrentLogicStateSize = newLogicStateSize;
				me.__38c0.style.transition='width 0s, height 0s';
				if (me.__38c0.ggCurrentLogicStateSize == 0) {
					me.__38c0.ggWidth=100;
					me.__38c0.ggHeight=150;
					me.__38c0.ggUpdate();
					skin.updateSize(me.__38c0);
				}
				else {
					me.__38c0.ggWidth=150;
					me.__38c0.ggHeight=200;
					me.__38c0.ggUpdate();
					skin.updateSize(me.__38c0);
				}
			}
		}
		me.__38c0.logicBlock_size();
		me.__38c0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("\uac00\uad6c\uc5c6\uc74c") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__38c0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__38c0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__38c0.style.transition='width 0s, height 0s';
				if (me.__38c0.ggCurrentLogicStateVisible == 0) {
					me.__38c0.style.visibility=(Number(me.__38c0.style.opacity)>0||!me.__38c0.style.opacity)?'inherit':'hidden';
					me.__38c0.ggVisible=true;
				}
				else {
					me.__38c0.style.visibility="hidden";
					me.__38c0.ggVisible=false;
				}
			}
		}
		me.__38c0.logicBlock_visible();
		me.__38c0.ggCurrentLogicStateSize = -1;
		me.__38c0.ggCurrentLogicStateVisible = -1;
		me.__38c0.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me.__38c0.childNodes.length; i++) {
				var child=me.__38c0.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me.__38c0.ggUpdatePosition=function (useTransition) {
			me.__38c0.ggUpdate();
		}
		me.__38c.appendChild(me.__38c0);
		me._scrollarea_1__content.appendChild(me.__38c);
		el=me.__18a=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__18a;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="\uacf5\uac04\uc120\ud0dd \uc774\ubbf8\uc9c0-18A";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 200px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__18a.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__18a.ggUpdatePosition=function (useTransition) {
		}
		el=me.__18a2=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__18a2;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 150;
		el.ggHeight = 180;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me.__18a2.ggUpdating == true) return;
			me.__18a2.ggUpdating = true;
			var el=me.__18a2;
			var curNumRows = 0;
			curNumRows = me.__18a2.ggNumRepeat;
			if (curNumRows < 1) curNumRows = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumRows == curNumRows) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me.__18a2.ggUpdating = false;
				return;
			} else {
				el.ggNumCols = 1;
				el.ggNumRows = curNumRows;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me.__18a2.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me.__18a2.getFilteredNodes(tourNodes, filter);
			me.__18a2.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me.__18a2.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me.__18a2.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me.__18a2.ggWidth) + 'px';
				parameter.width=me.__18a2.ggWidth + 'px';
				parameter.height=me.__18a2.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner__18a2_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				row++;
				if (row >= el.ggNumRows) {
					row = 0;
					column++;
					el.ggNumCols++;
				}
			}
			me.__18a2.ggNodeCount = me.__18a2.ggNumFilterPassed;
			me.__18a2.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me.__18a2.parentNode && me.__18a2.parentNode.classList.contains('ggskin_subelement') && me.__18a2.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me.__18a2.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggFilter[0] = "메인";
		el.ggFilter[1] = "1층";
		el.ggId="\uac00\uad6c\uc788\uc74c-18A";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 180px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 150px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__18a2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__18a2.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 670))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__18a2.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__18a2.ggCurrentLogicStateSize = newLogicStateSize;
				me.__18a2.style.transition='width 0s, height 0s';
				if (me.__18a2.ggCurrentLogicStateSize == 0) {
					me.__18a2.ggWidth=100;
					me.__18a2.ggHeight=150;
					me.__18a2.ggUpdate();
					skin.updateSize(me.__18a2);
				}
				else {
					me.__18a2.ggWidth=150;
					me.__18a2.ggHeight=180;
					me.__18a2.ggUpdate();
					skin.updateSize(me.__18a2);
				}
			}
		}
		me.__18a2.logicBlock_size();
		me.__18a2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("1\uce35") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__18a2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__18a2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__18a2.style.transition='width 0s, height 0s';
				if (me.__18a2.ggCurrentLogicStateVisible == 0) {
					me.__18a2.style.visibility=(Number(me.__18a2.style.opacity)>0||!me.__18a2.style.opacity)?'inherit':'hidden';
					me.__18a2.ggVisible=true;
				}
				else {
					me.__18a2.style.visibility="hidden";
					me.__18a2.ggVisible=false;
				}
			}
		}
		me.__18a2.logicBlock_visible();
		me.__18a2.ggCurrentLogicStateSize = -1;
		me.__18a2.ggCurrentLogicStateVisible = -1;
		me.__18a2.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me.__18a2.childNodes.length; i++) {
				var child=me.__18a2.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me.__18a2.ggUpdatePosition=function (useTransition) {
			me.__18a2.ggUpdate();
		}
		me.__18a.appendChild(me.__18a2);
		el=me.__18a0=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__18a0;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 150;
		el.ggHeight = 200;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me.__18a0.ggUpdating == true) return;
			me.__18a0.ggUpdating = true;
			var el=me.__18a0;
			var curNumRows = 0;
			curNumRows = me.__18a0.ggNumRepeat;
			if (curNumRows < 1) curNumRows = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumRows == curNumRows) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me.__18a0.ggUpdating = false;
				return;
			} else {
				el.ggNumCols = 1;
				el.ggNumRows = curNumRows;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me.__18a0.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me.__18a0.getFilteredNodes(tourNodes, filter);
			me.__18a0.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me.__18a0.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me.__18a0.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me.__18a0.ggWidth) + 'px';
				parameter.width=me.__18a0.ggWidth + 'px';
				parameter.height=me.__18a0.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner__18a0_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				row++;
				if (row >= el.ggNumRows) {
					row = 0;
					column++;
					el.ggNumCols++;
				}
			}
			me.__18a0.ggNodeCount = me.__18a0.ggNumFilterPassed;
			me.__18a0.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me.__18a0.parentNode && me.__18a0.parentNode.classList.contains('ggskin_subelement') && me.__18a0.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me.__18a0.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggFilter[0] = "메인";
		el.ggFilter[1] = "2층";
		el.ggId="\uac00\uad6c\uc5c6\uc74c-18A";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 200px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 150px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__18a0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__18a0.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 670))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__18a0.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__18a0.ggCurrentLogicStateSize = newLogicStateSize;
				me.__18a0.style.transition='width 0s, height 0s';
				if (me.__18a0.ggCurrentLogicStateSize == 0) {
					me.__18a0.ggWidth=100;
					me.__18a0.ggHeight=150;
					me.__18a0.ggUpdate();
					skin.updateSize(me.__18a0);
				}
				else {
					me.__18a0.ggWidth=150;
					me.__18a0.ggHeight=200;
					me.__18a0.ggUpdate();
					skin.updateSize(me.__18a0);
				}
			}
		}
		me.__18a0.logicBlock_size();
		me.__18a0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("2\uce35") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__18a0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__18a0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__18a0.style.transition='width 0s, height 0s';
				if (me.__18a0.ggCurrentLogicStateVisible == 0) {
					me.__18a0.style.visibility=(Number(me.__18a0.style.opacity)>0||!me.__18a0.style.opacity)?'inherit':'hidden';
					me.__18a0.ggVisible=true;
				}
				else {
					me.__18a0.style.visibility="hidden";
					me.__18a0.ggVisible=false;
				}
			}
		}
		me.__18a0.logicBlock_visible();
		me.__18a0.ggCurrentLogicStateSize = -1;
		me.__18a0.ggCurrentLogicStateVisible = -1;
		me.__18a0.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me.__18a0.childNodes.length; i++) {
				var child=me.__18a0.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me.__18a0.ggUpdatePosition=function (useTransition) {
			me.__18a0.ggUpdate();
		}
		me.__18a.appendChild(me.__18a0);
		me._scrollarea_1__content.appendChild(me.__18a);
		me.__99.appendChild(me._scrollarea_1);
		me.divSkin.appendChild(me.__99);
		el=me.__59=document.createElement('div');
		el.ggId="\uc0ac\uc774\ub4dc\ubc14";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 483px;';
		hs+='position : absolute;';
		hs+='right : 15px;';
		hs+='top : calc(50% - ((483px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 55px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__59.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__59.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__59.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__59.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__59.style.transition='right 0s, top 0s, transform 0s';
				if (me.__59.ggCurrentLogicStatePosition == 0) {
					me.__59.style.right='2px';
					me.__59.style.top = 'calc(50% - (483px / 2) + (0px / 2) + 5px)';
				}
				else {
					me.__59.style.right='15px';
					me.__59.style.top='calc(50% - ((483px + 0px) / 2) + 0px)';
				}
			}
		}
		me.__59.logicBlock_position();
		me.__59.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__59.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__59.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__59.style.transition='right 0s, top 0s, transform 0s';
				if (me.__59.ggCurrentLogicStateScaling == 0) {
					me.__59.ggParameter.sx = 0.75;
					me.__59.ggParameter.sy = 0.7;
					me.__59.style.transform=parameterToTransform(me.__59.ggParameter);
					skin.updateSize(me.__59);
				}
				else {
					me.__59.ggParameter.sx = 1;
					me.__59.ggParameter.sy = 1;
					me.__59.style.transform=parameterToTransform(me.__59.ggParameter);
					skin.updateSize(me.__59);
				}
			}
		}
		me.__59.logicBlock_scaling();
		me.__59.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_2=document.createElement('div');
		el.ggId="Rectangle 2";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.470588);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 30px;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_2.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('vis_short') == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._rectangle_2.ggCurrentLogicStateSize != newLogicStateSize) {
				me._rectangle_2.ggCurrentLogicStateSize = newLogicStateSize;
				me._rectangle_2.style.transition='width 500ms ease-in 0ms, height 500ms ease-in 0ms, top 500ms ease-in 0ms';
				if (me._rectangle_2.ggCurrentLogicStateSize == 0) {
					me._rectangle_2.style.width='100%';
					me._rectangle_2.style.height='0%';
					me._rectangle_2.style.top = 'calc(50% - (0% / 2))';
					setTimeout(function() {skin.updateSize(me._rectangle_2);}, 550);
				}
				else {
					me._rectangle_2.style.width='100%';
					me._rectangle_2.style.height='100%';
					me._rectangle_2.style.top = 'calc(50% - (100% / 2))';
					setTimeout(function() {skin.updateSize(me._rectangle_2);}, 550);
				}
			}
		}
		me._rectangle_2.logicBlock_size();
		me._rectangle_2.ggUpdatePosition=function (useTransition) {
		}
		el=me.__62=document.createElement('div');
		el.ggId="\uc544\uc774\ucf58\ubc15\uc2a4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__62.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__62.ggUpdatePosition=function (useTransition) {
		}
		el=me.__96=document.createElement('div');
		el.ggId="\uc544\uc774\ucf58-\uacf5\uac04\uc120\ud0dd";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 43px;';
		hs+='left : calc(50% - ((43px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 43px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__96.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__96.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_short') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('vis_skin_show') == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__96.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__96.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__96.style.transition='';
				if (me.__96.ggCurrentLogicStateVisible == 0) {
					me.__96.style.visibility="hidden";
					me.__96.ggVisible=false;
				}
				else if (me.__96.ggCurrentLogicStateVisible == 1) {
					me.__96.style.visibility="hidden";
					me.__96.ggVisible=false;
				}
				else {
					me.__96.style.visibility=(Number(me.__96.style.opacity)>0||!me.__96.style.opacity)?'inherit':'hidden';
					me.__96.ggVisible=true;
				}
			}
		}
		me.__96.logicBlock_visible();
		me.__96.onclick=function (e) {
			player.setVariableValue('vis_roomchoice', !player.getVariableValue('vis_roomchoice'));
			if (
				(
					((player.getViewerSize().width <= 460))
				)
			||
				(
					((player.getIsMobile() == true))
				)
			) {
				me.__44.ggVisible = !me.__44.ggVisible;
				var flag=me.__44.ggVisible;
				me.__44.style.transition='none';
				me.__44.style.visibility=((flag)&&(Number(me.__44.style.opacity)>0||!me.__44.style.opacity))?'inherit':'hidden';
			}
		}
		me.__96.onmouseover=function (e) {
			me.elementMouseOver['_96']=true;
		}
		me.__96.onmousemove=function (e) {
			me.__97.style.transition='none';
			me.__97.style.visibility=(Number(me.__97.style.opacity)>0||!me.__97.style.opacity)?'inherit':'hidden';
			me.__97.ggVisible=true;
		}
		me.__96.onmouseout=function (e) {
			me.elementMouseOver['_96']=false;
		}
		me.__96.ggCurrentLogicStateVisible = -1;
		me.__96.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_96']) {
				me.__97.style.transition='none';
				me.__97.style.visibility=(Number(me.__97.style.opacity)>0||!me.__97.style.opacity)?'inherit':'hidden';
				me.__97.ggVisible=true;
			}
		}
		me.__96.ggUpdatePosition=function (useTransition) {
		}
		el=me.__213=document.createElement('div');
		el.ggId="\uacf5\uac04\uc120\ud0dd\ubc30\uacbd2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__213.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__213.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_roomchoice') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__213.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__213.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__213.style.transition='';
				if (me.__213.ggCurrentLogicStateVisible == 0) {
					me.__213.style.visibility=(Number(me.__213.style.opacity)>0||!me.__213.style.opacity)?'inherit':'hidden';
					me.__213.ggVisible=true;
				}
				else {
					me.__213.style.visibility="hidden";
					me.__213.ggVisible=false;
				}
			}
		}
		me.__213.logicBlock_visible();
		me.__213.ggUpdatePosition=function (useTransition) {
		}
		me.__96.appendChild(me.__213);
		el=me.__98=document.createElement('div');
		els=me.__98__img=document.createElement('img');
		els.className='ggskin ggskin__98';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uacf5\uac04\uc120\ud0dd\uc544\uc774\ucf58";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.6,sy:0.6,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__98.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__98.ggUpdatePosition=function (useTransition) {
		}
		me.__96.appendChild(me.__98);
		el=me.__97=document.createElement('div');
		els=me.__97__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uacf5\uac04\uc120\ud0dd\ud0dd\uc2a4\ud2b8";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 20px;';
		hs+='color : rgba(34,34,34,1);';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : -90px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		hs+='line-height:14px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__97.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uacf5\uac04\uc120\ud0dd", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__97.ggUpdateText();
		el.appendChild(els);
		me.__97.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__97.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_roomchoice') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__97.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__97.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__97.style.transition='';
				if (me.__97.ggCurrentLogicStateVisible == 0) {
					me.__97.style.visibility=(Number(me.__97.style.opacity)>0||!me.__97.style.opacity)?'inherit':'hidden';
					me.__97.ggVisible=true;
				}
				else {
					me.__97.style.visibility="hidden";
					me.__97.ggVisible=false;
				}
			}
		}
		me.__97.logicBlock_visible();
		me.__97.ggUpdatePosition=function (useTransition) {
		}
		me.__96.appendChild(me.__97);
		el=me._timer_1=document.createElement('div');
		el.ggTimestamp=skin.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=500;
		el.ggId="Timer 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -257px;';
		hs+='position : absolute;';
		hs+='top : 279px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._timer_1.ggIsActive=function() {
			return (me._timer_1.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me._timer_1.ggTimestamp) / me._timer_1.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._timer_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._timer_1.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._timer_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._timer_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._timer_1.style.transition='';
				if (me._timer_1.ggCurrentLogicStateVisible == 0) {
					me._timer_1.style.visibility=(Number(me._timer_1.style.opacity)>0||!me._timer_1.style.opacity)?'inherit':'hidden';
					me._timer_1.ggVisible=true;
				}
				else {
					me._timer_1.style.visibility=(Number(me._timer_1.style.opacity)>0||!me._timer_1.style.opacity)?'inherit':'hidden';
					me._timer_1.ggVisible=true;
				}
			}
		}
		me._timer_1.logicBlock_visible();
		me._timer_1.ggActivate=function () {
			me.__97.style.transition='none';
			me.__97.style.visibility='hidden';
			me.__97.ggVisible=false;
		}
		me._timer_1.ggCurrentLogicStateVisible = -1;
		me._timer_1.ggUpdateConditionTimer=function () {
			me._timer_1.logicBlock_visible();
		}
		me._timer_1.ggUpdatePosition=function (useTransition) {
		}
		me.__96.appendChild(me._timer_1);
		me.__62.appendChild(me.__96);
		el=me.__92=document.createElement('div');
		el.ggId="\uc544\uc774\ucf58-\ud3c9\uba74\ub3c4";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 43px;';
		hs+='left : calc(50% - ((43px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 63px;';
		hs+='visibility : inherit;';
		hs+='width : 43px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__92.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__92.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_short') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('vis_skin_show') == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__92.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__92.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__92.style.transition='';
				if (me.__92.ggCurrentLogicStateVisible == 0) {
					me.__92.style.visibility="hidden";
					me.__92.ggVisible=false;
				}
				else if (me.__92.ggCurrentLogicStateVisible == 1) {
					me.__92.style.visibility="hidden";
					me.__92.ggVisible=false;
				}
				else {
					me.__92.style.visibility=(Number(me.__92.style.opacity)>0||!me.__92.style.opacity)?'inherit':'hidden';
					me.__92.ggVisible=true;
				}
			}
		}
		me.__92.logicBlock_visible();
		me.__92.onclick=function (e) {
			if (
				(
					((player.getViewerSize().width > 460))
				)
			) {
				me.__47.ggVisible = !me.__47.ggVisible;
				var flag=me.__47.ggVisible;
				me.__47.style.transition='none';
				me.__47.style.visibility=((flag)&&(Number(me.__47.style.opacity)>0||!me.__47.style.opacity))?'inherit':'hidden';
			}
			me.__95.ggVisible = !me.__95.ggVisible;
			var flag=me.__95.ggVisible;
			me.__95.style.transition='none';
			me.__95.style.visibility=((flag)&&(Number(me.__95.style.opacity)>0||!me.__95.style.opacity))?'inherit':'hidden';
			if (
				(
					((player.getViewerSize().width <= 460))
				)
			||
				(
					((player.getIsMobile() == true))
				)
			) {
				player.setVariableValue('vis_mobilemap', false);
			}
			me.__38.style.transition='none';
			me.__38.style.visibility='hidden';
			me.__38.ggVisible=false;
			if (
				(
					((player.getViewerSize().width <= 460))
				)
			) {
				me.__44.ggVisible = !me.__44.ggVisible;
				var flag=me.__44.ggVisible;
				me.__44.style.transition='none';
				me.__44.style.visibility=((flag)&&(Number(me.__44.style.opacity)>0||!me.__44.style.opacity))?'inherit':'hidden';
			}
			player.setVariableValue('vis_roomchoice', false);
		}
		me.__92.onmouseover=function (e) {
			me.elementMouseOver['_92']=true;
		}
		me.__92.onmousemove=function (e) {
			me.__93.style.transition='none';
			me.__93.style.visibility=(Number(me.__93.style.opacity)>0||!me.__93.style.opacity)?'inherit':'hidden';
			me.__93.ggVisible=true;
		}
		me.__92.onmouseout=function (e) {
			me.elementMouseOver['_92']=false;
		}
		me.__92.ggCurrentLogicStateVisible = -1;
		me.__92.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_92']) {
				me.__93.style.transition='none';
				me.__93.style.visibility=(Number(me.__93.style.opacity)>0||!me.__93.style.opacity)?'inherit':'hidden';
				me.__93.ggVisible=true;
			}
		}
		me.__92.ggUpdatePosition=function (useTransition) {
		}
		el=me.__95=document.createElement('div');
		el.ggId="\ud3c9\uba74\ub3c4\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__95.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__95.ggUpdatePosition=function (useTransition) {
		}
		me.__92.appendChild(me.__95);
		el=me.__94=document.createElement('div');
		els=me.__94__img=document.createElement('img');
		els.className='ggskin ggskin__94';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAA9hAAAPYQGoP6dpAAABaUlEQVR4nO3dwUrEMBRA0VdxreL/f6MM/kBcuFJ0IaZ6Kefsmxm4pClNp3OstYaOu//+AnwkSIwgMYLECBIjSIwgMYLECBIjSIwgMYLECBIjSIwgMYLECBJzv2ug4zhsPc7MWuv4zfFmSIwgMYLECBKzbVH/xq8WuB/66qLi7M/ffiFjhsQIEiNIjCAxgsQIEiNIjCAxgsQIEiNIjCAxgsQIEiNIzNn7IX/pL/deTmOGxAgSI0iMIDGCxAgSI0iMIDGCxAgSc6VbJ5f4fYoZEiNIjCAxV1pDPlszcztx/Kc54Zb/lYO8zszziePfZuZx96BOWTGCxAgSI0iMIDGCxAgSI0iMIDGCxAgSI0iMIDGCxAgSI0iMID'+
			'GCxAgSI0iMIDGCxFz5MaCHmXk5efztjl1/3+1l/O+8jP9iBIkRJEaQmG2LOnuYITGCxAgSI0iMIDGCxAgSI0iMIDGCxAgSI0iMIDGCxAgS8wZ7mBnYotOjNgAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ud3c9\uba74\ub3c4";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.6,sy:0.6,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__94.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__94.ggUpdatePosition=function (useTransition) {
		}
		me.__92.appendChild(me.__94);
		el=me.__93=document.createElement('div');
		els=me.__93__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ud3c9\uba74\ub3c4\ud0dd\uc2a4\ud2b8";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 20px;';
		hs+='color : rgba(34,34,34,1);';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : -90px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		hs+='line-height:14px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__93.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ud3c9\uba74\ubcf4\uae30", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__93.ggUpdateText();
		el.appendChild(els);
		me.__93.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__93.ggUpdatePosition=function (useTransition) {
		}
		me.__92.appendChild(me.__93);
		me.__62.appendChild(me.__92);
		el=me.__91=document.createElement('div');
		el.ggTimestamp=skin.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=500;
		el.ggId="\ud3c9\uba74\ub3c4\ud0c0\uc774\uba38";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -502px;';
		hs+='position : absolute;';
		hs+='top : 251px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__91.ggIsActive=function() {
			return (me.__91.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me.__91.ggTimestamp) / me.__91.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__91.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.__91.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__91.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__91.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__91.style.transition='';
				if (me.__91.ggCurrentLogicStateVisible == 0) {
					me.__91.style.visibility=(Number(me.__91.style.opacity)>0||!me.__91.style.opacity)?'inherit':'hidden';
					me.__91.ggVisible=true;
				}
				else {
					me.__91.style.visibility=(Number(me.__91.style.opacity)>0||!me.__91.style.opacity)?'inherit':'hidden';
					me.__91.ggVisible=true;
				}
			}
		}
		me.__91.logicBlock_visible();
		me.__91.ggActivate=function () {
			me.__93.style.transition='none';
			me.__93.style.visibility='hidden';
			me.__93.ggVisible=false;
		}
		me.__91.ggCurrentLogicStateVisible = -1;
		me.__91.ggUpdateConditionTimer=function () {
			me.__91.logicBlock_visible();
		}
		me.__91.ggUpdatePosition=function (useTransition) {
		}
		me.__62.appendChild(me.__91);
		el=me.__87=document.createElement('div');
		el.ggId="\uc544\uc774\ucf58-\uc2a4\ud31f\uc544\uc774\ucf58";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 43px;';
		hs+='left : calc(50% - ((43px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 166px;';
		hs+='visibility : inherit;';
		hs+='width : 43px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__87.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__87.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_short') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('vis_skin_show') == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__87.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__87.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__87.style.transition='';
				if (me.__87.ggCurrentLogicStateVisible == 0) {
					me.__87.style.visibility="hidden";
					me.__87.ggVisible=false;
				}
				else if (me.__87.ggCurrentLogicStateVisible == 1) {
					me.__87.style.visibility="hidden";
					me.__87.ggVisible=false;
				}
				else {
					me.__87.style.visibility=(Number(me.__87.style.opacity)>0||!me.__87.style.opacity)?'inherit':'hidden';
					me.__87.ggVisible=true;
				}
			}
		}
		me.__87.logicBlock_visible();
		me.__87.onclick=function (e) {
			me.__54.style.transition='none';
			me.__54.style.visibility=(Number(me.__54.style.opacity)>0||!me.__54.style.opacity)?'inherit':'hidden';
			me.__54.ggVisible=true;
			me.__60.style.transition='none';
			me.__60.style.visibility='hidden';
			me.__60.ggVisible=false;
			me.__.style.transition='none';
			me.__.style.visibility='hidden';
			me.__.ggVisible=false;
			if (
				(
					((player.getViewerSize().width > 460))
				)
			||
				(
					((player.getIsMobile() == false))
				)
			) {
				me.__47.style.transition='none';
				me.__47.style.visibility='hidden';
				me.__47.ggVisible=false;
			}
			var list=me.findElements("ht_node",true);
			while(list.length>0) {
				var e=list.pop();
				e.style.transition='none';
				e.style.visibility='hidden';
				e.ggVisible=false;
			}
			me.__99.style.transition='none';
			me.__99.style.visibility='hidden';
			me.__99.ggVisible=false;
			me._rectangle_2.style.transition='none';
			me._rectangle_2.style.visibility='hidden';
			me._rectangle_2.ggVisible=false;
			if (
				(
					((player.getViewerSize().width <= 460))
				)
			||
				(
					((player.getIsMobile() == true))
				)
			) {
				me.__44.style.transition='none';
				me.__44.style.visibility='hidden';
				me.__44.ggVisible=false;
			}
		}
		me.__87.onmouseover=function (e) {
			me.elementMouseOver['_87']=true;
		}
		me.__87.onmousemove=function (e) {
			me.__88.style.transition='none';
			me.__88.style.visibility=(Number(me.__88.style.opacity)>0||!me.__88.style.opacity)?'inherit':'hidden';
			me.__88.ggVisible=true;
		}
		me.__87.onmouseout=function (e) {
			me.elementMouseOver['_87']=false;
		}
		me.__87.ggCurrentLogicStateVisible = -1;
		me.__87.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_87']) {
				me.__88.style.transition='none';
				me.__88.style.visibility=(Number(me.__88.style.opacity)>0||!me.__88.style.opacity)?'inherit':'hidden';
				me.__88.ggVisible=true;
			}
		}
		me.__87.ggUpdatePosition=function (useTransition) {
		}
		el=me.__90=document.createElement('div');
		el.ggId="\uc2a4\ud31f\uc544\uc774\ucf58\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__90.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__90.ggUpdatePosition=function (useTransition) {
		}
		me.__87.appendChild(me.__90);
		el=me.__89=document.createElement('div');
		els=me.__89__img=document.createElement('img');
		els.className='ggskin ggskin__89';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uc2a4\ud31f\uc544\uc774\ucf58";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.6,sy:0.6,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__89.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__89.ggUpdatePosition=function (useTransition) {
		}
		me.__87.appendChild(me.__89);
		el=me.__88=document.createElement('div');
		els=me.__88__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc2a4\ud31f\uc544\uc774\ucf58\ud0dd\uc2a4\ud2b8";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 20px;';
		hs+='color : rgba(34,34,34,1);';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : -90px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		hs+='line-height:14px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__88.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc2a4\ud0a8\uc81c\uac70", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__88.ggUpdateText();
		el.appendChild(els);
		me.__88.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__88.ggUpdatePosition=function (useTransition) {
		}
		me.__87.appendChild(me.__88);
		me.__62.appendChild(me.__87);
		el=me.__86=document.createElement('div');
		el.ggTimestamp=skin.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=500;
		el.ggId="\uc2a4\ud31f\uc544\uc774\ucf58\ud0c0\uc774\uba38";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -502px;';
		hs+='position : absolute;';
		hs+='top : 251px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__86.ggIsActive=function() {
			return (me.__86.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me.__86.ggTimestamp) / me.__86.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__86.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.__86.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__86.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__86.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__86.style.transition='';
				if (me.__86.ggCurrentLogicStateVisible == 0) {
					me.__86.style.visibility=(Number(me.__86.style.opacity)>0||!me.__86.style.opacity)?'inherit':'hidden';
					me.__86.ggVisible=true;
				}
				else {
					me.__86.style.visibility=(Number(me.__86.style.opacity)>0||!me.__86.style.opacity)?'inherit':'hidden';
					me.__86.ggVisible=true;
				}
			}
		}
		me.__86.logicBlock_visible();
		me.__86.ggActivate=function () {
			me.__88.style.transition='none';
			me.__88.style.visibility='hidden';
			me.__88.ggVisible=false;
		}
		me.__86.ggCurrentLogicStateVisible = -1;
		me.__86.ggUpdateConditionTimer=function () {
			me.__86.logicBlock_visible();
		}
		me.__86.ggUpdatePosition=function (useTransition) {
		}
		me.__62.appendChild(me.__86);
		el=me._onoff=document.createElement('div');
		el.ggId="\uc544\uc774\ucf58-\ubc30\uacbd\uc74c\uc545onoff";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 43px;';
		hs+='left : calc(50% - ((43px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 113px;';
		hs+='visibility : inherit;';
		hs+='width : 43px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._onoff.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._onoff.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_short') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('vis_skin_show') == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._onoff.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._onoff.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._onoff.style.transition='';
				if (me._onoff.ggCurrentLogicStateVisible == 0) {
					me._onoff.style.visibility="hidden";
					me._onoff.ggVisible=false;
				}
				else if (me._onoff.ggCurrentLogicStateVisible == 1) {
					me._onoff.style.visibility="hidden";
					me._onoff.ggVisible=false;
				}
				else {
					me._onoff.style.visibility=(Number(me._onoff.style.opacity)>0||!me._onoff.style.opacity)?'inherit':'hidden';
					me._onoff.ggVisible=true;
				}
			}
		}
		me._onoff.logicBlock_visible();
		me._onoff.onclick=function (e) {
			me._onoff0.style.transition='none';
			me._onoff0.style.visibility=(Number(me._onoff0.style.opacity)>0||!me._onoff0.style.opacity)?'inherit':'hidden';
			me._onoff0.ggVisible=true;
			player.setVariableValue('vis_sound', !player.getVariableValue('vis_sound'));
				player.playPauseSound("_background","1");
		}
		me._onoff.onmouseover=function (e) {
			me.elementMouseOver['onoff']=true;
		}
		me._onoff.onmousemove=function (e) {
			me.__85.style.transition='none';
			me.__85.style.visibility=(Number(me.__85.style.opacity)>0||!me.__85.style.opacity)?'inherit':'hidden';
			me.__85.ggVisible=true;
		}
		me._onoff.onmouseout=function (e) {
			me.elementMouseOver['onoff']=false;
		}
		me._onoff.ggCurrentLogicStateVisible = -1;
		me._onoff.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['onoff']) {
				me.__85.style.transition='none';
				me.__85.style.visibility=(Number(me.__85.style.opacity)>0||!me.__85.style.opacity)?'inherit':'hidden';
				me.__85.ggVisible=true;
			}
		}
		me._onoff.ggUpdatePosition=function (useTransition) {
		}
		el=me._on=document.createElement('div');
		el.ggId="\ubc30\uacbd\uc74c\uc545-on";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._on.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._on.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_sound') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._on.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._on.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._on.style.transition='';
				if (me._on.ggCurrentLogicStateVisible == 0) {
					me._on.style.visibility=(Number(me._on.style.opacity)>0||!me._on.style.opacity)?'inherit':'hidden';
					me._on.ggVisible=true;
				}
				else {
					me._on.style.visibility="hidden";
					me._on.ggVisible=false;
				}
			}
		}
		me._on.logicBlock_visible();
		me._on.ggUpdatePosition=function (useTransition) {
		}
		el=me._onoff0=document.createElement('div');
		el.ggId="\ubc30\uacbd\uc74c\uc545onoff\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._onoff0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._onoff0.ggUpdatePosition=function (useTransition) {
		}
		me._on.appendChild(me._onoff0);
		el=me._on0=document.createElement('div');
		els=me._on0__img=document.createElement('img');
		els.className='ggskin ggskin_on0';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ubc30\uacbd\uc74c\uc545on";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.6,sy:0.6,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._on0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._on0.ggUpdatePosition=function (useTransition) {
		}
		me._on.appendChild(me._on0);
		me._onoff.appendChild(me._on);
		el=me._off=document.createElement('div');
		el.ggId="\ubc30\uacbd\uc74c\uc545-off";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._off.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_sound') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._off.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._off.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._off.style.transition='';
				if (me._off.ggCurrentLogicStateVisible == 0) {
					me._off.style.visibility=(Number(me._off.style.opacity)>0||!me._off.style.opacity)?'inherit':'hidden';
					me._off.ggVisible=true;
				}
				else {
					me._off.style.visibility="hidden";
					me._off.ggVisible=false;
				}
			}
		}
		me._off.logicBlock_visible();
		me._off.ggUpdatePosition=function (useTransition) {
		}
		el=me._off0=document.createElement('div');
		els=me._off0__img=document.createElement('img');
		els.className='ggskin ggskin_off0';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ubc30\uacbd\uc74c\uc545off";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.6,sy:0.6,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._off0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._off0.ggUpdatePosition=function (useTransition) {
		}
		me._off.appendChild(me._off0);
		me._onoff.appendChild(me._off);
		el=me.__85=document.createElement('div');
		els=me.__85__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubc30\uacbd\uc74c\uc545\ud0dd\uc2a4\ud2b8";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 20px;';
		hs+='color : rgba(34,34,34,1);';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : -90px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		hs+='line-height:14px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__85.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc74c\uc545\ub044\uae30", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__85.ggUpdateText();
		el.appendChild(els);
		me.__85.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__85.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('vis_sound') == true))
			)
			{
				newLogicStateText = 0;
			}
			else {
				newLogicStateText = -1;
			}
			if (me.__85.ggCurrentLogicStateText != newLogicStateText) {
				me.__85.ggCurrentLogicStateText = newLogicStateText;
				me.__85.style.transition='';
				if (me.__85.ggCurrentLogicStateText == 0) {
					if (me.__85.ggUpdateText) {
					me.__85.ggUpdateText=function() {
						var params = [];
						var hs = player._("\uc74c\uc545\ucf1c\uae30", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me.__85.ggUpdateText();
					} else {
						if (me.__85.ggUpdatePosition) me.__85.ggUpdatePosition();
					}
				}
				else {
					if (me.__85.ggUpdateText) {
					me.__85.ggUpdateText=function() {
						var params = [];
						var hs = player._("\uc74c\uc545\ub044\uae30", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me.__85.ggUpdateText();
					} else {
						if (me.__85.ggUpdatePosition) me.__85.ggUpdatePosition();
					}
				}
			}
		}
		me.__85.logicBlock_text();
		me.__85.ggUpdatePosition=function (useTransition) {
		}
		me._onoff.appendChild(me.__85);
		me.__62.appendChild(me._onoff);
		el=me.__84=document.createElement('div');
		el.ggTimestamp=skin.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=500;
		el.ggId="\uac00\uad6c\uc628\uc624\ud504\ud0c0\uc774\uba38";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -502px;';
		hs+='position : absolute;';
		hs+='top : 251px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__84.ggIsActive=function() {
			return (me.__84.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me.__84.ggTimestamp) / me.__84.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__84.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.__84.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__84.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__84.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__84.style.transition='';
				if (me.__84.ggCurrentLogicStateVisible == 0) {
					me.__84.style.visibility=(Number(me.__84.style.opacity)>0||!me.__84.style.opacity)?'inherit':'hidden';
					me.__84.ggVisible=true;
				}
				else {
					me.__84.style.visibility=(Number(me.__84.style.opacity)>0||!me.__84.style.opacity)?'inherit':'hidden';
					me.__84.ggVisible=true;
				}
			}
		}
		me.__84.logicBlock_visible();
		me.__84.ggActivate=function () {
			me.__85.style.transition='none';
			me.__85.style.visibility='hidden';
			me.__85.ggVisible=false;
		}
		me.__84.ggCurrentLogicStateVisible = -1;
		me.__84.ggUpdateConditionTimer=function () {
			me.__84.logicBlock_visible();
		}
		me.__84.ggUpdatePosition=function (useTransition) {
		}
		me.__62.appendChild(me.__84);
		el=me.__80=document.createElement('div');
		el.ggId="\uc544\uc774\ucf58-\uc790\ub3d9\ud68c\uc804";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 43px;';
		hs+='left : calc(50% - ((43px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 271px;';
		hs+='visibility : inherit;';
		hs+='width : 43px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__80.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__80.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_short') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('vis_skin_show') == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__80.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__80.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__80.style.transition='';
				if (me.__80.ggCurrentLogicStateVisible == 0) {
					me.__80.style.visibility="hidden";
					me.__80.ggVisible=false;
				}
				else if (me.__80.ggCurrentLogicStateVisible == 1) {
					me.__80.style.visibility=(Number(me.__80.style.opacity)>0||!me.__80.style.opacity)?'inherit':'hidden';
					me.__80.ggVisible=true;
				}
				else {
					me.__80.style.visibility=(Number(me.__80.style.opacity)>0||!me.__80.style.opacity)?'inherit':'hidden';
					me.__80.ggVisible=true;
				}
			}
		}
		me.__80.logicBlock_visible();
		me.__80.onclick=function (e) {
			player.toggleAutorotate();
			me.__83.ggVisible = !me.__83.ggVisible;
			var flag=me.__83.ggVisible;
			me.__83.style.transition='none';
			me.__83.style.visibility=((flag)&&(Number(me.__83.style.opacity)>0||!me.__83.style.opacity))?'inherit':'hidden';
			player.setVariableValue('vis_icon5', true);
		}
		me.__80.onmouseover=function (e) {
			me.elementMouseOver['_80']=true;
		}
		me.__80.onmousemove=function (e) {
			me.__81.style.transition='none';
			me.__81.style.visibility=(Number(me.__81.style.opacity)>0||!me.__81.style.opacity)?'inherit':'hidden';
			me.__81.ggVisible=true;
		}
		me.__80.onmouseout=function (e) {
			me.elementMouseOver['_80']=false;
		}
		me.__80.ggCurrentLogicStateVisible = -1;
		me.__80.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_80']) {
				me.__81.style.transition='none';
				me.__81.style.visibility=(Number(me.__81.style.opacity)>0||!me.__81.style.opacity)?'inherit':'hidden';
				me.__81.ggVisible=true;
			}
		}
		me.__80.ggUpdatePosition=function (useTransition) {
		}
		el=me.__83=document.createElement('div');
		el.ggId="\uc790\ub3d9\ud68c\uc804\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__83.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__83.ggUpdatePosition=function (useTransition) {
		}
		me.__80.appendChild(me.__83);
		el=me.__82=document.createElement('div');
		els=me.__82__img=document.createElement('img');
		els.className='ggskin ggskin__82';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uc790\ub3d9\ud68c\uc804";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.6,sy:0.6,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__82.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__82.ggUpdatePosition=function (useTransition) {
		}
		me.__80.appendChild(me.__82);
		el=me.__81=document.createElement('div');
		els=me.__81__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc790\ub3d9\ud68c\uc804\ud0dd\uc2a4\ud2b8";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 20px;';
		hs+='color : rgba(0,0,0,1);';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : -90px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		hs+='line-height:14px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__81.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc790\ub3d9\ud68c\uc804", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__81.ggUpdateText();
		el.appendChild(els);
		me.__81.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__81.ggUpdatePosition=function (useTransition) {
		}
		me.__80.appendChild(me.__81);
		me.__62.appendChild(me.__80);
		el=me.__79=document.createElement('div');
		el.ggTimestamp=skin.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=500;
		el.ggId="\uc790\ub3d9\ud68c\uc804\ud0c0\uc774\uba38";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -502px;';
		hs+='position : absolute;';
		hs+='top : 251px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__79.ggIsActive=function() {
			return (me.__79.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me.__79.ggTimestamp) / me.__79.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__79.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.__79.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__79.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__79.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__79.style.transition='';
				if (me.__79.ggCurrentLogicStateVisible == 0) {
					me.__79.style.visibility=(Number(me.__79.style.opacity)>0||!me.__79.style.opacity)?'inherit':'hidden';
					me.__79.ggVisible=true;
				}
				else {
					me.__79.style.visibility=(Number(me.__79.style.opacity)>0||!me.__79.style.opacity)?'inherit':'hidden';
					me.__79.ggVisible=true;
				}
			}
		}
		me.__79.logicBlock_visible();
		me.__79.ggActivate=function () {
			me.__81.style.transition='none';
			me.__81.style.visibility='hidden';
			me.__81.ggVisible=false;
		}
		me.__79.ggCurrentLogicStateVisible = -1;
		me.__79.ggUpdateConditionTimer=function () {
			me.__79.logicBlock_visible();
		}
		me.__79.ggUpdatePosition=function (useTransition) {
		}
		me.__62.appendChild(me.__79);
		el=me.__75=document.createElement('div');
		el.ggId="\uc544\uc774\ucf58-\uc548\ub0b4\uc0ac\ud56d";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 43px;';
		hs+='left : calc(50% - ((43px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 430px;';
		hs+='visibility : inherit;';
		hs+='width : 43px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__75.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__75.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_short') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('vis_skin_show') == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__75.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__75.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__75.style.transition='';
				if (me.__75.ggCurrentLogicStateVisible == 0) {
					me.__75.style.visibility="hidden";
					me.__75.ggVisible=false;
				}
				else if (me.__75.ggCurrentLogicStateVisible == 1) {
					me.__75.style.visibility="hidden";
					me.__75.ggVisible=false;
				}
				else {
					me.__75.style.visibility=(Number(me.__75.style.opacity)>0||!me.__75.style.opacity)?'inherit':'hidden';
					me.__75.ggVisible=true;
				}
			}
		}
		me.__75.logicBlock_visible();
		me.__75.onclick=function (e) {
			me.__78.ggVisible = !me.__78.ggVisible;
			var flag=me.__78.ggVisible;
			me.__78.style.transition='none';
			me.__78.style.visibility=((flag)&&(Number(me.__78.style.opacity)>0||!me.__78.style.opacity))?'inherit':'hidden';
			if (
				(
					((player.getViewerSize().width > 460))
				)
			) {
				me.__16.style.transition='none';
				me.__16.style.visibility=(Number(me.__16.style.opacity)>0||!me.__16.style.opacity)?'inherit':'hidden';
				me.__16.ggVisible=true;
			}
			if (
				(
					((player.getViewerSize().width <= 460))
				)
			) {
				me.__6.style.transition='none';
				me.__6.style.visibility=(Number(me.__6.style.opacity)>0||!me.__6.style.opacity)?'inherit':'hidden';
				me.__6.ggVisible=true;
			}
		}
		me.__75.onmouseover=function (e) {
			me.elementMouseOver['_75']=true;
		}
		me.__75.onmousemove=function (e) {
			me.__76.style.transition='none';
			me.__76.style.visibility=(Number(me.__76.style.opacity)>0||!me.__76.style.opacity)?'inherit':'hidden';
			me.__76.ggVisible=true;
		}
		me.__75.onmouseout=function (e) {
			me.elementMouseOver['_75']=false;
		}
		me.__75.ggCurrentLogicStateVisible = -1;
		me.__75.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_75']) {
				me.__76.style.transition='none';
				me.__76.style.visibility=(Number(me.__76.style.opacity)>0||!me.__76.style.opacity)?'inherit':'hidden';
				me.__76.ggVisible=true;
			}
		}
		me.__75.ggUpdatePosition=function (useTransition) {
		}
		el=me.__78=document.createElement('div');
		el.ggId="\uc548\ub0b4\uc0ac\ud56d\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__78.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__78.ggUpdatePosition=function (useTransition) {
		}
		me.__75.appendChild(me.__78);
		el=me.__77=document.createElement('div');
		els=me.__77__img=document.createElement('img');
		els.className='ggskin ggskin__77';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uc548\ub0b4\uc0ac\ud56d";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.6,sy:0.6,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__77.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__77.ggUpdatePosition=function (useTransition) {
		}
		me.__75.appendChild(me.__77);
		el=me.__76=document.createElement('div');
		els=me.__76__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc548\ub0b4\uc0ac\ud56d\ud0dd\uc2a4\ud2b8";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 20px;';
		hs+='color : rgba(0,0,0,1);';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : -90px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		hs+='line-height:14px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__76.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc0ac\uc6a9\uc548\ub0b4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__76.ggUpdateText();
		el.appendChild(els);
		me.__76.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__76.ggUpdatePosition=function (useTransition) {
		}
		me.__75.appendChild(me.__76);
		me.__62.appendChild(me.__75);
		el=me.__74=document.createElement('div');
		el.ggTimestamp=skin.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=500;
		el.ggId="\uc548\ub0b4\uc0ac\ud56d\ud0c0\uc774\uba38";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -502px;';
		hs+='position : absolute;';
		hs+='top : 251px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__74.ggIsActive=function() {
			return (me.__74.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me.__74.ggTimestamp) / me.__74.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__74.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.__74.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__74.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__74.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__74.style.transition='';
				if (me.__74.ggCurrentLogicStateVisible == 0) {
					me.__74.style.visibility=(Number(me.__74.style.opacity)>0||!me.__74.style.opacity)?'inherit':'hidden';
					me.__74.ggVisible=true;
				}
				else {
					me.__74.style.visibility=(Number(me.__74.style.opacity)>0||!me.__74.style.opacity)?'inherit':'hidden';
					me.__74.ggVisible=true;
				}
			}
		}
		me.__74.logicBlock_visible();
		me.__74.ggActivate=function () {
			me.__76.style.transition='none';
			me.__76.style.visibility='hidden';
			me.__76.ggVisible=false;
		}
		me.__74.ggCurrentLogicStateVisible = -1;
		me.__74.ggUpdateConditionTimer=function () {
			me.__74.logicBlock_visible();
		}
		me.__74.ggUpdatePosition=function (useTransition) {
		}
		me.__62.appendChild(me.__74);
		el=me.__69=document.createElement('div');
		el.ggId="\uc544\uc774\ucf58-\ub9c1\ud06c\ubcf5\uc0ac";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 43px;';
		hs+='left : calc(50% - ((43px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 377px;';
		hs+='visibility : inherit;';
		hs+='width : 43px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__69.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__69.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_short') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('vis_skin_show') == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__69.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__69.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__69.style.transition='';
				if (me.__69.ggCurrentLogicStateVisible == 0) {
					me.__69.style.visibility="hidden";
					me.__69.ggVisible=false;
				}
				else if (me.__69.ggCurrentLogicStateVisible == 1) {
					me.__69.style.visibility="hidden";
					me.__69.ggVisible=false;
				}
				else {
					me.__69.style.visibility=(Number(me.__69.style.opacity)>0||!me.__69.style.opacity)?'inherit':'hidden';
					me.__69.ggVisible=true;
				}
			}
		}
		me.__69.logicBlock_visible();
		me.__69.onclick=function (e) {
			"";
 let url = '';
  const textarea = document.createElement("textarea");
  document.body.appendChild(textarea);
  url = window.document.location.href;
  textarea.value = url;
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
			me.__73.ggVisible = !me.__73.ggVisible;
			var flag=me.__73.ggVisible;
			me.__73.style.transition='none';
			me.__73.style.visibility=((flag)&&(Number(me.__73.style.opacity)>0||!me.__73.style.opacity))?'inherit':'hidden';
			me.__71.style.transition='none';
			me.__71.style.visibility=(Number(me.__71.style.opacity)>0||!me.__71.style.opacity)?'inherit':'hidden';
			me.__71.ggVisible=true;
		}
		me.__69.onmouseover=function (e) {
			me.elementMouseOver['_69']=true;
		}
		me.__69.onmousemove=function (e) {
			me.__72.style.transition='none';
			me.__72.style.visibility=(Number(me.__72.style.opacity)>0||!me.__72.style.opacity)?'inherit':'hidden';
			me.__72.ggVisible=true;
		}
		me.__69.onmouseout=function (e) {
			me.elementMouseOver['_69']=false;
		}
		me.__69.ggCurrentLogicStateVisible = -1;
		me.__69.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_69']) {
				me.__72.style.transition='none';
				me.__72.style.visibility=(Number(me.__72.style.opacity)>0||!me.__72.style.opacity)?'inherit':'hidden';
				me.__72.ggVisible=true;
			}
		}
		me.__69.ggUpdatePosition=function (useTransition) {
		}
		el=me.__73=document.createElement('div');
		el.ggId="\ub9c1\ud06c\ubcf5\uc0ac\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__73.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__73.ggUpdatePosition=function (useTransition) {
		}
		me.__69.appendChild(me.__73);
		el=me.__72=document.createElement('div');
		els=me.__72__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ub9c1\ud06c\ubcf5\uc0ac\ud0dd\uc2a4\ud2b8";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 20px;';
		hs+='color : rgba(34,34,34,1);';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : -90px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		hs+='line-height:14px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__72.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ub9c1\ud06c\ubcf5\uc0ac\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__72.ggUpdateText();
		el.appendChild(els);
		me.__72.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__72.ggUpdatePosition=function (useTransition) {
		}
		me.__69.appendChild(me.__72);
		el=me.__71=document.createElement('div');
		els=me.__71__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubcf5\uc0ac\uc644\ub8cc\ud0dd\uc2a4\ud2b8";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 20px;';
		hs+='color : rgba(34,34,34,1);';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : -90px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		hs+='line-height:14px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__71.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ubcf5\uc0ac\uc644\ub8cc\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__71.ggUpdateText();
		el.appendChild(els);
		me.__71.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__71.ggUpdatePosition=function (useTransition) {
		}
		me.__69.appendChild(me.__71);
		el=me.__70=document.createElement('div');
		els=me.__70__img=document.createElement('img');
		els.className='ggskin ggskin__70';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAA9hAAAPYQGoP6dpAAABX0lEQVR4nO3d0Y4BMRiA0al4/1fuXgubnTLDt3LONSL58itFZ8w5Nzoun34C3BIkRpAYQWIEiREkRpAYQWIEiREk5rpy4zGGfZZtG2duN5mQGEFiBIkRJGZpUf/FOOAxqt7+JsaExAgSI0iMIDGCxAgSI0iMIDGCxBzxSX2vb9m6n2M8tzkx5/zzjiYkRpAYQWIEiXnnov7Iv9y63/Od+rO/PzAhMYLECBIjSIwgMYLECBIjSIwgMYLECBIjSIwgMYLECBIjSIwgMYLECBIjSIwgMYLECBIjSIwgMYLECBIjSIwgMYLECBIjSIwgMYLECBIjSIwgMYLECBJzxP/Uv+VQmQQTEiNIjCAxgsSsLuqvHBZj8d9hKc'+
			'grV5Z5dCyeCyPf85IVI0iMIDGCxAgSI0iMIDGCxHz0mFiXcr1nQmIEiREkRpCYU68NzjoTEiNIjCAxgsQIEiNIjCAxgsT8AMhtHc4x+ExaAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ub9c1\ud06c\ubcf5\uc0ac";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.6,sy:0.6,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__70.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__70.onclick=function (e) {
			me.__72.style.transition='none';
			me.__72.style.visibility='hidden';
			me.__72.ggVisible=false;
		}
		me.__70.ggUpdatePosition=function (useTransition) {
		}
		me.__69.appendChild(me.__70);
		me.__62.appendChild(me.__69);
		el=me.__68=document.createElement('div');
		el.ggTimestamp=skin.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=500;
		el.ggId="\ub9c1\ud06c\ubcf5\uc0ac\ud0c0\uc774\uba38";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -234px;';
		hs+='position : absolute;';
		hs+='top : 157px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__68.ggIsActive=function() {
			return (me.__68.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me.__68.ggTimestamp) / me.__68.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__68.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.__68.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__68.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__68.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__68.style.transition='';
				if (me.__68.ggCurrentLogicStateVisible == 0) {
					me.__68.style.visibility=(Number(me.__68.style.opacity)>0||!me.__68.style.opacity)?'inherit':'hidden';
					me.__68.ggVisible=true;
				}
				else {
					me.__68.style.visibility=(Number(me.__68.style.opacity)>0||!me.__68.style.opacity)?'inherit':'hidden';
					me.__68.ggVisible=true;
				}
			}
		}
		me.__68.logicBlock_visible();
		me.__68.ggActivate=function () {
			me.__71.style.transition='none';
			me.__71.style.visibility='hidden';
			me.__71.ggVisible=false;
			me.__72.style.transition='none';
			me.__72.style.visibility='hidden';
			me.__72.ggVisible=false;
		}
		me.__68.ggCurrentLogicStateVisible = -1;
		me.__68.ggUpdateConditionTimer=function () {
			me.__68.logicBlock_visible();
		}
		me.__68.ggUpdatePosition=function (useTransition) {
		}
		me.__62.appendChild(me.__68);
		el=me.__64=document.createElement('div');
		el.ggId="\uc544\uc774\ucf58-\uc804\uccb4\ud654\uba74";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 43px;';
		hs+='left : calc(50% - ((43px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 324px;';
		hs+='visibility : inherit;';
		hs+='width : 43px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__64.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__64.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_short') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('vis_skin_show') == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__64.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__64.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__64.style.transition='';
				if (me.__64.ggCurrentLogicStateVisible == 0) {
					me.__64.style.visibility="hidden";
					me.__64.ggVisible=false;
				}
				else if (me.__64.ggCurrentLogicStateVisible == 1) {
					me.__64.style.visibility="hidden";
					me.__64.ggVisible=false;
				}
				else {
					me.__64.style.visibility=(Number(me.__64.style.opacity)>0||!me.__64.style.opacity)?'inherit':'hidden';
					me.__64.ggVisible=true;
				}
			}
		}
		me.__64.logicBlock_visible();
		me.__64.onclick=function (e) {
			player.toggleFullscreen();
			me.__67.ggVisible = !me.__67.ggVisible;
			var flag=me.__67.ggVisible;
			me.__67.style.transition='none';
			me.__67.style.visibility=((flag)&&(Number(me.__67.style.opacity)>0||!me.__67.style.opacity))?'inherit':'hidden';
		}
		me.__64.onmouseover=function (e) {
			me.elementMouseOver['_64']=true;
		}
		me.__64.onmousemove=function (e) {
			me.__65.style.transition='none';
			me.__65.style.visibility=(Number(me.__65.style.opacity)>0||!me.__65.style.opacity)?'inherit':'hidden';
			me.__65.ggVisible=true;
		}
		me.__64.onmouseout=function (e) {
			me.elementMouseOver['_64']=false;
		}
		me.__64.ggCurrentLogicStateVisible = -1;
		me.__64.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_64']) {
				me.__65.style.transition='none';
				me.__65.style.visibility=(Number(me.__65.style.opacity)>0||!me.__65.style.opacity)?'inherit':'hidden';
				me.__65.ggVisible=true;
			}
		}
		me.__64.ggUpdatePosition=function (useTransition) {
		}
		el=me.__67=document.createElement('div');
		el.ggId="\uc804\uccb4\ud654\uba74\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__67.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__67.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsFullscreen() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__67.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__67.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__67.style.transition='';
				if (me.__67.ggCurrentLogicStateVisible == 0) {
					me.__67.style.visibility="hidden";
					me.__67.ggVisible=false;
				}
				else {
					me.__67.style.visibility="hidden";
					me.__67.ggVisible=false;
				}
			}
		}
		me.__67.logicBlock_visible();
		me.__67.ggUpdatePosition=function (useTransition) {
		}
		me.__64.appendChild(me.__67);
		el=me.__66=document.createElement('div');
		els=me.__66__img=document.createElement('img');
		els.className='ggskin ggskin__66';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAA9hAAAPYQGoP6dpAAAD0UlEQVR4nO2c207VQBSGv228NxAwHjAQI2o8QDwlRG+88M4n4BF8Ax/MCzzENyBR4yFEAU9BEIm+Qb0YagBn9t6ddqZ/m/UlvdmdWdOuj9J275k1KIoCQ4djbR+AcRgTIoYJEcOEiGFCxDAhYpgQMUyIGCZEDBMihgkRw4SoURRF5Q0oEm8Pc50/8CTheRRAUSW3doWIYULEMCFimBA1Et3UPwCnWzqlXCwAP2n4pp7yKWsNOJszQxkZWwZCQgrgI3AuX56yMEyG9/O2hOwFPl8HZnNlKzGjZCz69rUl5AbwK7BvE5jLkrJ0jCMD3/62hLB/UKGD/gycT5qydIwrA1+bNoUAXAN2Am2+AhfS5CwZo2QsHGkvJw'+
			'TgCrAdaPcduNhszpJRVQa+tgpCAC4DW4G2W/v7lYmRga+9ihCAS7grwtf+B+5KUiRWBr4+SkIA5nH3Dl+fHeBqXM6SUUcGvn5qQsA9XX0ZcpKL4a5ZqSsDX19FIeDeQzYDfXdx7zFt0oQMfP1VhYB7Y98I9N8Dbo4Zp2makoEvhrIQcN9tfQrE+A3crhCrCZqUgS+OuhBw3wKvBeL8AZYqxoulaRn4YnVBCMAZ3O8mISl3I2JWIYUMfPG6IgTgFPA+EO9FZMxxeRoYt44MfDGr5PZ45KCPaxzwQbaB+8BLDr+PrAHLDY0RYhkn/eDT3S7wAHhTI2693EReIU0zDbzG/UV9A2ZSDOJhElilmSsjSI5/WSmYAp7hvm7JySSwAlxPNUCV3A5iEjwYDBIcdn+pkmObBiSGCRHDhIhhQsQwIWKYEDFMiBgmRAwTIoYJEcOE'+
			'iGFCxDAhYpgQMUyIGCZEDBMihgkRw4SIYULEMCFimBAxTIgYSkIWcBPWJjKPO4+b5zuVeVw/IjMXD85EXyWflBnc1NUCeIWb0lqXiaNbjqmk654tFt+ygBxSpvl/5v1b4GTNuJ1ejjBsjcZKnayMwfPAuO9wyyRi6ayQKvVDUnAPtzDIN36dAmydFNK2jJIlwlJiC7B1ToiKjJI7uMWmvuOJKcDWKSFqMkpu0VwBts4IUZVR0lQBtk4IUZdRskj9AmzyQlItP05F3QJs0kK6JqOkTgE2WSFdlVESW4BNUkjXZZTEFGCTE9IXGSVVC7BJCembjJIqBdhkhPRVRskc4xVgkxHSZxkls4wuwCYjpO8ySkYVYJMV0kcZJcMKsEkK6bOMkmEF2OSE1N0epc3lP05kOJdKQpRmnRhoTQMyMCFymBAxoirKGemwK0QMEyKGCR'+
			'HDhIhhQsQwIWKYEDFMiBgmRAwTIsZfnQGwNRLcyH4AAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uc804\uccb4\ud654\uba74";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.6,sy:0.6,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__66.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__66.ggUpdatePosition=function (useTransition) {
		}
		me.__64.appendChild(me.__66);
		el=me.__65=document.createElement('div');
		els=me.__65__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc804\uccb4\ud654\uba74\ud0dd\uc2a4\ud2b8";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 20px;';
		hs+='color : rgba(34,34,34,1);';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : -90px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		hs+='line-height:14px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__65.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc804\uccb4\ud654\uba74", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__65.ggUpdateText();
		el.appendChild(els);
		me.__65.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__65.ggUpdatePosition=function (useTransition) {
		}
		me.__64.appendChild(me.__65);
		me.__62.appendChild(me.__64);
		el=me.__63=document.createElement('div');
		el.ggTimestamp=skin.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=500;
		el.ggId="\uc804\uccb4\ud654\uba74\ud0c0\uc774\uba38";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -502px;';
		hs+='position : absolute;';
		hs+='top : 251px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__63.ggIsActive=function() {
			return (me.__63.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me.__63.ggTimestamp) / me.__63.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__63.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.__63.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__63.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__63.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__63.style.transition='';
				if (me.__63.ggCurrentLogicStateVisible == 0) {
					me.__63.style.visibility=(Number(me.__63.style.opacity)>0||!me.__63.style.opacity)?'inherit':'hidden';
					me.__63.ggVisible=true;
				}
				else {
					me.__63.style.visibility=(Number(me.__63.style.opacity)>0||!me.__63.style.opacity)?'inherit':'hidden';
					me.__63.ggVisible=true;
				}
			}
		}
		me.__63.logicBlock_visible();
		me.__63.ggActivate=function () {
			me.__65.style.transition='none';
			me.__65.style.visibility='hidden';
			me.__65.ggVisible=false;
		}
		me.__63.ggCurrentLogicStateVisible = -1;
		me.__63.ggUpdateConditionTimer=function () {
			me.__63.logicBlock_visible();
		}
		me.__63.ggUpdatePosition=function (useTransition) {
		}
		me.__62.appendChild(me.__63);
		me._rectangle_2.appendChild(me.__62);
		me.__59.appendChild(me._rectangle_2);
		el=me.__60=document.createElement('div');
		el.ggId="\ud654\uc0b4\ud45c";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 43px;';
		hs+='left : calc(50% - ((43px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 219px;';
		hs+='visibility : inherit;';
		hs+='width : 43px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__60.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__60.ggUpdatePosition=function (useTransition) {
		}
		el=me._up=document.createElement('div');
		els=me._up__img=document.createElement('img');
		els.className='ggskin ggskin_up';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAYAAABxLuKEAAAACXBIWXMAAC4jAAAuIwF4pT92AAAEWUlEQVR4nO2bW28VVRiGn0pL7QFN/AEa7/gbJt61HGyLXngi4oUxIYqiBRFKoAkXApZSEk2gHEREKDQx/gb/gfHSw6XxQA8Uosj24p1JLM43h2+vmenFem52Zs9a36z97vWdVnd7Op0Okf/zWNsL2KhEYQyiMAZRGIMojEEUxiAKYxCFMYjCGERhDKIwBlEYgyiMQRTGoDfrzWefebrpdfQDzwPfAz81+eAff/4l8/2NsGOGgEngW+AU8ES7yxGZO6ZBHgc+BD5OrseS193AShsLSml7xxwG3ntkHWPANbSTWqMtYXqAaeADYDjj/ijwtXGvEdoQZhg4iuJKX864EeArWto5TQuzCdiH4kqZ+DYKXKWFndOkMA'+
			'PAR8AxFHTLshO4SMPZqqmsNIR2yRHn/AkUl94AlkMtKo+mdswB4P0ubYwDV2jIrZoQ5hiwnzBBdAdwPZCtXOoUZgA4geJKlZhSxAgNiFOXMAMopuxDmSg0oyiV1+ZWdQizGXgXlfn9NdhP2QZcArbUYTx0VhpC1exUYLsW40AHeBNYCmk4pDB9KPtMBrRZhgm083cTsPEM6UpTKKbklfl5/AnMAquOuWOoQg4WkEMI04cawkn8C1tCaf0d4GXgocPGdtR4DjrXsI5uhRlG6XgSv1veR03lueT6G2CX01awVN6NMJvQN3wQvyh3UfE3C/z9n/dvI/e457C5DfiSLlO5V5hBlI6n8afke4mNebJdZxF4FV9vtIMuG0/PN512yYe8D0U75SBwtmDcLdQ8zlO9XplIXvfgENezYw4hF/KyjLrsIlFSFlCd4nGrCeAyDreq'+
			'KsxRVOp7/XcFud/pivNuAK8B/zieuRPHSWBZYbagD3QYf51yN5l/xjl/AXgRVbpVSc+QS4tTRph+VLjtLzk+izUUaOeAv5w2QNlqHHjgmDtChb8+FH3QzUiQKfzZZw21CufwucKjLAIv4auQtwNfUCKQ5wkziALtdMG4PFZRBvuc9XVKt9xGvZEnlb8AXACezBtkpetelE67OY5cobuYUkSayi9SPRnsQgXqHuBO1gBLmFngdVSzeFhGvU9doqQsIHGuIrevwhjwFPBc1k1LmB/wN2NLrO996uYmqpxvUN3lf7duWIbOAnsrPgTUEB5B2SdkTCniFtUbz/PA29bNPIXn0BFl2dS4hoq/uQpzQpI2nvdLjJ1HMfRXa0DR1juTGChKs2mdch7fWUooFoFXyM9W19AX+FueoTJN5Mnk9RPj/irKPjMlbDVBmq0usL67fo'+
			'jOat6ixBFo2WB1kuzUfQfFlJmSdpoibTzXkusOaib3UvJcuMqxw2mk+qfJ9TJwnPpTspebSJDr6ODqAPBH2clVz2Nm0C47hdznM9qNKUUsoPbhO3ICbRY9Wf8sWvCrzV5gK6p1QvQ+rWL9ajNTmEj7P07csERhDKIwBlEYgyiMQRTGIApjEIUxiMIYRGEMojAGURiDKIxBFMYgCmPwL1w8xZQZ/Qx/AAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ud654\uc0b4\ud45c\uc544\uc774\ucf58up";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:90,sx:0.6,sy:0.6,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._up.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._up.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_short') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._up.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._up.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._up.style.transition='';
				if (me._up.ggCurrentLogicStateVisible == 0) {
					me._up.style.visibility="hidden";
					me._up.ggVisible=false;
				}
				else {
					me._up.style.visibility=(Number(me._up.style.opacity)>0||!me._up.style.opacity)?'inherit':'hidden';
					me._up.ggVisible=true;
				}
			}
		}
		me._up.logicBlock_visible();
		me._up.onclick=function (e) {
			player.setVariableValue('vis_short', true);
		}
		me._up.ggUpdatePosition=function (useTransition) {
		}
		me.__60.appendChild(me._up);
		el=me.__61=document.createElement('div');
		el.ggId="\ud654\uc0b4\ud45c\ub2e4\uc6b4";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 43px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((43px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 43px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__61.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__61.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((me.elementMouseOver['_61'] == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getVariableValue('vis_short') == true))
			)
			{
				newLogicStatePosition = 1;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__61.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__61.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__61.style.transition='left 500ms ease 500ms, top 500ms ease 500ms, opacity 500ms ease 0ms';
				if (me.__61.ggCurrentLogicStatePosition == 0) {
					me.__61.style.left='-10px';
					me.__61.style.top = 'calc(50% - (43px / 2))';
				}
				else if (me.__61.ggCurrentLogicStatePosition == 1) {
					me.__61.style.left='20px';
					me.__61.style.top = 'calc(50% - (43px / 2))';
				}
				else {
					me.__61.style.left='0px';
					me.__61.style.top='calc(50% - ((43px + 0px) / 2) + 0px)';
				}
			}
		}
		me.__61.logicBlock_position();
		me.__61.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_short') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('vis_long') == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__61.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__61.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__61.style.transition='left 500ms ease 500ms, top 500ms ease 500ms, opacity 500ms ease 0ms';
				if (me.__61.ggCurrentLogicStateVisible == 0) {
					me.__61.style.visibility=(Number(me.__61.style.opacity)>0||!me.__61.style.opacity)?'inherit':'hidden';
					me.__61.ggVisible=true;
				}
				else if (me.__61.ggCurrentLogicStateVisible == 1) {
					me.__61.style.visibility="hidden";
					me.__61.ggVisible=false;
				}
				else {
					me.__61.style.visibility="hidden";
					me.__61.ggVisible=false;
				}
			}
		}
		me.__61.logicBlock_visible();
		me.__61.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_short') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				((player.getVariableValue('vis_long') == true))
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__61.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__61.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__61.style.transition='left 500ms ease 500ms, top 500ms ease 500ms, opacity 500ms ease 0ms';
				if (me.__61.ggCurrentLogicStateAlpha == 0) {
					me.__61.style.visibility=me.__61.ggVisible?'inherit':'hidden';
					me.__61.style.opacity=1;
				}
				else if (me.__61.ggCurrentLogicStateAlpha == 1) {
					setTimeout(function() { if (me.__61.style.opacity == 0.0) { me.__61.style.visibility="hidden"; } }, 505);
					me.__61.style.opacity=0;
				}
				else {
					setTimeout(function() { if (me.__61.style.opacity == 0.0) { me.__61.style.visibility="hidden"; } }, 505);
					me.__61.style.opacity=0;
				}
			}
		}
		me.__61.logicBlock_alpha();
		me.__61.onmouseover=function (e) {
			me.elementMouseOver['_61']=true;
			me.__61.logicBlock_position();
		}
		me.__61.onmouseout=function (e) {
			me.elementMouseOver['_61']=false;
			me.__61.logicBlock_position();
		}
		me.__61.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_3=document.createElement('div');
		el.ggId="Rectangle 3";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: 0;';
		hs+='background : rgba(255,255,255,0.470588);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_3.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_short') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._rectangle_3.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._rectangle_3.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._rectangle_3.style.transition='';
				if (me._rectangle_3.ggCurrentLogicStateVisible == 0) {
					me._rectangle_3.style.visibility=(Number(me._rectangle_3.style.opacity)>0||!me._rectangle_3.style.opacity)?'inherit':'hidden';
					me._rectangle_3.ggVisible=true;
				}
				else {
					me._rectangle_3.style.visibility="hidden";
					me._rectangle_3.ggVisible=false;
				}
			}
		}
		me._rectangle_3.logicBlock_visible();
		me._rectangle_3.onclick=function (e) {
			player.setVariableValue('vis_long', true);
			player.setVariableValue('vis_short', false);
		}
		me._rectangle_3.ggUpdatePosition=function (useTransition) {
		}
		el=me._dowm=document.createElement('div');
		els=me._dowm__img=document.createElement('img');
		els.className='ggskin ggskin_dowm';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAYAAABxLuKEAAAACXBIWXMAAC4jAAAuIwF4pT92AAAEWUlEQVR4nO2bW28VVRiGn0pL7QFN/AEa7/gbJt61HGyLXngi4oUxIYqiBRFKoAkXApZSEk2gHEREKDQx/gb/gfHSw6XxQA8Uosj24p1JLM43h2+vmenFem52Zs9a36z97vWdVnd7Op0Okf/zWNsL2KhEYQyiMAZRGIMojEEUxiAKYxCFMYjCGERhDKIwBlEYgyiMQRTGoDfrzWefebrpdfQDzwPfAz81+eAff/4l8/2NsGOGgEngW+AU8ES7yxGZO6ZBHgc+BD5OrseS193AShsLSml7xxwG3ntkHWPANbSTWqMtYXqAaeADYDjj/ijwtXGvEdoQZhg4iuJKX864EeArWto5TQuzCdiH4kqZ+DYKXKWFndOkMA'+
			'PAR8AxFHTLshO4SMPZqqmsNIR2yRHn/AkUl94AlkMtKo+mdswB4P0ubYwDV2jIrZoQ5hiwnzBBdAdwPZCtXOoUZgA4geJKlZhSxAgNiFOXMAMopuxDmSg0oyiV1+ZWdQizGXgXlfn9NdhP2QZcArbUYTx0VhpC1exUYLsW40AHeBNYCmk4pDB9KPtMBrRZhgm083cTsPEM6UpTKKbklfl5/AnMAquOuWOoQg4WkEMI04cawkn8C1tCaf0d4GXgocPGdtR4DjrXsI5uhRlG6XgSv1veR03lueT6G2CX01awVN6NMJvQN3wQvyh3UfE3C/z9n/dvI/e457C5DfiSLlO5V5hBlI6n8afke4mNebJdZxF4FV9vtIMuG0/PN512yYe8D0U75SBwtmDcLdQ8zlO9XplIXvfgENezYw4hF/KyjLrsIlFSFlCd4nGrCeAyDreq'+
			'KsxRVOp7/XcFud/pivNuAK8B/zieuRPHSWBZYbagD3QYf51yN5l/xjl/AXgRVbpVSc+QS4tTRph+VLjtLzk+izUUaOeAv5w2QNlqHHjgmDtChb8+FH3QzUiQKfzZZw21CufwucKjLAIv4auQtwNfUCKQ5wkziALtdMG4PFZRBvuc9XVKt9xGvZEnlb8AXACezBtkpetelE67OY5cobuYUkSayi9SPRnsQgXqHuBO1gBLmFngdVSzeFhGvU9doqQsIHGuIrevwhjwFPBc1k1LmB/wN2NLrO996uYmqpxvUN3lf7duWIbOAnsrPgTUEB5B2SdkTCniFtUbz/PA29bNPIXn0BFl2dS4hoq/uQpzQpI2nvdLjJ1HMfRXa0DR1juTGChKs2mdch7fWUooFoFXyM9W19AX+FueoTJN5Mnk9RPj/irKPjMlbDVBmq0usL67fo'+
			'jOat6ixBFo2WB1kuzUfQfFlJmSdpoibTzXkusOaib3UvJcuMqxw2mk+qfJ9TJwnPpTspebSJDr6ODqAPBH2clVz2Nm0C47hdznM9qNKUUsoPbhO3ICbRY9Wf8sWvCrzV5gK6p1QvQ+rWL9ajNTmEj7P07csERhDKIwBlEYgyiMQRTGIApjEIUxiMIYRGEMojAGURiDKIxBFMYgCmPwL1w8xZQZ/Qx/AAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ud654\uc0b4\ud45c\uc544\uc774\ucf58dowm";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:-90,sx:0.6,sy:0.6,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='z-index: 9;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._dowm.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dowm.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_short') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._dowm.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._dowm.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._dowm.style.transition='';
				if (me._dowm.ggCurrentLogicStateVisible == 0) {
					me._dowm.style.visibility=(Number(me._dowm.style.opacity)>0||!me._dowm.style.opacity)?'inherit':'hidden';
					me._dowm.ggVisible=true;
				}
				else {
					me._dowm.style.visibility="hidden";
					me._dowm.ggVisible=false;
				}
			}
		}
		me._dowm.logicBlock_visible();
		me._dowm.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_3.appendChild(me._dowm);
		me.__61.appendChild(me._rectangle_3);
		me.__60.appendChild(me.__61);
		me.__59.appendChild(me.__60);
		me.divSkin.appendChild(me.__59);
		el=me.__54=document.createElement('div');
		el.ggId="\uc2a4\ud0a8 \ubcf4\uc774\uae30 \uc544\uc774\ucf58";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 999;';
		hs+='cursor : pointer;';
		hs+='height : 48px;';
		hs+='position : absolute;';
		hs+='right : 15px;';
		hs+='top : 15px;';
		hs+='visibility : hidden;';
		hs+='width : 48px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__54.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__54.onclick=function (e) {
			me.__.style.transition='none';
			me.__.style.visibility=(Number(me.__.style.opacity)>0||!me.__.style.opacity)?'inherit':'hidden';
			me.__.ggVisible=true;
			if (
				(
					((player.getViewerSize().width > 460))
				)
			||
				(
					((player.getIsMobile() == false))
				)
			) {
				me.__47.style.transition='none';
				me.__47.style.visibility=(Number(me.__47.style.opacity)>0||!me.__47.style.opacity)?'inherit':'hidden';
				me.__47.ggVisible=true;
			}
			var list=me.findElements("ht_node",true);
			while(list.length>0) {
				var e=list.pop();
				e.style.transition='none';
				e.style.visibility=(Number(e.style.opacity)>0||!e.style.opacity)?'inherit':'hidden';
				e.ggVisible=true;
			}
			me.__99.style.transition='none';
			me.__99.style.visibility=(Number(me.__99.style.opacity)>0||!me.__99.style.opacity)?'inherit':'hidden';
			me.__99.ggVisible=true;
			me.__60.style.transition='none';
			me.__60.style.visibility=(Number(me.__60.style.opacity)>0||!me.__60.style.opacity)?'inherit':'hidden';
			me.__60.ggVisible=true;
			me._rectangle_2.style.transition='none';
			me._rectangle_2.style.visibility=(Number(me._rectangle_2.style.opacity)>0||!me._rectangle_2.style.opacity)?'inherit':'hidden';
			me._rectangle_2.ggVisible=true;
			me.__54.style.transition='none';
			me.__54.style.visibility='hidden';
			me.__54.ggVisible=false;
			if (
				(
					((player.getViewerSize().width <= 460))
				)
			||
				(
					((player.getIsMobile() == true))
				)
			) {
				me.__44.style.transition='none';
				me.__44.style.visibility=(Number(me.__44.style.opacity)>0||!me.__44.style.opacity)?'inherit':'hidden';
				me.__44.ggVisible=true;
			}
		}
		me.__54.onmouseover=function (e) {
			me.elementMouseOver['_54']=true;
		}
		me.__54.onmousemove=function (e) {
			me.__56.style.transition='none';
			me.__56.style.visibility=(Number(me.__56.style.opacity)>0||!me.__56.style.opacity)?'inherit':'hidden';
			me.__56.ggVisible=true;
		}
		me.__54.onmouseout=function (e) {
			me.elementMouseOver['_54']=false;
		}
		me.__54.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_54']) {
				me.__56.style.transition='none';
				me.__56.style.visibility=(Number(me.__56.style.opacity)>0||!me.__56.style.opacity)?'inherit':'hidden';
				me.__56.ggVisible=true;
			}
		}
		me.__54.ggUpdatePosition=function (useTransition) {
		}
		el=me.__58=document.createElement('div');
		el.ggId="\uc2a4\ud0a8\ubcf4\uae30 \ubc30\uacbd";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: 0;';
		hs+='background : rgba(255,255,255,0.470588);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__58.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__58.ggUpdatePosition=function (useTransition) {
		}
		me.__54.appendChild(me.__58);
		el=me.__57=document.createElement('div');
		els=me.__57__img=document.createElement('img');
		els.className='ggskin ggskin__57';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uc2a4\ud0a8 \ubcf4\uae30";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:180,sx:0.6,sy:0.6,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='z-index: 9;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__57.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__57.ggUpdatePosition=function (useTransition) {
		}
		me.__54.appendChild(me.__57);
		el=me.__56=document.createElement('div');
		els=me.__56__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc2a4\ud0a8 \ubcf4\uae30 \ud0dd\uc2a4\ud2b8";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 20px;';
		hs+='color : rgba(34,34,34,1);';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : -90px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		hs+='line-height:14px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__56.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc2a4\ud0a8\ubcf4\uae30", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__56.ggUpdateText();
		el.appendChild(els);
		me.__56.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__56.ggUpdatePosition=function (useTransition) {
		}
		me.__54.appendChild(me.__56);
		el=me.__55=document.createElement('div');
		el.ggTimestamp=skin.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=500;
		el.ggId="\uc2a4\ud0a8\ubcf4\uae30\ud0c0\uc774\uba38";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -508px;';
		hs+='position : absolute;';
		hs+='top : 234px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__55.ggIsActive=function() {
			return (me.__55.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me.__55.ggTimestamp) / me.__55.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__55.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.__55.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__55.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__55.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__55.style.transition='';
				if (me.__55.ggCurrentLogicStateVisible == 0) {
					me.__55.style.visibility=(Number(me.__55.style.opacity)>0||!me.__55.style.opacity)?'inherit':'hidden';
					me.__55.ggVisible=true;
				}
				else {
					me.__55.style.visibility=(Number(me.__55.style.opacity)>0||!me.__55.style.opacity)?'inherit':'hidden';
					me.__55.ggVisible=true;
				}
			}
		}
		me.__55.logicBlock_visible();
		me.__55.ggActivate=function () {
			me.__56.style.transition='none';
			me.__56.style.visibility='hidden';
			me.__56.ggVisible=false;
		}
		me.__55.ggCurrentLogicStateVisible = -1;
		me.__55.ggUpdateConditionTimer=function () {
			me.__55.logicBlock_visible();
		}
		me.__55.ggUpdatePosition=function (useTransition) {
		}
		me.__54.appendChild(me.__55);
		me.divSkin.appendChild(me.__54);
		el=me.__47=document.createElement('div');
		el.ggId="\ubbf8\ub2c8\ub9f5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 200px;';
		hs+='left : 15px;';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : hidden;';
		hs+='width : 200px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__47.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__47.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__47.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__47.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__47.style.transition='left 0s, top 0s, width 0s, height 0s, transform 0s';
				if (me.__47.ggCurrentLogicStatePosition == 0) {
					me.__47.style.left='10px';
					me.__47.style.top='45px';
				}
				else {
					me.__47.style.left='15px';
					me.__47.style.top='80px';
				}
			}
		}
		me.__47.logicBlock_position();
		me.__47.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 420))
			)
			{
				newLogicStateSize = 0;
			}
			else if (
				((player.getViewerSize().width <= 670))
			)
			{
				newLogicStateSize = 1;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__47.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__47.ggCurrentLogicStateSize = newLogicStateSize;
				me.__47.style.transition='left 0s, top 0s, width 0s, height 0s, transform 0s';
				if (me.__47.ggCurrentLogicStateSize == 0) {
					me.__47.style.width='110px';
					me.__47.style.height='100px';
					skin.updateSize(me.__47);
				}
				else if (me.__47.ggCurrentLogicStateSize == 1) {
					me.__47.style.width='200px';
					me.__47.style.height='200px';
					skin.updateSize(me.__47);
				}
				else {
					me.__47.style.width='200px';
					me.__47.style.height='200px';
					skin.updateSize(me.__47);
				}
			}
		}
		me.__47.logicBlock_size();
		me.__47.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__47.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__47.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__47.style.transition='left 0s, top 0s, width 0s, height 0s, transform 0s';
				if (me.__47.ggCurrentLogicStateScaling == 0) {
					me.__47.ggParameter.sx = 0.85;
					me.__47.ggParameter.sy = 0.8;
					me.__47.style.transform=parameterToTransform(me.__47.ggParameter);
					skin.updateSize(me.__47);
				}
				else {
					me.__47.ggParameter.sx = 1;
					me.__47.ggParameter.sy = 1;
					me.__47.style.transform=parameterToTransform(me.__47.ggParameter);
					skin.updateSize(me.__47);
				}
			}
		}
		me.__47.logicBlock_scaling();
		me.__47.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else if (
				((player.getViewerSize().width > 640))
			)
			{
				newLogicStateVisible = 2;
			}
			else if (
				((player.getIsMobile() == false))
			)
			{
				newLogicStateVisible = 3;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__47.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__47.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__47.style.transition='left 0s, top 0s, width 0s, height 0s, transform 0s';
				if (me.__47.ggCurrentLogicStateVisible == 0) {
					me.__47.style.visibility="hidden";
					me.__47.ggVisible=false;
				}
				else if (me.__47.ggCurrentLogicStateVisible == 1) {
					me.__47.style.visibility="hidden";
					me.__47.ggVisible=false;
				}
				else if (me.__47.ggCurrentLogicStateVisible == 2) {
					me.__47.style.visibility=(Number(me.__47.style.opacity)>0||!me.__47.style.opacity)?'inherit':'hidden';
					me.__47.ggVisible=true;
				}
				else if (me.__47.ggCurrentLogicStateVisible == 3) {
					me.__47.style.visibility=(Number(me.__47.style.opacity)>0||!me.__47.style.opacity)?'inherit':'hidden';
					me.__47.ggVisible=true;
				}
				else {
					me.__47.style.visibility="hidden";
					me.__47.ggVisible=false;
				}
			}
		}
		me.__47.logicBlock_visible();
		me.__47.ggUpdatePosition=function (useTransition) {
		}
		el=me.__51=document.createElement('div');
		el.ggId="\ubbf8\ub2c8\ub9f5\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.470588);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 20px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__51.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__51.onclick=function (e) {
			me.__38.style.transition='none';
			me.__38.style.visibility=(Number(me.__38.style.opacity)>0||!me.__38.style.opacity)?'inherit':'hidden';
			me.__38.ggVisible=true;
			me.__47.style.transition='none';
			me.__47.style.visibility='hidden';
			me.__47.ggVisible=false;
			player.setVariableValue('vis_mapangle', true);
		}
		me.__51.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_41=document.createElement('div');
		el.ggId="Rectangle 4";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 35px;';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -15px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_41.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_41.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._rectangle_41.ggCurrentLogicStateSize != newLogicStateSize) {
				me._rectangle_41.ggCurrentLogicStateSize = newLogicStateSize;
				me._rectangle_41.style.transition='width 0s, height 0s';
				if (me._rectangle_41.ggCurrentLogicStateSize == 0) {
					me._rectangle_41.style.width='65px';
					me._rectangle_41.style.height='30px';
					me._rectangle_41.style.left = 'calc(50% - (65px / 2))';
					skin.updateSize(me._rectangle_41);
				}
				else {
					me._rectangle_41.style.width='100px';
					me._rectangle_41.style.height='40px';
					me._rectangle_41.style.left = 'calc(50% - (100px / 2))';
					skin.updateSize(me._rectangle_41);
				}
			}
		}
		me._rectangle_41.logicBlock_size();
		me._rectangle_41.ggUpdatePosition=function (useTransition) {
		}
		el=me.__53=document.createElement('div');
		els=me.__53__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubbf8\ub2c8\ub9f5\ud0c0\uc774\ud2c0";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 30px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='<link rel=\"preconnect\" href=\"https:\/\/fonts.googleapis.com\"> <link rel=\"preconnect\" href=\"https:\/\/fonts.gstatic.com\" crossorigin> <link href=\"https:\/\/fonts.googleapis.com\/css2?family=Noto+Sans&family=Noto+Sans+Display:wght@500&display=swap\" rel=\"stylesheet\"> font-family: \"Noto Sans\", sans-serif; font-family: \"Noto Sans Display\", sans-serif;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: 400;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 7px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__53.ggUpdateText=function() {
			var params = [];
			var hs = player._("MINI MAP", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__53.ggUpdateText();
		el.appendChild(els);
		me.__53.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__53.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__53.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__53.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__53.style.transition='transform 0s';
				if (me.__53.ggCurrentLogicStateScaling == 0) {
					me.__53.ggParameter.sx = 0.7;
					me.__53.ggParameter.sy = 0.7;
					me.__53.style.transform=parameterToTransform(me.__53.ggParameter);
					skin.updateSize(me.__53);
				}
				else {
					me.__53.ggParameter.sx = 1;
					me.__53.ggParameter.sy = 1;
					me.__53.style.transform=parameterToTransform(me.__53.ggParameter);
					skin.updateSize(me.__53);
				}
			}
		}
		me.__53.logicBlock_scaling();
		me.__53.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_41.appendChild(me.__53);
		me.__51.appendChild(me._rectangle_41);
		el=me._map_11=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = 'FloorPlan01';
		el.ggId="Map 1";
		el.ggDx=0;
		el.ggDy=-15;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.75,sy:0.75,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 88%;';
		hs+='left : calc(50% - ((88% + 0px) / 2) + 0px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((88% + 0px) / 2) - 15px);';
		hs+='visibility : hidden;';
		hs+='width : 88%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._map_11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_11.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("1\uce35") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_11.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_11.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_11.style.transition='';
				if (me._map_11.ggCurrentLogicStateVisible == 0) {
					me._map_11.style.visibility=(Number(me._map_11.style.opacity)>0||!me._map_11.style.opacity)?'inherit':'hidden';
					if (me._map_11.ggMapNotLoaded && me._map_11.ggInitMap) {
						me._map_11.ggInitMap(false);
						me._map_11.ggInitMapMarkers(true);
					}
					me._map_11.ggVisible=true;
				}
				else {
					me._map_11.style.visibility="hidden";
					if (me._map_11.ggClearMap) me._map_11.ggClearMap();
					me._map_11.ggVisible=false;
				}
			}
		}
		me._map_11.logicBlock_visible();
		me._map_11.ggCurrentLogicStateVisible = -1;
		me._map_11.ggUpdateConditionResize=function () {
			var mapDetails = player.getMapDetails(me._map_11.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._map_11.ggCalculateFloorplanSize(mapDetails);
				me._map_11.ggShowSimpleFloorplan(mapDetails);
				me._map_11.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._map_11.ggRadar) me._map_11.ggRadar.update();
		}
		me._map_11.ggUpdatePosition=function (useTransition) {
			for (var i=0; i < me._map_11.ggMarkerInstances.length; i++) {
				me._map_11.ggMarkerInstances[i].ggEvent_sizechanged();
			}
			me._map_11.ggUpdateConditionResize();
		}
		me.__51.appendChild(me._map_11);
		el=me._map_21=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = 'FloorPlan02';
		el.ggId="Map 2";
		el.ggDx=0;
		el.ggDy=-15;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.75,sy:0.75,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 88%;';
		hs+='left : calc(50% - ((88% + 0px) / 2) + 0px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((88% + 0px) / 2) - 15px);';
		hs+='visibility : hidden;';
		hs+='width : 88%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._map_21.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_21.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("2\uce35") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_21.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_21.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_21.style.transition='';
				if (me._map_21.ggCurrentLogicStateVisible == 0) {
					me._map_21.style.visibility=(Number(me._map_21.style.opacity)>0||!me._map_21.style.opacity)?'inherit':'hidden';
					if (me._map_21.ggMapNotLoaded && me._map_21.ggInitMap) {
						me._map_21.ggInitMap(false);
						me._map_21.ggInitMapMarkers(true);
					}
					me._map_21.ggVisible=true;
				}
				else {
					me._map_21.style.visibility="hidden";
					if (me._map_21.ggClearMap) me._map_21.ggClearMap();
					me._map_21.ggVisible=false;
				}
			}
		}
		me._map_21.logicBlock_visible();
		me._map_21.ggCurrentLogicStateVisible = -1;
		me._map_21.ggUpdateConditionResize=function () {
			var mapDetails = player.getMapDetails(me._map_21.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._map_21.ggCalculateFloorplanSize(mapDetails);
				me._map_21.ggShowSimpleFloorplan(mapDetails);
				me._map_21.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._map_21.ggRadar) me._map_21.ggRadar.update();
		}
		me._map_21.ggUpdatePosition=function (useTransition) {
			for (var i=0; i < me._map_21.ggMarkerInstances.length; i++) {
				me._map_21.ggMarkerInstances[i].ggEvent_sizechanged();
			}
			me._map_21.ggUpdateConditionResize();
		}
		me.__51.appendChild(me._map_21);
		el=me.__52=document.createElement('div');
		els=me.__52__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ud06c\uac8c\ubcf4\uae30";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 10px;';
		hs+='color : rgba(119,119,119,1);';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: right;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px 20px 0px 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__52.ggUpdateText=function() {
			var params = [];
			var hs = player._("+ \ud06c\uac8c\ubcf4\uae30", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__52.ggUpdateText();
		el.appendChild(els);
		me.__52.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__52.ggUpdatePosition=function (useTransition) {
		}
		me.__51.appendChild(me.__52);
		me.__47.appendChild(me.__51);
		el=me.__49=document.createElement('div');
		el.ggId="\uce35\uc218\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.627451);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='bottom : 12px;';
		hs+='cursor : pointer;';
		hs+='height : 35px;';
		hs+='left : 8px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 65px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__49.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__49.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_floor') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__49.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__49.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__49.style.transition='';
				if (me.__49.ggCurrentLogicStateVisible == 0) {
					me.__49.style.visibility="hidden";
					me.__49.ggVisible=false;
				}
				else {
					me.__49.style.visibility=(Number(me.__49.style.opacity)>0||!me.__49.style.opacity)?'inherit':'hidden';
					me.__49.ggVisible=true;
				}
			}
		}
		me.__49.logicBlock_visible();
		me.__49.onclick=function (e) {
			player.setVariableValue('vis_floor', !player.getVariableValue('vis_floor'));
		}
		me.__49.ggUpdatePosition=function (useTransition) {
		}
		el=me.__50=document.createElement('div');
		els=me.__50__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uce35\uc218\uc124\uba85";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(34,34,34,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : -5px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 13px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__50.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uce35\uc218\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__50.ggUpdateText();
		el.appendChild(els);
		me.__50.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__50.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('vis_onefloor') == true))
			)
			{
				newLogicStateText = 0;
			}
			else if (
				((player.getVariableValue('vis_secondfloor') == true))
			)
			{
				newLogicStateText = 1;
			}
			else {
				newLogicStateText = -1;
			}
			if (me.__50.ggCurrentLogicStateText != newLogicStateText) {
				me.__50.ggCurrentLogicStateText = newLogicStateText;
				me.__50.style.transition='';
				if (me.__50.ggCurrentLogicStateText == 0) {
					if (me.__50.ggUpdateText) {
					me.__50.ggUpdateText=function() {
						var params = [];
						var hs = player._("1\uce35", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me.__50.ggUpdateText();
					} else {
						if (me.__50.ggUpdatePosition) me.__50.ggUpdatePosition();
					}
				}
				else if (me.__50.ggCurrentLogicStateText == 1) {
					if (me.__50.ggUpdateText) {
					me.__50.ggUpdateText=function() {
						var params = [];
						var hs = player._("2\uce35", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me.__50.ggUpdateText();
					} else {
						if (me.__50.ggUpdatePosition) me.__50.ggUpdatePosition();
					}
				}
				else {
					if (me.__50.ggUpdateText) {
					me.__50.ggUpdateText=function() {
						var params = [];
						var hs = player._("\uce35\uc218\n", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me.__50.ggUpdateText();
					} else {
						if (me.__50.ggUpdatePosition) me.__50.ggUpdatePosition();
					}
				}
			}
		}
		me.__50.logicBlock_text();
		me.__50.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_60=document.createElement('div');
		els=me._image_60__img=document.createElement('img');
		els.className='ggskin ggskin_image_60';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAYAAABxLuKEAAAACXBIWXMAAC4jAAAuIwF4pT92AAAEWUlEQVR4nO2bW28VVRiGn0pL7QFN/AEa7/gbJt61HGyLXngi4oUxIYqiBRFKoAkXApZSEk2gHEREKDQx/gb/gfHSw6XxQA8Uosj24p1JLM43h2+vmenFem52Zs9a36z97vWdVnd7Op0Okf/zWNsL2KhEYQyiMAZRGIMojEEUxiAKYxCFMYjCGERhDKIwBlEYgyiMQRTGoDfrzWefebrpdfQDzwPfAz81+eAff/4l8/2NsGOGgEngW+AU8ES7yxGZO6ZBHgc+BD5OrseS193AShsLSml7xxwG3ntkHWPANbSTWqMtYXqAaeADYDjj/ijwtXGvEdoQZhg4iuJKX864EeArWto5TQuzCdiH4kqZ+DYKXKWFndOkMA'+
			'PAR8AxFHTLshO4SMPZqqmsNIR2yRHn/AkUl94AlkMtKo+mdswB4P0ubYwDV2jIrZoQ5hiwnzBBdAdwPZCtXOoUZgA4geJKlZhSxAgNiFOXMAMopuxDmSg0oyiV1+ZWdQizGXgXlfn9NdhP2QZcArbUYTx0VhpC1exUYLsW40AHeBNYCmk4pDB9KPtMBrRZhgm083cTsPEM6UpTKKbklfl5/AnMAquOuWOoQg4WkEMI04cawkn8C1tCaf0d4GXgocPGdtR4DjrXsI5uhRlG6XgSv1veR03lueT6G2CX01awVN6NMJvQN3wQvyh3UfE3C/z9n/dvI/e457C5DfiSLlO5V5hBlI6n8afke4mNebJdZxF4FV9vtIMuG0/PN512yYe8D0U75SBwtmDcLdQ8zlO9XplIXvfgENezYw4hF/KyjLrsIlFSFlCd4nGrCeAyDreq'+
			'KsxRVOp7/XcFud/pivNuAK8B/zieuRPHSWBZYbagD3QYf51yN5l/xjl/AXgRVbpVSc+QS4tTRph+VLjtLzk+izUUaOeAv5w2QNlqHHjgmDtChb8+FH3QzUiQKfzZZw21CufwucKjLAIv4auQtwNfUCKQ5wkziALtdMG4PFZRBvuc9XVKt9xGvZEnlb8AXACezBtkpetelE67OY5cobuYUkSayi9SPRnsQgXqHuBO1gBLmFngdVSzeFhGvU9doqQsIHGuIrevwhjwFPBc1k1LmB/wN2NLrO996uYmqpxvUN3lf7duWIbOAnsrPgTUEB5B2SdkTCniFtUbz/PA29bNPIXn0BFl2dS4hoq/uQpzQpI2nvdLjJ1HMfRXa0DR1juTGChKs2mdch7fWUooFoFXyM9W19AX+FueoTJN5Mnk9RPj/irKPjMlbDVBmq0usL67fo'+
			'jOat6ixBFo2WB1kuzUfQfFlJmSdpoibTzXkusOaib3UvJcuMqxw2mk+qfJ9TJwnPpTspebSJDr6ODqAPBH2clVz2Nm0C47hdznM9qNKUUsoPbhO3ICbRY9Wf8sWvCrzV5gK6p1QvQ+rWL9ajNTmEj7P07csERhDKIwBlEYgyiMQRTGIApjEIUxiMIYRGEMojAGURiDKIxBFMYgCmPwL1w8xZQZ/Qx/AAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 6";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:180,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 10px;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='top : calc(50% - ((10px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._image_60.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_60.logicBlock_angle = function() {
			var newLogicStateAngle;
			if (
				((player.getVariableValue('vis_floor') == true))
			)
			{
				newLogicStateAngle = 0;
			}
			else {
				newLogicStateAngle = -1;
			}
			if (me._image_60.ggCurrentLogicStateAngle != newLogicStateAngle) {
				me._image_60.ggCurrentLogicStateAngle = newLogicStateAngle;
				me._image_60.style.transition='transform 0s';
				if (me._image_60.ggCurrentLogicStateAngle == 0) {
					me._image_60.ggParameter.a = 0;
					me._image_60.style.transform=parameterToTransform(me._image_60.ggParameter);
				}
				else {
					me._image_60.ggParameter.a = 180;
					me._image_60.style.transform=parameterToTransform(me._image_60.ggParameter);
				}
			}
		}
		me._image_60.logicBlock_angle();
		me._image_60.ggUpdatePosition=function (useTransition) {
		}
		me.__50.appendChild(me._image_60);
		me.__49.appendChild(me.__50);
		me.__47.appendChild(me.__49);
		el=me.__48=document.createElement('div');
		el.ggId="\uce35\uc218";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.627451);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 20px;';
		hs+='bottom : 15px;';
		hs+='cursor : pointer;';
		hs+='height : 80px;';
		hs+='left : 8px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__48.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__48.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_floor') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__48.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__48.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__48.style.transition='';
				if (me.__48.ggCurrentLogicStateVisible == 0) {
					me.__48.style.visibility=(Number(me.__48.style.opacity)>0||!me.__48.style.opacity)?'inherit':'hidden';
					me.__48.ggVisible=true;
				}
				else {
					me.__48.style.visibility="hidden";
					me.__48.ggVisible=false;
				}
			}
		}
		me.__48.logicBlock_visible();
		me.__48.ggUpdatePosition=function (useTransition) {
		}
		el=me.__111=document.createElement('div');
		els=me.__111__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="1\uce35";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(34,34,34,1);';
		hs+='cursor : pointer;';
		hs+='height : 50%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='@import url(\"https:\/\/fonts.googleapis.com\/css2?family=Nanum+Gothic:wght@400;700&display=swap\"); font-family: \"Nanum Gothic\", sans-serif; word-break:keep-all; line-height:17px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 13px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__111.ggUpdateText=function() {
			var params = [];
			var hs = player._("1\uce35", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__111.ggUpdateText();
		el.appendChild(els);
		me.__111.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__111.onclick=function (e) {
			player.openNext("{node2}","");
			player.setVariableValue('vis_onefloor', true);
			me.__48.style.transition='none';
			me.__48.style.visibility='hidden';
			me.__48.ggVisible=false;
			me.__49.style.transition='none';
			me.__49.style.visibility=(Number(me.__49.style.opacity)>0||!me.__49.style.opacity)?'inherit':'hidden';
			me.__49.ggVisible=true;
			player.setVariableValue('vis_floor', false);
			player.setVariableValue('vis_secondfloor', false);
		}
		me.__111.ggUpdatePosition=function (useTransition) {
		}
		me.__48.appendChild(me.__111);
		el=me.__212=document.createElement('div');
		els=me.__212__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="2\uce35";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border-color : rgba(204,204,204,0.627451);';
		hs+='border-style : solid;';
		hs+='border-width : 1px 0px 0px 0px;';
		hs+='bottom : 0px;';
		hs+='color : rgba(34,34,34,1);';
		hs+='cursor : pointer;';
		hs+='height : 50%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='@import url(\"https:\/\/fonts.googleapis.com\/css2?family=Nanum+Gothic:wght@400;700&display=swap\"); font-family: \"Nanum Gothic\", sans-serif; word-break:keep-all; line-height:17px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 13px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__212.ggUpdateText=function() {
			var params = [];
			var hs = player._("2\uce35", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__212.ggUpdateText();
		el.appendChild(els);
		me.__212.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__212.onclick=function (e) {
			player.setVariableValue('vis_secondfloor', true);
			player.openNext("{node6}","");
			me.__48.style.transition='none';
			me.__48.style.visibility='hidden';
			me.__48.ggVisible=false;
			me.__49.style.transition='none';
			me.__49.style.visibility=(Number(me.__49.style.opacity)>0||!me.__49.style.opacity)?'inherit':'hidden';
			me.__49.ggVisible=true;
			player.setVariableValue('vis_floor', false);
			player.setVariableValue('vis_onefloor', false);
		}
		me.__212.ggUpdatePosition=function (useTransition) {
		}
		me.__48.appendChild(me.__212);
		me.__47.appendChild(me.__48);
		me.divSkin.appendChild(me.__47);
		el=me.__44=document.createElement('div');
		el.ggId="\ubbf8\ub2c8\ub9f5-\ubaa8\ubc14\uc77c";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 125px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 125px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__44.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__44.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_mobilemap') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__44.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__44.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__44.style.transition='left 500ms ease 0ms, bottom 500ms ease 0ms';
				if (me.__44.ggCurrentLogicStatePosition == 0) {
					me.__44.style.left='5px';
					me.__44.style.bottom='-120px';
				}
				else {
					me.__44.style.left='5px';
					me.__44.style.bottom='0px';
				}
			}
		}
		me.__44.logicBlock_position();
		me.__44.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else if (
				((player.getViewerSize().width > 640))
			)
			{
				newLogicStateVisible = 2;
			}
			else if (
				((player.getIsMobile() == false))
			)
			{
				newLogicStateVisible = 3;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__44.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__44.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__44.style.transition='left 500ms ease 0ms, bottom 500ms ease 0ms';
				if (me.__44.ggCurrentLogicStateVisible == 0) {
					me.__44.style.visibility=(Number(me.__44.style.opacity)>0||!me.__44.style.opacity)?'inherit':'hidden';
					me.__44.ggVisible=true;
				}
				else if (me.__44.ggCurrentLogicStateVisible == 1) {
					me.__44.style.visibility=(Number(me.__44.style.opacity)>0||!me.__44.style.opacity)?'inherit':'hidden';
					me.__44.ggVisible=true;
				}
				else if (me.__44.ggCurrentLogicStateVisible == 2) {
					me.__44.style.visibility="hidden";
					me.__44.ggVisible=false;
				}
				else if (me.__44.ggCurrentLogicStateVisible == 3) {
					me.__44.style.visibility="hidden";
					me.__44.ggVisible=false;
				}
				else {
					me.__44.style.visibility="hidden";
					me.__44.ggVisible=false;
				}
			}
		}
		me.__44.logicBlock_visible();
		me.__44.ggUpdatePosition=function (useTransition) {
		}
		el=me.__45=document.createElement('div');
		el.ggId="\ubbf8\ub2c8\ub9f5\ubc30\uacbd-\ubaa8\ubc14\uc77c";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.470588);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 20px 20px 0px 0px;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__45.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__45.onclick=function (e) {
			me.__38.style.transition='none';
			me.__38.style.visibility=(Number(me.__38.style.opacity)>0||!me.__38.style.opacity)?'inherit':'hidden';
			me.__38.ggVisible=true;
			me.__44.style.transition='none';
			me.__44.style.visibility='hidden';
			me.__44.ggVisible=false;
			player.setVariableValue('vis_mapangle', true);
		}
		me.__45.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_40=document.createElement('div');
		el.ggId="Rectangle 4-\ubaa8\ubc14\uc77c";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 35px;';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -15px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_40.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_40.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._rectangle_40.ggCurrentLogicStateSize != newLogicStateSize) {
				me._rectangle_40.ggCurrentLogicStateSize = newLogicStateSize;
				me._rectangle_40.style.transition='width 0s, height 0s';
				if (me._rectangle_40.ggCurrentLogicStateSize == 0) {
					me._rectangle_40.style.width='65px';
					me._rectangle_40.style.height='30px';
					me._rectangle_40.style.left = 'calc(50% - (65px / 2))';
					skin.updateSize(me._rectangle_40);
				}
				else {
					me._rectangle_40.style.width='100px';
					me._rectangle_40.style.height='40px';
					me._rectangle_40.style.left = 'calc(50% - (100px / 2))';
					skin.updateSize(me._rectangle_40);
				}
			}
		}
		me._rectangle_40.logicBlock_size();
		me._rectangle_40.ggUpdatePosition=function (useTransition) {
		}
		el=me.__46=document.createElement('div');
		els=me.__46__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubbf8\ub2c8\ub9f5\ud0c0\uc774\ud2c0-\ubaa8\ubc14\uc77c";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 30px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='<link rel=\"preconnect\" href=\"https:\/\/fonts.googleapis.com\"> <link rel=\"preconnect\" href=\"https:\/\/fonts.gstatic.com\" crossorigin> <link href=\"https:\/\/fonts.googleapis.com\/css2?family=Noto+Sans&family=Noto+Sans+Display:wght@500&display=swap\" rel=\"stylesheet\"> font-family: \"Noto Sans\", sans-serif; font-family: \"Noto Sans Display\", sans-serif;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: 500;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 7px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__46.ggUpdateText=function() {
			var params = [];
			var hs = player._("MINI MAP", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__46.ggUpdateText();
		el.appendChild(els);
		me.__46.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__46.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__46.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__46.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__46.style.transition='transform 0s';
				if (me.__46.ggCurrentLogicStateScaling == 0) {
					me.__46.ggParameter.sx = 0.7;
					me.__46.ggParameter.sy = 0.7;
					me.__46.style.transform=parameterToTransform(me.__46.ggParameter);
					skin.updateSize(me.__46);
				}
				else {
					me.__46.ggParameter.sx = 1;
					me.__46.ggParameter.sy = 1;
					me.__46.style.transform=parameterToTransform(me.__46.ggParameter);
					skin.updateSize(me.__46);
				}
			}
		}
		me.__46.logicBlock_scaling();
		me.__46.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_40.appendChild(me.__46);
		me.__45.appendChild(me._rectangle_40);
		el=me._map_10=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = 'FloorPlan01';
		el.ggId="Map 1-\ubaa8\ubc14\uc77c";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.8,sy:0.8,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 79.661%;';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((79.661% + 0px) / 2) + 0%);';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._map_10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_10.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("1\uce35") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_10.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_10.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_10.style.transition='';
				if (me._map_10.ggCurrentLogicStateVisible == 0) {
					me._map_10.style.visibility=(Number(me._map_10.style.opacity)>0||!me._map_10.style.opacity)?'inherit':'hidden';
					if (me._map_10.ggMapNotLoaded && me._map_10.ggInitMap) {
						me._map_10.ggInitMap(false);
						me._map_10.ggInitMapMarkers(true);
					}
					me._map_10.ggVisible=true;
				}
				else {
					me._map_10.style.visibility="hidden";
					if (me._map_10.ggClearMap) me._map_10.ggClearMap();
					me._map_10.ggVisible=false;
				}
			}
		}
		me._map_10.logicBlock_visible();
		me._map_10.ggCurrentLogicStateVisible = -1;
		me._map_10.ggUpdateConditionResize=function () {
			var mapDetails = player.getMapDetails(me._map_10.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._map_10.ggCalculateFloorplanSize(mapDetails);
				me._map_10.ggShowSimpleFloorplan(mapDetails);
				me._map_10.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._map_10.ggRadar) me._map_10.ggRadar.update();
		}
		me._map_10.ggUpdatePosition=function (useTransition) {
			for (var i=0; i < me._map_10.ggMarkerInstances.length; i++) {
				me._map_10.ggMarkerInstances[i].ggEvent_sizechanged();
			}
			me._map_10.ggUpdateConditionResize();
		}
		me.__45.appendChild(me._map_10);
		el=me._map_20=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = 'FloorPlan02';
		el.ggId="Map 2-\ubaa8\ubc14\uc77c";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.8,sy:0.8,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 79.661%;';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((79.661% + 0px) / 2) + 0%);';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._map_20.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_20.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("2\uce35") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_20.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_20.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_20.style.transition='';
				if (me._map_20.ggCurrentLogicStateVisible == 0) {
					me._map_20.style.visibility=(Number(me._map_20.style.opacity)>0||!me._map_20.style.opacity)?'inherit':'hidden';
					if (me._map_20.ggMapNotLoaded && me._map_20.ggInitMap) {
						me._map_20.ggInitMap(false);
						me._map_20.ggInitMapMarkers(true);
					}
					me._map_20.ggVisible=true;
				}
				else {
					me._map_20.style.visibility="hidden";
					if (me._map_20.ggClearMap) me._map_20.ggClearMap();
					me._map_20.ggVisible=false;
				}
			}
		}
		me._map_20.logicBlock_visible();
		me._map_20.ggCurrentLogicStateVisible = -1;
		me._map_20.ggUpdateConditionResize=function () {
			var mapDetails = player.getMapDetails(me._map_20.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._map_20.ggCalculateFloorplanSize(mapDetails);
				me._map_20.ggShowSimpleFloorplan(mapDetails);
				me._map_20.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._map_20.ggRadar) me._map_20.ggRadar.update();
		}
		me._map_20.ggUpdatePosition=function (useTransition) {
			for (var i=0; i < me._map_20.ggMarkerInstances.length; i++) {
				me._map_20.ggMarkerInstances[i].ggEvent_sizechanged();
			}
			me._map_20.ggUpdateConditionResize();
		}
		me.__45.appendChild(me._map_20);
		el=me._text_4=document.createElement('div');
		els=me._text_4__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 2px;';
		hs+='color : rgba(119,119,119,1);';
		hs+='cursor : default;';
		hs+='height : 25px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 10px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_4.ggUpdateText=function() {
			var params = [];
			var hs = player._("+ \ud06c\uac8c\ubcf4\uae30", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_4.ggUpdateText();
		el.appendChild(els);
		me._text_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_4.ggUpdatePosition=function (useTransition) {
		}
		me.__45.appendChild(me._text_4);
		me.__44.appendChild(me.__45);
		el=me._m1=document.createElement('div');
		el.ggId="\uce35\uc218\ubc30\uacbd-m";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.627451);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='bottom : 2px;';
		hs+='cursor : pointer;';
		hs+='height : 26px;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._m1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._m1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_floor') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._m1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._m1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._m1.style.transition='';
				if (me._m1.ggCurrentLogicStateVisible == 0) {
					me._m1.style.visibility="hidden";
					me._m1.ggVisible=false;
				}
				else {
					me._m1.style.visibility=(Number(me._m1.style.opacity)>0||!me._m1.style.opacity)?'inherit':'hidden';
					me._m1.ggVisible=true;
				}
			}
		}
		me._m1.logicBlock_visible();
		me._m1.onclick=function (e) {
			player.setVariableValue('vis_floor', !player.getVariableValue('vis_floor'));
		}
		me._m1.ggUpdatePosition=function (useTransition) {
		}
		el=me._m2=document.createElement('div');
		els=me._m2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uce35\uc218\uc124\uba85-m";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(34,34,34,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : -5px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 13px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._m2.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uce35\uc218\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._m2.ggUpdateText();
		el.appendChild(els);
		me._m2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._m2.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('vis_onefloor') == true))
			)
			{
				newLogicStateText = 0;
			}
			else if (
				((player.getVariableValue('vis_secondfloor') == true))
			)
			{
				newLogicStateText = 1;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._m2.ggCurrentLogicStateText != newLogicStateText) {
				me._m2.ggCurrentLogicStateText = newLogicStateText;
				me._m2.style.transition='';
				if (me._m2.ggCurrentLogicStateText == 0) {
					if (me._m2.ggUpdateText) {
					me._m2.ggUpdateText=function() {
						var params = [];
						var hs = player._("1\uce35", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._m2.ggUpdateText();
					} else {
						if (me._m2.ggUpdatePosition) me._m2.ggUpdatePosition();
					}
				}
				else if (me._m2.ggCurrentLogicStateText == 1) {
					if (me._m2.ggUpdateText) {
					me._m2.ggUpdateText=function() {
						var params = [];
						var hs = player._("2\uce35", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._m2.ggUpdateText();
					} else {
						if (me._m2.ggUpdatePosition) me._m2.ggUpdatePosition();
					}
				}
				else {
					if (me._m2.ggUpdateText) {
					me._m2.ggUpdateText=function() {
						var params = [];
						var hs = player._("\uce35\uc218\n", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._m2.ggUpdateText();
					} else {
						if (me._m2.ggUpdatePosition) me._m2.ggUpdatePosition();
					}
				}
			}
		}
		me._m2.logicBlock_text();
		me._m2.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_6m=document.createElement('div');
		els=me._image_6m__img=document.createElement('img');
		els.className='ggskin ggskin_image_6m';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAYAAABxLuKEAAAACXBIWXMAAC4jAAAuIwF4pT92AAAEWUlEQVR4nO2bW28VVRiGn0pL7QFN/AEa7/gbJt61HGyLXngi4oUxIYqiBRFKoAkXApZSEk2gHEREKDQx/gb/gfHSw6XxQA8Uosj24p1JLM43h2+vmenFem52Zs9a36z97vWdVnd7Op0Okf/zWNsL2KhEYQyiMAZRGIMojEEUxiAKYxCFMYjCGERhDKIwBlEYgyiMQRTGoDfrzWefebrpdfQDzwPfAz81+eAff/4l8/2NsGOGgEngW+AU8ES7yxGZO6ZBHgc+BD5OrseS193AShsLSml7xxwG3ntkHWPANbSTWqMtYXqAaeADYDjj/ijwtXGvEdoQZhg4iuJKX864EeArWto5TQuzCdiH4kqZ+DYKXKWFndOkMA'+
			'PAR8AxFHTLshO4SMPZqqmsNIR2yRHn/AkUl94AlkMtKo+mdswB4P0ubYwDV2jIrZoQ5hiwnzBBdAdwPZCtXOoUZgA4geJKlZhSxAgNiFOXMAMopuxDmSg0oyiV1+ZWdQizGXgXlfn9NdhP2QZcArbUYTx0VhpC1exUYLsW40AHeBNYCmk4pDB9KPtMBrRZhgm083cTsPEM6UpTKKbklfl5/AnMAquOuWOoQg4WkEMI04cawkn8C1tCaf0d4GXgocPGdtR4DjrXsI5uhRlG6XgSv1veR03lueT6G2CX01awVN6NMJvQN3wQvyh3UfE3C/z9n/dvI/e457C5DfiSLlO5V5hBlI6n8afke4mNebJdZxF4FV9vtIMuG0/PN512yYe8D0U75SBwtmDcLdQ8zlO9XplIXvfgENezYw4hF/KyjLrsIlFSFlCd4nGrCeAyDreq'+
			'KsxRVOp7/XcFud/pivNuAK8B/zieuRPHSWBZYbagD3QYf51yN5l/xjl/AXgRVbpVSc+QS4tTRph+VLjtLzk+izUUaOeAv5w2QNlqHHjgmDtChb8+FH3QzUiQKfzZZw21CufwucKjLAIv4auQtwNfUCKQ5wkziALtdMG4PFZRBvuc9XVKt9xGvZEnlb8AXACezBtkpetelE67OY5cobuYUkSayi9SPRnsQgXqHuBO1gBLmFngdVSzeFhGvU9doqQsIHGuIrevwhjwFPBc1k1LmB/wN2NLrO996uYmqpxvUN3lf7duWIbOAnsrPgTUEB5B2SdkTCniFtUbz/PA29bNPIXn0BFl2dS4hoq/uQpzQpI2nvdLjJ1HMfRXa0DR1juTGChKs2mdch7fWUooFoFXyM9W19AX+FueoTJN5Mnk9RPj/irKPjMlbDVBmq0usL67fo'+
			'jOat6ixBFo2WB1kuzUfQfFlJmSdpoibTzXkusOaib3UvJcuMqxw2mk+qfJ9TJwnPpTspebSJDr6ODqAPBH2clVz2Nm0C47hdznM9qNKUUsoPbhO3ICbRY9Wf8sWvCrzV5gK6p1QvQ+rWL9ajNTmEj7P07csERhDKIwBlEYgyiMQRTGIApjEIUxiMIYRGEMojAGURiDKIxBFMYgCmPwL1w8xZQZ/Qx/AAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 6-m";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:180,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 10px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((10px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._image_6m.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_6m.logicBlock_angle = function() {
			var newLogicStateAngle;
			if (
				((player.getVariableValue('vis_floor') == true))
			)
			{
				newLogicStateAngle = 0;
			}
			else {
				newLogicStateAngle = -1;
			}
			if (me._image_6m.ggCurrentLogicStateAngle != newLogicStateAngle) {
				me._image_6m.ggCurrentLogicStateAngle = newLogicStateAngle;
				me._image_6m.style.transition='transform 0s';
				if (me._image_6m.ggCurrentLogicStateAngle == 0) {
					me._image_6m.ggParameter.a = 0;
					me._image_6m.style.transform=parameterToTransform(me._image_6m.ggParameter);
				}
				else {
					me._image_6m.ggParameter.a = 180;
					me._image_6m.style.transform=parameterToTransform(me._image_6m.ggParameter);
				}
			}
		}
		me._image_6m.logicBlock_angle();
		me._image_6m.ggUpdatePosition=function (useTransition) {
		}
		me._m2.appendChild(me._image_6m);
		me._m1.appendChild(me._m2);
		me.__44.appendChild(me._m1);
		el=me._m0=document.createElement('div');
		el.ggId="\uce35\uc218-m";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.627451);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 20px;';
		hs+='bottom : 2px;';
		hs+='cursor : pointer;';
		hs+='height : 66px;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._m0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._m0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_floor') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._m0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._m0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._m0.style.transition='';
				if (me._m0.ggCurrentLogicStateVisible == 0) {
					me._m0.style.visibility=(Number(me._m0.style.opacity)>0||!me._m0.style.opacity)?'inherit':'hidden';
					me._m0.ggVisible=true;
				}
				else {
					me._m0.style.visibility="hidden";
					me._m0.ggVisible=false;
				}
			}
		}
		me._m0.logicBlock_visible();
		me._m0.ggUpdatePosition=function (useTransition) {
		}
		el=me.__1m0=document.createElement('div');
		els=me.__1m0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="1\uce35-m";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(34,34,34,1);';
		hs+='cursor : pointer;';
		hs+='height : 50%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='@import url(\"https:\/\/fonts.googleapis.com\/css2?family=Nanum+Gothic:wght@400;700&display=swap\"); font-family: \"Nanum Gothic\", sans-serif; word-break:keep-all; line-height:17px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 13px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__1m0.ggUpdateText=function() {
			var params = [];
			var hs = player._("1\uce35", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__1m0.ggUpdateText();
		el.appendChild(els);
		me.__1m0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1m0.onclick=function (e) {
			player.openNext("{node2}","");
			player.setVariableValue('vis_onefloor', true);
			me.__48.style.transition='none';
			me.__48.style.visibility='hidden';
			me.__48.ggVisible=false;
			me.__49.style.transition='none';
			me.__49.style.visibility=(Number(me.__49.style.opacity)>0||!me.__49.style.opacity)?'inherit':'hidden';
			me.__49.ggVisible=true;
			player.setVariableValue('vis_floor', false);
			player.setVariableValue('vis_secondfloor', false);
		}
		me.__1m0.ggUpdatePosition=function (useTransition) {
		}
		me._m0.appendChild(me.__1m0);
		el=me.__2m0=document.createElement('div');
		els=me.__2m0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="2\uce35-m";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border-color : rgba(204,204,204,0.627451);';
		hs+='border-style : solid;';
		hs+='border-width : 1px 0px 0px 0px;';
		hs+='bottom : 0px;';
		hs+='color : rgba(34,34,34,1);';
		hs+='cursor : pointer;';
		hs+='height : 50%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='@import url(\"https:\/\/fonts.googleapis.com\/css2?family=Nanum+Gothic:wght@400;700&display=swap\"); font-family: \"Nanum Gothic\", sans-serif; word-break:keep-all; line-height:17px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 13px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__2m0.ggUpdateText=function() {
			var params = [];
			var hs = player._("2\uce35", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__2m0.ggUpdateText();
		el.appendChild(els);
		me.__2m0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__2m0.onclick=function (e) {
			player.setVariableValue('vis_secondfloor', true);
			player.openNext("{node6}","");
			me.__48.style.transition='none';
			me.__48.style.visibility='hidden';
			me.__48.ggVisible=false;
			me.__49.style.transition='none';
			me.__49.style.visibility=(Number(me.__49.style.opacity)>0||!me.__49.style.opacity)?'inherit':'hidden';
			me.__49.ggVisible=true;
			player.setVariableValue('vis_floor', false);
			player.setVariableValue('vis_onefloor', false);
		}
		me.__2m0.ggUpdatePosition=function (useTransition) {
		}
		me._m0.appendChild(me.__2m0);
		me.__44.appendChild(me._m0);
		me.divSkin.appendChild(me.__44);
		el=me._start=document.createElement('div');
		el.ggId="start";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 326px;';
		hs+='position : absolute;';
		hs+='top : 81px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._start.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._start.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._start);
		el=me._markertemplate=document.createElement('div');
		el.ggMarkerNodeId='';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="markertemplate";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 49px;';
		hs+='position : absolute;';
		hs+='top : 12px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._markertemplate.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._markertemplate.ggUpdatePosition=function (useTransition) {
			me._markertemplate__normalInst.ggEvent_sizechanged();
			me._markertemplate__activeInst.ggEvent_sizechanged();
		}
		me.divSkin.appendChild(me._markertemplate);
		el=me.__43=document.createElement('div');
		el.ggId="\ubc1c\uc790\uad6d";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__43.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__43.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.hotspot.description == "\ubc1c\uc790\uad6d"))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getHasTouch() == true)) && 
				((player.hotspot.description == "\ubc1c\uc790\uad6d"))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__43.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__43.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__43.style.transition='';
				if (me.__43.ggCurrentLogicStateVisible == 0) {
					me.__43.style.visibility=(Number(me.__43.style.opacity)>0||!me.__43.style.opacity)?'inherit':'hidden';
					me.__43.ggVisible=true;
				}
				else if (me.__43.ggCurrentLogicStateVisible == 1) {
					me.__43.style.visibility=(Number(me.__43.style.opacity)>0||!me.__43.style.opacity)?'inherit':'hidden';
					me.__43.ggVisible=true;
				}
				else {
					me.__43.style.visibility="hidden";
					me.__43.ggVisible=false;
				}
			}
		}
		me.__43.logicBlock_visible();
		me.__43.ggUpdatePosition=function (useTransition) {
		}
		el=me.__211=document.createElement('div');
		el.ggTimestamp=skin.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=300;
		el.ggId="\ubc1c\uc790\uad6d \ud0c0\uc774\uba38 2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__211.ggIsActive=function() {
			return (me.__211.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me.__211.ggTimestamp) / me.__211.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__211.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_foot') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__211.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__211.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__211.style.transition='left 50ms ease-in-out 0ms, top 50ms ease-in-out 0ms';
				if (me.__211.ggCurrentLogicStatePosition == 0) {
					me.__211.style.left = 'calc(50% - (50% / 2))';
					me.__211.style.top = 'calc(50% - (50% / 2))';
				}
				else {
					me.__211.style.left='calc(50% - ((50% + 0px) / 2) + 0px)';
					me.__211.style.top='calc(50% - ((50% + 0px) / 2) + 0px)';
				}
			}
		}
		me.__211.logicBlock_position();
		me.__211.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.__211.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__211.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__211.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__211.style.transition='left 50ms ease-in-out 0ms, top 50ms ease-in-out 0ms';
				if (me.__211.ggCurrentLogicStateVisible == 0) {
					me.__211.style.visibility=(Number(me.__211.style.opacity)>0||!me.__211.style.opacity)?'inherit':'hidden';
					me.__211.ggVisible=true;
				}
				else {
					me.__211.style.visibility=(Number(me.__211.style.opacity)>0||!me.__211.style.opacity)?'inherit':'hidden';
					me.__211.ggVisible=true;
				}
			}
		}
		me.__211.logicBlock_visible();
		me.__211.ggActivate=function () {
			player.setVariableValue('vis_foot', !player.getVariableValue('vis_foot'));
		}
		me.__211.ggCurrentLogicStatePosition = -1;
		me.__211.ggCurrentLogicStateVisible = -1;
		me.__211.ggUpdateConditionTimer=function () {
			me.__211.logicBlock_visible();
		}
		me.__211.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_3=document.createElement('div');
		els=me._image_3__img=document.createElement('img');
		els.className='ggskin ggskin_image_3';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 3";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:-15,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : -10px;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._image_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_3.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_foot') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._image_3.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._image_3.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._image_3.style.transition='right 300ms ease 500ms, top 300ms ease 500ms';
				if (me._image_3.ggCurrentLogicStatePosition == 0) {
					me._image_3.style.right='-10px';
					me._image_3.style.top = 'calc(50% - (100% / 2) + (0px / 2) + -10px)';
				}
				else {
					me._image_3.style.right='-10px';
					me._image_3.style.top='calc(50% - ((100% + 0px) / 2) + 0px)';
				}
			}
		}
		me._image_3.logicBlock_position();
		me._image_3.ggActivate=function () {
			player.setVariableValue('vis_foot', true);
		}
		me._image_3.ggUpdatePosition=function (useTransition) {
		}
		me.__211.appendChild(me._image_3);
		el=me._image_4=document.createElement('div');
		els=me._image_4__img=document.createElement('img');
		els.className='ggskin ggskin_image_4';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 4";
		el.ggDy=-10;
		el.ggParameter={ rx:0,ry:0,a:10,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) - 10px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._image_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_4.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_foot') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._image_4.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._image_4.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._image_4.style.transition='left 300ms ease 0ms, top 300ms ease 0ms';
				if (me._image_4.ggCurrentLogicStatePosition == 0) {
					me._image_4.style.left='0px';
					me._image_4.style.top = 'calc(50% - (100% / 2))';
				}
				else {
					me._image_4.style.left='0px';
					me._image_4.style.top='calc(50% - ((100% + 0px) / 2) - 10px)';
				}
			}
		}
		me._image_4.logicBlock_position();
		me._image_4.ggActivate=function () {
			player.setVariableValue('vis_foot', true);
		}
		me._image_4.ggUpdatePosition=function (useTransition) {
		}
		me.__211.appendChild(me._image_4);
		me.__43.appendChild(me.__211);
		me.divSkin.appendChild(me.__43);
		el=me.__38=document.createElement('div');
		el.ggId="\ubbf8\ub2c8\ub9f5-\ubaa8\ubc14\uc77c-\ud655\ub300";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 70%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((70% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__38.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__38.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_mobilemap') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__38.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__38.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__38.style.transition='left 500ms ease 0ms, top 500ms ease 0ms, width 0s, height 0s, transform 0s';
				if (me.__38.ggCurrentLogicStatePosition == 0) {
					me.__38.style.left = 'calc(50% - (100% / 2) + (0px / 2) + 5px)';
					me.__38.style.top = 'calc(50% - (70% / 2) + (0px / 2) + -120px)';
				}
				else {
					me.__38.style.left='calc(50% - ((100% + 0px) / 2) + 0px)';
					me.__38.style.top='calc(50% - ((70% + 0px) / 2) + 0px)';
				}
			}
		}
		me.__38.logicBlock_position();
		me.__38.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 960))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__38.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__38.ggCurrentLogicStateSize = newLogicStateSize;
				me.__38.style.transition='left 500ms ease 0ms, top 500ms ease 0ms, width 0s, height 0s, transform 0s';
				if (me.__38.ggCurrentLogicStateSize == 0) {
					me.__38.style.width='100%';
					me.__38.style.height='100%';
					me.__38.style.left = 'calc(50% - (100% / 2))';
					me.__38.style.top = 'calc(50% - (100% / 2))';
					skin.updateSize(me.__38);
				}
				else {
					me.__38.style.width='100%';
					me.__38.style.height='70%';
					me.__38.style.left = 'calc(50% - (100% / 2))';
					me.__38.style.top = 'calc(50% - (70% / 2))';
					skin.updateSize(me.__38);
				}
			}
		}
		me.__38.logicBlock_size();
		me.__38.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__38.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__38.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__38.style.transition='left 500ms ease 0ms, top 500ms ease 0ms, width 0s, height 0s, transform 0s';
				if (me.__38.ggCurrentLogicStateScaling == 0) {
					me.__38.ggParameter.sx = 1;
					me.__38.ggParameter.sy = 0.8;
					me.__38.style.transform=parameterToTransform(me.__38.ggParameter);
					skin.updateSize(me.__38);
				}
				else {
					me.__38.ggParameter.sx = 1;
					me.__38.ggParameter.sy = 1;
					me.__38.style.transform=parameterToTransform(me.__38.ggParameter);
					skin.updateSize(me.__38);
				}
			}
		}
		me.__38.logicBlock_scaling();
		me.__38.ggUpdatePosition=function (useTransition) {
		}
		el=me.__41=document.createElement('div');
		el.ggId="\ubbf8\ub2c8\ub9f5\ubc30\uacbd-\ubaa8\ubc14\uc77c-\ud655\ub300";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.470588);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 90%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__41.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__41.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__41.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__41.ggCurrentLogicStateSize = newLogicStateSize;
				me.__41.style.transition='width 0s, height 0s';
				if (me.__41.ggCurrentLogicStateSize == 0) {
					me.__41.style.width='100%';
					me.__41.style.height='100%';
					skin.updateSize(me.__41);
				}
				else {
					me.__41.style.width='90%';
					me.__41.style.height='100%';
					skin.updateSize(me.__41);
				}
			}
		}
		me.__41.logicBlock_size();
		me.__41.onclick=function (e) {
			me.__38.style.transition='none';
			me.__38.style.visibility='hidden';
			me.__38.ggVisible=false;
			if (
				(
					((player.getViewerSize().width <= 960))
				)
			) {
				me.__44.style.transition='none';
				me.__44.style.visibility=(Number(me.__44.style.opacity)>0||!me.__44.style.opacity)?'inherit':'hidden';
				me.__44.ggVisible=true;
			}
			if (
				(
					((player.getViewerSize().width > 960))
				)
			) {
				me.__47.style.transition='none';
				me.__47.style.visibility=(Number(me.__47.style.opacity)>0||!me.__47.style.opacity)?'inherit':'hidden';
				me.__47.ggVisible=true;
			}
			player.setVariableValue('vis_mapangle', false);
		}
		me.__41.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_4=document.createElement('div');
		el.ggId="Rectangle 4-\ubaa8\ubc14\uc77c-\ud655\ub300";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 35px;';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -15px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_4.ggUpdatePosition=function (useTransition) {
		}
		el=me.__42=document.createElement('div');
		els=me.__42__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubbf8\ub2c8\ub9f5\ud0c0\uc774\ud2c0-\ubaa8\ubc14\uc77c-\ud655\ub300";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 30px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='<link rel=\"preconnect\" href=\"https:\/\/fonts.googleapis.com\"> <link rel=\"preconnect\" href=\"https:\/\/fonts.gstatic.com\" crossorigin> <link href=\"https:\/\/fonts.googleapis.com\/css2?family=Noto+Sans&family=Noto+Sans+Display:wght@500&display=swap\" rel=\"stylesheet\"> font-family: \"Noto Sans\", sans-serif; font-family: \"Noto Sans Display\", sans-serif;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: 500;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 7px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__42.ggUpdateText=function() {
			var params = [];
			var hs = player._("MINI MAP", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__42.ggUpdateText();
		el.appendChild(els);
		me.__42.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__42.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__42.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__42.ggCurrentLogicStateSize = newLogicStateSize;
				me.__42.style.transition='width 0s, height 0s';
				if (me.__42.ggCurrentLogicStateSize == 0) {
					me.__42.style.width='90%';
					me.__42.style.height='100%';
					me.__42.style.left = 'calc(50% - (90% / 2))';
					me.__42.style.top = 'calc(50% - (100% / 2))';
					skin.updateSize(me.__42);
				}
				else {
					me.__42.style.width='100%';
					me.__42.style.height='100%';
					me.__42.style.left = 'calc(50% - (100% / 2))';
					me.__42.style.top = 'calc(50% - (100% / 2))';
					skin.updateSize(me.__42);
				}
			}
		}
		me.__42.logicBlock_size();
		me.__42.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_4.appendChild(me.__42);
		me.__41.appendChild(me._rectangle_4);
		el=me._map_1=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = 'FloorPlan01';
		el.ggId="Map 1-\ubaa8\ubc14\uc77c-\ud655\ub300";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 89.2857%;';
		hs+='left : calc(50% - ((90% + 0px) / 2) + 0px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((89.2857% + 0px) / 2) + 0%);';
		hs+='visibility : hidden;';
		hs+='width : 90%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("1\uce35") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_1.style.transition='';
				if (me._map_1.ggCurrentLogicStateVisible == 0) {
					me._map_1.style.visibility=(Number(me._map_1.style.opacity)>0||!me._map_1.style.opacity)?'inherit':'hidden';
					if (me._map_1.ggMapNotLoaded && me._map_1.ggInitMap) {
						me._map_1.ggInitMap(false);
						me._map_1.ggInitMapMarkers(true);
					}
					me._map_1.ggVisible=true;
				}
				else {
					me._map_1.style.visibility="hidden";
					if (me._map_1.ggClearMap) me._map_1.ggClearMap();
					me._map_1.ggVisible=false;
				}
			}
		}
		me._map_1.logicBlock_visible();
		me._map_1.ggCurrentLogicStateVisible = -1;
		me._map_1.ggUpdateConditionResize=function () {
			var mapDetails = player.getMapDetails(me._map_1.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._map_1.ggCalculateFloorplanSize(mapDetails);
				me._map_1.ggShowSimpleFloorplan(mapDetails);
				me._map_1.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._map_1.ggRadar) me._map_1.ggRadar.update();
		}
		me._map_1.ggUpdatePosition=function (useTransition) {
			for (var i=0; i < me._map_1.ggMarkerInstances.length; i++) {
				me._map_1.ggMarkerInstances[i].ggEvent_sizechanged();
			}
			me._map_1.ggUpdateConditionResize();
		}
		me.__41.appendChild(me._map_1);
		el=me._map_2=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = 'FloorPlan02';
		el.ggId="Map 2-\ubaa8\ubc14\uc77c-\ud655\ub300";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 99.3549%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((99.3549% + 0px) / 2) + 0%);';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("2\uce35") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_2.style.transition='';
				if (me._map_2.ggCurrentLogicStateVisible == 0) {
					me._map_2.style.visibility=(Number(me._map_2.style.opacity)>0||!me._map_2.style.opacity)?'inherit':'hidden';
					if (me._map_2.ggMapNotLoaded && me._map_2.ggInitMap) {
						me._map_2.ggInitMap(false);
						me._map_2.ggInitMapMarkers(true);
					}
					me._map_2.ggVisible=true;
				}
				else {
					me._map_2.style.visibility="hidden";
					if (me._map_2.ggClearMap) me._map_2.ggClearMap();
					me._map_2.ggVisible=false;
				}
			}
		}
		me._map_2.logicBlock_visible();
		me._map_2.ggCurrentLogicStateVisible = -1;
		me._map_2.ggUpdateConditionResize=function () {
			var mapDetails = player.getMapDetails(me._map_2.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._map_2.ggCalculateFloorplanSize(mapDetails);
				me._map_2.ggShowSimpleFloorplan(mapDetails);
				me._map_2.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._map_2.ggRadar) me._map_2.ggRadar.update();
		}
		me._map_2.ggUpdatePosition=function (useTransition) {
			for (var i=0; i < me._map_2.ggMarkerInstances.length; i++) {
				me._map_2.ggMarkerInstances[i].ggEvent_sizechanged();
			}
			me._map_2.ggUpdateConditionResize();
		}
		me.__41.appendChild(me._map_2);
		el=me._image_2=document.createElement('div');
		els=me._image_2__img=document.createElement('img');
		els.className='ggskin ggskin_image_2';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAitJREFUeF7tmuFOwzAMhLM3gycDngzebJPFgqKqaWznzp5IKvEH0vjuyzlbQ29l8eu2uP+yAewELE5gt8DiAdib4G6B3QKLE/C2wFspRX4+X4ifS5MHwPfTfPX+Xkr5SQQhxj8aTaJFNKkuKwBZcSl2vLIgiHlZELceK4BeQREQDeFKy5e2Pa0AxOixBVr6URCuzIsetS/1wMblqDgbArS+B4CwgIpQ7Va/g+B1vQAoYgYg4OZNvdIRRxF1UotWZyYBVSdN3LMAdX4EAGY7UM0jWqBNK1oser7TLkYlAN0OIebRCUBBCDPPAjCzJ4SaZwLwQAg3zwZggZBiPgKABoI8uZ09Ytc9hfpsgf4U6H2bHa1w7z6q+agEaD8djhDo5q'+
			'MBaNohJPYt6agWaGv2jtXqGPVpTq9vLL+PBqDdC0LiH90CWvOhbRCVAKv5MAgRAEbm//X3gJH52uvacZb9TTWWmQCrKet4lcHRIBYArxnvfSOf3b8zAMyamL3fBAMNACUeNc8QBhIAWjR6vlMYKAAssax5/2AgALBFUuefBUAV12SWVmcGAE1UZ+ei1PMCoIgZbtkv8t/hLPPakyXTo7QnAfeLlTIVV6y454wx5SUpERplXpMEtRZrAnrxVxecWPWzW3t61MdqVgAion1JSuImxbLfE2xflaO2QF0FOdiUQpnGj4lwafIkAJzi3Ok2gFz++dV3AvLXIFfBTkAu//zqOwH5a5CrYPkEPADiMJpBN5ipjwAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 100px;';
		hs+='top : 50px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_2.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._image_2.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._image_2.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._image_2.style.transition='right 0s, top 0s';
				if (me._image_2.ggCurrentLogicStatePosition == 0) {
					me._image_2.style.right='15px';
					me._image_2.style.top='15px';
				}
				else {
					me._image_2.style.right='100px';
					me._image_2.style.top='50px';
				}
			}
		}
		me._image_2.logicBlock_position();
		me._image_2.ggUpdatePosition=function (useTransition) {
		}
		me.__41.appendChild(me._image_2);
		me.__38.appendChild(me.__41);
		el=me.__39=document.createElement('div');
		el.ggId="\uce35\uc218\ubc30\uacbd-\ud655\ub300";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.627451);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='bottom : 20px;';
		hs+='cursor : pointer;';
		hs+='height : 35px;';
		hs+='left : calc(50% - ((65px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 65px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__39.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__39.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__39.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__39.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__39.style.transition='left 0s, bottom 0s';
				if (me.__39.ggCurrentLogicStatePosition == 0) {
					me.__39.style.left = 'calc(50% - (65px / 2))';
					me.__39.style.bottom='40px';
				}
				else {
					me.__39.style.left='calc(50% - ((65px + 0px) / 2) + 0px)';
					me.__39.style.bottom='20px';
				}
			}
		}
		me.__39.logicBlock_position();
		me.__39.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_floor') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__39.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__39.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__39.style.transition='left 0s, bottom 0s';
				if (me.__39.ggCurrentLogicStateVisible == 0) {
					me.__39.style.visibility="hidden";
					me.__39.ggVisible=false;
				}
				else {
					me.__39.style.visibility=(Number(me.__39.style.opacity)>0||!me.__39.style.opacity)?'inherit':'hidden';
					me.__39.ggVisible=true;
				}
			}
		}
		me.__39.logicBlock_visible();
		me.__39.onclick=function (e) {
			player.setVariableValue('vis_floor', !player.getVariableValue('vis_floor'));
		}
		me.__39.ggUpdatePosition=function (useTransition) {
		}
		el=me.__40=document.createElement('div');
		els=me.__40__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uce35\uc218\uc124\uba85-\ud655\ub300";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(34,34,34,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : -5px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 13px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__40.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uce35\uc218\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__40.ggUpdateText();
		el.appendChild(els);
		me.__40.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__40.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('vis_onefloor') == true))
			)
			{
				newLogicStateText = 0;
			}
			else if (
				((player.getVariableValue('vis_secondfloor') == true))
			)
			{
				newLogicStateText = 1;
			}
			else {
				newLogicStateText = -1;
			}
			if (me.__40.ggCurrentLogicStateText != newLogicStateText) {
				me.__40.ggCurrentLogicStateText = newLogicStateText;
				me.__40.style.transition='';
				if (me.__40.ggCurrentLogicStateText == 0) {
					if (me.__40.ggUpdateText) {
					me.__40.ggUpdateText=function() {
						var params = [];
						var hs = player._("1\uce35", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me.__40.ggUpdateText();
					} else {
						if (me.__40.ggUpdatePosition) me.__40.ggUpdatePosition();
					}
				}
				else if (me.__40.ggCurrentLogicStateText == 1) {
					if (me.__40.ggUpdateText) {
					me.__40.ggUpdateText=function() {
						var params = [];
						var hs = player._("2\uce35", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me.__40.ggUpdateText();
					} else {
						if (me.__40.ggUpdatePosition) me.__40.ggUpdatePosition();
					}
				}
				else {
					if (me.__40.ggUpdateText) {
					me.__40.ggUpdateText=function() {
						var params = [];
						var hs = player._("\uce35\uc218\n", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me.__40.ggUpdateText();
					} else {
						if (me.__40.ggUpdatePosition) me.__40.ggUpdatePosition();
					}
				}
			}
		}
		me.__40.logicBlock_text();
		me.__40.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_6=document.createElement('div');
		els=me._image_6__img=document.createElement('img');
		els.className='ggskin ggskin_image_6';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAYAAABxLuKEAAAACXBIWXMAAC4jAAAuIwF4pT92AAAEWUlEQVR4nO2bW28VVRiGn0pL7QFN/AEa7/gbJt61HGyLXngi4oUxIYqiBRFKoAkXApZSEk2gHEREKDQx/gb/gfHSw6XxQA8Uosj24p1JLM43h2+vmenFem52Zs9a36z97vWdVnd7Op0Okf/zWNsL2KhEYQyiMAZRGIMojEEUxiAKYxCFMYjCGERhDKIwBlEYgyiMQRTGoDfrzWefebrpdfQDzwPfAz81+eAff/4l8/2NsGOGgEngW+AU8ES7yxGZO6ZBHgc+BD5OrseS193AShsLSml7xxwG3ntkHWPANbSTWqMtYXqAaeADYDjj/ijwtXGvEdoQZhg4iuJKX864EeArWto5TQuzCdiH4kqZ+DYKXKWFndOkMA'+
			'PAR8AxFHTLshO4SMPZqqmsNIR2yRHn/AkUl94AlkMtKo+mdswB4P0ubYwDV2jIrZoQ5hiwnzBBdAdwPZCtXOoUZgA4geJKlZhSxAgNiFOXMAMopuxDmSg0oyiV1+ZWdQizGXgXlfn9NdhP2QZcArbUYTx0VhpC1exUYLsW40AHeBNYCmk4pDB9KPtMBrRZhgm083cTsPEM6UpTKKbklfl5/AnMAquOuWOoQg4WkEMI04cawkn8C1tCaf0d4GXgocPGdtR4DjrXsI5uhRlG6XgSv1veR03lueT6G2CX01awVN6NMJvQN3wQvyh3UfE3C/z9n/dvI/e457C5DfiSLlO5V5hBlI6n8afke4mNebJdZxF4FV9vtIMuG0/PN512yYe8D0U75SBwtmDcLdQ8zlO9XplIXvfgENezYw4hF/KyjLrsIlFSFlCd4nGrCeAyDreq'+
			'KsxRVOp7/XcFud/pivNuAK8B/zieuRPHSWBZYbagD3QYf51yN5l/xjl/AXgRVbpVSc+QS4tTRph+VLjtLzk+izUUaOeAv5w2QNlqHHjgmDtChb8+FH3QzUiQKfzZZw21CufwucKjLAIv4auQtwNfUCKQ5wkziALtdMG4PFZRBvuc9XVKt9xGvZEnlb8AXACezBtkpetelE67OY5cobuYUkSayi9SPRnsQgXqHuBO1gBLmFngdVSzeFhGvU9doqQsIHGuIrevwhjwFPBc1k1LmB/wN2NLrO996uYmqpxvUN3lf7duWIbOAnsrPgTUEB5B2SdkTCniFtUbz/PA29bNPIXn0BFl2dS4hoq/uQpzQpI2nvdLjJ1HMfRXa0DR1juTGChKs2mdch7fWUooFoFXyM9W19AX+FueoTJN5Mnk9RPj/irKPjMlbDVBmq0usL67fo'+
			'jOat6ixBFo2WB1kuzUfQfFlJmSdpoibTzXkusOaib3UvJcuMqxw2mk+qfJ9TJwnPpTspebSJDr6ODqAPBH2clVz2Nm0C47hdznM9qNKUUsoPbhO3ICbRY9Wf8sWvCrzV5gK6p1QvQ+rWL9ajNTmEj7P07csERhDKIwBlEYgyiMQRTGIApjEIUxiMIYRGEMojAGURiDKIxBFMYgCmPwL1w8xZQZ/Qx/AAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 6-\ud655\ub300";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:180,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 10px;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='top : calc(50% - ((10px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._image_6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_6.logicBlock_angle = function() {
			var newLogicStateAngle;
			if (
				((player.getVariableValue('vis_floor') == true))
			)
			{
				newLogicStateAngle = 0;
			}
			else {
				newLogicStateAngle = -1;
			}
			if (me._image_6.ggCurrentLogicStateAngle != newLogicStateAngle) {
				me._image_6.ggCurrentLogicStateAngle = newLogicStateAngle;
				me._image_6.style.transition='transform 0s';
				if (me._image_6.ggCurrentLogicStateAngle == 0) {
					me._image_6.ggParameter.a = 0;
					me._image_6.style.transform=parameterToTransform(me._image_6.ggParameter);
				}
				else {
					me._image_6.ggParameter.a = 180;
					me._image_6.style.transform=parameterToTransform(me._image_6.ggParameter);
				}
			}
		}
		me._image_6.logicBlock_angle();
		me._image_6.ggUpdatePosition=function (useTransition) {
		}
		me.__40.appendChild(me._image_6);
		me.__39.appendChild(me.__40);
		me.__38.appendChild(me.__39);
		el=me._m=document.createElement('div');
		el.ggId="\uce35\uc218-\ud655\ub300-m";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.627451);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 20px;';
		hs+='bottom : 20px;';
		hs+='cursor : pointer;';
		hs+='height : 80px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._m.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._m.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._m.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._m.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._m.style.transition='left 0s, bottom 0s';
				if (me._m.ggCurrentLogicStatePosition == 0) {
					me._m.style.left = 'calc(50% - (60px / 2))';
					me._m.style.bottom='40px';
				}
				else {
					me._m.style.left='calc(50% - ((60px + 0px) / 2) + 0px)';
					me._m.style.bottom='20px';
				}
			}
		}
		me._m.logicBlock_position();
		me._m.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_floor') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._m.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._m.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._m.style.transition='left 0s, bottom 0s';
				if (me._m.ggCurrentLogicStateVisible == 0) {
					me._m.style.visibility=(Number(me._m.style.opacity)>0||!me._m.style.opacity)?'inherit':'hidden';
					me._m.ggVisible=true;
				}
				else {
					me._m.style.visibility="hidden";
					me._m.ggVisible=false;
				}
			}
		}
		me._m.logicBlock_visible();
		me._m.ggUpdatePosition=function (useTransition) {
		}
		el=me.__1m=document.createElement('div');
		els=me.__1m__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="1\uce35-\ud655\ub300-m";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(34,34,34,1);';
		hs+='cursor : pointer;';
		hs+='height : 50%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='@import url(\"https:\/\/fonts.googleapis.com\/css2?family=Nanum+Gothic:wght@400;700&display=swap\"); font-family: \"Nanum Gothic\", sans-serif; word-break:keep-all; line-height:17px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 13px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__1m.ggUpdateText=function() {
			var params = [];
			var hs = player._("1\uce35", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__1m.ggUpdateText();
		el.appendChild(els);
		me.__1m.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1m.onclick=function (e) {
			player.openNext("{node2}","");
			player.setVariableValue('vis_onefloor', true);
			me.__48.style.transition='none';
			me.__48.style.visibility='hidden';
			me.__48.ggVisible=false;
			me.__49.style.transition='none';
			me.__49.style.visibility=(Number(me.__49.style.opacity)>0||!me.__49.style.opacity)?'inherit':'hidden';
			me.__49.ggVisible=true;
			player.setVariableValue('vis_floor', false);
			player.setVariableValue('vis_secondfloor', false);
		}
		me.__1m.ggUpdatePosition=function (useTransition) {
		}
		me._m.appendChild(me.__1m);
		el=me.__2m=document.createElement('div');
		els=me.__2m__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="2\uce35-\ud655\ub300-m";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border-color : rgba(204,204,204,0.627451);';
		hs+='border-style : solid;';
		hs+='border-width : 1px 0px 0px 0px;';
		hs+='bottom : 0px;';
		hs+='color : rgba(34,34,34,1);';
		hs+='cursor : pointer;';
		hs+='height : 50%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='@import url(\"https:\/\/fonts.googleapis.com\/css2?family=Nanum+Gothic:wght@400;700&display=swap\"); font-family: \"Nanum Gothic\", sans-serif; word-break:keep-all; line-height:17px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 13px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__2m.ggUpdateText=function() {
			var params = [];
			var hs = player._("2\uce35", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__2m.ggUpdateText();
		el.appendChild(els);
		me.__2m.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__2m.onclick=function (e) {
			player.setVariableValue('vis_secondfloor', true);
			player.openNext("{node6}","");
			me.__48.style.transition='none';
			me.__48.style.visibility='hidden';
			me.__48.ggVisible=false;
			me.__49.style.transition='none';
			me.__49.style.visibility=(Number(me.__49.style.opacity)>0||!me.__49.style.opacity)?'inherit':'hidden';
			me.__49.ggVisible=true;
			player.setVariableValue('vis_floor', false);
			player.setVariableValue('vis_onefloor', false);
		}
		me.__2m.ggUpdatePosition=function (useTransition) {
		}
		me._m.appendChild(me.__2m);
		me.__38.appendChild(me._m);
		me.divSkin.appendChild(me.__38);
		el=me.__16=document.createElement('div');
		el.ggId="\uc0ac\uc6a9\uc548\ub0b4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__16.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__16.ggUpdatePosition=function (useTransition) {
		}
		el=me.__17=document.createElement('div');
		el.ggId="\uc0ac\uc6a9\uc548\ub0b4\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.666667);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__17.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__17.onclick=function (e) {
				player.playSound("_background","1");
		}
		me.__17.ggUpdatePosition=function (useTransition) {
		}
		el=me.__18=document.createElement('div');
		el.ggId="\uc0ac\uc6a9\uc548\ub0b4\ucee8\ud150\uce20";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 700px;';
		hs+='left : calc(50% - ((600px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((700px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 600px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__18.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__18.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width <= 960))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__18.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__18.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__18.style.transition='transform 0s';
				if (me.__18.ggCurrentLogicStateScaling == 0) {
					me.__18.ggParameter.sx = 0.75;
					me.__18.ggParameter.sy = 0.75;
					me.__18.style.transform=parameterToTransform(me.__18.ggParameter);
					skin.updateSize(me.__18);
				}
				else {
					me.__18.ggParameter.sx = 1;
					me.__18.ggParameter.sy = 1;
					me.__18.style.transform=parameterToTransform(me.__18.ggParameter);
					skin.updateSize(me.__18);
				}
			}
		}
		me.__18.logicBlock_scaling();
		me.__18.ggUpdatePosition=function (useTransition) {
		}
		el=me.__36=document.createElement('div');
		el.ggId="\ubaa8\ub378\ud558\uc6b0\uc2a4\uad00\ub78c";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 10%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 40px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__36.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__36.ggUpdatePosition=function (useTransition) {
		}
		el=me.__37=document.createElement('div');
		els=me.__37__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubaa8\ub378\ud558\uc6b0\uc2a4 \uad00\ub78c";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(34,34,34,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='@import url(\"https:\/\/fonts.googleapis.com\/css2?family=Nanum+Gothic:wght@400;700&display=swap\"); font-family: \"Nanum Gothic\", sans-serif; letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 26px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__37.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ubaa8\ub378\ud558\uc6b0\uc2a4 \uad00\ub78c", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__37.ggUpdateText();
		el.appendChild(els);
		me.__37.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__37.ggUpdatePosition=function (useTransition) {
		}
		el=me._container_40=document.createElement('div');
		el.ggId="Container 4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 70px;';
		hs+='left : 400px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_40.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_40.ggUpdatePosition=function (useTransition) {
		}
		el=me._tip0=document.createElement('div');
		els=me._tip0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="TIP";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(254,153,0,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 26px;';
		hs+='font-weight: 600;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tip0.ggUpdateText=function() {
			var params = [];
			var hs = player._("Tip", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tip0.ggUpdateText();
		el.appendChild(els);
		me._tip0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tip0.ggUpdatePosition=function (useTransition) {
		}
		me._container_40.appendChild(me._tip0);
		me.__37.appendChild(me._container_40);
		me.__36.appendChild(me.__37);
		me.__18.appendChild(me.__36);
		el=me.__25=document.createElement('div');
		el.ggId="\uc544\uc774\ucf58";
		el.ggDy=-50;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 30%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((30% + 0px) / 2) - 50px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__25.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__25.ggUpdatePosition=function (useTransition) {
		}
		el=me.__110=document.createElement('div');
		el.ggId="\uc544\uc774\ucf581";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : -100px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 33.5%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__110.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__110.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_8=document.createElement('div');
		els=me._image_8__img=document.createElement('img');
		els.className='ggskin ggskin_image_8';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 8";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 120px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_8.ggUpdatePosition=function (useTransition) {
		}
		el=me.__35=document.createElement('div');
		els=me.__35__img=document.createElement('img');
		els.className='ggskin ggskin__35';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uc67c\ucabd";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 50px;';
		hs+='left : -40px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__35.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__35.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_direction') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__35.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__35.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__35.style.transition='left 300ms ease 0ms, top 300ms ease 0ms';
				if (me.__35.ggCurrentLogicStatePosition == 0) {
					me.__35.style.left='-30px';
					me.__35.style.top = 'calc(50% - (50px / 2))';
				}
				else {
					me.__35.style.left='-40px';
					me.__35.style.top='calc(50% - ((50px + 0px) / 2) + 0px)';
				}
			}
		}
		me.__35.logicBlock_position();
		me.__35.ggUpdatePosition=function (useTransition) {
		}
		me._image_8.appendChild(me.__35);
		el=me.__34=document.createElement('div');
		els=me.__34__img=document.createElement('img');
		els.className='ggskin ggskin__34';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uc624\ub978\ucabd";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:180,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 50px;';
		hs+='position : absolute;';
		hs+='right : -40px;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__34.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__34.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_direction') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__34.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__34.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__34.style.transition='right 300ms ease 0ms, top 300ms ease 0ms';
				if (me.__34.ggCurrentLogicStatePosition == 0) {
					me.__34.style.right='-30px';
					me.__34.style.top = 'calc(50% - (50px / 2))';
				}
				else {
					me.__34.style.right='-40px';
					me.__34.style.top='calc(50% - ((50px + 0px) / 2) + 0px)';
				}
			}
		}
		me.__34.logicBlock_position();
		me.__34.ggActivate=function () {
			player.setVariableValue('vis_direction', !player.getVariableValue('vis_direction'));
		}
		me.__34.ggUpdatePosition=function (useTransition) {
		}
		me._image_8.appendChild(me.__34);
		el=me._timer_2=document.createElement('div');
		el.ggTimestamp=skin.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=150;
		el.ggId="Timer 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 88px;';
		hs+='position : absolute;';
		hs+='top : 343px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._timer_2.ggIsActive=function() {
			return (me._timer_2.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me._timer_2.ggTimestamp) / me._timer_2.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._timer_2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._timer_2.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._timer_2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._timer_2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._timer_2.style.transition='';
				if (me._timer_2.ggCurrentLogicStateVisible == 0) {
					me._timer_2.style.visibility=(Number(me._timer_2.style.opacity)>0||!me._timer_2.style.opacity)?'inherit':'hidden';
					me._timer_2.ggVisible=true;
				}
				else {
					me._timer_2.style.visibility=(Number(me._timer_2.style.opacity)>0||!me._timer_2.style.opacity)?'inherit':'hidden';
					me._timer_2.ggVisible=true;
				}
			}
		}
		me._timer_2.logicBlock_visible();
		me._timer_2.ggActivate=function () {
			player.setVariableValue('vis_direction', !player.getVariableValue('vis_direction'));
		}
		me._timer_2.ggCurrentLogicStateVisible = -1;
		me._timer_2.ggUpdateConditionTimer=function () {
			me._timer_2.logicBlock_visible();
		}
		me._timer_2.ggUpdatePosition=function (useTransition) {
		}
		me._image_8.appendChild(me._timer_2);
		me.__110.appendChild(me._image_8);
		el=me._text_1=document.createElement('div');
		els=me._text_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -10px;';
		hs+='color : rgba(34,34,34,1);';
		hs+='cursor : default;';
		hs+='height : 80px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='@import url(\"https:\/\/fonts.googleapis.com\/css2?family=Nanum+Gothic:wght@400;700&display=swap\"); font-family: \"Nanum Gothic\", sans-serif; line-height:20px; letter-spacing:-1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._text_1.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ub9c8\uc6b0\uc2a4 \uc67c\ucabd\uc744 \ub204\ub978\ucc44 \uc6c0\uc9c1\uc774\uc2dc\uba74\n\uacf5\uac04\uc744 \ub458\ub7ec\ubcf4\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4.", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_1.ggUpdateText();
		el.appendChild(els);
		me._text_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_1.ggUpdatePosition=function (useTransition) {
		}
		me.__110.appendChild(me._text_1);
		me.__25.appendChild(me.__110);
		el=me.__27=document.createElement('div');
		el.ggId="\uc544\uc774\ucf582";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((33.5% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 33.5%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__27.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__27.ggUpdatePosition=function (useTransition) {
		}
		el=me.__29=document.createElement('div');
		els=me.__29__img=document.createElement('img');
		els.className='ggskin ggskin__29';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ub9c8\uc6b0\uc2a4";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 120px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__29.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__29.ggUpdatePosition=function (useTransition) {
		}
		el=me.__33=document.createElement('div');
		els=me.__33__img=document.createElement('img');
		els.className='ggskin ggskin__33';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uc544\ub798";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:270,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 20px;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__33.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__33.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_direction') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__33.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__33.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__33.style.transition='left 300ms ease 0ms, bottom 300ms ease 0ms';
				if (me.__33.ggCurrentLogicStatePosition == 0) {
					me.__33.style.left = 'calc(50% - (50px / 2))';
					me.__33.style.bottom='10px';
				}
				else {
					me.__33.style.left='calc(50% - ((50px + 0px) / 2) + 0px)';
					me.__33.style.bottom='20px';
				}
			}
		}
		me.__33.logicBlock_position();
		me.__33.ggUpdatePosition=function (useTransition) {
		}
		me.__29.appendChild(me.__33);
		el=me.__32=document.createElement('div');
		els=me.__32__img=document.createElement('img');
		els.className='ggskin ggskin__32';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uc704";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:90,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -40px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__32.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__32.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_direction') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__32.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__32.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__32.style.transition='left 300ms ease 0ms, top 300ms ease 0ms';
				if (me.__32.ggCurrentLogicStatePosition == 0) {
					me.__32.style.left = 'calc(50% - (50px / 2))';
					me.__32.style.top='-30px';
				}
				else {
					me.__32.style.left='calc(50% - ((50px + 0px) / 2) + 0px)';
					me.__32.style.top='-40px';
				}
			}
		}
		me.__32.logicBlock_position();
		me.__32.ggActivate=function () {
			player.setVariableValue('vis_direction', !player.getVariableValue('vis_direction'));
		}
		me.__32.ggUpdatePosition=function (useTransition) {
		}
		me.__29.appendChild(me.__32);
		me.__27.appendChild(me.__29);
		el=me.__28=document.createElement('div');
		els=me.__28__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -10px;';
		hs+='color : rgba(34,34,34,1);';
		hs+='cursor : default;';
		hs+='height : 80px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='@import url(\"https:\/\/fonts.googleapis.com\/css2?family=Nanum+Gothic:wght@400;700&display=swap\"); font-family: \"Nanum Gothic\", sans-serif; line-height:20px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__28.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ub9c8\uc6b0\uc2a4 \ud720\uc744 \uc0ac\uc6a9\ud558\uc2dc\uba74\n\ud655\ub300\/\ucd95\uc18c\ub97c \ud558\uc2e4 \uc218 \uc788\uc73c\uc2ed\ub2c8\ub2e4.", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__28.ggUpdateText();
		el.appendChild(els);
		me.__28.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__28.ggUpdatePosition=function (useTransition) {
		}
		me.__27.appendChild(me.__28);
		me.__25.appendChild(me.__27);
		el=me.__31=document.createElement('div');
		el.ggId="\uc544\uc774\ucf583";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : -100px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 33.5%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__31.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__31.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_9=document.createElement('div');
		els=me._image_9__img=document.createElement('img');
		els.className='ggskin ggskin_image_9';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAAEsCAYAAADq/K67AAAACXBIWXMAAAsTAAALEwEAmpwYAAAc9klEQVR4nO3deXBkZ3nv8W93a2lJPZtmkT2Lx7N5xmPPyAvM8UKAGDAEiB0HEiqYEMoFFErgBi4piEPuvbm5EIqspBKqgZgkLC5fXxzAxibeXdjj2Mdm7JFnPNizmpnR7NpbUkut7r5/nNZMS31aaknd5z3v+z6fKlepW+0+j0b69XvOe94lks/nEUKYLaq6ACFE7UnQhbCABF0IC0jQhbCABF0IC0jQhbCABF0IC0jQhbCABF0IC0jQhbCABF0IC0jQhbCABF0IC0jQhbCABF0IC0jQhbCABF0IC0jQhbCABF0IC0jQhbCABF0IC0jQhbCABF0IC0jQhbBAneoCdJFOJlYAC4E7gReBdcBqIFd4yW5gI9AX70'+
			'jdmU4mbo53pB5VUasQU0Vkp5by0snEl4F9wDuAm/GCXamngeeBe4AVEnqhkgTdRzqZWAt8BPgYXis9Xz8AHox3pO6twnsJMWsS9CLpZKIF+ALwWbzT9GrKAn8Z70j9ZZXfV4gZSdAL0snEV/Fa8dmcns/F88CvxztS6RofR4jzJOhAOpm4G/hwgIc8CeyId6SOB3hMYTGrg55OJtYDPwM2Kzj8Gbyw/0rBsYVlrL2Pnk4m3go8h5qQA6wAXkgnExcrOr6wiJVBTycT1wA/wQubSivwPmyEqCnrgp5OJpYA9wNLVNdSsDadTOxUXYQwm3VBB3ZS+5712boxnUz8QzqZiKsuRJjJqqAXete3qq6jjM/iDdARouqs6XVPJxMfAb6vuo4KLIp3pAZUFyHMYlOL/h3VBVSiPx3bpboGYR4rgp5OJh4BGlTXUYlF8ezGV768'+
			'TIsPJaEP44NeOGW/WXUds7GxdfSOd731TVtU1yHMYXzQgb9TXcBsRSN5/uqmo087jtOquhZhBqODnk4mkqgfFDMn29qGl9+8oe8fHceRxUHEvBkb9HQysQ34lOo65uM3L+u9Hfgt1XUI/RkbdODbqguYr+1tw5E3r0z9g+M4q1TXIvRmZNDTycSngOtU11ENH7/mzGrgK47jRFTXIvRlZNCBpOoCqmXLshGuWD78YeBW1bUIfRkX9HQy8X9V11Btn95xqh74U8dxtOxYFOoZFfRCB9yHVNdRbVuXj9CWyOwAPqq6FqEno4KOAR1w5Xzq2tMR4KOO41RjVVphGWOCnk4mPoQhHXB+blrXD7AN+KB0zInZMibowOdVF1Brv3flOYA78HaJEaJiRgQ9nUx8Aniz6jpq7b2b+gA2AR9wHMeI350Ihil/LJ9QXUAQLlk0yv'+
			'olaYCPA8sVlyM0on3Q08nEb2BBaz7hnev7AS4D3qu4FKER7YMOfEl1AUFyVqUmvrzDcRwt5tgL9bQOeuG++Y2q6wjS+iWjbFsxDOAA1ysuR2hC66ADX1NdQNCikTxblo0A1CMDaESFtA16YWnk31BdhwrO6vOn7+9wHKdNZS1CD9oGHfiy6gJU2bZimHhdDmAVcIvicoQGdA661otKzEe8Lkd72zBAHfBuxeUIDWgZ9HQy8UGgRXUdKm1sPb+9+nbHcTaorEWEn5ZBx+LWfMK1K89fp68F3q6uEqED7YJe2CTR2MkrldqybIRF8Sx469XvUFyOCDntgo4339zq03aAlvocbS2ZiYdXO46zUmU9Itx0DPr7VBcQFqsXjk58eTlwpcJSRMhpFfR0MtGCnKaed+OawYkvE8A1CksRIadV0IF3oOmGDLVQ1PMOcIXjOI2q'+
			'ahHhplvQ36+6gDBZ3pKhpT438XAbcJHCckSIaRP0dDKxAtisuo4waanP8c71fRMPL0OCLsrQJuhABnir6iLC5kBP08SXTcBWhaWIENMp6LepLiCMrr5oqPjhVsdxYqpqEeGlU9A3qS4gjIpGyAFsBxYoKkWEmE5Bt340nJ+GWL744Ra8U3ghJtFi7+3C3HMJuo+lTePFD5fh3X48qaaauUknEzOuUx/vSOVneo0oT4ug403ciKsuIowWNGaLHzbjdch1qqmmcpWEu9zrJfSzp0vQP6a6gLBqqc9x51u6+OrO81uoh3rFmdkGvJL3kODPTJdr9F7VBYRVNJLH7UoUP7U5jJs7pJOJSDVCXu69a/G+JgndH0QZsrHgNA72TLqq2QKE6hZbEEGs5QeJCXQJugyUmcZ2b1mpCSsI0e816PBJ2P2F5g9iBqtVFxBmKxeMFT'+
			'9cREjupasKnYS9lC5Bt36hiemsWzxa/HApsF5RKeepDpvq44dN6IOeTiZk6OsMljVnih824oVdmbCELCx1hEHog45MTZ1RvK7k7pKyU/ewhSts9aiiQ9CXqS4g7I4NlOy12KyijrCGKqx1BUmHoP9IdQFhFyl9uMr3hTUU9jCFvb5a0yHoMkljBo11ualPLVdRhwgvHYKutGNJU4Guq6dLa5n6xgIt6qwFHYK+RXUBGgrsdqQuIQeoi+Y5/Net2tRbTToEXcxeYuaX2GnlgjG+9+m11oVdgm6mQP6QdWrNi912eY/qEgInQTeTdGBOoz6a5+EvrtTyQ2quJOhmCmS2WK2PUUtvv3SAP/7AFVr/DLMhQRfW+rO3HFddQmAk6AYYzwXbMOnemk9YFM9y93+zo2NOh6BnZ36J3YbGQrXOhFY+cHk3juMYH3Ydgr5PdQFh'+
			't3npSGDHMqU1L/a3N/9KdQk1p0PQB1QXEHaD0qLPy5tXpvjUrVca9wFWTIegixmcStUHchwTW/MJn7j2jOoSakqHoH9EdQFhd7hXlryfryuWD/Pp28y93aZD0A+qLiDs9p6p/fRzk1vzCZ+77qSxHXM6BP1p1QWEXfdIyT4caRV16G7VwjHeNHnTSmPoEPT/VF1A2N20rn/qU3JLco6+cOMJI1v10Ac93pHSasPAoA2OxXjpZMms1MFqHsOG0/YJbS0Zrl9d1X++UAh90NPJxBLkFltZvSN17D5V26Db5jM7ThnXqoc+6PGOVC8S9LL6R33voZ8Iug6TrFo4xsbWtFFhD33QC8wfujRHv+pr9Hv6WLXe36bT9mKfdcy6YtQl6K+rLiCsHju8aOpTeeCcglKMsq1tmIsTY8a06roEfY/qAsJqLOv7K5Rr9Cq4fbs5n5'+
			'e6BH2T6gLCKD0enbplMsAwco1eFdev9u6pm9Cq6xL0S1QXEEZv9DUyli35GzwHHK7G+9t6fT5hWXOGG9eYcXKkS9CfUF1AGO0qvX8O0AsEN2/VcDdv6FNdQlXoEvRHVRcQRp2l988BXkNGxlWNs8qM03ctgh7vSMniEz4O+99a2+O6rgS9Sprqc7z9Uv2HcWgR9HQy8X5kosYkXQMNnB3ynYdelTEHtl+fF5uY6KJzq65F0OMdqQeRnuRJnj660O/pYWBvwKUY79cuGaStJaO6jHnRIugFcvpe5JXTvnPQTwCnAy7FeIvj4yxo9K6GdG3VdQq6jI4rGMpEGfQf4/4SMlimJiY65XSlU9BFwd4zzezxX1Vmj+u6Q0HXYwPdb7PpFPTVqgsIizK31XLAKwGXYo1LF4+e/1rH03edgr5bdQFhUWagzEngQMClWGVb27Dq'+
			'EuZMp6A/pLqAMDjcG+e1c76bpb4AdFXjGHJrzZ/O1+k6Bd2cqUTzsPtU2RVfd7uuq//IjhDbIUEPRBsytJMXTyT8nk4DuwIuxTo6X6drE/R4R2o33u0ja3WP1PFfxxb4fWs/8GrA5VinMabvcFhtgl5g9ZJSz/mHHOBlLP+3CUpqTLfIeHSr2upT95/uX+L39BjwnOu6+WocQzriprdd05533YLue1/JBv3pWLne9uPAUwGXY62NrRfmVul0na5b0J9XXYAqTxwpWQRywm7XdfdX6zjxjlRVzgxMtax5XHUJc6Jb0J9VXYAqP36t1e/pcWRvukAtbZKgB2Gt6gJU6E3XcbTfd5GJHuCRah5LrtGnt6Axy+3b9BvSoVvQN+EN9bTKzw4sLvet3cisvkA1xnKsWjimuoxZ0yro8Y7Un2PhfOsH/XvbAe6vVm+7qNyzRy'+
			'/c5tSlQ06roBdYtaTU2aF6Tgw2+H2rjyqftovKNNXnVJcwazoG3Sr/dbzsIJlngDeCq0RM2LxUv9W0dQy6VUtKFZ8mTvGArPaqRquGPe86Bl2/npA5GhyLcWzA97S9H7mtpszFC/RbKFLHoCewZCjs/u54uevzR6ni1shidnL6XaLrF/R4R+r3Af0+UuegzJJRAI+4rqvfhaJQRrugF+g5V3CWfHZKBTgF/CLgUkSRFYnJ7YwOt9h0Dbrx1+m96Tr2+wd9F3A04HJEkYTcXguM8aPj+tOxclsuPeu6bm/Q9YgLRku3qg49XYO+W3UBtdbl3wk3hOWr7ITByZTv7ybUdA268Z1xh3t9T9sPIGPblZNe9+DoN31olk6lfE/b9+ItNCEUimqYGg1LBuBfVBdQS+nxKMf9B8rscV1Xv2FZhulL++57F2q6Bn0AgwfNZHIR'+
			'dpfeQ+9FtkQOhdP+Z1uhpmXQ4x2pAQxe9TQa8Z152ksAP7MsJTWzc8MS9CAZ2ymV8t8S+ThwKOBSxBS5fIQD/uMbQk3noBs7L31wzDfoXa7rGvsz6yIayZNo0O+qUeeg71FdQIDywJEgDiRrxs1Mxz3YdA76N1UXUAv96RgPH1w89ek0Ac3Dl2v06Y1mo/yqz3ehzlCrU13APLSpLqAaugYa6Dzdwlg2wvc6l7O0eZz93SXXgGNYMHZAByOZKPfsXaa6jFnTOehRvF7o0C8BnclFGBiNMTga49hAIz0jdZwdquOH+5Zyw5pBnizanKF7xPdXksVbbEIoNuDfURp62gY93pF6KZ1MHEdx0MeyEUazUeqjebqH6zg7XM/Cxixdgw0cH2igrSXD/u542VbgyfI7sEw6DN5ikEKxoYyeV7vaBr3gWeAqqrgnW386xlAmRm'+
			'NdjgUNWYYyMfrTMfpHY3QNNBKN5NneNswbfY24XQma6nJBnMoN4t1HD0S8I5WXTrnK6bDkttZBj3ekvphOJhqAJ775i7aPtzTkbl3enCGXn/w3Go3kS56beH48F+HVs00MZ2L0pWNcsXyEu/eE7hosC3SrLkLoOVgGNA86QLwj9TmAexxnCXDrfN/PZ+ipakPAThnjHg6He/XrcQcDgl7klOoC5imH13KfBjrxxrU/B+xHZqyFxuv+W1eHnklBP4Z3HVt2/6KQyACjeC31EPBL4DW8uebPAyeAHlmzPZx0nLkGZgX9LF5rqDroWbxe8jTeLLs+YARv+avX8Wo8ijey77TrulYsdGmK69ekePVss+oyZs2koI/htYxbqvy+abx9yHOFY4wBw3g94d14rXIG7z53F16LnMIL+XG8bZMGdbvGlp53fzpOUQWzgp4CvgT8'+
			'kAubPLQCzXhjxSuVxxuFlsEL91m8cBcHfahwvHPAkJxm2yGTi/DT8jvbhpoxQS/cy9yHZXuzieAMajoqDvSe1CJEoEZ8RsXpMFgGJOhiGjKTbbK+UX1PgCXoQlTol2f1vIcOEnQhKvaqBF2YSk7fL/C7RteFvpUbKtsZ+Xq2M/JotjPyWrYz8knV9YgLNrbqu2Sfvr0LGst2Rnbg7Yr6SeAWIAasw7v/v7zwGOAtwLdV1ChKvXQydBOeKiZBr6FsZ+R/A/+IN2f+94GLgEXAZrzBPDPZXLPixKzpOPR1ggR9HrKdkX8DdgKPAe8C3gNsxBs1dxFwCfA/53GIq7Kdkati7fnd8yx1XmQ4LAz5L8GtDaOCnu2MfL3w5dg0L4txYTunia+3AVvxllT+Dt6U11WF51rxTqvX4U1O6ccLcAJoAj5WxR9hqga8MwChmK6z1i'+
			'YYFXTgw3jXuHN1CfC2KtVSLe8Cfu54C2vkXNdVskik7a36K2f0PW0H83rdjWv93jjZ9NuO43wL7/Lgi6rrsdWe06VB12X4K5gXdONcvGz08uWLxz4JXAvc5DjOCtU12WjNoumuBsPPtKAbt/Z5Y32OkQuzptrw+g6UkMEz+jIt6PptilWB2952ZuLL1Xi9+iJgPttkacW0oOu+QKSv5UvOnzbW4d0JEAF7Q8P91oqZFnQjV3q5cn2K+rrzZ83tjuMsUFWLjafvo1n9Y6L/TzDZWdUF1MKWtUNkxs/f2boMCN0OEyY72FOy6aV2TAu6sXumL2w5v7bkZrz7/SIgr/jcWtONBF0T77vh/K7JdWiwg6xJFjbqf0VoWtCNGzAzoS426dL4WsdxlK07bNt1en209MfVabAMmBf0fgztkNu6btKdw8sA/S8cNfHIIf3bD6OC'+
			'HmvP34c38cQ4G1ZN+rG2UNk0V1EFneHbeHPWjAp6QZfqAmph5bLR4odr8UbJiRobGotx84Y+1WXMm4lBP6i6gFqIRvM01ucmHkZQ3CFny3X60YEGHjqg5+4sxUwM+pOqC6iV333H6eKH1zqOY+200aDoutfaVCYG3cjx7gAbVg8XP1yL17KLGmq+cBalNRODflR1AbVy4NikgRtrAb0HYGvggM+oON1urYGBQY+15x9WXUOtNDVOal3WA0sVlWKNF7oSqkuoCuOCnu2MNGDoCLm21kk970sAZZNbwPwOuVw+wuXLzLhba1zQY+35MeAB1XXUwpRbbDFgjaJSrNCXjnHPXjPmDxkX9AIj56VPOXWP4g2cETXSlzZn7VRTg/6Y6gJqoWgBCvB63C9WVIoVMjlzbmoYGfRYe/51pl/bXUuNpbd6FqqowxZdAw2qS6gaI4'+
			'Ne8GPVBVRbrrSFWaygDGuY0uMOZgd9t+oCAjCfzSrEDBb4zEPX8R46mB1041r0aOm86GWO4yhd/sTUW2yZXMR30wZdmdOtOEWsPf96tjPShcJ10KutaH33CQ1c2GJZmeKw/8nvXB65ZXMvTXU51i8ZpaVBz+UBxsaj/PJck+oyqsbYoBf8GPi06iKqpbu/ZIJFAm8Y7GDw1fh75uhCnjnq9RHetK6fo/2NbG8b5n2bejk9VO+Fvz5LLh9hYWOWaCScJwTdI2ZFw6yfptRzGBT0vlTJr6ueEF9+PXnEW5nlYE+cH/2ydJ2M//HW4/Sl6+gZqWNb2zDrl6QZz0ZIZWIsbRpnUXzcdxmnIJwZMmPW2gTTg74PbwloIzqtjpwoOZXMF/7T0v95evWFBz6Dlv/7dSe5eMEY9+xdRltLho2taS5ZNEpr0zitTeO83t3E6HiE'+
			'xro8rU3eKrn10TxtLZlZ1zIyHqV7pI5YJE9fus73g0lnRgc91p7fne2MPAfcorqWaugZMKuVmcnfPy/jgaoltKd9VbRTdQHVsnxxSUsVIWRz0nW9/VQJnX82o1v0gnuBP8WAxRTve6pkx+QxYNznpUpNDYSshKOe8UGPteePZjsjLwDvUV3LfIyMxjh+pmQRhBQaDPWV4KtnfNALkmge9D2HfIdjDqFB0Kea7hRYPgRqw4qgx9rzD2Q7I/1ovJPLUy/5rkTa5bqudkGfTqXXwfKBMDtWBL0giXetrqWf7vS9Q3ja70kb6NwxpoINve4AxNrzd6quYa72HWnxm7kGFgddzI41QS9Iqi5gLu56YLXf0znsmKEnqsCqoMfa83+ouobZ6hus4/lXfbsWxvBG/gkxI6uCXvA7qguYja/fW3bnpQPIqbuokHVBj7Xn7+sbrH'+
			'tIdR2VOHCsmUdfKLt0+7Ou6w4EWY/Ql3VBB3jv56/5zeNn4qEOSS4X4S/u2jDdS4xcAFPUhpVBd103/7t/vv2jp3vCu/jfX3xnA0dOll344CDeFFxlsp2RSPF/KmsRM7My6AVPffDP2p+aJkzKfO0Hl/L4i9MOzf8PQnZ9PjX4E+GXD4FwsDborusOZHORv7v9f20be6YzHPtf53IRvv2T1dz/dMnklWIDwH2u64Z+m8/isE9t+eUDIFjWBr3gceCbX/zGJh5/sZXRjLp/jhPnGrkzuZF//9nKmV76PeCVAEqqiamtfbmzgKkfBHKJMD+RfN7ukYSO46wC7gOu27puiDve38UN2/oCO34uF+Hff7aSux6oaA3Lo8C7Xdd9rcZlzcjE0MXazQ2D9UEHcBznGuBHwNpNa4Z505YBbnvbGVavSNf0uN9/+GJ+/nIr+460'+
			'VPLyMeCPXNe9q6ZFVcDEkIME3QqO47wP+C5Fe47fsK2PO97fxdZ1Q1U7zolzjTy4czn3PHYR0Wjebwnncv4Z+HwYZqtJ0PUjQS/iOM4twDeA84PLd2zt5+X9C/mTD7/BlrVDbFozPOv3PXKyiRf3LeLxF1tp3zTI3Y/Mei207wCfcV03FJt1S9D1I0GfwnGc6/HCfvXU721YNcyhrmZu2NbHe647Ry4fmbqVMePjEbI5iEXh8V+08tSuVq67or/cePWZZIG7gD92XXd0phcHRYKuHwm6D8dx1gNfAT6At3a6CmeAfwK+Eqa516aGPJ+HuqvMDYMEfRqO4/wR8Blgc4CHzQP/Cfy967pPBHjcipga9N0HFvCHf3P5pOfC9AE7X7bfR5+W67rfAD6I17KeC+CQjwB/AHwojCE32Qtzu7TShk1LSc2J67p7Hcf5LPCveK'+
			'H/PWB9FQ/RBzwE/BBvRloQHyhiitZFs9/dRScS9AoUhpvudhznFbxVat4C/BZwHbAG78yoklPaPN7KMKeAF4GHgSfxFnmcfXe+EBWSoM9CIfBdwL2O49wHLAM2AlcC1+BtErEUb5fTHF74B4FuvJZ7D/Ay8AZw2nXd0G2+YKOR0RhHT5WsmW8U6YyrAcdxmigE3XXd2g6vC5CpHXFn+xq49QtXlTxvUmectOg1EJaBLUJMkF53Yb2RtPkxMP8nFGIGYVx8pNok6MJ6A0PmX8FK0IX1fHapNaojDiTookKm9rjnchH2HvbdqdYoEnRhtWwOXt6/QHUZNSdBF1brS6manBgsCbqw2pET5ve4gwRdWG63BaftIEEXlus8KEEXwngHjjWXPGfarTWQoAuLne1rIDVS8Sq8WpOgC2s9v9fsVWWKSdCFtabZe944EnRhrV2v'+
			'LVRdQmAk6MJKfp1wYGZHHEjQhaV+unO56hICJUEXVnqmc4nqEgIlQRfWOd3TwOmeBtVlBEqCLqxjU2/7BAm6qIhJGxA+6voH3dSOOJCgC8sc6mrmUJd/j7vJJOjCKj9/2a5OuAkSdGGNzHik7LBXk0/bQYIuZkH36/RXDi6wYn04PxJ0YY3Hf9GqugRlJOjCCn2Dddz/9Arf75l+2g4SdDFLup6+f+v+1apLUEqCLox3qKu5bGtuCwm6mDXdWvW/vXtt2e/ZcNoOEnQxR7pE/Uvf2mjNApDTkaCLOam7Kp/PhTzs33/4Yp7aZW9PezEJupiz+qvC267f//QKkj9aM+1rbDltBwm6mKe//sGlqkso8f+euIivhbAulSL58H4oC0188vatkb/5zH4STVmldYxmonz93ksq6mG3qTUHadFFFXQeXMB7PncNz7+qbvnkQ1'+
			'3NfPW76yTkZUiLLqrCcZxIfV2e2952mne+uYcr16cCOe5oJsq3f7Kaex67qOL/R4IuxDw4jhMB+LX2Xhob8vzBe0+wYdVwzY531wOr2PXawlndPrMx5CBBF1U2EXaAX7+2h+Nn4tz+7pO88009RKPz/1vrHqjnuw+t5KldrUSjec72Vb72m60hBwm6qLLioE+1Y2s/79rRTfvGFEsXZWhqnLnzbmQ0xqmeBnZ2LubnL7ey70jLnOqyOeQgQRc1Ml3gAa6+bJCrLxvgUFczG1YN07ooQy4XIRrNc/JcI8fPxLnuin7+9cGVs2q1/dgecpCgixqaKey1JgG/QG6viZpRGTQJ+WTSootABNW6S8D9SdBF4GoRegn49CToQqn5hF7CXTkJugiVcsGXUM+PBF0IC0ivuxAWkKALYQEJuhAWkKALYQEJuhAWkKALYQEJuhAW'+
			'kKALYQEJuhAWkKALYQEJuhAWkKALYQEJuhAWkKALYQEJuhAWkKALYQEJuhAW+P/8SkeAC2dPZAAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 9";
		el.ggDx=20;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 110px;';
		hs+='left : calc(50% - ((91px + 0px) / 2) + 20px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 91px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_9.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_9.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_direction') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._image_9.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._image_9.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._image_9.style.transition='left 800ms ease 100ms, top 800ms ease 100ms';
				if (me._image_9.ggCurrentLogicStatePosition == 0) {
					me._image_9.style.left = 'calc(50% - (91px / 2) + (0px / 2) + 20px)';
					me._image_9.style.top='-10px';
				}
				else {
					me._image_9.style.left='calc(50% - ((91px + 0px) / 2) + 20px)';
					me._image_9.style.top='0px';
				}
			}
		}
		me._image_9.logicBlock_position();
		me._image_9.ggUpdatePosition=function (useTransition) {
		}
		me.__31.appendChild(me._image_9);
		el=me._image_10=document.createElement('div');
		els=me._image_10__img=document.createElement('img');
		els.className='ggskin ggskin_image_10';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 10";
		el.ggDx=35;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 110px;';
		hs+='left : calc(50% - ((91px + 0px) / 2) + 35px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 91px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_10.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_direction') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._image_10.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._image_10.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._image_10.style.transition='left 800ms ease 0ms, top 800ms ease 0ms';
				if (me._image_10.ggCurrentLogicStatePosition == 0) {
					me._image_10.style.left = 'calc(50% - (91px / 2) + (0px / 2) + 35px)';
					me._image_10.style.top='10px';
				}
				else {
					me._image_10.style.left='calc(50% - ((91px + 0px) / 2) + 35px)';
					me._image_10.style.top='0px';
				}
			}
		}
		me._image_10.logicBlock_position();
		me._image_10.ggUpdatePosition=function (useTransition) {
		}
		me.__31.appendChild(me._image_10);
		el=me.__26=document.createElement('div');
		els=me.__26__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubc1c\ubc14\ub2e5 \uc124\uba85";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -10px;';
		hs+='color : rgba(34,34,34,1);';
		hs+='cursor : default;';
		hs+='height : 80px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 122%;';
		hs+='pointer-events:auto;';
		hs+='@import url(\"https:\/\/fonts.googleapis.com\/css2?family=Nanum+Gothic:wght@400;700&display=swap\"); font-family: \"Nanum Gothic\", sans-serif; word-break:keep-all; line-height:20px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__26.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ubc14\ub2e5\uba74 \uc120\ud0dd \ub610\ub294 \uacf5\uac04 \uce74\ud14c\uace0\ub9ac\ub85c \uacf5\uac04\uc744 \uc790\uc720\ub86d\uac8c \uc774\ub3d9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__26.ggUpdateText();
		el.appendChild(els);
		me.__26.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__26.ggUpdatePosition=function (useTransition) {
		}
		me.__31.appendChild(me.__26);
		me.__25.appendChild(me.__31);
		me.__18.appendChild(me.__25);
		el=me.__23=document.createElement('div');
		el.ggId="\ubcf8 \ub0b4\uc6a9";
		el.ggDy=30;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 30%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((30% + 0px) / 2) + 30%);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__23.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__23.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_50=document.createElement('div');
		el.ggId="Rectangle 5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_50.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_50.ggUpdatePosition=function (useTransition) {
		}
		el=me.__24=document.createElement('div');
		els=me.__24__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubcf8 \ub0b4\uc6a9 \uba58\ud2b8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(34,34,34,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='@import url(\"https:\/\/fonts.googleapis.com\/css2?family=Nanum+Gothic:wght@400;700&display=swap\"); font-family: \"Nanum Gothic\", sans-serif; word-break:keep-all; line-height:23px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__24.ggUpdateText=function() {
			var params = [];
			var hs = player._("\u203b\n\ubcf8 \ucee8\ud150\uce20\ub294 \uc18c\ube44\uc790\uc758 \uc774\ud574\ub97c \ub3d5\uae30 \uc704\ud574 \uc81c\uc791\ub41c \uac83\uc73c\ub85c \uc2e4\uc81c\uc640 \ucc28\uc774\uac00 \uc788\uc73c\uba70 \uac01\uc885 \uc804\uc2dc\ubb3c \ubc0f \uc18c\ud488, \uc5f0\ucd9c\uc6a9 \uc2dc\uacf5\ubd80\ubd84\uc774 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub3d9\uc2dd \uac00\uad6c \ubc0f \uc18c\ud488\ub4e4\uc740 \uc81c\uacf5 \ud488\ubaa9\uc5d0 \ud3ec\ud568\ub418\uc5b4 \uc788\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \uad6c\uccb4\uc801\uc778 \ud488\ubaa9\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \uc815\ubcf4\uc640 \ucd5c\uc2e0\uc815\ubcf4\ub294 \uace0\uac1d\uc13c\ud130\uc5d0 \uc9c1\uc811 \ubb38\uc758\ud574 \uc8fc\uc138\uc694. \ubcf8 \ucee8\ud150\uce20\ub97c \ubb34\ub2e8\uc73c\ub85c \ucea1\uccd0\ud558\uac70\ub098 \ubc30\ud3ec\ud560 \uc2dc \uc800\uc791\uad8c\ubc95 \uc704\ubc18\uc73c\ub85c \ubc95\uc801\uc778 \uc81c\uc81c\ub97c \ubc1b\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4.", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__24.ggUpdateText();
		el.appendChild(els);
		me.__24.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__24.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_50.appendChild(me.__24);
		me.__23.appendChild(me._rectangle_50);
		me.__18.appendChild(me.__23);
		el=me.__19=document.createElement('div');
		el.ggId="\uad00\ub78c\ud558\uae30\ubc84\ud2bc";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 20px;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((200px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 200px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__19.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__19.onclick=function (e) {
			me.__16.style.transition='none';
			me.__16.style.visibility='hidden';
			me.__16.ggVisible=false;
		}
		me.__19.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_20=document.createElement('div');
		els=me._text_20__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #fe9900;';
		hs+='border : 3px solid #ffffff;';
		hs+='border-radius : 25px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='@import url(\"https:\/\/fonts.googleapis.com\/css2?family=Nanum+Gothic:wght@400;700&display=swap\"); font-family: \"Nanum Gothic\", sans-serif; word-break:keep-all; letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 17px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 6px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_20.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uad00\ub78c\ud558\uae30", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_20.ggUpdateText();
		el.appendChild(els);
		me._text_20.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_20.ggUpdatePosition=function (useTransition) {
		}
		me.__19.appendChild(me._text_20);
		me.__18.appendChild(me.__19);
		me.__17.appendChild(me.__18);
		me.__16.appendChild(me.__17);
		me.divSkin.appendChild(me.__16);
		el=me.__6=document.createElement('div');
		el.ggId="\uc0ac\uc6a9\uc548\ub0b4-\ubaa8\ubc14\uc77c";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__6.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__6.ggUpdatePosition=function (useTransition) {
		}
		el=me.__9=document.createElement('div');
		el.ggId="\uc0ac\uc6a9\uc548\ub0b4\ubc30\uacbd-\ubaa8\ubc14\uc77c";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.666667);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__9.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__9.onclick=function (e) {
				player.playSound("_background","1");
		}
		me.__9.ggUpdatePosition=function (useTransition) {
		}
		el=me.__10=document.createElement('div');
		el.ggId="\uc0ac\uc6a9\uc548\ub0b4\ucee8\ud150\uce20-\ubaa8\ubc14\uc77c";
		el.ggDx=0;
		el.ggDy=-50;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 60%;';
		hs+='left : calc(50% - ((46.875% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60% + 0px) / 2) - 50px);';
		hs+='visibility : inherit;';
		hs+='width : 46.875%;';
		hs+='pointer-events:none;';
		hs+='min-width:150px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__10.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().height <= 620))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getViewerSize().height <= 1024))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__10.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__10.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__10.style.transition='transform 0s';
				if (me.__10.ggCurrentLogicStateScaling == 0) {
					me.__10.ggParameter.sx = 0.7;
					me.__10.ggParameter.sy = 0.7;
					me.__10.style.transform=parameterToTransform(me.__10.ggParameter);
					skin.updateSize(me.__10);
				}
				else if (me.__10.ggCurrentLogicStateScaling == 1) {
					me.__10.ggParameter.sx = 0.8;
					me.__10.ggParameter.sy = 0.8;
					me.__10.style.transform=parameterToTransform(me.__10.ggParameter);
					skin.updateSize(me.__10);
				}
				else {
					me.__10.ggParameter.sx = 1;
					me.__10.ggParameter.sy = 1;
					me.__10.style.transform=parameterToTransform(me.__10.ggParameter);
					skin.updateSize(me.__10);
				}
			}
		}
		me.__10.logicBlock_scaling();
		me.__10.ggUpdatePosition=function (useTransition) {
		}
		el=me.__14=document.createElement('div');
		el.ggId="\ubaa8\ub378\ud558\uc6b0\uc2a4\uad00\ub78c-\ubaa8\ubc14\uc77c";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 10%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -50px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__14.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__14.ggUpdatePosition=function (useTransition) {
		}
		el=me.__15=document.createElement('div');
		els=me.__15__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubaa8\ub378\ud558\uc6b0\uc2a4 \uad00\ub78c-\ubaa8\ubc14\uc77c";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(34,34,34,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((300px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 300px;';
		hs+='pointer-events:auto;';
		hs+='@import url(\"https:\/\/fonts.googleapis.com\/css2?family=Nanum+Gothic:wght@400;700&display=swap\"); font-family: \"Nanum Gothic\", sans-serif; letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 17px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__15.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ubaa8\ub378\ud558\uc6b0\uc2a4 \uad00\ub78c", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__15.ggUpdateText();
		el.appendChild(els);
		me.__15.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__15.ggUpdatePosition=function (useTransition) {
		}
		el=me._container_4=document.createElement('div');
		el.ggId="Container 4-\ubaa8\ubc14\uc77c";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 220px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_4.ggUpdatePosition=function (useTransition) {
		}
		el=me._tip=document.createElement('div');
		els=me._tip__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="TIP-\ubaa8\ubc14\uc77c";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(254,153,0,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 17px;';
		hs+='font-weight: 600;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tip.ggUpdateText=function() {
			var params = [];
			var hs = player._("Tip", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tip.ggUpdateText();
		el.appendChild(els);
		me._tip.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tip.ggUpdatePosition=function (useTransition) {
		}
		me._container_4.appendChild(me._tip);
		me.__15.appendChild(me._container_4);
		me.__14.appendChild(me.__15);
		me.__10.appendChild(me.__14);
		el=me.__12=document.createElement('div');
		el.ggId="\uc544\uc774\ucf58-\ubaa8\ubc14\uc77c";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 50%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__12.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__12.ggUpdatePosition=function (useTransition) {
		}
		el=me.__13=document.createElement('div');
		el.ggId="\uc544\uc774\ucf581-\ubaa8\ubc14\uc77c";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 33.3%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -70px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__13.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__13.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_110=document.createElement('div');
		els=me._image_110__img=document.createElement('img');
		els.className='ggskin ggskin_image_110';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 11";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 96px;';
		hs+='left : calc(50% - ((80px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_110.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_110.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_130=document.createElement('div');
		els=me._image_130__img=document.createElement('img');
		els.className='ggskin ggskin_image_130';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 13";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 96px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_130.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_130.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('vis_direction') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._image_130.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._image_130.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._image_130.style.transition='transform 0s';
				if (me._image_130.ggCurrentLogicStateScaling == 0) {
					me._image_130.ggParameter.sx = 1.05;
					me._image_130.ggParameter.sy = 1.05;
					me._image_130.style.transform=parameterToTransform(me._image_130.ggParameter);
					skin.updateSize(me._image_130);
				}
				else {
					me._image_130.ggParameter.sx = 1;
					me._image_130.ggParameter.sy = 1;
					me._image_130.style.transform=parameterToTransform(me._image_130.ggParameter);
					skin.updateSize(me._image_130);
				}
			}
		}
		me._image_130.logicBlock_scaling();
		me._image_130.ggUpdatePosition=function (useTransition) {
		}
		me._image_110.appendChild(me._image_130);
		me.__13.appendChild(me._image_110);
		el=me._text_311=document.createElement('div');
		els=me._text_311__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 311";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -70px;';
		hs+='color : rgba(34,34,34,1);';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((142% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 142%;';
		hs+='pointer-events:auto;';
		hs+='@import url(\"https:\/\/fonts.googleapis.com\/css2?family=Nanum+Gothic:wght@400;700&display=swap\"); font-family: \"Nanum Gothic\", sans-serif; word-break:keep-all; letter-spacing:1px; line-height:18px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_311.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ud654\uba74\uc744 \ub204\ub978\ucc44 \uc6c0\uc9c1\uc774\uba74\n\uacf5\uac04\uc744 \ub458\ub7ec\ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4.", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_311.ggUpdateText();
		el.appendChild(els);
		me._text_311.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_311.ggUpdatePosition=function (useTransition) {
		}
		me.__13.appendChild(me._text_311);
		me.__12.appendChild(me.__13);
		el=me.__20=document.createElement('div');
		el.ggId="\uc544\uc774\ucf582-\ubaa8\ubc14\uc77c";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 33.3%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((33.3% + 0px) / 2) + 0%);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__20.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__20.ggUpdatePosition=function (useTransition) {
		}
		el=me.__22=document.createElement('div');
		els=me.__22__img=document.createElement('img');
		els.className='ggskin ggskin__22';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uc544\uc774\ucf582\uc544\uc774\ucf58-\ubaa8\ubc14\uc77c";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 96px;';
		hs+='left : calc(50% - ((80px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__22.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__22.ggUpdatePosition=function (useTransition) {
		}
		el=me.__210=document.createElement('div');
		els=me.__210__img=document.createElement('img');
		els.className='ggskin ggskin__210';
		hs='data:image/png;base64,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'+
			'IBTR4EXp1kxS2Tq0qkGWYerw3Se5HlMOC1wM7A7wmX9ScnWeGnWZvIuJgPuogFZi/dRSxR0EUMUNBFDFDQRQxQ0EUMUNBFDFDQRQxQ0EUMUNBFDFDQRQxQ0EUMUNBFDFDQRQxQ0EUMUNBFDFDQRQxQ0EUMUNBFDFDQRQxQ0EUMUNBFDFDQRQxQ0EUMUNBFDFDQRQxQ0EUMUNBFDFDQRQxQ0EUMUNBFDFDQRQxQ0EUMUNBFDFDQRQxQ0EUMUNBFDFDQRQxQ0EUMUNBFDFDQRQxQ0EUMUNBFDFDQRQxQ0EUMUNBFDFDQRQxQ0EUMUNBFDFDQRQxQ0EUMUNBFDFDQRQxQ0EUMUNBFDFDQRQxQ0EUMUNBFDFDQRQxQ0EUMUNBFDFDQRQxQ0EUMUNBFDFDQRQxQ0EUMUNBFDFDQRQxQ0EUMUNBFDFDQRQxQ0EUMUNBFDFDQ'+
			'RQxQ0EUMUNBFDFDQRQxQ0EUMUNBFDFDQRQxQ0EUMUNBFDFDQRQxQ0EUMUNBFDFDQRQxQ0EUMUNBFDFDQRQxQ0EUMUNBFDFDQRQxQ0EUMUNBFDFDQRQxQ0EUM+H8n4MyurBbp2gAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uc544\uc774\ucf582-\ubaa8\ubc14\uc77c1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 96px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__210.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__210.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('vis_direction') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__210.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__210.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__210.style.transition='transform 0s';
				if (me.__210.ggCurrentLogicStateScaling == 0) {
					me.__210.ggParameter.sx = 1.05;
					me.__210.ggParameter.sy = 1.05;
					me.__210.style.transform=parameterToTransform(me.__210.ggParameter);
					skin.updateSize(me.__210);
				}
				else {
					me.__210.ggParameter.sx = 1;
					me.__210.ggParameter.sy = 1;
					me.__210.style.transform=parameterToTransform(me.__210.ggParameter);
					skin.updateSize(me.__210);
				}
			}
		}
		me.__210.logicBlock_scaling();
		me.__210.ggUpdatePosition=function (useTransition) {
		}
		me.__22.appendChild(me.__210);
		me.__20.appendChild(me.__22);
		el=me.__21=document.createElement('div');
		els=me.__21__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc544\uc774\ucf58\ud0dd\uc2a4\ud2b82-\ubaa8\ubc14\uc77c";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -70px;';
		hs+='color : rgba(34,34,34,1);';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((142% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 142%;';
		hs+='pointer-events:auto;';
		hs+='@import url(\"https:\/\/fonts.googleapis.com\/css2?family=Nanum+Gothic:wght@400;700&display=swap\"); font-family: \"Nanum Gothic\", sans-serif; word-break:keep-all; letter-spacing:1px; line-height:18px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__21.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ub450 \uc190\uac00\ub77d\uc73c\ub85c \ud654\uba74\uc744\n\ud655\ub300\/\ucd95\uc18c \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__21.ggUpdateText();
		el.appendChild(els);
		me.__21.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__21.ggUpdatePosition=function (useTransition) {
		}
		me.__20.appendChild(me.__21);
		me.__12.appendChild(me.__20);
		el=me.__30=document.createElement('div');
		el.ggId="\uc544\uc774\ucf583-\ubaa8\ubc14\uc77c";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : -70px;';
		hs+='height : 33.3%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__30.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__30.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_11=document.createElement('div');
		els=me._image_11__img=document.createElement('img');
		els.className='ggskin ggskin_image_11';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 11-\ubaa8\ubc14\uc77c";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 96px;';
		hs+='left : calc(50% - ((80px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_11.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_13=document.createElement('div');
		els=me._image_13__img=document.createElement('img');
		els.className='ggskin ggskin_image_13';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 13-\ubaa8\ubc14\uc77c";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 96px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_13.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_13.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('vis_direction') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._image_13.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._image_13.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._image_13.style.transition='transform 0s';
				if (me._image_13.ggCurrentLogicStateScaling == 0) {
					me._image_13.ggParameter.sx = 1.05;
					me._image_13.ggParameter.sy = 1.05;
					me._image_13.style.transform=parameterToTransform(me._image_13.ggParameter);
					skin.updateSize(me._image_13);
				}
				else {
					me._image_13.ggParameter.sx = 1;
					me._image_13.ggParameter.sy = 1;
					me._image_13.style.transform=parameterToTransform(me._image_13.ggParameter);
					skin.updateSize(me._image_13);
				}
			}
		}
		me._image_13.logicBlock_scaling();
		me._image_13.ggUpdatePosition=function (useTransition) {
		}
		me._image_11.appendChild(me._image_13);
		me.__30.appendChild(me._image_11);
		el=me._text_3=document.createElement('div');
		els=me._text_3__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 3-\ubaa8\ubc14\uc77c";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -70px;';
		hs+='color : rgba(34,34,34,1);';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((142% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 142%;';
		hs+='pointer-events:auto;';
		hs+='@import url(\"https:\/\/fonts.googleapis.com\/css2?family=Nanum+Gothic:wght@400;700&display=swap\"); font-family: \"Nanum Gothic\", sans-serif; word-break:keep-all; letter-spacing:1px; line-height:18px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_3.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ubc14\ub2e5\uba74 \uc120\ud0dd\uc73c\ub85c\n\uacf5\uac04\uc744 \uc774\ub3d9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_3.ggUpdateText();
		el.appendChild(els);
		me._text_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_3.ggUpdatePosition=function (useTransition) {
		}
		me.__30.appendChild(me._text_3);
		me.__12.appendChild(me.__30);
		me.__10.appendChild(me.__12);
		el=me.__11=document.createElement('div');
		el.ggId="\uad00\ub78c\ud558\uae30\ubc84\ud2bc-\ubaa8\ubc14\uc77c";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : -1%;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__11.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().height <= 620))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getViewerSize().height <= 800))
			)
			{
				newLogicStatePosition = 1;
			}
			else if (
				((player.getViewerSize().height <= 1020))
			)
			{
				newLogicStatePosition = 2;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__11.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__11.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__11.style.transition='left 0s, bottom 0s';
				if (me.__11.ggCurrentLogicStatePosition == 0) {
					me.__11.style.left = 'calc(50% - (100% / 2))';
					me.__11.style.bottom='-40%';
				}
				else if (me.__11.ggCurrentLogicStatePosition == 1) {
					me.__11.style.left = 'calc(50% - (100% / 2))';
					me.__11.style.bottom='-20%';
				}
				else if (me.__11.ggCurrentLogicStatePosition == 2) {
					me.__11.style.left = 'calc(50% - (100% / 2))';
					me.__11.style.bottom='-10%';
				}
				else {
					me.__11.style.left='calc(50% - ((100% + 0px) / 2) + 0px)';
					me.__11.style.bottom='-1%';
				}
			}
		}
		me.__11.logicBlock_position();
		me.__11.onclick=function (e) {
			me.__6.style.transition='none';
			me.__6.style.visibility='hidden';
			me.__6.ggVisible=false;
		}
		me.__11.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_2=document.createElement('div');
		els=me._text_2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 2-\ubaa8\ubc14\uc77c";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #fe9900;';
		hs+='border : 3px solid #ffffff;';
		hs+='border-radius : 25px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 6px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 6px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='@import url(\"https:\/\/fonts.googleapis.com\/css2?family=Nanum+Gothic:wght@400;700&display=swap\"); font-family: \"Nanum Gothic\", sans-serif; word-break:keep-all; letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 6px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_2.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uad00\ub78c\ud558\uae30", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_2.ggUpdateText();
		el.appendChild(els);
		me._text_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_2.ggUpdatePosition=function (useTransition) {
		}
		me.__11.appendChild(me._text_2);
		me.__10.appendChild(me.__11);
		me.__9.appendChild(me.__10);
		me.__6.appendChild(me.__9);
		el=me.__7=document.createElement('div');
		el.ggId="\ubcf8 \ub0b4\uc6a9-\ubaa8\ubc14\uc77c";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : -12%;';
		hs+='height : 30%;';
		hs+='left : calc(50% - ((90% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 90%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__7.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().height <= 640))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__7.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__7.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__7.style.transition='left 0s, bottom 0s, width 0s, height 0s, transform 0s';
				if (me.__7.ggCurrentLogicStatePosition == 0) {
					me.__7.style.left = 'calc(50% - (90% / 2))';
					me.__7.style.bottom='-5%';
				}
				else {
					me.__7.style.left='calc(50% - ((90% + 0px) / 2) + 0px)';
					me.__7.style.bottom='-12%';
				}
			}
		}
		me.__7.logicBlock_position();
		me.__7.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().height <= 640))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__7.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__7.ggCurrentLogicStateSize = newLogicStateSize;
				me.__7.style.transition='left 0s, bottom 0s, width 0s, height 0s, transform 0s';
				if (me.__7.ggCurrentLogicStateSize == 0) {
					me.__7.style.width='100%';
					me.__7.style.height='30%';
					me.__7.style.left = 'calc(50% - (100% / 2))';
					skin.updateSize(me.__7);
				}
				else {
					me.__7.style.width='90%';
					me.__7.style.height='30%';
					me.__7.style.left = 'calc(50% - (90% / 2))';
					skin.updateSize(me.__7);
				}
			}
		}
		me.__7.logicBlock_size();
		me.__7.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().height <= 640))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getViewerSize().height <= 1024))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__7.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__7.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__7.style.transition='left 0s, bottom 0s, width 0s, height 0s, transform 0s';
				if (me.__7.ggCurrentLogicStateScaling == 0) {
					me.__7.ggParameter.sx = 0.7;
					me.__7.ggParameter.sy = 0.7;
					me.__7.style.transform=parameterToTransform(me.__7.ggParameter);
					skin.updateSize(me.__7);
				}
				else if (me.__7.ggCurrentLogicStateScaling == 1) {
					me.__7.ggParameter.sx = 0.8;
					me.__7.ggParameter.sy = 0.8;
					me.__7.style.transform=parameterToTransform(me.__7.ggParameter);
					skin.updateSize(me.__7);
				}
				else {
					me.__7.ggParameter.sx = 1;
					me.__7.ggParameter.sy = 1;
					me.__7.style.transform=parameterToTransform(me.__7.ggParameter);
					skin.updateSize(me.__7);
				}
			}
		}
		me.__7.logicBlock_scaling();
		me.__7.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_5=document.createElement('div');
		el.ggId="Rectangle 5-\ubaa8\ubc14\uc77c";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='min-width:150px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_5.ggUpdatePosition=function (useTransition) {
		}
		el=me.__8=document.createElement('div');
		els=me.__8__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubcf8 \ub0b4\uc6a9 \uba58\ud2b8-\ubaa8\ubc14\uc77c";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(34,34,34,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((115% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 115%;';
		hs+='pointer-events:auto;';
		hs+='@import url(\"https:\/\/fonts.googleapis.com\/css2?family=Nanum+Gothic:wght@400;700&display=swap\"); font-family: \"Nanum Gothic\", sans-serif; word-break:keep-all; line-height:17px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 10px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__8.ggUpdateText=function() {
			var params = [];
			var hs = player._("\u203b\n\ubcf8 \ucee8\ud150\uce20\ub294 \uc18c\ube44\uc790\uc758 \uc774\ud574\ub97c \ub3d5\uae30 \uc704\ud574 \uc81c\uc791\ub41c \uac83\uc73c\ub85c \uc2e4\uc81c\uc640 \ucc28\uc774\uac00 \uc788\uc73c\uba70 \uac01\uc885 \uc804\uc2dc\ubb3c \ubc0f \uc18c\ud488, \uc5f0\ucd9c\uc6a9 \uc2dc\uacf5\ubd80\ubd84\uc774 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub3d9\uc2dd \uac00\uad6c \ubc0f \uc18c\ud488\ub4e4\uc740 \uc81c\uacf5 \ud488\ubaa9\uc5d0 \ud3ec\ud568\ub418\uc5b4 \uc788\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \uad6c\uccb4\uc801\uc778 \ud488\ubaa9\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \uc815\ubcf4\uc640 \ucd5c\uc2e0\uc815\ubcf4\ub294 \uace0\uac1d\uc13c\ud130\uc5d0 \uc9c1\uc811 \ubb38\uc758\ud574 \uc8fc\uc138\uc694. \ubcf8 \ucee8\ud150\uce20\ub97c \ubb34\ub2e8\uc73c\ub85c \ucea1\uccd0\ud558\uac70\ub098 \ubc30\ud3ec\ud560 \uc2dc \uc800\uc791\uad8c\ubc95 \uc704\ubc18\uc73c\ub85c \ubc95\uc801\uc778 \uc81c\uc81c\ub97c \ubc1b\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4.", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__8.ggUpdateText();
		el.appendChild(els);
		me.__8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__8.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_5.appendChild(me.__8);
		me.__7.appendChild(me._rectangle_5);
		me.__6.appendChild(me.__7);
		me.divSkin.appendChild(me.__6);
		el=me.__=document.createElement('div');
		el.ggId="\ub85c\uace0";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 54px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 530px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 480))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStatePosition = 1;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__.style.transition='left 0s, top 0s, transform 0s';
				if (me.__.ggCurrentLogicStatePosition == 0) {
					me.__.style.left='0px';
					me.__.style.top='5px';
				}
				else if (me.__.ggCurrentLogicStatePosition == 1) {
					me.__.style.left='25px';
					me.__.style.top='5px';
				}
				else {
					me.__.style.left='0px';
					me.__.style.top='5px';
				}
			}
		}
		me.__.logicBlock_position();
		me.__.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width <= 420))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getViewerSize().width <= 670))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__.style.transition='left 0s, top 0s, transform 0s';
				if (me.__.ggCurrentLogicStateScaling == 0) {
					me.__.ggParameter.sx = 0.8;
					me.__.ggParameter.sy = 0.8;
					me.__.style.transform=parameterToTransform(me.__.ggParameter);
					skin.updateSize(me.__);
				}
				else if (me.__.ggCurrentLogicStateScaling == 1) {
					me.__.ggParameter.sx = 1;
					me.__.ggParameter.sy = 0.9;
					me.__.style.transform=parameterToTransform(me.__.ggParameter);
					skin.updateSize(me.__);
				}
				else {
					me.__.ggParameter.sx = 1;
					me.__.ggParameter.sy = 1;
					me.__.style.transform=parameterToTransform(me.__.ggParameter);
					skin.updateSize(me.__);
				}
			}
		}
		me.__.logicBlock_scaling();
		me.__.ggUpdatePosition=function (useTransition) {
		}
		el=me.__0=document.createElement('div');
		el.ggId="\ub85c\uace0\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.470588);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px 25px 25px 25px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : -13%;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__0.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 670))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__0.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__0.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__0.style.transition='left 0s, top 0s';
				if (me.__0.ggCurrentLogicStatePosition == 0) {
					me.__0.style.left='-9%';
					me.__0.style.top='0px';
				}
				else {
					me.__0.style.left='-13%';
					me.__0.style.top='0px';
				}
			}
		}
		me.__0.logicBlock_position();
		me.__0.ggUpdatePosition=function (useTransition) {
		}
		el=me.__1=document.createElement('div');
		el.ggId="\ud0c0\uc785\uc120\ud0dd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : -2.6%;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 50%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 360))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStatePosition = 1;
			}
			else if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStatePosition = 2;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__1.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__1.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__1.style.transition='right 0s, top 0s, width 0s, height 0s';
				if (me.__1.ggCurrentLogicStatePosition == 0) {
					me.__1.style.right='28%';
					me.__1.style.top='0px';
				}
				else if (me.__1.ggCurrentLogicStatePosition == 1) {
					me.__1.style.right='20%';
					me.__1.style.top='0px';
				}
				else if (me.__1.ggCurrentLogicStatePosition == 2) {
					me.__1.style.right='5%';
					me.__1.style.top='0px';
				}
				else {
					me.__1.style.right='-2.6%';
					me.__1.style.top='0px';
				}
			}
		}
		me.__1.logicBlock_position();
		me.__1.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateSize = 0;
			}
			else if (
				((player.getViewerSize().width <= 360))
			)
			{
				newLogicStateSize = 1;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__1.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__1.ggCurrentLogicStateSize = newLogicStateSize;
				me.__1.style.transition='right 0s, top 0s, width 0s, height 0s';
				if (me.__1.ggCurrentLogicStateSize == 0) {
					me.__1.style.width='35%';
					me.__1.style.height='100%';
					skin.updateSize(me.__1);
				}
				else if (me.__1.ggCurrentLogicStateSize == 1) {
					me.__1.style.width='32%';
					me.__1.style.height='100%';
					skin.updateSize(me.__1);
				}
				else {
					me.__1.style.width='50%';
					me.__1.style.height='100%';
					skin.updateSize(me.__1);
				}
			}
		}
		me.__1.logicBlock_size();
		me.__1.ggUpdatePosition=function (useTransition) {
		}
		el=me.__74a=document.createElement('div');
		els=me.__74a__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="74A";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='color : #000000;';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 30px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 40%;';
		hs+='pointer-events:auto;';
		hs+='@import url(\"https:\/\/fonts.googleapis.com\/css2?family=Nanum+Gothic:wght@400;700&display=swap\"); font-family: \"Nanum Gothic\", sans-serif;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 500;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 6px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__74a.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ub2e8\ub3c5\ud615", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__74a.ggUpdateText();
		el.appendChild(els);
		me.__74a.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__74a.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStatePosition = 1;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__74a.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__74a.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__74a.style.transition='left 0s, top 0s';
				if (me.__74a.ggCurrentLogicStatePosition == 0) {
					me.__74a.style.left='10px';
					me.__74a.style.top = 'calc(50% - (40px / 2))';
				}
				else if (me.__74a.ggCurrentLogicStatePosition == 1) {
					me.__74a.style.left='10px';
					me.__74a.style.top = 'calc(50% - (40px / 2))';
				}
				else {
					me.__74a.style.left='30px';
					me.__74a.style.top='calc(50% - ((40px + 0px) / 2) + 0px)';
				}
			}
		}
		me.__74a.logicBlock_position();
		me.__74a.onclick=function (e) {
			player.openUrl("https:\/\/superb-kheer-b84f8e.netlify.app","_self");
		}
		me.__74a.ggUpdatePosition=function (useTransition) {
		}
		me.__1.appendChild(me.__74a);
		el=me.__74b=document.createElement('div');
		els=me.__74b__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="74B";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='color : #000000;';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 40%;';
		hs+='pointer-events:auto;';
		hs+='@import url(\"https:\/\/fonts.googleapis.com\/css2?family=Nanum+Gothic:wght@400;700&display=swap\"); font-family: \"Nanum Gothic\", sans-serif;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 400;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 6px 6px 6px 21px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__74b.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc5f0\ub9bd\ud615", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__74b.ggUpdateText();
		el.appendChild(els);
		me.__74b.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__74b.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__74b.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__74b.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__74b.style.transition='right 0s, top 0s, width 0s, height 0s';
				if (me.__74b.ggCurrentLogicStatePosition == 0) {
					me.__74b.style.right='-20px';
					me.__74b.style.top = 'calc(50% - (40px / 2))';
				}
				else {
					me.__74b.style.right='20px';
					me.__74b.style.top='calc(50% - ((40px + 0px) / 2) + 0px)';
				}
			}
		}
		me.__74b.logicBlock_position();
		me.__74b.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__74b.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__74b.ggCurrentLogicStateSize = newLogicStateSize;
				me.__74b.style.transition='right 0s, top 0s, width 0s, height 0s';
				if (me.__74b.ggCurrentLogicStateSize == 0) {
					me.__74b.style.width='50%';
					me.__74b.style.height='40px';
					me.__74b.style.top = 'calc(50% - (40px / 2))';
					skin.updateSize(me.__74b);
				}
				else {
					me.__74b.style.width='40%';
					me.__74b.style.height='40px';
					me.__74b.style.top = 'calc(50% - (40px / 2))';
					skin.updateSize(me.__74b);
				}
			}
		}
		me.__74b.logicBlock_size();
		me.__74b.onclick=function (e) {
			player.setVariableValue('vis_dropdown', !player.getVariableValue('vis_dropdown'));
		}
		me.__74b.ggUpdatePosition=function (useTransition) {
		}
		el=me.__2=document.createElement('div');
		el.ggId="\ub4dc\ub86d\ub2e4\uc6b4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 1px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__2.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('vis_dropdown') == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__2.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__2.ggCurrentLogicStateSize = newLogicStateSize;
				me.__2.style.transition='width 0s, height 0s';
				if (me.__2.ggCurrentLogicStateSize == 0) {
					me.__2.style.width='100%';
					me.__2.style.height='150px';
					skin.updateSize(me.__2);
				}
				else {
					me.__2.style.width='100%';
					me.__2.style.height='1px';
					skin.updateSize(me.__2);
				}
			}
		}
		me.__2.logicBlock_size();
		me.__2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_dropdown') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__2.style.transition='width 0s, height 0s';
				if (me.__2.ggCurrentLogicStateVisible == 0) {
					me.__2.style.visibility=(Number(me.__2.style.opacity)>0||!me.__2.style.opacity)?'inherit':'hidden';
					me.__2.ggVisible=true;
				}
				else {
					me.__2.style.visibility="hidden";
					me.__2.ggVisible=false;
				}
			}
		}
		me.__2.logicBlock_visible();
		me.__2.ggUpdatePosition=function (useTransition) {
		}
		el=me.__3=document.createElement('div');
		el.ggId="\ub4dc\ub86d\ub2e4\uc6b4\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.627451);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 20px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__3.ggUpdatePosition=function (useTransition) {
		}
		el=me._d_type=document.createElement('div');
		els=me._d_type__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="D TYPE";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 0px 0px 20px 20px;';
		hs+='bottom : 0%;';
		hs+='color : rgba(34,34,34,1);';
		hs+='cursor : pointer;';
		hs+='height : 25%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 5px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._d_type.ggUpdateText=function() {
			var params = [];
			var hs = player._("D TYPE", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._d_type.ggUpdateText();
		el.appendChild(els);
		me._d_type.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._d_type.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['d_type'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else if (
				((player._(me.ggUserdata.comment) == "\uc5f0\ub9bd\ud615D"))
			)
			{
				newLogicStateBackgroundColor = 1;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._d_type.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._d_type.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._d_type.style.transition='background-color 0s';
				if (me._d_type.ggCurrentLogicStateBackgroundColor == 0) {
					me._d_type.style.backgroundColor="rgba(255,255,255,1)";
				}
				else if (me._d_type.ggCurrentLogicStateBackgroundColor == 1) {
					me._d_type.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me._d_type.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me._d_type.logicBlock_backgroundcolor();
		me._d_type.onclick=function (e) {
			player.openUrl("https:\/\/magical-kitsune-263021.netlify.app","_self");
		}
		me._d_type.onmouseover=function (e) {
			me.elementMouseOver['d_type']=true;
			me._d_type.logicBlock_backgroundcolor();
		}
		me._d_type.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._d_type__text)
					return;
				}
			}
			me.elementMouseOver['d_type']=false;
			me._d_type.logicBlock_backgroundcolor();
		}
		me._d_type.ggUpdatePosition=function (useTransition) {
		}
		me.__3.appendChild(me._d_type);
		el=me._c_type=document.createElement('div');
		els=me._c_type__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="C TYPE";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border-color : rgba(34,34,34,0.117647);';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 1px 0px;';
		hs+='bottom : 25%;';
		hs+='color : rgba(34,34,34,1);';
		hs+='cursor : pointer;';
		hs+='height : 25%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._c_type.ggUpdateText=function() {
			var params = [];
			var hs = player._("C TYPE", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._c_type.ggUpdateText();
		el.appendChild(els);
		me._c_type.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._c_type.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['c_type'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else if (
				((player._(me.ggUserdata.comment) == "\uc5f0\ub9bd\ud615C"))
			)
			{
				newLogicStateBackgroundColor = 1;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._c_type.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._c_type.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._c_type.style.transition='background-color 0s';
				if (me._c_type.ggCurrentLogicStateBackgroundColor == 0) {
					me._c_type.style.backgroundColor="rgba(255,255,255,1)";
				}
				else if (me._c_type.ggCurrentLogicStateBackgroundColor == 1) {
					me._c_type.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me._c_type.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me._c_type.logicBlock_backgroundcolor();
		me._c_type.onclick=function (e) {
			player.openUrl("https:\/\/symphonious-donut-c5b810.netlify.app\/","_self");
		}
		me._c_type.onmouseover=function (e) {
			me.elementMouseOver['c_type']=true;
			me._c_type.logicBlock_backgroundcolor();
		}
		me._c_type.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._c_type__text)
					return;
				}
			}
			me.elementMouseOver['c_type']=false;
			me._c_type.logicBlock_backgroundcolor();
		}
		me._c_type.ggUpdatePosition=function (useTransition) {
		}
		me.__3.appendChild(me._c_type);
		el=me._b_type=document.createElement('div');
		els=me._b_type__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="B TYPE";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border-color : rgba(0,0,0,0.117647);';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 1px 0px;';
		hs+='color : rgba(34,34,34,1);';
		hs+='cursor : pointer;';
		hs+='height : 25%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 25%;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._b_type.ggUpdateText=function() {
			var params = [];
			var hs = player._("B TYPE", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._b_type.ggUpdateText();
		el.appendChild(els);
		me._b_type.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._b_type.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['b_type'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else if (
				((player._(me.ggUserdata.comment) == "\uc5f0\ub9bd\ud615B"))
			)
			{
				newLogicStateBackgroundColor = 1;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._b_type.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._b_type.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._b_type.style.transition='background-color 0s';
				if (me._b_type.ggCurrentLogicStateBackgroundColor == 0) {
					me._b_type.style.backgroundColor="rgba(255,255,255,1)";
				}
				else if (me._b_type.ggCurrentLogicStateBackgroundColor == 1) {
					me._b_type.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me._b_type.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me._b_type.logicBlock_backgroundcolor();
		me._b_type.onclick=function (e) {
			player.openUrl("https:\/\/luminous-starlight-0195ea.netlify.app\/","_self");
		}
		me._b_type.onmouseover=function (e) {
			me.elementMouseOver['b_type']=true;
			me._b_type.logicBlock_backgroundcolor();
		}
		me._b_type.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._b_type__text)
					return;
				}
			}
			me.elementMouseOver['b_type']=false;
			me._b_type.logicBlock_backgroundcolor();
		}
		me._b_type.ggUpdatePosition=function (useTransition) {
		}
		me.__3.appendChild(me._b_type);
		el=me._a_type=document.createElement('div');
		els=me._a_type__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="A TYPE";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border-color : rgba(34,34,34,0.117647);';
		hs+='border-radius : 20px 20px 0px 0px;';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 1px 0px;';
		hs+='color : rgba(34,34,34,1);';
		hs+='cursor : pointer;';
		hs+='height : 25%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 5px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._a_type.ggUpdateText=function() {
			var params = [];
			var hs = player._("A TYPE", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._a_type.ggUpdateText();
		el.appendChild(els);
		me._a_type.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._a_type.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['a_type'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else if (
				((player._(me.ggUserdata.comment) == "\uc5f0\ub9bd\ud615A"))
			)
			{
				newLogicStateBackgroundColor = 1;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._a_type.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._a_type.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._a_type.style.transition='background-color 0s';
				if (me._a_type.ggCurrentLogicStateBackgroundColor == 0) {
					me._a_type.style.backgroundColor="rgba(255,255,255,1)";
				}
				else if (me._a_type.ggCurrentLogicStateBackgroundColor == 1) {
					me._a_type.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me._a_type.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me._a_type.logicBlock_backgroundcolor();
		me._a_type.onclick=function (e) {
			player.openUrl("https:\/\/resilient-beignet-29b48c.netlify.app\/","_self");
		}
		me._a_type.onmouseover=function (e) {
			me.elementMouseOver['a_type']=true;
			me._a_type.logicBlock_backgroundcolor();
		}
		me._a_type.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._a_type__text)
					return;
				}
			}
			me.elementMouseOver['a_type']=false;
			me._a_type.logicBlock_backgroundcolor();
		}
		me._a_type.ggUpdatePosition=function (useTransition) {
		}
		me.__3.appendChild(me._a_type);
		me.__2.appendChild(me.__3);
		me.__74b.appendChild(me.__2);
		el=me._image_5=document.createElement('div');
		els=me._image_5__img=document.createElement('img');
		els.className='ggskin ggskin_image_5';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAYAAABxLuKEAAAACXBIWXMAAC4jAAAuIwF4pT92AAAEWUlEQVR4nO2bW28VVRiGn0pL7QFN/AEa7/gbJt61HGyLXngi4oUxIYqiBRFKoAkXApZSEk2gHEREKDQx/gb/gfHSw6XxQA8Uosj24p1JLM43h2+vmenFem52Zs9a36z97vWdVnd7Op0Okf/zWNsL2KhEYQyiMAZRGIMojEEUxiAKYxCFMYjCGERhDKIwBlEYgyiMQRTGoDfrzWefebrpdfQDzwPfAz81+eAff/4l8/2NsGOGgEngW+AU8ES7yxGZO6ZBHgc+BD5OrseS193AShsLSml7xxwG3ntkHWPANbSTWqMtYXqAaeADYDjj/ijwtXGvEdoQZhg4iuJKX864EeArWto5TQuzCdiH4kqZ+DYKXKWFndOkMA'+
			'PAR8AxFHTLshO4SMPZqqmsNIR2yRHn/AkUl94AlkMtKo+mdswB4P0ubYwDV2jIrZoQ5hiwnzBBdAdwPZCtXOoUZgA4geJKlZhSxAgNiFOXMAMopuxDmSg0oyiV1+ZWdQizGXgXlfn9NdhP2QZcArbUYTx0VhpC1exUYLsW40AHeBNYCmk4pDB9KPtMBrRZhgm083cTsPEM6UpTKKbklfl5/AnMAquOuWOoQg4WkEMI04cawkn8C1tCaf0d4GXgocPGdtR4DjrXsI5uhRlG6XgSv1veR03lueT6G2CX01awVN6NMJvQN3wQvyh3UfE3C/z9n/dvI/e457C5DfiSLlO5V5hBlI6n8afke4mNebJdZxF4FV9vtIMuG0/PN512yYe8D0U75SBwtmDcLdQ8zlO9XplIXvfgENezYw4hF/KyjLrsIlFSFlCd4nGrCeAyDreq'+
			'KsxRVOp7/XcFud/pivNuAK8B/zieuRPHSWBZYbagD3QYf51yN5l/xjl/AXgRVbpVSc+QS4tTRph+VLjtLzk+izUUaOeAv5w2QNlqHHjgmDtChb8+FH3QzUiQKfzZZw21CufwucKjLAIv4auQtwNfUCKQ5wkziALtdMG4PFZRBvuc9XVKt9xGvZEnlb8AXACezBtkpetelE67OY5cobuYUkSayi9SPRnsQgXqHuBO1gBLmFngdVSzeFhGvU9doqQsIHGuIrevwhjwFPBc1k1LmB/wN2NLrO996uYmqpxvUN3lf7duWIbOAnsrPgTUEB5B2SdkTCniFtUbz/PA29bNPIXn0BFl2dS4hoq/uQpzQpI2nvdLjJ1HMfRXa0DR1juTGChKs2mdch7fWUooFoFXyM9W19AX+FueoTJN5Mnk9RPj/irKPjMlbDVBmq0usL67fo'+
			'jOat6ixBFo2WB1kuzUfQfFlJmSdpoibTzXkusOaib3UvJcuMqxw2mk+qfJ9TJwnPpTspebSJDr6ODqAPBH2clVz2Nm0C47hdznM9qNKUUsoPbhO3ICbRY9Wf8sWvCrzV5gK6p1QvQ+rWL9ajNTmEj7P07csERhDKIwBlEYgyiMQRTGIApjEIUxiMIYRGEMojAGURiDKIxBFMYgCmPwL1w8xZQZ/Qx/AAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 5";
		el.ggDx=26;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:180,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 13px;';
		hs+='left : calc(50% - ((13px + 0px) / 2) + 26px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((13px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 13px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._image_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_5.logicBlock_angle = function() {
			var newLogicStateAngle;
			if (
				((player.getVariableValue('vis_dropdown') == true))
			)
			{
				newLogicStateAngle = 0;
			}
			else {
				newLogicStateAngle = -1;
			}
			if (me._image_5.ggCurrentLogicStateAngle != newLogicStateAngle) {
				me._image_5.ggCurrentLogicStateAngle = newLogicStateAngle;
				me._image_5.style.transition='transform 300ms linear 0ms';
				if (me._image_5.ggCurrentLogicStateAngle == 0) {
					me._image_5.ggParameter.a = 0;
					me._image_5.style.transform=parameterToTransform(me._image_5.ggParameter);
				}
				else {
					me._image_5.ggParameter.a = 180;
					me._image_5.style.transform=parameterToTransform(me._image_5.ggParameter);
				}
			}
		}
		me._image_5.logicBlock_angle();
		me._image_5.ggUpdatePosition=function (useTransition) {
		}
		me.__74b.appendChild(me._image_5);
		me.__1.appendChild(me.__74b);
		me.__0.appendChild(me.__1);
		el=me._container_2=document.createElement('div');
		el.ggId="Container 2";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 70px;';
		hs+='left : 30px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((70px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 230px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_2.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._container_2.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._container_2.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._container_2.style.transition='left 0s, top 0s';
				if (me._container_2.ggCurrentLogicStatePosition == 0) {
					me._container_2.style.left='-30px';
					me._container_2.style.top = 'calc(50% - (70px / 2))';
				}
				else {
					me._container_2.style.left='30px';
					me._container_2.style.top='calc(50% - ((70px + 0px) / 2) + 0px)';
				}
			}
		}
		me._container_2.logicBlock_position();
		me._container_2.ggUpdatePosition=function (useTransition) {
		}
		el=me._container_1=document.createElement('div');
		el.ggId="Container 1";
		el.ggDx=16;
		el.ggDy=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 88.5714%;';
		hs+='left : calc(50% - ((91% + 0px) / 2) + 16%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((88.5714% + 0px) / 2) + 1px);';
		hs+='visibility : inherit;';
		hs+='width : 91%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_1=document.createElement('div');
		els=me._image_1__img=document.createElement('img');
		els.className='ggskin ggskin_image_1';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.7,sy:0.7,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._image_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_1.ggUpdatePosition=function (useTransition) {
		}
		me._container_1.appendChild(me._image_1);
		me._container_2.appendChild(me._container_1);
		me.__0.appendChild(me._container_2);
		me.__.appendChild(me.__0);
		me.divSkin.appendChild(me.__);
		me.__99.logicBlock_position();
		me.__105.logicBlock_position();
		me._scrollarea_1.logicBlock_position();
		me._scrollarea_1.logicBlock_size();
		me.__100.logicBlock_visible();
		me.__103.logicBlock_size();
		me.__103.logicBlock_visible();
		me.__101.logicBlock_size();
		me.__101.logicBlock_visible();
		me.__38c.logicBlock_visible();
		me.__38c2.logicBlock_size();
		me.__38c2.logicBlock_visible();
		me.__38c0.logicBlock_size();
		me.__38c0.logicBlock_visible();
		me.__18a2.logicBlock_size();
		me.__18a2.logicBlock_visible();
		me.__18a0.logicBlock_size();
		me.__18a0.logicBlock_visible();
		me.__59.logicBlock_position();
		me.__59.logicBlock_scaling();
		me._rectangle_2.logicBlock_size();
		me.__96.logicBlock_visible();
		me.__213.logicBlock_visible();
		me.__97.logicBlock_visible();
		me._timer_1.logicBlock_visible();
		me.__92.logicBlock_visible();
		me.__91.logicBlock_visible();
		me.__87.logicBlock_visible();
		me.__86.logicBlock_visible();
		me._onoff.logicBlock_visible();
		me._on.logicBlock_visible();
		me._off.logicBlock_visible();
		me.__85.logicBlock_text();
		me.__84.logicBlock_visible();
		me.__80.logicBlock_visible();
		me.__79.logicBlock_visible();
		me.__75.logicBlock_visible();
		me.__74.logicBlock_visible();
		me.__69.logicBlock_visible();
		me.__68.logicBlock_visible();
		me.__64.logicBlock_visible();
		me.__67.logicBlock_visible();
		me.__63.logicBlock_visible();
		me._up.logicBlock_visible();
		me.__61.logicBlock_position();
		me.__61.logicBlock_visible();
		me.__61.logicBlock_alpha();
		me._rectangle_3.logicBlock_visible();
		me._dowm.logicBlock_visible();
		me.__55.logicBlock_visible();
		me.__47.logicBlock_position();
		me.__47.logicBlock_size();
		me.__47.logicBlock_scaling();
		me.__47.logicBlock_visible();
		me._rectangle_41.logicBlock_size();
		me.__53.logicBlock_scaling();
		me._map_11.ggMarkerInstances=[];
		me._map_11.ggLastNodeId=null;
		me._map_11.ggSimpleFloorplanMarkerArray=[];
		me._map_11.ggFloorplanWidth=0;
		me._map_11.ggFloorplanHeight=0;
		me._map_11__mapdiv=document.createElement('div');
		me._map_11__mapdiv.className='ggskin ggskin_map';
		me._map_11.appendChild(me._map_11__mapdiv);
		me._map_11__img=document.createElement('img');
		me._map_11__img.className='ggskin ggskin_map';
		me._map_11__mapdiv.appendChild(me._map_11__img);
		me._map_11.ggRadar={ lastFov : -1, lastPan : -1, xPos : -1, yPos : -1, radarElement : null }
		me._map_11.ggRadar.update=function() {
			var radar=me._map_11.ggRadar;
			var d2r = Math.PI/180 ;
			var fov = player.getFov();
			var pan = player.getPanNorth();
			pan -= me._map_11.ggFloorplanNorth;
			var filterpassed = true;
			var currentId = player.getCurrentNode();
			if (me._map_11.ggFilteredIds.length > 0 && me._map_11.ggFilteredIds.indexOf(currentId) == -1) filterpassed = false;
			if ((me._map_11.ggSimpleFloorplanMarkerArray.hasOwnProperty(currentId)) && filterpassed) {
				var activeMarker = me._map_11.ggSimpleFloorplanMarkerArray[currentId];
				if ((radar.radarElement) && (fov==radar.lastFov) && (pan==radar.lastPan) && (activeMarker.radarXPos==radar.xPos) && (activeMarker.radarYPos==radar.yPos)) return; 
				radar.lastPan=pan; radar.lastFov=fov;
				radar.xPos=activeMarker.radarXPos; radar.yPos=activeMarker.radarYPos;
				if (radar.radarElement) me._map_11__mapdiv.removeChild(radar.radarElement);
				radar.radarElement = document.createElementNS('http://www.w3.org/2000/svg','svg');
				radar.radarElement.setAttributeNS(null,'width',60);
				radar.radarElement.setAttributeNS(null,'height',60);
				radar.radarElement.setAttributeNS(null,'viewBox','0 0 60 60');
				var radarPath = document.createElementNS('http://www.w3.org/2000/svg','path');
				radarPath.setAttributeNS(null,'id','radarPath');
				pan = -90 - pan;
				var arcX1 = 30 * Math.cos((pan - fov / 2) * d2r);
				var arcY1 = 30 * Math.sin((pan - fov / 2) * d2r);
				var arcX2 = 30 * Math.cos((pan + fov / 2) * d2r);
				var arcY2 = 30 * Math.sin((pan + fov / 2) * d2r);
				arcX1 += 30;
				arcY1 += 30;
				arcX2 += 30;
				arcY2 += 30;
				var radarPathString = 'M30,30 L' + arcX1 + ',' + arcY1 + ' A 30 30 0 0 1 ' + arcX2 + ' ' + arcY2 +' Z';
				radarPath.setAttributeNS(null,'d', radarPathString);
				radarPath.setAttributeNS(null,'fill', '#fe9900');
				radarPath.setAttributeNS(null,'fill-opacity', 0.35);
				radarPath.setAttributeNS(null,'stroke', '#fe9900');
				radarPath.setAttributeNS(null,'stroke-opacity', 0.8);
				radarPath.setAttributeNS(null,'stroke-width', 1);
				radarPath.setAttributeNS(null,'stroke-linejoin', 'miter');
				radar.radarElement.appendChild(radarPath);
				me._map_11__mapdiv.appendChild(radar.radarElement);
				var radarXPos = activeMarker.radarXPos - 30;
				var radarYPos = activeMarker.radarYPos - 30;
				radar.radarElement.style['position'] = 'absolute';
				radar.radarElement.style['left'] = '' + radarXPos + 'px';
				radar.radarElement.style['top'] = '' + radarYPos + 'px';
				radar.radarElement.style['z-index'] = me._map_11.style['z-index'] + 1;
			} else {
				if (radar.radarElement) {
					me._map_11__mapdiv.removeChild(radar.radarElement);
					radar.radarElement = null;
				}
			}
		}
		me._map_11.ggShowSimpleFloorplan=function(mapDetails) {
			var mapWidth = me._map_11.clientWidth;
			var mapHeight = me._map_11.clientHeight;
			var tmpWidth = mapDetails['width'];
			var tmpHeight = mapDetails['height'];
			var levelLimit = 1000;
			var levels = 1;
			while (levelLimit < mapDetails['width'] || levelLimit < mapDetails['height']) {
				tmpWidth /= 2;
				tmpHeight /= 2;
				levelLimit *= 2;
				levels++;
			}
			var level = 1;
			while (levels > level && ((mapWidth * window.devicePixelRatio) >= 2*tmpWidth || (mapHeight * window.devicePixelRatio) >= 2*tmpHeight)) {
				tmpWidth *= 2;
				tmpHeight *= 2;
				levelLimit *= 2;
				level++;
			}
			var imageFilename = basePath + 'images/maptiles/' + me._map_11.ggMapId + '_' + level + '.' + mapDetails['tileformat'];
			me._map_11__img.setAttribute('src', imageFilename);
		me._map_11__mapdiv.setAttribute('style','position: absolute; left: 50%; margin-left: -' + me._map_11.ggFloorplanWidth / 2 + 'px; top: 50%; margin-top: -' + me._map_11.ggFloorplanHeight / 2 + 'px;width:' + me._map_11.ggFloorplanWidth + 'px;height:' + me._map_11.ggFloorplanHeight + 'px;overflow:hidden;;');
		var image_rendering_prop = (player.getBrowser() == 2 || player.getBrowser() == 3) ? 'crisp-edges' : 'pixelated';
		me._map_11__img.setAttribute('style','width:' + me._map_11.ggFloorplanWidth + 'px;height:' + me._map_11.ggFloorplanHeight + 'px;-webkit-user-drag:none;pointer-events:none;image-rendering:' + (mapDetails['crispedges'] ? image_rendering_prop : 'auto') + ';');
		}
		me._map_11.ggCalculateFloorplanSize=function(mapDetails) {
			var floorplanWidth = mapDetails['width'];
			var floorplanHeight = mapDetails['height'];
			var frameAR = me._map_11.clientWidth / me._map_11.clientHeight;
			var floorplanAR = floorplanWidth / floorplanHeight;
			if (frameAR > floorplanAR) {
				me._map_11.ggFloorplanHeight = me._map_11.clientHeight;
				me._map_11.ggFloorplanWidth = me._map_11.ggFloorplanHeight * floorplanAR;
			} else {
				me._map_11.ggFloorplanWidth = me._map_11.clientWidth;
				me._map_11.ggFloorplanHeight = me._map_11.ggFloorplanWidth / floorplanAR;
			}
		}
		me._map_11.ggInitMap=function() {
			var mapDetails = player.getMapDetails(me._map_11.ggMapId);
			if (Object.keys(mapDetails).length === 0) return;
			me._map_11.style.backgroundColor = mapDetails['bgcolor'];
			if (mapDetails.hasOwnProperty('transparent') && mapDetails['transparent']) {
				me._map_11.ggPermeableMap = true;
			} else {
				me._map_11.ggPermeableMap = false;
			}
			me._map_11.ggCalculateFloorplanSize(mapDetails);
			me._map_11.ggShowSimpleFloorplan(mapDetails);
			me._map_11.ggFloorplanNorth = mapDetails['floorplannorth'];
			me._map_11.ggMapNotLoaded = false;
		}
		me._map_11.ggClearMap=function() {
			me._map_11.ggClearMapMarkers();
			me._map_11.ggMapNotLoaded = true;
		}
		me._map_11.ggChangeMap=function(mapId) {
			var newMapType = player.getMapType(mapId)
			if (newMapType == 'web') {
				return;
			}
			me._map_11.ggMapId = mapId;
			if (!me._map_11.ggMapNotLoaded) {
				me._map_11.ggClearMap();
				me._map_11.ggInitMap();
				me._map_11.ggInitMapMarkers();
			}
		}
		me._map_11.ggPlaceMarkersOnSimpleFloorplan=function() {
			var markers=me._map_11.ggSimpleFloorplanMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					var coords = player.getNodeMapCoordsInPercent(id, me._map_11.ggMapId);
					var xPos = (me._map_11.ggFloorplanWidth * coords[0]) / 100.0;
					var yPos = (me._map_11.ggFloorplanHeight * coords[1]) / 100.0;
					marker.radarXPos = xPos;
					marker.radarYPos = yPos;
					xPos -= me._map_11.ggHMarkerAnchorOffset;
					yPos -= me._map_11.ggVMarkerAnchorOffset;
					marker.style['position'] = 'absolute';
					marker.style['left'] = xPos + 'px';
					marker.style['top'] = yPos + 'px';
					marker.style['z-index'] = me._map_11.style['z-index'] + 2;
				}
			}
		}
		me._map_11.ggInitMapMarkers=function() {
			me._map_11.ggClearMapMarkers();
			var ids=player.getNodeIds();
			me._map_11.ggFilteredIds = [];
			if (me._map_11.ggFilter != '') {
				var filter = me._map_11.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me._map_11.ggFilteredIds.push(nodeId);
					}
				}
				if (me._map_11.ggFilteredIds.length > 0) ids = me._map_11.ggFilteredIds;
			}
			for(var i=0; i < ids.length; i++) {
				var id = ids[i];
				var coords = player.getNodeMapCoordsInPercent(id, me._map_11.ggMapId);
				if (coords.length>=2) {
					me._map_11.ggHMarkerAnchorOffset = 12;
					me._map_11.ggVMarkerAnchorOffset = 20;
					var markerParent = new Object();
					markerParent.ggElementNodeId=function() { return id };
					var markerClass = new SkinElement_map_pin_Class(me, markerParent);
					me._map_11.ggMarkerInstances.push(markerClass);
					var marker = markerClass._map_pin;
					me._map_11.ggSimpleFloorplanMarkerArray[id] = marker;
					me._map_11__mapdiv.appendChild(marker);
				}
			}
			me._map_11.ggPlaceMarkersOnSimpleFloorplan();
			skin.updateSize(me._map_11);
		}
		me._map_11.ggClearMapMarkers=function() {
			for (id in me._map_11.ggSimpleFloorplanMarkerArray) {
				if (me._map_11.ggSimpleFloorplanMarkerArray.hasOwnProperty(id)) {
					me._map_11__mapdiv.removeChild(me._map_11.ggSimpleFloorplanMarkerArray[id]);
				}
			}
			me._map_11.ggMarkerInstances=[];
			me._map_11.ggSimpleFloorplanMarkerArray=[];
		}
		me._map_11.logicBlock_visible();
		me._map_21.ggMarkerInstances=[];
		me._map_21.ggLastNodeId=null;
		me._map_21.ggSimpleFloorplanMarkerArray=[];
		me._map_21.ggFloorplanWidth=0;
		me._map_21.ggFloorplanHeight=0;
		me._map_21__mapdiv=document.createElement('div');
		me._map_21__mapdiv.className='ggskin ggskin_map';
		me._map_21.appendChild(me._map_21__mapdiv);
		me._map_21__img=document.createElement('img');
		me._map_21__img.className='ggskin ggskin_map';
		me._map_21__mapdiv.appendChild(me._map_21__img);
		me._map_21.ggRadar={ lastFov : -1, lastPan : -1, xPos : -1, yPos : -1, radarElement : null }
		me._map_21.ggRadar.update=function() {
			var radar=me._map_21.ggRadar;
			var d2r = Math.PI/180 ;
			var fov = player.getFov();
			var pan = player.getPanNorth();
			pan -= me._map_21.ggFloorplanNorth;
			var filterpassed = true;
			var currentId = player.getCurrentNode();
			if (me._map_21.ggFilteredIds.length > 0 && me._map_21.ggFilteredIds.indexOf(currentId) == -1) filterpassed = false;
			if ((me._map_21.ggSimpleFloorplanMarkerArray.hasOwnProperty(currentId)) && filterpassed) {
				var activeMarker = me._map_21.ggSimpleFloorplanMarkerArray[currentId];
				if ((radar.radarElement) && (fov==radar.lastFov) && (pan==radar.lastPan) && (activeMarker.radarXPos==radar.xPos) && (activeMarker.radarYPos==radar.yPos)) return; 
				radar.lastPan=pan; radar.lastFov=fov;
				radar.xPos=activeMarker.radarXPos; radar.yPos=activeMarker.radarYPos;
				if (radar.radarElement) me._map_21__mapdiv.removeChild(radar.radarElement);
				radar.radarElement = document.createElementNS('http://www.w3.org/2000/svg','svg');
				radar.radarElement.setAttributeNS(null,'width',60);
				radar.radarElement.setAttributeNS(null,'height',60);
				radar.radarElement.setAttributeNS(null,'viewBox','0 0 60 60');
				var radarPath = document.createElementNS('http://www.w3.org/2000/svg','path');
				radarPath.setAttributeNS(null,'id','radarPath');
				pan = -90 - pan;
				var arcX1 = 30 * Math.cos((pan - fov / 2) * d2r);
				var arcY1 = 30 * Math.sin((pan - fov / 2) * d2r);
				var arcX2 = 30 * Math.cos((pan + fov / 2) * d2r);
				var arcY2 = 30 * Math.sin((pan + fov / 2) * d2r);
				arcX1 += 30;
				arcY1 += 30;
				arcX2 += 30;
				arcY2 += 30;
				var radarPathString = 'M30,30 L' + arcX1 + ',' + arcY1 + ' A 30 30 0 0 1 ' + arcX2 + ' ' + arcY2 +' Z';
				radarPath.setAttributeNS(null,'d', radarPathString);
				radarPath.setAttributeNS(null,'fill', '#fe9900');
				radarPath.setAttributeNS(null,'fill-opacity', 0.35);
				radarPath.setAttributeNS(null,'stroke', '#fe9900');
				radarPath.setAttributeNS(null,'stroke-opacity', 0.8);
				radarPath.setAttributeNS(null,'stroke-width', 1);
				radarPath.setAttributeNS(null,'stroke-linejoin', 'miter');
				radar.radarElement.appendChild(radarPath);
				me._map_21__mapdiv.appendChild(radar.radarElement);
				var radarXPos = activeMarker.radarXPos - 30;
				var radarYPos = activeMarker.radarYPos - 30;
				radar.radarElement.style['position'] = 'absolute';
				radar.radarElement.style['left'] = '' + radarXPos + 'px';
				radar.radarElement.style['top'] = '' + radarYPos + 'px';
				radar.radarElement.style['z-index'] = me._map_21.style['z-index'] + 1;
			} else {
				if (radar.radarElement) {
					me._map_21__mapdiv.removeChild(radar.radarElement);
					radar.radarElement = null;
				}
			}
		}
		me._map_21.ggShowSimpleFloorplan=function(mapDetails) {
			var mapWidth = me._map_21.clientWidth;
			var mapHeight = me._map_21.clientHeight;
			var tmpWidth = mapDetails['width'];
			var tmpHeight = mapDetails['height'];
			var levelLimit = 1000;
			var levels = 1;
			while (levelLimit < mapDetails['width'] || levelLimit < mapDetails['height']) {
				tmpWidth /= 2;
				tmpHeight /= 2;
				levelLimit *= 2;
				levels++;
			}
			var level = 1;
			while (levels > level && ((mapWidth * window.devicePixelRatio) >= 2*tmpWidth || (mapHeight * window.devicePixelRatio) >= 2*tmpHeight)) {
				tmpWidth *= 2;
				tmpHeight *= 2;
				levelLimit *= 2;
				level++;
			}
			var imageFilename = basePath + 'images/maptiles/' + me._map_21.ggMapId + '_' + level + '.' + mapDetails['tileformat'];
			me._map_21__img.setAttribute('src', imageFilename);
		me._map_21__mapdiv.setAttribute('style','position: absolute; left: 50%; margin-left: -' + me._map_21.ggFloorplanWidth / 2 + 'px; top: 50%; margin-top: -' + me._map_21.ggFloorplanHeight / 2 + 'px;width:' + me._map_21.ggFloorplanWidth + 'px;height:' + me._map_21.ggFloorplanHeight + 'px;overflow:hidden;;');
		var image_rendering_prop = (player.getBrowser() == 2 || player.getBrowser() == 3) ? 'crisp-edges' : 'pixelated';
		me._map_21__img.setAttribute('style','width:' + me._map_21.ggFloorplanWidth + 'px;height:' + me._map_21.ggFloorplanHeight + 'px;-webkit-user-drag:none;pointer-events:none;image-rendering:' + (mapDetails['crispedges'] ? image_rendering_prop : 'auto') + ';');
		}
		me._map_21.ggCalculateFloorplanSize=function(mapDetails) {
			var floorplanWidth = mapDetails['width'];
			var floorplanHeight = mapDetails['height'];
			var frameAR = me._map_21.clientWidth / me._map_21.clientHeight;
			var floorplanAR = floorplanWidth / floorplanHeight;
			if (frameAR > floorplanAR) {
				me._map_21.ggFloorplanHeight = me._map_21.clientHeight;
				me._map_21.ggFloorplanWidth = me._map_21.ggFloorplanHeight * floorplanAR;
			} else {
				me._map_21.ggFloorplanWidth = me._map_21.clientWidth;
				me._map_21.ggFloorplanHeight = me._map_21.ggFloorplanWidth / floorplanAR;
			}
		}
		me._map_21.ggInitMap=function() {
			var mapDetails = player.getMapDetails(me._map_21.ggMapId);
			if (Object.keys(mapDetails).length === 0) return;
			me._map_21.style.backgroundColor = mapDetails['bgcolor'];
			if (mapDetails.hasOwnProperty('transparent') && mapDetails['transparent']) {
				me._map_21.ggPermeableMap = true;
			} else {
				me._map_21.ggPermeableMap = false;
			}
			me._map_21.ggCalculateFloorplanSize(mapDetails);
			me._map_21.ggShowSimpleFloorplan(mapDetails);
			me._map_21.ggFloorplanNorth = mapDetails['floorplannorth'];
			me._map_21.ggMapNotLoaded = false;
		}
		me._map_21.ggClearMap=function() {
			me._map_21.ggClearMapMarkers();
			me._map_21.ggMapNotLoaded = true;
		}
		me._map_21.ggChangeMap=function(mapId) {
			var newMapType = player.getMapType(mapId)
			if (newMapType == 'web') {
				return;
			}
			me._map_21.ggMapId = mapId;
			if (!me._map_21.ggMapNotLoaded) {
				me._map_21.ggClearMap();
				me._map_21.ggInitMap();
				me._map_21.ggInitMapMarkers();
			}
		}
		me._map_21.ggPlaceMarkersOnSimpleFloorplan=function() {
			var markers=me._map_21.ggSimpleFloorplanMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					var coords = player.getNodeMapCoordsInPercent(id, me._map_21.ggMapId);
					var xPos = (me._map_21.ggFloorplanWidth * coords[0]) / 100.0;
					var yPos = (me._map_21.ggFloorplanHeight * coords[1]) / 100.0;
					marker.radarXPos = xPos;
					marker.radarYPos = yPos;
					xPos -= me._map_21.ggHMarkerAnchorOffset;
					yPos -= me._map_21.ggVMarkerAnchorOffset;
					marker.style['position'] = 'absolute';
					marker.style['left'] = xPos + 'px';
					marker.style['top'] = yPos + 'px';
					marker.style['z-index'] = me._map_21.style['z-index'] + 2;
				}
			}
		}
		me._map_21.ggInitMapMarkers=function() {
			me._map_21.ggClearMapMarkers();
			var ids=player.getNodeIds();
			me._map_21.ggFilteredIds = [];
			if (me._map_21.ggFilter != '') {
				var filter = me._map_21.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me._map_21.ggFilteredIds.push(nodeId);
					}
				}
				if (me._map_21.ggFilteredIds.length > 0) ids = me._map_21.ggFilteredIds;
			}
			for(var i=0; i < ids.length; i++) {
				var id = ids[i];
				var coords = player.getNodeMapCoordsInPercent(id, me._map_21.ggMapId);
				if (coords.length>=2) {
					me._map_21.ggHMarkerAnchorOffset = 12;
					me._map_21.ggVMarkerAnchorOffset = 20;
					var markerParent = new Object();
					markerParent.ggElementNodeId=function() { return id };
					var markerClass = new SkinElement_map_pin_Class(me, markerParent);
					me._map_21.ggMarkerInstances.push(markerClass);
					var marker = markerClass._map_pin;
					me._map_21.ggSimpleFloorplanMarkerArray[id] = marker;
					me._map_21__mapdiv.appendChild(marker);
				}
			}
			me._map_21.ggPlaceMarkersOnSimpleFloorplan();
			skin.updateSize(me._map_21);
		}
		me._map_21.ggClearMapMarkers=function() {
			for (id in me._map_21.ggSimpleFloorplanMarkerArray) {
				if (me._map_21.ggSimpleFloorplanMarkerArray.hasOwnProperty(id)) {
					me._map_21__mapdiv.removeChild(me._map_21.ggSimpleFloorplanMarkerArray[id]);
				}
			}
			me._map_21.ggMarkerInstances=[];
			me._map_21.ggSimpleFloorplanMarkerArray=[];
		}
		me._map_21.logicBlock_visible();
		me.__49.logicBlock_visible();
		me.__50.logicBlock_text();
		me._image_60.logicBlock_angle();
		me.__48.logicBlock_visible();
		me.__44.logicBlock_position();
		me.__44.logicBlock_visible();
		me._rectangle_40.logicBlock_size();
		me.__46.logicBlock_scaling();
		me._map_10.ggMarkerInstances=[];
		me._map_10.ggLastNodeId=null;
		me._map_10.ggSimpleFloorplanMarkerArray=[];
		me._map_10.ggFloorplanWidth=0;
		me._map_10.ggFloorplanHeight=0;
		me._map_10__mapdiv=document.createElement('div');
		me._map_10__mapdiv.className='ggskin ggskin_map';
		me._map_10.appendChild(me._map_10__mapdiv);
		me._map_10__img=document.createElement('img');
		me._map_10__img.className='ggskin ggskin_map';
		me._map_10__mapdiv.appendChild(me._map_10__img);
		me._map_10.ggRadar={ lastFov : -1, lastPan : -1, xPos : -1, yPos : -1, radarElement : null }
		me._map_10.ggRadar.update=function() {
			var radar=me._map_10.ggRadar;
			var d2r = Math.PI/180 ;
			var fov = player.getFov();
			var pan = player.getPanNorth();
			pan -= me._map_10.ggFloorplanNorth;
			var filterpassed = true;
			var currentId = player.getCurrentNode();
			if (me._map_10.ggFilteredIds.length > 0 && me._map_10.ggFilteredIds.indexOf(currentId) == -1) filterpassed = false;
			if ((me._map_10.ggSimpleFloorplanMarkerArray.hasOwnProperty(currentId)) && filterpassed) {
				var activeMarker = me._map_10.ggSimpleFloorplanMarkerArray[currentId];
				if ((radar.radarElement) && (fov==radar.lastFov) && (pan==radar.lastPan) && (activeMarker.radarXPos==radar.xPos) && (activeMarker.radarYPos==radar.yPos)) return; 
				radar.lastPan=pan; radar.lastFov=fov;
				radar.xPos=activeMarker.radarXPos; radar.yPos=activeMarker.radarYPos;
				if (radar.radarElement) me._map_10__mapdiv.removeChild(radar.radarElement);
				radar.radarElement = document.createElementNS('http://www.w3.org/2000/svg','svg');
				radar.radarElement.setAttributeNS(null,'width',60);
				radar.radarElement.setAttributeNS(null,'height',60);
				radar.radarElement.setAttributeNS(null,'viewBox','0 0 60 60');
				var radarPath = document.createElementNS('http://www.w3.org/2000/svg','path');
				radarPath.setAttributeNS(null,'id','radarPath');
				pan = -90 - pan;
				var arcX1 = 30 * Math.cos((pan - fov / 2) * d2r);
				var arcY1 = 30 * Math.sin((pan - fov / 2) * d2r);
				var arcX2 = 30 * Math.cos((pan + fov / 2) * d2r);
				var arcY2 = 30 * Math.sin((pan + fov / 2) * d2r);
				arcX1 += 30;
				arcY1 += 30;
				arcX2 += 30;
				arcY2 += 30;
				var radarPathString = 'M30,30 L' + arcX1 + ',' + arcY1 + ' A 30 30 0 0 1 ' + arcX2 + ' ' + arcY2 +' Z';
				radarPath.setAttributeNS(null,'d', radarPathString);
				radarPath.setAttributeNS(null,'fill', '#fe9900');
				radarPath.setAttributeNS(null,'fill-opacity', 0.35);
				radarPath.setAttributeNS(null,'stroke', '#fe9900');
				radarPath.setAttributeNS(null,'stroke-opacity', 0.8);
				radarPath.setAttributeNS(null,'stroke-width', 1);
				radarPath.setAttributeNS(null,'stroke-linejoin', 'miter');
				radar.radarElement.appendChild(radarPath);
				me._map_10__mapdiv.appendChild(radar.radarElement);
				var radarXPos = activeMarker.radarXPos - 30;
				var radarYPos = activeMarker.radarYPos - 30;
				radar.radarElement.style['position'] = 'absolute';
				radar.radarElement.style['left'] = '' + radarXPos + 'px';
				radar.radarElement.style['top'] = '' + radarYPos + 'px';
				radar.radarElement.style['z-index'] = me._map_10.style['z-index'] + 1;
			} else {
				if (radar.radarElement) {
					me._map_10__mapdiv.removeChild(radar.radarElement);
					radar.radarElement = null;
				}
			}
		}
		me._map_10.ggShowSimpleFloorplan=function(mapDetails) {
			var mapWidth = me._map_10.clientWidth;
			var mapHeight = me._map_10.clientHeight;
			var tmpWidth = mapDetails['width'];
			var tmpHeight = mapDetails['height'];
			var levelLimit = 1000;
			var levels = 1;
			while (levelLimit < mapDetails['width'] || levelLimit < mapDetails['height']) {
				tmpWidth /= 2;
				tmpHeight /= 2;
				levelLimit *= 2;
				levels++;
			}
			var level = 1;
			while (levels > level && ((mapWidth * window.devicePixelRatio) >= 2*tmpWidth || (mapHeight * window.devicePixelRatio) >= 2*tmpHeight)) {
				tmpWidth *= 2;
				tmpHeight *= 2;
				levelLimit *= 2;
				level++;
			}
			var imageFilename = basePath + 'images/maptiles/' + me._map_10.ggMapId + '_' + level + '.' + mapDetails['tileformat'];
			me._map_10__img.setAttribute('src', imageFilename);
		me._map_10__mapdiv.setAttribute('style','position: absolute; left: 50%; margin-left: -' + me._map_10.ggFloorplanWidth / 2 + 'px; top: 50%; margin-top: -' + me._map_10.ggFloorplanHeight / 2 + 'px;width:' + me._map_10.ggFloorplanWidth + 'px;height:' + me._map_10.ggFloorplanHeight + 'px;overflow:hidden;;');
		var image_rendering_prop = (player.getBrowser() == 2 || player.getBrowser() == 3) ? 'crisp-edges' : 'pixelated';
		me._map_10__img.setAttribute('style','width:' + me._map_10.ggFloorplanWidth + 'px;height:' + me._map_10.ggFloorplanHeight + 'px;-webkit-user-drag:none;pointer-events:none;image-rendering:' + (mapDetails['crispedges'] ? image_rendering_prop : 'auto') + ';');
		}
		me._map_10.ggCalculateFloorplanSize=function(mapDetails) {
			var floorplanWidth = mapDetails['width'];
			var floorplanHeight = mapDetails['height'];
			var frameAR = me._map_10.clientWidth / me._map_10.clientHeight;
			var floorplanAR = floorplanWidth / floorplanHeight;
			if (frameAR > floorplanAR) {
				me._map_10.ggFloorplanHeight = me._map_10.clientHeight;
				me._map_10.ggFloorplanWidth = me._map_10.ggFloorplanHeight * floorplanAR;
			} else {
				me._map_10.ggFloorplanWidth = me._map_10.clientWidth;
				me._map_10.ggFloorplanHeight = me._map_10.ggFloorplanWidth / floorplanAR;
			}
		}
		me._map_10.ggInitMap=function() {
			var mapDetails = player.getMapDetails(me._map_10.ggMapId);
			if (Object.keys(mapDetails).length === 0) return;
			me._map_10.style.backgroundColor = mapDetails['bgcolor'];
			if (mapDetails.hasOwnProperty('transparent') && mapDetails['transparent']) {
				me._map_10.ggPermeableMap = true;
			} else {
				me._map_10.ggPermeableMap = false;
			}
			me._map_10.ggCalculateFloorplanSize(mapDetails);
			me._map_10.ggShowSimpleFloorplan(mapDetails);
			me._map_10.ggFloorplanNorth = mapDetails['floorplannorth'];
			me._map_10.ggMapNotLoaded = false;
		}
		me._map_10.ggClearMap=function() {
			me._map_10.ggClearMapMarkers();
			me._map_10.ggMapNotLoaded = true;
		}
		me._map_10.ggChangeMap=function(mapId) {
			var newMapType = player.getMapType(mapId)
			if (newMapType == 'web') {
				return;
			}
			me._map_10.ggMapId = mapId;
			if (!me._map_10.ggMapNotLoaded) {
				me._map_10.ggClearMap();
				me._map_10.ggInitMap();
				me._map_10.ggInitMapMarkers();
			}
		}
		me._map_10.ggPlaceMarkersOnSimpleFloorplan=function() {
			var markers=me._map_10.ggSimpleFloorplanMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					var coords = player.getNodeMapCoordsInPercent(id, me._map_10.ggMapId);
					var xPos = (me._map_10.ggFloorplanWidth * coords[0]) / 100.0;
					var yPos = (me._map_10.ggFloorplanHeight * coords[1]) / 100.0;
					marker.radarXPos = xPos;
					marker.radarYPos = yPos;
					xPos -= me._map_10.ggHMarkerAnchorOffset;
					yPos -= me._map_10.ggVMarkerAnchorOffset;
					marker.style['position'] = 'absolute';
					marker.style['left'] = xPos + 'px';
					marker.style['top'] = yPos + 'px';
					marker.style['z-index'] = me._map_10.style['z-index'] + 2;
				}
			}
		}
		me._map_10.ggInitMapMarkers=function() {
			me._map_10.ggClearMapMarkers();
			var ids=player.getNodeIds();
			me._map_10.ggFilteredIds = [];
			if (me._map_10.ggFilter != '') {
				var filter = me._map_10.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me._map_10.ggFilteredIds.push(nodeId);
					}
				}
				if (me._map_10.ggFilteredIds.length > 0) ids = me._map_10.ggFilteredIds;
			}
			for(var i=0; i < ids.length; i++) {
				var id = ids[i];
				var coords = player.getNodeMapCoordsInPercent(id, me._map_10.ggMapId);
				if (coords.length>=2) {
					me._map_10.ggHMarkerAnchorOffset = 12;
					me._map_10.ggVMarkerAnchorOffset = 20;
					var markerParent = new Object();
					markerParent.ggElementNodeId=function() { return id };
					var markerClass = new SkinElement_map_pin_Class(me, markerParent);
					me._map_10.ggMarkerInstances.push(markerClass);
					var marker = markerClass._map_pin;
					me._map_10.ggSimpleFloorplanMarkerArray[id] = marker;
					me._map_10__mapdiv.appendChild(marker);
				}
			}
			me._map_10.ggPlaceMarkersOnSimpleFloorplan();
			skin.updateSize(me._map_10);
		}
		me._map_10.ggClearMapMarkers=function() {
			for (id in me._map_10.ggSimpleFloorplanMarkerArray) {
				if (me._map_10.ggSimpleFloorplanMarkerArray.hasOwnProperty(id)) {
					me._map_10__mapdiv.removeChild(me._map_10.ggSimpleFloorplanMarkerArray[id]);
				}
			}
			me._map_10.ggMarkerInstances=[];
			me._map_10.ggSimpleFloorplanMarkerArray=[];
		}
		me._map_10.logicBlock_visible();
		me._map_20.ggMarkerInstances=[];
		me._map_20.ggLastNodeId=null;
		me._map_20.ggSimpleFloorplanMarkerArray=[];
		me._map_20.ggFloorplanWidth=0;
		me._map_20.ggFloorplanHeight=0;
		me._map_20__mapdiv=document.createElement('div');
		me._map_20__mapdiv.className='ggskin ggskin_map';
		me._map_20.appendChild(me._map_20__mapdiv);
		me._map_20__img=document.createElement('img');
		me._map_20__img.className='ggskin ggskin_map';
		me._map_20__mapdiv.appendChild(me._map_20__img);
		me._map_20.ggRadar={ lastFov : -1, lastPan : -1, xPos : -1, yPos : -1, radarElement : null }
		me._map_20.ggRadar.update=function() {
			var radar=me._map_20.ggRadar;
			var d2r = Math.PI/180 ;
			var fov = player.getFov();
			var pan = player.getPanNorth();
			pan -= me._map_20.ggFloorplanNorth;
			var filterpassed = true;
			var currentId = player.getCurrentNode();
			if (me._map_20.ggFilteredIds.length > 0 && me._map_20.ggFilteredIds.indexOf(currentId) == -1) filterpassed = false;
			if ((me._map_20.ggSimpleFloorplanMarkerArray.hasOwnProperty(currentId)) && filterpassed) {
				var activeMarker = me._map_20.ggSimpleFloorplanMarkerArray[currentId];
				if ((radar.radarElement) && (fov==radar.lastFov) && (pan==radar.lastPan) && (activeMarker.radarXPos==radar.xPos) && (activeMarker.radarYPos==radar.yPos)) return; 
				radar.lastPan=pan; radar.lastFov=fov;
				radar.xPos=activeMarker.radarXPos; radar.yPos=activeMarker.radarYPos;
				if (radar.radarElement) me._map_20__mapdiv.removeChild(radar.radarElement);
				radar.radarElement = document.createElementNS('http://www.w3.org/2000/svg','svg');
				radar.radarElement.setAttributeNS(null,'width',60);
				radar.radarElement.setAttributeNS(null,'height',60);
				radar.radarElement.setAttributeNS(null,'viewBox','0 0 60 60');
				var radarPath = document.createElementNS('http://www.w3.org/2000/svg','path');
				radarPath.setAttributeNS(null,'id','radarPath');
				pan = -90 - pan;
				var arcX1 = 30 * Math.cos((pan - fov / 2) * d2r);
				var arcY1 = 30 * Math.sin((pan - fov / 2) * d2r);
				var arcX2 = 30 * Math.cos((pan + fov / 2) * d2r);
				var arcY2 = 30 * Math.sin((pan + fov / 2) * d2r);
				arcX1 += 30;
				arcY1 += 30;
				arcX2 += 30;
				arcY2 += 30;
				var radarPathString = 'M30,30 L' + arcX1 + ',' + arcY1 + ' A 30 30 0 0 1 ' + arcX2 + ' ' + arcY2 +' Z';
				radarPath.setAttributeNS(null,'d', radarPathString);
				radarPath.setAttributeNS(null,'fill', '#fe9900');
				radarPath.setAttributeNS(null,'fill-opacity', 0.35);
				radarPath.setAttributeNS(null,'stroke', '#fe9900');
				radarPath.setAttributeNS(null,'stroke-opacity', 0.8);
				radarPath.setAttributeNS(null,'stroke-width', 1);
				radarPath.setAttributeNS(null,'stroke-linejoin', 'miter');
				radar.radarElement.appendChild(radarPath);
				me._map_20__mapdiv.appendChild(radar.radarElement);
				var radarXPos = activeMarker.radarXPos - 30;
				var radarYPos = activeMarker.radarYPos - 30;
				radar.radarElement.style['position'] = 'absolute';
				radar.radarElement.style['left'] = '' + radarXPos + 'px';
				radar.radarElement.style['top'] = '' + radarYPos + 'px';
				radar.radarElement.style['z-index'] = me._map_20.style['z-index'] + 1;
			} else {
				if (radar.radarElement) {
					me._map_20__mapdiv.removeChild(radar.radarElement);
					radar.radarElement = null;
				}
			}
		}
		me._map_20.ggShowSimpleFloorplan=function(mapDetails) {
			var mapWidth = me._map_20.clientWidth;
			var mapHeight = me._map_20.clientHeight;
			var tmpWidth = mapDetails['width'];
			var tmpHeight = mapDetails['height'];
			var levelLimit = 1000;
			var levels = 1;
			while (levelLimit < mapDetails['width'] || levelLimit < mapDetails['height']) {
				tmpWidth /= 2;
				tmpHeight /= 2;
				levelLimit *= 2;
				levels++;
			}
			var level = 1;
			while (levels > level && ((mapWidth * window.devicePixelRatio) >= 2*tmpWidth || (mapHeight * window.devicePixelRatio) >= 2*tmpHeight)) {
				tmpWidth *= 2;
				tmpHeight *= 2;
				levelLimit *= 2;
				level++;
			}
			var imageFilename = basePath + 'images/maptiles/' + me._map_20.ggMapId + '_' + level + '.' + mapDetails['tileformat'];
			me._map_20__img.setAttribute('src', imageFilename);
		me._map_20__mapdiv.setAttribute('style','position: absolute; left: 50%; margin-left: -' + me._map_20.ggFloorplanWidth / 2 + 'px; top: 50%; margin-top: -' + me._map_20.ggFloorplanHeight / 2 + 'px;width:' + me._map_20.ggFloorplanWidth + 'px;height:' + me._map_20.ggFloorplanHeight + 'px;overflow:hidden;;');
		var image_rendering_prop = (player.getBrowser() == 2 || player.getBrowser() == 3) ? 'crisp-edges' : 'pixelated';
		me._map_20__img.setAttribute('style','width:' + me._map_20.ggFloorplanWidth + 'px;height:' + me._map_20.ggFloorplanHeight + 'px;-webkit-user-drag:none;pointer-events:none;image-rendering:' + (mapDetails['crispedges'] ? image_rendering_prop : 'auto') + ';');
		}
		me._map_20.ggCalculateFloorplanSize=function(mapDetails) {
			var floorplanWidth = mapDetails['width'];
			var floorplanHeight = mapDetails['height'];
			var frameAR = me._map_20.clientWidth / me._map_20.clientHeight;
			var floorplanAR = floorplanWidth / floorplanHeight;
			if (frameAR > floorplanAR) {
				me._map_20.ggFloorplanHeight = me._map_20.clientHeight;
				me._map_20.ggFloorplanWidth = me._map_20.ggFloorplanHeight * floorplanAR;
			} else {
				me._map_20.ggFloorplanWidth = me._map_20.clientWidth;
				me._map_20.ggFloorplanHeight = me._map_20.ggFloorplanWidth / floorplanAR;
			}
		}
		me._map_20.ggInitMap=function() {
			var mapDetails = player.getMapDetails(me._map_20.ggMapId);
			if (Object.keys(mapDetails).length === 0) return;
			me._map_20.style.backgroundColor = mapDetails['bgcolor'];
			if (mapDetails.hasOwnProperty('transparent') && mapDetails['transparent']) {
				me._map_20.ggPermeableMap = true;
			} else {
				me._map_20.ggPermeableMap = false;
			}
			me._map_20.ggCalculateFloorplanSize(mapDetails);
			me._map_20.ggShowSimpleFloorplan(mapDetails);
			me._map_20.ggFloorplanNorth = mapDetails['floorplannorth'];
			me._map_20.ggMapNotLoaded = false;
		}
		me._map_20.ggClearMap=function() {
			me._map_20.ggClearMapMarkers();
			me._map_20.ggMapNotLoaded = true;
		}
		me._map_20.ggChangeMap=function(mapId) {
			var newMapType = player.getMapType(mapId)
			if (newMapType == 'web') {
				return;
			}
			me._map_20.ggMapId = mapId;
			if (!me._map_20.ggMapNotLoaded) {
				me._map_20.ggClearMap();
				me._map_20.ggInitMap();
				me._map_20.ggInitMapMarkers();
			}
		}
		me._map_20.ggPlaceMarkersOnSimpleFloorplan=function() {
			var markers=me._map_20.ggSimpleFloorplanMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					var coords = player.getNodeMapCoordsInPercent(id, me._map_20.ggMapId);
					var xPos = (me._map_20.ggFloorplanWidth * coords[0]) / 100.0;
					var yPos = (me._map_20.ggFloorplanHeight * coords[1]) / 100.0;
					marker.radarXPos = xPos;
					marker.radarYPos = yPos;
					xPos -= me._map_20.ggHMarkerAnchorOffset;
					yPos -= me._map_20.ggVMarkerAnchorOffset;
					marker.style['position'] = 'absolute';
					marker.style['left'] = xPos + 'px';
					marker.style['top'] = yPos + 'px';
					marker.style['z-index'] = me._map_20.style['z-index'] + 2;
				}
			}
		}
		me._map_20.ggInitMapMarkers=function() {
			me._map_20.ggClearMapMarkers();
			var ids=player.getNodeIds();
			me._map_20.ggFilteredIds = [];
			if (me._map_20.ggFilter != '') {
				var filter = me._map_20.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me._map_20.ggFilteredIds.push(nodeId);
					}
				}
				if (me._map_20.ggFilteredIds.length > 0) ids = me._map_20.ggFilteredIds;
			}
			for(var i=0; i < ids.length; i++) {
				var id = ids[i];
				var coords = player.getNodeMapCoordsInPercent(id, me._map_20.ggMapId);
				if (coords.length>=2) {
					me._map_20.ggHMarkerAnchorOffset = 12;
					me._map_20.ggVMarkerAnchorOffset = 20;
					var markerParent = new Object();
					markerParent.ggElementNodeId=function() { return id };
					var markerClass = new SkinElement_map_pin_Class(me, markerParent);
					me._map_20.ggMarkerInstances.push(markerClass);
					var marker = markerClass._map_pin;
					me._map_20.ggSimpleFloorplanMarkerArray[id] = marker;
					me._map_20__mapdiv.appendChild(marker);
				}
			}
			me._map_20.ggPlaceMarkersOnSimpleFloorplan();
			skin.updateSize(me._map_20);
		}
		me._map_20.ggClearMapMarkers=function() {
			for (id in me._map_20.ggSimpleFloorplanMarkerArray) {
				if (me._map_20.ggSimpleFloorplanMarkerArray.hasOwnProperty(id)) {
					me._map_20__mapdiv.removeChild(me._map_20.ggSimpleFloorplanMarkerArray[id]);
				}
			}
			me._map_20.ggMarkerInstances=[];
			me._map_20.ggSimpleFloorplanMarkerArray=[];
		}
		me._map_20.logicBlock_visible();
		me._m1.logicBlock_visible();
		me._m2.logicBlock_text();
		me._image_6m.logicBlock_angle();
		me._m0.logicBlock_visible();
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me._markertemplate);
		me._markertemplate__normal = clonedNormalElement._map_pin;
		me._markertemplate__normalInst = clonedNormalElement;
		me._markertemplate__normal.style.visibility='inherit';
		me._markertemplate__normal.style.left='-12px';
		me._markertemplate__normal.style.top='-20px';
		me._markertemplate.ggMarkerNormal=me._markertemplate__normal;
		me._markertemplate.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me._markertemplate);
		me._markertemplate__active = clonedActiveElement._map_pin;
		me._markertemplate__activeInst = clonedActiveElement;
		me._markertemplate__active.style.visibility='hidden';
		me._markertemplate__active.style.left='-12px';
		me._markertemplate__active.style.top='-20px';
		me._markertemplate.ggMarkerActive=me._markertemplate__active;
		me._markertemplate.ggMarkerInstances.push(clonedActiveElement);
		if (me._markertemplate.firstChild) {
			me._markertemplate.insertBefore(me._markertemplate__active,me._markertemplate.firstChild);
		} else {
			me._markertemplate.appendChild(me._markertemplate__active);
		}
		if (me._markertemplate.firstChild) {
			me._markertemplate.insertBefore(me._markertemplate__normal,me._markertemplate.firstChild);
		} else {
			me._markertemplate.appendChild(me._markertemplate__normal);
		}
		for (var i = 0; i < me._markertemplate.childNodes.length; i++) {
			me._markertemplate.ggMarkerInstances.push(me._markertemplate.childNodes[i]);
		}
		me.__43.logicBlock_visible();
		me.__211.logicBlock_position();
		me.__211.logicBlock_visible();
		me._image_3.logicBlock_position();
		me._image_4.logicBlock_position();
		me.__38.logicBlock_position();
		me.__38.logicBlock_size();
		me.__38.logicBlock_scaling();
		me.__41.logicBlock_size();
		me.__42.logicBlock_size();
		me._map_1.ggMarkerInstances=[];
		me._map_1.ggLastNodeId=null;
		me._map_1.ggSimpleFloorplanMarkerArray=[];
		me._map_1.ggFloorplanWidth=0;
		me._map_1.ggFloorplanHeight=0;
		me._map_1__mapdiv=document.createElement('div');
		me._map_1__mapdiv.className='ggskin ggskin_map';
		me._map_1.appendChild(me._map_1__mapdiv);
		me._map_1__img=document.createElement('img');
		me._map_1__img.className='ggskin ggskin_map';
		me._map_1__mapdiv.appendChild(me._map_1__img);
		me._map_1.ggRadar={ lastFov : -1, lastPan : -1, xPos : -1, yPos : -1, radarElement : null }
		me._map_1.ggRadar.update=function() {
			var radar=me._map_1.ggRadar;
			var d2r = Math.PI/180 ;
			var fov = player.getFov();
			var pan = player.getPanNorth();
			pan -= me._map_1.ggFloorplanNorth;
			var filterpassed = true;
			var currentId = player.getCurrentNode();
			if (me._map_1.ggFilteredIds.length > 0 && me._map_1.ggFilteredIds.indexOf(currentId) == -1) filterpassed = false;
			if ((me._map_1.ggSimpleFloorplanMarkerArray.hasOwnProperty(currentId)) && filterpassed) {
				var activeMarker = me._map_1.ggSimpleFloorplanMarkerArray[currentId];
				if ((radar.radarElement) && (fov==radar.lastFov) && (pan==radar.lastPan) && (activeMarker.radarXPos==radar.xPos) && (activeMarker.radarYPos==radar.yPos)) return; 
				radar.lastPan=pan; radar.lastFov=fov;
				radar.xPos=activeMarker.radarXPos; radar.yPos=activeMarker.radarYPos;
				if (radar.radarElement) me._map_1__mapdiv.removeChild(radar.radarElement);
				radar.radarElement = document.createElementNS('http://www.w3.org/2000/svg','svg');
				radar.radarElement.setAttributeNS(null,'width',60);
				radar.radarElement.setAttributeNS(null,'height',60);
				radar.radarElement.setAttributeNS(null,'viewBox','0 0 60 60');
				var radarPath = document.createElementNS('http://www.w3.org/2000/svg','path');
				radarPath.setAttributeNS(null,'id','radarPath');
				pan = -90 - pan;
				var arcX1 = 30 * Math.cos((pan - fov / 2) * d2r);
				var arcY1 = 30 * Math.sin((pan - fov / 2) * d2r);
				var arcX2 = 30 * Math.cos((pan + fov / 2) * d2r);
				var arcY2 = 30 * Math.sin((pan + fov / 2) * d2r);
				arcX1 += 30;
				arcY1 += 30;
				arcX2 += 30;
				arcY2 += 30;
				var radarPathString = 'M30,30 L' + arcX1 + ',' + arcY1 + ' A 30 30 0 0 1 ' + arcX2 + ' ' + arcY2 +' Z';
				radarPath.setAttributeNS(null,'d', radarPathString);
				radarPath.setAttributeNS(null,'fill', '#fe9900');
				radarPath.setAttributeNS(null,'fill-opacity', 0.35);
				radarPath.setAttributeNS(null,'stroke', '#fe9900');
				radarPath.setAttributeNS(null,'stroke-opacity', 0.8);
				radarPath.setAttributeNS(null,'stroke-width', 1);
				radarPath.setAttributeNS(null,'stroke-linejoin', 'miter');
				radar.radarElement.appendChild(radarPath);
				me._map_1__mapdiv.appendChild(radar.radarElement);
				var radarXPos = activeMarker.radarXPos - 30;
				var radarYPos = activeMarker.radarYPos - 30;
				radar.radarElement.style['position'] = 'absolute';
				radar.radarElement.style['left'] = '' + radarXPos + 'px';
				radar.radarElement.style['top'] = '' + radarYPos + 'px';
				radar.radarElement.style['z-index'] = me._map_1.style['z-index'] + 1;
			} else {
				if (radar.radarElement) {
					me._map_1__mapdiv.removeChild(radar.radarElement);
					radar.radarElement = null;
				}
			}
		}
		me._map_1.ggShowSimpleFloorplan=function(mapDetails) {
			var mapWidth = me._map_1.clientWidth;
			var mapHeight = me._map_1.clientHeight;
			var tmpWidth = mapDetails['width'];
			var tmpHeight = mapDetails['height'];
			var levelLimit = 1000;
			var levels = 1;
			while (levelLimit < mapDetails['width'] || levelLimit < mapDetails['height']) {
				tmpWidth /= 2;
				tmpHeight /= 2;
				levelLimit *= 2;
				levels++;
			}
			var level = 1;
			while (levels > level && ((mapWidth * window.devicePixelRatio) >= 2*tmpWidth || (mapHeight * window.devicePixelRatio) >= 2*tmpHeight)) {
				tmpWidth *= 2;
				tmpHeight *= 2;
				levelLimit *= 2;
				level++;
			}
			var imageFilename = basePath + 'images/maptiles/' + me._map_1.ggMapId + '_' + level + '.' + mapDetails['tileformat'];
			me._map_1__img.setAttribute('src', imageFilename);
		me._map_1__mapdiv.setAttribute('style','position: absolute; left: 50%; margin-left: -' + me._map_1.ggFloorplanWidth / 2 + 'px; top: 50%; margin-top: -' + me._map_1.ggFloorplanHeight / 2 + 'px;width:' + me._map_1.ggFloorplanWidth + 'px;height:' + me._map_1.ggFloorplanHeight + 'px;overflow:hidden;;');
		var image_rendering_prop = (player.getBrowser() == 2 || player.getBrowser() == 3) ? 'crisp-edges' : 'pixelated';
		me._map_1__img.setAttribute('style','width:' + me._map_1.ggFloorplanWidth + 'px;height:' + me._map_1.ggFloorplanHeight + 'px;-webkit-user-drag:none;pointer-events:none;image-rendering:' + (mapDetails['crispedges'] ? image_rendering_prop : 'auto') + ';');
		}
		me._map_1.ggCalculateFloorplanSize=function(mapDetails) {
			var floorplanWidth = mapDetails['width'];
			var floorplanHeight = mapDetails['height'];
			var frameAR = me._map_1.clientWidth / me._map_1.clientHeight;
			var floorplanAR = floorplanWidth / floorplanHeight;
			if (frameAR > floorplanAR) {
				me._map_1.ggFloorplanHeight = me._map_1.clientHeight;
				me._map_1.ggFloorplanWidth = me._map_1.ggFloorplanHeight * floorplanAR;
			} else {
				me._map_1.ggFloorplanWidth = me._map_1.clientWidth;
				me._map_1.ggFloorplanHeight = me._map_1.ggFloorplanWidth / floorplanAR;
			}
		}
		me._map_1.ggInitMap=function() {
			var mapDetails = player.getMapDetails(me._map_1.ggMapId);
			if (Object.keys(mapDetails).length === 0) return;
			me._map_1.style.backgroundColor = mapDetails['bgcolor'];
			if (mapDetails.hasOwnProperty('transparent') && mapDetails['transparent']) {
				me._map_1.ggPermeableMap = true;
			} else {
				me._map_1.ggPermeableMap = false;
			}
			me._map_1.ggCalculateFloorplanSize(mapDetails);
			me._map_1.ggShowSimpleFloorplan(mapDetails);
			me._map_1.ggFloorplanNorth = mapDetails['floorplannorth'];
			me._map_1.ggMapNotLoaded = false;
		}
		me._map_1.ggClearMap=function() {
			me._map_1.ggClearMapMarkers();
			me._map_1.ggMapNotLoaded = true;
		}
		me._map_1.ggChangeMap=function(mapId) {
			var newMapType = player.getMapType(mapId)
			if (newMapType == 'web') {
				return;
			}
			me._map_1.ggMapId = mapId;
			if (!me._map_1.ggMapNotLoaded) {
				me._map_1.ggClearMap();
				me._map_1.ggInitMap();
				me._map_1.ggInitMapMarkers();
			}
		}
		me._map_1.ggPlaceMarkersOnSimpleFloorplan=function() {
			var markers=me._map_1.ggSimpleFloorplanMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					var coords = player.getNodeMapCoordsInPercent(id, me._map_1.ggMapId);
					var xPos = (me._map_1.ggFloorplanWidth * coords[0]) / 100.0;
					var yPos = (me._map_1.ggFloorplanHeight * coords[1]) / 100.0;
					marker.radarXPos = xPos;
					marker.radarYPos = yPos;
					xPos -= me._map_1.ggHMarkerAnchorOffset;
					yPos -= me._map_1.ggVMarkerAnchorOffset;
					marker.style['position'] = 'absolute';
					marker.style['left'] = xPos + 'px';
					marker.style['top'] = yPos + 'px';
					marker.style['z-index'] = me._map_1.style['z-index'] + 2;
				}
			}
		}
		me._map_1.ggInitMapMarkers=function() {
			me._map_1.ggClearMapMarkers();
			var ids=player.getNodeIds();
			me._map_1.ggFilteredIds = [];
			if (me._map_1.ggFilter != '') {
				var filter = me._map_1.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me._map_1.ggFilteredIds.push(nodeId);
					}
				}
				if (me._map_1.ggFilteredIds.length > 0) ids = me._map_1.ggFilteredIds;
			}
			for(var i=0; i < ids.length; i++) {
				var id = ids[i];
				var coords = player.getNodeMapCoordsInPercent(id, me._map_1.ggMapId);
				if (coords.length>=2) {
					me._map_1.ggHMarkerAnchorOffset = 12;
					me._map_1.ggVMarkerAnchorOffset = 20;
					var markerParent = new Object();
					markerParent.ggElementNodeId=function() { return id };
					var markerClass = new SkinElement_map_pin2_Class(me, markerParent);
					me._map_1.ggMarkerInstances.push(markerClass);
					var marker = markerClass._map_pin2;
					me._map_1.ggSimpleFloorplanMarkerArray[id] = marker;
					me._map_1__mapdiv.appendChild(marker);
				}
			}
			me._map_1.ggPlaceMarkersOnSimpleFloorplan();
			skin.updateSize(me._map_1);
		}
		me._map_1.ggClearMapMarkers=function() {
			for (id in me._map_1.ggSimpleFloorplanMarkerArray) {
				if (me._map_1.ggSimpleFloorplanMarkerArray.hasOwnProperty(id)) {
					me._map_1__mapdiv.removeChild(me._map_1.ggSimpleFloorplanMarkerArray[id]);
				}
			}
			me._map_1.ggMarkerInstances=[];
			me._map_1.ggSimpleFloorplanMarkerArray=[];
		}
		me._map_1.logicBlock_visible();
		me._map_2.ggMarkerInstances=[];
		me._map_2.ggLastNodeId=null;
		me._map_2.ggSimpleFloorplanMarkerArray=[];
		me._map_2.ggFloorplanWidth=0;
		me._map_2.ggFloorplanHeight=0;
		me._map_2__mapdiv=document.createElement('div');
		me._map_2__mapdiv.className='ggskin ggskin_map';
		me._map_2.appendChild(me._map_2__mapdiv);
		me._map_2__img=document.createElement('img');
		me._map_2__img.className='ggskin ggskin_map';
		me._map_2__mapdiv.appendChild(me._map_2__img);
		me._map_2.ggRadar={ lastFov : -1, lastPan : -1, xPos : -1, yPos : -1, radarElement : null }
		me._map_2.ggRadar.update=function() {
			var radar=me._map_2.ggRadar;
			var d2r = Math.PI/180 ;
			var fov = player.getFov();
			var pan = player.getPanNorth();
			pan -= me._map_2.ggFloorplanNorth;
			var filterpassed = true;
			var currentId = player.getCurrentNode();
			if (me._map_2.ggFilteredIds.length > 0 && me._map_2.ggFilteredIds.indexOf(currentId) == -1) filterpassed = false;
			if ((me._map_2.ggSimpleFloorplanMarkerArray.hasOwnProperty(currentId)) && filterpassed) {
				var activeMarker = me._map_2.ggSimpleFloorplanMarkerArray[currentId];
				if ((radar.radarElement) && (fov==radar.lastFov) && (pan==radar.lastPan) && (activeMarker.radarXPos==radar.xPos) && (activeMarker.radarYPos==radar.yPos)) return; 
				radar.lastPan=pan; radar.lastFov=fov;
				radar.xPos=activeMarker.radarXPos; radar.yPos=activeMarker.radarYPos;
				if (radar.radarElement) me._map_2__mapdiv.removeChild(radar.radarElement);
				radar.radarElement = document.createElementNS('http://www.w3.org/2000/svg','svg');
				radar.radarElement.setAttributeNS(null,'width',60);
				radar.radarElement.setAttributeNS(null,'height',60);
				radar.radarElement.setAttributeNS(null,'viewBox','0 0 60 60');
				var radarPath = document.createElementNS('http://www.w3.org/2000/svg','path');
				radarPath.setAttributeNS(null,'id','radarPath');
				pan = -90 - pan;
				var arcX1 = 30 * Math.cos((pan - fov / 2) * d2r);
				var arcY1 = 30 * Math.sin((pan - fov / 2) * d2r);
				var arcX2 = 30 * Math.cos((pan + fov / 2) * d2r);
				var arcY2 = 30 * Math.sin((pan + fov / 2) * d2r);
				arcX1 += 30;
				arcY1 += 30;
				arcX2 += 30;
				arcY2 += 30;
				var radarPathString = 'M30,30 L' + arcX1 + ',' + arcY1 + ' A 30 30 0 0 1 ' + arcX2 + ' ' + arcY2 +' Z';
				radarPath.setAttributeNS(null,'d', radarPathString);
				radarPath.setAttributeNS(null,'fill', '#fe9900');
				radarPath.setAttributeNS(null,'fill-opacity', 0.35);
				radarPath.setAttributeNS(null,'stroke', '#fe9900');
				radarPath.setAttributeNS(null,'stroke-opacity', 0.8);
				radarPath.setAttributeNS(null,'stroke-width', 1);
				radarPath.setAttributeNS(null,'stroke-linejoin', 'miter');
				radar.radarElement.appendChild(radarPath);
				me._map_2__mapdiv.appendChild(radar.radarElement);
				var radarXPos = activeMarker.radarXPos - 30;
				var radarYPos = activeMarker.radarYPos - 30;
				radar.radarElement.style['position'] = 'absolute';
				radar.radarElement.style['left'] = '' + radarXPos + 'px';
				radar.radarElement.style['top'] = '' + radarYPos + 'px';
				radar.radarElement.style['z-index'] = me._map_2.style['z-index'] + 1;
			} else {
				if (radar.radarElement) {
					me._map_2__mapdiv.removeChild(radar.radarElement);
					radar.radarElement = null;
				}
			}
		}
		me._map_2.ggShowSimpleFloorplan=function(mapDetails) {
			var mapWidth = me._map_2.clientWidth;
			var mapHeight = me._map_2.clientHeight;
			var tmpWidth = mapDetails['width'];
			var tmpHeight = mapDetails['height'];
			var levelLimit = 1000;
			var levels = 1;
			while (levelLimit < mapDetails['width'] || levelLimit < mapDetails['height']) {
				tmpWidth /= 2;
				tmpHeight /= 2;
				levelLimit *= 2;
				levels++;
			}
			var level = 1;
			while (levels > level && ((mapWidth * window.devicePixelRatio) >= 2*tmpWidth || (mapHeight * window.devicePixelRatio) >= 2*tmpHeight)) {
				tmpWidth *= 2;
				tmpHeight *= 2;
				levelLimit *= 2;
				level++;
			}
			var imageFilename = basePath + 'images/maptiles/' + me._map_2.ggMapId + '_' + level + '.' + mapDetails['tileformat'];
			me._map_2__img.setAttribute('src', imageFilename);
		me._map_2__mapdiv.setAttribute('style','position: absolute; left: 50%; margin-left: -' + me._map_2.ggFloorplanWidth / 2 + 'px; top: 50%; margin-top: -' + me._map_2.ggFloorplanHeight / 2 + 'px;width:' + me._map_2.ggFloorplanWidth + 'px;height:' + me._map_2.ggFloorplanHeight + 'px;overflow:hidden;;');
		var image_rendering_prop = (player.getBrowser() == 2 || player.getBrowser() == 3) ? 'crisp-edges' : 'pixelated';
		me._map_2__img.setAttribute('style','width:' + me._map_2.ggFloorplanWidth + 'px;height:' + me._map_2.ggFloorplanHeight + 'px;-webkit-user-drag:none;pointer-events:none;image-rendering:' + (mapDetails['crispedges'] ? image_rendering_prop : 'auto') + ';');
		}
		me._map_2.ggCalculateFloorplanSize=function(mapDetails) {
			var floorplanWidth = mapDetails['width'];
			var floorplanHeight = mapDetails['height'];
			var frameAR = me._map_2.clientWidth / me._map_2.clientHeight;
			var floorplanAR = floorplanWidth / floorplanHeight;
			if (frameAR > floorplanAR) {
				me._map_2.ggFloorplanHeight = me._map_2.clientHeight;
				me._map_2.ggFloorplanWidth = me._map_2.ggFloorplanHeight * floorplanAR;
			} else {
				me._map_2.ggFloorplanWidth = me._map_2.clientWidth;
				me._map_2.ggFloorplanHeight = me._map_2.ggFloorplanWidth / floorplanAR;
			}
		}
		me._map_2.ggInitMap=function() {
			var mapDetails = player.getMapDetails(me._map_2.ggMapId);
			if (Object.keys(mapDetails).length === 0) return;
			me._map_2.style.backgroundColor = mapDetails['bgcolor'];
			if (mapDetails.hasOwnProperty('transparent') && mapDetails['transparent']) {
				me._map_2.ggPermeableMap = true;
			} else {
				me._map_2.ggPermeableMap = false;
			}
			me._map_2.ggCalculateFloorplanSize(mapDetails);
			me._map_2.ggShowSimpleFloorplan(mapDetails);
			me._map_2.ggFloorplanNorth = mapDetails['floorplannorth'];
			me._map_2.ggMapNotLoaded = false;
		}
		me._map_2.ggClearMap=function() {
			me._map_2.ggClearMapMarkers();
			me._map_2.ggMapNotLoaded = true;
		}
		me._map_2.ggChangeMap=function(mapId) {
			var newMapType = player.getMapType(mapId)
			if (newMapType == 'web') {
				return;
			}
			me._map_2.ggMapId = mapId;
			if (!me._map_2.ggMapNotLoaded) {
				me._map_2.ggClearMap();
				me._map_2.ggInitMap();
				me._map_2.ggInitMapMarkers();
			}
		}
		me._map_2.ggPlaceMarkersOnSimpleFloorplan=function() {
			var markers=me._map_2.ggSimpleFloorplanMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					var coords = player.getNodeMapCoordsInPercent(id, me._map_2.ggMapId);
					var xPos = (me._map_2.ggFloorplanWidth * coords[0]) / 100.0;
					var yPos = (me._map_2.ggFloorplanHeight * coords[1]) / 100.0;
					marker.radarXPos = xPos;
					marker.radarYPos = yPos;
					xPos -= me._map_2.ggHMarkerAnchorOffset;
					yPos -= me._map_2.ggVMarkerAnchorOffset;
					marker.style['position'] = 'absolute';
					marker.style['left'] = xPos + 'px';
					marker.style['top'] = yPos + 'px';
					marker.style['z-index'] = me._map_2.style['z-index'] + 2;
				}
			}
		}
		me._map_2.ggInitMapMarkers=function() {
			me._map_2.ggClearMapMarkers();
			var ids=player.getNodeIds();
			me._map_2.ggFilteredIds = [];
			if (me._map_2.ggFilter != '') {
				var filter = me._map_2.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me._map_2.ggFilteredIds.push(nodeId);
					}
				}
				if (me._map_2.ggFilteredIds.length > 0) ids = me._map_2.ggFilteredIds;
			}
			for(var i=0; i < ids.length; i++) {
				var id = ids[i];
				var coords = player.getNodeMapCoordsInPercent(id, me._map_2.ggMapId);
				if (coords.length>=2) {
					me._map_2.ggHMarkerAnchorOffset = 12;
					me._map_2.ggVMarkerAnchorOffset = 20;
					var markerParent = new Object();
					markerParent.ggElementNodeId=function() { return id };
					var markerClass = new SkinElement_map_pin2_Class(me, markerParent);
					me._map_2.ggMarkerInstances.push(markerClass);
					var marker = markerClass._map_pin2;
					me._map_2.ggSimpleFloorplanMarkerArray[id] = marker;
					me._map_2__mapdiv.appendChild(marker);
				}
			}
			me._map_2.ggPlaceMarkersOnSimpleFloorplan();
			skin.updateSize(me._map_2);
		}
		me._map_2.ggClearMapMarkers=function() {
			for (id in me._map_2.ggSimpleFloorplanMarkerArray) {
				if (me._map_2.ggSimpleFloorplanMarkerArray.hasOwnProperty(id)) {
					me._map_2__mapdiv.removeChild(me._map_2.ggSimpleFloorplanMarkerArray[id]);
				}
			}
			me._map_2.ggMarkerInstances=[];
			me._map_2.ggSimpleFloorplanMarkerArray=[];
		}
		me._map_2.logicBlock_visible();
		me._image_2.logicBlock_position();
		me.__39.logicBlock_position();
		me.__39.logicBlock_visible();
		me.__40.logicBlock_text();
		me._image_6.logicBlock_angle();
		me._m.logicBlock_position();
		me._m.logicBlock_visible();
		if (
			(
				((player.getViewerSize().width > 640))
			)
		) {
			me.__16.style.transition='none';
			me.__16.style.visibility=(Number(me.__16.style.opacity)>0||!me.__16.style.opacity)?'inherit':'hidden';
			me.__16.ggVisible=true;
		}
		me.__18.logicBlock_scaling();
		me.__35.logicBlock_position();
		me.__34.logicBlock_position();
		me._timer_2.logicBlock_visible();
		me.__33.logicBlock_position();
		me.__32.logicBlock_position();
		me._image_9.logicBlock_position();
		me._image_10.logicBlock_position();
		if (
			(
				((player.getViewerSize().width <= 640))
			)
		||
			(
				((player.getIsMobile() == true))
			)
		) {
			me.__6.style.transition='none';
			me.__6.style.visibility=(Number(me.__6.style.opacity)>0||!me.__6.style.opacity)?'inherit':'hidden';
			me.__6.ggVisible=true;
		}
		me.__10.logicBlock_scaling();
		me._image_130.logicBlock_scaling();
		me.__210.logicBlock_scaling();
		me._image_13.logicBlock_scaling();
		me.__11.logicBlock_position();
		me.__7.logicBlock_position();
		me.__7.logicBlock_size();
		me.__7.logicBlock_scaling();
		me.__.logicBlock_position();
		me.__.logicBlock_scaling();
		me.__0.logicBlock_position();
		me.__1.logicBlock_position();
		me.__1.logicBlock_size();
		me.__74a.logicBlock_position();
		me.__74b.logicBlock_position();
		me.__74b.logicBlock_size();
		me.__2.logicBlock_size();
		me.__2.logicBlock_visible();
		me._d_type.logicBlock_backgroundcolor();
		me._c_type.logicBlock_backgroundcolor();
		me._b_type.logicBlock_backgroundcolor();
		me._a_type.logicBlock_backgroundcolor();
		me._image_5.logicBlock_angle();
		me._container_2.logicBlock_position();
		player.addListener('activehotspotchanged', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_activehotspotchanged();
				}
			}
			me.__43.logicBlock_visible();
			me._d_type.logicBlock_backgroundcolor();
			me._c_type.logicBlock_backgroundcolor();
			me._b_type.logicBlock_backgroundcolor();
			me._a_type.logicBlock_backgroundcolor();
		});
		player.addListener('changenode', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_changenode();
				}
			}
			me.__99.logicBlock_position();
			me.__100.logicBlock_visible();
			me.__103.logicBlock_visible();
			me.__103.ggUpdateConditionNodeChange();
			me.__101.logicBlock_visible();
			me.__101.ggUpdateConditionNodeChange();
			me.__38c.logicBlock_visible();
			me.__38c2.logicBlock_visible();
			me.__38c2.ggUpdateConditionNodeChange();
			me.__38c0.logicBlock_visible();
			me.__38c0.ggUpdateConditionNodeChange();
			me.__18a2.logicBlock_visible();
			me.__18a2.ggUpdateConditionNodeChange();
			me.__18a0.logicBlock_visible();
			me.__18a0.ggUpdateConditionNodeChange();
			me._rectangle_2.logicBlock_size();
			me.__96.logicBlock_visible();
			me.__213.logicBlock_visible();
			me.__97.logicBlock_visible();
			me._timer_1.logicBlock_visible();
			me.__92.logicBlock_visible();
			me.__91.logicBlock_visible();
			me.__87.logicBlock_visible();
			me.__86.logicBlock_visible();
			me._onoff.logicBlock_visible();
			me._on.logicBlock_visible();
			me._off.logicBlock_visible();
			me.__85.logicBlock_text();
			me.__84.logicBlock_visible();
			me.__80.logicBlock_visible();
			me.__79.logicBlock_visible();
			me.__75.logicBlock_visible();
			me.__74.logicBlock_visible();
			me.__69.logicBlock_visible();
			me.__68.logicBlock_visible();
			me.__64.logicBlock_visible();
			me.__63.logicBlock_visible();
			me._up.logicBlock_visible();
			me.__61.logicBlock_position();
			me.__61.logicBlock_visible();
			me.__61.logicBlock_alpha();
			me._rectangle_3.logicBlock_visible();
			me._dowm.logicBlock_visible();
			me.__55.logicBlock_visible();
			me._map_11.logicBlock_visible();
			for (var i=0; i < me._map_11.ggMarkerInstances.length; i++) {
				me._map_11.ggMarkerInstances[i].ggEvent_changenode();
			}
			var mapDetails = player.getMapDetails(me._map_11.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._map_11.ggCalculateFloorplanSize(mapDetails);
				me._map_11.ggShowSimpleFloorplan(mapDetails);
				me._map_11.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._map_11.ggRadar) me._map_11.ggRadar.update();
			if (me._map_11.ggLastNodeId) {
				var lastActiveMarker = me._map_11.ggSimpleFloorplanMarkerArray[me._map_11.ggLastNodeId];
				if (lastActiveMarker && lastActiveMarker.ggDeactivate) lastActiveMarker.ggDeactivate();
			}
			var id = player.getCurrentNode();
			var marker = me._map_11.ggSimpleFloorplanMarkerArray[id];
			if (marker) {
				if (marker.ggActivate) marker.ggActivate();
			}
			if (player.getMapType(me._map_11.ggMapId) == 'file') {
				var coords = player.getNodeMapCoords(id, me._map_11.ggMapId);
				if (coords.length < 2) {
					var mapId = player.getMapContainingNode(id);
					if (mapId != '') {
							me._map_11.ggChangeMap(mapId);
					}
				}
			}
			me._map_11.ggLastNodeId = id;
			me._map_11.ggRadar.update();
			me._map_21.logicBlock_visible();
			for (var i=0; i < me._map_21.ggMarkerInstances.length; i++) {
				me._map_21.ggMarkerInstances[i].ggEvent_changenode();
			}
			var mapDetails = player.getMapDetails(me._map_21.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._map_21.ggCalculateFloorplanSize(mapDetails);
				me._map_21.ggShowSimpleFloorplan(mapDetails);
				me._map_21.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._map_21.ggRadar) me._map_21.ggRadar.update();
			if (me._map_21.ggLastNodeId) {
				var lastActiveMarker = me._map_21.ggSimpleFloorplanMarkerArray[me._map_21.ggLastNodeId];
				if (lastActiveMarker && lastActiveMarker.ggDeactivate) lastActiveMarker.ggDeactivate();
			}
			var id = player.getCurrentNode();
			var marker = me._map_21.ggSimpleFloorplanMarkerArray[id];
			if (marker) {
				if (marker.ggActivate) marker.ggActivate();
			}
			if (player.getMapType(me._map_21.ggMapId) == 'file') {
				var coords = player.getNodeMapCoords(id, me._map_21.ggMapId);
				if (coords.length < 2) {
					var mapId = player.getMapContainingNode(id);
					if (mapId != '') {
							me._map_21.ggChangeMap(mapId);
					}
				}
			}
			me._map_21.ggLastNodeId = id;
			me._map_21.ggRadar.update();
			me.__49.logicBlock_visible();
			me.__50.logicBlock_text();
			me._image_60.logicBlock_angle();
			me.__48.logicBlock_visible();
			me.__44.logicBlock_position();
			me._map_10.logicBlock_visible();
			for (var i=0; i < me._map_10.ggMarkerInstances.length; i++) {
				me._map_10.ggMarkerInstances[i].ggEvent_changenode();
			}
			var mapDetails = player.getMapDetails(me._map_10.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._map_10.ggCalculateFloorplanSize(mapDetails);
				me._map_10.ggShowSimpleFloorplan(mapDetails);
				me._map_10.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._map_10.ggRadar) me._map_10.ggRadar.update();
			if (me._map_10.ggLastNodeId) {
				var lastActiveMarker = me._map_10.ggSimpleFloorplanMarkerArray[me._map_10.ggLastNodeId];
				if (lastActiveMarker && lastActiveMarker.ggDeactivate) lastActiveMarker.ggDeactivate();
			}
			var id = player.getCurrentNode();
			var marker = me._map_10.ggSimpleFloorplanMarkerArray[id];
			if (marker) {
				if (marker.ggActivate) marker.ggActivate();
			}
			if (player.getMapType(me._map_10.ggMapId) == 'file') {
				var coords = player.getNodeMapCoords(id, me._map_10.ggMapId);
				if (coords.length < 2) {
					var mapId = player.getMapContainingNode(id);
					if (mapId != '') {
							me._map_10.ggChangeMap(mapId);
					}
				}
			}
			me._map_10.ggLastNodeId = id;
			me._map_10.ggRadar.update();
			me._map_20.logicBlock_visible();
			for (var i=0; i < me._map_20.ggMarkerInstances.length; i++) {
				me._map_20.ggMarkerInstances[i].ggEvent_changenode();
			}
			var mapDetails = player.getMapDetails(me._map_20.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._map_20.ggCalculateFloorplanSize(mapDetails);
				me._map_20.ggShowSimpleFloorplan(mapDetails);
				me._map_20.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._map_20.ggRadar) me._map_20.ggRadar.update();
			if (me._map_20.ggLastNodeId) {
				var lastActiveMarker = me._map_20.ggSimpleFloorplanMarkerArray[me._map_20.ggLastNodeId];
				if (lastActiveMarker && lastActiveMarker.ggDeactivate) lastActiveMarker.ggDeactivate();
			}
			var id = player.getCurrentNode();
			var marker = me._map_20.ggSimpleFloorplanMarkerArray[id];
			if (marker) {
				if (marker.ggActivate) marker.ggActivate();
			}
			if (player.getMapType(me._map_20.ggMapId) == 'file') {
				var coords = player.getNodeMapCoords(id, me._map_20.ggMapId);
				if (coords.length < 2) {
					var mapId = player.getMapContainingNode(id);
					if (mapId != '') {
							me._map_20.ggChangeMap(mapId);
					}
				}
			}
			me._map_20.ggLastNodeId = id;
			me._map_20.ggRadar.update();
			me._m1.logicBlock_visible();
			me._m2.logicBlock_text();
			me._image_6m.logicBlock_angle();
			me._m0.logicBlock_visible();
			me._markertemplate__normalInst.ggEvent_changenode();
			me._markertemplate__activeInst.ggEvent_changenode();
			me.__43.logicBlock_visible();
			me.__211.logicBlock_position();
			me.__211.logicBlock_visible();
			me._image_3.logicBlock_position();
			if (me._image_3.ggLastIsActive!=me._image_3.ggIsActive()) {
				me._image_3.ggLastIsActive=me._image_3.ggIsActive();
				if (me._image_3.ggIsActive()) {
					if (me._image_3.ggActivate) me._image_3.ggActivate();
				} else {
					if (me._image_3.ggDeactivate) me._image_3.ggDeactivate();
				}
			}
			me._image_4.logicBlock_position();
			if (me._image_4.ggLastIsActive!=me._image_4.ggIsActive()) {
				me._image_4.ggLastIsActive=me._image_4.ggIsActive();
				if (me._image_4.ggIsActive()) {
					if (me._image_4.ggActivate) me._image_4.ggActivate();
				} else {
					if (me._image_4.ggDeactivate) me._image_4.ggDeactivate();
				}
			}
			me.__38.logicBlock_position();
			me._map_1.logicBlock_visible();
			for (var i=0; i < me._map_1.ggMarkerInstances.length; i++) {
				me._map_1.ggMarkerInstances[i].ggEvent_changenode();
			}
			var mapDetails = player.getMapDetails(me._map_1.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._map_1.ggCalculateFloorplanSize(mapDetails);
				me._map_1.ggShowSimpleFloorplan(mapDetails);
				me._map_1.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._map_1.ggRadar) me._map_1.ggRadar.update();
			if (me._map_1.ggLastNodeId) {
				var lastActiveMarker = me._map_1.ggSimpleFloorplanMarkerArray[me._map_1.ggLastNodeId];
				if (lastActiveMarker && lastActiveMarker.ggDeactivate) lastActiveMarker.ggDeactivate();
			}
			var id = player.getCurrentNode();
			var marker = me._map_1.ggSimpleFloorplanMarkerArray[id];
			if (marker) {
				if (marker.ggActivate) marker.ggActivate();
			}
			if (player.getMapType(me._map_1.ggMapId) == 'file') {
				var coords = player.getNodeMapCoords(id, me._map_1.ggMapId);
				if (coords.length < 2) {
					var mapId = player.getMapContainingNode(id);
					if (mapId != '') {
							me._map_1.ggChangeMap(mapId);
					}
				}
			}
			me._map_1.ggLastNodeId = id;
			me._map_1.ggRadar.update();
			me._map_2.logicBlock_visible();
			for (var i=0; i < me._map_2.ggMarkerInstances.length; i++) {
				me._map_2.ggMarkerInstances[i].ggEvent_changenode();
			}
			var mapDetails = player.getMapDetails(me._map_2.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._map_2.ggCalculateFloorplanSize(mapDetails);
				me._map_2.ggShowSimpleFloorplan(mapDetails);
				me._map_2.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._map_2.ggRadar) me._map_2.ggRadar.update();
			if (me._map_2.ggLastNodeId) {
				var lastActiveMarker = me._map_2.ggSimpleFloorplanMarkerArray[me._map_2.ggLastNodeId];
				if (lastActiveMarker && lastActiveMarker.ggDeactivate) lastActiveMarker.ggDeactivate();
			}
			var id = player.getCurrentNode();
			var marker = me._map_2.ggSimpleFloorplanMarkerArray[id];
			if (marker) {
				if (marker.ggActivate) marker.ggActivate();
			}
			if (player.getMapType(me._map_2.ggMapId) == 'file') {
				var coords = player.getNodeMapCoords(id, me._map_2.ggMapId);
				if (coords.length < 2) {
					var mapId = player.getMapContainingNode(id);
					if (mapId != '') {
							me._map_2.ggChangeMap(mapId);
					}
				}
			}
			me._map_2.ggLastNodeId = id;
			me._map_2.ggRadar.update();
			me.__39.logicBlock_visible();
			me.__40.logicBlock_text();
			me._image_6.logicBlock_angle();
			me._m.logicBlock_visible();
			me.__35.logicBlock_position();
			me.__34.logicBlock_position();
			if (me.__34.ggLastIsActive!=me.__34.ggIsActive()) {
				me.__34.ggLastIsActive=me.__34.ggIsActive();
				if (me.__34.ggIsActive()) {
					if (me.__34.ggActivate) me.__34.ggActivate();
				} else {
					if (me.__34.ggDeactivate) me.__34.ggDeactivate();
				}
			}
			me._timer_2.logicBlock_visible();
			me.__33.logicBlock_position();
			me.__32.logicBlock_position();
			if (me.__32.ggLastIsActive!=me.__32.ggIsActive()) {
				me.__32.ggLastIsActive=me.__32.ggIsActive();
				if (me.__32.ggIsActive()) {
					if (me.__32.ggActivate) me.__32.ggActivate();
				} else {
					if (me.__32.ggDeactivate) me.__32.ggDeactivate();
				}
			}
			me._image_9.logicBlock_position();
			me._image_10.logicBlock_position();
			me._image_130.logicBlock_scaling();
			me.__210.logicBlock_scaling();
			me._image_13.logicBlock_scaling();
			me.__2.logicBlock_size();
			me.__2.logicBlock_visible();
			me._d_type.logicBlock_backgroundcolor();
			me._c_type.logicBlock_backgroundcolor();
			me._b_type.logicBlock_backgroundcolor();
			me._a_type.logicBlock_backgroundcolor();
			me._image_5.logicBlock_angle();
		});
		player.addListener('configloaded', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_configloaded();
				}
			}
			me.__99.logicBlock_position();
			me._scrollarea_1.ggUpdatePosition();
			me._rectangle_2.logicBlock_size();
			me.__96.logicBlock_visible();
			me.__213.logicBlock_visible();
			me.__97.logicBlock_visible();
			me.__92.logicBlock_visible();
			me.__87.logicBlock_visible();
			me._onoff.logicBlock_visible();
			me._on.logicBlock_visible();
			me._off.logicBlock_visible();
			me.__85.logicBlock_text();
			me.__80.logicBlock_visible();
			me.__75.logicBlock_visible();
			me.__69.logicBlock_visible();
			me.__64.logicBlock_visible();
			me._up.logicBlock_visible();
			me.__61.logicBlock_position();
			me.__61.logicBlock_visible();
			me.__61.logicBlock_alpha();
			me._rectangle_3.logicBlock_visible();
			me._dowm.logicBlock_visible();
			me.__47.logicBlock_visible();
			for (var i=0; i < me._map_11.ggMarkerInstances.length; i++) {
				me._map_11.ggMarkerInstances[i].ggEvent_configloaded();
			}
			if (me._map_11.ggVisible) {
				me._map_11.ggClearMap();
				me._map_11.ggInitMap(false);
				me._map_11.ggInitMapMarkers(true);
			}
			for (var i=0; i < me._map_21.ggMarkerInstances.length; i++) {
				me._map_21.ggMarkerInstances[i].ggEvent_configloaded();
			}
			if (me._map_21.ggVisible) {
				me._map_21.ggClearMap();
				me._map_21.ggInitMap(false);
				me._map_21.ggInitMapMarkers(true);
			}
			me.__49.logicBlock_visible();
			me.__50.logicBlock_text();
			me._image_60.logicBlock_angle();
			me.__48.logicBlock_visible();
			me.__44.logicBlock_position();
			me.__44.logicBlock_visible();
			for (var i=0; i < me._map_10.ggMarkerInstances.length; i++) {
				me._map_10.ggMarkerInstances[i].ggEvent_configloaded();
			}
			if (me._map_10.ggVisible) {
				me._map_10.ggClearMap();
				me._map_10.ggInitMap(false);
				me._map_10.ggInitMapMarkers(true);
			}
			for (var i=0; i < me._map_20.ggMarkerInstances.length; i++) {
				me._map_20.ggMarkerInstances[i].ggEvent_configloaded();
			}
			if (me._map_20.ggVisible) {
				me._map_20.ggClearMap();
				me._map_20.ggInitMap(false);
				me._map_20.ggInitMapMarkers(true);
			}
			me._m1.logicBlock_visible();
			me._m2.logicBlock_text();
			me._image_6m.logicBlock_angle();
			me._m0.logicBlock_visible();
			player.setMediaVisibility("\uc5d0\uc5b4\ucee8","0",0);
			me._markertemplate__normalInst.ggEvent_configloaded();
			me._markertemplate__activeInst.ggEvent_configloaded();
			me.__43.logicBlock_visible();
			me.__211.logicBlock_position();
			me._image_3.logicBlock_position();
			me._image_4.logicBlock_position();
			me.__38.logicBlock_position();
			if (me._map_1.ggVisible) {
				me._map_1.ggClearMap();
				me._map_1.ggInitMap(false);
				me._map_1.ggInitMapMarkers(true);
			}
			if (me._map_2.ggVisible) {
				me._map_2.ggClearMap();
				me._map_2.ggInitMap(false);
				me._map_2.ggInitMapMarkers(true);
			}
			me.__39.logicBlock_visible();
			me.__40.logicBlock_text();
			me._image_6.logicBlock_angle();
			me._m.logicBlock_visible();
			me.__35.logicBlock_position();
			me.__34.logicBlock_position();
			me.__33.logicBlock_position();
			me.__32.logicBlock_position();
			me._image_9.logicBlock_position();
			me._image_10.logicBlock_position();
			me._image_130.logicBlock_scaling();
			me.__210.logicBlock_scaling();
			me._image_13.logicBlock_scaling();
			me.__74a.logicBlock_position();
			me.__2.logicBlock_size();
			me.__2.logicBlock_visible();
			me._d_type.logicBlock_backgroundcolor();
			me._c_type.logicBlock_backgroundcolor();
			me._b_type.logicBlock_backgroundcolor();
			me._a_type.logicBlock_backgroundcolor();
			me._image_5.logicBlock_angle();
		});
		player.addListener('fullscreenenter', function(event) {
			me.__67.logicBlock_visible();
		});
		player.addListener('fullscreenexit', function(event) {
			me.__67.logicBlock_visible();
		});
		player.addListener('hastouch', function(event) {
			me.__43.logicBlock_visible();
		});
		player.addListener('hotspotsupdated', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_hotspotsupdated();
				}
			}
		});
		player.addListener('positionchanged', function(event) {
			me._map_11.ggRadar.update();
			me._map_21.ggRadar.update();
			me._map_10.ggRadar.update();
			me._map_20.ggRadar.update();
			me._map_1.ggRadar.update();
			me._map_2.ggRadar.update();
		});
		player.addListener('sizechanged', function(event) {
			for(var i = 0; i < me.__18a0.ggInstances.length; i++) {
				me.__18a0.ggInstances[i].ggEvent_sizechanged(event);
			}
			for(var i = 0; i < me.__18a2.ggInstances.length; i++) {
				me.__18a2.ggInstances[i].ggEvent_sizechanged(event);
			}
			for(var i = 0; i < me.__38c0.ggInstances.length; i++) {
				me.__38c0.ggInstances[i].ggEvent_sizechanged(event);
			}
			for(var i = 0; i < me.__38c2.ggInstances.length; i++) {
				me.__38c2.ggInstances[i].ggEvent_sizechanged(event);
			}
			for(var i = 0; i < me.__101.ggInstances.length; i++) {
				me.__101.ggInstances[i].ggEvent_sizechanged(event);
			}
			for(var i = 0; i < me.__103.ggInstances.length; i++) {
				me.__103.ggInstances[i].ggEvent_sizechanged(event);
			}
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_sizechanged();
				}
			}
			me.__105.logicBlock_position();
			me._scrollarea_1.logicBlock_position();
			me._scrollarea_1.logicBlock_size();
			me.__103.logicBlock_size();
			me.__101.logicBlock_size();
			me.__38c2.logicBlock_size();
			me.__38c0.logicBlock_size();
			me.__18a2.logicBlock_size();
			me.__18a0.logicBlock_size();
			me.__59.logicBlock_position();
			me.__59.logicBlock_scaling();
			me.__47.logicBlock_position();
			me.__47.logicBlock_size();
			me.__47.logicBlock_scaling();
			me.__47.logicBlock_visible();
			me._rectangle_41.logicBlock_size();
			me.__53.logicBlock_scaling();
			me.__44.logicBlock_visible();
			me._rectangle_40.logicBlock_size();
			me.__46.logicBlock_scaling();
			me.__38.logicBlock_size();
			me.__38.logicBlock_scaling();
			me.__41.logicBlock_size();
			me.__42.logicBlock_size();
			me._image_2.logicBlock_position();
			me.__39.logicBlock_position();
			me._m.logicBlock_position();
			me.__18.logicBlock_scaling();
			me.__10.logicBlock_scaling();
			me.__11.logicBlock_position();
			me.__7.logicBlock_position();
			me.__7.logicBlock_size();
			me.__7.logicBlock_scaling();
			me.__.logicBlock_position();
			me.__.logicBlock_scaling();
			me.__0.logicBlock_position();
			me.__1.logicBlock_position();
			me.__1.logicBlock_size();
			me.__74a.logicBlock_position();
			me.__74b.logicBlock_position();
			me.__74b.logicBlock_size();
			me._container_2.logicBlock_position();
		});
		player.addListener('varchanged_vis_direction', function(event) {
			me.__35.logicBlock_position();
			me.__34.logicBlock_position();
			me.__33.logicBlock_position();
			me.__32.logicBlock_position();
			me._image_9.logicBlock_position();
			me._image_10.logicBlock_position();
			me._image_130.logicBlock_scaling();
			me.__210.logicBlock_scaling();
			me._image_13.logicBlock_scaling();
		});
		player.addListener('varchanged_vis_dropdown', function(event) {
			me.__2.logicBlock_size();
			me.__2.logicBlock_visible();
			me._image_5.logicBlock_angle();
		});
		player.addListener('varchanged_vis_floor', function(event) {
			me.__49.logicBlock_visible();
			me._image_60.logicBlock_angle();
			me.__48.logicBlock_visible();
			me._m1.logicBlock_visible();
			me._image_6m.logicBlock_angle();
			me._m0.logicBlock_visible();
			me.__39.logicBlock_visible();
			me._image_6.logicBlock_angle();
			me._m.logicBlock_visible();
		});
		player.addListener('varchanged_vis_foot', function(event) {
			me.__211.logicBlock_position();
			me._image_3.logicBlock_position();
			me._image_4.logicBlock_position();
		});
		player.addListener('varchanged_vis_long', function(event) {
			me.__61.logicBlock_visible();
			me.__61.logicBlock_alpha();
		});
		player.addListener('varchanged_vis_mobilemap', function(event) {
			me.__44.logicBlock_position();
			me.__38.logicBlock_position();
		});
		player.addListener('varchanged_vis_onefloor', function(event) {
			me.__50.logicBlock_text();
			me._m2.logicBlock_text();
			me.__40.logicBlock_text();
		});
		player.addListener('varchanged_vis_roomchoice', function(event) {
			me.__99.logicBlock_position();
			me.__213.logicBlock_visible();
			me.__97.logicBlock_visible();
		});
		player.addListener('varchanged_vis_secondfloor', function(event) {
			me.__50.logicBlock_text();
			me._m2.logicBlock_text();
			me.__40.logicBlock_text();
		});
		player.addListener('varchanged_vis_short', function(event) {
			me._rectangle_2.logicBlock_size();
			me.__96.logicBlock_visible();
			me.__92.logicBlock_visible();
			me.__87.logicBlock_visible();
			me._onoff.logicBlock_visible();
			me.__80.logicBlock_visible();
			me.__75.logicBlock_visible();
			me.__69.logicBlock_visible();
			me.__64.logicBlock_visible();
			me._up.logicBlock_visible();
			me.__61.logicBlock_position();
			me.__61.logicBlock_visible();
			me.__61.logicBlock_alpha();
			me._rectangle_3.logicBlock_visible();
			me._dowm.logicBlock_visible();
		});
		player.addListener('varchanged_vis_skin_show', function(event) {
			me.__96.logicBlock_visible();
			me.__92.logicBlock_visible();
			me.__87.logicBlock_visible();
			me._onoff.logicBlock_visible();
			me.__80.logicBlock_visible();
			me.__75.logicBlock_visible();
			me.__69.logicBlock_visible();
			me.__64.logicBlock_visible();
		});
		player.addListener('varchanged_vis_sound', function(event) {
			me._on.logicBlock_visible();
			me._off.logicBlock_visible();
			me.__85.logicBlock_text();
		});
		player.addListener('viewerinit', function(event) {
			me.__103.ggUpdate();
			me.__101.ggUpdate();
			me.__38c2.ggUpdate();
			me.__38c0.ggUpdate();
			me.__18a2.ggUpdate();
			me.__18a0.ggUpdate();
		});
	};
	function SkinCloner__18a0_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._nodeimage_118a=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._nodeimage_118a;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._nodeimage_118a__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/nodeimage_1_" + nodeId + ".png");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 100px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="NodeImage 1-18A";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 115px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 115px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._nodeimage_118a.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._nodeimage_118a.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 670))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._nodeimage_118a.ggCurrentLogicStateSize != newLogicStateSize) {
				me._nodeimage_118a.ggCurrentLogicStateSize = newLogicStateSize;
				me._nodeimage_118a.style.transition='width 0s, height 0s';
				if (me._nodeimage_118a.ggCurrentLogicStateSize == 0) {
					me._nodeimage_118a.style.width='95px';
					me._nodeimage_118a.style.height='95px';
					skin.updateSize(me._nodeimage_118a);
				}
				else {
					me._nodeimage_118a.style.width='115px';
					me._nodeimage_118a.style.height='115px';
					skin.updateSize(me._nodeimage_118a);
				}
			}
		}
		me._nodeimage_118a.logicBlock_size();
		me._nodeimage_118a.onclick=function (e) {
			if (me._nodeimage_118a.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
			player.setVariableValue('vis_roomchoice', false);
		}
		me._nodeimage_118a.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_118a=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._rectangle_118a;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="Rectangle 1-18A";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: 0;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -40px;';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_118a.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_118a.ggUpdatePosition=function (useTransition) {
		}
		el=me.__18a1=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__18a1;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me.__18a1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uac00\uad6c\uc5c6\uc74c \ubc29\uc774\ub984-18A";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 1px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 500;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__18a1.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__18a1.ggUpdateText();
		player.addListener('changenode', function() {
			me.__18a1.ggUpdateText();
		});
		el.appendChild(els);
		me.__18a1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__18a1.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_118a.appendChild(me.__18a1);
		me._nodeimage_118a.appendChild(me._rectangle_118a);
		me.__div.appendChild(me._nodeimage_118a);
		me._nodeimage_118a.logicBlock_size();
			me.ggEvent_sizechanged=function(event) {
				me._nodeimage_118a.logicBlock_size();
			};
	};
	function SkinCloner__18a2_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._nodeimage_118a0=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._nodeimage_118a0;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._nodeimage_118a0__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/nodeimage_1_" + nodeId + ".png");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 100px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="NodeImage 1-18A";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='height : 115px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 115px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._nodeimage_118a0.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._nodeimage_118a0.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 670))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._nodeimage_118a0.ggCurrentLogicStateSize != newLogicStateSize) {
				me._nodeimage_118a0.ggCurrentLogicStateSize = newLogicStateSize;
				me._nodeimage_118a0.style.transition='width 0s, height 0s';
				if (me._nodeimage_118a0.ggCurrentLogicStateSize == 0) {
					me._nodeimage_118a0.style.width='95px';
					me._nodeimage_118a0.style.height='95px';
					skin.updateSize(me._nodeimage_118a0);
				}
				else {
					me._nodeimage_118a0.style.width='115px';
					me._nodeimage_118a0.style.height='115px';
					skin.updateSize(me._nodeimage_118a0);
				}
			}
		}
		me._nodeimage_118a0.logicBlock_size();
		me._nodeimage_118a0.onclick=function (e) {
			if (me._nodeimage_118a0.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
			player.setVariableValue('vis_roomchoice', false);
		}
		me._nodeimage_118a0.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_118a0=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._rectangle_118a0;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="Rectangle 1-18A";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -40px;';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_118a0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_118a0.ggUpdatePosition=function (useTransition) {
		}
		el=me.__18a3=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__18a3;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me.__18a3__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uac00\uad6c\uc788\uc74c \ubc29\uc774\ub984-18A";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 1px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 500;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__18a3.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__18a3.ggUpdateText();
		player.addListener('changenode', function() {
			me.__18a3.ggUpdateText();
		});
		el.appendChild(els);
		me.__18a3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__18a3.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_118a0.appendChild(me.__18a3);
		me._nodeimage_118a0.appendChild(me._rectangle_118a0);
		me.__div.appendChild(me._nodeimage_118a0);
		me._nodeimage_118a0.logicBlock_size();
			me.ggEvent_sizechanged=function(event) {
				me._nodeimage_118a0.logicBlock_size();
			};
	};
	function SkinCloner__38c0_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._nodeimage_138c=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._nodeimage_138c;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._nodeimage_138c__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/nodeimage_1_" + nodeId + ".png");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 100px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="NodeImage 1-38C";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 115px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 115px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._nodeimage_138c.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._nodeimage_138c.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 670))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._nodeimage_138c.ggCurrentLogicStateSize != newLogicStateSize) {
				me._nodeimage_138c.ggCurrentLogicStateSize = newLogicStateSize;
				me._nodeimage_138c.style.transition='width 0s, height 0s';
				if (me._nodeimage_138c.ggCurrentLogicStateSize == 0) {
					me._nodeimage_138c.style.width='95px';
					me._nodeimage_138c.style.height='95px';
					skin.updateSize(me._nodeimage_138c);
				}
				else {
					me._nodeimage_138c.style.width='115px';
					me._nodeimage_138c.style.height='115px';
					skin.updateSize(me._nodeimage_138c);
				}
			}
		}
		me._nodeimage_138c.logicBlock_size();
		me._nodeimage_138c.onclick=function (e) {
			if (me._nodeimage_138c.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
			player.setVariableValue('vis_roomchoice', false);
		}
		me._nodeimage_138c.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_138c=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._rectangle_138c;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="Rectangle 1-38C";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: 0;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -40px;';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_138c.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_138c.ggUpdatePosition=function (useTransition) {
		}
		el=me.__38c1=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__38c1;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me.__38c1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uac00\uad6c\uc5c6\uc74c \ubc29\uc774\ub984-38C";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 1px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 500;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__38c1.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__38c1.ggUpdateText();
		player.addListener('changenode', function() {
			me.__38c1.ggUpdateText();
		});
		el.appendChild(els);
		me.__38c1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__38c1.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_138c.appendChild(me.__38c1);
		me._nodeimage_138c.appendChild(me._rectangle_138c);
		me.__div.appendChild(me._nodeimage_138c);
		me._nodeimage_138c.logicBlock_size();
			me.ggEvent_sizechanged=function(event) {
				me._nodeimage_138c.logicBlock_size();
			};
	};
	function SkinCloner__38c2_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._nodeimage_138c0=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._nodeimage_138c0;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._nodeimage_138c0__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/nodeimage_1_" + nodeId + ".png");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 100px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="NodeImage 1-38C";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='height : 115px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 115px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._nodeimage_138c0.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._nodeimage_138c0.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 670))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._nodeimage_138c0.ggCurrentLogicStateSize != newLogicStateSize) {
				me._nodeimage_138c0.ggCurrentLogicStateSize = newLogicStateSize;
				me._nodeimage_138c0.style.transition='width 0s, height 0s';
				if (me._nodeimage_138c0.ggCurrentLogicStateSize == 0) {
					me._nodeimage_138c0.style.width='95px';
					me._nodeimage_138c0.style.height='95px';
					skin.updateSize(me._nodeimage_138c0);
				}
				else {
					me._nodeimage_138c0.style.width='115px';
					me._nodeimage_138c0.style.height='115px';
					skin.updateSize(me._nodeimage_138c0);
				}
			}
		}
		me._nodeimage_138c0.logicBlock_size();
		me._nodeimage_138c0.onclick=function (e) {
			if (me._nodeimage_138c0.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
			player.setVariableValue('vis_roomchoice', false);
		}
		me._nodeimage_138c0.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_138c0=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._rectangle_138c0;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="Rectangle 1-38C";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -40px;';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_138c0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_138c0.ggUpdatePosition=function (useTransition) {
		}
		el=me.__38c3=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__38c3;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me.__38c3__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uac00\uad6c\uc788\uc74c \ubc29\uc774\ub984-38C";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 1px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 500;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__38c3.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__38c3.ggUpdateText();
		player.addListener('changenode', function() {
			me.__38c3.ggUpdateText();
		});
		el.appendChild(els);
		me.__38c3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__38c3.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_138c0.appendChild(me.__38c3);
		me._nodeimage_138c0.appendChild(me._rectangle_138c0);
		me.__div.appendChild(me._nodeimage_138c0);
		me._nodeimage_138c0.logicBlock_size();
			me.ggEvent_sizechanged=function(event) {
				me._nodeimage_138c0.logicBlock_size();
			};
	};
	function SkinCloner__101_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._nodeimage_1=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._nodeimage_1;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._nodeimage_1__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/nodeimage_1_" + nodeId + ".png");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 100px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="NodeImage 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 115px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 115px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._nodeimage_1.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._nodeimage_1.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 670))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._nodeimage_1.ggCurrentLogicStateSize != newLogicStateSize) {
				me._nodeimage_1.ggCurrentLogicStateSize = newLogicStateSize;
				me._nodeimage_1.style.transition='width 0s, height 0s';
				if (me._nodeimage_1.ggCurrentLogicStateSize == 0) {
					me._nodeimage_1.style.width='95px';
					me._nodeimage_1.style.height='95px';
					skin.updateSize(me._nodeimage_1);
				}
				else {
					me._nodeimage_1.style.width='115px';
					me._nodeimage_1.style.height='115px';
					skin.updateSize(me._nodeimage_1);
				}
			}
		}
		me._nodeimage_1.logicBlock_size();
		me._nodeimage_1.onclick=function (e) {
			if (me._nodeimage_1.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
			player.setVariableValue('vis_roomchoice', false);
		}
		me._nodeimage_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_1=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._rectangle_1;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="Rectangle 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: 0;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -40px;';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_1.ggUpdatePosition=function (useTransition) {
		}
		el=me.__102=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__102;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me.__102__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uac00\uad6c\uc5c6\uc74c \ubc29\uc774\ub984";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 1px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 500;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__102.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__102.ggUpdateText();
		player.addListener('changenode', function() {
			me.__102.ggUpdateText();
		});
		el.appendChild(els);
		me.__102.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__102.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_1.appendChild(me.__102);
		me._nodeimage_1.appendChild(me._rectangle_1);
		me.__div.appendChild(me._nodeimage_1);
		me._nodeimage_1.logicBlock_size();
			me.ggEvent_sizechanged=function(event) {
				me._nodeimage_1.logicBlock_size();
			};
	};
	function SkinCloner__103_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._nodeimage_10=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._nodeimage_10;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._nodeimage_10__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/nodeimage_1_" + nodeId + ".png");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 100px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="NodeImage 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='height : 115px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 115px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._nodeimage_10.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._nodeimage_10.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 670))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._nodeimage_10.ggCurrentLogicStateSize != newLogicStateSize) {
				me._nodeimage_10.ggCurrentLogicStateSize = newLogicStateSize;
				me._nodeimage_10.style.transition='width 0s, height 0s';
				if (me._nodeimage_10.ggCurrentLogicStateSize == 0) {
					me._nodeimage_10.style.width='95px';
					me._nodeimage_10.style.height='95px';
					skin.updateSize(me._nodeimage_10);
				}
				else {
					me._nodeimage_10.style.width='115px';
					me._nodeimage_10.style.height='115px';
					skin.updateSize(me._nodeimage_10);
				}
			}
		}
		me._nodeimage_10.logicBlock_size();
		me._nodeimage_10.onclick=function (e) {
			if (me._nodeimage_10.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
			player.setVariableValue('vis_roomchoice', false);
		}
		me._nodeimage_10.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_10=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._rectangle_10;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="Rectangle 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -40px;';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_10.ggUpdatePosition=function (useTransition) {
		}
		el=me.__104=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__104;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me.__104__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uac00\uad6c\uc788\uc74c \ubc29\uc774\ub984";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 1px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 500;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__104.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__104.ggUpdateText();
		player.addListener('changenode', function() {
			me.__104.ggUpdateText();
		});
		el.appendChild(els);
		me.__104.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__104.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_10.appendChild(me.__104);
		me._nodeimage_10.appendChild(me._rectangle_10);
		me.__div.appendChild(me._nodeimage_10);
		me._nodeimage_10.logicBlock_size();
			me.ggEvent_sizechanged=function(event) {
				me._nodeimage_10.logicBlock_size();
			};
	};
	function SkinHotspotClass_ht_node(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node=document.createElement('div');
		el.ggId="ht_node";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),player._(me.hotspot.target));
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_node']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.ggUpdatePosition=function (useTransition) {
		}
		el=me._lottie_2=document.createElement('div');
		el.ggLottie = lottie.loadAnimation({
			container: el,
			path: basePath + 'images/lottie_2.json',
			autoplay: true,
			loop: 99,
			rendererSettings: {
				preserveAspectRatio: 'xMinYMin meet'
			}
		});
		el.ggLottie.setSpeed(1.5);
		el.ggId="Lottie 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_lottie ";
		el.ggType='lottie';
		hs ='';
		hs+='background : rgba(0,0,0,0);';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : -25px;';
		hs+='opacity : 0.79999;';
		hs+='position : absolute;';
		hs+='top : -40px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._lottie_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._lottie_2.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._lottie_2.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._lottie_2.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._lottie_2.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me._lottie_2.ggCurrentLogicStatePosition == 0) {
					me._lottie_2.style.left='-20px';
					me._lottie_2.style.top='0px';
				}
				else {
					me._lottie_2.style.left='-25px';
					me._lottie_2.style.top='-40px';
				}
			}
		}
		me._lottie_2.logicBlock_position();
		me._lottie_2.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 420))
			)
			{
				newLogicStateSize = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateSize = 1;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._lottie_2.ggCurrentLogicStateSize != newLogicStateSize) {
				me._lottie_2.ggCurrentLogicStateSize = newLogicStateSize;
				me._lottie_2.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me._lottie_2.ggCurrentLogicStateSize == 0) {
					me._lottie_2.style.width='40px';
					me._lottie_2.style.height='40px';
					skin.updateSize(me._lottie_2);
				}
				else if (me._lottie_2.ggCurrentLogicStateSize == 1) {
					me._lottie_2.style.width='40px';
					me._lottie_2.style.height='40px';
					skin.updateSize(me._lottie_2);
				}
				else {
					me._lottie_2.style.width='40px';
					me._lottie_2.style.height='40px';
					skin.updateSize(me._lottie_2);
				}
			}
		}
		me._lottie_2.logicBlock_size();
		me._lottie_2.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),"");
		}
		me._lottie_2.ggUpdatePosition=function (useTransition) {
		}
		el=me._container_6=document.createElement('div');
		el.ggId="Container 6";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((30px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._container_6.ggUpdatePosition=function (useTransition) {
		}
		el=me.__5=document.createElement('div');
		els=me.__5__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubaa8\ubc14\uc77c \ub178\ub4dc\uba85";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0.54902);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 30px;';
		hs+='bottom : -28px;';
		hs+='color : rgba(34,34,34,1);';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : calc(50% - ((65px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 65px;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px; line-height:12px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 7px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__5.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__5.ggUpdateText();
		player.addListener('changenode', function() {
			me.__5.ggUpdateText();
		});
		el.appendChild(els);
		me.__5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__5.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((Math.min(Math.min(me.hotspot.pxp, 100 - me.hotspot.pxp), Math.min(me.hotspot.pyp, 100 - me.hotspot.pyp)) == 0))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__5.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__5.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__5.style.transition='left 0s, bottom 0s, width 0s, height 0s, background-color 0s';
				if (me.__5.ggCurrentLogicStatePosition == 0) {
					me.__5.style.left = 'calc(50% - (65px / 2))';
					me.__5.style.bottom='0px';
				}
				else {
					me.__5.style.left='calc(50% - ((65px + 0px) / 2) + 0px)';
					me.__5.style.bottom='-28px';
				}
			}
		}
		me.__5.logicBlock_position();
		me.__5.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player._(me.ggUserdata.information) == "\ub113\uac8c"))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__5.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__5.ggCurrentLogicStateSize = newLogicStateSize;
				me.__5.style.transition='left 0s, bottom 0s, width 0s, height 0s, background-color 0s';
				if (me.__5.ggCurrentLogicStateSize == 0) {
					me.__5.style.width='100px';
					me.__5.style.height='25px';
					me.__5.style.left = 'calc(50% - (100px / 2))';
					skin.updateSize(me.__5);
				}
				else {
					me.__5.style.width='65px';
					me.__5.style.height='25px';
					me.__5.style.left = 'calc(50% - (65px / 2))';
					skin.updateSize(me.__5);
				}
			}
		}
		me.__5.logicBlock_size();
		me.__5.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__5.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__5.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__5.style.transition='left 0s, bottom 0s, width 0s, height 0s, background-color 0s';
				if (me.__5.ggCurrentLogicStateVisible == 0) {
					me.__5.style.visibility=(Number(me.__5.style.opacity)>0||!me.__5.style.opacity)?'inherit':'hidden';
					me.__5.ggVisible=true;
				}
				else if (me.__5.ggCurrentLogicStateVisible == 1) {
					me.__5.style.visibility=(Number(me.__5.style.opacity)>0||!me.__5.style.opacity)?'inherit':'hidden';
					me.__5.ggVisible=true;
				}
				else {
					me.__5.style.visibility="hidden";
					me.__5.ggVisible=false;
				}
			}
		}
		me.__5.logicBlock_visible();
		me.__5.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player._(me.hotspot.title) == "\uc5c6\uc74c"))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__5.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__5.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__5.style.transition='left 0s, bottom 0s, width 0s, height 0s, background-color 0s';
				if (me.__5.ggCurrentLogicStateBackgroundColor == 0) {
					me.__5.style.backgroundColor="rgba(0,0,0,0)";
				}
				else {
					me.__5.style.backgroundColor="rgba(255,255,255,0.54902)";
				}
			}
		}
		me.__5.logicBlock_backgroundcolor();
		me.__5.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player._(me.hotspot.title) == "\uc5c6\uc74c"))
			)
			{
				newLogicStateText = 0;
			}
			else {
				newLogicStateText = -1;
			}
			if (me.__5.ggCurrentLogicStateText != newLogicStateText) {
				me.__5.ggCurrentLogicStateText = newLogicStateText;
				me.__5.style.transition='left 0s, bottom 0s, width 0s, height 0s, background-color 0s';
				if (me.__5.ggCurrentLogicStateText == 0) {
					if (me.__5.ggUpdateText) {
					me.__5.ggUpdateText=function() {
						var params = [];
						var hs = player._("", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me.__5.ggUpdateText();
					} else {
						if (me.__5.ggUpdatePosition) me.__5.ggUpdatePosition();
					}
				}
				else {
					if (me.__5.ggUpdateText) {
					me.__5.ggUpdateText=function() {
						var params = [];
						params.push(String(player._(me.hotspot.title)));
						var hs = player._("%1", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me.__5.ggUpdateText();
					} else {
						if (me.__5.ggUpdatePosition) me.__5.ggUpdatePosition();
					}
				}
			}
		}
		me.__5.logicBlock_text();
		me.__5.ggUpdatePosition=function (useTransition) {
		}
		me._container_6.appendChild(me.__5);
		el=me.__4=document.createElement('div');
		els=me.__4__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ub178\ub4dc\uba85";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text menu";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0.54902);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 30px;';
		hs+='bottom : -40px;';
		hs+='color : rgba(34,34,34,1);';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((65px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 65px;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 7px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__4.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__4.ggUpdateText();
		player.addListener('changenode', function() {
			me.__4.ggUpdateText();
		});
		el.appendChild(els);
		me.__4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__4.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((Math.min(Math.min(me.hotspot.pxp, 100 - me.hotspot.pxp), Math.min(me.hotspot.pyp, 100 - me.hotspot.pyp)) == 0))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStatePosition = 1;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__4.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__4.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__4.style.transition='left 0s, bottom 0s, width 0s, height 0s, background-color 0s';
				if (me.__4.ggCurrentLogicStatePosition == 0) {
					me.__4.style.left = 'calc(50% - (65px / 2))';
					me.__4.style.bottom='0px';
				}
				else if (me.__4.ggCurrentLogicStatePosition == 1) {
					me.__4.style.left = 'calc(50% - (65px / 2) + (0px / 2) + -5px)';
					me.__4.style.bottom='40px';
				}
				else {
					me.__4.style.left='calc(50% - ((65px + 0px) / 2) + 0px)';
					me.__4.style.bottom='-40px';
				}
			}
		}
		me.__4.logicBlock_position();
		me.__4.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 420))
			)
			{
				newLogicStateSize = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateSize = 1;
			}
			else if (
				((player._(me.ggUserdata.information) == "\ub113\uac8c"))
			)
			{
				newLogicStateSize = 2;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__4.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__4.ggCurrentLogicStateSize = newLogicStateSize;
				me.__4.style.transition='left 0s, bottom 0s, width 0s, height 0s, background-color 0s';
				if (me.__4.ggCurrentLogicStateSize == 0) {
					me.__4.style.width='50px';
					me.__4.style.height='25px';
					me.__4.style.left = 'calc(50% - (50px / 2))';
					skin.updateSize(me.__4);
				}
				else if (me.__4.ggCurrentLogicStateSize == 1) {
					me.__4.style.width='50px';
					me.__4.style.height='25px';
					me.__4.style.left = 'calc(50% - (50px / 2))';
					skin.updateSize(me.__4);
				}
				else if (me.__4.ggCurrentLogicStateSize == 2) {
					me.__4.style.width='100px';
					me.__4.style.height='30px';
					me.__4.style.left = 'calc(50% - (100px / 2))';
					skin.updateSize(me.__4);
				}
				else {
					me.__4.style.width='65px';
					me.__4.style.height='30px';
					me.__4.style.left = 'calc(50% - (65px / 2))';
					skin.updateSize(me.__4);
				}
			}
		}
		me.__4.logicBlock_size();
		me.__4.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__4.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__4.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__4.style.transition='left 0s, bottom 0s, width 0s, height 0s, background-color 0s';
				if (me.__4.ggCurrentLogicStateVisible == 0) {
					me.__4.style.visibility="hidden";
					me.__4.ggVisible=false;
				}
				else if (me.__4.ggCurrentLogicStateVisible == 1) {
					me.__4.style.visibility="hidden";
					me.__4.ggVisible=false;
				}
				else {
					me.__4.style.visibility=(Number(me.__4.style.opacity)>0||!me.__4.style.opacity)?'inherit':'hidden';
					me.__4.ggVisible=true;
				}
			}
		}
		me.__4.logicBlock_visible();
		me.__4.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player._(me.hotspot.title) == "\uc5c6\uc74c"))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__4.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__4.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__4.style.transition='left 0s, bottom 0s, width 0s, height 0s, background-color 0s';
				if (me.__4.ggCurrentLogicStateBackgroundColor == 0) {
					me.__4.style.backgroundColor="rgba(0,0,0,0)";
				}
				else {
					me.__4.style.backgroundColor="rgba(255,255,255,0.54902)";
				}
			}
		}
		me.__4.logicBlock_backgroundcolor();
		me.__4.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player._(me.hotspot.title) == "\uc5c6\uc74c"))
			)
			{
				newLogicStateText = 0;
			}
			else {
				newLogicStateText = -1;
			}
			if (me.__4.ggCurrentLogicStateText != newLogicStateText) {
				me.__4.ggCurrentLogicStateText = newLogicStateText;
				me.__4.style.transition='left 0s, bottom 0s, width 0s, height 0s, background-color 0s';
				if (me.__4.ggCurrentLogicStateText == 0) {
					if (me.__4.ggUpdateText) {
					me.__4.ggUpdateText=function() {
						var params = [];
						var hs = player._("", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me.__4.ggUpdateText();
					} else {
						if (me.__4.ggUpdatePosition) me.__4.ggUpdatePosition();
					}
				}
				else {
					if (me.__4.ggUpdateText) {
					me.__4.ggUpdateText=function() {
						var params = [];
						params.push(String(player._(me.hotspot.title)));
						var hs = player._("%1", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me.__4.ggUpdateText();
					} else {
						if (me.__4.ggUpdatePosition) me.__4.ggUpdatePosition();
					}
				}
			}
		}
		me.__4.logicBlock_text();
		me.__4.ggUpdatePosition=function (useTransition) {
		}
		me._container_6.appendChild(me.__4);
		me._lottie_2.appendChild(me._container_6);
		me._ht_node.appendChild(me._lottie_2);
		me._lottie_2.logicBlock_position();
		me._lottie_2.logicBlock_size();
		me.__5.logicBlock_position();
		me.__5.logicBlock_size();
		me.__5.logicBlock_visible();
		me.__5.logicBlock_backgroundcolor();
		me.__5.logicBlock_text();
		me.__4.logicBlock_position();
		me.__4.logicBlock_size();
		me.__4.logicBlock_visible();
		me.__4.logicBlock_backgroundcolor();
		me.__4.logicBlock_text();
			me.ggEvent_activehotspotchanged=function() {
				me.__5.logicBlock_size();
				me.__5.logicBlock_backgroundcolor();
				me.__5.logicBlock_text();
				me.__4.logicBlock_size();
				me.__4.logicBlock_backgroundcolor();
				me.__4.logicBlock_text();
			};
			me.ggEvent_changenode=function() {
				me.__5.logicBlock_size();
				me.__5.logicBlock_backgroundcolor();
				me.__5.logicBlock_text();
				me.__4.logicBlock_size();
				me.__4.logicBlock_backgroundcolor();
				me.__4.logicBlock_text();
			};
			me.ggEvent_configloaded=function() {
				me._lottie_2.logicBlock_position();
				me._lottie_2.logicBlock_size();
				me.__5.logicBlock_size();
				me.__5.logicBlock_visible();
				me.__5.logicBlock_backgroundcolor();
				me.__5.logicBlock_text();
				me.__4.logicBlock_position();
				me.__4.logicBlock_size();
				me.__4.logicBlock_visible();
				me.__4.logicBlock_backgroundcolor();
				me.__4.logicBlock_text();
			};
			me.ggEvent_hotspotsupdated=function() {
				me.__5.logicBlock_position();
				me.__4.logicBlock_position();
			};
			me.ggEvent_sizechanged=function() {
				me._lottie_2.logicBlock_size();
				me.__5.logicBlock_visible();
				me.__4.logicBlock_size();
				me.__4.logicBlock_visible();
			};
			me.__div = me._ht_node;
	};
	function SkinElement_map_pin2_Class(parentScope,ggParent) {
		var me=this;
		var flag=false;
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.ggUserdata.nodeid=nodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
		
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		
		el=me._map_pin2=document.createElement('div');
		el.ggId="map_pin2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 41px;';
		hs+='left : calc(50% - ((24px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((41px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_pin2.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._map_pin2.onclick=function (e) {
			if (
				(
					((me._map_pin2.ggIsActive() == false))
				)
			) {
				player.openNext("{"+me.ggNodeId+"}","");
			}
		}
		me._map_pin2.ggUpdatePosition=function (useTransition) {
		}
		el=me._map_pin_active2=document.createElement('div');
		els=me._map_pin_active2__img=document.createElement('img');
		els.className='ggskin ggskin_map_pin_active2';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAB6klEQVQ4jZ2US2tTURSFv33aPOhAk2DbkY9a0/rCBw4aBBFE7x8IKFoc9F8IjnSkwxr/gEJVEGtRHKgICuJj4LPaQrwORJBS24RY0MbULAe5saHG2Nw12nDO+s6DvRc0kaSNks5IeiKpIOmXpC+SHks6JWlTM99KSJekUUkVtVZF0gVJXY1+awB1A3eBvVR/gn8VfbwGcy/hxyxE10DvfmzzUUgPg4sCvAE8M5v9A5MUBR4BGYpT6MExKLz79xOSOzBvHNYOADwHDppZ2QXL54AM33x060BrEEDxPZrIQOkDwBBwHsAkbQB8qpWIbuyB4tR//3b5htux7GtwkSUg7YARIEL+cnsgqO3PXwLoBEYccARA/pX2QIHkj9VLzwF9ABQmQ8GYf1uvBh3QC8'+
			'Di13CwcgEQQNIBJQDi68LBYkmCDis6YBqA1K5wsGXftANuA9iWE6FYlh6ul3dM0nogT7USb7vPEtuw7CvoiJWBQWdmn4EcLoJ5E8EfrELRBObdhI4YwEUz+1SfzTjwEBiilEf3s61HKrUTO3wdEluhNpuHzOx7Y2r0APeA3VSXwB+rNfLcC1ich1gKuvdh/cchfRJcJ8AktdSY+evAIM9yq8yz3Mo8aypJfZLOSnomaSEAzEh6Kum0pP5mvt/cMiU35fP3jQAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_pin_active2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 22px;';
		hs+='left : calc(50% - ((22px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((22px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 22px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 100%';
		me._map_pin_active2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._map_pin_active2.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._map_pin_active2.ggCurrentLogicStateSize != newLogicStateSize) {
				me._map_pin_active2.ggCurrentLogicStateSize = newLogicStateSize;
				me._map_pin_active2.style.transition='width 0s, height 0s, transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_active2.ggCurrentLogicStateSize == 0) {
					me._map_pin_active2.style.width='18px';
					me._map_pin_active2.style.height='18px';
					me._map_pin_active2.style.left = 'calc(50% - (18px / 2))';
					me._map_pin_active2.style.top = 'calc(50% - (18px / 2))';
					skin.updateSize(me._map_pin_active2);
				}
				else {
					me._map_pin_active2.style.width='22px';
					me._map_pin_active2.style.height='22px';
					me._map_pin_active2.style.left = 'calc(50% - (22px / 2))';
					me._map_pin_active2.style.top = 'calc(50% - (22px / 2))';
					skin.updateSize(me._map_pin_active2);
				}
			}
		}
		me._map_pin_active2.logicBlock_size();
		me._map_pin_active2.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['map_pin_active2'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._map_pin_active2.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._map_pin_active2.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._map_pin_active2.style.transition='width 0s, height 0s, transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_active2.ggCurrentLogicStateScaling == 0) {
					me._map_pin_active2.ggParameter.sx = 1.1;
					me._map_pin_active2.ggParameter.sy = 1.1;
					me._map_pin_active2.style.transform=parameterToTransform(me._map_pin_active2.ggParameter);
					setTimeout(function() {skin.updateSize(me._map_pin_active2);}, 250);
				}
				else {
					me._map_pin_active2.ggParameter.sx = 1;
					me._map_pin_active2.ggParameter.sy = 1;
					me._map_pin_active2.style.transform=parameterToTransform(me._map_pin_active2.ggParameter);
					setTimeout(function() {skin.updateSize(me._map_pin_active2);}, 250);
				}
			}
		}
		me._map_pin_active2.logicBlock_scaling();
		me._map_pin_active2.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me._map_pin_active2.ggIsActive() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_pin_active2.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_pin_active2.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_pin_active2.style.transition='width 0s, height 0s, transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_active2.ggCurrentLogicStateAlpha == 0) {
					me._map_pin_active2.style.visibility=me._map_pin_active2.ggVisible?'inherit':'hidden';
					me._map_pin_active2.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._map_pin_active2.style.opacity == 0.0) { me._map_pin_active2.style.visibility="hidden"; } }, 505);
					me._map_pin_active2.style.opacity=0;
				}
			}
		}
		me._map_pin_active2.logicBlock_alpha();
		me._map_pin_active2.onmouseover=function (e) {
			me.elementMouseOver['map_pin_active2']=true;
			me._map_pin_active2.logicBlock_scaling();
		}
		me._map_pin_active2.onmouseout=function (e) {
			me.elementMouseOver['map_pin_active2']=false;
			me._map_pin_active2.logicBlock_scaling();
		}
		me._map_pin_active2.ggUpdatePosition=function (useTransition) {
		}
		me._map_pin2.appendChild(me._map_pin_active2);
		el=me._map_pin_normal2=document.createElement('div');
		els=me._map_pin_normal2__img=document.createElement('img');
		els.className='ggskin ggskin_map_pin_normal2';
		hs='data:image/png;base64,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'+
			'rK/AdijsFZh/SchwAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_pin_normal2";
		el.ggDx=0;
		el.ggDy=-10;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 44px;';
		hs+='left : calc(50% - ((38px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((44px + 0px) / 2) - 10px);';
		hs+='visibility : inherit;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 100%';
		me._map_pin_normal2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._map_pin_normal2.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._map_pin_normal2.ggCurrentLogicStateSize != newLogicStateSize) {
				me._map_pin_normal2.ggCurrentLogicStateSize = newLogicStateSize;
				me._map_pin_normal2.style.transition='width 0s, height 0s, transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_normal2.ggCurrentLogicStateSize == 0) {
					me._map_pin_normal2.style.width='16px';
					me._map_pin_normal2.style.height='22px';
					me._map_pin_normal2.style.left = 'calc(50% - (16px / 2))';
					me._map_pin_normal2.style.top = 'calc(50% - (22px / 2) + (0px / 2) + -10px)';
					skin.updateSize(me._map_pin_normal2);
				}
				else {
					me._map_pin_normal2.style.width='38px';
					me._map_pin_normal2.style.height='44px';
					me._map_pin_normal2.style.left = 'calc(50% - (38px / 2))';
					me._map_pin_normal2.style.top = 'calc(50% - (44px / 2) + (0px / 2) + -10px)';
					skin.updateSize(me._map_pin_normal2);
				}
			}
		}
		me._map_pin_normal2.logicBlock_size();
		me._map_pin_normal2.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['map_pin_normal2'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._map_pin_normal2.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._map_pin_normal2.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._map_pin_normal2.style.transition='width 0s, height 0s, transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_normal2.ggCurrentLogicStateScaling == 0) {
					me._map_pin_normal2.ggParameter.sx = 1.2;
					me._map_pin_normal2.ggParameter.sy = 1.1;
					me._map_pin_normal2.style.transform=parameterToTransform(me._map_pin_normal2.ggParameter);
					setTimeout(function() {skin.updateSize(me._map_pin_normal2);}, 250);
				}
				else {
					me._map_pin_normal2.ggParameter.sx = 1;
					me._map_pin_normal2.ggParameter.sy = 1;
					me._map_pin_normal2.style.transform=parameterToTransform(me._map_pin_normal2.ggParameter);
					setTimeout(function() {skin.updateSize(me._map_pin_normal2);}, 250);
				}
			}
		}
		me._map_pin_normal2.logicBlock_scaling();
		me._map_pin_normal2.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me._map_pin_normal2.ggIsActive() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_pin_normal2.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_pin_normal2.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_pin_normal2.style.transition='width 0s, height 0s, transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_normal2.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._map_pin_normal2.style.opacity == 0.0) { me._map_pin_normal2.style.visibility="hidden"; } }, 505);
					me._map_pin_normal2.style.opacity=0;
				}
				else {
					me._map_pin_normal2.style.visibility=me._map_pin_normal2.ggVisible?'inherit':'hidden';
					me._map_pin_normal2.style.opacity=1;
				}
			}
		}
		me._map_pin_normal2.logicBlock_alpha();
		me._map_pin_normal2.onmouseover=function (e) {
			me.elementMouseOver['map_pin_normal2']=true;
			me._map_pin_normal2.logicBlock_scaling();
		}
		me._map_pin_normal2.onmouseout=function (e) {
			me.elementMouseOver['map_pin_normal2']=false;
			me._map_pin_normal2.logicBlock_scaling();
		}
		me._map_pin_normal2.ggUpdatePosition=function (useTransition) {
		}
		me._map_pin2.appendChild(me._map_pin_normal2);
		me._map_pin_active2.logicBlock_size();
		me._map_pin_active2.logicBlock_scaling();
		me._map_pin_active2.logicBlock_alpha();
		me._map_pin_normal2.logicBlock_size();
		me._map_pin_normal2.logicBlock_scaling();
		me._map_pin_normal2.logicBlock_alpha();
			me.ggEvent_changenode=function() {
				me._map_pin_active2.logicBlock_alpha();
				me._map_pin_normal2.logicBlock_alpha();
			};
			me.ggEvent_sizechanged=function() {
				me._map_pin_active2.logicBlock_size();
				me._map_pin_normal2.logicBlock_size();
			};
	};
	function SkinElement_map_pin_Class(parentScope,ggParent) {
		var me=this;
		var flag=false;
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.ggUserdata.nodeid=nodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
		
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		
		el=me._map_pin=document.createElement('div');
		el.ggId="map_pin";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 41px;';
		hs+='left : calc(50% - ((24px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((41px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_pin.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._map_pin.onclick=function (e) {
			if (
				(
					((me._map_pin.ggIsActive() == false))
				)
			) {
				player.openNext("{"+me.ggNodeId+"}","");
			}
		}
		me._map_pin.ggUpdatePosition=function (useTransition) {
		}
		el=me._map_pin_active=document.createElement('div');
		els=me._map_pin_active__img=document.createElement('img');
		els.className='ggskin ggskin_map_pin_active';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAB6klEQVQ4jZ2US2tTURSFv33aPOhAk2DbkY9a0/rCBw4aBBFE7x8IKFoc9F8IjnSkwxr/gEJVEGtRHKgICuJj4LPaQrwORJBS24RY0MbULAe5saHG2Nw12nDO+s6DvRc0kaSNks5IeiKpIOmXpC+SHks6JWlTM99KSJekUUkVtVZF0gVJXY1+awB1A3eBvVR/gn8VfbwGcy/hxyxE10DvfmzzUUgPg4sCvAE8M5v9A5MUBR4BGYpT6MExKLz79xOSOzBvHNYOADwHDppZ2QXL54AM33x060BrEEDxPZrIQOkDwBBwHsAkbQB8qpWIbuyB4tR//3b5htux7GtwkSUg7YARIEL+cnsgqO3PXwLoBEYccARA/pX2QIHkj9VLzwF9ABQmQ8GYf1uvBh3QC8'+
			'Di13CwcgEQQNIBJQDi68LBYkmCDis6YBqA1K5wsGXftANuA9iWE6FYlh6ul3dM0nogT7USb7vPEtuw7CvoiJWBQWdmn4EcLoJ5E8EfrELRBObdhI4YwEUz+1SfzTjwEBiilEf3s61HKrUTO3wdEluhNpuHzOx7Y2r0APeA3VSXwB+rNfLcC1ich1gKuvdh/cchfRJcJ8AktdSY+evAIM9yq8yz3Mo8aypJfZLOSnomaSEAzEh6Kum0pP5mvt/cMiU35fP3jQAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_pin_active";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 15px;';
		hs+='left : calc(50% - ((15px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((15px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 15px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 100%';
		me._map_pin_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._map_pin_active.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateSize = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateSize = 1;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._map_pin_active.ggCurrentLogicStateSize != newLogicStateSize) {
				me._map_pin_active.ggCurrentLogicStateSize = newLogicStateSize;
				me._map_pin_active.style.transition='width 0s, height 0s, transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_active.ggCurrentLogicStateSize == 0) {
					me._map_pin_active.style.width='10px';
					me._map_pin_active.style.height='10px';
					me._map_pin_active.style.left = 'calc(50% - (10px / 2))';
					me._map_pin_active.style.top = 'calc(50% - (10px / 2))';
					skin.updateSize(me._map_pin_active);
				}
				else if (me._map_pin_active.ggCurrentLogicStateSize == 1) {
					me._map_pin_active.style.width='10px';
					me._map_pin_active.style.height='10px';
					me._map_pin_active.style.left = 'calc(50% - (10px / 2))';
					me._map_pin_active.style.top = 'calc(50% - (10px / 2))';
					skin.updateSize(me._map_pin_active);
				}
				else {
					me._map_pin_active.style.width='15px';
					me._map_pin_active.style.height='15px';
					me._map_pin_active.style.left = 'calc(50% - (15px / 2))';
					me._map_pin_active.style.top = 'calc(50% - (15px / 2))';
					skin.updateSize(me._map_pin_active);
				}
			}
		}
		me._map_pin_active.logicBlock_size();
		me._map_pin_active.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['map_pin_active'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._map_pin_active.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._map_pin_active.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._map_pin_active.style.transition='width 0s, height 0s, transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_active.ggCurrentLogicStateScaling == 0) {
					me._map_pin_active.ggParameter.sx = 1.1;
					me._map_pin_active.ggParameter.sy = 1.1;
					me._map_pin_active.style.transform=parameterToTransform(me._map_pin_active.ggParameter);
					setTimeout(function() {skin.updateSize(me._map_pin_active);}, 250);
				}
				else {
					me._map_pin_active.ggParameter.sx = 1;
					me._map_pin_active.ggParameter.sy = 1;
					me._map_pin_active.style.transform=parameterToTransform(me._map_pin_active.ggParameter);
					setTimeout(function() {skin.updateSize(me._map_pin_active);}, 250);
				}
			}
		}
		me._map_pin_active.logicBlock_scaling();
		me._map_pin_active.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me._map_pin_active.ggIsActive() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_pin_active.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_pin_active.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_pin_active.style.transition='width 0s, height 0s, transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_active.ggCurrentLogicStateAlpha == 0) {
					me._map_pin_active.style.visibility=me._map_pin_active.ggVisible?'inherit':'hidden';
					me._map_pin_active.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._map_pin_active.style.opacity == 0.0) { me._map_pin_active.style.visibility="hidden"; } }, 505);
					me._map_pin_active.style.opacity=0;
				}
			}
		}
		me._map_pin_active.logicBlock_alpha();
		me._map_pin_active.onmouseover=function (e) {
			me.elementMouseOver['map_pin_active']=true;
			me._map_pin_active.logicBlock_scaling();
		}
		me._map_pin_active.onmouseout=function (e) {
			me.elementMouseOver['map_pin_active']=false;
			me._map_pin_active.logicBlock_scaling();
		}
		me._map_pin_active.ggUpdatePosition=function (useTransition) {
		}
		me._map_pin.appendChild(me._map_pin_active);
		el=me._map_pin_normal=document.createElement('div');
		els=me._map_pin_normal__img=document.createElement('img');
		els.className='ggskin ggskin_map_pin_normal';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_pin_normal";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 22px;';
		hs+='left : calc(50% - ((13px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((22px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 13px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 100%';
		me._map_pin_normal.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._map_pin_normal.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateSize = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateSize = 1;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._map_pin_normal.ggCurrentLogicStateSize != newLogicStateSize) {
				me._map_pin_normal.ggCurrentLogicStateSize = newLogicStateSize;
				me._map_pin_normal.style.transition='width 0s, height 0s, transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_normal.ggCurrentLogicStateSize == 0) {
					me._map_pin_normal.style.width='10px';
					me._map_pin_normal.style.height='19px';
					me._map_pin_normal.style.left = 'calc(50% - (10px / 2))';
					me._map_pin_normal.style.top = 'calc(50% - (19px / 2))';
					skin.updateSize(me._map_pin_normal);
				}
				else if (me._map_pin_normal.ggCurrentLogicStateSize == 1) {
					me._map_pin_normal.style.width='10px';
					me._map_pin_normal.style.height='19px';
					me._map_pin_normal.style.left = 'calc(50% - (10px / 2))';
					me._map_pin_normal.style.top = 'calc(50% - (19px / 2))';
					skin.updateSize(me._map_pin_normal);
				}
				else {
					me._map_pin_normal.style.width='13px';
					me._map_pin_normal.style.height='22px';
					me._map_pin_normal.style.left = 'calc(50% - (13px / 2))';
					me._map_pin_normal.style.top = 'calc(50% - (22px / 2))';
					skin.updateSize(me._map_pin_normal);
				}
			}
		}
		me._map_pin_normal.logicBlock_size();
		me._map_pin_normal.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['map_pin_normal'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._map_pin_normal.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._map_pin_normal.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._map_pin_normal.style.transition='width 0s, height 0s, transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_normal.ggCurrentLogicStateScaling == 0) {
					me._map_pin_normal.ggParameter.sx = 1.1;
					me._map_pin_normal.ggParameter.sy = 1.1;
					me._map_pin_normal.style.transform=parameterToTransform(me._map_pin_normal.ggParameter);
					setTimeout(function() {skin.updateSize(me._map_pin_normal);}, 250);
				}
				else {
					me._map_pin_normal.ggParameter.sx = 1;
					me._map_pin_normal.ggParameter.sy = 1;
					me._map_pin_normal.style.transform=parameterToTransform(me._map_pin_normal.ggParameter);
					setTimeout(function() {skin.updateSize(me._map_pin_normal);}, 250);
				}
			}
		}
		me._map_pin_normal.logicBlock_scaling();
		me._map_pin_normal.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me._map_pin_normal.ggIsActive() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_pin_normal.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_pin_normal.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_pin_normal.style.transition='width 0s, height 0s, transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_normal.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._map_pin_normal.style.opacity == 0.0) { me._map_pin_normal.style.visibility="hidden"; } }, 505);
					me._map_pin_normal.style.opacity=0;
				}
				else {
					setTimeout(function() { if (me._map_pin_normal.style.opacity == 0.0) { me._map_pin_normal.style.visibility="hidden"; } }, 505);
					me._map_pin_normal.style.opacity=0;
				}
			}
		}
		me._map_pin_normal.logicBlock_alpha();
		me._map_pin_normal.onmouseover=function (e) {
			me.elementMouseOver['map_pin_normal']=true;
			me._map_pin_normal.logicBlock_scaling();
		}
		me._map_pin_normal.onmouseout=function (e) {
			me.elementMouseOver['map_pin_normal']=false;
			me._map_pin_normal.logicBlock_scaling();
		}
		me._map_pin_normal.ggUpdatePosition=function (useTransition) {
		}
		me._map_pin.appendChild(me._map_pin_normal);
		me._map_pin_active.logicBlock_size();
		me._map_pin_active.logicBlock_scaling();
		me._map_pin_active.logicBlock_alpha();
		me._map_pin_normal.logicBlock_size();
		me._map_pin_normal.logicBlock_scaling();
		me._map_pin_normal.logicBlock_alpha();
			me.ggEvent_changenode=function() {
				me._map_pin_active.logicBlock_alpha();
				me._map_pin_normal.logicBlock_alpha();
			};
			me.ggEvent_configloaded=function() {
				me._map_pin_active.logicBlock_size();
				me._map_pin_normal.logicBlock_size();
			};
			me.ggEvent_sizechanged=function() {
				me._map_pin_active.logicBlock_size();
				me._map_pin_normal.logicBlock_size();
			};
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
		{
				hotspot.skinid = 'ht_node';
				hsinst = new SkinHotspotClass_ht_node(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		hotspotTemplates = {};
	}
	player.addListener('hotspotsremoved',function() {
			me.removeSkinHotspots();
	});
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
		var newMarker=[];
		var id=player.getCurrentNode();
		var i,j;
		var tags=me.ggUserdata.tags;
		for (i=0;i<nodeMarker.length;i++) {
			var match=false;
			if ((nodeMarker[i].ggMarkerNodeId.length > 0) && (nodeMarker[i].ggMarkerNodeId.charAt(0)=='{') && (nodeMarker[i].ggMarkerNodeId.substr(1, nodeMarker[i].ggMarkerNodeId.length - 2)==id) && (id!='')) match=true;
			for(j=0;j<tags.length;j++) {
				if (nodeMarker[i].ggMarkerNodeId==tags[j]) match=true;
			}
			if (match) {
				newMarker.push(nodeMarker[i]);
			}
		}
		for(i=0;i<activeNodeMarker.length;i++) {
			if (newMarker.indexOf(activeNodeMarker[i])<0) {
				if (activeNodeMarker[i].ggMarkerNormal) {
					activeNodeMarker[i].ggMarkerNormal.style.visibility='inherit';
				}
				if (activeNodeMarker[i].ggMarkerActive) {
					activeNodeMarker[i].ggMarkerActive.style.visibility='hidden';
				}
				if (activeNodeMarker[i].ggDeactivate) {
					activeNodeMarker[i].ggDeactivate();
				}
				activeNodeMarker[i].ggIsMarkerActive=false;
			}
		}
		for(i=0;i<newMarker.length;i++) {
			if (activeNodeMarker.indexOf(newMarker[i])<0) {
				if (newMarker[i].ggMarkerNormal) {
					newMarker[i].ggMarkerNormal.style.visibility='hidden';
				}
				if (newMarker[i].ggMarkerActive) {
					newMarker[i].ggMarkerActive.style.visibility='inherit';
				}
				if (newMarker[i].ggActivate) {
					newMarker[i].ggActivate();
				}
				newMarker[i].ggIsMarkerActive=true;
			}
		}
		activeNodeMarker=newMarker;
	});
	me.skinTimerEvent=function() {
		if (player.isInVR()) return;
		me.ggCurrentTime=new Date().getTime();
		me.__96.ggUpdateConditionTimer();
		me._timer_1.ggUpdateConditionTimer();
		if (me._timer_1.ggLastIsActive!=me._timer_1.ggIsActive()) {
			me._timer_1.ggLastIsActive=me._timer_1.ggIsActive();
			if (me._timer_1.ggLastIsActive) {
				me.__97.style.transition='none';
				me.__97.style.visibility='hidden';
				me.__97.ggVisible=false;
			} else {
			}
		}
		me.__92.ggUpdateConditionTimer();
		me.__91.ggUpdateConditionTimer();
		if (me.__91.ggLastIsActive!=me.__91.ggIsActive()) {
			me.__91.ggLastIsActive=me.__91.ggIsActive();
			if (me.__91.ggLastIsActive) {
				me.__93.style.transition='none';
				me.__93.style.visibility='hidden';
				me.__93.ggVisible=false;
			} else {
			}
		}
		me.__87.ggUpdateConditionTimer();
		me.__86.ggUpdateConditionTimer();
		if (me.__86.ggLastIsActive!=me.__86.ggIsActive()) {
			me.__86.ggLastIsActive=me.__86.ggIsActive();
			if (me.__86.ggLastIsActive) {
				me.__88.style.transition='none';
				me.__88.style.visibility='hidden';
				me.__88.ggVisible=false;
			} else {
			}
		}
		me._onoff.ggUpdateConditionTimer();
		me.__84.ggUpdateConditionTimer();
		if (me.__84.ggLastIsActive!=me.__84.ggIsActive()) {
			me.__84.ggLastIsActive=me.__84.ggIsActive();
			if (me.__84.ggLastIsActive) {
				me.__85.style.transition='none';
				me.__85.style.visibility='hidden';
				me.__85.ggVisible=false;
			} else {
			}
		}
		me.__80.ggUpdateConditionTimer();
		me.__79.ggUpdateConditionTimer();
		if (me.__79.ggLastIsActive!=me.__79.ggIsActive()) {
			me.__79.ggLastIsActive=me.__79.ggIsActive();
			if (me.__79.ggLastIsActive) {
				me.__81.style.transition='none';
				me.__81.style.visibility='hidden';
				me.__81.ggVisible=false;
			} else {
			}
		}
		me.__75.ggUpdateConditionTimer();
		me.__74.ggUpdateConditionTimer();
		if (me.__74.ggLastIsActive!=me.__74.ggIsActive()) {
			me.__74.ggLastIsActive=me.__74.ggIsActive();
			if (me.__74.ggLastIsActive) {
				me.__76.style.transition='none';
				me.__76.style.visibility='hidden';
				me.__76.ggVisible=false;
			} else {
			}
		}
		me.__69.ggUpdateConditionTimer();
		me.__68.ggUpdateConditionTimer();
		if (me.__68.ggLastIsActive!=me.__68.ggIsActive()) {
			me.__68.ggLastIsActive=me.__68.ggIsActive();
			if (me.__68.ggLastIsActive) {
				me.__71.style.transition='none';
				me.__71.style.visibility='hidden';
				me.__71.ggVisible=false;
				me.__72.style.transition='none';
				me.__72.style.visibility='hidden';
				me.__72.ggVisible=false;
			} else {
			}
		}
		me.__64.ggUpdateConditionTimer();
		me.__63.ggUpdateConditionTimer();
		if (me.__63.ggLastIsActive!=me.__63.ggIsActive()) {
			me.__63.ggLastIsActive=me.__63.ggIsActive();
			if (me.__63.ggLastIsActive) {
				me.__65.style.transition='none';
				me.__65.style.visibility='hidden';
				me.__65.ggVisible=false;
			} else {
			}
		}
		me.__54.ggUpdateConditionTimer();
		me.__55.ggUpdateConditionTimer();
		if (me.__55.ggLastIsActive!=me.__55.ggIsActive()) {
			me.__55.ggLastIsActive=me.__55.ggIsActive();
			if (me.__55.ggLastIsActive) {
				me.__56.style.transition='none';
				me.__56.style.visibility='hidden';
				me.__56.ggVisible=false;
			} else {
			}
		}
		var hs='';
		if (me.__43.ggParameter) {
			hs+=parameterToTransform(me.__43.ggParameter) + ' ';
		}
		hs+='translate(' + (1 * player.mouse.x + -35) + 'px,0px) ';
		hs+='translate(0px,' + (1 * player.mouse.y + 20) + 'px) ';
		me.__43.style.transform=hs;
		me.__211.ggUpdateConditionTimer();
		if (me.__211.ggLastIsActive!=me.__211.ggIsActive()) {
			me.__211.ggLastIsActive=me.__211.ggIsActive();
			if (me.__211.ggLastIsActive) {
				player.setVariableValue('vis_foot', !player.getVariableValue('vis_foot'));
			} else {
			}
		}
		me._timer_2.ggUpdateConditionTimer();
		if (me._timer_2.ggLastIsActive!=me._timer_2.ggIsActive()) {
			me._timer_2.ggLastIsActive=me._timer_2.ggIsActive();
			if (me._timer_2.ggLastIsActive) {
				player.setVariableValue('vis_direction', !player.getVariableValue('vis_direction'));
			} else {
			}
		}
		for (const id in hotspotTemplates) {
			const tmpl=hotspotTemplates[id];
			tmpl.forEach(function(hotspot) {
				if (hotspot.hotspotTimerEvent) {
					hotspot.hotspotTimerEvent();
				}
			});
		};
	};
	player.addListener('timer', me.skinTimerEvent);
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px; line-height: normal; } .ggmarkdown p,.ggmarkdown h1,.ggmarkdown h2,.ggmarkdown h3,.ggmarkdown h4 { margin-top: 0px } .ggmarkdown { white-space:normal }'));
	document.head.appendChild(style);
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onclick) activeElement.onclick();
		}
	});
	document.addEventListener('keydown', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmousedown) activeElement.onmousedown();
		}
	});
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmouseup) activeElement.onmouseup();
		}
	});
	me.skinTimerEvent();
	document.fonts.onloadingdone = () => {
		me.updateSize(me.divSkin);
	}
};