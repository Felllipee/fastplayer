(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [49222], {

        /***/
        78999: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(813110);
            __web_req__(841629);
            self._7ccc7343da2ae983607b3819c7bc1f93 = self._7ccc7343da2ae983607b3819c7bc1f93 || {};
            (function(__c) {
                var E = __c.E;
                var C = __c.C;
                var Z2b = function(a, b, c, d) {
                        c = new Y2b(c, d);
                        C(a.count() === 1, "Only single widget root element is supported");
                        a = a.first();
                        C(a != null && a.type === "layout", `Unexpected widget root found: ${a===null||a===void 0?void 0:a.type}`);
                        c.iia(a, b)
                    },
                    a3b = function(a) {
                        return { ...__c.Pdb,
                            ...F5,
                            top: 0,
                            left: 0,
                            width: a.width,
                            height: a.height,
                            viewBox: {
                                top: 0,
                                left: 0,
                                width: a.cia.width,
                                height: a.cia.height
                            },
                            kb: a.kb.map($2b)
                        }
                    },
                    b3b = function(a) {
                        switch (a.dC) {
                            case 0:
                                var b = __c.wk.xc().attrs({
                                    "font-size": a.fontSize,
                                    leading: a.lineHeight ? a.lineHeight *
                                        1E3 : void 0,
                                    "text-align": a.textAlign || "start",
                                    "font-weight": a.fontWeight,
                                    "font-family": a.fontFamily,
                                    "font-kerning": "normal",
                                    "font-feature-liga": "on",
                                    "font-feature-clig": "on",
                                    "font-feature-calt": "on",
                                    direction: a.direction
                                });
                                a.color && b.$f("color", a.color);
                                b = b.qc(a.text.endsWith("\n") ? a.text : `${a.text}\n`).build();
                                var c;
                                return { ...__c.$K,
                                    ...G5,
                                    ...F5,
                                    Ka: (c = a.Ka) !== null && c !== void 0 ? c : 0,
                                    text: b,
                                    Jg: 2
                                };
                            case 1:
                                return b = a.text, { ...__c.$K,
                                    ...G5,
                                    ...F5,
                                    text: b,
                                    Jg: 2
                                };
                            default:
                                throw new E(a);
                        }
                    },
                    K5 = function({
                        content: a,
                        fill: b,
                        border: c,
                        X: d
                    }) {
                        b = { ...__c.Adb,
                            fill: H5(b),
                            border: I5(c),
                            X: J5(d)
                        };
                        switch (a.type) {
                            case "shape":
                                return { ...b,
                                    element: a3b(a)
                                };
                            case "text":
                                return { ...b,
                                    element: b3b(a)
                                };
                            case "layout":
                                return { ...b,
                                    element: c3b(a)
                                };
                            default:
                                throw new E(a);
                        }
                    },
                    c3b = function({
                        cells: a,
                        border: b,
                        fill: c,
                        X: d,
                        gridTemplateColumns: e,
                        gridTemplateRows: f,
                        columnGap: g,
                        rowGap: h
                    }) {
                        return { ...__c.Bdb,
                            ...G5,
                            ...F5,
                            I: G5.width,
                            W: G5.height,
                            fill: H5(c),
                            border: I5(b),
                            direction: 1,
                            X: J5(d),
                            cells: new Map(a.map(k => [k.id, K5(k)])),
                            behavior: {
                                rules: [{
                                    Kg: void 0,
                                    grid: {
                                        gridTemplateColumns: e,
                                        gridTemplateRows: f,
                                        columnGap: g !== null && g !== void 0 ? g : 0,
                                        rowGap: h !== null && h !== void 0 ? h : 0,
                                        ah: d3b(a)
                                    }
                                }]
                            },
                            Re: void 0
                        }
                    },
                    d3b = function(a) {
                        return new Map(a.map(b => [b.id, e3b(b)]))
                    },
                    e3b = function(a) {
                        const b = a.placement.padding;
                        return { ...__c.ACa,
                            ...a.placement,
                            alignSelf: "center",
                            padding: { ...__c.iR,
                                ...(b != null ? typeof b === "number" ? {
                                    all: b
                                } : b : {})
                            }
                        }
                    },
                    I5 = function(a) {
                        var b;
                        const c = (b = a === null || a === void 0 ? void 0 : a.color) !== null && b !== void 0 ? b : "#000000";
                        var d;
                        return { ...__c.mE,
                            all: a ? { ...__c.YQ,
                                weight: (d = a.weight) !== null && d !== void 0 ? d : 1,
                                color: c,
                                Lf: !0
                            } : void 0
                        }
                    },
                    J5 = function(a) {
                        return { ...__c.hR,
                            ...(a != null ? typeof a === "number" ? {
                                all: a
                            } : a : {})
                        }
                    },
                    $2b = function(a) {
                        return { ...__c.Qdb,
                            ...a,
                            fill: H5(a.fill),
                            stroke: f3b(a.stroke)
                        }
                    },
                    f3b = function(a) {
                        return a ? { ...__c.YQ,
                            color: a.color,
                            weight: a.weight
                        } : void 0
                    },
                    H5 = function(a) {
                        var b;
                        const c = { ...__c.Lv,
                            Ka: (b = a === null || a === void 0 ? void 0 : a.Ka) !== null && b !== void 0 ? b : 0
                        };
                        switch (a === null || a === void 0 ? void 0 : a.type) {
                            case "color":
                                return { ...c,
                                    color: a.color
                                };
                            case "gradient":
                                return { ...c,
                                    cb: a.cb
                                };
                            case void 0:
                                return c;
                            default:
                                throw new E(a);
                        }
                    },
                    l3b = function(a, b) {
                        const c = new Map(b.cells.map(e => [e.id, e]));
                        g3b(a.cells, c, (e, f) => {
                            let g = !1;
                            h3b(e.element, f.content, () => {
                                a.cells.delete(f.id);
                                a.cells.set(f.id, K5(f));
                                g = !0
                            });
                            g || (L5(e.fill, f.fill), i3b(e.border, f.border), j3b(e.X, f.X))
                        }, e => K5(e));
                        k3b(a.behavior, b, c);
                        L5(a.fill, b.fill);
                        j3b(a.X, b.X);
                        i3b(a.border, b.border);
                        var d;
                        a.Ka = (d = b.Ka) !== null && d !== void 0 ? d : 0
                    },
                    k3b = function(a, b, c) {
                        M5(a.rules, [b], d => {
                            m3b(d.grid.gridTemplateColumns, b.gridTemplateColumns) ||
                                (d.grid.gridTemplateColumns = b.gridTemplateColumns);
                            m3b(d.grid.gridTemplateRows, b.gridTemplateRows) || (d.grid.gridTemplateRows = b.gridTemplateRows);
                            var e;
                            d.grid.columnGap = (e = b.columnGap) !== null && e !== void 0 ? e : 0;
                            var f;
                            d.grid.rowGap = (f = b.rowGap) !== null && f !== void 0 ? f : 0;
                            g3b(d.grid.ah, c, (g, h) => {
                                const k = h.placement.padding,
                                    l = h.placement.gridColumnEnd,
                                    m = h.placement.gridRowStart,
                                    n = h.placement.gridRowEnd,
                                    p = h.placement.alignSelf;
                                g.gridColumnStart = h.placement.gridColumnStart;
                                g.gridColumnEnd = l;
                                g.gridRowStart = m;
                                g.gridRowEnd =
                                    n;
                                typeof k === "number" && g.padding.all !== k ? g.padding.all = k : typeof k !== "number" && (g.padding.ra = k === null || k === void 0 ? void 0 : k.ra, g.padding.Ea = k === null || k === void 0 ? void 0 : k.Ea, g.padding.qa = k === null || k === void 0 ? void 0 : k.qa, g.padding.La = k === null || k === void 0 ? void 0 : k.La);
                                g.alignSelf = p
                            }, g => e3b(g))
                        }, d => {
                            var e, f;
                            return {
                                Kg: void 0,
                                grid: {
                                    gridTemplateColumns: b.gridTemplateColumns,
                                    gridTemplateRows: b.gridTemplateRows,
                                    columnGap: (e = b.columnGap) !== null && e !== void 0 ? e : 0,
                                    rowGap: (f = b.rowGap) !== null && f !== void 0 ? f : 0,
                                    ah: d3b(d.cells)
                                }
                            }
                        })
                    },
                    n3b = function(a, b) {
                        M5(a.kb, b.kb, (e, f) => {
                            e.d = f.d;
                            L5(e.fill, f.fill);
                            e.stroke.ref && f.stroke ? (e = e.stroke.ref, f = f.stroke, e.color = f.color, e.weight = f.weight) : e.stroke.set(f3b(f.stroke))
                        }, e => $2b(e));
                        const {
                            viewBox: c,
                            width: d
                        } = a3b(b);
                        a.width = d;
                        __c.Ju(a.viewBox).equals(__c.Ju(c)) || (a.viewBox = c)
                    },
                    h3b = function(a, b, c) {
                        switch (b.type) {
                            case "shape":
                                a.type === "shape" ? n3b(a, b) : c();
                                break;
                            case "text":
                                a.type === "text" && __c.wk.domain.Nb(__c.wk.ka(a.text), b3b(b).text) || c();
                                break;
                            case "layout":
                                a.type === "layout" ? l3b(a, b) : c();
                                break;
                            default:
                                throw new E(b);
                        }
                    },
                    g3b = function(a, b, c, d) {
                        const e = new Set(a.keys());
                        for (const [f, g] of b)(b = a.get(f)) ? (e.delete(f), c(b, g)) : a.set(f, d(g));
                        e.forEach(f => a.delete(f))
                    },
                    M5 = function(a, b, c, d) {
                        const e = a.toArray();
                        for (let f = 0; f < Math.max(e.length, b.length); f++)
                            if (f < e.length && f < b.length) c(e[f], b[f]);
                            else if (f < e.length && f >= b.length) a.delete(e[f]);
                        else if (f >= e.length && f < b.length) {
                            const g = d(b[f]);
                            a.append(g)
                        }
                    },
                    L5 = function(a, b) {
                        switch (b === null || b === void 0 ? void 0 : b.type) {
                            case "color":
                                a.color = b.color;
                                a.cb.set(void 0);
                                var c;
                                a.Ka = (c = b.Ka) !== null && c !== void 0 ? c : 0;
                                break;
                            case "gradient":
                                if (a.cb.ref && __c.G3a.domain.Nb(a.cb.ref, b.cb)) break;
                                a.color = void 0;
                                a.cb.set(b.cb);
                                var d;
                                a.Ka = (d = b.Ka) !== null && d !== void 0 ? d : 0;
                                break;
                            default:
                                a.color = void 0, a.cb.set(void 0)
                        }
                    },
                    j3b = function(a, b) {
                        b = J5(b);
                        a.all = b.all;
                        a.XC = b.XC;
                        a.VC = b.VC;
                        a.WC = b.WC;
                        a.UC = b.UC
                    },
                    i3b = function(a, b) {
                        b = I5(b).all;
                        var c;
                        if (c = b) c = a.all.ref, c = !(c && b ? __c.nE.domain.Nb(__c.nE.ka(c), b) : !c && !b);
                        c && a.all.set(b)
                    },
                    m3b = function(a, b) {
                        return a.length === b.length && a.every(c => b.includes(c))
                    },
                    p3b = function(a, b, c, d) {
                        let e = a.lWa.get(b);
                        if (e) return e;
                        e = {
                            lx: new o3b(c.ew, b, d, c.gra),
                            iGa: void 0,
                            ZPa: void 0,
                            YRa: __c.YV.mode
                        };
                        a.lWa.set(b, e);
                        return e
                    },
                    r3b = function(a, b, c, d, e) {
                        var f, g;
                        e = p3b(a, c, b, e);
                        const h = e.lx,
                            k = e.ZPa,
                            l = e.iGa,
                            m = e.YRa;
                        c = __c.aQ.ka(c);
                        const n = ((f = (g = a.Cz).oqa) === null || f === void 0 ? void 0 : f.call(g, d)) || __c.YV;
                        h.Dj === k && q3b.structural(c, l) && n.mode === m || (e.iGa = c, e.ZPa = h.Dj, e.YRa = n.mode, b = b.render(h, n), a.Ckb.update(d, b), Z2b(d, b, (p, q) => a.HP.xra.set(p, q), (p, q, r) => a.HP.refs.set(p, {
                            ref: q,
                            key: r
                        })))
                    },
                    u3b = function(a, b) {
                        const c = [],
                            d = () => c.forEach(e => e());
                        c.push(a.plb());
                        c.push(s3b(() => {
                            a: {
                                var e = new t3b;
                                for (const f of b)
                                    if (e.MP(f), e.mpa) {
                                        e = e.mpa;
                                        break a
                                    }
                                e = void 0
                            }
                            return e && (a.Wb.isLoaded(e) || a.rsa.has(e))
                        }, e => {
                            if (e) {
                                for (const f of b) C(f.type === "layout"), a.xk.gfa(f);
                                d()
                            }
                        }));
                        return d
                    },
                    v3b = function(a, b) {
                        return {
                            oD: ({
                                Si: c
                            }) => {
                                var d;
                                const {
                                    lx: e
                                } = p3b(a.renderer, c, b, a.F1), f = __c.cQ.create([]), g = [];
                                g.push(u3b(a.Zcb, f));
                                g.push(s3b(() => {
                                    var k, l;
                                    return [(k = (l = a.Cz).oqa) === null || k === void 0 ? void 0 : k.call(l, f), __c.aQ.ka(c),
                                        e.Dj
                                    ]
                                }, () => {
                                    r3b(a.renderer, b, c, f, a.F1)
                                }, {
                                    fireImmediately: !0,
                                    equals: q3b.structural
                                }));
                                const h = (d = b.Yta) === null || d === void 0 ? void 0 : d.call(b, {
                                    lx: e
                                });
                                h && g.push(h);
                                return {
                                    Ra: f,
                                    Xt: () => {
                                        g.forEach(k => k())
                                    }
                                }
                            }
                        }
                    },
                    x3b = function(a, b) {
                        let c = a.A7.get(b);
                        c || (c = w3b("weakKey"), a.A7.set(b, c));
                        c.reportObserved()
                    },
                    N5 = __webpack_require__(519427),
                    q3b = N5.comparer,
                    y3b = N5.computed,
                    w3b = N5.createAtom,
                    O5 = N5.observable,
                    s3b = N5.reaction,
                    z3b = N5.runInAction;
                var A3b = class {
                    static A(a) {
                        __c.P(a, {
                            anb: O5.ref,
                            neb: O5.ref
                        })
                    }
                    constructor() {
                        this.oqa = (A3b.A(this), void 0)
                    }
                };
                var B3b = class {
                        constructor() {
                            this.sources = new WeakMap
                        }
                    },
                    o3b = class {
                        static A(a) {
                            __c.P(a, {
                                Le: y3b
                            })
                        }
                        get $Pa() {
                            var a = this.F1,
                                b = this.Si,
                                c = this.gra;
                            let d = a.sources.get(b);
                            d || (d = O5.box(c), a.sources.set(b, d));
                            return d
                        }
                        get Dj() {
                            return this.$Pa.get()
                        }
                        get Le() {
                            return this.ew.xu({
                                type: "dict",
                                value: this.Si
                            })
                        }
                        Yl(a) {
                            this.$Pa.set(a instanceof Function ? { ...this.Dj,
                                ...a()
                            } : { ...this.Dj,
                                ...a
                            })
                        }
                        constructor(a, b, c, d) {
                            this.ew = a;
                            this.Si = b;
                            this.F1 = c;
                            this.gra = d;
                            o3b.A(this)
                        }
                    };
                var Y2b = class {
                    k6(a, b) {
                        this.bWa(a, b);
                        b.ref && this.ywa(a, b.ref, b.key)
                    }
                    PP(a, b) {
                        b.ref && this.ywa(a.text, b.ref, b.key)
                    }
                    OCa(a, b) {
                        switch (b.content.type) {
                            case "shape":
                                C(a.element.type === "shape");
                                this.k6(a.element, b.content);
                                break;
                            case "text":
                                C(a.element.type === "text");
                                this.PP(a.element, b.content);
                                break;
                            case "layout":
                                C(a.element.type === "layout");
                                this.iia(a.element, b.content);
                                break;
                            default:
                                throw new E(b.content);
                        }
                    }
                    iia(a, b) {
                        this.bWa(a, b);
                        b.ref && this.ywa(a, b.ref, b.key);
                        for (const [c, d] of a.cells) a = b.cells.find(e =>
                            e.id === c), C(!!d && !!a), this.OCa(d, a)
                    }
                    constructor(a, b) {
                        this.bWa = a;
                        this.ywa = b
                    }
                };
                var F5 = {
                        locked: !0,
                        Ck: {
                            NY: !1,
                            UV: !1
                        },
                        ci: !0
                    },
                    G5 = {
                        top: 0,
                        left: 0,
                        width: 1,
                        height: 1
                    };
                var C3b = class {
                    constructor(a) {
                        this.xk = a;
                        this.update = (b, c) => {
                            M5(b, [c], (d, e) => {
                                switch (d.type) {
                                    case "layout":
                                        l3b(d, e);
                                        break;
                                    default:
                                        throw Error(`Not supported element type: ${d.type}`);
                                }
                            }, d => {
                                a: switch (d.type) {
                                    case "layout":
                                        d = { ...c3b(d),
                                            ...F5,
                                            width: d.minWidth,
                                            height: d.minHeight,
                                            I: d.minWidth,
                                            W: d.minHeight
                                        };
                                        break a;
                                    default:
                                        throw new E(d.type);
                                }
                                return d
                            });
                            for (const d of b) C(d.type === "layout"), d.width = c.minWidth, d.height = c.minHeight, d.I = c.minWidth, d.W = c.minHeight, c.direction && (d.direction = c.direction), this.xk.gfa(d)
                        }
                    }
                };
                var D3b = class {
                    constructor(a, b, c) {
                        this.Ckb = a;
                        this.HP = b;
                        this.Cz = c;
                        this.lWa = new WeakMap
                    }
                };
                var E3b = class {
                        static A(a) {
                            __c.P(a, {
                                rsa: O5.shallow
                            })
                        }
                        constructor(a, b) {
                            this.Wb = a;
                            this.xk = b;
                            this.rsa = (E3b.A(this), new Set);
                            this.xpa = new Set;
                            this.plb = () => {
                                this.W$ || (this.W$ = __c.Fga(this.Wb).subscribe(d => {
                                    z3b(() => {
                                        this.rsa.add(d.id)
                                    })
                                }));
                                const c = Symbol();
                                this.xpa.add(c);
                                return () => {
                                    this.xpa.delete(c);
                                    this.xpa.size <= 0 && this.W$ && (this.W$.unsubscribe(), this.W$ = void 0)
                                }
                            }
                        }
                    },
                    t3b = class extends __c.LC {
                        MP(a, b) {
                            this.mpa || super.MP(a, b)
                        }
                        PP(a) {
                            this.mpa = (a = a.text.Hx("font-family")["font-family"].values().next().value) &&
                                __c.gs(a).id
                        }
                    };
                var F3b = !1,
                    G3b = class {
                        register(a, b) {
                            this.hD.has(a) || (this.hD.set(a, b), F3b || (__c.bQ.set(a, v3b(this, b)), F3b = !0))
                        }
                        get(a) {
                            return this.hD.get(a)
                        }
                        constructor(a, b, c, d, e) {
                            this.renderer = a;
                            this.F1 = b;
                            this.Cz = c;
                            this.Wb = d;
                            this.xk = e;
                            this.hD = new Map;
                            this.Zcb = new E3b(this.Wb, this.xk)
                        }
                    };
                var H3b = class {
                    delete(a) {
                        var b;
                        const c = this.map.delete(a);
                        c && ((b = this.A7.get(a)) === null || b === void 0 || b.reportChanged());
                        return c
                    }
                    get(a) {
                        x3b(this, a);
                        return this.map.get(a)
                    }
                    has(a) {
                        x3b(this, a);
                        return this.map.has(a)
                    }
                    set(a, b) {
                        if (!this.map.has(a) || this.map.get(a) !== b) {
                            var c;
                            this.map.set(a, b);
                            (c = this.A7.get(a)) === null || c === void 0 || c.reportChanged()
                        }
                        return this
                    }
                    constructor() {
                        this.A7 = new WeakMap;
                        this.map = new WeakMap
                    }
                };
                var I3b = class {
                        constructor() {
                            this.xra = new H3b;
                            this.refs = new H3b
                        }
                    },
                    J3b = class {
                        getContext(a) {
                            return this.HP.refs.get(a)
                        }
                        rM(a) {
                            return this.HP.xra.get(a)
                        }
                        constructor(a, b, c) {
                            this.HP = a;
                            this.F1 = b;
                            this.renderer = c
                        }
                    };
                __c.wQa = {
                    Kgb: function(a) {
                        const b = new A3b,
                            c = new I3b,
                            d = new D3b(new C3b(a.xk), c, b),
                            e = new B3b;
                        a = new G3b(d, e, b, a.Wb, a.xk);
                        return {
                            Cz: b,
                            bPb: new J3b(c, e, d),
                            n6: a,
                            HP: c
                        }
                    }
                };
            }).call(self, self._7ccc7343da2ae983607b3819c7bc1f93);
        }

    }
])
//# sourceMappingURL=sourcemaps/91103313f1a2db23.js.map