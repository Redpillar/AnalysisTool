$(function(){
//	lnbMenu();
	lnbMenuAc();
	lnb_off();
});

function init(){
	lnbMenu();					 /* lnb */
};


/* 퍼블용 */
function lnbMenu(){
	var $l = $("#lnb_wrap");
	if($l.length) init();
	function init(){
		$(".lnb_rightWrap").click(function(){
			$l.toggleClass("lnbOpen");
		});
	};
};
var selTimer; 
/* 퍼블용 */
function lnbMenuAc(){
	$lm = $(".lnb_menuWrap > .lnb_depth");
	if($lm.length) init();
	function init(){
		$lm.click(function(){
			$(this).toggleClass("open").siblings().removeClass("open");
		});
		$lm.find("ul").click(function(e){
			e.stopPropagation();
		});
	};
};

/* 퍼블용 */
function lnb_off(){
	var $elx = $(".lnb_depth");
	if($elx.length) init();
	function init(){
		$elx.click(function(e){
			if(e.stopPropagation){
				e.stopPropagation();
			}else{
				e.cancelBubble = true;
			};
		});
	};
};
/* 퍼블용 */
function lnbapp(){
	var lnbSource = "<div class='lnb_innerWrap'><div class='lnb_leftWrap'><!-- logo --><div class='lnb_topLogo'><a href='javascript:;'><img src='../../images/logo_lnb_s.png' alt='logo'><img src='../../images/logo_lnb.png' alt='logo'></a></div><!-- 로그인 정보 --><div class='lnb_loginInfo'><!-- 아이콘 사진 --><div class='lnb_liIcon'><div class='lnb_iconInnerWrap'></div></div><!-- 이름 직책 --><p class='lnb_liName'>홍길동 · 선임</p><!-- 부서 --><p class='lnb_liDept'>디스플레이</p></div><!-- 메뉴 --><div class='lnb_menu'><!-- 뒤로가기 버튼 --><a href='javascript:;' class='btn_lnb'>PreDS Mecha</a><!-- menu list --><div class='lnb_menuWrap'><!-- depth1 --><div class='lnb_depth'><div class='tit'><a href='javascript:;'>Module</a></div><ul><!-- depth2 --><li><div class='lnb_depth'><div class='tit'><a href='javascript:;'>Simulation</a></div><ul><!-- depth3 --><li><div class='lnb_depth'><div class='tit'><a href='javascript:;'>Run Simulation</a></div></div></li><!-- // depth3 --><!-- depth3 --><li><div class='lnb_depth'><div class='tit'><a href='javascript:;'>물성 추출</a></div></div></li><!-- // depth3 --><!-- depth3 --><li><div class='lnb_depth'><div class='tit'><a href='javascript:;'>Job Monitor</a></div></div></li><!-- // depth3 --></ul></div></li><!-- // depth2 --><!-- depth2 --><li><div class='lnb_depth'><div class='tit'><a href='javascript:;'>Management</a></div><ul><!-- depth3 --><li><div class='lnb_depth'><div class='tit'><a href='javascript:;'>Input Parameter</a></div></div></li><!-- // depth3 --></ul></div></li><!-- // depth2 --></ul></div><!-- // depth1 --><!-- depth1 --><div class='lnb_depth'><div class='tit'><a href='javascript:;'>Panel</a></div><ul><!-- depth2 --><li><div class='lnb_depth'><div class='tit'><a href='javascript:;'>Simulation</a></div><ul><!-- depth3 --><li><div class='lnb_depth'><div class='tit'><a href='javascript:;'>Run Simulation</a></div></div></li><!-- // depth3 --><!-- depth3 --><li><div class='lnb_depth'><div class='tit'><a href='javascript:;'>Job Monitor</a></div></div></li><!-- // depth3 --></ul></div></li><!-- // depth2 --><!-- depth2 --><li><div class='lnb_depth'><div class='tit'><a href='javascript:;'>Panel Curl</a></div><ul><!-- depth3 --><li><div class='lnb_depth'><div class='tit'><a href='javascript:;'>Warpage 예측 Simulation</a></div></div></li><!-- // depth3 --></ul></div></li><!-- // depth2 --><!-- depth2 --><li><div class='lnb_depth'><div class='tit'><a href='javascript:;'>Management</a></div><ul><!-- depth3 --><li><div class='lnb_depth'><div class='tit'><a href='javascript:;'>Input Parameter</a></div></div></li><!-- // depth3 --></ul></div></li><!-- // depth2 --></ul></div><!-- // depth1 --><!-- depth1 --><div class='lnb_depth'><div class='tit'><a href='javascript:;'>Bending Path</a></div><ul><!-- depth2 --><li><div class='lnb_depth'><div class='tit'><a href='javascript:;'>Simulation</a></div><ul><!-- depth3 --><li><div class='lnb_depth'><div class='tit'><a href='javascript:;'>Run Simulation</a></div></div></li><!-- // depth3 --><!-- depth3 --><li><div class='lnb_depth'><div class='tit'><a href='javascript:;'>Job Monitor</a></div></div></li><!-- // depth3 --></ul></div></li><!-- // depth2 --><!-- depth2 --><li><div class='lnb_depth'><div class='tit'><a href='javascript:;'>Management</a></div><ul><!-- depth3 --><li><div class='lnb_depth'><div class='tit'><a href='javascript:;'>Input Parameter</a></div></div></li><!-- // depth3 --></ul></div></li><!-- // depth2 --></ul></div><!-- // depth1 --><!-- depth1 --><div class='lnb_depth'><div class='tit'><a href='javascript:;'>Roller Lami</a></div><ul><!-- depth2 --><li><div class='lnb_depth'><div class='tit'><a href='javascript:;'>Simulation</a></div><ul><!-- depth3 --><li><div class='lnb_depth'><div class='tit'><a href='javascript:;'>Run Simulation</a></div></div></li><!-- // depth3 --><!-- depth3 --><li><div class='lnb_depth'><div class='tit'><a href='javascript:;'>Job Monitor</a></div></div></li><!-- // depth3 --></ul></div></li><!-- // depth2 --><!-- depth2 --><li><div class='lnb_depth'><div class='tit'><a href='javascript:;'>Management</a></div><ul><!-- depth3 --><li><div class='lnb_depth'><div class='tit'><a href='javascript:;'>Input Parameter</a></div></div></li><!-- // depth3 --></ul></div></li><!-- // depth2 --></ul></div><!-- // depth1 --><!-- depth1 --><div class='lnb_depth'><div class='tit'><a href='javascript:;'>Tray</a></div><ul><!-- depth2 --><li><div class='lnb_depth'><div class='tit'><a href='javascript:;'>Simulation</a></div><ul><!-- depth3 --><li><div class='lnb_depth'><div class='tit'><a href='javascript:;'>Run Simulation</a></div></div></li><!-- // depth3 --><!-- depth3 --><li><div class='lnb_depth'><div class='tit'><a href='javascript:;'>Job Monitor</a></div></div></li><!-- // depth3 --></ul></div></li><!-- // depth2 --><!-- depth2 --><li><div class='lnb_depth'><div class='tit'><a href='javascript:;'>Management</a></div><ul><!-- depth3 --><li><div class='lnb_depth'><div class='tit'><a href='javascript:;'>Input Parameter</a></div></div></li><!-- // depth3 --></ul></div></li><!-- // depth2 --></ul></div><!-- // depth1 --><!-- depth1 --><div class='lnb_depth'><div class='tit'><a href='javascript:;'>Vertical DR - PA팀</a></div><ul><!-- depth2 --><li><div class='lnb_depth'><div class='tit'><a href='javascript:;'>Simulation</a></div><ul><!-- depth3 --><li><div class='lnb_depth'><div class='tit'><a href='javascript:;'>Run Simulation</a></div></div></li><!-- // depth3 --><!-- depth3 --><li><div class='lnb_depth'><div class='tit'><a href='javascript:;'>Job Monitor</a></div></div></li><!-- // depth3 --></ul></div></li><!-- // depth2 --><!-- depth2 --><li><div class='lnb_depth'><div class='tit'><a href='javascript:;'>Management</a></div><ul><!-- depth3 --><li><div class='lnb_depth'><div class='tit'><a href='javascript:;'>Input Parameter</a></div></div></li><!-- // depth3 --></ul></div></li><!-- // depth2 --></ul></div><!-- // depth1 --><!-- depth1 --><div class='lnb_depth'><div class='tit'><a href='javascript:;'>Vertical DR - 연구소</a></div><ul><!-- depth2 --><li><div class='lnb_depth'><div class='tit'><a href='javascript:;'>Simulation</a></div><ul><!-- depth3 --><li><div class='lnb_depth'><div class='tit'><a href='javascript:;'>Run Simulation</a></div></div></li><!-- // depth3 --><!-- depth3 --><li><div class='lnb_depth'><div class='tit'><a href='javascript:;'>Job Monitor</a></div></div></li><!-- // depth3 --></ul></div></li><!-- // depth2 --><!-- depth2 --><li><div class='lnb_depth'><div class='tit'><a href='javascript:;'>Management</a></div><ul><!-- depth3 --><li><div class='lnb_depth'><div class='tit'><a href='javascript:;'>Input Parameter</a></div></div></li><!-- // depth3 --></ul></div></li><!-- // depth2 --></ul></div><!-- // depth1 --><!-- depth1 --><div class='lnb_depth'><div class='tit'><a href='javascript:;'>Vertical DR - A개발팀</a></div><ul><!-- depth2 --><li><div class='lnb_depth'><div class='tit'><a href='javascript:;'>Simulation</a></div><ul><!-- depth3 --><li><div class='lnb_depth'><div class='tit'><a href='javascript:;'>Run Simulation</a></div></div></li><!-- // depth3 --><!-- depth3 --><li><div class='lnb_depth'><div class='tit'><a href='javascript:;'>Job Monitor</a></div></div></li><!-- // depth3 --></ul></div></li><!-- // depth2 --><!-- depth2 --><li><div class='lnb_depth'><div class='tit'><a href='javascript:;'>Management</a></div><ul><!-- depth3 --><li><div class='lnb_depth'><div class='tit'><a href='javascript:;'>Input Parameter</a></div></div></li><!-- // depth3 --></ul></div></li><!-- // depth2 --></ul></div><!-- // depth1 --><!-- depth1 --><div class='lnb_depth'><div class='tit'><a href='javascript:;'>MDOS</a></div><ul><!-- depth2 --><li><div class='lnb_depth'><div class='tit'><a href='javascript:;'>Simulation</a></div><ul><!-- depth3 --><li><div class='lnb_depth'><div class='tit'><a href='javascript:;'>Run Simulation</a></div></div></li><!-- // depth3 --><!-- depth3 --><li><div class='lnb_depth'><div class='tit'><a href='javascript:;'>Job Monitor</a></div></div></li><!-- // depth3 --></ul></div></li><!-- // depth2 --></ul></div><!-- // depth1 --><!-- depth1 --><div class='lnb_depth'><div class='tit'><a href='javascript:;'>EzTherm (신규 개발)</a></div><ul><!-- depth2 --><li><div class='lnb_depth'><div class='tit'><a href='javascript:;'>Simulation</a></div><ul><!-- depth3 --><li><div class='lnb_depth'><div class='tit'><a href='javascript:;'>Run Simulation</a></div></div></li><!-- // depth3 --><!-- depth3 --><li><div class='lnb_depth'><div class='tit'><a href='javascript:;'>Job Monitor</a></div></div></li><!-- // depth3 --></ul></div></li><!-- // depth2 --></ul></div><!-- // depth1 --><!-- depth1 --><div class='lnb_depth'><div class='tit'><a href='javascript:;'>EzCOF (신규 개발)</a></div><ul><!-- depth2 --><li><div class='lnb_depth'><div class='tit'><a href='javascript:;'>Simulation</a></div><ul><!-- depth3 --><li><div class='lnb_depth'><div class='tit'><a href='javascript:;'>Run Simulation</a></div></div></li><!-- // depth3 --><!-- depth3 --><li><div class='lnb_depth'><div class='tit'><a href='javascript:;'>Job Monitor</a></div></div></li><!-- // depth3 --></ul></div></li><!-- // depth2 --></ul></div><!-- // depth1 --><!-- depth1 --><div class='lnb_depth' style='display:none;'><div class='tit'><a href='javascript:;'>Depth1</a></div><ul><!-- depth2 --><li><div class='lnb_depth'><div class='tit'><a href='javascript:;'>Depth2</a></div><ul><!-- depth3 --><li><div class='lnb_depth'><div class='tit'><a href='javascript:;'>Depth3</a></div></div></li><!-- // depth3 --><!-- depth3 --><li><div class='lnb_depth'><div class='tit'><a href='javascript:;'>Depth3</a></div></div></li><!-- // depth3 --><!-- depth3 --><li><div class='lnb_depth'><div class='tit'><a href='javascript:;'>Depth3</a></div></div></li><!-- // depth3 --></ul></div></li><!-- // depth2 --><!-- depth2 --><li><div class='lnb_depth'><div class='tit'><a href='javascript:;'>Depth2</a></div><ul><!-- depth3 --><li><div class='lnb_depth'><div class='tit'><a href='javascript:;'>Depth3</a></div></div></li><!-- // depth3 --></ul></div></li><!-- // depth2 --><!-- depth2 --><li><div class='lnb_depth'><div class='tit'><a href='javascript:;'>Depth2</a></div></div></li><!-- // depth2 --></ul></div><!-- // depth1 --></div></div><!-- footer --><div class='lnb_footer'><!-- team logo --><img src='../../images/logo_team.png' alt='team logo' class='team_logo'><!-- copyright --><div class='lnb_copyright'><a href='javascript:;'>개인정보처리방침</a><span>© SAMSUNG DISPLAY</span></div><!-- btn --><a href='javascript:;' class='lnb_btn_secret'>SAMSUNG SECRET</a></div></div><div class='lnb_rightWrap'><a href='javascript:;'><span class='icon'></span><span class='txt'>M E N U</span></a></div></div>";
	$("#lnb_wrap").html(lnbSource).addClass("depth ver2");
	lnbMenu();
	lnbMenuAc();
	lnb_off();
};

