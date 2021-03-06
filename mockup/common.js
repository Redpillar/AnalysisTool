

HTMLElement.prototype.getParent = function(n){
    const _firstWord = n.slice(0,1);
    let type = null;
    let word = n;
    let temp = null;
    switch(_firstWord){
        case(".") :
            type = "class";
            break;
        case("#") :
            type = "id";
            break;
        default : 
            type = "tag" ;
            break;
    }
    if(type !== "tag") word = word.slice(1,word.length);
    const innerFn = (e)=>{
        let check = null;
        if(type === "class"){
            check = e.classList.contains(word);
        }else if(type === "id"){
            const _id = e.id;
            if(_id === word) check = true;
        }else{
            const _tagName = e.tagName.toLowerCase();
            if(_tagName === word) check = true;
        }
        if(check){
            temp = e;
        }else if(e.parentNode && e.tagName.toLowerCase() !== "html"){
            innerFn(e.parentNode)
        }
    }
    innerFn(this);
    return temp;
}

HTMLElement.prototype.getIndex = function(){
    let idx = null;
    const _parent = this.parentNode;
    const _children = _parent.children;
    if(_children.length === 1) return 0;
    for(let i=0; i<_children.length; i++){
        if(_children[i] === this){
            idx = i;
            break;
        }
    }
    return idx;
}
/* event bubble */
const cancleBubbleEv = ()=>{
    if(event.stopPropagation){
        event.stopPropagation();
    }else{
        event.cancelBubble = true;
    }
}


/* content left wing */
const accordion_menu = ()=>{
    cancleBubbleEv();
    const _li = event.currentTarget.getParent("li");
    _li.classList.toggle("closed");
    _li.classList.add("transition_h");
    if(_li.classList.contains("closed")){
        _li.setAttribute("h",_li.clientHeight);
        _li.style.height = "28px";
    }else{
        _li.style.height = _li.getAttribute("h") + "px";
    }
}


/* hamburger menu */
let timer_folder_labelCheck = null;
const folder_lnbWing = ()=>{
    cancleBubbleEv();
    const _lnbWing = document.querySelector(".content_wing_left");
    const _w = Number(window.getComputedStyle(_lnbWing).width.match(/\d+/g)[0]);
    const _content = document.querySelector("#content .content_box");
    if(_w === 0){
        const width = Number(window.getComputedStyle(_lnbWing.querySelector(".side_wing")).width.match(/\d+/g)[0]);
        console.log("width : ",width)
        _lnbWing.style.width = width + "px";
        _content.style.width = "calc(100% - "+width+"px)";
    }else{
        _lnbWing.style.width = "0px";
        _content.style.width = "calc(100% - 0px)";
    }
    if(timer_folder_labelCheck) clearTimeout(timer_folder_labelCheck);
    timer_folder_labelCheck = setTimeout(()=>{
        check_tab_label_size();
    },600);
}

/* lnb */
const toggle_lnb = ()=>{
    cancleBubbleEv();
    const _this = event.currentTarget;
    for(let i=0; i<_this.parentNode.children.length; i++){
        if(_this.parentNode.children[i] === _this){
            _this.parentNode.children[i].classList.add("active");
        }else{
            _this.parentNode.children[i].classList.remove("active");
        }
    }
}

