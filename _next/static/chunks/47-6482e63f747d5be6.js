"use strict";
(globalThis.webpackChunk_N_E = globalThis.webpackChunk_N_E || []).push([
  [47],
  {
    427: (e, t, r) => {
      r.d(t, { default: () => a });
      var n = r(2571),
        o = r(2057);
      function a(e) {
        let { locale: t, ...r } = e;
        if (!t) throw Error(void 0);
        return (0, o.jsx)(n.Dk, { locale: t, ...r });
      }
    },
    598: (e, t, r) => {
      r.d(t, { c: () => o });
      var n = r(3981);
      function o(e) {
        let t = n.useRef(e);
        return (
          n.useEffect(() => {
            t.current = e;
          }),
          n.useMemo(
            () =>
              (...e) =>
                t.current?.(...e),
            [],
          )
        );
      }
    },
    614: (e, t, r) => {
      r.d(t, { s: () => s });
      var n = r(3981),
        o = r(6573),
        a = r(2057),
        s = n.forwardRef((e, t) =>
          (0, a.jsx)(o.sG.span, {
            ...e,
            ref: t,
            style: {
              position: "absolute",
              border: 0,
              width: 1,
              height: 1,
              padding: 0,
              margin: -1,
              overflow: "hidden",
              clip: "rect(0, 0, 0, 0)",
              whiteSpace: "nowrap",
              wordWrap: "normal",
              ...e.style,
            },
          }),
        );
      s.displayName = "VisuallyHidden";
    },
    733: (e, t, r) => {
      r.d(t, { m: () => n });
      function n(e, t, { checkForDefaultPrevented: r = !0 } = {}) {
        return function (n) {
          if ((e?.(n), !1 === r || !n.defaultPrevented)) return t?.(n);
        };
      }
    },
    2233: (e, t, r) => {
      r.d(t, { A: () => a });
      var n = r(3981),
        o = r(2057);
      function a(e, t = []) {
        let r = [],
          s = () => {
            let t = r.map((e) => n.createContext(e));
            return function (r) {
              let o = r?.[e] || t;
              return n.useMemo(
                () => ({ [`__scope${e}`]: { ...r, [e]: o } }),
                [r, o],
              );
            };
          };
        return (
          (s.scopeName = e),
          [
            function (t, a) {
              let s = n.createContext(a),
                i = r.length;
              r = [...r, a];
              let l = (t) => {
                let { scope: r, children: a, ...l } = t,
                  u = r?.[e]?.[i] || s,
                  c = n.useMemo(() => l, Object.values(l));
                return (0, o.jsx)(u.Provider, { value: c, children: a });
              };
              return (
                (l.displayName = t + "Provider"),
                [
                  l,
                  function (r, o) {
                    let l = o?.[e]?.[i] || s,
                      u = n.useContext(l);
                    if (u) return u;
                    if (void 0 !== a) return a;
                    throw Error(`\`${r}\` must be used within \`${t}\``);
                  },
                ]
              );
            },
            (function (...e) {
              let t = e[0];
              if (1 === e.length) return t;
              let r = () => {
                let r = e.map((e) => ({
                  useScope: e(),
                  scopeName: e.scopeName,
                }));
                return function (e) {
                  let o = r.reduce((t, { useScope: r, scopeName: n }) => {
                    let o = r(e)[`__scope${n}`];
                    return { ...t, ...o };
                  }, {});
                  return n.useMemo(
                    () => ({ [`__scope${t.scopeName}`]: o }),
                    [o],
                  );
                };
              };
              return ((r.scopeName = t.scopeName), r);
            })(s, ...t),
          ]
        );
      }
    },
    6009: (e, t, r) => {
      r.d(t, { D: () => c, N: () => d });
      var n = r(3981),
        o = (e, t, r, n, o, a, s, i) => {
          let l = document.documentElement,
            u = ["light", "dark"];
          function c(t) {
            var r;
            ((Array.isArray(e) ? e : [e]).forEach((e) => {
              let r = "class" === e,
                n = r && a ? o.map((e) => a[e] || e) : o;
              r
                ? (l.classList.remove(...n),
                  l.classList.add(a && a[t] ? a[t] : t))
                : l.setAttribute(e, t);
            }),
              (r = t),
              i && u.includes(r) && (l.style.colorScheme = r));
          }
          if (n) c(n);
          else
            try {
              let e = localStorage.getItem(t) || r,
                n =
                  s && "system" === e
                    ? window.matchMedia("(prefers-color-scheme: dark)").matches
                      ? "dark"
                      : "light"
                    : e;
              c(n);
            } catch (e) {}
        },
        a = ["light", "dark"],
        s = "(prefers-color-scheme: dark)",
        i = "undefined" == typeof window,
        l = n.createContext(void 0),
        u = { setTheme: (e) => {}, themes: [] },
        c = () => {
          var e;
          return null != (e = n.useContext(l)) ? e : u;
        },
        d = (e) =>
          n.useContext(l)
            ? n.createElement(n.Fragment, null, e.children)
            : n.createElement(m, { ...e }),
        f = ["light", "dark"],
        m = (e) => {
          let {
              forcedTheme: t,
              disableTransitionOnChange: r = !1,
              enableSystem: o = !0,
              enableColorScheme: i = !0,
              storageKey: u = "theme",
              themes: c = f,
              defaultTheme: d = o ? "system" : "light",
              attribute: m = "data-theme",
              value: y,
              children: E,
              nonce: b,
              scriptProps: g,
            } = e,
            [T, P] = n.useState(() => v(u, d)),
            [x, S] = n.useState(() => ("system" === T ? h() : T)),
            C = y ? Object.values(y) : c,
            R = n.useCallback(
              (e) => {
                let t = e;
                if (!t) return;
                "system" === e && o && (t = h());
                let n = y ? y[t] : t,
                  s = r ? w(b) : null,
                  l = document.documentElement,
                  u = (e) => {
                    "class" === e
                      ? (l.classList.remove(...C), n && l.classList.add(n))
                      : e.startsWith("data-") &&
                        (n ? l.setAttribute(e, n) : l.removeAttribute(e));
                  };
                if ((Array.isArray(m) ? m.forEach(u) : u(m), i)) {
                  let e = a.includes(d) ? d : null,
                    r = a.includes(t) ? t : e;
                  l.style.colorScheme = r;
                }
                null == s || s();
              },
              [b],
            ),
            N = n.useCallback(
              (e) => {
                let t = "function" == typeof e ? e(T) : e;
                P(t);
                try {
                  localStorage.setItem(u, t);
                } catch (e) {}
              },
              [T],
            ),
            L = n.useCallback(
              (e) => {
                (S(h(e)), "system" === T && o && !t && R("system"));
              },
              [T, t],
            );
          (n.useEffect(() => {
            let e = window.matchMedia(s);
            return (e.addListener(L), L(e), () => e.removeListener(L));
          }, [L]),
            n.useEffect(() => {
              let e = (e) => {
                e.key === u && (e.newValue ? P(e.newValue) : N(d));
              };
              return (
                window.addEventListener("storage", e),
                () => window.removeEventListener("storage", e)
              );
            }, [N]),
            n.useEffect(() => {
              R(null != t ? t : T);
            }, [t, T]));
          let A = n.useMemo(
            () => ({
              theme: T,
              setTheme: N,
              forcedTheme: t,
              resolvedTheme: "system" === T ? x : T,
              themes: o ? [...c, "system"] : c,
              systemTheme: o ? x : void 0,
            }),
            [T, N, t, x, o, c],
          );
          return n.createElement(
            l.Provider,
            { value: A },
            n.createElement(p, {
              forcedTheme: t,
              storageKey: u,
              attribute: m,
              enableSystem: o,
              enableColorScheme: i,
              defaultTheme: d,
              value: y,
              themes: c,
              nonce: b,
              scriptProps: g,
            }),
            E,
          );
        },
        p = n.memo((e) => {
          let {
              forcedTheme: t,
              storageKey: r,
              attribute: a,
              enableSystem: s,
              enableColorScheme: i,
              defaultTheme: l,
              value: u,
              themes: c,
              nonce: d,
              scriptProps: f,
            } = e,
            m = JSON.stringify([a, r, l, t, c, u, s, i]).slice(1, -1);
          return n.createElement("script", {
            ...f,
            suppressHydrationWarning: !0,
            nonce: "undefined" == typeof window ? d : "",
            dangerouslySetInnerHTML: { __html: `(${o.toString()})(${m})` },
          });
        }),
        v = (e, t) => {
          let r;
          if (!i) {
            try {
              r = localStorage.getItem(e) || void 0;
            } catch (e) {}
            return r || t;
          }
        },
        w = (e) => {
          let t = document.createElement("style");
          return (
            e && t.setAttribute("nonce", e),
            t.appendChild(
              document.createTextNode(
                "*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}",
              ),
            ),
            document.head.appendChild(t),
            () => {
              (window.getComputedStyle(document.body),
                setTimeout(() => {
                  document.head.removeChild(t);
                }, 1));
            }
          );
        },
        h = (e) => (
          e || (e = window.matchMedia(s)),
          e.matches ? "dark" : "light"
        );
    },
    6048: (e, t, r) => {
      r.d(t, { A: () => n });
      let n = (0, r(6203).A)("X", [
        ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
        ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
      ]);
    },
    6202: (e, t, r) => {
      r.d(t, { Z: () => l });
      var n = r(3981),
        o = r(1760),
        a = r(6573),
        s = r(8530),
        i = r(2057),
        l = n.forwardRef((e, t) => {
          let { container: r, ...l } = e,
            [u, c] = n.useState(!1);
          (0, s.N)(() => c(!0), []);
          let d = r || (u && globalThis?.document?.body);
          return d
            ? o.createPortal((0, i.jsx)(a.sG.div, { ...l, ref: t }), d)
            : null;
        });
      l.displayName = "Portal";
    },
    6238: (e, t, r) => {
      r.d(t, { lg: () => h, qW: () => f, bL: () => w });
      var n,
        o = r(3981),
        a = r(733),
        s = r(6573),
        i = r(4057),
        l = r(598),
        u = r(2057),
        c = "dismissableLayer.update",
        d = o.createContext({
          layers: new Set(),
          layersWithOutsidePointerEventsDisabled: new Set(),
          branches: new Set(),
        }),
        f = o.forwardRef((e, t) => {
          let {
              disableOutsidePointerEvents: r = !1,
              onEscapeKeyDown: f,
              onPointerDownOutside: m,
              onFocusOutside: w,
              onInteractOutside: h,
              onDismiss: y,
              ...E
            } = e,
            b = o.useContext(d),
            [g, T] = o.useState(null),
            P = g?.ownerDocument ?? globalThis?.document,
            [, x] = o.useState({}),
            S = (0, i.s)(t, (e) => T(e)),
            C = Array.from(b.layers),
            [R] = [...b.layersWithOutsidePointerEventsDisabled].slice(-1),
            N = C.indexOf(R),
            L = g ? C.indexOf(g) : -1,
            A = b.layersWithOutsidePointerEventsDisabled.size > 0,
            k = L >= N,
            j = (function (e) {
              let t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : globalThis?.document,
                r = (0, l.c)(e),
                n = o.useRef(!1),
                a = o.useRef(() => {});
              return (
                o.useEffect(() => {
                  let e = (e) => {
                      if (e.target && !n.current) {
                        let n = function () {
                            v("dismissableLayer.pointerDownOutside", r, o, {
                              discrete: !0,
                            });
                          },
                          o = { originalEvent: e };
                        "touch" === e.pointerType
                          ? (t.removeEventListener("click", a.current),
                            (a.current = n),
                            t.addEventListener("click", a.current, {
                              once: !0,
                            }))
                          : n();
                      } else t.removeEventListener("click", a.current);
                      n.current = !1;
                    },
                    o = window.setTimeout(() => {
                      t.addEventListener("pointerdown", e);
                    }, 0);
                  return () => {
                    (window.clearTimeout(o),
                      t.removeEventListener("pointerdown", e),
                      t.removeEventListener("click", a.current));
                  };
                }, [t, r]),
                { onPointerDownCapture: () => (n.current = !0) }
              );
            })((e) => {
              let t = e.target,
                r = [...b.branches].some((e) => e.contains(t));
              !k || r || (m?.(e), h?.(e), e.defaultPrevented || y?.());
            }, P),
            O = (function (e) {
              let t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : globalThis?.document,
                r = (0, l.c)(e),
                n = o.useRef(!1);
              return (
                o.useEffect(() => {
                  let e = (e) => {
                    e.target &&
                      !n.current &&
                      v(
                        "dismissableLayer.focusOutside",
                        r,
                        { originalEvent: e },
                        { discrete: !1 },
                      );
                  };
                  return (
                    t.addEventListener("focusin", e),
                    () => t.removeEventListener("focusin", e)
                  );
                }, [t, r]),
                {
                  onFocusCapture: () => (n.current = !0),
                  onBlurCapture: () => (n.current = !1),
                }
              );
            })((e) => {
              let t = e.target;
              [...b.branches].some((e) => e.contains(t)) ||
                (w?.(e), h?.(e), e.defaultPrevented || y?.());
            }, P);
          return (
            !(function (e, t = globalThis?.document) {
              let r = (0, l.c)(e);
              o.useEffect(() => {
                let e = (e) => {
                  "Escape" === e.key && r(e);
                };
                return (
                  t.addEventListener("keydown", e, { capture: !0 }),
                  () => t.removeEventListener("keydown", e, { capture: !0 })
                );
              }, [r, t]);
            })((e) => {
              L === b.layers.size - 1 &&
                (f?.(e), !e.defaultPrevented && y && (e.preventDefault(), y()));
            }, P),
            o.useEffect(() => {
              if (g)
                return (
                  r &&
                    (0 === b.layersWithOutsidePointerEventsDisabled.size &&
                      ((n = P.body.style.pointerEvents),
                      (P.body.style.pointerEvents = "none")),
                    b.layersWithOutsidePointerEventsDisabled.add(g)),
                  b.layers.add(g),
                  p(),
                  () => {
                    r &&
                      1 === b.layersWithOutsidePointerEventsDisabled.size &&
                      (P.body.style.pointerEvents = n);
                  }
                );
            }, [g, P, r, b]),
            o.useEffect(
              () => () => {
                g &&
                  (b.layers.delete(g),
                  b.layersWithOutsidePointerEventsDisabled.delete(g),
                  p());
              },
              [g, b],
            ),
            o.useEffect(() => {
              let e = () => x({});
              return (
                document.addEventListener(c, e),
                () => document.removeEventListener(c, e)
              );
            }, []),
            (0, u.jsx)(s.sG.div, {
              ...E,
              ref: S,
              style: {
                pointerEvents: A ? (k ? "auto" : "none") : void 0,
                ...e.style,
              },
              onFocusCapture: (0, a.m)(e.onFocusCapture, O.onFocusCapture),
              onBlurCapture: (0, a.m)(e.onBlurCapture, O.onBlurCapture),
              onPointerDownCapture: (0, a.m)(
                e.onPointerDownCapture,
                j.onPointerDownCapture,
              ),
            })
          );
        });
      f.displayName = "DismissableLayer";
      var m = o.forwardRef((e, t) => {
        let r = o.useContext(d),
          n = o.useRef(null),
          a = (0, i.s)(t, n);
        return (
          o.useEffect(() => {
            let e = n.current;
            if (e)
              return (
                r.branches.add(e),
                () => {
                  r.branches.delete(e);
                }
              );
          }, [r.branches]),
          (0, u.jsx)(s.sG.div, { ...e, ref: a })
        );
      });
      function p() {
        let e = new CustomEvent(c);
        document.dispatchEvent(e);
      }
      function v(e, t, r, n) {
        let { discrete: o } = n,
          a = r.originalEvent.target,
          i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: r });
        (t && a.addEventListener(e, t, { once: !0 }),
          o ? (0, s.hO)(a, i) : a.dispatchEvent(i));
      }
      m.displayName = "DismissableLayerBranch";
      var w = f,
        h = m;
    },
    6402: (e, t, r) => {
      r.d(t, { i: () => a });
      var n = r(3981),
        o = r(598);
      function a({ prop: e, defaultProp: t, onChange: r = () => {} }) {
        let [a, s] = (function ({ defaultProp: e, onChange: t }) {
            let r = n.useState(e),
              [a] = r,
              s = n.useRef(a),
              i = (0, o.c)(t);
            return (
              n.useEffect(() => {
                s.current !== a && (i(a), (s.current = a));
              }, [a, s, i]),
              r
            );
          })({ defaultProp: t, onChange: r }),
          i = void 0 !== e,
          l = i ? e : a,
          u = (0, o.c)(r);
        return [
          l,
          n.useCallback(
            (t) => {
              if (i) {
                let r = "function" == typeof t ? t(e) : t;
                r !== e && u(r);
              } else s(t);
            },
            [i, e, s, u],
          ),
        ];
      }
    },
    6573: (e, t, r) => {
      r.d(t, { hO: () => l, sG: () => i });
      var n = r(3981),
        o = r(1760),
        a = r(8097),
        s = r(2057),
        i = [
          "a",
          "button",
          "div",
          "form",
          "h2",
          "h3",
          "img",
          "input",
          "label",
          "li",
          "nav",
          "ol",
          "p",
          "span",
          "svg",
          "ul",
        ].reduce((e, t) => {
          let r = n.forwardRef((e, r) => {
            let { asChild: n, ...o } = e,
              i = n ? a.DX : t;
            return (
              "undefined" != typeof window &&
                (window[Symbol.for("radix-ui")] = !0),
              (0, s.jsx)(i, { ...o, ref: r })
            );
          });
          return ((r.displayName = `Primitive.${t}`), { ...e, [t]: r });
        }, {});
      function l(e, t) {
        e && o.flushSync(() => e.dispatchEvent(t));
      }
    },
    6683: (e, t, r) => {
      r.d(t, {
        rc: () => er,
        bm: () => en,
        VY: () => et,
        Kq: () => Z,
        bL: () => Q,
        hE: () => ee,
        LM: () => J,
      });
      var n = r(3981),
        o = r(1760),
        a = r(733),
        s = r(4057),
        i = r(8617),
        l = r(2233),
        u = r(6238),
        c = r(6202),
        d = r(8530),
        f = (e) => {
          let { present: t, children: r } = e,
            o = (function (e) {
              var t, r;
              let [o, a] = n.useState(),
                s = n.useRef({}),
                i = n.useRef(e),
                l = n.useRef("none"),
                [u, c] =
                  ((t = e ? "mounted" : "unmounted"),
                  (r = {
                    mounted: {
                      UNMOUNT: "unmounted",
                      ANIMATION_OUT: "unmountSuspended",
                    },
                    unmountSuspended: {
                      MOUNT: "mounted",
                      ANIMATION_END: "unmounted",
                    },
                    unmounted: { MOUNT: "mounted" },
                  }),
                  n.useReducer((e, t) => r[e][t] ?? e, t));
              return (
                n.useEffect(() => {
                  let e = m(s.current);
                  l.current = "mounted" === u ? e : "none";
                }, [u]),
                (0, d.N)(() => {
                  let t = s.current,
                    r = i.current;
                  if (r !== e) {
                    let n = l.current,
                      o = m(t);
                    (e
                      ? c("MOUNT")
                      : "none" === o || t?.display === "none"
                        ? c("UNMOUNT")
                        : r && n !== o
                          ? c("ANIMATION_OUT")
                          : c("UNMOUNT"),
                      (i.current = e));
                  }
                }, [e, c]),
                (0, d.N)(() => {
                  if (o) {
                    let e,
                      t = o.ownerDocument.defaultView ?? window,
                      r = (r) => {
                        let n = m(s.current).includes(r.animationName);
                        if (
                          r.target === o &&
                          n &&
                          (c("ANIMATION_END"), !i.current)
                        ) {
                          let r = o.style.animationFillMode;
                          ((o.style.animationFillMode = "forwards"),
                            (e = t.setTimeout(() => {
                              "forwards" === o.style.animationFillMode &&
                                (o.style.animationFillMode = r);
                            })));
                        }
                      },
                      n = (e) => {
                        e.target === o && (l.current = m(s.current));
                      };
                    return (
                      o.addEventListener("animationstart", n),
                      o.addEventListener("animationcancel", r),
                      o.addEventListener("animationend", r),
                      () => {
                        (t.clearTimeout(e),
                          o.removeEventListener("animationstart", n),
                          o.removeEventListener("animationcancel", r),
                          o.removeEventListener("animationend", r));
                      }
                    );
                  }
                  c("ANIMATION_END");
                }, [o, c]),
                {
                  isPresent: ["mounted", "unmountSuspended"].includes(u),
                  ref: n.useCallback((e) => {
                    (e && (s.current = getComputedStyle(e)), a(e));
                  }, []),
                }
              );
            })(t),
            a =
              "function" == typeof r
                ? r({ present: o.isPresent })
                : n.Children.only(r),
            i = (0, s.s)(
              o.ref,
              (function (e) {
                let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                  r = t && "isReactWarning" in t && t.isReactWarning;
                return r
                  ? e.ref
                  : (r =
                        (t = Object.getOwnPropertyDescriptor(e, "ref")?.get) &&
                        "isReactWarning" in t &&
                        t.isReactWarning)
                    ? e.props.ref
                    : e.props.ref || e.ref;
              })(a),
            );
          return "function" == typeof r || o.isPresent
            ? n.cloneElement(a, { ref: i })
            : null;
        };
      function m(e) {
        return e?.animationName || "none";
      }
      f.displayName = "Presence";
      var p = r(6573),
        v = r(598),
        w = r(6402),
        h = r(614),
        y = r(2057),
        E = "ToastProvider",
        [b, g, T] = (0, i.N)("Toast"),
        [P, x] = (0, l.A)("Toast", [T]),
        [S, C] = P(E),
        R = (e) => {
          let {
              __scopeToast: t,
              label: r = "Notification",
              duration: o = 5e3,
              swipeDirection: a = "right",
              swipeThreshold: s = 50,
              children: i,
            } = e,
            [l, u] = n.useState(null),
            [c, d] = n.useState(0),
            f = n.useRef(!1),
            m = n.useRef(!1);
          return (
            r.trim() ||
              console.error(
                `Invalid prop \`label\` supplied to \`${E}\`. Expected non-empty \`string\`.`,
              ),
            (0, y.jsx)(b.Provider, {
              scope: t,
              children: (0, y.jsx)(S, {
                scope: t,
                label: r,
                duration: o,
                swipeDirection: a,
                swipeThreshold: s,
                toastCount: c,
                viewport: l,
                onViewportChange: u,
                onToastAdd: n.useCallback(() => d((e) => e + 1), []),
                onToastRemove: n.useCallback(() => d((e) => e - 1), []),
                isFocusedToastEscapeKeyDownRef: f,
                isClosePausedRef: m,
                children: i,
              }),
            })
          );
        };
      R.displayName = E;
      var N = "ToastViewport",
        L = ["F8"],
        A = "toast.viewportPause",
        k = "toast.viewportResume",
        j = n.forwardRef((e, t) => {
          let {
              __scopeToast: r,
              hotkey: o = L,
              label: a = "Notifications ({hotkey})",
              ...i
            } = e,
            l = C(N, r),
            c = g(r),
            d = n.useRef(null),
            f = n.useRef(null),
            m = n.useRef(null),
            v = n.useRef(null),
            w = (0, s.s)(t, v, l.onViewportChange),
            h = o.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
            E = l.toastCount > 0;
          (n.useEffect(() => {
            let e = (e) => {
              0 !== o.length &&
                o.every((t) => e[t] || e.code === t) &&
                v.current?.focus();
            };
            return (
              document.addEventListener("keydown", e),
              () => document.removeEventListener("keydown", e)
            );
          }, [o]),
            n.useEffect(() => {
              let e = d.current,
                t = v.current;
              if (E && e && t) {
                let r = () => {
                    if (!l.isClosePausedRef.current) {
                      let e = new CustomEvent(A);
                      (t.dispatchEvent(e), (l.isClosePausedRef.current = !0));
                    }
                  },
                  n = () => {
                    if (l.isClosePausedRef.current) {
                      let e = new CustomEvent(k);
                      (t.dispatchEvent(e), (l.isClosePausedRef.current = !1));
                    }
                  },
                  o = (t) => {
                    e.contains(t.relatedTarget) || n();
                  },
                  a = () => {
                    e.contains(document.activeElement) || n();
                  };
                return (
                  e.addEventListener("focusin", r),
                  e.addEventListener("focusout", o),
                  e.addEventListener("pointermove", r),
                  e.addEventListener("pointerleave", a),
                  window.addEventListener("blur", r),
                  window.addEventListener("focus", n),
                  () => {
                    (e.removeEventListener("focusin", r),
                      e.removeEventListener("focusout", o),
                      e.removeEventListener("pointermove", r),
                      e.removeEventListener("pointerleave", a),
                      window.removeEventListener("blur", r),
                      window.removeEventListener("focus", n));
                  }
                );
              }
            }, [E, l.isClosePausedRef]));
          let T = n.useCallback(
            (e) => {
              let { tabbingDirection: t } = e,
                r = c().map((e) => {
                  let r = e.ref.current,
                    n = [
                      r,
                      ...(function (e) {
                        let t = [],
                          r = document.createTreeWalker(
                            e,
                            NodeFilter.SHOW_ELEMENT,
                            {
                              acceptNode: (e) => {
                                let t =
                                  "INPUT" === e.tagName && "hidden" === e.type;
                                return e.disabled || e.hidden || t
                                  ? NodeFilter.FILTER_SKIP
                                  : e.tabIndex >= 0
                                    ? NodeFilter.FILTER_ACCEPT
                                    : NodeFilter.FILTER_SKIP;
                              },
                            },
                          );
                        for (; r.nextNode(); ) t.push(r.currentNode);
                        return t;
                      })(r),
                    ];
                  return "forwards" === t ? n : n.reverse();
                });
              return ("forwards" === t ? r.reverse() : r).flat();
            },
            [c],
          );
          return (
            n.useEffect(() => {
              let e = v.current;
              if (e) {
                let t = (t) => {
                  let r = t.altKey || t.ctrlKey || t.metaKey;
                  if ("Tab" === t.key && !r) {
                    let r = document.activeElement,
                      n = t.shiftKey;
                    if (t.target === e && n) {
                      f.current?.focus();
                      return;
                    }
                    let o = T({
                        tabbingDirection: n ? "backwards" : "forwards",
                      }),
                      a = o.findIndex((e) => e === r);
                    z(o.slice(a + 1))
                      ? t.preventDefault()
                      : n
                        ? f.current?.focus()
                        : m.current?.focus();
                  }
                };
                return (
                  e.addEventListener("keydown", t),
                  () => e.removeEventListener("keydown", t)
                );
              }
            }, [c, T]),
            (0, y.jsxs)(u.lg, {
              ref: d,
              role: "region",
              "aria-label": a.replace("{hotkey}", h),
              tabIndex: -1,
              style: { pointerEvents: E ? void 0 : "none" },
              children: [
                E &&
                  (0, y.jsx)(D, {
                    ref: f,
                    onFocusFromOutsideViewport: () => {
                      z(T({ tabbingDirection: "forwards" }));
                    },
                  }),
                (0, y.jsx)(b.Slot, {
                  scope: r,
                  children: (0, y.jsx)(p.sG.ol, { tabIndex: -1, ...i, ref: w }),
                }),
                E &&
                  (0, y.jsx)(D, {
                    ref: m,
                    onFocusFromOutsideViewport: () => {
                      z(T({ tabbingDirection: "backwards" }));
                    },
                  }),
              ],
            })
          );
        });
      j.displayName = N;
      var O = "ToastFocusProxy",
        D = n.forwardRef((e, t) => {
          let { __scopeToast: r, onFocusFromOutsideViewport: n, ...o } = e,
            a = C(O, r);
          return (0, y.jsx)(h.s, {
            "aria-hidden": !0,
            tabIndex: 0,
            ...o,
            ref: t,
            style: { position: "fixed" },
            onFocus: (e) => {
              let t = e.relatedTarget;
              a.viewport?.contains(t) || n();
            },
          });
        });
      D.displayName = O;
      var M = "Toast",
        I = n.forwardRef((e, t) => {
          let {
              forceMount: r,
              open: n,
              defaultOpen: o,
              onOpenChange: s,
              ...i
            } = e,
            [l = !0, u] = (0, w.i)({ prop: n, defaultProp: o, onChange: s });
          return (0, y.jsx)(f, {
            present: r || l,
            children: (0, y.jsx)(F, {
              open: l,
              ...i,
              ref: t,
              onClose: () => u(!1),
              onPause: (0, v.c)(e.onPause),
              onResume: (0, v.c)(e.onResume),
              onSwipeStart: (0, a.m)(e.onSwipeStart, (e) => {
                e.currentTarget.setAttribute("data-swipe", "start");
              }),
              onSwipeMove: (0, a.m)(e.onSwipeMove, (e) => {
                let { x: t, y: r } = e.detail.delta;
                (e.currentTarget.setAttribute("data-swipe", "move"),
                  e.currentTarget.style.setProperty(
                    "--radix-toast-swipe-move-x",
                    `${t}px`,
                  ),
                  e.currentTarget.style.setProperty(
                    "--radix-toast-swipe-move-y",
                    `${r}px`,
                  ));
              }),
              onSwipeCancel: (0, a.m)(e.onSwipeCancel, (e) => {
                (e.currentTarget.setAttribute("data-swipe", "cancel"),
                  e.currentTarget.style.removeProperty(
                    "--radix-toast-swipe-move-x",
                  ),
                  e.currentTarget.style.removeProperty(
                    "--radix-toast-swipe-move-y",
                  ),
                  e.currentTarget.style.removeProperty(
                    "--radix-toast-swipe-end-x",
                  ),
                  e.currentTarget.style.removeProperty(
                    "--radix-toast-swipe-end-y",
                  ));
              }),
              onSwipeEnd: (0, a.m)(e.onSwipeEnd, (e) => {
                let { x: t, y: r } = e.detail.delta;
                (e.currentTarget.setAttribute("data-swipe", "end"),
                  e.currentTarget.style.removeProperty(
                    "--radix-toast-swipe-move-x",
                  ),
                  e.currentTarget.style.removeProperty(
                    "--radix-toast-swipe-move-y",
                  ),
                  e.currentTarget.style.setProperty(
                    "--radix-toast-swipe-end-x",
                    `${t}px`,
                  ),
                  e.currentTarget.style.setProperty(
                    "--radix-toast-swipe-end-y",
                    `${r}px`,
                  ),
                  u(!1));
              }),
            }),
          });
        });
      I.displayName = M;
      var [_, $] = P(M, { onClose() {} }),
        F = n.forwardRef((e, t) => {
          let {
              __scopeToast: r,
              type: i = "foreground",
              duration: l,
              open: c,
              onClose: d,
              onEscapeKeyDown: f,
              onPause: m,
              onResume: w,
              onSwipeStart: h,
              onSwipeMove: E,
              onSwipeCancel: g,
              onSwipeEnd: T,
              ...P
            } = e,
            x = C(M, r),
            [S, R] = n.useState(null),
            N = (0, s.s)(t, (e) => R(e)),
            L = n.useRef(null),
            j = n.useRef(null),
            O = l || x.duration,
            D = n.useRef(0),
            I = n.useRef(O),
            $ = n.useRef(0),
            { onToastAdd: F, onToastRemove: V } = x,
            W = (0, v.c)(() => {
              (S?.contains(document.activeElement) && x.viewport?.focus(), d());
            }),
            K = n.useCallback(
              (e) => {
                e &&
                  e !== 1 / 0 &&
                  (window.clearTimeout($.current),
                  (D.current = new Date().getTime()),
                  ($.current = window.setTimeout(W, e)));
              },
              [W],
            );
          (n.useEffect(() => {
            let e = x.viewport;
            if (e) {
              let t = () => {
                  (K(I.current), w?.());
                },
                r = () => {
                  let e = new Date().getTime() - D.current;
                  ((I.current = I.current - e),
                    window.clearTimeout($.current),
                    m?.());
                };
              return (
                e.addEventListener(A, r),
                e.addEventListener(k, t),
                () => {
                  (e.removeEventListener(A, r), e.removeEventListener(k, t));
                }
              );
            }
          }, [x.viewport, O, m, w, K]),
            n.useEffect(() => {
              c && !x.isClosePausedRef.current && K(O);
            }, [c, O, x.isClosePausedRef, K]),
            n.useEffect(() => (F(), () => V()), [F, V]));
          let U = n.useMemo(
            () =>
              S
                ? (function e(t) {
                    let r = [];
                    return (
                      Array.from(t.childNodes).forEach((t) => {
                        var n;
                        if (
                          (t.nodeType === t.TEXT_NODE &&
                            t.textContent &&
                            r.push(t.textContent),
                          (n = t).nodeType === n.ELEMENT_NODE)
                        ) {
                          let n =
                              t.ariaHidden ||
                              t.hidden ||
                              "none" === t.style.display,
                            o = "" === t.dataset.radixToastAnnounceExclude;
                          if (!n)
                            if (o) {
                              let e = t.dataset.radixToastAnnounceAlt;
                              e && r.push(e);
                            } else r.push(...e(t));
                        }
                      }),
                      r
                    );
                  })(S)
                : null,
            [S],
          );
          return x.viewport
            ? (0, y.jsxs)(y.Fragment, {
                children: [
                  U &&
                    (0, y.jsx)(B, {
                      __scopeToast: r,
                      role: "status",
                      "aria-live": "foreground" === i ? "assertive" : "polite",
                      "aria-atomic": !0,
                      children: U,
                    }),
                  (0, y.jsx)(_, {
                    scope: r,
                    onClose: W,
                    children: o.createPortal(
                      (0, y.jsx)(b.ItemSlot, {
                        scope: r,
                        children: (0, y.jsx)(u.bL, {
                          asChild: !0,
                          onEscapeKeyDown: (0, a.m)(f, () => {
                            (x.isFocusedToastEscapeKeyDownRef.current || W(),
                              (x.isFocusedToastEscapeKeyDownRef.current = !1));
                          }),
                          children: (0, y.jsx)(p.sG.li, {
                            role: "status",
                            "aria-live": "off",
                            "aria-atomic": !0,
                            tabIndex: 0,
                            "data-state": c ? "open" : "closed",
                            "data-swipe-direction": x.swipeDirection,
                            ...P,
                            ref: N,
                            style: {
                              userSelect: "none",
                              touchAction: "none",
                              ...e.style,
                            },
                            onKeyDown: (0, a.m)(e.onKeyDown, (e) => {
                              "Escape" !== e.key ||
                                (f?.(e.nativeEvent),
                                e.nativeEvent.defaultPrevented ||
                                  ((x.isFocusedToastEscapeKeyDownRef.current =
                                    !0),
                                  W()));
                            }),
                            onPointerDown: (0, a.m)(e.onPointerDown, (e) => {
                              0 === e.button &&
                                (L.current = { x: e.clientX, y: e.clientY });
                            }),
                            onPointerMove: (0, a.m)(e.onPointerMove, (e) => {
                              if (!L.current) return;
                              let t = e.clientX - L.current.x,
                                r = e.clientY - L.current.y,
                                n = !!j.current,
                                o = ["left", "right"].includes(
                                  x.swipeDirection,
                                ),
                                a = ["left", "up"].includes(x.swipeDirection)
                                  ? Math.min
                                  : Math.max,
                                s = o ? a(0, t) : 0,
                                i = o ? 0 : a(0, r),
                                l = "touch" === e.pointerType ? 10 : 2,
                                u = { x: s, y: i },
                                c = { originalEvent: e, delta: u };
                              n
                                ? ((j.current = u),
                                  X("toast.swipeMove", E, c, { discrete: !1 }))
                                : Y(u, x.swipeDirection, l)
                                  ? ((j.current = u),
                                    X("toast.swipeStart", h, c, {
                                      discrete: !1,
                                    }),
                                    e.target.setPointerCapture(e.pointerId))
                                  : (Math.abs(t) > l || Math.abs(r) > l) &&
                                    (L.current = null);
                            }),
                            onPointerUp: (0, a.m)(e.onPointerUp, (e) => {
                              let t = j.current,
                                r = e.target;
                              if (
                                (r.hasPointerCapture(e.pointerId) &&
                                  r.releasePointerCapture(e.pointerId),
                                (j.current = null),
                                (L.current = null),
                                t)
                              ) {
                                let r = e.currentTarget,
                                  n = { originalEvent: e, delta: t };
                                (Y(t, x.swipeDirection, x.swipeThreshold)
                                  ? X("toast.swipeEnd", T, n, { discrete: !0 })
                                  : X("toast.swipeCancel", g, n, {
                                      discrete: !0,
                                    }),
                                  r.addEventListener(
                                    "click",
                                    (e) => e.preventDefault(),
                                    { once: !0 },
                                  ));
                              }
                            }),
                          }),
                        }),
                      }),
                      x.viewport,
                    ),
                  }),
                ],
              })
            : null;
        }),
        B = (e) => {
          let { __scopeToast: t, children: r, ...o } = e,
            a = C(M, t),
            [s, i] = n.useState(!1),
            [l, u] = n.useState(!1);
          return (
            (function () {
              let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : () => {},
                t = (0, v.c)(e);
              (0, d.N)(() => {
                let e = 0,
                  r = 0;
                return (
                  (e = window.requestAnimationFrame(
                    () => (r = window.requestAnimationFrame(t)),
                  )),
                  () => {
                    (window.cancelAnimationFrame(e),
                      window.cancelAnimationFrame(r));
                  }
                );
              }, [t]);
            })(() => i(!0)),
            n.useEffect(() => {
              let e = window.setTimeout(() => u(!0), 1e3);
              return () => window.clearTimeout(e);
            }, []),
            l
              ? null
              : (0, y.jsx)(c.Z, {
                  asChild: !0,
                  children: (0, y.jsx)(h.s, {
                    ...o,
                    children:
                      s &&
                      (0, y.jsxs)(y.Fragment, { children: [a.label, " ", r] }),
                  }),
                })
          );
        },
        V = n.forwardRef((e, t) => {
          let { __scopeToast: r, ...n } = e;
          return (0, y.jsx)(p.sG.div, { ...n, ref: t });
        });
      V.displayName = "ToastTitle";
      var W = n.forwardRef((e, t) => {
        let { __scopeToast: r, ...n } = e;
        return (0, y.jsx)(p.sG.div, { ...n, ref: t });
      });
      W.displayName = "ToastDescription";
      var K = "ToastAction",
        U = n.forwardRef((e, t) => {
          let { altText: r, ...n } = e;
          return r.trim()
            ? (0, y.jsx)(H, {
                altText: r,
                asChild: !0,
                children: (0, y.jsx)(G, { ...n, ref: t }),
              })
            : (console.error(
                `Invalid prop \`altText\` supplied to \`${K}\`. Expected non-empty \`string\`.`,
              ),
              null);
        });
      U.displayName = K;
      var q = "ToastClose",
        G = n.forwardRef((e, t) => {
          let { __scopeToast: r, ...n } = e,
            o = $(q, r);
          return (0, y.jsx)(H, {
            asChild: !0,
            children: (0, y.jsx)(p.sG.button, {
              type: "button",
              ...n,
              ref: t,
              onClick: (0, a.m)(e.onClick, o.onClose),
            }),
          });
        });
      G.displayName = q;
      var H = n.forwardRef((e, t) => {
        let { __scopeToast: r, altText: n, ...o } = e;
        return (0, y.jsx)(p.sG.div, {
          "data-radix-toast-announce-exclude": "",
          "data-radix-toast-announce-alt": n || void 0,
          ...o,
          ref: t,
        });
      });
      function X(e, t, r, n) {
        let { discrete: o } = n,
          a = r.originalEvent.currentTarget,
          s = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: r });
        (t && a.addEventListener(e, t, { once: !0 }),
          o ? (0, p.hO)(a, s) : a.dispatchEvent(s));
      }
      var Y = function (e, t) {
        let r =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          n = Math.abs(e.x),
          o = Math.abs(e.y),
          a = n > o;
        return "left" === t || "right" === t ? a && n > r : !a && o > r;
      };
      function z(e) {
        let t = document.activeElement;
        return e.some(
          (e) => e === t || (e.focus(), document.activeElement !== t),
        );
      }
      var Z = R,
        J = j,
        Q = I,
        ee = V,
        et = W,
        er = U,
        en = G;
    },
    7647: (e, t, r) => {
      r.d(t, { Analytics: () => p });
      var n = r(3981),
        o = r(5375),
        a = r(4069),
        s = () => {
          window.va ||
            (window.va = function () {
              for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
                t[r] = arguments[r];
              (window.vaq = window.vaq || []).push(t);
            });
        };
      function i() {
        return "undefined" != typeof window;
      }
      function l() {
        try {
          0;
        } catch (e) {}
        return "production";
      }
      function u() {
        return "development" === ((i() ? window.vam : l()) || "production");
      }
      function c(e) {
        return RegExp(
          `/${e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}(?=[/?#]|$)`,
        );
      }
      function d(e) {
        return (
          (0, n.useEffect)(() => {
            var t;
            e.beforeSend &&
              (null == (t = window.va) ||
                t.call(window, "beforeSend", e.beforeSend));
          }, [e.beforeSend]),
          (0, n.useEffect)(() => {
            !(function () {
              var e;
              let t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { debug: !0 };
              if (!i()) return;
              ((function () {
                let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : "auto";
                if ("auto" === e) {
                  window.vam = l();
                  return;
                }
                window.vam = e;
              })(t.mode),
                s(),
                t.beforeSend &&
                  (null == (e = window.va) ||
                    e.call(window, "beforeSend", t.beforeSend)));
              let r = t.scriptSrc
                ? t.scriptSrc
                : u()
                  ? "https://va.vercel-scripts.com/v1/script.debug.js"
                  : t.basePath
                    ? `${t.basePath}/insights/script.js`
                    : "/_vercel/insights/script.js";
              if (document.head.querySelector(`script[src*="${r}"]`)) return;
              let n = document.createElement("script");
              ((n.src = r),
                (n.defer = !0),
                (n.dataset.sdkn =
                  "@vercel/analytics" + (t.framework ? `/${t.framework}` : "")),
                (n.dataset.sdkv = "1.5.0"),
                t.disableAutoTrack && (n.dataset.disableAutoTrack = "1"),
                t.endpoint
                  ? (n.dataset.endpoint = t.endpoint)
                  : t.basePath &&
                    (n.dataset.endpoint = `${t.basePath}/insights`),
                t.dsn && (n.dataset.dsn = t.dsn),
                (n.onerror = () => {
                  let e = u()
                    ? "Please check if any ad blockers are enabled and try again."
                    : "Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";
                  console.log(
                    `[Vercel Web Analytics] Failed to load script from ${r}. ${e}`,
                  );
                }),
                u() && !1 === t.debug && (n.dataset.debug = "false"),
                document.head.appendChild(n));
            })({
              framework: e.framework || "react",
              basePath:
                e.basePath ??
                (function () {
                  if (void 0 !== a && void 0 !== a.env)
                    return a.env.REACT_APP_VERCEL_OBSERVABILITY_BASEPATH;
                })(),
              ...(void 0 !== e.route && { disableAutoTrack: !0 }),
              ...e,
            });
          }, []),
          (0, n.useEffect)(() => {
            e.route &&
              e.path &&
              (function (e) {
                var t;
                let { route: r, path: n } = e;
                null == (t = window.va) ||
                  t.call(window, "pageview", { route: r, path: n });
              })({ route: e.route, path: e.path });
          }, [e.route, e.path]),
          null
        );
      }
      var f = () => {
        let e = (0, o.useParams)(),
          t = (0, o.useSearchParams)(),
          r = (0, o.usePathname)();
        return e
          ? {
              route: (function (e, t) {
                if (!e || !t) return e;
                let r = e;
                try {
                  let e = Object.entries(t);
                  for (let [t, n] of e)
                    if (!Array.isArray(n)) {
                      let e = c(n);
                      e.test(r) && (r = r.replace(e, `/[${t}]`));
                    }
                  for (let [t, n] of e)
                    if (Array.isArray(n)) {
                      let e = c(n.join("/"));
                      e.test(r) && (r = r.replace(e, `/[...${t}]`));
                    }
                  return r;
                } catch (t) {
                  return e;
                }
              })(
                r,
                Object.keys(e).length ? e : Object.fromEntries(t.entries()),
              ),
              path: r,
            }
          : { route: null, path: r };
      };
      function m(e) {
        let { route: t, path: r } = f();
        return n.createElement(d, {
          path: r,
          route: t,
          ...e,
          basePath: (function () {
            if (void 0 !== a && void 0 !== a.env)
              return a.env.NEXT_PUBLIC_VERCEL_OBSERVABILITY_BASEPATH;
          })(),
          framework: "next",
        });
      }
      function p(e) {
        return n.createElement(
          n.Suspense,
          { fallback: null },
          n.createElement(m, { ...e }),
        );
      }
    },
    8530: (e, t, r) => {
      r.d(t, { N: () => o });
      var n = r(3981),
        o = globalThis?.document ? n.useLayoutEffect : () => {};
    },
    8617: (e, t, r) => {
      r.d(t, { N: () => l });
      var n = r(3981),
        o = r(2233),
        a = r(4057),
        s = r(8097),
        i = r(2057);
      function l(e) {
        let t = e + "CollectionProvider",
          [r, l] = (0, o.A)(t),
          [u, c] = r(t, {
            collectionRef: { current: null },
            itemMap: new Map(),
          }),
          d = (e) => {
            let { scope: t, children: r } = e,
              o = n.useRef(null),
              a = n.useRef(new Map()).current;
            return (0, i.jsx)(u, {
              scope: t,
              itemMap: a,
              collectionRef: o,
              children: r,
            });
          };
        d.displayName = t;
        let f = e + "CollectionSlot",
          m = n.forwardRef((e, t) => {
            let { scope: r, children: n } = e,
              o = c(f, r),
              l = (0, a.s)(t, o.collectionRef);
            return (0, i.jsx)(s.DX, { ref: l, children: n });
          });
        m.displayName = f;
        let p = e + "CollectionItemSlot",
          v = "data-radix-collection-item",
          w = n.forwardRef((e, t) => {
            let { scope: r, children: o, ...l } = e,
              u = n.useRef(null),
              d = (0, a.s)(t, u),
              f = c(p, r);
            return (
              n.useEffect(
                () => (
                  f.itemMap.set(u, { ref: u, ...l }),
                  () => void f.itemMap.delete(u)
                ),
              ),
              (0, i.jsx)(s.DX, { [v]: "", ref: d, children: o })
            );
          });
        return (
          (w.displayName = p),
          [
            { Provider: d, Slot: m, ItemSlot: w },
            function (t) {
              let r = c(e + "CollectionConsumer", t);
              return n.useCallback(() => {
                let e = r.collectionRef.current;
                if (!e) return [];
                let t = Array.from(e.querySelectorAll(`[${v}]`));
                return Array.from(r.itemMap.values()).sort(
                  (e, r) => t.indexOf(e.ref.current) - t.indexOf(r.ref.current),
                );
              }, [r.collectionRef, r.itemMap]);
            },
            l,
          ]
        );
      }
    },
    8774: (e, t, r) => {
      r.d(t, { SpeedInsights: () => f });
      var n = r(3981),
        o = r(5375),
        a = r(4069),
        s = () => {
          window.si ||
            (window.si = function () {
              for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
                t[r] = arguments[r];
              (window.siq = window.siq || []).push(t);
            });
        };
      function i() {
        return (
          "development" ===
          (function () {
            try {
              0;
            } catch (e) {}
            return "production";
          })()
        );
      }
      function l(e) {
        return RegExp(
          `/${e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}(?=[/?#]|$)`,
        );
      }
      function u(e) {
        (0, n.useEffect)(() => {
          var t;
          e.beforeSend &&
            (null == (t = window.si) ||
              t.call(window, "beforeSend", e.beforeSend));
        }, [e.beforeSend]);
        let t = (0, n.useRef)(null);
        return (
          (0, n.useEffect)(() => {
            if (t.current) e.route && t.current(e.route);
            else {
              let r = (function () {
                var e;
                let t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                if ("undefined" == typeof window || null === t.route)
                  return null;
                s();
                let r = t.scriptSrc
                  ? t.scriptSrc
                  : i()
                    ? "https://va.vercel-scripts.com/v1/speed-insights/script.debug.js"
                    : t.dsn
                      ? "https://va.vercel-scripts.com/v1/speed-insights/script.js"
                      : t.basePath
                        ? `${t.basePath}/speed-insights/script.js`
                        : "/_vercel/speed-insights/script.js";
                if (document.head.querySelector(`script[src*="${r}"]`))
                  return null;
                t.beforeSend &&
                  (null == (e = window.si) ||
                    e.call(window, "beforeSend", t.beforeSend));
                let n = document.createElement("script");
                return (
                  (n.src = r),
                  (n.defer = !0),
                  (n.dataset.sdkn =
                    "@vercel/speed-insights" +
                    (t.framework ? `/${t.framework}` : "")),
                  (n.dataset.sdkv = "1.2.0"),
                  t.sampleRate &&
                    (n.dataset.sampleRate = t.sampleRate.toString()),
                  t.route && (n.dataset.route = t.route),
                  t.endpoint
                    ? (n.dataset.endpoint = t.endpoint)
                    : t.basePath &&
                      (n.dataset.endpoint = `${t.basePath}/speed-insights/vitals`),
                  t.dsn && (n.dataset.dsn = t.dsn),
                  i() && !1 === t.debug && (n.dataset.debug = "false"),
                  (n.onerror = () => {
                    console.log(
                      `[Vercel Speed Insights] Failed to load script from ${r}. Please check if any content blockers are enabled and try again.`,
                    );
                  }),
                  document.head.appendChild(n),
                  {
                    setRoute: (e) => {
                      n.dataset.route = e ?? void 0;
                    },
                  }
                );
              })({
                framework: e.framework ?? "react",
                basePath:
                  e.basePath ??
                  (function () {
                    if (void 0 !== a && void 0 !== a.env)
                      return a.env.REACT_APP_VERCEL_OBSERVABILITY_BASEPATH;
                  })(),
                ...e,
              });
              r && (t.current = r.setRoute);
            }
          }, [e.route]),
          null
        );
      }
      var c = () => {
        let e = (0, o.useParams)(),
          t = (0, o.useSearchParams)() || new URLSearchParams(),
          r = (0, o.usePathname)();
        return e
          ? (function (e, t) {
              if (!e || !t) return e;
              let r = e;
              try {
                let e = Object.entries(t);
                for (let [t, n] of e)
                  if (!Array.isArray(n)) {
                    let e = l(n);
                    e.test(r) && (r = r.replace(e, `/[${t}]`));
                  }
                for (let [t, n] of e)
                  if (Array.isArray(n)) {
                    let e = l(n.join("/"));
                    e.test(r) && (r = r.replace(e, `/[...${t}]`));
                  }
                return r;
              } catch (t) {
                return e;
              }
            })(r, Object.keys(e).length ? e : Object.fromEntries(t.entries()))
          : null;
      };
      function d(e) {
        let t = c();
        return n.createElement(u, {
          route: t,
          ...e,
          framework: "next",
          basePath: (function () {
            if (void 0 !== a && void 0 !== a.env)
              return a.env.NEXT_PUBLIC_VERCEL_OBSERVABILITY_BASEPATH;
          })(),
        });
      }
      function f(e) {
        return n.createElement(
          n.Suspense,
          { fallback: null },
          n.createElement(d, { ...e }),
        );
      }
    },
  },
]);
