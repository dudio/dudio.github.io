var $tmpModel;
var emptyMsg = "目前沒有相關說明";
var passMsg  = [];
var $openHelper = $("#openHelper");

/*
 * msg: 訊息內容 必填
 * 相關區塊: jQuery物件
 * priority: 重要性 1.高 2.正常 3.低
 * */
function addHelp(msg, $model, priority){
	if(!priority) priority=2;
        if(!msg) return false;
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
//		.css("position","absolute")
//		.css("top",offset.top-35)
//		.css("left",offset.left-15)
		.hide()
		.css("z-index","1000")
		.click(function(){
			$(this).hide();
		});
	var openHelpButton = $('<button class="button"><a id="openHelp" src="#">開啟說明</a></button>').appendTo($openHelper);
	var helpDialog = $('<div id="helpler" style="display:none;" title="說明"> <div id="msgbox" style="color:red;font-size:16px;">'+emptyMsg+'</div> <hr/> 自動開啟說明： <input type="radio" name="openHelp" checked="checked" value="on">開啟 <input type="radio" name="openHelp" value="off">關閉</div>').appendTo($("body"));
        $("#helpler").dialog({
                autoOpen:false,
                height: "auto",
                width: "auto",
                open: function(e, ui){
        		if($tmpModel) $tmpModel.css("border","3px solid violet");
                },
                close: function(e, ui){
			if($tmpModel) {
	                        $tmpModel.css("border","");
				$arrow.hide();
			}
                },
                position: {
                        my: "left",
                        at: "left"
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
});
