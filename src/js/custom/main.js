var BreadcrumbGenerator = function() {
    var self = this;

    this.breadCrumb = {
        "@context": "http://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": []
    };

    this.populate = function() {
        var idx = 0;
        jQuery('nav.breadcrumb a.breadcrumb-item').each(function(index) {
            idx = index + 1;
            var text = idx == 1 ? jQuery(this).find("meta").prop("content") : jQuery(this).text();
            text = text.charAt(0).toUpperCase() + text.slice(1);

            self.breadCrumb.itemListElement.push(
                self.getItem(idx, jQuery(this).attr("href"), text)
            );

        });
        jQuery('nav.breadcrumb span.breadcrumb-item.active').each(function(index) {
            var text = jQuery(this).find('span[property=name]').text();
            if (text === '')
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
        return self.breadCrumb.itemListElement.length < 2;
    };

    this.getItem = function(position, link, text) {
        return {
            "@type": "ListItem",
            "position": position,
            "item": {
                "@id": link,
                "name": text
            }
        };
    };

    this.createJsonLdTag = function() {
        jQuery("body").append(jQuery("<script></script>").attr("type", "application/ld+json").text(this.generate()));
    };
}

function debounce(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this,
            args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

jQuery(document).on('ready', function() {
    var breadcrumbGenerator = new BreadcrumbGenerator();
    breadcrumbGenerator.populate();
    if (!breadcrumbGenerator.isEmpty())
        breadcrumbGenerator.createJsonLdTag();
    else {
        jQuery('div#wrapper-breadcrumbs').hide(0);
    }
    showHideGoToTop();
});


var $root = jQuery('html, body');
jQuery('a#go-to-top').click(function() {
    $root.animate({
        scrollTop: jQuery("div#content").offset().top
    }, 500);
    return false;
});

function showHideGoToTop() {
    if (jQuery('div#content').offset().top > -200) {
        jQuery('a#go-to-top').hide(150, 'linear');
    } else {
        jQuery('a#go-to-top').show(150, 'linear');
    }
}
jQuery(window).load(function() {
    setInterval(
    function() {
        showHideGoToTop();
    }, 1000);
});

