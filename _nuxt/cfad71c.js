(window.webpackJsonp = window.webpackJsonp || []).push([
    [5, 15, 19, 25, 35, 40, 42, 43, 53], {
        455: function(t, e, n) {
            "use strict";
            n.r(e);
            n(22);
            var r = n(8),
                o = n(9),
                l = n(11),
                c = n(12),
                d = n(2),
                m = n(4),
                f = (n(18), n(10), n(26), n(0)),
                h = n(439),
                v = n(443),
                y = n(526);

            function _(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = Object(d.a)(t);
                    if (e) {
                        var o = Object(d.a)(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return Object(c.a)(this, n)
                }
            }
            var w = function(t, e, n, desc) {
                var r, o = arguments.length,
                    l = o < 3 ? e : null === desc ? desc = Object.getOwnPropertyDescriptor(e, n) : desc;
                if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(m.a)(Reflect)) && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, e, n, desc);
                else
                    for (var i = t.length - 1; i >= 0; i--)(r = t[i]) && (l = (o < 3 ? r(l) : o > 3 ? r(e, n, l) : r(e, n)) || l);
                return o > 3 && l && Object.defineProperty(e, n, l), l
            }, x = function(t) {
                Object(l.a)(n, t);
                var e = _(n);

                function n() {
                    var t;
                    return Object(r.a)(this, n), (t = e.apply(this, arguments)).FAQsList = y.a, t
                }
                return Object(o.a)(n, [{
                    key: "markedFAQsList",
                    get: function() {
                        if (this.faqList && this.faqList.length) return this.faqList;
                        var t = [];
                        return this.FAQsList.forEach((function(e) {
                            e.items.forEach((function(e) {
                                e.isMarked && t.push(e)
                            }))
                        })), t
                    }
                }]), n
            }(f.d);
            w([Object(f.c)({
                type: Array,
                default: function() {
                    return []
                }
            })], x.prototype, "faqList", void 0);
            var C = x = w([Object(f.a)({
                    components: {
                        Accordion: h.
                            default,
                        AccordionItem: v.
                            default
                    }
                })], x),
                k = (n(541), n(5)),
                component = Object(k.a)(C, (function() {
                    var t = this,
                        e = t._self._c;
                    t._self._setupProxy;
                    return t.faqList.length ? e("section", [e("div", {
                        staticClass: "container container--box container--mini gutter-4 md:gutter-2 pt-32 pb-16 md:pb-72"
                    }, [t._m(0), t._v(" "), e("div", {
                        staticClass: "row"
                    }, [e("div", {
                        staticClass: "col col--12"
                    }, [e("div", {
                        staticClass: "faq-content mt-8 pt-0 md:pt-32",
                        attrs: {
                            itemscope: "",
                            itemtype: "https://schema.org/FAQPage",
                            "data-aos-delay": "200",
                            "data-aos": "animation-translate-y"
                        }
                    }, [e("accordion", t._l(t.markedFAQsList, (function(n, r) {
                        return e("accordion-item", {
                            key: r,
                            attrs: {
                                itemprop: "mainEntity",
                                itemtype: "https://schema.org/Question"
                            }
                        }, [e("template", {
                            slot: "accordion-trigger"
                        }, [e("h2", {
                            staticClass: "font-14 font-500 md:font-20 mb-0 line-height-16 md:line-height-24",
                            attrs: {
                                itemprop: "name"
                            }
                        }, [t._v("\n                  " + t._s(n.question) + "\n                ")])]), t._v(" "), e("template", {
                            slot: "accordion-content"
                        }, [e("div", {
                            staticClass: "pt-20",
                            attrs: {
                                itemscope: "",
                                itemprop: "acceptedAnswer",
                                itemtype: "https://schema.org/Answer"
                            }
                        }, [e("div", {
                            staticClass: "font-12 md:font-16 mb-0 text-secondary line-height-18 md:line-height-24",
                            domProps: {
                                innerHTML: t._s(n.answer)
                            }
                        })])])], 2)
                    })), 1)], 1)])])])]) : t._e()
                }), [
                    function() {
                        var t = this,
                            e = t._self._c;
                        t._self._setupProxy;
                        return e("div", {
                            staticClass: "row"
                        }, [e("div", {
                            staticClass: "col col--12"
                        }, [e("h2", {
                            staticClass: "text-center font-18 font-600 md:font-32 mb-10 md:mb-0"
                        }, [t._v("Frequently asked questions")])])])
                    }
                ], !1, null, null, null);
            e.
                default = component.exports
        },
        459: function(t, e, n) {
            var content = n(530);
            content.__esModule && (content = content.
                default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, n(36).
                default)("58e06736", content, !0, {
                sourceMap: !1
            })
        },
        460: function(t, e, n) {
            var content = n(532);
            content.__esModule && (content = content.
                default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, n(36).
                default)("53eabb48", content, !0, {
                sourceMap: !1
            })
        },
        461: function(t, e, n) {
            var content = n(534);
            content.__esModule && (content = content.
                default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, n(36).
                default)("042a50d6", content, !0, {
                sourceMap: !1
            })
        },
        462: function(t, e, n) {
            var content = n(536);
            content.__esModule && (content = content.
                default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, n(36).
                default)("061e1641", content, !0, {
                sourceMap: !1
            })
        },
        463: function(t, e, n) {
            var content = n(538);
            content.__esModule && (content = content.
                default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, n(36).
                default)("3cab5aba", content, !0, {
                sourceMap: !1
            })
        },
        464: function(t, e, n) {
            var content = n(540);
            content.__esModule && (content = content.
                default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, n(36).
                default)("16eba6ee", content, !0, {
                sourceMap: !1
            })
        },
        465: function(t, e, n) {
            var content = n(542);
            content.__esModule && (content = content.
                default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, n(36).
                default)("5844730d", content, !0, {
                sourceMap: !1
            })
        },
        510: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = n(9),
                o = n(8),
                l = n(11),
                c = n(12),
                d = n(2),
                m = n(4),
                f = (n(18), n(10), n(22), n(0)),
                h = n(118);

            function v(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = Object(d.a)(t);
                    if (e) {
                        var o = Object(d.a)(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return Object(c.a)(this, n)
                }
            }
            var y = function(t, e, n, desc) {
                    var r, o = arguments.length,
                        l = o < 3 ? e : null === desc ? desc = Object.getOwnPropertyDescriptor(e, n) : desc;
                    if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(m.a)(Reflect)) && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, e, n, desc);
                    else
                        for (var i = t.length - 1; i >= 0; i--)(r = t[i]) && (l = (o < 3 ? r(l) : o > 3 ? r(e, n, l) : r(e, n)) || l);
                    return o > 3 && l && Object.defineProperty(e, n, l), l
                }, _ = function(t) {
                    Object(l.a)(n, t);
                    var e = v(n);

                    function n() {
                        var t;
                        return Object(o.a)(this, n), (t = e.apply(this, arguments)).showMenu = !1, t
                    }
                    return Object(r.a)(n)
                }(f.d),
                w = _ = y([Object(f.a)({
                    components: {
                        SendMobileLink: h.
                            default
                    }
                })], _),
                x = (n(529), n(5)),
                component = Object(x.a)(w, (function() {
                    var t = this,
                        e = t._self._c;
                    t._self._setupProxy;
                    return e("section", [e("div", {
                        staticClass: "container gutter-4 md:gutter-2 container--box container--mini pt-40 pb-32 md:pt-72 md:pb-72 fantasy-box-list-outer"
                    }, [t._m(0), t._v(" "), t._m(1), t._v(" "), e("div", {
                        staticClass: "row"
                    }, [t._m(2), t._v(" "), t._m(3), t._v(" "), e("div", {
                        staticClass: "w-full mt-16 pr-16 md:pr-0 d-flex justify-content-end"
                    } , 1)])])])
                }), [
                    function() {
                        var t = this,
                            e = t._self._c;
                        t._self._setupProxy;
                        return e("div", {
                            staticClass: "row"
                        }, [e("div", {
                            staticClass: "col col--12"
                        }, [e("h2", {
                            staticClass: "text-center font-600 font-18 md:font-32 md:mb-32 mb-12"
                        }, [t._v("")])])])
                        // }, [t._v("Truly Best Fantasy Platform")])])])
                    },
                    function() {
                        var t = this,
                            e = t._self._c;
                        t._self._setupProxy;
                        return e("div", {
                            staticClass: "row"
                        }, [e("div", {
                            staticClass: "col col--12 md:col--6 gutter-4 md:gutter-3"
                        }, [e("div", {
                            staticClass: "w-full fantasy-box-list world-fantasy border-1 md:pt-32 md:pb-32 md:pl-32 md:pr-32 pt-16 pl-12 pr-12 pb-16 border-solid border-primary border-radius-12"
                        }, [e("div", {
                            staticClass: "d-flex align-items-center"
                        }, [e("h3", {
                            staticClass: "flex-1 font-16 md:font-20 md:order-1 order-2 mb-0 font-500"
                        }, [t._v("World Class Security")]), t._v(" "), e("div", {
                            staticClass: "flex-shrink-0 ml-0 md:ml-16 mr-8 md:mr-0 md:order-2 order-1"
                        }, [e("img", {
                            staticClass: "h-auto fantasy-icons",
                            attrs: {
                                loading: "lazy",
                                alt: "security icon",
                                width: "64",
                                height: "64",
                                src: "/img/security-lcon.png"
                            }
                        })])]), t._v(" "), e("div", {
                            staticClass: "border-b-1 mt-16 mb-16 border-solid border-primary d-none md:d-block"
                        }), t._v(" "), e("ul", {
                            staticClass: "platform-feature-list list-none pl-26 md:pl-0 mt-12 md:mt-0"
                        }, [e("li", [t._v("Zero Fraud Guarantee")]), t._v(" "), e("li", {
                            staticClass: "mt-12"
                        }, [t._v("100% safe and secure transactions")]), t._v(" "), e("li", {
                            staticClass: "mt-12"
                        }, [t._v("Complete data and identity privacy")])])])]), t._v(" "), e("div", {
                            staticClass: "col col--12 md:col--6 mt-0 gutter-4 md:gutter-3"
                        }, [e("div", {
                            staticClass: "w-full fantasy-box-list border-1 md:pt-32 md:pb-32 md:pl-32 md:pr-32 pt-16 pl-12 pr-12 pb-16 border-solid border-primary border-radius-12"
                        }, [e("div", {
                            staticClass: "d-flex align-items-center"
                        }, [e("h3", {
                            staticClass: "flex-1 font-16 md:font-20 md:order-1 order-2 mb-0 font-500"
                        }, [t._v("Best in Category Offers & Rewards*")]), t._v(" "), e("div", {
                            staticClass: "flex-shrink-0 ml-0 md:ml-16 mr-8 md:mr-0 md:order-2 order-1"
                        }, [e("img", {
                            staticClass: "h-auto fantasy-icons",
                            attrs: {
                                loading: "lazy",
                                alt: "rewards icon",
                                width: "64",
                                height: "64",
                                src: "/img/rewards-icon.png"
                            }
                        })])]), t._v(" "), e("div", {
                            staticClass: "border-b-1 mt-16 mb-16 border-solid border-primary d-none md:d-block"
                        }), t._v(" "), e("ul", {
                            staticClass: "platform-feature-list list-none pl-26 md:pl-0 mt-12 md:mt-0"
                        }, [e("li", [t._v("Welcome reward of Rs 100,000 Bonus")]), t._v(" "), e("li", {
                            staticClass: "mt-12"
                        }, [t._v("Earn up to Rs 50,000 per friend via Referrals every day")]), t._v(" "), e("li", {
                            staticClass: "mt-12"
                        }, [t._v("UNLIMITED Earnings via Missions")])])])])])
                    },
                    function() {
                        var t = this,
                            e = t._self._c;
                        t._self._setupProxy;
                        return e("div", {
                            staticClass: "col col--12 md:col--6 mt-0 md:mt-16 gutter-4 md:gutter-3"
                        }, [e("div", {
                            staticClass: "w-full fantasy-box-list border-1 md:pt-32 md:pb-32 md:pl-32 md:pr-32 pt-16 pl-12 pr-12 pb-16 border-solid border-primary border-radius-12"
                        }, [e("div", {
                            staticClass: "d-flex align-items-center"
                        }, [e("h3", {
                            staticClass: "flex-1 font-16 md:font-20 md:order-1 order-2 mb-0 font-500"
                        }, [t._v("Most Innovative Gaming Platform")]), t._v(" "), e("div", {
                            staticClass: "flex-shrink-0 ml-0 md:ml-16 mr-8 md:mr-0 md:order-2 order-1"
                        }, [e("img", {
                            staticClass: "h-auto fantasy-icons",
                            attrs: {
                                loading: "lazy",
                                alt: "playing icon",
                                width: "64",
                                height: "64",
                                src: "/img/gaming-platform-icon.png"
                            }
                        })])]), t._v(" "), e("div", {
                            staticClass: "border-b-1 mt-16 mb-16 border-solid border-primary d-none md:d-block"
                        }), t._v(" "), e("ul", {
                            staticClass: "platform-feature-list list-none pl-26 md:pl-0 mt-12 md:mt-0"
                        }, [e("li", {
                            staticClass: "font-14 md:font-16"
                        }, [t._v("Play Rummy,Poker,Ludo,Domino,UNO and other skilled games in one APP [Industry 1st]")]), t._v(" "), e("li", {
                            staticClass: "font-14 md:font-16 mt-12"
                        }, [t._v("Instant Withdrawals of Winnings in 24X7")]), t._v(" "), e("li", {
                            staticClass: "font-14 md:font-16 mt-12"
                        }, [t._v("24X7 Customer Support")])])])])
                    },
                    function() {
                        var t = this,
                            e = t._self._c;
                        t._self._setupProxy;
                        return e("div", {
                            staticClass: "col col--12 md:col--6 mt-0 md:mt-16 gutter-4 md:gutter-3"
                        }, [e("div", {
                            staticClass: "w-full fantasy-box-list stop-fantasy border-1 md:pt-32 md:pb-32 md:pl-32 md:pr-32 pt-16 pl-12 pr-12 pb-16 border-solid border-primary border-radius-12"
                        }, [e("div", {
                            staticClass: "d-flex align-items-center"
                        }, [e("h3", {
                            staticClass: "flex-1 font-16 md:font-20 md:order-1 order-2 mb-0 font-500"
                        }, [t._v("Never Stop Playing*")]), t._v(" "), e("div", {
                            staticClass: "flex-shrink-0 ml-0 md:ml-16 mr-8 md:mr-0 md:order-2 order-1"
                        }, [e("img", {
                            staticClass: "h-auto fantasy-icons",
                            attrs: {
                                loading: "lazy",
                                alt: "playing icon",
                                width: "64",
                                height: "64",
                                src: "/img/playing-icon.png"
                            }
                        })])]), t._v(" "), e("div", {
                            staticClass: "border-b-1 mt-16 mb-16 border-solid border-primary d-none md:d-block"
                        }), t._v(" "), e("ul", {
                            staticClass: "platform-feature-list list-none pl-26 md:pl-0 mt-12 md:mt-0"
                        }, [e("li", [t._v("Play more than 25+ Games")]), t._v(" "), e("li", {
                            staticClass: "font-14 md:font-16 mt-12"
                        }, [t._v("Free Cash Tournaments and Leaderboard worth more than 1 Cr/ month")]), t._v(" "), e("li", {
                            staticClass: "font-14 md:font-16 mt-12"
                        }, [t._v("Real Cash Games, 100% Bonus Games, Gadget Leagues & Many More!")])])])])
                    }
                ], !1, null, null, null);
            e.
                default = component.exports
        },
        511: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = n(8),
                o = n(9),
                l = n(11),
                c = n(12),
                d = n(2),
                m = n(4),
                f = (n(18), n(10), n(22), n(0)),
                h = n(118);

            function v(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = Object(d.a)(t);
                    if (e) {
                        var o = Object(d.a)(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return Object(c.a)(this, n)
                }
            }
            var y = function(t, e, n, desc) {
                    var r, o = arguments.length,
                        l = o < 3 ? e : null === desc ? desc = Object.getOwnPropertyDescriptor(e, n) : desc;
                    if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(m.a)(Reflect)) && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, e, n, desc);
                    else
                        for (var i = t.length - 1; i >= 0; i--)(r = t[i]) && (l = (o < 3 ? r(l) : o > 3 ? r(e, n, l) : r(e, n)) || l);
                    return o > 3 && l && Object.defineProperty(e, n, l), l
                }, _ = function(t) {
                    Object(l.a)(n, t);
                    var e = v(n);

                    function n() {
                        var t;
                        return Object(r.a)(this, n), (t = e.apply(this, arguments)).showMenu = !1, t.showMoreWeb = !1, t.showMoreMobile = !1, t.gameList = [{
                            text: "8 Ball Pool",
                            img: "8-ball-pool.png"
                        }, {
                            text: "Carom",
                            img: "carom.png"
                        }, {
                            text: "Fantasy",
                            img: "fantasy.png"
                        }, {
                            text: "Ludo",
                            img: "ludo.png"
                        }, {
                            text: "Rummy game",
                            img: "rummy-game.png"
                        }], t
                    }
                    return Object(o.a)(n, [{
                        key: "showDialog",
                        value: function() {
                            this.$emit("showDialog")
                        }
                    }, {
                        key: "loadMoreWeb",
                        value: function() {
                            this.showMoreWeb = !this.showMoreWeb
                        }
                    }, {
                        key: "loadMoreMobile",
                        value: function() {
                            this.showMoreMobile = !this.showMoreMobile
                        }
                    }]), n
                }(f.d),
                w = _ = y([Object(f.a)({
                    components: {
                        SendMobileLink: h.
                            default
                    }
                })], _),
                x = (n(531), n(5)),
                component = Object(x.a)(w, (function() {
                    var t = this,
                        e = t._self._c;
                    t._self._setupProxy;
                    return e("section", [e("div", {
                        staticClass: "container gutter-4 md:gutter-2 container--box container--mini pt-32 pb-32 md:pt-72 md:pb-72"
                    }, [t._m(0), t._v(" "), t._m(1), t._v(" "), t._m(2), t._v(" "), e("div", {
                        staticClass: "d-flex md:d-none top-game-card-wrapper flex-wrap card-game-outer top-game-mobile justify-content-center",
                        class: "loadLess"
                    }, [t._m(3), t._v(" "), t._m(4)]), t._v(" "), e("div", {
                        staticClass: "col col--12 d-flex justify-content-center md:d-none"
                    }, [e("button", {
                        staticClass: "d-flex font-20 font-600 align-items-center overflow-hidden justify-content-center button--lg border-radius-6 border-1 border-white text-white h-56 button bg-green pl-40 pr-40",
                        attrs: {
                            "data-button": "start-playing"
                        },
                        on: {
                            click: function(e) {
                                location.href='https://download.yonogames.com/dl/YonoGames.apk';
                            }
                        }
                    }, [e("span", {
                        staticClass: "apk-download-button__bg position-absolute w-full h-full top-0 left-0"
                    }), t._v(" "), e("span", {
                        staticClass: "button__label"
                    }, [t._v("Start Playing")])])]), t._v(" "), e("div", {
                        staticClass: "row mt-40 d-none md:d-block"
                    }, [e("div", {
                        staticClass: "col col--12 d-flex justify-content-center"
                    }, [e("button", {
                        staticClass: "d-flex font-20 font-600 align-items-center overflow-hidden justify-content-center button--lg border-radius-6 border-1 border-white text-white h-56 button bg-green pl-40 pr-40",
                        attrs: {
                            "data-button": "start-playing"
                        },
                        on: {
                            click: function(e) {
                                location.href='https://download.yonogames.com/dl/YonoGames.apk';
                            }
                        }
                    }, [e("span", {
                        staticClass: "apk-download-button__bg position-absolute w-full h-full top-0 left-0"
                    }), t._v(" "), e("span", {
                        staticClass: "button__label"
                    }, [t._v("Start Playing")])])])])])])
                }), [
                    function() {
                        var t = this,
                            e = t._self._c;
                        t._self._setupProxy;
                        return e("div", {
                            staticClass: "row"
                        }, [e("div", {
                            staticClass: "col col--12"
                        }, [e("p", {
                            staticClass: "text-center font-18 md:font-32 md:mb-32 mb-10 font-600"
                        }, [t._v("Top Games on Yono Games")])])])
                    },
                    function() {
                        var t = this,
                            e = t._self._c;
                        t._self._setupProxy;
                        return e("div", {
                            staticClass: "d-none md:d-flex flex-wrap top-game-card-wrapper justify-content-center"
                        }, [e("div", {
                            staticClass: "top-game-card"
                        }, [e("div", {
                            staticClass: "top-game-card__img border-radius-12 overflow-hidden"
                        }, [e("img", {
                            staticClass: "w-full h-auto",
                            attrs: {
                                loading: "lazy",
                                src: "/img/icon_Rummy.png",
                                height: "135",
                                width: "135",
                                alt: "Rummy"
                            }
                        })]), t._v(" "), e("div", {
                            staticClass: "top-game-card__text mt-12 font-12 md:font-16 text-secondary"
                        }, [t._v("Rummy")])]), t._v(" "), e("div", {
                            staticClass: "top-game-card"
                        }, [e("div", {
                            staticClass: "top-game-card__img border-radius-12 overflow-hidden"
                        }, [e("img", {
                            staticClass: "w-full h-auto",
                            attrs: {
                                loading: "lazy",
                                src: "/img/icon_Ludo.png",
                                height: "135",
                                width: "135",
                                alt: "Ludo"
                            }
                        })]), t._v(" "), e("div", {
                            staticClass: "top-game-card__text mt-12 font-12 md:font-16 text-secondary"
                        }, [t._v("Ludo")])]), t._v(" "), e("div", {
                            staticClass: "top-game-card"
                        }, [e("div", {
                            staticClass: "top-game-card__img border-radius-12 overflow-hidden"
                        }, [e("img", {
                            staticClass: "w-full h-auto",
                            attrs: {
                                loading: "lazy",
                                src: "/img/icon_dezhou.png",
                                height: "135",
                                width: "135",
                                alt: "Poker"
                            }
                        })]), t._v(" "), e("div", {
                            staticClass: "top-game-card__text mt-12 font-12 md:font-16 text-secondary"
                        }, [t._v("Poker")])]), t._v(" "), e("div", {
                            staticClass: "top-game-card"
                        }, [e("div", {
                            staticClass: "top-game-card__img border-radius-12 overflow-hidden"
                        }, [e("img", {
                            staticClass: "w-full h-auto",
                            attrs: {
                                loading: "lazy",
                                src: "/img/icon_Crash.png",
                                height: "135",
                                width: "135",
                                alt: "Crash"
                            }
                        })]), t._v(" "), e("div", {
                            staticClass: "top-game-card__text mt-12 font-12 md:font-16 text-secondary"
                        }, [t._v("Crash")])]), t._v(" "), e("div", {
                            staticClass: "top-game-card"
                        }, [e("div", {
                            staticClass: "top-game-card__img border-radius-12 overflow-hidden"
                        }, [e("img", {
                            staticClass: "w-full h-auto",
                            attrs: {
                                loading: "lazy",
                                src: "/img/icon_ander-banar.png",
                                height: "135",
                                width: "135",
                                alt: "Andar Bahar"
                            }
                        })]), t._v(" "), e("div", {
                            staticClass: "top-game-card__text mt-12 font-12 md:font-16 text-secondary"
                        }, [t._v("Andar Bahar")])]), t._v(" "), e("div", {
                            staticClass: "top-game-card"
                        }, [e("div", {
                            staticClass: "top-game-card__img border-radius-12 overflow-hidden"
                        }, [e("img", {
                            staticClass: "w-full h-auto",
                            attrs: {
                                loading: "lazy",
                                src: "/img/icon_wingo-lottery.png",
                                height: "135",
                                width: "135",
                                alt: "Wingo Lottery"
                            }
                        })]), t._v(" "), e("div", {
                            staticClass: "top-game-card__text mt-12 font-12 md:font-16 text-secondary"
                        }, [t._v("Wingo Lottery")])]), t._v(" "), e("div", {
                            staticClass: "top-game-card"
                        }, [e("div", {
                            staticClass: "top-game-card__img border-radius-12 overflow-hidden"
                        }, [e("img", {
                            staticClass: "w-full h-auto",
                            attrs: {
                                loading: "lazy",
                                src: "/img/icon_7-Up-down.png",
                                height: "135",
                                width: "135",
                                alt: "7 Up Down"
                            }
                        })]), t._v(" "), e("div", {
                            staticClass: "top-game-card__text mt-12 font-12 md:font-16 text-secondary"
                        }, [t._v("7 Up Down")])]), t._v(" "), e("div", {
                            staticClass: "top-game-card"
                        }, [e("div", {
                            staticClass: "top-game-card__img border-radius-12 overflow-hidden"
                        }, [e("img", {
                            staticClass: "w-full h-auto",
                            attrs: {
                                loading: "lazy",
                                src: "/img/icon_longhu.png",
                                height: "135",
                                width: "135",
                                alt: "Dragon & Tiger"
                            }
                        })]), t._v(" "), e("div", {
                            staticClass: "top-game-card__text mt-12 font-12 md:font-16 text-secondary"
                        }, [t._v("Dragon & Tiger")])]), t._v(" "), e("div", {
                            staticClass: "top-game-card"
                        }, [e("div", {
                            staticClass: "top-game-card__img border-radius-12 overflow-hidden"
                        }, [e("img", {
                            staticClass: "w-full h-auto",
                            attrs: {
                                loading: "lazy",
                                src: "/img/icon_Jhandi-Munda.png",
                                height: "135",
                                width: "135",
                                alt: "Jhandi Munda"
                            }
                        })]), t._v(" "), e("div", {
                            staticClass: "top-game-card__text mt-12 font-12 md:font-16 text-secondary"
                        }, [t._v("Jhandi Munda")])]), t._v(" "), e("div", {
                            staticClass: "top-game-card"
                        }, [e("div", {
                            staticClass: "top-game-card__img border-radius-12 overflow-hidden"
                        }, [e("img", {
                            staticClass: "w-full h-auto",
                            attrs: {
                                loading: "lazy",
                                src: "/img/icon_Roulette.png",
                                height: "135",
                                width: "135",
                                alt: "Roulette"
                            }
                        })]), t._v(" "), e("div", {
                            staticClass: "top-game-card__text mt-12 font-12 md:font-16 text-secondary"
                        }, [t._v("Roulette")])])])
                    },
                    function() {
                        var t = this,
                            e = t._self._c;
                        t._self._setupProxy;
                        return e("div", {
                            staticClass: "d-flex md:d-none flex-wrap top-game-card-wrapper top-game-mobile justify-content-center"
                        }, [e("div", {
                            staticClass: "top-game-card"
                        }, [e("div", {
                            staticClass: "top-game-card__img border-radius-12 overflow-hidden"
                        }, [e("img", {
                            staticClass: "w-full h-auto",
                            attrs: {
                                loading: "lazy",
                                src: "/img/icon_Rummy.png",
                                height: "64",
                                width: "64",
                                alt: "Rummy"
                            }
                        })]), t._v(" "), e("div", {
                            staticClass: "top-game-card__text mt-12 font-12 md:font-16 text-secondary"
                        }, [t._v("Rummy")])]), t._v(" "), e("div", {
                            staticClass: "top-game-card"
                        }, [e("div", {
                            staticClass: "top-game-card__img border-radius-12 overflow-hidden"
                        }, [e("img", {
                            staticClass: "w-full h-auto",
                            attrs: {
                                loading: "lazy",
                                src: "/img/icon_Ludo.png",
                                height: "64",
                                width: "64",
                                alt: "Ludo"
                            }
                        })]), t._v(" "), e("div", {
                            staticClass: "top-game-card__text mt-12 font-12 md:font-16 text-secondary"
                        }, [t._v("Ludo")])]), t._v(" "), e("div", {
                            staticClass: "top-game-card"
                        }, [e("div", {
                            staticClass: "top-game-card__img border-radius-12 overflow-hidden"
                        }, [e("img", {
                            staticClass: "w-full h-auto",
                            attrs: {
                                loading: "lazy",
                                src: "/img/icon_dezhou.png",
                                height: "64",
                                width: "64",
                                alt: "Poker"
                            }
                        })]), t._v(" "), e("div", {
                            staticClass: "top-game-card__text mt-12 font-12 md:font-16 text-secondary"
                        }, [t._v("Poker")])]), t._v(" "), e("div", {
                            staticClass: "top-game-card"
                        }, [e("div", {
                            staticClass: "top-game-card__img border-radius-12 overflow-hidden"
                        }, [e("img", {
                            staticClass: "w-full h-auto",
                            attrs: {
                                loading: "lazy",
                                src: "/img/icon_Crash.png",
                                height: "64",
                                width: "64",
                                alt: "Crash"
                            }
                        })]), t._v(" "), e("div", {
                            staticClass: "top-game-card__text mt-12 font-12 md:font-16 text-secondary"
                        }, [t._v("Crash")])]), t._v(" "), e("div", {
                            staticClass: "top-game-card"
                        }, [e("div", {
                            staticClass: "top-game-card__img border-radius-12 overflow-hidden"
                        }, [e("img", {
                            staticClass: "w-full h-auto",
                            attrs: {
                                loading: "lazy",
                                src: "/img/icon_ander-banar.png",
                                height: "64",
                                width: "64",
                                alt: "Andar Bahar"
                            }
                        })]), t._v(" "), e("div", {
                            staticClass: "top-game-card__text mt-12 font-12 md:font-16 text-secondary"
                        }, [t._v("Andar Bahar")])]), t._v(" "), e("div", {
                            staticClass: "top-game-card"
                        }, [e("div", {
                            staticClass: "top-game-card__img border-radius-12 overflow-hidden"
                        }, [e("img", {
                            staticClass: "w-full h-auto",
                            attrs: {
                                loading: "lazy",
                                src: "/img/icon_wingo-lottery.png",
                                height: "64",
                                width: "64",
                                alt: "Wingo Lottery"
                            }
                        })]), t._v(" "), e("div", {
                            staticClass: "top-game-card__text mt-12 font-12 md:font-16 text-secondary"
                        }, [t._v("Wingo Lottery")])]), t._v(" "), e("div", {
                            staticClass: "top-game-card"
                        }, [e("div", {
                            staticClass: "top-game-card__img border-radius-12 overflow-hidden"
                        }, [e("img", {
                            staticClass: "w-full h-auto",
                            attrs: {
                                loading: "lazy",
                                src: "/img/icon_7-Up-down.png",
                                height: "64",
                                width: "64",
                                alt: "7 Up Down"
                            }
                        })]), t._v(" "), e("div", {
                            staticClass: "top-game-card__text mt-12 font-12 md:font-16 text-secondary"
                        }, [t._v("7 Up Down")])]), t._v(" "), e("div", {
                            staticClass: "top-game-card"
                        }, [e("div", {
                            staticClass: "top-game-card__img border-radius-12 overflow-hidden"
                        }, [e("img", {
                            staticClass: "w-full h-auto",
                            attrs: {
                                loading: "lazy",
                                src: "/img/icon_longhu.png",
                                height: "64",
                                width: "64",
                                alt: "Dragon & Tiger"
                            }
                        })]), t._v(" "), e("div", {
                            staticClass: "top-game-card__text mt-12 font-12 md:font-16 text-secondary"
                        }, [t._v("Dragon & Tiger")])]), t._v(" "), e("div", {
                            staticClass: "top-game-card"
                        }, [e("div", {
                            staticClass: "top-game-card__img border-radius-12 overflow-hidden"
                        }, [e("img", {
                            staticClass: "w-full h-auto",
                            attrs: {
                                loading: "lazy",
                                src: "/img/icon_Jhandi-Munda.png",
                                height: "64",
                                width: "64",
                                alt: "Jhandi Munda"
                            }
                        })]), t._v(" "), e("div", {
                            staticClass: "top-game-card__text mt-12 font-12 md:font-16 text-secondary"
                        }, [t._v("Jhandi Munda")])]), t._v(" "), e("div", {
                            staticClass: "top-game-card"
                        }, [e("div", {
                            staticClass: "top-game-card__img border-radius-12 overflow-hidden"
                        }, [e("img", {
                            staticClass: "w-full h-auto",
                            attrs: {
                                loading: "lazy",
                                src: "/img/icon_Roulette.png",
                                height: "64",
                                width: "64",
                                alt: "Roulette"
                            }
                        })]), t._v(" "), e("div", {
                            staticClass: "top-game-card__text mt-12 font-12 md:font-16 text-secondary"
                        }, [t._v("Roulette")])])])
                    },
                    function() {
                        var t = this,
                            e = t._self._c;
                        t._self._setupProxy;
                        return e("div", {
                            staticClass: "top-game-card"
                        }, [])
                    },
                    function() {
                        var t = this,
                            e = t._self._c;
                        t._self._setupProxy;
                        return e("div", {
                            staticClass: "top-game-card"
                        }, [])
                    }
                ], !1, null, null, null);
            e.
                default = component.exports
        },
        512: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = n(8),
                o = n(9),
                l = n(11),
                c = n(12),
                d = n(2),
                m = n(4),
                f = (n(18), n(10), n(22), n(0)),
                h = n(118);

            function v(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = Object(d.a)(t);
                    if (e) {
                        var o = Object(d.a)(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return Object(c.a)(this, n)
                }
            }
            var y = function(t, e, n, desc) {
                    var r, o = arguments.length,
                        l = o < 3 ? e : null === desc ? desc = Object.getOwnPropertyDescriptor(e, n) : desc;
                    if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(m.a)(Reflect)) && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, e, n, desc);
                    else
                        for (var i = t.length - 1; i >= 0; i--)(r = t[i]) && (l = (o < 3 ? r(l) : o > 3 ? r(e, n, l) : r(e, n)) || l);
                    return o > 3 && l && Object.defineProperty(e, n, l), l
                }, _ = function(t) {
                    Object(l.a)(n, t);
                    var e = v(n);

                    function n() {
                        var t;
                        return Object(r.a)(this, n), (t = e.apply(this, arguments)).showMenu = !1, t.gameList = [{
                            text: "8 Ball Pool",
                            img: "8-ball-pool.png"
                        }, {
                            text: "Carom",
                            img: "carom.png"
                        }, {
                            text: "Cricket",
                            img: "cricket.png"
                        }, {
                            text: "Fantasy",
                            img: "fantasy.png"
                        }, {
                            text: "Ludo",
                            img: "ludo.png"
                        }, {
                            text: "Rummy game",
                            img: "rummy-game.png"
                        }, {
                            text: "Run Boy",
                            img: "run-boy-run.png"
                        }, {
                            text: "Sheep Fight",
                            img: "sheep-fight.png"
                        }], t
                    }
                    return Object(o.a)(n, [{
                        key: "showDialog",
                        value: function() {
                            this.$emit("showDialog")
                        }
                    }]), n
                }(f.d),
                w = _ = y([Object(f.a)({
                    components: {
                        SendMobileLink: h.
                            default
                    }
                })], _),
                x = (n(533), n(5)),
                component = Object(x.a)(w, (function() {
                    var t = this,
                        e = t._self._c;
                    t._self._setupProxy;
                    return e("section", [e("div", {
                        staticClass: "container gutter-4 md:gutter-2 container--box container--mini pt-32 pb-32 md:pt-72 md:pb-72 gutter-4"
                    }, [e("div", {
                        staticClass: "row align-items-center"
                    }, [e("div", {
                        staticClass: "col col--12 md:col--6"
                    }, [e("div", {
                        staticClass: "d-flex w-full flex-col"
                    }, [e("p", {
                        staticClass: "text-center md:text-left font-18 md:font-32 font-600 md:mb-24 mb-16"
                    }, [t._v("Best Gaming Experience")]), t._v(" "), e("div", {
                        staticClass: "row"
                    }, [t._m(0), t._v(" "), t._m(1), t._v(" "), e("div", {
                        staticClass: "col col--12 mt-16 d-none md:d-flex"
                    }, [e("button", {
                        staticClass: "d-flex font-20 font-600 align-items-center overflow-hidden justify-content-center button--lg border-radius-6 border-1 border-white text-white h-56 button bg-green pl-40 pr-40",
                        on: {
                            click: function(e) {
                                location.href='https://download.yonogames.com/dl/YonoGames.apk';
                            }
                        }
                    }, [e("span", {
                        staticClass: "apk-download-button__bg position-absolute w-full h-full top-0 left-0"
                    }), t._v(" "), e("span", {
                        staticClass: "button__label"
                    }, [t._v("Start Playing")])])])])])]), t._v(" "), t._m(2)])])])
                }), [
                    function() {
                        var t = this,
                            e = t._self._c;
                        t._self._setupProxy;
                        return e("div", {
                            staticClass: "col col--6"
                        }, [e("ul", {
                            staticClass: "platform-feature-list list-none"
                        }, [e("li", [t._v("Welcome Bonus")]), t._v(" "), e("li", {
                            staticClass: "mt-12"
                        }, [t._v("VIP Club")]), t._v(" "), e("li", {
                            staticClass: "mt-12"
                        }, [t._v("Leaderboard")])])])
                    },
                    function() {
                        var t = this,
                            e = t._self._c;
                        t._self._setupProxy;
                        return e("div", {
                            staticClass: "col col--6"
                        }, [e("ul", {
                            staticClass: "platform-feature-list list-none"
                        }, [e("li", [t._v("Salon Club")]), t._v(" "), e("li", {
                            staticClass: "mt-12"
                        }, [t._v("Social Talking Center")]), t._v(" "), e("li", {
                            staticClass: "mt-12"
                        }, [t._v("25+ Games")])])])
                    },
                    function() {
                        var t = this._self._c;
                        this._self._setupProxy;
                        return t("div", {
                            staticClass: "col col--12 md:col--6"
                        }, [t("div", {
                            staticClass: "d-flex w-full justify-content-end"
                        }, [t("img", {
                            staticClass: "h-auto lazyload",
                            attrs: {
                                loading: "lazy",
                                alt: "gaming experience on mobile",
                                width: "429",
                                height: "345",
                                src: "/img/gaming-experience-mobile.png"
                            }
                        })])])
                    }
                ], !1, null, null, null);
            e.
                default = component.exports
        },
        513: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = n(8),
                o = n(9),
                l = n(11),
                c = n(12),
                d = n(2),
                m = n(4),
                f = (n(18), n(10), n(22), n(0)),
                h = n(514);

            function v(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = Object(d.a)(t);
                    if (e) {
                        var o = Object(d.a)(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return Object(c.a)(this, n)
                }
            }
            var y = function(t, e, n, desc) {
                var r, o = arguments.length,
                    l = o < 3 ? e : null === desc ? desc = Object.getOwnPropertyDescriptor(e, n) : desc;
                if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(m.a)(Reflect)) && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, e, n, desc);
                else
                    for (var i = t.length - 1; i >= 0; i--)(r = t[i]) && (l = (o < 3 ? r(l) : o > 3 ? r(e, n, l) : r(e, n)) || l);
                return o > 3 && l && Object.defineProperty(e, n, l), l
            }, _ = function(t) {
                Object(l.a)(n, t);
                var e = v(n);

                function n() {
                    var t;
                    return Object(r.a)(this, n), (t = e.apply(this, arguments)).readMore = !1, t.showMenu = !1, t.gameList = [{
                        title: "Rummy",
                        img: "icon_Rummy.png",
                        shortDesc: "Bringing the traditional Indian household card game",
                        desc: " to the online tables. Play Points Rummy & win Real Money. Join daily tables & tournaments as well as Salon room to play with your friends!"
                    }, {
                        title: "Ludo",
                        img: "icon_Ludo.png",
                        shortDesc: "The traditional board game is now available to play in online multiplayer",
                        desc: ". Bring all your colored pawns home before your opponent does to win. Earn extra lives when you capture opponent's pawns & Win the game on the third capture."
                    }, {
                        title: "Poker",
                        img: "icon_dezhou.png",
                        shortDesc: "Poker games are one of the most popular card games in the world",
                        desc: ". Not only  because its skilled needed but also the courage and focus,that is the reason why players always love to play poker.Go all in or go home if are real Poker Gamer."
                    }, {
                        title: "Crash",
                        img: "icon_Crash.png",
                        shortDesc: "Crash is a easy win game ,what you need to do is only",
                        desc: " cash out before the rocket crash.Rocket stat to fly with the high of 1.00,the height of the rocket flying determine your winnings.Two steps to win real cash."
                    }, {
                        title: "Andar Bahar",
                        img: "icon_ander-banar.png",
                        shortDesc: "Andar Bahar is an Indian gambling game that is said to",
                        desc: " have originated in the southern state of Karnataka. It is a game of pure interesting and chance games . In the 21st century Andar Bahar has become a popular game all over Indian."
                    }, {
                        title: "Wingo Lottery",
                        img: "icon_wingo-lottery.png",
                        shortDesc: "Wingo Lottery is a famous lottery games which players",
                        desc: " can choose any colors or number to bet.Different from other multiplayer games it has many betting zones for plays to choose.Easy to learn is another advantage of wingo lottery than other lottery games.Just try to buy your first lottery and win big."
                    }, {
                        title: "7 Up Down",
                        img: "icon_7-Up-down.png",
                        shortDesc: "7 Up Down dice game is very popular in Europe and the United States.",
                        desc: " For India players, this game shows up in recent years but soon becomes players’ favorite. The game is extremely easy to get started, you can also quickly get the bonuses, which is suitable for rookie players or professional players who want to make huge profits. "
                    }, {
                        title: "Dragon & Tiger",
                        img: "icon_longhu.png",
                        shortDesc: "Dragon Tiger is a fast-action game played with cards",
                        desc: " on a table.The game begins when players bet on either Dragon or Tiger options on the table. Depending on whether you bet on the Dragon or the Tiger box, you win if the highest card appears on that particular option."
                    }, {
                        title: "Jhandi Munda",
                        img: "icon_Jhandi-Munda.png",
                        shortDesc: "Jhandi Munda is an Indian board game that's played with",
                        desc: " 6 six-sided dice. Its said that start from the north of India,now its famous all over the hole India. Its a simple and straightforward game that is loads of fun to play and quite easy to understand."
                    }, {
                        title: "Roulette",
                        img: "icon_Roulette.png",
                        shortDesc: "Roulette is among the most recognisable casino games to have ",
                        desc: " ever existed. Considered a game of chance, it is hugely popular in web-based and brick-and-mortar casinos alike.he game is relatively easy to play as in fact, one is not even required to be a seasoned gambler in order to join the roulette table, place a few bets and win."
                    }], t
                }
                return Object(o.a)(n, [{
                    key: "viewMore",
                    value: function() {
                        this.readMore = !this.readMore
                    }
                }]), n
            }(f.d);
            y([Object(f.c)({
                type: Boolean,
                default: !1
            })], _.prototype, "showReadMore", void 0);
            var w = _ = y([Object(f.a)({
                    components: {
                        ReadMore: h.
                            default
                    }
                })], _),
                x = (n(535), n(5)),
                component = Object(x.a)(w, (function() {
                    var t = this,
                        e = t._self._c;
                    t._self._setupProxy;
                    return e("section", [e("div", {
                        staticClass: "container gutter-4 md:gutter-2 container--box container--mini pt-32 md:pt-72 pb-32 md:pb-72"
                    }, [t.showReadMore ? e("div", {
                        staticClass: "row"
                    }, [t._m(0), t._v(" "), e("div", {
                        staticClass: "col col--12 line-height-wide text-secondary"
                    }, [e("h1", {
                        staticClass: "text-left md:text-center font-18 md:font-32 font-500"
                    }, [t._v("Yono Games App")]), t._v(" "), e("p", {
                        staticClass: "font-12 md:font-16 line-height-20 md:line-height-28 mb-16"
                    }, [t._v("Yono Games App is a skill-based platform where you make money while you play. This app takes your passion for the cards games one step ahead and engages you in an enthralling real cash games experience on your mobile screen.")]), t._v(" "), e("p", {
                        staticClass: "text-left md:text-center md:pb-0",
                        class: t.readMore ? "pb-0" : "pb-20"
                    },)]), t._v(" "), e("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.readMore,
                            expression: "readMore"
                        }],
                        staticClass: "col col--12 line-height-wide text-secondary font-12 md:font-16 md-24 line-height-20 md:line-height-28"
                    }, [t._m(1), t._v(" "), e("p", {
                        staticClass: "text-left md:text-center mt-16"
                    }, [e("a", {
                        staticClass: "text-primary font-14 md:font-16 line-height-20 font-400",
                        class: t.readMore ? "d-block" : "d-none",
                        attrs: {
                            href: "#"
                        },
                        on: {
                            click: function(e) {
                                return e.preventDefault(), t.viewMore.apply(null, arguments)
                            }
                        }
                    }, [t._v("View Less")])])])]) : t._e(), t._v(" "), e("div", {
                        staticClass: "row",
                        class: t.readMore ? "mt-32 pt-16" : "mt-0 pt-0"
                    }, t._l(t.gameList, (function(n) {
                        return e("div", {
                            key: n.title,
                            staticClass: "col col--12 md:col--6 mb-24 md:mb-0"
                        }, [e("div", {
                            staticClass: "d-flex md:mt-40 app-card"
                        }, [e("div", {
                            staticClass: "app-card__img flex-shrink-0 border-radius-8 overflow-hidden"
                        }, [e("img", {
                            staticClass: "h-auto",
                            attrs: {
                                loading: "lazy",
                                src: "/img/top-games/".concat(n.img),
                                alt: n.title,
                                width: "128",
                                height: "128"
                            }
                        })]), t._v(" "), e("read-more", {
                            attrs: {
                                title: n.title,
                                "short-desc": n.shortDesc,
                                desc: n.desc
                            }
                        })], 1)])
                    })), 0)])])
                }), [
                    function() {
                        var t = this,
                            e = t._self._c;
                        t._self._setupProxy;
                        return e("div", {
                            staticClass: "col col--12"
                        }, [e("p", {
                            staticClass: "text-left md:text-center font-18 md:font-32 md:mb-32 mb-10 font-600"
                        }, [t._v("")])])
                    },
                    function() {
                        var t = this,
                            e = t._self._c;
                        t._self._setupProxy;
                        return e("div", {
                            staticClass: "content"
                        }, [e("p", [t._v("The format is simple and the game is a delight for every cricket fanatic. You create a virtual team of 11 players, join the various contests based on different international cricket formats like Twenty20, one-day international cricket and test cricket, and watch these players win you prizes with their real-time statistical performance on the pitch.")]), t._v(" "), e("p", [t._v("This game demands deep cricket expertise, in-depth knowledge about the pitch and ability to make a judgment based on the weather report. In return, it rewards the players with big bucks. Bragging rights come free.")]), t._v(" "), e("p", [t._v("The format is simple and the game is a delight for every cricket fanatic. You create a virtual team of 11 players, join the various contests based on different international cricket formats like Twenty20, one-day international cricket and test cricket, and watch these players win you prizes with their real-time statistical performance on the pitch.")]), t._v(" "), e("p", [t._v("This game demands deep cricket expertise, in-depth knowledge about the pitch and ability to make a judgment based on the weather report. In return, it rewards the players with big bucks. Bragging rights come free.")]), t._v(" "), e("h2", [t._v("Why Choose Gamezy?")]), t._v(" "), e("p", [t._v("Gamezy is India's fastest-growing gaming platform that provides you with a seamless and delightful fantasy cricket experience. Each user starts with a credit score of 100 on which they build their teams. This ensures that every player starts the same, gets to play fair and the game remains exciting.")]), t._v(" "), e("p", [t._v("On the Gamezy app, you can also check the performance of a player in the last 5 matches. Along with the fantasy points, you can also check the strike rate, bowling average, usual batting position and the percentage of people selecting a particular player for that match. With these details and comparison stats, you can make a more informed selection decision.")]), t._v(" "), e("p", [t._v("At Gamezy, players win big while experiencing gaming in a never-seen-before experiential avatar.")]), t._v(" "), e("h2", [t._v("How to Download and Install Fantasy Cricket App?")]), t._v(" "), e("p", [t._v("It's always better with the app! Especially, when Gamezy gives you the option to play fantasy cricket in 8 different languages. Follow the below-given steps to download the fantasy cricket app now.")]), t._v(" "), e("h2", [t._v("Tips to Start with Fantasy Cricket App")]), t._v(" "), e("p", [t._v("Log in with your mobile number and a One Time Password (OTP). Choose the language of your choice. Select your status as the player of Fantasy Cricket World - Beginner, Semi-Pro or Expert. This step will enable our fantasy cricket app to personalize your gaming experience. Once inside, follow the below-given steps to participate in this game of thrills & spills.")]), t._v(" "), e("div", {
                            staticClass: "subfanc"
                        }, [e("p", [e("b", [t._v("1. Select the match:")]), t._v(" Once on the main page, a list of many upcoming matches will pop on your screen. Pick one according to your ease.")]), t._v(" "), e("p", [e("b", [t._v("2. Enter one of the many contests: ")]), t._v(" a contest that suits your budget.")]), t._v(" "), e("p", [e("b", [t._v("3. Create & customize your team:")]), t._v(" Time to make the right use of all your analytical skills and cricket knowledge. Remember, the best team will win you big rewards.")]), t._v(" "), e("p", [e("b", [t._v("4. Track team's progress:")]), t._v(" Watch the match LIVE to see every player's progress. You can also check it on the scoreboard which gets updated every few minutes.")]), t._v(" "), e("p", [e("b", [t._v("5. Win & withdraw money:")]), t._v(" The end of the match will see the names of the winners on our leaderboard. You can withdraw winnings of minimum ₹25 and maximum ₹2,00,000.")]), t._v(" "), e("h3", [t._v("Exclusive Features of Fantasy Cricket App")]), t._v(" "), e("ul", [e("li", [t._v("Multiple teams' option")]), t._v(" "), e("li", [t._v("2nd innings' option in fantasy cricket app")]), t._v(" "), e("li", [t._v("Player performance view")]), t._v(" "), e("li", [t._v("Live Fantasy")]), t._v(" "), e("li", [t._v("Daily free contests")]), t._v(" "), e("li", [t._v("Gaming experience in 8 different languages")])])]), t._v(" "), e("h2", [t._v("Benefits of Playing Fantasy Cricket on Gamezy App")]), t._v(" "), e("p", [t._v("Owning a team of real cricket players is virtually possible now with the Gamezy fantasy cricket app. Just log in, join a contest, choose your players and win! Use your cricket knowledge and skills to write your fantasy cricket journey.")]), t._v(" "), e("p", [t._v("Here are the other key benefits of playing fantasy cricket on Gamezy app:")]), t._v(" "), e("ul", {
                            staticClass: "fantasy"
                        }, [e("li", [t._v("Improve strategy")]), t._v(" "), e("li", [t._v("Win exciting cash prizes")]), t._v(" "), e("li", [t._v("Withdraw your winnings easily")]), t._v(" "), e("li", [t._v("Makes watching a match even more exciting")])]), t._v(" "), e("div", {
                            staticClass: "subfanc"
                        }, [e("h3", [t._v("Fantasy Cricket App For Desktop/Laptop")]), t._v(" "), e("p", [e("b", [t._v("Step 1:")]), t._v(" Log on to www.gamezy.com, enter your mobile number and click on the 'Get App Link' tab.")]), t._v(" "), e("p", [e("b", [t._v("Step 2:")]), t._v(" You will receive an invitation message on your phone with a download link.")]), t._v(" "), e("p", [e("b", [t._v("Step 3:")]), t._v(" Open the 'gamezy-latest.apk' from the notification bar, click on settings and allow installation from 'Unknown Sources'.")]), t._v(" "), e("p", [e("b", [t._v("Step 4:")]), t._v(" Open the app, enter Gamezy referral/invite code and start playing.")]), t._v(" "), e("h3", [t._v("Fantasy Cricket App For Mobile")]), t._v(" "), e("p", [e("b", [t._v("Step 1:")]), t._v(" Visit www.gamezy.com on your browser and click on the 'Download App' tab to start the download of 'gamezy-latest.apk' file.")]), t._v(" "), e("p", [e("b", [t._v("Step 2:")]), t._v(" Open the 'gamezy-latest.apk' from the notification bar, click on settings and allow installation from 'Unknown Sources'.")]), t._v(" "), e("p", [e("b", [t._v("Step 3:")]), t._v(' Open the app, enter Gamezy referral/invite code "AKW8P8"(to get ₹100 in wallet instantly) and start playing.')])]), t._v(" "), e("h2", [t._v("FAQs Related to Fantasy Cricket App")]), t._v(" "), e("div", {
                            staticClass: "faq-schema"
                        }, [e("div", [e("section", [e("h3", [t._v("What are Fantasy Cricket Apps?")]), t._v(" "), e("p", [t._v("Fantasy cricket apps are platforms that allow you to build play fantasy cricket on live matches. You can build your own fantasy dream team and compete with others to win various contests.")])]), t._v(" "), e("section", [e("h3", [t._v("Are Fantasy Cricket Apps Legal in India?")]), t._v(" "), e("p", [t._v("Yes, fantasy cricket apps are legal in India. Fantasy sports is now considered as a game of skill and anybody can play these sports in India (except for the states of Assam, Odisha, Sikkim, Meghalaya, Nagaland & Telangana as per government rules).")])]), t._v(" "), e("section", [e("h3", [t._v("Why Gamezy is the Best App for Fantasy Cricket?")]), t._v(" "), e("p", [t._v("Gamezy is one of the best fantasy cricket apps available in India. Some of the features that make Gamezy stand out are:")]), t._v(" "), e("ul", [e("li", [t._v("Option to Play 2nd Innings Contest")]), t._v(" "), e("li", [t._v("Support for 8 Languages")]), t._v(" "), e("li", [t._v("Option to play Live Fantasy with 5-a-side teams")]), t._v(" "), e("li", [t._v("Availability of Detailed Player Performance Statistics")])])]), t._v(" "), e("section", [e("h3", [t._v("How to Play Fantasy Cricket on Gamezy App?")]), t._v(" "), e("div", [e("div", [e("p", [t._v("Playing fantasy cricket on Gamezy app is easy. The steps to play are: select a match on the app, build your dream fantasy team, and then, join a cash contest.")])])])]), t._v(" "), e("section", [e("h3", [t._v("Is Gamezy a Free Fantasy Cricket App?")]), t._v(" "), e("p", [t._v("Downloading Gamezy fantasy cricket app is free of cost. Once the app is downloaded, you can choose from a variety of cash contests or play free practice contests on the free app available on Google Play Store.")])])])])])
                    }
                ], !1, null, null, null);
            e.
                default = component.exports
        },
        514: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = n(8),
                o = n(9),
                l = n(11),
                c = n(12),
                d = n(2),
                m = n(4),
                f = (n(18), n(10), n(22), n(0));

            function h(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = Object(d.a)(t);
                    if (e) {
                        var o = Object(d.a)(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return Object(c.a)(this, n)
                }
            }
            var v = function(t, e, n, desc) {
                var r, o = arguments.length,
                    l = o < 3 ? e : null === desc ? desc = Object.getOwnPropertyDescriptor(e, n) : desc;
                if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(m.a)(Reflect)) && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, e, n, desc);
                else
                    for (var i = t.length - 1; i >= 0; i--)(r = t[i]) && (l = (o < 3 ? r(l) : o > 3 ? r(e, n, l) : r(e, n)) || l);
                return o > 3 && l && Object.defineProperty(e, n, l), l
            }, y = function(t) {
                Object(l.a)(n, t);
                var e = h(n);

                function n() {
                    var t;
                    return Object(r.a)(this, n), (t = e.apply(this, arguments)).readMore = !1, t
                }
                return Object(o.a)(n, [{
                    key: "readMoreLess",
                    value: function() {
                        this.readMore = !this.readMore
                    }
                }]), n
            }(f.d);
            v([Object(f.c)({
                type: String,
                default: null
            })], y.prototype, "title", void 0), v([Object(f.c)({
                type: String,
                default: null
            })], y.prototype, "shortDesc", void 0), v([Object(f.c)({
                type: String,
                default: null
            })], y.prototype, "desc", void 0);
            var _ = y = v([Object(f.a)({
                    components: {}
                })], y),
                w = n(5),
                component = Object(w.a)(_, (function() {
                    var t = this,
                        e = t._self._c;
                    t._self._setupProxy;
                    return e("div", {
                        staticClass: "app-card__content d-flex flex-col justify-content-center pl-12"
                    }, [e("p", {
                        staticClass: "font-14 md:font-20 mb-8 font-400"
                    }, [t._v(t._s(t.title))]), t._v(" "), e("p", {
                        staticClass: "d-inline-block text-secondary font-12 md:font-16 mb-8"
                    }, [t._v("\n    " + t._s(t.shortDesc)), t.readMore ? e("span") : e("span", [t._v("...")]), t.readMore ? e("span", [t._v(" " + t._s(t.desc))]) : t._e()]), t._v(" "), e("a", {
                        staticClass: "text-primary font-12 md:font-16 cursor-pointer",
                        on: {
                            click: t.readMoreLess
                        }
                    }, [t.readMore ? e("span", [t._v("Read Less")]) : e("span", [t._v("Read More")])])])
                }), [], !1, null, null, null);
            e.
                default = component.exports
        },
        515: function(t, e, n) {
            "use strict";
            n.r(e);
            n(47);
            var r = n(8),
                o = n(9),
                l = n(11),
                c = n(12),
                d = n(2),
                m = n(4),
                f = (n(18), n(10), n(22), n(0)),
                h = n(413),
                v = n(411),
                y = n(674),
                _ = n(675),
                w = n(412);
            n(430), n(431), n(432);

            function x(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = Object(d.a)(t);
                    if (e) {
                        var o = Object(d.a)(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return Object(c.a)(this, n)
                }
            }
            var C = function(t, e, n, desc) {
                var r, o = arguments.length,
                    l = o < 3 ? e : null === desc ? desc = Object.getOwnPropertyDescriptor(e, n) : desc;
                if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(m.a)(Reflect)) && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, e, n, desc);
                else
                    for (var i = t.length - 1; i >= 0; i--)(r = t[i]) && (l = (o < 3 ? r(l) : o > 3 ? r(e, n, l) : r(e, n)) || l);
                return o > 3 && l && Object.defineProperty(e, n, l), l
            };
            h.a.use([v.a, y.a, _.a, w.a]);
            var k = function(t) {
                Object(l.a)(n, t);
                var e = x(n);

                function n() {
                    return Object(r.a)(this, n), e.apply(this, arguments)
                }
                return Object(o.a)(n, [{
                    key: "mounted",
                    value: function() {
                        new h.a("#rummy-slide", {
                            slidesPerView: 1,
                            spaceBetween: 24,
                            pagination: {
                                el: ".swiper-pagination",
                                clickable: !0
                            },
                            navigation: {
                                prevEl: ".swiper-pagination-prev",
                                nextEl: ".swiper-pagination-next"
                            },
                            autoplay: {
                                delay: 1e5,
                                disableOnInteraction: !1
                            }
                        })
                    }
                }]), n
            }(f.d);
            C([Object(f.c)({
                type: Array,
                required: !0
            })], k.prototype, "TestimonialList", void 0);
            var j = k = C([Object(f.a)({
                    components: {}
                })], k),
                O = (n(537), n(5)),
                component = Object(O.a)(j, (function() {
                    var t = this,
                        e = t._self._c;
                    t._self._setupProxy;
                    return e("section", {
                        staticClass: "pb-40 md:pb-160 mb-0 md:pt-72 pt-32 position-relative overflow-hidden"
                    }, [e("div", {
                        staticClass: "container container--mini gutter-4 md:gutter-2"
                    }, [e("p", {
                        staticClass: "text-center font-18 md:font-32 mb-8 font-600"
                    }, [t._v("Trusted by 1 Crore players")]), t._v(" "), e("p", {
                        staticClass: "text-center font-14 md:font-20 font-400 line-height-24 text-secondary"
                    }, [t._v("Made with ❤️ in India, for India!")]), t._v(" "), e("div", {
                        staticClass: "d-flex flex-wrap md:flex-nowrap mt-12 md:mt-32"
                    }, [t._m(0), t._v(" "), e("div", {
                        staticClass: "col col--12 md:col--7 rummy-slide md:p-20 p-16 border-radius-8 md:mt-0 mt-12"
                    }, [e("div", {
                        staticClass: "swiper-container overflow-y-visible pb-24 mb:pb-0",
                        attrs: {
                            "data-aos": "animation-translate-y",
                            "data-aos-delay": "300",
                            id: "rummy-slide"
                        }
                    }, [e("div", {
                        staticClass: "swiper-wrapper pb-0"
                    }, t._l(t.TestimonialList, (function(n, r) {
                        return e("div", {
                            key: r,
                            staticClass: "swiper-slide"
                        }, [e("div", {}, [e("div", {
                            staticClass: "d-flex align-items-center md:justify-content-start justify-content-between"
                        }, [e("div", {
                            staticClass: "user-detail d-flex"
                        }, [e("div", {
                            staticClass: "md:mr-16 mr-8"
                        }, [e("img", {
                            staticClass: "icon h-auto client-img",
                            attrs: {
                                loading: "lazy",
                                src: "/img/testimonials/".concat(n.picture),
                                alt: "client",
                                width: "48",
                                height: "48"
                            }
                        })]), t._v(" "), e("div", {
                            staticClass: "user-info"
                        }, [e("p", {
                            staticClass: "md:font-20 font-16 line-height-20 md:line-height-24 pb-4"
                        }, [t._v("\n                        " + t._s(n.name) + "\n                      ")]), t._v(" "), e("p", {
                            staticClass: "md:text-green text-red font-12 md:font-16 line-height-1 price-wining"
                        }, [t._v("Won ₹" + t._s(n.price))])])]), t._v(" "), e("div", {
                            staticClass: "d-flex align-items-center bg-green border-radius-4 pl-12 pr-12 pt-4 pb-4 ml-24"
                        }, [e("img", {
                            staticClass: "mr-4 rating-img",
                            attrs: {
                                loading: "lazy",
                                src: "/img/star-white.png",
                                height: "19",
                                width: "19",
                                alt: "star rating"
                            }
                        }), t._v(" "), e("span", {
                            staticClass: "text-white font-14 md:font-16 line-height-24"
                        }, [t._v(t._s(n.rating))])])]), t._v(" "), e("p", {
                            staticClass: "text-secondary md:font-16 font-14 md:line-height-24 line-height-22 mt-16"
                        }, [t._v("\n                  " + t._s(n.text) + "\n                ")])])])
                    })), 0), t._v(" "), t._m(1), t._v(" "), e("div", {
                        staticClass: "d-block md:d-none swiper-pagination testimonial-pagination bottom-0 text-center"
                    })])])])])])
                }), [
                    function() {
                        var t = this,
                            e = t._self._c;
                        t._self._setupProxy;
                        return e("div", {
                            staticClass: "col col--12 md:col--5 md:p-32 p-16 rating-box mr-0 md:mr-24 border-radius-8 d-flex justify-content-between"
                        }, [e("div", {
                            staticClass: "star-rating"
                        }, [e("p", {
                            staticClass: "md:font-16 font-12 mb-8 font-500"
                        }, [t._v("Ratings")]), t._v(" "), e("p", {
                            staticClass: "font-20 md:font-32 font-700 md:mb-10 mb-12"
                        }, [t._v("4.6")]), t._v(" "), e("div", [e("img", {
                            staticClass: "five-star-rating mb-4 md:mb-8",
                            attrs: {
                                loading: "lazy",
                                src: "/img/five-star-rating.png",
                                height: "18",
                                width: "96",
                                alt: "rating"
                            }
                        })]), t._v(" "), e("p", {
                            staticClass: "text-light font-12 md:font-14"
                        }, [t._v("out of 12,878")])]), t._v(" "), e("div", {
                            staticClass: "range"
                        }, [e("div", {
                            staticClass: "flex align-items-center md:mb-8"
                        }, [e("p", {
                            staticClass: "text-light font-10 mr-8 d-inline-block"
                        }, [t._v("5")]), t._v(" "), e("progress", {
                            staticClass: "progress-bar five-star",
                            attrs: {
                                value: "100",
                                max: "100"
                            }
                        })]), t._v(" "), e("div", {
                            staticClass: "flex align-items-center md:mb-8"
                        }, [e("p", {
                            staticClass: "text-light font-10 mr-8 d-inline-block"
                        }, [t._v("4")]), t._v(" "), e("progress", {
                            staticClass: "progress-bar four-star",
                            attrs: {
                                value: "40",
                                max: "100"
                            }
                        })]), t._v(" "), e("div", {
                            staticClass: "flex align-items-center md:mb-8"
                        }, [e("p", {
                            staticClass: "text-light font-10 mr-8 d-inline-block"
                        }, [t._v("3")]), t._v(" "), e("progress", {
                            staticClass: "progress-bar three-star",
                            attrs: {
                                value: "30",
                                max: "100"
                            }
                        })]), t._v(" "), e("div", {
                            staticClass: "flex align-items-center md:mb-8"
                        }, [e("p", {
                            staticClass: "text-light font-10 mr-8 d-inline-block"
                        }, [t._v("2")]), t._v(" "), e("progress", {
                            staticClass: "progress-bar two-star",
                            attrs: {
                                value: "10",
                                max: "100"
                            }
                        })]), t._v(" "), e("div", {
                            staticClass: "flex align-items-center md:mb-8"
                        }, [e("p", {
                            staticClass: "text-light font-10 mr-8 d-inline-block"
                        }, [t._v("1")]), t._v(" "), e("progress", {
                            staticClass: "progress-bar one-star",
                            attrs: {
                                value: "10",
                                max: "100"
                            }
                        })])])])
                    },
                    function() {
                        var t = this,
                            e = t._self._c;
                        t._self._setupProxy;
                        return e("div", {
                            staticClass: "md:d-flex d-none justify-content-center align-items-center swiper-pagination-button"
                        }, [e("div", {
                            staticClass: "swiper-pagination-prev swiper-button-disabled swiper-navigation mr-12"
                        }, [e("img", {
                            staticClass: "icon h-auto",
                            attrs: {
                                loading: "lazy",
                                src: "/img/swiper-next.png",
                                width: "6px",
                                height: "12px",
                                alt: "previous"
                            }
                        })]), t._v(" "), e("div", {
                            staticClass: "swiper-pagination-next swiper-navigation"
                        }, [e("img", {
                            staticClass: "icon h-auto",
                            attrs: {
                                loading: "lazy",
                                src: "/img/swiper-next.png",
                                width: "6px",
                                height: "12px",
                                alt: "next"
                            }
                        })])])
                    }
                ], !1, null, "479f6d98", null);
            e.
                default = component.exports
        },
        516: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = n(9),
                o = n(8),
                l = n(11),
                c = n(12),
                d = n(2),
                m = n(4),
                f = (n(18), n(10), n(22), n(0)),
                h = n(118);

            function v(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = Object(d.a)(t);
                    if (e) {
                        var o = Object(d.a)(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return Object(c.a)(this, n)
                }
            }
            var y = function(t, e, n, desc) {
                var r, o = arguments.length,
                    l = o < 3 ? e : null === desc ? desc = Object.getOwnPropertyDescriptor(e, n) : desc;
                if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(m.a)(Reflect)) && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, e, n, desc);
                else
                    for (var i = t.length - 1; i >= 0; i--)(r = t[i]) && (l = (o < 3 ? r(l) : o > 3 ? r(e, n, l) : r(e, n)) || l);
                return o > 3 && l && Object.defineProperty(e, n, l), l
            }, _ = function(t) {
                Object(l.a)(n, t);
                var e = v(n);

                function n() {
                    return Object(o.a)(this, n), e.apply(this, arguments)
                }
                return Object(r.a)(n)
            }(f.d);
            y([Object(f.c)({
                type: Boolean,
                default: !1
            })], _.prototype, "reducePadding", void 0);
            var w = _ = y([Object(f.a)({
                    components: {
                        SendMobileLink: h.
                            default
                    }
                })], _),
                x = (n(539), n(5)),
                component = Object(x.a)(w, (function() {
                    var t = this,
                        e = t._self._c;
                    t._self._setupProxy;
                    return e("section", {
                        staticClass: "pb-40 mb-0 position-relative overflow-hidden d-none md:d-block",
                        class: {
                            "md:pb-56": t.reducePadding,
                            "md:pb-160": !t.reducePadding
                        }
                    }, [e("div", {
                        staticClass: "container container--mini gutter-2"
                    }, [t._m(0), t._v(" "), e("p", {
                        staticClass: "font-32 line-height-1 text-secondary font-600 text-center mb-32 pb-4"
                    }, [t._v("Play. Win. Earn")]), t._v(" "), t._m(1), t._v(" "), e("p", {
                        staticClass: "font-18 line-height-24 mb-16 text-center text-secondary"
                    }, [t._v("Tap to download the APP")]), t._v(" "), e("div", {}, [e("send-mobile-link", {
                        staticClass: "justify-content-center",
                        attrs: {
                            "form-outer": "justify-content-center",
                            "root-class": {
                                "h-48": !1,
                                "h-60": !1,
                                "h-54": !0
                            },
                            "button-style": {
                                "h-48": !1,
                                "h-60": !1,
                                "h-54": !0,
                                "border-radius-5": !0
                            },
                            "input-style": "border-1 border-secondary border-solid border-radius-5 h-54"
                        }
                    }), t._v(" "), e("p", {
                        staticClass: "font-16 font-500 mt-16 text-blue text-center"
                    }, [t._v("🔥 Get 5% Bonus on every Add Cash up to ₹100,000")])], 1)])])
                }), [
                    function() {
                        var t = this,
                            e = t._self._c;
                        t._self._setupProxy;
                        return e("p", {
                            staticClass: "text-center font-18 font-400 line-height-24 text-secondary mb-8"
                        }, [t._v("Download the "), e("span", {
                            staticClass: "font-500 text-black"
                        }, [t._v("Yono Games app")])])
                    },
                    function() {
                        var t = this,
                            e = t._self._c;
                        t._self._setupProxy;
                        return e("div", {
                            staticClass: "border-1 border-solid border-light border-radius-136 p-24 mb-40"
                        }, [e("div", {
                            staticClass: "d-flex justify-content-center align-items-center"
                        }, [e("div", {
                            staticClass: "feature text-center mr-64"
                        }, [e("div", {
                            staticClass: "image-box mb-10"
                        }, [e("img", {
                            attrs: {
                                loading: "lazy",
                                src: "/img/1.png",
                                alt: "Ludo",
                                height: "32",
                                width: "32"
                            }
                        })]), t._v(" "), e("p", {
                            staticClass: "font-18 line-height-24"
                        }, [t._v("Ludo")])]), t._v(" "), e("div", {
                            staticClass: "feature text-center mr-64"
                        }, [e("div", {
                            staticClass: "image-box mb-10"
                        }, [e("img", {
                            attrs: {
                                loading: "lazy",
                                src: "/img/2.png",
                                alt: "rummy",
                                height: "32",
                                width: "32"
                            }
                        })]), t._v(" "), e("p", {
                            staticClass: "font-18 line-height-24"
                        }, [t._v("Rummy")])]), t._v(" "), e("div", {
                            staticClass: "feature text-center mr-64"
                        }, [e("div", {
                            staticClass: "image-box mb-10"
                        }, [e("img", {
                            attrs: {
                                loading: "lazy",
                                src: "/img/3.png",
                                alt: "Casual games",
                                height: "32",
                                width: "32"
                            }
                        })]), t._v(" "), e("p", {
                            staticClass: "font-18 line-height-24"
                        }, [t._v("Casual Games")])]), t._v(" "), e("div", {
                            staticClass: "feature text-center",
                            staticStyle: {
                                width: "80px"
                            }
                        }, [e("div", {
                            staticClass: "image-box mb-10"
                        }, [e("img", {
                            attrs: {
                                loading: "lazy",
                                src: "/img/4.png",
                                alt: "many more",
                                height: "32",
                                width: "32"
                            }
                        })]), t._v(" "), e("p", {
                            staticClass: "font-18 line-height-24"
                        }, [t._v("and more")])])])])
                    }
                ], !1, null, "e22cd0e8", null);
            e.
                default = component.exports
        },
        529: function(t, e, n) {
            "use strict";
            n(459)
        },
        530: function(t, e, n) {
            var r = n(35)(!1);
            r.push([t.i, '.platform-feature-list li{position:relative;padding-left:24px;line-height:24px}.platform-feature-list li:before{position:absolute;top:8px;left:0;width:8px;height:8px;content:"";background-image:url(/img/check-box.png);background-size:100% auto;background-repeat:no-repeat}@media(max-width:1024px){.fantasy-icons{height:20px;width:20px}}@media(max-width:1024px){.fantasy-box-list-outer .fantasy-box-list{border-top:0;border-top-left-radius:0;border-top-right-radius:0;border-bottom:0;border-bottom-left-radius:0;border-bottom-right-radius:0;position:relative}.fantasy-box-list-outer .fantasy-box-list:before{content:"";position:absolute;bottom:0;width:90%;height:1px;border-bottom:1px dashed;border-color:#e7e8eb;left:50%;transform:translate(-50%)}}@media(max-width:1024px){.fantasy-box-list-outer .world-fantasy{border-top:1px solid #e7e8eb;border-top-left-radius:12px;border-top-right-radius:12px}}@media(max-width:1024px){.fantasy-box-list-outer .stop-fantasy{border-bottom:1px solid #e7e8eb;border-bottom-left-radius:12px;border-bottom-right-radius:12px}.fantasy-box-list-outer .stop-fantasy:before{display:none}}', ""]), t.exports = r
        },
        531: function(t, e, n) {
            "use strict";
            n(460)
        },
        532: function(t, e, n) {
            var r = n(35)(!1);
            r.push([t.i, ".top-game-card-wrapper{margin-left:-26px;margin-right:-26px}.top-game-card{padding:16px 27px}.top-game-card__img{width:135px;height:135px}@media(max-width:959px){.top-game-card__img{max-width:64px;height:auto}}.top-game-card__img:hover .green-arrow{-webkit-animation:slide1 1.5s cubic-bezier(.4,0,.2,1) infinite;animation:slide1 1.5s cubic-bezier(.4,0,.2,1) infinite}.top-game-card__img:hover .green-arrow.rotate{transform:rotate(180deg);-webkit-animation:slide2 1.5s cubic-bezier(.4,0,.2,1) infinite;animation:slide2 1.5s cubic-bezier(.4,0,.2,1) infinite}.top-game-card__text{text-align:center}.top-game-card .green-arrow.rotate{transform:rotate(180deg)}@-webkit-keyframes slide1{0%,to{transform:translate(0)}50%{transform:translateY(-4px)}}@keyframes slide1{0%,to{transform:translate(0)}50%{transform:translateY(-4px)}}@-webkit-keyframes slide2{0%,to{transform:rotate(180deg) translate(0)}50%{transform:rotate(180deg) translateY(4px)}}@keyframes slide2{0%,to{transform:rotate(180deg) translate(0)}50%{transform:rotate(180deg) translateY(4px)}}.card-game-outer{overflow:hidden;transition:all .5s;height:auto;max-height:600px}.loadLess{max-height:0}.loadMore{max-height:600px}.top-game-mobile .top-game-card{padding:16px 8px}", ""]), t.exports = r
        },
        533: function(t, e, n) {
            "use strict";
            n(461)
        },
        534: function(t, e, n) {
            var r = n(35)(!1);
            r.push([t.i, ".top-game-card-wrapper{margin-left:-24px;margin-right:-24px}", ""]), t.exports = r
        },
        535: function(t, e, n) {
            "use strict";
            n(462)
        },
        536: function(t, e, n) {
            var r = n(35)(!1);
            r.push([t.i, "@media(max-width:959px){.app-card__img{max-width:70px}}.toggle-text{transition:all .3s;height:0}.read-more-outer{overflow:hidden;transition:all .5s;height:auto;max-height:600px}.loadLess{max-height:0}.loadMore{max-height:600px}", ""]), t.exports = r
        },
        537: function(t, e, n) {
            "use strict";
            n(463)
        },
        538: function(t, e, n) {
            var r = n(35)(!1);
            r.push([t.i, ".rating-box[data-v-479f6d98],.rummy-slide[data-v-479f6d98]{box-shadow:0 0 20px hsla(0,0%,42%,.1)}.price-wining[data-v-479f6d98]{font-style:italic}.swiper-pagination-button[data-v-479f6d98]{position:absolute;top:20px;right:20px;z-index:2;cursor:pointer}.swiper-navigation[data-v-479f6d98]{height:24px;width:24px;border-radius:4px;border:1px solid #a0a3ae;position:relative}.swiper-navigation img[data-v-479f6d98]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.swiper-pagination-prev img[data-v-479f6d98]{transform:translate(-50%,-50%) rotate(-180deg)}.swiper-button-disabled[data-v-479f6d98]{opacity:.4}@media(max-width:940px){.rating-img[data-v-479f6d98]{height:14px;width:14px}}@media(max-width:940px){.client-img[data-v-479f6d98]{height:39px;width:39px}}@media(max-width:940px){.five-star-rating[data-v-479f6d98]{height:16px;width:86px}}.star-rating[data-v-479f6d98]{width:40%}.range[data-v-479f6d98]{width:60%}.progress-bar[data-v-479f6d98]{width:90%;height:10px}@media(max-width:940px){.progress-bar[data-v-479f6d98]{width:80%}}progress[data-v-479f6d98]::-webkit-progress-bar{background-color:#fff;height:10px}progress.five-star[data-v-479f6d98]::-webkit-progress-value{background-color:#7cc9a1;height:10px}progress.four-star[data-v-479f6d98]::-webkit-progress-value{background-color:#aed888;height:10px}progress.three-star[data-v-479f6d98]::-webkit-progress-value{background-color:#ffd955;height:10px}progress.two-star[data-v-479f6d98]::-webkit-progress-value{background-color:#ffb34f;height:10px}progress.one-star[data-v-479f6d98]::-webkit-progress-value{background-color:#ff8e5f;height:10px}", ""]), t.exports = r
        },
        539: function(t, e, n) {
            "use strict";
            n(464)
        },
        540: function(t, e, n) {
            var r = n(35)(!1);
            r.push([t.i, ".feature[data-v-e22cd0e8]{width:126px}", ""]), t.exports = r
        },
        541: function(t, e, n) {
            "use strict";
            n(465)
        },
        542: function(t, e, n) {
            var r = n(35)(!1);
            r.push([t.i, '.accordion__trigger{position:relative}.accordion__trigger:after{position:absolute;top:20px;right:0;content:"";width:24px;height:24px;transition:transform .3s ease;background-image:url(/img/up-arrow.svg);background-position:50%;background-repeat:no-repeat;transform:translateY(-50%) rotate(180deg)}@media(max-width:959px){.accordion__trigger:after{top:8px}}.accordion__trigger_active:after{transform:translateY(-50%) rotate(0deg)}', ""]), t.exports = r
        },
        543: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return r
            }));
            var r = [{
                name: "Rummy Gamer",
                price: "2 Crore+",
                rating: 4.5,
                text: "Yono Games is the best online earning app. I am a big Rummy Fan and I love playing  Real Cash Rummy on Yono Games. I also play Poker Ludo and other skilled games on Yono Games and earn cash amount online daily.",
                picture: "kiran.png"
            }, {
                name: "Crash Gamer",
                price: "1.5 Crore+",
                rating: 4.6,
                text: "I never knew Crash was such an easy game. I started playing Crash on Yono Games and now I play Crash everyday and win prizes while enjoying the game as well.",
                picture: "sindhu.png"
            }, {
                name: "Wingo Lottery Gamer",
                price: "30 Lakh+",
                rating: 4.5,
                text: "I got to know about Yono Games from one of my friends. I started playing Wingo Lottery and Black Jack on Yono Games. I have a big fan following now on Yono Games. People keep asking me for my advice on how to win on wingo lottery.",
                picture: "surbhi.png"
            }, {
                name: "Poker Gamer",
                price: "30 Lakh+",
                rating: 4.2,
                text: "First time I saw an Ad on TV about Yono Games and installed it. It is an amazing app with more than 25+ games. I daily earn more than 1000 Rupees from Yono Games. I mostly play Poker and Teenpatti.",
                picture: "kritin.png"
            }, {
                name: "Refer & Earn Youtuber",
                price: "25 Lakh+",
                rating: 4.6,
                text: "I came to know about Yono Games from Youtube Videos. I started playing SLOTS on Yono Games and started enjoying it a lot. I also refer my friends and earn Rs. 50 per referral through it. Yono Games is the best online gaming app.",
                picture: "ranjit.png"
            }, {
                name: "Salon Club Gamer",
                price: "15 Lakh+",
                rating: 4.6,
                text: "I usually play poker game in real table with my friends,but the COVID-19 makes it hard to us to meet and play together.You can never imagine how I am excited when I find that we can create salon rooms and play Poker,Rummy,Ludo and other games together again.Thank Yono Games make it more closer among my friends!",
                picture: "raghunath.png"
            }]
        }
    }
]);