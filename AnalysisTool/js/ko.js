var ko = function(options){
	this.defaults = {
		wrap : "ok_scroll",
		ulClass : "_moveWrap",
		pageClass : "",
		pageAddClass : "",
		paging : true,
		player : false,
		psw : false,
		type : "l",
		timer : "",
		seetTimer : "",
		loop_status : false,
		pWrapCss : {position:"absolute",bottom:"449px"},
		pageUlClass : {"font-size":0},
		playerClass : {},
		playerAddClass : "",
		max : 0,
		sn : 0,
		pageDesign : true,
		pageNames : false,
		loop : false,
		repeat : false,
		wheelAc : false,
		setNbtClass : false,
		setPbtClass : false,
		animate : false,
		paginationsCss : {display:"inline-block",width:"115px",height:"11px",border:"1px solid #fff",cursor:"pointer",fontSize:"0"},
		delay : 0,
		n : 1,
		loopDelay : 5000
	};
	this.settings = new Object();
	this.init(options);
};



ko.prototype._extend = function(options){
	for(var key in this.defaults){
		this.settings[key] = this.defaults[key];
	};
	for(var key in options){
		this.settings[key] = options[key];
	};
};

ko.prototype._setDiv = function(){
	var that = this;
	var $parent  = document.getElementById(this.settings.wrap);
	for(var i=0; i<$parent.children.length; i++){
		var tn = $parent.children[i].tagName.toLowerCase();
		if(tn == "ul"){
			that.settings.ulClass = that.settings.wrap + that.settings.ulClass;
			$parent.children[i].setAttribute("class",that.settings.ulClass);
			break;
		};
	};
	var $move = document.getElementsByClassName(that.settings.ulClass)[0];
	var $li = document.getElementsByClassName(that.settings.ulClass)[0].children;
	var maxPrice = $li.length * 100;
	$move.style.position = "relative";
	$move.style.fontSize = "0";
	if(that.settings.type == "l"){
		$move.style.width = maxPrice + "%";
		if(!that.settings.repeat){
			$move.style.left = (that.settings.sn * -100) + "%";
		};
		for(var i=0; i<$li.length; i++){
			$li[i].style.width = (100 / $li.length) + "%";
			$li[i].style.display = "inline-block";
			$li[i].style.fontSize = "12px";
		};
	}else if(that.settings.type == "v"){
		if(!that.settings.repeat){
			$move.style.height = maxPrice + "%";
			$move.style.top = (that.settings.sn * -100) + "%";
			for(var i=0; i<$move.children.length; i++){
				$move.children[i].style.height = (100 / $move.children.length) + "%";
			};
		}else if(that.settings.repeat){
			$move.style.height = (maxPrice * 2) + "%";
			$move.style.top = (maxPrice * -1) + "%";
			for(var i=0; i<$move.children.length; i++){
				$move.children[i].style.height = (100 / ($move.children.length * 2)) + "%";
			};
		};
	};

	/* 페이징 */
	if(that.settings.paging){
		var div = document.createElement("div");
		var ul = document.createElement("ul");
		that.settings.pageClass = that.settings.ulClass+"_p"; 
		div.setAttribute("class",that.settings.pageClass + " " + that.settings.pageAddClass);
		for(var key in that.settings.pWrapCss){
			div.style[key] = that.settings.pWrapCss[key];
		};
		for(var key in that.settings.pageUlClass){
			ul.style[key] = that.settings.pageUlClass[key];
		};
		for(var i=0; i<$li.length; i++){
			var li = document.createElement("li");
			li.innerHTML = i + 1;
			if(that.settings.pageNames) li.innerHTML = that.settings.pageNames[i];
			for(var key in that.settings.paginationsCss){
				li.style[key] = that.settings.paginationsCss[key];
			};
			if(that.settings.sn == i) li.setAttribute("class","on"); 
			ul.appendChild(li);
			li.setAttribute("data-index",i);
			li.addEventListener("click",function(e){
				if(that.settings.animate) return;
				e.cancelBubble = true;
				var ind = e.target.getAttribute("data-index");
				if(that.settings.type == "l"){
					var currentLeft = document.getElementsByClassName(that.settings.ulClass)[0].style.left.match(/(\-?\d+(\.\d+)?)/g);
					var vLen = (that.settings.repeat && currentHeight <= halfMax)?Number((document.getElementsByClassName(that.settings.ulClass)[0].children.length/2) - 0):0;
					var targetLeft = (Number(ind) + Number(vLen)) * - 100;
					if(currentLeft > targetLeft){
						that._moveVertical({sw:"l",ind:ind});
					}else if(currentLeft < targetLeft){
						that._moveVertical({sw:"r",ind:ind});
					};
				}else if(that.settings.type == "v"){
					var currentHeight = document.getElementsByClassName(that.settings.ulClass)[0].style.top.match(/(\-?\d+(\.\d+)?)/g);
					var halfMax = Number(((document.getElementsByClassName(that.settings.ulClass)[0].children.length / 2) - 1) * -100);
					var vLen = (that.settings.repeat && currentHeight <= halfMax)?Number((document.getElementsByClassName(that.settings.ulClass)[0].children.length/2) - 0):0;
					var targetHeight = (Number(ind) + Number(vLen)) * - 100;
					if(currentHeight > targetHeight){
						that._moveVertical({sw:"d",ind:ind});
					}else if(currentHeight < targetHeight){
						that._moveVertical({sw:"u",ind:ind});
					};
				};
				var $p = e.target.parentNode.children;
				/*
				for(var i=0; i<$p.length; i++){
					var thisClass = ($p[i].getAttribute("class") != null)?$p[i].getAttribute("class"):"";
					if(thisClass.indexOf("ko_player") != -1) return;
					$p[i].setAttribute("class","");
					e.target.setAttribute("class","on");
				};
				*/
			});
		};
		div.appendChild(ul);
		if(that.settings.pageDesign){
			div.style.display = "inline-block";
			div.style.position = "absolute";
			div.style.left = "50%";
			$parent.appendChild(div);
			div.style.margin = "0 0 0 -" + (div.clientWidth / 2) + "px";
		}else{
			$parent.appendChild(div);
		};
		if(that.settings.player){
			var play = document.createElement("li");
			for(var key in that.settings.playerClass){
				play.style[key] = that.settings.playerClass[key];
			};
			play.setAttribute("class","ko_player");
			play.addEventListener("click",function(e){
				e.cancelBubble = true;
				var thisClass = e.target.getAttribute("class").indexOf("ppp");
				if(thisClass != -1){
					e.target.setAttribute("class","ko_player");
					that.settings.psw = false;
				}else{
					e.target.setAttribute("class","ko_player ppp");
					that.settings.psw = true;
				};
			});
			ul.appendChild(play);
		};
	};
		
	/* repeat set*/
	if(that.settings.repeat){
		var html = $move.innerHTML + $move.innerHTML;
		$move.innerHTML = html;
		var width = $move.children.length * 100;
		$move.style.width = width + "%";
		for(var i=0; i<$move.children.length; i++){
			$move.children[i].style.width = (100 / $move.children.length) + "%";
		};
	}else if(that.settings.repeat && that.settings.type == "v"){
		var html = $move.innerHTML + $move.innerHTML + $move.innerHTML;
		$move.innerHTML = html;
		var height = $move.children.length * 100;
		$move.style.height = height + "%";
		for(var i=0; i<$move.children.length; i++){
			$move.children[i].style.height = (100 / $move.children.length) + "%";
		};
		var t = ($move.children.length / 3) * 100 * -1;
		$move.style.top = t + "%";
	};
	/* loop */
	if(that.settings.loop){
		that._loopStart();
		if(that.settings.paging){
			div.addEventListener("mouseenter",function(e){
				e.cancelBubble = true;
				that._loopCancel();
			});
			div.addEventListener("mouseleave",function(e){
				e.cancelBubble = true;
				that._loopStart();
			});
		};
	};
	/* 컨트롤 버튼 */
	if(that.settings.setNbtClass){
		try{
			var $btN = document.getElementsByClassName(that.settings.setNbtClass)[0];
			if(that.settings.type == "v"){
				$btN.addEventListener("click",function(e){
					e.cancelBubble = true;
					that._moveVertical({sw:"d"});
				});
			}else if(that.settings.type == "l"){
				$btN.addEventListener("click",function(e){
					that._moveVertical({sw:"l"});
				});
			};
			if(that.settings.loop){
				$btN.addEventListener("mouseenter",function(e){
					e.cancelBubble = true;
					clearTimeout(that.settings.seetTimer);
				});
				$btN.addEventListener("mouseleave",function(e){
					e.cancelBubble = true;
					if(that.settings.loop) that._loopStart();
				});
			};
		}catch(error){
			console.log(error.message);
		};
	};
	if(that.settings.setPbtClass){
		try{
			var $btP = document.getElementsByClassName(that.settings.setPbtClass)[0];
			if(that.settings.type == "v"){
				$btP.addEventListener("click",function(e){
					e.cancelBubble = true;
					that._moveVertical({sw:"u"});
				});
			}else if(that.settings.type == "l"){
				$btP.addEventListener("click",function(e){
					e.cancelBubble = true;
					that._moveVertical({sw:"r"});
				});
			};
			if(that.settings.loop){
				$btP.addEventListener("mouseenter",function(e){
					e.cancelBubble = true;
					clearTimeout(that.settings.seetTimer);
				});
				$btP.addEventListener("mouseleave",function(e){
					e.cancelBubble = true;
					that._loopStart();
				});
			};
		}catch(error){
			console.log(error.message);
		};
	};
};

