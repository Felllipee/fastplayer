(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [70911], {

        /***/
        88780: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(813110);
            __web_req__(878415);
            __web_req__(914242);
            self._7ccc7343da2ae983607b3819c7bc1f93 = self._7ccc7343da2ae983607b3819c7bc1f93 || {};
            (function(__c) {
                var Df = __c.Df;
                var E = __c.E;
                var v = __c.v;
                var R4b = function(a) {
                        var b = {
                            element: void 0
                        };
                        const c = new Map;
                        for (const d in b) a[d].AY.forEach((e, f) => c.set(f, e));
                        return {
                            AY: c,
                            apply: d => {
                                const e = new Map,
                                    f = {},
                                    g = {};
                                for (const h in d) {
                                    const k = a[h].apply(d[h]);
                                    k.cxa.forEach((l, m) => e.set(m, l));
                                    f[h] = k.data;
                                    g[h] = k.wta
                                }
                                return {
                                    cxa: e,
                                    data: f,
                                    wta: g
                                }
                            }
                        }
                    },
                    S4b = function(a) {
                        return () => a
                    },
                    Z5 = function(a, b, c, d) {
                        return new T4b(a, b, c, d)
                    },
                    $5 = function(a, b) {
                        return b(a)
                    },
                    U4b = function(a, b, c) {
                        return c(a, b)
                    },
                    V4b = function(a, b) {
                        return b(a)
                    },
                    a6 = function(a, b) {
                        return a === b || b.map(c => a.Era(W4b(c)))
                    },
                    Y4b = function(a, b) {
                        return a.zta(b).map(c => new X4b(c, d => d.props[b]))
                    },
                    W4b = function(a) {
                        v(a instanceof b6);
                        return a
                    },
                    d6 = function(a, b) {
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
                                        return b.kind === "array" && c6(a.items, b.items);
                                    case "set":
                                        var c;
                                        if (c = b.kind === "set") a = a.items, b = b.items, c = a === b ? !0 : a.size !== b.size ? !1 : c6([...a], [...b]);
                                        return c;
                                    case "map":
                                        if (c = b.kind ===
                                            "map") a = a.items, b = b.items, c = a === b ? !0 : a.size !== b.size ? !1 : c6([...a.keys(), ...a.values()], [...b.keys(), ...b.values()]);
                                        return c;
                                    case "record":
                                        return b.kind === "record" && Z4b(a.fields, b.fields);
                                    case "instance":
                                        return b.kind === "instance" && a.instance === b.instance;
                                    default:
                                        throw new E(a);
                                }
                            default:
                                throw new E(a);
                        }
                    },
                    c6 = function(a, b) {
                        if (a === b) return !0;
                        if (a.length !== b.length) return !1;
                        for (let c = 0; c < a.length; c++)
                            if (!d6(a[c], b[c])) return !1;
                        return !0
                    },
                    Z4b = function(a, b) {
                        if (a === b) return !0;
                        const c = Object.keys(a),
                            d = Object.keys(b),
                            e = new Set([...c, ...d]);
                        if (c.length !== e.size || d.length !== e.size) return !1;
                        for (const f of e)
                            if (!d6(a[f], b[f])) return !1;
                        return !0
                    },
                    e6 = function(a) {
                        return typeof a === "string" ? JSON.stringify(a) : String(a)
                    },
                    f6 = function(a, b, c) {
                        switch (c.kind) {
                            case 0:
                                return $4b(c.value);
                            case 1:
                                const f = f6(a, b, c.Su);
                                return a5b[c.name].map(r => g6(r, f));
                            case 2:
                                const g = f6(a, b, c.f6a),
                                    h = f6(a, b, c.g6a);
                                return b5b[c.name].map(r => c5b(r, g, h));
                            case 3:
                                const k = c.args.map(r => r.kind !== 13 ? new d5b(f6(a, b, r)) : new e5b(f6(a, b, r.OGb))),
                                    l = c.name;
                                switch (l) {
                                    case 0:
                                    case 1:
                                        var d =
                                            k.map(r => r.ppa(t => t.type, t => t.type.dN()));
                                        return $5(d, r => h6.union(...r).map(t => f5b[l](t).map(w => g5b(w, k))));
                                    default:
                                        return h5b[l].map(r => g5b(r, k))
                                }
                            case 4:
                                return i5b(f6(a, b, c.N8), (r, t) => {
                                    const w = j5b(a, b, c.param, t, c.body);
                                    return k5b[c.name](t, w.resultType).map(u => l5b(u, r, w))
                                });
                            case 5:
                                const m = c.entries.map(([r, t]) => [f6(a, b, r), f6(a, b, t)]);
                                d = h6.union(...m.map(([r]) => r.type));
                                var e = h6.union(...m.map(([, r]) => r.type));
                                return U4b(d, e, (r, t) => m5b[0](r, t).map(w => n5b(w, m)));
                            case 6:
                                const n = Df(c.fields, r => f6(a,
                                    b, r));
                                d = Df(n, r => r.type);
                                return V4b(d, r => o5b[0](r).map(t => p5b(t, n)));
                            case 7:
                                d = a.types.resolve(c.name);
                                if (!d) throw Error(`cannot instantiate unknown type: ${c.name}`);
                                const p = f6(a, b, {
                                    kind: 6,
                                    fields: c.args
                                });
                                return d.Skb.map(r => g6(r, p, {
                                    wq: !0
                                }));
                            case 8:
                                return d = f6(a, b, c.base), q5b(d, c.aLb);
                            case 9:
                                return r5b(b, c.name);
                            case 10:
                                return d = __c.md(c.defs, r => f6(a, b, r)), s5b(a, b, d, c.body);
                            case 11:
                                d = f6(a, b, c.test).as(h6.Th);
                                e = f6(a, b, c.uAb);
                                const q = f6(a, b, c.alternate);
                                return t5b(d, e, q);
                            case 12:
                                return f6(a, b, c.body).computed();
                            default:
                                throw new E(c);
                        }
                    },
                    j5b = function(a, b, c, d, e) {
                        return f6(a, b.define(c, d), e).map((f, g) => u5b.of(d, f, h => k => g(h.define(c, k))))
                    },
                    $4b = function(a) {
                        switch (typeof a) {
                            case "string":
                                return i6(h6.string, a);
                            case "number":
                                return i6(h6.number, a);
                            case "boolean":
                                return i6(h6.Th, a);
                            case "undefined":
                                return i6(h6.undefined, a);
                            default:
                                throw new E(a);
                        }
                    },
                    q5b = function(a, b) {
                        return a.map(c => Y4b(c, b).map(({
                            type: d,
                            get: e
                        }) => g6(new j6(c, d, e), a)))
                    },
                    r5b = function(a, b) {
                        return a.resolve(b).map(c => k6.of(c, d => d.resolve(b)))
                    },
                    s5b =
                    function(a, b, c, d) {
                        const e = __c.md(c, g => g.type),
                            f = __c.md(c, g => g.evaluate);
                        return v5b(f6(a, new l6(new Map(e), b), d), g => {
                            const h = __c.md(f, k => k(g));
                            return new l6(new Map(h), g)
                        })
                    },
                    t5b = function(a, b, c) {
                        return b.map((d, e) => c.map((f, g) => {
                            f = h6.union(d, f);
                            return k6.of(f, h => {
                                const k = a(h),
                                    l = e(h),
                                    m = g(h);
                                return () => k() ? l() : m()
                            })
                        }))
                    },
                    g6 = function({
                        Oka: a,
                        resultType: b,
                        apply: c
                    }, d, e) {
                        const f = d.as(a);
                        return new k6(b, g => {
                            const h = f(g);
                            if (e === null || e === void 0 ? 0 : e.wq) {
                                const k = w5b(c);
                                return () => k(h())
                            }
                            return () => c(h())
                        })
                    },
                    c5b = function({
                        Oka: a,
                        h6a: b,
                        resultType: c,
                        apply: d
                    }, e, f) {
                        const g = e.as(a),
                            h = f.as(b);
                        return new k6(c, k => {
                            const l = g(k),
                                m = h(k);
                            return () => d(l(), m())
                        })
                    },
                    g5b = function({
                        k6a: a,
                        resultType: b,
                        apply: c
                    }, d) {
                        let e;
                        const f = d.map(g => g.mla(h => h.as(a), h => h.as(e !== null && e !== void 0 ? e : e = h6.N8(a))));
                        return new k6(b, g => {
                            const h = l => l(g),
                                k = f.map(l => l.mla(h, h));
                            return () => {
                                const l = [];
                                k.forEach(m => {
                                    m.ppa(n => l.push(n()), n => l.push(...n()))
                                });
                                return c(l)
                            }
                        })
                    },
                    l5b = function({
                        E6a: a,
                        resultType: b,
                        reduce: c
                    }, d, e) {
                        const f = x5b(e, a);
                        return k6.of(b, g => {
                            const h = d(g),
                                k = f(g),
                                l = w5b(m => {
                                    m = m.map(S4b);
                                    return [m, m.map(k)]
                                });
                            return () => {
                                const [m, n] = l(h());
                                return c(m, n)
                            }
                        })
                    },
                    n5b = function({
                        keyType: a,
                        valueType: b,
                        resultType: c,
                        apply: d
                    }, e) {
                        const f = e.map(([g, h]) => [g.as(a), h.as(b)]);
                        return new k6(c, g => {
                            const h = f.map(([k, l]) => [k(g), l(g)]);
                            return () => d(h.map(([k, l]) => [k(), l()]))
                        })
                    },
                    p5b = function({
                        j6a: a,
                        resultType: b,
                        apply: c
                    }, d) {
                        const e = Object.keys(a).filter(g => !d.hasOwnProperty(g));
                        if (e.length) throw Error(`too few arguments (missing ${e})`);
                        const f = y5b(a, (g, h) => d[h].as(g));
                        return new k6(b,
                            g => {
                                const h = z5b(f, k => k(g));
                                return () => c(A5b(h, k => k()))
                            })
                    },
                    i6 = function(a, b) {
                        const c = S4b(b);
                        return new k6(a, () => c)
                    },
                    i5b = function(a, b) {
                        return a.type.dN().map(c => b(a.as(h6.N8(c)), c))
                    },
                    v5b = function(a, b) {
                        const c = a.evaluate;
                        return new k6(a.type, d => c(b(d)))
                    },
                    x5b = function(a, b) {
                        if (!a6(a.resultType, b)) throw Error(`type ${a.resultType} is not assignable to expected type: ${b}`);
                        return a.evaluate
                    },
                    w5b = function(a) {
                        let b;
                        return c => {
                            if (b && m6.Zg(b.u, c)) return b.v;
                            const d = a(c);
                            b = {
                                u: c,
                                v: d
                            };
                            return d
                        }
                    },
                    y5b = function(a,
                        b) {
                        return Df(a, b)
                    },
                    z5b = function(a, b) {
                        return Df(a, b)
                    },
                    A5b = function(a, b) {
                        return Df(a, b)
                    },
                    F5b = function(a) {
                        const b = a.types,
                            c = a.values;
                        class d {
                            optional() {
                                const H = this.nha,
                                    I = this.dfa,
                                    K = this.aDa,
                                    M = b.union(this.type, b.undefined);
                                return new d(M, Q => Q != null ? H(Q) : void 0, (Q, T, V) => V != null ? I(Q, T, V) : void 0, (Q, T, V, ba) => V != null ? K(Q, T, V, ba) : ba.delete(T))
                            }
                            DB() {
                                return new d(this.type, this.nha, this.dfa, (H, I) => {
                                    throw H.error(I, "read-only field");
                                })
                            }
                            Y5(H) {
                                return H ? new d(this.type, this.nha, (I, K, M) => {
                                    M = this.dfa(I, K, M);
                                    M !=
                                        null && H(I, K, M);
                                    return M
                                }, (I, K, M, Q) => {
                                    M != null && H(I, K, M);
                                    this.aDa(I, K, M, Q)
                                }) : this
                            }
                            Dtb(H, I) {
                                const K = this.nha,
                                    M = this.dfa,
                                    Q = this.aDa;
                                return B5b(this.type, T => {
                                    const V = () => M(H, I, T.get(I));
                                    return {
                                        Heb: () => K(V()),
                                        rMa: V,
                                        jrb: ba => Q(H, I, ba, T)
                                    }
                                })
                            }
                            constructor(H, I, K, M) {
                                this.type = H;
                                this.nha = I;
                                this.dfa = K;
                                this.aDa = M
                            }
                        }
                        a = new d(b.string, H => H, n6("string", H => H.value), o6("string"));
                        const e = new d(b.Th, H => H, n6("boolean", H => H.value), o6("boolean")),
                            f = (new d(b.number, H => H, n6("int32", H => H.value), o6("int32"))).Y5(H => Number.isInteger(H)),
                            g = (new d(b.number, H => H, n6("double", H => H.value), o6("double"))).Y5(H => Number.isFinite(H)),
                            h = new d(b.instance("Fill"), H => c.instance("Fill", H), n6("fill", H => H.value), o6("fill")),
                            k = a.optional(),
                            l = e.optional(),
                            m = f.optional(),
                            n = g.optional(),
                            p = h.optional(),
                            q = a.DB(),
                            r = e.DB(),
                            t = f.DB(),
                            w = g.DB(),
                            u = h.DB(),
                            x = k.DB(),
                            y = l.DB(),
                            A = m.DB(),
                            z = n.DB(),
                            B = p.DB(),
                            G = {
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
                                        double: w,
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
                                        int32: A,
                                        double: z,
                                        fill: B
                                    }
                                }
                            };
                        return (H, I) => {
                            const K = new C5b(H),
                                M = Df(I, T => T.key),
                                Q = Df(I, T => {
                                    var V = T.fVa;
                                    const ba = T.gSa;
                                    switch (T.type) {
                                        case "string":
                                            V = G[V][ba].string.Y5(D5b(T.wJ));
                                            break;
                                        case "boolean":
                                            V = G[V][ba]["boolean"];
                                            break;
                                        case "double":
                                            V = G[V][ba]["double"].Y5(E5b(T.range));
                                            break;
                                        case "int32":
                                            V = G[V][ba].int32.Y5(E5b(T.range));
                                            break;
                                        case "fill":
                                            V = G[V][ba].fill;
                                            break;
                                        default:
                                            throw new E(T);
                                    }
                                    return V.Dtb(K, T.key)
                                });
                            return {
                                AY: new Map(Object.entries(Q).map(([T, V]) => [M[T], V.type])),
                                apply: T => {
                                    const V = Df(Q, ka => ka.eval(T)),
                                        ba = Df(V, ka => ({
                                            get: ka.rMa
                                        })),
                                        ea = Df(V, ka => ({
                                            get: ka.rMa,
                                            set: ka.jrb
                                        }));
                                    return {
                                        cxa: new Map(Object.entries(V).map(([ka, oa]) => [M[ka], oa.Heb])),
                                        data: Object.create(null, ba),
                                        wta: Object.create(null, ea)
                                    }
                                }
                            }
                        }
                    },
                    n6 = function(a, b) {
                        return (c, d, e) => {
                            if (e == null) throw c.error(d, "not found");
                            if (e.type !== a) throw c.error(d, `type error: expected ${a}, was ${e.type}`);
                            return b(e)
                        }
                    },
                    o6 = function(a) {
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
                    E5b = function(a) {
                        if (a) {
                            var b = a.min,
                                c = a.max;
                            v(b == null || c == null || b <= c);
                            return (d, e, f) => {
                                if (b != null && f < b) throw d.error(e, `value below min ${b}: ${f}`);
                                if (c != null && f > c) throw d.error(e, `value above max ${b}: ${f}`);
                            }
                        }
                    },
                    D5b = function(a) {
                        if (a) return (b, c, d) => {
                            if (!a.test(d)) throw b.error(c, `value does not match regex ${a}: '${d}'`);
                        }
                    },
                    B5b = function(a, b) {
                        return {
                            type: a,
                            eval: b
                        }
                    },
                    H5b = function() {
                        return (new G5b({})).add((a, b) => ({
                            Fill: new a("Fill", {
                                color: b.string
                            }, c => __c.YO.create({ ...__c.Lv,
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
                                X: b.union(b.array(b.number), b.undefined)
                            }, c => {
                                var d, e, f;
                                const g = __c.Jv.create({ ...__c.Kv,
                                    top: c.top,
                                    left: c.left,
                                    width: c.width,
                                    height: c.height,
                                    rotation: (e = c.rotation) !== null && e !== void 0 ? e : __c.Kv.rotation,
                                    fill: __c.Lv,
                                    X: (f = (d = c.X) === null || d === void 0 ? void 0 : d.items) !== null && f !== void 0 ? f : __c.Kv.X
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
                    p6 = function() {
                        throw Error("ref not found");
                    },
                    J5b = function(a, b) {
                        return class extends I5b {
                            componentDidCatch(c) {
                                a.error(c);
                                this.setState({
                                    hasError: !0
                                })
                            }
                            render() {
                                return this.state.hasError ?
                                    q6(__c.zy, {
                                        background: "criticalLow",
                                        width: "full",
                                        height: "full",
                                        padding: "0.25u",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        role: "alert",
                                        children: q6(__c.wy, {
                                            size: "xsmall",
                                            alignment: "center",
                                            children: __c.O("Q6XSow")
                                        })
                                    }) : q6(b, { ...this.props
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
                    O5b = function(a, b, c) {
                        const d = f => ({
                            element: f.ga.Si
                        });
                        b = R4b(b);
                        switch (c.type) {
                            case 0:
                                c = c.oD;
                                if (typeof c === "object") {
                                    var e = a.t0a.types;
                                    e = e.N8(e.instance("RectElement"));
                                    return K5b(a, d, b, e, c, f =>
                                        new L5b(() => f().map(g => g.instance)))
                                }
                                return M5b(d, b, c);
                            case 1:
                                return N5b(a, d, b, c.Component);
                            default:
                                throw new E(c);
                        }
                    },
                    K5b = function(a, b, c, d, e, f) {
                        const g = a.Zma(a.t0a, c, d).compile(e);
                        return {
                            type: 0,
                            oD: h => ({
                                Ra: f(g.apply(b(h)))
                            })
                        }
                    },
                    M5b = function(a, b, c) {
                        return {
                            type: 0,
                            oD: d => c(b.apply(a(d)).data)
                        }
                    },
                    N5b = function(a, b, c, d) {
                        return {
                            type: 1,
                            Component: J5b(a.H, P5b(({
                                model: e
                            }) => {
                                const [f] = Q5b(() => c.apply(b(e)).wta);
                                return q6(d, {
                                    data: f,
                                    $F: a.$F
                                })
                            }))
                        }
                    },
                    S5b = function(a) {
                        return {
                            AY: a.AY,
                            apply: R5b(a.apply)
                        }
                    },
                    R5b = function(a) {
                        const b =
                            new WeakMap;
                        return c => {
                            let d = b.get(c);
                            d || (d = a(c), b.set(c, d));
                            return d
                        }
                    },
                    T5b = __webpack_require__(519427),
                    r6 = T5b.computed,
                    U5b = T5b.observable;
                var q6 = __webpack_require__(443763).jsx;
                var s6 = __webpack_require__(875604),
                    P5b = s6.memo,
                    I5b = s6.PureComponent,
                    Q5b = s6.useState;
                var j6 = class {
                        map(a) {
                            return a(this)
                        }
                        constructor(a, b, c) {
                            this.Oka = a;
                            this.resultType = b;
                            this.apply = c
                        }
                    },
                    t6 = class {
                        map(a) {
                            return a(this)
                        }
                        constructor(a, b, c, d) {
                            this.Oka = a;
                            this.h6a = b;
                            this.resultType = c;
                            this.apply = d
                        }
                    },
                    u6 = class {
                        map(a) {
                            return a(this)
                        }
                        constructor(a, b, c) {
                            this.k6a = a;
                            this.resultType = b;
                            this.apply = c
                        }
                    },
                    W5b = class {
                        map(a) {
                            return a(this)
                        }
                        constructor(a, b, c) {
                            var d = V5b;
                            this.keyType = a;
                            this.valueType = b;
                            this.resultType = c;
                            this.apply = d
                        }
                    },
                    Y5b = class {
                        map(a) {
                            return a(this)
                        }
                        constructor(a, b) {
                            var c = X5b;
                            this.j6a = a;
                            this.resultType =
                                b;
                            this.apply = c
                        }
                    },
                    T4b = class {
                        map(a) {
                            return a(this)
                        }
                        constructor(a, b, c, d) {
                            this.itemType = a;
                            this.E6a = b;
                            this.resultType = c;
                            this.reduce = d
                        }
                    };
                var X4b = class {
                    map(a) {
                        return a(this)
                    }
                    constructor(a, b) {
                        this.type = a;
                        this.get = b
                    }
                };
                var Z5b = class {},
                    d5b = class extends Z5b {
                        mla(a) {
                            return new d5b(a(this.value))
                        }
                        ppa(a) {
                            return a(this.value)
                        }
                        constructor(a) {
                            super();
                            this.value = this.value = a
                        }
                    },
                    e5b = class extends Z5b {
                        mla(a, b) {
                            return new e5b(b(this.value))
                        }
                        ppa(a, b) {
                            return b(this.value)
                        }
                        constructor(a) {
                            super();
                            this.value = this.value = a
                        }
                    };
                var b6 = class {
                        map(a) {
                            return a(this)
                        }
                    },
                    v6 = class extends b6 {
                        Era(a) {
                            return this === a || a.rya(b => this.G0(b))
                        }
                        dN() {
                            throw Error(`${this} is not iterable`);
                        }
                        zta(a) {
                            var b;
                            const c = (b = this.propTypes) !== null && b !== void 0 ? b : this.propTypes = this.tca();
                            if (!c) throw Error(`${this} is not navigable"`);
                            if (!c.hasOwnProperty(a)) throw Error(`${this} has no navigable property "${a}"`);
                            return c[a]
                        }
                        tca() {
                            throw Error(`${this} is not navigable`);
                        }
                        ypa(a) {
                            a(this)
                        }
                        rya(a) {
                            return a(this)
                        }
                        constructor() {
                            super();
                            this.kind = "simple";
                            this.propTypes =
                                void 0
                        }
                    },
                    w6 = class extends v6 {
                        G0(a) {
                            return a instanceof w6 && this.name === a.name
                        }
                        toString() {
                            return this.name
                        }
                        constructor(a) {
                            super();
                            this.name = a
                        }
                    },
                    x6 = class extends v6 {
                        G0(a) {
                            return a instanceof x6 && this.qD === a.qD
                        }
                        toString() {
                            return this.qD.name
                        }
                        constructor(a) {
                            super();
                            this.qD = a
                        }
                    },
                    y6 = class extends v6 {
                        G0(a) {
                            return a instanceof y6 && this.qD === a.qD && a6(this.Su, a.Su)
                        }
                        toString() {
                            return `${this.qD}<${this.Su}>`
                        }
                        constructor(a, b) {
                            super();
                            this.qD = a;
                            this.Su = b
                        }
                    },
                    $5b = class extends y6 {
                        dN() {
                            return this.Su
                        }
                        tca() {
                            const a =
                                this.Su;
                            return {
                                size: h6.number,
                                empty: h6.Th,
                                get first() {
                                    return h6.optional(a)
                                }
                            }
                        }
                        constructor(a) {
                            super("array", a)
                        }
                    },
                    a6b = class extends y6 {
                        dN() {
                            return this.Su
                        }
                        tca() {
                            const a = this.Su;
                            return {
                                size: h6.number,
                                empty: h6.Th,
                                get first() {
                                    return h6.optional(a)
                                }
                            }
                        }
                        constructor(a) {
                            super("set", a)
                        }
                    },
                    b6b = class extends v6 {
                        G0(a) {
                            return a instanceof b6b && a6(this.key, a.key) && a6(this.value, a.value)
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
                    c6b = class extends v6 {
                        G0(a) {
                            return a instanceof
                            c6b ? Object.entries(a.fields).every(([b, c]) => this.fields.hasOwnProperty(b) && a6(this.fields[b], c)) : !1
                        }
                        tca() {
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
                    z6 = class extends b6 {
                        Era(a) {
                            return this === a || this.um.every(b => b.Era(a))
                        }
                        dN() {
                            const a = this.um.map(b => b.dN());
                            return $5(a, b => h6.union(...b))
                        }
                        zta(a) {
                            const b = this.um.map(c => c.zta(a));
                            return $5(b, c => h6.union(...c))
                        }
                        ypa(a) {
                            this.um.forEach(b =>
                                b.ypa(a))
                        }
                        rya(a) {
                            return this.um.some(b => b.rya(a))
                        }
                        toString() {
                            return this.um.length ? this.um.map(a => a.toString()).join(" | ") : "never"
                        }
                        constructor(a) {
                            super();
                            this.um = a;
                            this.kind = "disjunction";
                            v(a.length !== 1)
                        }
                    },
                    A6 = new z6([]),
                    d6b = new w6("string"),
                    e6b = new w6("number"),
                    f6b = new w6("boolean"),
                    g6b = new w6("undefined"),
                    h6b = class {
                        get never() {
                            return A6
                        }
                        get string() {
                            return d6b
                        }
                        get number() {
                            return e6b
                        }
                        get Th() {
                            return f6b
                        }
                        get undefined() {
                            return g6b
                        }
                        optional(a) {
                            return h6.union(a, h6.undefined)
                        }
                        array(a) {
                            return new $5b(a)
                        }
                        set(a) {
                            return new a6b(a)
                        }
                        N8(a) {
                            return new z6([new $5b(a),
                                new a6b(a)
                            ])
                        }
                        map(a, b) {
                            return new b6b(a, b)
                        }
                        Wc(a) {
                            return new c6b({ ...a
                            })
                        }
                        union(...a) {
                            if (a.length === 0) return A6;
                            if (a.length === 1) return a[0];
                            const b = new Set;
                            for (const d of a) W4b(d).ypa(e => b.add(e));
                            a = [...b];
                            if (a.length === 0) return A6;
                            if (a.length === 1) return a[0];
                            if (a.length === 2) {
                                const [d, e] = a;
                                return a6(d, e) ? e : a6(e, d) ? d : new z6(a)
                            }
                            const c = new Set;
                            for (const d of a)[...c].some(e => a6(d, e)) || (c.forEach(e => a6(e, d) && c.delete(e)), c.add(d));
                            return c.size === 1 ? [...c][0] : new z6([...c])
                        }
                    },
                    i6b = class extends h6b {
                        instance(a) {
                            return new x6(a)
                        }
                    },
                    h6 = new i6b,
                    j6b = class extends h6b {
                        instance(a) {
                            return new x6(__c.D(this.classes[a]))
                        }
                        constructor(a) {
                            super();
                            this.classes = a
                        }
                    };
                var k6b, l6b, B6 = Symbol("value"),
                    C6 = class {
                        get props() {
                            var a;
                            return (a = this.u5a) !== null && a !== void 0 ? a : this.u5a = this.Pka()
                        }
                    },
                    m6b = class {
                        get size() {
                            return this[B6].length
                        }
                        get empty() {
                            return this[B6].length === 0
                        }
                        get first() {
                            return this[B6][0]
                        }
                        constructor(a) {
                            this[B6] = a
                        }
                    };
                k6b = Symbol.iterator;
                var n6b = class extends C6 {
                        Pka() {
                            return new m6b(this.items)
                        }
                        map(a) {
                            return this.items.map(a)
                        }[k6b]() {
                            return this.items[Symbol.iterator]()
                        }
                        toString() {
                            return this.items.length ? `[${Array.from(this.items,e6).join(", ")}]` : "[]"
                        }
                        constructor(a) {
                            super();
                            this.kind = "array";
                            this.items = [...a]
                        }
                    },
                    o6b = class {
                        get size() {
                            return this[B6].size
                        }
                        get empty() {
                            return this[B6].size === 0
                        }
                        get first() {
                            return this[B6][Symbol.iterator]().next().value
                        }
                        constructor(a) {
                            this[B6] = a
                        }
                    };
                l6b = Symbol.iterator;
                var p6b = class extends C6 {
                        Pka() {
                            return new o6b(this.items)
                        }
                        map(a) {
                            return Array.from(this.items, a)
                        }[l6b]() {
                            return this.items[Symbol.iterator]()
                        }
                        toString() {
                            return this.items.size ? `Set [${Array.from(this.items,e6).join(", ")}]` : "Set []"
                        }
                        constructor(a) {
                            super();
                            this.kind = "set";
                            this.items = new Set(a)
                        }
                    },
                    q6b = class {
                        toString() {
                            return this.items.size ? `Map {${Array.from(this.items,([a,b])=>`[${e6(a)}]: ${e6(b)}`).join(", ")}}` : "Map {}"
                        }
                        constructor(a) {
                            this.items = a;
                            this.kind = "map"
                        }
                    },
                    r6b = class extends C6 {
                        Pka() {
                            return this.fields
                        }
                        toString() {
                            const a =
                                Object.entries(this.fields);
                            return a.length ? `{ ${[...a].map(([b,c])=>`${b}: ${e6(c)}`).join(", ")} }` : "{}"
                        }
                        constructor(a) {
                            super();
                            this.fields = a;
                            this.kind = "record"
                        }
                    },
                    s6b = class {
                        toString() {
                            return `[instance ${this.qD.name}]`
                        }
                        constructor(a, b) {
                            this.qD = a;
                            this.instance = b;
                            this.kind = "instance"
                        }
                    },
                    t6b = class {
                        array(a) {
                            return new n6b(a)
                        }
                        arrayOf(...a) {
                            return new n6b(a)
                        }
                        set(a) {
                            return new p6b(a)
                        }
                        map(a) {
                            return new q6b(new Map(a))
                        }
                        Wc(a) {
                            return new r6b({ ...a
                            })
                        }
                    },
                    u6b = class extends t6b {
                        instance(a, b) {
                            return new s6b(a, b)
                        }
                        stringify(a) {
                            return e6(a)
                        }
                        constructor() {
                            super();
                            this.Zg = d6
                        }
                    },
                    m6 = new u6b,
                    v6b = class extends t6b {
                        instance(a, b) {
                            a = __c.D(this.classes[a]);
                            return new s6b(a, b)
                        }
                        constructor(a) {
                            super();
                            this.classes = a
                        }
                    };
                var a5b = {
                        [0]: new j6(h6.number, h6.number, a => -a),
                        [1]: new j6(h6.string, h6.number, a => a.length),
                        [2]: new j6(h6.Th, h6.Th, a => !a)
                    },
                    b5b = {
                        [0]: new t6(h6.number, h6.number, h6.number, (a, b) => a + b),
                        [1]: new t6(h6.number, h6.number, h6.number, (a, b) => a - b),
                        [2]: new t6(h6.number, h6.number, h6.number, (a, b) => a * b),
                        [3]: new t6(h6.number, h6.number, h6.number, (a, b) => a / b),
                        [4]: new t6(h6.number, h6.number, h6.number, (a, b) => a % b),
                        [5]: new t6(h6.string, h6.string, h6.string, (a, b) => a + b),
                        [6]: new t6(h6.number, h6.number, h6.Th, (a, b) => a === b),
                        [7]: new t6(h6.number,
                            h6.number, h6.Th, (a, b) => a !== b),
                        [8]: new t6(h6.number, h6.number, h6.Th, (a, b) => a < b),
                        [9]: new t6(h6.number, h6.number, h6.Th, (a, b) => a <= b),
                        [10]: new t6(h6.number, h6.number, h6.Th, (a, b) => a > b),
                        [11]: new t6(h6.number, h6.number, h6.Th, (a, b) => a >= b),
                        [12]: new t6(h6.Th, h6.Th, h6.Th, (a, b) => a && b),
                        [13]: new t6(h6.Th, h6.Th, h6.Th, (a, b) => a || b)
                    },
                    h5b = {
                        [2]: new u6(h6.number, h6.number, a => a.reduce((b, c) => b + c, 0)),
                        [3]: new u6(h6.number, h6.number, a => a.reduce((b, c) => b * c, 1)),
                        [4]: new u6(h6.number, h6.number, a => Math.max(...a)),
                        [5]: new u6(h6.number,
                            h6.number, a => Math.min(...a)),
                        [6]: new u6(h6.string, h6.string, a => a.join(""))
                    },
                    w6b = a => m6.array(a),
                    x6b = a => m6.set(a),
                    f5b = {
                        [0]: a => new u6(a, h6.array(a), w6b),
                        [1]: a => new u6(a, h6.set(a), x6b)
                    },
                    V5b = a => m6.map(a),
                    m5b = {
                        [0]: (a, b) => new W5b(a, b, h6.map(a, b))
                    },
                    X5b = a => m6.Wc(a),
                    o5b = {
                        [0]: a => new Y5b(a, h6.Wc(a))
                    },
                    y6b = (a, b) => m6.array(b.map(c => c())),
                    z6b = (a, b) => m6.array(b.flatMap(c => c().items)),
                    A6b = (a, b) => m6.array(a.filter((c, d) => b[d]()).map(c => c())),
                    B6b = (a, b) => b.some(c => c()),
                    C6b = (a, b) => b.every(c => c()),
                    D6b = (a, b) => {
                        var c;
                        return (c =
                            a.find((d, e) => b[e]())) === null || c === void 0 ? void 0 : c()
                    },
                    k5b = {
                        [0]: (a, b) => b.map(c => Z5(a, c, h6.array(c), y6b)),
                        [1]: (a, b) => b.dN().map(c => Z5(a, h6.array(c), h6.array(c), z6b)),
                        [2]: a => Z5(a, h6.Th, h6.array(a), A6b),
                        [3]: a => Z5(a, h6.Th, h6.Th, B6b),
                        [4]: a => Z5(a, h6.Th, h6.Th, C6b),
                        [5]: a => Z5(a, h6.Th, h6.optional(a), D6b)
                    };
                var l6 = class {
                    define(a, b) {
                        return new l6(new Map([
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
                var F6b = (a, b, c) => {
                        const d = new l6(new Map(b.AY)),
                            e = new E6b(a);
                        return {
                            compile: f => {
                                const g = f6(e, d, f).as(c);
                                return {
                                    apply: h => {
                                        h = new l6(new Map(b.apply(h).cxa));
                                        return g(h)
                                    }
                                }
                            }
                        }
                    },
                    E6b = class {
                        constructor(a) {
                            this.types = a
                        }
                    },
                    k6 = class {
                        static of (a, b) {
                            return new k6(a, b)
                        }
                        as(a) {
                            if (!a6(this.type, a)) throw Error(`inferred type ${this.type} does not match expected type: ${a}`);
                            return this.evaluate
                        }
                        computed() {
                            const a = this.evaluate;
                            return new k6(this.type, b => {
                                const c = r6(a(b), {
                                    equals: m6.Zg
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
                    u5b = class {
                        static of (a, b, c) {
                            return new u5b(a, b, c)
                        }
                        map(a) {
                            return a(this.i6a, this.resultType, this.evaluate)
                        }
                        constructor(a, b, c) {
                            this.i6a = a;
                            this.resultType = b;
                            this.evaluate = c
                        }
                    };
                var G5b = class {
                        add(a) {
                            a = a(G6b, this.types);
                            return new G5b({ ...this.classes,
                                ...a
                            })
                        }
                        resolve(a) {
                            return this.classes[a]
                        }
                        constructor(a) {
                            this.classes = a;
                            this.types = new j6b(this.classes);
                            this.values = new v6b(this.classes)
                        }
                    },
                    G6b = class {
                        constructor(a, b, c) {
                            this.name = a;
                            this.create = c;
                            this.Skb = new j6(h6.Wc(b), h6.instance(this), d => m6.instance(this, c(d.fields)))
                        }
                    };
                var C5b = class {
                    error(a, b) {
                        return Error(`widget '${this.Hvb}': schema error on key '${a}': ${b}`)
                    }
                    constructor(a) {
                        this.Hvb = a
                    }
                };
                var H6b = Object.freeze({
                    empty: !0,
                    count() {
                        return 0
                    },
                    toArray() {
                        return []
                    },
                    qs() {
                        return new Map
                    },
                    first() {},
                    last() {},
                    next() {
                        p6()
                    },
                    Tb() {
                        p6()
                    },
                    Fe() {
                        p6()
                    },
                    NA() {
                        p6()
                    },
                    has() {
                        return !1
                    },
                    xt() {
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
                var I6b;
                I6b = Symbol.iterator;
                var L5b = class {
                    static A(a) {
                        __c.P(a, {
                            ye: r6,
                            Nx: r6
                        })
                    }
                    get ye() {
                        return this.p6a().map(a => {
                            let b = this.xNa.get(a);
                            b == null && (b = `${this.Hfb++}`, this.xNa.set(a, b));
                            return {
                                id: b,
                                ref: a
                            }
                        })
                    }
                    get Nx() {
                        const a = new Map;
                        this.ye.forEach((b, c) => b && a.set(b.ref, c));
                        return a
                    }
                    Ll(a) {
                        return __c.D(this.Nx.get(a), "ref not found")
                    }
                    get empty() {
                        return !this.ye.length
                    }
                    count() {
                        return this.ye.length
                    }
                    toArray() {
                        return this.ye.map(a => a.ref)
                    }
                    qs() {
                        return new Map(this.map((a, b) => [b, a]))
                    }
                    get I$() {
                        const a = this.ye[0];
                        return a && a.ref
                    }
                    get cca() {
                        const a =
                            this.ye[this.ye.length - 1];
                        return a && a.ref
                    }
                    first(a) {
                        if (!a) return this.I$;
                        const b = this.ye.find(c => a(c.ref));
                        return b && b.ref
                    }
                    last(a) {
                        if (!a) return this.cca;
                        const b = this.ye;
                        for (let c = b.length - 1; c >= 0; c--) {
                            const d = b[c];
                            if (a(d.ref)) return d.ref
                        }
                    }
                    next(a, b) {
                        const c = this.ye;
                        for (a = this.Ll(a) + 1; a < c.length; a++) {
                            const d = c[a];
                            if (!b || b(d.ref)) return d.ref
                        }
                    }
                    Tb(a, b) {
                        const c = this.ye;
                        for (a = this.Ll(a) - 1; a >= 0; a--) {
                            const d = c[a];
                            if (!b || b(d.ref)) return d.ref
                        }
                    }
                    Fe(a, b) {
                        a = this.Nx.get(a);
                        b = this.Nx.get(b);
                        v(a != null);
                        v(b != null);
                        return a < b ? -1 : a > b ? 1 : 0
                    }
                    NA(a) {
                        return this.ye[this.Ll(a)].id
                    }
                    has(a) {
                        return this.Nx.has(a)
                    }
                    xt(a) {
                        return new __c.WN(this, a)
                    }
                    map(a) {
                        return this.ye.map(({
                            ref: b,
                            id: c
                        }) => a(b, c))
                    }
                    flatMap(a) {
                        return this.ye.flatMap(({
                            ref: b,
                            id: c
                        }) => a(b, c))
                    }
                    filter(a) {
                        return this.ye.filter(b => a(b.ref, b.id)).map(b => b.ref)
                    }
                    forEach(a) {
                        this.ye.forEach((b, c) => a(b.ref, b.id, c))
                    }
                    reduce(a, b) {
                        return this.ye.reduce((c, d) => a(c, d.ref, d.id), b)
                    }
                    some(a) {
                        return this.ye.some(b => a(b.ref, b.id))
                    }
                    every(a) {
                        return this.ye.every(b => a(b.ref, b.id))
                    }[I6b]() {
                        return this.toArray()[Symbol.iterator]()
                    }
                    constructor(a) {
                        this.p6a =
                            a;
                        this.Hfb = (L5b.A(this), 0);
                        this.xNa = new WeakMap
                    }
                };
                var J6b = new Set,
                    K6b = {
                        oD: () => ({
                            Ra: H6b
                        })
                    },
                    L6b = class {
                        static A(a) {
                            __c.P(a, {
                                tfa: U5b.shallow
                            })
                        }
                        Dgb(a, b, {
                            element: c
                        }) {
                            const d = __c.D(this.iqb.Ffa.get(a));
                            v(d.element === b.element);
                            v(!this.tfa.has(a));
                            b = {
                                element: O5b(this, b, c)
                            };
                            this.tfa.set(a, b);
                            J6b.has(a) || (__c.bQ.set(a, K6b), J6b.add(a));
                            return b
                        }
                        Ccb(a) {
                            var b;
                            return (b = this.tfa.get(a)) === null || b === void 0 ? void 0 : b.element
                        }
                        constructor(a, b, c, d, e) {
                            this.iqb = a;
                            this.t0a = b;
                            this.Zma = c;
                            this.H = d;
                            this.$F = e;
                            this.tfa = (L6b.A(this), new Map)
                        }
                    };
                var M6b = class {
                    static A(a) {
                        __c.P(a, {
                            Ffa: U5b.shallow
                        })
                    }
                    Egb(a, b) {
                        v(!this.Ffa.has(a));
                        b = {
                            document: S5b(this.$Ia(a, b.document)),
                            element: S5b(this.$Ia(a, b.element))
                        };
                        this.Ffa.set(a, b);
                        return b
                    }
                    constructor(a) {
                        this.$Ia = a;
                        this.Ffa = (M6b.A(this), new Map)
                    }
                };
                __c.AQa = {
                    Jgb: function(a) {
                        var b = a.H;
                        a = a.Ivb;
                        var c = {
                            Yn: H5b(),
                            Zma: F6b
                        };
                        const {
                            Yn: d,
                            Zma: e
                        } = c;
                        c = new M6b(F5b(d));
                        b = new L6b(c, d, e, b, a);
                        return {
                            UCa: c,
                            cPb: c,
                            n6: b,
                            m6: b
                        }
                    }
                };
            }).call(self, self._7ccc7343da2ae983607b3819c7bc1f93);
        }

    }
])
//# sourceMappingURL=sourcemaps/6bba74b3d55843da.js.map