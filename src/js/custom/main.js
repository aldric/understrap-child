var BreadcrumbGenerator = function() {
	this.generate = function() {
	 	var breadCrumb = {
   		"@context": "http://schema.org",
   		"@type": "BreadcrumbList",
   		"itemListElement": [ ]
   	};
		var self = this;
		var idx = 0;
		jQuery('nav.breadcrumb a.breadcrumb-item').each(function( index ) {
				idx = index + 1;
				var text = idx == 1 ? jQuery(this).find("meta").prop("content") : jQuery(this).text();
				text = text.charAt(0).toUpperCase() + text.slice(1);
				
				breadCrumb.itemListElement.push(
					self.getItem(idx, jQuery(this).attr("href"), text)
				);
				
			});
		jQuery('nav.breadcrumb span.breadcrumb-item.active').each(function(index) {
				var text = jQuery(this).find('span[property=name]').text();
				if(text === '')
					text = jQuery(this).find("meta").prop("content");
				breadCrumb.itemListElement.push(
					self.getItem(idx + index + 1, window.location.href, text)
				);
			});
		return JSON.stringify(breadCrumb);
	} 

	this.getItem = function(position, link, text) {
		return 	{
					"@type": "ListItem",
					"position": position,
					"item":
						{
							"@id": link ,
							"name": text
						}
				};
	};

	this.createJsonLdTag = function() {
		jQuery("body").append(jQuery("<script></script>").attr("type","application/ld+json").text(this.generate()));
	};
}

jQuery(document).on('ready', function () { 
	var breadcrumbGenerator = new BreadcrumbGenerator();
	breadcrumbGenerator.createJsonLdTag();
});