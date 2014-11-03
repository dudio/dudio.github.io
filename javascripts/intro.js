$(function(){
	$("#intro").dialog({
		title:$("#title").text()+" - 本站特色",
		width:"auto",
		close: function(){$("#basicData").dialog("open");},
		position: { my: "center", at: "center", of: window },
		modal: true
	});

	$("#closeIntro").click(function(){$("#intro").dialog("close");});
});
