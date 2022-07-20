
window.onload = function(){


    /* event bubble */
    const cancleBubbleEv = ()=>{
        if(event.stopPropagation){
            event.stopPropagation();
        }else{
            event.cancelBubble = true;
        }
    }


    document.querySelector(".lnb_left > ul").addEventListener("click",function(){
        document.querySelector("#wrap").classList.toggle("open_lnb_wing");
    })
    document.querySelector("#gnb > ul").addEventListener("click",function(){
        document.querySelector("#wrap").classList.toggle("open_rnb_wing");
    })


    /* splitter */
    let window_up_sw = false;
    const splitter_horizontal_down = ()=>{
        window_up_sw = false;
        document.body.classList.add("col-resize");
        const _type = (event.touches)?'t':'m';
        const _this = event.currentTarget;
        const _content = _this.parentNode;
        const check = (_content.parentNode.getAttribute("id") === "rnb")?true:false;
        const _width = _this.parentNode.clientWidth;
        const _x = (_type == 'm')?event.pageX:event.touches[0].pageX;
        const _first_pageX = _x;
        const check_parent = _this.classList.contains("parent");
        const min = 28;
        const max = 1000;
        const _fn_window_move = ()=>{
            const _mx = (_type == 'm')?event.pageX:event.touches[0].pageX;
            if(event.stopPropagation){
                event.stopPropagation();
            }else{
                event.cancelBubble = true;
            }
            event.preventDefault();
            if(window_up_sw){
                _fn_window_up();  
            }else{
                const _w = (check)?_width + _first_pageX - _mx:_width + _mx - _first_pageX;
                const _a = (_w < min)?min:(_w > max)?max:_w;
                _content.style.width = _a + "px";
                if(check_parent) _content.parentNode.style.width = _a + "px";
            }
        }
        const _fn_window_up = ()=>{
            window_up_sw = true;
            if(_type == 'm'){
                window.removeEventListener("mousemove", _fn_window_move);
                window.removeEventListener("mouseup",_fn_window_up);
            }else{
                window.removeEventListener("touchmove", _fn_window_move);
                window.removeEventListener("touchend",_fn_window_up);
            }
            document.body.classList.remove("col-resize");
            if(check_parent) _content.parentNode.classList.add("t");
        }
        if(check_parent) _content.parentNode.classList.remove("t");
        if(_type == 'm'){
            window.addEventListener("mousemove",_fn_window_move);
            window.addEventListener("mouseup",_fn_window_up);
        }else{
            window.addEventListener("touchmove",_fn_window_move);
            window.addEventListener("touchend",_fn_window_up);
        }
    }
    const splitter_vertical_down = ()=>{
        window_up_sw = false;
        document.body.classList.add("row-resize");
        const _type = (event.touches)?'t':'m';
        const _this = event.currentTarget;
        const _content = _this.parentNode;
        const check = _content.classList.contains("content_both");
        const _height = _this.parentNode.clientHeight;
        const _y = (_type == 'm')?event.pageY:event.touches[0].pageY;
        const _first_pageY = _y;
        const min = 28;
        const max = 1000;
        const _closed_check = _this.parentNode.classList.contains("closed");
        if(_closed_check) return;
        _this.parentNode.classList.remove("transition_h");
        const _fn_window_move = ()=>{
            const _my = (_type == 'm')?event.pageY:event.touches[0].pageY;
            if(event.stopPropagation){
                event.stopPropagation();
            }else{
                event.cancelBubble = true;
            }
            event.preventDefault();
            if(window_up_sw){
                _fn_window_up();  
            }else{
                const _h = (check)?_height + _first_pageY - _my:_height + _my - _first_pageY;
                const _a = (_h < min)?min:(_h > max)?max:_h;
                _content.style.height = _a + "px";
            }
        }
        const _fn_window_up = ()=>{
            window_up_sw = true;
            if(_type == 'm'){
                window.removeEventListener("mousemove", _fn_window_move);
                window.removeEventListener("mouseup",_fn_window_up);
            }else{
                window.removeEventListener("touchmove", _fn_window_move);
                window.removeEventListener("touchend",_fn_window_up);
            }
            document.body.classList.remove("row-resize");
        }
        if(_type == 'm'){
            window.addEventListener("mousemove",_fn_window_move);
            window.addEventListener("mouseup",_fn_window_up);
        }else{
            window.addEventListener("touchmove",_fn_window_move);
            window.addEventListener("touchend",_fn_window_up);
        }
        
    }
    const _splitters = document.querySelectorAll(".splitter_handler");
    _splitters.forEach((s,i)=>{
        if(s.classList.contains("horizontal")) s.addEventListener("mousedown",splitter_horizontal_down);
        if(s.classList.contains("horizontal")) s.addEventListener("touchstart",splitter_horizontal_down);
        if(s.classList.contains("vertical")) s.addEventListener("mousedown",splitter_vertical_down);
        if(s.classList.contains("vertical")) s.addEventListener("touchstart",splitter_vertical_down);
    })

    /* tree */
    const _treeLines = document.querySelectorAll(".an_tree .anTree_wrap .treeLine .arr");
    _treeLines.forEach((t,i)=>{
        t.addEventListener("click",()=>{
            cancleBubbleEv();
            const _this = event.currentTarget.parentNode.parentNode;
            _this.classList.toggle("open");
        })
    })

    /* lnb */
    const _lnbBtns = document.querySelectorAll(".lnb_left > .lnb_left_menu > li");
    _lnbBtns.forEach((l,i)=>{
        l.addEventListener("click",()=>{
            cancleBubbleEv();
            const _this = event.currentTarget;
            for(let i=0; i<_this.parentNode.children.length; i++){
                if(_this.parentNode.children[i] === _this){
                    _this.parentNode.children[i].classList.add("active");
                }else{
                    _this.parentNode.children[i].classList.remove("active");
                }
            }
        })
    })

    /* hamburger menu */
    const _ham = document.querySelector(".lnb_left_top_button");
    _ham.addEventListener("click",()=>{
        cancleBubbleEv();
        const _lnbWing = document.querySelector(".content_wing_left");
        const _w = Number(window.getComputedStyle(_lnbWing).width.match(/\d+/g)[0]);
        if(_w === 0){
            _lnbWing.style.width = window.getComputedStyle(_lnbWing.querySelector(".side_wing")).width;
        }else{
            _lnbWing.style.width = "0px";
        }
    })


    /* content left wing */
    const _con_left_wings = document.querySelectorAll(".side_wing .side_wing_tit");
    _con_left_wings.forEach((w,i)=>{
        w.addEventListener("click",()=>{
            cancleBubbleEv();
            const _li = event.currentTarget.parentNode.parentNode;
            _li.classList.toggle("closed");
            _li.classList.add("transition_h");
            if(_li.classList.contains("closed")){
                _li.setAttribute("h",_li.clientHeight);
                _li.style.height = "28px";
            }else{
                _li.style.height = _li.getAttribute("h") + "px";
            }
        })
    })


}