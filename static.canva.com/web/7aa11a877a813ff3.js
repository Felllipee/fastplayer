(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [28646], {

        /***/
        82986: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(813110);
            __web_req__(914242);
            self._c68b74ff4d61aaeea4f241f0854f5b1a = self._c68b74ff4d61aaeea4f241f0854f5b1a || {};
            (function(__c) {
                var CO = __c.CO;
                var Y = __c.Y;
                var L = __c.L;
                var Fa = __c.Fa;
                var FGb, IGb, LGb, MGb, OGb, NGb, QGb, TGb, SGb, WGb, a7;
                __c.W6 = function(a) {
                    return {
                        type: 1,
                        Component: a
                    }
                };
                __c.X6 = function() {
                    return a => a
                };
                __c.Y6 = function(a, b, c) {
                    return {
                        key: a,
                        Tva: b,
                        type: "string",
                        TB: c,
                        Mta: 0
                    }
                };
                __c.Z6 = function(a) {
                    return () => ({ ...DGb,
                        ...a
                    })
                };
                FGb = function({
                    element: a
                }) {
                    var b = EGb.get(a.f5);
                    if (!b) throw Error(`Blueprint ${a.f5} not found`);
                    b = b.Tab.find(c => c.Lga === a.Lga);
                    if (!b) throw Error(`Variant ${a.Lga} not found for blueprint ${a.f5}`);
                    return {
                        Za: b.Za
                    }
                };
                IGb = function(a, b) {
                    var c = GGb,
                        d = HGb;
                    a.handle("SET_CONFIG", async e => {
                        if (e === void 0) throw new $6({
                            code: "internal_error",
                            message: "SET_CONFIG: request cannot be undefined."
                        });
                        e = c.deserialize(e);
                        e = await b(e);
                        if (d) return d.serialize(e)
                    })
                };
                LGb = async function(a, b) {
                    a = await a.Mla.request("RENDER_ELEMENT", JGb.serialize(b));
                    if (!a.ok) throw Error(`Encountered an error while sending ${"RENDER_ELEMENT"} request: ${a.error}`);
                    if (a.value == null) throw Error("RENDER_ELEMENT: Result cannot be empty");
                    return KGb.deserialize(a.value)
                };
                MGb = function(a) {
                    IGb(a.Mla, b => a.handler.uMa(b))
                };
                OGb = async function(a, b) {
                    const c = b.requestId,
                        d = b.path;
                    b = b.payload;
                    const e = a.requestHandler.get(d);
                    if (e) {
                        a.GQ.gN.send({
                            type: "ack",
                            requestId: c
                        });
                        var f = setInterval(() => a.GQ.gN.send({
                            type: "ack",
                            requestId: c
                        }), 9E3);
                        try {
                            var g = await e(b);
                            clearInterval(f);
                            a.GQ.gN.send({
                                type: "response",
                                requestId: c,
                                payload: g
                            })
                        } catch (k) {
                            clearInterval(f);
                            g = "internal_error";
                            b = "Something went wrong on our end, if this issue persists please contact us.";
                            if (k instanceof $6) {
                                var h = k;
                                k.code === "internal_error" ? a.M.ub(k, {
                                    pe: "Internal error in comms handler",
                                    tags: new Map([
                                        ["type", "request"],
                                        ["path", d]
                                    ])
                                }) : (g = k.code, b = k.cTa)
                            } else a.zTa ? a.M.ub(k, {
                                pe: "Unexpected error type thrown from comms handler",
                                tags: new Map([
                                    ["type", "request"],
                                    ["path", d]
                                ])
                            }) : a.AIa.error(k);
                            g = NGb(a.GQ, c, g, b);
                            g.ok || a.M.KN(g.error, {
                                pe: "unable to send error response",
                                tags: new Map([
                                    ["type", "request"],
                                    ["path", d]
                                ])
                            })
                        }
                        if (h != null)
                            for (const k of a.OJa) try {
                                k(h)
                            } catch (l) {
                                a.M.vT(l, {
                                    pe: "Error executing errorObserver"
                                })
                            }
                    } else h = NGb(a.GQ, c, "internal_error", `No request handler configured for path: "${d}".`),
                        h.ok || a.M.KN(h.error, {
                            pe: "unable to send error response",
                            tags: new Map([
                                ["type", "request"],
                                ["path", d]
                            ])
                        })
                };
                NGb = function(a, b, c, d) {
                    return a.gN.send({
                        type: "error",
                        requestId: b,
                        code: c,
                        message: d
                    })
                };
                QGb = function({
                    src: a,
                    srcdoc: b,
                    sandbox: c
                }) {
                    if (b.length !== 0 || !c.contains("allow-same-origin")) return PGb;
                    a = (new URL(a)).origin;
                    return a === "null" ? PGb : {
                        Hga: a,
                        Txa: a
                    }
                };
                TGb = async function(a, b, c, {
                    addEventListener: d,
                    removeEventListener: e
                } = window) {
                    const f = new RGb(6E4),
                        g = QGb(c),
                        h = c.contentWindow;
                    if (!h) throw new $6({
                        code: "internal_error",
                        message: "contentWindow is missing from iFrame"
                    });
                    c = ({
                        data: k,
                        source: l,
                        origin: m
                    }) => {
                        var n;
                        (k === null || k === void 0 ? 0 : (n = k.source) === null || n === void 0 ? 0 : n.startsWith("react-")) || (m !== g.Hga ? SGb(m) || b.info("received message event from an unexpected origin", {
                            extra: new Map([
                                ["expected", g.Hga],
                                ["actual", m]
                            ])
                        }) : l !== h ? l !== window && b.info("source and content window do not match", {
                            extra: new Map([
                                ["data.source", k === null || k === void 0 ? void 0 : k.source]
                            ])
                        }) : (l = k ? k.source ? k.source !== "iframe" ? Fa("invalid source") : (0, __c.Ea)() : Fa("'source' is missing in MessageEvent data object") : Fa("missing 'data' field in MessageEvent"), l.ok ? (h.postMessage({
                            source: "parent"
                        }, g.Txa, [a]), f.resolve(void 0)) : b.K2(l.error, {
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
                SGb = function(a) {
                    return UGb.some(b => a.endsWith(b))
                };
                WGb = function({
                    M: a
                }) {
                    const b = new VGb(a);
                    return __c.X6()(() => ({
                        element: __c.W6(({
                            data: {
                                element: c
                            },
                            xz: {
                                nDa: d
                            }
                        }) => a7(d, {
                            url: c.url,
                            jv: e => b.jv(e, c),
                            pK: e => b.pK(e)
                        }))
                    }))
                };
                __c.yd.prototype.KN = __c.ca(3, function(a, b) {
                    this.console.error(...__c.Zc(this, "critical", a, b))
                });
                __c.zd.prototype.KN = __c.ca(2, function(a, b) {
                    __c.xd(this, "fatal", a, b)
                });
                __c.b7 = {};
                a7 = __webpack_require__(443763).jsx;
                var XGb = __webpack_require__(446474).Pi;
                var YGb = __webpack_require__(875604).memo;
                var c7 = __webpack_require__(519427),
                    ZGb = c7.ObservableMap,
                    $Gb = c7.reaction,
                    aHb = c7.runInAction;
                var DGb = Object.freeze({
                    document: Object.freeze({}),
                    element: Object.freeze({})
                });
                var bHb = __c.Z6({
                        element: __c.b7
                    }),
                    cHb = {
                        uA: __c.X6()(() => ({
                            element: __c.W6(XGb(() => a7("div", {
                                children: "3D Widget"
                            })))
                        })),
                        vA: bHb
                    };
                var EGb = new ZGb,
                    dHb = __c.Z6({
                        element: {
                            f5: __c.Y6("blueprintId", 0),
                            Lga: __c.Y6("variantId", 0)
                        }
                    });
                var eHb = {
                    uA: __c.X6()(() => ({
                        element: {
                            type: 0,
                            Jw: FGb
                        }
                    })),
                    vA: dHb
                };
                var $6 = class extends Error {
                    constructor(a) {
                        a.code = a.code;
                        const b = a.message.endsWith(".") ? "" : ".";
                        super(`[${a.code}]:  ${a.message}${b}`.trim());
                        this.code = a.code;
                        this.name = "CanvaError";
                        this.cTa = a.message;
                        Object.setPrototypeOf(this, $6.prototype)
                    }
                };
                var JGb = L(() => ({
                    config: __c.Z(1)
                }));
                var fHb = L(() => ({
                    color: Y(1)
                }));
                var gHb = L(() => ({
                    type: __c.I("A?", 1, "RECOLORABLE"),
                    id: Y(1),
                    value: __c.Pa(2, fHb)
                }));
                var hHb = L(() => ({
                    borderRadius: CO(1),
                    borderWidth: CO(2)
                }));
                var iHb = L(() => ({
                    type: __c.I("A?", 2, "BORDERABLE"),
                    id: Y(1),
                    value: __c.Pa(2, hHb)
                }));
                var KGb = L(() => ({
                    config: Y(1),
                    width: CO(2),
                    height: CO(3),
                    NK: __c.Ra(4, gHb),
                    OFa: __c.Ra(5, iHb)
                }));
                var GGb = L(() => ({
                    config: Y(1),
                    width: CO(2),
                    height: CO(3),
                    NK: __c.Ra(4, gHb),
                    OFa: __c.Ra(5, iHb)
                }));
                var HGb = L(() => ({}));
                var jHb = class {
                    constructor(a, b) {
                        this.Mla = a;
                        this.handler = b;
                        MGb(this)
                    }
                };
                var kHb = class {
                    constructor(a, b, c) {
                        this.handler = a;
                        this.port = b;
                        this.M = c;
                        this.send = d => {
                            try {
                                return this.port.postMessage(d), (0, __c.Ea)()
                            } catch (e) {
                                return this.M.ub(e), Fa(e)
                            }
                        };
                        this.DRa = d => {
                            this.M.ub(d)
                        };
                        this.CRa = ({
                            data: d
                        }) => {
                            if (d) try {
                                this.handler.receive(d)
                            } catch (e) {
                                this.M.ub(e)
                            } else this.M.error(new $6({
                                code: "internal_error",
                                message: "missing data in 'MessageEvent'"
                            }))
                        };
                        this.port.onmessage = this.CRa;
                        this.port.onmessageerror = this.DRa
                    }
                };
                var lHb = class extends Error {
                        constructor() {
                            super("[internal_error] Comms promise timed out.")
                        }
                    },
                    RGb = class {
                        reset(a) {
                            a && (this.timeoutMs = a);
                            this.setTimeout()
                        }
                        resolve(a) {
                            clearTimeout(this.hf);
                            this.ETa(a)
                        }
                        reject(a) {
                            clearTimeout(this.hf);
                            this.Kwa(a)
                        }
                        promise() {
                            return this.p
                        }
                        setTimeout() {
                            clearTimeout(this.hf);
                            this.hf = setTimeout(() => {
                                this.Kwa(new lHb)
                            }, this.timeoutMs)
                        }
                        constructor(a) {
                            this.timeoutMs = a;
                            this.p = new Promise((b, c) => {
                                this.ETa = b;
                                this.Kwa = c
                            });
                            this.setTimeout()
                        }
                    };
                var mHb = class {
                    request(a, b) {
                        const c = this.Eva,
                            d = new RGb(5E3),
                            e = this.ATa(),
                            f = async function() {
                                c.set(e, d);
                                try {
                                    const g = await d.promise();
                                    return (0, __c.Ea)(g)
                                } catch (g) {
                                    return g instanceof lHb ? Fa(new $6({
                                        code: "internal_error",
                                        message: `Comms promise timed out (${a}).`
                                    })) : Fa(g)
                                } finally {
                                    c.delete(e)
                                }
                            }();
                        b = this.send(e, a, b);
                        b.ok || (this.M.ub(b.error, {
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
                        this.M = b;
                        this.ATa = __c.$c;
                        this.Eva =
                            new Map
                    }
                };
                var nHb = class {
                    handle(a, b) {
                        if (this.requestHandler.has(a)) throw new $6({
                            code: "internal_error",
                            message: `Handler for '${a}' is already defined.`
                        });
                        this.requestHandler.set(a, b)
                    }
                    constructor(a, b) {
                        var c = console;
                        this.GQ = a;
                        this.M = b;
                        this.zTa = !0;
                        this.AIa = c;
                        this.requestHandler = new Map;
                        this.OJa = new Set
                    }
                };
                var pHb = class {
                        constructor(a, b) {
                            this.request = (c, d) => this.client.request(c, d);
                            this.handle = (c, d) => this.requestHandler.handle(c, d);
                            a = new oHb(c => {
                                switch (c.type) {
                                    case "ack":
                                    case "error":
                                    case "response":
                                        var d = this.client;
                                        const e = c.requestId,
                                            f = c.type,
                                            g = d.Eva.get(e);
                                        if (g) switch (f) {
                                            case "response":
                                                g.resolve(c.payload);
                                                break;
                                            case "ack":
                                                g.reset(2E4);
                                                break;
                                            case "error":
                                                g.reject(new $6({
                                                    code: c.code,
                                                    message: c.message
                                                }));
                                                break;
                                            default:
                                                throw new __c.E(c);
                                        } else f !== "ack" && d.M.error("request has already been handled and resolved or was not sent from this client", {
                                            tags: new Map([
                                                ["type", f],
                                                ["requestId", `${e}`]
                                            ])
                                        });
                                        break;
                                    case "request":
                                        OGb(this.requestHandler, c);
                                        break;
                                    default:
                                        throw new __c.E(c);
                                }
                            }, a, b.Yk("bus"));
                            this.client = new mHb(a.My, b.Yk("client"));
                            this.requestHandler = new nHb(a, b.Yk("requestHandler"))
                        }
                    },
                    oHb = class {
                        constructor(a, b, c) {
                            this.KX = a;
                            this.My = (d, e, f) => this.gN.send({
                                type: "request",
                                requestId: d,
                                path: e,
                                payload: f
                            });
                            this.KRa = d => {
                                switch (d.type) {
                                    case "ack":
                                        this.KX({
                                            type: "ack",
                                            requestId: d.requestId
                                        });
                                        break;
                                    case "error":
                                        this.KX({
                                            type: "error",
                                            requestId: d.requestId,
                                            code: d.code,
                                            message: d.message
                                        });
                                        break;
                                    case "response":
                                        this.KX({
                                            type: "response",
                                            requestId: d.requestId,
                                            payload: d.payload
                                        });
                                        break;
                                    case "request":
                                        this.KX({
                                            type: "request",
                                            requestId: d.requestId,
                                            path: d.path,
                                            payload: d.payload
                                        });
                                        break;
                                    default:
                                        throw new __c.E(d);
                                }
                            };
                            this.gN = new kHb({
                                receive: this.KRa
                            }, b, c)
                        }
                    };
                var PGb = {
                    Hga: "null",
                    Txa: "*"
                };
                var UGb = "canva-dev.com canva-dev.cn canva-staging.com canva-staging.cn canva.com canva.cn canva-apps.com canva-apps.cn canva-apps-dev.com canva-apps-dev.cn canva-apps-staging.com canva-apps-staging.cn".split(" ");
                var VGb = class {
                    async jv(a, b) {
                        const {
                            port1: c,
                            port2: d
                        } = new MessageChannel;
                        var e = new pHb(c, this.M);
                        await TGb(d, this.M, a, window);
                        const f = new jHb(e, {
                            uMa: g => {
                                aHb(() => b.config = g.config);
                                return new HGb
                            }
                        });
                        e = $Gb(() => b.config, async g => {
                            const h = await LGb(f, {
                                config: g
                            });
                            h.config && h.config !== g && aHb(() => b.config = h.config)
                        }, {
                            fireImmediately: !0
                        });
                        this.bs.set(a, e)
                    }
                    pK(a) {
                        var b;
                        (b = this.bs.get(a)) === null || b === void 0 || b();
                        this.bs.delete(a)
                    }
                    constructor(a) {
                        this.M = a;
                        this.bs = new Map
                    }
                };
                var qHb = __c.Z6({
                    element: {
                        url: __c.Y6("url", 0),
                        config: __c.Y6("config", 1)
                    }
                });
                var rHb = __c.Z6({
                    element: __c.b7
                });
                var sHb = YGb(function() {
                    return a7("div", {
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
                var tHb = {
                    uA: function(a) {
                        return __c.X6()(() => ({
                            element: __c.W6(a)
                        }))
                    }(XGb(() => a7(sHb, {
                        state: {}
                    }))),
                    vA: rHb
                };
                __c.hAa = {
                    MNa: function(a) {
                        function b(e, f) {
                            const g = c.INa(e, f.vA());
                            f = d.HNa(e, g, f.uA());
                            return {
                                id: e,
                                jt: g,
                                F9a: f
                            }
                        }
                        const c = a.kha,
                            d = a.yT;
                        return {
                            A0a: b("w:blueprint", eHb),
                            T1a: a.lJa ? Promise.all([__webpack_require__.me(697956).then(() => __c.uHb), __webpack_require__.me(411625).then(() => __c.vHb), __webpack_require__.me(305660).then(() => __c.wHb), __webpack_require__.me(696820).then(() => __c.xHb)]).then(([e, f, g, h]) => ({
                                P1a: b("w:demo-1", e),
                                Q1a: b("w:demo-2", f),
                                R1a: b("w:demo-3", g),
                                S1a: b("w:demo-4", h)
                            })) : void 0,
                            a1a: b("w:codelet", {
                                vA: qHb,
                                uA: WGb({
                                    M: a.M
                                })
                            }),
                            form: b("w:form", tHb),
                            hab: a.AJa ? b("w:3d", cHb) : void 0
                        }
                    }
                };
            }).call(self, self._c68b74ff4d61aaeea4f241f0854f5b1a);
        }

    }
])
//# sourceMappingURL=sourcemaps/7aa11a877a813ff3.js.map