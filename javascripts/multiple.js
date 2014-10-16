$(function(){

	$(".multiple").each(function(){
		var $t = $(this);
		$t.after($('<div class="copylast">新增一筆工作</div>'));
	});
	$(".copylast").click(function(){
		var $t = $(this);
		var $c = $t.prev().clone(true);
		$c.find(".salary,.finalYearSalary,.retirementPayOnce,.retirementPayMonthly").val(0);
		$c.insertBefore($t);

		//目前上面都塞0 先不用呼叫countProperty() 但要getData() 重建work
		getData();
		//countProperty();
	});
});
