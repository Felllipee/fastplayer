(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [35024], {

        /***/
        738083: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(813110);
            self._7ccc7343da2ae983607b3819c7bc1f93 = self._7ccc7343da2ae983607b3819c7bc1f93 || {};
            (function(__c) {
                var $H = __c.$H;
                var Kc = __c.Kc;
                var P = __c.P;
                var Ju = __c.Ju;
                var O = __c.O;
                var wx = __c.wx;
                var lu = __c.lu;
                var D = __c.D;
                var E = __c.E;
                var V4 = function(a, b) {
                        switch (b.reference.type) {
                            case 0:
                                const c = a.AR(b.reference.Uh);
                                a = a.gV(b.reference.fi);
                                return c != null && a != null;
                            case 1:
                                return a.AR(b.reference.Uh) != null;
                            case 2:
                                return a.gV(b.reference.fi) != null;
                            case 3:
                                return !1;
                            default:
                                throw new E(b.reference);
                        }
                    },
                    f1b = function(a, b, c) {
                        switch (c.type) {
                            case "invalid":
                                return !1;
                            case "canonical":
                                if (c.ea.length > 0) return !1;
                                a = a.XE(c.kY.slice(1).trim());
                                return a.result !== "success" ? !1 : __c.cE(new __c.fE, a.eH).filter(d => {
                                    switch (d.type) {
                                        case 0:
                                            return V4(b, d);
                                        case 1:
                                            return V4(b,
                                                d.start) && V4(b, d.end);
                                        default:
                                            throw new E(d);
                                    }
                                }).length > 0;
                            default:
                                throw new E(c);
                        }
                    },
                    g1b = function(a, b, c, d) {
                        const e = [];
                        for (const k of c)
                            for (const l of d) {
                                c = k.na;
                                var f = l.column,
                                    g = a.layout.cells.get(c, f);
                                if (!g || (k.boundary === "start" ? g.span.Qb === c : g.span.Tc === c))
                                    if (c = b.get(`${f.id}:${c.id}`), c = k.boundary === "start" ? c === null || c === void 0 ? void 0 : c.ra : c === null || c === void 0 ? void 0 : c.Ea) {
                                        g = e[e.length - 1];
                                        f = (f = a.layout.cols.next(f)) ? {
                                            column: f,
                                            boundary: "start"
                                        } : {
                                            column: D(a.layout.cols.last()),
                                            boundary: "end"
                                        };
                                        var h;
                                        if (h = g) h = g.Ooa, h = h.column === l.column && h.boundary === l.boundary;
                                        h && (h = g.NWa, h = h.na === k.na && h.boundary === k.boundary);
                                        h && g.color === c.color && g.weight === c.weight && g.jc === c.jc && g.jc === 0 ? g.Ooa = f : e.push({
                                            NWa: k,
                                            osb: l,
                                            Ooa: f,
                                            color: c.color,
                                            weight: c.weight,
                                            jc: c.jc
                                        })
                                    }
                            }
                        return e
                    },
                    h1b = function(a, b, c, d, e) {
                        const f = [];
                        for (const l of d)
                            for (const m of c) {
                                var g = m.na,
                                    h = l.column;
                                d = a.layout.cells.get(g, h);
                                if (!d || (l.boundary === "start" ? d.span.Mb === h : d.span.Gc === h))
                                    if (d = b.get(`${h.id}:${g.id}`), (d = l.boundary === "start" ? d === null ||
                                            d === void 0 ? void 0 : d.qa : d === null || d === void 0 ? void 0 : d.La) && (l.boundary !== "start" || e(g, h) !== 1)) {
                                        h = f[f.length - 1];
                                        g = (g = a.layout.rows.next(g)) ? {
                                            na: g,
                                            boundary: "start"
                                        } : {
                                            na: D(a.layout.rows.last()),
                                            boundary: "end"
                                        };
                                        var k;
                                        if (k = h) k = h.VHa, k = k.column === l.column && k.boundary === l.boundary;
                                        k && (k = h.Soa, k = k.na === m.na && k.boundary === m.boundary);
                                        k && h.color === d.color && h.weight === d.weight && h.jc === d.jc && h.jc === 0 ? h.Soa = g : f.push({
                                            VHa: l,
                                            zsb: m,
                                            Soa: g,
                                            color: d.color,
                                            weight: d.weight,
                                            jc: d.jc
                                        })
                                    }
                            }
                        return f
                    },
                    i1b = function(a, b, c, d, e) {
                        const f =
                            a.FYa.r9a(c, b.layout.rows.last(), b.layout.cols.last());
                        a = (q, r) => {
                            const t = f.get(q) || 0,
                                w = f.get(r) || 0;
                            return t <= w ? q : r
                        };
                        const g = new Map;
                        if (d.length === 0 || e.length === 0) return g;
                        var h = [],
                            k = b.layout.cols.Tb(e[0].column);
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
                        (k = b.layout.rows.Tb(d[0].na)) && e.push({
                            na: k,
                            boundary: "start"
                        });
                        e.push(...d);
                        (d = b.layout.rows.next(d[d.length - 1].na)) && e.push({
                            na: d,
                            boundary: "start"
                        });
                        for (const q of h) {
                            h = (d = q.boundary === "start" ? q.column : void 0) ? b.layout.cols.Tb(d) : b.layout.cols.last();
                            for (const r of e) {
                                var l = r.boundary === "start" ? r.na : void 0;
                                k = l ? b.layout.rows.Tb(l) : b.layout.rows.last();
                                var m = d && l && c.get(`${d.id}:${l.id}`),
                                    n = d && k && c.get(`${d.id}:${k.id}`);
                                l = h && l && c.get(`${h.id}:${l.id}`);
                                var p = h && k && c.get(`${h.id}:${k.id}`);
                                k = q.boundary === "end" ? l === null || l === void 0 ? void 0 : l.La : m === null || m === void 0 ? void 0 : m.qa;
                                m = r.boundary === "end" ? n === null || n === void 0 ? void 0 : n.Ea : m === null || m === void 0 ?
                                    void 0 : m.ra;
                                n = q.boundary === "end" ? p === null || p === void 0 ? void 0 : p.La : n === null || n === void 0 ? void 0 : n.qa;
                                l = r.boundary === "end" ? p === null || p === void 0 ? void 0 : p.Ea : l === null || l === void 0 ? void 0 : l.ra;
                                p = __c.JDa({
                                    ra: n,
                                    Ea: k,
                                    qa: l,
                                    La: m
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
                                    height: w,
                                    width: u
                                } = (t === null || t === void 0 ? void 0 : t.jc) === 1 ? {
                                    height: t.weight,
                                    width: t.weight
                                } : {
                                    height: Math.max((l === null || l === void 0 ? void 0 :
                                        l.weight) || 0, (m === null || m === void 0 ? void 0 : m.weight) || 0),
                                    width: Math.max((n === null || n === void 0 ? void 0 : n.weight) || 0, (k === null || k === void 0 ? void 0 : k.weight) || 0)
                                };
                                g.set(W4(q, r), __c.GE(p, w / 2, u / 2))
                            }
                        }
                        return g
                    },
                    j1b = function(a, b, c, d, e, f) {
                        if (d.length === 0 || e.length === 0) return [];
                        const g = g1b(b, c, d, e);
                        f = h1b(b, c, d, e, f);
                        const h = i1b(a, b, c, d, e),
                            k = a.xeb(b),
                            l = a.Rdb(b),
                            m = b.direction === "rtl";
                        a = g.map(n => {
                            var p, q, r = n.osb,
                                t = n.Ooa,
                                w = n.NWa;
                            const u = n.color,
                                x = n.weight;
                            n = n.jc;
                            const y = m ? -1 : 1,
                                A = (p = h.get(W4(r, w))) === null || p === void 0 ?
                                void 0 : p.La;
                            p = (q = h.get(W4(t, w))) === null || q === void 0 ? void 0 : q.qa;
                            if (A != null && p != null) {
                                q = D(k.get(w.na));
                                var z = D(l.get(r.column));
                                r = D(l.get(t.column));
                                w = w.boundary === "start" ? q.start : q.end;
                                q = z.start;
                                t = t.boundary === "start" ? r.start : r.end;
                                return {
                                    color: u,
                                    weight: x,
                                    jc: n,
                                    p1: new lu(q + A * y, w),
                                    p2: new lu(t + p * y, w),
                                    ...__c.LE((t - q) * y, n * x, A)
                                }
                            }
                        }).filter(__c.yb);
                        return [...f.map(n => {
                            var p, q, r = n.VHa,
                                t = n.zsb,
                                w = n.Soa;
                            const u = n.color,
                                x = n.weight;
                            n = n.jc;
                            const y = (p = h.get(W4(r, t))) === null || p === void 0 ? void 0 : p.Ea;
                            p = (q = h.get(W4(r,
                                w))) === null || q === void 0 ? void 0 : q.ra;
                            if (y != null && p != null) {
                                q = D(l.get(r.column));
                                var A = D(k.get(t.na));
                                t = D(k.get(w.na));
                                r = r.boundary === "start" ? q.start : q.end;
                                q = A.start;
                                w = w.boundary === "start" ? t.start : t.end;
                                return {
                                    color: u,
                                    weight: x,
                                    jc: n,
                                    p1: new lu(r, q + y),
                                    p2: new lu(r, w + p),
                                    ...__c.LE(w - q, n * x, y)
                                }
                            }
                        }).filter(__c.yb), ...a]
                    },
                    k1b = function(a) {
                        const b = [];
                        a = a.filter(c => c.weight !== 0 && c.color != null);
                        a = __c.nd(a, c => c.weight);
                        a = Array.from(a.entries()).sort(([c], [d]) => c - d);
                        for (const [c, d] of a) {
                            a = __c.nd(d, e => `${e.bk}_${e.ck}`);
                            for (const [, e] of a) {
                                const {
                                    ck: f,
                                    bk: g
                                } = e[0];
                                a = __c.nd(e, h => h.color);
                                for (const [h, k] of a) b.push({
                                    weight: c,
                                    color: h,
                                    lines: k,
                                    bk: g,
                                    ck: f
                                })
                            }
                        }
                        return b
                    },
                    l1b = function(a, b, c, d) {
                        var e = __c.rub;
                        const f = b.get().flatMap(k => a.layout.rows.last() === k ? [{
                                na: k,
                                boundary: "start"
                            }, {
                                na: k,
                                boundary: "end"
                            }] : [{
                                na: k,
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
                                e.FYa.Lpb(a, l, k) : void 0, b && h.set(`${l.id}:${k.id}`, b);
                        c = j1b(e, a, h, f, g, d);
                        return k1b(c)
                    },
                    X4 = function() {
                        const [a] = (0, __c.gc)(() => wx());
                        return a
                    },
                    m1b = function(a) {
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
                    n1b = function(a, b, c) {
                        const d = [a];
                        for (; a != null &&
                            a !== b;)(a = c.next(a)) && d.push(a);
                        return d
                    },
                    o1b = function(a) {
                        const b = a.direction === "rtl" ? -(0, __c.uub)(a) / 2 : -(0, __c.sub)(a) / 2,
                            c = -(0, __c.tub)(a) / 2,
                            d = a.width + (0, __c.sub)(a) / 2 + (0, __c.uub)(a) / 2;
                        a = a.height + (0, __c.tub)(a) / 2 + (0, __c.vub)(a) / 2;
                        return Ju({
                            top: 0,
                            left: 0,
                            width: d,
                            height: a,
                            rotation: 0
                        }).translate(b, c)
                    },
                    p1b = function(a) {
                        return b => ({
                            type: "react",
                            node: (0, __c.N)(a, { ...b
                            })
                        })
                    },
                    r1b = function(a) {
                        var b;
                        const c = a.Yy;
                        var d = a.content;
                        const e = a.context;
                        a = a.ap;
                        __c.C((d === null || d === void 0 ? void 0 : (b = d.ag) === null || b ===
                            void 0 ? void 0 : b.type) === "formula");
                        b = d.gk;
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
                                d = (g = c.Aja) === null || g === void 0 ? void 0 : g.call(c, {
                                    content: __c.ge(__c.h7a, { ...__c.Cdb,
                                        value: b.value
                                    }),
                                    context: e,
                                    ap: a
                                });
                                break;
                            case 1:
                            case 3:
                            case 4:
                            case 2:
                            case 7:
                            case 8:
                                d = q1b(c, e, d.Sz, d.gk.type);
                                break;
                            case 0:
                                d = {
                                    type: "react",
                                    node: Y4(__c.VR, {
                                        label: m1b(b.error),
                                        children: Y4(__c.zy, {
                                            width: "full",
                                            display: "flex",
                                            justifyContent: "center",
                                            children: Y4(__c.AEb, {
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
                    q1b = function(a, b, c, d) {
                        var e;
                        return (e = a.Dja) === null || e === void 0 ? void 0 : e.call(a, {
                            context: b,
                            value: c,
                            valueType: d
                        })
                    },
                    u1b = function(a) {
                        const b = a.Yy,
                            c = a.Af,
                            d = a.itb,
                            e = a.nb;
                        b.Dja = f => __c.SKa({ ...f,
                            nb: e
                        });
                        b.NEa = f => r1b({ ...f,
                            Yy: b
                        });
                        b.Aja = p1b(s1b({
                            Af: c,
                            mQ: void 0
                        }));
                        b.PEa = t1b(d, e);
                        b.QEa = p1b(f => Y4(Z4, { ...f,
                            nb: e
                        }))
                    },
                    v1b = function({
                        label: a,
                        Ua: b,
                        width: c,
                        height: d,
                        scale: e,
                        dIa: f
                    }) {
                        return Y4("div", {
                            style: {
                                width: c,
                                height: d,
                                transform: `scale(${e})`
                            },
                            className: "bx74uQ",
                            children: $4(__c.wy, {
                                className: a5("ivlMMQ", b5(f)),
                                size: "small",
                                alignment: "center",
                                children: [b && Y4(b, {
                                    size: "small"
                                }), a]
                            })
                        })
                    },
                    b5 = function(a) {
                        return {
                            _2BX0vg: a === "primary-default",
                            JfW_Cg: a === "primary-low",
                            isMgNg: a === "primary-active",
                            xwWDeQ: a === "secondary-default",
                            w0EyUQ: a === "secondary-low",
                            _8p5AIA: a === "secondary-active"
                        }
                    },
                    x1b = function({
                        sd: a,
                        nNa: b,
                        scale: c,
                        Mo: d,
                        No: e,
                        m2a: f
                    }) {
                        const g = c5(() => {
                                const m = d === null || d === void 0 ? void 0 : d.get();
                                if (m != null && m.length !== 0) return new __c.uE(m)
                            }, [d]),
                            h = e(1),
                            k = e(c),
                            l = {
                                ssE9Tg: !a,
                                OkifGQ: a
                            };
                        return Y4(__c.xy, {
                            Up: "light",
                            light: "light",
                            Rs: "light",
                            dark: "light",
                            children: m => Y4("div", {
                                className: a5("ze9QCQ", l, m.className),
                                style: {
                                    width: k,
                                    height: k
                                },
                                children: Y4("div", {
                                    style: {
                                        width: h,
                                        height: h,
                                        transform: `scale(${c})`
                                    },
                                    className: a5("N7J3UA", l),
                                    ref: g === null || g === void 0 ? void 0 : g.Zl,
                                    children: Y4(__c.$R, {
                                        className: a5("m8CFdg", l, {
                                            G6wL4w: f,
                                            W_E0wA: b
                                        }),
                                        ariaLabel: O("ruWN9A"),
                                        children: Y4(w1b, {
                                            size: "tiny"
                                        })
                                    })
                                })
                            })
                        })
                    },
                    z1b = function() {
                        const a = new y1b,
                            b = new __c.AS,
                            c = d5(f => {
                                const {
                                    scale: g = 1,
                                    iNa: h,
                                    size: k =
                                        "small",
                                    m2a: l = !0
                                } = f, m = e5(n => a.No({
                                    scale: n,
                                    size: k,
                                    jta: h
                                }), [k, h]);
                                return Y4(x1b, { ...f,
                                    scale: h ? Math.max(g, h) : g,
                                    sd: f.sheet.direction === "rtl",
                                    nNa: f.selection != null && a.Mhb(f.sheet, f.selection),
                                    No: m,
                                    m2a: l
                                })
                            }),
                            d = d5(f => {
                                const {
                                    scale: g = 1,
                                    iNa: h,
                                    size: k = "small",
                                    sheet: l,
                                    selection: m,
                                    rqb: n
                                } = f, p = e5(u => a.No({
                                    scale: u,
                                    size: k,
                                    jta: h
                                }), [k, h]), q = h ? Math.max(g, h) : g, r = e5(u => m != null && a.txa(m).has(u), [m]), t = e5(u => m != null && a.xfb(l, m).has(u), [l, m]), w = e5(u => {
                                    const x = n != null && l.layout.cols.Fe(u, n.Mb) >= 0 && l.layout.cols.Fe(u, n.Gc) <=
                                        0;
                                    return r(u) ? x ? "secondary-active" : "primary-active" : t(u) ? x ? "secondary-low" : "primary-low" : x ? "secondary-default" : "primary-default"
                                }, [l, n, t, r]);
                                return Y4(f5, { ...f,
                                    fd: g,
                                    Bd: q,
                                    No: p,
                                    VD: w,
                                    IE: b
                                })
                            }),
                            e = d5(f => {
                                const {
                                    scale: g = 1,
                                    iNa: h,
                                    size: k = "small",
                                    sheet: l,
                                    selection: m,
                                    rqb: n
                                } = f, p = e5(u => a.No({
                                    scale: u,
                                    size: k,
                                    jta: h
                                }), [k, h]), q = h ? Math.max(g, h) : g, r = e5(u => m != null && a.vxa(m).has(u), [m]), t = e5(u => m != null && a.yfb(l, m).has(u), [l, m]), w = e5(u => {
                                    const x = n != null && l.layout.rows.Fe(u, n.Qb) >= 0 && l.layout.rows.Fe(u, n.Tc) <= 0;
                                    return r(u) ?
                                        x ? "secondary-active" : "primary-active" : t(u) ? x ? "secondary-low" : "primary-low" : x ? "secondary-default" : "primary-default"
                                }, [l, n, t, r]);
                                return Y4(g5, { ...f,
                                    fd: q,
                                    Bd: g,
                                    No: p,
                                    VD: w,
                                    IE: b
                                })
                            });
                        return {
                            O2a: c,
                            N2a: d,
                            P2a: e
                        }
                    },
                    A1b = function(a) {
                        const b = a.Fp,
                            c = () => null;
                        return __c.Gx(d => Y4(h5, { ...d,
                            Fp: b,
                            wh: c
                        }))
                    },
                    B1b = function({
                        sheet: a,
                        Y: b,
                        range: c,
                        Fd: d
                    }) {
                        i5(() => j5(() => {
                            if (d.current != null) {
                                var e, f = (e = b === null || b === void 0 ? void 0 : b.get()) !== null && e !== void 0 ? e : 1;
                                e = a.direction === "rtl";
                                e = c ? a.qa(c.Mb) * f * (e ? 1 : -1) : 0;
                                var g = c ? -a.ra(c.Qb) *
                                    f : 0;
                                d.current.style.transform = `translate(${e}px, ${g}px)`;
                                d.current.style.width = `${a.width*f}px`;
                                d.current.style.height = `${a.height*f}px`
                            }
                        }), [a, c, d, b])
                    },
                    E1b = function({
                        onScroll: a
                    }) {
                        const b = new C1b(a);
                        return {
                            MB: b,
                            lja: d5(c => Y4(D1b, {
                                sheet: c.sheet,
                                MB: b,
                                children: c.children
                            }))
                        }
                    },
                    H1b = function(a) {
                        const b = a.Fp,
                            c = a.ff,
                            d = a.GYa,
                            e = ({
                                children: k
                            }) => k,
                            {
                                MB: f,
                                lja: g
                            } = E1b({
                                onScroll: a.onScroll
                            });
                        class h extends F1b {
                            get OK() {
                                const k = this.props.ia.wr;
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
                                d.pYa(this.props.item, {
                                    Lb: this.props.Lb,
                                    ia: this.props.ia
                                })
                            }
                            componentWillUnmount() {
                                d.f8a(this.props.item, {
                                    Lb: this.props.Lb,
                                    ia: this.props.ia
                                })
                            }
                            render() {
                                d.pYa(this.props.item, {
                                    Lb: this.props.Lb,
                                    ia: this.props.ia
                                });
                                return Y4(G1b, { ...this.props,
                                    Y: this.Y,
                                    Fp: b,
                                    OK: this.OK,
                                    wh: this.wh,
                                    GYa: d,
                                    MB: f
                                })
                            }
                            constructor(...k) {
                                super(...k);
                                this.Y = k5(() => {
                                    const l = this.props.item;
                                    var m = this.props.ia,
                                        n = m.wr;
                                    m = m.zoom;
                                    switch (n) {
                                        case "screen":
                                            return m;
                                        case "print":
                                            n = d.Beb(l);
                                            if (!n) return 1;
                                            ({
                                                width: n
                                            } = new __c.VE(l,
                                                n.Lb, {
                                                    zoom: m
                                                }));
                                            return n / l.config.width;
                                        default:
                                            throw new E(n);
                                    }
                                });
                                this.wh = d5(l => Y4("div", {
                                    className: "wKvivQ",
                                    children: Y4(__c.$Ka, { ...this.props,
                                        ...l,
                                        ff: c
                                    })
                                }))
                            }
                        }
                        return {
                            zEa: h,
                            MB: f
                        }
                    },
                    I1b = function(a, b) {
                        if (b != null && b.Mb != null && b.Qb != null && b.Gc != null && b.Tc != null) {
                            var c = a.qa(b.Mb),
                                d = a.ra(b.Qb),
                                e = a.qa(b.Gc) + b.Gc.width - c;
                            a = a.ra(b.Tc) + b.Tc.height - d;
                            return Ju({
                                top: d,
                                left: c,
                                width: e,
                                height: a
                            })
                        }
                    },
                    K1b = function(a) {
                        const b = a.Fp,
                            c = () => null;
                        return d => Y4(J1b, { ...d,
                            Fp: b,
                            wh: c
                        })
                    },
                    O1b = function(a) {
                        const b = {
                                transform: "translate(-1000px, -1000px) scale(0)"
                            },
                            c = {
                                tHa: b,
                                $u: b,
                                Ga: {},
                                rn: {}
                            },
                            d = l5(() => a.gz.style || c, h => {
                                var k;
                                Object.assign(a.p8.style, h.tHa);
                                Object.assign(a.hL.style, h.$u);
                                Object.assign(a.dD.style, h.Ga);
                                Object.assign(a.iD.style, h.rn);
                                h = h === null || h === void 0 ? void 0 : (k = h.Ga) === null || k === void 0 ? void 0 : k.textDecoration;
                                a.dD.classList.toggle("OQx3PQ", h === "underline");
                                a.dD.classList.toggle("_99ezUA", h === "line-through");
                                a.dD.classList.toggle("kppAqQ", h === "underline line-through")
                            }, {
                                fireImmediately: !0,
                                equals: L1b
                            }),
                            e = l5(() => a.csa, h => {
                                a.dD.classList.toggle("_84KvRA", !h);
                                a.p8.classList.toggle("_84KvRA", !h);
                                a.hL.classList.toggle("TL_RLA", !h)
                            }, {
                                fireImmediately: !0
                            }),
                            f = l5(() => a.renderer, h => {
                                a.c9 && (h === null || h === void 0 ? void 0 : h.type) !== "react" ? (a.c9 = void 0, a.j3.remove()) : a.iD.innerHTML = "";
                                switch (h === null || h === void 0 ? void 0 : h.type) {
                                    case "react":
                                        a.c9 = M1b(h.node, a.j3);
                                        a.iD.appendChild(a.j3);
                                        break;
                                    case "dom":
                                        h.render(a.iD);
                                        break;
                                    case void 0:
                                        break;
                                    default:
                                        throw new E(h);
                                }
                                a.fua()
                            }, {
                                fireImmediately: !0
                            }),
                            g = N1b ? l5(() => a.Aqa, h => {
                                a.dD.classList.toggle("qxD1GA", h)
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
                    L1b = function(a, b) {
                        return JSON.stringify(a) === JSON.stringify(b)
                    },
                    Q1b = function(a) {
                        const b = a.$y,
                            c = a.TB,
                            d = a.rC,
                            e = a.H1a,
                            f = a.zn,
                            g = new P1b(c),
                            h = (k, l) => f ? f1b(f, k, l) : !1;
                        return k => Y4(m5, { ...k,
                            XM: h,
                            rC: d,
                            TB: c,
                            $y: b,
                            Bra: g,
                            H1a: e === null || e === void 0 ? void 0 : e.get()
                        })
                    },
                    W4 = (a, b) => `${a.column.id}-${a.boundary}:${b.na.id}-${b.boundary}`,
                    s1b = ({
                        Af: a,
                        mQ: b
                    }) => c => (0, __c.N)(__c.xub, { ...c,
                        Af: a,
                        mQ: b
                    }),
                    n5 = __webpack_require__(443763),
                    R1b = n5.Fragment,
                    Y4 = n5.jsx,
                    $4 = n5.jsxs;
                var S1b = __webpack_require__(358579).Z;
                var T1b = __webpack_require__,
                    U1b = T1b(993864),
                    a5 = T1b.n_x(U1b)();
                var d5 = __webpack_require__(446474).Pi;
                var o5 = __webpack_require__(875604),
                    p5 = o5.Component,
                    F1b = o5.PureComponent,
                    e5 = o5.useCallback,
                    i5 = o5.useEffect,
                    V1b = o5.useLayoutEffect,
                    c5 = o5.useMemo,
                    q5 = o5.useRef,
                    W1b = o5.useState;
                var r5 = __webpack_require__(635872),
                    s5 = r5.Om,
                    X1b = r5.kq,
                    Y1b = r5.YN;
                var t5 = __webpack_require__(519427),
                    u5 = t5.action,
                    j5 = t5.autorun,
                    v5 = t5.comparer,
                    k5 = t5.computed,
                    Z1b = t5.createAtom,
                    w5 = t5.observable,
                    l5 = t5.reaction,
                    $1b = t5.untracked;
                var x5 = __webpack_require__(937763)._;
                var y5 = __webpack_require__(161563)._;
                var M1b = __webpack_require__(36281).createPortal;
                var a2b = d5(a => {
                        var b, c, d = a.sheet.direction === "rtl";
                        d = {
                            H2wykw: !d,
                            UweldA: d
                        };
                        const [e] = W1b(() => wx()), f = {
                            get: e5(() => {
                                var g;
                                const h = e === null || e === void 0 ? void 0 : (g = e.current) === null || g === void 0 ? void 0 : g.getBoundingClientRect();
                                var k, l;
                                g = {
                                    top: 0,
                                    left: 0,
                                    width: (k = h === null || h === void 0 ? void 0 : h.width) !== null && k !== void 0 ? k : 0,
                                    height: (l = h === null || h === void 0 ? void 0 : h.height) !== null && l !== void 0 ? l : 0
                                };
                                return Ju(g)
                            }, [e])
                        };
                        return $4("div", {
                            className: a5("nMvVqA", d),
                            children: [$4("div", {
                                ref: S1b(a.Fd, e),
                                className: "_0YOFPg",
                                children: [Y4(a.Fp, { ...a,
                                    viewport: f
                                }), Y4("div", {
                                    className: a5("Gdl7fQ", d),
                                    children: (c = a.aEa) === null || c === void 0 ? void 0 : (b = c.get()) === null || b === void 0 ? void 0 : b.map((g, h) => Y4(g, {}, h))
                                })]
                            }), a.SFb === "visible" && $4(R1b, {
                                children: [Y4("div", {
                                    className: a5("_32sKQw", d),
                                    children: Y4(a.G4a, { ...a
                                    })
                                }), Y4("div", {
                                    className: a5("xdIsTQ", d),
                                    children: Y4(a.J4a, { ...a
                                    })
                                }), Y4("div", {
                                    className: a5("rsTRSA", d),
                                    children: Y4(a.I4a, { ...a
                                    })
                                })]
                            })]
                        })
                    }),
                    b2b = d5(a => {
                        a = a.content;
                        __c.v(a.type === "text2" || a.type === "text3");
                        switch (a.type) {
                            case "text2":
                                return a.value.aa;
                            case "text3":
                                return __c.lr.ka(a.value).cells.aa();
                            default:
                                throw new E(a);
                        }
                    });
                var t1b = (a, b) => __c.EKa((c, d) => {
                        const e = c.content;
                        c = c.context;
                        if (e.value.isEmpty)
                            for (; d.lastChild;) d.lastChild.remove();
                        else({
                            Mg: c
                        } = __c.mg(__c.Ug, c.attrs)), c === "wrap" && (d = d.appendChild(document.createElement("div")), d.className = "dt4Dlg"), a.render({
                            container: d,
                            text: e.value,
                            Ha: void 0,
                            writingMode: 1,
                            zd: "start",
                            wg: c2b(e, c),
                            nb: b
                        })
                    }),
                    c2b = s5((a, b) => {
                        if (b === "wrap") return [];
                        a = a.value.aa.split("\n").map(c => c.length + 1);
                        a.pop();
                        return a
                    }, {
                        equals: v5.structural
                    });
                var d2b, e2b, f2b, Z4;
                new(d2b = class extends x5 {
                    constructor() {
                        super(Z4);
                        e2b()
                    }
                }, (() => {
                    class a extends(f2b = p5) {
                        static A(b) {
                            P(b, {
                                Mg: k5
                            })
                        }
                        get Mg() {
                            return __c.mg(__c.Ug, this.props.context.attrs).Mg
                        }
                        render() {
                            var b = this.props.content;
                            const c = this.props.context;
                            if (b.value.isEmpty) return null;
                            b = Y4(this.props.wh, {
                                content: b,
                                na: c.container.na,
                                col: c.container.column,
                                Mg: this.Mg
                            });
                            return this.Mg === "wrap" ? Y4("div", {
                                className: "dt4Dlg",
                                children: b
                            }) : b
                        }
                        constructor(...b) {
                            super(...b);
                            a.A(this)
                        }
                    }({
                        c: [Z4, e2b]
                    } = y5(a, [], [Kc], f2b))
                })(), d2b);
                var y1b = class {
                    No({
                        size: a,
                        scale: b,
                        jta: c
                    }) {
                        b = c ? Math.max(c, b) : b;
                        return a === "large" ? __c.dW * b : __c.qDb * b
                    }
                    constructor() {
                        this.Mhb = s5((a, b) => {
                            var c, d;
                            b = b.get();
                            return b != null && a.layout.rows.count() === (((c = b.rows) === null || c === void 0 ? void 0 : c.size) || 0) && a.layout.cols.count() === (((d = b.columns) === null || d === void 0 ? void 0 : d.size) || 0)
                        });
                        this.txa = X1b(a => {
                            var b;
                            return new Set(((b = a.get()) === null || b === void 0 ? void 0 : b.columns) || [])
                        }, {
                            equals: __c.Wr
                        });
                        this.vxa = X1b(a => {
                            var b;
                            return new Set(((b = a.get()) === null || b === void 0 ?
                                void 0 : b.rows) || [])
                        }, {
                            equals: __c.Wr
                        });
                        this.xfb = s5((a, b) => {
                            var {
                                cells: c
                            } = b.get() || {};
                            if (!c) return new Set;
                            if (this.vxa(b).size > 0) return new Set(a.layout.cols);
                            b = this.txa(b);
                            const d = new Set;
                            for (const e of c) {
                                c = a.layout.cells.get(e.na, e.column);
                                for (const f of n1b(c ? c.span.Mb : e.column, c ? c.span.Gc : e.column, a.layout.cols))(b.size === 0 || b.has(f)) && d.add(f)
                            }
                            return d
                        }, {
                            equals: __c.Wr
                        });
                        this.yfb = s5((a, b) => {
                            var {
                                cells: c
                            } = b.get() || {};
                            if (!c) return new Set;
                            if (this.txa(b).size > 0) return new Set(a.layout.rows);
                            b = this.vxa(b);
                            const d = new Set;
                            for (const e of c) {
                                c = a.layout.cells.get(e.na, e.column);
                                for (const f of n1b(c ? c.span.Qb : e.na, c ? c.span.Tc : e.na, a.layout.rows))(b.size === 0 || b.has(f)) && d.add(f)
                            }
                            return d
                        }, {
                            equals: __c.Wr
                        })
                    }
                };
                var g2b, h2b, i2b, j2b, k2b, l2b, m2b = parseInt("4px", 10) || 4,
                    f5;
                new(g2b = class extends x5 {
                    constructor() {
                        super(f5);
                        i2b()
                    }
                }, (() => {
                    class a extends(j2b = p5) {
                        static A(b) {
                            P(b, {
                                sd: k5,
                                hq: k5,
                                L4: k5
                            })
                        }
                        get sd() {
                            return this.props.sheet.direction === "rtl"
                        }
                        get hq() {
                            var b;
                            const c = (b = this.props.Mo) === null || b === void 0 ? void 0 : b.get();
                            if (c != null && c.length !== 0) return new __c.uE(c)
                        }
                        get L4() {
                            var b, c, d;
                            return (c = (d = this.props).Ypa) === null || c === void 0 ? void 0 : (b = c.call(d)) === null || b === void 0 ? void 0 : b.get()
                        }
                        render() {
                            return Y4(__c.xy, {
                                Up: "light",
                                light: "light",
                                Rs: "light",
                                dark: "light",
                                children: this.w8a
                            })
                        }
                        constructor(...b) {
                            super(...b);
                            this.onMouseMove = (f5.A(this), u5(c => {
                                const {
                                    onMouseMove: d,
                                    sheet: e,
                                    fd: f = 1
                                } = this.props;
                                d === null || d === void 0 || d(c, e, "column", f)
                            }));
                            this.onMouseLeave = u5(c => {
                                var d, e;
                                (d = (e = this.props).onMouseLeave) === null || d === void 0 || d.call(e, c)
                            });
                            this.jWa = (c, d, e) => {
                                const {
                                    sheet: f,
                                    No: g,
                                    VD: h,
                                    bGb: k,
                                    fd: l = 1,
                                    Bd: m = 1
                                } = this.props, n = {
                                    jNbTIg: !this.sd,
                                    gtA7Dw: this.sd
                                }, p = (e === null || e === void 0 ? 0 : e.sticky) ? this.sd ? {
                                    right: 0
                                } : {
                                    left: 0
                                } : void 0;
                                var q;
                                const r = (e === null || e === void 0 ? 0 : e.sticky) ? (q = this.L4) !== null && q !== void 0 ? q : p : void 0;
                                let t = -1;
                                return $4("div", {
                                    style: r,
                                    className: a5("Vt2_4w", n, {
                                        Tn3nUw: e === null || e === void 0 ? void 0 : e.sticky
                                    }),
                                    onMouseMove: this.onMouseMove,
                                    onMouseLeave: this.onMouseLeave,
                                    children: [f.layout.cols.map(w => {
                                        var u;
                                        t++;
                                        if (!(c && f.layout.cols.Fe(w, c) < 0 || d && f.layout.cols.Fe(w, d) > 0)) return Y4(n2b, {
                                            col: w,
                                            label: __c.WA(t),
                                            Ua: k === null || k === void 0 ? void 0 : (u = k.get()) === null || u === void 0 ? void 0 : u.get(w),
                                            No: g,
                                            VD: h,
                                            fd: l,
                                            Bd: m
                                        }, w.id)
                                    }), (e === null || e === void 0 ? void 0 : e.sticky) && Y4("div", {
                                        style: {
                                            width: m2b * l
                                        },
                                        className: a5("HBvlug", "ru3tFQ",
                                            n)
                                    })]
                                })
                            };
                            this.w8a = c => {
                                var d;
                                const e = this.props.sheet,
                                    f = e.view.freeze.QG ? e.layout.Nd.get(e.view.freeze.QG) : void 0,
                                    g = {
                                        jNbTIg: !this.sd,
                                        gtA7Dw: this.sd
                                    };
                                return $4("div", {
                                    ref: (d = this.hq) === null || d === void 0 ? void 0 : d.Zl,
                                    className: a5("xhBZaw", g, c.className),
                                    children: [f && this.jWa(void 0, f, {
                                        sticky: !0
                                    }), this.jWa(f ? e.cols.next(f) : void 0)]
                                })
                            }
                        }
                    }({
                        c: [f5, i2b]
                    } = y5(a, [], [Kc], j2b))
                })(), g2b);
                var g5;
                new(h2b = class extends x5 {
                    constructor() {
                        super(g5);
                        k2b()
                    }
                }, (() => {
                    class a extends(l2b = p5) {
                        static A(b) {
                            P(b, {
                                sd: k5,
                                hq: k5,
                                L4: k5
                            })
                        }
                        get sd() {
                            return this.props.sheet.direction === "rtl"
                        }
                        get hq() {
                            var b;
                            const c = (b = this.props.Mo) === null || b === void 0 ? void 0 : b.get();
                            if (c != null && c.length !== 0) return new __c.uE(c)
                        }
                        get L4() {
                            var b, c, d;
                            return (c = (d = this.props).Ypa) === null || c === void 0 ? void 0 : (b = c.call(d)) === null || b === void 0 ? void 0 : b.get()
                        }
                        render() {
                            return Y4(__c.xy, {
                                Up: "light",
                                light: "light",
                                Rs: "light",
                                dark: "light",
                                children: this.aqb
                            })
                        }
                        constructor(...b) {
                            super(...b);
                            this.onMouseMove = (g5.A(this), u5(c => {
                                const {
                                    onMouseMove: d,
                                    sheet: e,
                                    Bd: f = 1
                                } = this.props;
                                d === null || d === void 0 || d(c, e, "row", f)
                            }));
                            this.onMouseLeave = u5(c => {
                                var d, e;
                                (d = (e = this.props).onMouseLeave) === null || d === void 0 || d.call(e, c)
                            });
                            this.pWa = (c, d, e) => {
                                const {
                                    sheet: f,
                                    No: g,
                                    VD: h,
                                    fd: k = 1,
                                    Bd: l = 1
                                } = this.props, m = {
                                    jNbTIg: !this.sd,
                                    gtA7Dw: this.sd
                                }, n = (e === null || e === void 0 ? 0 : e.sticky) ? {
                                    top: 0
                                } : void 0;
                                var p;
                                const q = (e === null || e === void 0 ? 0 : e.sticky) ? (p = this.L4) !== null && p !== void 0 ? p : n : void 0;
                                let r = -1;
                                return $4("div", {
                                    style: q,
                                    className: a5("_93roJg", m, {
                                        Tn3nUw: e === null || e === void 0 ? void 0 : e.sticky
                                    }),
                                    onMouseMove: this.onMouseMove,
                                    onMouseLeave: this.onMouseLeave,
                                    children: [f.rows.map(t => {
                                        r++;
                                        if (!(c && f.rows.Fe(t, c) < 0 || d && f.rows.Fe(t, d) > 0)) return Y4(o2b, {
                                            na: t,
                                            label: `${r+1}`,
                                            VD: h,
                                            No: g,
                                            fd: k,
                                            Bd: l
                                        }, t.id)
                                    }), (e === null || e === void 0 ? void 0 : e.sticky) && Y4("div", {
                                        style: {
                                            height: m2b * l
                                        },
                                        className: a5("HBvlug", "koz2Hg")
                                    })]
                                })
                            };
                            this.aqb = c => {
                                var d;
                                const e = this.props.sheet,
                                    f = e.view.freeze.hV ? e.layout.$d.get(e.view.freeze.hV) : void 0,
                                    g = {
                                        jNbTIg: !this.sd,
                                        gtA7Dw: this.sd
                                    };
                                return $4("div", {
                                    ref: (d = this.hq) === null || d === void 0 ? void 0 : d.Zl,
                                    className: a5("An9VeA", g, c.className),
                                    children: [f && this.pWa(void 0, f, {
                                        sticky: !0
                                    }), this.pWa(f ? e.rows.next(f) : void 0)]
                                })
                            }
                        }
                    }({
                        c: [g5, k2b]
                    } = y5(a, [], [Kc], l2b))
                })(), h2b);
                var n2b = d5(a => {
                        const b = a.label,
                            c = a.Ua,
                            d = a.col,
                            e = a.VD,
                            f = a.No,
                            g = a.fd;
                        a = a.Bd;
                        const h = f(a),
                            k = Y1b(() => e(d));
                        return Y4("div", {
                            className: a5("_83Rssw", "d2uLIA", b5(k)),
                            style: {
                                width: d.width * g,
                                height: h
                            },
                            children: Y4(v1b, {
                                label: b,
                                Ua: c,
                                width: d.width,
                                height: f(1),
                                scale: a,
                                dIa: k
                            })
                        })
                    }),
                    o2b = d5(a => {
                        const b = a.label,
                            c = a.na,
                            d = a.No,
                            e = a.VD,
                            f = a.fd;
                        a = a.Bd;
                        const g = d(f),
                            h = Y1b(() => e(c));
                        return Y4("div", {
                            className: a5("_83Rssw", "JhBzyw", b5(h)),
                            style: {
                                width: g,
                                height: c.height * a
                            },
                            children: Y4(v1b, {
                                label: b,
                                width: d(1),
                                height: c.height,
                                scale: f,
                                dIa: h
                            })
                        })
                    });
                var p2b = '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><circle stroke="currentColor" cx="6" cy="6" r="5.5"/></svg>';
                var q2b = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle stroke="currentColor" cx="12" cy="12" r="9.25" stroke-width="1.5"/></svg>';
                var w1b = __c.OR({
                    ho: p2b,
                    medium: q2b
                });
                var r2b, s2b, t2b, h5;
                new(r2b = class extends x5 {
                    constructor() {
                        super(h5);
                        s2b()
                    }
                }, (() => {
                    class a extends(t2b = p5) {
                        static A(b) {
                            P(b, {
                                ke: k5.struct
                            })
                        }
                        render() {
                            const b = this.props.element;
                            return Y4(this.props.Fp, {
                                sheet: b.ga.config,
                                container: b,
                                U7: "visible",
                                Mo: this.props.Mo,
                                yt: this.props.yt,
                                Ct: this.props.Ct,
                                Y: this.props.Y,
                                ke: this.ke,
                                wh: this.props.wh,
                                mG: void 0
                            })
                        }
                        get ke() {
                            return __c.dB(this.props.element.ga.Na, this.props.Ce)
                        }
                        constructor(...b) {
                            super(...b);
                            a.A(this)
                        }
                    }({
                        c: [h5, s2b]
                    } = y5(a, [], [Kc], t2b))
                })(), r2b);
                var u2b = class {
                    constructor() {
                        this.cga = new WeakMap;
                        this.Beb = a => this.cga.get(a);
                        this.pYa = (a, b) => {
                            this.cga.set(a, b)
                        };
                        this.f8a = (a, b) => {
                            const c = this.cga.get(a);
                            c && c.ia === b.ia && c.Lb === b.Lb && this.cga.delete(a)
                        }
                    }
                };
                var z5 = parseInt("4px", 10) || 4,
                    v2b = d5(({
                        sheet: a,
                        Y: b,
                        range: c,
                        qv: d,
                        rv: e
                    }) => {
                        if (c != null && (d || e)) {
                            var f;
                            b = (f = b === null || b === void 0 ? void 0 : b.get()) !== null && f !== void 0 ? f : 1;
                            f = a.direction === "rtl";
                            var g = {
                                ZJ0G6w: !f,
                                dOI_jA: f
                            };
                            if (d && e) return d = a.ra(c.Tc) + c.Tc.height, a = a.qa(c.Gc) + c.Gc.width, Y4("div", {
                                style: {
                                    top: d * b,
                                    width: a * b,
                                    height: z5 * b
                                },
                                className: a5("aX8dhQ", "VGcLng")
                            });
                            if (d) return c = a.qa(c.Gc) + c.Gc.width, Y4("div", {
                                style: {
                                    width: z5 * b,
                                    height: a.height * b,
                                    ...(f ? {
                                        right: c * b
                                    } : {
                                        left: c * b
                                    })
                                },
                                className: a5("aX8dhQ", "gl1RPg",
                                    g)
                            });
                            if (e) return c = a.ra(c.Tc) + c.Tc.height, Y4("div", {
                                style: {
                                    top: c * b,
                                    width: a.width * b,
                                    height: z5 * b
                                },
                                className: a5("aX8dhQ", "VGcLng")
                            })
                        }
                    });
                var A5 = ({
                        sheet: a,
                        range: b,
                        Y: c,
                        children: d
                    }) => {
                        const e = X4();
                        B1b({
                            sheet: a,
                            Y: c,
                            range: b,
                            Fd: e
                        });
                        return Y4("div", {
                            ref: e,
                            className: a5("nstn2A", a.direction === "rtl" ? "NgnL2Q" : "f8jAGQ"),
                            children: d
                        })
                    },
                    w2b = ({
                        sheet: a,
                        range: b,
                        Y: c,
                        children: d
                    }) => {
                        const e = X4();
                        B1b({
                            sheet: a,
                            Y: c,
                            range: b,
                            Fd: e
                        });
                        a = a.direction === "rtl" ? "NgnL2Q" : "f8jAGQ";
                        return Y4("div", {
                            className: a5("nstn2A", a, "_9sodyg"),
                            children: Y4("div", {
                                ref: e,
                                className: a5("nstn2A", a),
                                children: d
                            })
                        })
                    };
                var D1b = d5(({
                        sheet: a,
                        children: b,
                        MB: c
                    }) => {
                        const d = e5(f => {
                                c.Rxa(a, f)
                            }, [c, a]),
                            e = e5(f => {
                                f != null ? c.NB.set(a, f) : c.NB.delete(a)
                            }, [c, a]);
                        return Y4(__c.jyb, {
                            direction: a.config.direction === "rtl" ? "rtl" : "ltr",
                            onScroll: d,
                            gu: e,
                            children: b
                        })
                    }),
                    C1b = class {
                        Rxa(a, b) {
                            this.onScroll && this.onScroll(a);
                            this.S3.set(a, b)
                        }
                        constructor(a) {
                            this.onScroll = a;
                            this.NB = new WeakMap;
                            this.S3 = w5.map(new Map, {
                                deep: !1
                            });
                            this.scrollTo = u5((b, c) => {
                                b = this.NB.get(b);
                                b === null || b === void 0 || b.scrollTo({
                                    left: Math.floor(c)
                                })
                            })
                        }
                    };
                var G1b = d5(a => {
                    const b = a.item,
                        c = a.Mo,
                        d = a.Nf,
                        e = a.measureRef,
                        f = a.Y,
                        g = a.lOa,
                        h = a.Lb,
                        k = a.yt,
                        l = a.Ct,
                        m = a.Fp,
                        n = a.OK,
                        p = a.wh,
                        q = a.Ce,
                        r = a.MB;
                    a = c5(() => __c.dB(b.Na, q), [b, q]);
                    const t = c5(() => d5(({
                            sheet: y,
                            range: A,
                            qv: z,
                            rv: B
                        }) => Y4(A5, {
                            sheet: y,
                            range: A,
                            Y: f,
                            children: Y4(v2b, {
                                sheet: y,
                                Y: f,
                                range: A,
                                qv: z,
                                rv: B
                            })
                        })), [f]),
                        w = o1b(b.config),
                        u = f.get(),
                        x = Math.min(w.width * u, h.width);
                    i5(() => j5(() => {
                        var y = b.config.view.freeze.QG ? b.config.layout.Nd.get(b.config.view.freeze.QG) : void 0;
                        if (y != null)
                            if (b.config.qa(y) + y.width > x) {
                                if (y = r.NB.get(b)) y.style.overflowX =
                                    "hidden"
                            } else if (y = r.NB.get(b)) y.style.overflowX = "scroll"
                    }), [b, h.width, r, u, x]);
                    return Y4("div", {
                        ref: e,
                        className: "E8r86A",
                        style: {
                            width: x
                        },
                        children: Y4(n, {
                            sheet: b,
                            children: Y4("div", {
                                ref: g,
                                className: "cXTiJA",
                                style: {
                                    width: w.width * u,
                                    height: w.height * u
                                },
                                children: Y4("div", {
                                    className: "W1ir5A",
                                    children: Y4(m, {
                                        container: d.xj(b),
                                        sheet: b.config,
                                        U7: "visible",
                                        Mo: c,
                                        Y: f,
                                        yt: k,
                                        Ct: l,
                                        ke: a,
                                        wh: p,
                                        mG: t
                                    })
                                })
                            })
                        })
                    })
                });
                var x2b = d5(({
                    page: a,
                    range: b,
                    FB: c
                }) => {
                    const d = I1b(a.sheet, b);
                    return Y4("div", {
                        className: "Gi9pfA",
                        children: a.elements.map((e, f) => d == null ? c(e, f) : __c.Hu(Ju(e)).Ro(d) && c(e, f))
                    })
                });
                var y2b = new __c.AS,
                    B5 = a => __c.dW * a,
                    z2b = () => "primary-default",
                    J1b = d5(({
                        container: a,
                        Mo: b,
                        yt: c,
                        Ct: d,
                        E_: e,
                        Y: f,
                        viewport: g,
                        Qrb: h,
                        Fp: k,
                        wh: l,
                        FB: m,
                        rfa: n,
                        ayb: p,
                        Owb: q,
                        Nwb: r
                    }) => {
                        const t = a.page,
                            w = c5(() => d5(({
                                sheet: u,
                                range: x,
                                qv: y,
                                rv: A
                            }) => $4(R1b, {
                                children: [Y4(A5, {
                                    sheet: t.sheet,
                                    range: x,
                                    Y: f,
                                    children: Y4(v2b, {
                                        sheet: u,
                                        Y: f,
                                        range: x,
                                        qv: y,
                                        rv: A
                                    })
                                }), $4(w2b, {
                                    sheet: t.sheet,
                                    range: x,
                                    Y: f,
                                    children: [p && Y4(p, {}), m && Y4(x2b, {
                                        page: t,
                                        FB: m,
                                        range: x
                                    }), r && Y4(r, {}), n && n()]
                                }), q && x && Y4(A5, {
                                    sheet: t.sheet,
                                    range: x,
                                    Y: f,
                                    children: Y4(q, {
                                        range: x
                                    })
                                })]
                            })), [t, f, p, m, r, n, q]);
                        return h ? Y4(A2b, {
                            container: a,
                            viewport: g,
                            Y: f,
                            Mo: b,
                            yt: c,
                            Ct: d,
                            Fp: k,
                            wh: l,
                            mG: w
                        }) : Y4(k, {
                            sheet: t.sheet,
                            container: a,
                            U7: "hidden",
                            Mo: b,
                            yt: c,
                            Ct: d,
                            E_: e,
                            Y: f,
                            viewport: g,
                            wh: l,
                            mG: w
                        })
                    }),
                    A2b = d5(a => {
                        const b = a.container,
                            c = a.Y,
                            d = a.viewport,
                            e = a.Mo,
                            f = a.yt,
                            g = a.Ct,
                            h = a.Fp,
                            k = a.wh;
                        a = a.mG;
                        const l = b.page,
                            m = l.sheet.direction === "rtl",
                            n = q5(null),
                            p = q5(null),
                            q = q5(null);
                        i5(() => {
                            const y = C5({
                                sheet: l.sheet,
                                Fga: !0,
                                Gga: !0,
                                Y: c,
                                viewport: d
                            });
                            return l5(() => y === null || y === void 0 ? void 0 : y.get(), A => {
                                const z = n.current;
                                if (A && z) {
                                    var B =
                                        l.sheet.direction === "rtl",
                                        G;
                                    z.style.position = (G = A.position) !== null && G !== void 0 ? G : "sticky";
                                    var H;
                                    z.style.top = (H = A.top) !== null && H !== void 0 ? H : "0px";
                                    var I, K;
                                    B ? z.style.right = (I = A.right) !== null && I !== void 0 ? I : "0px" : z.style.left = (K = A.left) !== null && K !== void 0 ? K : "0px";
                                    var M;
                                    z.style.transform = (M = A.transform) !== null && M !== void 0 ? M : ""
                                }
                            })
                        }, [l.sheet, c, d]);
                        i5(() => {
                            const y = C5({
                                sheet: l.sheet,
                                Fga: !1,
                                Gga: !0,
                                Y: c,
                                viewport: d
                            });
                            return l5(() => y === null || y === void 0 ? void 0 : y.get(), A => {
                                const z = q.current;
                                if (A && z) {
                                    var B;
                                    z.style.position =
                                        (B = A.position) !== null && B !== void 0 ? B : "sticky";
                                    var G;
                                    z.style.top = (G = A.top) !== null && G !== void 0 ? G : "0px";
                                    var H;
                                    z.style.transform = (H = A.transform) !== null && H !== void 0 ? H : ""
                                }
                            })
                        }, [l.sheet, c, d]);
                        i5(() => {
                            const y = C5({
                                sheet: l.sheet,
                                Fga: !0,
                                Gga: !1,
                                Y: c,
                                viewport: d
                            });
                            return l5(() => y === null || y === void 0 ? void 0 : y.get(), A => {
                                const z = p.current;
                                if (A && z) {
                                    var B = l.sheet.direction === "rtl",
                                        G;
                                    z.style.position = (G = A.position) !== null && G !== void 0 ? G : "sticky";
                                    var H, I;
                                    B ? z.style.right = (H = A.right) !== null && H !== void 0 ? H : "0px" : z.style.left =
                                        (I = A.left) !== null && I !== void 0 ? I : "0px";
                                    var K;
                                    z.style.transform = (K = A.transform) !== null && K !== void 0 ? K : ""
                                }
                            })
                        }, [l.sheet, c, d]);
                        const r = e5((y, A, z) => C5({
                                sheet: y,
                                Fga: A,
                                Gga: z,
                                Y: c,
                                viewport: d
                            }), [c, d]),
                            t = c5(() => r ? () => r(l.sheet, !0, !1) : void 0, [r, l.sheet]),
                            w = c5(() => r ? () => r(l.sheet, !1, !0) : void 0, [r, l.sheet]);
                        var u;
                        const x = (u = c === null || c === void 0 ? void 0 : c.get()) !== null && u !== void 0 ? u : 1;
                        return $4("div", {
                            className: a5("OsKKIQ", "cbOp6Q"),
                            children: [Y4("div", {
                                className: "VDFv_A",
                                children: Y4(h, {
                                    sheet: l.sheet,
                                    container: b,
                                    U7: "hidden",
                                    Mo: e,
                                    yt: f,
                                    Ct: g,
                                    E_: r,
                                    Y: c,
                                    viewport: d,
                                    wh: k,
                                    mG: a
                                })
                            }), Y4("div", {
                                ref: n,
                                className: "_688KWg",
                                children: Y4(x1b, {
                                    sd: m,
                                    nNa: !1,
                                    No: B5,
                                    scale: x
                                })
                            }), Y4("div", {
                                ref: q,
                                className: "m0cT1w",
                                children: Y4(f5, {
                                    sheet: l.sheet,
                                    fd: x,
                                    Bd: x,
                                    No: B5,
                                    VD: z2b,
                                    IE: y2b,
                                    Ypa: t
                                })
                            }), Y4("div", {
                                ref: p,
                                className: "zm537g",
                                children: Y4(g5, {
                                    sheet: l.sheet,
                                    fd: x,
                                    Bd: x,
                                    No: B5,
                                    VD: z2b,
                                    IE: y2b,
                                    Ypa: w
                                })
                            })]
                        })
                    }),
                    C5 = ({
                        sheet: a,
                        Fga: b,
                        Gga: c,
                        Y: d,
                        viewport: e
                    }) => k5(() => {
                        var f = e === null || e === void 0 ? void 0 : __c.Ru(e.get()),
                            g;
                        const h = (g = d === null || d === void 0 ? void 0 : d.get()) !== null &&
                            g !== void 0 ? g : 1;
                        if (!f) return {};
                        g = {};
                        f = new lu(f.left, f.top);
                        const k = a.direction === "rtl";
                        g.position = "relative";
                        c && (g.top = "0px");
                        b && (k ? g.right = "0px" : g.left = "0px");
                        g.transform = `translate(${b?f.x*h:0}px, ${c?f.y*h:0}px)`;
                        return g
                    });
                var P1b = class {
                    constructor(a) {
                        this.TB = a;
                        this.R7a = __c.pU;
                        this.geb = s5((b, c, d, e) => {
                            d = d.get();
                            const f = new WeakMap;
                            for (let t = 0; t < d.length; t++) {
                                var g = d[t],
                                    h = this.aeb(b, c, g);
                                if (h) {
                                    switch (h) {
                                        case "start":
                                        case "justify":
                                            var k = d[t + 1];
                                            if (k == null || !$H(b, c, k)) continue;
                                            break;
                                        case "center":
                                            k = d[t + 1];
                                            if (k == null || !$H(b, c, k)) continue;
                                            k = d[t - 1];
                                            if (k == null || !$H(b, c, k)) continue;
                                            break;
                                        case "end":
                                            k = d[t - 1];
                                            if (k == null || !$H(b, c, k)) continue;
                                            break;
                                        default:
                                            throw new E(h);
                                    }
                                    if (k = e(c, g)) {
                                        var l = k.width + (h === "center" ? 0 : this.R7a);
                                        if (!(g.width >
                                                l)) {
                                            switch (h) {
                                                case "start":
                                                case "justify":
                                                    h = b.qa(g);
                                                    k = h + l;
                                                    break;
                                                case "center":
                                                    k = b.qa(g) + g.width / 2;
                                                    h = k - l / 2;
                                                    k += l / 2;
                                                    break;
                                                case "end":
                                                    k = b.qa(g) + g.width;
                                                    h = k - l;
                                                    break;
                                                default:
                                                    throw new E(h);
                                            }
                                            for (l = d.indexOf(g); l >= 0; l--) {
                                                var m = d[l],
                                                    n = l - 1 < 0 || $H(b, c, d[l - 1]),
                                                    p;
                                                if (p = m === g || $H(b, c, m)) {
                                                    p = h;
                                                    var q = k,
                                                        r = b.qa(m);
                                                    p = p < r && r < q
                                                }
                                                if (p && n) f.set(m, 1);
                                                else break
                                            }
                                            for (g = d.indexOf(g) + 1; g < d.length; g++) {
                                                l = d[g];
                                                if (m = $H(b, c, l)) m = h, n = k, p = b.qa(l), m = m < p && p < n;
                                                if (m) f.set(l, 1);
                                                else break
                                            }
                                        }
                                    }
                                }
                            }
                            return f
                        });
                        this.aeb = (b, c, d) => {
                            var e, f;
                            const g =
                                b.layout.cells.get(c, d);
                            if (g && (g.ref.content.ref || g.ref.za.ref) && g.span.Qb === g.span.Tc && g.span.Mb === g.span.Gc) {
                                var h = this.TB.sv(b, c, d);
                                b = this.TB.Spa(b, c, d, __c.Vg({
                                    Mg: void 0,
                                    textAlign: void 0
                                }));
                                var {
                                    Mg: k,
                                    textAlign: l
                                } = __c.mg(__c.Ug, b);
                                if (k === "overflow") return __c.FKa(l, (e = g.ref.content.ref) === null || e === void 0 ? void 0 : e.type, (f = g.ref.za.ref) === null || f === void 0 ? void 0 : f.type, h ? () => h.gk.type : void 0)
                            }
                        }
                    }
                };
                var B2b = d5(function(a) {
                    const b = a.sheet;
                    var c = a.Oi;
                    const d = a.rvb,
                        e = a.Y,
                        f = a.Bra,
                        g = a.Pdb;
                    a = a.overflow;
                    const h = X4();
                    V1b(() => j5(() => {
                        const p = D(h.current);
                        var q;
                        const r = (q = e === null || e === void 0 ? void 0 : e.get()) !== null && q !== void 0 ? q : 1;
                        q = b.height;
                        p.style.width = `${b.width*r}px`;
                        p.style.height = `${q*r}px`
                    }), [h, e, b]);
                    const k = e5(p => f.geb(b, p, d, g), [f, b, d, g]);
                    var l = e5((p, q) => {
                        var r, t;
                        return (t = (r = k(p)) === null || r === void 0 ? void 0 : r.get(q)) !== null && t !== void 0 ? t : 0
                    }, [k]);
                    c = l1b(b, c, d, l);
                    l = b.width;
                    const m = b.height,
                        n = b.direction ===
                        "rtl";
                    return Y4("svg", {
                        ref: h,
                        role: "presentation",
                        className: a5("c6a1eQ", {
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
                            bk: t,
                            ck: w
                        }) => Y4("path", {
                            stroke: q,
                            strokeDasharray: t,
                            strokeDashoffset: w,
                            strokeWidth: r,
                            d: p.map(({
                                p1: u,
                                p2: x
                            }) => `M ${u.x} ${u.y} L ${x.x} ${x.y}`).join(" ")
                        }, `${q}-${r}-${t}-${w}`))
                    })
                });
                var C2b;
                C2b = Symbol.iterator;
                var D2b = class {
                    get size() {
                        return this.oga
                    }
                    get([a, b]) {
                        return (a = this.sE.get(a)) ? a.get(b) : void 0
                    }
                    has([a, b]) {
                        a = this.sE.get(a);
                        return a == null ? !1 : a.has(b)
                    }
                    set([a, b], c) {
                        let d = this.sE.get(a);
                        d == null && (d = new Map, this.sE.set(a, d));
                        d.set(b, c);
                        this.oga++;
                        return this
                    }
                    clear() {
                        this.sE.clear();
                        this.oga = 0
                    }
                    delete([a, b]) {
                        const c = this.sE.get(a);
                        if (c == null || !c.delete(b)) return !1;
                        this.oga--;
                        c.size === 0 && this.sE.delete(a);
                        return !0
                    }
                    forEach(a) {
                        for (const [b, c] of this.sE)
                            for (const [d, e] of c) a([b, d], e)
                    }*[C2b]() {
                        for (const [a, b] of this.sE)
                            for (const [c,
                                    d
                                ] of b) yield [
                                [a, c], d
                            ]
                    }
                    constructor() {
                        this.oga = 0;
                        this.sE = new Map
                    }
                };
                var E2b, F2b, G2b, H2b, I2b, J2b, K2b, N1b = __c.Rw("285688d5", !1),
                    L2b, M2b = class extends p5 {
                        render() {
                            const {
                                faa: a,
                                ...b
                            } = this.props, c = this.props.sheet;
                            return $4("div", {
                                ref: this.IYa,
                                className: a5("ZTz_iA", c.direction === "ltr" ? "TA4X7w" : "WvuqMw"),
                                children: [(a === null || a === void 0 ? void 0 : a.KGa) && Y4(D5, { ...b,
                                    sheet: c,
                                    range: a.KGa.range,
                                    qv: !0,
                                    rv: !0,
                                    className: "_0C8M3w"
                                }), (a === null || a === void 0 ? void 0 : a.R1a) && Y4(D5, { ...b,
                                    sheet: c,
                                    range: a.R1a.range,
                                    qv: !1,
                                    rv: !0,
                                    className: "_7n44yg"
                                }), (a === null || a === void 0 ? void 0 : a.qNa) && Y4(D5, { ...b,
                                    sheet: c,
                                    range: a.qNa.range,
                                    qv: !0,
                                    rv: !1,
                                    className: "fF5r6w"
                                }), (a === null || a === void 0 ? void 0 : a.D0a) && Y4(D5, { ...b,
                                    sheet: c,
                                    range: a.D0a.range,
                                    qv: !1,
                                    rv: !1,
                                    className: "llILYw"
                                })]
                            })
                        }
                        componentDidMount() {
                            const a = j5(() => {
                                var b = this.props,
                                    c = b.Y;
                                b = b.sheet;
                                const d = this.IYa.current;
                                d && (c = c ? c.get() : 1, d.style.width = `${b.width*c}px`, d.style.height = `${b.height*c}px`)
                            });
                            __c.wc(this, [a])
                        }
                        constructor(...a) {
                            super(...a);
                            this.IYa = wx()
                        }
                    };
                ({
                    c: [L2b, G2b]
                } = y5(M2b, [], [Kc], p5));
                G2b();
                var D5;
                new(E2b = class extends x5 {
                    constructor() {
                        super(D5);
                        H2b()
                    }
                }, (() => {
                    class a extends(I2b = p5) {
                        static A(b) {
                            P(b, {
                                eya: k5,
                                bounds: k5
                            })
                        }
                        get eya() {
                            const b = this.props.viewport,
                                c = this.props.qv,
                                d = this.props.rv;
                            return b == null || !c && !d ? b : k5(() => {
                                const e = __c.Ru(b.get());
                                return Ju({
                                    top: d ? 0 : e.top,
                                    left: c ? 0 : e.left,
                                    width: e.width,
                                    height: e.height
                                })
                            })
                        }
                        render() {
                            const b = this.props.XM,
                                c = this.props.sheet,
                                d = this.props.container,
                                e = this.props.range,
                                f = this.props.mG,
                                g = this.props.qv,
                                h = this.props.rv;
                            return $4("div", {
                                ref: this.pva,
                                className: a5("i0YQww",
                                    this.props.className),
                                children: [Y4("div", {
                                    ref: this.uUa,
                                    className: "vUKoKg",
                                    children: Y4("div", {
                                        ref: this.vUa,
                                        children: Y4(E5, {
                                            XM: b,
                                            sheet: c,
                                            container: d,
                                            bounds: e,
                                            Mo: this.props.Mo,
                                            rC: this.props.rC,
                                            wh: this.props.wh,
                                            UY: this.props.UY,
                                            Y: this.props.Y,
                                            Oi: this.Oi,
                                            j6: this.j6,
                                            KR: this.KR
                                        })
                                    })
                                }), Y4(this.nja, {}), f && Y4(f, {
                                    sheet: c,
                                    range: e,
                                    qv: g,
                                    rv: h
                                })]
                            })
                        }
                        componentDidMount() {
                            const b = j5(() => {
                                    var h = this.props,
                                        k = h.Y,
                                        l = h.sheet;
                                    const m = h.range;
                                    var n = this.pva.current;
                                    const p = this.uUa.current;
                                    h = this.vUa.current;
                                    k = k ? k.get() : 1;
                                    const q =
                                        m ? l.qa(m.Gc) + m.Gc.width - l.qa(m.Mb) : l.width,
                                        r = m ? l.ra(m.Tc) + m.Tc.height - l.ra(m.Qb) : l.height;
                                    n && (n.style.width = `${q*k}px`, n.style.height = `${r*k}px`);
                                    p && (p.style.width = `${q*k}px`, p.style.height = `${r*k}px`);
                                    n = l.direction === "rtl";
                                    n = m ? l.qa(m.Mb) * k * (n ? 1 : -1) : 0;
                                    l = m ? -l.ra(m.Qb) * k : 0;
                                    h && (h.style.transform = `translate(${n}px, ${l}px)`)
                                }),
                                c = this.props.sheet;
                            var d = this.props.E_;
                            const e = this.props.qv,
                                f = this.props.rv,
                                g = e || f ? d === null || d === void 0 ? void 0 : d(c, e, f) : void 0;
                            d = j5(() => {
                                const h = this.pva.current;
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
                                        var w;
                                        h.style.right = p ? (w = x.right) !== null && w !== void 0 ? w : n : "unset";
                                        var u;
                                        h.style.transform = (u = x.transform) !== null &&
                                            u !== void 0 ? u : "unset"
                                    }
                                }
                            });
                            __c.wc(this, [b, d])
                        }
                        get bounds() {
                            const b = this.props.sheet,
                                c = this.props.range;
                            if (b.layout.cols.empty || b.layout.rows.empty) return {
                                Mb: void 0,
                                Gc: void 0,
                                Qb: void 0,
                                Tc: void 0
                            };
                            var d, e, f, g;
                            return {
                                Mb: (d = c === null || c === void 0 ? void 0 : c.Mb) !== null && d !== void 0 ? d : b.layout.cols.first(),
                                Gc: (e = c === null || c === void 0 ? void 0 : c.Gc) !== null && e !== void 0 ? e : b.layout.cols.last(),
                                Qb: (f = c === null || c === void 0 ? void 0 : c.Qb) !== null && f !== void 0 ? f : b.layout.rows.first(),
                                Tc: (g = c === null || c === void 0 ? void 0 : c.Tc) !==
                                    null && g !== void 0 ? g : b.layout.rows.last()
                            }
                        }
                        constructor(...b) {
                            super(...b);
                            this.pva = (D5.A(this), wx());
                            this.uUa = wx();
                            this.vUa = wx();
                            this.KR = new N2b;
                            this.tvb = k5(() => [...this.Oi.get().keys()].sort((c, d) => this.props.sheet.layout.rows.Fe(c, d)), {
                                equals: __c.Xr()
                            });
                            this.qvb = k5(() => [...this.j6.get().keys()].sort((c, d) => this.props.sheet.layout.cols.Fe(c, d)), {
                                equals: __c.Xr()
                            });
                            this.nja = d5(() => Y4(this.props.F4a, {
                                Oi: this.tvb,
                                rvb: this.qvb,
                                Pdb: this.KR.Ydb,
                                range: this.props.range
                            }));
                            this.Oi = k5(() => {
                                var c;
                                const d = this.props.sheet;
                                var e = this.props.Y,
                                    f = (c = this.eya) === null || c === void 0 ? void 0 : c.get();
                                if (f && (f.height <= 0 || f.width <= 0)) return new Map;
                                c = this.bounds;
                                e = e.get();
                                var g = 50 * e;
                                const h = f ? f.la.y - g : c.Qb ? d.ra(c.Qb) : 0;
                                f = f ? f.br.y + g : c.Tc ? d.ra(c.Tc) + c.Tc.height : 0;
                                g = new Map;
                                for (let k = c.Qb; k != null && c.Tc != null && d.layout.rows.Fe(k, c.Tc) <= 0; k = d.layout.rows.next(k)) {
                                    const l = d.ra(k);
                                    if (!(l + k.height < h)) {
                                        if (l > f) break;
                                        g.set(k, l * e)
                                    }
                                }
                                return g
                            }, {
                                equals: v5.shallow
                            });
                            this.j6 = k5(() => {
                                var c;
                                const d = this.props.sheet;
                                var e = this.props.Y,
                                    f = (c = this.eya) ===
                                    null || c === void 0 ? void 0 : c.get();
                                if (f && (f.height <= 0 || f.width <= 0)) return new Map;
                                c = this.bounds;
                                e = e.get();
                                var g = 50 * e;
                                const h = f ? f.la.x - g : c.Mb ? d.qa(c.Mb) : 0;
                                f = f ? f.br.x + g : c.Gc ? d.qa(c.Gc) + c.Gc.width : 0;
                                g = new Map;
                                for (let k = c.Mb; k != null && c.Gc != null && d.layout.cols.Fe(k, c.Gc) <= 0; k = d.layout.cols.next(k)) {
                                    const l = d.qa(k);
                                    if (!(l + k.width < h)) {
                                        if (l > f) break;
                                        g.set(k, l * e)
                                    }
                                }
                                return g
                            }, {
                                equals: v5.shallow
                            })
                        }
                    }({
                        c: [D5, H2b]
                    } = y5(a, [], [Kc], I2b))
                })(), E2b);
                var N2b = class {
                        constructor() {
                            this.cells = new D2b;
                            this.xwa = (a, b, c) => {
                                let d = this.cells.get([a, b]);
                                d == null && (d = w5.box(void 0, {
                                    deep: !1
                                }), this.cells.set([a, b], d));
                                d.set(c);
                                return () => {
                                    const e = this.cells.get([a, b]);
                                    e === d && (e.set(void 0), this.cells.delete([a, b]))
                                }
                            };
                            this.Ydb = (a, b) => {
                                var c;
                                let d = this.cells.get([a, b]);
                                d == null && (d = w5.box(void 0, {
                                    deep: !1
                                }), this.cells.set([a, b], d));
                                return (c = d.get()) === null || c === void 0 ? void 0 : c.DIa
                            }
                        }
                    },
                    E5;
                new(F2b = class extends x5 {
                    constructor() {
                        super(E5);
                        J2b()
                    }
                }, (() => {
                    class a extends(K2b = p5) {
                        static A(b) {
                            P(b, {
                                yK: w5.shallow,
                                hq: k5,
                                pGa: u5,
                                k9: u5.bound
                            })
                        }
                        get hq() {
                            var b;
                            const c = (b = this.props.Mo) === null || b === void 0 ? void 0 : b.get();
                            if (c != null && c.length !== 0) return new __c.uE(c)
                        }
                        render() {
                            var b;
                            return $4("div", {
                                ref: S1b(this.Fd, (b = this.hq) === null || b === void 0 ? void 0 : b.Zl),
                                children: [Y4("div", {
                                    ref: this.Zla,
                                    className: "_5YlOqQ"
                                }), Y4("div", {
                                    ref: this.ama,
                                    className: "_XCmKw"
                                }), this.yK.map(c => c.kob)]
                            })
                        }
                        componentDidMount() {
                            const b =
                                l5(() => [this.props.sheet, this.props.j6.get(), this.props.Oi.get()], ([e, f, g], h) => {
                                    [h] = h || [];
                                    e !== h && this.g8a();
                                    this.pGa(f, g)
                                }, {
                                    fireImmediately: !0
                                }),
                                c = j5(() => {
                                    var e = this.props,
                                        f = e.Y;
                                    e = e.sheet;
                                    const g = this.Fd.current;
                                    g && (f = f ? f.get() : 1, g.style.width = `${e.width*f}px`, g.style.height = `${e.height*f}px`)
                                }),
                                d = this.yK.map(e => O1b(e));
                            __c.wc(this, [c, b, ...d])
                        }
                        g8a() {
                            const b = D(this.Zla.current),
                                c = D(this.ama.current);
                            b.innerHTML = "";
                            c.innerHTML = "";
                            this.ACa.length = 0;
                            this.yK.length = 0
                        }
                        pGa(b, c) {
                            const d = D(this.Zla.current),
                                e = D(this.ama.current),
                                f = [],
                                g = new Map;
                            for (const h of this.ACa) c.has(h.na) ? g.set(h.na, h) : f.push(h);
                            for (const [h, k] of c) c = g.get(h) || f.pop(), c || (c = new O2b(this.k9, h), d.appendChild(c.q8), e.appendChild(c.s8), this.ACa.push(c)), c.update(k, h, b);
                            for (const h of f) h.hide()
                        }
                        k9(b, c) {
                            const d = this.props.UY,
                                e = this.props.sheet,
                                f = this.props.container,
                                g = this.props.KR;
                            b = new P2b(this.props.XM, this.props.rC, this.props.wh, d(b, c), e, b, c, f, g.xwa, this.waa, this.vaa);
                            __c.wc(this, O1b(b));
                            this.yK.push(b);
                            return b
                        }
                        constructor(...b) {
                            super(...b);
                            this.Fd = (E5.A(this), wx());
                            this.Zla = wx();
                            this.ama = wx();
                            this.ACa = [];
                            this.yK = [];
                            this.waa = s5(c => {
                                const d = this.props.Oi.get();
                                return c === "first" ? d.keys().next().value : [...d.keys()].pop()
                            });
                            this.vaa = s5(c => {
                                const d = this.props.j6.get();
                                return c === "first" ? d.keys().next().value : [...d.keys()].pop()
                            })
                        }
                    }({
                        c: [E5, J2b]
                    } = y5(a, [], [Kc], K2b))
                })(), F2b);
                var O2b = class {
                        static A(a) {
                            P(a, {
                                update: u5
                            })
                        }
                        update(a, b, c) {
                            [this.q8, this.s8].forEach(d => {
                                d.style.transform = `translateY(${a}px)`;
                                d.classList.add("FPpqvg")
                            });
                            this.na = b;
                            for (const [d] of c) c = this.yK.get(d), c || (c = this.k9(d, b), this.yK.set(d, c), this.q8.appendChild(c.p8), this.s8.appendChild(c.hL)), c.update(b)
                        }
                        hide() {
                            [this.q8, this.s8].forEach(a => {
                                a.style.transform = "translate(-1000px, -1000px) scale(0)"
                            })
                        }
                        constructor(a, b) {
                            this.k9 = a;
                            this.na = b;
                            this.q8 = (O2b.A(this), document.createElement("div"));
                            this.s8 = document.createElement("div");
                            this.yK = new Map
                        }
                    },
                    P2b = class {
                        static A(a) {
                            P(a, {
                                c9: w5.ref,
                                na: w5.ref,
                                Aqa: k5,
                                update: u5,
                                Ps: k5,
                                attrs: k5.struct,
                                csa: k5,
                                $u: k5,
                                renderer: k5,
                                DIa: k5.struct
                            })
                        }
                        get Aqa() {
                            if (!N1b) return !1;
                            const a = this.Ps;
                            return a == null || a.content.ref == null || a.content.ref.type !== "formula" ? !1 : this.XM(this.sheet, a.content.ref.value)
                        }
                        update(a) {
                            a !== this.na && (this.na = a, this.gz.na = a, this.Yna && this.Yna(), this.Yna = this.xwa(this.na, this.col, this))
                        }
                        get kob() {
                            return this.c9
                        }
                        get Ps() {
                            const a = this.sheet.layout.cells.get(this.na, this.col);
                            return a ?
                                a.ref : void 0
                        }
                        get attrs() {
                            const a = this.gz.attrs;
                            return {
                                Mg: a === null || a === void 0 ? void 0 : a.Mg,
                                textAlign: a === null || a === void 0 ? void 0 : a.textAlign,
                                direction: a === null || a === void 0 ? void 0 : a.direction,
                                link: a === null || a === void 0 ? void 0 : a.link
                            }
                        }
                        get csa() {
                            var a = this.gz.span;
                            if (!a) return !1;
                            if (a.Qb === a.Tc && a.Mb === a.Gc) return !0;
                            var b = this.waa("first");
                            const c = this.waa("last"),
                                d = this.vaa("first"),
                                e = this.vaa("last");
                            if (!(b && c && d && e)) return !1;
                            b = this.sheet.layout.rows.Fe(a.Qb, b) >= 0 && this.sheet.layout.rows.Fe(a.Qb, c) <=
                                0 ? a.Qb : b;
                            a = this.sheet.layout.cols.Fe(a.Mb, d) >= 0 && this.sheet.layout.cols.Fe(a.Mb, e) <= 0 ? a.Mb : d;
                            return b === this.na && a === this.col
                        }
                        get $u() {
                            const a = this.sheet,
                                b = this.na,
                                c = this.col;
                            if (!this.container) return {
                                type: void 0,
                                sheet: a,
                                na: b,
                                column: c
                            };
                            switch (this.container.type) {
                                case "fixed-page":
                                    return this.container.znb.Hd(c, b);
                                case "sheet-item":
                                    return this.container.dya.Hd(c, b);
                                case "sheet-element":
                                    return this.container.Frb.Hd(c, b);
                                default:
                                    throw new E(this.container);
                            }
                        }
                        get renderer() {
                            const a = this.Ps;
                            if (a && this.csa &&
                                (a.content.ref || a.za.ref)) return this.rC({
                                context: {
                                    container: this.$u,
                                    attrs: this.attrs
                                },
                                ap: this.fua,
                                wh: this.wh
                            })
                        }
                        get DIa() {
                            this.EIa.reportObserved();
                            var a = $1b(() => this.renderer);
                            if (a && (a = a.type === "react" ? this.j3 : this.iD, a.childNodes.length !== 0 && (a = a.childNodes[0], a instanceof HTMLElement))) return {
                                width: a.clientWidth,
                                height: a.clientHeight
                            }
                        }
                        constructor(a, b, c, d, e, f, g, h, k, l, m) {
                            var n, p, q, r, t, w;
                            this.XM = a;
                            this.rC = b;
                            this.gz = d;
                            this.sheet = e;
                            this.col = f;
                            this.container = h;
                            this.xwa = k;
                            this.waa = l;
                            this.vaa = m;
                            this.p8 =
                                (P2b.A(this), document.createElement("div"));
                            this.hL = document.createElement("div");
                            this.dD = document.createElement("div");
                            this.iD = document.createElement("div");
                            this.j3 = document.createElement("div");
                            this.EIa = Z1b("content size atom");
                            this.fua = u5(() => this.EIa.reportChanged());
                            this.na = g;
                            this.p8.className = "_2JFriw";
                            this.hL.className = "imy9ug";
                            this.dD.className = a5("pDMp7w", {
                                _0yZ6Qg: ((p = this.Ps) === null || p === void 0 ? void 0 : (n = p.content.ref) === null || n === void 0 ? void 0 : n.type) !== "text3",
                                qhF5uA: ((r = this.Ps) === null ||
                                    r === void 0 ? void 0 : (q = r.content.ref) === null || q === void 0 ? void 0 : q.type) !== "text3" && ((w = this.Ps) === null || w === void 0 ? void 0 : (t = w.content.ref) === null || t === void 0 ? void 0 : t.type) !== "text2",
                                qxD1GA: this.Aqa
                            });
                            this.iD.className = "_30B9pw";
                            this.dD.appendChild(this.iD);
                            this.hL.appendChild(this.dD);
                            this.j3.className = "G7zH2w";
                            this.Yna = k(this.na, this.col, this);
                            this.wh = u => Y4(c, { ...u,
                                ap: this.fua
                            })
                        }
                    };
                var Q2b, R2b, S2b, m5;
                new(Q2b = class extends x5 {
                    constructor() {
                        super(m5);
                        R2b()
                    }
                }, (() => {
                    class a extends(S2b = p5) {
                        static A(b) {
                            P(b, {
                                faa: k5
                            })
                        }
                        render() {
                            const {
                                XM: b,
                                sheet: c,
                                container: d,
                                Mo: e,
                                E_: f,
                                rC: g,
                                ke: h,
                                wh: k,
                                viewport: l,
                                mG: m,
                                H1a: n = !1
                            } = this.props;
                            if (!c.layout.cols.empty && !c.layout.rows.empty) return Y4("div", {
                                className: a5("SNkrHw", c.direction === "ltr" ? "TA4X7w" : "WvuqMw", {
                                    RaA0Nw: n
                                }),
                                ...h,
                                children: Y4(L2b, {
                                    XM: b,
                                    rC: g,
                                    wh: k,
                                    F4a: this.nja,
                                    UY: this.UY,
                                    sheet: c,
                                    container: d,
                                    Mo: e,
                                    E_: f,
                                    Y: this.Y,
                                    viewport: l,
                                    mG: m,
                                    faa: this.faa
                                })
                            })
                        }
                        get faa() {
                            var b = this.props.sheet;
                            const c = {},
                                d = b.view.freeze.hV ? b.layout.$d.get(b.view.freeze.hV) : void 0,
                                e = b.view.freeze.QG ? b.layout.Nd.get(b.view.freeze.QG) : void 0,
                                f = b.layout.rows.first(),
                                g = b.layout.rows.last(),
                                h = b.layout.cols.first(),
                                k = b.layout.cols.last();
                            if (f != null && g != null && h != null && k != null) {
                                var l = e ? b.layout.cols.next(e) : h;
                                b = d ? b.layout.rows.next(d) : f;
                                d && e && (c.KGa = {
                                    range: {
                                        Mb: h,
                                        Qb: f,
                                        Gc: e,
                                        Tc: d
                                    }
                                });
                                d && l && (c.R1a = {
                                    range: {
                                        Mb: l,
                                        Qb: f,
                                        Gc: k,
                                        Tc: d
                                    }
                                });
                                e && b && (c.qNa = {
                                    range: {
                                        Mb: h,
                                        Qb: b,
                                        Gc: e,
                                        Tc: g
                                    }
                                });
                                b && l && (c.D0a = {
                                    range: {
                                        Mb: l,
                                        Qb: b,
                                        Gc: k,
                                        Tc: g
                                    }
                                });
                                return c
                            }
                        }
                        get Y() {
                            return this.props.Y ?
                                this.props.Y : k5(() => 1)
                        }
                        constructor(...b) {
                            super(...b);
                            this.nja = (m5.A(this), d5(c => {
                                const {
                                    sheet: d,
                                    Bra: e,
                                    Y: f,
                                    U7: g = "hidden"
                                } = this.props;
                                return Y4(A5, {
                                    sheet: d,
                                    range: c.range,
                                    Y: f,
                                    children: Y4(B2b, { ...c,
                                        sheet: d,
                                        Y: this.Y,
                                        Bra: e,
                                        overflow: g
                                    })
                                })
                            }));
                            this.UY = (c, d) => new __c.YKa(this.props.TB, this.props.$y, this.props.sheet, c, d, this.Y, this.yt, this.Ct);
                            this.yt = (c, d) => {
                                var e, f;
                                return (e = (f = this.props).yt) === null || e === void 0 ? void 0 : e.call(f, this.props.sheet, c, d)
                            };
                            this.Ct = (c, d) => {
                                var e, f;
                                return (e = (f = this.props).Ct) === null ||
                                    e === void 0 ? void 0 : e.call(f, this.props.sheet, c, d)
                            }
                        }
                    }({
                        c: [m5, R2b]
                    } = y5(a, [], [Kc], S2b))
                })(), Q2b);
                __c.eLa = {
                    Fgb: function(a) {
                        const b = a.yn,
                            c = a.Gd,
                            d = a.ed,
                            e = a.Xl,
                            f = a.TB,
                            g = a.$y,
                            h = a.WW;
                        u1b({
                            Yy: a.Yy,
                            Af: a.Af,
                            itb: a.yO,
                            nb: a.nb
                        });
                        const k = Q1b({
                            rC: h,
                            TB: f,
                            $y: g,
                            zn: void 0
                        });
                        b.Hja = K1b({
                            Fp: k
                        });
                        c.oja = A1b({
                            Fp: k
                        });
                        ({
                            zEa: a
                        } = H1b({
                            Fp: k,
                            ff: e(),
                            GYa: new u2b
                        }));
                        d.Mp.Gja = a;
                        const {
                            O2a: l,
                            P2a: m,
                            N2a: n
                        } = z1b();
                        return {
                            AEa: d5(p => Y4(a2b, { ...p,
                                container: void 0,
                                Fp: k,
                                I4a: l,
                                J4a: m,
                                G4a: n,
                                wh: b2b
                            }))
                        }
                    }
                };
            }).call(self, self._7ccc7343da2ae983607b3819c7bc1f93);
        }

    }
])
//# sourceMappingURL=sourcemaps/d8e7fe71c063b405.js.map