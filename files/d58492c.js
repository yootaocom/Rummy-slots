(window.webpackJsonp = window.webpackJsonp || []).push([[13], Array(56).concat([function(t, e, o) {
    "use strict";
    o.r(e);
    var n = o(8),
        r = o(9),
        l = o(11),
        d = o(12),
        c = o(2),
        m = o(4),
        f = (o(18), o(10), o(22), o(0)),
        h = o(143),
        x = o(100);
    function v(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return ! 1;
            if (Reflect.construct.sham) return ! 1;
            if ("function" == typeof Proxy) return ! 0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))),
                    !0
            } catch(t) {
                return ! 1
            }
        } ();
        return function() {
            var o, n = Object(c.a)(t);
            if (e) {
                var r = Object(c.a)(this).constructor;
                o = Reflect.construct(n, arguments, r)
            } else o = n.apply(this, arguments);
            return Object(d.a)(this, o)
        }
    }
    var w = function(t, e, o, desc) {
            var n, r = arguments.length,
                l = r < 3 ? e: null === desc ? desc = Object.getOwnPropertyDescriptor(e, o) : desc;
            if ("object" === ("undefined" == typeof Reflect ? "undefined": Object(m.a)(Reflect)) && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, e, o, desc);
            else for (var i = t.length - 1; i >= 0; i--)(n = t[i]) && (l = (r < 3 ? n(l) : r > 3 ? n(e, o, l) : n(e, o)) || l);
            return r > 3 && l && Object.defineProperty(e, o, l),
                l
        },
        y = "data-dialog-action",
        _ = "dialog:closed",
        k = "close",
        A = "dialog:closing",
        C = "dialog:opened",
        O = "dialog:opening",
        j = "dialog:action",
        P = '[data-dialog="scrim"]',
        D = '[data-dialog="surface"]',
        R = "dialog-scroll-lock",
        z = function(t) {
            Object(l.a)(o, t);
            var e = v(o);
            function o() {
                var t;
                return Object(n.a)(this, o),
                    (t = e.apply(this, arguments)).shown = !1,
                    t.previousFocus = null,
                    t.animating = !1,
                    t.bottomSheetHeight = 0,
                    t.startTime = 0,
                    t.endTime = 0,
                    t.xDown = 0,
                    t.startY = 0,
                    t.currentY = 0,
                    t.touchingBSheet = !1,
                    t.focusTrap = null,
                    t.action = null,
                    t.dialogReady = !1,
                    t
            }
            return Object(r.a)(o, [{
                key: "rootClasses",
                get: function() {
                    return [{
                        "dialog--open": this.shown,
                        "dialog--animating": this.animating
                    }]
                }
            },
                {
                    key: "beforeDestroy",
                    value: function() {
                        this.removeBodyClass(R),
                            this.removeBodyClass("body-dialog-opening"),
                            this.removeBodyClass("body-dialog-closing"),
                            document.removeEventListener("keydown", this.handleDocumentKeydown_)
                    }
                },
                {
                    key: "mounted",
                    value: function() {
                        var t = this;
                        this.$nextTick((function() {
                            t.dialogReady = !0,
                                document.addEventListener("keydown", t.handleDocumentKeydown_.bind(t))
                        }))
                    }
                },
                {
                    key: "open",
                    value: function() {
                        this.$emit("update:show", !0)
                    }
                },
                {
                    key: "close",
                    value: function(t) {
                        this.action = t,
                            this.$emit("update:show", !1)
                    }
                },
                {
                    key: "saveFocus",
                    value: function() {
                        document && document.activeElement ? this.previousFocus = document.activeElement: this.previousFocus = null
                    }
                },
                {
                    key: "focusSurface",
                    value: function() {
                        this.$el.focus()
                    }
                },
                {
                    key: "restoreFocus",
                    value: function() {
                        var t = this.previousFocus;
                        t && t.focus && document.contains(document.activeElement) && t.focus()
                    }
                },
                {
                    key: "enter",
                    value: function(t, e) {
                        this.saveFocus(),
                            this.notifyOpening(null),
                            t.querySelector(P).addEventListener("transitionend", (function() {
                                var body = document.querySelector("body");
                                body && body.classList.add(R),
                                    e()
                            }))
                    }
                },
                {
                    key: "afterEnter",
                    value: function() {
                        var t = this;
                        this.shown = !0;
                        var body = document.querySelector("body");
                        body && body.classList.remove("body-dialog-opening"),
                            this.notifyOpened(this.action),
                            this.$nextTick((function() {
                                t.setFocusTrap(),
                                    t.trapFocus()
                            }))
                    }
                },
                {
                    key: "beforeLeave",
                    value: function() {
                        var t = document.querySelector("body");
                        t && t.classList.add("body-dialog-closing")
                    }
                },
                {
                    key: "leave",
                    value: function(t, e) {
                        this.notifyClosing(this.action),
                            t.querySelector(P).addEventListener("transitionend", (function() {
                                var t = document.querySelector("body");
                                t && t.classList.remove(R),
                                    e()
                            }))
                    }
                },
                {
                    key: "afterLeave",
                    value: function() {
                        var body = document.querySelector("body");
                        body && body.classList.remove("body-dialog-closing"),
                            this.releaseFocus(),
                            this.restoreFocus(),
                            this.notifyClosed(this.action),
                            this.shown = !1
                    }
                },
                {
                    key: "trapFocus",
                    value: function() {
                        try {
                            this.focusTrap && this.focusTrap.activate()
                        } catch(t) {
                            console.log(t)
                        }
                    }
                },
                {
                    key: "releaseFocus",
                    value: function() {
                        this.focusTrap && this.focusTrap.deactivate()
                    }
                },
                {
                    key: "setFocusTrap",
                    value: function() {
                        this.focusTrap = Object(h.a)(this.$el.querySelector(D), {
                            clickOutsideDeactivates: !0,
                            escapeDeactivates: !1,
                            returnFocusOnDeactivate: !1
                        })
                    }
                },
                {
                    key: "notifyAction",
                    value: function(t) {
                        this.$emit(j, t ? {
                            action: t
                        }: {})
                    }
                },
                {
                    key: "notifyOpening",
                    value: function(t) {
                        this.$emit(O, t ? {
                            action: t
                        }: {})
                    }
                },
                {
                    key: "notifyOpened",
                    value: function(t) {
                        this.$emit(C, t ? {
                            action: t
                        }: {})
                    }
                },
                {
                    key: "notifyClosing",
                    value: function(t) {
                        this.$emit(A, t ? {
                            action: t
                        }: {})
                    }
                },
                {
                    key: "notifyClosed",
                    value: function(t) {
                        this.$emit(_, t ? {
                            action: t
                        }: {})
                    }
                },
                {
                    key: "getActionFromEvent",
                    value: function(t) {
                        if (!t.target) return "";
                        var element = Object(x.a)(t.target, "[".concat(y, "]"));
                        return element && element.getAttribute(y)
                    }
                },
                {
                    key: "eventTargetMatches",
                    value: function(t, e) {
                        return !! t && Object(x.b)(t, e)
                    }
                },
                {
                    key: "handleInteraction",
                    value: function(t) {
                        var e = "click" === t.type,
                            o = "Enter" === t.key || 13 === t.keyCode,
                            n = "Space" === t.key || 32 === t.keyCode,
                            r = this.eventTargetMatches(t.target, P);
                        if (e && r && "" !== this.scrimClickAction) this.close(null);
                        else if (e || n || o) {
                            var l = this.getActionFromEvent(t);
                            l && (this.closeOnButtonClick ? this.close(l) : this.notifyAction(l))
                        }
                    }
                },
                {
                    key: "handleDocumentKeydown_",
                    value: function(t) { ("Escape" === t.key || 27 === t.keyCode) && "" !== this.escapeKeyAction && this.close(this.escapeKeyAction)
                    }
                },
                {
                    key: "removeBodyClass",
                    value: function(t) {
                        var body = document.querySelector("body");
                        body && body.classList.remove(t)
                    }
                }]),
                o
        } (f.d);
    w([Object(f.c)({
        type: Boolean,
        default:
            !1
    })], z.prototype, "show", void 0),
        w([Object(f.c)({
            type: Boolean,
            default:
                !1
        })], z.prototype, "enableScrim", void 0),
        w([Object(f.c)({
            type: Boolean,
            default:
                !1
        })], z.prototype, "closeOnButtonClick", void 0),
        w([Object(f.c)({
            type: Boolean,
            default:
                !1
        })], z.prototype, "closeOnScrimClick", void 0),
        w([Object(f.c)({
            type: String,
            default:
            k
        })], z.prototype, "scrimClickAction", void 0),
        w([Object(f.c)({
            type: String,
            default:
            k
        })], z.prototype, "escapeKeyAction", void 0),
        w([Object(f.c)({
            type: Object,
            default:
                !1
        })], z.prototype, "portalHeight", void 0),
        w([Object(f.c)({
            type: Object,
            default:
                !1
        })], z.prototype, "bgColor", void 0);
    var S = z = w([Object(f.a)({
            components: {}
        })], z),
        B = (o(367), o(5)),
        component = Object(B.a)(S, (function() {
            var t = this,
                e = t._self._c;
            t._self._setupProxy;
            return e("transition", {
                    attrs: {
                        "leave-active-class": "dialog--closing",
                        "enter-active-class": "dialog--opening",
                        "enter-to-class": "dialog--open",
                        "leave-class": "dialog--open"
                    },
                    on: {
                        enter: t.enter,
                        leave: t.leave,
                        "after-enter": t.afterEnter,
                        "after-leave": t.afterLeave,
                        "before-leave": t.beforeLeave
                    }
                },
                [t.show && t.dialogReady ? e("aside", {
                        staticClass: "dialog position-fixed h-full top-0 left-0 align-items-end justify-content-center",
                        class: [t.rootClasses],
                        on: {
                            click: t.handleInteraction,
                            keydown: t.handleInteraction
                        }
                    },
                    [e("div", {
                        staticClass: "dialog__scrim position-fixed top-0 left-0 w-full h-full",
                        attrs: {
                            "data-dialog": "scrim"
                        }
                    }), t._v(" "), e("div", {
                            staticClass: "dialog__container d-flex flex-row",
                            class: t.portalHeight,
                            attrs: {
                                "data-dialog": "container"
                            }
                        },
                        [e("div", {
                                staticClass: "dialog__surface d-flex flex-col flex-shrink-0 flex-grow-0",
                                class: t.bgColor,
                                attrs: {
                                    "data-dialog": "surface"
                                }
                            },
                            [t._t("surface")], 2)])]) : t._e()])
        }), [], !1, null, "0089bcb8", null);
    e.
        default = component.exports
},
    function(t, e, o) {
        "use strict";
        o.r(e);
        o(30),
            o(61);
        var n = o(8),
            r = o(9),
            l = o(11),
            d = o(12),
            c = o(2),
            m = o(4),
            f = (o(18), o(10), o(22), o(0)),
            h = o(413),
            x = [{
                step: 1,
                description: "<p class='md:mt-16 mt-0 font-12 md:font-16 line-height-20 md:line-height-24 text-secondary text-left md:text-center'>Open the link which you have received on phone. Click <strong class='font-600'>'OK'</strong> to download the apk</p>",
                image: "app-step-1.png",
                mobileImage: "mapp-step-1.png"
            },
                {
                    step: 2,
                    description: "<p class='md:mt-16 mt-0 font-12 md:font-16 line-height-20 md:line-height-24 text-secondary text-left md:text-center'>Click <strong class='font-600'>‘Open’</strong> on the downloaded app & click on <strong class='font-600'>‘Settings’</strong></p>",
                    image: "app-step-2.png",
                    mobileImage: "mapp-step-2.png",
                    mobileImage2: "mapp-step-3.png"
                },
                {
                    step: 3,
                    description: "<p class='md:mt-16 mt-0 font-12 md:font-16 line-height-20 md:line-height-24 text-secondary text-left md:text-center'>Open the link which you have received on phone. Click <strong class='font-600'>'OK'</strong> to download the apk</p>",
                    image: "app-step-3.png",
                    mobileImage: "mapp-step-3.png"
                },
                {
                    step: 4,
                    description: "<p class='md:mt-16 mt-0 font-12 md:font-16 line-height-20 md:line-height-24 text-secondary text-left md:text-center'>Open the link which you have received on phone. Click <strong class='font-600'>'OK'</strong> to download the apk</p>",
                    image: "app-step-1.png",
                    mobileImage: "mapp-step-4.png"
                }];
        function v(t) {
            var e = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return ! 1;
                if (Reflect.construct.sham) return ! 1;
                if ("function" == typeof Proxy) return ! 0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))),
                        !0
                } catch(t) {
                    return ! 1
                }
            } ();
            return function() {
                var o, n = Object(c.a)(t);
                if (e) {
                    var r = Object(c.a)(this).constructor;
                    o = Reflect.construct(n, arguments, r)
                } else o = n.apply(this, arguments);
                return Object(d.a)(this, o)
            }
        }
        var w = function(t, e, o, desc) {
                var n, r = arguments.length,
                    l = r < 3 ? e: null === desc ? desc = Object.getOwnPropertyDescriptor(e, o) : desc;
                if ("object" === ("undefined" == typeof Reflect ? "undefined": Object(m.a)(Reflect)) && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, e, o, desc);
                else for (var i = t.length - 1; i >= 0; i--)(n = t[i]) && (l = (r < 3 ? n(l) : r > 3 ? n(e, o, l) : n(e, o)) || l);
                return r > 3 && l && Object.defineProperty(e, o, l),
                    l
            },
            y = function(t) {
                Object(l.a)(o, t);
                var e = v(o);
                function o() {
                    var t;
                    return Object(n.a)(this, o),
                        (t = e.apply(this, arguments)).AppStepsList = x,
                        t
                }
                return Object(r.a)(o, [{
                    key: "mounted",
                    value: function() {
                        new h.a("#app-steps", {
                            slidesPerView: 3,
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
                                delay: 5e5,
                                disableOnInteraction: !1
                            }
                        })
                    }
                }]),
                    o
            } (f.d),
            _ = y = w([Object(f.a)({
                components: {}
            })], y),
            k = (o(369), o(5)),
            component = Object(k.a)(_, (function() {
                var t = this,
                    e = t._self._c;
                t._self._setupProxy;
                return e("div", {
                        staticClass: "container container--box p-0"
                    },
                    [e("section", {
                            staticClass: "download-dialog"
                        },
                        [e("h2", {
                                staticClass: "font-40 font-medium mb-0 text-center"
                            },
                            [t._v("Download App Link has been sent!")]), t._v(" "), e("div", {
                                staticClass: "bg-white mt-32 position-relative p-32 border-radius-16"
                            },
                            [e("p", {
                                    staticClass: "text-secondary font-20"
                                },
                                [t._v("Follow the below steps to install app:")]), t._v(" "), e("div", {
                                    staticClass: "col col--12 app-steps p-0 border-radius-8 mt-16"
                                },
                                [e("div", {
                                        staticClass: "swiper-container overflow-y-visible",
                                        attrs: {
                                            "data-aos": "animation-translate-y",
                                            "data-aos-delay": "300",
                                            id: "app-steps"
                                        }
                                    },
                                    [e("div", {
                                            staticClass: "swiper-wrapper pb-0 position-relative"
                                        },
                                        t._l(t.AppStepsList, (function(o, n) {
                                            return e("div", {
                                                    key: n,
                                                    staticClass: "swiper-slide"
                                                },
                                                [e("div", {
                                                        staticClass: "d-flex flex-col align-items-center justify-content-center border-1 border-solid border-light border-radius-12 pt-16 pb-24 pl-20 pr-20"
                                                    },
                                                    [e("div", {
                                                            staticClass: "position-absolute top-0 left-0 bg-dark font-16 border-radius-8 h-32 w-32 d-flex justify-content-center align-items-center text-white"
                                                        },
                                                        [t._v(t._s(o.step))]), t._v(" "), e("img", {
                                                        attrs: {
                                                            src: "/img/".concat(o.image),
                                                            alt: "step 1",
                                                            height: "139",
                                                            width: "275"
                                                        }
                                                    }), t._v(" "), e("div", {
                                                        domProps: {
                                                            innerHTML: t._s(o.description)
                                                        }
                                                    })])])
                                        })), 0), t._v(" "), t._m(0)])])]), t._v(" "), t._m(1)])])
            }), [function() {
                var t = this,
                    e = t._self._c;
                t._self._setupProxy;
                return e("div", {
                        staticClass: "justify-content-center align-items-center swiper-pagination-button"
                    },
                    [e("div", {
                            staticClass: "swiper-pagination-prev"
                        },
                        [e("div", {
                                staticClass: "swiper-pagination-prev swiper-button-disabled swiper-navigation mr-12"
                            },
                            [e("div", {
                                staticClass: "prev-button"
                            })])]), t._v(" "), e("div", {
                            staticClass: "swiper-pagination-next"
                        },
                        [e("div", {
                                staticClass: "swiper-pagination-next swiper-navigation"
                            },
                            [e("div", {
                                staticClass: "next-button"
                            })])])])
            },
                function() {
                    var t = this,
                        e = t._self._c;
                    t._self._setupProxy;
                    return e("p", {
                            staticClass: "mt-32 text-secondary text-center font-24 line-height-36"
                        },
                        [t._v("If you are facing any issues, kindly drop us an email at "), e("a", {
                                staticClass: "text-primary font-24 line-height-36",
                                attrs: {
                                    href: "mailto:support@gamezy.com"
                                }
                            },
                            [t._v("support@gamezy.com")])])
                }], !1, null, "3999daaf", null);
        e.
            default = component.exports
    },
    function(t, e, o) {
        "use strict";
        o.r(e);
        var n = o(8),
            r = o(9),
            l = o(11),
            d = o(12),
            c = o(2),
            m = o(4),
            f = (o(18), o(10), o(22), o(0)),
            h = o(281);
        function x(t) {
            var e = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return ! 1;
                if (Reflect.construct.sham) return ! 1;
                if ("function" == typeof Proxy) return ! 0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))),
                        !0
                } catch(t) {
                    return ! 1
                }
            } ();
            return function() {
                var o, n = Object(c.a)(t);
                if (e) {
                    var r = Object(c.a)(this).constructor;
                    o = Reflect.construct(n, arguments, r)
                } else o = n.apply(this, arguments);
                return Object(d.a)(this, o)
            }
        }
        var v = function(t, e, o, desc) {
                var n, r = arguments.length,
                    l = r < 3 ? e: null === desc ? desc = Object.getOwnPropertyDescriptor(e, o) : desc;
                if ("object" === ("undefined" == typeof Reflect ? "undefined": Object(m.a)(Reflect)) && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, e, o, desc);
                else for (var i = t.length - 1; i >= 0; i--)(n = t[i]) && (l = (r < 3 ? n(l) : r > 3 ? n(e, o, l) : n(e, o)) || l);
                return r > 3 && l && Object.defineProperty(e, o, l),
                    l
            },
            w = function(t) {
                Object(l.a)(o, t);
                var e = x(o);
                function o() {
                    var t;
                    return Object(n.a)(this, o),
                        (t = e.apply(this, arguments)).hover = !1,
                        t.animation = null,
                        t
                }
                return Object(r.a)(o, [{
                    key: "onAnimCreated",
                    value: function(t) {
                        this.animation = t
                    }
                },
                    {
                        key: "onMouseOver",
                        value: function() {
                            this.animation && this.animation.play()
                        }
                    },
                    {
                        key: "onMouseLeave",
                        value: function() {
                            this.animation && this.animation.stop()
                        }
                    },
                    {
                        key: "onMouseEnter",
                        value: function() {
                            console.log("enter")
                        }
                    }]),
                    o
            } (f.d);
        v([Object(f.c)({
            type: Object,
            required: !0
        })], w.prototype, "item", void 0);
        var y = w = v([Object(f.a)({
                components: {
                    lottie: h.a
                }
            })], w),
            _ = (o(363), o(5)),
            component = Object(_.a)(y, (function() {
                var t = this,
                    e = t._self._c;
                t._self._setupProxy;
                return e("div", {
                        on: {
                            mouseenter: t.onMouseEnter,
                            mouseover: t.onMouseOver,
                            mouseleave: t.onMouseLeave
                        }
                    },
                    [e("router-link", {
                            staticClass: "d-flex flex-col app-tab-card mr-32 transition-all duration-500 opacity-50",
                            attrs: {
                                exact: "",
                                "active-class": "app-tab-card--active",
                                to: t.item.to
                            }
                        },
                        [e("div", {
                            staticClass: "app-tab-card__line bg-white"
                        }), t._v(" "), e("div", {
                                staticClass: "app-tab-card__title mt-24 mb-32 text-left md:text-center md:font-20 font-600 font-14"
                            },
                            [t._v(t._s(t.item.title))]), t._v(" "), e("div", {
                                staticClass: "pointer-none app-tab-card__img border-radius-10 d-flex position-relative",
                                class: t.item.cardClass
                            },
                            [e("div", {
                                staticClass: "position-absolute pointer-none top-0 left-0 app-tab-card__bg w-full h-full transition-all duration-500"
                            }), t._v(" "), e("div", {
                                    staticClass: "position-absolute border-radius-10 overflow-hidden w-full h-full pointer-none"
                                },
                                [e("lottie", {
                                    staticClass: "w-full",
                                    attrs: {
                                        options: t.item.lottie
                                    },
                                    on: {
                                        animCreated: t.onAnimCreated
                                    }
                                })], 1)])])], 1)
            }), [], !1, null, null, null);
        e.
            default = component.exports
    },
    function(t, e, o) {
        "use strict";
        o.r(e);
        var n = o(8),
            r = o(9),
            l = o(11),
            d = o(12),
            c = o(2),
            m = o(4),
            f = (o(18), o(10), o(22), o(0)),
            h = o(143),
            x = o(100);
        function v(t) {
            var e = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return ! 1;
                if (Reflect.construct.sham) return ! 1;
                if ("function" == typeof Proxy) return ! 0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))),
                        !0
                } catch(t) {
                    return ! 1
                }
            } ();
            return function() {
                var o, n = Object(c.a)(t);
                if (e) {
                    var r = Object(c.a)(this).constructor;
                    o = Reflect.construct(n, arguments, r)
                } else o = n.apply(this, arguments);
                return Object(d.a)(this, o)
            }
        }
        var w = function(t, e, o, desc) {
                var n, r = arguments.length,
                    l = r < 3 ? e: null === desc ? desc = Object.getOwnPropertyDescriptor(e, o) : desc;
                if ("object" === ("undefined" == typeof Reflect ? "undefined": Object(m.a)(Reflect)) && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, e, o, desc);
                else for (var i = t.length - 1; i >= 0; i--)(n = t[i]) && (l = (r < 3 ? n(l) : r > 3 ? n(e, o, l) : n(e, o)) || l);
                return r > 3 && l && Object.defineProperty(e, o, l),
                    l
            },
            y = "data-dialog-action",
            _ = "dialog:closed",
            k = "close",
            A = "dialog:closing",
            C = "dialog:opened",
            O = "dialog:opening",
            j = "dialog:action",
            P = '[data-dialog="scrim"]',
            D = '[data-dialog="surface"]',
            R = "dialog-scroll-lock",
            z = function(t) {
                Object(l.a)(o, t);
                var e = v(o);
                function o() {
                    var t;
                    return Object(n.a)(this, o),
                        (t = e.apply(this, arguments)).shown = !1,
                        t.previousFocus = null,
                        t.animating = !1,
                        t.bottomSheetHeight = 0,
                        t.startTime = 0,
                        t.endTime = 0,
                        t.xDown = 0,
                        t.startY = 0,
                        t.currentY = 0,
                        t.touchingBSheet = !1,
                        t.focusTrap = null,
                        t.action = null,
                        t.dialogReady = !1,
                        t
                }
                return Object(r.a)(o, [{
                    key: "rootClasses",
                    get: function() {
                        return [{
                            "dialog--open": this.shown,
                            "dialog--animating": this.animating
                        }]
                    }
                },
                    {
                        key: "beforeDestroy",
                        value: function() {
                            this.removeBodyClass(R),
                                this.removeBodyClass("body-dialog-opening"),
                                this.removeBodyClass("body-dialog-closing"),
                                document.removeEventListener("keydown", this.handleDocumentKeydown_)
                        }
                    },
                    {
                        key: "mounted",
                        value: function() {
                            var t = this;
                            this.$nextTick((function() {
                                t.dialogReady = !0,
                                    document.addEventListener("keydown", t.handleDocumentKeydown_.bind(t))
                            }))
                        }
                    },
                    {
                        key: "open",
                        value: function() {
                            this.$emit("update:show", !0)
                        }
                    },
                    {
                        key: "close",
                        value: function(t) {
                            this.action = t,
                                this.$emit("update:show", !1)
                        }
                    },
                    {
                        key: "saveFocus",
                        value: function() {
                            document && document.activeElement ? this.previousFocus = document.activeElement: this.previousFocus = null
                        }
                    },
                    {
                        key: "focusSurface",
                        value: function() {
                            this.$el.focus()
                        }
                    },
                    {
                        key: "restoreFocus",
                        value: function() {
                            var t = this.previousFocus;
                            t && t.focus && document.contains(document.activeElement) && t.focus()
                        }
                    },
                    {
                        key: "enter",
                        value: function(t, e) {
                            this.saveFocus(),
                                this.notifyOpening(null),
                                t.querySelector(P).addEventListener("transitionend", (function() {
                                    var body = document.querySelector("body");
                                    body && body.classList.add(R),
                                        e()
                                }))
                        }
                    },
                    {
                        key: "afterEnter",
                        value: function() {
                            var t = this;
                            this.shown = !0;
                            var body = document.querySelector("body");
                            body && body.classList.remove("body-dialog-opening"),
                                this.notifyOpened(this.action),
                                this.$nextTick((function() {
                                    t.setFocusTrap(),
                                        t.trapFocus()
                                }))
                        }
                    },
                    {
                        key: "beforeLeave",
                        value: function() {
                            var t = document.querySelector("body");
                            t && t.classList.add("body-dialog-closing")
                        }
                    },
                    {
                        key: "leave",
                        value: function(t, e) {
                            this.notifyClosing(this.action),
                                t.querySelector(P).addEventListener("transitionend", (function() {
                                    var t = document.querySelector("body");
                                    t && t.classList.remove(R),
                                        e()
                                }))
                        }
                    },
                    {
                        key: "afterLeave",
                        value: function() {
                            var body = document.querySelector("body");
                            body && body.classList.remove("body-dialog-closing"),
                                this.releaseFocus(),
                                this.restoreFocus(),
                                this.notifyClosed(this.action),
                                this.shown = !1
                        }
                    },
                    {
                        key: "trapFocus",
                        value: function() {
                            try {
                                this.focusTrap && this.focusTrap.activate()
                            } catch(t) {
                                console.log(t)
                            }
                        }
                    },
                    {
                        key: "releaseFocus",
                        value: function() {
                            this.focusTrap && this.focusTrap.deactivate()
                        }
                    },
                    {
                        key: "setFocusTrap",
                        value: function() {
                            this.focusTrap = Object(h.a)(this.$el.querySelector(D), {
                                clickOutsideDeactivates: !0,
                                escapeDeactivates: !1,
                                returnFocusOnDeactivate: !1
                            })
                        }
                    },
                    {
                        key: "notifyAction",
                        value: function(t) {
                            this.$emit(j, t ? {
                                action: t
                            }: {})
                        }
                    },
                    {
                        key: "notifyOpening",
                        value: function(t) {
                            this.$emit(O, t ? {
                                action: t
                            }: {})
                        }
                    },
                    {
                        key: "notifyOpened",
                        value: function(t) {
                            this.$emit(C, t ? {
                                action: t
                            }: {})
                        }
                    },
                    {
                        key: "notifyClosing",
                        value: function(t) {
                            this.$emit(A, t ? {
                                action: t
                            }: {})
                        }
                    },
                    {
                        key: "notifyClosed",
                        value: function(t) {
                            this.$emit(_, t ? {
                                action: t
                            }: {})
                        }
                    },
                    {
                        key: "getActionFromEvent",
                        value: function(t) {
                            if (!t.target) return "";
                            var element = Object(x.a)(t.target, "[".concat(y, "]"));
                            return element && element.getAttribute(y)
                        }
                    },
                    {
                        key: "eventTargetMatches",
                        value: function(t, e) {
                            return !! t && Object(x.b)(t, e)
                        }
                    },
                    {
                        key: "handleInteraction",
                        value: function(t) {
                            var e = "click" === t.type,
                                o = "Enter" === t.key || 13 === t.keyCode,
                                n = "Space" === t.key || 32 === t.keyCode,
                                r = this.eventTargetMatches(t.target, P);
                            if (e && r && "" !== this.scrimClickAction) this.close(null);
                            else if (e || n || o) {
                                var l = this.getActionFromEvent(t);
                                l && (this.closeOnButtonClick ? this.close(l) : this.notifyAction(l))
                            }
                        }
                    },
                    {
                        key: "handleDocumentKeydown_",
                        value: function(t) { ("Escape" === t.key || 27 === t.keyCode) && "" !== this.escapeKeyAction && this.close(this.escapeKeyAction)
                        }
                    },
                    {
                        key: "removeBodyClass",
                        value: function(t) {
                            var body = document.querySelector("body");
                            body && body.classList.remove(t)
                        }
                    }]),
                    o
            } (f.d);
        w([Object(f.c)({
            type: Boolean,
            default:
                !1
        })], z.prototype, "show", void 0),
            w([Object(f.c)({
                type: Boolean,
                default:
                    !1
            })], z.prototype, "enableScrim", void 0),
            w([Object(f.c)({
                type: Boolean,
                default:
                    !1
            })], z.prototype, "closeOnButtonClick", void 0),
            w([Object(f.c)({
                type: Boolean,
                default:
                    !1
            })], z.prototype, "closeOnScrimClick", void 0),
            w([Object(f.c)({
                type: String,
                default:
                k
            })], z.prototype, "scrimClickAction", void 0),
            w([Object(f.c)({
                type: String,
                default:
                k
            })], z.prototype, "escapeKeyAction", void 0);
        var S = z = w([Object(f.a)({
                components: {}
            })], z),
            B = (o(371), o(5)),
            component = Object(B.a)(S, (function() {
                var t = this,
                    e = t._self._c;
                t._self._setupProxy;
                return e("transition", {
                        attrs: {
                            "leave-active-class": "dialog--closing",
                            "enter-active-class": "dialog--opening",
                            "enter-to-class": "dialog--open",
                            "leave-class": "dialog--open"
                        },
                        on: {
                            enter: t.enter,
                            leave: t.leave,
                            "after-enter": t.afterEnter,
                            "after-leave": t.afterLeave,
                            "before-leave": t.beforeLeave
                        }
                    },
                    [t.show && t.dialogReady ? e("aside", {
                            staticClass: "dialog position-fixed h-full top-0 left-0 align-items-center justify-content-center",
                            class: [t.rootClasses],
                            on: {
                                click: t.handleInteraction,
                                keydown: t.handleInteraction
                            }
                        },
                        [e("div", {
                            staticClass: "dialog__scrim position-fixed top-0 left-0 w-full h-full",
                            attrs: {
                                "data-dialog": "scrim"
                            }
                        }), t._v(" "), e("div", {
                                staticClass: "dialog__container d-flex flex-row p-0",
                                attrs: {
                                    "data-dialog": "container"
                                }
                            },
                            [e("div", {
                                    staticClass: "dialog__surface d-flex flex-col flex-shrink-0 flex-grow-0",
                                    attrs: {
                                        "data-dialog": "surface"
                                    }
                                },
                                [t._t("surface")], 2)])]) : t._e()])
            }), [], !1, null, null, null);
        e.
            default = component.exports
    },
    function(t, e, o) {
        "use strict";
        o.r(e);
        var n = o(8),
            r = o(9),
            l = o(11),
            d = o(12),
            c = o(2),
            m = o(4),
            f = (o(18), o(10), o(22), o(0));
        function h(t) {
            var e = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return ! 1;
                if (Reflect.construct.sham) return ! 1;
                if ("function" == typeof Proxy) return ! 0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))),
                        !0
                } catch(t) {
                    return ! 1
                }
            } ();
            return function() {
                var o, n = Object(c.a)(t);
                if (e) {
                    var r = Object(c.a)(this).constructor;
                    o = Reflect.construct(n, arguments, r)
                } else o = n.apply(this, arguments);
                return Object(d.a)(this, o)
            }
        }
        var x = function(t, e, o, desc) {
                var n, r = arguments.length,
                    l = r < 3 ? e: null === desc ? desc = Object.getOwnPropertyDescriptor(e, o) : desc;
                if ("object" === ("undefined" == typeof Reflect ? "undefined": Object(m.a)(Reflect)) && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, e, o, desc);
                else for (var i = t.length - 1; i >= 0; i--)(n = t[i]) && (l = (r < 3 ? n(l) : r > 3 ? n(e, o, l) : n(e, o)) || l);
                return r > 3 && l && Object.defineProperty(e, o, l),
                    l
            },
            v = function(t) {
                Object(l.a)(o, t);
                var e = h(o);
                function o() {
                    return Object(n.a)(this, o),
                        e.apply(this, arguments)
                }
                return Object(r.a)(o, [{
                    key: "onClosePopup",
                    value: function() {
                        this.$emit("closePopup", !0)
                    }
                },
                    {
                        key: "onRestartDownload",
                        value: function() {
                            this.$emit("restartDownload", !0)
                        }
                    }]),
                    o
            } (f.d),
            w = v = x([Object(f.a)({
                components: {}
            })], v),
            y = (o(373), o(5)),
            component = Object(y.a)(w, (function() {
                var t = this,
                    e = t._self._c;
                t._self._setupProxy;
                return e("div", {
                        staticClass: "d-flex flex-col"
                    },
                    [e("section", {
                            staticClass: "download-dialog"
                        },
                        [e("div", {
                                staticClass: "position-fixed top-0 left-0 w-full p-16 text-white d-flex justify-content-between align-items-center bg-primary z-index-10"
                            },
                            [e("h2", {
                                    staticClass: "font-16 line-height-22 mb-0 font-500"
                                },
                                [t._v("How to Install")]), t._v(" "), e("a", {
                                    staticClass: "close-button",
                                    attrs: {
                                        href: "#"
                                    },
                                    on: {
                                        click: function(e) {
                                            return e.preventDefault(),
                                                t.onClosePopup.apply(null, arguments)
                                        }
                                    }
                                },
                                [e("img", {
                                    attrs: {
                                        src: "/img/close.png",
                                        alt: "close button",
                                        height: "24",
                                        width: "24"
                                    }
                                })])]), t._v(" "), t._m(0), t._v(" "), e("div", {
                                staticClass: "bg-secondary position-fixed bottom-0 left-0 w-full d-flex justify-content-center align-items-center p-12"
                            },
                            [e("p", {
                                    staticClass: "font-10 line-height-16 text-white"
                                },
                                [t._v("Download didn’t work?")]), t._v(" "), e("button", {
                                    staticClass: "ml-20 border-1 border-solid border-light text-white font-12 bg-transparent p-8 border-radius-4",
                                    on: {
                                        click: t.onRestartDownload
                                    }
                                },
                                [t._v("Restart Download")])])])])
            }), [function() {
                var t = this,
                    e = t._self._c;
                t._self._setupProxy;
                return e("div", {
                        staticClass: "pt-64 pb-64 mt-4 pl-16 pr-16 position-relative content-section"
                    },
                    [e("div", {
                            staticClass: "mb-10"
                        },
                        [e("h4", {
                                staticClass: "mb-0 font-10 mb-4"
                            },
                            [t._v("Step 1")]), t._v(" "), e("div", {
                                staticClass: "bg-white p-12 pr-24 border-radius-5 d-flex step-section align-items-center"
                            },
                            [e("div", {
                                    staticClass: "flex-shrink-0 mr-16"
                                },
                                [e("img", {
                                    attrs: {
                                        src: "/img/mapp-step-1.png",
                                        alt: "step 1",
                                        height: "52",
                                        width: "175"
                                    }
                                })]), t._v(" "), e("div", {},
                                [e("p", {
                                        staticClass: "font-12 line-height-16 text-secondary text-left"
                                    },
                                    [t._v("\n              Click "), e("strong", {
                                            staticClass: "font-600"
                                        },
                                        [t._v("'OK'")]), t._v(" to "), e("br"), t._v("\n              download the apk\n            ")])])])]), t._v(" "), e("div", {
                            staticClass: "mb-10"
                        },
                        [e("h4", {
                                staticClass: "mb-0 font-10 mb-4"
                            },
                            [t._v("Step 2")]), t._v(" "), e("div", {
                                staticClass: "bg-white p-12 pr-24 border-radius-5 d-flex step-section align-items-center"
                            },
                            [e("div", {
                                    staticClass: "flex-shrink-0 mr-16 d-flex flex-col"
                                },
                                [e("img", {
                                    staticClass: "mb-4",
                                    attrs: {
                                        src: "/img/mapp-step-2.png",
                                        alt: "step 2",
                                        height: "20",
                                        width: "175"
                                    }
                                }), t._v(" "), e("img", {
                                    attrs: {
                                        src: "/img/mapp-step-3.png",
                                        alt: "step 3",
                                        height: "80",
                                        width: "175"
                                    }
                                })]), t._v(" "), e("div", {},
                                [e("p", {
                                        staticClass: "font-12 line-height-16 text-secondary text-left"
                                    },
                                    [t._v("\n              Click "), e("strong", {
                                            staticClass: "font-600"
                                        },
                                        [t._v("'Open'")]), t._v(" on the "), e("br"), t._v("\n              downloaded app & click on "), e("strong", {
                                            staticClass: "font-600"
                                        },
                                        [t._v("‘Settings’")])])])])]), t._v(" "), e("div", {
                            staticClass: "mb-10"
                        },
                        [e("h4", {
                                staticClass: "mb-0 font-10 mb-4"
                            },
                            [t._v("Step 3")]), t._v(" "), e("div", {
                                staticClass: "bg-white p-12 pr-24 border-radius-5 d-flex step-section align-items-center"
                            },
                            [e("div", {
                                    staticClass: "flex-shrink-0 mr-16 d-flex flex-col"
                                },
                                [e("img", {
                                    staticClass: "mb-4",
                                    attrs: {
                                        src: "/img/mapp-step-4.png",
                                        alt: "step 4",
                                        height: "55",
                                        width: "175"
                                    }
                                })]), t._v(" "), e("div", {},
                                [e("p", {
                                        staticClass: "font-12 line-height-16 text-secondary text-left"
                                    },
                                    [t._v("Allow installation from unknown source")])])])]), t._v(" "), e("div", {
                            staticClass: "mb-0"
                        },
                        [e("h4", {
                                staticClass: "mb-0 font-10 mb-4"
                            },
                            [t._v("Step 4")]), t._v(" "), e("div", {
                                staticClass: "bg-white p-12 pr-24 border-radius-5 d-flex step-section align-items-center"
                            },
                            [e("div", {
                                    staticClass: "flex-shrink-0 mr-16 d-flex flex-col"
                                },
                                [e("img", {
                                    staticClass: "mb-4",
                                    attrs: {
                                        src: "/img/mapp-step-4.png",
                                        alt: "step 4",
                                        height: "62",
                                        width: "175"
                                    }
                                })]), t._v(" "), e("div", {},
                                [e("p", {
                                        staticClass: "font-12 line-height-16 text-secondary text-left"
                                    },
                                    [t._v("Click on "), e("strong", {
                                            staticClass: "font-600"
                                        },
                                        [t._v("‘Install’")]), t._v(" and start playing")])])])]), t._v(" "), e("p", {
                            staticClass: "mt-16 pl-8 pr-8 font-12 line-height-16 text-center text-secondary"
                        },
                        [t._v("For any download/installation issues, kindly drop us an email at "), e("a", {
                                staticClass: "text-primary",
                                attrs: {
                                    href: "mailto:support@gamezy.com"
                                }
                            },
                            [t._v("support@gamezy.com")])])])
            }], !1, null, null, null);
        e.
            default = component.exports
    },
    , , , , , , , , , , , , ,
    function(t, e, o) {
        "use strict";
        o.r(e);
        var n = o(8),
            r = o(9),
            l = o(11),
            d = o(12),
            c = o(2),
            m = o(4),
            f = (o(18), o(10), o(22), o(0)),
            h = o(118);
        function x(t) {
            var e = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return ! 1;
                if (Reflect.construct.sham) return ! 1;
                if ("function" == typeof Proxy) return ! 0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))),
                        !0
                } catch(t) {
                    return ! 1
                }
            } ();
            return function() {
                var o, n = Object(c.a)(t);
                if (e) {
                    var r = Object(c.a)(this).constructor;
                    o = Reflect.construct(n, arguments, r)
                } else o = n.apply(this, arguments);
                return Object(d.a)(this, o)
            }
        }
        var v = function(t, e, o, desc) {
                var n, r = arguments.length,
                    l = r < 3 ? e: null === desc ? desc = Object.getOwnPropertyDescriptor(e, o) : desc;
                if ("object" === ("undefined" == typeof Reflect ? "undefined": Object(m.a)(Reflect)) && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, e, o, desc);
                else for (var i = t.length - 1; i >= 0; i--)(n = t[i]) && (l = (r < 3 ? n(l) : r > 3 ? n(e, o, l) : n(e, o)) || l);
                return r > 3 && l && Object.defineProperty(e, o, l),
                    l
            },
            w = function(t) {
                Object(l.a)(o, t);
                var e = x(o);
                function o() {
                    return Object(n.a)(this, o),
                        e.apply(this, arguments)
                }
                return Object(r.a)(o, [{
                    key: "mounted",
                    value: function() {}
                }]),
                    o
            } (f.d),
            y = w = v([Object(f.a)({
                components: {
                    SendMobileLink: h.
                        default
                }
            })], w),
            _ = o(5),
            component = Object(_.a)(y, (function() {
                var t = this,
                    e = t._self._c;
                t._self._setupProxy;
                return e("div", {
                        staticClass: "container container--box p-0",
                        staticStyle: {
                            "max-width": "574px"
                        }
                    },
                    [e("section", {
                            staticClass: "download-dialog"
                        },
                        [e("h2", {
                                staticClass: "font-32 font-medium mb-20"
                            },
                            [t._v("Get app download link through SMS")]), t._v(" "), e("send-mobile-link", {
                            attrs: {
                                "button-style": {
                                    "h-48": !1,
                                    "h-60": !0,
                                    "border-radius-5": !0,
                                    "border-radius-12": !1
                                },
                                "input-style": "h-60 border-radius-5 border-1 border-solid border-light",
                                "root-class": {
                                    "h-48": !1,
                                    "h-60": !0,
                                    " h-54": !1,
                                    "border-radius-5": !0
                                }
                            }
                        }), t._v(" "), e("p", {
                                staticClass: "font-14 line-height-16 font-500 mt-16 text-blue"
                            },
                            [t._v("🔥 Get 125% Cash Bonus on 1st Add Cash up to ₹18,750 + ₹500 Extra Cash")]), t._v(" "), t._m(0)], 1)])
            }), [function() {
                var t = this,
                    e = t._self._c;
                t._self._setupProxy;
                return e("div", {
                        staticClass: "d-flex mt-40"
                    },
                    [e("div", {
                            staticClass: "logo mr-20"
                        },
                        [e("img", {
                            attrs: {
                                src: "/img/gamezy-logo.png",
                                alt: "gamezy logo",
                                height: "48",
                                width: "48"
                            }
                        })]), t._v(" "), e("div", {},
                        [e("h5", {
                                staticClass: "font-16 line-height-22 mb-4"
                            },
                            [t._v("Gamezy")]), t._v(" "), e("div", {
                                staticClass: "d-flex align-items-center"
                            },
                            [e("img", {
                                attrs: {
                                    height: "12",
                                    width: "12",
                                    alt: "rating",
                                    src: "/img/single-star.png"
                                }
                            }), t._v(" "), e("p", {
                                    staticClass: "ml-4 text-secondary font-14 line-height-20 mr-20"
                                },
                                [t._v("4.6 Rating")]), t._v(" "), e("p", {
                                    staticClass: "text-secondary font-14 line-height-20 mr-20"
                                },
                                [t._v("25M+ Downloads")])])])])
            }], !1, null, null, null);
        e.
            default = component.exports
    },
    ,
    function(t, e, o) {
        "use strict";
        var n = {
                props: ["error"],
                mounted: function() {
                    this.$imgObserver()
                },
                beforeDestroy: function() {
                    this.$destroyImgObserver()
                },
                methods: {
                    reload: function() {
                        location.reload()
                    }
                }
            },
            r = o(5),
            component = Object(r.a)(n, (function() {
                var t = this,
                    e = t._self._c;
                return e("section", {
                        staticClass: "pt-40 pb-40 md:pt-72 md:mt-24 md:pb-72 md:mb-24"
                    },
                    [e("div", {
                            staticClass: "container container--box pb-24 gutter-4 md:gutter-3"
                        },
                        [e("div", {
                                staticClass: "row position-relative justify-content-between align-items-center"
                            },
                            [e("div", {
                                    staticClass: "col col--12 md:col--6 order-2 md:order-none md:pt-0 pt-24"
                                },
                                [404 === t.error.statusCode ? e("h2", {
                                        staticClass: "font-headline3 md:font-headline1 font-medium mb-16",
                                        attrs: {
                                            "data-aos": "animation-scale-y"
                                        }
                                    },
                                    [t._v("Something went wrong")]) : t._e(), t._v(" "), 404 === t.error.statusCode ? e("h3", {
                                        staticClass: "text-theme-secondary font-medium font-headline4 md:font-headline3 md:mb-32 mb-24"
                                    },
                                    [e("span", {
                                            staticClass: "text-white"
                                        },
                                        [t._v("Error 404 : ")]), t._v("The page you are looking for does not exists. Let us take you back home")]) : e("h3", {
                                        staticClass: "text-theme-secondary font-medium font-headline4 md:font-headline3 md:mb-32 mb-24"
                                    },
                                    [e("span", {
                                            staticClass: "text-white"
                                        },
                                        [t._v("Internal server error #500 : ")]), t._v("Please refresh this page or try again after sometime")]), t._v(" "), 404 === t.error.statusCode ? e("NuxtLink", {
                                        staticClass: "d-flex align-items-center justify-content-center button--lg border-radius-12 border-1 border-solid border-white text-white h-48 button gradiant-green pl-72 pr-72",
                                        attrs: {
                                            to: "/"
                                        },
                                        on: {
                                            click: t.reload
                                        }
                                    },
                                    [e("span", {
                                        staticClass: "apk-download-button__bg position-absolute w-full h-full top-0 left-0"
                                    }), t._v(" "), e("span", {
                                            staticClass: "button__label font-medium font-headline4"
                                        },
                                        [t._v("Go to Homepage")])]) : e("button", {
                                        staticClass: "d-flex align-items-center justify-content-center button--lg border-radius-12 border-1 border-solid border-white text-white h-48 button gradiant-green pl-72 pr-72",
                                        on: {
                                            click: t.reload
                                        }
                                    },
                                    [e("span", {
                                        staticClass: "apk-download-button__bg position-absolute w-full h-full top-0 left-0"
                                    }), t._v(" "), e("span", {
                                            staticClass: "button__label font-medium font-headline4"
                                        },
                                        [t._v("Reload this Page")])])], 1), t._v(" "), e("div", {
                                    staticClass: "col col--12 md:col--6 order-1 md:order-none text-right"
                                },
                                [404 === t.error.statusCode ? e("img", {
                                    staticClass: "max-w-100 h-auto",
                                    attrs: {
                                        src: "".concat(t.$config.CDN_URL, "/img/error-404.png"),
                                        alt: "error 404",
                                        height: "352",
                                        width: "423"
                                    }
                                }) : e("img", {
                                    staticClass: "max-w-100 h-auto",
                                    attrs: {
                                        src: "".concat(t.$config.CDN_URL, "/img/error-500.png"),
                                        alt: "error 404",
                                        height: "352",
                                        width: "423"
                                    }
                                })])])])])
            }), [], !1, null, null, null);
        e.a = component.exports
    },
    function(t, e, o) {
        "use strict";
        o.r(e);
        var n = o(8),
            r = o(9),
            l = o(11),
            d = o(12),
            c = o(2),
            m = o(4),
            f = (o(18), o(10), o(22), o(0)),
            h = o(142);
        function x(t) {
            var e = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return ! 1;
                if (Reflect.construct.sham) return ! 1;
                if ("function" == typeof Proxy) return ! 0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))),
                        !0
                } catch(t) {
                    return ! 1
                }
            } ();
            return function() {
                var o, n = Object(c.a)(t);
                if (e) {
                    var r = Object(c.a)(this).constructor;
                    o = Reflect.construct(n, arguments, r)
                } else o = n.apply(this, arguments);
                return Object(d.a)(this, o)
            }
        }
        var v = function(t, e, o, desc) {
                var n, r = arguments.length,
                    l = r < 3 ? e: null === desc ? desc = Object.getOwnPropertyDescriptor(e, o) : desc;
                if ("object" === ("undefined" == typeof Reflect ? "undefined": Object(m.a)(Reflect)) && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, e, o, desc);
                else for (var i = t.length - 1; i >= 0; i--)(n = t[i]) && (l = (r < 3 ? n(l) : r > 3 ? n(e, o, l) : n(e, o)) || l);
                return r > 3 && l && Object.defineProperty(e, o, l),
                    l
            },
            w = function(t) {
                Object(l.a)(o, t);
                var e = x(o);
                function o() {
                    var t;
                    return Object(n.a)(this, o),
                        (t = e.apply(this, arguments)).showMenu = !1,
                        t
                }
                return Object(r.a)(o, [{
                    key: "onRouteChange",
                    value: function() {
                        var body = document.querySelector("body");
                        body && body.classList.remove("body-menu-show")
                    }
                },
                    {
                        key: "mounted",
                        value: function() {
                            var t = 0;
                            window.addEventListener("scroll", (function() {
                                var e = window.pageYOffset || document.documentElement.scrollTop,
                                    body = document.querySelector("body");
                                e > t ? e > 230 && body && body.classList.add("body-scrolled") : e < 230 && body && body.classList.remove("body-scrolled"),
                                    t = e <= 0 ? 0 : e
                            }), !1)
                        }
                    },
                    {
                        key: "onMenuClick",
                        value: function() {
                            this.showMenu = !this.showMenu;
                            var body = document.querySelector("body");
                            body && (this.showMenu ? body.classList.add("body-menu-show") : body.classList.remove("body-menu-show"))
                        }
                    }]),
                    o
            } (f.d);
        v([Object(f.c)({
            type: Boolean,
            default:
                !1
        })], w.prototype, "showBackButton", void 0),
            v([Object(f.c)({
                type: Boolean,
                default:
                    !1
            })], w.prototype, "disableLinks", void 0),
            v([Object(f.e)("$route")], w.prototype, "onRouteChange", null);
        var y = w = v([Object(f.a)({
                components: {
                    MdIconButton: h.
                        default
                }
            })], w),
            _ = (o(355), o(5)),
            component = Object(_.a)(y, (function() {
                var t = this,
                    e = t._self._c;
                t._self._setupProxy;
                return e("header", {
                        staticClass: "flex-shrink-0 flex-grow-0 app-header-wrapper transition-all duration-300 top-0 left-0 w-full z-index-10"
                    },
                    [e("div", {
                            staticClass: "bg-primary top-0 left-0 app-header w-full z-index-10 d-flex align-items-center"
                        },
                        [e("div", {
                                staticClass: "container container--box gutter-4 md:gutter-3"
                            },
                            [e("div", {
                                    staticClass: "d-flex justify-content-between align-items-center"
                                },
                                [e("div", {
                                        staticClass: "align-items-center flex-shrink-0 header__menu"
                                    },
                                    [t.disableLinks ? e("div", {
                                            staticClass: "d-flex app-header__link align-items-center justify-content-center"
                                        },
                                        [e("img", {
                                            staticClass: "app-header__logo app-header__logo--white h-auto",
                                            attrs: {
                                                src: "/img/logo/logo.png",
                                                height: "32",
                                                width: "178",
                                                alt: "Gamezy logo"
                                            }
                                        })]) : e("a", {
                                            staticClass: "d-flex app-header__link align-items-center justify-content-center",
                                            attrs: {
                                                href: "/"
                                            }
                                        },
                                        [e("img", {
                                            staticClass: "app-header__logo app-header__logo--white h-auto",
                                            attrs: {
                                                src: "/img/logo/logo.png",
                                                height: "32",
                                                width: "178",
                                                alt: "Gamezy logo"
                                            }
                                        })])]), t._v(" "), t.disableLinks ? t._e() : e("div", {
                                        staticClass: "d-flex justify-content-center"
                                    },
                                    1)
                                ])])])])
            }), [function() {
                var t = this,
                    e = t._self._c;
                t._self._setupProxy;
                return e("a", {
                        staticClass: "nav-item d-flex justify-content-center align-items-center position-relative font-12 md:font-18 line-height-24 pr-0 md:pr-16 h-40 pl-16 md:pl-32 text-white",
                        attrs: {
                            href: "/game/#/login"
                        }
                    },
                    [e("span", {
                            staticClass: "nav-item__text-label"
                        },
                        [t._v("Login")])])
            }], !1, null, null, null);
        e.
            default = component.exports
    },
    function(t, e, o) {
        "use strict";
        o.r(e);
        var n = o(8),
            r = o(9),
            l = o(11),
            d = o(12),
            c = o(2),
            m = o(4),
            f = (o(18), o(10), o(22), o(0)),
            h = o(142);
        function x(t) {
            var e = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return ! 1;
                if (Reflect.construct.sham) return ! 1;
                if ("function" == typeof Proxy) return ! 0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))),
                        !0
                } catch(t) {
                    return ! 1
                }
            } ();
            return function() {
                var o, n = Object(c.a)(t);
                if (e) {
                    var r = Object(c.a)(this).constructor;
                    o = Reflect.construct(n, arguments, r)
                } else o = n.apply(this, arguments);
                return Object(d.a)(this, o)
            }
        }
        var v = function(t, e, o, desc) {
                var n, r = arguments.length,
                    l = r < 3 ? e: null === desc ? desc = Object.getOwnPropertyDescriptor(e, o) : desc;
                if ("object" === ("undefined" == typeof Reflect ? "undefined": Object(m.a)(Reflect)) && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, e, o, desc);
                else for (var i = t.length - 1; i >= 0; i--)(n = t[i]) && (l = (r < 3 ? n(l) : r > 3 ? n(e, o, l) : n(e, o)) || l);
                return r > 3 && l && Object.defineProperty(e, o, l),
                    l
            },
            w = function(t) {
                Object(l.a)(o, t);
                var e = x(o);
                function o() {
                    var t;
                    return Object(n.a)(this, o),
                        (t = e.apply(this, arguments)).isShown = !0,
                        t
                }
                return Object(r.a)(o, [{
                    key: "handleGrid",
                    value: function() {
                        this.isShown = !this.isShown
                    }
                }]),
                    o
            } (f.d),
            y = w = v([Object(f.a)({
                components: {
                    MdIconButton: h.
                        default
                }
            })], w),
            _ = (o(357), o(5)),
            component = Object(_.a)(y, (function() {
                var t = this,
                    e = t._self._c;
                t._self._setupProxy;
                return e("div", {
                        staticClass: "position-fixed top-0 left-0 w-screen h-screen grid-helper d-none"
                    },
                    [e("div", {
                            staticClass: "container position-relative"
                        },
                        [e("div", {
                                staticClass: "row"
                            },
                            t._l(12, (function(i) {
                                return e("div", {
                                        key: i,
                                        staticClass: "col col--1"
                                    },
                                    [e("div", {
                                        staticClass: "w-full h-screen grid-helper__col transition-all duration-500",
                                        class: {
                                            "opacity-0": !t.isShown
                                        }
                                    })])
                            })), 0), t._v(" "), e("div", {
                                staticClass: "right-0 bottom-0 position-absolute grid-helper__button"
                            },
                            [e("button", {
                                    staticClass: "icon-button w-32 h-32 position-relative d-inline-flex",
                                    on: {
                                        click: t.handleGrid
                                    }
                                },
                                [t._v("\n        " + t._s(t.isShown ? "H": "S") + "\n      ")])])])])
            }), [], !1, null, null, null);
        e.
            default = component.exports
    },
    function(t, e, o) {
        "use strict";
        o.r(e);
        var n = o(9),
            r = o(8),
            l = o(11),
            d = o(12),
            c = o(2),
            m = o(4),
            f = (o(18), o(10), o(22), o(0));
        function h(t) {
            var e = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return ! 1;
                if (Reflect.construct.sham) return ! 1;
                if ("function" == typeof Proxy) return ! 0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))),
                        !0
                } catch(t) {
                    return ! 1
                }
            } ();
            return function() {
                var o, n = Object(c.a)(t);
                if (e) {
                    var r = Object(c.a)(this).constructor;
                    o = Reflect.construct(n, arguments, r)
                } else o = n.apply(this, arguments);
                return Object(d.a)(this, o)
            }
        }
        var x = function(t, e, o, desc) {
                var n, r = arguments.length,
                    l = r < 3 ? e: null === desc ? desc = Object.getOwnPropertyDescriptor(e, o) : desc;
                if ("object" === ("undefined" == typeof Reflect ? "undefined": Object(m.a)(Reflect)) && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, e, o, desc);
                else for (var i = t.length - 1; i >= 0; i--)(n = t[i]) && (l = (r < 3 ? n(l) : r > 3 ? n(e, o, l) : n(e, o)) || l);
                return r > 3 && l && Object.defineProperty(e, o, l),
                    l
            },
            v = function(t) {
                Object(l.a)(o, t);
                var e = h(o);
                function o() {
                    return Object(r.a)(this, o),
                        e.apply(this, arguments)
                }
                return Object(n.a)(o)
            } (f.d),
            w = v = x([Object(f.a)({})], v),
            y = o(5),
            component = Object(y.a)(w, (function() {
                var t = this;
                t._self._c,
                    t._self._setupProxy;
                return t._m(0)
            }), [function() {
                var t = this,
                    e = t._self._c;
                t._self._setupProxy;
                return e("footer", {
                        staticClass: "bg-theme-dark position-relative",
                        staticStyle: {
                            "z-index": "3"
                        }
                    },
                    [e("div", {
                            staticClass: "container container--box gutter-4 md:gutter-3 pt-24 md:pt-50"
                        },
                        [e("a", {
                                staticClass: "d-inline-block",
                                attrs: {
                                    href: "/"
                                }
                            },
                            [e("img", {
                                staticClass: "footer__logo h-24 md:h-36 w-auto",
                                attrs: {
                                    loading: "lazy",
                                    src: "/img/logo/logo.png",
                                    height: "36",
                                    width: "200",
                                    alt: "Gamezzy logo"
                                }
                            })]), t._v(" "), e("div", {
                                staticClass: "row md:d-flex d-none justify-content-between pt-26"
                            },
                            [e("div", {
                                    staticClass: "col col--6 md:col--2 pr-0 md:pr-24"
                                },
                                [e("div", {
                                        staticClass: "d-flex flex-col"
                                    },
                                    [e("div", {
                                            staticClass: "md:mb-32 mb-20"
                                        },
                                        [e("div", {
                                                staticClass: "font-600 text-white mb-10 md:mb-12 font-14 md:font-18 line-height-16 md:line-height-24"
                                            },
                                            [t._v("Company")]), t._v(" "), e("a", {
                                                staticClass: "d-block mb-8 transition-all align-self-start line-effect duration-500 text-cyan:hover",
                                                attrs: {
                                                    href: "/about-us/",
                                                    "exact-active-class": "text-cyan a-exact-active"
                                                }
                                            },
                                            [e("span", {
                                                    staticClass: "font-400 font-12 md:font-16 line-height-16 md:line-height-22"
                                                },
                                                [t._v("About Us")])])]), t._v(" "), e("div", {},
                                        [e("div", {
                                                staticClass: "font-600 text-white mb-10 md:mb-12 font-14 md:font-18 line-height-16 md:line-height-24"
                                            },
                                            [t._v("Legal")]), t._v(" "), e("a", {
                                                staticClass: "d-block mb-8 transition-all align-self-start line-effect duration-500 text-cyan:hover",
                                                attrs: {
                                                    href: "/terms-condition/",
                                                    "exact-active-class": "text-cyan a-exact-active"
                                                }
                                            },
                                            [e("span", {
                                                    staticClass: "font-400 font-12 md:font-16 line-height-16 md:line-height-22"
                                                },
                                                [t._v("Terms & Conditions")])]), t._v(" "), e("a", {
                                                staticClass: "d-block mb-8 transition-all align-self-start line-effect duration-500 text-cyan:hover",
                                                attrs: {
                                                    href: "/fair-play-policy/",
                                                    "exact-active-class": "text-cyan a-exact-active"
                                                }
                                            },
                                            [e("span", {
                                                    staticClass: "font-400 font-12 md:font-16 line-height-16 md:line-height-22"
                                                },
                                                [t._v("Fair Play Policy")])]), t._v(" "), e("a", {
                                                staticClass: "d-block mb-8 transition-all align-self-start line-effect duration-500 text-cyan:hover",
                                                attrs: {
                                                    href: "/privacy-policy/",
                                                    "exact-active-class": "text-cyan a-exact-active"
                                                }
                                            },
                                            [e("span", {
                                                    staticClass: "font-400 font-12 md:font-16 line-height-16 md:line-height-22"
                                                },
                                                [t._v("Privacy Policy")])])])])]), t._v(" "), e("div", {
                                    staticClass: "col col--6 md:col--2 pr-0 md:pr-24"
                                },
                                [e("div", {
                                        staticClass: "d-flex flex-col"
                                    },
                                    [e("div", {
                                            staticClass: "font-600 text-white mb-10 md:mb-12 font-14 md:font-18 line-height-16 md:line-height-24"
                                        },
                                        [t._v("Games")]), t._v(" "), e("a", {
                                            staticClass: "d-block mb-8 transition-all align-self-start line-effect duration-500 text-cyan:hover",
                                            attrs: {
                                                href: "/fantasy-sports/",
                                                "exact-active-class": "text-cyan a-exact-active"
                                            }
                                        },
                                        [e("span", {
                                                staticClass: "font-400 font-12 md:font-16 line-height-16 md:line-height-22"
                                            },
                                            [t._v("Fantasy Sports")])]), t._v(" "), e("a", {
                                            staticClass: "d-block mb-8 transition-all align-self-start line-effect duration-500 text-cyan:hover",
                                            attrs: {
                                                href: "/card-games/",
                                                "exact-active-class": "text-cyan a-exact-active"
                                            }
                                        },
                                        [e("span", {
                                                staticClass: "font-400 font-12 md:font-16 line-height-16 md:line-height-22"
                                            },
                                            [t._v("Card Games")])]), t._v(" "), e("a", {
                                            staticClass: "d-block mb-8 transition-all align-self-start line-effect duration-500 text-cyan:hover",
                                            attrs: {
                                                href: "/card-games/rummy/",
                                                "exact-active-class": "text-cyan a-exact-active"
                                            }
                                        },
                                        [e("span", {
                                                staticClass: "font-400 font-12 md:font-16 line-height-16 md:line-height-22"
                                            },
                                            [t._v("Rummy")])]), t._v(" "), e("a", {
                                            staticClass: "d-block mb-8 transition-all align-self-start line-effect duration-500 text-cyan:hover",
                                            attrs: {
                                                href: "/casual-games/",
                                                "exact-active-class": "text-cyan a-exact-active"
                                            }
                                        },
                                        [e("span", {
                                                staticClass: "font-400 font-12 md:font-16 line-height-16 md:line-height-22"
                                            },
                                            [t._v("Casual Games")])]), t._v(" "), e("a", {
                                            staticClass: "d-block mb-8 transition-all align-self-start line-effect duration-500 text-cyan:hover",
                                            attrs: {
                                                href: "/casual-games/8-ball-pool/",
                                                "exact-active-class": "text-cyan a-exact-active"
                                            }
                                        },
                                        [e("span", {
                                                staticClass: "font-400 font-12 md:font-16 line-height-16 md:line-height-22"
                                            },
                                            [t._v("Dragon & Tiger")])]), t._v(" "), e("a", {
                                            staticClass: "d-block mb-8 transition-all align-self-start line-effect duration-500 text-cyan:hover",
                                            attrs: {
                                                href: "/casual-games/carrom/",
                                                "exact-active-class": "text-cyan a-exact-active"
                                            }
                                        },
                                        [e("span", {
                                                staticClass: "font-400 font-12 md:font-16 line-height-16 md:line-height-22"
                                            },
                                            [t._v("Carrom")])])])]), t._v(" "), e("div", {
                                    staticClass: "col col--6 md:col--3 pr-0 md:pr-24"
                                },
                                [e("div", {
                                        staticClass: "d-flex flex-col"
                                    },
                                    [e("div", {
                                            staticClass: "font-600 text-white mb-10 md:mb-12 font-14 md:font-18 line-height-16 md:line-height-24"
                                        },
                                        [t._v("Others")]), t._v(" "), e("a", {
                                            staticClass: "d-block mb-8 transition-all align-self-start line-effect duration-500 text-cyan:hover",
                                            attrs: {
                                                href: "/play-responsibly/",
                                                "exact-active-class": "text-cyan a-exact-active"
                                            }
                                        },
                                        [e("span", {
                                                staticClass: "font-400 font-12 md:font-16 line-height-16 md:line-height-22"
                                            },
                                            [t._v("Play Responsibly")])]), t._v(" "), e("a", {
                                            staticClass: "d-block mb-8 transition-all align-self-start line-effect duration-500 text-cyan:hover",
                                            attrs: {
                                                href: "/powerplay/",
                                                "exact-active-class": "text-cyan a-exact-active"
                                            }
                                        },
                                        [e("span", {
                                                staticClass: "font-400 font-12 md:font-16 line-height-16 md:line-height-22"
                                            },
                                            [t._v("Powerplay for Influencer")])]), t._v(" "), e("a", {
                                            staticClass: "d-block mb-8 transition-all align-self-start line-effect duration-500 text-cyan:hover",
                                            attrs: {
                                                href: "/faq/",
                                                "exact-active-class": "text-cyan a-exact-active"
                                            }
                                        },
                                        [e("span", {
                                                staticClass: "font-400 font-12 md:font-16 line-height-16 md:line-height-22"
                                            },
                                            [t._v("FAQ")])])])]), t._v(" "), e("div", {
                                    staticClass: "col col--6 md:col--3 pr-0 md:pr-24"
                                },
                                [e("div", {
                                        staticClass: "d-flex flex-col"
                                    },
                                    [e("div", {},
                                        [e("div", {
                                                staticClass: "font-600 text-white mb-10 md:mb-12 font-14 md:font-18 line-height-16 md:line-height-24"
                                            },
                                            [t._v("Fantasy")]), t._v(" "), e("a", {
                                                staticClass: "d-block mb-8 transition-all align-self-start line-effect duration-500 text-cyan:hover",
                                                attrs: {
                                                    href: "/point-system/",
                                                    "exact-active-class": "text-cyan a-exact-active"
                                                }
                                            },
                                            [e("span", {
                                                    staticClass: "font-400 font-12 md:font-16 line-height-16 md:line-height-22"
                                                },
                                                [t._v("Fantasy Point System")])]), t._v(" "), e("a", {
                                                staticClass: "d-block mb-8 transition-all align-self-start line-effect duration-500 text-cyan:hover",
                                                attrs: {
                                                    href: "/fantasy-cricket/fantasy-cricket-tips/",
                                                    "exact-active-class": "text-cyan a-exact-active"
                                                }
                                            },
                                            [e("span", {
                                                    staticClass: "font-400 font-12 md:font-16 line-height-16 md:line-height-22"
                                                },
                                                [t._v("Fantasy Cricket Tips")])]), t._v(" "), e("a", {
                                                staticClass: "d-block mb-8 transition-all align-self-start line-effect duration-500 text-cyan:hover",
                                                attrs: {
                                                    href: "/fantasy-cricket/indian-fantasy-cricket/",
                                                    "exact-active-class": "text-cyan a-exact-active"
                                                }
                                            },
                                            [e("span", {
                                                    staticClass: "font-400 font-12 md:font-16 line-height-16 md:line-height-22"
                                                },
                                                [t._v("Indian Fantasy Cricket")])]), t._v(" "), e("a", {
                                                staticClass: "d-block mb-8 transition-all align-self-start line-effect duration-500 text-cyan:hover",
                                                attrs: {
                                                    href: "/fantasy-cricket/indian-t20-premier-league/",
                                                    "exact-active-class": "text-cyan a-exact-active"
                                                }
                                            },
                                            [e("span", {
                                                    staticClass: "font-400 font-12 md:font-16 line-height-16 md:line-height-22"
                                                },
                                                [t._v("Indian T20 Fantasy League")])]), t._v(" "), e("a", {
                                                staticClass: "d-block mb-8 transition-all align-self-start line-effect duration-500 text-cyan:hover",
                                                attrs: {
                                                    href: "/blog/fantasy-cricket/",
                                                    "exact-active-class": "text-cyan a-exact-active"
                                                }
                                            },
                                            [e("span", {
                                                    staticClass: "font-400 font-12 md:font-16 line-height-16 md:line-height-22"
                                                },
                                                [t._v("Fantasy Cricket Blogs")])]), t._v(" "), e("a", {
                                                staticClass: "d-block mb-8 transition-all align-self-start line-effect duration-500 text-cyan:hover",
                                                attrs: {
                                                    href: "/help/",
                                                    "exact-active-class": "text-cyan a-exact-active"
                                                }
                                            },
                                            [e("span", {
                                                    staticClass: "font-400 font-12 md:font-16 line-height-16 md:line-height-22"
                                                },
                                                [t._v("How to Play")])])])])]), t._v(" "), e("div", {
                                    staticClass: "col col--12 md:col--2 pr-0 md:pr-24"
                                },
                                [e("div", {
                                        staticClass: "d-flex flex-col"
                                    },
                                    [e("div", {},
                                        [e("div", {
                                                staticClass: "font-600 text-white mb-10 md:mb-12 font-14 md:font-16 line-height-16 md:line-height-24"
                                            },
                                            [t._v("Secured payments by")]), t._v(" "), e("div", {
                                                staticClass: "d-flex flex-wrap"
                                            },
                                            [e("div", {
                                                    staticClass: "col md:col--6 p-0 md:pb-6 pr-6"
                                                },
                                                [e("img", {
                                                    staticClass: "w-auto border-radius-4",
                                                    attrs: {
                                                        loading: "lazy",
                                                        src: "/img/upi-icon.png",
                                                        height: "36",
                                                        width: "166",
                                                        alt: "UPI"
                                                    }
                                                })]), t._v(" "), e("div", {
                                                    staticClass: "col md:col--6 p-0 md:pb-6"
                                                },
                                                [e("img", {
                                                    staticClass: "w-auto",
                                                    attrs: {
                                                        loading: "lazy",
                                                        src: "/img/payu.png",
                                                        height: "36",
                                                        width: "166",
                                                        alt: "payU"
                                                    }
                                                })]), t._v(" "), e("div", {
                                                    staticClass: "col md:col--6 p-0 md:pb-6 pr-6"
                                                },
                                                [e("img", {
                                                    staticClass: "w-auto",
                                                    attrs: {
                                                        loading: "lazy",
                                                        src: "/img/visa.png",
                                                        height: "36",
                                                        width: "166",
                                                        alt: "Visa"
                                                    }
                                                })]), t._v(" "), e("div", {
                                                    staticClass: "col md:col--6 p-0 md:pb-6"
                                                },
                                                [e("img", {
                                                    staticClass: "w-auto",
                                                    attrs: {
                                                        loading: "lazy",
                                                        src: "/img/mastercard.png",
                                                        height: "36",
                                                        width: "166",
                                                        alt: "Mastercard"
                                                    }
                                                })]), t._v(" "), e("div", {
                                                    staticClass: "col md:col--6 p-0 md:pb-6 pr-6"
                                                },
                                                [e("img", {
                                                    staticClass: "w-auto",
                                                    attrs: {
                                                        loading: "lazy",
                                                        src: "/img/rupay.png",
                                                        height: "36",
                                                        width: "166",
                                                        alt: "Rupay"
                                                    }
                                                })]), t._v(" "), e("div", {
                                                    staticClass: "col md:col--6 p-0 md:pb-6"
                                                },
                                                [e("img", {
                                                    staticClass: "w-auto",
                                                    attrs: {
                                                        loading: "lazy",
                                                        src: "/img/netbanking.png",
                                                        height: "36",
                                                        width: "166",
                                                        alt: "Net banking"
                                                    }
                                                })])])])])])]), t._v(" "), e("div", {
                                staticClass: "row md:d-none d-flex justify-content-between pt-26"
                            },
                            [e("div", {
                                    staticClass: "col col--6 md:col--2 pr-0 md:pr-24"
                                },
                                [e("div", {
                                        staticClass: "d-flex flex-col mb-20"
                                    },
                                    [e("div", {
                                            staticClass: "font-600 text-white mb-10 md:mb-12 font-14 md:font-18 line-height-16 md:line-height-24"
                                        },
                                        [t._v("Company")]), t._v(" "), e("a", {
                                            staticClass: "d-block mb-8 transition-all align-self-start line-effect duration-500 text-cyan:hover",
                                            attrs: {
                                                href: "/about-us/",
                                                "exact-active-class": "text-cyan a-exact-active"
                                            }
                                        },
                                        [e("span", {
                                                staticClass: "font-400 font-12 md:font-16 line-height-16 md:line-height-22"
                                            },
                                            [t._v("About Us")])])]), t._v(" "), e("div", {
                                        staticClass: "d-flex flex-col"
                                    },
                                    [e("div", {
                                            staticClass: "mb-20"
                                        },
                                        [e("div", {
                                                staticClass: "font-600 text-white mb-10 md:mb-12 font-14 md:font-18 line-height-16 md:line-height-24"
                                            },
                                            [t._v("Games")]), t._v(" "), e("a", {
                                                staticClass: "d-block mb-8 transition-all align-self-start line-effect duration-500 text-cyan:hover",
                                                attrs: {
                                                    href: "/fantasy-sports/",
                                                    "exact-active-class": "text-cyan a-exact-active"
                                                }
                                            },
                                            [e("span", {
                                                    staticClass: "font-400 font-12 md:font-16 line-height-16 md:line-height-22"
                                                },
                                                [t._v("Fantasy Games")])]), t._v(" "), e("a", {
                                                staticClass: "d-block mb-8 transition-all align-self-start line-effect duration-500 text-cyan:hover",
                                                attrs: {
                                                    href: "/card-games/",
                                                    "exact-active-class": "text-cyan a-exact-active"
                                                }
                                            },
                                            [e("span", {
                                                    staticClass: "font-400 font-12 md:font-16 line-height-16 md:line-height-22"
                                                },
                                                [t._v("Card Games")])]), t._v(" "), e("a", {
                                                staticClass: "d-block mb-8 transition-all align-self-start line-effect duration-500 text-cyan:hover",
                                                attrs: {
                                                    href: "/casual-games/",
                                                    "exact-active-class": "text-cyan a-exact-active"
                                                }
                                            },
                                            [e("span", {
                                                    staticClass: "font-400 font-12 md:font-16 line-height-16 md:line-height-22"
                                                },
                                                [t._v("Casual Games")])]), t._v(" "), e("a", {
                                                staticClass: "d-block mb-8 transition-all align-self-start line-effect duration-500 text-cyan:hover",
                                                attrs: {
                                                    href: "/casual-games/8-ball-pool/",
                                                    "exact-active-class": "text-cyan a-exact-active"
                                                }
                                            },
                                            [e("span", {
                                                    staticClass: "font-400 font-12 md:font-16 line-height-16 md:line-height-22"
                                                },
                                                [t._v("Dragon & Tiger")])]), t._v(" "), e("a", {
                                                staticClass: "d-block mb-8 transition-all align-self-start line-effect duration-500 text-cyan:hover",
                                                attrs: {
                                                    href: "/casual-games/carrom/",
                                                    "exact-active-class": "text-cyan a-exact-active"
                                                }
                                            },
                                            [e("span", {
                                                    staticClass: "font-400 font-12 md:font-16 line-height-16 md:line-height-22"
                                                },
                                                [t._v("Carrom")])])])]), t._v(" "), e("div", {
                                        staticClass: "d-flex flex-col mb-20"
                                    },
                                    [e("div", {
                                            staticClass: "font-600 text-white mb-10 md:mb-12 font-14 md:font-18 line-height-16 md:line-height-24"
                                        },
                                        [t._v("Others")]), t._v(" "), e("a", {
                                            staticClass: "d-block mb-8 transition-all align-self-start line-effect duration-500 text-cyan:hover",
                                            attrs: {
                                                href: "/play-responsibly/",
                                                "exact-active-class": "text-cyan a-exact-active"
                                            }
                                        },
                                        [e("span", {
                                                staticClass: "font-400 font-12 md:font-16 line-height-16 md:line-height-22"
                                            },
                                            [t._v("Play Responsibly")])]), t._v(" "), e("a", {
                                            staticClass: "d-block mb-8 transition-all align-self-start line-effect duration-500 text-cyan:hover",
                                            attrs: {
                                                href: "/powerplay/",
                                                "exact-active-class": "text-cyan a-exact-active"
                                            }
                                        },
                                        [e("span", {
                                                staticClass: "font-400 font-12 md:font-16 line-height-16 md:line-height-22"
                                            },
                                            [t._v("Powerplay for Influencer")])]), t._v(" "), e("a", {
                                            staticClass: "d-block mb-8 transition-all align-self-start line-effect duration-500 text-cyan:hover",
                                            attrs: {
                                                href: "/faq/",
                                                "exact-active-class": "text-cyan a-exact-active"
                                            }
                                        },
                                        [e("span", {
                                                staticClass: "font-400 font-12 md:font-16 line-height-16 md:line-height-22"
                                            },
                                            [t._v("FAQ")])])])]), t._v(" "), e("div", {
                                    staticClass: "col col--6 md:col--3 pr-0 md:pr-24"
                                },
                                [e("div", {
                                        staticClass: "d-flex flex-col mb-20"
                                    },
                                    [e("div", {
                                            staticClass: "font-600 text-white mb-10 md:mb-12 font-14 md:font-18 line-height-16 md:line-height-24"
                                        },
                                        [t._v("Fantasy")]), t._v(" "), e("a", {
                                            staticClass: "d-block mb-8 transition-all align-self-start line-effect duration-500 text-cyan:hover",
                                            attrs: {
                                                href: "/point-system/",
                                                "exact-active-class": "text-cyan a-exact-active"
                                            }
                                        },
                                        [e("span", {
                                                staticClass: "font-400 font-12 md:font-16 line-height-16 md:line-height-22"
                                            },
                                            [t._v("Fantasy Point System")])]), t._v(" "), e("a", {
                                            staticClass: "d-block mb-8 transition-all align-self-start line-effect duration-500 text-cyan:hover",
                                            attrs: {
                                                href: "/fantasy-cricket/fantasy-cricket-tips/",
                                                "exact-active-class": "text-cyan a-exact-active"
                                            }
                                        },
                                        [e("span", {
                                                staticClass: "font-400 font-12 md:font-16 line-height-16 md:line-height-22"
                                            },
                                            [t._v("Fantasy Cricket Tips")])]), t._v(" "), e("a", {
                                            staticClass: "d-block mb-8 transition-all align-self-start line-effect duration-500 text-cyan:hover",
                                            attrs: {
                                                href: "/fantasy-cricket/indian-fantasy-cricket/",
                                                "exact-active-class": "text-cyan a-exact-active"
                                            }
                                        },
                                        [e("span", {
                                                staticClass: "font-400 font-12 md:font-16 line-height-16 md:line-height-22"
                                            },
                                            [t._v("Indian Fantasy Cricket")])]), t._v(" "), e("a", {
                                            staticClass: "d-block mb-8 transition-all align-self-start line-effect duration-500 text-cyan:hover",
                                            attrs: {
                                                href: "/fantasy-cricket/indian-t20-premier-league/",
                                                "exact-active-class": "text-cyan a-exact-active"
                                            }
                                        },
                                        [e("span", {
                                                staticClass: "font-400 font-12 md:font-16 line-height-16 md:line-height-22"
                                            },
                                            [t._v("Indian T20 Fantasy League")])]), t._v(" "), e("a", {
                                            staticClass: "d-block mb-8 transition-all align-self-start line-effect duration-500 text-cyan:hover",
                                            attrs: {
                                                href: "/blog/fantasy-cricket/",
                                                "exact-active-class": "text-cyan a-exact-active"
                                            }
                                        },
                                        [e("span", {
                                                staticClass: "font-400 font-12 md:font-16 line-height-16 md:line-height-22"
                                            },
                                            [t._v("Fantasy Cricket Blogs")])]), t._v(" "), e("a", {
                                            staticClass: "d-block mb-8 transition-all align-self-start line-effect duration-500 text-cyan:hover",
                                            attrs: {
                                                href: "/help/",
                                                "exact-active-class": "text-cyan a-exact-active"
                                            }
                                        },
                                        [e("span", {
                                                staticClass: "font-400 font-12 md:font-16 line-height-16 md:line-height-22"
                                            },
                                            [t._v("How to Play")])])]), t._v(" "), e("div", {
                                        staticClass: "d-flex flex-col mb-20"
                                    },
                                    [e("div", {
                                            staticClass: "font-600 text-white mb-10 md:mb-12 font-14 md:font-18 line-height-16 md:line-height-24"
                                        },
                                        [t._v("Legal")]), t._v(" "), e("a", {
                                            staticClass: "d-block mb-8 transition-all align-self-start line-effect duration-500 text-cyan:hover",
                                            attrs: {
                                                href: "/terms-condition/",
                                                "exact-active-class": "text-cyan a-exact-active"
                                            }
                                        },
                                        [e("span", {
                                                staticClass: "font-400 font-12 md:font-16 line-height-16 md:line-height-22"
                                            },
                                            [t._v("Terms & Conditions")])]), t._v(" "), e("a", {
                                            staticClass: "d-block mb-8 transition-all align-self-start line-effect duration-500 text-cyan:hover",
                                            attrs: {
                                                href: "/fair-play-policy/",
                                                "exact-active-class": "text-cyan a-exact-active"
                                            }
                                        },
                                        [e("span", {
                                                staticClass: "font-400 font-12 md:font-16 line-height-16 md:line-height-22"
                                            },
                                            [t._v("Fair Play Policy")])]), t._v(" "), e("a", {
                                            staticClass: "d-block mb-8 transition-all align-self-start line-effect duration-500 text-cyan:hover",
                                            attrs: {
                                                href: "/privacy-policy/",
                                                "exact-active-class": "text-cyan a-exact-active"
                                            }
                                        },
                                        [e("span", {
                                                staticClass: "font-400 font-12 md:font-16 line-height-16 md:line-height-22"
                                            },
                                            [t._v("Privacy Policy")])])])]), t._v(" "), e("div", {
                                    staticClass: "col col--12 md:col--3 pr-0 md:pr-24"
                                },
                                [e("div", {
                                        staticClass: "d-flex flex-col"
                                    },
                                    [e("div", {},
                                        [e("div", {
                                                staticClass: "font-500 text-white mb-10 md:mb-12 font-14 md:font-18 line-height-16 md:line-height-24"
                                            },
                                            [t._v("Secured payments by")]), t._v(" "), e("div", {
                                                staticClass: "d-flex md:flex-wrap"
                                            },
                                            [e("div", {
                                                    staticClass: "p-0 md:pb-6 pr-6"
                                                },
                                                [e("img", {
                                                    staticClass: "w-auto border-radius-4",
                                                    attrs: {
                                                        loading: "lazy",
                                                        src: "/img/m-upi-icon.png",
                                                        height: "26",
                                                        width: "52",
                                                        alt: "UPI"
                                                    }
                                                })]), t._v(" "), e("div", {
                                                    staticClass: "p-0 md:pb-6 pr-6"
                                                },
                                                [e("img", {
                                                    staticClass: "w-auto",
                                                    attrs: {
                                                        loading: "lazy",
                                                        src: "/img/m-payu.png",
                                                        height: "26",
                                                        width: "40",
                                                        alt: "payU"
                                                    }
                                                })]), t._v(" "), e("div", {
                                                    staticClass: "p-0 md:pb-6 pr-6"
                                                },
                                                [e("img", {
                                                    staticClass: "w-auto",
                                                    attrs: {
                                                        loading: "lazy",
                                                        src: "/img/m-visa.png",
                                                        height: "26",
                                                        width: "45",
                                                        alt: "Visa"
                                                    }
                                                })]), t._v(" "), e("div", {
                                                    staticClass: "p-0 md:pb-6 pr-6"
                                                },
                                                [e("img", {
                                                    staticClass: "w-auto",
                                                    attrs: {
                                                        loading: "lazy",
                                                        src: "/img/m-mastercard.png",
                                                        height: "26",
                                                        width: "33",
                                                        alt: "Mastercard"
                                                    }
                                                })]), t._v(" "), e("div", {
                                                    staticClass: "p-0 md:pb-6 pr-6"
                                                },
                                                [e("img", {
                                                    staticClass: "w-auto",
                                                    attrs: {
                                                        loading: "lazy",
                                                        src: "/img/m-rupay.png",
                                                        height: "26",
                                                        width: "58",
                                                        alt: "Rupay"
                                                    }
                                                })]), t._v(" "), e("div", {
                                                    staticClass: "p-0 md:pb-6"
                                                },
                                                [e("img", {
                                                    staticClass: "w-auto",
                                                    attrs: {
                                                        loading: "lazy",
                                                        src: "/img/m-netbanking.png",
                                                        height: "26",
                                                        width: "48",
                                                        alt: "Net banking"
                                                    }
                                                })])])])])])]), t._v(" "), e("div", {
                                staticClass: "mt-20 md:mt-40 d-flex align-items-center flex-wrap"
                            },
                            [e("div", {
                                    staticClass: "d-flex align-items-center mr-12 mb-10 border-solid border-half border-light-white border-radius-12 p-12"
                                },
                                [e("img", {
                                    staticClass: "mr-8",
                                    attrs: {
                                        src: "/img/crown.png",
                                        alt: "100% Secure Fair Play Policy",
                                        height: "20",
                                        width: "20"
                                    }
                                }), t._v(" "), e("div", [e("h4", {
                                        staticClass: "mb-0 font-700 font-14 line-height-16 text-white"
                                    },
                                    [t._v("100% Secure")]), t._v(" "), e("p", {
                                        staticClass: "mb-0 font-400 font-12 text-white text-white-secondary"
                                    },
                                    [t._v("Fair Play Policy")])])]), t._v(" "), e("div", {
                                    staticClass: "d-flex align-items-center mr-12 mb-10 border-solid border-half border-light-white border-radius-12 p-12"
                                },
                                [e("img", {
                                    staticClass: "mr-8",
                                    attrs: {
                                        src: "/img/iso-company.png",
                                        alt: "ISO Certified Company",
                                        height: "20",
                                        width: "20"
                                    }
                                }), t._v(" "), e("div", [e("h4", {
                                        staticClass: "mb-0 font-700 font-14 line-height-16 text-white"
                                    },
                                    [t._v("ISO Certified")]), t._v(" "), e("p", {
                                        staticClass: "mb-0 font-400 font-12 text-white text-white-secondary"
                                    },
                                    [t._v("Company")])])]), t._v(" "), e("div", {
                                    staticClass: "d-flex align-items-center mr-12 mb-10 border-solid border-half border-light-white border-radius-12 p-12"
                                },
                                [e("img", {
                                    staticClass: "mr-8",
                                    attrs: {
                                        src: "/img/instant-flash.png",
                                        alt: "Instant Withdrawal",
                                        height: "20",
                                        width: "20"
                                    }
                                }), t._v(" "), e("div", [e("h4", {
                                        staticClass: "mb-0 font-700 font-14 line-height-16 text-white"
                                    },
                                    [t._v("Instant")]), t._v(" "), e("p", {
                                        staticClass: "mb-0 font-400 font-12 text-white text-white-secondary"
                                    },
                                    [t._v("Withdrawal")])])]), t._v(" "), e("div", {
                                    staticClass: "d-flex align-items-center mr-12 mb-10 border-solid border-half border-light-white border-radius-12 p-12"
                                },
                                [e("img", {
                                    staticClass: "mr-8",
                                    attrs: {
                                        src: "/img/crore-users.png",
                                        alt: "1 Crore+ Trusted User",
                                        height: "20",
                                        width: "20"
                                    }
                                }), t._v(" "), e("div", [e("h4", {
                                        staticClass: "mb-0 font-700 font-14 line-height-16 text-white"
                                    },
                                    [t._v("1 Crore +")]), t._v(" "), e("p", {
                                        staticClass: "mb-0 font-400 font-12 text-white text-white-secondary"
                                    },
                                    [t._v("Trusted User")])])])]), t._v(" "), e("p", {
                                staticClass: "mt-8 md:mt-16 font-10 md:font-16 font-400 line-height-16 md:line-height-24 text-white opacity-70"
                            },
                            [t._v("DISCLAIMER : Gamezy is neither associated or affiliated nor claims any association or affiliation in any manner with any sport governing league or authorities, including (but not limited to) the board of Control for cricket in india(BCCI), Unless Specified otherwise.")])]), t._v(" "), e("div", {
                            staticClass: "bg-theme-light mt-32 md:mt-48"
                        },
                        [e("div", {
                                staticClass: "container container--box gutter-4 md:gutter-3 pt-22 pb-22 connect-with-us"
                            },
                            [e("div", {
                                    staticClass: "row justify-content-between align-items-center"
                                },
                                [e("div", {
                                        staticClass: "col col--12 md:col--6 d-flex flex-wrap align-items-center"
                                    },
                                    [e("span", {
                                            staticClass: "font-400 font-16 text-white opacity-70 font-10 md:font-16 font-400 md:w-auto w-full md:text-left text-center mb-8 md:mb-0"
                                        },
                                        [t._v("Connect with us")]), t._v(" "), e("ul", {
                                            staticClass: "d-flex mb-0 align-items-center md:align-items-start w-full md:w-auto justify-content-center"
                                        },
                                        [e("li", {
                                                staticClass: "ml-0 md:ml-48 mr-20"
                                            },
                                            [e("a", {
                                                    staticClass: "d-inline-flex align-items-center justify-content-center",
                                                    attrs: {
                                                        target: "_blank",
                                                        rel: "noreferrer nofollow",
                                                        href: "https://www.facebook.com/officialgamezy/",
                                                        title: "Facebook"
                                                    }
                                                },
                                                [e("img", {
                                                    staticClass: "opacity-70 h-24 w-24 md:w-32 md:h-32",
                                                    attrs: {
                                                        loading: "lazy",
                                                        width: "32",
                                                        height: "32",
                                                        alt: "facebook",
                                                        src: "/img/facebook.png"
                                                    }
                                                })])]), t._v(" "), e("li", {
                                                staticClass: "mr-20"
                                            },
                                            [e("a", {
                                                    staticClass: "d-inline-flex align-items-center justify-content-center",
                                                    attrs: {
                                                        target: "_blank",
                                                        rel: "noreferrer nofollow",
                                                        href: "https://www.instagram.com/official_gamezy/?igshid=1dh5nfj7ki6d7",
                                                        title: "Instagram"
                                                    }
                                                },
                                                [e("img", {
                                                    staticClass: "opacity-70 h-24 w-24 md:w-32 md:h-32",
                                                    attrs: {
                                                        loading: "lazy",
                                                        width: "32",
                                                        height: "32",
                                                        alt: "instagram",
                                                        src: "/img/instagram.png"
                                                    }
                                                })])]), t._v(" "), e("li", {
                                                staticClass: "mr-20"
                                            },
                                            [e("a", {
                                                    staticClass: "d-inline-flex align-items-center justify-content-center",
                                                    attrs: {
                                                        target: "_blank",
                                                        rel: "noreferrer nofollow",
                                                        href: "https://twitter.com/Gamezyapp?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
                                                        title: "Twitter"
                                                    }
                                                },
                                                [e("img", {
                                                    staticClass: "opacity-70 h-24 w-24 md:w-32 md:h-32",
                                                    attrs: {
                                                        loading: "lazy",
                                                        width: "32",
                                                        height: "32",
                                                        alt: "twitter",
                                                        src: "/img/twitter.png"
                                                    }
                                                })])]), t._v(" "), e("li", {
                                                staticClass: "mr-20"
                                            },
                                            [e("a", {
                                                    staticClass: "d-inline-flex align-items-center justify-content-center",
                                                    attrs: {
                                                        target: "_blank",
                                                        rel: "noreferrer nofollow",
                                                        href: "https://www.youtube.com/channel/UCCucVpPql8vdEly-Bbx6GqQ",
                                                        title: "Youtube"
                                                    }
                                                },
                                                [e("img", {
                                                    staticClass: "opacity-70 h-24 w-24 md:w-32 md:h-32",
                                                    attrs: {
                                                        loading: "lazy",
                                                        width: "32",
                                                        height: "32",
                                                        alt: "youtube",
                                                        src: "/img/youtube.png"
                                                    }
                                                })])]), t._v(" "), e("li", {
                                                staticClass: "mr-0"
                                            },
                                            [e("a", {
                                                    staticClass: "d-inline-flex align-items-center justify-content-center",
                                                    attrs: {
                                                        target: "_blank",
                                                        rel: "noreferrer nofollow",
                                                        href: "https://t.me/officialgamezy",
                                                        title: "Telegram"
                                                    }
                                                },
                                                [e("img", {
                                                    staticClass: "opacity-70 h-24 w-24 md:w-32 md:h-32",
                                                    attrs: {
                                                        loading: "lazy",
                                                        width: "32",
                                                        height: "32",
                                                        alt: "telegram",
                                                        src: "/img/telegram.png"
                                                    }
                                                })])])])]), t._v(" "), e("div", {
                                        staticClass: "col col--12 md:col--6 mt-12 md:mt-0"
                                    },
                                    [e("p", {
                                            staticClass: "text-white opacity-70 font-10 md:font-16 font-400 text-center md:text-right"
                                        },
                                        [t._v("© Gamezy 2021")])])])])])])
            }], !1, null, null, null);
        e.
            default = component.exports
    },
    function(t, e, o) {
        "use strict";
        o.r(e);
        o(22);
        var n = o(8),
            r = o(9),
            l = o(11),
            d = o(12),
            c = o(2),
            m = o(4),
            f = (o(18), o(10), o(26), o(37), o(184), o(41), o(52), o(0)),
            h = o(282);
        function x(t) {
            var e = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return ! 1;
                if (Reflect.construct.sham) return ! 1;
                if ("function" == typeof Proxy) return ! 0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))),
                        !0
                } catch(t) {
                    return ! 1
                }
            } ();
            return function() {
                var o, n = Object(c.a)(t);
                if (e) {
                    var r = Object(c.a)(this).constructor;
                    o = Reflect.construct(n, arguments, r)
                } else o = n.apply(this, arguments);
                return Object(d.a)(this, o)
            }
        }
        var v = function(t, e, o, desc) {
                var n, r = arguments.length,
                    l = r < 3 ? e: null === desc ? desc = Object.getOwnPropertyDescriptor(e, o) : desc;
                if ("object" === ("undefined" == typeof Reflect ? "undefined": Object(m.a)(Reflect)) && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, e, o, desc);
                else for (var i = t.length - 1; i >= 0; i--)(n = t[i]) && (l = (r < 3 ? n(l) : r > 3 ? n(e, o, l) : n(e, o)) || l);
                return r > 3 && l && Object.defineProperty(e, o, l),
                    l
            },
            w = function(t) {
                Object(l.a)(o, t);
                var e = x(o);
                function o() {
                    var t;
                    return Object(n.a)(this, o),
                        (t = e.apply(this, arguments)).speed = .3,
                        t.threshold = 10,
                        t.visible = !1,
                        t.cursorEl = null,
                        t.appBodyEl = null,
                        t.actionItems = [{
                            selectors: "a,input,textarea,button,iframe",
                            enterAction: "setState",
                            leaveAction: "removeState",
                            args: "sw-cursor--hover"
                        },
                            {
                                selectors: "data-cursor-inverse",
                                enterAction: "setState",
                                leaveAction: "removeState",
                                args: "sw-cursor--inverse"
                            },
                            {
                                selectors: "data-cursor",
                                enterAction: "setState",
                                leaveAction: "removeState",
                                args: "sw-cursor--hover"
                            },
                            {
                                selectors: "data-cursor-text",
                                enterAction: "setText",
                                leaveAction: "removeText",
                                args: ""
                            },
                            {
                                selectors: "data-cursor-video",
                                enterAction: "setPlay",
                                leaveAction: "removePlay",
                                args: ""
                            },
                            {
                                selectors: "data-cursor-stick",
                                enterAction: "setStick",
                                leaveAction: "removeStick",
                                args: ""
                            }],
                        t.stick = !1,
                        t.xCord = 0,
                        t.yCord = 0,
                        t
                }
                return Object(r.a)(o, [{
                    key: "mounted",
                    value: function() {
                        var t = this;
                        this.$nextTick((function() {
                            t.init()
                        }))
                    }
                },
                    {
                        key: "init",
                        value: function() {
                            this.cursorEl = this.$refs.cursorEl,
                                this.appBodyEl = document.querySelector("body"),
                                this.move(0, 0, 0),
                                this.cursorEl.classList.add("sw-cursor--cursor"),
                            this.appBodyEl && (this.appBodyEl.addEventListener("mousedown", this.handleMousedown.bind(this)), this.appBodyEl.addEventListener("mousemove", this.handleMousemove.bind(this)), this.appBodyEl.addEventListener("mouseup", this.handleMouseup.bind(this)), this.appBodyEl.addEventListener("mouseenter", this.handleMouseenter.bind(this), !0), this.appBodyEl.addEventListener("mouseleave", this.handleMouseleave.bind(this), !0))
                        }
                    },
                    {
                        key: "handleMousemove",
                        value: function(t) {
                            this.stick && "object" === Object(m.a)(this.stick) ? (this.xCord = this.stick.xCord - .15 * (this.stick.xCord - t.clientX), this.yCord = this.stick.yCord - .15 * (this.stick.yCord - t.clientY)) : (this.xCord = t.clientX, this.yCord = t.clientY),
                                this.update()
                        }
                    },
                    {
                        key: "handleMouseenter",
                        value: function(t) {
                            if (t) {
                                var e = t.target;
                                e && this.handleEnterLeaveAction(e, "enterAction")
                            }
                        }
                    },
                    {
                        key: "handleMouseleave",
                        value: function(t) {
                            if (t) {
                                var e = t.target;
                                e && this.handleEnterLeaveAction(e, "leaveAction")
                            }
                        }
                    },
                    {
                        key: "handleEnterLeaveAction",
                        value: function(t, e) {
                            var o = this,
                                n = [];
                            if (t) {
                                var r = t.tagName.toLowerCase();
                                this.actionItems.forEach((function(l) { (n = l.selectors.split(",")).includes(r) && o.doAction(l[e], l.args, t),
                                t.getAttribute(n[0]) && o.doAction(l[e], l.args, t)
                                }))
                            }
                        }
                    },
                    {
                        key: "doAction",
                        value: function(t, e, o) {
                            switch (t) {
                                case "setState":
                                    this.setState(e);
                                    break;
                                case "removeState":
                                    this.removeState(e);
                                    break;
                                case "setText":
                                    if (o) {
                                        var text = o.getAttribute(e);
                                        this.setText(text || "")
                                    }
                                    break;
                                case "removeText":
                                    this.removeText();
                                    break;
                                case "setPlay":
                                    this.setPlay();
                                    break;
                                case "removePlay":
                                    this.removePlay()
                            }
                        }
                    },
                    {
                        key: "handleMouseup",
                        value: function() {
                            this.removeState("sw-cursor--active")
                        }
                    },
                    {
                        key: "handleMousedown",
                        value: function() {
                            this.setState("sw-cursor--active")
                        }
                    },
                    {
                        key: "setState",
                        value: function(t) {
                            this.cursorEl && this.cursorEl.classList.add(t)
                        }
                    },
                    {
                        key: "removeState",
                        value: function(t) {
                            this.cursorEl && this.cursorEl.classList.remove(t)
                        }
                    },
                    {
                        key: "setPlay",
                        value: function() {
                            this.setState("sw-cursor--video")
                        }
                    },
                    {
                        key: "removePlay",
                        value: function() {
                            this.removeState("sw-cursor--video")
                        }
                    },
                    {
                        key: "setText",
                        value: function(text) {
                            if (this.cursorEl) {
                                var t = this.cursorEl.querySelector(".sw-cursor__text");
                                t && (t.textContent = text)
                            }
                        }
                    },
                    {
                        key: "removeText",
                        value: function() {
                            this.cursorEl && this.cursorEl.classList.remove("sw-cursor--text sw-cursor--buy")
                        }
                    },
                    {
                        key: "setStick",
                        value: function(t) {
                            if (t) {
                                var rect = t.getBoundingClientRect();
                                this.stick = {
                                    xCord: rect.left + rect.height / 2,
                                    yCord: rect.left + rect.width / 2
                                },
                                    this.move(this.stick.xCord, this.stick.yCord, 10)
                            }
                        }
                    },
                    {
                        key: "removeStick",
                        value: function() {
                            this.stick = !1
                        }
                    },
                    {
                        key: "update",
                        value: function() {
                            var t = this;
                            requestAnimationFrame((function() {
                                t.appBodyEl && (t.xCord < t.threshold || t.yCord < t.threshold || t.yCord > t.appBodyEl.clientHeight - t.threshold ? t.hide() : t.show(), t.move(null, null, null))
                            }))
                        }
                    },
                    {
                        key: "show",
                        value: function() {
                            this.visible || (this.move(this.xCord, this.yCord, 0), this.cursorEl && this.cursorEl.classList.add("sw-cursor--visible"), this.visible = !0)
                        }
                    },
                    {
                        key: "hide",
                        value: function() {
                            this.visible && (this.cursorEl && this.cursorEl.classList.remove("sw-cursor--visible"), this.visible = !1)
                        }
                    },
                    {
                        key: "reset",
                        value: function() {
                            this.removePlay(),
                                this.removeText(),
                                this.removeState("sw-cursor--pointer sw-cursor--text sw-cursor--buy sw-cursor--video sw-cursor--nav sw-cursor--inverse")
                        }
                    },
                    {
                        key: "move",
                        value: function(t, e, o) {
                            h.a.to(this.cursorEl, o || this.speed, {
                                x: t || this.xCord,
                                y: e || this.yCord,
                                force3D: !0,
                                overwrite: !0,
                                ease: "power3.out"
                            })
                        }
                    }]),
                    o
            } (f.d),
            y = w = v([Object(f.a)({})], w),
            _ = (o(365), o(5)),
            component = Object(_.a)(y, (function() {
                var t = this,
                    e = t._self._c;
                t._self._setupProxy;
                return e("div", {
                        ref: "cursorEl",
                        staticClass: "sw-cursor sw-cursor--visible",
                        staticStyle: {
                            transform: "translate3d(485px, 452px, 0)"
                        }
                    },
                    [t._m(0)])
            }), [function() {
                var t = this,
                    e = t._self._c;
                t._self._setupProxy;
                return e("div", {
                        staticClass: "sw-cursor-wrapper"
                    },
                    [e("div", {
                        staticClass: "sw-cursor__point"
                    }), t._v(" "), e("div", {
                        staticClass: "sw-cursor__text"
                    }), t._v(" "), e("div", {
                            staticClass: "sw-cursor__media"
                        },
                        [e("div", {
                                staticClass: "sw-cursor__media-box"
                            },
                            [e("div")])]), t._v(" "), e("div", {
                        staticClass: "sw-cursor__outline"
                    })])
            }], !1, null, null, null);
        e.
            default = component.exports
    },
    , , , , , , , ,
    function(t, e, o) {
        "use strict";
        o.r(e);
        o(22);
        var n = o(8),
            r = o(9),
            l = o(11),
            d = o(12),
            c = o(2),
            m = o(4),
            f = (o(18), o(10), o(41), o(52), o(0)),
            h = o(120),
            x = o(118);
        function v(t) {
            var e = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return ! 1;
                if (Reflect.construct.sham) return ! 1;
                if ("function" == typeof Proxy) return ! 0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))),
                        !0
                } catch(t) {
                    return ! 1
                }
            } ();
            return function() {
                var o, n = Object(c.a)(t);
                if (e) {
                    var r = Object(c.a)(this).constructor;
                    o = Reflect.construct(n, arguments, r)
                } else o = n.apply(this, arguments);
                return Object(d.a)(this, o)
            }
        }
        var w = function(t, e, o, desc) {
                var n, r = arguments.length,
                    l = r < 3 ? e: null === desc ? desc = Object.getOwnPropertyDescriptor(e, o) : desc;
                if ("object" === ("undefined" == typeof Reflect ? "undefined": Object(m.a)(Reflect)) && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, e, o, desc);
                else for (var i = t.length - 1; i >= 0; i--)(n = t[i]) && (l = (r < 3 ? n(l) : r > 3 ? n(e, o, l) : n(e, o)) || l);
                return r > 3 && l && Object.defineProperty(e, o, l),
                    l
            },
            y = function(t) {
                Object(l.a)(o, t);
                var e = v(o);
                function o() {
                    var t;
                    return Object(n.a)(this, o),
                        (t = e.apply(this, arguments)).isAndroidDevice = !0,
                        t
                }
                return Object(r.a)(o, [{
                    key: "mounted",
                    value: function() {
                        this.isAndroidDevice = navigator.userAgent.toLowerCase().includes("android")
                    }
                }]),
                    o
            } (f.d);
        w([Object(f.c)({
            type: Boolean,
            default:
                !1
        })], y.prototype, "isSuper", void 0),
            w([Object(f.c)({
                type: Boolean,
                default:
                    !0
            })], y.prototype, "showTextTile", void 0),
            w([Object(f.c)({
                type: Boolean,
                default:
                    !1
            })], y.prototype, "isHindi", void 0),
            w([Object(f.c)({
                type: Boolean,
                default:
                    !1
            })], y.prototype, "isOfferDetailPage", void 0);
        var _ = y = w([Object(f.a)({
                components: {
                    SendMobileLink: x.
                        default,
                    AppDownloadButton: h.
                        default
                }
            })], y),
            k = (o(386), o(5)),
            component = Object(k.a)(_, (function() {
                var t = this,
                    e = t._self._c;
                t._self._setupProxy;
                return e("div", {
                        staticClass: "position-fixed apk-download-wrapper-footer apk-download bottom-0 left-0 h-88 d-flex flex-col justify-content-between gutter-4 duration-300 transition-transform"
                    },
                    [t.isOfferDetailPage ? t._e() : e("div", {
                            staticClass: "md:d-none bg-secondary position-relative"
                        },
                        [e("div", {
                                staticClass: "container container--box h-full gutter-3"
                            },
                            [e("div", {
                                    staticClass: "row h-full align-items-center pb-12 pt-32"
                                },
                                [e("div", {
                                        staticClass: "position-absolute mobile-download-btn"
                                    },
                                    [e("app-download-button", {
                                        attrs: {
                                            "is-hindi": t.isHindi,
                                            "is-super": t.isSuper,
                                            "app-button-style": {
                                                "border-radius-62": !0,
                                                "border-radius-6": !1
                                            }
                                        }
                                    })], 1), t._v(" "), e("div", {
                                        staticClass: "col col--12"
                                    },
                                    [t.showTextTile ? e("p", {
                                            staticClass: "font-12 font-500 mt-8 text-yellow text-center"
                                        },
                                        [t._v("🔥 Get 125% Cash Bonus on 1st Add Cash up to ₹18,750 + ₹500 Extra Cash")]) : t._e()])])])]), t._v(" "), e("div", {
                            staticClass: "d-none md:d-block bg-primary p-26"
                        },
                        [e("div", {
                                staticClass: "container container--box h-full"
                            },
                            [e("div", {
                                    staticClass: "row h-full align-items-center"
                                },
                                [e("div", {
                                        staticClass: "col col--12 d-flex align-items-center"
                                    },
                                    [e("div", {
                                            staticClass: "d-flex flex-1 align-items-center justify-content-between"
                                        },
                                        [t._m(0), t._v(" "), e("div", {
                                                staticClass: "flex-shrink-0"
                                            },
                                            [e("send-mobile-link", {
                                                attrs: {
                                                    "button-style": {
                                                        "h-48": !1,
                                                        "h-54": !0,
                                                        "border-radius-5": !0,
                                                        "border-radius-12": !1
                                                    },
                                                    "input-style": "h-54 border-radius-5",
                                                    "root-class": {
                                                        "h-48": !1,
                                                        "h-54": !0,
                                                        "h-60": !1,
                                                        "border-radius-5": !0
                                                    }
                                                }
                                            })], 1), t._v(" "), t._m(1)])])])])])])
            }), [function() {
                var t = this._self._c;
                this._self._setupProxy;
                return t("div", {
                        staticClass: "flex-shrink-0"
                    },
                    [t("img", {
                        staticClass: "h-auto",
                        attrs: {
                            loading: "lazy",
                            src: "/img/logo/logo.png",
                            width: "178px",
                            height: "32px"
                        }
                    })])
            },
                function() {
                    var t = this,
                        e = t._self._c;
                    t._self._setupProxy;
                    return e("div", {
                            staticClass: "flex-shrink-0"
                        },
                        [e("ul", {
                                staticClass: "d-flex mb-0"
                            },
                            [e("li", [e("a", {
                                    staticClass: "d-inline-block transition-all align-self-start line-effect duration-500 text-white text-cyan:hover mr-64",
                                    attrs: {
                                        href: "/faq/",
                                        "exact-active-class": "text-cyan nuxt-link-exact-active"
                                    }
                                },
                                [e("span", {
                                        staticClass: "font-400 font-18 line-height-24"
                                    },
                                    [t._v("FAQ")])])]), t._v(" "), e("li", [e("a", {
                                    staticClass: "d-inline-block transition-all align-self-start line-effect duration-500 text-white text-cyan:hover mr-64",
                                    attrs: {
                                        href: "/offers/",
                                        "exact-active-class": "text-cyan nuxt-link-exact-active"
                                    }
                                },
                                [e("span", {
                                        staticClass: "font-400 font-18 line-height-24"
                                    },
                                    [t._v("Offers")])])]), t._v(" "), e("li", [e("a", {
                                    staticClass: "d-inline-block transition-all align-self-start line-effect duration-500 text-white text-cyan:hover",
                                    attrs: {
                                        href: "/game/#/login",
                                        "exact-active-class": "text-cyan nuxt-link-exact-active"
                                    }
                                },
                                [e("span", {
                                        staticClass: "font-400 font-18 line-height-24"
                                    },
                                    [t._v("Login")])])])])])
                }], !1, null, null, null);
        e.
            default = component.exports
    },
    , , , , , , , , , ,
    function(t, e, o) {
        "use strict";
        function n(element, t) {
            if (element.closest) return element.closest(t);
            for (var e = element; e;) {
                if (this.matches(e, t)) return e;
                e = e.parentElement
            }
            return null
        }
        function r(element, t) {
            return (element.matches || element.webkitMatchesSelector || element.msMatchesSelector).call(element, t)
        }
        o.d(e, "a", (function() {
            return n
        })),
            o.d(e, "b", (function() {
                return r
            }))
    },
    function(t, e, o) {
        "use strict";
        o.d(e, "a", (function() {
            return n
        }));
        o(53);
        var n = function t(e) {
            "function" == typeof ga && void 0 !== window.google_tag_manager ? ga.getAll()[0].send("event", e.category, e.action, e.label) : setTimeout((function() {
                t(e)
            }), 5e3)
        }
    },
    , , , , , , , , , , , , , , , ,
    function(t, e, o) {
        "use strict";
        o.r(e);
        o(22);
        var n = o(25),
            r = o(8),
            l = o(9),
            d = o(11),
            c = o(12),
            m = o(2),
            f = o(4),
            h = (o(83), o(18), o(10), o(154), o(37), o(67), o(53), o(0));
        function x(t) {
            var e = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return ! 1;
                if (Reflect.construct.sham) return ! 1;
                if ("function" == typeof Proxy) return ! 0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))),
                        !0
                } catch(t) {
                    return ! 1
                }
            } ();
            return function() {
                var o, n = Object(m.a)(t);
                if (e) {
                    var r = Object(m.a)(this).constructor;
                    o = Reflect.construct(n, arguments, r)
                } else o = n.apply(this, arguments);
                return Object(c.a)(this, o)
            }
        }
        var v = function(t, e, o, desc) {
                var n, r = arguments.length,
                    l = r < 3 ? e: null === desc ? desc = Object.getOwnPropertyDescriptor(e, o) : desc;
                if ("object" === ("undefined" == typeof Reflect ? "undefined": Object(f.a)(Reflect)) && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, e, o, desc);
                else for (var i = t.length - 1; i >= 0; i--)(n = t[i]) && (l = (r < 3 ? n(l) : r > 3 ? n(e, o, l) : n(e, o)) || l);
                return r > 3 && l && Object.defineProperty(e, o, l),
                    l
            },
            w = function(t) {
                Object(d.a)(c, t);
                var e, o = x(c);
                function c() {
                    var t;
                    return Object(r.a)(this, c),
                        (t = o.apply(this, arguments)).localError = null,
                        t.getAppLinkSuccess = !1,
                        t.isFetching = !1,
                        t.formInput = {
                            mobile: ""
                        },
                        t
                }
                return Object(l.a)(c, [{
                    key: "checkNum",
                    value: function() {
                        var t = new RegExp("^[6-9]\\d{9}$");
                        if (this.formInput.mobile) {
                            var e = t.test(this.formInput.mobile);
                            return this.localError = e ? "": "Please enter a valid 10 digit mobile number",
                                e
                        }
                        return this.localError = "",
                            !1
                    }
                },
                    {
                        key: "onMobileNumberSubmit",
                        value: (e = Object(n.a)(regeneratorRuntime.mark((function t() {
                            var e = this;
                            return regeneratorRuntime.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (this.checkNum()) {
                                            t.next = 2;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 2:
                                        return this.isFetching = !0,
                                            t.prev = 3,
                                            t.next = 6,
                                            this.$axios.$post("https://www.yonogames.com/api/user/sendAppDownloadLinkV1", {
                                                mobile: this.formInput.mobile
                                            });
                                    case 6:
                                        t.sent.status.success && (this.$nextTick((function() {
                                            e.$bus.$emit("showDownloadWebApp", {
                                                show: !0
                                            })
                                        })), this.getAppLinkSuccess = !0, setTimeout((function() {
                                            e.getAppLinkSuccess = !1,
                                                e.getAppLinkSuccess = !1,
                                                e.formInput.mobile = ""
                                        }), 7e3)),
                                            t.next = 14;
                                        break;
                                    case 10:
                                        t.prev = 10,
                                            t.t0 = t.
                                            catch(3),
                                            console.log(t.t0),
                                            this.localError = "Unable to send download link right now.";
                                    case 14:
                                        this.isFetching = !1;
                                    case 15:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this, [[3, 10]])
                        }))),
                            function() {
                                return e.apply(this, arguments)
                            })
                    }]),
                    c
            } (h.d);
        v([Object(h.c)({
            type: Object,
            default:
                function() {
                    return {}
                }
        })], w.prototype, "buttonStyle", void 0),
            v([Object(h.c)({
                type: Object,
                default:
                    function() {
                        return {}
                    }
            })], w.prototype, "rootClass", void 0),
            v([Object(h.c)({
                type: [String, Object],
                default:
                    function() {
                        return {}
                    }
            })], w.prototype, "inputStyle", void 0),
            v([Object(h.c)({
                type: [String, Object],
                default:
                    function() {
                        return {}
                    }
            })], w.prototype, "formOuter", void 0);
        var y = w = v([Object(h.a)({
                components: {}
            })], w),
            _ = o(5),
            component = Object(_.a)(y, (function() {
                var t = this,
                    e = t._self._c;
                t._self._setupProxy;
                return e("div", [t.getAppLinkSuccess ? t._e() : e("form", {
                        staticClass: "d-none send-link-form md:d-flex",
                        class: t.formOuter,
                        on: {
                            submit: function(e) {
                                return e.preventDefault(),
                                    t.onMobileNumberSubmit.apply(null, arguments)
                            }
                        }
                    },
                    [e("AppTextField", {
                        staticClass: "mr-16 border-radius-5 overflow-hidden",
                        staticStyle: {
                            width: "300px",
                            "max-width": "100%"
                        },
                        attrs: {
                            "root-class": t.rootClass,
                            "input-class": t.inputStyle,
                            required: !0,
                            uid: "mobile-landing'",
                            type: "tel",
                            name: "mobile",
                            placeholder: "Enter 10 digit mobile number",
                            "helper-text": t.localError
                        },
                        on: {
                            input: t.checkNum
                        },
                        model: {
                            value: t.formInput.mobile,
                            callback: function(e) {
                                t.$set(t.formInput, "mobile", e)
                            },
                            expression: "formInput.mobile"
                        }
                    }), t._v(" "), t.isFetching ? t._e() : e("button", {
                            staticClass: "d-flex font-20 send-link-button font-600 align-items-center overflow-hidden justify-content-center button--lg border-1 border-white text-white button gradiant-green pl-20 pr-20",
                            class: t.buttonStyle,
                            attrs: {
                                type: "submit"
                            }
                        },
                        [e("span", {
                            staticClass: "apk-download-button__bg position-absolute w-full h-full top-0 left-0"
                        }), t._v(" "), e("span", {
                                staticClass: "button__label"
                            },
                            [t._v("Get Download Link")])]), t._v(" "), t.isFetching ? e("button", {
                            staticClass: "d-flex send-link-button align-items-center bg-green overflow-hidden justify-content-center button--lg border-1 border-white text-white font-24 font-600 button gradiant-green pl-20 pr-20",
                            class: t.buttonStyle,
                            attrs: {
                                type: "button"
                            }
                        },
                        [e("span", {
                            staticClass: "apk-download-button__bg position-absolute w-full h-full top-0 left-0"
                        }), t._v(" "), e("img", {
                            attrs: {
                                src: "/img/loader.svg",
                                height: "24",
                                width: "24",
                                alt: "loader"
                            }
                        })]) : t._e()], 1), t._v(" "), t.getAppLinkSuccess ? e("div", {
                        staticClass: "d-none md:d-flex align-items-center mt-32 pb-12"
                    },
                    [e("img", {
                        attrs: {
                            src: "/img/check_circle.svg",
                            width: "32",
                            height: "32",
                            alt: "check"
                        }
                    }), t._v(" "), e("span", {
                            staticClass: "font-subtitle line-height-24 ml-12"
                        },
                        [t._v("App link has been sent to your phone. Download now!")])]) : t._e()])
            }), [], !1, null, null, null);
        e.
            default = component.exports
    },
    ,
    function(t, e, o) {
        "use strict";
        o.r(e);
        o(22),
            o(38),
            o(30),
            o(40),
            o(26),
            o(50);
        var n = o(23),
            r = o(8),
            l = o(9),
            d = o(11),
            c = o(12),
            m = o(2),
            f = o(4),
            h = (o(18), o(10), o(41), o(52), o(53), o(42), o(48), o(287), o(189), o(37), o(170), o(169), o(0)),
            x = o(264),
            v = o(101);
        o(186),
            o(87),
            o(88),
            o(154),
            o(67),
            o(54),
            o(47),
            o(72),
            o(61),
            o(73);
        function w(t, e) {
            var o = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
            if (!o) {
                if (Array.isArray(t) || (o = function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return y(t, e);
                    var o = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === o && t.constructor && (o = t.constructor.name);
                    if ("Map" === o || "Set" === o) return Array.from(t);
                    if ("Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)) return y(t, e)
                } (t)) || e && t && "number" == typeof t.length) {
                    o && (t = o);
                    var i = 0,
                        n = function() {};
                    return {
                        s: n,
                        n: function() {
                            return i >= t.length ? {
                                done: !0
                            }: {
                                done: !1,
                                value: t[i++]
                            }
                        },
                        e: function(t) {
                            throw t
                        },
                        f: n
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var r, l = !0,
                d = !1;
            return {
                s: function() {
                    o = o.call(t)
                },
                n: function() {
                    var t = o.next();
                    return l = t.done,
                        t
                },
                e: function(t) {
                    d = !0,
                        r = t
                },
                f: function() {
                    try {
                        l || null == o.
                            return || o.
                        return ()
                    } finally {
                        if (d) throw r
                    }
                }
            }
        }
        function y(t, e) { (null == e || e > t.length) && (e = t.length);
            for (var i = 0,
                     o = new Array(e); i < e; i++) o[i] = t[i];
            return o
        }
        var _ = function() {
                function t() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        o = e.oneLinkURL,
                        n = void 0 === o ? "https://gamezy.onelink.me/QDz5": o,
                        l = e.pidKeysList,
                        d = void 0 === l ? [] : l,
                        c = e.pidStaticValue,
                        m = void 0 === c ? null: c,
                        f = e.campaignKeysList,
                        h = void 0 === f ? [] : f,
                        x = e.campaignStaticValue,
                        v = void 0 === x ? null: x,
                        w = e.pidOverrideList,
                        y = void 0 === w ? [] : w,
                        _ = e.gclIdParam,
                        k = void 0 === _ ? "af_sub5": _;
                    if (Object(r.a)(this, t), console.debug("Constructing OneLink URL generator"), void 0 === n || "string" != typeof n || "" === n) return console.error("OneLinkUrlGenerator: oneLinkURL arg invalid"),
                        null;
                    this.oneLinkURL = n,
                        this.pidOverrideList = y,
                        this.gclIdParam = k,
                        this.pidKeysList = d,
                        this.pidStaticValue = m,
                        this.campaignKeysList = h,
                        this.campaignStaticValue = v,
                        this.campaign = this.getCampaignValue(this.campaignKeysList, this.campaignStaticValue),
                        this.mediaSource = this.getMediaSourceValue(this.pidKeysList, this.pidStaticValue, this.pidOverrideList),
                        this.afParams = {
                            af_js_web: "true"
                        }
                }
                return Object(l.a)(t, [{
                    key: "generateUrl",
                    value: function() {
                        if (null == this.mediaSource) return console.debug("No valid pid value was found. URL will not be changed"),
                            null;
                        if (this.getParameterFromURL("af_redirect")) return console.debug("This user comes from AppsFlyer by redirection and is ready to be attributed. \nKeep direct app store links."),
                            null;
                        if ((document.referrer && "" !== document.referrer || document.referrer.match(/^https?:\/\/([^\/]+\.)?facebook\.com(\/|$)/i)) && document.referrer.toLowerCase().includes("facebook")) return console.debug("This user comes from a paid Facebook ad - don't do anything. \nKeep direct app store links."),
                            null;
                        if (this.getParameterFromURL("af_siteid")) return console.debug("This user comes from a paid Campaign - don't do anything. \nKeep direct app store links."),
                            null;
                        var t = this.mediaSource,
                            e = this.getParameterFromURL("gclid");
                        if (e) {
                            this.afParams[this.gclIdParam] = e,
                                console.debug("This user comes from Google AdWords");
                            var o = this.getParameterFromURL("keyword");
                            o && (this.afParams.af_keywords = o, console.debug("There is a keyword associated with the ad"))
                        } else console.debug("This user comes from SRN or custom network ");
                        var n = this.oneLinkURL + "?pid=" + t + "&c=" + this.campaign +
                            function(t) {
                                for (var e = "",
                                         o = 0,
                                         n = Object.keys(t); o < n.length; o++) {
                                    var r = n[o];
                                    console.debug(r + "->" + t[r]),
                                    null != t[r] && (e += "&".concat(r, "=").concat(t[r]))
                                }
                                return e
                            } (this.afParams);
                        return console.debug("Generated OneLink URL ".concat(n)),
                            n
                    }
                },
                    {
                        key: "setDeepLinkValue",
                        value: function(t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                            this.setGenericParameter(this.afParams, "deep_link_value", t, e)
                        }
                    },
                    {
                        key: "setChannel",
                        value: function(t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                            this.setGenericParameter(this.afParams, "af_channel", t, e)
                        }
                    },
                    {
                        key: "setAdset",
                        value: function(t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                            this.setGenericParameter(this.afParams, "af_adset", t, e)
                        }
                    },
                    {
                        key: "setGenericParameter",
                        value: function(t, e, o) {
                            var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                                r = this.getParameterFromURL(o);
                            r ? (t[e] = r, console.debug("".concat(o, " found. ").concat(e, " = ").concat(r))) : null != n ? (t[e] = n, console.debug("".concat(o, " not found. ").concat(e, " = ").concat(n))) : console.debug("".concat(o, " not found and newParamValue is null. Skipping."))
                        }
                    },
                    {
                        key: "getParameterFromURL",
                        value: function(t) {
                            var e = window.location.href;
                            t = t.replace(/[\\[\]]/g, "\\$&");
                            var o = new RegExp("[?&]" + t + "(=([^&#]*)|&|#|$)").exec(e);
                            return o ? o[2] ? decodeURIComponent(o[2].replace(/\+/g, " ")) : "": null
                        }
                    },
                    {
                        key: "getMediaSourceValue",
                        value: function(t, e, o) {
                            var n, r = null,
                                l = w(t);
                            try {
                                for (l.s(); ! (n = l.n()).done;) {
                                    var d = n.value;
                                    null != d && this.getParameterFromURL(d) && (r = this.getParameterFromURL(d))
                                }
                            } catch(t) {
                                l.e(t)
                            } finally {
                                l.f()
                            }
                            return null != r ? o && o.hasOwnProperty(r) && (r = o[r]) : r = e,
                                r
                        }
                    },
                    {
                        key: "getCampaignValue",
                        value: function(t, e) {
                            var o, n = w(t);
                            try {
                                for (n.s(); ! (o = n.n()).done;) {
                                    var r = o.value;
                                    if (this.getParameterFromURL(r)) return this.getParameterFromURL(r)
                                }
                            } catch(t) {
                                n.e(t)
                            } finally {
                                n.f()
                            }
                            return null != e ? e: document.getElementsByTagName("title")[0] ? document.getElementsByTagName("title")[0].innerText: "unknown"
                        }
                    },
                    {
                        key: "setUtmTerm",
                        value: function(t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                            this.setGenericParameter(this.afParams, "af_ad", t, e)
                        }
                    },
                    {
                        key: "setAd",
                        value: function(t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                            this.setGenericParameter(this.afParams, "af_ad", t, e)
                        }
                    },
                    {
                        key: "setAfSub1",
                        value: function(t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                            this.setGenericParameter(this.afParams, "af_sub1", t, e)
                        }
                    },
                    {
                        key: "setAfSub2",
                        value: function(t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                            this.setGenericParameter(this.afParams, "this.afParams, af_sub2", t, e)
                        }
                    },
                    {
                        key: "setAfSub3",
                        value: function(t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                            this.setGenericParameter(this.afParams, "af_sub3", t, e)
                        }
                    },
                    {
                        key: "setAfSub4",
                        value: function(t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                            this.setGenericParameter(this.afParams, "af_sub4", t, e)
                        }
                    },
                    {
                        key: "setAfSub5",
                        value: function(t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                            this.setGenericParameter(this.afParams, "af_sub5", t, e)
                        }
                    },
                    {
                        key: "setCustomParameter",
                        value: function(t, e) {
                            var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                            this.setGenericParameter(this.afParams, e, t, o)
                        }
                    },
                    {
                        key: "setCustomKeyValue",
                        value: function(t, e) {
                            this.afParams[t] = e
                        }
                    }]),
                    t
            } (),
            k = o(279);
        function A(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(object);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(object, t).enumerable
                }))),
                    e.push.apply(e, o)
            }
            return e
        }
        function C(t) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? A(Object(source), !0).forEach((function(e) {
                    Object(n.a)(t, e, source[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : A(Object(source)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                }))
            }
            return t
        }
        function O(t) {
            var e = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return ! 1;
                if (Reflect.construct.sham) return ! 1;
                if ("function" == typeof Proxy) return ! 0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))),
                        !0
                } catch(t) {
                    return ! 1
                }
            } ();
            return function() {
                var o, n = Object(m.a)(t);
                if (e) {
                    var r = Object(m.a)(this).constructor;
                    o = Reflect.construct(n, arguments, r)
                } else o = n.apply(this, arguments);
                return Object(c.a)(this, o)
            }
        }
        var j = function(t, e, o, desc) {
                var n, r = arguments.length,
                    l = r < 3 ? e: null === desc ? desc = Object.getOwnPropertyDescriptor(e, o) : desc;
                if ("object" === ("undefined" == typeof Reflect ? "undefined": Object(f.a)(Reflect)) && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, e, o, desc);
                else for (var i = t.length - 1; i >= 0; i--)(n = t[i]) && (l = (r < 3 ? n(l) : r > 3 ? n(e, o, l) : n(e, o)) || l);
                return r > 3 && l && Object.defineProperty(e, o, l),
                    l
            },
            P = function(t) {
                Object(d.a)(o, t);
                var e = O(o);
                function o() {
                    var t;
                    return Object(r.a)(this, o),
                        (t = e.apply(this, arguments)).oneLinkURL = "https://gamezy.onelink.me/QDz5",
                        t.selfHostedApkLink = "https://dl.gamezy.com/app-download/gamezy-armeabi-v7a.apk",
                        t.isAndroidDevice = !0,
                        t.firstTimeRendered = !0,
                        t.clickDisabledTimer = null,
                        t.superDownload = {
                            active: !1,
                            failed: !1,
                            progress: 0,
                            completed: !1
                        },
                        t
                }
                return Object(l.a)(o, [{
                    key: "computedAppButtonClass",
                    get: function() {
                        return C(C({},
                                this.AppButtonStyle), {},
                            {
                                "download-app-button--progress-active": this.superDownload.active,
                                "download-app-button--progress-failed": this.superDownload.failed
                            })
                    }
                },
                    {
                        key: "mounted",
                        value: function() {
                            this.isAndroidDevice = navigator.userAgent.toLowerCase().includes("android"),
                                this.$nuxt.$on("SuperDownloadStart", this.onSuperDownloadStart),
                                this.$nuxt.$on("SuperDownloadProgress", this.onSuperDownloadProgress),
                                this.$nuxt.$on("SuperDownloadEnd", this.onSuperDownloadEnd),
                                this.$nuxt.$on("SuperDownloadFailed", this.onSuperDownloadFailed),
                            this.isLiteApp() && (this.selfHostedApkLink = "https://dl.gamezy.com/app-download/gamezy-lite-armeabi-v7a.apk")
                        }
                    },
                    {
                        key: "onSuperDownloadStart",
                        value: function() {
                            this.$set(this.superDownload, "active", !0)
                        }
                    },
                    {
                        key: "onSuperDownloadProgress",
                        value: function(t) {
                            this.$set(this.superDownload, "progress", t.detail.progress)
                        }
                    },
                    {
                        key: "onSuperDownloadEnd",
                        value: function() {
                            var t = this;
                            setTimeout((function() {
                                t.$set(t.superDownload, "active", !1),
                                    t.$set(t.superDownload, "failed", !1),
                                    t.$set(t.superDownload, "progress", 0),
                                t.firstTimeRendered && t.$nuxt.$emit("downloadAppDialogToggleEvent", !0)
                            }), 1500)
                        }
                    },
                    {
                        key: "onSuperDownloadFailed",
                        value: function() {
                            this.$set(this.superDownload, "active", !1),
                                this.$set(this.superDownload, "failed", !0)
                        }
                    },
                    {
                        key: "onDownloadApkClicked",
                        value: function() {
                            var t = this;
                            this.clickDisabledTimer || (this.isSuper || (this.clickDisabledTimer = setTimeout((function() {
                                t.clickDisabledTimer = null
                            }), 1e3)), this.superDownload.active && !this.superDownload.failed || this.triggerApkDownload())
                        }
                    },
                    {
                        key: "onRestartDownload",
                        value: function() {}
                    },
                    {
                        key: "doSuperDownload",
                        value: function(t) {
                            var e = this;
                            this.$nuxt.$emit("SuperDownloadStart");
                            var o = function(t) {
                                return t.preventDefault(),
                                    t.returnValue = "App download is in progress. Do you really want close this window?",
                                    "App download is in progress. Do you really want close this window?"
                            };
                            window.addEventListener("beforeunload", o, !0),
                                this.$axios.get(t, {
                                    responseType: "blob",
                                    headers: {
                                        "Access-Control-Allow-Origin": "*"
                                    },
                                    onDownloadProgress: function(t) {
                                        var o = parseFloat(t.total),
                                            n = t.loaded,
                                            progress = Math.floor(n / o * 100);
                                        e.$nuxt.$emit("SuperDownloadProgress", {
                                            detail: {
                                                progress: progress
                                            },
                                            bubbles: !0,
                                            cancelable: !0,
                                            composed: !1
                                        })
                                    }
                                }).then((function(t) {
                                    var n = new File([t.data], "gamezy-latest-sd.apk", {
                                        type: "application/vnd.android.package-archive"
                                    });
                                    x.saveAs.saveAs(n),
                                        new Audio("https://widget-v4.tidiochat.com//tururu.mp3").play(),
                                        window.removeEventListener("beforeunload", o),
                                        Object(v.a)({
                                            event_category: "SuperDownloadSuccess",
                                            event_action: "Download success",
                                            event_label: window.location.href
                                        }),
                                        e.$nuxt.$emit("SuperDownloadEnd")
                                })).
                                catch((function() {
                                    Object(v.a)({
                                        event_category: "SuperDownloadFailed",
                                        event_action: "Download failed",
                                        event_label: window.location.href
                                    }),
                                        e.$nuxt.$emit("SuperDownloadFailed")
                                }))
                        }
                    },
                    {
                        key: "downloadFileViaLink",
                        value: function(t) {
                            var e = this;
                            this.$nuxt.$emit("downloadAppDialogToggleEvent", !0),
                                this.$nextTick((function() {
                                    e.$imgObserver()
                                }));
                            var a = document.createElement("a");
                            a.style.display = "none",
                                a.id = "fb-hck",
                                document.body.appendChild(a),
                                a.href = t,
                                a.setAttribute("download", "gamezy.apk"),
                                a.click(),
                                window.URL.revokeObjectURL(a.href),
                                document.body.removeChild(a)
                        }
                    },
                    {
                        key: "isLiteApp",
                        value: function() {
                            return "lt" === new URLSearchParams(window.location.search).get("lt")
                        }
                    },
                    {
                        key: "afPixel",
                        value: function(t) {
                            var img = document.createElement("img");
                            img.src = t + "&af_r=https://www.yonogames.com/1x1.png",
                                document.body.appendChild(img)
                        }
                    },
                    {
                        key: "triggerApkDownload",
                        value: function() {
                            var t = new _({
                                oneLinkURL: this.oneLinkURL,
                                pidKeysList: ["af_pid", "pid", "utm_source"],
                                campaignKeysList: ["af_c", "utm_campaign", "c", "title"]
                            });
                            t.setDeepLinkValue("original_url_deeplinkvalue"),
                                t.setChannel("original_url_channel"),
                                t.setAdset("adset"),
                                t.setAdset("utm_adset"),
                                t.setAdset("utm_adgroup"),
                                t.setUtmTerm("utm_term"),
                                t.setAd("utm_keyword"),
                                t.setAd("utm_content"),
                                t.setAfSub1("original_url_sub1"),
                                t.setAfSub2("original_url_sub2"),
                                t.setAfSub3("no_sub3"),
                                t.setAfSub4("original_url_sub4"),
                                t.setAfSub5("neverfind_sub5"),
                                t.setCustomParameter("original_url_siteId"),
                            this.isSuper && t.setCustomKeyValue("super_download", !0),
                                this.isLiteApp() ? (t.setCustomKeyValue("used_light_app", !0), Object(v.a)({
                                    category: "lite=true",
                                    action: "Download normal app",
                                    label: "label::app-download"
                                })) : Object(v.a)({
                                    category: "lite=false",
                                    action: "Download normal app",
                                    label: "label::app-download"
                                }),
                            "/ads/exp/" === window.location.pathname && (t.setCustomKeyValue("tech_ab_testing", "NEW"), Object(v.a)({
                                category: "AbTestingNew",
                                action: "Download clicked",
                                label: window.location.href
                            }));
                            var e, o = t.generateUrl();
                            e = "https://gamezy.onelink.me/QDz5" !== this.oneLinkURL ? this.oneLinkURL: this.selfHostedApkLink,
                            o && this.afPixel(o),
                                console.debug("computedApkUrl", e),
                                this.isSuper ? this.downloadFileViaBlob(e) : this.downloadFileViaLink(e)
                        }
                    },
                    {
                        key: "downloadFileViaBlob",
                        value: function(t) {
                            var e = !0;
                            try {
                                new Blob
                            } catch(t) {
                                e = !1
                            }
                            var o = t.startsWith("appbazaar"),
                                n = t.startsWith("mimarket"),
                                r = navigator.userAgent.includes("Opera Mini"); ! e || o || r || n ? this.downloadFileViaLink(t) : this.doSuperDownload(t)
                        }
                    },
                    {
                        key: "beforeDestroy",
                        value: function() {
                            this.$nuxt.$off("SuperDownloadStart", this.onSuperDownloadStart),
                                this.$nuxt.$off("SuperDownloadProgress", this.onSuperDownloadProgress),
                                this.$nuxt.$off("SuperDownloadEnd", this.onSuperDownloadEnd),
                                this.$nuxt.$off("SuperDownloadFailed", this.onSuperDownloadFailed)
                        }
                    }]),
                    o
            } (h.d);
        j([Object(h.c)({
            type: Object,
            default:
                function() {
                    return {}
                }
        })], P.prototype, "AppButtonStyle", void 0),
            j([Object(h.c)({
                type: Boolean,
                default:
                    !1
            })], P.prototype, "isHindi", void 0),
            j([Object(h.c)({
                type: Boolean,
                default:
                    !1
            })], P.prototype, "isSuper", void 0);
        var D = P = j([Object(h.a)({
                components: {
                    PulseLoader: k.
                        default
                }
            })], P),
            R = (o(380), o(5)),
            component = Object(R.a)(D, (function() {
                var t = this,
                    e = t._self._c;
                t._self._setupProxy;
                return e("div", [t.isAndroidDevice ? e("div", {
                        staticClass: "d-flex top-download-button"
                    },
                    [e("button", {
                            staticClass: "download-btn position-relative overflow-hidden d-flex w-full align-items-center justify-content-center button--lg border-1 border-white text-white h-48 button button__label font-semi-bold font-14 download-app-button__android",
                            class: t.computedAppButtonClass,
                            attrs: {
                                "data-super": t.isSuper,
                                disabled: t.superDownload.active
                            },
                            on: {
                                click: t.onDownloadApkClicked
                            }
                        },
                        [e("span", {
                                staticClass: "pointer-none w-full h-full d-flex w-full align-items-center justify-content-center"
                            },
                            [t.clickDisabledTimer ? e("pulse-loader", {
                                staticClass: "mr-8",
                                staticStyle: {
                                    width: "30px"
                                },
                                attrs: {
                                    "style-config": {
                                        width: "8px",
                                        height: "8px",
                                        backgroundColor: "#fff"
                                    }
                                }
                            }) : e("img", {
                                staticClass: "button__img mr-10",
                                attrs: {
                                    src: "/img/android-logo.svg",
                                    alt: "download android app",
                                    height: "20",
                                    width: "20"
                                }
                            }), t._v(" "), t.isHindi ? e("span", {
                                    staticClass: "button__label font-semi-bold font-16"
                                },
                                [t._v("डाउनलोड ऐप")]) : e("span", {
                                    staticClass: "button__label font-semi-bold font-16"
                                },
                                [t._v("Download Android App")]), t._v(" "), e("span", {
                                    staticClass: "download-app-button__text-downloading opacity-0 top-0 left-0 position-absolute w-full h-full d-flex align-items-center justify-content-center"
                                },
                                [t._v(" " + t._s(t.superDownload.failed ? "Retry Download": "".concat(t.superDownload.progress, "% Downloaded")))]), t._v(" "), e("span", {
                                staticClass: "download-app-button__progress border-radius-6 position-absolute top-0 left-0 w-full h-full d-flex",
                                style: {
                                    transform: "translateX(".concat(t.superDownload.progress, "%)")
                                }
                            })], 1)])]) : e("div", {
                        staticClass: "d-flex top-download-button"
                    },
                    [e("a", {
                            staticClass: "d-flex download-btn w-full align-items-center justify-content-center button--lg border-1 border-theme-surface text-theme-secondary h-48 bg-dark button button__label font-normal download-app-button__ios",
                            class: t.AppButtonStyle,
                            attrs: {
                                href: "https://itunes.apple.com/us/app/gamezy-fantasy-cricket/id1490415018?ls=1",
                                rel: "noopener nofollow",
                                target: "_blank"
                            }
                        },
                        [e("img", {
                            staticClass: "mr-10",
                            attrs: {
                                src: "/img/apple-logo.svg",
                                alt: "download ios app",
                                height: "20",
                                width: "20"
                            }
                        }), t._v(" "), e("span", {
                                staticClass: "button__label font-normal line-height-24 font-16 text-white"
                            },
                            [t._v("Download iOS App")])])])])
            }), [], !1, null, null, null);
        e.
            default = component.exports
    },
    , , , , , , , , , , , , , , , , , , , , ,
    function(t, e, o) {
        "use strict";
        o.r(e);
        var n = o(23),
            r = o(8),
            l = o(9),
            d = o(11),
            c = o(12),
            m = o(2),
            f = o(4),
            h = (o(18), o(10), o(22), o(38), o(30), o(40), o(26), o(50), o(0));
        function x(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(object);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(object, t).enumerable
                }))),
                    e.push.apply(e, o)
            }
            return e
        }
        function v(t) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? x(Object(source), !0).forEach((function(e) {
                    Object(n.a)(t, e, source[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : x(Object(source)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                }))
            }
            return t
        }
        function w(t) {
            var e = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return ! 1;
                if (Reflect.construct.sham) return ! 1;
                if ("function" == typeof Proxy) return ! 0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))),
                        !0
                } catch(t) {
                    return ! 1
                }
            } ();
            return function() {
                var o, n = Object(m.a)(t);
                if (e) {
                    var r = Object(m.a)(this).constructor;
                    o = Reflect.construct(n, arguments, r)
                } else o = n.apply(this, arguments);
                return Object(c.a)(this, o)
            }
        }
        var y = function(t, e, o, desc) {
                var n, r = arguments.length,
                    l = r < 3 ? e: null === desc ? desc = Object.getOwnPropertyDescriptor(e, o) : desc;
                if ("object" === ("undefined" == typeof Reflect ? "undefined": Object(f.a)(Reflect)) && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, e, o, desc);
                else for (var i = t.length - 1; i >= 0; i--)(n = t[i]) && (l = (r < 3 ? n(l) : r > 3 ? n(e, o, l) : n(e, o)) || l);
                return r > 3 && l && Object.defineProperty(e, o, l),
                    l
            },
            _ = function(t) {
                Object(d.a)(o, t);
                var e = w(o);
                function o() {
                    var t;
                    return Object(r.a)(this, o),
                        (t = e.apply(this, arguments)).defaultClass = {
                            "position-relative": !0,
                            "d-inline-flex": !0,
                            "align-items-center": !0,
                            "justify-content-center": !0,
                            "overflow-hidden": !0,
                            "w-40": !0,
                            "h-40": !0,
                            "p-0": !0,
                            "text-center": !0,
                            "transition-all": !0,
                            "duration-500": !0,
                            "border-none": !0,
                            "bg-transparent": !0,
                            "border-radius-circle": !0
                        },
                        t
                }
                return Object(l.a)(o, [{
                    key: "rootClass",
                    get: function() {
                        return v(v({},
                            this.defaultClass), this.appClass)
                    }
                },
                    {
                        key: "toggleClass",
                        get: function() {
                            return this.toggle ? "icon-button--on": ""
                        }
                    }]),
                    o
            } (h.d);
        y([Object(h.c)({
            type: String,
            default:
                null
        })], _.prototype, "theme", void 0),
            y([Object(h.c)({
                type: String,
                default:
                    null
            })], _.prototype, "size", void 0),
            y([Object(h.c)({
                type: String,
                default:
                    null
            })], _.prototype, "toggleIcon", void 0),
            y([Object(h.c)({
                type: String,
                default:
                    "button"
            })], _.prototype, "nativeType", void 0),
            y([Object(h.c)({
                type: String,
                default:
                    "button"
            })], _.prototype, "tag", void 0),
            y([Object(h.c)({
                type: String,
                default:
                    null
            })], _.prototype, "icon", void 0),
            y([Object(h.c)({
                type: Boolean,
                default:
                    !1
            })], _.prototype, "active", void 0),
            y([Object(h.c)({
                type: Boolean,
                default:
                    !1
            })], _.prototype, "toggle", void 0),
            y([Object(h.c)({
                type: Object,
                default:
                    {}
            })], _.prototype, "appClass", void 0);
        var k = _ = y([Object(h.a)({})], _),
            A = o(5),
            component = Object(A.a)(k, (function() {
                var t = this,
                    e = t._self._c;
                t._self._setupProxy;
                return e(t.tag, {
                        tag: "component",
                        staticClass: "icon-button",
                        class: [t.rootClass, {
                            "icon-button--active": t.active
                        }],
                        attrs: {
                            type: t.nativeType
                        },
                        on: {
                            click: function(e) {
                                return t.$emit("click", e)
                            }
                        }
                    },
                    [t._t("default", (function() {
                        return [e("span", {
                                staticClass: "icon-button__icon m-0 w-24 pointer-none h-24 material-icons"
                            },
                            [t._v(t._s(t.icon))]), t._v(" "), t.toggleIcon ? e("span", {
                                staticClass: "m-0 w-24 h-24 pointer-none icon-button__icon icon-button__icon--on material-icons"
                            },
                            [t._v(t._s(t.toggleIcon))]) : t._e()]
                    }))], 2)
            }), [], !1, null, null, null);
        e.
            default = component.exports
    },
    , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,
    function(t, e, o) {
        "use strict";
        var n = o(3),
            r = o(267),
            l = o.n(r);
        n.
        default.use(l.a)
    },
    function(t, e, o) {
        "use strict";
        var n, r;
        o(54),
            o(10),
            o(26),
            o(53);
        e.a = function(t, e) {
            e("imgObserver", (function() {
                r = [].slice.call(document.querySelectorAll("img[data-src]")),
                "IntersectionObserver" in window && (n = new IntersectionObserver((function(t) {
                    t.forEach((function(t) {
                        if (t.isIntersecting) {
                            if (t.target.getAttribute("data-src") && !t.target.classList.contains("no-lazy")) {
                                var e = t.target.getAttribute("data-delay");
                                e ? setTimeout((function() {
                                    t.target.setAttribute("src", t.target.getAttribute("data-src")),
                                        setTimeout((function() {
                                            t.target.classList.remove("opacity-0")
                                        }), 500)
                                }), parseInt(e)) : t.target.setAttribute("src", t.target.getAttribute("data-src"))
                            }
                            t.target.classList.remove("lazy"),
                                n.unobserve(t.target)
                        }
                    }))
                })), r.forEach((function(t) {
                    n.observe(t)
                })))
            })),
                e("destroyImgObserver", (function() {
                    "IntersectionObserver" in window && r && r.length && r.forEach((function(t) {
                        n.observe(t)
                    }))
                }))
        }
    },
    function(t, e, o) {
        "use strict";
        var n, r;
        o(54),
            o(10),
            o(26);
        e.a = function(t, e) {
            e("videoObserver", (function() {
                r = [].slice.call(document.querySelectorAll("video.lazy")),
                "IntersectionObserver" in window && (n = new IntersectionObserver((function(t) {
                    t.forEach((function(video) {
                        if (video.isIntersecting) {
                            for (var source in video.target.children) {
                                var t = video.target.children[source];
                                t && "SOURCE" === t.tagName && (t.src = t.dataset.src)
                            }
                            var e = video.target;
                            e.load(),
                                e.classList.remove("lazy"),
                                n.unobserve(e)
                        }
                    }))
                })), r.forEach((function(t) {
                    n.observe(t)
                })))
            })),
                e("destroyVideoObserver", (function() {
                    "IntersectionObserver" in window && r && r.length && r.forEach((function(t) {
                        n.observe(t)
                    }))
                }))
        }
    },
    function(t, e, o) {
        "use strict";
        var n = o(3),
            r = o(259);
        n.
        default.component("AppTextField", r.
            default)
    },
    function(t, e, o) {
        "use strict";
        var n = new(o(3).
            default);
        e.a = function(t, e) {
            e("bus", n)
        }
    },
    function(t, e, o) { (function(t) {
        o(53),
            window.onNuxtReady((function() {
                "development" !== !t.env.APP_ENV && setTimeout((function() { !
                    function(t, e, s, o, i) {
                        t[o] = t[o] || [],
                            t[o].push({
                                "gtm.start": (new Date).getTime(),
                                event: "gtm.js"
                            });
                        var n = e.getElementsByTagName(s)[0],
                            r = e.createElement(s),
                            dl = "dataLayer" != o ? "&l=" + o: "";
                        r.async = !0,
                            r.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl,
                            n.parentNode.insertBefore(r, n)
                    } (window, document, "script", "dataLayer", "GTM-NXC6XZ6")
                }), 3e3)
            }))
    }).call(this, o(171))
    },
    function(t, e, o) {
        "use strict";
        var n = o(3),
            r = o(272);
        n.
        default.use(r.a, {
            domain: "",
            origin: "gamezy.com",
            params: {
                anticipation: .5,
                maxDpr: 2,
                step: 100
            }
        })
    },
    , , , , , , , , , , , , , , ,
    function(t, e, o) {
        "use strict";
        o.r(e);
        o(119);
        var n = {
                name: "AppInputHelper",
                props: {
                    invalid: {
                        type: Boolean,
                        default:
                            !1
                    },
                    valueLength: {
                        type: Number,
                        default:
                            0
                    },
                    maxlength: {
                        type: Number,
                        default:
                            0
                    },
                    showCounter: {
                        type: Boolean,
                        default:
                            !1
                    },
                    persistent: {
                        type: Boolean,
                        default:
                            !1
                    },
                    errorText: {
                        type: String,
                        default:
                            ""
                    },
                    helperText: {
                        type: String,
                        default:
                            ""
                    }
                },
                computed: {
                    rootClasses: function() {
                        return [{
                            "input-helper--invalid": this.invalid
                        }]
                    }
                }
            },
            r = o(5),
            component = Object(r.a)(n, (function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                        staticClass: "input-helper font-12 pl-0 pr-24 mt-8",
                        class: t.rootClasses
                    },
                    [t.invalid ? e("div", {
                            staticClass: "input-helper__text input-helper__text--validation-msg"
                        },
                        [t._v("\n    " + t._s(t.errorText) + "\n  ")]) : e("div", {
                            staticClass: "input-helper__text",
                            class: {
                                "input-helper__text--persistent": t.persistent
                            }
                        },
                        [t._v("\n    " + t._s(t.helperText) + "\n  ")]), t._v(" "), t.showCounter ? e("div", {
                            staticClass: "input-helper__text--counter input-helper__text"
                        },
                        [t._v(t._s(t.valueLength) + " / " + t._s(t.maxlength))]) : t._e()])
            }), [], !1, null, null, null);
        e.
            default = component.exports
    },
    , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,
    function(t, e, o) {
        var content = o(356);
        content.__esModule && (content = content.
            default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals); (0, o(36).
            default)("573fb83e", content, !0, {
            sourceMap: !1
        })
    },
    function(t, e, o) {
        var content = o(358);
        content.__esModule && (content = content.
            default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals); (0, o(36).
            default)("346e14da", content, !0, {
            sourceMap: !1
        })
    },
    function(t, e, o) {
        var content = o(364);
        content.__esModule && (content = content.
            default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals); (0, o(36).
            default)("5946f60a", content, !0, {
            sourceMap: !1
        })
    },
    function(t, e, o) {
        var content = o(366);
        content.__esModule && (content = content.
            default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals); (0, o(36).
            default)("1696c6b4", content, !0, {
            sourceMap: !1
        })
    },
    function(t, e, o) {
        var content = o(368);
        content.__esModule && (content = content.
            default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals); (0, o(36).
            default)("ed534512", content, !0, {
            sourceMap: !1
        })
    },
    function(t, e, o) {
        var content = o(370);
        content.__esModule && (content = content.
            default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals); (0, o(36).
            default)("bb3dade6", content, !0, {
            sourceMap: !1
        })
    },
    function(t, e, o) {
        var content = o(372);
        content.__esModule && (content = content.
            default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals); (0, o(36).
            default)("878ea8c6", content, !0, {
            sourceMap: !1
        })
    },
    function(t, e, o) {
        var content = o(374);
        content.__esModule && (content = content.
            default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals); (0, o(36).
            default)("56d504cb", content, !0, {
            sourceMap: !1
        })
    },
    function(t, e, o) {
        var content = o(379);
        content.__esModule && (content = content.
            default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals); (0, o(36).
            default)("7208185e", content, !0, {
            sourceMap: !1
        })
    },
    function(t, e, o) {
        var content = o(381);
        content.__esModule && (content = content.
            default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals); (0, o(36).
            default)("8a5088bc", content, !0, {
            sourceMap: !1
        })
    },
    function(t, e, o) {
        var content = o(383);
        content.__esModule && (content = content.
            default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals); (0, o(36).
            default)("8ac475cc", content, !0, {
            sourceMap: !1
        })
    },
    function(t, e, o) {
        var content = o(385);
        content.__esModule && (content = content.
            default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals); (0, o(36).
            default)("ef86601c", content, !0, {
            sourceMap: !1
        })
    },
    function(t, e, o) {
        var content = o(387);
        content.__esModule && (content = content.
            default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals); (0, o(36).
            default)("c0f38ad6", content, !0, {
            sourceMap: !1
        })
    },
    , , , , , , , ,
    function(t, e, o) {
        "use strict";
        o.r(e);
        o(38),
            o(30),
            o(40),
            o(18),
            o(26),
            o(50);
        var n = o(23);
        o(119),
            o(41),
            o(10),
            o(67),
            o(47);
        function r(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(object);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(object, t).enumerable
                }))),
                    e.push.apply(e, o)
            }
            return e
        }
        function l(t) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? r(Object(source), !0).forEach((function(e) {
                    Object(n.a)(t, e, source[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : r(Object(source)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                }))
            }
            return t
        }
        var d = {
                name: "AppTextField",
                components: {
                    AppInputHelper: o(199).
                        default
                },
                model: {
                    prop: "value",
                    event: "input"
                },
                props: {
                    uid: {
                        type: String,
                        required: !0
                    },
                    placeholder: {
                        type: String,
                        required: !0
                    },
                    helperText: {
                        type: String,
                        default:
                            null
                    },
                    errorText: {
                        type: String,
                        default:
                            null
                    },
                    icon: {
                        type: String,
                        default:
                            null
                    },
                    renderButton: {
                        type: Boolean,
                        default:
                            !1
                    },
                    invalid: {
                        type: Boolean,
                        default:
                            !1
                    },
                    name: {
                        type: String,
                        default:
                            null
                    },
                    value: {
                        type: [String, Number, Boolean],
                        default:
                            null
                    },
                    outlined: {
                        type: Boolean,
                        default:
                            !0
                    },
                    pattern: {
                        type: String,
                        default:
                            null
                    },
                    rows: {
                        type: Number,
                        default:
                            4
                    },
                    type: {
                        type: String,
                        default:
                            "text",
                        validator: function(t) {
                            return ["date", "datetime", "datetime-local", "email", "number", "password", "search", "tel", "text", "textarea", "time", "url", "week"].includes(t) >= 0
                        }
                    },
                    maxlength: {
                        type: Number,
                        default:
                            null
                    },
                    max: {
                        type: Number,
                        default:
                            null
                    },
                    min: {
                        type: Number,
                        default:
                            null
                    },
                    minlength: {
                        type: Number,
                        default:
                            null
                    },
                    required: {
                        type: Boolean,
                        default:
                            !1
                    },
                    readonly: {
                        type: Boolean,
                        default:
                            !1
                    },
                    autocomplete: {
                        type: String,
                        default:
                            function() {
                                return "on"
                            }
                    },
                    useHtml5Validation: {
                        type: Boolean,
                        default:
                            function() {
                                return ! 0
                            }
                    },
                    dense: {
                        type: Boolean,
                        default:
                            !1
                    },
                    loading: {
                        type: Boolean,
                        default:
                            !1
                    },
                    leadingIcon: {
                        type: String,
                        default:
                            null
                    },
                    trailingIcon: {
                        type: String,
                        default:
                            null
                    },
                    showCounter: {
                        type: Boolean,
                        default:
                            function() {
                                return ! 0
                            }
                    },
                    trailingIconClickable: {
                        type: Boolean,
                        default:
                            !1
                    },
                    leadingIconClickable: {
                        type: Boolean,
                        default:
                            !1
                    },
                    inputClass: {
                        type: [String, Object],
                        default:
                            null
                    },
                    labelClass: {
                        type: String,
                        default:
                            null
                    },
                    rootClass: {
                        type: Object,
                        default:
                            function() {
                                return {}
                            }
                    }
                },
                data: function() {
                    return {
                        localErrorText: this.errorText,
                        valid: !0,
                        focused: !1
                    }
                },
                computed: {
                    rootClasses: function() {
                        return l({
                                "text-qfield--dense": this.dense,
                                "text-field--outlined": this.outlined,
                                "text-field--focused": this.focused,
                                "text-field--invalid": !this.valid || this.invalid,
                                "text-field--loading": this.loading,
                                "text-field--dirty": this.dirty,
                                "text-field--with-trailing-icon": this.trailingIcon,
                                "text-field--with-leading-icon": this.leadingIcon,
                                "text-field--textarea": "textarea" === this.type,
                                "h-48": "textarea" !== this.type
                            },
                            this.rootClass)
                    },
                    labelClasses: function() {
                        return [{
                            "md-floating-label--float-above": this.dirty || this.focused
                        }]
                    },
                    valueLength: function() {
                        return "string" == typeof this.value ? this.value.length: "number" == typeof this.value ? this.value.toString().length: 0
                    },
                    dirty: function() {
                        return 0 !== this.valueLength
                    },
                    trailingIconTabIndex: function() {
                        return !! this.trailingIconClickable && "-1"
                    },
                    leadingIconTabIndex: function() {
                        return !! this.leadingIconClickable && "-1"
                    },
                    attributes: function() {
                        return l(l({},
                                this.$attrs), {},
                            {
                                type: this.type,
                                id: this.uid,
                                name: this.name,
                                disabled: this.disabled,
                                required: this.required,
                                placeholder: this.placeholder,
                                readonly: this.readonly,
                                maxlength: this.maxlength,
                                minlength: this.minlength,
                                max: this.max,
                                min: this.min,
                                pattern: this.pattern
                            })
                    }
                },
                watch: {
                    errorText: function(t) {
                        this.localErrorText = t
                    },
                    value: function() { ! this.valid && this.checkValidity_()
                    }
                },
                methods: {
                    onInput_: function(t) {
                        this.$emit("input", t.target.value)
                    },
                    onBlur_: function(t) {
                        this.focused = !1,
                            this.$emit("blur", t),
                            this.checkValidity_()
                    },
                    onFocus_: function(t) {
                        this.focused = !0,
                            this.$emit("focus", t)
                    },
                    setPointerXOffset_: function(t) {
                        this.setTransformOrigin(t)
                    },
                    checkValidity_: function() {
                        var t = this;
                        if (this.useHtml5Validation) {
                            var e = this.$el.querySelector(".text-field__input"),
                                o = null,
                                n = !0;
                            return e.checkValidity() || (o = e.validationMessage, n = !1, this.$nextTick((function() {
                                t.errorText || t.valid || (t.localErrorText = o)
                            }))),
                                this.valid = n,
                                this.valid
                        }
                    },
                    setTransformOrigin: function() {}
                }
            },
            c = o(5),
            component = Object(c.a)(d, (function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                        staticClass: "d-flex flex-col"
                    },
                    [e("div", {
                            staticClass: "bg-white",
                            class: t.rootClasses
                        },
                        [t.leadingIcon ? e("i", {
                                staticClass: "material-icons text-field__icon"
                            },
                            [t._v("\n      " + t._s(t.leadingIcon) + "\n    ")]) : t._e(), t._v(" "), "textarea" !== t.type ? e("input", t._b({
                                ref: "input",
                                staticClass: "text-field__input d-flex align-self-end m-0 duration-500 text-theme-primary transition-all w-full h-full font-subtitle md:font-headline4 pl-24 pr-32",
                                class: t.inputClass,
                                attrs: {
                                    maxlength: "10"
                                },
                                domProps: {
                                    value: t.value
                                },
                                on: {
                                    touchstart: t.setPointerXOffset_,
                                    mousedown: t.setPointerXOffset_,
                                    input: t.onInput_,
                                    blur: t.onBlur_,
                                    focus: t.onFocus_
                                }
                            },
                            "input", t.attributes, !1)) : e("textarea", t._b({
                                ref: "textarea",
                                staticClass: "text-field__input",
                                class: t.inputClass,
                                attrs: {
                                    rows: t.rows
                                },
                                on: {
                                    input: t.onInput_,
                                    blur: t.onBlur_,
                                    focus: t.onFocus_
                                }
                            },
                            "textarea", t.attributes, !1)), t._v(" "), t.trailingIcon ? e("i", {
                                staticClass: "material-icons text-field__icon",
                                attrs: {
                                    tabindex: t.trailingIconTabIndex
                                },
                                on: {
                                    click: function(e) {
                                        return t.$emit("trailingIconClick")
                                    }
                                }
                            },
                            [t._v("\n      " + t._s(t.trailingIcon) + "\n    ")]) : t._e(), t._v(" "), t.leadingIcon ? e("i", {
                                staticClass: "material-icons text-field__icon",
                                attrs: {
                                    tabindex: t.leadingIconTabIndex
                                },
                                on: {
                                    click: function(e) {
                                        return t.$emit("leadingIconClick")
                                    }
                                }
                            },
                            [t._v("\n      " + t._s(t.leadingIcon) + "\n    ")]) : t._e()]), t._v(" "), t.helperText ? e("app-input-helper", {
                        attrs: {
                            invalid: !t.valid || t.invalid,
                            "value-length": t.valueLength,
                            "error-text": t.localErrorText,
                            "show-counter": t.maxlength && t.showCounter && "number" !== t.type,
                            maxlength: t.maxlength,
                            persistent: !0,
                            "helper-text": t.helperText
                        }
                    }) : t._e()], 1)
            }), [], !1, null, null, null);
        e.
            default = component.exports
    },
    , , , , , , , , , , , , ,
    function(t, e, o) {
        "use strict";
        o(22);
        var n = o(8),
            r = o(9),
            l = o(11),
            d = o(12),
            c = o(2),
            m = o(4),
            f = (o(18), o(10), o(26), o(75)),
            h = o.n(f),
            x = o(0),
            v = o(413),
            w = o(411),
            y = o(412),
            _ = o(77),
            k = o(78),
            A = o(58),
            C = o(79),
            O = o(80),
            j = o(56),
            P = o(57),
            D = o(74),
            R = o(59),
            z = o(60),
            S = o(278);
        function B(t) {
            var e = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return ! 1;
                if (Reflect.construct.sham) return ! 1;
                if ("function" == typeof Proxy) return ! 0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))),
                        !0
                } catch(t) {
                    return ! 1
                }
            } ();
            return function() {
                var o, n = Object(c.a)(t);
                if (e) {
                    var r = Object(c.a)(this).constructor;
                    o = Reflect.construct(n, arguments, r)
                } else o = n.apply(this, arguments);
                return Object(d.a)(this, o)
            }
        }
        var T = function(t, e, o, desc) {
            var n, r = arguments.length,
                l = r < 3 ? e: null === desc ? desc = Object.getOwnPropertyDescriptor(e, o) : desc;
            if ("object" === ("undefined" == typeof Reflect ? "undefined": Object(m.a)(Reflect)) && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, e, o, desc);
            else for (var i = t.length - 1; i >= 0; i--)(n = t[i]) && (l = (r < 3 ? n(l) : r > 3 ? n(e, o, l) : n(e, o)) || l);
            return r > 3 && l && Object.defineProperty(e, o, l),
                l
        };
        v.a.use([w.a, y.a]);
        var L = function(t) {
                Object(l.a)(o, t);
                var e = B(o);
                function o() {
                    var t;
                    return Object(n.a)(this, o),
                        (t = e.apply(this, arguments)).show = !0,
                        t.dialogToggle = !1,
                        t.dialogTogglePlay = !1,
                        t.downloadAppDialogToggle = !1,
                        t.showPlayNowButton = !1,
                        t.playButtonLink = "",
                        t
                }
                return Object(r.a)(o, [{
                    key: "created",
                    value: function() {
                        var t = this;
                        this.$bus.$on("showDownloadWebApp", (function() {
                            t.dialogToggle = !0
                        })),
                            this.$nuxt.$on("showPlayNowButton", (function(link) {
                                t.playButtonLink = link,
                                    t.showPlayNowButton = !0
                            }))
                    }
                },
                    {
                        key: "mounted",
                        value: function() {
                            var t = this;
                            this.$nuxt.$on("downloadAppDialogToggleEvent", this.onDownloadAppDialogToggle),
                                this.$nextTick((function() {
                                    h.a.init({
                                        duration: 500,
                                        easing: "ease",
                                        once: !0,
                                        offset: 72
                                    })
                                }));
                            var e = document.querySelectorAll(".play-win-button");
                            e && e.forEach((function(e) {
                                e.addEventListener("click", t.FunPlayWin)
                            }))
                        }
                    },
                    {
                        key: "onDownloadAppDialogToggle",
                        value: function(t) {
                            this.downloadAppDialogToggle = t
                        }
                    },
                    {
                        key: "onAppDownloadRestart",
                        value: function() {
                            this.$nuxt.$emit("appDownloadRestart")
                        }
                    },
                    {
                        key: "FunPlayWin",
                        value: function() {
                            this.dialogTogglePlay = !0
                        }
                    },
                    {
                        key: "scrollToTop",
                        value: function() {
                            window.scrollTo({
                                top: 0,
                                behavior: "smooth"
                            })
                        }
                    },
                    {
                        key: "beforeDestroy",
                        value: function() {
                            this.$nuxt.$off("closeDownloadAppPopup")
                        }
                    }]),
                    o
            } (x.d),
            E = L = T([Object(x.a)({
                name: "DefaultLayout",
                components: {
                    PlayNowButton: S.
                        default,
                    PlayGame: D.
                        default,
                    AppHeader: _.
                        default,
                    AppGridHelper: k.
                        default,
                    AppFooter: C.
                        default,
                    AppTabCard: A.
                        default,
                    AppCursor: O.
                        default,
                    DownloadWebApp: P.
                        default,
                    AppDialogWeb: j.
                        default,
                    AppDialogMobile: R.
                        default,
                    DownloadMobileApp: z.
                        default
                },
                transition: "opacity"
            })], L),
            F = o(5),
            component = Object(F.a)(E, (function() {
                var t = this,
                    e = t._self._c;
                t._self._setupProxy;
                return e("div", {
                        staticClass: "w-full position-relative overflow-x-hidden app-view"
                    },
                    [e("app-header", {
                        attrs: {
                            "disable-links": !0
                        }
                    }), t._v(" "), e("div", {
                            staticClass: "main-wrapper w-full"
                        },
                        [e("Nuxt")], 1), t._v(" "), e("play-now-button", {
                        attrs: {
                            "show-play-button": t.showPlayNowButton,
                            "play-button-link": t.playButtonLink
                        }
                    }), t._v(" "), e("portal-target", {
                        attrs: {
                            name: "popup-dialog"
                        }
                    }), t._v(" "), e("portal-target", {
                        attrs: {
                            name: "popup-download-app-web"
                        }
                    }), t._v(" "), e("portal-target", {
                        attrs: {
                            name: "popup-download-app-mobile"
                        }
                    }), t._v(" "), e("portal-target", {
                        attrs: {
                            name: "play-game"
                        }
                    }), t._v(" "), t.dialogToggle ? e("div", {
                            staticClass: "z-index-9"
                        },
                        [e("app-dialog-web", {
                            staticClass: "dialog--download-app",
                            staticStyle: {
                                "z-index": "25"
                            },
                            attrs: {
                                "bg-color": {
                                    "bg-light": !0
                                },
                                "portal-height": {
                                    "height-332": !1,
                                    "height-578": !0
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
                                    return [e("download-web-app")]
                                },
                                proxy: !0
                            }], null, !1, 668603480)
                        })], 1) : t._e(), t._v(" "), t.dialogTogglePlay ? e("div", {
                            staticClass: "z-index-9"
                        },
                        [e("app-dialog-web", {
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
                                show: t.dialogTogglePlay
                            },
                            on: {
                                "update:show": function(e) {
                                    t.dialogTogglePlay = e
                                }
                            },
                            scopedSlots: t._u([{
                                key: "surface",
                                fn: function() {
                                    return [e("play-game")]
                                },
                                proxy: !0
                            }], null, !1, 1259685722)
                        })], 1) : t._e(), t._v(" "), e("div", {
                        staticClass: "position-fixed border-radius-circle scroll-to-top",
                        on: {
                            click: t.scrollToTop
                        }
                    }), t._v(" "), e("app-dialog-mobile", {
                        staticClass: "dialog--bottom-sheet dialog--download-app md:d-none",
                        attrs: {
                            "close-on-button-click": !1,
                            show: t.downloadAppDialogToggle
                        },
                        on: {
                            "update:show": function(e) {
                                t.downloadAppDialogToggle = e
                            }
                        },
                        scopedSlots: t._u([{
                            key: "surface",
                            fn: function() {
                                return [e("download-mobile-app", {
                                    on: {
                                        closePopup: function(e) {
                                            t.downloadAppDialogToggle = !1
                                        },
                                        restartDownload: t.onAppDownloadRestart
                                    }
                                })]
                            },
                            proxy: !0
                        }])
                    })], 1)
            }), [], !1, null, null, null);
        e.a = component.exports
    },
    function(t, e, o) {
        "use strict";
        o(22);
        var n = o(8),
            r = o(9),
            l = o(11),
            d = o(12),
            c = o(2),
            m = o(4),
            f = (o(18), o(10), o(26), o(75)),
            h = o.n(f),
            x = o(0),
            v = o(413),
            w = o(411),
            y = o(412),
            _ = o(77),
            k = o(78),
            A = o(58),
            C = o(79),
            O = o(80),
            j = o(89),
            P = o(56),
            D = o(57),
            R = o(74),
            z = o(59),
            S = o(60);
        function B(t) {
            var e = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return ! 1;
                if (Reflect.construct.sham) return ! 1;
                if ("function" == typeof Proxy) return ! 0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))),
                        !0
                } catch(t) {
                    return ! 1
                }
            } ();
            return function() {
                var o, n = Object(c.a)(t);
                if (e) {
                    var r = Object(c.a)(this).constructor;
                    o = Reflect.construct(n, arguments, r)
                } else o = n.apply(this, arguments);
                return Object(d.a)(this, o)
            }
        }
        var T = function(t, e, o, desc) {
            var n, r = arguments.length,
                l = r < 3 ? e: null === desc ? desc = Object.getOwnPropertyDescriptor(e, o) : desc;
            if ("object" === ("undefined" == typeof Reflect ? "undefined": Object(m.a)(Reflect)) && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, e, o, desc);
            else for (var i = t.length - 1; i >= 0; i--)(n = t[i]) && (l = (r < 3 ? n(l) : r > 3 ? n(e, o, l) : n(e, o)) || l);
            return r > 3 && l && Object.defineProperty(e, o, l),
                l
        };
        v.a.use([w.a, y.a]);
        var L = function(t) {
                Object(l.a)(o, t);
                var e = B(o);
                function o() {
                    var t;
                    return Object(n.a)(this, o),
                        (t = e.apply(this, arguments)).show = !0,
                        t.dialogToggle = !1,
                        t.dialogTogglePlay = !1,
                        t.downloadAppDialogToggle = !1,
                        t
                }
                return Object(r.a)(o, [{
                    key: "created",
                    value: function() {
                        var t = this;
                        this.$bus.$on("showDownloadWebApp", (function() {
                            t.dialogToggle = !0
                        }))
                    }
                },
                    {
                        key: "mounted",
                        value: function() {
                            var t = this;
                            this.$nuxt.$on("downloadAppDialogToggleEvent", this.onDownloadAppDialogToggle),
                                this.$nextTick((function() {
                                    h.a.init({
                                        duration: 500,
                                        easing: "ease",
                                        once: !0,
                                        offset: 72
                                    })
                                }));
                            var e = document.querySelectorAll(".play-win-button");
                            e && e.forEach((function(e) {
                                e.addEventListener("click", t.FunPlayWin)
                            }))
                        }
                    },
                    {
                        key: "scrollToTop",
                        value: function() {
                            window.scrollTo({
                                top: 0,
                                behavior: "smooth"
                            })
                        }
                    },
                    {
                        key: "onDownloadAppDialogToggle",
                        value: function(t) {
                            this.downloadAppDialogToggle = t
                        }
                    },
                    {
                        key: "onAppDownloadRestart",
                        value: function() {
                            this.$nuxt.$emit("appDownloadRestart")
                        }
                    },
                    {
                        key: "FunPlayWin",
                        value: function() {
                            this.dialogTogglePlay = !0
                        }
                    },
                    {
                        key: "beforeDestroy",
                        value: function() {
                            this.$nuxt.$off("closeDownloadAppPopup")
                        }
                    }]),
                    o
            } (x.d),
            E = L = T([Object(x.a)({
                name: "DefaultLayout",
                components: {
                    PlayGame: R.
                        default,
                    AppApkDownload: j.
                        default,
                    AppHeader: _.
                        default,
                    AppGridHelper: k.
                        default,
                    AppFooter: C.
                        default,
                    AppTabCard: A.
                        default,
                    AppCursor: O.
                        default,
                    DownloadWebApp: D.
                        default,
                    AppDialogWeb: P.
                        default,
                    AppDialogMobile: z.
                        default,
                    DownloadMobileApp: S.
                        default
                },
                transition: "opacity"
            })], L),
            F = o(5),
            component = Object(F.a)(E, (function() {
                var t = this,
                    e = t._self._c;
                t._self._setupProxy;
                return e("div", {
                        staticClass: "w-full position-relative overflow-x-hidden"
                    },
                    [e("app-header"), t._v(" "), e("div", {
                            staticClass: "main-wrapper w-full"
                        },
                        [e("Nuxt")], 1), t._v(" "), e("portal-target", {
                        attrs: {
                            name: "popup-dialog"
                        }
                    }), t._v(" "), e("portal-target", {
                        attrs: {
                            name: "popup-download-app-web"
                        }
                    }), t._v(" "), e("portal-target", {
                        attrs: {
                            name: "popup-download-app-mobile"
                        }
                    }), t._v(" "), e("portal-target", {
                        attrs: {
                            name: "play-game"
                        }
                    }), t._v(" "), e("app-footer"), t._v(" "), e("app-apk-download"), t._v(" "), t.dialogToggle ? e("div", {
                            staticClass: "z-index-9"
                        },
                        [e("app-dialog-web", {
                            staticClass: "dialog--download-app",
                            staticStyle: {
                                "z-index": "25"
                            },
                            attrs: {
                                "bg-color": {
                                    "bg-light": !0
                                },
                                "portal-height": {
                                    "height-332": !1,
                                    "height-578": !0
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
                                    return [e("download-web-app")]
                                },
                                proxy: !0
                            }], null, !1, 668603480)
                        })], 1) : t._e(), t._v(" "), t.dialogTogglePlay ? e("div", {
                            staticClass: "z-index-9"
                        },
                        [e("app-dialog-web", {
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
                                show: t.dialogTogglePlay
                            },
                            on: {
                                "update:show": function(e) {
                                    t.dialogTogglePlay = e
                                }
                            },
                            scopedSlots: t._u([{
                                key: "surface",
                                fn: function() {
                                    return [e("play-game")]
                                },
                                proxy: !0
                            }], null, !1, 1259685722)
                        })], 1) : t._e(), t._v(" "), e("div", {
                        staticClass: "position-fixed border-radius-circle scroll-to-top",
                        on: {
                            click: t.scrollToTop
                        }
                    }), t._v(" "), e("app-dialog-mobile", {
                        staticClass: "dialog--bottom-sheet dialog--download-app md:d-none",
                        attrs: {
                            "close-on-button-click": !1,
                            show: t.downloadAppDialogToggle
                        },
                        on: {
                            "update:show": function(e) {
                                t.downloadAppDialogToggle = e
                            }
                        },
                        scopedSlots: t._u([{
                            key: "surface",
                            fn: function() {
                                return [e("download-mobile-app", {
                                    on: {
                                        closePopup: function(e) {
                                            t.downloadAppDialogToggle = !1
                                        },
                                        restartDownload: t.onAppDownloadRestart
                                    }
                                })]
                            },
                            proxy: !0
                        }])
                    })], 1)
            }), [], !1, null, null, null);
        e.a = component.exports
    },
    function(t, e, o) {
        "use strict";
        o(22);
        var n = o(8),
            r = o(9),
            l = o(11),
            d = o(12),
            c = o(2),
            m = o(4),
            f = (o(18), o(10), o(26), o(75)),
            h = o.n(f),
            x = o(0),
            v = o(413),
            w = o(411),
            y = o(412),
            _ = o(77),
            k = o(78),
            A = o(58),
            C = o(79),
            O = o(80),
            j = o(89),
            P = o(56),
            D = o(57),
            R = o(59),
            z = o(60);
        function S(t) {
            var e = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return ! 1;
                if (Reflect.construct.sham) return ! 1;
                if ("function" == typeof Proxy) return ! 0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))),
                        !0
                } catch(t) {
                    return ! 1
                }
            } ();
            return function() {
                var o, n = Object(c.a)(t);
                if (e) {
                    var r = Object(c.a)(this).constructor;
                    o = Reflect.construct(n, arguments, r)
                } else o = n.apply(this, arguments);
                return Object(d.a)(this, o)
            }
        }
        var B = function(t, e, o, desc) {
            var n, r = arguments.length,
                l = r < 3 ? e: null === desc ? desc = Object.getOwnPropertyDescriptor(e, o) : desc;
            if ("object" === ("undefined" == typeof Reflect ? "undefined": Object(m.a)(Reflect)) && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, e, o, desc);
            else for (var i = t.length - 1; i >= 0; i--)(n = t[i]) && (l = (r < 3 ? n(l) : r > 3 ? n(e, o, l) : n(e, o)) || l);
            return r > 3 && l && Object.defineProperty(e, o, l),
                l
        };
        v.a.use([w.a, y.a]);
        var T = function(t) {
                Object(l.a)(o, t);
                var e = S(o);
                function o() {
                    var t;
                    return Object(n.a)(this, o),
                        (t = e.apply(this, arguments)).show = !0,
                        t.dialogToggle = !1,
                        t.dialogTogglePlay = !1,
                        t.downloadAppDialogToggle = !1,
                        t
                }
                return Object(r.a)(o, [{
                    key: "created",
                    value: function() {
                        var t = this;
                        this.$bus.$on("showDownloadWebApp", (function() {
                            t.dialogToggle = !0
                        }))
                    }
                },
                    {
                        key: "mounted",
                        value: function() {
                            var t = this;
                            this.$nuxt.$on("downloadAppDialogToggleEvent", this.onDownloadAppDialogToggle),
                                this.$nextTick((function() {
                                    h.a.init({
                                        duration: 500,
                                        easing: "ease",
                                        once: !0,
                                        offset: 72
                                    })
                                }));
                            var e = document.querySelectorAll(".play-win-button");
                            e && e.forEach((function(e) {
                                e.addEventListener("click", t.FunPlayWin)
                            }))
                        }
                    },
                    {
                        key: "onDownloadAppDialogToggle",
                        value: function(t) {
                            this.downloadAppDialogToggle = t
                        }
                    },
                    {
                        key: "onAppDownloadRestart",
                        value: function() {
                            this.$nuxt.$emit("appDownloadRestart")
                        }
                    },
                    {
                        key: "FunPlayWin",
                        value: function() {
                            this.dialogTogglePlay = !0
                        }
                    },
                    {
                        key: "beforeDestroy",
                        value: function() {
                            this.$nuxt.$off("closeDownloadAppPopup")
                        }
                    }]),
                    o
            } (x.d),
            L = T = B([Object(x.a)({
                name: "LandingPage",
                components: {
                    AppApkDownload: j.
                        default,
                    AppHeader: _.
                        default,
                    AppGridHelper: k.
                        default,
                    AppFooter: C.
                        default,
                    AppTabCard: A.
                        default,
                    AppCursor: O.
                        default,
                    DownloadWebApp: D.
                        default,
                    AppDialogWeb: P.
                        default,
                    AppDialogMobile: R.
                        default,
                    DownloadMobileApp: z.
                        default
                },
                transition: "opacity"
            })], T),
            E = o(5),
            component = Object(E.a)(L, (function() {
                var t = this,
                    e = t._self._c;
                t._self._setupProxy;
                return e("div", {
                        staticClass: "w-full position-relative overflow-x-hidden"
                    },
                    [e("app-header"), t._v(" "), e("div", {
                            staticClass: "main-wrapper w-full"
                        },
                        [e("Nuxt")], 1), t._v(" "), e("portal-target", {
                        attrs: {
                            name: "popup-dialog"
                        }
                    }), t._v(" "), e("portal-target", {
                        attrs: {
                            name: "popup-download-app-web"
                        }
                    }), t._v(" "), e("portal-target", {
                        attrs: {
                            name: "popup-download-app-mobile"
                        }
                    }), t._v(" "), e("portal-target", {
                        attrs: {
                            name: "play-game"
                        }
                    }), t._v(" "), e("app-footer"), t._v(" "), e("app-apk-download"), t._v(" "), t.dialogToggle ? e("div", {
                            staticClass: "z-index-9"
                        },
                        [e("app-dialog-web", {
                            staticClass: "dialog--download-app",
                            staticStyle: {
                                "z-index": "25"
                            },
                            attrs: {
                                "bg-color": {
                                    "bg-light": !0
                                },
                                "portal-height": {
                                    "height-332": !1,
                                    "height-578": !0
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
                                    return [e("download-web-app")]
                                },
                                proxy: !0
                            }], null, !1, 668603480)
                        })], 1) : t._e(), t._v(" "), t.dialogTogglePlay ? e("div", {
                            staticClass: "z-index-9"
                        },
                        [e("app-dialog-web", {
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
                                show: t.dialogTogglePlay
                            },
                            on: {
                                "update:show": function(e) {
                                    t.dialogTogglePlay = e
                                }
                            },
                            scopedSlots: t._u([{
                                key: "surface",
                                fn: function() {
                                    return [e("play-game")]
                                },
                                proxy: !0
                            }], null, !1, 1259685722)
                        })], 1) : t._e(), t._v(" "), e("app-dialog-mobile", {
                        staticClass: "dialog--bottom-sheet dialog--download-app md:d-none",
                        attrs: {
                            "close-on-button-click": !1,
                            show: t.downloadAppDialogToggle
                        },
                        on: {
                            "update:show": function(e) {
                                t.downloadAppDialogToggle = e
                            }
                        },
                        scopedSlots: t._u([{
                            key: "surface",
                            fn: function() {
                                return [e("download-mobile-app", {
                                    on: {
                                        closePopup: function(e) {
                                            t.downloadAppDialogToggle = !1
                                        },
                                        restartDownload: t.onAppDownloadRestart
                                    }
                                })]
                            },
                            proxy: !0
                        }])
                    })], 1)
            }), [], !1, null, null, null);
        e.a = component.exports
    },
    function(t, e, o) {
        "use strict";
        var n = o(8),
            r = o(9),
            l = o(11),
            d = o(12),
            c = o(2),
            m = o(4),
            f = (o(18), o(10), o(22), o(0)),
            h = o(413),
            x = o(411),
            v = o(412),
            w = o(58),
            y = o(56),
            _ = o(57),
            k = o(74),
            A = o(59),
            C = o(60);
        function O(t) {
            var e = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return ! 1;
                if (Reflect.construct.sham) return ! 1;
                if ("function" == typeof Proxy) return ! 0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))),
                        !0
                } catch(t) {
                    return ! 1
                }
            } ();
            return function() {
                var o, n = Object(c.a)(t);
                if (e) {
                    var r = Object(c.a)(this).constructor;
                    o = Reflect.construct(n, arguments, r)
                } else o = n.apply(this, arguments);
                return Object(d.a)(this, o)
            }
        }
        var j = function(t, e, o, desc) {
            var n, r = arguments.length,
                l = r < 3 ? e: null === desc ? desc = Object.getOwnPropertyDescriptor(e, o) : desc;
            if ("object" === ("undefined" == typeof Reflect ? "undefined": Object(m.a)(Reflect)) && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, e, o, desc);
            else for (var i = t.length - 1; i >= 0; i--)(n = t[i]) && (l = (r < 3 ? n(l) : r > 3 ? n(e, o, l) : n(e, o)) || l);
            return r > 3 && l && Object.defineProperty(e, o, l),
                l
        };
        h.a.use([x.a, v.a]);
        var P = function(t) {
                Object(l.a)(o, t);
                var e = O(o);
                function o() {
                    var t;
                    return Object(n.a)(this, o),
                        (t = e.apply(this, arguments)).show = !0,
                        t.dialogToggle = !1,
                        t.dialogTogglePlay = !1,
                        t.downloadAppDialogToggle = !1,
                        t
                }
                return Object(r.a)(o, [{
                    key: "created",
                    value: function() {
                        var t = this;
                        this.$bus.$on("showDownloadWebApp", (function() {
                            t.dialogToggle = !0
                        }))
                    }
                },
                    {
                        key: "mounted",
                        value: function() {
                            this.$nuxt.$on("downloadAppDialogToggleEvent", this.onDownloadAppDialogToggle)
                        }
                    },
                    {
                        key: "onDownloadAppDialogToggle",
                        value: function(t) {
                            this.downloadAppDialogToggle = t
                        }
                    },
                    {
                        key: "onAppDownloadRestart",
                        value: function() {
                            this.$nuxt.$emit("appDownloadRestart")
                        }
                    },
                    {
                        key: "scrollToTop",
                        value: function() {
                            window.scrollTo({
                                top: 0,
                                behavior: "smooth"
                            })
                        }
                    },
                    {
                        key: "beforeDestroy",
                        value: function() {
                            this.$nuxt.$off("closeDownloadAppPopup")
                        }
                    }]),
                    o
            } (f.d),
            D = P = j([Object(f.a)({
                name: "DefaultLayout",
                components: {
                    PlayGame: k.
                        default,
                    AppTabCard: w.
                        default,
                    DownloadWebApp: _.
                        default,
                    AppDialogWeb: y.
                        default,
                    AppDialogMobile: A.
                        default,
                    DownloadMobileApp: C.
                        default
                },
                transition: "opacity"
            })], P),
            R = o(5),
            component = Object(R.a)(D, (function() {
                var t = this,
                    e = t._self._c;
                t._self._setupProxy;
                return e("div", {
                        staticClass: "w-full position-relative overflow-x-hidden app-view"
                    },
                    [e("div", {
                            staticClass: "main-wrapper w-full"
                        },
                        [e("Nuxt")], 1), t._v(" "), e("portal-target", {
                        attrs: {
                            name: "popup-dialog"
                        }
                    }), t._v(" "), e("portal-target", {
                        attrs: {
                            name: "popup-download-app-web"
                        }
                    }), t._v(" "), e("portal-target", {
                        attrs: {
                            name: "popup-download-app-mobile"
                        }
                    }), t._v(" "), e("portal-target", {
                        attrs: {
                            name: "play-game"
                        }
                    }), t._v(" "), e("app-dialog-mobile", {
                        staticClass: "dialog--bottom-sheet dialog--download-app md:d-none",
                        attrs: {
                            "close-on-button-click": !1,
                            show: t.downloadAppDialogToggle
                        },
                        on: {
                            "update:show": function(e) {
                                t.downloadAppDialogToggle = e
                            }
                        },
                        scopedSlots: t._u([{
                            key: "surface",
                            fn: function() {
                                return [e("download-mobile-app", {
                                    on: {
                                        closePopup: function(e) {
                                            t.downloadAppDialogToggle = !1
                                        },
                                        restartDownload: t.onAppDownloadRestart
                                    }
                                })]
                            },
                            proxy: !0
                        }])
                    })], 1)
            }), [], !1, null, null, null);
        e.a = component.exports
    },
    function(t, e, o) {
        "use strict";
        o(22);
        var n = o(8),
            r = o(9),
            l = o(11),
            d = o(12),
            c = o(2),
            m = o(4),
            f = (o(18), o(10), o(26), o(75)),
            h = o.n(f),
            x = o(0),
            v = o(413),
            w = o(411),
            y = o(412),
            _ = o(77),
            k = o(78),
            A = o(58),
            C = o(79),
            O = o(80),
            j = o(89),
            P = o(56),
            D = o(57),
            R = o(74),
            z = o(59),
            S = o(60);
        function B(t) {
            var e = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return ! 1;
                if (Reflect.construct.sham) return ! 1;
                if ("function" == typeof Proxy) return ! 0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))),
                        !0
                } catch(t) {
                    return ! 1
                }
            } ();
            return function() {
                var o, n = Object(c.a)(t);
                if (e) {
                    var r = Object(c.a)(this).constructor;
                    o = Reflect.construct(n, arguments, r)
                } else o = n.apply(this, arguments);
                return Object(d.a)(this, o)
            }
        }
        var T = function(t, e, o, desc) {
            var n, r = arguments.length,
                l = r < 3 ? e: null === desc ? desc = Object.getOwnPropertyDescriptor(e, o) : desc;
            if ("object" === ("undefined" == typeof Reflect ? "undefined": Object(m.a)(Reflect)) && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, e, o, desc);
            else for (var i = t.length - 1; i >= 0; i--)(n = t[i]) && (l = (r < 3 ? n(l) : r > 3 ? n(e, o, l) : n(e, o)) || l);
            return r > 3 && l && Object.defineProperty(e, o, l),
                l
        };
        v.a.use([w.a, y.a]);
        var L = function(t) {
                Object(l.a)(o, t);
                var e = B(o);
                function o() {
                    var t;
                    return Object(n.a)(this, o),
                        (t = e.apply(this, arguments)).show = !0,
                        t.dialogToggle = !1,
                        t.dialogTogglePlay = !1,
                        t.downloadAppDialogToggle = !1,
                        t
                }
                return Object(r.a)(o, [{
                    key: "created",
                    value: function() {
                        var t = this;
                        this.$bus.$on("showDownloadWebApp", (function() {
                            t.dialogToggle = !0
                        }))
                    }
                },
                    {
                        key: "mounted",
                        value: function() {
                            var t = this;
                            this.$nuxt.$on("downloadAppDialogToggleEvent", this.onDownloadAppDialogToggle),
                                this.$nextTick((function() {
                                    h.a.init({
                                        duration: 500,
                                        easing: "ease",
                                        once: !0,
                                        offset: 72
                                    })
                                }));
                            var e = document.querySelectorAll(".play-win-button");
                            e && e.forEach((function(e) {
                                e.addEventListener("click", t.FunPlayWin)
                            }))
                        }
                    },
                    {
                        key: "scrollToTop",
                        value: function() {
                            window.scrollTo({
                                top: 0,
                                behavior: "smooth"
                            })
                        }
                    },
                    {
                        key: "onDownloadAppDialogToggle",
                        value: function(t) {
                            this.downloadAppDialogToggle = t
                        }
                    },
                    {
                        key: "onAppDownloadRestart",
                        value: function() {
                            this.$nuxt.$emit("appDownloadRestart")
                        }
                    },
                    {
                        key: "FunPlayWin",
                        value: function() {
                            this.dialogTogglePlay = !0
                        }
                    },
                    {
                        key: "beforeDestroy",
                        value: function() {
                            this.$nuxt.$off("closeDownloadAppPopup")
                        }
                    }]),
                    o
            } (x.d),
            E = L = T([Object(x.a)({
                name: "OffersViewLayout",
                components: {
                    PlayGame: R.
                        default,
                    AppApkDownload: j.
                        default,
                    AppHeader: _.
                        default,
                    AppGridHelper: k.
                        default,
                    AppFooter: C.
                        default,
                    AppTabCard: A.
                        default,
                    AppCursor: O.
                        default,
                    DownloadWebApp: D.
                        default,
                    AppDialogWeb: P.
                        default,
                    AppDialogMobile: z.
                        default,
                    DownloadMobileApp: S.
                        default
                },
                transition: "opacity"
            })], L),
            F = o(5),
            component = Object(F.a)(E, (function() {
                var t = this,
                    e = t._self._c;
                t._self._setupProxy;
                return e("div", {
                        staticClass: "w-full position-relative overflow-x-hidden"
                    },
                    [e("app-header"), t._v(" "), e("div", {
                            staticClass: "main-wrapper w-full"
                        },
                        [e("Nuxt")], 1), t._v(" "), e("portal-target", {
                        attrs: {
                            name: "popup-dialog"
                        }
                    }), t._v(" "), e("portal-target", {
                        attrs: {
                            name: "popup-download-app-web"
                        }
                    }), t._v(" "), e("portal-target", {
                        attrs: {
                            name: "popup-download-app-mobile"
                        }
                    }), t._v(" "), e("portal-target", {
                        attrs: {
                            name: "play-game"
                        }
                    }), t._v(" "), e("app-footer"), t._v(" "), e("app-apk-download", {
                        attrs: {
                            "is-offer-detail-page": "true"
                        }
                    }), t._v(" "), t.dialogToggle ? e("div", {
                            staticClass: "z-index-9"
                        },
                        [e("app-dialog-web", {
                            staticClass: "dialog--download-app",
                            staticStyle: {
                                "z-index": "25"
                            },
                            attrs: {
                                "bg-color": {
                                    "bg-light": !0
                                },
                                "portal-height": {
                                    "height-332": !1,
                                    "height-578": !0
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
                                    return [e("download-web-app")]
                                },
                                proxy: !0
                            }], null, !1, 668603480)
                        })], 1) : t._e(), t._v(" "), t.dialogTogglePlay ? e("div", {
                            staticClass: "z-index-9"
                        },
                        [e("app-dialog-web", {
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
                                show: t.dialogTogglePlay
                            },
                            on: {
                                "update:show": function(e) {
                                    t.dialogTogglePlay = e
                                }
                            },
                            scopedSlots: t._u([{
                                key: "surface",
                                fn: function() {
                                    return [e("play-game")]
                                },
                                proxy: !0
                            }], null, !1, 1259685722)
                        })], 1) : t._e(), t._v(" "), e("div", {
                        staticClass: "position-fixed border-radius-circle scroll-to-top",
                        on: {
                            click: t.scrollToTop
                        }
                    }), t._v(" "), e("app-dialog-mobile", {
                        staticClass: "dialog--bottom-sheet dialog--download-app md:d-none",
                        attrs: {
                            "close-on-button-click": !1,
                            show: t.downloadAppDialogToggle
                        },
                        on: {
                            "update:show": function(e) {
                                t.downloadAppDialogToggle = e
                            }
                        },
                        scopedSlots: t._u([{
                            key: "surface",
                            fn: function() {
                                return [e("download-mobile-app", {
                                    on: {
                                        closePopup: function(e) {
                                            t.downloadAppDialogToggle = !1
                                        },
                                        restartDownload: t.onAppDownloadRestart
                                    }
                                })]
                            },
                            proxy: !0
                        }])
                    })], 1)
            }), [], !1, null, null, null);
        e.a = component.exports
    },
    function(t, e, o) {
        "use strict";
        o.r(e);
        o(22);
        var n = o(8),
            r = o(9),
            l = o(11),
            d = o(12),
            c = o(2),
            m = o(4),
            f = (o(18), o(10), o(41), o(52), o(0)),
            h = o(120),
            x = o(280);
        function v(t) {
            var e = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return ! 1;
                if (Reflect.construct.sham) return ! 1;
                if ("function" == typeof Proxy) return ! 0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))),
                        !0
                } catch(t) {
                    return ! 1
                }
            } ();
            return function() {
                var o, n = Object(c.a)(t);
                if (e) {
                    var r = Object(c.a)(this).constructor;
                    o = Reflect.construct(n, arguments, r)
                } else o = n.apply(this, arguments);
                return Object(d.a)(this, o)
            }
        }
        var w = function(t, e, o, desc) {
                var n, r = arguments.length,
                    l = r < 3 ? e: null === desc ? desc = Object.getOwnPropertyDescriptor(e, o) : desc;
                if ("object" === ("undefined" == typeof Reflect ? "undefined": Object(m.a)(Reflect)) && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, e, o, desc);
                else for (var i = t.length - 1; i >= 0; i--)(n = t[i]) && (l = (r < 3 ? n(l) : r > 3 ? n(e, o, l) : n(e, o)) || l);
                return r > 3 && l && Object.defineProperty(e, o, l),
                    l
            },
            y = function(t) {
                Object(l.a)(o, t);
                var e = v(o);
                function o() {
                    var t;
                    return Object(n.a)(this, o),
                        (t = e.apply(this, arguments)).isAndroidDevice = !0,
                        t
                }
                return Object(r.a)(o, [{
                    key: "mounted",
                    value: function() {
                        this.isAndroidDevice = navigator.userAgent.toLowerCase().includes("android")
                    }
                }]),
                    o
            } (f.d);
        w([Object(f.c)({
            type: Boolean,
            default:
                !1
        })], y.prototype, "showTextTile", void 0),
            w([Object(f.c)({
                type: String,
                default:
                    !1
            })], y.prototype, "playButtonLink", void 0),
            w([Object(f.c)({
                type: Boolean,
                default:
                    !1
            })], y.prototype, "showPlayButton", void 0);
        var _ = y = w([Object(f.a)({
                components: {
                    PlayButton: x.
                        default,
                    AppDownloadButton: h.
                        default
                }
            })], y),
            k = (o(384), o(5)),
            component = Object(k.a)(_, (function() {
                var t = this,
                    e = t._self._c;
                t._self._setupProxy;
                return t.showPlayButton ? e("div", {
                        staticClass: "position-fixed apk-download-wrapper-footer apk-download left-0 h-88 d-flex flex-col justify-content-between gutter-4 duration-300 transition-transform"
                    },
                    [e("div", {
                            staticClass: "md:d-none bg-secondary position-relative"
                        },
                        [e("div", {
                                staticClass: "container container--box h-full gutter-3"
                            },
                            [e("div", {
                                    staticClass: "row h-full align-items-center pb-12 pt-32"
                                },
                                [e("div", {
                                        staticClass: "position-absolute mobile-download-btn"
                                    },
                                    [e("play-button", {
                                        attrs: {
                                            "play-button-link": t.playButtonLink,
                                            "app-button-style": {
                                                "border-radius-62": !0,
                                                "border-radius-6": !1
                                            }
                                        }
                                    })], 1), t._v(" "), e("div", {
                                        staticClass: "col col--12"
                                    },
                                    [t.showTextTile ? e("p", {
                                            staticClass: "font-12 font-500 mt-8 text-yellow text-center"
                                        },
                                        [t._v("🔥 Get 125% Cash Bonus on 1st Add Cash up to ₹18,750 + ₹500 Extra Cash")]) : t._e()])])])])]) : t._e()
            }), [], !1, null, "812b3cb2", null);
        e.
            default = component.exports
    },
    function(t, e, o) {
        "use strict";
        o.r(e);
        var n = o(23),
            r = o(8),
            l = o(9),
            d = o(11),
            c = o(12),
            m = o(2),
            f = o(4),
            h = (o(18), o(10), o(22), o(38), o(30), o(40), o(26), o(50), o(0));
        function x(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(object);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(object, t).enumerable
                }))),
                    e.push.apply(e, o)
            }
            return e
        }
        function v(t) {
            var e = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return ! 1;
                if (Reflect.construct.sham) return ! 1;
                if ("function" == typeof Proxy) return ! 0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))),
                        !0
                } catch(t) {
                    return ! 1
                }
            } ();
            return function() {
                var o, n = Object(m.a)(t);
                if (e) {
                    var r = Object(m.a)(this).constructor;
                    o = Reflect.construct(n, arguments, r)
                } else o = n.apply(this, arguments);
                return Object(c.a)(this, o)
            }
        }
        var w = function(t, e, o, desc) {
                var n, r = arguments.length,
                    l = r < 3 ? e: null === desc ? desc = Object.getOwnPropertyDescriptor(e, o) : desc;
                if ("object" === ("undefined" == typeof Reflect ? "undefined": Object(f.a)(Reflect)) && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, e, o, desc);
                else for (var i = t.length - 1; i >= 0; i--)(n = t[i]) && (l = (r < 3 ? n(l) : r > 3 ? n(e, o, l) : n(e, o)) || l);
                return r > 3 && l && Object.defineProperty(e, o, l),
                    l
            },
            y = function(t) {
                Object(d.a)(o, t);
                var e = v(o);
                function o() {
                    return Object(r.a)(this, o),
                        e.apply(this, arguments)
                }
                return Object(l.a)(o, [{
                    key: "computedStyleObject",
                    get: function() {
                        return function(t) {
                            for (var i = 1; i < arguments.length; i++) {
                                var source = null != arguments[i] ? arguments[i] : {};
                                i % 2 ? x(Object(source), !0).forEach((function(e) {
                                    Object(n.a)(t, e, source[e])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : x(Object(source)).forEach((function(e) {
                                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                                }))
                            }
                            return t
                        } ({
                                width: "20px",
                                height: "20px",
                                backgroundColor: "#3ff9dc"
                            },
                            this.styleConfig)
                    }
                }]),
                    o
            } (h.d);
        w([Object(h.c)({
            type: Object,
            default:
                function() {}
        })], y.prototype, "styleConfig", void 0);
        var _ = y = w([Object(h.a)({
                components: {}
            })], y),
            k = (o(378), o(5)),
            component = Object(k.a)(_, (function() {
                var t = this,
                    e = t._self._c;
                t._self._setupProxy;
                return e("div", {
                        staticClass: "pulse-container d-flex justify-content-between align-items-center"
                    },
                    [e("div", {
                        staticClass: "pulse-bubble border-radius-circle pulse-bubble-1",
                        style: t.computedStyleObject
                    }), t._v(" "), e("div", {
                        staticClass: "pulse-bubble border-radius-circle pulse-bubble-2",
                        staticStyle: {
                            "animation-delay": "0.2s"
                        },
                        style: t.computedStyleObject
                    }), t._v(" "), e("div", {
                        staticClass: "pulse-bubble border-radius-circle pulse-bubble-3",
                        staticStyle: {
                            "animation-delay": "0.4s"
                        },
                        style: t.computedStyleObject
                    })])
            }), [], !1, null, null, null);
        e.
            default = component.exports
    },
    function(t, e, o) {
        "use strict";
        o.r(e);
        o(22);
        var n = o(8),
            r = o(9),
            l = o(11),
            d = o(12),
            c = o(2),
            m = o(4),
            f = (o(18), o(10), o(41), o(52), o(0));
        function h(t) {
            var e = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return ! 1;
                if (Reflect.construct.sham) return ! 1;
                if ("function" == typeof Proxy) return ! 0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))),
                        !0
                } catch(t) {
                    return ! 1
                }
            } ();
            return function() {
                var o, n = Object(c.a)(t);
                if (e) {
                    var r = Object(c.a)(this).constructor;
                    o = Reflect.construct(n, arguments, r)
                } else o = n.apply(this, arguments);
                return Object(d.a)(this, o)
            }
        }
        var x = function(t, e, o, desc) {
                var n, r = arguments.length,
                    l = r < 3 ? e: null === desc ? desc = Object.getOwnPropertyDescriptor(e, o) : desc;
                if ("object" === ("undefined" == typeof Reflect ? "undefined": Object(m.a)(Reflect)) && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, e, o, desc);
                else for (var i = t.length - 1; i >= 0; i--)(n = t[i]) && (l = (r < 3 ? n(l) : r > 3 ? n(e, o, l) : n(e, o)) || l);
                return r > 3 && l && Object.defineProperty(e, o, l),
                    l
            },
            v = function(t) {
                Object(l.a)(o, t);
                var e = h(o);
                function o() {
                    var t;
                    return Object(n.a)(this, o),
                        (t = e.apply(this, arguments)).isAndroidDevice = !0,
                        t
                }
                return Object(r.a)(o, [{
                    key: "mounted",
                    value: function() {
                        this.isAndroidDevice = navigator.userAgent.toLowerCase().includes("android")
                    }
                }]),
                    o
            } (f.d);
        x([Object(f.c)({
            type: Object,
            default:
                function() {
                    return {}
                }
        })], v.prototype, "AppButtonStyle", void 0),
            x([Object(f.c)({
                type: String,
                default:
                    !1
            })], v.prototype, "playButtonLink", void 0);
        var w = v = x([Object(f.a)({
                components: {}
            })], v),
            y = (o(382), o(5)),
            component = Object(y.a)(w, (function() {
                var t = this,
                    e = t._self._c;
                t._self._setupProxy;
                return e("div", [t.isAndroidDevice ? e("div", {
                        staticClass: "d-flex top-download-button"
                    },
                    [e("a", {
                            staticClass: "d-flex download-btn w-full align-items-center justify-content-center button--lg border-1 border-theme-surface text-theme-secondary h-48 bg-dark button button__label font-normal download-app-button__android",
                            class: t.AppButtonStyle,
                            attrs: {
                                href: t.playButtonLink || "gamezy://app/game/#/fantasy?gameMode=1",
                                rel: "noopener nofollow",
                                target: "_blank"
                            }
                        },
                        [e("img", {
                            staticClass: "mr-10",
                            attrs: {
                                src: "/img/android-logo.svg",
                                alt: "Play Now",
                                height: "20",
                                width: "20"
                            }
                        }), t._v(" "), e("span", {
                                staticClass: "button__label font-normal line-height-24 font-16 text-white"
                            },
                            [t._v("Play Now!")])])]) : e("div", {
                        staticClass: "d-flex top-download-button"
                    },
                    [e("a", {
                            staticClass: "d-flex download-btn w-full align-items-center justify-content-center button--lg border-1 border-theme-surface text-theme-secondary h-48 bg-dark button button__label font-normal download-app-button__ios",
                            class: t.AppButtonStyle,
                            attrs: {
                                href: t.playButtonLink || "gamezy://app/game/#/fantasy?gameMode=1",
                                rel: "noopener nofollow",
                                target: "_blank"
                            }
                        },
                        [e("img", {
                            staticClass: "mr-10",
                            attrs: {
                                src: "/img/apple-logo.svg",
                                alt: "Play Now",
                                height: "20",
                                width: "20"
                            }
                        }), t._v(" "), e("span", {
                                staticClass: "button__label font-normal line-height-24 font-16 text-white"
                            },
                            [t._v("Play Now!")])])])])
            }), [], !1, null, null, null);
        e.
            default = component.exports
    },
    , , , , , , , , , , ,
    function(t, e, o) {
        o(293),
            t.exports = o(294)
    },
    , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,
    function(t, e, o) {
        var content = o(343);
        content.__esModule && (content = content.
            default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals); (0, o(36).
            default)("72abedf5", content, !0, {
            sourceMap: !1
        })
    },
    function(t, e, o) {
        var n = o(35),
            r = o(286),
            l = o(344),
            d = o(345),
            c = o(346),
            m = o(347),
            f = o(348),
            h = o(349),
            x = o(350),
            v = o(351),
            w = o(352),
            y = o(353),
            _ = n(!1),
            k = r(l),
            A = r(d),
            C = r(c),
            O = r(m),
            j = r(f),
            P = r(h),
            D = r(x),
            R = r(v),
            z = r(w),
            S = r(y);
        _.push([t.i, ':root{--link-color:rgb(var(--color-accent));--link-decoration:none;--grid-gutter:24px;--grid-gutter-negative:-24px;--container-box-width:1200px;--base-body-font:"Basier Circle",sans-serif;--base-heading-font:"Basier Circle",sans-serif;--base-monospace-font:SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--base-font-size:15px;--base-paragraph-margin-top:0;--base-paragraph-margin-bottom:1rem;--base-heading-margin-top:0;--base-heading-margin-bottom:1rem;--base-font-weight:400;--base-line-height:1.25;--base-link-color:#5f259f;--color-primary:#5f259f;--color-green:#009a4b;--color-yellow:#f9c921;--color-red:#fe4850;--theme-text-primary:#111835;--theme-text-secondary:#41465d;--theme-surface:#fff;--theme-background:#fff;--breakpoint-xs:0;--breakpoint-sm:640px;--breakpoint-md:960px;--gutter-1:16;--gutter-2:24;--gutter-3:32;--gutter-4:48;--button-background:transparent;--button-background-hover:var(--theme-text-primary);--button-color:var(--theme-text-primary);--button-icon-size:18px;--icon-button-color:var(--color-primary-contrast);--icon-button-background:var(--color-primary)}*,:after,:before{box-sizing:border-box;border:0 solid transparent}html{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}article,aside,details,footer,header,main,nav,section{display:block}summary{display:list-item;cursor:pointer}menu{display:block}canvas{display:inline-block}body{margin:0;font-family:"Basier Circle",sans-serif;font-family:var(--base-body-font);font-size:15px;font-size:var(--base-font-size);font-weight:400;font-weight:var(--base-font-weight);line-height:1.25;line-height:var(--base-line-height);color:#111835;color:var(--theme-text-primary);background:#fff;background:var(--theme-background)}[tabindex="-1"]:focus{outline:0!important}hr{box-sizing:content-box;height:0;overflow:visible}h1,h2,h3,h4,h5,h6{margin-top:0;margin-top:var(--base-heading-margin-top);margin-bottom:1rem;margin-bottom:var(--base-heading-margin-bottom);font-family:"Basier Circle",sans-serif;font-family:var(--base-heading-font)}p{margin-top:0;margin-top:var(--base-paragraph-margin-top);margin-bottom:1rem;margin-bottom:var(--base-paragraph-margin-bottom)}abbr[title]{-webkit-text-decoration:underline dotted;text-decoration:underline dotted;cursor:help;border-bottom:0;-webkit-text-decoration-skip-ink:none;text-decoration-skip-ink:none}address{font-style:normal;line-height:inherit}address,dl,ol,ul{margin-bottom:1rem}dl,ol,ul{margin-top:0;padding:0;list-style:none}ol ol,ol ul,ul ol,ul ul{margin-bottom:0}dt{font-weight:500}dd{margin-bottom:.5rem;margin-left:0}blockquote{margin:0 0 1rem}b,strong{font-weight:500}small{font-size:80%}sub,sup{position:relative;font-size:75%;line-height:0;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}a{touch-action:manipulation;color:#5f259f;color:var(--base-link-color);text-decoration:none;background-color:transparent}code,kbd,pre,samp{font-family:SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;font-family:var(--base-monospace-font);font-size:1em}pre{margin-top:0;margin-bottom:1rem;overflow:auto}dfn{font-style:italic}mark{color:var(--color-accent-contrast);background-color:var(--color-accent)}figure{margin:0 0 1rem}img{border-style:none;min-height:1px}img,svg{vertical-align:middle}svg{overflow:hidden}audio,video{display:inline-block}audio:not([controls]){display:none;height:0}table{border-collapse:collapse}caption{text-align:left;caption-side:bottom}th{text-align:inherit}button,input,optgroup,select,textarea{margin:0;font-family:inherit;font-size:inherit;line-height:inherit}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{position:relative;touch-action:manipulation;-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{padding:0;border-style:none}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted}input[type=checkbox],input[type=radio]{box-sizing:border-box;padding:0}input[type=date],input[type=datetime-local],input[type=month],input[type=time]{-webkit-appearance:listbox}textarea{overflow:auto;resize:vertical}fieldset{min-width:0;margin:0;padding:0;border:0}label{font-size:1rem}legend{display:block;width:100%;max-width:100%;margin-bottom:.5rem;padding:0;font-size:1.5rem;line-height:inherit;color:inherit;white-space:normal}progress{display:inline-block;vertical-align:baseline}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{outline-offset:-2px;-webkit-appearance:none}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{font:inherit;-webkit-appearance:button}output{display:inline-block}template{display:none}[hidden]{display:none!important}[data-aos][data-aos][data-aos-easing=ease],body[data-aos-easing=ease] [data-aos]{transition-timing-function:ease}[data-aos][data-aos][data-aos-duration="300"],body[data-aos-duration="300"] [data-aos]{transition-duration:.3s}[data-aos][data-aos-delay="100"]{transition-delay:.1s}[data-aos][data-aos-delay="200"]{transition-delay:.2s}[data-aos][data-aos-delay="300"]{transition-delay:.3s}[data-aos][data-aos-delay="400"]{transition-delay:.4s}[data-aos][data-aos-delay="500"]{transition-delay:.5s}[data-aos=animation-scale-x-left]{transform:translateX(-50px) scaleX(1.1);opacity:0;transition-property:transform,opacity}[data-aos=animation-scale-x-left].aos-animate{transform:translateX(0) scaleX(1);opacity:1}[data-aos=animation-scale-x-right]{transform:translateX(50px) scaleX(1.1);opacity:0;transition-property:transform,opacity}[data-aos=animation-scale-x-right].aos-animate{transform:translateX(0) scaleX(1);opacity:1}[data-aos=animation-scale-y]{transform:translateY(40px) scaleY(1.4);opacity:0;transition-property:transform,opacity}[data-aos=animation-scale-y].aos-animate{transform:translateX(0) scaleY(1);opacity:1}[data-aos=animation-scale-x]{transform:translateY(-40px) scaleY(1.1);opacity:0;transition-property:transform,opacity}[data-aos=animation-scale-x].aos-animate{transform:translateX(0) scaleY(1);opacity:1}[data-aos=animation-translate-y]{transform:translateY(40px);opacity:0;transition-property:transform,opacity}[data-aos=animation-translate-y].aos-animate{transform:translateX(0);opacity:1}[data-aos=animation-translate-x-right]{transform:translateX(40px);opacity:0;transition-property:transform,opacity}[data-aos=animation-translate-x-right].aos-animate{transform:translateX(0);opacity:1}[data-aos=animation-fade]{opacity:0;transition-property:opacity}[data-aos=animation-fade].aos-animate{opacity:1}[data-aos=animation-image]{transform:translateY(100%);opacity:0}[data-aos=animation-image].aos-animate{transform:translateY(0);opacity:1}[data-aos=animation-video-banner]{transform:translateX(100%);opacity:0}[data-aos=animation-video-banner].aos-animate{transform:translateX(0);opacity:1}.landing-view__slider{visibility:hidden;opacity:0;transform:scale(.9);transition-property:opacity,transform;transition-duration:.5s;transition-delay:.2s}.landing-view__slider--first{transition-delay:.4s}.swiper-slide-active .landing-view__slider{opacity:1;transform:translateX(0) scale(1);visibility:visible}@media(max-width:1024px){.delay-mobile-200{transition-delay:.2s!important}}@font-face{font-family:"swiper-icons";src:url("data:application/font-woff;charset=utf-8;base64, d09GRgABAAAAAAZgABAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAGRAAAABoAAAAci6qHkUdERUYAAAWgAAAAIwAAACQAYABXR1BPUwAABhQAAAAuAAAANuAY7+xHU1VCAAAFxAAAAFAAAABm2fPczU9TLzIAAAHcAAAASgAAAGBP9V5RY21hcAAAAkQAAACIAAABYt6F0cBjdnQgAAACzAAAAAQAAAAEABEBRGdhc3AAAAWYAAAACAAAAAj//wADZ2x5ZgAAAywAAADMAAAD2MHtryVoZWFkAAABbAAAADAAAAA2E2+eoWhoZWEAAAGcAAAAHwAAACQC9gDzaG10eAAAAigAAAAZAAAArgJkABFsb2NhAAAC0AAAAFoAAABaFQAUGG1heHAAAAG8AAAAHwAAACAAcABAbmFtZQAAA/gAAAE5AAACXvFdBwlwb3N0AAAFNAAAAGIAAACE5s74hXjaY2BkYGAAYpf5Hu/j+W2+MnAzMYDAzaX6QjD6/4//Bxj5GA8AuRwMYGkAPywL13jaY2BkYGA88P8Agx4j+/8fQDYfA1AEBWgDAIB2BOoAeNpjYGRgYNBh4GdgYgABEMnIABJzYNADCQAACWgAsQB42mNgYfzCOIGBlYGB0YcxjYGBwR1Kf2WQZGhhYGBiYGVmgAFGBiQQkOaawtDAoMBQxXjg/wEGPcYDDA4wNUA2CCgwsAAAO4EL6gAAeNpj2M0gyAACqxgGNWBkZ2D4/wMA+xkDdgAAAHjaY2BgYGaAYBkGRgYQiAHyGMF8FgYHIM3DwMHABGQrMOgyWDLEM1T9/w8UBfEMgLzE////P/5//f/V/xv+r4eaAAeMbAxwIUYmIMHEgKYAYjUcsDAwsLKxc3BycfPw8jEQA/gZBASFhEVExcQlJKWkZWTl5BUUlZRVVNXUNTQZBgMAAMR+E+gAEQFEAAAAKgAqACoANAA+AEgAUgBcAGYAcAB6AIQAjgCYAKIArAC2AMAAygDUAN4A6ADyAPwBBgEQARoBJAEuATgBQgFMAVYBYAFqAXQBfgGIAZIBnAGmAbIBzgHsAAB42u2NMQ6CUAyGW568x9AneYYgm4MJbhKFaExIOAVX8ApewSt4Bic4AfeAid3VOBixDxfPYEza5O+Xfi04YADggiUIULCuEJK8VhO4bSvpdnktHI5QCYtdi2sl8ZnXaHlqUrNKzdKcT8cjlq+rwZSvIVczNiezsfnP/uznmfPFBNODM2K7MTQ45YEAZqGP81AmGGcF3iPqOop0r1SPTaTbVkfUe4HXj97wYE+yNwWYxwWu4v1ugWHgo3S1XdZEVqWM7ET0cfnLGxWfkgR42o2PvWrDMBSFj/IHLaF0zKjRgdiVMwScNRAoWUoH78Y2icB/yIY09An6AH2Bdu/UB+yxopYshQiEvnvu0dURgDt8QeC8PDw7Fpji3fEA4z/PEJ6YOB5hKh4dj3EvXhxPqH/SKUY3rJ7srZ4FZnh1PMAtPhwP6fl2PMJMPDgeQ4rY8YT6Gzao0eAEA409DuggmTnFnOcSCiEiLMgxCiTI6Cq5DZUd3Qmp10vO0LaLTd2cjN4fOumlc7lUYbSQcZFkutRG7g6JKZKy0RmdLY680CDnEJ+UMkpFFe1RN7nxdVpXrC4aTtnaurOnYercZg2YVmLN/d/gczfEimrE/fs/bOuq29Zmn8tloORaXgZgGa78yO9/cnXm2BpaGvq25Dv9S4E9+5SIc9PqupJKhYFSSl47+Qcr1mYNAAAAeNptw0cKwkAAAMDZJA8Q7OUJvkLsPfZ6zFVERPy8qHh2YER+3i/BP83vIBLLySsoKimrqKqpa2hp6+jq6RsYGhmbmJqZSy0sraxtbO3sHRydnEMU4uR6yx7JJXveP7WrDycAAAAAAAH//wACeNpjYGRgYOABYhkgZgJCZgZNBkYGLQZtIJsFLMYAAAw3ALgAeNolizEKgDAQBCchRbC2sFER0YD6qVQiBCv/H9ezGI6Z5XBAw8CBK/m5iQQVauVbXLnOrMZv2oLdKFa8Pjuru2hJzGabmOSLzNMzvutpB3N42mNgZGBg4GKQYzBhYMxJLMlj4GBgAYow/P/PAJJhLM6sSoWKfWCAAwDAjgbRAAB42mNgYGBkAIIbCZo5IPrmUn0hGA0AO8EFTQAA") format("woff");font-weight:400;font-style:normal}:root{--swiper-theme-color:#007aff}.swiper-container{margin-left:auto;margin-right:auto;position:relative;overflow:hidden;list-style:none;padding:0;z-index:1}.swiper-container-vertical>.swiper-wrapper{flex-direction:column}.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:flex;transition-property:transform;box-sizing:content-box}.swiper-container-android .swiper-slide,.swiper-wrapper{transform:translateZ(0)}.swiper-container-multirow>.swiper-wrapper{flex-wrap:wrap}.swiper-container-multirow-column>.swiper-wrapper{flex-wrap:wrap;flex-direction:column}.swiper-container-free-mode>.swiper-wrapper{transition-timing-function:ease-out;margin:0 auto}.swiper-container-pointer-events{touch-action:pan-y}.swiper-container-pointer-events.swiper-container-vertical{touch-action:pan-x}.swiper-slide{flex-shrink:0;width:100%;height:100%;position:relative;transition-property:transform}.swiper-slide-invisible-blank{visibility:hidden}.swiper-container-autoheight,.swiper-container-autoheight .swiper-slide{height:auto}.swiper-container-autoheight .swiper-wrapper{align-items:flex-start;transition-property:transform,height}.swiper-container-3d{perspective:1200px}.swiper-container-3d .swiper-cube-shadow,.swiper-container-3d .swiper-slide,.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top,.swiper-container-3d .swiper-wrapper{transform-style:preserve-3d}.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}.swiper-container-3d .swiper-slide-shadow-left{background-image:linear-gradient(270deg,rgba(0,0,0,.5),transparent)}.swiper-container-3d .swiper-slide-shadow-right{background-image:linear-gradient(90deg,rgba(0,0,0,.5),transparent)}.swiper-container-3d .swiper-slide-shadow-top{background-image:linear-gradient(0deg,rgba(0,0,0,.5),transparent)}.swiper-container-3d .swiper-slide-shadow-bottom{background-image:linear-gradient(180deg,rgba(0,0,0,.5),transparent)}.swiper-container-css-mode>.swiper-wrapper{overflow:auto;scrollbar-width:none;-ms-overflow-style:none}.swiper-container-css-mode>.swiper-wrapper::-webkit-scrollbar{display:none}.swiper-container-css-mode>.swiper-wrapper>.swiper-slide{scroll-snap-align:start start}.swiper-container-horizontal.swiper-container-css-mode>.swiper-wrapper{scroll-snap-type:x mandatory}.swiper-container-vertical.swiper-container-css-mode>.swiper-wrapper{scroll-snap-type:y mandatory}.swiper-container-fade.swiper-container-free-mode .swiper-slide{transition-timing-function:ease-out}.swiper-container-fade .swiper-slide{pointer-events:none;transition-property:opacity}.swiper-container-fade .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-fade .swiper-slide-active,.swiper-container-fade .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-pagination{position:absolute;text-align:center;transition:opacity .3s;transform:translateZ(0);z-index:10}.swiper-pagination.swiper-pagination-hidden{opacity:0}.swiper-container-horizontal>.swiper-pagination-bullets,.swiper-pagination-custom,.swiper-pagination-fraction{bottom:10px;left:0;width:100%}.swiper-pagination-bullets-dynamic{overflow:hidden;font-size:0}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transform:scale(.33);position:relative}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active,.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main{transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev{transform:scale(.33)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next{transform:scale(.33)}.swiper-pagination-bullet{width:8px;height:8px;display:inline-block;border-radius:50%;background:#000;opacity:.2}button.swiper-pagination-bullet{border:none;margin:0;padding:0;box-shadow:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}.swiper-pagination-bullet:only-child{display:none!important}.swiper-pagination-bullet-active{opacity:1;background:var(--swiper-theme-color);background:var(--swiper-pagination-color,var(--swiper-theme-color))}.swiper-container-vertical>.swiper-pagination-bullets{right:10px;top:50%;transform:translate3d(0,-50%,0)}.swiper-container-vertical>.swiper-pagination-bullets .swiper-pagination-bullet{margin:6px 0;display:block}.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{top:50%;transform:translateY(-50%);width:8px}.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{display:inline-block;transition:transform .2s,top .2s}.swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 4px}.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{left:50%;transform:translateX(-50%);white-space:nowrap}.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:transform .2s,left .2s}.swiper-container-horizontal.swiper-container-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:transform .2s,right .2s}.swiper-pagination-progressbar{background:rgba(0,0,0,.25);position:absolute}.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:var(--swiper-theme-color);background:var(--swiper-pagination-color,var(--swiper-theme-color));position:absolute;left:0;top:0;width:100%;height:100%;transform:scale(0);transform-origin:left top}.swiper-container-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{transform-origin:right top}.swiper-container-horizontal>.swiper-pagination-progressbar,.swiper-container-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite{width:100%;height:4px;left:0;top:0}.swiper-container-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-container-vertical>.swiper-pagination-progressbar{width:4px;height:100%;left:0;top:0}.swiper-pagination-white{--swiper-pagination-color:#fff}.swiper-pagination-black{--swiper-pagination-color:#000}.swiper-pagination-lock{display:none}.img-pie{overflow:hidden}.img-pie__wrapper{overflow:hidden;position:relative;padding-top:100%;width:100%}.img-pie__wrapper>*{display:block;left:0;height:100%;position:absolute;top:0;visibility:hidden;width:100%;transition-property:opacity,transform;will-change:opacity,transform;-o-object-fit:cover;object-fit:cover;-o-object-position:center;object-position:center;transition-delay:0s;transition-duration:.4s;transition-timing-function:ease}.img-pie__placeholder{background-repeat:no-repeat;visibility:visible;background-size:cover;background-position:50%;opacity:1}.img-pie__picture{display:flex}.img-pie--done .img-pie__img{opacity:1;transform:none!important;visibility:visible!important}.img-pie--done .img-pie__placeholder{opacity:0!important;pointer-events:none}@font-face{font-family:"Basier Circle";src:url(' + k + ') format("woff2"),url(' + A + ') format("woff");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:"Basier Circle";src:url(' + C + ') format("woff2"),url(' + O + ') format("woff");font-weight:600;font-style:normal;font-display:swap}@font-face{font-family:"Basier Circle";src:url(' + j + ') format("woff2"),url(' + P + ') format("woff");font-weight:700;font-style:normal;font-display:swap}@font-face{font-family:"Finger Paint";src:url(' + D + ') format("woff2"),url(' + R + ') format("woff"),url(' + z + ') format("truetype");font-weight:400;font-style:normal;font-display:swap}.button{min-width:64px;text-decoration:none;white-space:nowrap;vertical-align:middle;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;background:transparent;background:var(--button-background);color:#111835;color:var(--button-color)}.button:before{border-radius:4px;transition-duration:.3s;transition-property:opacity;transform:none;will-change:opacity}.button:after{transition-timing-function:linear;transition-duration:.3s}.button--active:before,.button:active:before,.button:focus:before,.button:hover:before{opacity:.08}.button:active:after{opacity:.06}.button__icon{display:inline-block;width:18px;width:var(--button-icon-size);height:18px;height:var(--button-icon-size);margin-right:8px;margin-left:0;font-size:18px;font-size:var(--button-icon-size);vertical-align:top;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.button--outlined .button__icon,.button--raised .button__icon,.button--unelevated .button__icon{margin-left:-4px}.button__icon--trailing{margin-right:0;margin-left:8px}.button--outlined .button__icon--trailing,.button--raised .button__icon--trailing,.button--unelevated .button__icon--trailing{margin-right:-4px;margin-left:8px}.button--white{--button-color:var(--color-white);--button-background-hover:var(--color-white)}.button--white.button--raised:not(:disabled),.button--white.button--unelevated:not(:disabled){--button-background-hover:var(--color-white-contrast);--button-color:var(--color-white-contrast);--button-background:var(--color-white)}.button--primary{--button-color:var(--color-primary);--button-background-hover:var(--color-primary)}.button--primary.button--raised:not(:disabled),.button--primary.button--unelevated:not(:disabled){--button-background-hover:var(--color-primary-contrast);--button-color:var(--color-primary-contrast);--button-background:var(--color-primary)}.button--loading,.button[disabled]{--button-color:var(--theme-disable);pointer-events:none;cursor:default;box-shadow:none}.button--loading:after,.button--loading:before,.button[disabled]:after,.button[disabled]:before{display:none}.button--loading.button--raised,.button[disabled].button--raised{--button-color:var(--theme-disable);--button-background:var(--theme-divider)}.icon-button{text-decoration:none;white-space:nowrap;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;will-change:box-shadow,background;transition:background .4s cubic-bezier(.25,.8,.25,1),color .4s cubic-bezier(.25,.8,.25,1),box-shadow .28s cubic-bezier(.4,0,.2,1);fill:currentColor;-webkit-tap-highlight-color:rgba(0,0,0,0)}.icon-button:after,.icon-button:before{position:absolute;top:-50%;left:-50%;width:200%;height:200%;pointer-events:none;content:" ";background-color:#000;border-radius:50%;opacity:0;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-property:opacity;will-change:opacity}.icon-button:before{border-radius:inherit;transition-duration:.5s;transition-property:transform,opacity;transform:scale(0);will-change:transform,opacity}.icon-button:after{transition-duration:.15s}.icon-button--active:before,.icon-button:active:before,.icon-button:focus:before,.icon-button:hover:before{opacity:.06;transform:none}.icon-button:active:after{opacity:.06}.icon-button__icon{display:inline-block;color:inherit;vertical-align:top;-webkit-user-select:none;-moz-user-select:none;user-select:none}.icon-button--on .icon-button__icon,.icon-button__icon--on{display:none}.icon-button--on .icon-button__icon--on{display:inline-block}.icon-button--accent{--icon-button-background-hover:var(--color-accent-contrast);--icon-button-color:var(--color-accent)}.icon-button[disabled]{--icon-button-color:var(--theme-disable);pointer-events:none;cursor:default}.icon-button[disabled]:after,.icon-button[disabled]:before{display:none}.text-field{outline:none;will-change:opacity,transform;-webkit-tap-highlight-color:rgba(0,0,0,0);overflow:visible;background-color:transparent;--floating-label-color:var(--theme-text-secondary)}.text-field__input{z-index:1;background:transparent;text-decoration:inherit;text-transform:inherit;border:none;border-radius:0;outline:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}.text-field__input:required~.floating-label:after,.text-field__input:required~.notched .floating-label:after{margin-left:1px;content:"*"}.text-field--focused,.text-field:hover{border-color:#111835;border-color:var(--theme-text-primary)}.text-field--focused .text-field__input:required~.floating-label:after,.text-field--focused .text-field__input:required~.notched .floating-label:after{color:#d50000}.text-field--focused:after,.text-field--focused:before{opacity:.06}.text-field--invalid{--notched-border-color:RGB(var(--color-danger));--floating-label-color:RGB(var(--color-danger));--line-ripple-background:RGB(var(--color-danger))}.text-field--disabled .floating-label{color:var(--theme-disable)}.gutter-1{--grid-gutter:8px;--grid-gutter-negative:-8px}.gutter-2{--grid-gutter:12px;--grid-gutter-negative:-12px}.gutter-3{--grid-gutter:16px;--grid-gutter-negative:-16px}.gutter-4{--grid-gutter:24px;--grid-gutter-negative:-24px}@media(min-width:640px){.sm\\:gutter-1{--grid-gutter:8px;--grid-gutter-negative:-8px}.sm\\:gutter-2{--grid-gutter:12px;--grid-gutter-negative:-12px}.sm\\:gutter-3{--grid-gutter:16px;--grid-gutter-negative:-16px}.sm\\:gutter-4{--grid-gutter:24px;--grid-gutter-negative:-24px}}@media(min-width:960px){.md\\:gutter-1{--grid-gutter:8px;--grid-gutter-negative:-8px}.md\\:gutter-2{--grid-gutter:12px;--grid-gutter-negative:-12px}.md\\:gutter-3{--grid-gutter:16px;--grid-gutter-negative:-16px}.md\\:gutter-4{--grid-gutter:24px;--grid-gutter-negative:-24px}}@media(min-width:1280px){.lg\\:gutter-1{--grid-gutter:8px;--grid-gutter-negative:-8px}.lg\\:gutter-2{--grid-gutter:12px;--grid-gutter-negative:-12px}.lg\\:gutter-3{--grid-gutter:16px;--grid-gutter-negative:-16px}.lg\\:gutter-4{--grid-gutter:24px;--grid-gutter-negative:-24px}}.container{width:100%;margin-right:auto;margin-left:auto;padding-right:24px;padding-right:var(--grid-gutter);padding-left:24px;padding-left:var(--grid-gutter)}.container--box{max-width:1200px;max-width:var(--container-box-width)}.row{display:flex;flex-wrap:wrap;align-items:flex-start;margin-right:-24px;margin-right:var(--grid-gutter-negative);margin-left:-24px;margin-left:var(--grid-gutter-negative)}.col-break{width:100%!important}.col{flex-basis:0;flex-grow:1;max-width:100%;min-height:1px;padding-right:24px;padding-right:var(--grid-gutter);padding-left:24px;padding-left:var(--grid-gutter)}.col--1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.col--2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.col--3{flex:0 0 25%;max-width:25%}.col--4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.col--5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.col--6{flex:0 0 50%;max-width:50%}.col--7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.col--8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.col--9{flex:0 0 75%;max-width:75%}.col--10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.col--11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.col--12{flex:0 0 100%;max-width:100%}@media(min-width:640px){.sm\\:col--1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.sm\\:col--2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.sm\\:col--3{flex:0 0 25%;max-width:25%}.sm\\:col--4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.sm\\:col--5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.sm\\:col--6{flex:0 0 50%;max-width:50%}.sm\\:col--7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.sm\\:col--8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.sm\\:col--9{flex:0 0 75%;max-width:75%}.sm\\:col--10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.sm\\:col--11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.sm\\:col--12{flex:0 0 100%;max-width:100%}}@media(min-width:960px){.md\\:col--1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.md\\:col--2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.md\\:col--3{flex:0 0 25%;max-width:25%}.md\\:col--4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.md\\:col--5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.md\\:col--6{flex:0 0 50%;max-width:50%}.md\\:col--7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.md\\:col--8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.md\\:col--9{flex:0 0 75%;max-width:75%}.md\\:col--10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.md\\:col--11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.md\\:col--12{flex:0 0 100%;max-width:100%}}@media(min-width:1280px){.lg\\:col--1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.lg\\:col--2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.lg\\:col--3{flex:0 0 25%;max-width:25%}.lg\\:col--4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.lg\\:col--5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.lg\\:col--6{flex:0 0 50%;max-width:50%}.lg\\:col--7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.lg\\:col--8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.lg\\:col--9{flex:0 0 75%;max-width:75%}.lg\\:col--10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.lg\\:col--11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.lg\\:col--12{flex:0 0 100%;max-width:100%}}.col--offset-1{margin-left:8.3333333333%}.col--offset-2{margin-left:16.6666666667%}.col--offset-3{margin-left:25%}.col--offset-4{margin-left:33.3333333333%}.col--offset-5{margin-left:41.6666666667%}.col--offset-6{margin-left:50%}.col--offset-7{margin-left:58.3333333333%}.col--offset-8{margin-left:66.6666666667%}.col--offset-9{margin-left:75%}.col--offset-10{margin-left:83.3333333333%}.col--offset-11{margin-left:91.6666666667%}.col--offset-12{margin-left:100%}@media(min-width:640px){.sm\\:col--offset-1{margin-left:8.3333333333%}.sm\\:col--offset-2{margin-left:16.6666666667%}.sm\\:col--offset-3{margin-left:25%}.sm\\:col--offset-4{margin-left:33.3333333333%}.sm\\:col--offset-5{margin-left:41.6666666667%}.sm\\:col--offset-6{margin-left:50%}.sm\\:col--offset-7{margin-left:58.3333333333%}.sm\\:col--offset-8{margin-left:66.6666666667%}.sm\\:col--offset-9{margin-left:75%}.sm\\:col--offset-10{margin-left:83.3333333333%}.sm\\:col--offset-11{margin-left:91.6666666667%}.sm\\:col--offset-12{margin-left:100%}}@media(min-width:960px){.md\\:col--offset-1{margin-left:8.3333333333%}.md\\:col--offset-2{margin-left:16.6666666667%}.md\\:col--offset-3{margin-left:25%}.md\\:col--offset-4{margin-left:33.3333333333%}.md\\:col--offset-5{margin-left:41.6666666667%}.md\\:col--offset-6{margin-left:50%}.md\\:col--offset-7{margin-left:58.3333333333%}.md\\:col--offset-8{margin-left:66.6666666667%}.md\\:col--offset-9{margin-left:75%}.md\\:col--offset-10{margin-left:83.3333333333%}.md\\:col--offset-11{margin-left:91.6666666667%}.md\\:col--offset-12{margin-left:100%}}@media(min-width:1280px){.lg\\:col--offset-1{margin-left:8.3333333333%}.lg\\:col--offset-2{margin-left:16.6666666667%}.lg\\:col--offset-3{margin-left:25%}.lg\\:col--offset-4{margin-left:33.3333333333%}.lg\\:col--offset-5{margin-left:41.6666666667%}.lg\\:col--offset-6{margin-left:50%}.lg\\:col--offset-7{margin-left:58.3333333333%}.lg\\:col--offset-8{margin-left:66.6666666667%}.lg\\:col--offset-9{margin-left:75%}.lg\\:col--offset-10{margin-left:83.3333333333%}.lg\\:col--offset-11{margin-left:91.6666666667%}.lg\\:col--offset-12{margin-left:100%}}.align-content-center{align-content:center}.align-content-start{align-content:flex-start}.align-content-end{align-content:flex-end}.align-content-between{align-content:space-between}.align-content-around{align-content:space-around}@media(min-width:640px){.sm\\:align-content-center{align-content:center}.sm\\:align-content-start{align-content:flex-start}.sm\\:align-content-end{align-content:flex-end}.sm\\:align-content-between{align-content:space-between}.sm\\:align-content-around{align-content:space-around}}@media(min-width:960px){.md\\:align-content-center{align-content:center}.md\\:align-content-start{align-content:flex-start}.md\\:align-content-end{align-content:flex-end}.md\\:align-content-between{align-content:space-between}.md\\:align-content-around{align-content:space-around}}@media(min-width:1280px){.lg\\:align-content-center{align-content:center}.lg\\:align-content-start{align-content:flex-start}.lg\\:align-content-end{align-content:flex-end}.lg\\:align-content-between{align-content:space-between}.lg\\:align-content-around{align-content:space-around}}.align-items-start{align-items:flex-start}.align-items-end{align-items:flex-end}.align-items-center{align-items:center}@media(min-width:640px){.sm\\:align-items-start{align-items:flex-start}.sm\\:align-items-end{align-items:flex-end}.sm\\:align-items-center{align-items:center}}@media(min-width:960px){.md\\:align-items-start{align-items:flex-start}.md\\:align-items-end{align-items:flex-end}.md\\:align-items-center{align-items:center}}@media(min-width:1280px){.lg\\:align-items-start{align-items:flex-start}.lg\\:align-items-end{align-items:flex-end}.lg\\:align-items-center{align-items:center}}.appearance-none{-webkit-appearance:none;-moz-appearance:none;appearance:none}.align-self-start{align-self:flex-start}.align-self-end{align-self:flex-end}.align-self-center{align-self:center}@media(min-width:640px){.sm\\:align-self-start{align-self:flex-start}.sm\\:align-self-end{align-self:flex-end}.sm\\:align-self-center{align-self:center}}@media(min-width:960px){.md\\:align-self-start{align-self:flex-start}.md\\:align-self-end{align-self:flex-end}.md\\:align-self-center{align-self:center}}@media(min-width:1280px){.lg\\:align-self-start{align-self:flex-start}.lg\\:align-self-end{align-self:flex-end}.lg\\:align-self-center{align-self:center}}.bg-primary{background-color:#5f259f}.bg-secondary{background-color:#111835}.bg-green{background-color:#009a4b}.bg-yellow{background-color:#f9c921}.bg-yellow-light{background-color:#fffaea}.bg-red{background-color:#fe4850}.bg-dark{background-color:#000}.bg-theme-dark{background-color:#170c29}.bg-theme-light{background-color:#2c223c}.bg-theme-background{background-color:#fff;background-color:var(--theme-background)}.bg-theme-surface{background-color:#fff;background-color:var(--theme-surface)}.bg-white{background-color:#fff}.bg-light{background-color:#e8e7e9}.bg-transparent{background-color:transparent}.bg-light-pink{background-color:#eee5f4}.bg-primary\\:hover:hover{background-color:#5f259f}.bg-secondary\\:hover:hover{background-color:#111835}.bg-green\\:hover:hover{background-color:#009a4b}.bg-yellow\\:hover:hover{background-color:#f9c921}.bg-yellow-light\\:hover:hover{background-color:#fffaea}.bg-red\\:hover:hover{background-color:#fe4850}.bg-dark\\:hover:hover{background-color:#000}.bg-theme-dark\\:hover:hover{background-color:#170c29}.bg-theme-light\\:hover:hover{background-color:#2c223c}.bg-theme-background\\:hover:hover{background-color:#fff;background-color:var(--theme-background)}.bg-theme-surface\\:hover:hover{background-color:#fff;background-color:var(--theme-surface)}.bg-white\\:hover:hover{background-color:#fff}.bg-light\\:hover:hover{background-color:#e8e7e9}.bg-transparent\\:hover:hover{background-color:transparent}.bg-light-pink\\:hover:hover{background-color:#eee5f4}.gradiant-green,.gradiant-green\\:hover:hover{background-image:linear-gradient(180deg,#01c981,#009c4d)}.border-none{border:none}.border-half{border:.5px}.border-1{border:1px}.border-2{border:2px}.border-transparent{border:transparent}@media(min-width:640px){.sm\\:border-none{border:none}.sm\\:border-half{border:.5px}.sm\\:border-1{border:1px}.sm\\:border-2{border:2px}.sm\\:border-transparent{border:transparent}}@media(min-width:960px){.md\\:border-none{border:none}.md\\:border-half{border:.5px}.md\\:border-1{border:1px}.md\\:border-2{border:2px}.md\\:border-transparent{border:transparent}}@media(min-width:1280px){.lg\\:border-none{border:none}.lg\\:border-half{border:.5px}.lg\\:border-1{border:1px}.lg\\:border-2{border:2px}.lg\\:border-transparent{border:transparent}}.border-t-none{border-top-width:0}.border-t-1{border-top-width:1px}.border-r-none{border-right-width:0}.border-r-1{border-right-width:1px}.border-b-none{border-bottom-width:0}.border-b-1{border-bottom-width:1px}.border-b-2{border-bottom-width:2px}@media(min-width:640px){.sm\\:border-b-none{border-bottom-width:0}.sm\\:border-b-1{border-bottom-width:1px}.sm\\:border-b-2{border-bottom-width:2px}}@media(min-width:960px){.md\\:border-b-none{border-bottom-width:0}.md\\:border-b-1{border-bottom-width:1px}.md\\:border-b-2{border-bottom-width:2px}}@media(min-width:1280px){.lg\\:border-b-none{border-bottom-width:0}.lg\\:border-b-1{border-bottom-width:1px}.lg\\:border-b-2{border-bottom-width:2px}}.border-l-none{border-left-width:0}.border-l-1{border-left-width:1px}.border-l-2{border-left-width:2px}.border-solid{border-style:solid}.border-none{border-style:none}@media(min-width:640px){.sm\\:border-solid{border-style:solid}.sm\\:border-none{border-style:none}}@media(min-width:960px){.md\\:border-solid{border-style:solid}.md\\:border-none{border-style:none}}@media(min-width:1280px){.lg\\:border-solid{border-style:solid}.lg\\:border-none{border-style:none}}.border-radius-none{border-radius:0}.border-radius-circle{border-radius:50%}.border-radius-4{border-radius:4px}.border-radius-5{border-radius:5px}.border-radius-6{border-radius:6px}.border-radius-8{border-radius:8px}.border-radius-12{border-radius:12px}.border-radius-16{border-radius:16px}.border-radius-62{border-radius:62px}.border-radius-136{border-radius:136px}.border-light,.border-primary{border-color:#e7e8eb}.border-yellow{border-color:#f9c921}.border-green{border-color:#009a4b}.border-secondary{border-color:#a0a3ae}.border-purple{border-color:#6d2ab6}.border-white{border-color:#fff}.border-light-white{border-color:hsla(0,0%,100%,.3137254902)}.border-transparent{border-color:transparent}@media(min-width:640px){.sm\\:border-light,.sm\\:border-primary{border-color:#e7e8eb}.sm\\:border-yellow{border-color:#f9c921}.sm\\:border-green{border-color:#009a4b}.sm\\:border-secondary{border-color:#a0a3ae}.sm\\:border-purple{border-color:#6d2ab6}.sm\\:border-white{border-color:#fff}.sm\\:border-light-white{border-color:hsla(0,0%,100%,.3137254902)}.sm\\:border-transparent{border-color:transparent}}@media(min-width:960px){.md\\:border-light,.md\\:border-primary{border-color:#e7e8eb}.md\\:border-yellow{border-color:#f9c921}.md\\:border-green{border-color:#009a4b}.md\\:border-secondary{border-color:#a0a3ae}.md\\:border-purple{border-color:#6d2ab6}.md\\:border-white{border-color:#fff}.md\\:border-light-white{border-color:hsla(0,0%,100%,.3137254902)}.md\\:border-transparent{border-color:transparent}}@media(min-width:1280px){.lg\\:border-light,.lg\\:border-primary{border-color:#e7e8eb}.lg\\:border-yellow{border-color:#f9c921}.lg\\:border-green{border-color:#009a4b}.lg\\:border-secondary{border-color:#a0a3ae}.lg\\:border-purple{border-color:#6d2ab6}.lg\\:border-white{border-color:#fff}.lg\\:border-light-white{border-color:hsla(0,0%,100%,.3137254902)}.lg\\:border-transparent{border-color:transparent}}.shadow-header{box-shadow:0 3px 4px 0 rgba(0,0,0,.14),0 3px 3px -2px rgba(0,0,0,.12),0 1px 8px 0 rgba(0,0,0,.2)}.shadow-drawer{box-shadow:0 0 15px 0 rgba(34,41,47,.05)}.shadow-light{box-shadow:0 0 4px hsla(0,0%,42%,.1)}.text-inherit{color:inherit}.text-primary{color:#5f259f;color:var(--color-primary)}.text-green{color:#009a4b;color:var(--color-green)}.text-yellow{color:#f9c921;color:var(--color-yellow)}.text-red{color:#fe4850;color:var(--color-red)}.text-white{color:#fff}.text-black{color:#000}.text-blue{color:#007bc2}.text-secondary-dark{color:#111835}.text-secondary{color:#41465d;color:var(--theme-text-secondary)}.text-light{color:#707486}.text-purple{color:#6d2ab6}.text-white-secondary{color:hsla(0,0%,100%,.7)}.text-transparent{color:transparent}.text-inherit\\:hover:hover{color:inherit}.text-primary\\:hover:hover{color:#5f259f;color:var(--color-primary)}.text-green\\:hover:hover{color:#009a4b;color:var(--color-green)}.text-yellow\\:hover:hover{color:#f9c921;color:var(--color-yellow)}.text-red\\:hover:hover{color:#fe4850;color:var(--color-red)}.text-white\\:hover:hover{color:#fff}.text-black\\:hover:hover{color:#000}.text-blue\\:hover:hover{color:#007bc2}.text-secondary-dark\\:hover:hover{color:#111835}.text-secondary\\:hover:hover{color:#41465d;color:var(--theme-text-secondary)}.text-light\\:hover:hover{color:#707486}.text-purple\\:hover:hover{color:#6d2ab6}.text-white-secondary\\:hover:hover{color:hsla(0,0%,100%,.7)}.text-transparent\\:hover:hover{color:transparent}.d-none{display:none}.d-inline-block{display:inline-block}.d-block{display:block}.d-flex{display:flex}.d-inline-flex{display:inline-flex}@media(min-width:640px){.sm\\:d-none{display:none}.sm\\:d-inline-block{display:inline-block}.sm\\:d-block{display:block}.sm\\:d-flex{display:flex}.sm\\:d-inline-flex{display:inline-flex}}@media(min-width:960px){.md\\:d-none{display:none}.md\\:d-inline-block{display:inline-block}.md\\:d-block{display:block}.md\\:d-flex{display:flex}.md\\:d-inline-flex{display:inline-flex}}@media(min-width:1280px){.lg\\:d-none{display:none}.lg\\:d-inline-block{display:inline-block}.lg\\:d-block{display:block}.lg\\:d-flex{display:flex}.lg\\:d-inline-flex{display:inline-flex}}.flex-1{flex:1 1 100%}.flex-0{flex:0 0 auto}.flex-row{flex-direction:row}.flex-row-reverse{flex-direction:row-reverse}.flex-col{flex-direction:column}.flex-col-reverse{flex-direction:column-reverse}@media(min-width:640px){.sm\\:flex-row{flex-direction:row}.sm\\:flex-row-reverse{flex-direction:row-reverse}.sm\\:flex-col{flex-direction:column}.sm\\:flex-col-reverse{flex-direction:column-reverse}}@media(min-width:960px){.md\\:flex-row{flex-direction:row}.md\\:flex-row-reverse{flex-direction:row-reverse}.md\\:flex-col{flex-direction:column}.md\\:flex-col-reverse{flex-direction:column-reverse}}@media(min-width:1280px){.lg\\:flex-row{flex-direction:row}.lg\\:flex-row-reverse{flex-direction:row-reverse}.lg\\:flex-col{flex-direction:column}.lg\\:flex-col-reverse{flex-direction:column-reverse}}.flex-grow{flex-grow:1}.flex-grow-0{flex-grow:0}.flex-shrink{flex-shrink:1}.flex-shrink-0{flex-shrink:0}.flex-wrap{flex-wrap:wrap}.flex-wrap-reverse{flex-wrap:wrap-reverse}.flex-nowrap{flex-wrap:nowrap}@media(min-width:640px){.sm\\:flex-wrap{flex-wrap:wrap}.sm\\:flex-wrap-reverse{flex-wrap:wrap-reverse}.sm\\:flex-nowrap{flex-wrap:nowrap}}@media(min-width:960px){.md\\:flex-wrap{flex-wrap:wrap}.md\\:flex-wrap-reverse{flex-wrap:wrap-reverse}.md\\:flex-nowrap{flex-wrap:nowrap}}@media(min-width:1280px){.lg\\:flex-wrap{flex-wrap:wrap}.lg\\:flex-wrap-reverse{flex-wrap:wrap-reverse}.lg\\:flex-nowrap{flex-wrap:nowrap}}.order-none{order:0}.order-1{order:1}.order-2{order:2}@media(min-width:640px){.sm\\:order-none{order:0}.sm\\:order-1{order:1}.sm\\:order-2{order:2}}@media(min-width:960px){.md\\:order-none{order:0}.md\\:order-1{order:1}.md\\:order-2{order:2}}@media(min-width:1280px){.lg\\:order-none{order:0}.lg\\:order-1{order:1}.lg\\:order-2{order:2}}.font-80{font-size:80px}.font-52{font-size:52px}.font-48{font-size:48px}.font-40{font-size:40px}.font-32{font-size:32px}.font-30{font-size:30px}.font-28{font-size:28px}.font-26{font-size:26px}.font-24{font-size:24px}.font-22{font-size:22px}.font-20{font-size:20px}.font-18{font-size:18px}.font-16{font-size:16px}.font-14{font-size:14px}.font-12{font-size:12px}.font-10{font-size:10px}@media(min-width:640px){.sm\\:font-80{font-size:80px}.sm\\:font-52{font-size:52px}.sm\\:font-48{font-size:48px}.sm\\:font-40{font-size:40px}.sm\\:font-32{font-size:32px}.sm\\:font-30{font-size:30px}.sm\\:font-28{font-size:28px}.sm\\:font-26{font-size:26px}.sm\\:font-24{font-size:24px}.sm\\:font-22{font-size:22px}.sm\\:font-20{font-size:20px}.sm\\:font-18{font-size:18px}.sm\\:font-16{font-size:16px}.sm\\:font-14{font-size:14px}.sm\\:font-12{font-size:12px}.sm\\:font-10{font-size:10px}}@media(min-width:960px){.md\\:font-80{font-size:80px}.md\\:font-52{font-size:52px}.md\\:font-48{font-size:48px}.md\\:font-40{font-size:40px}.md\\:font-32{font-size:32px}.md\\:font-30{font-size:30px}.md\\:font-28{font-size:28px}.md\\:font-26{font-size:26px}.md\\:font-24{font-size:24px}.md\\:font-22{font-size:22px}.md\\:font-20{font-size:20px}.md\\:font-18{font-size:18px}.md\\:font-16{font-size:16px}.md\\:font-14{font-size:14px}.md\\:font-12{font-size:12px}.md\\:font-10{font-size:10px}}@media(min-width:1280px){.lg\\:font-80{font-size:80px}.lg\\:font-52{font-size:52px}.lg\\:font-48{font-size:48px}.lg\\:font-40{font-size:40px}.lg\\:font-32{font-size:32px}.lg\\:font-30{font-size:30px}.lg\\:font-28{font-size:28px}.lg\\:font-26{font-size:26px}.lg\\:font-24{font-size:24px}.lg\\:font-22{font-size:22px}.lg\\:font-20{font-size:20px}.lg\\:font-18{font-size:18px}.lg\\:font-16{font-size:16px}.lg\\:font-14{font-size:14px}.lg\\:font-12{font-size:12px}.lg\\:font-10{font-size:10px}}.font-family-body{font-family:"Basier Circle",sans-serif;font-family:var(--base-body-font)}.font-family-heading{font-family:"Basier Circle",sans-serif;font-family:var(--base-heading-font)}.font-400{font-weight:400}.font-500{font-weight:500}.font-600{font-weight:600}.font-700{font-weight:700}.justify-content-start{justify-content:flex-start}.justify-content-end{justify-content:flex-end}.justify-content-center{justify-content:center}.justify-content-between{justify-content:space-between}.justify-content-around{justify-content:space-around}@media(min-width:640px){.sm\\:justify-content-start{justify-content:flex-start}.sm\\:justify-content-end{justify-content:flex-end}.sm\\:justify-content-center{justify-content:center}.sm\\:justify-content-between{justify-content:space-between}.sm\\:justify-content-around{justify-content:space-around}}@media(min-width:960px){.md\\:justify-content-start{justify-content:flex-start}.md\\:justify-content-end{justify-content:flex-end}.md\\:justify-content-center{justify-content:center}.md\\:justify-content-between{justify-content:space-between}.md\\:justify-content-around{justify-content:space-around}}@media(min-width:1280px){.lg\\:justify-content-start{justify-content:flex-start}.lg\\:justify-content-end{justify-content:flex-end}.lg\\:justify-content-center{justify-content:center}.lg\\:justify-content-between{justify-content:space-between}.lg\\:justify-content-around{justify-content:space-around}}.left-0{left:0}.line-height-1{line-height:1.25}.line-height-12{line-height:12px}.line-height-16{line-height:16px}.line-height-20{line-height:20px}.line-height-22{line-height:22px}.line-height-24{line-height:24px}.line-height-28{line-height:28px}.line-height-32{line-height:32px}.line-height-36{line-height:36px}.line-height-normal{line-height:normal}@media(min-width:640px){.sm\\:line-height-1{line-height:1.25}.sm\\:line-height-12{line-height:12px}.sm\\:line-height-16{line-height:16px}.sm\\:line-height-20{line-height:20px}.sm\\:line-height-22{line-height:22px}.sm\\:line-height-24{line-height:24px}.sm\\:line-height-28{line-height:28px}.sm\\:line-height-32{line-height:32px}.sm\\:line-height-36{line-height:36px}.sm\\:line-height-normal{line-height:normal}}@media(min-width:960px){.md\\:line-height-1{line-height:1.25}.md\\:line-height-12{line-height:12px}.md\\:line-height-16{line-height:16px}.md\\:line-height-20{line-height:20px}.md\\:line-height-22{line-height:22px}.md\\:line-height-24{line-height:24px}.md\\:line-height-28{line-height:28px}.md\\:line-height-32{line-height:32px}.md\\:line-height-36{line-height:36px}.md\\:line-height-normal{line-height:normal}}@media(min-width:1280px){.lg\\:line-height-1{line-height:1.25}.lg\\:line-height-12{line-height:12px}.lg\\:line-height-16{line-height:16px}.lg\\:line-height-20{line-height:20px}.lg\\:line-height-22{line-height:22px}.lg\\:line-height-24{line-height:24px}.lg\\:line-height-28{line-height:28px}.lg\\:line-height-32{line-height:32px}.lg\\:line-height-36{line-height:36px}.lg\\:line-height-normal{line-height:normal}}.list-none{line-style:none}.overflow-auto{overflow:auto}.overflow-hidden{overflow:hidden}.overflow-visible{overflow:visible}.overflow-scroll{overflow:scroll}.overflow-x-auto{overflow-x:auto}.overflow-x-hidden{overflow-x:hidden}.overflow-x-visible{overflow-x:visible}.overflow-x-scroll{overflow-x:scroll}.overflow-y-auto{overflow-y:auto}.overflow-y-hidden{overflow-y:hidden}.overflow-y-visible{overflow-y:visible}.overflow-y-scroll{overflow-y:scroll}.p-0{padding:0}.p-4{padding:4px}.p-6{padding:6px}.p-8{padding:.5rem}.p-10{padding:10px}.p-12{padding:.75rem}.p-14{padding:14px}.p-16{padding:1rem}.p-20{padding:20px}.p-22{padding:22px}.p-24{padding:1.5rem}.p-26{padding:26px}.p-32{padding:2rem}.p-40{padding:2.5rem}.p-50{padding:50px}.p-56{padding:56px}.p-64{padding:64px}.p-72{padding:72px}.p-96{padding:96px}.p-160,.p-162{padding:162px}@media(min-width:640px){.sm\\:p-0{padding:0}.sm\\:p-4{padding:4px}.sm\\:p-6{padding:6px}.sm\\:p-8{padding:.5rem}.sm\\:p-10{padding:10px}.sm\\:p-12{padding:.75rem}.sm\\:p-14{padding:14px}.sm\\:p-16{padding:1rem}.sm\\:p-20{padding:20px}.sm\\:p-22{padding:22px}.sm\\:p-24{padding:1.5rem}.sm\\:p-26{padding:26px}.sm\\:p-32{padding:2rem}.sm\\:p-40{padding:2.5rem}.sm\\:p-50{padding:50px}.sm\\:p-56{padding:56px}.sm\\:p-64{padding:64px}.sm\\:p-72{padding:72px}.sm\\:p-96{padding:96px}.sm\\:p-160,.sm\\:p-162{padding:162px}}@media(min-width:960px){.md\\:p-0{padding:0}.md\\:p-4{padding:4px}.md\\:p-6{padding:6px}.md\\:p-8{padding:.5rem}.md\\:p-10{padding:10px}.md\\:p-12{padding:.75rem}.md\\:p-14{padding:14px}.md\\:p-16{padding:1rem}.md\\:p-20{padding:20px}.md\\:p-22{padding:22px}.md\\:p-24{padding:1.5rem}.md\\:p-26{padding:26px}.md\\:p-32{padding:2rem}.md\\:p-40{padding:2.5rem}.md\\:p-50{padding:50px}.md\\:p-56{padding:56px}.md\\:p-64{padding:64px}.md\\:p-72{padding:72px}.md\\:p-96{padding:96px}.md\\:p-160,.md\\:p-162{padding:162px}}@media(min-width:1280px){.lg\\:p-0{padding:0}.lg\\:p-4{padding:4px}.lg\\:p-6{padding:6px}.lg\\:p-8{padding:.5rem}.lg\\:p-10{padding:10px}.lg\\:p-12{padding:.75rem}.lg\\:p-14{padding:14px}.lg\\:p-16{padding:1rem}.lg\\:p-20{padding:20px}.lg\\:p-22{padding:22px}.lg\\:p-24{padding:1.5rem}.lg\\:p-26{padding:26px}.lg\\:p-32{padding:2rem}.lg\\:p-40{padding:2.5rem}.lg\\:p-50{padding:50px}.lg\\:p-56{padding:56px}.lg\\:p-64{padding:64px}.lg\\:p-72{padding:72px}.lg\\:p-96{padding:96px}.lg\\:p-160,.lg\\:p-162{padding:162px}}.pt-0{padding-top:0}.pt-4{padding-top:4px}.pt-6{padding-top:6px}.pt-8{padding-top:.5rem}.pt-10{padding-top:10px}.pt-12{padding-top:.75rem}.pt-14{padding-top:14px}.pt-16{padding-top:1rem}.pt-20{padding-top:20px}.pt-22{padding-top:22px}.pt-24{padding-top:1.5rem}.pt-26{padding-top:26px}.pt-32{padding-top:2rem}.pt-40{padding-top:2.5rem}.pt-50{padding-top:50px}.pt-56{padding-top:56px}.pt-64{padding-top:64px}.pt-72{padding-top:72px}.pt-96{padding-top:96px}.pt-160,.pt-162{padding-top:162px}@media(min-width:640px){.sm\\:pt-0{padding-top:0}.sm\\:pt-4{padding-top:4px}.sm\\:pt-6{padding-top:6px}.sm\\:pt-8{padding-top:.5rem}.sm\\:pt-10{padding-top:10px}.sm\\:pt-12{padding-top:.75rem}.sm\\:pt-14{padding-top:14px}.sm\\:pt-16{padding-top:1rem}.sm\\:pt-20{padding-top:20px}.sm\\:pt-22{padding-top:22px}.sm\\:pt-24{padding-top:1.5rem}.sm\\:pt-26{padding-top:26px}.sm\\:pt-32{padding-top:2rem}.sm\\:pt-40{padding-top:2.5rem}.sm\\:pt-50{padding-top:50px}.sm\\:pt-56{padding-top:56px}.sm\\:pt-64{padding-top:64px}.sm\\:pt-72{padding-top:72px}.sm\\:pt-96{padding-top:96px}.sm\\:pt-160,.sm\\:pt-162{padding-top:162px}}@media(min-width:960px){.md\\:pt-0{padding-top:0}.md\\:pt-4{padding-top:4px}.md\\:pt-6{padding-top:6px}.md\\:pt-8{padding-top:.5rem}.md\\:pt-10{padding-top:10px}.md\\:pt-12{padding-top:.75rem}.md\\:pt-14{padding-top:14px}.md\\:pt-16{padding-top:1rem}.md\\:pt-20{padding-top:20px}.md\\:pt-22{padding-top:22px}.md\\:pt-24{padding-top:1.5rem}.md\\:pt-26{padding-top:26px}.md\\:pt-32{padding-top:2rem}.md\\:pt-40{padding-top:2.5rem}.md\\:pt-50{padding-top:50px}.md\\:pt-56{padding-top:56px}.md\\:pt-64{padding-top:64px}.md\\:pt-72{padding-top:72px}.md\\:pt-96{padding-top:96px}.md\\:pt-160,.md\\:pt-162{padding-top:162px}}@media(min-width:1280px){.lg\\:pt-0{padding-top:0}.lg\\:pt-4{padding-top:4px}.lg\\:pt-6{padding-top:6px}.lg\\:pt-8{padding-top:.5rem}.lg\\:pt-10{padding-top:10px}.lg\\:pt-12{padding-top:.75rem}.lg\\:pt-14{padding-top:14px}.lg\\:pt-16{padding-top:1rem}.lg\\:pt-20{padding-top:20px}.lg\\:pt-22{padding-top:22px}.lg\\:pt-24{padding-top:1.5rem}.lg\\:pt-26{padding-top:26px}.lg\\:pt-32{padding-top:2rem}.lg\\:pt-40{padding-top:2.5rem}.lg\\:pt-50{padding-top:50px}.lg\\:pt-56{padding-top:56px}.lg\\:pt-64{padding-top:64px}.lg\\:pt-72{padding-top:72px}.lg\\:pt-96{padding-top:96px}.lg\\:pt-160,.lg\\:pt-162{padding-top:162px}}.pl-0{padding-left:0}.pl-4{padding-left:4px}.pl-6{padding-left:6px}.pl-8{padding-left:.5rem}.pl-10{padding-left:10px}.pl-12{padding-left:.75rem}.pl-14{padding-left:14px}.pl-16{padding-left:1rem}.pl-20{padding-left:20px}.pl-22{padding-left:22px}.pl-24{padding-left:1.5rem}.pl-26{padding-left:26px}.pl-32{padding-left:2rem}.pl-40{padding-left:2.5rem}.pl-50{padding-left:50px}.pl-56{padding-left:56px}.pl-64{padding-left:64px}.pl-72{padding-left:72px}.pl-96{padding-left:96px}.pl-160,.pl-162{padding-left:162px}@media(min-width:640px){.sm\\:pl-0{padding-left:0}.sm\\:pl-4{padding-left:4px}.sm\\:pl-6{padding-left:6px}.sm\\:pl-8{padding-left:.5rem}.sm\\:pl-10{padding-left:10px}.sm\\:pl-12{padding-left:.75rem}.sm\\:pl-14{padding-left:14px}.sm\\:pl-16{padding-left:1rem}.sm\\:pl-20{padding-left:20px}.sm\\:pl-22{padding-left:22px}.sm\\:pl-24{padding-left:1.5rem}.sm\\:pl-26{padding-left:26px}.sm\\:pl-32{padding-left:2rem}.sm\\:pl-40{padding-left:2.5rem}.sm\\:pl-50{padding-left:50px}.sm\\:pl-56{padding-left:56px}.sm\\:pl-64{padding-left:64px}.sm\\:pl-72{padding-left:72px}.sm\\:pl-96{padding-left:96px}.sm\\:pl-160,.sm\\:pl-162{padding-left:162px}}@media(min-width:960px){.md\\:pl-0{padding-left:0}.md\\:pl-4{padding-left:4px}.md\\:pl-6{padding-left:6px}.md\\:pl-8{padding-left:.5rem}.md\\:pl-10{padding-left:10px}.md\\:pl-12{padding-left:.75rem}.md\\:pl-14{padding-left:14px}.md\\:pl-16{padding-left:1rem}.md\\:pl-20{padding-left:20px}.md\\:pl-22{padding-left:22px}.md\\:pl-24{padding-left:1.5rem}.md\\:pl-26{padding-left:26px}.md\\:pl-32{padding-left:2rem}.md\\:pl-40{padding-left:2.5rem}.md\\:pl-50{padding-left:50px}.md\\:pl-56{padding-left:56px}.md\\:pl-64{padding-left:64px}.md\\:pl-72{padding-left:72px}.md\\:pl-96{padding-left:96px}.md\\:pl-160,.md\\:pl-162{padding-left:162px}}@media(min-width:1280px){.lg\\:pl-0{padding-left:0}.lg\\:pl-4{padding-left:4px}.lg\\:pl-6{padding-left:6px}.lg\\:pl-8{padding-left:.5rem}.lg\\:pl-10{padding-left:10px}.lg\\:pl-12{padding-left:.75rem}.lg\\:pl-14{padding-left:14px}.lg\\:pl-16{padding-left:1rem}.lg\\:pl-20{padding-left:20px}.lg\\:pl-22{padding-left:22px}.lg\\:pl-24{padding-left:1.5rem}.lg\\:pl-26{padding-left:26px}.lg\\:pl-32{padding-left:2rem}.lg\\:pl-40{padding-left:2.5rem}.lg\\:pl-50{padding-left:50px}.lg\\:pl-56{padding-left:56px}.lg\\:pl-64{padding-left:64px}.lg\\:pl-72{padding-left:72px}.lg\\:pl-96{padding-left:96px}.lg\\:pl-160,.lg\\:pl-162{padding-left:162px}}.pb-0{padding-bottom:0}.pb-4{padding-bottom:4px}.pb-6{padding-bottom:6px}.pb-8{padding-bottom:.5rem}.pb-10{padding-bottom:10px}.pb-12{padding-bottom:.75rem}.pb-14{padding-bottom:14px}.pb-16{padding-bottom:1rem}.pb-20{padding-bottom:20px}.pb-22{padding-bottom:22px}.pb-24{padding-bottom:1.5rem}.pb-26{padding-bottom:26px}.pb-32{padding-bottom:2rem}.pb-40{padding-bottom:2.5rem}.pb-50{padding-bottom:50px}.pb-56{padding-bottom:56px}.pb-64{padding-bottom:64px}.pb-72{padding-bottom:72px}.pb-96{padding-bottom:96px}.pb-160,.pb-162{padding-bottom:162px}@media(min-width:640px){.sm\\:pb-0{padding-bottom:0}.sm\\:pb-4{padding-bottom:4px}.sm\\:pb-6{padding-bottom:6px}.sm\\:pb-8{padding-bottom:.5rem}.sm\\:pb-10{padding-bottom:10px}.sm\\:pb-12{padding-bottom:.75rem}.sm\\:pb-14{padding-bottom:14px}.sm\\:pb-16{padding-bottom:1rem}.sm\\:pb-20{padding-bottom:20px}.sm\\:pb-22{padding-bottom:22px}.sm\\:pb-24{padding-bottom:1.5rem}.sm\\:pb-26{padding-bottom:26px}.sm\\:pb-32{padding-bottom:2rem}.sm\\:pb-40{padding-bottom:2.5rem}.sm\\:pb-50{padding-bottom:50px}.sm\\:pb-56{padding-bottom:56px}.sm\\:pb-64{padding-bottom:64px}.sm\\:pb-72{padding-bottom:72px}.sm\\:pb-96{padding-bottom:96px}.sm\\:pb-160,.sm\\:pb-162{padding-bottom:162px}}@media(min-width:960px){.md\\:pb-0{padding-bottom:0}.md\\:pb-4{padding-bottom:4px}.md\\:pb-6{padding-bottom:6px}.md\\:pb-8{padding-bottom:.5rem}.md\\:pb-10{padding-bottom:10px}.md\\:pb-12{padding-bottom:.75rem}.md\\:pb-14{padding-bottom:14px}.md\\:pb-16{padding-bottom:1rem}.md\\:pb-20{padding-bottom:20px}.md\\:pb-22{padding-bottom:22px}.md\\:pb-24{padding-bottom:1.5rem}.md\\:pb-26{padding-bottom:26px}.md\\:pb-32{padding-bottom:2rem}.md\\:pb-40{padding-bottom:2.5rem}.md\\:pb-50{padding-bottom:50px}.md\\:pb-56{padding-bottom:56px}.md\\:pb-64{padding-bottom:64px}.md\\:pb-72{padding-bottom:72px}.md\\:pb-96{padding-bottom:96px}.md\\:pb-160,.md\\:pb-162{padding-bottom:162px}}@media(min-width:1280px){.lg\\:pb-0{padding-bottom:0}.lg\\:pb-4{padding-bottom:4px}.lg\\:pb-6{padding-bottom:6px}.lg\\:pb-8{padding-bottom:.5rem}.lg\\:pb-10{padding-bottom:10px}.lg\\:pb-12{padding-bottom:.75rem}.lg\\:pb-14{padding-bottom:14px}.lg\\:pb-16{padding-bottom:1rem}.lg\\:pb-20{padding-bottom:20px}.lg\\:pb-22{padding-bottom:22px}.lg\\:pb-24{padding-bottom:1.5rem}.lg\\:pb-26{padding-bottom:26px}.lg\\:pb-32{padding-bottom:2rem}.lg\\:pb-40{padding-bottom:2.5rem}.lg\\:pb-50{padding-bottom:50px}.lg\\:pb-56{padding-bottom:56px}.lg\\:pb-64{padding-bottom:64px}.lg\\:pb-72{padding-bottom:72px}.lg\\:pb-96{padding-bottom:96px}.lg\\:pb-160,.lg\\:pb-162{padding-bottom:162px}}.pr-0{padding-right:0}.pr-4{padding-right:4px}.pr-6{padding-right:6px}.pr-8{padding-right:.5rem}.pr-10{padding-right:10px}.pr-12{padding-right:.75rem}.pr-14{padding-right:14px}.pr-16{padding-right:1rem}.pr-20{padding-right:20px}.pr-22{padding-right:22px}.pr-24{padding-right:1.5rem}.pr-26{padding-right:26px}.pr-32{padding-right:2rem}.pr-40{padding-right:2.5rem}.pr-50{padding-right:50px}.pr-56{padding-right:56px}.pr-64{padding-right:64px}.pr-72{padding-right:72px}.pr-96{padding-right:96px}.pr-160,.pr-162{padding-right:162px}@media(min-width:640px){.sm\\:pr-0{padding-right:0}.sm\\:pr-4{padding-right:4px}.sm\\:pr-6{padding-right:6px}.sm\\:pr-8{padding-right:.5rem}.sm\\:pr-10{padding-right:10px}.sm\\:pr-12{padding-right:.75rem}.sm\\:pr-14{padding-right:14px}.sm\\:pr-16{padding-right:1rem}.sm\\:pr-20{padding-right:20px}.sm\\:pr-22{padding-right:22px}.sm\\:pr-24{padding-right:1.5rem}.sm\\:pr-26{padding-right:26px}.sm\\:pr-32{padding-right:2rem}.sm\\:pr-40{padding-right:2.5rem}.sm\\:pr-50{padding-right:50px}.sm\\:pr-56{padding-right:56px}.sm\\:pr-64{padding-right:64px}.sm\\:pr-72{padding-right:72px}.sm\\:pr-96{padding-right:96px}.sm\\:pr-160,.sm\\:pr-162{padding-right:162px}}@media(min-width:960px){.md\\:pr-0{padding-right:0}.md\\:pr-4{padding-right:4px}.md\\:pr-6{padding-right:6px}.md\\:pr-8{padding-right:.5rem}.md\\:pr-10{padding-right:10px}.md\\:pr-12{padding-right:.75rem}.md\\:pr-14{padding-right:14px}.md\\:pr-16{padding-right:1rem}.md\\:pr-20{padding-right:20px}.md\\:pr-22{padding-right:22px}.md\\:pr-24{padding-right:1.5rem}.md\\:pr-26{padding-right:26px}.md\\:pr-32{padding-right:2rem}.md\\:pr-40{padding-right:2.5rem}.md\\:pr-50{padding-right:50px}.md\\:pr-56{padding-right:56px}.md\\:pr-64{padding-right:64px}.md\\:pr-72{padding-right:72px}.md\\:pr-96{padding-right:96px}.md\\:pr-160,.md\\:pr-162{padding-right:162px}}@media(min-width:1280px){.lg\\:pr-0{padding-right:0}.lg\\:pr-4{padding-right:4px}.lg\\:pr-6{padding-right:6px}.lg\\:pr-8{padding-right:.5rem}.lg\\:pr-10{padding-right:10px}.lg\\:pr-12{padding-right:.75rem}.lg\\:pr-14{padding-right:14px}.lg\\:pr-16{padding-right:1rem}.lg\\:pr-20{padding-right:20px}.lg\\:pr-22{padding-right:22px}.lg\\:pr-24{padding-right:1.5rem}.lg\\:pr-26{padding-right:26px}.lg\\:pr-32{padding-right:2rem}.lg\\:pr-40{padding-right:2.5rem}.lg\\:pr-50{padding-right:50px}.lg\\:pr-56{padding-right:56px}.lg\\:pr-64{padding-right:64px}.lg\\:pr-72{padding-right:72px}.lg\\:pr-96{padding-right:96px}.lg\\:pr-160,.lg\\:pr-162{padding-right:162px}}.position-fixed{position:fixed}.position-absolute{position:absolute}.position-relative{position:relative}@media(min-width:640px){.sm\\:position-fixed{position:fixed}.sm\\:position-absolute{position:absolute}.sm\\:position-relative{position:relative}}@media(min-width:960px){.md\\:position-fixed{position:fixed}.md\\:position-absolute{position:absolute}.md\\:position-relative{position:relative}}@media(min-width:1280px){.lg\\:position-fixed{position:fixed}.lg\\:position-absolute{position:absolute}.lg\\:position-relative{position:relative}}.right-0{right:0}.opacity-0{opacity:0}.opacity-50{opacity:.5}.opacity-60{opacity:.6}.opacity-8{opacity:.08}.opacity-70{opacity:.7}.opacity-1{opacity:1}.text-left{text-align:left}.text-center{text-align:center}.text-right{text-align:right}.text-justify{text-align:justify}@media(min-width:640px){.sm\\:text-left{text-align:left}.sm\\:text-center{text-align:center}.sm\\:text-right{text-align:right}.sm\\:text-justify{text-align:justify}}@media(min-width:960px){.md\\:text-left{text-align:left}.md\\:text-center{text-align:center}.md\\:text-right{text-align:right}.md\\:text-justify{text-align:justify}}@media(min-width:1280px){.lg\\:text-left{text-align:left}.lg\\:text-center{text-align:center}.lg\\:text-right{text-align:right}.lg\\:text-justify{text-align:justify}}.text-clip{text-overflow:clip}.text-ellipsis{text-overflow:ellipsis}.text-fade{text-overflow:fade}.text-uppercase{text-transform:uppercase}.transition-all{transition:all .3s ease}.duration-300{transition-duration:.3s}.duration-500{transition-duration:.5s}.timing-ease-in-out{transition-timing-function:ease-in-out}.m--24{margin:-24px}.m-auto{margin:0 auto}.m-0{margin:0}.m-4{margin:4px}.m-8{margin:.5rem}.m-10{margin:10px}.m-12{margin:.75rem}.m-16{margin:1rem}.m-20{margin:20px}.m-24{margin:1.5rem}.m-32{margin:2rem}.m-40{margin:2.5rem}.m-48{margin:48px}.m-50{margin:50px}.m-56{margin:56px}.m-64{margin:64px}.m-72{margin:72px}.m-96{margin:96px}.m-162{margin:162px}@media(min-width:640px){.sm\\:m--24{margin:-24px}.sm\\:m-auto{margin:0 auto}.sm\\:m-0{margin:0}.sm\\:m-4{margin:4px}.sm\\:m-8{margin:.5rem}.sm\\:m-10{margin:10px}.sm\\:m-12{margin:.75rem}.sm\\:m-16{margin:1rem}.sm\\:m-20{margin:20px}.sm\\:m-24{margin:1.5rem}.sm\\:m-32{margin:2rem}.sm\\:m-40{margin:2.5rem}.sm\\:m-48{margin:48px}.sm\\:m-50{margin:50px}.sm\\:m-56{margin:56px}.sm\\:m-64{margin:64px}.sm\\:m-72{margin:72px}.sm\\:m-96{margin:96px}.sm\\:m-162{margin:162px}}@media(min-width:960px){.md\\:m--24{margin:-24px}.md\\:m-auto{margin:0 auto}.md\\:m-0{margin:0}.md\\:m-4{margin:4px}.md\\:m-8{margin:.5rem}.md\\:m-10{margin:10px}.md\\:m-12{margin:.75rem}.md\\:m-16{margin:1rem}.md\\:m-20{margin:20px}.md\\:m-24{margin:1.5rem}.md\\:m-32{margin:2rem}.md\\:m-40{margin:2.5rem}.md\\:m-48{margin:48px}.md\\:m-50{margin:50px}.md\\:m-56{margin:56px}.md\\:m-64{margin:64px}.md\\:m-72{margin:72px}.md\\:m-96{margin:96px}.md\\:m-162{margin:162px}}@media(min-width:1280px){.lg\\:m--24{margin:-24px}.lg\\:m-auto{margin:0 auto}.lg\\:m-0{margin:0}.lg\\:m-4{margin:4px}.lg\\:m-8{margin:.5rem}.lg\\:m-10{margin:10px}.lg\\:m-12{margin:.75rem}.lg\\:m-16{margin:1rem}.lg\\:m-20{margin:20px}.lg\\:m-24{margin:1.5rem}.lg\\:m-32{margin:2rem}.lg\\:m-40{margin:2.5rem}.lg\\:m-48{margin:48px}.lg\\:m-50{margin:50px}.lg\\:m-56{margin:56px}.lg\\:m-64{margin:64px}.lg\\:m-72{margin:72px}.lg\\:m-96{margin:96px}.lg\\:m-162{margin:162px}}.mt--24{margin-top:-24px}.mt-auto{margin-top:0 auto}.mt-0{margin-top:0}.mt-4{margin-top:4px}.mt-8{margin-top:.5rem}.mt-10{margin-top:10px}.mt-12{margin-top:.75rem}.mt-16{margin-top:1rem}.mt-20{margin-top:20px}.mt-24{margin-top:1.5rem}.mt-32{margin-top:2rem}.mt-40{margin-top:2.5rem}.mt-48{margin-top:48px}.mt-50{margin-top:50px}.mt-56{margin-top:56px}.mt-64{margin-top:64px}.mt-72{margin-top:72px}.mt-96{margin-top:96px}.mt-162{margin-top:162px}@media(min-width:640px){.sm\\:mt--24{margin-top:-24px}.sm\\:mt-auto{margin-top:0 auto}.sm\\:mt-0{margin-top:0}.sm\\:mt-4{margin-top:4px}.sm\\:mt-8{margin-top:.5rem}.sm\\:mt-10{margin-top:10px}.sm\\:mt-12{margin-top:.75rem}.sm\\:mt-16{margin-top:1rem}.sm\\:mt-20{margin-top:20px}.sm\\:mt-24{margin-top:1.5rem}.sm\\:mt-32{margin-top:2rem}.sm\\:mt-40{margin-top:2.5rem}.sm\\:mt-48{margin-top:48px}.sm\\:mt-50{margin-top:50px}.sm\\:mt-56{margin-top:56px}.sm\\:mt-64{margin-top:64px}.sm\\:mt-72{margin-top:72px}.sm\\:mt-96{margin-top:96px}.sm\\:mt-162{margin-top:162px}}@media(min-width:960px){.md\\:mt--24{margin-top:-24px}.md\\:mt-auto{margin-top:0 auto}.md\\:mt-0{margin-top:0}.md\\:mt-4{margin-top:4px}.md\\:mt-8{margin-top:.5rem}.md\\:mt-10{margin-top:10px}.md\\:mt-12{margin-top:.75rem}.md\\:mt-16{margin-top:1rem}.md\\:mt-20{margin-top:20px}.md\\:mt-24{margin-top:1.5rem}.md\\:mt-32{margin-top:2rem}.md\\:mt-40{margin-top:2.5rem}.md\\:mt-48{margin-top:48px}.md\\:mt-50{margin-top:50px}.md\\:mt-56{margin-top:56px}.md\\:mt-64{margin-top:64px}.md\\:mt-72{margin-top:72px}.md\\:mt-96{margin-top:96px}.md\\:mt-162{margin-top:162px}}@media(min-width:1280px){.lg\\:mt--24{margin-top:-24px}.lg\\:mt-auto{margin-top:0 auto}.lg\\:mt-0{margin-top:0}.lg\\:mt-4{margin-top:4px}.lg\\:mt-8{margin-top:.5rem}.lg\\:mt-10{margin-top:10px}.lg\\:mt-12{margin-top:.75rem}.lg\\:mt-16{margin-top:1rem}.lg\\:mt-20{margin-top:20px}.lg\\:mt-24{margin-top:1.5rem}.lg\\:mt-32{margin-top:2rem}.lg\\:mt-40{margin-top:2.5rem}.lg\\:mt-48{margin-top:48px}.lg\\:mt-50{margin-top:50px}.lg\\:mt-56{margin-top:56px}.lg\\:mt-64{margin-top:64px}.lg\\:mt-72{margin-top:72px}.lg\\:mt-96{margin-top:96px}.lg\\:mt-162{margin-top:162px}}.ml--24{margin-left:-24px}.ml-auto{margin-left:0 auto}.ml-0{margin-left:0}.ml-4{margin-left:4px}.ml-8{margin-left:.5rem}.ml-10{margin-left:10px}.ml-12{margin-left:.75rem}.ml-16{margin-left:1rem}.ml-20{margin-left:20px}.ml-24{margin-left:1.5rem}.ml-32{margin-left:2rem}.ml-40{margin-left:2.5rem}.ml-48{margin-left:48px}.ml-50{margin-left:50px}.ml-56{margin-left:56px}.ml-64{margin-left:64px}.ml-72{margin-left:72px}.ml-96{margin-left:96px}.ml-162{margin-left:162px}@media(min-width:640px){.sm\\:ml--24{margin-left:-24px}.sm\\:ml-auto{margin-left:0 auto}.sm\\:ml-0{margin-left:0}.sm\\:ml-4{margin-left:4px}.sm\\:ml-8{margin-left:.5rem}.sm\\:ml-10{margin-left:10px}.sm\\:ml-12{margin-left:.75rem}.sm\\:ml-16{margin-left:1rem}.sm\\:ml-20{margin-left:20px}.sm\\:ml-24{margin-left:1.5rem}.sm\\:ml-32{margin-left:2rem}.sm\\:ml-40{margin-left:2.5rem}.sm\\:ml-48{margin-left:48px}.sm\\:ml-50{margin-left:50px}.sm\\:ml-56{margin-left:56px}.sm\\:ml-64{margin-left:64px}.sm\\:ml-72{margin-left:72px}.sm\\:ml-96{margin-left:96px}.sm\\:ml-162{margin-left:162px}}@media(min-width:960px){.md\\:ml--24{margin-left:-24px}.md\\:ml-auto{margin-left:0 auto}.md\\:ml-0{margin-left:0}.md\\:ml-4{margin-left:4px}.md\\:ml-8{margin-left:.5rem}.md\\:ml-10{margin-left:10px}.md\\:ml-12{margin-left:.75rem}.md\\:ml-16{margin-left:1rem}.md\\:ml-20{margin-left:20px}.md\\:ml-24{margin-left:1.5rem}.md\\:ml-32{margin-left:2rem}.md\\:ml-40{margin-left:2.5rem}.md\\:ml-48{margin-left:48px}.md\\:ml-50{margin-left:50px}.md\\:ml-56{margin-left:56px}.md\\:ml-64{margin-left:64px}.md\\:ml-72{margin-left:72px}.md\\:ml-96{margin-left:96px}.md\\:ml-162{margin-left:162px}}@media(min-width:1280px){.lg\\:ml--24{margin-left:-24px}.lg\\:ml-auto{margin-left:0 auto}.lg\\:ml-0{margin-left:0}.lg\\:ml-4{margin-left:4px}.lg\\:ml-8{margin-left:.5rem}.lg\\:ml-10{margin-left:10px}.lg\\:ml-12{margin-left:.75rem}.lg\\:ml-16{margin-left:1rem}.lg\\:ml-20{margin-left:20px}.lg\\:ml-24{margin-left:1.5rem}.lg\\:ml-32{margin-left:2rem}.lg\\:ml-40{margin-left:2.5rem}.lg\\:ml-48{margin-left:48px}.lg\\:ml-50{margin-left:50px}.lg\\:ml-56{margin-left:56px}.lg\\:ml-64{margin-left:64px}.lg\\:ml-72{margin-left:72px}.lg\\:ml-96{margin-left:96px}.lg\\:ml-162{margin-left:162px}}.mb--24{margin-bottom:-24px}.mb-auto{margin-bottom:0 auto}.mb-0{margin-bottom:0}.mb-4{margin-bottom:4px}.mb-8{margin-bottom:.5rem}.mb-10{margin-bottom:10px}.mb-12{margin-bottom:.75rem}.mb-16{margin-bottom:1rem}.mb-20{margin-bottom:20px}.mb-24{margin-bottom:1.5rem}.mb-32{margin-bottom:2rem}.mb-40{margin-bottom:2.5rem}.mb-48{margin-bottom:48px}.mb-50{margin-bottom:50px}.mb-56{margin-bottom:56px}.mb-64{margin-bottom:64px}.mb-72{margin-bottom:72px}.mb-96{margin-bottom:96px}.mb-162{margin-bottom:162px}@media(min-width:640px){.sm\\:mb--24{margin-bottom:-24px}.sm\\:mb-auto{margin-bottom:0 auto}.sm\\:mb-0{margin-bottom:0}.sm\\:mb-4{margin-bottom:4px}.sm\\:mb-8{margin-bottom:.5rem}.sm\\:mb-10{margin-bottom:10px}.sm\\:mb-12{margin-bottom:.75rem}.sm\\:mb-16{margin-bottom:1rem}.sm\\:mb-20{margin-bottom:20px}.sm\\:mb-24{margin-bottom:1.5rem}.sm\\:mb-32{margin-bottom:2rem}.sm\\:mb-40{margin-bottom:2.5rem}.sm\\:mb-48{margin-bottom:48px}.sm\\:mb-50{margin-bottom:50px}.sm\\:mb-56{margin-bottom:56px}.sm\\:mb-64{margin-bottom:64px}.sm\\:mb-72{margin-bottom:72px}.sm\\:mb-96{margin-bottom:96px}.sm\\:mb-162{margin-bottom:162px}}@media(min-width:960px){.md\\:mb--24{margin-bottom:-24px}.md\\:mb-auto{margin-bottom:0 auto}.md\\:mb-0{margin-bottom:0}.md\\:mb-4{margin-bottom:4px}.md\\:mb-8{margin-bottom:.5rem}.md\\:mb-10{margin-bottom:10px}.md\\:mb-12{margin-bottom:.75rem}.md\\:mb-16{margin-bottom:1rem}.md\\:mb-20{margin-bottom:20px}.md\\:mb-24{margin-bottom:1.5rem}.md\\:mb-32{margin-bottom:2rem}.md\\:mb-40{margin-bottom:2.5rem}.md\\:mb-48{margin-bottom:48px}.md\\:mb-50{margin-bottom:50px}.md\\:mb-56{margin-bottom:56px}.md\\:mb-64{margin-bottom:64px}.md\\:mb-72{margin-bottom:72px}.md\\:mb-96{margin-bottom:96px}.md\\:mb-162{margin-bottom:162px}}@media(min-width:1280px){.lg\\:mb--24{margin-bottom:-24px}.lg\\:mb-auto{margin-bottom:0 auto}.lg\\:mb-0{margin-bottom:0}.lg\\:mb-4{margin-bottom:4px}.lg\\:mb-8{margin-bottom:.5rem}.lg\\:mb-10{margin-bottom:10px}.lg\\:mb-12{margin-bottom:.75rem}.lg\\:mb-16{margin-bottom:1rem}.lg\\:mb-20{margin-bottom:20px}.lg\\:mb-24{margin-bottom:1.5rem}.lg\\:mb-32{margin-bottom:2rem}.lg\\:mb-40{margin-bottom:2.5rem}.lg\\:mb-48{margin-bottom:48px}.lg\\:mb-50{margin-bottom:50px}.lg\\:mb-56{margin-bottom:56px}.lg\\:mb-64{margin-bottom:64px}.lg\\:mb-72{margin-bottom:72px}.lg\\:mb-96{margin-bottom:96px}.lg\\:mb-162{margin-bottom:162px}}.mr--24{margin-right:-24px}.mr-auto{margin-right:0 auto}.mr-0{margin-right:0}.mr-4{margin-right:4px}.mr-8{margin-right:.5rem}.mr-10{margin-right:10px}.mr-12{margin-right:.75rem}.mr-16{margin-right:1rem}.mr-20{margin-right:20px}.mr-24{margin-right:1.5rem}.mr-32{margin-right:2rem}.mr-40{margin-right:2.5rem}.mr-48{margin-right:48px}.mr-50{margin-right:50px}.mr-56{margin-right:56px}.mr-64{margin-right:64px}.mr-72{margin-right:72px}.mr-96{margin-right:96px}.mr-162{margin-right:162px}@media(min-width:640px){.sm\\:mr--24{margin-right:-24px}.sm\\:mr-auto{margin-right:0 auto}.sm\\:mr-0{margin-right:0}.sm\\:mr-4{margin-right:4px}.sm\\:mr-8{margin-right:.5rem}.sm\\:mr-10{margin-right:10px}.sm\\:mr-12{margin-right:.75rem}.sm\\:mr-16{margin-right:1rem}.sm\\:mr-20{margin-right:20px}.sm\\:mr-24{margin-right:1.5rem}.sm\\:mr-32{margin-right:2rem}.sm\\:mr-40{margin-right:2.5rem}.sm\\:mr-48{margin-right:48px}.sm\\:mr-50{margin-right:50px}.sm\\:mr-56{margin-right:56px}.sm\\:mr-64{margin-right:64px}.sm\\:mr-72{margin-right:72px}.sm\\:mr-96{margin-right:96px}.sm\\:mr-162{margin-right:162px}}@media(min-width:960px){.md\\:mr--24{margin-right:-24px}.md\\:mr-auto{margin-right:0 auto}.md\\:mr-0{margin-right:0}.md\\:mr-4{margin-right:4px}.md\\:mr-8{margin-right:.5rem}.md\\:mr-10{margin-right:10px}.md\\:mr-12{margin-right:.75rem}.md\\:mr-16{margin-right:1rem}.md\\:mr-20{margin-right:20px}.md\\:mr-24{margin-right:1.5rem}.md\\:mr-32{margin-right:2rem}.md\\:mr-40{margin-right:2.5rem}.md\\:mr-48{margin-right:48px}.md\\:mr-50{margin-right:50px}.md\\:mr-56{margin-right:56px}.md\\:mr-64{margin-right:64px}.md\\:mr-72{margin-right:72px}.md\\:mr-96{margin-right:96px}.md\\:mr-162{margin-right:162px}}@media(min-width:1280px){.lg\\:mr--24{margin-right:-24px}.lg\\:mr-auto{margin-right:0 auto}.lg\\:mr-0{margin-right:0}.lg\\:mr-4{margin-right:4px}.lg\\:mr-8{margin-right:.5rem}.lg\\:mr-10{margin-right:10px}.lg\\:mr-12{margin-right:.75rem}.lg\\:mr-16{margin-right:1rem}.lg\\:mr-20{margin-right:20px}.lg\\:mr-24{margin-right:1.5rem}.lg\\:mr-32{margin-right:2rem}.lg\\:mr-40{margin-right:2.5rem}.lg\\:mr-48{margin-right:48px}.lg\\:mr-50{margin-right:50px}.lg\\:mr-56{margin-right:56px}.lg\\:mr-64{margin-right:64px}.lg\\:mr-72{margin-right:72px}.lg\\:mr-96{margin-right:96px}.lg\\:mr-162{margin-right:162px}}.max-w-none{max-width:none}.max-w-100{max-width:100%}.w-auto{width:auto}.w-full{width:100%}.w-screen{width:100vw}.w-max-content{width:-webkit-max-content;width:-moz-max-content;width:max-content}.w-0{width:0}.w-24{width:24px}.w-32{width:32px}.w-40{width:40px}@media(min-width:640px){.sm\\:w-auto{width:auto}.sm\\:w-full{width:100%}.sm\\:w-screen{width:100vw}.sm\\:w-max-content{width:-webkit-max-content;width:-moz-max-content;width:max-content}.sm\\:w-0{width:0}.sm\\:w-24{width:24px}.sm\\:w-32{width:32px}.sm\\:w-40{width:40px}}@media(min-width:960px){.md\\:w-auto{width:auto}.md\\:w-full{width:100%}.md\\:w-screen{width:100vw}.md\\:w-max-content{width:-webkit-max-content;width:-moz-max-content;width:max-content}.md\\:w-0{width:0}.md\\:w-24{width:24px}.md\\:w-32{width:32px}.md\\:w-40{width:40px}}@media(min-width:1280px){.lg\\:w-auto{width:auto}.lg\\:w-full{width:100%}.lg\\:w-screen{width:100vw}.lg\\:w-max-content{width:-webkit-max-content;width:-moz-max-content;width:max-content}.lg\\:w-0{width:0}.lg\\:w-24{width:24px}.lg\\:w-32{width:32px}.lg\\:w-40{width:40px}}.text-nowrap{white-space:nowrap}@media(min-width:640px){.sm\\:text-nowrap{white-space:nowrap}}@media(min-width:960px){.md\\:text-nowrap{white-space:nowrap}}@media(min-width:1280px){.lg\\:text-nowrap{white-space:nowrap}}.h-auto{height:auto}.h-full{height:100%}.h-screen{height:100vh}.h-20{height:20px}.h-24{height:24px}.h-26{height:26px}.h-32{height:32px}.h-36{height:36px}.h-40{height:40px}.h-44{height:44px}.h-48{height:48px}.h-54{height:54px}.h-56{height:56px}.h-60{height:60px}.h-72{height:72px}.h-75{height:75px}.h-64{height:64px}.h-96{height:96px}.h-110{height:110px}@media(min-width:640px){.sm\\:h-auto{height:auto}.sm\\:h-full{height:100%}.sm\\:h-screen{height:100vh}.sm\\:h-20{height:20px}.sm\\:h-24{height:24px}.sm\\:h-26{height:26px}.sm\\:h-32{height:32px}.sm\\:h-36{height:36px}.sm\\:h-40{height:40px}.sm\\:h-44{height:44px}.sm\\:h-48{height:48px}.sm\\:h-54{height:54px}.sm\\:h-56{height:56px}.sm\\:h-60{height:60px}.sm\\:h-72{height:72px}.sm\\:h-75{height:75px}.sm\\:h-64{height:64px}.sm\\:h-96{height:96px}.sm\\:h-110{height:110px}}@media(min-width:960px){.md\\:h-auto{height:auto}.md\\:h-full{height:100%}.md\\:h-screen{height:100vh}.md\\:h-20{height:20px}.md\\:h-24{height:24px}.md\\:h-26{height:26px}.md\\:h-32{height:32px}.md\\:h-36{height:36px}.md\\:h-40{height:40px}.md\\:h-44{height:44px}.md\\:h-48{height:48px}.md\\:h-54{height:54px}.md\\:h-56{height:56px}.md\\:h-60{height:60px}.md\\:h-72{height:72px}.md\\:h-75{height:75px}.md\\:h-64{height:64px}.md\\:h-96{height:96px}.md\\:h-110{height:110px}}@media(min-width:1280px){.lg\\:h-auto{height:auto}.lg\\:h-full{height:100%}.lg\\:h-screen{height:100vh}.lg\\:h-20{height:20px}.lg\\:h-24{height:24px}.lg\\:h-26{height:26px}.lg\\:h-32{height:32px}.lg\\:h-36{height:36px}.lg\\:h-40{height:40px}.lg\\:h-44{height:44px}.lg\\:h-48{height:48px}.lg\\:h-54{height:54px}.lg\\:h-56{height:56px}.lg\\:h-60{height:60px}.lg\\:h-72{height:72px}.lg\\:h-75{height:75px}.lg\\:h-64{height:64px}.lg\\:h-96{height:96px}.lg\\:h-110{height:110px}}.top-0{top:0}.bottom-0{bottom:0}.pointer-none{pointer-events:none}.pointer-auto{pointer-events:auto}.z-index-1{z-index:1}.z-index-9{z-index:9}.z-index-10{z-index:10}p{margin-bottom:0}.gradiant-hover:after,.gradiant-hover:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;z-index:-1;margin:-1px;border-radius:inherit;background:linear-gradient(90deg,#39ceee,#3ceccd);opacity:0;transition:all .3s ease}.gradiant-hover:after{background:linear-gradient(180deg,hsla(0,0%,100%,.5),hsla(0,0%,84.7%,.5));opacity:1}.gradiant-hover--hidden:after{opacity:0}.gradiant-hover:hover:before{opacity:1}.gradiant-hover:hover:after{opacity:0}.gradiant-hover--active:before{opacity:1}.gradiant-hover--active:after{opacity:0}.layout-enter-active,.layout-leave-active{transition:opacity .3s}.layout-enter,.layout-leave-active{opacity:0}.app-navigation-wrapper{flex:0 0 272px;max-width:272px}@media(max-width:959px){.app-navigation-wrapper{max-width:100%;flex:0 0 1}}.app-sticky{max-height:calc(100vh - 144px);width:272px}@media(max-width:959px){.app-sticky{max-width:100%;width:100%}}.app-sticky--full-height{max-height:none}.check-icon{width:12px;height:12px}.portrait-cards .check-icon{height:8px;width:8px}.app-navigation__button:after,.app-navigation__button:before{display:none}.app-navigation__list{height:auto}.app-navigation__list li a{padding-left:26px;background-size:12px auto;background-repeat:no-repeat;background-position:2px 7px}.app-navigation__item{overflow:hidden}.app-navigation__item:after{position:absolute;margin-left:36px;width:calc(100% - 36px);content:"";bottom:0;left:0;display:block;height:1px;background:#353945;background:var(--theme-divider)}.app-navigation__item--expanded .app-navigation__button,.app-navigation__item--selected .app-navigation__button{color:#5f259f;color:var(--color-primary)}.app-navigation__item--faq:after{margin-left:0;width:100%}.no-events{pointer-events:none}.child-link--active{color:#111835;color:var(--theme-text-primary)}img{max-width:100%}.text-gradiant-clip{-webkit-background-clip:text;-webkit-text-fill-color:transparent}.round-chip{border-width:1px;height:24px}.round-chip__bg{border-radius:inherit;box-shadow:inset 0 -.5px 1px rgba(0,0,0,.5);filter:drop-shadow(12px 24px 16px rgba(0,0,0,.25))}.round-chip__text{z-index:1}.round-chip:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;z-index:-1;margin:-2px;border-radius:12px;background-image:radial-gradient(88.95% 96.43% at 3.87%,at 8.93%,#fcf6e8 0,#c8a66b 76.04%,#543d19 100%);background-image:radial-gradient(88.95% 96.43% at 3.87% 8.93%,#fcf6e8 0,#c8a66b 76.04%,#543d19 100%)}.apk-download{z-index:9;transform:translateY(140%)}.body-scrolled footer{padding-bottom:106px}.body-scrolled .apk-download{transform:none}.body-scrolled .scroll-to-top{visibility:visible;opacity:1;transition:visibility 0s linear 0s,opacity .3s}.body-scrolled.offer-detail-page footer{padding-bottom:0}.background-counter{position:relative}.background-counter:before{content:attr(data-index);-webkit-text-fill-color:transparent;-webkit-text-stroke-width:4px;-webkit-text-stroke-color:hsla(0,0%,100%,.12);font-weight:700;font-size:74px;line-height:78px;position:absolute;bottom:0;left:0;transform:translateY(-15px)}.background-counter--dense:before{font-size:64px;line-height:80px}.background-counter--large:before{font-size:148px;line-height:96px}@media(max-width:1024px){.background-counter--large:before{font-size:64px;line-height:64px}}.family-play-video{right:0;top:0}.family-play-video__video{max-width:100%}.audio-chat-video__video{max-width:100%;height:auto}.family-play-img-wrapper{height:420px;overflow-x:visible}@media(max-width:1024px){.family-play-img-wrapper{margin-top:64px;position:relative;height:175px;margin-right:-24px}}@media(max-width:1024px){.family-play-img{left:0}}.playing-avatar{width:44px;height:44px;background-size:cover;border:4px solid #fff;border:4px solid var(--theme-background);margin-left:-12px;transform:translateX(8px)}.swiper-pagination-bullets .swiper-pagination-bullet{transform:scale(1);border-radius:0}.swiper-pagination-bullets .swiper-pagination-bullet:first-child{border-bottom-left-radius:40px;border-top-left-radius:40px}.swiper-pagination-bullets .swiper-pagination-bullet:last-child{border-bottom-right-radius:40px;border-top-right-radius:40px}.swiper-pagination-bullets .swiper-pagination-bullet-active{border-radius:40px!important}.landing-view{--swiper-theme-color:var(--theme-text-primary);--swiper-pagination-color:var(--theme-text-primary)}@media(max-width:1024px){.landing-view__wrapper{position:relative}}.landing-view__slider{width:70%;max-width:580px}@media(max-width:1024px){.landing-view__slider{margin-top:24px;width:100%;max-width:none;padding-left:24px;padding-right:24px}}.landing-view .swiper-pagination-bullet{background:hsla(0,0%,100%,.5);background:#41465d;background:var(--theme-text-secondary);width:24px;border-radius:40px;margin-left:0!important;margin-right:0!important;opacity:.12}.landing-view .swiper-pagination-bullet-active{opacity:1;background:#5f259f;background:var(--color-primary)}.landing-view .swiper-pagination-bullets .swiper-pagination-bullet{transform:scale(1);border-radius:0}.landing-view .swiper-pagination-bullets .swiper-pagination-bullet:first-child{border-bottom-left-radius:40px;border-top-left-radius:40px}.landing-view .swiper-pagination-bullets .swiper-pagination-bullet:last-child{border-bottom-right-radius:40px;border-top-right-radius:40px}.landing-view .swiper-pagination-bullets .swiper-pagination-bullet-active{border-radius:40px!important}.img-gray-hover-primary__img{filter:opacity(.24) saturate(0)}.img-gray-hover-primary--active .img-gray-hover-primary__img,.img-gray-hover-primary:hover .img-gray-hover-primary__img{filter:opacity(1) saturate(100%)}.dark-shade{background-color:rgba(5,15,14,.5)}.accordion__item{cursor:pointer}.accordion-enter-active,.accordion-leave-active{will-change:height,opacity;transition:height .3s ease,opacity .3s ease;overflow:hidden}.accordion__icon{top:24px;right:24px;background-size:20px auto;background-repeat:no-repeat;background-position:50%;will-change:transform,filter;overflow:hidden;filter:saturate(0) brightness(2)}@media(max-width:960px){.accordion__icon{width:22px;height:20px;top:16px;right:0;background-size:16px auto}}.accordion__item--active .accordion__icon{transform:rotate(45deg);filter:saturate(100%) brightness(1)}.accordion__trigger{position:relative}.accordion__trigger:after{position:absolute;top:20px;right:0;content:"";width:24px;height:24px;transition:transform .3s ease;background-image:url(/img/up-arrow.svg);background-position:50%;background-repeat:no-repeat;transform:translateY(-50%) rotate(180deg)}@media(max-width:959px){.accordion__trigger:after{top:8px}}.accordion__trigger_active:after{transform:translateY(-50%) rotate(0deg)}.usp-item{max-width:226px}.accordion-enter,.accordion-leave-to{height:0!important;opacity:0}.text-underline{text-decoration:underline}.nav-item--active{color:#5f259f;color:var(--color-primary)}.mini-container{max-width:736px}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transform:scale(1)}html{height:100%}#__layout,#__nuxt,body{height:100%;position:relative;-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%;text-size-adjust:100%}@media(max-width:1024px){.gradiant-hover--hidden:after,.gradiant-hover--hidden:before{display:none}.gradiant-hover--hidden:hover{background:inherit}#app-navigation-wrapper{display:none}#app-article-container{padding-left:24px;padding-right:24px}#app-article-container>.pl-72{padding-left:0}}.bg-theme-dark a{color:#fff}.img-responsive{display:block;max-width:100%;aspect-ratio:auto}.cursor-pointer{cursor:pointer}@media(min-width:940px)and (max-width:1024px){.app-tab-card-wrapper{width:210px}}@media(min-width:768px)and (max-width:1024px){.app-tab-wrapper{justify-content:center}}button[disabled]{opacity:.32!important}.hover-effect{transition:all .3s ease}.hover-effect:not(.enable-opacity){opacity:.9}.hover-effect:hover{transform:scale(.95);opacity:1}:root{--color-line:var(--color-cyan)}.line-effect{position:relative;background-image:linear-gradient(90deg,var(--color-cyan) 0,var(--color-cyan));background-image:linear-gradient(90deg,var(--color-line) 0,var(--color-line));background-size:0 2px;background-position:0 95%;transition:background-size .25s cubic-bezier(.785,.135,.15,.86) 0s;padding-bottom:.5%;background-repeat:no-repeat}.line-effect.red{--color-line:var(--color-red)}.line-effect.yellow{--color-line:var(--color-yellow)}.line-effect.pink{--color-line:var(--color-pink)}.hover-scale:hover .line-effect,.line-effect.nuxt-link-exact-active,.line-effect:hover{background-size:100% 2px}.container--mini{max-width:920px}:root{--theme-divider:#353945}.disc-list{list-style:disc;padding-left:24px}.disc-list li{margin-bottom:6px}.content b,.content strong{font-weight:600}.content hr{border-color:#e7e8eb;border-width:1px}.content h1{margin-bottom:24px}.content h2{margin-bottom:20px;position:relative}.content h2>a{margin-left:0}.content h2>a:before{content:"#";color:#5f259f;color:var(--color-primary);font-weight:400;font-size:1.5rem;line-height:1.25;margin-left:-1.75rem;padding-right:.5rem;position:absolute;opacity:0}.content h2:hover>a:before{opacity:1}.content h3{margin-bottom:16px}.content p{line-height:1.7;margin-top:12px;margin-bottom:12px}.content p+h2{margin-top:32px}.content p+h3{margin-top:24px}.content td,.content th{line-height:1.7;min-height:48px;padding:12px 16px}.content th{background:#f5f5f5}.content ul{padding-left:8px;list-style:disc}.content ol{padding-left:12px;list-style:decimal}.content li{margin-top:8px}.content a{color:#6d2ab6}.content table{min-width:100%;table-layout:fixed;border-collapse:collapse;border:0;margin-bottom:16px}.content tr{position:relative;background-color:inherit;border:solid rgba(0,0,0,.12);border-width:1px 1px 0}.content tr:hover{background-color:rgba(0,0,0,.04)}.content tr:last-child{border-bottom-width:1px}.content thead td,.content thead th{min-height:52px;font-weight:600;line-height:1.375rem;text-align:left}.content iframe{max-width:100%;height:auto;aspect-ratio:580/380}table+h2,table+h3{margin-top:20px}.table-responsive{max-width:100%;overflow-x:auto;-ms-overflow-style:none}.table-scrollable{overflow-y:auto;height:60vh}.table-scrollable thead tr{background:none!important}.table-scrollable thead td,.table-scrollable thead th{z-index:1;position:-webkit-sticky;position:sticky;top:0;background:#f5f5f5}.blog-sidebar-category{width:264px}@media(max-width:1024px){.blog-sidebar-category{width:100%}}.top-header{left:50px}.previous-arrow{transform:rotate(-180deg)}.side-send-link{width:264px;height:285px;background:linear-gradient(149.6deg,#5f259f 32.1%,#9f2f72 76.02%)}.send-link-horizontal .send-link-form{flex-direction:column}.send-link-horizontal .text-field__input{font-size:12px}.send-link-horizontal .send-link-button{height:44px;margin-top:12px;font-size:16px;background:linear-gradient(180deg,#01c981,#009c4d);border-radius:8px}.two-column__item-main{flex:0 0 calc(100% - 264px);max-width:calc(100% - 264px)}@media(max-width:959px){.two-column__item-main{flex:0 0 100%;max-width:100%}}.body-sidebar .side-send-link,.body-sidebar .sidebar-send-link{position:fixed;top:0;right:0;z-index:1}.scroll-to-top{bottom:24px;right:24px;height:64px;width:64px;background:#fff url(' + S + ") no-repeat 50%;background-size:20px;z-index:9;box-shadow:0 0 10px rgba(0,0,0,.6);cursor:pointer;visibility:hidden;opacity:0;transition:visibility 0s linear .3s,opacity .3s;-webkit-animation:animatedBackground 1s infinite alternate;animation:animatedBackground 1s infinite alternate}@media(max-width:960px){.scroll-to-top{height:48px;width:48px;background-size:15px;bottom:120px}}@-webkit-keyframes animatedBackground{0%{background-position:center 70%}to{background-position:50%}}@keyframes animatedBackground{0%{background-position:center 70%}to{background-position:50%}}@media(max-width:960px){.app-view .scroll-to-top{bottom:24px}}.linear-highlighter{text-align:center;background:linear-gradient(270deg,#170c29 20%,red 40%,red 60%,#170c29 80%);background-size:200% auto;-webkit-background-clip:text;-webkit-text-fill-color:transparent;-webkit-animation:shine 1s linear infinite;animation:shine 1s linear infinite}@-webkit-keyframes shine{to{background-position:200%}}@keyframes shine{to{background-position:200%}}.tooltip{cursor:pointer}.tooltiptext{visibility:hidden;top:12%;left:0;background-color:#000;color:#fff}.tooltip:hover .tooltiptext{visibility:visible}", ""]),
            t.exports = _
    },
    function(t, e, o) {
        t.exports = o.p + "fonts/BasierCircle-Regular.d5326df.woff2"
    },
    function(t, e, o) {
        t.exports = o.p + "fonts/BasierCircle-Regular.8ce91e3.woff"
    },
    function(t, e, o) {
        t.exports = o.p + "fonts/BasierCircle-SemiBold.a05b38a.woff2"
    },
    function(t, e, o) {
        t.exports = o.p + "fonts/BasierCircle-SemiBold.19cde86.woff"
    },
    function(t, e, o) {
        t.exports = o.p + "fonts/BasierCircle-Bold.73a52fc.woff2"
    },
    function(t, e, o) {
        t.exports = o.p + "fonts/BasierCircle-Bold.9c1bc4f.woff"
    },
    function(t, e, o) {
        t.exports = o.p + "fonts/FingerPaint-Regular.c0ceb6d.woff2"
    },
    function(t, e, o) {
        t.exports = o.p + "fonts/FingerPaint-Regular.89abed8.woff"
    },
    function(t, e, o) {
        t.exports = o.p + "fonts/FingerPaint-Regular.91a87bf.ttf"
    },
    function(t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAclBMVEUAAABfJaBfJZ9gIp9eJaFcJZtfJZ9fJJ9fJJ9fJZ5eJZ9iIZ1fI55fJZ9fJZ9fJZ9fJZ9fJZ9fJaBZLpBfJZ9fJZ9fJZ9eJZ9fJJ9fJaBeJJ9eJZ9fJJ9fJZ9eJZ9fJaBfJZ9fJp5fJZ9jHJxgKJ9fJZ+kLYIxAAAAJXRSTlMAs6QXEhTO08rW0Q8d3tdt9dw8A/zt59iJe0kju5jDdGBX4AktBNydJwAAAiFJREFUeNrt29tuglAQheGxoqBoQRSKHDzW93/FJkY7YjNdJEOYm1mXlOT/2I2JJC0ptt1v1mm6biqy2Sq6PTaJyWD15fa7cEajb7W+vexzSiOO+7zFaALu2wi4byPgvo2A+yYC7gtbjvBp5L6VYLXhnoGA+wYC7lsIuG8j4L6NgPuWgumCGwYC7hsIuG8h4L6NgPsGAtAHgsCmz5sHg/VDkAICgz4LjPossOuzQN+3FMy4byCQnr9Iqn36fjHdV8kFCPTPz++B2e7takVEwRwL9P2v6f2Hh+7V8H4xjoBA3ee3j4/u5QkRiWcQBQM/vwygYLAzCCKxLwOwQN8HACDQ9wFgKEEcCZ8/AAACfR8AkEDdBwAsUPYBAHyGoQD3MQALFH0E0AlwHwIUAthfTAkDFALUD2eEAb2/TUSx3N9O0PNjAD6DZisCjvgdCwPwGSTiAeS4jwFYUEhHkIE+APR/q8uEmxPQBwB0Bvh3sAd9AOh/Bkfh1hP4zAJAf8FJuLMGz48AvX8LNQk74OfHAHwGB5KW7VAfA7Bgl5G4BH2XxwAsSOifnfOHsr3SkACKn/fnZ3Bj0qyLqPwm0gH+LmsXedEcY9IMA/Ac4AAHOMABDnCAAxzgAAc4wAEOcIADHOAABzjAAQ5wgAMc4AAHOMABDhhqZRfQ0tiruoAzjb1r8drPYxp9p+6fJhms5f4Hmez5Twa7cks2q8tlmoZlTYr9AMeRAwpDUBs2AAAAAElFTkSuQmCC"
    },
    ,
    function(t, e, o) {
        "use strict";
        o(238)
    },
    function(t, e, o) {
        var n = o(35)(!1);
        n.push([t.i, ".app-header-wrapper{height:80px}@media(max-width:1024px){.app-header-wrapper{height:64px}}.app-header{height:80px;transition:all .5s ease;color:#000}@media(max-width:1024px){.app-header{height:64px}}.app-header__logo{height:32px;width:178px}@media(max-width:1024px){.app-header__logo{height:16px;width:89px}}.selected-option{transform:scaleX(.5);transition:all .5s ease;margin-top:-32px;visibility:hidden;z-index:2}@media(max-width:992px){.selected-option{margin-top:-21px}}.a-exact-active .selected-option{transform:none;visibility:visible}.menu-wrapper{transform:translateY(80px);max-height:calc(100vh - 80px)}@media(max-width:1024px){.menu-wrapper{transform:translateY(56px);max-height:calc(100vh - 56px)}}.app-header__link{color:inherit}@media(max-width:1024px){.app-header__link{margin-left:-8px}}", ""]),
            t.exports = n
    },
    function(t, e, o) {
        "use strict";
        o(239)
    },
    function(t, e, o) {
        var n = o(35)(!1);
        n.push([t.i, ".grid-helper{pointer-events:none}.grid-helper__col:not(.opacity-0){background:rgba(255,0,221,.1)}.grid-helper__button{pointer-events:auto}", ""]),
            t.exports = n
    },
    , , , ,
    function(t, e, o) {
        "use strict";
        o(240)
    },
    function(t, e, o) {
        var n = o(35)(!1);
        n.push([t.i, ".app-tab-card{width:242px;min-width:140px}@media(max-width:1024px){.app-tab-card{width:auto;margin-right:16px;white-space:nowrap}}.app-tab-card__line{height:4px}.app-tab-card__img{width:100%;padding-bottom:100%}.app-tab-card__bg{background-color:inherit;filter:blur(13px);opacity:0}.app-tab-card--active,.app-tab-card--active .app-tab-card__bg,.app-tab-card:hover,.app-tab-card:hover .app-tab-card__bg{opacity:1}", ""]),
            t.exports = n
    },
    function(t, e, o) {
        "use strict";
        o(241)
    },
    function(t, e, o) {
        var n = o(35)(!1);
        n.push([t.i, '.sw-cursor-wrapper{-webkit-animation:pulse 5s infinite;animation:pulse 5s infinite}.sw-cursor{position:fixed;top:0;left:0;z-index:150;contain:layout style size;pointer-events:none;will-change:transform;transition:opacity .3s,color .4s;color:hsla(0,0%,100%,.9)}.sw-cursor__point{content:"";top:-24px;left:-24px;display:block;width:48px;height:48px;background:currentColor;transition:transform .3s ease-in-out,opacity .1s}.sw-cursor__point,.sw-cursor__text{position:absolute;transform:scale(0);border-radius:50%}.sw-cursor__text{top:-30px;left:-30px;display:flex;align-items:center;justify-content:center;opacity:0;font-size:16px;line-height:20px;text-align:center;letter-spacing:-.01em;transition:opacity .4s,transform .3s;width:60px;height:60px;background-color:currentColor}.sw-cursor__media{display:none;position:absolute;width:350px;height:350px;margin:-175px 0 0 -175px}.sw-cursor__media-box{opacity:1;transform:scale(.696);transition-duration:.4s,.4s;transition-delay:0s,0s}.sw-cursor__outline{border:1px solid;position:absolute;top:-18px;left:-18px;width:36px;height:36px;display:flex;align-items:center;justify-content:center;opacity:0;text-align:center;letter-spacing:-.01em;transition:opacity .4s,transform .3s;border-radius:50%;transform:scale(0)}.sw-cursor--visible .sw-cursor__point{transform:scale(.2)}.sw-cursor--visible.sw-cursor--active .sw-cursor__point{transform:scale(.23);transition-duration:.2s}.sw-cursor--visible .sw-cursor__outline{opacity:.5;transform:none}.sw-cursor--hover .sw-cursor__outline,.sw-cursor--hover .sw-cursor__point{opacity:0}.sw-cursor--hover .sw-cursor__text{opacity:.3;transform:none}@media(max-width:992px){.sw-cursor{display:none!important}}@-webkit-keyframes pulse{0%{transform:scale(1)}to{transform:scale(1.01)}}@keyframes pulse{0%{transform:scale(1)}to{transform:scale(1.01)}}', ""]),
            t.exports = n
    },
    function(t, e, o) {
        "use strict";
        o(242)
    },
    function(t, e, o) {
        var n = o(35)(!1);
        n.push([t.i, ".dialog[data-v-0089bcb8]{z-index:24;display:none;pointer-events:none;width:100vw;max-height:100vh;overflow-x:hidden}.dialog__scrim[data-v-0089bcb8]{z-index:-1;background-color:rgba(0,0,0,.7);opacity:0;will-change:opacity}.dialog__container[data-v-0089bcb8]{justify-content:space-around;opacity:0;transform:scaleY(0);transform-origin:bottom}.dialog__surface[data-v-0089bcb8]{width:100%;max-width:100%;max-height:calc(100vh - 32px);padding:40px}.dialog--scroll-lock[data-v-0089bcb8]{overflow:hidden}.dialog--full-screen .dialog__surface[data-v-0089bcb8]{--dialog-border-radius:0;width:100vw;max-width:100vw;height:100vh;max-height:100vh}.dialog--download-app .dialog__container[data-v-0089bcb8]{height:578px;overflow:hidden;border:1px solid hsla(0,0%,100%,.5);width:100%;background-color:var(--theme-surface)}.dialog--download-app .dialog__surface[data-v-0089bcb8]{height:100%;overflow-y:auto;max-width:100%}@media(max-width:1024px){.dialog--bottom-sheet[data-v-0089bcb8]{align-items:flex-end}}@media(max-width:1024px){.dialog--bottom-sheet .dialog__container[data-v-0089bcb8]{transform:translateY(100%)}}.dialog--closing[data-v-0089bcb8],.dialog--open[data-v-0089bcb8],.dialog--opening[data-v-0089bcb8]{display:flex}.dialog--closing .dialog__container[data-v-0089bcb8],.dialog--closing .dialog__scrim[data-v-0089bcb8]{transition:opacity .3s linear,transform .3s cubic-bezier(.4,0,.2,1);will-change:opacity,transform}.dialog--closing .dialog__container[data-v-0089bcb8]{transform:scaleY(0);transform-origin:bottom}@media(max-width:1024px){.dialog--closing.dialog--bottom-sheet .dialog__container[data-v-0089bcb8]{transform:translateY(100%)}}.dialog--opening .dialog__scrim[data-v-0089bcb8]{transition:opacity .3s linear;will-change:opacity}.dialog--opening .dialog__container[data-v-0089bcb8]{transition:opacity .3s linear,transform .3s cubic-bezier(.4,0,.2,1) 0ms;will-change:transform,opacity}.dialog--open[data-v-0089bcb8]{pointer-events:auto}.dialog--open .dialog__scrim[data-v-0089bcb8]{opacity:1}.dialog--open .dialog__container[data-v-0089bcb8]{opacity:1;transform:scaleY(1);transform-origin:bottom}.dialog-scroll-lock[data-v-0089bcb8]{overflow:hidden;transition:none!important}.dialog-virtual-scroll[data-v-0089bcb8]{position:absolute;top:-999px;width:50px;height:50px;overflow:scroll;visibility:hidden}@media(max-width:592px){.dialog:not(.dialog--full-screen) .dialog__surface[data-v-0089bcb8]{max-width:calc(100vw - 32px)}.download-dialog[data-v-0089bcb8]{margin:0 -8px}}.height-332[data-v-0089bcb8]{height:332px}.height-578[data-v-0089bcb8]{height:578px}", ""]),
            t.exports = n
    },
    function(t, e, o) {
        "use strict";
        o(243)
    },
    function(t, e, o) {
        var n = o(35)(!1);
        n.push([t.i, '#app-steps .prev-button[data-v-3999daaf]{transform:translateY(-50%) rotate(-180deg);left:10px}#app-steps .next-button[data-v-3999daaf],#app-steps .prev-button[data-v-3999daaf]{position:absolute;top:50%;height:64px;width:64px;border-radius:50%;border-color:#e7e8eb;box-shadow:0 0 6px rgba(0,0,0,.2);cursor:pointer;z-index:2;background:#fff url(/img/arrow-purple.png) no-repeat 50%;background-size:11px 20px}#app-steps .next-button[data-v-3999daaf]{transform:translateY(-50%);right:10px}#app-steps .swiper-pagination-button[data-v-3999daaf]{position:absolute;top:0;left:0;height:100%;width:100%;cursor:default}#app-steps .swiper-pagination-prev[data-v-3999daaf]{left:5px}#app-steps .swiper-pagination-prev[data-v-3999daaf]:before{content:"";position:absolute;height:100%;width:168px;pointer-events:none;z-index:1;background:linear-gradient(270deg,transparent,#fff)}#app-steps .swiper-pagination-next[data-v-3999daaf]{right:10px}#app-steps .swiper-pagination-next[data-v-3999daaf]:after{content:"";position:absolute;height:100%;width:168px;right:0;z-index:1;pointer-events:none;background:linear-gradient(90deg,transparent,#fff)}#app-steps .swiper-button-disabled[data-v-3999daaf]{display:none}', ""]),
            t.exports = n
    },
    function(t, e, o) {
        "use strict";
        o(244)
    },
    function(t, e, o) {
        var n = o(35)(!1);
        n.push([t.i, ".dialog{z-index:24;display:none;pointer-events:none;width:100vw;max-height:100vh;overflow-x:hidden}.dialog__scrim{z-index:-1;background-color:rgba(0,0,0,.7);opacity:0;will-change:opacity}.dialog__container{justify-content:space-around;opacity:0;transform:scale(.8)}.dialog__surface{min-width:100%;max-width:100%;height:100vh}.dialog--scroll-lock{overflow:hidden}.dialog--full-screen .dialog__surface{--dialog-border-radius:0;width:100vw;max-width:100vw;height:100vh;max-height:100vh}.dialog--download-app .dialog__container{height:100%;overflow:hidden;width:100%;background:#e8e7e9}.dialog--download-app .dialog__surface{height:100%;overflow-y:auto;max-width:100%}@media(max-width:1024px){.dialog--bottom-sheet{align-items:flex-end}}@media(max-width:1024px){.dialog--bottom-sheet .dialog__container{transform:translateY(100%)}}.dialog--closing,.dialog--open,.dialog--opening{display:flex}.dialog--closing .dialog__container,.dialog--closing .dialog__scrim{transition:opacity .3s linear,transform .3s cubic-bezier(.4,0,.2,1);will-change:opacity,transform}.dialog--closing .dialog__container{transform:scale(.8)}@media(max-width:1024px){.dialog--closing.dialog--bottom-sheet .dialog__container{transform:translateY(100%)}}.dialog--opening .dialog__scrim{transition:opacity .3s linear;will-change:opacity}.dialog--opening .dialog__container{transition:opacity .3s linear,transform .3s cubic-bezier(.4,0,.2,1) 0ms;will-change:transform,opacity}.dialog--open{pointer-events:auto}.dialog--open .dialog__scrim{opacity:1}.dialog--open .dialog__container{opacity:1;transform:scale(1)}.dialog-scroll-lock{overflow:hidden;transition:none!important}.dialog-virtual-scroll{position:absolute;top:-999px;width:50px;height:50px;overflow:scroll;visibility:hidden}@media(max-width:940px){.dialog:not(.dialog--full-screen) .dialog__surface{max-width:100%}.download-dialog{margin:0 -8px}}@media(min-width:940px){.dialog:not(.dialog--full-screen):not(.dialog--lg) .dialog__surface{max-width:100%}}", ""]),
            t.exports = n
    },
    function(t, e, o) {
        "use strict";
        o(245)
    },
    function(t, e, o) {
        var n = o(35)(!1);
        n.push([t.i, ".step-section{box-shadow:0 0 10px rgba(0,0,0,.12)}.close-button{outline:none}", ""]),
            t.exports = n
    },
    , , ,
    function(t, e, o) {
        "use strict";
        o(246)
    },
    function(t, e, o) {
        var n = o(35)(!1);
        n.push([t.i, ".pulse-bubble{-webkit-animation:pulse .4s ease 0s infinite alternate;animation:pulse .4s ease 0s infinite alternate}@-webkit-keyframes pulse{0%{opacity:1;transform:scale(1)}to{opacity:.25;transform:scale(.75)}}@keyframes pulse{0%{opacity:1;transform:scale(1)}to{opacity:.25;transform:scale(.75)}}", ""]),
            t.exports = n
    },
    function(t, e, o) {
        "use strict";
        o(247)
    },
    function(t, e, o) {
        var n = o(35)(!1);
        n.push([t.i, ".download-btn[disabled]{opacity:1!important}.download-app-button__ios{background:linear-gradient(121.19deg,rgba(133,239,49,0) 25.73%,hsla(0,0%,100%,.37) 45.27%,rgba(133,239,49,0) 62.27%),#000}.download-app-button__android,.download-app-button__ios{-webkit-animation:button-shine 45s linear infinite;animation:button-shine 45s linear infinite}.download-app-button__android{background:linear-gradient(121.19deg,rgba(133,239,49,0) 25.73%,hsla(0,0%,100%,.37) 45.27%,rgba(133,239,49,0) 62.27%),#009c4d}.download-app-button__text-downloading{z-index:2}.download-app-button__progress{position:absolute;left:-100%;height:100%;pointer-events:none;width:100%;z-index:1;transition:all .3s ease;background-color:#8d2b80;opacity:0}.download-app-button--progress-active{pointer-events:none;display:inline-block;background:#f0c71b!important}.download-app-button--progress-active .pulse-container{display:none}.download-app-button--progress-active .button__img,.download-app-button--progress-active .button__label{opacity:0}.download-app-button--progress-active .download-app-button__progress,.download-app-button--progress-active .download-app-button__text-downloading{opacity:1}.download-app-button--progress-failed{pointer-events:auto}@-webkit-keyframes button-shine{0%{background-position:-5000px 0}to{background-position:5000px 0}}@keyframes button-shine{0%{background-position:-5000px 0}to{background-position:5000px 0}}", ""]),
            t.exports = n
    },
    function(t, e, o) {
        "use strict";
        o(248)
    },
    function(t, e, o) {
        var n = o(35)(!1);
        n.push([t.i, ".download-btn[disabled]{opacity:1!important}.download-app-button__ios{background:linear-gradient(121.19deg,rgba(133,239,49,0) 25.73%,hsla(0,0%,100%,.37) 45.27%,rgba(133,239,49,0) 62.27%),#000}.download-app-button__android,.download-app-button__ios{-webkit-animation:button-shine 45s linear infinite;animation:button-shine 45s linear infinite}.download-app-button__android{background:linear-gradient(121.19deg,rgba(133,239,49,0) 25.73%,hsla(0,0%,100%,.37) 45.27%,rgba(133,239,49,0) 62.27%),#009c4d}@-webkit-keyframes button-shine{0%{background-position:-5000px 0}to{background-position:5000px 0}}@keyframes button-shine{0%{background-position:-5000px 0}to{background-position:5000px 0}}", ""]),
            t.exports = n
    },
    function(t, e, o) {
        "use strict";
        o(249)
    },
    function(t, e, o) {
        var n = o(35)(!1);
        n.push([t.i, ".apk-download-wrapper-footer[data-v-812b3cb2]{width:100vw;bottom:-10px}.mobile-download-btn[data-v-812b3cb2]{top:-20px;left:50%;transform:translate(-50%);width:90%}", ""]),
            t.exports = n
    },
    function(t, e, o) {
        "use strict";
        o(250)
    },
    function(t, e, o) {
        var n = o(35)(!1);
        n.push([t.i, ".apk-download-wrapper-footer{width:100vw}.mobile-download-btn{top:-20px;left:50%;transform:translate(-50%);width:90%}", ""]),
            t.exports = n
    }]), [[292, 105, 14, 106]]]);