! function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.BootstrapLayout = e() : t.BootstrapLayout = e()
}(this, function() {
    return function(t) {
        function e(r) {
            if (n[r]) return n[r].exports;
            var o = n[r] = {
                exports: {},
                id: r,
                loaded: !1
            };
            return t[r].call(o.exports, o, o.exports, e), o.loaded = !0, o.exports
        }
        var n = {};
        return e.m = t, e.c = n, e.p = "", e(0)
    }([function(t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), n(71);
        var o = n(19),
            i = r(o),
            u = n(31),
            a = r(u),
            s = n(30),
            c = r(s),
            f = {
                Sidebar: i["default"],
                SidebarToggle: a["default"],
                SidebarMenuCollapse: c["default"]
            };
        e["default"] = f, t.exports = e["default"]
    }, function(t, e, n) {
        var r = n(55)("wks"),
            o = n(63),
            i = n(2).Symbol;
        t.exports = function(t) {
            return r[t] || (r[t] = i && i[t] || (i || o)("Symbol." + t))
        }
    }, function(t, e) {
        var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = n)
    }, function(t, e) {
        var n = Object;
        t.exports = {
            create: n.create,
            getProto: n.getPrototypeOf,
            isEnum: {}.propertyIsEnumerable,
            getDesc: n.getOwnPropertyDescriptor,
            setDesc: n.defineProperty,
            setDescs: n.defineProperties,
            getKeys: n.keys,
            getNames: n.getOwnPropertyNames,
            getSymbols: n.getOwnPropertySymbols,
            each: [].forEach
        }
    }, function(t, e) {
        var n = t.exports = {
            version: "1.2.6"
        };
        "number" == typeof __e && (__e = n)
    }, function(t, e, n) {
        var r = n(9);
        t.exports = function(t) {
            if (!r(t)) throw TypeError(t + " is not an object!");
            return t
        }
    }, function(t, e, n) {
        var r = n(13);
        t.exports = function(t, e, n) {
            if (r(t), void 0 === e) return t;
            switch (n) {
                case 1:
                    return function(n) {
                        return t.call(e, n)
                    };
                case 2:
                    return function(n, r) {
                        return t.call(e, n, r)
                    };
                case 3:
                    return function(n, r, o) {
                        return t.call(e, n, r, o)
                    }
            }
            return function() {
                return t.apply(e, arguments)
            }
        }
    }, function(t, e) {
        t.exports = {}
    }, function(t, e) {
        var n = {}.toString;
        t.exports = function(t) {
            return n.call(t).slice(8, -1)
        }
    }, function(t, e) {
        t.exports = function(t) {
            return "object" == typeof t ? null !== t : "function" == typeof t
        }
    }, function(t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = (e.SIDEBAR_TOGGLE_SELECTOR = '[data-toggle="sidebar"]', e.LAYOUT_SIDEBAR_CLASS = "layout-sidebar", e.LAYOUT_CONTAINER_SELECTOR = ".layout-container", e.SIDEBAR_VISIBLE_CLASS = "sidebar-visible", e.SIDEBAR_SIZE_CLASS = "sidebar-size", e.SIDEBAR_SELECTOR = ".sidebar", e.SIDEBAR_DATA_KEY = "bl.sidebar");
        e.SIDEBAR_EVENTS = {
            show: "show." + n,
            shown: "shown." + n,
            hide: "hide." + n,
            hidden: "hidden." + n
        }, e.SIDEBAR_MENU_SELECTORS = {
            menu: ".sidebar-menu",
            item: ".sidebar-menu-item",
            button: ".sidebar-menu-button",
            collapse: '[data-toggle="sidebar-collapse"] .sidebar-menu-button'
        }
    }, function(t, e) {
        "use strict";
        e.__esModule = !0, e["default"] = function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }
        e.__esModule = !0;
        var o = n(32),
            i = r(o);
        e["default"] = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), (0, i["default"])(t, r.key, r)
                }
            }
            return function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e
            }
        }()
    }, function(t, e) {
        t.exports = function(t) {
            if ("function" != typeof t) throw TypeError(t + " is not a function!");
            return t
        }
    }, function(t, e) {
        t.exports = function(t) {
            if (void 0 == t) throw TypeError("Can't call method on  " + t);
            return t
        }
    }, function(t, e, n) {
        t.exports = !n(21)(function() {
            return 7 != Object.defineProperty({}, "a", {
                get: function() {
                    return 7
                }
            }).a
        })
    }, function(t, e, n) {
        var r = n(2),
            o = n(4),
            i = n(6),
            u = "prototype",
            a = function(t, e, n) {
                var s, c, f, l = t & a.F,
                    p = t & a.G,
                    d = t & a.S,
                    v = t & a.P,
                    h = t & a.B,
                    _ = t & a.W,
                    y = p ? o : o[e] || (o[e] = {}),
                    S = p ? r : d ? r[e] : (r[e] || {})[u];
                p && (n = e);
                for (s in n) c = !l && S && s in S, c && s in y || (f = c ? S[s] : n[s], y[s] = p && "function" != typeof S[s] ? n[s] : h && c ? i(f, r) : _ && S[s] == f ? function(t) {
                    var e = function(e) {
                        return this instanceof t ? new t(e) : t(e)
                    };
                    return e[u] = t[u], e
                }(f) : v && "function" == typeof f ? i(Function.call, f) : f, v && ((y[u] || (y[u] = {}))[s] = f))
            };
        a.F = 1, a.G = 2, a.S = 4, a.P = 8, a.B = 16, a.W = 32, t.exports = a
    }, function(t, e, n) {
        var r = n(3),
            o = n(25);
        t.exports = n(15) ? function(t, e, n) {
            return r.setDesc(t, e, o(1, n))
        } : function(t, e, n) {
            return t[e] = n, t
        }
    }, function(t, e, n) {
        var r = n(3).setDesc,
            o = n(22),
            i = n(1)("toStringTag");
        t.exports = function(t, e, n) {
            t && !o(t = n ? t : t.prototype, i) && r(t, i, {
                configurable: !0,
                value: e
            })
        }
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.Sidebar = void 0;
        var o = n(34),
            i = r(o),
            u = n(33),
            a = r(u),
            s = n(11),
            c = r(s),
            f = n(12),
            l = r(f),
            p = n(28),
            d = r(p),
            v = n(73),
            h = r(v),
            _ = n(82),
            y = r(_),
            S = n(10),
            b = {
                320: ["xs", "xs-up"],
                480: ["xs", "xs-up"],
                544: ["sm", "sm-up"],
                768: ["md", "md-up"],
                992: ["lg", "lg-up"],
                1200: ["xl", "xl-up"],
                1600: ["xl", "xl-up"]
            },
            E = 30,
            g = function() {
                function t() {
                    var e = this;
                    (0, c["default"])(this, t), this.SCREEN_SIZE = null, this.SCREEN_MD_UP = null, this._updateScreenDebounce = null, this._updateScreen(), jQuery(window).resize(this._updateScreen.bind(this)), this._each(function(t) {
                        return e.init(t)
                    })
                }
                return (0, l["default"])(t, [{
                    key: "_options",
                    value: function(t) {
                        var e = this;
                        t = this._sidebar(t);
                        var n = t.data("position") || "left",
                            r = n.charAt(0),
                            o = t.attr("id"),
                            i = {
                                "default": this._sizeValue(t.data("size") || 3),
                                breakpoints: {}
                            };
                        this._breakpointValues().map(function(n) {
                            var r = t.data("size-" + n);
                            i.breakpoints[n] = r ? e._sizeValue(r) : null
                        });
                        var u = (t.data("visible") || "md-up").split(" "); - 1 !== u.indexOf("none") && (u = []);
                        var a = (t.data("layout") || "").split(" ").filter(function(t) {
                            return t.length
                        });
                        return a.length || (a = u), -1 !== a.indexOf("none") && (a = []), {
                            id: o,
                            position: n,
                            direction: r,
                            size: i,
                            visible: u,
                            layout: a
                        }
                    }
                }, {
                    key: "_sizeValue",
                    value: function(t) {
                        return (t + "").replace("%", "pc")
                    }
                }, {
                    key: "_breakpointValues",
                    value: function() {
                        var t = [];
                        return (0, d["default"])(b, function(e) {
                            return e.map(function(e) {
                                return t.push(e)
                            })
                        }), (0, h["default"])(t)
                    }
                }, {
                    key: "_breakpointKeys",
                    value: function() {
                        return (0, a["default"])(b).map(function(t) {
                            return parseInt(t, 10)
                        })
                    }
                }, {
                    key: "_visibleBreakpointsFor",
                    value: function(t) {
                        var e = [];
                        return this._options(t).visible.map(function(t) {
                            (0, d["default"])(b, function(n, r) {
                                -1 !== n.indexOf(t) && e.push(parseInt(r, 10))
                            })
                        }), e
                    }
                }, {
                    key: "_setBreakpointFor",
                    value: function(t, e, n, r) {
                        var o = this._layout(t);
                        e || o.data("breakpoints") || new y["default"](o, {
                            breakpoints: this._breakpointKeys()
                        }), o[e ? "off" : "on"]("enterBreakpoint" + n, r.bind(this))
                    }
                }, {
                    key: "_setBreakpointsFor",
                    value: function(t, e) {
                        var n = this;
                        t = this._sidebar(t);
                        var r = this._breakpointKeys(),
                            o = this._visibleBreakpointsFor(t);
                        (0, d["default"])(b, function(i, u, a) {
                            n._options(t).visible.forEach(function(a) {
                                if (-1 !== i.indexOf(a)) {
                                    var s = -1 !== a.indexOf("up"),
                                        c = r.filter(function(t) {
                                            return t > u
                                        }),
                                        f = parseInt(u, 10);
                                    if (f === Math.max.apply(null, o)) {
                                        var l = r.filter(function(t) {
                                            return u > t
                                        });
                                        l.filter(function(t) {
                                            return -1 === o.indexOf(t)
                                        }).forEach(function(r) {
                                            n._setBreakpointFor(t, e, r, function() {
                                                return n.hide(t)
                                            })
                                        })
                                    }
                                    s ? (c.unshift(u), c.filter(function(t) {
                                        return -1 === o.indexOf(t)
                                    }).forEach(function(r) {
                                        n._setBreakpointFor(t, e, r, function() {
                                            return n.show(t, !1)
                                        })
                                    })) : (n._setBreakpointFor(t, e, u, function() {
                                        return n.show(t, !1)
                                    }), c.filter(function(t) {
                                        return -1 === o.indexOf(t)
                                    }).forEach(function(r) {
                                        n._setBreakpointFor(t, e, r, function() {
                                            return n.hide(t)
                                        })
                                    }))
                                }
                            })
                        })
                    }
                }, {
                    key: "_triggerBreakpointsFor",
                    value: function(t) {
                        var e = this;
                        t = this._sidebar(t);
                        var n = this._layout(t);
                        return new i["default"](function(r) {
                            e._updateScreen(function() {
                                for (var o = e._visibleBreakpointsFor(t).sort(function(t, e) {
                                        return e - t
                                    }), i = 0; i < o.length; i++) {
                                    var u = o[i];
                                    if (e.SCREEN_SIZE >= u) {
                                        n.trigger("enterBreakpoint" + u), r();
                                        break
                                    }
                                }
                            })
                        })
                    }
                }, {
                    key: "_classString",
                    value: function(t) {
                        return t.join(" ")
                    }
                }, {
                    key: "_layoutClasses",
                    value: function(t) {
                        var e = this._options(t),
                            n = [];
                        return e.layout.map(function(t) {
                            var r = e.size["default"];
                            e.size.breakpoints[t] && (r = e.size.breakpoints[t]), n.push(S.LAYOUT_SIDEBAR_CLASS + "-" + e.direction + r + "-" + t)
                        }), (0, h["default"])(n)
                    }
                }, {
                    key: "_sizeClassName",
                    value: function(t, e) {
                        var n = S.SIDEBAR_SIZE_CLASS + "-" + t;
                        return e && (n = n + "-" + e), n
                    }
                }, {
                    key: "_sidebarClasses",
                    value: function(t) {
                        var e = this,
                            n = this._options(t),
                            r = ["sidebar-" + n.position, S.SIDEBAR_SIZE_CLASS + "-" + n.size["default"]];
                        return (0, d["default"])(n.size.breakpoints, function(t, n) {
                            t && r.push(e._sizeClassName(t, n))
                        }), r
                    }
                }, {
                    key: "_emit",
                    value: function(t, e) {
                        e = this._sidebar(e);
                        var n = this._options(e);
                        e.trigger(t, [n])
                    }
                }, {
                    key: "_layout",
                    value: function(t) {
                        return t = this._sidebar(t), t.closest(S.LAYOUT_CONTAINER_SELECTOR)
                    }
                }, {
                    key: "_sidebar",
                    value: function(t) {
                        return t instanceof jQuery == !0 ? t : jQuery(t)
                    }
                }, {
                    key: "_each",
                    value: function(t) {
                        var e = this;
                        jQuery(S.SIDEBAR_SELECTOR).each(function(n, r) {
                            return t.call(e, jQuery(r))
                        })
                    }
                }, {
                    key: "_updateScreen",
                    value: function(t) {
                        var e = this;
                        clearTimeout(this._updateScreenDebounce), this._updateScreenDebounce = setTimeout(function() {
                            var n = jQuery(window).width();
                            e.SCREEN_SIZE = n, e.SCREEN_MD_UP = n >= 768, "function" == typeof t && t()
                        }, E)
                    }
                }, {
                    key: "_onTouchBody",
                    value: function(t, e) {
                        !e.hasClass(S.SIDEBAR_VISIBLE_CLASS) || this.SCREEN_MD_UP && !e.hasClass("closable-desktop") || e.is(t.target) || 0 !== e.has(t.target).length || jQuery(t.target).is(S.SIDEBAR_TOGGLE_SELECTOR) || this.hide(e)
                    }
                }, {
                    key: "init",
                    value: function(t) {
                        var e = this;
                        t = this._sidebar(t), t.data(S.SIDEBAR_DATA_KEY) || (t.addClass(this._classString(this._sidebarClasses(t))), this._setBreakpointsFor(t), jQuery("body").on("click touchstart", function(n) {
                            return e._onTouchBody(n, t)
                        }), t.on(S.SIDEBAR_EVENTS.show, function(t, n) {
                            if (n = e._sidebar(n)) {
                                var r = e._options(n),
                                    o = jQuery(S.SIDEBAR_TOGGLE_SELECTOR + '[data-target="#' + r.id + '"]');
                                o.addClass("active")
                            }
                        }).on(S.SIDEBAR_EVENTS.hide, function(t, n) {
                            if (n = e._sidebar(n)) {
                                var r = e._options(n),
                                    o = jQuery(S.SIDEBAR_TOGGLE_SELECTOR + '[data-target="#' + r.id + '"]');
                                o.removeClass("active")
                            }
                        }), this._triggerBreakpointsFor(t), t.data(S.SIDEBAR_DATA_KEY, !0))
                    }
                }, {
                    key: "destroy",
                    value: function(t) {
                        var e = this;
                        t = this._sidebar(t), this._setBreakpointsFor(t, !0), jQuery("body").off("click touchstart", function(n) {
                            return e._onTouchBody(n, t)
                        }), t.off(S.SIDEBAR_DATA_KEY), t.removeData(S.SIDEBAR_DATA_KEY)
                    }
                }, {
                    key: "toggle",
                    value: function(t) {
                        t = this._sidebar(t), t.hasClass(S.SIDEBAR_VISIBLE_CLASS) ? this.hide(t) : this.show(t)
                    }
                }, {
                    key: "show",
                    value: function(t) {
                        var e = this,
                            n = arguments.length <= 1 || void 0 === arguments[1] ? !0 : arguments[1];
                        if (t = this._sidebar(t), this._emit(S.SIDEBAR_EVENTS.show, t), this._layout(t).addClass(this._classString(this._layoutClasses(t))), this.SCREEN_MD_UP || this._each(function(n) {
                                !n.is(t) && n.hasClass(S.SIDEBAR_VISIBLE_CLASS) && e.hide(n)
                            }), !t.hasClass(S.SIDEBAR_VISIBLE_CLASS)) {
                            if (n) return t.addClass("sidebar-transition"), setTimeout(function() {
                                t.addClass(S.SIDEBAR_VISIBLE_CLASS), e._emit(S.SIDEBAR_EVENTS.shown, t)
                            }, 10);
                            t.addClass(S.SIDEBAR_VISIBLE_CLASS), this._emit(S.SIDEBAR_EVENTS.shown, t)
                        }
                    }
                }, {
                    key: "hide",
                    value: function(t) {
                        var e = this;
                        t = this._sidebar(t);
                        var n = t.attr("class").match(new RegExp(S.SIDEBAR_VISIBLE_CLASS + "([a-z-]+)?", "ig"));
                        this._layout(t).removeClass(this._classString(this._layoutClasses(t))), n && (this._emit(S.SIDEBAR_EVENTS.hide, t), t.removeClass(this._classString(n)), t.hasClass("sidebar-transition") ? setTimeout(function() {
                            t.removeClass("sidebar-transition"), e._emit(S.SIDEBAR_EVENTS.hidden, t)
                        }, 450) : this._emit(S.SIDEBAR_EVENTS.hidden, t))
                    }
                }]), t
            }();
        e["default"] = new g, e.Sidebar = g
    }, function(t, e, n) {
        var r = n(8),
            o = n(1)("toStringTag"),
            i = "Arguments" == r(function() {
                return arguments
            }());
        t.exports = function(t) {
            var e, n, u;
            return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(n = (e = Object(t))[o]) ? n : i ? r(e) : "Object" == (u = r(e)) && "function" == typeof e.callee ? "Arguments" : u
        }
    }, function(t, e) {
        t.exports = function(t) {
            try {
                return !!t()
            } catch (e) {
                return !0
            }
        }
    }, function(t, e) {
        var n = {}.hasOwnProperty;
        t.exports = function(t, e) {
            return n.call(t, e)
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(24),
            o = n(16),
            i = n(26),
            u = n(17),
            a = n(22),
            s = n(7),
            c = n(46),
            f = n(18),
            l = n(3).getProto,
            p = n(1)("iterator"),
            d = !([].keys && "next" in [].keys()),
            v = "@@iterator",
            h = "keys",
            _ = "values",
            y = function() {
                return this
            };
        t.exports = function(t, e, n, S, b, E, g) {
            c(n, e, S);
            var m, x, k = function(t) {
                    if (!d && t in I) return I[t];
                    switch (t) {
                        case h:
                            return function() {
                                return new n(this, t)
                            };
                        case _:
                            return function() {
                                return new n(this, t)
                            }
                    }
                    return function() {
                        return new n(this, t)
                    }
                },
                A = e + " Iterator",
                C = b == _,
                w = !1,
                I = t.prototype,
                O = I[p] || I[v] || b && I[b],
                B = O || k(b);
            if (O) {
                var T = l(B.call(new t));
                f(T, A, !0), !r && a(I, v) && u(T, p, y), C && O.name !== _ && (w = !0, B = function() {
                    return O.call(this)
                })
            }
            if (r && !g || !d && !w && I[p] || u(I, p, B), s[e] = B, s[A] = y, b)
                if (m = {
                        values: C ? B : k(_),
                        keys: E ? B : k(h),
                        entries: C ? k("entries") : B
                    }, g)
                    for (x in m) x in I || i(I, x, m[x]);
                else o(o.P + o.F * (d || w), e, m);
            return m
        }
    }, function(t, e) {
        t.exports = !0
    }, function(t, e) {
        t.exports = function(t, e) {
            return {
                enumerable: !(1 & t),
                configurable: !(2 & t),
                writable: !(4 & t),
                value: e
            }
        }
    }, function(t, e, n) {
        t.exports = n(17)
    }, function(t, e) {
        var n = Math.ceil,
            r = Math.floor;
        t.exports = function(t) {
            return isNaN(t = +t) ? 0 : (t > 0 ? r : n)(t)
        }
    }, function(t, e, n) {
        function r(t, e, n) {
            i(t, function(r, i) {
                return o(t, i) ? e.call(n, t[i], i, t) : void 0
            })
        }
        var o = n(29),
            i = n(81);
        t.exports = r
    }, function(t, e) {
        function n(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }
        t.exports = n
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.SidebarMenuCollapse = void 0;
        var o = n(11),
            i = r(o),
            u = n(12),
            a = r(u),
            s = n(10),
            c = function() {
                function t() {
                    var e = this;
                    (0, i["default"])(this, t), jQuery(s.SIDEBAR_MENU_SELECTORS.collapse).each(function(t, n) {
                        return e.init(n)
                    })
                }
                return (0, a["default"])(t, [{
                    key: "_element",
                    value: function(t) {
                        return t instanceof jQuery ? t : jQuery(t)
                    }
                }, {
                    key: "_onClick",
                    value: function(t) {
                        var e = jQuery(t.currentTarget);
                        if (e.next("ul").html()) {
                            t.preventDefault();
                            var n = e.parent();
                            if (n.hasClass("open")) n.removeClass("open");
                            else {
                                var r = e.closest(s.SIDEBAR_MENU_SELECTORS.menu),
                                    o = r.find(s.SIDEBAR_MENU_SELECTORS.item + ".open");
                                o.removeClass("open"), n.addClass("open")
                            }
                        }
                    }
                }, {
                    key: "init",
                    value: function(t) {
                        this._element(t).on("click", this._onClick)
                    }
                }]), t
            }();
        e["default"] = new c, e.SidebarMenuCollapse = c
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.SidebarToggle = void 0;
        var o = n(11),
            i = r(o),
            u = n(12),
            a = r(u),
            s = n(19),
            c = n(10),
            f = function() {
                function t() {
                    var e = this;
                    (0, i["default"])(this, t), this.sidebar = new s.Sidebar, jQuery(c.SIDEBAR_TOGGLE_SELECTOR).each(function(t, n) {
                        return e.init(n)
                    })
                }
                return (0, a["default"])(t, [{
                    key: "_element",
                    value: function(t) {
                        return t instanceof jQuery ? t : jQuery(t)
                    }
                }, {
                    key: "_onClick",
                    value: function(t) {
                        t.stopPropagation();
                        var e = jQuery(t.currentTarget).data("target");
                        this.sidebar.toggle(e)
                    }
                }, {
                    key: "init",
                    value: function(t) {
                        var e = this;
                        this._element(t).on("click", function(t) {
                            return e._onClick(t)
                        })
                    }
                }]), t
            }();
        e["default"] = new f, e.SidebarToggle = f
    }, function(t, e, n) {
        t.exports = {
            "default": n(35),
            __esModule: !0
        }
    }, function(t, e, n) {
        t.exports = {
            "default": n(36),
            __esModule: !0
        }
    }, function(t, e, n) {
        t.exports = {
            "default": n(37),
            __esModule: !0
        }
    }, function(t, e, n) {
        var r = n(3);
        t.exports = function(t, e, n) {
            return r.setDesc(t, e, n)
        }
    }, function(t, e, n) {
        n(66), t.exports = n(4).Object.keys
    }, function(t, e, n) {
        n(67), n(69), n(70), n(68), t.exports = n(4).Promise
    }, function(t, e) {
        t.exports = function() {}
    }, function(t, e, n) {
        var r = n(9),
            o = n(2).document,
            i = r(o) && r(o.createElement);
        t.exports = function(t) {
            return i ? o.createElement(t) : {}
        }
    }, function(t, e, n) {
        var r = n(6),
            o = n(45),
            i = n(44),
            u = n(5),
            a = n(61),
            s = n(64);
        t.exports = function(t, e, n, c) {
            var f, l, p, d = s(t),
                v = r(n, c, e ? 2 : 1),
                h = 0;
            if ("function" != typeof d) throw TypeError(t + " is not iterable!");
            if (i(d))
                for (f = a(t.length); f > h; h++) e ? v(u(l = t[h])[0], l[1]) : v(t[h]);
            else
                for (p = d.call(t); !(l = p.next()).done;) o(p, v, l.value, e)
        }
    }, function(t, e, n) {
        t.exports = n(2).document && document.documentElement
    }, function(t, e) {
        t.exports = function(t, e, n) {
            var r = void 0 === n;
            switch (e.length) {
                case 0:
                    return r ? t() : t.call(n);
                case 1:
                    return r ? t(e[0]) : t.call(n, e[0]);
                case 2:
                    return r ? t(e[0], e[1]) : t.call(n, e[0], e[1]);
                case 3:
                    return r ? t(e[0], e[1], e[2]) : t.call(n, e[0], e[1], e[2]);
                case 4:
                    return r ? t(e[0], e[1], e[2], e[3]) : t.call(n, e[0], e[1], e[2], e[3])
            }
            return t.apply(n, e)
        }
    }, function(t, e, n) {
        var r = n(8);
        t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
            return "String" == r(t) ? t.split("") : Object(t)
        }
    }, function(t, e, n) {
        var r = n(7),
            o = n(1)("iterator"),
            i = Array.prototype;
        t.exports = function(t) {
            return void 0 !== t && (r.Array === t || i[o] === t)
        }
    }, function(t, e, n) {
        var r = n(5);
        t.exports = function(t, e, n, o) {
            try {
                return o ? e(r(n)[0], n[1]) : e(n)
            } catch (i) {
                var u = t["return"];
                throw void 0 !== u && r(u.call(t)), i
            }
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(3),
            o = n(25),
            i = n(18),
            u = {};
        n(17)(u, n(1)("iterator"), function() {
            return this
        }), t.exports = function(t, e, n) {
            t.prototype = r.create(u, {
                next: o(1, n)
            }), i(t, e + " Iterator")
        }
    }, function(t, e, n) {
        var r = n(1)("iterator"),
            o = !1;
        try {
            var i = [7][r]();
            i["return"] = function() {
                o = !0
            }, Array.from(i, function() {
                throw 2
            })
        } catch (u) {}
        t.exports = function(t, e) {
            if (!e && !o) return !1;
            var n = !1;
            try {
                var i = [7],
                    u = i[r]();
                u.next = function() {
                    n = !0
                }, i[r] = function() {
                    return u
                }, t(i)
            } catch (a) {}
            return n
        }
    }, function(t, e) {
        t.exports = function(t, e) {
            return {
                value: e,
                done: !!t
            }
        }
    }, function(t, e, n) {
        var r, o, i, u = n(2),
            a = n(59).set,
            s = u.MutationObserver || u.WebKitMutationObserver,
            c = u.process,
            f = u.Promise,
            l = "process" == n(8)(c),
            p = function() {
                var t, e, n;
                for (l && (t = c.domain) && (c.domain = null, t.exit()); r;) e = r.domain, n = r.fn, e && e.enter(), n(), e && e.exit(), r = r.next;
                o = void 0, t && t.enter()
            };
        if (l) i = function() {
            c.nextTick(p)
        };
        else if (s) {
            var d = 1,
                v = document.createTextNode("");
            new s(p).observe(v, {
                characterData: !0
            }), i = function() {
                v.data = d = -d
            }
        } else i = f && f.resolve ? function() {
            f.resolve().then(p)
        } : function() {
            a.call(u, p)
        };
        t.exports = function(t) {
            var e = {
                fn: t,
                next: void 0,
                domain: l && c.domain
            };
            o && (o.next = e), r || (r = e, i()), o = e
        }
    }, function(t, e, n) {
        var r = n(16),
            o = n(4),
            i = n(21);
        t.exports = function(t, e) {
            var n = (o.Object || {})[t] || Object[t],
                u = {};
            u[t] = e(n), r(r.S + r.F * i(function() {
                n(1)
            }), "Object", u)
        }
    }, function(t, e, n) {
        var r = n(26);
        t.exports = function(t, e) {
            for (var n in e) r(t, n, e[n]);
            return t
        }
    }, function(t, e) {
        t.exports = Object.is || function(t, e) {
            return t === e ? 0 !== t || 1 / t === 1 / e : t != t && e != e
        }
    }, function(t, e, n) {
        var r = n(3).getDesc,
            o = n(9),
            i = n(5),
            u = function(t, e) {
                if (i(t), !o(e) && null !== e) throw TypeError(e + ": can't set as prototype!")
            };
        t.exports = {
            set: Object.setPrototypeOf || ("__proto__" in {} ? function(t, e, o) {
                try {
                    o = n(6)(Function.call, r(Object.prototype, "__proto__").set, 2), o(t, []), e = !(t instanceof Array)
                } catch (i) {
                    e = !0
                }
                return function(t, n) {
                    return u(t, n), e ? t.__proto__ = n : o(t, n), t
                }
            }({}, !1) : void 0),
            check: u
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(4),
            o = n(3),
            i = n(15),
            u = n(1)("species");
        t.exports = function(t) {
            var e = r[t];
            i && e && !e[u] && o.setDesc(e, u, {
                configurable: !0,
                get: function() {
                    return this
                }
            })
        }
    }, function(t, e, n) {
        var r = n(2),
            o = "__core-js_shared__",
            i = r[o] || (r[o] = {});
        t.exports = function(t) {
            return i[t] || (i[t] = {})
        }
    }, function(t, e, n) {
        var r = n(5),
            o = n(13),
            i = n(1)("species");
        t.exports = function(t, e) {
            var n, u = r(t).constructor;
            return void 0 === u || void 0 == (n = r(u)[i]) ? e : o(n)
        }
    }, function(t, e) {
        t.exports = function(t, e, n) {
            if (!(t instanceof e)) throw TypeError(n + ": use the 'new' operator!");
            return t
        }
    }, function(t, e, n) {
        var r = n(27),
            o = n(14);
        t.exports = function(t) {
            return function(e, n) {
                var i, u, a = String(o(e)),
                    s = r(n),
                    c = a.length;
                return 0 > s || s >= c ? t ? "" : void 0 : (i = a.charCodeAt(s), 55296 > i || i > 56319 || s + 1 === c || (u = a.charCodeAt(s + 1)) < 56320 || u > 57343 ? t ? a.charAt(s) : i : t ? a.slice(s, s + 2) : (i - 55296 << 10) + (u - 56320) + 65536)
            }
        }
    }, function(t, e, n) {
        var r, o, i, u = n(6),
            a = n(42),
            s = n(41),
            c = n(39),
            f = n(2),
            l = f.process,
            p = f.setImmediate,
            d = f.clearImmediate,
            v = f.MessageChannel,
            h = 0,
            _ = {},
            y = "onreadystatechange",
            S = function() {
                var t = +this;
                if (_.hasOwnProperty(t)) {
                    var e = _[t];
                    delete _[t], e()
                }
            },
            b = function(t) {
                S.call(t.data)
            };
        p && d || (p = function(t) {
            for (var e = [], n = 1; arguments.length > n;) e.push(arguments[n++]);
            return _[++h] = function() {
                a("function" == typeof t ? t : Function(t), e)
            }, r(h), h
        }, d = function(t) {
            delete _[t]
        }, "process" == n(8)(l) ? r = function(t) {
            l.nextTick(u(S, t, 1))
        } : v ? (o = new v, i = o.port2, o.port1.onmessage = b, r = u(i.postMessage, i, 1)) : f.addEventListener && "function" == typeof postMessage && !f.importScripts ? (r = function(t) {
            f.postMessage(t + "", "*")
        }, f.addEventListener("message", b, !1)) : r = y in c("script") ? function(t) {
            s.appendChild(c("script"))[y] = function() {
                s.removeChild(this), S.call(t)
            }
        } : function(t) {
            setTimeout(u(S, t, 1), 0)
        }), t.exports = {
            set: p,
            clear: d
        }
    }, function(t, e, n) {
        var r = n(43),
            o = n(14);
        t.exports = function(t) {
            return r(o(t))
        }
    }, function(t, e, n) {
        var r = n(27),
            o = Math.min;
        t.exports = function(t) {
            return t > 0 ? o(r(t), 9007199254740991) : 0
        }
    }, function(t, e, n) {
        var r = n(14);
        t.exports = function(t) {
            return Object(r(t))
        }
    }, function(t, e) {
        var n = 0,
            r = Math.random();
        t.exports = function(t) {
            return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + r).toString(36))
        }
    }, function(t, e, n) {
        var r = n(20),
            o = n(1)("iterator"),
            i = n(7);
        t.exports = n(4).getIteratorMethod = function(t) {
            return void 0 != t ? t[o] || t["@@iterator"] || i[r(t)] : void 0
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(38),
            o = n(48),
            i = n(7),
            u = n(60);
        t.exports = n(23)(Array, "Array", function(t, e) {
            this._t = u(t), this._i = 0, this._k = e
        }, function() {
            var t = this._t,
                e = this._k,
                n = this._i++;
            return !t || n >= t.length ? (this._t = void 0, o(1)) : "keys" == e ? o(0, n) : "values" == e ? o(0, t[n]) : o(0, [n, t[n]])
        }, "values"), i.Arguments = i.Array, r("keys"), r("values"), r("entries")
    }, function(t, e, n) {
        var r = n(62);
        n(50)("keys", function(t) {
            return function(e) {
                return t(r(e))
            }
        })
    }, function(t, e) {}, function(t, e, n) {
        "use strict";
        var r, o = n(3),
            i = n(24),
            u = n(2),
            a = n(6),
            s = n(20),
            c = n(16),
            f = n(9),
            l = n(5),
            p = n(13),
            d = n(57),
            v = n(40),
            h = n(53).set,
            _ = n(52),
            y = n(1)("species"),
            S = n(56),
            b = n(49),
            E = "Promise",
            g = u.process,
            m = "process" == s(g),
            x = u[E],
            k = function(t) {
                var e = new x(function() {});
                return t && (e.constructor = Object), x.resolve(e) === e
            },
            A = function() {
                function t(e) {
                    var n = new x(e);
                    return h(n, t.prototype), n
                }
                var e = !1;
                try {
                    if (e = x && x.resolve && k(), h(t, x), t.prototype = o.create(x.prototype, {
                            constructor: {
                                value: t
                            }
                        }), t.resolve(5).then(function() {}) instanceof t || (e = !1), e && n(15)) {
                        var r = !1;
                        x.resolve(o.setDesc({}, "then", {
                            get: function() {
                                r = !0
                            }
                        })), e = r
                    }
                } catch (i) {
                    e = !1
                }
                return e
            }(),
            C = function(t, e) {
                return i && t === x && e === r ? !0 : _(t, e)
            },
            w = function(t) {
                var e = l(t)[y];
                return void 0 != e ? e : t
            },
            I = function(t) {
                var e;
                return f(t) && "function" == typeof(e = t.then) ? e : !1
            },
            O = function(t) {
                var e, n;
                this.promise = new t(function(t, r) {
                    if (void 0 !== e || void 0 !== n) throw TypeError("Bad Promise constructor");
                    e = t, n = r
                }), this.resolve = p(e), this.reject = p(n)
            },
            B = function(t) {
                try {
                    t()
                } catch (e) {
                    return {
                        error: e
                    }
                }
            },
            T = function(t, e) {
                if (!t.n) {
                    t.n = !0;
                    var n = t.c;
                    b(function() {
                        for (var r = t.v, o = 1 == t.s, i = 0, a = function(e) {
                                var n, i, u = o ? e.ok : e.fail,
                                    a = e.resolve,
                                    s = e.reject;
                                try {
                                    u ? (o || (t.h = !0), n = u === !0 ? r : u(r), n === e.promise ? s(TypeError("Promise-chain cycle")) : (i = I(n)) ? i.call(n, a, s) : a(n)) : s(r)
                                } catch (c) {
                                    s(c)
                                }
                            }; n.length > i;) a(n[i++]);
                        n.length = 0, t.n = !1, e && setTimeout(function() {
                            var e, n, o = t.p;
                            D(o) && (m ? g.emit("unhandledRejection", r, o) : (e = u.onunhandledrejection) ? e({
                                promise: o,
                                reason: r
                            }) : (n = u.console) && n.error && n.error("Unhandled promise rejection", r)), t.a = void 0
                        }, 1)
                    })
                }
            },
            D = function(t) {
                var e, n = t._d,
                    r = n.a || n.c,
                    o = 0;
                if (n.h) return !1;
                for (; r.length > o;)
                    if (e = r[o++], e.fail || !D(e.promise)) return !1;
                return !0
            },
            j = function(t) {
                var e = this;
                e.d || (e.d = !0, e = e.r || e, e.v = t, e.s = 2, e.a = e.c.slice(), T(e, !0))
            },
            R = function(t) {
                var e, n = this;
                if (!n.d) {
                    n.d = !0, n = n.r || n;
                    try {
                        if (n.p === t) throw TypeError("Promise can't be resolved itself");
                        (e = I(t)) ? b(function() {
                            var r = {
                                r: n,
                                d: !1
                            };
                            try {
                                e.call(t, a(R, r, 1), a(j, r, 1))
                            } catch (o) {
                                j.call(r, o)
                            }
                        }): (n.v = t, n.s = 1, T(n, !1))
                    } catch (r) {
                        j.call({
                            r: n,
                            d: !1
                        }, r)
                    }
                }
            };
        A || (x = function(t) {
            p(t);
            var e = this._d = {
                p: d(this, x, E),
                c: [],
                a: void 0,
                s: 0,
                d: !1,
                v: void 0,
                h: !1,
                n: !1
            };
            try {
                t(a(R, e, 1), a(j, e, 1))
            } catch (n) {
                j.call(e, n)
            }
        }, n(51)(x.prototype, {
            then: function(t, e) {
                var n = new O(S(this, x)),
                    r = n.promise,
                    o = this._d;
                return n.ok = "function" == typeof t ? t : !0, n.fail = "function" == typeof e && e, o.c.push(n), o.a && o.a.push(n), o.s && T(o, !1), r
            },
            "catch": function(t) {
                return this.then(void 0, t)
            }
        })), c(c.G + c.W + c.F * !A, {
            Promise: x
        }), n(18)(x, E), n(54)(E), r = n(4)[E], c(c.S + c.F * !A, E, {
            reject: function(t) {
                var e = new O(this),
                    n = e.reject;
                return n(t), e.promise
            }
        }), c(c.S + c.F * (!A || k(!0)), E, {
            resolve: function(t) {
                if (t instanceof x && C(t.constructor, this)) return t;
                var e = new O(this),
                    n = e.resolve;
                return n(t), e.promise
            }
        }), c(c.S + c.F * !(A && n(47)(function(t) {
            x.all(t)["catch"](function() {})
        })), E, {
            all: function(t) {
                var e = w(this),
                    n = new O(e),
                    r = n.resolve,
                    i = n.reject,
                    u = [],
                    a = B(function() {
                        v(t, !1, u.push, u);
                        var n = u.length,
                            a = Array(n);
                        n ? o.each.call(u, function(t, o) {
                            var u = !1;
                            e.resolve(t).then(function(t) {
                                u || (u = !0, a[o] = t, --n || r(a))
                            }, i)
                        }) : r(a)
                    });
                return a && i(a.error), n.promise
            },
            race: function(t) {
                var e = w(this),
                    n = new O(e),
                    r = n.reject,
                    o = B(function() {
                        v(t, !1, function(t) {
                            e.resolve(t).then(n.resolve, r)
                        })
                    });
                return o && r(o.error), n.promise
            }
        })
    }, function(t, e, n) {
        "use strict";
        var r = n(58)(!0);
        n(23)(String, "String", function(t) {
            this._t = String(t), this._i = 0
        }, function() {
            var t, e = this._t,
                n = this._i;
            return n >= e.length ? {
                value: void 0,
                done: !0
            } : (t = r(e, n), this._i += t.length, {
                value: t,
                done: !1
            })
        })
    }, function(t, e, n) {
        n(65);
        var r = n(7);
        r.NodeList = r.HTMLCollection = r.Array
    }, function(t, e) {}, function(t, e, n) {
        function r(t, e, n) {
            e = o(e, n);
            var r = [];
            if (null == t) return r;
            for (var i, u = -1, a = t.length; ++u < a;) i = t[u], e(i, u, t) && r.push(i);
            return r
        }
        var o = n(75);
        t.exports = r
    }, function(t, e, n) {
        function r(t, e) {
            return e = e || o, i(t, function(t, n, r) {
                for (var o = r.length; ++n < o;)
                    if (e(t, r[n])) return !1;
                return !0
            })
        }

        function o(t, e) {
            return t === e
        }
        var i = n(72);
        t.exports = r
    }, function(t, e) {
        function n(t) {
            return t
        }
        t.exports = n
    }, function(t, e, n) {
        function r(t, e) {
            if (null == t) return o;
            switch (typeof t) {
                case "function":
                    return "undefined" != typeof e ? function(n, r, o) {
                        return t.call(e, n, r, o)
                    } : t;
                case "object":
                    return function(e) {
                        return u(e, t)
                    };
                case "string":
                case "number":
                    return i(t)
            }
        }
        var o = n(74),
            i = n(76),
            u = n(80);
        t.exports = r
    }, function(t, e) {
        function n(t) {
            return function(e) {
                return e[t]
            }
        }
        t.exports = n
    }, function(t, e, n) {
        var r = n(78),
            o = Array.isArray || function(t) {
                return r(t, "Array")
            };
        t.exports = o
    }, function(t, e, n) {
        function r(t, e) {
            return o(t) === e
        }
        var o = n(79);
        t.exports = r
    }, function(t, e) {
        function n(t) {
            return null === t ? "Null" : t === r ? "Undefined" : o.exec(i.call(t))[1]
        }
        var r, o = /^\[object (.*)\]$/,
            i = Object.prototype.toString;
        t.exports = n
    }, function(t, e, n) {
        function r(t, e) {
            for (var n = -1, r = t.length; ++n < r;)
                if (u(t[n], e)) return !0;
            return !1
        }

        function o(t, e) {
            for (var n = -1, o = e.length; ++n < o;)
                if (!r(t, e[n])) return !1;
            return !0
        }

        function i(t, e) {
            var n = !0;
            return a(e, function(e, r) {
                return u(t[r], e) ? void 0 : n = !1
            }), n
        }

        function u(t, e) {
            return t && "object" == typeof t ? s(t) && s(e) ? o(t, e) : i(t, e) : t === e
        }
        var a = n(28),
            s = n(77);
        t.exports = u
    }, function(t, e, n) {
        function r() {
            a = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"], u = !0;
            for (var t in {
                    toString: null
                }) u = !1
        }

        function o(t, e, n) {
            var o, c = 0;
            null == u && r();
            for (o in t)
                if (i(e, t, o, n) === !1) break;
            if (u)
                for (var f = t.constructor, l = !!f && t === f.prototype;
                    (o = a[c++]) && ("constructor" === o && (l || !s(t, o)) || t[o] === Object.prototype[o] || i(e, t, o, n) !== !1););
        }

        function i(t, e, n, r) {
            return t.call(r, e[n], n, e)
        }
        var u, a, s = n(29);
        t.exports = o
    }, function(t, e, n) {
        ! function(e, n) {
            t.exports = n()
        }(this, function() {
            return function(t) {
                function e(r) {
                    if (n[r]) return n[r].exports;
                    var o = n[r] = {
                        exports: {},
                        id: r,
                        loaded: !1
                    };
                    return t[r].call(o.exports, o, o.exports, e), o.loaded = !0, o.exports
                }
                var n = {};
                return e.m = t, e.c = n, e.p = "", e(0)
            }([function(t, e, n) {
                "use strict";

                function r(t) {
                    return t && t.__esModule ? t : {
                        "default": t
                    }
                }
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var o = n(2),
                    i = r(o),
                    u = n(3),
                    a = r(u),
                    s = function() {
                        function t(e) {
                            var n = this,
                                r = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                            (0, i["default"])(this, t), this.target = e instanceof jQuery == 1 ? e : $(e), this.lastSize = 0, this.options = jQuery.extend({
                                distinct: !0,
                                breakpoints: [320, 480, 768, 1024],
                                interval: 250
                            }, r), this.interval = setInterval(function() {
                                var t = n.target.width(),
                                    e = !1;
                                n.options.breakpoints.sort(function(t, e) {
                                    return e - t
                                }).forEach(function(r, o) {
                                    if (!e && t >= r && n.lastSize < r) {
                                        if (n.options.distinct) {
                                            for (var i in n.options.breakpoints.sort(function(t, e) {
                                                    return e - t
                                                })) n.target.hasClass("breakpoint-" + n.options.breakpoints[i]) && (n.target.removeClass("breakpoint-" + n.options.breakpoints[i]), n.target.trigger("exitBreakpoint" + n.options.breakpoints[i]));
                                            e = !0
                                        }
                                        n.target.addClass("breakpoint-" + r), n.target.trigger("enterBreakpoint" + r)
                                    }
                                    r > t && n.lastSize >= r && (n.target.removeClass("breakpoint-" + r), n.target.trigger("exitBreakpoint" + r)), n.options.distinct && t >= r && t < n.options.breakpoints[o - 1] && n.lastSize > t && n.lastSize > 0 && !n.target.hasClass("breakpoint-" + r) && (n.target.addClass("breakpoint-" + r), n.target.trigger("enterBreakpoint" + r))
                                }), n.lastSize !== t && (n.lastSize = t)
                            }, this.options.interval), this.target.data("breakpoints", this)
                        }
                        return (0, a["default"])(t, [{
                            key: "destroy",
                            value: function() {
                                clearInterval(this.interval), this.lastSize = 0
                            }
                        }]), t
                    }();
                e["default"] = s, t.exports = e["default"]
            }, function(t, e, n) {
                t.exports = {
                    "default": n(4),
                    __esModule: !0
                }
            }, function(t, e) {
                "use strict";
                e.__esModule = !0, e["default"] = function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }
            }, function(t, e, n) {
                "use strict";

                function r(t) {
                    return t && t.__esModule ? t : {
                        "default": t
                    }
                }
                e.__esModule = !0;
                var o = n(1),
                    i = r(o);
                e["default"] = function() {
                    function t(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), (0, i["default"])(t, r.key, r)
                        }
                    }
                    return function(e, n, r) {
                        return n && t(e.prototype, n), r && t(e, r), e
                    }
                }()
            }, function(t, e, n) {
                var r = n(5);
                t.exports = function(t, e, n) {
                    return r.setDesc(t, e, n)
                }
            }, function(t, e) {
                var n = Object;
                t.exports = {
                    create: n.create,
                    getProto: n.getPrototypeOf,
                    isEnum: {}.propertyIsEnumerable,
                    getDesc: n.getOwnPropertyDescriptor,
                    setDesc: n.defineProperty,
                    setDescs: n.defineProperties,
                    getKeys: n.keys,
                    getNames: n.getOwnPropertyNames,
                    getSymbols: n.getOwnPropertySymbols,
                    each: [].forEach
                }
            }])
        })
    }])
});
