var BreadcrumbGenerator = function() {
    var self = this;

    this.breadCrumb = {
        "@context": "http://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": []
    };

    this.populate = function() {
        var idx = 0;
        jQuery('a.breadcrumb').each(function(index) {
            idx = index + 1;
            var text = idx == 1 ? jQuery(this).find("meta").prop("content") : jQuery(this).text();
            text = text.charAt(0).toUpperCase() + text.slice(1);

            self.breadCrumb.itemListElement.push(
                self.getItem(idx, jQuery(this).attr("href"), text)
            );

        });
        jQuery('span.breadcrumb.active').each(function(index) {
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

    jQuery('.button-collapse').sideNav({
        menuWidth: 300, // Default is 300
        edge: 'left', // Choose the horizontal origin
        closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
        draggable: false // Choose whether you can drag to open on touch screens
    });

    var $root = jQuery('html, body');
    jQuery('a.go-to-top').click(function() {
        $root.animate({
            scrollTop: $root.offset().top
        }, 500);
        return false;
    });
    var carousel = jQuery('div#home-carousel');
    carousel.carousel({
        fullWidth: true,
        indicators: true,
        duration: 300,
        onCycleTo: function($current_item, dragged) {
            //console.log($current_item);
            stopAutoplay();
            startAutoplay(carousel);
        }
    });
});

var autoplay_id;

function startAutoplay($carousel) {
    autoplay_id = setInterval(function() {
        $carousel.carousel('next');
    }, 5000); // every 2 seconds
    //console.log("starting autoplay");
}

function stopAutoplay() {
    if (autoplay_id) {
        clearInterval(autoplay_id);
        //console.log("stoping autoplay");
    }
}

function showHideGoToTop() {
    if (jQuery(window).scrollTop() < 200) {
        jQuery('a.go-to-top').hide(150, 'linear');
    } else {
        jQuery('a.go-to-top').show(150, 'linear');
    }
    if (jQuery(window).scrollTop() < 200) {
        jQuery('a.go-to-top').hide(150, 'linear');
    } else {
        jQuery('a.go-to-top').show(150, 'linear');
    }
}

jQuery(window).on('scroll', debounce(function(e) {
    showHideGoToTop();
}, 500));
