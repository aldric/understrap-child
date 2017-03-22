var BreadcrumbGenerator = function() {
	var self = this;
	
	this.breadCrumb = {
   		"@context": "http://schema.org",
   		"@type": "BreadcrumbList",
   		"itemListElement": [ ]
   	};

	this.populate = function() {
	 
		var idx = 0;
		jQuery('nav.breadcrumb a.breadcrumb-item').each(function( index ) {
				idx = index + 1;
				var text = idx == 1 ? jQuery(this).find("meta").prop("content") : jQuery(this).text();
				text = text.charAt(0).toUpperCase() + text.slice(1);
				
				self.breadCrumb.itemListElement.push(
					self.getItem(idx, jQuery(this).attr("href"), text)
				);
				
			});
		jQuery('nav.breadcrumb span.breadcrumb-item.active').each(function(index) {
				var text = jQuery(this).find('span[property=name]').text();
				if(text === '')
					text = jQuery(this).find("meta").prop("content");
				self.breadCrumb.itemListElement.push(
					self.getItem(idx + index + 1, window.location.href, text)
				);
			});
		
	};
	
	this.generate = function() { 
		return JSON.stringify(self.breadCrumb);
	};

	this.isEmpty = function() {
		console.log('self.breadCrumb.itemListElement.length >>' + self.breadCrumb.itemListElement.length);
		return self.breadCrumb.itemListElement.length <= 1;
	};

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
	if(!breadcrumbGenerator.isEmpty())
		breadcrumbGenerator.createJsonLdTag();
	else {
		jQuery('div#wrapper-breadcrumbs').hide();
	}
});