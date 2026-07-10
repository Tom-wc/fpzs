(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [536],
  {
    477: () => { },
    1884: (e, s, t) => {
      "use strict";
      (t.r(s), t.d(s, { default: () => Me }));
      var r = t(5155);
      t(3548);
      t(5702);
      var a = t(9362),
        i = t(3217),
        l = t(5677),
        n = t(2115),
        c = t(1046),
        o = t(7652),
        d = t(5695),
        x = t(3824),
        m = t(5404),
        h = t(9280),
        u = t(285),
        g = t(9434);
      function p(e) {
        let { className: s, ...t } = e;
        return (0, r.jsx)("div", {
          "data-slot": "card",
          className: (0, g.cn)(
            "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
            s,
          ),
          ...t,
        });
      }
      function f(e) {
        let { className: s, ...t } = e;
        return (0, r.jsx)("div", {
          "data-slot": "card-header",
          className: (0, g.cn)(
            "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
            s,
          ),
          ...t,
        });
      }
      function v(e) {
        let { className: s, ...t } = e;
        return (0, r.jsx)("div", {
          "data-slot": "card-title",
          className: (0, g.cn)("leading-none font-semibold", s),
          ...t,
        });
      }
      function j(e) {
        let { className: s, ...t } = e;
        return (0, r.jsx)("div", {
          "data-slot": "card-content",
          className: (0, g.cn)("px-6", s),
          ...t,
        });
      }
      var b = t(9708),
        N = t(2085);
      let y = (0, N.F)(
        "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
        {
          variants: {
            variant: {
              default:
                "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
              secondary:
                "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
              destructive:
                "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
              outline:
                "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
              success:
                "border-transparent bg-transparent text-green-700 [a&]:hover:bg-green-200",
              warning:
                "border-transparent bg-transparent text-yellow-700 [a&]:hover:bg-yellow-200",
            },
          },
          defaultVariants: { variant: "default" },
        },
      );
      function w(e) {
        let { className: s, variant: t, asChild: a = !1, ...i } = e,
          l = a ? b.DX : "span";
        return (0, r.jsx)(l, {
          "data-slot": "badge",
          className: (0, g.cn)(y({ variant: t }), s),
          ...i,
        });
      }
      var F = t(5863);
      function k(e) {
        let { className: s, value: t, ...a } = e;
        return (0, r.jsx)(F.bL, {
          "data-slot": "progress",
          className: (0, g.cn)(
            "bg-primary/20 relative h-2 w-full overflow-hidden rounded-full",
            s,
          ),
          ...a,
          children: (0, r.jsx)(F.C1, {
            "data-slot": "progress-indicator",
            className: "bg-primary h-full w-full flex-1 transition-all",
            style: { transform: "translateX(-".concat(100 - (t || 0), "%)") },
          }),
        });
      }
      var P = t(6981),
        C = t(5196);
      function D(e) {
        let { className: s, ...t } = e;
        return (0, r.jsx)(P.bL, {
          "data-slot": "checkbox",
          className: (0, g.cn)(
            "peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
            s,
          ),
          ...t,
          children: (0, r.jsx)(P.C1, {
            "data-slot": "checkbox-indicator",
            className:
              "flex items-center justify-center text-current transition-none",
            children: (0, r.jsx)(C.A, { className: "size-3.5" }),
          }),
        });
      }
      var S = t(4059),
        E = t(9428);
      function A(e) {
        let { className: s, ...t } = e;
        return (0, r.jsx)(S.bL, {
          "data-slot": "radio-group",
          className: (0, g.cn)("grid gap-3", s),
          ...t,
        });
      }
      function L(e) {
        let { className: s, ...t } = e;
        return (0, r.jsx)(S.q7, {
          "data-slot": "radio-group-item",
          className: (0, g.cn)(
            "border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
            s,
          ),
          ...t,
          children: (0, r.jsx)(S.C1, {
            "data-slot": "radio-group-indicator",
            className: "relative flex items-center justify-center",
            children: (0, r.jsx)(E.A, {
              className:
                "fill-primary absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2",
            }),
          }),
        });
      }
      var U = t(10),
        M = t(8021),
        R = t(7434),
        I = t(3453),
        z = t(4416),
        _ = t(6262),
        V = t(4481),
        O = t(1788),
        T = t(1304),
        B = t(9869),
        K = t(2525),
        H = t(2713),
        $ = t(6659),
        W = t(4261),
        X = t(2337),
        q = t(5143),
        J = t(402),
        Y = t(8266),
        Z = t(463),
        G = t(6988);
      function Q() {
        let [e, s] = (0, n.useState)(!1),
          [t, a] = (0, n.useState)(!0),
          i = (0, o.c3)("TipsDialog"),
          l = (0, o.c3)("Common");
        return (
          (0, n.useEffect)(() => {
            localStorage.getItem(G.m.localStorageKeys.app.invoiceTipsSeen)
              ? a(!1)
              : s(!0);
          }, []),
          t
            ? (0, r.jsx)(U.Lt, {
              open: e,
              onOpenChange: s,
              children: (0, r.jsxs)(U.EO, {
                className: "max-w-lg",
                children: [
                  (0, r.jsxs)(U.wd, {
                    children: [
                      (0, r.jsxs)(U.r7, {
                        className: "flex items-center gap-2",
                        children: [
                          (0, r.jsx)(Z.A, {
                            className: "h-5 w-5 text-yellow-500",
                          }),
                          i("title"),
                        ],
                      }),
                      (0, r.jsx)(U.$v, {
                        asChild: !0,
                        children: (0, r.jsxs)("div", {
                          className: "text-left space-y-3",
                          children: [
                            (0, r.jsx)("p", { children: i("question") }),
                            (0, r.jsx)("p", { children: i("solution") }),
                            (0, r.jsxs)("div", {
                              className: "bg-blue-50 p-3 rounded-lg text-sm",
                              children: [
                                i("instruction"),
                                (0, r.jsxs)("ul", {
                                  className: "mt-2 space-y-1 text-gray-700",
                                  children: [
                                    (0, r.jsxs)("li", {
                                      children: [
                                        "• ",
                                        (0, r.jsx)("kbd", {
                                          className:
                                            "px-1 py-0.5 bg-gray-200 rounded text-xs",
                                          children: "Ctrl",
                                        }),
                                        " + ",
                                        i("mouseLeftClick"),
                                        "：",
                                        i("ctrlClickDesc"),
                                      ],
                                    }),
                                    (0, r.jsxs)("li", {
                                      children: [
                                        "• ",
                                        (0, r.jsx)("kbd", {
                                          className:
                                            "px-1 py-0.5 bg-gray-200 rounded text-xs",
                                          children: "Shift",
                                        }),
                                        " + ",
                                        i("mouseLeftClick"),
                                        "：",
                                        i("shiftClickDesc"),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, r.jsx)("p", {
                              className: "text-sm text-gray-600",
                              children: i("dragTip"),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  (0, r.jsxs)(U.ck, {
                    className: "flex-col sm:flex-row gap-2",
                    children: [
                      (0, r.jsx)(u.$, {
                        variant: "outline",
                        onClick: () => {
                          (localStorage.setItem(
                            G.m.localStorageKeys.app.invoiceTipsSeen,
                            "true",
                          ),
                            a(!1),
                            s(!1));
                        },
                        className: "w-full sm:w-auto",
                        children: l("dontShowAgain"),
                      }),
                      (0, r.jsx)(U.Rx, {
                        onClick: () => {
                          s(!1);
                        },
                        className: "w-full sm:w-auto",
                        children: l("iKnow"),
                      }),
                    ],
                  }),
                ],
              }),
            })
            : null
        );
      }
      var ee = t(6874),
        se = t.n(ee),
        te = (t(6766), t(1154), t(1007), t(4835), t(7340)),
        re = t(9572);
      t(1992);
      var ae = t(7262),
        ie = t(6671);
      let le = "NavHeader";
      function ne(e) {
        let { showBackToHome: s = !1, dirty: t = !1 } = e,
          a = (0, o.c3)("Common"),
          [i, c] = ((0, l.s)(re.d), (0, n.useState)(!1)),
          [x, m] = (0, n.useState)(null),
          h = (0, d.useRouter)();
        (0, n.useEffect)(() => {
          console.log(le, "in useEffect dirty为：", t);
          let e = (e) => {
            if ((console.log(le, "handleBeforeUnload dirty:", t), t))
              return (
                (e.returnValue = "页面有未保存的更改"),
                "页面有未保存的更改"
              );
          };
          return (
            window.addEventListener("beforeunload", e),
            () => {
              window.removeEventListener("beforeunload", e);
            }
          );
        }, [t]);
        let g = (e, s) => {
          t && (e.preventDefault(), m(s), c(!0));
        };
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)("header", {
              className: "border-b bg-white",
              children: (0, r.jsxs)("div", {
                className:
                  "container mx-auto px-4 h-16 flex items-center justify-between",
                children: [
                  s
                    ? (0, r.jsx)(se(), {
                      href: "/",
                      className: "flex items-center",
                      onClick: (e) => g(e, "/"),
                      children: (0, r.jsx)("span", {
                        className: "font-bold text-xl text-black",
                        children: a("longName"),
                      }),
                    })
                    : (0, r.jsx)("span", {
                      className: "font-bold text-xl text-black",
                      children: a("longName"),
                    }),
                  (0, r.jsxs)("div", {
                    className: "flex items-center gap-4",
                    children: [
                      s &&
                      (0, r.jsx)(se(), {
                        href: "/",
                        onClick: (e) => g(e, "/"),
                        children: (0, r.jsxs)(u.$, {
                          variant: "ghost",
                          size: "sm",
                          className: "gap-2 text-gray-600 hover:text-black",
                          children: [
                            (0, r.jsx)(te.A, { className: "h-4 w-4" }),
                            (0, r.jsx)("span", {
                              className: "hidden sm:inline home-btn-text",
                              children: a("backToHome"),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, r.jsx)(U.Lt, {
              open: i,
              onOpenChange: c,
              children: (0, r.jsxs)(U.EO, {
                children: [
                  (0, r.jsxs)(U.wd, {
                    children: [
                      (0, r.jsx)(U.r7, { children: "确认离开" }),
                      (0, r.jsx)(U.$v, {
                        children:
                          "离开此页面将会丢失当前的操作。确定要继续吗？",
                      }),
                    ],
                  }),
                  (0, r.jsxs)(U.ck, {
                    children: [
                      (0, r.jsx)(U.Zr, {
                        onClick: () => {
                          (c(!1), m(null));
                        },
                        children: "取消",
                      }),
                      (0, r.jsx)(U.Rx, {
                        onClick: () => {
                          (x && h.push(x), c(!1), m(null));
                        },
                        children: "确认离开",
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        });
      }
      var ce = t(8261),
        oe = t.n(ce),
        de = t(7793),
        xe = t.n(de);
      async function me(e) {
        return (async function (e) {
          let s = e instanceof ArrayBuffer ? e : new ArrayBuffer(e.byteLength);
          e instanceof ArrayBuffer || new Uint8Array(s).set(new Uint8Array(e));
          let t = xe().create(s);
          return oe()(t).toString();
        })(await e.arrayBuffer());
      }
      var he = t(7117);
      function ue(e) {
        let s = e instanceof Error ? e.message : String(e),
          t =
            s.includes("Invalid name") ||
            s.includes("Headers") ||
            s.includes("Failed to construct 'Headers'"),
          r =
            t ||
            s.includes("network") ||
            s.includes("fetch") ||
            s.includes("NetworkError") ||
            s.includes("TypeError: Failed to fetch"),
          a = s.includes("font") || s.includes("Font"),
          i = s.includes("cMap") || s.includes("CMap");
        return {
          isNetworkError: r,
          isFontError: a,
          isCMapError: i,
          isHeadersError: t,
          shouldUseFallback: r || a || i,
          errorMessage: s,
        };
      }
      function ge(e, s) {
        let t = s ? "".concat(s, ": ") : "";
        e.isHeadersError
          ? console.warn(
            "".concat(
              t,
              "PDF.js Headers 构造错误 - 这是一个已知的兼容性问题，已使用备用配置处理",
            ),
          )
          : e.shouldUseFallback
            ? console.warn(
              "".concat(t, "PDF.js 兼容性问题: ").concat(e.errorMessage),
            )
            : console.error(
              "".concat(t, "PDF 未知错误: ").concat(e.errorMessage),
            );
      }
      let pe = (0, N.F)(
        "relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current",
        {
          variants: {
            variant: {
              default: "bg-card text-card-foreground",
              destructive:
                "text-destructive bg-card [&>svg]:text-current *:data-[slot=alert-description]:text-destructive/90",
            },
          },
          defaultVariants: { variant: "default" },
        },
      );
      function fe(e) {
        let { className: s, variant: t, ...a } = e;
        return (0, r.jsx)("div", {
          "data-slot": "alert",
          role: "alert",
          className: (0, g.cn)(pe({ variant: t }), s),
          ...a,
        });
      }
      function ve(e) {
        let { className: s, ...t } = e;
        return (0, r.jsx)("div", {
          "data-slot": "alert-title",
          className: (0, g.cn)(
            "col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight",
            s,
          ),
          ...t,
        });
      }
      function je(e) {
        let { className: s, ...t } = e;
        return (0, r.jsx)("div", {
          "data-slot": "alert-description",
          className: (0, g.cn)(
            "text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed",
            s,
          ),
          ...t,
        });
      }
      (t(8851), t(2465));
      var be = t(1424),
        Ne = t(1932),
        ye = t(5390);
      function ke(e) {
        let {
          file: s,
          scale: t,
          onLoadSuccess: a,
          onLoadError: i,
          onPageLoad: l,
        } = e,
          [c, o] = (0, n.useState)(0),
          [d, x] = (0, n.useState)(!1),
          u = (0, n.useMemo)(
            () => ({
              cMapUrl: "https://unpkg.com/pdfjs-dist@4.8.69/cmaps/",
              cMapPacked: !0,
              standardFontDataUrl:
                "https://unpkg.com/pdfjs-dist@4.8.69/standard_fonts/",
              isEvalSupported: !1,
              maxImageSize: 1048576,
              disableFontFace: !1,
              fontExtraProperties: !0,
              useSystemFonts: !0,
              disableAutoFetch: !1,
              ignoreErrors: !0,
              stopAtErrors: !1,
              verbosity: 0,
              enableXfa: !1,
              disableRange: !1,
              disableStream: !1,
              withCredentials: !1,
              httpHeaders: null,
            }),
            [],
          ),
          g = (0, n.useMemo)(
            () => ({
              cMapUrl: "https://cdn.jsdelivr.net/npm/pdfjs-dist@4.8.69/cmaps/",
              cMapPacked: !0,
              standardFontDataUrl:
                "https://cdn.jsdelivr.net/npm/pdfjs-dist@4.8.69/standard_fonts/",
              disableFontFace: !0,
              fontExtraProperties: !0,
              useSystemFonts: !0,
              ignoreErrors: !0,
              stopAtErrors: !1,
              verbosity: 0,
              enableXfa: !1,
              disableRange: !0,
              disableStream: !0,
              maxImageSize: 262144,
              isEvalSupported: !1,
              disableAutoFetch: !0,
            }),
            [],
          ),
          p = (0, n.useCallback)(
            (e) => {
              let { numPages: s } = e;
              (o(s), null == a || a(s));
            },
            [a],
          ),
          f = (0, n.useCallback)(
            (e) => {
              let s = ue(e);
              if ((ge(s, "PDF Document Preview"), s.shouldUseFallback && !d))
                return (
                  console.log("检测到兼容性错误，切换到备用配置重新加载PDF"),
                  void x(!0)
                );
              (!s.shouldUseFallback || d) && (null == i || i(e));
            },
            [d, i],
          ),
          v = (0, n.useCallback)(
            (e) => {
              if (
                e &&
                "object" == typeof e &&
                "pageNumber" in e &&
                "getViewport" in e &&
                1 === e.pageNumber &&
                "function" == typeof e.getViewport
              ) {
                let { width: s } = e.getViewport({ scale: 1 });
                null == l || l(s);
              }
            },
            [l],
          );
        return (0, r.jsx)("div", {
          className: "w-full h-full overflow-auto bg-slate-100",
          children: (0, r.jsx)("div", {
            className: "flex flex-col items-center gap-6 p-4",
            children: (0, r.jsx)(m.A, {
              file: s,
              onLoadSuccess: p,
              onLoadError: f,
              loading: (0, r.jsx)("div", {
                className: "flex items-center justify-center h-96",
                children: (0, r.jsx)("div", {
                  className: "text-gray-500",
                  children: "加载PDF文件中...",
                }),
              }),
              error: (0, r.jsx)("div", {
                className: "flex items-center justify-center h-96",
                children: (0, r.jsx)("div", {
                  className: "text-red-500",
                  children: "PDF 加载失败",
                }),
              }),
              options: d ? g : u,
              children: Array.from(Array(c), (e, s) =>
                (0, r.jsxs)(
                  "div",
                  {
                    className: "flex flex-col items-center mb-6",
                    children: [
                      (0, r.jsxs)("div", {
                        className:
                          "text-center text-sm text-gray-600 mb-2 font-medium",
                        children: ["第 ", s + 1, " 页"],
                      }),
                      (0, r.jsx)("div", {
                        className:
                          "border border-gray-200 shadow-lg rounded-lg overflow-hidden bg-white",
                        children: (0, r.jsx)(h.A, {
                          pageNumber: s + 1,
                          scale: t,
                          loading: (0, r.jsx)("div", {
                            className:
                              "flex items-center justify-center h-96 w-96",
                            children: (0, r.jsxs)("div", {
                              className: "text-gray-500",
                              children: ["加载第 ", s + 1, " 页..."],
                            }),
                          }),
                          renderAnnotationLayer: !1,
                          renderTextLayer: !1,
                          onLoadSuccess: v,
                          onLoadError: (e) => {
                            ge(ue(e), "PDF 第 ".concat(s + 1, " 页"));
                          },
                        }),
                      }),
                    ],
                  },
                  "page_".concat(s + 1),
                ),
              ),
            }),
          }),
        });
      }
      function Pe(e) {
        let { isOpen: s, onClose: t, file: a, fileName: i = "" } = e,
          [l, c] = (0, n.useState)(0),
          [o, d] = (0, n.useState)(1),
          [x, m] = (0, n.useState)(0),
          [h, u] = (0, n.useState)(!0),
          g = (0, n.useRef)(null),
          p = (0, n.useCallback)(
            () =>
              x && g.current
                ? Math.max(Math.min((g.current.clientWidth - 80) / x, 1.5), 0.5)
                : 1,
            [x],
          ),
          f = (0, n.useCallback)(() => {
            d(p());
          }, [p]),
          v = (0, n.useCallback)((e) => {
            (c(e), u(!1));
          }, []),
          j = (0, n.useCallback)((e) => {
            (console.error("PDF加载失败:", e),
              ie.oR.error("PDF文件加载失败", {
                position: "top-center",
                description: "请检查文件是否损坏或稍后重试",
              }),
              u(!1));
          }, []),
          b = (0, n.useCallback)((e) => {
            m(e);
          }, []);
        return (
          (0, n.useEffect)(() => {
            x && s && d(p());
          }, [x, s, p]),
          (0, n.useEffect)(() => {
            let e = (e) => {
              if (s)
                switch (e.key) {
                  case "Escape":
                    t();
                    break;
                  case "+":
                  case "=":
                    (e.ctrlKey || e.metaKey) &&
                      (e.preventDefault(), d((e) => Math.min(1.25 * e, 2)));
                    break;
                  case "-":
                    (e.ctrlKey || e.metaKey) &&
                      (e.preventDefault(), d((e) => Math.max(0.8 * e, 0.5)));
                    break;
                  case "0":
                    (e.ctrlKey || e.metaKey) && (e.preventDefault(), f());
                }
            };
            return (
              s &&
              (document.addEventListener("keydown", e),
                (document.body.style.overflowY = "hidden")),
              () => {
                (document.removeEventListener("keydown", e),
                  (document.body.style.overflowY = "unset"));
              }
            );
          }, [s, t, f]),
          (0, n.useEffect)(() => {
            s && (c(0), d(1), m(0), u(!0));
          }, [s, a]),
          (0, r.jsx)(r.Fragment, {
            children: (0, r.jsx)("div", {
              className:
                "fixed top-0 right-0 h-full z-50 bg-white shadow-2xl transition-all duration-300 ease-in-out ".concat(
                  s
                    ? "translate-x-0 opacity-100"
                    : "translate-x-full opacity-0",
                ),
              style: { width: "70%", minWidth: "400px", maxWidth: "800px" },
              children: (0, r.jsx)("div", {
                ref: g,
                className: "w-full h-full flex flex-col",
                onClick: (e) => e.stopPropagation(),
                children:
                  s &&
                  a &&
                  (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsxs)("div", {
                        className:
                          "flex items-center justify-between p-4 bg-white border-b border-gray-200 shadow-sm",
                        children: [
                          (0, r.jsx)("div", {
                            className: "flex items-center gap-4 flex-1 min-w-0",
                            children: (0, r.jsxs)("div", {
                              className: "min-w-0 flex-1",
                              children: [
                                (0, r.jsx)("h2", {
                                  className:
                                    "text-lg font-semibold text-gray-900 truncate",
                                  title: i,
                                  children: i,
                                }),
                                l > 0 &&
                                (0, r.jsxs)("p", {
                                  className: "text-sm text-gray-500",
                                  children: ["共 ", l, " 页"],
                                }),
                              ],
                            }),
                          }),
                          (0, r.jsxs)("div", {
                            className:
                              "flex items-center gap-2 bg-gray-50 rounded-lg p-2",
                            children: [
                              (0, r.jsx)("button", {
                                onClick: () => d((e) => Math.max(0.8 * e, 0.5)),
                                disabled: o <= 0.5,
                                className:
                                  "h-8 w-8 p-0 flex items-center justify-center rounded hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed",
                                title: "缩小",
                                children: (0, r.jsx)("svg", {
                                  className: "h-4 w-4",
                                  fill: "none",
                                  stroke: "currentColor",
                                  viewBox: "0 0 24 24",
                                  children: (0, r.jsx)("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7",
                                  }),
                                }),
                              }),
                              (0, r.jsxs)("span", {
                                className:
                                  "text-sm text-gray-600 px-3 min-w-[60px] text-center",
                                children: [Math.round(100 * o), "%"],
                              }),
                              (0, r.jsx)("button", {
                                onClick: () => d((e) => Math.min(1.25 * e, 2)),
                                disabled: o >= 2,
                                className:
                                  "h-8 w-8 p-0 flex items-center justify-center rounded hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed",
                                title: "放大",
                                children: (0, r.jsx)("svg", {
                                  className: "h-4 w-4",
                                  fill: "none",
                                  stroke: "currentColor",
                                  viewBox: "0 0 24 24",
                                  children: (0, r.jsx)("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7",
                                  }),
                                }),
                              }),
                              (0, r.jsx)("div", {
                                className: "w-px h-6 bg-gray-300 mx-2",
                              }),
                              (0, r.jsx)("button", {
                                onClick: f,
                                className:
                                  "text-xs h-8 px-3 rounded hover:bg-gray-200",
                                title: "适应窗口",
                                children: "适应",
                              }),
                            ],
                          }),
                          (0, r.jsx)("div", {
                            className: "flex items-center gap-2 ml-4",
                            children: (0, r.jsx)("button", {
                              onClick: t,
                              className:
                                "h-10 w-10 p-0 flex items-center justify-center rounded-lg hover:bg-red-100 hover:text-red-600 transition-colors border border-gray-200 hover:border-red-300",
                              title: "关闭预览",
                              children: (0, r.jsx)("svg", {
                                className: "h-5 w-5",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: (0, r.jsx)("path", {
                                  strokeLinecap: "round",
                                  strokeLinejoin: "round",
                                  strokeWidth: 2,
                                  d: "M6 18L18 6M6 6l12 12",
                                }),
                              }),
                            }),
                          }),
                        ],
                      }),
                      (0, r.jsxs)("div", {
                        className: "flex-1 relative overflow-hidden",
                        children: [
                          h &&
                          (0, r.jsx)("div", {
                            className:
                              "absolute inset-0 flex items-center justify-center bg-white z-10",
                            children: (0, r.jsxs)("div", {
                              className: "text-center",
                              children: [
                                (0, r.jsx)("div", {
                                  className:
                                    "inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mb-4",
                                }),
                                (0, r.jsx)("p", {
                                  className: "text-gray-600",
                                  children: "正在加载PDF文件...",
                                }),
                              ],
                            }),
                          }),
                          a &&
                          (0, r.jsx)(ke, {
                            file: a,
                            scale: o,
                            onLoadSuccess: v,
                            onLoadError: j,
                            onPageLoad: b,
                          }),
                        ],
                      }),
                    ],
                  }),
              }),
            }),
          })
        );
      }
      class Ce {
        static shouldShowUpdateNotification() {
          return (
            localStorage.getItem(G.m.localStorageKeys.app.savedVersion) !==
            this.CURRENT_VERSION
          );
        }
        static markCurrentVersion() {
          localStorage.setItem(
            G.m.localStorageKeys.app.savedVersion,
            this.CURRENT_VERSION,
          );
        }
        static getVersionInfo() {
          let e = localStorage.getItem(G.m.localStorageKeys.app.savedVersion);
          return { current: this.CURRENT_VERSION, saved: e || void 0 };
        }
        static resetVersion() {
          localStorage.removeItem(G.m.localStorageKeys.app.savedVersion);
        }
      }
      Ce.CURRENT_VERSION = "6.0.0";
      var De = t(2965),
        Se = t(2118),
        Ee = t(3311);
      function Ae() {
        let [e, s] = (0, n.useState)(!1);
        (0, n.useEffect)(() => {
          Ce.shouldShowUpdateNotification() && s(!0);
        }, []);
        let t = () => {
          (Ce.markCurrentVersion(), s(!1));
        },
          a = (e) => {
            let s = { className: "w-5 h-5 text-blue-600", strokeWidth: 1.5 };
            switch (e) {
              case "move":
                return (0, r.jsx)(De.A, { ...s });
              case "fileImage":
                return (0, r.jsx)(Se.A, { ...s });
              case "copy":
                return (0, r.jsxs)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "20",
                  height: "20",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "#db2777",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  className: "w-5 h-5",
                  children: [
                    (0, r.jsx)("rect", {
                      width: "14",
                      height: "14",
                      x: "8",
                      y: "8",
                      rx: "2",
                      ry: "2",
                    }),
                    (0, r.jsx)("path", {
                      d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
                    }),
                  ],
                });
              default:
                return (0, r.jsx)(I.A, { ...s });
            }
          };
        return (0, r.jsx)(U.Lt, {
          open: e,
          onOpenChange: (e) => !e && t(),
          children: (0, r.jsxs)(U.EO, {
            className: "sm:max-w-md",
            children: [
              (0, r.jsxs)(U.wd, {
                className: "text-center space-y-4",
                children: [
                  (0, r.jsx)("div", {
                    className:
                      "mx-auto w-12 h-12 bg-blue-600 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center",
                    children: (0, r.jsx)(Ee.A, {
                      className: "w-6 h-6 text-white",
                    }),
                  }),
                  (0, r.jsxs)("div", {
                    className: "space-y-2",
                    children: [
                      (0, r.jsx)(U.r7, {
                        className: "text-xl font-semibold text-center",
                        children: "发票打印助手更新了！",
                      }),
                      (0, r.jsxs)("div", {
                        className: "flex items-center justify-center gap-2",
                        children: [
                          (0, r.jsx)(w, {
                            variant: "secondary",
                            className: "text-xs",
                            children: "V6.0.0",
                          }),
                          (0, r.jsx)("span", {
                            className: "text-sm text-muted-foreground",
                            children: "新功能抢先体验",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, r.jsxs)("div", {
                className: "space-y-4",
                children: [
                  (0, r.jsx)("div", {
                    className: "space-y-3",
                    children: [
                      {
                        title: "拖拽排序",
                        description:
                          "轻松拖拽发票文件调整顺序，让发票按您期望的顺序合并",
                        icon: "move",
                      },
                      {
                        title: "发票文件预览",
                        description:
                          "点击文件图标即可预览已处理的发票文件，确认内容更方便",
                        icon: "fileImage",
                      },
                      {
                        title: "一键复制",
                        description:
                          "智能复制文件并修改MD5值，轻松绕过重复限制，支持批量打印",
                        icon: "copy",
                      },
                    ].map((e, s) =>
                      (0, r.jsxs)(
                        "div",
                        {
                          className:
                            "flex items-start gap-3 p-3 rounded-lg bg-muted/30",
                          children: [
                            (0, r.jsx)("div", {
                              className: "flex-shrink-0 mt-0.5",
                              children: a(e.icon),
                            }),
                            (0, r.jsxs)("div", {
                              className: "space-y-1",
                              children: [
                                (0, r.jsx)("h4", {
                                  className: "font-medium text-sm",
                                  children: e.title,
                                }),
                                (0, r.jsx)("p", {
                                  className:
                                    "text-xs text-muted-foreground leading-relaxed",
                                  children: e.description,
                                }),
                              ],
                            }),
                          ],
                        },
                        s,
                      ),
                    ),
                  }),
                  (0, r.jsx)("div", {
                    className: "pt-2",
                    children: (0, r.jsx)(u.$, {
                      onClick: () => {
                        t();
                      },
                      className: "w-full bg-blue-600 hover:bg-blue-700 ",
                      children: "知道了，开始体验",
                    }),
                  }),
                ],
              }),
            ],
          }),
        });
      }
      x.EA.workerSrc = window.__PDF_WORKER_SRC || "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.8.69/pdf.worker.min.mjs";
      let Le = "MainPage";
      function Ue(e) {
        let {
          file: s,
          isProcessing: t,
          onRemoveFile: a,
          onPreviewFile: i,
          tm: l,
          tc: n,
        } = e,
          {
            attributes: c,
            listeners: o,
            setNodeRef: d,
            transform: x,
            transition: m,
            isDragging: h,
          } = (0, J.gl)({ id: s.id, disabled: t || "processing" === s.status }),
          g = { transform: Y.Ks.Transform.toString(x), transition: m },
          p = s.invoiceCount && s.invoiceCount > 0 && s.total && s.total > 0;
        return (0, r.jsxs)("div", {
          ref: d,
          style: g,
          className: "flex items-center justify-between p-3 rounded-lg gap-2 "
            .concat(p ? "bg-gray-50" : "bg-yellow-50", " ")
            .concat(h ? "opacity-50" : ""),
          children: [
            (0, r.jsx)("div", {
              ...c,
              ...o,
              className:
                "flex-shrink-0 p-1 rounded hover:bg-gray-200 transition-colors cursor-grab active:cursor-grabbing ".concat(
                  t || "processing" === s.status
                    ? "opacity-30 cursor-not-allowed"
                    : "",
                ),
              title:
                t || "processing" === s.status
                  ? "文件处理中，暂时无法拖拽"
                  : "拖拽调整顺序",
              children: (0, r.jsx)(M.A, { className: "h-4 w-4 text-gray-400" }),
            }),
            (0, r.jsxs)("div", {
              className: "flex items-center gap-3 flex-1 min-w-0",
              children: [
                (0, r.jsx)("div", {
                  className:
                    "flex-shrink-0 transition-all duration-200 ".concat(
                      "completed" === s.status ? "cursor-pointer" : "",
                    ),
                  onClick: "completed" === s.status ? () => i(s) : void 0,
                  title: "completed" === s.status ? "点击预览PDF文件" : "",
                  children: (0, r.jsx)(R.A, {
                    className: "h-4 w-4 ".concat(
                      "completed" === s.status
                        ? "text-gray-500 hover:text-blue-600 hover:scale-110"
                        : "text-gray-400",
                    ),
                  }),
                }),
                (0, r.jsxs)("div", {
                  className: "min-w-0 flex-1",
                  children: [
                    (0, r.jsx)("p", {
                      className: "text-sm font-medium ".concat(
                        p ? "text-gray-900" : "text-yellow-700",
                        "  truncate",
                      ),
                      children: s.file.name,
                    }),
                    "completed" === s.status &&
                    (0, r.jsx)("p", {
                      className: "text-xs text-gray-500",
                      children: p
                        ? (0, r.jsxs)(r.Fragment, {
                          children: [
                            l("invoiceCount"),
                            ":",
                            " ",
                            s.invoiceCount || 0,
                            " |",
                            " ",
                            l("amount"),
                            ": ¥",
                            ((s.total || 0) / 100).toFixed(2),
                          ],
                        })
                        : (0, r.jsx)("span", {
                          className: "text-yellow-700 ",
                          children: "无法解析",
                        }),
                    }),
                  ],
                }),
              ],
            }),
            (0, r.jsxs)("div", {
              className: "flex items-center gap-2",
              children: [
                (0, r.jsxs)(w, {
                  variant:
                    "completed" === s.status && p
                      ? "success"
                      : "completed" === s.status
                        ? "warning"
                        : "processing" === s.status
                          ? "secondary"
                          : "error" === s.status
                            ? "destructive"
                            : "outline",
                  children: [
                    "completed" === s.status &&
                    (0, r.jsx)(I.A, { className: "h-3 w-3 mr-1" }),
                    "pending" === s.status
                      ? n("pending")
                      : "processing" === s.status
                        ? n("processing")
                        : "completed" === s.status
                          ? ""
                          : n("failed"),
                  ],
                }),
                (0, r.jsx)(u.$, {
                  variant: "ghost",
                  size: "sm",
                  onClick: () => a(s.id),
                  className:
                    "h-8 w-8 p-0 transition-all duration-200 hover:bg-red-100 hover:text-red-600",
                  children: (0, r.jsx)(z.A, { className: "h-4 w-4" }),
                }),
              ],
            }),
          ],
        });
      }
      function Me() {
        let e = (0, d.useRouter)();
        (0, n.useEffect)(() => {
          let s = (function () {
            let e = navigator.userAgent,
              s = e.match(/Chrome\/(\d+)/);
            if (s) return parseInt(s[1], 10);
            let t = e.match(/Edg\/(\d+)/);
            if (t) return parseInt(t[1], 10);
            let r = e.match(/Chromium\/(\d+)/);
            return r ? parseInt(r[1], 10) : null;
          })();
          if (null !== s && s < 99)
            return ((0, be.Tg)(s), void e.push("/browser-upgrade"));
        }, [e]);
        let s = (0, n.useRef)(
          (0, i.BX)({
            invoiceFiles: [],
            isProcessing: !1,
            processingProgress: 0,
            mergedPdfUrl: null,
            stats: { totalCount: 0, totalAmount: 0, invoices: [] },
            noline: !1,
            method: 0,
          }),
        ),
          t = (0, l.s)(s.current),
          x = (0, o.c3)("MainPage"),
          g = (0, o.c3)("Common"),
          b = (0, o.c3)("CSVHeaders"),
          [N, y] = (0, n.useState)(!0),
          [F, P] = (0, n.useState)(!1),
          [C, S] = (0, n.useState)(0),
          [E, M] = (0, n.useState)(1),
          [I, Y] = (0, n.useState)(0),
          [Z, ee] = (0, n.useState)(0),
          [se, te] = (0, n.useState)(!1),
          [re, le] = (0, n.useState)(!1),
          [ce, oe] = (0, n.useState)(null),
          de = (0, n.useCallback)((e) => {
            "completed" === e.status && oe(e);
          }, []),
          xe = (0, n.useCallback)(() => {
            oe(null);
          }, []),
          pe = (0, n.useCallback)(
            () => (I && Z ? Math.max(Math.min((Z - 32) / I, 2), 0.3) : 1),
            [I, Z],
          ),
          we = (0, n.useCallback)(() => {
            M(pe());
          }, [pe]),
          ke = (0, n.useCallback)(() => {
            let e = 1.25 * E;
            M(E < 1 && e >= 0.95 ? 1 : Math.min(e, 2));
          }, [E]),
          Ce = (0, n.useCallback)(() => {
            let e = 0.8 * E;
            M(E > 1 && e <= 1.05 ? 1 : Math.max(e, 0.5));
          }, [E]),
          De = (0, n.useRef)(null);
        ((0, n.useEffect)(() => {
          {
            let e =
              "true" ===
              localStorage.getItem(G.m.localStorageKeys.mergeConf.noline),
              t = parseInt(
                localStorage.getItem(G.m.localStorageKeys.mergeConf.method) ||
                "0",
              );
            ((s.current.noline = e), (s.current.method = t), P(!0));
          }
        }, []),
          (0, n.useEffect)(() => {
            let e = () => {
              De.current && ee(De.current.clientWidth);
            };
            return (
              e(),
              window.addEventListener("resize", e),
              () => {
                window.removeEventListener("resize", e);
              }
            );
          }, []),
          (0, n.useEffect)(() => {
            t.mergedPdfUrl && De.current && ee(De.current.clientWidth);
          }, [t.mergedPdfUrl]),
          (0, n.useEffect)(() => {
            I && Z && t.mergedPdfUrl && M(pe());
          }, [I, Z, t.mergedPdfUrl, pe]));
        let Se = (0, n.useMemo)(
          () => ({
            cMapUrl: "https://unpkg.com/pdfjs-dist@4.8.69/cmaps/",
            cMapPacked: !0,
            standardFontDataUrl:
              "https://unpkg.com/pdfjs-dist@4.8.69/standard_fonts/",
            isEvalSupported: !1,
            maxImageSize: 1048576,
            disableFontFace: !1,
            fontExtraProperties: !0,
            useSystemFonts: !0,
            disableAutoFetch: !1,
            ignoreErrors: !0,
            stopAtErrors: !1,
            verbosity: 0,
            enableXfa: !1,
            disableRange: !1,
            disableStream: !1,
            withCredentials: !1,
            httpHeaders: null,
          }),
          [],
        ),
          Ee = (0, n.useMemo)(
            () => ({
              cMapUrl: "https://cdn.jsdelivr.net/npm/pdfjs-dist@4.8.69/cmaps/",
              cMapPacked: !0,
              standardFontDataUrl:
                "https://cdn.jsdelivr.net/npm/pdfjs-dist@4.8.69/standard_fonts/",
              disableFontFace: !0,
              fontExtraProperties: !0,
              useSystemFonts: !0,
              ignoreErrors: !0,
              stopAtErrors: !1,
              verbosity: 0,
              enableXfa: !1,
              disableRange: !0,
              disableStream: !0,
              maxImageSize: 262144,
              isEvalSupported: !1,
              disableAutoFetch: !0,
            }),
            [],
          ),
          Me = (0, n.useCallback)(async (e) => {
            ((s.current.isProcessing = !0), (s.current.processingProgress = 0));
            for (let t = 0; t < e.length; t++) {
              let r = s.current.invoiceFiles.find((s) => s.id === e[t].id);
              if (!r)
                return void (
                  0
                );
              r.status = "processing";
              try {
                let e = await (0, ae.P)(r.id, r.file.size);
                if (e instanceof ae.hD)
                  throw (console.error("查询发票信息失败"), e);
                if (0 !== e.code)
                  throw Error(
                    "查询发票信息 code 错误: ".concat(JSON.stringify(e)),
                  );
                if (!e.result) {
                  let e = await (0, ae.Se)(r.file, (e) => {
                    console.log("progress", e.progress);
                  });
                  if (e instanceof ae.hD)
                    throw (
                      e.type === he.r.Exception &&
                      e.info instanceof a.pe &&
                      (413 === e.info.status
                        ? ie.oR.error("".concat(r.file.name, " 太大了"), {
                          position: "top-center",
                        })
                        : ie.oR.error("".concat(r.file.name, " 上传失败"), {
                          position: "top-center",
                        })),
                      e
                    );
                }
                let {
                  invoices: t,
                  hasNotA5Invoice: i,
                  invoicePages: l,
                } = await Te(r.id, r.file.size, r.file.name),
                  n = t.filter(
                    (e, s, t) =>
                      s === t.findIndex((s) => s.number === e.number),
                  ),
                  c = n.length,
                  o = n.reduce((e, s) => e + s.total, 0);
                (0 === c && (0, be.hh)(r.id),
                  (r.invoiceCount = c),
                  (r.total = o),
                  (r.hasNotA5Invoice = i),
                  (r.invoicePages = l),
                  (r.status = "completed"),
                  (s.current.stats.totalCount += c),
                  (s.current.stats.totalAmount += o),
                  s.current.stats.invoices.push(...n));
              } catch (e) {
                if (((r.status = "error"), e instanceof ae.hD))
                  console.error(Le, "processInvoices api error", e.info);
                else {
                  let s;
                  (console.error(
                    Le,
                    "processInvoices exception",
                    (s = e instanceof Error ? e.message : JSON.stringify(e)),
                  ),
                    (0, be.gz)(r.id, s));
                }
              }
              s.current.processingProgress = ((t + 1) / e.length) * 100;
            }
            let t = s.current.invoiceFiles.filter((e) => !e.hasNotA5Invoice),
              r = s.current.invoiceFiles.filter((e) => e.hasNotA5Invoice);
            ((s.current.invoiceFiles = [...t, ...r]),
              (s.current.isProcessing = !1),
              (s.current.processingProgress = 0),
              console.log("files:", e.length),
              e.length > 0 &&
              (console.log(
                "completedFiles:",
                s.current.invoiceFiles.filter((e) => "completed" === e.status)
                  .length,
              ),
                Be()));
          }, []),
          Re = (0, n.useCallback)(
            async (e) => {
              let t = e.filter((e) => "application/pdf" === e.type),
                r = t.length + s.current.invoiceFiles.length;
              let a = [];
              for (let r of t) {
                let t;
                if (r.size > 1024 * G.m.limit.maxFileSize * 1024) {
                  ie.oR.error(
                    ""
                      .concat(r.name, " 太大了，最大支持 ")
                      .concat(G.m.limit.maxFileSize, " MB"),
                    { position: "top-center" },
                  );
                  continue;
                }
                try {
                  if (
                    ((t = await me(r)),
                      s.current.invoiceFiles.some(
                        (e) => e.id === t && e.file.size === r.size,
                      ))
                  ) {
                    ie.oR.warning("".concat(r.name, " 已存在"), {
                      position: "top-center",
                    });
                    continue;
                  }
                } catch (e) {
                  console.error("计算文件MD5失败:", e);
                  continue;
                }
                let l = await r.arrayBuffer();
                (0, Ne.cE)(l)
                  ? a.push({
                    file: (0, i.KR)(r),
                    id: t,
                    status: "pending",
                    hasNotA5Invoice: !1,
                    invoicePages: [],
                  })
                  : ie.oR.error("".concat(r.name, " 不是pdf文件"), {
                    position: "top-center",
                  });
              }
              a.length > 0 &&
                (0 === s.current.invoiceFiles.length
                  ? (0, be.vD)(a.length)
                  : (0, be.Y3)(a.length),
                  s.current.invoiceFiles.push(...a),
                  Me(a));
            },
            [Me],
          ),
          {
            getRootProps: Ie,
            getInputProps: ze,
            isDragActive: _e,
          } = (0, c.VB)({
            onDrop: Re,
            accept: { "application/pdf": [".pdf"] },
            multiple: !0,
          }),
          Ve = (0, q.FR)(
            (0, q.MS)(q.AN),
            (0, q.MS)(q.uN, { coordinateGetter: J.JR }),
          ),
          Oe = (0, n.useCallback)((e) => {
            let { active: t, over: r } = e;
            if (t.id !== (null == r ? void 0 : r.id)) {
              let e = s.current.invoiceFiles.findIndex((e) => e.id === t.id),
                a = s.current.invoiceFiles.findIndex(
                  (e) => e.id === (null == r ? void 0 : r.id),
                );
              -1 !== e &&
                -1 !== a &&
                ((s.current.invoiceFiles = (0, J.be)(
                  s.current.invoiceFiles,
                  e,
                  a,
                )),
                  setTimeout(() => {
                    Be();
                  }, 100),
                  ie.oR.success("文件顺序已更新", {
                    position: "top-center",
                    duration: 2e3,
                  }));
            }
          }, []),
          Te = async (e, s, t) => {
            let r = await (0, ae.o6)(e, s);
            if (r instanceof ae.hD) throw ae.hD;
            let a = [],
              i = [];
            if (0 !== r.code) throw Error(JSON.stringify(r));
            let l = !1;
            return (
              r.result.pages &&
              r.result.pages.forEach((e) => {
                e.invoices &&
                  (i.push(e.pageno),
                    0 === e.a5 &&
                    e.invoices &&
                    e.invoices.length > 0 &&
                    (l = !0),
                    e.invoices.forEach((e) => {
                      a.push({
                        fileName: t,
                        code: e.code,
                        number: e.number,
                        total: e.total,
                      });
                    }));
              }),
              { invoices: a, hasNotA5Invoice: l, invoicePages: i }
            );
          },
          Be = async () => {
            let e = s.current.invoiceFiles.filter(
              (e) => "completed" === e.status,
            );
            if (0 === e.length) return;
            let t = e.map((e) => ({
              id: e.id,
              ips: [...e.invoicePages],
              size: e.file.size,
            })),
              r = await (0, ae.h1)(t, +!!s.current.noline, s.current.method);
            if (r instanceof ae.hD)
              return (
                console.error("合并PDF失败", r.type, r.getInfo()),
                ie.oR.error("合并PDF失败", { position: "top-center" }),
                void (0, be.T7)(
                  e.map((e) => e.id),
                  r.getInfo(),
                )
              );
            (s.current.mergedPdfUrl &&
              URL.revokeObjectURL(s.current.mergedPdfUrl),
              (s.current.mergedPdfUrl = URL.createObjectURL(r)),
              S(0),
              Y(0),
              te(!1));
          },
          Ke = (e) => {
            (0, be.ZC)();
            let t = s.current.invoiceFiles.find((s) => s.id === e);
            var r;
            t &&
              "completed" === t.status &&
              ((s.current.stats.totalCount -=
                null != (r = t.invoiceCount) ? r : 0),
                (s.current.stats.totalAmount -= t.total || 0),
                (s.current.stats.invoices = s.current.stats.invoices.filter(
                  (e) => e.fileName !== t.file.name,
                )));
            ((s.current.invoiceFiles = s.current.invoiceFiles.filter(
              (s) => s.id !== e,
            )),
              setTimeout(() => {
                s.current.invoiceFiles.filter(
                  (s) => s.id !== e && "completed" === s.status,
                ).length > 0
                  ? Be()
                  : s.current.mergedPdfUrl &&
                  (URL.revokeObjectURL(s.current.mergedPdfUrl),
                    (s.current.mergedPdfUrl = null));
              }, 100));
          };
        return (0, r.jsx)(r.Fragment, {
          children: (0, r.jsxs)("div", {
            className:
              "min-h-screen bg-blue-50 bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col",
            children: [
              (0, r.jsx)("header", {
                role: "banner",
                children: (0, r.jsx)(ne, {
                  showBackToHome: ye.A.showLanding,
                  dirty: t.invoiceFiles.length > 0,
                }),
              }),
              (0, r.jsx)(Q, {}),
              (0, r.jsxs)("main", {
                role: "main",
                className: "max-w-7xl w-full mx-auto p-4 flex flex-col flex-1",
                children: [
                  (0, r.jsxs)("div", {
                    className: "sr-only",
                    children: [
                      (0, r.jsx)("h1", {
                        children: "发票打印助手 - PDF电子发票批量处理工具",
                      }),
                      (0, r.jsx)("p", {
                        children:
                          "专业的PDF电子发票处理平台，专门处理PDF格式电子发票文件的批量上传、智能合并、自动统计、一键打印和数据导出功能。适用于企业财务人员、会计师、出纳员进行电子发票管理和数字化报销流程优化。",
                      }),
                      (0, r.jsx)("h2", { children: "主要功能特色" }),
                      (0, r.jsxs)("ul", {
                        children: [
                          (0, r.jsx)("li", {
                            children:
                              "PDF电子发票批量上传 - 支持拖拽上传多个PDF格式电子发票文件",
                          }),
                          (0, r.jsx)("li", {
                            children:
                              "智能电子发票识别 - 自动提取PDF发票代码、号码、金额信息",
                          }),
                          (0, r.jsx)("li", {
                            children:
                              "电子发票合并打印 - 多张PDF发票合并为A4双联格式，节省纸张",
                          }),
                          (0, r.jsx)("li", {
                            children:
                              "PDF实时预览功能 - 电子发票文件在线预览，支持缩放和打印",
                          }),
                          (0, r.jsx)("li", {
                            children:
                              "电子发票统计数据导出 - PDF发票信息生成CSV文件，便于Excel管理",
                          }),
                          (0, r.jsx)("li", {
                            children:
                              "一键打印服务 - 批量打印合并后的PDF电子发票文件",
                          }),
                        ],
                      }),
                      (0, r.jsx)("h2", { children: "适用场景和用户" }),
                      (0, r.jsx)("p", {
                        children:
                          "企业电子发票月度报销、季度数字化财务整理、年终电子账务处理、税务申报准备。适用于处理PDF电子发票的中小企业财务部门、会计师事务所、代理记账公司、个体工商户等。",
                      }),
                      (0, r.jsx)("h2", { children: "技术支持" }),
                      (0, r.jsx)("p", {
                        children:
                          "专门支持PDF格式的增值税专用发票、普通发票、机动车发票等各类电子发票。专注于PDF文件批量导入处理，提供电子发票信息自动识别和数据提取功能。",
                      }),
                    ],
                  }),
                  (0, r.jsx)("div", { className: "flex-1" }),
                  (0, r.jsxs)("section", {
                    "aria-label": "发票处理工作区",
                    className: "grid grid-cols-1 lg:grid-cols-3 gap-6",
                    children: [
                      t.invoiceFiles.length > 0 &&
                      (0, r.jsx)("div", {
                        className: "lg:col-span-2 space-y-6",
                        children:
                          t.mergedPdfUrl &&
                          (0, r.jsxs)(p, {
                            role: "region",
                            "aria-label": "PDF预览区域",
                            children: [
                              (0, r.jsx)(f, {
                                children: (0, r.jsxs)(v, {
                                  className:
                                    "flex items-center justify-between",
                                  children: [
                                    (0, r.jsx)("span", {
                                      className: "hidden sm:inline",
                                      children: x("pdfPreview"),
                                    }),
                                    C > 0 &&
                                    (0, r.jsxs)("div", {
                                      className:
                                        "hidden xs:flex items-center text-sm text-gray-500",
                                      children: ["共 ", C, " 页"],
                                    }),
                                    (0, r.jsxs)("div", {
                                      className: "flex items-center gap-1",
                                      children: [
                                        (0, r.jsxs)("div", {
                                          className:
                                            "flex items-center gap-1 bg-slate-50 rounded-md p-1",
                                          role: "group",
                                          "aria-label": "PDF缩放控制",
                                          children: [
                                            (0, r.jsx)(u.$, {
                                              variant: "ghost",
                                              size: "sm",
                                              onClick: Ce,
                                              disabled: E <= 0.5,
                                              className: "h-7 w-7 p-0",
                                              title: "缩小PDF",
                                              "aria-label": "缩小PDF显示",
                                              children: (0, r.jsx)(_.A, {
                                                className: "h-3.5 w-3.5",
                                                "aria-hidden": "true",
                                              }),
                                            }),
                                            (0, r.jsxs)("span", {
                                              className:
                                                "text-xs text-gray-600 px-2 min-w-[45px] text-center",
                                              "aria-label":
                                                "当前缩放比例".concat(
                                                  Math.round(100 * E),
                                                  "%",
                                                ),
                                              children: [
                                                Math.round(100 * E),
                                                "%",
                                              ],
                                            }),
                                            (0, r.jsx)(u.$, {
                                              variant: "ghost",
                                              size: "sm",
                                              onClick: ke,
                                              disabled: E >= 2,
                                              className: "h-7 w-7 p-0",
                                              title: "放大PDF",
                                              "aria-label": "放大PDF显示",
                                              children: (0, r.jsx)(V.A, {
                                                className: "h-3.5 w-3.5",
                                                "aria-hidden": "true",
                                              }),
                                            }),
                                            (0, r.jsx)("div", {
                                              className:
                                                "w-px h-4 bg-gray-300 mx-1",
                                            }),
                                            (0, r.jsx)(u.$, {
                                              variant: "ghost",
                                              size: "sm",
                                              onClick: we,
                                              disabled: !I || !Z,
                                              className: "text-xs h-7 px-2",
                                              title: "适应窗口大小",
                                              "aria-label":
                                                "调整PDF到最适合窗口大小",
                                              children: "适应",
                                            }),
                                          ],
                                        }),
                                        (0, r.jsx)("div", {
                                          className:
                                            "hidden sm:block w-px h-6 bg-gray-300 mx-2",
                                        }),
                                        (0, r.jsx)("div", {
                                          className:
                                            "flex items-center gap-1 bg-blue-50 rounded-md p-1",
                                          role: "group",
                                          "aria-label": "下载操作",
                                          children: (0, r.jsxs)(u.$, {
                                            variant: "ghost",
                                            size: "sm",
                                            onClick: async () => {
                                              if (!s.current.mergedPdfUrl)
                                                return;
                                              let e =
                                                document.createElement("a");
                                              ((e.href =
                                                s.current.mergedPdfUrl),
                                                (e.download = ""
                                                  .concat(
                                                    x(
                                                      "downloadMergedFileName",
                                                    ),
                                                    "_",
                                                  )
                                                  .concat(
                                                    new Date()
                                                      .toLocaleDateString(
                                                        "zh-CN",
                                                      )
                                                      .replaceAll("/", "_"),
                                                    ".pdf",
                                                  )),
                                                e.click());
                                            },
                                            title: "下载合并后的PDF发票文件",
                                            "aria-label":
                                              "下载合并后的PDF发票文件",
                                            className:
                                              "text-xs h-7 px-2 text-blue-700 hover:bg-blue-100",
                                            children: [
                                              (0, r.jsx)(O.A, {
                                                className: "h-3.5 w-3.5 mr-1",
                                                "aria-hidden": "true",
                                              }),
                                              (0, r.jsx)("span", {
                                                className: "hidden xs:inline",
                                                children: "下载",
                                              }),
                                            ],
                                          }),
                                        }),
                                        (0, r.jsx)("div", {
                                          className:
                                            "hidden sm:block w-px h-6 bg-gray-300 mx-2",
                                        }),
                                        (0, r.jsx)("div", {
                                          className:
                                            "bg-green-50 rounded-md p-1",
                                          role: "group",
                                          "aria-label": "打印操作",
                                          children: (0, r.jsxs)(u.$, {
                                            variant: "ghost",
                                            size: "sm",
                                            onClick: async () => {
                                              if (!s.current.mergedPdfUrl)
                                                return;
                                              let e =
                                                "print-iframe-QeuOa42kUm1C",
                                                t =
                                                  document.createElement(
                                                    "iframe",
                                                  );
                                              ((t.id = e),
                                                (t.style.position = "fixed"),
                                                (t.style.right = "0"),
                                                (t.style.bottom = "0"),
                                                (t.style.width = "0"),
                                                (t.style.height = "0"),
                                                (t.style.border = "none"));
                                              let r =
                                                document.getElementById(e);
                                              (r &&
                                                (console.log(
                                                  "删除已存在的iframe",
                                                ),
                                                  document.body.removeChild(r)),
                                                document.body.appendChild(t),
                                                (t.onload = () => {
                                                  try {
                                                    var e;
                                                    null ==
                                                      (e = t.contentWindow) ||
                                                      e.print();
                                                  } catch (e) {
                                                    (console.error(
                                                      "打印失败:",
                                                      e,
                                                    ),
                                                      ie.oR.error(
                                                        "打印失败，请重试",
                                                        {
                                                          position:
                                                            "top-center",
                                                        },
                                                      ),
                                                      document.body.removeChild(
                                                        t,
                                                      ));
                                                  }
                                                }),
                                                (t.src =
                                                  s.current.mergedPdfUrl),
                                                ie.oR.info(
                                                  "正在准备打印...",
                                                  {
                                                    position: "top-center",
                                                    duration: 2e3,
                                                  },
                                                ));
                                            },
                                            title: "打印合并后的PDF发票",
                                            "aria-label":
                                              "打印合并后的PDF发票",
                                            className:
                                              "text-xs h-7 px-2 text-green-700 hover:bg-green-100",
                                            children: [
                                              (0, r.jsx)(T.A, {
                                                className: "h-3.5 w-3.5 mr-1",
                                                "aria-hidden": "true",
                                              }),
                                              (0, r.jsx)("span", {
                                                className: "hidden xs:inline",
                                                children: "打印",
                                              }),
                                            ],
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                              (0, r.jsx)(j, {
                                children: (0, r.jsx)("div", {
                                  className:
                                    "border rounded-lg overflow-hidden bg-white",
                                  ref: De,
                                  children: (0, r.jsx)(m.A, {
                                    file: t.mergedPdfUrl,
                                    onLoadSuccess: (e) => {
                                      let { numPages: s } = e;
                                      S(s);
                                    },
                                    loading: (0, r.jsx)("div", {
                                      className:
                                        "flex items-center justify-center h-96",
                                      children: (0, r.jsx)("div", {
                                        className: "text-gray-500",
                                        children: g("loading"),
                                      }),
                                    }),
                                    error: (0, r.jsx)("div", {
                                      className:
                                        "flex items-center justify-center h-96",
                                      children: (0, r.jsx)("div", {
                                        className: "text-red-500",
                                        children: "PDF 加载失败",
                                      }),
                                    }),
                                    onLoadError: (e) => {
                                      let s = ue(e);
                                      if (
                                        (ge(s, "PDF Document"),
                                          s.shouldUseFallback && !se)
                                      )
                                        return (
                                          console.log(
                                            "检测到兼容性错误，切换到备用配置重新加载PDF",
                                          ),
                                          void te(!0)
                                        );
                                      if (!s.shouldUseFallback || se) {
                                        let e = s.isHeadersError
                                          ? {
                                            title:
                                              "PDF 加载遇到网络兼容性问题",
                                            description:
                                              "已自动尝试使用兼容模式重新加载",
                                          }
                                          : s.isNetworkError
                                            ? {
                                              title: "PDF 网络加载失败",
                                              description:
                                                "请检查网络连接或稍后重试",
                                            }
                                            : s.isFontError
                                              ? {
                                                title: "PDF 字体加载失败",
                                                description:
                                                  "已自动切换到系统字体显示",
                                              }
                                              : s.isCMapError
                                                ? {
                                                  title:
                                                    "PDF 字符映射加载失败",
                                                  description:
                                                    "可能影响中文字符显示，已尝试备用方案",
                                                }
                                                : {
                                                  title: "PDF 加载失败",
                                                  description:
                                                    "请检查文件是否完整或尝试重新上传",
                                                };
                                        ie.oR.error(e.title, {
                                          position: "top-center",
                                          description: e.description,
                                        });
                                      }
                                    },
                                    className: "w-full",
                                    options: se ? Ee : Se,
                                    children: (0, r.jsx)("div", {
                                      className:
                                        "max-h-225 overflow-auto pdf-container bg-slate-100 text-center",
                                      children: (0, r.jsx)("div", {
                                        className:
                                          "inline-flex flex-col items-center gap-6 p-4",
                                        children: Array.from(
                                          Array(C),
                                          (e, s) =>
                                            (0, r.jsxs)(
                                              "div",
                                              {
                                                className:
                                                  "flex flex-col items-center",
                                                children: [
                                                  (0, r.jsxs)("div", {
                                                    className:
                                                      "text-center text-sm text-gray-600 mb-2 font-medium",
                                                    children: [
                                                      "第 ",
                                                      s + 1,
                                                      " 页",
                                                    ],
                                                  }),
                                                  (0, r.jsx)("div", {
                                                    className:
                                                      "border border-gray-200 shadow-lg rounded-lg overflow-hidden bg-white",
                                                    children: (0, r.jsx)(
                                                      h.A,
                                                      {
                                                        pageNumber: s + 1,
                                                        scale: E,
                                                        loading: (0, r.jsx)(
                                                          "div",
                                                          {
                                                            className:
                                                              "flex items-center justify-center h-96 w-96",
                                                            children: (0,
                                                              r.jsxs)("div", {
                                                                className:
                                                                  "text-gray-500",
                                                                children: [
                                                                  "加载第 ",
                                                                  s + 1,
                                                                  " 页...",
                                                                ],
                                                              }),
                                                          },
                                                        ),
                                                        renderAnnotationLayer:
                                                          !1,
                                                        renderTextLayer: !1,
                                                        onLoadSuccess: (
                                                          e,
                                                        ) => {
                                                          if (0 === s) {
                                                            let { width: s } =
                                                              e.getViewport({
                                                                scale: 1,
                                                              });
                                                            Y(s);
                                                          }
                                                        },
                                                        onLoadError: (e) => {
                                                          ge(
                                                            ue(e),
                                                            "PDF 第 ".concat(
                                                              s + 1,
                                                              " 页",
                                                            ),
                                                          );
                                                        },
                                                      },
                                                    ),
                                                  }),
                                                ],
                                              },
                                              "page_".concat(s + 1),
                                            ),
                                        ),
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                            ],
                          }),
                      }),
                      (0, r.jsxs)("aside", {
                        className: "space-y-6 ".concat(
                          0 === t.invoiceFiles.length ? "lg:col-start-2" : "",
                        ),
                        role: "complementary",
                        "aria-label": "文件管理和统计区域",
                        children: [
                          F &&
                          N &&
                          ("Quark" === G.m.browser.name ||
                            "WeChat" === G.m.browser.name) &&
                          (0, r.jsxs)(fe, {
                            variant: "destructive",
                            className: "relative",
                            children: [
                              (0, r.jsx)(ve, {
                                children: "浏览器兼容性提示",
                              }),
                              (0, r.jsx)(je, {
                                children:
                                  "当前浏览器可能不完全支持PDF打印功能，建议使用Chrome、Edge、Firefox等主流浏览器，或者下载合并后的PDF文件使用PDF阅读器打印",
                              }),
                              (0, r.jsx)(u.$, {
                                variant: "ghost",
                                size: "sm",
                                className:
                                  "absolute right-2 top-2 h-6 w-6 p-0 hover:bg-red-100",
                                onClick: () => y(!1),
                                children: (0, r.jsx)(z.A, {
                                  className: "h-4 w-4",
                                }),
                              }),
                            ],
                          }),
                          (0, r.jsxs)(p, {
                            role: "region",
                            "aria-label": "文件上传区域",
                            children: [
                              (0, r.jsx)(f, {
                                children: (0, r.jsxs)(v, {
                                  className: "flex items-center gap-2",
                                  children: [
                                    (0, r.jsx)(B.A, {
                                      className: "h-5 w-5",
                                      "aria-hidden": "true",
                                    }),
                                    x("uploadTitle"),
                                  ],
                                }),
                              }),
                              (0, r.jsxs)(j, {
                                children: [
                                  (0, r.jsxs)("div", {
                                    ...Ie(),
                                    className:
                                      "border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ".concat(
                                        _e
                                          ? "border-blue-400 bg-blue-50"
                                          : "border-gray-300 hover:border-gray-400",
                                      ),
                                    role: "button",
                                    "aria-label":
                                      "点击选择或拖拽上传PDF发票文件",
                                    tabIndex: 0,
                                    children: [
                                      (0, r.jsx)("input", {
                                        ...ze(),
                                        "aria-label": "选择PDF发票文件",
                                      }),
                                      (0, r.jsx)(R.A, {
                                        className:
                                          "h-10 w-10 mx-auto text-gray-400 mb-3",
                                        "aria-hidden": "true",
                                      }),
                                      _e
                                        ? (0, r.jsxs)("div", {
                                          children: [
                                            (0, r.jsx)("p", {
                                              className:
                                                "text-base text-blue-600 mb-1",
                                              children: x("dropFiles"),
                                            }),
                                            (0, r.jsx)("p", {
                                              className:
                                                "text-sm text-gray-500 invisible",
                                              children: x("clickToSelect"),
                                            }),
                                          ],
                                        })
                                        : (0, r.jsxs)("div", {
                                          children: [
                                            (0, r.jsx)("p", {
                                              className:
                                                "text-base text-gray-600 mb-1",
                                              children: x("dragFilesHere"),
                                            }),
                                            (0, r.jsx)("p", {
                                              className:
                                                "text-sm text-gray-500",
                                              children: x("clickToSelect"),
                                            }),
                                          ],
                                        }),
                                      (0, r.jsxs)("div", {
                                        className: "sr-only",
                                        children: [
                                          (0, r.jsx)("h3", {
                                            children: "PDF电子发票文件上传功能",
                                          }),
                                          (0, r.jsx)("p", {
                                            children:
                                              "专门支持批量上传PDF格式的电子发票文件，包括增值税专用发票、普通发票等各类电子发票。可通过拖拽或点击选择的方式上传多个PDF文件，系统会自动识别和处理电子发票信息，不支持纸质发票处理。",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  t.isProcessing &&
                                  (0, r.jsxs)("div", {
                                    className: "mt-4",
                                    role: "status",
                                    "aria-label": "文件处理进度",
                                    children: [
                                      (0, r.jsxs)("div", {
                                        className:
                                          "flex justify-between text-sm text-gray-600 mb-2",
                                        children: [
                                          (0, r.jsx)("span", {
                                            children: x("processing"),
                                          }),
                                          (0, r.jsxs)("span", {
                                            "aria-label": "处理进度".concat(
                                              Math.round(
                                                t.processingProgress,
                                              ),
                                              "%",
                                            ),
                                            children: [
                                              Math.round(
                                                t.processingProgress,
                                              ),
                                              "%",
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, r.jsx)(k, {
                                        value: t.processingProgress,
                                        className: "w-full",
                                        "aria-label": "发票文件处理进度条",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              t.invoiceFiles.length > 0 &&
                              (0, r.jsxs)(r.Fragment, {
                                children: [
                                  (0, r.jsxs)(f, {
                                    children: [
                                      (0, r.jsx)("div", {
                                        className:
                                          "border-t border-gray-200 mb-2",
                                      }),
                                      (0, r.jsxs)(v, {
                                        className:
                                          "flex items-center justify-between",
                                        children: [
                                          (0, r.jsx)("span", {
                                            children: x("uploadedFiles"),
                                          }),
                                          (0, r.jsxs)("div", {
                                            className:
                                              "flex items-center gap-2",
                                            children: [
                                              (0, r.jsx)(w, {
                                                variant: "secondary",
                                                children:
                                                  t.invoiceFiles.length,
                                              }),
                                              (0, r.jsxs)(U.Lt, {
                                                children: [
                                                  (0, r.jsx)(U.tv, {
                                                    asChild: !0,
                                                    children: (0, r.jsxs)(
                                                      u.$,
                                                      {
                                                        variant: "outline",
                                                        size: "sm",
                                                        disabled:
                                                          0 ===
                                                          t.invoiceFiles
                                                            .length,
                                                        className:
                                                          "transition-all duration-200 hover:bg-red-100 hover:text-red-600",
                                                        children: [
                                                          (0, r.jsx)(K.A, {
                                                            className:
                                                              "h-4 w-4 mr-1",
                                                          }),
                                                          "清空",
                                                        ],
                                                      },
                                                    ),
                                                  }),
                                                  (0, r.jsxs)(U.EO, {
                                                    children: [
                                                      (0, r.jsxs)(U.wd, {
                                                        children: [
                                                          (0, r.jsx)(U.r7, {
                                                            children:
                                                              x(
                                                                "confirmClear",
                                                              ),
                                                          }),
                                                          (0, r.jsx)(U.$v, {
                                                            children: x(
                                                              "clearConfirmMessage",
                                                            ),
                                                          }),
                                                        ],
                                                      }),
                                                      (0, r.jsxs)(U.ck, {
                                                        children: [
                                                          (0, r.jsx)(U.Zr, {
                                                            children:
                                                              g("cancel"),
                                                          }),
                                                          (0, r.jsx)(U.Rx, {
                                                            onClick: () => {
                                                              ((0, be.w0)(),
                                                                (s.current.invoiceFiles =
                                                                  []),
                                                                (s.current.stats =
                                                                {
                                                                  totalCount: 0,
                                                                  totalAmount: 0,
                                                                  invoices:
                                                                    [],
                                                                }),
                                                                s.current
                                                                  .mergedPdfUrl &&
                                                                (URL.revokeObjectURL(
                                                                  s.current
                                                                    .mergedPdfUrl,
                                                                ),
                                                                  (s.current.mergedPdfUrl =
                                                                    null)),
                                                                S(0),
                                                                M(1),
                                                                Y(0));
                                                            },
                                                            children:
                                                              g("confirm"),
                                                          }),
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, r.jsxs)(j, {
                                    children: [
                                      (0, r.jsx)(q.Mp, {
                                        sensors: Ve,
                                        collisionDetection: q.fp,
                                        onDragEnd: Oe,
                                        children: (0, r.jsx)(J.gB, {
                                          items: t.invoiceFiles.map(
                                            (e) => e.id,
                                          ),
                                          strategy: J._G,
                                          children: (0, r.jsx)("div", {
                                            className:
                                              "space-y-2 max-h-80 overflow-y-auto",
                                            children: t.invoiceFiles.map(
                                              (e) =>
                                                (0, r.jsx)(
                                                  Ue,
                                                  {
                                                    file: e,
                                                    isProcessing:
                                                      t.isProcessing,
                                                    onRemoveFile: Ke,
                                                    onPreviewFile: de,
                                                    tm: x,
                                                    tc: g,
                                                  },
                                                  e.id,
                                                ),
                                            ),
                                          }),
                                        }),
                                      }),
                                      (0, r.jsx)("div", {
                                        className:
                                          "mt-4 border-t border-gray-200",
                                        children: (0, r.jsxs)("div", {
                                          className: "space-y-3 p-2",
                                          children: [
                                            (0, r.jsxs)("div", {
                                              className:
                                                "flex items-center gap-3 rounded-lg hover:bg-gray-50/50 transition-colors group p-1",
                                              children: [
                                                (0, r.jsx)(D, {
                                                  id: "noline-checkbox",
                                                  checked: !t.noline,
                                                  onCheckedChange: (e) => {
                                                    ((s.current.noline = !e),
                                                      localStorage.setItem(
                                                        G.m.localStorageKeys
                                                          .mergeConf.noline,
                                                        e ? "true" : "false",
                                                      ),
                                                      Be());
                                                  },
                                                }),
                                                (0, r.jsx)("div", {
                                                  className: "flex-1 min-w-0",
                                                  children: (0, r.jsxs)(
                                                    "label",
                                                    {
                                                      htmlFor:
                                                        "noline-checkbox",
                                                      className:
                                                        "text-sm font-medium text-gray-700 cursor-pointer group-hover:text-gray-900 transition-colors block",
                                                      children: [
                                                        x("dividerLine"),
                                                        (0, r.jsx)("span", {
                                                          className:
                                                            "block text-xs text-gray-500 mt-1 font-normal leading-relaxed",
                                                          children:
                                                            x("dividerDesc"),
                                                        }),
                                                      ],
                                                    },
                                                  ),
                                                }),
                                              ],
                                            }),
                                            (0, r.jsxs)("div", {
                                              className:
                                                "rounded-lg hover:bg-gray-50/50 transition-colors p-1",
                                              children: [
                                                (0, r.jsx)("div", {
                                                  className: "mb-2",
                                                  children: (0, r.jsx)(
                                                    "span",
                                                    {
                                                      className:
                                                        "text-sm font-medium text-gray-700",
                                                      children: "清单位置",
                                                    },
                                                  ),
                                                }),
                                                (0, r.jsxs)(A, {
                                                  value: t.method.toString(),
                                                  onValueChange: (e) => {
                                                    ((s.current.method =
                                                      parseInt(e)),
                                                      localStorage.setItem(
                                                        G.m.localStorageKeys
                                                          .mergeConf.method,
                                                        e,
                                                      ),
                                                      Be());
                                                  },
                                                  className: "flex gap-4",
                                                  children: [
                                                    (0, r.jsxs)("div", {
                                                      className:
                                                        "flex items-center gap-2",
                                                      children: [
                                                        (0, r.jsx)(L, {
                                                          value: "0",
                                                          id: "list-end",
                                                        }),
                                                        (0, r.jsx)("label", {
                                                          htmlFor: "list-end",
                                                          className:
                                                            "text-xs text-gray-600 cursor-pointer",
                                                          children:
                                                            "清单放最后",
                                                        }),
                                                      ],
                                                    }),
                                                    (0, r.jsxs)("div", {
                                                      className:
                                                        "flex items-center gap-2",
                                                      children: [
                                                        (0, r.jsx)(L, {
                                                          value: "2",
                                                          id: "list-original",
                                                        }),
                                                        (0, r.jsx)("label", {
                                                          htmlFor:
                                                            "list-original",
                                                          className:
                                                            "text-xs text-gray-600 cursor-pointer",
                                                          children:
                                                            "原地输出",
                                                        }),
                                                      ],
                                                    }),
                                                    (0, r.jsxs)("div", {
                                                      className:
                                                        "flex items-center gap-2",
                                                      children: [
                                                        (0, r.jsx)(L, {
                                                          value: "1",
                                                          id: "list-discard",
                                                        }),
                                                        (0, r.jsx)("label", {
                                                          htmlFor:
                                                            "list-discard",
                                                          className:
                                                            "text-xs text-gray-600 cursor-pointer",
                                                          children:
                                                            "抛弃清单",
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          t.invoiceFiles.length > 0 &&
                          (0, r.jsxs)(p, {
                            children: [
                              (0, r.jsx)(f, {
                                children: (0, r.jsxs)(v, {
                                  className:
                                    "flex items-center justify-between",
                                  children: [
                                    (0, r.jsx)("span", {
                                      children: x("stats"),
                                    }),
                                    (0, r.jsxs)(u.$, {
                                      variant: "outline",
                                      size: "sm",
                                      disabled: 0 === t.invoiceFiles.length,
                                      onClick: async () => {
                                        let e = new Blob(
                                          [
                                            "\ufeff" +
                                            [
                                              [
                                                b("invoiceCode"),
                                                b("invoiceNumber"),
                                                b("amount"),
                                                b("fileName"),
                                              ],
                                              ...s.current.stats.invoices.map(
                                                (e) => [
                                                  '="'.concat(
                                                    e.code,
                                                    '"',
                                                  ),
                                                  '="'.concat(
                                                    e.number,
                                                    '"',
                                                  ),
                                                  (e.total / 100).toFixed(
                                                    2,
                                                  ),
                                                  e.fileName,
                                                ],
                                              ),
                                            ]
                                              .map((e) => e.join(","))
                                              .join("\n"),
                                          ],
                                          {
                                            type: "text/csv;charset=utf-8",
                                          },
                                        ),
                                          t = URL.createObjectURL(e),
                                          r = document.createElement("a");
                                        ((r.href = t),
                                          (r.download = ""
                                            .concat(
                                              x("downloadStatsFileName"),
                                              "_",
                                            )
                                            .concat(
                                              new Date()
                                                .toLocaleDateString("zh-CN")
                                                .replaceAll("/", "_"),
                                              ".csv",
                                            )),
                                          r.click(),
                                          URL.revokeObjectURL(t));
                                      },
                                      className:
                                        "transition-all duration-200 hover:bg-blue-100 hover:text-blue-600",
                                      children: [
                                        (0, r.jsx)(H.A, {
                                          className: "h-4 w-3.5 mr-1",
                                        }),
                                        "下载列表",
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                              (0, r.jsx)(j, {
                                children: (0, r.jsxs)("div", {
                                  className: "space-y-4",
                                  children: [
                                    (0, r.jsxs)("div", {
                                      className: "flex justify-between",
                                      children: [
                                        (0, r.jsx)("span", {
                                          className: "text-gray-600",
                                          children: x("invoiceCountLabel"),
                                        }),
                                        (0, r.jsxs)("span", {
                                          className: "font-semibold",
                                          children: [
                                            t.stats.totalCount,
                                            " ",
                                            x("invoiceCountUnit"),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, r.jsxs)("div", {
                                      className: "flex justify-between",
                                      children: [
                                        (0, r.jsx)("span", {
                                          className: "text-gray-600",
                                          children: x("totalAmountLabel"),
                                        }),
                                        (0, r.jsxs)("span", {
                                          className:
                                            "font-semibold text-green-600",
                                          children: [
                                            "¥",
                                            (
                                              t.stats.totalAmount / 100
                                            ).toFixed(2),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, r.jsx)("div", { className: "flex-1" }),
                  (0, r.jsxs)("section", {
                    className: "mt-8",
                    "aria-label": "产品功能特色介绍",
                    children: [
                      (0, r.jsxs)("div", {
                        className: "sr-only",
                        children: [
                          (0, r.jsx)("h2", {
                            children: "发票打印助手核心功能优势",
                          }),
                          (0, r.jsx)("p", {
                            children:
                              "发票打印助手提供全面的电子发票处理解决方案，帮助企业财务人员提升工作效率，简化报销流程，实现发票管理的数字化转型。",
                          }),
                          (0, r.jsx)("h3", { children: "功能详细说明" }),
                          (0, r.jsxs)("dl", {
                            children: [
                              (0, r.jsx)("dt", { children: "一键打印功能" }),
                              (0, r.jsx)("dd", {
                                children:
                                  "支持批量打印合并后的PDF发票文件，无需逐张处理，大幅提升打印效率。适用于财务报销、税务申报等场景。",
                              }),
                              (0, r.jsx)("dt", { children: "智能合并技术" }),
                              (0, r.jsx)("dd", {
                                children:
                                  "采用先进的PDF处理算法，自动将多张发票合并为A4双联格式，最大化利用纸张空间，节省50%的打印成本。",
                              }),
                              (0, r.jsx)("dt", { children: "数据导出服务" }),
                              (0, r.jsx)("dd", {
                                children:
                                  "自动提取发票关键信息包括发票代码、号码、金额等，生成标准CSV格式文件，便于导入Excel进行财务管理。",
                              }),
                              (0, r.jsx)("dt", { children: "批量处理能力" }),
                              (0, r.jsx)("dd", {
                                children:
                                  "支持同时上传处理多个PDF发票文件，提供拖拽上传和多选上传方式，大幅提升文件处理效率。",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, r.jsxs)("div", {
                        className:
                          "w-full max-w-5xl mx-auto py-6 px-4 flex flex-col md:flex-row justify-around items-start gap-6 bg-white rounded-xl shadow-sm border",
                        children: [
                          (0, r.jsxs)("article", {
                            className: "flex flex-col max-w-xs",
                            children: [
                              (0, r.jsxs)("div", {
                                className: "flex items-center gap-2 mb-2",
                                children: [
                                  (0, r.jsx)(T.A, {
                                    className: "w-5 h-5 text-orange-600",
                                    "aria-hidden": "true",
                                  }),
                                  (0, r.jsx)("h3", {
                                    className:
                                      "text-lg font-semibold text-gray-800",
                                    children: "一键打印",
                                  }),
                                ],
                              }),
                              (0, r.jsx)("p", {
                                className: "text-sm text-gray-500",
                                children: "多张发票一键打印，无需单张繁琐提交",
                              }),
                              (0, r.jsx)("span", {
                                className: "sr-only",
                                children:
                                  "PDF电子发票批量打印功能，支持PDF格式电子发票文件直接打印，提升数字化财务工作效率",
                              }),
                            ],
                          }),
                          (0, r.jsxs)("article", {
                            className: "flex flex-col max-w-xs",
                            children: [
                              (0, r.jsxs)("div", {
                                className: "flex items-center gap-2 mb-2",
                                children: [
                                  (0, r.jsx)($.A, {
                                    className: "w-5 h-5 text-green-600",
                                    "aria-hidden": "true",
                                  }),
                                  (0, r.jsx)("h3", {
                                    className:
                                      "text-lg font-semibold text-gray-800",
                                    children: "智能合并",
                                  }),
                                ],
                              }),
                              (0, r.jsx)("p", {
                                className: "text-sm text-gray-500",
                                children: "自动合并为A4双联，节省50%纸张",
                              }),
                              (0, r.jsx)("span", {
                                className: "sr-only",
                                children:
                                  "PDF电子发票智能合并技术，A4双联格式，节省打印成本，环保高效的数字化处理",
                              }),
                            ],
                          }),
                          (0, r.jsxs)("article", {
                            className: "flex flex-col max-w-xs",
                            children: [
                              (0, r.jsxs)("div", {
                                className: "flex items-center gap-2 mb-2",
                                children: [
                                  (0, r.jsx)(W.A, {
                                    className: "w-5 h-5 text-purple-600",
                                    "aria-hidden": "true",
                                  }),
                                  (0, r.jsx)("h3", {
                                    className:
                                      "text-lg font-semibold text-gray-800",
                                    children: "数据导出",
                                  }),
                                ],
                              }),
                              (0, r.jsx)("p", {
                                className: "text-sm text-gray-500",
                                children: "发票信息生成CSV，便于Excel管理",
                              }),
                              (0, r.jsx)("span", {
                                className: "sr-only",
                                children:
                                  "PDF电子发票数据自动提取导出，CSV格式兼容Excel，便于数字化财务数据管理",
                              }),
                            ],
                          }),
                          (0, r.jsxs)("article", {
                            className: "flex flex-col max-w-xs",
                            children: [
                              (0, r.jsxs)("div", {
                                className: "flex items-center gap-2 mb-2",
                                children: [
                                  (0, r.jsx)(X.A, {
                                    className: "w-5 h-5 text-blue-600",
                                    "aria-hidden": "true",
                                  }),
                                  (0, r.jsx)("h3", {
                                    className:
                                      "text-lg font-semibold text-gray-800",
                                    children: "批量处理",
                                  }),
                                ],
                              }),
                              (0, r.jsx)("p", {
                                className: "text-sm text-gray-500",
                                children: "拖拽或多选文件，一键批量上传",
                              }),
                              (0, r.jsx)("span", {
                                className: "sr-only",
                                children:
                                  "支持批量上传PDF格式电子发票文件，拖拽操作，多个电子发票文件同时处理",
                              }),
                            ],
                          }),
                          (0, r.jsxs)("article", {
                            className: "flex flex-col max-w-xs",
                            children: [
                              (0, r.jsxs)("div", {
                                className: "flex items-center gap-2 mb-2",
                                children: [
                                  (0, r.jsxs)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "24",
                                    height: "24",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "#db2777",
                                    "stroke-width": "2",
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    className: "w-5 h-5",
                                    "aria-hidden": "true",
                                    children: [
                                      (0, r.jsx)("rect", {
                                        width: "14",
                                        height: "14",
                                        x: "8",
                                        y: "8",
                                        rx: "2",
                                        ry: "2",
                                      }),
                                      (0, r.jsx)("path", {
                                        d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
                                      }),
                                    ],
                                  }),
                                  (0, r.jsx)("h3", {
                                    className:
                                      "text-lg font-semibold text-gray-800",
                                    children: "一键复制",
                                  }),
                                ],
                              }),
                              (0, r.jsx)("p", {
                                className: "text-sm text-gray-500",
                                children: "复制文件并直接打印，绕过MD5去重限制",
                              }),
                              (0, r.jsx)("span", {
                                className: "sr-only",
                                children:
                                  "智能文件复制功能，自动修改文件内容改变MD5值，支持重复文件处理和批量打印",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, r.jsxs)("div", {
                        className: "sr-only",
                        children: [
                          (0, r.jsx)("h2", { children: "使用教程和技术支持" }),
                          (0, r.jsx)("p", {
                            children:
                              "发票打印助手操作简单，仅需三步即可完成PDF电子发票处理：上传PDF格式电子发票文件、自动识别处理、下载合并结果。支持Windows、Mac、移动端等多平台使用，专门处理电子发票。",
                          }),
                          (0, r.jsx)("h2", { children: "适用行业和企业规模" }),
                          (0, r.jsx)("p", {
                            children:
                              "适用于需要处理PDF电子发票的各类企业财务部门，包括中小企业、创业公司、代理记账公司、会计师事务所等。特别适合有大量电子发票处理需求的数字化企业用户。",
                          }),
                          (0, r.jsx)("h2", { children: "安全保障和隐私保护" }),
                          (0, r.jsx)("p", {
                            children:
                              "采用企业级安全标准，确保PDF电子发票数据安全。所有电子发票文件处理均在云端完成，不保存用户敏感信息，保护企业电子发票数据隐私。",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, r.jsx)(Pe, {
                isOpen: !!ce,
                onClose: xe,
                file: (null == ce ? void 0 : ce.file) || null,
                fileName: (null == ce ? void 0 : ce.file.name) || "",
              }),
              (0, r.jsx)(Ae, {}),
            ],
          }),
        });
      }
    },
  },
]);
