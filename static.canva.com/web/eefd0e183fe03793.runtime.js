(() => {
    "use strict";
    var e, r, t, f, n, s = {},
        i = {};

    function c(e) {
        var r = i[e];
        if (void 0 !== r) return r.exports;
        var t = i[e] = {
            id: e,
            loaded: !1,
            exports: {}
        };
        return s[e].call(t.exports, t, t.exports, c), t.loaded = !0, t.exports
    }
    c.m = s, c.amdD = function() {
        throw new Error("define cannot be used indirect")
    }, c.amdO = {}, e = [], c.O = (r, t, f, n) => {
        if (!t) {
            var s = 1 / 0;
            for (d = 0; d < e.length; d++) {
                for (var [t, f, n] = e[d], i = !0, a = 0; a < t.length; a++)
                    if ((!1 & n || s >= n) && Object.keys(c.O).every((e => c.O[e](t[a])))) t.splice(a--, 1);
                    else if (i = !1, n < s) s = n;
                if (i) {
                    e.splice(d--, 1);
                    var u = f();
                    if (void 0 !== u) r = u
                }
            }
            return r
        } else {
            n = n || 0;
            for (var d = e.length; d > 0 && e[d - 1][2] > n; d--) e[d] = e[d - 1];
            e[d] = [t, f, n]
        }
    }, c.n = e => {
        var r = e && e.__esModule ? () => e.default : () => e;
        return c.d(r, {
            a: r
        }), r
    }, t = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, c.t = function(e, f) {
        if (1 & f) e = this(e);
        if (8 & f) return e;
        if ("object" == typeof e && e) {
            if (4 & f && e.__esModule) return e;
            if (16 & f && "function" == typeof e.then) return e
        }
        var n = Object.create(null);
        c.r(n);
        var s = {};
        r = r || [null, t({}), t([]), t(t)];
        for (var i = 2 & f && e;
            "object" == typeof i && !~r.indexOf(i); i = t(i)) Object.getOwnPropertyNames(i).forEach((r => s[r] = () => e[r]));
        return s.default = () => e, c.d(n, s), n
    }, c.d = (e, r) => {
        for (var t in r)
            if (c.o(r, t) && !c.o(e, t)) Object.defineProperty(e, t, {
                enumerable: !0,
                get: r[t]
            })
    }, c.f = {}, c.e = e => Promise.all(Object.keys(c.f).reduce(((r, t) => (c.f[t](e, r), r)), [])), c.u = e => {
        if (50869 === e) return "2133805b8ffe68e5.js";
        if (61454 === e) return "048252aca513298a.vendor.js";
        if (68772 === e) return "68f927d4d76307b6.vendor.js";
        if (71059 === e) return "2a9247934f9f240b.js";
        if (50971 === e) return "39fb2f07becb1490.js";
        if (12742 === e) return "0d48ca9373f48ca6.js";
        if (21023 === e) return "d9d42a7d65a05375.js";
        if (30270 === e) return "870ca2cb27b159ab.js";
        if (32915 === e) return "7716b010c9f76c29.js";
        if (28646 === e) return "7aa11a877a813ff3.js";
        if (12942 === e) return "34c1c039b9a7ab84.js";
        if (49830 === e) return "fc080a6b8857e3bb.js";
        if (39314 === e) return "5e989defdc344afb.js";
        if (85225 === e) return "630c9ae2efbb7a86.vendor.js";
        if (45085 === e) return "6d52d6d7772ae986.js";
        if (61615 === e) return "bfe6ac4a4992b1d1.js";
        if (52358 === e) return "179be3cd70505320.js";
        if (52356 === e) return "fb5351c53c92f2f7.js";
        if (49392 === e) return "b9bffe683353f516.js";
        if (70665 === e) return "b75bdcc1c05df01e.js";
        if (81623 === e) return "4527e4d9bb2e2a24.js";
        if (97751 === e) return "8d30298992d9c1cd.js";
        if (48376 === e) return "09fee69600cf00b4.js";
        if (63891 === e) return "6a48ac5d11206688.js";
        if (47604 === e) return "25e8945b41b90890.js";
        if (6151 === e) return "2499421be4b62a11.js";
        if (61442 === e) return "4fd28fa2a52ce6e4.js";
        if (29046 === e) return "c5d3b53945c76504.js";
        if (10412 === e) return "801f0bdbd150df77.js";
        if (3465 === e) return "a45b25759a78ea2e.js";
        if (83191 === e) return "8e793c2e78aac958.js";
        if (32255 === e) return "a83f6b391fd45784.js";
        if (33581 === e) return "7dbd706cf86dc04b.js";
        if (73539 === e) return "1dc6010daa3ea356.js";
        if (35672 === e) return "c0108afddf9242a6.js";
        if (83126 === e) return "c18acd914b0010ca.js";
        if (49210 === e) return "385dd01105f63ca5.js";
        if (49350 === e) return "4c13b2a934445769.js";
        if (42283 === e) return "c50435bdbba9416d.js";
        if (89840 === e) return "1c99c202b274472d.js";
        if (10785 === e) return "6f9beed6832fdbdc.js";
        if (42617 === e) return "c894399a989b8858.js";
        if (19326 === e) return "5790669fd0fd0058.js";
        if (25360 === e) return "dd56e73c4ee77071.js";
        if (15816 === e) return "a36b54f0079bd0eb.js";
        if (83785 === e) return "0d184f06c555e9c6.js";
        if (98384 === e) return "803d4edfd5167a3b.js";
        if (39927 === e) return "a16f2b1647fdeddf.js";
        if (30203 === e) return "291daec81778399a.js";
        if (58899 === e) return "415708416016649f.js";
        if (80978 === e) return "799d2e222d4d77be.js";
        if (34449 === e) return "83086b9c7aef3f1f.js";
        if (5925 === e) return "a0641143fb930cd4.js";
        if (52595 === e) return "72611b426a13b29d.js";
        if (39412 === e) return "89e44842ae741872.js";
        if (70038 === e) return "a93d25404ec7fe2e.js";
        if (21877 === e) return "fe68f2a22eb7e866.js";
        if (12894 === e) return "dc155dba9dcc61aa.js";
        if (44374 === e) return "5a4b5f5661a1f53d.js";
        if (67587 === e) return "11030b6959000bff.js";
        if (38207 === e) return "31cdc3d0f6f6fde2.js";
        if (99925 === e) return "9df8eb860c4840b0.js";
        if (46384 === e) return "cd9a7c4a21f13d87.js";
        if (67896 === e) return "d11a4b7290967124.js";
        if (84151 === e) return "f1de7fa5eaa8cf32.js";
        if (63963 === e) return "6fddb9131130bce0.js";
        if (61372 === e) return "dede2d6f074ced32.js";
        if (14433 === e) return "3c9aa32715202dbe.js";
        if (63299 === e) return "210e796b9e0e08a2.js";
        if (90063 === e) return "24444e551f583ab6.js";
        if (68255 === e) return "50c115cf5ea4ced3.js";
        if (10188 === e) return "8f154d2eda56e960.js";
        if (58911 === e) return "14ff743f3802a938.js";
        if (20284 === e) return "d9f726e695f3bc0c.js";
        if (67810 === e) return "44ad2f275c678c38.js";
        if (77367 === e) return "e8f71cf716029288.js";
        if (69774 === e) return "afc58052d4b4c0cf.js";
        if (46492 === e) return "1db05b4b7b313b45.js";
        if (85140 === e) return "52b46a501aea3ed2.js";
        if (27172 === e) return "6cd3fbea045f9cee.js";
        if (97412 === e) return "49c7f05396359f89.js";
        if (87669 === e) return "dafce6840eb801c3.js";
        if (99137 === e) return "5cfdf954ce83fb57.js";
        if (57257 === e) return "1a939bcee5b9686e.js";
        if (22221 === e) return "d6e6efbebad5e48f.js";
        if (83296 === e) return "da9a6ebe68fcd56a.js";
        if (79101 === e) return "809a0f635618d33c.js";
        if (38423 === e) return "ff4128034d5e35c3.js";
        if (28338 === e) return "e0b74e5b23be984e.js";
        if (26271 === e) return "08f2fa7e27f35473.js";
        if (61433 === e) return "16fa81bf29b95ca6.js";
        if (49235 === e) return "fb2ece31de4fa2a0.js";
        if (19750 === e) return "d8c4031909d3d855.js";
        if (65133 === e) return "382310eeb4e5ad69.js";
        if (10242 === e) return "99c88c95a5fa297b.js";
        if (19827 === e) return "5427648d65fcb663.js";
        if (25119 === e) return "496c8047fa7687f5.js";
        if (20520 === e) return "3007252cdac8515d.js";
        if (80117 === e) return "8466219d29412dee.js";
        if (92815 === e) return "03b2a37b02ceb822.js";
        if (35011 === e) return "695e5bb2a46ef9ee.js";
        if (59981 === e) return "e49518b0eab699fb.vendor.js";
        if (2956 === e) return "2b48f39ef3d88294.vendor.js";
        if (45699 === e) return "e2820cd69800011e.js";
        if (45366 === e) return "7cdcd7b0a429cbae.vendor.js";
        if (21829 === e) return "6ad2d37568d35ef4.js";
        if (56782 === e) return "da9a4a79b1dcc3e6.js";
        if (50634 === e) return "c455d162dc3588db.js";
        if (87246 === e) return "0fb4482af1070826.js";
        if (38660 === e) return "9063cedc4cd439b1.js";
        if (60650 === e) return "d6e25c169996fcde.js";
        if (87911 === e) return "31e91d7cf630bdaf.js";
        if (37438 === e) return "3d9baf3ebe0746f7.js";
        if (73825 === e) return "c439f113b419f18a.js";
        if (57914 === e) return "c2652cf222549f7b.js";
        if (37906 === e) return "673bc34d9895da2e.js";
        if (77181 === e) return "ea48da9063e2751d.js";
        if (19656 === e) return "ebe7b7b17e7afd15.js";
        if (76301 === e) return "80b03bf3435971d7.js";
        if (32901 === e) return "c725e78db0749b8b.js";
        if (24459 === e) return "a00c2bb59ce5a637.js";
        if (1794 === e) return "a0ac1498bab88d3d.js";
        if (96826 === e) return "c98064e9889c02b9.vendor.js";
        if (47798 === e) return "4bbe002d1ebfb1c9.js";
        if (14408 === e) return "4f782ba1107a93bb.js";
        if (91969 === e) return "094f9823cb208119.js";
        if (89303 === e) return "b8ce26fd07bc890b.js";
        if (57399 === e) return "26fda57dc07df049.js";
        if (19289 === e) return "6c978a0ec0acce1e.js";
        if (60205 === e) return "769b0209afc9eadf.js";
        if (13794 === e) return "2d395eae5a8b1220.js";
        if (10316 === e) return "ad6c0c7c124d5614.js";
        if (61316 === e) return "bbe0b946ecdeee0c.js";
        if (47523 === e) return "a77fb43fe0974cfa.js";
        if (2906 === e) return "4360f2fb9d0763c1.js";
        if (4450 === e) return "9fd6bdd434731fe9.js";
        if (45749 === e) return "a3d9e147df115e26.js";
        if (50463 === e) return "3306fe457aff725c.js";
        if (38734 === e) return "e650b3683e8a526a.js";
        if (47510 === e) return "8afff203316f9822.js";
        if (218 === e) return "7921c997596d2d96.js";
        if (68629 === e) return "2c8abc209248ecd5.js";
        if (61161 === e) return "17d38ec45d94cac6.js";
        if (16621 === e) return "d76eb9ec6b24764a.js";
        if (13073 === e) return "e368aa53cfc7a9bf.js";
        if (53256 === e) return "c293752976487ea3.js";
        if (14902 === e) return "26daa8f2a3755421.js";
        if (14955 === e) return "a34a759d07eb2a12.js"
    }, c.miniCssF = e => {
        if (50869 === e) return "d47fa7f5e61148d4.ltr.css";
        if ({
                61454: 1,
                68772: 1,
                85225: 1,
                59981: 1,
                2956: 1,
                45366: 1,
                96826: 1
            }[e]) return "ef46db3751d8e999.vendor.ltr.css";
        if ({
                71059: 1,
                21023: 1,
                30270: 1,
                32915: 1,
                28646: 1,
                12942: 1,
                49830: 1,
                39314: 1,
                45085: 1,
                61615: 1,
                52358: 1,
                52356: 1,
                70665: 1,
                81623: 1,
                97751: 1,
                48376: 1,
                63891: 1,
                47604: 1,
                6151: 1,
                61442: 1,
                10412: 1,
                3465: 1,
                83191: 1,
                32255: 1,
                33581: 1,
                73539: 1,
                35672: 1,
                83126: 1,
                49350: 1,
                42283: 1,
                89840: 1,
                10785: 1,
                42617: 1,
                19326: 1,
                25360: 1,
                15816: 1,
                83785: 1,
                98384: 1,
                39927: 1,
                30203: 1,
                58899: 1,
                80978: 1,
                34449: 1,
                5925: 1,
                52595: 1,
                39412: 1,
                70038: 1,
                21877: 1,
                12894: 1,
                44374: 1,
                67587: 1,
                38207: 1,
                99925: 1,
                46384: 1,
                67896: 1,
                84151: 1,
                63963: 1,
                61372: 1,
                14433: 1,
                63299: 1,
                90063: 1,
                68255: 1,
                10188: 1,
                58911: 1,
                20284: 1,
                67810: 1,
                77367: 1,
                69774: 1,
                46492: 1,
                85140: 1,
                27172: 1,
                97412: 1,
                87669: 1,
                99137: 1,
                57257: 1,
                22221: 1,
                83296: 1,
                79101: 1,
                38423: 1,
                26271: 1,
                61433: 1,
                49235: 1,
                19750: 1,
                10242: 1,
                19827: 1,
                25119: 1,
                92815: 1,
                45699: 1,
                21829: 1,
                56782: 1,
                87246: 1,
                38660: 1,
                60650: 1,
                87911: 1,
                37438: 1,
                73825: 1,
                57914: 1,
                37906: 1,
                77181: 1,
                19656: 1,
                32901: 1,
                24459: 1,
                47798: 1,
                89303: 1,
                57399: 1,
                19289: 1,
                13794: 1,
                10316: 1,
                61316: 1,
                47523: 1,
                2906: 1,
                4450: 1,
                45749: 1,
                50463: 1,
                38734: 1,
                47510: 1,
                218: 1,
                68629: 1,
                61161: 1,
                16621: 1,
                13073: 1,
                53256: 1,
                14902: 1,
                14955: 1
            }[e]) return "ef46db3751d8e999.ltr.css";
        if (50971 === e) return "638e8938c76a575e.ltr.css";
        if (12742 === e) return "784ade8bd24ba7d6.ltr.css";
        if (49392 === e) return "e71066744fca056b.ltr.css";
        if (29046 === e) return "f6e522ba1b73f662.ltr.css";
        if (49210 === e) return "5f1d4839e07de62c.ltr.css";
        if (28338 === e) return "71dec1f5d11e3f66.ltr.css";
        if (65133 === e) return "05624d166fe81780.ltr.css";
        if (20520 === e) return "f8678f5d2a496896.ltr.css";
        if (80117 === e) return "aed61a49fdfc513b.ltr.css";
        if (35011 === e) return "ca10385ab7f3657c.ltr.css";
        if (50634 === e) return "5b2241d885919c07.ltr.css";
        if (76301 === e) return "6cd95ec3bdfd8887.ltr.css";
        if (1794 === e) return "5b7fe8f909b06739.ltr.css";
        if (14408 === e) return "9094dc9ec76e31ae.ltr.css";
        if (91969 === e) return "924c43291449318d.ltr.css";
        if (60205 === e) return "ee8b17ce4967cfe1.ltr.css"
    }, c.miniCssFRtl = e => {
        if (98581 === e) return "c166e5d20ad58f4e.runtime.rtl.css";
        if (69588 === e) return "c166e5d20ad58f4e.i3d79q.vendor.rtl.css";
        if (25436 === e) return "8e54262212aed57f.vendor.rtl.css";
        if (95433 === e) return "c166e5d20ad58f4e.5a9ync.vendor.rtl.css";
        if (21389 === e) return "36ad98b393748ad6.rtl.css";
        if (50869 === e) return "4f05c1b2bf63d608.rtl.css";
        if ({
                61454: 1,
                68772: 1,
                85225: 1,
                59981: 1,
                2956: 1,
                45366: 1,
                96826: 1
            }[e]) return "c166e5d20ad58f4e.vendor.rtl.css";
        if ({
                71059: 1,
                21023: 1,
                30270: 1,
                32915: 1,
                28646: 1,
                12942: 1,
                49830: 1,
                39314: 1,
                45085: 1,
                61615: 1,
                52358: 1,
                52356: 1,
                70665: 1,
                81623: 1,
                97751: 1,
                48376: 1,
                63891: 1,
                47604: 1,
                6151: 1,
                61442: 1,
                10412: 1,
                3465: 1,
                83191: 1,
                32255: 1,
                33581: 1,
                73539: 1,
                35672: 1,
                83126: 1,
                49350: 1,
                42283: 1,
                89840: 1,
                10785: 1,
                42617: 1,
                19326: 1,
                25360: 1,
                15816: 1,
                83785: 1,
                98384: 1,
                39927: 1,
                30203: 1,
                58899: 1,
                80978: 1,
                34449: 1,
                5925: 1,
                52595: 1,
                39412: 1,
                70038: 1,
                21877: 1,
                12894: 1,
                44374: 1,
                67587: 1,
                38207: 1,
                99925: 1,
                46384: 1,
                67896: 1,
                84151: 1,
                63963: 1,
                61372: 1,
                14433: 1,
                63299: 1,
                90063: 1,
                68255: 1,
                10188: 1,
                58911: 1,
                20284: 1,
                67810: 1,
                77367: 1,
                69774: 1,
                46492: 1,
                85140: 1,
                27172: 1,
                97412: 1,
                87669: 1,
                99137: 1,
                57257: 1,
                22221: 1,
                83296: 1,
                79101: 1,
                38423: 1,
                26271: 1,
                61433: 1,
                49235: 1,
                19750: 1,
                10242: 1,
                19827: 1,
                25119: 1,
                92815: 1,
                45699: 1,
                21829: 1,
                56782: 1,
                87246: 1,
                38660: 1,
                60650: 1,
                87911: 1,
                37438: 1,
                73825: 1,
                57914: 1,
                37906: 1,
                77181: 1,
                19656: 1,
                32901: 1,
                24459: 1,
                47798: 1,
                89303: 1,
                57399: 1,
                19289: 1,
                13794: 1,
                10316: 1,
                61316: 1,
                47523: 1,
                2906: 1,
                4450: 1,
                45749: 1,
                50463: 1,
                38734: 1,
                47510: 1,
                218: 1,
                68629: 1,
                61161: 1,
                16621: 1,
                13073: 1,
                53256: 1,
                14902: 1,
                14955: 1
            }[e]) return "c166e5d20ad58f4e.rtl.css";
        if (50971 === e) return "1e246b15020f607d.rtl.css";
        if (12742 === e) return "25b189ed8191fa10.rtl.css";
        if (49392 === e) return "b53e0b8f14174717.rtl.css";
        if (29046 === e) return "1991a15a9b55f670.rtl.css";
        if (49210 === e) return "b4bd268b7e5afaa4.rtl.css";
        if (28338 === e) return "7cf7805937173758.rtl.css";
        if (65133 === e) return "5e44a47af6e0da97.rtl.css";
        if (20520 === e) return "29bdbb1d75c8c7a3.rtl.css";
        if (80117 === e) return "7dac84e36568326f.rtl.css";
        if (35011 === e) return "be92cdc2c813e15f.rtl.css";
        if (50634 === e) return "3759df5a77daebac.rtl.css";
        if (76301 === e) return "24d8d7309fb8ff62.rtl.css";
        if (1794 === e) return "b197b394e4f55ce1.rtl.css";
        if (14408 === e) return "918171a1aa694966.rtl.css";
        if (91969 === e) return "d41a1c13df702638.rtl.css";
        if (60205 === e) return "272adea3752f60f0.rtl.css"
    }, c.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), c.hmd = e => {
        if (!(e = Object.create(e)).children) e.children = [];
        return Object.defineProperty(e, "exports", {
            enumerable: !0,
            set: () => {
                throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + e.id)
            }
        }), e
    }, c.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r), f = {}, n = "@canva/web:", c.l = (e, r, t, s) => {
        if (!f[e]) {
            var i, a;
            if (void 0 !== t)
                for (var u = document.getElementsByTagName("script"), d = 0; d < u.length; d++) {
                    var o = u[d];
                    if (o.getAttribute("src") == e || o.getAttribute("data-webpack") == n + t) {
                        i = o;
                        break
                    }
                }
            if (!i) {
                if (a = !0, (i = document.createElement("script")).charset = "utf-8", i.timeout = 120, c.nc) i.setAttribute("nonce", c.nc);
                i.setAttribute("data-webpack", n + t), i.src = e
            }
            f[e] = [r];
            var l = (r, t) => {
                    i.onerror = i.onload = null, clearTimeout(b);
                    var n = f[e];
                    if (delete f[e], i.parentNode && i.parentNode.removeChild(i), n && n.forEach((e => e(t))), r) return r(t)
                },
                b = setTimeout(l.bind(null, void 0, {
                    type: "timeout",
                    target: i
                }), 12e4);
            i.onerror = l.bind(null, i.onerror), i.onload = l.bind(null, i.onload), a && document.head.appendChild(i)
        } else f[e].push(r)
    }, c.r = e => {
        if ("undefined" != typeof Symbol && Symbol.toStringTag) Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, c.nmd = e => {
        if (e.paths = [], !e.children) e.children = [];
        return e
    }, (() => {
        const e = c.e,
            r = function e(r, t, f) {
                return r().catch((function(n) {
                    return 0 === f ? Promise.reject(n) : (s = t, new Promise((function(e) {
                        setTimeout(e, s)
                    }))).then((function() {
                        return e(r, t, f - 1)
                    }));
                    var s
                }))
            };
        c.e = function(t) {
            return r((function() {
                return e(t)
            }), 1e3, 5)
        }
    })(), c.p = "", (() => {
        if (self.__batch_chunks__) ! function(e, r, t, f, n, s, i, c, a) {
            const u = e.l;
            let d = [],
                o = [];
            const l = [];
            for (const O of document.head.querySelectorAll('link[rel="prefetch"][href]')) {
                const e = O.getAttribute("href");
                e && l.push(e)
            }
            let b = e => document.head.appendChild(e);
            e.l = function(e, r, n, i) {
                for (let t = 0; t < l.length; t++)
                    if (l[t].endsWith(e)) return l.splice(t, 1), u(e, r, n, i);
                if (t) {
                    if (0 === d.length) Promise.resolve().then((() => {
                        k(d, p), d = [], h = 0
                    }));
                    const r = y(e);
                    if (d.length >= 1 && h + r > s || d.length >= f) k(d, p), d = [], h = 0;
                    h += r
                } else {
                    if (j++ < 10) return u(e, r, n, i);
                    if (0 === d.length) setTimeout((() => w(d, p)), 1)
                }
                d.push({
                    src: e,
                    callback: function(t) {
                        if ("load" === t.type) r(t);
                        else window.batchFailedAssetCount = (window.batchFailedAssetCount || 0) + 1, u(e, r, n, i)
                    },
                    originalLoad: () => {
                        u(e, r, n, i)
                    }
                })
            }, e.loadCss = function(e, r) {
                const n = e.getAttribute("href");
                if (b = r || b, t) {
                    if (0 === o.length) Promise.resolve().then((() => {
                        k(o, v), o = [], g = 0
                    }));
                    const e = y(n);
                    if (o.length >= 1 && g + e > s || o.length >= f) k(o, v), o = [], g = 0;
                    g += e
                } else {
                    if (m++ < 15) return r(e);
                    if (0 === o.length) setTimeout((() => w(o, v)), 1)
                }
                o.push({
                    src: n,
                    callback: t => {
                        if ("load" === t.type) e.onload && e.onload(t);
                        else r(e)
                    },
                    originalLoad: () => {
                        r(e)
                    }
                })
            };
            let j = 0,
                h = 0;

            function p(e, t) {
                const f = document.createElement("script");
                let n;
                const s = e => {
                    f.onerror = f.onload = null, clearTimeout(n), f.parentNode && f.parentNode.removeChild(f), t("string" == typeof e ? {
                        type: "error",
                        target: {}
                    } : e)
                };
                f.onload = f.onerror = s, f.src = e, f.async = !1, n = setTimeout((() => s({
                    type: "timeout",
                    target: f
                })), r), document.head.appendChild(f)
            }
            let m = 0,
                g = 0;

            function v(e, r) {
                const t = document.createElement("link");
                t.onload = t.onerror = e => r(e), t.href = e, t.rel = "stylesheet", b(t)
            }

            function y(e) {
                const r = n(),
                    t = e.substring(r.length);
                return t ? i[t] || 0 : 0
            }

            function _() {
                const e = n(),
                    r = new URL(window.location.href);
                if (null == e ? void 0 : e.startsWith("http")) {
                    const {
                        protocol: r,
                        host: t
                    } = new URL(e);
                    return `${r}//chunk-composing.${t.split(".").slice(-2).join(".")}`
                } else if (["localhost", "127.0.0.1"].includes(r.hostname) && r.searchParams.get("pageLoadWorkerUrl")) return r.searchParams.get("pageLoadWorkerUrl");
                else return r.origin
            }
            async function w(e, r) {
                const t = n();
                let u, d = 0,
                    o = [];
                try {
                    u = self.navigator.serviceWorker
                } catch {}
                const l = c && (null == u ? void 0 : u.controller) ? await async function(e) {
                    const r = await caches.open(a),
                        t = [];
                    for (const f of e)
                        if (await r.match(f.src)) f.originalLoad();
                        else t.push(f);
                    return t
                }(e) : e;
                for (const n of l) {
                    const e = n.src.substring(t.length),
                        r = e ? i[e] || 0 : 0;
                    if (o.length >= 1 && d + r > s || o.length >= f) b(o), o = [], d = 0;
                    o.push(n), d += r
                }

                function b(e) {
                    if (1 === e.length) return void e[0].originalLoad();
                    const f = _(),
                        n = e.map((({
                            src: e
                        }) => e.substring(t.length))).join("+");
                    r(`${f}/chunk-batch/${n}`, (r => {
                        for (const {
                                callback: t,
                                src: f
                            } of e) t({
                            type: r.type,
                            target: {
                                src: f,
                                href: f
                            }
                        })
                    }))
                }
                o.length && b(o), e.length = 0
            }

            function k(e, r) {
                if (0 === e.length) return;
                const t = n();
                if (1 !== e.length) r(`${_()}/chunk-batch/${e.map((({src:e})=>e.substring(t.length))).join("+")}`, (r => {
                    for (const {
                            callback: t,
                            src: f
                        } of e) t({
                        type: r.type,
                        target: {
                            src: f,
                            href: f
                        }
                    })
                }));
                else e[0].originalLoad()
            }
        }(c, 12e4, self.__sync_batch_chunks__, 40, (() => c.p), 10485760, {
            "1f1a18dc0034ca77.ltr.css": 451948,
            "dd0933c7644e9cf3.js": 13396124,
            "36ad98b393748ad6.rtl.css": 451960,
            "eefd0e183fe03793.runtime.js": 74015,
            "a0684b0780c739e9.vendor.ltr.css": 15361,
            "ee20eabed984b044.vendor.js": 2219515,
            "8e54262212aed57f.vendor.rtl.css": 15361,
            "411de7fe679f1413.5a9ync.vendor.js": 85008,
            "aaa08f5161a956c7.i3d79q.vendor.js": 704145,
            "d47fa7f5e61148d4.ltr.css": 7483,
            "2133805b8ffe68e5.js": 36630,
            "4f05c1b2bf63d608.rtl.css": 7483,
            "048252aca513298a.vendor.js": 158490,
            "68f927d4d76307b6.vendor.js": 125594,
            "2a9247934f9f240b.js": 121717,
            "638e8938c76a575e.ltr.css": 412,
            "39fb2f07becb1490.js": 170228,
            "1e246b15020f607d.rtl.css": 414,
            "784ade8bd24ba7d6.ltr.css": 1069,
            "0d48ca9373f48ca6.js": 18043,
            "25b189ed8191fa10.rtl.css": 1069,
            "7716b010c9f76c29.js": 302393,
            "d9d42a7d65a05375.js": 13577,
            "7aa11a877a813ff3.js": 192961,
            "8afff203316f9822.js": 77271,
            "7921c997596d2d96.js": 91904,
            "2c8abc209248ecd5.js": 11072,
            "17d38ec45d94cac6.js": 1467,
            "34c1c039b9a7ab84.js": 12247,
            "fc080a6b8857e3bb.js": 40241,
            "5e989defdc344afb.js": 29940,
            "630c9ae2efbb7a86.vendor.js": 168645,
            "e71066744fca056b.ltr.css": 3310,
            "b9bffe683353f516.js": 1790901,
            "b53e0b8f14174717.rtl.css": 3310,
            "bfe6ac4a4992b1d1.js": 7482,
            "fb5351c53c92f2f7.js": 102928,
            "179be3cd70505320.js": 9306,
            "6d52d6d7772ae986.js": 1315,
            "b75bdcc1c05df01e.js": 112559,
            "8d30298992d9c1cd.js": 147745,
            "4527e4d9bb2e2a24.js": 43385,
            "09fee69600cf00b4.js": 40393,
            "6a48ac5d11206688.js": 137525,
            "f6e522ba1b73f662.ltr.css": 322,
            "c5d3b53945c76504.js": 73595,
            "1991a15a9b55f670.rtl.css": 322,
            "2499421be4b62a11.js": 1779,
            "a83f6b391fd45784.js": 192358,
            "a45b25759a78ea2e.js": 872,
            "8e793c2e78aac958.js": 5251,
            "7dbd706cf86dc04b.js": 18077,
            "4fd28fa2a52ce6e4.js": 17110,
            "801f0bdbd150df77.js": 23631,
            "1dc6010daa3ea356.js": 64243,
            "c0108afddf9242a6.js": 13382,
            "c18acd914b0010ca.js": 6031,
            "5f1d4839e07de62c.ltr.css": 2196,
            "385dd01105f63ca5.js": 24544,
            "b4bd268b7e5afaa4.rtl.css": 2196,
            "4c13b2a934445769.js": 105936,
            "c50435bdbba9416d.js": 19475,
            "1c99c202b274472d.js": 22610,
            "6f9beed6832fdbdc.js": 1648,
            "c894399a989b8858.js": 1680,
            "5790669fd0fd0058.js": 1449,
            "dd56e73c4ee77071.js": 1448,
            "a36b54f0079bd0eb.js": 1447,
            "0d184f06c555e9c6.js": 1445,
            "803d4edfd5167a3b.js": 1445,
            "a16f2b1647fdeddf.js": 1561,
            "291daec81778399a.js": 1650,
            "415708416016649f.js": 1448,
            "799d2e222d4d77be.js": 1447,
            "83086b9c7aef3f1f.js": 1458,
            "a0641143fb930cd4.js": 1448,
            "72611b426a13b29d.js": 1450,
            "89e44842ae741872.js": 1554,
            "a93d25404ec7fe2e.js": 1552,
            "fe68f2a22eb7e866.js": 1537,
            "dc155dba9dcc61aa.js": 1453,
            "5a4b5f5661a1f53d.js": 1627,
            "11030b6959000bff.js": 1728,
            "31cdc3d0f6f6fde2.js": 1440,
            "9df8eb860c4840b0.js": 1539,
            "cd9a7c4a21f13d87.js": 1586,
            "d11a4b7290967124.js": 1674,
            "f1de7fa5eaa8cf32.js": 1674,
            "6fddb9131130bce0.js": 1684,
            "dede2d6f074ced32.js": 1585,
            "3c9aa32715202dbe.js": 1781,
            "210e796b9e0e08a2.js": 1570,
            "24444e551f583ab6.js": 1671,
            "50c115cf5ea4ced3.js": 1626,
            "8f154d2eda56e960.js": 1627,
            "d9f726e695f3bc0c.js": 186632,
            "71dec1f5d11e3f66.ltr.css": 360,
            "e0b74e5b23be984e.js": 427134,
            "7cf7805937173758.rtl.css": 360,
            "52b46a501aea3ed2.js": 245723,
            "49c7f05396359f89.js": 530465,
            "afc58052d4b4c0cf.js": 85049,
            "1a939bcee5b9686e.js": 23985,
            "da9a6ebe68fcd56a.js": 170140,
            "ff4128034d5e35c3.js": 2185,
            "1db05b4b7b313b45.js": 6218,
            "14ff743f3802a938.js": 10118,
            "6cd3fbea045f9cee.js": 30017,
            "d6e6efbebad5e48f.js": 5761,
            "e8f71cf716029288.js": 10906,
            "08f2fa7e27f35473.js": 116112,
            "809a0f635618d33c.js": 1091,
            "5cfdf954ce83fb57.js": 23329,
            "16fa81bf29b95ca6.js": 148100,
            "fb2ece31de4fa2a0.js": 298216,
            "05624d166fe81780.ltr.css": 698,
            "382310eeb4e5ad69.js": 3846,
            "5e44a47af6e0da97.rtl.css": 698,
            "5427648d65fcb663.js": 327099,
            "99c88c95a5fa297b.js": 8299,
            "d8c4031909d3d855.js": 8324,
            "f8678f5d2a496896.ltr.css": 355,
            "3007252cdac8515d.js": 278479,
            "29bdbb1d75c8c7a3.rtl.css": 355,
            "496c8047fa7687f5.js": 80367,
            "aed61a49fdfc513b.ltr.css": 355,
            "8466219d29412dee.js": 299269,
            "7dac84e36568326f.rtl.css": 355,
            "ca10385ab7f3657c.ltr.css": 354,
            "695e5bb2a46ef9ee.js": 68685,
            "be92cdc2c813e15f.rtl.css": 354,
            "03b2a37b02ceb822.js": 3520,
            "e2820cd69800011e.js": 207957,
            "e49518b0eab699fb.vendor.js": 12754,
            "2b48f39ef3d88294.vendor.js": 18823,
            "6ad2d37568d35ef4.js": 210552,
            "7cdcd7b0a429cbae.vendor.js": 13455,
            "da9a4a79b1dcc3e6.js": 375384,
            "5b2241d885919c07.ltr.css": 360,
            "c455d162dc3588db.js": 184158,
            "3759df5a77daebac.rtl.css": 360,
            "0fb4482af1070826.js": 250710,
            "9063cedc4cd439b1.js": 78007,
            "d6e25c169996fcde.js": 11629,
            "31e91d7cf630bdaf.js": 1327,
            "c439f113b419f18a.js": 1399,
            "c2652cf222549f7b.js": 1299,
            "673bc34d9895da2e.js": 1295,
            "ea48da9063e2751d.js": 1389,
            "ebe7b7b17e7afd15.js": 1313,
            "6cd95ec3bdfd8887.ltr.css": 11646,
            "80b03bf3435971d7.js": 756092,
            "24d8d7309fb8ff62.rtl.css": 11646,
            "c725e78db0749b8b.js": 1317,
            "a00c2bb59ce5a637.js": 40947,
            "5b7fe8f909b06739.ltr.css": 913,
            "a0ac1498bab88d3d.js": 173740,
            "b197b394e4f55ce1.rtl.css": 913,
            "c98064e9889c02b9.vendor.js": 648073,
            "9094dc9ec76e31ae.ltr.css": 446,
            "4f782ba1107a93bb.js": 21469,
            "918171a1aa694966.rtl.css": 446,
            "4bbe002d1ebfb1c9.js": 19177,
            "924c43291449318d.ltr.css": 263,
            "094f9823cb208119.js": 10944,
            "d41a1c13df702638.rtl.css": 263,
            "26fda57dc07df049.js": 463257,
            "ee8b17ce4967cfe1.ltr.css": 8805,
            "769b0209afc9eadf.js": 292046,
            "272adea3752f60f0.rtl.css": 8805,
            "d76eb9ec6b24764a.js": 1299,
            "ad6c0c7c124d5614.js": 534599,
            "a77fb43fe0974cfa.js": 35920,
            "bbe0b946ecdeee0c.js": 86189,
            "c293752976487ea3.js": 733,
            "4360f2fb9d0763c1.js": 4794,
            "9fd6bdd434731fe9.js": 40504,
            "a3d9e147df115e26.js": 191940,
            "26daa8f2a3755421.js": 6493,
            "a34a759d07eb2a12.js": 38624
        }, self.__check_cache_batch_chunks__, "assets-2")
    })(), (() => {
        const e = JSON.parse('{"2650":58899,"10588":35672,"16139":45699,"26307":61433,"26759":39927,"29203":60650,"33714":33581,"38844":19827,"46989":49210,"77732":50463,"78999":57399,"82986":28646,"83888":49392,"88780":32915,"100606":38660,"103478":38734,"110247":63891,"126802":99925,"144616":68772,"150721":70665,"150778":30203,"186873":19656,"201268":14433,"217517":56782,"223244":26271,"227900":42283,"229894":97751,"249007":87911,"250851":46384,"252935":32901,"254588":91969,"261760":52595,"266055":4450,"292270":48376,"305660":68629,"314854":38207,"317158":21877,"335146":12894,"340693":50869,"356430":89840,"363531":73825,"365475":16621,"368036":57914,"372964":12742,"411625":218,"428405":47523,"432521":83126,"456572":14955,"460541":24459,"465530":90063,"467611":49350,"469546":53256,"482919":49235,"490896":50634,"502437":4450,"519561":20520,"520679":25360,"521746":10188,"535189":13073,"545058":80978,"555434":73539,"556151":52358,"563026":70038,"567764":39314,"571038":67587,"572534":14902,"582389":61442,"594403":63299,"605338":10316,"617807":52356,"621071":34449,"636287":61372,"647312":19326,"652365":44374,"652535":50971,"658506":71059,"678201":68255,"696820":61161,"697956":47510,"700123":21829,"730337":49830,"733653":87246,"738083":76301,"741114":37438,"744620":61454,"777985":39412,"796735":1794,"807817":45749,"819178":10785,"846915":14408,"858761":77181,"870064":42617,"877501":63963,"905923":84151,"933618":67896,"938629":15816,"959820":83785,"973664":37906,"978457":98384,"988209":80117,"990570":5925,"994944":60205}'),
            r = JSON.parse('{"218":[21023,28646],"1794":[45085,85225],"2906":[61316],"2956":[59981],"3465":[],"4450":[2906],"5925":[],"6151":[],"10188":[],"10242":[],"10316":[13794,89303],"10412":[29046,61442],"10785":[],"12742":[],"12894":[],"12942":[],"13073":[],"13794":[],"14408":[47798,96826],"14433":[],"14902":[45749],"14955":[],"15816":[],"16621":[],"19289":[],"19326":[],"19656":[],"19750":[],"19827":[10242,20284,22221,32255,38423,57257,65133,67810,69774,87669],"20284":[29046,58911],"20520":[10242,19750,20284,22221,25119,32255,38423,57257,67810,79101],"21023":[],"21389":[],"21829":[35011,38423,45366,49350,83191,92815],"21877":[],"22221":[29046],"24459":[12942],"25119":[83296,99137],"25360":[],"25436":[],"26271":[28338],"27172":[29046],"28338":[22221,32255,38423,57257,67810,77367,79101,83296,87669,97412,99137],"28646":[30270],"29046":[61615],"30203":[],"30270":[],"32255":[29046,3465,47604,6151,83191],"32901":[],"32915":[21023,30270],"33581":[10412,32255],"34449":[],"35011":[46492,85140,89840],"35672":[],"37438":[],"37906":[],"38207":[],"38423":[],"38660":[19750,32255,38423,57257,83296,99137],"38734":[],"39314":[],"39412":[],"39927":[],"42283":[],"42617":[],"44374":[],"45085":[],"45366":[59981],"45699":[2956,35011,38423,49350,83191,92815],"45749":[],"46384":[],"46492":[58911],"47510":[28646],"47523":[19289,61316],"47604":[],"47798":[],"48376":[],"49210":[],"49235":[22221,38423,97412,99137],"49350":[],"49392":[45085,52356,85225],"49830":[12942],"50463":[],"50634":[32255,38423,57257,58911,67810,77367,79101,83296],"50869":[],"50971":[],"52356":[52358],"52358":[61615],"52595":[],"53256":[2906],"56782":[20284,27172,46492,47604,57257,69774,77367,83296,92815],"57257":[10412],"57399":[89303],"57914":[],"58899":[],"58911":[],"59981":[],"60205":[19289],"60650":[],"61161":[28646],"61316":[13794],"61372":[],"61433":[28338],"61442":[],"61454":[],"61615":[],"63299":[],"63891":[48376],"63963":[],"65133":[19750,77367,83296],"67587":[],"67810":[],"67896":[],"68255":[],"68629":[28646],"68772":[],"69588":[],"69774":[],"70038":[],"70665":[],"71059":[],"73539":[3465],"73825":[],"76301":[],"77181":[],"77367":[],"79101":[],"80117":[10242,19750,20284,22221,25119,32255,38423,57257,67810,79101],"80978":[],"81623":[],"83126":[],"83191":[],"83296":[85140],"83785":[],"84151":[],"85140":[29046,81623],"85225":[],"87246":[20284,22221,25119,3465,38423,47604,6151,65133,83191],"87669":[85140],"87911":[],"89303":[],"89840":[],"90063":[],"91969":[47798,96826],"92815":[],"95433":[],"96826":[],"97412":[20284,27172,46492,6151,85140],"97751":[81623],"98384":[],"99137":[69774,85140],"99925":[]}'),
            t = (e, f, n) => {
                if (!n.has(e)) return n.add(e), r[e].forEach((e => t(e, f, n))), f.push(e), f
            };
        c.me = function(r) {
            const f = e[r];
            if (null == f) return Promise.resolve(c(r));
            const n = t(f, [], new Set);
            return Promise.all(n.map((e => c.e(e)))).then((() => c(r)))
        }
    })(), (() => {
        const e = {};
        c.f.locale = function(r, t) {
            ! function(e, r, t) {
                if (null == r[e]) {
                    const t = self.cmsg;
                    if (!t || !t.assets) return;
                    const f = t.loaded,
                        n = t.locale || "en";
                    if (f && f[e + "_" + n]) return;
                    const s = t.assets[n] && t.assets[n][e] && t.assets[n][e].js;
                    if (!s) return;
                    r[e] = Promise.all(s.map((t => new Promise(((f, n) => {
                        const s = c.p + t;
                        c.l(s, (s => {
                            if ("load" === s.type) r[e] = 0, f();
                            else delete r[e], n(new Error(`Fail to load message files@${t}`))
                        }), "ensure-locale-" + e, e)
                    })))))
                }
                const f = r[e];
                if (f) t.push(f)
            }(r, e, t)
        }
    })(), (() => {
        let e = "undefined" != typeof self && void 0 !== self.document ? self.document.body.parentElement.getAttribute("dir") : "ltr";
        if ("ltr" !== e && "rtl" !== e) console.warn("Could not determine the direction of text, please check that the dir attribute is set on the html tag"), e = "ltr";
        if ("rtl" === e) c.miniCssF = c.miniCssFRtl
    })(), (() => {
        if ("undefined" != typeof document) {
            var e = e => new Promise(((r, t) => {
                    var f = c.miniCssF(e),
                        n = c.p + f;
                    if (((e, r) => {
                            for (var t = document.getElementsByTagName("link"), f = 0; f < t.length; f++) {
                                var n = (i = t[f]).getAttribute("data-href") || i.getAttribute("href");
                                if ("stylesheet" === i.rel && (n === e || n === r)) return i
                            }
                            var s = document.getElementsByTagName("style");
                            for (f = 0; f < s.length; f++) {
                                var i;
                                if ((n = (i = s[f]).getAttribute("data-href")) === e || n === r) return i
                            }
                        })(f, n)) return r();
                    ((e, r, t, f, n) => {
                        var s = document.createElement("link");
                        s.rel = "stylesheet", s.type = "text/css", s.onerror = s.onload = t => {
                                if (s.onerror = s.onload = null, "load" === t.type) f();
                                else {
                                    var i = t && ("load" === t.type ? "missing" : t.type),
                                        c = t && t.target && t.target.href || r,
                                        a = new Error("Loading CSS chunk " + e + " failed.\n(" + c + ")");
                                    if (a.code = "CSS_CHUNK_LOAD_FAILED", a.type = i, a.request = c, s.parentNode) s.parentNode.removeChild(s);
                                    n(a)
                                }
                            }, s.href = r,
                            function(e) {
                                const r = e => {
                                    document.head.appendChild(e)
                                };
                                if (c.loadCss) c.loadCss(e, r);
                                else r(e)
                            }(s)
                    })(e, n, 0, r, t)
                })),
                r = {
                    98581: 0
                };
            c.f.miniCss = (t, f) => {
                if (r[t]) f.push(r[t]);
                else if (0 !== r[t] && {
                        1794: 1,
                        12742: 1,
                        14408: 1,
                        20520: 1,
                        28338: 1,
                        29046: 1,
                        35011: 1,
                        49210: 1,
                        49392: 1,
                        50634: 1,
                        50869: 1,
                        50971: 1,
                        60205: 1,
                        65133: 1,
                        76301: 1,
                        80117: 1,
                        91969: 1
                    }[t]) f.push(r[t] = e(t).then((() => {
                    r[t] = 0
                }), (e => {
                    throw delete r[t], e
                })))
            }
        }
    })(), (() => {
        var e = {
            98581: 0
        };
        c.f.j = (r, t) => {
            var f = c.o(e, r) ? e[r] : void 0;
            if (0 !== f)
                if (f) t.push(f[2]);
                else if (98581 != r) {
                var n = new Promise(((t, n) => f = e[r] = [t, n]));
                t.push(f[2] = n);
                var s = c.p + c.u(r),
                    i = new Error;
                c.l(s, (t => {
                    if (c.o(e, r)) {
                        if (0 !== (f = e[r])) e[r] = void 0;
                        if (f) {
                            var n = t && ("load" === t.type ? "missing" : t.type),
                                s = t && t.target && t.target.src;
                            i.message = "Loading chunk " + r + " failed.\n(" + n + ": " + s + ")", i.name = "ChunkLoadError", i.type = n, i.request = s, f[1](i)
                        }
                    }
                }), "chunk-" + r, r)
            } else e[r] = 0
        }, c.O.j = r => 0 === e[r];
        var r = (r, t) => {
                var f, n, [s, i, a] = t,
                    u = 0;
                if (s.some((r => 0 !== e[r]))) {
                    for (f in i)
                        if (c.o(i, f)) c.m[f] = i[f];
                    if (a) var d = a(c)
                }
                if (r) r(t);
                for (; u < s.length; u++) {
                    if (n = s[u], c.o(e, n) && e[n]) e[n][0]();
                    e[n] = 0
                }
                return c.O(d)
            },
            t = self.webpackChunk_canva_web = self.webpackChunk_canva_web || [];
        t.forEach(r.bind(null, 0)), t.push = r.bind(null, t.push.bind(t))
    })()
})();
//# sourceMappingURL=sourcemaps/eefd0e183fe03793.runtime.js.map