"use strict";
(globalThis.webpackChunk_N_E = globalThis.webpackChunk_N_E || []).push([
  [909],
  {
    1097: (e, r, s) => {
      s.d(r, { A: () => u });
      var t = s(5375),
        a = s(3981),
        o = s.t(a, 2),
        n = s(2571),
        i = o["use".trim()],
        l = s(599),
        c = s(7657),
        d = s(893),
        h = s(2057),
        m = s(4871);
      function u(e) {
        let {
          Link: r,
          config: s,
          getPathname: o,
          ...u
        } = (function (e, r) {
          var s, o, n;
          let m = {
              ...(s = r || {}),
              localePrefix:
                "object" == typeof (n = s.localePrefix)
                  ? n
                  : { mode: n || "always" },
              localeCookie: !!((o = s.localeCookie) ?? 1) && {
                name: "NEXT_LOCALE",
                sameSite: "lax",
                ...("object" == typeof o && o),
              },
              localeDetection: s.localeDetection ?? !0,
              alternateLinks: s.alternateLinks ?? !0,
            },
            u = m.pathnames,
            g = (0, a.forwardRef)(function ({ href: r, locale: s, ...t }, a) {
              let o, n;
              "object" == typeof r
                ? ((o = r.pathname), (n = r.params))
                : (o = r);
              let d = (0, l._x)(r),
                g = e(),
                f = (0, l.yL)(g) ? i(g) : g,
                p = d
                  ? x({
                      locale: s || f,
                      href: null == u ? o : { pathname: o, params: n },
                      forcePrefix: null != s || void 0,
                    })
                  : o;
              return (0, h.jsx)(c.default, {
                ref: a,
                href: "object" == typeof r ? { ...r, pathname: p } : p,
                locale: s,
                localeCookie: m.localeCookie,
                ...t,
              });
            });
          function x(e) {
            let r,
              { forcePrefix: s, href: t, locale: a } = e;
            return (
              null == u
                ? "object" == typeof t
                  ? ((r = t.pathname), t.query && (r += (0, d.Zn)(t.query)))
                  : (r = t)
                : (r = (0, d.FP)({
                    locale: a,
                    ...(0, d.TK)(t),
                    pathnames: m.pathnames,
                  })),
              (0, d.x3)(r, a, m, s)
            );
          }
          function f(e) {
            return function (r, ...s) {
              return e(x(r), ...s);
            };
          }
          return {
            config: m,
            Link: g,
            redirect: f(t.redirect),
            permanentRedirect: f(t.permanentRedirect),
            getPathname: x,
          };
        })(n.Ym, e);
        return {
          ...u,
          Link: r,
          usePathname: function () {
            let e = (function (e) {
                let r = (0, t.usePathname)(),
                  s = (0, n.Ym)();
                return (0, a.useMemo)(() => {
                  if (!r) return r;
                  let t = r,
                    a = (0, l.XP)(s, e.localePrefix);
                  if ((0, l.wO)(a, r)) t = (0, l.MY)(r, a);
                  else if (
                    "never" !== e.localePrefix.mode &&
                    e.localePrefix.prefixes
                  ) {
                    let e = (0, l.bL)(s);
                    (0, l.wO)(e, r) && (t = (0, l.MY)(r, e));
                  }
                  return t;
                }, [e.localePrefix, s, r]);
              })(s),
              r = (0, n.Ym)();
            return (0, a.useMemo)(
              () => (e && s.pathnames ? (0, d.aM)(r, e, s.pathnames) : e),
              [r, e],
            );
          },
          useRouter: function () {
            let e = (0, t.useRouter)(),
              r = (0, n.Ym)(),
              i = (0, t.usePathname)();
            return (0, a.useMemo)(() => {
              function t(e) {
                return function (t, a) {
                  let { locale: n, ...l } = a || {},
                    c = [
                      o({
                        href: t,
                        locale: n || r,
                        forcePrefix: null != n || void 0,
                      }),
                    ];
                  (Object.keys(l).length > 0 && c.push(l),
                    (0, m.A)(s.localeCookie, i, r, n),
                    e(...c));
                };
              }
              return {
                ...e,
                push: t(e.push),
                replace: t(e.replace),
                prefetch: t(e.prefetch),
              };
            }, [r, i, e]);
          },
          getPathname: o,
        };
      }
    },
    1704: (e, r, s) => {
      s.d(r, { $: () => l });
      var t = s(2057);
      s(3981);
      var a = s(8097),
        o = s(6988),
        n = s(9511);
      let i = (0, o.F)(
        "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        {
          variants: {
            variant: {
              default:
                "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
              destructive:
                "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
              outline:
                "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
              secondary:
                "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
              ghost:
                "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
              link: "text-primary underline-offset-4 hover:underline",
            },
            size: {
              default: "h-9 px-4 py-2 has-[>svg]:px-3",
              sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
              lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
              icon: "size-9",
            },
          },
          defaultVariants: { variant: "default", size: "default" },
        },
      );
      function l(e) {
        let { className: r, variant: s, size: o, asChild: l = !1, ...c } = e,
          d = l ? a.DX : "button";
        return (0, t.jsx)(d, {
          "data-slot": "button",
          className: (0, n.cn)(i({ variant: s, size: o, className: r })),
          ...c,
        });
      }
    },
    3863: (e, r, s) => {
      s.d(r, { N_: () => n, a8: () => l, rd: () => c });
      var t = s(7491),
        a = s(1097);
      let o = (0, t.A)({
          locales: ["en", "es", "pt", "ar", "fr", "ja", "hi", "de", "ru"],
          defaultLocale: "en",
          localePrefix: "as-needed",
          pathnames: {
            "/": "/",
            "/faq": {
              en: "/faq",
              es: "/preguntas-frecuentes",
              pt: "/perguntas-frequentes",
              ar: "/الأسئلة-الشائعة",
              fr: "/faq",
              ja: "/よくある質問",
              hi: "/अक्सर-पूछे-जाने-वाले-प्रश्न",
              de: "/faq",
              ru: "/часто-задаваемые-вопросы",
            },
            "/blog": {
              en: "/blog",
              es: "/blog",
              pt: "/blog",
              ar: "/مدونة",
              fr: "/blog",
              ja: "/ブログ",
              hi: "/ब्लॉग",
              de: "/blog",
              ru: "/блог",
            },
            "/privacy": {
              en: "/privacy",
              es: "/privacidad",
              pt: "/privacidade",
              ar: "/سياسة-الخصوصية",
              fr: "/confidentialite",
              ja: "/プライバシー",
              hi: "/गोपनीयता",
              de: "/datenschutz",
              ru: "/конфиденциальность",
            },
            "/terms": {
              en: "/terms",
              es: "/terminos",
              pt: "/termos",
              ar: "/شروط-الخدمة",
              fr: "/conditions",
              ja: "/規約",
              hi: "/शर्तें",
              de: "/nutzungsbedingungen",
              ru: "/условия",
            },
            "/blog/how-to-hide-message-in-emoji": {
              en: "/blog/how-to-hide-message-in-emoji",
              es: "/blog/como-ocultar-un-mensaje-en-un-emoji",
              pt: "/blog/como-esconder-uma-mensagem-em-um-emoji",
              ar: "/blog/كيفية-إخفاء-رسالة-في-إيموجي",
              fr: "/blog/comment-cacher-un-message-dans-un-emoji",
              ja: "/blog/絵文字にメッセージを隠す方法",
              hi: "/blog/इमोजी-में-संदेश-कैसे-छिपाएं",
              de: "/blog/wie-man-eine-nachricht-in-einem-emoji-versteckt",
              ru: "/blog/kak-skryt-soobshcheniye-v-emodzi",
            },
            "/blog/emoji-steganography-use-cases": {
              en: "/blog/emoji-steganography-use-cases",
              es: "/blog/casos-de-uso-de-esteganografia-de-emojis",
              pt: "/blog/casos-de-uso-de-esteganografia-de-emojis",
              ar: "/blog/حالات-استخدام-إستيبانوغرافيا-الإيموجي",
              fr: "/blog/cas-d-utilisation-de-la-steganographie-par-emojis",
              ja: "/blog/絵文字ステガノグラフィーの活用事例",
              hi: "/blog/इमोजी-स्टेग्नोग्राफ़ी-के-उपयोग-मामले",
              de: "/blog/anwendungsfaelle-fuer-emoji-steganographie",
              ru: "/blog/sluchai-ispolzovaniya-steganografii-emodzi",
            },
          },
        }),
        {
          Link: n,
          redirect: i,
          usePathname: l,
          useRouter: c,
          getPathname: d,
        } = (0, a.A)(o);
    },
    6909: (e, r, s) => {
      (s.r(r), s.d(r, { Footer: () => d }));
      var t = s(2057),
        a = s(3863),
        o = s(6203);
      let n = (0, o.A)("Mail", [
          [
            "rect",
            {
              width: "20",
              height: "16",
              x: "2",
              y: "4",
              rx: "2",
              key: "18n3k1",
            },
          ],
          [
            "path",
            { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" },
          ],
        ]),
        i = (0, o.A)("ExternalLink", [
          ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
          ["path", { d: "M10 14 21 3", key: "gplh6r" }],
          [
            "path",
            {
              d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
              key: "a6xqqp",
            },
          ],
        ]);
      var l = s(1704),
        c = s(8733);
      function d() {
        let e = (0, c.c)("footer"),
          r = (r) => {
            let s = e("contact.email"),
              t = "EmojiCrypt - Contact",
              a = "Hello, I would like to get in touch regarding EmojiCrypt.",
              o = "";
            ((o =
              "gmail" === r
                ? `https://mail.google.com/mail/?view=cm&fs=1&to=${s}&su=${encodeURIComponent(t)}&body=${encodeURIComponent(a)}`
                : `https://outlook.live.com/mail/0/deeplink/compose?to=${s}&subject=${encodeURIComponent(t)}&body=${encodeURIComponent(a)}`),
              window.open(o, "_blank"));
          };
        return (0, t.jsx)("footer", {
          className:
            "border-t bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/50",
          children: (0, t.jsxs)("div", {
            className: "container mx-auto px-4 py-8 max-w-6xl",
            children: [
              (0, t.jsxs)("div", {
                className: "grid grid-cols-1 md:grid-cols-4 gap-8",
                children: [
                  (0, t.jsxs)("div", {
                    className: "space-y-4",
                    children: [
                      (0, t.jsx)("h3", {
                        className: "text-lg font-semibold text-foreground",
                        children: e("brand.name"),
                      }),
                      (0, t.jsx)("p", {
                        className: "text-sm text-muted-foreground",
                        children: e("brand.description"),
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: "space-y-4",
                    children: [
                      (0, t.jsx)("h4", {
                        className: "text-sm font-semibold text-foreground",
                        children: e("product.heading"),
                      }),
                      (0, t.jsxs)("ul", {
                        className: "space-y-2 text-sm",
                        children: [
                          (0, t.jsx)("li", {
                            children: (0, t.jsx)(a.N_, {
                              href: "/faq",
                              className:
                                "text-muted-foreground hover:text-foreground transition-colors",
                              children: e("product.faq"),
                            }),
                          }),
                          (0, t.jsx)("li", {
                            children: (0, t.jsx)(a.N_, {
                              href: "/blog",
                              className:
                                "text-muted-foreground hover:text-foreground transition-colors",
                              children: e("product.blog"),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: "space-y-4",
                    children: [
                      (0, t.jsx)("h4", {
                        className: "text-sm font-semibold text-foreground",
                        children: e("contact.heading"),
                      }),
                      (0, t.jsxs)("div", {
                        className: "space-y-2",
                        children: [
                          (0, t.jsxs)("div", {
                            className:
                              "flex items-center gap-2 text-sm text-muted-foreground",
                            children: [
                              (0, t.jsx)(n, { className: "h-4 w-4" }),
                              (0, t.jsx)("span", {
                                children: e("contact.email"),
                              }),
                            ],
                          }),
                          (0, t.jsxs)("div", {
                            className: "flex gap-2",
                            children: [
                              (0, t.jsx)(l.$, {
                                variant: "outline",
                                size: "sm",
                                onClick: () => r("gmail"),
                                className: "text-xs",
                                children: e("contact.gmailButton"),
                              }),
                              (0, t.jsx)(l.$, {
                                variant: "outline",
                                size: "sm",
                                onClick: () => r("outlook"),
                                className: "text-xs",
                                children: e("contact.outlookButton"),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: "space-y-4",
                    children: [
                      (0, t.jsx)("h4", {
                        className: "text-sm font-semibold text-foreground",
                        children: e("legal.heading"),
                      }),
                      (0, t.jsxs)("ul", {
                        className: "space-y-2 text-sm",
                        children: [
                          (0, t.jsx)("li", {
                            children: (0, t.jsx)(a.N_, {
                              href: "/privacy",
                              className:
                                "text-muted-foreground hover:text-foreground transition-colors",
                              children: e("legal.privacyPolicy"),
                            }),
                          }),
                          (0, t.jsx)("li", {
                            children: (0, t.jsx)(a.N_, {
                              href: "/terms",
                              className:
                                "text-muted-foreground hover:text-foreground transition-colors",
                              children: e("legal.termsOfService"),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, t.jsxs)("div", {
                className: "border-t mt-8 pt-6",
                children: [
                  (0, t.jsx)("h4", {
                    className: "text-sm font-semibold text-foreground mb-4",
                    children: e("resources.heading"),
                  }),
                  (0, t.jsxs)("div", {
                    className: "grid grid-cols-1 md:grid-cols-4 gap-4 text-sm",
                    children: [
                      (0, t.jsxs)("div", {
                        children: [
                          (0, t.jsx)("h5", {
                            className: "font-medium mb-2",
                            children: e("resources.learning.title"),
                          }),
                          (0, t.jsxs)("ul", {
                            className: "space-y-1 text-muted-foreground",
                            children: [
                              (0, t.jsx)("li", {
                                children: (0, t.jsxs)("a", {
                                  href: "https://en.wikipedia.org/wiki/Steganography",
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  className:
                                    "hover:text-foreground transition-colors flex items-center gap-1",
                                  children: [
                                    e("resources.learning.steganography"),
                                    " ",
                                    (0, t.jsx)(i, { className: "h-3 w-3" }),
                                  ],
                                }),
                              }),
                              (0, t.jsx)("li", {
                                children: (0, t.jsxs)("a", {
                                  href: "https://en.wikipedia.org/wiki/Unicode",
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  className:
                                    "hover:text-foreground transition-colors flex items-center gap-1",
                                  children: [
                                    e("resources.learning.unicodeStandard"),
                                    " ",
                                    (0, t.jsx)(i, { className: "h-3 w-3" }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        children: [
                          (0, t.jsx)("h5", {
                            className: "font-medium mb-2",
                            children: e("resources.security.title"),
                          }),
                          (0, t.jsxs)("ul", {
                            className: "space-y-1 text-muted-foreground",
                            children: [
                              (0, t.jsx)("li", {
                                children: (0, t.jsxs)("a", {
                                  href: "https://www.eff.org/issues/privacy",
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  className:
                                    "hover:text-foreground transition-colors flex items-center gap-1",
                                  children: [
                                    e("resources.security.digitalPrivacy"),
                                    " ",
                                    (0, t.jsx)(i, { className: "h-3 w-3" }),
                                  ],
                                }),
                              }),
                              (0, t.jsx)("li", {
                                children: (0, t.jsxs)("a", {
                                  href: "https://www.eff.org/",
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  className:
                                    "hover:text-foreground transition-colors flex items-center gap-1",
                                  children: [
                                    e(
                                      "resources.security.electronicFrontierFoundation",
                                    ),
                                    " ",
                                    (0, t.jsx)(i, { className: "h-3 w-3" }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        children: [
                          (0, t.jsx)("h5", {
                            className: "font-medium mb-2",
                            children: e("resources.tools.title"),
                          }),
                          (0, t.jsxs)("ul", {
                            className: "space-y-1 text-muted-foreground",
                            children: [
                              (0, t.jsx)("li", {
                                children: (0, t.jsxs)("a", {
                                  href: "https://haveibeenpwned.com/",
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  className:
                                    "hover:text-foreground transition-colors flex items-center gap-1",
                                  children: [
                                    e("resources.tools.passwordSecurity"),
                                    " ",
                                    (0, t.jsx)(i, { className: "h-3 w-3" }),
                                  ],
                                }),
                              }),
                              (0, t.jsx)("li", {
                                children: (0, t.jsxs)("a", {
                                  href: "https://www.ssllabs.com/",
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  className:
                                    "hover:text-foreground transition-colors flex items-center gap-1",
                                  children: [
                                    e("resources.tools.sslLabs"),
                                    " ",
                                    (0, t.jsx)(i, { className: "h-3 w-3" }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        children: [
                          (0, t.jsx)("h5", {
                            className: "font-medium mb-2",
                            children: e("resources.research.title"),
                          }),
                          (0, t.jsxs)("ul", {
                            className: "space-y-1 text-muted-foreground",
                            children: [
                              (0, t.jsx)("li", {
                                children: (0, t.jsxs)("a", {
                                  href: "https://arxiv.org/search/?searchtype=all&query=steganography",
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  className:
                                    "hover:text-foreground transition-colors flex items-center gap-1",
                                  children: [
                                    e(
                                      "resources.research.steganographyResearch",
                                    ),
                                    " ",
                                    (0, t.jsx)(i, { className: "h-3 w-3" }),
                                  ],
                                }),
                              }),
                              (0, t.jsx)("li", {
                                children: (0, t.jsxs)("a", {
                                  href: "https://crypto.stackexchange.com/",
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  className:
                                    "hover:text-foreground transition-colors flex items-center gap-1",
                                  children: [
                                    e("resources.research.cryptographyQa"),
                                    " ",
                                    (0, t.jsx)(i, { className: "h-3 w-3" }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, t.jsxs)("div", {
                className:
                  "border-t mt-8 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground",
                children: [
                  (0, t.jsx)("p", {
                    children: e("bottom.copyright", {
                      year: new Date().getFullYear(),
                    }),
                  }),
                  (0, t.jsx)("div", {
                    className: "flex items-center space-x-4 mt-4 md:mt-0",
                    children: (0, t.jsx)("span", {
                      children: e("bottom.tagline"),
                    }),
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    7491: (e, r, s) => {
      s.d(r, { A: () => t });
      function t(e) {
        return e;
      }
    },
    8733: (e, r, s) => {
      s.d(r, { c: () => o });
      var t = s(2571);
      function a(e, r) {
        return (...e) => {
          try {
            return r(...e);
          } catch {
            throw Error(void 0);
          }
        };
      }
      let o = a(0, t.c3);
      a(0, t.kc);
    },
  },
]);
