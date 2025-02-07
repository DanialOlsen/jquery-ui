/* Faroese initialisation for the jQuery UI date picker plugin */
/* Written by Sverri Mohr Olsen, sverrimo@gmail.com */
( function( factory ) {
	"use strict";

	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define( [ "../widgets/datepicker" ], factory );
	} else {

		// Browser globals
		factory( jQuery.datepicker );
	}
} )( function( datepicker ) {
"use strict";

datepicker.regional.fo = {
	closeText: "Lat aftur",
	prevText: "Fyrra",
	nextText: "Næsta",
	currentText: "Í dag",
	monthNames: [ "Januar", "Februar", "Mars", "Apríl", "Mai", "Juni",
	"Juli", "August", "September", "Oktober", "November", "Desember" ],
	monthNamesShort: [ "Jan", "Feb", "Mar", "Apr", "Mai", "Jun",
	"Jul", "Aug", "Sep", "Okt", "Nov", "Des" ],
	dayNames: [
		"Sunnudagur",
		"Mánadagur",
		"Týsdagur",
		"Mikudagur",
		"Hósdagur",
		"Fríggjadagur",
		"Leygardagur"
	],
	dayNamesShort: [ "Sun", "Mán", "Týs", "Mik", "Hós", "Frí", "Ley" ],
	dayNamesMin: [ "Su", "Má", "Tý", "Mi", "Hó", "Fr", "Le" ],
	weekHeader: "Vk",
	dateFormat: "dd-mm-yy",
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: "" };
datepicker.setDefaults( datepicker.regional.fo );

return datepicker.regional.fo;

} );
