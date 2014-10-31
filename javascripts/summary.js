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
	if(bestAge == life) {
		var report = "最佳投資：不要買房，在"+life+"歲時獲得最多資產總額"+Math.round(bestProperty/10000)+"萬";
		var reportF = "最佳投資：不要買房";
	} else {
		var report = "最佳投資：在"+bestAge+"歲(<span style='color:#7cb5ec;'>藍線</span>最高點)購買房產，可在"+life+"歲時獲得最多資產總額"+Math.round(bestProperty/10000)+"萬";
		var reportF = "最佳投資："+bestAge+"歲買房";
	}
	
	bestAge = 0;
	var bestLifeV = bestLife[0];
	for (i=0; i<l; i++) {
		if(bestLifeV < bestLife[i]) {
			bestAge = i;
			bestLifeV = bestLife[i];
		}
	}
	bestAge = bestAge + parseInt(age);
	report += "<br/>";
	reportF += "<br/>";
	if(bestAge == life) {
		report += "最佳生活：不要買房，一輩子可享最佳的物質生活，相當於"+Math.round(bestLifeV/10000)+"萬<span style='font-size:0.8em;'>(以當前物價計算)</span>";
		reportF += "最佳生活：不要買房";
	} else {
		report += "最佳生活：在"+bestAge+"歲(<span style='color:#f15c80;'>紅線</span>最高點)購買房產，一輩子可享最佳的物質生活，相當於"+Math.round(bestLifeV/10000)+"萬<span style='font-size:0.8em;'>(以當前物價計算)</span>";
		reportF += "最佳生活："+bestAge+"歲買房";
	}


	bestAge = 0;
	var balance = bestLife[0]*nowPriceIndex+bestData[0];
	for (i=0; i<l; i++) {
		if(balance < bestLife[i]*nowPriceIndex+bestData[i]) {
			bestAge = i;
			balance = bestLife[i]*nowPriceIndex+bestData[i];
		}
	}
	balance = Math.round(balance/nowPriceIndex/10000);
	var warn="";
	var warnF="";
	if(finalCash[bestAge]-leftLoan[bestAge]<-500000) {
		warn = "目標房價過高，建議調降目標房價<br/>";
		warnF = "<br/>目標房價過高，調降目標房價";
	}
	predict[$("#house .cost").val()/100] = finalCash[bestAge]-leftLoan[bestAge];
	bestAge = bestAge + parseInt(age);
	report += "<br/>";
	reportF += "<br/>";
	if(bestAge == life) {
		report += "<span style='color:rgb(255,49,49);font-size: 1.1em;line-height: 2em;'>本站建議：不要買房，較能兼顧生活品質及投資需求，綜合積分"+balance+"</span>";
		reportF += "<span style='color:rgb(255,49,49);font-size: 1.1em;line-height: 2em;'>本站建議：不要買房</span>";
	} else {
		report += "<span style='color:rgb(255,49,49);font-size: 1.1em;line-height: 2em;'>本站建議："+warn+"在<span style='color:blue;'>"+bestAge+"</span>歲的時候購買房產，較能兼顧生活品質及投資需求，綜合積分"+balance+"</span>";
		reportF += "<span style='color:rgb(255,49,49);font-size: 1.1em;line-height: 2em;'>本站建議：<span style='color:blue;'>"+bestAge+"</span>歲買房"+warnF;
	}

	$("#report").html(report);
	$("#summaryF").html(reportF);
	score[$("#house .cost").val()/100] = balance;
	return bestAge;
}
$(function(){
	var $summaryF = $("<div id='summaryF'></div>").appendTo($("body"));
	
	$(window).scroll(function(){
		var $summary = $("#summary");
		var $window = $(window);
		if($("#tempSummary").length==0) {
			if(($window.scrollTop()>$summary.offset().top)&&($window.height()>$summary.height()+400)) {
				$("<div id='tempSummary'></div>").height($summary.height()+64).insertAfter($summary);
				$summary.hide();
				$summaryF.show();
			}
		} else if($("#tempSummary").length) {
			if(($window.scrollTop()<=$("#tempSummary").offset().top)||($window.height()<=$("#tempSummary").height()-64+400)) {
				$("#tempSummary").remove();
				$summaryF.hide();
				$summary.show();
			}
		}
	});
});
