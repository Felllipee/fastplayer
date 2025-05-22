(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [10857], {

        /***/
        372964: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(813110);
            self._7ccc7343da2ae983607b3819c7bc1f93 = self._7ccc7343da2ae983607b3819c7bc1f93 || {};
            (function(__c) {
                var N6b = function(a) {
                        a.QK && (a.QK(), a.QK = null);
                        const b = a.props.uab;
                        b.forEach(c => {
                            window.addEventListener(c, a.cFa)
                        });
                        a.QK = () => {
                            b.forEach(c => {
                                window.removeEventListener(c, a.cFa)
                            })
                        }
                    },
                    D6 = __webpack_require__(443763).jsx;
                var O6b = __webpack_require__(875604),
                    P6b = O6b.Component,
                    Q6b = O6b.useState;
                var R6b = __webpack_require__(519427),
                    E6 = R6b.action,
                    S6b = R6b.observable;
                var T6b = __webpack_require__(446474).Pi;
                var U6b = class extends P6b {
                    render() {
                        const {
                            children: a,
                            component: b = "div",
                            Sob: c,
                            Ada: d
                        } = this.props;
                        let e = {};
                        d && (e = c.reduce((f, g) => {
                            f[g] = this.l5a;
                            return f
                        }, {}));
                        return D6(b, {
                            className: "_kI3Pw",
                            ...e,
                            children: a
                        })
                    }
                    componentDidMount() {
                        this.props.Ada && N6b(this)
                    }
                    componentDidUpdate() {
                        this.props.Ada && N6b(this)
                    }
                    componentWillUnmount() {
                        this.QK && (this.QK(), this.QK = null)
                    }
                    constructor(...a) {
                        super(...a);
                        this.Wja = this.QK = null;
                        this.l5a = b => {
                            this.Wja = b.nativeEvent
                        };
                        this.cFa = b => {
                            const c = this.props.Ada,
                                d = this.Wja === b;
                            c && !d &&
                                c(b);
                            this.Wja = null
                        }
                    }
                };
                var V6b = a => D6(U6b, {
                    Sob: ["onMouseDown", "onTouchStart"],
                    uab: ["mousedown", "touchstart"],
                    Ada: a.t2,
                    children: a.children
                });
                var W6b = class {
                        static A(a) {
                            __c.P(a, {
                                so: S6b.ref
                            })
                        }
                        constructor() {
                            this.so = (W6b.A(this), !0)
                        }
                    },
                    X6b = class {
                        static A(a) {
                            __c.P(a, {
                                onDoubleClick: E6.bound,
                                onTouchEnd: E6.bound,
                                reset: E6.bound
                            })
                        }
                        onDoubleClick() {
                            this.store.so = !1
                        }
                        onTouchEnd(a) {
                            a.touches.length > 0 || (this.gP ? (window.clearTimeout(this.gP), this.gP = void 0, this.store.so = !1) : this.gP = window.setTimeout(() => this.gP = void 0, 300))
                        }
                        reset() {
                            this.store.so = !0
                        }
                        vR() {
                            this.gP && window.clearTimeout(this.gP)
                        }
                        constructor(a) {
                            this.store = a;
                            this.gP = (X6b.A(this), void 0)
                        }
                    };
                var Y6b = T6b(a => {
                    const [{
                        store: b,
                        va: c
                    }] = Q6b(() => {
                        const d = new W6b,
                            e = new X6b(d);
                        return {
                            store: d,
                            va: e
                        }
                    });
                    return D6(V6b, {
                        t2: c.reset,
                        children: D6(__c.Tpb, {
                            Lgb: c,
                            Mgb: b,
                            SOa: a.ov.contains(a.url),
                            children: ({
                                so: d
                            }) => D6(__c.nC, {
                                url: a.url,
                                store: a.ov,
                                Yn: a.kt,
                                Bx: a.Bx,
                                Um: a.Um,
                                so: d,
                                oB: a.oB,
                                nU: a.nU
                            })
                        })
                    })
                });
                __c.zQa = {
                    Igb: function(a) {
                        const b = (c, d) => a.H.error(c, {
                            pe: "widget: ",
                            extra: new Map(Object.entries(d))
                        });
                        return {
                            O3a: c => D6(Y6b, { ...c,
                                Um: a.Um,
                                ov: a.ov,
                                kt: a.kt,
                                Bx: b
                            })
                        }
                    }
                };
            }).call(self, self._7ccc7343da2ae983607b3819c7bc1f93);
        }

    }
])
//# sourceMappingURL=sourcemaps/4dad489fff4f268e.js.map