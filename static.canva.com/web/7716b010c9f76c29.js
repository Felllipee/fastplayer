(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [32915], {

        /***/
        88780: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(813110);
            __web_req__(878415);
            __web_req__(914242);
            self._c68b74ff4d61aaeea4f241f0854f5b1a = self._c68b74ff4d61aaeea4f241f0854f5b1a || {};
            (function(__c) {
                var Nf = __c.Nf;
                var E = __c.E;
                var w = __c.w;
                var KHb = function(a) {
                        var b = {
                            element: void 0
                        };
                        const c = new Map;
                        for (const d in b) a[d].tN.forEach((e, f) => c.set(f, e));
                        return {
                            tN: c,
                            apply: d => {
                                const e = new Map,
                                    f = {},
                                    g = {};
                                for (const h in d) {
                                    const k = a[h].apply(d[h]);
                                    k.uca.forEach((l, m) => e.set(m, l));
                                    f[h] = k.data;
                                    g[h] = k.gaa
                                }
                                return {
                                    uca: e,
                                    data: f,
                                    gaa: g
                                }
                            }
                        }
                    },
                    LHb = function(a) {
                        return () => a
                    },
                    f7 = function(a, b, c, d) {
                        return new MHb(a, b, c, d)
                    },
                    g7 = function(a, b) {
                        return b(a)
                    },
                    NHb = function(a, b, c) {
                        return c(a, b)
                    },
                    OHb = function(a, b) {
                        return b(a)
                    },
                    h7 = function(a, b) {
                        return a === b || b.map(c => a.N9(PHb(c)))
                    },
                    RHb = function(a, b) {
                        return a.jaa(b).map(c => new QHb(c, d => d.props[b]))
                    },
                    PHb = function(a) {
                        w(a instanceof i7);
                        return a
                    },
                    k7 = function(a, b) {
                        if (a === b) return !0;
                        switch (typeof a) {
                            case "string":
                            case "number":
                            case "boolean":
                            case "undefined":
                                return !1;
                            case "object":
                                if (typeof b !== "object" || a.kind !== b.kind) return !1;
                                switch (a.kind) {
                                    case "array":
                                        return b.kind === "array" && j7(a.items, b.items);
                                    case "set":
                                        var c;
                                        if (c = b.kind === "set") a = a.items, b = b.items, c = a === b ? !0 : a.size !== b.size ? !1 : j7([...a], [...b]);
                                        return c;
                                    case "map":
                                        if (c = b.kind ===
                                            "map") a = a.items, b = b.items, c = a === b ? !0 : a.size !== b.size ? !1 : j7([...a.keys(), ...a.values()], [...b.keys(), ...b.values()]);
                                        return c;
                                    case "record":
                                        return b.kind === "record" && SHb(a.fields, b.fields);
                                    case "instance":
                                        return b.kind === "instance" && a.instance === b.instance;
                                    default:
                                        throw new E(a);
                                }
                            default:
                                throw new E(a);
                        }
                    },
                    j7 = function(a, b) {
                        if (a === b) return !0;
                        if (a.length !== b.length) return !1;
                        for (let c = 0; c < a.length; c++)
                            if (!k7(a[c], b[c])) return !1;
                        return !0
                    },
                    SHb = function(a, b) {
                        if (a === b) return !0;
                        const c = Object.keys(a),
                            d = Object.keys(b),
                            e = new Set([...c, ...d]);
                        if (c.length !== e.size || d.length !== e.size) return !1;
                        for (const f of e)
                            if (!k7(a[f], b[f])) return !1;
                        return !0
                    },
                    l7 = function(a) {
                        return typeof a === "string" ? JSON.stringify(a) : String(a)
                    },
                    m7 = function(a, b, c) {
                        switch (c.kind) {
                            case 0:
                                return THb(c.value);
                            case 1:
                                const f = m7(a, b, c.cq);
                                return UHb[c.name].map(r => n7(r, f));
                            case 2:
                                const g = m7(a, b, c.TEa),
                                    h = m7(a, b, c.UEa);
                                return VHb[c.name].map(r => WHb(r, g, h));
                            case 3:
                                const k = c.args.map(r => r.kind !== 13 ? new XHb(m7(a, b, r)) : new YHb(m7(a, b, r.A6a))),
                                    l = c.name;
                                switch (l) {
                                    case 0:
                                    case 1:
                                        var d =
                                            k.map(r => r.e8(t => t.type, t => t.type.kF()));
                                        return g7(d, r => o7.union(...r).map(t => ZHb[l](t).map(v => $Hb(v, k))));
                                    default:
                                        return aIb[l].map(r => $Hb(r, k))
                                }
                            case 4:
                                return bIb(m7(a, b, c.tV), (r, t) => {
                                    const v = cIb(a, b, c.param, t, c.body);
                                    return dIb[c.name](t, v.resultType).map(u => eIb(u, r, v))
                                });
                            case 5:
                                const m = c.entries.map(([r, t]) => [m7(a, b, r), m7(a, b, t)]);
                                d = o7.union(...m.map(([r]) => r.type));
                                var e = o7.union(...m.map(([, r]) => r.type));
                                return NHb(d, e, (r, t) => fIb[0](r, t).map(v => gIb(v, m)));
                            case 6:
                                const n = Nf(c.fields, r => m7(a, b,
                                    r));
                                d = Nf(n, r => r.type);
                                return OHb(d, r => hIb[0](r).map(t => iIb(t, n)));
                            case 7:
                                d = a.types.resolve(c.name);
                                if (!d) throw Error(`cannot instantiate unknown type: ${c.name}`);
                                const p = m7(a, b, {
                                    kind: 6,
                                    fields: c.args
                                });
                                return d.UQa.map(r => n7(r, p, {
                                    Hm: !0
                                }));
                            case 8:
                                return d = m7(a, b, c.base), jIb(d, c.s9a);
                            case 9:
                                return kIb(b, c.name);
                            case 10:
                                return d = __c.Jd(c.defs, r => m7(a, b, r)), lIb(a, b, d, c.body);
                            case 11:
                                d = m7(a, b, c.test).as(o7.bg);
                                e = m7(a, b, c.o1a);
                                const q = m7(a, b, c.alternate);
                                return mIb(d, e, q);
                            case 12:
                                return m7(a, b, c.body).computed();
                            default:
                                throw new E(c);
                        }
                    },
                    cIb = function(a, b, c, d, e) {
                        return m7(a, b.define(c, d), e).map((f, g) => nIb.of(d, f, h => k => g(h.define(c, k))))
                    },
                    THb = function(a) {
                        switch (typeof a) {
                            case "string":
                                return p7(o7.string, a);
                            case "number":
                                return p7(o7.number, a);
                            case "boolean":
                                return p7(o7.bg, a);
                            case "undefined":
                                return p7(o7.undefined, a);
                            default:
                                throw new E(a);
                        }
                    },
                    jIb = function(a, b) {
                        return a.map(c => RHb(c, b).map(({
                            type: d,
                            get: e
                        }) => n7(new q7(c, d, e), a)))
                    },
                    kIb = function(a, b) {
                        return a.resolve(b).map(c => r7.of(c, d => d.resolve(b)))
                    },
                    lIb =
                    function(a, b, c, d) {
                        const e = __c.Jd(c, g => g.type),
                            f = __c.Jd(c, g => g.evaluate);
                        return oIb(m7(a, new s7(new Map(e), b), d), g => {
                            const h = __c.Jd(f, k => k(g));
                            return new s7(new Map(h), g)
                        })
                    },
                    mIb = function(a, b, c) {
                        return b.map((d, e) => c.map((f, g) => {
                            f = o7.union(d, f);
                            return r7.of(f, h => {
                                const k = a(h),
                                    l = e(h),
                                    m = g(h);
                                return () => k() ? l() : m()
                            })
                        }))
                    },
                    n7 = function({
                        O4: a,
                        resultType: b,
                        apply: c
                    }, d, e) {
                        const f = d.as(a);
                        return new r7(b, g => {
                            const h = f(g);
                            if (e === null || e === void 0 ? 0 : e.Hm) {
                                const k = pIb(c);
                                return () => k(h())
                            }
                            return () => c(h())
                        })
                    },
                    WHb = function({
                        O4: a,
                        VEa: b,
                        resultType: c,
                        apply: d
                    }, e, f) {
                        const g = e.as(a),
                            h = f.as(b);
                        return new r7(c, k => {
                            const l = g(k),
                                m = h(k);
                            return () => d(l(), m())
                        })
                    },
                    $Hb = function({
                        YEa: a,
                        resultType: b,
                        apply: c
                    }, d) {
                        let e;
                        const f = d.map(g => g.d5(h => h.as(a), h => h.as(e !== null && e !== void 0 ? e : e = o7.tV(a))));
                        return new r7(b, g => {
                            const h = l => l(g),
                                k = f.map(l => l.d5(h, h));
                            return () => {
                                const l = [];
                                k.forEach(m => {
                                    m.e8(n => l.push(n()), n => l.push(...n()))
                                });
                                return c(l)
                            }
                        })
                    },
                    eIb = function({
                        pFa: a,
                        resultType: b,
                        reduce: c
                    }, d, e) {
                        const f = qIb(e, a);
                        return r7.of(b, g => {
                            const h = d(g),
                                k =
                                f(g),
                                l = pIb(m => {
                                    m = m.map(LHb);
                                    return [m, m.map(k)]
                                });
                            return () => {
                                const [m, n] = l(h());
                                return c(m, n)
                            }
                        })
                    },
                    gIb = function({
                        keyType: a,
                        valueType: b,
                        resultType: c,
                        apply: d
                    }, e) {
                        const f = e.map(([g, h]) => [g.as(a), h.as(b)]);
                        return new r7(c, g => {
                            const h = f.map(([k, l]) => [k(g), l(g)]);
                            return () => d(h.map(([k, l]) => [k(), l()]))
                        })
                    },
                    iIb = function({
                        XEa: a,
                        resultType: b,
                        apply: c
                    }, d) {
                        const e = Object.keys(a).filter(g => !d.hasOwnProperty(g));
                        if (e.length) throw Error(`too few arguments (missing ${e})`);
                        const f = rIb(a, (g, h) => d[h].as(g));
                        return new r7(b,
                            g => {
                                const h = sIb(f, k => k(g));
                                return () => c(tIb(h, k => k()))
                            })
                    },
                    p7 = function(a, b) {
                        const c = LHb(b);
                        return new r7(a, () => c)
                    },
                    bIb = function(a, b) {
                        return a.type.kF().map(c => b(a.as(o7.tV(c)), c))
                    },
                    oIb = function(a, b) {
                        const c = a.evaluate;
                        return new r7(a.type, d => c(b(d)))
                    },
                    qIb = function(a, b) {
                        if (!h7(a.resultType, b)) throw Error(`type ${a.resultType} is not assignable to expected type: ${b}`);
                        return a.evaluate
                    },
                    pIb = function(a) {
                        let b;
                        return c => {
                            if (b && t7.Fh(b.u, c)) return b.v;
                            const d = a(c);
                            b = {
                                u: c,
                                v: d
                            };
                            return d
                        }
                    },
                    rIb = function(a,
                        b) {
                        return Nf(a, b)
                    },
                    sIb = function(a, b) {
                        return Nf(a, b)
                    },
                    tIb = function(a, b) {
                        return Nf(a, b)
                    },
                    yIb = function(a) {
                        const b = a.types,
                            c = a.values;
                        class d {
                            optional() {
                                const H = this.O1,
                                    G = this.E_,
                                    J = this.pha,
                                    M = b.union(this.type, b.undefined);
                                return new d(M, S => S != null ? H(S) : void 0, (S, R, V) => V != null ? G(S, R, V) : void 0, (S, R, V, da) => V != null ? J(S, R, V, da) : da.delete(R))
                            }
                            uv() {
                                return new d(this.type, this.O1, this.E_, (H, G) => {
                                    throw H.error(G, "read-only field");
                                })
                            }
                            nT(H) {
                                return H ? new d(this.type, this.O1, (G, J, M) => {
                                    M = this.E_(G, J, M);
                                    M != null &&
                                        H(G, J, M);
                                    return M
                                }, (G, J, M, S) => {
                                    M != null && H(G, J, M);
                                    this.pha(G, J, M, S)
                                }) : this
                            }
                            uWa(H, G) {
                                const J = this.O1,
                                    M = this.E_,
                                    S = this.pha;
                                return uIb(this.type, R => {
                                    const V = () => M(H, G, R.get(G));
                                    return {
                                        fMa: () => J(V()),
                                        zpa: V,
                                        JUa: da => S(H, G, da, R)
                                    }
                                })
                            }
                            constructor(H, G, J, M) {
                                this.type = H;
                                this.O1 = G;
                                this.E_ = J;
                                this.pha = M
                            }
                        }
                        a = new d(b.string, H => H, u7("string", H => H.value), v7("string"));
                        const e = new d(b.bg, H => H, u7("boolean", H => H.value), v7("boolean")),
                            f = (new d(b.number, H => H, u7("int32", H => H.value), v7("int32"))).nT(H => Number.isInteger(H)),
                            g =
                            (new d(b.number, H => H, u7("double", H => H.value), v7("double"))).nT(H => Number.isFinite(H)),
                            h = new d(b.instance("Fill"), H => c.instance("Fill", H), u7("fill", H => H.value), v7("fill")),
                            k = a.optional(),
                            l = e.optional(),
                            m = f.optional(),
                            n = g.optional(),
                            p = h.optional(),
                            q = a.uv(),
                            r = e.uv(),
                            t = f.uv(),
                            v = g.uv(),
                            u = h.uv(),
                            x = k.uv(),
                            y = l.uv(),
                            z = m.uv(),
                            A = n.uv(),
                            D = p.uv(),
                            F = {
                                [0]: {
                                    [0]: {
                                        string: a,
                                        boolean: e,
                                        int32: f,
                                        double: g,
                                        fill: h
                                    },
                                    [1]: {
                                        string: q,
                                        boolean: r,
                                        int32: t,
                                        double: v,
                                        fill: u
                                    }
                                },
                                [1]: {
                                    [0]: {
                                        string: k,
                                        boolean: l,
                                        int32: m,
                                        double: n,
                                        fill: p
                                    },
                                    [1]: {
                                        string: x,
                                        boolean: y,
                                        int32: z,
                                        double: A,
                                        fill: D
                                    }
                                }
                            };
                        return (H, G) => {
                            const J = new vIb(H),
                                M = Nf(G, R => R.key),
                                S = Nf(G, R => {
                                    var V = R.Tva;
                                    const da = R.Mta;
                                    switch (R.type) {
                                        case "string":
                                            V = F[V][da].string.nT(wIb(R.TB));
                                            break;
                                        case "boolean":
                                            V = F[V][da]["boolean"];
                                            break;
                                        case "double":
                                            V = F[V][da]["double"].nT(xIb(R.range));
                                            break;
                                        case "int32":
                                            V = F[V][da].int32.nT(xIb(R.range));
                                            break;
                                        case "fill":
                                            V = F[V][da].fill;
                                            break;
                                        default:
                                            throw new E(R);
                                    }
                                    return V.uWa(J, R.key)
                                });
                            return {
                                tN: new Map(Object.entries(S).map(([R, V]) => [M[R], V.type])),
                                apply: R => {
                                    const V = Nf(S, ma => ma.eval(R)),
                                        da = Nf(V, ma => ({
                                            get: ma.zpa
                                        })),
                                        oa = Nf(V, ma => ({
                                            get: ma.zpa,
                                            set: ma.JUa
                                        }));
                                    return {
                                        uca: new Map(Object.entries(V).map(([ma, za]) => [M[ma], za.fMa])),
                                        data: Object.create(null, da),
                                        gaa: Object.create(null, oa)
                                    }
                                }
                            }
                        }
                    },
                    u7 = function(a, b) {
                        return (c, d, e) => {
                            if (e == null) throw c.error(d, "not found");
                            if (e.type !== a) throw c.error(d, `type error: expected ${a}, was ${e.type}`);
                            return b(e)
                        }
                    },
                    v7 = function(a) {
                        return (b, c, d, e) => {
                            if (d == null) throw b.error(a, "value is nullish");
                            if (a === "string" && typeof d === "string" ||
                                a === "boolean" && typeof d === "boolean" || a === "double" && typeof d === "number" || a === "int32" && typeof d === "number") b = {
                                type: a,
                                value: d
                            };
                            else {
                                if (a === "fill" && typeof d === "object") throw b.error(a, "Write for fill is not yet supported");
                                throw b.error(a, `type error: expected ${a}, but received ${typeof d}`);
                            }
                            e.set(c, b)
                        }
                    },
                    xIb = function(a) {
                        if (a) {
                            var b = a.min,
                                c = a.max;
                            w(b == null || c == null || b <= c);
                            return (d, e, f) => {
                                if (b != null && f < b) throw d.error(e, `value below min ${b}: ${f}`);
                                if (c != null && f > c) throw d.error(e, `value above max ${b}: ${f}`);
                            }
                        }
                    },
                    wIb = function(a) {
                        if (a) return (b, c, d) => {
                            if (!a.test(d)) throw b.error(c, `value does not match regex ${a}: '${d}'`);
                        }
                    },
                    uIb = function(a, b) {
                        return {
                            type: a,
                            eval: b
                        }
                    },
                    AIb = function() {
                        return (new zIb({})).add((a, b) => ({
                            Fill: new a("Fill", {
                                color: b.string
                            }, c => __c.JQ.create({ ...__c.LQ,
                                color: c.color
                            }))
                        })).add((a, b) => ({
                            RectElement: new a("RectElement", {
                                top: b.number,
                                left: b.number,
                                width: b.number,
                                height: b.number,
                                rotation: b.union(b.number, b.undefined),
                                fill: b.instance("Fill"),
                                P: b.union(b.array(b.number), b.undefined)
                            }, c => {
                                var d, e, f;
                                const g = __c.rL.create({ ...__c.oS,
                                    top: c.top,
                                    left: c.left,
                                    width: c.width,
                                    height: c.height,
                                    rotation: (e = c.rotation) !== null && e !== void 0 ? e : __c.oS.rotation,
                                    fill: __c.LQ,
                                    P: (f = (d = c.P) === null || d === void 0 ? void 0 : d.items) !== null && f !== void 0 ? f : __c.oS.P
                                });
                                Object.defineProperties(g, {
                                    fill: {
                                        value: c.fill.instance
                                    }
                                });
                                return g
                            })
                        }))
                    },
                    w7 = function() {
                        throw Error("ref not found");
                    },
                    CIb = function(a, b) {
                        return class extends BIb {
                            componentDidCatch(c) {
                                a.error(c);
                                this.setState({
                                    hasError: !0
                                })
                            }
                            render() {
                                return this.state.hasError ?
                                    x7(__c.Hk, {
                                        background: "criticalLow",
                                        width: "full",
                                        height: "full",
                                        padding: "0.25u",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        role: "alert",
                                        children: x7(__c.Ek, {
                                            size: "xsmall",
                                            alignment: "center",
                                            children: __c.O("Q6XSow")
                                        })
                                    }) : x7(b, { ...this.props
                                    })
                            }
                            constructor(...c) {
                                super(...c);
                                this.state = {
                                    hasError: !1
                                }
                            }
                        }
                    },
                    HIb = function(a, b, c) {
                        const d = f => ({
                            element: f.W.Jg
                        });
                        b = KHb(b);
                        switch (c.type) {
                            case 0:
                                c = c.Jw;
                                if (typeof c === "object") {
                                    var e = a.NAa.types;
                                    e = e.tV(e.instance("RectElement"));
                                    return DIb(a, d, b, e, c, f =>
                                        new EIb(() => f().map(g => g.instance)))
                                }
                                return FIb(d, b, c);
                            case 1:
                                return GIb(a, d, b, c.Component);
                            default:
                                throw new E(c);
                        }
                    },
                    DIb = function(a, b, c, d, e, f) {
                        const g = a.w6(a.NAa, c, d).compile(e);
                        return {
                            type: 0,
                            Jw: h => ({
                                Za: f(g.apply(b(h)))
                            })
                        }
                    },
                    FIb = function(a, b, c) {
                        return {
                            type: 0,
                            Jw: d => c(b.apply(a(d)).data)
                        }
                    },
                    GIb = function(a, b, c, d) {
                        return {
                            type: 1,
                            Component: CIb(a.M, IIb(({
                                model: e
                            }) => {
                                const [f] = JIb(() => c.apply(b(e)).gaa);
                                return x7(d, {
                                    data: f,
                                    xz: a.xz
                                })
                            }))
                        }
                    },
                    LIb = function(a) {
                        return {
                            tN: a.tN,
                            apply: KIb(a.apply)
                        }
                    },
                    KIb = function(a) {
                        const b =
                            new WeakMap;
                        return c => {
                            let d = b.get(c);
                            d || (d = a(c), b.set(c, d));
                            return d
                        }
                    },
                    MIb = __webpack_require__(519427),
                    y7 = MIb.computed,
                    NIb = MIb.observable;
                var x7 = __webpack_require__(443763).jsx;
                var z7 = __webpack_require__(875604),
                    IIb = z7.memo,
                    BIb = z7.PureComponent,
                    JIb = z7.useState;
                var q7 = class {
                        map(a) {
                            return a(this)
                        }
                        constructor(a, b, c) {
                            this.O4 = a;
                            this.resultType = b;
                            this.apply = c
                        }
                    },
                    A7 = class {
                        map(a) {
                            return a(this)
                        }
                        constructor(a, b, c, d) {
                            this.O4 = a;
                            this.VEa = b;
                            this.resultType = c;
                            this.apply = d
                        }
                    },
                    B7 = class {
                        map(a) {
                            return a(this)
                        }
                        constructor(a, b, c) {
                            this.YEa = a;
                            this.resultType = b;
                            this.apply = c
                        }
                    },
                    PIb = class {
                        map(a) {
                            return a(this)
                        }
                        constructor(a, b, c) {
                            var d = OIb;
                            this.keyType = a;
                            this.valueType = b;
                            this.resultType = c;
                            this.apply = d
                        }
                    },
                    RIb = class {
                        map(a) {
                            return a(this)
                        }
                        constructor(a, b) {
                            var c = QIb;
                            this.XEa = a;
                            this.resultType =
                                b;
                            this.apply = c
                        }
                    },
                    MHb = class {
                        map(a) {
                            return a(this)
                        }
                        constructor(a, b, c, d) {
                            this.itemType = a;
                            this.pFa = b;
                            this.resultType = c;
                            this.reduce = d
                        }
                    };
                var QHb = class {
                    map(a) {
                        return a(this)
                    }
                    constructor(a, b) {
                        this.type = a;
                        this.get = b
                    }
                };
                var SIb = class {},
                    XHb = class extends SIb {
                        d5(a) {
                            return new XHb(a(this.value))
                        }
                        e8(a) {
                            return a(this.value)
                        }
                        constructor(a) {
                            super();
                            this.value = this.value = a
                        }
                    },
                    YHb = class extends SIb {
                        d5(a, b) {
                            return new YHb(b(this.value))
                        }
                        e8(a, b) {
                            return b(this.value)
                        }
                        constructor(a) {
                            super();
                            this.value = this.value = a
                        }
                    };
                var i7 = class {
                        map(a) {
                            return a(this)
                        }
                    },
                    C7 = class extends i7 {
                        N9(a) {
                            return this === a || a.ida(b => this.HP(b))
                        }
                        kF() {
                            throw Error(`${this} is not iterable`);
                        }
                        jaa(a) {
                            var b;
                            const c = (b = this.propTypes) !== null && b !== void 0 ? b : this.propTypes = this.QY();
                            if (!c) throw Error(`${this} is not navigable"`);
                            if (!c.hasOwnProperty(a)) throw Error(`${this} has no navigable property "${a}"`);
                            return c[a]
                        }
                        QY() {
                            throw Error(`${this} is not navigable`);
                        }
                        l8(a) {
                            a(this)
                        }
                        ida(a) {
                            return a(this)
                        }
                        constructor() {
                            super();
                            this.kind = "simple";
                            this.propTypes =
                                void 0
                        }
                    },
                    D7 = class extends C7 {
                        HP(a) {
                            return a instanceof D7 && this.name === a.name
                        }
                        toString() {
                            return this.name
                        }
                        constructor(a) {
                            super();
                            this.name = a
                        }
                    },
                    E7 = class extends C7 {
                        HP(a) {
                            return a instanceof E7 && this.Lw === a.Lw
                        }
                        toString() {
                            return this.Lw.name
                        }
                        constructor(a) {
                            super();
                            this.Lw = a
                        }
                    },
                    F7 = class extends C7 {
                        HP(a) {
                            return a instanceof F7 && this.Lw === a.Lw && h7(this.cq, a.cq)
                        }
                        toString() {
                            return `${this.Lw}<${this.cq}>`
                        }
                        constructor(a, b) {
                            super();
                            this.Lw = a;
                            this.cq = b
                        }
                    },
                    TIb = class extends F7 {
                        kF() {
                            return this.cq
                        }
                        QY() {
                            const a = this.cq;
                            return {
                                size: o7.number,
                                empty: o7.bg,
                                get first() {
                                    return o7.optional(a)
                                }
                            }
                        }
                        constructor(a) {
                            super("array", a)
                        }
                    },
                    UIb = class extends F7 {
                        kF() {
                            return this.cq
                        }
                        QY() {
                            const a = this.cq;
                            return {
                                size: o7.number,
                                empty: o7.bg,
                                get first() {
                                    return o7.optional(a)
                                }
                            }
                        }
                        constructor(a) {
                            super("set", a)
                        }
                    },
                    VIb = class extends C7 {
                        HP(a) {
                            return a instanceof VIb && h7(this.key, a.key) && h7(this.value, a.value)
                        }
                        toString() {
                            return `map<${this.key}, ${this.value}>`
                        }
                        constructor(a, b) {
                            super();
                            this.key = a;
                            this.value = b
                        }
                    },
                    WIb = class extends C7 {
                        HP(a) {
                            return a instanceof
                            WIb ? Object.entries(a.fields).every(([b, c]) => this.fields.hasOwnProperty(b) && h7(this.fields[b], c)) : !1
                        }
                        QY() {
                            return this.fields
                        }
                        toString() {
                            const a = Object.entries(this.fields);
                            return a.length ? `{ ${a.map(([b,c])=>`${b}: ${c}`).join(", ")} }` : "{}"
                        }
                        constructor(a) {
                            super();
                            this.fields = a
                        }
                    },
                    G7 = class extends i7 {
                        N9(a) {
                            return this === a || this.Yj.every(b => b.N9(a))
                        }
                        kF() {
                            const a = this.Yj.map(b => b.kF());
                            return g7(a, b => o7.union(...b))
                        }
                        jaa(a) {
                            const b = this.Yj.map(c => c.jaa(a));
                            return g7(b, c => o7.union(...c))
                        }
                        l8(a) {
                            this.Yj.forEach(b =>
                                b.l8(a))
                        }
                        ida(a) {
                            return this.Yj.some(b => b.ida(a))
                        }
                        toString() {
                            return this.Yj.length ? this.Yj.map(a => a.toString()).join(" | ") : "never"
                        }
                        constructor(a) {
                            super();
                            this.Yj = a;
                            this.kind = "disjunction";
                            w(a.length !== 1)
                        }
                    },
                    H7 = new G7([]),
                    XIb = new D7("string"),
                    YIb = new D7("number"),
                    ZIb = new D7("boolean"),
                    $Ib = new D7("undefined"),
                    aJb = class {
                        get never() {
                            return H7
                        }
                        get string() {
                            return XIb
                        }
                        get number() {
                            return YIb
                        }
                        get bg() {
                            return ZIb
                        }
                        get undefined() {
                            return $Ib
                        }
                        optional(a) {
                            return o7.union(a, o7.undefined)
                        }
                        array(a) {
                            return new TIb(a)
                        }
                        set(a) {
                            return new UIb(a)
                        }
                        tV(a) {
                            return new G7([new TIb(a),
                                new UIb(a)
                            ])
                        }
                        map(a, b) {
                            return new VIb(a, b)
                        }
                        jc(a) {
                            return new WIb({ ...a
                            })
                        }
                        union(...a) {
                            if (a.length === 0) return H7;
                            if (a.length === 1) return a[0];
                            const b = new Set;
                            for (const d of a) PHb(d).l8(e => b.add(e));
                            a = [...b];
                            if (a.length === 0) return H7;
                            if (a.length === 1) return a[0];
                            if (a.length === 2) {
                                const [d, e] = a;
                                return h7(d, e) ? e : h7(e, d) ? d : new G7(a)
                            }
                            const c = new Set;
                            for (const d of a)[...c].some(e => h7(d, e)) || (c.forEach(e => h7(e, d) && c.delete(e)), c.add(d));
                            return c.size === 1 ? [...c][0] : new G7([...c])
                        }
                    },
                    bJb = class extends aJb {
                        instance(a) {
                            return new E7(a)
                        }
                    },
                    o7 = new bJb,
                    cJb = class extends aJb {
                        instance(a) {
                            return new E7(__c.C(this.classes[a]))
                        }
                        constructor(a) {
                            super();
                            this.classes = a
                        }
                    };
                var dJb, eJb, I7 = Symbol("value"),
                    J7 = class {
                        get props() {
                            var a;
                            return (a = this.hEa) !== null && a !== void 0 ? a : this.hEa = this.R4()
                        }
                    },
                    fJb = class {
                        get size() {
                            return this[I7].length
                        }
                        get empty() {
                            return this[I7].length === 0
                        }
                        get first() {
                            return this[I7][0]
                        }
                        constructor(a) {
                            this[I7] = a
                        }
                    };
                dJb = Symbol.iterator;
                var gJb = class extends J7 {
                        R4() {
                            return new fJb(this.items)
                        }
                        map(a) {
                            return this.items.map(a)
                        }[dJb]() {
                            return this.items[Symbol.iterator]()
                        }
                        toString() {
                            return this.items.length ? `[${Array.from(this.items,l7).join(", ")}]` : "[]"
                        }
                        constructor(a) {
                            super();
                            this.kind = "array";
                            this.items = [...a]
                        }
                    },
                    hJb = class {
                        get size() {
                            return this[I7].size
                        }
                        get empty() {
                            return this[I7].size === 0
                        }
                        get first() {
                            return this[I7][Symbol.iterator]().next().value
                        }
                        constructor(a) {
                            this[I7] = a
                        }
                    };
                eJb = Symbol.iterator;
                var iJb = class extends J7 {
                        R4() {
                            return new hJb(this.items)
                        }
                        map(a) {
                            return Array.from(this.items, a)
                        }[eJb]() {
                            return this.items[Symbol.iterator]()
                        }
                        toString() {
                            return this.items.size ? `Set [${Array.from(this.items,l7).join(", ")}]` : "Set []"
                        }
                        constructor(a) {
                            super();
                            this.kind = "set";
                            this.items = new Set(a)
                        }
                    },
                    jJb = class {
                        toString() {
                            return this.items.size ? `Map {${Array.from(this.items,([a,b])=>`[${l7(a)}]: ${l7(b)}`).join(", ")}}` : "Map {}"
                        }
                        constructor(a) {
                            this.items = a;
                            this.kind = "map"
                        }
                    },
                    kJb = class extends J7 {
                        R4() {
                            return this.fields
                        }
                        toString() {
                            const a =
                                Object.entries(this.fields);
                            return a.length ? `{ ${[...a].map(([b,c])=>`${b}: ${l7(c)}`).join(", ")} }` : "{}"
                        }
                        constructor(a) {
                            super();
                            this.fields = a;
                            this.kind = "record"
                        }
                    },
                    lJb = class {
                        toString() {
                            return `[instance ${this.Lw.name}]`
                        }
                        constructor(a, b) {
                            this.Lw = a;
                            this.instance = b;
                            this.kind = "instance"
                        }
                    },
                    mJb = class {
                        array(a) {
                            return new gJb(a)
                        }
                        arrayOf(...a) {
                            return new gJb(a)
                        }
                        set(a) {
                            return new iJb(a)
                        }
                        map(a) {
                            return new jJb(new Map(a))
                        }
                        jc(a) {
                            return new kJb({ ...a
                            })
                        }
                    },
                    nJb = class extends mJb {
                        instance(a, b) {
                            return new lJb(a, b)
                        }
                        stringify(a) {
                            return l7(a)
                        }
                        constructor() {
                            super();
                            this.Fh = k7
                        }
                    },
                    t7 = new nJb,
                    oJb = class extends mJb {
                        instance(a, b) {
                            a = __c.C(this.classes[a]);
                            return new lJb(a, b)
                        }
                        constructor(a) {
                            super();
                            this.classes = a
                        }
                    };
                var UHb = {
                        [0]: new q7(o7.number, o7.number, a => -a),
                        [1]: new q7(o7.string, o7.number, a => a.length),
                        [2]: new q7(o7.bg, o7.bg, a => !a)
                    },
                    VHb = {
                        [0]: new A7(o7.number, o7.number, o7.number, (a, b) => a + b),
                        [1]: new A7(o7.number, o7.number, o7.number, (a, b) => a - b),
                        [2]: new A7(o7.number, o7.number, o7.number, (a, b) => a * b),
                        [3]: new A7(o7.number, o7.number, o7.number, (a, b) => a / b),
                        [4]: new A7(o7.number, o7.number, o7.number, (a, b) => a % b),
                        [5]: new A7(o7.string, o7.string, o7.string, (a, b) => a + b),
                        [6]: new A7(o7.number, o7.number, o7.bg, (a, b) => a === b),
                        [7]: new A7(o7.number,
                            o7.number, o7.bg, (a, b) => a !== b),
                        [8]: new A7(o7.number, o7.number, o7.bg, (a, b) => a < b),
                        [9]: new A7(o7.number, o7.number, o7.bg, (a, b) => a <= b),
                        [10]: new A7(o7.number, o7.number, o7.bg, (a, b) => a > b),
                        [11]: new A7(o7.number, o7.number, o7.bg, (a, b) => a >= b),
                        [12]: new A7(o7.bg, o7.bg, o7.bg, (a, b) => a && b),
                        [13]: new A7(o7.bg, o7.bg, o7.bg, (a, b) => a || b)
                    },
                    aIb = {
                        [2]: new B7(o7.number, o7.number, a => a.reduce((b, c) => b + c, 0)),
                        [3]: new B7(o7.number, o7.number, a => a.reduce((b, c) => b * c, 1)),
                        [4]: new B7(o7.number, o7.number, a => Math.max(...a)),
                        [5]: new B7(o7.number,
                            o7.number, a => Math.min(...a)),
                        [6]: new B7(o7.string, o7.string, a => a.join(""))
                    },
                    pJb = a => t7.array(a),
                    qJb = a => t7.set(a),
                    ZHb = {
                        [0]: a => new B7(a, o7.array(a), pJb),
                        [1]: a => new B7(a, o7.set(a), qJb)
                    },
                    OIb = a => t7.map(a),
                    fIb = {
                        [0]: (a, b) => new PIb(a, b, o7.map(a, b))
                    },
                    QIb = a => t7.jc(a),
                    hIb = {
                        [0]: a => new RIb(a, o7.jc(a))
                    },
                    rJb = (a, b) => t7.array(b.map(c => c())),
                    sJb = (a, b) => t7.array(b.flatMap(c => c().items)),
                    tJb = (a, b) => t7.array(a.filter((c, d) => b[d]()).map(c => c())),
                    uJb = (a, b) => b.some(c => c()),
                    vJb = (a, b) => b.every(c => c()),
                    wJb = (a, b) => {
                        var c;
                        return (c =
                            a.find((d, e) => b[e]())) === null || c === void 0 ? void 0 : c()
                    },
                    dIb = {
                        [0]: (a, b) => b.map(c => f7(a, c, o7.array(c), rJb)),
                        [1]: (a, b) => b.kF().map(c => f7(a, o7.array(c), o7.array(c), sJb)),
                        [2]: a => f7(a, o7.bg, o7.array(a), tJb),
                        [3]: a => f7(a, o7.bg, o7.bg, uJb),
                        [4]: a => f7(a, o7.bg, o7.bg, vJb),
                        [5]: a => f7(a, o7.bg, o7.optional(a), wJb)
                    };
                var s7 = class {
                    define(a, b) {
                        return new s7(new Map([
                            [a, b]
                        ]), this)
                    }
                    resolve(a) {
                        const b = this.defs.get(a);
                        if (b) return b;
                        if (this.parent) return this.parent.resolve(a);
                        throw Error(`undefined symbol: ${a}`);
                    }
                    constructor(a, b) {
                        this.defs = a;
                        this.parent = b
                    }
                };
                var yJb = (a, b, c) => {
                        const d = new s7(new Map(b.tN)),
                            e = new xJb(a);
                        return {
                            compile: f => {
                                const g = m7(e, d, f).as(c);
                                return {
                                    apply: h => {
                                        h = new s7(new Map(b.apply(h).uca));
                                        return g(h)
                                    }
                                }
                            }
                        }
                    },
                    xJb = class {
                        constructor(a) {
                            this.types = a
                        }
                    },
                    r7 = class {
                        static of (a, b) {
                            return new r7(a, b)
                        }
                        as(a) {
                            if (!h7(this.type, a)) throw Error(`inferred type ${this.type} does not match expected type: ${a}`);
                            return this.evaluate
                        }
                        computed() {
                            const a = this.evaluate;
                            return new r7(this.type, b => {
                                const c = y7(a(b), {
                                    equals: t7.Fh
                                });
                                return () => c.get()
                            })
                        }
                        map(a) {
                            return a(this.type,
                                this.evaluate)
                        }
                        constructor(a, b) {
                            this.type = a;
                            this.evaluate = b
                        }
                    },
                    nIb = class {
                        static of (a, b, c) {
                            return new nIb(a, b, c)
                        }
                        map(a) {
                            return a(this.WEa, this.resultType, this.evaluate)
                        }
                        constructor(a, b, c) {
                            this.WEa = a;
                            this.resultType = b;
                            this.evaluate = c
                        }
                    };
                var zIb = class {
                        add(a) {
                            a = a(zJb, this.types);
                            return new zIb({ ...this.classes,
                                ...a
                            })
                        }
                        resolve(a) {
                            return this.classes[a]
                        }
                        constructor(a) {
                            this.classes = a;
                            this.types = new cJb(this.classes);
                            this.values = new oJb(this.classes)
                        }
                    },
                    zJb = class {
                        constructor(a, b, c) {
                            this.name = a;
                            this.create = c;
                            this.UQa = new q7(o7.jc(b), o7.instance(this), d => t7.instance(this, c(d.fields)))
                        }
                    };
                var vIb = class {
                    error(a, b) {
                        return Error(`widget '${this.mYa}': schema error on key '${a}': ${b}`)
                    }
                    constructor(a) {
                        this.mYa = a
                    }
                };
                var AJb = Object.freeze({
                    empty: !0,
                    count() {
                        return 0
                    },
                    toArray() {
                        return []
                    },
                    rr() {
                        return new Map
                    },
                    first() {},
                    last() {},
                    next() {
                        w7()
                    },
                    Dc() {
                        w7()
                    },
                    Cd() {
                        w7()
                    },
                    Mu() {
                        w7()
                    },
                    has() {
                        return !1
                    },
                    IA() {
                        return this
                    },
                    map() {
                        return []
                    },
                    flatMap() {
                        return []
                    },
                    filter() {
                        return []
                    },
                    forEach() {},
                    reduce(a, b) {
                        return b
                    },
                    some() {
                        return !1
                    },
                    every() {
                        return !0
                    },
                    [Symbol.iterator]() {
                        return [][Symbol.iterator]()
                    }
                });
                var BJb;
                BJb = Symbol.iterator;
                var EIb = class {
                    static A(a) {
                        __c.P(a, {
                            ud: y7,
                            ws: y7
                        })
                    }
                    get ud() {
                        return this.bFa().map(a => {
                            let b = this.lqa.get(a);
                            b == null && (b = `${this.QMa++}`, this.lqa.set(a, b));
                            return {
                                id: b,
                                ref: a
                            }
                        })
                    }
                    get ws() {
                        const a = new Map;
                        this.ud.forEach((b, c) => b && a.set(b.ref, c));
                        return a
                    }
                    Cj(a) {
                        return __c.C(this.ws.get(a), "ref not found")
                    }
                    get empty() {
                        return !this.ud.length
                    }
                    count() {
                        return this.ud.length
                    }
                    toArray() {
                        return this.ud.map(a => a.ref)
                    }
                    rr() {
                        return new Map(this.map((a, b) => [b, a]))
                    }
                    get XW() {
                        const a = this.ud[0];
                        return a && a.ref
                    }
                    get EY() {
                        const a =
                            this.ud[this.ud.length - 1];
                        return a && a.ref
                    }
                    first(a) {
                        if (!a) return this.XW;
                        const b = this.ud.find(c => a(c.ref));
                        return b && b.ref
                    }
                    last(a) {
                        if (!a) return this.EY;
                        const b = this.ud;
                        for (let c = b.length - 1; c >= 0; c--) {
                            const d = b[c];
                            if (a(d.ref)) return d.ref
                        }
                    }
                    next(a, b) {
                        const c = this.ud;
                        for (a = this.Cj(a) + 1; a < c.length; a++) {
                            const d = c[a];
                            if (!b || b(d.ref)) return d.ref
                        }
                    }
                    Dc(a, b) {
                        const c = this.ud;
                        for (a = this.Cj(a) - 1; a >= 0; a--) {
                            const d = c[a];
                            if (!b || b(d.ref)) return d.ref
                        }
                    }
                    Cd(a, b) {
                        a = this.ws.get(a);
                        b = this.ws.get(b);
                        w(a != null);
                        w(b != null);
                        return a < b ? -1 : a > b ? 1 : 0
                    }
                    Mu(a) {
                        return this.ud[this.Cj(a)].id
                    }
                    has(a) {
                        return this.ws.has(a)
                    }
                    IA(a) {
                        return new __c.MP(this, a)
                    }
                    map(a) {
                        return this.ud.map(({
                            ref: b,
                            id: c
                        }) => a(b, c))
                    }
                    flatMap(a) {
                        return this.ud.flatMap(({
                            ref: b,
                            id: c
                        }) => a(b, c))
                    }
                    filter(a) {
                        return this.ud.filter(b => a(b.ref, b.id)).map(b => b.ref)
                    }
                    forEach(a) {
                        this.ud.forEach((b, c) => a(b.ref, b.id, c))
                    }
                    reduce(a, b) {
                        return this.ud.reduce((c, d) => a(c, d.ref, d.id), b)
                    }
                    some(a) {
                        return this.ud.some(b => a(b.ref, b.id))
                    }
                    every(a) {
                        return this.ud.every(b => a(b.ref, b.id))
                    }[BJb]() {
                        return this.toArray()[Symbol.iterator]()
                    }
                    constructor(a) {
                        this.bFa =
                            a;
                        this.QMa = (EIb.A(this), 0);
                        this.lqa = new WeakMap
                    }
                };
                var CJb = new Set,
                    DJb = {
                        Jw: () => ({
                            Za: AJb
                        })
                    },
                    EJb = class {
                        static A(a) {
                            __c.P(a, {
                                P_: NIb.shallow
                            })
                        }
                        HNa(a, b, {
                            element: c
                        }) {
                            const d = __c.C(this.$Ta.$_.get(a));
                            w(d.element === b.element);
                            w(!this.P_.has(a));
                            b = {
                                element: HIb(this, b, c)
                            };
                            this.P_.set(a, b);
                            CJb.has(a) || (__c.YR.set(a, DJb), CJb.add(a));
                            return b
                        }
                        pKa(a) {
                            var b;
                            return (b = this.P_.get(a)) === null || b === void 0 ? void 0 : b.element
                        }
                        constructor(a, b, c, d, e) {
                            this.$Ta = a;
                            this.NAa = b;
                            this.w6 = c;
                            this.M = d;
                            this.xz = e;
                            this.P_ = (EJb.A(this), new Map)
                        }
                    };
                var FJb = class {
                    static A(a) {
                        __c.P(a, {
                            $_: NIb.shallow
                        })
                    }
                    INa(a, b) {
                        w(!this.$_.has(a));
                        b = {
                            document: LIb(this.vma(a, b.document)),
                            element: LIb(this.vma(a, b.element))
                        };
                        this.$_.set(a, b);
                        return b
                    }
                    constructor(a) {
                        this.vma = a;
                        this.$_ = (FJb.A(this), new Map)
                    }
                };
                __c.gAa = {
                    ONa: function(a) {
                        var b = a.M;
                        a = a.oYa;
                        var c = {
                            Ck: AIb(),
                            w6: yJb
                        };
                        const {
                            Ck: d,
                            w6: e
                        } = c;
                        c = new FJb(yIb(d));
                        b = new EJb(c, d, e, b, a);
                        return {
                            kha: c,
                            hbb: c,
                            yT: b,
                            xT: b
                        }
                    }
                };
            }).call(self, self._c68b74ff4d61aaeea4f241f0854f5b1a);
        }

    }
])
//# sourceMappingURL=sourcemaps/7716b010c9f76c29.js.map