/* 셀렉트 박스 오픈 시 옵션 위치 조정 */
function dsel_over(e,sw){
    var ev = (window.event !== undefined)?window.event:window.Event;
    ev.cancelBubble = true;
    var w = $(e).width();
    var t = (sw === true)?$(e).offset().top + $(e).height():$(e).offset().top;
    var vv = (sw === true)?$(e).find("ul > li").eq(0).height() * -1:$(e).find("ul > li").eq(0).height();
    var boxh = $(e).find("ul").height();
    if(boxh  >= 252) boxh = 252;
    var wh = $(window).height();
    if((t + boxh) >= wh){
        t = t - boxh + vv;
    };
    var l = $(e).offset().left;
    var $list = $(e).find("ul");
    var ind = $(".sub_dsel").index($(e));
    $(".sub_dsel").each(function(index,node){
        $(node).parents("td").css("overflow","visible");
    });
    fn_remove(ind);
    $list.css({position:"fixed",left:l,top:t}).width(w);
};

/* 셀렉트 박스 오픈 시 옵션 위치 조정 */
function dsel_over2(e,sw){
	var ev = (window.event !== undefined)?window.event:window.Event;
	ev.cancelBubble = true;
	var w = $(e).width();
	var t = (sw === true)?$(e).offset().top + $(e).height():$(e).offset().top;
	var vv = (sw === true)?$(e).find("ul > li").eq(0).height() * -1:$(e).find("ul > li").eq(0).height();
	var boxh = $(e).find("ul").height();
	if(boxh  >= 252) boxh = 252;
	var wh = $(window).height();
	if((t + boxh) >= wh){
		t = t - boxh + vv;
	};
	var l = $(e).offset().left;
	var $list = $(e).find("ul");
	var ind = $(".sub_dsel").index($(e));
	$(".sub_dsel").each(function(index,node){
		$(node).parents("td").css("overflow","visible");
	});
	fn_remove(ind);
	$list.width(w);
};