/* tab */
const onClick_tabLabel = ()=>{
    cancleBubbleEv()
    const _this = event.currentTarget;
    const _children = _this.parentNode.querySelectorAll("li");
    const _contents = _this.getParent(".tab-box").querySelectorAll(".tab-box-content > .tab-content-inner")
    _children.forEach((c,j)=>{
        if(c !== _this){
            c.classList.remove("active");
            c.classList.remove("none-line");
            _contents[j].classList.remove("active");
        }else{
            if(j > 0)c.parentNode.children[j-1].classList.add("none-line")
            c.classList.add("active");
            _contents[j].classList.add("active");
        }
    })
}
const onClick_tabRemove = ()=>{
    cancleBubbleEv();
    const _this = event.currentTarget;
    const _tabBox = _this.getParent(".tab-box");
    let _labels = _tabBox.querySelectorAll(".tab-labels > ul > li");
    if(_labels.length === 1) return;
    const _label = _this.getParent("li");
    const check = _label.classList.contains("active");
    const _idx = _label.getIndex();
    const _content = _tabBox.querySelector(".tab-box-content .tab-content-inner:nth-child("+(_idx + 1)+")");
    _label.parentNode.removeChild(_label);
    _content.parentNode.removeChild(_content)
    if(check){
        _labels = _tabBox.querySelectorAll(".tab-labels > ul > li");
        const _contents = _tabBox.querySelectorAll(".tab-box-content > .tab-content-inner");
        const idx = (_labels.length <= _idx)?_labels.length - 1:_idx;
        _labels[idx].classList.add("active");
        _contents[idx].classList.add("active");
    }
    check_tab_label_size();
}
const onClick_tabAdd = ()=>{
    cancleBubbleEv()
    const _this = event.currentTarget;
    const _tabBox = _this.getParent(".tab-box");
    const _label = _tabBox.querySelector(".tab-labels > ul");
    const _content = _tabBox.querySelector(".tab-box-content");
    const _idx = _label.children.length + 1;
    const label_source = 'Detth'+_idx+'<button class="tab-label-close-btn" onclick="onClick_tabRemove()"></button>';
    const content_source = '<div class="tab-layout-wrap v"><!-- row --><div class="tab-layout-row"><div class="tab-layout-cell">'+_idx+'-1</div></div></div>';
    const el_lebel = document.createElement("li");
    const el_content = document.createElement("li");
    el_lebel.setAttribute("onclick","onClick_tabLabel()");
    el_lebel.innerHTML = label_source;
    el_content.classList.add("tab-content-inner")
    el_content.innerHTML = content_source;
    _label.appendChild(el_lebel);
    _content.appendChild(el_content);
    check_tab_label_size();
}
const onClick_tab_move = ()=>{
    cancleBubbleEv()
    const _this = event.currentTarget;
    const _tabBox = _this.getParent(".tab-box");
    const _scrollBox = _tabBox.querySelector(".tab-labels");
    const _label = _tabBox.querySelector(".tab-labels > ul");
    const type = (_this.classList.contains("l"))?"l":"r";
    const max = _label.clientWidth - _label.parentNode.clientWidth;
    const scroll_left = _scrollBox.scrollLeft;
    const _unit = _label.children[0].clientWidth + 20;
    const calc = (type === "l")?scroll_left - _unit:scroll_left + _unit;
    console.log("max : ",max);
    console.log("type  : ",type );
    console.log("scroll_left  : ",scroll_left );
    console.log("_unit  : ",_unit );
    console.log("%  : ",calc % _unit);
    if(type === 'l' && calc % _unit !== 0){
        _scrollBox.scrollLeft = calc - (calc % _unit);
    }else if(type === 'r' && calc % _unit !== 0){
        _scrollBox.scrollLeft = calc - (calc % _unit);
    }else{
        _scrollBox.scrollLeft = calc;
    }
}
const check_tab_label_size = ()=>{
    const _wrap = document.querySelector(".tab-box .tab-labels");
    const _tab = document.querySelector(".tab-box .tab-labels > ul");
    const width_wrap = _wrap.clientWidth;
    const width_tab = _tab.clientWidth;
    console.log(width_wrap,"  :  ",width_tab)
    if(width_wrap < width_tab){
        _wrap.getParent(".tab-box-head").classList.add("arr_on");
    }else{
        _wrap.getParent(".tab-box-head").classList.remove("arr_on");
    }
}

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
            if(check_parent){
                const _wrap = _content.getParent("#content");
                _wrap.querySelector(".content_wing_left").style.width = _a + "px";
                _wrap.querySelector(".content_box").style.width = "calc(100% - "+ _a + "px)";
            };
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
        if(check_parent) document.getElementById("content").classList.add("t");
        check_tab_label_size();
    }
    if(check_parent) document.getElementById("content").classList.remove("t");
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

/* tree */
const onClick_tree_arr = ()=>{
    cancleBubbleEv();
    const _this = event.currentTarget.parentNode.parentNode;
    _this.classList.toggle("open");
}

/* window load */

window.onload = function(){
    document.querySelector("#gnb > ul").addEventListener("click",function(){
        document.querySelector("#wrap").classList.toggle("open_rnb_wing");
    })
    check_tab_label_size();
}

/* window resize event */
window.addEventListener("resize",()=>{
    check_tab_label_size();
})