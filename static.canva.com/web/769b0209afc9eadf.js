(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [60205], {

        /***/
        994944: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(813110);
            __web_req__(981587);
            self._c68b74ff4d61aaeea4f241f0854f5b1a = self._c68b74ff4d61aaeea4f241f0854f5b1a || {};
            (function(__c) {
                var E = __c.E;
                var P = __c.P;
                var dCb = function(a, b) {
                        class c {
                            static A(d) {
                                P(d, {
                                    vd: C5,
                                    y4: C5
                                })
                            }
                            get vd() {
                                switch (this.y4) {
                                    case "date":
                                        return new ZBb(this.Zj, b.language || "en-AU");
                                    case "select":
                                        return new $Bb(this.Zj);
                                    case "mention":
                                        return new aCb(this.Zj);
                                    case "embed":
                                        return new bCb(this.Zj);
                                    case "plain_number":
                                    case "currency":
                                    case "percentage":
                                    case void 0:
                                        break;
                                    default:
                                        throw new E(this.y4);
                                }
                            }
                            get y4() {
                                var d;
                                return (d = this.Zj.al) === null || d === void 0 ? void 0 : d.type
                            }
                            constructor(d) {
                                this.context = d;
                                this.Zj = (c.A(this), void 0);
                                this.Zj = __c.C(a.yq(d.sheet,
                                    d.ea, d.column))
                            }
                        }
                        return cCb(d => (new c(d)).vd)
                    },
                    eCb = function(a) {
                        var b = ["rgb(255, 255, 255)", "rgb(13, 18, 22)"];
                        try {
                            const c = __c.BD(a),
                                d = c instanceof __c.CD ? c.ez() : c;
                            return __c.Aw(b, e => {
                                e = __c.BD(e);
                                e = e instanceof __c.CD ? __c.AL(e, d) : e;
                                return Math.abs(__c.DL(e, d))
                            })
                        } catch (c) {
                            if (c instanceof Error && c.message === `unrecognized color: ${b[0]}`) return b[0];
                            throw c;
                        }
                    },
                    fCb = function(a) {
                        return a.trim().split(/\s+/, 2).map(b => __c.Nx(b)[0]).join("")
                    },
                    iCb = function(a = "") {
                        a = gCb(a);
                        a = Math.floor(a() * hCb.length);
                        return hCb[a]
                    },
                    kCb = function(a, b = "medium") {
                        if (a !== null && a !== void 0 && a.length) {
                            var c = window.devicePixelRatio || 1,
                                d = (typeof b === "number" ? b : jCb(b)) * c;
                            return [...a].sort((e, f) => {
                                e = e.width;
                                f = f.width;
                                return e > d && f < d ? -1 : e < d && f > d ? 1 : Math.abs(e - d) - Math.abs(f - d)
                            })[0].url
                        }
                    },
                    mCb = function() {
                        const a = D5(() => new Map, []);
                        return {
                            ULa: b => {
                                if (a.has(b)) return __c.C(a.get(b));
                                const c = lCb();
                                a.set(b, c);
                                return c
                            }
                        }
                    },
                    nCb = function(a, b) {
                        return D5(() => {
                                const c = new Map;
                                return d => {
                                    if (c.has(d)) return __c.C(c.get(d));
                                    const e = a(d);
                                    c.set(d, e);
                                    return e
                                }
                            },
                            b)
                    },
                    uCb = function({
                        children: a,
                        keyFrame: b,
                        mza: c,
                        ariaLive: d,
                        tra: e = !1,
                        JEa: f,
                        m6: g,
                        bJa: h,
                        Q2a: k,
                        Zla: l,
                        Fna: m,
                        O2a: n,
                        NWa: p
                    }) {
                        const {
                            ULa: q
                        } = mCb(), {
                            bLa: r,
                            pTa: t
                        } = oCb(b, a), v = nCb(u => () => {
                            (e === !1 || typeof e === "function" && !e(u)) && t(u)
                        }, [t, e]);
                        return E5("div", {
                            className: F5(g, "_9GxJfQ", {
                                KwB0XQ: l === "hidden",
                                WV1Mmw: c === "fill-height",
                                _2uSJxw: c === "flex-grow"
                            }),
                            children: E5("div", {
                                className: F5("m2VaAA", h),
                                "aria-live": d,
                                style: k,
                                role: "region",
                                children: [...r.map(({
                                    key: u,
                                    element: x
                                }) => E5(pCb, { in: u === b,
                                    timeout: f,
                                    classNames: p,
                                    mountOnEnter: !0,
                                    unmountOnExit: !e,
                                    nodeRef: q(u),
                                    onExited: v(u),
                                    children: y => E5(qCb.Provider, {
                                        value: y,
                                        children: E5("div", {
                                            className: F5("KxXR9g", n, {
                                                KwB0XQ: m === "hidden"
                                            }),
                                            ref: q(u),
                                            "aria-hidden": y === rCb || y === sCb || y === tCb,
                                            children: u === b ? a : x
                                        })
                                    })
                                }, u)), r.every(u => u.key !== b) && E5(pCb, { in: !1,
                                    timeout: f,
                                    classNames: p,
                                    mountOnEnter: !0,
                                    unmountOnExit: !e,
                                    nodeRef: q(b),
                                    onExited: e ? void 0 : v(b),
                                    children: u => E5(qCb.Provider, {
                                        value: u,
                                        children: E5("div", {
                                            className: F5("KxXR9g", n),
                                            ref: q(b),
                                            "aria-hidden": u === rCb || u === sCb || u === tCb,
                                            children: a
                                        })
                                    })
                                }, b)]
                            })
                        })
                    },
                    oCb = function(a, b) {
                        const [c, d] = vCb(() => [{
                            key: a,
                            element: b
                        }]);
                        wCb(() => {
                            d(f => f.every(g => g.key !== a) ? f.concat({
                                key: a,
                                element: b
                            }) : f.map(g => g.key === a ? {
                                key: a,
                                element: b
                            } : g))
                        }, [a, b]);
                        const e = G5(f => {
                            d(g => g.filter(h => h.key !== f))
                        }, []);
                        return {
                            bLa: c,
                            pTa: e
                        }
                    },
                    xCb = function(a) {
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
                    BCb = function(a, b) {
                        switch (a.type) {
                            case "mention":
                                return E5(yCb, {
                                    up: a.user ? b.NO(a.user) : void 0,
                                    text: a.text,
                                    backgroundColor: a.user ? b.rLa(a.user).background : void 0
                                });
                            case "embed":
                                const c = !a.url;
                                a = b.Ina.kO.get(a.url);
                                return E5(zCb, {
                                    icon: a,
                                    vOa: c
                                });
                            case "date":
                                return a.text ? void 0 : E5(ACb, {});
                            case "select":
                                break;
                            default:
                                throw new E(a);
                        }
                    },
                    DCb = function(a, b) {
                        switch (a.type) {
                            case "mention":
                            case "embed":
                            case "date":
                                break;
                            case "select":
                                return E5(CCb, {
                                    selected: !!b.mxa
                                });
                            default:
                                throw new E(a);
                        }
                    },
                    H5 = function(a) {
                        return (/Mac/.test(navigator.platform) ? a.metaKey : a.ctrlKey) ? !0 : a instanceof KeyboardEvent ? a.key ===
                            "Meta" || ["91", "224"].includes(a.code) : !1
                    },
                    ECb = function(a) {
                        __c.w(!0, "chunkLength must be positive");
                        const b = [];
                        for (let c = 0; c < a.length; c += 50) b.push(a.slice(c, c + 50));
                        return b
                    },
                    FCb = function(a, b, c) {
                        if (c) {
                            var d = kCb(c.images, "medium"),
                                e = kCb(c.images, "xxxlarge");
                            if (d && e) {
                                c = new Image;
                                c.src = d;
                                var f = new Image;
                                f.src = e;
                                f.onload = I5(() => a.lT.set(b, e));
                                f.onerror = I5(() => a.lT.set(b, void 0));
                                !f.complete && c.complete ? a.lT.set(b, d) : c.src = ""
                            }
                        } else a.lT.set(b, void 0)
                    },
                    HCb = function(a, {
                        url: b,
                        id: c,
                        extension: d
                    }) {
                        if (!a.promises.has(b)) {
                            const e =
                                new Promise(f => {
                                    a.Og ? a.Og.n5a(new GCb({
                                        id: c,
                                        extension: d
                                    })).then(({
                                        document: g
                                    }) => {
                                        const h = g.uj.content.title;
                                        h ? (J5(() => a.eAa.set(b, {
                                            status: 1,
                                            title: h
                                        })), f(h)) : f(void 0)
                                    }).catch(() => {
                                        J5(() => a.eAa.set(b, {
                                            status: 2
                                        }));
                                        f(void 0)
                                    }) : f(void 0)
                                });
                            a.promises.set(b, e)
                        }
                        return a.promises.get(b)
                    },
                    K5 = __webpack_require__(519427),
                    I5 = K5.action,
                    ICb = K5.comparer,
                    C5 = K5.computed,
                    JCb = K5.observable,
                    L5 = K5.ObservableMap,
                    J5 = K5.runInAction;
                var cCb = __webpack_require__(635872).Om;
                var M5 = __webpack_require__(875604),
                    KCb = M5.createContext,
                    lCb = M5.createRef,
                    LCb = M5.lazy,
                    N5 = M5.memo,
                    G5 = M5.useCallback,
                    wCb = M5.useEffect,
                    MCb = M5.useId,
                    NCb = M5.useLayoutEffect,
                    D5 = M5.useMemo,
                    vCb = M5.useState;
                var gCb = __webpack_require__(503216);
                var OCb = __webpack_require__(443763),
                    E5 = OCb.jsx,
                    O5 = OCb.jsxs;
                var PCb = __webpack_require__,
                    QCb = PCb(993864),
                    F5 = PCb.n_x(QCb)();
                var pCb = __webpack_require__(460876).Z;
                var P5 = __webpack_require__(223826),
                    tCb = P5.Wj,
                    rCb = P5.Ix,
                    sCb = P5.$r;
                var Q5 = __webpack_require__(446474).Pi;
                var RCb = class {
                        static A(a) {
                            P(a, {
                                text: C5,
                                user: C5,
                                brand: C5
                            })
                        }
                        get text() {
                            return this.vd.text
                        }
                        get user() {
                            return this.vd.user
                        }
                        get brand() {
                            return this.vd.brand
                        }
                        constructor(a) {
                            this.vd = a;
                            this.type = (RCb.A(this), "mention")
                        }
                    },
                    SCb = class {
                        static A(a) {
                            P(a, {
                                text: C5,
                                url: C5
                            })
                        }
                        get text() {
                            return this.vd.text
                        }
                        get url() {
                            return this.vd.url
                        }
                        constructor(a) {
                            this.vd = a;
                            this.type = (SCb.A(this), "embed")
                        }
                    },
                    TCb = class {
                        static A(a) {
                            P(a, {
                                text: C5,
                                language: C5,
                                style: C5,
                                date: C5
                            })
                        }
                        get text() {
                            return this.vd.text
                        }
                        get language() {
                            return this.vd.language
                        }
                        get style() {
                            return this.vd.style
                        }
                        get date() {
                            return this.vd.date
                        }
                        constructor(a) {
                            this.vd =
                                a;
                            this.type = (TCb.A(this), "date")
                        }
                    },
                    UCb = class {
                        static A(a) {
                            P(a, {
                                text: C5,
                                options: C5,
                                xd: C5,
                                wI: C5
                            })
                        }
                        get text() {
                            return this.vd.text
                        }
                        get options() {
                            return this.vd.options.map(a => a)
                        }
                        get xd() {
                            return this.vd.xd
                        }
                        get wI() {
                            var a;
                            return (a = this.vd.options.first(b => b.id === this.vd.xd)) === null || a === void 0 ? void 0 : a.fill.color
                        }
                        constructor(a) {
                            this.vd = a;
                            this.type = (UCb.A(this), "select")
                        }
                    },
                    VCb = cCb(a => {
                        switch (a.type) {
                            case "mention":
                                return new RCb(a);
                            case "embed":
                                return new SCb(a);
                            case "date":
                                return new TCb(a);
                            case "select":
                                return new UCb(a);
                            default:
                                throw new E(a);
                        }
                    });
                var ZBb = class {
                        static A(a) {
                            P(a, {
                                style: C5,
                                date: C5,
                                text: C5
                            })
                        }
                        get style() {
                            return 2
                        }
                        get date() {
                            var a;
                            (a = this.Mk.Qh.type === 2 ? this.Mk.Qh.date : void 0) || (a = new Date, a = __c.JA(a), a = {
                                year: a.getFullYear(),
                                month: a.getMonth() + 1,
                                day: a.getDate(),
                                KMa: a.getHours(),
                                IQa: a.getMinutes()
                            });
                            return a
                        }
                        get text() {
                            return this.Mk.eu
                        }
                        constructor(a, b) {
                            this.Mk = a;
                            this.language = b;
                            this.type = (ZBb.A(this), "date")
                        }
                    },
                    WCb = class {
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
                    $Bb = class {
                        static A(a) {
                            P(a, {
                                options: C5,
                                xd: C5,
                                wI: C5,
                                text: C5,
                                epa: C5({
                                    equals: ICb.shallow
                                })
                            })
                        }
                        get options() {
                            return this.epa.map((a, b) => new WCb(a, b))
                        }
                        get xd() {
                            var a;
                            return (a = this.options.find(b => b.label === this.text)) === null || a === void 0 ? void 0 : a.id
                        }
                        get wI() {
                            var a;
                            return (a = this.options.find(b => b.id === this.xd)) === null || a === void 0 ? void 0 : a.fill.color
                        }
                        get text() {
                            return this.Mk.eu
                        }
                        get epa() {
                            var a, b;
                            __c.B(((a = this.Mk.al) === null || a === void 0 ? void 0 : a.type) === "select");
                            return (b = this.Mk.al) === null || b === void 0 ?
                                void 0 : b.options
                        }
                        constructor(a) {
                            this.Mk = a;
                            this.type = ($Bb.A(this), "select")
                        }
                    },
                    aCb = class {
                        static A(a) {
                            P(a, {
                                lE: C5
                            })
                        }
                        get text() {
                            return this.lE ? this.lE.text : ""
                        }
                        get user() {
                            return this.lE ? this.lE.user : ""
                        }
                        get brand() {
                            return this.lE ? this.lE.brand : ""
                        }
                        get lE() {
                            if (this.Mk.Qh.type !== 9) return __c.B(this.Mk.Qh.type === 7), this.Mk.Qh ? this.Mk.Qh.value[0] : void 0
                        }
                        constructor(a) {
                            this.Mk = a;
                            this.type = (aCb.A(this), "mention")
                        }
                    },
                    bCb = class {
                        static A(a) {
                            P(a, {
                                zO: C5
                            })
                        }
                        get text() {
                            return this.zO ? this.zO.embed.text : ""
                        }
                        get url() {
                            return this.zO ?
                                this.zO.embed.url : ""
                        }
                        get zO() {
                            if (this.Mk.Qh.type !== 9) return __c.B(this.Mk.Qh.type === 8), this.Mk.Qh ? this.Mk.Qh.value[0] : void 0
                        }
                        constructor(a) {
                            this.Mk = a;
                            this.type = (bCb.A(this), "embed")
                        }
                    };
                var XCb = class {
                    V7(a) {
                        this.X4.V7(a)
                    }
                    fS(a, b) {
                        this.X4.fS(a, b)
                    }
                    NO(a) {
                        return this.X4.NO(a)
                    }
                    T7(a) {
                        this.Ina.T7(a)
                    }
                    constructor(a, b, c, d) {
                        this.X4 = a;
                        this.Ina = b;
                        this.Pa = c;
                        this.gs = d;
                        this.Ega = new __c.mbb;
                        this.rLa = e => __c.qwa(this.Ega, e)
                    }
                };
                var YCb = {
                    xxsmall: 2,
                    xsmall: 3,
                    small: 4,
                    medium: 5,
                    large: 6,
                    xlarge: 8,
                    xxlarge: 10,
                    xxxlarge: 20
                };
                var hCb = ["rgb(0, 126, 182)", "rgb(248, 72, 86)", "rgb(251, 190, 40)", "rgb(68, 133, 25)", "rgb(125, 42, 232)"].map(a => {
                        try {
                            return __c.rD(__c.wD(a))
                        } catch (b) {
                            return "#8e8e8e"
                        }
                    }),
                    jCb = a => a.endsWith("rem") ? parseFloat(a) * 10 : __c.Ik * YCb[a];
                var ZCb = N5(a => {
                    const {
                        name: b,
                        borderColor: c,
                        backgroundColor: d,
                        mka: e,
                        role: f,
                        ariaLabel: g,
                        className: h,
                        style: k,
                        shape: l = "circle",
                        ...m
                    } = a;
                    if (d) {
                        a = __c.BD(d);
                        var n = a instanceof __c.CD ? __c.ED(a) : __c.rD(a)
                    } else n = e ? iCb(e) : "#8e8e8e";
                    var p = MCb();
                    switch (l) {
                        case "circle":
                            a = E5("defs", {
                                children: E5("clipPath", {
                                    id: p,
                                    children: E5("circle", {
                                        id: `${p}-path`,
                                        cx: "50%",
                                        cy: "50%",
                                        r: "50%"
                                    })
                                })
                            });
                            break;
                        case "square":
                            a = E5("defs", {
                                children: E5("clipPath", {
                                    id: p,
                                    children: E5("rect", {
                                        id: `${p}-path`,
                                        width: "100%",
                                        height: "100%"
                                    })
                                })
                            });
                            break;
                        default:
                            throw new E(l);
                    }
                    switch (l) {
                        case "circle":
                            p = E5("circle", {
                                cx: "50%",
                                cy: "50%",
                                fill: n,
                                shapeRendering: "geometricPrecision",
                                clipPath: `url(#${p})`,
                                stroke: c,
                                className: F5("yCT70Q", {
                                    _2LVP_g: c
                                })
                            });
                            break;
                        case "square":
                            p = E5("rect", {
                                width: "100%",
                                height: "100%",
                                fill: n,
                                shapeRendering: "geometricPrecision",
                                clipPath: `url(#${p})`,
                                stroke: c,
                                className: F5("cUFFRA", {
                                    _2LVP_g: c
                                })
                            });
                            break;
                        default:
                            throw new E(l);
                    }
                    n = eCb(n);
                    return E5("span", {
                        role: f,
                        "aria-label": g,
                        className: F5("VaW8_A", {
                            cUFFRA: l === "square"
                        }),
                        style: {
                            "--pDK9Gw": n
                        },
                        ...m,
                        children: O5("svg", {
                            className: h,
                            style: k,
                            children: [a, p, E5("text", {
                                x: "50%",
                                y: "50%",
                                "aria-hidden": "true",
                                textAnchor: "middle",
                                fill: n,
                                fontWeight: "500",
                                fontSize: "50%",
                                dominantBaseline: "central",
                                letterSpacing: "0.01rem",
                                dy: "-0.04em",
                                children: fCb(b).toUpperCase()
                            })]
                        })
                    })
                });
                var $Cb = __webpack_require__.p + "images/5c0e58707f218438bf0f73d47db2ce50.svg";
                var aDb = ({
                    borderColor: a,
                    Mva: b,
                    ariaLabel: c,
                    className: d,
                    style: e,
                    role: f,
                    ...g
                }) => E5("span", {
                    className: F5(d, {
                        JwH6AA: a,
                        QJpRHw: !a
                    }),
                    style: {
                        backgroundImage: `url(${b})`,
                        borderColor: a && `${a}`,
                        ...e
                    },
                    role: f,
                    "aria-label": f === "img" ? c : void 0,
                    ...g
                });
                var bDb = ({
                    name: a,
                    $_a: b,
                    ariaLabel: c,
                    mka: d,
                    backgroundColor: e,
                    borderColor: f,
                    up: g,
                    className: h,
                    style: k,
                    shape: l = "circle",
                    ...m
                }) => {
                    h = F5("n8XGZg", "f4qJng fs-hide", h, {
                        P3N3Pw: l === "square"
                    });
                    b = b || "presentation";
                    return g ? E5(aDb, {
                        className: h,
                        style: k,
                        borderColor: f,
                        Mva: g,
                        ariaLabel: c,
                        role: b,
                        ...m
                    }) : a ? E5(ZCb, {
                        className: h,
                        style: k,
                        borderColor: f,
                        name: a,
                        shape: l,
                        mka: d,
                        backgroundColor: e,
                        role: b,
                        ariaLabel: c,
                        ...m
                    }) : E5(aDb, {
                        className: h,
                        style: k,
                        borderColor: f,
                        Mva: $Cb,
                        ariaLabel: c,
                        role: b,
                        ...m
                    })
                };
                var cDb = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M8.116 12.366a1.25 1.25 0 0 1 1.768 0l5.586 5.586a.75.75 0 0 0 1.06 0l5.586-5.586a1.25 1.25 0 0 1 1.768 1.768l-5.586 5.586a3.25 3.25 0 0 1-4.596 0l-5.586-5.586a1.25 1.25 0 0 1 0-1.768" clip-rule="evenodd"/></svg>';
                var dDb = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill="currentColor" d="M10.964 5.972 8.177 8.759a.25.25 0 0 1-.354 0L5.036 5.972a.75.75 0 1 0-1.06 1.06L6.762 9.82a1.75 1.75 0 0 0 2.475 0l2.787-2.788a.75.75 0 1 0-1.06-1.06"/></svg>';
                var eDb = '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-width="1.25" d="M3.17 5 5.3 7.12a1 1 0 0 0 1.42 0L8.83 5"/></svg>';
                var fDb = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fill="currentColor" d="m16.384 9.225-4.207 4.207a.25.25 0 0 1-.353 0L7.623 9.224a.75.75 0 0 0-1.059.002.75.75 0 0 0-.002 1.059l4.201 4.21c.681.68 1.787.678 2.47-.005l4.207-4.207a.75.75 0 0 0 .002-1.059.75.75 0 0 0-1.058.002"/></svg>';
                var gDb = __c.OS({
                    Mp: eDb,
                    small: dDb,
                    medium: fDb,
                    fB: cDb
                });
                var qCb = KCb(void 0);
                var hDb = Number.parseInt("300ms", 10),
                    iDb = {
                        enter: "_QukmA",
                        enterActive: "_5_06KQ",
                        enterDone: void 0,
                        exitActive: "a952jg",
                        exitDone: "orZOEA"
                    },
                    jDb = N5(function({
                        UD: a = !1,
                        children: b,
                        keyFrame: c,
                        mza: d,
                        Zla: e = "hidden",
                        Fna: f = "hidden",
                        ariaLive: g,
                        tra: h,
                        P5a: k = "none"
                    }) {
                        a = __c.mb().Kc && !a;
                        return uCb({
                            children: b,
                            keyFrame: c,
                            mza: d,
                            ariaLive: g,
                            Zla: e,
                            Fna: f,
                            tra: h,
                            JEa: a ? hDb : 0,
                            bJa: F5({
                                _1niDPQ: a,
                                Q6kGbg: k === "none",
                                _9j7ODw: k === "layout"
                            }),
                            NWa: iDb
                        })
                    });
                var kDb = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.25 3.5a.75.75 0 0 0-1.5 0V5H7a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4h-.75V3.5a.75.75 0 0 0-1.5 0V5h-5.5V3.5Zm5.5 4v-1h-5.5v1a.75.75 0 0 1-1.5 0v-1H7A2.5 2.5 0 0 0 4.5 9v1h15V9A2.5 2.5 0 0 0 17 6.5h-.75v1a.75.75 0 0 1-1.5 0Zm4.75 4h-15V17A2.5 2.5 0 0 0 7 19.5h10a2.5 2.5 0 0 0 2.5-2.5v-5.5Z" fill="currentColor"/></svg>';
                var lDb = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-1.288-.244-2.52-.687-3.65v-.1h-.04A10.003 10.003 0 0 0 12 2C6.477 2 2 6.477 2 12Zm12.653-8.078A8.526 8.526 0 0 1 19.63 8.25h-3.457c-.317-1.74-.848-3.236-1.52-4.328ZM20.2 9.75h-3.813c.075.723.114 1.476.114 2.25s-.04 1.527-.114 2.25h3.813A8.51 8.51 0 0 0 20.5 12a8.51 8.51 0 0 0-.301-2.25Zm-.569 6h-3.457c-.317 1.74-.848 3.236-1.52 4.328a8.526 8.526 0 0 0 4.977-4.328Zm-4.755-1.5a20.109 20.109 0 0 0 0-4.5h-5.75a20.116 20.116 0 0 0 0 4.5h5.75Zm-5.519 1.5h5.288C14.08 18.593 12.953 20.5 12 20.5c-.953 0-2.081-1.907-2.644-4.75Zm-1.529 0c.317 1.74.848 3.236 1.52 4.328A8.526 8.526 0 0 1 4.37 15.75h3.457Zm-.213-1.5H3.801A8.51 8.51 0 0 1 3.5 12c0-.779.105-1.533.301-2.25h3.813A21.9 21.9 0 0 0 7.5 12c0 .774.04 1.527.114 2.25ZM12 3.5c.953 0 2.081 1.907 2.644 4.75H9.356C9.92 5.407 11.047 3.5 12 3.5ZM4.37 8.25h3.457c.317-1.74.848-3.236 1.52-4.328A8.525 8.525 0 0 0 4.37 8.25Z" fill="currentColor"/></svg>';
                var mDb = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M8.64 16.5a4.87 4.87 0 0 0 4.11 2.25h4.5a4.88 4.88 0 0 0 0-9.75h-4.5a4.88 4.88 0 0 0-4.5 3h1.7c.6-.9 1.63-1.5 2.8-1.5h4.5a3.38 3.38 0 0 1 0 6.75h-4.5c-.8 0-1.54-.28-2.12-.75H8.64zm7.1-9a4.87 4.87 0 0 0-4.12-2.25h-4.5a4.87 4.87 0 1 0 0 9.75h4.5a4.88 4.88 0 0 0 4.5-3h-1.69c-.6.9-1.63 1.5-2.8 1.5h-4.5a3.38 3.38 0 0 1 0-6.75h4.5c.8 0 1.54.28 2.12.75h1.98z"/></svg>';
                var nDb = '<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.374 7.572A3.5 3.5 0 1 0 5.6 7.548a5.365 5.365 0 0 0-2.928 3.968 1.5 1.5 0 0 0 .592 1.441 7.9 7.9 0 0 0 4.7 1.543 7.9 7.9 0 0 0 4.698-1.542 1.5 1.5 0 0 0 .592-1.442 5.364 5.364 0 0 0-2.88-3.944ZM10 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-5.847 6.75a3.858 3.858 0 0 1 7.62 0A6.4 6.4 0 0 1 7.963 13a6.4 6.4 0 0 1-3.81-1.25Z" fill="currentColor"/></svg>';
                var oDb = N5(a => {
                        const b = a.link,
                            c = a.className,
                            d = a.ariaLabel,
                            e = a.wI,
                            f = a.BIa,
                            g = a.yDa,
                            h = a.MDa,
                            k = a.measureRef,
                            l = a.onPointerDown,
                            m = a.onMouseEnter,
                            n = a.onMouseLeave,
                            p = F5({
                                EdewNw: !!g,
                                _6ZpPrw: !!h,
                                pzXyUA: a.text.length > 0
                            });
                        a = a.text.length > 0 ? a.text : "\ufeff";
                        return O5("span", {
                            className: F5(c, "FedJ0Q"),
                            "aria-label": d || a,
                            children: [E5("span", {
                                className: F5("_2Lr6pQ", p),
                                children: E5("span", {
                                    className: "Z_WvzQ",
                                    children: a
                                })
                            }), O5("span", {
                                className: F5("XemTdQ", p),
                                ref: k,
                                style: e ? {
                                    color: e
                                } : void 0,
                                onPointerDown: l,
                                onMouseEnter: m,
                                onMouseLeave: n,
                                children: [g, E5("span", {
                                    className: F5("U_QH_A", {
                                        C9XL8g: !f
                                    }),
                                    children: b ? E5("a", {
                                        className: "vgTP5Q",
                                        ...b,
                                        children: a
                                    }) : a
                                }), h]
                            })]
                        })
                    }),
                    yCb = N5(a => {
                        const b = a.backgroundColor,
                            c = a.up;
                        a = a.text;
                        const d = {
                            width: "0.9em",
                            height: "0.9em"
                        };
                        return E5(jDb, {
                            keyFrame: c ? "show" : "hide",
                            children: a ? E5(bDb, {
                                name: a,
                                style: d,
                                backgroundColor: b,
                                up: c,
                                borderColor: c ? void 0 : b
                            }) : E5("span", {
                                "aria-hidden": "true",
                                className: "_tFJqA",
                                dangerouslySetInnerHTML: {
                                    __html: nDb
                                }
                            })
                        })
                    }),
                    zCb = N5(a => {
                        const b = a.icon;
                        a = a.vOa;
                        return E5(jDb, {
                            keyFrame: b ?
                                "favicon" : "placeholder",
                            children: b ? E5("span", {
                                className: "_tFJqA",
                                children: E5("img", {
                                    src: b,
                                    className: "qpbYdw"
                                })
                            }) : E5("span", {
                                "aria-hidden": "true",
                                className: "_tFJqA",
                                dangerouslySetInnerHTML: {
                                    __html: a ? mDb : lDb
                                }
                            })
                        })
                    }),
                    ACb = N5(() => E5("span", {
                        "aria-hidden": "true",
                        className: "_tFJqA",
                        dangerouslySetInnerHTML: {
                            __html: kDb
                        }
                    })),
                    CCb = N5(({
                        selected: a
                    }) => E5("div", {
                        className: F5("whph4A", {
                            zgzjww: a
                        }),
                        children: E5(gDb, {
                            size: "medium",
                            style: {
                                width: "0.9em",
                                height: "0.9em"
                            },
                            className: "_tFJqA"
                        })
                    })),
                    pDb = Q5(a => {
                        const {
                            vd: b,
                            mxa: c,
                            oba: d,
                            mode: e = "viewable",
                            measureRef: f,
                            yl: g,
                            onPointerDown: h
                        } = a;
                        a = b.text || "\u00a0".repeat(16);
                        const k = b.type === "embed" ? d.Pa(b.url) : void 0,
                            [l, m] = vCb(!1),
                            n = G5(t => m(H5(t)), [m]),
                            p = G5(t => m(!H5(t)), [m]),
                            q = G5(t => {
                                m(H5(t.nativeEvent));
                                document.addEventListener("keydown", n);
                                document.addEventListener("keyup", p)
                            }, [m, n, p]),
                            r = G5(() => {
                                m(!1);
                                document.removeEventListener("keydown", n);
                                document.removeEventListener("keyup", p)
                            }, [m, n, p]);
                        wCb(() => {
                            J5(() => {
                                switch (b.type) {
                                    case "mention":
                                        b.user && d.V7(b.user);
                                        break;
                                    case "embed":
                                        d.T7(b.url)
                                }
                            })
                        }, [b, d]);
                        NCb(() => {
                            g === null || g === void 0 || g()
                        }, [b.type, a, g]);
                        return E5(oDb, {
                            text: a,
                            link: e === "viewable" || l ? k : void 0,
                            BIa: b.text.length === 0,
                            ariaLabel: b.text || "",
                            className: xCb(b),
                            wI: b.wI,
                            yDa: BCb(b, d),
                            MDa: DCb(b, {
                                mxa: c
                            }),
                            measureRef: f,
                            onPointerDown: h,
                            onMouseEnter: b.type === "embed" && e === "editable" ? q : void 0,
                            onMouseLeave: b.type === "embed" && e === "editable" ? r : void 0
                        })
                    });
                var qDb = __c.L(() => ({
                    o6a: __c.KO(11),
                    mode: __c.I("A?", 1, "BY_USER_IDS"),
                    IXa: __c.JO(1)
                }));
                var rDb = class {
                        static A(a) {
                            P(a, {
                                fH: JCb.shallow,
                                uoa: I5
                            })
                        }
                        NO(a) {
                            return this.ika.NO(a)
                        }
                        V7(a) {
                            this.Dga.has(a) || this.fH.has(a) || (this.fH.add(a), this.iIa())
                        }
                        fS(a, b) {
                            this.Dga.has(a) || (this.Dga.set(a, b), this.fH.delete(a), FCb(this.ika, a, b))
                        }
                        async uoa() {
                            if (this.fH.size !== 0) {
                                var a = [...this.fH.values()];
                                this.fH.clear();
                                if (this.kka) {
                                    var b = await this.kka;
                                    await Promise.all(ECb(a).map(async c => {
                                        const d = new qDb({
                                                IXa: c
                                            }),
                                            {
                                                r0a: e
                                            } = await b.X4a(d);
                                        J5(() => c.forEach(f => this.fS(f, e.get(f))))
                                    }))
                                } else a.forEach(c => this.fS(c))
                            }
                        }
                        constructor(a,
                            b) {
                            this.kka = a;
                            this.Dga = (rDb.A(this), new L5);
                            this.fH = new Set;
                            this.ika = new sDb;
                            this.iIa = __c.Fc(() => this.uoa(), 200);
                            J5(() => {
                                b === null || b === void 0 || b.forEach((c, d) => this.fS(d, c))
                            })
                        }
                    },
                    sDb = class {
                        NO(a) {
                            return this.lT.get(a)
                        }
                        constructor() {
                            this.lT = new L5
                        }
                    };
                var GCb = __c.L(() => ({
                    id: __c.Y("id", 1),
                    extension: __c.Z("extension", 3),
                    fxa: __c.FO("revision", 5),
                    version: __c.FO("version", 2),
                    W5a: __c.FO("imagesetsLimit", 6)
                }));
                var tDb = class {
                    static A(a) {
                        P(a, {
                            jKa: I5
                        })
                    }
                    async jKa(a) {
                        if (this.Og) {
                            var b = (new URL(a)).pathname; {
                                const c = /design\/(D[a-zA-Z0-9_-]{10})\/?([a-zA-Z0-9_-]+)?/g.exec(b);
                                c == null || c.length < 2 ? b = void 0 : (b = c[2], (new Set(["edit", "remix", "view", "watch"])).has(c[2]) && (b = void 0), b = {
                                    id: c[1],
                                    extension: b
                                })
                            }
                            if (b) return await HCb(this, {
                                url: a,
                                ...b
                            })
                        }
                    }
                    constructor(a) {
                        this.Og = a;
                        this.eAa = (tDb.A(this), new L5);
                        this.promises = new Map
                    }
                };
                var uDb = class {
                    static A(a) {
                        P(a, {
                            kO: JCb.shallow
                        })
                    }
                    async T7(a) {
                        const b = new Image;
                        let c;
                        try {
                            var d;
                            const e = await ((d = this.gs) === null || d === void 0 ? void 0 : d.pU(a));
                            c = e === null || e === void 0 ? void 0 : e.iKa
                        } catch (e) {}
                        c ? (b.src = c, b.onload = I5(() => this.kO.set(a, c)), b.onerror = I5(() => this.kO.set(a, void 0))) : J5(() => this.kO.set(a, void 0))
                    }
                    constructor(a) {
                        this.gs = a;
                        this.kO = (uDb.A(this), new Map)
                    }
                };
                __c.Msa = {
                    FNa: function(a) {
                        const b = a.document,
                            c = a.Og,
                            d = a.Pa,
                            e = a.gs;
                        var f = a.jka;
                        const g = a.qe,
                            h = a.pi,
                            k = a.Oy,
                            l = a.E2;
                        a = a.i6a;
                        f = new rDb(a === null || a === void 0 ? void 0 : a(), f);
                        a = new uDb(e);
                        new tDb(c);
                        const m = new XCb(f, a, d, e),
                            n = dCb(l, b);
                        g.fm.R3 = Q5(({
                            item: q,
                            measureRef: r
                        }) => {
                            const t = D5(() => VCb(q.vd), [q.vd]);
                            return E5(pDb, {
                                vd: t,
                                oba: m,
                                measureRef: r
                            })
                        });
                        const p = Q5(({
                            context: q,
                            yl: r
                        }) => {
                            const t = D5(() => __c.C(n(q.container)), [q]);
                            NCb(r, [r, q.container.column.width]);
                            return E5(pDb, {
                                vd: t,
                                oba: m,
                                yl: r
                            })
                        });
                        k.Oia = ({
                                context: q,
                                yl: r
                            }) =>
                            ({
                                type: "react",
                                node: E5(p, {
                                    context: q,
                                    yl: r
                                })
                            });
                        h && (h.kia = LCb(() => __webpack_require__.me(365475).then(() => __c.YBb).then(({
                            AHa: q
                        }) => ({
                            default: q()
                        }))));
                        return {
                            oba: m
                        }
                    }
                };
            }).call(self, self._c68b74ff4d61aaeea4f241f0854f5b1a);
        }

    }
])
//# sourceMappingURL=sourcemaps/769b0209afc9eadf.js.map