function dsel_out(e){
    fn_remove();
    var ev = (window.event !== undefined)?window.event:window.Event;;
    ev.cancelBubble = true;
    $(e).removeClass("open");
    $(".sub_dsel").find("ul").css({height:"auto"});
};

/* 셀렉트 박스 옵션 클릭 시 옵션 숨김 및 value 값 셋팅 */
function dsel_liClick(e,sw){
    var sw = (sw !== undefined)?true:false;
    var ev = (window.event !== undefined)?window.event:window.Event;
    ev.cancelBubble = true;
    $(e).parents(".sub_dsel").removeClass("cu");
    if(selTimer !== undefined) clearTimeout(selTimer);
    var val = $(e).text();
    if($(e).find("label").length > 0) return;
    if($(e).parents(".sub_dsel").find(".sub_dsel_in").prop("tagName").toLowerCase() == "input"){
        $(e).parents(".sub_dsel").find(".sub_dsel_in").val(val).addClass("checked");
    }else{
        $(e).parents(".sub_dsel").find(".sub_dsel_in").text(val).addClass("checked");
    };
    fn_remove();
    if(sw){
        var id = $(e).attr("data-id");
        var txt = $(e).text();
        var source = '<li data-id="'+id+'"><div class="sub_lbConBox"><a href="javascript:;" class="btn_sRec" onClick="fn_checked(this)">결재</a><a href="javascript:;" class="btn_sRec" onClick="fn_checked(this)">합의</a><a href="javascript:;" class="btn_sRec" onClick="fn_checked(this)">결재</a></div><p>'+txt+'</p><a href="javascript:;" class="sub_lbConClise" onClick="fn_clickRemoveLi(this)"></a></li>';
        var source1 = '<li data-id="'+id+'"><div class="sub_lbConBox"><div class="sRecWrap"><input type="radio" id="'+(id+01)+'" name="'+(id+001)+'" class="btn_sRec" /><label for="'+(id+01)+'">결재</label></div><div class="sRecWrap"><input type="radio" id="'+(id+02)+'" name="'+(id+001)+'" class="btn_sRec" /><label for="'+(id+02)+'">합의</label></div><div class="sRecWrap"><input type="radio" id="'+(id+03)+'" name="'+(id+001)+'" class="btn_sRec" /><label for="'+(id+03)+'">결재</label></div></div><p>'+txt+'</p><a href="javascript:;" class="sub_lbConClise" onClick="fn_clickRemoveLi(this)"></a></li>';
        var sw = true;
        $(e).parents(".sub_txtBt").next().find("ul li").each(function(index,node){
            var checkId = $(node).attr("data-id");
            if(checkId == id) sw = false;
        });
        if(sw) $(e).parents(".sub_txtBt").next().find("ul").append(source1);
    };
};


/* 셀렉트 닫는 함수(적용되는 클래스 : sub_dsel)  */
function fn_remove(n){
	var num = (n === undefined)?-1:(typeof n == "object")?-1:Number(n - 1);
	$(".sub_dsel").find("ul").each(function(index,node){
		$(node).css("overflow","hidden");
		if(n == index) $(node).css("overflow","auto");
	});
	selTimer = setTimeout(function(){
		$(".sub_dsel").each(function(index,node){
			$(node).removeClass("open");
			if(n == index) $(node).addClass("open"); 
		});
	},50);
	
};


