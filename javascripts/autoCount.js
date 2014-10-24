var score = [];

function isHighScore(c){
	return c>0 && (score[c]<score[c-1]) ;
}

function countScore(c){
	$("#house .cost").val(c*100);
	$("#house .equalRent").val(c*2000);
	getData();
	countBestAge();
}

function autoCount(){
	var houseCost=0;
	score = [];
	while(1){
		countScore(houseCost);
		if(isHighScore(houseCost)) break;
		houseCost++;
	}
	houseCost--;
	countScore(houseCost);
	houseCost*=100;
	if(houseCost)
		return "最佳目標房價為"+houseCost+"萬元";
	else
		return "建議不要買房";
}

$(function(){
	//自動計算最佳房價
	$("#autoCount").click(function(){
		if(confirm("此項計算耗時較久，是否確定執行？"))
			alert(autoCount());
	});
});
