var score = [];
var predict = [];

function countScore(c){
	$("#house .cost").val(c*100);
	$("#house .equalRent").val(c*2000);
	getData();
	countBestAge();
}

function autoCount(){
	var houseCost=0;
	score = [];
	predict = [];

	countScore(houseCost);
	var jump = Math.round(predict[houseCost]/1000000/Math.pow(priceIndex,life-age));
	houseCost = Math.max(jump, 1);
	countScore(houseCost++);
	countScore(houseCost);
	if(score[houseCost-1]<score[houseCost]) {
		while(1){
			houseCost++;
			countScore(houseCost);
			if(score[houseCost-1]>score[houseCost]) break;
		}
		houseCost--;
	} else {
		houseCost--;
		while(1){
			houseCost--;
			countScore(houseCost);
			if(houseCost<0) break;
			if(score[houseCost]<score[houseCost+1]) break;
		}
		houseCost++;
	}
	$("#house .cost").val(houseCost*100);
	$("#house .equalRent").val(houseCost*2000);
	countProperty();
	houseCost*=100;
	if(houseCost) {
		var bestAge = $("#buyYear").slider("value");
		return "在"+bestAge+"歲購買"+houseCost+"萬元的房子";
	} else
		return "建議不要買房";
}

$(function(){
	//自動計算最佳房價
	$("#autoCount").click(function(){
//		if(confirm("此項計算耗時較久，是否確定執行？"))
		$('<div>').html(autoCount()).appendTo($("body")).hide().dialog({"title":"本站建議"});
	});
});
