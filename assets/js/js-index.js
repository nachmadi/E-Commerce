jQuery(document).ready(function() {
	
	"use strict";
	
	var dthen1 = new Date("12/30/17 10:40:00 PM");
	var start = "10/05/15 03:02:11 AM";
	var start_date = Date.parse(start);
	var dnow1 = new Date(start_date);
	if (CountStepper > 0)
	var ddiff = new Date((dnow1) - (dthen1));
	else
	var ddiff = new Date((dthen1) - (dnow1));
	var gsecs1 = Math.floor(ddiff.valueOf() / 1000);
	
	var iid1 = "countbox_1";
	CountBack_slider(gsecs1, "countbox_1", 1);	
	
});

