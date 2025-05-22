(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [21389], {

        /***/
        476834: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            self._5c0f058b2d917619b177d32cbc4c572b = self._5c0f058b2d917619b177d32cbc4c572b || {};
            (function(__c) {
                /*

                 Copyright The Closure Library Authors.
                 Copyright The Closure Compiler Authors.
                 SPDX-License-Identifier: Apache-2.0
                */
                var aa = function(a) {
                        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
                        for (var b = 0; b < a.length; ++b) {
                            var c = a[b];
                            if (c && c.Math == Math) return c
                        }
                        throw Error("Cannot find global object");
                    },
                    da = function(a, b) {
                        if (b) a: {
                            var c = ba;a = a.split(".");
                            for (var d = 0; d < a.length - 1; d++) {
                                var e = a[d];
                                if (!(e in c)) break a;
                                c = c[e]
                            }
                            a = a[a.length - 1];d = c[a];b = b(d);b != d && b != null && ca(c, a, {
                                configurable: !0,
                                writable: !0,
                                value: b
                            })
                        }
                    },
                    q = function(a, b) {
                        var c = [];
                        if (!a) throw Error(b == null ? "invalid argument" : ea(b, ...c));
                    },
                    ea = function(a, ...b) {
                        let c = 0;
                        return a.replace(/\{}/g, () => c < b.length ? b[c++] : "{}")
                    },
                    t = function(a, b) {
                        var c = [];
                        if (!a) throw Error(b == null ? "invalid state" : ea(b, ...c));
                    },
                    ha = function(a, b, ...c) {
                        if (a == null) throw Error(b == null ? "argument is null" : ea(b, ...c));
                        return a
                    },
                    la = function(a, b) {
                        if (!(a in ia)) {
                            const c = self.bootstrap;
                            if (!c) throw Error("Could not find bootstrap");
                            ia[a] = { ...c[a]
                            };
                            delete c[a]
                        }
                        a in ja && ja[a] != null ? a = ja[a] : (b = b(ka.required(a, ia)), a = ja[a] =
                            b);
                        return a
                    },
                    na = function() {
                        var a = window.location.search;
                        ["base", "page", "ui"].forEach(b => {
                            ma(a, `bootstrap.${b}.`)
                        })
                    },
                    ma = function(a, b) {
                        const c = new Map;
                        (new URLSearchParams(a)).forEach((d, e) => {
                            e.startsWith(b) && c.set(decodeURIComponent(e.replace(b, "").replace(/\+/g, " ")), decodeURIComponent(d.replace(/\+/g, " ")))
                        });
                        return c
                    },
                    pa = function(a) {
                        return new oa(a)
                    },
                    ra = function(a) {
                        return new qa(a)
                    },
                    sa = function(a) {
                        return a != null && a.then != null
                    },
                    va = function(a) {
                        ({
                            hf: b
                        } = {
                            hf: !1
                        });
                        var b;
                        let c = !1,
                            d;
                        return (...e) => {
                            q(e.length ===
                                0);
                            if (d == null || b && (!d.ok || c)) try {
                                c = !1, d = ta(a()), sa(d.value) && d.value.then(null, () => c = !0)
                            } catch (f) {
                                d = ua(f)
                            }
                            if (d.ok) return d.value;
                            throw d.error;
                        }
                    },
                    wa = function(a, b, c, d) {
                        return {
                            tag: c,
                            K: 2,
                            G: b,
                            default: d != null ? d : a.defaultValue,
                            defaultValue: a.defaultValue,
                            A: a.A
                        }
                    },
                    xa = function(a, b, c) {
                        return {
                            tag: c,
                            K: 3,
                            G: b,
                            defaultValue: a.defaultValue,
                            A: a.A
                        }
                    },
                    za = function(a) {
                        return (b, c, d) => {
                            const {
                                tag: e,
                                G: f,
                                W: g
                            } = u(b, c, d);
                            return {
                                K: 5,
                                tag: e,
                                G: f,
                                pa: g,
                                Lc: ya.A,
                                A: a === "object" ? "object" : a === "enum" ? "string" : a.A
                            }
                        }
                    },
                    x = function(a, b) {
                        const {
                            tag: c,
                            G: d,
                            W: e
                        } = u(a, b);
                        return {
                            tag: c,
                            K: 1,
                            G: void 0,
                            md: d,
                            value: e,
                            Ce: !1,
                            A: "string"
                        }
                    },
                    y = function(a, b) {
                        const {
                            tag: c,
                            G: d,
                            W: e
                        } = u(a, b);
                        return {
                            tag: c,
                            K: 2,
                            G: d,
                            pa: e,
                            A: "object"
                        }
                    },
                    B = function(a, b) {
                        const {
                            tag: c,
                            G: d,
                            W: e
                        } = u(a, b);
                        return {
                            tag: c,
                            K: 3,
                            G: d,
                            pa: e,
                            A: "object"
                        }
                    },
                    C = function(a, b) {
                        const {
                            tag: c,
                            G: d,
                            W: e
                        } = u(a, b);
                        return {
                            tag: c,
                            K: 4,
                            G: d,
                            pa: e,
                            A: "object"
                        }
                    },
                    D = function(a, b) {
                        const {
                            tag: c,
                            G: d,
                            W: e,
                            rd: f
                        } = u(a, b);
                        return {
                            tag: c,
                            K: 2,
                            G: d,
                            pa: e,
                            default: f,
                            A: "string"
                        }
                    },
                    E = function(a, b) {
                        const {
                            tag: c,
                            G: d,
                            W: e
                        } = u(a, b);
                        return {
                            tag: c,
                            K: 3,
                            G: d,
                            pa: e,
                            A: "string"
                        }
                    },
                    J = function(a) {
                        var b = {};
                        const c = va(() => {
                            const e = a();
                            var f = Object.keys(e);
                            const g = {},
                                h = {};
                            for (const k of f) switch (f = e[k], f.K) {
                                case 1:
                                    h[f.tag] = { ...f,
                                        name: k
                                    };
                                    break;
                                case 2:
                                case 3:
                                case 4:
                                case 5:
                                    g[f.tag] = { ...f,
                                        name: k
                                    };
                                    break;
                                default:
                                    throw new F(f);
                            }
                            return {
                                kind: 1,
                                cd: e,
                                Gb: Aa(e, b.Eb),
                                Qe: g,
                                ue: h
                            }
                        });
                        class d {
                            static za(e) {
                                return d.qb(e, [])
                            }
                            static Vb(e, f, g) {
                                f = f.config;
                                return f.A === "Uint8Array" ? Ba(e) : f.pa ? f.pa.qb(e, g) : e
                            }
                            static P(e) {
                                return d.Pa(e, [])
                            }
                            static Db(e, f, g) {
                                f = f.config;
                                return f.A === "Uint8Array" ? Ca(e) : f.pa ?
                                    f.pa.Pa(e, g) : e
                            }
                            static Pa(e, f) {
                                var {
                                    Gb: g
                                } = c(), h = Object.create(d.prototype);
                                for (const w of g) {
                                    g = w.config;
                                    const v = w.name;
                                    var k = w.L,
                                        l = w.Z,
                                        n = k,
                                        m = e[n];
                                    m == null && l != null && e[l] != null && (n = l, m = e[n]);
                                    switch (g.K) {
                                        case 3:
                                            if (m == null) {
                                                h[v] = void 0;
                                                break
                                            } else if (!G(m, g.A)) throw Da({
                                                L: k,
                                                Z: l
                                            }, m, g.A, f);
                                            f.push(n);
                                            h[v] = d.Db(m, w, f);
                                            f.pop();
                                            break;
                                        case 2:
                                            if (m == null && g.defaultValue != null) {
                                                h[v] = g.defaultValue;
                                                break
                                            } else if (m == null || !G(m, g.A)) throw Ea({
                                                L: k,
                                                Z: l
                                            }, m, g.A, f);
                                            f.push(n);
                                            h[v] = d.Db(m, w, f);
                                            f.pop();
                                            break;
                                        case 1:
                                            var r = w.Sb;
                                            n = w.Ic;
                                            if (m == null && g.Ce) {
                                                h[v] = g.value;
                                                break
                                            }
                                            if (m === r) {
                                                h[v] = g.value;
                                                break
                                            }
                                            if (n != null && m === n) {
                                                h[v] = g.value;
                                                break
                                            }
                                            e = r;
                                            h = n;
                                            throw new TypeError(`Expected value ${h?`either "${e}" OR "${h}"`:`"${e}"`} for key ${Fa({L:k,Z:l})} found: ${JSON.stringify(m)} ${H(f)}`);
                                        case 4:
                                            if (m == null) {
                                                h[v] = [];
                                                break
                                            } else if (!Array.isArray(m)) throw Ga({
                                                L: k,
                                                Z: l
                                            }, m, g.A, f);
                                            r = Array(m.length);
                                            for (var p = 0; p < m.length; ++p) {
                                                if (!G(m[p], g.A)) throw Ea({
                                                    L: k,
                                                    Z: l
                                                }, m[p], g.A, [...f, n], p);
                                                f.push(`${n}[${p}]`);
                                                r[p] = d.Db(m[p], w, f);
                                                f.pop()
                                            }
                                            h[v] =
                                                r;
                                            break;
                                        case 5:
                                            if (m == null) {
                                                h[v] = new Map;
                                                break
                                            } else if (typeof m !== "object") throw new TypeError(`Expected Map for key ${Fa({L:k,Z:l})}, found: ${I(m)} ${H(f)}`);
                                            k = g.Lc === "number";
                                            m = Object.entries(m);
                                            l = Array(m.length);
                                            for (r = 0; r < m.length; ++r) {
                                                const [z, A] = m[r];
                                                if (k) {
                                                    if (p = Number(z), isNaN(p)) throw new TypeError(`Expected number map key, found: NaN ${H([...f,n])}`);
                                                } else p = z;
                                                if (!G(A, g.A)) throw new TypeError(`Expected ${g.A} map value for map key "${p}", found: ${I(A)} ${H([...f,n])}`);
                                                f.push(`${n}["${p}"]`);
                                                const M = d.Db(A, w, f);
                                                f.pop();
                                                l[r] = [p, M]
                                            }
                                            h[v] = new Map(l);
                                            break;
                                        default:
                                            throw new F(g);
                                    }
                                }
                                return h
                            }
                            constructor(e = {}) {
                                var {
                                    Gb: f
                                } = c();
                                for (const g of f) {
                                    f = g.config;
                                    const h = g.name,
                                        k = e[h];
                                    switch (f.K) {
                                        case 1:
                                            this[h] = f.value;
                                            break;
                                        case 2:
                                            this[h] = k == null ? f.default : k;
                                            break;
                                        case 3:
                                            this[h] = k;
                                            break;
                                        case 4:
                                            this[h] = k == null ? [] : k;
                                            break;
                                        case 5:
                                            this[h] = k == null ? new Map : k;
                                            break;
                                        default:
                                            throw new F(f);
                                    }
                                }
                            }
                        }
                        d.init = c;
                        d.qb = b.Ya ? (e, f) => {
                            throw new TypeError(`Unproducible oneof case ${H(f)}`);
                        } : (e, f) => {
                            if (e == null || typeof e !== "object") throw new TypeError(`Expected type object, found: ${I(e)} ${H(f)}`);
                            var {
                                Gb: g
                            } = c();
                            const h = {};
                            for (const m of g) {
                                g = m.config;
                                var k = m.L,
                                    l = e[m.name];
                                const r = k;
                                switch (g.K) {
                                    case 1:
                                        if (l !== g.value) throw new TypeError(`Expected value ${JSON.stringify(g.value)} for key "${k}", found: ${JSON.stringify(l)} ${H(f)}`);
                                        h[r] = m.Sb;
                                        break;
                                    case 2:
                                        if (g.defaultValue != null && l === g.defaultValue) break;
                                        f.push(r);
                                        var n = d.Vb(l, m, f);
                                        f.pop();
                                        if (!G(n, g.A)) throw Ea({
                                            L: k
                                        }, l, g.A, f);
                                        h[r] = n;
                                        break;
                                    case 3:
                                        if (l == null) break;
                                        f.push(r);
                                        n = d.Vb(l, m, f);
                                        f.pop();
                                        if (!G(n, g.A)) throw Da({
                                            L: k
                                        }, l, g.A, f);
                                        h[r] = n;
                                        break;
                                    case 4:
                                        if (l == null) break;
                                        else {
                                            if (!Array.isArray(l)) throw Ga({
                                                L: k
                                            }, l, g.A, f);
                                            if (l.length === 0) break
                                        }
                                        n = Array(l.length);
                                        for (let p = 0; p < l.length; ++p) {
                                            f.push(`${r}[${p}]`);
                                            const w = d.Vb(l[p], m, f);
                                            f.pop();
                                            if (!G(w, g.A)) throw Ea({
                                                L: k
                                            }, w, g.A, [...f, r], p);
                                            n[p] = w
                                        }
                                        h[r] = n;
                                        break;
                                    case 5:
                                        if (!(l instanceof Map)) throw new TypeError(`Expected Map for key "${k}", found: ${I(l)} ${H(f)}`);
                                        if (l.size === 0) break;
                                        k = {};
                                        for (const [p, w] of l) {
                                            if (typeof p !== g.Lc) throw new TypeError(`Expected ${g.Lc} map key, found: ${I(p)} ${H([...f,
r])}`);
                                            f.push(`${r}["${p}"]`);
                                            l = d.Vb(w, m, f);
                                            f.pop();
                                            if (!G(l, g.A)) throw new TypeError(`Expected ${g.A} map value for map key "${p}", found: ${I(l)} ${H([...f,r])}`);
                                            k[p] = l
                                        }
                                        h[r] = k;
                                        break;
                                    default:
                                        throw new F(g);
                                }
                            }
                            return h
                        };
                        return d
                    },
                    K = function(a, b) {
                        var c = {};
                        const d = va(() => {
                                var g = a();
                                const h = Object.keys(g)[0];
                                let k;
                                const l = new Map,
                                    n = new Map,
                                    m = new Map;
                                for (var r = 0; r < g[h].length; r += 2) {
                                    var p = g[h][r];
                                    const z = g[h][r + 1],
                                        A = z.init().cd[h];
                                    if (!A) throw new TypeError("Missing discriminator.");
                                    if (A.K !== 1) throw new TypeError(`Discriminator must be FieldLabel.CONSTANT, was ${A.K}.}`);
                                    var w = Ha("A?", A.G, c.Eb);
                                    const {
                                        ea: M,
                                        ya: fa
                                    } = Ha(Ia(p - 1), A.md, c.Eb);
                                    m.set(p, {
                                        sg: z,
                                        value: A.value
                                    });
                                    l.set(A.value, z);
                                    n.set(M, z);
                                    fa && n.set(fa, z);
                                    if (k && k.L !== w.ea) throw new TypeError(`oneOf JSON keys are not consistent. ${k.L} ${w.ea}`);
                                    if (k && k.Z !== w.ya) throw new TypeError(`oneOf secondary JSON keys are not consistent. ${k.Z} ${w.ya}`);
                                    p = A.tag;
                                    k = {
                                        L: w.ea,
                                        Z: w.ya
                                    }
                                }
                                if (k == null || p == null) throw new TypeError("OneOf has no cases.");
                                g = b();
                                w = Object.keys(g);
                                r = {};
                                for (var v of w) r[g[v].tag] = { ...g[v],
                                    name: v
                                };
                                v = c.Ae != null ?
                                    c.Ae() : void 0;
                                return {
                                    kind: 2,
                                    Gb: Aa(g, c.Eb),
                                    Fe: h,
                                    wf: l,
                                    Vg: p,
                                    Ee: k,
                                    Wf: n,
                                    Be: v,
                                    cd: g,
                                    Qe: r,
                                    ue: {},
                                    Qi: m
                                }
                            }),
                            e = (g, h) => {
                                const {
                                    Fe: k,
                                    wf: l
                                } = d(), n = g[k], m = l.get(n);
                                if (!m) throw new TypeError(`Unknown oneof deserialized case: ${JSON.stringify(n)} ${H(h)}`);
                                return m.qb(g, h)
                            },
                            f = (g, h) => {
                                const {
                                    Wf: k,
                                    Ee: l,
                                    Be: n
                                } = d();
                                var m = l.Z;
                                let r = g[l.L];
                                r == null && m && (r = g[m]);
                                if (r == null && n) return n.Pa(g, h);
                                m = k.get(r);
                                if (!m) throw new TypeError(`Unknown oneof serialized case: ${JSON.stringify(r)} ${H(h)}`);
                                return m.Pa(g, h)
                            };
                        return {
                            init: d,
                            za: g =>
                                e(g, []),
                            qb: e,
                            P: g => f(g, []),
                            Pa: f
                        }
                    },
                    L = function(a, b = 0) {
                        var c = {};
                        const d = va(() => {
                                const g = a(),
                                    h = [],
                                    k = new Map,
                                    l = new Map,
                                    n = new Map,
                                    m = new Map,
                                    r = new Set;
                                let p = 0,
                                    w = 1;
                                for (; p < g.length;) {
                                    const z = w++,
                                        A = g[p];
                                    var v = Ia(A - b);
                                    p += 1;
                                    let M;
                                    const fa = g[p];
                                    typeof fa === "string" && (M = fa, p += 1);
                                    const {
                                        ea: Ib,
                                        ya: Jb
                                    } = Ha(v, M, c.Eb);
                                    v = g[p];
                                    typeof v === "object" && v.Ya && (r.add(z), p += 1);
                                    h.push(z);
                                    k.set(Ib, z);
                                    Jb && k.set(Jb, z);
                                    l.set(z, Ib);
                                    n.set(z, A);
                                    m.set(A, z)
                                }
                                return {
                                    values: h,
                                    Kd: l,
                                    fj: n,
                                    ui: m,
                                    Xf: k,
                                    Ya: r.size ? r : void 0
                                }
                            }),
                            e = (g, h, k) => {
                                const {
                                    Ya: l
                                } =
                                d();
                                if (l && l.has(g)) throw new TypeError(`Unproducible enum value: ${JSON.stringify(g)} ${k?H(k):""}`);
                                h = h.get(g);
                                if (h == null) throw new TypeError(`The proto enum serializer failed to serialize value ${JSON.stringify(g)} into JSON.
It does not recognize value ${JSON.stringify(g)} as a valid member of the TypeScript enum.
${k?H(k):""}`);
                                return h
                            },
                            f = (g, h) => {
                                const k = d().Xf.get(g);
                                if (k == null) throw new TypeError(`The proto enum deserializer failed to deserialize JSON ${JSON.stringify(g)} into an enum value.
It does not recognize JSON ${JSON.stringify(g)} as a valid JSON value encoding of the enum.
${H(h)}`);
                                return k
                            };
                        return {
                            values: () => d().values,
                            pi: () => {
                                const {
                                    values: g,
                                    Ya: h
                                } = d();
                                return h == null ? g : g.filter(k => !h.has(k))
                            },
                            za: g => e(g, d().Kd, []),
                            qb: (g, h) => e(g, d().Kd, h),
                            P: g => f(g, []),
                            Pa: f
                        }
                    },
                    Aa = function(a, b) {
                        return Object.entries(a).map(([c, d]) => {
                            let e = Ia(d.tag - 1);
                            if (d.K === 1) {
                                const {
                                    ea: k,
                                    ya: l
                                } = Ha(e, d.md, b);
                                e = "A?";
                                var f = {
                                    Sb: k,
                                    Ic: l
                                }
                            }
                            const {
                                ea: g,
                                ya: h
                            } = Ha(e, d.G, b);
                            return {
                                config: d,
                                name: c,
                                L: g,
                                Z: h,
                                Sb: f === null || f === void 0 ? void 0 : f.Sb,
                                Ic: f === null || f === void 0 ? void 0 : f.Ic
                            }
                        })
                    },
                    Ha = function(a, b, c) {
                        if (!b) {
                            if (c !==
                                void 0) throw Error("Dual Deserialization config templated but JSON full key/value wasn't");
                            return {
                                ea: a
                            }
                        }
                        if (c === void 0) return {
                            ea: b
                        };
                        if (c === 0) return {
                            ea: a,
                            ya: b
                        };
                        if (c === 1) return {
                            ea: b,
                            ya: a
                        };
                        throw Error("function should have been exhaustive, but wasn't");
                    },
                    Ga = function(a, b, c, d) {
                        return new TypeError(`Expected repeated ${c} value for key ${Fa(a)}, found: ${I(b)} ${H(d)}`)
                    },
                    Da = function(a, b, c, d) {
                        return new TypeError(`Expected optional ${c} value for key ${Fa(a)}, found: ${I(b)} ${H(d)}`)
                    },
                    Ea = function(a, b, c,
                        d, e) {
                        return new TypeError(`Expected ${c} value${e!==void 0?` at index ${e}`:""} for key ${Fa(a)}, found: ${I(b)} ${H(d)}`)
                    },
                    Fa = function(a) {
                        const b = a.L;
                        return (a = a.Z) ? `either "${b}" OR "${a}"` : `"${b}"`
                    },
                    H = function(a) {
                        return `(path: .${a.join(".")})`
                    },
                    I = function(a) {
                        return a === null ? "null" : Array.isArray(a) ? "array" : typeof a
                    },
                    Ia = function(a) {
                        if (a < 64) return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(a);
                        const b = [];
                        for (; a > 0;) b.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(a %
                            64)), a = Math.floor(a / 64);
                        return b.reverse().join("")
                    },
                    u = function(a, b, c) {
                        return typeof a === "string" ? {
                            G: a,
                            tag: b,
                            W: c,
                            rd: void 0
                        } : {
                            tag: a,
                            W: b,
                            rd: c
                        }
                    },
                    G = function(a, b) {
                        return typeof a === b || b === "Uint8Array" && typeof a === "string"
                    },
                    Ba = function(a) {
                        a = Array.from(a, b => String.fromCodePoint(b)).join("");
                        return btoa(a)
                    },
                    Ca = function(a) {
                        return Uint8Array.from(atob(a), b => b.codePointAt(0))
                    },
                    Na = async function(a, b) {
                        const c = Ja(a.tb),
                            d = a.l.ta(b.request.mode === "navigate" ? "intercept_fetch.navigate" : "intercept_fetch.other", {
                                startTime: c
                            });
                        Ka(a.xa, b);
                        try {
                            await a.l.Ub("handle_request", d, () => {
                                const e = La(a.requestHandler, b, d);
                                e != null ? (b.request.mode === "navigate" && Ma(a.xa, b, e), b.respondWith(e)) : (d.abort(), a.l.ta("intercept_fetch.unhandled", {
                                    startTime: c
                                }).end());
                                return e
                            })
                        } finally {
                            d.end()
                        }
                    },
                    Oa = function(a, b, c) {
                        b = new Headers([
                            ["X-serviceworker-error-navigation-url", b],
                            ["X-serviceworker-error-code", JSON.stringify(c)]
                        ]);
                        try {
                            fetch(a.fb, {
                                headers: b
                            })
                        } catch (d) {}
                    },
                    Pa = function(a) {
                        return a != null
                    },
                    Ra = function(a, b, c) {
                        return b != null && typeof b === "object" &&
                            b.sampleRate != null && b instanceof Error ? Qa(b.sampleRate) : c === "error" || c === "fatal" ? a.Xc : a.Wc
                    },
                    Qa = function(a) {
                        return Math.min(Math.max(0, a), 1)
                    },
                    Sa = async function(a, b) {
                        b = [
                            ["requestUrl", b]
                        ];
                        if (a instanceof Error && /quota/i.test(a.message)) {
                            var c, d;
                            (a = await ((d = navigator.storage) === null || d === void 0 ? void 0 : (c = d.estimate) === null || c === void 0 ? void 0 : c.call(d))) && b.push(...Object.entries(a))
                        }
                        return new Map(b)
                    },
                    Ta = async function(a, b, c) {
                        const d = new N(b instanceof Error ? b.message : String(b), .01);
                        try {
                            const e = await Sa(b,
                                    c.url),
                                f = new Map([
                                    ["requestMode", c.mode],
                                    ["requestOrigin", (new URL(c.url)).origin]
                                ]);
                            a.j.error(d, {
                                extra: e,
                                tags: f
                            })
                        } catch (e) {
                            a.j.error(d)
                        }
                    },
                    Wa = function({
                        D: {
                            j: a
                        },
                        fb: b
                    }) {
                        const c = b != null ? new Ua({
                                fb: b
                            }) : null,
                            d = new Va(a);
                        return {
                            gf: (e, f) => {
                                f.then(g => {
                                    e.mode !== "navigate" || g.ok || c === null || c === void 0 || Oa(c, e.url, g.status)
                                }).catch(g => {
                                    Ta(d, g, e);
                                    e.mode !== "navigate" || c !== null && c !== void 0 && Oa(c, e.url, -1)
                                })
                            }
                        }
                    },
                    La = function(a, b, c) {
                        try {
                            const d = a.Fc.resolve(b.request);
                            if (d == null) return a.C.Sa() ? Promise.resolve(Response.error()) :
                                void 0;
                            c.setAttribute("handler_name", d.name);
                            const e = d.handle(b, c);
                            a.Ke.gf(b.request, e);
                            return e.then(f => a.Tf.Id(f)).catch(() => a.xf.cf(b.request))
                        } catch (d) {
                            a.j.error(new N(d instanceof Error ? d.message : String(d), .01))
                        }
                    },
                    Za = function() {
                        ({
                            userAgent: a
                        } = {
                            userAgent: self.navigator.userAgent
                        });
                        var a;
                        return a.includes("Firefox") ? new Xa : new Ya
                    },
                    $a = function(a) {
                        return new Promise(b => setTimeout(b, a))
                    },
                    ab = function(a) {
                        const b = Error(a);
                        return c => {
                            c instanceof Error && (c.stack == null || c.stack === "") && (c.stack = b.stack);
                            return c
                        }
                    },
                    bb = function(a) {
                        return new Promise((b, c) => {
                            const d = () => {
                                    a.removeEventListener("success", e);
                                    a.removeEventListener("error", g)
                                },
                                e = () => {
                                    d();
                                    b(a.result)
                                },
                                f = ab("idb promisify_request_events error"),
                                g = () => {
                                    d();
                                    c(f(a.error))
                                };
                            a.addEventListener("success", e);
                            a.addEventListener("error", g)
                        })
                    },
                    cb = async function(a, b) {
                        const c = a.J(a.cursor.request);
                        a.cursor.continue(b);
                        return c
                    },
                    eb = function(a) {
                        return new Promise((b, c) => {
                            const d = ab("idb_transaction error");
                            a.ca.addEventListener("complete", () => b());
                            a.ca.addEventListener("error",
                                f => {
                                    f = f.target;
                                    c(d((f === null || f === void 0 ? void 0 : f.error) || a.ca.error || Error("Unknown error")))
                                });
                            const e = new db;
                            a.ca.addEventListener("abort", () => {
                                if (a.ca.error instanceof Error) {
                                    var f = e.cause = a.ca.error;
                                    f = [`${f.name}`, `${f.message}`].filter(g => !!g).join(": ");
                                    e.message = `${e.message} (${f})`
                                }
                                c(e)
                            })
                        })
                    },
                    gb = function({
                        name: a,
                        version: b,
                        Df: c,
                        be: d
                    }) {
                        var e = indexedDB;
                        return new Promise((f, g) => {
                            try {
                                const h = e.open(a, b);
                                let k, l = !1;
                                c && h.addEventListener("upgradeneeded", m => {
                                    l || (k = new fb(h.result), c(k, m))
                                });
                                switch (d.type) {
                                    case 0:
                                        d.Bf &&
                                            h.addEventListener("blocked", d.Bf);
                                        h.addEventListener("success", () => {
                                            f(k !== null && k !== void 0 ? k : new fb(h.result))
                                        });
                                        break;
                                    case 1:
                                        h.addEventListener("blocked", () => {
                                            l = !0;
                                            g(Error("operation blocked due to open connections"))
                                        });
                                        h.addEventListener("success", () => {
                                            const m = h.result;
                                            l ? m.close() : (m.addEventListener("versionchange", r => {
                                                (d.re && r.newVersion == null || d.se && r.newVersion != null) && m.close()
                                            }), f(k !== null && k !== void 0 ? k : new fb(m)))
                                        });
                                        break;
                                    default:
                                        throw new F(d);
                                }
                                const n = ab("idb_database open error");
                                h.addEventListener("error",
                                    () => {
                                        g(n(h.error))
                                    })
                            } catch (h) {
                                g(h)
                            }
                        })
                    },
                    jb = function(a) {
                        if (!(a instanceof Error)) return !1;
                        if (a.name === "QuotaExceededError" || a instanceof DOMException && a.code === 22 || a instanceof hb) return !0;
                        ib == null && (ib = [/Encountered full disk while opening backing store for indexedDB.open./i, /Failed to PutOrAdd in database because not enough space for domain/i]);
                        return ib.some(b => b.test(a.message))
                    },
                    mb = function(a) {
                        if (!self.indexedDB) return !0;
                        if (!(a instanceof Error)) return !1;
                        if (a instanceof kb || a instanceof db || a instanceof DOMException && ["AbortError", "TransactionInactiveError"].includes(a.name)) return !0;
                        lb == null && (lb = [/(transaction|operation) was aborted/i, /The database connection is closing/i, /connection to indexed database server lost/i, /internal error/i, /the transaction is inactive or finished/i, /unable to open database file on disk/i, /without an in-progress transaction/i]);
                        return lb.some(b => b.test(a.message))
                    },
                    ob = async function(a, b) {
                        const c = await a.Ef(),
                            d = () => {
                                e.connection = void 0;
                                c.removeEventListener("close", d)
                            };
                        c.addEventListener("close", d, {
                            once: !0
                        });
                        const e = new nb({
                            transaction: (f, g) => c.transaction(f, g),
                            close: () => {
                                d();
                                c.close();
                                b()
                            }
                        });
                        e.Ab = self.setTimeout(() => {
                            e.dispose()
                        }, 2500);
                        return e
                    },
                    pb = async function(a, {
                        B: b
                    }) {
                        var c;
                        const d = b != null ? (c = a.l) === null || c === void 0 ? void 0 : c.ua("idb_connection_manager.open_idb_connection", b) : void 0,
                            e = ob(a.ff, () => {
                                a.connection === e && (a.connection = void 0)
                            }).catch(f => {
                                a.connection = void 0;
                                d === null || d === void 0 || d.setStatus("error");
                                throw f;
                            }).finally(() => d === null || d === void 0 ? void 0 :
                                d.end());
                        return e
                    },
                    qb = async function(a, b, {
                        B: c
                    }) {
                        var d;
                        const e = c != null ? (d = a.l) === null || d === void 0 ? void 0 : d.ua("idb_connection_manager.get_connection", c) : void 0;
                        try {
                            if (a.connection == null || (b === null || b === void 0 ? 0 : b.Ue)) a.connection = pb(a, {
                                B: c
                            });
                            let f = await a.connection;
                            f.kf || (a.connection = pb(a, {
                                B: c
                            }), f = await a.connection);
                            return f
                        } catch (f) {
                            throw e === null || e === void 0 || e.setStatus("error"), f;
                        } finally {
                            e === null || e === void 0 || e.end()
                        }
                    },
                    rb = async function({
                        transaction: a,
                        H: b,
                        X: c
                    }) {
                        try {
                            const e = await c(a.objectStore(b));
                            try {
                                var d;
                                a === null || a === void 0 || (d = a.commit) === null || d === void 0 || d.call(a)
                            } catch (f) {}
                            return e
                        } catch (e) {
                            try {
                                a === null || a === void 0 || a.abort()
                            } catch (f) {}
                            throw e;
                        }
                    },
                    O = async function(a, {
                        H: b,
                        mode: c,
                        X: d,
                        methodName: e
                    }) {
                        var f;
                        const g = (f = a.l) === null || f === void 0 ? void 0 : f.sf({
                            methodName: e
                        });
                        try {
                            try {
                                const k = (await qb(a.fd, {}, {
                                        B: g
                                    })).transaction(b, c),
                                    [l] = await Promise.all([rb({
                                        transaction: k.transaction,
                                        H: b,
                                        X: d
                                    }), k.Nd]);
                                return l
                            } catch (k) {
                                const l = (await qb(a.fd, {
                                        Ue: !0
                                    }, {
                                        B: g
                                    })).transaction(b, c),
                                    [n] = await Promise.all([rb({
                                        transaction: l.transaction,
                                        H: b,
                                        X: d
                                    }), l.Nd]);
                                return n
                            }
                        } catch (k) {
                            a = k;
                            var h = a instanceof Error ? jb(a) ? new hb(a) : mb(a) ? new kb(a) : a : Error(String(a));
                            h instanceof sb || h instanceof tb || h instanceof ub || h instanceof hb || (g === null || g === void 0 || g.setAttribute("error", k instanceof Error ? k.message : String(k)), g === null || g === void 0 || g.end("error"));
                            throw h;
                        } finally {
                            g === null || g === void 0 || g.end("ok")
                        }
                    },
                    yb = function(a, b, c, d = [], e) {
                        return new vb(a, b, new wb(new xb({
                            Ef: () => gb({
                                name: a,
                                version: 1,
                                Df: f => {
                                    f = f.createObjectStore(a, {
                                        keyPath: "key"
                                    });
                                    if (d !=
                                        null && d.length > 0)
                                        for (const {
                                                name: g,
                                                Hb: h,
                                                ...k
                                            } of d) f.createIndex(g, `${"record"}.${h}`, k)
                                },
                                be: {
                                    type: 1,
                                    re: !0,
                                    se: !0
                                }
                            })
                        }, e), e != null ? {
                            sf: ({
                                methodName: f
                            }) => {
                                if (!(e == null || Math.random() > .01)) return e.ta(`storage_layer.idb_database_manager.execute.${f}`, {
                                    attrs: new Map([
                                        ["sample_rate_override", 1]
                                    ]),
                                    timeout: 3E5
                                })
                            }
                        } : void 0), c)
                    },
                    zb = function(a, b, c, d, e) {
                        return yb(a, b, c, d, e)
                    },
                    Ab = async function(a) {
                        if (a.Cb != null) switch (a = await a.Cb.qc(), a) {
                            case 1:
                            case 2:
                                break;
                            case 3:
                            case void 0:
                                throw new sb;
                            default:
                                throw new F(a);
                        }
                    },
                    Db = async function(a, b, c) {
                        await Ab(a);
                        return O(a.oa, {
                            H: a.H,
                            mode: "readwrite",
                            X: async d => {
                                await Promise.all(b.map(async e => {
                                    var f = await d.get(e);
                                    f = f ? {
                                        value: a.P(Bb(f))
                                    } : void 0;
                                    f = c(f, e);
                                    f != null ? await d.put(Cb(e, a.Wb.za(f.value))) : await d.delete(e)
                                }))
                            },
                            methodName: "updateMany"
                        })
                    },
                    Cb = function(a, b) {
                        return {
                            key: a,
                            record: b
                        }
                    },
                    Eb = function(a) {
                        if (typeof a !== "object" || a == null) throw Error("Result is not an object");
                        a = a.key;
                        if (typeof a !== "string") throw Error("Key is not a string");
                        return a
                    },
                    Bb = function(a) {
                        if (typeof a !==
                            "object" || a == null) throw Error("Result is not an object");
                        a = a.record;
                        if (a == null) throw Error("Value is undefined");
                        return a
                    },
                    Gb = async function(a) {
                        return Promise.race([(async () => {
                            try {
                                return await Fb().get("userAgent")
                            } catch (b) {
                                a.F(b)
                            }
                        })(), $a(1E4).then(() => {})])
                    },
                    Fb = function() {
                        return yb("config", {
                            za: a => a,
                            P: a => a
                        })
                    },
                    Hb = async function(a, b) {
                        const c = await a.Lf.Ye();
                        if (c == null || c === a.options.$f || (new URL(b.url)).origin !== a.options.targetOrigin) return b;
                        a = b.clone();
                        a.headers.set("X-Canva-User-Agent", c);
                        return a
                    },
                    Mb = function({
                        la: a,
                        C: b,
                        D: {
                            l: c,
                            j: d
                        }
                    }) {
                        return new Kb(b, a ? new Lb({
                            Ye: () => Gb(d)
                        }) : void 0, c, (...e) => self.fetch(...e))
                    },
                    Nb = function({
                        H: a,
                        ha: b,
                        ja: c
                    }) {
                        return `${b}-${c}-${a}`
                    },
                    Ob = function(a, b, c) {
                        return a.nd.Ga(b, c, void 0, a.gd[b], a.l)
                    },
                    Qb = function(a, b) {
                        var c = Pb;
                        const d = a.Pc.ha,
                            e = a.Pc.ja,
                            f = Nb({
                                H: b,
                                ha: d,
                                ja: e
                            });
                        a.Sf.put(f, {
                            ha: d,
                            ja: e
                        }).catch(g => a.j.F(g));
                        return a.nd.Ga(f, c, a.te[b] ? {
                            qc: async () => a.Cb.qc(d)
                        } : void 0, a.gd[b], a.l)
                    },
                    Ub = function(a) {
                        const b = new Rb(void 0),
                            c = new Sb(void 0);
                        return new Tb(void 0, b, c, a, void 0)
                    },
                    Vb = function(a) {
                        return self.navigator.locks ? self.navigator.locks.request("page_preloader_lock", a) : a()
                    },
                    Zb = async function(a) {
                        async function b(k, l, n, m = "js") {
                            n && (l = m === "js" ? l + `\n//# sourceMappingURL=${n}` : l + `\n/*# sourceMappingURL=${n}*/`);
                            if (n = k.match(/^([0-9a-fA-F]{16,}).*$/))
                                if ([, n] = n, m = (new TextEncoder).encode(l.replace(new RegExp(n, "g"), "")), await Wb(m) !== n) throw Error(`The file named ${k} doesn't match its content hash.`);
                            h.push({
                                fileName: k,
                                content: l
                            })
                        }
                        if (!Wb) {
                            var {
                                rg: c
                            } = await __webpack_require__.me(536633).then(() =>
                                ({
                                    rg: __c.Xb
                                }));
                            Wb = c
                        }
                        if (c = Yb(a)) a = c.we;
                        const d = /(?:\n|^)(?:;\/\/|\/\*) __FILE_CONTENT_FOR__:(.*?)(?: \*\/)?\n/gm;
                        let e, f, g = "";
                        const h = [];
                        for (; e = d.exec(a);) g && await b(g, a.slice(f, e.index), c === null || c === void 0 ? void 0 : c.Dd.shift(), c === null || c === void 0 ? void 0 : c.dd), g = e[1], f = d.lastIndex;
                        g && await b(g, a.slice(f, a.endsWith("\n") ? a.length - 1 : void 0), c === null || c === void 0 ? void 0 : c.Dd.shift(), c === null || c === void 0 ? void 0 : c.dd);
                        return h
                    },
                    Yb = function(a) {
                        var b = a.endsWith("\n") ? a.length - 1 : a.length;
                        const c = a.lastIndexOf("\n",
                            b);
                        if (b = a.slice(c + 1, b).match(/\/(\/|\*)# sourceMappingURL=.*\/chunk-batch-sm\/(.*?)(?: \*\/)?$/)) {
                            var [, d, e] = b;
                            b = d === "/" ? "js" : "css";
                            return {
                                Dd: e.split("+").map(f => f.split("_")[1]),
                                dd: b,
                                we: a.slice(0, c)
                            }
                        }
                    },
                    ac = async function(a, {
                        urls: b,
                        Rf: c
                    }) {
                        const d = [];
                        await Db(a.db, b, (e, f) => {
                            e = e === null || e === void 0 ? void 0 : e.value;
                            e == null && (e = new $b({
                                Cc: [],
                                Ra: !1,
                                Jb: void 0
                            }));
                            e.Ra === !1 && d.push(f);
                            e.Rc.add(c);
                            e.Jb = Date.now();
                            return {
                                value: e
                            }
                        });
                        return {
                            kg: d
                        }
                    },
                    bc = async function(a, b, c) {
                        await a.db.update(b, d => {
                            d = d === null || d ===
                                void 0 ? void 0 : d.value;
                            d == null && (d = new $b({
                                Cc: [],
                                Ra: !1,
                                Jb: Date.now()
                            }));
                            d.Ra = !0;
                            return {
                                value: d
                            }
                        });
                        try {
                            await (await a.oc()).put(b, c)
                        } catch (d) {
                            throw a.db.update(b, e => {
                                e = e === null || e === void 0 ? void 0 : e.value;
                                if (e != null) return e.Ra = !1, {
                                    value: e
                                }
                            }).catch(() => {}), d;
                        }
                    },
                    cc = async function(a, b, c) {
                        if (b.ok) {
                            var d = await b.clone().text(),
                                e = [];
                            try {
                                e = (await a.l.ob("chunk_composing_route.extract_files_from_batch_content", c, async () => a.qe.Oe(d))).map(({
                                    fileName: f,
                                    content: g
                                }) => ({
                                    url: `${a.N}/${f}`,
                                    response: new Response(g, {
                                        headers: b.headers
                                    })
                                }))
                            } catch (f) {
                                a.j.F(f);
                                return
                            }
                            try {
                                await a.l.ob("chunk_composing_route.cache_chunks", c, async () => a.le.ke(e))
                            } catch (f) {
                                a.j.F(f)
                            }
                        }
                    },
                    fc = function({
                        N: a,
                        C: b,
                        I: c,
                        D: d
                    }) {
                        const e = {
                                Oe: Zb
                            },
                            f = Ub(d.j),
                            g = new dc(f, d.l);
                        return {
                            pe: new ec(b, a, c, {
                                ke: async h => {
                                    await Vb(async () => {
                                        const k = new Map(h.map(({
                                                url: n,
                                                response: m
                                            }) => [n, m])),
                                            {
                                                kg: l
                                            } = await ac(g, {
                                                urls: [...k.keys()],
                                                Rf: ""
                                            });
                                        for (const n of l) {
                                            if (!k.has(n)) throw Error(`Response for ${n} not found`);
                                            await bc(g, n, k.get(n))
                                        }
                                    })
                                }
                            }, e, d.j, d.l)
                        }
                    },
                    hc = async function(a,
                        b, c) {
                        c = await a.uf.match(b.request.url, {
                            B: c
                        });
                        return c == null ? null : a.Tb != null && b.request.headers.has("range") ? gc(a.Tb, b.request, c) : c
                    },
                    ic = function({
                        start: a,
                        end: b,
                        ae: c
                    }) {
                        q(a == null || a >= 0, "Range start and end must be within the bounds of the blob");
                        q(b == null || b <= c, "Range start and end must be within the bounds of the blob");
                        if (a != null && b != null) return {
                            start: a,
                            end: b + 1
                        };
                        if (a != null && b == null) return {
                            start: a,
                            end: c
                        };
                        if (a == null && b != null) return {
                            start: c - b,
                            end: c
                        };
                        throw Error(`Invalid range. Start: ${a}, end: ${b}`);
                    },
                    gc = async function(a, b, c) {
                        try {
                            const e = b.headers.get("range");
                            if (e == null) throw Error("Range header is required");
                            const f = await c.blob();
                            var d;
                            const [, g, h] = (d = jc.exec(e)) !== null && d !== void 0 ? d : [];
                            if (g == null && h == null) throw Error(`invalid-range-header: ${e}`);
                            const {
                                start: k,
                                end: l
                            } = {
                                start: g == null ? void 0 : Number(g),
                                end: h == null ? void 0 : Number(h)
                            }, n = ic({
                                start: k,
                                end: l,
                                ae: f.size
                            }), m = f.slice(n.start, n.end), r = m.size, p = new Response(m, {
                                status: 206,
                                headers: c.headers
                            });
                            p.headers.set(...kc);
                            p.headers.set("Content-Length",
                                r.toString());
                            p.headers.set("Content-Range", `bytes ${n.start}-${n.end-1}/${f.size}`);
                            return p
                        } catch (e) {
                            return a.j.F(e), new Response("", {
                                status: 416
                            })
                        }
                    },
                    mc = function({
                        j: a
                    }) {
                        return {
                            Tb: new lc({
                                j: a
                            })
                        }
                    },
                    pc = function({
                        C: a,
                        ma: b,
                        D: {
                            j: c,
                            l: d
                        },
                        I: e
                    }) {
                        d = new nc({
                            cacheName: "media",
                            Oc(f) {
                                const {
                                    origin: g,
                                    pathname: h
                                } = new URL(f);
                                return g + h
                            }
                        }, c, d);
                        ({
                            Tb: b
                        } = b ? mc({
                            j: c
                        }) : {});
                        return {
                            De: new oc(a, d, b, e)
                        }
                    },
                    rc = function({
                        N: a,
                        D: {
                            j: b,
                            l: c
                        },
                        C: d,
                        I: e
                    }) {
                        b = new nc({
                            cacheName: "assets-2"
                        }, b, c);
                        return {
                            Hf: new qc({
                                N: a
                            }, d, e, b)
                        }
                    },
                    tc = function({
                        D: {
                            ub: a
                        }
                    }) {
                        a =
                            Qb(a, "homepage_bootstraps");
                        return new sc({
                            rb: !1
                        }, a)
                    },
                    uc = function({
                        D: {
                            ub: a
                        }
                    }) {
                        a = Qb(a, "editor_page_bootstraps");
                        return new sc({
                            rb: !1
                        }, a)
                    },
                    vc = function({
                        D: {
                            ub: a
                        }
                    }) {
                        a = Ob(a, "offline_fallback_bootstrap", Pb);
                        return new sc({
                            rb: !0
                        }, a)
                    },
                    wc = function({
                        rc: a
                    }) {
                        return {
                            ib: async b => {
                                const c = await a();
                                if (c != null) return tc({
                                    D: {
                                        ub: c
                                    }
                                }).ib(b)
                            }
                        }
                    },
                    xc = function({
                        rc: a
                    }) {
                        return {
                            ib: async b => {
                                const c = await a();
                                if (c != null) return uc({
                                    D: {
                                        ub: c
                                    }
                                }).ib(b)
                            }
                        }
                    },
                    zc = function(a) {
                        q(a.length > 0);
                        q(a.every(b => b.indexOf("?") < 0));
                        return new yc(["",
                            ...a.map(encodeURIComponent)
                        ].join("/"))
                    },
                    Ac = function(a, b) {
                        q(!0);
                        q(!a.Va.has("ui"));
                        if (b != null)
                            if (Array.isArray(b)) {
                                b = b.filter(Pa);
                                if (b.length === 0) return a;
                                q(b.every(c => typeof c === "number" || typeof c === "string"));
                                a.Va.set("ui", b)
                            } else if (typeof b === "boolean") a.Va.set("ui", b || String(b));
                        else if (typeof b === "number" || typeof b === "string") a.Va.set("ui", String(b));
                        else throw Error(`invalid param value type: ${typeof b}`);
                        return a
                    },
                    Bc = function(a) {
                        if (a.Va.size === 0) return a.path;
                        const b = Array.from(a.Va.entries()).map(([c,
                            d
                        ]) => d === !0 ? `${encodeURIComponent(c)}` : Array.isArray(d) ? d.map(e => `${encodeURIComponent(c)}=${encodeURIComponent(e)}`).join("&") : `${encodeURIComponent(c)}=${encodeURIComponent(d)}`).join("&");
                        return `${a.path}?${b}`
                    },
                    Cc = function(a) {
                        a = /design\/(D[a-zA-Z0-9_-]{10})\/?([a-zA-Z0-9_-]+)?/g.exec(a);
                        if (!(a == null || a.length < 2)) {
                            var b = a[2];
                            (new Set(["edit", "remix", "view", "watch"])).has(a[2]) && (b = void 0);
                            return {
                                id: a[1],
                                Ah: b
                            }
                        }
                    },
                    Dc = function({
                        T: a,
                        pf: b
                    }) {
                        const c = b.Kb.app;
                        return (c === "home" ? ["settings", "home"] : [c]).includes(a.app) ?
                            a.locale === b.locale : !1
                    },
                    Ec = function({
                        app: a,
                        commit: b
                    }) {
                        return `${a}-${b}`
                    },
                    Fc = async function(a, b, c, d, e) {
                        b = Ec({
                            app: b,
                            commit: c
                        });
                        let f;
                        try {
                            f = await a.fa.get(b)
                        } catch (g) {
                            if (g instanceof tb) {
                                a.fa.delete(b);
                                return
                            }
                            throw g;
                        }
                        if (a = f != null) a = f, a.variant !== d ? a = !1 : (d = Date.now() / 1E3, a = (e === null || e === void 0 || !e.rb) && a.timestamp + 1209600 < d ? !1 : !0);
                        if (a) return f
                    },
                    Hc = async function(a, b, c) {
                        var d = ha(a.ce.get(b));
                        b = a.If.normalizeUrl({
                            url: c,
                            app: b
                        });
                        d = await d.ib(b);
                        if (d != null && (b = Gc.P(JSON.parse(d.Ba)), a = await Fc(a.qf, d.app,
                                b.commit, b.je, {
                                    rb: c.href === a.options.V
                                }), a != null && Dc({
                                T: d,
                                pf: a
                            }))) return {
                            Ba: b,
                            nb: d,
                            Kb: a.Kb,
                            Jc: a.Jc
                        }
                    },
                    Oc = function({
                        V: a,
                        D: {
                            l: b,
                            j: c
                        }
                    }) {
                        const d = Ub(c);
                        var e = async () => {
                                var h = await Ob(d, "active_user_brand_hint_for_service_worker_to_serve_pages", Ic).get("active");
                                if (h != null) {
                                    const k = new Rb(void 0),
                                        l = new Sb(void 0);
                                    h = new Jc(h, k, l, c, void 0)
                                } else h = void 0;
                                return h
                            },
                            f = wc({
                                rc: e
                            });
                        e = xc({
                            rc: e
                        });
                        var g = vc({
                            D: {
                                ub: d
                            }
                        });
                        f = new Map([
                            ["home", f],
                            ["editor", e],
                            ["offline_fallback", g]
                        ]);
                        e = new Kc;
                        g = Ob(d, "manifests", Lc);
                        return new Mc({
                                V: a
                            },
                            f, e, new Nc(g, b))
                    },
                    Pc = function(a) {
                        let b;
                        try {
                            b = a.crypto.randomUUID()
                        } catch (c) {
                            b = a.crypto.getRandomValues(new Uint8Array(16)).reduce((d, e) => d + String.fromCharCode(e), "")
                        }
                        return btoa(b)
                    },
                    Qc = function(a) {
                        var b;
                        var c = '<!DOCTYPE html>\n<html dir="' + ((b = a.direction) == null ? "" : b) + '" lang="' + ((b = a.locale) == null ? "" : b) + '">\n  <head>\n    <meta http-equiv="Content-type" content="text/html; charset=utf-8"/>\n    <meta name="referrer" content="origin">\n    ';
                        a.viewport && (c += '\n      <meta name="viewport" content="' +
                            ((b = a.viewport) == null ? "" : b) + '">\n    ');
                        c += '\n    <link rel="shortcut icon" href="/favicon.ico">\n    <title>' + ((b = a.title) == null ? "" : b) + '</title>\n    <script nonce="' + ((b = a.nonce) == null ? "" : b) + '">\n      window["bootstrap"] = {\n        "ui": JSON.parse(' + ((b = a.Mc) == null ? "" : b) + '),\n        "base": JSON.parse(' + ((b = a.Ba) == null ? "" : b) + '),\n        "page": JSON.parse(' + ((b = a.nb) == null ? "" : b) + '),\n      };\n      window["flags"] = JSON.parse(' + ((b = a.kc) == null ? "" : b) + ');\n      window["__canva_public_path__"] = "' +
                            ((b = a.Of) == null ? "" : b) + '";\n      window["cmsg"] = {\n        locale: "' + ((b = a.locale) == null ? "" : b) + '",\n        strings: {},\n      };\n    \x3c/script>\n    ';
                        for (const d of a.links) c += '\n      <link href="' + ((b = d.href) == null ? "" : b) + '" rel="' + ((b = d.rel) == null ? "" : b) + '" ' + ((b = d.nonce ? `nonce="${d.nonce}"` : "") == null ? "" : b) + ">\n    ";
                        c += '\n  </head>\n  <body>\n    <div id="root">' + ((b = a.Ac) == null ? "" : b) + "</div>\n    ";
                        for (const d of a.scripts) c += '\n      <script src="' + ((b = d.src) == null ? "" : b) + '" nonce="' +
                            ((b = d.nonce) == null ? "" : b) + '" ' + ((b = d.defer ? "defer" : "") == null ? "" : b) + ">\x3c/script>\n    ";
                        return c + "\n  </body>\n</html>\n"
                    },
                    Rc = function(a, b) {
                        const c = [];
                        var d = a.Zc;
                        d.config.O === 3 && /android/i.test(d.config.userAgent) ? c.push(...b.Ad.Md.Wd.Fa) : (a = a.Zc, a.config.O === 3 && /ipod|iphone|ipad/i.test(a.config.userAgent) && c.push(...b.Ad.Md.jf.Fa));
                        c.push(...b.Tc.Fa);
                        return c
                    },
                    Sc = function(a, b, c, d, e) {
                        const f = b.locale,
                            g = b.direction,
                            h = b.title,
                            k = b.Mc,
                            l = b.Ba,
                            n = b.nb;
                        b = b.kc;
                        const m = c.viewport,
                            r = c.Ac;
                        var p = c.Tc;
                        const w =
                            c.mf.get(f) || {
                                ab: [],
                                Fa: []
                            };
                        p = [...c.links.filter(({
                            rel: v
                        }) => v !== "preload" && v !== "prefetch").map(v => ({
                            href: /^(https?:)?\/\//.test(v.href) ? v.href : `${d}/${v.href}`,
                            rel: v.rel,
                            nonce: e
                        })), ...w.ab.map(v => ({
                            href: `${d}/${v}`,
                            rel: "stylesheet"
                        })), ...p.ab.map(v => ({
                            href: `${d}/${v.filename}`,
                            rel: "stylesheet"
                        }))];
                        a = [...w.Fa.map(v => ({
                            src: `${d}/${v}`,
                            nonce: e
                        })), ...Rc(a, c).map(v => ({
                            src: `${d}/${v.filename}`,
                            nonce: e,
                            defer: !0
                        }))];
                        return Qc({
                            locale: f,
                            direction: g === 1 ? "ltr" : "rtl",
                            title: h,
                            viewport: m,
                            nonce: e,
                            Of: d ? `${d}/` : "",
                            Mc: JSON.stringify(k),
                            Ba: JSON.stringify(l),
                            nb: JSON.stringify(n),
                            kc: JSON.stringify(b || "{}"),
                            links: p,
                            Ac: r !== null && r !== void 0 ? r : "",
                            scripts: a
                        })
                    },
                    Tc = function(a, b) {
                        const c = b.pathname;
                        if (c[0] !== "/") return a.fallback;
                        for (const d of a.rules) {
                            const e = d.match(c);
                            if (e != null) return {
                                page: d.page,
                                jb: f => e.jb(b, f)
                            }
                        }
                        return a.fallback
                    },
                    Uc = async function(a, b, {
                        B: c
                    }) {
                        c = a.l.ua("service_worker.page_assembler.render_page", c);
                        try {
                            const k = Tc(a.Vf, b);
                            let l = await Hc(a.td, k.page, k.jb(0));
                            l == null && (l = await Hc(a.td, "offline_fallback",
                                new URL(a.config.V)));
                            if (l != null) {
                                var d = { ...l.nb
                                };
                                const n = Gc.za({ ...l.Ba,
                                    hd: 2,
                                    timestamp: void 0
                                });
                                var e = JSON.stringify(n);
                                b = { ...d,
                                    Ba: e
                                };
                                var f = Pc(a.zf),
                                    g = Sc(a.Af, b, l.Kb, l.Jc, f),
                                    h = a.ve.createPolicy({
                                        page: k.page,
                                        nonce: f
                                    });
                                return new Response(g, {
                                    headers: {
                                        "content-type": "text/html;charset=utf-8",
                                        "content-security-policy-report-only": h,
                                        "X-Offline-Response": "true"
                                    }
                                })
                            }
                        } catch (k) {
                            c.setStatus("error"), a.j.F(k)
                        } finally {
                            c.end()
                        }
                    },
                    Yc = function({
                        V: a,
                        userAgent: b,
                        O: c,
                        xc: d,
                        D: {
                            j: e,
                            l: f
                        }
                    }) {
                        b = new Vc(new Wc({
                            O: c,
                            userAgent: b
                        }));
                        c = Oc({
                            V: a,
                            D: {
                                l: f,
                                j: e
                            }
                        });
                        return new Xc({
                            V: a
                        }, d, e, c, b, f)
                    },
                    $c = function({
                        V: a,
                        userAgent: b,
                        O: c,
                        C: d,
                        D: {
                            j: e,
                            l: f
                        },
                        xc: g,
                        I: h,
                        ra: k
                    }) {
                        a = Yc({
                            V: a,
                            userAgent: b,
                            O: c,
                            xc: g,
                            D: {
                                j: e,
                                l: f
                            }
                        });
                        return {
                            Jf: new Zc({
                                ra: k
                            }, d, h, a)
                        }
                    },
                    ad = function(a) {
                        a = a.slice(1).split("/");
                        a[a.length - 1] === "" && a.pop();
                        return a
                    },
                    bd = function(a, b, c) {
                        for (const d of b) {
                            b = a.root;
                            for (const e of ad(d)) b.children.has(e) || b.children.set(e, {
                                children: new Map,
                                config: void 0
                            }), b = b.children.get(e);
                            t(b.config == null, "Path already exists");
                            b.config = c
                        }
                    },
                    cd = function(a, b) {
                        q(b.startsWith("/"),
                            "Path must start with a slash");
                        a = a.root;
                        for (const d of ad(b)) {
                            if (d === "") return;
                            var c;
                            b = (c = a.children.get(d)) !== null && c !== void 0 ? c : a.children.get("*");
                            if (b == null) return;
                            a = b
                        }
                        return a.config
                    },
                    gd = function() {
                        const a = new dd;
                        bd(a, ed, {});
                        bd(a, fd, {
                            lf: "/settings"
                        });
                        return {
                            page: "home",
                            match: b => {
                                const c = cd(a, b);
                                if (c != null) return {
                                    jb: (d, e) => {
                                        switch (e) {
                                            case 0:
                                                var f;
                                                d = (f = c.Ih) !== null && f !== void 0 ? f : "/";
                                                return new URL(d, self.location.origin);
                                            case 1:
                                                var g;
                                                f = (g = c.lf) !== null && g !== void 0 ? g : d;
                                                return new URL(f, self.location.origin);
                                            default:
                                                throw new F(e);
                                        }
                                    }
                                }
                            }
                        }
                    },
                    hd = function() {
                        return {
                            page: "editor",
                            match: a => Cc(a) != null ? {
                                jb: b => b
                            } : void 0
                        }
                    },
                    id = function() {
                        return {
                            page: "offline_fallback",
                            jb: () => new URL("/_offline-fallback", self.location.origin)
                        }
                    },
                    kd = function({
                        D: {
                            j: a
                        },
                        C: b,
                        I: c
                    }) {
                        a = new nc({
                            cacheName: "web_workers"
                        }, a);
                        return {
                            pg: new jd(b, c, a)
                        }
                    },
                    pd = function({
                        V: a,
                        N: b,
                        userAgent: c,
                        O: d,
                        C: e,
                        D: {
                            j: f,
                            l: g
                        },
                        cb: h,
                        la: k,
                        ra: l,
                        ma: n
                    }) {
                        k = Mb({
                            la: k,
                            C: e,
                            D: {
                                l: g,
                                j: f
                            }
                        });
                        const m = gd();
                        ({
                            Jf: a
                        } = $c({
                            V: a,
                            userAgent: c,
                            O: d,
                            C: e,
                            D: {
                                j: f,
                                l: g
                            },
                            xc: new ld([m, hd()]),
                            I: k,
                            ra: l
                        }));
                        ({
                            pg: c
                        } = kd({
                            C: e,
                            D: {
                                j: f,
                                l: g
                            },
                            I: k
                        }));
                        ({
                            Hf: d
                        } = rc({
                            N: b,
                            D: {
                                j: f,
                                l: g
                            },
                            C: e,
                            I: k
                        }));
                        ({
                            De: n
                        } = pc({
                            C: e,
                            ma: n,
                            D: {
                                j: f,
                                l: g
                            },
                            I: k
                        }));
                        ({
                            pe: b
                        } = fc({
                            C: e,
                            I: k,
                            N: b,
                            D: {
                                j: f,
                                l: g
                            }
                        }));
                        return {
                            Fc: new md([new nd(k), new od(h), a, c, d, n, b])
                        }
                    },
                    rd = function({
                        kb: a,
                        V: b,
                        N: c,
                        userAgent: d,
                        O: e,
                        C: f,
                        D: {
                            j: g,
                            l: h
                        },
                        cb: k,
                        la: l,
                        ma: n,
                        ra: m,
                        vc: r = fetch
                    }) {
                        ({
                            Fc: b
                        } = pd({
                            V: b,
                            N: c,
                            userAgent: d,
                            O: e,
                            C: f,
                            D: {
                                j: g,
                                l: h
                            },
                            la: l,
                            ma: n,
                            cb: k,
                            ra: m
                        }));
                        a = Wa({
                            D: {
                                j: g
                            },
                            fb: a
                        });
                        c = Za();
                        return new qd(b, f, g, a, {
                                cf: async p => {
                                    if (f.Sa()) return Response.error();
                                    try {
                                        return await r(p, {
                                            redirect: "follow"
                                        })
                                    } catch (w) {
                                        return Response.error()
                                    }
                                }
                            },
                            c)
                    },
                    td = function({
                        serviceWorker: a,
                        D: {
                            j: b,
                            Ja: c,
                            tb: d,
                            xa: e
                        },
                        O: f,
                        C: g,
                        N: h,
                        kb: k,
                        ye: l,
                        ra: n,
                        la: m,
                        ma: r
                    }) {
                        c = c.Qa("service_worker.fetch_interceptor");
                        b = rd({
                            kb: k,
                            V: `${a.location.origin}/_offline-fallback`,
                            N: h,
                            userAgent: self.navigator.userAgent,
                            O: f,
                            C: g,
                            D: {
                                j: b,
                                l: c
                            },
                            cb: {
                                Ve: l
                            },
                            ra: n,
                            la: m,
                            ma: r
                        });
                        const p = new sd(b, d, e, c);
                        a.addEventListener("fetch", w => Na(p, w))
                    },
                    Ad = function(a, b) {
                        const c = a.l.ta("service_worker.handle_message");
                        try {
                            const d = a.l.Ub("process_message", c, e => {
                                try {
                                    const f = ud.P(b.data),
                                        g = f.message,
                                        h = f.requestId;
                                    e.setAttribute("message_type", f.message);
                                    switch (g) {
                                        case "GET_SW_RELEASE":
                                            return new vd({
                                                requestId: h,
                                                release: a.options.release
                                            });
                                        case "OVERRIDE_NETWORK_STRATEGY":
                                            return a.C.Ib = f.Ib, new wd({
                                                requestId: h,
                                                Sa: a.C.Sa()
                                            });
                                        case "SKIP_WAITING":
                                            return a.serviceWorker.skipWaiting(), new xd({
                                                requestId: h
                                            });
                                        default:
                                            throw new F(g);
                                    }
                                } catch (f) {
                                    return e.setStatus("error"), new yd({
                                        Qf: JSON.stringify(b.data)
                                    })
                                }
                            });
                            a.l.Ub("post_response", c, () => {
                                var e;
                                (e = b.source) === null || e === void 0 || e.postMessage(zd.za(d))
                            })
                        } finally {
                            c.end()
                        }
                    },
                    Cd = function({
                        serviceWorker: a,
                        C: b,
                        release: c,
                        D: {
                            Ja: d
                        }
                    }) {
                        d = d.Qa("service_worker.message_handler");
                        const e = new Bd({
                            release: c
                        }, a, b, d);
                        a.addEventListener("message", f => Ad(e, f))
                    },
                    Dd = function(a, b, c, d) {
                        d = [c instanceof Error ? c : null, a.context, d].filter(Pa);
                        Object.keys(a.tags).length > 0 && d.push(a.tags);
                        return [`[ConsoleErrorClient][${a.name}][${b}]: ${c}`, ...d]
                    },
                    Fd = function() {
                        const a = Ed();
                        let b = 0;
                        return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, function(c) {
                            c = Number(c);
                            return (c ^ a[b++] & 15 >> c / 4).toString(16)
                        })
                    },
                    Ed = function() {
                        if (typeof window !== "undefined" && typeof window.crypto !== "undefined" && typeof window.crypto.getRandomValues === "function") return window.crypto.getRandomValues(new Uint8Array(31));
                        const a = Math.random;
                        return Array.from({
                            length: 31
                        }, () => Math.floor(a() * 255))
                    },
                    Gd = function(a) {
                        Object.keys(a).forEach(b => a[b] == null && delete a[b])
                    },
                    Id = function(a) {
                        if (a instanceof Hd) {
                            const b = [];
                            a.values.forEach(c => {
                                b.push(Id(c))
                            });
                            return b
                        }
                        if (a instanceof Jd) {
                            const b = {};
                            a.values.forEach(c => {
                                b[c.name] = Id(c.value)
                            });
                            return b
                        }
                        return a.value
                    },
                    Kd = function(a, b) {
                        let c = b;
                        Object.entries(a.Bd).forEach(([d, e]) => {
                            c = c.split(e).join(d)
                        });
                        return c
                    },
                    Ld = function(a, b = {}) {
                        Object.keys(b).forEach(c => {
                            const d = b[c];
                            typeof d === "string" && (b[c] = Kd(a, d))
                        })
                    },
                    Md = function(a, b) {
                        var c;
                        return { ...b,
                            frames: b === null || b === void 0 ? void 0 : (c = b.frames) === null || c === void 0 ? void 0 : c.map(d => {
                                for (const [e, f] of Object.entries(a.Bd)) {
                                    const g = h => h === null || h === void 0 ? void 0 : h.replace(f, e);
                                    d.module = g(d.module);
                                    d.abs_path = g(d.abs_path);
                                    d.filename = g(d.filename)
                                }
                                return d
                            })
                        }
                    },
                    Nd = function(a,
                        b) {
                        var c, d;
                        b.exception && b.exception.values && (b.exception = { ...b.exception,
                            values: (d = b.exception) === null || d === void 0 ? void 0 : (c = d.values) === null || c === void 0 ? void 0 : c.map(e => ({ ...e,
                                ...(e.stacktrace && {
                                    stacktrace: Md(a, e.stacktrace)
                                })
                            }))
                        })
                    },
                    Od = function(a, b) {
                        var c = b.request;
                        c != null && c.url != null && (c.url = Kd(a, c.url));
                        Nd(a, b);
                        b.tags != null && Ld(a, b.tags)
                    },
                    Pd = function(a, b) {
                        const c = [];
                        b.message && c.push(b.message);
                        if (b.exception) {
                            const {
                                type: d = "",
                                value: e = ""
                            } = b.exception.values && b.exception.values[0] || {};
                            d !== "Error" &&
                                c.push(d, e)
                        }
                        return c.some(d => a.Td.some(e => Object.prototype.toString.call(e) === "[object RegExp]" ? e.test(d) : typeof e === "string" ? d.indexOf(e) !== -1 : !1))
                    },
                    Rd = function(a, b) {
                        var c, d;
                        if ((a === null || a === void 0 ? void 0 : a.message) !== (b === null || b === void 0 ? void 0 : b.message)) return !1;
                        a = (c = a.exception) === null || c === void 0 ? void 0 : c.values;
                        b = (d = b.exception) === null || d === void 0 ? void 0 : d.values;
                        if (a == null || b == null || a.length !== b.length) return !1;
                        for (d = 0; d < a.length; d++)
                            if (a[d].value !== b[d].value || a[d].type !== b[d].type || !Qd(a[d].stacktrace,
                                    b[d].stacktrace)) return !1;
                        return !0
                    },
                    Qd = function(a, b) {
                        a = a === null || a === void 0 ? void 0 : a.frames;
                        b = b === null || b === void 0 ? void 0 : b.frames;
                        if (a == null && b == null) return !0;
                        if (a == null || b == null || a.length !== b.length) return !1;
                        for (let c = 0; c < a.length; c++)
                            if (a[c].filename !== b[c].filename || a[c].colno !== b[c].colno || a[c].lineno !== b[c].lineno) return !1;
                        return !0
                    },
                    Td = function(a, b) {
                        const c = a.history.find(f => Rd(f.event, b));
                        if (c == null) return !1;
                        const d = Sd.now(),
                            e = c.timestamp;
                        return Rd(b, c.event) && d - e < a.hg
                    },
                    Wd = function() {
                        return new Ud({
                            Oh: a =>
                                Vd({
                                    frame: a,
                                    ag: "/dist/renderer/"
                                })
                        })
                    },
                    Vd = function({
                        frame: a,
                        ag: b
                    }) {
                        if (a.filename == null) return a;
                        const c = a.filename.replace(/\\/g, "/").split(b);
                        if (c.length <= 1) return a;
                        a.filename = "app://" + b + c.pop();
                        return a
                    },
                    Yd = function(a, b) {
                        var c;
                        b === null || b === void 0 || (c = b.breadcrumbs) === null || c === void 0 || c.map((d, e) => {
                            if (b === null || b === void 0 ? 0 : b.breadcrumbs) {
                                var f = b.breadcrumbs;
                                if (d.type === "http") {
                                    var g;
                                    d.data = d.data || {};
                                    var h;
                                    d.data.url = Xd(a, (h = (g = d.data) === null || g === void 0 ? void 0 : g.url) !== null && h !== void 0 ? h : "")
                                }
                                f[e] =
                                    d
                            }
                        });
                        b.request && (b.request = a.Hc(b.request));
                        return b
                    },
                    Xd = function(a, b) {
                        try {
                            const c = new URL(b, `${a.location.protocol}//${a.location.host}`);
                            if (!["http:", "https:"].includes(c.protocol)) return "";
                            a.Ud.some(d => c.hostname.includes(d)) && c.pathname.startsWith("/_ajax") || (c.pathname = "");
                            c.search = "";
                            return b.includes(c.host) ? c.toString() : c.pathname || "/"
                        } catch (c) {
                            return ""
                        }
                    },
                    $d = function(a) {
                        const b = [];
                        for (const c of Zd) {
                            const d = c(a);
                            d && b.push(d)
                        }
                        return b
                    },
                    be = function(a) {
                        return (b, c) => {
                            b.request && (b.request = a.Hc(b.request));
                            if (ae(a, b)) return null;
                            if (a.pd) {
                                b.tags == null && (b.tags = {});
                                a: switch (a.pd.status) {
                                    case 2:
                                        var d = "OFFLINE";
                                        break a;
                                    case 1:
                                        d = "ONLINE";
                                        break a;
                                    default:
                                        d = "UNKNOWN"
                                }
                                b.tags.offlineStatus = d
                            }
                            try {
                                Od(a.ze, b)
                            } catch (e) {
                                a.F(e)
                            }
                            return a.$d.reduce((e, f) => f(e, c), b)
                        }
                    },
                    me = function(a, b, c) {
                        var d, e, f, g = (d = a.R) === null || d === void 0 ? void 0 : d.getCurrentHub().getClient();
                        d = g && g.getOptions() || {};
                        var h;
                        g = (h = b.sampleRate) !== null && h !== void 0 ? h : 1;
                        var k;
                        h = [new ce, new de, new ee, new fe(2E3), new ge(g, (k = b.yf) !== null && k !== void 0 ? k : g), new he,
                            new ie, new je(a.allowUrls, location), Wd()
                        ];
                        a.T.flags && a.T.flags.Ie && h.push(new ke(le));
                        a.setTags(a.T.tags);
                        a.setExtras(a.T.extra);
                        if (k = typeof navigator !== "undefined" ? navigator.userAgent : void 0) k = $d(k), a.setTags(k);
                        b = b.Kf;
                        b !== 1 && a.setTag("webx", String(b === 3));
                        a.setTag("iframe", String(typeof window !== "undefined" && window.self !== window.top));
                        c.ud && a.setTag("webview", c.ud);
                        d.beforeSend = be(a);
                        c = { ...d,
                            maxValueLength: 1024,
                            dsn: d.dsn || a.T.dsn,
                            environment: d.environment || a.T.environment,
                            release: d.release || a.T.release,
                            tracesSampleRate: 0,
                            sampleRate: 1,
                            integrations: h,
                            allowUrls: a.allowUrls,
                            autoSessionTracking: !1,
                            ignoreErrors: ["variable: _AutofillCallbackHandler", "_AutofillCallbackHandler is not defined", "Non-Error promise rejection captured with value: Object Not Found Matching Id"]
                        };
                        Gd(c);
                        (e = a.R) === null || e === void 0 || e.init(c);
                        (f = a.R) === null || f === void 0 || f.configureScope(l => {
                            l.setUser({
                                id: Fd()
                            });
                            l.setExtra("isAnonymousUser", !0);
                            l.setTag("initLocation", "error_client")
                        })
                    },
                    ae = function(a, b) {
                        const c = b.exception && b.exception.values &&
                            b.exception.values.length > 0 && b.exception.values[0],
                            d = c && c.stacktrace || void 0,
                            e = d && d.frames && d.frames[0] && d.frames[0].filename,
                            f = b.message || c && c.value || void 0;
                        return a.Re.some(g => g({
                            message: f,
                            filename: e,
                            location,
                            tags: b.tags,
                            event: b
                        }))
                    },
                    ne = function(a, b) {
                        var c, d;
                        b instanceof Error ? (c = a.R) === null || c === void 0 || c.captureException(b) : (d = a.R) === null || d === void 0 || d.captureMessage(b)
                    },
                    oe = function(a, b, c) {
                        if (b == null) return Error((c ? c + " " : "") + "[null error thrown]");
                        if (typeof b === "object") {
                            const e = b instanceof
                            N ? new N(b.message, b.sampleRate) : Error(b.message);
                            b.stack && (e.stack = b.stack);
                            b.cause && (e.cause = b.cause);
                            if (c) {
                                var d;
                                if ((d = b.message) === null || d === void 0 ? 0 : d.startsWith(c)) return a.setTag("prefixCollision", "true"), b;
                                a = c + " " + (e.message || "[no message on error]");
                                try {
                                    e.message = a
                                } catch (f) {
                                    if (f instanceof TypeError) return Error(a);
                                    throw f;
                                }
                            }
                            return e
                        }
                        return b.toString()
                    },
                    pe = function(a, b, c, d) {
                        a.R == null ? (console.error(c), d && console.log("errorParams", d)) : a.R && a.R.withScope(e => {
                            typeof d === "string" && (d = {
                                va: d
                            });
                            c = oe(e, c, typeof d === "string" ? d : d === null || d === void 0 ? void 0 : d.va);
                            d != null && (d.fingerprint && e.setFingerprint(d.fingerprint), d.lg && e.setTag("userFlow", d.lg), d.extra && d.extra.forEach((f, g) => e.setExtra(g, f)), d.tags && d.tags.forEach((f, g) => e.setTag(g, f)));
                            a.Vc.length > 0 && e.setTag("component", a.Vc.join("."));
                            e.setLevel(b);
                            ne(a, c)
                        })
                    },
                    qe = function(a) {
                        return a.ga === "span" && a.attrs.get("is_uop") === !0
                    },
                    se = function(a, b) {
                        re(a, b, () => {
                            const c = a.zb.get(b.context.spanId) || [];
                            for (const d of c) se(a, d)
                        })
                    },
                    re = function(a,
                        b, c) {
                        var d, e = (d = b.attrs.get("parent_relative_start_ms")) !== null && d !== void 0 ? d : b.duration;
                        e = typeof e === "number" ? ` - ${Math.round(e)}ms` : "";
                        var f = (d = b.parentSpanId != null) ? `${b.ga==="event"?"[ChildEvent]":"[ChildSpan]"}: ` : "[OpenTelemetryClient]: ";
                        const g = qe(b) ? "User Operation - " : "";
                        e = `${f}${g}${b.name}${e}`;
                        d && !a.sc.has(b.parentSpanId) ? console.group(e) : console.groupCollapsed(e);
                        console.groupCollapsed("Attributes");
                        d = {
                            name: b.name,
                            Li: `${b.duration}ms`,
                            ...Object.fromEntries(b.attrs.entries())
                        };
                        e = {};
                        for (const h of Object.keys(d)) f = d[h], e[h] = f instanceof Object ? JSON.stringify(f) : f;
                        console.table(e);
                        console.groupEnd();
                        c === null || c === void 0 || c();
                        console.groupEnd();
                        a.sc.add(b.context.spanId)
                    },
                    P = function(a) {
                        return [
                            ["name", a.name],
                            ["status", a.status],
                            ["instrumentationScope", a.U],
                            ["startTime", a.startTime],
                            ["endTime", a.endTime],
                            ["duration", a.duration],
                            ["parentSpanId", a.parentSpanId]
                        ]
                    },
                    te = function(a) {
                        switch (a) {
                            case "unset":
                                return 0;
                            case "ok":
                                return 1;
                            case "error":
                                return 2;
                            default:
                                return 0
                        }
                    },
                    ve = function(a) {
                        const b = [];
                        for (const [c, d] of a.entries()) d != null && b.push({
                            key: c,
                            value: ue(d)
                        });
                        return b
                    },
                    ue = function(a) {
                        const b = typeof a;
                        return b === "string" ? {
                            stringValue: a
                        } : b === "number" ? Number.isInteger(a) ? {
                            intValue: a
                        } : {
                            doubleValue: a
                        } : b === "boolean" ? {
                            boolValue: a
                        } : a instanceof Uint8Array ? {
                            bytesValue: a
                        } : Array.isArray(a) ? {
                            arrayValue: {
                                values: a.map(ue)
                            }
                        } : b === "object" && a != null ? {
                            kvlistValue: {
                                values: Object.entries(a).map(([c, d]) => ({
                                    key: c,
                                    value: ue(d)
                                }))
                            }
                        } : {}
                    },
                    we = function(a) {
                        const b = new Map;
                        for (const c of a) a = b.get(c.U), a || (a = [], b.set(c.U,
                            a)), a.push(c);
                        return b
                    },
                    xe = function(a, b) {
                        b = b(a) / 1E3;
                        a = Math.trunc(b);
                        b = Number((b - a).toFixed(9)) * 1E9;
                        let [c, d] = [a, b];
                        d > 1E9 && (d -= 1E9, c += 1);
                        return c * 1E9 + d
                    },
                    ye = function(a, b) {
                        if (a.length === 0) return {
                            resourceSpans: []
                        };
                        const c = [];
                        a = we(a);
                        for (const [d, e] of a)
                            if (e.length > 0) {
                                a = {
                                    attributes: ve(e[0].da),
                                    droppedAttributesCount: 0
                                };
                                const f = [{
                                    scope: {
                                        name: d
                                    },
                                    spans: e.map(g => {
                                        var h = g.context;
                                        const k = xe(g.startTime, b);
                                        var l;
                                        const n = xe((l = g.endTime) !== null && l !== void 0 ? l : g.startTime, b);
                                        var m = g.attrs;
                                        g.ga === "event" && (l = g.attrs.get("parent_start"),
                                            l != null && typeof l === "number" && (m = new Map([...m.entries(), ["parent_start", xe(l, b)]])));
                                        l = h.traceId;
                                        h = h.spanId;
                                        var r = g.parentSpanId,
                                            p = g.name;
                                        m = ve(m);
                                        var w = {
                                            code: te(g.status)
                                        };
                                        g = g.links;
                                        const v = [];
                                        for (const z of g) v.push({
                                            spanId: z.ig.spanId,
                                            traceId: z.ig.traceId,
                                            droppedAttributesCount: 0
                                        });
                                        return {
                                            traceId: l,
                                            spanId: h,
                                            parentSpanId: r,
                                            name: p,
                                            kind: 3,
                                            startTimeUnixNano: k,
                                            endTimeUnixNano: n,
                                            attributes: m,
                                            droppedAttributesCount: 0,
                                            events: [],
                                            droppedEventsCount: 0,
                                            status: w,
                                            links: v,
                                            droppedLinksCount: 0
                                        }
                                    })
                                }];
                                c.push({
                                    resource: a,
                                    scopeSpans: f
                                })
                            }
                        return {
                            resourceSpans: c
                        }
                    },
                    ze = function(a, b) {
                        a.vd.unshift(b);
                        return a
                    },
                    Be = function(a) {
                        try {
                            a.Ta.process(a.buffer)
                        } catch (b) {
                            a.j.F(b, {
                                va: `Failed to export the span buffer from ${Ae.name}`,
                                extra: new Map([
                                    ["spans", JSON.stringify(a.buffer.map(P), void 0, 2)],
                                    ["maxBatchSize", a.config.Lb],
                                    ["maxBatchingTimeMs", a.config.Mb]
                                ])
                            })
                        }
                        a.buffer = [];
                        a.Xa != null && clearTimeout(a.Xa);
                        a.Xa = void 0
                    },
                    Ce = function(a, b, c, d = !1) {
                        b.aborted || d || !b.wa() || (c.push(b), b.Ma.forEach(e => c.push(e)));
                        for (const e of b.Na) Ce(a, e, c,
                            d || b.aborted);
                        b.B = void 0;
                        b.Na.length = 0
                    },
                    Ge = function({
                        span: a,
                        j: b,
                        aa: c,
                        Og: d = new Map
                    }) {
                        try {
                            var e, f, g, h, k;
                            t(!a.ld(), "Span must be ended to create a PerformanceContext");
                            const l = De(c, "LongTaskService"),
                                n = De(c, "VisibilityService"),
                                m = a.startTime,
                                r = a.endTime;
                            t(r != null, "Span endTime must exist to create a PerformanceContext");
                            const p = new Map([
                                    ["start", Ee(m, m)]
                                ]),
                                w = qe(a) ? (e = a.Y) === null || e === void 0 ? void 0 : e.eb : void 0;
                            for (const {
                                    name: A,
                                    startTime: M
                                } of a.Ma) p.set(A, Ee(m, M));
                            if (w != null)
                                for (const [A, M] of w) p.set(A,
                                    Ee(m, M));
                            for (const [A, M] of d) p.set(A, Ee(m, M));
                            p.set("finish", Ee(m, r));
                            if (l == null || n == null) return {
                                vf: p,
                                ...((g = a.qa) === null || g === void 0 ? void 0 : (f = g.frameRate) === null || f === void 0 ? void 0 : Fe(f))
                            };
                            const v = l.Fh(m, r),
                                z = n.hj(a);
                            return {
                                vf: p,
                                Sh: v.count,
                                Th: v.duration,
                                gj: z,
                                resources: void 0,
                                ...((k = a.qa) === null || k === void 0 ? void 0 : (h = k.frameRate) === null || h === void 0 ? void 0 : Fe(h))
                            }
                        } catch (l) {
                            return c = l instanceof Error ? l.message : "Unknown error creating PerformanceContext", d = c.includes("Invalid metric: adjusted time must not be negative") ?
                                2E-4 : .2, b.Ld(new N(c, d), {
                                    va: "Error creating PerformanceContext",
                                    tags: new Map([
                                        ["span.name", a.name],
                                        ["service.name", String(a.da.get("service.name"))]
                                    ])
                                }), {
                                    Dh: c
                                }
                        }
                    },
                    Ee = function(a, b) {
                        a = b - a;
                        t(a >= 0, "Invalid metric: adjusted time must not be negative");
                        return Math.round(a)
                    },
                    Ie = function(a) {
                        return function() {
                            for (let b = 0; b < a * 2; b++) He[b] = Math.floor(Math.random() * 16) + 48, He[b] >= 58 && (He[b] += 39);
                            return String.fromCharCode.apply(null, He.slice(0, a * 2))
                        }
                    },
                    Je = function(a) {
                        let b, c;
                        a instanceof Map ? b = a : a && (c = a);
                        return {
                            Nb: b,
                            Ob: c
                        }
                    },
                    Ke = function(a) {
                        const {
                            Nb: b,
                            Ob: c
                        } = Je(a);
                        var d;
                        return { ...c,
                            attrs: (d = b !== null && b !== void 0 ? b : c === null || c === void 0 ? void 0 : c.attrs) !== null && d !== void 0 ? d : new Map
                        }
                    },
                    Le = function(a) {
                        for (const c of a.ba.plugins) try {
                            var b;
                            (b = c.di) === null || b === void 0 || b.call(c, a)
                        } catch (d) {
                            a.j.F(d, {
                                va: "Plugin.onSpanEnd error",
                                extra: new Map([
                                    ["plugin", c.name], ...P(a)
                                ])
                            })
                        }
                    },
                    Oe = function(a) {
                        var b;
                        (b = a.Y) === null || b === void 0 || Me(b, a);
                        a.B instanceof Ne && a.B.Y != null && a.B.Y !== a.Y && Me(a.B.Y, a)
                    },
                    Qe = function(a, b, c, d) {
                        const e = a.fc = {
                            Da: a.Da,
                            Ea: a.Ea
                        };
                        try {
                            var f;
                            a.timeout && clearTimeout(a.timeout);
                            let g, h, k;
                            b instanceof Map ? h = b : b != null && (g = b);
                            c instanceof Map ? h = c : c != null && (k = c);
                            d != null && (k = d);
                            a.Za = !1;
                            g != null && a.setStatus(g);
                            h && a.Ha(h);
                            if ((f = a.qa) === null || f === void 0 ? 0 : f.frameRate) {
                                Pe(a.qa.frameRate);
                                const {
                                    mc: l,
                                    ed: n,
                                    frameCount: m
                                } = Fe(a.qa.frameRate);
                                l != null && n != null && m != null && (a.attrs.set("frame_duration_mean", l), a.attrs.set("frame_duration_standard_deviation", n), a.attrs.set("frame_count", m), a.attrs.set("long_frame_duration", l + 2 * n))
                            }
                            a.ended = !0;
                            a.endTime = k !== null && k !== void 0 ? k : a.getCurrentTime();
                            a.duration = a.endTime - a.startTime;
                            Le(a);
                            Oe(a);
                            a.ba.Wa.process([a]);
                            a.mb.forEach(l => l(e));
                            a.Za = !0;
                            return e
                        } catch (g) {
                            return a.j.F(g, {
                                va: "Error ending span",
                                extra: new Map(P(a))
                            }), e
                        }
                    },
                    Te = function({
                        uc: {
                            performance: a,
                            name: b,
                            type: c,
                            attrs: d,
                            startTime: e,
                            timeout: f
                        },
                        l: g,
                        B: h,
                        xe: k,
                        j: l,
                        Cf: n
                    }) {
                        d = d || new Map;
                        c && d.set("uop_attr_type", c);
                        d.set("sample_rate_override", 1);
                        d.set("is_uop", !0);
                        c = h === null || h === void 0 ? void 0 : h.wa();
                        if (h != null && !h.wa()) {
                            const p = h.Yb();
                            p instanceof
                            Re && (h = p.S)
                        }
                        const m = h ? g.ua(b, h, {
                            performance: a,
                            attrs: d,
                            startTime: e,
                            timeout: f
                        }) : g.ta(b, {
                            performance: a,
                            attrs: d,
                            startTime: e,
                            timeout: f
                        });
                        t(m instanceof Ne, "User operations can only be created by SpanImpls");
                        const r = [];
                        k.forEach(p => {
                            try {
                                const w = p.Qg();
                                r.push(w)
                            } catch (w) {
                                l.F(w)
                            }
                        });
                        e = new Map(r.flatMap(p => [...p.entries()]));
                        a = new Re(b, m, e, l, c, (a === null || a === void 0 ? 0 : a.Ui) ? new Map : void 0);
                        m.Y = a;
                        a.La(() => {
                            Se(m, m.attrs.get("uop_attr_type"))
                        });
                        a.Ha(e);
                        a.Ha(d);
                        n === null || n === void 0 || n(m);
                        return a
                    },
                    Ue = function(a) {
                        a =
                            a === null || a === void 0 ? void 0 : a.Yb();
                        return a instanceof Re ? a : void 0
                    },
                    Me = function(a, b) {
                        a.ec.delete(b);
                        if (!a.ended) {
                            if (a.eb && b.ga === "span" && !b.aborted) {
                                a.eb.set(`${b.name}_start`, b.startTime);
                                for (var c of b.Ma) a.eb.set(`${b.name}_${c.name}`, c.startTime);
                                b.endTime != null && a.eb.set(`${b.name}_end`, b.endTime)
                            }
                            c = b.status === "error";
                            b = b.attrs.get("timed_out") === !0;
                            if (a.ec.size === 0 || c || b) {
                                a.ended = !0;
                                const e = Ve(a, a.S);
                                if (e != null) {
                                    b && !a.S.name.endsWith("timed_out") && (a.S.setAttribute("timed_out", !0, !0), a.S.name +=
                                        ".timed_out");
                                    var d = a.hc = a.S.end(c ? "error" : "ok", e.endTime);
                                    a.mb.forEach(f => f(d))
                                } else a.S.abort(), a.lb.forEach(f => f())
                            }
                        }
                    },
                    Ve = function(a, b) {
                        if (!b.aborted) {
                            var c = b.endTime != null ? b : void 0;
                            for (const d of b.Na) b = Ve(a, d), b != null && (c == null || b.endTime > c.endTime) && (c = b);
                            return c
                        }
                    },
                    Se = function(a, b) {
                        if (typeof b === "string") {
                            for (const c of a.Ma) c.setAttribute("uop_attr_type", b, !0);
                            for (const c of a.Na) c.attrs.get("is_uop") !== !0 && (c.setAttribute("uop_attr_type", b, !0), Se(c, b))
                        }
                    },
                    We = function(a) {
                        if (a) {
                            var b = a === null ||
                                a === void 0 ? void 0 : a.Yb();
                            return b instanceof Re ? b.pb : a.wa()
                        }
                    },
                    Fe = function(a) {
                        return {
                            frameCount: a.Ia.count,
                            mc: a.Ia.count > 0 ? a.Ia.tf : void 0,
                            ed: a.Ia.count > 0 ? a.Ia.Mf : void 0
                        }
                    },
                    Pe = function(a) {
                        a.$b && a.Bc.cancelAnimationFrame(a.$b);
                        a.document.removeEventListener("visibilitychange", a.qd);
                        a = Fe(a);
                        var b = Xe;
                        const c = a.frameCount * a.mc,
                            d = a.mc + 2 * a.ed;
                        c > 0 && (b.frameCount += a.frameCount, b.od.add(d, c));
                        for (const e of b.jd) e(a)
                    },
                    Ye = async function(a, b, c, d) {
                        let e, f;
                        typeof d === "function" ? f = d : e = Ke(d);
                        const g = a.ua(b, c, e);
                        return f(g).catch(h => {
                            g.setStatus("error");
                            throw h;
                        }).finally(() => g.end())
                    },
                    De = function(a, b) {
                        try {
                            return a.config.plugins.find(d => d.name === b)
                        } catch (d) {
                            var c;
                            a.j.F(d, {
                                extra: new Map([
                                    ["attrs", Object.fromEntries((c = a.config) === null || c === void 0 ? void 0 : c.da)]
                                ])
                            })
                        }
                    },
                    Ze = function(a) {
                        var b = Date.now(),
                            c = performance.now();
                        Math.abs(a.Nc + (c - a.zc) - b) < a.threshold || (a.Nc = b, a.zc = c)
                    },
                    kf = function({
                        T: a,
                        gb: b,
                        jc: c,
                        userAgent: d,
                        D: {
                            j: e
                        }
                    }) {
                        let f, g = new Map;
                        switch (a.M) {
                            case "NOOP":
                                return new $e;
                            case "CONSOLE":
                                f = new af;
                                break;
                            case "HTTP":
                                var h;
                                f = new bf({
                                    url: a.endpoint,
                                    cc: (h = a.Ne) !== null && h !== void 0 ? h : 1
                                }, e, new cf, df({
                                    url: a.endpoint,
                                    fg: c !== null && c !== void 0 ? c : 3E4,
                                    gb: b !== null && b !== void 0 ? b : .01
                                }));
                                var k, l, n, m;
                                g = new Map([
                                    ["telemetry_version", "v2"],
                                    ["app.component", a.app],
                                    ["service.name", a.app],
                                    ["app.release", (k = a.release) !== null && k !== void 0 ? k : ""],
                                    ["app.source", (l = a.source) !== null && l !== void 0 ? l : "web"],
                                    ["app.flavor", (n = a.Te) !== null && n !== void 0 ? n : ""],
                                    ["app.build.variant", (m = a.variant) !== null && m !== void 0 ? m : "baseline"],
                                    ["session_id", Fd()],
                                    ["x-canva-tenant", "canva-app"],
                                    ["device.platform",
                                        a.platform
                                    ],
                                    ["device.id", a.deviceId]
                                ]);
                                d != null && (g.set("browser.name", d.ge), g.set("browser.version_major", d.ee), g.set("browser.version_minor", d.fe));
                                break;
                            default:
                                throw new F(a);
                        }
                        b = ze(ze(new ef, p => new ff(p)), p => {
                            var w, v;
                            return new Ae(p, {
                                Lb: (w = a.Lb) !== null && w !== void 0 ? w : 20,
                                Mb: (v = a.Mb) !== null && v !== void 0 ? v : 5E3
                            }, e)
                        }).build(f);
                        var r;
                        c = a.M === "HTTP" ? (r = a.jg) !== null && r !== void 0 ? r : .01 : 1;
                        return new gf(new hf({
                            Wa: b,
                            Gc: new jf(c, e),
                            da: g
                        }), e)
                    },
                    Ka = function(a, b) {
                        b.request.mode !== "navigate" && (b = b.clientId, a.Hd.Ec(b),
                            a.Gd.Ec(b))
                    },
                    Ma = function(a, b, c) {
                        if (b.request.mode !== "navigate") throw Error("Navigation event expected");
                        c.then(d => {
                            d.ok && (d = b.resultingClientId, a.Hd.Dc(d), a.Gd.Dc(d))
                        }).catch(() => {})
                    },
                    lf = function(a, b) {
                        const c = a.Oa.get(b);
                        if (c != null) {
                            var d = performance.now() - 5E3,
                                e = c.Fb.filter(f => f >= d);
                            c.Fb = e;
                            e.length >= 3 ? c.Xa = self.setTimeout(() => lf(a, b), 5E3) : (e = Math.max(...e), c.span.end(void 0, void 0, e), a.Oa.delete(b))
                        }
                    },
                    pf = function({
                        Ja: a
                    }) {
                        a = a.Qa("service_worker.network_behavior_tracer");
                        return {
                            xa: new mf(new nf(a),
                                new of (a))
                        }
                    },
                    Ja = function(a) {
                        if (a.$c) return performance.now();
                        a.$c = !0;
                        return a.ac == null || Date.now() - a.ac < 500 ? 0 : performance.now()
                    },
                    sf = function({
                        location: a,
                        T: b,
                        gb: c,
                        jc: d,
                        userAgent: e,
                        D: {
                            j: f
                        }
                    }) {
                        a = a.origin.includes("localhost");
                        if (b == null || a) b = new qf({});
                        b = kf({
                            T: b,
                            gb: c,
                            jc: d,
                            userAgent: e,
                            D: {
                                j: f
                            }
                        });
                        ({
                            xa: c
                        } = pf({
                            Ja: b
                        }));
                        return {
                            Ja: b,
                            tb: new rf,
                            xa: c
                        }
                    },
                    ca = typeof Object.defineProperties == "function" ? Object.defineProperty : function(a, b, c) {
                        if (a == Array.prototype || a == Object.prototype) return a;
                        a[b] = c.value;
                        return a
                    },
                    ba =
                    aa(this);
                da("Object.fromEntries", function(a) {
                    return a ? a : function(b) {
                        var c = {};
                        if (!(Symbol.iterator in b)) throw new TypeError("" + b + " is not iterable");
                        b = b[Symbol.iterator].call(b);
                        for (var d = b.next(); !d.done; d = b.next()) {
                            d = d.value;
                            if (Object(d) !== d) throw new TypeError("iterable for fromEntries should yield objects");
                            c[d[0]] = d[1]
                        }
                        return c
                    }
                });
                var Ud = __webpack_require__(336105).RewriteFrames;
                var de = __webpack_require__(681196).ExtraErrorData;
                var ee = __webpack_require__(802011).Dedupe;
                __webpack_require__.p = self.__canva_public_path__;
                var F = class extends Error {
                    constructor(a) {
                        super(`unhandled case: ${JSON.stringify(a)}`)
                    }
                };
                var tf = class {
                    constructor(a) {
                        this.type = a
                    }
                };
                var uf = class extends tf {
                        required(a, b) {
                            b = b[a];
                            if (b == null || typeof b !== this.type) throw new TypeError(`expected ${this.type} for property "${a}", found: ${JSON.stringify(b)}`);
                            return b
                        }
                        optional(a, b) {
                            b = b[a];
                            if (b != null) {
                                if (typeof b !== this.type) throw new TypeError(`expected optional ${this.type} for property "${a}", found: ${JSON.stringify(b)}`);
                                return b
                            }
                        }
                    },
                    ka = new uf("object");
                var ja = {},
                    ia = {};
                typeof window !== "undefined" && window.location && na();
                var oa = class {
                        get ok() {
                            return !0
                        }
                        map(a) {
                            return new oa(a(this.value))
                        }
                        constructor(a) {
                            this.value = a
                        }
                    },
                    qa = class {
                        get ok() {
                            return !1
                        }
                        map() {
                            return this
                        }
                        constructor(a) {
                            this.error = a
                        }
                    },
                    ta = pa,
                    ua = ra;
                var ya = {
                        A: "string"
                    },
                    vf = {
                        A: "boolean",
                        defaultValue: !1,
                        Se: 1
                    },
                    wf = {
                        A: "number",
                        defaultValue: 0,
                        Se: 8
                    },
                    xf = {
                        A: "number",
                        defaultValue: 0
                    },
                    yf = {
                        A: "number",
                        defaultValue: 0
                    },
                    zf = a => {
                        const {
                            tag: b,
                            G: c,
                            W: d
                        } = u(a);
                        return wa(xf, c, b, d)
                    },
                    Af = a => {
                        const {
                            tag: b,
                            G: c,
                            W: d
                        } = u(a);
                        return wa(yf, c, b, d)
                    },
                    Q = a => {
                        const {
                            tag: b,
                            G: c
                        } = u(a);
                        return xa(wf, c, b)
                    },
                    R = a => {
                        const {
                            tag: b,
                            G: c
                        } = u(a);
                        return xa(xf, c, b)
                    },
                    Bf = a => {
                        const {
                            tag: b,
                            G: c
                        } = u(a);
                        return xa(yf, c, b)
                    },
                    Cf = a => {
                        const {
                            tag: b,
                            G: c
                        } = u(a);
                        return {
                            tag: b,
                            K: 4,
                            G: c,
                            A: xf.A
                        }
                    },
                    S = a => {
                        const {
                            tag: b,
                            G: c,
                            W: d
                        } = u(a);
                        return wa(ya, c, b, d)
                    },
                    T = a => {
                        const {
                            tag: b,
                            G: c
                        } = u(a);
                        return xa(ya, c, b)
                    },
                    Df = a => {
                        const {
                            tag: b,
                            G: c
                        } = u(a);
                        return {
                            tag: b,
                            K: 4,
                            G: c,
                            A: ya.A
                        }
                    },
                    U = a => {
                        const {
                            tag: b,
                            G: c,
                            W: d
                        } = u(a);
                        return wa(vf, c, b, d)
                    },
                    V = a => {
                        const {
                            tag: b,
                            G: c
                        } = u(a);
                        return xa(vf, c, b)
                    },
                    Ef = za(ya),
                    Ff = za("object");
                var Gf = J(() => ({
                    M: x(2, "CONSOLE")
                }));
                var Hf = L(() => [1, 2, 3], 1);
                var If = J(() => ({
                    name: S(1),
                    value: S(2)
                }));
                var Jf = J(() => ({
                    Ie: V(1)
                }));
                var Kf = J(() => ({
                    fh: V(1),
                    ai: R(2),
                    bi: R(3),
                    ci: R(4)
                }));
                var Lf = J(() => ({
                    type: x(1, "STRING"),
                    value: S(1)
                }));
                var Mf = J(() => ({
                    type: x(2, "BOOL"),
                    value: U(1)
                }));
                var Nf = J(() => ({
                    type: x(3, "INT"),
                    value: zf(1)
                }));
                var Of = J(() => {
                    const {
                        tag: a,
                        G: b,
                        W: c
                    } = u(1);
                    return {
                        type: x(4, "DOUBLE"),
                        value: wa(wf, b, a, c)
                    }
                });
                var Hd = J(() => ({
                    type: x(5, "ARRAY"),
                    values: C(1, Pf)
                }));
                var Jd = J(() => ({
                    type: x(6, "KVLIST"),
                    values: C(1, Qf)
                }));
                var Pf = K(() => ({
                    type: [1, Lf, 2, Mf, 3, Nf, 4, Of, 5, Hd, 6, Jd]
                }), () => ({}));
                var Qf = J(() => ({
                    name: S(1),
                    value: y(2, Pf)
                }));
                var Rf = J(() => ({
                    M: x(3, "SENTRY"),
                    dsn: T(28),
                    environment: T(30),
                    release: T(34),
                    sampleRate: Q(29),
                    tracesSampleRate: Q(31),
                    bh: V(32),
                    Kf: E(33, Hf),
                    tags: C(35, If),
                    flags: B(36, Jf),
                    $h: B(37, Kf),
                    extra: C(38, Qf),
                    yf: Q(39)
                }));
                var Sf = K(() => ({
                    M: [2, Gf, 3, Rf]
                }), () => ({}));
                var Tf = () => ({
                    mh: V(5),
                    Mb: R(6),
                    Lb: R(7),
                    Ne: R(8),
                    jh: V(9),
                    Bi: Q(10),
                    jg: Q(11),
                    source: T(13),
                    ha: T(14),
                    ja: T(4),
                    Ff: T(17),
                    deviceId: T(18),
                    zg: T(15),
                    zh: V(16),
                    rh: V(19),
                    ah: V(20),
                    sh: V(21),
                    qh: V(22),
                    wg: Df(23)
                });
                var Uf = J(() => ({ ...Tf(),
                    M: x(1, "HTTP"),
                    app: S(27),
                    endpoint: S(28),
                    release: T(29),
                    Te: T(31),
                    ih: V(32),
                    kh: V(33),
                    platform: T(35),
                    variant: T(36)
                }));
                var Vf = J(() => ({ ...Tf(),
                    M: x(2, "CONSOLE"),
                    app: S(27)
                }));
                var qf = J(() => ({ ...Tf(),
                    M: x(3, "NOOP")
                }));
                var Wf = K(() => ({
                    M: [1, Uf, 2, Vf, 3, qf]
                }), Tf);
                var sd = class {
                    constructor(a, b, c, d) {
                        this.requestHandler = a;
                        this.tb = b;
                        this.xa = c;
                        this.l = d
                    }
                };
                var Ua = class {
                    constructor({
                        fb: a
                    }) {
                        this.fb = a
                    }
                };
                var N = class extends Error {
                        constructor(a, b) {
                            super(a);
                            this.sampleRate = b;
                            this.sampleRate = Qa(b)
                        }
                    },
                    ge = class {
                        setupOnce(a, b) {
                            a((c, d) => {
                                const e = b().getIntegration(ge);
                                if (!e) return c;
                                if (!(Math.random() < Ra(e, d === null || d === void 0 ? void 0 : d.originalException, c.level))) return null;
                                d = {
                                    sampleRate: Ra(this, d === null || d === void 0 ? void 0 : d.originalException)
                                };
                                c.extra = c.extra != null ? { ...c.extra,
                                    ...d
                                } : d;
                                c.tags = c.tags != null ? { ...c.tags,
                                    ...d
                                } : d;
                                return c
                            })
                        }
                        constructor(a, b) {
                            this.Xc = a;
                            this.Wc = b;
                            this.name = ge.id;
                            this.Xc = Qa(a);
                            this.Wc =
                                Qa(b)
                        }
                    };
                ge.id = "Sampling";
                var Va = class {
                    constructor(a) {
                        this.j = a
                    }
                };
                var qd = class {
                    constructor(a, b, c, d, e, f) {
                        this.Fc = a;
                        this.C = b;
                        this.j = c;
                        this.Ke = d;
                        this.xf = e;
                        this.Tf = f
                    }
                };
                var Xa = class {
                        Id(a) {
                            if (a.status !== 401) return a
                        }
                    },
                    Ya = class {
                        Id(a) {
                            return a
                        }
                    };
                var Xf = class {
                        async
                        continue (a) {
                            a = await cb(this, a);
                            if (a != null) return new Xf(a)
                        }
                        async update(a) {
                            a = this.cursor.update(a);
                            return this.J(a)
                        }
                        async delete() {
                            const a = this.cursor.delete();
                            return this.J(a)
                        }
                        constructor(a) {
                            this.cursor = a;
                            this.J = bb
                        }
                    },
                    Yf = class extends Xf {
                        async
                        continue (a) {
                            a = await cb(this, a);
                            if (a != null) return new Yf(a)
                        }
                        get value() {
                            return this.cursor.value
                        }
                        constructor(a) {
                            super(a);
                            this.cursor = a
                        }
                    };
                var Zf = class {
                    async get(a) {
                        a = this.index.get(a);
                        return this.J(a)
                    }
                    async getAll(a, b) {
                        a = this.index.getAll(a, b);
                        return this.J(a)
                    }
                    async getAllKeys(a, b) {
                        a = this.index.getAllKeys(a, b);
                        return this.J(a)
                    }
                    async count(a) {
                        a = this.index.count(a);
                        return this.J(a)
                    }
                    async openCursor(a, b) {
                        a = this.index.openCursor(a, b);
                        a = await this.J(a);
                        return a != null ? new Yf(a) : void 0
                    }
                    async openKeyCursor(a, b) {
                        a = this.index.openKeyCursor(a, b);
                        a = await this.J(a);
                        return a != null ? new Xf(a) : void 0
                    }
                    constructor(a) {
                        this.index = a;
                        this.J = bb
                    }
                };
                var $f = class {
                    index(a) {
                        return new Zf(this.store.index(a))
                    }
                    async put(a, b) {
                        a = this.store.put(a, b);
                        return this.J(a)
                    }
                    async get(a) {
                        a = this.store.get(a);
                        return this.J(a)
                    }
                    async delete(a) {
                        a = this.store.delete(a);
                        return this.J(a)
                    }
                    async clear() {
                        const a = this.store.clear();
                        return this.J(a)
                    }
                    async getAll(a, b) {
                        a = this.store.getAll(a, b);
                        return this.J(a)
                    }
                    async getAllKeys(a, b) {
                        a = this.store.getAllKeys(a, b);
                        return this.J(a)
                    }
                    async count(a) {
                        a = this.store.count(a);
                        return this.J(a)
                    }
                    async openCursor(a, b) {
                        a = this.store.openCursor(a,
                            b);
                        a = await this.J(a);
                        return a != null ? new Yf(a) : void 0
                    }
                    async openKeyCursor(a, b) {
                        a = this.store.openKeyCursor(a, b);
                        a = await this.J(a);
                        return a != null ? new Xf(a) : void 0
                    }
                    createIndex(a, b, c) {
                        return this.store.createIndex(a, b, c)
                    }
                    deleteIndex(a) {
                        return this.store.deleteIndex(a)
                    }
                    constructor(a) {
                        this.store = a;
                        this.J = bb
                    }
                };
                var ag = class {
                        objectStore(a) {
                            a = this.ca.objectStore(a);
                            return new $f(a)
                        }
                        abort() {
                            this.ca.abort()
                        }
                        commit() {
                            this.ca.commit()
                        }
                        get error() {
                            return this.ca.error
                        }
                        constructor(a) {
                            this.ca = a;
                            this.qg = eb(this)
                        }
                    },
                    db = class extends Error {
                        constructor() {
                            super("Transaction was aborted")
                        }
                    };
                var fb = class {
                    transaction(a, b) {
                        return new ag(this.db.transaction(a, b))
                    }
                    createObjectStore(a, b) {
                        return new $f(this.db.createObjectStore(a, b))
                    }
                    get objectStoreNames() {
                        return this.db.objectStoreNames
                    }
                    close() {
                        this.db.close()
                    }
                    addEventListener(a, b, c) {
                        this.db.addEventListener(a, b, c)
                    }
                    removeEventListener(a, b, c) {
                        this.db.removeEventListener(a, b, c)
                    }
                    constructor(a) {
                        this.db = a
                    }
                };
                var hb = class extends Error {
                        constructor(a) {
                            super("Quota exceeded");
                            this.cause = a
                        }
                    },
                    ib, sb = class extends Error {
                        constructor() {
                            super("Consent required")
                        }
                    },
                    kb = class extends N {
                        constructor(a) {
                            super("IndexedDb Database Error", 0);
                            this.cause = a
                        }
                    },
                    lb, ub = class extends Error {
                        constructor() {
                            super("Maximum number of rows exceeded for put request")
                        }
                    },
                    tb = class extends Error {
                        constructor(a) {
                            super("Failed to deserialize stored data");
                            this.cause = a
                        }
                    };
                var nb = class {
                    get kf() {
                        return this.connection != null
                    }
                    transaction(a, b) {
                        if (this.connection == null) throw Error("Attempted to open a transaction on a closed connection");
                        self.clearTimeout(this.Ab);
                        this.Ab = void 0;
                        const c = this.connection;
                        try {
                            this.tc++;
                            const d = c.transaction(a, b),
                                e = d.qg;
                            e.catch(() => this.dispose()).finally(() => {
                                this.tc--;
                                this.tc <= 0 && (this.Ab = self.setTimeout(() => {
                                    this.dispose()
                                }, 2500))
                            });
                            return {
                                transaction: d,
                                Nd: e
                            }
                        } catch (d) {
                            throw this.dispose(), d;
                        }
                    }
                    dispose() {
                        var a;
                        (a = this.connection) === null || a ===
                            void 0 || a.close();
                        this.connection = void 0;
                        self.clearTimeout(this.Ab)
                    }
                    constructor(a) {
                        this.connection = a;
                        this.tc = 0
                    }
                };
                var xb = class {
                    constructor(a, b) {
                        this.ff = a;
                        this.l = b
                    }
                };
                var wb = class {
                    constructor(a, b) {
                        this.fd = a;
                        this.l = b
                    }
                };
                var vb = class {
                    async put(a, b, c) {
                        await Ab(this);
                        const d = Cb(a, this.Wb.za(b));
                        return O(this.oa, {
                            H: this.H,
                            mode: "readwrite",
                            X: async e => {
                                const {
                                    Si: f
                                } = c !== null && c !== void 0 ? c : {};
                                if (f != null) {
                                    q(f > 0);
                                    const [g, h] = await Promise.all([e.get(a).then(k => !!k), e.count()]);
                                    if (h + (g ? 0 : 1) > f) throw new ub;
                                }
                                await e.put(d)
                            },
                            methodName: "put"
                        })
                    }
                    async get(a) {
                        const b = await O(this.oa, {
                            H: this.H,
                            mode: "readonly",
                            X: async c => c.get(a),
                            methodName: "get"
                        });
                        return b != null ? this.P(Bb(b)) : void 0
                    }
                    async delete(a) {
                        return O(this.oa, {
                            H: this.H,
                            mode: "readwrite",
                            X: async b => {
                                Array.isArray(a) ? await Promise.all(a.map(c => b.delete(c))) : await b.delete(a)
                            },
                            methodName: "delete"
                        })
                    }
                    async count() {
                        return O(this.oa, {
                            H: this.H,
                            mode: "readonly",
                            X: async a => a.count(),
                            methodName: "count"
                        })
                    }
                    async update(a, b) {
                        await Ab(this);
                        return O(this.oa, {
                            H: this.H,
                            mode: "readwrite",
                            X: async c => {
                                var d = await c.get(a);
                                d = d ? {
                                    value: this.P(Bb(d))
                                } : void 0;
                                d = b(d);
                                d != null ? await c.put(Cb(a, this.Wb.za(d.value))) : await c.delete(a)
                            },
                            methodName: "update"
                        })
                    }
                    async getAll(a, b) {
                        const c = await O(this.oa, {
                                H: this.H,
                                mode: "readonly",
                                X: async f => {
                                    const g = typeof b === "string" ? f.index(b) : f;
                                    try {
                                        return (await g.getAll(a)).map(h => ta(h))
                                    } catch (h) {
                                        return f = await g.getAllKeys(a), Promise.all(f.map(async k => {
                                            try {
                                                const l = await g.get(k);
                                                return ta(l)
                                            } catch (l) {
                                                return ua({
                                                    key: String(k),
                                                    error: l instanceof Error ? l : Error(String(l))
                                                })
                                            }
                                        }))
                                    }
                                },
                                methodName: "getAll"
                            }),
                            d = [],
                            e = [];
                        for (const f of c)
                            if (f.ok) try {
                                d.push({
                                    key: Eb(f.value),
                                    wd: this.P(Bb(f.value))
                                })
                            } catch (g) {
                                e.push({
                                    key: Eb(f.value),
                                    error: g instanceof Error ? g : Error(String(g))
                                })
                            } else e.push({
                                key: f.error.key,
                                error: f.error.error
                            });
                        return {
                            items: d,
                            errors: e
                        }
                    }
                    async getAllKeys() {
                        return O(this.oa, {
                            H: this.H,
                            mode: "readonly",
                            X: async a => (await a.getAllKeys()).map(b => String(b)) || [],
                            methodName: "getAllKeys"
                        })
                    }
                    async clear() {
                        return O(this.oa, {
                            H: this.H,
                            mode: "readwrite",
                            X: async a => a.clear(),
                            methodName: "clear"
                        })
                    }
                    close() {}
                    P(a) {
                        try {
                            return this.Wb.P(a)
                        } catch (b) {
                            throw new tb(b instanceof Error ? b : Error(String(b)));
                        }
                    }
                    constructor(a, b, c, d) {
                        this.H = a;
                        this.Wb = b;
                        this.oa = c;
                        this.Cb = d
                    }
                };
                var Kb = class {
                    async fetch(a, {
                        B: b
                    }) {
                        return this.l.ob("fetch_from_network", b, async () => {
                            if (this.C.Sa()) throw Error("Is force offline");
                            if (a.request.mode === "navigate") {
                                var c = await a.preloadResponse;
                                if (c != null && c.status !== 401) return c;
                                if (this.zd != null) return c = await Hb(this.zd, a.request), this.vc(c)
                            }
                            return this.vc(a.request, {
                                redirect: "follow"
                            })
                        })
                    }
                    constructor(a, b, c, d) {
                        this.C = a;
                        this.zd = b;
                        this.l = c;
                        this.vc = d
                    }
                };
                var Lb = class {
                    constructor(a) {
                        this.options = {
                            $f: self.navigator.userAgent,
                            targetOrigin: self.location.origin
                        };
                        this.Lf = a
                    }
                };
                var bg = L(() => [1, 2, 3, {
                    Ya: !0
                }]);
                var cg = J(() => ({
                    status: D(1, bg)
                }));
                var Sb = class {
                    async qc(a) {
                        a = await this.fa.get(a);
                        return a === null || a === void 0 ? void 0 : a.status
                    }
                    constructor(a, b = {
                        Ga: (...c) => zb(...c)
                    }) {
                        this.fa = b.Ga("private_data_persist_consent", cg, void 0, [], a)
                    }
                };
                var dg = J(() => ({
                    ha: S(1),
                    ja: S(2)
                }));
                var Rb = class {
                    async put(a, {
                        ha: b,
                        ja: c
                    }) {
                        await this.fa.put(a, new dg({
                            ha: b,
                            ja: c
                        }))
                    }
                    async getAll() {
                        const {
                            items: a,
                            errors: b
                        } = await this.fa.getAll();
                        if (b.length > 0) throw b[0].error;
                        return a.map(c => ({
                            yi: c.key,
                            wd: c.wd
                        }))
                    }
                    async delete(a) {
                        await this.fa.delete(a)
                    }
                    constructor(a, b = {
                        Ga: (...c) => zb(...c)
                    }) {
                        this.fa = b.Ga("storage_layer_name", dg, void 0, [], a)
                    }
                };
                var eg = {
                        editor_page_bootstraps: !0,
                        homepage_bootstraps: !1,
                        lesson_config: !1,
                        offline_designs: !0,
                        offline_document_response: !0,
                        document_resources: !0
                    },
                    fg = {
                        editor_page_bootstraps: [],
                        homepage_bootstraps: [],
                        lesson_config: [],
                        offline_designs: [],
                        offline_document_response: [],
                        document_resources: [{
                            name: "documents",
                            Hb: "E",
                            multiEntry: !0
                        }],
                        storage_layer_name: [],
                        private_data_persist_consent: [],
                        active_user_brand_hint_for_service_worker_to_serve_pages: [],
                        offline_fallback_bootstrap: [],
                        config: [],
                        asset_metadata: [],
                        manifests: [],
                        leadership_lock: [],
                        index_example: [{
                            name: "indexName",
                            Hb: "values",
                            multiEntry: !0
                        }],
                        design_asset_references: [{
                            name: "referrer_ids_idx",
                            Hb: "A",
                            multiEntry: !0
                        }],
                        page_asset_references: [{
                            name: "referrer_ids_idx",
                            Hb: "A",
                            multiEntry: !0
                        }]
                    };
                var Tb = class {
                    constructor(a, b, c, d, e, f = {
                        Ga: (...k) => zb(...k)
                    }, g = eg, h = fg) {
                        this.Pc = a;
                        this.Sf = b;
                        this.Cb = c;
                        this.j = d;
                        this.l = e;
                        this.nd = f;
                        this.te = g;
                        this.gd = h
                    }
                };
                var Jc = class extends Tb {
                    constructor(a, b, c, d, e, f = {
                        Ga: (...k) => zb(...k)
                    }, g = eg, h = fg) {
                        super(a, b, c, d, e, f, g, h);
                        this.Pc = a
                    }
                };
                var Wb;
                var $b = class {
                    get Cc() {
                        return [...this.Rc]
                    }
                    constructor({
                        Cc: a,
                        Ra: b,
                        Jb: c
                    }) {
                        this.Rc = new Set(a.filter(d => !!d));
                        this.Jb = c || void 0;
                        this.Ra = b
                    }
                };
                var dc = class {
                        async oc() {
                            this.ka == null && (this.ka = self.caches.open(this.cacheName), self.setTimeout(() => {
                                this.ka = void 0
                            }, 5E3));
                            return this.ka
                        }
                        constructor(a, b) {
                            this.l = b;
                            this.options = void 0;
                            this.cacheName = gg[1];
                            this.db = Ob(a, hg[1], $b)
                        }
                    },
                    hg = {
                        [0]: "design_asset_references",
                        [1]: "page_asset_references"
                    },
                    gg = {
                        [0]: "media",
                        [1]: "assets-2"
                    };
                var ec = class {
                    Ca({
                        url: a
                    }) {
                        return this.C.options.ne !== 1 ? a.hostname.startsWith("chunk-composing.") && a.searchParams.get("preserve-source-map-comments") !== "true" : !1
                    }
                    async handle(a, b) {
                        return this.I.fetch(a, {
                            B: b
                        }).then(c => {
                            a.waitUntil(cc(this, c, b));
                            return c
                        })
                    }
                    constructor(a, b, c, d, e, f, g) {
                        this.C = a;
                        this.N = b;
                        this.I = c;
                        this.le = d;
                        this.qe = e;
                        this.j = f;
                        this.l = g;
                        this.name = "chunk-composing"
                    }
                };
                var od = class {
                    Ca(a) {
                        return a.url.pathname === "/__sw_debug_info"
                    }
                    async handle() {
                        return new Response(this.cb.Ve(), {
                            headers: {
                                "content-type": "text/plain"
                            }
                        })
                    }
                    constructor(a) {
                        this.cb = a;
                        this.name = "debug_info"
                    }
                };
                var ig = /[^a-zA-Z0-9]/g,
                    nc = class {
                        async match(a, {
                            B: b
                        } = {}) {
                            const c = async d => {
                                try {
                                    const e = await (await this.oc()).match(this.Oc(a));
                                    d === null || d === void 0 || d.Aa(`${this.Uc}.match.${e!=null?"cache_hit":"cache_miss"}`);
                                    d === null || d === void 0 || d.setAttribute("cache_hit", e != null);
                                    return e
                                } catch (e) {
                                    this.ka = null, d === null || d === void 0 || d.setStatus("error"), this.j.error(new N(e instanceof Error ? e.message : String(e), .01))
                                }
                            };
                            return this.l != null && b != null ? this.l.ob(`${this.Uc}.match`, b, c) : c()
                        }
                        async oc() {
                            this.ka == null &&
                                (this.ka = caches.open(this.cacheName), setTimeout(() => {
                                    this.ka = null
                                }, 1E3));
                            return this.ka
                        }
                        constructor({
                            cacheName: a,
                            Oc: b = e => e
                        }, c, d) {
                            this.j = c;
                            this.l = d;
                            this.ka = null;
                            this.cacheName = a;
                            this.Uc = `browser_cache_storage.${a.replace(ig,"_")}`;
                            this.Oc = b
                        }
                    };
                var jg = new Set("audio-private audio-public audio-upload blobs document-export font-private font-public media media-private media-public media-transformation mockup-assets print-product-assets template upload video-placeholders video-private-assets video-public video-upload".split(" ")),
                    oc = class {
                        Ca({
                            url: a
                        }) {
                            if (this.C.options.Yc === 1) return !1;
                            if (a.hostname === "localhost" && !/\.js$|\.css$/.test(a.pathname)) return !0;
                            [a] = a.hostname.split(".");
                            return jg.has(a)
                        }
                        async handle(a, b) {
                            if (this.C.options.Yc === 2) try {
                                return await this.I.fetch(a, {
                                    B: b
                                })
                            } catch (d) {
                                a = await hc(this, a, b);
                                if (a != null) return a;
                                throw d;
                            }
                            const c = await hc(this, a, b);
                            return c !== null && c !== void 0 ? c : this.I.fetch(a, {
                                B: b
                            })
                        }
                        constructor(a, b, c, d) {
                            this.C = a;
                            this.uf = b;
                            this.Tb = c;
                            this.I = d;
                            this.name = "design_asset"
                        }
                    };
                var jc = /^bytes=(\d+)?-(\d+)?$/;
                var kc = ["X-Shaka-From-Cache", "true"],
                    lc = class {
                        constructor({
                            j: a
                        }) {
                            this.j = a
                        }
                    };
                var qc = class {
                    Ca({
                        url: a
                    }) {
                        return this.C.options.sd !== 1 ? a.hostname === "localhost" && /\.js$|\.css$/.test(a.pathname) && !a.pathname.includes("_web_worker") ? !0 : a.href.startsWith(this.options.N) : !1
                    }
                    async handle(a, b) {
                        if (this.C.options.sd === 2) try {
                            return await this.I.fetch(a, {
                                B: b
                            })
                        } catch (d) {
                            a = await this.Sc.match(a.request.url, {
                                B: b
                            });
                            if (a != null) return a;
                            throw d;
                        }
                        const c = await this.Sc.match(a.request.url, {
                            B: b
                        });
                        return c != null ? c : this.I.fetch(a, {
                            B: b
                        })
                    }
                    constructor(a, b, c, d) {
                        this.options = a;
                        this.C = b;
                        this.I = c;
                        this.Sc =
                            d;
                        this.name = "page_asset"
                    }
                };
                var kg = L(() => [1, 2], 1);
                var Pb = J(() => ({
                    app: S(1),
                    url: S(2),
                    title: S(3),
                    locale: S(4),
                    direction: D(5, kg),
                    timestamp: Af(7),
                    Ba: S(8),
                    Mc: S(9),
                    nb: S(10),
                    kc: T(11),
                    ni: Ef(12)
                }));
                var sc = class {
                    async ib(a) {
                        a = await this.fa.get(a.key);
                        const b = Date.now() / 1E3;
                        if (this.options.rb || a && a.timestamp + 1209600 > b) return a
                    }
                    constructor(a, b) {
                        this.options = a;
                        this.fa = b
                    }
                };
                var yc = class {
                    constructor(a) {
                        this.path = a;
                        this.Va = new Map
                    }
                };
                var Kc = class {
                    normalizeUrl({
                        url: a,
                        app: b
                    }) {
                        switch (b) {
                            case "home":
                            case "offline_fallback":
                                return {
                                    key: a.href
                                };
                            case "editor":
                                b = ha(Cc(a.href), `Attempted to load editor bootstrap with invalid url ${a}`);
                                a = location.origin;
                                b = {
                                    id: b.id
                                };
                                var c = zc(["design", b.id]);
                                b = Bc(Ac(c, b.Wi));
                                return {
                                    key: a + b
                                };
                            default:
                                throw new F(b);
                        }
                    }
                };
                var W = J(() => ({
                    filename: S(1),
                    Nh: V(4),
                    locale: T(5),
                    Ed: T(6)
                }));
                var lg = J(() => ({
                    ab: C(1, W),
                    Fa: C(2, W)
                }));
                var mg = J(() => ({
                    jf: y(1, lg),
                    Wd: y(2, lg)
                }));
                var ng = J(() => ({
                    Md: y(1, mg)
                }));
                var og = J(() => ({
                    Oi: S(1)
                }));
                var pg = J(() => ({
                    Xi: Bf(1)
                }));
                var qg = J(() => ({
                    ab: Df(1),
                    Fa: Df(2),
                    Mi: Ef(3)
                }));
                var rg = J(() => ({
                    rel: S(1),
                    href: S(2),
                    Ed: T(6)
                }));
                var sg = J(() => ({
                    ab: C(1, W),
                    Fa: C(2, W)
                }));
                var tg = J(() => ({
                    id: S(1),
                    Ng: C(2, W),
                    Ph: C(3, W),
                    Ge: C(4, W),
                    Rh: Ff(5, sg),
                    Uh: y(6, sg),
                    Ei: y(7, sg),
                    Ni: Df(8),
                    Qh: zf(9),
                    Ai: V(10)
                }));
                var ug = J(() => ({
                    app: S(1),
                    Tc: y(9, lg),
                    Ad: y(8, ng),
                    Ge: C(10, W),
                    zi: C(13, W),
                    fonts: B(14, og),
                    build: y(3, pg),
                    mf: Ff(4, qg),
                    Ac: T(6),
                    li: T(15),
                    mi: T(16),
                    viewport: T(7),
                    links: C(11, rg),
                    th: T(18),
                    Fg: Ff(17, tg),
                    pj: Ff(25, tg)
                }));
                var Lc = J(() => ({
                    Kb: y(1, ug),
                    commit: S(5),
                    variant: T(4),
                    timestamp: Af(2),
                    locale: S(3),
                    direction: D(6, kg),
                    Jc: S(7)
                }));
                var Nc = class {
                    constructor(a, b) {
                        this.fa = a;
                        this.l = b
                    }
                };
                var Ic = J(() => ({
                    ha: S(1),
                    ja: S(2)
                }));
                var vg = L(() => [0, "CLIENT_FULL", 1, "CLIENT_HYDRATE", 2, "SERVER_FULL"]);
                var wg = L(() => [1, 3, 2], 1);
                var xg = J(() => ({
                    action: x(1, "REGISTER"),
                    Fi: S(1),
                    scope: S(2)
                }));
                var yg = J(() => ({
                    action: x(2, "UNREGISTER")
                }));
                var zg = J(() => ({
                    action: x(3, "UPDATE")
                }));
                var Ag = J(() => ({
                    action: x(4, "RETAIN")
                }));
                var Bg = K(() => ({
                    action: [1, xg, 2, yg, 3, zg, 4, Ag]
                }), () => ({}));
                var Cg = J(() => ({
                    rj: S(1),
                    qj: R(2)
                }));
                var Dg = L(() => [1, 2]);
                var Eg = L(() => [1, 2, 3, 4]);
                var Fg = J(() => ({
                    category: D(1, Eg),
                    name: S(2)
                }));
                var Gg = J(() => ({
                    vg: U(15),
                    Ki: U(12),
                    $i: U(13),
                    Eg: U(1),
                    Xg: U(2),
                    $g: U(7),
                    eh: U(14),
                    Jg: S(3),
                    Vh: S(9),
                    oi: S(10),
                    wi: C(5, Fg),
                    ii: T(6),
                    Kh: Cf(16),
                    Ig: Cf(17),
                    Wg: V(18),
                    Eh: V(19),
                    oh: V(20),
                    ph: V(21),
                    Hg: Bf(22)
                }));
                var Hg = J(() => ({
                    traceId: S(1),
                    spanId: S(2),
                    Kc: zf(3)
                }));
                var Ig = J(() => ({
                    href: S(1),
                    Ed: T(3)
                }));
                var Jg = () => ({
                    Ci: U(12),
                    gh: U(14),
                    commit: S(5),
                    timestamp: Bf(11),
                    j: y(6, Sf),
                    xi: D(7, vg),
                    O: D(9, wg),
                    Ii: B(15, Bg),
                    oj: B(4, Cg),
                    ei: T(13),
                    hd: E(17, Dg),
                    Vi: B(18, Gg),
                    Fd: B(20, Wf),
                    hi: B(24, Hg),
                    ki: C(21, Ig),
                    aj: Df(22),
                    je: T(34)
                });
                var Kg = J(() => ({
                    Ti: S(1),
                    yh: Af(2)
                }));
                var Lg = J(() => ({
                    Vd: T(1),
                    Ag: T(9),
                    Yd: T(2),
                    Zd: T(3),
                    Sd: T(14),
                    mg: T(12),
                    de: T(4),
                    nf: T(10),
                    app: T(11),
                    he: T(5),
                    ie: T(6),
                    Hi: T(7),
                    Mg: Ff(8, Kg)
                }));
                var Mg = J(() => ({
                    Vd: T(1),
                    Yd: T(2),
                    Zd: T(3),
                    Sd: T(10),
                    mg: T(9),
                    de: T(4),
                    nf: T(5),
                    app: T(6),
                    he: T(7),
                    ie: T(8)
                }));
                var Ng = J(() => ({
                    url: S(1),
                    context: B(2, Mg),
                    Wh: R(3)
                }));
                var Og = J(() => ({
                    Me: S(27)
                }));
                var Pg = J(() => ({
                    Me: S(27),
                    Kg: T(28),
                    locale: S(29),
                    Gg: R(30),
                    ja: T(31),
                    Ff: T(37),
                    ha: T(34),
                    wh: T(32),
                    Bh: T(33),
                    deviceId: T(35)
                }));
                var Qg = () => ({
                    dj: B(3, Og),
                    uh: y(4, Pg),
                    xh: Ef(5),
                    appName: T(9),
                    Lh: Cf(16),
                    Ri: Cf(17),
                    Zg: U(18),
                    Ug: V(19)
                });
                var Rg = J(() => ({ ...Qg(),
                    M: x(2, "CONSOLE")
                }));
                var Sg = J(() => ({ ...Qg(),
                    M: x(8, "NOOP")
                }));
                var Tg = J(() => ({
                    containerId: S(1)
                }));
                var Ug = J(() => ({
                    tg: S(1),
                    projectId: S(2)
                }));
                var Vg = J(() => ({
                    Xd: S(1)
                }));
                var Wg = J(() => ({}));
                var Xg = J(() => ({
                    Hh: B(2, Tg),
                    fi: B(4, Ug),
                    Bg: B(6, Vg),
                    Gh: B(7, Wg)
                }));
                var Yg = J(() => ({ ...Qg(),
                    M: x(14, "PRODUCT_ANALYTICS"),
                    plugins: B(32, Xg),
                    mj: R(36),
                    nh: U(37),
                    nj: U(40),
                    dh: U(45),
                    Yg: U(47)
                }));
                var Zg = K(() => ({
                    M: [2, Rg, 8, Sg, 14, Yg]
                }), Qg);
                var $g = J(() => ({
                    M: x(1, "NONE")
                }));
                var ah = J(() => ({
                    M: x(2, "FULLSTORY"),
                    gi: S(28)
                }));
                var bh = K(() => ({
                    M: [1, $g, 2, ah]
                }), () => ({}));
                var X = L(() => [1, 2, 3, 4]);
                var ch = J(() => ({
                    Sg: E(1, X),
                    si: E(2, X),
                    Yh: E(4, X),
                    Xh: E(8, X),
                    cj: E(5, X),
                    Di: E(6, X),
                    Rg: E(7, X),
                    Pg: E(10, X),
                    Ji: E(9, X),
                    ej: E(11, X),
                    Tg: E(12, X),
                    Dg: E(13, X),
                    Lg: E(14, X),
                    ug: E(15, X)
                }));
                var dh = J(() => ({
                    ji: y(1, ch),
                    ri: U(2)
                }));
                var eh = J(() => ({
                    ha: T(1),
                    Xd: S(2),
                    Zi: U(3),
                    bj: B(4, dh)
                }));
                var fh = J(() => ({
                    url: S(1),
                    yg: T(2),
                    Yi: U(3),
                    ij: T(4)
                }));
                var gh = J(() => ({ ...Jg(),
                    mode: x(2, "REAL"),
                    Jh: y(27, Lg),
                    kj: y(30, Ng),
                    xg: y(28, Zg),
                    Mh: B(29, bh),
                    Cg: B(32, eh),
                    Gi: B(31, fh)
                }));
                var hh = J(() => ({ ...Jg(),
                    mode: x(3, "FAKE"),
                    Pi: zf(27),
                    hostname: T(28),
                    jj: R(29)
                }));
                var Gc = K(() => ({
                    mode: [2, gh, 3, hh]
                }), Jg);
                var Mc = class {
                    constructor(a, b, c, d) {
                        this.options = a;
                        this.ce = b;
                        this.If = c;
                        this.qf = d
                    }
                };
                var ih = ["iOi0iWfdfKTOZE7Vp8+d8Cvsk9vE8DL4J4a5fgzlsUk="],
                    jh = class {
                        createPolicy({
                            page: a,
                            nonce: b
                        }) {
                            return [
                                ["frame-ancestors", "'none'"],
                                ["base-uri", "'self'"],
                                ["object-src", "'none'"],
                                ["script-src", `'report-sample' 'strict-dynamic' 'unsafe-eval' 'nonce-${b}' ${ih.map(c=>`'sha256-${c}'`).join(" ")}`],
                                ["report-uri", `https://csp.canva.com/_cspreport?app=sw_${a}&ro=true`]
                            ].map(([c, d]) => `${c} ${d}`).join("; ")
                        }
                    };
                var Wc = class {
                    constructor(a) {
                        this.config = a
                    }
                };
                var kh = class {
                    constructor() {
                        this.crypto = self.crypto
                    }
                };
                var Vc = class {
                    constructor(a) {
                        this.Zc = a
                    }
                };
                var ld = class {
                    constructor(a) {
                        var b = id();
                        this.rules = a;
                        this.fallback = b
                    }
                };
                var Xc = class {
                    constructor(a, b, c, d, e, f) {
                        var g = new kh,
                            h = new jh;
                        this.config = a;
                        this.Vf = b;
                        this.j = c;
                        this.td = d;
                        this.Af = e;
                        this.zf = g;
                        this.ve = h;
                        this.l = f
                    }
                };
                var Zc = class {
                    Ca({
                        request: a
                    }) {
                        return this.C.options.Qb !== 1 ? a.mode === "navigate" : !1
                    }
                    async handle(a, b) {
                        let c;
                        try {
                            if (c = await this.I.fetch(a, {
                                    B: b
                                }), (c === null || c === void 0 ? void 0 : c.status) !== 0 || (c === null || c === void 0 ? 0 : c.type.includes("opaque"))) return c
                        } catch (e) {}
                        var d = this.C;
                        return d.options.Qb !== 5 && d.options.Qb !== 1 && (d = this.options.ra, a = Uc(this.Gf, new URL(a.request.url), {
                            B: b
                        }), a = d != null && d > 500 ? await Promise.race([a, $a(d)]) : await a, a === null || a === void 0 ? 0 : a.ok) ? a : c !== null && c !== void 0 ? c : Response.error()
                    }
                    constructor(a,
                        b, c, d) {
                        this.options = a;
                        this.C = b;
                        this.I = c;
                        this.Gf = d;
                        this.name = "page"
                    }
                };
                var dd = class {
                    constructor() {
                        this.root = {
                            children: new Map,
                            config: void 0
                        }
                    }
                };
                var ed = "/ /folder /folder/* /folder/*/designs /folder/*/designs/* /folder/*/images /folder/*/images/* /folder/*/videos /folder/*/videos/* /folder/*/templates /folder/*/templates/* /your-projects /your-projects/videos /your-projects/videos/* /projects /projects/videos /projects/videos/* /library/* /library/*/videos /library/*/videos/* /dream-lab /assistant /assistant/* /ai /ai/* /ai/code /ai/code/* /s/designs /s/templates /offline-designs /shared-with-you /rewards /planner /design-reviews /classwork /menu /creators/apply /creators/template /creators/template/dashboard /creators/template/inspiration /creators/element /creators/my-items /creators/resources /creators/resources/videos /creators/resources/videos/* /creators/verify/* /creators/inspiration /creators/inspiration/campaigns/* /creators/welcome /creator-hub /contributors/upload /earnings /teams /teams/apps /teams/brand-control /teams/create /teams/designs /teams/folders /teams/groups /teams/groups/* /teams/layouts /teams/members /teams/settings /teams/timeline /groups/* /groups/*/designs /groups/*/folders /groups/*/members /pro-features /mockups /mockups/collection/* /mockups/mockup/* /smartmockups /smartmockups/collection/* /smartmockups/mockup/* /starred /team-stream /design-stream /trash /_design-spec-selector /your-apps /your-apps/* /portfolio /brand /brand/* /brand/brand-templates /brand/brand-templates/* /search/templates /search/designs /search /templates".split(" "),
                    fd = ["/settings", "/settings/*"];
                var nd = class {
                    Ca({
                        url: a
                    }) {
                        return a.pathname === "/popout"
                    }
                    async handle(a, b) {
                        try {
                            return await this.I.fetch(a, {
                                B: b
                            })
                        } catch (c) {
                            return new Response(null, {
                                headers: {
                                    "content-type": "text/plain",
                                    "content-security-policy": "frame-ancestors 'self'; base-uri 'self'; object-src 'none'; script-src 'none'; report-uri https://csp.canva.com/_cspreport?app=popout;"
                                }
                            })
                        }
                    }
                    constructor(a) {
                        this.I = a;
                        this.name = "popout"
                    }
                };
                var lh = ["/_ajax/", "/local-intercept/", "/_online"],
                    mh = new Set(["GET"]),
                    md = class {
                        resolve(a) {
                            if (mh.has(a.method)) {
                                var b = new URL(a.url);
                                if (!lh.some(c => b.pathname.startsWith(c)) && (b.hostname !== "localhost" || b.origin === this.options.Zf)) return this.Uf.find(c => c.Ca({
                                    request: a,
                                    url: b
                                }))
                            }
                        }
                        constructor(a) {
                            this.options = {
                                Zf: self.location.origin
                            };
                            this.Uf = a
                        }
                    };
                var jd = class {
                    Ca({
                        url: a
                    }) {
                        return this.C.options.og !== 1 ? a.pathname.startsWith("/_web_worker/") : !1
                    }
                    async handle(a, b) {
                        try {
                            return await this.I.fetch(a, {
                                B: b
                            })
                        } catch (c) {
                            a = await this.ng.match(a.request.url, {
                                B: b
                            });
                            if (a != null) return a;
                            throw c;
                        }
                    }
                    constructor(a, b, c) {
                        this.C = a;
                        this.I = b;
                        this.ng = c;
                        this.name = "web_worker"
                    }
                };
                var nh = () => ({
                    requestId: S(1)
                });
                var oh = J(() => ({ ...nh(),
                    message: x(2, "OVERRIDE_NETWORK_STRATEGY"),
                    Ib: U(2)
                }));
                var ph = J(() => ({ ...nh(),
                    message: x(3, "GET_SW_RELEASE")
                }));
                var qh = J(() => ({ ...nh(),
                    message: x(4, "SKIP_WAITING")
                }));
                var ud = K(() => ({
                    message: [2, oh, 3, ph, 4, qh]
                }), nh);
                var vd = J(() => ({
                    message: x(3, "GET_SW_RELEASE"),
                    requestId: S(1),
                    release: S(2)
                }));
                var wd = J(() => ({
                    message: x(2, "OVERRIDE_NETWORK_STRATEGY"),
                    requestId: S(1),
                    Sa: U(2)
                }));
                var xd = J(() => ({
                    message: x(4, "SKIP_WAITING"),
                    requestId: S(1)
                }));
                var yd = J(() => ({
                    message: x(1, "MESSAGE_NOT_RECOGNISED"),
                    Qf: S(1)
                }));
                var zd = K(() => ({
                    message: [1, yd, 2, wd, 3, vd, 4, xd]
                }), () => ({}));
                var Bd = class {
                    constructor(a, b, c, d) {
                        this.options = a;
                        this.serviceWorker = b;
                        this.C = c;
                        this.l = d
                    }
                };
                var rh = class {
                    Sa() {
                        return this.Ib
                    }
                    constructor(a) {
                        this.options = a;
                        this.Ib = !1
                    }
                };
                var sh = L(() => [1, "N", 2, "O", 3, "A", 4, "C", {
                    Ya: !0
                }, 5, "B", 6, "D"]);
                var th = J(() => ({
                    ge: S(1),
                    ee: R(2),
                    fe: R(3),
                    sj: T(4)
                }));
                var uh = () => ({
                    j: y(1, Sf),
                    O: D(8, wg),
                    af: D(11, sh),
                    bf: D(12, sh),
                    $e: D(7, sh),
                    df: D(40, sh),
                    Ze: D(41, sh),
                    hh: U(38),
                    ma: U(39),
                    kb: T(14),
                    Pe: R(18),
                    ad: U(20),
                    He: U(31),
                    Je: U(21),
                    release: S(22),
                    Fd: B(26, Wf),
                    dg: Q(36),
                    eg: R(37),
                    la: U(30),
                    userAgent: B(35, th)
                });
                var vh = J(() => ({ ...uh(),
                    mode: x(2, "REAL"),
                    N: S(27)
                }));
                var wh = J(() => ({ ...uh(),
                    mode: x(3, "FAKE")
                }));
                var xh = K(() => ({
                    mode: [2, vh, 3, wh]
                }), uh);
                var yh = !1,
                    zh = class {
                        setTag(a, b) {
                            this.tags[a] = b
                        }
                        setContext(a) {
                            this.context = a
                        }
                        error(a, b) {
                            this.console.error(...Dd(this, "error", a, b))
                        }
                        F(a, b) {
                            this.console.error(...Dd(this, "error", a, b))
                        }
                        Ld(a, b) {
                            this.console.warn(...Dd(this, "warning", a, b))
                        }
                        info(a, b) {
                            this.console.info(...Dd(this, "info", a, b))
                        }
                        debug(a, b) {
                            this.console.debug(...Dd(this, "debug", a, b))
                        }
                        toJSON() {
                            return {
                                name: this.name,
                                context: this.context,
                                tags: this.tags
                            }
                        }
                        constructor() {
                            var a = console;
                            this.name = "default";
                            this.tags = {};
                            if (!yh && typeof window === "object") {
                                const b =
                                    window.onerror;
                                window.onerror = (...d) => {
                                    typeof b === "function" && b(...d);
                                    console.error("unhandled error:", ...d)
                                };
                                const c = window.onunhandledrejection;
                                window.onunhandledrejection = d => {
                                    typeof c === "function" && c(d);
                                    console.error("[ConsoleErrorClient]: Unhandled promise rejection", d)
                                };
                                yh = !0
                            }
                            q(!0, "name must not contain a dot");
                            a instanceof zh ? (this.name = `${a.name}.${"default"}`, this.console = a.console) : this.console = a
                        }
                    };
                var Ah = class {
                    constructor() {
                        this.Bd = {}
                    }
                };
                var ke = class {
                    setupOnce(a, b) {
                        a(c => {
                            const d = b().getIntegration(ke);
                            return d ? Pd(d, c) ? null : c : c
                        })
                    }
                    constructor(a = []) {
                        this.Td = a;
                        this.name = ke.id
                    }
                };
                ke.id = "FilterErrors";
                var he = class {
                    setupOnce(a, b) {
                        a(c => {
                            b().getIntegration(he);
                            return c
                        })
                    }
                    constructor() {
                        this.name = he.id
                    }
                };
                he.id = "HostRpcServiceErrors";
                var ie = class {
                    setupOnce(a, b) {
                        a(c => {
                            b().getIntegration(ie);
                            return c
                        })
                    }
                    constructor() {
                        this.name = ie.id
                    }
                };
                ie.id = "HttpServiceErrors";
                var Sd = {
                    now: () => Date.now()
                };
                var Bh = class {
                        add(a) {
                            this.bb = this.We(this.bb);
                            this.list[this.bb] = a
                        }
                        find(a) {
                            let b = this.bb;
                            do {
                                if (this.list[b] && a(this.list[b])) return this.list[b];
                                b = this.Xe(b)
                            } while (b !== this.bb)
                        }
                        constructor() {
                            this.bc = 10;
                            this.bb = 0;
                            this.We = a => (a + 1) % this.bc;
                            this.Xe = a => (a + this.bc - 1) % this.bc;
                            this.list = Array(10)
                        }
                    },
                    fe = class {
                        setupOnce(a, b) {
                            a(c => {
                                const d = b().getIntegration(fe);
                                d && (Td(d, c) ? c = null : d.history.add({
                                    event: c,
                                    timestamp: Sd.now()
                                }));
                                return c
                            })
                        }
                        constructor(a) {
                            this.hg = a;
                            this.name = fe.id;
                            this.history = new Bh
                        }
                    };
                fe.id = "NoSuccessiveEvent";
                var ce = class {
                    setupOnce(a, b) {
                        a(c => {
                            var d, e;
                            if (!b().getIntegration(ce)) return c;
                            var f;
                            c.tags = (f = c.tags) !== null && f !== void 0 ? f : {};
                            c.tags["prior.unhandled.error.count"] = this.yd;
                            ((e = c.exception) === null || e === void 0 ? 0 : (d = e.values) === null || d === void 0 ? 0 : d.some(g => {
                                var h;
                                return ((h = g.mechanism) === null || h === void 0 ? void 0 : h.handled) === !1
                            })) && this.yd++;
                            return c
                        })
                    }
                    constructor() {
                        this.name = ce.id;
                        this.yd = 0
                    }
                };
                var je = class {
                    setupOnce(a, b) {
                        a(c => {
                            const d = b().getIntegration(je);
                            return d ? Yd(d, c) : c
                        })
                    }
                    Hc(a) {
                        var b, c, d;
                        const e = (a === null || a === void 0 ? 0 : a.url) ? Xd(this, a === null || a === void 0 ? void 0 : a.url) : void 0,
                            f = {};
                        if (a === null || a === void 0 ? 0 : (b = a.headers) === null || b === void 0 ? 0 : b["User-Agent"]) f["User-Agent"] = a === null || a === void 0 ? void 0 : a.headers["User-Agent"];
                        if (a === null || a === void 0 ? 0 : (c = a.headers) === null || c === void 0 ? 0 : c.Referer) f.Referer = Xd(this, a === null || a === void 0 ? void 0 : (d = a.headers) === null || d === void 0 ? void 0 : d.Referer);
                        return {
                            url: e,
                            headers: f
                        }
                    }
                    constructor(a, b) {
                        this.Ud = a;
                        this.location = b;
                        this.name = je.id
                    }
                };
                je.id = "UrlScrubber";
                var Zd = [function(a) {
                    if (a = /canvaeditor\/(\d+\.\d+\.\d+)/.exec(a)) return {
                        name: "mobile_app_version",
                        value: a[1]
                    }
                }, function(a) {
                    if (a = /com.canva.editor\s\(version\/(\d+\.\d+\.\d+)/.exec(a)) return {
                        name: "mobile_app_version",
                        value: a[1]
                    }
                }];
                var le = ["TimeoutError", "HttpTimeoutError", /^ResizeObserver loop/, /^WHEN_CANCELLED$/, "ChunkLoadError", /^NetworkError: Failed to execute 'importScripts' on 'WorkerGlobalScope':/, /Failed to register a ServiceWorker.*(The document is in an invalid state|An unknown error occurred when fetching the script|Failed to access storage|The URL protocol of the current origin \('null'\) is not supported|Timed out while trying to start the Service Worker)\.$/, /^(Can't find variable: indexedDB|Internal error opening backing store for indexedDB.open.|Encountered full disk while opening backing store for indexedDB.open.|An internal error was encountered in the Indexed Database server)/,
                        /Non-Error promise rejection captured with value: [Tt]imeout( \(.\))?/
                    ],
                    Ch = class {
                        Hc(a) {
                            var b, c, d;
                            if (!a.url) return {
                                headers: {
                                    "User-Agent": (d = a === null || a === void 0 ? void 0 : (b = a.headers) === null || b === void 0 ? void 0 : b["User-Agent"]) !== null && d !== void 0 ? d : ""
                                }
                            };
                            b = /^(\/design\/[a-zA-Z0-9_-]+\/)([a-zA-Z0-9_-]{22})(.*)/;
                            d = new URL(a.url);
                            d.search = "";
                            b.test(d.pathname) && (d.pathname = d.pathname.replace(b, "$1<REDACTED>$3"));
                            var e;
                            return {
                                url: d.toString(),
                                headers: {
                                    "User-Agent": (e = a === null || a === void 0 ? void 0 : (c = a.headers) ===
                                        null || c === void 0 ? void 0 : c["User-Agent"]) !== null && e !== void 0 ? e : ""
                                }
                            }
                        }
                        setContext({
                            user: a,
                            locale: b,
                            Ch: c
                        }) {
                            var d, e;
                            (e = this.R) === null || e === void 0 || (d = e.getCurrentHub()) === null || d === void 0 || d.configureScope(f => {
                                a && (f.setUser(a), f.setExtra("isAnonymousUser", !1));
                                b && f.setTag("locale", b);
                                c === null || c === void 0 || c.forEach((g, h) => f.setExtra(h, g))
                            })
                        }
                        setTags(a) {
                            for (const b of a) this.setTag(b.name, b.value)
                        }
                        setTag(a, b) {
                            if (this.R != null) {
                                {
                                    var c = a.length <= 32;
                                    const d = b.length <= 200;
                                    c && d ? c = ta(!0) : (c = (c ? "" : "Key name length cannot exceed 32 characters.\n") +
                                        (d ? "" : "Key value length cannot exceed 200 characters.\n"), c = ua(Error(c + `Tag: ${a}:${b}`)))
                                }
                                c.ok ? this.R.setTag(a, b) : ne(this, c.error)
                            }
                        }
                        setExtras(a) {
                            for (const b of a) this.setExtra(b.name, b.value)
                        }
                        setExtra(a, b) {
                            this.R != null && this.R.setExtra(a, Id(b))
                        }
                        error(a, b) {
                            pe(this, "error", a instanceof Error ? a : Error(a), b)
                        }
                        F(a, b) {
                            pe(this, "error", a, b)
                        }
                        Ld(a, b) {
                            pe(this, "warning", a, b)
                        }
                        info(a, b) {
                            pe(this, "info", a instanceof Error ? a : Error(a), b)
                        }
                        debug(a, b) {
                            pe(this, "debug", a instanceof Error ? a : Error(a), b)
                        }
                        constructor(a) {
                            var b =
                                self.Sentry,
                                c = new Ah;
                            a: {
                                var d = self;
                                if (typeof d.Android === "object" && typeof d.Android.getPageLocation === "function") {
                                    let e;
                                    try {
                                        e = d.Android.getPageLocation()
                                    } catch (f) {
                                        d = void 0;
                                        break a
                                    }
                                    d = typeof e === "string" ? e : void 0
                                } else d = void 0
                            }
                            this.T = a;
                            this.Vc = [];
                            this.Re = [];
                            this.R = b;
                            this.ze = c;
                            this.$d = [];
                            this.hd = this.pd = void 0;
                            this.allowUrls = "/dist/renderer/ canva.com canva.cn canva-dev.com canva-staging.com canva-staging.cn www.features.canva-internal.com www.features.canva-internal-staging.com canva-apps.com canva-apps.cn canva-apps-dev.com canva-apps-staging.com canva-apps-staging.cn".split(" ");
                            this.R ? me(this, a, {
                                ud: d
                            }) : typeof self.suppressSentryInitializationError !== "undefined" && self.suppressSentryInitializationError === !0 || console.error("Sentry can not be found on the global scope.")
                        }
                    };
                var $e = class {
                        Qa() {
                            return new Dh
                        }
                    },
                    Dh = class {
                        ta() {
                            return new Eh
                        }
                        ua() {
                            return new Eh
                        }
                        Ub(a, b, c) {
                            let d;
                            typeof c === "function" && (d = c);
                            return d(new Eh)
                        }
                        async ob(a, b, c) {
                            let d;
                            typeof c === "function" && (d = c);
                            return d(new Eh)
                        }
                        Aa() {}
                        async flush() {}
                    },
                    Eh = class {
                        Yb() {
                            return new Fh
                        }
                        abort() {}
                        Ha() {}
                        setAttribute() {
                            return this
                        }
                        setStatus() {
                            return this
                        }
                        ld() {
                            return !1
                        }
                        wa() {
                            return !1
                        }
                        end() {
                            return {
                                Da: () => ({}),
                                Ea: () => ({})
                            }
                        }
                        Aa() {}
                        La() {}
                        $a() {}
                        constructor() {
                            this.name = "";
                            this.attrs = new Map;
                            this.U = "NOOP";
                            this.Ma = [];
                            this.status = "unset";
                            this.da = new Map;
                            this.startTime = performance.now();
                            this.ga = "span";
                            this.context = {
                                traceId: "",
                                spanId: "",
                                Kc: 0
                            };
                            this.links = []
                        }
                    },
                    Fh = class {
                        Aa() {}
                        La() {}
                        $a() {}
                        setAttribute() {}
                        Ha() {}
                    };
                var af = class {
                    bd(a) {
                        var b = [];
                        for (const c of a) c.parentSpanId && !this.sc.has(c.parentSpanId) ? (a = this.zb.get(c.parentSpanId) || [], a.push(c), this.zb.set(c.parentSpanId, a)) : b.push(c);
                        for (const c of b) b = c.context.spanId, se(this, c), this.zb.delete(b)
                    }
                    async flush() {}
                    constructor() {
                        this.zb = new Map;
                        this.sc = new Set
                    }
                };
                var Gh = class extends Error {
                        constructor(a, b) {
                            super(a);
                            this.uc = b;
                            this.name = "TelemetryExportError";
                            Object.setPrototypeOf(this, Gh.prototype)
                        }
                    },
                    Hh = class extends N {
                        constructor(a, b, c) {
                            super(a, b);
                            this.uc = c;
                            this.name = "SampledTracingExportError";
                            Object.setPrototypeOf(this, Hh.prototype)
                        }
                    };
                var bf = class {
                    async bd(a) {
                        if (a.length !== 0)
                            if (this.Bb.size < this.cc) {
                                try {
                                    Ze(this.Jd);
                                    var b = ye(a, c => {
                                        var d = this.Jd;
                                        return d.Nc + (c - d.zc)
                                    })
                                } catch (c) {
                                    this.j.F(c, {
                                        va: "OTLPSpanAdapter: Unable to convert spans",
                                        extra: new Map([
                                            ["spans", JSON.stringify(a.map(P), void 0, 2)]
                                        ])
                                    });
                                    return
                                }
                                try {
                                    const c = this.send(b);
                                    this.Bb.add(c);
                                    c.catch(d => {
                                        this.j.F(d)
                                    }).finally(() => {
                                        this.Bb.delete(c)
                                    })
                                } catch (c) {
                                    this.j.F(c)
                                }
                            } else this.j.F(new Gh("OTLPExporter: Concurrency Limit Reached"))
                    }
                    async flush() {
                        await Promise.all(this.Bb)
                    }
                    constructor(a,
                        b, c, d) {
                        this.config = a;
                        this.j = b;
                        this.Jd = c;
                        this.send = d;
                        this.Bb = new Set;
                        var e;
                        this.cc = (e = a.cc) !== null && e !== void 0 ? e : Infinity
                    }
                };
                var df = ({
                    fg: a,
                    url: b,
                    gb: c,
                    fetch: d = self.fetch
                }) => async e => {
                    var f, g;
                    e = new Request(b, {
                        method: "POST",
                        body: JSON.stringify(e),
                        headers: {
                            Accept: "application/json",
                            "Content-Type": "application/json"
                        },
                        priority: "low",
                        signal: (f = (g = AbortSignal).timeout) === null || f === void 0 ? void 0 : f.call(g, a)
                    });
                    try {
                        const h = await d(e);
                        if (h.status > 299 || h.status < 200) throw c != null ? new Hh(`SendWithFetch: Failed to export (status: ${h.status})`, c) : new Gh(`SendWithFetch: Failed to export (status: ${h.status})`);
                    } catch (h) {
                        throw f = h instanceof
                        Error && h.name === "AbortError" ? `SendWithFetch: Fetch request timeout: ${a}ms` : "SendWithFetch: Failed to export", c != null ? new Hh(f, c) : new Gh(f);
                    }
                };
                var ef = class {
                    build(a) {
                        return this.vd.reduce((b, c) => c(b), {
                            Ua: () => {},
                            process: b => a.bd(b),
                            flush: () => a.flush()
                        })
                    }
                    constructor() {
                        this.vd = []
                    }
                };
                var Ae = class {
                    Ua() {}
                    process(a) {
                        for (const b of a) b.wa() && (this.buffer.push(b), this.buffer.length >= this.config.Lb && Be(this));
                        this.buffer.length > 0 && this.Xa == null && (this.Xa = setTimeout(() => Be(this), this.config.Mb))
                    }
                    async flush() {
                        Be(this);
                        await this.Ta.flush()
                    }
                    constructor(a, b, c) {
                        this.Ta = a;
                        this.config = b;
                        this.j = c;
                        this.buffer = []
                    }
                };
                var ff = class {
                        Ua(a) {
                            const b = a.context.traceId,
                                c = this.Xb.get(b);
                            c != null ? (c.Pb += 1, a.B === void 0 && (c.root = a)) : this.Xb.set(b, {
                                Pb: 1,
                                root: a
                            });
                            this.Ta.Ua(a)
                        }
                        process(a) {
                            for (const c of a) {
                                a = c.context.traceId;
                                var b = this.Xb.get(a);
                                b != null && (--b.Pb, b.Pb === 0 && (b = this.Pf.process(b), this.Ta.process(b), this.Xb.delete(a)))
                            }
                        }
                        flush() {
                            return this.Ta.flush()
                        }
                        constructor(a) {
                            var b = new Ih;
                            this.Ta = a;
                            this.Pf = b;
                            this.Xb = new Map
                        }
                    },
                    Ih = class {
                        process(a) {
                            const b = [];
                            Ce(this, a.root, b);
                            return b
                        }
                    };
                var Jh = Ie(16),
                    Kh = Ie(8),
                    He = Array(32);
                var Ne = class {
                        Yb() {
                            return this.Y || new Fh
                        }
                        Ha(a) {
                            this.Za || (this.attrs = new Map([...this.attrs, ...a]))
                        }
                        setAttribute(a, b, c = !1) {
                            if (this.Za && !c) return this;
                            this.attrs.set(a, b);
                            return this
                        }
                        setStatus(a) {
                            try {
                                if (this.Za) return this;
                                this.status = a;
                                return this
                            } catch (b) {
                                return this.status = "error", this.j.F(b), this
                            }
                        }
                        ld() {
                            return !this.ended
                        }
                        wa() {
                            return (this.context.Kc & 1) !== 0
                        }
                        abort() {
                            try {
                                var a;
                                if (!this.aborted) {
                                    this.aborted = !0;
                                    this.setAttribute("span_aborted", !0);
                                    for (const b of this.Na) b.abort();
                                    this.ended || (this.Za =
                                        this.ended = !0, this.timeout && clearTimeout(this.timeout), ((a = this.qa) === null || a === void 0 ? 0 : a.frameRate) && Pe(this.qa.frameRate), this.endTime = this.getCurrentTime(), this.duration = this.endTime - this.startTime, Le(this), Oe(this), this.lb.forEach(b => b()), this.ba.Wa.process([this]))
                                }
                            } catch (b) {
                                this.j.F(b)
                            }
                        }
                        end(a, b, c) {
                            try {
                                if (this.ended) return {
                                    Da: this.Da,
                                    Ea: this.Ea
                                };
                                this.ended = !0;
                                return Qe(this, a, b, c)
                            } catch (d) {
                                return this.j.F(d, {
                                    va: "Error ending span",
                                    extra: new Map(P(this))
                                }), {
                                    Da: this.Da,
                                    Ea: this.Ea
                                }
                            }
                        }
                        La(a) {
                            try {
                                this.ended &&
                                    this.aborted || (this.ended && this.fc ? a(this.fc) : this.mb.push(a))
                            } catch (b) {
                                this.j.F(b)
                            }
                        }
                        $a(a) {
                            try {
                                this.ended && this.aborted ? a() : this.lb.push(a)
                            } catch (b) {
                                this.j.F(b)
                            }
                        }
                        Aa(a, b) {
                            try {
                                q(a.length > 0, "Event name cannot be empty");
                                const {
                                    Nb: c,
                                    Ob: d
                                } = Je(b), e = new Lh({
                                    name: a,
                                    B: this,
                                    ba: this.ba,
                                    na: this.na,
                                    U: this.U,
                                    j: this.j,
                                    startTime: d === null || d === void 0 ? void 0 : d.startTime,
                                    Y: void 0,
                                    ga: "event",
                                    hb: d === null || d === void 0 ? void 0 : d.hb,
                                    getCurrentTime: this.getCurrentTime,
                                    aa: this.aa,
                                    attrs: (d === null || d === void 0 ? void 0 : d.attrs) ||
                                        c,
                                    yc: this.startTime
                                });
                                this.Ma.push(e)
                            } catch (c) {
                                this.j.F(c)
                            }
                        }
                        get da() {
                            return this.na()
                        }
                        constructor(a) {
                            var b;
                            this.Za = this.aborted = this.ended = !1;
                            this.attrs = new Map;
                            this.Ma = [];
                            this.Na = [];
                            this.status = "unset";
                            this.fc = void 0;
                            this.mb = [];
                            this.lb = [];
                            this.Da = f => Ge({
                                span: this,
                                j: this.j,
                                aa: this.aa,
                                ...f
                            });
                            this.Ea = () => this.wa() ? this.context : void 0;
                            this.name = a.name;
                            this.ended = !1;
                            this.ba = a.ba;
                            var c;
                            this.getCurrentTime = (c = a.getCurrentTime) !== null && c !== void 0 ? c : f => {
                                var g;
                                return (g = f === null || f === void 0 ? void 0 : f.wc) !==
                                    null && g !== void 0 ? g : performance.now()
                            };
                            c = Kh();
                            this.identifier = `${this.name}_${c}`;
                            this.startTime = this.getCurrentTime({
                                id: this.identifier,
                                wc: a.startTime
                            });
                            this.U = a.U;
                            this.Y = a.Y;
                            this.ga = a.ga;
                            this.j = a.j;
                            this.qa = a.qa;
                            const d = ((b = a.B) === null || b === void 0 ? void 0 : b.context.traceId) || Jh();
                            a.attrs && (this.attrs = new Map(a.attrs));
                            this.attrs.set("span_type", this.ga);
                            b = a.ba.Gc.Cd({
                                traceId: d,
                                bg: this.name,
                                attributes: this.attrs,
                                B: a.B
                            }) ? 1 : 0;
                            this.context = {
                                spanId: c,
                                traceId: d,
                                Kc: b
                            };
                            this.links = a.links || [];
                            a.B && (this.parentSpanId =
                                a.B.context.spanId, this.B = a.B);
                            this.na = a.na;
                            this.aa = a.aa;
                            this.setStatus("ok");
                            this.timeout = setTimeout(() => {
                                this.name += ".timed_out";
                                this.setAttribute("timed_out", !0);
                                this.end("ok")
                            }, a.timeout || 12E4);
                            for (const f of this.ba.plugins) try {
                                var e;
                                (e = f.Ua) === null || e === void 0 || e.call(f, this)
                            } catch (g) {
                                this.j.F(g, {
                                    va: "Error calling plugin onSpanStart",
                                    extra: new Map([
                                        ["plugin", f.name], ...P(this)
                                    ])
                                })
                            }
                            this.ba.Wa.Ua(this)
                        }
                    },
                    Lh = class extends Ne {
                        constructor(a) {
                            super(a);
                            a.yc != null && (this.setAttribute("parent_relative_start_ms",
                                Math.round(this.startTime - a.yc)), this.setAttribute("parent_start", a.yc));
                            a.hb && this.setAttribute("event_type", a.hb);
                            this.end("ok", this.startTime)
                        }
                    };
                var Re = class {
                    get aborted() {
                        return this.S.aborted
                    }
                    La(a) {
                        try {
                            this.ended && this.aborted || (this.ended && this.hc ? a(this.hc) : this.mb.push(a))
                        } catch (b) {
                            this.j.F(b, {
                                tags: new Map([
                                    ["user_operation", this.name]
                                ])
                            })
                        }
                    }
                    $a(a) {
                        try {
                            this.ended && this.aborted ? a() : this.lb.push(a)
                        } catch (b) {
                            this.j.F(b, {
                                tags: new Map([
                                    ["user_operation", this.name]
                                ])
                            })
                        }
                    }
                    Aa(a, b) {
                        try {
                            const c = Ke(b);
                            this.Le.forEach((e, f) => {
                                c.attrs.has(f) || c.attrs.set(f, e)
                            });
                            c.attrs.set("user_operation", this.name);
                            c.attrs.set("is_uop", !0);
                            c.attrs.set("sample_rate_override",
                                1);
                            const d = this.S.attrs.get("uop_attr_type");
                            d != null && c.attrs.set("uop_attr_type", d);
                            this.pb && c.attrs.set("uop_persist", !0);
                            this.S.Aa(a, c)
                        } catch (c) {
                            this.j.F(c, {
                                tags: new Map([
                                    ["user_operation", this.name]
                                ])
                            })
                        }
                    }
                    Ha(a) {
                        this.S.Ha(a)
                    }
                    setAttribute(a, b) {
                        this.S.setAttribute(a, b)
                    }
                    constructor(a, b, c, d, e, f) {
                        var g = new Set;
                        this.name = a;
                        this.S = b;
                        this.Le = c;
                        this.j = d;
                        this.pb = e;
                        this.eb = f;
                        this.ec = g;
                        this.mb = [];
                        this.lb = [];
                        this.hc = void 0;
                        this.ended = !1
                    }
                };
                var jf = class {
                    Cd({
                        bg: a,
                        attributes: b,
                        B: c
                    }) {
                        b = b === null || b === void 0 ? void 0 : b.get("sample_rate_override");
                        if (b != null && typeof b === "number") {
                            if (b < 0 || b > 1) this.j.error(Error(`Invalid sample rate (${b}) for ${a}`)), b = this.sampleRate;
                            return Math.random() < b
                        }
                        a = this.rf(c);
                        return a != null ? a : Math.random() < this.sampleRate
                    }
                    constructor(a = 0, b) {
                        var c = We;
                        this.sampleRate = a;
                        this.j = b;
                        this.rf = c;
                        this.sampleRate = Math.min(Math.max(0, this.sampleRate), 1)
                    }
                };
                var Mh = class {
                    add(a, b = 1) {
                        q(isFinite(a));
                        q(b > 0);
                        if (this.ia === 0) this.ia = b, this.wb = this.xb = this.Ka = a, this.yb = 0;
                        else {
                            this.ia += b;
                            const c = a - this.Ka;
                            this.Ka += b * c / this.ia;
                            this.yb += b * c * (a - this.Ka);
                            this.xb = Math.min(this.xb, a);
                            this.wb = Math.max(this.wb, a)
                        }
                    }
                    addAll(a) {
                        for (const b of a) this.add(b)
                    }
                    get count() {
                        return this.ia
                    }
                    get tf() {
                        return this.Ka
                    }
                    get min() {
                        return this.xb
                    }
                    get max() {
                        return this.wb
                    }
                    get Nf() {
                        return this.ia === 0 ? NaN : this.ia === 1 ? 0 : Math.max(this.yb, 0) / this.ia
                    }
                    get Mf() {
                        return Math.sqrt(this.Nf)
                    }
                    constructor() {
                        this.ia =
                            0;
                        this.Ka = NaN;
                        this.yb = 0;
                        this.wb = this.xb = NaN
                    }
                };
                var Nh = class {
                        start() {
                            this.Ia = new Mh;
                            this.Rb = void 0;
                            this.$b = this.Bc.requestAnimationFrame(this.xd);
                            this.document.addEventListener("visibilitychange", this.qd)
                        }
                        get kd() {
                            return this.document.visibilityState === "visible"
                        }
                        constructor() {
                            var a = window.document;
                            this.Bc = window;
                            this.document = a;
                            this.Ia = new Mh;
                            this.xd = b => {
                                this.Rb !== void 0 && this.Ia.add(Math.min(b - this.Rb, 5E3));
                                this.Rb = this.kd ? b : void 0;
                                this.$b = this.Bc.requestAnimationFrame(this.xd)
                            };
                            this.qd = () => {
                                this.kd || (this.Rb = void 0)
                            }
                        }
                    },
                    Oh = class {
                        reset() {
                            this.frameCount =
                                0;
                            this.od = new Mh;
                            this.jd.clear()
                        }
                        constructor() {
                            this.frameCount = 0;
                            this.od = new Mh;
                            this.jd = new Set
                        }
                    },
                    Xe = new Oh;
                var Ph = class {
                    Ua() {}
                    process() {}
                    async flush() {}
                };
                var Qh = class {
                    Cd() {
                        return !0
                    }
                };
                var Rh = class {
                    ta(a, b) {
                        return this.ua(a, void 0, b)
                    }
                    ua(a, b, c) {
                        try {
                            var d;
                            const {
                                Nb: e,
                                Ob: f
                            } = Je(c), g = ha(this.U(b), "No instrumentation scope found for '{}' of parent '{}:{}'", a, b === null || b === void 0 ? void 0 : b.U, b === null || b === void 0 ? void 0 : b.context.spanId), h = (f === null || f === void 0 ? 0 : (d = f.performance) === null || d === void 0 ? 0 : d.Zh) ? this.dc.frameRate() : void 0;
                            h === null || h === void 0 || h.start();
                            const k = (f === null || f === void 0 ? 0 : f.cg) ? Te({
                                    uc: { ...f.cg,
                                        startTime: f.startTime,
                                        timeout: f.timeout
                                    },
                                    l: this.Qc,
                                    B: b,
                                    xe: [this.config.Zb,
                                        this.Zb
                                    ].filter(Pa),
                                    j: this.j,
                                    Cf: n => {
                                        b = n
                                    }
                                }) : Ue(b),
                                l = new Ne({
                                    name: a,
                                    B: b,
                                    ba: this.config,
                                    na: this.na,
                                    U: g,
                                    j: this.j,
                                    getCurrentTime: this.getCurrentTime,
                                    startTime: f === null || f === void 0 ? void 0 : f.startTime,
                                    timeout: f === null || f === void 0 ? void 0 : f.timeout,
                                    aa: this.aa,
                                    attrs: (f === null || f === void 0 ? void 0 : f.attrs) || e,
                                    links: f === null || f === void 0 ? void 0 : f.links,
                                    Y: k,
                                    ga: "span",
                                    qa: {
                                        frameRate: h
                                    }
                                });
                            k !== null && k !== void 0 && (l.attrs.get("is_uop") || l.setAttribute("user_operation", k.name), k.pb == null && (k.pb = l.wa(), k.pb && k.S.setAttribute("uop_persist", !0)), k.ec.add(l));
                            b != null && b instanceof Ne && b.Na.push(l);
                            return l
                        } catch (e) {
                            return this.j.F(e), new Eh
                        }
                    }
                    Ub(a, b, c) {
                        {
                            let e, f;
                            typeof c === "function" ? f = c : e = Ke(c);
                            a = this.ua(a, b, e);
                            try {
                                var d = f(a)
                            } catch (g) {
                                throw a.setStatus("error"), g;
                            } finally {
                                a.end()
                            }
                        }
                        return d
                    }
                    async ob(a, b, c) {
                        return Ye(this, a, b, c)
                    }
                    Aa(a, b) {
                        try {
                            const {
                                Nb: c,
                                Ob: d
                            } = Je(b);
                            q(a.length > 0, "Event name cannot be empty");
                            const e = ha(this.U(), "Event ({}) requires instrumentation scope", a);
                            new Lh({
                                name: a,
                                ba: this.config,
                                na: this.na,
                                U: e,
                                Y: void 0,
                                j: this.j,
                                ga: "event",
                                hb: d === null || d === void 0 ? void 0 : d.hb,
                                getCurrentTime: this.getCurrentTime,
                                startTime: d === null || d === void 0 ? void 0 : d.startTime,
                                aa: this.aa,
                                attrs: (d === null || d === void 0 ? void 0 : d.attrs) || c,
                                B: void 0
                            })
                        } catch (c) {
                            this.j.F(c)
                        }
                    }
                    async flush() {
                        try {
                            await this.config.Wa.flush()
                        } catch (a) {
                            this.j.F(a)
                        }
                    }
                    constructor(a, b, c, d, e, f, g, h = l => {
                        var n;
                        return (n = l === null || l === void 0 ? void 0 : l.wc) !== null && n !== void 0 ? n : performance.now()
                    }, k = {
                        frameRate: () => new Nh
                    }) {
                        this.U = a;
                        this.aa = b;
                        this.config = c;
                        this.na = d;
                        this.j = e;
                        this.Qc = f;
                        this.Zb = g;
                        this.getCurrentTime =
                            h;
                        this.dc = k
                    }
                };
                var hf = class {
                        constructor(a) {
                            var b;
                            this.Gc = (b = a.Gc) !== null && b !== void 0 ? b : new Qh;
                            var c;
                            this.Wa = (c = a.Wa) !== null && c !== void 0 ? c : new Ph;
                            var d;
                            this.plugins = (d = a.plugins) !== null && d !== void 0 ? d : [];
                            var e;
                            this.da = (e = a.da) !== null && e !== void 0 ? e : new Map;
                            this.Zb = a.Zb
                        }
                    },
                    gf = class {
                        Qa(a) {
                            try {
                                return new Rh(() => a, this, this.config, () => new Map([...this.config.da, ["service.name", this.Yf + " | " + a]]), this.j, this.Qc, void 0, this.getCurrentTime, this.dc)
                            } catch (c) {
                                var b;
                                this.j.F(c, {
                                    extra: new Map([
                                        ["attrs", Object.fromEntries((b = this.config) ===
                                            null || b === void 0 ? void 0 : b.da)]
                                    ])
                                });
                                return new Dh
                            }
                        }
                        constructor(a, b, c = e => {
                            var f;
                            return (f = e === null || e === void 0 ? void 0 : e.wc) !== null && f !== void 0 ? f : performance.now()
                        }, d = {
                            frameRate: () => new Nh
                        }) {
                            this.config = a;
                            this.j = b;
                            this.getCurrentTime = c;
                            this.dc = d;
                            this.Yf = (a = this.config.da.get("service.name")) && typeof a === "string" ? a : "no_service_name";
                            this.Qc = this.Qa("telemetry.user_operation")
                        }
                    };
                var cf = class {
                    constructor() {
                        var a = Date.now(),
                            b = performance.now();
                        this.Nc = a;
                        this.zc = b;
                        this.threshold = 1E4
                    }
                };
                var mf = class {
                    constructor(a, b) {
                        this.Hd = a;
                        this.Gd = b
                    }
                };
                var of = class {
                    Dc(a) {
                        const b = this.l.ta("time_until_idle");
                        b.La(() => this.Oa.delete(a));
                        b.$a(() => this.Oa.delete(a));
                        this.Oa.set(a, {
                            span: b,
                            Xa: self.setTimeout(() => lf(this, a), 5E3),
                            Fb: [performance.now()]
                        })
                    }
                    Ec(a) {
                        a = this.Oa.get(a);
                        a != null && (a.Fb = a.Fb.slice(-5).concat(performance.now()))
                    }
                    constructor(a) {
                        this.l = a;
                        this.Oa = new Map
                    }
                };
                var nf = class {
                    Dc(a) {
                        const b = this.l.ta("time_to_second_fetch_event", {
                            timeout: this.options.gg
                        });
                        b.La(() => this.sb.delete(a));
                        b.$a(() => this.sb.delete(a));
                        this.sb.set(a, b)
                    }
                    Ec(a) {
                        const b = this.sb.get(a);
                        b != null && (b.end(), this.sb.delete(a))
                    }
                    constructor(a) {
                        this.options = {
                            gg: 3E4
                        };
                        this.l = a;
                        this.sb = new Map
                    }
                };
                var rf = class {
                    constructor() {
                        this.$c = !1;
                        this.ac = null
                    }
                };
                (function() {
                    var a;
                    const b = performance.now(),
                        c = la("page", xh.P);
                    var d;
                    const e = (d = c.release) !== null && d !== void 0 ? d : self.bootstrap.release;
                    var f;
                    d = (f = c.j) !== null && f !== void 0 ? f : la("errorService", Sf.P);
                    var g;
                    f = (g = c.Fd) !== null && g !== void 0 ? g : la("telemetryService", Wf.P);
                    a: switch (d.M) {
                        case "CONSOLE":
                            g = new zh;
                            break a;
                        case "SENTRY":
                            g = new Ch(d);
                            break a;
                        default:
                            throw new F(d);
                    }
                    const h = g,
                        {
                            Ja: k,
                            tb: l,
                            xa: n
                        } = sf({
                            location: self.location,
                            T: f,
                            gb: c.dg,
                            jc: c.eg,
                            userAgent: c.userAgent,
                            D: {
                                j: h
                            }
                        });
                    g = k.Qa("service_worker.install");
                    var m;
                    const r = g.ta(`boot.${(m=(a=self.serviceWorker)===null||a===void 0?void 0:a.state)!==null&&m!==void 0?m:"na"}`, {
                        startTime: 0
                    });
                    a = g.ua("main", r, {
                        startTime: b
                    });
                    const p = new rh({
                        Qb: c.bf,
                        sd: c.af,
                        Yc: c.$e,
                        ne: c.Ze,
                        og: c.df
                    });
                    if (c.ad) try {
                        td({
                            serviceWorker: self,
                            D: {
                                j: h,
                                Ja: k,
                                tb: l,
                                xa: n
                            },
                            O: c.O,
                            C: p,
                            N: c.mode === "REAL" ? c.N : location.origin,
                            kb: c.kb,
                            ye: () => JSON.stringify(c, void 0, 2),
                            ra: c.Pe,
                            la: c.la,
                            ma: c.ma
                        })
                    } catch (w) {
                        h.F(w)
                    }
                    Cd({
                        serviceWorker: self,
                        C: p,
                        release: e,
                        D: {
                            Ja: k
                        }
                    });
                    self.addEventListener("activate", w => {
                        w.waitUntil(async function() {
                            var v,
                                z;
                            c.He && await self.clients.claim().catch(A => h.F(A));
                            c.ad && p.options.Qb !== 1 ? await ((v = self.registration.navigationPreload) === null || v === void 0 ? void 0 : v.enable().catch(() => {})) : await ((z = self.registration.navigationPreload) === null || z === void 0 ? void 0 : z.disable().catch(() => {}))
                        }())
                    });
                    self.addEventListener("install", () => {
                        c.Je && self.skipWaiting()
                    });
                    a.end();
                    Promise.resolve().then(() => {
                        r.end();
                        l.ac = Date.now()
                    })
                })();
            }).call(self, self._5c0f058b2d917619b177d32cbc4c572b);
        },

        /***/
        692950:
            (_, __, r) => r(476834)

    },
    /******/
    __webpack_require__ => { // webpackRuntimeModules
        /******/
        var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
        /******/
        __webpack_require__.O(0, [95433], () => (__webpack_exec__(476834), __webpack_exec__(692950)));
        /******/
        var __webpack_exports__ = __webpack_require__.O();
        /******/
    }
])
//# sourceMappingURL=sourcemaps/hjfept.6d1e38b5e547d559.js.map