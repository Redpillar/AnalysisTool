
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
        const _this = event.currentTarget;
        const _content = _this.parentNode;
        const check = (_content.parentNode.getAttribute("id") === "rnb")?true:false;
        const _width = _this.parentNode.clientWidth;
        const _first_pageX = event.pageX;
        const check_parent = _this.classList.contains("parent");
        const min = 100;
        const max = 1000;
        const _fn_window_move = ()=>{
            if(event.stopPropagation){
                event.stopPropagation();
            }else{
                event.cancelBubble = true;
            }
            event.preventDefault();
            if(window_up_sw){
                _fn_window_up();  
            }else{
                const _w = (check)?_width + _first_pageX - event.pageX:_width + event.pageX - _first_pageX;
                const _a = (_w < min)?min:(_w > max)?max:_w;
                _content.style.width = _a + "px";
                if(check_parent) _content.parentNode.style.width = _a + "px";
            }
        }
        const _fn_window_up = ()=>{
            window_up_sw = true;
            window.removeEventListener("mousemove", _fn_window_move);
            window.removeEventListener("mouseup",_fn_window_up);
            document.body.classList.remove("col-resize");
            if(check_parent) _content.parentNode.classList.add("t");
        }
        if(check_parent) _content.parentNode.classList.remove("t");
        window.addEventListener("mousemove",_fn_window_move);
        window.addEventListener("mouseup",_fn_window_up);
    }
    const splitter_vertical_down = ()=>{
        window_up_sw = false;
        document.body.classList.add("row-resize");
        const _this = event.currentTarget;
        const _content = _this.parentNode;
        const check = _content.classList.contains("content_both");
        const _height = _this.parentNode.clientHeight;
        const _first_pageY = event.pageY;
        const min = 100;
        const max = 1000;

        const _fn_window_move = ()=>{
            if(event.stopPropagation){
                event.stopPropagation();
            }else{
                event.cancelBubble = true;
            }
            event.preventDefault();
            if(window_up_sw){
                _fn_window_up();  
            }else{
                const _h = (check)?_height + _first_pageY - event.pageY:_height + event.pageY - _first_pageY;
                const _a = (_h < min)?min:(_h > max)?max:_h;
                _content.style.height = _a + "px";
            }
        }
        const _fn_window_up = ()=>{
            window_up_sw = true;
            window.removeEventListener("mousemove", _fn_window_move);
            window.removeEventListener("mouseup",_fn_window_up);
            document.body.classList.remove("row-resize");
        }
        window.addEventListener("mousemove",_fn_window_move);
        window.addEventListener("mouseup",_fn_window_up);
        
    }
    const _splitters = document.querySelectorAll(".splitter_handler");
    _splitters.forEach((s,i)=>{
        if(s.classList.contains("horizontal")) s.addEventListener("mousedown",splitter_horizontal_down);
        if(s.classList.contains("vertical")) s.addEventListener("mousedown",splitter_vertical_down);
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
            const _lnbWing = document.querySelector(".content_wing_left");
            const _w = Number(window.getComputedStyle(_lnbWing).width.match(/\d+/g)[0]);
            console.log("_w : ",_w);
            if(_w === 0){
                _lnbWing.style.width = window.getComputedStyle(_lnbWing.querySelector(".side_wing")).width;
            }else{
                _lnbWing.style.width = "0px";
            }
        })
    })

}