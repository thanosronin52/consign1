var Pi = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {},
    xl = {
        exports: {}
    };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
(function(e, t) {
    (function() {
        var r, a = "4.17.21",
            o = 200,
            c = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",
            l = "Expected a function",
            f = "Invalid `variable` option passed into `_.template`",
            h = "__lodash_hash_undefined__",
            g = 500,
            v = "__lodash_placeholder__",
            y = 1,
            x = 2,
            C = 4,
            L = 1,
            P = 2,
            N = 1,
            R = 2,
            $ = 4,
            k = 8,
            B = 16,
            F = 32,
            q = 64,
            J = 128,
            lt = 256,
            at = 512,
            ht = 30,
            Nt = "...",
            Qt = 800,
            Mt = 16,
            De = 1,
            qe = 2,
            $t = 3,
            Ct = 1 / 0,
            te = 9007199254740991,
            Xe = 17976931348623157e292,
            Je = 0 / 0,
            Kt = 4294967295,
            Xn = Kt - 1,
            Cr = Kt >>> 1,
            bn = [
                ["ary", J],
                ["bind", N],
                ["bindKey", R],
                ["curry", k],
                ["curryRight", B],
                ["flip", at],
                ["partial", F],
                ["partialRight", q],
                ["rearg", lt]
            ],
            zt = "[object Arguments]",
            ke = "[object Array]",
            Tr = "[object AsyncFunction]",
            ee = "[object Boolean]",
            Ze = "[object Date]",
            Oo = "[object DOMException]",
            yn = "[object Error]",
            Sr = "[object Function]",
            vi = "[object GeneratorFunction]",
            ne = "[object Map]",
            Jn = "[object Number]",
            ba = "[object Null]",
            pe = "[object Object]",
            ya = "[object Promise]",
            Go = "[object Proxy]",
            re = "[object RegExp]",
            Dt = "[object Set]",
            En = "[object String]",
            Zn = "[object Symbol]",
            _i = "[object Undefined]",
            wn = "[object WeakMap]",
            Ea = "[object WeakSet]",
            An = "[object ArrayBuffer]",
            Qe = "[object DataView]",
            No = "[object Float32Array]",
            Lo = "[object Float64Array]",
            Io = "[object Int8Array]",
            Mo = "[object Int16Array]",
            Po = "[object Int32Array]",
            Ro = "[object Uint8Array]",
            Do = "[object Uint8ClampedArray]",
            ko = "[object Uint16Array]",
            Bo = "[object Uint32Array]",
            Cp = /\b__p \+= '';/g,
            Tp = /\b(__p \+=) '' \+/g,
            Sp = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
            mf = /&(?:amp|lt|gt|quot|#39);/g,
            gf = /[&<>"']/g,
            Op = RegExp(mf.source),
            Gp = RegExp(gf.source),
            Np = /<%-([\s\S]+?)%>/g,
            Lp = /<%([\s\S]+?)%>/g,
            vf = /<%=([\s\S]+?)%>/g,
            Ip = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
            Mp = /^\w*$/,
            Pp = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
            $o = /[\\^$.*+?()[\]{}|]/g,
            Rp = RegExp($o.source),
            zo = /^\s+/,
            Dp = /\s/,
            kp = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
            Bp = /\{\n\/\* \[wrapped with (.+)\] \*/,
            $p = /,? & /,
            zp = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
            Hp = /[()=,{}\[\]\/\s]/,
            Fp = /\\(\\)?/g,
            Vp = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
            _f = /\w*$/,
            Wp = /^[-+]0x[0-9a-f]+$/i,
            Up = /^0b[01]+$/i,
            Yp = /^\[object .+?Constructor\]$/,
            Kp = /^0o[0-7]+$/i,
            jp = /^(?:0|[1-9]\d*)$/,
            qp = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
            wa = /($^)/,
            Xp = /['\n\r\u2028\u2029\\]/g,
            Aa = "\\ud800-\\udfff",
            Jp = "\\u0300-\\u036f",
            Zp = "\\ufe20-\\ufe2f",
            Qp = "\\u20d0-\\u20ff",
            bf = Jp + Zp + Qp,
            yf = "\\u2700-\\u27bf",
            Ef = "a-z\\xdf-\\xf6\\xf8-\\xff",
            t6 = "\\xac\\xb1\\xd7\\xf7",
            e6 = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",
            n6 = "\\u2000-\\u206f",
            r6 = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
            wf = "A-Z\\xc0-\\xd6\\xd8-\\xde",
            Af = "\\ufe0e\\ufe0f",
            xf = t6 + e6 + n6 + r6,
            Ho = "['\u2019]",
            i6 = "[" + Aa + "]",
            Cf = "[" + xf + "]",
            xa = "[" + bf + "]",
            Tf = "\\d+",
            a6 = "[" + yf + "]",
            Sf = "[" + Ef + "]",
            Of = "[^" + Aa + xf + Tf + yf + Ef + wf + "]",
            Fo = "\\ud83c[\\udffb-\\udfff]",
            s6 = "(?:" + xa + "|" + Fo + ")",
            Gf = "[^" + Aa + "]",
            Vo = "(?:\\ud83c[\\udde6-\\uddff]){2}",
            Wo = "[\\ud800-\\udbff][\\udc00-\\udfff]",
            Or = "[" + wf + "]",
            Nf = "\\u200d",
            Lf = "(?:" + Sf + "|" + Of + ")",
            o6 = "(?:" + Or + "|" + Of + ")",
            If = "(?:" + Ho + "(?:d|ll|m|re|s|t|ve))?",
            Mf = "(?:" + Ho + "(?:D|LL|M|RE|S|T|VE))?",
            Pf = s6 + "?",
            Rf = "[" + Af + "]?",
            c6 = "(?:" + Nf + "(?:" + [Gf, Vo, Wo].join("|") + ")" + Rf + Pf + ")*",
            l6 = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
            u6 = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
            Df = Rf + Pf + c6,
            f6 = "(?:" + [a6, Vo, Wo].join("|") + ")" + Df,
            d6 = "(?:" + [Gf + xa + "?", xa, Vo, Wo, i6].join("|") + ")",
            h6 = RegExp(Ho, "g"),
            p6 = RegExp(xa, "g"),
            Uo = RegExp(Fo + "(?=" + Fo + ")|" + d6 + Df, "g"),
            m6 = RegExp([Or + "?" + Sf + "+" + If + "(?=" + [Cf, Or, "$"].join("|") + ")", o6 + "+" + Mf + "(?=" + [Cf, Or + Lf, "$"].join("|") + ")", Or + "?" + Lf + "+" + If, Or + "+" + Mf, u6, l6, Tf, f6].join("|"), "g"),
            g6 = RegExp("[" + Nf + Aa + bf + Af + "]"),
            v6 = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
            _6 = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"],
            b6 = -1,
            pt = {};
        pt[No] = pt[Lo] = pt[Io] = pt[Mo] = pt[Po] = pt[Ro] = pt[Do] = pt[ko] = pt[Bo] = !0, pt[zt] = pt[ke] = pt[An] = pt[ee] = pt[Qe] = pt[Ze] = pt[yn] = pt[Sr] = pt[ne] = pt[Jn] = pt[pe] = pt[re] = pt[Dt] = pt[En] = pt[wn] = !1;
        var dt = {};
        dt[zt] = dt[ke] = dt[An] = dt[Qe] = dt[ee] = dt[Ze] = dt[No] = dt[Lo] = dt[Io] = dt[Mo] = dt[Po] = dt[ne] = dt[Jn] = dt[pe] = dt[re] = dt[Dt] = dt[En] = dt[Zn] = dt[Ro] = dt[Do] = dt[ko] = dt[Bo] = !0, dt[yn] = dt[Sr] = dt[wn] = !1;
        var y6 = {\
                u00C0: "A",
                \u00C1: "A",
                \u00C2: "A",
                \u00C3: "A",
                \u00C4: "A",
                \u00C5: "A",
                \u00E0: "a",
                \u00E1: "a",
                \u00E2: "a",
                \u00E3: "a",
                \u00E4: "a",
                \u00E5: "a",
                \u00C7: "C",
                \u00E7: "c",
                \u00D0: "D",
                \u00F0: "d",
                \u00C8: "E",
                \u00C9: "E",
                \u00CA: "E",
                \u00CB: "E",
                \u00E8: "e",
                \u00E9: "e",
                \u00EA: "e",
                \u00EB: "e",
                \u00CC: "I",
                \u00CD: "I",
                \u00CE: "I",
                \u00CF: "I",
                \u00EC: "i",
                \u00ED: "i",
                \u00EE: "i",
                \u00EF: "i",
                \u00D1: "N",
                \u00F1: "n",
                \u00D2: "O",
                \u00D3: "O",
                \u00D4: "O",
                \u00D5: "O",
                \u00D6: "O",
                \u00D8: "O",
                \u00F2: "o",
                \u00F3: "o",
                \u00F4: "o",
                \u00F5: "o",
                \u00F6: "o",
                \u00F8: "o",
                \u00D9: "U",
                \u00DA: "U",
                \u00DB: "U",
                \u00DC: "U",
                \u00F9: "u",
                \u00FA: "u",
                \u00FB: "u",
                \u00FC: "u",
                \u00DD: "Y",
                \u00FD: "y",
                \u00FF: "y",
                \u00C6: "Ae",
                \u00E6: "ae",
                \u00DE: "Th",
                \u00FE: "th",
                \u00DF: "ss",
                \u0100: "A",
                \u0102: "A",
                \u0104: "A",
                \u0101: "a",
                \u0103: "a",
                \u0105: "a",
                \u0106: "C",
                \u0108: "C",
                \u010A: "C",
                \u010C: "C",
                \u0107: "c",
                \u0109: "c",
                \u010B: "c",
                \u010D: "c",
                \u010E: "D",
                \u0110: "D",
                \u010F: "d",
                \u0111: "d",
                \u0112: "E",
                \u0114: "E",
                \u0116: "E",
                \u0118: "E",
                \u011A: "E",
                \u0113: "e",
                \u0115: "e",
                \u0117: "e",
                \u0119: "e",
                \u011B: "e",
                \u011C: "G",
                \u011E: "G",
                \u0120: "G",
                \u0122: "G",
                \u011D: "g",
                \u011F: "g",
                \u0121: "g",
                \u0123: "g",
                \u0124: "H",
                \u0126: "H",
                \u0125: "h",
                \u0127: "h",
                \u0128: "I",
                \u012A: "I",
                \u012C: "I",
                \u012E: "I",
                \u0130: "I",
                \u0129: "i",
                \u012B: "i",
                \u012D: "i",
                \u012F: "i",
                \u0131: "i",
                \u0134: "J",
                \u0135: "j",
                \u0136: "K",
                \u0137: "k",
                \u0138: "k",
                \u0139: "L",
                \u013B: "L",
                \u013D: "L",
                \u013F: "L",
                \u0141: "L",
                \u013A: "l",
                \u013C: "l",
                \u013E: "l",
                \u0140: "l",
                \u0142: "l",
                \u0143: "N",
                \u0145: "N",
                \u0147: "N",
                \u014A: "N",
                \u0144: "n",
                \u0146: "n",
                \u0148: "n",
                \u014B: "n",
                \u014C: "O",
                \u014E: "O",
                \u0150: "O",
                \u014D: "o",
                \u014F: "o",
                \u0151: "o",
                \u0154: "R",
                \u0156: "R",
                \u0158: "R",
                \u0155: "r",
                \u0157: "r",
                \u0159: "r",
                \u015A: "S",
                \u015C: "S",
                \u015E: "S",
                \u0160: "S",
                \u015B: "s",
                \u015D: "s",
                \u015F: "s",
                \u0161: "s",
                \u0162: "T",
                \u0164: "T",
                \u0166: "T",
                \u0163: "t",
                \u0165: "t",
                \u0167: "t",
                \u0168: "U",
                \u016A: "U",
                \u016C: "U",
                \u016E: "U",
                \u0170: "U",
                \u0172: "U",
                \u0169: "u",
                \u016B: "u",
                \u016D: "u",
                \u016F: "u",
                \u0171: "u",
                \u0173: "u",
                \u0174: "W",
                \u0175: "w",
                \u0176: "Y",
                \u0177: "y",
                \u0178: "Y",
                \u0179: "Z",
                \u017B: "Z",
                \u017D: "Z",
                \u017A: "z",
                \u017C: "z",
                \u017E: "z",
                \u0132: "IJ",
                \u0133: "ij",
                \u0152: "Oe",
                \u0153: "oe",
                \u0149: "'n",
                \u017F: "s"
            },
            E6 = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;"
            },
            w6 = {
                "&amp;": "&",
                "&lt;": "<",
                "&gt;": ">",
                "&quot;": '"',
                "&#39;": "'"
            },
            A6 = {
                "\\": "\\",
                "'": "'",
                "\n": "n",
                "\r": "r",
                "\u2028": "u2028",
                "\u2029": "u2029"
            },
            x6 = parseFloat,
            C6 = parseInt,
            kf = typeof Pi == "object" && Pi && Pi.Object === Object && Pi,
            T6 = typeof self == "object" && self && self.Object === Object && self,
            Pt = kf || T6 || Function("return this")(),
            Yo = t && !t.nodeType && t,
            Qn = Yo && !0 && e && !e.nodeType && e,
            Bf = Qn && Qn.exports === Yo,
            Ko = Bf && kf.process,
            me = function() {
                try {
                    var E = Qn && Qn.require && Qn.require("util").types;
                    return E || Ko && Ko.binding && Ko.binding("util")
                } catch {}
            }(),
            $f = me && me.isArrayBuffer,
            zf = me && me.isDate,
            Hf = me && me.isMap,
            Ff = me && me.isRegExp,
            Vf = me && me.isSet,
            Wf = me && me.isTypedArray;

        function ie(E, T, A) {
            switch (A.length) {
                case 0:
                    return E.call(T);
                case 1:
                    return E.call(T, A[0]);
                case 2:
                    return E.call(T, A[0], A[1]);
                case 3:
                    return E.call(T, A[0], A[1], A[2])
            }
            return E.apply(T, A)
        }

        function S6(E, T, A, z) {
            for (var X = -1, ot = E == null ? 0 : E.length; ++X < ot;) {
                var Tt = E[X];
                T(z, Tt, A(Tt), E)
            }
            return z
        }

        function ge(E, T) {
            for (var A = -1, z = E == null ? 0 : E.length; ++A < z && T(E[A], A, E) !== !1;);
            return E
        }

        function O6(E, T) {
            for (var A = E == null ? 0 : E.length; A-- && T(E[A], A, E) !== !1;);
            return E
        }

        function Uf(E, T) {
            for (var A = -1, z = E == null ? 0 : E.length; ++A < z;)
                if (!T(E[A], A, E)) return !1;
            return !0
        }

        function xn(E, T) {
            for (var A = -1, z = E == null ? 0 : E.length, X = 0, ot = []; ++A < z;) {
                var Tt = E[A];
                T(Tt, A, E) && (ot[X++] = Tt)
            }
            return ot
        }

        function Ca(E, T) {
            var A = E == null ? 0 : E.length;
            return !!A && Gr(E, T, 0) > -1
        }

        function jo(E, T, A) {
            for (var z = -1, X = E == null ? 0 : E.length; ++z < X;)
                if (A(T, E[z])) return !0;
            return !1
        }

        function vt(E, T) {
            for (var A = -1, z = E == null ? 0 : E.length, X = Array(z); ++A < z;) X[A] = T(E[A], A, E);
            return X
        }

        function Cn(E, T) {
            for (var A = -1, z = T.length, X = E.length; ++A < z;) E[X + A] = T[A];
            return E
        }

        function qo(E, T, A, z) {
            var X = -1,
                ot = E == null ? 0 : E.length;
            for (z && ot && (A = E[++X]); ++X < ot;) A = T(A, E[X], X, E);
            return A
        }

        function G6(E, T, A, z) {
            var X = E == null ? 0 : E.length;
            for (z && X && (A = E[--X]); X--;) A = T(A, E[X], X, E);
            return A
        }

        function Xo(E, T) {
            for (var A = -1, z = E == null ? 0 : E.length; ++A < z;)
                if (T(E[A], A, E)) return !0;
            return !1
        }
        var N6 = Jo("length");

        function L6(E) {
            return E.split("")
        }

        function I6(E) {
            return E.match(zp) || []
        }

        function Yf(E, T, A) {
            var z;
            return A(E, function(X, ot, Tt) {
                if (T(X, ot, Tt)) return z = ot, !1
            }), z
        }

        function Ta(E, T, A, z) {
            for (var X = E.length, ot = A + (z ? 1 : -1); z ? ot-- : ++ot < X;)
                if (T(E[ot], ot, E)) return ot;
            return -1
        }

        function Gr(E, T, A) {
            return T === T ? W6(E, T, A) : Ta(E, Kf, A)
        }

        function M6(E, T, A, z) {
            for (var X = A - 1, ot = E.length; ++X < ot;)
                if (z(E[X], T)) return X;
            return -1
        }

        function Kf(E) {
            return E !== E
        }

        function jf(E, T) {
            var A = E == null ? 0 : E.length;
            return A ? Qo(E, T) / A : Je
        }

        function Jo(E) {
            return function(T) {
                return T == null ? r : T[E]
            }
        }

        function Zo(E) {
            return function(T) {
                return E == null ? r : E[T]
            }
        }

        function qf(E, T, A, z, X) {
            return X(E, function(ot, Tt, ft) {
                A = z ? (z = !1, ot) : T(A, ot, Tt, ft)
            }), A
        }

        function P6(E, T) {
            var A = E.length;
            for (E.sort(T); A--;) E[A] = E[A].value;
            return E
        }

        function Qo(E, T) {
            for (var A, z = -1, X = E.length; ++z < X;) {
                var ot = T(E[z]);
                ot !== r && (A = A === r ? ot : A + ot)
            }
            return A
        }

        function tc(E, T) {
            for (var A = -1, z = Array(E); ++A < E;) z[A] = T(A);
            return z
        }

        function R6(E, T) {
            return vt(T, function(A) {
                return [A, E[A]]
            })
        }

        function Xf(E) {
            return E && E.slice(0, t1(E) + 1).replace(zo, "")
        }

        function ae(E) {
            return function(T) {
                return E(T)
            }
        }

        function ec(E, T) {
            return vt(T, function(A) {
                return E[A]
            })
        }

        function bi(E, T) {
            return E.has(T)
        }

        function Jf(E, T) {
            for (var A = -1, z = E.length; ++A < z && Gr(T, E[A], 0) > -1;);
            return A
        }

        function Zf(E, T) {
            for (var A = E.length; A-- && Gr(T, E[A], 0) > -1;);
            return A
        }

        function D6(E, T) {
            for (var A = E.length, z = 0; A--;) E[A] === T && ++z;
            return z
        }
        var k6 = Zo(y6),
            B6 = Zo(E6);

        function $6(E) {
            return "\\" + A6[E]
        }

        function z6(E, T) {
            return E == null ? r : E[T]
        }

        function Nr(E) {
            return g6.test(E)
        }

        function H6(E) {
            return v6.test(E)
        }

        function F6(E) {
            for (var T, A = []; !(T = E.next()).done;) A.push(T.value);
            return A
        }

        function nc(E) {
            var T = -1,
                A = Array(E.size);
            return E.forEach(function(z, X) {
                A[++T] = [X, z]
            }), A
        }

        function Qf(E, T) {
            return function(A) {
                return E(T(A))
            }
        }

        function Tn(E, T) {
            for (var A = -1, z = E.length, X = 0, ot = []; ++A < z;) {
                var Tt = E[A];
                (Tt === T || Tt === v) && (E[A] = v, ot[X++] = A)
            }
            return ot
        }

        function Sa(E) {
            var T = -1,
                A = Array(E.size);
            return E.forEach(function(z) {
                A[++T] = z
            }), A
        }

        function V6(E) {
            var T = -1,
                A = Array(E.size);
            return E.forEach(function(z) {
                A[++T] = [z, z]
            }), A
        }

        function W6(E, T, A) {
            for (var z = A - 1, X = E.length; ++z < X;)
                if (E[z] === T) return z;
            return -1
        }

        function U6(E, T, A) {
            for (var z = A + 1; z--;)
                if (E[z] === T) return z;
            return z
        }

        function Lr(E) {
            return Nr(E) ? K6(E) : N6(E)
        }

        function Oe(E) {
            return Nr(E) ? j6(E) : L6(E)
        }

        function t1(E) {
            for (var T = E.length; T-- && Dp.test(E.charAt(T)););
            return T
        }
        var Y6 = Zo(w6);

        function K6(E) {
            for (var T = Uo.lastIndex = 0; Uo.test(E);) ++T;
            return T
        }

        function j6(E) {
            return E.match(Uo) || []
        }

        function q6(E) {
            return E.match(m6) || []
        }
        var X6 = function E(T) {
                T = T == null ? Pt : Ir.defaults(Pt.Object(), T, Ir.pick(Pt, _6));
                var A = T.Array,
                    z = T.Date,
                    X = T.Error,
                    ot = T.Function,
                    Tt = T.Math,
                    ft = T.Object,
                    rc = T.RegExp,
                    J6 = T.String,
                    ve = T.TypeError,
                    Oa = A.prototype,
                    Z6 = ot.prototype,
                    Mr = ft.prototype,
                    Ga = T["__core-js_shared__"],
                    Na = Z6.toString,
                    ut = Mr.hasOwnProperty,
                    Q6 = 0,
                    e1 = function() {
                        var n = /[^.]+$/.exec(Ga && Ga.keys && Ga.keys.IE_PROTO || "");
                        return n ? "Symbol(src)_1." + n : ""
                    }(),
                    La = Mr.toString,
                    t3 = Na.call(ft),
                    e3 = Pt._,
                    n3 = rc("^" + Na.call(ut).replace($o, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                    Ia = Bf ? T.Buffer : r,
                    Sn = T.Symbol,
                    Ma = T.Uint8Array,
                    n1 = Ia ? Ia.allocUnsafe : r,
                    Pa = Qf(ft.getPrototypeOf, ft),
                    r1 = ft.create,
                    i1 = Mr.propertyIsEnumerable,
                    Ra = Oa.splice,
                    a1 = Sn ? Sn.isConcatSpreadable : r,
                    yi = Sn ? Sn.iterator : r,
                    tr = Sn ? Sn.toStringTag : r,
                    Da = function() {
                        try {
                            var n = ar(ft, "defineProperty");
                            return n({}, "", {}), n
                        } catch {}
                    }(),
                    r3 = T.clearTimeout !== Pt.clearTimeout && T.clearTimeout,
                    i3 = z && z.now !== Pt.Date.now && z.now,
                    a3 = T.setTimeout !== Pt.setTimeout && T.setTimeout,
                    ka = Tt.ceil,
                    Ba = Tt.floor,
                    ic = ft.getOwnPropertySymbols,
                    s3 = Ia ? Ia.isBuffer : r,
                    s1 = T.isFinite,
                    o3 = Oa.join,
                    c3 = Qf(ft.keys, ft),
                    St = Tt.max,
                    kt = Tt.min,
                    l3 = z.now,
                    u3 = T.parseInt,
                    o1 = Tt.random,
                    f3 = Oa.reverse,
                    ac = ar(T, "DataView"),
                    Ei = ar(T, "Map"),
                    sc = ar(T, "Promise"),
                    Pr = ar(T, "Set"),
                    wi = ar(T, "WeakMap"),
                    Ai = ar(ft, "create"),
                    $a = wi && new wi,
                    Rr = {},
                    d3 = sr(ac),
                    h3 = sr(Ei),
                    p3 = sr(sc),
                    m3 = sr(Pr),
                    g3 = sr(wi),
                    za = Sn ? Sn.prototype : r,
                    xi = za ? za.valueOf : r,
                    c1 = za ? za.toString : r;

                function p(n) {
                    if (yt(n) && !Z(n) && !(n instanceof rt)) {
                        if (n instanceof _e) return n;
                        if (ut.call(n, "__wrapped__")) return l2(n)
                    }
                    return new _e(n)
                }
                var Dr = function() {
                    function n() {}
                    return function(i) {
                        if (!bt(i)) return {};
                        if (r1) return r1(i);
                        n.prototype = i;
                        var s = new n;
                        return n.prototype = r, s
                    }
                }();

                function Ha() {}

                function _e(n, i) {
                    this.__wrapped__ = n, this.__actions__ = [], this.__chain__ = !!i, this.__index__ = 0, this.__values__ = r
                }
                p.templateSettings = {
                    escape: Np,
                    evaluate: Lp,
                    interpolate: vf,
                    variable: "",
                    imports: {
                        _: p
                    }
                }, p.prototype = Ha.prototype, p.prototype.constructor = p, _e.prototype = Dr(Ha.prototype), _e.prototype.constructor = _e;

                function rt(n) {
                    this.__wrapped__ = n, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Kt, this.__views__ = []
                }

                function v3() {
                    var n = new rt(this.__wrapped__);
                    return n.__actions__ = jt(this.__actions__), n.__dir__ = this.__dir__, n.__filtered__ = this.__filtered__, n.__iteratees__ = jt(this.__iteratees__), n.__takeCount__ = this.__takeCount__, n.__views__ = jt(this.__views__), n
                }

                function _3() {
                    if (this.__filtered__) {
                        var n = new rt(this);
                        n.__dir__ = -1, n.__filtered__ = !0
                    } else n = this.clone(), n.__dir__ *= -1;
                    return n
                }

                function b3() {
                    var n = this.__wrapped__.value(),
                        i = this.__dir__,
                        s = Z(n),
                        u = i < 0,
                        d = s ? n.length : 0,
                        m = L8(0, d, this.__views__),
                        _ = m.start,
                        b = m.end,
                        w = b - _,
                        O = u ? b : _ - 1,
                        G = this.__iteratees__,
                        I = G.length,
                        D = 0,
                        V = kt(w, this.__takeCount__);
                    if (!s || !u && d == w && V == w) return I1(n, this.__actions__);
                    var K = [];
                    t: for (; w-- && D < V;) {
                        O += i;
                        for (var tt = -1, j = n[O]; ++tt < I;) {
                            var nt = G[tt],
                                it = nt.iteratee,
                                ce = nt.type,
                                Vt = it(j);
                            if (ce == qe) j = Vt;
                            else if (!Vt) {
                                if (ce == De) continue t;
                                break t
                            }
                        }
                        K[D++] = j
                    }
                    return K
                }
                rt.prototype = Dr(Ha.prototype), rt.prototype.constructor = rt;

                function er(n) {
                    var i = -1,
                        s = n == null ? 0 : n.length;
                    for (this.clear(); ++i < s;) {
                        var u = n[i];
                        this.set(u[0], u[1])
                    }
                }

                function y3() {
                    this.__data__ = Ai ? Ai(null) : {}, this.size = 0
                }

                function E3(n) {
                    var i = this.has(n) && delete this.__data__[n];
                    return this.size -= i ? 1 : 0, i
                }

                function w3(n) {
                    var i = this.__data__;
                    if (Ai) {
                        var s = i[n];
                        return s === h ? r : s
                    }
                    return ut.call(i, n) ? i[n] : r
                }

                function A3(n) {
                    var i = this.__data__;
                    return Ai ? i[n] !== r : ut.call(i, n)
                }

                function x3(n, i) {
                    var s = this.__data__;
                    return this.size += this.has(n) ? 0 : 1, s[n] = Ai && i === r ? h : i, this
                }
                er.prototype.clear = y3, er.prototype.delete = E3, er.prototype.get = w3, er.prototype.has = A3, er.prototype.set = x3;

                function tn(n) {
                    var i = -1,
                        s = n == null ? 0 : n.length;
                    for (this.clear(); ++i < s;) {
                        var u = n[i];
                        this.set(u[0], u[1])
                    }
                }

                function C3() {
                    this.__data__ = [], this.size = 0
                }

                function T3(n) {
                    var i = this.__data__,
                        s = Fa(i, n);
                    if (s < 0) return !1;
                    var u = i.length - 1;
                    return s == u ? i.pop() : Ra.call(i, s, 1), --this.size, !0
                }

                function S3(n) {
                    var i = this.__data__,
                        s = Fa(i, n);
                    return s < 0 ? r : i[s][1]
                }

                function O3(n) {
                    return Fa(this.__data__, n) > -1
                }

                function G3(n, i) {
                    var s = this.__data__,
                        u = Fa(s, n);
                    return u < 0 ? (++this.size, s.push([n, i])) : s[u][1] = i, this
                }
                tn.prototype.clear = C3, tn.prototype.delete = T3, tn.prototype.get = S3, tn.prototype.has = O3, tn.prototype.set = G3;

                function en(n) {
                    var i = -1,
                        s = n == null ? 0 : n.length;
                    for (this.clear(); ++i < s;) {
                        var u = n[i];
                        this.set(u[0], u[1])
                    }
                }

                function N3() {
                    this.size = 0, this.__data__ = {
                        hash: new er,
                        map: new(Ei || tn),
                        string: new er
                    }
                }

                function L3(n) {
                    var i = ts(this, n).delete(n);
                    return this.size -= i ? 1 : 0, i
                }

                function I3(n) {
                    return ts(this, n).get(n)
                }

                function M3(n) {
                    return ts(this, n).has(n)
                }

                function P3(n, i) {
                    var s = ts(this, n),
                        u = s.size;
                    return s.set(n, i), this.size += s.size == u ? 0 : 1, this
                }
                en.prototype.clear = N3, en.prototype.delete = L3, en.prototype.get = I3, en.prototype.has = M3, en.prototype.set = P3;

                function nr(n) {
                    var i = -1,
                        s = n == null ? 0 : n.length;
                    for (this.__data__ = new en; ++i < s;) this.add(n[i])
                }

                function R3(n) {
                    return this.__data__.set(n, h), this
                }

                function D3(n) {
                    return this.__data__.has(n)
                }
                nr.prototype.add = nr.prototype.push = R3, nr.prototype.has = D3;

                function Ge(n) {
                    var i = this.__data__ = new tn(n);
                    this.size = i.size
                }

                function k3() {
                    this.__data__ = new tn, this.size = 0
                }

                function B3(n) {
                    var i = this.__data__,
                        s = i.delete(n);
                    return this.size = i.size, s
                }

                function $3(n) {
                    return this.__data__.get(n)
                }

                function z3(n) {
                    return this.__data__.has(n)
                }

                function H3(n, i) {
                    var s = this.__data__;
                    if (s instanceof tn) {
                        var u = s.__data__;
                        if (!Ei || u.length < o - 1) return u.push([n, i]), this.size = ++s.size, this;
                        s = this.__data__ = new en(u)
                    }
                    return s.set(n, i), this.size = s.size, this
                }
                Ge.prototype.clear = k3, Ge.prototype.delete = B3, Ge.prototype.get = $3, Ge.prototype.has = z3, Ge.prototype.set = H3;

                function l1(n, i) {
                    var s = Z(n),
                        u = !s && or(n),
                        d = !s && !u && In(n),
                        m = !s && !u && !d && zr(n),
                        _ = s || u || d || m,
                        b = _ ? tc(n.length, J6) : [],
                        w = b.length;
                    for (var O in n)(i || ut.call(n, O)) && !(_ && (O == "length" || d && (O == "offset" || O == "parent") || m && (O == "buffer" || O == "byteLength" || O == "byteOffset") || sn(O, w))) && b.push(O);
                    return b
                }

                function u1(n) {
                    var i = n.length;
                    return i ? n[vc(0, i - 1)] : r
                }

                function F3(n, i) {
                    return es(jt(n), rr(i, 0, n.length))
                }

                function V3(n) {
                    return es(jt(n))
                }

                function oc(n, i, s) {
                    (s !== r && !Ne(n[i], s) || s === r && !(i in n)) && nn(n, i, s)
                }

                function Ci(n, i, s) {
                    var u = n[i];
                    (!(ut.call(n, i) && Ne(u, s)) || s === r && !(i in n)) && nn(n, i, s)
                }

                function Fa(n, i) {
                    for (var s = n.length; s--;)
                        if (Ne(n[s][0], i)) return s;
                    return -1
                }

                function W3(n, i, s, u) {
                    return On(n, function(d, m, _) {
                        i(u, d, s(d), _)
                    }), u
                }

                function f1(n, i) {
                    return n && $e(i, Lt(i), n)
                }

                function U3(n, i) {
                    return n && $e(i, Xt(i), n)
                }

                function nn(n, i, s) {
                    i == "__proto__" && Da ? Da(n, i, {
                        configurable: !0,
                        enumerable: !0,
                        value: s,
                        writable: !0
                    }) : n[i] = s
                }

                function cc(n, i) {
                    for (var s = -1, u = i.length, d = A(u), m = n == null; ++s < u;) d[s] = m ? r : Fc(n, i[s]);
                    return d
                }

                function rr(n, i, s) {
                    return n === n && (s !== r && (n = n <= s ? n : s), i !== r && (n = n >= i ? n : i)), n
                }

                function be(n, i, s, u, d, m) {
                    var _, b = i & y,
                        w = i & x,
                        O = i & C;
                    if (s && (_ = d ? s(n, u, d, m) : s(n)), _ !== r) return _;
                    if (!bt(n)) return n;
                    var G = Z(n);
                    if (G) {
                        if (_ = M8(n), !b) return jt(n, _)
                    } else {
                        var I = Bt(n),
                            D = I == Sr || I == vi;
                        if (In(n)) return R1(n, b);
                        if (I == pe || I == zt || D && !d) {
                            if (_ = w || D ? {} : t2(n), !b) return w ? w8(n, U3(_, n)) : E8(n, f1(_, n))
                        } else {
                            if (!dt[I]) return d ? n : {};
                            _ = P8(n, I, b)
                        }
                    }
                    m || (m = new Ge);
                    var V = m.get(n);
                    if (V) return V;
                    m.set(n, _), G2(n) ? n.forEach(function(j) {
                        _.add(be(j, i, s, j, n, m))
                    }) : S2(n) && n.forEach(function(j, nt) {
                        _.set(nt, be(j, i, s, nt, n, m))
                    });
                    var K = O ? w ? Oc : Sc : w ? Xt : Lt,
                        tt = G ? r : K(n);
                    return ge(tt || n, function(j, nt) {
                        tt && (nt = j, j = n[nt]), Ci(_, nt, be(j, i, s, nt, n, m))
                    }), _
                }

                function Y3(n) {
                    var i = Lt(n);
                    return function(s) {
                        return d1(s, n, i)
                    }
                }

                function d1(n, i, s) {
                    var u = s.length;
                    if (n == null) return !u;
                    for (n = ft(n); u--;) {
                        var d = s[u],
                            m = i[d],
                            _ = n[d];
                        if (_ === r && !(d in n) || !m(_)) return !1
                    }
                    return !0
                }

                function h1(n, i, s) {
                    if (typeof n != "function") throw new ve(l);
                    return Ii(function() {
                        n.apply(r, s)
                    }, i)
                }

                function Ti(n, i, s, u) {
                    var d = -1,
                        m = Ca,
                        _ = !0,
                        b = n.length,
                        w = [],
                        O = i.length;
                    if (!b) return w;
                    s && (i = vt(i, ae(s))), u ? (m = jo, _ = !1) : i.length >= o && (m = bi, _ = !1, i = new nr(i));
                    t: for (; ++d < b;) {
                        var G = n[d],
                            I = s == null ? G : s(G);
                        if (G = u || G !== 0 ? G : 0, _ && I === I) {
                            for (var D = O; D--;)
                                if (i[D] === I) continue t;
                            w.push(G)
                        } else m(i, I, u) || w.push(G)
                    }
                    return w
                }
                var On = z1(Be),
                    p1 = z1(uc, !0);

                function K3(n, i) {
                    var s = !0;
                    return On(n, function(u, d, m) {
                        return s = !!i(u, d, m), s
                    }), s
                }

                function Va(n, i, s) {
                    for (var u = -1, d = n.length; ++u < d;) {
                        var m = n[u],
                            _ = i(m);
                        if (_ != null && (b === r ? _ === _ && !oe(_) : s(_, b))) var b = _,
                            w = m
                    }
                    return w
                }

                function j3(n, i, s, u) {
                    var d = n.length;
                    for (s = Q(s), s < 0 && (s = -s > d ? 0 : d + s), u = u === r || u > d ? d : Q(u), u < 0 && (u += d), u = s > u ? 0 : L2(u); s < u;) n[s++] = i;
                    return n
                }

                function m1(n, i) {
                    var s = [];
                    return On(n, function(u, d, m) {
                        i(u, d, m) && s.push(u)
                    }), s
                }

                function Rt(n, i, s, u, d) {
                    var m = -1,
                        _ = n.length;
                    for (s || (s = D8), d || (d = []); ++m < _;) {
                        var b = n[m];
                        i > 0 && s(b) ? i > 1 ? Rt(b, i - 1, s, u, d) : Cn(d, b) : u || (d[d.length] = b)
                    }
                    return d
                }
                var lc = H1(),
                    g1 = H1(!0);

                function Be(n, i) {
                    return n && lc(n, i, Lt)
                }

                function uc(n, i) {
                    return n && g1(n, i, Lt)
                }

                function Wa(n, i) {
                    return xn(i, function(s) {
                        return on(n[s])
                    })
                }

                function ir(n, i) {
                    i = Nn(i, n);
                    for (var s = 0, u = i.length; n != null && s < u;) n = n[ze(i[s++])];
                    return s && s == u ? n : r
                }

                function v1(n, i, s) {
                    var u = i(n);
                    return Z(n) ? u : Cn(u, s(n))
                }

                function Ht(n) {
                    return n == null ? n === r ? _i : ba : tr && tr in ft(n) ? N8(n) : V8(n)
                }

                function fc(n, i) {
                    return n > i
                }

                function q3(n, i) {
                    return n != null && ut.call(n, i)
                }

                function X3(n, i) {
                    return n != null && i in ft(n)
                }

                function J3(n, i, s) {
                    return n >= kt(i, s) && n < St(i, s)
                }

                function dc(n, i, s) {
                    for (var u = s ? jo : Ca, d = n[0].length, m = n.length, _ = m, b = A(m), w = 1 / 0, O = []; _--;) {
                        var G = n[_];
                        _ && i && (G = vt(G, ae(i))), w = kt(G.length, w), b[_] = !s && (i || d >= 120 && G.length >= 120) ? new nr(_ && G) : r
                    }
                    G = n[0];
                    var I = -1,
                        D = b[0];
                    t: for (; ++I < d && O.length < w;) {
                        var V = G[I],
                            K = i ? i(V) : V;
                        if (V = s || V !== 0 ? V : 0, !(D ? bi(D, K) : u(O, K, s))) {
                            for (_ = m; --_;) {
                                var tt = b[_];
                                if (!(tt ? bi(tt, K) : u(n[_], K, s))) continue t
                            }
                            D && D.push(K), O.push(V)
                        }
                    }
                    return O
                }

                function Z3(n, i, s, u) {
                    return Be(n, function(d, m, _) {
                        i(u, s(d), m, _)
                    }), u
                }

                function Si(n, i, s) {
                    i = Nn(i, n), n = i2(n, i);
                    var u = n == null ? n : n[ze(Ee(i))];
                    return u == null ? r : ie(u, n, s)
                }

                function _1(n) {
                    return yt(n) && Ht(n) == zt
                }

                function Q3(n) {
                    return yt(n) && Ht(n) == An
                }

                function t8(n) {
                    return yt(n) && Ht(n) == Ze
                }

                function Oi(n, i, s, u, d) {
                    return n === i ? !0 : n == null || i == null || !yt(n) && !yt(i) ? n !== n && i !== i : e8(n, i, s, u, Oi, d)
                }

                function e8(n, i, s, u, d, m) {
                    var _ = Z(n),
                        b = Z(i),
                        w = _ ? ke : Bt(n),
                        O = b ? ke : Bt(i);
                    w = w == zt ? pe : w, O = O == zt ? pe : O;
                    var G = w == pe,
                        I = O == pe,
                        D = w == O;
                    if (D && In(n)) {
                        if (!In(i)) return !1;
                        _ = !0, G = !1
                    }
                    if (D && !G) return m || (m = new Ge), _ || zr(n) ? J1(n, i, s, u, d, m) : O8(n, i, w, s, u, d, m);
                    if (!(s & L)) {
                        var V = G && ut.call(n, "__wrapped__"),
                            K = I && ut.call(i, "__wrapped__");
                        if (V || K) {
                            var tt = V ? n.value() : n,
                                j = K ? i.value() : i;
                            return m || (m = new Ge), d(tt, j, s, u, m)
                        }
                    }
                    return D ? (m || (m = new Ge), G8(n, i, s, u, d, m)) : !1
                }

                function n8(n) {
                    return yt(n) && Bt(n) == ne
                }

                function hc(n, i, s, u) {
                    var d = s.length,
                        m = d,
                        _ = !u;
                    if (n == null) return !m;
                    for (n = ft(n); d--;) {
                        var b = s[d];
                        if (_ && b[2] ? b[1] !== n[b[0]] : !(b[0] in n)) return !1
                    }
                    for (; ++d < m;) {
                        b = s[d];
                        var w = b[0],
                            O = n[w],
                            G = b[1];
                        if (_ && b[2]) {
                            if (O === r && !(w in n)) return !1
                        } else {
                            var I = new Ge;
                            if (u) var D = u(O, G, w, n, i, I);
                            if (!(D === r ? Oi(G, O, L | P, u, I) : D)) return !1
                        }
                    }
                    return !0
                }

                function b1(n) {
                    if (!bt(n) || B8(n)) return !1;
                    var i = on(n) ? n3 : Yp;
                    return i.test(sr(n))
                }

                function r8(n) {
                    return yt(n) && Ht(n) == re
                }

                function i8(n) {
                    return yt(n) && Bt(n) == Dt
                }

                function a8(n) {
                    return yt(n) && os(n.length) && !!pt[Ht(n)]
                }

                function y1(n) {
                    return typeof n == "function" ? n : n == null ? Jt : typeof n == "object" ? Z(n) ? A1(n[0], n[1]) : w1(n) : F2(n)
                }

                function pc(n) {
                    if (!Li(n)) return c3(n);
                    var i = [];
                    for (var s in ft(n)) ut.call(n, s) && s != "constructor" && i.push(s);
                    return i
                }

                function s8(n) {
                    if (!bt(n)) return F8(n);
                    var i = Li(n),
                        s = [];
                    for (var u in n) u == "constructor" && (i || !ut.call(n, u)) || s.push(u);
                    return s
                }

                function mc(n, i) {
                    return n < i
                }

                function E1(n, i) {
                    var s = -1,
                        u = qt(n) ? A(n.length) : [];
                    return On(n, function(d, m, _) {
                        u[++s] = i(d, m, _)
                    }), u
                }

                function w1(n) {
                    var i = Nc(n);
                    return i.length == 1 && i[0][2] ? n2(i[0][0], i[0][1]) : function(s) {
                        return s === n || hc(s, n, i)
                    }
                }

                function A1(n, i) {
                    return Ic(n) && e2(i) ? n2(ze(n), i) : function(s) {
                        var u = Fc(s, n);
                        return u === r && u === i ? Vc(s, n) : Oi(i, u, L | P)
                    }
                }

                function Ua(n, i, s, u, d) {
                    n !== i && lc(i, function(m, _) {
                        if (d || (d = new Ge), bt(m)) o8(n, i, _, s, Ua, u, d);
                        else {
                            var b = u ? u(Pc(n, _), m, _ + "", n, i, d) : r;
                            b === r && (b = m), oc(n, _, b)
                        }
                    }, Xt)
                }

                function o8(n, i, s, u, d, m, _) {
                    var b = Pc(n, s),
                        w = Pc(i, s),
                        O = _.get(w);
                    if (O) {
                        oc(n, s, O);
                        return
                    }
                    var G = m ? m(b, w, s + "", n, i, _) : r,
                        I = G === r;
                    if (I) {
                        var D = Z(w),
                            V = !D && In(w),
                            K = !D && !V && zr(w);
                        G = w, D || V || K ? Z(b) ? G = b : wt(b) ? G = jt(b) : V ? (I = !1, G = R1(w, !0)) : K ? (I = !1, G = D1(w, !0)) : G = [] : Mi(w) || or(w) ? (G = b, or(b) ? G = I2(b) : (!bt(b) || on(b)) && (G = t2(w))) : I = !1
                    }
                    I && (_.set(w, G), d(G, w, u, m, _), _.delete(w)), oc(n, s, G)
                }

                function x1(n, i) {
                    var s = n.length;
                    if (!!s) return i += i < 0 ? s : 0, sn(i, s) ? n[i] : r
                }

                function C1(n, i, s) {
                    i.length ? i = vt(i, function(m) {
                        return Z(m) ? function(_) {
                            return ir(_, m.length === 1 ? m[0] : m)
                        } : m
                    }) : i = [Jt];
                    var u = -1;
                    i = vt(i, ae(Y()));
                    var d = E1(n, function(m, _, b) {
                        var w = vt(i, function(O) {
                            return O(m)
                        });
                        return {
                            criteria: w,
                            index: ++u,
                            value: m
                        }
                    });
                    return P6(d, function(m, _) {
                        return y8(m, _, s)
                    })
                }

                function c8(n, i) {
                    return T1(n, i, function(s, u) {
                        return Vc(n, u)
                    })
                }

                function T1(n, i, s) {
                    for (var u = -1, d = i.length, m = {}; ++u < d;) {
                        var _ = i[u],
                            b = ir(n, _);
                        s(b, _) && Gi(m, Nn(_, n), b)
                    }
                    return m
                }

                function l8(n) {
                    return function(i) {
                        return ir(i, n)
                    }
                }

                function gc(n, i, s, u) {
                    var d = u ? M6 : Gr,
                        m = -1,
                        _ = i.length,
                        b = n;
                    for (n === i && (i = jt(i)), s && (b = vt(n, ae(s))); ++m < _;)
                        for (var w = 0, O = i[m], G = s ? s(O) : O;
                            (w = d(b, G, w, u)) > -1;) b !== n && Ra.call(b, w, 1), Ra.call(n, w, 1);
                    return n
                }

                function S1(n, i) {
                    for (var s = n ? i.length : 0, u = s - 1; s--;) {
                        var d = i[s];
                        if (s == u || d !== m) {
                            var m = d;
                            sn(d) ? Ra.call(n, d, 1) : yc(n, d)
                        }
                    }
                    return n
                }

                function vc(n, i) {
                    return n + Ba(o1() * (i - n + 1))
                }

                function u8(n, i, s, u) {
                    for (var d = -1, m = St(ka((i - n) / (s || 1)), 0), _ = A(m); m--;) _[u ? m : ++d] = n, n += s;
                    return _
                }

                function _c(n, i) {
                    var s = "";
                    if (!n || i < 1 || i > te) return s;
                    do i % 2 && (s += n), i = Ba(i / 2), i && (n += n); while (i);
                    return s
                }

                function et(n, i) {
                    return Rc(r2(n, i, Jt), n + "")
                }

                function f8(n) {
                    return u1(Hr(n))
                }

                function d8(n, i) {
                    var s = Hr(n);
                    return es(s, rr(i, 0, s.length))
                }

                function Gi(n, i, s, u) {
                    if (!bt(n)) return n;
                    i = Nn(i, n);
                    for (var d = -1, m = i.length, _ = m - 1, b = n; b != null && ++d < m;) {
                        var w = ze(i[d]),
                            O = s;
                        if (w === "__proto__" || w === "constructor" || w === "prototype") return n;
                        if (d != _) {
                            var G = b[w];
                            O = u ? u(G, w, b) : r, O === r && (O = bt(G) ? G : sn(i[d + 1]) ? [] : {})
                        }
                        Ci(b, w, O), b = b[w]
                    }
                    return n
                }
                var O1 = $a ? function(n, i) {
                        return $a.set(n, i), n
                    } : Jt,
                    h8 = Da ? function(n, i) {
                        return Da(n, "toString", {
                            configurable: !0,
                            enumerable: !1,
                            value: Uc(i),
                            writable: !0
                        })
                    } : Jt;

                function p8(n) {
                    return es(Hr(n))
                }

                function ye(n, i, s) {
                    var u = -1,
                        d = n.length;
                    i < 0 && (i = -i > d ? 0 : d + i), s = s > d ? d : s, s < 0 && (s += d), d = i > s ? 0 : s - i >>> 0, i >>>= 0;
                    for (var m = A(d); ++u < d;) m[u] = n[u + i];
                    return m
                }

                function m8(n, i) {
                    var s;
                    return On(n, function(u, d, m) {
                        return s = i(u, d, m), !s
                    }), !!s
                }

                function Ya(n, i, s) {
                    var u = 0,
                        d = n == null ? u : n.length;
                    if (typeof i == "number" && i === i && d <= Cr) {
                        for (; u < d;) {
                            var m = u + d >>> 1,
                                _ = n[m];
                            _ !== null && !oe(_) && (s ? _ <= i : _ < i) ? u = m + 1 : d = m
                        }
                        return d
                    }
                    return bc(n, i, Jt, s)
                }

                function bc(n, i, s, u) {
                    var d = 0,
                        m = n == null ? 0 : n.length;
                    if (m === 0) return 0;
                    i = s(i);
                    for (var _ = i !== i, b = i === null, w = oe(i), O = i === r; d < m;) {
                        var G = Ba((d + m) / 2),
                            I = s(n[G]),
                            D = I !== r,
                            V = I === null,
                            K = I === I,
                            tt = oe(I);
                        if (_) var j = u || K;
                        else O ? j = K && (u || D) : b ? j = K && D && (u || !V) : w ? j = K && D && !V && (u || !tt) : V || tt ? j = !1 : j = u ? I <= i : I < i;
                        j ? d = G + 1 : m = G
                    }
                    return kt(m, Xn)
                }

                function G1(n, i) {
                    for (var s = -1, u = n.length, d = 0, m = []; ++s < u;) {
                        var _ = n[s],
                            b = i ? i(_) : _;
                        if (!s || !Ne(b, w)) {
                            var w = b;
                            m[d++] = _ === 0 ? 0 : _
                        }
                    }
                    return m
                }

                function N1(n) {
                    return typeof n == "number" ? n : oe(n) ? Je : +n
                }

                function se(n) {
                    if (typeof n == "string") return n;
                    if (Z(n)) return vt(n, se) + "";
                    if (oe(n)) return c1 ? c1.call(n) : "";
                    var i = n + "";
                    return i == "0" && 1 / n == -Ct ? "-0" : i
                }

                function Gn(n, i, s) {
                    var u = -1,
                        d = Ca,
                        m = n.length,
                        _ = !0,
                        b = [],
                        w = b;
                    if (s) _ = !1, d = jo;
                    else if (m >= o) {
                        var O = i ? null : T8(n);
                        if (O) return Sa(O);
                        _ = !1, d = bi, w = new nr
                    } else w = i ? [] : b;
                    t: for (; ++u < m;) {
                        var G = n[u],
                            I = i ? i(G) : G;
                        if (G = s || G !== 0 ? G : 0, _ && I === I) {
                            for (var D = w.length; D--;)
                                if (w[D] === I) continue t;
                            i && w.push(I), b.push(G)
                        } else d(w, I, s) || (w !== b && w.push(I), b.push(G))
                    }
                    return b
                }

                function yc(n, i) {
                    return i = Nn(i, n), n = i2(n, i), n == null || delete n[ze(Ee(i))]
                }

                function L1(n, i, s, u) {
                    return Gi(n, i, s(ir(n, i)), u)
                }

                function Ka(n, i, s, u) {
                    for (var d = n.length, m = u ? d : -1;
                        (u ? m-- : ++m < d) && i(n[m], m, n););
                    return s ? ye(n, u ? 0 : m, u ? m + 1 : d) : ye(n, u ? m + 1 : 0, u ? d : m)
                }

                function I1(n, i) {
                    var s = n;
                    return s instanceof rt && (s = s.value()), qo(i, function(u, d) {
                        return d.func.apply(d.thisArg, Cn([u], d.args))
                    }, s)
                }

                function Ec(n, i, s) {
                    var u = n.length;
                    if (u < 2) return u ? Gn(n[0]) : [];
                    for (var d = -1, m = A(u); ++d < u;)
                        for (var _ = n[d], b = -1; ++b < u;) b != d && (m[d] = Ti(m[d] || _, n[b], i, s));
                    return Gn(Rt(m, 1), i, s)
                }

                function M1(n, i, s) {
                    for (var u = -1, d = n.length, m = i.length, _ = {}; ++u < d;) {
                        var b = u < m ? i[u] : r;
                        s(_, n[u], b)
                    }
                    return _
                }

                function wc(n) {
                    return wt(n) ? n : []
                }

                function Ac(n) {
                    return typeof n == "function" ? n : Jt
                }

                function Nn(n, i) {
                    return Z(n) ? n : Ic(n, i) ? [n] : c2(ct(n))
                }
                var g8 = et;

                function Ln(n, i, s) {
                    var u = n.length;
                    return s = s === r ? u : s, !i && s >= u ? n : ye(n, i, s)
                }
                var P1 = r3 || function(n) {
                    return Pt.clearTimeout(n)
                };

                function R1(n, i) {
                    if (i) return n.slice();
                    var s = n.length,
                        u = n1 ? n1(s) : new n.constructor(s);
                    return n.copy(u), u
                }

                function xc(n) {
                    var i = new n.constructor(n.byteLength);
                    return new Ma(i).set(new Ma(n)), i
                }

                function v8(n, i) {
                    var s = i ? xc(n.buffer) : n.buffer;
                    return new n.constructor(s, n.byteOffset, n.byteLength)
                }

                function _8(n) {
                    var i = new n.constructor(n.source, _f.exec(n));
                    return i.lastIndex = n.lastIndex, i
                }

                function b8(n) {
                    return xi ? ft(xi.call(n)) : {}
                }

                function D1(n, i) {
                    var s = i ? xc(n.buffer) : n.buffer;
                    return new n.constructor(s, n.byteOffset, n.length)
                }

                function k1(n, i) {
                    if (n !== i) {
                        var s = n !== r,
                            u = n === null,
                            d = n === n,
                            m = oe(n),
                            _ = i !== r,
                            b = i === null,
                            w = i === i,
                            O = oe(i);
                        if (!b && !O && !m && n > i || m && _ && w && !b && !O || u && _ && w || !s && w || !d) return 1;
                        if (!u && !m && !O && n < i || O && s && d && !u && !m || b && s && d || !_ && d || !w) return -1
                    }
                    return 0
                }

                function y8(n, i, s) {
                    for (var u = -1, d = n.criteria, m = i.criteria, _ = d.length, b = s.length; ++u < _;) {
                        var w = k1(d[u], m[u]);
                        if (w) {
                            if (u >= b) return w;
                            var O = s[u];
                            return w * (O == "desc" ? -1 : 1)
                        }
                    }
                    return n.index - i.index
                }

                function B1(n, i, s, u) {
                    for (var d = -1, m = n.length, _ = s.length, b = -1, w = i.length, O = St(m - _, 0), G = A(w + O), I = !u; ++b < w;) G[b] = i[b];
                    for (; ++d < _;)(I || d < m) && (G[s[d]] = n[d]);
                    for (; O--;) G[b++] = n[d++];
                    return G
                }

                function $1(n, i, s, u) {
                    for (var d = -1, m = n.length, _ = -1, b = s.length, w = -1, O = i.length, G = St(m - b, 0), I = A(G + O), D = !u; ++d < G;) I[d] = n[d];
                    for (var V = d; ++w < O;) I[V + w] = i[w];
                    for (; ++_ < b;)(D || d < m) && (I[V + s[_]] = n[d++]);
                    return I
                }

                function jt(n, i) {
                    var s = -1,
                        u = n.length;
                    for (i || (i = A(u)); ++s < u;) i[s] = n[s];
                    return i
                }

                function $e(n, i, s, u) {
                    var d = !s;
                    s || (s = {});
                    for (var m = -1, _ = i.length; ++m < _;) {
                        var b = i[m],
                            w = u ? u(s[b], n[b], b, s, n) : r;
                        w === r && (w = n[b]), d ? nn(s, b, w) : Ci(s, b, w)
                    }
                    return s
                }

                function E8(n, i) {
                    return $e(n, Lc(n), i)
                }

                function w8(n, i) {
                    return $e(n, Z1(n), i)
                }

                function ja(n, i) {
                    return function(s, u) {
                        var d = Z(s) ? S6 : W3,
                            m = i ? i() : {};
                        return d(s, n, Y(u, 2), m)
                    }
                }

                function kr(n) {
                    return et(function(i, s) {
                        var u = -1,
                            d = s.length,
                            m = d > 1 ? s[d - 1] : r,
                            _ = d > 2 ? s[2] : r;
                        for (m = n.length > 3 && typeof m == "function" ? (d--, m) : r, _ && Ft(s[0], s[1], _) && (m = d < 3 ? r : m, d = 1), i = ft(i); ++u < d;) {
                            var b = s[u];
                            b && n(i, b, u, m)
                        }
                        return i
                    })
                }

                function z1(n, i) {
                    return function(s, u) {
                        if (s == null) return s;
                        if (!qt(s)) return n(s, u);
                        for (var d = s.length, m = i ? d : -1, _ = ft(s);
                            (i ? m-- : ++m < d) && u(_[m], m, _) !== !1;);
                        return s
                    }
                }

                function H1(n) {
                    return function(i, s, u) {
                        for (var d = -1, m = ft(i), _ = u(i), b = _.length; b--;) {
                            var w = _[n ? b : ++d];
                            if (s(m[w], w, m) === !1) break
                        }
                        return i
                    }
                }

                function A8(n, i, s) {
                    var u = i & N,
                        d = Ni(n);

                    function m() {
                        var _ = this && this !== Pt && this instanceof m ? d : n;
                        return _.apply(u ? s : this, arguments)
                    }
                    return m
                }

                function F1(n) {
                    return function(i) {
                        i = ct(i);
                        var s = Nr(i) ? Oe(i) : r,
                            u = s ? s[0] : i.charAt(0),
                            d = s ? Ln(s, 1).join("") : i.slice(1);
                        return u[n]() + d
                    }
                }

                function Br(n) {
                    return function(i) {
                        return qo(z2($2(i).replace(h6, "")), n, "")
                    }
                }

                function Ni(n) {
                    return function() {
                        var i = arguments;
                        switch (i.length) {
                            case 0:
                                return new n;
                            case 1:
                                return new n(i[0]);
                            case 2:
                                return new n(i[0], i[1]);
                            case 3:
                                return new n(i[0], i[1], i[2]);
                            case 4:
                                return new n(i[0], i[1], i[2], i[3]);
                            case 5:
                                return new n(i[0], i[1], i[2], i[3], i[4]);
                            case 6:
                                return new n(i[0], i[1], i[2], i[3], i[4], i[5]);
                            case 7:
                                return new n(i[0], i[1], i[2], i[3], i[4], i[5], i[6])
                        }
                        var s = Dr(n.prototype),
                            u = n.apply(s, i);
                        return bt(u) ? u : s
                    }
                }

                function x8(n, i, s) {
                    var u = Ni(n);

                    function d() {
                        for (var m = arguments.length, _ = A(m), b = m, w = $r(d); b--;) _[b] = arguments[b];
                        var O = m < 3 && _[0] !== w && _[m - 1] !== w ? [] : Tn(_, w);
                        if (m -= O.length, m < s) return K1(n, i, qa, d.placeholder, r, _, O, r, r, s - m);
                        var G = this && this !== Pt && this instanceof d ? u : n;
                        return ie(G, this, _)
                    }
                    return d
                }

                function V1(n) {
                    return function(i, s, u) {
                        var d = ft(i);
                        if (!qt(i)) {
                            var m = Y(s, 3);
                            i = Lt(i), s = function(b) {
                                return m(d[b], b, d)
                            }
                        }
                        var _ = n(i, s, u);
                        return _ > -1 ? d[m ? i[_] : _] : r
                    }
                }

                function W1(n) {
                    return an(function(i) {
                        var s = i.length,
                            u = s,
                            d = _e.prototype.thru;
                        for (n && i.reverse(); u--;) {
                            var m = i[u];
                            if (typeof m != "function") throw new ve(l);
                            if (d && !_ && Qa(m) == "wrapper") var _ = new _e([], !0)
                        }
                        for (u = _ ? u : s; ++u < s;) {
                            m = i[u];
                            var b = Qa(m),
                                w = b == "wrapper" ? Gc(m) : r;
                            w && Mc(w[0]) && w[1] == (J | k | F | lt) && !w[4].length && w[9] == 1 ? _ = _[Qa(w[0])].apply(_, w[3]) : _ = m.length == 1 && Mc(m) ? _[b]() : _.thru(m)
                        }
                        return function() {
                            var O = arguments,
                                G = O[0];
                            if (_ && O.length == 1 && Z(G)) return _.plant(G).value();
                            for (var I = 0, D = s ? i[I].apply(this, O) : G; ++I < s;) D = i[I].call(this, D);
                            return D
                        }
                    })
                }

                function qa(n, i, s, u, d, m, _, b, w, O) {
                    var G = i & J,
                        I = i & N,
                        D = i & R,
                        V = i & (k | B),
                        K = i & at,
                        tt = D ? r : Ni(n);

                    function j() {
                        for (var nt = arguments.length, it = A(nt), ce = nt; ce--;) it[ce] = arguments[ce];
                        if (V) var Vt = $r(j),
                            le = D6(it, Vt);
                        if (u && (it = B1(it, u, d, V)), m && (it = $1(it, m, _, V)), nt -= le, V && nt < O) {
                            var At = Tn(it, Vt);
                            return K1(n, i, qa, j.placeholder, s, it, At, b, w, O - nt)
                        }
                        var Le = I ? s : this,
                            ln = D ? Le[n] : n;
                        return nt = it.length, b ? it = W8(it, b) : K && nt > 1 && it.reverse(), G && w < nt && (it.length = w), this && this !== Pt && this instanceof j && (ln = tt || Ni(ln)), ln.apply(Le, it)
                    }
                    return j
                }

                function U1(n, i) {
                    return function(s, u) {
                        return Z3(s, n, i(u), {})
                    }
                }

                function Xa(n, i) {
                    return function(s, u) {
                        var d;
                        if (s === r && u === r) return i;
                        if (s !== r && (d = s), u !== r) {
                            if (d === r) return u;
                            typeof s == "string" || typeof u == "string" ? (s = se(s), u = se(u)) : (s = N1(s), u = N1(u)), d = n(s, u)
                        }
                        return d
                    }
                }

                function Cc(n) {
                    return an(function(i) {
                        return i = vt(i, ae(Y())), et(function(s) {
                            var u = this;
                            return n(i, function(d) {
                                return ie(d, u, s)
                            })
                        })
                    })
                }

                function Ja(n, i) {
                    i = i === r ? " " : se(i);
                    var s = i.length;
                    if (s < 2) return s ? _c(i, n) : i;
                    var u = _c(i, ka(n / Lr(i)));
                    return Nr(i) ? Ln(Oe(u), 0, n).join("") : u.slice(0, n)
                }

                function C8(n, i, s, u) {
                    var d = i & N,
                        m = Ni(n);

                    function _() {
                        for (var b = -1, w = arguments.length, O = -1, G = u.length, I = A(G + w), D = this && this !== Pt && this instanceof _ ? m : n; ++O < G;) I[O] = u[O];
                        for (; w--;) I[O++] = arguments[++b];
                        return ie(D, d ? s : this, I)
                    }
                    return _
                }

                function Y1(n) {
                    return function(i, s, u) {
                        return u && typeof u != "number" && Ft(i, s, u) && (s = u = r), i = cn(i), s === r ? (s = i, i = 0) : s = cn(s), u = u === r ? i < s ? 1 : -1 : cn(u), u8(i, s, u, n)
                    }
                }

                function Za(n) {
                    return function(i, s) {
                        return typeof i == "string" && typeof s == "string" || (i = we(i), s = we(s)), n(i, s)
                    }
                }

                function K1(n, i, s, u, d, m, _, b, w, O) {
                    var G = i & k,
                        I = G ? _ : r,
                        D = G ? r : _,
                        V = G ? m : r,
                        K = G ? r : m;
                    i |= G ? F : q, i &= ~(G ? q : F), i & $ || (i &= ~(N | R));
                    var tt = [n, i, d, V, I, K, D, b, w, O],
                        j = s.apply(r, tt);
                    return Mc(n) && a2(j, tt), j.placeholder = u, s2(j, n, i)
                }

                function Tc(n) {
                    var i = Tt[n];
                    return function(s, u) {
                        if (s = we(s), u = u == null ? 0 : kt(Q(u), 292), u && s1(s)) {
                            var d = (ct(s) + "e").split("e"),
                                m = i(d[0] + "e" + (+d[1] + u));
                            return d = (ct(m) + "e").split("e"), +(d[0] + "e" + (+d[1] - u))
                        }
                        return i(s)
                    }
                }
                var T8 = Pr && 1 / Sa(new Pr([, -0]))[1] == Ct ? function(n) {
                    return new Pr(n)
                } : jc;

                function j1(n) {
                    return function(i) {
                        var s = Bt(i);
                        return s == ne ? nc(i) : s == Dt ? V6(i) : R6(i, n(i))
                    }
                }

                function rn(n, i, s, u, d, m, _, b) {
                    var w = i & R;
                    if (!w && typeof n != "function") throw new ve(l);
                    var O = u ? u.length : 0;
                    if (O || (i &= ~(F | q), u = d = r), _ = _ === r ? _ : St(Q(_), 0), b = b === r ? b : Q(b), O -= d ? d.length : 0, i & q) {
                        var G = u,
                            I = d;
                        u = d = r
                    }
                    var D = w ? r : Gc(n),
                        V = [n, i, s, u, d, G, I, m, _, b];
                    if (D && H8(V, D), n = V[0], i = V[1], s = V[2], u = V[3], d = V[4], b = V[9] = V[9] === r ? w ? 0 : n.length : St(V[9] - O, 0), !b && i & (k | B) && (i &= ~(k | B)), !i || i == N) var K = A8(n, i, s);
                    else i == k || i == B ? K = x8(n, i, b) : (i == F || i == (N | F)) && !d.length ? K = C8(n, i, s, u) : K = qa.apply(r, V);
                    var tt = D ? O1 : a2;
                    return s2(tt(K, V), n, i)
                }

                function q1(n, i, s, u) {
                    return n === r || Ne(n, Mr[s]) && !ut.call(u, s) ? i : n
                }

                function X1(n, i, s, u, d, m) {
                    return bt(n) && bt(i) && (m.set(i, n), Ua(n, i, r, X1, m), m.delete(i)), n
                }

                function S8(n) {
                    return Mi(n) ? r : n
                }

                function J1(n, i, s, u, d, m) {
                    var _ = s & L,
                        b = n.length,
                        w = i.length;
                    if (b != w && !(_ && w > b)) return !1;
                    var O = m.get(n),
                        G = m.get(i);
                    if (O && G) return O == i && G == n;
                    var I = -1,
                        D = !0,
                        V = s & P ? new nr : r;
                    for (m.set(n, i), m.set(i, n); ++I < b;) {
                        var K = n[I],
                            tt = i[I];
                        if (u) var j = _ ? u(tt, K, I, i, n, m) : u(K, tt, I, n, i, m);
                        if (j !== r) {
                            if (j) continue;
                            D = !1;
                            break
                        }
                        if (V) {
                            if (!Xo(i, function(nt, it) {
                                    if (!bi(V, it) && (K === nt || d(K, nt, s, u, m))) return V.push(it)
                                })) {
                                D = !1;
                                break
                            }
                        } else if (!(K === tt || d(K, tt, s, u, m))) {
                            D = !1;
                            break
                        }
                    }
                    return m.delete(n), m.delete(i), D
                }

                function O8(n, i, s, u, d, m, _) {
                    switch (s) {
                        case Qe:
                            if (n.byteLength != i.byteLength || n.byteOffset != i.byteOffset) return !1;
                            n = n.buffer, i = i.buffer;
                        case An:
                            return !(n.byteLength != i.byteLength || !m(new Ma(n), new Ma(i)));
                        case ee:
                        case Ze:
                        case Jn:
                            return Ne(+n, +i);
                        case yn:
                            return n.name == i.name && n.message == i.message;
                        case re:
                        case En:
                            return n == i + "";
                        case ne:
                            var b = nc;
                        case Dt:
                            var w = u & L;
                            if (b || (b = Sa), n.size != i.size && !w) return !1;
                            var O = _.get(n);
                            if (O) return O == i;
                            u |= P, _.set(n, i);
                            var G = J1(b(n), b(i), u, d, m, _);
                            return _.delete(n), G;
                        case Zn:
                            if (xi) return xi.call(n) == xi.call(i)
                    }
                    return !1
                }

                function G8(n, i, s, u, d, m) {
                    var _ = s & L,
                        b = Sc(n),
                        w = b.length,
                        O = Sc(i),
                        G = O.length;
                    if (w != G && !_) return !1;
                    for (var I = w; I--;) {
                        var D = b[I];
                        if (!(_ ? D in i : ut.call(i, D))) return !1
                    }
                    var V = m.get(n),
                        K = m.get(i);
                    if (V && K) return V == i && K == n;
                    var tt = !0;
                    m.set(n, i), m.set(i, n);
                    for (var j = _; ++I < w;) {
                        D = b[I];
                        var nt = n[D],
                            it = i[D];
                        if (u) var ce = _ ? u(it, nt, D, i, n, m) : u(nt, it, D, n, i, m);
                        if (!(ce === r ? nt === it || d(nt, it, s, u, m) : ce)) {
                            tt = !1;
                            break
                        }
                        j || (j = D == "constructor")
                    }
                    if (tt && !j) {
                        var Vt = n.constructor,
                            le = i.constructor;
                        Vt != le && "constructor" in n && "constructor" in i && !(typeof Vt == "function" && Vt instanceof Vt && typeof le == "function" && le instanceof le) && (tt = !1)
                    }
                    return m.delete(n), m.delete(i), tt
                }

                function an(n) {
                    return Rc(r2(n, r, d2), n + "")
                }

                function Sc(n) {
                    return v1(n, Lt, Lc)
                }

                function Oc(n) {
                    return v1(n, Xt, Z1)
                }
                var Gc = $a ? function(n) {
                    return $a.get(n)
                } : jc;

                function Qa(n) {
                    for (var i = n.name + "", s = Rr[i], u = ut.call(Rr, i) ? s.length : 0; u--;) {
                        var d = s[u],
                            m = d.func;
                        if (m == null || m == n) return d.name
                    }
                    return i
                }

                function $r(n) {
                    var i = ut.call(p, "placeholder") ? p : n;
                    return i.placeholder
                }

                function Y() {
                    var n = p.iteratee || Yc;
                    return n = n === Yc ? y1 : n, arguments.length ? n(arguments[0], arguments[1]) : n
                }

                function ts(n, i) {
                    var s = n.__data__;
                    return k8(i) ? s[typeof i == "string" ? "string" : "hash"] : s.map
                }

                function Nc(n) {
                    for (var i = Lt(n), s = i.length; s--;) {
                        var u = i[s],
                            d = n[u];
                        i[s] = [u, d, e2(d)]
                    }
                    return i
                }

                function ar(n, i) {
                    var s = z6(n, i);
                    return b1(s) ? s : r
                }

                function N8(n) {
                    var i = ut.call(n, tr),
                        s = n[tr];
                    try {
                        n[tr] = r;
                        var u = !0
                    } catch {}
                    var d = La.call(n);
                    return u && (i ? n[tr] = s : delete n[tr]), d
                }
                var Lc = ic ? function(n) {
                        return n == null ? [] : (n = ft(n), xn(ic(n), function(i) {
                            return i1.call(n, i)
                        }))
                    } : qc,
                    Z1 = ic ? function(n) {
                        for (var i = []; n;) Cn(i, Lc(n)), n = Pa(n);
                        return i
                    } : qc,
                    Bt = Ht;
                (ac && Bt(new ac(new ArrayBuffer(1))) != Qe || Ei && Bt(new Ei) != ne || sc && Bt(sc.resolve()) != ya || Pr && Bt(new Pr) != Dt || wi && Bt(new wi) != wn) && (Bt = function(n) {
                    var i = Ht(n),
                        s = i == pe ? n.constructor : r,
                        u = s ? sr(s) : "";
                    if (u) switch (u) {
                        case d3:
                            return Qe;
                        case h3:
                            return ne;
                        case p3:
                            return ya;
                        case m3:
                            return Dt;
                        case g3:
                            return wn
                    }
                    return i
                });

                function L8(n, i, s) {
                    for (var u = -1, d = s.length; ++u < d;) {
                        var m = s[u],
                            _ = m.size;
                        switch (m.type) {
                            case "drop":
                                n += _;
                                break;
                            case "dropRight":
                                i -= _;
                                break;
                            case "take":
                                i = kt(i, n + _);
                                break;
                            case "takeRight":
                                n = St(n, i - _);
                                break
                        }
                    }
                    return {
                        start: n,
                        end: i
                    }
                }

                function I8(n) {
                    var i = n.match(Bp);
                    return i ? i[1].split($p) : []
                }

                function Q1(n, i, s) {
                    i = Nn(i, n);
                    for (var u = -1, d = i.length, m = !1; ++u < d;) {
                        var _ = ze(i[u]);
                        if (!(m = n != null && s(n, _))) break;
                        n = n[_]
                    }
                    return m || ++u != d ? m : (d = n == null ? 0 : n.length, !!d && os(d) && sn(_, d) && (Z(n) || or(n)))
                }

                function M8(n) {
                    var i = n.length,
                        s = new n.constructor(i);
                    return i && typeof n[0] == "string" && ut.call(n, "index") && (s.index = n.index, s.input = n.input), s
                }

                function t2(n) {
                    return typeof n.constructor == "function" && !Li(n) ? Dr(Pa(n)) : {}
                }

                function P8(n, i, s) {
                    var u = n.constructor;
                    switch (i) {
                        case An:
                            return xc(n);
                        case ee:
                        case Ze:
                            return new u(+n);
                        case Qe:
                            return v8(n, s);
                        case No:
                        case Lo:
                        case Io:
                        case Mo:
                        case Po:
                        case Ro:
                        case Do:
                        case ko:
                        case Bo:
                            return D1(n, s);
                        case ne:
                            return new u;
                        case Jn:
                        case En:
                            return new u(n);
                        case re:
                            return _8(n);
                        case Dt:
                            return new u;
                        case Zn:
                            return b8(n)
                    }
                }

                function R8(n, i) {
                    var s = i.length;
                    if (!s) return n;
                    var u = s - 1;
                    return i[u] = (s > 1 ? "& " : "") + i[u], i = i.join(s > 2 ? ", " : " "), n.replace(kp, `{
/* [wrapped with ` + i + `] */
`)
                }

                function D8(n) {
                    return Z(n) || or(n) || !!(a1 && n && n[a1])
                }

                function sn(n, i) {
                    var s = typeof n;
                    return i = i == null ? te : i, !!i && (s == "number" || s != "symbol" && jp.test(n)) && n > -1 && n % 1 == 0 && n < i
                }

                function Ft(n, i, s) {
                    if (!bt(s)) return !1;
                    var u = typeof i;
                    return (u == "number" ? qt(s) && sn(i, s.length) : u == "string" && i in s) ? Ne(s[i], n) : !1
                }

                function Ic(n, i) {
                    if (Z(n)) return !1;
                    var s = typeof n;
                    return s == "number" || s == "symbol" || s == "boolean" || n == null || oe(n) ? !0 : Mp.test(n) || !Ip.test(n) || i != null && n in ft(i)
                }

                function k8(n) {
                    var i = typeof n;
                    return i == "string" || i == "number" || i == "symbol" || i == "boolean" ? n !== "__proto__" : n === null
                }

                function Mc(n) {
                    var i = Qa(n),
                        s = p[i];
                    if (typeof s != "function" || !(i in rt.prototype)) return !1;
                    if (n === s) return !0;
                    var u = Gc(s);
                    return !!u && n === u[0]
                }

                function B8(n) {
                    return !!e1 && e1 in n
                }
                var $8 = Ga ? on : Xc;

                function Li(n) {
                    var i = n && n.constructor,
                        s = typeof i == "function" && i.prototype || Mr;
                    return n === s
                }

                function e2(n) {
                    return n === n && !bt(n)
                }

                function n2(n, i) {
                    return function(s) {
                        return s == null ? !1 : s[n] === i && (i !== r || n in ft(s))
                    }
                }

                function z8(n) {
                    var i = as(n, function(u) {
                            return s.size === g && s.clear(), u
                        }),
                        s = i.cache;
                    return i
                }

                function H8(n, i) {
                    var s = n[1],
                        u = i[1],
                        d = s | u,
                        m = d < (N | R | J),
                        _ = u == J && s == k || u == J && s == lt && n[7].length <= i[8] || u == (J | lt) && i[7].length <= i[8] && s == k;
                    if (!(m || _)) return n;
                    u & N && (n[2] = i[2], d |= s & N ? 0 : $);
                    var b = i[3];
                    if (b) {
                        var w = n[3];
                        n[3] = w ? B1(w, b, i[4]) : b, n[4] = w ? Tn(n[3], v) : i[4]
                    }
                    return b = i[5], b && (w = n[5], n[5] = w ? $1(w, b, i[6]) : b, n[6] = w ? Tn(n[5], v) : i[6]), b = i[7], b && (n[7] = b), u & J && (n[8] = n[8] == null ? i[8] : kt(n[8], i[8])), n[9] == null && (n[9] = i[9]), n[0] = i[0], n[1] = d, n
                }

                function F8(n) {
                    var i = [];
                    if (n != null)
                        for (var s in ft(n)) i.push(s);
                    return i
                }

                function V8(n) {
                    return La.call(n)
                }

                function r2(n, i, s) {
                    return i = St(i === r ? n.length - 1 : i, 0),
                        function() {
                            for (var u = arguments, d = -1, m = St(u.length - i, 0), _ = A(m); ++d < m;) _[d] = u[i + d];
                            d = -1;
                            for (var b = A(i + 1); ++d < i;) b[d] = u[d];
                            return b[i] = s(_), ie(n, this, b)
                        }
                }

                function i2(n, i) {
                    return i.length < 2 ? n : ir(n, ye(i, 0, -1))
                }

                function W8(n, i) {
                    for (var s = n.length, u = kt(i.length, s), d = jt(n); u--;) {
                        var m = i[u];
                        n[u] = sn(m, s) ? d[m] : r
                    }
                    return n
                }

                function Pc(n, i) {
                    if (!(i === "constructor" && typeof n[i] == "function") && i != "__proto__") return n[i]
                }
                var a2 = o2(O1),
                    Ii = a3 || function(n, i) {
                        return Pt.setTimeout(n, i)
                    },
                    Rc = o2(h8);

                function s2(n, i, s) {
                    var u = i + "";
                    return Rc(n, R8(u, U8(I8(u), s)))
                }

                function o2(n) {
                    var i = 0,
                        s = 0;
                    return function() {
                        var u = l3(),
                            d = Mt - (u - s);
                        if (s = u, d > 0) {
                            if (++i >= Qt) return arguments[0]
                        } else i = 0;
                        return n.apply(r, arguments)
                    }
                }

                function es(n, i) {
                    var s = -1,
                        u = n.length,
                        d = u - 1;
                    for (i = i === r ? u : i; ++s < i;) {
                        var m = vc(s, d),
                            _ = n[m];
                        n[m] = n[s], n[s] = _
                    }
                    return n.length = i, n
                }
                var c2 = z8(function(n) {
                    var i = [];
                    return n.charCodeAt(0) === 46 && i.push(""), n.replace(Pp, function(s, u, d, m) {
                        i.push(d ? m.replace(Fp, "$1") : u || s)
                    }), i
                });

                function ze(n) {
                    if (typeof n == "string" || oe(n)) return n;
                    var i = n + "";
                    return i == "0" && 1 / n == -Ct ? "-0" : i
                }

                function sr(n) {
                    if (n != null) {
                        try {
                            return Na.call(n)
                        } catch {}
                        try {
                            return n + ""
                        } catch {}
                    }
                    return ""
                }

                function U8(n, i) {
                    return ge(bn, function(s) {
                        var u = "_." + s[0];
                        i & s[1] && !Ca(n, u) && n.push(u)
                    }), n.sort()
                }

                function l2(n) {
                    if (n instanceof rt) return n.clone();
                    var i = new _e(n.__wrapped__, n.__chain__);
                    return i.__actions__ = jt(n.__actions__), i.__index__ = n.__index__, i.__values__ = n.__values__, i
                }

                function Y8(n, i, s) {
                    (s ? Ft(n, i, s) : i === r) ? i = 1: i = St(Q(i), 0);
                    var u = n == null ? 0 : n.length;
                    if (!u || i < 1) return [];
                    for (var d = 0, m = 0, _ = A(ka(u / i)); d < u;) _[m++] = ye(n, d, d += i);
                    return _
                }

                function K8(n) {
                    for (var i = -1, s = n == null ? 0 : n.length, u = 0, d = []; ++i < s;) {
                        var m = n[i];
                        m && (d[u++] = m)
                    }
                    return d
                }

                function j8() {
                    var n = arguments.length;
                    if (!n) return [];
                    for (var i = A(n - 1), s = arguments[0], u = n; u--;) i[u - 1] = arguments[u];
                    return Cn(Z(s) ? jt(s) : [s], Rt(i, 1))
                }
                var q8 = et(function(n, i) {
                        return wt(n) ? Ti(n, Rt(i, 1, wt, !0)) : []
                    }),
                    X8 = et(function(n, i) {
                        var s = Ee(i);
                        return wt(s) && (s = r), wt(n) ? Ti(n, Rt(i, 1, wt, !0), Y(s, 2)) : []
                    }),
                    J8 = et(function(n, i) {
                        var s = Ee(i);
                        return wt(s) && (s = r), wt(n) ? Ti(n, Rt(i, 1, wt, !0), r, s) : []
                    });

                function Z8(n, i, s) {
                    var u = n == null ? 0 : n.length;
                    return u ? (i = s || i === r ? 1 : Q(i), ye(n, i < 0 ? 0 : i, u)) : []
                }

                function Q8(n, i, s) {
                    var u = n == null ? 0 : n.length;
                    return u ? (i = s || i === r ? 1 : Q(i), i = u - i, ye(n, 0, i < 0 ? 0 : i)) : []
                }

                function tm(n, i) {
                    return n && n.length ? Ka(n, Y(i, 3), !0, !0) : []
                }

                function em(n, i) {
                    return n && n.length ? Ka(n, Y(i, 3), !0) : []
                }

                function nm(n, i, s, u) {
                    var d = n == null ? 0 : n.length;
                    return d ? (s && typeof s != "number" && Ft(n, i, s) && (s = 0, u = d), j3(n, i, s, u)) : []
                }

                function u2(n, i, s) {
                    var u = n == null ? 0 : n.length;
                    if (!u) return -1;
                    var d = s == null ? 0 : Q(s);
                    return d < 0 && (d = St(u + d, 0)), Ta(n, Y(i, 3), d)
                }

                function f2(n, i, s) {
                    var u = n == null ? 0 : n.length;
                    if (!u) return -1;
                    var d = u - 1;
                    return s !== r && (d = Q(s), d = s < 0 ? St(u + d, 0) : kt(d, u - 1)), Ta(n, Y(i, 3), d, !0)
                }

                function d2(n) {
                    var i = n == null ? 0 : n.length;
                    return i ? Rt(n, 1) : []
                }

                function rm(n) {
                    var i = n == null ? 0 : n.length;
                    return i ? Rt(n, Ct) : []
                }

                function im(n, i) {
                    var s = n == null ? 0 : n.length;
                    return s ? (i = i === r ? 1 : Q(i), Rt(n, i)) : []
                }

                function am(n) {
                    for (var i = -1, s = n == null ? 0 : n.length, u = {}; ++i < s;) {
                        var d = n[i];
                        u[d[0]] = d[1]
                    }
                    return u
                }

                function h2(n) {
                    return n && n.length ? n[0] : r
                }

                function sm(n, i, s) {
                    var u = n == null ? 0 : n.length;
                    if (!u) return -1;
                    var d = s == null ? 0 : Q(s);
                    return d < 0 && (d = St(u + d, 0)), Gr(n, i, d)
                }

                function om(n) {
                    var i = n == null ? 0 : n.length;
                    return i ? ye(n, 0, -1) : []
                }
                var cm = et(function(n) {
                        var i = vt(n, wc);
                        return i.length && i[0] === n[0] ? dc(i) : []
                    }),
                    lm = et(function(n) {
                        var i = Ee(n),
                            s = vt(n, wc);
                        return i === Ee(s) ? i = r : s.pop(), s.length && s[0] === n[0] ? dc(s, Y(i, 2)) : []
                    }),
                    um = et(function(n) {
                        var i = Ee(n),
                            s = vt(n, wc);
                        return i = typeof i == "function" ? i : r, i && s.pop(), s.length && s[0] === n[0] ? dc(s, r, i) : []
                    });

                function fm(n, i) {
                    return n == null ? "" : o3.call(n, i)
                }

                function Ee(n) {
                    var i = n == null ? 0 : n.length;
                    return i ? n[i - 1] : r
                }

                function dm(n, i, s) {
                    var u = n == null ? 0 : n.length;
                    if (!u) return -1;
                    var d = u;
                    return s !== r && (d = Q(s), d = d < 0 ? St(u + d, 0) : kt(d, u - 1)), i === i ? U6(n, i, d) : Ta(n, Kf, d, !0)
                }

                function hm(n, i) {
                    return n && n.length ? x1(n, Q(i)) : r
                }
                var pm = et(p2);

                function p2(n, i) {
                    return n && n.length && i && i.length ? gc(n, i) : n
                }

                function mm(n, i, s) {
                    return n && n.length && i && i.length ? gc(n, i, Y(s, 2)) : n
                }

                function gm(n, i, s) {
                    return n && n.length && i && i.length ? gc(n, i, r, s) : n
                }
                var vm = an(function(n, i) {
                    var s = n == null ? 0 : n.length,
                        u = cc(n, i);
                    return S1(n, vt(i, function(d) {
                        return sn(d, s) ? +d : d
                    }).sort(k1)), u
                });

                function _m(n, i) {
                    var s = [];
                    if (!(n && n.length)) return s;
                    var u = -1,
                        d = [],
                        m = n.length;
                    for (i = Y(i, 3); ++u < m;) {
                        var _ = n[u];
                        i(_, u, n) && (s.push(_), d.push(u))
                    }
                    return S1(n, d), s
                }

                function Dc(n) {
                    return n == null ? n : f3.call(n)
                }

                function bm(n, i, s) {
                    var u = n == null ? 0 : n.length;
                    return u ? (s && typeof s != "number" && Ft(n, i, s) ? (i = 0, s = u) : (i = i == null ? 0 : Q(i), s = s === r ? u : Q(s)), ye(n, i, s)) : []
                }

                function ym(n, i) {
                    return Ya(n, i)
                }

                function Em(n, i, s) {
                    return bc(n, i, Y(s, 2))
                }

                function wm(n, i) {
                    var s = n == null ? 0 : n.length;
                    if (s) {
                        var u = Ya(n, i);
                        if (u < s && Ne(n[u], i)) return u
                    }
                    return -1
                }

                function Am(n, i) {
                    return Ya(n, i, !0)
                }

                function xm(n, i, s) {
                    return bc(n, i, Y(s, 2), !0)
                }

                function Cm(n, i) {
                    var s = n == null ? 0 : n.length;
                    if (s) {
                        var u = Ya(n, i, !0) - 1;
                        if (Ne(n[u], i)) return u
                    }
                    return -1
                }

                function Tm(n) {
                    return n && n.length ? G1(n) : []
                }

                function Sm(n, i) {
                    return n && n.length ? G1(n, Y(i, 2)) : []
                }

                function Om(n) {
                    var i = n == null ? 0 : n.length;
                    return i ? ye(n, 1, i) : []
                }

                function Gm(n, i, s) {
                    return n && n.length ? (i = s || i === r ? 1 : Q(i), ye(n, 0, i < 0 ? 0 : i)) : []
                }

                function Nm(n, i, s) {
                    var u = n == null ? 0 : n.length;
                    return u ? (i = s || i === r ? 1 : Q(i), i = u - i, ye(n, i < 0 ? 0 : i, u)) : []
                }

                function Lm(n, i) {
                    return n && n.length ? Ka(n, Y(i, 3), !1, !0) : []
                }

                function Im(n, i) {
                    return n && n.length ? Ka(n, Y(i, 3)) : []
                }
                var Mm = et(function(n) {
                        return Gn(Rt(n, 1, wt, !0))
                    }),
                    Pm = et(function(n) {
                        var i = Ee(n);
                        return wt(i) && (i = r), Gn(Rt(n, 1, wt, !0), Y(i, 2))
                    }),
                    Rm = et(function(n) {
                        var i = Ee(n);
                        return i = typeof i == "function" ? i : r, Gn(Rt(n, 1, wt, !0), r, i)
                    });

                function Dm(n) {
                    return n && n.length ? Gn(n) : []
                }

                function km(n, i) {
                    return n && n.length ? Gn(n, Y(i, 2)) : []
                }

                function Bm(n, i) {
                    return i = typeof i == "function" ? i : r, n && n.length ? Gn(n, r, i) : []
                }

                function kc(n) {
                    if (!(n && n.length)) return [];
                    var i = 0;
                    return n = xn(n, function(s) {
                        if (wt(s)) return i = St(s.length, i), !0
                    }), tc(i, function(s) {
                        return vt(n, Jo(s))
                    })
                }

                function m2(n, i) {
                    if (!(n && n.length)) return [];
                    var s = kc(n);
                    return i == null ? s : vt(s, function(u) {
                        return ie(i, r, u)
                    })
                }
                var $m = et(function(n, i) {
                        return wt(n) ? Ti(n, i) : []
                    }),
                    zm = et(function(n) {
                        return Ec(xn(n, wt))
                    }),
                    Hm = et(function(n) {
                        var i = Ee(n);
                        return wt(i) && (i = r), Ec(xn(n, wt), Y(i, 2))
                    }),
                    Fm = et(function(n) {
                        var i = Ee(n);
                        return i = typeof i == "function" ? i : r, Ec(xn(n, wt), r, i)
                    }),
                    Vm = et(kc);

                function Wm(n, i) {
                    return M1(n || [], i || [], Ci)
                }

                function Um(n, i) {
                    return M1(n || [], i || [], Gi)
                }
                var Ym = et(function(n) {
                    var i = n.length,
                        s = i > 1 ? n[i - 1] : r;
                    return s = typeof s == "function" ? (n.pop(), s) : r, m2(n, s)
                });

                function g2(n) {
                    var i = p(n);
                    return i.__chain__ = !0, i
                }

                function Km(n, i) {
                    return i(n), n
                }

                function ns(n, i) {
                    return i(n)
                }
                var jm = an(function(n) {
                    var i = n.length,
                        s = i ? n[0] : 0,
                        u = this.__wrapped__,
                        d = function(m) {
                            return cc(m, n)
                        };
                    return i > 1 || this.__actions__.length || !(u instanceof rt) || !sn(s) ? this.thru(d) : (u = u.slice(s, +s + (i ? 1 : 0)), u.__actions__.push({
                        func: ns,
                        args: [d],
                        thisArg: r
                    }), new _e(u, this.__chain__).thru(function(m) {
                        return i && !m.length && m.push(r), m
                    }))
                });

                function qm() {
                    return g2(this)
                }

                function Xm() {
                    return new _e(this.value(), this.__chain__)
                }

                function Jm() {
                    this.__values__ === r && (this.__values__ = N2(this.value()));
                    var n = this.__index__ >= this.__values__.length,
                        i = n ? r : this.__values__[this.__index__++];
                    return {
                        done: n,
                        value: i
                    }
                }

                function Zm() {
                    return this
                }

                function Qm(n) {
                    for (var i, s = this; s instanceof Ha;) {
                        var u = l2(s);
                        u.__index__ = 0, u.__values__ = r, i ? d.__wrapped__ = u : i = u;
                        var d = u;
                        s = s.__wrapped__
                    }
                    return d.__wrapped__ = n, i
                }

                function tg() {
                    var n = this.__wrapped__;
                    if (n instanceof rt) {
                        var i = n;
                        return this.__actions__.length && (i = new rt(this)), i = i.reverse(), i.__actions__.push({
                            func: ns,
                            args: [Dc],
                            thisArg: r
                        }), new _e(i, this.__chain__)
                    }
                    return this.thru(Dc)
                }

                function eg() {
                    return I1(this.__wrapped__, this.__actions__)
                }
                var ng = ja(function(n, i, s) {
                    ut.call(n, s) ? ++n[s] : nn(n, s, 1)
                });

                function rg(n, i, s) {
                    var u = Z(n) ? Uf : K3;
                    return s && Ft(n, i, s) && (i = r), u(n, Y(i, 3))
                }

                function ig(n, i) {
                    var s = Z(n) ? xn : m1;
                    return s(n, Y(i, 3))
                }
                var ag = V1(u2),
                    sg = V1(f2);

                function og(n, i) {
                    return Rt(rs(n, i), 1)
                }

                function cg(n, i) {
                    return Rt(rs(n, i), Ct)
                }

                function lg(n, i, s) {
                    return s = s === r ? 1 : Q(s), Rt(rs(n, i), s)
                }

                function v2(n, i) {
                    var s = Z(n) ? ge : On;
                    return s(n, Y(i, 3))
                }

                function _2(n, i) {
                    var s = Z(n) ? O6 : p1;
                    return s(n, Y(i, 3))
                }
                var ug = ja(function(n, i, s) {
                    ut.call(n, s) ? n[s].push(i) : nn(n, s, [i])
                });

                function fg(n, i, s, u) {
                    n = qt(n) ? n : Hr(n), s = s && !u ? Q(s) : 0;
                    var d = n.length;
                    return s < 0 && (s = St(d + s, 0)), cs(n) ? s <= d && n.indexOf(i, s) > -1 : !!d && Gr(n, i, s) > -1
                }
                var dg = et(function(n, i, s) {
                        var u = -1,
                            d = typeof i == "function",
                            m = qt(n) ? A(n.length) : [];
                        return On(n, function(_) {
                            m[++u] = d ? ie(i, _, s) : Si(_, i, s)
                        }), m
                    }),
                    hg = ja(function(n, i, s) {
                        nn(n, s, i)
                    });

                function rs(n, i) {
                    var s = Z(n) ? vt : E1;
                    return s(n, Y(i, 3))
                }

                function pg(n, i, s, u) {
                    return n == null ? [] : (Z(i) || (i = i == null ? [] : [i]), s = u ? r : s, Z(s) || (s = s == null ? [] : [s]), C1(n, i, s))
                }
                var mg = ja(function(n, i, s) {
                    n[s ? 0 : 1].push(i)
                }, function() {
                    return [
                        [],
                        []
                    ]
                });

                function gg(n, i, s) {
                    var u = Z(n) ? qo : qf,
                        d = arguments.length < 3;
                    return u(n, Y(i, 4), s, d, On)
                }

                function vg(n, i, s) {
                    var u = Z(n) ? G6 : qf,
                        d = arguments.length < 3;
                    return u(n, Y(i, 4), s, d, p1)
                }

                function _g(n, i) {
                    var s = Z(n) ? xn : m1;
                    return s(n, ss(Y(i, 3)))
                }

                function bg(n) {
                    var i = Z(n) ? u1 : f8;
                    return i(n)
                }

                function yg(n, i, s) {
                    (s ? Ft(n, i, s) : i === r) ? i = 1: i = Q(i);
                    var u = Z(n) ? F3 : d8;
                    return u(n, i)
                }

                function Eg(n) {
                    var i = Z(n) ? V3 : p8;
                    return i(n)
                }

                function wg(n) {
                    if (n == null) return 0;
                    if (qt(n)) return cs(n) ? Lr(n) : n.length;
                    var i = Bt(n);
                    return i == ne || i == Dt ? n.size : pc(n).length
                }

                function Ag(n, i, s) {
                    var u = Z(n) ? Xo : m8;
                    return s && Ft(n, i, s) && (i = r), u(n, Y(i, 3))
                }
                var xg = et(function(n, i) {
                        if (n == null) return [];
                        var s = i.length;
                        return s > 1 && Ft(n, i[0], i[1]) ? i = [] : s > 2 && Ft(i[0], i[1], i[2]) && (i = [i[0]]), C1(n, Rt(i, 1), [])
                    }),
                    is = i3 || function() {
                        return Pt.Date.now()
                    };

                function Cg(n, i) {
                    if (typeof i != "function") throw new ve(l);
                    return n = Q(n),
                        function() {
                            if (--n < 1) return i.apply(this, arguments)
                        }
                }

                function b2(n, i, s) {
                    return i = s ? r : i, i = n && i == null ? n.length : i, rn(n, J, r, r, r, r, i)
                }

                function y2(n, i) {
                    var s;
                    if (typeof i != "function") throw new ve(l);
                    return n = Q(n),
                        function() {
                            return --n > 0 && (s = i.apply(this, arguments)), n <= 1 && (i = r), s
                        }
                }
                var Bc = et(function(n, i, s) {
                        var u = N;
                        if (s.length) {
                            var d = Tn(s, $r(Bc));
                            u |= F
                        }
                        return rn(n, u, i, s, d)
                    }),
                    E2 = et(function(n, i, s) {
                        var u = N | R;
                        if (s.length) {
                            var d = Tn(s, $r(E2));
                            u |= F
                        }
                        return rn(i, u, n, s, d)
                    });

                function w2(n, i, s) {
                    i = s ? r : i;
                    var u = rn(n, k, r, r, r, r, r, i);
                    return u.placeholder = w2.placeholder, u
                }

                function A2(n, i, s) {
                    i = s ? r : i;
                    var u = rn(n, B, r, r, r, r, r, i);
                    return u.placeholder = A2.placeholder, u
                }

                function x2(n, i, s) {
                    var u, d, m, _, b, w, O = 0,
                        G = !1,
                        I = !1,
                        D = !0;
                    if (typeof n != "function") throw new ve(l);
                    i = we(i) || 0, bt(s) && (G = !!s.leading, I = "maxWait" in s, m = I ? St(we(s.maxWait) || 0, i) : m, D = "trailing" in s ? !!s.trailing : D);

                    function V(At) {
                        var Le = u,
                            ln = d;
                        return u = d = r, O = At, _ = n.apply(ln, Le), _
                    }

                    function K(At) {
                        return O = At, b = Ii(nt, i), G ? V(At) : _
                    }

                    function tt(At) {
                        var Le = At - w,
                            ln = At - O,
                            V2 = i - Le;
                        return I ? kt(V2, m - ln) : V2
                    }

                    function j(At) {
                        var Le = At - w,
                            ln = At - O;
                        return w === r || Le >= i || Le < 0 || I && ln >= m
                    }

                    function nt() {
                        var At = is();
                        if (j(At)) return it(At);
                        b = Ii(nt, tt(At))
                    }

                    function it(At) {
                        return b = r, D && u ? V(At) : (u = d = r, _)
                    }

                    function ce() {
                        b !== r && P1(b), O = 0, u = w = d = b = r
                    }

                    function Vt() {
                        return b === r ? _ : it(is())
                    }

                    function le() {
                        var At = is(),
                            Le = j(At);
                        if (u = arguments, d = this, w = At, Le) {
                            if (b === r) return K(w);
                            if (I) return P1(b), b = Ii(nt, i), V(w)
                        }
                        return b === r && (b = Ii(nt, i)), _
                    }
                    return le.cancel = ce, le.flush = Vt, le
                }
                var Tg = et(function(n, i) {
                        return h1(n, 1, i)
                    }),
                    Sg = et(function(n, i, s) {
                        return h1(n, we(i) || 0, s)
                    });

                function Og(n) {
                    return rn(n, at)
                }

                function as(n, i) {
                    if (typeof n != "function" || i != null && typeof i != "function") throw new ve(l);
                    var s = function() {
                        var u = arguments,
                            d = i ? i.apply(this, u) : u[0],
                            m = s.cache;
                        if (m.has(d)) return m.get(d);
                        var _ = n.apply(this, u);
                        return s.cache = m.set(d, _) || m, _
                    };
                    return s.cache = new(as.Cache || en), s
                }
                as.Cache = en;

                function ss(n) {
                    if (typeof n != "function") throw new ve(l);
                    return function() {
                        var i = arguments;
                        switch (i.length) {
                            case 0:
                                return !n.call(this);
                            case 1:
                                return !n.call(this, i[0]);
                            case 2:
                                return !n.call(this, i[0], i[1]);
                            case 3:
                                return !n.call(this, i[0], i[1], i[2])
                        }
                        return !n.apply(this, i)
                    }
                }

                function Gg(n) {
                    return y2(2, n)
                }
                var Ng = g8(function(n, i) {
                        i = i.length == 1 && Z(i[0]) ? vt(i[0], ae(Y())) : vt(Rt(i, 1), ae(Y()));
                        var s = i.length;
                        return et(function(u) {
                            for (var d = -1, m = kt(u.length, s); ++d < m;) u[d] = i[d].call(this, u[d]);
                            return ie(n, this, u)
                        })
                    }),
                    $c = et(function(n, i) {
                        var s = Tn(i, $r($c));
                        return rn(n, F, r, i, s)
                    }),
                    C2 = et(function(n, i) {
                        var s = Tn(i, $r(C2));
                        return rn(n, q, r, i, s)
                    }),
                    Lg = an(function(n, i) {
                        return rn(n, lt, r, r, r, i)
                    });

                function Ig(n, i) {
                    if (typeof n != "function") throw new ve(l);
                    return i = i === r ? i : Q(i), et(n, i)
                }

                function Mg(n, i) {
                    if (typeof n != "function") throw new ve(l);
                    return i = i == null ? 0 : St(Q(i), 0), et(function(s) {
                        var u = s[i],
                            d = Ln(s, 0, i);
                        return u && Cn(d, u), ie(n, this, d)
                    })
                }

                function Pg(n, i, s) {
                    var u = !0,
                        d = !0;
                    if (typeof n != "function") throw new ve(l);
                    return bt(s) && (u = "leading" in s ? !!s.leading : u, d = "trailing" in s ? !!s.trailing : d), x2(n, i, {
                        leading: u,
                        maxWait: i,
                        trailing: d
                    })
                }

                function Rg(n) {
                    return b2(n, 1)
                }

                function Dg(n, i) {
                    return $c(Ac(i), n)
                }

                function kg() {
                    if (!arguments.length) return [];
                    var n = arguments[0];
                    return Z(n) ? n : [n]
                }

                function Bg(n) {
                    return be(n, C)
                }

                function $g(n, i) {
                    return i = typeof i == "function" ? i : r, be(n, C, i)
                }

                function zg(n) {
                    return be(n, y | C)
                }

                function Hg(n, i) {
                    return i = typeof i == "function" ? i : r, be(n, y | C, i)
                }

                function Fg(n, i) {
                    return i == null || d1(n, i, Lt(i))
                }

                function Ne(n, i) {
                    return n === i || n !== n && i !== i
                }
                var Vg = Za(fc),
                    Wg = Za(function(n, i) {
                        return n >= i
                    }),
                    or = _1(function() {
                        return arguments
                    }()) ? _1 : function(n) {
                        return yt(n) && ut.call(n, "callee") && !i1.call(n, "callee")
                    },
                    Z = A.isArray,
                    Ug = $f ? ae($f) : Q3;

                function qt(n) {
                    return n != null && os(n.length) && !on(n)
                }

                function wt(n) {
                    return yt(n) && qt(n)
                }

                function Yg(n) {
                    return n === !0 || n === !1 || yt(n) && Ht(n) == ee
                }
                var In = s3 || Xc,
                    Kg = zf ? ae(zf) : t8;

                function jg(n) {
                    return yt(n) && n.nodeType === 1 && !Mi(n)
                }

                function qg(n) {
                    if (n == null) return !0;
                    if (qt(n) && (Z(n) || typeof n == "string" || typeof n.splice == "function" || In(n) || zr(n) || or(n))) return !n.length;
                    var i = Bt(n);
                    if (i == ne || i == Dt) return !n.size;
                    if (Li(n)) return !pc(n).length;
                    for (var s in n)
                        if (ut.call(n, s)) return !1;
                    return !0
                }

                function Xg(n, i) {
                    return Oi(n, i)
                }

                function Jg(n, i, s) {
                    s = typeof s == "function" ? s : r;
                    var u = s ? s(n, i) : r;
                    return u === r ? Oi(n, i, r, s) : !!u
                }

                function zc(n) {
                    if (!yt(n)) return !1;
                    var i = Ht(n);
                    return i == yn || i == Oo || typeof n.message == "string" && typeof n.name == "string" && !Mi(n)
                }

                function Zg(n) {
                    return typeof n == "number" && s1(n)
                }

                function on(n) {
                    if (!bt(n)) return !1;
                    var i = Ht(n);
                    return i == Sr || i == vi || i == Tr || i == Go
                }

                function T2(n) {
                    return typeof n == "number" && n == Q(n)
                }

                function os(n) {
                    return typeof n == "number" && n > -1 && n % 1 == 0 && n <= te
                }

                function bt(n) {
                    var i = typeof n;
                    return n != null && (i == "object" || i == "function")
                }

                function yt(n) {
                    return n != null && typeof n == "object"
                }
                var S2 = Hf ? ae(Hf) : n8;

                function Qg(n, i) {
                    return n === i || hc(n, i, Nc(i))
                }

                function t5(n, i, s) {
                    return s = typeof s == "function" ? s : r, hc(n, i, Nc(i), s)
                }

                function e5(n) {
                    return O2(n) && n != +n
                }

                function n5(n) {
                    if ($8(n)) throw new X(c);
                    return b1(n)
                }

                function r5(n) {
                    return n === null
                }

                function i5(n) {
                    return n == null
                }

                function O2(n) {
                    return typeof n == "number" || yt(n) && Ht(n) == Jn
                }

                function Mi(n) {
                    if (!yt(n) || Ht(n) != pe) return !1;
                    var i = Pa(n);
                    if (i === null) return !0;
                    var s = ut.call(i, "constructor") && i.constructor;
                    return typeof s == "function" && s instanceof s && Na.call(s) == t3
                }
                var Hc = Ff ? ae(Ff) : r8;

                function a5(n) {
                    return T2(n) && n >= -te && n <= te
                }
                var G2 = Vf ? ae(Vf) : i8;

                function cs(n) {
                    return typeof n == "string" || !Z(n) && yt(n) && Ht(n) == En
                }

                function oe(n) {
                    return typeof n == "symbol" || yt(n) && Ht(n) == Zn
                }
                var zr = Wf ? ae(Wf) : a8;

                function s5(n) {
                    return n === r
                }

                function o5(n) {
                    return yt(n) && Bt(n) == wn
                }

                function c5(n) {
                    return yt(n) && Ht(n) == Ea
                }
                var l5 = Za(mc),
                    u5 = Za(function(n, i) {
                        return n <= i
                    });

                function N2(n) {
                    if (!n) return [];
                    if (qt(n)) return cs(n) ? Oe(n) : jt(n);
                    if (yi && n[yi]) return F6(n[yi]());
                    var i = Bt(n),
                        s = i == ne ? nc : i == Dt ? Sa : Hr;
                    return s(n)
                }

                function cn(n) {
                    if (!n) return n === 0 ? n : 0;
                    if (n = we(n), n === Ct || n === -Ct) {
                        var i = n < 0 ? -1 : 1;
                        return i * Xe
                    }
                    return n === n ? n : 0
                }

                function Q(n) {
                    var i = cn(n),
                        s = i % 1;
                    return i === i ? s ? i - s : i : 0
                }

                function L2(n) {
                    return n ? rr(Q(n), 0, Kt) : 0
                }

                function we(n) {
                    if (typeof n == "number") return n;
                    if (oe(n)) return Je;
                    if (bt(n)) {
                        var i = typeof n.valueOf == "function" ? n.valueOf() : n;
                        n = bt(i) ? i + "" : i
                    }
                    if (typeof n != "string") return n === 0 ? n : +n;
                    n = Xf(n);
                    var s = Up.test(n);
                    return s || Kp.test(n) ? C6(n.slice(2), s ? 2 : 8) : Wp.test(n) ? Je : +n
                }

                function I2(n) {
                    return $e(n, Xt(n))
                }

                function f5(n) {
                    return n ? rr(Q(n), -te, te) : n === 0 ? n : 0
                }

                function ct(n) {
                    return n == null ? "" : se(n)
                }
                var d5 = kr(function(n, i) {
                        if (Li(i) || qt(i)) {
                            $e(i, Lt(i), n);
                            return
                        }
                        for (var s in i) ut.call(i, s) && Ci(n, s, i[s])
                    }),
                    M2 = kr(function(n, i) {
                        $e(i, Xt(i), n)
                    }),
                    ls = kr(function(n, i, s, u) {
                        $e(i, Xt(i), n, u)
                    }),
                    h5 = kr(function(n, i, s, u) {
                        $e(i, Lt(i), n, u)
                    }),
                    p5 = an(cc);

                function m5(n, i) {
                    var s = Dr(n);
                    return i == null ? s : f1(s, i)
                }
                var g5 = et(function(n, i) {
                        n = ft(n);
                        var s = -1,
                            u = i.length,
                            d = u > 2 ? i[2] : r;
                        for (d && Ft(i[0], i[1], d) && (u = 1); ++s < u;)
                            for (var m = i[s], _ = Xt(m), b = -1, w = _.length; ++b < w;) {
                                var O = _[b],
                                    G = n[O];
                                (G === r || Ne(G, Mr[O]) && !ut.call(n, O)) && (n[O] = m[O])
                            }
                        return n
                    }),
                    v5 = et(function(n) {
                        return n.push(r, X1), ie(P2, r, n)
                    });

                function _5(n, i) {
                    return Yf(n, Y(i, 3), Be)
                }

                function b5(n, i) {
                    return Yf(n, Y(i, 3), uc)
                }

                function y5(n, i) {
                    return n == null ? n : lc(n, Y(i, 3), Xt)
                }

                function E5(n, i) {
                    return n == null ? n : g1(n, Y(i, 3), Xt)
                }

                function w5(n, i) {
                    return n && Be(n, Y(i, 3))
                }

                function A5(n, i) {
                    return n && uc(n, Y(i, 3))
                }

                function x5(n) {
                    return n == null ? [] : Wa(n, Lt(n))
                }

                function C5(n) {
                    return n == null ? [] : Wa(n, Xt(n))
                }

                function Fc(n, i, s) {
                    var u = n == null ? r : ir(n, i);
                    return u === r ? s : u
                }

                function T5(n, i) {
                    return n != null && Q1(n, i, q3)
                }

                function Vc(n, i) {
                    return n != null && Q1(n, i, X3)
                }
                var S5 = U1(function(n, i, s) {
                        i != null && typeof i.toString != "function" && (i = La.call(i)), n[i] = s
                    }, Uc(Jt)),
                    O5 = U1(function(n, i, s) {
                        i != null && typeof i.toString != "function" && (i = La.call(i)), ut.call(n, i) ? n[i].push(s) : n[i] = [s]
                    }, Y),
                    G5 = et(Si);

                function Lt(n) {
                    return qt(n) ? l1(n) : pc(n)
                }

                function Xt(n) {
                    return qt(n) ? l1(n, !0) : s8(n)
                }

                function N5(n, i) {
                    var s = {};
                    return i = Y(i, 3), Be(n, function(u, d, m) {
                        nn(s, i(u, d, m), u)
                    }), s
                }

                function L5(n, i) {
                    var s = {};
                    return i = Y(i, 3), Be(n, function(u, d, m) {
                        nn(s, d, i(u, d, m))
                    }), s
                }
                var I5 = kr(function(n, i, s) {
                        Ua(n, i, s)
                    }),
                    P2 = kr(function(n, i, s, u) {
                        Ua(n, i, s, u)
                    }),
                    M5 = an(function(n, i) {
                        var s = {};
                        if (n == null) return s;
                        var u = !1;
                        i = vt(i, function(m) {
                            return m = Nn(m, n), u || (u = m.length > 1), m
                        }), $e(n, Oc(n), s), u && (s = be(s, y | x | C, S8));
                        for (var d = i.length; d--;) yc(s, i[d]);
                        return s
                    });

                function P5(n, i) {
                    return R2(n, ss(Y(i)))
                }
                var R5 = an(function(n, i) {
                    return n == null ? {} : c8(n, i)
                });

                function R2(n, i) {
                    if (n == null) return {};
                    var s = vt(Oc(n), function(u) {
                        return [u]
                    });
                    return i = Y(i), T1(n, s, function(u, d) {
                        return i(u, d[0])
                    })
                }

                function D5(n, i, s) {
                    i = Nn(i, n);
                    var u = -1,
                        d = i.length;
                    for (d || (d = 1, n = r); ++u < d;) {
                        var m = n == null ? r : n[ze(i[u])];
                        m === r && (u = d, m = s), n = on(m) ? m.call(n) : m
                    }
                    return n
                }

                function k5(n, i, s) {
                    return n == null ? n : Gi(n, i, s)
                }

                function B5(n, i, s, u) {
                    return u = typeof u == "function" ? u : r, n == null ? n : Gi(n, i, s, u)
                }
                var D2 = j1(Lt),
                    k2 = j1(Xt);

                function $5(n, i, s) {
                    var u = Z(n),
                        d = u || In(n) || zr(n);
                    if (i = Y(i, 4), s == null) {
                        var m = n && n.constructor;
                        d ? s = u ? new m : [] : bt(n) ? s = on(m) ? Dr(Pa(n)) : {} : s = {}
                    }
                    return (d ? ge : Be)(n, function(_, b, w) {
                        return i(s, _, b, w)
                    }), s
                }

                function z5(n, i) {
                    return n == null ? !0 : yc(n, i)
                }

                function H5(n, i, s) {
                    return n == null ? n : L1(n, i, Ac(s))
                }

                function F5(n, i, s, u) {
                    return u = typeof u == "function" ? u : r, n == null ? n : L1(n, i, Ac(s), u)
                }

                function Hr(n) {
                    return n == null ? [] : ec(n, Lt(n))
                }

                function V5(n) {
                    return n == null ? [] : ec(n, Xt(n))
                }

                function W5(n, i, s) {
                    return s === r && (s = i, i = r), s !== r && (s = we(s), s = s === s ? s : 0), i !== r && (i = we(i), i = i === i ? i : 0), rr(we(n), i, s)
                }

                function U5(n, i, s) {
                    return i = cn(i), s === r ? (s = i, i = 0) : s = cn(s), n = we(n), J3(n, i, s)
                }

                function Y5(n, i, s) {
                    if (s && typeof s != "boolean" && Ft(n, i, s) && (i = s = r), s === r && (typeof i == "boolean" ? (s = i, i = r) : typeof n == "boolean" && (s = n, n = r)), n === r && i === r ? (n = 0, i = 1) : (n = cn(n), i === r ? (i = n, n = 0) : i = cn(i)), n > i) {
                        var u = n;
                        n = i, i = u
                    }
                    if (s || n % 1 || i % 1) {
                        var d = o1();
                        return kt(n + d * (i - n + x6("1e-" + ((d + "").length - 1))), i)
                    }
                    return vc(n, i)
                }
                var K5 = Br(function(n, i, s) {
                    return i = i.toLowerCase(), n + (s ? B2(i) : i)
                });

                function B2(n) {
                    return Wc(ct(n).toLowerCase())
                }

                function $2(n) {
                    return n = ct(n), n && n.replace(qp, k6).replace(p6, "")
                }

                function j5(n, i, s) {
                    n = ct(n), i = se(i);
                    var u = n.length;
                    s = s === r ? u : rr(Q(s), 0, u);
                    var d = s;
                    return s -= i.length, s >= 0 && n.slice(s, d) == i
                }

                function q5(n) {
                    return n = ct(n), n && Gp.test(n) ? n.replace(gf, B6) : n
                }

                function X5(n) {
                    return n = ct(n), n && Rp.test(n) ? n.replace($o, "\\$&") : n
                }
                var J5 = Br(function(n, i, s) {
                        return n + (s ? "-" : "") + i.toLowerCase()
                    }),
                    Z5 = Br(function(n, i, s) {
                        return n + (s ? " " : "") + i.toLowerCase()
                    }),
                    Q5 = F1("toLowerCase");

                function tv(n, i, s) {
                    n = ct(n), i = Q(i);
                    var u = i ? Lr(n) : 0;
                    if (!i || u >= i) return n;
                    var d = (i - u) / 2;
                    return Ja(Ba(d), s) + n + Ja(ka(d), s)
                }

                function ev(n, i, s) {
                    n = ct(n), i = Q(i);
                    var u = i ? Lr(n) : 0;
                    return i && u < i ? n + Ja(i - u, s) : n
                }

                function nv(n, i, s) {
                    n = ct(n), i = Q(i);
                    var u = i ? Lr(n) : 0;
                    return i && u < i ? Ja(i - u, s) + n : n
                }

                function rv(n, i, s) {
                    return s || i == null ? i = 0 : i && (i = +i), u3(ct(n).replace(zo, ""), i || 0)
                }

                function iv(n, i, s) {
                    return (s ? Ft(n, i, s) : i === r) ? i = 1 : i = Q(i), _c(ct(n), i)
                }

                function av() {
                    var n = arguments,
                        i = ct(n[0]);
                    return n.length < 3 ? i : i.replace(n[1], n[2])
                }
                var sv = Br(function(n, i, s) {
                    return n + (s ? "_" : "") + i.toLowerCase()
                });

                function ov(n, i, s) {
                    return s && typeof s != "number" && Ft(n, i, s) && (i = s = r), s = s === r ? Kt : s >>> 0, s ? (n = ct(n), n && (typeof i == "string" || i != null && !Hc(i)) && (i = se(i), !i && Nr(n)) ? Ln(Oe(n), 0, s) : n.split(i, s)) : []
                }
                var cv = Br(function(n, i, s) {
                    return n + (s ? " " : "") + Wc(i)
                });

                function lv(n, i, s) {
                    return n = ct(n), s = s == null ? 0 : rr(Q(s), 0, n.length), i = se(i), n.slice(s, s + i.length) == i
                }

                function uv(n, i, s) {
                    var u = p.templateSettings;
                    s && Ft(n, i, s) && (i = r), n = ct(n), i = ls({}, i, u, q1);
                    var d = ls({}, i.imports, u.imports, q1),
                        m = Lt(d),
                        _ = ec(d, m),
                        b, w, O = 0,
                        G = i.interpolate || wa,
                        I = "__p += '",
                        D = rc((i.escape || wa).source + "|" + G.source + "|" + (G === vf ? Vp : wa).source + "|" + (i.evaluate || wa).source + "|$", "g"),
                        V = "//# sourceURL=" + (ut.call(i, "sourceURL") ? (i.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++b6 + "]") + `
`;
                    n.replace(D, function(j, nt, it, ce, Vt, le) {
                        return it || (it = ce), I += n.slice(O, le).replace(Xp, $6), nt && (b = !0, I += `' +
__e(` + nt + `) +
'`), Vt && (w = !0, I += `';
` + Vt + `;
__p += '`), it && (I += `' +
((__t = (` + it + `)) == null ? '' : __t) +
'`), O = le + j.length, j
                    }), I += `';
`;
                    var K = ut.call(i, "variable") && i.variable;
                    if (!K) I = `with (obj) {
` + I + `
}
`;
                    else if (Hp.test(K)) throw new X(f);
                    I = (w ? I.replace(Cp, "") : I).replace(Tp, "$1").replace(Sp, "$1;"), I = "function(" + (K || "obj") + `) {
` + (K ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (b ? ", __e = _.escape" : "") + (w ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + I + `return __p
}`;
                    var tt = H2(function() {
                        return ot(m, V + "return " + I).apply(r, _)
                    });
                    if (tt.source = I, zc(tt)) throw tt;
                    return tt
                }

                function fv(n) {
                    return ct(n).toLowerCase()
                }

                function dv(n) {
                    return ct(n).toUpperCase()
                }

                function hv(n, i, s) {
                    if (n = ct(n), n && (s || i === r)) return Xf(n);
                    if (!n || !(i = se(i))) return n;
                    var u = Oe(n),
                        d = Oe(i),
                        m = Jf(u, d),
                        _ = Zf(u, d) + 1;
                    return Ln(u, m, _).join("")
                }

                function pv(n, i, s) {
                    if (n = ct(n), n && (s || i === r)) return n.slice(0, t1(n) + 1);
                    if (!n || !(i = se(i))) return n;
                    var u = Oe(n),
                        d = Zf(u, Oe(i)) + 1;
                    return Ln(u, 0, d).join("")
                }

                function mv(n, i, s) {
                    if (n = ct(n), n && (s || i === r)) return n.replace(zo, "");
                    if (!n || !(i = se(i))) return n;
                    var u = Oe(n),
                        d = Jf(u, Oe(i));
                    return Ln(u, d).join("")
                }

                function gv(n, i) {
                    var s = ht,
                        u = Nt;
                    if (bt(i)) {
                        var d = "separator" in i ? i.separator : d;
                        s = "length" in i ? Q(i.length) : s, u = "omission" in i ? se(i.omission) : u
                    }
                    n = ct(n);
                    var m = n.length;
                    if (Nr(n)) {
                        var _ = Oe(n);
                        m = _.length
                    }
                    if (s >= m) return n;
                    var b = s - Lr(u);
                    if (b < 1) return u;
                    var w = _ ? Ln(_, 0, b).join("") : n.slice(0, b);
                    if (d === r) return w + u;
                    if (_ && (b += w.length - b), Hc(d)) {
                        if (n.slice(b).search(d)) {
                            var O, G = w;
                            for (d.global || (d = rc(d.source, ct(_f.exec(d)) + "g")), d.lastIndex = 0; O = d.exec(G);) var I = O.index;
                            w = w.slice(0, I === r ? b : I)
                        }
                    } else if (n.indexOf(se(d), b) != b) {
                        var D = w.lastIndexOf(d);
                        D > -1 && (w = w.slice(0, D))
                    }
                    return w + u
                }

                function vv(n) {
                    return n = ct(n), n && Op.test(n) ? n.replace(mf, Y6) : n
                }
                var _v = Br(function(n, i, s) {
                        return n + (s ? " " : "") + i.toUpperCase()
                    }),
                    Wc = F1("toUpperCase");

                function z2(n, i, s) {
                    return n = ct(n), i = s ? r : i, i === r ? H6(n) ? q6(n) : I6(n) : n.match(i) || []
                }
                var H2 = et(function(n, i) {
                        try {
                            return ie(n, r, i)
                        } catch (s) {
                            return zc(s) ? s : new X(s)
                        }
                    }),
                    bv = an(function(n, i) {
                        return ge(i, function(s) {
                            s = ze(s), nn(n, s, Bc(n[s], n))
                        }), n
                    });

                function yv(n) {
                    var i = n == null ? 0 : n.length,
                        s = Y();
                    return n = i ? vt(n, function(u) {
                        if (typeof u[1] != "function") throw new ve(l);
                        return [s(u[0]), u[1]]
                    }) : [], et(function(u) {
                        for (var d = -1; ++d < i;) {
                            var m = n[d];
                            if (ie(m[0], this, u)) return ie(m[1], this, u)
                        }
                    })
                }

                function Ev(n) {
                    return Y3(be(n, y))
                }

                function Uc(n) {
                    return function() {
                        return n
                    }
                }

                function wv(n, i) {
                    return n == null || n !== n ? i : n
                }
                var Av = W1(),
                    xv = W1(!0);

                function Jt(n) {
                    return n
                }

                function Yc(n) {
                    return y1(typeof n == "function" ? n : be(n, y))
                }

                function Cv(n) {
                    return w1(be(n, y))
                }

                function Tv(n, i) {
                    return A1(n, be(i, y))
                }
                var Sv = et(function(n, i) {
                        return function(s) {
                            return Si(s, n, i)
                        }
                    }),
                    Ov = et(function(n, i) {
                        return function(s) {
                            return Si(n, s, i)
                        }
                    });

                function Kc(n, i, s) {
                    var u = Lt(i),
                        d = Wa(i, u);
                    s == null && !(bt(i) && (d.length || !u.length)) && (s = i, i = n, n = this, d = Wa(i, Lt(i)));
                    var m = !(bt(s) && "chain" in s) || !!s.chain,
                        _ = on(n);
                    return ge(d, function(b) {
                        var w = i[b];
                        n[b] = w, _ && (n.prototype[b] = function() {
                            var O = this.__chain__;
                            if (m || O) {
                                var G = n(this.__wrapped__),
                                    I = G.__actions__ = jt(this.__actions__);
                                return I.push({
                                    func: w,
                                    args: arguments,
                                    thisArg: n
                                }), G.__chain__ = O, G
                            }
                            return w.apply(n, Cn([this.value()], arguments))
                        })
                    }), n
                }

                function Gv() {
                    return Pt._ === this && (Pt._ = e3), this
                }

                function jc() {}

                function Nv(n) {
                    return n = Q(n), et(function(i) {
                        return x1(i, n)
                    })
                }
                var Lv = Cc(vt),
                    Iv = Cc(Uf),
                    Mv = Cc(Xo);

                function F2(n) {
                    return Ic(n) ? Jo(ze(n)) : l8(n)
                }

                function Pv(n) {
                    return function(i) {
                        return n == null ? r : ir(n, i)
                    }
                }
                var Rv = Y1(),
                    Dv = Y1(!0);

                function qc() {
                    return []
                }

                function Xc() {
                    return !1
                }

                function kv() {
                    return {}
                }

                function Bv() {
                    return ""
                }

                function $v() {
                    return !0
                }

                function zv(n, i) {
                    if (n = Q(n), n < 1 || n > te) return [];
                    var s = Kt,
                        u = kt(n, Kt);
                    i = Y(i), n -= Kt;
                    for (var d = tc(u, i); ++s < n;) i(s);
                    return d
                }

                function Hv(n) {
                    return Z(n) ? vt(n, ze) : oe(n) ? [n] : jt(c2(ct(n)))
                }

                function Fv(n) {
                    var i = ++Q6;
                    return ct(n) + i
                }
                var Vv = Xa(function(n, i) {
                        return n + i
                    }, 0),
                    Wv = Tc("ceil"),
                    Uv = Xa(function(n, i) {
                        return n / i
                    }, 1),
                    Yv = Tc("floor");

                function Kv(n) {
                    return n && n.length ? Va(n, Jt, fc) : r
                }

                function jv(n, i) {
                    return n && n.length ? Va(n, Y(i, 2), fc) : r
                }

                function qv(n) {
                    return jf(n, Jt)
                }

                function Xv(n, i) {
                    return jf(n, Y(i, 2))
                }

                function Jv(n) {
                    return n && n.length ? Va(n, Jt, mc) : r
                }

                function Zv(n, i) {
                    return n && n.length ? Va(n, Y(i, 2), mc) : r
                }
                var Qv = Xa(function(n, i) {
                        return n * i
                    }, 1),
                    t_ = Tc("round"),
                    e_ = Xa(function(n, i) {
                        return n - i
                    }, 0);

                function n_(n) {
                    return n && n.length ? Qo(n, Jt) : 0
                }

                function r_(n, i) {
                    return n && n.length ? Qo(n, Y(i, 2)) : 0
                }
                return p.after = Cg, p.ary = b2, p.assign = d5, p.assignIn = M2, p.assignInWith = ls, p.assignWith = h5, p.at = p5, p.before = y2, p.bind = Bc, p.bindAll = bv, p.bindKey = E2, p.castArray = kg, p.chain = g2, p.chunk = Y8, p.compact = K8, p.concat = j8, p.cond = yv, p.conforms = Ev, p.constant = Uc, p.countBy = ng, p.create = m5, p.curry = w2, p.curryRight = A2, p.debounce = x2, p.defaults = g5, p.defaultsDeep = v5, p.defer = Tg, p.delay = Sg, p.difference = q8, p.differenceBy = X8, p.differenceWith = J8, p.drop = Z8, p.dropRight = Q8, p.dropRightWhile = tm, p.dropWhile = em, p.fill = nm, p.filter = ig, p.flatMap = og, p.flatMapDeep = cg, p.flatMapDepth = lg, p.flatten = d2, p.flattenDeep = rm, p.flattenDepth = im, p.flip = Og, p.flow = Av, p.flowRight = xv, p.fromPairs = am, p.functions = x5, p.functionsIn = C5, p.groupBy = ug, p.initial = om, p.intersection = cm, p.intersectionBy = lm, p.intersectionWith = um, p.invert = S5, p.invertBy = O5, p.invokeMap = dg, p.iteratee = Yc, p.keyBy = hg, p.keys = Lt, p.keysIn = Xt, p.map = rs, p.mapKeys = N5, p.mapValues = L5, p.matches = Cv, p.matchesProperty = Tv, p.memoize = as, p.merge = I5, p.mergeWith = P2, p.method = Sv, p.methodOf = Ov, p.mixin = Kc, p.negate = ss, p.nthArg = Nv, p.omit = M5, p.omitBy = P5, p.once = Gg, p.orderBy = pg, p.over = Lv, p.overArgs = Ng, p.overEvery = Iv, p.overSome = Mv, p.partial = $c, p.partialRight = C2, p.partition = mg, p.pick = R5, p.pickBy = R2, p.property = F2, p.propertyOf = Pv, p.pull = pm, p.pullAll = p2, p.pullAllBy = mm, p.pullAllWith = gm, p.pullAt = vm, p.range = Rv, p.rangeRight = Dv, p.rearg = Lg, p.reject = _g, p.remove = _m, p.rest = Ig, p.reverse = Dc, p.sampleSize = yg, p.set = k5, p.setWith = B5, p.shuffle = Eg, p.slice = bm, p.sortBy = xg, p.sortedUniq = Tm, p.sortedUniqBy = Sm, p.split = ov, p.spread = Mg, p.tail = Om, p.take = Gm, p.takeRight = Nm, p.takeRightWhile = Lm, p.takeWhile = Im, p.tap = Km, p.throttle = Pg, p.thru = ns, p.toArray = N2, p.toPairs = D2, p.toPairsIn = k2, p.toPath = Hv, p.toPlainObject = I2, p.transform = $5, p.unary = Rg, p.union = Mm, p.unionBy = Pm, p.unionWith = Rm, p.uniq = Dm, p.uniqBy = km, p.uniqWith = Bm, p.unset = z5, p.unzip = kc, p.unzipWith = m2, p.update = H5, p.updateWith = F5, p.values = Hr, p.valuesIn = V5, p.without = $m, p.words = z2, p.wrap = Dg, p.xor = zm, p.xorBy = Hm, p.xorWith = Fm, p.zip = Vm, p.zipObject = Wm, p.zipObjectDeep = Um, p.zipWith = Ym, p.entries = D2, p.entriesIn = k2, p.extend = M2, p.extendWith = ls, Kc(p, p), p.add = Vv, p.attempt = H2, p.camelCase = K5, p.capitalize = B2, p.ceil = Wv, p.clamp = W5, p.clone = Bg, p.cloneDeep = zg, p.cloneDeepWith = Hg, p.cloneWith = $g, p.conformsTo = Fg, p.deburr = $2, p.defaultTo = wv, p.divide = Uv, p.endsWith = j5, p.eq = Ne, p.escape = q5, p.escapeRegExp = X5, p.every = rg, p.find = ag, p.findIndex = u2, p.findKey = _5, p.findLast = sg, p.findLastIndex = f2, p.findLastKey = b5, p.floor = Yv, p.forEach = v2, p.forEachRight = _2, p.forIn = y5, p.forInRight = E5, p.forOwn = w5, p.forOwnRight = A5, p.get = Fc, p.gt = Vg, p.gte = Wg, p.has = T5, p.hasIn = Vc, p.head = h2, p.identity = Jt, p.includes = fg, p.indexOf = sm, p.inRange = U5, p.invoke = G5, p.isArguments = or, p.isArray = Z, p.isArrayBuffer = Ug, p.isArrayLike = qt, p.isArrayLikeObject = wt, p.isBoolean = Yg, p.isBuffer = In, p.isDate = Kg, p.isElement = jg, p.isEmpty = qg, p.isEqual = Xg, p.isEqualWith = Jg, p.isError = zc, p.isFinite = Zg, p.isFunction = on, p.isInteger = T2, p.isLength = os, p.isMap = S2, p.isMatch = Qg, p.isMatchWith = t5, p.isNaN = e5, p.isNative = n5, p.isNil = i5, p.isNull = r5, p.isNumber = O2, p.isObject = bt, p.isObjectLike = yt, p.isPlainObject = Mi, p.isRegExp = Hc, p.isSafeInteger = a5, p.isSet = G2, p.isString = cs, p.isSymbol = oe, p.isTypedArray = zr, p.isUndefined = s5, p.isWeakMap = o5, p.isWeakSet = c5, p.join = fm, p.kebabCase = J5, p.last = Ee, p.lastIndexOf = dm, p.lowerCase = Z5, p.lowerFirst = Q5, p.lt = l5, p.lte = u5, p.max = Kv, p.maxBy = jv, p.mean = qv, p.meanBy = Xv, p.min = Jv, p.minBy = Zv, p.stubArray = qc, p.stubFalse = Xc, p.stubObject = kv, p.stubString = Bv, p.stubTrue = $v, p.multiply = Qv, p.nth = hm, p.noConflict = Gv, p.noop = jc, p.now = is, p.pad = tv, p.padEnd = ev, p.padStart = nv, p.parseInt = rv, p.random = Y5, p.reduce = gg, p.reduceRight = vg, p.repeat = iv, p.replace = av, p.result = D5, p.round = t_, p.runInContext = E, p.sample = bg, p.size = wg, p.snakeCase = sv, p.some = Ag, p.sortedIndex = ym, p.sortedIndexBy = Em, p.sortedIndexOf = wm, p.sortedLastIndex = Am, p.sortedLastIndexBy = xm, p.sortedLastIndexOf = Cm, p.startCase = cv, p.startsWith = lv, p.subtract = e_, p.sum = n_, p.sumBy = r_, p.template = uv, p.times = zv, p.toFinite = cn, p.toInteger = Q, p.toLength = L2, p.toLower = fv, p.toNumber = we, p.toSafeInteger = f5, p.toString = ct, p.toUpper = dv, p.trim = hv, p.trimEnd = pv, p.trimStart = mv, p.truncate = gv, p.unescape = vv, p.uniqueId = Fv, p.upperCase = _v, p.upperFirst = Wc, p.each = v2, p.eachRight = _2, p.first = h2, Kc(p, function() {
                    var n = {};
                    return Be(p, function(i, s) {
                        ut.call(p.prototype, s) || (n[s] = i)
                    }), n
                }(), {
                    chain: !1
                }), p.VERSION = a, ge(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(n) {
                    p[n].placeholder = p
                }), ge(["drop", "take"], function(n, i) {
                    rt.prototype[n] = function(s) {
                        s = s === r ? 1 : St(Q(s), 0);
                        var u = this.__filtered__ && !i ? new rt(this) : this.clone();
                        return u.__filtered__ ? u.__takeCount__ = kt(s, u.__takeCount__) : u.__views__.push({
                            size: kt(s, Kt),
                            type: n + (u.__dir__ < 0 ? "Right" : "")
                        }), u
                    }, rt.prototype[n + "Right"] = function(s) {
                        return this.reverse()[n](s).reverse()
                    }
                }), ge(["filter", "map", "takeWhile"], function(n, i) {
                    var s = i + 1,
                        u = s == De || s == $t;
                    rt.prototype[n] = function(d) {
                        var m = this.clone();
                        return m.__iteratees__.push({
                            iteratee: Y(d, 3),
                            type: s
                        }), m.__filtered__ = m.__filtered__ || u, m
                    }
                }), ge(["head", "last"], function(n, i) {
                    var s = "take" + (i ? "Right" : "");
                    rt.prototype[n] = function() {
                        return this[s](1).value()[0]
                    }
                }), ge(["initial", "tail"], function(n, i) {
                    var s = "drop" + (i ? "" : "Right");
                    rt.prototype[n] = function() {
                        return this.__filtered__ ? new rt(this) : this[s](1)
                    }
                }), rt.prototype.compact = function() {
                    return this.filter(Jt)
                }, rt.prototype.find = function(n) {
                    return this.filter(n).head()
                }, rt.prototype.findLast = function(n) {
                    return this.reverse().find(n)
                }, rt.prototype.invokeMap = et(function(n, i) {
                    return typeof n == "function" ? new rt(this) : this.map(function(s) {
                        return Si(s, n, i)
                    })
                }), rt.prototype.reject = function(n) {
                    return this.filter(ss(Y(n)))
                }, rt.prototype.slice = function(n, i) {
                    n = Q(n);
                    var s = this;
                    return s.__filtered__ && (n > 0 || i < 0) ? new rt(s) : (n < 0 ? s = s.takeRight(-n) : n && (s = s.drop(n)), i !== r && (i = Q(i), s = i < 0 ? s.dropRight(-i) : s.take(i - n)), s)
                }, rt.prototype.takeRightWhile = function(n) {
                    return this.reverse().takeWhile(n).reverse()
                }, rt.prototype.toArray = function() {
                    return this.take(Kt)
                }, Be(rt.prototype, function(n, i) {
                    var s = /^(?:filter|find|map|reject)|While$/.test(i),
                        u = /^(?:head|last)$/.test(i),
                        d = p[u ? "take" + (i == "last" ? "Right" : "") : i],
                        m = u || /^find/.test(i);
                    !d || (p.prototype[i] = function() {
                        var _ = this.__wrapped__,
                            b = u ? [1] : arguments,
                            w = _ instanceof rt,
                            O = b[0],
                            G = w || Z(_),
                            I = function(nt) {
                                var it = d.apply(p, Cn([nt], b));
                                return u && D ? it[0] : it
                            };
                        G && s && typeof O == "function" && O.length != 1 && (w = G = !1);
                        var D = this.__chain__,
                            V = !!this.__actions__.length,
                            K = m && !D,
                            tt = w && !V;
                        if (!m && G) {
                            _ = tt ? _ : new rt(this);
                            var j = n.apply(_, b);
                            return j.__actions__.push({
                                func: ns,
                                args: [I],
                                thisArg: r
                            }), new _e(j, D)
                        }
                        return K && tt ? n.apply(this, b) : (j = this.thru(I), K ? u ? j.value()[0] : j.value() : j)
                    })
                }), ge(["pop", "push", "shift", "sort", "splice", "unshift"], function(n) {
                    var i = Oa[n],
                        s = /^(?:push|sort|unshift)$/.test(n) ? "tap" : "thru",
                        u = /^(?:pop|shift)$/.test(n);
                    p.prototype[n] = function() {
                        var d = arguments;
                        if (u && !this.__chain__) {
                            var m = this.value();
                            return i.apply(Z(m) ? m : [], d)
                        }
                        return this[s](function(_) {
                            return i.apply(Z(_) ? _ : [], d)
                        })
                    }
                }), Be(rt.prototype, function(n, i) {
                    var s = p[i];
                    if (s) {
                        var u = s.name + "";
                        ut.call(Rr, u) || (Rr[u] = []), Rr[u].push({
                            name: i,
                            func: s
                        })
                    }
                }), Rr[qa(r, R).name] = [{
                    name: "wrapper",
                    func: r
                }], rt.prototype.clone = v3, rt.prototype.reverse = _3, rt.prototype.value = b3, p.prototype.at = jm, p.prototype.chain = qm, p.prototype.commit = Xm, p.prototype.next = Jm, p.prototype.plant = Qm, p.prototype.reverse = tg, p.prototype.toJSON = p.prototype.valueOf = p.prototype.value = eg, p.prototype.first = p.prototype.head, yi && (p.prototype[yi] = Zm), p
            },
            Ir = X6();
        Qn ? ((Qn.exports = Ir)._ = Ir, Yo._ = Ir) : Pt._ = Ir
    }).call(Pi)
})(xl, xl.exports);
const g0 = xl.exports;
var Wt = "top",
    ue = "bottom",
    fe = "right",
    Ut = "left",
    Xs = "auto",
    ci = [Wt, ue, fe, Ut],
    br = "start",
    Jr = "end",
    v0 = "clippingParents",
    uu = "viewport",
    Wr = "popper",
    _0 = "reference",
    Cl = ci.reduce(function(e, t) {
        return e.concat([t + "-" + br, t + "-" + Jr])
    }, []),
    fu = [].concat(ci, [Xs]).reduce(function(e, t) {
        return e.concat([t, t + "-" + br, t + "-" + Jr])
    }, []),
    b0 = "beforeRead",
    y0 = "read",
    E0 = "afterRead",
    w0 = "beforeMain",
    A0 = "main",
    x0 = "afterMain",
    C0 = "beforeWrite",
    T0 = "write",
    S0 = "afterWrite",
    O0 = [b0, y0, E0, w0, A0, x0, C0, T0, S0];

function Ke(e) {
    return e ? (e.nodeName || "").toLowerCase() : null
}

function de(e) {
    if (e == null) return window;
    if (e.toString() !== "[object Window]") {
        var t = e.ownerDocument;
        return t && t.defaultView || window
    }
    return e
}

function yr(e) {
    var t = de(e).Element;
    return e instanceof t || e instanceof Element
}

function Ae(e) {
    var t = de(e).HTMLElement;
    return e instanceof t || e instanceof HTMLElement
}

function du(e) {
    if (typeof ShadowRoot > "u") return !1;
    var t = de(e).ShadowRoot;
    return e instanceof t || e instanceof ShadowRoot
}

function i_(e) {
    var t = e.state;
    Object.keys(t.elements).forEach(function(r) {
        var a = t.styles[r] || {},
            o = t.attributes[r] || {},
            c = t.elements[r];
        !Ae(c) || !Ke(c) || (Object.assign(c.style, a), Object.keys(o).forEach(function(l) {
            var f = o[l];
            f === !1 ? c.removeAttribute(l) : c.setAttribute(l, f === !0 ? "" : f)
        }))
    })
}

function a_(e) {
    var t = e.state,
        r = {
            popper: {
                position: t.options.strategy,
                left: "0",
                top: "0",
                margin: "0"
            },
            arrow: {
                position: "absolute"
            },
            reference: {}
        };
    return Object.assign(t.elements.popper.style, r.popper), t.styles = r, t.elements.arrow && Object.assign(t.elements.arrow.style, r.arrow),
        function() {
            Object.keys(t.elements).forEach(function(a) {
                var o = t.elements[a],
                    c = t.attributes[a] || {},
                    l = Object.keys(t.styles.hasOwnProperty(a) ? t.styles[a] : r[a]),
                    f = l.reduce(function(h, g) {
                        return h[g] = "", h
                    }, {});
                !Ae(o) || !Ke(o) || (Object.assign(o.style, f), Object.keys(c).forEach(function(h) {
                    o.removeAttribute(h)
                }))
            })
        }
}
const hu = {
    name: "applyStyles",
    enabled: !0,
    phase: "write",
    fn: i_,
    effect: a_,
    requires: ["computeStyles"]
};

function Ue(e) {
    return e.split("-")[0]
}
var pr = Math.max,
    Bs = Math.min,
    Zr = Math.round;

function Tl() {
    var e = navigator.userAgentData;
    return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
        return t.brand + "/" + t.version
    }).join(" ") : navigator.userAgent
}

function G0() {
    return !/^((?!chrome|android).)*safari/i.test(Tl())
}

function Qr(e, t, r) {
    t === void 0 && (t = !1), r === void 0 && (r = !1);
    var a = e.getBoundingClientRect(),
        o = 1,
        c = 1;
    t && Ae(e) && (o = e.offsetWidth > 0 && Zr(a.width) / e.offsetWidth || 1, c = e.offsetHeight > 0 && Zr(a.height) / e.offsetHeight || 1);
    var l = yr(e) ? de(e) : window,
        f = l.visualViewport,
        h = !G0() && r,
        g = (a.left + (h && f ? f.offsetLeft : 0)) / o,
        v = (a.top + (h && f ? f.offsetTop : 0)) / c,
        y = a.width / o,
        x = a.height / c;
    return {
        width: y,
        height: x,
        top: v,
        right: g + y,
        bottom: v + x,
        left: g,
        x: g,
        y: v
    }
}

function pu(e) {
    var t = Qr(e),
        r = e.offsetWidth,
        a = e.offsetHeight;
    return Math.abs(t.width - r) <= 1 && (r = t.width), Math.abs(t.height - a) <= 1 && (a = t.height), {
        x: e.offsetLeft,
        y: e.offsetTop,
        width: r,
        height: a
    }
}

function N0(e, t) {
    var r = t.getRootNode && t.getRootNode();
    if (e.contains(t)) return !0;
    if (r && du(r)) {
        var a = t;
        do {
            if (a && e.isSameNode(a)) return !0;
            a = a.parentNode || a.host
        } while (a)
    }
    return !1
}

function hn(e) {
    return de(e).getComputedStyle(e)
}

function s_(e) {
    return ["table", "td", "th"].indexOf(Ke(e)) >= 0
}

function Kn(e) {
    return ((yr(e) ? e.ownerDocument : e.document) || window.document).documentElement
}

function Js(e) {
    return Ke(e) === "html" ? e : e.assignedSlot || e.parentNode || (du(e) ? e.host : null) || Kn(e)
}

function W2(e) {
    return !Ae(e) || hn(e).position === "fixed" ? null : e.offsetParent
}

function o_(e) {
    var t = /firefox/i.test(Tl()),
        r = /Trident/i.test(Tl());
    if (r && Ae(e)) {
        var a = hn(e);
        if (a.position === "fixed") return null
    }
    var o = Js(e);
    for (du(o) && (o = o.host); Ae(o) && ["html", "body"].indexOf(Ke(o)) < 0;) {
        var c = hn(o);
        if (c.transform !== "none" || c.perspective !== "none" || c.contain === "paint" || ["transform", "perspective"].indexOf(c.willChange) !== -1 || t && c.willChange === "filter" || t && c.filter && c.filter !== "none") return o;
        o = o.parentNode
    }
    return null
}

function ia(e) {
    for (var t = de(e), r = W2(e); r && s_(r) && hn(r).position === "static";) r = W2(r);
    return r && (Ke(r) === "html" || Ke(r) === "body" && hn(r).position === "static") ? t : r || o_(e) || t
}

function mu(e) {
    return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
}

function Fi(e, t, r) {
    return pr(e, Bs(t, r))
}

function c_(e, t, r) {
    var a = Fi(e, t, r);
    return a > r ? r : a
}

function L0() {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    }
}

function I0(e) {
    return Object.assign({}, L0(), e)
}

function M0(e, t) {
    return t.reduce(function(r, a) {
        return r[a] = e, r
    }, {})
}
var l_ = function(t, r) {
    return t = typeof t == "function" ? t(Object.assign({}, r.rects, {
        placement: r.placement
    })) : t, I0(typeof t != "number" ? t : M0(t, ci))
};

function u_(e) {
    var t, r = e.state,
        a = e.name,
        o = e.options,
        c = r.elements.arrow,
        l = r.modifiersData.popperOffsets,
        f = Ue(r.placement),
        h = mu(f),
        g = [Ut, fe].indexOf(f) >= 0,
        v = g ? "height" : "width";
    if (!(!c || !l)) {
        var y = l_(o.padding, r),
            x = pu(c),
            C = h === "y" ? Wt : Ut,
            L = h === "y" ? ue : fe,
            P = r.rects.reference[v] + r.rects.reference[h] - l[h] - r.rects.popper[v],
            N = l[h] - r.rects.reference[h],
            R = ia(c),
            $ = R ? h === "y" ? R.clientHeight || 0 : R.clientWidth || 0 : 0,
            k = P / 2 - N / 2,
            B = y[C],
            F = $ - x[v] - y[L],
            q = $ / 2 - x[v] / 2 + k,
            J = Fi(B, q, F),
            lt = h;
        r.modifiersData[a] = (t = {}, t[lt] = J, t.centerOffset = J - q, t)
    }
}

function f_(e) {
    var t = e.state,
        r = e.options,
        a = r.element,
        o = a === void 0 ? "[data-popper-arrow]" : a;
    o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || !N0(t.elements.popper, o) || (t.elements.arrow = o))
}
const P0 = {
    name: "arrow",
    enabled: !0,
    phase: "main",
    fn: u_,
    effect: f_,
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"]
};

function ti(e) {
    return e.split("-")[1]
}
var d_ = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
};

function h_(e, t) {
    var r = e.x,
        a = e.y,
        o = t.devicePixelRatio || 1;
    return {
        x: Zr(r * o) / o || 0,
        y: Zr(a * o) / o || 0
    }
}

function U2(e) {
    var t, r = e.popper,
        a = e.popperRect,
        o = e.placement,
        c = e.variation,
        l = e.offsets,
        f = e.position,
        h = e.gpuAcceleration,
        g = e.adaptive,
        v = e.roundOffsets,
        y = e.isFixed,
        x = l.x,
        C = x === void 0 ? 0 : x,
        L = l.y,
        P = L === void 0 ? 0 : L,
        N = typeof v == "function" ? v({
            x: C,
            y: P
        }) : {
            x: C,
            y: P
        };
    C = N.x, P = N.y;
    var R = l.hasOwnProperty("x"),
        $ = l.hasOwnProperty("y"),
        k = Ut,
        B = Wt,
        F = window;
    if (g) {
        var q = ia(r),
            J = "clientHeight",
            lt = "clientWidth";
        if (q === de(r) && (q = Kn(r), hn(q).position !== "static" && f === "absolute" && (J = "scrollHeight", lt = "scrollWidth")), q = q, o === Wt || (o === Ut || o === fe) && c === Jr) {
            B = ue;
            var at = y && q === F && F.visualViewport ? F.visualViewport.height : q[J];
            P -= at - a.height, P *= h ? 1 : -1
        }
        if (o === Ut || (o === Wt || o === ue) && c === Jr) {
            k = fe;
            var ht = y && q === F && F.visualViewport ? F.visualViewport.width : q[lt];
            C -= ht - a.width, C *= h ? 1 : -1
        }
    }
    var Nt = Object.assign({
            position: f
        }, g && d_),
        Qt = v === !0 ? h_({
            x: C,
            y: P
        }, de(r)) : {
            x: C,
            y: P
        };
    if (C = Qt.x, P = Qt.y, h) {
        var Mt;
        return Object.assign({}, Nt, (Mt = {}, Mt[B] = $ ? "0" : "", Mt[k] = R ? "0" : "", Mt.transform = (F.devicePixelRatio || 1) <= 1 ? "translate(" + C + "px, " + P + "px)" : "translate3d(" + C + "px, " + P + "px, 0)", Mt))
    }
    return Object.assign({}, Nt, (t = {}, t[B] = $ ? P + "px" : "", t[k] = R ? C + "px" : "", t.transform = "", t))
}

function p_(e) {
    var t = e.state,
        r = e.options,
        a = r.gpuAcceleration,
        o = a === void 0 ? !0 : a,
        c = r.adaptive,
        l = c === void 0 ? !0 : c,
        f = r.roundOffsets,
        h = f === void 0 ? !0 : f,
        g = {
            placement: Ue(t.placement),
            variation: ti(t.placement),
            popper: t.elements.popper,
            popperRect: t.rects.popper,
            gpuAcceleration: o,
            isFixed: t.options.strategy === "fixed"
        };
    t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, U2(Object.assign({}, g, {
        offsets: t.modifiersData.popperOffsets,
        position: t.options.strategy,
        adaptive: l,
        roundOffsets: h
    })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, U2(Object.assign({}, g, {
        offsets: t.modifiersData.arrow,
        position: "absolute",
        adaptive: !1,
        roundOffsets: h
    })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
        "data-popper-placement": t.placement
    })
}
const gu = {
    name: "computeStyles",
    enabled: !0,
    phase: "beforeWrite",
    fn: p_,
    data: {}
};
var us = {
    passive: !0
};

function m_(e) {
    var t = e.state,
        r = e.instance,
        a = e.options,
        o = a.scroll,
        c = o === void 0 ? !0 : o,
        l = a.resize,
        f = l === void 0 ? !0 : l,
        h = de(t.elements.popper),
        g = [].concat(t.scrollParents.reference, t.scrollParents.popper);
    return c && g.forEach(function(v) {
            v.addEventListener("scroll", r.update, us)
        }), f && h.addEventListener("resize", r.update, us),
        function() {
            c && g.forEach(function(v) {
                v.removeEventListener("scroll", r.update, us)
            }), f && h.removeEventListener("resize", r.update, us)
        }
}
const vu = {
    name: "eventListeners",
    enabled: !0,
    phase: "write",
    fn: function() {},
    effect: m_,
    data: {}
};
var g_ = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
};

function Ss(e) {
    return e.replace(/left|right|bottom|top/g, function(t) {
        return g_[t]
    })
}
var v_ = {
    start: "end",
    end: "start"
};

function Y2(e) {
    return e.replace(/start|end/g, function(t) {
        return v_[t]
    })
}

function _u(e) {
    var t = de(e),
        r = t.pageXOffset,
        a = t.pageYOffset;
    return {
        scrollLeft: r,
        scrollTop: a
    }
}

function bu(e) {
    return Qr(Kn(e)).left + _u(e).scrollLeft
}

function __(e, t) {
    var r = de(e),
        a = Kn(e),
        o = r.visualViewport,
        c = a.clientWidth,
        l = a.clientHeight,
        f = 0,
        h = 0;
    if (o) {
        c = o.width, l = o.height;
        var g = G0();
        (g || !g && t === "fixed") && (f = o.offsetLeft, h = o.offsetTop)
    }
    return {
        width: c,
        height: l,
        x: f + bu(e),
        y: h
    }
}

function b_(e) {
    var t, r = Kn(e),
        a = _u(e),
        o = (t = e.ownerDocument) == null ? void 0 : t.body,
        c = pr(r.scrollWidth, r.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0),
        l = pr(r.scrollHeight, r.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0),
        f = -a.scrollLeft + bu(e),
        h = -a.scrollTop;
    return hn(o || r).direction === "rtl" && (f += pr(r.clientWidth, o ? o.clientWidth : 0) - c), {
        width: c,
        height: l,
        x: f,
        y: h
    }
}

function yu(e) {
    var t = hn(e),
        r = t.overflow,
        a = t.overflowX,
        o = t.overflowY;
    return /auto|scroll|overlay|hidden/.test(r + o + a)
}

function R0(e) {
    return ["html", "body", "#document"].indexOf(Ke(e)) >= 0 ? e.ownerDocument.body : Ae(e) && yu(e) ? e : R0(Js(e))
}

function Vi(e, t) {
    var r;
    t === void 0 && (t = []);
    var a = R0(e),
        o = a === ((r = e.ownerDocument) == null ? void 0 : r.body),
        c = de(a),
        l = o ? [c].concat(c.visualViewport || [], yu(a) ? a : []) : a,
        f = t.concat(l);
    return o ? f : f.concat(Vi(Js(l)))
}

function Sl(e) {
    return Object.assign({}, e, {
        left: e.x,
        top: e.y,
        right: e.x + e.width,
        bottom: e.y + e.height
    })
}

function y_(e, t) {
    var r = Qr(e, !1, t === "fixed");
    return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r
}

function K2(e, t, r) {
    return t === uu ? Sl(__(e, r)) : yr(t) ? y_(t, r) : Sl(b_(Kn(e)))
}

function E_(e) {
    var t = Vi(Js(e)),
        r = ["absolute", "fixed"].indexOf(hn(e).position) >= 0,
        a = r && Ae(e) ? ia(e) : e;
    return yr(a) ? t.filter(function(o) {
        return yr(o) && N0(o, a) && Ke(o) !== "body"
    }) : []
}

function w_(e, t, r, a) {
    var o = t === "clippingParents" ? E_(e) : [].concat(t),
        c = [].concat(o, [r]),
        l = c[0],
        f = c.reduce(function(h, g) {
            var v = K2(e, g, a);
            return h.top = pr(v.top, h.top), h.right = Bs(v.right, h.right), h.bottom = Bs(v.bottom, h.bottom), h.left = pr(v.left, h.left), h
        }, K2(e, l, a));
    return f.width = f.right - f.left, f.height = f.bottom - f.top, f.x = f.left, f.y = f.top, f
}

function D0(e) {
    var t = e.reference,
        r = e.element,
        a = e.placement,
        o = a ? Ue(a) : null,
        c = a ? ti(a) : null,
        l = t.x + t.width / 2 - r.width / 2,
        f = t.y + t.height / 2 - r.height / 2,
        h;
    switch (o) {
        case Wt:
            h = {
                x: l,
                y: t.y - r.height
            };
            break;
        case ue:
            h = {
                x: l,
                y: t.y + t.height
            };
            break;
        case fe:
            h = {
                x: t.x + t.width,
                y: f
            };
            break;
        case Ut:
            h = {
                x: t.x - r.width,
                y: f
            };
            break;
        default:
            h = {
                x: t.x,
                y: t.y
            }
    }
    var g = o ? mu(o) : null;
    if (g != null) {
        var v = g === "y" ? "height" : "width";
        switch (c) {
            case br:
                h[g] = h[g] - (t[v] / 2 - r[v] / 2);
                break;
            case Jr:
                h[g] = h[g] + (t[v] / 2 - r[v] / 2);
                break
        }
    }
    return h
}

function ei(e, t) {
    t === void 0 && (t = {});
    var r = t,
        a = r.placement,
        o = a === void 0 ? e.placement : a,
        c = r.strategy,
        l = c === void 0 ? e.strategy : c,
        f = r.boundary,
        h = f === void 0 ? v0 : f,
        g = r.rootBoundary,
        v = g === void 0 ? uu : g,
        y = r.elementContext,
        x = y === void 0 ? Wr : y,
        C = r.altBoundary,
        L = C === void 0 ? !1 : C,
        P = r.padding,
        N = P === void 0 ? 0 : P,
        R = I0(typeof N != "number" ? N : M0(N, ci)),
        $ = x === Wr ? _0 : Wr,
        k = e.rects.popper,
        B = e.elements[L ? $ : x],
        F = w_(yr(B) ? B : B.contextElement || Kn(e.elements.popper), h, v, l),
        q = Qr(e.elements.reference),
        J = D0({
            reference: q,
            element: k,
            strategy: "absolute",
            placement: o
        }),
        lt = Sl(Object.assign({}, k, J)),
        at = x === Wr ? lt : q,
        ht = {
            top: F.top - at.top + R.top,
            bottom: at.bottom - F.bottom + R.bottom,
            left: F.left - at.left + R.left,
            right: at.right - F.right + R.right
        },
        Nt = e.modifiersData.offset;
    if (x === Wr && Nt) {
        var Qt = Nt[o];
        Object.keys(ht).forEach(function(Mt) {
            var De = [fe, ue].indexOf(Mt) >= 0 ? 1 : -1,
                qe = [Wt, ue].indexOf(Mt) >= 0 ? "y" : "x";
            ht[Mt] += Qt[qe] * De
        })
    }
    return ht
}

function A_(e, t) {
    t === void 0 && (t = {});
    var r = t,
        a = r.placement,
        o = r.boundary,
        c = r.rootBoundary,
        l = r.padding,
        f = r.flipVariations,
        h = r.allowedAutoPlacements,
        g = h === void 0 ? fu : h,
        v = ti(a),
        y = v ? f ? Cl : Cl.filter(function(L) {
            return ti(L) === v
        }) : ci,
        x = y.filter(function(L) {
            return g.indexOf(L) >= 0
        });
    x.length === 0 && (x = y);
    var C = x.reduce(function(L, P) {
        return L[P] = ei(e, {
            placement: P,
            boundary: o,
            rootBoundary: c,
            padding: l
        })[Ue(P)], L
    }, {});
    return Object.keys(C).sort(function(L, P) {
        return C[L] - C[P]
    })
}

function x_(e) {
    if (Ue(e) === Xs) return [];
    var t = Ss(e);
    return [Y2(e), t, Y2(t)]
}

function C_(e) {
    var t = e.state,
        r = e.options,
        a = e.name;
    if (!t.modifiersData[a]._skip) {
        for (var o = r.mainAxis, c = o === void 0 ? !0 : o, l = r.altAxis, f = l === void 0 ? !0 : l, h = r.fallbackPlacements, g = r.padding, v = r.boundary, y = r.rootBoundary, x = r.altBoundary, C = r.flipVariations, L = C === void 0 ? !0 : C, P = r.allowedAutoPlacements, N = t.options.placement, R = Ue(N), $ = R === N, k = h || ($ || !L ? [Ss(N)] : x_(N)), B = [N].concat(k).reduce(function(bn, zt) {
                return bn.concat(Ue(zt) === Xs ? A_(t, {
                    placement: zt,
                    boundary: v,
                    rootBoundary: y,
                    padding: g,
                    flipVariations: L,
                    allowedAutoPlacements: P
                }) : zt)
            }, []), F = t.rects.reference, q = t.rects.popper, J = new Map, lt = !0, at = B[0], ht = 0; ht < B.length; ht++) {
            var Nt = B[ht],
                Qt = Ue(Nt),
                Mt = ti(Nt) === br,
                De = [Wt, ue].indexOf(Qt) >= 0,
                qe = De ? "width" : "height",
                $t = ei(t, {
                    placement: Nt,
                    boundary: v,
                    rootBoundary: y,
                    altBoundary: x,
                    padding: g
                }),
                Ct = De ? Mt ? fe : Ut : Mt ? ue : Wt;
            F[qe] > q[qe] && (Ct = Ss(Ct));
            var te = Ss(Ct),
                Xe = [];
            if (c && Xe.push($t[Qt] <= 0), f && Xe.push($t[Ct] <= 0, $t[te] <= 0), Xe.every(function(bn) {
                    return bn
                })) {
                at = Nt, lt = !1;
                break
            }
            J.set(Nt, Xe)
        }
        if (lt)
            for (var Je = L ? 3 : 1, Kt = function(zt) {
                    var ke = B.find(function(Tr) {
                        var ee = J.get(Tr);
                        if (ee) return ee.slice(0, zt).every(function(Ze) {
                            return Ze
                        })
                    });
                    if (ke) return at = ke, "break"
                }, Xn = Je; Xn > 0; Xn--) {
                var Cr = Kt(Xn);
                if (Cr === "break") break
            }
        t.placement !== at && (t.modifiersData[a]._skip = !0, t.placement = at, t.reset = !0)
    }
}
const k0 = {
    name: "flip",
    enabled: !0,
    phase: "main",
    fn: C_,
    requiresIfExists: ["offset"],
    data: {
        _skip: !1
    }
};

function j2(e, t, r) {
    return r === void 0 && (r = {
        x: 0,
        y: 0
    }), {
        top: e.top - t.height - r.y,
        right: e.right - t.width + r.x,
        bottom: e.bottom - t.height + r.y,
        left: e.left - t.width - r.x
    }
}

function q2(e) {
    return [Wt, fe, ue, Ut].some(function(t) {
        return e[t] >= 0
    })
}

function T_(e) {
    var t = e.state,
        r = e.name,
        a = t.rects.reference,
        o = t.rects.popper,
        c = t.modifiersData.preventOverflow,
        l = ei(t, {
            elementContext: "reference"
        }),
        f = ei(t, {
            altBoundary: !0
        }),
        h = j2(l, a),
        g = j2(f, o, c),
        v = q2(h),
        y = q2(g);
    t.modifiersData[r] = {
        referenceClippingOffsets: h,
        popperEscapeOffsets: g,
        isReferenceHidden: v,
        hasPopperEscaped: y
    }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
        "data-popper-reference-hidden": v,
        "data-popper-escaped": y
    })
}
const B0 = {
    name: "hide",
    enabled: !0,
    phase: "main",
    requiresIfExists: ["preventOverflow"],
    fn: T_
};

function S_(e, t, r) {
    var a = Ue(e),
        o = [Ut, Wt].indexOf(a) >= 0 ? -1 : 1,
        c = typeof r == "function" ? r(Object.assign({}, t, {
            placement: e
        })) : r,
        l = c[0],
        f = c[1];
    return l = l || 0, f = (f || 0) * o, [Ut, fe].indexOf(a) >= 0 ? {
        x: f,
        y: l
    } : {
        x: l,
        y: f
    }
}

function O_(e) {
    var t = e.state,
        r = e.options,
        a = e.name,
        o = r.offset,
        c = o === void 0 ? [0, 0] : o,
        l = fu.reduce(function(v, y) {
            return v[y] = S_(y, t.rects, c), v
        }, {}),
        f = l[t.placement],
        h = f.x,
        g = f.y;
    t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += h, t.modifiersData.popperOffsets.y += g), t.modifiersData[a] = l
}
const $0 = {
    name: "offset",
    enabled: !0,
    phase: "main",
    requires: ["popperOffsets"],
    fn: O_
};

function G_(e) {
    var t = e.state,
        r = e.name;
    t.modifiersData[r] = D0({
        reference: t.rects.reference,
        element: t.rects.popper,
        strategy: "absolute",
        placement: t.placement
    })
}
const Eu = {
    name: "popperOffsets",
    enabled: !0,
    phase: "read",
    fn: G_,
    data: {}
};

function N_(e) {
    return e === "x" ? "y" : "x"
}

function L_(e) {
    var t = e.state,
        r = e.options,
        a = e.name,
        o = r.mainAxis,
        c = o === void 0 ? !0 : o,
        l = r.altAxis,
        f = l === void 0 ? !1 : l,
        h = r.boundary,
        g = r.rootBoundary,
        v = r.altBoundary,
        y = r.padding,
        x = r.tether,
        C = x === void 0 ? !0 : x,
        L = r.tetherOffset,
        P = L === void 0 ? 0 : L,
        N = ei(t, {
            boundary: h,
            rootBoundary: g,
            padding: y,
            altBoundary: v
        }),
        R = Ue(t.placement),
        $ = ti(t.placement),
        k = !$,
        B = mu(R),
        F = N_(B),
        q = t.modifiersData.popperOffsets,
        J = t.rects.reference,
        lt = t.rects.popper,
        at = typeof P == "function" ? P(Object.assign({}, t.rects, {
            placement: t.placement
        })) : P,
        ht = typeof at == "number" ? {
            mainAxis: at,
            altAxis: at
        } : Object.assign({
            mainAxis: 0,
            altAxis: 0
        }, at),
        Nt = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
        Qt = {
            x: 0,
            y: 0
        };
    if (!!q) {
        if (c) {
            var Mt, De = B === "y" ? Wt : Ut,
                qe = B === "y" ? ue : fe,
                $t = B === "y" ? "height" : "width",
                Ct = q[B],
                te = Ct + N[De],
                Xe = Ct - N[qe],
                Je = C ? -lt[$t] / 2 : 0,
                Kt = $ === br ? J[$t] : lt[$t],
                Xn = $ === br ? -lt[$t] : -J[$t],
                Cr = t.elements.arrow,
                bn = C && Cr ? pu(Cr) : {
                    width: 0,
                    height: 0
                },
                zt = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : L0(),
                ke = zt[De],
                Tr = zt[qe],
                ee = Fi(0, J[$t], bn[$t]),
                Ze = k ? J[$t] / 2 - Je - ee - ke - ht.mainAxis : Kt - ee - ke - ht.mainAxis,
                Oo = k ? -J[$t] / 2 + Je + ee + Tr + ht.mainAxis : Xn + ee + Tr + ht.mainAxis,
                yn = t.elements.arrow && ia(t.elements.arrow),
                Sr = yn ? B === "y" ? yn.clientTop || 0 : yn.clientLeft || 0 : 0,
                vi = (Mt = Nt == null ? void 0 : Nt[B]) != null ? Mt : 0,
                ne = Ct + Ze - vi - Sr,
                Jn = Ct + Oo - vi,
                ba = Fi(C ? Bs(te, ne) : te, Ct, C ? pr(Xe, Jn) : Xe);
            q[B] = ba, Qt[B] = ba - Ct
        }
        if (f) {
            var pe, ya = B === "x" ? Wt : Ut,
                Go = B === "x" ? ue : fe,
                re = q[F],
                Dt = F === "y" ? "height" : "width",
                En = re + N[ya],
                Zn = re - N[Go],
                _i = [Wt, Ut].indexOf(R) !== -1,
                wn = (pe = Nt == null ? void 0 : Nt[F]) != null ? pe : 0,
                Ea = _i ? En : re - J[Dt] - lt[Dt] - wn + ht.altAxis,
                An = _i ? re + J[Dt] + lt[Dt] - wn - ht.altAxis : Zn,
                Qe = C && _i ? c_(Ea, re, An) : Fi(C ? Ea : En, re, C ? An : Zn);
            q[F] = Qe, Qt[F] = Qe - re
        }
        t.modifiersData[a] = Qt
    }
}
const z0 = {
    name: "preventOverflow",
    enabled: !0,
    phase: "main",
    fn: L_,
    requiresIfExists: ["offset"]
};

function I_(e) {
    return {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    }
}

function M_(e) {
    return e === de(e) || !Ae(e) ? _u(e) : I_(e)
}

function P_(e) {
    var t = e.getBoundingClientRect(),
        r = Zr(t.width) / e.offsetWidth || 1,
        a = Zr(t.height) / e.offsetHeight || 1;
    return r !== 1 || a !== 1
}

function R_(e, t, r) {
    r === void 0 && (r = !1);
    var a = Ae(t),
        o = Ae(t) && P_(t),
        c = Kn(t),
        l = Qr(e, o, r),
        f = {
            scrollLeft: 0,
            scrollTop: 0
        },
        h = {
            x: 0,
            y: 0
        };
    return (a || !a && !r) && ((Ke(t) !== "body" || yu(c)) && (f = M_(t)), Ae(t) ? (h = Qr(t, !0), h.x += t.clientLeft, h.y += t.clientTop) : c && (h.x = bu(c))), {
        x: l.left + f.scrollLeft - h.x,
        y: l.top + f.scrollTop - h.y,
        width: l.width,
        height: l.height
    }
}

function D_(e) {
    var t = new Map,
        r = new Set,
        a = [];
    e.forEach(function(c) {
        t.set(c.name, c)
    });

    function o(c) {
        r.add(c.name);
        var l = [].concat(c.requires || [], c.requiresIfExists || []);
        l.forEach(function(f) {
            if (!r.has(f)) {
                var h = t.get(f);
                h && o(h)
            }
        }), a.push(c)
    }
    return e.forEach(function(c) {
        r.has(c.name) || o(c)
    }), a
}

function k_(e) {
    var t = D_(e);
    return O0.reduce(function(r, a) {
        return r.concat(t.filter(function(o) {
            return o.phase === a
        }))
    }, [])
}

function B_(e) {
    var t;
    return function() {
        return t || (t = new Promise(function(r) {
            Promise.resolve().then(function() {
                t = void 0, r(e())
            })
        })), t
    }
}

function $_(e) {
    var t = e.reduce(function(r, a) {
        var o = r[a.name];
        return r[a.name] = o ? Object.assign({}, o, a, {
            options: Object.assign({}, o.options, a.options),
            data: Object.assign({}, o.data, a.data)
        }) : a, r
    }, {});
    return Object.keys(t).map(function(r) {
        return t[r]
    })
}
var X2 = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
};

function J2() {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
    return !t.some(function(a) {
        return !(a && typeof a.getBoundingClientRect == "function")
    })
}

function Zs(e) {
    e === void 0 && (e = {});
    var t = e,
        r = t.defaultModifiers,
        a = r === void 0 ? [] : r,
        o = t.defaultOptions,
        c = o === void 0 ? X2 : o;
    return function(f, h, g) {
        g === void 0 && (g = c);
        var v = {
                placement: "bottom",
                orderedModifiers: [],
                options: Object.assign({}, X2, c),
                modifiersData: {},
                elements: {
                    reference: f,
                    popper: h
                },
                attributes: {},
                styles: {}
            },
            y = [],
            x = !1,
            C = {
                state: v,
                setOptions: function(R) {
                    var $ = typeof R == "function" ? R(v.options) : R;
                    P(), v.options = Object.assign({}, c, v.options, $), v.scrollParents = {
                        reference: yr(f) ? Vi(f) : f.contextElement ? Vi(f.contextElement) : [],
                        popper: Vi(h)
                    };
                    var k = k_($_([].concat(a, v.options.modifiers)));
                    return v.orderedModifiers = k.filter(function(B) {
                        return B.enabled
                    }), L(), C.update()
                },
                forceUpdate: function() {
                    if (!x) {
                        var R = v.elements,
                            $ = R.reference,
                            k = R.popper;
                        if (!!J2($, k)) {
                            v.rects = {
                                reference: R_($, ia(k), v.options.strategy === "fixed"),
                                popper: pu(k)
                            }, v.reset = !1, v.placement = v.options.placement, v.orderedModifiers.forEach(function(ht) {
                                return v.modifiersData[ht.name] = Object.assign({}, ht.data)
                            });
                            for (var B = 0; B < v.orderedModifiers.length; B++) {
                                if (v.reset === !0) {
                                    v.reset = !1, B = -1;
                                    continue
                                }
                                var F = v.orderedModifiers[B],
                                    q = F.fn,
                                    J = F.options,
                                    lt = J === void 0 ? {} : J,
                                    at = F.name;
                                typeof q == "function" && (v = q({
                                    state: v,
                                    options: lt,
                                    name: at,
                                    instance: C
                                }) || v)
                            }
                        }
                    }
                },
                update: B_(function() {
                    return new Promise(function(N) {
                        C.forceUpdate(), N(v)
                    })
                }),
                destroy: function() {
                    P(), x = !0
                }
            };
        if (!J2(f, h)) return C;
        C.setOptions(g).then(function(N) {
            !x && g.onFirstUpdate && g.onFirstUpdate(N)
        });

        function L() {
            v.orderedModifiers.forEach(function(N) {
                var R = N.name,
                    $ = N.options,
                    k = $ === void 0 ? {} : $,
                    B = N.effect;
                if (typeof B == "function") {
                    var F = B({
                            state: v,
                            name: R,
                            instance: C,
                            options: k
                        }),
                        q = function() {};
                    y.push(F || q)
                }
            })
        }

        function P() {
            y.forEach(function(N) {
                return N()
            }), y = []
        }
        return C
    }
}
var z_ = Zs(),
    H_ = [vu, Eu, gu, hu],
    F_ = Zs({
        defaultModifiers: H_
    }),
    V_ = [vu, Eu, gu, hu, $0, k0, z0, P0, B0],
    wu = Zs({
        defaultModifiers: V_
    });
const Au = Object.freeze(Object.defineProperty({
    __proto__: null,
    popperGenerator: Zs,
    detectOverflow: ei,
    createPopperBase: z_,
    createPopper: wu,
    createPopperLite: F_,
    top: Wt,
    bottom: ue,
    right: fe,
    left: Ut,
    auto: Xs,
    basePlacements: ci,
    start: br,
    end: Jr,
    clippingParents: v0,
    viewport: uu,
    popper: Wr,
    reference: _0,
    variationPlacements: Cl,
    placements: fu,
    beforeRead: b0,
    read: y0,
    afterRead: E0,
    beforeMain: w0,
    main: A0,
    afterMain: x0,
    beforeWrite: C0,
    write: T0,
    afterWrite: S0,
    modifierPhases: O0,
    applyStyles: hu,
    arrow: P0,
    computeStyles: gu,
    eventListeners: vu,
    flip: k0,
    hide: B0,
    offset: $0,
    popperOffsets: Eu,
    preventOverflow: z0
}, Symbol.toStringTag, {
    value: "Module"
}));
/*!
 * Bootstrap v5.3.1 (https://getbootstrap.com/)
 * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
const Mn = new Map,
    Jc = {
        set(e, t, r) {
            Mn.has(e) || Mn.set(e, new Map);
            const a = Mn.get(e);
            if (!a.has(t) && a.size !== 0) {
                console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(a.keys())[0]}.`);
                return
            }
            a.set(t, r)
        },
        get(e, t) {
            return Mn.has(e) && Mn.get(e).get(t) || null
        },
        remove(e, t) {
            if (!Mn.has(e)) return;
            const r = Mn.get(e);
            r.delete(t), r.size === 0 && Mn.delete(e)
        }
    },
    W_ = 1e6,
    U_ = 1e3,
    Ol = "transitionend",
    H0 = e => (e && window.CSS && window.CSS.escape && (e = e.replace(/#([^\s"#']+)/g, (t, r) => `#${CSS.escape(r)}`)), e),
    Y_ = e => e == null ? `${e}` : Object.prototype.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase(),
    K_ = e => {
        do e += Math.floor(Math.random() * W_); while (document.getElementById(e));
        return e
    },
    j_ = e => {
        if (!e) return 0;
        let {
            transitionDuration: t,
            transitionDelay: r
        } = window.getComputedStyle(e);
        const a = Number.parseFloat(t),
            o = Number.parseFloat(r);
        return !a && !o ? 0 : (t = t.split(",")[0], r = r.split(",")[0], (Number.parseFloat(t) + Number.parseFloat(r)) * U_)
    },
    F0 = e => {
        e.dispatchEvent(new Event(Ol))
    },
    un = e => !e || typeof e != "object" ? !1 : (typeof e.jquery < "u" && (e = e[0]), typeof e.nodeType < "u"),
    kn = e => un(e) ? e.jquery ? e[0] : e : typeof e == "string" && e.length > 0 ? document.querySelector(H0(e)) : null,
    li = e => {
        if (!un(e) || e.getClientRects().length === 0) return !1;
        const t = getComputedStyle(e).getPropertyValue("visibility") === "visible",
            r = e.closest("details:not([open])");
        if (!r) return t;
        if (r !== e) {
            const a = e.closest("summary");
            if (a && a.parentNode !== r || a === null) return !1
        }
        return t
    },
    Bn = e => !e || e.nodeType !== Node.ELEMENT_NODE || e.classList.contains("disabled") ? !0 : typeof e.disabled < "u" ? e.disabled : e.hasAttribute("disabled") && e.getAttribute("disabled") !== "false",
    V0 = e => {
        if (!document.documentElement.attachShadow) return null;
        if (typeof e.getRootNode == "function") {
            const t = e.getRootNode();
            return t instanceof ShadowRoot ? t : null
        }
        return e instanceof ShadowRoot ? e : e.parentNode ? V0(e.parentNode) : null
    },
    $s = () => {},
    aa = e => {
        e.offsetHeight
    },
    W0 = () => window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null,
    Zc = [],
    q_ = e => {
        document.readyState === "loading" ? (Zc.length || document.addEventListener("DOMContentLoaded", () => {
            for (const t of Zc) t()
        }), Zc.push(e)) : e()
    },
    Ce = () => document.documentElement.dir === "rtl",
    Se = e => {
        q_(() => {
            const t = W0();
            if (t) {
                const r = e.NAME,
                    a = t.fn[r];
                t.fn[r] = e.jQueryInterface, t.fn[r].Constructor = e, t.fn[r].noConflict = () => (t.fn[r] = a, e.jQueryInterface)
            }
        })
    },
    Zt = (e, t = [], r = e) => typeof e == "function" ? e(...t) : r,
    U0 = (e, t, r = !0) => {
        if (!r) {
            Zt(e);
            return
        }
        const a = 5,
            o = j_(t) + a;
        let c = !1;
        const l = ({
            target: f
        }) => {
            f === t && (c = !0, t.removeEventListener(Ol, l), Zt(e))
        };
        t.addEventListener(Ol, l), setTimeout(() => {
            c || F0(t)
        }, o)
    },
    xu = (e, t, r, a) => {
        const o = e.length;
        let c = e.indexOf(t);
        return c === -1 ? !r && a ? e[o - 1] : e[0] : (c += r ? 1 : -1, a && (c = (c + o) % o), e[Math.max(0, Math.min(c, o - 1))])
    },
    X_ = /[^.]*(?=\..*)\.|.*/,
    J_ = /\..*/,
    Z_ = /::\d+$/,
    Qc = {};
let Z2 = 1;
const Y0 = {
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    },
    Q_ = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);

function K0(e, t) {
    return t && `${t}::${Z2++}` || e.uidEvent || Z2++
}

function j0(e) {
    const t = K0(e);
    return e.uidEvent = t, Qc[t] = Qc[t] || {}, Qc[t]
}

function t9(e, t) {
    return function r(a) {
        return Cu(a, {
            delegateTarget: e
        }), r.oneOff && M.off(e, a.type, t), t.apply(e, [a])
    }
}

function e9(e, t, r) {
    return function a(o) {
        const c = e.querySelectorAll(t);
        for (let {
                target: l
            } = o; l && l !== this; l = l.parentNode)
            for (const f of c)
                if (f === l) return Cu(o, {
                    delegateTarget: l
                }), a.oneOff && M.off(e, o.type, t, r), r.apply(l, [o])
    }
}

function q0(e, t, r = null) {
    return Object.values(e).find(a => a.callable === t && a.delegationSelector === r)
}

function X0(e, t, r) {
    const a = typeof t == "string",
        o = a ? r : t || r;
    let c = J0(e);
    return Q_.has(c) || (c = e), [a, o, c]
}

function Q2(e, t, r, a, o) {
    if (typeof t != "string" || !e) return;
    let [c, l, f] = X0(t, r, a);
    t in Y0 && (l = (L => function(P) {
        if (!P.relatedTarget || P.relatedTarget !== P.delegateTarget && !P.delegateTarget.contains(P.relatedTarget)) return L.call(this, P)
    })(l));
    const h = j0(e),
        g = h[f] || (h[f] = {}),
        v = q0(g, l, c ? r : null);
    if (v) {
        v.oneOff = v.oneOff && o;
        return
    }
    const y = K0(l, t.replace(X_, "")),
        x = c ? e9(e, r, l) : t9(e, l);
    x.delegationSelector = c ? r : null, x.callable = l, x.oneOff = o, x.uidEvent = y, g[y] = x, e.addEventListener(f, x, c)
}

function Gl(e, t, r, a, o) {
    const c = q0(t[r], a, o);
    !c || (e.removeEventListener(r, c, Boolean(o)), delete t[r][c.uidEvent])
}

function n9(e, t, r, a) {
    const o = t[r] || {};
    for (const [c, l] of Object.entries(o)) c.includes(a) && Gl(e, t, r, l.callable, l.delegationSelector)
}

function J0(e) {
    return e = e.replace(J_, ""), Y0[e] || e
}
const M = {
    on(e, t, r, a) {
        Q2(e, t, r, a, !1)
    },
    one(e, t, r, a) {
        Q2(e, t, r, a, !0)
    },
    off(e, t, r, a) {
        if (typeof t != "string" || !e) return;
        const [o, c, l] = X0(t, r, a), f = l !== t, h = j0(e), g = h[l] || {}, v = t.startsWith(".");
        if (typeof c < "u") {
            if (!Object.keys(g).length) return;
            Gl(e, h, l, c, o ? r : null);
            return
        }
        if (v)
            for (const y of Object.keys(h)) n9(e, h, y, t.slice(1));
        for (const [y, x] of Object.entries(g)) {
            const C = y.replace(Z_, "");
            (!f || t.includes(C)) && Gl(e, h, l, x.callable, x.delegationSelector)
        }
    },
    trigger(e, t, r) {
        if (typeof t != "string" || !e) return null;
        const a = W0(),
            o = J0(t),
            c = t !== o;
        let l = null,
            f = !0,
            h = !0,
            g = !1;
        c && a && (l = a.Event(t, r), a(e).trigger(l), f = !l.isPropagationStopped(), h = !l.isImmediatePropagationStopped(), g = l.isDefaultPrevented());
        const v = Cu(new Event(t, {
            bubbles: f,
            cancelable: !0
        }), r);
        return g && v.preventDefault(), h && e.dispatchEvent(v), v.defaultPrevented && l && l.preventDefault(), v
    }
};

function Cu(e, t = {}) {
    for (const [r, a] of Object.entries(t)) try {
        e[r] = a
    } catch {
        Object.defineProperty(e, r, {
            configurable: !0,
            get() {
                return a
            }
        })
    }
    return e
}

function td(e) {
    if (e === "true") return !0;
    if (e === "false") return !1;
    if (e === Number(e).toString()) return Number(e);
    if (e === "" || e === "null") return null;
    if (typeof e != "string") return e;
    try {
        return JSON.parse(decodeURIComponent(e))
    } catch {
        return e
    }
}

function tl(e) {
    return e.replace(/[A-Z]/g, t => `-${t.toLowerCase()}`)
}
const fn = {
    setDataAttribute(e, t, r) {
        e.setAttribute(`data-bs-${tl(t)}`, r)
    },
    removeDataAttribute(e, t) {
        e.removeAttribute(`data-bs-${tl(t)}`)
    },
    getDataAttributes(e) {
        if (!e) return {};
        const t = {},
            r = Object.keys(e.dataset).filter(a => a.startsWith("bs") && !a.startsWith("bsConfig"));
        for (const a of r) {
            let o = a.replace(/^bs/, "");
            o = o.charAt(0).toLowerCase() + o.slice(1, o.length), t[o] = td(e.dataset[a])
        }
        return t
    },
    getDataAttribute(e, t) {
        return td(e.getAttribute(`data-bs-${tl(t)}`))
    }
};
class sa {
    static get Default() {
        return {}
    }
    static get DefaultType() {
        return {}
    }
    static get NAME() {
        throw new Error('You have to implement the static method "NAME", for each component!')
    }
    _getConfig(t) {
        return t = this._mergeConfigObj(t), t = this._configAfterMerge(t), this._typeCheckConfig(t), t
    }
    _configAfterMerge(t) {
        return t
    }
    _mergeConfigObj(t, r) {
        const a = un(r) ? fn.getDataAttribute(r, "config") : {};
        return { ...this.constructor.Default,
            ...typeof a == "object" ? a : {},
            ...un(r) ? fn.getDataAttributes(r) : {},
            ...typeof t == "object" ? t : {}
        }
    }
    _typeCheckConfig(t, r = this.constructor.DefaultType) {
        for (const [a, o] of Object.entries(r)) {
            const c = t[a],
                l = un(c) ? "element" : Y_(c);
            if (!new RegExp(o).test(l)) throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${a}" provided type "${l}" but expected type "${o}".`)
        }
    }
}
const r9 = "5.3.1";
class Pe extends sa {
    constructor(t, r) {
        super(), t = kn(t), t && (this._element = t, this._config = this._getConfig(r), Jc.set(this._element, this.constructor.DATA_KEY, this))
    }
    dispose() {
        Jc.remove(this._element, this.constructor.DATA_KEY), M.off(this._element, this.constructor.EVENT_KEY);
        for (const t of Object.getOwnPropertyNames(this)) this[t] = null
    }
    _queueCallback(t, r, a = !0) {
        U0(t, r, a)
    }
    _getConfig(t) {
        return t = this._mergeConfigObj(t, this._element), t = this._configAfterMerge(t), this._typeCheckConfig(t), t
    }
    static getInstance(t) {
        return Jc.get(kn(t), this.DATA_KEY)
    }
    static getOrCreateInstance(t, r = {}) {
        return this.getInstance(t) || new this(t, typeof r == "object" ? r : null)
    }
    static get VERSION() {
        return r9
    }
    static get DATA_KEY() {
        return `bs.${this.NAME}`
    }
    static get EVENT_KEY() {
        return `.${this.DATA_KEY}`
    }
    static eventName(t) {
        return `${t}${this.EVENT_KEY}`
    }
}
const el = e => {
        let t = e.getAttribute("data-bs-target");
        if (!t || t === "#") {
            let r = e.getAttribute("href");
            if (!r || !r.includes("#") && !r.startsWith(".")) return null;
            r.includes("#") && !r.startsWith("#") && (r = `#${r.split("#")[1]}`), t = r && r !== "#" ? r.trim() : null
        }
        return H0(t)
    },
    U = {
        find(e, t = document.documentElement) {
            return [].concat(...Element.prototype.querySelectorAll.call(t, e))
        },
        findOne(e, t = document.documentElement) {
            return Element.prototype.querySelector.call(t, e)
        },
        children(e, t) {
            return [].concat(...e.children).filter(r => r.matches(t))
        },
        parents(e, t) {
            const r = [];
            let a = e.parentNode.closest(t);
            for (; a;) r.push(a), a = a.parentNode.closest(t);
            return r
        },
        prev(e, t) {
            let r = e.previousElementSibling;
            for (; r;) {
                if (r.matches(t)) return [r];
                r = r.previousElementSibling
            }
            return []
        },
        next(e, t) {
            let r = e.nextElementSibling;
            for (; r;) {
                if (r.matches(t)) return [r];
                r = r.nextElementSibling
            }
            return []
        },
        focusableChildren(e) {
            const t = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map(r => `${r}:not([tabindex^="-"])`).join(",");
            return this.find(t, e).filter(r => !Bn(r) && li(r))
        },
        getSelectorFromElement(e) {
            const t = el(e);
            return t && U.findOne(t) ? t : null
        },
        getElementFromSelector(e) {
            const t = el(e);
            return t ? U.findOne(t) : null
        },
        getMultipleElementsFromSelector(e) {
            const t = el(e);
            return t ? U.find(t) : []
        }
    },
    Qs = (e, t = "hide") => {
        const r = `click.dismiss${e.EVENT_KEY}`,
            a = e.NAME;
        M.on(document, r, `[data-bs-dismiss="${a}"]`, function(o) {
            if (["A", "AREA"].includes(this.tagName) && o.preventDefault(), Bn(this)) return;
            const c = U.getElementFromSelector(this) || this.closest(`.${a}`);
            e.getOrCreateInstance(c)[t]()
        })
    },
    i9 = "alert",
    a9 = "bs.alert",
    Z0 = `.${a9}`,
    s9 = `close${Z0}`,
    o9 = `closed${Z0}`,
    c9 = "fade",
    l9 = "show";
class to extends Pe {
    static get NAME() {
        return i9
    }
    close() {
        if (M.trigger(this._element, s9).defaultPrevented) return;
        this._element.classList.remove(l9);
        const r = this._element.classList.contains(c9);
        this._queueCallback(() => this._destroyElement(), this._element, r)
    }
    _destroyElement() {
        this._element.remove(), M.trigger(this._element, o9), this.dispose()
    }
    static jQueryInterface(t) {
        return this.each(function() {
            const r = to.getOrCreateInstance(this);
            if (typeof t == "string") {
                if (r[t] === void 0 || t.startsWith("_") || t === "constructor") throw new TypeError(`No method named "${t}"`);
                r[t](this)
            }
        })
    }
}
Qs(to, "close");
Se(to);
const u9 = "button",
    f9 = "bs.button",
    d9 = `.${f9}`,
    h9 = ".data-api",
    p9 = "active",
    ed = '[data-bs-toggle="button"]',
    m9 = `click${d9}${h9}`;
class eo extends Pe {
    static get NAME() {
        return u9
    }
    toggle() {
        this._element.setAttribute("aria-pressed", this._element.classList.toggle(p9))
    }
    static jQueryInterface(t) {
        return this.each(function() {
            const r = eo.getOrCreateInstance(this);
            t === "toggle" && r[t]()
        })
    }
}
M.on(document, m9, ed, e => {
    e.preventDefault();
    const t = e.target.closest(ed);
    eo.getOrCreateInstance(t).toggle()
});
Se(eo);
const g9 = "swipe",
    ui = ".bs.swipe",
    v9 = `touchstart${ui}`,
    _9 = `touchmove${ui}`,
    b9 = `touchend${ui}`,
    y9 = `pointerdown${ui}`,
    E9 = `pointerup${ui}`,
    w9 = "touch",
    A9 = "pen",
    x9 = "pointer-event",
    C9 = 40,
    T9 = {
        endCallback: null,
        leftCallback: null,
        rightCallback: null
    },
    S9 = {
        endCallback: "(function|null)",
        leftCallback: "(function|null)",
        rightCallback: "(function|null)"
    };
class zs extends sa {
    constructor(t, r) {
        super(), this._element = t, !(!t || !zs.isSupported()) && (this._config = this._getConfig(r), this._deltaX = 0, this._supportPointerEvents = Boolean(window.PointerEvent), this._initEvents())
    }
    static get Default() {
        return T9
    }
    static get DefaultType() {
        return S9
    }
    static get NAME() {
        return g9
    }
    dispose() {
        M.off(this._element, ui)
    }
    _start(t) {
        if (!this._supportPointerEvents) {
            this._deltaX = t.touches[0].clientX;
            return
        }
        this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX)
    }
    _end(t) {
        this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX - this._deltaX), this._handleSwipe(), Zt(this._config.endCallback)
    }
    _move(t) {
        this._deltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - this._deltaX
    }
    _handleSwipe() {
        const t = Math.abs(this._deltaX);
        if (t <= C9) return;
        const r = t / this._deltaX;
        this._deltaX = 0, r && Zt(r > 0 ? this._config.rightCallback : this._config.leftCallback)
    }
    _initEvents() {
        this._supportPointerEvents ? (M.on(this._element, y9, t => this._start(t)), M.on(this._element, E9, t => this._end(t)), this._element.classList.add(x9)) : (M.on(this._element, v9, t => this._start(t)), M.on(this._element, _9, t => this._move(t)), M.on(this._element, b9, t => this._end(t)))
    }
    _eventIsPointerPenTouch(t) {
        return this._supportPointerEvents && (t.pointerType === A9 || t.pointerType === w9)
    }
    static isSupported() {
        return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0
    }
}
const O9 = "carousel",
    G9 = "bs.carousel",
    jn = `.${G9}`,
    Q0 = ".data-api",
    N9 = "ArrowLeft",
    L9 = "ArrowRight",
    I9 = 500,
    Ri = "next",
    Fr = "prev",
    Ur = "left",
    Os = "right",
    M9 = `slide${jn}`,
    nl = `slid${jn}`,
    P9 = `keydown${jn}`,
    R9 = `mouseenter${jn}`,
    D9 = `mouseleave${jn}`,
    k9 = `dragstart${jn}`,
    B9 = `load${jn}${Q0}`,
    $9 = `click${jn}${Q0}`,
    th = "carousel",
    fs = "active",
    z9 = "slide",
    H9 = "carousel-item-end",
    F9 = "carousel-item-start",
    V9 = "carousel-item-next",
    W9 = "carousel-item-prev",
    eh = ".active",
    nh = ".carousel-item",
    U9 = eh + nh,
    Y9 = ".carousel-item img",
    K9 = ".carousel-indicators",
    j9 = "[data-bs-slide], [data-bs-slide-to]",
    q9 = '[data-bs-ride="carousel"]',
    X9 = {
        [N9]: Os,
        [L9]: Ur
    },
    J9 = {
        interval: 5e3,
        keyboard: !0,
        pause: "hover",
        ride: !1,
        touch: !0,
        wrap: !0
    },
    Z9 = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        pause: "(string|boolean)",
        ride: "(boolean|string)",
        touch: "boolean",
        wrap: "boolean"
    };
class oa extends Pe {
    constructor(t, r) {
        super(t, r), this._interval = null, this._activeElement = null, this._isSliding = !1, this.touchTimeout = null, this._swipeHelper = null, this._indicatorsElement = U.findOne(K9, this._element), this._addEventListeners(), this._config.ride === th && this.cycle()
    }
    static get Default() {
        return J9
    }
    static get DefaultType() {
        return Z9
    }
    static get NAME() {
        return O9
    }
    next() {
        this._slide(Ri)
    }
    nextWhenVisible() {
        !document.hidden && li(this._element) && this.next()
    }
    prev() {
        this._slide(Fr)
    }
    pause() {
        this._isSliding && F0(this._element), this._clearInterval()
    }
    cycle() {
        this._clearInterval(), this._updateInterval(), this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval)
    }
    _maybeEnableCycle() {
        if (!!this._config.ride) {
            if (this._isSliding) {
                M.one(this._element, nl, () => this.cycle());
                return
            }
            this.cycle()
        }
    }
    to(t) {
        const r = this._getItems();
        if (t > r.length - 1 || t < 0) return;
        if (this._isSliding) {
            M.one(this._element, nl, () => this.to(t));
            return
        }
        const a = this._getItemIndex(this._getActive());
        if (a === t) return;
        const o = t > a ? Ri : Fr;
        this._slide(o, r[t])
    }
    dispose() {
        this._swipeHelper && this._swipeHelper.dispose(), super.dispose()
    }
    _configAfterMerge(t) {
        return t.defaultInterval = t.interval, t
    }
    _addEventListeners() {
        this._config.keyboard && M.on(this._element, P9, t => this._keydown(t)), this._config.pause === "hover" && (M.on(this._element, R9, () => this.pause()), M.on(this._element, D9, () => this._maybeEnableCycle())), this._config.touch && zs.isSupported() && this._addTouchEventListeners()
    }
    _addTouchEventListeners() {
        for (const a of U.find(Y9, this._element)) M.on(a, k9, o => o.preventDefault());
        const r = {
            leftCallback: () => this._slide(this._directionToOrder(Ur)),
            rightCallback: () => this._slide(this._directionToOrder(Os)),
            endCallback: () => {
                this._config.pause === "hover" && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), I9 + this._config.interval))
            }
        };
        this._swipeHelper = new zs(this._element, r)
    }
    _keydown(t) {
        if (/input|textarea/i.test(t.target.tagName)) return;
        const r = X9[t.key];
        r && (t.preventDefault(), this._slide(this._directionToOrder(r)))
    }
    _getItemIndex(t) {
        return this._getItems().indexOf(t)
    }
    _setActiveIndicatorElement(t) {
        if (!this._indicatorsElement) return;
        const r = U.findOne(eh, this._indicatorsElement);
        r.classList.remove(fs), r.removeAttribute("aria-current");
        const a = U.findOne(`[data-bs-slide-to="${t}"]`, this._indicatorsElement);
        a && (a.classList.add(fs), a.setAttribute("aria-current", "true"))
    }
    _updateInterval() {
        const t = this._activeElement || this._getActive();
        if (!t) return;
        const r = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
        this._config.interval = r || this._config.defaultInterval
    }
    _slide(t, r = null) {
        if (this._isSliding) return;
        const a = this._getActive(),
            o = t === Ri,
            c = r || xu(this._getItems(), a, o, this._config.wrap);
        if (c === a) return;
        const l = this._getItemIndex(c),
            f = C => M.trigger(this._element, C, {
                relatedTarget: c,
                direction: this._orderToDirection(t),
                from: this._getItemIndex(a),
                to: l
            });
        if (f(M9).defaultPrevented || !a || !c) return;
        const g = Boolean(this._interval);
        this.pause(), this._isSliding = !0, this._setActiveIndicatorElement(l), this._activeElement = c;
        const v = o ? F9 : H9,
            y = o ? V9 : W9;
        c.classList.add(y), aa(c), a.classList.add(v), c.classList.add(v);
        const x = () => {
            c.classList.remove(v, y), c.classList.add(fs), a.classList.remove(fs, y, v), this._isSliding = !1, f(nl)
        };
        this._queueCallback(x, a, this._isAnimated()), g && this.cycle()
    }
    _isAnimated() {
        return this._element.classList.contains(z9)
    }
    _getActive() {
        return U.findOne(U9, this._element)
    }
    _getItems() {
        return U.find(nh, this._element)
    }
    _clearInterval() {
        this._interval && (clearInterval(this._interval), this._interval = null)
    }
    _directionToOrder(t) {
        return Ce() ? t === Ur ? Fr : Ri : t === Ur ? Ri : Fr
    }
    _orderToDirection(t) {
        return Ce() ? t === Fr ? Ur : Os : t === Fr ? Os : Ur
    }
    static jQueryInterface(t) {
        return this.each(function() {
            const r = oa.getOrCreateInstance(this, t);
            if (typeof t == "number") {
                r.to(t);
                return
            }
            if (typeof t == "string") {
                if (r[t] === void 0 || t.startsWith("_") || t === "constructor") throw new TypeError(`No method named "${t}"`);
                r[t]()
            }
        })
    }
}
M.on(document, $9, j9, function(e) {
    const t = U.getElementFromSelector(this);
    if (!t || !t.classList.contains(th)) return;
    e.preventDefault();
    const r = oa.getOrCreateInstance(t),
        a = this.getAttribute("data-bs-slide-to");
    if (a) {
        r.to(a), r._maybeEnableCycle();
        return
    }
    if (fn.getDataAttribute(this, "slide") === "next") {
        r.next(), r._maybeEnableCycle();
        return
    }
    r.prev(), r._maybeEnableCycle()
});
M.on(window, B9, () => {
    const e = U.find(q9);
    for (const t of e) oa.getOrCreateInstance(t)
});
Se(oa);
const Q9 = "collapse",
    t7 = "bs.collapse",
    ca = `.${t7}`,
    e7 = ".data-api",
    n7 = `show${ca}`,
    r7 = `shown${ca}`,
    i7 = `hide${ca}`,
    a7 = `hidden${ca}`,
    s7 = `click${ca}${e7}`,
    rl = "show",
    Kr = "collapse",
    ds = "collapsing",
    o7 = "collapsed",
    c7 = `:scope .${Kr} .${Kr}`,
    l7 = "collapse-horizontal",
    u7 = "width",
    f7 = "height",
    d7 = ".collapse.show, .collapse.collapsing",
    Nl = '[data-bs-toggle="collapse"]',
    h7 = {
        parent: null,
        toggle: !0
    },
    p7 = {
        parent: "(null|element)",
        toggle: "boolean"
    };
class qi extends Pe {
    constructor(t, r) {
        super(t, r), this._isTransitioning = !1, this._triggerArray = [];
        const a = U.find(Nl);
        for (const o of a) {
            const c = U.getSelectorFromElement(o),
                l = U.find(c).filter(f => f === this._element);
            c !== null && l.length && this._triggerArray.push(o)
        }
        this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle()
    }
    static get Default() {
        return h7
    }
    static get DefaultType() {
        return p7
    }
    static get NAME() {
        return Q9
    }
    toggle() {
        this._isShown() ? this.hide() : this.show()
    }
    show() {
        if (this._isTransitioning || this._isShown()) return;
        let t = [];
        if (this._config.parent && (t = this._getFirstLevelChildren(d7).filter(f => f !== this._element).map(f => qi.getOrCreateInstance(f, {
                toggle: !1
            }))), t.length && t[0]._isTransitioning || M.trigger(this._element, n7).defaultPrevented) return;
        for (const f of t) f.hide();
        const a = this._getDimension();
        this._element.classList.remove(Kr), this._element.classList.add(ds), this._element.style[a] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
        const o = () => {
                this._isTransitioning = !1, this._element.classList.remove(ds), this._element.classList.add(Kr, rl), this._element.style[a] = "", M.trigger(this._element, r7)
            },
            l = `scroll${a[0].toUpperCase()+a.slice(1)}`;
        this._queueCallback(o, this._element, !0), this._element.style[a] = `${this._element[l]}px`
    }
    hide() {
        if (this._isTransitioning || !this._isShown() || M.trigger(this._element, i7).defaultPrevented) return;
        const r = this._getDimension();
        this._element.style[r] = `${this._element.getBoundingClientRect()[r]}px`, aa(this._element), this._element.classList.add(ds), this._element.classList.remove(Kr, rl);
        for (const o of this._triggerArray) {
            const c = U.getElementFromSelector(o);
            c && !this._isShown(c) && this._addAriaAndCollapsedClass([o], !1)
        }
        this._isTransitioning = !0;
        const a = () => {
            this._isTransitioning = !1, this._element.classList.remove(ds), this._element.classList.add(Kr), M.trigger(this._element, a7)
        };
        this._element.style[r] = "", this._queueCallback(a, this._element, !0)
    }
    _isShown(t = this._element) {
        return t.classList.contains(rl)
    }
    _configAfterMerge(t) {
        return t.toggle = Boolean(t.toggle), t.parent = kn(t.parent), t
    }
    _getDimension() {
        return this._element.classList.contains(l7) ? u7 : f7
    }
    _initializeChildren() {
        if (!this._config.parent) return;
        const t = this._getFirstLevelChildren(Nl);
        for (const r of t) {
            const a = U.getElementFromSelector(r);
            a && this._addAriaAndCollapsedClass([r], this._isShown(a))
        }
    }
    _getFirstLevelChildren(t) {
        const r = U.find(c7, this._config.parent);
        return U.find(t, this._config.parent).filter(a => !r.includes(a))
    }
    _addAriaAndCollapsedClass(t, r) {
        if (!!t.length)
            for (const a of t) a.classList.toggle(o7, !r), a.setAttribute("aria-expanded", r)
    }
    static jQueryInterface(t) {
        const r = {};
        return typeof t == "string" && /show|hide/.test(t) && (r.toggle = !1), this.each(function() {
            const a = qi.getOrCreateInstance(this, r);
            if (typeof t == "string") {
                if (typeof a[t] > "u") throw new TypeError(`No method named "${t}"`);
                a[t]()
            }
        })
    }
}
M.on(document, s7, Nl, function(e) {
    (e.target.tagName === "A" || e.delegateTarget && e.delegateTarget.tagName === "A") && e.preventDefault();
    for (const t of U.getMultipleElementsFromSelector(this)) qi.getOrCreateInstance(t, {
        toggle: !1
    }).toggle()
});
Se(qi);
const nd = "dropdown",
    m7 = "bs.dropdown",
    Ar = `.${m7}`,
    Tu = ".data-api",
    g7 = "Escape",
    rd = "Tab",
    v7 = "ArrowUp",
    id = "ArrowDown",
    _7 = 2,
    b7 = `hide${Ar}`,
    y7 = `hidden${Ar}`,
    E7 = `show${Ar}`,
    w7 = `shown${Ar}`,
    rh = `click${Ar}${Tu}`,
    ih = `keydown${Ar}${Tu}`,
    A7 = `keyup${Ar}${Tu}`,
    Yr = "show",
    x7 = "dropup",
    C7 = "dropend",
    T7 = "dropstart",
    S7 = "dropup-center",
    O7 = "dropdown-center",
    lr = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
    G7 = `${lr}.${Yr}`,
    Gs = ".dropdown-menu",
    N7 = ".navbar",
    L7 = ".navbar-nav",
    I7 = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
    M7 = Ce() ? "top-end" : "top-start",
    P7 = Ce() ? "top-start" : "top-end",
    R7 = Ce() ? "bottom-end" : "bottom-start",
    D7 = Ce() ? "bottom-start" : "bottom-end",
    k7 = Ce() ? "left-start" : "right-start",
    B7 = Ce() ? "right-start" : "left-start",
    $7 = "top",
    z7 = "bottom",
    H7 = {
        autoClose: !0,
        boundary: "clippingParents",
        display: "dynamic",
        offset: [0, 2],
        popperConfig: null,
        reference: "toggle"
    },
    F7 = {
        autoClose: "(boolean|string)",
        boundary: "(string|element)",
        display: "string",
        offset: "(array|string|function)",
        popperConfig: "(null|object|function)",
        reference: "(string|element|object)"
    };
class Ye extends Pe {
    constructor(t, r) {
        super(t, r), this._popper = null, this._parent = this._element.parentNode, this._menu = U.next(this._element, Gs)[0] || U.prev(this._element, Gs)[0] || U.findOne(Gs, this._parent), this._inNavbar = this._detectNavbar()
    }
    static get Default() {
        return H7
    }
    static get DefaultType() {
        return F7
    }
    static get NAME() {
        return nd
    }
    toggle() {
        return this._isShown() ? this.hide() : this.show()
    }
    show() {
        if (Bn(this._element) || this._isShown()) return;
        const t = {
            relatedTarget: this._element
        };
        if (!M.trigger(this._element, E7, t).defaultPrevented) {
            if (this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(L7))
                for (const a of [].concat(...document.body.children)) M.on(a, "mouseover", $s);
            this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add(Yr), this._element.classList.add(Yr), M.trigger(this._element, w7, t)
        }
    }
    hide() {
        if (Bn(this._element) || !this._isShown()) return;
        const t = {
            relatedTarget: this._element
        };
        this._completeHide(t)
    }
    dispose() {
        this._popper && this._popper.destroy(), super.dispose()
    }
    update() {
        this._inNavbar = this._detectNavbar(), this._popper && this._popper.update()
    }
    _completeHide(t) {
        if (!M.trigger(this._element, b7, t).defaultPrevented) {
            if ("ontouchstart" in document.documentElement)
                for (const a of [].concat(...document.body.children)) M.off(a, "mouseover", $s);
            this._popper && this._popper.destroy(), this._menu.classList.remove(Yr), this._element.classList.remove(Yr), this._element.setAttribute("aria-expanded", "false"), fn.removeDataAttribute(this._menu, "popper"), M.trigger(this._element, y7, t)
        }
    }
    _getConfig(t) {
        if (t = super._getConfig(t), typeof t.reference == "object" && !un(t.reference) && typeof t.reference.getBoundingClientRect != "function") throw new TypeError(`${nd.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
        return t
    }
    _createPopper() {
        if (typeof Au > "u") throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
        let t = this._element;
        this._config.reference === "parent" ? t = this._parent : un(this._config.reference) ? t = kn(this._config.reference) : typeof this._config.reference == "object" && (t = this._config.reference);
        const r = this._getPopperConfig();
        this._popper = wu(t, this._menu, r)
    }
    _isShown() {
        return this._menu.classList.contains(Yr)
    }
    _getPlacement() {
        const t = this._parent;
        if (t.classList.contains(C7)) return k7;
        if (t.classList.contains(T7)) return B7;
        if (t.classList.contains(S7)) return $7;
        if (t.classList.contains(O7)) return z7;
        const r = getComputedStyle(this._menu).getPropertyValue("--bs-position").trim() === "end";
        return t.classList.contains(x7) ? r ? P7 : M7 : r ? D7 : R7
    }
    _detectNavbar() {
        return this._element.closest(N7) !== null
    }
    _getOffset() {
        const {
            offset: t
        } = this._config;
        return typeof t == "string" ? t.split(",").map(r => Number.parseInt(r, 10)) : typeof t == "function" ? r => t(r, this._element) : t
    }
    _getPopperConfig() {
        const t = {
            placement: this._getPlacement(),
            modifiers: [{
                name: "preventOverflow",
                options: {
                    boundary: this._config.boundary
                }
            }, {
                name: "offset",
                options: {
                    offset: this._getOffset()
                }
            }]
        };
        return (this._inNavbar || this._config.display === "static") && (fn.setDataAttribute(this._menu, "popper", "static"), t.modifiers = [{
            name: "applyStyles",
            enabled: !1
        }]), { ...t,
            ...Zt(this._config.popperConfig, [t])
        }
    }
    _selectMenuItem({
        key: t,
        target: r
    }) {
        const a = U.find(I7, this._menu).filter(o => li(o));
        !a.length || xu(a, r, t === id, !a.includes(r)).focus()
    }
    static jQueryInterface(t) {
        return this.each(function() {
            const r = Ye.getOrCreateInstance(this, t);
            if (typeof t == "string") {
                if (typeof r[t] > "u") throw new TypeError(`No method named "${t}"`);
                r[t]()
            }
        })
    }
    static clearMenus(t) {
        if (t.button === _7 || t.type === "keyup" && t.key !== rd) return;
        const r = U.find(G7);
        for (const a of r) {
            const o = Ye.getInstance(a);
            if (!o || o._config.autoClose === !1) continue;
            const c = t.composedPath(),
                l = c.includes(o._menu);
            if (c.includes(o._element) || o._config.autoClose === "inside" && !l || o._config.autoClose === "outside" && l || o._menu.contains(t.target) && (t.type === "keyup" && t.key === rd || /input|select|option|textarea|form/i.test(t.target.tagName))) continue;
            const f = {
                relatedTarget: o._element
            };
            t.type === "click" && (f.clickEvent = t), o._completeHide(f)
        }
    }
    static dataApiKeydownHandler(t) {
        const r = /input|textarea/i.test(t.target.tagName),
            a = t.key === g7,
            o = [v7, id].includes(t.key);
        if (!o && !a || r && !a) return;
        t.preventDefault();
        const c = this.matches(lr) ? this : U.prev(this, lr)[0] || U.next(this, lr)[0] || U.findOne(lr, t.delegateTarget.parentNode),
            l = Ye.getOrCreateInstance(c);
        if (o) {
            t.stopPropagation(), l.show(), l._selectMenuItem(t);
            return
        }
        l._isShown() && (t.stopPropagation(), l.hide(), c.focus())
    }
}
M.on(document, ih, lr, Ye.dataApiKeydownHandler);
M.on(document, ih, Gs, Ye.dataApiKeydownHandler);
M.on(document, rh, Ye.clearMenus);
M.on(document, A7, Ye.clearMenus);
M.on(document, rh, lr, function(e) {
    e.preventDefault(), Ye.getOrCreateInstance(this).toggle()
});
Se(Ye);
const ah = "backdrop",
    V7 = "fade",
    ad = "show",
    sd = `mousedown.bs.${ah}`,
    W7 = {
        className: "modal-backdrop",
        clickCallback: null,
        isAnimated: !1,
        isVisible: !0,
        rootElement: "body"
    },
    U7 = {
        className: "string",
        clickCallback: "(function|null)",
        isAnimated: "boolean",
        isVisible: "boolean",
        rootElement: "(element|string)"
    };
class sh extends sa {
    constructor(t) {
        super(), this._config = this._getConfig(t), this._isAppended = !1, this._element = null
    }
    static get Default() {
        return W7
    }
    static get DefaultType() {
        return U7
    }
    static get NAME() {
        return ah
    }
    show(t) {
        if (!this._config.isVisible) {
            Zt(t);
            return
        }
        this._append();
        const r = this._getElement();
        this._config.isAnimated && aa(r), r.classList.add(ad), this._emulateAnimation(() => {
            Zt(t)
        })
    }
    hide(t) {
        if (!this._config.isVisible) {
            Zt(t);
            return
        }
        this._getElement().classList.remove(ad), this._emulateAnimation(() => {
            this.dispose(), Zt(t)
        })
    }
    dispose() {
        !this._isAppended || (M.off(this._element, sd), this._element.remove(), this._isAppended = !1)
    }
    _getElement() {
        if (!this._element) {
            const t = document.createElement("div");
            t.className = this._config.className, this._config.isAnimated && t.classList.add(V7), this._element = t
        }
        return this._element
    }
    _configAfterMerge(t) {
        return t.rootElement = kn(t.rootElement), t
    }
    _append() {
        if (this._isAppended) return;
        const t = this._getElement();
        this._config.rootElement.append(t), M.on(t, sd, () => {
            Zt(this._config.clickCallback)
        }), this._isAppended = !0
    }
    _emulateAnimation(t) {
        U0(t, this._getElement(), this._config.isAnimated)
    }
}
const Y7 = "focustrap",
    K7 = "bs.focustrap",
    Hs = `.${K7}`,
    j7 = `focusin${Hs}`,
    q7 = `keydown.tab${Hs}`,
    X7 = "Tab",
    J7 = "forward",
    od = "backward",
    Z7 = {
        autofocus: !0,
        trapElement: null
    },
    Q7 = {
        autofocus: "boolean",
        trapElement: "element"
    };
class oh extends sa {
    constructor(t) {
        super(), this._config = this._getConfig(t), this._isActive = !1, this._lastTabNavDirection = null
    }
    static get Default() {
        return Z7
    }
    static get DefaultType() {
        return Q7
    }
    static get NAME() {
        return Y7
    }
    activate() {
        this._isActive || (this._config.autofocus && this._config.trapElement.focus(), M.off(document, Hs), M.on(document, j7, t => this._handleFocusin(t)), M.on(document, q7, t => this._handleKeydown(t)), this._isActive = !0)
    }
    deactivate() {
        !this._isActive || (this._isActive = !1, M.off(document, Hs))
    }
    _handleFocusin(t) {
        const {
            trapElement: r
        } = this._config;
        if (t.target === document || t.target === r || r.contains(t.target)) return;
        const a = U.focusableChildren(r);
        a.length === 0 ? r.focus() : this._lastTabNavDirection === od ? a[a.length - 1].focus() : a[0].focus()
    }
    _handleKeydown(t) {
        t.key === X7 && (this._lastTabNavDirection = t.shiftKey ? od : J7)
    }
}
const cd = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
    ld = ".sticky-top",
    hs = "padding-right",
    ud = "margin-right";
class Ll {
    constructor() {
        this._element = document.body
    }
    getWidth() {
        const t = document.documentElement.clientWidth;
        return Math.abs(window.innerWidth - t)
    }
    hide() {
        const t = this.getWidth();
        this._disableOverFlow(), this._setElementAttributes(this._element, hs, r => r + t), this._setElementAttributes(cd, hs, r => r + t), this._setElementAttributes(ld, ud, r => r - t)
    }
    reset() {
        this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, hs), this._resetElementAttributes(cd, hs), this._resetElementAttributes(ld, ud)
    }
    isOverflowing() {
        return this.getWidth() > 0
    }
    _disableOverFlow() {
        this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden"
    }
    _setElementAttributes(t, r, a) {
        const o = this.getWidth(),
            c = l => {
                if (l !== this._element && window.innerWidth > l.clientWidth + o) return;
                this._saveInitialAttribute(l, r);
                const f = window.getComputedStyle(l).getPropertyValue(r);
                l.style.setProperty(r, `${a(Number.parseFloat(f))}px`)
            };
        this._applyManipulationCallback(t, c)
    }
    _saveInitialAttribute(t, r) {
        const a = t.style.getPropertyValue(r);
        a && fn.setDataAttribute(t, r, a)
    }
    _resetElementAttributes(t, r) {
        const a = o => {
            const c = fn.getDataAttribute(o, r);
            if (c === null) {
                o.style.removeProperty(r);
                return
            }
            fn.removeDataAttribute(o, r), o.style.setProperty(r, c)
        };
        this._applyManipulationCallback(t, a)
    }
    _applyManipulationCallback(t, r) {
        if (un(t)) {
            r(t);
            return
        }
        for (const a of U.find(t, this._element)) r(a)
    }
}
const tb = "modal",
    eb = "bs.modal",
    Te = `.${eb}`,
    nb = ".data-api",
    rb = "Escape",
    ib = `hide${Te}`,
    ab = `hidePrevented${Te}`,
    ch = `hidden${Te}`,
    lh = `show${Te}`,
    sb = `shown${Te}`,
    ob = `resize${Te}`,
    cb = `click.dismiss${Te}`,
    lb = `mousedown.dismiss${Te}`,
    ub = `keydown.dismiss${Te}`,
    fb = `click${Te}${nb}`,
    fd = "modal-open",
    db = "fade",
    dd = "show",
    il = "modal-static",
    hb = ".modal.show",
    pb = ".modal-dialog",
    mb = ".modal-body",
    gb = '[data-bs-toggle="modal"]',
    vb = {
        backdrop: !0,
        focus: !0,
        keyboard: !0
    },
    _b = {
        backdrop: "(boolean|string)",
        focus: "boolean",
        keyboard: "boolean"
    };
class ni extends Pe {
    constructor(t, r) {
        super(t, r), this._dialog = U.findOne(pb, this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = !1, this._isTransitioning = !1, this._scrollBar = new Ll, this._addEventListeners()
    }
    static get Default() {
        return vb
    }
    static get DefaultType() {
        return _b
    }
    static get NAME() {
        return tb
    }
    toggle(t) {
        return this._isShown ? this.hide() : this.show(t)
    }
    show(t) {
        this._isShown || this._isTransitioning || M.trigger(this._element, lh, {
            relatedTarget: t
        }).defaultPrevented || (this._isShown = !0, this._isTransitioning = !0, this._scrollBar.hide(), document.body.classList.add(fd), this._adjustDialog(), this._backdrop.show(() => this._showElement(t)))
    }
    hide() {
        !this._isShown || this._isTransitioning || M.trigger(this._element, ib).defaultPrevented || (this._isShown = !1, this._isTransitioning = !0, this._focustrap.deactivate(), this._element.classList.remove(dd), this._queueCallback(() => this._hideModal(), this._element, this._isAnimated()))
    }
    dispose() {
        M.off(window, Te), M.off(this._dialog, Te), this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose()
    }
    handleUpdate() {
        this._adjustDialog()
    }
    _initializeBackDrop() {
        return new sh({
            isVisible: Boolean(this._config.backdrop),
            isAnimated: this._isAnimated()
        })
    }
    _initializeFocusTrap() {
        return new oh({
            trapElement: this._element
        })
    }
    _showElement(t) {
        document.body.contains(this._element) || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0;
        const r = U.findOne(mb, this._dialog);
        r && (r.scrollTop = 0), aa(this._element), this._element.classList.add(dd);
        const a = () => {
            this._config.focus && this._focustrap.activate(), this._isTransitioning = !1, M.trigger(this._element, sb, {
                relatedTarget: t
            })
        };
        this._queueCallback(a, this._dialog, this._isAnimated())
    }
    _addEventListeners() {
        M.on(this._element, ub, t => {
            if (t.key === rb) {
                if (this._config.keyboard) {
                    this.hide();
                    return
                }
                this._triggerBackdropTransition()
            }
        }), M.on(window, ob, () => {
            this._isShown && !this._isTransitioning && this._adjustDialog()
        }), M.on(this._element, lb, t => {
            M.one(this._element, cb, r => {
                if (!(this._element !== t.target || this._element !== r.target)) {
                    if (this._config.backdrop === "static") {
                        this._triggerBackdropTransition();
                        return
                    }
                    this._config.backdrop && this.hide()
                }
            })
        })
    }
    _hideModal() {
        this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide(() => {
            document.body.classList.remove(fd), this._resetAdjustments(), this._scrollBar.reset(), M.trigger(this._element, ch)
        })
    }
    _isAnimated() {
        return this._element.classList.contains(db)
    }
    _triggerBackdropTransition() {
        if (M.trigger(this._element, ab).defaultPrevented) return;
        const r = this._element.scrollHeight > document.documentElement.clientHeight,
            a = this._element.style.overflowY;
        a === "hidden" || this._element.classList.contains(il) || (r || (this._element.style.overflowY = "hidden"), this._element.classList.add(il), this._queueCallback(() => {
            this._element.classList.remove(il), this._queueCallback(() => {
                this._element.style.overflowY = a
            }, this._dialog)
        }, this._dialog), this._element.focus())
    }
    _adjustDialog() {
        const t = this._element.scrollHeight > document.documentElement.clientHeight,
            r = this._scrollBar.getWidth(),
            a = r > 0;
        if (a && !t) {
            const o = Ce() ? "paddingLeft" : "paddingRight";
            this._element.style[o] = `${r}px`
        }
        if (!a && t) {
            const o = Ce() ? "paddingRight" : "paddingLeft";
            this._element.style[o] = `${r}px`
        }
    }
    _resetAdjustments() {
        this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
    }
    static jQueryInterface(t, r) {
        return this.each(function() {
            const a = ni.getOrCreateInstance(this, t);
            if (typeof t == "string") {
                if (typeof a[t] > "u") throw new TypeError(`No method named "${t}"`);
                a[t](r)
            }
        })
    }
}
M.on(document, fb, gb, function(e) {
    const t = U.getElementFromSelector(this);
    ["A", "AREA"].includes(this.tagName) && e.preventDefault(), M.one(t, lh, o => {
        o.defaultPrevented || M.one(t, ch, () => {
            li(this) && this.focus()
        })
    });
    const r = U.findOne(hb);
    r && ni.getInstance(r).hide(), ni.getOrCreateInstance(t).toggle(this)
});
Qs(ni);
Se(ni);
const bb = "offcanvas",
    yb = "bs.offcanvas",
    vn = `.${yb}`,
    uh = ".data-api",
    Eb = `load${vn}${uh}`,
    wb = "Escape",
    hd = "show",
    pd = "showing",
    md = "hiding",
    Ab = "offcanvas-backdrop",
    fh = ".offcanvas.show",
    xb = `show${vn}`,
    Cb = `shown${vn}`,
    Tb = `hide${vn}`,
    gd = `hidePrevented${vn}`,
    dh = `hidden${vn}`,
    Sb = `resize${vn}`,
    Ob = `click${vn}${uh}`,
    Gb = `keydown.dismiss${vn}`,
    Nb = '[data-bs-toggle="offcanvas"]',
    Lb = {
        backdrop: !0,
        keyboard: !0,
        scroll: !1
    },
    Ib = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        scroll: "boolean"
    };
class $n extends Pe {
    constructor(t, r) {
        super(t, r), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners()
    }
    static get Default() {
        return Lb
    }
    static get DefaultType() {
        return Ib
    }
    static get NAME() {
        return bb
    }
    toggle(t) {
        return this._isShown ? this.hide() : this.show(t)
    }
    show(t) {
        if (this._isShown || M.trigger(this._element, xb, {
                relatedTarget: t
            }).defaultPrevented) return;
        this._isShown = !0, this._backdrop.show(), this._config.scroll || new Ll().hide(), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add(pd);
        const a = () => {
            (!this._config.scroll || this._config.backdrop) && this._focustrap.activate(), this._element.classList.add(hd), this._element.classList.remove(pd), M.trigger(this._element, Cb, {
                relatedTarget: t
            })
        };
        this._queueCallback(a, this._element, !0)
    }
    hide() {
        if (!this._isShown || M.trigger(this._element, Tb).defaultPrevented) return;
        this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.add(md), this._backdrop.hide();
        const r = () => {
            this._element.classList.remove(hd, md), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._config.scroll || new Ll().reset(), M.trigger(this._element, dh)
        };
        this._queueCallback(r, this._element, !0)
    }
    dispose() {
        this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose()
    }
    _initializeBackDrop() {
        const t = () => {
                if (this._config.backdrop === "static") {
                    M.trigger(this._element, gd);
                    return
                }
                this.hide()
            },
            r = Boolean(this._config.backdrop);
        return new sh({
            className: Ab,
            isVisible: r,
            isAnimated: !0,
            rootElement: this._element.parentNode,
            clickCallback: r ? t : null
        })
    }
    _initializeFocusTrap() {
        return new oh({
            trapElement: this._element
        })
    }
    _addEventListeners() {
        M.on(this._element, Gb, t => {
            if (t.key === wb) {
                if (this._config.keyboard) {
                    this.hide();
                    return
                }
                M.trigger(this._element, gd)
            }
        })
    }
    static jQueryInterface(t) {
        return this.each(function() {
            const r = $n.getOrCreateInstance(this, t);
            if (typeof t == "string") {
                if (r[t] === void 0 || t.startsWith("_") || t === "constructor") throw new TypeError(`No method named "${t}"`);
                r[t](this)
            }
        })
    }
}
M.on(document, Ob, Nb, function(e) {
    const t = U.getElementFromSelector(this);
    if (["A", "AREA"].includes(this.tagName) && e.preventDefault(), Bn(this)) return;
    M.one(t, dh, () => {
        li(this) && this.focus()
    });
    const r = U.findOne(fh);
    r && r !== t && $n.getInstance(r).hide(), $n.getOrCreateInstance(t).toggle(this)
});
M.on(window, Eb, () => {
    for (const e of U.find(fh)) $n.getOrCreateInstance(e).show()
});
M.on(window, Sb, () => {
    for (const e of U.find("[aria-modal][class*=show][class*=offcanvas-]")) getComputedStyle(e).position !== "fixed" && $n.getOrCreateInstance(e).hide()
});
Qs($n);
Se($n);
const Mb = /^aria-[\w-]*$/i,
    hh = {
        "*": ["class", "dir", "id", "lang", "role", Mb],
        a: ["target", "href", "title", "rel"],
        area: [],
        b: [],
        br: [],
        col: [],
        code: [],
        div: [],
        em: [],
        hr: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        i: [],
        img: ["src", "srcset", "alt", "title", "width", "height"],
        li: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        small: [],
        span: [],
        sub: [],
        sup: [],
        strong: [],
        u: [],
        ul: []
    },
    Pb = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
    Rb = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,
    Db = (e, t) => {
        const r = e.nodeName.toLowerCase();
        return t.includes(r) ? Pb.has(r) ? Boolean(Rb.test(e.nodeValue)) : !0 : t.filter(a => a instanceof RegExp).some(a => a.test(r))
    };

function kb(e, t, r) {
    if (!e.length) return e;
    if (r && typeof r == "function") return r(e);
    const o = new window.DOMParser().parseFromString(e, "text/html"),
        c = [].concat(...o.body.querySelectorAll("*"));
    for (const l of c) {
        const f = l.nodeName.toLowerCase();
        if (!Object.keys(t).includes(f)) {
            l.remove();
            continue
        }
        const h = [].concat(...l.attributes),
            g = [].concat(t["*"] || [], t[f] || []);
        for (const v of h) Db(v, g) || l.removeAttribute(v.nodeName)
    }
    return o.body.innerHTML
}
const Bb = "TemplateFactory",
    $b = {
        allowList: hh,
        content: {},
        extraClass: "",
        html: !1,
        sanitize: !0,
        sanitizeFn: null,
        template: "<div></div>"
    },
    zb = {
        allowList: "object",
        content: "object",
        extraClass: "(string|function)",
        html: "boolean",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        template: "string"
    },
    Hb = {
        entry: "(string|element|function|null)",
        selector: "(string|element)"
    };
class Fb extends sa {
    constructor(t) {
        super(), this._config = this._getConfig(t)
    }
    static get Default() {
        return $b
    }
    static get DefaultType() {
        return zb
    }
    static get NAME() {
        return Bb
    }
    getContent() {
        return Object.values(this._config.content).map(t => this._resolvePossibleFunction(t)).filter(Boolean)
    }
    hasContent() {
        return this.getContent().length > 0
    }
    changeContent(t) {
        return this._checkContent(t), this._config.content = { ...this._config.content,
            ...t
        }, this
    }
    toHtml() {
        const t = document.createElement("div");
        t.innerHTML = this._maybeSanitize(this._config.template);
        for (const [o, c] of Object.entries(this._config.content)) this._setContent(t, c, o);
        const r = t.children[0],
            a = this._resolvePossibleFunction(this._config.extraClass);
        return a && r.classList.add(...a.split(" ")), r
    }
    _typeCheckConfig(t) {
        super._typeCheckConfig(t), this._checkContent(t.content)
    }
    _checkContent(t) {
        for (const [r, a] of Object.entries(t)) super._typeCheckConfig({
            selector: r,
            entry: a
        }, Hb)
    }
    _setContent(t, r, a) {
        const o = U.findOne(a, t);
        if (!!o) {
            if (r = this._resolvePossibleFunction(r), !r) {
                o.remove();
                return
            }
            if (un(r)) {
                this._putElementInTemplate(kn(r), o);
                return
            }
            if (this._config.html) {
                o.innerHTML = this._maybeSanitize(r);
                return
            }
            o.textContent = r
        }
    }
    _maybeSanitize(t) {
        return this._config.sanitize ? kb(t, this._config.allowList, this._config.sanitizeFn) : t
    }
    _resolvePossibleFunction(t) {
        return Zt(t, [this])
    }
    _putElementInTemplate(t, r) {
        if (this._config.html) {
            r.innerHTML = "", r.append(t);
            return
        }
        r.textContent = t.textContent
    }
}
const Vb = "tooltip",
    Wb = new Set(["sanitize", "allowList", "sanitizeFn"]),
    al = "fade",
    Ub = "modal",
    ps = "show",
    Yb = ".tooltip-inner",
    vd = `.${Ub}`,
    _d = "hide.bs.modal",
    Di = "hover",
    sl = "focus",
    Kb = "click",
    jb = "manual",
    qb = "hide",
    Xb = "hidden",
    Jb = "show",
    Zb = "shown",
    Qb = "inserted",
    ty = "click",
    ey = "focusin",
    ny = "focusout",
    ry = "mouseenter",
    iy = "mouseleave",
    ay = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: Ce() ? "left" : "right",
        BOTTOM: "bottom",
        LEFT: Ce() ? "right" : "left"
    },
    sy = {
        allowList: hh,
        animation: !0,
        boundary: "clippingParents",
        container: !1,
        customClass: "",
        delay: 0,
        fallbackPlacements: ["top", "right", "bottom", "left"],
        html: !1,
        offset: [0, 6],
        placement: "top",
        popperConfig: null,
        sanitize: !0,
        sanitizeFn: null,
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        title: "",
        trigger: "hover focus"
    },
    oy = {
        allowList: "object",
        animation: "boolean",
        boundary: "(string|element)",
        container: "(string|element|boolean)",
        customClass: "(string|function)",
        delay: "(number|object)",
        fallbackPlacements: "array",
        html: "boolean",
        offset: "(array|string|function)",
        placement: "(string|function)",
        popperConfig: "(null|object|function)",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        selector: "(string|boolean)",
        template: "string",
        title: "(string|element|function)",
        trigger: "string"
    };
class fi extends Pe {
    constructor(t, r) {
        if (typeof Au > "u") throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
        super(t, r), this._isEnabled = !0, this._timeout = 0, this._isHovered = null, this._activeTrigger = {}, this._popper = null, this._templateFactory = null, this._newContent = null, this.tip = null, this._setListeners(), this._config.selector || this._fixTitle()
    }
    static get Default() {
        return sy
    }
    static get DefaultType() {
        return oy
    }
    static get NAME() {
        return Vb
    }
    enable() {
        this._isEnabled = !0
    }
    disable() {
        this._isEnabled = !1
    }
    toggleEnabled() {
        this._isEnabled = !this._isEnabled
    }
    toggle() {
        if (!!this._isEnabled) {
            if (this._activeTrigger.click = !this._activeTrigger.click, this._isShown()) {
                this._leave();
                return
            }
            this._enter()
        }
    }
    dispose() {
        clearTimeout(this._timeout), M.off(this._element.closest(vd), _d, this._hideModalHandler), this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")), this._disposePopper(), super.dispose()
    }
    show() {
        if (this._element.style.display === "none") throw new Error("Please use show on visible elements");
        if (!(this._isWithContent() && this._isEnabled)) return;
        const t = M.trigger(this._element, this.constructor.eventName(Jb)),
            a = (V0(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
        if (t.defaultPrevented || !a) return;
        this._disposePopper();
        const o = this._getTipElement();
        this._element.setAttribute("aria-describedby", o.getAttribute("id"));
        const {
            container: c
        } = this._config;
        if (this._element.ownerDocument.documentElement.contains(this.tip) || (c.append(o), M.trigger(this._element, this.constructor.eventName(Qb))), this._popper = this._createPopper(o), o.classList.add(ps), "ontouchstart" in document.documentElement)
            for (const f of [].concat(...document.body.children)) M.on(f, "mouseover", $s);
        const l = () => {
            M.trigger(this._element, this.constructor.eventName(Zb)), this._isHovered === !1 && this._leave(), this._isHovered = !1
        };
        this._queueCallback(l, this.tip, this._isAnimated())
    }
    hide() {
        if (!this._isShown() || M.trigger(this._element, this.constructor.eventName(qb)).defaultPrevented) return;
        if (this._getTipElement().classList.remove(ps), "ontouchstart" in document.documentElement)
            for (const o of [].concat(...document.body.children)) M.off(o, "mouseover", $s);
        this._activeTrigger[Kb] = !1, this._activeTrigger[sl] = !1, this._activeTrigger[Di] = !1, this._isHovered = null;
        const a = () => {
            this._isWithActiveTrigger() || (this._isHovered || this._disposePopper(), this._element.removeAttribute("aria-describedby"), M.trigger(this._element, this.constructor.eventName(Xb)))
        };
        this._queueCallback(a, this.tip, this._isAnimated())
    }
    update() {
        this._popper && this._popper.update()
    }
    _isWithContent() {
        return Boolean(this._getTitle())
    }
    _getTipElement() {
        return this.tip || (this.tip = this._createTipElement(this._newContent || this._getContentForTemplate())), this.tip
    }
    _createTipElement(t) {
        const r = this._getTemplateFactory(t).toHtml();
        if (!r) return null;
        r.classList.remove(al, ps), r.classList.add(`bs-${this.constructor.NAME}-auto`);
        const a = K_(this.constructor.NAME).toString();
        return r.setAttribute("id", a), this._isAnimated() && r.classList.add(al), r
    }
    setContent(t) {
        this._newContent = t, this._isShown() && (this._disposePopper(), this.show())
    }
    _getTemplateFactory(t) {
        return this._templateFactory ? this._templateFactory.changeContent(t) : this._templateFactory = new Fb({ ...this._config,
            content: t,
            extraClass: this._resolvePossibleFunction(this._config.customClass)
        }), this._templateFactory
    }
    _getContentForTemplate() {
        return {
            [Yb]: this._getTitle()
        }
    }
    _getTitle() {
        return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title")
    }
    _initializeOnDelegatedTarget(t) {
        return this.constructor.getOrCreateInstance(t.delegateTarget, this._getDelegateConfig())
    }
    _isAnimated() {
        return this._config.animation || this.tip && this.tip.classList.contains(al)
    }
    _isShown() {
        return this.tip && this.tip.classList.contains(ps)
    }
    _createPopper(t) {
        const r = Zt(this._config.placement, [this, t, this._element]),
            a = ay[r.toUpperCase()];
        return wu(this._element, t, this._getPopperConfig(a))
    }
    _getOffset() {
        const {
            offset: t
        } = this._config;
        return typeof t == "string" ? t.split(",").map(r => Number.parseInt(r, 10)) : typeof t == "function" ? r => t(r, this._element) : t
    }
    _resolvePossibleFunction(t) {
        return Zt(t, [this._element])
    }
    _getPopperConfig(t) {
        const r = {
            placement: t,
            modifiers: [{
                name: "flip",
                options: {
                    fallbackPlacements: this._config.fallbackPlacements
                }
            }, {
                name: "offset",
                options: {
                    offset: this._getOffset()
                }
            }, {
                name: "preventOverflow",
                options: {
                    boundary: this._config.boundary
                }
            }, {
                name: "arrow",
                options: {
                    element: `.${this.constructor.NAME}-arrow`
                }
            }, {
                name: "preSetPlacement",
                enabled: !0,
                phase: "beforeMain",
                fn: a => {
                    this._getTipElement().setAttribute("data-popper-placement", a.state.placement)
                }
            }]
        };
        return { ...r,
            ...Zt(this._config.popperConfig, [r])
        }
    }
    _setListeners() {
        const t = this._config.trigger.split(" ");
        for (const r of t)
            if (r === "click") M.on(this._element, this.constructor.eventName(ty), this._config.selector, a => {
                this._initializeOnDelegatedTarget(a).toggle()
            });
            else if (r !== jb) {
            const a = r === Di ? this.constructor.eventName(ry) : this.constructor.eventName(ey),
                o = r === Di ? this.constructor.eventName(iy) : this.constructor.eventName(ny);
            M.on(this._element, a, this._config.selector, c => {
                const l = this._initializeOnDelegatedTarget(c);
                l._activeTrigger[c.type === "focusin" ? sl : Di] = !0, l._enter()
            }), M.on(this._element, o, this._config.selector, c => {
                const l = this._initializeOnDelegatedTarget(c);
                l._activeTrigger[c.type === "focusout" ? sl : Di] = l._element.contains(c.relatedTarget), l._leave()
            })
        }
        this._hideModalHandler = () => {
            this._element && this.hide()
        }, M.on(this._element.closest(vd), _d, this._hideModalHandler)
    }
    _fixTitle() {
        const t = this._element.getAttribute("title");
        !t || (!this._element.getAttribute("aria-label") && !this._element.textContent.trim() && this._element.setAttribute("aria-label", t), this._element.setAttribute("data-bs-original-title", t), this._element.removeAttribute("title"))
    }
    _enter() {
        if (this._isShown() || this._isHovered) {
            this._isHovered = !0;
            return
        }
        this._isHovered = !0, this._setTimeout(() => {
            this._isHovered && this.show()
        }, this._config.delay.show)
    }
    _leave() {
        this._isWithActiveTrigger() || (this._isHovered = !1, this._setTimeout(() => {
            this._isHovered || this.hide()
        }, this._config.delay.hide))
    }
    _setTimeout(t, r) {
        clearTimeout(this._timeout), this._timeout = setTimeout(t, r)
    }
    _isWithActiveTrigger() {
        return Object.values(this._activeTrigger).includes(!0)
    }
    _getConfig(t) {
        const r = fn.getDataAttributes(this._element);
        for (const a of Object.keys(r)) Wb.has(a) && delete r[a];
        return t = { ...r,
            ...typeof t == "object" && t ? t : {}
        }, t = this._mergeConfigObj(t), t = this._configAfterMerge(t), this._typeCheckConfig(t), t
    }
    _configAfterMerge(t) {
        return t.container = t.container === !1 ? document.body : kn(t.container), typeof t.delay == "number" && (t.delay = {
            show: t.delay,
            hide: t.delay
        }), typeof t.title == "number" && (t.title = t.title.toString()), typeof t.content == "number" && (t.content = t.content.toString()), t
    }
    _getDelegateConfig() {
        const t = {};
        for (const [r, a] of Object.entries(this._config)) this.constructor.Default[r] !== a && (t[r] = a);
        return t.selector = !1, t.trigger = "manual", t
    }
    _disposePopper() {
        this._popper && (this._popper.destroy(), this._popper = null), this.tip && (this.tip.remove(), this.tip = null)
    }
    static jQueryInterface(t) {
        return this.each(function() {
            const r = fi.getOrCreateInstance(this, t);
            if (typeof t == "string") {
                if (typeof r[t] > "u") throw new TypeError(`No method named "${t}"`);
                r[t]()
            }
        })
    }
}
Se(fi);
const cy = "popover",
    ly = ".popover-header",
    uy = ".popover-body",
    fy = { ...fi.Default,
        content: "",
        offset: [0, 8],
        placement: "right",
        template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
        trigger: "click"
    },
    dy = { ...fi.DefaultType,
        content: "(null|string|element|function)"
    };
class Su extends fi {
    static get Default() {
        return fy
    }
    static get DefaultType() {
        return dy
    }
    static get NAME() {
        return cy
    }
    _isWithContent() {
        return this._getTitle() || this._getContent()
    }
    _getContentForTemplate() {
        return {
            [ly]: this._getTitle(),
            [uy]: this._getContent()
        }
    }
    _getContent() {
        return this._resolvePossibleFunction(this._config.content)
    }
    static jQueryInterface(t) {
        return this.each(function() {
            const r = Su.getOrCreateInstance(this, t);
            if (typeof t == "string") {
                if (typeof r[t] > "u") throw new TypeError(`No method named "${t}"`);
                r[t]()
            }
        })
    }
}
Se(Su);
const hy = "scrollspy",
    py = "bs.scrollspy",
    Ou = `.${py}`,
    my = ".data-api",
    gy = `activate${Ou}`,
    bd = `click${Ou}`,
    vy = `load${Ou}${my}`,
    _y = "dropdown-item",
    Vr = "active",
    by = '[data-bs-spy="scroll"]',
    ol = "[href]",
    yy = ".nav, .list-group",
    yd = ".nav-link",
    Ey = ".nav-item",
    wy = ".list-group-item",
    Ay = `${yd}, ${Ey} > ${yd}, ${wy}`,
    xy = ".dropdown",
    Cy = ".dropdown-toggle",
    Ty = {
        offset: null,
        rootMargin: "0px 0px -25%",
        smoothScroll: !1,
        target: null,
        threshold: [.1, .5, 1]
    },
    Sy = {
        offset: "(number|null)",
        rootMargin: "string",
        smoothScroll: "boolean",
        target: "element",
        threshold: "array"
    };
class no extends Pe {
    constructor(t, r) {
        super(t, r), this._targetLinks = new Map, this._observableSections = new Map, this._rootElement = getComputedStyle(this._element).overflowY === "visible" ? null : this._element, this._activeTarget = null, this._observer = null, this._previousScrollData = {
            visibleEntryTop: 0,
            parentScrollTop: 0
        }, this.refresh()
    }
    static get Default() {
        return Ty
    }
    static get DefaultType() {
        return Sy
    }
    static get NAME() {
        return hy
    }
    refresh() {
        this._initializeTargetsAndObservables(), this._maybeEnableSmoothScroll(), this._observer ? this._observer.disconnect() : this._observer = this._getNewObserver();
        for (const t of this._observableSections.values()) this._observer.observe(t)
    }
    dispose() {
        this._observer.disconnect(), super.dispose()
    }
    _configAfterMerge(t) {
        return t.target = kn(t.target) || document.body, t.rootMargin = t.offset ? `${t.offset}px 0px -30%` : t.rootMargin, typeof t.threshold == "string" && (t.threshold = t.threshold.split(",").map(r => Number.parseFloat(r))), t
    }
    _maybeEnableSmoothScroll() {
        !this._config.smoothScroll || (M.off(this._config.target, bd), M.on(this._config.target, bd, ol, t => {
            const r = this._observableSections.get(t.target.hash);
            if (r) {
                t.preventDefault();
                const a = this._rootElement || window,
                    o = r.offsetTop - this._element.offsetTop;
                if (a.scrollTo) {
                    a.scrollTo({
                        top: o,
                        behavior: "smooth"
                    });
                    return
                }
                a.scrollTop = o
            }
        }))
    }
    _getNewObserver() {
        const t = {
            root: this._rootElement,
            threshold: this._config.threshold,
            rootMargin: this._config.rootMargin
        };
        return new IntersectionObserver(r => this._observerCallback(r), t)
    }
    _observerCallback(t) {
        const r = l => this._targetLinks.get(`#${l.target.id}`),
            a = l => {
                this._previousScrollData.visibleEntryTop = l.target.offsetTop, this._process(r(l))
            },
            o = (this._rootElement || document.documentElement).scrollTop,
            c = o >= this._previousScrollData.parentScrollTop;
        this._previousScrollData.parentScrollTop = o;
        for (const l of t) {
            if (!l.isIntersecting) {
                this._activeTarget = null, this._clearActiveClass(r(l));
                continue
            }
            const f = l.target.offsetTop >= this._previousScrollData.visibleEntryTop;
            if (c && f) {
                if (a(l), !o) return;
                continue
            }!c && !f && a(l)
        }
    }
    _initializeTargetsAndObservables() {
        this._targetLinks = new Map, this._observableSections = new Map;
        const t = U.find(ol, this._config.target);
        for (const r of t) {
            if (!r.hash || Bn(r)) continue;
            const a = U.findOne(decodeURI(r.hash), this._element);
            li(a) && (this._targetLinks.set(decodeURI(r.hash), r), this._observableSections.set(r.hash, a))
        }
    }
    _process(t) {
        this._activeTarget !== t && (this._clearActiveClass(this._config.target), this._activeTarget = t, t.classList.add(Vr), this._activateParents(t), M.trigger(this._element, gy, {
            relatedTarget: t
        }))
    }
    _activateParents(t) {
        if (t.classList.contains(_y)) {
            U.findOne(Cy, t.closest(xy)).classList.add(Vr);
            return
        }
        for (const r of U.parents(t, yy))
            for (const a of U.prev(r, Ay)) a.classList.add(Vr)
    }
    _clearActiveClass(t) {
        t.classList.remove(Vr);
        const r = U.find(`${ol}.${Vr}`, t);
        for (const a of r) a.classList.remove(Vr)
    }
    static jQueryInterface(t) {
        return this.each(function() {
            const r = no.getOrCreateInstance(this, t);
            if (typeof t == "string") {
                if (r[t] === void 0 || t.startsWith("_") || t === "constructor") throw new TypeError(`No method named "${t}"`);
                r[t]()
            }
        })
    }
}
M.on(window, vy, () => {
    for (const e of U.find(by)) no.getOrCreateInstance(e)
});
Se(no);
const Oy = "tab",
    Gy = "bs.tab",
    xr = `.${Gy}`,
    Ny = `hide${xr}`,
    Ly = `hidden${xr}`,
    Iy = `show${xr}`,
    My = `shown${xr}`,
    Py = `click${xr}`,
    Ry = `keydown${xr}`,
    Dy = `load${xr}`,
    ky = "ArrowLeft",
    Ed = "ArrowRight",
    By = "ArrowUp",
    wd = "ArrowDown",
    cl = "Home",
    Ad = "End",
    ur = "active",
    xd = "fade",
    ll = "show",
    $y = "dropdown",
    zy = ".dropdown-toggle",
    Hy = ".dropdown-menu",
    ul = ":not(.dropdown-toggle)",
    Fy = '.list-group, .nav, [role="tablist"]',
    Vy = ".nav-item, .list-group-item",
    Wy = `.nav-link${ul}, .list-group-item${ul}, [role="tab"]${ul}`,
    ph = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
    fl = `${Wy}, ${ph}`,
    Uy = `.${ur}[data-bs-toggle="tab"], .${ur}[data-bs-toggle="pill"], .${ur}[data-bs-toggle="list"]`;
class ri extends Pe {
    constructor(t) {
        super(t), this._parent = this._element.closest(Fy), this._parent && (this._setInitialAttributes(this._parent, this._getChildren()), M.on(this._element, Ry, r => this._keydown(r)))
    }
    static get NAME() {
        return Oy
    }
    show() {
        const t = this._element;
        if (this._elemIsActive(t)) return;
        const r = this._getActiveElem(),
            a = r ? M.trigger(r, Ny, {
                relatedTarget: t
            }) : null;
        M.trigger(t, Iy, {
            relatedTarget: r
        }).defaultPrevented || a && a.defaultPrevented || (this._deactivate(r, t), this._activate(t, r))
    }
    _activate(t, r) {
        if (!t) return;
        t.classList.add(ur), this._activate(U.getElementFromSelector(t));
        const a = () => {
            if (t.getAttribute("role") !== "tab") {
                t.classList.add(ll);
                return
            }
            t.removeAttribute("tabindex"), t.setAttribute("aria-selected", !0), this._toggleDropDown(t, !0), M.trigger(t, My, {
                relatedTarget: r
            })
        };
        this._queueCallback(a, t, t.classList.contains(xd))
    }
    _deactivate(t, r) {
        if (!t) return;
        t.classList.remove(ur), t.blur(), this._deactivate(U.getElementFromSelector(t));
        const a = () => {
            if (t.getAttribute("role") !== "tab") {
                t.classList.remove(ll);
                return
            }
            t.setAttribute("aria-selected", !1), t.setAttribute("tabindex", "-1"), this._toggleDropDown(t, !1), M.trigger(t, Ly, {
                relatedTarget: r
            })
        };
        this._queueCallback(a, t, t.classList.contains(xd))
    }
    _keydown(t) {
        if (![ky, Ed, By, wd, cl, Ad].includes(t.key)) return;
        t.stopPropagation(), t.preventDefault();
        const r = this._getChildren().filter(o => !Bn(o));
        let a;
        if ([cl, Ad].includes(t.key)) a = r[t.key === cl ? 0 : r.length - 1];
        else {
            const o = [Ed, wd].includes(t.key);
            a = xu(r, t.target, o, !0)
        }
        a && (a.focus({
            preventScroll: !0
        }), ri.getOrCreateInstance(a).show())
    }
    _getChildren() {
        return U.find(fl, this._parent)
    }
    _getActiveElem() {
        return this._getChildren().find(t => this._elemIsActive(t)) || null
    }
    _setInitialAttributes(t, r) {
        this._setAttributeIfNotExists(t, "role", "tablist");
        for (const a of r) this._setInitialAttributesOnChild(a)
    }
    _setInitialAttributesOnChild(t) {
        t = this._getInnerElement(t);
        const r = this._elemIsActive(t),
            a = this._getOuterElement(t);
        t.setAttribute("aria-selected", r), a !== t && this._setAttributeIfNotExists(a, "role", "presentation"), r || t.setAttribute("tabindex", "-1"), this._setAttributeIfNotExists(t, "role", "tab"), this._setInitialAttributesOnTargetPanel(t)
    }
    _setInitialAttributesOnTargetPanel(t) {
        const r = U.getElementFromSelector(t);
        !r || (this._setAttributeIfNotExists(r, "role", "tabpanel"), t.id && this._setAttributeIfNotExists(r, "aria-labelledby", `${t.id}`))
    }
    _toggleDropDown(t, r) {
        const a = this._getOuterElement(t);
        if (!a.classList.contains($y)) return;
        const o = (c, l) => {
            const f = U.findOne(c, a);
            f && f.classList.toggle(l, r)
        };
        o(zy, ur), o(Hy, ll), a.setAttribute("aria-expanded", r)
    }
    _setAttributeIfNotExists(t, r, a) {
        t.hasAttribute(r) || t.setAttribute(r, a)
    }
    _elemIsActive(t) {
        return t.classList.contains(ur)
    }
    _getInnerElement(t) {
        return t.matches(fl) ? t : U.findOne(fl, t)
    }
    _getOuterElement(t) {
        return t.closest(Vy) || t
    }
    static jQueryInterface(t) {
        return this.each(function() {
            const r = ri.getOrCreateInstance(this);
            if (typeof t == "string") {
                if (r[t] === void 0 || t.startsWith("_") || t === "constructor") throw new TypeError(`No method named "${t}"`);
                r[t]()
            }
        })
    }
}
M.on(document, Py, ph, function(e) {
    ["A", "AREA"].includes(this.tagName) && e.preventDefault(), !Bn(this) && ri.getOrCreateInstance(this).show()
});
M.on(window, Dy, () => {
    for (const e of U.find(Uy)) ri.getOrCreateInstance(e)
});
Se(ri);
const Yy = "toast",
    Ky = "bs.toast",
    qn = `.${Ky}`,
    jy = `mouseover${qn}`,
    qy = `mouseout${qn}`,
    Xy = `focusin${qn}`,
    Jy = `focusout${qn}`,
    Zy = `hide${qn}`,
    Qy = `hidden${qn}`,
    tE = `show${qn}`,
    eE = `shown${qn}`,
    nE = "fade",
    Cd = "hide",
    ms = "show",
    gs = "showing",
    rE = {
        animation: "boolean",
        autohide: "boolean",
        delay: "number"
    },
    iE = {
        animation: !0,
        autohide: !0,
        delay: 5e3
    };
class ro extends Pe {
    constructor(t, r) {
        super(t, r), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners()
    }
    static get Default() {
        return iE
    }
    static get DefaultType() {
        return rE
    }
    static get NAME() {
        return Yy
    }
    show() {
        if (M.trigger(this._element, tE).defaultPrevented) return;
        this._clearTimeout(), this._config.animation && this._element.classList.add(nE);
        const r = () => {
            this._element.classList.remove(gs), M.trigger(this._element, eE), this._maybeScheduleHide()
        };
        this._element.classList.remove(Cd), aa(this._element), this._element.classList.add(ms, gs), this._queueCallback(r, this._element, this._config.animation)
    }
    hide() {
        if (!this.isShown() || M.trigger(this._element, Zy).defaultPrevented) return;
        const r = () => {
            this._element.classList.add(Cd), this._element.classList.remove(gs, ms), M.trigger(this._element, Qy)
        };
        this._element.classList.add(gs), this._queueCallback(r, this._element, this._config.animation)
    }
    dispose() {
        this._clearTimeout(), this.isShown() && this._element.classList.remove(ms), super.dispose()
    }
    isShown() {
        return this._element.classList.contains(ms)
    }
    _maybeScheduleHide() {
        !this._config.autohide || this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(() => {
            this.hide()
        }, this._config.delay))
    }
    _onInteraction(t, r) {
        switch (t.type) {
            case "mouseover":
            case "mouseout":
                {
                    this._hasMouseInteraction = r;
                    break
                }
            case "focusin":
            case "focusout":
                {
                    this._hasKeyboardInteraction = r;
                    break
                }
        }
        if (r) {
            this._clearTimeout();
            return
        }
        const a = t.relatedTarget;
        this._element === a || this._element.contains(a) || this._maybeScheduleHide()
    }
    _setListeners() {
        M.on(this._element, jy, t => this._onInteraction(t, !0)), M.on(this._element, qy, t => this._onInteraction(t, !1)), M.on(this._element, Xy, t => this._onInteraction(t, !0)), M.on(this._element, Jy, t => this._onInteraction(t, !1))
    }
    _clearTimeout() {
        clearTimeout(this._timeout), this._timeout = null
    }
    static jQueryInterface(t) {
        return this.each(function() {
            const r = ro.getOrCreateInstance(this, t);
            if (typeof t == "string") {
                if (typeof r[t] > "u") throw new TypeError(`No method named "${t}"`);
                r[t](this)
            }
        })
    }
}
Qs(ro);
Se(ro);
var Il = !1,
    Ml = !1,
    mr = [],
    Pl = -1;

function aE(e) {
    sE(e)
}

function sE(e) {
    mr.includes(e) || mr.push(e), oE()
}

function mh(e) {
    let t = mr.indexOf(e);
    t !== -1 && t > Pl && mr.splice(t, 1)
}

function oE() {
    !Ml && !Il && (Il = !0, queueMicrotask(cE))
}

function cE() {
    Il = !1, Ml = !0;
    for (let e = 0; e < mr.length; e++) mr[e](), Pl = e;
    mr.length = 0, Pl = -1, Ml = !1
}
var di, hi, la, gh, Rl = !0;

function lE(e) {
    Rl = !1, e(), Rl = !0
}

function uE(e) {
    di = e.reactive, la = e.release, hi = t => e.effect(t, {
        scheduler: r => {
            Rl ? aE(r) : r()
        }
    }), gh = e.raw
}

function Td(e) {
    hi = e
}

function fE(e) {
    let t = () => {};
    return [a => {
        let o = hi(a);
        return e._x_effects || (e._x_effects = new Set, e._x_runEffects = () => {
            e._x_effects.forEach(c => c())
        }), e._x_effects.add(o), t = () => {
            o !== void 0 && (e._x_effects.delete(o), la(o))
        }, o
    }, () => {
        t()
    }]
}
var vh = [],
    _h = [],
    bh = [];

function dE(e) {
    bh.push(e)
}

function yh(e, t) {
    typeof t == "function" ? (e._x_cleanups || (e._x_cleanups = []), e._x_cleanups.push(t)) : (t = e, _h.push(t))
}

function hE(e) {
    vh.push(e)
}

function pE(e, t, r) {
    e._x_attributeCleanups || (e._x_attributeCleanups = {}), e._x_attributeCleanups[t] || (e._x_attributeCleanups[t] = []), e._x_attributeCleanups[t].push(r)
}

function Eh(e, t) {
    !e._x_attributeCleanups || Object.entries(e._x_attributeCleanups).forEach(([r, a]) => {
        (t === void 0 || t.includes(r)) && (a.forEach(o => o()), delete e._x_attributeCleanups[r])
    })
}
var Gu = new MutationObserver(Mu),
    Nu = !1;

function Lu() {
    Gu.observe(document, {
        subtree: !0,
        childList: !0,
        attributes: !0,
        attributeOldValue: !0
    }), Nu = !0
}

function wh() {
    mE(), Gu.disconnect(), Nu = !1
}
var Wi = [],
    dl = !1;

function mE() {
    Wi = Wi.concat(Gu.takeRecords()), Wi.length && !dl && (dl = !0, queueMicrotask(() => {
        gE(), dl = !1
    }))
}

function gE() {
    Mu(Wi), Wi.length = 0
}

function It(e) {
    if (!Nu) return e();
    wh();
    let t = e();
    return Lu(), t
}
var Iu = !1,
    Fs = [];

function vE() {
    Iu = !0
}

function _E() {
    Iu = !1, Mu(Fs), Fs = []
}

function Mu(e) {
    if (Iu) {
        Fs = Fs.concat(e);
        return
    }
    let t = [],
        r = [],
        a = new Map,
        o = new Map;
    for (let c = 0; c < e.length; c++)
        if (!e[c].target._x_ignoreMutationObserver && (e[c].type === "childList" && (e[c].addedNodes.forEach(l => l.nodeType === 1 && t.push(l)), e[c].removedNodes.forEach(l => l.nodeType === 1 && r.push(l))), e[c].type === "attributes")) {
            let l = e[c].target,
                f = e[c].attributeName,
                h = e[c].oldValue,
                g = () => {
                    a.has(l) || a.set(l, []), a.get(l).push({
                        name: f,
                        value: l.getAttribute(f)
                    })
                },
                v = () => {
                    o.has(l) || o.set(l, []), o.get(l).push(f)
                };
            l.hasAttribute(f) && h === null ? g() : l.hasAttribute(f) ? (v(), g()) : v()
        }
    o.forEach((c, l) => {
        Eh(l, c)
    }), a.forEach((c, l) => {
        vh.forEach(f => f(l, c))
    });
    for (let c of r)
        if (!t.includes(c) && (_h.forEach(l => l(c)), c._x_cleanups))
            for (; c._x_cleanups.length;) c._x_cleanups.pop()();
    t.forEach(c => {
        c._x_ignoreSelf = !0, c._x_ignore = !0
    });
    for (let c of t) r.includes(c) || !c.isConnected || (delete c._x_ignoreSelf, delete c._x_ignore, bh.forEach(l => l(c)), c._x_ignore = !0, c._x_ignoreSelf = !0);
    t.forEach(c => {
        delete c._x_ignoreSelf, delete c._x_ignore
    }), t = null, r = null, a = null, o = null
}

function Ah(e) {
    return fa(ii(e))
}

function ua(e, t, r) {
    return e._x_dataStack = [t, ...ii(r || e)], () => {
        e._x_dataStack = e._x_dataStack.filter(a => a !== t)
    }
}

function ii(e) {
    return e._x_dataStack ? e._x_dataStack : typeof ShadowRoot == "function" && e instanceof ShadowRoot ? ii(e.host) : e.parentNode ? ii(e.parentNode) : []
}

function fa(e) {
    let t = new Proxy({}, {
        ownKeys: () => Array.from(new Set(e.flatMap(r => Object.keys(r)))),
        has: (r, a) => e.some(o => o.hasOwnProperty(a)),
        get: (r, a) => (e.find(o => {
            if (o.hasOwnProperty(a)) {
                let c = Object.getOwnPropertyDescriptor(o, a);
                if (c.get && c.get._x_alreadyBound || c.set && c.set._x_alreadyBound) return !0;
                if ((c.get || c.set) && c.enumerable) {
                    let l = c.get,
                        f = c.set,
                        h = c;
                    l = l && l.bind(t), f = f && f.bind(t), l && (l._x_alreadyBound = !0), f && (f._x_alreadyBound = !0), Object.defineProperty(o, a, { ...h,
                        get: l,
                        set: f
                    })
                }
                return !0
            }
            return !1
        }) || {})[a],
        set: (r, a, o) => {
            let c = e.find(l => l.hasOwnProperty(a));
            return c ? c[a] = o : e[e.length - 1][a] = o, !0
        }
    });
    return t
}

function xh(e) {
    let t = a => typeof a == "object" && !Array.isArray(a) && a !== null,
        r = (a, o = "") => {
            Object.entries(Object.getOwnPropertyDescriptors(a)).forEach(([c, {
                value: l,
                enumerable: f
            }]) => {
                if (f === !1 || l === void 0) return;
                let h = o === "" ? c : `${o}.${c}`;
                typeof l == "object" && l !== null && l._x_interceptor ? a[c] = l.initialize(e, h, c) : t(l) && l !== a && !(l instanceof Element) && r(l, h)
            })
        };
    return r(e)
}

function Ch(e, t = () => {}) {
    let r = {
        initialValue: void 0,
        _x_interceptor: !0,
        initialize(a, o, c) {
            return e(this.initialValue, () => bE(a, o), l => Dl(a, o, l), o, c)
        }
    };
    return t(r), a => {
        if (typeof a == "object" && a !== null && a._x_interceptor) {
            let o = r.initialize.bind(r);
            r.initialize = (c, l, f) => {
                let h = a.initialize(c, l, f);
                return r.initialValue = h, o(c, l, f)
            }
        } else r.initialValue = a;
        return r
    }
}

function bE(e, t) {
    return t.split(".").reduce((r, a) => r[a], e)
}

function Dl(e, t, r) {
    if (typeof t == "string" && (t = t.split(".")), t.length === 1) e[t[0]] = r;
    else {
        if (t.length === 0) throw error;
        return e[t[0]] || (e[t[0]] = {}), Dl(e[t[0]], t.slice(1), r)
    }
}
var Th = {};

function Re(e, t) {
    Th[e] = t
}

function kl(e, t) {
    return Object.entries(Th).forEach(([r, a]) => {
        let o = null;

        function c() {
            if (o) return o; {
                let [l, f] = Ih(t);
                return o = {
                    interceptor: Ch,
                    ...l
                }, yh(t, f), o
            }
        }
        Object.defineProperty(e, `$${r}`, {
            get() {
                return a(t, c())
            },
            enumerable: !1
        })
    }), e
}

function yE(e, t, r, ...a) {
    try {
        return r(...a)
    } catch (o) {
        Xi(o, e, t)
    }
}

function Xi(e, t, r = void 0) {
    Object.assign(e, {
        el: t,
        expression: r
    }), console.warn(`Alpine Expression Error: ${e.message}

${r?'Expression: "'+r+`"

`:""}`, t), setTimeout(() => {
        throw e
    }, 0)
}
var Ns = !0;

function Sh(e) {
    let t = Ns;
    Ns = !1;
    let r = e();
    return Ns = t, r
}

function gr(e, t, r = {}) {
    let a;
    return Yt(e, t)(o => a = o, r), a
}

function Yt(...e) {
    return Oh(...e)
}
var Oh = Gh;

function EE(e) {
    Oh = e
}

function Gh(e, t) {
    let r = {};
    kl(r, e);
    let a = [r, ...ii(e)],
        o = typeof t == "function" ? wE(a, t) : xE(a, t, e);
    return yE.bind(null, e, t, o)
}

function wE(e, t) {
    return (r = () => {}, {
        scope: a = {},
        params: o = []
    } = {}) => {
        let c = t.apply(fa([a, ...e]), o);
        Vs(r, c)
    }
}
var hl = {};

function AE(e, t) {
    if (hl[e]) return hl[e];
    let r = Object.getPrototypeOf(async function() {}).constructor,
        a = /^[\n\s]*if.*\(.*\)/.test(e) || /^(let|const)\s/.test(e) ? `(async()=>{ ${e} })()` : e,
        c = (() => {
            try {
                return new r(["__self", "scope"], `with (scope) { __self.result = ${a} }; __self.finished = true; return __self.result;`)
            } catch (l) {
                return Xi(l, t, e), Promise.resolve()
            }
        })();
    return hl[e] = c, c
}

function xE(e, t, r) {
    let a = AE(t, r);
    return (o = () => {}, {
        scope: c = {},
        params: l = []
    } = {}) => {
        a.result = void 0, a.finished = !1;
        let f = fa([c, ...e]);
        if (typeof a == "function") {
            let h = a(a, f).catch(g => Xi(g, r, t));
            a.finished ? (Vs(o, a.result, f, l, r), a.result = void 0) : h.then(g => {
                Vs(o, g, f, l, r)
            }).catch(g => Xi(g, r, t)).finally(() => a.result = void 0)
        }
    }
}

function Vs(e, t, r, a, o) {
    if (Ns && typeof t == "function") {
        let c = t.apply(r, a);
        c instanceof Promise ? c.then(l => Vs(e, l, r, a)).catch(l => Xi(l, o, t)) : e(c)
    } else typeof t == "object" && t instanceof Promise ? t.then(c => e(c)) : e(t)
}
var Pu = "x-";

function pi(e = "") {
    return Pu + e
}

function CE(e) {
    Pu = e
}
var Bl = {};

function xt(e, t) {
    return Bl[e] = t, {
        before(r) {
            if (!Bl[r]) {
                console.warn("Cannot find directive `${directive}`. `${name}` will use the default order of execution");
                return
            }
            const a = fr.indexOf(r);
            fr.splice(a >= 0 ? a : fr.indexOf("DEFAULT"), 0, e)
        }
    }
}

function Ru(e, t, r) {
    if (t = Array.from(t), e._x_virtualDirectives) {
        let c = Object.entries(e._x_virtualDirectives).map(([f, h]) => ({
                name: f,
                value: h
            })),
            l = Nh(c);
        c = c.map(f => l.find(h => h.name === f.name) ? {
            name: `x-bind:${f.name}`,
            value: `"${f.value}"`
        } : f), t = t.concat(c)
    }
    let a = {};
    return t.map(Rh((c, l) => a[c] = l)).filter(kh).map(OE(a, r)).sort(GE).map(c => SE(e, c))
}

function Nh(e) {
    return Array.from(e).map(Rh()).filter(t => !kh(t))
}
var $l = !1,
    zi = new Map,
    Lh = Symbol();

function TE(e) {
    $l = !0;
    let t = Symbol();
    Lh = t, zi.set(t, []);
    let r = () => {
            for (; zi.get(t).length;) zi.get(t).shift()();
            zi.delete(t)
        },
        a = () => {
            $l = !1, r()
        };
    e(r), a()
}

function Ih(e) {
    let t = [],
        r = f => t.push(f),
        [a, o] = fE(e);
    return t.push(o), [{
        Alpine: ha,
        effect: a,
        cleanup: r,
        evaluateLater: Yt.bind(Yt, e),
        evaluate: gr.bind(gr, e)
    }, () => t.forEach(f => f())]
}

function SE(e, t) {
    let r = () => {},
        a = Bl[t.type] || r,
        [o, c] = Ih(e);
    pE(e, t.original, c);
    let l = () => {
        e._x_ignore || e._x_ignoreSelf || (a.inline && a.inline(e, t, o), a = a.bind(a, e, t, o), $l ? zi.get(Lh).push(a) : a())
    };
    return l.runCleanups = c, l
}
var Mh = (e, t) => ({
        name: r,
        value: a
    }) => (r.startsWith(e) && (r = r.replace(e, t)), {
        name: r,
        value: a
    }),
    Ph = e => e;

function Rh(e = () => {}) {
    return ({
        name: t,
        value: r
    }) => {
        let {
            name: a,
            value: o
        } = Dh.reduce((c, l) => l(c), {
            name: t,
            value: r
        });
        return a !== t && e(a, t), {
            name: a,
            value: o
        }
    }
}
var Dh = [];

function Du(e) {
    Dh.push(e)
}

function kh({
    name: e
}) {
    return Bh().test(e)
}
var Bh = () => new RegExp(`^${Pu}([^:^.]+)\\b`);

function OE(e, t) {
    return ({
        name: r,
        value: a
    }) => {
        let o = r.match(Bh()),
            c = r.match(/:([a-zA-Z0-9\-:]+)/),
            l = r.match(/\.[^.\]]+(?=[^\]]*$)/g) || [],
            f = t || e[r] || r;
        return {
            type: o ? o[1] : null,
            value: c ? c[1] : null,
            modifiers: l.map(h => h.replace(".", "")),
            expression: a,
            original: f
        }
    }
}
var zl = "DEFAULT",
    fr = ["ignore", "ref", "data", "id", "bind", "init", "for", "model", "modelable", "transition", "show", "if", zl, "teleport"];

function GE(e, t) {
    let r = fr.indexOf(e.type) === -1 ? zl : e.type,
        a = fr.indexOf(t.type) === -1 ? zl : t.type;
    return fr.indexOf(r) - fr.indexOf(a)
}

function Ui(e, t, r = {}) {
    e.dispatchEvent(new CustomEvent(t, {
        detail: r,
        bubbles: !0,
        composed: !0,
        cancelable: !0
    }))
}

function zn(e, t) {
    if (typeof ShadowRoot == "function" && e instanceof ShadowRoot) {
        Array.from(e.children).forEach(o => zn(o, t));
        return
    }
    let r = !1;
    if (t(e, () => r = !0), r) return;
    let a = e.firstElementChild;
    for (; a;) zn(a, t), a = a.nextElementSibling
}

function Hn(e, ...t) {
    console.warn(`Alpine Warning: ${e}`, ...t)
}
var Sd = !1;

function NE() {
    Sd && Hn("Alpine has already been initialized on this page. Calling Alpine.start() more than once can cause problems."), Sd = !0, document.body || Hn("Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?"), Ui(document, "alpine:init"), Ui(document, "alpine:initializing"), Lu(), dE(t => Fn(t, zn)), yh(t => Uh(t)), hE((t, r) => {
        Ru(t, r).forEach(a => a())
    });
    let e = t => !io(t.parentElement, !0);
    Array.from(document.querySelectorAll(Hh())).filter(e).forEach(t => {
        Fn(t)
    }), Ui(document, "alpine:initialized")
}
var ku = [],
    $h = [];

function zh() {
    return ku.map(e => e())
}

function Hh() {
    return ku.concat($h).map(e => e())
}

function Fh(e) {
    ku.push(e)
}

function Vh(e) {
    $h.push(e)
}

function io(e, t = !1) {
    return ao(e, r => {
        if ((t ? Hh() : zh()).some(o => r.matches(o))) return !0
    })
}

function ao(e, t) {
    if (!!e) {
        if (t(e)) return e;
        if (e._x_teleportBack && (e = e._x_teleportBack), !!e.parentElement) return ao(e.parentElement, t)
    }
}

function LE(e) {
    return zh().some(t => e.matches(t))
}
var Wh = [];

function IE(e) {
    Wh.push(e)
}

function Fn(e, t = zn, r = () => {}) {
    TE(() => {
        t(e, (a, o) => {
            r(a, o), Wh.forEach(c => c(a, o)), Ru(a, a.attributes).forEach(c => c()), a._x_ignore && o()
        })
    })
}

function Uh(e) {
    zn(e, t => Eh(t))
}
var Hl = [],
    Bu = !1;

function $u(e = () => {}) {
    return queueMicrotask(() => {
        Bu || setTimeout(() => {
            Fl()
        })
    }), new Promise(t => {
        Hl.push(() => {
            e(), t()
        })
    })
}

function Fl() {
    for (Bu = !1; Hl.length;) Hl.shift()()
}

function ME() {
    Bu = !0
}

function zu(e, t) {
    return Array.isArray(t) ? Od(e, t.join(" ")) : typeof t == "object" && t !== null ? PE(e, t) : typeof t == "function" ? zu(e, t()) : Od(e, t)
}

function Od(e, t) {
    let r = o => o.split(" ").filter(c => !e.classList.contains(c)).filter(Boolean),
        a = o => (e.classList.add(...o), () => {
            e.classList.remove(...o)
        });
    return t = t === !0 ? t = "" : t || "", a(r(t))
}

function PE(e, t) {
    let r = f => f.split(" ").filter(Boolean),
        a = Object.entries(t).flatMap(([f, h]) => h ? r(f) : !1).filter(Boolean),
        o = Object.entries(t).flatMap(([f, h]) => h ? !1 : r(f)).filter(Boolean),
        c = [],
        l = [];
    return o.forEach(f => {
        e.classList.contains(f) && (e.classList.remove(f), l.push(f))
    }), a.forEach(f => {
        e.classList.contains(f) || (e.classList.add(f), c.push(f))
    }), () => {
        l.forEach(f => e.classList.add(f)), c.forEach(f => e.classList.remove(f))
    }
}

function so(e, t) {
    return typeof t == "object" && t !== null ? RE(e, t) : DE(e, t)
}

function RE(e, t) {
    let r = {};
    return Object.entries(t).forEach(([a, o]) => {
        r[a] = e.style[a], a.startsWith("--") || (a = kE(a)), e.style.setProperty(a, o)
    }), setTimeout(() => {
        e.style.length === 0 && e.removeAttribute("style")
    }), () => {
        so(e, r)
    }
}

function DE(e, t) {
    let r = e.getAttribute("style", t);
    return e.setAttribute("style", t), () => {
        e.setAttribute("style", r || "")
    }
}

function kE(e) {
    return e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
}

function Vl(e, t = () => {}) {
    let r = !1;
    return function() {
        r ? t.apply(this, arguments) : (r = !0, e.apply(this, arguments))
    }
}
xt("transition", (e, {
    value: t,
    modifiers: r,
    expression: a
}, {
    evaluate: o
}) => {
    typeof a == "function" && (a = o(a)), a !== !1 && (!a || typeof a == "boolean" ? $E(e, r, t) : BE(e, a, t))
});

function BE(e, t, r) {
    Yh(e, zu, ""), {
        enter: o => {
            e._x_transition.enter.during = o
        },
        "enter-start": o => {
            e._x_transition.enter.start = o
        },
        "enter-end": o => {
            e._x_transition.enter.end = o
        },
        leave: o => {
            e._x_transition.leave.during = o
        },
        "leave-start": o => {
            e._x_transition.leave.start = o
        },
        "leave-end": o => {
            e._x_transition.leave.end = o
        }
    }[r](t)
}

function $E(e, t, r) {
    Yh(e, so);
    let a = !t.includes("in") && !t.includes("out") && !r,
        o = a || t.includes("in") || ["enter"].includes(r),
        c = a || t.includes("out") || ["leave"].includes(r);
    t.includes("in") && !a && (t = t.filter((R, $) => $ < t.indexOf("out"))), t.includes("out") && !a && (t = t.filter((R, $) => $ > t.indexOf("out")));
    let l = !t.includes("opacity") && !t.includes("scale"),
        f = l || t.includes("opacity"),
        h = l || t.includes("scale"),
        g = f ? 0 : 1,
        v = h ? ki(t, "scale", 95) / 100 : 1,
        y = ki(t, "delay", 0) / 1e3,
        x = ki(t, "origin", "center"),
        C = "opacity, transform",
        L = ki(t, "duration", 150) / 1e3,
        P = ki(t, "duration", 75) / 1e3,
        N = "cubic-bezier(0.4, 0.0, 0.2, 1)";
    o && (e._x_transition.enter.during = {
        transformOrigin: x,
        transitionDelay: `${y}s`,
        transitionProperty: C,
        transitionDuration: `${L}s`,
        transitionTimingFunction: N
    }, e._x_transition.enter.start = {
        opacity: g,
        transform: `scale(${v})`
    }, e._x_transition.enter.end = {
        opacity: 1,
        transform: "scale(1)"
    }), c && (e._x_transition.leave.during = {
        transformOrigin: x,
        transitionDelay: `${y}s`,
        transitionProperty: C,
        transitionDuration: `${P}s`,
        transitionTimingFunction: N
    }, e._x_transition.leave.start = {
        opacity: 1,
        transform: "scale(1)"
    }, e._x_transition.leave.end = {
        opacity: g,
        transform: `scale(${v})`
    })
}

function Yh(e, t, r = {}) {
    e._x_transition || (e._x_transition = {
        enter: {
            during: r,
            start: r,
            end: r
        },
        leave: {
            during: r,
            start: r,
            end: r
        },
        in (a = () => {}, o = () => {}) {
            Wl(e, t, {
                during: this.enter.during,
                start: this.enter.start,
                end: this.enter.end
            }, a, o)
        },
        out(a = () => {}, o = () => {}) {
            Wl(e, t, {
                during: this.leave.during,
                start: this.leave.start,
                end: this.leave.end
            }, a, o)
        }
    })
}
window.Element.prototype._x_toggleAndCascadeWithTransitions = function(e, t, r, a) {
    const o = document.visibilityState === "visible" ? requestAnimationFrame : setTimeout;
    let c = () => o(r);
    if (t) {
        e._x_transition && (e._x_transition.enter || e._x_transition.leave) ? e._x_transition.enter && (Object.entries(e._x_transition.enter.during).length || Object.entries(e._x_transition.enter.start).length || Object.entries(e._x_transition.enter.end).length) ? e._x_transition.in(r) : c() : e._x_transition ? e._x_transition.in(r) : c();
        return
    }
    e._x_hidePromise = e._x_transition ? new Promise((l, f) => {
        e._x_transition.out(() => {}, () => l(a)), e._x_transitioning.beforeCancel(() => f({
            isFromCancelledTransition: !0
        }))
    }) : Promise.resolve(a), queueMicrotask(() => {
        let l = Kh(e);
        l ? (l._x_hideChildren || (l._x_hideChildren = []), l._x_hideChildren.push(e)) : o(() => {
            let f = h => {
                let g = Promise.all([h._x_hidePromise, ...(h._x_hideChildren || []).map(f)]).then(([v]) => v());
                return delete h._x_hidePromise, delete h._x_hideChildren, g
            };
            f(e).catch(h => {
                if (!h.isFromCancelledTransition) throw h
            })
        })
    })
};

function Kh(e) {
    let t = e.parentNode;
    if (!!t) return t._x_hidePromise ? t : Kh(t)
}

function Wl(e, t, {
    during: r,
    start: a,
    end: o
} = {}, c = () => {}, l = () => {}) {
    if (e._x_transitioning && e._x_transitioning.cancel(), Object.keys(r).length === 0 && Object.keys(a).length === 0 && Object.keys(o).length === 0) {
        c(), l();
        return
    }
    let f, h, g;
    zE(e, {
        start() {
            f = t(e, a)
        },
        during() {
            h = t(e, r)
        },
        before: c,
        end() {
            f(), g = t(e, o)
        },
        after: l,
        cleanup() {
            h(), g()
        }
    })
}

function zE(e, t) {
    let r, a, o, c = Vl(() => {
        It(() => {
            r = !0, a || t.before(), o || (t.end(), Fl()), t.after(), e.isConnected && t.cleanup(), delete e._x_transitioning
        })
    });
    e._x_transitioning = {
        beforeCancels: [],
        beforeCancel(l) {
            this.beforeCancels.push(l)
        },
        cancel: Vl(function() {
            for (; this.beforeCancels.length;) this.beforeCancels.shift()();
            c()
        }),
        finish: c
    }, It(() => {
        t.start(), t.during()
    }), ME(), requestAnimationFrame(() => {
        if (r) return;
        let l = Number(getComputedStyle(e).transitionDuration.replace(/,.*/, "").replace("s", "")) * 1e3,
            f = Number(getComputedStyle(e).transitionDelay.replace(/,.*/, "").replace("s", "")) * 1e3;
        l === 0 && (l = Number(getComputedStyle(e).animationDuration.replace("s", "")) * 1e3), It(() => {
            t.before()
        }), a = !0, requestAnimationFrame(() => {
            r || (It(() => {
                t.end()
            }), Fl(), setTimeout(e._x_transitioning.finish, l + f), o = !0)
        })
    })
}

function ki(e, t, r) {
    if (e.indexOf(t) === -1) return r;
    const a = e[e.indexOf(t) + 1];
    if (!a || t === "scale" && isNaN(a)) return r;
    if (t === "duration" || t === "delay") {
        let o = a.match(/([0-9]+)ms/);
        if (o) return o[1]
    }
    return t === "origin" && ["top", "right", "left", "center", "bottom"].includes(e[e.indexOf(t) + 2]) ? [a, e[e.indexOf(t) + 2]].join(" ") : a
}
var Ji = !1;

function da(e, t = () => {}) {
    return (...r) => Ji ? t(...r) : e(...r)
}

function HE(e) {
    return (...t) => Ji && e(...t)
}

function FE(e, t) {
    t._x_dataStack || (t._x_dataStack = e._x_dataStack), Ji = !0, WE(() => {
        VE(t)
    }), Ji = !1
}

function VE(e) {
    let t = !1;
    Fn(e, (a, o) => {
        zn(a, (c, l) => {
            if (t && LE(c)) return l();
            t = !0, o(c, l)
        })
    })
}

function WE(e) {
    let t = hi;
    Td((r, a) => {
        let o = t(r);
        return la(o), () => {}
    }), e(), Td(t)
}

function jh(e, t, r, a = []) {
    switch (e._x_bindings || (e._x_bindings = di({})), e._x_bindings[t] = r, t = a.includes("camel") ? ZE(t) : t, t) {
        case "value":
            UE(e, r);
            break;
        case "style":
            KE(e, r);
            break;
        case "class":
            YE(e, r);
            break;
        case "selected":
        case "checked":
            jE(e, t, r);
            break;
        default:
            qh(e, t, r);
            break
    }
}

function UE(e, t) {
    if (e.type === "radio") e.attributes.value === void 0 && (e.value = t), window.fromModel && (e.checked = Gd(e.value, t));
    else if (e.type === "checkbox") Number.isInteger(t) ? e.value = t : !Number.isInteger(t) && !Array.isArray(t) && typeof t != "boolean" && ![null, void 0].includes(t) ? e.value = String(t) : Array.isArray(t) ? e.checked = t.some(r => Gd(r, e.value)) : e.checked = !!t;
    else if (e.tagName === "SELECT") JE(e, t);
    else {
        if (e.value === t) return;
        e.value = t
    }
}

function YE(e, t) {
    e._x_undoAddedClasses && e._x_undoAddedClasses(), e._x_undoAddedClasses = zu(e, t)
}

function KE(e, t) {
    e._x_undoAddedStyles && e._x_undoAddedStyles(), e._x_undoAddedStyles = so(e, t)
}

function jE(e, t, r) {
    qh(e, t, r), XE(e, t, r)
}

function qh(e, t, r) {
    [null, void 0, !1].includes(r) && QE(t) ? e.removeAttribute(t) : (Xh(t) && (r = t), qE(e, t, r))
}

function qE(e, t, r) {
    e.getAttribute(t) != r && e.setAttribute(t, r)
}

function XE(e, t, r) {
    e[t] !== r && (e[t] = r)
}

function JE(e, t) {
    const r = [].concat(t).map(a => a + "");
    Array.from(e.options).forEach(a => {
        a.selected = r.includes(a.value)
    })
}

function ZE(e) {
    return e.toLowerCase().replace(/-(\w)/g, (t, r) => r.toUpperCase())
}

function Gd(e, t) {
    return e == t
}

function Xh(e) {
    return ["disabled", "checked", "required", "readonly", "hidden", "open", "selected", "autofocus", "itemscope", "multiple", "novalidate", "allowfullscreen", "allowpaymentrequest", "formnovalidate", "autoplay", "controls", "loop", "muted", "playsinline", "default", "ismap", "reversed", "async", "defer", "nomodule"].includes(e)
}

function QE(e) {
    return !["aria-pressed", "aria-checked", "aria-expanded", "aria-selected"].includes(e)
}

function tw(e, t, r) {
    return e._x_bindings && e._x_bindings[t] !== void 0 ? e._x_bindings[t] : Jh(e, t, r)
}

function ew(e, t, r, a = !0) {
    if (e._x_bindings && e._x_bindings[t] !== void 0) return e._x_bindings[t];
    if (e._x_inlineBindings && e._x_inlineBindings[t] !== void 0) {
        let o = e._x_inlineBindings[t];
        return o.extract = a, Sh(() => gr(e, o.expression))
    }
    return Jh(e, t, r)
}

function Jh(e, t, r) {
    let a = e.getAttribute(t);
    return a === null ? typeof r == "function" ? r() : r : a === "" ? !0 : Xh(t) ? !![t, "true"].includes(a) : a
}

function Zh(e, t) {
    var r;
    return function() {
        var a = this,
            o = arguments,
            c = function() {
                r = null, e.apply(a, o)
            };
        clearTimeout(r), r = setTimeout(c, t)
    }
}

function Qh(e, t) {
    let r;
    return function() {
        let a = this,
            o = arguments;
        r || (e.apply(a, o), r = !0, setTimeout(() => r = !1, t))
    }
}

function nw(e) {
    (Array.isArray(e) ? e : [e]).forEach(r => r(ha))
}
var cr = {},
    Nd = !1;

function rw(e, t) {
    if (Nd || (cr = di(cr), Nd = !0), t === void 0) return cr[e];
    cr[e] = t, typeof t == "object" && t !== null && t.hasOwnProperty("init") && typeof t.init == "function" && cr[e].init(), xh(cr[e])
}

function iw() {
    return cr
}
var t4 = {};

function aw(e, t) {
    let r = typeof t != "function" ? () => t : t;
    e instanceof Element ? e4(e, r()) : t4[e] = r
}

function sw(e) {
    return Object.entries(t4).forEach(([t, r]) => {
        Object.defineProperty(e, t, {
            get() {
                return (...a) => r(...a)
            }
        })
    }), e
}

function e4(e, t, r) {
    let a = [];
    for (; a.length;) a.pop()();
    let o = Object.entries(t).map(([l, f]) => ({
            name: l,
            value: f
        })),
        c = Nh(o);
    o = o.map(l => c.find(f => f.name === l.name) ? {
        name: `x-bind:${l.name}`,
        value: `"${l.value}"`
    } : l), Ru(e, o, r).map(l => {
        a.push(l.runCleanups), l()
    })
}
var n4 = {};

function ow(e, t) {
    n4[e] = t
}

function cw(e, t) {
    return Object.entries(n4).forEach(([r, a]) => {
        Object.defineProperty(e, r, {
            get() {
                return (...o) => a.bind(t)(...o)
            },
            enumerable: !1
        })
    }), e
}
var lw = {
        get reactive() {
            return di
        },
        get release() {
            return la
        },
        get effect() {
            return hi
        },
        get raw() {
            return gh
        },
        version: "3.12.3",
        flushAndStopDeferringMutations: _E,
        dontAutoEvaluateFunctions: Sh,
        disableEffectScheduling: lE,
        startObservingMutations: Lu,
        stopObservingMutations: wh,
        setReactivityEngine: uE,
        closestDataStack: ii,
        skipDuringClone: da,
        onlyDuringClone: HE,
        addRootSelector: Fh,
        addInitSelector: Vh,
        addScopeToNode: ua,
        deferMutations: vE,
        mapAttributes: Du,
        evaluateLater: Yt,
        interceptInit: IE,
        setEvaluator: EE,
        mergeProxies: fa,
        extractProp: ew,
        findClosest: ao,
        closestRoot: io,
        destroyTree: Uh,
        interceptor: Ch,
        transition: Wl,
        setStyles: so,
        mutateDom: It,
        directive: xt,
        throttle: Qh,
        debounce: Zh,
        evaluate: gr,
        initTree: Fn,
        nextTick: $u,
        prefixed: pi,
        prefix: CE,
        plugin: nw,
        magic: Re,
        store: rw,
        start: NE,
        clone: FE,
        bound: tw,
        $data: Ah,
        walk: zn,
        data: ow,
        bind: aw
    },
    ha = lw;

function uw(e, t) {
    const r = Object.create(null),
        a = e.split(",");
    for (let o = 0; o < a.length; o++) r[a[o]] = !0;
    return t ? o => !!r[o.toLowerCase()] : o => !!r[o]
}
var fw = Object.freeze({});
Object.freeze([]);
var r4 = Object.assign,
    dw = Object.prototype.hasOwnProperty,
    oo = (e, t) => dw.call(e, t),
    vr = Array.isArray,
    Yi = e => i4(e) === "[object Map]",
    hw = e => typeof e == "string",
    Hu = e => typeof e == "symbol",
    co = e => e !== null && typeof e == "object",
    pw = Object.prototype.toString,
    i4 = e => pw.call(e),
    a4 = e => i4(e).slice(8, -1),
    Fu = e => hw(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
    mw = e => {
        const t = Object.create(null);
        return r => t[r] || (t[r] = e(r))
    },
    gw = mw(e => e.charAt(0).toUpperCase() + e.slice(1)),
    s4 = (e, t) => e !== t && (e === e || t === t),
    Ul = new WeakMap,
    Bi = [],
    He, _r = Symbol("iterate"),
    Yl = Symbol("Map key iterate");

function vw(e) {
    return e && e._isEffect === !0
}

function _w(e, t = fw) {
    vw(e) && (e = e.raw);
    const r = Ew(e, t);
    return t.lazy || r(), r
}

function bw(e) {
    e.active && (o4(e), e.options.onStop && e.options.onStop(), e.active = !1)
}
var yw = 0;

function Ew(e, t) {
    const r = function() {
        if (!r.active) return e();
        if (!Bi.includes(r)) {
            o4(r);
            try {
                return Aw(), Bi.push(r), He = r, e()
            } finally {
                Bi.pop(), c4(), He = Bi[Bi.length - 1]
            }
        }
    };
    return r.id = yw++, r.allowRecurse = !!t.allowRecurse, r._isEffect = !0, r.active = !0, r.raw = e, r.deps = [], r.options = t, r
}

function o4(e) {
    const {
        deps: t
    } = e;
    if (t.length) {
        for (let r = 0; r < t.length; r++) t[r].delete(e);
        t.length = 0
    }
}
var ai = !0,
    Vu = [];

function ww() {
    Vu.push(ai), ai = !1
}

function Aw() {
    Vu.push(ai), ai = !0
}

function c4() {
    const e = Vu.pop();
    ai = e === void 0 ? !0 : e
}

function Me(e, t, r) {
    if (!ai || He === void 0) return;
    let a = Ul.get(e);
    a || Ul.set(e, a = new Map);
    let o = a.get(r);
    o || a.set(r, o = new Set), o.has(He) || (o.add(He), He.deps.push(o), He.options.onTrack && He.options.onTrack({
        effect: He,
        target: e,
        type: t,
        key: r
    }))
}

function Vn(e, t, r, a, o, c) {
    const l = Ul.get(e);
    if (!l) return;
    const f = new Set,
        h = v => {
            v && v.forEach(y => {
                (y !== He || y.allowRecurse) && f.add(y)
            })
        };
    if (t === "clear") l.forEach(h);
    else if (r === "length" && vr(e)) l.forEach((v, y) => {
        (y === "length" || y >= a) && h(v)
    });
    else switch (r !== void 0 && h(l.get(r)), t) {
        case "add":
            vr(e) ? Fu(r) && h(l.get("length")) : (h(l.get(_r)), Yi(e) && h(l.get(Yl)));
            break;
        case "delete":
            vr(e) || (h(l.get(_r)), Yi(e) && h(l.get(Yl)));
            break;
        case "set":
            Yi(e) && h(l.get(_r));
            break
    }
    const g = v => {
        v.options.onTrigger && v.options.onTrigger({
            effect: v,
            target: e,
            key: r,
            type: t,
            newValue: a,
            oldValue: o,
            oldTarget: c
        }), v.options.scheduler ? v.options.scheduler(v) : v()
    };
    f.forEach(g)
}
var xw = uw("__proto__,__v_isRef,__isVue"),
    l4 = new Set(Object.getOwnPropertyNames(Symbol).map(e => Symbol[e]).filter(Hu)),
    Cw = lo(),
    Tw = lo(!1, !0),
    Sw = lo(!0),
    Ow = lo(!0, !0),
    Ws = {};
["includes", "indexOf", "lastIndexOf"].forEach(e => {
    const t = Array.prototype[e];
    Ws[e] = function(...r) {
        const a = _t(this);
        for (let c = 0, l = this.length; c < l; c++) Me(a, "get", c + "");
        const o = t.apply(a, r);
        return o === -1 || o === !1 ? t.apply(a, r.map(_t)) : o
    }
});
["push", "pop", "shift", "unshift", "splice"].forEach(e => {
    const t = Array.prototype[e];
    Ws[e] = function(...r) {
        ww();
        const a = t.apply(this, r);
        return c4(), a
    }
});

function lo(e = !1, t = !1) {
    return function(a, o, c) {
        if (o === "__v_isReactive") return !e;
        if (o === "__v_isReadonly") return e;
        if (o === "__v_raw" && c === (e ? t ? Bw : x4 : t ? kw : A4).get(a)) return a;
        const l = vr(a);
        if (!e && l && oo(Ws, o)) return Reflect.get(Ws, o, c);
        const f = Reflect.get(a, o, c);
        return (Hu(o) ? l4.has(o) : xw(o)) || (e || Me(a, "get", o), t) ? f : Kl(f) ? !l || !Fu(o) ? f.value : f : co(f) ? e ? C4(f) : Ku(f) : f
    }
}
var Gw = u4(),
    Nw = u4(!0);

function u4(e = !1) {
    return function(r, a, o, c) {
        let l = r[a];
        if (!e && (o = _t(o), l = _t(l), !vr(r) && Kl(l) && !Kl(o))) return l.value = o, !0;
        const f = vr(r) && Fu(a) ? Number(a) < r.length : oo(r, a),
            h = Reflect.set(r, a, o, c);
        return r === _t(c) && (f ? s4(o, l) && Vn(r, "set", a, o, l) : Vn(r, "add", a, o)), h
    }
}

function Lw(e, t) {
    const r = oo(e, t),
        a = e[t],
        o = Reflect.deleteProperty(e, t);
    return o && r && Vn(e, "delete", t, void 0, a), o
}

function Iw(e, t) {
    const r = Reflect.has(e, t);
    return (!Hu(t) || !l4.has(t)) && Me(e, "has", t), r
}

function Mw(e) {
    return Me(e, "iterate", vr(e) ? "length" : _r), Reflect.ownKeys(e)
}
var f4 = {
        get: Cw,
        set: Gw,
        deleteProperty: Lw,
        has: Iw,
        ownKeys: Mw
    },
    d4 = {
        get: Sw,
        set(e, t) {
            return console.warn(`Set operation on key "${String(t)}" failed: target is readonly.`, e), !0
        },
        deleteProperty(e, t) {
            return console.warn(`Delete operation on key "${String(t)}" failed: target is readonly.`, e), !0
        }
    };
r4({}, f4, {
    get: Tw,
    set: Nw
});
r4({}, d4, {
    get: Ow
});
var Wu = e => co(e) ? Ku(e) : e,
    Uu = e => co(e) ? C4(e) : e,
    Yu = e => e,
    uo = e => Reflect.getPrototypeOf(e);

function fo(e, t, r = !1, a = !1) {
    e = e.__v_raw;
    const o = _t(e),
        c = _t(t);
    t !== c && !r && Me(o, "get", t), !r && Me(o, "get", c);
    const {
        has: l
    } = uo(o), f = a ? Yu : r ? Uu : Wu;
    if (l.call(o, t)) return f(e.get(t));
    if (l.call(o, c)) return f(e.get(c));
    e !== o && e.get(t)
}

function ho(e, t = !1) {
    const r = this.__v_raw,
        a = _t(r),
        o = _t(e);
    return e !== o && !t && Me(a, "has", e), !t && Me(a, "has", o), e === o ? r.has(e) : r.has(e) || r.has(o)
}

function po(e, t = !1) {
    return e = e.__v_raw, !t && Me(_t(e), "iterate", _r), Reflect.get(e, "size", e)
}

function h4(e) {
    e = _t(e);
    const t = _t(this);
    return uo(t).has.call(t, e) || (t.add(e), Vn(t, "add", e, e)), this
}

function p4(e, t) {
    t = _t(t);
    const r = _t(this),
        {
            has: a,
            get: o
        } = uo(r);
    let c = a.call(r, e);
    c ? w4(r, a, e) : (e = _t(e), c = a.call(r, e));
    const l = o.call(r, e);
    return r.set(e, t), c ? s4(t, l) && Vn(r, "set", e, t, l) : Vn(r, "add", e, t), this
}

function m4(e) {
    const t = _t(this),
        {
            has: r,
            get: a
        } = uo(t);
    let o = r.call(t, e);
    o ? w4(t, r, e) : (e = _t(e), o = r.call(t, e));
    const c = a ? a.call(t, e) : void 0,
        l = t.delete(e);
    return o && Vn(t, "delete", e, void 0, c), l
}

function g4() {
    const e = _t(this),
        t = e.size !== 0,
        r = Yi(e) ? new Map(e) : new Set(e),
        a = e.clear();
    return t && Vn(e, "clear", void 0, void 0, r), a
}

function mo(e, t) {
    return function(a, o) {
        const c = this,
            l = c.__v_raw,
            f = _t(l),
            h = t ? Yu : e ? Uu : Wu;
        return !e && Me(f, "iterate", _r), l.forEach((g, v) => a.call(o, h(g), h(v), c))
    }
}

function vs(e, t, r) {
    return function(...a) {
        const o = this.__v_raw,
            c = _t(o),
            l = Yi(c),
            f = e === "entries" || e === Symbol.iterator && l,
            h = e === "keys" && l,
            g = o[e](...a),
            v = r ? Yu : t ? Uu : Wu;
        return !t && Me(c, "iterate", h ? Yl : _r), {
            next() {
                const {
                    value: y,
                    done: x
                } = g.next();
                return x ? {
                    value: y,
                    done: x
                } : {
                    value: f ? [v(y[0]), v(y[1])] : v(y),
                    done: x
                }
            },
            [Symbol.iterator]() {
                return this
            }
        }
    }
}

function Dn(e) {
    return function(...t) {
        {
            const r = t[0] ? `on key "${t[0]}" ` : "";
            console.warn(`${gw(e)} operation ${r}failed: target is readonly.`, _t(this))
        }
        return e === "delete" ? !1 : this
    }
}
var v4 = {
        get(e) {
            return fo(this, e)
        },
        get size() {
            return po(this)
        },
        has: ho,
        add: h4,
        set: p4,
        delete: m4,
        clear: g4,
        forEach: mo(!1, !1)
    },
    _4 = {
        get(e) {
            return fo(this, e, !1, !0)
        },
        get size() {
            return po(this)
        },
        has: ho,
        add: h4,
        set: p4,
        delete: m4,
        clear: g4,
        forEach: mo(!1, !0)
    },
    b4 = {
        get(e) {
            return fo(this, e, !0)
        },
        get size() {
            return po(this, !0)
        },
        has(e) {
            return ho.call(this, e, !0)
        },
        add: Dn("add"),
        set: Dn("set"),
        delete: Dn("delete"),
        clear: Dn("clear"),
        forEach: mo(!0, !1)
    },
    y4 = {
        get(e) {
            return fo(this, e, !0, !0)
        },
        get size() {
            return po(this, !0)
        },
        has(e) {
            return ho.call(this, e, !0)
        },
        add: Dn("add"),
        set: Dn("set"),
        delete: Dn("delete"),
        clear: Dn("clear"),
        forEach: mo(!0, !0)
    },
    Pw = ["keys", "values", "entries", Symbol.iterator];
Pw.forEach(e => {
    v4[e] = vs(e, !1, !1), b4[e] = vs(e, !0, !1), _4[e] = vs(e, !1, !0), y4[e] = vs(e, !0, !0)
});

function E4(e, t) {
    const r = t ? e ? y4 : _4 : e ? b4 : v4;
    return (a, o, c) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? a : Reflect.get(oo(r, o) && o in a ? r : a, o, c)
}
var Rw = {
        get: E4(!1, !1)
    },
    Dw = {
        get: E4(!0, !1)
    };

function w4(e, t, r) {
    const a = _t(r);
    if (a !== r && t.call(e, a)) {
        const o = a4(e);
        console.warn(`Reactive ${o} contains both the raw and reactive versions of the same object${o==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)
    }
}
var A4 = new WeakMap,
    kw = new WeakMap,
    x4 = new WeakMap,
    Bw = new WeakMap;

function $w(e) {
    switch (e) {
        case "Object":
        case "Array":
            return 1;
        case "Map":
        case "Set":
        case "WeakMap":
        case "WeakSet":
            return 2;
        default:
            return 0
    }
}

function zw(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : $w(a4(e))
}

function Ku(e) {
    return e && e.__v_isReadonly ? e : T4(e, !1, f4, Rw, A4)
}

function C4(e) {
    return T4(e, !0, d4, Dw, x4)
}

function T4(e, t, r, a, o) {
    if (!co(e)) return console.warn(`value cannot be made reactive: ${String(e)}`), e;
    if (e.__v_raw && !(t && e.__v_isReactive)) return e;
    const c = o.get(e);
    if (c) return c;
    const l = zw(e);
    if (l === 0) return e;
    const f = new Proxy(e, l === 2 ? a : r);
    return o.set(e, f), f
}

function _t(e) {
    return e && _t(e.__v_raw) || e
}

function Kl(e) {
    return Boolean(e && e.__v_isRef === !0)
}
Re("nextTick", () => $u);
Re("dispatch", e => Ui.bind(Ui, e));
Re("watch", (e, {
    evaluateLater: t,
    effect: r
}) => (a, o) => {
    let c = t(a),
        l = !0,
        f, h = r(() => c(g => {
            JSON.stringify(g), l ? f = g : queueMicrotask(() => {
                o(g, f), f = g
            }), l = !1
        }));
    e._x_effects.delete(h)
});
Re("store", iw);
Re("data", e => Ah(e));
Re("root", e => io(e));
Re("refs", e => (e._x_refs_proxy || (e._x_refs_proxy = fa(Hw(e))), e._x_refs_proxy));

function Hw(e) {
    let t = [],
        r = e;
    for (; r;) r._x_refs && t.push(r._x_refs), r = r.parentNode;
    return t
}
var pl = {};

function S4(e) {
    return pl[e] || (pl[e] = 0), ++pl[e]
}

function Fw(e, t) {
    return ao(e, r => {
        if (r._x_ids && r._x_ids[t]) return !0
    })
}

function Vw(e, t) {
    e._x_ids || (e._x_ids = {}), e._x_ids[t] || (e._x_ids[t] = S4(t))
}
Re("id", e => (t, r = null) => {
    let a = Fw(e, t),
        o = a ? a._x_ids[t] : S4(t);
    return r ? `${t}-${o}-${r}` : `${t}-${o}`
});
Re("el", e => e);
O4("Focus", "focus", "focus");
O4("Persist", "persist", "persist");

function O4(e, t, r) {
    Re(t, a => Hn(`You can't use [$${directiveName}] without first installing the "${e}" plugin here: https://alpinejs.dev/plugins/${r}`, a))
}

function Ww({
    get: e,
    set: t
}, {
    get: r,
    set: a
}) {
    let o = !0,
        c, l, f = hi(() => {
            let h, g;
            o ? (h = e(), a(h), g = r(), o = !1) : (h = e(), g = r(), l = JSON.stringify(h), JSON.stringify(g), l !== c ? (g = r(), a(h), g = h) : (t(g), h = g)), c = JSON.stringify(h), JSON.stringify(g)
        });
    return () => {
        la(f)
    }
}
xt("modelable", (e, {
    expression: t
}, {
    effect: r,
    evaluateLater: a,
    cleanup: o
}) => {
    let c = a(t),
        l = () => {
            let v;
            return c(y => v = y), v
        },
        f = a(`${t} = __placeholder`),
        h = v => f(() => {}, {
            scope: {
                __placeholder: v
            }
        }),
        g = l();
    h(g), queueMicrotask(() => {
        if (!e._x_model) return;
        e._x_removeModelListeners.default();
        let v = e._x_model.get,
            y = e._x_model.set,
            x = Ww({
                get() {
                    return v()
                },
                set(C) {
                    y(C)
                }
            }, {
                get() {
                    return l()
                },
                set(C) {
                    h(C)
                }
            });
        o(x)
    })
});
var Uw = document.createElement("div");
xt("teleport", (e, {
    modifiers: t,
    expression: r
}, {
    cleanup: a
}) => {
    e.tagName.toLowerCase() !== "template" && Hn("x-teleport can only be used on a <template> tag", e);
    let o = da(() => document.querySelector(r), () => Uw)();
    o || Hn(`Cannot find x-teleport element for selector: "${r}"`);
    let c = e.content.cloneNode(!0).firstElementChild;
    e._x_teleport = c, c._x_teleportBack = e, e._x_forwardEvents && e._x_forwardEvents.forEach(l => {
        c.addEventListener(l, f => {
            f.stopPropagation(), e.dispatchEvent(new f.constructor(f.type, f))
        })
    }), ua(c, {}, e), It(() => {
        t.includes("prepend") ? o.parentNode.insertBefore(c, o) : t.includes("append") ? o.parentNode.insertBefore(c, o.nextSibling) : o.appendChild(c), Fn(c), c._x_ignore = !0
    }), a(() => c.remove())
});
var G4 = () => {};
G4.inline = (e, {
    modifiers: t
}, {
    cleanup: r
}) => {
    t.includes("self") ? e._x_ignoreSelf = !0 : e._x_ignore = !0, r(() => {
        t.includes("self") ? delete e._x_ignoreSelf : delete e._x_ignore
    })
};
xt("ignore", G4);
xt("effect", (e, {
    expression: t
}, {
    effect: r
}) => r(Yt(e, t)));

function jl(e, t, r, a) {
    let o = e,
        c = h => a(h),
        l = {},
        f = (h, g) => v => g(h, v);
    if (r.includes("dot") && (t = Yw(t)), r.includes("camel") && (t = Kw(t)), r.includes("passive") && (l.passive = !0), r.includes("capture") && (l.capture = !0), r.includes("window") && (o = window), r.includes("document") && (o = document), r.includes("debounce")) {
        let h = r[r.indexOf("debounce") + 1] || "invalid-wait",
            g = Us(h.split("ms")[0]) ? Number(h.split("ms")[0]) : 250;
        c = Zh(c, g)
    }
    if (r.includes("throttle")) {
        let h = r[r.indexOf("throttle") + 1] || "invalid-wait",
            g = Us(h.split("ms")[0]) ? Number(h.split("ms")[0]) : 250;
        c = Qh(c, g)
    }
    return r.includes("prevent") && (c = f(c, (h, g) => {
        g.preventDefault(), h(g)
    })), r.includes("stop") && (c = f(c, (h, g) => {
        g.stopPropagation(), h(g)
    })), r.includes("self") && (c = f(c, (h, g) => {
        g.target === e && h(g)
    })), (r.includes("away") || r.includes("outside")) && (o = document, c = f(c, (h, g) => {
        e.contains(g.target) || g.target.isConnected !== !1 && (e.offsetWidth < 1 && e.offsetHeight < 1 || e._x_isShown !== !1 && h(g))
    })), r.includes("once") && (c = f(c, (h, g) => {
        h(g), o.removeEventListener(t, c, l)
    })), c = f(c, (h, g) => {
        qw(t) && Xw(g, r) || h(g)
    }), o.addEventListener(t, c, l), () => {
        o.removeEventListener(t, c, l)
    }
}

function Yw(e) {
    return e.replace(/-/g, ".")
}

function Kw(e) {
    return e.toLowerCase().replace(/-(\w)/g, (t, r) => r.toUpperCase())
}

function Us(e) {
    return !Array.isArray(e) && !isNaN(e)
}

function jw(e) {
    return [" ", "_"].includes(e) ? e : e.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[_\s]/, "-").toLowerCase()
}

function qw(e) {
    return ["keydown", "keyup"].includes(e)
}

function Xw(e, t) {
    let r = t.filter(c => !["window", "document", "prevent", "stop", "once", "capture"].includes(c));
    if (r.includes("debounce")) {
        let c = r.indexOf("debounce");
        r.splice(c, Us((r[c + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1)
    }
    if (r.includes("throttle")) {
        let c = r.indexOf("throttle");
        r.splice(c, Us((r[c + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1)
    }
    if (r.length === 0 || r.length === 1 && Ld(e.key).includes(r[0])) return !1;
    const o = ["ctrl", "shift", "alt", "meta", "cmd", "super"].filter(c => r.includes(c));
    return r = r.filter(c => !o.includes(c)), !(o.length > 0 && o.filter(l => ((l === "cmd" || l === "super") && (l = "meta"), e[`${l}Key`])).length === o.length && Ld(e.key).includes(r[0]))
}

function Ld(e) {
    if (!e) return [];
    e = jw(e);
    let t = {
        ctrl: "control",
        slash: "/",
        space: " ",
        spacebar: " ",
        cmd: "meta",
        esc: "escape",
        up: "arrow-up",
        down: "arrow-down",
        left: "arrow-left",
        right: "arrow-right",
        period: ".",
        equal: "=",
        minus: "-",
        underscore: "_"
    };
    return t[e] = e, Object.keys(t).map(r => {
        if (t[r] === e) return r
    }).filter(r => r)
}
xt("model", (e, {
    modifiers: t,
    expression: r
}, {
    effect: a,
    cleanup: o
}) => {
    let c = e;
    t.includes("parent") && (c = e.parentNode);
    let l = Yt(c, r),
        f;
    typeof r == "string" ? f = Yt(c, `${r} = __placeholder`) : typeof r == "function" && typeof r() == "string" ? f = Yt(c, `${r()} = __placeholder`) : f = () => {};
    let h = () => {
            let x;
            return l(C => x = C), Id(x) ? x.get() : x
        },
        g = x => {
            let C;
            l(L => C = L), Id(C) ? C.set(x) : f(() => {}, {
                scope: {
                    __placeholder: x
                }
            })
        };
    typeof r == "string" && e.type === "radio" && It(() => {
        e.hasAttribute("name") || e.setAttribute("name", r)
    });
    var v = e.tagName.toLowerCase() === "select" || ["checkbox", "radio"].includes(e.type) || t.includes("lazy") ? "change" : "input";
    let y = Ji ? () => {} : jl(e, v, t, x => {
        g(Jw(e, t, x, h()))
    });
    if (t.includes("fill") && [null, ""].includes(h()) && e.dispatchEvent(new Event(v, {})), e._x_removeModelListeners || (e._x_removeModelListeners = {}), e._x_removeModelListeners.default = y, o(() => e._x_removeModelListeners.default()), e.form) {
        let x = jl(e.form, "reset", [], C => {
            $u(() => e._x_model && e._x_model.set(e.value))
        });
        o(() => x())
    }
    e._x_model = {
        get() {
            return h()
        },
        set(x) {
            g(x)
        }
    }, e._x_forceModelUpdate = x => {
        x = x === void 0 ? h() : x, x === void 0 && typeof r == "string" && r.match(/\./) && (x = ""), window.fromModel = !0, It(() => jh(e, "value", x)), delete window.fromModel
    }, a(() => {
        let x = h();
        t.includes("unintrusive") && document.activeElement.isSameNode(e) || e._x_forceModelUpdate(x)
    })
});

function Jw(e, t, r, a) {
    return It(() => {
        var o;
        if (r instanceof CustomEvent && r.detail !== void 0) return (o = r.detail) != null ? o : r.target.value;
        if (e.type === "checkbox")
            if (Array.isArray(a)) {
                let c = t.includes("number") ? ml(r.target.value) : r.target.value;
                return r.target.checked ? a.concat([c]) : a.filter(l => !Zw(l, c))
            } else return r.target.checked;
        else {
            if (e.tagName.toLowerCase() === "select" && e.multiple) return t.includes("number") ? Array.from(r.target.selectedOptions).map(c => {
                let l = c.value || c.text;
                return ml(l)
            }) : Array.from(r.target.selectedOptions).map(c => c.value || c.text); {
                let c = r.target.value;
                return t.includes("number") ? ml(c) : t.includes("trim") ? c.trim() : c
            }
        }
    })
}

function ml(e) {
    let t = e ? parseFloat(e) : null;
    return Qw(t) ? t : e
}

function Zw(e, t) {
    return e == t
}

function Qw(e) {
    return !Array.isArray(e) && !isNaN(e)
}

function Id(e) {
    return e !== null && typeof e == "object" && typeof e.get == "function" && typeof e.set == "function"
}
xt("cloak", e => queueMicrotask(() => It(() => e.removeAttribute(pi("cloak")))));
Vh(() => `[${pi("init")}]`);
xt("init", da((e, {
    expression: t
}, {
    evaluate: r
}) => typeof t == "string" ? !!t.trim() && r(t, {}, !1) : r(t, {}, !1)));
xt("text", (e, {
    expression: t
}, {
    effect: r,
    evaluateLater: a
}) => {
    let o = a(t);
    r(() => {
        o(c => {
            It(() => {
                e.textContent = c
            })
        })
    })
});
xt("html", (e, {
    expression: t
}, {
    effect: r,
    evaluateLater: a
}) => {
    let o = a(t);
    r(() => {
        o(c => {
            It(() => {
                e.innerHTML = c, e._x_ignoreSelf = !0, Fn(e), delete e._x_ignoreSelf
            })
        })
    })
});
Du(Mh(":", Ph(pi("bind:"))));
var N4 = (e, {
    value: t,
    modifiers: r,
    expression: a,
    original: o
}, {
    effect: c
}) => {
    if (!t) {
        let f = {};
        sw(f), Yt(e, a)(g => {
            e4(e, g, o)
        }, {
            scope: f
        });
        return
    }
    if (t === "key") return tA(e, a);
    if (e._x_inlineBindings && e._x_inlineBindings[t] && e._x_inlineBindings[t].extract) return;
    let l = Yt(e, a);
    c(() => l(f => {
        f === void 0 && typeof a == "string" && a.match(/\./) && (f = ""), It(() => jh(e, t, f, r))
    }))
};
N4.inline = (e, {
    value: t,
    modifiers: r,
    expression: a
}) => {
    !t || (e._x_inlineBindings || (e._x_inlineBindings = {}), e._x_inlineBindings[t] = {
        expression: a,
        extract: !1
    })
};
xt("bind", N4);

function tA(e, t) {
    e._x_keyExpression = t
}
Fh(() => `[${pi("data")}]`);
xt("data", da((e, {
    expression: t
}, {
    cleanup: r
}) => {
    t = t === "" ? "{}" : t;
    let a = {};
    kl(a, e);
    let o = {};
    cw(o, a);
    let c = gr(e, t, {
        scope: o
    });
    (c === void 0 || c === !0) && (c = {}), kl(c, e);
    let l = di(c);
    xh(l);
    let f = ua(e, l);
    l.init && gr(e, l.init), r(() => {
        l.destroy && gr(e, l.destroy), f()
    })
}));
xt("show", (e, {
    modifiers: t,
    expression: r
}, {
    effect: a
}) => {
    let o = Yt(e, r);
    e._x_doHide || (e._x_doHide = () => {
        It(() => {
            e.style.setProperty("display", "none", t.includes("important") ? "important" : void 0)
        })
    }), e._x_doShow || (e._x_doShow = () => {
        It(() => {
            e.style.length === 1 && e.style.display === "none" ? e.removeAttribute("style") : e.style.removeProperty("display")
        })
    });
    let c = () => {
            e._x_doHide(), e._x_isShown = !1
        },
        l = () => {
            e._x_doShow(), e._x_isShown = !0
        },
        f = () => setTimeout(l),
        h = Vl(y => y ? l() : c(), y => {
            typeof e._x_toggleAndCascadeWithTransitions == "function" ? e._x_toggleAndCascadeWithTransitions(e, y, l, c) : y ? f() : c()
        }),
        g, v = !0;
    a(() => o(y => {
        !v && y === g || (t.includes("immediate") && (y ? f() : c()), h(y), g = y, v = !1)
    }))
});
xt("for", (e, {
    expression: t
}, {
    effect: r,
    cleanup: a
}) => {
    let o = nA(t),
        c = Yt(e, o.items),
        l = Yt(e, e._x_keyExpression || "index");
    e._x_prevKeys = [], e._x_lookup = {}, r(() => eA(e, o, c, l)), a(() => {
        Object.values(e._x_lookup).forEach(f => f.remove()), delete e._x_prevKeys, delete e._x_lookup
    })
});

function eA(e, t, r, a) {
    let o = l => typeof l == "object" && !Array.isArray(l),
        c = e;
    r(l => {
        rA(l) && l >= 0 && (l = Array.from(Array(l).keys(), N => N + 1)), l === void 0 && (l = []);
        let f = e._x_lookup,
            h = e._x_prevKeys,
            g = [],
            v = [];
        if (o(l)) l = Object.entries(l).map(([N, R]) => {
            let $ = Md(t, R, N, l);
            a(k => v.push(k), {
                scope: {
                    index: N,
                    ...$
                }
            }), g.push($)
        });
        else
            for (let N = 0; N < l.length; N++) {
                let R = Md(t, l[N], N, l);
                a($ => v.push($), {
                    scope: {
                        index: N,
                        ...R
                    }
                }), g.push(R)
            }
        let y = [],
            x = [],
            C = [],
            L = [];
        for (let N = 0; N < h.length; N++) {
            let R = h[N];
            v.indexOf(R) === -1 && C.push(R)
        }
        h = h.filter(N => !C.includes(N));
        let P = "template";
        for (let N = 0; N < v.length; N++) {
            let R = v[N],
                $ = h.indexOf(R);
            if ($ === -1) h.splice(N, 0, R), y.push([P, N]);
            else if ($ !== N) {
                let k = h.splice(N, 1)[0],
                    B = h.splice($ - 1, 1)[0];
                h.splice(N, 0, B), h.splice($, 0, k), x.push([k, B])
            } else L.push(R);
            P = R
        }
        for (let N = 0; N < C.length; N++) {
            let R = C[N];
            f[R]._x_effects && f[R]._x_effects.forEach(mh), f[R].remove(), f[R] = null, delete f[R]
        }
        for (let N = 0; N < x.length; N++) {
            let [R, $] = x[N], k = f[R], B = f[$], F = document.createElement("div");
            It(() => {
                B || Hn('x-for ":key" is undefined or invalid', c), B.after(F), k.after(B), B._x_currentIfEl && B.after(B._x_currentIfEl), F.before(k), k._x_currentIfEl && k.after(k._x_currentIfEl), F.remove()
            }), B._x_refreshXForScope(g[v.indexOf($)])
        }
        for (let N = 0; N < y.length; N++) {
            let [R, $] = y[N], k = R === "template" ? c : f[R];
            k._x_currentIfEl && (k = k._x_currentIfEl);
            let B = g[$],
                F = v[$],
                q = document.importNode(c.content, !0).firstElementChild,
                J = di(B);
            ua(q, J, c), q._x_refreshXForScope = lt => {
                Object.entries(lt).forEach(([at, ht]) => {
                    J[at] = ht
                })
            }, It(() => {
                k.after(q), Fn(q)
            }), typeof F == "object" && Hn("x-for key cannot be an object, it must be a string or an integer", c), f[F] = q
        }
        for (let N = 0; N < L.length; N++) f[L[N]]._x_refreshXForScope(g[v.indexOf(L[N])]);
        c._x_prevKeys = v
    })
}

function nA(e) {
    let t = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/,
        r = /^\s*\(|\)\s*$/g,
        a = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,
        o = e.match(a);
    if (!o) return;
    let c = {};
    c.items = o[2].trim();
    let l = o[1].replace(r, "").trim(),
        f = l.match(t);
    return f ? (c.item = l.replace(t, "").trim(), c.index = f[1].trim(), f[2] && (c.collection = f[2].trim())) : c.item = l, c
}

function Md(e, t, r, a) {
    let o = {};
    return /^\[.*\]$/.test(e.item) && Array.isArray(t) ? e.item.replace("[", "").replace("]", "").split(",").map(l => l.trim()).forEach((l, f) => {
        o[l] = t[f]
    }) : /^\{.*\}$/.test(e.item) && !Array.isArray(t) && typeof t == "object" ? e.item.replace("{", "").replace("}", "").split(",").map(l => l.trim()).forEach(l => {
        o[l] = t[l]
    }) : o[e.item] = t, e.index && (o[e.index] = r), e.collection && (o[e.collection] = a), o
}

function rA(e) {
    return !Array.isArray(e) && !isNaN(e)
}

function L4() {}
L4.inline = (e, {
    expression: t
}, {
    cleanup: r
}) => {
    let a = io(e);
    a._x_refs || (a._x_refs = {}), a._x_refs[t] = e, r(() => delete a._x_refs[t])
};
xt("ref", L4);
xt("if", (e, {
    expression: t
}, {
    effect: r,
    cleanup: a
}) => {
    let o = Yt(e, t),
        c = () => {
            if (e._x_currentIfEl) return e._x_currentIfEl;
            let f = e.content.cloneNode(!0).firstElementChild;
            return ua(f, {}, e), It(() => {
                e.after(f), Fn(f)
            }), e._x_currentIfEl = f, e._x_undoIf = () => {
                zn(f, h => {
                    h._x_effects && h._x_effects.forEach(mh)
                }), f.remove(), delete e._x_currentIfEl
            }, f
        },
        l = () => {
            !e._x_undoIf || (e._x_undoIf(), delete e._x_undoIf)
        };
    r(() => o(f => {
        f ? c() : l()
    })), a(() => e._x_undoIf && e._x_undoIf())
});
xt("id", (e, {
    expression: t
}, {
    evaluate: r
}) => {
    r(t).forEach(o => Vw(e, o))
});
Du(Mh("@", Ph(pi("on:"))));
xt("on", da((e, {
    value: t,
    modifiers: r,
    expression: a
}, {
    cleanup: o
}) => {
    let c = a ? Yt(e, a) : () => {};
    e.tagName.toLowerCase() === "template" && (e._x_forwardEvents || (e._x_forwardEvents = []), e._x_forwardEvents.includes(t) || e._x_forwardEvents.push(t));
    let l = jl(e, t, r, f => {
        c(() => {}, {
            scope: {
                $event: f
            },
            params: [f]
        })
    });
    o(() => l())
}));
go("Collapse", "collapse", "collapse");
go("Intersect", "intersect", "intersect");
go("Focus", "trap", "focus");
go("Mask", "mask", "mask");

function go(e, t, r) {
    xt(t, a => Hn(`You can't use [x-${t}] without first installing the "${e}" plugin here: https://alpinejs.dev/plugins/${r}`, a))
}
ha.setEvaluator(Gh);
ha.setReactivityEngine({
    reactive: Ku,
    effect: _w,
    release: bw,
    raw: _t
});
var iA = ha,
    vo = iA;

function I4(e, t) {
    return function() {
        return e.apply(t, arguments)
    }
}
const {
    toString: aA
} = Object.prototype, {
    getPrototypeOf: ju
} = Object, _o = (e => t => {
    const r = aA.call(t);
    return e[r] || (e[r] = r.slice(8, -1).toLowerCase())
})(Object.create(null)), je = e => (e = e.toLowerCase(), t => _o(t) === e), bo = e => t => typeof t === e, {
    isArray: mi
} = Array, Zi = bo("undefined");

function sA(e) {
    return e !== null && !Zi(e) && e.constructor !== null && !Zi(e.constructor) && xe(e.constructor.isBuffer) && e.constructor.isBuffer(e)
}
const M4 = je("ArrayBuffer");

function oA(e) {
    let t;
    return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && M4(e.buffer), t
}
const cA = bo("string"),
    xe = bo("function"),
    P4 = bo("number"),
    yo = e => e !== null && typeof e == "object",
    lA = e => e === !0 || e === !1,
    Ls = e => {
        if (_o(e) !== "object") return !1;
        const t = ju(e);
        return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e)
    },
    uA = je("Date"),
    fA = je("File"),
    dA = je("Blob"),
    hA = je("FileList"),
    pA = e => yo(e) && xe(e.pipe),
    mA = e => {
        let t;
        return e && (typeof FormData == "function" && e instanceof FormData || xe(e.append) && ((t = _o(e)) === "formdata" || t === "object" && xe(e.toString) && e.toString() === "[object FormData]"))
    },
    gA = je("URLSearchParams"),
    vA = e => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");

function pa(e, t, {
    allOwnKeys: r = !1
} = {}) {
    if (e === null || typeof e > "u") return;
    let a, o;
    if (typeof e != "object" && (e = [e]), mi(e))
        for (a = 0, o = e.length; a < o; a++) t.call(null, e[a], a, e);
    else {
        const c = r ? Object.getOwnPropertyNames(e) : Object.keys(e),
            l = c.length;
        let f;
        for (a = 0; a < l; a++) f = c[a], t.call(null, e[f], f, e)
    }
}

function R4(e, t) {
    t = t.toLowerCase();
    const r = Object.keys(e);
    let a = r.length,
        o;
    for (; a-- > 0;)
        if (o = r[a], t === o.toLowerCase()) return o;
    return null
}
const D4 = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(),
    k4 = e => !Zi(e) && e !== D4;

function ql() {
    const {
        caseless: e
    } = k4(this) && this || {}, t = {}, r = (a, o) => {
        const c = e && R4(t, o) || o;
        Ls(t[c]) && Ls(a) ? t[c] = ql(t[c], a) : Ls(a) ? t[c] = ql({}, a) : mi(a) ? t[c] = a.slice() : t[c] = a
    };
    for (let a = 0, o = arguments.length; a < o; a++) arguments[a] && pa(arguments[a], r);
    return t
}
const _A = (e, t, r, {
        allOwnKeys: a
    } = {}) => (pa(t, (o, c) => {
        r && xe(o) ? e[c] = I4(o, r) : e[c] = o
    }, {
        allOwnKeys: a
    }), e),
    bA = e => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
    yA = (e, t, r, a) => {
        e.prototype = Object.create(t.prototype, a), e.prototype.constructor = e, Object.defineProperty(e, "super", {
            value: t.prototype
        }), r && Object.assign(e.prototype, r)
    },
    EA = (e, t, r, a) => {
        let o, c, l;
        const f = {};
        if (t = t || {}, e == null) return t;
        do {
            for (o = Object.getOwnPropertyNames(e), c = o.length; c-- > 0;) l = o[c], (!a || a(l, e, t)) && !f[l] && (t[l] = e[l], f[l] = !0);
            e = r !== !1 && ju(e)
        } while (e && (!r || r(e, t)) && e !== Object.prototype);
        return t
    },
    wA = (e, t, r) => {
        e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
        const a = e.indexOf(t, r);
        return a !== -1 && a === r
    },
    AA = e => {
        if (!e) return null;
        if (mi(e)) return e;
        let t = e.length;
        if (!P4(t)) return null;
        const r = new Array(t);
        for (; t-- > 0;) r[t] = e[t];
        return r
    },
    xA = (e => t => e && t instanceof e)(typeof Uint8Array < "u" && ju(Uint8Array)),
    CA = (e, t) => {
        const a = (e && e[Symbol.iterator]).call(e);
        let o;
        for (;
            (o = a.next()) && !o.done;) {
            const c = o.value;
            t.call(e, c[0], c[1])
        }
    },
    TA = (e, t) => {
        let r;
        const a = [];
        for (;
            (r = e.exec(t)) !== null;) a.push(r);
        return a
    },
    SA = je("HTMLFormElement"),
    OA = e => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(r, a, o) {
        return a.toUpperCase() + o
    }),
    Pd = (({
        hasOwnProperty: e
    }) => (t, r) => e.call(t, r))(Object.prototype),
    GA = je("RegExp"),
    B4 = (e, t) => {
        const r = Object.getOwnPropertyDescriptors(e),
            a = {};
        pa(r, (o, c) => {
            t(o, c, e) !== !1 && (a[c] = o)
        }), Object.defineProperties(e, a)
    },
    NA = e => {
        B4(e, (t, r) => {
            if (xe(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1) return !1;
            const a = e[r];
            if (!!xe(a)) {
                if (t.enumerable = !1, "writable" in t) {
                    t.writable = !1;
                    return
                }
                t.set || (t.set = () => {
                    throw Error("Can not rewrite read-only method '" + r + "'")
                })
            }
        })
    },
    LA = (e, t) => {
        const r = {},
            a = o => {
                o.forEach(c => {
                    r[c] = !0
                })
            };
        return mi(e) ? a(e) : a(String(e).split(t)), r
    },
    IA = () => {},
    MA = (e, t) => (e = +e, Number.isFinite(e) ? e : t),
    gl = "abcdefghijklmnopqrstuvwxyz",
    Rd = "0123456789",
    $4 = {
        DIGIT: Rd,
        ALPHA: gl,
        ALPHA_DIGIT: gl + gl.toUpperCase() + Rd
    },
    PA = (e = 16, t = $4.ALPHA_DIGIT) => {
        let r = "";
        const {
            length: a
        } = t;
        for (; e--;) r += t[Math.random() * a | 0];
        return r
    };

function RA(e) {
    return !!(e && xe(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator])
}
const DA = e => {
        const t = new Array(10),
            r = (a, o) => {
                if (yo(a)) {
                    if (t.indexOf(a) >= 0) return;
                    if (!("toJSON" in a)) {
                        t[o] = a;
                        const c = mi(a) ? [] : {};
                        return pa(a, (l, f) => {
                            const h = r(l, o + 1);
                            !Zi(h) && (c[f] = h)
                        }), t[o] = void 0, c
                    }
                }
                return a
            };
        return r(e, 0)
    },
    kA = je("AsyncFunction"),
    BA = e => e && (yo(e) || xe(e)) && xe(e.then) && xe(e.catch),
    S = {
        isArray: mi,
        isArrayBuffer: M4,
        isBuffer: sA,
        isFormData: mA,
        isArrayBufferView: oA,
        isString: cA,
        isNumber: P4,
        isBoolean: lA,
        isObject: yo,
        isPlainObject: Ls,
        isUndefined: Zi,
        isDate: uA,
        isFile: fA,
        isBlob: dA,
        isRegExp: GA,
        isFunction: xe,
        isStream: pA,
        isURLSearchParams: gA,
        isTypedArray: xA,
        isFileList: hA,
        forEach: pa,
        merge: ql,
        extend: _A,
        trim: vA,
        stripBOM: bA,
        inherits: yA,
        toFlatObject: EA,
        kindOf: _o,
        kindOfTest: je,
        endsWith: wA,
        toArray: AA,
        forEachEntry: CA,
        matchAll: TA,
        isHTMLForm: SA,
        hasOwnProperty: Pd,
        hasOwnProp: Pd,
        reduceDescriptors: B4,
        freezeMethods: NA,
        toObjectSet: LA,
        toCamelCase: OA,
        noop: IA,
        toFiniteNumber: MA,
        findKey: R4,
        global: D4,
        isContextDefined: k4,
        ALPHABET: $4,
        generateString: PA,
        isSpecCompliantForm: RA,
        toJSONObject: DA,
        isAsyncFn: kA,
        isThenable: BA
    };

function st(e, t, r, a, o) {
    Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), a && (this.request = a), o && (this.response = o)
}
S.inherits(st, Error, {
    toJSON: function() {
        return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: S.toJSONObject(this.config),
            code: this.code,
            status: this.response && this.response.status ? this.response.status : null
        }
    }
});
const z4 = st.prototype,
    H4 = {};
["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(e => {
    H4[e] = {
        value: e
    }
});
Object.defineProperties(st, H4);
Object.defineProperty(z4, "isAxiosError", {
    value: !0
});
st.from = (e, t, r, a, o, c) => {
    const l = Object.create(z4);
    return S.toFlatObject(e, l, function(h) {
        return h !== Error.prototype
    }, f => f !== "isAxiosError"), st.call(l, e.message, t, r, a, o), l.cause = e, l.name = e.name, c && Object.assign(l, c), l
};
const $A = null;

function Xl(e) {
    return S.isPlainObject(e) || S.isArray(e)
}

function F4(e) {
    return S.endsWith(e, "[]") ? e.slice(0, -2) : e
}

function Dd(e, t, r) {
    return e ? e.concat(t).map(function(o, c) {
        return o = F4(o), !r && c ? "[" + o + "]" : o
    }).join(r ? "." : "") : t
}

function zA(e) {
    return S.isArray(e) && !e.some(Xl)
}
const HA = S.toFlatObject(S, {}, null, function(t) {
    return /^is[A-Z]/.test(t)
});

function Eo(e, t, r) {
    if (!S.isObject(e)) throw new TypeError("target must be an object");
    t = t || new FormData, r = S.toFlatObject(r, {
        metaTokens: !0,
        dots: !1,
        indexes: !1
    }, !1, function(P, N) {
        return !S.isUndefined(N[P])
    });
    const a = r.metaTokens,
        o = r.visitor || v,
        c = r.dots,
        l = r.indexes,
        h = (r.Blob || typeof Blob < "u" && Blob) && S.isSpecCompliantForm(t);
    if (!S.isFunction(o)) throw new TypeError("visitor must be a function");

    function g(L) {
        if (L === null) return "";
        if (S.isDate(L)) return L.toISOString();
        if (!h && S.isBlob(L)) throw new st("Blob is not supported. Use a Buffer instead.");
        return S.isArrayBuffer(L) || S.isTypedArray(L) ? h && typeof Blob == "function" ? new Blob([L]) : Buffer.from(L) : L
    }

    function v(L, P, N) {
        let R = L;
        if (L && !N && typeof L == "object") {
            if (S.endsWith(P, "{}")) P = a ? P : P.slice(0, -2), L = JSON.stringify(L);
            else if (S.isArray(L) && zA(L) || (S.isFileList(L) || S.endsWith(P, "[]")) && (R = S.toArray(L))) return P = F4(P), R.forEach(function(k, B) {
                !(S.isUndefined(k) || k === null) && t.append(l === !0 ? Dd([P], B, c) : l === null ? P : P + "[]", g(k))
            }), !1
        }
        return Xl(L) ? !0 : (t.append(Dd(N, P, c), g(L)), !1)
    }
    const y = [],
        x = Object.assign(HA, {
            defaultVisitor: v,
            convertValue: g,
            isVisitable: Xl
        });

    function C(L, P) {
        if (!S.isUndefined(L)) {
            if (y.indexOf(L) !== -1) throw Error("Circular reference detected in " + P.join("."));
            y.push(L), S.forEach(L, function(R, $) {
                (!(S.isUndefined(R) || R === null) && o.call(t, R, S.isString($) ? $.trim() : $, P, x)) === !0 && C(R, P ? P.concat($) : [$])
            }), y.pop()
        }
    }
    if (!S.isObject(e)) throw new TypeError("data must be an object");
    return C(e), t
}

function kd(e) {
    const t = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
        "%00": "\0"
    };
    return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(a) {
        return t[a]
    })
}

function qu(e, t) {
    this._pairs = [], e && Eo(e, this, t)
}
const V4 = qu.prototype;
V4.append = function(t, r) {
    this._pairs.push([t, r])
};
V4.toString = function(t) {
    const r = t ? function(a) {
        return t.call(this, a, kd)
    } : kd;
    return this._pairs.map(function(o) {
        return r(o[0]) + "=" + r(o[1])
    }, "").join("&")
};

function FA(e) {
    return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
}

function W4(e, t, r) {
    if (!t) return e;
    const a = r && r.encode || FA,
        o = r && r.serialize;
    let c;
    if (o ? c = o(t, r) : c = S.isURLSearchParams(t) ? t.toString() : new qu(t, r).toString(a), c) {
        const l = e.indexOf("#");
        l !== -1 && (e = e.slice(0, l)), e += (e.indexOf("?") === -1 ? "?" : "&") + c
    }
    return e
}
class VA {
    constructor() {
        this.handlers = []
    }
    use(t, r, a) {
        return this.handlers.push({
            fulfilled: t,
            rejected: r,
            synchronous: a ? a.synchronous : !1,
            runWhen: a ? a.runWhen : null
        }), this.handlers.length - 1
    }
    eject(t) {
        this.handlers[t] && (this.handlers[t] = null)
    }
    clear() {
        this.handlers && (this.handlers = [])
    }
    forEach(t) {
        S.forEach(this.handlers, function(a) {
            a !== null && t(a)
        })
    }
}
const Bd = VA,
    U4 = {
        silentJSONParsing: !0,
        forcedJSONParsing: !0,
        clarifyTimeoutError: !1
    },
    WA = typeof URLSearchParams < "u" ? URLSearchParams : qu,
    UA = typeof FormData < "u" ? FormData : null,
    YA = typeof Blob < "u" ? Blob : null,
    KA = (() => {
        let e;
        return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u"
    })(),
    jA = (() => typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(),
    Ve = {
        isBrowser: !0,
        classes: {
            URLSearchParams: WA,
            FormData: UA,
            Blob: YA
        },
        isStandardBrowserEnv: KA,
        isStandardBrowserWebWorkerEnv: jA,
        protocols: ["http", "https", "file", "blob", "url", "data"]
    };

function qA(e, t) {
    return Eo(e, new Ve.classes.URLSearchParams, Object.assign({
        visitor: function(r, a, o, c) {
            return Ve.isNode && S.isBuffer(r) ? (this.append(a, r.toString("base64")), !1) : c.defaultVisitor.apply(this, arguments)
        }
    }, t))
}

function XA(e) {
    return S.matchAll(/\w+|\[(\w*)]/g, e).map(t => t[0] === "[]" ? "" : t[1] || t[0])
}

function JA(e) {
    const t = {},
        r = Object.keys(e);
    let a;
    const o = r.length;
    let c;
    for (a = 0; a < o; a++) c = r[a], t[c] = e[c];
    return t
}

function Y4(e) {
    function t(r, a, o, c) {
        let l = r[c++];
        const f = Number.isFinite(+l),
            h = c >= r.length;
        return l = !l && S.isArray(o) ? o.length : l, h ? (S.hasOwnProp(o, l) ? o[l] = [o[l], a] : o[l] = a, !f) : ((!o[l] || !S.isObject(o[l])) && (o[l] = []), t(r, a, o[l], c) && S.isArray(o[l]) && (o[l] = JA(o[l])), !f)
    }
    if (S.isFormData(e) && S.isFunction(e.entries)) {
        const r = {};
        return S.forEachEntry(e, (a, o) => {
            t(XA(a), o, r, 0)
        }), r
    }
    return null
}
const ZA = {
    "Content-Type": void 0
};

function QA(e, t, r) {
    if (S.isString(e)) try {
        return (t || JSON.parse)(e), S.trim(e)
    } catch (a) {
        if (a.name !== "SyntaxError") throw a
    }
    return (r || JSON.stringify)(e)
}
const wo = {
    transitional: U4,
    adapter: ["xhr", "http"],
    transformRequest: [function(t, r) {
        const a = r.getContentType() || "",
            o = a.indexOf("application/json") > -1,
            c = S.isObject(t);
        if (c && S.isHTMLForm(t) && (t = new FormData(t)), S.isFormData(t)) return o && o ? JSON.stringify(Y4(t)) : t;
        if (S.isArrayBuffer(t) || S.isBuffer(t) || S.isStream(t) || S.isFile(t) || S.isBlob(t)) return t;
        if (S.isArrayBufferView(t)) return t.buffer;
        if (S.isURLSearchParams(t)) return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
        let f;
        if (c) {
            if (a.indexOf("application/x-www-form-urlencoded") > -1) return qA(t, this.formSerializer).toString();
            if ((f = S.isFileList(t)) || a.indexOf("multipart/form-data") > -1) {
                const h = this.env && this.env.FormData;
                return Eo(f ? {
                    "files[]": t
                } : t, h && new h, this.formSerializer)
            }
        }
        return c || o ? (r.setContentType("application/json", !1), QA(t)) : t
    }],
    transformResponse: [function(t) {
        const r = this.transitional || wo.transitional,
            a = r && r.forcedJSONParsing,
            o = this.responseType === "json";
        if (t && S.isString(t) && (a && !this.responseType || o)) {
            const l = !(r && r.silentJSONParsing) && o;
            try {
                return JSON.parse(t)
            } catch (f) {
                if (l) throw f.name === "SyntaxError" ? st.from(f, st.ERR_BAD_RESPONSE, this, null, this.response) : f
            }
        }
        return t
    }],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
        FormData: Ve.classes.FormData,
        Blob: Ve.classes.Blob
    },
    validateStatus: function(t) {
        return t >= 200 && t < 300
    },
    headers: {
        common: {
            Accept: "application/json, text/plain, */*"
        }
    }
};
S.forEach(["delete", "get", "head"], function(t) {
    wo.headers[t] = {}
});
S.forEach(["post", "put", "patch"], function(t) {
    wo.headers[t] = S.merge(ZA)
});
const Xu = wo,
    tx = S.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]),
    ex = e => {
        const t = {};
        let r, a, o;
        return e && e.split(`
`).forEach(function(l) {
            o = l.indexOf(":"), r = l.substring(0, o).trim().toLowerCase(), a = l.substring(o + 1).trim(), !(!r || t[r] && tx[r]) && (r === "set-cookie" ? t[r] ? t[r].push(a) : t[r] = [a] : t[r] = t[r] ? t[r] + ", " + a : a)
        }), t
    },
    $d = Symbol("internals");

function $i(e) {
    return e && String(e).trim().toLowerCase()
}

function Is(e) {
    return e === !1 || e == null ? e : S.isArray(e) ? e.map(Is) : String(e)
}

function nx(e) {
    const t = Object.create(null),
        r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let a;
    for (; a = r.exec(e);) t[a[1]] = a[2];
    return t
}
const rx = e => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());

function vl(e, t, r, a, o) {
    if (S.isFunction(a)) return a.call(this, t, r);
    if (o && (t = r), !!S.isString(t)) {
        if (S.isString(a)) return t.indexOf(a) !== -1;
        if (S.isRegExp(a)) return a.test(t)
    }
}

function ix(e) {
    return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, a) => r.toUpperCase() + a)
}

function ax(e, t) {
    const r = S.toCamelCase(" " + t);
    ["get", "set", "has"].forEach(a => {
        Object.defineProperty(e, a + r, {
            value: function(o, c, l) {
                return this[a].call(this, t, o, c, l)
            },
            configurable: !0
        })
    })
}
class Ao {
    constructor(t) {
        t && this.set(t)
    }
    set(t, r, a) {
        const o = this;

        function c(f, h, g) {
            const v = $i(h);
            if (!v) throw new Error("header name must be a non-empty string");
            const y = S.findKey(o, v);
            (!y || o[y] === void 0 || g === !0 || g === void 0 && o[y] !== !1) && (o[y || h] = Is(f))
        }
        const l = (f, h) => S.forEach(f, (g, v) => c(g, v, h));
        return S.isPlainObject(t) || t instanceof this.constructor ? l(t, r) : S.isString(t) && (t = t.trim()) && !rx(t) ? l(ex(t), r) : t != null && c(r, t, a), this
    }
    get(t, r) {
        if (t = $i(t), t) {
            const a = S.findKey(this, t);
            if (a) {
                const o = this[a];
                if (!r) return o;
                if (r === !0) return nx(o);
                if (S.isFunction(r)) return r.call(this, o, a);
                if (S.isRegExp(r)) return r.exec(o);
                throw new TypeError("parser must be boolean|regexp|function")
            }
        }
    }
    has(t, r) {
        if (t = $i(t), t) {
            const a = S.findKey(this, t);
            return !!(a && this[a] !== void 0 && (!r || vl(this, this[a], a, r)))
        }
        return !1
    }
    delete(t, r) {
        const a = this;
        let o = !1;

        function c(l) {
            if (l = $i(l), l) {
                const f = S.findKey(a, l);
                f && (!r || vl(a, a[f], f, r)) && (delete a[f], o = !0)
            }
        }
        return S.isArray(t) ? t.forEach(c) : c(t), o
    }
    clear(t) {
        const r = Object.keys(this);
        let a = r.length,
            o = !1;
        for (; a--;) {
            const c = r[a];
            (!t || vl(this, this[c], c, t, !0)) && (delete this[c], o = !0)
        }
        return o
    }
    normalize(t) {
        const r = this,
            a = {};
        return S.forEach(this, (o, c) => {
            const l = S.findKey(a, c);
            if (l) {
                r[l] = Is(o), delete r[c];
                return
            }
            const f = t ? ix(c) : String(c).trim();
            f !== c && delete r[c], r[f] = Is(o), a[f] = !0
        }), this
    }
    concat(...t) {
        return this.constructor.concat(this, ...t)
    }
    toJSON(t) {
        const r = Object.create(null);
        return S.forEach(this, (a, o) => {
            a != null && a !== !1 && (r[o] = t && S.isArray(a) ? a.join(", ") : a)
        }), r
    }[Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]()
    }
    toString() {
        return Object.entries(this.toJSON()).map(([t, r]) => t + ": " + r).join(`
`)
    }
    get[Symbol.toStringTag]() {
        return "AxiosHeaders"
    }
    static from(t) {
        return t instanceof this ? t : new this(t)
    }
    static concat(t, ...r) {
        const a = new this(t);
        return r.forEach(o => a.set(o)), a
    }
    static accessor(t) {
        const a = (this[$d] = this[$d] = {
                accessors: {}
            }).accessors,
            o = this.prototype;

        function c(l) {
            const f = $i(l);
            a[f] || (ax(o, l), a[f] = !0)
        }
        return S.isArray(t) ? t.forEach(c) : c(t), this
    }
}
Ao.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
S.freezeMethods(Ao.prototype);
S.freezeMethods(Ao);
const dn = Ao;

function _l(e, t) {
    const r = this || Xu,
        a = t || r,
        o = dn.from(a.headers);
    let c = a.data;
    return S.forEach(e, function(f) {
        c = f.call(r, c, o.normalize(), t ? t.status : void 0)
    }), o.normalize(), c
}

function K4(e) {
    return !!(e && e.__CANCEL__)
}

function ma(e, t, r) {
    st.call(this, e == null ? "canceled" : e, st.ERR_CANCELED, t, r), this.name = "CanceledError"
}
S.inherits(ma, st, {
    __CANCEL__: !0
});

function sx(e, t, r) {
    const a = r.config.validateStatus;
    !r.status || !a || a(r.status) ? e(r) : t(new st("Request failed with status code " + r.status, [st.ERR_BAD_REQUEST, st.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4], r.config, r.request, r))
}
const ox = Ve.isStandardBrowserEnv ? function() {
    return {
        write: function(r, a, o, c, l, f) {
            const h = [];
            h.push(r + "=" + encodeURIComponent(a)), S.isNumber(o) && h.push("expires=" + new Date(o).toGMTString()), S.isString(c) && h.push("path=" + c), S.isString(l) && h.push("domain=" + l), f === !0 && h.push("secure"), document.cookie = h.join("; ")
        },
        read: function(r) {
            const a = document.cookie.match(new RegExp("(^|;\\s*)(" + r + ")=([^;]*)"));
            return a ? decodeURIComponent(a[3]) : null
        },
        remove: function(r) {
            this.write(r, "", Date.now() - 864e5)
        }
    }
}() : function() {
    return {
        write: function() {},
        read: function() {
            return null
        },
        remove: function() {}
    }
}();

function cx(e) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
}

function lx(e, t) {
    return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
}

function j4(e, t) {
    return e && !cx(t) ? lx(e, t) : t
}
const ux = Ve.isStandardBrowserEnv ? function() {
    const t = /(msie|trident)/i.test(navigator.userAgent),
        r = document.createElement("a");
    let a;


    return a = o(window.location.href),
        function(l) {
            const f = S.isString(l) ? o(l) : l;
            return f.protocol === a.protocol && f.host === a.host
        }
}() : function() {
    return function() {
        return !0
    }
}();

function fx(e) {
    const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
    return t && t[1] || ""
}

function dx(e, t) {
    e = e || 10;
    const r = new Array(e),
        a = new Array(e);
    let o = 0,
        c = 0,
        l;
    return t = t !== void 0 ? t : 1e3,
        function(h) {
            const g = Date.now(),
                v = a[c];
            l || (l = g), r[o] = h, a[o] = g;
            let y = c,
                x = 0;
            for (; y !== o;) x += r[y++], y = y % e;
            if (o = (o + 1) % e, o === c && (c = (c + 1) % e), g - l < t) return;
            const C = v && g - v;
            return C ? Math.round(x * 1e3 / C) : void 0
        }
}

function zd(e, t) {
    let r = 0;
    const a = dx(50, 250);
    return o => {
        const c = o.loaded,
            l = o.lengthComputable ? o.total : void 0,
            f = c - r,
            h = a(f),
            g = c <= l;
        r = c;
        const v = {
            loaded: c,
            total: l,
            progress: l ? c / l : void 0,
            bytes: f,
            rate: h || void 0,
            estimated: h && l && g ? (l - c) / h : void 0,
            event: o
        };
        v[t ? "download" : "upload"] = !0, e(v)
    }
}
const hx = typeof XMLHttpRequest < "u",
    px = hx && function(e) {
        return new Promise(function(r, a) {
            let o = e.data;
            const c = dn.from(e.headers).normalize(),
                l = e.responseType;
            let f;

            function h() {
                e.cancelToken && e.cancelToken.unsubscribe(f), e.signal && e.signal.removeEventListener("abort", f)
            }
            S.isFormData(o) && (Ve.isStandardBrowserEnv || Ve.isStandardBrowserWebWorkerEnv ? c.setContentType(!1) : c.setContentType("multipart/form-data;", !1));
            let g = new XMLHttpRequest;
            if (e.auth) {
                const C = e.auth.username || "",
                    L = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
                c.set("Authorization", "Basic " + btoa(C + ":" + L))
            }
            const v = j4(e.baseURL, e.url);
            g.open(e.method.toUpperCase(), W4(v, e.params, e.paramsSerializer), !0), g.timeout = e.timeout;

            function y() {
                if (!g) return;
                const C = dn.from("getAllResponseHeaders" in g && g.getAllResponseHeaders()),
                    P = {
                        data: !l || l === "text" || l === "json" ? g.responseText : g.response,
                        status: g.status,
                        statusText: g.statusText,
                        headers: C,
                        config: e,
                        request: g
                    };
                sx(function(R) {
                    r(R), h()
                }, function(R) {
                    a(R), h()
                }, P), g = null
            }
            if ("onloadend" in g ? g.onloadend = y : g.onreadystatechange = function() {
                    !g || g.readyState !== 4 || g.status === 0 && !(g.responseURL && g.responseURL.indexOf("file:") === 0) || setTimeout(y)
                }, g.onabort = function() {
                    !g || (a(new st("Request aborted", st.ECONNABORTED, e, g)), g = null)
                }, g.onerror = function() {
                    a(new st("Network Error", st.ERR_NETWORK, e, g)), g = null
                }, g.ontimeout = function() {
                    let L = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
                    const P = e.transitional || U4;
                    e.timeoutErrorMessage && (L = e.timeoutErrorMessage), a(new st(L, P.clarifyTimeoutError ? st.ETIMEDOUT : st.ECONNABORTED, e, g)), g = null
                }, Ve.isStandardBrowserEnv) {
                const C = (e.withCredentials || ux(v)) && e.xsrfCookieName && ox.read(e.xsrfCookieName);
                C && c.set(e.xsrfHeaderName, C)
            }
            o === void 0 && c.setContentType(null), "setRequestHeader" in g && S.forEach(c.toJSON(), function(L, P) {
                g.setRequestHeader(P, L)
            }), S.isUndefined(e.withCredentials) || (g.withCredentials = !!e.withCredentials), l && l !== "json" && (g.responseType = e.responseType), typeof e.onDownloadProgress == "function" && g.addEventListener("progress", zd(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && g.upload && g.upload.addEventListener("progress", zd(e.onUploadProgress)), (e.cancelToken || e.signal) && (f = C => {
                !g || (a(!C || C.type ? new ma(null, e, g) : C), g.abort(), g = null)
            }, e.cancelToken && e.cancelToken.subscribe(f), e.signal && (e.signal.aborted ? f() : e.signal.addEventListener("abort", f)));
            const x = fx(v);
            if (x && Ve.protocols.indexOf(x) === -1) {
                a(new st("Unsupported protocol " + x + ":", st.ERR_BAD_REQUEST, e));
                return
            }
            g.send(o || null)
        })
    },
    Ms = {
        http: $A,
        xhr: px
    };
S.forEach(Ms, (e, t) => {
    if (e) {
        try {
            Object.defineProperty(e, "name", {
                value: t
            })
        } catch {}
        Object.defineProperty(e, "adapterName", {
            value: t
        })
    }
});
const mx = {
    getAdapter: e => {
        e = S.isArray(e) ? e : [e];
        const {
            length: t
        } = e;
        let r, a;
        for (let o = 0; o < t && (r = e[o], !(a = S.isString(r) ? Ms[r.toLowerCase()] : r)); o++);
        if (!a) throw a === !1 ? new st(`Adapter ${r} is not supported by the environment`, "ERR_NOT_SUPPORT") : new Error(S.hasOwnProp(Ms, r) ? `Adapter '${r}' is not available in the build` : `Unknown adapter '${r}'`);
        if (!S.isFunction(a)) throw new TypeError("adapter is not a function");
        return a
    },
    adapters: Ms
};

function bl(e) {
    if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted) throw new ma(null, e)
}

function Hd(e) {
    return bl(e), e.headers = dn.from(e.headers), e.data = _l.call(e, e.transformRequest), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), mx.getAdapter(e.adapter || Xu.adapter)(e).then(function(a) {
        return bl(e), a.data = _l.call(e, e.transformResponse, a), a.headers = dn.from(a.headers), a
    }, function(a) {
        return K4(a) || (bl(e), a && a.response && (a.response.data = _l.call(e, e.transformResponse, a.response), a.response.headers = dn.from(a.response.headers))), Promise.reject(a)
    })
}
const Fd = e => e instanceof dn ? e.toJSON() : e;

function si(e, t) {
    t = t || {};
    const r = {};

    function a(g, v, y) {
        return S.isPlainObject(g) && S.isPlainObject(v) ? S.merge.call({
            caseless: y
        }, g, v) : S.isPlainObject(v) ? S.merge({}, v) : S.isArray(v) ? v.slice() : v
    }

    function o(g, v, y) {
        if (S.isUndefined(v)) {
            if (!S.isUndefined(g)) return a(void 0, g, y)
        } else return a(g, v, y)
    }

    function c(g, v) {
        if (!S.isUndefined(v)) return a(void 0, v)
    }

    function l(g, v) {
        if (S.isUndefined(v)) {
            if (!S.isUndefined(g)) return a(void 0, g)
        } else return a(void 0, v)
    }

    function f(g, v, y) {
        if (y in t) return a(g, v);
        if (y in e) return a(void 0, g)
    }
    const h = {
        url: c,
        method: c,
        data: c,
        baseURL: l,
        transformRequest: l,
        transformResponse: l,
        paramsSerializer: l,
        timeout: l,
        timeoutMessage: l,
        withCredentials: l,
        adapter: l,
        responseType: l,
        xsrfCookieName: l,
        xsrfHeaderName: l,
        onUploadProgress: l,
        onDownloadProgress: l,
        decompress: l,
        maxContentLength: l,
        maxBodyLength: l,
        beforeRedirect: l,
        transport: l,
        httpAgent: l,
        httpsAgent: l,
        cancelToken: l,
        socketPath: l,
        responseEncoding: l,
        validateStatus: f,
        headers: (g, v) => o(Fd(g), Fd(v), !0)
    };
    return S.forEach(Object.keys(Object.assign({}, e, t)), function(v) {
        const y = h[v] || o,
            x = y(e[v], t[v], v);
        S.isUndefined(x) && y !== f || (r[v] = x)
    }), r
}
const q4 = "1.4.0",
    Ju = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
    Ju[e] = function(a) {
        return typeof a === e || "a" + (t < 1 ? "n " : " ") + e
    }
});
const Vd = {};
Ju.transitional = function(t, r, a) {
    function o(c, l) {
        return "[Axios v" + q4 + "] Transitional option '" + c + "'" + l + (a ? ". " + a : "")
    }
    return (c, l, f) => {
        if (t === !1) throw new st(o(l, " has been removed" + (r ? " in " + r : "")), st.ERR_DEPRECATED);
        return r && !Vd[l] && (Vd[l] = !0, console.warn(o(l, " has been deprecated since v" + r + " and will be removed in the near future"))), t ? t(c, l, f) : !0
    }
};

function gx(e, t, r) {
    if (typeof e != "object") throw new st("options must be an object", st.ERR_BAD_OPTION_VALUE);
    const a = Object.keys(e);
    let o = a.length;
    for (; o-- > 0;) {
        const c = a[o],
            l = t[c];
        if (l) {
            const f = e[c],
                h = f === void 0 || l(f, c, e);
            if (h !== !0) throw new st("option " + c + " must be " + h, st.ERR_BAD_OPTION_VALUE);
            continue
        }
        if (r !== !0) throw new st("Unknown option " + c, st.ERR_BAD_OPTION)
    }
}
const Jl = {
        assertOptions: gx,
        validators: Ju
    },
    Pn = Jl.validators;
class Ys {
    constructor(t) {
        this.defaults = t, this.interceptors = {
            request: new Bd,
            response: new Bd
        }
    }
    request(t, r) {
        typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = si(this.defaults, r);
        const {
            transitional: a,
            paramsSerializer: o,
            headers: c
        } = r;
        a !== void 0 && Jl.assertOptions(a, {
            silentJSONParsing: Pn.transitional(Pn.boolean),
            forcedJSONParsing: Pn.transitional(Pn.boolean),
            clarifyTimeoutError: Pn.transitional(Pn.boolean)
        }, !1), o != null && (S.isFunction(o) ? r.paramsSerializer = {
            serialize: o
        } : Jl.assertOptions(o, {
            encode: Pn.function,
            serialize: Pn.function
        }, !0)), r.method = (r.method || this.defaults.method || "get").toLowerCase();
        let l;
        l = c && S.merge(c.common, c[r.method]), l && S.forEach(["delete", "get", "head", "post", "put", "patch", "common"], L => {
            delete c[L]
        }), r.headers = dn.concat(l, c);
        const f = [];
        let h = !0;
        this.interceptors.request.forEach(function(P) {
            typeof P.runWhen == "function" && P.runWhen(r) === !1 || (h = h && P.synchronous, f.unshift(P.fulfilled, P.rejected))
        });
        const g = [];
        this.interceptors.response.forEach(function(P) {
            g.push(P.fulfilled, P.rejected)
        });
        let v, y = 0,
            x;
        if (!h) {
            const L = [Hd.bind(this), void 0];
            for (L.unshift.apply(L, f), L.push.apply(L, g), x = L.length, v = Promise.resolve(r); y < x;) v = v.then(L[y++], L[y++]);
            return v
        }
        x = f.length;
        let C = r;
        for (y = 0; y < x;) {
            const L = f[y++],
                P = f[y++];
            try {
                C = L(C)
            } catch (N) {
                P.call(this, N);
                break
            }
        }
        try {
            v = Hd.call(this, C)
        } catch (L) {
            return Promise.reject(L)
        }
        for (y = 0, x = g.length; y < x;) v = v.then(g[y++], g[y++]);
        return v
    }
    getUri(t) {
        t = si(this.defaults, t);
        const r = j4(t.baseURL, t.url);
        return W4(r, t.params, t.paramsSerializer)
    }
}
S.forEach(["delete", "get", "head", "options"], function(t) {
    Ys.prototype[t] = function(r, a) {
        return this.request(si(a || {}, {
            method: t,
            url: r,
            data: (a || {}).data
        }))
    }
});
S.forEach(["post", "put", "patch"], function(t) {
    function r(a) {
        return function(c, l, f) {
            return this.request(si(f || {}, {
                method: t,
                headers: a ? {
                    "Content-Type": "multipart/form-data"
                } : {},
                url: c,
                data: l
            }))
        }
    }
    Ys.prototype[t] = r(), Ys.prototype[t + "Form"] = r(!0)
});
const Ps = Ys;
class Zu {
    constructor(t) {
        if (typeof t != "function") throw new TypeError("executor must be a function.");
        let r;
        this.promise = new Promise(function(c) {
            r = c
        });
        const a = this;
        this.promise.then(o => {
            if (!a._listeners) return;
            let c = a._listeners.length;
            for (; c-- > 0;) a._listeners[c](o);
            a._listeners = null
        }), this.promise.then = o => {
            let c;
            const l = new Promise(f => {
                a.subscribe(f), c = f
            }).then(o);
            return l.cancel = function() {
                a.unsubscribe(c)
            }, l
        }, t(function(c, l, f) {
            a.reason || (a.reason = new ma(c, l, f), r(a.reason))
        })
    }
    throwIfRequested() {
        if (this.reason) throw this.reason
    }
    subscribe(t) {
        if (this.reason) {
            t(this.reason);
            return
        }
        this._listeners ? this._listeners.push(t) : this._listeners = [t]
    }
    unsubscribe(t) {
        if (!this._listeners) return;
        const r = this._listeners.indexOf(t);
        r !== -1 && this._listeners.splice(r, 1)
    }
    static source() {
        let t;
        return {
            token: new Zu(function(o) {
                t = o
            }),
            cancel: t
        }
    }
}
const vx = Zu;

function _x(e) {
    return function(r) {
        return e.apply(null, r)
    }
}

function bx(e) {
    return S.isObject(e) && e.isAxiosError === !0
}
const Zl = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511
};
Object.entries(Zl).forEach(([e, t]) => {
    Zl[t] = e
});
const yx = Zl;

function X4(e) {
    const t = new Ps(e),
        r = I4(Ps.prototype.request, t);
    return S.extend(r, Ps.prototype, t, {
        allOwnKeys: !0
    }), S.extend(r, t, null, {
        allOwnKeys: !0
    }), r.create = function(o) {
        return X4(si(e, o))
    }, r
}
const Ot = X4(Xu);
Ot.Axios = Ps;
Ot.CanceledError = ma;
Ot.CancelToken = vx;
Ot.isCancel = K4;
Ot.VERSION = q4;
Ot.toFormData = Eo;
Ot.AxiosError = st;
Ot.Cancel = Ot.CanceledError;
Ot.all = function(t) {
    return Promise.all(t)
};
Ot.spread = _x;
Ot.isAxiosError = bx;
Ot.mergeConfig = si;
Ot.AxiosHeaders = dn;
Ot.formToJSON = e => Y4(S.isHTMLForm(e) ? new FormData(e) : e);
Ot.HttpStatusCode = yx;
Ot.default = Ot;
const Ex = Ot;
/*!
 * currency.js - v2.0.4
 * http://scurker.github.io/currency.js
 *
 * Copyright (c) 2021 Jason Wilson
 * Released under MIT license
 */
var wx = {
        symbol: "$",
        separator: ",",
        decimal: ".",
        errorOnInvalid: !1,
        precision: 2,
        pattern: "!#",
        negativePattern: "-!#",
        format: Tx,
        fromCents: !1
    },
    J4 = function(t) {
        return Math.round(t)
    },
    Qu = function(t) {
        return Math.pow(10, t)
    },
    Ax = function(t, r) {
        return J4(t / r) * r
    },
    xx = /(\d)(?=(\d{3})+\b)/g,
    Cx = /(\d)(?=(\d\d)+\d\b)/g;

function Fe(e, t) {
    var r = this;
    if (!(r instanceof Fe)) return new Fe(e, t);
    var a = Object.assign({}, wx, t),
        o = Qu(a.precision),
        c = Rs(e, a);
    r.intValue = c, r.value = c / o, a.increment = a.increment || 1 / o, a.useVedic ? a.groups = Cx : a.groups = xx, this.s = a, this.p = o
}

function Rs(e, t) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0,
        a = 0,
        o = t.decimal,
        c = t.errorOnInvalid,
        l = t.precision,
        f = t.fromCents,
        h = Qu(l),
        g = typeof e == "number",
        v = e instanceof Fe;
    if (v && f) return e.intValue;
    if (g || v) a = v ? e.value : e;
    else if (typeof e == "string") {
        var y = new RegExp("[^-\\d" + o + "]", "g"),
            x = new RegExp("\\" + o, "g");
        a = e.replace(/\((.*)\)/, "-$1").replace(y, "").replace(x, "."), a = a || 0
    } else {
        if (c) throw Error("Invalid Input");
        a = 0
    }
    return f || (a *= h, a = a.toFixed(4)), r ? J4(a) : a
}

function Tx(e, t) {
    var r = t.pattern,
        a = t.negativePattern,
        o = t.symbol,
        c = t.separator,
        l = t.decimal,
        f = t.groups,
        h = ("" + e).replace(/^-/, "").split("."),
        g = h[0],
        v = h[1];
    return (e.value >= 0 ? r : a).replace("!", o).replace("#", g.replace(f, "$1" + c) + (v ? l + v : ""))
}
Fe.prototype = {
    add: function(t) {
        var r = this.intValue,
            a = this.s,
            o = this.p;
        return Fe((r += Rs(t, a)) / (a.fromCents ? 1 : o), a)
    },
    subtract: function(t) {
        var r = this.intValue,
            a = this.s,
            o = this.p;
        return Fe((r -= Rs(t, a)) / (a.fromCents ? 1 : o), a)
    },
    multiply: function(t) {
        var r = this.intValue,
            a = this.s;
        return Fe((r *= t) / (a.fromCents ? 1 : Qu(a.precision)), a)
    },
    divide: function(t) {
        var r = this.intValue,
            a = this.s;
        return Fe(r /= Rs(t, a, !1), a)
    },
    distribute: function(t) {
        for (var r = this.intValue, a = this.p, o = this.s, c = [], l = Math[r >= 0 ? "floor" : "ceil"](r / t), f = Math.abs(r - l * t), h = o.fromCents ? 1 : a; t !== 0; t--) {
            var g = Fe(l / h, o);
            f-- > 0 && (g = g[r >= 0 ? "add" : "subtract"](1 / h)), c.push(g)
        }
        return c
    },
    dollars: function() {
        return ~~this.value
    },
    cents: function() {
        var t = this.intValue,
            r = this.p;
        return ~~(t % r)
    },
    format: function(t) {
        var r = this.s;
        return typeof t == "function" ? t(this, r) : r.format(this, Object.assign({}, r, t))
    },
    toString: function() {
        var t = this.intValue,
            r = this.p,
            a = this.s;
        return Ax(t / r, a.increment).toFixed(a.precision)
    },
    toJSON: function() {
        return this.value
    }
};
window._ = g0;
window.Popper = Au;
vo.magic("clipboard", () => e => navigator.clipboard.writeText(e));
window.Alpine = vo;
window.convertPricing = e => Fe(e, {
    symbol: "RM ",
    precision: 2,
    fromCents: !0
}).format();
window._ = g0;
window.axios = Ex;
window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
vo.store("notifications", {
    message: null,
    notify(e) {
        this.message = e, setTimeout(() => {
            this.message = null
        }, 3e3)
    }
});
vo.start();

function Wd(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        t && (a = a.filter(function(o) {
            return Object.getOwnPropertyDescriptor(e, o).enumerable
        })), r.push.apply(r, a)
    }
    return r
}

function H(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? Wd(Object(r), !0).forEach(function(a) {
            Gt(e, a, r[a])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Wd(Object(r)).forEach(function(a) {
            Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(r, a))
        })
    }
    return e
}

function Ks(e) {
    return Ks = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, Ks(e)
}

function Sx(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function Ud(e, t) {
    for (var r = 0; r < t.length; r++) {
        var a = t[r];
        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
    }
}

function Ox(e, t, r) {
    return t && Ud(e.prototype, t), r && Ud(e, r), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e
}

function Gt(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function tf(e, t) {
    return Nx(e) || Ix(e, t) || Z4(e, t) || Px()
}

function ga(e) {
    return Gx(e) || Lx(e) || Z4(e) || Mx()
}

function Gx(e) {
    if (Array.isArray(e)) return Ql(e)
}

function Nx(e) {
    if (Array.isArray(e)) return e
}

function Lx(e) {
    if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e)
}

function Ix(e, t) {
    var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
    if (r != null) {
        var a = [],
            o = !0,
            c = !1,
            l, f;
        try {
            for (r = r.call(e); !(o = (l = r.next()).done) && (a.push(l.value), !(t && a.length === t)); o = !0);
        } catch (h) {
            c = !0, f = h
        } finally {
            try {
                !o && r.return != null && r.return()
            } finally {
                if (c) throw f
            }
        }
        return a
    }
}

function Z4(e, t) {
    if (!!e) {
        if (typeof e == "string") return Ql(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
        if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Ql(e, t)
    }
}

function Ql(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, a = new Array(t); r < t; r++) a[r] = e[r];
    return a
}

function Mx() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function Px() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
var Yd = function() {},
    ef = {},
    Q4 = {},
    tp = null,
    ep = {
        mark: Yd,
        measure: Yd
    };
try {
    typeof window < "u" && (ef = window), typeof document < "u" && (Q4 = document), typeof MutationObserver < "u" && (tp = MutationObserver), typeof performance < "u" && (ep = performance)
} catch {}
var Rx = ef.navigator || {},
    Kd = Rx.userAgent,
    jd = Kd === void 0 ? "" : Kd,
    Wn = ef,
    gt = Q4,
    qd = tp,
    _s = ep;
Wn.document;
var _n = !!gt.documentElement && !!gt.head && typeof gt.addEventListener == "function" && typeof gt.createElement == "function",
    np = ~jd.indexOf("MSIE") || ~jd.indexOf("Trident/"),
    bs, ys, Es, ws, As, pn = "___FONT_AWESOME___",
    tu = 16,
    rp = "fa",
    ip = "svg-inline--fa",
    Er = "data-fa-i2svg",
    eu = "data-fa-pseudo-element",
    Dx = "data-fa-pseudo-element-pending",
    nf = "data-prefix",
    rf = "data-icon",
    Xd = "fontawesome-i2svg",
    kx = "async",
    Bx = ["HTML", "HEAD", "STYLE", "SCRIPT"],
    ap = function() {
        try {
            return !0
        } catch {
            return !1
        }
    }(),
    mt = "classic",
    Et = "sharp",
    af = [mt, Et];

function va(e) {
    return new Proxy(e, {
        get: function(r, a) {
            return a in r ? r[a] : r[mt]
        }
    })
}
var Qi = va((bs = {}, Gt(bs, mt, {
        fa: "solid",
        fas: "solid",
        "fa-solid": "solid",
        far: "regular",
        "fa-regular": "regular",
        fal: "light",
        "fa-light": "light",
        fat: "thin",
        "fa-thin": "thin",
        fad: "duotone",
        "fa-duotone": "duotone",
        fab: "brands",
        "fa-brands": "brands",
        fak: "kit",
        "fa-kit": "kit"
    }), Gt(bs, Et, {
        fa: "solid",
        fass: "solid",
        "fa-solid": "solid",
        fasr: "regular",
        "fa-regular": "regular",
        fasl: "light",
        "fa-light": "light"
    }), bs)),
    ta = va((ys = {}, Gt(ys, mt, {
        solid: "fas",
        regular: "far",
        light: "fal",
        thin: "fat",
        duotone: "fad",
        brands: "fab",
        kit: "fak"
    }), Gt(ys, Et, {
        solid: "fass",
        regular: "fasr",
        light: "fasl"
    }), ys)),
    ea = va((Es = {}, Gt(Es, mt, {
        fab: "fa-brands",
        fad: "fa-duotone",
        fak: "fa-kit",
        fal: "fa-light",
        far: "fa-regular",
        fas: "fa-solid",
        fat: "fa-thin"
    }), Gt(Es, Et, {
        fass: "fa-solid",
        fasr: "fa-regular",
        fasl: "fa-light"
    }), Es)),
    $x = va((ws = {}, Gt(ws, mt, {
        "fa-brands": "fab",
        "fa-duotone": "fad",
        "fa-kit": "fak",
        "fa-light": "fal",
        "fa-regular": "far",
        "fa-solid": "fas",
        "fa-thin": "fat"
    }), Gt(ws, Et, {
        "fa-solid": "fass",
        "fa-regular": "fasr",
        "fa-light": "fasl"
    }), ws)),
    zx = /fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,
    sp = "fa-layers-text",
    Hx = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,
    Fx = va((As = {}, Gt(As, mt, {
        900: "fas",
        400: "far",
        normal: "far",
        300: "fal",
        100: "fat"
    }), Gt(As, Et, {
        900: "fass",
        400: "fasr",
        300: "fasl"
    }), As)),
    op = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    Vx = op.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
    Wx = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"],
    dr = {
        GROUP: "duotone-group",
        SWAP_OPACITY: "swap-opacity",
        PRIMARY: "primary",
        SECONDARY: "secondary"
    },
    na = new Set;
Object.keys(ta[mt]).map(na.add.bind(na));
Object.keys(ta[Et]).map(na.add.bind(na));
var Ux = [].concat(af, ga(na), ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", dr.GROUP, dr.SWAP_OPACITY, dr.PRIMARY, dr.SECONDARY]).concat(op.map(function(e) {
        return "".concat(e, "x")
    })).concat(Vx.map(function(e) {
        return "w-".concat(e)
    })),
    Ki = Wn.FontAwesomeConfig || {};

function Yx(e) {
    var t = gt.querySelector("script[" + e + "]");
    if (t) return t.getAttribute(e)
}

function Kx(e) {
    return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e
}
if (gt && typeof gt.querySelector == "function") {
    var jx = [
        ["data-family-prefix", "familyPrefix"],
        ["data-css-prefix", "cssPrefix"],
        ["data-family-default", "familyDefault"],
        ["data-style-default", "styleDefault"],
        ["data-replacement-class", "replacementClass"],
        ["data-auto-replace-svg", "autoReplaceSvg"],
        ["data-auto-add-css", "autoAddCss"],
        ["data-auto-a11y", "autoA11y"],
        ["data-search-pseudo-elements", "searchPseudoElements"],
        ["data-observe-mutations", "observeMutations"],
        ["data-mutate-approach", "mutateApproach"],
        ["data-keep-original-source", "keepOriginalSource"],
        ["data-measure-performance", "measurePerformance"],
        ["data-show-missing-icons", "showMissingIcons"]
    ];
    jx.forEach(function(e) {
        var t = tf(e, 2),
            r = t[0],
            a = t[1],
            o = Kx(Yx(r));
        o != null && (Ki[a] = o)
    })
}
var cp = {
    styleDefault: "solid",
    familyDefault: "classic",
    cssPrefix: rp,
    replacementClass: ip,
    autoReplaceSvg: !0,
    autoAddCss: !0,
    autoA11y: !0,
    searchPseudoElements: !1,
    observeMutations: !0,
    mutateApproach: "async",
    keepOriginalSource: !0,
    measurePerformance: !1,
    showMissingIcons: !0
};
Ki.familyPrefix && (Ki.cssPrefix = Ki.familyPrefix);
var oi = H(H({}, cp), Ki);
oi.autoReplaceSvg || (oi.observeMutations = !1);
var W = {};
Object.keys(cp).forEach(function(e) {
    Object.defineProperty(W, e, {
        enumerable: !0,
        set: function(r) {
            oi[e] = r, ji.forEach(function(a) {
                return a(W)
            })
        },
        get: function() {
            return oi[e]
        }
    })
});
Object.defineProperty(W, "familyPrefix", {
    enumerable: !0,
    set: function(t) {
        oi.cssPrefix = t, ji.forEach(function(r) {
            return r(W)
        })
    },
    get: function() {
        return oi.cssPrefix
    }
});
Wn.FontAwesomeConfig = W;
var ji = [];

function qx(e) {
    return ji.push(e),
        function() {
            ji.splice(ji.indexOf(e), 1)
        }
}
var Rn = tu,
    We = {
        size: 16,
        x: 0,
        y: 0,
        rotate: 0,
        flipX: !1,
        flipY: !1
    };

function Xx(e) {
    if (!(!e || !_n)) {
        var t = gt.createElement("style");
        t.setAttribute("type", "text/css"), t.innerHTML = e;
        for (var r = gt.head.childNodes, a = null, o = r.length - 1; o > -1; o--) {
            var c = r[o],
                l = (c.tagName || "").toUpperCase();
            ["STYLE", "LINK"].indexOf(l) > -1 && (a = c)
        }
        return gt.head.insertBefore(t, a), e
    }
}
var Jx = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

function ra() {
    for (var e = 12, t = ""; e-- > 0;) t += Jx[Math.random() * 62 | 0];
    return t
}

function gi(e) {
    for (var t = [], r = (e || []).length >>> 0; r--;) t[r] = e[r];
    return t
}

function sf(e) {
    return e.classList ? gi(e.classList) : (e.getAttribute("class") || "").split(" ").filter(function(t) {
        return t
    })
}

function lp(e) {
    return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
}

function Zx(e) {
    return Object.keys(e || {}).reduce(function(t, r) {
        return t + "".concat(r, '="').concat(lp(e[r]), '" ')
    }, "").trim()
}

function xo(e) {
    return Object.keys(e || {}).reduce(function(t, r) {
        return t + "".concat(r, ": ").concat(e[r].trim(), ";")
    }, "")
}

function of (e) {
    return e.size !== We.size || e.x !== We.x || e.y !== We.y || e.rotate !== We.rotate || e.flipX || e.flipY
}

function Qx(e) {
    var t = e.transform,
        r = e.containerWidth,
        a = e.iconWidth,
        o = {
            transform: "translate(".concat(r / 2, " 256)")
        },
        c = "translate(".concat(t.x * 32, ", ").concat(t.y * 32, ") "),
        l = "scale(".concat(t.size / 16 * (t.flipX ? -1 : 1), ", ").concat(t.size / 16 * (t.flipY ? -1 : 1), ") "),
        f = "rotate(".concat(t.rotate, " 0 0)"),
        h = {
            transform: "".concat(c, " ").concat(l, " ").concat(f)
        },
        g = {
            transform: "translate(".concat(a / 2 * -1, " -256)")
        };
    return {
        outer: o,
        inner: h,
        path: g
    }
}

function tC(e) {
    var t = e.transform,
        r = e.width,
        a = r === void 0 ? tu : r,
        o = e.height,
        c = o === void 0 ? tu : o,
        l = e.startCentered,
        f = l === void 0 ? !1 : l,
        h = "";
    return f && np ? h += "translate(".concat(t.x / Rn - a / 2, "em, ").concat(t.y / Rn - c / 2, "em) ") : f ? h += "translate(calc(-50% + ".concat(t.x / Rn, "em), calc(-50% + ").concat(t.y / Rn, "em)) ") : h += "translate(".concat(t.x / Rn, "em, ").concat(t.y / Rn, "em) "), h += "scale(".concat(t.size / Rn * (t.flipX ? -1 : 1), ", ").concat(t.size / Rn * (t.flipY ? -1 : 1), ") "), h += "rotate(".concat(t.rotate, "deg) "), h
}
var eC = `:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;

function up() {
    var e = rp,
        t = ip,
        r = W.cssPrefix,
        a = W.replacementClass,
        o = eC;
    if (r !== e || a !== t) {
        var c = new RegExp("\\.".concat(e, "\\-"), "g"),
            l = new RegExp("\\--".concat(e, "\\-"), "g"),
            f = new RegExp("\\.".concat(t), "g");
        o = o.replace(c, ".".concat(r, "-")).replace(l, "--".concat(r, "-")).replace(f, ".".concat(a))
    }
    return o
}
var Jd = !1;

function yl() {
    W.autoAddCss && !Jd && (Xx(up()), Jd = !0)
}
var nC = {
        mixout: function() {
            return {
                dom: {
                    css: up,
                    insertCss: yl
                }
            }
        },
        hooks: function() {
            return {
                beforeDOMElementCreation: function() {
                    yl()
                },
                beforeI2svg: function() {
                    yl()
                }
            }
        }
    },
    mn = Wn || {};
mn[pn] || (mn[pn] = {});
mn[pn].styles || (mn[pn].styles = {});
mn[pn].hooks || (mn[pn].hooks = {});
mn[pn].shims || (mn[pn].shims = []);
var Ie = mn[pn],
    fp = [],
    rC = function e() {
        gt.removeEventListener("DOMContentLoaded", e), js = 1, fp.map(function(t) {
            return t()
        })
    },
    js = !1;
_n && (js = (gt.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(gt.readyState), js || gt.addEventListener("DOMContentLoaded", rC));

function iC(e) {
    !_n || (js ? setTimeout(e, 0) : fp.push(e))
}

function _a(e) {
    var t = e.tag,
        r = e.attributes,
        a = r === void 0 ? {} : r,
        o = e.children,
        c = o === void 0 ? [] : o;
    return typeof e == "string" ? lp(e) : "<".concat(t, " ").concat(Zx(a), ">").concat(c.map(_a).join(""), "</").concat(t, ">")
}

function Zd(e, t, r) {
    if (e && e[t] && e[t][r]) return {
        prefix: t,
        iconName: r,
        icon: e[t][r]
    }
}
var aC = function(t, r) {
        return function(a, o, c, l) {
            return t.call(r, a, o, c, l)
        }
    },
    El = function(t, r, a, o) {
        var c = Object.keys(t),
            l = c.length,
            f = o !== void 0 ? aC(r, o) : r,
            h, g, v;
        for (a === void 0 ? (h = 1, v = t[c[0]]) : (h = 0, v = a); h < l; h++) g = c[h], v = f(v, t[g], g, t);
        return v
    };

function sC(e) {
    for (var t = [], r = 0, a = e.length; r < a;) {
        var o = e.charCodeAt(r++);
        if (o >= 55296 && o <= 56319 && r < a) {
            var c = e.charCodeAt(r++);
            (c & 64512) == 56320 ? t.push(((o & 1023) << 10) + (c & 1023) + 65536) : (t.push(o), r--)
        } else t.push(o)
    }
    return t
}

function nu(e) {
    var t = sC(e);
    return t.length === 1 ? t[0].toString(16) : null
}

function oC(e, t) {
    var r = e.length,
        a = e.charCodeAt(t),
        o;
    return a >= 55296 && a <= 56319 && r > t + 1 && (o = e.charCodeAt(t + 1), o >= 56320 && o <= 57343) ? (a - 55296) * 1024 + o - 56320 + 65536 : a
}

function Qd(e) {
    return Object.keys(e).reduce(function(t, r) {
        var a = e[r],
            o = !!a.icon;
        return o ? t[a.iconName] = a.icon : t[r] = a, t
    }, {})
}

function ru(e, t) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
        a = r.skipHooks,
        o = a === void 0 ? !1 : a,
        c = Qd(t);
    typeof Ie.hooks.addPack == "function" && !o ? Ie.hooks.addPack(e, Qd(t)) : Ie.styles[e] = H(H({}, Ie.styles[e] || {}), c), e === "fas" && ru("fa", t)
}
var xs, Cs, Ts, jr = Ie.styles,
    cC = Ie.shims,
    lC = (xs = {}, Gt(xs, mt, Object.values(ea[mt])), Gt(xs, Et, Object.values(ea[Et])), xs),
    cf = null,
    dp = {},
    hp = {},
    pp = {},
    mp = {},
    gp = {},
    uC = (Cs = {}, Gt(Cs, mt, Object.keys(Qi[mt])), Gt(Cs, Et, Object.keys(Qi[Et])), Cs);

function fC(e) {
    return ~Ux.indexOf(e)
}

function dC(e, t) {
    var r = t.split("-"),
        a = r[0],
        o = r.slice(1).join("-");
    return a === e && o !== "" && !fC(o) ? o : null
}
var vp = function() {
    var t = function(c) {
        return El(jr, function(l, f, h) {
            return l[h] = El(f, c, {}), l
        }, {})
    };
    dp = t(function(o, c, l) {
        if (c[3] && (o[c[3]] = l), c[2]) {
            var f = c[2].filter(function(h) {
                return typeof h == "number"
            });
            f.forEach(function(h) {
                o[h.toString(16)] = l
            })
        }
        return o
    }), hp = t(function(o, c, l) {
        if (o[l] = l, c[2]) {
            var f = c[2].filter(function(h) {
                return typeof h == "string"
            });
            f.forEach(function(h) {
                o[h] = l
            })
        }
        return o
    }), gp = t(function(o, c, l) {
        var f = c[2];
        return o[l] = l, f.forEach(function(h) {
            o[h] = l
        }), o
    });
    var r = "far" in jr || W.autoFetchSvg,
        a = El(cC, function(o, c) {
            var l = c[0],
                f = c[1],
                h = c[2];
            return f === "far" && !r && (f = "fas"), typeof l == "string" && (o.names[l] = {
                prefix: f,
                iconName: h
            }), typeof l == "number" && (o.unicodes[l.toString(16)] = {
                prefix: f,
                iconName: h
            }), o
        }, {
            names: {},
            unicodes: {}
        });
    pp = a.names, mp = a.unicodes, cf = Co(W.styleDefault, {
        family: W.familyDefault
    })
};
qx(function(e) {
    cf = Co(e.styleDefault, {
        family: W.familyDefault
    })
});
vp();

function lf(e, t) {
    return (dp[e] || {})[t]
}

function hC(e, t) {
    return (hp[e] || {})[t]
}

function hr(e, t) {
    return (gp[e] || {})[t]
}

function _p(e) {
    return pp[e] || {
        prefix: null,
        iconName: null
    }
}

function pC(e) {
    var t = mp[e],
        r = lf("fas", e);
    return t || (r ? {
        prefix: "fas",
        iconName: r
    } : null) || {
        prefix: null,
        iconName: null
    }
}

function Un() {
    return cf
}
var uf = function() {
    return {
        prefix: null,
        iconName: null,
        rest: []
    }
};

function Co(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
        r = t.family,
        a = r === void 0 ? mt : r,
        o = Qi[a][e],
        c = ta[a][e] || ta[a][o],
        l = e in Ie.styles ? e : null;
    return c || l || null
}
var t0 = (Ts = {}, Gt(Ts, mt, Object.keys(ea[mt])), Gt(Ts, Et, Object.keys(ea[Et])), Ts);

function To(e) {
    var t, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
        a = r.skipLookups,
        o = a === void 0 ? !1 : a,
        c = (t = {}, Gt(t, mt, "".concat(W.cssPrefix, "-").concat(mt)), Gt(t, Et, "".concat(W.cssPrefix, "-").concat(Et)), t),
        l = null,
        f = mt;
    (e.includes(c[mt]) || e.some(function(g) {
        return t0[mt].includes(g)
    })) && (f = mt), (e.includes(c[Et]) || e.some(function(g) {
        return t0[Et].includes(g)
    })) && (f = Et);
    var h = e.reduce(function(g, v) {
        var y = dC(W.cssPrefix, v);
        if (jr[v] ? (v = lC[f].includes(v) ? $x[f][v] : v, l = v, g.prefix = v) : uC[f].indexOf(v) > -1 ? (l = v, g.prefix = Co(v, {
                family: f
            })) : y ? g.iconName = y : v !== W.replacementClass && v !== c[mt] && v !== c[Et] && g.rest.push(v), !o && g.prefix && g.iconName) {
            var x = l === "fa" ? _p(g.iconName) : {},
                C = hr(g.prefix, g.iconName);
            x.prefix && (l = null), g.iconName = x.iconName || C || g.iconName, g.prefix = x.prefix || g.prefix, g.prefix === "far" && !jr.far && jr.fas && !W.autoFetchSvg && (g.prefix = "fas")
        }
        return g
    }, uf());
    return (e.includes("fa-brands") || e.includes("fab")) && (h.prefix = "fab"), (e.includes("fa-duotone") || e.includes("fad")) && (h.prefix = "fad"), !h.prefix && f === Et && (jr.fass || W.autoFetchSvg) && (h.prefix = "fass", h.iconName = hr(h.prefix, h.iconName) || h.iconName), (h.prefix === "fa" || l === "fa") && (h.prefix = Un() || "fas"), h
}
var mC = function() {
        function e() {
            Sx(this, e), this.definitions = {}
        }
        return Ox(e, [{
            key: "add",
            value: function() {
                for (var r = this, a = arguments.length, o = new Array(a), c = 0; c < a; c++) o[c] = arguments[c];
                var l = o.reduce(this._pullDefinitions, {});
                Object.keys(l).forEach(function(f) {
                    r.definitions[f] = H(H({}, r.definitions[f] || {}), l[f]), ru(f, l[f]);
                    var h = ea[mt][f];
                    h && ru(h, l[f]), vp()
                })
            }
        }, {
            key: "reset",
            value: function() {
                this.definitions = {}
            }
        }, {
            key: "_pullDefinitions",
            value: function(r, a) {
                var o = a.prefix && a.iconName && a.icon ? {
                    0: a
                } : a;
                return Object.keys(o).map(function(c) {
                    var l = o[c],
                        f = l.prefix,
                        h = l.iconName,
                        g = l.icon,
                        v = g[2];
                    r[f] || (r[f] = {}), v.length > 0 && v.forEach(function(y) {
                        typeof y == "string" && (r[f][y] = g)
                    }), r[f][h] = g
                }), r
            }
        }]), e
    }(),
    e0 = [],
    qr = {},
    Xr = {},
    gC = Object.keys(Xr);

function vC(e, t) {
    var r = t.mixoutsTo;
    return e0 = e, qr = {}, Object.keys(Xr).forEach(function(a) {
        gC.indexOf(a) === -1 && delete Xr[a]
    }), e0.forEach(function(a) {
        var o = a.mixout ? a.mixout() : {};
        if (Object.keys(o).forEach(function(l) {
                typeof o[l] == "function" && (r[l] = o[l]), Ks(o[l]) === "object" && Object.keys(o[l]).forEach(function(f) {
                    r[l] || (r[l] = {}), r[l][f] = o[l][f]
                })
            }), a.hooks) {
            var c = a.hooks();
            Object.keys(c).forEach(function(l) {
                qr[l] || (qr[l] = []), qr[l].push(c[l])
            })
        }
        a.provides && a.provides(Xr)
    }), r
}

function iu(e, t) {
    for (var r = arguments.length, a = new Array(r > 2 ? r - 2 : 0), o = 2; o < r; o++) a[o - 2] = arguments[o];
    var c = qr[e] || [];
    return c.forEach(function(l) {
        t = l.apply(null, [t].concat(a))
    }), t
}

function wr(e) {
    for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++) r[a - 1] = arguments[a];
    var o = qr[e] || [];
    o.forEach(function(c) {
        c.apply(null, r)
    })
}

function gn() {
    var e = arguments[0],
        t = Array.prototype.slice.call(arguments, 1);
    return Xr[e] ? Xr[e].apply(null, t) : void 0
}

function au(e) {
    e.prefix === "fa" && (e.prefix = "fas");
    var t = e.iconName,
        r = e.prefix || Un();
    if (!!t) return t = hr(r, t) || t, Zd(bp.definitions, r, t) || Zd(Ie.styles, r, t)
}
var bp = new mC,
    _C = function() {
        W.autoReplaceSvg = !1, W.observeMutations = !1, wr("noAuto")
    },
    bC = {
        i2svg: function() {
            var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            return _n ? (wr("beforeI2svg", t), gn("pseudoElements2svg", t), gn("i2svg", t)) : Promise.reject("Operation requires a DOM of some kind.")
        },
        watch: function() {
            var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
                r = t.autoReplaceSvgRoot;
            W.autoReplaceSvg === !1 && (W.autoReplaceSvg = !0), W.observeMutations = !0, iC(function() {
                EC({
                    autoReplaceSvgRoot: r
                }), wr("watch", t)
            })
        }
    },
    yC = {
        icon: function(t) {
            if (t === null) return null;
            if (Ks(t) === "object" && t.prefix && t.iconName) return {
                prefix: t.prefix,
                iconName: hr(t.prefix, t.iconName) || t.iconName
            };
            if (Array.isArray(t) && t.length === 2) {
                var r = t[1].indexOf("fa-") === 0 ? t[1].slice(3) : t[1],
                    a = Co(t[0]);
                return {
                    prefix: a,
                    iconName: hr(a, r) || r
                }
            }
            if (typeof t == "string" && (t.indexOf("".concat(W.cssPrefix, "-")) > -1 || t.match(zx))) {
                var o = To(t.split(" "), {
                    skipLookups: !0
                });
                return {
                    prefix: o.prefix || Un(),
                    iconName: hr(o.prefix, o.iconName) || o.iconName
                }
            }
            if (typeof t == "string") {
                var c = Un();
                return {
                    prefix: c,
                    iconName: hr(c, t) || t
                }
            }
        }
    },
    he = {
        noAuto: _C,
        config: W,
        dom: bC,
        parse: yC,
        library: bp,
        findIconDefinition: au,
        toHtml: _a
    },
    EC = function() {
        var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
            r = t.autoReplaceSvgRoot,
            a = r === void 0 ? gt : r;
        (Object.keys(Ie.styles).length > 0 || W.autoFetchSvg) && _n && W.autoReplaceSvg && he.dom.i2svg({
            node: a
        })
    };

function So(e, t) {
    return Object.defineProperty(e, "abstract", {
        get: t
    }), Object.defineProperty(e, "html", {
        get: function() {
            return e.abstract.map(function(a) {
                return _a(a)
            })
        }
    }), Object.defineProperty(e, "node", {
        get: function() {
            if (!!_n) {
                var a = gt.createElement("div");
                return a.innerHTML = e.html, a.children
            }
        }
    }), e
}

function wC(e) {
    var t = e.children,
        r = e.main,
        a = e.mask,
        o = e.attributes,
        c = e.styles,
        l = e.transform;
    if ( of (l) && r.found && !a.found) {
        var f = r.width,
            h = r.height,
            g = {
                x: f / h / 2,
                y: .5
            };
        o.style = xo(H(H({}, c), {}, {
            "transform-origin": "".concat(g.x + l.x / 16, "em ").concat(g.y + l.y / 16, "em")
        }))
    }
    return [{
        tag: "svg",
        attributes: o,
        children: t
    }]
}

function AC(e) {
    var t = e.prefix,
        r = e.iconName,
        a = e.children,
        o = e.attributes,
        c = e.symbol,
        l = c === !0 ? "".concat(t, "-").concat(W.cssPrefix, "-").concat(r) : c;
    return [{
        tag: "svg",
        attributes: {
            style: "display: none;"
        },
        children: [{
            tag: "symbol",
            attributes: H(H({}, o), {}, {
                id: l
            }),
            children: a
        }]
    }]
}

function ff(e) {
    var t = e.icons,
        r = t.main,
        a = t.mask,
        o = e.prefix,
        c = e.iconName,
        l = e.transform,
        f = e.symbol,
        h = e.title,
        g = e.maskId,
        v = e.titleId,
        y = e.extra,
        x = e.watchable,
        C = x === void 0 ? !1 : x,
        L = a.found ? a : r,
        P = L.width,
        N = L.height,
        R = o === "fak",
        $ = [W.replacementClass, c ? "".concat(W.cssPrefix, "-").concat(c) : ""].filter(function(at) {
            return y.classes.indexOf(at) === -1
        }).filter(function(at) {
            return at !== "" || !!at
        }).concat(y.classes).join(" "),
        k = {
            children: [],
            attributes: H(H({}, y.attributes), {}, {
                "data-prefix": o,
                "data-icon": c,
                class: $,
                role: y.attributes.role || "img",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 ".concat(P, " ").concat(N)
            })
        },
        B = R && !~y.classes.indexOf("fa-fw") ? {
            width: "".concat(P / N * 16 * .0625, "em")
        } : {};
    C && (k.attributes[Er] = ""), h && (k.children.push({
        tag: "title",
        attributes: {
            id: k.attributes["aria-labelledby"] || "title-".concat(v || ra())
        },
        children: [h]
    }), delete k.attributes.title);
    var F = H(H({}, k), {}, {
            prefix: o,
            iconName: c,
            main: r,
            mask: a,
            maskId: g,
            transform: l,
            symbol: f,
            styles: H(H({}, B), y.styles)
        }),
        q = a.found && r.found ? gn("generateAbstractMask", F) || {
            children: [],
            attributes: {}
        } : gn("generateAbstractIcon", F) || {
            children: [],
            attributes: {}
        },
        J = q.children,
        lt = q.attributes;
    return F.children = J, F.attributes = lt, f ? AC(F) : wC(F)
}

function n0(e) {
    var t = e.content,
        r = e.width,
        a = e.height,
        o = e.transform,
        c = e.title,
        l = e.extra,
        f = e.watchable,
        h = f === void 0 ? !1 : f,
        g = H(H(H({}, l.attributes), c ? {
            title: c
        } : {}), {}, {
            class: l.classes.join(" ")
        });
    h && (g[Er] = "");
    var v = H({}, l.styles); of (o) && (v.transform = tC({
        transform: o,
        startCentered: !0,
        width: r,
        height: a
    }), v["-webkit-transform"] = v.transform);
    var y = xo(v);
    y.length > 0 && (g.style = y);
    var x = [];
    return x.push({
        tag: "span",
        attributes: g,
        children: [t]
    }), c && x.push({
        tag: "span",
        attributes: {
            class: "sr-only"
        },
        children: [c]
    }), x
}

function xC(e) {
    var t = e.content,
        r = e.title,
        a = e.extra,
        o = H(H(H({}, a.attributes), r ? {
            title: r
        } : {}), {}, {
            class: a.classes.join(" ")
        }),
        c = xo(a.styles);
    c.length > 0 && (o.style = c);
    var l = [];
    return l.push({
        tag: "span",
        attributes: o,
        children: [t]
    }), r && l.push({
        tag: "span",
        attributes: {
            class: "sr-only"
        },
        children: [r]
    }), l
}
var wl = Ie.styles;

function su(e) {
    var t = e[0],
        r = e[1],
        a = e.slice(4),
        o = tf(a, 1),
        c = o[0],
        l = null;
    return Array.isArray(c) ? l = {
        tag: "g",
        attributes: {
            class: "".concat(W.cssPrefix, "-").concat(dr.GROUP)
        },
        children: [{
            tag: "path",
            attributes: {
                class: "".concat(W.cssPrefix, "-").concat(dr.SECONDARY),
                fill: "currentColor",
                d: c[0]
            }
        }, {
            tag: "path",
            attributes: {
                class: "".concat(W.cssPrefix, "-").concat(dr.PRIMARY),
                fill: "currentColor",
                d: c[1]
            }
        }]
    } : l = {
        tag: "path",
        attributes: {
            fill: "currentColor",
            d: c
        }
    }, {
        found: !0,
        width: t,
        height: r,
        icon: l
    }
}
var CC = {
    found: !1,
    width: 512,
    height: 512
};

function TC(e, t) {
    !ap && !W.showMissingIcons && e && console.error('Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'))
}

function ou(e, t) {
    var r = t;
    return t === "fa" && W.styleDefault !== null && (t = Un()), new Promise(function(a, o) {
        if (gn("missingIconAbstract"), r === "fa") {
            var c = _p(e) || {};
            e = c.iconName || e, t = c.prefix || t
        }
        if (e && t && wl[t] && wl[t][e]) {
            var l = wl[t][e];
            return a(su(l))
        }
        TC(e, t), a(H(H({}, CC), {}, {
            icon: W.showMissingIcons && e ? gn("missingIconAbstract") || {} : {}
        }))
    })
}
var r0 = function() {},
    cu = W.measurePerformance && _s && _s.mark && _s.measure ? _s : {
        mark: r0,
        measure: r0
    },
    Hi = 'FA "6.4.2"',
    SC = function(t) {
        return cu.mark("".concat(Hi, " ").concat(t, " begins")),
            function() {
                return yp(t)
            }
    },
    yp = function(t) {
        cu.mark("".concat(Hi, " ").concat(t, " ends")), cu.measure("".concat(Hi, " ").concat(t), "".concat(Hi, " ").concat(t, " begins"), "".concat(Hi, " ").concat(t, " ends"))
    },
    df = {
        begin: SC,
        end: yp
    },
    Ds = function() {};

function i0(e) {
    var t = e.getAttribute ? e.getAttribute(Er) : null;
    return typeof t == "string"
}

function OC(e) {
    var t = e.getAttribute ? e.getAttribute(nf) : null,
        r = e.getAttribute ? e.getAttribute(rf) : null;
    return t && r
}

function GC(e) {
    return e && e.classList && e.classList.contains && e.classList.contains(W.replacementClass)
}

function NC() {
    if (W.autoReplaceSvg === !0) return ks.replace;
    var e = ks[W.autoReplaceSvg];
    return e || ks.replace
}

function LC(e) {
    return gt.createElementNS("http://www.w3.org/2000/svg", e)
}

function IC(e) {
    return gt.createElement(e)
}

function Ep(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
        r = t.ceFn,
        a = r === void 0 ? e.tag === "svg" ? LC : IC : r;
    if (typeof e == "string") return gt.createTextNode(e);
    var o = a(e.tag);
    Object.keys(e.attributes || []).forEach(function(l) {
        o.setAttribute(l, e.attributes[l])
    });
    var c = e.children || [];
    return c.forEach(function(l) {
        o.appendChild(Ep(l, {
            ceFn: a
        }))
    }), o
}

function MC(e) {
    var t = " ".concat(e.outerHTML, " ");
    return t = "".concat(t, "Font Awesome fontawesome.com "), t
}
var ks = {
    replace: function(t) {
        var r = t[0];
        if (r.parentNode)
            if (t[1].forEach(function(o) {
                    r.parentNode.insertBefore(Ep(o), r)
                }), r.getAttribute(Er) === null && W.keepOriginalSource) {
                var a = gt.createComment(MC(r));
                r.parentNode.replaceChild(a, r)
            } else r.remove()
    },
    nest: function(t) {
        var r = t[0],
            a = t[1];
        if (~sf(r).indexOf(W.replacementClass)) return ks.replace(t);
        var o = new RegExp("".concat(W.cssPrefix, "-.*"));
        if (delete a[0].attributes.id, a[0].attributes.class) {
            var c = a[0].attributes.class.split(" ").reduce(function(f, h) {
                return h === W.replacementClass || h.match(o) ? f.toSvg.push(h) : f.toNode.push(h), f
            }, {
                toNode: [],
                toSvg: []
            });
            a[0].attributes.class = c.toSvg.join(" "), c.toNode.length === 0 ? r.removeAttribute("class") : r.setAttribute("class", c.toNode.join(" "))
        }
        var l = a.map(function(f) {
            return _a(f)
        }).join(`
`);
        r.setAttribute(Er, ""), r.innerHTML = l
    }
};

function a0(e) {
    e()
}

function wp(e, t) {
    var r = typeof t == "function" ? t : Ds;
    if (e.length === 0) r();
    else {
        var a = a0;
        W.mutateApproach === kx && (a = Wn.requestAnimationFrame || a0), a(function() {
            var o = NC(),
                c = df.begin("mutate");
            e.map(o), c(), r()
        })
    }
}
var hf = !1;

function Ap() {
    hf = !0
}

function lu() {
    hf = !1
}
var qs = null;

function s0(e) {
    if (!!qd && !!W.observeMutations) {
        var t = e.treeCallback,
            r = t === void 0 ? Ds : t,
            a = e.nodeCallback,
            o = a === void 0 ? Ds : a,
            c = e.pseudoElementsCallback,
            l = c === void 0 ? Ds : c,
            f = e.observeMutationsRoot,
            h = f === void 0 ? gt : f;
        qs = new qd(function(g) {
            if (!hf) {
                var v = Un();
                gi(g).forEach(function(y) {
                    if (y.type === "childList" && y.addedNodes.length > 0 && !i0(y.addedNodes[0]) && (W.searchPseudoElements && l(y.target), r(y.target)), y.type === "attributes" && y.target.parentNode && W.searchPseudoElements && l(y.target.parentNode), y.type === "attributes" && i0(y.target) && ~Wx.indexOf(y.attributeName))
                        if (y.attributeName === "class" && OC(y.target)) {
                            var x = To(sf(y.target)),
                                C = x.prefix,
                                L = x.iconName;
                            y.target.setAttribute(nf, C || v), L && y.target.setAttribute(rf, L)
                        } else GC(y.target) && o(y.target)
                })
            }
        }), _n && qs.observe(h, {
            childList: !0,
            attributes: !0,
            characterData: !0,
            subtree: !0
        })
    }
}

function PC() {
    !qs || qs.disconnect()
}

function RC(e) {
    var t = e.getAttribute("style"),
        r = [];
    return t && (r = t.split(";").reduce(function(a, o) {
        var c = o.split(":"),
            l = c[0],
            f = c.slice(1);
        return l && f.length > 0 && (a[l] = f.join(":").trim()), a
    }, {})), r
}

function DC(e) {
    var t = e.getAttribute("data-prefix"),
        r = e.getAttribute("data-icon"),
        a = e.innerText !== void 0 ? e.innerText.trim() : "",
        o = To(sf(e));
    return o.prefix || (o.prefix = Un()), t && r && (o.prefix = t, o.iconName = r), o.iconName && o.prefix || (o.prefix && a.length > 0 && (o.iconName = hC(o.prefix, e.innerText) || lf(o.prefix, nu(e.innerText))), !o.iconName && W.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (o.iconName = e.firstChild.data)), o
}

function kC(e) {
    var t = gi(e.attributes).reduce(function(o, c) {
            return o.name !== "class" && o.name !== "style" && (o[c.name] = c.value), o
        }, {}),
        r = e.getAttribute("title"),
        a = e.getAttribute("data-fa-title-id");
    return W.autoA11y && (r ? t["aria-labelledby"] = "".concat(W.replacementClass, "-title-").concat(a || ra()) : (t["aria-hidden"] = "true", t.focusable = "false")), t
}

function BC() {
    return {
        iconName: null,
        title: null,
        titleId: null,
        prefix: null,
        transform: We,
        symbol: !1,
        mask: {
            iconName: null,
            prefix: null,
            rest: []
        },
        maskId: null,
        extra: {
            classes: [],
            styles: {},
            attributes: {}
        }
    }
}

function o0(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
            styleParser: !0
        },
        r = DC(e),
        a = r.iconName,
        o = r.prefix,
        c = r.rest,
        l = kC(e),
        f = iu("parseNodeAttributes", {}, e),
        h = t.styleParser ? RC(e) : [];
    return H({
        iconName: a,
        title: e.getAttribute("title"),
        titleId: e.getAttribute("data-fa-title-id"),
        prefix: o,
        transform: We,
        mask: {
            iconName: null,
            prefix: null,
            rest: []
        },
        maskId: null,
        symbol: !1,
        extra: {
            classes: c,
            styles: h,
            attributes: l
        }
    }, f)
}
var $C = Ie.styles;

function xp(e) {
    var t = W.autoReplaceSvg === "nest" ? o0(e, {
        styleParser: !1
    }) : o0(e);
    return ~t.extra.classes.indexOf(sp) ? gn("generateLayersText", e, t) : gn("generateSvgReplacementMutation", e, t)
}
var Yn = new Set;
af.map(function(e) {
    Yn.add("fa-".concat(e))
});
Object.keys(Qi[mt]).map(Yn.add.bind(Yn));
Object.keys(Qi[Et]).map(Yn.add.bind(Yn));
Yn = ga(Yn);

function c0(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    if (!_n) return Promise.resolve();
    var r = gt.documentElement.classList,
        a = function(y) {
            return r.add("".concat(Xd, "-").concat(y))
        },
        o = function(y) {
            return r.remove("".concat(Xd, "-").concat(y))
        },
        c = W.autoFetchSvg ? Yn : af.map(function(v) {
            return "fa-".concat(v)
        }).concat(Object.keys($C));
    c.includes("fa") || c.push("fa");
    var l = [".".concat(sp, ":not([").concat(Er, "])")].concat(c.map(function(v) {
        return ".".concat(v, ":not([").concat(Er, "])")
    })).join(", ");
    if (l.length === 0) return Promise.resolve();
    var f = [];
    try {
        f = gi(e.querySelectorAll(l))
    } catch {}
    if (f.length > 0) a("pending"), o("complete");
    else return Promise.resolve();
    var h = df.begin("onTree"),
        g = f.reduce(function(v, y) {
            try {
                var x = xp(y);
                x && v.push(x)
            } catch (C) {
                ap || C.name === "MissingIcon" && console.error(C)
            }
            return v
        }, []);
    return new Promise(function(v, y) {
        Promise.all(g).then(function(x) {
            wp(x, function() {
                a("active"), a("complete"), o("pending"), typeof t == "function" && t(), h(), v()
            })
        }).catch(function(x) {
            h(), y(x)
        })
    })
}

function zC(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    xp(e).then(function(r) {
        r && wp([r], t)
    })
}

function HC(e) {
    return function(t) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
            a = (t || {}).icon ? t : au(t || {}),
            o = r.mask;
        return o && (o = (o || {}).icon ? o : au(o || {})), e(a, H(H({}, r), {}, {
            mask: o
        }))
    }
}
var FC = function(t) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
            a = r.transform,
            o = a === void 0 ? We : a,
            c = r.symbol,
            l = c === void 0 ? !1 : c,
            f = r.mask,
            h = f === void 0 ? null : f,
            g = r.maskId,
            v = g === void 0 ? null : g,
            y = r.title,
            x = y === void 0 ? null : y,
            C = r.titleId,
            L = C === void 0 ? null : C,
            P = r.classes,
            N = P === void 0 ? [] : P,
            R = r.attributes,
            $ = R === void 0 ? {} : R,
            k = r.styles,
            B = k === void 0 ? {} : k;
        if (!!t) {
            var F = t.prefix,
                q = t.iconName,
                J = t.icon;
            return So(H({
                type: "icon"
            }, t), function() {
                return wr("beforeDOMElementCreation", {
                    iconDefinition: t,
                    params: r
                }), W.autoA11y && (x ? $["aria-labelledby"] = "".concat(W.replacementClass, "-title-").concat(L || ra()) : ($["aria-hidden"] = "true", $.focusable = "false")), ff({
                    icons: {
                        main: su(J),
                        mask: h ? su(h.icon) : {
                            found: !1,
                            width: null,
                            height: null,
                            icon: {}
                        }
                    },
                    prefix: F,
                    iconName: q,
                    transform: H(H({}, We), o),
                    symbol: l,
                    title: x,
                    maskId: v,
                    titleId: L,
                    extra: {
                        attributes: $,
                        styles: B,
                        classes: N
                    }
                })
            })
        }
    },
    VC = {
        mixout: function() {
            return {
                icon: HC(FC)
            }
        },
        hooks: function() {
            return {
                mutationObserverCallbacks: function(r) {
                    return r.treeCallback = c0, r.nodeCallback = zC, r
                }
            }
        },
        provides: function(t) {
            t.i2svg = function(r) {
                var a = r.node,
                    o = a === void 0 ? gt : a,
                    c = r.callback,
                    l = c === void 0 ? function() {} : c;
                return c0(o, l)
            }, t.generateSvgReplacementMutation = function(r, a) {
                var o = a.iconName,
                    c = a.title,
                    l = a.titleId,
                    f = a.prefix,
                    h = a.transform,
                    g = a.symbol,
                    v = a.mask,
                    y = a.maskId,
                    x = a.extra;
                return new Promise(function(C, L) {
                    Promise.all([ou(o, f), v.iconName ? ou(v.iconName, v.prefix) : Promise.resolve({
                        found: !1,
                        width: 512,
                        height: 512,
                        icon: {}
                    })]).then(function(P) {
                        var N = tf(P, 2),
                            R = N[0],
                            $ = N[1];
                        C([r, ff({
                            icons: {
                                main: R,
                                mask: $
                            },
                            prefix: f,
                            iconName: o,
                            transform: h,
                            symbol: g,
                            maskId: y,
                            title: c,
                            titleId: l,
                            extra: x,
                            watchable: !0
                        })])
                    }).catch(L)
                })
            }, t.generateAbstractIcon = function(r) {
                var a = r.children,
                    o = r.attributes,
                    c = r.main,
                    l = r.transform,
                    f = r.styles,
                    h = xo(f);
                h.length > 0 && (o.style = h);
                var g;
                return of(l) && (g = gn("generateAbstractTransformGrouping", {
                    main: c,
                    transform: l,
                    containerWidth: c.width,
                    iconWidth: c.width
                })), a.push(g || c.icon), {
                    children: a,
                    attributes: o
                }
            }
        }
    },
    WC = {
        mixout: function() {
            return {
                layer: function(r) {
                    var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                        o = a.classes,
                        c = o === void 0 ? [] : o;
                    return So({
                        type: "layer"
                    }, function() {
                        wr("beforeDOMElementCreation", {
                            assembler: r,
                            params: a
                        });
                        var l = [];
                        return r(function(f) {
                            Array.isArray(f) ? f.map(function(h) {
                                l = l.concat(h.abstract)
                            }) : l = l.concat(f.abstract)
                        }), [{
                            tag: "span",
                            attributes: {
                                class: ["".concat(W.cssPrefix, "-layers")].concat(ga(c)).join(" ")
                            },
                            children: l
                        }]
                    })
                }
            }
        }
    },
    UC = {
        mixout: function() {
            return {
                counter: function(r) {
                    var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                        o = a.title,
                        c = o === void 0 ? null : o,
                        l = a.classes,
                        f = l === void 0 ? [] : l,
                        h = a.attributes,
                        g = h === void 0 ? {} : h,
                        v = a.styles,
                        y = v === void 0 ? {} : v;
                    return So({
                        type: "counter",
                        content: r
                    }, function() {
                        return wr("beforeDOMElementCreation", {
                            content: r,
                            params: a
                        }), xC({
                            content: r.toString(),
                            title: c,
                            extra: {
                                attributes: g,
                                styles: y,
                                classes: ["".concat(W.cssPrefix, "-layers-counter")].concat(ga(f))
                            }
                        })
                    })
                }
            }
        }
    },
    YC = {
        mixout: function() {
            return {
                text: function(r) {
                    var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                        o = a.transform,
                        c = o === void 0 ? We : o,
                        l = a.title,
                        f = l === void 0 ? null : l,
                        h = a.classes,
                        g = h === void 0 ? [] : h,
                        v = a.attributes,
                        y = v === void 0 ? {} : v,
                        x = a.styles,
                        C = x === void 0 ? {} : x;
                    return So({
                        type: "text",
                        content: r
                    }, function() {
                        return wr("beforeDOMElementCreation", {
                            content: r,
                            params: a
                        }), n0({
                            content: r,
                            transform: H(H({}, We), c),
                            title: f,
                            extra: {
                                attributes: y,
                                styles: C,
                                classes: ["".concat(W.cssPrefix, "-layers-text")].concat(ga(g))
                            }
                        })
                    })
                }
            }
        },
        provides: function(t) {
            t.generateLayersText = function(r, a) {
                var o = a.title,
                    c = a.transform,
                    l = a.extra,
                    f = null,
                    h = null;
                if (np) {
                    var g = parseInt(getComputedStyle(r).fontSize, 10),
                        v = r.getBoundingClientRect();
                    f = v.width / g, h = v.height / g
                }
                return W.autoA11y && !o && (l.attributes["aria-hidden"] = "true"), Promise.resolve([r, n0({
                    content: r.innerHTML,
                    width: f,
                    height: h,
                    transform: c,
                    title: o,
                    extra: l,
                    watchable: !0
                })])
            }
        }
    },
    KC = new RegExp('"', "ug"),
    l0 = [1105920, 1112319];

function jC(e) {
    var t = e.replace(KC, ""),
        r = oC(t, 0),
        a = r >= l0[0] && r <= l0[1],
        o = t.length === 2 ? t[0] === t[1] : !1;
    return {
        value: nu(o ? t[0] : t),
        isSecondary: a || o
    }
}

function u0(e, t) {
    var r = "".concat(Dx).concat(t.replace(":", "-"));
    return new Promise(function(a, o) {
        if (e.getAttribute(r) !== null) return a();
        var c = gi(e.children),
            l = c.filter(function(J) {
                return J.getAttribute(eu) === t
            })[0],
            f = Wn.getComputedStyle(e, t),
            h = f.getPropertyValue("font-family").match(Hx),
            g = f.getPropertyValue("font-weight"),
            v = f.getPropertyValue("content");
        if (l && !h) return e.removeChild(l), a();
        if (h && v !== "none" && v !== "") {
            var y = f.getPropertyValue("content"),
                x = ~["Sharp"].indexOf(h[2]) ? Et : mt,
                C = ~["Solid", "Regular", "Light", "Thin", "Duotone", "Brands", "Kit"].indexOf(h[2]) ? ta[x][h[2].toLowerCase()] : Fx[x][g],
                L = jC(y),
                P = L.value,
                N = L.isSecondary,
                R = h[0].startsWith("FontAwesome"),
                $ = lf(C, P),
                k = $;
            if (R) {
                var B = pC(P);
                B.iconName && B.prefix && ($ = B.iconName, C = B.prefix)
            }
            if ($ && !N && (!l || l.getAttribute(nf) !== C || l.getAttribute(rf) !== k)) {
                e.setAttribute(r, k), l && e.removeChild(l);
                var F = BC(),
                    q = F.extra;
                q.attributes[eu] = t, ou($, C).then(function(J) {
                    var lt = ff(H(H({}, F), {}, {
                            icons: {
                                main: J,
                                mask: uf()
                            },
                            prefix: C,
                            iconName: k,
                            extra: q,
                            watchable: !0
                        })),
                        at = gt.createElementNS("http://www.w3.org/2000/svg", "svg");
                    t === "::before" ? e.insertBefore(at, e.firstChild) : e.appendChild(at), at.outerHTML = lt.map(function(ht) {
                        return _a(ht)
                    }).join(`
`), e.removeAttribute(r), a()
                }).catch(o)
            } else a()
        } else a()
    })
}

function qC(e) {
    return Promise.all([u0(e, "::before"), u0(e, "::after")])
}

function XC(e) {
    return e.parentNode !== document.head && !~Bx.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(eu) && (!e.parentNode || e.parentNode.tagName !== "svg")
}

function f0(e) {
    if (!!_n) return new Promise(function(t, r) {
        var a = gi(e.querySelectorAll("*")).filter(XC).map(qC),
            o = df.begin("searchPseudoElements");
        Ap(), Promise.all(a).then(function() {
            o(), lu(), t()
        }).catch(function() {
            o(), lu(), r()
        })
    })
}
var JC = {
        hooks: function() {
            return {
                mutationObserverCallbacks: function(r) {
                    return r.pseudoElementsCallback = f0, r
                }
            }
        },
        provides: function(t) {
            t.pseudoElements2svg = function(r) {
                var a = r.node,
                    o = a === void 0 ? gt : a;
                W.searchPseudoElements && f0(o)
            }
        }
    },
    d0 = !1,
    ZC = {
        mixout: function() {
            return {
                dom: {
                    unwatch: function() {
                        Ap(), d0 = !0
                    }
                }
            }
        },
        hooks: function() {
            return {
                bootstrap: function() {
                    s0(iu("mutationObserverCallbacks", {}))
                },
                noAuto: function() {
                    PC()
                },
                watch: function(r) {
                    var a = r.observeMutationsRoot;
                    d0 ? lu() : s0(iu("mutationObserverCallbacks", {
                        observeMutationsRoot: a
                    }))
                }
            }
        }
    },
    h0 = function(t) {
        var r = {
            size: 16,
            x: 0,
            y: 0,
            flipX: !1,
            flipY: !1,
            rotate: 0
        };
        return t.toLowerCase().split(" ").reduce(function(a, o) {
            var c = o.toLowerCase().split("-"),
                l = c[0],
                f = c.slice(1).join("-");
            if (l && f === "h") return a.flipX = !0, a;
            if (l && f === "v") return a.flipY = !0, a;
            if (f = parseFloat(f), isNaN(f)) return a;
            switch (l) {
                case "grow":
                    a.size = a.size + f;
                    break;
                case "shrink":
                    a.size = a.size - f;
                    break;
                case "left":
                    a.x = a.x - f;
                    break;
                case "right":
                    a.x = a.x + f;
                    break;
                case "up":
                    a.y = a.y - f;
                    break;
                case "down":
                    a.y = a.y + f;
                    break;
                case "rotate":
                    a.rotate = a.rotate + f;
                    break
            }
            return a
        }, r)
    },
    QC = {
        mixout: function() {
            return {
                parse: {
                    transform: function(r) {
                        return h0(r)
                    }
                }
            }
        },
        hooks: function() {
            return {
                parseNodeAttributes: function(r, a) {
                    var o = a.getAttribute("data-fa-transform");
                    return o && (r.transform = h0(o)), r
                }
            }
        },
        provides: function(t) {
            t.generateAbstractTransformGrouping = function(r) {
                var a = r.main,
                    o = r.transform,
                    c = r.containerWidth,
                    l = r.iconWidth,
                    f = {
                        transform: "translate(".concat(c / 2, " 256)")
                    },
                    h = "translate(".concat(o.x * 32, ", ").concat(o.y * 32, ") "),
                    g = "scale(".concat(o.size / 16 * (o.flipX ? -1 : 1), ", ").concat(o.size / 16 * (o.flipY ? -1 : 1), ") "),
                    v = "rotate(".concat(o.rotate, " 0 0)"),
                    y = {
                        transform: "".concat(h, " ").concat(g, " ").concat(v)
                    },
                    x = {
                        transform: "translate(".concat(l / 2 * -1, " -256)")
                    },
                    C = {
                        outer: f,
                        inner: y,
                        path: x
                    };
                return {
                    tag: "g",
                    attributes: H({}, C.outer),
                    children: [{
                        tag: "g",
                        attributes: H({}, C.inner),
                        children: [{
                            tag: a.icon.tag,
                            children: a.icon.children,
                            attributes: H(H({}, a.icon.attributes), C.path)
                        }]
                    }]
                }
            }
        }
    },
    Al = {
        x: 0,
        y: 0,
        width: "100%",
        height: "100%"
    };

function p0(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
    return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e
}

function tT(e) {
    return e.tag === "g" ? e.children : [e]
}
var eT = {
        hooks: function() {
            return {
                parseNodeAttributes: function(r, a) {
                    var o = a.getAttribute("data-fa-mask"),
                        c = o ? To(o.split(" ").map(function(l) {
                            return l.trim()
                        })) : uf();
                    return c.prefix || (c.prefix = Un()), r.mask = c, r.maskId = a.getAttribute("data-fa-mask-id"), r
                }
            }
        },
        provides: function(t) {
            t.generateAbstractMask = function(r) {
                var a = r.children,
                    o = r.attributes,
                    c = r.main,
                    l = r.mask,
                    f = r.maskId,
                    h = r.transform,
                    g = c.width,
                    v = c.icon,
                    y = l.width,
                    x = l.icon,
                    C = Qx({
                        transform: h,
                        containerWidth: y,
                        iconWidth: g
                    }),
                    L = {
                        tag: "rect",
                        attributes: H(H({}, Al), {}, {
                            fill: "white"
                        })
                    },
                    P = v.children ? {
                        children: v.children.map(p0)
                    } : {},
                    N = {
                        tag: "g",
                        attributes: H({}, C.inner),
                        children: [p0(H({
                            tag: v.tag,
                            attributes: H(H({}, v.attributes), C.path)
                        }, P))]
                    },
                    R = {
                        tag: "g",
                        attributes: H({}, C.outer),
                        children: [N]
                    },
                    $ = "mask-".concat(f || ra()),
                    k = "clip-".concat(f || ra()),
                    B = {
                        tag: "mask",
                        attributes: H(H({}, Al), {}, {
                            id: $,
                            maskUnits: "userSpaceOnUse",
                            maskContentUnits: "userSpaceOnUse"
                        }),
                        children: [L, R]
                    },
                    F = {
                        tag: "defs",
                        children: [{
                            tag: "clipPath",
                            attributes: {
                                id: k
                            },
                            children: tT(x)
                        }, B]
                    };
                return a.push(F, {
                    tag: "rect",
                    attributes: H({
                        fill: "currentColor",
                        "clip-path": "url(#".concat(k, ")"),
                        mask: "url(#".concat($, ")")
                    }, Al)
                }), {
                    children: a,
                    attributes: o
                }
            }
        }
    },
    nT = {
        provides: function(t) {
            var r = !1;
            Wn.matchMedia && (r = Wn.matchMedia("(prefers-reduced-motion: reduce)").matches), t.missingIconAbstract = function() {
                var a = [],
                    o = {
                        fill: "currentColor"
                    },
                    c = {
                        attributeType: "XML",
                        repeatCount: "indefinite",
                        dur: "2s"
                    };
                a.push({
                    tag: "path",
                    attributes: H(H({}, o), {}, {
                        d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
                    })
                });
                var l = H(H({}, c), {}, {
                        attributeName: "opacity"
                    }),
                    f = {
                        tag: "circle",
                        attributes: H(H({}, o), {}, {
                            cx: "256",
                            cy: "364",
                            r: "28"
                        }),
                        children: []
                    };
                return r || f.children.push({
                    tag: "animate",
                    attributes: H(H({}, c), {}, {
                        attributeName: "r",
                        values: "28;14;28;28;14;28;"
                    })
                }, {
                    tag: "animate",
                    attributes: H(H({}, l), {}, {
                        values: "1;0;1;1;0;1;"
                    })
                }), a.push(f), a.push({
                    tag: "path",
                    attributes: H(H({}, o), {}, {
                        opacity: "1",
                        d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
                    }),
                    children: r ? [] : [{
                        tag: "animate",
                        attributes: H(H({}, l), {}, {
                            values: "1;0;0;0;0;1;"
                        })
                    }]
                }), r || a.push({
                    tag: "path",
                    attributes: H(H({}, o), {}, {
                        opacity: "0",
                        d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
                    }),
                    children: [{
                        tag: "animate",
                        attributes: H(H({}, l), {}, {
                            values: "0;0;1;1;0;0;"
                        })
                    }]
                }), {
                    tag: "g",
                    attributes: {
                        class: "missing"
                    },
                    children: a
                }
            }
        }
    },
    rT = {
        hooks: function() {
            return {
                parseNodeAttributes: function(r, a) {
                    var o = a.getAttribute("data-fa-symbol"),
                        c = o === null ? !1 : o === "" ? !0 : o;
                    return r.symbol = c, r
                }
            }
        }
    },
    iT = [nC, VC, WC, UC, YC, JC, ZC, QC, eT, nT, rT];
vC(iT, {
    mixoutsTo: he
});
he.noAuto;
he.config;
var pf = he.library,
    aT = he.dom;
he.parse;
he.findIconDefinition;
he.toHtml;
he.icon;
he.layer;
he.text;
he.counter;
/*!
 * Font Awesome Pro 5.15.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license (Commercial License)
 */
var sT = {
        prefix: "fas",
        iconName: "bolt",
        icon: [320, 512, [], "f0e7", "M296 160H180.6l42.6-129.8C227.2 15 215.7 0 200 0H56C44 0 33.8 8.9 32.2 20.8l-32 240C-1.7 275.2 9.5 288 24 288h118.7L96.6 482.5c-3.6 15.2 8 29.5 23.3 29.5 8.4 0 16.4-4.4 20.8-12l176-304c9.3-15.9-2.2-36-20.7-36z"]
    },
    oT = {
        prefix: "fas",
        iconName: "box",
        icon: [512, 512, [], "f466", "M509.5 184.6L458.9 32.8C452.4 13.2 434.1 0 413.4 0H272v192h238.7c-.4-2.5-.4-5-1.2-7.4zM240 0H98.6c-20.7 0-39 13.2-45.5 32.8L2.5 184.6c-.8 2.4-.8 4.9-1.2 7.4H240V0zM0 224v240c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V224H0z"]
    },
    cT = {
        prefix: "fas",
        iconName: "browser",
        icon: [512, 512, [], "f37e", "M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM128 148c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm320 0c0 6.6-5.4 12-12 12H188c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h248c6.6 0 12 5.4 12 12v40z"]
    },
    lT = {
        prefix: "fas",
        iconName: "check",
        icon: [512, 512, [], "f00c", "M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"]
    },
    uT = {
        prefix: "fas",
        iconName: "circle",
        icon: [512, 512, [], "f111", "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"]
    },
    fT = {
        prefix: "fas",
        iconName: "clipboard-list",
        icon: [384, 512, [], "f46d", "M336 64h-80c0-35.3-28.7-64-64-64s-64 28.7-64 64H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM96 424c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm0-96c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm0-96c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm96-192c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm128 368c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-96c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-96c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16z"]
    },
    dT = {
        prefix: "fas",
        iconName: "clock",
        icon: [512, 512, [], "f017", "M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"]
    },
    hT = {
        prefix: "fas",
        iconName: "coffee",
        icon: [640, 512, [], "f0f4", "M192 384h192c53 0 96-43 96-96h32c70.6 0 128-57.4 128-128S582.6 32 512 32H120c-13.3 0-24 10.7-24 24v232c0 53 43 96 96 96zM512 96c35.3 0 64 28.7 64 64s-28.7 64-64 64h-32V96h32zm47.7 384H48.3c-47.6 0-61-64-36-64h583.3c25 0 11.8 64-35.9 64z"]
    },
    pT = {
        prefix: "fas",
        iconName: "copy",
        icon: [448, 512, [], "f0c5", "M320 448v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V120c0-13.255 10.745-24 24-24h72v296c0 30.879 25.121 56 56 56h168zm0-344V0H152c-13.255 0-24 10.745-24 24v368c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24V128H344c-13.2 0-24-10.8-24-24zm120.971-31.029L375.029 7.029A24 24 0 0 0 358.059 0H352v96h96v-6.059a24 24 0 0 0-7.029-16.97z"]
    },
    mT = {
        prefix: "fas",
        iconName: "envelope",
        icon: [512, 512, [], "f0e0", "M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"]
    },
    gT = {
        prefix: "fas",
        iconName: "exclamation",
        icon: [192, 512, [], "f12a", "M176 432c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80zM25.26 25.199l13.6 272C39.499 309.972 50.041 320 62.83 320h66.34c12.789 0 23.331-10.028 23.97-22.801l13.6-272C167.425 11.49 156.496 0 142.77 0H49.23C35.504 0 24.575 11.49 25.26 25.199z"]
    },
    vT = {
        prefix: "fas",
        iconName: "exclamation-square",
        icon: [448, 512, [], "f321", "M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm-207.691 96h63.382c6.884 0 12.357 5.78 11.982 12.654l-7.418 136c-.347 6.364-5.609 11.346-11.982 11.346h-48.546c-6.373 0-11.635-4.982-11.982-11.346l-7.418-136c-.375-6.874 5.098-12.654 11.982-12.654zM224 398c-25.405 0-46-20.595-46-46s20.595-46 46-46 46 20.595 46 46-20.595 46-46 46z"]
    },
    _T = {
        prefix: "fas",
        iconName: "globe",
        icon: [496, 512, [], "f0ac", "M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"]
    },
    bT = {
        prefix: "fas",
        iconName: "heart",
        icon: [512, 512, [], "f004", "M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"]
    },
    yT = {
        prefix: "fas",
        iconName: "link",
        icon: [512, 512, [], "f0c1", "M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"]
    },
    ET = {
        prefix: "fas",
        iconName: "map-marker",
        icon: [384, 512, [], "f041", "M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0z"]
    },
    wT = {
        prefix: "fas",
        iconName: "moon",
        icon: [512, 512, [], "f186", "M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"]
    },
    AT = {
        prefix: "fas",
        iconName: "phone",
        icon: [512, 512, [], "f095", "M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"]
    },
    xT = {
        prefix: "fas",
        iconName: "phone-laptop",
        icon: [640, 512, [], "f87a", "M604 128H420a36 36 0 0 0-36 36v312a36 36 0 0 0 36 36h184a36 36 0 0 0 36-36V164a36 36 0 0 0-36-36zm-28 320H448V192h128zM128 64h320v32h64V48a48.1 48.1 0 0 0-47.91-48H111.91A48.1 48.1 0 0 0 64 48v240H16a16 16 0 0 0-16 16v16a64.14 64.14 0 0 0 63.91 64H352v-96H128z"]
    },
    CT = {
        prefix: "fas",
        iconName: "plus",
        icon: [448, 512, [], "f067", "M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"]
    },
    TT = {
        prefix: "fas",
        iconName: "robot",
        icon: [640, 512, [], "f544", "M32,224H64V416H32A31.96166,31.96166,0,0,1,0,384V256A31.96166,31.96166,0,0,1,32,224Zm512-48V448a64.06328,64.06328,0,0,1-64,64H160a64.06328,64.06328,0,0,1-64-64V176a79.974,79.974,0,0,1,80-80H288V32a32,32,0,0,1,64,0V96H464A79.974,79.974,0,0,1,544,176ZM264,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,264,256Zm-8,128H192v32h64Zm96,0H288v32h64ZM456,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,456,256Zm-8,128H384v32h64ZM640,256V384a31.96166,31.96166,0,0,1-32,32H576V224h32A31.96166,31.96166,0,0,1,640,256Z"]
    },
    ST = {
        prefix: "fas",
        iconName: "search",
        icon: [512, 512, [], "f002", "M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"]
    },
    OT = {
        prefix: "fas",
        iconName: "share",
        icon: [512, 512, [], "f064", "M503.691 189.836L327.687 37.851C312.281 24.546 288 35.347 288 56.015v80.053C127.371 137.907 0 170.1 0 322.326c0 61.441 39.581 122.309 83.333 154.132 13.653 9.931 33.111-2.533 28.077-18.631C66.066 312.814 132.917 274.316 288 272.085V360c0 20.7 24.3 31.453 39.687 18.164l176.004-152c11.071-9.562 11.086-26.753 0-36.328z"]
    },
    GT = {
        prefix: "fas",
        iconName: "shipping-fast",
        icon: [640, 512, [], "f48b", "M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H112C85.5 0 64 21.5 64 48v48H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h272c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H40c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H64v128c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm320 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-208H416V144h44.1l99.9 99.9V256z"]
    },
    NT = {
        prefix: "fas",
        iconName: "spider-black-widow",
        icon: [576, 512, [], "f718", "M382.29 26.13c-2.79-8.38 1.73-17.44 10.12-20.24L407.58.83c8.38-2.8 17.45 1.73 20.24 10.12l25.89 77.68a32.04 32.04 0 0 1-1.73 24.43l-27.15 54.3L398.9 176h-4.67l-5.22-26.12c-.71-3.58-1.8-7.58-3.21-11.79l20.29-40.58-23.8-71.38zM151.17 167.35L177.1 176h4.67l5.22-26.12c.72-3.58 1.8-7.58 3.21-11.79l-20.29-40.58 23.8-71.39c2.79-8.38-1.73-17.44-10.12-20.24L168.42.82c-8.38-2.8-17.45 1.73-20.24 10.12l-25.89 77.68a32.04 32.04 0 0 0 1.73 24.43l27.15 54.3zm417.7 204.21l-13.31 8.88c-7.35 4.9-17.29 2.91-22.19-4.44l-48-72h-47.06l60.83 97.33a31.988 31.988 0 0 1 4.86 16.96V496c0 8.84-7.16 16-16 16h-16c-8.84 0-16-7.16-16-16v-73.11l-74.08-118.53c1.01 14.05 2.08 28.11 2.08 42.21C384 399.64 343.24 448 288 448s-96-48.36-96-101.43c0-14.1 1.08-28.16 2.08-42.21L120 422.89V496c0 8.84-7.16 16-16 16H88c-8.84 0-16-7.16-16-16v-77.71c0-6 1.69-11.88 4.86-16.96L137.69 304H90.63l-48 72c-4.9 7.35-14.84 9.34-22.19 4.44l-13.31-8.88c-7.35-4.9-9.34-14.84-4.44-22.19l52.75-79.12A32.007 32.007 0 0 1 82.07 256H160l-68.99-24.36a32.03 32.03 0 0 1-16.51-12.61l-53.6-80.41c-4.9-7.35-2.91-17.29 4.44-22.19l13.31-8.88c7.35-4.9 17.29-2.91 22.19 4.44l50.56 75.83L171.9 208H208l10.37-51.85C220.56 145.18 235.74 96 288 96c52.26 0 67.44 49.18 69.63 60.15L368 208h36.1l60.49-20.17L515.16 112c4.9-7.35 14.83-9.34 22.19-4.44l13.31 8.88c7.35 4.9 9.34 14.83 4.44 22.19l-53.6 80.41a32.03 32.03 0 0 1-16.51 12.61L416 256h77.94c10.7 0 20.69 5.35 26.62 14.25l52.75 79.12c4.9 7.36 2.92 17.29-4.44 22.19zM300 320l26.4-35.2c3.96-5.27.19-12.8-6.4-12.8h-64c-6.59 0-10.36 7.53-6.4 12.8L276 320l-26.4 35.2c-3.96 5.27-.19 12.8 6.4 12.8h64c6.59 0 10.36-7.53 6.4-12.8L300 320z"]
    },
    LT = {
        prefix: "fas",
        iconName: "spinner",
        icon: [512, 512, [], "f110", "M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z"]
    },
    IT = {
        prefix: "fas",
        iconName: "store-alt",
        icon: [640, 512, [], "f54f", "M320 384H128V224H64v256c0 17.7 14.3 32 32 32h256c17.7 0 32-14.3 32-32V224h-64v160zm314.6-241.8l-85.3-128c-6-8.9-16-14.2-26.7-14.2H117.4c-10.7 0-20.7 5.3-26.6 14.2l-85.3 128c-14.2 21.3 1 49.8 26.6 49.8H608c25.5 0 40.7-28.5 26.6-49.8zM512 496c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V224h-64v272z"]
    },
    MT = {
        prefix: "fas",
        iconName: "sync-alt",
        icon: [512, 512, [], "f2f1", "M370.72 133.28C339.458 104.008 298.888 87.962 255.848 88c-77.458.068-144.328 53.178-162.791 126.85-1.344 5.363-6.122 9.15-11.651 9.15H24.103c-7.498 0-13.194-6.807-11.807-14.176C33.933 94.924 134.813 8 256 8c66.448 0 126.791 26.136 171.315 68.685L463.03 40.97C478.149 25.851 504 36.559 504 57.941V192c0 13.255-10.745 24-24 24H345.941c-21.382 0-32.09-25.851-16.971-40.971l41.75-41.749zM32 296h134.059c21.382 0 32.09 25.851 16.971 40.971l-41.75 41.75c31.262 29.273 71.835 45.319 114.876 45.28 77.418-.07 144.315-53.144 162.787-126.849 1.344-5.363 6.122-9.15 11.651-9.15h57.304c7.498 0 13.194 6.807 11.807 14.176C478.067 417.076 377.187 504 256 504c-66.448 0-126.791-26.136-171.315-68.685L48.97 471.03C33.851 486.149 8 475.441 8 454.059V320c0-13.255 10.745-24 24-24z"]
    },
    PT = {
        prefix: "fas",
        iconName: "times",
        icon: [352, 512, [], "f00d", "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"]
    },
    RT = {
        prefix: "fas",
        iconName: "truck",
        icon: [640, 512, [], "f0d1", "M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h16c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm320 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-208H416V144h44.1l99.9 99.9V256z"]
    },
    DT = {
        prefix: "fas",
        iconName: "warehouse",
        icon: [640, 512, [], "f494", "M504 352H136.4c-4.4 0-8 3.6-8 8l-.1 48c0 4.4 3.6 8 8 8H504c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm0 96H136.1c-4.4 0-8 3.6-8 8l-.1 48c0 4.4 3.6 8 8 8h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm0-192H136.6c-4.4 0-8 3.6-8 8l-.1 48c0 4.4 3.6 8 8 8H504c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm106.5-139L338.4 3.7a48.15 48.15 0 0 0-36.9 0L29.5 117C11.7 124.5 0 141.9 0 161.3V504c0 4.4 3.6 8 8 8h80c4.4 0 8-3.6 8-8V256c0-17.6 14.6-32 32.6-32h382.8c18 0 32.6 14.4 32.6 32v248c0 4.4 3.6 8 8 8h80c4.4 0 8-3.6 8-8V161.3c0-19.4-11.7-36.8-29.5-44.3z"]
    },
    kT = {
        prefix: "fas",
        iconName: "window-restore",
        icon: [512, 512, [], "f2d2", "M512 48v288c0 26.5-21.5 48-48 48h-48V176c0-44.1-35.9-80-80-80H128V48c0-26.5 21.5-48 48-48h288c26.5 0 48 21.5 48 48zM384 176v288c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48h288c26.5 0 48 21.5 48 48zm-68 28c0-6.6-5.4-12-12-12H76c-6.6 0-12 5.4-12 12v52h252v-52z"]
    };
pf.add(_T, ST, AT, mT, cT, yT, pT, OT, PT, wT, IT, LT, oT, bT, lT, GT, DT, sT, gT, RT, fT, dT, uT, ET, CT, xT, vT, MT, NT, hT, kT, TT);
/*!
 * Font Awesome Pro 5.15.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license (Commercial License)
 */
var BT = {
        prefix: "far",
        iconName: "barcode-scan",
        icon: [640, 512, [], "f465", "M632 232H8c-4.4 0-8 2.7-8 6v36c0 3.3 3.6 6 8 6h624c4.4 0 8-2.7 8-6v-36c0-3.3-3.6-6-8-6zM288 8c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152h64V8zm96 0c0-4.4-3.6-8-8-8h-16c-4.4 0-8 3.6-8 8v152h32V8zm96 0c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152h64V8zM160 8c0-4.4-3.6-8-8-8H72c-4.4 0-8 3.6-8 8v152h96V8zm416 0c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152h64V8zm-64 496c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V352h-64v152zm-160 0c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8V352h-32v152zm64 0c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V352h-64v152zm-192 0c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V352h-64v152zm-160 0c0 4.4 3.6 8 8 8h80c4.4 0 8-3.6 8-8V352H64v152z"]
    },
    $T = {
        prefix: "far",
        iconName: "bell",
        icon: [448, 512, [], "f0f3", "M439.39 362.29c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71zM67.53 368c21.22-27.97 44.42-74.33 44.53-159.42 0-.2-.06-.38-.06-.58 0-61.86 50.14-112 112-112s112 50.14 112 112c0 .2-.06.38-.06.58.11 85.1 23.31 131.46 44.53 159.42H67.53zM224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64z"]
    },
    zT = {
        prefix: "far",
        iconName: "brain",
        icon: [544, 512, [], "f5dc", "M511.9 228.2c1.9-7.5 2.9-15.2 2.9-23 0-33-16.7-63-43.7-80.6-.4-39.7-29.4-72.8-67.5-79.8C389.9 17.8 361.8 0 330.3 0c-22.8 0-43.4 9.2-58.3 24.1A82.316 82.316 0 0 0 213.7 0c-31.4 0-59.6 17.8-73.3 44.9-38.1 7-67.1 40.1-67.5 79.8-27.1 17.6-43.7 47.6-43.7 80.6 0 7.7 1 15.4 2.9 23C11.9 246.3 0 272.2 0 299.5c0 33 16.7 63 43.7 80.6.5 47.5 38.5 86.2 85.8 88.3 15.9 26.7 44.9 43.6 76.8 43.6 26 0 49.2-11.2 65.6-28.8 16.4 17.6 39.6 28.8 65.6 28.8 31.9 0 60.9-16.9 76.8-43.6 47.4-2 85.4-40.8 85.9-88.3 27-17.6 43.7-47.7 43.7-80.6.1-27.3-11.8-53.2-32-71.3zm-264 194.6c0 22.8-18.6 41.2-41.5 41.2-32.9 0-39.5-29.5-45.6-47.6l-20.3 3.4c-24 4-48.5-15.3-48.5-40.5 0-2.8 4.7-27.4 4.7-27.4l-18.2-7.5c-36.9-15.2-41.3-66.1-5.5-86.6l19.5-11.2-9.9-20.1C65 190.7 94 166 107.7 160.4l18.9-7.7c-5-21.9-5.5-22.8-5.5-27.2 0-18.8 15.3-34 31.9-34.1l22.9 1.2 4.8-18.9c3.9-15.1 17.4-25.6 32.9-25.6 18.9 0 34.2 15.2 34.2 34l.1 340.7zm217.7-78.5l-18.3 7.5s4.6 24.6 4.6 27.4c0 25.2-24.5 44.4-48.5 40.5l-20.3-3.4c-6.1 18.2-12.7 47.6-45.6 47.6-22.9 0-41.5-18.5-41.5-41.2V82c0-18.8 15.3-34 34.2-34 15.5 0 29.1 10.5 32.9 25.6l4.8 18.9 22.9-1.2c16.5.1 31.9 15.4 31.9 34.1 0 4.4-.4 5.3-5.5 27.2l18.9 7.7c13.7 5.6 42.7 30.2 25.1 65.9l-9.9 20.1 19.5 11.2c36.1 20.7 31.7 71.6-5.2 86.8z"]
    },
    HT = {
        prefix: "far",
        iconName: "browser",
        icon: [512, 512, [], "f37e", "M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM48 92c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v24c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V92zm416 334c0 3.3-2.7 6-6 6H54c-3.3 0-6-2.7-6-6V168h416v258zm0-310c0 6.6-5.4 12-12 12H172c-6.6 0-12-5.4-12-12V92c0-6.6 5.4-12 12-12h280c6.6 0 12 5.4 12 12v24z"]
    },
    FT = {
        prefix: "far",
        iconName: "caravan",
        icon: [640, 512, [], "f8ff", "M624,336H576V160A160,160,0,0,0,416,0H96A96,96,0,0,0,0,96V288a96,96,0,0,0,96,96,96,96,0,0,0,192,0H624a16,16,0,0,0,16-16V352A16,16,0,0,0,624,336ZM192,432a48,48,0,1,1,48-48A48.05,48.05,0,0,1,192,432ZM432,208a16,16,0,0,0,0,32v96H368V144h64Zm96,128H480V136a40,40,0,0,0-40-40H360a40,40,0,0,0-40,40V336H274.69c-16.64-28.57-47.25-48-82.69-48s-66,19.43-82.69,48H96a48.05,48.05,0,0,1-48-48V96A48.05,48.05,0,0,1,96,48H416A112.12,112.12,0,0,1,528,160ZM256,96H128a32,32,0,0,0-32,32v64a32,32,0,0,0,32,32H256a32,32,0,0,0,32-32V128A32,32,0,0,0,256,96Z"]
    },
    VT = {
        prefix: "far",
        iconName: "chart-line",
        icon: [512, 512, [], "f201", "M117.65 277.65c6.25 6.25 16.38 6.25 22.63 0L192 225.94l84.69 84.69c6.25 6.25 16.38 6.25 22.63 0L409.54 200.4l29.49 29.5c15.12 15.12 40.97 4.41 40.97-16.97V112c0-8.84-7.16-16-16-16H363.07c-21.38 0-32.09 25.85-16.97 40.97l29.5 29.49-87.6 87.6-84.69-84.69c-6.25-6.25-16.38-6.25-22.63 0l-74.34 74.34c-6.25 6.25-6.25 16.38 0 22.63l11.31 11.31zM496 400H48V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16z"]
    },
    WT = {
        prefix: "far",
        iconName: "check",
        icon: [512, 512, [], "f00c", "M435.848 83.466L172.804 346.51l-96.652-96.652c-4.686-4.686-12.284-4.686-16.971 0l-28.284 28.284c-4.686 4.686-4.686 12.284 0 16.971l133.421 133.421c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-28.284-28.284c-4.686-4.686-12.284-4.686-16.97 0z"]
    },
    UT = {
        prefix: "far",
        iconName: "clock",
        icon: [512, 512, [], "f017", "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"]
    },
    YT = {
        prefix: "far",
        iconName: "crown",
        icon: [640, 512, [], "f521", "M528 464H112c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16h416c8.8 0 16-7.2 16-16v-16c0-8.8-7.2-16-16-16zm64-336c-26.5 0-48 21.5-48 48 0 7.1 1.6 13.7 4.4 19.8L476 239.2c-5.2 3.1-10.8 4.6-16.4 4.6-11.1 0-21.9-5.8-27.8-16.1L350.3 85C361 76.2 368 63 368 48c0-26.5-21.5-48-48-48s-48 21.5-48 48c0 15 7 28.2 17.7 37l-81.5 142.6c-5.9 10.4-16.7 16.1-27.8 16.1-5.6 0-11.3-1.5-16.4-4.6l-72.3-43.4c2.7-6 4.4-12.7 4.4-19.8 0-26.5-21.5-48-48-48S0 149.5 0 176s21.5 48 48 48c2.6 0 5.2-.4 7.7-.8L128 416h384l72.3-192.8c2.5.4 5.1.8 7.7.8 26.5 0 48-21.5 48-48s-21.5-48-48-48zM478.7 368H161.3l-36-96.1 14 8.4c12.4 7.5 26.7 11.4 41.1 11.4 28.7 0 55.3-15.4 69.5-40.3L320 128.7l70.1 122.7c14.2 24.9 40.8 40.3 69.5 40.3 14.5 0 28.7-3.9 41.1-11.4l14-8.4-36 96.1z"]
    },
    KT = {
        prefix: "far",
        iconName: "dumbbell",
        icon: [640, 512, [], "f44b", "M632 224h-24v-72c0-30.9-25.1-56-56-56h-32c-2.7 0-5.4.4-8 .8V88c0-30.9-25.1-56-56-56h-32c-30.9 0-56 25.1-56 56v136h-96V88c0-30.9-25.1-56-56-56h-32c-30.9 0-56 25.1-56 56v8.8c-2.6-.4-5.3-.8-8-.8H88c-30.9 0-56 25.1-56 56v72H8c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h24v72c0 30.9 25.1 56 56 56h32c2.7 0 5.4-.4 8-.8v8.8c0 30.9 25.1 56 56 56h32c30.9 0 56-25.1 56-56V288h96v136c0 30.9 25.1 56 56 56h32c30.9 0 56-25.1 56-56v-8.8c2.6.4 5.3.8 8 .8h32c30.9 0 56-25.1 56-56v-72h24c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM120 368H88c-4.4 0-8-3.6-8-8V152c0-4.4 3.6-8 8-8h32c4.4 0 8 3.6 8 8v208c0 4.4-3.6 8-8 8zm104 56c0 4.4-3.6 8-8 8h-32c-4.4 0-8-3.6-8-8V88c0-4.4 3.6-8 8-8h32c4.4 0 8 3.6 8 8v336zm240 0c0 4.4-3.6 8-8 8h-32c-4.4 0-8-3.6-8-8V88c0-4.4 3.6-8 8-8h32c4.4 0 8 3.6 8 8v336zm96-64c0 4.4-3.6 8-8 8h-32c-4.4 0-8-3.6-8-8V152c0-4.4 3.6-8 8-8h32c4.4 0 8 3.6 8 8v208z"]
    },
    jT = {
        prefix: "far",
        iconName: "envelope",
        icon: [512, 512, [], "f0e0", "M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"]
    },
    qT = {
        prefix: "far",
        iconName: "exclamation-circle",
        icon: [512, 512, [], "f06a", "M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm42-104c0 23.159-18.841 42-42 42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42zm-81.37-211.401l6.8 136c.319 6.387 5.591 11.401 11.985 11.401h41.17c6.394 0 11.666-5.014 11.985-11.401l6.8-136c.343-6.854-5.122-12.599-11.985-12.599h-54.77c-6.863 0-12.328 5.745-11.985 12.599z"]
    },
    XT = {
        prefix: "far",
        iconName: "file-contract",
        icon: [384, 512, [], "f56c", "M196.66 363.33l-13.88-41.62c-3.28-9.81-12.44-16.41-22.78-16.41s-19.5 6.59-22.78 16.41L119 376.36c-1.5 4.58-5.78 7.64-10.59 7.64H96c-8.84 0-16 7.16-16 16s7.16 16 16 16h12.41c18.62 0 35.09-11.88 40.97-29.53L160 354.58l16.81 50.48a15.994 15.994 0 0 0 14.06 10.89c.38.03.75.05 1.12.05 6.03 0 11.59-3.41 14.31-8.86l7.66-15.33c2.78-5.59 7.94-6.19 10.03-6.19s7.25.59 10.19 6.53c7.38 14.7 22.19 23.84 38.62 23.84H288c8.84 0 16-7.16 16-16s-7.16-16-16-16h-15.19c-4.28 0-8.12-2.38-10.16-6.5-11.93-23.85-46.24-30.33-65.99-14.16zM369.83 97.98L285.94 14.1c-9-9-21.2-14.1-33.89-14.1H47.99C21.5.1 0 21.6 0 48.09v415.92C0 490.5 21.5 512 47.99 512h287.94c26.5 0 48.07-21.5 48.07-47.99V131.97c0-12.69-5.17-24.99-14.17-33.99zM255.95 51.99l76.09 76.08h-76.09V51.99zM336 464.01H47.99V48.09h159.97v103.98c0 13.3 10.7 23.99 24 23.99H336v287.95zM88 112h80c4.42 0 8-3.58 8-8V88c0-4.42-3.58-8-8-8H88c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8zm0 64h80c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8H88c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8z"]
    },
    JT = {
        prefix: "far",
        iconName: "file-import",
        icon: [512, 512, [], "f56f", "M497.83 97.98L413.94 14.1c-9-9-21.2-14.1-33.89-14.1H175.99C149.5.1 128 21.6 128 48.09v215.98H12c-6.63 0-12 5.37-12 12v24c0 6.63 5.37 12 12 12h276v48.88c0 10.71 12.97 16.05 20.52 8.45l71.77-72.31c4.95-4.99 4.95-13.04 0-18.03l-71.77-72.31c-7.55-7.6-20.52-2.26-20.52 8.45v48.88H175.99V48.09h159.97v103.98c0 13.3 10.7 23.99 24 23.99H464v287.95H175.99V360.07H128v103.94c0 26.49 21.5 47.99 47.99 47.99h287.94c26.5 0 48.07-21.5 48.07-47.99V131.97c0-12.69-5.17-24.99-14.17-33.99zm-113.88 30.09V51.99l76.09 76.08h-76.09z"]
    },
    ZT = {
        prefix: "far",
        iconName: "gift",
        icon: [512, 512, [], "f06b", "M464 144h-26.1c6.2-12.1 10.1-25.5 10.1-40 0-48.5-39.5-88-88-88-41.6 0-68.5 21.3-103 68.3-34.5-47-61.4-68.3-103-68.3-48.5 0-88 39.5-88 88 0 14.5 3.8 27.9 10.1 40H48c-26.5 0-48 21.5-48 48v128c0 8.8 7.2 16 16 16h16v107.4c0 29 23.6 52.6 52.6 52.6h342.8c29 0 52.6-23.6 52.6-52.6V336h16c8.8 0 16-7.2 16-16V192c0-26.5-21.5-48-48-48zM232 448H84.6c-2.5 0-4.6-2-4.6-4.6V336h112v-48H48v-96h184v256zm-78.1-304c-22.1 0-40-17.9-40-40s17.9-40 40-40c22 0 37.5 7.6 84.1 77l2 3h-86.1zm122-3C322.5 71.6 338 64 360 64c22.1 0 40 17.9 40 40s-17.9 40-40 40h-86.1l2-3zM464 288H320v48h112v107.4c0 2.5-2 4.6-4.6 4.6H280V192h184v96z"]
    },
    QT = {
        prefix: "far",
        iconName: "headset",
        icon: [512, 512, [], "f590", "M224 336V192.36c0-17.67-14.33-32-32-32h-48c-35.35 0-64 28.65-64 64V304c0 35.35 28.65 64 64 64h48c17.67 0 32-14.33 32-32zm-48-16h-32c-8.82 0-16-7.18-16-16v-79.64c0-8.82 7.18-16 16-16h32V320zM256 0C113.18 0 4.58 118.83 0 256v16c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-16c0-114.69 93.31-208 208-208s208 93.31 208 208h-.12c.08 2.43.12 165.72.12 165.72 0 23.35-18.93 42.28-42.28 42.28H320c0-26.51-21.49-48-48-48h-32c-26.51 0-48 21.49-48 48s21.49 48 48 48h181.72c49.86 0 90.28-40.42 90.28-90.28V256C507.42 118.83 398.82 0 256 0zm112 368c35.35 0 64-28.65 64-64v-79.64c0-35.35-28.65-64-64-64h-48c-17.67 0-32 14.33-32 32V336c0 17.67 14.33 32 32 32h48zm-32-159.64h32c8.82 0 16 7.18 16 16V304c0 8.82-7.18 16-16 16h-32V208.36z"]
    },
    tS = {
        prefix: "far",
        iconName: "heart",
        icon: [512, 512, [], "f004", "M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"]
    },
    eS = {
        prefix: "far",
        iconName: "home",
        icon: [576, 512, [], "f015", "M570.24 247.41L512 199.52V104a8 8 0 0 0-8-8h-32a8 8 0 0 0-7.95 7.88v56.22L323.87 45a56.06 56.06 0 0 0-71.74 0L5.76 247.41a16 16 0 0 0-2 22.54L14 282.25a16 16 0 0 0 22.53 2L64 261.69V448a32.09 32.09 0 0 0 32 32h128a32.09 32.09 0 0 0 32-32V344h64v104a32.09 32.09 0 0 0 32 32h128a32.07 32.07 0 0 0 32-31.76V261.67l27.53 22.62a16 16 0 0 0 22.53-2L572.29 270a16 16 0 0 0-2.05-22.59zM463.85 432H368V328a32.09 32.09 0 0 0-32-32h-96a32.09 32.09 0 0 0-32 32v104h-96V222.27L288 77.65l176 144.56z"]
    },
    nS = {
        prefix: "far",
        iconName: "link",
        icon: [512, 512, [], "f0c1", "M314.222 197.78c51.091 51.091 54.377 132.287 9.75 187.16-6.242 7.73-2.784 3.865-84.94 86.02-54.696 54.696-143.266 54.745-197.99 0-54.711-54.69-54.734-143.255 0-197.99 32.773-32.773 51.835-51.899 63.409-63.457 7.463-7.452 20.331-2.354 20.486 8.192a173.31 173.31 0 0 0 4.746 37.828c.966 4.029-.272 8.269-3.202 11.198L80.632 312.57c-32.755 32.775-32.887 85.892 0 118.8 32.775 32.755 85.892 32.887 118.8 0l75.19-75.2c32.718-32.725 32.777-86.013 0-118.79a83.722 83.722 0 0 0-22.814-16.229c-4.623-2.233-7.182-7.25-6.561-12.346 1.356-11.122 6.296-21.885 14.815-30.405l4.375-4.375c3.625-3.626 9.177-4.594 13.76-2.294 12.999 6.524 25.187 15.211 36.025 26.049zM470.958 41.04c-54.724-54.745-143.294-54.696-197.99 0-82.156 82.156-78.698 78.29-84.94 86.02-44.627 54.873-41.341 136.069 9.75 187.16 10.838 10.838 23.026 19.525 36.025 26.049 4.582 2.3 10.134 1.331 13.76-2.294l4.375-4.375c8.52-8.519 13.459-19.283 14.815-30.405.621-5.096-1.938-10.113-6.561-12.346a83.706 83.706 0 0 1-22.814-16.229c-32.777-32.777-32.718-86.065 0-118.79l75.19-75.2c32.908-32.887 86.025-32.755 118.8 0 32.887 32.908 32.755 86.025 0 118.8l-45.848 45.84c-2.93 2.929-4.168 7.169-3.202 11.198a173.31 173.31 0 0 1 4.746 37.828c.155 10.546 13.023 15.644 20.486 8.192 11.574-11.558 30.636-30.684 63.409-63.457 54.733-54.735 54.71-143.3-.001-197.991z"]
    },
    rS = {
        prefix: "far",
        iconName: "money-bill",
        icon: [640, 512, [], "f0d6", "M608 64H32C14.33 64 0 78.33 0 96v320c0 17.67 14.33 32 32 32h576c17.67 0 32-14.33 32-32V96c0-17.67-14.33-32-32-32zm-16 272c-35.35 0-64 28.65-64 64H112c0-35.35-28.65-64-64-64V176c35.35 0 64-28.65 64-64h416c0 35.35 28.65 64 64 64v160zM320 160c-44.18 0-80 42.98-80 96 0 53.01 35.81 96 80 96 44.17 0 80-42.97 80-96 0-53.02-35.82-96-80-96z"]
    },
    iS = {
        prefix: "far",
        iconName: "pager",
        icon: [512, 512, [], "f815", "M304 304h-80v48h80a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16zM96 320v16a16 16 0 0 0 16 16h80v-48h-80a16 16 0 0 0-16 16zm296-160H120a24 24 0 0 0-24 24v48a24 24 0 0 0 24 24h272a24 24 0 0 0 24-24v-48a24 24 0 0 0-24-24zm56-96H64a64 64 0 0 0-64 64v256a64 64 0 0 0 64 64h384a64 64 0 0 0 64-64V128a64 64 0 0 0-64-64zm16 320a16 16 0 0 1-16 16H64a16 16 0 0 1-16-16V128a16 16 0 0 1 16-16h384a16 16 0 0 1 16 16z"]
    },
    aS = {
        prefix: "far",
        iconName: "pennant",
        icon: [576, 512, [], "f456", "M542.3 183.5c-21.9 4.8-104.7 14.1-246.4-62.8-74.6-40.4-137.5-50.4-186.7-48C121.5 33.7 90.9 0 56 0 25.1 0 0 25.1 0 56c0 22.3 13.2 41.4 32 50.4V504c0 4.4 3.6 8 8 8h32c4.4 0 8-3.6 8-8v-75.6c80.8-54.3 156.4-55.7 165.8-56.2 28.2-1.4 74.5-5.9 135.1-19 4.4-1 109-24.5 188.9-124.7 16.1-20.2-1.5-50.3-27.5-45zM370.8 306.3c-57.5 12.4-101 16.6-127.4 18-69.6 3.5-125.6 26.3-163.4 47.9V124c44.1-8.6 109.6-6.3 193 38.9 101.4 54.9 177 69.8 225.9 71.5-61.8 56.6-127.4 71.7-128.1 71.9z"]
    },
    sS = {
        prefix: "far",
        iconName: "phone",
        icon: [512, 512, [], "f095", "M476.5 22.9L382.3 1.2c-21.6-5-43.6 6.2-52.3 26.6l-43.5 101.5c-8 18.6-2.6 40.6 13.1 53.4l40 32.7C311 267.8 267.8 311 215.4 339.5l-32.7-40c-12.8-15.7-34.8-21.1-53.4-13.1L27.7 329.9c-20.4 8.7-31.5 30.7-26.6 52.3l21.7 94.2c4.8 20.9 23.2 35.5 44.6 35.5C312.3 512 512 313.7 512 67.5c0-21.4-14.6-39.8-35.5-44.6zM69.3 464l-20.9-90.7 98.2-42.1 55.7 68.1c98.8-46.4 150.6-98 197-197l-68.1-55.7 42.1-98.2L464 69.3C463 286.9 286.9 463 69.3 464z"]
    },
    oS = {
        prefix: "far",
        iconName: "phone-laptop",
        icon: [640, 512, [], "f87a", "M112 48h352v48h48V32a32.09 32.09 0 0 0-32-32H96a32.09 32.09 0 0 0-32 32v256H16a16 16 0 0 0-16 16v16a64.14 64.14 0 0 0 63.91 64H352v-96H112zm492 80H420a36 36 0 0 0-36 36v312a36 36 0 0 0 36 36h184a36 36 0 0 0 36-36V164a36 36 0 0 0-36-36zm-12 336H432V176h160z"]
    },
    cS = {
        prefix: "far",
        iconName: "puzzle-piece",
        icon: [576, 512, [], "f12e", "M437.983 261.352c-4.321 2.778-10.839 6.969-13.122 7.279-24.067-.092.757-103.841 5.813-124.714-29.614 5.697-134.448 26.337-159.932 7.046C271.197 132.585 304 116.55 304 73.588 304 28.222 261.986 0 216.994 0 171.147 0 112 25.756 112 75.063c0 40.881 28.702 64.642 31.994 74.559-.739 28.838-115.981 1.752-143.994-5.469v351.556C10.464 498.412 56.682 512 104 512c45.3-.001 88-15.737 88-60.854 0-31.773-32-45.657-32-73.834 0-16.521 29.235-27.063 49.361-27.063 21.125 0 46.639 11.414 46.639 25.588 0 24.02-32 36.882-32 77.924 0 66.838 81.555 58.073 134.44 51.225 37.039-4.797 33.159-3.906 73.069-3.906-2.799-8.954-28.061-81.125-13.892-100.4 10.021-13.639 39.371 31.32 84.037 31.32C548.715 432 576 380.487 576 336c0-57.793-45.975-133.814-138.017-74.648zM501.654 384c-24.507 0-37.496-32.763-79.116-32.763-35.286 0-67.12 27.143-53.431 104.031-19.03 2.234-84.249 12.922-96.329 2.29C261.633 447.771 304 419.385 304 375.837c0-46.326-49.475-73.588-94.639-73.588-46.686 0-97.361 27.417-97.361 75.063 0 50.809 41.414 70.396 29.601 79.554-16.851 13.064-71.854 5.122-93.601.935V204.584c63.934 10.948 144 9.33 144-55.435 0-31.802-32-45.775-32-74.086C160 58.488 199.338 48 216.994 48 233.19 48 256 55.938 256 73.588c0 23.524-33.264 36.842-33.264 77.924 0 60.396 86.897 58.813 146.508 51.68-6.592 53.714 1.669 113.439 55.691 113.439 31.223 0 45.141-28.631 75.22-28.631C517.407 288 528 315.957 528 336c0 21.606-12.157 48-26.346 48z"]
    },
    lS = {
        prefix: "far",
        iconName: "search-location",
        icon: [512, 512, [], "f689", "M208 112c-40.78 0-73.83 33.05-73.83 73.83 0 32.96 48.25 93.05 66.74 114.86a9.24 9.24 0 0 0 14.18 0c18.49-21.81 66.74-81.89 66.74-114.86 0-40.78-33.05-73.83-73.83-73.83zm0 96c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24zm300.47 260.88l-121.39-121.4c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-135.99C415.98 93.1 322.88 0 207.99 0S0 93.1 0 207.99c0 114.89 93.1 207.99 207.99 207.99 52 0 99.49-19.1 135.99-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.39 121.39c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.71-4.69 4.71-12.29 0-16.99zm-300.48-100.9c-88.4 0-159.99-71.6-159.99-159.99C48 119.59 119.59 48 207.99 48c88.39 0 159.99 71.6 159.99 159.99 0 88.4-71.6 159.99-159.99 159.99z"]
    },
    uS = {
        prefix: "far",
        iconName: "share-square",
        icon: [576, 512, [], "f14d", "M561.938 158.06L417.94 14.092C387.926-15.922 336 5.097 336 48.032v57.198c-42.45 1.88-84.03 6.55-120.76 17.99-35.17 10.95-63.07 27.58-82.91 49.42C108.22 199.2 96 232.6 96 271.94c0 61.697 33.178 112.455 84.87 144.76 37.546 23.508 85.248-12.651 71.02-55.74-15.515-47.119-17.156-70.923 84.11-78.76V336c0 42.993 51.968 63.913 81.94 33.94l143.998-144c18.75-18.74 18.75-49.14 0-67.88zM384 336V232.16C255.309 234.082 166.492 255.35 206.31 376 176.79 357.55 144 324.08 144 271.94c0-109.334 129.14-118.947 240-119.85V48l144 144-144 144zm24.74 84.493a82.658 82.658 0 0 0 20.974-9.303c7.976-4.952 18.286.826 18.286 10.214V464c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h132c6.627 0 12 5.373 12 12v4.486c0 4.917-2.987 9.369-7.569 11.152-13.702 5.331-26.396 11.537-38.05 18.585a12.138 12.138 0 0 1-6.28 1.777H54a6 6 0 0 0-6 6v340a6 6 0 0 0 6 6h340a6 6 0 0 0 6-6v-25.966c0-5.37 3.579-10.059 8.74-11.541z"]
    },
    m0 = {
        prefix: "far",
        iconName: "truck",
        icon: [640, 512, [], "f0d1", "M624 368h-16V251.9c0-19-7.7-37.5-21.1-50.9L503 117.1C489.6 103.7 471 96 452.1 96H416V56c0-30.9-25.1-56-56-56H56C25.1 0 0 25.1 0 56v304c0 30.9 25.1 56 56 56h8c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-16c0-8.8-7.2-16-16-16zm-464 96c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm208-96H242.7c-16.6-28.6-47.2-48-82.7-48s-66.1 19.4-82.7 48H56c-4.4 0-8-3.6-8-8V56c0-4.4 3.6-8 8-8h304c4.4 0 8 3.6 8 8v312zm48-224h36.1c6.3 0 12.5 2.6 17 7l73 73H416v-80zm64 320c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-100.9c-17.2-25.9-46.6-43.1-80-43.1-24.7 0-47 9.6-64 24.9V272h144v91.1z"]
    },
    fS = {
        prefix: "far",
        iconName: "truck-pickup",
        icon: [640, 512, [], "f63c", "M624 336h-16V208c0-17.67-14.33-32-32-32h-60.8L419.21 56.02A63.99 63.99 0 0 0 369.24 32H256c-17.67 0-32 14.33-32 32v112H64c-17.67 0-32 14.33-32 32v128H16c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h49.61c7.82 54.21 54.01 96 110.39 96s102.56-41.79 110.39-96h67.23c7.82 54.21 54.01 96 110.39 96s102.56-41.79 110.39-96H624c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16zM272 80h97.24c4.89 0 9.44 2.19 12.49 6l72 90H272V80zm-96 352c-35.35 0-64-28.65-64-64s28.65-64 64-64 64 28.65 64 64-28.65 64-64 64zm288 0c-35.29 0-64-28.71-64-64s28.71-64 64-64 64 28.71 64 64-28.71 64-64 64zm96-120.86C540.48 278.27 505 256 464 256c-50.66 0-92.96 33.85-106.8 80h-74.4c-13.84-46.15-56.14-80-106.8-80-41 0-76.48 22.27-96 55.14V224h480v87.14z"]
    },
    dS = {
        prefix: "far",
        iconName: "user-plus",
        icon: [640, 512, [], "f234", "M224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96zm89.6 256c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zm224-248h-72v-72c0-8.8-7.2-16-16-16h-16c-8.8 0-16 7.2-16 16v72h-72c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16h72v72c0 8.8 7.2 16 16 16h16c8.8 0 16-7.2 16-16v-72h72c8.8 0 16-7.2 16-16v-16c0-8.8-7.2-16-16-16z"]
    },
    hS = {
        prefix: "far",
        iconName: "users",
        icon: [640, 512, [], "f0c0", "M544 224c44.2 0 80-35.8 80-80s-35.8-80-80-80-80 35.8-80 80 35.8 80 80 80zm0-112c17.6 0 32 14.4 32 32s-14.4 32-32 32-32-14.4-32-32 14.4-32 32-32zM96 224c44.2 0 80-35.8 80-80s-35.8-80-80-80-80 35.8-80 80 35.8 80 80 80zm0-112c17.6 0 32 14.4 32 32s-14.4 32-32 32-32-14.4-32-32 14.4-32 32-32zm396.4 210.9c-27.5-40.8-80.7-56-127.8-41.7-14.2 4.3-29.1 6.7-44.7 6.7s-30.5-2.4-44.7-6.7c-47.1-14.3-100.3.8-127.8 41.7-12.4 18.4-19.6 40.5-19.6 64.3V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-44.8c.2-23.8-7-45.9-19.4-64.3zM464 432H176v-44.8c0-36.4 29.2-66.2 65.4-67.2 25.5 10.6 51.9 16 78.6 16 26.7 0 53.1-5.4 78.6-16 36.2 1 65.4 30.7 65.4 67.2V432zm92-176h-24c-17.3 0-33.4 5.3-46.8 14.3 13.4 10.1 25.2 22.2 34.4 36.2 3.9-1.4 8-2.5 12.3-2.5h24c19.8 0 36 16.2 36 36 0 13.2 10.8 24 24 24s24-10.8 24-24c.1-46.3-37.6-84-83.9-84zm-236 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm0-176c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zM154.8 270.3c-13.4-9-29.5-14.3-46.8-14.3H84c-46.3 0-84 37.7-84 84 0 13.2 10.8 24 24 24s24-10.8 24-24c0-19.8 16.2-36 36-36h24c4.4 0 8.5 1.1 12.3 2.5 9.3-14 21.1-26.1 34.5-36.2z"]
    },
    pS = {
        prefix: "far",
        iconName: "wrench",
        icon: [512, 512, [], "f0ad", "M507.48 117.18c-3-12.17-12.41-21.79-24.5-25.15-12.1-3.34-25.16.11-33.97 8.97l-58.66 58.63-32.44-5.4-5.38-32.41 58.67-58.64c8.84-8.89 12.28-21.92 8.91-33.99-3.38-12.11-13.06-21.5-25.29-24.53-53.09-13.19-107.91 2.07-146.54 40.69-37.63 37.62-52.6 91.37-40.72 143.27L24.04 372.06C8.53 387.53 0 408.12 0 430.02s8.53 42.49 24.04 57.97C39.51 503.47 60.1 512 82.01 512c21.88 0 42.47-8.53 57.98-24.01l183.34-183.26c51.79 11.87 105.64-3.14 143.49-40.93 38.09-38.1 53.69-94.27 40.66-146.62zm-74.61 112.69c-28.47 28.46-70.2 38.1-109.01 25.21l-14.06-4.69-203.75 203.67c-12.85 12.84-35.29 12.81-48.07 0-6.44-6.42-9.97-14.96-9.97-24.04 0-9.08 3.53-17.61 9.97-24.03l203.84-203.78-4.63-14.03c-12.81-38.9-3.22-80.62 25.04-108.9 20.35-20.32 47.19-31.24 75.04-31.24h1.12l-57.32 57.3 15.13 90.59 90.57 15.09 57.35-57.29c.32 28.26-10.62 55.52-31.25 76.14zM88.01 408.02c-8.84 0-16 7.16-16 16s7.16 16 16 16 16-7.16 16-16-7.16-16-16-16z"]
    };
pf.add(sS, jT, HT, uS, qT, m0, eS, lS, iS, nS, ZT, tS, KT, zT, hS, aS, cS, BT, m0, $T, WT, YT, dS, JT, rS, FT, UT, fS, VT, oS, pS, QT, XT);
var mS = {
        prefix: "fab",
        iconName: "apple",
        icon: [384, 512, [], "f179", "M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"]
    },
    gS = {
        prefix: "fab",
        iconName: "facebook-f",
        icon: [320, 512, [], "f39e", "M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"]
    },
    vS = {
        prefix: "fab",
        iconName: "facebook-messenger",
        icon: [512, 512, [], "f39f", "M256.55 8C116.52 8 8 110.34 8 248.57c0 72.3 29.71 134.78 78.07 177.94 8.35 7.51 6.63 11.86 8.05 58.23A19.92 19.92 0 0 0 122 502.31c52.91-23.3 53.59-25.14 62.56-22.7C337.85 521.8 504 423.7 504 248.57 504 110.34 396.59 8 256.55 8zm149.24 185.13l-73 115.57a37.37 37.37 0 0 1-53.91 9.93l-58.08-43.47a15 15 0 0 0-18 0l-78.37 59.44c-10.46 7.93-24.16-4.6-17.11-15.67l73-115.57a37.36 37.36 0 0 1 53.91-9.93l58.06 43.46a15 15 0 0 0 18 0l78.41-59.38c10.44-7.98 24.14 4.54 17.09 15.62z"]
    },
    _S = {
        prefix: "fab",
        iconName: "instagram",
        icon: [448, 512, [], "f16d", "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]
    },
    bS = {
        prefix: "fab",
        iconName: "facebook",
        icon: [512, 512, [62e3], "f09a", "M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"]
    },
    yS = {
        prefix: "fab",
        iconName: "whatsapp",
        icon: [448, 512, [], "f232", "M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"]
    },
    ES = {
        prefix: "fab",
        iconName: "line",
        icon: [512, 512, [], "f3c0", "M311 196.8v81.3c0 2.1-1.6 3.7-3.7 3.7h-13c-1.3 0-2.4-.7-3-1.5l-37.3-50.3v48.2c0 2.1-1.6 3.7-3.7 3.7h-13c-2.1 0-3.7-1.6-3.7-3.7V196.9c0-2.1 1.6-3.7 3.7-3.7h12.9c1.1 0 2.4 .6 3 1.6l37.3 50.3V196.9c0-2.1 1.6-3.7 3.7-3.7h13c2.1-.1 3.8 1.6 3.8 3.5zm-93.7-3.7h-13c-2.1 0-3.7 1.6-3.7 3.7v81.3c0 2.1 1.6 3.7 3.7 3.7h13c2.1 0 3.7-1.6 3.7-3.7V196.8c0-1.9-1.6-3.7-3.7-3.7zm-31.4 68.1H150.3V196.8c0-2.1-1.6-3.7-3.7-3.7h-13c-2.1 0-3.7 1.6-3.7 3.7v81.3c0 1 .3 1.8 1 2.5c.7 .6 1.5 1 2.5 1h52.2c2.1 0 3.7-1.6 3.7-3.7v-13c0-1.9-1.6-3.7-3.5-3.7zm193.7-68.1H327.3c-1.9 0-3.7 1.6-3.7 3.7v81.3c0 1.9 1.6 3.7 3.7 3.7h52.2c2.1 0 3.7-1.6 3.7-3.7V265c0-2.1-1.6-3.7-3.7-3.7H344V247.7h35.5c2.1 0 3.7-1.6 3.7-3.7V230.9c0-2.1-1.6-3.7-3.7-3.7H344V213.5h35.5c2.1 0 3.7-1.6 3.7-3.7v-13c-.1-1.9-1.7-3.7-3.7-3.7zM512 93.4V419.4c-.1 51.2-42.1 92.7-93.4 92.6H92.6C41.4 511.9-.1 469.8 0 418.6V92.6C.1 41.4 42.2-.1 93.4 0H419.4c51.2 .1 92.7 42.1 92.6 93.4zM441.6 233.5c0-83.4-83.7-151.3-186.4-151.3s-186.4 67.9-186.4 151.3c0 74.7 66.3 137.4 155.9 149.3c21.8 4.7 19.3 12.7 14.4 42.1c-.8 4.7-3.8 18.4 16.1 10.1s107.3-63.2 146.5-108.2c27-29.7 39.9-59.8 39.9-93.1z"]
    },
    wS = {
        prefix: "fab",
        iconName: "android",
        icon: [576, 512, [], "f17b", "M420.55,301.93a24,24,0,1,1,24-24,24,24,0,0,1-24,24m-265.1,0a24,24,0,1,1,24-24,24,24,0,0,1-24,24m273.7-144.48,47.94-83a10,10,0,1,0-17.27-10h0l-48.54,84.07a301.25,301.25,0,0,0-246.56,0L116.18,64.45a10,10,0,1,0-17.27,10h0l47.94,83C64.53,202.22,8.24,285.55,0,384H576c-8.24-98.45-64.54-181.78-146.85-226.55"]
    },
    AS = {
        prefix: "fab",
        iconName: "telegram",
        icon: [496, 512, [62462, "telegram-plane"], "f2c6", "M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z"]
    },
    xS = {
        prefix: "fab",
        iconName: "square-whatsapp",
        icon: [448, 512, ["whatsapp-square"], "f40c", "M224 122.8c-72.7 0-131.8 59.1-131.9 131.8 0 24.9 7 49.2 20.2 70.1l3.1 5-13.3 48.6 49.9-13.1 4.8 2.9c20.2 12 43.4 18.4 67.1 18.4h.1c72.6 0 133.3-59.1 133.3-131.8 0-35.2-15.2-68.3-40.1-93.2-25-25-58-38.7-93.2-38.7zm77.5 188.4c-3.3 9.3-19.1 17.7-26.7 18.8-12.6 1.9-22.4.9-47.5-9.9-39.7-17.2-65.7-57.2-67.7-59.8-2-2.6-16.2-21.5-16.2-41s10.2-29.1 13.9-33.1c3.6-4 7.9-5 10.6-5 2.6 0 5.3 0 7.6.1 2.4.1 5.7-.9 8.9 6.8 3.3 7.9 11.2 27.4 12.2 29.4s1.7 4.3.3 6.9c-7.6 15.2-15.7 14.6-11.6 21.6 15.3 26.3 30.6 35.4 53.9 47.1 4 2 6.3 1.7 8.6-1 2.3-2.6 9.9-11.6 12.5-15.5 2.6-4 5.3-3.3 8.9-2 3.6 1.3 23.1 10.9 27.1 12.9s6.6 3 7.6 4.6c.9 1.9.9 9.9-2.4 19.1zM400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM223.9 413.2c-26.6 0-52.7-6.7-75.8-19.3L64 416l22.5-82.2c-13.9-24-21.2-51.3-21.2-79.3C65.4 167.1 136.5 96 223.9 96c42.4 0 82.2 16.5 112.2 46.5 29.9 30 47.9 69.8 47.9 112.2 0 87.4-72.7 158.5-160.1 158.5z"]
    },
    CS = {
        prefix: "fab",
        iconName: "huawei",
        icon: [200, 200, [], "f999", "M112.995079,33.052628 C113.680435,31.182930 114.064453,29.495163 115.053246,28.313437 C115.936996,27.257240 117.570259,26.004494 118.732109,26.130964 C131.611298,27.532896 143.468140,37.326763 145.668945,49.683731 C147.337494,59.052162 146.032410,68.597694 142.709885,77.678497 C137.156128,92.857506 128.959427,106.653442 120.287849,120.185982 C116.409134,126.238968 112.341293,132.170776 107.515320,139.426437 C106.536888,133.089890 105.279800,128.138702 105.093163,123.147491 C104.511314,107.587395 103.421616,91.962448 104.265617,76.457184 C105.060112,61.861431 107.407715,47.249958 112.995079,33.052628 M56.997925,67.001068 C53.454884,49.860760 57.379532,34.487457 76.496605,28.009869 C86.380371,24.660868 87.106903,24.616463 89.683434,34.541031 C92.711044,46.203144 95.550339,58.063026 96.755806,70.010231 C98.147079,83.798813 98.089584,97.783737 97.844070,111.668953 C97.690857,120.334312 96.027237,128.972961 94.879784,139.042038 C89.427132,131.072266 84.206047,124.498863 80.145477,117.273293 C72.939285,104.450264 66.288017,91.305580 59.747398,78.125351 C58.149578,74.905533 57.879986,71.026596 56.997925,67.001068 M123.298462,139.268127 C120.246498,141.081848 117.493492,142.662918 114.740494,144.243988 C114.449944,143.985657 114.159401,143.727341 113.868851,143.469025 C132.378403,113.581772 150.887955,83.694527 170.036697,52.775196 C173.060303,57.549194 175.938766,61.382504 178.049103,65.600143 C180.903046,71.303879 183.931580,77.107246 185.495636,83.223236 C187.564362,91.312645 184.828537,99.101486 178.715668,104.449707 C172.338654,110.029030 164.917603,114.494835 157.655777,118.964569 C146.435791,125.870598 134.962997,132.365952 123.298462,139.268127 M39.306267,115.736954 C33.546314,111.380272 27.599848,107.751495 22.737669,103.010681 C14.899819,95.368462 14.158884,85.739166 18.506731,76.152519 C22.180189,68.052834 26.954447,60.452396 31.693747,51.805916 C50.997742,82.951408 69.653366,113.050819 88.308998,143.150223 C88.052109,143.416229 87.795219,143.682220 87.538330,143.948227 C71.561035,134.620712 55.583744,125.293213 39.306267,115.736954 M45.662209,128.250290 C58.254402,135.756653 70.536232,143.045242 83.570282,150.780258 C79.632805,151.238617 76.365677,151.913071 73.091774,151.947708 C60.775024,152.078079 48.398083,152.759048 36.151402,151.823608 C17.388763,150.390411 2.959472,138.276291 2.029675,117.770058 C1.826777,113.295250 2.000000,108.803398 2.000000,102.971947 C16.955797,111.617508 31.153822,119.825020 45.662209,128.250290 M159.767395,126.729782 C171.730377,119.764870 183.415741,113.046967 195.142776,106.402618 C196.483414,105.643028 198.057327,105.295166 199.834290,104.642014 C200.086227,115.145592 201.340057,125.300980 195.856003,134.324081 C189.492371,144.794418 179.960205,151.294922 167.706757,151.831909 C151.941544,152.522781 136.123169,152.000000 120.327690,152.000000 C120.093651,151.559052 119.859612,151.118118 119.625572,150.677170 C132.917770,142.784317 146.209946,134.891464 159.767395,126.729782 M60.270267,155.001328 C67.437027,155.000153 74.125481,155.000153 81.483475,155.000153 C77.657990,158.159775 74.185165,161.772232 70.043907,164.281525 C63.097374,168.490585 55.750507,172.046158 48.523136,175.781998 C43.648403,178.301743 39.028152,176.442261 34.808239,174.169189 C27.839930,170.415695 23.008801,164.429749 18.397919,157.000000 C20.557364,157.000000 21.961809,157.036438 23.363888,156.994202 C34.091068,156.671158 44.818989,156.364746 55.543205,155.960876 C56.969467,155.907181 58.376190,155.334717 60.270267,155.001328 M122.296875,156.793030 C122.401947,155.903366 122.792374,154.689026 123.146408,154.699554 C135.324020,155.061325 147.501358,155.469330 159.671677,156.025299 C167.357361,156.376389 175.031815,156.973267 183.201065,157.490936 C177.814636,165.997498 172.146393,173.636612 161.620209,176.129074 C155.036087,177.688095 149.643311,174.695190 144.582336,171.810135 C136.924973,167.444977 129.873932,162.016235 122.296875,156.793030"]
    };
pf.add(bS, gS, vS, _S, wS, mS, yS, AS, ES, xS, CS);
console.log(`


                                   ..::^~~~!~~~^::.                               
                            .:!?YPGBBBBBGGPP555555PP55J7~:.                       
                       .^7YPGBBBGPJ7~:..             ..^~7??7~:                   
                    :75GBBBBPJ~:                             .:~~^.               
                 :JPBBBBG5!.                                      ...             
              .!PBBGBG5~.           ..:~!7?????77!~:..                            
            .?GBGGBG7.        .:!J5GBBGP5Y?7!!~~!!!7????7~:.                      
           7GBGGBP~       .^?5GBBG57^.                   .:^^^:.                  
         :PBGGBP~      .~YGBBB57:                               .                 
        !BGGBP~      :JGBBB5!.                 ....:....                          
       ?BGGB?      :YBBBGJ:            .:~?Y5PGGGGBBBGGGGP5Y7~:.                  
      JBGGG^     .JBBBG?.          .~JPGBBBBGGGGGGGGGGGGGGGBBBBG5?^.              
     ?BGBP.     ^GBBG?.         .!5GBBGGGGGGGGGGGGGGGGGGGGGGGGGGGBBGY!.           
    ^BGGP.     7BGB5:         ^YGBGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGBBGJ:         
    GGGG:     7BGB7         ^5BBGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGBB5:       
   7BGB~     !BGB~        .5BGGGGGGGGGGGGGGGGGGGGB###BGGGGGGGGGGGGGGGGGGGBBY.     
   GGB5     .GGB~        !GBGGGGGGGGGGGGGGGB#&           &#BBGGGGGGGGGGGGGGBG~    
  ~BGB^     YBB?        JBGGGGGGGGGGGB#&       &#BGGGB#&       &#BBGGGGGGGGGGB7   
  YBGP     :BGP        JBGGGGGGB##&      &#BGGGGGGGGGGGGGGGB##       &##BGGGGGB7  
  PGBJ     ?BB!       !BGGGGB       #BGGGGGGGGGGGGGGGGGGGGGGGGGGGB#       BGGGGB~ 
  PGB!     5BG.      .GGGGGG#         &&##BGGGGGGGGGGGGGGGGGB#&      &&&  BGGGGGG 
  PGB~     GBP       ?BGGGGG#                &##BGGGGGBB#&       &#BGGG#  BGGGGGB!
  YBB~     GBY       PGGGGGG#                    &&&&      &#BGGGGGGGGG#  BGGGGGB5
  !BB7     5B5      .GGGGGGG#                         ##BGGGGGGGGGGGGGG#  BGGGGGGP
  .GB5     7BP      .GGGGGGG#                        #GGGGGGGGGGGGGGGGG#  BGGGGGGP
   7BG.    .GB:      PGGGGGG#                        &GGGGGGGGGGGGGGGGG#  BGGGGGG5
    PB7     7B?      JBGGGGG#                        &GGGGGGGGGGGGGGGGG#  BGGGGGB7
    :GG.     5B.     :BGGGGG#                        &GGGGGGGGGGGGGGGGG#  BGGGGGG.
     ^BY      P5      JBGGGGB                        &GGGGGGGGGGGGGB#     BGGGGB7 
      :B?      5J      5BGGGGGBB#&&                  &GGGGGGGB#       &#BGGGGGBY  
       .P7      ??      5BGGGGGGGGGGBB#&&            &GBB#      &#BGGGGGGGGGGBY   
         ?7      ^7      JBGGGGGGGGGGGGGGGBB#&             #BBGGGGGGGGGGGGGGB7    
          :7.      :.     ~GBGGGGGGGGGGGGGGGGGGGB##&&##BGGGGGGGGGGGGGGGGGGBP^     
            :.              7GBGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGBG!       
                             .7PBBGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGBBP!         
                                ^JGBBGGGGGGGGGGGGGGGGGGGGGGGGGGGGGBBPJ:           
                                   ^?5GBBBBGGGGGGGGGGGGGGGGGBBBBG57:              
                                      .:!J5PGGBBBBBBBBBBBGGP5?!:.                 
                                            ..:^^~~~~~^::.                        


`);
console.log("%cHi developer, welcome to Tracking.my!", "font-size: 30px;");
console.log("%cWARNING: This is a browser feature intended for developers. If someone told you to copy and paste something here to enable a feature, it is a scam and will give them access to your account.", "font-size: 20px;");
aT.watch();