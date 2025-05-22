(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [26489], {

        /***/
        59534: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(813110);
            self._7ccc7343da2ae983607b3819c7bc1f93 = self._7ccc7343da2ae983607b3819c7bc1f93 || {};
            (function(__c) {
                var BIb = function(a) {
                        var b = ["rgb(255, 255, 255)", "rgb(13, 18, 22)"];
                        try {
                            const c = __c.mt(a),
                                d = c instanceof __c.nt ? c.Ap() : c;
                            return __c.bs(b, e => {
                                e = __c.mt(e);
                                e = e instanceof __c.nt ? __c.WH(e, d) : e;
                                return Math.abs(__c.Bt(e, d))
                            })
                        } catch (c) {
                            if (c instanceof Error && c.message === `unrecognized color: ${b[0]}`) return b[0];
                            throw c;
                        }
                    },
                    CIb = function(a) {
                        return a.trim().split(/\s+/, 2).map(b => __c.Is(b)[0]).join("")
                    },
                    FIb = function(a = "") {
                        a = DIb(a);
                        a = Math.floor(a() * EIb.length);
                        return EIb[a]
                    },
                    GIb = __webpack_require__(875604),
                    HIb =
                    GIb.memo,
                    IIb = GIb.useId;
                var DIb = __webpack_require__(503216);
                var JIb = __webpack_require__(443763),
                    GY = JIb.jsx,
                    KIb = JIb.jsxs;
                var LIb = __webpack_require__,
                    MIb = LIb(993864),
                    HY = LIb.n_x(MIb)();
                __c.NIb = {
                    xxsmall: 2,
                    xsmall: 3,
                    small: 4,
                    medium: 5,
                    large: 6,
                    xlarge: 8,
                    xxlarge: 10,
                    xxxlarge: 20
                };
                var EIb = ["rgb(0, 126, 182)", "rgb(248, 72, 86)", "rgb(251, 190, 40)", "rgb(68, 133, 25)", "rgb(125, 42, 232)"].map(a => {
                    try {
                        return __c.ot(__c.ht(a))
                    } catch (b) {
                        return "#8e8e8e"
                    }
                });
                var OIb = HIb(a => {
                    const {
                        name: b,
                        borderColor: c,
                        backgroundColor: d,
                        dR: e,
                        role: f,
                        ariaLabel: g,
                        className: h,
                        style: k,
                        shape: l = "circle",
                        ...m
                    } = a;
                    if (d) {
                        a = __c.mt(d);
                        var n = a instanceof __c.nt ? __c.pt(a) : __c.ot(a)
                    } else n = e ? FIb(e) : "#8e8e8e";
                    var p = IIb();
                    switch (l) {
                        case "circle":
                            a = GY("defs", {
                                children: GY("clipPath", {
                                    id: p,
                                    children: GY("circle", {
                                        id: `${p}-path`,
                                        cx: "50%",
                                        cy: "50%",
                                        r: "50%"
                                    })
                                })
                            });
                            break;
                        case "square":
                            a = GY("defs", {
                                children: GY("clipPath", {
                                    id: p,
                                    children: GY("rect", {
                                        id: `${p}-path`,
                                        width: "100%",
                                        height: "100%"
                                    })
                                })
                            });
                            break;
                        default:
                            throw new __c.E(l);
                    }
                    switch (l) {
                        case "circle":
                            p = GY("circle", {
                                cx: "50%",
                                cy: "50%",
                                fill: n,
                                shapeRendering: "geometricPrecision",
                                clipPath: `url(#${p})`,
                                stroke: c,
                                className: HY("yCT70Q", {
                                    _2LVP_g: c
                                })
                            });
                            break;
                        case "square":
                            p = GY("rect", {
                                width: "100%",
                                height: "100%",
                                fill: n,
                                shapeRendering: "geometricPrecision",
                                clipPath: `url(#${p})`,
                                stroke: c,
                                className: HY("cUFFRA", {
                                    _2LVP_g: c
                                })
                            });
                            break;
                        default:
                            throw new __c.E(l);
                    }
                    n = BIb(n);
                    return GY("span", {
                        role: f,
                        "aria-label": g,
                        className: HY("VaW8_A", {
                            cUFFRA: l === "square"
                        }),
                        style: {
                            "--pDK9Gw": n
                        },
                        ...m,
                        children: KIb("svg", {
                            className: h,
                            style: k,
                            children: [a, p, GY("text", {
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
                                children: CIb(b).toUpperCase()
                            })]
                        })
                    })
                });
                var PIb = __webpack_require__.p + "images/5c0e58707f218438bf0f73d47db2ce50.svg";
                var QIb = ({
                    borderColor: a,
                    RUa: b,
                    ariaLabel: c,
                    className: d,
                    style: e,
                    role: f,
                    ...g
                }) => GY("span", {
                    className: HY(d, {
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
                __c.RIb = ({
                    name: a,
                    m6a: b,
                    ariaLabel: c,
                    dR: d,
                    backgroundColor: e,
                    borderColor: f,
                    Cq: g,
                    className: h,
                    style: k,
                    shape: l = "circle",
                    ...m
                }) => {
                    h = HY("n8XGZg", "f4qJng fs-hide", h, {
                        P3N3Pw: l === "square"
                    });
                    b = b || "presentation";
                    return g ? GY(QIb, {
                        className: h,
                        style: k,
                        borderColor: f,
                        RUa: g,
                        ariaLabel: c,
                        role: b,
                        ...m
                    }) : a ? GY(OIb, {
                        className: h,
                        style: k,
                        borderColor: f,
                        name: a,
                        shape: l,
                        dR: d,
                        backgroundColor: e,
                        role: b,
                        ariaLabel: c,
                        ...m
                    }) : GY(QIb, {
                        className: h,
                        style: k,
                        borderColor: f,
                        RUa: PIb,
                        ariaLabel: c,
                        role: b,
                        ...m
                    })
                };
            }).call(self, self._7ccc7343da2ae983607b3819c7bc1f93);
        }

    }
])
//# sourceMappingURL=sourcemaps/f6d9786b593e2863.js.map