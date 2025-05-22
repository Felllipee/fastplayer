(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [60060], {

        /***/
        82986: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(813110);
            __web_req__(914242);
            self._7ccc7343da2ae983607b3819c7bc1f93 = self._7ccc7343da2ae983607b3819c7bc1f93 || {};
            (function(__c) {
                var MM = __c.MM;
                var X = __c.X;
                var L = __c.L;
                var Ia = __c.Ia;
                var M3b, P3b, S3b, T3b, V3b, U3b, X3b, $3b, Z3b, c4b, U5;
                __c.P5 = function(a) {
                    return {
                        type: 1,
                        Component: a
                    }
                };
                __c.Q5 = function() {
                    return a => a
                };
                __c.R5 = function(a, b, c) {
                    return {
                        key: a,
                        fVa: b,
                        type: "string",
                        wJ: c,
                        gSa: 0
                    }
                };
                __c.S5 = function(a) {
                    return () => ({ ...K3b,
                        ...a
                    })
                };
                M3b = function({
                    element: a
                }) {
                    var b = L3b.get(a.ola);
                    if (!b) throw Error(`Blueprint ${a.ola} not found`);
                    b = b.variants.find(c => c.EP === a.EP);
                    if (!b) throw Error(`Variant ${a.EP} not found for blueprint ${a.ola}`);
                    return {
                        Ra: b.Ra
                    }
                };
                P3b = function(a, b) {
                    var c = N3b,
                        d = O3b;
                    a.handle("SET_CONFIG", async e => {
                        if (e === void 0) throw new T5({
                            code: "internal_error",
                            message: "SET_CONFIG: request cannot be undefined."
                        });
                        e = c.Zc(e);
                        e = await b(e);
                        if (d) return d.wd(e)
                    })
                };
                S3b = async function(a, b) {
                    a = await a.hIa.request("RENDER_ELEMENT", Q3b.wd(b));
                    if (!a.ok) throw Error(`Encountered an error while sending ${"RENDER_ELEMENT"} request: ${a.error}`);
                    if (a.value == null) throw Error("RENDER_ELEMENT: Result cannot be empty");
                    return R3b.Zc(a.value)
                };
                T3b = function(a) {
                    P3b(a.hIa, b => a.handler.hfb(b))
                };
                V3b = async function(a, b) {
                    const c = b.requestId,
                        d = b.path;
                    b = b.Sl;
                    const e = a.requestHandler.get(d);
                    if (e) {
                        a.W1.fY.send({
                            type: "ack",
                            requestId: c
                        });
                        var f = setInterval(() => a.W1.fY.send({
                            type: "ack",
                            requestId: c
                        }), 9E3);
                        try {
                            var g = await e(b);
                            clearInterval(f);
                            a.W1.fY.send({
                                type: "response",
                                requestId: c,
                                payload: g
                            })
                        } catch (k) {
                            clearInterval(f);
                            g = "internal_error";
                            b = "Something went wrong on our end, if this issue persists please contact us.";
                            if (k instanceof T5) {
                                var h = k;
                                k.code === "internal_error" ? a.H.Cb(k, {
                                    pe: "Internal error in comms handler",
                                    tags: new Map([
                                        ["type", "request"],
                                        ["path", d]
                                    ])
                                }) : (g = k.code, b = k.Rob)
                            } else a.Dpb ? a.H.Cb(k, {
                                pe: "Unexpected error type thrown from comms handler",
                                tags: new Map([
                                    ["type", "request"],
                                    ["path", d]
                                ])
                            }) : a.W$a.error(k);
                            g = U3b(a.W1, c, g, b);
                            g.ok || a.H.HL(g.error, {
                                pe: "unable to send error response",
                                tags: new Map([
                                    ["type", "request"],
                                    ["path", d]
                                ])
                            })
                        }
                        if (h != null)
                            for (const k of a.Sbb) try {
                                k(h)
                            } catch (l) {
                                a.H.RP(l, {
                                    pe: "Error executing errorObserver"
                                })
                            }
                    } else h = U3b(a.W1, c, "internal_error", `No request handler configured for path: "${d}".`),
                        h.ok || a.H.HL(h.error, {
                            pe: "unable to send error response",
                            tags: new Map([
                                ["type", "request"],
                                ["path", d]
                            ])
                        })
                };
                U3b = function(a, b, c, d) {
                    return a.fY.send({
                        type: "error",
                        requestId: b,
                        code: c,
                        message: d
                    })
                };
                X3b = function({
                    src: a,
                    srcdoc: b,
                    sandbox: c
                }) {
                    if (b.length !== 0 || !c.contains("allow-same-origin")) return W3b;
                    a = (new URL(a)).origin;
                    return a === "null" ? W3b : {
                        mCa: a,
                        xXa: a
                    }
                };
                $3b = async function(a, b, c, {
                    addEventListener: d,
                    removeEventListener: e
                } = window) {
                    const f = new Y3b(6E4),
                        g = X3b(c),
                        h = c.contentWindow;
                    if (!h) throw new T5({
                        code: "internal_error",
                        message: "contentWindow is missing from iFrame"
                    });
                    c = ({
                        data: k,
                        source: l,
                        origin: m
                    }) => {
                        var n;
                        (k === null || k === void 0 ? 0 : (n = k.source) === null || n === void 0 ? 0 : n.startsWith("react-")) || (m !== g.mCa ? Z3b(m) || b.info("received message event from an unexpected origin", {
                            extra: new Map([
                                ["expected", g.mCa],
                                ["actual", m]
                            ])
                        }) : l !== h ? l !== window && b.info("source and content window do not match", {
                            extra: new Map([
                                ["data.source", k === null || k === void 0 ? void 0 : k.source]
                            ])
                        }) : (l = k ? k.source ? k.source !== "iframe" ? Ia("invalid source") : (0, __c.Ga)() : Ia("'source' is missing in MessageEvent data object") : Ia("missing 'data' field in MessageEvent"), l.ok ? (h.postMessage({
                            source: "parent"
                        }, g.xXa, [a]), f.resolve(void 0)) : b.CK(l.error, {
                            extra: new Map([
                                ["data.source", k === null || k === void 0 ? void 0 : k.source]
                            ])
                        })))
                    };
                    d("message", c);
                    try {
                        await f.promise()
                    } finally {
                        e("message", c)
                    }
                };
                Z3b = function(a) {
                    return a4b.some(b => a.endsWith(b))
                };
                c4b = function({
                    H: a
                }) {
                    const b = new b4b(a);
                    return __c.Q5()(() => ({
                        element: __c.P5(({
                            data: {
                                element: c
                            },
                            $F: {
                                O3a: d
                            }
                        }) => U5(d, {
                            url: c.url,
                            oB: e => b.oB(e, c),
                            nU: e => b.nU(e)
                        }))
                    }))
                };
                __c.jd.prototype.HL = __c.fa(3, function(a, b) {
                    this.console.error(...__c.id(this, "critical", a, b))
                });
                __c.nM.prototype.HL = __c.fa(2, function(a, b) {
                    this.Ws.HL(a, b);
                    __c.lM(this, a, "critical", b)
                });
                __c.V5 = {};
                U5 = __webpack_require__(443763).jsx;
                var d4b = __webpack_require__(446474).Pi;
                var e4b = __webpack_require__(875604).memo;
                var W5 = __webpack_require__(519427),
                    f4b = W5.ObservableMap,
                    g4b = W5.reaction,
                    h4b = W5.runInAction;
                var K3b = Object.freeze({
                    document: Object.freeze({}),
                    element: Object.freeze({})
                });
                var i4b = __c.S5({
                        element: __c.V5
                    }),
                    j4b = {
                        hH: __c.Q5()(() => ({
                            element: __c.P5(d4b(() => U5("div", {
                                children: "3D Widget"
                            })))
                        })),
                        iH: i4b
                    };
                var L3b = new f4b,
                    k4b = __c.S5({
                        element: {
                            ola: __c.R5("blueprintId", 0),
                            EP: __c.R5("variantId", 0)
                        }
                    });
                var l4b = {
                    hH: __c.Q5()(() => ({
                        element: {
                            type: 0,
                            oD: M3b
                        }
                    })),
                    iH: k4b
                };
                var T5 = class extends Error {
                    constructor(a) {
                        a.code = a.code;
                        const b = a.message.endsWith(".") ? "" : ".";
                        super(`[${a.code}]:  ${a.message}${b}`.trim());
                        this.code = a.code;
                        this.name = "CanvaError";
                        this.Rob = a.message;
                        Object.setPrototypeOf(this, T5.prototype)
                    }
                };
                var Q3b = L(() => ({
                    config: __c.Y(1)
                }));
                var m4b = L(() => ({
                    color: X(1)
                }));
                var n4b = L(() => ({
                    type: __c.F("A?", 1, "RECOLORABLE"),
                    id: X(1),
                    value: __c.Sa(2, m4b)
                }));
                var o4b = L(() => ({
                    borderRadius: MM(1),
                    borderWidth: MM(2)
                }));
                var p4b = L(() => ({
                    type: __c.F("A?", 2, "BORDERABLE"),
                    id: X(1),
                    value: __c.Sa(2, o4b)
                }));
                var R3b = L(() => ({
                    config: X(1),
                    width: MM(2),
                    height: MM(3),
                    WU: __c.Ta(4, n4b),
                    h7a: __c.Ta(5, p4b)
                }));
                var N3b = L(() => ({
                    config: X(1),
                    width: MM(2),
                    height: MM(3),
                    WU: __c.Ta(4, n4b),
                    h7a: __c.Ta(5, p4b)
                }));
                var O3b = L(() => ({}));
                var q4b = class {
                    constructor(a, b) {
                        this.hIa = a;
                        this.handler = b;
                        T3b(this)
                    }
                };
                var r4b = class {
                    constructor(a, b, c) {
                        this.handler = a;
                        this.port = b;
                        this.H = c;
                        this.send = d => {
                            try {
                                return this.port.postMessage(d), (0, __c.Ga)()
                            } catch (e) {
                                return this.H.Cb(e), Ia(e)
                            }
                        };
                        this.omb = d => {
                            this.H.Cb(d)
                        };
                        this.onMessage = ({
                            data: d
                        }) => {
                            if (d) try {
                                this.handler.Wob(d)
                            } catch (e) {
                                this.H.Cb(e)
                            } else this.H.error(new T5({
                                code: "internal_error",
                                message: "missing data in 'MessageEvent'"
                            }))
                        };
                        this.port.onmessage = this.onMessage;
                        this.port.onmessageerror = this.omb
                    }
                };
                var s4b = class extends Error {
                        constructor() {
                            super("[internal_error] Comms promise timed out.")
                        }
                    },
                    Y3b = class {
                        reset(a) {
                            a && (this.timeoutMs = a);
                            this.setTimeout()
                        }
                        resolve(a) {
                            clearTimeout(this.Ld);
                            this.Mpb(a)
                        }
                        reject(a) {
                            clearTimeout(this.Ld);
                            this.dWa(a)
                        }
                        promise() {
                            return this.p
                        }
                        setTimeout() {
                            clearTimeout(this.Ld);
                            this.Ld = setTimeout(() => {
                                this.dWa(new s4b)
                            }, this.timeoutMs)
                        }
                        constructor(a) {
                            this.timeoutMs = a;
                            this.p = new Promise((b, c) => {
                                this.Mpb = b;
                                this.dWa = c
                            });
                            this.setTimeout()
                        }
                    };
                var t4b = class {
                    request(a, b) {
                        const c = this.JUa,
                            d = new Y3b(5E3),
                            e = this.Fpb(),
                            f = async function() {
                                c.set(e, d);
                                try {
                                    const g = await d.promise();
                                    return (0, __c.Ga)(g)
                                } catch (g) {
                                    return g instanceof s4b ? Ia(new T5({
                                        code: "internal_error",
                                        message: `Comms promise timed out (${a}).`
                                    })) : Ia(g)
                                } finally {
                                    c.delete(e)
                                }
                            }();
                        b = this.send(e, a, b);
                        b.ok || (this.H.Cb(b.error, {
                            pe: "unable to send request",
                            tags: new Map([
                                ["type", "request"],
                                ["path", a]
                            ])
                        }), d.reject(b.error));
                        return f
                    }
                    constructor(a, b) {
                        this.send = a;
                        this.H = b;
                        this.Fpb = __c.ks;
                        this.JUa =
                            new Map
                    }
                };
                var u4b = class {
                    handle(a, b) {
                        if (this.requestHandler.has(a)) throw new T5({
                            code: "internal_error",
                            message: `Handler for '${a}' is already defined.`
                        });
                        this.requestHandler.set(a, b)
                    }
                    constructor(a, b) {
                        var c = console;
                        this.W1 = a;
                        this.H = b;
                        this.Dpb = !0;
                        this.W$a = c;
                        this.requestHandler = new Map;
                        this.Sbb = new Set
                    }
                };
                var w4b = class {
                        constructor(a, b) {
                            this.request = (c, d) => this.client.request(c, d);
                            this.handle = (c, d) => this.requestHandler.handle(c, d);
                            a = new v4b(c => {
                                switch (c.type) {
                                    case "ack":
                                    case "error":
                                    case "response":
                                        var d = this.client;
                                        const e = c.requestId,
                                            f = c.type,
                                            g = d.JUa.get(e);
                                        if (g) switch (f) {
                                            case "response":
                                                g.resolve(c.Sl);
                                                break;
                                            case "ack":
                                                g.reset(2E4);
                                                break;
                                            case "error":
                                                g.reject(new T5({
                                                    code: c.code,
                                                    message: c.message
                                                }));
                                                break;
                                            default:
                                                throw new __c.E(c);
                                        } else f !== "ack" && d.H.error("request has already been handled and resolved or was not sent from this client", {
                                            tags: new Map([
                                                ["type", f],
                                                ["requestId", `${e}`]
                                            ])
                                        });
                                        break;
                                    case "request":
                                        V3b(this.requestHandler, c);
                                        break;
                                    default:
                                        throw new __c.E(c);
                                }
                            }, a, b.pg("bus"));
                            this.client = new t4b(a.Wy, b.pg("client"));
                            this.requestHandler = new u4b(a, b.pg("requestHandler"))
                        }
                    },
                    v4b = class {
                        constructor(a, b, c) {
                            this.Daa = a;
                            this.Wy = (d, e, f) => this.fY.send({
                                type: "request",
                                requestId: d,
                                path: e,
                                payload: f
                            });
                            this.Amb = d => {
                                switch (d.type) {
                                    case "ack":
                                        this.Daa({
                                            type: "ack",
                                            requestId: d.requestId
                                        });
                                        break;
                                    case "error":
                                        this.Daa({
                                            type: "error",
                                            requestId: d.requestId,
                                            code: d.code,
                                            message: d.message
                                        });
                                        break;
                                    case "response":
                                        this.Daa({
                                            type: "response",
                                            requestId: d.requestId,
                                            Sl: d.payload
                                        });
                                        break;
                                    case "request":
                                        this.Daa({
                                            type: "request",
                                            requestId: d.requestId,
                                            path: d.path,
                                            Sl: d.payload
                                        });
                                        break;
                                    default:
                                        throw new __c.E(d);
                                }
                            };
                            this.fY = new r4b({
                                Wob: this.Amb
                            }, b, c)
                        }
                    };
                var W3b = {
                    mCa: "null",
                    xXa: "*"
                };
                var a4b = "canva-dev.com canva-dev.cn canva-staging.com canva-staging.cn canva.com canva.cn canva-apps.com canva-apps.cn canva-apps-dev.com canva-apps-dev.cn canva-apps-staging.com canva-apps-staging.cn".split(" ");
                var b4b = class {
                    async oB(a, b) {
                        const {
                            port1: c,
                            port2: d
                        } = new MessageChannel;
                        var e = new w4b(c, this.H);
                        await $3b(d, this.H, a, window);
                        const f = new q4b(e, {
                            hfb: g => {
                                h4b(() => b.config = g.config);
                                return new O3b
                            }
                        });
                        e = g4b(() => b.config, async g => {
                            const h = await S3b(f, {
                                config: g
                            });
                            h.config && h.config !== g && h4b(() => b.config = h.config)
                        }, {
                            fireImmediately: !0
                        });
                        this.eh.set(a, e)
                    }
                    nU(a) {
                        var b;
                        (b = this.eh.get(a)) === null || b === void 0 || b();
                        this.eh.delete(a)
                    }
                    constructor(a) {
                        this.H = a;
                        this.eh = new Map
                    }
                };
                var x4b = __c.S5({
                    element: {
                        url: __c.R5("url", 0),
                        config: __c.R5("config", 1)
                    }
                });
                var y4b = __c.S5({
                    element: __c.V5
                });
                var z4b = e4b(function() {
                    return U5("div", {
                        style: {
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            backgroundColor: "#fFfFfF",
                            justifyContent: "center",
                            alignItems: "center"
                        },
                        children: "FORM V2 Widget"
                    })
                });
                var A4b = {
                    hH: function(a) {
                        return __c.Q5()(() => ({
                            element: __c.P5(a)
                        }))
                    }(d4b(() => U5(z4b, {
                        state: {}
                    }))),
                    iH: y4b
                };
                __c.BQa = {
                    Hgb: function(a) {
                        function b(e, f) {
                            const g = c.Egb(e, f.iH());
                            f = d.Dgb(e, g, f.hH());
                            return {
                                id: e,
                                ew: g,
                                yLb: f
                            }
                        }
                        const c = a.UCa,
                            d = a.n6;
                        return {
                            Azb: b("w:blueprint", l4b),
                            oBb: a.cbb ? Promise.all([__webpack_require__.me(697956).then(() => __c.B4b), __webpack_require__.me(411625).then(() => __c.C4b), __webpack_require__.me(305660).then(() => __c.D4b), __webpack_require__.me(696820).then(() => __c.E4b)]).then(([e, f, g, h]) => ({
                                kBb: b("w:demo-1", e),
                                lBb: b("w:demo-2", f),
                                mBb: b("w:demo-3", g),
                                nBb: b("w:demo-4", h)
                            })) : void 0,
                            dAb: b("w:codelet", {
                                iH: x4b,
                                hH: c4b({
                                    H: a.H
                                })
                            }),
                            form: b("w:form", A4b),
                            ANb: a.Abb ? b("w:3d", j4b) : void 0
                        }
                    }
                };
            }).call(self, self._7ccc7343da2ae983607b3819c7bc1f93);
        }

    }
])
//# sourceMappingURL=sourcemaps/e2bb389e34fc72af.js.map