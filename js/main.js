
function bry_fill_country_info(sel) {
	if (!isNaN(sel.value)) {
		var text = jQuery("#edit-country-dropdown option[value='"+sel.value+"']").text();
		
		var betweenBrackets = /\(([^)]+)\)/;
		var bbmatches = betweenBrackets.exec(text);
		var countryname = text.replace(/\(.*?\)/g, '');

		jQuery('#edit-edit-country-title').val(countryname.trim());
		jQuery('#edit-edit-country-code').val(bbmatches[1]);
	}
}
