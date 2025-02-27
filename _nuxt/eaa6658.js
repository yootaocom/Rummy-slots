(window.webpackJsonp = window.webpackJsonp || []).push([
    [94, 24, 27, 33, 39, 65], {
        420: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return w
            }));
            var o = n(4),
                r = n(23);
            n(30), n(61), n(185), n(10), n(87), n(37), n(88), n(26), n(38), n(40), n(18), n(50);

            function l(object, t) {
                var e = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(object);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(object, t).enumerable
                    }))), e.push.apply(e, n)
                }
                return e
            }

            function c(t) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? l(Object(source), !0).forEach((function(e) {
                        Object(r.a)(t, e, source[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : l(Object(source)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                    }))
                }
                return t
            }
            var d = "https://www.gamezy.com",
                f = function(t) {
                    if (!t.yoast_head_json) return [];
                    var e = [],
                        n = h(t),
                        o = n.yoast_head_json;
                    for (var r in o) switch (r) {
                        case "description":
                            e.push({
                                hid: "description",
                                name: "description",
                                content: o.description
                            });
                            break;
                        case "robots":
                            e.push({
                                hid: "robots",
                                name: "robots",
                                content: o.index
                            });
                            break;
                        case "og_locale":
                            e.push({
                                hid: "og:locale",
                                property: "og:locale",
                                content: o.og_locale
                            });
                            break;
                        case "og_type":
                            e.push({
                                hid: "og:locale",
                                property: "og:type",
                                content: o.og_type
                            });
                            break;
                        case "og_title":
                            e.push({
                                hid: "og:title",
                                property: "og:title",
                                content: o.og_title
                            });
                            break;
                        case "og_description":
                            e.push({
                                hid: "og:description",
                                property: "og:description",
                                content: o.og_description
                            });
                            break;
                        case "og_url":
                            "post" === n.type ? e.push({
                                hid: "og:url",
                                property: "og:url",
                                content: "".concat(d, "/blog/").concat(n.slug, "/")
                            }) : e.push({
                                hid: "og:url",
                                property: "og:url",
                                content: o.og_url
                            });
                            break;
                        case "og_site_name":
                            e.push({
                                hid: "og:site_name",
                                property: "og:site_name",
                                content: o.og_site_name
                            });
                            break;
                        case "og_image":
                            e.push({
                                hid: "og:image",
                                property: "og:image",
                                content: o.og_image[0].url
                            });
                            break;
                        case "twitter_card":
                            e.push({
                                hid: "twitter_card",
                                name: "twitter_card",
                                content: o.twitter_card
                            });
                            break;
                        case "twitter_title":
                            e.push({
                                hid: "twitter_title",
                                name: "twitter_title",
                                content: o.twitter_title
                            })
                    }
                    return e
                }, m = function(t) {
                    if (!t.yoast_head_json) return [];
                    var e = [],
                        n = h(t).yoast_head_json;
                    for (var o in n)
                        if ("canonical" === o)
                            if ("post" === t.type) {
                                var r = "";
                                t.categories.length ? function() {
                                    var e = t.categories[0],
                                        n = t.categoryList.find((function(t) {
                                            return parseInt(t.id) === parseInt(e)
                                        }));
                                    r = n ? "/".concat(n.slug, "/").concat(t.slug, "/") : "/uncategorized/".concat(t.slug, "/")
                                }() : r = "/".concat(t.slug, "/"), e.push({
                                    hid: "canonical",
                                    rel: "canonical",
                                    href: "".concat(d, "/blog").concat(r)
                                })
                            } else e.push({
                                hid: "canonical",
                                rel: "canonical",
                                href: n.canonical
                            });
                    return e
                }, h = function(t) {
                    var e = JSON.stringify(t);
                    return e = (e = (e = (e = (e = e.replace(/https:\/\/alpha.website.gamezy.com/g, d)).replace(/http:\/\/alpha.website.gamezy.com/g, d)).replace(/http:\/\/wordpress-gamezy.dracarys.prod/g, d)).replace(/https:\/\/wordpress-gamezy.dracarys.prod/g, d)).replace(/https:\/\/13.126.114.242/g, d), JSON.parse(e)
                }, y = function(t) {
                    if (!t.yoast_head_json) return [];
                    var e = [],
                        n = t.yoast_head_json;
                    for (var o in n)
                        if ("schema" === o) n.schema["@graph"].forEach((function(t) {
                            t = h(t), e.push({
                                innerHTML: JSON.stringify(c({
                                    "@context": "http://schema.org"
                                }, t)),
                                type: "application/ld+json"
                            })
                        }));
                    return e
                }, v = function(t) {
                    var e = {
                        __dangerouslyDisableSanitizers: ["script", "innerHTML"]
                    }, n = [];
                    switch (t) {
                        case "/":
                            [{
                                "@context": "https://schema.org",
                                "@type": "Organization",
                                name: "Gamezy App",
                                alternateName: "Gamezy",
                                url: "https://www.gamezy.com/",
                                logo: "https://www.gamezy.com/images/Gamezy_Logo.png",
                                contactPoint: {
                                    "@type": "ContactPoint",
                                    contactType: "customer service",
                                    email: "support@gamezy.com",
                                    areaServed: "IN"
                                },
                                sameAs: ["https://www.facebook.com/YonoGames", "https://twitter.com/YonoGamesOff", "https://www.instagram.com/yonogamesofficial/?hl=en", "https://www.youtube.com/channel/UCiSQ8GntIXKG35sAoMetBCQ"]
                            }, {
                                "@context": "https://schema.org",
                                "@type": "SoftwareApplication",
                                name: "Gamezy",
                                operatingSystem: "ANDROID, iOS",
                                applicationCategory: "GameApplication",
                                aggregateRating: {
                                    "@type": "AggregateRating",
                                    ratingValue: "4.6",
                                    ratingCount: "15000"
                                },
                                offers: {
                                    "@type": "Offer",
                                    price: "00",
                                    priceCurrency: "INR"
                                }
                            }].forEach((function(t) {
                                n.push({
                                    innerHTML: JSON.stringify(t),
                                    type: "application/ld+json"
                                })
                            })), e.script = n, e.title = "", e.link = [], e.link.push({
                                hid: "canonical",
                                rel: "canonical",
                                href: "".concat(d, "/")
                            });
                            break;
                        case "/terms-condition/":
                            e.title = "Terms and Condition  of Service - Fantasy Cricket Online | Download Fantasy Cricket App & Win Rewards | Gamezy";
                            break;
                        case "/privacy-policy/":
                            e.title = "Privacy Policy - Gamezy";
                            break;
                        case "/point-system/":
                            e.title = "Point System - Fantasy Cricket Online | Download Fantasy Cricket App & Win Rewards | Gamezy";
                            break;
                        case "/play-responsibly/":
                            e.title = "Responsible Gaming Policy - Gamezy";
                            break;
                        case "/faq/":
                            e.title = "Frequently Asked Questions - Gamezy FAQs";
                            break;
                        case "/about-us/":
                            e.title = "Fair Play Policy - Gamezy";
                            break;
                        case "/about-us/":
                            e.title = "About Us - Our Story, Offerings & About Our Makers | Gamezy";
                            break;
                        case "/blog/":
                            e.title = "Gamezy Blogs - Interesting & Informative Blogs About Sports & Games";
                            break;
                        case "/blog/:id/":
                            e.title = "Gamezy Blogs - Interesting & Informative Blogs About Sports & Games", e.link = [], n.push({
                                hid: "description",
                                name: "description",
                                content: "Check out informative and interesting blogs about sports and casual games on Gamezy. Click to start reading blogs on Gamezy now!"
                            }), e.link.push({
                                hid: "canonical",
                                rel: "canonical",
                                href: "".concat(d, "/blog/")
                            });
                            break;
                        case "/blog/:category/":
                            e.title = "Gamezy Blogs - Interesting & Informative Blogs About Sports & Games", e.link = [], e.link.push({
                                hid: "canonical",
                                rel: "canonical",
                                href: "".concat(d, "/blog/")
                            });
                            break;
                        case "/gamezy-referral/":
                            e.title = "Gamezy Referral - Sign-up Now & Earn Upto ₹2690", e.link = [], e.link.push({
                                hid: "canonical",
                                rel: "canonical",
                                href: "".concat(d, "/gamezy-referral/")
                            })
                    }
                    return e
                }, w = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return "object" !== Object(o.a)(t) ? v(t) : {
                        title: t.yoast_head_json.title,
                        meta: f(t),
                        link: m(t),
                        script: y(t),
                        __dangerouslyDisableSanitizers: ["script", "innerHTML"]
                    }
                }
        },
        433: function(t, e, n) {
            "use strict";
            var o = n(13),
                r = n(283);
            o({
                target: "String",
                proto: !0,
                forced: n(284)("link")
            }, {
                link: function(t) {
                    return r(this, "a", "href", t)
                }
            })
        },
        448: function(t, e, n) {
            var content = n(498);
            content.__esModule && (content = content.
                default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, n(36).
                default)("7d107f16", content, !0, {
                sourceMap: !1
            })
        },
        449: function(t, e, n) {
            var content = n(500);
            content.__esModule && (content = content.
                default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, n(36).
                default)("63ce9d39", content, !0, {
                sourceMap: !1
            })
        },
        450: function(t, e, n) {
            var content = n(502);
            content.__esModule && (content = content.
                default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, n(36).
                default)("196e7c90", content, !0, {
                sourceMap: !1
            })
        },
        451: function(t, e, n) {
            var content = n(504);
            content.__esModule && (content = content.
                default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, n(36).
                default)("7582f639", content, !0, {
                sourceMap: !1
            })
        },
        497: function(t, e, n) {
            "use strict";
            n(448)
        },
        498: function(t, e, n) {
            var o = n(35)(!1);
            o.push([t.i, ".home-section{padding-top:60px;padding-bottom:40px;min-height:540px}@media(max-width:960px){.home-section{height:auto;padding-top:50px}}.home-section .banner-outer{position:relative;padding-top:89.32%;overflow:hidden}@media(max-width:960px){.home-section .banner-outer{padding-top:88.9%}}.home-section .banner-outer .banner-img{display:block;max-height:100%;width:auto;position:absolute;top:0}", ""]), t.exports = o
        },
        499: function(t, e, n) {
            "use strict";
            n(449)
        },
        500: function(t, e, n) {
            var o = n(35)(!1);
            o.push([t.i, '.bank-transfer{position:relative}.bank-transfer:before{content:"";position:absolute;right:0;height:80%;width:1px;background:#e7e8eb;transform:translateY(-50%);top:50%}', ""]), t.exports = o
        },
        501: function(t, e, n) {
            "use strict";
            n(450)
        },
        502: function(t, e, n) {
            var o = n(35)(!1);
            o.push([t.i, "@media(max-width:959px){.earn-card__img{max-width:84px}}.top-game-card-wrapper{margin-left:-24px;margin-right:-24px}.top-game-card{padding:16px 24px;display:inline-block}.top-game-card__img{width:135px;max-height:135px}.top-game-card__img:hover .green-arrow{-webkit-animation:slide1 1.5s cubic-bezier(.4,0,.2,1) infinite;animation:slide1 1.5s cubic-bezier(.4,0,.2,1) infinite}@-webkit-keyframes slide1{0%,to{transform:translate(0)}50%{transform:translateY(-4px)}}@keyframes slide1{0%,to{transform:translate(0)}50%{transform:translateY(-4px)}}", ""]), t.exports = o
        },
        503: function(t, e, n) {
            "use strict";
            n(451)
        },
        504: function(t, e, n) {
            var o = n(35)(!1);
            o.push([t.i, '.tablinks{width:40%}.video-container{width:60%}.highlighter:before{content:"";position:absolute;bottom:0;left:0;width:68px;height:4px;background:#f9c921}', ""]), t.exports = o
        },
        505: function(t, e, n) {
            var content = n(558);
            content.__esModule && (content = content.
                default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, n(36).
                default)("5b88dd5c", content, !0, {
                sourceMap: !1
            })
        },
        520: function(t, e, n) {
            "use strict";
            n.r(e);
            n(30), n(61);
            var o = n(9),
                r = n(8),
                l = n(11),
                c = n(12),
                d = n(2),
                f = n(4),
                m = (n(18), n(10), n(22), n(0)),
                h = n(118),
                y = n(120);

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
                    var n, o = Object(d.a)(t);
                    if (e) {
                        var r = Object(d.a)(this).constructor;
                        n = Reflect.construct(o, arguments, r)
                    } else n = o.apply(this, arguments);
                    return Object(c.a)(this, n)
                }
            }
            var w = function(t, e, n, desc) {
                var o, r = arguments.length,
                    l = r < 3 ? e : null === desc ? desc = Object.getOwnPropertyDescriptor(e, n) : desc;
                if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(f.a)(Reflect)) && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, e, n, desc);
                else
                    for (var i = t.length - 1; i >= 0; i--)(o = t[i]) && (l = (r < 3 ? o(l) : r > 3 ? o(e, n, l) : o(e, n)) || l);
                return r > 3 && l && Object.defineProperty(e, n, l), l
            }, _ = function(t) {
                Object(l.a)(n, t);
                var e = v(n);

                function n() {
                    return Object(r.a)(this, n), e.apply(this, arguments)
                }
                return Object(o.a)(n)
            }(m.d);
            w([Object(m.c)({
                type: Object,
                required: !0
            })], _.prototype, "bannerData", void 0), w([Object(m.c)({
                type: String,
                default: "h1"
            })], _.prototype, "headingType", void 0);
            var x = _ = w([Object(m.a)({
                    components: {
                        AppDownloadButton: y.
                            default,
                        SendMobileLink: h.
                            default
                    }
                })], _),
                C = (n(497), n(5)),
                component = Object(C.a)(x, (function() {
                    var t = this,
                        e = t._self._c;
                    t._self._setupProxy;
                    return e("div", {
                        staticClass: "d-flex bg-primary text-white home-section"
                    }, [e("div", {
                        staticClass: "container container--box position-relative h-full"
                    }, [e("div", {
                        staticClass: "row h-full"
                    }, [e("div", {
                        staticClass: "col col--12 md:col--7 order-2 md:order-none pt-24 md:pt-0"
                    }, ["h1" !== t.headingType ? e("div", {
                        staticClass: "font-22 text-center md:text-left md:font-40 font-700 mb-0",
                        domProps: {
                            innerHTML: t._s(t.bannerData.title)
                        }
                    }) : e("h1", {
                        staticClass: "font-22 text-center md:text-left md:font-40 font-700 mb-0",
                        domProps: {
                            innerHTML: t._s(t.bannerData.title)
                        }
                    }), t._v(" "), e("p", {
                        staticClass: "font-16 text-center md:text-left md:font-24 mt-8 md:mt-12 text-white-secondary font-400"
                    }, [t._v(t._s(t.bannerData.description))]), t._v(" "), e("div", {
                        staticClass: "mt-32 d-none md:d-block"
                    }, [e("send-mobile-link", {
                        attrs: {
                            "button-style": {
                                "h-48": !1,
                                "h-60": !0,
                                "border-radius-5": !0
                            },
                            "input-style": "h-60 border-radius-5",
                            "root-class": {
                                "h-48": !1,
                                "h-60": !0,
                                " h-54": !1,
                                "border-radius-5": !0
                            }
                        }
                    }), t._v(" "), e("p", {
                        staticClass: "font-16 font-500 mt-16 text-yellow"
                    }, [t._v("🔥 Get 5% Bonus on every Add Cash up to ₹100,000")])], 1), t._v(" "), e("div", {
                        staticClass: "md:mt-32 mt-20 d-block md:d-none"
                    }, [e("app-download-button", {
                        attrs: {
                            "app-button-style": {
                                "border-radius-6": !0,
                                "border-radius-62": !1
                            }
                        }
                    }), t._v(" "), e("p", {
                        staticClass: "font-12 font-500 mt-8 text-yellow text-center"
                    }, [t._v("🔥 Get 5% Bonus on every Add Cash up to ₹100,000")])], 1)]), t._v(" "), e("div", {
                        staticClass: "col col--12 md:col--5 h-full position-relative order-1 md:order-none"
                    }, [e("div", {
                        staticClass: "d-flex align-items-start justify-content-center h-full banner-outer"
                    }, [e("img", {
                        staticClass: "banner-img h-auto",
                        attrs: {
                            alt: "Gamzy Banner",
                            src: t.bannerData.picture,
                            width: "395",
                            height: "444",
                            rel: "preload"
                        }
                    })])])]), t._v(" "), t._m(0)])])
                }), [
                    function() {
                        var t = this,
                            e = t._self._c;
                        t._self._setupProxy;
                        return e("div", {
                            staticClass: "d-none md:d-flex position-absolute bottom-0 left-0"
                        }, [e("div", {
                            staticClass: "d-flex align-items-center"
                        }, [e("div", {
                            staticClass: "d-flex align-items-center"
                        }, [e("div", {
                            staticClass: "mr-16"
                        }, [e("img", {
                            staticClass: "svg-icon social",
                            attrs: {
                                loading: "lazy",
                                width: "41",
                                height: "41",
                                alt: "facebook logo",
                                src: "/img/sq-logo.png"
                            }
                        })]), t._v(" "), e("div", [e("div", {
                            staticClass: "font-16"
                        }, [t._v("Yono Games")]), t._v(" "), e("div", {
                            staticClass: "font-14 text-white-secondary",
                            staticStyle: {
                                "margin-top": "4px"
                            }
                        }, [t._v("4.6 Rating "), e("span", {
                            staticClass: "ml-16"
                        }, [t._v("25M+ Downloads")])])])]), t._v(" "), e("div", {
                            staticClass: "ml-32 mr-32 h-full d-flex justify-content-center pt-8 pb-8"
                        }, [e("div", {
                            staticStyle: {
                                width: "1px",
                                height: "80%",
                                "background-color": "rgba(255, 255, 255, 0.54)"
                            }
                        })]), t._v(" "), e("div", {}, [e("div", {}), t._v(" "), e("div", {}, [e("div", {
                            staticClass: "text-white-secondary"
                        }, [t._v("Available on")]), t._v(" "), e("div", {}, [e("ul", {
                            staticClass: "d-flex mb-0 pt-8"
                        }, [e("li", {
                            staticClass: "mr-20"
                        }, [e("a", {
                            staticClass: "w-32 h-32 d-inline-flex align-items-center justify-content-center",
                            attrs: {
                                rel: "noreferrer",
                                href: "https://download.yonogames.com/dl/YonoGames.apk",
                                target: "_blank"
                            }
                        }, [e("img", {
                            staticClass: "svg-icon social",
                            attrs: {
                                loading: "lazy",
                                width: "24",
                                height: "24",
                                alt: "facebook logo",
                                src: "/img/android-logo.svg"
                            }
                        })])]), t._v(" "), e("li", [e("a", {
                            staticClass: "w-32 h-32 d-inline-flex align-items-center justify-content-center",
                            attrs: {
                                rel: "noreferrer",
                                href: "https://apps.apple.com/in/app/gamezy-fantasy-cricket/id1490415018",
                                target: "_blank"
                            }
                        }, [])])])])])])])])
                    }
                ], !1, null, null, null);
            e.
                default = component.exports
        },
        521: function(t, e, n) {
            "use strict";
            n.r(e);
            var o = n(9),
                r = n(8),
                l = n(11),
                c = n(12),
                d = n(2),
                f = n(4),
                m = (n(18), n(10), n(22), n(0)),
                h = n(118);

            function y(t) {
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
                    var n, o = Object(d.a)(t);
                    if (e) {
                        var r = Object(d.a)(this).constructor;
                        n = Reflect.construct(o, arguments, r)
                    } else n = o.apply(this, arguments);
                    return Object(c.a)(this, n)
                }
            }
            var v = function(t, e, n, desc) {
                    var o, r = arguments.length,
                        l = r < 3 ? e : null === desc ? desc = Object.getOwnPropertyDescriptor(e, n) : desc;
                    if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(f.a)(Reflect)) && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, e, n, desc);
                    else
                        for (var i = t.length - 1; i >= 0; i--)(o = t[i]) && (l = (r < 3 ? o(l) : r > 3 ? o(e, n, l) : o(e, n)) || l);
                    return r > 3 && l && Object.defineProperty(e, n, l), l
                }, w = function(t) {
                    Object(l.a)(n, t);
                    var e = y(n);

                    function n() {
                        var t;
                        return Object(r.a)(this, n), (t = e.apply(this, arguments)).showMenu = !1, t
                    }
                    return Object(o.a)(n)
                }(m.d),
                _ = w = v([Object(m.a)({
                    components: {
                        SendMobileLink: h.
                            default
                    }
                })], w),
                x = (n(499), n(5)),
                component = Object(x.a)(_, (function() {
                    var t = this;
                    t._self._c, t._self._setupProxy;
                    return t._m(0)
                }), [
                    function() {
                        var t = this,
                            e = t._self._c;
                        t._self._setupProxy;
                        return e("section", [e("div", {
                            staticClass: "container gutter-4 md:gutter-2 container--box container--mini pt-24 pb-24 border-b-1 border-light border-solid"
                        }, [e("div", {
                            staticClass: "row justify-content-between"
                        }, [e("div", {
                            staticClass: "col col--12 md:col--4"
                        }, [e("p", {
                            staticClass: "font-14 font-400 md:font-24 text-center md:text-left"
                        }, [t._v("Withdraw winnings directly to your")])]), t._v(" "), e("div", {
                            staticClass: "font-32 md:font-18"
                        }), t._v(" "), e("div", {
                            staticClass: "col mt-12 md:mt-0 col--12 md:col--6"
                        }, [e("div", {
                            staticClass: "row"
                        }, [e("div", {
                            staticClass: "col col--6 bank-transfer"
                        }, [e("div", {
                            staticClass: "text-center"
                        }, [e("img", {
                            staticClass: "m-auto",
                            attrs: {
                                loading: "lazy",
                                alt: "Bank Transfer",
                                src: "/img/imps-logo.png",
                                width: "115",
                                height: "30"
                            }
                        }), t._v(" "), e("p", {
                            staticClass: "font-12 md:font-14 font-400 md:font-16 mt-8 text-secondary"
                        }, [t._v("Bank Transfer")])])]), t._v(" "), e("div", {
                            staticClass: "col col--6"
                        }, [e("div", {
                            staticClass: "text-center"
                        }, [e("img", {
                            staticClass: "m-auto",
                            attrs: {
                                loading: "lazy",
                                alt: "UPI Transfer",
                                src: "/img/upi.png",
                                width: "100",
                                height: "28"
                            }
                        }), t._v(" "), e("p", {
                            staticClass: "font-12 md:font-14 font-400 md:font-16 mt-8 text-secondary"
                        }, [t._v("UPI Transfer")])])])])])])])])
                    }
                ], !1, null, null, null);
            e.
                default = component.exports
        },
        522: function(t, e, n) {
            "use strict";
            n.r(e);
            var o = n(9),
                r = n(8),
                l = n(11),
                c = n(12),
                d = n(2),
                f = n(4),
                m = (n(18), n(10), n(22), n(0));

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
                    var n, o = Object(d.a)(t);
                    if (e) {
                        var r = Object(d.a)(this).constructor;
                        n = Reflect.construct(o, arguments, r)
                    } else n = o.apply(this, arguments);
                    return Object(c.a)(this, n)
                }
            }
            var y = function(t, e, n, desc) {
                    var o, r = arguments.length,
                        l = r < 3 ? e : null === desc ? desc = Object.getOwnPropertyDescriptor(e, n) : desc;
                    if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(f.a)(Reflect)) && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, e, n, desc);
                    else
                        for (var i = t.length - 1; i >= 0; i--)(o = t[i]) && (l = (r < 3 ? o(l) : r > 3 ? o(e, n, l) : o(e, n)) || l);
                    return r > 3 && l && Object.defineProperty(e, n, l), l
                }, v = function(t) {
                    Object(l.a)(n, t);
                    var e = h(n);

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
                    return Object(o.a)(n)
                }(m.d),
                w = v = y([Object(m.a)({
                    components: {}
                })], v),
                _ = (n(501), n(5)),
                component = Object(_.a)(w, (function() {
                    var t = this;
                    t._self._c, t._self._setupProxy;
                    return t._m(0)
                }), [
                    function() {
                        var t = this,
                            e = t._self._c;
                        t._self._setupProxy;
                        return e("section", [e("div", {
                            staticClass: "container gutter-4 md:gutter-2 container--box container--mini pt-32 pb-32 md:pt-72 md:pb-72"
                        }, [e("div", {
                            staticClass: "row"
                        }, [e("div", {
                            staticClass: "col col--12"
                        }, [e("p", {
                            staticClass: "text-center font-18 md:font-32 md:mb-32 mb-10 font-600"
                        }, [t._v("Earn more with Yono Games")])])]), t._v(" "), e("div", {
                            staticClass: "row gutter-1"
                        }, [e("div", {
                            staticClass: "col mb-12 md:mb-0 col--12 md:col--6"
                        }, [e("div", {
                            staticClass: "p-16 md:p-24 align-items-center border-radius-8 w-full d-flex",
                            staticStyle: {
                                "background-color": "#fceeff"
                            }
                        }, [e("div", {
                            staticClass: "flex-shrink-0 order-2 md:order-1 ml-24 md:ml-0"
                        }, [e("img", {
                            staticClass: "h-auto earn-card__img",
                            attrs: {
                                src: "/img/earn-refer.png",
                                width: "121",
                                height: "121",
                                alt: "earn and refer"
                            }
                        })]), t._v(" "), e("div", {
                            staticClass: "ml-0 md:ml-24 md:ml-32 flex-1 order-1 md:order-2"
                        }, [e("div", {
                            staticClass: "font-14 md:font-20 font-600"
                        }, [t._v("Refer and Earn")]), t._v(" "), e("p", {
                            staticClass: "mb-8 md:mb-24 mt-8 font-12 md:font-16 text-secondary"
                        }, [t._v("Earn up to ₹50,000 every time you refer a friend")]), t._v(" "), e("a", {
                            staticClass: "d-inline-flex font-12 md:font-18 align-items-center overflow-hidden justify-content-center button--lg border-radius-6 border-1 border-white text-white pt-4 pb-4 md:pt-0 md:pb-0 h-26 md:h-44 button bg-primary pl-24 pr-24",
                            attrs: {
                                href: "https://download.yonogames.com/dl/YonoGames.apk"
                            }
                        }, [e("span", {
                            staticClass: "button__label"
                        }, [t._v("Know More")])])])])]), t._v(" "), e("div", {
                            staticClass: "col col--12 md:col--6"
                        }, [e("div", {
                            staticClass: "p-16 md:p-24 border-radius-8 w-full align-items-center d-flex",
                            staticStyle: {
                                "background-color": "#fff9c9"
                            }
                        }, [e("div", {
                            staticClass: "flex-shrink-0"
                        }, [e("img", {
                            staticClass: "h-auto earn-card__img",
                            attrs: {
                                src: "/img/infulancer.png",
                                width: "120",
                                height: "120",
                                alt: "influencer"
                            }
                        })]), t._v(" "), e("div", {
                            staticClass: "ml-24 md:ml-32 flex-1"
                        }, [e("div", {
                            staticClass: "font-14 md:font-20 font-600"
                        }, [t._v("Are you an Influencer?")]), t._v(" "), e("p", {
                            staticClass: "mb-8 md:mb-24 mt-8 font-12 md:font-16 text-secondary"
                        }, [t._v("Earn Lakhs of rupees every time your followers play a game")]), t._v(" "), e("a", {
                            staticClass: "d-inline-flex font-12 md:font-18 align-items-center overflow-hidden justify-content-center button--lg border-radius-6 border-1 border-white text-black pt-4 pb-4 md:pt-0 md:pb-0 h-26 md:h-44 button bg-yellow pl-24 pr-24",
                            attrs: {
                                href: "https://download.yonogames.com/dl/YonoGames.apk"
                            }
                        }, [e("span", {
                            staticClass: "button__label"
                        }, [t._v("Know More")])])])])])])])])
                    }
                ], !1, null, null, null);
            e.
                default = component.exports
        },
        523: function(t, e, n) {
            "use strict";
            n.r(e);
            var o = {
                    props: {
                        tabList: {
                            type: Array,
                            required: !0
                        }
                    },
                    data: function() {
                        return {
                            activeTab: 1
                        }
                    },
                    methods: {
                        showDialog: function() {
                            this.$emit("showDialog")
                        }
                    }
                }, r = (n(503), n(5)),
                component = Object(r.a)(o, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        staticClass: "d-flex justify-content-between"
                    }, [e("div", {
                        staticClass: "flex-col mr-16 pr-4 tablinks"
                    }, [e("ul", {
                        staticClass: "mb-24"
                    }, t._l(t.tabList, (function(n, o) {
                        return e("li", {
                            key: o,
                            staticClass: "position-relative pt-16 pb-16 pl-20 pr-20 border-solid",
                            class: o + 1 === t.activeTab ? "bg-yellow-light border-1 border-yellow highlighter" : "border-b-1 border-light"
                        }, [e("div", [e("h4", {
                            staticClass: "font-18 font-400 mb-8"
                        }, [t._v(t._s(n.title))]), t._v(" "), e("p", {
                            staticClass: "font-14 font-400 text-light"
                        }, [t._v(t._s(n.subTitle))])]), t._v(" "), e("input", {
                            directives: [{
                                name: "model",
                                rawName: "v-model",
                                value: t.activeTab,
                                expression: "activeTab"
                            }],
                            staticClass: "position-absolute top-0 left-0 h-full w-full opacity-0",
                            attrs: {
                                id: "".concat(o),
                                type: "radio",
                                name: "".concat(o, "-tab")
                            },
                            domProps: {
                                value: o + 1,
                                checked: t._q(t.activeTab, o + 1)
                            },
                            on: {
                                change: function(e) {
                                    t.activeTab = o + 1
                                }
                            }
                        })])
                    })), 0)]), t._v(" "), t._l(t.tabList, (function(n, o) {
                        return [o + 1 === t.activeTab ? e("div", {
                            key: o,
                            staticClass: "video-container pl-24 pr-24"
                        }, [t._t("tabPanel-".concat(o + 1))], 2) : t._e()]
                    }))], 2)
                }), [], !1, null, null, null);
            e.
                default = component.exports
        },
        557: function(t, e, n) {
            "use strict";
            n(505)
        },
        558: function(t, e, n) {
            var o = n(35),
                r = n(286),
                l = n(559),
                c = o(!1),
                d = r(l);
            c.push([t.i, '.yt-video-overlay:before{content:"";background:rgba(0,0,0,.5) url(' + d + ") no-repeat 50%;position:absolute;top:0;left:0;height:100%;width:100%;background-size:60px;border-radius:8px}@media(max-width:960px){.yt-video-overlay:before{background-size:50px}}", ""]), t.exports = c
        },
        559: function(t, e) {
            t.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTEwIDBDNC40NzcgMCAwIDQuNDc3IDAgMTBzNC40NzcgMTAgMTAgMTAgMTAtNC40NzcgMTAtMTBTMTUuNTIzIDAgMTAgMHpNOCAxNFY2bDYgNC02IDR6Ii8+PC9zdmc+"
        },
        596: function(t, e, n) {
            "use strict";
            n.r(e);
            n(433), n(22);
            var o = n(8),
                r = n(9),
                l = n(11),
                c = n(12),
                d = n(2),
                f = n(4),
                m = (n(18), n(10), n(37), n(186), n(0)),
                h = n(413),
                y = n(411),
                v = n(674),
                w = n(675),
                _ = n(412),
                x = n(523),
                C = (n(430), n(431), n(432), [{
                    title: "Play Live Fantasy & Win Upto 8X",
                    subTitle: "",
                    link: "https://www.youtube.com/channel/UCiSQ8GntIXKG35sAoMetBCQ"
                }, {
                    title: "Play 2nd Innings & Win Upto 2X",
                    subTitle: "",
                    link: "https://www.youtube.com/channel/UCiSQ8GntIXKG35sAoMetBCQ"
                }, {
                    title: "No Cricket? Play Rummy & Win More ",
                    subTitle: "",
                    link: "https://www.youtube.com/channel/UCiSQ8GntIXKG35sAoMetBCQ"
                }, {
                    title: "Play Rummy & Keep Winning",
                    subTitle: "",
                    link: "https://www.youtube.com/channel/UCiSQ8GntIXKG35sAoMetBCQ"
                }]);

            function k(t) {
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
                    var n, o = Object(d.a)(t);
                    if (e) {
                        var r = Object(d.a)(this).constructor;
                        n = Reflect.construct(o, arguments, r)
                    } else n = o.apply(this, arguments);
                    return Object(c.a)(this, n)
                }
            }
            var O = function(t, e, n, desc) {
                var o, r = arguments.length,
                    l = r < 3 ? e : null === desc ? desc = Object.getOwnPropertyDescriptor(e, n) : desc;
                if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(f.a)(Reflect)) && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, e, n, desc);
                else
                    for (var i = t.length - 1; i >= 0; i--)(o = t[i]) && (l = (r < 3 ? o(l) : r > 3 ? o(e, n, l) : o(e, n)) || l);
                return r > 3 && l && Object.defineProperty(e, n, l), l
            };
            h.a.use([y.a, v.a, w.a, _.a]);
            var j = function(t) {
                    Object(l.a)(n, t);
                    var e = k(n);

                    function n() {
                        var t;
                        return Object(o.a)(this, n), (t = e.apply(this, arguments)).TVCommercialsList = C, t.showIframe = !1, t
                    }
                    return Object(r.a)(n, [{
                        key: "openDialog",
                        value: function() {
                            this.$emit("showDialog")
                        }
                    }, {
                        key: "toggleShow",
                        value: function() {
                            this.showIframe = !this.showIframe
                        }
                    }, {
                        key: "getYoutubeThumbnail",
                        value: function(t, e) {
                            var n, o;
                            if (t && (((o = t.match(/youtube\.com.*(\?v=|\/embed\/)(.{11})/)) || (o = t.match(/youtu.be\/(.{11})/))) && (n = o.pop()), n)) {
                                void 0 === e && (e = "high");
                                var r = "maxresdefault";
                                return "low" === e ? r = "sddefault" : "medium" === e ? r = "mqdefault" : "high" === e && (r = "hqdefault"), "https://img.youtube.com/vi/" + n + "/" + r + ".jpg"
                            }
                            return !1
                        }
                    }]), n
                }(m.d),
                z = j = O([Object(m.a)({
                    components: {
                        AppTabs: x.
                            default
                    }
                })], j),
                R = (n(557), n(5)),
                component = Object(R.a)(z, (function() {
                    var t = this,
                        e = t._self._c;
                    t._self._setupProxy;
                    return '';
                }), [], !1, null, null, null);
            e.
                default = component.exports
        },
        705: function(t, e, n) {
            "use strict";
            n.r(e);
            var o = n(8),
                r = n(9),
                l = n(11),
                c = n(12),
                d = n(2),
                f = n(4),
                m = (n(18), n(10), n(22), n(0)),
                h = n(520),
                y = n(521),
                v = n(510),
                w = n(511),
                _ = n(512),
                x = n(522),
                C = n(513),
                k = n(515),
                O = n(596),
                j = n(516),
                z = n(455),
                R = n(74),
                P = n(56),
                T = n(420),
                D = n(543);

            function A(t) {
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
                    var n, o = Object(d.a)(t);
                    if (e) {
                        var r = Object(d.a)(this).constructor;
                        n = Reflect.construct(o, arguments, r)
                    } else n = o.apply(this, arguments);
                    return Object(c.a)(this, n)
                }
            }
            var G = function(t, e, n, desc) {
                    var o, r = arguments.length,
                        l = r < 3 ? e : null === desc ? desc = Object.getOwnPropertyDescriptor(e, n) : desc;
                    if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(f.a)(Reflect)) && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, e, n, desc);
                    else
                        for (var i = t.length - 1; i >= 0; i--)(o = t[i]) && (l = (r < 3 ? o(l) : r > 3 ? o(e, n, l) : o(e, n)) || l);
                    return r > 3 && l && Object.defineProperty(e, n, l), l
                }, I = function(t) {
                    Object(l.a)(n, t);
                    var e = A(n);

                    function n() {
                        var t;
                        return Object(o.a)(this, n), (t = e.apply(this, arguments)).dialogToggle = !1, t.TestimonialList = D.a, t.bannerData = {
                            title: "Play 25+ Games <br/> Win Upto ₹5 Crores Daily",
                            description: "Play on India’s Best Gaming App",
                            picture: "/img/gamezy-banner-home.png"
                        }, t.faqList = [], t
                    }
                    return Object(r.a)(n, [{
                        key: "mounted",
                        value: function() {
                            var t = this;
                            this.$nextTick((function() {
                                t.$imgObserver(), t.$videoObserver()
                            }))
                        }
                    }, {
                        key: "beforeDestroy",
                        value: function() {
                            this.$destroyImgObserver(), this.$destroyVideoObserver()
                        }
                    }, {
                        key: "openDialog",
                        value: function() {
                            this.dialogToggle = !0
                        }
                    }]), n
                }(m.d),
                M = I = G([Object(m.a)({
                    components: {
                        AppDialogWeb: P.
                            default,
                        PlayGame: R.
                            default,
                        DownloadGamezy: j.
                            default,
                        TvCommercials: O.
                            default,
                        ClientTestimonials: k.
                            default,
                        AppHeroBanner: h.
                            default,
                        AppPayment: y.
                            default,
                        AppFantasyPlatform: v.
                            default,
                        AppTopGames: w.
                            default,
                        AppBestGaming: _.
                            default,
                        AppEarnGamezy: x.
                            default,
                        AppReadMore: C.
                            default,
                        AppTopFaq: z.
                            default
                    },
                    head: function() {
                        return Object(T.a)("/")
                    }
                })], I),
                S = n(5),
                component = Object(S.a)(M, (function() {
                    var t = this,
                        e = t._self._c;
                    t._self._setupProxy;
                    return e("main", {
                        attrs: {
                            id: "main"
                        }
                    }, [e("app-hero-banner", {
                        attrs: {
                            "heading-type": "div",
                            "banner-data": t.bannerData
                        }
                    }), t._v(" "), e("app-payment"), t._v(" "), e("app-fantasy-platform"), t._v(" "), e("app-top-games", {
                        on: {
                            showDialog: t.openDialog
                        }
                    }), t._v(" "), e("app-best-gaming", {
                        on: {
                            showDialog: t.openDialog
                        }
                    }), t._v(" "), e("app-earn-gamezy"), t._v(" "), e("tv-commercials", {
                        on: {
                            showDialog: t.openDialog
                        }
                    }), t._v(" "), e("client-testimonials", {
                        attrs: {
                            "testimonial-list": t.TestimonialList
                        }
                    }), t._v(" "), e("download-gamezy"), t._v(" "), e("app-top-faq", {
                        attrs: {
                            "faq-list": t.faqList
                        }
                    }), t._v(" "), e("app-read-more", {
                        attrs: {
                            "show-read-more": !0
                        }
                    }), t._v(" "), e("portal", {
                        attrs: {
                            to: "play-game"
                        }
                    }, [e("app-dialog-web", {
                        staticClass: "dialog--bottom-sheet dialog--download-app md:d-none",
                        attrs: {
                            "bg-color": {
                                "bg-white": !0
                            },
                            "portal-height": {
                                "height-332": !0,
                                "height-578": !1
                            },
                            "close-on-button-click": !1,
                            show: t.dialogToggle
                        },
                        on: {
                            "update:show": function(e) {
                                t.dialogToggle = e
                            }
                        },
                        scopedSlots: t._u([{
                            key: "surface",
                            fn: function() {
                                return [e("play-game")]
                            },
                            proxy: !0
                        }])
                    })], 1)], 1)
                }), [], !1, null, null, null);
            e.
                default = component.exports;
            installComponents(component, {
                AppTopFaq: n(455).
                    default
            })
        }
    }
]);