ko.prototype._loopStart = function(){
	var that = this;
	var $move = document.getElementsByClassName(that.settings.ulClass)[0];
	clearTimeout(that.settings.seetTimer);
	if(that.settings.psw) return;
	that.settings.seetTimer = setTimeout(function(){
		if(that.settings.type == "l"){
			that._moveVertical({sw:"l"});
		}else if(that.settings.type == "v"){
			that._moveVertical({sw:"d"});
		};
	},that.settings.loopDelay);
};
ko.prototype._loopCancel = function(){
	var that = this;
	clearTimeout(that.settings.seetTimer);
};
ko.prototype._paginationControll = function(n){
	var that = this;
	var $move = document.getElementsByClassName(that.settings.ulClass)[0];
	var left = $move.style.left.match(/(\-?\d+(\.\d+)?)/g);
	var top = $move.style.top.match(/(\-?\d+(\.\d+)?)/g);
	var $pagination = document.getElementsByClassName(that.settings.pageClass)[0].children[0];
	var priceLeft = (that.settings.type == "l")?left - 100:top - 100;
	var vn = (that.settings.repeat)?($move.children.length / 2):0;
	if(vn > n) vn = 0;
	var currentLocation = (n === undefined)?Math.floor(priceLeft / 100) * -1:Math.floor(n - vn);
	for(var i=0; i<$pagination.children.length; i++){
		var forClass = ($pagination.children[i].getAttribute("class") !== null)?$pagination.children[i].getAttribute("class"):"";
		if(forClass.indexOf("ko_player") != -1) return;
		$pagination.children[i].setAttribute("class","");
		if(i == currentLocation) $pagination.children[i].setAttribute("class","on");
	};
};


