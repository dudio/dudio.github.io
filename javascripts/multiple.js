$(function(){

	$(".multiple").each(function(){
		var $t = $(this);
		$t.after($('<div class="copylast">新增一筆工作</div>'));
	});
	$(".copylast").click(function(){
		var $t = $(this);
		$t.prev().clone(true).insertBefore($t);
		countProperty();
	});
});
