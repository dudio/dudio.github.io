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
	var report = "最佳投資：在"+bestAge+"歲(<span style='color:#7cb5ec;'>藍線</span>最高點)購買房產，可在"+life+"歲時獲得最多資產總額"+Math.round(bestProperty/10000)+"萬";
	
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
	report += "最佳生活：在"+bestAge+"歲(<span style='color:#f15c80;'>紅線</span>最高點)購買房產，一輩子可享最佳的物質生活，相當於"+Math.round(bestLifeV/10000)+"萬<span style='font-size:0.8em;'>(以當前物價計算)</span>";


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
	report += "<span style='color:rgb(255,49,49);font-size: 1.1em;line-height: 2em;'>本站建議：在<span style='color:blue;'>"+bestAge+"</span>歲的時候購買房產，較能兼顧生活品質及投資需求</span>";

	$("#report").html(report);
}
