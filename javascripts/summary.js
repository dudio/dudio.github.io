function writeSummary(){
	var l = bestData.length;

	var bestAge = 0;
	var bestProperty = bestData[0];
	for (var i=0; i<l; i++) {
		if(bestProperty < bestData[i]) {
			bestAge = i;
			bestProperty = bestData[i];
		}
	}
	bestAge = bestAge + parseInt(age);
	var report = "在"+bestAge+"歲的時候購買房產，可在"+life+"歲時獲得最多資產總額"+Math.round(bestProperty/10000)+"萬NT";
	
	bestAge = 0;
	var bestLifeV = bestLife[0];
	for (i=0; i<l; i++) {
		if(bestLifeV < bestLife[i]) {
			bestAge = i;
			bestLiveV = bestLife[i];
		}
	}
	bestAge = bestAge + parseInt(age);
	report += "<br/>";
	report += "在"+bestAge+"歲的時候購買房產，一輩子可獲得最多的實值享受，相當於"+Math.round(bestLifeV/10000)+"萬NT(以當前物價計算)";


	bestAge = 0;
	var balance = bestLife[0]*nowPriceIndex+bestData[0];
	for (i=0; i<l; i++) {
		if(balance < bestLife[i]*nowPriceIndex+bestData[i]) {
			bestAge = i;
			balance = bestLife[i]*nowPriceIndex+bestData[i];
		}
	}
	bestAge = bestAge + parseInt(age);
	report += "<br/>";
	report += "建議：在<span style='color:blue;'>"+bestAge+"</span>歲的時候購買房產，可兼顧生活及實值享受及投資需求";

	$("#report").html(report);
}