function dsel_inputClick(e){
	var ev = (window.event !== undefined)?window.event:window.Event;;
	ev.cancelBubble = true;
	var txt = $(e).text();
	var $li = $(e).parents(".sub_dsel").find("li");
	var source = "";
	var txt = "";
	var len = $li.find("input:checked").length;
	$li.each(function(index, node){
		var check = $(node).find("input").is(":checked");
		if(check){
			var t = $(this).text();
			txt += t + ",";
		};
	});
	if(txt != ""){;
		txt = txt.replace(/\,$/g,"");
	}else{
		txt = "선택하세요";
	};
	source="<span title='"+txt+"'>"+txt+"</span>";
	$(e).parents(".sub_dsel").find(".sub_dsel_in").html(source);
};




function dsel_inputChange(e){
	
	return;
	var ev = (window.event !== undefined)?window.event:window.Event;;
	ev.cancelBubble = true;
	var txt = $(e).text();
	var $li = $(e).parents(".sub_dsel").find("li");
	var source = "";
	var txt = "";
	$li.each(function(index, node){
		var check = $(node).find("input").is(":checked");
		if(check){
			var t = $(this).text();
			txt += t + ",";
		};
	});
	txt = txt.replace(/\,$/g,"");
	source="<span title='"+txt+"'>"+txt+"</span>";
	$(e).parents(".sub_dsel").find(".sub_dsel_in").html(source);
};



/* 싱글첨부파일 인풋 trigger */
function fn_fileClick(e){
	fn_remove();
	if (window.event != undefined) {
		var ev = window.event;
		ev.cancelBubble = true;
	}
	var $file = $(e).parents(".sub_dFile").find("[type='file']");
	$file.trigger("click");
};

function fn_fileClick2(e){
	fn_remove();
	if (window.event != undefined) {
		var ev = window.event;
		ev.cancelBubble = true;
	}
	var $file = $(e).parent().find("[type='file']");
	$file.trigger("click");
};

function fn_fileAllremove(el,txt){
	var txt = (txt !== undefined)?txt:"전체 삭제하시겠습니까?";
	if(confirm(txt)) $(el).parent().next().find("ul li").remove();
};

function fn_fileChange(e){
	fn_remove();
	if (window.event != undefined) {
		var ev = window.event;
		ev.cancelBubble = true;
	}
	var $txt = $(e).parents(".sub_dFile").find("[type='text']");
	if ($txt.length == 0) {
		$txt = $(e).parents(".sub_dFile2").find("[type='text']");
	}
	
	$txt.val($(e).val());
	$txt.attr("title", $(e).val());
};

function fn_fileChange2(e){
	fn_remove();
	if (window.event != undefined) {
		var ev = window.event;
		ev.cancelBubble = true;
	}
	var $txt = $(e).parent().find("[type='text']");
	var name = $(e).val();
	var check = true;


	name = name.replace(/.*\\/g,'');
	
	$(e).parent().next().find("ul li").each(function(index,node){
		var a_name = $(node).attr("data-url");
		if(a_name == $(e).val()) check = false;
	});
	if(check){
		var source = '<li data-url='+$(e).val()+'><a href="javascript:;">'+name+'</a><span class="sub_lbConClise" onClick="fn_clickRemoveLi(this)"></span></li>'
		$(e).parent().next().find("ul").append(source);
	}else{
		alert("중복된 파일입니다!");
	};
};

function fn_trry(e){
    fn_remove();
    if (window.event){
        window.event.stopPropagation();
    } else if (window.event != undefined){
        window.event.cancelBubble = true;
    };
    
    var el = $(e).parent().parent();
    var elLen = el.children().length;
    var ul = $(e).parents(".tree_area");
    var ind = new Array();
    var maxDepth = new Array();
    if(el.hasClass("open") || el.hasClass("check")){
        el.removeClass("open check");
    }else{
        checkDepth($(e));
        ul.find("li").removeClass("open check");
        addClass(ul.children().eq(0),0);
    };
    fnMax(ul.children().eq(0).children());
    function fnMax(el){
        var max = 0;
        var cu = 0;
        ul.find("li").each(function(index,node){
            cu = 0;
            ch($(node));
            $(node).attr("data-depth",cu);
        });
        function ch(e){
            var name = e.prop("tagName").toLowerCase();
            var cl = String(e.attr("class")).toLowerCase();
            if(name == "li") cu++;
            if(cl.indexOf("tree_area") == -1 || cl === undefined){
                if(max < cu) max = cu;
                ch(e.parent());
            }else{
                
            };
        };
        return max;
    };
    function checkDepth(el){
        var tagName = el.parent().prop("tagName").toLowerCase();
        var className = el.parent().attr("class");
        if(tagName == "li"){
            ind.push((el.parent().index()))
        };
        if(String(className).indexOf("tree_area") == -1){
            checkDepth(el.parent());
        }else{
            ind.reverse();
        };
    };
    function addClass(el,num){
        var max = ind.length - 1;
        var $li = el.children().eq(ind[num]);
        if($li.find("ul").length > 0){
            $li.addClass("open");
        }else{
            $li.addClass("check");
        };
        if(num < max){
            addClass($li.find("ul"),num+1);
        };
    };
    function autoOpen(el){
        var len = el.parent().next().children().length;
        var len2 = el.parent().next().children().children().length;
        if(len == 1 && len2 != 1){
            el.parent().next().children().addClass("open");
            var target = el.parent().next().children(0).children(0).children(0);
            if(target === undefined) return;
            autoOpen(target);
        };
    };
};

/* Mecha RunSimulation 오른쪽 박스(폴더 박스) 클릭 시 레이어 아웃 셋팅 */
function fn_fold(e){
	fn_remove();
	if(window.event) window.event.stopPropagation();
	$(e).parents(".sub_folderBox").toggleClass("open").siblings().removeClass("open");
	if($(e).parents(".sub_folderBox").index() == 0 || $(e).parents(".sub_folderBox").index() == 1){
		flodBoxSize();
	};
};

/* Mecha RunSimulation 오른쪽 레이어 아웃(폴더 박스) 높이 셋팅 */
function fn_foldRe(e){
	if(window.event) window.event.stopPropagation();
	flodBoxSize();
};

