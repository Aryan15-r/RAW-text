"use strict";
(globalThis.webpackChunk_N_E = globalThis.webpackChunk_N_E || []).push([
  [343],
  {
    58: (e, t, n) => {
      n.d(t, { A: () => r });
      let r = (0, n(6203).A)("ChevronDown", [
        ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
      ]);
    },
    1097: (e, t, n) => {
      n.d(t, { A: () => p });
      var r = n(5375),
        o = n(3981),
        i = n.t(o, 2),
        l = n(2571),
        a = i["use".trim()],
        c = n(599),
        u = n(7657),
        s = n(893),
        f = n(2057),
        d = n(4871);
      function p(e) {
        let {
          Link: t,
          config: n,
          getPathname: i,
          ...p
        } = (function (e, t) {
          var n, i, l;
          let d = {
              ...(n = t || {}),
              localePrefix:
                "object" == typeof (l = n.localePrefix)
                  ? l
                  : { mode: l || "always" },
              localeCookie: !!((i = n.localeCookie) ?? 1) && {
                name: "NEXT_LOCALE",
                sameSite: "lax",
                ...("object" == typeof i && i),
              },
              localeDetection: n.localeDetection ?? !0,
              alternateLinks: n.alternateLinks ?? !0,
            },
            p = d.pathnames,
            h = (0, o.forwardRef)(function ({ href: t, locale: n, ...r }, o) {
              let i, l;
              "object" == typeof t
                ? ((i = t.pathname), (l = t.params))
                : (i = t);
              let s = (0, c._x)(t),
                h = e(),
                v = (0, c.yL)(h) ? a(h) : h,
                g = s
                  ? m({
                      locale: n || v,
                      href: null == p ? i : { pathname: i, params: l },
                      forcePrefix: null != n || void 0,
                    })
                  : i;
              return (0, f.jsx)(u.default, {
                ref: o,
                href: "object" == typeof t ? { ...t, pathname: g } : g,
                locale: n,
                localeCookie: d.localeCookie,
                ...r,
              });
            });
          function m(e) {
            let t,
              { forcePrefix: n, href: r, locale: o } = e;
            return (
              null == p
                ? "object" == typeof r
                  ? ((t = r.pathname), r.query && (t += (0, s.Zn)(r.query)))
                  : (t = r)
                : (t = (0, s.FP)({
                    locale: o,
                    ...(0, s.TK)(r),
                    pathnames: d.pathnames,
                  })),
              (0, s.x3)(t, o, d, n)
            );
          }
          function v(e) {
            return function (t, ...n) {
              return e(m(t), ...n);
            };
          }
          return {
            config: d,
            Link: h,
            redirect: v(r.redirect),
            permanentRedirect: v(r.permanentRedirect),
            getPathname: m,
          };
        })(l.Ym, e);
        return {
          ...p,
          Link: t,
          usePathname: function () {
            let e = (function (e) {
                let t = (0, r.usePathname)(),
                  n = (0, l.Ym)();
                return (0, o.useMemo)(() => {
                  if (!t) return t;
                  let r = t,
                    o = (0, c.XP)(n, e.localePrefix);
                  if ((0, c.wO)(o, t)) r = (0, c.MY)(t, o);
                  else if (
                    "never" !== e.localePrefix.mode &&
                    e.localePrefix.prefixes
                  ) {
                    let e = (0, c.bL)(n);
                    (0, c.wO)(e, t) && (r = (0, c.MY)(t, e));
                  }
                  return r;
                }, [e.localePrefix, n, t]);
              })(n),
              t = (0, l.Ym)();
            return (0, o.useMemo)(
              () => (e && n.pathnames ? (0, s.aM)(t, e, n.pathnames) : e),
              [t, e],
            );
          },
          useRouter: function () {
            let e = (0, r.useRouter)(),
              t = (0, l.Ym)(),
              a = (0, r.usePathname)();
            return (0, o.useMemo)(() => {
              function r(e) {
                return function (r, o) {
                  let { locale: l, ...c } = o || {},
                    u = [
                      i({
                        href: r,
                        locale: l || t,
                        forcePrefix: null != l || void 0,
                      }),
                    ];
                  (Object.keys(c).length > 0 && u.push(c),
                    (0, d.A)(n.localeCookie, a, t, l),
                    e(...u));
                };
              }
              return {
                ...e,
                push: r(e.push),
                replace: r(e.replace),
                prefetch: r(e.prefetch),
              };
            }, [t, a, e]);
          },
          getPathname: i,
        };
      }
    },
    2581: (e, t, n) => {
      n.d(t, { A: () => r });
      let r = (0, n(6203).A)("Shield", [
        [
          "path",
          {
            d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
            key: "oel41y",
          },
        ],
      ]);
    },
    2658: (e, t, n) => {
      n.d(t, { A: () => r });
      let r = (0, n(6203).A)("Sun", [
        ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
        ["path", { d: "M12 2v2", key: "tus03m" }],
        ["path", { d: "M12 20v2", key: "1lh1kg" }],
        ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
        ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
        ["path", { d: "M2 12h2", key: "1t8f8n" }],
        ["path", { d: "M20 12h2", key: "1q8mjw" }],
        ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
        ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }],
      ]);
    },
    4085: (e, t, n) => {
      n.d(t, { A: () => r });
      let r = (0, n(6203).A)("Globe", [
        ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
        [
          "path",
          {
            d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",
            key: "13o1zl",
          },
        ],
        ["path", { d: "M2 12h20", key: "9i4pu4" }],
      ]);
    },
    7491: (e, t, n) => {
      n.d(t, { A: () => r });
      function r(e) {
        return e;
      }
    },
    7916: (e, t, n) => {
      n.d(t, { A: () => r });
      let r = (0, n(6203).A)("Check", [
        ["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }],
      ]);
    },
    8231: (e, t, n) => {
      n.d(t, {
        UC: () => rt,
        In: () => n8,
        q7: () => rr,
        VF: () => ri,
        p4: () => ro,
        ZL: () => re,
        bL: () => n4,
        wn: () => ra,
        PP: () => rl,
        l9: () => n7,
        WT: () => n9,
        LM: () => rn,
      });
      var r,
        o = n(3981),
        i = n.t(o, 2),
        l = n(1760);
      function a(e, [t, n]) {
        return Math.min(n, Math.max(t, e));
      }
      var c = n(733),
        u = n(8617),
        s = n(4057),
        f = n(2233),
        d = n(2057),
        p = o.createContext(void 0),
        h = n(6238),
        m = 0;
      function v() {
        let e = document.createElement("span");
        return (
          e.setAttribute("data-radix-focus-guard", ""),
          (e.tabIndex = 0),
          (e.style.outline = "none"),
          (e.style.opacity = "0"),
          (e.style.position = "fixed"),
          (e.style.pointerEvents = "none"),
          e
        );
      }
      var g = n(6573),
        y = n(598),
        w = "focusScope.autoFocusOnMount",
        x = "focusScope.autoFocusOnUnmount",
        b = { bubbles: !1, cancelable: !0 },
        S = o.forwardRef((e, t) => {
          let {
              loop: n = !1,
              trapped: r = !1,
              onMountAutoFocus: i,
              onUnmountAutoFocus: l,
              ...a
            } = e,
            [c, u] = o.useState(null),
            f = (0, y.c)(i),
            p = (0, y.c)(l),
            h = o.useRef(null),
            m = (0, s.s)(t, (e) => u(e)),
            v = o.useRef({
              paused: !1,
              pause() {
                this.paused = !0;
              },
              resume() {
                this.paused = !1;
              },
            }).current;
          (o.useEffect(() => {
            if (r) {
              let e = function (e) {
                  if (v.paused || !c) return;
                  let t = e.target;
                  c.contains(t)
                    ? (h.current = t)
                    : R(h.current, { select: !0 });
                },
                t = function (e) {
                  if (v.paused || !c) return;
                  let t = e.relatedTarget;
                  null === t || c.contains(t) || R(h.current, { select: !0 });
                };
              (document.addEventListener("focusin", e),
                document.addEventListener("focusout", t));
              let n = new MutationObserver(function (e) {
                if (document.activeElement === document.body)
                  for (let t of e) t.removedNodes.length > 0 && R(c);
              });
              return (
                c && n.observe(c, { childList: !0, subtree: !0 }),
                () => {
                  (document.removeEventListener("focusin", e),
                    document.removeEventListener("focusout", t),
                    n.disconnect());
                }
              );
            }
          }, [r, c, v.paused]),
            o.useEffect(() => {
              if (c) {
                A.add(v);
                let e = document.activeElement;
                if (!c.contains(e)) {
                  let t = new CustomEvent(w, b);
                  (c.addEventListener(w, f),
                    c.dispatchEvent(t),
                    t.defaultPrevented ||
                      ((function (e) {
                        let { select: t = !1 } =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : {},
                          n = document.activeElement;
                        for (let r of e)
                          if (
                            (R(r, { select: t }), document.activeElement !== n)
                          )
                            return;
                      })(
                        E(c).filter((e) => "A" !== e.tagName),
                        { select: !0 },
                      ),
                      document.activeElement === e && R(c)));
                }
                return () => {
                  (c.removeEventListener(w, f),
                    setTimeout(() => {
                      let t = new CustomEvent(x, b);
                      (c.addEventListener(x, p),
                        c.dispatchEvent(t),
                        t.defaultPrevented ||
                          R(e ?? document.body, { select: !0 }),
                        c.removeEventListener(x, p),
                        A.remove(v));
                    }, 0));
                };
              }
            }, [c, f, p, v]));
          let S = o.useCallback(
            (e) => {
              if ((!n && !r) || v.paused) return;
              let t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
                o = document.activeElement;
              if (t && o) {
                let t = e.currentTarget,
                  [r, i] = (function (e) {
                    let t = E(e);
                    return [C(t, e), C(t.reverse(), e)];
                  })(t);
                r && i
                  ? e.shiftKey || o !== i
                    ? e.shiftKey &&
                      o === r &&
                      (e.preventDefault(), n && R(i, { select: !0 }))
                    : (e.preventDefault(), n && R(r, { select: !0 }))
                  : o === t && e.preventDefault();
              }
            },
            [n, r, v.paused],
          );
          return (0, d.jsx)(g.sG.div, {
            tabIndex: -1,
            ...a,
            ref: m,
            onKeyDown: S,
          });
        });
      function E(e) {
        let t = [],
          n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: (e) => {
              let t = "INPUT" === e.tagName && "hidden" === e.type;
              return e.disabled || e.hidden || t
                ? NodeFilter.FILTER_SKIP
                : e.tabIndex >= 0
                  ? NodeFilter.FILTER_ACCEPT
                  : NodeFilter.FILTER_SKIP;
            },
          });
        for (; n.nextNode(); ) t.push(n.currentNode);
        return t;
      }
      function C(e, t) {
        for (let n of e)
          if (
            !(function (e, t) {
              let { upTo: n } = t;
              if ("hidden" === getComputedStyle(e).visibility) return !0;
              for (; e && (void 0 === n || e !== n); ) {
                if ("none" === getComputedStyle(e).display) return !0;
                e = e.parentElement;
              }
              return !1;
            })(n, { upTo: t })
          )
            return n;
      }
      function R(e) {
        let { select: t = !1 } =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (e && e.focus) {
          var n;
          let r = document.activeElement;
          (e.focus({ preventScroll: !0 }),
            e !== r &&
              (n = e) instanceof HTMLInputElement &&
              "select" in n &&
              t &&
              e.select());
        }
      }
      S.displayName = "FocusScope";
      var A = (function () {
        let e = [];
        return {
          add(t) {
            let n = e[0];
            (t !== n && n?.pause(), (e = k(e, t)).unshift(t));
          },
          remove(t) {
            ((e = k(e, t)), e[0]?.resume());
          },
        };
      })();
      function k(e, t) {
        let n = [...e],
          r = n.indexOf(t);
        return (-1 !== r && n.splice(r, 1), n);
      }
      var T = n(8530),
        P = i["useId".toString()] || (() => void 0),
        L = 0;
      function M(e) {
        let [t, n] = o.useState(P());
        return (
          (0, T.N)(() => {
            e || n((e) => e ?? String(L++));
          }, [e]),
          e || (t ? `radix-${t}` : "")
        );
      }
      let N = ["top", "right", "bottom", "left"],
        j = Math.min,
        O = Math.max,
        D = Math.round,
        I = Math.floor,
        F = (e) => ({ x: e, y: e }),
        H = { left: "right", right: "left", bottom: "top", top: "bottom" },
        W = { start: "end", end: "start" };
      function B(e, t) {
        return "function" == typeof e ? e(t) : e;
      }
      function _(e) {
        return e.split("-")[0];
      }
      function V(e) {
        return e.split("-")[1];
      }
      function z(e) {
        return "x" === e ? "y" : "x";
      }
      function K(e) {
        return "y" === e ? "height" : "width";
      }
      let Y = new Set(["top", "bottom"]);
      function G(e) {
        return Y.has(_(e)) ? "y" : "x";
      }
      function X(e) {
        return e.replace(/start|end/g, (e) => W[e]);
      }
      let $ = ["left", "right"],
        q = ["right", "left"],
        U = ["top", "bottom"],
        Z = ["bottom", "top"];
      function J(e) {
        return e.replace(/left|right|bottom|top/g, (e) => H[e]);
      }
      function Q(e) {
        return "number" != typeof e
          ? { top: 0, right: 0, bottom: 0, left: 0, ...e }
          : { top: e, right: e, bottom: e, left: e };
      }
      function ee(e) {
        let { x: t, y: n, width: r, height: o } = e;
        return {
          width: r,
          height: o,
          top: n,
          left: t,
          right: t + r,
          bottom: n + o,
          x: t,
          y: n,
        };
      }
      function et(e, t, n) {
        let r,
          { reference: o, floating: i } = e,
          l = G(t),
          a = z(G(t)),
          c = K(a),
          u = _(t),
          s = "y" === l,
          f = o.x + o.width / 2 - i.width / 2,
          d = o.y + o.height / 2 - i.height / 2,
          p = o[c] / 2 - i[c] / 2;
        switch (u) {
          case "top":
            r = { x: f, y: o.y - i.height };
            break;
          case "bottom":
            r = { x: f, y: o.y + o.height };
            break;
          case "right":
            r = { x: o.x + o.width, y: d };
            break;
          case "left":
            r = { x: o.x - i.width, y: d };
            break;
          default:
            r = { x: o.x, y: o.y };
        }
        switch (V(t)) {
          case "start":
            r[a] -= p * (n && s ? -1 : 1);
            break;
          case "end":
            r[a] += p * (n && s ? -1 : 1);
        }
        return r;
      }
      let en = async (e, t, n) => {
        let {
            placement: r = "bottom",
            strategy: o = "absolute",
            middleware: i = [],
            platform: l,
          } = n,
          a = i.filter(Boolean),
          c = await (null == l.isRTL ? void 0 : l.isRTL(t)),
          u = await l.getElementRects({
            reference: e,
            floating: t,
            strategy: o,
          }),
          { x: s, y: f } = et(u, r, c),
          d = r,
          p = {},
          h = 0;
        for (let n = 0; n < a.length; n++) {
          let { name: i, fn: m } = a[n],
            {
              x: v,
              y: g,
              data: y,
              reset: w,
            } = await m({
              x: s,
              y: f,
              initialPlacement: r,
              placement: d,
              strategy: o,
              middlewareData: p,
              rects: u,
              platform: l,
              elements: { reference: e, floating: t },
            });
          ((s = null != v ? v : s),
            (f = null != g ? g : f),
            (p = { ...p, [i]: { ...p[i], ...y } }),
            w &&
              h <= 50 &&
              (h++,
              "object" == typeof w &&
                (w.placement && (d = w.placement),
                w.rects &&
                  (u =
                    !0 === w.rects
                      ? await l.getElementRects({
                          reference: e,
                          floating: t,
                          strategy: o,
                        })
                      : w.rects),
                ({ x: s, y: f } = et(u, d, c))),
              (n = -1)));
        }
        return { x: s, y: f, placement: d, strategy: o, middlewareData: p };
      };
      async function er(e, t) {
        var n;
        void 0 === t && (t = {});
        let { x: r, y: o, platform: i, rects: l, elements: a, strategy: c } = e,
          {
            boundary: u = "clippingAncestors",
            rootBoundary: s = "viewport",
            elementContext: f = "floating",
            altBoundary: d = !1,
            padding: p = 0,
          } = B(t, e),
          h = Q(p),
          m = a[d ? ("floating" === f ? "reference" : "floating") : f],
          v = ee(
            await i.getClippingRect({
              element:
                null ==
                  (n = await (null == i.isElement ? void 0 : i.isElement(m))) ||
                n
                  ? m
                  : m.contextElement ||
                    (await (null == i.getDocumentElement
                      ? void 0
                      : i.getDocumentElement(a.floating))),
              boundary: u,
              rootBoundary: s,
              strategy: c,
            }),
          ),
          g =
            "floating" === f
              ? {
                  x: r,
                  y: o,
                  width: l.floating.width,
                  height: l.floating.height,
                }
              : l.reference,
          y = await (null == i.getOffsetParent
            ? void 0
            : i.getOffsetParent(a.floating)),
          w = ((await (null == i.isElement ? void 0 : i.isElement(y))) &&
            (await (null == i.getScale ? void 0 : i.getScale(y)))) || {
            x: 1,
            y: 1,
          },
          x = ee(
            i.convertOffsetParentRelativeRectToViewportRelativeRect
              ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
                  elements: a,
                  rect: g,
                  offsetParent: y,
                  strategy: c,
                })
              : g,
          );
        return {
          top: (v.top - x.top + h.top) / w.y,
          bottom: (x.bottom - v.bottom + h.bottom) / w.y,
          left: (v.left - x.left + h.left) / w.x,
          right: (x.right - v.right + h.right) / w.x,
        };
      }
      function eo(e, t) {
        return {
          top: e.top - t.height,
          right: e.right - t.width,
          bottom: e.bottom - t.height,
          left: e.left - t.width,
        };
      }
      function ei(e) {
        return N.some((t) => e[t] >= 0);
      }
      let el = new Set(["left", "top"]);
      async function ea(e, t) {
        let { placement: n, platform: r, elements: o } = e,
          i = await (null == r.isRTL ? void 0 : r.isRTL(o.floating)),
          l = _(n),
          a = V(n),
          c = "y" === G(n),
          u = el.has(l) ? -1 : 1,
          s = i && c ? -1 : 1,
          f = B(t, e),
          {
            mainAxis: d,
            crossAxis: p,
            alignmentAxis: h,
          } = "number" == typeof f
            ? { mainAxis: f, crossAxis: 0, alignmentAxis: null }
            : {
                mainAxis: f.mainAxis || 0,
                crossAxis: f.crossAxis || 0,
                alignmentAxis: f.alignmentAxis,
              };
        return (
          a && "number" == typeof h && (p = "end" === a ? -+h : h),
          c ? { x: p * s, y: d * u } : { x: d * u, y: p * s }
        );
      }
      function ec() {
        return "undefined" != typeof window;
      }
      function eu(e) {
        return ed(e) ? (e.nodeName || "").toLowerCase() : "#document";
      }
      function es(e) {
        var t;
        return (
          (null == e || null == (t = e.ownerDocument)
            ? void 0
            : t.defaultView) || window
        );
      }
      function ef(e) {
        var t;
        return null ==
          (t = (ed(e) ? e.ownerDocument : e.document) || window.document)
          ? void 0
          : t.documentElement;
      }
      function ed(e) {
        return !!ec() && (e instanceof Node || e instanceof es(e).Node);
      }
      function ep(e) {
        return !!ec() && (e instanceof Element || e instanceof es(e).Element);
      }
      function eh(e) {
        return (
          !!ec() && (e instanceof HTMLElement || e instanceof es(e).HTMLElement)
        );
      }
      function em(e) {
        return (
          !!ec() &&
          "undefined" != typeof ShadowRoot &&
          (e instanceof ShadowRoot || e instanceof es(e).ShadowRoot)
        );
      }
      let ev = new Set(["inline", "contents"]);
      function eg(e) {
        let { overflow: t, overflowX: n, overflowY: r, display: o } = eT(e);
        return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !ev.has(o);
      }
      let ey = new Set(["table", "td", "th"]),
        ew = [":popover-open", ":modal"];
      function ex(e) {
        return ew.some((t) => {
          try {
            return e.matches(t);
          } catch (e) {
            return !1;
          }
        });
      }
      let eb = ["transform", "translate", "scale", "rotate", "perspective"],
        eS = [
          "transform",
          "translate",
          "scale",
          "rotate",
          "perspective",
          "filter",
        ],
        eE = ["paint", "layout", "strict", "content"];
      function eC(e) {
        let t = eR(),
          n = ep(e) ? eT(e) : e;
        return (
          eb.some((e) => !!n[e] && "none" !== n[e]) ||
          (!!n.containerType && "normal" !== n.containerType) ||
          (!t && !!n.backdropFilter && "none" !== n.backdropFilter) ||
          (!t && !!n.filter && "none" !== n.filter) ||
          eS.some((e) => (n.willChange || "").includes(e)) ||
          eE.some((e) => (n.contain || "").includes(e))
        );
      }
      function eR() {
        return (
          "undefined" != typeof CSS &&
          !!CSS.supports &&
          CSS.supports("-webkit-backdrop-filter", "none")
        );
      }
      let eA = new Set(["html", "body", "#document"]);
      function ek(e) {
        return eA.has(eu(e));
      }
      function eT(e) {
        return es(e).getComputedStyle(e);
      }
      function eP(e) {
        return ep(e)
          ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
          : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
      }
      function eL(e) {
        if ("html" === eu(e)) return e;
        let t = e.assignedSlot || e.parentNode || (em(e) && e.host) || ef(e);
        return em(t) ? t.host : t;
      }
      function eM(e, t, n) {
        var r;
        (void 0 === t && (t = []), void 0 === n && (n = !0));
        let o = (function e(t) {
            let n = eL(t);
            return ek(n)
              ? t.ownerDocument
                ? t.ownerDocument.body
                : t.body
              : eh(n) && eg(n)
                ? n
                : e(n);
          })(e),
          i = o === (null == (r = e.ownerDocument) ? void 0 : r.body),
          l = es(o);
        if (i) {
          let e = eN(l);
          return t.concat(
            l,
            l.visualViewport || [],
            eg(o) ? o : [],
            e && n ? eM(e) : [],
          );
        }
        return t.concat(o, eM(o, [], n));
      }
      function eN(e) {
        return e.parent && Object.getPrototypeOf(e.parent)
          ? e.frameElement
          : null;
      }
      function ej(e) {
        let t = eT(e),
          n = parseFloat(t.width) || 0,
          r = parseFloat(t.height) || 0,
          o = eh(e),
          i = o ? e.offsetWidth : n,
          l = o ? e.offsetHeight : r,
          a = D(n) !== i || D(r) !== l;
        return (a && ((n = i), (r = l)), { width: n, height: r, $: a });
      }
      function eO(e) {
        return ep(e) ? e : e.contextElement;
      }
      function eD(e) {
        let t = eO(e);
        if (!eh(t)) return F(1);
        let n = t.getBoundingClientRect(),
          { width: r, height: o, $: i } = ej(t),
          l = (i ? D(n.width) : n.width) / r,
          a = (i ? D(n.height) : n.height) / o;
        return (
          (l && Number.isFinite(l)) || (l = 1),
          (a && Number.isFinite(a)) || (a = 1),
          { x: l, y: a }
        );
      }
      let eI = F(0);
      function eF(e) {
        let t = es(e);
        return eR() && t.visualViewport
          ? { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop }
          : eI;
      }
      function eH(e, t, n, r) {
        var o;
        (void 0 === t && (t = !1), void 0 === n && (n = !1));
        let i = e.getBoundingClientRect(),
          l = eO(e),
          a = F(1);
        t && (r ? ep(r) && (a = eD(r)) : (a = eD(e)));
        let c = (void 0 === (o = n) && (o = !1), r && (!o || r === es(l)) && o)
            ? eF(l)
            : F(0),
          u = (i.left + c.x) / a.x,
          s = (i.top + c.y) / a.y,
          f = i.width / a.x,
          d = i.height / a.y;
        if (l) {
          let e = es(l),
            t = r && ep(r) ? es(r) : r,
            n = e,
            o = eN(n);
          for (; o && r && t !== n; ) {
            let e = eD(o),
              t = o.getBoundingClientRect(),
              r = eT(o),
              i = t.left + (o.clientLeft + parseFloat(r.paddingLeft)) * e.x,
              l = t.top + (o.clientTop + parseFloat(r.paddingTop)) * e.y;
            ((u *= e.x),
              (s *= e.y),
              (f *= e.x),
              (d *= e.y),
              (u += i),
              (s += l),
              (o = eN((n = es(o)))));
          }
        }
        return ee({ width: f, height: d, x: u, y: s });
      }
      function eW(e, t) {
        let n = eP(e).scrollLeft;
        return t ? t.left + n : eH(ef(e)).left + n;
      }
      function eB(e, t) {
        let n = e.getBoundingClientRect();
        return { x: n.left + t.scrollLeft - eW(e, n), y: n.top + t.scrollTop };
      }
      let e_ = new Set(["absolute", "fixed"]);
      function eV(e, t, n) {
        let r;
        if ("viewport" === t)
          r = (function (e, t) {
            let n = es(e),
              r = ef(e),
              o = n.visualViewport,
              i = r.clientWidth,
              l = r.clientHeight,
              a = 0,
              c = 0;
            if (o) {
              ((i = o.width), (l = o.height));
              let e = eR();
              (!e || (e && "fixed" === t)) &&
                ((a = o.offsetLeft), (c = o.offsetTop));
            }
            let u = eW(r);
            if (u <= 0) {
              let e = r.ownerDocument,
                t = e.body,
                n = getComputedStyle(t),
                o =
                  ("CSS1Compat" === e.compatMode &&
                    parseFloat(n.marginLeft) + parseFloat(n.marginRight)) ||
                  0,
                l = Math.abs(r.clientWidth - t.clientWidth - o);
              l <= 25 && (i -= l);
            } else u <= 25 && (i += u);
            return { width: i, height: l, x: a, y: c };
          })(e, n);
        else if ("document" === t)
          r = (function (e) {
            let t = ef(e),
              n = eP(e),
              r = e.ownerDocument.body,
              o = O(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
              i = O(
                t.scrollHeight,
                t.clientHeight,
                r.scrollHeight,
                r.clientHeight,
              ),
              l = -n.scrollLeft + eW(e),
              a = -n.scrollTop;
            return (
              "rtl" === eT(r).direction &&
                (l += O(t.clientWidth, r.clientWidth) - o),
              { width: o, height: i, x: l, y: a }
            );
          })(ef(e));
        else if (ep(t))
          r = (function (e, t) {
            let n = eH(e, !0, "fixed" === t),
              r = n.top + e.clientTop,
              o = n.left + e.clientLeft,
              i = eh(e) ? eD(e) : F(1),
              l = e.clientWidth * i.x,
              a = e.clientHeight * i.y;
            return { width: l, height: a, x: o * i.x, y: r * i.y };
          })(t, n);
        else {
          let n = eF(e);
          r = { x: t.x - n.x, y: t.y - n.y, width: t.width, height: t.height };
        }
        return ee(r);
      }
      function ez(e) {
        return "static" === eT(e).position;
      }
      function eK(e, t) {
        if (!eh(e) || "fixed" === eT(e).position) return null;
        if (t) return t(e);
        let n = e.offsetParent;
        return (ef(e) === n && (n = n.ownerDocument.body), n);
      }
      function eY(e, t) {
        var n;
        let r = es(e);
        if (ex(e)) return r;
        if (!eh(e)) {
          let t = eL(e);
          for (; t && !ek(t); ) {
            if (ep(t) && !ez(t)) return t;
            t = eL(t);
          }
          return r;
        }
        let o = eK(e, t);
        for (; o && ((n = o), ey.has(eu(n))) && ez(o); ) o = eK(o, t);
        return o && ek(o) && ez(o) && !eC(o)
          ? r
          : o ||
              (function (e) {
                let t = eL(e);
                for (; eh(t) && !ek(t); ) {
                  if (eC(t)) return t;
                  if (ex(t)) break;
                  t = eL(t);
                }
                return null;
              })(e) ||
              r;
      }
      let eG = async function (e) {
          let t = this.getOffsetParent || eY,
            n = this.getDimensions,
            r = await n(e.floating);
          return {
            reference: (function (e, t, n) {
              let r = eh(t),
                o = ef(t),
                i = "fixed" === n,
                l = eH(e, !0, i, t),
                a = { scrollLeft: 0, scrollTop: 0 },
                c = F(0);
              if (r || (!r && !i))
                if ((("body" !== eu(t) || eg(o)) && (a = eP(t)), r)) {
                  let e = eH(t, !0, i, t);
                  ((c.x = e.x + t.clientLeft), (c.y = e.y + t.clientTop));
                } else o && (c.x = eW(o));
              i && !r && o && (c.x = eW(o));
              let u = !o || r || i ? F(0) : eB(o, a);
              return {
                x: l.left + a.scrollLeft - c.x - u.x,
                y: l.top + a.scrollTop - c.y - u.y,
                width: l.width,
                height: l.height,
              };
            })(e.reference, await t(e.floating), e.strategy),
            floating: { x: 0, y: 0, width: r.width, height: r.height },
          };
        },
        eX = {
          convertOffsetParentRelativeRectToViewportRelativeRect: function (e) {
            let { elements: t, rect: n, offsetParent: r, strategy: o } = e,
              i = "fixed" === o,
              l = ef(r),
              a = !!t && ex(t.floating);
            if (r === l || (a && i)) return n;
            let c = { scrollLeft: 0, scrollTop: 0 },
              u = F(1),
              s = F(0),
              f = eh(r);
            if (
              (f || (!f && !i)) &&
              (("body" !== eu(r) || eg(l)) && (c = eP(r)), eh(r))
            ) {
              let e = eH(r);
              ((u = eD(r)),
                (s.x = e.x + r.clientLeft),
                (s.y = e.y + r.clientTop));
            }
            let d = !l || f || i ? F(0) : eB(l, c);
            return {
              width: n.width * u.x,
              height: n.height * u.y,
              x: n.x * u.x - c.scrollLeft * u.x + s.x + d.x,
              y: n.y * u.y - c.scrollTop * u.y + s.y + d.y,
            };
          },
          getDocumentElement: ef,
          getClippingRect: function (e) {
            let { element: t, boundary: n, rootBoundary: r, strategy: o } = e,
              i = [
                ...("clippingAncestors" === n
                  ? ex(t)
                    ? []
                    : (function (e, t) {
                        let n = t.get(e);
                        if (n) return n;
                        let r = eM(e, [], !1).filter(
                            (e) => ep(e) && "body" !== eu(e),
                          ),
                          o = null,
                          i = "fixed" === eT(e).position,
                          l = i ? eL(e) : e;
                        for (; ep(l) && !ek(l); ) {
                          let t = eT(l),
                            n = eC(l);
                          (n || "fixed" !== t.position || (o = null),
                            (
                              i
                                ? !n && !o
                                : (!n &&
                                    "static" === t.position &&
                                    !!o &&
                                    e_.has(o.position)) ||
                                  (eg(l) &&
                                    !n &&
                                    (function e(t, n) {
                                      let r = eL(t);
                                      return (
                                        !(r === n || !ep(r) || ek(r)) &&
                                        ("fixed" === eT(r).position || e(r, n))
                                      );
                                    })(e, l))
                            )
                              ? (r = r.filter((e) => e !== l))
                              : (o = t),
                            (l = eL(l)));
                        }
                        return (t.set(e, r), r);
                      })(t, this._c)
                  : [].concat(n)),
                r,
              ],
              l = i[0],
              a = i.reduce(
                (e, n) => {
                  let r = eV(t, n, o);
                  return (
                    (e.top = O(r.top, e.top)),
                    (e.right = j(r.right, e.right)),
                    (e.bottom = j(r.bottom, e.bottom)),
                    (e.left = O(r.left, e.left)),
                    e
                  );
                },
                eV(t, l, o),
              );
            return {
              width: a.right - a.left,
              height: a.bottom - a.top,
              x: a.left,
              y: a.top,
            };
          },
          getOffsetParent: eY,
          getElementRects: eG,
          getClientRects: function (e) {
            return Array.from(e.getClientRects());
          },
          getDimensions: function (e) {
            let { width: t, height: n } = ej(e);
            return { width: t, height: n };
          },
          getScale: eD,
          isElement: ep,
          isRTL: function (e) {
            return "rtl" === eT(e).direction;
          },
        };
      function e$(e, t) {
        return (
          e.x === t.x &&
          e.y === t.y &&
          e.width === t.width &&
          e.height === t.height
        );
      }
      let eq = (e) => ({
          name: "arrow",
          options: e,
          async fn(t) {
            let {
                x: n,
                y: r,
                placement: o,
                rects: i,
                platform: l,
                elements: a,
                middlewareData: c,
              } = t,
              { element: u, padding: s = 0 } = B(e, t) || {};
            if (null == u) return {};
            let f = Q(s),
              d = { x: n, y: r },
              p = z(G(o)),
              h = K(p),
              m = await l.getDimensions(u),
              v = "y" === p,
              g = v ? "clientHeight" : "clientWidth",
              y = i.reference[h] + i.reference[p] - d[p] - i.floating[h],
              w = d[p] - i.reference[p],
              x = await (null == l.getOffsetParent
                ? void 0
                : l.getOffsetParent(u)),
              b = x ? x[g] : 0;
            (b && (await (null == l.isElement ? void 0 : l.isElement(x)))) ||
              (b = a.floating[g] || i.floating[h]);
            let S = b / 2 - m[h] / 2 - 1,
              E = j(f[v ? "top" : "left"], S),
              C = j(f[v ? "bottom" : "right"], S),
              R = b - m[h] - C,
              A = b / 2 - m[h] / 2 + (y / 2 - w / 2),
              k = O(E, j(A, R)),
              T =
                !c.arrow &&
                null != V(o) &&
                A !== k &&
                i.reference[h] / 2 - (A < E ? E : C) - m[h] / 2 < 0,
              P = T ? (A < E ? A - E : A - R) : 0;
            return {
              [p]: d[p] + P,
              data: {
                [p]: k,
                centerOffset: A - k - P,
                ...(T && { alignmentOffset: P }),
              },
              reset: T,
            };
          },
        }),
        eU = (e, t, n) => {
          let r = new Map(),
            o = { platform: eX, ...n },
            i = { ...o.platform, _c: r };
          return en(e, t, { ...o, platform: i });
        };
      var eZ =
        "undefined" != typeof document ? o.useLayoutEffect : function () {};
      function eJ(e, t) {
        let n, r, o;
        if (e === t) return !0;
        if (typeof e != typeof t) return !1;
        if ("function" == typeof e && e.toString() === t.toString()) return !0;
        if (e && t && "object" == typeof e) {
          if (Array.isArray(e)) {
            if ((n = e.length) !== t.length) return !1;
            for (r = n; 0 != r--; ) if (!eJ(e[r], t[r])) return !1;
            return !0;
          }
          if ((n = (o = Object.keys(e)).length) !== Object.keys(t).length)
            return !1;
          for (r = n; 0 != r--; )
            if (!{}.hasOwnProperty.call(t, o[r])) return !1;
          for (r = n; 0 != r--; ) {
            let n = o[r];
            if (("_owner" !== n || !e.$$typeof) && !eJ(e[n], t[n])) return !1;
          }
          return !0;
        }
        return e != e && t != t;
      }
      function eQ(e) {
        return "undefined" == typeof window
          ? 1
          : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
      }
      function e0(e, t) {
        let n = eQ(e);
        return Math.round(t * n) / n;
      }
      function e1(e) {
        let t = o.useRef(e);
        return (
          eZ(() => {
            t.current = e;
          }),
          t
        );
      }
      let e2 = (e) => ({
          name: "arrow",
          options: e,
          fn(t) {
            let { element: n, padding: r } = "function" == typeof e ? e(t) : e;
            return n && {}.hasOwnProperty.call(n, "current")
              ? null != n.current
                ? eq({ element: n.current, padding: r }).fn(t)
                : {}
              : n
                ? eq({ element: n, padding: r }).fn(t)
                : {};
          },
        }),
        e5 = (e, t) => ({
          ...(function (e) {
            return (
              void 0 === e && (e = 0),
              {
                name: "offset",
                options: e,
                async fn(t) {
                  var n, r;
                  let { x: o, y: i, placement: l, middlewareData: a } = t,
                    c = await ea(t, e);
                  return l ===
                    (null == (n = a.offset) ? void 0 : n.placement) &&
                    null != (r = a.arrow) &&
                    r.alignmentOffset
                    ? {}
                    : { x: o + c.x, y: i + c.y, data: { ...c, placement: l } };
                },
              }
            );
          })(e),
          options: [e, t],
        }),
        e6 = (e, t) => ({
          ...(function (e) {
            return (
              void 0 === e && (e = {}),
              {
                name: "shift",
                options: e,
                async fn(t) {
                  let { x: n, y: r, placement: o } = t,
                    {
                      mainAxis: i = !0,
                      crossAxis: l = !1,
                      limiter: a = {
                        fn: (e) => {
                          let { x: t, y: n } = e;
                          return { x: t, y: n };
                        },
                      },
                      ...c
                    } = B(e, t),
                    u = { x: n, y: r },
                    s = await er(t, c),
                    f = G(_(o)),
                    d = z(f),
                    p = u[d],
                    h = u[f];
                  if (i) {
                    let e = "y" === d ? "top" : "left",
                      t = "y" === d ? "bottom" : "right",
                      n = p + s[e],
                      r = p - s[t];
                    p = O(n, j(p, r));
                  }
                  if (l) {
                    let e = "y" === f ? "top" : "left",
                      t = "y" === f ? "bottom" : "right",
                      n = h + s[e],
                      r = h - s[t];
                    h = O(n, j(h, r));
                  }
                  let m = a.fn({ ...t, [d]: p, [f]: h });
                  return {
                    ...m,
                    data: {
                      x: m.x - n,
                      y: m.y - r,
                      enabled: { [d]: i, [f]: l },
                    },
                  };
                },
              }
            );
          })(e),
          options: [e, t],
        }),
        e3 = (e, t) => ({
          ...(function (e) {
            return (
              void 0 === e && (e = {}),
              {
                options: e,
                fn(t) {
                  let {
                      x: n,
                      y: r,
                      placement: o,
                      rects: i,
                      middlewareData: l,
                    } = t,
                    {
                      offset: a = 0,
                      mainAxis: c = !0,
                      crossAxis: u = !0,
                    } = B(e, t),
                    s = { x: n, y: r },
                    f = G(o),
                    d = z(f),
                    p = s[d],
                    h = s[f],
                    m = B(a, t),
                    v =
                      "number" == typeof m
                        ? { mainAxis: m, crossAxis: 0 }
                        : { mainAxis: 0, crossAxis: 0, ...m };
                  if (c) {
                    let e = "y" === d ? "height" : "width",
                      t = i.reference[d] - i.floating[e] + v.mainAxis,
                      n = i.reference[d] + i.reference[e] - v.mainAxis;
                    p < t ? (p = t) : p > n && (p = n);
                  }
                  if (u) {
                    var g, y;
                    let e = "y" === d ? "width" : "height",
                      t = el.has(_(o)),
                      n =
                        i.reference[f] -
                        i.floating[e] +
                        ((t && (null == (g = l.offset) ? void 0 : g[f])) || 0) +
                        (t ? 0 : v.crossAxis),
                      r =
                        i.reference[f] +
                        i.reference[e] +
                        (t
                          ? 0
                          : (null == (y = l.offset) ? void 0 : y[f]) || 0) -
                        (t ? v.crossAxis : 0);
                    h < n ? (h = n) : h > r && (h = r);
                  }
                  return { [d]: p, [f]: h };
                },
              }
            );
          })(e),
          options: [e, t],
        }),
        e4 = (e, t) => ({
          ...(function (e) {
            return (
              void 0 === e && (e = {}),
              {
                name: "flip",
                options: e,
                async fn(t) {
                  var n, r, o, i, l;
                  let {
                      placement: a,
                      middlewareData: c,
                      rects: u,
                      initialPlacement: s,
                      platform: f,
                      elements: d,
                    } = t,
                    {
                      mainAxis: p = !0,
                      crossAxis: h = !0,
                      fallbackPlacements: m,
                      fallbackStrategy: v = "bestFit",
                      fallbackAxisSideDirection: g = "none",
                      flipAlignment: y = !0,
                      ...w
                    } = B(e, t);
                  if (null != (n = c.arrow) && n.alignmentOffset) return {};
                  let x = _(a),
                    b = G(s),
                    S = _(s) === s,
                    E = await (null == f.isRTL ? void 0 : f.isRTL(d.floating)),
                    C =
                      m ||
                      (S || !y
                        ? [J(s)]
                        : (function (e) {
                            let t = J(e);
                            return [X(e), t, X(t)];
                          })(s)),
                    R = "none" !== g;
                  !m &&
                    R &&
                    C.push(
                      ...(function (e, t, n, r) {
                        let o = V(e),
                          i = (function (e, t, n) {
                            switch (e) {
                              case "top":
                              case "bottom":
                                if (n) return t ? q : $;
                                return t ? $ : q;
                              case "left":
                              case "right":
                                return t ? U : Z;
                              default:
                                return [];
                            }
                          })(_(e), "start" === n, r);
                        return (
                          o &&
                            ((i = i.map((e) => e + "-" + o)),
                            t && (i = i.concat(i.map(X)))),
                          i
                        );
                      })(s, y, g, E),
                    );
                  let A = [s, ...C],
                    k = await er(t, w),
                    T = [],
                    P = (null == (r = c.flip) ? void 0 : r.overflows) || [];
                  if ((p && T.push(k[x]), h)) {
                    let e = (function (e, t, n) {
                      void 0 === n && (n = !1);
                      let r = V(e),
                        o = z(G(e)),
                        i = K(o),
                        l =
                          "x" === o
                            ? r === (n ? "end" : "start")
                              ? "right"
                              : "left"
                            : "start" === r
                              ? "bottom"
                              : "top";
                      return (
                        t.reference[i] > t.floating[i] && (l = J(l)),
                        [l, J(l)]
                      );
                    })(a, u, E);
                    T.push(k[e[0]], k[e[1]]);
                  }
                  if (
                    ((P = [...P, { placement: a, overflows: T }]),
                    !T.every((e) => e <= 0))
                  ) {
                    let e =
                        ((null == (o = c.flip) ? void 0 : o.index) || 0) + 1,
                      t = A[e];
                    if (
                      t &&
                      ("alignment" !== h ||
                        b === G(t) ||
                        P.every(
                          (e) => G(e.placement) !== b || e.overflows[0] > 0,
                        ))
                    )
                      return {
                        data: { index: e, overflows: P },
                        reset: { placement: t },
                      };
                    let n =
                      null ==
                      (i = P.filter((e) => e.overflows[0] <= 0).sort(
                        (e, t) => e.overflows[1] - t.overflows[1],
                      )[0])
                        ? void 0
                        : i.placement;
                    if (!n)
                      switch (v) {
                        case "bestFit": {
                          let e =
                            null ==
                            (l = P.filter((e) => {
                              if (R) {
                                let t = G(e.placement);
                                return t === b || "y" === t;
                              }
                              return !0;
                            })
                              .map((e) => [
                                e.placement,
                                e.overflows
                                  .filter((e) => e > 0)
                                  .reduce((e, t) => e + t, 0),
                              ])
                              .sort((e, t) => e[1] - t[1])[0])
                              ? void 0
                              : l[0];
                          e && (n = e);
                          break;
                        }
                        case "initialPlacement":
                          n = s;
                      }
                    if (a !== n) return { reset: { placement: n } };
                  }
                  return {};
                },
              }
            );
          })(e),
          options: [e, t],
        }),
        e7 = (e, t) => ({
          ...(function (e) {
            return (
              void 0 === e && (e = {}),
              {
                name: "size",
                options: e,
                async fn(t) {
                  var n, r;
                  let o,
                    i,
                    { placement: l, rects: a, platform: c, elements: u } = t,
                    { apply: s = () => {}, ...f } = B(e, t),
                    d = await er(t, f),
                    p = _(l),
                    h = V(l),
                    m = "y" === G(l),
                    { width: v, height: g } = a.floating;
                  "top" === p || "bottom" === p
                    ? ((o = p),
                      (i =
                        h ===
                        ((await (null == c.isRTL
                          ? void 0
                          : c.isRTL(u.floating)))
                          ? "start"
                          : "end")
                          ? "left"
                          : "right"))
                    : ((i = p), (o = "end" === h ? "top" : "bottom"));
                  let y = g - d.top - d.bottom,
                    w = v - d.left - d.right,
                    x = j(g - d[o], y),
                    b = j(v - d[i], w),
                    S = !t.middlewareData.shift,
                    E = x,
                    C = b;
                  if (
                    (null != (n = t.middlewareData.shift) &&
                      n.enabled.x &&
                      (C = w),
                    null != (r = t.middlewareData.shift) &&
                      r.enabled.y &&
                      (E = y),
                    S && !h)
                  ) {
                    let e = O(d.left, 0),
                      t = O(d.right, 0),
                      n = O(d.top, 0),
                      r = O(d.bottom, 0);
                    m
                      ? (C =
                          v -
                          2 * (0 !== e || 0 !== t ? e + t : O(d.left, d.right)))
                      : (E =
                          g -
                          2 *
                            (0 !== n || 0 !== r ? n + r : O(d.top, d.bottom)));
                  }
                  await s({ ...t, availableWidth: C, availableHeight: E });
                  let R = await c.getDimensions(u.floating);
                  return v !== R.width || g !== R.height
                    ? { reset: { rects: !0 } }
                    : {};
                },
              }
            );
          })(e),
          options: [e, t],
        }),
        e9 = (e, t) => ({
          ...(function (e) {
            return (
              void 0 === e && (e = {}),
              {
                name: "hide",
                options: e,
                async fn(t) {
                  let { rects: n } = t,
                    { strategy: r = "referenceHidden", ...o } = B(e, t);
                  switch (r) {
                    case "referenceHidden": {
                      let e = eo(
                        await er(t, { ...o, elementContext: "reference" }),
                        n.reference,
                      );
                      return {
                        data: {
                          referenceHiddenOffsets: e,
                          referenceHidden: ei(e),
                        },
                      };
                    }
                    case "escaped": {
                      let e = eo(
                        await er(t, { ...o, altBoundary: !0 }),
                        n.floating,
                      );
                      return { data: { escapedOffsets: e, escaped: ei(e) } };
                    }
                    default:
                      return {};
                  }
                },
              }
            );
          })(e),
          options: [e, t],
        }),
        e8 = (e, t) => ({ ...e2(e), options: [e, t] });
      var te = o.forwardRef((e, t) => {
        let { children: n, width: r = 10, height: o = 5, ...i } = e;
        return (0, d.jsx)(g.sG.svg, {
          ...i,
          ref: t,
          width: r,
          height: o,
          viewBox: "0 0 30 10",
          preserveAspectRatio: "none",
          children: e.asChild
            ? n
            : (0, d.jsx)("polygon", { points: "0,0 30,0 15,10" }),
        });
      });
      te.displayName = "Arrow";
      var tt = "Popper",
        [tn, tr] = (0, f.A)(tt),
        [to, ti] = tn(tt),
        tl = (e) => {
          let { __scopePopper: t, children: n } = e,
            [r, i] = o.useState(null);
          return (0, d.jsx)(to, {
            scope: t,
            anchor: r,
            onAnchorChange: i,
            children: n,
          });
        };
      tl.displayName = tt;
      var ta = "PopperAnchor",
        tc = o.forwardRef((e, t) => {
          let { __scopePopper: n, virtualRef: r, ...i } = e,
            l = ti(ta, n),
            a = o.useRef(null),
            c = (0, s.s)(t, a);
          return (
            o.useEffect(() => {
              l.onAnchorChange(r?.current || a.current);
            }),
            r ? null : (0, d.jsx)(g.sG.div, { ...i, ref: c })
          );
        });
      tc.displayName = ta;
      var tu = "PopperContent",
        [ts, tf] = tn(tu),
        td = o.forwardRef((e, t) => {
          let {
              __scopePopper: n,
              side: r = "bottom",
              sideOffset: i = 0,
              align: a = "center",
              alignOffset: c = 0,
              arrowPadding: u = 0,
              avoidCollisions: f = !0,
              collisionBoundary: p = [],
              collisionPadding: h = 0,
              sticky: m = "partial",
              hideWhenDetached: v = !1,
              updatePositionStrategy: w = "optimized",
              onPlaced: x,
              ...b
            } = e,
            S = ti(tu, n),
            [E, C] = o.useState(null),
            R = (0, s.s)(t, (e) => C(e)),
            [A, k] = o.useState(null),
            P = (function (e) {
              let [t, n] = o.useState(void 0);
              return (
                (0, T.N)(() => {
                  if (e) {
                    n({ width: e.offsetWidth, height: e.offsetHeight });
                    let t = new ResizeObserver((t) => {
                      let r, o;
                      if (!Array.isArray(t) || !t.length) return;
                      let i = t[0];
                      if ("borderBoxSize" in i) {
                        let e = i.borderBoxSize,
                          t = Array.isArray(e) ? e[0] : e;
                        ((r = t.inlineSize), (o = t.blockSize));
                      } else ((r = e.offsetWidth), (o = e.offsetHeight));
                      n({ width: r, height: o });
                    });
                    return (
                      t.observe(e, { box: "border-box" }),
                      () => t.unobserve(e)
                    );
                  }
                  n(void 0);
                }, [e]),
                t
              );
            })(A),
            L = P?.width ?? 0,
            M = P?.height ?? 0,
            N =
              "number" == typeof h
                ? h
                : { top: 0, right: 0, bottom: 0, left: 0, ...h },
            D = Array.isArray(p) ? p : [p],
            F = D.length > 0,
            H = { padding: N, boundary: D.filter(tv), altBoundary: F },
            {
              refs: W,
              floatingStyles: B,
              placement: _,
              isPositioned: V,
              middlewareData: z,
            } = (function (e) {
              void 0 === e && (e = {});
              let {
                  placement: t = "bottom",
                  strategy: n = "absolute",
                  middleware: r = [],
                  platform: i,
                  elements: { reference: a, floating: c } = {},
                  transform: u = !0,
                  whileElementsMounted: s,
                  open: f,
                } = e,
                [d, p] = o.useState({
                  x: 0,
                  y: 0,
                  strategy: n,
                  placement: t,
                  middlewareData: {},
                  isPositioned: !1,
                }),
                [h, m] = o.useState(r);
              eJ(h, r) || m(r);
              let [v, g] = o.useState(null),
                [y, w] = o.useState(null),
                x = o.useCallback((e) => {
                  e !== C.current && ((C.current = e), g(e));
                }, []),
                b = o.useCallback((e) => {
                  e !== R.current && ((R.current = e), w(e));
                }, []),
                S = a || v,
                E = c || y,
                C = o.useRef(null),
                R = o.useRef(null),
                A = o.useRef(d),
                k = null != s,
                T = e1(s),
                P = e1(i),
                L = e1(f),
                M = o.useCallback(() => {
                  if (!C.current || !R.current) return;
                  let e = { placement: t, strategy: n, middleware: h };
                  (P.current && (e.platform = P.current),
                    eU(C.current, R.current, e).then((e) => {
                      let t = { ...e, isPositioned: !1 !== L.current };
                      N.current &&
                        !eJ(A.current, t) &&
                        ((A.current = t),
                        l.flushSync(() => {
                          p(t);
                        }));
                    }));
                }, [h, t, n, P, L]);
              eZ(() => {
                !1 === f &&
                  A.current.isPositioned &&
                  ((A.current.isPositioned = !1),
                  p((e) => ({ ...e, isPositioned: !1 })));
              }, [f]);
              let N = o.useRef(!1);
              (eZ(
                () => (
                  (N.current = !0),
                  () => {
                    N.current = !1;
                  }
                ),
                [],
              ),
                eZ(() => {
                  if ((S && (C.current = S), E && (R.current = E), S && E)) {
                    if (T.current) return T.current(S, E, M);
                    M();
                  }
                }, [S, E, M, T, k]));
              let j = o.useMemo(
                  () => ({
                    reference: C,
                    floating: R,
                    setReference: x,
                    setFloating: b,
                  }),
                  [x, b],
                ),
                O = o.useMemo(() => ({ reference: S, floating: E }), [S, E]),
                D = o.useMemo(() => {
                  let e = { position: n, left: 0, top: 0 };
                  if (!O.floating) return e;
                  let t = e0(O.floating, d.x),
                    r = e0(O.floating, d.y);
                  return u
                    ? {
                        ...e,
                        transform: "translate(" + t + "px, " + r + "px)",
                        ...(eQ(O.floating) >= 1.5 && {
                          willChange: "transform",
                        }),
                      }
                    : { position: n, left: t, top: r };
                }, [n, u, O.floating, d.x, d.y]);
              return o.useMemo(
                () => ({
                  ...d,
                  update: M,
                  refs: j,
                  elements: O,
                  floatingStyles: D,
                }),
                [d, M, j, O, D],
              );
            })({
              strategy: "fixed",
              placement: r + ("center" !== a ? "-" + a : ""),
              whileElementsMounted: function () {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                  t[n] = arguments[n];
                return (function (e, t, n, r) {
                  let o;
                  void 0 === r && (r = {});
                  let {
                      ancestorScroll: i = !0,
                      ancestorResize: l = !0,
                      elementResize: a = "function" == typeof ResizeObserver,
                      layoutShift: c = "function" ==
                        typeof IntersectionObserver,
                      animationFrame: u = !1,
                    } = r,
                    s = eO(e),
                    f = i || l ? [...(s ? eM(s) : []), ...eM(t)] : [];
                  f.forEach((e) => {
                    (i && e.addEventListener("scroll", n, { passive: !0 }),
                      l && e.addEventListener("resize", n));
                  });
                  let d =
                      s && c
                        ? (function (e, t) {
                            let n,
                              r = null,
                              o = ef(e);
                            function i() {
                              var e;
                              (clearTimeout(n),
                                null == (e = r) || e.disconnect(),
                                (r = null));
                            }
                            return (
                              !(function l(a, c) {
                                (void 0 === a && (a = !1),
                                  void 0 === c && (c = 1),
                                  i());
                                let u = e.getBoundingClientRect(),
                                  { left: s, top: f, width: d, height: p } = u;
                                if ((a || t(), !d || !p)) return;
                                let h = I(f),
                                  m = I(o.clientWidth - (s + d)),
                                  v = {
                                    rootMargin:
                                      -h +
                                      "px " +
                                      -m +
                                      "px " +
                                      -I(o.clientHeight - (f + p)) +
                                      "px " +
                                      -I(s) +
                                      "px",
                                    threshold: O(0, j(1, c)) || 1,
                                  },
                                  g = !0;
                                function y(t) {
                                  let r = t[0].intersectionRatio;
                                  if (r !== c) {
                                    if (!g) return l();
                                    r
                                      ? l(!1, r)
                                      : (n = setTimeout(() => {
                                          l(!1, 1e-7);
                                        }, 1e3));
                                  }
                                  (1 !== r ||
                                    e$(u, e.getBoundingClientRect()) ||
                                    l(),
                                    (g = !1));
                                }
                                try {
                                  r = new IntersectionObserver(y, {
                                    ...v,
                                    root: o.ownerDocument,
                                  });
                                } catch (e) {
                                  r = new IntersectionObserver(y, v);
                                }
                                r.observe(e);
                              })(!0),
                              i
                            );
                          })(s, n)
                        : null,
                    p = -1,
                    h = null;
                  a &&
                    ((h = new ResizeObserver((e) => {
                      let [r] = e;
                      (r &&
                        r.target === s &&
                        h &&
                        (h.unobserve(t),
                        cancelAnimationFrame(p),
                        (p = requestAnimationFrame(() => {
                          var e;
                          null == (e = h) || e.observe(t);
                        }))),
                        n());
                    })),
                    s && !u && h.observe(s),
                    h.observe(t));
                  let m = u ? eH(e) : null;
                  return (
                    u &&
                      (function t() {
                        let r = eH(e);
                        (m && !e$(m, r) && n(),
                          (m = r),
                          (o = requestAnimationFrame(t)));
                      })(),
                    n(),
                    () => {
                      var e;
                      (f.forEach((e) => {
                        (i && e.removeEventListener("scroll", n),
                          l && e.removeEventListener("resize", n));
                      }),
                        null == d || d(),
                        null == (e = h) || e.disconnect(),
                        (h = null),
                        u && cancelAnimationFrame(o));
                    }
                  );
                })(...t, { animationFrame: "always" === w });
              },
              elements: { reference: S.anchor },
              middleware: [
                e5({ mainAxis: i + M, alignmentAxis: c }),
                f &&
                  e6({
                    mainAxis: !0,
                    crossAxis: !1,
                    limiter: "partial" === m ? e3() : void 0,
                    ...H,
                  }),
                f && e4({ ...H }),
                e7({
                  ...H,
                  apply: (e) => {
                    let {
                        elements: t,
                        rects: n,
                        availableWidth: r,
                        availableHeight: o,
                      } = e,
                      { width: i, height: l } = n.reference,
                      a = t.floating.style;
                    (a.setProperty("--radix-popper-available-width", `${r}px`),
                      a.setProperty(
                        "--radix-popper-available-height",
                        `${o}px`,
                      ),
                      a.setProperty("--radix-popper-anchor-width", `${i}px`),
                      a.setProperty("--radix-popper-anchor-height", `${l}px`));
                  },
                }),
                A && e8({ element: A, padding: u }),
                tg({ arrowWidth: L, arrowHeight: M }),
                v && e9({ strategy: "referenceHidden", ...H }),
              ],
            }),
            [K, Y] = ty(_),
            G = (0, y.c)(x);
          (0, T.N)(() => {
            V && G?.();
          }, [V, G]);
          let X = z.arrow?.x,
            $ = z.arrow?.y,
            q = z.arrow?.centerOffset !== 0,
            [U, Z] = o.useState();
          return (
            (0, T.N)(() => {
              E && Z(window.getComputedStyle(E).zIndex);
            }, [E]),
            (0, d.jsx)("div", {
              ref: W.setFloating,
              "data-radix-popper-content-wrapper": "",
              style: {
                ...B,
                transform: V ? B.transform : "translate(0, -200%)",
                minWidth: "max-content",
                zIndex: U,
                "--radix-popper-transform-origin": [
                  z.transformOrigin?.x,
                  z.transformOrigin?.y,
                ].join(" "),
                ...(z.hide?.referenceHidden && {
                  visibility: "hidden",
                  pointerEvents: "none",
                }),
              },
              dir: e.dir,
              children: (0, d.jsx)(ts, {
                scope: n,
                placedSide: K,
                onArrowChange: k,
                arrowX: X,
                arrowY: $,
                shouldHideArrow: q,
                children: (0, d.jsx)(g.sG.div, {
                  "data-side": K,
                  "data-align": Y,
                  ...b,
                  ref: R,
                  style: { ...b.style, animation: V ? void 0 : "none" },
                }),
              }),
            })
          );
        });
      td.displayName = tu;
      var tp = "PopperArrow",
        th = { top: "bottom", right: "left", bottom: "top", left: "right" },
        tm = o.forwardRef(function (e, t) {
          let { __scopePopper: n, ...r } = e,
            o = tf(tp, n),
            i = th[o.placedSide];
          return (0, d.jsx)("span", {
            ref: o.onArrowChange,
            style: {
              position: "absolute",
              left: o.arrowX,
              top: o.arrowY,
              [i]: 0,
              transformOrigin: {
                top: "",
                right: "0 0",
                bottom: "center 0",
                left: "100% 0",
              }[o.placedSide],
              transform: {
                top: "translateY(100%)",
                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                bottom: "rotate(180deg)",
                left: "translateY(50%) rotate(-90deg) translateX(50%)",
              }[o.placedSide],
              visibility: o.shouldHideArrow ? "hidden" : void 0,
            },
            children: (0, d.jsx)(te, {
              ...r,
              ref: t,
              style: { ...r.style, display: "block" },
            }),
          });
        });
      function tv(e) {
        return null !== e;
      }
      tm.displayName = tp;
      var tg = (e) => ({
        name: "transformOrigin",
        options: e,
        fn(t) {
          let { placement: n, rects: r, middlewareData: o } = t,
            i = o.arrow?.centerOffset !== 0,
            l = i ? 0 : e.arrowWidth,
            a = i ? 0 : e.arrowHeight,
            [c, u] = ty(n),
            s = { start: "0%", center: "50%", end: "100%" }[u],
            f = (o.arrow?.x ?? 0) + l / 2,
            d = (o.arrow?.y ?? 0) + a / 2,
            p = "",
            h = "";
          return (
            "bottom" === c
              ? ((p = i ? s : `${f}px`), (h = `${-a}px`))
              : "top" === c
                ? ((p = i ? s : `${f}px`), (h = `${r.floating.height + a}px`))
                : "right" === c
                  ? ((p = `${-a}px`), (h = i ? s : `${d}px`))
                  : "left" === c &&
                    ((p = `${r.floating.width + a}px`), (h = i ? s : `${d}px`)),
            { data: { x: p, y: h } }
          );
        },
      });
      function ty(e) {
        let [t, n = "center"] = e.split("-");
        return [t, n];
      }
      var tw = n(6202),
        tx = n(8097),
        tb = n(6402),
        tS = n(614),
        tE = function (e) {
          return "undefined" == typeof document
            ? null
            : (Array.isArray(e) ? e[0] : e).ownerDocument.body;
        },
        tC = new WeakMap(),
        tR = new WeakMap(),
        tA = {},
        tk = 0,
        tT = function (e) {
          return e && (e.host || tT(e.parentNode));
        },
        tP = function (e, t, n, r) {
          var o = (Array.isArray(e) ? e : [e])
            .map(function (e) {
              if (t.contains(e)) return e;
              var n = tT(e);
              return n && t.contains(n)
                ? n
                : (console.error(
                    "aria-hidden",
                    e,
                    "in not contained inside",
                    t,
                    ". Doing nothing",
                  ),
                  null);
            })
            .filter(function (e) {
              return !!e;
            });
          tA[n] || (tA[n] = new WeakMap());
          var i = tA[n],
            l = [],
            a = new Set(),
            c = new Set(o),
            u = function (e) {
              !e || a.has(e) || (a.add(e), u(e.parentNode));
            };
          o.forEach(u);
          var s = function (e) {
            !e ||
              c.has(e) ||
              Array.prototype.forEach.call(e.children, function (e) {
                if (a.has(e)) s(e);
                else
                  try {
                    var t = e.getAttribute(r),
                      o = null !== t && "false" !== t,
                      c = (tC.get(e) || 0) + 1,
                      u = (i.get(e) || 0) + 1;
                    (tC.set(e, c),
                      i.set(e, u),
                      l.push(e),
                      1 === c && o && tR.set(e, !0),
                      1 === u && e.setAttribute(n, "true"),
                      o || e.setAttribute(r, "true"));
                  } catch (t) {
                    console.error("aria-hidden: cannot operate on ", e, t);
                  }
              });
          };
          return (
            s(t),
            a.clear(),
            tk++,
            function () {
              (l.forEach(function (e) {
                var t = tC.get(e) - 1,
                  o = i.get(e) - 1;
                (tC.set(e, t),
                  i.set(e, o),
                  t || (tR.has(e) || e.removeAttribute(r), tR.delete(e)),
                  o || e.removeAttribute(n));
              }),
                --tk ||
                  ((tC = new WeakMap()),
                  (tC = new WeakMap()),
                  (tR = new WeakMap()),
                  (tA = {})));
            }
          );
        },
        tL = function (e, t, n) {
          void 0 === n && (n = "data-aria-hidden");
          var r = Array.from(Array.isArray(e) ? e : [e]),
            o = t || tE(e);
          return o
            ? (r.push.apply(
                r,
                Array.from(o.querySelectorAll("[aria-live], script")),
              ),
              tP(r, o, n, "aria-hidden"))
            : function () {
                return null;
              };
        },
        tM = function () {
          return (tM =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              return e;
            }).apply(this, arguments);
        };
      function tN(e, t) {
        var n = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            0 > t.indexOf(r) &&
            (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
          for (
            var o = 0, r = Object.getOwnPropertySymbols(e);
            o < r.length;
            o++
          )
            0 > t.indexOf(r[o]) &&
              Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
              (n[r[o]] = e[r[o]]);
        return n;
      }
      Object.create;
      Object.create;
      var tj =
          ("function" == typeof SuppressedError && SuppressedError,
          "right-scroll-bar-position"),
        tO = "width-before-scroll-bar";
      function tD(e, t) {
        return ("function" == typeof e ? e(t) : e && (e.current = t), e);
      }
      var tI = "undefined" != typeof window ? o.useLayoutEffect : o.useEffect,
        tF = new WeakMap();
      function tH(e) {
        return e;
      }
      var tW = (function (e) {
          void 0 === e && (e = {});
          var t,
            n,
            r,
            o,
            i =
              ((t = null),
              void 0 === n && (n = tH),
              (r = []),
              (o = !1),
              {
                read: function () {
                  if (o)
                    throw Error(
                      "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.",
                    );
                  return r.length ? r[r.length - 1] : null;
                },
                useMedium: function (e) {
                  var t = n(e, o);
                  return (
                    r.push(t),
                    function () {
                      r = r.filter(function (e) {
                        return e !== t;
                      });
                    }
                  );
                },
                assignSyncMedium: function (e) {
                  for (o = !0; r.length; ) {
                    var t = r;
                    ((r = []), t.forEach(e));
                  }
                  r = {
                    push: function (t) {
                      return e(t);
                    },
                    filter: function () {
                      return r;
                    },
                  };
                },
                assignMedium: function (e) {
                  o = !0;
                  var t = [];
                  if (r.length) {
                    var n = r;
                    ((r = []), n.forEach(e), (t = r));
                  }
                  var i = function () {
                      var n = t;
                      ((t = []), n.forEach(e));
                    },
                    l = function () {
                      return Promise.resolve().then(i);
                    };
                  (l(),
                    (r = {
                      push: function (e) {
                        (t.push(e), l());
                      },
                      filter: function (e) {
                        return ((t = t.filter(e)), r);
                      },
                    }));
                },
              });
          return ((i.options = tM({ async: !0, ssr: !1 }, e)), i);
        })(),
        tB = function () {},
        t_ = o.forwardRef(function (e, t) {
          var n,
            r,
            i,
            l,
            a = o.useRef(null),
            c = o.useState({
              onScrollCapture: tB,
              onWheelCapture: tB,
              onTouchMoveCapture: tB,
            }),
            u = c[0],
            s = c[1],
            f = e.forwardProps,
            d = e.children,
            p = e.className,
            h = e.removeScrollBar,
            m = e.enabled,
            v = e.shards,
            g = e.sideCar,
            y = e.noRelative,
            w = e.noIsolation,
            x = e.inert,
            b = e.allowPinchZoom,
            S = e.as,
            E = e.gapMode,
            C = tN(e, [
              "forwardProps",
              "children",
              "className",
              "removeScrollBar",
              "enabled",
              "shards",
              "sideCar",
              "noRelative",
              "noIsolation",
              "inert",
              "allowPinchZoom",
              "as",
              "gapMode",
            ]),
            R =
              ((n = [a, t]),
              (r = function (e) {
                return n.forEach(function (t) {
                  return tD(t, e);
                });
              }),
              ((i = (0, o.useState)(function () {
                return {
                  value: null,
                  callback: r,
                  facade: {
                    get current() {
                      return i.value;
                    },
                    set current(value) {
                      var e = i.value;
                      e !== value && ((i.value = value), i.callback(value, e));
                    },
                  },
                };
              })[0]).callback = r),
              (l = i.facade),
              tI(
                function () {
                  var e = tF.get(l);
                  if (e) {
                    var t = new Set(e),
                      r = new Set(n),
                      o = l.current;
                    (t.forEach(function (e) {
                      r.has(e) || tD(e, null);
                    }),
                      r.forEach(function (e) {
                        t.has(e) || tD(e, o);
                      }));
                  }
                  tF.set(l, n);
                },
                [n],
              ),
              l),
            A = tM(tM({}, C), u);
          return o.createElement(
            o.Fragment,
            null,
            m &&
              o.createElement(g, {
                sideCar: tW,
                removeScrollBar: h,
                shards: v,
                noRelative: y,
                noIsolation: w,
                inert: x,
                setCallbacks: s,
                allowPinchZoom: !!b,
                lockRef: a,
                gapMode: E,
              }),
            f
              ? o.cloneElement(o.Children.only(d), tM(tM({}, A), { ref: R }))
              : o.createElement(
                  void 0 === S ? "div" : S,
                  tM({}, A, { className: p, ref: R }),
                  d,
                ),
          );
        });
      ((t_.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
        (t_.classNames = { fullWidth: tO, zeroRight: tj }));
      var tV = function (e) {
        var t = e.sideCar,
          n = tN(e, ["sideCar"]);
        if (!t)
          throw Error(
            "Sidecar: please provide `sideCar` property to import the right car",
          );
        var r = t.read();
        if (!r) throw Error("Sidecar medium not found");
        return o.createElement(r, tM({}, n));
      };
      tV.isSideCarExport = !0;
      var tz = function () {
          var e = 0,
            t = null;
          return {
            add: function (o) {
              if (
                0 == e &&
                (t = (function () {
                  if (!document) return null;
                  var e = document.createElement("style");
                  e.type = "text/css";
                  var t = r || n.nc;
                  return (t && e.setAttribute("nonce", t), e);
                })())
              ) {
                var i, l;
                ((i = t).styleSheet
                  ? (i.styleSheet.cssText = o)
                  : i.appendChild(document.createTextNode(o)),
                  (l = t),
                  (
                    document.head || document.getElementsByTagName("head")[0]
                  ).appendChild(l));
              }
              e++;
            },
            remove: function () {
              --e ||
                !t ||
                (t.parentNode && t.parentNode.removeChild(t), (t = null));
            },
          };
        },
        tK = function () {
          var e = tz();
          return function (t, n) {
            o.useEffect(
              function () {
                return (
                  e.add(t),
                  function () {
                    e.remove();
                  }
                );
              },
              [t && n],
            );
          };
        },
        tY = function () {
          var e = tK();
          return function (t) {
            return (e(t.styles, t.dynamic), null);
          };
        },
        tG = { left: 0, top: 0, right: 0, gap: 0 },
        tX = function (e) {
          return parseInt(e || "", 10) || 0;
        },
        t$ = function (e) {
          var t = window.getComputedStyle(document.body),
            n = t["padding" === e ? "paddingLeft" : "marginLeft"],
            r = t["padding" === e ? "paddingTop" : "marginTop"],
            o = t["padding" === e ? "paddingRight" : "marginRight"];
          return [tX(n), tX(r), tX(o)];
        },
        tq = function (e) {
          if ((void 0 === e && (e = "margin"), "undefined" == typeof window))
            return tG;
          var t = t$(e),
            n = document.documentElement.clientWidth,
            r = window.innerWidth;
          return {
            left: t[0],
            top: t[1],
            right: t[2],
            gap: Math.max(0, r - n + t[2] - t[0]),
          };
        },
        tU = tY(),
        tZ = "data-scroll-locked",
        tJ = function (e, t, n, r) {
          var o = e.left,
            i = e.top,
            l = e.right,
            a = e.gap;
          return (
            void 0 === n && (n = "margin"),
            "\n  ."
              .concat("with-scroll-bars-hidden", " {\n   overflow: hidden ")
              .concat(r, ";\n   padding-right: ")
              .concat(a, "px ")
              .concat(r, ";\n  }\n  body[")
              .concat(tZ, "] {\n    overflow: hidden ")
              .concat(r, ";\n    overscroll-behavior: contain;\n    ")
              .concat(
                [
                  t && "position: relative ".concat(r, ";"),
                  "margin" === n &&
                    "\n    padding-left: "
                      .concat(o, "px;\n    padding-top: ")
                      .concat(i, "px;\n    padding-right: ")
                      .concat(
                        l,
                        "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ",
                      )
                      .concat(a, "px ")
                      .concat(r, ";\n    "),
                  "padding" === n &&
                    "padding-right: ".concat(a, "px ").concat(r, ";"),
                ]
                  .filter(Boolean)
                  .join(""),
                "\n  }\n  \n  .",
              )
              .concat(tj, " {\n    right: ")
              .concat(a, "px ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(tO, " {\n    margin-right: ")
              .concat(a, "px ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(tj, " .")
              .concat(tj, " {\n    right: 0 ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(tO, " .")
              .concat(tO, " {\n    margin-right: 0 ")
              .concat(r, ";\n  }\n  \n  body[")
              .concat(tZ, "] {\n    ")
              .concat("--removed-body-scroll-bar-size", ": ")
              .concat(a, "px;\n  }\n")
          );
        },
        tQ = function () {
          var e = parseInt(document.body.getAttribute(tZ) || "0", 10);
          return isFinite(e) ? e : 0;
        },
        t0 = function () {
          o.useEffect(function () {
            return (
              document.body.setAttribute(tZ, (tQ() + 1).toString()),
              function () {
                var e = tQ() - 1;
                e <= 0
                  ? document.body.removeAttribute(tZ)
                  : document.body.setAttribute(tZ, e.toString());
              }
            );
          }, []);
        },
        t1 = function (e) {
          var t = e.noRelative,
            n = e.noImportant,
            r = e.gapMode,
            i = void 0 === r ? "margin" : r;
          t0();
          var l = o.useMemo(
            function () {
              return tq(i);
            },
            [i],
          );
          return o.createElement(tU, {
            styles: tJ(l, !t, i, n ? "" : "!important"),
          });
        },
        t2 = !1;
      if ("undefined" != typeof window)
        try {
          var t5 = Object.defineProperty({}, "passive", {
            get: function () {
              return ((t2 = !0), !0);
            },
          });
          (window.addEventListener("test", t5, t5),
            window.removeEventListener("test", t5, t5));
        } catch (e) {
          t2 = !1;
        }
      var t6 = !!t2 && { passive: !1 },
        t3 = function (e, t) {
          if (!(e instanceof Element)) return !1;
          var n = window.getComputedStyle(e);
          return (
            "hidden" !== n[t] &&
            (n.overflowY !== n.overflowX ||
              "TEXTAREA" === e.tagName ||
              "visible" !== n[t])
          );
        },
        t4 = function (e, t) {
          var n = t.ownerDocument,
            r = t;
          do {
            if (
              ("undefined" != typeof ShadowRoot &&
                r instanceof ShadowRoot &&
                (r = r.host),
              t7(e, r))
            ) {
              var o = t9(e, r);
              if (o[1] > o[2]) return !0;
            }
            r = r.parentNode;
          } while (r && r !== n.body);
          return !1;
        },
        t7 = function (e, t) {
          return "v" === e ? t3(t, "overflowY") : t3(t, "overflowX");
        },
        t9 = function (e, t) {
          return "v" === e
            ? [t.scrollTop, t.scrollHeight, t.clientHeight]
            : [t.scrollLeft, t.scrollWidth, t.clientWidth];
        },
        t8 = function (e, t, n, r, o) {
          var i,
            l =
              ((i = window.getComputedStyle(t).direction),
              "h" === e && "rtl" === i ? -1 : 1),
            a = l * r,
            c = n.target,
            u = t.contains(c),
            s = !1,
            f = a > 0,
            d = 0,
            p = 0;
          do {
            if (!c) break;
            var h = t9(e, c),
              m = h[0],
              v = h[1] - h[2] - l * m;
            (m || v) && t7(e, c) && ((d += v), (p += m));
            var g = c.parentNode;
            c = g && g.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? g.host : g;
          } while (
            (!u && c !== document.body) ||
            (u && (t.contains(c) || t === c))
          );
          return (
            f && ((o && 1 > Math.abs(d)) || (!o && a > d))
              ? (s = !0)
              : !f && ((o && 1 > Math.abs(p)) || (!o && -a > p)) && (s = !0),
            s
          );
        },
        ne = function (e) {
          return "changedTouches" in e
            ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
            : [0, 0];
        },
        nt = function (e) {
          return [e.deltaX, e.deltaY];
        },
        nn = function (e) {
          return e && "current" in e ? e.current : e;
        },
        nr = 0,
        no = [];
      let ni =
        (tW.useMedium(function (e) {
          var t = o.useRef([]),
            n = o.useRef([0, 0]),
            r = o.useRef(),
            i = o.useState(nr++)[0],
            l = o.useState(tY)[0],
            a = o.useRef(e);
          (o.useEffect(
            function () {
              a.current = e;
            },
            [e],
          ),
            o.useEffect(
              function () {
                if (e.inert) {
                  document.body.classList.add("block-interactivity-".concat(i));
                  var t = (function (e, t, n) {
                    if (n || 2 == arguments.length)
                      for (var r, o = 0, i = t.length; o < i; o++)
                        (!r && o in t) ||
                          (r || (r = Array.prototype.slice.call(t, 0, o)),
                          (r[o] = t[o]));
                    return e.concat(r || Array.prototype.slice.call(t));
                  })([e.lockRef.current], (e.shards || []).map(nn), !0).filter(
                    Boolean,
                  );
                  return (
                    t.forEach(function (e) {
                      return e.classList.add("allow-interactivity-".concat(i));
                    }),
                    function () {
                      (document.body.classList.remove(
                        "block-interactivity-".concat(i),
                      ),
                        t.forEach(function (e) {
                          return e.classList.remove(
                            "allow-interactivity-".concat(i),
                          );
                        }));
                    }
                  );
                }
              },
              [e.inert, e.lockRef.current, e.shards],
            ));
          var c = o.useCallback(function (e, t) {
              if (
                ("touches" in e && 2 === e.touches.length) ||
                ("wheel" === e.type && e.ctrlKey)
              )
                return !a.current.allowPinchZoom;
              var o,
                i = ne(e),
                l = n.current,
                c = "deltaX" in e ? e.deltaX : l[0] - i[0],
                u = "deltaY" in e ? e.deltaY : l[1] - i[1],
                s = e.target,
                f = Math.abs(c) > Math.abs(u) ? "h" : "v";
              if ("touches" in e && "h" === f && "range" === s.type) return !1;
              var d = t4(f, s);
              if (!d) return !0;
              if (
                (d ? (o = f) : ((o = "v" === f ? "h" : "v"), (d = t4(f, s))),
                !d)
              )
                return !1;
              if (
                (!r.current &&
                  "changedTouches" in e &&
                  (c || u) &&
                  (r.current = o),
                !o)
              )
                return !0;
              var p = r.current || o;
              return t8(p, t, e, "h" === p ? c : u, !0);
            }, []),
            u = o.useCallback(function (e) {
              if (no.length && no[no.length - 1] === l) {
                var n = "deltaY" in e ? nt(e) : ne(e),
                  r = t.current.filter(function (t) {
                    var r;
                    return (
                      t.name === e.type &&
                      (t.target === e.target || e.target === t.shadowParent) &&
                      (r = t.delta)[0] === n[0] &&
                      r[1] === n[1]
                    );
                  })[0];
                if (r && r.should) {
                  e.cancelable && e.preventDefault();
                  return;
                }
                if (!r) {
                  var o = (a.current.shards || [])
                    .map(nn)
                    .filter(Boolean)
                    .filter(function (t) {
                      return t.contains(e.target);
                    });
                  (o.length > 0 ? c(e, o[0]) : !a.current.noIsolation) &&
                    e.cancelable &&
                    e.preventDefault();
                }
              }
            }, []),
            s = o.useCallback(function (e, n, r, o) {
              var i = {
                name: e,
                delta: n,
                target: r,
                should: o,
                shadowParent: (function (e) {
                  for (var t = null; null !== e; )
                    (e instanceof ShadowRoot && ((t = e.host), (e = e.host)),
                      (e = e.parentNode));
                  return t;
                })(r),
              };
              (t.current.push(i),
                setTimeout(function () {
                  t.current = t.current.filter(function (e) {
                    return e !== i;
                  });
                }, 1));
            }, []),
            f = o.useCallback(function (e) {
              ((n.current = ne(e)), (r.current = void 0));
            }, []),
            d = o.useCallback(function (t) {
              s(t.type, nt(t), t.target, c(t, e.lockRef.current));
            }, []),
            p = o.useCallback(function (t) {
              s(t.type, ne(t), t.target, c(t, e.lockRef.current));
            }, []);
          o.useEffect(function () {
            return (
              no.push(l),
              e.setCallbacks({
                onScrollCapture: d,
                onWheelCapture: d,
                onTouchMoveCapture: p,
              }),
              document.addEventListener("wheel", u, t6),
              document.addEventListener("touchmove", u, t6),
              document.addEventListener("touchstart", f, t6),
              function () {
                ((no = no.filter(function (e) {
                  return e !== l;
                })),
                  document.removeEventListener("wheel", u, t6),
                  document.removeEventListener("touchmove", u, t6),
                  document.removeEventListener("touchstart", f, t6));
              }
            );
          }, []);
          var h = e.removeScrollBar,
            m = e.inert;
          return o.createElement(
            o.Fragment,
            null,
            m
              ? o.createElement(l, {
                  styles: "\n  .block-interactivity-"
                    .concat(
                      i,
                      " {pointer-events: none;}\n  .allow-interactivity-",
                    )
                    .concat(i, " {pointer-events: all;}\n"),
                })
              : null,
            h
              ? o.createElement(t1, {
                  noRelative: e.noRelative,
                  gapMode: e.gapMode,
                })
              : null,
          );
        }),
        tV);
      var nl = o.forwardRef(function (e, t) {
        return o.createElement(t_, tM({}, e, { ref: t, sideCar: ni }));
      });
      nl.classNames = t_.classNames;
      var na = [" ", "Enter", "ArrowUp", "ArrowDown"],
        nc = [" ", "Enter"],
        nu = "Select",
        [ns, nf, nd] = (0, u.N)(nu),
        [np, nh] = (0, f.A)(nu, [nd, tr]),
        nm = tr(),
        [nv, ng] = np(nu),
        [ny, nw] = np(nu),
        nx = (e) => {
          let {
              __scopeSelect: t,
              children: n,
              open: r,
              defaultOpen: i,
              onOpenChange: l,
              value: a,
              defaultValue: c,
              onValueChange: u,
              dir: s,
              name: f,
              autoComplete: h,
              disabled: m,
              required: v,
              form: g,
            } = e,
            y = nm(t),
            [w, x] = o.useState(null),
            [b, S] = o.useState(null),
            [E, C] = o.useState(!1),
            R = (function (e) {
              let t = o.useContext(p);
              return e || t || "ltr";
            })(s),
            [A = !1, k] = (0, tb.i)({ prop: r, defaultProp: i, onChange: l }),
            [T, P] = (0, tb.i)({ prop: a, defaultProp: c, onChange: u }),
            L = o.useRef(null),
            N = !w || g || !!w.closest("form"),
            [j, O] = o.useState(new Set()),
            D = Array.from(j)
              .map((e) => e.props.value)
              .join(";");
          return (0, d.jsx)(tl, {
            ...y,
            children: (0, d.jsxs)(nv, {
              required: v,
              scope: t,
              trigger: w,
              onTriggerChange: x,
              valueNode: b,
              onValueNodeChange: S,
              valueNodeHasChildren: E,
              onValueNodeHasChildrenChange: C,
              contentId: M(),
              value: T,
              onValueChange: P,
              open: A,
              onOpenChange: k,
              dir: R,
              triggerPointerDownPosRef: L,
              disabled: m,
              children: [
                (0, d.jsx)(ns.Provider, {
                  scope: t,
                  children: (0, d.jsx)(ny, {
                    scope: e.__scopeSelect,
                    onNativeOptionAdd: o.useCallback((e) => {
                      O((t) => new Set(t).add(e));
                    }, []),
                    onNativeOptionRemove: o.useCallback((e) => {
                      O((t) => {
                        let n = new Set(t);
                        return (n.delete(e), n);
                      });
                    }, []),
                    children: n,
                  }),
                }),
                N
                  ? (0, d.jsxs)(
                      n5,
                      {
                        "aria-hidden": !0,
                        required: v,
                        tabIndex: -1,
                        name: f,
                        autoComplete: h,
                        value: T,
                        onChange: (e) => P(e.target.value),
                        disabled: m,
                        form: g,
                        children: [
                          void 0 === T
                            ? (0, d.jsx)("option", { value: "" })
                            : null,
                          Array.from(j),
                        ],
                      },
                      D,
                    )
                  : null,
              ],
            }),
          });
        };
      nx.displayName = nu;
      var nb = "SelectTrigger",
        nS = o.forwardRef((e, t) => {
          let { __scopeSelect: n, disabled: r = !1, ...i } = e,
            l = nm(n),
            a = ng(nb, n),
            u = a.disabled || r,
            f = (0, s.s)(t, a.onTriggerChange),
            p = nf(n),
            h = o.useRef("touch"),
            [m, v, y] = n6((e) => {
              let t = p().filter((e) => !e.disabled),
                n = t.find((e) => e.value === a.value),
                r = n3(t, e, n);
              void 0 !== r && a.onValueChange(r.value);
            }),
            w = (e) => {
              (u || (a.onOpenChange(!0), y()),
                e &&
                  (a.triggerPointerDownPosRef.current = {
                    x: Math.round(e.pageX),
                    y: Math.round(e.pageY),
                  }));
            };
          return (0, d.jsx)(tc, {
            asChild: !0,
            ...l,
            children: (0, d.jsx)(g.sG.button, {
              type: "button",
              role: "combobox",
              "aria-controls": a.contentId,
              "aria-expanded": a.open,
              "aria-required": a.required,
              "aria-autocomplete": "none",
              dir: a.dir,
              "data-state": a.open ? "open" : "closed",
              disabled: u,
              "data-disabled": u ? "" : void 0,
              "data-placeholder": n2(a.value) ? "" : void 0,
              ...i,
              ref: f,
              onClick: (0, c.m)(i.onClick, (e) => {
                (e.currentTarget.focus(), "mouse" !== h.current && w(e));
              }),
              onPointerDown: (0, c.m)(i.onPointerDown, (e) => {
                h.current = e.pointerType;
                let t = e.target;
                (t.hasPointerCapture(e.pointerId) &&
                  t.releasePointerCapture(e.pointerId),
                  0 === e.button &&
                    !1 === e.ctrlKey &&
                    "mouse" === e.pointerType &&
                    (w(e), e.preventDefault()));
              }),
              onKeyDown: (0, c.m)(i.onKeyDown, (e) => {
                let t = "" !== m.current;
                (e.ctrlKey ||
                  e.altKey ||
                  e.metaKey ||
                  1 !== e.key.length ||
                  v(e.key),
                  (!t || " " !== e.key) &&
                    na.includes(e.key) &&
                    (w(), e.preventDefault()));
              }),
            }),
          });
        });
      nS.displayName = nb;
      var nE = "SelectValue",
        nC = o.forwardRef((e, t) => {
          let {
              __scopeSelect: n,
              className: r,
              style: o,
              children: i,
              placeholder: l = "",
              ...a
            } = e,
            c = ng(nE, n),
            { onValueNodeHasChildrenChange: u } = c,
            f = void 0 !== i,
            p = (0, s.s)(t, c.onValueNodeChange);
          return (
            (0, T.N)(() => {
              u(f);
            }, [u, f]),
            (0, d.jsx)(g.sG.span, {
              ...a,
              ref: p,
              style: { pointerEvents: "none" },
              children: n2(c.value)
                ? (0, d.jsx)(d.Fragment, { children: l })
                : i,
            })
          );
        });
      nC.displayName = nE;
      var nR = o.forwardRef((e, t) => {
        let { __scopeSelect: n, children: r, ...o } = e;
        return (0, d.jsx)(g.sG.span, {
          "aria-hidden": !0,
          ...o,
          ref: t,
          children: r || "▼",
        });
      });
      nR.displayName = "SelectIcon";
      var nA = (e) => (0, d.jsx)(tw.Z, { asChild: !0, ...e });
      nA.displayName = "SelectPortal";
      var nk = "SelectContent",
        nT = o.forwardRef((e, t) => {
          let n = ng(nk, e.__scopeSelect),
            [r, i] = o.useState();
          return ((0, T.N)(() => {
            i(new DocumentFragment());
          }, []),
          n.open)
            ? (0, d.jsx)(nM, { ...e, ref: t })
            : r
              ? l.createPortal(
                  (0, d.jsx)(nP, {
                    scope: e.__scopeSelect,
                    children: (0, d.jsx)(ns.Slot, {
                      scope: e.__scopeSelect,
                      children: (0, d.jsx)("div", { children: e.children }),
                    }),
                  }),
                  r,
                )
              : null;
        });
      nT.displayName = nk;
      var [nP, nL] = np(nk),
        nM = o.forwardRef((e, t) => {
          let {
              __scopeSelect: n,
              position: r = "item-aligned",
              onCloseAutoFocus: i,
              onEscapeKeyDown: l,
              onPointerDownOutside: a,
              side: u,
              sideOffset: f,
              align: p,
              alignOffset: g,
              arrowPadding: y,
              collisionBoundary: w,
              collisionPadding: x,
              sticky: b,
              hideWhenDetached: E,
              avoidCollisions: C,
              ...R
            } = e,
            A = ng(nk, n),
            [k, T] = o.useState(null),
            [P, L] = o.useState(null),
            M = (0, s.s)(t, (e) => T(e)),
            [N, j] = o.useState(null),
            [O, D] = o.useState(null),
            I = nf(n),
            [F, H] = o.useState(!1),
            W = o.useRef(!1);
          (o.useEffect(() => {
            if (k) return tL(k);
          }, [k]),
            o.useEffect(() => {
              let e = document.querySelectorAll("[data-radix-focus-guard]");
              return (
                document.body.insertAdjacentElement("afterbegin", e[0] ?? v()),
                document.body.insertAdjacentElement("beforeend", e[1] ?? v()),
                m++,
                () => {
                  (1 === m &&
                    document
                      .querySelectorAll("[data-radix-focus-guard]")
                      .forEach((e) => e.remove()),
                    m--);
                }
              );
            }, []));
          let B = o.useCallback(
              (e) => {
                let [t, ...n] = I().map((e) => e.ref.current),
                  [r] = n.slice(-1),
                  o = document.activeElement;
                for (let n of e)
                  if (
                    n === o ||
                    (n?.scrollIntoView({ block: "nearest" }),
                    n === t && P && (P.scrollTop = 0),
                    n === r && P && (P.scrollTop = P.scrollHeight),
                    n?.focus(),
                    document.activeElement !== o)
                  )
                    return;
              },
              [I, P],
            ),
            _ = o.useCallback(() => B([N, k]), [B, N, k]);
          o.useEffect(() => {
            F && _();
          }, [F, _]);
          let { onOpenChange: V, triggerPointerDownPosRef: z } = A;
          (o.useEffect(() => {
            if (k) {
              let e = { x: 0, y: 0 },
                t = (t) => {
                  e = {
                    x: Math.abs(Math.round(t.pageX) - (z.current?.x ?? 0)),
                    y: Math.abs(Math.round(t.pageY) - (z.current?.y ?? 0)),
                  };
                },
                n = (n) => {
                  (e.x <= 10 && e.y <= 10
                    ? n.preventDefault()
                    : k.contains(n.target) || V(!1),
                    document.removeEventListener("pointermove", t),
                    (z.current = null));
                };
              return (
                null !== z.current &&
                  (document.addEventListener("pointermove", t),
                  document.addEventListener("pointerup", n, {
                    capture: !0,
                    once: !0,
                  })),
                () => {
                  (document.removeEventListener("pointermove", t),
                    document.removeEventListener("pointerup", n, {
                      capture: !0,
                    }));
                }
              );
            }
          }, [k, V, z]),
            o.useEffect(() => {
              let e = () => V(!1);
              return (
                window.addEventListener("blur", e),
                window.addEventListener("resize", e),
                () => {
                  (window.removeEventListener("blur", e),
                    window.removeEventListener("resize", e));
                }
              );
            }, [V]));
          let [K, Y] = n6((e) => {
              let t = I().filter((e) => !e.disabled),
                n = t.find((e) => e.ref.current === document.activeElement),
                r = n3(t, e, n);
              r && setTimeout(() => r.ref.current.focus());
            }),
            G = o.useCallback(
              (e, t, n) => {
                let r = !W.current && !n;
                ((void 0 !== A.value && A.value === t) || r) &&
                  (j(e), r && (W.current = !0));
              },
              [A.value],
            ),
            X = o.useCallback(() => k?.focus(), [k]),
            $ = o.useCallback(
              (e, t, n) => {
                let r = !W.current && !n;
                ((void 0 !== A.value && A.value === t) || r) && D(e);
              },
              [A.value],
            ),
            q = "popper" === r ? nj : nN,
            U =
              q === nj
                ? {
                    side: u,
                    sideOffset: f,
                    align: p,
                    alignOffset: g,
                    arrowPadding: y,
                    collisionBoundary: w,
                    collisionPadding: x,
                    sticky: b,
                    hideWhenDetached: E,
                    avoidCollisions: C,
                  }
                : {};
          return (0, d.jsx)(nP, {
            scope: n,
            content: k,
            viewport: P,
            onViewportChange: L,
            itemRefCallback: G,
            selectedItem: N,
            onItemLeave: X,
            itemTextRefCallback: $,
            focusSelectedItem: _,
            selectedItemText: O,
            position: r,
            isPositioned: F,
            searchRef: K,
            children: (0, d.jsx)(nl, {
              as: tx.DX,
              allowPinchZoom: !0,
              children: (0, d.jsx)(S, {
                asChild: !0,
                trapped: A.open,
                onMountAutoFocus: (e) => {
                  e.preventDefault();
                },
                onUnmountAutoFocus: (0, c.m)(i, (e) => {
                  (A.trigger?.focus({ preventScroll: !0 }), e.preventDefault());
                }),
                children: (0, d.jsx)(h.qW, {
                  asChild: !0,
                  disableOutsidePointerEvents: !0,
                  onEscapeKeyDown: l,
                  onPointerDownOutside: a,
                  onFocusOutside: (e) => e.preventDefault(),
                  onDismiss: () => A.onOpenChange(!1),
                  children: (0, d.jsx)(q, {
                    role: "listbox",
                    id: A.contentId,
                    "data-state": A.open ? "open" : "closed",
                    dir: A.dir,
                    onContextMenu: (e) => e.preventDefault(),
                    ...R,
                    ...U,
                    onPlaced: () => H(!0),
                    ref: M,
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      outline: "none",
                      ...R.style,
                    },
                    onKeyDown: (0, c.m)(R.onKeyDown, (e) => {
                      let t = e.ctrlKey || e.altKey || e.metaKey;
                      if (
                        ("Tab" === e.key && e.preventDefault(),
                        t || 1 !== e.key.length || Y(e.key),
                        ["ArrowUp", "ArrowDown", "Home", "End"].includes(e.key))
                      ) {
                        let t = I()
                          .filter((e) => !e.disabled)
                          .map((e) => e.ref.current);
                        if (
                          (["ArrowUp", "End"].includes(e.key) &&
                            (t = t.slice().reverse()),
                          ["ArrowUp", "ArrowDown"].includes(e.key))
                        ) {
                          let n = e.target,
                            r = t.indexOf(n);
                          t = t.slice(r + 1);
                        }
                        (setTimeout(() => B(t)), e.preventDefault());
                      }
                    }),
                  }),
                }),
              }),
            }),
          });
        });
      nM.displayName = "SelectContentImpl";
      var nN = o.forwardRef((e, t) => {
        let { __scopeSelect: n, onPlaced: r, ...i } = e,
          l = ng(nk, n),
          c = nL(nk, n),
          [u, f] = o.useState(null),
          [p, h] = o.useState(null),
          m = (0, s.s)(t, (e) => h(e)),
          v = nf(n),
          y = o.useRef(!1),
          w = o.useRef(!0),
          {
            viewport: x,
            selectedItem: b,
            selectedItemText: S,
            focusSelectedItem: E,
          } = c,
          C = o.useCallback(() => {
            if (l.trigger && l.valueNode && u && p && x && b && S) {
              let e = l.trigger.getBoundingClientRect(),
                t = p.getBoundingClientRect(),
                n = l.valueNode.getBoundingClientRect(),
                o = S.getBoundingClientRect();
              if ("rtl" !== l.dir) {
                let r = o.left - t.left,
                  i = n.left - r,
                  l = e.left - i,
                  c = e.width + l,
                  s = Math.max(c, t.width),
                  f = a(i, [10, Math.max(10, window.innerWidth - 10 - s)]);
                ((u.style.minWidth = c + "px"), (u.style.left = f + "px"));
              } else {
                let r = t.right - o.right,
                  i = window.innerWidth - n.right - r,
                  l = window.innerWidth - e.right - i,
                  c = e.width + l,
                  s = Math.max(c, t.width),
                  f = a(i, [10, Math.max(10, window.innerWidth - 10 - s)]);
                ((u.style.minWidth = c + "px"), (u.style.right = f + "px"));
              }
              let i = v(),
                c = window.innerHeight - 20,
                s = x.scrollHeight,
                f = window.getComputedStyle(p),
                d = parseInt(f.borderTopWidth, 10),
                h = parseInt(f.paddingTop, 10),
                m = parseInt(f.borderBottomWidth, 10),
                g = d + h + s + parseInt(f.paddingBottom, 10) + m,
                w = Math.min(5 * b.offsetHeight, g),
                E = window.getComputedStyle(x),
                C = parseInt(E.paddingTop, 10),
                R = parseInt(E.paddingBottom, 10),
                A = e.top + e.height / 2 - 10,
                k = b.offsetHeight / 2,
                T = d + h + (b.offsetTop + k);
              if (T <= A) {
                let e = i.length > 0 && b === i[i.length - 1].ref.current;
                u.style.bottom = "0px";
                let t = Math.max(
                  c - A,
                  k +
                    (e ? R : 0) +
                    (p.clientHeight - x.offsetTop - x.offsetHeight) +
                    m,
                );
                u.style.height = T + t + "px";
              } else {
                let e = i.length > 0 && b === i[0].ref.current;
                u.style.top = "0px";
                let t = Math.max(A, d + x.offsetTop + (e ? C : 0) + k);
                ((u.style.height = t + (g - T) + "px"),
                  (x.scrollTop = T - A + x.offsetTop));
              }
              ((u.style.margin = "10px 0"),
                (u.style.minHeight = w + "px"),
                (u.style.maxHeight = c + "px"),
                r?.(),
                requestAnimationFrame(() => (y.current = !0)));
            }
          }, [v, l.trigger, l.valueNode, u, p, x, b, S, l.dir, r]);
        (0, T.N)(() => C(), [C]);
        let [R, A] = o.useState();
        (0, T.N)(() => {
          p && A(window.getComputedStyle(p).zIndex);
        }, [p]);
        let k = o.useCallback(
          (e) => {
            e && !0 === w.current && (C(), E?.(), (w.current = !1));
          },
          [C, E],
        );
        return (0, d.jsx)(nO, {
          scope: n,
          contentWrapper: u,
          shouldExpandOnScrollRef: y,
          onScrollButtonChange: k,
          children: (0, d.jsx)("div", {
            ref: f,
            style: {
              display: "flex",
              flexDirection: "column",
              position: "fixed",
              zIndex: R,
            },
            children: (0, d.jsx)(g.sG.div, {
              ...i,
              ref: m,
              style: { boxSizing: "border-box", maxHeight: "100%", ...i.style },
            }),
          }),
        });
      });
      nN.displayName = "SelectItemAlignedPosition";
      var nj = o.forwardRef((e, t) => {
        let {
            __scopeSelect: n,
            align: r = "start",
            collisionPadding: o = 10,
            ...i
          } = e,
          l = nm(n);
        return (0, d.jsx)(td, {
          ...l,
          ...i,
          ref: t,
          align: r,
          collisionPadding: o,
          style: {
            boxSizing: "border-box",
            ...i.style,
            "--radix-select-content-transform-origin":
              "var(--radix-popper-transform-origin)",
            "--radix-select-content-available-width":
              "var(--radix-popper-available-width)",
            "--radix-select-content-available-height":
              "var(--radix-popper-available-height)",
            "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-select-trigger-height":
              "var(--radix-popper-anchor-height)",
          },
        });
      });
      nj.displayName = "SelectPopperPosition";
      var [nO, nD] = np(nk, {}),
        nI = "SelectViewport",
        nF = o.forwardRef((e, t) => {
          let { __scopeSelect: n, nonce: r, ...i } = e,
            l = nL(nI, n),
            a = nD(nI, n),
            u = (0, s.s)(t, l.onViewportChange),
            f = o.useRef(0);
          return (0, d.jsxs)(d.Fragment, {
            children: [
              (0, d.jsx)("style", {
                dangerouslySetInnerHTML: {
                  __html:
                    "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}",
                },
                nonce: r,
              }),
              (0, d.jsx)(ns.Slot, {
                scope: n,
                children: (0, d.jsx)(g.sG.div, {
                  "data-radix-select-viewport": "",
                  role: "presentation",
                  ...i,
                  ref: u,
                  style: {
                    position: "relative",
                    flex: 1,
                    overflow: "hidden auto",
                    ...i.style,
                  },
                  onScroll: (0, c.m)(i.onScroll, (e) => {
                    let t = e.currentTarget,
                      { contentWrapper: n, shouldExpandOnScrollRef: r } = a;
                    if (r?.current && n) {
                      let e = Math.abs(f.current - t.scrollTop);
                      if (e > 0) {
                        let r = window.innerHeight - 20,
                          o = Math.max(
                            parseFloat(n.style.minHeight),
                            parseFloat(n.style.height),
                          );
                        if (o < r) {
                          let i = o + e,
                            l = Math.min(r, i),
                            a = i - l;
                          ((n.style.height = l + "px"),
                            "0px" === n.style.bottom &&
                              ((t.scrollTop = a > 0 ? a : 0),
                              (n.style.justifyContent = "flex-end")));
                        }
                      }
                    }
                    f.current = t.scrollTop;
                  }),
                }),
              }),
            ],
          });
        });
      nF.displayName = nI;
      var nH = "SelectGroup",
        [nW, nB] = np(nH);
      o.forwardRef((e, t) => {
        let { __scopeSelect: n, ...r } = e,
          o = M();
        return (0, d.jsx)(nW, {
          scope: n,
          id: o,
          children: (0, d.jsx)(g.sG.div, {
            role: "group",
            "aria-labelledby": o,
            ...r,
            ref: t,
          }),
        });
      }).displayName = nH;
      var n_ = "SelectLabel";
      o.forwardRef((e, t) => {
        let { __scopeSelect: n, ...r } = e,
          o = nB(n_, n);
        return (0, d.jsx)(g.sG.div, { id: o.id, ...r, ref: t });
      }).displayName = n_;
      var nV = "SelectItem",
        [nz, nK] = np(nV),
        nY = o.forwardRef((e, t) => {
          let {
              __scopeSelect: n,
              value: r,
              disabled: i = !1,
              textValue: l,
              ...a
            } = e,
            u = ng(nV, n),
            f = nL(nV, n),
            p = u.value === r,
            [h, m] = o.useState(l ?? ""),
            [v, y] = o.useState(!1),
            w = (0, s.s)(t, (e) => f.itemRefCallback?.(e, r, i)),
            x = M(),
            b = o.useRef("touch"),
            S = () => {
              i || (u.onValueChange(r), u.onOpenChange(!1));
            };
          if ("" === r)
            throw Error(
              "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.",
            );
          return (0, d.jsx)(nz, {
            scope: n,
            value: r,
            disabled: i,
            textId: x,
            isSelected: p,
            onItemTextChange: o.useCallback((e) => {
              m((t) => t || (e?.textContent ?? "").trim());
            }, []),
            children: (0, d.jsx)(ns.ItemSlot, {
              scope: n,
              value: r,
              disabled: i,
              textValue: h,
              children: (0, d.jsx)(g.sG.div, {
                role: "option",
                "aria-labelledby": x,
                "data-highlighted": v ? "" : void 0,
                "aria-selected": p && v,
                "data-state": p ? "checked" : "unchecked",
                "aria-disabled": i || void 0,
                "data-disabled": i ? "" : void 0,
                tabIndex: i ? void 0 : -1,
                ...a,
                ref: w,
                onFocus: (0, c.m)(a.onFocus, () => y(!0)),
                onBlur: (0, c.m)(a.onBlur, () => y(!1)),
                onClick: (0, c.m)(a.onClick, () => {
                  "mouse" !== b.current && S();
                }),
                onPointerUp: (0, c.m)(a.onPointerUp, () => {
                  "mouse" === b.current && S();
                }),
                onPointerDown: (0, c.m)(a.onPointerDown, (e) => {
                  b.current = e.pointerType;
                }),
                onPointerMove: (0, c.m)(a.onPointerMove, (e) => {
                  ((b.current = e.pointerType),
                    i
                      ? f.onItemLeave?.()
                      : "mouse" === b.current &&
                        e.currentTarget.focus({ preventScroll: !0 }));
                }),
                onPointerLeave: (0, c.m)(a.onPointerLeave, (e) => {
                  e.currentTarget === document.activeElement &&
                    f.onItemLeave?.();
                }),
                onKeyDown: (0, c.m)(a.onKeyDown, (e) => {
                  (f.searchRef?.current === "" || " " !== e.key) &&
                    (nc.includes(e.key) && S(),
                    " " === e.key && e.preventDefault());
                }),
              }),
            }),
          });
        });
      nY.displayName = nV;
      var nG = "SelectItemText",
        nX = o.forwardRef((e, t) => {
          let { __scopeSelect: n, className: r, style: i, ...a } = e,
            c = ng(nG, n),
            u = nL(nG, n),
            f = nK(nG, n),
            p = nw(nG, n),
            [h, m] = o.useState(null),
            v = (0, s.s)(
              t,
              (e) => m(e),
              f.onItemTextChange,
              (e) => u.itemTextRefCallback?.(e, f.value, f.disabled),
            ),
            y = h?.textContent,
            w = o.useMemo(
              () =>
                (0, d.jsx)(
                  "option",
                  { value: f.value, disabled: f.disabled, children: y },
                  f.value,
                ),
              [f.disabled, f.value, y],
            ),
            { onNativeOptionAdd: x, onNativeOptionRemove: b } = p;
          return (
            (0, T.N)(() => (x(w), () => b(w)), [x, b, w]),
            (0, d.jsxs)(d.Fragment, {
              children: [
                (0, d.jsx)(g.sG.span, { id: f.textId, ...a, ref: v }),
                f.isSelected && c.valueNode && !c.valueNodeHasChildren
                  ? l.createPortal(a.children, c.valueNode)
                  : null,
              ],
            })
          );
        });
      nX.displayName = nG;
      var n$ = "SelectItemIndicator",
        nq = o.forwardRef((e, t) => {
          let { __scopeSelect: n, ...r } = e;
          return nK(n$, n).isSelected
            ? (0, d.jsx)(g.sG.span, { "aria-hidden": !0, ...r, ref: t })
            : null;
        });
      nq.displayName = n$;
      var nU = "SelectScrollUpButton",
        nZ = o.forwardRef((e, t) => {
          let n = nL(nU, e.__scopeSelect),
            r = nD(nU, e.__scopeSelect),
            [i, l] = o.useState(!1),
            a = (0, s.s)(t, r.onScrollButtonChange);
          return (
            (0, T.N)(() => {
              if (n.viewport && n.isPositioned) {
                let e = function () {
                    l(t.scrollTop > 0);
                  },
                  t = n.viewport;
                return (
                  e(),
                  t.addEventListener("scroll", e),
                  () => t.removeEventListener("scroll", e)
                );
              }
            }, [n.viewport, n.isPositioned]),
            i
              ? (0, d.jsx)(n0, {
                  ...e,
                  ref: a,
                  onAutoScroll: () => {
                    let { viewport: e, selectedItem: t } = n;
                    e && t && (e.scrollTop = e.scrollTop - t.offsetHeight);
                  },
                })
              : null
          );
        });
      nZ.displayName = nU;
      var nJ = "SelectScrollDownButton",
        nQ = o.forwardRef((e, t) => {
          let n = nL(nJ, e.__scopeSelect),
            r = nD(nJ, e.__scopeSelect),
            [i, l] = o.useState(!1),
            a = (0, s.s)(t, r.onScrollButtonChange);
          return (
            (0, T.N)(() => {
              if (n.viewport && n.isPositioned) {
                let e = function () {
                    let e = t.scrollHeight - t.clientHeight;
                    l(Math.ceil(t.scrollTop) < e);
                  },
                  t = n.viewport;
                return (
                  e(),
                  t.addEventListener("scroll", e),
                  () => t.removeEventListener("scroll", e)
                );
              }
            }, [n.viewport, n.isPositioned]),
            i
              ? (0, d.jsx)(n0, {
                  ...e,
                  ref: a,
                  onAutoScroll: () => {
                    let { viewport: e, selectedItem: t } = n;
                    e && t && (e.scrollTop = e.scrollTop + t.offsetHeight);
                  },
                })
              : null
          );
        });
      nQ.displayName = nJ;
      var n0 = o.forwardRef((e, t) => {
        let { __scopeSelect: n, onAutoScroll: r, ...i } = e,
          l = nL("SelectScrollButton", n),
          a = o.useRef(null),
          u = nf(n),
          s = o.useCallback(() => {
            null !== a.current &&
              (window.clearInterval(a.current), (a.current = null));
          }, []);
        return (
          o.useEffect(() => () => s(), [s]),
          (0, T.N)(() => {
            let e = u().find((e) => e.ref.current === document.activeElement);
            e?.ref.current?.scrollIntoView({ block: "nearest" });
          }, [u]),
          (0, d.jsx)(g.sG.div, {
            "aria-hidden": !0,
            ...i,
            ref: t,
            style: { flexShrink: 0, ...i.style },
            onPointerDown: (0, c.m)(i.onPointerDown, () => {
              null === a.current && (a.current = window.setInterval(r, 50));
            }),
            onPointerMove: (0, c.m)(i.onPointerMove, () => {
              (l.onItemLeave?.(),
                null === a.current && (a.current = window.setInterval(r, 50)));
            }),
            onPointerLeave: (0, c.m)(i.onPointerLeave, () => {
              s();
            }),
          })
        );
      });
      o.forwardRef((e, t) => {
        let { __scopeSelect: n, ...r } = e;
        return (0, d.jsx)(g.sG.div, { "aria-hidden": !0, ...r, ref: t });
      }).displayName = "SelectSeparator";
      var n1 = "SelectArrow";
      function n2(e) {
        return "" === e || void 0 === e;
      }
      o.forwardRef((e, t) => {
        let { __scopeSelect: n, ...r } = e,
          o = nm(n),
          i = ng(n1, n),
          l = nL(n1, n);
        return i.open && "popper" === l.position
          ? (0, d.jsx)(tm, { ...o, ...r, ref: t })
          : null;
      }).displayName = n1;
      var n5 = o.forwardRef((e, t) => {
        let { value: n, ...r } = e,
          i = o.useRef(null),
          l = (0, s.s)(t, i),
          a = (function (e) {
            let t = o.useRef({ value: e, previous: e });
            return o.useMemo(
              () => (
                t.current.value !== e &&
                  ((t.current.previous = t.current.value),
                  (t.current.value = e)),
                t.current.previous
              ),
              [e],
            );
          })(n);
        return (
          o.useEffect(() => {
            let e = i.current,
              t = Object.getOwnPropertyDescriptor(
                window.HTMLSelectElement.prototype,
                "value",
              ).set;
            if (a !== n && t) {
              let r = new Event("change", { bubbles: !0 });
              (t.call(e, n), e.dispatchEvent(r));
            }
          }, [a, n]),
          (0, d.jsx)(tS.s, {
            asChild: !0,
            children: (0, d.jsx)("select", { ...r, ref: l, defaultValue: n }),
          })
        );
      });
      function n6(e) {
        let t = (0, y.c)(e),
          n = o.useRef(""),
          r = o.useRef(0),
          i = o.useCallback(
            (e) => {
              let o = n.current + e;
              (t(o),
                (function e(t) {
                  ((n.current = t),
                    window.clearTimeout(r.current),
                    "" !== t &&
                      (r.current = window.setTimeout(() => e(""), 1e3)));
                })(o));
            },
            [t],
          ),
          l = o.useCallback(() => {
            ((n.current = ""), window.clearTimeout(r.current));
          }, []);
        return (
          o.useEffect(() => () => window.clearTimeout(r.current), []),
          [n, i, l]
        );
      }
      function n3(e, t, n) {
        var r, o;
        let i =
            t.length > 1 && Array.from(t).every((e) => e === t[0]) ? t[0] : t,
          l = n ? e.indexOf(n) : -1,
          a =
            ((r = e),
            (o = Math.max(l, 0)),
            r.map((e, t) => r[(o + t) % r.length]));
        1 === i.length && (a = a.filter((e) => e !== n));
        let c = a.find((e) =>
          e.textValue.toLowerCase().startsWith(i.toLowerCase()),
        );
        return c !== n ? c : void 0;
      }
      n5.displayName = "BubbleSelect";
      var n4 = nx,
        n7 = nS,
        n9 = nC,
        n8 = nR,
        re = nA,
        rt = nT,
        rn = nF,
        rr = nY,
        ro = nX,
        ri = nq,
        rl = nZ,
        ra = nQ;
    },
    8677: (e, t, n) => {
      n.d(t, { A: () => r });
      let r = (0, n(6203).A)("Moon", [
        ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }],
      ]);
    },
    9831: (e, t, n) => {
      n.d(t, { A: () => r });
      let r = (0, n(6203).A)("ChevronUp", [
        ["path", { d: "m18 15-6-6-6 6", key: "153udz" }],
      ]);
    },
  },
]);
