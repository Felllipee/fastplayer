(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [12742], {

        /***/
        372964: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(813110);
            self._c68b74ff4d61aaeea4f241f0854f5b1a = self._c68b74ff4d61aaeea4f241f0854f5b1a || {};
            (function(__c) {
                var GJb = function(a) {
                        a.cD && (a.cD(), a.cD = null);
                        const b = a.props.MIa;
                        b.forEach(c => {
                            window.addEventListener(c, a.$ia)
                        });
                        a.cD = () => {
                            b.forEach(c => {
                                window.removeEventListener(c, a.$ia)
                            })
                        }
                    },
                    K7 = __webpack_require__(443763).jsx;
                var HJb = __webpack_require__(875604),
                    IJb = HJb.Component,
                    JJb = HJb.useState;
                var KJb = __webpack_require__(519427),
                    L7 = KJb.action,
                    LJb = KJb.observable;
                var MJb = __webpack_require__(446474).Pi;
                var NJb = class extends IJb {
                    render() {
                        const {
                            children: a,
                            component: b = "div",
                            dTa: c,
                            GZ: d
                        } = this.props;
                        let e = {};
                        d && (e = c.reduce((f, g) => {
                            f[g] = this.$Da;
                            return f
                        }, {}));
                        return K7(b, {
                            className: "_kI3Pw",
                            ...e,
                            children: a
                        })
                    }
                    componentDidMount() {
                        this.props.GZ && GJb(this)
                    }
                    componentDidUpdate() {
                        this.props.GZ && GJb(this)
                    }
                    componentWillUnmount() {
                        this.cD && (this.cD(), this.cD = null)
                    }
                    constructor(...a) {
                        super(...a);
                        this.f4 = this.cD = null;
                        this.$Da = b => {
                            this.f4 = b.nativeEvent
                        };
                        this.$ia = b => {
                            const c = this.props.GZ,
                                d = this.f4 === b;
                            c && !d && c(b);
                            this.f4 = null
                        }
                    }
                };
                var OJb = a => K7(NJb, {
                    dTa: ["onMouseDown", "onTouchStart"],
                    MIa: ["mousedown", "touchstart"],
                    GZ: a.vua,
                    children: a.children
                });
                var PJb = class {
                        static A(a) {
                            __c.P(a, {
                                Rk: LJb.ref
                            })
                        }
                        constructor() {
                            this.Rk = (PJb.A(this), !0)
                        }
                    },
                    QJb = class {
                        static A(a) {
                            __c.P(a, {
                                onDoubleClick: L7.bound,
                                onTouchEnd: L7.bound,
                                reset: L7.bound
                            })
                        }
                        onDoubleClick() {
                            this.store.Rk = !1
                        }
                        onTouchEnd(a) {
                            a.touches.length > 0 || (this.OG ? (window.clearTimeout(this.OG), this.OG = void 0, this.store.Rk = !1) : this.OG = window.setTimeout(() => this.OG = void 0, 300))
                        }
                        reset() {
                            this.store.Rk = !0
                        }
                        qI() {
                            this.OG && window.clearTimeout(this.OG)
                        }
                        constructor(a) {
                            this.store = a;
                            this.OG = (QJb.A(this), void 0)
                        }
                    };
                var RJb = MJb(a => {
                    const [{
                        store: b,
                        Ba: c
                    }] = JJb(() => {
                        const d = new PJb,
                            e = new QJb(d);
                        return {
                            store: d,
                            Ba: e
                        }
                    });
                    return K7(OJb, {
                        vua: c.reset,
                        children: K7(__c.o5a, {
                            QNa: c,
                            RNa: b,
                            fra: a.qq.contains(a.url),
                            children: ({
                                Rk: d
                            }) => K7(__c.bG, {
                                url: a.url,
                                store: a.qq,
                                Ck: a.gs,
                                Au: a.Au,
                                Qm: a.Qm,
                                Rk: d,
                                jv: a.jv,
                                pK: a.pK
                            })
                        })
                    })
                });
                __c.fAa = {
                    NNa: function(a) {
                        const b = (c, d) => a.M.error(c, {
                            pe: "widget: ",
                            extra: new Map(Object.entries(d))
                        });
                        return {
                            nDa: c => K7(RJb, { ...c,
                                Qm: a.Qm,
                                qq: a.qq,
                                gs: a.gs,
                                Au: b
                            })
                        }
                    }
                };
            }).call(self, self._c68b74ff4d61aaeea4f241f0854f5b1a);
        }

    }
])
//# sourceMappingURL=sourcemaps/0d48ca9373f48ca6.js.map