/* Mecha RunSimulation 오른쪽 레이어 아웃(폴더 박스) 높이 셋팅 */
function flodBoxSize(){
	var $el = $(".sub_folderBox.open");
	if($el.length) init();
	function init(){
		var n = $el.index();
		if(n >= 2) return;
		$el.find(".sub_fbCon").removeAttr("style");
		var h = $("body").height();
		var top = $el.parents("li").offset().top;
		var tarH = $el.height();
		var priceH = (h - top - 191);
		if(priceH < tarH){
			$el.find(".sub_fbCon").height(priceH);
		};
	};
};

/* 클릭 시 셀렉트 닫는 함수(적용되는 클래스 : sub_dsel)  */
function fn_Click_remove(e){
	$(e).click(fn_remove);
};

/* 클릭 시 탭 온오프 처리 */
function fn_Click_tap(e){
	if(window.event) window.event.stopPropagation();
	var check = ($(e).parent().parent().attr("class") == "as_tapBt_wrap")?true:false;
	var check2 = ($(".as_tapConFar_wrap").length)?true:false;
	var num = $(e).parent().index();
	if(!$(e).parent().hasClass("on")){
		$(e).parent().addClass("on").siblings().removeClass("on");
	};
	if(true){
		var ind = $(e).parent().index();
		$(e).parent().parent().next().children(":eq("+ind+")").addClass("on").siblings().removeClass("on");
	};
	if(check2){
		$(".as_tapConFar_wrap").children().eq(num).addClass("on").siblings().removeClass("on");
	};
	if (typeof(defaultTreeOpen) != "undefined") {
		defaultTreeOpen();
	}
	if (typeof(removeReportEvent) != "undefined") {
		removeReportEvent();
	}
};

/* 탭 클릭 시 온 오프처리 및 스크롤 이동 */
function fn_Click_tap2(e){
	if(window.event) window.event.stopPropagation();
	if(!$(e).parent().hasClass("on")){
		$(e).parent().addClass("on").siblings().removeClass("on");
	};
	var tp = set_tapLevel($(".md_con.type_scroll"));
	var n = $(e).parent().index();
	if(n <= 0){
		$(".md_con.type_scroll").scrollTop(0);
	}else{
		$(".md_con.type_scroll").scrollTop(tp[n - 1]);
	};
};

function fn_foldSearch(e,sw){
	var check = $(e).is(":checked");
	var $box = $(e).parents(".sub_sbLayerBox").find(".sub_sblb_fold");
	var $par = $(e).parents(".sub_sblb_both");
	var $l = $(e).next();
	var txt = $l.text();
	var txt2 = $l.attr("data-txt");
	var speed = 500;
	var h = fn_reBoxh(e);
	if($box.attr("data-h") === undefined) $box.attr("data-h",$box.find("ul").innerHeight());
	if(check){
		$box.css("overflow","hidden").stop().animate({height:0},speed);
		$par.stop().animate({"padding-top":0},speed,function(){
			if($(".sub_conBox").length) fn_sub_conBox();
		});
	}else if(sw === undefined){
		$box.css("overflow","visible").stop().animate({height:h+"px"},speed,function(){
			if($(".sub_conBox").length) fn_sub_conBox();
		});
		$par.stop().animate({"padding-top":10},speed);
	}else if(sw == true){
		$box.css("height","auto");
	};
	if(sw != true) $l.text(txt2).attr("data-txt",txt);
	if (typeof(gridResize) != "undefined") { 
		setTimeout(function(){
			gridResize();
		},300);
	}
};

function fn_checked(e){
	$(e).toggleClass("checked");
};

function fn_clickRemoveLi(e){
	remove_li($(e).parent());
	function remove_li(el){
		if(el.prop("tagName").toLowerCase() == "li"){
			el.remove();
		}else if(el.prop("tagName") !== undefined){
			remove_li(el.parent());
		};
	};
};

function fn_tapResize(v){
	if (v == undefined) {
		v = 0;
	}
	var $el = $(".as_tap");
	if($el.length) init();
	function init(){
		$el.each(function(index, node){
			var top = $(node).offset().top;
			var d = ($(node).attr("data-d") !== undefined)?$(node).attr("data-d"):0;
			var wrap_h = $(window).height();
			var h = wrap_h - top - d + Number(v);
			$(node).height(h);
		});
	};
};

/* 스크롤 이동 시 해당탭 on 처리 */
function fn_mcScroll(e){
	var top = $(e).scrollTop();
	var tp = new Array();
	var pt = ($(e).attr("data-s") !== undefined)?$(e).attr("data-s"):0;
	var n = "";
	var vp = (top > pt)?100:300;
	tp = set_tapLevel(e);
	for(var i=0; i<tp.length; i++){
		if(top < (tp[i] - vp)){
			n = i;
			break;
		};
	};
	$(".as_tapCon_wrap li:eq("+n+")").addClass("on").siblings().removeClass("on");
	$(e).attr("data-s",top);
};
function set_tapLevel(e){
	var arr = new Array();
	for(var i=0; i<$(e).children().length; i++){
		if(i == 0){
			arr[i] = $(e).children(":eq("+i+")").innerHeight();
		}else{
			arr[i] = arr[i-1] + $(e).children(":eq("+i+")").innerHeight();
		};
	};
	return arr; 
};

/* 인풋 0.1씩 콘트롤 버튼 */
function fn_countBox(el){
	var check = ($(el).attr("class") == "u")?true:false;
	var max = $(el).parent().attr("data-max");
	var min = $(el).parent().attr("data-min");
	var n = Number($(el).parent().find("input").val()) * 10;
	if(check){
		n++;
	}else{
		n--;
	};
	n = n * 0.1
	if(max <= n){
		n = max;
	}else if(min >= n){
		n = min
	};
	var n2 = String(n).match(/(\d+(\.\d)?)/g)
	$(el).parent().find("input").val(n2[0]);
};
function fn_countBoxCheck(el){
	var n = ($(el).val() == "")?0:($(el).val().indexOf(".") == 0 && $(el).val().length == 1)?0:$(el).val();
	var max = $(el).parent().attr("data-max");
	var min = $(el).parent().attr("data-min");
	if(n.length > 5) n = String(n).subStr(0,4);
	n = String(n).match(/\d+\.?\d?/g);
	if(max <= Number(n[0])){
		n[0] = max;
	}else if(min > Number(n[0])){
		n[0] = min
	};
	if((n[0].length > 1 && n[0].indexOf(".") == -1)) n[0] = String(n[0]).replace(/^0/g,'');
	$(el).val(n[0])
};

