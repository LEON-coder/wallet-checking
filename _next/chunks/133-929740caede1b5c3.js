"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [133], {
        9803: function(e, i, n) {
            /**
             * @license React
             * react-jsx-runtime.production.min.js
             *
             * Copyright (c) Meta Platforms, Inc. and affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */
            var r = n(5784),
                s = Symbol.for("react.element"),
                o = Symbol.for("react.fragment"),
                a = Object.prototype.hasOwnProperty,
                l = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
                u = {
                    key: !0,
                    ref: !0,
                    __self: !0,
                    __source: !0
                };

            function h(e, i, n) {
                var r, o = {},
                    h = null,
                    c = null;
                for (r in void 0 !== n && (h = "" + n),
                    void 0 !== i.key && (h = "" + i.key),
                    void 0 !== i.ref && (c = i.ref),
                    i)
                    a.call(i, r) && !u.hasOwnProperty(r) && (o[r] = i[r]);
                if (e && e.defaultProps)
                    for (r in i = e.defaultProps)
                        void 0 === o[r] && (o[r] = i[r]);
                return {
                    $$typeof: s,
                    type: e,
                    key: h,
                    ref: c,
                    props: o,
                    _owner: l.current
                }
            }
            i.Fragment = o,
                i.jsx = h,
                i.jsxs = h
        },
        1844: function(e, i, n) {
            e.exports = n(9803)
        },
        5364: function(e, i, n) {
            n.d(i, {
                p: function() {
                    return s
                }
            });
            var r = n(5784);
            let s = (0,
                r.createContext)({})
        },
        240: function(e, i, n) {
            n.d(i, {
                O: function() {
                    return s
                }
            });
            var r = n(5784);
            let s = (0,
                r.createContext)(null)
        },
        7367: function(e, i, n) {
            n.d(i, {
                w: function() {
                    return r
                }
            });
            let r = {
                delta: 0,
                timestamp: 0
            }
        },
        404: function(e, i, n) {
            n.d(i, {
                qY: function() {
                    return m
                },
                iW: function() {
                    return f
                },
                Z_: function() {
                    return p
                }
            });
            let r = 1 / 60 * 1e3,
                s = "undefined" != typeof performance ? () => performance.now() : () => Date.now(),
                o = "undefined" != typeof window ? e => window.requestAnimationFrame(e) : e => setTimeout(() => e(s()), r);
            var a = n(7367);
            let l = !0,
                u = !1,
                h = !1,
                c = ["read", "update", "preRender", "render", "postRender"],
                d = c.reduce((e, i) => (e[i] = function(e) {
                        let i = [],
                            n = [],
                            r = 0,
                            s = !1,
                            o = !1,
                            a = new WeakSet,
                            l = {
                                schedule: (e, o = !1, l = !1) => {
                                    let u = l && s,
                                        h = u ? i : n;
                                    return o && a.add(e), -1 === h.indexOf(e) && (h.push(e),
                                            u && s && (r = i.length)),
                                        e
                                },
                                cancel: e => {
                                    let i = n.indexOf(e); -
                                    1 !== i && n.splice(i, 1),
                                        a.delete(e)
                                },
                                process: u => {
                                    if (s) {
                                        o = !0;
                                        return
                                    }
                                    if (s = !0, [i, n] = [n, i],
                                        n.length = 0,
                                        r = i.length)
                                        for (let n = 0; n < r; n++) {
                                            let r = i[n];
                                            r(u),
                                                a.has(r) && (l.schedule(r),
                                                    e())
                                        }
                                    s = !1,
                                        o && (o = !1,
                                            l.process(u))
                                }
                            };
                        return l
                    }(() => u = !0),
                    e), {}),
                p = c.reduce((e, i) => {
                    let n = d[i];
                    return e[i] = (e, i = !1, r = !1) => (u || v(),
                            n.schedule(e, i, r)),
                        e
                }, {}),
                m = c.reduce((e, i) => (e[i] = d[i].cancel,
                    e), {}),
                f = c.reduce((e, i) => (e[i] = () => d[i].process(a.w),
                    e), {}),
                g = e => d[e].process(a.w),
                y = e => {
                    u = !1,
                        a.w.delta = l ? r : Math.max(Math.min(e - a.w.timestamp, 40), 1),
                        a.w.timestamp = e,
                        h = !0,
                        c.forEach(g),
                        h = !1,
                        u && (l = !1,
                            o(y))
                },
                v = () => {
                    u = !0,
                        l = !0,
                        h || o(y)
                }
        },
        5414: function(e, i, n) {
            n.d(i, {
                E: function() {
                    return rI
                }
            });
            var r, s, o, a, l, u = n(5784);
            let h = (0,
                    u.createContext)({
                    transformPagePoint: e => e,
                    isStatic: !1,
                    reducedMotion: "never"
                }),
                c = (0,
                    u.createContext)({});
            var d = n(240),
                p = n(8868);
            let m = (0,
                u.createContext)({
                strict: !1
            });

            function f(e) {
                return "object" == typeof e && Object.prototype.hasOwnProperty.call(e, "current")
            }

            function g(e) {
                return "string" == typeof e || Array.isArray(e)
            }

            function y(e) {
                return "object" == typeof e && "function" == typeof e.start
            }
            let v = ["initial", "animate", "exit", "whileHover", "whileDrag", "whileTap", "whileFocus", "whileInView"];

            function x(e) {
                return y(e.animate) || v.some(i => g(e[i]))
            }

            function b(e) {
                return Boolean(x(e) || e.variants)
            }

            function P(e) {
                return Array.isArray(e) ? e.join(" ") : e
            }
            let w = {
                    animation: ["animate", "exit", "variants", "whileHover", "whileTap", "whileFocus", "whileDrag", "whileInView"],
                    exit: ["exit"],
                    drag: ["drag", "dragControls"],
                    focus: ["whileFocus"],
                    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
                    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
                    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
                    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
                    layout: ["layout", "layoutId"]
                },
                A = {};
            for (let e in w)
                A[e] = {
                    isEnabled: i => w[e].some(e => !!i[e])
                };
            var T = n(1741),
                V = n(6681);
            let E = {
                    hasAnimatedSinceResize: !0,
                    hasEverUpdated: !1
                },
                S = 1;
            var C = n(5364);
            let M = (0,
                    u.createContext)({}),
                k = Symbol.for("motionComponentSymbol"),
                L = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

            function R(e) {
                if ("string" != typeof e || e.includes("-"))
                ;
                else if (L.indexOf(e) > -1 || /[A-Z]/.test(e))
                    return !0;
                return !1
            }
            let B = {},
                D = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
                F = new Set(D);

            function j(e, {
                layout: i,
                layoutId: n
            }) {
                return F.has(e) || e.startsWith("origin") || (i || void 0 !== n) && (!!B[e] || "opacity" === e)
            }
            let O = e => Boolean(e && e.getVelocity),
                I = {
                    x: "translateX",
                    y: "translateY",
                    z: "translateZ",
                    transformPerspective: "perspective"
                },
                U = D.length;

            function N(e) {
                return e.startsWith("--")
            }
            let$ = (e, i) => i && "number" == typeof e ? i.transform(e) : e, W = (e, i, n) => Math.min(Math.max(n, e), i), _ = {
                test: e => "number" == typeof e,
                parse: parseFloat,
                transform: e => e
            }, H = {
                ..._,
                transform: e => W(0, 1, e)
            }, Y = {
                ..._,
                default: 1
            }, z = e => Math.round(1e5 * e) / 1e5, Z = /(-)?([\d]*\.?[\d])+/g, q = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi, X = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;

            function G(e) {
                return "string" == typeof e
            }
            let K = e => ({
                    test: i => G(i) && i.endsWith(e) && 1 === i.split(" ").length,
                    parse: parseFloat,
                    transform: i => `${i}${e}`
                }),
                J = K("deg"),
                Q = K("%"),
                tt = K("px"),
                te = K("vh"),
                ti = K("vw"),
                tn = {
                    ...Q,
                    parse: e => Q.parse(e) / 100,
                    transform: e => Q.transform(100 * e)
                },
                tr = {
                    ..._,
                    transform: Math.round
                },
                ts = {
                    borderWidth: tt,
                    borderTopWidth: tt,
                    borderRightWidth: tt,
                    borderBottomWidth: tt,
                    borderLeftWidth: tt,
                    borderRadius: tt,
                    radius: tt,
                    borderTopLeftRadius: tt,
                    borderTopRightRadius: tt,
                    borderBottomRightRadius: tt,
                    borderBottomLeftRadius: tt,
                    width: tt,
                    maxWidth: tt,
                    height: tt,
                    maxHeight: tt,
                    size: tt,
                    top: tt,
                    right: tt,
                    bottom: tt,
                    left: tt,
                    padding: tt,
                    paddingTop: tt,
                    paddingRight: tt,
                    paddingBottom: tt,
                    paddingLeft: tt,
                    margin: tt,
                    marginTop: tt,
                    marginRight: tt,
                    marginBottom: tt,
                    marginLeft: tt,
                    rotate: J,
                    rotateX: J,
                    rotateY: J,
                    rotateZ: J,
                    scale: Y,
                    scaleX: Y,
                    scaleY: Y,
                    scaleZ: Y,
                    skew: J,
                    skewX: J,
                    skewY: J,
                    distance: tt,
                    translateX: tt,
                    translateY: tt,
                    translateZ: tt,
                    x: tt,
                    y: tt,
                    z: tt,
                    perspective: tt,
                    transformPerspective: tt,
                    opacity: H,
                    originX: tn,
                    originY: tn,
                    originZ: tt,
                    zIndex: tr,
                    fillOpacity: H,
                    strokeOpacity: H,
                    numOctaves: tr
                };

            function to(e, i, n, r) {
                let {
                    style: s,
                    vars: o,
                    transform: a,
                    transformOrigin: l
                } = e, u = !1, h = !1, c = !0;
                for (let e in i) {
                    let n = i[e];
                    if (N(e)) {
                        o[e] = n;
                        continue
                    }
                    let r = ts[e],
                        d = $(n, r);
                    if (F.has(e)) {
                        if (u = !0,
                            a[e] = d, !c)
                            continue;
                        n !== (r.default || 0) && (c = !1)
                    } else
                        e.startsWith("origin") ? (h = !0,
                            l[e] = d) : s[e] = d
                }
                if (!i.transform && (u || r ? s.transform = function(e, {
                        enableHardwareAcceleration: i = !0,
                        allowTransformNone: n = !0
                    }, r, s) {
                        let o = "";
                        for (let i = 0; i < U; i++) {
                            let n = D[i];
                            if (void 0 !== e[n]) {
                                let i = I[n] || n;
                                o += `${i}(${e[n]}) `
                            }
                        }
                        return i && !e.z && (o += "translateZ(0)"),
                            o = o.trim(),
                            s ? o = s(e, r ? "" : o) : n && r && (o = "none"),
                            o
                    }(e.transform, n, c, r) : s.transform && (s.transform = "none")),
                    h) {
                    let {
                        originX: e = "50%",
                        originY: i = "50%",
                        originZ: n = 0
                    } = l;
                    s.transformOrigin = `${e} ${i} ${n}`
                }
            }
            let ta = () => ({
                style: {},
                transform: {},
                transformOrigin: {},
                vars: {}
            });

            function tl(e, i, n) {
                for (let r in i)
                    O(i[r]) || j(r, n) || (e[r] = i[r])
            }

            function tu(e, i, n) {
                let r = {},
                    s = function(e, i, n) {
                        let r = e.style || {},
                            s = {};
                        return tl(s, r, e),
                            Object.assign(s, function({
                                transformTemplate: e
                            }, i, n) {
                                return (0,
                                    u.useMemo)(() => {
                                    let r = ta();
                                    return to(r, i, {
                                            enableHardwareAcceleration: !n
                                        }, e),
                                        Object.assign({}, r.vars, r.style)
                                }, [i])
                            }(e, i, n)),
                            e.transformValues ? e.transformValues(s) : s
                    }(e, i, n);
                return e.drag && !1 !== e.dragListener && (r.draggable = !1,
                        s.userSelect = s.WebkitUserSelect = s.WebkitTouchCallout = "none",
                        s.touchAction = !0 === e.drag ? "none" : `pan-${"x" === e.drag ? "y" : "x"}`),
                    void 0 === e.tabIndex && (e.onTap || e.onTapStart || e.whileTap) && (r.tabIndex = 0),
                    r.style = s,
                    r
            }
            let th = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "transformValues", "custom", "inherit", "onLayoutAnimationStart", "onLayoutAnimationComplete", "onLayoutMeasure", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "ignoreStrict", "viewport"]);

            function tc(e) {
                return e.startsWith("while") || e.startsWith("drag") && "draggable" !== e || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || th.has(e)
            }
            let td = e => !tc(e);
            try {
                (r = require("@emotion/is-prop-valid").default) && (td = e => e.startsWith("on") ? !tc(e) : r(e))
            } catch (e) {}

            function tp(e, i, n) {
                return "string" == typeof e ? e : tt.transform(i + n * e)
            }
            let tm = {
                    offset: "stroke-dashoffset",
                    array: "stroke-dasharray"
                },
                tf = {
                    offset: "strokeDashoffset",
                    array: "strokeDasharray"
                };

            function tg(e, {
                attrX: i,
                attrY: n,
                originX: r,
                originY: s,
                pathLength: o,
                pathSpacing: a = 1,
                pathOffset: l = 0,
                ...u
            }, h, c, d) {
                if (to(e, u, h, d),
                    c) {
                    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
                    return
                }
                e.attrs = e.style,
                    e.style = {};
                let {
                    attrs: p,
                    style: m,
                    dimensions: f
                } = e;
                p.transform && (f && (m.transform = p.transform),
                        delete p.transform),
                    f && (void 0 !== r || void 0 !== s || m.transform) && (m.transformOrigin = function(e, i, n) {
                        let r = tp(i, e.x, e.width),
                            s = tp(n, e.y, e.height);
                        return `${r} ${s}`
                    }(f, void 0 !== r ? r : .5, void 0 !== s ? s : .5)),
                    void 0 !== i && (p.x = i),
                    void 0 !== n && (p.y = n),
                    void 0 !== o && function(e, i, n = 1, r = 0, s = !0) {
                        e.pathLength = 1;
                        let o = s ? tm : tf;
                        e[o.offset] = tt.transform(-r);
                        let a = tt.transform(i),
                            l = tt.transform(n);
                        e[o.array] = `${a} ${l}`
                    }(p, o, a, l, !1)
            }
            let ty = () => ({
                    ...ta(),
                    attrs: {}
                }),
                tv = e => "string" == typeof e && "svg" === e.toLowerCase();

            function tx(e, i, n, r) {
                let s = (0,
                    u.useMemo)(() => {
                    let n = ty();
                    return tg(n, i, {
                        enableHardwareAcceleration: !1
                    }, tv(r), e.transformTemplate), {
                        ...n.attrs,
                        style: {
                            ...n.style
                        }
                    }
                }, [i]);
                if (e.style) {
                    let i = {};
                    tl(i, e.style, e),
                        s.style = {
                            ...i,
                            ...s.style
                        }
                }
                return s
            }
            let tb = e => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();

            function tP(e, {
                style: i,
                vars: n
            }, r, s) {
                for (let o in Object.assign(e.style, i, s && s.getProjectionStyles(r)),
                        n)
                    e.style.setProperty(o, n[o])
            }
            let tw = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);

            function tA(e, i, n, r) {
                for (let n in tP(e, i, void 0, r),
                        i.attrs)
                    e.setAttribute(tw.has(n) ? n : tb(n), i.attrs[n])
            }

            function tT(e, i) {
                let {
                    style: n
                } = e, r = {};
                for (let s in n)
                    (O(n[s]) || i.style && O(i.style[s]) || j(s, e)) && (r[s] = n[s]);
                return r
            }

            function tV(e, i) {
                let n = tT(e, i);
                for (let r in e)
                    if (O(e[r]) || O(i[r])) {
                        let i = "x" === r || "y" === r ? "attr" + r.toUpperCase() : r;
                        n[i] = e[r]
                    }
                return n
            }

            function tE(e, i, n, r = {}, s = {}) {
                return "function" == typeof i && (i = i(void 0 !== n ? n : e.custom, r, s)),
                    "string" == typeof i && (i = e.variants && e.variants[i]),
                    "function" == typeof i && (i = i(void 0 !== n ? n : e.custom, r, s)),
                    i
            }
            let tS = e => Array.isArray(e),
                tC = e => Boolean(e && "object" == typeof e && e.mix && e.toValue),
                tM = e => tS(e) ? e[e.length - 1] || 0 : e;

            function tk(e) {
                let i = O(e) ? e.get() : e;
                return tC(i) ? i.toValue() : i
            }
            let tL = e => (i, n) => {
                    let r = (0,
                            u.useContext)(c),
                        s = (0,
                            u.useContext)(d.O),
                        o = () => (function({
                            scrapeMotionValuesFromProps: e,
                            createRenderState: i,
                            onMount: n
                        }, r, s, o) {
                            let a = {
                                latestValues: function(e, i, n, r) {
                                    let s = {},
                                        o = r(e, {});
                                    for (let e in o)
                                        s[e] = tk(o[e]);
                                    let {
                                        initial: a,
                                        animate: l
                                    } = e, u = x(e), h = b(e);
                                    i && h && !u && !1 !== e.inherit && (void 0 === a && (a = i.initial),
                                        void 0 === l && (l = i.animate));
                                    let c = !!n && !1 === n.initial;
                                    c = c || !1 === a;
                                    let d = c ? l : a;
                                    if (d && "boolean" != typeof d && !y(d)) {
                                        let i = Array.isArray(d) ? d : [d];
                                        i.forEach(i => {
                                            let n = tE(e, i);
                                            if (!n)
                                                return;
                                            let {
                                                transitionEnd: r,
                                                transition: o,
                                                ...a
                                            } = n;
                                            for (let e in a) {
                                                let i = a[e];
                                                if (Array.isArray(i)) {
                                                    let e = c ? i.length - 1 : 0;
                                                    i = i[e]
                                                }
                                                null !== i && (s[e] = i)
                                            }
                                            for (let e in r)
                                                s[e] = r[e]
                                        })
                                    }
                                    return s
                                }(r, s, o, e),
                                renderState: i()
                            };
                            return n && (a.mount = e => n(r, e, a)),
                                a
                        })(e, i, r, s);
                    return n ? o() : (0,
                        V.h)(o)
                },
                tR = {
                    useVisualState: tL({
                        scrapeMotionValuesFromProps: tV,
                        createRenderState: ty,
                        onMount: (e, i, {
                            renderState: n,
                            latestValues: r
                        }) => {
                            try {
                                n.dimensions = "function" == typeof i.getBBox ? i.getBBox() : i.getBoundingClientRect()
                            } catch (e) {
                                n.dimensions = {
                                    x: 0,
                                    y: 0,
                                    width: 0,
                                    height: 0
                                }
                            }
                            tg(n, r, {
                                    enableHardwareAcceleration: !1
                                }, tv(i.tagName), e.transformTemplate),
                                tA(i, n)
                        }
                    })
                },
                tB = {
                    useVisualState: tL({
                        scrapeMotionValuesFromProps: tT,
                        createRenderState: ta
                    })
                };

            function tD(e, i, n, r = {
                passive: !0
            }) {
                return e.addEventListener(i, n, r),
                    () => e.removeEventListener(i, n)
            }
            let tF = e => "mouse" === e.pointerType ? "number" != typeof e.button || e.button <= 0 : !1 !== e.isPrimary;

            function tj(e, i = "page") {
                return {
                    point: {
                        x: e[i + "X"],
                        y: e[i + "Y"]
                    }
                }
            }
            let tO = e => i => tF(i) && e(i, tj(i));

            function tI(e, i, n, r) {
                return tD(e, i, tO(n), r)
            }
            (s = a || (a = {})).Animate = "animate",
                s.Hover = "whileHover",
                s.Tap = "whileTap",
                s.Drag = "whileDrag",
                s.Focus = "whileFocus",
                s.InView = "whileInView",
                s.Exit = "exit";
            let tU = (e, i) => n => i(e(n)),
                tN = (...e) => e.reduce(tU);

            function t$(e) {
                let i = null;
                return () => {
                    let n = () => {
                        i = null
                    };
                    return null === i && (i = e,
                        n)
                }
            }
            let tW = t$("dragHorizontal"),
                t_ = t$("dragVertical");

            function tH(e) {
                let i = !1;
                if ("y" === e)
                    i = t_();
                else if ("x" === e)
                    i = tW();
                else {
                    let e = tW(),
                        n = t_();
                    e && n ? i = () => {
                            e(),
                                n()
                        } :
                        (e && e(),
                            n && n())
                }
                return i
            }

            function tY() {
                let e = tH(!0);
                return !e || (e(), !1)
            }
            class tz {
                constructor(e) {
                    this.isMounted = !1,
                        this.node = e
                }
                update() {}
            }

            function tZ(e, i) {
                let n = "onHover" + (i ? "Start" : "End"),
                    r = (r, s) => {
                        if ("touch" === r.type || tY())
                            return;
                        let o = e.getProps();
                        e.animationState && o.whileHover && e.animationState.setActive(a.Hover, i),
                            o[n] && o[n](r, s)
                    };
                return tI(e.current, "pointer" + (i ? "enter" : "leave"), r, {
                    passive: !e.getProps()[n]
                })
            }
            let tq = (e, i) => !!i && (e === i || tq(e, i.parentElement)),
                tX = e => e;

            function tG(e, i) {
                if (!i)
                    return;
                let n = new PointerEvent("pointer" + e);
                i(n, tj(n))
            }
            let tK = new WeakMap,
                tJ = new WeakMap,
                tQ = e => {
                    let i = tK.get(e.target);
                    i && i(e)
                },
                t0 = e => {
                    e.forEach(tQ)
                },
                t1 = {
                    some: 0,
                    all: 1
                };

            function t5(e, i) {
                if (!Array.isArray(i))
                    return !1;
                let n = i.length;
                if (n !== e.length)
                    return !1;
                for (let r = 0; r < n; r++)
                    if (i[r] !== e[r])
                        return !1;
                return !0
            }
            let t3 = e => /^\-?\d*\.?\d+$/.test(e),
                t2 = e => /^0[^.\s]+$/.test(e);
            var t4 = n(7367),
                t9 = n(404);

            function t6(e, i) {
                -1 === e.indexOf(i) && e.push(i)
            }

            function t8(e, i) {
                let n = e.indexOf(i);
                n > -1 && e.splice(n, 1)
            }
            class t7 {
                constructor() {
                    this.subscriptions = []
                }
                add(e) {
                    return t6(this.subscriptions, e),
                        () => t8(this.subscriptions, e)
                }
                notify(e, i, n) {
                    let r = this.subscriptions.length;
                    if (r) {
                        if (1 === r)
                            this.subscriptions[0](e, i, n);
                        else
                            for (let s = 0; s < r; s++) {
                                let r = this.subscriptions[s];
                                r && r(e, i, n)
                            }
                    }
                }
                getSize() {
                    return this.subscriptions.length
                }
                clear() {
                    this.subscriptions.length = 0
                }
            }

            function et(e, i) {
                return i ? e * (1e3 / i) : 0
            }
            let ee = e => !isNaN(parseFloat(e));
            class ei {
                constructor(e, i = {}) {
                    this.version = "9.0.7",
                        this.timeDelta = 0,
                        this.lastUpdated = 0,
                        this.canTrackVelocity = !1,
                        this.events = {},
                        this.updateAndNotify = (e, i = !0) => {
                            this.prev = this.current,
                                this.current = e;
                            let {
                                delta: n,
                                timestamp: r
                            } = t4.w;
                            this.lastUpdated !== r && (this.timeDelta = n,
                                    this.lastUpdated = r,
                                    t9.Z_.postRender(this.scheduleVelocityCheck)),
                                this.prev !== this.current && this.events.change && this.events.change.notify(this.current),
                                this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()),
                                i && this.events.renderRequest && this.events.renderRequest.notify(this.current)
                        },
                        this.scheduleVelocityCheck = () => t9.Z_.postRender(this.velocityCheck),
                        this.velocityCheck = ({
                            timestamp: e
                        }) => {
                            e !== this.lastUpdated && (this.prev = this.current,
                                this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()))
                        },
                        this.hasAnimated = !1,
                        this.prev = this.current = e,
                        this.canTrackVelocity = ee(this.current),
                        this.owner = i.owner
                }
                onChange(e) {
                    return this.on("change", e)
                }
                on(e, i) {
                    this.events[e] || (this.events[e] = new t7);
                    let n = this.events[e].add(i);
                    return "change" === e ? () => {
                            n(),
                                t9.Z_.read(() => {
                                    this.events.change.getSize() || this.stop()
                                })
                        } :
                        n
                }
                clearListeners() {
                    for (let e in this.events)
                        this.events[e].clear()
                }
                attach(e, i) {
                    this.passiveEffect = e,
                        this.stopPassiveEffect = i
                }
                set(e, i = !0) {
                    i && this.passiveEffect ? this.passiveEffect(e, this.updateAndNotify) : this.updateAndNotify(e, i)
                }
                setWithVelocity(e, i, n) {
                    this.set(i),
                        this.prev = e,
                        this.timeDelta = n
                }
                jump(e) {
                    this.updateAndNotify(e),
                        this.prev = e,
                        this.stop(),
                        this.stopPassiveEffect && this.stopPassiveEffect()
                }
                get() {
                    return this.current
                }
                getPrevious() {
                    return this.prev
                }
                getVelocity() {
                    return this.canTrackVelocity ? et(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0
                }
                start(e) {
                    return this.stop(),
                        new Promise(i => {
                            this.hasAnimated = !0,
                                this.animation = e(i) || null,
                                this.events.animationStart && this.events.animationStart.notify()
                        }).then(() => {
                            this.events.animationComplete && this.events.animationComplete.notify(),
                                this.clearAnimation()
                        })
                }
                stop() {
                    this.animation && (this.animation.stop(),
                            this.events.animationCancel && this.events.animationCancel.notify()),
                        this.clearAnimation()
                }
                isAnimating() {
                    return !!this.animation
                }
                clearAnimation() {
                    this.animation = null
                }
                destroy() {
                    this.clearListeners(),
                        this.stop(),
                        this.stopPassiveEffect && this.stopPassiveEffect()
                }
            }

            function en(e, i) {
                return new ei(e, i)
            }
            let er = (e, i) => n => Boolean(G(n) && X.test(n) && n.startsWith(e) || i && Object.prototype.hasOwnProperty.call(n, i)),
                es = (e, i, n) => r => {
                    if (!G(r))
                        return r;
                    let [s, o, a, l] = r.match(Z);
                    return {
                        [e]: parseFloat(s),
                        [i]: parseFloat(o),
                        [n]: parseFloat(a),
                        alpha: void 0 !== l ? parseFloat(l) : 1
                    }
                },
                eo = e => W(0, 255, e),
                ea = {
                    ..._,
                    transform: e => Math.round(eo(e))
                },
                el = {
                    test: er("rgb", "red"),
                    parse: es("red", "green", "blue"),
                    transform: ({
                        red: e,
                        green: i,
                        blue: n,
                        alpha: r = 1
                    }) => "rgba(" + ea.transform(e) + ", " + ea.transform(i) + ", " + ea.transform(n) + ", " + z(H.transform(r)) + ")"
                },
                eu = {
                    test: er("#"),
                    parse: function(e) {
                        let i = "",
                            n = "",
                            r = "",
                            s = "";
                        return e.length > 5 ? (i = e.substring(1, 3),
                            n = e.substring(3, 5),
                            r = e.substring(5, 7),
                            s = e.substring(7, 9)) : (i = e.substring(1, 2),
                            n = e.substring(2, 3),
                            r = e.substring(3, 4),
                            s = e.substring(4, 5),
                            i += i,
                            n += n,
                            r += r,
                            s += s), {
                            red: parseInt(i, 16),
                            green: parseInt(n, 16),
                            blue: parseInt(r, 16),
                            alpha: s ? parseInt(s, 16) / 255 : 1
                        }
                    },
                    transform: el.transform
                },
                eh = {
                    test: er("hsl", "hue"),
                    parse: es("hue", "saturation", "lightness"),
                    transform: ({
                        hue: e,
                        saturation: i,
                        lightness: n,
                        alpha: r = 1
                    }) => "hsla(" + Math.round(e) + ", " + Q.transform(z(i)) + ", " + Q.transform(z(n)) + ", " + z(H.transform(r)) + ")"
                },
                ec = {
                    test: e => el.test(e) || eu.test(e) || eh.test(e),
                    parse: e => el.test(e) ? el.parse(e) : eh.test(e) ? eh.parse(e) : eu.parse(e),
                    transform: e => G(e) ? e : e.hasOwnProperty("red") ? el.transform(e) : eh.transform(e)
                },
                ed = "${c}",
                ep = "${n}";

            function em(e) {
                "number" == typeof e && (e = `${e}`);
                let i = [],
                    n = 0,
                    r = 0,
                    s = e.match(q);
                s && (n = s.length,
                    e = e.replace(q, ed),
                    i.push(...s.map(ec.parse)));
                let o = e.match(Z);
                return o && (r = o.length,
                    e = e.replace(Z, ep),
                    i.push(...o.map(_.parse))), {
                    values: i,
                    numColors: n,
                    numNumbers: r,
                    tokenised: e
                }
            }

            function ef(e) {
                return em(e).values
            }

            function eg(e) {
                let {
                    values: i,
                    numColors: n,
                    tokenised: r
                } = em(e), s = i.length;
                return e => {
                    let i = r;
                    for (let r = 0; r < s; r++)
                        i = i.replace(r < n ? ed : ep, r < n ? ec.transform(e[r]) : z(e[r]));
                    return i
                }
            }
            let ey = e => "number" == typeof e ? 0 : e,
                ev = {
                    test: function(e) {
                        var i, n;
                        return isNaN(e) && G(e) && ((null === (i = e.match(Z)) || void 0 === i ? void 0 : i.length) || 0) + ((null === (n = e.match(q)) || void 0 === n ? void 0 : n.length) || 0) > 0
                    },
                    parse: ef,
                    createTransformer: eg,
                    getAnimatableNone: function(e) {
                        let i = ef(e),
                            n = eg(e);
                        return n(i.map(ey))
                    }
                },
                ex = new Set(["brightness", "contrast", "saturate", "opacity"]);

            function eb(e) {
                let [i, n] = e.slice(0, -1).split("(");
                if ("drop-shadow" === i)
                    return e;
                let [r] = n.match(Z) || [];
                if (!r)
                    return e;
                let s = n.replace(r, ""),
                    o = ex.has(i) ? 1 : 0;
                return r !== n && (o *= 100),
                    i + "(" + o + s + ")"
            }
            let eP = /([a-z-]*)\(.*?\)/g,
                ew = {
                    ...ev,
                    getAnimatableNone: e => {
                        let i = e.match(eP);
                        return i ? i.map(eb).join(" ") : e
                    }
                },
                eA = {
                    ...ts,
                    color: ec,
                    backgroundColor: ec,
                    outlineColor: ec,
                    fill: ec,
                    stroke: ec,
                    borderColor: ec,
                    borderTopColor: ec,
                    borderRightColor: ec,
                    borderBottomColor: ec,
                    borderLeftColor: ec,
                    filter: ew,
                    WebkitFilter: ew
                },
                eT = e => eA[e];

            function eV(e, i) {
                let n = eT(e);
                return n !== ew && (n = ev),
                    n.getAnimatableNone ? n.getAnimatableNone(i) : void 0
            }
            let eE = e => i => i.test(e),
                eS = [_, tt, Q, J, ti, te, {
                    test: e => "auto" === e,
                    parse: e => e
                }],
                eC = e => eS.find(eE(e)),
                eM = [...eS, ec, ev],
                ek = e => eM.find(eE(e));

            function eL(e, i, n) {
                let r = e.getProps();
                return tE(r, i, void 0 !== n ? n : r.custom, function(e) {
                    let i = {};
                    return e.values.forEach((e, n) => i[n] = e.get()),
                        i
                }(e), function(e) {
                    let i = {};
                    return e.values.forEach((e, n) => i[n] = e.getVelocity()),
                        i
                }(e))
            }

            function eR(e) {
                return Boolean(O(e) && e.add)
            }
            let eB = "data-" + tb("framerAppearId");
            var eD = function() {},
                eF = function() {};
            let ej = e => 1e3 * e,
                eO = {
                    current: !1
                },
                eI = e => i => i <= .5 ? e(2 * i) / 2 : (2 - e(2 * (1 - i))) / 2,
                eU = e => i => 1 - e(1 - i),
                eN = e => e * e,
                e$ = eU(eN),
                eW = eI(eN),
                e_ = (e, i, n) => -n * e + n * i + e;

            function eH(e, i, n) {
                return (n < 0 && (n += 1),
                    n > 1 && (n -= 1),
                    n < 1 / 6) ? e + (i - e) * 6 * n : n < .5 ? i : n < 2 / 3 ? e + (i - e) * (2 / 3 - n) * 6 : e
            }
            let eY = (e, i, n) => {
                    let r = e * e;
                    return Math.sqrt(Math.max(0, n * (i * i - r) + r))
                },
                ez = [eu, el, eh],
                eZ = e => ez.find(i => i.test(e));

            function eq(e) {
                let i = eZ(e);
                eF(Boolean(i), `'${e}' is not an animatable color. Use the equivalent color code instead.`);
                let n = i.parse(e);
                return i === eh && (n = function({
                        hue: e,
                        saturation: i,
                        lightness: n,
                        alpha: r
                    }) {
                        e /= 360,
                            n /= 100;
                        let s = 0,
                            o = 0,
                            a = 0;
                        if (i /= 100) {
                            let r = n < .5 ? n * (1 + i) : n + i - n * i,
                                l = 2 * n - r;
                            s = eH(l, r, e + 1 / 3),
                                o = eH(l, r, e),
                                a = eH(l, r, e - 1 / 3)
                        } else
                            s = o = a = n;
                        return {
                            red: Math.round(255 * s),
                            green: Math.round(255 * o),
                            blue: Math.round(255 * a),
                            alpha: r
                        }
                    }(n)),
                    n
            }
            let eX = (e, i) => {
                let n = eq(e),
                    r = eq(i),
                    s = {
                        ...n
                    };
                return e => (s.red = eY(n.red, r.red, e),
                    s.green = eY(n.green, r.green, e),
                    s.blue = eY(n.blue, r.blue, e),
                    s.alpha = e_(n.alpha, r.alpha, e),
                    el.transform(s))
            };

            function eG(e, i) {
                return "number" == typeof e ? n => e_(e, i, n) : ec.test(e) ? eX(e, i) : eQ(e, i)
            }
            let eK = (e, i) => {
                    let n = [...e],
                        r = n.length,
                        s = e.map((e, n) => eG(e, i[n]));
                    return e => {
                        for (let i = 0; i < r; i++)
                            n[i] = s[i](e);
                        return n
                    }
                },
                eJ = (e, i) => {
                    let n = {
                            ...e,
                            ...i
                        },
                        r = {};
                    for (let s in n)
                        void 0 !== e[s] && void 0 !== i[s] && (r[s] = eG(e[s], i[s]));
                    return e => {
                        for (let i in r)
                            n[i] = r[i](e);
                        return n
                    }
                },
                eQ = (e, i) => {
                    let n = ev.createTransformer(i),
                        r = em(e),
                        s = em(i),
                        o = r.numColors === s.numColors && r.numNumbers >= s.numNumbers;
                    return o ? tN(eK(r.values, s.values), n) : (eD(!0, `Complex values '${e}' and '${i}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`),
                        n => `${n > 0 ? i : e}`)
                },
                e0 = (e, i, n) => {
                    let r = i - e;
                    return 0 === r ? 1 : (n - e) / r
                },
                e1 = (e, i) => n => e_(e, i, n);

            function e5(e, i, {
                clamp: n = !0,
                ease: r,
                mixer: s
            } = {}) {
                let o = e.length;
                eF(o === i.length, "Both input and output ranges must be the same length"),
                    eF(!r || !Array.isArray(r) || r.length === o - 1, "Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."),
                    e[0] > e[o - 1] && (e = [...e].reverse(),
                        i = [...i].reverse());
                let a = function(e, i, n) {
                        let r = [],
                            s = n || function(e) {
                                if ("number" == typeof e)
                                ;
                                else if ("string" == typeof e)
                                    return ec.test(e) ? eX : eQ;
                                else if (Array.isArray(e))
                                    return eK;
                                else if ("object" == typeof e)
                                    return eJ;
                                return e1
                            }(e[0]),
                            o = e.length - 1;
                        for (let n = 0; n < o; n++) {
                            let o = s(e[n], e[n + 1]);
                            if (i) {
                                let e = Array.isArray(i) ? i[n] : i;
                                o = tN(e, o)
                            }
                            r.push(o)
                        }
                        return r
                    }(i, r, s),
                    l = a.length,
                    u = i => {
                        let n = 0;
                        if (l > 1)
                            for (; n < e.length - 2 && !(i < e[n + 1]); n++)
                        ;
                        let r = e0(e[n], e[n + 1], i);
                        return a[n](r)
                    };
                return n ? i => u(W(e[0], e[o - 1], i)) : u
            }
            let e3 = (e, i, n) => (((1 - 3 * n + 3 * i) * e + (3 * n - 6 * i)) * e + 3 * i) * e;

            function e2(e, i, n, r) {
                if (e === i && n === r)
                    return tX;
                let s = i => (function(e, i, n, r, s) {
                    let o, a;
                    let l = 0;
                    do
                        (o = e3(a = i + (n - i) / 2, r, s) - e) > 0 ? n = a : i = a;
                    while (Math.abs(o) > 1e-7 && ++l < 12);
                    return a
                })(i, 0, 1, e, n);
                return e => 0 === e || 1 === e ? e : e3(s(e), i, r)
            }
            let e4 = e => 1 - Math.sin(Math.acos(e)),
                e9 = eU(e4),
                e6 = eI(e9),
                e8 = e2(.33, 1.53, .69, .99),
                e7 = eU(e8),
                it = eI(e7),
                ie = e => (e *= 2) < 1 ? .5 * e7(e) : .5 * (2 - Math.pow(2, -10 * (e - 1))),
                ii = {
                    linear: tX,
                    easeIn: eN,
                    easeInOut: eW,
                    easeOut: e$,
                    circIn: e4,
                    circInOut: e6,
                    circOut: e9,
                    backIn: e7,
                    backInOut: it,
                    backOut: e8,
                    anticipate: ie
                },
                ir = e => {
                    if (Array.isArray(e)) {
                        eF(4 === e.length, "Cubic bezier arrays must contain four numerical values.");
                        let [i, n, r, s] = e;
                        return e2(i, n, r, s)
                    }
                    return "string" == typeof e ? (eF(void 0 !== ii[e], `Invalid easing type '${e}'`),
                        ii[e]) : e
                },
                is = e => Array.isArray(e) && "number" != typeof e[0];

            function io({
                keyframes: e,
                ease: i = eW,
                times: n,
                duration: r = 300
            }) {
                e = [...e];
                let s = is(i) ? i.map(ir) : ir(i),
                    o = {
                        done: !1,
                        value: e[0]
                    },
                    a = (n && n.length === e.length ? n : function(e) {
                        let i = e.length;
                        return e.map((e, n) => 0 !== n ? n / (i - 1) : 0)
                    }(e)).map(e => e * r);

                function l() {
                    var i;
                    return e5(a, e, {
                        ease: Array.isArray(s) ? s : (i = e).map(() => s || eW).splice(0, i.length - 1)
                    })
                }
                let u = l();
                return {
                    next: e => (o.value = u(e),
                        o.done = e >= r,
                        o),
                    flipTarget: () => {
                        e.reverse(),
                            u = l()
                    }
                }
            }

            function ia(e, i) {
                return e * Math.sqrt(1 - i * i)
            }
            let il = ["duration", "bounce"],
                iu = ["stiffness", "damping", "mass"];

            function ih(e, i) {
                return i.some(i => void 0 !== e[i])
            }

            function ic({
                keyframes: e,
                restDelta: i,
                restSpeed: n,
                ...r
            }) {
                let s = e[0],
                    o = e[e.length - 1],
                    a = {
                        done: !1,
                        value: s
                    },
                    {
                        stiffness: l,
                        damping: u,
                        mass: h,
                        velocity: c,
                        duration: d,
                        isResolvedFromDuration: p
                    } = function(e) {
                        let i = {
                            velocity: 0,
                            stiffness: 100,
                            damping: 10,
                            mass: 1,
                            isResolvedFromDuration: !1,
                            ...e
                        };
                        if (!ih(e, iu) && ih(e, il)) {
                            let n = function({
                                duration: e = 800,
                                bounce: i = .25,
                                velocity: n = 0,
                                mass: r = 1
                            }) {
                                let s, o;
                                eD(e <= 1e4, "Spring duration must be 10 seconds or less");
                                let a = 1 - i;
                                a = W(.05, 1, a),
                                    e = W(.01, 10, e / 1e3),
                                    a < 1 ? (s = i => {
                                            let r = i * a,
                                                s = r * e,
                                                o = ia(i, a);
                                            return .001 - (r - n) / o * Math.exp(-s)
                                        },
                                        o = i => {
                                            let r = i * a,
                                                o = r * e,
                                                l = Math.pow(a, 2) * Math.pow(i, 2) * e,
                                                u = ia(Math.pow(i, 2), a),
                                                h = -s(i) + .001 > 0 ? -1 : 1;
                                            return h * ((o * n + n - l) * Math.exp(-o)) / u
                                        }
                                    ) : (s = i => {
                                            let r = Math.exp(-i * e),
                                                s = (i - n) * e + 1;
                                            return -.001 + r * s
                                        },
                                        o = i => {
                                            let r = Math.exp(-i * e),
                                                s = (n - i) * (e * e);
                                            return r * s
                                        }
                                    );
                                let l = 5 / e,
                                    u = function(e, i, n) {
                                        let r = n;
                                        for (let n = 1; n < 12; n++)
                                            r -= e(r) / i(r);
                                        return r
                                    }(s, o, l);
                                if (e *= 1e3,
                                    isNaN(u))
                                    return {
                                        stiffness: 100,
                                        damping: 10,
                                        duration: e
                                    }; {
                                    let i = Math.pow(u, 2) * r;
                                    return {
                                        stiffness: i,
                                        damping: 2 * a * Math.sqrt(r * i),
                                        duration: e
                                    }
                                }
                            }(e);
                            (i = {
                                ...i,
                                ...n,
                                velocity: 0,
                                mass: 1
                            }).isResolvedFromDuration = !0
                        }
                        return i
                    }(r),
                    m = id,
                    f = c ? -(c / 1e3) : 0,
                    g = u / (2 * Math.sqrt(l * h));

                function y() {
                    let e = o - s,
                        r = Math.sqrt(l / h) / 1e3,
                        a = 5 > Math.abs(e);
                    if (n || (n = a ? .01 : 2),
                        i || (i = a ? .005 : .5),
                        g < 1) {
                        let i = ia(r, g);
                        m = n => o - Math.exp(-g * r * n) * ((f + g * r * e) / i * Math.sin(i * n) + e * Math.cos(i * n))
                    } else if (1 === g)
                        m = i => o - Math.exp(-r * i) * (e + (f + r * e) * i);
                    else {
                        let i = r * Math.sqrt(g * g - 1);
                        m = n => {
                            let s = Math.min(i * n, 300);
                            return o - Math.exp(-g * r * n) * ((f + g * r * e) * Math.sinh(s) + i * e * Math.cosh(s)) / i
                        }
                    }
                }
                return y(), {
                    next: e => {
                        let r = m(e);
                        if (p)
                            a.done = e >= d;
                        else {
                            let s = f;
                            if (0 !== e) {
                                if (g < 1) {
                                    let i = Math.max(0, e - 5);
                                    s = et(r - m(i), e - i)
                                } else
                                    s = 0
                            }
                            let l = Math.abs(s) <= n,
                                u = Math.abs(o - r) <= i;
                            a.done = l && u
                        }
                        return a.value = a.done ? o : r,
                            a
                    },
                    flipTarget: () => {
                        f = -f, [s, o] = [o, s],
                            y()
                    }
                }
            }
            ic.needsInterpolation = (e, i) => "string" == typeof e || "string" == typeof i;
            let id = e => 0,
                ip = {
                    decay: function({
                        keyframes: e = [0],
                        velocity: i = 0,
                        power: n = .8,
                        timeConstant: r = 350,
                        restDelta: s = .5,
                        modifyTarget: o
                    }) {
                        let a = e[0],
                            l = {
                                done: !1,
                                value: a
                            },
                            u = n * i,
                            h = a + u,
                            c = void 0 === o ? h : o(h);
                        return c !== h && (u = c - a), {
                            next: e => {
                                let i = -u * Math.exp(-e / r);
                                return l.done = !(i > s || i < -s),
                                    l.value = l.done ? c : c + i,
                                    l
                            },
                            flipTarget: () => {}
                        }
                    },
                    keyframes: io,
                    tween: io,
                    spring: ic
                };

            function im(e, i, n = 0) {
                return e - i - n
            }
            let ig = e => {
                let i = ({
                    delta: i
                }) => e(i);
                return {
                    start: () => t9.Z_.update(i, !0),
                    stop: () => t9.qY.update(i)
                }
            };

            function iy({
                duration: e,
                driver: i = ig,
                elapsed: n = 0,
                repeat: r = 0,
                repeatType: s = "loop",
                repeatDelay: o = 0,
                keyframes: a,
                autoplay: l = !0,
                onPlay: u,
                onStop: h,
                onComplete: c,
                onRepeat: d,
                onUpdate: p,
                type: m = "keyframes",
                ...f
            }) {
                let g, y;
                let v = n,
                    x = 0,
                    b = e,
                    P = !1,
                    w = !0,
                    A = ip[a.length > 2 ? "keyframes" : m] || io,
                    T = a[0],
                    V = a[a.length - 1],
                    E = {
                        done: !1,
                        value: T
                    },
                    {
                        needsInterpolation: S
                    } = A;
                S && S(T, V) && (y = e5([0, 100], [T, V], {
                        clamp: !1
                    }),
                    a = [0, 100]);
                let C = A({
                    ...f,
                    duration: e,
                    keyframes: a
                });

                function M(e) {
                    if (w || (e = -e),
                        n += e,
                        P || (E = C.next(Math.max(0, n)),
                            y && (E.value = y(E.value)),
                            P = w ? E.done : n <= 0),
                        p && p(E.value),
                        P) {
                        if (0 === x && (b = void 0 !== b ? b : n),
                            x < r) {
                            var i, a;
                            i = n,
                                a = b,
                                (w ? i >= a + o : i <= -o) && (x++,
                                    "reverse" === s ? n = function(e, i = 0, n = 0, r = !0) {
                                        return r ? im(i + -e, i, n) : i - (e - i) + n
                                    }(n, b, o, w = x % 2 == 0) : (n = im(n, b, o),
                                        "mirror" === s && C.flipTarget()),
                                    P = !1,
                                    d && d())
                        } else
                            g && g.stop(),
                            c && c()
                    }
                }
                return l && (u && u(),
                    (g = i(M)).start()), {
                    stop: () => {
                        h && h(),
                            g && g.stop()
                    },
                    set currentTime(t) {
                        n = v,
                            M(t)
                    },
                    sample: i => {
                        n = v;
                        let r = e && "number" == typeof e ? Math.max(.5 * e, 50) : 50,
                            s = 0;
                        for (M(0); s <= i;) {
                            let e = i - s;
                            M(Math.min(e, r)),
                                s += r
                        }
                        return E
                    }
                }
            }
            let iv = ([e, i, n, r]) => `cubic-bezier(${e}, ${i}, ${n}, ${r})`,
                ix = {
                    linear: "linear",
                    ease: "ease",
                    easeIn: "ease-in",
                    easeOut: "ease-out",
                    easeInOut: "ease-in-out",
                    circIn: iv([0, .65, .55, 1]),
                    circOut: iv([.55, 0, 1, .45]),
                    backIn: iv([.31, .01, .66, -.59]),
                    backOut: iv([.33, 1.53, .69, .99])
                },
                ib = {
                    waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate")
                },
                iP = {},
                iw = {};
            for (let e in ib)
                iw[e] = () => (void 0 === iP[e] && (iP[e] = ib[e]()),
                    iP[e]);
            let iA = new Set(["opacity"]);

            function iT(e, i) {
                let n = performance.now(),
                    r = ({
                        timestamp: s
                    }) => {
                        let o = s - n;
                        o >= i && (t9.qY.read(r),
                            e(o - i))
                    };
                return t9.Z_.read(r, !0),
                    () => t9.qY.read(r)
            }
            let iV = () => ({
                    type: "spring",
                    stiffness: 500,
                    damping: 25,
                    restSpeed: 10
                }),
                iE = e => ({
                    type: "spring",
                    stiffness: 550,
                    damping: 0 === e ? 2 * Math.sqrt(550) : 30,
                    restSpeed: 10
                }),
                iS = () => ({
                    type: "keyframes",
                    ease: "linear",
                    duration: .3
                }),
                iC = {
                    type: "keyframes",
                    duration: .8
                },
                iM = {
                    x: iV,
                    y: iV,
                    z: iV,
                    rotate: iV,
                    rotateX: iV,
                    rotateY: iV,
                    rotateZ: iV,
                    scaleX: iE,
                    scaleY: iE,
                    scale: iE,
                    opacity: iS,
                    backgroundColor: iS,
                    color: iS,
                    default: iE
                },
                ik = (e, {
                    keyframes: i
                }) => {
                    if (i.length > 2)
                        return iC; {
                        let n = iM[e] || iM.default;
                        return n(i[1])
                    }
                },
                iL = (e, i) => "zIndex" !== e && !!("number" == typeof i || Array.isArray(i) || "string" == typeof i && ev.test(i) && !i.startsWith("url("));

            function iR(e) {
                return 0 === e || "string" == typeof e && 0 === parseFloat(e) && -1 === e.indexOf(" ")
            }

            function iB(e) {
                return "number" == typeof e ? 0 : eV("", e)
            }

            function iD(e, i) {
                return e[i] || e.default || e
            }
            let iF = (e, i, n, r = {}) => s => {
                let o = iD(r, e) || {},
                    a = o.delay || r.delay || 0,
                    {
                        elapsed: l = 0
                    } = r;
                l -= ej(a);
                let u = function(e, i, n, r) {
                        let s = iL(i, n),
                            o = void 0 !== r.from ? r.from : e.get();
                        return ("none" === o && s && "string" == typeof n ? o = eV(i, n) : iR(o) && "string" == typeof n ? o = iB(n) : !Array.isArray(n) && iR(n) && "string" == typeof o && (n = iB(o)),
                            Array.isArray(n)) ? (null === n[0] && (n[0] = o),
                            n) : [o, n]
                    }(i, e, n, o),
                    h = u[0],
                    c = u[u.length - 1],
                    d = iL(e, h),
                    p = iL(e, c);
                eD(d === p, `You are trying to animate ${e} from "${h}" to "${c}". ${h} is not an animatable value - to enable this animation set ${h} to a value animatable to ${c} via the \`style\` property.`);
                let m = {
                    keyframes: u,
                    velocity: i.getVelocity(),
                    ...o,
                    elapsed: l,
                    onUpdate: e => {
                        i.set(e),
                            o.onUpdate && o.onUpdate(e)
                    },
                    onComplete: () => {
                        s(),
                            o.onComplete && o.onComplete()
                    }
                };
                if (!d || !p || eO.current || !1 === o.type)
                    return function({
                        keyframes: e,
                        elapsed: i,
                        onUpdate: n,
                        onComplete: r
                    }) {
                        let s = () => {
                            n && n(e[e.length - 1]),
                                r && r()
                        };
                        return i ? {
                            stop: iT(s, -i)
                        } : s()
                    }(m);
                if ("inertia" === o.type)
                    return function({
                        keyframes: e,
                        velocity: i = 0,
                        min: n,
                        max: r,
                        power: s = .8,
                        timeConstant: o = 750,
                        bounceStiffness: a = 500,
                        bounceDamping: l = 10,
                        restDelta: u = 1,
                        modifyTarget: h,
                        driver: c,
                        onUpdate: d,
                        onComplete: p,
                        onStop: m
                    }) {
                        let f;
                        let g = e[0];

                        function y(e) {
                            return void 0 !== n && e < n || void 0 !== r && e > r
                        }

                        function v(e) {
                            return void 0 === n ? r : void 0 === r ? n : Math.abs(n - e) < Math.abs(r - e) ? n : r
                        }

                        function x(e) {
                            f && f.stop(),
                                f = iy({
                                    keyframes: [0, 1],
                                    velocity: 0,
                                    ...e,
                                    driver: c,
                                    onUpdate: i => {
                                        d && d(i),
                                            e.onUpdate && e.onUpdate(i)
                                    },
                                    onComplete: p,
                                    onStop: m
                                })
                        }

                        function b(e) {
                            x({
                                type: "spring",
                                stiffness: a,
                                damping: l,
                                restDelta: u,
                                ...e
                            })
                        }
                        if (y(g))
                            b({
                                velocity: i,
                                keyframes: [g, v(g)]
                            });
                        else {
                            let e, r, a = s * i + g;
                            void 0 !== h && (a = h(a));
                            let l = v(a),
                                c = l === n ? -1 : 1,
                                d = n => {
                                    e = r,
                                        r = n,
                                        i = et(n - e, t4.w.delta),
                                        (1 === c && n > l || -1 === c && n < l) && b({
                                            keyframes: [n, l],
                                            velocity: i
                                        })
                                };
                            x({
                                type: "decay",
                                keyframes: [g, 0],
                                velocity: i,
                                timeConstant: o,
                                power: s,
                                restDelta: u,
                                modifyTarget: h,
                                onUpdate: y(a) ? d : void 0
                            })
                        }
                        return {
                            stop: () => f && f.stop()
                        }
                    }(m);
                if (! function({
                        when: e,
                        delay: i,
                        delayChildren: n,
                        staggerChildren: r,
                        staggerDirection: s,
                        repeat: o,
                        repeatType: a,
                        repeatDelay: l,
                        from: u,
                        elapsed: h,
                        ...c
                    }) {
                        return !!Object.keys(c).length
                    }(o) && (m = {
                        ...m,
                        ...ik(e, m)
                    }),
                    m.duration && (m.duration = ej(m.duration)),
                    m.repeatDelay && (m.repeatDelay = ej(m.repeatDelay)),
                    i.owner && i.owner.current instanceof HTMLElement && !i.owner.getProps().onUpdate) {
                    let n = function(e, i, {
                        onUpdate: n,
                        onComplete: r,
                        ...s
                    }) {
                        var o;
                        let a = iw.waapi() && iA.has(i) && !s.repeatDelay && "mirror" !== s.repeatType && 0 !== s.damping;
                        if (!a)
                            return !1;
                        let {
                            keyframes: l,
                            duration: u = 300,
                            elapsed: h = 0,
                            ease: c
                        } = s;
                        if ("spring" === s.type || !(!(o = s.ease) || Array.isArray(o) || "string" == typeof o && ix[o])) {
                            if (s.repeat === 1 / 0)
                                return;
                            let e = iy({
                                    ...s,
                                    elapsed: 0
                                }),
                                i = {
                                    done: !1,
                                    value: l[0]
                                },
                                n = [],
                                r = 0;
                            for (; !i.done && r < 2e4;)
                                n.push((i = e.sample(r)).value),
                                r += 10;
                            l = n,
                                u = r - 10,
                                c = "linear"
                        }
                        let d = function(e, i, n, {
                            delay: r = 0,
                            duration: s,
                            repeat: o = 0,
                            repeatType: a = "loop",
                            ease: l,
                            times: u
                        } = {}) {
                            return e.animate({
                                [i]: n,
                                offset: u
                            }, {
                                delay: r,
                                duration: s,
                                easing: function(e) {
                                    if (e)
                                        return Array.isArray(e) ? iv(e) : ix[e]
                                }(l),
                                fill: "both",
                                iterations: o + 1,
                                direction: "reverse" === a ? "alternate" : "normal"
                            })
                        }(e.owner.current, i, l, {
                            ...s,
                            delay: -h,
                            duration: u,
                            ease: c
                        });
                        return d.onfinish = () => {
                            e.set(function(e, {
                                    repeat: i,
                                    repeatType: n = "loop"
                                }) {
                                    let r = i && "loop" !== n && i % 2 == 1 ? 0 : e.length - 1;
                                    return e[r]
                                }(l, s)),
                                t9.Z_.update(() => d.cancel()),
                                r && r()
                        }, {
                            get currentTime() {
                                return d.currentTime || 0
                            },
                            set currentTime(t) {
                                d.currentTime = t
                            },
                            stop: () => {
                                let {
                                    currentTime: i
                                } = d;
                                if (i) {
                                    let n = iy({
                                        ...s,
                                        autoplay: !1
                                    });
                                    e.setWithVelocity(n.sample(i - 10).value, n.sample(i).value, 10)
                                }
                                t9.Z_.update(() => d.cancel())
                            }
                        }
                    }(i, e, m);
                    if (n)
                        return n
                }
                return iy(m)
            };

            function ij(e, i, n = {}) {
                let r = eL(e, i, n.custom),
                    {
                        transition: s = e.getDefaultTransition() || {}
                    } = r || {};
                n.transitionOverride && (s = n.transitionOverride);
                let o = r ? () => iO(e, r, n) : () => Promise.resolve(),
                    a = e.variantChildren && e.variantChildren.size ? (r = 0) => {
                        let {
                            delayChildren: o = 0,
                            staggerChildren: a,
                            staggerDirection: l
                        } = s;
                        return function(e, i, n = 0, r = 0, s = 1, o) {
                            let a = [],
                                l = (e.variantChildren.size - 1) * r,
                                u = 1 === s ? (e = 0) => e * r : (e = 0) => l - e * r;
                            return Array.from(e.variantChildren).sort(iI).forEach((e, r) => {
                                    e.notify("AnimationStart", i),
                                        a.push(ij(e, i, {
                                            ...o,
                                            delay: n + u(r)
                                        }).then(() => e.notify("AnimationComplete", i)))
                                }),
                                Promise.all(a)
                        }(e, i, o + r, a, l, n)
                    } :
                    () => Promise.resolve(),
                    {
                        when: l
                    } = s;
                if (!l)
                    return Promise.all([o(), a(n.delay)]); {
                    let [e, i] = "beforeChildren" === l ? [o, a] : [a, o];
                    return e().then(i)
                }
            }

            function iO(e, i, {
                delay: n = 0,
                transitionOverride: r,
                type: s
            } = {}) {
                let {
                    transition: o = e.getDefaultTransition(),
                    transitionEnd: a,
                    ...l
                } = e.makeTargetAnimatable(i), u = e.getValue("willChange");
                r && (o = r);
                let h = [],
                    c = s && e.animationState && e.animationState.getState()[s];
                for (let i in l) {
                    let r = e.getValue(i),
                        s = l[i];
                    if (!r || void 0 === s || c && function({
                            protectedKeys: e,
                            needsAnimating: i
                        }, n) {
                            let r = e.hasOwnProperty(n) && !0 !== i[n];
                            return i[n] = !1,
                                r
                        }(c, i))
                        continue;
                    let a = {
                        delay: n,
                        elapsed: 0,
                        ...o
                    };
                    if (window.HandoffAppearAnimations && !r.hasAnimated) {
                        let n = e.getProps()[eB];
                        n && (a.elapsed = window.HandoffAppearAnimations(n, i, r, t9.Z_))
                    }
                    let d = r.start(iF(i, r, s, e.shouldReduceMotion && F.has(i) ? {
                        type: !1
                    } : a));
                    eR(u) && (u.add(i),
                            d = d.then(() => u.remove(i))),
                        h.push(d)
                }
                return Promise.all(h).then(() => {
                    a && function(e, i) {
                        let n = eL(e, i),
                            {
                                transitionEnd: r = {},
                                transition: s = {},
                                ...o
                            } = n ? e.makeTargetAnimatable(n, !1) : {};
                        for (let i in o = {
                                ...o,
                                ...r
                            }) {
                            var a;
                            let n = tM(o[i]);
                            a = i,
                                e.hasValue(a) ? e.getValue(a).set(n) : e.addValue(a, en(n))
                        }
                    }(e, a)
                })
            }

            function iI(e, i) {
                return e.sortNodePosition(i)
            }
            let iU = [a.Animate, a.InView, a.Focus, a.Hover, a.Tap, a.Drag, a.Exit],
                iN = [...iU].reverse(),
                i$ = iU.length;

            function iW(e = !1) {
                return {
                    isActive: e,
                    protectedKeys: {},
                    needsAnimating: {},
                    prevResolvedValues: {}
                }
            }
            let i_ = 0,
                iH = (e, i) => Math.abs(e - i);
            class iY {
                constructor(e, i, {
                    transformPagePoint: n
                } = {}) {
                    if (this.startEvent = null,
                        this.lastMoveEvent = null,
                        this.lastMoveEventInfo = null,
                        this.handlers = {},
                        this.updatePoint = () => {
                            if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                                return;
                            let e = iq(this.lastMoveEventInfo, this.history),
                                i = null !== this.startEvent,
                                n = function(e, i) {
                                    let n = iH(e.x, i.x),
                                        r = iH(e.y, i.y);
                                    return Math.sqrt(n ** 2 + r ** 2)
                                }(e.offset, {
                                    x: 0,
                                    y: 0
                                }) >= 3;
                            if (!i && !n)
                                return;
                            let {
                                point: r
                            } = e, {
                                timestamp: s
                            } = t4.w;
                            this.history.push({
                                ...r,
                                timestamp: s
                            });
                            let {
                                onStart: o,
                                onMove: a
                            } = this.handlers;
                            i || (o && o(this.lastMoveEvent, e),
                                    this.startEvent = this.lastMoveEvent),
                                a && a(this.lastMoveEvent, e)
                        },
                        this.handlePointerMove = (e, i) => {
                            this.lastMoveEvent = e,
                                this.lastMoveEventInfo = iz(i, this.transformPagePoint),
                                t9.Z_.update(this.updatePoint, !0)
                        },
                        this.handlePointerUp = (e, i) => {
                            if (this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo))
                                return;
                            let {
                                onEnd: n,
                                onSessionEnd: r
                            } = this.handlers, s = iq("pointercancel" === e.type ? this.lastMoveEventInfo : iz(i, this.transformPagePoint), this.history);
                            this.startEvent && n && n(e, s),
                                r && r(e, s)
                        }, !tF(e))
                        return;
                    this.handlers = i,
                        this.transformPagePoint = n;
                    let r = tj(e),
                        s = iz(r, this.transformPagePoint),
                        {
                            point: o
                        } = s,
                        {
                            timestamp: a
                        } = t4.w;
                    this.history = [{
                        ...o,
                        timestamp: a
                    }];
                    let {
                        onSessionStart: l
                    } = i;
                    l && l(e, iq(s, this.history)),
                        this.removeListeners = tN(tI(window, "pointermove", this.handlePointerMove), tI(window, "pointerup", this.handlePointerUp), tI(window, "pointercancel", this.handlePointerUp))
                }
                updateHandlers(e) {
                    this.handlers = e
                }
                end() {
                    this.removeListeners && this.removeListeners(),
                        t9.qY.update(this.updatePoint)
                }
            }

            function iz(e, i) {
                return i ? {
                    point: i(e.point)
                } : e
            }

            function iZ(e, i) {
                return {
                    x: e.x - i.x,
                    y: e.y - i.y
                }
            }

            function iq({
                point: e
            }, i) {
                return {
                    point: e,
                    delta: iZ(e, iX(i)),
                    offset: iZ(e, i[0]),
                    velocity: function(e, i) {
                        if (e.length < 2)
                            return {
                                x: 0,
                                y: 0
                            };
                        let n = e.length - 1,
                            r = null,
                            s = iX(e);
                        for (; n >= 0 && (r = e[n], !(s.timestamp - r.timestamp > ej(.1)));)
                            n--;
                        if (!r)
                            return {
                                x: 0,
                                y: 0
                            };
                        let o = (s.timestamp - r.timestamp) / 1e3;
                        if (0 === o)
                            return {
                                x: 0,
                                y: 0
                            };
                        let a = {
                            x: (s.x - r.x) / o,
                            y: (s.y - r.y) / o
                        };
                        return a.x === 1 / 0 && (a.x = 0),
                            a.y === 1 / 0 && (a.y = 0),
                            a
                    }(i, 0)
                }
            }

            function iX(e) {
                return e[e.length - 1]
            }

            function iG(e) {
                return e.max - e.min
            }

            function iK(e, i = 0, n = .01) {
                return Math.abs(e - i) <= n
            }

            function iJ(e, i, n, r = .5) {
                e.origin = r,
                    e.originPoint = e_(i.min, i.max, e.origin),
                    e.scale = iG(n) / iG(i),
                    (iK(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
                    e.translate = e_(n.min, n.max, e.origin) - e.originPoint,
                    (iK(e.translate) || isNaN(e.translate)) && (e.translate = 0)
            }

            function iQ(e, i, n, r) {
                iJ(e.x, i.x, n.x, r ? r.originX : void 0),
                    iJ(e.y, i.y, n.y, r ? r.originY : void 0)
            }

            function i0(e, i, n) {
                e.min = n.min + i.min,
                    e.max = e.min + iG(i)
            }

            function i1(e, i, n) {
                e.min = i.min - n.min,
                    e.max = e.min + iG(i)
            }

            function i5(e, i, n) {
                i1(e.x, i.x, n.x),
                    i1(e.y, i.y, n.y)
            }

            function i3(e, i, n) {
                return {
                    min: void 0 !== i ? e.min + i : void 0,
                    max: void 0 !== n ? e.max + n - (e.max - e.min) : void 0
                }
            }

            function i2(e, i) {
                let n = i.min - e.min,
                    r = i.max - e.max;
                return i.max - i.min < e.max - e.min && ([n, r] = [r, n]), {
                    min: n,
                    max: r
                }
            }

            function i4(e, i, n) {
                return {
                    min: i9(e, i),
                    max: i9(e, n)
                }
            }

            function i9(e, i) {
                return "number" == typeof e ? e : e[i] || 0
            }
            let i6 = () => ({
                    translate: 0,
                    scale: 1,
                    origin: 0,
                    originPoint: 0
                }),
                i8 = () => ({
                    x: i6(),
                    y: i6()
                }),
                i7 = () => ({
                    min: 0,
                    max: 0
                }),
                nt = () => ({
                    x: i7(),
                    y: i7()
                });

            function ne(e) {
                return [e("x"), e("y")]
            }

            function ni({
                top: e,
                left: i,
                right: n,
                bottom: r
            }) {
                return {
                    x: {
                        min: i,
                        max: n
                    },
                    y: {
                        min: e,
                        max: r
                    }
                }
            }

            function nn(e) {
                return void 0 === e || 1 === e
            }

            function nr({
                scale: e,
                scaleX: i,
                scaleY: n
            }) {
                return !nn(e) || !nn(i) || !nn(n)
            }

            function ns(e) {
                return nr(e) || no(e) || e.z || e.rotate || e.rotateX || e.rotateY
            }

            function no(e) {
                var i, n;
                return (i = e.x) && "0%" !== i || (n = e.y) && "0%" !== n
            }

            function na(e, i, n, r, s) {
                return void 0 !== s && (e = r + s * (e - r)),
                    r + n * (e - r) + i
            }

            function nl(e, i = 0, n = 1, r, s) {
                e.min = na(e.min, i, n, r, s),
                    e.max = na(e.max, i, n, r, s)
            }

            function nu(e, {
                x: i,
                y: n
            }) {
                nl(e.x, i.translate, i.scale, i.originPoint),
                    nl(e.y, n.translate, n.scale, n.originPoint)
            }

            function nh(e) {
                return Number.isInteger(e) ? e : e > 1.0000000000001 || e < .999999999999 ? e : 1
            }

            function nc(e, i) {
                e.min = e.min + i,
                    e.max = e.max + i
            }

            function nd(e, i, [n, r, s]) {
                let o = void 0 !== i[s] ? i[s] : .5,
                    a = e_(e.min, e.max, o);
                nl(e, i[n], i[r], a, i.scale)
            }
            let np = ["x", "scaleX", "originX"],
                nm = ["y", "scaleY", "originY"];

            function nf(e, i) {
                nd(e.x, i, np),
                    nd(e.y, i, nm)
            }

            function ng(e, i) {
                return ni(function(e, i) {
                    if (!i)
                        return e;
                    let n = i({
                            x: e.left,
                            y: e.top
                        }),
                        r = i({
                            x: e.right,
                            y: e.bottom
                        });
                    return {
                        top: n.y,
                        left: n.x,
                        bottom: r.y,
                        right: r.x
                    }
                }(e.getBoundingClientRect(), i))
            }
            let ny = new WeakMap;
            class nv {
                constructor(e) {
                    this.openGlobalLock = null,
                        this.isDragging = !1,
                        this.currentDirection = null,
                        this.originPoint = {
                            x: 0,
                            y: 0
                        },
                        this.constraints = !1,
                        this.hasMutatedConstraints = !1,
                        this.elastic = nt(),
                        this.visualElement = e
                }
                start(e, {
                    snapToCursor: i = !1
                } = {}) {
                    let {
                        presenceContext: n
                    } = this.visualElement;
                    if (n && !1 === n.isPresent)
                        return;
                    let r = e => {
                            this.stopAnimation(),
                                i && this.snapToCursor(tj(e, "page").point)
                        },
                        s = (e, i) => {
                            let {
                                drag: n,
                                dragPropagation: r,
                                onDragStart: s
                            } = this.getProps();
                            if (n && !r && (this.openGlobalLock && this.openGlobalLock(),
                                    this.openGlobalLock = tH(n), !this.openGlobalLock))
                                return;
                            this.isDragging = !0,
                                this.currentDirection = null,
                                this.resolveConstraints(),
                                this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0,
                                    this.visualElement.projection.target = void 0),
                                ne(e => {
                                    let i = this.getAxisMotionValue(e).get() || 0;
                                    if (Q.test(i)) {
                                        let {
                                            projection: n
                                        } = this.visualElement;
                                        if (n && n.layout) {
                                            let r = n.layout.layoutBox[e];
                                            if (r) {
                                                let e = iG(r);
                                                i = e * (parseFloat(i) / 100)
                                            }
                                        }
                                    }
                                    this.originPoint[e] = i
                                }),
                                s && s(e, i);
                            let {
                                animationState: o
                            } = this.visualElement;
                            o && o.setActive(a.Drag, !0)
                        },
                        o = (e, i) => {
                            let {
                                dragPropagation: n,
                                dragDirectionLock: r,
                                onDirectionLock: s,
                                onDrag: o
                            } = this.getProps();
                            if (!n && !this.openGlobalLock)
                                return;
                            let {
                                offset: a
                            } = i;
                            if (r && null === this.currentDirection) {
                                this.currentDirection = function(e, i = 10) {
                                        let n = null;
                                        return Math.abs(e.y) > i ? n = "y" : Math.abs(e.x) > i && (n = "x"),
                                            n
                                    }(a),
                                    null !== this.currentDirection && s && s(this.currentDirection);
                                return
                            }
                            this.updateAxis("x", i.point, a),
                                this.updateAxis("y", i.point, a),
                                this.visualElement.render(),
                                o && o(e, i)
                        },
                        l = (e, i) => this.stop(e, i);
                    this.panSession = new iY(e, {
                        onSessionStart: r,
                        onStart: s,
                        onMove: o,
                        onSessionEnd: l
                    }, {
                        transformPagePoint: this.visualElement.getTransformPagePoint()
                    })
                }
                stop(e, i) {
                    let n = this.isDragging;
                    if (this.cancel(), !n)
                        return;
                    let {
                        velocity: r
                    } = i;
                    this.startAnimation(r);
                    let {
                        onDragEnd: s
                    } = this.getProps();
                    s && s(e, i)
                }
                cancel() {
                    this.isDragging = !1;
                    let {
                        projection: e,
                        animationState: i
                    } = this.visualElement;
                    e && (e.isAnimationBlocked = !1),
                        this.panSession && this.panSession.end(),
                        this.panSession = void 0;
                    let {
                        dragPropagation: n
                    } = this.getProps();
                    !n && this.openGlobalLock && (this.openGlobalLock(),
                            this.openGlobalLock = null),
                        i && i.setActive(a.Drag, !1)
                }
                updateAxis(e, i, n) {
                    let {
                        drag: r
                    } = this.getProps();
                    if (!n || !nx(e, r, this.currentDirection))
                        return;
                    let s = this.getAxisMotionValue(e),
                        o = this.originPoint[e] + n[e];
                    this.constraints && this.constraints[e] && (o = function(e, {
                            min: i,
                            max: n
                        }, r) {
                            return void 0 !== i && e < i ? e = r ? e_(i, e, r.min) : Math.max(e, i) : void 0 !== n && e > n && (e = r ? e_(n, e, r.max) : Math.min(e, n)),
                                e
                        }(o, this.constraints[e], this.elastic[e])),
                        s.set(o)
                }
                resolveConstraints() {
                    let {
                        dragConstraints: e,
                        dragElastic: i
                    } = this.getProps(), {
                        layout: n
                    } = this.visualElement.projection || {}, r = this.constraints;
                    e && f(e) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : e && n ? this.constraints = function(e, {
                            top: i,
                            left: n,
                            bottom: r,
                            right: s
                        }) {
                            return {
                                x: i3(e.x, n, s),
                                y: i3(e.y, i, r)
                            }
                        }(n.layoutBox, e) : this.constraints = !1,
                        this.elastic = function(e = .35) {
                            return !1 === e ? e = 0 : !0 === e && (e = .35), {
                                x: i4(e, "left", "right"),
                                y: i4(e, "top", "bottom")
                            }
                        }(i),
                        r !== this.constraints && n && this.constraints && !this.hasMutatedConstraints && ne(e => {
                            this.getAxisMotionValue(e) && (this.constraints[e] = function(e, i) {
                                let n = {};
                                return void 0 !== i.min && (n.min = i.min - e.min),
                                    void 0 !== i.max && (n.max = i.max - e.min),
                                    n
                            }(n.layoutBox[e], this.constraints[e]))
                        })
                }
                resolveRefConstraints() {
                    var e;
                    let {
                        dragConstraints: i,
                        onMeasureDragConstraints: n
                    } = this.getProps();
                    if (!i || !f(i))
                        return !1;
                    let r = i.current;
                    eF(null !== r, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
                    let {
                        projection: s
                    } = this.visualElement;
                    if (!s || !s.layout)
                        return !1;
                    let o = function(e, i, n) {
                            let r = ng(e, n),
                                {
                                    scroll: s
                                } = i;
                            return s && (nc(r.x, s.offset.x),
                                    nc(r.y, s.offset.y)),
                                r
                        }(r, s.root, this.visualElement.getTransformPagePoint()),
                        a = {
                            x: i2((e = s.layout.layoutBox).x, o.x),
                            y: i2(e.y, o.y)
                        };
                    if (n) {
                        let e = n(function({
                            x: e,
                            y: i
                        }) {
                            return {
                                top: i.min,
                                right: e.max,
                                bottom: i.max,
                                left: e.min
                            }
                        }(a));
                        this.hasMutatedConstraints = !!e,
                            e && (a = ni(e))
                    }
                    return a
                }
                startAnimation(e) {
                    let {
                        drag: i,
                        dragMomentum: n,
                        dragElastic: r,
                        dragTransition: s,
                        dragSnapToOrigin: o,
                        onDragTransitionEnd: a
                    } = this.getProps(), l = this.constraints || {}, u = ne(a => {
                        if (!nx(a, i, this.currentDirection))
                            return;
                        let u = l && l[a] || {};
                        o && (u = {
                            min: 0,
                            max: 0
                        });
                        let h = {
                            type: "inertia",
                            velocity: n ? e[a] : 0,
                            bounceStiffness: r ? 200 : 1e6,
                            bounceDamping: r ? 40 : 1e7,
                            timeConstant: 750,
                            restDelta: 1,
                            restSpeed: 10,
                            ...s,
                            ...u
                        };
                        return this.startAxisValueAnimation(a, h)
                    });
                    return Promise.all(u).then(a)
                }
                startAxisValueAnimation(e, i) {
                    let n = this.getAxisMotionValue(e);
                    return n.start(iF(e, n, 0, i))
                }
                stopAnimation() {
                    ne(e => this.getAxisMotionValue(e).stop())
                }
                getAxisMotionValue(e) {
                    let i = "_drag" + e.toUpperCase(),
                        n = this.visualElement.getProps(),
                        r = n[i];
                    return r || this.visualElement.getValue(e, (n.initial ? n.initial[e] : void 0) || 0)
                }
                snapToCursor(e) {
                    ne(i => {
                        let {
                            drag: n
                        } = this.getProps();
                        if (!nx(i, n, this.currentDirection))
                            return;
                        let {
                            projection: r
                        } = this.visualElement, s = this.getAxisMotionValue(i);
                        if (r && r.layout) {
                            let {
                                min: n,
                                max: o
                            } = r.layout.layoutBox[i];
                            s.set(e[i] - e_(n, o, .5))
                        }
                    })
                }
                scalePositionWithinConstraints() {
                    if (!this.visualElement.current)
                        return;
                    let {
                        drag: e,
                        dragConstraints: i
                    } = this.getProps(), {
                        projection: n
                    } = this.visualElement;
                    if (!f(i) || !n || !this.constraints)
                        return;
                    this.stopAnimation();
                    let r = {
                        x: 0,
                        y: 0
                    };
                    ne(e => {
                        let i = this.getAxisMotionValue(e);
                        if (i) {
                            let n = i.get();
                            r[e] = function(e, i) {
                                let n = .5,
                                    r = iG(e),
                                    s = iG(i);
                                return s > r ? n = e0(i.min, i.max - r, e.min) : r > s && (n = e0(e.min, e.max - s, i.min)),
                                    W(0, 1, n)
                            }({
                                min: n,
                                max: n
                            }, this.constraints[e])
                        }
                    });
                    let {
                        transformTemplate: s
                    } = this.visualElement.getProps();
                    this.visualElement.current.style.transform = s ? s({}, "") : "none",
                        n.root && n.root.updateScroll(),
                        n.updateLayout(),
                        this.resolveConstraints(),
                        ne(i => {
                            if (!nx(i, e, null))
                                return;
                            let n = this.getAxisMotionValue(i),
                                {
                                    min: s,
                                    max: o
                                } = this.constraints[i];
                            n.set(e_(s, o, r[i]))
                        })
                }
                addListeners() {
                    if (!this.visualElement.current)
                        return;
                    ny.set(this.visualElement, this);
                    let e = this.visualElement.current,
                        i = tI(e, "pointerdown", e => {
                            let {
                                drag: i,
                                dragListener: n = !0
                            } = this.getProps();
                            i && n && this.start(e)
                        }),
                        n = () => {
                            let {
                                dragConstraints: e
                            } = this.getProps();
                            f(e) && (this.constraints = this.resolveRefConstraints())
                        },
                        {
                            projection: r
                        } = this.visualElement,
                        s = r.addEventListener("measure", n);
                    r && !r.layout && (r.root && r.root.updateScroll(),
                            r.updateLayout()),
                        n();
                    let o = tD(window, "resize", () => this.scalePositionWithinConstraints()),
                        a = r.addEventListener("didUpdate", ({
                            delta: e,
                            hasLayoutChanged: i
                        }) => {
                            this.isDragging && i && (ne(i => {
                                    let n = this.getAxisMotionValue(i);
                                    n && (this.originPoint[i] += e[i].translate,
                                        n.set(n.get() + e[i].translate))
                                }),
                                this.visualElement.render())
                        });
                    return () => {
                        o(),
                            i(),
                            s(),
                            a && a()
                    }
                }
                getProps() {
                    let e = this.visualElement.getProps(),
                        {
                            drag: i = !1,
                            dragDirectionLock: n = !1,
                            dragPropagation: r = !1,
                            dragConstraints: s = !1,
                            dragElastic: o = .35,
                            dragMomentum: a = !0
                        } = e;
                    return {
                        ...e,
                        drag: i,
                        dragDirectionLock: n,
                        dragPropagation: r,
                        dragConstraints: s,
                        dragElastic: o,
                        dragMomentum: a
                    }
                }
            }

            function nx(e, i, n) {
                return (!0 === i || i === e) && (null === n || n === e)
            }

            function nb(e, i) {
                return i.max === i.min ? 0 : e / (i.max - i.min) * 100
            }
            let nP = {
                correct: (e, i) => {
                    if (!i.target)
                        return e;
                    if ("string" == typeof e) {
                        if (!tt.test(e))
                            return e;
                        e = parseFloat(e)
                    }
                    let n = nb(e, i.target.x),
                        r = nb(e, i.target.y);
                    return `${n}% ${r}%`
                }
            };

            function nw(e) {
                return "string" == typeof e && e.startsWith("var(--")
            }
            let nA = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;

            function nT(e, i, n = 1) {
                eF(n <= 4, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);
                let [r, s] = function(e) {
                    let i = nA.exec(e);
                    if (!i)
                        return [, ];
                    let [, n, r] = i;
                    return [n, r]
                }(e);
                if (!r)
                    return;
                let o = window.getComputedStyle(i).getPropertyValue(r);
                return o ? o.trim() : nw(s) ? nT(s, i, n + 1) : s
            }
            let nV = "_$css",
                nE = {
                    correct: (e, {
                        treeScale: i,
                        projectionDelta: n
                    }) => {
                        let r = e,
                            s = e.includes("var("),
                            o = [];
                        s && (e = e.replace(nA, e => (o.push(e),
                            nV)));
                        let a = ev.parse(e);
                        if (a.length > 5)
                            return r;
                        let l = ev.createTransformer(e),
                            u = "number" != typeof a[0] ? 1 : 0,
                            h = n.x.scale * i.x,
                            c = n.y.scale * i.y;
                        a[0 + u] /= h,
                            a[1 + u] /= c;
                        let d = e_(h, c, .5);
                        "number" == typeof a[2 + u] && (a[2 + u] /= d),
                            "number" == typeof a[3 + u] && (a[3 + u] /= d);
                        let p = l(a);
                        if (s) {
                            let e = 0;
                            p = p.replace(nV, () => {
                                let i = o[e];
                                return e++,
                                    i
                            })
                        }
                        return p
                    }
                };
            class nS extends u.Component {
                componentDidMount() {
                    let {
                        visualElement: e,
                        layoutGroup: i,
                        switchLayoutGroup: n,
                        layoutId: r
                    } = this.props, {
                        projection: s
                    } = e;
                    Object.assign(B, nM),
                        s && (i.group && i.group.add(s),
                            n && n.register && r && n.register(s),
                            s.root.didUpdate(),
                            s.addEventListener("animationComplete", () => {
                                this.safeToRemove()
                            }),
                            s.setOptions({
                                ...s.options,
                                onExitComplete: () => this.safeToRemove()
                            })),
                        E.hasEverUpdated = !0
                }
                getSnapshotBeforeUpdate(e) {
                    let {
                        layoutDependency: i,
                        visualElement: n,
                        drag: r,
                        isPresent: s
                    } = this.props, o = n.projection;
                    return o && (o.isPresent = s,
                            r || e.layoutDependency !== i || void 0 === i ? o.willUpdate() : this.safeToRemove(),
                            e.isPresent === s || (s ? o.promote() : o.relegate() || t9.Z_.postRender(() => {
                                let e = o.getStack();
                                e && e.members.length || this.safeToRemove()
                            }))),
                        null
                }
                componentDidUpdate() {
                    let {
                        projection: e
                    } = this.props.visualElement;
                    e && (e.root.didUpdate(), !e.currentAnimation && e.isLead() && this.safeToRemove())
                }
                componentWillUnmount() {
                    let {
                        visualElement: e,
                        layoutGroup: i,
                        switchLayoutGroup: n
                    } = this.props, {
                        projection: r
                    } = e;
                    r && (r.scheduleCheckAfterUnmount(),
                        i && i.group && i.group.remove(r),
                        n && n.deregister && n.deregister(r))
                }
                safeToRemove() {
                    let {
                        safeToRemove: e
                    } = this.props;
                    e && e()
                }
                render() {
                    return null
                }
            }

            function nC(e) {
                let [i, n] = function() {
                    let e = (0,
                        u.useContext)(d.O);
                    if (null === e)
                        return [!0, null];
                    let {
                        isPresent: i,
                        onExitComplete: n,
                        register: r
                    } = e, s = (0,
                        u.useId)();
                    (0,
                        u.useEffect)(() => r(s), []);
                    let o = () => n && n(s);
                    return !i && n ? [!1, o] : [!0]
                }(), r = (0,
                    u.useContext)(C.p);
                return u.createElement(nS, {
                    ...e,
                    layoutGroup: r,
                    switchLayoutGroup: (0,
                        u.useContext)(M),
                    isPresent: i,
                    safeToRemove: n
                })
            }
            let nM = {
                    borderRadius: {
                        ...nP,
                        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
                    },
                    borderTopLeftRadius: nP,
                    borderTopRightRadius: nP,
                    borderBottomLeftRadius: nP,
                    borderBottomRightRadius: nP,
                    boxShadow: nE
                },
                nk = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
                nL = nk.length,
                nR = e => "string" == typeof e ? parseFloat(e) : e,
                nB = e => "number" == typeof e || tt.test(e);

            function nD(e, i) {
                return void 0 !== e[i] ? e[i] : e.borderRadius
            }
            let nF = nO(0, .5, e9),
                nj = nO(.5, .95, tX);

            function nO(e, i, n) {
                return r => r < e ? 0 : r > i ? 1 : n(e0(e, i, r))
            }

            function nI(e, i) {
                e.min = i.min,
                    e.max = i.max
            }

            function nU(e, i) {
                nI(e.x, i.x),
                    nI(e.y, i.y)
            }

            function nN(e, i, n, r, s) {
                return e -= i,
                    e = r + 1 / n * (e - r),
                    void 0 !== s && (e = r + 1 / s * (e - r)),
                    e
            }

            function n$(e, i, [n, r, s], o, a) {
                ! function(e, i = 0, n = 1, r = .5, s, o = e, a = e) {
                    if (Q.test(i)) {
                        i = parseFloat(i);
                        let e = e_(a.min, a.max, i / 100);
                        i = e - a.min
                    }
                    if ("number" != typeof i)
                        return;
                    let l = e_(o.min, o.max, r);
                    e === o && (l -= i),
                        e.min = nN(e.min, i, n, l, s),
                        e.max = nN(e.max, i, n, l, s)
                }(e, i[n], i[r], i[s], i.scale, o, a)
            }
            let nW = ["x", "scaleX", "originX"],
                n_ = ["y", "scaleY", "originY"];

            function nH(e, i, n, r) {
                n$(e.x, i, nW, n ? n.x : void 0, r ? r.x : void 0),
                    n$(e.y, i, n_, n ? n.y : void 0, r ? r.y : void 0)
            }

            function nY(e) {
                return 0 === e.translate && 1 === e.scale
            }

            function nz(e) {
                return nY(e.x) && nY(e.y)
            }

            function nZ(e, i) {
                return e.x.min === i.x.min && e.x.max === i.x.max && e.y.min === i.y.min && e.y.max === i.y.max
            }

            function nq(e) {
                return iG(e.x) / iG(e.y)
            }
            class nX {
                constructor() {
                    this.members = []
                }
                add(e) {
                    t6(this.members, e),
                        e.scheduleRender()
                }
                remove(e) {
                    if (t8(this.members, e),
                        e === this.prevLead && (this.prevLead = void 0),
                        e === this.lead) {
                        let e = this.members[this.members.length - 1];
                        e && this.promote(e)
                    }
                }
                relegate(e) {
                    let i;
                    let n = this.members.findIndex(i => e === i);
                    if (0 === n)
                        return !1;
                    for (let e = n; e >= 0; e--) {
                        let n = this.members[e];
                        if (!1 !== n.isPresent) {
                            i = n;
                            break
                        }
                    }
                    return !!i && (this.promote(i), !0)
                }
                promote(e, i) {
                    let n = this.lead;
                    if (e !== n && (this.prevLead = n,
                            this.lead = e,
                            e.show(),
                            n)) {
                        n.instance && n.scheduleRender(),
                            e.scheduleRender(),
                            e.resumeFrom = n,
                            i && (e.resumeFrom.preserveOpacity = !0),
                            n.snapshot && (e.snapshot = n.snapshot,
                                e.snapshot.latestValues = n.animationValues || n.latestValues),
                            e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
                        let {
                            crossfade: r
                        } = e.options;
                        !1 === r && n.hide()
                    }
                }
                exitAnimationComplete() {
                    this.members.forEach(e => {
                        let {
                            options: i,
                            resumingFrom: n
                        } = e;
                        i.onExitComplete && i.onExitComplete(),
                            n && n.options.onExitComplete && n.options.onExitComplete()
                    })
                }
                scheduleRender() {
                    this.members.forEach(e => {
                        e.instance && e.scheduleRender(!1)
                    })
                }
                removeLeadSnapshot() {
                    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
                }
            }

            function nG(e, i, n) {
                let r = "",
                    s = e.x.translate / i.x,
                    o = e.y.translate / i.y;
                if ((s || o) && (r = `translate3d(${s}px, ${o}px, 0) `),
                    (1 !== i.x || 1 !== i.y) && (r += `scale(${1 / i.x}, ${1 / i.y}) `),
                    n) {
                    let {
                        rotate: e,
                        rotateX: i,
                        rotateY: s
                    } = n;
                    e && (r += `rotate(${e}deg) `),
                        i && (r += `rotateX(${i}deg) `),
                        s && (r += `rotateY(${s}deg) `)
                }
                let a = e.x.scale * i.x,
                    l = e.y.scale * i.y;
                return (1 !== a || 1 !== l) && (r += `scale(${a}, ${l})`),
                    r || "none"
            }
            let nK = (e, i) => e.depth - i.depth;
            class nJ {
                constructor() {
                    this.children = [],
                        this.isDirty = !1
                }
                add(e) {
                    t6(this.children, e),
                        this.isDirty = !0
                }
                remove(e) {
                    t8(this.children, e),
                        this.isDirty = !0
                }
                forEach(e) {
                    this.isDirty && this.children.sort(nK),
                        this.isDirty = !1,
                        this.children.forEach(e)
                }
            }
            let nQ = ["", "X", "Y", "Z"],
                n0 = 0;

            function n1({
                attachResizeListener: e,
                defaultParent: i,
                measureScroll: n,
                checkIsScrollRoot: r,
                resetTransform: s
            }) {
                return class {
                    constructor(e, n = {}, r = null == i ? void 0 : i()) {
                        this.id = n0++,
                            this.animationId = 0,
                            this.children = new Set,
                            this.options = {},
                            this.isTreeAnimating = !1,
                            this.isAnimationBlocked = !1,
                            this.isLayoutDirty = !1,
                            this.isTransformDirty = !1,
                            this.isProjectionDirty = !1,
                            this.updateManuallyBlocked = !1,
                            this.updateBlockedByResize = !1,
                            this.isUpdating = !1,
                            this.isSVG = !1,
                            this.needsReset = !1,
                            this.shouldResetTransform = !1,
                            this.treeScale = {
                                x: 1,
                                y: 1
                            },
                            this.eventHandlers = new Map,
                            this.potentialNodes = new Map,
                            this.checkUpdateFailed = () => {
                                this.isUpdating && (this.isUpdating = !1,
                                    this.clearAllSnapshots())
                            },
                            this.updateProjection = () => {
                                this.nodes.forEach(n2),
                                    this.nodes.forEach(n7),
                                    this.nodes.forEach(rt)
                            },
                            this.hasProjected = !1,
                            this.isVisible = !0,
                            this.animationProgress = 0,
                            this.sharedNodes = new Map,
                            this.elementId = e,
                            this.latestValues = n,
                            this.root = r ? r.root || r : this,
                            this.path = r ? [...r.path, r] : [],
                            this.parent = r,
                            this.depth = r ? r.depth + 1 : 0,
                            e && this.root.registerPotentialNode(e, this);
                        for (let e = 0; e < this.path.length; e++)
                            this.path[e].shouldResetTransform = !0;
                        this.root === this && (this.nodes = new nJ)
                    }
                    addEventListener(e, i) {
                        return this.eventHandlers.has(e) || this.eventHandlers.set(e, new t7),
                            this.eventHandlers.get(e).add(i)
                    }
                    notifyListeners(e, ...i) {
                        let n = this.eventHandlers.get(e);
                        n && n.notify(...i)
                    }
                    hasListeners(e) {
                        return this.eventHandlers.has(e)
                    }
                    registerPotentialNode(e, i) {
                        this.potentialNodes.set(e, i)
                    }
                    mount(i, n = !1) {
                        if (this.instance)
                            return;
                        this.isSVG = i instanceof SVGElement && "svg" !== i.tagName,
                            this.instance = i;
                        let {
                            layoutId: r,
                            layout: s,
                            visualElement: o
                        } = this.options;
                        if (o && !o.current && o.mount(i),
                            this.root.nodes.add(this),
                            this.parent && this.parent.children.add(this),
                            this.elementId && this.root.potentialNodes.delete(this.elementId),
                            n && (s || r) && (this.isLayoutDirty = !0),
                            e) {
                            let n;
                            let r = () => this.root.updateBlockedByResize = !1;
                            e(i, () => {
                                this.root.updateBlockedByResize = !0,
                                    n && n(),
                                    n = iT(r, 250),
                                    E.hasAnimatedSinceResize && (E.hasAnimatedSinceResize = !1,
                                        this.nodes.forEach(n8))
                            })
                        }
                        r && this.root.registerSharedNode(r, this), !1 !== this.options.animate && o && (r || s) && this.addEventListener("didUpdate", ({
                            delta: e,
                            hasLayoutChanged: i,
                            hasRelativeTargetChanged: n,
                            layout: r
                        }) => {
                            if (this.isTreeAnimationBlocked()) {
                                this.target = void 0,
                                    this.relativeTarget = void 0;
                                return
                            }
                            let s = this.options.transition || o.getDefaultTransition() || ro,
                                {
                                    onLayoutAnimationStart: a,
                                    onLayoutAnimationComplete: l
                                } = o.getProps(),
                                u = !this.targetLayout || !nZ(this.targetLayout, r) || n,
                                h = !i && n;
                            if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || h || i && (u || !this.currentAnimation)) {
                                this.resumeFrom && (this.resumingFrom = this.resumeFrom,
                                        this.resumingFrom.resumingFrom = void 0),
                                    this.setAnimationOrigin(e, h);
                                let i = {
                                    ...iD(s, "layout"),
                                    onPlay: a,
                                    onComplete: l
                                };
                                (o.shouldReduceMotion || this.options.layoutRoot) && (i.delay = 0,
                                    i.type = !1),
                                this.startAnimation(i)
                            } else
                                i || 0 !== this.animationProgress || n8(this),
                                this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                            this.targetLayout = r
                        })
                    }
                    unmount() {
                        this.options.layoutId && this.willUpdate(),
                            this.root.nodes.remove(this);
                        let e = this.getStack();
                        e && e.remove(this),
                            this.parent && this.parent.children.delete(this),
                            this.instance = void 0,
                            t9.qY.preRender(this.updateProjection)
                    }
                    blockUpdate() {
                        this.updateManuallyBlocked = !0
                    }
                    unblockUpdate() {
                        this.updateManuallyBlocked = !1
                    }
                    isUpdateBlocked() {
                        return this.updateManuallyBlocked || this.updateBlockedByResize
                    }
                    isTreeAnimationBlocked() {
                        return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
                    }
                    startUpdate() {
                        !this.isUpdateBlocked() && (this.isUpdating = !0,
                            this.nodes && this.nodes.forEach(re),
                            this.animationId++)
                    }
                    getTransformTemplate() {
                        let {
                            visualElement: e
                        } = this.options;
                        return e && e.getProps().transformTemplate
                    }
                    willUpdate(e = !0) {
                        if (this.root.isUpdateBlocked()) {
                            this.options.onExitComplete && this.options.onExitComplete();
                            return
                        }
                        if (this.root.isUpdating || this.root.startUpdate(),
                            this.isLayoutDirty)
                            return;
                        this.isLayoutDirty = !0;
                        for (let e = 0; e < this.path.length; e++) {
                            let i = this.path[e];
                            i.shouldResetTransform = !0,
                                i.updateScroll("snapshot"),
                                i.options.layoutRoot && i.willUpdate(!1)
                        }
                        let {
                            layoutId: i,
                            layout: n
                        } = this.options;
                        if (void 0 === i && !n)
                            return;
                        let r = this.getTransformTemplate();
                        this.prevTransformTemplateValue = r ? r(this.latestValues, "") : void 0,
                            this.updateSnapshot(),
                            e && this.notifyListeners("willUpdate")
                    }
                    didUpdate() {
                        let e = this.isUpdateBlocked();
                        if (e) {
                            this.unblockUpdate(),
                                this.clearAllSnapshots(),
                                this.nodes.forEach(n9);
                            return
                        }
                        this.isUpdating && (this.isUpdating = !1,
                            this.potentialNodes.size && (this.potentialNodes.forEach(ra),
                                this.potentialNodes.clear()),
                            this.nodes.forEach(n6),
                            this.nodes.forEach(n5),
                            this.nodes.forEach(n3),
                            this.clearAllSnapshots(),
                            t9.iW.update(),
                            t9.iW.preRender(),
                            t9.iW.render())
                    }
                    clearAllSnapshots() {
                        this.nodes.forEach(n4),
                            this.sharedNodes.forEach(ri)
                    }
                    scheduleUpdateProjection() {
                        t9.Z_.preRender(this.updateProjection, !1, !0)
                    }
                    scheduleCheckAfterUnmount() {
                        t9.Z_.postRender(() => {
                            this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
                        })
                    }
                    updateSnapshot() {
                        !this.snapshot && this.instance && (this.snapshot = this.measure())
                    }
                    updateLayout() {
                        if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
                            return;
                        if (this.resumeFrom && !this.resumeFrom.instance)
                            for (let e = 0; e < this.path.length; e++) {
                                let i = this.path[e];
                                i.updateScroll()
                            }
                        let e = this.layout;
                        this.layout = this.measure(!1),
                            this.layoutCorrected = nt(),
                            this.isLayoutDirty = !1,
                            this.projectionDelta = void 0,
                            this.notifyListeners("measure", this.layout.layoutBox);
                        let {
                            visualElement: i
                        } = this.options;
                        i && i.notify("LayoutMeasure", this.layout.layoutBox, e ? e.layoutBox : void 0)
                    }
                    updateScroll(e = "measure") {
                        let i = Boolean(this.options.layoutScroll && this.instance);
                        this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === e && (i = !1),
                            i && (this.scroll = {
                                animationId: this.root.animationId,
                                phase: e,
                                isRoot: r(this.instance),
                                offset: n(this.instance)
                            })
                    }
                    resetTransform() {
                        if (!s)
                            return;
                        let e = this.isLayoutDirty || this.shouldResetTransform,
                            i = this.projectionDelta && !nz(this.projectionDelta),
                            n = this.getTransformTemplate(),
                            r = n ? n(this.latestValues, "") : void 0,
                            o = r !== this.prevTransformTemplateValue;
                        e && (i || ns(this.latestValues) || o) && (s(this.instance, r),
                            this.shouldResetTransform = !1,
                            this.scheduleRender())
                    }
                    measure(e = !0) {
                        var i;
                        let n = this.measurePageBox(),
                            r = this.removeElementScroll(n);
                        return e && (r = this.removeTransform(r)),
                            rl((i = r).x),
                            rl(i.y), {
                                animationId: this.root.animationId,
                                measuredBox: n,
                                layoutBox: r,
                                latestValues: {},
                                source: this.id
                            }
                    }
                    measurePageBox() {
                        let {
                            visualElement: e
                        } = this.options;
                        if (!e)
                            return nt();
                        let i = e.measureViewportBox(),
                            {
                                scroll: n
                            } = this.root;
                        return n && (nc(i.x, n.offset.x),
                                nc(i.y, n.offset.y)),
                            i
                    }
                    removeElementScroll(e) {
                        let i = nt();
                        nU(i, e);
                        for (let n = 0; n < this.path.length; n++) {
                            let r = this.path[n],
                                {
                                    scroll: s,
                                    options: o
                                } = r;
                            if (r !== this.root && s && o.layoutScroll) {
                                if (s.isRoot) {
                                    nU(i, e);
                                    let {
                                        scroll: n
                                    } = this.root;
                                    n && (nc(i.x, -n.offset.x),
                                        nc(i.y, -n.offset.y))
                                }
                                nc(i.x, s.offset.x),
                                    nc(i.y, s.offset.y)
                            }
                        }
                        return i
                    }
                    applyTransform(e, i = !1) {
                        let n = nt();
                        nU(n, e);
                        for (let e = 0; e < this.path.length; e++) {
                            let r = this.path[e];
                            !i && r.options.layoutScroll && r.scroll && r !== r.root && nf(n, {
                                    x: -r.scroll.offset.x,
                                    y: -r.scroll.offset.y
                                }),
                                ns(r.latestValues) && nf(n, r.latestValues)
                        }
                        return ns(this.latestValues) && nf(n, this.latestValues),
                            n
                    }
                    removeTransform(e) {
                        let i = nt();
                        nU(i, e);
                        for (let e = 0; e < this.path.length; e++) {
                            let n = this.path[e];
                            if (!n.instance || !ns(n.latestValues))
                                continue;
                            nr(n.latestValues) && n.updateSnapshot();
                            let r = nt(),
                                s = n.measurePageBox();
                            nU(r, s),
                                nH(i, n.latestValues, n.snapshot ? n.snapshot.layoutBox : void 0, r)
                        }
                        return ns(this.latestValues) && nH(i, this.latestValues),
                            i
                    }
                    setTargetDelta(e) {
                        this.targetDelta = e,
                            this.isProjectionDirty = !0,
                            this.root.scheduleUpdateProjection()
                    }
                    setOptions(e) {
                        this.options = {
                            ...this.options,
                            ...e,
                            crossfade: void 0 === e.crossfade || e.crossfade
                        }
                    }
                    clearMeasurements() {
                        this.scroll = void 0,
                            this.layout = void 0,
                            this.snapshot = void 0,
                            this.prevTransformTemplateValue = void 0,
                            this.targetDelta = void 0,
                            this.target = void 0,
                            this.isLayoutDirty = !1
                    }
                    resolveTargetDelta() {
                        let e = this.getLead();
                        if (this.isProjectionDirty || (this.isProjectionDirty = e.isProjectionDirty),
                            this.isTransformDirty || (this.isTransformDirty = e.isTransformDirty), !this.isProjectionDirty && !this.attemptToResolveRelativeTarget)
                            return;
                        let {
                            layout: i,
                            layoutId: n
                        } = this.options;
                        if (this.layout && (i || n)) {
                            if (!this.targetDelta && !this.relativeTarget) {
                                let e = this.getClosestProjectingParent();
                                e && e.layout ? (this.relativeParent = e,
                                    this.relativeTarget = nt(),
                                    this.relativeTargetOrigin = nt(),
                                    i5(this.relativeTargetOrigin, this.layout.layoutBox, e.layout.layoutBox),
                                    nU(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                            }
                            if (this.relativeTarget || this.targetDelta) {
                                if (this.target || (this.target = nt(),
                                        this.targetWithTransforms = nt()),
                                    this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target) {
                                    var r, s, o;
                                    r = this.target,
                                        s = this.relativeTarget,
                                        o = this.relativeParent.target,
                                        i0(r.x, s.x, o.x),
                                        i0(r.y, s.y, o.y)
                                } else
                                    this.targetDelta ? (Boolean(this.resumingFrom) ? this.target = this.applyTransform(this.layout.layoutBox) : nU(this.target, this.layout.layoutBox),
                                        nu(this.target, this.targetDelta)) : nU(this.target, this.layout.layoutBox);
                                if (this.attemptToResolveRelativeTarget) {
                                    this.attemptToResolveRelativeTarget = !1;
                                    let e = this.getClosestProjectingParent();
                                    e && Boolean(e.resumingFrom) === Boolean(this.resumingFrom) && !e.options.layoutScroll && e.target ? (this.relativeParent = e,
                                        this.relativeTarget = nt(),
                                        this.relativeTargetOrigin = nt(),
                                        i5(this.relativeTargetOrigin, this.target, e.target),
                                        nU(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                                }
                            }
                        }
                    }
                    getClosestProjectingParent() {
                        return !this.parent || nr(this.parent.latestValues) || no(this.parent.latestValues) ? void 0 : (this.parent.relativeTarget || this.parent.targetDelta || this.parent.options.layoutRoot) && this.parent.layout ? this.parent : this.parent.getClosestProjectingParent()
                    }
                    calcProjection() {
                        let {
                            isProjectionDirty: e,
                            isTransformDirty: i
                        } = this;
                        this.isProjectionDirty = this.isTransformDirty = !1;
                        let n = this.getLead(),
                            r = Boolean(this.resumingFrom) || this !== n,
                            s = !0;
                        if (e && (s = !1),
                            r && i && (s = !1),
                            s)
                            return;
                        let {
                            layout: o,
                            layoutId: a
                        } = this.options;
                        if (this.isTreeAnimating = Boolean(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation),
                            this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(o || a))
                            return;
                        nU(this.layoutCorrected, this.layout.layoutBox),
                            function(e, i, n, r = !1) {
                                let s, o;
                                let a = n.length;
                                if (a) {
                                    i.x = i.y = 1;
                                    for (let l = 0; l < a; l++) {
                                        o = (s = n[l]).projectionDelta;
                                        let a = s.instance;
                                        (!a || !a.style || "contents" !== a.style.display) && (r && s.options.layoutScroll && s.scroll && s !== s.root && nf(e, {
                                                x: -s.scroll.offset.x,
                                                y: -s.scroll.offset.y
                                            }),
                                            o && (i.x *= o.x.scale,
                                                i.y *= o.y.scale,
                                                nu(e, o)),
                                            r && ns(s.latestValues) && nf(e, s.latestValues))
                                    }
                                    i.x = nh(i.x),
                                        i.y = nh(i.y)
                                }
                            }(this.layoutCorrected, this.treeScale, this.path, r);
                        let {
                            target: l
                        } = n;
                        if (!l)
                            return;
                        this.projectionDelta || (this.projectionDelta = i8(),
                            this.projectionDeltaWithTransform = i8());
                        let u = this.treeScale.x,
                            h = this.treeScale.y,
                            c = this.projectionTransform;
                        iQ(this.projectionDelta, this.layoutCorrected, l, this.latestValues),
                            this.projectionTransform = nG(this.projectionDelta, this.treeScale),
                            (this.projectionTransform !== c || this.treeScale.x !== u || this.treeScale.y !== h) && (this.hasProjected = !0,
                                this.scheduleRender(),
                                this.notifyListeners("projectionUpdate", l))
                    }
                    hide() {
                        this.isVisible = !1
                    }
                    show() {
                        this.isVisible = !0
                    }
                    scheduleRender(e = !0) {
                        if (this.options.scheduleRender && this.options.scheduleRender(),
                            e) {
                            let e = this.getStack();
                            e && e.scheduleRender()
                        }
                        this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
                    }
                    setAnimationOrigin(e, i = !1) {
                        let n = this.snapshot,
                            r = n ? n.latestValues : {},
                            s = {
                                ...this.latestValues
                            },
                            o = i8();
                        this.relativeParent && this.relativeParent.options.layoutRoot || (this.relativeTarget = this.relativeTargetOrigin = void 0),
                            this.attemptToResolveRelativeTarget = !i;
                        let a = nt(),
                            l = n ? n.source : void 0,
                            u = this.layout ? this.layout.source : void 0,
                            h = l !== u,
                            c = this.getStack(),
                            d = !c || c.members.length <= 1,
                            p = Boolean(h && !d && !0 === this.options.crossfade && !this.path.some(rs));
                        this.animationProgress = 0,
                            this.mixTargetDelta = i => {
                                var n, l;
                                let u = i / 1e3;
                                rn(o.x, e.x, u),
                                    rn(o.y, e.y, u),
                                    this.setTargetDelta(o),
                                    this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (i5(a, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
                                        n = this.relativeTarget,
                                        l = this.relativeTargetOrigin,
                                        rr(n.x, l.x, a.x, u),
                                        rr(n.y, l.y, a.y, u)),
                                    h && (this.animationValues = s,
                                        function(e, i, n, r, s, o) {
                                            s ? (e.opacity = e_(0, void 0 !== n.opacity ? n.opacity : 1, nF(r)),
                                                e.opacityExit = e_(void 0 !== i.opacity ? i.opacity : 1, 0, nj(r))) : o && (e.opacity = e_(void 0 !== i.opacity ? i.opacity : 1, void 0 !== n.opacity ? n.opacity : 1, r));
                                            for (let s = 0; s < nL; s++) {
                                                let o = `border${nk[s]}Radius`,
                                                    a = nD(i, o),
                                                    l = nD(n, o);
                                                if (void 0 === a && void 0 === l)
                                                    continue;
                                                a || (a = 0),
                                                    l || (l = 0);
                                                let u = 0 === a || 0 === l || nB(a) === nB(l);
                                                u ? (e[o] = Math.max(e_(nR(a), nR(l), r), 0),
                                                    (Q.test(l) || Q.test(a)) && (e[o] += "%")) : e[o] = l
                                            }
                                            (i.rotate || n.rotate) && (e.rotate = e_(i.rotate || 0, n.rotate || 0, r))
                                        }(s, r, this.latestValues, u, p, d)),
                                    this.root.scheduleUpdateProjection(),
                                    this.scheduleRender(),
                                    this.animationProgress = u
                            },
                            this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
                    }
                    startAnimation(e) {
                        this.notifyListeners("animationStart"),
                            this.currentAnimation && this.currentAnimation.stop(),
                            this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(),
                            this.pendingAnimation && (t9.qY.update(this.pendingAnimation),
                                this.pendingAnimation = void 0),
                            this.pendingAnimation = t9.Z_.update(() => {
                                E.hasAnimatedSinceResize = !0,
                                    this.currentAnimation = function(e, i, n = {}) {
                                        let r = O(e) ? e : en(e);
                                        return r.start(iF("", r, 1e3, n)), {
                                            stop: () => r.stop(),
                                            isAnimating: () => r.isAnimating()
                                        }
                                    }(0, 0, {
                                        ...e,
                                        onUpdate: i => {
                                            this.mixTargetDelta(i),
                                                e.onUpdate && e.onUpdate(i)
                                        },
                                        onComplete: () => {
                                            e.onComplete && e.onComplete(),
                                                this.completeAnimation()
                                        }
                                    }),
                                    this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                                    this.pendingAnimation = void 0
                            })
                    }
                    completeAnimation() {
                        this.resumingFrom && (this.resumingFrom.currentAnimation = void 0,
                            this.resumingFrom.preserveOpacity = void 0);
                        let e = this.getStack();
                        e && e.exitAnimationComplete(),
                            this.resumingFrom = this.currentAnimation = this.animationValues = void 0,
                            this.notifyListeners("animationComplete")
                    }
                    finishAnimation() {
                        this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(1e3),
                                this.currentAnimation.stop()),
                            this.completeAnimation()
                    }
                    applyTransformsToTarget() {
                        let e = this.getLead(),
                            {
                                targetWithTransforms: i,
                                target: n,
                                layout: r,
                                latestValues: s
                            } = e;
                        if (i && n && r) {
                            if (this !== e && this.layout && r && ru(this.options.animationType, this.layout.layoutBox, r.layoutBox)) {
                                n = this.target || nt();
                                let i = iG(this.layout.layoutBox.x);
                                n.x.min = e.target.x.min,
                                    n.x.max = n.x.min + i;
                                let r = iG(this.layout.layoutBox.y);
                                n.y.min = e.target.y.min,
                                    n.y.max = n.y.min + r
                            }
                            nU(i, n),
                                nf(i, s),
                                iQ(this.projectionDeltaWithTransform, this.layoutCorrected, i, s)
                        }
                    }
                    registerSharedNode(e, i) {
                        this.sharedNodes.has(e) || this.sharedNodes.set(e, new nX);
                        let n = this.sharedNodes.get(e);
                        n.add(i);
                        let r = i.options.initialPromotionConfig;
                        i.promote({
                            transition: r ? r.transition : void 0,
                            preserveFollowOpacity: r && r.shouldPreserveFollowOpacity ? r.shouldPreserveFollowOpacity(i) : void 0
                        })
                    }
                    isLead() {
                        let e = this.getStack();
                        return !e || e.lead === this
                    }
                    getLead() {
                        var e;
                        let {
                            layoutId: i
                        } = this.options;
                        return i && (null === (e = this.getStack()) || void 0 === e ? void 0 : e.lead) || this
                    }
                    getPrevLead() {
                        var e;
                        let {
                            layoutId: i
                        } = this.options;
                        return i ? null === (e = this.getStack()) || void 0 === e ? void 0 : e.prevLead : void 0
                    }
                    getStack() {
                        let {
                            layoutId: e
                        } = this.options;
                        if (e)
                            return this.root.sharedNodes.get(e)
                    }
                    promote({
                        needsReset: e,
                        transition: i,
                        preserveFollowOpacity: n
                    } = {}) {
                        let r = this.getStack();
                        r && r.promote(this, n),
                            e && (this.projectionDelta = void 0,
                                this.needsReset = !0),
                            i && this.setOptions({
                                transition: i
                            })
                    }
                    relegate() {
                        let e = this.getStack();
                        return !!e && e.relegate(this)
                    }
                    resetRotation() {
                        let {
                            visualElement: e
                        } = this.options;
                        if (!e)
                            return;
                        let i = !1,
                            {
                                latestValues: n
                            } = e;
                        if ((n.rotate || n.rotateX || n.rotateY || n.rotateZ) && (i = !0), !i)
                            return;
                        let r = {};
                        for (let i = 0; i < nQ.length; i++) {
                            let s = "rotate" + nQ[i];
                            n[s] && (r[s] = n[s],
                                e.setStaticValue(s, 0))
                        }
                        for (let i in e.render(),
                                r)
                            e.setStaticValue(i, r[i]);
                        e.scheduleRender()
                    }
                    getProjectionStyles(e = {}) {
                        var i, n;
                        let r = {};
                        if (!this.instance || this.isSVG)
                            return r;
                        if (!this.isVisible)
                            return {
                                visibility: "hidden"
                            };
                        r.visibility = "";
                        let s = this.getTransformTemplate();
                        if (this.needsReset)
                            return this.needsReset = !1,
                                r.opacity = "",
                                r.pointerEvents = tk(e.pointerEvents) || "",
                                r.transform = s ? s(this.latestValues, "") : "none",
                                r;
                        let o = this.getLead();
                        if (!this.projectionDelta || !this.layout || !o.target) {
                            let i = {};
                            return this.options.layoutId && (i.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1,
                                    i.pointerEvents = tk(e.pointerEvents) || ""),
                                this.hasProjected && !ns(this.latestValues) && (i.transform = s ? s({}, "") : "none",
                                    this.hasProjected = !1),
                                i
                        }
                        let a = o.animationValues || o.latestValues;
                        this.applyTransformsToTarget(),
                            r.transform = nG(this.projectionDeltaWithTransform, this.treeScale, a),
                            s && (r.transform = s(a, r.transform));
                        let {
                            x: l,
                            y: u
                        } = this.projectionDelta;
                        for (let e in r.transformOrigin = `${100 * l.origin}% ${100 * u.origin}% 0`,
                                o.animationValues ? r.opacity = o === this ? null !== (n = null !== (i = a.opacity) && void 0 !== i ? i : this.latestValues.opacity) && void 0 !== n ? n : 1 : this.preserveOpacity ? this.latestValues.opacity : a.opacityExit : r.opacity = o === this ? void 0 !== a.opacity ? a.opacity : "" : void 0 !== a.opacityExit ? a.opacityExit : 0,
                                B) {
                            if (void 0 === a[e])
                                continue;
                            let {
                                correct: i,
                                applyTo: n
                            } = B[e], s = "none" === r.transform ? a[e] : i(a[e], o);
                            if (n) {
                                let e = n.length;
                                for (let i = 0; i < e; i++)
                                    r[n[i]] = s
                            } else
                                r[e] = s
                        }
                        return this.options.layoutId && (r.pointerEvents = o === this ? tk(e.pointerEvents) || "" : "none"),
                            r
                    }
                    clearSnapshot() {
                        this.resumeFrom = this.snapshot = void 0
                    }
                    resetTree() {
                        this.root.nodes.forEach(e => {
                                var i;
                                return null === (i = e.currentAnimation) || void 0 === i ? void 0 : i.stop()
                            }),
                            this.root.nodes.forEach(n9),
                            this.root.sharedNodes.clear()
                    }
                }
            }

            function n5(e) {
                e.updateLayout()
            }

            function n3(e) {
                var i;
                let n = (null === (i = e.resumeFrom) || void 0 === i ? void 0 : i.snapshot) || e.snapshot;
                if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
                    let {
                        layoutBox: i,
                        measuredBox: r
                    } = e.layout, {
                        animationType: s
                    } = e.options, o = n.source !== e.layout.source;
                    "size" === s ? ne(e => {
                        let r = o ? n.measuredBox[e] : n.layoutBox[e],
                            s = iG(r);
                        r.min = i[e].min,
                            r.max = r.min + s
                    }) : ru(s, n.layoutBox, i) && ne(e => {
                        let r = o ? n.measuredBox[e] : n.layoutBox[e],
                            s = iG(i[e]);
                        r.max = r.min + s
                    });
                    let a = i8();
                    iQ(a, i, n.layoutBox);
                    let l = i8();
                    o ? iQ(l, e.applyTransform(r, !0), n.measuredBox) : iQ(l, i, n.layoutBox);
                    let u = !nz(a),
                        h = !1;
                    if (!e.resumeFrom) {
                        let r = e.getClosestProjectingParent();
                        if (r && !r.resumeFrom) {
                            let {
                                snapshot: s,
                                layout: o
                            } = r;
                            if (s && o) {
                                let a = nt();
                                i5(a, n.layoutBox, s.layoutBox);
                                let l = nt();
                                i5(l, i, o.layoutBox),
                                    nZ(a, l) || (h = !0),
                                    r.options.layoutRoot && (e.relativeTarget = l,
                                        e.relativeTargetOrigin = a,
                                        e.relativeParent = r)
                            }
                        }
                    }
                    e.notifyListeners("didUpdate", {
                        layout: i,
                        snapshot: n,
                        delta: l,
                        layoutDelta: a,
                        hasLayoutChanged: u,
                        hasRelativeTargetChanged: h
                    })
                } else if (e.isLead()) {
                    let {
                        onExitComplete: i
                    } = e.options;
                    i && i()
                }
                e.options.transition = void 0
            }

            function n2(e) {
                e.isProjectionDirty || (e.isProjectionDirty = Boolean(e.parent && e.parent.isProjectionDirty)),
                    e.isTransformDirty || (e.isTransformDirty = Boolean(e.parent && e.parent.isTransformDirty))
            }

            function n4(e) {
                e.clearSnapshot()
            }

            function n9(e) {
                e.clearMeasurements()
            }

            function n6(e) {
                let {
                    visualElement: i
                } = e.options;
                i && i.getProps().onBeforeLayoutMeasure && i.notify("BeforeLayoutMeasure"),
                    e.resetTransform()
            }

            function n8(e) {
                e.finishAnimation(),
                    e.targetDelta = e.relativeTarget = e.target = void 0
            }

            function n7(e) {
                e.resolveTargetDelta()
            }

            function rt(e) {
                e.calcProjection()
            }

            function re(e) {
                e.resetRotation()
            }

            function ri(e) {
                e.removeLeadSnapshot()
            }

            function rn(e, i, n) {
                e.translate = e_(i.translate, 0, n),
                    e.scale = e_(i.scale, 1, n),
                    e.origin = i.origin,
                    e.originPoint = i.originPoint
            }

            function rr(e, i, n, r) {
                e.min = e_(i.min, n.min, r),
                    e.max = e_(i.max, n.max, r)
            }

            function rs(e) {
                return e.animationValues && void 0 !== e.animationValues.opacityExit
            }
            let ro = {
                duration: .45,
                ease: [.4, 0, .1, 1]
            };

            function ra(e, i) {
                let n = e.root;
                for (let i = e.path.length - 1; i >= 0; i--)
                    if (Boolean(e.path[i].instance)) {
                        n = e.path[i];
                        break
                    }
                let r = n && n !== e.root ? n.instance : document,
                    s = r.querySelector(`[data-projection-id="${i}"]`);
                s && e.mount(s, !0)
            }

            function rl(e) {
                e.min = Math.round(e.min),
                    e.max = Math.round(e.max)
            }

            function ru(e, i, n) {
                return "position" === e || "preserve-aspect" === e && !iK(nq(i), nq(n), .2)
            }
            let rh = n1({
                    attachResizeListener: (e, i) => tD(e, "resize", i),
                    measureScroll: () => ({
                        x: document.documentElement.scrollLeft || document.body.scrollLeft,
                        y: document.documentElement.scrollTop || document.body.scrollTop
                    }),
                    checkIsScrollRoot: () => !0
                }),
                rc = {
                    current: void 0
                },
                rd = n1({
                    measureScroll: e => ({
                        x: e.scrollLeft,
                        y: e.scrollTop
                    }),
                    defaultParent: () => {
                        if (!rc.current) {
                            let e = new rh(0, {});
                            e.mount(window),
                                e.setOptions({
                                    layoutScroll: !0
                                }),
                                rc.current = e
                        }
                        return rc.current
                    },
                    resetTransform: (e, i) => {
                        e.style.transform = void 0 !== i ? i : "none"
                    },
                    checkIsScrollRoot: e => Boolean("fixed" === window.getComputedStyle(e).position)
                }),
                rp = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y"]),
                rm = e => rp.has(e),
                rf = e => Object.keys(e).some(rm),
                rg = e => e === _ || e === tt;
            (o = l || (l = {})).width = "width",
                o.height = "height",
                o.left = "left",
                o.right = "right",
                o.top = "top",
                o.bottom = "bottom";
            let ry = (e, i) => parseFloat(e.split(", ")[i]),
                rv = (e, i) => (n, {
                    transform: r
                }) => {
                    if ("none" === r || !r)
                        return 0;
                    let s = r.match(/^matrix3d\((.+)\)$/);
                    if (s)
                        return ry(s[1], i); {
                        let i = r.match(/^matrix\((.+)\)$/);
                        return i ? ry(i[1], e) : 0
                    }
                },
                rx = new Set(["x", "y", "z"]),
                rb = D.filter(e => !rx.has(e)),
                rP = {
                    width: ({
                        x: e
                    }, {
                        paddingLeft: i = "0",
                        paddingRight: n = "0"
                    }) => e.max - e.min - parseFloat(i) - parseFloat(n),
                    height: ({
                        y: e
                    }, {
                        paddingTop: i = "0",
                        paddingBottom: n = "0"
                    }) => e.max - e.min - parseFloat(i) - parseFloat(n),
                    top: (e, {
                        top: i
                    }) => parseFloat(i),
                    left: (e, {
                        left: i
                    }) => parseFloat(i),
                    bottom: ({
                        y: e
                    }, {
                        top: i
                    }) => parseFloat(i) + (e.max - e.min),
                    right: ({
                        x: e
                    }, {
                        left: i
                    }) => parseFloat(i) + (e.max - e.min),
                    x: rv(4, 13),
                    y: rv(5, 14)
                },
                rw = (e, i, n) => {
                    let r = i.measureViewportBox(),
                        s = i.current,
                        o = getComputedStyle(s),
                        {
                            display: a
                        } = o,
                        l = {};
                    "none" === a && i.setStaticValue("display", e.display || "block"),
                        n.forEach(e => {
                            l[e] = rP[e](r, o)
                        }),
                        i.render();
                    let u = i.measureViewportBox();
                    return n.forEach(n => {
                            let r = i.getValue(n);
                            r && r.jump(l[n]),
                                e[n] = rP[n](u, o)
                        }),
                        e
                },
                rA = (e, i, n = {}, r = {}) => {
                    i = {
                            ...i
                        },
                        r = {
                            ...r
                        };
                    let s = Object.keys(i).filter(rm),
                        o = [],
                        a = !1,
                        l = [];
                    if (s.forEach(s => {
                            let u;
                            let h = e.getValue(s);
                            if (!e.hasValue(s))
                                return;
                            let c = n[s],
                                d = eC(c),
                                p = i[s];
                            if (tS(p)) {
                                let e = p.length,
                                    i = null === p[0] ? 1 : 0;
                                d = eC(c = p[i]);
                                for (let n = i; n < e; n++)
                                    u ? eF(eC(p[n]) === u, "All keyframes must be of the same type") : eF((u = eC(p[n])) === d || rg(d) && rg(u), "Keyframes must be of the same dimension as the current value")
                            } else
                                u = eC(p);
                            if (d !== u) {
                                if (rg(d) && rg(u)) {
                                    let e = h.get();
                                    "string" == typeof e && h.set(parseFloat(e)),
                                        "string" == typeof p ? i[s] = parseFloat(p) : Array.isArray(p) && u === tt && (i[s] = p.map(parseFloat))
                                } else
                                    (null == d ? void 0 : d.transform) && (null == u ? void 0 : u.transform) && (0 === c || 0 === p) ? 0 === c ? h.set(u.transform(c)) : i[s] = d.transform(p) : (a || (o = function(e) {
                                                let i = [];
                                                return rb.forEach(n => {
                                                        let r = e.getValue(n);
                                                        void 0 !== r && (i.push([n, r.get()]),
                                                            r.set(n.startsWith("scale") ? 1 : 0))
                                                    }),
                                                    i.length && e.render(),
                                                    i
                                            }(e),
                                            a = !0),
                                        l.push(s),
                                        r[s] = void 0 !== r[s] ? r[s] : i[s],
                                        h.jump(p))
                            }
                        }), !l.length)
                        return {
                            target: i,
                            transitionEnd: r
                        }; {
                        let n = l.indexOf("height") >= 0 ? window.pageYOffset : null,
                            s = rw(i, e, l);
                        return o.length && o.forEach(([i, n]) => {
                                e.getValue(i).set(n)
                            }),
                            e.render(),
                            T.j && null !== n && window.scrollTo({
                                top: n
                            }), {
                                target: s,
                                transitionEnd: r
                            }
                    }
                },
                rT = (e, i, n, r) => {
                    var s, o;
                    let a = function(e, {
                        ...i
                    }, n) {
                        let r = e.current;
                        if (!(r instanceof Element))
                            return {
                                target: i,
                                transitionEnd: n
                            };
                        for (let s in n && (n = {
                                    ...n
                                }),
                                e.values.forEach(e => {
                                    let i = e.get();
                                    if (!nw(i))
                                        return;
                                    let n = nT(i, r);
                                    n && e.set(n)
                                }),
                                i) {
                            let e = i[s];
                            if (!nw(e))
                                continue;
                            let o = nT(e, r);
                            o && (i[s] = o,
                                n && void 0 === n[s] && (n[s] = e))
                        }
                        return {
                            target: i,
                            transitionEnd: n
                        }
                    }(e, i, r);
                    return i = a.target,
                        r = a.transitionEnd,
                        s = i,
                        o = r,
                        rf(s) ? rA(e, s, n, o) : {
                            target: s,
                            transitionEnd: o
                        }
                },
                rV = {
                    current: null
                },
                rE = {
                    current: !1
                },
                rS = Object.keys(A),
                rC = rS.length,
                rM = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
            class rk {
                constructor({
                    parent: e,
                    props: i,
                    presenceContext: n,
                    reducedMotionConfig: r,
                    visualState: s
                }, o = {}) {
                    this.current = null,
                        this.children = new Set,
                        this.isVariantNode = !1,
                        this.isControllingVariants = !1,
                        this.shouldReduceMotion = null,
                        this.values = new Map,
                        this.features = {},
                        this.valueSubscriptions = new Map,
                        this.prevMotionValues = {},
                        this.events = {},
                        this.propEventSubscriptions = {},
                        this.notifyUpdate = () => this.notify("Update", this.latestValues),
                        this.render = () => {
                            this.current && (this.triggerBuild(),
                                this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
                        },
                        this.scheduleRender = () => t9.Z_.render(this.render, !1, !0);
                    let {
                        latestValues: a,
                        renderState: l
                    } = s;
                    this.latestValues = a,
                        this.baseTarget = {
                            ...a
                        },
                        this.initialValues = i.initial ? {
                            ...a
                        } : {},
                        this.renderState = l,
                        this.parent = e,
                        this.props = i,
                        this.presenceContext = n,
                        this.depth = e ? e.depth + 1 : 0,
                        this.reducedMotionConfig = r,
                        this.options = o,
                        this.isControllingVariants = x(i),
                        this.isVariantNode = b(i),
                        this.isVariantNode && (this.variantChildren = new Set),
                        this.manuallyAnimateOnMount = Boolean(e && e.current);
                    let {
                        willChange: u,
                        ...h
                    } = this.scrapeMotionValuesFromProps(i, {});
                    for (let e in h) {
                        let i = h[e];
                        void 0 !== a[e] && O(i) && (i.set(a[e], !1),
                            eR(u) && u.add(e))
                    }
                }
                scrapeMotionValuesFromProps(e, i) {
                    return {}
                }
                mount(e) {
                    this.current = e,
                        this.projection && this.projection.mount(e),
                        this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
                        this.values.forEach((e, i) => this.bindToMotionValue(i, e)),
                        rE.current || function() {
                            if (rE.current = !0,
                                T.j) {
                                if (window.matchMedia) {
                                    let e = window.matchMedia("(prefers-reduced-motion)"),
                                        i = () => rV.current = e.matches;
                                    e.addListener(i),
                                        i()
                                } else
                                    rV.current = !1
                            }
                        }(),
                        this.shouldReduceMotion = "never" !== this.reducedMotionConfig && ("always" === this.reducedMotionConfig || rV.current),
                        this.parent && this.parent.children.add(this),
                        this.update(this.props, this.presenceContext)
                }
                unmount() {
                    for (let e in this.projection && this.projection.unmount(),
                            t9.qY.update(this.notifyUpdate),
                            t9.qY.render(this.render),
                            this.valueSubscriptions.forEach(e => e()),
                            this.removeFromVariantTree && this.removeFromVariantTree(),
                            this.parent && this.parent.children.delete(this),
                            this.events)
                        this.events[e].clear();
                    for (let e in this.features)
                        this.features[e].unmount();
                    this.current = null
                }
                bindToMotionValue(e, i) {
                    let n = F.has(e),
                        r = i.on("change", i => {
                            this.latestValues[e] = i,
                                this.props.onUpdate && t9.Z_.update(this.notifyUpdate, !1, !0),
                                n && this.projection && (this.projection.isTransformDirty = !0)
                        }),
                        s = i.on("renderRequest", this.scheduleRender);
                    this.valueSubscriptions.set(e, () => {
                        r(),
                            s()
                    })
                }
                sortNodePosition(e) {
                    return this.current && this.sortInstanceNodePosition && this.type === e.type ? this.sortInstanceNodePosition(this.current, e.current) : 0
                }
                loadFeatures({
                    children: e,
                    ...i
                }, n, r, s, o) {
                    let a, l;
                    for (let e = 0; e < rC; e++) {
                        let n = rS[e],
                            {
                                isEnabled: r,
                                Feature: s,
                                ProjectionNode: o,
                                MeasureLayout: u
                            } = A[n];
                        o && (a = o),
                            r(i) && (!this.features[n] && s && (this.features[n] = new s(this)),
                                u && (l = u))
                    }
                    if (!this.projection && a) {
                        this.projection = new a(s, this.latestValues, this.parent && this.parent.projection);
                        let {
                            layoutId: e,
                            layout: n,
                            drag: r,
                            dragConstraints: l,
                            layoutScroll: u,
                            layoutRoot: h
                        } = i;
                        this.projection.setOptions({
                            layoutId: e,
                            layout: n,
                            alwaysMeasureLayout: Boolean(r) || l && f(l),
                            visualElement: this,
                            scheduleRender: () => this.scheduleRender(),
                            animationType: "string" == typeof n ? n : "both",
                            initialPromotionConfig: o,
                            layoutScroll: u,
                            layoutRoot: h
                        })
                    }
                    return l
                }
                updateFeatures() {
                    for (let e in this.features) {
                        let i = this.features[e];
                        i.isMounted ? i.update(this.props, this.prevProps) : (i.mount(),
                            i.isMounted = !0)
                    }
                }
                triggerBuild() {
                    this.build(this.renderState, this.latestValues, this.options, this.props)
                }
                measureViewportBox() {
                    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : nt()
                }
                getStaticValue(e) {
                    return this.latestValues[e]
                }
                setStaticValue(e, i) {
                    this.latestValues[e] = i
                }
                makeTargetAnimatable(e, i = !0) {
                    return this.makeTargetAnimatableFromInstance(e, this.props, i)
                }
                update(e, i) {
                    (e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
                        this.prevProps = this.props,
                        this.props = e,
                        this.prevPresenceContext = this.presenceContext,
                        this.presenceContext = i;
                    for (let i = 0; i < rM.length; i++) {
                        let n = rM[i];
                        this.propEventSubscriptions[n] && (this.propEventSubscriptions[n](),
                            delete this.propEventSubscriptions[n]);
                        let r = e["on" + n];
                        r && (this.propEventSubscriptions[n] = this.on(n, r))
                    }
                    this.prevMotionValues = function(e, i, n) {
                            let {
                                willChange: r
                            } = i;
                            for (let s in i) {
                                let o = i[s],
                                    a = n[s];
                                if (O(o))
                                    e.addValue(s, o),
                                    eR(r) && r.add(s);
                                else if (O(a))
                                    e.addValue(s, en(o, {
                                        owner: e
                                    })),
                                    eR(r) && r.remove(s);
                                else if (a !== o) {
                                    if (e.hasValue(s)) {
                                        let i = e.getValue(s);
                                        i.hasAnimated || i.set(o)
                                    } else {
                                        let i = e.getStaticValue(s);
                                        e.addValue(s, en(void 0 !== i ? i : o, {
                                            owner: e
                                        }))
                                    }
                                }
                            }
                            for (let r in n)
                                void 0 === i[r] && e.removeValue(r);
                            return i
                        }(this, this.scrapeMotionValuesFromProps(e, this.prevProps), this.prevMotionValues),
                        this.handleChildMotionValue && this.handleChildMotionValue()
                }
                getProps() {
                    return this.props
                }
                getVariant(e) {
                    return this.props.variants ? this.props.variants[e] : void 0
                }
                getDefaultTransition() {
                    return this.props.transition
                }
                getTransformPagePoint() {
                    return this.props.transformPagePoint
                }
                getClosestVariantNode() {
                    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
                }
                getVariantContext(e = !1) {
                    if (e)
                        return this.parent ? this.parent.getVariantContext() : void 0;
                    if (!this.isControllingVariants) {
                        let e = this.parent && this.parent.getVariantContext() || {};
                        return void 0 !== this.props.initial && (e.initial = this.props.initial),
                            e
                    }
                    let i = {};
                    for (let e = 0; e < rR; e++) {
                        let n = rL[e],
                            r = this.props[n];
                        (g(r) || !1 === r) && (i[n] = r)
                    }
                    return i
                }
                addVariantChild(e) {
                    let i = this.getClosestVariantNode();
                    if (i)
                        return i.variantChildren && i.variantChildren.add(e),
                            () => i.variantChildren.delete(e)
                }
                addValue(e, i) {
                    i !== this.values.get(e) && (this.removeValue(e),
                            this.bindToMotionValue(e, i)),
                        this.values.set(e, i),
                        this.latestValues[e] = i.get()
                }
                removeValue(e) {
                    this.values.delete(e);
                    let i = this.valueSubscriptions.get(e);
                    i && (i(),
                            this.valueSubscriptions.delete(e)),
                        delete this.latestValues[e],
                        this.removeValueFromRenderState(e, this.renderState)
                }
                hasValue(e) {
                    return this.values.has(e)
                }
                getValue(e, i) {
                    if (this.props.values && this.props.values[e])
                        return this.props.values[e];
                    let n = this.values.get(e);
                    return void 0 === n && void 0 !== i && (n = en(i, {
                                owner: this
                            }),
                            this.addValue(e, n)),
                        n
                }
                readValue(e) {
                    return void 0 === this.latestValues[e] && this.current ? this.readValueFromInstance(this.current, e, this.options) : this.latestValues[e]
                }
                setBaseTarget(e, i) {
                    this.baseTarget[e] = i
                }
                getBaseTarget(e) {
                    var i;
                    let {
                        initial: n
                    } = this.props, r = "string" == typeof n || "object" == typeof n ? null === (i = tE(this.props, n)) || void 0 === i ? void 0 : i[e] : void 0;
                    if (n && void 0 !== r)
                        return r;
                    let s = this.getBaseTargetFromProps(this.props, e);
                    return void 0 === s || O(s) ? void 0 !== this.initialValues[e] && void 0 === r ? void 0 : this.baseTarget[e] : s
                }
                on(e, i) {
                    return this.events[e] || (this.events[e] = new t7),
                        this.events[e].add(i)
                }
                notify(e, ...i) {
                    this.events[e] && this.events[e].notify(...i)
                }
            }
            let rL = ["initial", ...iU],
                rR = rL.length;
            class rB extends rk {
                sortInstanceNodePosition(e, i) {
                    return 2 & e.compareDocumentPosition(i) ? 1 : -1
                }
                getBaseTargetFromProps(e, i) {
                    return e.style ? e.style[i] : void 0
                }
                removeValueFromRenderState(e, {
                    vars: i,
                    style: n
                }) {
                    delete i[e],
                        delete n[e]
                }
                makeTargetAnimatableFromInstance({
                    transition: e,
                    transitionEnd: i,
                    ...n
                }, {
                    transformValues: r
                }, s) {
                    let o = function(e, i, n) {
                        let r = {};
                        for (let s in e) {
                            let e = function(e, i) {
                                if (!i)
                                    return;
                                let n = i[e] || i.default || i;
                                return n.from
                            }(s, i);
                            if (void 0 !== e)
                                r[s] = e;
                            else {
                                let e = n.getValue(s);
                                e && (r[s] = e.get())
                            }
                        }
                        return r
                    }(n, e || {}, this);
                    if (r && (i && (i = r(i)),
                            n && (n = r(n)),
                            o && (o = r(o))),
                        s) {
                        ! function(e, i, n) {
                            var r, s;
                            let o = Object.keys(i).filter(i => !e.hasValue(i)),
                                a = o.length;
                            if (a)
                                for (let l = 0; l < a; l++) {
                                    let a = o[l],
                                        u = i[a],
                                        h = null;
                                    Array.isArray(u) && (h = u[0]),
                                        null === h && (h = null !== (s = null !== (r = n[a]) && void 0 !== r ? r : e.readValue(a)) && void 0 !== s ? s : i[a]),
                                        null != h && ("string" == typeof h && (t3(h) || t2(h)) ? h = parseFloat(h) : !ek(h) && ev.test(u) && (h = eV(a, u)),
                                            e.addValue(a, en(h, {
                                                owner: e
                                            })),
                                            void 0 === n[a] && (n[a] = h),
                                            null !== h && e.setBaseTarget(a, h))
                                }
                        }(this, n, o);
                        let e = rT(this, n, o, i);
                        i = e.transitionEnd,
                            n = e.target
                    }
                    return {
                        transition: e,
                        transitionEnd: i,
                        ...n
                    }
                }
            }
            class rD extends rB {
                readValueFromInstance(e, i) {
                    if (F.has(i)) {
                        let e = eT(i);
                        return e && e.default || 0
                    } {
                        let n = window.getComputedStyle(e),
                            r = (N(i) ? n.getPropertyValue(i) : n[i]) || 0;
                        return "string" == typeof r ? r.trim() : r
                    }
                }
                measureInstanceViewportBox(e, {
                    transformPagePoint: i
                }) {
                    return ng(e, i)
                }
                build(e, i, n, r) {
                    to(e, i, n, r.transformTemplate)
                }
                scrapeMotionValuesFromProps(e, i) {
                    return tT(e, i)
                }
                handleChildMotionValue() {
                    this.childSubscription && (this.childSubscription(),
                        delete this.childSubscription);
                    let {
                        children: e
                    } = this.props;
                    O(e) && (this.childSubscription = e.on("change", e => {
                        this.current && (this.current.textContent = `${e}`)
                    }))
                }
                renderInstance(e, i, n, r) {
                    tP(e, i, n, r)
                }
            }
            class rF extends rB {
                constructor() {
                    super(...arguments),
                        this.isSVGTag = !1
                }
                getBaseTargetFromProps(e, i) {
                    return e[i]
                }
                readValueFromInstance(e, i) {
                    if (F.has(i)) {
                        let e = eT(i);
                        return e && e.default || 0
                    }
                    return i = tw.has(i) ? i : tb(i),
                        e.getAttribute(i)
                }
                measureInstanceViewportBox() {
                    return nt()
                }
                scrapeMotionValuesFromProps(e, i) {
                    return tV(e, i)
                }
                build(e, i, n, r) {
                    tg(e, i, n, this.isSVGTag, r.transformTemplate)
                }
                renderInstance(e, i, n, r) {
                    tA(e, i, n, r)
                }
                mount(e) {
                    this.isSVGTag = tv(e.tagName),
                        super.mount(e)
                }
            }
            let rj = (e, i) => R(e) ? new rF(i, {
                    enableHardwareAcceleration: !1
                }) : new rD(i, {
                    enableHardwareAcceleration: !0
                }),
                rO = {
                    animation: {
                        Feature: class extends tz {
                            constructor(e) {
                                super(e),
                                    e.animationState || (e.animationState = function(e) {
                                        let i = i => Promise.all(i.map(({
                                                animation: i,
                                                options: n
                                            }) => (function(e, i, n = {}) {
                                                let r;
                                                if (e.notify("AnimationStart", i),
                                                    Array.isArray(i)) {
                                                    let s = i.map(i => ij(e, i, n));
                                                    r = Promise.all(s)
                                                } else if ("string" == typeof i)
                                                    r = ij(e, i, n);
                                                else {
                                                    let s = "function" == typeof i ? eL(e, i, n.custom) : i;
                                                    r = iO(e, s, n)
                                                }
                                                return r.then(() => e.notify("AnimationComplete", i))
                                            })(e, i, n))),
                                            n = {
                                                [a.Animate]: iW(!0),
                                                [a.InView]: iW(),
                                                [a.Hover]: iW(),
                                                [a.Tap]: iW(),
                                                [a.Drag]: iW(),
                                                [a.Focus]: iW(),
                                                [a.Exit]: iW()
                                            },
                                            r = !0,
                                            s = (i, n) => {
                                                let r = eL(e, n);
                                                if (r) {
                                                    let {
                                                        transition: e,
                                                        transitionEnd: n,
                                                        ...s
                                                    } = r;
                                                    i = {
                                                        ...i,
                                                        ...s,
                                                        ...n
                                                    }
                                                }
                                                return i
                                            };

                                        function o(o, a) {
                                            let l = e.getProps(),
                                                u = e.getVariantContext(!0) || {},
                                                h = [],
                                                c = new Set,
                                                d = {},
                                                p = 1 / 0;
                                            for (let i = 0; i < i$; i++) {
                                                var m;
                                                let f = iN[i],
                                                    v = n[f],
                                                    x = void 0 !== l[f] ? l[f] : u[f],
                                                    b = g(x),
                                                    P = f === a ? v.isActive : null;
                                                !1 === P && (p = i);
                                                let w = x === u[f] && x !== l[f] && b;
                                                if (w && r && e.manuallyAnimateOnMount && (w = !1),
                                                    v.protectedKeys = {
                                                        ...d
                                                    }, !v.isActive && null === P || !x && !v.prevProp || y(x) || "boolean" == typeof x)
                                                    continue;
                                                let A = (m = v.prevProp,
                                                        "string" == typeof x ? x !== m : !!Array.isArray(x) && !t5(x, m)),
                                                    T = A || f === a && v.isActive && !w && b || i > p && b,
                                                    V = Array.isArray(x) ? x : [x],
                                                    E = V.reduce(s, {});
                                                !1 === P && (E = {});
                                                let {
                                                    prevResolvedValues: S = {}
                                                } = v, C = {
                                                    ...S,
                                                    ...E
                                                }, M = e => {
                                                    T = !0,
                                                        c.delete(e),
                                                        v.needsAnimating[e] = !0
                                                };
                                                for (let e in C) {
                                                    let i = E[e],
                                                        n = S[e];
                                                    d.hasOwnProperty(e) || (i !== n ? tS(i) && tS(n) ? !t5(i, n) || A ? M(e) : v.protectedKeys[e] = !0 : void 0 !== i ? M(e) : c.add(e) : void 0 !== i && c.has(e) ? M(e) : v.protectedKeys[e] = !0)
                                                }
                                                v.prevProp = x,
                                                    v.prevResolvedValues = E,
                                                    v.isActive && (d = {
                                                        ...d,
                                                        ...E
                                                    }),
                                                    r && e.blockInitialAnimation && (T = !1),
                                                    T && !w && h.push(...V.map(e => ({
                                                        animation: e,
                                                        options: {
                                                            type: f,
                                                            ...o
                                                        }
                                                    })))
                                            }
                                            if (c.size) {
                                                let i = {};
                                                c.forEach(n => {
                                                        let r = e.getBaseTarget(n);
                                                        void 0 !== r && (i[n] = r)
                                                    }),
                                                    h.push({
                                                        animation: i
                                                    })
                                            }
                                            let f = Boolean(h.length);
                                            return r && !1 === l.initial && !e.manuallyAnimateOnMount && (f = !1),
                                                r = !1,
                                                f ? i(h) : Promise.resolve()
                                        }
                                        return {
                                            animateChanges: o,
                                            setActive: function(i, r, s) {
                                                if (n[i].isActive === r)
                                                    return Promise.resolve();
                                                e.variantChildren && e.variantChildren.forEach(e => {
                                                        e.animationState && e.animationState.setActive(i, r)
                                                    }),
                                                    n[i].isActive = r;
                                                let a = o(s, i);
                                                for (let e in n)
                                                    n[e].protectedKeys = {};
                                                return a
                                            },
                                            setAnimateFunction: function(n) {
                                                i = n(e)
                                            },
                                            getState: () => n
                                        }
                                    }(e))
                            }
                            updateAnimationControlsSubscription() {
                                let {
                                    animate: e
                                } = this.node.getProps();
                                this.unmount(),
                                    y(e) && (this.unmount = e.subscribe(this.node))
                            }
                            mount() {
                                this.updateAnimationControlsSubscription()
                            }
                            update() {
                                let {
                                    animate: e
                                } = this.node.getProps(), {
                                    animate: i
                                } = this.node.prevProps || {};
                                e !== i && this.updateAnimationControlsSubscription()
                            }
                            unmount() {}
                        }
                    },
                    exit: {
                        Feature: class extends tz {
                            constructor() {
                                super(...arguments),
                                    this.id = i_++
                            }
                            update() {
                                if (!this.node.presenceContext)
                                    return;
                                let {
                                    isPresent: e,
                                    onExitComplete: i,
                                    custom: n
                                } = this.node.presenceContext, {
                                    isPresent: r
                                } = this.node.prevPresenceContext || {};
                                if (!this.node.animationState || e === r)
                                    return;
                                let s = this.node.animationState.setActive(a.Exit, !e, {
                                    custom: null != n ? n : this.node.getProps().custom
                                });
                                i && !e && s.then(() => i(this.id))
                            }
                            mount() {
                                let {
                                    register: e
                                } = this.node.presenceContext || {};
                                e && (this.unmount = e(this.id))
                            }
                            unmount() {}
                        }
                    },
                    inView: {
                        Feature: class extends tz {
                            constructor() {
                                super(...arguments),
                                    this.hasEnteredView = !1,
                                    this.isInView = !1
                            }
                            viewportFallback() {
                                requestAnimationFrame(() => {
                                    this.hasEnteredView = !0;
                                    let {
                                        onViewportEnter: e
                                    } = this.node.getProps();
                                    e && e(null),
                                        this.node.animationState && this.node.animationState.setActive(a.InView, !0)
                                })
                            }
                            startObserver() {
                                this.unmount();
                                let {
                                    viewport: e = {}
                                } = this.node.getProps(), {
                                    root: i,
                                    margin: n,
                                    amount: r = "some",
                                    once: s,
                                    fallback: o = !0
                                } = e;
                                if ("undefined" == typeof IntersectionObserver) {
                                    o && this.viewportFallback();
                                    return
                                }
                                let l = {
                                        root: i ? i.current : void 0,
                                        rootMargin: n,
                                        threshold: "number" == typeof r ? r : t1[r]
                                    },
                                    u = e => {
                                        let {
                                            isIntersecting: i
                                        } = e;
                                        if (this.isInView === i || (this.isInView = i,
                                                s && !i && this.hasEnteredView))
                                            return;
                                        i && (this.hasEnteredView = !0),
                                            this.node.animationState && this.node.animationState.setActive(a.InView, i);
                                        let {
                                            onViewportEnter: n,
                                            onViewportLeave: r
                                        } = this.node.getProps(), o = i ? n : r;
                                        o && o(e)
                                    };
                                return function(e, i, n) {
                                    let r = function({
                                        root: e,
                                        ...i
                                    }) {
                                        let n = e || document;
                                        tJ.has(n) || tJ.set(n, {});
                                        let r = tJ.get(n),
                                            s = JSON.stringify(i);
                                        return r[s] || (r[s] = new IntersectionObserver(t0, {
                                                root: e,
                                                ...i
                                            })),
                                            r[s]
                                    }(i);
                                    return tK.set(e, n),
                                        r.observe(e),
                                        () => {
                                            tK.delete(e),
                                                r.unobserve(e)
                                        }
                                }(this.node.current, l, u)
                            }
                            mount() {
                                this.startObserver()
                            }
                            update() {
                                if ("undefined" == typeof IntersectionObserver)
                                    return;
                                let {
                                    props: e,
                                    prevProps: i
                                } = this.node, n = ["amount", "margin", "root"].some(function({
                                    viewport: e = {}
                                }, {
                                    viewport: i = {}
                                } = {}) {
                                    return n => e[n] !== i[n]
                                }(e, i));
                                n && this.startObserver()
                            }
                            unmount() {}
                        }
                    },
                    tap: {
                        Feature: class extends tz {
                            constructor() {
                                super(...arguments),
                                    this.removeStartListeners = tX,
                                    this.removeEndListeners = tX,
                                    this.removeAccessibleListeners = tX,
                                    this.startPointerPress = (e, i) => {
                                        if (this.removeEndListeners(),
                                            this.isPressing)
                                            return;
                                        let n = this.node.getProps(),
                                            r = (e, i) => {
                                                if (!this.checkPressEnd())
                                                    return;
                                                let {
                                                    onTap: n,
                                                    onTapCancel: r
                                                } = this.node.getProps();
                                                tq(this.node.current, e.target) ? n && n(e, i) : r && r(e, i)
                                            },
                                            s = tI(window, "pointerup", r, {
                                                passive: !(n.onTap || n.onPointerUp)
                                            }),
                                            o = tI(window, "pointercancel", (e, i) => this.cancelPress(e, i), {
                                                passive: !(n.onTapCancel || n.onPointerCancel)
                                            });
                                        this.removeEndListeners = tN(s, o),
                                            this.startPress(e, i)
                                    },
                                    this.startAccessiblePress = () => {
                                        let e = e => {
                                                if ("Enter" !== e.key || this.isPressing)
                                                    return;
                                                let i = e => {
                                                    "Enter" === e.key && this.checkPressEnd() && tG("up", this.node.getProps().onTap)
                                                };
                                                this.removeEndListeners(),
                                                    this.removeEndListeners = tD(this.node.current, "keyup", i),
                                                    tG("down", (e, i) => {
                                                        this.startPress(e, i)
                                                    })
                                            },
                                            i = tD(this.node.current, "keydown", e),
                                            n = () => {
                                                this.isPressing && tG("cancel", (e, i) => this.cancelPress(e, i))
                                            },
                                            r = tD(this.node.current, "blur", n);
                                        this.removeAccessibleListeners = tN(i, r)
                                    }
                            }
                            startPress(e, i) {
                                this.isPressing = !0;
                                let {
                                    onTapStart: n,
                                    whileTap: r
                                } = this.node.getProps();
                                r && this.node.animationState && this.node.animationState.setActive(a.Tap, !0),
                                    n && n(e, i)
                            }
                            checkPressEnd() {
                                this.removeEndListeners(),
                                    this.isPressing = !1;
                                let e = this.node.getProps();
                                return e.whileTap && this.node.animationState && this.node.animationState.setActive(a.Tap, !1), !tY()
                            }
                            cancelPress(e, i) {
                                if (!this.checkPressEnd())
                                    return;
                                let {
                                    onTapCancel: n
                                } = this.node.getProps();
                                n && n(e, i)
                            }
                            mount() {
                                let e = this.node.getProps(),
                                    i = tI(this.node.current, "pointerdown", this.startPointerPress, {
                                        passive: !(e.onTapStart || e.onPointerStart)
                                    }),
                                    n = tD(this.node.current, "focus", this.startAccessiblePress);
                                this.removeStartListeners = tN(i, n)
                            }
                            unmount() {
                                this.removeStartListeners(),
                                    this.removeEndListeners(),
                                    this.removeAccessibleListeners()
                            }
                        }
                    },
                    focus: {
                        Feature: class extends tz {
                            constructor() {
                                super(...arguments),
                                    this.isActive = !1
                            }
                            onFocus() {
                                let e = !1;
                                try {
                                    e = this.node.current.matches(":focus-visible")
                                } catch (i) {
                                    e = !0
                                }
                                e && this.node.animationState && (this.node.animationState.setActive(a.Focus, !0),
                                    this.isActive = !0)
                            }
                            onBlur() {
                                this.isActive && this.node.animationState && (this.node.animationState.setActive(a.Focus, !1),
                                    this.isActive = !1)
                            }
                            mount() {
                                this.unmount = tN(tD(this.node.current, "focus", () => this.onFocus()), tD(this.node.current, "blur", () => this.onBlur()))
                            }
                            unmount() {}
                        }
                    },
                    hover: {
                        Feature: class extends tz {
                            mount() {
                                this.unmount = tN(tZ(this.node, !0), tZ(this.node, !1))
                            }
                            unmount() {}
                        }
                    },
                    pan: {
                        Feature: class extends tz {
                            constructor() {
                                super(...arguments),
                                    this.removePointerDownListener = tX
                            }
                            onPointerDown(e) {
                                this.session = new iY(e, this.createPanHandlers(), {
                                    transformPagePoint: this.node.getTransformPagePoint()
                                })
                            }
                            createPanHandlers() {
                                let {
                                    onPanSessionStart: e,
                                    onPanStart: i,
                                    onPan: n,
                                    onPanEnd: r
                                } = this.node.getProps();
                                return {
                                    onSessionStart: e,
                                    onStart: i,
                                    onMove: n,
                                    onEnd: (e, i) => {
                                        delete this.session,
                                            r && r(e, i)
                                    }
                                }
                            }
                            mount() {
                                this.removePointerDownListener = tI(this.node.current, "pointerdown", e => this.onPointerDown(e))
                            }
                            update() {
                                this.session && this.session.updateHandlers(this.createPanHandlers())
                            }
                            unmount() {
                                this.removePointerDownListener(),
                                    this.session && this.session.end()
                            }
                        }
                    },
                    drag: {
                        Feature: class extends tz {
                            constructor(e) {
                                super(e),
                                    this.removeGroupControls = tX,
                                    this.removeListeners = tX,
                                    this.controls = new nv(e)
                            }
                            mount() {
                                let {
                                    dragControls: e
                                } = this.node.getProps();
                                e && (this.removeGroupControls = e.subscribe(this.controls)),
                                    this.removeListeners = this.controls.addListeners() || tX
                            }
                            unmount() {
                                this.removeGroupControls(),
                                    this.removeListeners()
                            }
                        },
                        ProjectionNode: rd,
                        MeasureLayout: nC
                    },
                    layout: {
                        ProjectionNode: rd,
                        MeasureLayout: nC
                    }
                },
                rI = function(e) {
                    function i(i, n = {}) {
                        return function({
                            preloadedFeatures: e,
                            createVisualElement: i,
                            useRender: n,
                            useVisualState: r,
                            Component: s
                        }) {
                            e && function(e) {
                                for (let i in e)
                                    A[i] = {
                                        ...A[i],
                                        ...e[i]
                                    }
                            }(e);
                            let o = (0,
                                u.forwardRef)(function(o, a) {
                                var l, y;
                                let v;
                                let b = {
                                        ...(0,
                                            u.useContext)(h),
                                        ...o,
                                        layoutId: function({
                                            layoutId: e
                                        }) {
                                            let i = (0,
                                                u.useContext)(C.p).id;
                                            return i && void 0 !== e ? i + "-" + e : e
                                        }(o)
                                    },
                                    {
                                        isStatic: w
                                    } = b,
                                    A = function(e) {
                                        let {
                                            initial: i,
                                            animate: n
                                        } = function(e, i) {
                                            if (x(e)) {
                                                let {
                                                    initial: i,
                                                    animate: n
                                                } = e;
                                                return {
                                                    initial: !1 === i || g(i) ? i : void 0,
                                                    animate: g(n) ? n : void 0
                                                }
                                            }
                                            return !1 !== e.inherit ? i : {}
                                        }(e, (0,
                                            u.useContext)(c));
                                        return (0,
                                            u.useMemo)(() => ({
                                            initial: i,
                                            animate: n
                                        }), [P(i), P(n)])
                                    }(o),
                                    k = w ? void 0 : (0,
                                        V.h)(() => {
                                        if (E.hasEverUpdated)
                                            return S++
                                    }),
                                    L = r(o, w);
                                if (!w && T.j) {
                                    A.visualElement = function(e, i, n, r) {
                                        let s = (0,
                                                u.useContext)(c).visualElement,
                                            o = (0,
                                                u.useContext)(m),
                                            a = (0,
                                                u.useContext)(d.O),
                                            l = (0,
                                                u.useContext)(h).reducedMotion,
                                            f = (0,
                                                u.useRef)();
                                        r = r || o.renderer, !f.current && r && (f.current = r(e, {
                                            visualState: i,
                                            parent: s,
                                            props: n,
                                            presenceContext: a,
                                            blockInitialAnimation: !!a && !1 === a.initial,
                                            reducedMotionConfig: l
                                        }));
                                        let g = f.current;
                                        (0,
                                            u.useInsertionEffect)(() => {
                                            g && g.update(n, a)
                                        }),
                                        (0,
                                            p.L)(() => {
                                            g && g.render()
                                        }),
                                        (0,
                                            u.useEffect)(() => {
                                            g && g.updateFeatures()
                                        });
                                        let y = window.HandoffAppearAnimations ? p.L : u.useEffect;
                                        return y(() => {
                                                g && g.animationState && g.animationState.animateChanges()
                                            }),
                                            g
                                    }(s, L, b, i);
                                    let n = (0,
                                            u.useContext)(M),
                                        r = (0,
                                            u.useContext)(m).strict;
                                    A.visualElement && (v = A.visualElement.loadFeatures(b, r, e, k, n))
                                }
                                return u.createElement(c.Provider, {
                                    value: A
                                }, v && A.visualElement ? u.createElement(v, {
                                    visualElement: A.visualElement,
                                    ...b
                                }) : null, n(s, o, k, (l = A.visualElement,
                                    y = a,
                                    (0,
                                        u.useCallback)(e => {
                                        e && L.mount && L.mount(e),
                                            l && (e ? l.mount(e) : l.unmount()),
                                            y && ("function" == typeof y ? y(e) : f(y) && (y.current = e))
                                    }, [l])), L, w, A.visualElement))
                            });
                            return o[k] = s,
                                o
                        }(e(i, n))
                    }
                    if ("undefined" == typeof Proxy)
                        return i;
                    let n = new Map;
                    return new Proxy(i, {
                        get: (e, r) => (n.has(r) || n.set(r, i(r)),
                            n.get(r))
                    })
                }((e, i) => (function(e, {
                    forwardMotionProps: i = !1
                }, n, r) {
                    let s = R(e) ? tR : tB;
                    return {
                        ...s,
                        preloadedFeatures: n,
                        useRender: function(e = !1) {
                            let i = (i, n, r, s, {
                                latestValues: o
                            }, a) => {
                                let l = R(i) ? tx : tu,
                                    h = l(n, o, a, i),
                                    c = function(e, i, n) {
                                        let r = {};
                                        for (let s in e)
                                            ("values" !== s || "object" != typeof e.values) && (td(s) || !0 === n && tc(s) || !i && !tc(s) || e.draggable && s.startsWith("onDrag")) && (r[s] = e[s]);
                                        return r
                                    }(n, "string" == typeof i, e),
                                    d = {
                                        ...c,
                                        ...h,
                                        ref: s
                                    },
                                    {
                                        children: p
                                    } = n,
                                    m = (0,
                                        u.useMemo)(() => O(p) ? p.get() : p, [p]);
                                return r && (d["data-projection-id"] = r),
                                    (0,
                                        u.createElement)(i, {
                                        ...d,
                                        children: m
                                    })
                            };
                            return i
                        }(i),
                        createVisualElement: r,
                        Component: e
                    }
                })(e, i, rO, rj))
        },
        1741: function(e, i, n) {
            n.d(i, {
                j: function() {
                    return r
                }
            });
            let r = "undefined" != typeof document
        },
        6681: function(e, i, n) {
            n.d(i, {
                h: function() {
                    return s
                }
            });
            var r = n(5784);

            function s(e) {
                let i = (0,
                    r.useRef)(null);
                return null === i.current && (i.current = e()),
                    i.current
            }
        },
        8868: function(e, i, n) {
            n.d(i, {
                L: function() {
                    return o
                }
            });
            var r = n(5784),
                s = n(1741);
            let o = s.j ? r.useLayoutEffect : r.useEffect
        }
    }
]);