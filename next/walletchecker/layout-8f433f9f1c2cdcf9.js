(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[185], {
		7360: function (e, t, r) {
			Promise.resolve().then(r.bind(r, 8530))
		},
		8530: function (e, t, r) {
			"use strict";
			r.r(t),
				r.d(t, {
					default: function () {
						return c
					}
				});
			var o = r(1844),
				n = r(5784),
				l = r(1664),
				a = r.n(l);
			let u = () => (0,
					o.jsx)(a(), {
					href: "https://twitter.com/PaperducksNFT",
					target: "_blank",
					rel: "noreferrer",
					children: (0,
						o.jsx)("div", {
						className: "flex text-slate-900 text-xs mx-1 rounded-md py-2 px-2 my-1 hover:text-slate-100 cursor-pointer",
						children: (0,
							o.jsx)("svg", {
							className: "h-12 w-12 mx-auto cursor-pointer",
							fill: "currentColor",
							viewBox: "0 0 24 24",
							"aria-hidden": "true",
							children: (0,
								o.jsx)("path", {
								d: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
							})
						})
					})
				}),
				s = e => {
					let {
						navItems: t
					} = e, [r, l] = (0,
						n.useState)(!1), [s, c] = (0,
						n.useState)(!1); {
						let e = () => {
							window.scrollY >= 10 ? c(!0) : c(!1)
						};
						window.addEventListener("scroll", e)
					}
					return (0,
						o.jsx)("nav", {
						className: s ? "bg-[#FFCB5A] w-screen fixed top-0 z-20 border-b-2 border-black" : "bg-[#FFCB5A] w-screen fixed top-0 z-20 ",
						children: (0,
							o.jsx)("div", {
							className: "max-w-7xl mx-auto px-2 sm:px-6 lg:px-8",
							children: (0,
								o.jsxs)("div", {
								className: "flex items-center justify-between h-20",
								children: [(0,
									o.jsx)("div", {
									className: "flex-shrink-0",
									children: (0,
										o.jsx)(a(), {
										href: "/",
										children: (0,
											o.jsx)("div", {
											className: "text-slate-900 font-bold text-xl cursor-pointer",
											children: (0,
												o.jsx)("img", {
												src: "/logo.jpg",
												className: "w-20 mt-4 mb-4 rounded-full"
											})
										})
									})
								}), (0,
									o.jsxs)("div", {
									className: "flex",
									children: [(0,
										o.jsx)("div", {
										className: "ml-4 text-slate-900 flex items-center md:ml-6",
										children: t.map(e => (0,
											o.jsx)(a(), {
											href: e.href,
											children: (0,
												o.jsx)("div", {
												className: "px-3 cursor-pointer py-2 text-xl rounded-md text-sm font-medium text-slate-900 hover:bg-[#F2718D]",
												children: e.label
											})
										}, e.href))
									}), (0,
										o.jsx)(u, {})]
								})]
							})
						})
					})
				};
			var c = s
		},
		9959: function (e, t) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
					value: !0
				}),
				t.getDomainLocale = function (e, t, r, o) {
					return !1
				},
				("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
						value: !0
					}),
					Object.assign(t.default, t),
					e.exports = t.default)
		},
		4090: function (e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
					value: !0
				}),
				t.default = void 0;
			var o = r(2648).Z,
				n = r(7273).Z,
				l = o(r(5784)),
				a = r(3777),
				u = r(2962),
				s = r(5463),
				c = r(4825),
				i = r(2568),
				f = r(2127),
				d = r(9959),
				p = r(3795);
			let h = new Set;

			function v(e, t, r, o) {
				if (a.isLocalURL(t)) {
					if (!o.bypassPrefetchedCheck) {
						let n = void 0 !== o.locale ? o.locale : "locale" in e ? e.locale : void 0,
							l = t + "%" + r + "%" + n;
						if (h.has(l))
							return;
						h.add(l)
					}
					Promise.resolve(e.prefetch(t, r, o)).catch(e => {})
				}
			}

			function x(e) {
				return "string" == typeof e ? e : u.formatUrl(e)
			}
			let m = l.default.forwardRef(function (e, t) {
				let r, o;
				let {
					href: u,
					as: h,
					children: m,
					prefetch: y,
					passHref: b,
					replace: _,
					shallow: j,
					scroll: g,
					locale: C,
					onClick: w,
					onMouseEnter: k,
					onTouchStart: O,
					legacyBehavior: E = !1
				} = e, M = n(e, ["href", "as", "children", "prefetch", "passHref", "replace", "shallow", "scroll", "locale", "onClick", "onMouseEnter", "onTouchStart", "legacyBehavior"]);
				r = m,
					E && ("string" == typeof r || "number" == typeof r) && (r = l.default.createElement("a", null, r));
				let N = !1 !== y,
					P = l.default.useContext(c.RouterContext),
					R = l.default.useContext(i.AppRouterContext),
					S = null != P ? P : R,
					L = !P,
					{
						href: T,
						as: I
					} = l.default.useMemo(() => {
						if (!P) {
							let e = x(u);
							return {
								href: e,
								as: h ? x(h) : e
							}
						}
						let [e, t] = a.resolveHref(P, u, !0);
						return {
							href: e,
							as: h ? a.resolveHref(P, h) : t || e
						}
					}, [P, u, h]),
					A = l.default.useRef(T),
					F = l.default.useRef(I);
				E && (o = l.default.Children.only(r));
				let D = E ? o && "object" == typeof o && o.ref : t,
					[B, U, K] = f.useIntersection({
						rootMargin: "200px"
					}),
					z = l.default.useCallback(e => {
						(F.current !== I || A.current !== T) && (K(),
							F.current = I,
							A.current = T),
						B(e),
							D && ("function" == typeof D ? D(e) : "object" == typeof D && (D.current = e))
					}, [I, D, T, K, B]);
				l.default.useEffect(() => {
					S && U && N && v(S, T, I, {
						locale: C
					})
				}, [I, T, U, C, N, null == P ? void 0 : P.locale, S]);
				let H = {
					ref: z,
					onClick(e) {
						E || "function" != typeof w || w(e),
							E && o.props && "function" == typeof o.props.onClick && o.props.onClick(e),
							S && !e.defaultPrevented && function (e, t, r, o, n, u, s, c, i, f) {
								let {
									nodeName: d
								} = e.currentTarget, p = "A" === d.toUpperCase();
								if (p && (function (e) {
										let {
											target: t
										} = e.currentTarget;
										return t && "_self" !== t || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which
									}(e) || !a.isLocalURL(r)))
									return;
								e.preventDefault();
								let h = () => {
									"beforePopState" in t ? t[n ? "replace" : "push"](r, o, {
										shallow: u,
										locale: c,
										scroll: s
									}) : t[n ? "replace" : "push"](o || r, {
										forceOptimisticNavigation: !f
									})
								};
								i ? l.default.startTransition(h) : h()
							}(e, S, T, I, _, j, g, C, L, N)
					},
					onMouseEnter(e) {
						E || "function" != typeof k || k(e),
							E && o.props && "function" == typeof o.props.onMouseEnter && o.props.onMouseEnter(e),
							S && (N || !L) && v(S, T, I, {
								locale: C,
								priority: !0,
								bypassPrefetchedCheck: !0
							})
					},
					onTouchStart(e) {
						E || "function" != typeof O || O(e),
							E && o.props && "function" == typeof o.props.onTouchStart && o.props.onTouchStart(e),
							S && (N || !L) && v(S, T, I, {
								locale: C,
								priority: !0,
								bypassPrefetchedCheck: !0
							})
					}
				};
				if (!E || b || "a" === o.type && !("href" in o.props)) {
					let e = void 0 !== C ? C : null == P ? void 0 : P.locale,
						t = (null == P ? void 0 : P.isLocaleDomain) && d.getDomainLocale(I, e, null == P ? void 0 : P.locales, null == P ? void 0 : P.domainLocales);
					H.href = t || p.addBasePath(s.addLocale(I, e, null == P ? void 0 : P.defaultLocale))
				}
				return E ? l.default.cloneElement(o, H) : l.default.createElement("a", Object.assign({}, M, H), r)
			});
			t.default = m,
				("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
						value: !0
					}),
					Object.assign(t.default, t),
					e.exports = t.default)
		},
		2127: function (e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
					value: !0
				}),
				t.useIntersection = function (e) {
					let {
						rootRef: t,
						rootMargin: r,
						disabled: s
					} = e, c = s || !l, [i, f] = o.useState(!1), d = o.useRef(null), p = o.useCallback(e => {
						d.current = e
					}, []);
					o.useEffect(() => {
						if (l) {
							if (c || i)
								return;
							let e = d.current;
							if (e && e.tagName) {
								let o = function (e, t, r) {
									let {
										id: o,
										observer: n,
										elements: l
									} = function (e) {
										let t;
										let r = {
												root: e.root || null,
												margin: e.rootMargin || ""
											},
											o = u.find(e => e.root === r.root && e.margin === r.margin);
										if (o && (t = a.get(o)))
											return t;
										let n = new Map,
											l = new IntersectionObserver(e => {
												e.forEach(e => {
													let t = n.get(e.target),
														r = e.isIntersecting || e.intersectionRatio > 0;
													t && r && t(r)
												})
											}, e);
										return t = {
												id: r,
												observer: l,
												elements: n
											},
											u.push(r),
											a.set(r, t),
											t
									}(r);
									return l.set(e, t),
										n.observe(e),
										function () {
											if (l.delete(e),
												n.unobserve(e),
												0 === l.size) {
												n.disconnect(),
													a.delete(o);
												let e = u.findIndex(e => e.root === o.root && e.margin === o.margin);
												e > -1 && u.splice(e, 1)
											}
										}
								}(e, e => e && f(e), {
									root: null == t ? void 0 : t.current,
									rootMargin: r
								});
								return o
							}
						} else if (!i) {
							let e = n.requestIdleCallback(() => f(!0));
							return () => n.cancelIdleCallback(e)
						}
					}, [c, r, t, i, d.current]);
					let h = o.useCallback(() => {
						f(!1)
					}, []);
					return [p, i, h]
				};
			var o = r(5784),
				n = r(672);
			let l = "function" == typeof IntersectionObserver,
				a = new Map,
				u = [];
			("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
					value: !0
				}),
				Object.assign(t.default, t),
				e.exports = t.default)
		},
		4825: function (e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
					value: !0
				}),
				t.RouterContext = void 0;
			var o = (0,
				r(2648).Z)(r(5784));
			let n = o.default.createContext(null);
			t.RouterContext = n
		},
		9803: function (e, t, r) {
			"use strict";
			/**
			 * @license React
			 * react-jsx-runtime.production.min.js
			 *
			 * Copyright (c) Meta Platforms, Inc. and affiliates.
			 *
			 * This source code is licensed under the MIT license found in the
			 * LICENSE file in the root directory of this source tree.
			 */
			var o = r(5784),
				n = Symbol.for("react.element"),
				l = Symbol.for("react.fragment"),
				a = Object.prototype.hasOwnProperty,
				u = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
				s = {
					key: !0,
					ref: !0,
					__self: !0,
					__source: !0
				};

			function c(e, t, r) {
				var o, l = {},
					c = null,
					i = null;
				for (o in void 0 !== r && (c = "" + r),
					void 0 !== t.key && (c = "" + t.key),
					void 0 !== t.ref && (i = t.ref),
					t)
					a.call(t, o) && !s.hasOwnProperty(o) && (l[o] = t[o]);
				if (e && e.defaultProps)
					for (o in t = e.defaultProps)
						void 0 === l[o] && (l[o] = t[o]);
				return {
					$$typeof: n,
					type: e,
					key: c,
					ref: i,
					props: l,
					_owner: u.current
				}
			}
			t.Fragment = l,
				t.jsx = c,
				t.jsxs = c
		},
		1844: function (e, t, r) {
			"use strict";
			e.exports = r(9803)
		},
		1664: function (e, t, r) {
			e.exports = r(4090)
		}
	},
	function (e) {
		e.O(0, [17, 744], function () {
				return e(e.s = 7360)
			}),
			_N_E = e.O()
	}
]);