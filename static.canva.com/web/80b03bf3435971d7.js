(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [76301], {

        /***/
        738083: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(813110);
            self._c68b74ff4d61aaeea4f241f0854f5b1a = self._c68b74ff4d61aaeea4f241f0854f5b1a || {};
            (function(__c) {
                var TM = __c.TM;
                var Ac = __c.Ac;
                var P = __c.P;
                var Ol = __c.Ol;
                var QC = __c.QC;
                var O = __c.O;
                var pl = __c.pl;
                var C = __c.C;
                var E = __c.E;
                var R5 = function(a, b) {
                        switch (b.reference.type) {
                            case 0:
                                const c = a.uI(b.reference.cg);
                                a = a.SK(b.reference.jg);
                                return c != null && a != null;
                            case 1:
                                return a.uI(b.reference.cg) != null;
                            case 2:
                                return a.SK(b.reference.jg) != null;
                            case 3:
                                return !1;
                            default:
                                throw new E(b.reference);
                        }
                    },
                    zDb = function(a, b, c) {
                        switch (c.type) {
                            case "invalid":
                                return !1;
                            case "canonical":
                                if (c.S.length > 0) return !1;
                                a = a.ly(c.iN.slice(1).trim());
                                return a.result !== "success" ? !1 : __c.xI(new __c.BI, a.sA).filter(d => {
                                    switch (d.type) {
                                        case 0:
                                            return R5(b, d);
                                        case 1:
                                            return R5(b,
                                                d.start) && R5(b, d.end);
                                        default:
                                            throw new E(d);
                                    }
                                }).length > 0;
                            default:
                                throw new E(c);
                        }
                    },
                    ADb = function(a, b, c, d) {
                        const e = [];
                        for (const k of c)
                            for (const l of d) {
                                c = k.ea;
                                var f = l.column,
                                    g = a.layout.cells.get(c, f);
                                if (!g || (k.boundary === "start" ? g.span.tb === c : g.span.dc === c))
                                    if (c = b.get(`${f.id}:${c.id}`), c = k.boundary === "start" ? c === null || c === void 0 ? void 0 : c.la : c === null || c === void 0 ? void 0 : c.Aa) {
                                        g = e[e.length - 1];
                                        f = (f = a.layout.cols.next(f)) ? {
                                            column: f,
                                            boundary: "start"
                                        } : {
                                            column: C(a.layout.cols.last()),
                                            boundary: "end"
                                        };
                                        var h;
                                        if (h = g) h = g.F7, h = h.column === l.column && h.boundary === l.boundary;
                                        h && (h = g.oxa, h = h.ea === k.ea && h.boundary === k.boundary);
                                        h && g.color === c.color && g.weight === c.weight && g.Fb === c.Fb && g.Fb === 0 ? g.F7 = f : e.push({
                                            oxa: k,
                                            yVa: l,
                                            F7: f,
                                            color: c.color,
                                            weight: c.weight,
                                            Fb: c.Fb
                                        })
                                    }
                            }
                        return e
                    },
                    BDb = function(a, b, c, d, e) {
                        const f = [];
                        for (const l of d)
                            for (const m of c) {
                                var g = m.ea,
                                    h = l.column;
                                d = a.layout.cells.get(g, h);
                                if (!d || (l.boundary === "start" ? d.span.qb === h : d.span.Pb === h))
                                    if (d = b.get(`${h.id}:${g.id}`), (d = l.boundary === "start" ? d === null ||
                                            d === void 0 ? void 0 : d.ia : d === null || d === void 0 ? void 0 : d.Ca) && (l.boundary !== "start" || e(g, h) !== 1)) {
                                        h = f[f.length - 1];
                                        g = (g = a.layout.rows.next(g)) ? {
                                            ea: g,
                                            boundary: "start"
                                        } : {
                                            ea: C(a.layout.rows.last()),
                                            boundary: "end"
                                        };
                                        var k;
                                        if (k = h) k = h.Bla, k = k.column === l.column && k.boundary === l.boundary;
                                        k && (k = h.J7, k = k.ea === m.ea && k.boundary === m.boundary);
                                        k && h.color === d.color && h.weight === d.weight && h.Fb === d.Fb && h.Fb === 0 ? h.J7 = g : f.push({
                                            Bla: l,
                                            IVa: m,
                                            J7: g,
                                            color: d.color,
                                            weight: d.weight,
                                            Fb: d.Fb
                                        })
                                    }
                            }
                        return f
                    },
                    CDb = function(a, b, c, d, e) {
                        const f =
                            a.Nya.oHa(c, b.layout.rows.last(), b.layout.cols.last());
                        a = (q, r) => {
                            const t = f.get(q) || 0,
                                v = f.get(r) || 0;
                            return t <= v ? q : r
                        };
                        const g = new Map;
                        if (d.length === 0 || e.length === 0) return g;
                        var h = [],
                            k = b.layout.cols.Dc(e[0].column);
                        k && h.push({
                            column: k,
                            boundary: "start"
                        });
                        h.push(...e);
                        (e = b.layout.cols.next(e[e.length - 1].column)) && h.push({
                            column: e,
                            boundary: "start"
                        });
                        e = [];
                        (k = b.layout.rows.Dc(d[0].ea)) && e.push({
                            ea: k,
                            boundary: "start"
                        });
                        e.push(...d);
                        (d = b.layout.rows.next(d[d.length - 1].ea)) && e.push({
                            ea: d,
                            boundary: "start"
                        });
                        for (const q of h) {
                            h = (d = q.boundary === "start" ? q.column : void 0) ? b.layout.cols.Dc(d) : b.layout.cols.last();
                            for (const r of e) {
                                var l = r.boundary === "start" ? r.ea : void 0;
                                k = l ? b.layout.rows.Dc(l) : b.layout.rows.last();
                                var m = d && l && c.get(`${d.id}:${l.id}`),
                                    n = d && k && c.get(`${d.id}:${k.id}`);
                                l = h && l && c.get(`${h.id}:${l.id}`);
                                var p = h && k && c.get(`${h.id}:${k.id}`);
                                k = q.boundary === "end" ? l === null || l === void 0 ? void 0 : l.Ca : m === null || m === void 0 ? void 0 : m.ia;
                                m = r.boundary === "end" ? n === null || n === void 0 ? void 0 : n.Aa : m === null || m === void 0 ?
                                    void 0 : m.la;
                                n = q.boundary === "end" ? p === null || p === void 0 ? void 0 : p.Ca : n === null || n === void 0 ? void 0 : n.ia;
                                l = r.boundary === "end" ? p === null || p === void 0 ? void 0 : p.Aa : l === null || l === void 0 ? void 0 : l.la;
                                p = __c.hl({
                                    la: n,
                                    Aa: k,
                                    ia: l,
                                    Ca: m
                                }, a);
                                let t;
                                switch (p) {
                                    case "blockStart":
                                        t = n;
                                        break;
                                    case "blockEnd":
                                        t = k;
                                        break;
                                    case "inlineStart":
                                        t = l;
                                        break;
                                    case "inlineEnd":
                                        t = m;
                                        break;
                                    default:
                                        t = void 0
                                }
                                const {
                                    height: v,
                                    width: u
                                } = (t === null || t === void 0 ? void 0 : t.Fb) === 1 ? {
                                    height: t.weight,
                                    width: t.weight
                                } : {
                                    height: Math.max((l === null || l === void 0 ? void 0 :
                                        l.weight) || 0, (m === null || m === void 0 ? void 0 : m.weight) || 0),
                                    width: Math.max((n === null || n === void 0 ? void 0 : n.weight) || 0, (k === null || k === void 0 ? void 0 : k.weight) || 0)
                                };
                                g.set(S5(q, r), __c.el(p, v / 2, u / 2))
                            }
                        }
                        return g
                    },
                    DDb = function(a, b, c, d, e, f) {
                        if (d.length === 0 || e.length === 0) return [];
                        const g = ADb(b, c, d, e);
                        f = BDb(b, c, d, e, f);
                        const h = CDb(a, b, c, d, e),
                            k = a.WLa(b),
                            l = a.vLa(b),
                            m = b.direction === "rtl";
                        a = g.map(n => {
                            var p, q, r = n.yVa,
                                t = n.F7,
                                v = n.oxa;
                            const u = n.color,
                                x = n.weight;
                            n = n.Fb;
                            const y = m ? -1 : 1,
                                z = (p = h.get(S5(r, v))) === null || p === void 0 ?
                                void 0 : p.Ca;
                            p = (q = h.get(S5(t, v))) === null || q === void 0 ? void 0 : q.ia;
                            if (z != null && p != null) {
                                q = C(k.get(v.ea));
                                var A = C(l.get(r.column));
                                r = C(l.get(t.column));
                                v = v.boundary === "start" ? q.start : q.end;
                                q = A.start;
                                t = t.boundary === "start" ? r.start : r.end;
                                return {
                                    color: u,
                                    weight: x,
                                    Fb: n,
                                    p1: new pl(q + z * y, v),
                                    p2: new pl(t + p * y, v),
                                    ...__c.kl((t - q) * y, n * x, z)
                                }
                            }
                        }).filter(__c.pb);
                        return [...f.map(n => {
                            var p, q, r = n.Bla,
                                t = n.IVa,
                                v = n.J7;
                            const u = n.color,
                                x = n.weight;
                            n = n.Fb;
                            const y = (p = h.get(S5(r, t))) === null || p === void 0 ? void 0 : p.Aa;
                            p = (q = h.get(S5(r,
                                v))) === null || q === void 0 ? void 0 : q.la;
                            if (y != null && p != null) {
                                q = C(l.get(r.column));
                                var z = C(k.get(t.ea));
                                t = C(k.get(v.ea));
                                r = r.boundary === "start" ? q.start : q.end;
                                q = z.start;
                                v = v.boundary === "start" ? t.start : t.end;
                                return {
                                    color: u,
                                    weight: x,
                                    Fb: n,
                                    p1: new pl(r, q + y),
                                    p2: new pl(r, v + p),
                                    ...__c.kl(v - q, n * x, y)
                                }
                            }
                        }).filter(__c.pb), ...a]
                    },
                    EDb = function(a) {
                        const b = [];
                        a = a.filter(c => c.weight !== 0 && c.color != null);
                        a = __c.Kd(a, c => c.weight);
                        a = Array.from(a.entries()).sort(([c], [d]) => c - d);
                        for (const [c, d] of a) {
                            a = __c.Kd(d, e => `${e.Kh}_${e.Lh}`);
                            for (const [, e] of a) {
                                const {
                                    Lh: f,
                                    Kh: g
                                } = e[0];
                                a = __c.Kd(e, h => h.color);
                                for (const [h, k] of a) b.push({
                                    weight: c,
                                    color: h,
                                    lines: k,
                                    Kh: g,
                                    Lh: f
                                })
                            }
                        }
                        return b
                    },
                    FDb = function(a, b, c, d) {
                        var e = __c.E9a;
                        const f = b.get().flatMap(k => a.layout.rows.last() === k ? [{
                                ea: k,
                                boundary: "start"
                            }, {
                                ea: k,
                                boundary: "end"
                            }] : [{
                                ea: k,
                                boundary: "start"
                            }]),
                            g = c.get().flatMap(k => a.layout.cols.last() === k ? [{
                                column: k,
                                boundary: "start"
                            }, {
                                column: k,
                                boundary: "end"
                            }] : [{
                                column: k,
                                boundary: "start"
                            }]),
                            h = new Map;
                        for (const k of b.get())
                            for (const l of c.get()) b = l && k ?
                                e.Nya.DTa(a, l, k) : void 0, b && h.set(`${l.id}:${k.id}`, b);
                        c = DDb(e, a, h, f, g, d);
                        return EDb(c)
                    },
                    GDb = function(a) {
                        switch (a) {
                            case 2:
                                return O("ibdecg");
                            case 7:
                                return O("446quA");
                            case 5:
                                return O("j1fbqg");
                            case 1:
                                return O("O5i4AQ");
                            case 6:
                                return O("C0VHsg");
                            case 4:
                                return O("9ND0kg");
                            case -1:
                                return O("RWqnLA");
                            case 9:
                                return O("nQR/7w");
                            case -2:
                                return O("P23rtA");
                            case 3:
                                return O("+IXmVg");
                            default:
                                throw new E(a);
                        }
                    },
                    T5 = function() {
                        const [a] = (0, __c.Wb)(() => QC());
                        return a
                    },
                    HDb = function(a, b, c) {
                        const d = [a];
                        for (; a != null &&
                            a !== b;)(a = c.next(a)) && d.push(a);
                        return d
                    },
                    IDb = function(a) {
                        const b = a.direction === "rtl" ? -(0, __c.H9a)(a) / 2 : -(0, __c.F9a)(a) / 2,
                            c = -(0, __c.G9a)(a) / 2,
                            d = a.width + (0, __c.F9a)(a) / 2 + (0, __c.H9a)(a) / 2;
                        a = a.height + (0, __c.G9a)(a) / 2 + (0, __c.I9a)(a) / 2;
                        return Ol({
                            top: 0,
                            left: 0,
                            width: d,
                            height: a,
                            rotation: 0
                        }).translate(b, c)
                    },
                    JDb = function(a) {
                        return b => ({
                            type: "react",
                            node: (0, __c.N)(a, { ...b
                            })
                        })
                    },
                    MDb = function(a) {
                        var b;
                        const c = a.Oy;
                        var d = a.content;
                        const e = a.context;
                        a = a.yl;
                        __c.B((d === null || d === void 0 ? void 0 : (b = d.Je) === null || b ===
                            void 0 ? void 0 : b.type) === "formula");
                        b = d.Qh;
                        const f = {
                            type: "dom",
                            render: h => h.innerText = ""
                        };
                        switch (b.type) {
                            case 9:
                                d = f;
                                break;
                            case 6:
                                var g;
                                d = (g = c.P3) === null || g === void 0 ? void 0 : g.call(c, {
                                    content: __c.te(__c.dLa, { ...__c.XPa,
                                        value: b.value
                                    }),
                                    context: e,
                                    yl: a
                                });
                                break;
                            case 1:
                            case 3:
                            case 4:
                            case 2:
                            case 7:
                            case 8:
                                d = KDb(c, e, d.eu, d.Qh.type);
                                break;
                            case 0:
                                d = {
                                    type: "react",
                                    node: U5(__c.ZS, {
                                        label: GDb(b.error),
                                        children: U5(__c.Hk, {
                                            width: "full",
                                            display: "flex",
                                            justifyContent: "center",
                                            children: U5(LDb, {
                                                tone: "critical"
                                            })
                                        })
                                    })
                                };
                                break;
                            default:
                                throw new E(b);
                        }
                        return d !== null && d !== void 0 ? d : f
                    },
                    KDb = function(a, b, c, d) {
                        var e;
                        return (e = a.S3) === null || e === void 0 ? void 0 : e.call(a, {
                            context: b,
                            value: c,
                            valueType: d
                        })
                    },
                    PDb = function(a) {
                        const b = a.Oy,
                            c = a.Hf,
                            d = a.eWa,
                            e = a.Pa;
                        b.S3 = f => __c.bxa({ ...f,
                            Pa: e
                        });
                        b.Nia = f => MDb({ ...f,
                            Oy: b
                        });
                        b.P3 = JDb(NDb({
                            Hf: c,
                            FH: void 0
                        }));
                        b.Pia = ODb(d, e);
                        b.Qia = JDb(f => U5(V5, { ...f,
                            Pa: e
                        }))
                    },
                    QDb = function({
                        label: a,
                        Vt: b,
                        width: c,
                        height: d,
                        scale: e,
                        Ila: f
                    }) {
                        return U5("div", {
                            style: {
                                width: c,
                                height: d,
                                transform: `scale(${e})`
                            },
                            className: "bx74uQ",
                            children: W5(__c.Ek, {
                                className: X5("ivlMMQ", Y5(f)),
                                size: "small",
                                alignment: "center",
                                children: [b && U5(b, {
                                    size: "small"
                                }), a]
                            })
                        })
                    },
                    Y5 = function(a) {
                        return {
                            _2BX0vg: a === "primary-default",
                            JfW_Cg: a === "primary-low",
                            isMgNg: a === "primary-active",
                            xwWDeQ: a === "secondary-default",
                            w0EyUQ: a === "secondary-low",
                            _8p5AIA: a === "secondary-active"
                        }
                    },
                    SDb = function({
                        zi: a,
                        eqa: b,
                        scale: c,
                        fl: d,
                        il: e,
                        mCa: f
                    }) {
                        const g = Z5(() => {
                                const m = d === null || d === void 0 ? void 0 : d.get();
                                if (m != null && m.length !== 0) return new __c.jJ(m)
                            }, [d]),
                            h = e(1),
                            k = e(c),
                            l = {
                                ssE9Tg: !a,
                                OkifGQ: a
                            };
                        return U5(__c.Fk, {
                            qm: "light",
                            light: "light",
                            Do: "light",
                            dark: "light",
                            children: m => U5("div", {
                                className: X5("ze9QCQ", l, m.className),
                                style: {
                                    width: k,
                                    height: k
                                },
                                children: U5("div", {
                                    style: {
                                        width: h,
                                        height: h,
                                        transform: `scale(${c})`
                                    },
                                    className: X5("N7J3UA", l),
                                    ref: g === null || g === void 0 ? void 0 : g.co,
                                    children: U5(__c.cT, {
                                        className: X5("m8CFdg", l, {
                                            G6wL4w: f,
                                            W_E0wA: b
                                        }),
                                        ariaLabel: O("ruWN9A"),
                                        children: U5(RDb, {
                                            size: "tiny"
                                        })
                                    })
                                })
                            })
                        })
                    },
                    UDb = function() {
                        const a = new TDb,
                            b = new __c.lU,
                            c = $5(f => {
                                const {
                                    scale: g = 1,
                                    aqa: h,
                                    size: k =
                                        "small",
                                    mCa: l = !0
                                } = f, m = a6(n => a.il({
                                    scale: n,
                                    size: k,
                                    Y$: h
                                }), [k, h]);
                                return U5(SDb, { ...f,
                                    scale: h ? Math.max(g, h) : g,
                                    zi: f.sheet.direction === "rtl",
                                    eqa: f.selection != null && a.BOa(f.sheet, f.selection),
                                    il: m,
                                    mCa: l
                                })
                            }),
                            d = $5(f => {
                                const {
                                    scale: g = 1,
                                    aqa: h,
                                    size: k = "small",
                                    sheet: l,
                                    selection: m,
                                    dUa: n
                                } = f, p = a6(u => a.il({
                                    scale: u,
                                    size: k,
                                    Y$: h
                                }), [k, h]), q = h ? Math.max(g, h) : g, r = a6(u => m != null && a.Gca(m).has(u), [m]), t = a6(u => m != null && a.GMa(l, m).has(u), [l, m]), v = a6(u => {
                                    const x = n != null && l.layout.cols.Cd(u, n.qb) >= 0 && l.layout.cols.Cd(u, n.Pb) <=
                                        0;
                                    return r(u) ? x ? "secondary-active" : "primary-active" : t(u) ? x ? "secondary-low" : "primary-low" : x ? "secondary-default" : "primary-default"
                                }, [l, n, t, r]);
                                return U5(b6, { ...f,
                                    wd: g,
                                    Td: q,
                                    il: p,
                                    gx: v,
                                    Tx: b
                                })
                            }),
                            e = $5(f => {
                                const {
                                    scale: g = 1,
                                    aqa: h,
                                    size: k = "small",
                                    sheet: l,
                                    selection: m,
                                    dUa: n
                                } = f, p = a6(u => a.il({
                                    scale: u,
                                    size: k,
                                    Y$: h
                                }), [k, h]), q = h ? Math.max(g, h) : g, r = a6(u => m != null && a.Ica(m).has(u), [m]), t = a6(u => m != null && a.HMa(l, m).has(u), [l, m]), v = a6(u => {
                                    const x = n != null && l.layout.rows.Cd(u, n.tb) >= 0 && l.layout.rows.Cd(u, n.dc) <= 0;
                                    return r(u) ?
                                        x ? "secondary-active" : "primary-active" : t(u) ? x ? "secondary-low" : "primary-low" : x ? "secondary-default" : "primary-default"
                                }, [l, n, t, r]);
                                return U5(c6, { ...f,
                                    wd: q,
                                    Td: g,
                                    il: p,
                                    gx: v,
                                    Tx: b
                                })
                            });
                        return {
                            ICa: c,
                            HCa: d,
                            JCa: e
                        }
                    },
                    VDb = function(a) {
                        const b = a.Wl,
                            c = () => null;
                        return __c.bD(d => U5(d6, { ...d,
                            Wl: b,
                            Gf: c
                        }))
                    },
                    WDb = function({
                        sheet: a,
                        O: b,
                        range: c,
                        Jh: d
                    }) {
                        e6(() => f6(() => {
                            if (d.current != null) {
                                var e, f = (e = b === null || b === void 0 ? void 0 : b.get()) !== null && e !== void 0 ? e : 1;
                                e = a.direction === "rtl";
                                e = c ? a.ia(c.qb) * f * (e ? 1 : -1) : 0;
                                var g = c ? -a.la(c.tb) *
                                    f : 0;
                                d.current.style.transform = `translate(${e}px, ${g}px)`;
                                d.current.style.width = `${a.width*f}px`;
                                d.current.style.height = `${a.height*f}px`
                            }
                        }), [a, c, d, b])
                    },
                    ZDb = function({
                        onScroll: a
                    }) {
                        const b = new XDb(a);
                        return {
                            zv: b,
                            D3: $5(c => U5(YDb, {
                                sheet: c.sheet,
                                zv: b,
                                children: c.children
                            }))
                        }
                    },
                    bEb = function(a) {
                        const b = a.Wl,
                            c = a.af,
                            d = a.Oya,
                            e = ({
                                children: k
                            }) => k,
                            {
                                zv: f,
                                D3: g
                            } = ZDb({
                                onScroll: a.onScroll
                            });
                        class h extends $Db {
                            get aD() {
                                const k = this.props.Y.uu;
                                switch (k) {
                                    case "screen":
                                        return g;
                                    case "print":
                                        return e;
                                    default:
                                        throw new E(k);
                                }
                            }
                            componentDidMount() {
                                d.Bya(this.props.item, {
                                    ob: this.props.ob,
                                    Y: this.props.Y
                                })
                            }
                            componentWillUnmount() {
                                d.tGa(this.props.item, {
                                    ob: this.props.ob,
                                    Y: this.props.Y
                                })
                            }
                            render() {
                                d.Bya(this.props.item, {
                                    ob: this.props.ob,
                                    Y: this.props.Y
                                });
                                return U5(aEb, { ...this.props,
                                    O: this.O,
                                    Wl: b,
                                    aD: this.aD,
                                    Gf: this.Gf,
                                    Oya: d,
                                    zv: f
                                })
                            }
                            constructor(...k) {
                                super(...k);
                                this.O = g6(() => {
                                    const l = this.props.item;
                                    var m = this.props.Y,
                                        n = m.uu;
                                    m = m.zoom;
                                    switch (n) {
                                        case "screen":
                                            return m;
                                        case "print":
                                            n = d.aMa(l);
                                            if (!n) return 1;
                                            ({
                                                width: n
                                            } = new __c.Dm(l,
                                                n.ob, {
                                                    zoom: m
                                                }));
                                            return n / l.config.width;
                                        default:
                                            throw new E(n);
                                    }
                                });
                                this.Gf = $5(l => U5("div", {
                                    className: "wKvivQ",
                                    children: U5(__c.jxa, { ...this.props,
                                        ...l,
                                        af: c
                                    })
                                }))
                            }
                        }
                        return {
                            Bia: h,
                            zv: f
                        }
                    },
                    cEb = function(a, b) {
                        if (b != null && b.qb != null && b.tb != null && b.Pb != null && b.dc != null) {
                            var c = a.ia(b.qb),
                                d = a.la(b.tb),
                                e = a.ia(b.Pb) + b.Pb.width - c;
                            a = a.la(b.dc) + b.dc.height - d;
                            return Ol({
                                top: d,
                                left: c,
                                width: e,
                                height: a
                            })
                        }
                    },
                    eEb = function(a) {
                        const b = a.Wl,
                            c = () => null;
                        return d => U5(dEb, { ...d,
                            Wl: b,
                            Gf: c
                        })
                    },
                    iEb = function(a) {
                        const b = {
                                transform: "translate(-1000px, -1000px) scale(0)"
                            },
                            c = {
                                ela: b,
                                iq: b,
                                ya: {},
                                Zj: {}
                            },
                            d = h6(() => a.wt.style || c, h => {
                                var k;
                                Object.assign(a.cV.style, h.ela);
                                Object.assign(a.rD.style, h.iq);
                                Object.assign(a.zw.style, h.ya);
                                Object.assign(a.Ew.style, h.Zj);
                                h = h === null || h === void 0 ? void 0 : (k = h.ya) === null || k === void 0 ? void 0 : k.textDecoration;
                                a.zw.classList.toggle("OQx3PQ", h === "underline");
                                a.zw.classList.toggle("_99ezUA", h === "line-through");
                                a.zw.classList.toggle("kppAqQ", h === "underline line-through")
                            }, {
                                fireImmediately: !0,
                                equals: fEb
                            }),
                            e = h6(() => a.f$, h => {
                                a.zw.classList.toggle("_84KvRA", !h);
                                a.cV.classList.toggle("_84KvRA", !h);
                                a.rD.classList.toggle("TL_RLA", !h)
                            }, {
                                fireImmediately: !0
                            }),
                            f = h6(() => a.renderer, h => {
                                a.GV && (h === null || h === void 0 ? void 0 : h.type) !== "react" ? (a.GV = void 0, a.tR.remove()) : a.Ew.innerHTML = "";
                                switch (h === null || h === void 0 ? void 0 : h.type) {
                                    case "react":
                                        a.GV = gEb(h.node, a.tR);
                                        a.Ew.appendChild(a.tR);
                                        break;
                                    case "dom":
                                        h.render(a.Ew);
                                        break;
                                    case void 0:
                                        break;
                                    default:
                                        throw new E(h);
                                }
                                a.zaa()
                            }, {
                                fireImmediately: !0
                            }),
                            g = hEb ? h6(() => a.b9, h => {
                                a.zw.classList.toggle("qxD1GA", h)
                            }, {
                                fireImmediately: !0
                            }) :
                            void 0;
                        return () => {
                            d();
                            e();
                            f();
                            g === null || g === void 0 || g()
                        }
                    },
                    fEb = function(a, b) {
                        return JSON.stringify(a) === JSON.stringify(b)
                    },
                    kEb = function(a) {
                        const b = a.ot,
                            c = a.Fv,
                            d = a.Wv,
                            e = a.LBa,
                            f = a.Fn,
                            g = new jEb(c),
                            h = (k, l) => f ? zDb(f, k, l) : !1;
                        return k => U5(i6, { ...k,
                            eF: h,
                            Wv: d,
                            Fv: c,
                            ot: b,
                            M9: g,
                            LBa: e === null || e === void 0 ? void 0 : e.get()
                        })
                    },
                    S5 = (a, b) => `${a.column.id}-${a.boundary}:${b.ea.id}-${b.boundary}`,
                    NDb = ({
                        Hf: a,
                        FH: b
                    }) => c => (0, __c.N)(__c.K9a, { ...c,
                        Hf: a,
                        FH: b
                    }),
                    j6 = __webpack_require__(443763),
                    lEb = j6.Fragment,
                    U5 = j6.jsx,
                    W5 = j6.jsxs;
                var mEb = __webpack_require__(358579).Z;
                var nEb = __webpack_require__,
                    oEb = nEb(993864),
                    X5 = nEb.n_x(oEb)();
                var $5 = __webpack_require__(446474).Pi;
                var k6 = __webpack_require__(875604),
                    l6 = k6.Component,
                    $Db = k6.PureComponent,
                    a6 = k6.useCallback,
                    e6 = k6.useEffect,
                    pEb = k6.useLayoutEffect,
                    Z5 = k6.useMemo,
                    m6 = k6.useRef,
                    qEb = k6.useState;
                var n6 = __webpack_require__(635872),
                    o6 = n6.Om,
                    rEb = n6.kq,
                    sEb = n6.YN;
                var p6 = __webpack_require__(519427),
                    q6 = p6.action,
                    f6 = p6.autorun,
                    r6 = p6.comparer,
                    g6 = p6.computed,
                    tEb = p6.createAtom,
                    s6 = p6.observable,
                    h6 = p6.reaction,
                    uEb = p6.untracked;
                var t6 = __webpack_require__(937763)._;
                var u6 = __webpack_require__(161563)._;
                var gEb = __webpack_require__(36281).createPortal;
                var vEb = $5(a => {
                        var b, c, d = a.sheet.direction === "rtl";
                        d = {
                            H2wykw: !d,
                            UweldA: d
                        };
                        const [e] = qEb(() => QC()), f = {
                            get: a6(() => {
                                var g;
                                const h = e === null || e === void 0 ? void 0 : (g = e.current) === null || g === void 0 ? void 0 : g.getBoundingClientRect();
                                var k, l;
                                g = {
                                    top: 0,
                                    left: 0,
                                    width: (k = h === null || h === void 0 ? void 0 : h.width) !== null && k !== void 0 ? k : 0,
                                    height: (l = h === null || h === void 0 ? void 0 : h.height) !== null && l !== void 0 ? l : 0
                                };
                                return Ol(g)
                            }, [e])
                        };
                        return W5("div", {
                            className: X5("nMvVqA", d),
                            children: [W5("div", {
                                ref: mEb(a.Jh, e),
                                className: "_0YOFPg",
                                children: [U5(a.Wl, { ...a,
                                    viewport: f
                                }), U5("div", {
                                    className: X5("Gdl7fQ", d),
                                    children: (c = a.hia) === null || c === void 0 ? void 0 : (b = c.get()) === null || b === void 0 ? void 0 : b.map((g, h) => U5(g, {}, h))
                                })]
                            }), a.L5a === "visible" && W5(lEb, {
                                children: [U5("div", {
                                    className: X5("_32sKQw", d),
                                    children: U5(a.GDa, { ...a
                                    })
                                }), U5("div", {
                                    className: X5("xdIsTQ", d),
                                    children: U5(a.JDa, { ...a
                                    })
                                }), U5("div", {
                                    className: X5("rsTRSA", d),
                                    children: U5(a.IDa, { ...a
                                    })
                                })]
                            })]
                        })
                    }),
                    wEb = $5(a => {
                        a = a.content;
                        __c.w(a.type === "text2" || a.type === "text3");
                        switch (a.type) {
                            case "text2":
                                return a.value.T;
                            case "text3":
                                return __c.nv.ka(a.value).cells.T();
                            default:
                                throw new E(a);
                        }
                    });
                var xEb = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.996 19.995a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM13.762 9.17a.75.75 0 0 1 1.06 1.06l-1.766 1.766 1.766 1.767a.75.75 0 0 1-1.06 1.06l-1.766-1.766-1.767 1.766a.75.75 0 0 1-1.06-1.06l1.766-1.767L9.17 10.23a.75.75 0 0 1 1.06-1.06l1.767 1.766 1.766-1.766Z" fill="currentColor"/></svg>';
                var LDb = __c.OS({
                    medium: xEb
                });
                var ODb = (a, b) => __c.Owa((c, d) => {
                        const e = c.content;
                        c = c.context;
                        if (e.value.isEmpty)
                            for (; d.lastChild;) d.lastChild.remove();
                        else({
                            pf: c
                        } = __c.tg(__c.$g, c.attrs)), c === "wrap" && (d = d.appendChild(document.createElement("div")), d.className = "dt4Dlg"), a.render({
                            container: d,
                            text: e.value,
                            $a: void 0,
                            writingMode: 1,
                            Ic: "start",
                            $e: yEb(e, c),
                            Pa: b
                        })
                    }),
                    yEb = o6((a, b) => {
                        if (b === "wrap") return [];
                        a = a.value.T.split("\n").map(c => c.length + 1);
                        a.pop();
                        return a
                    }, {
                        equals: r6.structural
                    });
                var zEb, AEb, BEb, V5;
                new(zEb = class extends t6 {
                    constructor() {
                        super(V5);
                        AEb()
                    }
                }, (() => {
                    class a extends(BEb = l6) {
                        static A(b) {
                            P(b, {
                                pf: g6
                            })
                        }
                        get pf() {
                            return __c.tg(__c.$g, this.props.context.attrs).pf
                        }
                        render() {
                            var b = this.props.content;
                            const c = this.props.context;
                            if (b.value.isEmpty) return null;
                            b = U5(this.props.Gf, {
                                content: b,
                                ea: c.container.ea,
                                col: c.container.column,
                                pf: this.pf
                            });
                            return this.pf === "wrap" ? U5("div", {
                                className: "dt4Dlg",
                                children: b
                            }) : b
                        }
                        constructor(...b) {
                            super(...b);
                            a.A(this)
                        }
                    }({
                        c: [V5, AEb]
                    } = u6(a, [], [Ac], BEb))
                })(), zEb);
                var CEb = __c.Ik * 5,
                    DEb = __c.Ik * 4;
                var TDb = class {
                    il({
                        size: a,
                        scale: b,
                        Y$: c
                    }) {
                        b = c ? Math.max(c, b) : b;
                        return a === "large" ? CEb * b : DEb * b
                    }
                    constructor() {
                        this.BOa = o6((a, b) => {
                            var c, d;
                            b = b.get();
                            return b != null && a.layout.rows.count() === (((c = b.rows) === null || c === void 0 ? void 0 : c.size) || 0) && a.layout.cols.count() === (((d = b.columns) === null || d === void 0 ? void 0 : d.size) || 0)
                        });
                        this.Gca = rEb(a => {
                            var b;
                            return new Set(((b = a.get()) === null || b === void 0 ? void 0 : b.columns) || [])
                        }, {
                            equals: __c.Xk
                        });
                        this.Ica = rEb(a => {
                            var b;
                            return new Set(((b = a.get()) === null || b === void 0 ? void 0 :
                                b.rows) || [])
                        }, {
                            equals: __c.Xk
                        });
                        this.GMa = o6((a, b) => {
                            var {
                                cells: c
                            } = b.get() || {};
                            if (!c) return new Set;
                            if (this.Ica(b).size > 0) return new Set(a.layout.cols);
                            b = this.Gca(b);
                            const d = new Set;
                            for (const e of c) {
                                c = a.layout.cells.get(e.ea, e.column);
                                for (const f of HDb(c ? c.span.qb : e.column, c ? c.span.Pb : e.column, a.layout.cols))(b.size === 0 || b.has(f)) && d.add(f)
                            }
                            return d
                        }, {
                            equals: __c.Xk
                        });
                        this.HMa = o6((a, b) => {
                            var {
                                cells: c
                            } = b.get() || {};
                            if (!c) return new Set;
                            if (this.Gca(b).size > 0) return new Set(a.layout.rows);
                            b = this.Ica(b);
                            const d = new Set;
                            for (const e of c) {
                                c = a.layout.cells.get(e.ea, e.column);
                                for (const f of HDb(c ? c.span.tb : e.ea, c ? c.span.dc : e.ea, a.layout.rows))(b.size === 0 || b.has(f)) && d.add(f)
                            }
                            return d
                        }, {
                            equals: __c.Xk
                        })
                    }
                };
                var EEb, FEb, GEb, HEb, IEb, JEb, KEb = parseInt("4px", 10) || 4,
                    b6;
                new(EEb = class extends t6 {
                    constructor() {
                        super(b6);
                        GEb()
                    }
                }, (() => {
                    class a extends(HEb = l6) {
                        static A(b) {
                            P(b, {
                                zi: g6,
                                rs: g6,
                                wS: g6
                            })
                        }
                        get zi() {
                            return this.props.sheet.direction === "rtl"
                        }
                        get rs() {
                            var b;
                            const c = (b = this.props.fl) === null || b === void 0 ? void 0 : b.get();
                            if (c != null && c.length !== 0) return new __c.jJ(c)
                        }
                        get wS() {
                            var b, c, d;
                            return (c = (d = this.props).F8) === null || c === void 0 ? void 0 : (b = c.call(d)) === null || b === void 0 ? void 0 : b.get()
                        }
                        render() {
                            return U5(__c.Fk, {
                                qm: "light",
                                light: "light",
                                Do: "light",
                                dark: "light",
                                children: this.HGa
                            })
                        }
                        constructor(...b) {
                            super(...b);
                            this.onMouseMove = (b6.A(this), q6(c => {
                                const {
                                    onMouseMove: d,
                                    sheet: e,
                                    wd: f = 1
                                } = this.props;
                                d === null || d === void 0 || d(c, e, "column", f)
                            }));
                            this.onMouseLeave = q6(c => {
                                var d, e;
                                (d = (e = this.props).onMouseLeave) === null || d === void 0 || d.call(e, c)
                            });
                            this.Nwa = (c, d, e) => {
                                const {
                                    sheet: f,
                                    il: g,
                                    gx: h,
                                    U5a: k,
                                    wd: l = 1,
                                    Td: m = 1
                                } = this.props, n = {
                                    jNbTIg: !this.zi,
                                    gtA7Dw: this.zi
                                }, p = (e === null || e === void 0 ? 0 : e.sticky) ? this.zi ? {
                                    right: 0
                                } : {
                                    left: 0
                                } : void 0;
                                var q;
                                const r = (e === null || e === void 0 ? 0 : e.sticky) ? (q = this.wS) !== null && q !== void 0 ? q : p : void 0;
                                let t = -1;
                                return W5("div", {
                                    style: r,
                                    className: X5("Vt2_4w", n, {
                                        Tn3nUw: e === null || e === void 0 ? void 0 : e.sticky
                                    }),
                                    onMouseMove: this.onMouseMove,
                                    onMouseLeave: this.onMouseLeave,
                                    children: [f.layout.cols.map(v => {
                                        var u;
                                        t++;
                                        if (!(c && f.layout.cols.Cd(v, c) < 0 || d && f.layout.cols.Cd(v, d) > 0)) return U5(LEb, {
                                            col: v,
                                            label: __c.kC(t),
                                            Vt: k === null || k === void 0 ? void 0 : (u = k.get()) === null || u === void 0 ? void 0 : u.get(v),
                                            il: g,
                                            gx: h,
                                            wd: l,
                                            Td: m
                                        }, v.id)
                                    }), (e === null || e === void 0 ? void 0 : e.sticky) && U5("div", {
                                        style: {
                                            width: KEb * l
                                        },
                                        className: X5("HBvlug", "ru3tFQ",
                                            n)
                                    })]
                                })
                            };
                            this.HGa = c => {
                                var d;
                                const e = this.props.sheet,
                                    f = e.view.freeze.fA ? e.layout.$c.get(e.view.freeze.fA) : void 0,
                                    g = {
                                        jNbTIg: !this.zi,
                                        gtA7Dw: this.zi
                                    };
                                return W5("div", {
                                    ref: (d = this.rs) === null || d === void 0 ? void 0 : d.co,
                                    className: X5("xhBZaw", g, c.className),
                                    children: [f && this.Nwa(void 0, f, {
                                        sticky: !0
                                    }), this.Nwa(f ? e.cols.next(f) : void 0)]
                                })
                            }
                        }
                    }({
                        c: [b6, GEb]
                    } = u6(a, [], [Ac], HEb))
                })(), EEb);
                var c6;
                new(FEb = class extends t6 {
                    constructor() {
                        super(c6);
                        IEb()
                    }
                }, (() => {
                    class a extends(JEb = l6) {
                        static A(b) {
                            P(b, {
                                zi: g6,
                                rs: g6,
                                wS: g6
                            })
                        }
                        get zi() {
                            return this.props.sheet.direction === "rtl"
                        }
                        get rs() {
                            var b;
                            const c = (b = this.props.fl) === null || b === void 0 ? void 0 : b.get();
                            if (c != null && c.length !== 0) return new __c.jJ(c)
                        }
                        get wS() {
                            var b, c, d;
                            return (c = (d = this.props).F8) === null || c === void 0 ? void 0 : (b = c.call(d)) === null || b === void 0 ? void 0 : b.get()
                        }
                        render() {
                            return U5(__c.Fk, {
                                qm: "light",
                                light: "light",
                                Do: "light",
                                dark: "light",
                                children: this.TTa
                            })
                        }
                        constructor(...b) {
                            super(...b);
                            this.onMouseMove = (c6.A(this), q6(c => {
                                const {
                                    onMouseMove: d,
                                    sheet: e,
                                    Td: f = 1
                                } = this.props;
                                d === null || d === void 0 || d(c, e, "row", f)
                            }));
                            this.onMouseLeave = q6(c => {
                                var d, e;
                                (d = (e = this.props).onMouseLeave) === null || d === void 0 || d.call(e, c)
                            });
                            this.Qwa = (c, d, e) => {
                                const {
                                    sheet: f,
                                    il: g,
                                    gx: h,
                                    wd: k = 1,
                                    Td: l = 1
                                } = this.props, m = {
                                    jNbTIg: !this.zi,
                                    gtA7Dw: this.zi
                                }, n = (e === null || e === void 0 ? 0 : e.sticky) ? {
                                    top: 0
                                } : void 0;
                                var p;
                                const q = (e === null || e === void 0 ? 0 : e.sticky) ? (p = this.wS) !== null && p !== void 0 ? p : n : void 0;
                                let r = -1;
                                return W5("div", {
                                    style: q,
                                    className: X5("_93roJg", m, {
                                        Tn3nUw: e === null || e === void 0 ? void 0 : e.sticky
                                    }),
                                    onMouseMove: this.onMouseMove,
                                    onMouseLeave: this.onMouseLeave,
                                    children: [f.rows.map(t => {
                                        r++;
                                        if (!(c && f.rows.Cd(t, c) < 0 || d && f.rows.Cd(t, d) > 0)) return U5(MEb, {
                                            ea: t,
                                            label: `${r+1}`,
                                            gx: h,
                                            il: g,
                                            wd: k,
                                            Td: l
                                        }, t.id)
                                    }), (e === null || e === void 0 ? void 0 : e.sticky) && U5("div", {
                                        style: {
                                            height: KEb * l
                                        },
                                        className: X5("HBvlug", "koz2Hg")
                                    })]
                                })
                            };
                            this.TTa = c => {
                                var d;
                                const e = this.props.sheet,
                                    f = e.view.freeze.TK ? e.layout.pd.get(e.view.freeze.TK) : void 0,
                                    g = {
                                        jNbTIg: !this.zi,
                                        gtA7Dw: this.zi
                                    };
                                return W5("div", {
                                    ref: (d = this.rs) === null || d === void 0 ? void 0 : d.co,
                                    className: X5("An9VeA", g, c.className),
                                    children: [f && this.Qwa(void 0, f, {
                                        sticky: !0
                                    }), this.Qwa(f ? e.rows.next(f) : void 0)]
                                })
                            }
                        }
                    }({
                        c: [c6, IEb]
                    } = u6(a, [], [Ac], JEb))
                })(), FEb);
                var LEb = $5(a => {
                        const b = a.label,
                            c = a.Vt,
                            d = a.col,
                            e = a.gx,
                            f = a.il,
                            g = a.wd;
                        a = a.Td;
                        const h = f(a),
                            k = sEb(() => e(d));
                        return U5("div", {
                            className: X5("_83Rssw", "d2uLIA", Y5(k)),
                            style: {
                                width: d.width * g,
                                height: h
                            },
                            children: U5(QDb, {
                                label: b,
                                Vt: c,
                                width: d.width,
                                height: f(1),
                                scale: a,
                                Ila: k
                            })
                        })
                    }),
                    MEb = $5(a => {
                        const b = a.label,
                            c = a.ea,
                            d = a.il,
                            e = a.gx,
                            f = a.wd;
                        a = a.Td;
                        const g = d(f),
                            h = sEb(() => e(c));
                        return U5("div", {
                            className: X5("_83Rssw", "JhBzyw", Y5(h)),
                            style: {
                                width: g,
                                height: c.height * a
                            },
                            children: U5(QDb, {
                                label: b,
                                width: d(1),
                                height: c.height,
                                scale: f,
                                Ila: h
                            })
                        })
                    });
                var NEb = '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><circle stroke="currentColor" cx="6" cy="6" r="5.5"/></svg>';
                var OEb = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle stroke="currentColor" cx="12" cy="12" r="9.25" stroke-width="1.5"/></svg>';
                var RDb = __c.OS({
                    Mp: NEb,
                    medium: OEb
                });
                var PEb, QEb, REb, d6;
                new(PEb = class extends t6 {
                    constructor() {
                        super(d6);
                        QEb()
                    }
                }, (() => {
                    class a extends(REb = l6) {
                        static A(b) {
                            P(b, {
                                kd: g6.struct
                            })
                        }
                        render() {
                            const b = this.props.element;
                            return U5(this.props.Wl, {
                                sheet: b.W.config,
                                container: b,
                                NU: "visible",
                                fl: this.props.fl,
                                Wo: this.props.Wo,
                                Xo: this.props.Xo,
                                O: this.props.O,
                                kd: this.kd,
                                Gf: this.props.Gf,
                                Jz: void 0
                            })
                        }
                        get kd() {
                            return __c.wC(this.props.element.W.Da, this.props.yd)
                        }
                        constructor(...b) {
                            super(...b);
                            a.A(this)
                        }
                    }({
                        c: [d6, QEb]
                    } = u6(a, [], [Ac], REb))
                })(), PEb);
                var SEb = class {
                    constructor() {
                        this.s0 = new WeakMap;
                        this.aMa = a => this.s0.get(a);
                        this.Bya = (a, b) => {
                            this.s0.set(a, b)
                        };
                        this.tGa = (a, b) => {
                            const c = this.s0.get(a);
                            c && c.Y === b.Y && c.ob === b.ob && this.s0.delete(a)
                        }
                    }
                };
                var v6 = parseInt("4px", 10) || 4,
                    TEb = $5(({
                        sheet: a,
                        O: b,
                        range: c,
                        wq: d,
                        xq: e
                    }) => {
                        if (c != null && (d || e)) {
                            var f;
                            b = (f = b === null || b === void 0 ? void 0 : b.get()) !== null && f !== void 0 ? f : 1;
                            f = a.direction === "rtl";
                            var g = {
                                ZJ0G6w: !f,
                                dOI_jA: f
                            };
                            if (d && e) return d = a.la(c.dc) + c.dc.height, a = a.ia(c.Pb) + c.Pb.width, U5("div", {
                                style: {
                                    top: d * b,
                                    width: a * b,
                                    height: v6 * b
                                },
                                className: X5("aX8dhQ", "VGcLng")
                            });
                            if (d) return c = a.ia(c.Pb) + c.Pb.width, U5("div", {
                                style: {
                                    width: v6 * b,
                                    height: a.height * b,
                                    ...(f ? {
                                        right: c * b
                                    } : {
                                        left: c * b
                                    })
                                },
                                className: X5("aX8dhQ", "gl1RPg",
                                    g)
                            });
                            if (e) return c = a.la(c.dc) + c.dc.height, U5("div", {
                                style: {
                                    top: c * b,
                                    width: a.width * b,
                                    height: v6 * b
                                },
                                className: X5("aX8dhQ", "VGcLng")
                            })
                        }
                    });
                var w6 = ({
                        sheet: a,
                        range: b,
                        O: c,
                        children: d
                    }) => {
                        const e = T5();
                        WDb({
                            sheet: a,
                            O: c,
                            range: b,
                            Jh: e
                        });
                        return U5("div", {
                            ref: e,
                            className: X5("nstn2A", a.direction === "rtl" ? "NgnL2Q" : "f8jAGQ"),
                            children: d
                        })
                    },
                    UEb = ({
                        sheet: a,
                        range: b,
                        O: c,
                        children: d
                    }) => {
                        const e = T5();
                        WDb({
                            sheet: a,
                            O: c,
                            range: b,
                            Jh: e
                        });
                        a = a.direction === "rtl" ? "NgnL2Q" : "f8jAGQ";
                        return U5("div", {
                            className: X5("nstn2A", a, "_9sodyg"),
                            children: U5("div", {
                                ref: e,
                                className: X5("nstn2A", a),
                                children: d
                            })
                        })
                    };
                var YDb = $5(({
                        sheet: a,
                        children: b,
                        zv: c
                    }) => {
                        const d = a6(f => {
                                c.Sca(a, f)
                            }, [c, a]),
                            e = a6(f => {
                                f != null ? c.Av.set(a, f) : c.Av.delete(a)
                            }, [c, a]);
                        return U5(__c.xcb, {
                            direction: a.config.direction === "rtl" ? "rtl" : "ltr",
                            onScroll: d,
                            bC: e,
                            children: b
                        })
                    }),
                    XDb = class {
                        Sca(a, b) {
                            this.onScroll && this.onScroll(a);
                            this.TR.set(a, b)
                        }
                        constructor(a) {
                            this.onScroll = a;
                            this.Av = new WeakMap;
                            this.TR = s6.map(new Map, {
                                deep: !1
                            });
                            this.scrollTo = q6((b, c) => {
                                b = this.Av.get(b);
                                b === null || b === void 0 || b.scrollTo({
                                    left: Math.floor(c)
                                })
                            })
                        }
                    };
                var aEb = $5(a => {
                    const b = a.item,
                        c = a.fl,
                        d = a.xe,
                        e = a.measureRef,
                        f = a.O,
                        g = a.Cqa,
                        h = a.ob,
                        k = a.Wo,
                        l = a.Xo,
                        m = a.Wl,
                        n = a.aD,
                        p = a.Gf,
                        q = a.yd,
                        r = a.zv;
                    a = Z5(() => __c.wC(b.Da, q), [b, q]);
                    const t = Z5(() => $5(({
                            sheet: y,
                            range: z,
                            wq: A,
                            xq: D
                        }) => U5(w6, {
                            sheet: y,
                            range: z,
                            O: f,
                            children: U5(TEb, {
                                sheet: y,
                                O: f,
                                range: z,
                                wq: A,
                                xq: D
                            })
                        })), [f]),
                        v = IDb(b.config),
                        u = f.get(),
                        x = Math.min(v.width * u, h.width);
                    e6(() => f6(() => {
                        var y = b.config.view.freeze.fA ? b.config.layout.$c.get(b.config.view.freeze.fA) : void 0;
                        if (y != null)
                            if (b.config.ia(y) + y.width > x) {
                                if (y = r.Av.get(b)) y.style.overflowX =
                                    "hidden"
                            } else if (y = r.Av.get(b)) y.style.overflowX = "scroll"
                    }), [b, h.width, r, u, x]);
                    return U5("div", {
                        ref: e,
                        className: "E8r86A",
                        style: {
                            width: x
                        },
                        children: U5(n, {
                            sheet: b,
                            children: U5("div", {
                                ref: g,
                                className: "cXTiJA",
                                style: {
                                    width: v.width * u,
                                    height: v.height * u
                                },
                                children: U5("div", {
                                    className: "W1ir5A",
                                    children: U5(m, {
                                        container: d.hh(b),
                                        sheet: b.config,
                                        NU: "visible",
                                        fl: c,
                                        O: f,
                                        Wo: k,
                                        Xo: l,
                                        kd: a,
                                        Gf: p,
                                        Jz: t
                                    })
                                })
                            })
                        })
                    })
                });
                var VEb = $5(({
                    page: a,
                    range: b,
                    vv: c
                }) => {
                    const d = cEb(a.sheet, b);
                    return U5("div", {
                        className: "Gi9pfA",
                        children: a.elements.map((e, f) => d == null ? c(e, f) : __c.Ml(Ol(e)).nl(d) && c(e, f))
                    })
                });
                var WEb = new __c.lU,
                    x6 = a => CEb * a,
                    XEb = () => "primary-default",
                    dEb = $5(({
                        container: a,
                        fl: b,
                        Wo: c,
                        Xo: d,
                        WO: e,
                        O: f,
                        viewport: g,
                        gVa: h,
                        Wl: k,
                        Gf: l,
                        vv: m,
                        O_: n,
                        k_a: p,
                        lZa: q,
                        kZa: r
                    }) => {
                        const t = a.page,
                            v = Z5(() => $5(({
                                sheet: u,
                                range: x,
                                wq: y,
                                xq: z
                            }) => W5(lEb, {
                                children: [U5(w6, {
                                    sheet: t.sheet,
                                    range: x,
                                    O: f,
                                    children: U5(TEb, {
                                        sheet: u,
                                        O: f,
                                        range: x,
                                        wq: y,
                                        xq: z
                                    })
                                }), W5(UEb, {
                                    sheet: t.sheet,
                                    range: x,
                                    O: f,
                                    children: [p && U5(p, {}), m && U5(VEb, {
                                        page: t,
                                        vv: m,
                                        range: x
                                    }), r && U5(r, {}), n && n()]
                                }), q && x && U5(w6, {
                                    sheet: t.sheet,
                                    range: x,
                                    O: f,
                                    children: U5(q, {
                                        range: x
                                    })
                                })]
                            })), [t, f, p, m, r, n, q]);
                        return h ? U5(YEb, {
                            container: a,
                            viewport: g,
                            O: f,
                            fl: b,
                            Wo: c,
                            Xo: d,
                            Wl: k,
                            Gf: l,
                            Jz: v
                        }) : U5(k, {
                            sheet: t.sheet,
                            container: a,
                            NU: "hidden",
                            fl: b,
                            Wo: c,
                            Xo: d,
                            WO: e,
                            O: f,
                            viewport: g,
                            Gf: l,
                            Jz: v
                        })
                    }),
                    YEb = $5(a => {
                        const b = a.container,
                            c = a.O,
                            d = a.viewport,
                            e = a.fl,
                            f = a.Wo,
                            g = a.Xo,
                            h = a.Wl,
                            k = a.Gf;
                        a = a.Jz;
                        const l = b.page,
                            m = l.sheet.direction === "rtl",
                            n = m6(null),
                            p = m6(null),
                            q = m6(null);
                        e6(() => {
                            const y = y6({
                                sheet: l.sheet,
                                U0: !0,
                                V0: !0,
                                O: c,
                                viewport: d
                            });
                            return h6(() => y === null || y === void 0 ? void 0 : y.get(), z => {
                                const A = n.current;
                                if (z && A) {
                                    var D =
                                        l.sheet.direction === "rtl",
                                        F;
                                    A.style.position = (F = z.position) !== null && F !== void 0 ? F : "sticky";
                                    var H;
                                    A.style.top = (H = z.top) !== null && H !== void 0 ? H : "0px";
                                    var G, J;
                                    D ? A.style.right = (G = z.right) !== null && G !== void 0 ? G : "0px" : A.style.left = (J = z.left) !== null && J !== void 0 ? J : "0px";
                                    var M;
                                    A.style.transform = (M = z.transform) !== null && M !== void 0 ? M : ""
                                }
                            })
                        }, [l.sheet, c, d]);
                        e6(() => {
                            const y = y6({
                                sheet: l.sheet,
                                U0: !1,
                                V0: !0,
                                O: c,
                                viewport: d
                            });
                            return h6(() => y === null || y === void 0 ? void 0 : y.get(), z => {
                                const A = q.current;
                                if (z && A) {
                                    var D;
                                    A.style.position =
                                        (D = z.position) !== null && D !== void 0 ? D : "sticky";
                                    var F;
                                    A.style.top = (F = z.top) !== null && F !== void 0 ? F : "0px";
                                    var H;
                                    A.style.transform = (H = z.transform) !== null && H !== void 0 ? H : ""
                                }
                            })
                        }, [l.sheet, c, d]);
                        e6(() => {
                            const y = y6({
                                sheet: l.sheet,
                                U0: !0,
                                V0: !1,
                                O: c,
                                viewport: d
                            });
                            return h6(() => y === null || y === void 0 ? void 0 : y.get(), z => {
                                const A = p.current;
                                if (z && A) {
                                    var D = l.sheet.direction === "rtl",
                                        F;
                                    A.style.position = (F = z.position) !== null && F !== void 0 ? F : "sticky";
                                    var H, G;
                                    D ? A.style.right = (H = z.right) !== null && H !== void 0 ? H : "0px" : A.style.left = (G =
                                        z.left) !== null && G !== void 0 ? G : "0px";
                                    var J;
                                    A.style.transform = (J = z.transform) !== null && J !== void 0 ? J : ""
                                }
                            })
                        }, [l.sheet, c, d]);
                        const r = a6((y, z, A) => y6({
                                sheet: y,
                                U0: z,
                                V0: A,
                                O: c,
                                viewport: d
                            }), [c, d]),
                            t = Z5(() => r ? () => r(l.sheet, !0, !1) : void 0, [r, l.sheet]),
                            v = Z5(() => r ? () => r(l.sheet, !1, !0) : void 0, [r, l.sheet]);
                        var u;
                        const x = (u = c === null || c === void 0 ? void 0 : c.get()) !== null && u !== void 0 ? u : 1;
                        return W5("div", {
                            className: X5("OsKKIQ", "cbOp6Q"),
                            children: [U5("div", {
                                className: "VDFv_A",
                                children: U5(h, {
                                    sheet: l.sheet,
                                    container: b,
                                    NU: "hidden",
                                    fl: e,
                                    Wo: f,
                                    Xo: g,
                                    WO: r,
                                    O: c,
                                    viewport: d,
                                    Gf: k,
                                    Jz: a
                                })
                            }), U5("div", {
                                ref: n,
                                className: "_688KWg",
                                children: U5(SDb, {
                                    zi: m,
                                    eqa: !1,
                                    il: x6,
                                    scale: x
                                })
                            }), U5("div", {
                                ref: q,
                                className: "m0cT1w",
                                children: U5(b6, {
                                    sheet: l.sheet,
                                    wd: x,
                                    Td: x,
                                    il: x6,
                                    gx: XEb,
                                    Tx: WEb,
                                    F8: t
                                })
                            }), U5("div", {
                                ref: p,
                                className: "zm537g",
                                children: U5(c6, {
                                    sheet: l.sheet,
                                    wd: x,
                                    Td: x,
                                    il: x6,
                                    gx: XEb,
                                    Tx: WEb,
                                    F8: v
                                })
                            })]
                        })
                    }),
                    y6 = ({
                        sheet: a,
                        U0: b,
                        V0: c,
                        O: d,
                        viewport: e
                    }) => g6(() => {
                        var f = e === null || e === void 0 ? void 0 : __c.Wl(e.get()),
                            g;
                        const h = (g = d === null || d === void 0 ? void 0 : d.get()) !== null &&
                            g !== void 0 ? g : 1;
                        if (!f) return {};
                        g = {};
                        f = new pl(f.left, f.top);
                        const k = a.direction === "rtl";
                        g.position = "relative";
                        c && (g.top = "0px");
                        b && (k ? g.right = "0px" : g.left = "0px");
                        g.transform = `translate(${b?f.x*h:0}px, ${c?f.y*h:0}px)`;
                        return g
                    });
                var jEb = class {
                    constructor(a) {
                        this.Fv = a;
                        this.iGa = __c.eW;
                        this.ILa = o6((b, c, d, e) => {
                            d = d.get();
                            const f = new WeakMap;
                            for (let t = 0; t < d.length; t++) {
                                var g = d[t],
                                    h = this.DLa(b, c, g);
                                if (h) {
                                    switch (h) {
                                        case "start":
                                        case "justify":
                                            var k = d[t + 1];
                                            if (k == null || !TM(b, c, k)) continue;
                                            break;
                                        case "center":
                                            k = d[t + 1];
                                            if (k == null || !TM(b, c, k)) continue;
                                            k = d[t - 1];
                                            if (k == null || !TM(b, c, k)) continue;
                                            break;
                                        case "end":
                                            k = d[t - 1];
                                            if (k == null || !TM(b, c, k)) continue;
                                            break;
                                        default:
                                            throw new E(h);
                                    }
                                    if (k = e(c, g)) {
                                        var l = k.width + (h === "center" ? 0 : this.iGa);
                                        if (!(g.width >
                                                l)) {
                                            switch (h) {
                                                case "start":
                                                case "justify":
                                                    h = b.ia(g);
                                                    k = h + l;
                                                    break;
                                                case "center":
                                                    k = b.ia(g) + g.width / 2;
                                                    h = k - l / 2;
                                                    k += l / 2;
                                                    break;
                                                case "end":
                                                    k = b.ia(g) + g.width;
                                                    h = k - l;
                                                    break;
                                                default:
                                                    throw new E(h);
                                            }
                                            for (l = d.indexOf(g); l >= 0; l--) {
                                                var m = d[l],
                                                    n = l - 1 < 0 || TM(b, c, d[l - 1]),
                                                    p;
                                                if (p = m === g || TM(b, c, m)) {
                                                    p = h;
                                                    var q = k,
                                                        r = b.ia(m);
                                                    p = p < r && r < q
                                                }
                                                if (p && n) f.set(m, 1);
                                                else break
                                            }
                                            for (g = d.indexOf(g) + 1; g < d.length; g++) {
                                                l = d[g];
                                                if (m = TM(b, c, l)) m = h, n = k, p = b.ia(l), m = m < p && p < n;
                                                if (m) f.set(l, 1);
                                                else break
                                            }
                                        }
                                    }
                                }
                            }
                            return f
                        });
                        this.DLa = (b, c, d) => {
                            var e, f;
                            const g =
                                b.layout.cells.get(c, d);
                            if (g && (g.ref.content.ref || g.ref.pa.ref) && g.span.tb === g.span.dc && g.span.qb === g.span.Pb) {
                                var h = this.Fv.yq(b, c, d);
                                b = this.Fv.B8(b, c, d, __c.ah({
                                    pf: void 0,
                                    textAlign: void 0
                                }));
                                var {
                                    pf: k,
                                    textAlign: l
                                } = __c.tg(__c.$g, b);
                                if (k === "overflow") return __c.Pwa(l, (e = g.ref.content.ref) === null || e === void 0 ? void 0 : e.type, (f = g.ref.pa.ref) === null || f === void 0 ? void 0 : f.type, h ? () => h.Qh.type : void 0)
                            }
                        }
                    }
                };
                var ZEb = $5(function(a) {
                    const b = a.sheet;
                    var c = a.Hg;
                    const d = a.aYa,
                        e = a.O,
                        f = a.M9,
                        g = a.tLa;
                    a = a.overflow;
                    const h = T5();
                    pEb(() => f6(() => {
                        const p = C(h.current);
                        var q;
                        const r = (q = e === null || e === void 0 ? void 0 : e.get()) !== null && q !== void 0 ? q : 1;
                        q = b.height;
                        p.style.width = `${b.width*r}px`;
                        p.style.height = `${q*r}px`
                    }), [h, e, b]);
                    const k = a6(p => f.ILa(b, p, d, g), [f, b, d, g]);
                    var l = a6((p, q) => {
                        var r, t;
                        return (t = (r = k(p)) === null || r === void 0 ? void 0 : r.get(q)) !== null && t !== void 0 ? t : 0
                    }, [k]);
                    c = FDb(b, c, d, l);
                    l = b.width;
                    const m = b.height,
                        n = b.direction ===
                        "rtl";
                    return U5("svg", {
                        ref: h,
                        role: "presentation",
                        className: X5("c6a1eQ", {
                            H_CtIQ: !n,
                            _8_56PQ: n,
                            _3NnFzw: a === "visible",
                            JMH1ng: a === "hidden"
                        }),
                        viewBox: `0 0 ${l} ${m}`,
                        strokeLinecap: "butt",
                        strokeLinejoin: "miter",
                        children: c.map(({
                            lines: p,
                            color: q,
                            weight: r,
                            Kh: t,
                            Lh: v
                        }) => U5("path", {
                            stroke: q,
                            strokeDasharray: t,
                            strokeDashoffset: v,
                            strokeWidth: r,
                            d: p.map(({
                                p1: u,
                                p2: x
                            }) => `M ${u.x} ${u.y} L ${x.x} ${x.y}`).join(" ")
                        }, `${q}-${r}-${t}-${v}`))
                    })
                });
                var $Eb;
                $Eb = Symbol.iterator;
                var aFb = class {
                    get size() {
                        return this.D0
                    }
                    get([a, b]) {
                        return (a = this.Ex.get(a)) ? a.get(b) : void 0
                    }
                    has([a, b]) {
                        a = this.Ex.get(a);
                        return a == null ? !1 : a.has(b)
                    }
                    set([a, b], c) {
                        let d = this.Ex.get(a);
                        d == null && (d = new Map, this.Ex.set(a, d));
                        d.set(b, c);
                        this.D0++;
                        return this
                    }
                    clear() {
                        this.Ex.clear();
                        this.D0 = 0
                    }
                    delete([a, b]) {
                        const c = this.Ex.get(a);
                        if (c == null || !c.delete(b)) return !1;
                        this.D0--;
                        c.size === 0 && this.Ex.delete(a);
                        return !0
                    }
                    forEach(a) {
                        for (const [b, c] of this.Ex)
                            for (const [d, e] of c) a([b, d], e)
                    }*[$Eb]() {
                        for (const [a, b] of this.Ex)
                            for (const [c,
                                    d
                                ] of b) yield [
                                [a, c], d
                            ]
                    }
                    constructor() {
                        this.D0 = 0;
                        this.Ex = new Map
                    }
                };
                var bFb, cFb, dFb, eFb, fFb, gFb, hFb, hEb = __c.Mz("285688d5", !1),
                    iFb, jFb = class extends l6 {
                        render() {
                            const {
                                oX: a,
                                ...b
                            } = this.props, c = this.props.sheet;
                            return W5("div", {
                                ref: this.Qya,
                                className: X5("ZTz_iA", c.direction === "ltr" ? "TA4X7w" : "WvuqMw"),
                                children: [(a === null || a === void 0 ? void 0 : a.ska) && U5(z6, { ...b,
                                    sheet: c,
                                    range: a.ska.range,
                                    wq: !0,
                                    xq: !0,
                                    className: "_0C8M3w"
                                }), (a === null || a === void 0 ? void 0 : a.TBa) && U5(z6, { ...b,
                                    sheet: c,
                                    range: a.TBa.range,
                                    wq: !1,
                                    xq: !0,
                                    className: "_7n44yg"
                                }), (a === null || a === void 0 ? void 0 : a.gqa) && U5(z6, { ...b,
                                    sheet: c,
                                    range: a.gqa.range,
                                    wq: !0,
                                    xq: !1,
                                    className: "fF5r6w"
                                }), (a === null || a === void 0 ? void 0 : a.VAa) && U5(z6, { ...b,
                                    sheet: c,
                                    range: a.VAa.range,
                                    wq: !1,
                                    xq: !1,
                                    className: "llILYw"
                                })]
                            })
                        }
                        componentDidMount() {
                            const a = f6(() => {
                                var b = this.props,
                                    c = b.O;
                                b = b.sheet;
                                const d = this.Qya.current;
                                d && (c = c ? c.get() : 1, d.style.width = `${b.width*c}px`, d.style.height = `${b.height*c}px`)
                            });
                            __c.kc(this, [a])
                        }
                        constructor(...a) {
                            super(...a);
                            this.Qya = QC()
                        }
                    };
                ({
                    c: [iFb, dFb]
                } = u6(jFb, [], [Ac], l6));
                dFb();
                var z6;
                new(bFb = class extends t6 {
                    constructor() {
                        super(z6);
                        eFb()
                    }
                }, (() => {
                    class a extends(fFb = l6) {
                        static A(b) {
                            P(b, {
                                $ca: g6,
                                bounds: g6
                            })
                        }
                        get $ca() {
                            const b = this.props.viewport,
                                c = this.props.wq,
                                d = this.props.xq;
                            return b == null || !c && !d ? b : g6(() => {
                                const e = __c.Wl(b.get());
                                return Ol({
                                    top: d ? 0 : e.top,
                                    left: c ? 0 : e.left,
                                    width: e.width,
                                    height: e.height
                                })
                            })
                        }
                        render() {
                            const b = this.props.eF,
                                c = this.props.sheet,
                                d = this.props.container,
                                e = this.props.range,
                                f = this.props.Jz,
                                g = this.props.wq,
                                h = this.props.xq;
                            return W5("div", {
                                ref: this.fba,
                                className: X5("i0YQww",
                                    this.props.className),
                                children: [U5("div", {
                                    ref: this.sva,
                                    className: "vUKoKg",
                                    children: U5("div", {
                                        ref: this.tva,
                                        children: U5(A6, {
                                            eF: b,
                                            sheet: c,
                                            container: d,
                                            bounds: e,
                                            fl: this.props.fl,
                                            Wv: this.props.Wv,
                                            Gf: this.props.Gf,
                                            HN: this.props.HN,
                                            O: this.props.O,
                                            Hg: this.Hg,
                                            tT: this.tT,
                                            DI: this.DI
                                        })
                                    })
                                }), U5(this.F3, {}), f && U5(f, {
                                    sheet: c,
                                    range: e,
                                    wq: g,
                                    xq: h
                                })]
                            })
                        }
                        componentDidMount() {
                            const b = f6(() => {
                                    var h = this.props,
                                        k = h.O,
                                        l = h.sheet;
                                    const m = h.range;
                                    var n = this.fba.current;
                                    const p = this.sva.current;
                                    h = this.tva.current;
                                    k = k ? k.get() : 1;
                                    const q =
                                        m ? l.ia(m.Pb) + m.Pb.width - l.ia(m.qb) : l.width,
                                        r = m ? l.la(m.dc) + m.dc.height - l.la(m.tb) : l.height;
                                    n && (n.style.width = `${q*k}px`, n.style.height = `${r*k}px`);
                                    p && (p.style.width = `${q*k}px`, p.style.height = `${r*k}px`);
                                    n = l.direction === "rtl";
                                    n = m ? l.ia(m.qb) * k * (n ? 1 : -1) : 0;
                                    l = m ? -l.la(m.tb) * k : 0;
                                    h && (h.style.transform = `translate(${n}px, ${l}px)`)
                                }),
                                c = this.props.sheet;
                            var d = this.props.WO;
                            const e = this.props.wq,
                                f = this.props.xq,
                                g = e || f ? d === null || d === void 0 ? void 0 : d(c, e, f) : void 0;
                            d = f6(() => {
                                const h = this.fba.current;
                                if (h != null) {
                                    var k =
                                        e || f ? "sticky" : "relative",
                                        l = f ? "0px" : "unset",
                                        m = e ? "0px" : "unset",
                                        n = e ? "0px" : "unset",
                                        p = c.direction === "rtl";
                                    if (g == null) h.style.position = k, h.style.top = l, h.style.left = p ? "unset" : m, h.style.right = p ? n : "unset";
                                    else {
                                        const x = g.get();
                                        var q;
                                        h.style.position = (q = x.position) !== null && q !== void 0 ? q : k;
                                        var r;
                                        h.style.top = (r = x.top) !== null && r !== void 0 ? r : l;
                                        var t;
                                        h.style.left = p ? "unset" : (t = x.left) !== null && t !== void 0 ? t : m;
                                        var v;
                                        h.style.right = p ? (v = x.right) !== null && v !== void 0 ? v : n : "unset";
                                        var u;
                                        h.style.transform = (u = x.transform) !== null &&
                                            u !== void 0 ? u : "unset"
                                    }
                                }
                            });
                            __c.kc(this, [b, d])
                        }
                        get bounds() {
                            const b = this.props.sheet,
                                c = this.props.range;
                            if (b.layout.cols.empty || b.layout.rows.empty) return {
                                qb: void 0,
                                Pb: void 0,
                                tb: void 0,
                                dc: void 0
                            };
                            var d, e, f, g;
                            return {
                                qb: (d = c === null || c === void 0 ? void 0 : c.qb) !== null && d !== void 0 ? d : b.layout.cols.first(),
                                Pb: (e = c === null || c === void 0 ? void 0 : c.Pb) !== null && e !== void 0 ? e : b.layout.cols.last(),
                                tb: (f = c === null || c === void 0 ? void 0 : c.tb) !== null && f !== void 0 ? f : b.layout.rows.first(),
                                dc: (g = c === null || c === void 0 ? void 0 : c.dc) !==
                                    null && g !== void 0 ? g : b.layout.rows.last()
                            }
                        }
                        constructor(...b) {
                            super(...b);
                            this.fba = (z6.A(this), QC());
                            this.sva = QC();
                            this.tva = QC();
                            this.DI = new kFb;
                            this.bYa = g6(() => [...this.Hg.get().keys()].sort((c, d) => this.props.sheet.layout.rows.Cd(c, d)), {
                                equals: __c.$k()
                            });
                            this.$Xa = g6(() => [...this.tT.get().keys()].sort((c, d) => this.props.sheet.layout.cols.Cd(c, d)), {
                                equals: __c.$k()
                            });
                            this.F3 = $5(() => U5(this.props.FDa, {
                                Hg: this.bYa,
                                aYa: this.$Xa,
                                tLa: this.DI.BLa,
                                range: this.props.range
                            }));
                            this.Hg = g6(() => {
                                var c;
                                const d = this.props.sheet;
                                var e = this.props.O,
                                    f = (c = this.$ca) === null || c === void 0 ? void 0 : c.get();
                                if (f && (f.height <= 0 || f.width <= 0)) return new Map;
                                c = this.bounds;
                                e = e.get();
                                var g = 50 * e;
                                const h = f ? f.Ea.y - g : c.tb ? d.la(c.tb) : 0;
                                f = f ? f.br.y + g : c.dc ? d.la(c.dc) + c.dc.height : 0;
                                g = new Map;
                                for (let k = c.tb; k != null && c.dc != null && d.layout.rows.Cd(k, c.dc) <= 0; k = d.layout.rows.next(k)) {
                                    const l = d.la(k);
                                    if (!(l + k.height < h)) {
                                        if (l > f) break;
                                        g.set(k, l * e)
                                    }
                                }
                                return g
                            }, {
                                equals: r6.shallow
                            });
                            this.tT = g6(() => {
                                var c;
                                const d = this.props.sheet;
                                var e = this.props.O,
                                    f = (c = this.$ca) ===
                                    null || c === void 0 ? void 0 : c.get();
                                if (f && (f.height <= 0 || f.width <= 0)) return new Map;
                                c = this.bounds;
                                e = e.get();
                                var g = 50 * e;
                                const h = f ? f.Ea.x - g : c.qb ? d.ia(c.qb) : 0;
                                f = f ? f.br.x + g : c.Pb ? d.ia(c.Pb) + c.Pb.width : 0;
                                g = new Map;
                                for (let k = c.qb; k != null && c.Pb != null && d.layout.cols.Cd(k, c.Pb) <= 0; k = d.layout.cols.next(k)) {
                                    const l = d.ia(k);
                                    if (!(l + k.width < h)) {
                                        if (l > f) break;
                                        g.set(k, l * e)
                                    }
                                }
                                return g
                            }, {
                                equals: r6.shallow
                            })
                        }
                    }({
                        c: [z6, eFb]
                    } = u6(a, [], [Ac], fFb))
                })(), bFb);
                var kFb = class {
                        constructor() {
                            this.cells = new aFb;
                            this.Zba = (a, b, c) => {
                                let d = this.cells.get([a, b]);
                                d == null && (d = s6.box(void 0, {
                                    deep: !1
                                }), this.cells.set([a, b], d));
                                d.set(c);
                                return () => {
                                    const e = this.cells.get([a, b]);
                                    e === d && (e.set(void 0), this.cells.delete([a, b]))
                                }
                            };
                            this.BLa = (a, b) => {
                                var c;
                                let d = this.cells.get([a, b]);
                                d == null && (d = s6.box(void 0, {
                                    deep: !1
                                }), this.cells.set([a, b], d));
                                return (c = d.get()) === null || c === void 0 ? void 0 : c.ema
                            }
                        }
                    },
                    A6;
                new(cFb = class extends t6 {
                    constructor() {
                        super(A6);
                        gFb()
                    }
                }, (() => {
                    class a extends(hFb = l6) {
                        static A(b) {
                            P(b, {
                                MC: s6.shallow,
                                rs: g6,
                                Yja: q6,
                                UV: q6.bound
                            })
                        }
                        get rs() {
                            var b;
                            const c = (b = this.props.fl) === null || b === void 0 ? void 0 : b.get();
                            if (c != null && c.length !== 0) return new __c.jJ(c)
                        }
                        render() {
                            var b;
                            return W5("div", {
                                ref: mEb(this.Jh, (b = this.rs) === null || b === void 0 ? void 0 : b.co),
                                children: [U5("div", {
                                    ref: this.z5,
                                    className: "_5YlOqQ"
                                }), U5("div", {
                                    ref: this.B5,
                                    className: "_XCmKw"
                                }), this.MC.map(c => c.NSa)]
                            })
                        }
                        componentDidMount() {
                            const b =
                                h6(() => [this.props.sheet, this.props.tT.get(), this.props.Hg.get()], ([e, f, g], h) => {
                                    [h] = h || [];
                                    e !== h && this.uGa();
                                    this.Yja(f, g)
                                }, {
                                    fireImmediately: !0
                                }),
                                c = f6(() => {
                                    var e = this.props,
                                        f = e.O;
                                    e = e.sheet;
                                    const g = this.Jh.current;
                                    g && (f = f ? f.get() : 1, g.style.width = `${e.width*f}px`, g.style.height = `${e.height*f}px`)
                                }),
                                d = this.MC.map(e => iEb(e));
                            __c.kc(this, [c, b, ...d])
                        }
                        uGa() {
                            const b = C(this.z5.current),
                                c = C(this.B5.current);
                            b.innerHTML = "";
                            c.innerHTML = "";
                            this.Tga.length = 0;
                            this.MC.length = 0
                        }
                        Yja(b, c) {
                            const d = C(this.z5.current),
                                e = C(this.B5.current),
                                f = [],
                                g = new Map;
                            for (const h of this.Tga) c.has(h.ea) ? g.set(h.ea, h) : f.push(h);
                            for (const [h, k] of c) c = g.get(h) || f.pop(), c || (c = new lFb(this.UV, h), d.appendChild(c.dV), e.appendChild(c.fV), this.Tga.push(c)), c.update(k, h, b);
                            for (const h of f) h.hide()
                        }
                        UV(b, c) {
                            const d = this.props.HN,
                                e = this.props.sheet,
                                f = this.props.container,
                                g = this.props.DI;
                            b = new mFb(this.props.eF, this.props.Wv, this.props.Gf, d(b, c), e, b, c, f, g.Zba, this.CX, this.BX);
                            __c.kc(this, iEb(b));
                            this.MC.push(b);
                            return b
                        }
                        constructor(...b) {
                            super(...b);
                            this.Jh = (A6.A(this), QC());
                            this.z5 = QC();
                            this.B5 = QC();
                            this.Tga = [];
                            this.MC = [];
                            this.CX = o6(c => {
                                const d = this.props.Hg.get();
                                return c === "first" ? d.keys().next().value : [...d.keys()].pop()
                            });
                            this.BX = o6(c => {
                                const d = this.props.tT.get();
                                return c === "first" ? d.keys().next().value : [...d.keys()].pop()
                            })
                        }
                    }({
                        c: [A6, gFb]
                    } = u6(a, [], [Ac], hFb))
                })(), cFb);
                var lFb = class {
                        static A(a) {
                            P(a, {
                                update: q6
                            })
                        }
                        update(a, b, c) {
                            [this.dV, this.fV].forEach(d => {
                                d.style.transform = `translateY(${a}px)`;
                                d.classList.add("FPpqvg")
                            });
                            this.ea = b;
                            for (const [d] of c) c = this.MC.get(d), c || (c = this.UV(d, b), this.MC.set(d, c), this.dV.appendChild(c.cV), this.fV.appendChild(c.rD)), c.update(b)
                        }
                        hide() {
                            [this.dV, this.fV].forEach(a => {
                                a.style.transform = "translate(-1000px, -1000px) scale(0)"
                            })
                        }
                        constructor(a, b) {
                            this.UV = a;
                            this.ea = b;
                            this.dV = (lFb.A(this), document.createElement("div"));
                            this.fV = document.createElement("div");
                            this.MC = new Map
                        }
                    },
                    mFb = class {
                        static A(a) {
                            P(a, {
                                GV: s6.ref,
                                ea: s6.ref,
                                b9: g6,
                                update: q6,
                                Co: g6,
                                attrs: g6.struct,
                                f$: g6,
                                iq: g6,
                                renderer: g6,
                                ema: g6.struct
                            })
                        }
                        get b9() {
                            if (!hEb) return !1;
                            const a = this.Co;
                            return a == null || a.content.ref == null || a.content.ref.type !== "formula" ? !1 : this.eF(this.sheet, a.content.ref.value)
                        }
                        update(a) {
                            a !== this.ea && (this.ea = a, this.wt.ea = a, this.c7 && this.c7(), this.c7 = this.Zba(this.ea, this.col, this))
                        }
                        get NSa() {
                            return this.GV
                        }
                        get Co() {
                            const a = this.sheet.layout.cells.get(this.ea, this.col);
                            return a ? a.ref :
                                void 0
                        }
                        get attrs() {
                            const a = this.wt.attrs;
                            return {
                                pf: a === null || a === void 0 ? void 0 : a.pf,
                                textAlign: a === null || a === void 0 ? void 0 : a.textAlign,
                                direction: a === null || a === void 0 ? void 0 : a.direction,
                                link: a === null || a === void 0 ? void 0 : a.link
                            }
                        }
                        get f$() {
                            var a = this.wt.span;
                            if (!a) return !1;
                            if (a.tb === a.dc && a.qb === a.Pb) return !0;
                            var b = this.CX("first");
                            const c = this.CX("last"),
                                d = this.BX("first"),
                                e = this.BX("last");
                            if (!(b && c && d && e)) return !1;
                            b = this.sheet.layout.rows.Cd(a.tb, b) >= 0 && this.sheet.layout.rows.Cd(a.tb, c) <= 0 ? a.tb : b;
                            a =
                                this.sheet.layout.cols.Cd(a.qb, d) >= 0 && this.sheet.layout.cols.Cd(a.qb, e) <= 0 ? a.qb : d;
                            return b === this.ea && a === this.col
                        }
                        get iq() {
                            const a = this.sheet,
                                b = this.ea,
                                c = this.col;
                            if (!this.container) return {
                                type: void 0,
                                sheet: a,
                                ea: b,
                                column: c
                            };
                            switch (this.container.type) {
                                case "fixed-page":
                                    return this.container.mSa.Gc(c, b);
                                case "sheet-item":
                                    return this.container.Zca.Gc(c, b);
                                case "sheet-element":
                                    return this.container.YUa.Gc(c, b);
                                default:
                                    throw new E(this.container);
                            }
                        }
                        get renderer() {
                            const a = this.Co;
                            if (a && this.f$ && (a.content.ref ||
                                    a.pa.ref)) return this.Wv({
                                context: {
                                    container: this.iq,
                                    attrs: this.attrs
                                },
                                yl: this.zaa,
                                Gf: this.Gf
                            })
                        }
                        get ema() {
                            this.fma.reportObserved();
                            var a = uEb(() => this.renderer);
                            if (a && (a = a.type === "react" ? this.tR : this.Ew, a.childNodes.length !== 0 && (a = a.childNodes[0], a instanceof HTMLElement))) return {
                                width: a.clientWidth,
                                height: a.clientHeight
                            }
                        }
                        constructor(a, b, c, d, e, f, g, h, k, l, m) {
                            var n, p, q, r, t, v;
                            this.eF = a;
                            this.Wv = b;
                            this.wt = d;
                            this.sheet = e;
                            this.col = f;
                            this.container = h;
                            this.Zba = k;
                            this.CX = l;
                            this.BX = m;
                            this.cV = (mFb.A(this), document.createElement("div"));
                            this.rD = document.createElement("div");
                            this.zw = document.createElement("div");
                            this.Ew = document.createElement("div");
                            this.tR = document.createElement("div");
                            this.fma = tEb("content size atom");
                            this.zaa = q6(() => this.fma.reportChanged());
                            this.ea = g;
                            this.cV.className = "_2JFriw";
                            this.rD.className = "imy9ug";
                            this.zw.className = X5("pDMp7w", {
                                _0yZ6Qg: ((p = this.Co) === null || p === void 0 ? void 0 : (n = p.content.ref) === null || n === void 0 ? void 0 : n.type) !== "text3",
                                qhF5uA: ((r = this.Co) === null || r === void 0 ? void 0 : (q = r.content.ref) === null ||
                                    q === void 0 ? void 0 : q.type) !== "text3" && ((v = this.Co) === null || v === void 0 ? void 0 : (t = v.content.ref) === null || t === void 0 ? void 0 : t.type) !== "text2",
                                qxD1GA: this.b9
                            });
                            this.Ew.className = "_30B9pw";
                            this.zw.appendChild(this.Ew);
                            this.rD.appendChild(this.zw);
                            this.tR.className = "G7zH2w";
                            this.c7 = k(this.ea, this.col, this);
                            this.Gf = u => U5(c, { ...u,
                                yl: this.zaa
                            })
                        }
                    };
                var nFb, oFb, pFb, i6;
                new(nFb = class extends t6 {
                    constructor() {
                        super(i6);
                        oFb()
                    }
                }, (() => {
                    class a extends(pFb = l6) {
                        static A(b) {
                            P(b, {
                                oX: g6
                            })
                        }
                        render() {
                            const {
                                eF: b,
                                sheet: c,
                                container: d,
                                fl: e,
                                WO: f,
                                Wv: g,
                                kd: h,
                                Gf: k,
                                viewport: l,
                                Jz: m,
                                LBa: n = !1
                            } = this.props;
                            if (!c.layout.cols.empty && !c.layout.rows.empty) return U5("div", {
                                className: X5("SNkrHw", c.direction === "ltr" ? "TA4X7w" : "WvuqMw", {
                                    RaA0Nw: n
                                }),
                                ...h,
                                children: U5(iFb, {
                                    eF: b,
                                    Wv: g,
                                    Gf: k,
                                    FDa: this.F3,
                                    HN: this.HN,
                                    sheet: c,
                                    container: d,
                                    fl: e,
                                    WO: f,
                                    O: this.O,
                                    viewport: l,
                                    Jz: m,
                                    oX: this.oX
                                })
                            })
                        }
                        get oX() {
                            var b = this.props.sheet;
                            const c = {},
                                d = b.view.freeze.TK ? b.layout.pd.get(b.view.freeze.TK) : void 0,
                                e = b.view.freeze.fA ? b.layout.$c.get(b.view.freeze.fA) : void 0,
                                f = b.layout.rows.first(),
                                g = b.layout.rows.last(),
                                h = b.layout.cols.first(),
                                k = b.layout.cols.last();
                            if (f != null && g != null && h != null && k != null) {
                                var l = e ? b.layout.cols.next(e) : h;
                                b = d ? b.layout.rows.next(d) : f;
                                d && e && (c.ska = {
                                    range: {
                                        qb: h,
                                        tb: f,
                                        Pb: e,
                                        dc: d
                                    }
                                });
                                d && l && (c.TBa = {
                                    range: {
                                        qb: l,
                                        tb: f,
                                        Pb: k,
                                        dc: d
                                    }
                                });
                                e && b && (c.gqa = {
                                    range: {
                                        qb: h,
                                        tb: b,
                                        Pb: e,
                                        dc: g
                                    }
                                });
                                b && l && (c.VAa = {
                                    range: {
                                        qb: l,
                                        tb: b,
                                        Pb: k,
                                        dc: g
                                    }
                                });
                                return c
                            }
                        }
                        get O() {
                            return this.props.O ?
                                this.props.O : g6(() => 1)
                        }
                        constructor(...b) {
                            super(...b);
                            this.F3 = (i6.A(this), $5(c => {
                                const {
                                    sheet: d,
                                    M9: e,
                                    O: f,
                                    NU: g = "hidden"
                                } = this.props;
                                return U5(w6, {
                                    sheet: d,
                                    range: c.range,
                                    O: f,
                                    children: U5(ZEb, { ...c,
                                        sheet: d,
                                        O: this.O,
                                        M9: e,
                                        overflow: g
                                    })
                                })
                            }));
                            this.HN = (c, d) => new __c.hxa(this.props.Fv, this.props.ot, this.props.sheet, c, d, this.O, this.Wo, this.Xo);
                            this.Wo = (c, d) => {
                                var e, f;
                                return (e = (f = this.props).Wo) === null || e === void 0 ? void 0 : e.call(f, this.props.sheet, c, d)
                            };
                            this.Xo = (c, d) => {
                                var e, f;
                                return (e = (f = this.props).Xo) === null ||
                                    e === void 0 ? void 0 : e.call(f, this.props.sheet, c, d)
                            }
                        }
                    }({
                        c: [i6, oFb]
                    } = u6(a, [], [Ac], pFb))
                })(), nFb);
                __c.oxa = {
                    JNa: function(a) {
                        const b = a.zm,
                            c = a.Le,
                            d = a.qe,
                            e = a.Yn,
                            f = a.Fv,
                            g = a.ot,
                            h = a.lM;
                        PDb({
                            Oy: a.Oy,
                            Hf: a.Hf,
                            eWa: a.LR,
                            Pa: a.Pa
                        });
                        const k = kEb({
                            Wv: h,
                            Fv: f,
                            ot: g,
                            Fn: void 0
                        });
                        b.W3 = eEb({
                            Wl: k
                        });
                        c.G3 = VDb({
                            Wl: k
                        });
                        ({
                            Bia: a
                        } = bEb({
                            Wl: k,
                            af: e(),
                            Oya: new SEb
                        }));
                        d.fm.V3 = a;
                        const {
                            ICa: l,
                            JCa: m,
                            HCa: n
                        } = UDb();
                        return {
                            Cia: $5(p => U5(vEb, { ...p,
                                container: void 0,
                                Wl: k,
                                IDa: l,
                                JDa: m,
                                GDa: n,
                                Gf: wEb
                            }))
                        }
                    }
                };
            }).call(self, self._c68b74ff4d61aaeea4f241f0854f5b1a);
        }

    }
])
//# sourceMappingURL=sourcemaps/80b03bf3435971d7.js.map