/* 인펏 숫자만 입력 */
function fn_numberformat(el){
	var n = $(el).val();
	n = n.replace(/\D/g,"");
	n = n.replace(/(\d)(?=(?:\d{3})+(?!\d))/g,"$1,");
	if(n.length > 1) n = n.replace(/^0/g,'');
	$(el).val(n);
};


function fn_removeThis(el,pClass){
	var $wrap = (pClass === undefined)?$(el).parent():$(el).parents("." + pClass);
	$wrap.remove();
	if($(".sub_sblb_fold").length) init();
	function init(){
		$(".sub_sblb_fold").css("height","auto");
		var tar = $(el).parents(".sub_sblb_fold").next().find(".swtype").find("input");
		fn_foldSearch(tar);
	};
	if($(".sub_conBox").length) fn_sub_conBox();
};


function fn_reBoxh(el){
    var $box = $(el).parents(".sub_sbLayerBox").find(".sub_sblb_fold");
    var vh = ($(".sub_wordBox").length > 0)?0:0;
    var hh = 0;
    $box.children().each(function(index, node){
        var mt = Number($(node).css("margin-top").match(/\d+/));
        hh += $(node).innerHeight() + mt;
    });
    var h = (hh + 10 + vh);
    return h;
};

function fn_sub_conBox(){
	var $el = $(".sub_conBox");
	var price = $el.offset().top;
	$el.css({"height":"calc(100% - "+price+"px)"});
};

function fn_popupWhiteBg(){
	$(".whiteBg_area").append("<div class='bg'></div>");
	var css = {position:"fixed",width:"calc(100% + 80px)",height:30,top:"0",left:"-40px",zIndex:"-1",backgroundColor:"white"}
	var h = $(window).height() - $(".whiteBg_area").offset().top;
	$(".whiteBg_area .bg").css(css);
	$(".whiteBg_area .bg").css({top:$(".whiteBg_area").offset().top,height:h});
};
var count = 0;

/* Visint 메인 애니메이션 */
function fn_visnt_folder(){
	if(!$(".visint_innerWrap").hasClass("ev")){
		$(".visint_innerWrap").addClass("ev");
		var $l = $(".visintMain_left");
		var $r = $(".visintMain_right");
		var $li = $(".vml_wrap");
		var l = $(".visint_innerWrap").width() - 500;
		var t = 322;
		var ll = Number($li.css("left").match(/\-?\d+/g));
		var max1 = $(".vml_wrap").width() - 209;
		var max2 = $(".vml_wrap").width() + 100;
		var sw = ($l.width() > t)?true:false;
		var timer = "";
		var timer2 = "";
		var ww = $(".visint_innerWrap").width() - t;
		if(sw){
			timer = setInterval(function(){
				$(".visint_innerWrap").addClass("evon");
				l = l - 50;
				ll = ll - 50;
				if(l <= t) l = t;
				$l.css({"width":l+"px"});
				$li.css({left:ll+"px"});
				$r.css("width","calc(100% - "+l+"px)");
				if(l <= t){
					clearInterval(timer);
					timer2 = setInterval(function(){
						ll = ll - 50;
						if(ll <= -max2){
							ll = -max2;
							clearInterval(timer2);
							$(".visint_innerWrap").removeClass("ev");
							$(".vmtit_wrap").addClass("evon");
						};
						$li.css({left:ll+"px"});
					},15);
				};
			},15);
		}else{
			$(".vmtit_wrap").removeClass("evon");
			timer2 = setInterval(function(){
				ll = ll + 50;
				if(ll >= -max1){
					ll = -max1;
					clearInterval(timer2);
					timer = setInterval(function(){
						ww = ww - 50;
						ll = ll + 50;
						if(ww <= 500){
							ww = 500;
							clearInterval(timer);
							$(".visint_innerWrap").removeClass("ev evon");
						};
						$l.css({"width":"calc(100% - " + ww +"px"});
						$li.css({left:ll+"px"});
						$r.css("width",ww+"px");
					},15);
				};
				$li.css({left:ll+"px"});
			},15);
		};
	};
};

/* 자기자신 "on" 클래스 추가 형제 "on"클래스 제거 */
function fn_onClick(el){
	$(el).addClass("on").siblings().removeClass("on");
};

/* 텝 높이 셋팅 */
function fn_asTapSetHeight(el){
	$(".as_tap").each(function(index,node){
		var h = $(window).height() - $(node).offset().top - 20;
		$(node).height(h);
	});

};

/*  */
function fn_onlyNumber(el){
	var n = $(el).val();
	var max = ($(el).attr("data-max") !== undefined)?Number($(el).attr("data-max")):false;
	var min = ($(el).attr("data-min") !== undefined)?Number($(el).attr("data-min")):false;
	n = n.match(/\-?\d+\.?(\d+)?/g);
	if(typeof max == "number" && max <= n) n = max;
	if(typeof min == "number" && min >= n) n = min;
	n = String(n).replace(/^(\-)?0(\d)/g,'$1$2');
	if(n != "null"){
		$(el).val(n);
	}else{
		$(el).val();
	};
};

/*  */
function fn_onlyDecimalNumber(el){
		var n = $(el).val();
		$(el).val(n.match(/\d+\.?(\d+)?/g));
};

/* 탭 온오프 처리 및 해당 콘텐츠 온오프 처리 */
function fn_leftTapLi(el){
	var n = $(el).index();
	$(el).addClass("on").siblings().removeClass("on");
	$(el).parents(".sub_halfBox").find(".leftTap_right_con").children().eq(0).children().eq(n).addClass("on").siblings().removeClass("on");
};

/*  */
function fn_lnb2(event){
	var ev = (window.event !== undefined)?window.event:event;
	ev.cancelBubble = true;
	var type = ev.type;
	if(type == "mouseover"){
		$(".lnb_board, .s_wrap.ver2").addClass("hover");
	}else if(type == "mouseout"){
		$(".lnb_board, .s_wrap.ver2").removeClass("hover");
	};
};

