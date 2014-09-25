/*
<div class="questionBox">
	<h3><input type="radio" name="important" value="spent" checked="checked"/>這輩子能花多少錢？</h3>
	<div>
			是否用物價指數修正回原始物價？<br/>
			在<input class="year" value="20"/>年後，希望至少擁有<input class="money" value="0">的資產<br/>
				<input type="radio" name="includeHouse" value="include" checked="checked"/>含房子<br/>
				<input type="radio" name="includeHouse" value="notInclude"/>不含房子<br/>
	</div>
	<h3><input type="radio" name="important" value="earn"/>這輩子能賺多少錢？</h3>
	<h3><input type="radio" name="important" value="own"/>這輩子能存多少錢？</h3>
	<div>
			對你來說，擁有一棟一千萬的房子跟擁有<input class="money" value="10000000"/>現金有相等的幸福感<br/>
			你希望在<input class="year" value="20"/>年後，房子佔自己資產比例，不能高於<input class="percentage" value="100"/>%<br/>
			你認為用如何衡量富有程度比較正確？<br/>
				<input type="radio" name="howRich" value="avg" checked="checked"/>每日平均擁有的資產總額<br/>
					是否用物價指數修正回原始物價？<br/>
				<input type="radio" name="howRich" value="avg"/>掛掉時擁有的資產總額<br/>
	</div>
	<div>...
	</div>
</div>

*/

$(function(){
	$qb = $( ".questionBox" );
	$qb.children("h3").find(":input").hide();
	$qb.accordion({
		collapsible: true,
		active: false
	});
	$qb.children("h3").click(function(){
		var $t = $(this);
		$t.siblings("h3").children(":input").css("border","2px solid red").removeAttr("checked");
		$t.children(":input").attr("checked",true);
	});
});
