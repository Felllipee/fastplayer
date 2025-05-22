(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [4143], {

        /***/
        994944: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(813110);
            __web_req__(59534);
            self._7ccc7343da2ae983607b3819c7bc1f93 = self._7ccc7343da2ae983607b3819c7bc1f93 || {};
            (function(__c) {
                var E = __c.E;
                var P = __c.P;
                var V_b = function(a, b = "medium") {
                        if (a !== null && a !== void 0 && a.length) {
                            var c = window.devicePixelRatio || 1,
                                d = (typeof b === "number" ? b : U_b(b)) * c;
                            return [...a].sort((e, f) => {
                                e = e.width;
                                f = f.width;
                                return e > d && f < d ? -1 : e < d && f > d ? 1 : Math.abs(e - d) - Math.abs(f - d)
                            })[0].url
                        }
                    },
                    a0b = function(a, b) {
                        class c {
                            static A(d) {
                                P(d, {
                                    Ae: H4,
                                    pka: H4
                                })
                            }
                            get Ae() {
                                switch (this.pka) {
                                    case "date":
                                        return new W_b(this.rn, b.language || "en-AU");
                                    case "select":
                                        return new X_b(this.rn);
                                    case "mention":
                                        return new Y_b(this.rn);
                                    case "embed":
                                        return new Z_b(this.rn);
                                    case "plain_number":
                                    case "currency":
                                    case "percentage":
                                    case void 0:
                                        break;
                                    default:
                                        throw new E(this.pka);
                                }
                            }
                            get pka() {
                                var d;
                                return (d = this.rn.bq) === null || d === void 0 ? void 0 : d.type
                            }
                            constructor(d) {
                                this.context = d;
                                this.rn = (c.A(this), void 0);
                                this.rn = __c.D(a.sv(d.sheet, d.na, d.column))
                            }
                        }
                        return $_b(d => (new c(d)).Ae)
                    },
                    c0b = function() {
                        const a = I4(() => new Map, []);
                        return {
                            ueb: b => {
                                if (a.has(b)) return __c.D(a.get(b));
                                const c = b0b();
                                a.set(b, c);
                                return c
                            }
                        }
                    },
                    d0b = function(a, b) {
                        return I4(() => {
                            const c = new Map;
                            return d => {
                                if (c.has(d)) return __c.D(c.get(d));
                                const e = a(d);
                                c.set(d, e);
                                return e
                            }
                        }, b)
                    },
                    k0b = function({
                        children: a,
                        keyFrame: b,
                        kZa: c,
                        ariaLive: d,
                        kPa: e = !1,
                        X5a: f,
                        Mma: g,
                        Qab: h,
                        sCb: k,
                        vIa: l,
                        wKa: m,
                        qCb: n,
                        Ytb: p
                    }) {
                        const {
                            ueb: q
                        } = c0b(), {
                            udb: r,
                            mpb: t
                        } = e0b(b, a), w = d0b(u => () => {
                            (e === !1 || typeof e === "function" && !e(u)) && t(u)
                        }, [t, e]);
                        return J4("div", {
                            className: K4(g, "_9GxJfQ", {
                                KwB0XQ: l === "hidden",
                                WV1Mmw: c === "fill-height",
                                _2uSJxw: c === "flex-grow"
                            }),
                            children: J4("div", {
                                className: K4("m2VaAA", h),
                                "aria-live": d,
                                style: k,
                                role: "region",
                                children: [...r.map(({
                                    key: u,
                                    element: x
                                }) => J4(f0b, { in: u === b,
                                    timeout: f,
                                    classNames: p,
                                    mountOnEnter: !0,
                                    unmountOnExit: !e,
                                    nodeRef: q(u),
                                    onExited: w(u),
                                    children: y => J4(g0b.Provider, {
                                        value: y,
                                        children: J4("div", {
                                            className: K4("KxXR9g", n, {
                                                KwB0XQ: m === "hidden"
                                            }),
                                            ref: q(u),
                                            "aria-hidden": y === h0b || y === i0b || y === j0b,
                                            children: u === b ? a : x
                                        })
                                    })
                                }, u)), r.every(u => u.key !== b) && J4(f0b, { in: !1,
                                    timeout: f,
                                    classNames: p,
                                    mountOnEnter: !0,
                                    unmountOnExit: !e,
                                    nodeRef: q(b),
                                    onExited: e ? void 0 : w(b),
                                    children: u => J4(g0b.Provider, {
                                        value: u,
                                        children: J4("div", {
                                            className: K4("KxXR9g", n),
                                            ref: q(b),
                                            "aria-hidden": u === h0b || u === i0b || u === j0b,
                                            children: a
                                        })
                                    })
                                }, b)]
                            })
                        })
                    },
                    e0b = function(a,
                        b) {
                        const [c, d] = l0b(() => [{
                            key: a,
                            element: b
                        }]);
                        m0b(() => {
                            d(f => f.every(g => g.key !== a) ? f.concat({
                                key: a,
                                element: b
                            }) : f.map(g => g.key === a ? {
                                key: a,
                                element: b
                            } : g))
                        }, [a, b]);
                        const e = L4(f => {
                            d(g => g.filter(h => h.key !== f))
                        }, []);
                        return {
                            udb: c,
                            mpb: e
                        }
                    },
                    n0b = function(a) {
                        switch (a.type) {
                            case "mention":
                                return "bCAtqw";
                            case "embed":
                                return "BTcT3w";
                            case "date":
                                return "McKQgg";
                            case "select":
                                return "V2E5nQ";
                            default:
                                throw new E(a);
                        }
                    },
                    r0b = function(a, b) {
                        switch (a.type) {
                            case "mention":
                                return J4(o0b, {
                                    Cq: a.user ? b.t_(a.user) : void 0,
                                    text: a.text,
                                    backgroundColor: a.user ? b.Ldb(a.user).background : void 0
                                });
                            case "embed":
                                const c = !a.url;
                                a = b.zKa.DZ.get(a.url);
                                return J4(p0b, {
                                    icon: a,
                                    Fhb: c
                                });
                            case "date":
                                return a.text ? void 0 : J4(q0b, {});
                            case "select":
                                break;
                            default:
                                throw new E(a);
                        }
                    },
                    t0b = function(a, b) {
                        switch (a.type) {
                            case "mention":
                            case "embed":
                            case "date":
                                break;
                            case "select":
                                return J4(s0b, {
                                    selected: !!b.KWa
                                });
                            default:
                                throw new E(a);
                        }
                    },
                    M4 = function(a) {
                        return (/Mac/.test(navigator.platform) ? a.metaKey : a.ctrlKey) ? !0 : a instanceof KeyboardEvent ? a.key === "Meta" || ["91",
                            "224"
                        ].includes(a.code) : !1
                    },
                    u0b = function(a) {
                        __c.v(!0, "chunkLength must be positive");
                        const b = [];
                        for (let c = 0; c < a.length; c += 50) b.push(a.slice(c, c + 50));
                        return b
                    },
                    v0b = function(a, b, c) {
                        if (c) {
                            var d = V_b(c.images, "medium"),
                                e = V_b(c.images, "xxxlarge");
                            if (d && e) {
                                c = new Image;
                                c.src = d;
                                var f = new Image;
                                f.src = e;
                                f.onload = N4(() => a.W5.set(b, e));
                                f.onerror = N4(() => a.W5.set(b, void 0));
                                !f.complete && c.complete ? a.W5.set(b, d) : c.src = ""
                            }
                        } else a.W5.set(b, void 0)
                    },
                    x0b = function(a, {
                        url: b,
                        id: c,
                        extension: d
                    }) {
                        if (!a.promises.has(b)) {
                            const e =
                                new Promise(f => {
                                    a.Dg ? a.Dg.oFb(new w0b({
                                        id: c,
                                        extension: d
                                    })).then(({
                                        document: g
                                    }) => {
                                        const h = g.Df.content.title;
                                        h ? (O4(() => a.w_a.set(b, {
                                            status: 1,
                                            title: h
                                        })), f(h)) : f(void 0)
                                    }).catch(() => {
                                        O4(() => a.w_a.set(b, {
                                            status: 2
                                        }));
                                        f(void 0)
                                    }) : f(void 0)
                                });
                            a.promises.set(b, e)
                        }
                        return a.promises.get(b)
                    },
                    U_b = a => a.endsWith("rem") ? parseFloat(a) * 10 : __c.Ay * __c.NIb[a],
                    P4 = __webpack_require__(519427),
                    N4 = P4.action,
                    y0b = P4.comparer,
                    H4 = P4.computed,
                    z0b = P4.observable,
                    Q4 = P4.ObservableMap,
                    O4 = P4.runInAction;
                var $_b = __webpack_require__(635872).Om;
                var R4 = __webpack_require__(875604),
                    A0b = R4.createContext,
                    b0b = R4.createRef,
                    B0b = R4.lazy,
                    S4 = R4.memo,
                    L4 = R4.useCallback,
                    m0b = R4.useEffect,
                    C0b = R4.useLayoutEffect,
                    I4 = R4.useMemo,
                    l0b = R4.useState;
                var D0b = __webpack_require__(443763),
                    J4 = D0b.jsx,
                    E0b = D0b.jsxs;
                var F0b = __webpack_require__,
                    G0b = F0b(993864),
                    K4 = F0b.n_x(G0b)();
                var f0b = __webpack_require__(460876).Z;
                var T4 = __webpack_require__(223826),
                    j0b = T4.Wj,
                    h0b = T4.Ix,
                    i0b = T4.$r;
                var U4 = __webpack_require__(446474).Pi;
                var H0b = class {
                        static A(a) {
                            P(a, {
                                text: H4,
                                user: H4,
                                brand: H4
                            })
                        }
                        get text() {
                            return this.Ae.text
                        }
                        get user() {
                            return this.Ae.user
                        }
                        get brand() {
                            return this.Ae.brand
                        }
                        constructor(a) {
                            this.Ae = a;
                            this.type = (H0b.A(this), "mention")
                        }
                    },
                    I0b = class {
                        static A(a) {
                            P(a, {
                                text: H4,
                                url: H4
                            })
                        }
                        get text() {
                            return this.Ae.text
                        }
                        get url() {
                            return this.Ae.url
                        }
                        constructor(a) {
                            this.Ae = a;
                            this.type = (I0b.A(this), "embed")
                        }
                    },
                    J0b = class {
                        static A(a) {
                            P(a, {
                                text: H4,
                                language: H4,
                                style: H4,
                                date: H4
                            })
                        }
                        get text() {
                            return this.Ae.text
                        }
                        get language() {
                            return this.Ae.language
                        }
                        get style() {
                            return this.Ae.style
                        }
                        get date() {
                            return this.Ae.date
                        }
                        constructor(a) {
                            this.Ae =
                                a;
                            this.type = (J0b.A(this), "date")
                        }
                    },
                    K0b = class {
                        static A(a) {
                            P(a, {
                                text: H4,
                                options: H4,
                                df: H4,
                                CR: H4
                            })
                        }
                        get text() {
                            return this.Ae.text
                        }
                        get options() {
                            return this.Ae.options.map(a => a)
                        }
                        get df() {
                            return this.Ae.df
                        }
                        get CR() {
                            var a;
                            return (a = this.Ae.options.first(b => b.id === this.Ae.df)) === null || a === void 0 ? void 0 : a.fill.color
                        }
                        constructor(a) {
                            this.Ae = a;
                            this.type = (K0b.A(this), "select")
                        }
                    },
                    L0b = $_b(a => {
                        switch (a.type) {
                            case "mention":
                                return new H0b(a);
                            case "embed":
                                return new I0b(a);
                            case "date":
                                return new J0b(a);
                            case "select":
                                return new K0b(a);
                            default:
                                throw new E(a);
                        }
                    });
                var W_b = class {
                        static A(a) {
                            P(a, {
                                style: H4,
                                date: H4,
                                text: H4
                            })
                        }
                        get style() {
                            return 2
                        }
                        get date() {
                            var a;
                            (a = this.mo.gk.type === 2 ? this.mo.gk.date : void 0) || (a = new Date, a = __c.Zz(a), a = {
                                year: a.getFullYear(),
                                month: a.getMonth() + 1,
                                day: a.getDate(),
                                Bfb: a.getHours(),
                                ykb: a.getMinutes()
                            });
                            return a
                        }
                        get text() {
                            return this.mo.Sz
                        }
                        constructor(a, b) {
                            this.mo = a;
                            this.language = b;
                            this.type = (W_b.A(this), "date")
                        }
                    },
                    M0b = class {
                        get label() {
                            return this.option.label
                        }
                        get fill() {
                            return this.option.fill
                        }
                        constructor(a, b) {
                            this.option = a;
                            this.id =
                                b
                        }
                    },
                    X_b = class {
                        static A(a) {
                            P(a, {
                                options: H4,
                                df: H4,
                                CR: H4,
                                text: H4,
                                WLa: H4({
                                    equals: y0b.shallow
                                })
                            })
                        }
                        get options() {
                            return this.WLa.map((a, b) => new M0b(a, b))
                        }
                        get df() {
                            var a;
                            return (a = this.options.find(b => b.label === this.text)) === null || a === void 0 ? void 0 : a.id
                        }
                        get CR() {
                            var a;
                            return (a = this.options.find(b => b.id === this.df)) === null || a === void 0 ? void 0 : a.fill.color
                        }
                        get text() {
                            return this.mo.Sz
                        }
                        get WLa() {
                            var a, b;
                            __c.C(((a = this.mo.bq) === null || a === void 0 ? void 0 : a.type) === "select");
                            return (b = this.mo.bq) === null || b === void 0 ?
                                void 0 : b.options
                        }
                        constructor(a) {
                            this.mo = a;
                            this.type = (X_b.A(this), "select")
                        }
                    },
                    Y_b = class {
                        static A(a) {
                            P(a, {
                                gM: H4
                            })
                        }
                        get text() {
                            return this.gM ? this.gM.text : ""
                        }
                        get user() {
                            return this.gM ? this.gM.user : ""
                        }
                        get brand() {
                            return this.gM ? this.gM.brand : ""
                        }
                        get gM() {
                            if (this.mo.gk.type !== 9) return __c.C(this.mo.gk.type === 7), this.mo.gk ? this.mo.gk.value[0] : void 0
                        }
                        constructor(a) {
                            this.mo = a;
                            this.type = (Y_b.A(this), "mention")
                        }
                    },
                    Z_b = class {
                        static A(a) {
                            P(a, {
                                ZZ: H4
                            })
                        }
                        get text() {
                            return this.ZZ ? this.ZZ.embed.text : ""
                        }
                        get url() {
                            return this.ZZ ?
                                this.ZZ.embed.url : ""
                        }
                        get ZZ() {
                            if (this.mo.gk.type !== 9) return __c.C(this.mo.gk.type === 8), this.mo.gk ? this.mo.gk.value[0] : void 0
                        }
                        constructor(a) {
                            this.mo = a;
                            this.type = (Z_b.A(this), "embed")
                        }
                    };
                var N0b = class {
                    fpa(a) {
                        this.dla.fpa(a)
                    }
                    i4(a, b) {
                        this.dla.i4(a, b)
                    }
                    t_(a) {
                        return this.dla.t_(a)
                    }
                    cpa(a) {
                        this.zKa.cpa(a)
                    }
                    constructor(a, b, c, d) {
                        this.dla = a;
                        this.zKa = b;
                        this.nb = c;
                        this.kt = d;
                        this.jCa = new __c.Qwb;
                        this.Ldb = e => __c.YJa(this.jCa, e)
                    }
                };
                var g0b = A0b(void 0);
                var O0b = Number.parseInt("300ms", 10),
                    P0b = {
                        enter: "_QukmA",
                        enterActive: "_5_06KQ",
                        enterDone: void 0,
                        exitActive: "a952jg",
                        exitDone: "orZOEA"
                    },
                    Q0b = S4(function({
                        vr: a = !1,
                        children: b,
                        keyFrame: c,
                        kZa: d,
                        vIa: e = "hidden",
                        wKa: f = "hidden",
                        ariaLive: g,
                        kPa: h,
                        TFb: k = "none"
                    }) {
                        a = __c.vb() && !a;
                        return k0b({
                            children: b,
                            keyFrame: c,
                            kZa: d,
                            ariaLive: g,
                            vIa: e,
                            wKa: f,
                            kPa: h,
                            X5a: a ? O0b : 0,
                            Qab: K4({
                                _1niDPQ: a,
                                Q6kGbg: k === "none",
                                _9j7ODw: k === "layout"
                            }),
                            Ytb: P0b
                        })
                    });
                var R0b = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.25 3.5a.75.75 0 0 0-1.5 0V5H7a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4h-.75V3.5a.75.75 0 0 0-1.5 0V5h-5.5V3.5Zm5.5 4v-1h-5.5v1a.75.75 0 0 1-1.5 0v-1H7A2.5 2.5 0 0 0 4.5 9v1h15V9A2.5 2.5 0 0 0 17 6.5h-.75v1a.75.75 0 0 1-1.5 0Zm4.75 4h-15V17A2.5 2.5 0 0 0 7 19.5h10a2.5 2.5 0 0 0 2.5-2.5v-5.5Z" fill="currentColor"/></svg>';
                var S0b = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-1.288-.244-2.52-.687-3.65v-.1h-.04A10.003 10.003 0 0 0 12 2C6.477 2 2 6.477 2 12Zm12.653-8.078A8.526 8.526 0 0 1 19.63 8.25h-3.457c-.317-1.74-.848-3.236-1.52-4.328ZM20.2 9.75h-3.813c.075.723.114 1.476.114 2.25s-.04 1.527-.114 2.25h3.813A8.51 8.51 0 0 0 20.5 12a8.51 8.51 0 0 0-.301-2.25Zm-.569 6h-3.457c-.317 1.74-.848 3.236-1.52 4.328a8.526 8.526 0 0 0 4.977-4.328Zm-4.755-1.5a20.109 20.109 0 0 0 0-4.5h-5.75a20.116 20.116 0 0 0 0 4.5h5.75Zm-5.519 1.5h5.288C14.08 18.593 12.953 20.5 12 20.5c-.953 0-2.081-1.907-2.644-4.75Zm-1.529 0c.317 1.74.848 3.236 1.52 4.328A8.526 8.526 0 0 1 4.37 15.75h3.457Zm-.213-1.5H3.801A8.51 8.51 0 0 1 3.5 12c0-.779.105-1.533.301-2.25h3.813A21.9 21.9 0 0 0 7.5 12c0 .774.04 1.527.114 2.25ZM12 3.5c.953 0 2.081 1.907 2.644 4.75H9.356C9.92 5.407 11.047 3.5 12 3.5ZM4.37 8.25h3.457c.317-1.74.848-3.236 1.52-4.328A8.525 8.525 0 0 0 4.37 8.25Z" fill="currentColor"/></svg>';
                var T0b = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M8.64 16.5a4.87 4.87 0 0 0 4.11 2.25h4.5a4.88 4.88 0 0 0 0-9.75h-4.5a4.88 4.88 0 0 0-4.5 3h1.7c.6-.9 1.63-1.5 2.8-1.5h4.5a3.38 3.38 0 0 1 0 6.75h-4.5c-.8 0-1.54-.28-2.12-.75H8.64zm7.1-9a4.87 4.87 0 0 0-4.12-2.25h-4.5a4.87 4.87 0 1 0 0 9.75h4.5a4.88 4.88 0 0 0 4.5-3h-1.69c-.6.9-1.63 1.5-2.8 1.5h-4.5a3.38 3.38 0 0 1 0-6.75h4.5c.8 0 1.54.28 2.12.75h1.98z"/></svg>';
                var U0b = '<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.374 7.572A3.5 3.5 0 1 0 5.6 7.548a5.365 5.365 0 0 0-2.928 3.968 1.5 1.5 0 0 0 .592 1.441 7.9 7.9 0 0 0 4.7 1.543 7.9 7.9 0 0 0 4.698-1.542 1.5 1.5 0 0 0 .592-1.442 5.364 5.364 0 0 0-2.88-3.944ZM10 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-5.847 6.75a3.858 3.858 0 0 1 7.62 0A6.4 6.4 0 0 1 7.963 13a6.4 6.4 0 0 1-3.81-1.25Z" fill="currentColor"/></svg>';
                var V0b = S4(a => {
                        const b = a.link,
                            c = a.className,
                            d = a.ariaLabel,
                            e = a.CR,
                            f = a.$$a,
                            g = a.q4a,
                            h = a.R4a,
                            k = a.measureRef,
                            l = a.onPointerDown,
                            m = a.onMouseEnter,
                            n = a.onMouseLeave,
                            p = K4({
                                EdewNw: !!g,
                                _6ZpPrw: !!h,
                                pzXyUA: a.text.length > 0
                            });
                        a = a.text.length > 0 ? a.text : "\ufeff";
                        return E0b("span", {
                            className: K4(c, "FedJ0Q"),
                            "aria-label": d || a,
                            children: [J4("span", {
                                className: K4("_2Lr6pQ", p),
                                children: J4("span", {
                                    className: "Z_WvzQ",
                                    children: a
                                })
                            }), E0b("span", {
                                className: K4("XemTdQ", p),
                                ref: k,
                                style: e ? {
                                    color: e
                                } : void 0,
                                onPointerDown: l,
                                onMouseEnter: m,
                                onMouseLeave: n,
                                children: [g, J4("span", {
                                    className: K4("U_QH_A", {
                                        C9XL8g: !f
                                    }),
                                    children: b ? J4("a", {
                                        className: "vgTP5Q",
                                        ...b,
                                        children: a
                                    }) : a
                                }), h]
                            })]
                        })
                    }),
                    o0b = S4(a => {
                        const b = a.backgroundColor,
                            c = a.Cq;
                        a = a.text;
                        const d = {
                            width: "0.9em",
                            height: "0.9em"
                        };
                        return J4(Q0b, {
                            keyFrame: c ? "show" : "hide",
                            children: a ? J4(__c.RIb, {
                                name: a,
                                style: d,
                                backgroundColor: b,
                                Cq: c,
                                borderColor: c ? void 0 : b
                            }) : J4("span", {
                                "aria-hidden": "true",
                                className: "_tFJqA",
                                dangerouslySetInnerHTML: {
                                    __html: U0b
                                }
                            })
                        })
                    }),
                    p0b = S4(a => {
                        const b = a.icon;
                        a = a.Fhb;
                        return J4(Q0b, {
                            keyFrame: b ? "favicon" : "placeholder",
                            children: b ? J4("span", {
                                className: "_tFJqA",
                                children: J4("img", {
                                    src: b,
                                    className: "qpbYdw"
                                })
                            }) : J4("span", {
                                "aria-hidden": "true",
                                className: "_tFJqA",
                                dangerouslySetInnerHTML: {
                                    __html: a ? T0b : S0b
                                }
                            })
                        })
                    }),
                    q0b = S4(() => J4("span", {
                        "aria-hidden": "true",
                        className: "_tFJqA",
                        dangerouslySetInnerHTML: {
                            __html: R0b
                        }
                    })),
                    s0b = S4(({
                        selected: a
                    }) => J4("div", {
                        className: K4("whph4A", {
                            zgzjww: a
                        }),
                        children: J4(__c.LL, {
                            size: "medium",
                            style: {
                                width: "0.9em",
                                height: "0.9em"
                            },
                            className: "_tFJqA"
                        })
                    })),
                    W0b = U4(a => {
                        const {
                            Ae: b,
                            KWa: c,
                            Dva: d,
                            mode: e = "viewable",
                            measureRef: f,
                            ap: g,
                            onPointerDown: h
                        } = a;
                        a = b.text || "\u00a0".repeat(16);
                        const k = b.type === "embed" ? d.nb(b.url) : void 0,
                            [l, m] = l0b(!1),
                            n = L4(t => m(M4(t)), [m]),
                            p = L4(t => m(!M4(t)), [m]),
                            q = L4(t => {
                                m(M4(t.nativeEvent));
                                document.addEventListener("keydown", n);
                                document.addEventListener("keyup", p)
                            }, [m, n, p]),
                            r = L4(() => {
                                m(!1);
                                document.removeEventListener("keydown", n);
                                document.removeEventListener("keyup", p)
                            }, [m, n, p]);
                        m0b(() => {
                            O4(() => {
                                switch (b.type) {
                                    case "mention":
                                        b.user && d.fpa(b.user);
                                        break;
                                    case "embed":
                                        d.cpa(b.url)
                                }
                            })
                        }, [b, d]);
                        C0b(() => {
                            g === null || g === void 0 || g()
                        }, [b.type, a, g]);
                        return J4(V0b, {
                            text: a,
                            link: e === "viewable" || l ? k : void 0,
                            $$a: b.text.length === 0,
                            ariaLabel: b.text || "",
                            className: n0b(b),
                            CR: b.CR,
                            q4a: r0b(b, d),
                            R4a: t0b(b, {
                                KWa: c
                            }),
                            measureRef: f,
                            onPointerDown: h,
                            onMouseEnter: b.type === "embed" && e === "editable" ? q : void 0,
                            onMouseLeave: b.type === "embed" && e === "editable" ? r : void 0
                        })
                    });
                var X0b = __c.L(() => ({
                    AGb: __c.UM(11),
                    mode: __c.F("A?", 1, "BY_USER_IDS"),
                    Vub: __c.TM(1)
                }));
                var Y0b = class {
                        static A(a) {
                            P(a, {
                                CP: z0b.shallow,
                                lLa: N4
                            })
                        }
                        t_(a) {
                            return this.DGa.t_(a)
                        }
                        fpa(a) {
                            this.iCa.has(a) || this.CP.has(a) || (this.CP.add(a), this.B$a())
                        }
                        i4(a, b) {
                            this.iCa.has(a) || (this.iCa.set(a, b), this.CP.delete(a), v0b(this.DGa, a, b))
                        }
                        async lLa() {
                            if (this.CP.size !== 0) {
                                var a = [...this.CP.values()];
                                this.CP.clear();
                                if (this.EGa) {
                                    var b = await this.EGa;
                                    await Promise.all(u0b(a).map(async c => {
                                        const d = new X0b({
                                                Vub: c
                                            }),
                                            {
                                                pzb: e
                                            } = await b.REb(d);
                                        O4(() => c.forEach(f => this.i4(f, e.get(f))))
                                    }))
                                } else a.forEach(c => this.i4(c))
                            }
                        }
                        constructor(a,
                            b) {
                            this.EGa = a;
                            this.iCa = (Y0b.A(this), new Q4);
                            this.CP = new Set;
                            this.DGa = new Z0b;
                            this.B$a = __c.Pc(() => this.lLa(), 200);
                            O4(() => {
                                b === null || b === void 0 || b.forEach((c, d) => this.i4(d, c))
                            })
                        }
                    },
                    Z0b = class {
                        t_(a) {
                            return this.W5.get(a)
                        }
                        constructor() {
                            this.W5 = new Q4
                        }
                    };
                var w0b = __c.L(() => ({
                    id: __c.X("id", 1),
                    extension: __c.Y("extension", 3),
                    DWa: __c.PM("revision", 5),
                    version: __c.PM("version", 2),
                    hGb: __c.PM("imagesetsLimit", 6)
                }));
                var $0b = class {
                    static A(a) {
                        P(a, {
                            ucb: N4
                        })
                    }
                    async ucb(a) {
                        if (this.Dg) {
                            var b = (new URL(a)).pathname; {
                                const c = /design\/(D[a-zA-Z0-9_-]{10})\/?([a-zA-Z0-9_-]+)?/g.exec(b);
                                c == null || c.length < 2 ? b = void 0 : (b = c[2], (new Set(["edit", "remix", "view", "watch"])).has(c[2]) && (b = void 0), b = {
                                    id: c[1],
                                    extension: b
                                })
                            }
                            if (b) return await x0b(this, {
                                url: a,
                                ...b
                            })
                        }
                    }
                    constructor(a) {
                        this.Dg = a;
                        this.w_a = ($0b.A(this), new Q4);
                        this.promises = new Map
                    }
                };
                var a1b = class {
                    static A(a) {
                        P(a, {
                            DZ: z0b.shallow
                        })
                    }
                    async cpa(a) {
                        const b = new Image;
                        let c;
                        try {
                            var d;
                            const e = await ((d = this.kt) === null || d === void 0 ? void 0 : d.p7(a));
                            c = e === null || e === void 0 ? void 0 : e.tcb
                        } catch (e) {}
                        c ? (b.src = c, b.onload = N4(() => this.DZ.set(a, c)), b.onerror = N4(() => this.DZ.set(a, void 0))) : O4(() => this.DZ.set(a, void 0))
                    }
                    constructor(a) {
                        this.kt = a;
                        this.DZ = (a1b.A(this), new Map)
                    }
                };
                __c.GGa = {
                    Bgb: function(a) {
                        const b = a.document,
                            c = a.Dg,
                            d = a.nb,
                            e = a.kt;
                        var f = a.J7;
                        const g = a.ed,
                            h = a.Og,
                            k = a.Yy,
                            l = a.BW;
                        a = a.tGb;
                        f = new Y0b(a === null || a === void 0 ? void 0 : a(), f);
                        a = new a1b(e);
                        new $0b(c);
                        const m = new N0b(f, a, d, e),
                            n = a0b(l, b);
                        g.Mp.Cja = U4(({
                            item: q,
                            measureRef: r
                        }) => {
                            const t = I4(() => L0b(q.Ae), [q.Ae]);
                            return J4(W0b, {
                                Ae: t,
                                Dva: m,
                                measureRef: r
                            })
                        });
                        const p = U4(({
                            context: q,
                            ap: r
                        }) => {
                            const t = I4(() => __c.D(n(q.container)), [q]);
                            C0b(r, [r, q.container.column.width]);
                            return J4(W0b, {
                                Ae: t,
                                Dva: m,
                                ap: r
                            })
                        });
                        k.OEa = ({
                                context: q,
                                ap: r
                            }) =>
                            ({
                                type: "react",
                                node: J4(p, {
                                    context: q,
                                    ap: r
                                })
                            });
                        h && (h.dEa = B0b(() => __webpack_require__.me(365475).then(() => __c.T_b).then(({
                            E9a: q
                        }) => ({
                            default: q()
                        }))));
                        return {
                            Dva: m
                        }
                    }
                };
            }).call(self, self._7ccc7343da2ae983607b3819c7bc1f93);
        }

    }
])
//# sourceMappingURL=sourcemaps/8ababb01cc1a9132.js.map