/* 메인 좌측메뉴 서부높이 셋팅 */
function fn_mvrBoxH(e,sw){
	var sw = (sw === true)?false:true;
	var that = $(e);
	$(e).parent().children().each(function(index,node){
		var $t = $(node).find(".mvr_menu");
		var h = $(".main_view_right > ul").height();
		var l = ($t.width() * -1) +"px";
		var mt = 0;
		if(index > 0){
			mt = index * 1;
		};
		var t = ((index * $(node).innerHeight() * -1) - mt) + "px";
		/*if(sw){
			h = 332 221;
			var max = $(node).parent().children().length - 1;
			if(max <= index){
				t = ($(node).innerHeight() * ((index + 1) - max) * -1) - ((index + 1) - max);
			}else{
				t = 0;
			};
		};*/
		$t.height(h).css({top:t,left:l});
	});
};

/* 메인 관련 셋팅 */
function fn_mainSetting(rowCnt){
	/* 메인 좌측메뉴 서부넓이 셋팅 */
	var max = 0;
	var temp = 0;
	$(".main_view_right > ul > li").each(function(index,node){
		temp = 0;
		$(node).find(".mvr_menu").find(".mvr_box").each(function(index2,node2){
			temp++;
			if(max <= temp) max = temp;
		});
		var m = ($(node).attr("onMouseover").replace(/.*?\,(\w+)\)/g,"$1") == "true")?false:true;
		fn_mvrBoxH($(node),m);
	});
	/* 메인 뷰 슬라이스 */
	var main_wrap = new ko({
		wrap:"ok_scroll",                                     /* 타겟 클래스 */
		type:"l",                                             /* 슬라이딩 타입 [l : 좌우측, v : 위아래] */
		paging:true,                                          /* 페이징 넘버 [ true : on, false : off] */
		repeat:true,                                         /* 무한반복 [ ture : on, false : off ] */
		loop:true,                                           /* 자동 슬라이딩 [ true : on, false : off] */
		player:false,                                         /* 자동 슬라이딩 버튼 [ true : on, false : off] */
		loopDelay:5000,                                       /* 자동 슬라이딩 딜레이 시간 [ 숫자입력 ] */
		n:1,                                                  /* 한번에 디동하는 px값 [ 숫자입력 ] */
		pageDesign:false,                                     /* 페이징 넘버 기본 셋팅 css 적용 유무 [ ture : on, false : off ] */
		pWrapCss:{                                            /* 페이징 넘버 css 셋팅 [ 객체입력 ] */
			position:"absolute",
			bottom:"67px",
			left: "0",
			width:"100%"
		},
		paginationsCss:{                                      /* 페이징 넘버 css 셋팅 [ 객체입력 ] */
			display : "inline-block",
			margin : "0 10px",
			width : "140px",
			fontSize : "14px",
			color : "rgba(255,255,255,0.5)",
			textAlign : "center",
			"border-top" : "1px solid rgba(255,255,255,0.5)",
			cursor : "pointer"
		}, 
		pageNames:["Who we are","What we do"],                /* 페이징 넘버 텍스트 셋팅 [ 배열입력 ] */
		wheelAc:true                                          /* 휠마우스 액션 [ true : on, false : off] */
	});
	
	var flagYn = true;
	if(rowCnt < 2){
		flagYn = false;
	}
	
	/* 메인 탑 슬라이스 */
	var board_t1 = new ko({
		wrap:"lb_con",                                        /* 타겟 클래스 */
		type:"l",                                             /* 슬라이딩 타입 [l : 좌우측, v : 위아래] */
		paging:false,                                         /* 페이징 넘버 [ true : on, false : off] */
		repeat:flagYn,                                          /* 무한반복 [ ture : on, false : off ] */
		loop:flagYn,                                            /* 자동 슬라이딩 [ true : on, false : off] */
		player:false,                                         /* 자동 슬라이딩 버튼 [ true : on, false : off] */
		delay:1, 
		loopDelay:5000,                                       /* 자동 슬라이딩 딜레이 시간 [ 숫자입력 ] */
		n:2,                                                  /* 한번에 디동하는 px값 [ 숫자입력 ] */
		setNbtClass : "lb_arr l",                             /* 다음 페이지 이동버튼 클래스 셋팅 [ 문자입력 ] */
		setPbtClass : "lb_arr r"                              /* 이전 페이지 이동버튼 클래스 셋팅 [ 문자입력 ] */
	});
};


/* 테이블 접기 버튼 */
function fn_tbFold(el){
	var $btn = $(el);
	var $con = $btn.parent().prev().find(".tableWrap.o_auto");
	var speed = 500;
	if($con === undefined) return;
	if(!$btn.hasClass("c")){
		$con.animate({height:0},speed,function(){
			fn_tapResize();
		});
		$btn.addClass("c");
	}else{
		var h = $con.css("max-height").match(/\d+/g);
		$con.animate({height:h},speed,function(){
			fn_tapResize();
		});
		$btn.removeClass("c");
	};
};

/* 테이블 바디 스크롤 발생 시 테이블 해더 17px 세팅 함수 */
function fn_tHeadCheck(){
	$(".sub_tableWrap").each(function(index,node){
		var len = $(node).find(".tableWrap").length;
		if(len > 1){
			var $th = $(node).find(".tableWrap").eq(0);
			var $tb = $(node).find(".tableWrap").eq(1);
			var tbH = $tb.find("table").height();
			var maxH = Number($tb.css("max-height").match(/\d+/g));
			if(maxH < tbH){
				$th.addClass("tHead");
			}else{
				$th.removeClass("tHead");
			};
		};
	});
};

function setMode(){
    if($(".visintMain_left").length) init();
    function init(){
        $(".visintMain_left").width(322).find(".vml_wrap").css("left",$(this).width() + "px");
        $(".visintMain_right").width("calc(100% - 322px)");
        $(".vmtit .ver, .btn_rec_wa, .vmtit_wrap .vmtit").addClass("tNone");
        $(".vmtit_wrap, .visint_innerWrap").addClass("evon");
        setTimeout(function(){
                $(".vmtit .ver, .btn_rec_wa, .vmtit_wrap .vmtit").removeClass("tNone");
        },50);
    };
};

