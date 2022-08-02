

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

HTMLElement.prototype.trigger = function(eventName){
    const ev = document.createEvent("HTMLEvents");
    ev.initEvent(eventName,true,true);
    this.dispatchEvent(ev);
}
/* event bubble */
const cancleBubbleEv = (s)=>{
    if(s === undefined) cancle_toggle_open();
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
        _li.style.height = "29px";
    }else{
        _li.style.height = _li.getAttribute("h") + "px";
    }
}


/* hamburger menu */
let timer_folder_labelCheck = null;
const folder_lnbWing = ()=>{
    if(event.currentTarget.getAttribute("disabled") !== null) return;
    cancleBubbleEv();
    const _lnbWing = document.querySelector(".content_wing_left");
    const _w = Number(window.getComputedStyle(_lnbWing).width.match(/\d+/g)[0]);
    const _content = document.querySelector("#content #content_wrap");
    if(_w === 0){
        const width = Number(window.getComputedStyle(_lnbWing.querySelector(".side_wing")).width.match(/\d+/g)[0]);
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

/* wing */
const folder_rnbWing = ()=>{
    cancleBubbleEv();
    const _wrap = document.querySelector("#wrap");
    _wrap.classList.toggle("open_rnb_wing");

}

/* lnb */
const toggle_lnb = ()=>{
    cancleBubbleEv();
    const _this = event.currentTarget;
    const idx = _this.getIndex();
    const _contents = document.querySelectorAll("#content_wrap .content_box");
    const _leftWings = document.querySelectorAll(".content_wing_left > .side_wing");
    const _hamburger_menu = document.querySelector(".lnb_left_top_button");
    for(let i=0; i<_this.parentNode.children.length; i++){
        if(i === idx){
            _this.parentNode.children[i].classList.add("active");
            _contents[i].setAttribute("active","");
        }else{
            _this.parentNode.children[i].classList.remove("active");
            _contents[i].removeAttribute("active");
        }
    }
    if(idx === 2){
        const _lnbWing = document.querySelector(".content_wing_left");
        const _w = Number(window.getComputedStyle(_lnbWing).width.match(/\d+/g)[0]);
        if(_w > 0) folder_lnbWing();
        _hamburger_menu.setAttribute("disabled","");
    }else{
        _hamburger_menu.removeAttribute("disabled");
        _leftWings.forEach((w,i)=>{
            if(i === idx){
                w.classList.add("active");
            }else{
                w.classList.remove("active");
            }
        })
    }
}

/* content both textarea */
let itmer_both = null;
const toggle_both_textarea = ()=>{
    cancleBubbleEv();
    const _this = event.currentTarget;
    const _wrap = document.querySelector("#content_wrap");
    const _both = _this.getParent(".content_both_box");
    const _h = (_both.clientHeight === 0)?_both.scrollHeight:0;
    _wrap.classList.add("ani_bothTextarea");
    _both.style.height = _h + "px";
    console.log("height : ",_h)
    if(_h === 0){
        _this.classList.add("closed");
    }else{
        _this.classList.remove("closed");
    }
}

/* tab */
const onClick_tabLabel = ()=>{
    cancleBubbleEv();
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
const onMouseOver_tab = ()=>{
    const _this = event.currentTarget;
    const _idx = _this.getIndex();
    const _labels = _this.getParent("ul").querySelectorAll("li");
    if(_idx !== 0){
        _labels[_idx - 1].classList.add("label-previous");
    }
}
const onMouseOut_tab = ()=>{
    const _this = event.currentTarget;
    const _idx = _this.getIndex();
    const _labels = _this.getParent("ul").querySelectorAll("li");
    if(_idx !== 0){
        _labels[_idx - 1].classList.remove("label-previous");
    }
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
    const label_source = '<span>Detth'+_idx+'</span><button class="tab-label-close-btn" onclick="onClick_tabRemove()"></button>';
    const content_source = '<div class="tab-layout-wrap v"><!-- row --><div class="tab-layout-row"><div class="tab-layout-cell">'+_idx+'-1</div></div></div>';
    const el_lebel = document.createElement("li");
    const el_content = document.createElement("li");
    el_lebel.setAttribute("onclick","onClick_tabLabel()");
    el_lebel.setAttribute("onmouseover","onMouseOver_tab()");
    el_lebel.setAttribute("onmouseout","onMouseOut_tab()");
    el_lebel.setAttribute("title","Depth"+_idx);
    el_lebel.innerHTML = label_source;
    el_content.classList.add("tab-content-inner")
    el_content.innerHTML = content_source;
    _label.appendChild(el_lebel);
    _content.appendChild(el_content);
    check_tab_label_size();
}
const onClick_tab_move = ()=>{
    cancleBubbleEv();
    const _this = event.currentTarget;
    const _tabBox = _this.getParent(".tab-box");
    const _scrollBox = _tabBox.querySelector(".tab-labels");
    const _label = _tabBox.querySelector(".tab-labels > ul");
    const type = (_this.classList.contains("l"))?"l":"r";
    const max = _label.clientWidth - _label.parentNode.clientWidth;
    const scroll_left = _scrollBox.scrollLeft;
    const _unit = _label.children[0].clientWidth + 20;
    const calc = (type === "l")?scroll_left - _unit:scroll_left + _unit;
    if(type === 'l' && calc % _unit !== 0){
        const _c = ((calc % _unit) <= 0)?0:calc + (_unit - (calc % _unit));
        _scrollBox.scrollLeft = _c;
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
                const _idx = (_content.getIndex() === 0)?1:0;
                const _children = _content.parentNode.children[_idx];
                console.log(_idx,":",_children);
                _wrap.querySelector(".content_wing_left").style.width = _a + "px";
                _wrap.querySelector("#content_wrap").style.width = "calc(100% - "+ _a + "px)";
                _children.style.width = _a + "px";
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
    const _closed_check = _this.parentNode.classList.contains("closed");
    const _both_box = _content.querySelector(".both_box_inner");
    const _both_textarea = _content.querySelector(".both_box_textarea textarea");
    const min = (_both_textarea)?120:28;
    const max = 1000;
    _content.classList.add("active-movement");
    if(_content.parentNode.parentNode.classList.contains("ani_bothTextarea")) (_content.parentNode.parentNode.classList.remove("ani_bothTextarea"))
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
            const _h = (check || _both_box)?_height + _first_pageY - _my:_height + _my - _first_pageY;
            const _a = (_h < min)?min:(_h > max)?max:_h;
            _content.style.height = _a + "px";
            if(_both_box) _both_box.style.height = _a + "px";
            if(_both_textarea) _both_textarea.style.height = (_a - 94) + "px";
        }
    }
    const _fn_window_up = ()=>{
        window_up_sw = true;
        _content.classList.remove("active-movement");
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
const setBothTextAreaHeight = ()=>{
    const _both_box = document.querySelector(".both_box_inner");
    const _textarea = document.querySelector(".both_box_textarea textarea");
    _both_box.style.height = "150px";
    _textarea.style.height = "56px"
}
/* lnb active */
const setLnbContent = ()=>{
    let idx = (document.querySelector("#lnb .lnb_left_menu > li.active"))?document.querySelector("#lnb .lnb_left_menu > li.active").getIndex():0;
    const _lnbs = document.querySelectorAll("#lnb .lnb_left_menu > li");
    const _contents = document.querySelectorAll("#content_wrap > .content_box");
    _lnbs.forEach((l,i)=>{
        if(i === idx){
            l.classList.add("active");
            _contents[i].setAttribute("active","");
        }else{
            l.classList.remove("active");
            _contents[i].removeAttribute("active","");
        }
    })
}

/* tree */
const onClick_tree_arr = ()=>{
    cancleBubbleEv();
    const _this = event.currentTarget.parentNode.parentNode;
    _this.classList.toggle("open");
}

/* checkbox tree */
const changed_tree_checkbox = ()=>{
    const _this = event.currentTarget;
    const _checked = _this.checked;
    const fn_children = ()=>{
        const _children = (_this.getParent("li").querySelector("ul"))?_this.getParent("li").querySelector("ul").querySelectorAll("input"):[];
        _children.forEach((input,i)=>{
            input.checked = _checked;323
        })
    }
    const fn_parent = (input)=>{
        const searchChildrensCheckbox = (input)=>{
            const temp = {inputs:[],checked:null,counter_false:0,counter_true:0,counter_line:0};
            const _c = input.getParent("ul").children;
            for(let i=0; i<_c.length; i++){
                const _i = _c[i].querySelector("input");
                const check_checked = (_i.getAttribute("line") === "")?"line":_i.checked;
                temp.inputs.push(_i.querySelector("input"));
                if(check_checked === "line"){
                    temp.counter_line++;
                }else if(!check_checked){
                    temp.counter_false++;
                }else{
                    temp.counter_true++;
                }
            }
            if((temp.counter_false > 0 && temp.counter_true > 0) || temp.counter_line > 0){
                temp.checked = "line";
            }else if(temp.counter_false > 0){
                temp.checked = false;
            }else if(temp.counter_true > 0){
                temp.checked = true;
            }
            return temp;
        }
        const _inputs = searchChildrensCheckbox(input);
        const _parent = input.getParent("ul").getParent("li").querySelector(".treeLine > .an_checkbox input");
        const check = input.getParent("ul").parentNode.classList.contains("anTree_wrap");
        if(check) return;
        if(_inputs.checked === "line"){
            _parent.setAttribute("line","");
        }else{
            _parent.removeAttribute("line");
            _parent.checked = _inputs.checked;
        }
        fn_parent(_parent);
    };
    _this.removeAttribute("line");
    fn_children();
    fn_parent(_this);
}

/* gnb sub menu */
const gnb_sumMenu_toggle = ()=>{
    cancleBubbleEv(false);
    const _this = event.currentTarget;
    const _idx = _this.getIndex();
    const _menus = document.querySelectorAll(".gnb_left_subMenu_wrap .gnb_left_subMenu");
    const top = _this.getBoundingClientRect().top + _this.getBoundingClientRect().height + 10;
    const left = _this.getBoundingClientRect().left + (_this.getBoundingClientRect().width / 2) + 12;

    _menus.forEach((m,i)=>{
        if(i === _idx){
            const check = m.classList.contains("toggle_open")
            if(!check){
                m.classList.add("toggle_open");
            }else{
                m.classList.remove("toggle_open");
            }
            m.style.top = top + "px";
            m.style.left = left + "px";
        }else{
            m.classList.remove("toggle_open");
        }
    })
}


/* cancel toggle open */
const cancle_toggle_open = ()=>{
    const _toggles = document.querySelectorAll(".toggle_open");
    _toggles.forEach( (e,i)=> {
        e.classList.remove("toggle_open");
    });
}

/* select */
const menusSetting = ()=>{
    const _menus = document.querySelectorAll(".an_select_menu");
    const checked_menuWrap = document.querySelector("#an_select_menus_wrap");
    if(!checked_menuWrap){
        const wrap = document.createElement("div");
        document.body.appendChild(wrap);
        wrap.id = "an_select_menus_wrap";
    }
    const menu_wrap = document.querySelector("#an_select_menus_wrap");
    _menus.forEach((m,i)=>{
        const _tit = m.getParent(".an_select").querySelector(".an_select_tit");
        const txt = m.querySelector("ul > li").innerHTML;
        m.parentNode.menu = m;
        m.parent = m.parentNode;
        _tit.innerText = txt;
        menu_wrap.appendChild(m);
    })
}

const getChecked_selectMenu_line = (e)=>{
    const _this = e;
    const _p_style = _this.parent.getBoundingClientRect();
    const _t = _p_style.top + _this.clientHeight;
    const w_h = window.innerHeight;
    if(_t > w_h){
        return true;
    }else{
        return false;
    }
}

const select_menuStyle_setting = (e)=>{
    const m = e;
    const _p = m.parent;
    const checked_line = getChecked_selectMenu_line(m);
    const w = (_p.clientWidth * 0.6) - 3;
    const t = (checked_line)?_p.getBoundingClientRect().top - m.clientHeight + _p.clientHeight:_p.getBoundingClientRect().top;
    const l = _p.getBoundingClientRect().left;
    m.style.width = w + "px";
    m.style.top = t + "px";
    m.style.left = l + "px";
    if(checked_line){
        m.classList.add("reverse");
        setTimeout(()=>{
            m.scrollTop = m.scrollHeight;
        })
    }else if(!checked_line){
        m.classList.remove("reverse");
    }
}



const onclick_select = ()=>{
    cancleBubbleEv(false);
    const _this = event.currentTarget;
    const _menu = _this.menu;
    const _menus = document.querySelectorAll(".an_select_menu");
    _menus.forEach((m,i)=>{
        if(m === _menu){
            m.classList.toggle("toggle_open");
            select_menuStyle_setting(m);
        }else{
            m.classList.remove("toggle_open");
        }
    })
}

const onClick_select_menu = ()=>{
    const _this = event.currentTarget;
    const _wrap = _this.getParent(".an_select_menu").parent;
    const _input = _wrap.querySelector("input");
    const _tit = _wrap.querySelector(".an_select_tit");
    const txt = _this.innerText;
    _input.value = txt;
    // _tit.innerText = txt;
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

const setTabArrSetting = ()=> {
    const _box = document.querySelector(".tab-box-head");
    const _tab = _box.querySelector(".tab-labels");
    if(_tab.scrollWidth > _tab.clientWidth) _box.classList.add("arr_on")
}

/* window load setting */
const onloadSetting = ()=>{
    // 메인탭 arry
    setTabArrSetting();
    // lnb active
    setLnbContent();
    // tab
    check_tab_label_size();
    // 하단 textarea 높이 조절
    setBothTextAreaHeight();
    // select menu 크기 조절
    menusSetting();
}