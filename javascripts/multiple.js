$(function(){

/*	$(".multiple").each(function(){
		var $t = $(this);
		$t.after($('<div class="copylast">新增一筆工作</div>'));
	});
	$(".copylast").click(function(){*/
	$("#newWork").click(function(){
		var $t = $(this);
		var $w = $(".work").last();
		var $c = $w.clone(true);
		$c.find(".salary,.finalYearSalary,.retirementPayOnce,.retirementPayMonthly").val(0);
		$c.insertAfter($w);
		var workNum = $(".work").length;
		$c.attr("id","work-"+workNum);
		$("<li><a href='#work-"+workNum+"'>工作"+workNum+"</a></li>").insertBefore($("#newWork").parent());

		//目前上面都塞0 先不用呼叫countProperty() 但要getData() 重建work
		getData();
		//countProperty();

		$("#tabs-2").tabs("refresh");
		setTimeout(function(){
			$("#tabs-2 li > a").eq(workNum-1).click();
			$c.find(".salary").focus();
		},10);
	});
});