//2020-12-23 공통으로 분리 다른 경로에 있는것들은 삭제 처리하자
function downloadFile(filePath) {
    console.log("downloadFile: " + filePath);
    var form;
    if($("form[name=downloadForm]").length == 0) {
        var form = document.createElement("form");
        form.setAttribute("charset", "UTF-8");
        form.setAttribute("method", "Post");  //Post 방식
        form.setAttribute("action", "/caeweb/portal/download"); //요청 보낼 주소

        var totaldata = document.createElement("input");
        totaldata.setAttribute("type", "hidden");
        //totaldata.setAttribute("name", "totaldata");
        //totaldata.setAttribute("value", EpAdmC.GetSecureBox());
        form.appendChild(totaldata);

        var fname = document.createElement("input");
        fname.setAttribute("type", "hidden");
        fname.setAttribute("name", "fname");
        fname.setAttribute("value", filePath);
        form.appendChild(fname);
    } else {
    	form = downloadForm;    	    	
//    	form.totaldata.value = EpAdmC.GetSecureBox();
//    	var agent = navigator.userAgent.toLowerCase();	
//    	if (agent.indexOf("msie") != -1 || agent.indexOf("trident") != -1) {
//    		form.totaldata.value = EpAdmC.GetSecureBox();
//    		if(rrtn.length==0)
//    		{	
//    			alert("Single login 후 사용가능합니다.");
//    			window.location.replace("http://www.samsung.net");
//    			return;
//    		}
//    	} else {
//    		//pass!		
//    		form.totaldata.value = "";
//    	}
    	//form.totaldata.value = "";
    	form.fname.value = filePath;
    }
    
    form.submit();
    
};

var tmpOldCategory1 = "";
var tmpOldCategory2 = "";
function onCategory1Changed(category1Id ,category2Id, category2ListId, category3Id, category3ListId, regFlag){
	var html = "";
	var defVal = regFlag ? "선택하세요" : "ALL";
	var category1 = $("#"+category1Id).text().trim();
	
	if(category1 != tmpOldCategory1){
		$("#"+category2Id).text(defVal);
		$("#"+category2ListId).html(html);
		$("#"+category3Id).text(defVal);
		$("#"+category3ListId).html(html);
		
		if(category1 == defVal){
			tmpOldCategory1 = "";
			tmpOldCategory2 = "";
		} else if(category1 == "알고리즘"){
			html = '<li onClick = "dsel_liClick(this);onCategory2Changed(\''+category2Id+'\', \''+category3Id+'\', \''+category3ListId+'\', '+regFlag+');">'+defVal+'</li>';
			html += '<li onClick = "dsel_liClick(this);onCategory2Changed(\''+category2Id+'\', \''+category3Id+'\', \''+category3ListId+'\', '+regFlag+');">보상 알고리즘</li>';
			html += '<li onClick = "dsel_liClick(this);onCategory2Changed(\''+category2Id+'\', \''+category3Id+'\', \''+category3ListId+'\', '+regFlag+');">저소비전력</li>';
			html += '<li onClick = "dsel_liClick(this);onCategory2Changed(\''+category2Id+'\', \''+category3Id+'\', \''+category3ListId+'\', '+regFlag+');">화질 알고리즘</li>';
			html += '<li onClick = "dsel_liClick(this);onCategory2Changed(\''+category2Id+'\', \''+category3Id+'\', \''+category3ListId+'\', '+regFlag+');">압축 알고리즘</li>';
			html += '<li onClick = "dsel_liClick(this);onCategory2Changed(\''+category2Id+'\', \''+category3Id+'\', \''+category3ListId+'\', '+regFlag+');">센싱 알고리즘</li>';
		} else if(category1 == "Interface"){
			html = '<li onClick = "dsel_liClick(this);onCategory2Changed(\''+category2Id+'\', \''+category3Id+'\', \''+category3ListId+'\', '+regFlag+');">'+defVal+'</li>';
			html += '<li onClick = "dsel_liClick(this);onCategory2Changed(\''+category2Id+'\', \''+category3Id+'\', \''+category3ListId+'\', '+regFlag+');">Internal Interface</li>';
		}
		$("#"+category2ListId).html(html);
	}
	tmpOldCategory1 = category1;
}

function onCategory2Changed(category2Id, category3Id, category3ListId, regFlag){
	var html = "";
	var defVal = regFlag ? "선택하세요" : "ALL";
	var category2 = $("#"+category2Id).text().trim();
	
	if(category2 != tmpOldCategory2){
		$("#"+category3Id).text(defVal);
		$("#"+category3ListId).html(html);
		
		if(category2 == defVal){
			tmpOldCategory2 = "";
		} else if(category2 == "보상 알고리즘") {
			html = '<li onClick = "dsel_liClick(this);">'+defVal+'</li>';
			html += '<li onClick = "dsel_liClick(this);">고속응답</li>';
			html += '<li onClick = "dsel_liClick(this);">고속전송</li>';
			html += '<li onClick = "dsel_liClick(this);">색편차개선</li>';
			html += '<li onClick = "dsel_liClick(this);">잔상방지</li>';
			html += '<li onClick = "dsel_liClick(this);">저계조</li>';
			html += '<li onClick = "dsel_liClick(this);">검사</li>';
		} else if(category2 == "저소비전력") {
			html = '<li onClick = "dsel_liClick(this);">'+defVal+'</li>';
			html += '<li onClick = "dsel_liClick(this);">D-IC</li>';
			html += '<li onClick = "dsel_liClick(this);">발광</li>';
			html += '<li onClick = "dsel_liClick(this);">소비전력 개선</li>';
			html += '<li onClick = "dsel_liClick(this);">패널구동</li>';
			html += '<li onClick = "dsel_liClick(this);">검사</li>';
		} else if(category2 == "화질 알고리즘") {
			html = '<li onClick = "dsel_liClick(this);">'+defVal+'</li>';
			html += '<li onClick = "dsel_liClick(this);">화질 개선</li>';
			html += '<li onClick = "dsel_liClick(this);">화질향상</li>';
			html += '<li onClick = "dsel_liClick(this);">검사(계측고도화)</li>';
		} else if(category2 == "압축 알고리즘") {
			html = '<li onClick = "dsel_liClick(this);">'+defVal+'</li>';
			html += '<li onClick = "dsel_liClick(this);">Data 압축</li>';
		} else if(category2 == "센싱 알고리즘") {
			html = '<li onClick = "dsel_liClick(this);">'+defVal+'</li>';
			html += '<li onClick = "dsel_liClick(this);">센싱 개선</li>';
		} else if(category2 == "Internal Interface") {
			html = '<li onClick = "dsel_liClick(this);">'+defVal+'</li>';
			html += '<li onClick = "dsel_liClick(this);">고속구동</li>';
			html += '<li onClick = "dsel_liClick(this);">고속전송</li>';
			html += '<li onClick = "dsel_liClick(this);">구동 Solution(검사)</li>';
		}
		$("#"+category3ListId).html(html);
	}
	tmpOldCategory2 = category2;
}

/* Session Refresh */
function redirectBrowser(url){
	location.href = url;
}