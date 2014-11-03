var $tmpModel;
var emptyMsg = "目前沒有相關說明";
var passMsg  = [];
var $openHelper = $(".log_area");

/*
 * msg: 訊息內容 必填
 * 相關區塊: jQuery物件
 * priority: 重要性 1.高 2.正常 3.低
 * */
function addHelp(msg, $model, priority){
	if(!priority) priority=2;
        if(!msg || parseInt($("input[name='msgDensity']:checked").val()) < priority) return false;
	if($.inArray(msg, passMsg)) passMsg.push(msg);
	else return false;

        if($tmpModel) {
		$tmpModel.css("border","");
		$tmpModel = null;
	}

	$("#msgbox").html(msg);
	if($("input[name='openHelp']:checked").val()!="off") {
		$("#helpler").dialog("open");
		if($model) {
			$model.css("border","violet solid 3px")
				.animate({"border-color":"yellow"},500)
				.animate({"border-color":"#EE82EE"},500)
				.animate({"border-color":"yellow"},600)
				.animate({"border-color":"#EE82EE"},700);
			var offset = $model.offset();
			$("#helpArrow")
				.css("top",offset.top-20)
				.css("left",offset.left-45)
				.show();
		}
	}
	$tmpModel = $model;
}

function closeHelp() {
	$("#helpler").dialog("close");
}

function clearHelp() {
	$tmpModel = null;
	$("#msgbox").text(emptyMsg);
}

$(function(){
	var $arrow = $("<img>")
		.attr("src","./images/arrow.png")
		.attr("id","helpArrow")
		.height("50px")
		.width("50px")
		.appendTo($("body"))
		.css("position","absolute")
//		.css("top",offset.top-35)
//		.css("left",offset.left-15)
		.hide()
		.css("z-index","1000")
		.click(function(){
			$(this).hide();
		});
	var openHelpButton = $('<li><a id="openHelp" src="#">開啟小幫手</a></li>').appendTo($openHelper);
	var helpDialog = $('<div id="helpler" style="display:none;" title="我是小幫手"> <div id="msgbox" style="color:red;font-size:16px;">'+emptyMsg+'</div> <hr/> 自動開啟小幫手： <input type="radio" name="openHelp" checked="checked" value="on">開啟 <input type="radio" name="openHelp" value="off">關閉<br/> 訊息數量： <input type="radio" name="msgDensity" value="3">多 <input type="radio" name="msgDensity" checked="checked" value="2">適中 <input type="radio" name="msgDensity" value="1">少</div>').appendTo($("body"));
        $("#helpler").dialog({
                autoOpen:false,
                height: "auto",
                width: "auto",
                open: function(e, ui){
        		if($tmpModel) $tmpModel.css("border","3px solid violet");
                        $('.ui-dialog-titlebar')
                                .height("auto")
                                .css('background','#94C128')
                                .children('a')
                                        .css('background-color','#94C128')
                                        .hover(function(){
                                                $(this).css('background','#94C128');
                                        },function(){
                                                $(this).css('background','#94C128');
                                        }).children('span')
                                                .css('background-image','url(\'/css/smoothness/images/ui-icons_ffffff_256x240.png\')');
                },
                close: function(e, ui){
                        $tmpModel.css("border","");
			$arrow.hide();
			$("#openHelp")
				.animate({color:"yellow"},1000)
				.animate({color:"white"},1500)
				.animate({color:"#dcf819"},2000)
				.animate({color:"white"},2000)
				.animate({color:"#b8f031"},1500)
				.animate({color:"white"},1000);
                },
                position: {
                        my: "left",
                        at: "left",
                        of: ".viewport"
                }
        });
        $("#openHelp").click(function(){
                $("#helpler").dialog("open");
        });

	$(":radio[name='openHelp']").each(function(){
		if($(this).val()==getCookie('openHelp'))
			$(this).attr('checked','checked');
	})
	$(":radio[name='openHelp']").change(function(){
		setCookie('openHelp',$(this).val(),1000);
	});
	$(":radio[name='msgDensity']").each(function(){
		if($(this).val()==getCookie('msgDensity'))
			$(this).attr('checked','checked');
	})
	$(":radio[name='msgDensity']").change(function(){
		setCookie('msgDensity',$(this).val(),1000);
	});
});
