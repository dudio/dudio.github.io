$(function(){

	$("#newMember").click(function(){
		var $t = $(this);
		var $w = $(".member").last();
		var $c = $w.clone(true);

		$c.find(":input").val(0);
		$c.find(".ageIntro, .inputTitle").show();
		$c.insertAfter($w);
		var memberNum = $(".member").length;
		var title = "成員"+memberNum;
		$c.find(".title").val(title);

		//將現有工作新增成員選擇
		if(memberNum==2)
			$("#tabs-2 > div").each(function(i){
				$(this).prepend("<span class='workMember'>工作者：<input type='radio' checked='checked' name='workMember"+i+"' value=0 />自己</span><br/>");
			});
		$(".workMember").each(function(i){
			var v = memberNum-1;
			$(this).append("<input type='radio' name='workMember"+i+"' value="+v+" /><span class='title-"+v+"'>"+title+"</span>");
		});

		//將現有支出新增成員選擇
		if(memberNum==2)
			$("#outgoingArea").prepend("個人");
		var v = memberNum-1;
		$("#outgoingArea").append("<span class='title-"+v+"'>"+title+'</span>支出<span style="font-size:0.85em;">(不含住宿/工作通勤)</span>：<input class="money" id="outgoing-'+v+'" size="10" style="text-align:right;" value="0" /> /月<br/>');
		$("#outgoing-"+v).change(function(){setTimeout(function(){countProperty();},100);});

		$c.attr("id","member-"+memberNum);
		$("<li><a href='#member-"+memberNum+"'>"+title+"</a></li>").insertBefore($("#newMember").parent());

		//目前上面都塞0 先不用呼叫countProperty() 但要getData() 重建member
		getData();
		//countProperty();

		$("#tabs-1").tabs("refresh");
		setTimeout(function(){
			$("#tabs-1 li > a").eq(memberNum-1).click();
			$c.find(":input:first").focus();
		},10);
	});

	$("#newWork").click(function(){
		var $t = $(this);
		var $w = $(".work").last();
		var $c = $w.clone(true);
		$c.find(".salary,.finalYearSalary,.retirementPayOnce,.retirementPayMonthly").val(0);
		var workNum = $(".work").length;
		$c.find(".workMember :input").attr("name","workMember"+workNum);
		workNum++;
		$c.insertAfter($w);
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