ko.prototype._moveVertical = function(set){
	var that = this;
	var $this  = document.getElementsByClassName(this.settings.ulClass)[0];
	var n = 0;
	if(set.sw == "l" || set.sw == "r"){
		n = ($this.style.left == "")?0:Number(Math.floor(Number($this.style.left.match(/(\-?\d+(\.\d+)?)/g) * 0.01)) * 100);
	}else if(set.sw == "u" || set.sw == "d"){
		n = ($this.style.top == "")?0:Number(Math.floor(Number($this.style.top.match(/(\-?\d+(\.\d+)?)/g)) * 0.01) * 100);
	}else{
		n = true;
	};
	var max = document.getElementById(this.settings.wrap).children[0].children.length;
	var maxPrice = (document.getElementById(this.settings.wrap).children[0].children.length - 1) * -100;
	var halfMax = max / 2;
	var halfMaxPrice = (halfMax - 1) * -100;
	var index = (n * -0.01);
	if(that.settings.animate){
		return;
	};
	that.settings.animate = true;
	clearInterval(that.settings.timer);
	if(that.settings.loop) that._loopCancel();
	if(set.sw == "d"){
		index++;
		set.mPrice = Number(n) - 100;
		if(that.settings.repeat == false && maxPrice == n) return;
		if(that.settings.repeat && maxPrice == n){
			$this.style.top = ((halfMax - 1) * -100) + "%";
			set.mPrice = ((halfMax - 1) * -100) - 100;
			n = ((halfMax - 1) * -100);
		};
		if(set.ind !== undefined){
			var vInd = 0;
			if(that.settings.repeat && n <= halfMaxPrice){
				vInd = (halfMax);
			};
			set.mPrice = (Number(set.ind) + Number(vInd)) * -100;
		};
		this.settings.timer = setInterval(function(){
			if(n <= set.mPrice) n = set.mPrice;
			$this.style.top = n+"%";
			if(n <= set.mPrice){
				clearInterval(that.settings.timer);
				if(that.settings.loop) that._loopStart();
				that.settings.animate = false;
			};
			n -= Number(that.settings.n);
		},that.settings.delay);
	}else if(set.sw == "u"){
		if(index == 0){
			index = halfMax - 1;
		}else{
			index--;
		};
		set.mPrice = Number(n) + 100;
		if(that.settings.repeat && n >= 0){
			$this.style.top = ((halfMax) * -100) + "%";
			set.mPrice = ((halfMax) * -100) + 100;
			n = ((halfMax) * -100);
		};
		if(set.ind !== undefined){
			var vInd = 0;
			if(that.settings.repeat && n <= halfMaxPrice){
				vInd = (halfMax);
			};
			set.mPrice = (Number(set.ind) + Number(vInd)) * -100;
		};
		this.settings.timer = setInterval(function(){
			if(n >= set.mPrice) n = set.mPrice;
			$this.style.top = n+"%";
			if(n >= set.mPrice){
				clearInterval(that.settings.timer);
				if(that.settings.loop) that._loopStart();
				that.settings.animate = false;
			};
			n = Number(n) + Number(that.settings.n);
		},that.settings.delay);
	}else if(set.sw == "l"){
		index++;
		set.mPrice = Number(n) - 100;
		if(!that.settings.repeat && n <= maxPrice){
			that.settings.animate = false;
			return;
		};
		if(that.settings.repeat && maxPrice >= n){
			$this.style.left = ((halfMax - 1) * -100) + "%";
			set.mPrice = ((halfMax - 1) * -100) - 100;
			n = ((halfMax - 1) * -100);
		};
		if(set.ind !== undefined){
			if(that.settings.repeat && n <= halfMaxPrice){
				$this.style.left = (Number(n) - Number(halfMaxPrice))+"%";
			};
			set.mPrice = Number(set.ind) * -100;
		};
		this.settings.timer = setInterval(function(){
			if(n <= set.mPrice) n = set.mPrice;
			$this.style.left = n+"%";
			if(n <= set.mPrice){
				clearInterval(that.settings.timer);
				if(that.settings.loop) that._loopStart();
				that.settings.animate = false;
			};
			n -= Number(that.settings.n);
		},that.settings.delay);
	}else if(set.sw == "r"){
		if(index == 0){
			index = halfMax - 1;
		}else{
			index--;
		};
		set.mPrice = Number(n) + 100;
		if(!that.settings.repeat && n >= 0){
			that.settings.animate = false;
			return;
		};
		if(that.settings.repeat && 0 <= n){
			$this.style.left = ((halfMax) * -100) + "%";
			set.mPrice = ((halfMax) * -100) + 100;
			n = ((halfMax) * -100);
		};
		if(set.ind !== undefined){
			if(that.settings.repeat && n <= halfMaxPrice){
				$this.style.left = (Number(n) - Number(halfMaxPrice))+"%";
			};
			set.mPrice = Number(set.ind) * -100;
		};
		this.settings.timer = setInterval(function(){
			if(n >= set.mPrice) n = set.mPrice;
			$this.style.left = n+"%";
			if(that.settings.loop) that._loopStart();
			if(n >= set.mPrice){
				clearInterval(that.settings.timer);
				that.settings.animate = false;
			};
			n = Number(n) + Number(that.settings.n);
		},that.settings.delay);
	};
	if(that.settings.paging) {
		if(index >= halfMax && that.settings.repeat) index -= halfMax;
		if(set.ind !== undefined) index = set.ind;
		that._paginationControll(index);
	};
	if(that.settings.loop) that._loopStart();
};

ko.prototype._wheel = function(options){
	var that = this;
	if(that.settings.wheelAc){
		var $page = (that.settings.paging)?document.getElementsByClassName(that.settings.pageClass)[0].children[0]:false;
		var $parent = document.getElementById(that.settings.wrap);
		var ul = document.getElementsByClassName(that.settings.ulClass)[0];
		var max = Number(ul.children.length - 1);
		var maxPrice = max * -100;
		var halfMax = ((max + 1) / 2);
		var cuPosition = 0;
		$parent.addEventListener("wheel",had,false);
		function had(e){
			e.cancelBubble = true;
			if(that.settings.animate) return;
			var delta = (e.wheelDelta)?e.wheelDelta:e.deltaY;
			if(that.settings.type == "v"){
				cuPosition = Number(ul.style.top.match(/\-?\d+/g));
				var index = Math.floor(cuPosition * -0.01);
				if(index >= halfMax && that.settings.repeat) index -= halfMax;
				if(delta > 0){
					if(!that.settings.repeat && (maxPrice < cuPosition)){
						that._moveVertical({sw:"d"});
					};
				}else if(delta < 0){
					if(!that.settings.repeat && 0 > cuPosition){
						that._moveVertical({sw:"u"});
					};
				};
			}else if(that.settings.type == "l"){
				cuPosition = Number(ul.style.left.match(/\-?\d+/g));
				var index = cuPosition * -0.01;
				if(index >= halfMax && that.settings.repeat) index -= halfMax;
				if(delta > 0){
					if(maxPrice < cuPosition || that.settings.repeat){
						that._moveVertical({sw:"l"});
					};
				}else if(delta < 0){
					if(0 > cuPosition || that.settings.repeat){
						that._moveVertical({sw:"r"});
					};
				};
			};
		};
	};
};

ko.prototype.init = function(options){
	this._extend(options);
	this._setDiv();
	this._wheel();
};