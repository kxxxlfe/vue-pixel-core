import Ji, { onMounted as _s, onBeforeUnmount as en, reactive as tn, computed as Be, watch as rn, inject as vs, getCurrentInstance as ps, toRefs as ms, shallowRef as _d, defineComponent as Wr, ref as Lt, provide as Xn, toRef as vd, nextTick as pd } from "vue";
import { cloneDeep as ui, merge as md, debounce as yd } from "lodash-es";
let oi;
const Sd = new Uint8Array(16);
function bd() {
  if (!oi && (oi = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !oi))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return oi(Sd);
}
const Ge = [];
for (let t = 0; t < 256; ++t)
  Ge.push((t + 256).toString(16).slice(1));
function Td(t, l = 0) {
  return Ge[t[l + 0]] + Ge[t[l + 1]] + Ge[t[l + 2]] + Ge[t[l + 3]] + "-" + Ge[t[l + 4]] + Ge[t[l + 5]] + "-" + Ge[t[l + 6]] + Ge[t[l + 7]] + "-" + Ge[t[l + 8]] + Ge[t[l + 9]] + "-" + Ge[t[l + 10]] + Ge[t[l + 11]] + Ge[t[l + 12]] + Ge[t[l + 13]] + Ge[t[l + 14]] + Ge[t[l + 15]];
}
const wd = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), $n = {
  randomUUID: wd
};
function ys(t, l, A) {
  if ($n.randomUUID && !l && !t)
    return $n.randomUUID();
  t = t || {};
  const f = t.random || (t.rng || bd)();
  return f[6] = f[6] & 15 | 64, f[8] = f[8] & 63 | 128, Td(f);
}
var ci = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Cd(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Ss = { exports: {} }, di = { exports: {} }, Qt = {}, Ii = {}, Fi = {}, Qn;
function oe() {
  return Qn || (Qn = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t._registerNode = t.Konva = t.glob = void 0;
    const l = Math.PI / 180;
    function A() {
      return typeof window < "u" && ({}.toString.call(window) === "[object Window]" || {}.toString.call(window) === "[object global]");
    }
    t.glob = typeof ci < "u" ? ci : typeof window < "u" ? window : typeof WorkerGlobalScope < "u" ? self : {}, t.Konva = {
      _global: t.glob,
      version: "9.3.15",
      isBrowser: A(),
      isUnminified: /param/.test((function(C) {
      }).toString()),
      dblClickWindow: 400,
      getAngle(C) {
        return t.Konva.angleDeg ? C * l : C;
      },
      enableTrace: !1,
      pointerEventsEnabled: !0,
      autoDrawEnabled: !0,
      hitOnDragEnabled: !1,
      capturePointerEventsEnabled: !1,
      _mouseListenClick: !1,
      _touchListenClick: !1,
      _pointerListenClick: !1,
      _mouseInDblClickWindow: !1,
      _touchInDblClickWindow: !1,
      _pointerInDblClickWindow: !1,
      _mouseDblClickPointerId: null,
      _touchDblClickPointerId: null,
      _pointerDblClickPointerId: null,
      _fixTextRendering: !1,
      pixelRatio: typeof window < "u" && window.devicePixelRatio || 1,
      dragDistance: 3,
      angleDeg: !0,
      showWarnings: !0,
      dragButtons: [0, 1],
      isDragging() {
        return t.Konva.DD.isDragging;
      },
      isTransforming() {
        var C;
        return (C = t.Konva.Transformer) === null || C === void 0 ? void 0 : C.isTransforming();
      },
      isDragReady() {
        return !!t.Konva.DD.node;
      },
      releaseCanvasOnDestroy: !0,
      document: t.glob.document,
      _injectGlobal(C) {
        t.glob.Konva = C;
      }
    };
    const f = (C) => {
      t.Konva[C.prototype.getClassName()] = C;
    };
    t._registerNode = f, t.Konva._injectGlobal(t.Konva);
  }(Fi)), Fi;
}
var Gi = {}, Zn;
function Re() {
  return Zn || (Zn = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.Util = t.Transform = void 0;
    const l = oe();
    class A {
      constructor(T = [1, 0, 0, 1, 0, 0]) {
        this.dirty = !1, this.m = T && T.slice() || [1, 0, 0, 1, 0, 0];
      }
      reset() {
        this.m[0] = 1, this.m[1] = 0, this.m[2] = 0, this.m[3] = 1, this.m[4] = 0, this.m[5] = 0;
      }
      copy() {
        return new A(this.m);
      }
      copyInto(T) {
        T.m[0] = this.m[0], T.m[1] = this.m[1], T.m[2] = this.m[2], T.m[3] = this.m[3], T.m[4] = this.m[4], T.m[5] = this.m[5];
      }
      point(T) {
        var R = this.m;
        return {
          x: R[0] * T.x + R[2] * T.y + R[4],
          y: R[1] * T.x + R[3] * T.y + R[5]
        };
      }
      translate(T, R) {
        return this.m[4] += this.m[0] * T + this.m[2] * R, this.m[5] += this.m[1] * T + this.m[3] * R, this;
      }
      scale(T, R) {
        return this.m[0] *= T, this.m[1] *= T, this.m[2] *= R, this.m[3] *= R, this;
      }
      rotate(T) {
        var R = Math.cos(T), D = Math.sin(T), k = this.m[0] * R + this.m[2] * D, x = this.m[1] * R + this.m[3] * D, G = this.m[0] * -D + this.m[2] * R, E = this.m[1] * -D + this.m[3] * R;
        return this.m[0] = k, this.m[1] = x, this.m[2] = G, this.m[3] = E, this;
      }
      getTranslation() {
        return {
          x: this.m[4],
          y: this.m[5]
        };
      }
      skew(T, R) {
        var D = this.m[0] + this.m[2] * R, k = this.m[1] + this.m[3] * R, x = this.m[2] + this.m[0] * T, G = this.m[3] + this.m[1] * T;
        return this.m[0] = D, this.m[1] = k, this.m[2] = x, this.m[3] = G, this;
      }
      multiply(T) {
        var R = this.m[0] * T.m[0] + this.m[2] * T.m[1], D = this.m[1] * T.m[0] + this.m[3] * T.m[1], k = this.m[0] * T.m[2] + this.m[2] * T.m[3], x = this.m[1] * T.m[2] + this.m[3] * T.m[3], G = this.m[0] * T.m[4] + this.m[2] * T.m[5] + this.m[4], E = this.m[1] * T.m[4] + this.m[3] * T.m[5] + this.m[5];
        return this.m[0] = R, this.m[1] = D, this.m[2] = k, this.m[3] = x, this.m[4] = G, this.m[5] = E, this;
      }
      invert() {
        var T = 1 / (this.m[0] * this.m[3] - this.m[1] * this.m[2]), R = this.m[3] * T, D = -this.m[1] * T, k = -this.m[2] * T, x = this.m[0] * T, G = T * (this.m[2] * this.m[5] - this.m[3] * this.m[4]), E = T * (this.m[1] * this.m[4] - this.m[0] * this.m[5]);
        return this.m[0] = R, this.m[1] = D, this.m[2] = k, this.m[3] = x, this.m[4] = G, this.m[5] = E, this;
      }
      getMatrix() {
        return this.m;
      }
      decompose() {
        var T = this.m[0], R = this.m[1], D = this.m[2], k = this.m[3], x = this.m[4], G = this.m[5], E = T * k - R * D;
        let N = {
          x,
          y: G,
          rotation: 0,
          scaleX: 0,
          scaleY: 0,
          skewX: 0,
          skewY: 0
        };
        if (T != 0 || R != 0) {
          var F = Math.sqrt(T * T + R * R);
          N.rotation = R > 0 ? Math.acos(T / F) : -Math.acos(T / F), N.scaleX = F, N.scaleY = E / F, N.skewX = (T * D + R * k) / E, N.skewY = 0;
        } else if (D != 0 || k != 0) {
          var o = Math.sqrt(D * D + k * k);
          N.rotation = Math.PI / 2 - (k > 0 ? Math.acos(-D / o) : -Math.acos(D / o)), N.scaleX = E / o, N.scaleY = o, N.skewX = 0, N.skewY = (T * D + R * k) / E;
        }
        return N.rotation = t.Util._getRotation(N.rotation), N;
      }
    }
    t.Transform = A;
    var f = "[object Array]", C = "[object Number]", g = "[object String]", d = "[object Boolean]", i = Math.PI / 180, c = 180 / Math.PI, v = "#", S = "", p = "0", b = "Konva warning: ", u = "Konva error: ", s = "rgb(", m = {
      aliceblue: [240, 248, 255],
      antiquewhite: [250, 235, 215],
      aqua: [0, 255, 255],
      aquamarine: [127, 255, 212],
      azure: [240, 255, 255],
      beige: [245, 245, 220],
      bisque: [255, 228, 196],
      black: [0, 0, 0],
      blanchedalmond: [255, 235, 205],
      blue: [0, 0, 255],
      blueviolet: [138, 43, 226],
      brown: [165, 42, 42],
      burlywood: [222, 184, 135],
      cadetblue: [95, 158, 160],
      chartreuse: [127, 255, 0],
      chocolate: [210, 105, 30],
      coral: [255, 127, 80],
      cornflowerblue: [100, 149, 237],
      cornsilk: [255, 248, 220],
      crimson: [220, 20, 60],
      cyan: [0, 255, 255],
      darkblue: [0, 0, 139],
      darkcyan: [0, 139, 139],
      darkgoldenrod: [184, 132, 11],
      darkgray: [169, 169, 169],
      darkgreen: [0, 100, 0],
      darkgrey: [169, 169, 169],
      darkkhaki: [189, 183, 107],
      darkmagenta: [139, 0, 139],
      darkolivegreen: [85, 107, 47],
      darkorange: [255, 140, 0],
      darkorchid: [153, 50, 204],
      darkred: [139, 0, 0],
      darksalmon: [233, 150, 122],
      darkseagreen: [143, 188, 143],
      darkslateblue: [72, 61, 139],
      darkslategray: [47, 79, 79],
      darkslategrey: [47, 79, 79],
      darkturquoise: [0, 206, 209],
      darkviolet: [148, 0, 211],
      deeppink: [255, 20, 147],
      deepskyblue: [0, 191, 255],
      dimgray: [105, 105, 105],
      dimgrey: [105, 105, 105],
      dodgerblue: [30, 144, 255],
      firebrick: [178, 34, 34],
      floralwhite: [255, 255, 240],
      forestgreen: [34, 139, 34],
      fuchsia: [255, 0, 255],
      gainsboro: [220, 220, 220],
      ghostwhite: [248, 248, 255],
      gold: [255, 215, 0],
      goldenrod: [218, 165, 32],
      gray: [128, 128, 128],
      green: [0, 128, 0],
      greenyellow: [173, 255, 47],
      grey: [128, 128, 128],
      honeydew: [240, 255, 240],
      hotpink: [255, 105, 180],
      indianred: [205, 92, 92],
      indigo: [75, 0, 130],
      ivory: [255, 255, 240],
      khaki: [240, 230, 140],
      lavender: [230, 230, 250],
      lavenderblush: [255, 240, 245],
      lawngreen: [124, 252, 0],
      lemonchiffon: [255, 250, 205],
      lightblue: [173, 216, 230],
      lightcoral: [240, 128, 128],
      lightcyan: [224, 255, 255],
      lightgoldenrodyellow: [250, 250, 210],
      lightgray: [211, 211, 211],
      lightgreen: [144, 238, 144],
      lightgrey: [211, 211, 211],
      lightpink: [255, 182, 193],
      lightsalmon: [255, 160, 122],
      lightseagreen: [32, 178, 170],
      lightskyblue: [135, 206, 250],
      lightslategray: [119, 136, 153],
      lightslategrey: [119, 136, 153],
      lightsteelblue: [176, 196, 222],
      lightyellow: [255, 255, 224],
      lime: [0, 255, 0],
      limegreen: [50, 205, 50],
      linen: [250, 240, 230],
      magenta: [255, 0, 255],
      maroon: [128, 0, 0],
      mediumaquamarine: [102, 205, 170],
      mediumblue: [0, 0, 205],
      mediumorchid: [186, 85, 211],
      mediumpurple: [147, 112, 219],
      mediumseagreen: [60, 179, 113],
      mediumslateblue: [123, 104, 238],
      mediumspringgreen: [0, 250, 154],
      mediumturquoise: [72, 209, 204],
      mediumvioletred: [199, 21, 133],
      midnightblue: [25, 25, 112],
      mintcream: [245, 255, 250],
      mistyrose: [255, 228, 225],
      moccasin: [255, 228, 181],
      navajowhite: [255, 222, 173],
      navy: [0, 0, 128],
      oldlace: [253, 245, 230],
      olive: [128, 128, 0],
      olivedrab: [107, 142, 35],
      orange: [255, 165, 0],
      orangered: [255, 69, 0],
      orchid: [218, 112, 214],
      palegoldenrod: [238, 232, 170],
      palegreen: [152, 251, 152],
      paleturquoise: [175, 238, 238],
      palevioletred: [219, 112, 147],
      papayawhip: [255, 239, 213],
      peachpuff: [255, 218, 185],
      peru: [205, 133, 63],
      pink: [255, 192, 203],
      plum: [221, 160, 203],
      powderblue: [176, 224, 230],
      purple: [128, 0, 128],
      rebeccapurple: [102, 51, 153],
      red: [255, 0, 0],
      rosybrown: [188, 143, 143],
      royalblue: [65, 105, 225],
      saddlebrown: [139, 69, 19],
      salmon: [250, 128, 114],
      sandybrown: [244, 164, 96],
      seagreen: [46, 139, 87],
      seashell: [255, 245, 238],
      sienna: [160, 82, 45],
      silver: [192, 192, 192],
      skyblue: [135, 206, 235],
      slateblue: [106, 90, 205],
      slategray: [119, 128, 144],
      slategrey: [119, 128, 144],
      snow: [255, 255, 250],
      springgreen: [0, 255, 127],
      steelblue: [70, 130, 180],
      tan: [210, 180, 140],
      teal: [0, 128, 128],
      thistle: [216, 191, 216],
      transparent: [255, 255, 255, 0],
      tomato: [255, 99, 71],
      turquoise: [64, 224, 208],
      violet: [238, 130, 238],
      wheat: [245, 222, 179],
      white: [255, 255, 255],
      whitesmoke: [245, 245, 245],
      yellow: [255, 255, 0],
      yellowgreen: [154, 205, 5]
    }, y = /rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)/, P = [];
    const h = typeof requestAnimationFrame < "u" && requestAnimationFrame || function(n) {
      setTimeout(n, 60);
    };
    t.Util = {
      _isElement(n) {
        return !!(n && n.nodeType == 1);
      },
      _isFunction(n) {
        return !!(n && n.constructor && n.call && n.apply);
      },
      _isPlainObject(n) {
        return !!n && n.constructor === Object;
      },
      _isArray(n) {
        return Object.prototype.toString.call(n) === f;
      },
      _isNumber(n) {
        return Object.prototype.toString.call(n) === C && !isNaN(n) && isFinite(n);
      },
      _isString(n) {
        return Object.prototype.toString.call(n) === g;
      },
      _isBoolean(n) {
        return Object.prototype.toString.call(n) === d;
      },
      isObject(n) {
        return n instanceof Object;
      },
      isValidSelector(n) {
        if (typeof n != "string")
          return !1;
        var T = n[0];
        return T === "#" || T === "." || T === T.toUpperCase();
      },
      _sign(n) {
        return n === 0 || n > 0 ? 1 : -1;
      },
      requestAnimFrame(n) {
        P.push(n), P.length === 1 && h(function() {
          const T = P;
          P = [], T.forEach(function(R) {
            R();
          });
        });
      },
      createCanvasElement() {
        var n = document.createElement("canvas");
        try {
          n.style = n.style || {};
        } catch {
        }
        return n;
      },
      createImageElement() {
        return document.createElement("img");
      },
      _isInDocument(n) {
        for (; n = n.parentNode; )
          if (n == document)
            return !0;
        return !1;
      },
      _urlToImage(n, T) {
        var R = t.Util.createImageElement();
        R.onload = function() {
          T(R);
        }, R.src = n;
      },
      _rgbToHex(n, T, R) {
        return ((1 << 24) + (n << 16) + (T << 8) + R).toString(16).slice(1);
      },
      _hexToRgb(n) {
        n = n.replace(v, S);
        var T = parseInt(n, 16);
        return {
          r: T >> 16 & 255,
          g: T >> 8 & 255,
          b: T & 255
        };
      },
      getRandomColor() {
        for (var n = (Math.random() * 16777215 << 0).toString(16); n.length < 6; )
          n = p + n;
        return v + n;
      },
      getRGB(n) {
        var T;
        return n in m ? (T = m[n], {
          r: T[0],
          g: T[1],
          b: T[2]
        }) : n[0] === v ? this._hexToRgb(n.substring(1)) : n.substr(0, 4) === s ? (T = y.exec(n.replace(/ /g, "")), {
          r: parseInt(T[1], 10),
          g: parseInt(T[2], 10),
          b: parseInt(T[3], 10)
        }) : {
          r: 0,
          g: 0,
          b: 0
        };
      },
      colorToRGBA(n) {
        return n = n || "black", t.Util._namedColorToRBA(n) || t.Util._hex3ColorToRGBA(n) || t.Util._hex4ColorToRGBA(n) || t.Util._hex6ColorToRGBA(n) || t.Util._hex8ColorToRGBA(n) || t.Util._rgbColorToRGBA(n) || t.Util._rgbaColorToRGBA(n) || t.Util._hslColorToRGBA(n);
      },
      _namedColorToRBA(n) {
        var T = m[n.toLowerCase()];
        return T ? {
          r: T[0],
          g: T[1],
          b: T[2],
          a: 1
        } : null;
      },
      _rgbColorToRGBA(n) {
        if (n.indexOf("rgb(") === 0) {
          n = n.match(/rgb\(([^)]+)\)/)[1];
          var T = n.split(/ *, */).map(Number);
          return {
            r: T[0],
            g: T[1],
            b: T[2],
            a: 1
          };
        }
      },
      _rgbaColorToRGBA(n) {
        if (n.indexOf("rgba(") === 0) {
          n = n.match(/rgba\(([^)]+)\)/)[1];
          var T = n.split(/ *, */).map((R, D) => R.slice(-1) === "%" ? D === 3 ? parseInt(R) / 100 : parseInt(R) / 100 * 255 : Number(R));
          return {
            r: T[0],
            g: T[1],
            b: T[2],
            a: T[3]
          };
        }
      },
      _hex8ColorToRGBA(n) {
        if (n[0] === "#" && n.length === 9)
          return {
            r: parseInt(n.slice(1, 3), 16),
            g: parseInt(n.slice(3, 5), 16),
            b: parseInt(n.slice(5, 7), 16),
            a: parseInt(n.slice(7, 9), 16) / 255
          };
      },
      _hex6ColorToRGBA(n) {
        if (n[0] === "#" && n.length === 7)
          return {
            r: parseInt(n.slice(1, 3), 16),
            g: parseInt(n.slice(3, 5), 16),
            b: parseInt(n.slice(5, 7), 16),
            a: 1
          };
      },
      _hex4ColorToRGBA(n) {
        if (n[0] === "#" && n.length === 5)
          return {
            r: parseInt(n[1] + n[1], 16),
            g: parseInt(n[2] + n[2], 16),
            b: parseInt(n[3] + n[3], 16),
            a: parseInt(n[4] + n[4], 16) / 255
          };
      },
      _hex3ColorToRGBA(n) {
        if (n[0] === "#" && n.length === 4)
          return {
            r: parseInt(n[1] + n[1], 16),
            g: parseInt(n[2] + n[2], 16),
            b: parseInt(n[3] + n[3], 16),
            a: 1
          };
      },
      _hslColorToRGBA(n) {
        if (/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.test(n)) {
          const [T, ...R] = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(n), D = Number(R[0]) / 360, k = Number(R[1]) / 100, x = Number(R[2]) / 100;
          let G, E, N;
          if (k === 0)
            return N = x * 255, {
              r: Math.round(N),
              g: Math.round(N),
              b: Math.round(N),
              a: 1
            };
          x < 0.5 ? G = x * (1 + k) : G = x + k - x * k;
          const F = 2 * x - G, o = [0, 0, 0];
          for (let w = 0; w < 3; w++)
            E = D + 1 / 3 * -(w - 1), E < 0 && E++, E > 1 && E--, 6 * E < 1 ? N = F + (G - F) * 6 * E : 2 * E < 1 ? N = G : 3 * E < 2 ? N = F + (G - F) * (2 / 3 - E) * 6 : N = F, o[w] = N * 255;
          return {
            r: Math.round(o[0]),
            g: Math.round(o[1]),
            b: Math.round(o[2]),
            a: 1
          };
        }
      },
      haveIntersection(n, T) {
        return !(T.x > n.x + n.width || T.x + T.width < n.x || T.y > n.y + n.height || T.y + T.height < n.y);
      },
      cloneObject(n) {
        var T = {};
        for (var R in n)
          this._isPlainObject(n[R]) ? T[R] = this.cloneObject(n[R]) : this._isArray(n[R]) ? T[R] = this.cloneArray(n[R]) : T[R] = n[R];
        return T;
      },
      cloneArray(n) {
        return n.slice(0);
      },
      degToRad(n) {
        return n * i;
      },
      radToDeg(n) {
        return n * c;
      },
      _degToRad(n) {
        return t.Util.warn("Util._degToRad is removed. Please use public Util.degToRad instead."), t.Util.degToRad(n);
      },
      _radToDeg(n) {
        return t.Util.warn("Util._radToDeg is removed. Please use public Util.radToDeg instead."), t.Util.radToDeg(n);
      },
      _getRotation(n) {
        return l.Konva.angleDeg ? t.Util.radToDeg(n) : n;
      },
      _capitalize(n) {
        return n.charAt(0).toUpperCase() + n.slice(1);
      },
      throw(n) {
        throw new Error(u + n);
      },
      error(n) {
        console.error(u + n);
      },
      warn(n) {
        l.Konva.showWarnings && console.warn(b + n);
      },
      each(n, T) {
        for (var R in n)
          T(R, n[R]);
      },
      _inRange(n, T, R) {
        return T <= n && n < R;
      },
      _getProjectionToSegment(n, T, R, D, k, x) {
        var G, E, N, F = (n - R) * (n - R) + (T - D) * (T - D);
        if (F == 0)
          G = n, E = T, N = (k - R) * (k - R) + (x - D) * (x - D);
        else {
          var o = ((k - n) * (R - n) + (x - T) * (D - T)) / F;
          o < 0 ? (G = n, E = T, N = (n - k) * (n - k) + (T - x) * (T - x)) : o > 1 ? (G = R, E = D, N = (R - k) * (R - k) + (D - x) * (D - x)) : (G = n + o * (R - n), E = T + o * (D - T), N = (G - k) * (G - k) + (E - x) * (E - x));
        }
        return [G, E, N];
      },
      _getProjectionToLine(n, T, R) {
        var D = t.Util.cloneObject(n), k = Number.MAX_VALUE;
        return T.forEach(function(x, G) {
          if (!(!R && G === T.length - 1)) {
            var E = T[(G + 1) % T.length], N = t.Util._getProjectionToSegment(x.x, x.y, E.x, E.y, n.x, n.y), F = N[0], o = N[1], w = N[2];
            w < k && (D.x = F, D.y = o, k = w);
          }
        }), D;
      },
      _prepareArrayForTween(n, T, R) {
        var D, k = [], x = [];
        if (n.length > T.length) {
          var G = T;
          T = n, n = G;
        }
        for (D = 0; D < n.length; D += 2)
          k.push({
            x: n[D],
            y: n[D + 1]
          });
        for (D = 0; D < T.length; D += 2)
          x.push({
            x: T[D],
            y: T[D + 1]
          });
        var E = [];
        return x.forEach(function(N) {
          var F = t.Util._getProjectionToLine(N, k, R);
          E.push(F.x), E.push(F.y);
        }), E;
      },
      _prepareToStringify(n) {
        var T;
        n.visitedByCircularReferenceRemoval = !0;
        for (var R in n)
          if (n.hasOwnProperty(R) && n[R] && typeof n[R] == "object") {
            if (T = Object.getOwnPropertyDescriptor(n, R), n[R].visitedByCircularReferenceRemoval || t.Util._isElement(n[R]))
              if (T.configurable)
                delete n[R];
              else
                return null;
            else if (t.Util._prepareToStringify(n[R]) === null)
              if (T.configurable)
                delete n[R];
              else
                return null;
          }
        return delete n.visitedByCircularReferenceRemoval, n;
      },
      _assign(n, T) {
        for (var R in T)
          n[R] = T[R];
        return n;
      },
      _getFirstPointerId(n) {
        return n.touches ? n.changedTouches[0].identifier : n.pointerId || 999;
      },
      releaseCanvas(...n) {
        l.Konva.releaseCanvasOnDestroy && n.forEach((T) => {
          T.width = 0, T.height = 0;
        });
      },
      drawRoundedRectPath(n, T, R, D) {
        let k = 0, x = 0, G = 0, E = 0;
        typeof D == "number" ? k = x = G = E = Math.min(D, T / 2, R / 2) : (k = Math.min(D[0] || 0, T / 2, R / 2), x = Math.min(D[1] || 0, T / 2, R / 2), E = Math.min(D[2] || 0, T / 2, R / 2), G = Math.min(D[3] || 0, T / 2, R / 2)), n.moveTo(k, 0), n.lineTo(T - x, 0), n.arc(T - x, x, x, Math.PI * 3 / 2, 0, !1), n.lineTo(T, R - E), n.arc(T - E, R - E, E, 0, Math.PI / 2, !1), n.lineTo(G, R), n.arc(G, R - G, G, Math.PI / 2, Math.PI, !1), n.lineTo(0, k), n.arc(k, k, k, Math.PI, Math.PI * 3 / 2, !1);
      }
    };
  }(Gi)), Gi;
}
var Zt = {}, Ui = {}, we = {}, Jn;
function he() {
  if (Jn) return we;
  Jn = 1, Object.defineProperty(we, "__esModule", { value: !0 }), we.getComponentValidator = we.getBooleanValidator = we.getNumberArrayValidator = we.getFunctionValidator = we.getStringOrGradientValidator = we.getStringValidator = we.getNumberOrAutoValidator = we.getNumberOrArrayOfNumbersValidator = we.getNumberValidator = we.alphaComponent = we.RGBComponent = void 0;
  const t = oe(), l = Re();
  function A(s) {
    return l.Util._isString(s) ? '"' + s + '"' : Object.prototype.toString.call(s) === "[object Number]" || l.Util._isBoolean(s) ? s : Object.prototype.toString.call(s);
  }
  function f(s) {
    return s > 255 ? 255 : s < 0 ? 0 : Math.round(s);
  }
  we.RGBComponent = f;
  function C(s) {
    return s > 1 ? 1 : s < 1e-4 ? 1e-4 : s;
  }
  we.alphaComponent = C;
  function g() {
    if (t.Konva.isUnminified)
      return function(s, m) {
        return l.Util._isNumber(s) || l.Util.warn(A(s) + ' is a not valid value for "' + m + '" attribute. The value should be a number.'), s;
      };
  }
  we.getNumberValidator = g;
  function d(s) {
    if (t.Konva.isUnminified)
      return function(m, y) {
        let P = l.Util._isNumber(m), h = l.Util._isArray(m) && m.length == s;
        return !P && !h && l.Util.warn(A(m) + ' is a not valid value for "' + y + '" attribute. The value should be a number or Array<number>(' + s + ")"), m;
      };
  }
  we.getNumberOrArrayOfNumbersValidator = d;
  function i() {
    if (t.Konva.isUnminified)
      return function(s, m) {
        var y = l.Util._isNumber(s), P = s === "auto";
        return y || P || l.Util.warn(A(s) + ' is a not valid value for "' + m + '" attribute. The value should be a number or "auto".'), s;
      };
  }
  we.getNumberOrAutoValidator = i;
  function c() {
    if (t.Konva.isUnminified)
      return function(s, m) {
        return l.Util._isString(s) || l.Util.warn(A(s) + ' is a not valid value for "' + m + '" attribute. The value should be a string.'), s;
      };
  }
  we.getStringValidator = c;
  function v() {
    if (t.Konva.isUnminified)
      return function(s, m) {
        const y = l.Util._isString(s), P = Object.prototype.toString.call(s) === "[object CanvasGradient]" || s && s.addColorStop;
        return y || P || l.Util.warn(A(s) + ' is a not valid value for "' + m + '" attribute. The value should be a string or a native gradient.'), s;
      };
  }
  we.getStringOrGradientValidator = v;
  function S() {
    if (t.Konva.isUnminified)
      return function(s, m) {
        return l.Util._isFunction(s) || l.Util.warn(A(s) + ' is a not valid value for "' + m + '" attribute. The value should be a function.'), s;
      };
  }
  we.getFunctionValidator = S;
  function p() {
    if (t.Konva.isUnminified)
      return function(s, m) {
        const y = Int8Array ? Object.getPrototypeOf(Int8Array) : null;
        return y && s instanceof y || (l.Util._isArray(s) ? s.forEach(function(P) {
          l.Util._isNumber(P) || l.Util.warn('"' + m + '" attribute has non numeric element ' + P + ". Make sure that all elements are numbers.");
        }) : l.Util.warn(A(s) + ' is a not valid value for "' + m + '" attribute. The value should be a array of numbers.')), s;
      };
  }
  we.getNumberArrayValidator = p;
  function b() {
    if (t.Konva.isUnminified)
      return function(s, m) {
        var y = s === !0 || s === !1;
        return y || l.Util.warn(A(s) + ' is a not valid value for "' + m + '" attribute. The value should be a boolean.'), s;
      };
  }
  we.getBooleanValidator = b;
  function u(s) {
    if (t.Konva.isUnminified)
      return function(m, y) {
        return m == null || l.Util.isObject(m) || l.Util.warn(A(m) + ' is a not valid value for "' + y + '" attribute. The value should be an object with properties ' + s), m;
      };
  }
  return we.getComponentValidator = u, we;
}
var ea;
function le() {
  return ea || (ea = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.Factory = void 0;
    const l = Re(), A = he();
    var f = "get", C = "set";
    t.Factory = {
      addGetterSetter(g, d, i, c, v) {
        t.Factory.addGetter(g, d, i), t.Factory.addSetter(g, d, c, v), t.Factory.addOverloadedGetterSetter(g, d);
      },
      addGetter(g, d, i) {
        var c = f + l.Util._capitalize(d);
        g.prototype[c] = g.prototype[c] || function() {
          var v = this.attrs[d];
          return v === void 0 ? i : v;
        };
      },
      addSetter(g, d, i, c) {
        var v = C + l.Util._capitalize(d);
        g.prototype[v] || t.Factory.overWriteSetter(g, d, i, c);
      },
      overWriteSetter(g, d, i, c) {
        var v = C + l.Util._capitalize(d);
        g.prototype[v] = function(S) {
          return i && S !== void 0 && S !== null && (S = i.call(this, S, d)), this._setAttr(d, S), c && c.call(this), this;
        };
      },
      addComponentsGetterSetter(g, d, i, c, v) {
        var S = i.length, p = l.Util._capitalize, b = f + p(d), u = C + p(d), s, m;
        g.prototype[b] = function() {
          var P = {};
          for (s = 0; s < S; s++)
            m = i[s], P[m] = this.getAttr(d + p(m));
          return P;
        };
        var y = (0, A.getComponentValidator)(i);
        g.prototype[u] = function(P) {
          var h = this.attrs[d], n;
          c && (P = c.call(this, P)), y && y.call(this, P, d);
          for (n in P)
            P.hasOwnProperty(n) && this._setAttr(d + p(n), P[n]);
          return P || i.forEach((T) => {
            this._setAttr(d + p(T), void 0);
          }), this._fireChangeEvent(d, h, P), v && v.call(this), this;
        }, t.Factory.addOverloadedGetterSetter(g, d);
      },
      addOverloadedGetterSetter(g, d) {
        var i = l.Util._capitalize(d), c = C + i, v = f + i;
        g.prototype[d] = function() {
          return arguments.length ? (this[c](arguments[0]), this) : this[v]();
        };
      },
      addDeprecatedGetterSetter(g, d, i, c) {
        l.Util.error("Adding deprecated " + d);
        var v = f + l.Util._capitalize(d), S = d + " property is deprecated and will be removed soon. Look at Konva change log for more information.";
        g.prototype[v] = function() {
          l.Util.error(S);
          var p = this.attrs[d];
          return p === void 0 ? i : p;
        }, t.Factory.addSetter(g, d, c, function() {
          l.Util.error(S);
        }), t.Factory.addOverloadedGetterSetter(g, d);
      },
      backCompat(g, d) {
        l.Util.each(d, function(i, c) {
          var v = g.prototype[c], S = f + l.Util._capitalize(i), p = C + l.Util._capitalize(i);
          function b() {
            v.apply(this, arguments), l.Util.error('"' + i + '" method is deprecated and will be removed soon. Use ""' + c + '" instead.');
          }
          g.prototype[i] = b, g.prototype[S] = b, g.prototype[p] = b;
        });
      },
      afterSetFilter() {
        this._filterUpToDate = !1;
      }
    };
  }(Ui)), Ui;
}
var _t = {}, vt = {}, ta;
function bs() {
  if (ta) return vt;
  ta = 1, Object.defineProperty(vt, "__esModule", { value: !0 }), vt.HitContext = vt.SceneContext = vt.Context = void 0;
  const t = Re(), l = oe();
  function A(P) {
    var h = [], n = P.length, T = t.Util, R, D;
    for (R = 0; R < n; R++)
      D = P[R], T._isNumber(D) ? D = Math.round(D * 1e3) / 1e3 : T._isString(D) || (D = D + ""), h.push(D);
    return h;
  }
  var f = ",", C = "(", g = ")", d = "([", i = "])", c = ";", v = "()", S = "=", p = [
    "arc",
    "arcTo",
    "beginPath",
    "bezierCurveTo",
    "clearRect",
    "clip",
    "closePath",
    "createLinearGradient",
    "createPattern",
    "createRadialGradient",
    "drawImage",
    "ellipse",
    "fill",
    "fillText",
    "getImageData",
    "createImageData",
    "lineTo",
    "moveTo",
    "putImageData",
    "quadraticCurveTo",
    "rect",
    "roundRect",
    "restore",
    "rotate",
    "save",
    "scale",
    "setLineDash",
    "setTransform",
    "stroke",
    "strokeText",
    "transform",
    "translate"
  ], b = [
    "fillStyle",
    "strokeStyle",
    "shadowColor",
    "shadowBlur",
    "shadowOffsetX",
    "shadowOffsetY",
    "letterSpacing",
    "lineCap",
    "lineDashOffset",
    "lineJoin",
    "lineWidth",
    "miterLimit",
    "direction",
    "font",
    "textAlign",
    "textBaseline",
    "globalAlpha",
    "globalCompositeOperation",
    "imageSmoothingEnabled"
  ];
  const u = 100;
  let s = class {
    constructor(h) {
      this.canvas = h, l.Konva.enableTrace && (this.traceArr = [], this._enableTrace());
    }
    fillShape(h) {
      h.fillEnabled() && this._fill(h);
    }
    _fill(h) {
    }
    strokeShape(h) {
      h.hasStroke() && this._stroke(h);
    }
    _stroke(h) {
    }
    fillStrokeShape(h) {
      h.attrs.fillAfterStrokeEnabled ? (this.strokeShape(h), this.fillShape(h)) : (this.fillShape(h), this.strokeShape(h));
    }
    getTrace(h, n) {
      var T = this.traceArr, R = T.length, D = "", k, x, G, E;
      for (k = 0; k < R; k++)
        x = T[k], G = x.method, G ? (E = x.args, D += G, h ? D += v : t.Util._isArray(E[0]) ? D += d + E.join(f) + i : (n && (E = E.map((N) => typeof N == "number" ? Math.floor(N) : N)), D += C + E.join(f) + g)) : (D += x.property, h || (D += S + x.val)), D += c;
      return D;
    }
    clearTrace() {
      this.traceArr = [];
    }
    _trace(h) {
      var n = this.traceArr, T;
      n.push(h), T = n.length, T >= u && n.shift();
    }
    reset() {
      var h = this.getCanvas().getPixelRatio();
      this.setTransform(1 * h, 0, 0, 1 * h, 0, 0);
    }
    getCanvas() {
      return this.canvas;
    }
    clear(h) {
      var n = this.getCanvas();
      h ? this.clearRect(h.x || 0, h.y || 0, h.width || 0, h.height || 0) : this.clearRect(0, 0, n.getWidth() / n.pixelRatio, n.getHeight() / n.pixelRatio);
    }
    _applyLineCap(h) {
      const n = h.attrs.lineCap;
      n && this.setAttr("lineCap", n);
    }
    _applyOpacity(h) {
      var n = h.getAbsoluteOpacity();
      n !== 1 && this.setAttr("globalAlpha", n);
    }
    _applyLineJoin(h) {
      const n = h.attrs.lineJoin;
      n && this.setAttr("lineJoin", n);
    }
    setAttr(h, n) {
      this._context[h] = n;
    }
    arc(h, n, T, R, D, k) {
      this._context.arc(h, n, T, R, D, k);
    }
    arcTo(h, n, T, R, D) {
      this._context.arcTo(h, n, T, R, D);
    }
    beginPath() {
      this._context.beginPath();
    }
    bezierCurveTo(h, n, T, R, D, k) {
      this._context.bezierCurveTo(h, n, T, R, D, k);
    }
    clearRect(h, n, T, R) {
      this._context.clearRect(h, n, T, R);
    }
    clip(...h) {
      this._context.clip.apply(this._context, h);
    }
    closePath() {
      this._context.closePath();
    }
    createImageData(h, n) {
      var T = arguments;
      if (T.length === 2)
        return this._context.createImageData(h, n);
      if (T.length === 1)
        return this._context.createImageData(h);
    }
    createLinearGradient(h, n, T, R) {
      return this._context.createLinearGradient(h, n, T, R);
    }
    createPattern(h, n) {
      return this._context.createPattern(h, n);
    }
    createRadialGradient(h, n, T, R, D, k) {
      return this._context.createRadialGradient(h, n, T, R, D, k);
    }
    drawImage(h, n, T, R, D, k, x, G, E) {
      var N = arguments, F = this._context;
      N.length === 3 ? F.drawImage(h, n, T) : N.length === 5 ? F.drawImage(h, n, T, R, D) : N.length === 9 && F.drawImage(h, n, T, R, D, k, x, G, E);
    }
    ellipse(h, n, T, R, D, k, x, G) {
      this._context.ellipse(h, n, T, R, D, k, x, G);
    }
    isPointInPath(h, n, T, R) {
      return T ? this._context.isPointInPath(T, h, n, R) : this._context.isPointInPath(h, n, R);
    }
    fill(...h) {
      this._context.fill.apply(this._context, h);
    }
    fillRect(h, n, T, R) {
      this._context.fillRect(h, n, T, R);
    }
    strokeRect(h, n, T, R) {
      this._context.strokeRect(h, n, T, R);
    }
    fillText(h, n, T, R) {
      R ? this._context.fillText(h, n, T, R) : this._context.fillText(h, n, T);
    }
    measureText(h) {
      return this._context.measureText(h);
    }
    getImageData(h, n, T, R) {
      return this._context.getImageData(h, n, T, R);
    }
    lineTo(h, n) {
      this._context.lineTo(h, n);
    }
    moveTo(h, n) {
      this._context.moveTo(h, n);
    }
    rect(h, n, T, R) {
      this._context.rect(h, n, T, R);
    }
    roundRect(h, n, T, R, D) {
      this._context.roundRect(h, n, T, R, D);
    }
    putImageData(h, n, T) {
      this._context.putImageData(h, n, T);
    }
    quadraticCurveTo(h, n, T, R) {
      this._context.quadraticCurveTo(h, n, T, R);
    }
    restore() {
      this._context.restore();
    }
    rotate(h) {
      this._context.rotate(h);
    }
    save() {
      this._context.save();
    }
    scale(h, n) {
      this._context.scale(h, n);
    }
    setLineDash(h) {
      this._context.setLineDash ? this._context.setLineDash(h) : "mozDash" in this._context ? this._context.mozDash = h : "webkitLineDash" in this._context && (this._context.webkitLineDash = h);
    }
    getLineDash() {
      return this._context.getLineDash();
    }
    setTransform(h, n, T, R, D, k) {
      this._context.setTransform(h, n, T, R, D, k);
    }
    stroke(h) {
      h ? this._context.stroke(h) : this._context.stroke();
    }
    strokeText(h, n, T, R) {
      this._context.strokeText(h, n, T, R);
    }
    transform(h, n, T, R, D, k) {
      this._context.transform(h, n, T, R, D, k);
    }
    translate(h, n) {
      this._context.translate(h, n);
    }
    _enableTrace() {
      var h = this, n = p.length, T = this.setAttr, R, D, k = function(x) {
        var G = h[x], E;
        h[x] = function() {
          return D = A(Array.prototype.slice.call(arguments, 0)), E = G.apply(h, arguments), h._trace({
            method: x,
            args: D
          }), E;
        };
      };
      for (R = 0; R < n; R++)
        k(p[R]);
      h.setAttr = function() {
        T.apply(h, arguments);
        var x = arguments[0], G = arguments[1];
        (x === "shadowOffsetX" || x === "shadowOffsetY" || x === "shadowBlur") && (G = G / this.canvas.getPixelRatio()), h._trace({
          property: x,
          val: G
        });
      };
    }
    _applyGlobalCompositeOperation(h) {
      const n = h.attrs.globalCompositeOperation;
      var T = !n || n === "source-over";
      T || this.setAttr("globalCompositeOperation", n);
    }
  };
  vt.Context = s, b.forEach(function(P) {
    Object.defineProperty(s.prototype, P, {
      get() {
        return this._context[P];
      },
      set(h) {
        this._context[P] = h;
      }
    });
  });
  class m extends s {
    constructor(h, { willReadFrequently: n = !1 } = {}) {
      super(h), this._context = h._canvas.getContext("2d", {
        willReadFrequently: n
      });
    }
    _fillColor(h) {
      var n = h.fill();
      this.setAttr("fillStyle", n), h._fillFunc(this);
    }
    _fillPattern(h) {
      this.setAttr("fillStyle", h._getFillPattern()), h._fillFunc(this);
    }
    _fillLinearGradient(h) {
      var n = h._getLinearGradient();
      n && (this.setAttr("fillStyle", n), h._fillFunc(this));
    }
    _fillRadialGradient(h) {
      const n = h._getRadialGradient();
      n && (this.setAttr("fillStyle", n), h._fillFunc(this));
    }
    _fill(h) {
      const n = h.fill(), T = h.getFillPriority();
      if (n && T === "color") {
        this._fillColor(h);
        return;
      }
      const R = h.getFillPatternImage();
      if (R && T === "pattern") {
        this._fillPattern(h);
        return;
      }
      const D = h.getFillLinearGradientColorStops();
      if (D && T === "linear-gradient") {
        this._fillLinearGradient(h);
        return;
      }
      const k = h.getFillRadialGradientColorStops();
      if (k && T === "radial-gradient") {
        this._fillRadialGradient(h);
        return;
      }
      n ? this._fillColor(h) : R ? this._fillPattern(h) : D ? this._fillLinearGradient(h) : k && this._fillRadialGradient(h);
    }
    _strokeLinearGradient(h) {
      const n = h.getStrokeLinearGradientStartPoint(), T = h.getStrokeLinearGradientEndPoint(), R = h.getStrokeLinearGradientColorStops(), D = this.createLinearGradient(n.x, n.y, T.x, T.y);
      if (R) {
        for (var k = 0; k < R.length; k += 2)
          D.addColorStop(R[k], R[k + 1]);
        this.setAttr("strokeStyle", D);
      }
    }
    _stroke(h) {
      var n = h.dash(), T = h.getStrokeScaleEnabled();
      if (h.hasStroke()) {
        if (!T) {
          this.save();
          var R = this.getCanvas().getPixelRatio();
          this.setTransform(R, 0, 0, R, 0, 0);
        }
        this._applyLineCap(h), n && h.dashEnabled() && (this.setLineDash(n), this.setAttr("lineDashOffset", h.dashOffset())), this.setAttr("lineWidth", h.strokeWidth()), h.getShadowForStrokeEnabled() || this.setAttr("shadowColor", "rgba(0,0,0,0)");
        var D = h.getStrokeLinearGradientColorStops();
        D ? this._strokeLinearGradient(h) : this.setAttr("strokeStyle", h.stroke()), h._strokeFunc(this), T || this.restore();
      }
    }
    _applyShadow(h) {
      var n, T, R, D = (n = h.getShadowRGBA()) !== null && n !== void 0 ? n : "black", k = (T = h.getShadowBlur()) !== null && T !== void 0 ? T : 5, x = (R = h.getShadowOffset()) !== null && R !== void 0 ? R : {
        x: 0,
        y: 0
      }, G = h.getAbsoluteScale(), E = this.canvas.getPixelRatio(), N = G.x * E, F = G.y * E;
      this.setAttr("shadowColor", D), this.setAttr("shadowBlur", k * Math.min(Math.abs(N), Math.abs(F))), this.setAttr("shadowOffsetX", x.x * N), this.setAttr("shadowOffsetY", x.y * F);
    }
  }
  vt.SceneContext = m;
  class y extends s {
    constructor(h) {
      super(h), this._context = h._canvas.getContext("2d", {
        willReadFrequently: !0
      });
    }
    _fill(h) {
      this.save(), this.setAttr("fillStyle", h.colorKey), h._fillFuncHit(this), this.restore();
    }
    strokeShape(h) {
      h.hasHitStroke() && this._stroke(h);
    }
    _stroke(h) {
      if (h.hasHitStroke()) {
        const D = h.getStrokeScaleEnabled();
        if (!D) {
          this.save();
          var n = this.getCanvas().getPixelRatio();
          this.setTransform(n, 0, 0, n, 0, 0);
        }
        this._applyLineCap(h);
        var T = h.hitStrokeWidth(), R = T === "auto" ? h.strokeWidth() : T;
        this.setAttr("lineWidth", R), this.setAttr("strokeStyle", h.colorKey), h._strokeFuncHit(this), D || this.restore();
      }
    }
  }
  return vt.HitContext = y, vt;
}
var ra;
function fi() {
  if (ra) return _t;
  ra = 1, Object.defineProperty(_t, "__esModule", { value: !0 }), _t.HitCanvas = _t.SceneCanvas = _t.Canvas = void 0;
  const t = Re(), l = bs(), A = oe(), f = le(), C = he();
  var g;
  function d() {
    if (g)
      return g;
    var S = t.Util.createCanvasElement(), p = S.getContext("2d");
    return g = function() {
      var b = A.Konva._global.devicePixelRatio || 1, u = p.webkitBackingStorePixelRatio || p.mozBackingStorePixelRatio || p.msBackingStorePixelRatio || p.oBackingStorePixelRatio || p.backingStorePixelRatio || 1;
      return b / u;
    }(), t.Util.releaseCanvas(S), g;
  }
  let i = class {
    constructor(p) {
      this.pixelRatio = 1, this.width = 0, this.height = 0, this.isCache = !1;
      var b = p || {}, u = b.pixelRatio || A.Konva.pixelRatio || d();
      this.pixelRatio = u, this._canvas = t.Util.createCanvasElement(), this._canvas.style.padding = "0", this._canvas.style.margin = "0", this._canvas.style.border = "0", this._canvas.style.background = "transparent", this._canvas.style.position = "absolute", this._canvas.style.top = "0", this._canvas.style.left = "0";
    }
    getContext() {
      return this.context;
    }
    getPixelRatio() {
      return this.pixelRatio;
    }
    setPixelRatio(p) {
      var b = this.pixelRatio;
      this.pixelRatio = p, this.setSize(this.getWidth() / b, this.getHeight() / b);
    }
    setWidth(p) {
      this.width = this._canvas.width = p * this.pixelRatio, this._canvas.style.width = p + "px";
      var b = this.pixelRatio, u = this.getContext()._context;
      u.scale(b, b);
    }
    setHeight(p) {
      this.height = this._canvas.height = p * this.pixelRatio, this._canvas.style.height = p + "px";
      var b = this.pixelRatio, u = this.getContext()._context;
      u.scale(b, b);
    }
    getWidth() {
      return this.width;
    }
    getHeight() {
      return this.height;
    }
    setSize(p, b) {
      this.setWidth(p || 0), this.setHeight(b || 0);
    }
    toDataURL(p, b) {
      try {
        return this._canvas.toDataURL(p, b);
      } catch {
        try {
          return this._canvas.toDataURL();
        } catch (s) {
          return t.Util.error("Unable to get data URL. " + s.message + " For more info read https://konvajs.org/docs/posts/Tainted_Canvas.html."), "";
        }
      }
    }
  };
  _t.Canvas = i, f.Factory.addGetterSetter(i, "pixelRatio", void 0, (0, C.getNumberValidator)());
  class c extends i {
    constructor(p = { width: 0, height: 0, willReadFrequently: !1 }) {
      super(p), this.context = new l.SceneContext(this, {
        willReadFrequently: p.willReadFrequently
      }), this.setSize(p.width, p.height);
    }
  }
  _t.SceneCanvas = c;
  class v extends i {
    constructor(p = { width: 0, height: 0 }) {
      super(p), this.hitCanvas = !0, this.context = new l.HitContext(this), this.setSize(p.width, p.height);
    }
  }
  return _t.HitCanvas = v, _t;
}
var Yi = {}, ia;
function nn() {
  return ia || (ia = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.DD = void 0;
    const l = oe(), A = Re();
    t.DD = {
      get isDragging() {
        var f = !1;
        return t.DD._dragElements.forEach((C) => {
          C.dragStatus === "dragging" && (f = !0);
        }), f;
      },
      justDragged: !1,
      get node() {
        var f;
        return t.DD._dragElements.forEach((C) => {
          f = C.node;
        }), f;
      },
      _dragElements: /* @__PURE__ */ new Map(),
      _drag(f) {
        const C = [];
        t.DD._dragElements.forEach((g, d) => {
          const { node: i } = g, c = i.getStage();
          c.setPointersPositions(f), g.pointerId === void 0 && (g.pointerId = A.Util._getFirstPointerId(f));
          const v = c._changedPointerPositions.find((b) => b.id === g.pointerId);
          if (v) {
            if (g.dragStatus !== "dragging") {
              var S = i.dragDistance(), p = Math.max(Math.abs(v.x - g.startPointerPos.x), Math.abs(v.y - g.startPointerPos.y));
              if (p < S || (i.startDrag({ evt: f }), !i.isDragging()))
                return;
            }
            i._setDragPosition(f, g), C.push(i);
          }
        }), C.forEach((g) => {
          g.fire("dragmove", {
            type: "dragmove",
            target: g,
            evt: f
          }, !0);
        });
      },
      _endDragBefore(f) {
        const C = [];
        t.DD._dragElements.forEach((g) => {
          const { node: d } = g, i = d.getStage();
          if (f && i.setPointersPositions(f), !i._changedPointerPositions.find((S) => S.id === g.pointerId))
            return;
          (g.dragStatus === "dragging" || g.dragStatus === "stopped") && (t.DD.justDragged = !0, l.Konva._mouseListenClick = !1, l.Konva._touchListenClick = !1, l.Konva._pointerListenClick = !1, g.dragStatus = "stopped");
          const v = g.node.getLayer() || g.node instanceof l.Konva.Stage && g.node;
          v && C.indexOf(v) === -1 && C.push(v);
        }), C.forEach((g) => {
          g.draw();
        });
      },
      _endDragAfter(f) {
        t.DD._dragElements.forEach((C, g) => {
          C.dragStatus === "stopped" && C.node.fire("dragend", {
            type: "dragend",
            target: C.node,
            evt: f
          }, !0), C.dragStatus !== "dragging" && t.DD._dragElements.delete(g);
        });
      }
    }, l.Konva.isBrowser && (window.addEventListener("mouseup", t.DD._endDragBefore, !0), window.addEventListener("touchend", t.DD._endDragBefore, !0), window.addEventListener("mousemove", t.DD._drag), window.addEventListener("touchmove", t.DD._drag), window.addEventListener("mouseup", t.DD._endDragAfter, !1), window.addEventListener("touchend", t.DD._endDragAfter, !1));
  }(Yi)), Yi;
}
var na;
function Me() {
  if (na) return Zt;
  na = 1, Object.defineProperty(Zt, "__esModule", { value: !0 }), Zt.Node = void 0;
  const t = Re(), l = le(), A = fi(), f = oe(), C = nn(), g = he();
  var d = "absoluteOpacity", i = "allEventListeners", c = "absoluteTransform", v = "absoluteScale", S = "canvas", p = "Change", b = "children", u = "konva", s = "listening", m = "mouseenter", y = "mouseleave", P = "set", h = "Shape", n = " ", T = "stage", R = "transform", D = "Stage", k = "visible", x = [
    "xChange.konva",
    "yChange.konva",
    "scaleXChange.konva",
    "scaleYChange.konva",
    "skewXChange.konva",
    "skewYChange.konva",
    "rotationChange.konva",
    "offsetXChange.konva",
    "offsetYChange.konva",
    "transformsEnabledChange.konva"
  ].join(n);
  let G = 1, E = class Xi {
    constructor(o) {
      this._id = G++, this.eventListeners = {}, this.attrs = {}, this.index = 0, this._allEventListeners = null, this.parent = null, this._cache = /* @__PURE__ */ new Map(), this._attachedDepsListeners = /* @__PURE__ */ new Map(), this._lastPos = null, this._batchingTransformChange = !1, this._needClearTransformCache = !1, this._filterUpToDate = !1, this._isUnderCache = !1, this._dragEventId = null, this._shouldFireChangeEvents = !1, this.setAttrs(o), this._shouldFireChangeEvents = !0;
    }
    hasChildren() {
      return !1;
    }
    _clearCache(o) {
      (o === R || o === c) && this._cache.get(o) ? this._cache.get(o).dirty = !0 : o ? this._cache.delete(o) : this._cache.clear();
    }
    _getCache(o, w) {
      var L = this._cache.get(o), O = o === R || o === c, I = L === void 0 || O && L.dirty === !0;
      return I && (L = w.call(this), this._cache.set(o, L)), L;
    }
    _calculate(o, w, L) {
      if (!this._attachedDepsListeners.get(o)) {
        const O = w.map((I) => I + "Change.konva").join(n);
        this.on(O, () => {
          this._clearCache(o);
        }), this._attachedDepsListeners.set(o, !0);
      }
      return this._getCache(o, L);
    }
    _getCanvasCache() {
      return this._cache.get(S);
    }
    _clearSelfAndDescendantCache(o) {
      this._clearCache(o), o === c && this.fire("absoluteTransformChange");
    }
    clearCache() {
      if (this._cache.has(S)) {
        const { scene: o, filter: w, hit: L } = this._cache.get(S);
        t.Util.releaseCanvas(o, w, L), this._cache.delete(S);
      }
      return this._clearSelfAndDescendantCache(), this._requestDraw(), this;
    }
    cache(o) {
      var w = o || {}, L = {};
      (w.x === void 0 || w.y === void 0 || w.width === void 0 || w.height === void 0) && (L = this.getClientRect({
        skipTransform: !0,
        relativeTo: this.getParent() || void 0
      }));
      var O = Math.ceil(w.width || L.width), I = Math.ceil(w.height || L.height), H = w.pixelRatio, B = w.x === void 0 ? Math.floor(L.x) : w.x, $ = w.y === void 0 ? Math.floor(L.y) : w.y, z = w.offset || 0, Z = w.drawBorder || !1, W = w.hitCanvasPixelRatio || 1;
      if (!O || !I) {
        t.Util.error("Can not cache the node. Width or height of the node equals 0. Caching is skipped.");
        return;
      }
      const j = Math.abs(Math.round(L.x) - B) > 0.5 ? 1 : 0, q = Math.abs(Math.round(L.y) - $) > 0.5 ? 1 : 0;
      O += z * 2 + j, I += z * 2 + q, B -= z, $ -= z;
      var J = new A.SceneCanvas({
        pixelRatio: H,
        width: O,
        height: I
      }), Y = new A.SceneCanvas({
        pixelRatio: H,
        width: 0,
        height: 0,
        willReadFrequently: !0
      }), V = new A.HitCanvas({
        pixelRatio: W,
        width: O,
        height: I
      }), X = J.getContext(), re = V.getContext();
      return V.isCache = !0, J.isCache = !0, this._cache.delete(S), this._filterUpToDate = !1, w.imageSmoothingEnabled === !1 && (J.getContext()._context.imageSmoothingEnabled = !1, Y.getContext()._context.imageSmoothingEnabled = !1), X.save(), re.save(), X.translate(-B, -$), re.translate(-B, -$), this._isUnderCache = !0, this._clearSelfAndDescendantCache(d), this._clearSelfAndDescendantCache(v), this.drawScene(J, this), this.drawHit(V, this), this._isUnderCache = !1, X.restore(), re.restore(), Z && (X.save(), X.beginPath(), X.rect(0, 0, O, I), X.closePath(), X.setAttr("strokeStyle", "red"), X.setAttr("lineWidth", 5), X.stroke(), X.restore()), this._cache.set(S, {
        scene: J,
        filter: Y,
        hit: V,
        x: B,
        y: $
      }), this._requestDraw(), this;
    }
    isCached() {
      return this._cache.has(S);
    }
    getClientRect(o) {
      throw new Error('abstract "getClientRect" method call');
    }
    _transformedRect(o, w) {
      var L = [
        { x: o.x, y: o.y },
        { x: o.x + o.width, y: o.y },
        { x: o.x + o.width, y: o.y + o.height },
        { x: o.x, y: o.y + o.height }
      ], O = 1 / 0, I = 1 / 0, H = -1 / 0, B = -1 / 0, $ = this.getAbsoluteTransform(w);
      return L.forEach(function(z) {
        var Z = $.point(z);
        O === void 0 && (O = H = Z.x, I = B = Z.y), O = Math.min(O, Z.x), I = Math.min(I, Z.y), H = Math.max(H, Z.x), B = Math.max(B, Z.y);
      }), {
        x: O,
        y: I,
        width: H - O,
        height: B - I
      };
    }
    _drawCachedSceneCanvas(o) {
      o.save(), o._applyOpacity(this), o._applyGlobalCompositeOperation(this);
      const w = this._getCanvasCache();
      o.translate(w.x, w.y);
      var L = this._getCachedSceneCanvas(), O = L.pixelRatio;
      o.drawImage(L._canvas, 0, 0, L.width / O, L.height / O), o.restore();
    }
    _drawCachedHitCanvas(o) {
      var w = this._getCanvasCache(), L = w.hit;
      o.save(), o.translate(w.x, w.y), o.drawImage(L._canvas, 0, 0, L.width / L.pixelRatio, L.height / L.pixelRatio), o.restore();
    }
    _getCachedSceneCanvas() {
      var o = this.filters(), w = this._getCanvasCache(), L = w.scene, O = w.filter, I = O.getContext(), H, B, $, z;
      if (o) {
        if (!this._filterUpToDate) {
          var Z = L.pixelRatio;
          O.setSize(L.width / L.pixelRatio, L.height / L.pixelRatio);
          try {
            for (H = o.length, I.clear(), I.drawImage(L._canvas, 0, 0, L.getWidth() / Z, L.getHeight() / Z), B = I.getImageData(0, 0, O.getWidth(), O.getHeight()), $ = 0; $ < H; $++) {
              if (z = o[$], typeof z != "function") {
                t.Util.error("Filter should be type of function, but got " + typeof z + " instead. Please check correct filters");
                continue;
              }
              z.call(this, B), I.putImageData(B, 0, 0);
            }
          } catch (W) {
            t.Util.error("Unable to apply filter. " + W.message + " This post my help you https://konvajs.org/docs/posts/Tainted_Canvas.html.");
          }
          this._filterUpToDate = !0;
        }
        return O;
      }
      return L;
    }
    on(o, w) {
      if (this._cache && this._cache.delete(i), arguments.length === 3)
        return this._delegate.apply(this, arguments);
      var L = o.split(n), O = L.length, I, H, B, $, z;
      for (I = 0; I < O; I++)
        H = L[I], B = H.split("."), $ = B[0], z = B[1] || "", this.eventListeners[$] || (this.eventListeners[$] = []), this.eventListeners[$].push({
          name: z,
          handler: w
        });
      return this;
    }
    off(o, w) {
      var L = (o || "").split(n), O = L.length, I, H, B, $, z, Z;
      if (this._cache && this._cache.delete(i), !o)
        for (H in this.eventListeners)
          this._off(H);
      for (I = 0; I < O; I++)
        if (B = L[I], $ = B.split("."), z = $[0], Z = $[1], z)
          this.eventListeners[z] && this._off(z, Z, w);
        else
          for (H in this.eventListeners)
            this._off(H, Z, w);
      return this;
    }
    dispatchEvent(o) {
      var w = {
        target: this,
        type: o.type,
        evt: o
      };
      return this.fire(o.type, w), this;
    }
    addEventListener(o, w) {
      return this.on(o, function(L) {
        w.call(this, L.evt);
      }), this;
    }
    removeEventListener(o) {
      return this.off(o), this;
    }
    _delegate(o, w, L) {
      var O = this;
      this.on(o, function(I) {
        for (var H = I.target.findAncestors(w, !0, O), B = 0; B < H.length; B++)
          I = t.Util.cloneObject(I), I.currentTarget = H[B], L.call(H[B], I);
      });
    }
    remove() {
      return this.isDragging() && this.stopDrag(), C.DD._dragElements.delete(this._id), this._remove(), this;
    }
    _clearCaches() {
      this._clearSelfAndDescendantCache(c), this._clearSelfAndDescendantCache(d), this._clearSelfAndDescendantCache(v), this._clearSelfAndDescendantCache(T), this._clearSelfAndDescendantCache(k), this._clearSelfAndDescendantCache(s);
    }
    _remove() {
      this._clearCaches();
      var o = this.getParent();
      o && o.children && (o.children.splice(this.index, 1), o._setChildrenIndices(), this.parent = null);
    }
    destroy() {
      return this.remove(), this.clearCache(), this;
    }
    getAttr(o) {
      var w = "get" + t.Util._capitalize(o);
      return t.Util._isFunction(this[w]) ? this[w]() : this.attrs[o];
    }
    getAncestors() {
      for (var o = this.getParent(), w = []; o; )
        w.push(o), o = o.getParent();
      return w;
    }
    getAttrs() {
      return this.attrs || {};
    }
    setAttrs(o) {
      return this._batchTransformChanges(() => {
        var w, L;
        if (!o)
          return this;
        for (w in o)
          w !== b && (L = P + t.Util._capitalize(w), t.Util._isFunction(this[L]) ? this[L](o[w]) : this._setAttr(w, o[w]));
      }), this;
    }
    isListening() {
      return this._getCache(s, this._isListening);
    }
    _isListening(o) {
      if (!this.listening())
        return !1;
      const L = this.getParent();
      return L && L !== o && this !== o ? L._isListening(o) : !0;
    }
    isVisible() {
      return this._getCache(k, this._isVisible);
    }
    _isVisible(o) {
      if (!this.visible())
        return !1;
      const L = this.getParent();
      return L && L !== o && this !== o ? L._isVisible(o) : !0;
    }
    shouldDrawHit(o, w = !1) {
      if (o)
        return this._isVisible(o) && this._isListening(o);
      var L = this.getLayer(), O = !1;
      C.DD._dragElements.forEach((H) => {
        H.dragStatus === "dragging" && (H.node.nodeType === "Stage" || H.node.getLayer() === L) && (O = !0);
      });
      var I = !w && !f.Konva.hitOnDragEnabled && (O || f.Konva.isTransforming());
      return this.isListening() && this.isVisible() && !I;
    }
    show() {
      return this.visible(!0), this;
    }
    hide() {
      return this.visible(!1), this;
    }
    getZIndex() {
      return this.index || 0;
    }
    getAbsoluteZIndex() {
      var o = this.getDepth(), w = this, L = 0, O, I, H, B;
      function $(Z) {
        for (O = [], I = Z.length, H = 0; H < I; H++)
          B = Z[H], L++, B.nodeType !== h && (O = O.concat(B.getChildren().slice())), B._id === w._id && (H = I);
        O.length > 0 && O[0].getDepth() <= o && $(O);
      }
      const z = this.getStage();
      return w.nodeType !== D && z && $(z.getChildren()), L;
    }
    getDepth() {
      for (var o = 0, w = this.parent; w; )
        o++, w = w.parent;
      return o;
    }
    _batchTransformChanges(o) {
      this._batchingTransformChange = !0, o(), this._batchingTransformChange = !1, this._needClearTransformCache && (this._clearCache(R), this._clearSelfAndDescendantCache(c)), this._needClearTransformCache = !1;
    }
    setPosition(o) {
      return this._batchTransformChanges(() => {
        this.x(o.x), this.y(o.y);
      }), this;
    }
    getPosition() {
      return {
        x: this.x(),
        y: this.y()
      };
    }
    getRelativePointerPosition() {
      const o = this.getStage();
      if (!o)
        return null;
      var w = o.getPointerPosition();
      if (!w)
        return null;
      var L = this.getAbsoluteTransform().copy();
      return L.invert(), L.point(w);
    }
    getAbsolutePosition(o) {
      let w = !1, L = this.parent;
      for (; L; ) {
        if (L.isCached()) {
          w = !0;
          break;
        }
        L = L.parent;
      }
      w && !o && (o = !0);
      var O = this.getAbsoluteTransform(o).getMatrix(), I = new t.Transform(), H = this.offset();
      return I.m = O.slice(), I.translate(H.x, H.y), I.getTranslation();
    }
    setAbsolutePosition(o) {
      const { x: w, y: L, ...O } = this._clearTransform();
      this.attrs.x = w, this.attrs.y = L, this._clearCache(R);
      var I = this._getAbsoluteTransform().copy();
      return I.invert(), I.translate(o.x, o.y), o = {
        x: this.attrs.x + I.getTranslation().x,
        y: this.attrs.y + I.getTranslation().y
      }, this._setTransform(O), this.setPosition({ x: o.x, y: o.y }), this._clearCache(R), this._clearSelfAndDescendantCache(c), this;
    }
    _setTransform(o) {
      var w;
      for (w in o)
        this.attrs[w] = o[w];
    }
    _clearTransform() {
      var o = {
        x: this.x(),
        y: this.y(),
        rotation: this.rotation(),
        scaleX: this.scaleX(),
        scaleY: this.scaleY(),
        offsetX: this.offsetX(),
        offsetY: this.offsetY(),
        skewX: this.skewX(),
        skewY: this.skewY()
      };
      return this.attrs.x = 0, this.attrs.y = 0, this.attrs.rotation = 0, this.attrs.scaleX = 1, this.attrs.scaleY = 1, this.attrs.offsetX = 0, this.attrs.offsetY = 0, this.attrs.skewX = 0, this.attrs.skewY = 0, o;
    }
    move(o) {
      var w = o.x, L = o.y, O = this.x(), I = this.y();
      return w !== void 0 && (O += w), L !== void 0 && (I += L), this.setPosition({ x: O, y: I }), this;
    }
    _eachAncestorReverse(o, w) {
      var L = [], O = this.getParent(), I, H;
      if (!(w && w._id === this._id)) {
        for (L.unshift(this); O && (!w || O._id !== w._id); )
          L.unshift(O), O = O.parent;
        for (I = L.length, H = 0; H < I; H++)
          o(L[H]);
      }
    }
    rotate(o) {
      return this.rotation(this.rotation() + o), this;
    }
    moveToTop() {
      if (!this.parent)
        return t.Util.warn("Node has no parent. moveToTop function is ignored."), !1;
      var o = this.index, w = this.parent.getChildren().length;
      return o < w - 1 ? (this.parent.children.splice(o, 1), this.parent.children.push(this), this.parent._setChildrenIndices(), !0) : !1;
    }
    moveUp() {
      if (!this.parent)
        return t.Util.warn("Node has no parent. moveUp function is ignored."), !1;
      var o = this.index, w = this.parent.getChildren().length;
      return o < w - 1 ? (this.parent.children.splice(o, 1), this.parent.children.splice(o + 1, 0, this), this.parent._setChildrenIndices(), !0) : !1;
    }
    moveDown() {
      if (!this.parent)
        return t.Util.warn("Node has no parent. moveDown function is ignored."), !1;
      var o = this.index;
      return o > 0 ? (this.parent.children.splice(o, 1), this.parent.children.splice(o - 1, 0, this), this.parent._setChildrenIndices(), !0) : !1;
    }
    moveToBottom() {
      if (!this.parent)
        return t.Util.warn("Node has no parent. moveToBottom function is ignored."), !1;
      var o = this.index;
      return o > 0 ? (this.parent.children.splice(o, 1), this.parent.children.unshift(this), this.parent._setChildrenIndices(), !0) : !1;
    }
    setZIndex(o) {
      if (!this.parent)
        return t.Util.warn("Node has no parent. zIndex parameter is ignored."), this;
      (o < 0 || o >= this.parent.children.length) && t.Util.warn("Unexpected value " + o + " for zIndex property. zIndex is just index of a node in children of its parent. Expected value is from 0 to " + (this.parent.children.length - 1) + ".");
      var w = this.index;
      return this.parent.children.splice(w, 1), this.parent.children.splice(o, 0, this), this.parent._setChildrenIndices(), this;
    }
    getAbsoluteOpacity() {
      return this._getCache(d, this._getAbsoluteOpacity);
    }
    _getAbsoluteOpacity() {
      var o = this.opacity(), w = this.getParent();
      return w && !w._isUnderCache && (o *= w.getAbsoluteOpacity()), o;
    }
    moveTo(o) {
      return this.getParent() !== o && (this._remove(), o.add(this)), this;
    }
    toObject() {
      var o = this.getAttrs(), w, L, O, I, H;
      const B = {
        attrs: {},
        className: this.getClassName()
      };
      for (w in o)
        L = o[w], H = t.Util.isObject(L) && !t.Util._isPlainObject(L) && !t.Util._isArray(L), !H && (O = typeof this[w] == "function" && this[w], delete o[w], I = O ? O.call(this) : null, o[w] = L, I !== L && (B.attrs[w] = L));
      return t.Util._prepareToStringify(B);
    }
    toJSON() {
      return JSON.stringify(this.toObject());
    }
    getParent() {
      return this.parent;
    }
    findAncestors(o, w, L) {
      var O = [];
      w && this._isMatch(o) && O.push(this);
      for (var I = this.parent; I; ) {
        if (I === L)
          return O;
        I._isMatch(o) && O.push(I), I = I.parent;
      }
      return O;
    }
    isAncestorOf(o) {
      return !1;
    }
    findAncestor(o, w, L) {
      return this.findAncestors(o, w, L)[0];
    }
    _isMatch(o) {
      if (!o)
        return !1;
      if (typeof o == "function")
        return o(this);
      var w = o.replace(/ /g, "").split(","), L = w.length, O, I;
      for (O = 0; O < L; O++)
        if (I = w[O], t.Util.isValidSelector(I) || (t.Util.warn('Selector "' + I + '" is invalid. Allowed selectors examples are "#foo", ".bar" or "Group".'), t.Util.warn('If you have a custom shape with such className, please change it to start with upper letter like "Triangle".'), t.Util.warn("Konva is awesome, right?")), I.charAt(0) === "#") {
          if (this.id() === I.slice(1))
            return !0;
        } else if (I.charAt(0) === ".") {
          if (this.hasName(I.slice(1)))
            return !0;
        } else if (this.className === I || this.nodeType === I)
          return !0;
      return !1;
    }
    getLayer() {
      var o = this.getParent();
      return o ? o.getLayer() : null;
    }
    getStage() {
      return this._getCache(T, this._getStage);
    }
    _getStage() {
      var o = this.getParent();
      return o ? o.getStage() : null;
    }
    fire(o, w = {}, L) {
      return w.target = w.target || this, L ? this._fireAndBubble(o, w) : this._fire(o, w), this;
    }
    getAbsoluteTransform(o) {
      return o ? this._getAbsoluteTransform(o) : this._getCache(c, this._getAbsoluteTransform);
    }
    _getAbsoluteTransform(o) {
      var w;
      if (o)
        return w = new t.Transform(), this._eachAncestorReverse(function(O) {
          var I = O.transformsEnabled();
          I === "all" ? w.multiply(O.getTransform()) : I === "position" && w.translate(O.x() - O.offsetX(), O.y() - O.offsetY());
        }, o), w;
      w = this._cache.get(c) || new t.Transform(), this.parent ? this.parent.getAbsoluteTransform().copyInto(w) : w.reset();
      var L = this.transformsEnabled();
      if (L === "all")
        w.multiply(this.getTransform());
      else if (L === "position") {
        const O = this.attrs.x || 0, I = this.attrs.y || 0, H = this.attrs.offsetX || 0, B = this.attrs.offsetY || 0;
        w.translate(O - H, I - B);
      }
      return w.dirty = !1, w;
    }
    getAbsoluteScale(o) {
      for (var w = this; w; )
        w._isUnderCache && (o = w), w = w.getParent();
      const O = this.getAbsoluteTransform(o).decompose();
      return {
        x: O.scaleX,
        y: O.scaleY
      };
    }
    getAbsoluteRotation() {
      return this.getAbsoluteTransform().decompose().rotation;
    }
    getTransform() {
      return this._getCache(R, this._getTransform);
    }
    _getTransform() {
      var o, w, L = this._cache.get(R) || new t.Transform();
      L.reset();
      var O = this.x(), I = this.y(), H = f.Konva.getAngle(this.rotation()), B = (o = this.attrs.scaleX) !== null && o !== void 0 ? o : 1, $ = (w = this.attrs.scaleY) !== null && w !== void 0 ? w : 1, z = this.attrs.skewX || 0, Z = this.attrs.skewY || 0, W = this.attrs.offsetX || 0, j = this.attrs.offsetY || 0;
      return (O !== 0 || I !== 0) && L.translate(O, I), H !== 0 && L.rotate(H), (z !== 0 || Z !== 0) && L.skew(z, Z), (B !== 1 || $ !== 1) && L.scale(B, $), (W !== 0 || j !== 0) && L.translate(-1 * W, -1 * j), L.dirty = !1, L;
    }
    clone(o) {
      var w = t.Util.cloneObject(this.attrs), L, O, I, H, B;
      for (L in o)
        w[L] = o[L];
      var $ = new this.constructor(w);
      for (L in this.eventListeners)
        for (O = this.eventListeners[L], I = O.length, H = 0; H < I; H++)
          B = O[H], B.name.indexOf(u) < 0 && ($.eventListeners[L] || ($.eventListeners[L] = []), $.eventListeners[L].push(B));
      return $;
    }
    _toKonvaCanvas(o) {
      o = o || {};
      var w = this.getClientRect(), L = this.getStage(), O = o.x !== void 0 ? o.x : Math.floor(w.x), I = o.y !== void 0 ? o.y : Math.floor(w.y), H = o.pixelRatio || 1, B = new A.SceneCanvas({
        width: o.width || Math.ceil(w.width) || (L ? L.width() : 0),
        height: o.height || Math.ceil(w.height) || (L ? L.height() : 0),
        pixelRatio: H
      }), $ = B.getContext();
      const z = new A.SceneCanvas({
        width: B.width / B.pixelRatio + Math.abs(O),
        height: B.height / B.pixelRatio + Math.abs(I),
        pixelRatio: B.pixelRatio
      });
      return o.imageSmoothingEnabled === !1 && ($._context.imageSmoothingEnabled = !1), $.save(), (O || I) && $.translate(-1 * O, -1 * I), this.drawScene(B, void 0, z), $.restore(), B;
    }
    toCanvas(o) {
      return this._toKonvaCanvas(o)._canvas;
    }
    toDataURL(o) {
      o = o || {};
      var w = o.mimeType || null, L = o.quality || null, O = this._toKonvaCanvas(o).toDataURL(w, L);
      return o.callback && o.callback(O), O;
    }
    toImage(o) {
      return new Promise((w, L) => {
        try {
          const O = o == null ? void 0 : o.callback;
          O && delete o.callback, t.Util._urlToImage(this.toDataURL(o), function(I) {
            w(I), O == null || O(I);
          });
        } catch (O) {
          L(O);
        }
      });
    }
    toBlob(o) {
      return new Promise((w, L) => {
        try {
          const O = o == null ? void 0 : o.callback;
          O && delete o.callback, this.toCanvas(o).toBlob((I) => {
            w(I), O == null || O(I);
          }, o == null ? void 0 : o.mimeType, o == null ? void 0 : o.quality);
        } catch (O) {
          L(O);
        }
      });
    }
    setSize(o) {
      return this.width(o.width), this.height(o.height), this;
    }
    getSize() {
      return {
        width: this.width(),
        height: this.height()
      };
    }
    getClassName() {
      return this.className || this.nodeType;
    }
    getType() {
      return this.nodeType;
    }
    getDragDistance() {
      return this.attrs.dragDistance !== void 0 ? this.attrs.dragDistance : this.parent ? this.parent.getDragDistance() : f.Konva.dragDistance;
    }
    _off(o, w, L) {
      var O = this.eventListeners[o], I, H, B;
      for (I = 0; I < O.length; I++)
        if (H = O[I].name, B = O[I].handler, (H !== "konva" || w === "konva") && (!w || H === w) && (!L || L === B)) {
          if (O.splice(I, 1), O.length === 0) {
            delete this.eventListeners[o];
            break;
          }
          I--;
        }
    }
    _fireChangeEvent(o, w, L) {
      this._fire(o + p, {
        oldVal: w,
        newVal: L
      });
    }
    addName(o) {
      if (!this.hasName(o)) {
        var w = this.name(), L = w ? w + " " + o : o;
        this.name(L);
      }
      return this;
    }
    hasName(o) {
      if (!o)
        return !1;
      const w = this.name();
      if (!w)
        return !1;
      var L = (w || "").split(/\s/g);
      return L.indexOf(o) !== -1;
    }
    removeName(o) {
      var w = (this.name() || "").split(/\s/g), L = w.indexOf(o);
      return L !== -1 && (w.splice(L, 1), this.name(w.join(" "))), this;
    }
    setAttr(o, w) {
      var L = this[P + t.Util._capitalize(o)];
      return t.Util._isFunction(L) ? L.call(this, w) : this._setAttr(o, w), this;
    }
    _requestDraw() {
      if (f.Konva.autoDrawEnabled) {
        const o = this.getLayer() || this.getStage();
        o == null || o.batchDraw();
      }
    }
    _setAttr(o, w) {
      var L = this.attrs[o];
      L === w && !t.Util.isObject(w) || (w == null ? delete this.attrs[o] : this.attrs[o] = w, this._shouldFireChangeEvents && this._fireChangeEvent(o, L, w), this._requestDraw());
    }
    _setComponentAttr(o, w, L) {
      var O;
      L !== void 0 && (O = this.attrs[o], O || (this.attrs[o] = this.getAttr(o)), this.attrs[o][w] = L, this._fireChangeEvent(o, O, L));
    }
    _fireAndBubble(o, w, L) {
      w && this.nodeType === h && (w.target = this);
      var O = (o === m || o === y) && (L && (this === L || this.isAncestorOf && this.isAncestorOf(L)) || this.nodeType === "Stage" && !L);
      if (!O) {
        this._fire(o, w);
        var I = (o === m || o === y) && L && L.isAncestorOf && L.isAncestorOf(this) && !L.isAncestorOf(this.parent);
        (w && !w.cancelBubble || !w) && this.parent && this.parent.isListening() && !I && (L && L.parent ? this._fireAndBubble.call(this.parent, o, w, L) : this._fireAndBubble.call(this.parent, o, w));
      }
    }
    _getProtoListeners(o) {
      var w, L, O;
      const I = (w = this._cache.get(i)) !== null && w !== void 0 ? w : {};
      let H = I == null ? void 0 : I[o];
      if (H === void 0) {
        H = [];
        let B = Object.getPrototypeOf(this);
        for (; B; ) {
          const $ = (O = (L = B.eventListeners) === null || L === void 0 ? void 0 : L[o]) !== null && O !== void 0 ? O : [];
          H.push(...$), B = Object.getPrototypeOf(B);
        }
        I[o] = H, this._cache.set(i, I);
      }
      return H;
    }
    _fire(o, w) {
      w = w || {}, w.currentTarget = this, w.type = o;
      const L = this._getProtoListeners(o);
      if (L)
        for (var O = 0; O < L.length; O++)
          L[O].handler.call(this, w);
      const I = this.eventListeners[o];
      if (I)
        for (var O = 0; O < I.length; O++)
          I[O].handler.call(this, w);
    }
    draw() {
      return this.drawScene(), this.drawHit(), this;
    }
    _createDragElement(o) {
      var w = o ? o.pointerId : void 0, L = this.getStage(), O = this.getAbsolutePosition();
      if (L) {
        var I = L._getPointerById(w) || L._changedPointerPositions[0] || O;
        C.DD._dragElements.set(this._id, {
          node: this,
          startPointerPos: I,
          offset: {
            x: I.x - O.x,
            y: I.y - O.y
          },
          dragStatus: "ready",
          pointerId: w
        });
      }
    }
    startDrag(o, w = !0) {
      C.DD._dragElements.has(this._id) || this._createDragElement(o);
      const L = C.DD._dragElements.get(this._id);
      L.dragStatus = "dragging", this.fire("dragstart", {
        type: "dragstart",
        target: this,
        evt: o && o.evt
      }, w);
    }
    _setDragPosition(o, w) {
      const L = this.getStage()._getPointerById(w.pointerId);
      if (L) {
        var O = {
          x: L.x - w.offset.x,
          y: L.y - w.offset.y
        }, I = this.dragBoundFunc();
        if (I !== void 0) {
          const H = I.call(this, O, o);
          H ? O = H : t.Util.warn("dragBoundFunc did not return any value. That is unexpected behavior. You must return new absolute position from dragBoundFunc.");
        }
        (!this._lastPos || this._lastPos.x !== O.x || this._lastPos.y !== O.y) && (this.setAbsolutePosition(O), this._requestDraw()), this._lastPos = O;
      }
    }
    stopDrag(o) {
      const w = C.DD._dragElements.get(this._id);
      w && (w.dragStatus = "stopped"), C.DD._endDragBefore(o), C.DD._endDragAfter(o);
    }
    setDraggable(o) {
      this._setAttr("draggable", o), this._dragChange();
    }
    isDragging() {
      const o = C.DD._dragElements.get(this._id);
      return o ? o.dragStatus === "dragging" : !1;
    }
    _listenDrag() {
      this._dragCleanup(), this.on("mousedown.konva touchstart.konva", function(o) {
        var w = o.evt.button !== void 0, L = !w || f.Konva.dragButtons.indexOf(o.evt.button) >= 0;
        if (L && !this.isDragging()) {
          var O = !1;
          C.DD._dragElements.forEach((I) => {
            this.isAncestorOf(I.node) && (O = !0);
          }), O || this._createDragElement(o);
        }
      });
    }
    _dragChange() {
      if (this.attrs.draggable)
        this._listenDrag();
      else {
        this._dragCleanup();
        var o = this.getStage();
        if (!o)
          return;
        const w = C.DD._dragElements.get(this._id), L = w && w.dragStatus === "dragging", O = w && w.dragStatus === "ready";
        L ? this.stopDrag() : O && C.DD._dragElements.delete(this._id);
      }
    }
    _dragCleanup() {
      this.off("mousedown.konva"), this.off("touchstart.konva");
    }
    isClientRectOnScreen(o = { x: 0, y: 0 }) {
      const w = this.getStage();
      if (!w)
        return !1;
      const L = {
        x: -o.x,
        y: -o.y,
        width: w.width() + 2 * o.x,
        height: w.height() + 2 * o.y
      };
      return t.Util.haveIntersection(L, this.getClientRect());
    }
    static create(o, w) {
      return t.Util._isString(o) && (o = JSON.parse(o)), this._createNode(o, w);
    }
    static _createNode(o, w) {
      var L = Xi.prototype.getClassName.call(o), O = o.children, I, H, B;
      w && (o.attrs.container = w), f.Konva[L] || (t.Util.warn('Can not find a node with class name "' + L + '". Fallback to "Shape".'), L = "Shape");
      const $ = f.Konva[L];
      if (I = new $(o.attrs), O)
        for (H = O.length, B = 0; B < H; B++)
          I.add(Xi._createNode(O[B]));
      return I;
    }
  };
  Zt.Node = E, E.prototype.nodeType = "Node", E.prototype._attrsAffectingSize = [], E.prototype.eventListeners = {}, E.prototype.on.call(E.prototype, x, function() {
    if (this._batchingTransformChange) {
      this._needClearTransformCache = !0;
      return;
    }
    this._clearCache(R), this._clearSelfAndDescendantCache(c);
  }), E.prototype.on.call(E.prototype, "visibleChange.konva", function() {
    this._clearSelfAndDescendantCache(k);
  }), E.prototype.on.call(E.prototype, "listeningChange.konva", function() {
    this._clearSelfAndDescendantCache(s);
  }), E.prototype.on.call(E.prototype, "opacityChange.konva", function() {
    this._clearSelfAndDescendantCache(d);
  });
  const N = l.Factory.addGetterSetter;
  return N(E, "zIndex"), N(E, "absolutePosition"), N(E, "position"), N(E, "x", 0, (0, g.getNumberValidator)()), N(E, "y", 0, (0, g.getNumberValidator)()), N(E, "globalCompositeOperation", "source-over", (0, g.getStringValidator)()), N(E, "opacity", 1, (0, g.getNumberValidator)()), N(E, "name", "", (0, g.getStringValidator)()), N(E, "id", "", (0, g.getStringValidator)()), N(E, "rotation", 0, (0, g.getNumberValidator)()), l.Factory.addComponentsGetterSetter(E, "scale", ["x", "y"]), N(E, "scaleX", 1, (0, g.getNumberValidator)()), N(E, "scaleY", 1, (0, g.getNumberValidator)()), l.Factory.addComponentsGetterSetter(E, "skew", ["x", "y"]), N(E, "skewX", 0, (0, g.getNumberValidator)()), N(E, "skewY", 0, (0, g.getNumberValidator)()), l.Factory.addComponentsGetterSetter(E, "offset", ["x", "y"]), N(E, "offsetX", 0, (0, g.getNumberValidator)()), N(E, "offsetY", 0, (0, g.getNumberValidator)()), N(E, "dragDistance", null, (0, g.getNumberValidator)()), N(E, "width", 0, (0, g.getNumberValidator)()), N(E, "height", 0, (0, g.getNumberValidator)()), N(E, "listening", !0, (0, g.getBooleanValidator)()), N(E, "preventDefault", !0, (0, g.getBooleanValidator)()), N(E, "filters", null, function(F) {
    return this._filterUpToDate = !1, F;
  }), N(E, "visible", !0, (0, g.getBooleanValidator)()), N(E, "transformsEnabled", "all", (0, g.getStringValidator)()), N(E, "size"), N(E, "dragBoundFunc"), N(E, "draggable", !1, (0, g.getBooleanValidator)()), l.Factory.backCompat(E, {
    rotateDeg: "rotate",
    setRotationDeg: "setRotation",
    getRotationDeg: "getRotation"
  }), Zt;
}
var Jt = {}, aa;
function gi() {
  if (aa) return Jt;
  aa = 1, Object.defineProperty(Jt, "__esModule", { value: !0 }), Jt.Container = void 0;
  const t = le(), l = Me(), A = he();
  let f = class extends l.Node {
    constructor() {
      super(...arguments), this.children = [];
    }
    getChildren(g) {
      if (!g)
        return this.children || [];
      const d = this.children || [];
      var i = [];
      return d.forEach(function(c) {
        g(c) && i.push(c);
      }), i;
    }
    hasChildren() {
      return this.getChildren().length > 0;
    }
    removeChildren() {
      return this.getChildren().forEach((g) => {
        g.parent = null, g.index = 0, g.remove();
      }), this.children = [], this._requestDraw(), this;
    }
    destroyChildren() {
      return this.getChildren().forEach((g) => {
        g.parent = null, g.index = 0, g.destroy();
      }), this.children = [], this._requestDraw(), this;
    }
    add(...g) {
      if (g.length === 0)
        return this;
      if (g.length > 1) {
        for (var d = 0; d < g.length; d++)
          this.add(g[d]);
        return this;
      }
      const i = g[0];
      return i.getParent() ? (i.moveTo(this), this) : (this._validateAdd(i), i.index = this.getChildren().length, i.parent = this, i._clearCaches(), this.getChildren().push(i), this._fire("add", {
        child: i
      }), this._requestDraw(), this);
    }
    destroy() {
      return this.hasChildren() && this.destroyChildren(), super.destroy(), this;
    }
    find(g) {
      return this._generalFind(g, !1);
    }
    findOne(g) {
      var d = this._generalFind(g, !0);
      return d.length > 0 ? d[0] : void 0;
    }
    _generalFind(g, d) {
      var i = [];
      return this._descendants((c) => {
        const v = c._isMatch(g);
        return v && i.push(c), !!(v && d);
      }), i;
    }
    _descendants(g) {
      let d = !1;
      const i = this.getChildren();
      for (const c of i) {
        if (d = g(c), d)
          return !0;
        if (c.hasChildren() && (d = c._descendants(g), d))
          return !0;
      }
      return !1;
    }
    toObject() {
      var g = l.Node.prototype.toObject.call(this);
      return g.children = [], this.getChildren().forEach((d) => {
        g.children.push(d.toObject());
      }), g;
    }
    isAncestorOf(g) {
      for (var d = g.getParent(); d; ) {
        if (d._id === this._id)
          return !0;
        d = d.getParent();
      }
      return !1;
    }
    clone(g) {
      var d = l.Node.prototype.clone.call(this, g);
      return this.getChildren().forEach(function(i) {
        d.add(i.clone());
      }), d;
    }
    getAllIntersections(g) {
      var d = [];
      return this.find("Shape").forEach((i) => {
        i.isVisible() && i.intersects(g) && d.push(i);
      }), d;
    }
    _clearSelfAndDescendantCache(g) {
      var d;
      super._clearSelfAndDescendantCache(g), !this.isCached() && ((d = this.children) === null || d === void 0 || d.forEach(function(i) {
        i._clearSelfAndDescendantCache(g);
      }));
    }
    _setChildrenIndices() {
      var g;
      (g = this.children) === null || g === void 0 || g.forEach(function(d, i) {
        d.index = i;
      }), this._requestDraw();
    }
    drawScene(g, d, i) {
      var c = this.getLayer(), v = g || c && c.getCanvas(), S = v && v.getContext(), p = this._getCanvasCache(), b = p && p.scene, u = v && v.isCache;
      if (!this.isVisible() && !u)
        return this;
      if (b) {
        S.save();
        var s = this.getAbsoluteTransform(d).getMatrix();
        S.transform(s[0], s[1], s[2], s[3], s[4], s[5]), this._drawCachedSceneCanvas(S), S.restore();
      } else
        this._drawChildren("drawScene", v, d, i);
      return this;
    }
    drawHit(g, d) {
      if (!this.shouldDrawHit(d))
        return this;
      var i = this.getLayer(), c = g || i && i.hitCanvas, v = c && c.getContext(), S = this._getCanvasCache(), p = S && S.hit;
      if (p) {
        v.save();
        var b = this.getAbsoluteTransform(d).getMatrix();
        v.transform(b[0], b[1], b[2], b[3], b[4], b[5]), this._drawCachedHitCanvas(v), v.restore();
      } else
        this._drawChildren("drawHit", c, d);
      return this;
    }
    _drawChildren(g, d, i, c) {
      var v, S = d && d.getContext(), p = this.clipWidth(), b = this.clipHeight(), u = this.clipFunc(), s = typeof p == "number" && typeof b == "number" || u;
      const m = i === this;
      if (s) {
        S.save();
        var y = this.getAbsoluteTransform(i), P = y.getMatrix();
        S.transform(P[0], P[1], P[2], P[3], P[4], P[5]), S.beginPath();
        let R;
        if (u)
          R = u.call(this, S, this);
        else {
          var h = this.clipX(), n = this.clipY();
          S.rect(h || 0, n || 0, p, b);
        }
        S.clip.apply(S, R), P = y.copy().invert().getMatrix(), S.transform(P[0], P[1], P[2], P[3], P[4], P[5]);
      }
      var T = !m && this.globalCompositeOperation() !== "source-over" && g === "drawScene";
      T && (S.save(), S._applyGlobalCompositeOperation(this)), (v = this.children) === null || v === void 0 || v.forEach(function(R) {
        R[g](d, i, c);
      }), T && S.restore(), s && S.restore();
    }
    getClientRect(g = {}) {
      var d, i = g.skipTransform, c = g.relativeTo, v, S, p, b, u = {
        x: 1 / 0,
        y: 1 / 0,
        width: 0,
        height: 0
      }, s = this;
      (d = this.children) === null || d === void 0 || d.forEach(function(n) {
        if (n.visible()) {
          var T = n.getClientRect({
            relativeTo: s,
            skipShadow: g.skipShadow,
            skipStroke: g.skipStroke
          });
          T.width === 0 && T.height === 0 || (v === void 0 ? (v = T.x, S = T.y, p = T.x + T.width, b = T.y + T.height) : (v = Math.min(v, T.x), S = Math.min(S, T.y), p = Math.max(p, T.x + T.width), b = Math.max(b, T.y + T.height)));
        }
      });
      for (var m = this.find("Shape"), y = !1, P = 0; P < m.length; P++) {
        var h = m[P];
        if (h._isVisible(this)) {
          y = !0;
          break;
        }
      }
      return y && v !== void 0 ? u = {
        x: v,
        y: S,
        width: p - v,
        height: b - S
      } : u = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      }, i ? u : this._transformedRect(u, c);
    }
  };
  return Jt.Container = f, t.Factory.addComponentsGetterSetter(f, "clip", [
    "x",
    "y",
    "width",
    "height"
  ]), t.Factory.addGetterSetter(f, "clipX", void 0, (0, A.getNumberValidator)()), t.Factory.addGetterSetter(f, "clipY", void 0, (0, A.getNumberValidator)()), t.Factory.addGetterSetter(f, "clipWidth", void 0, (0, A.getNumberValidator)()), t.Factory.addGetterSetter(f, "clipHeight", void 0, (0, A.getNumberValidator)()), t.Factory.addGetterSetter(f, "clipFunc"), Jt;
}
var Bi = {}, qe = {}, sa;
function Ts() {
  if (sa) return qe;
  sa = 1, Object.defineProperty(qe, "__esModule", { value: !0 }), qe.releaseCapture = qe.setPointerCapture = qe.hasPointerCapture = qe.createEvent = qe.getCapturedShape = void 0;
  const t = oe(), l = /* @__PURE__ */ new Map(), A = t.Konva._global.PointerEvent !== void 0;
  function f(c) {
    return l.get(c);
  }
  qe.getCapturedShape = f;
  function C(c) {
    return {
      evt: c,
      pointerId: c.pointerId
    };
  }
  qe.createEvent = C;
  function g(c, v) {
    return l.get(c) === v;
  }
  qe.hasPointerCapture = g;
  function d(c, v) {
    i(c), v.getStage() && (l.set(c, v), A && v._fire("gotpointercapture", C(new PointerEvent("gotpointercapture"))));
  }
  qe.setPointerCapture = d;
  function i(c, v) {
    const S = l.get(c);
    if (!S)
      return;
    const p = S.getStage();
    p && p.content, l.delete(c), A && S._fire("lostpointercapture", C(new PointerEvent("lostpointercapture")));
  }
  return qe.releaseCapture = i, qe;
}
var oa;
function Ed() {
  return oa || (oa = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.Stage = t.stages = void 0;
    const l = Re(), A = le(), f = gi(), C = oe(), g = fi(), d = nn(), i = oe(), c = Ts();
    var v = "Stage", S = "string", p = "px", b = "mouseout", u = "mouseleave", s = "mouseover", m = "mouseenter", y = "mousemove", P = "mousedown", h = "mouseup", n = "pointermove", T = "pointerdown", R = "pointerup", D = "pointercancel", k = "lostpointercapture", x = "pointerout", G = "pointerleave", E = "pointerover", N = "pointerenter", F = "contextmenu", o = "touchstart", w = "touchend", L = "touchmove", O = "touchcancel", I = "wheel", H = 5, B = [
      [m, "_pointerenter"],
      [P, "_pointerdown"],
      [y, "_pointermove"],
      [h, "_pointerup"],
      [u, "_pointerleave"],
      [o, "_pointerdown"],
      [L, "_pointermove"],
      [w, "_pointerup"],
      [O, "_pointercancel"],
      [s, "_pointerover"],
      [I, "_wheel"],
      [F, "_contextmenu"],
      [T, "_pointerdown"],
      [n, "_pointermove"],
      [R, "_pointerup"],
      [D, "_pointercancel"],
      [k, "_lostpointercapture"]
    ];
    const $ = {
      mouse: {
        [x]: b,
        [G]: u,
        [E]: s,
        [N]: m,
        [n]: y,
        [T]: P,
        [R]: h,
        [D]: "mousecancel",
        pointerclick: "click",
        pointerdblclick: "dblclick"
      },
      touch: {
        [x]: "touchout",
        [G]: "touchleave",
        [E]: "touchover",
        [N]: "touchenter",
        [n]: L,
        [T]: o,
        [R]: w,
        [D]: O,
        pointerclick: "tap",
        pointerdblclick: "dbltap"
      },
      pointer: {
        [x]: x,
        [G]: G,
        [E]: E,
        [N]: N,
        [n]: n,
        [T]: T,
        [R]: R,
        [D]: D,
        pointerclick: "pointerclick",
        pointerdblclick: "pointerdblclick"
      }
    }, z = (J) => J.indexOf("pointer") >= 0 ? "pointer" : J.indexOf("touch") >= 0 ? "touch" : "mouse", Z = (J) => {
      const Y = z(J);
      if (Y === "pointer")
        return C.Konva.pointerEventsEnabled && $.pointer;
      if (Y === "touch")
        return $.touch;
      if (Y === "mouse")
        return $.mouse;
    };
    function W(J = {}) {
      return (J.clipFunc || J.clipWidth || J.clipHeight) && l.Util.warn("Stage does not support clipping. Please use clip for Layers or Groups."), J;
    }
    const j = "Pointer position is missing and not registered by the stage. Looks like it is outside of the stage container. You can set it manually from event: stage.setPointersPositions(event);";
    t.stages = [];
    class q extends f.Container {
      constructor(Y) {
        super(W(Y)), this._pointerPositions = [], this._changedPointerPositions = [], this._buildDOM(), this._bindContentEvents(), t.stages.push(this), this.on("widthChange.konva heightChange.konva", this._resizeDOM), this.on("visibleChange.konva", this._checkVisibility), this.on("clipWidthChange.konva clipHeightChange.konva clipFuncChange.konva", () => {
          W(this.attrs);
        }), this._checkVisibility();
      }
      _validateAdd(Y) {
        const V = Y.getType() === "Layer", X = Y.getType() === "FastLayer";
        V || X || l.Util.throw("You may only add layers to the stage.");
      }
      _checkVisibility() {
        if (!this.content)
          return;
        const Y = this.visible() ? "" : "none";
        this.content.style.display = Y;
      }
      setContainer(Y) {
        if (typeof Y === S) {
          if (Y.charAt(0) === ".") {
            var V = Y.slice(1);
            Y = document.getElementsByClassName(V)[0];
          } else {
            var X;
            Y.charAt(0) !== "#" ? X = Y : X = Y.slice(1), Y = document.getElementById(X);
          }
          if (!Y)
            throw "Can not find container in document with id " + X;
        }
        return this._setAttr("container", Y), this.content && (this.content.parentElement && this.content.parentElement.removeChild(this.content), Y.appendChild(this.content)), this;
      }
      shouldDrawHit() {
        return !0;
      }
      clear() {
        var Y = this.children, V = Y.length, X;
        for (X = 0; X < V; X++)
          Y[X].clear();
        return this;
      }
      clone(Y) {
        return Y || (Y = {}), Y.container = typeof document < "u" && document.createElement("div"), f.Container.prototype.clone.call(this, Y);
      }
      destroy() {
        super.destroy();
        var Y = this.content;
        Y && l.Util._isInDocument(Y) && this.container().removeChild(Y);
        var V = t.stages.indexOf(this);
        return V > -1 && t.stages.splice(V, 1), l.Util.releaseCanvas(this.bufferCanvas._canvas, this.bufferHitCanvas._canvas), this;
      }
      getPointerPosition() {
        const Y = this._pointerPositions[0] || this._changedPointerPositions[0];
        return Y ? {
          x: Y.x,
          y: Y.y
        } : (l.Util.warn(j), null);
      }
      _getPointerById(Y) {
        return this._pointerPositions.find((V) => V.id === Y);
      }
      getPointersPositions() {
        return this._pointerPositions;
      }
      getStage() {
        return this;
      }
      getContent() {
        return this.content;
      }
      _toKonvaCanvas(Y) {
        Y = Y || {}, Y.x = Y.x || 0, Y.y = Y.y || 0, Y.width = Y.width || this.width(), Y.height = Y.height || this.height();
        var V = new g.SceneCanvas({
          width: Y.width,
          height: Y.height,
          pixelRatio: Y.pixelRatio || 1
        }), X = V.getContext()._context, re = this.children;
        return (Y.x || Y.y) && X.translate(-1 * Y.x, -1 * Y.y), re.forEach(function(ie) {
          if (ie.isVisible()) {
            var ne = ie._toKonvaCanvas(Y);
            X.drawImage(ne._canvas, Y.x, Y.y, ne.getWidth() / ne.getPixelRatio(), ne.getHeight() / ne.getPixelRatio());
          }
        }), V;
      }
      getIntersection(Y) {
        if (!Y)
          return null;
        var V = this.children, X = V.length, re = X - 1, ie;
        for (ie = re; ie >= 0; ie--) {
          const ne = V[ie].getIntersection(Y);
          if (ne)
            return ne;
        }
        return null;
      }
      _resizeDOM() {
        var Y = this.width(), V = this.height();
        this.content && (this.content.style.width = Y + p, this.content.style.height = V + p), this.bufferCanvas.setSize(Y, V), this.bufferHitCanvas.setSize(Y, V), this.children.forEach((X) => {
          X.setSize({ width: Y, height: V }), X.draw();
        });
      }
      add(Y, ...V) {
        if (arguments.length > 1) {
          for (var X = 0; X < arguments.length; X++)
            this.add(arguments[X]);
          return this;
        }
        super.add(Y);
        var re = this.children.length;
        return re > H && l.Util.warn("The stage has " + re + " layers. Recommended maximum number of layers is 3-5. Adding more layers into the stage may drop the performance. Rethink your tree structure, you can use Konva.Group."), Y.setSize({ width: this.width(), height: this.height() }), Y.draw(), C.Konva.isBrowser && this.content.appendChild(Y.canvas._canvas), this;
      }
      getParent() {
        return null;
      }
      getLayer() {
        return null;
      }
      hasPointerCapture(Y) {
        return c.hasPointerCapture(Y, this);
      }
      setPointerCapture(Y) {
        c.setPointerCapture(Y, this);
      }
      releaseCapture(Y) {
        c.releaseCapture(Y, this);
      }
      getLayers() {
        return this.children;
      }
      _bindContentEvents() {
        C.Konva.isBrowser && B.forEach(([Y, V]) => {
          this.content.addEventListener(Y, (X) => {
            this[V](X);
          }, { passive: !1 });
        });
      }
      _pointerenter(Y) {
        this.setPointersPositions(Y);
        const V = Z(Y.type);
        V && this._fire(V.pointerenter, {
          evt: Y,
          target: this,
          currentTarget: this
        });
      }
      _pointerover(Y) {
        this.setPointersPositions(Y);
        const V = Z(Y.type);
        V && this._fire(V.pointerover, {
          evt: Y,
          target: this,
          currentTarget: this
        });
      }
      _getTargetShape(Y) {
        let V = this[Y + "targetShape"];
        return V && !V.getStage() && (V = null), V;
      }
      _pointerleave(Y) {
        const V = Z(Y.type), X = z(Y.type);
        if (V) {
          this.setPointersPositions(Y);
          var re = this._getTargetShape(X), ie = !(C.Konva.isDragging() || C.Konva.isTransforming()) || C.Konva.hitOnDragEnabled;
          re && ie ? (re._fireAndBubble(V.pointerout, { evt: Y }), re._fireAndBubble(V.pointerleave, { evt: Y }), this._fire(V.pointerleave, {
            evt: Y,
            target: this,
            currentTarget: this
          }), this[X + "targetShape"] = null) : ie && (this._fire(V.pointerleave, {
            evt: Y,
            target: this,
            currentTarget: this
          }), this._fire(V.pointerout, {
            evt: Y,
            target: this,
            currentTarget: this
          })), this.pointerPos = null, this._pointerPositions = [];
        }
      }
      _pointerdown(Y) {
        const V = Z(Y.type), X = z(Y.type);
        if (V) {
          this.setPointersPositions(Y);
          var re = !1;
          this._changedPointerPositions.forEach((ie) => {
            var ne = this.getIntersection(ie);
            if (d.DD.justDragged = !1, C.Konva["_" + X + "ListenClick"] = !0, !ne || !ne.isListening()) {
              this[X + "ClickStartShape"] = void 0;
              return;
            }
            C.Konva.capturePointerEventsEnabled && ne.setPointerCapture(ie.id), this[X + "ClickStartShape"] = ne, ne._fireAndBubble(V.pointerdown, {
              evt: Y,
              pointerId: ie.id
            }), re = !0;
            const pe = Y.type.indexOf("touch") >= 0;
            ne.preventDefault() && Y.cancelable && pe && Y.preventDefault();
          }), re || this._fire(V.pointerdown, {
            evt: Y,
            target: this,
            currentTarget: this,
            pointerId: this._pointerPositions[0].id
          });
        }
      }
      _pointermove(Y) {
        const V = Z(Y.type), X = z(Y.type);
        if (!V)
          return;
        C.Konva.isDragging() && d.DD.node.preventDefault() && Y.cancelable && Y.preventDefault(), this.setPointersPositions(Y);
        var re = !(C.Konva.isDragging() || C.Konva.isTransforming()) || C.Konva.hitOnDragEnabled;
        if (!re)
          return;
        var ie = {};
        let ne = !1;
        var pe = this._getTargetShape(X);
        this._changedPointerPositions.forEach((me) => {
          const se = c.getCapturedShape(me.id) || this.getIntersection(me), De = me.id, ve = { evt: Y, pointerId: De };
          var be = pe !== se;
          if (be && pe && (pe._fireAndBubble(V.pointerout, { ...ve }, se), pe._fireAndBubble(V.pointerleave, { ...ve }, se)), se) {
            if (ie[se._id])
              return;
            ie[se._id] = !0;
          }
          se && se.isListening() ? (ne = !0, be && (se._fireAndBubble(V.pointerover, { ...ve }, pe), se._fireAndBubble(V.pointerenter, { ...ve }, pe), this[X + "targetShape"] = se), se._fireAndBubble(V.pointermove, { ...ve })) : pe && (this._fire(V.pointerover, {
            evt: Y,
            target: this,
            currentTarget: this,
            pointerId: De
          }), this[X + "targetShape"] = null);
        }), ne || this._fire(V.pointermove, {
          evt: Y,
          target: this,
          currentTarget: this,
          pointerId: this._changedPointerPositions[0].id
        });
      }
      _pointerup(Y) {
        const V = Z(Y.type), X = z(Y.type);
        if (!V)
          return;
        this.setPointersPositions(Y);
        const re = this[X + "ClickStartShape"], ie = this[X + "ClickEndShape"];
        var ne = {};
        let pe = !1;
        this._changedPointerPositions.forEach((me) => {
          const se = c.getCapturedShape(me.id) || this.getIntersection(me);
          if (se) {
            if (se.releaseCapture(me.id), ne[se._id])
              return;
            ne[se._id] = !0;
          }
          const De = me.id, ve = { evt: Y, pointerId: De };
          let be = !1;
          C.Konva["_" + X + "InDblClickWindow"] ? (be = !0, clearTimeout(this[X + "DblTimeout"])) : d.DD.justDragged || (C.Konva["_" + X + "InDblClickWindow"] = !0, clearTimeout(this[X + "DblTimeout"])), this[X + "DblTimeout"] = setTimeout(function() {
            C.Konva["_" + X + "InDblClickWindow"] = !1;
          }, C.Konva.dblClickWindow), se && se.isListening() ? (pe = !0, this[X + "ClickEndShape"] = se, se._fireAndBubble(V.pointerup, { ...ve }), C.Konva["_" + X + "ListenClick"] && re && re === se && (se._fireAndBubble(V.pointerclick, { ...ve }), be && ie && ie === se && se._fireAndBubble(V.pointerdblclick, { ...ve }))) : (this[X + "ClickEndShape"] = null, C.Konva["_" + X + "ListenClick"] && this._fire(V.pointerclick, {
            evt: Y,
            target: this,
            currentTarget: this,
            pointerId: De
          }), be && this._fire(V.pointerdblclick, {
            evt: Y,
            target: this,
            currentTarget: this,
            pointerId: De
          }));
        }), pe || this._fire(V.pointerup, {
          evt: Y,
          target: this,
          currentTarget: this,
          pointerId: this._changedPointerPositions[0].id
        }), C.Konva["_" + X + "ListenClick"] = !1, Y.cancelable && X !== "touch" && Y.preventDefault();
      }
      _contextmenu(Y) {
        this.setPointersPositions(Y);
        var V = this.getIntersection(this.getPointerPosition());
        V && V.isListening() ? V._fireAndBubble(F, { evt: Y }) : this._fire(F, {
          evt: Y,
          target: this,
          currentTarget: this
        });
      }
      _wheel(Y) {
        this.setPointersPositions(Y);
        var V = this.getIntersection(this.getPointerPosition());
        V && V.isListening() ? V._fireAndBubble(I, { evt: Y }) : this._fire(I, {
          evt: Y,
          target: this,
          currentTarget: this
        });
      }
      _pointercancel(Y) {
        this.setPointersPositions(Y);
        const V = c.getCapturedShape(Y.pointerId) || this.getIntersection(this.getPointerPosition());
        V && V._fireAndBubble(R, c.createEvent(Y)), c.releaseCapture(Y.pointerId);
      }
      _lostpointercapture(Y) {
        c.releaseCapture(Y.pointerId);
      }
      setPointersPositions(Y) {
        var V = this._getContentPosition(), X = null, re = null;
        Y = Y || window.event, Y.touches !== void 0 ? (this._pointerPositions = [], this._changedPointerPositions = [], Array.prototype.forEach.call(Y.touches, (ie) => {
          this._pointerPositions.push({
            id: ie.identifier,
            x: (ie.clientX - V.left) / V.scaleX,
            y: (ie.clientY - V.top) / V.scaleY
          });
        }), Array.prototype.forEach.call(Y.changedTouches || Y.touches, (ie) => {
          this._changedPointerPositions.push({
            id: ie.identifier,
            x: (ie.clientX - V.left) / V.scaleX,
            y: (ie.clientY - V.top) / V.scaleY
          });
        })) : (X = (Y.clientX - V.left) / V.scaleX, re = (Y.clientY - V.top) / V.scaleY, this.pointerPos = {
          x: X,
          y: re
        }, this._pointerPositions = [{ x: X, y: re, id: l.Util._getFirstPointerId(Y) }], this._changedPointerPositions = [
          { x: X, y: re, id: l.Util._getFirstPointerId(Y) }
        ]);
      }
      _setPointerPosition(Y) {
        l.Util.warn('Method _setPointerPosition is deprecated. Use "stage.setPointersPositions(event)" instead.'), this.setPointersPositions(Y);
      }
      _getContentPosition() {
        if (!this.content || !this.content.getBoundingClientRect)
          return {
            top: 0,
            left: 0,
            scaleX: 1,
            scaleY: 1
          };
        var Y = this.content.getBoundingClientRect();
        return {
          top: Y.top,
          left: Y.left,
          scaleX: Y.width / this.content.clientWidth || 1,
          scaleY: Y.height / this.content.clientHeight || 1
        };
      }
      _buildDOM() {
        if (this.bufferCanvas = new g.SceneCanvas({
          width: this.width(),
          height: this.height()
        }), this.bufferHitCanvas = new g.HitCanvas({
          pixelRatio: 1,
          width: this.width(),
          height: this.height()
        }), !!C.Konva.isBrowser) {
          var Y = this.container();
          if (!Y)
            throw "Stage has no container. A container is required.";
          Y.innerHTML = "", this.content = document.createElement("div"), this.content.style.position = "relative", this.content.style.userSelect = "none", this.content.className = "konvajs-content", this.content.setAttribute("role", "presentation"), Y.appendChild(this.content), this._resizeDOM();
        }
      }
      cache() {
        return l.Util.warn("Cache function is not allowed for stage. You may use cache only for layers, groups and shapes."), this;
      }
      clearCache() {
        return this;
      }
      batchDraw() {
        return this.getChildren().forEach(function(Y) {
          Y.batchDraw();
        }), this;
      }
    }
    t.Stage = q, q.prototype.nodeType = v, (0, i._registerNode)(q), A.Factory.addGetterSetter(q, "container"), C.Konva.isBrowser && document.addEventListener("visibilitychange", () => {
      t.stages.forEach((J) => {
        J.batchDraw();
      });
    });
  }(Bi)), Bi;
}
var er = {}, Vi = {}, la;
function Ie() {
  return la || (la = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.Shape = t.shapes = void 0;
    const l = oe(), A = Re(), f = le(), C = Me(), g = he(), d = oe(), i = Ts();
    var c = "hasShadow", v = "shadowRGBA", S = "patternImage", p = "linearGradient", b = "radialGradient";
    let u;
    function s() {
      return u || (u = A.Util.createCanvasElement().getContext("2d"), u);
    }
    t.shapes = {};
    function m(G) {
      const E = this.attrs.fillRule;
      E ? G.fill(E) : G.fill();
    }
    function y(G) {
      G.stroke();
    }
    function P(G) {
      const E = this.attrs.fillRule;
      E ? G.fill(E) : G.fill();
    }
    function h(G) {
      G.stroke();
    }
    function n() {
      this._clearCache(c);
    }
    function T() {
      this._clearCache(v);
    }
    function R() {
      this._clearCache(S);
    }
    function D() {
      this._clearCache(p);
    }
    function k() {
      this._clearCache(b);
    }
    class x extends C.Node {
      constructor(E) {
        super(E);
        let N;
        for (; N = A.Util.getRandomColor(), !(N && !(N in t.shapes)); )
          ;
        this.colorKey = N, t.shapes[N] = this;
      }
      getContext() {
        return A.Util.warn("shape.getContext() method is deprecated. Please do not use it."), this.getLayer().getContext();
      }
      getCanvas() {
        return A.Util.warn("shape.getCanvas() method is deprecated. Please do not use it."), this.getLayer().getCanvas();
      }
      getSceneFunc() {
        return this.attrs.sceneFunc || this._sceneFunc;
      }
      getHitFunc() {
        return this.attrs.hitFunc || this._hitFunc;
      }
      hasShadow() {
        return this._getCache(c, this._hasShadow);
      }
      _hasShadow() {
        return this.shadowEnabled() && this.shadowOpacity() !== 0 && !!(this.shadowColor() || this.shadowBlur() || this.shadowOffsetX() || this.shadowOffsetY());
      }
      _getFillPattern() {
        return this._getCache(S, this.__getFillPattern);
      }
      __getFillPattern() {
        if (this.fillPatternImage()) {
          var E = s();
          const N = E.createPattern(this.fillPatternImage(), this.fillPatternRepeat() || "repeat");
          if (N && N.setTransform) {
            const F = new A.Transform();
            F.translate(this.fillPatternX(), this.fillPatternY()), F.rotate(l.Konva.getAngle(this.fillPatternRotation())), F.scale(this.fillPatternScaleX(), this.fillPatternScaleY()), F.translate(-1 * this.fillPatternOffsetX(), -1 * this.fillPatternOffsetY());
            const o = F.getMatrix(), w = typeof DOMMatrix > "u" ? {
              a: o[0],
              b: o[1],
              c: o[2],
              d: o[3],
              e: o[4],
              f: o[5]
            } : new DOMMatrix(o);
            N.setTransform(w);
          }
          return N;
        }
      }
      _getLinearGradient() {
        return this._getCache(p, this.__getLinearGradient);
      }
      __getLinearGradient() {
        var E = this.fillLinearGradientColorStops();
        if (E) {
          for (var N = s(), F = this.fillLinearGradientStartPoint(), o = this.fillLinearGradientEndPoint(), w = N.createLinearGradient(F.x, F.y, o.x, o.y), L = 0; L < E.length; L += 2)
            w.addColorStop(E[L], E[L + 1]);
          return w;
        }
      }
      _getRadialGradient() {
        return this._getCache(b, this.__getRadialGradient);
      }
      __getRadialGradient() {
        var E = this.fillRadialGradientColorStops();
        if (E) {
          for (var N = s(), F = this.fillRadialGradientStartPoint(), o = this.fillRadialGradientEndPoint(), w = N.createRadialGradient(F.x, F.y, this.fillRadialGradientStartRadius(), o.x, o.y, this.fillRadialGradientEndRadius()), L = 0; L < E.length; L += 2)
            w.addColorStop(E[L], E[L + 1]);
          return w;
        }
      }
      getShadowRGBA() {
        return this._getCache(v, this._getShadowRGBA);
      }
      _getShadowRGBA() {
        if (this.hasShadow()) {
          var E = A.Util.colorToRGBA(this.shadowColor());
          if (E)
            return "rgba(" + E.r + "," + E.g + "," + E.b + "," + E.a * (this.shadowOpacity() || 1) + ")";
        }
      }
      hasFill() {
        return this._calculate("hasFill", [
          "fillEnabled",
          "fill",
          "fillPatternImage",
          "fillLinearGradientColorStops",
          "fillRadialGradientColorStops"
        ], () => this.fillEnabled() && !!(this.fill() || this.fillPatternImage() || this.fillLinearGradientColorStops() || this.fillRadialGradientColorStops()));
      }
      hasStroke() {
        return this._calculate("hasStroke", [
          "strokeEnabled",
          "strokeWidth",
          "stroke",
          "strokeLinearGradientColorStops"
        ], () => this.strokeEnabled() && this.strokeWidth() && !!(this.stroke() || this.strokeLinearGradientColorStops()));
      }
      hasHitStroke() {
        const E = this.hitStrokeWidth();
        return E === "auto" ? this.hasStroke() : this.strokeEnabled() && !!E;
      }
      intersects(E) {
        var N = this.getStage();
        if (!N)
          return !1;
        const F = N.bufferHitCanvas;
        return F.getContext().clear(), this.drawHit(F, void 0, !0), F.context.getImageData(Math.round(E.x), Math.round(E.y), 1, 1).data[3] > 0;
      }
      destroy() {
        return C.Node.prototype.destroy.call(this), delete t.shapes[this.colorKey], delete this.colorKey, this;
      }
      _useBufferCanvas(E) {
        var N;
        if (!((N = this.attrs.perfectDrawEnabled) !== null && N !== void 0 ? N : !0))
          return !1;
        const o = E || this.hasFill(), w = this.hasStroke(), L = this.getAbsoluteOpacity() !== 1;
        if (o && w && L)
          return !0;
        const O = this.hasShadow(), I = this.shadowForStrokeEnabled();
        return !!(o && w && O && I);
      }
      setStrokeHitEnabled(E) {
        A.Util.warn("strokeHitEnabled property is deprecated. Please use hitStrokeWidth instead."), E ? this.hitStrokeWidth("auto") : this.hitStrokeWidth(0);
      }
      getStrokeHitEnabled() {
        return this.hitStrokeWidth() !== 0;
      }
      getSelfRect() {
        var E = this.size();
        return {
          x: this._centroid ? -E.width / 2 : 0,
          y: this._centroid ? -E.height / 2 : 0,
          width: E.width,
          height: E.height
        };
      }
      getClientRect(E = {}) {
        let N = !1, F = this.getParent();
        for (; F; ) {
          if (F.isCached()) {
            N = !0;
            break;
          }
          F = F.getParent();
        }
        const o = E.skipTransform, w = E.relativeTo || N && this.getStage() || void 0, L = this.getSelfRect(), I = !E.skipStroke && this.hasStroke() && this.strokeWidth() || 0, H = L.width + I, B = L.height + I, $ = !E.skipShadow && this.hasShadow(), z = $ ? this.shadowOffsetX() : 0, Z = $ ? this.shadowOffsetY() : 0, W = H + Math.abs(z), j = B + Math.abs(Z), q = $ && this.shadowBlur() || 0, J = W + q * 2, Y = j + q * 2, V = {
          width: J,
          height: Y,
          x: -(I / 2 + q) + Math.min(z, 0) + L.x,
          y: -(I / 2 + q) + Math.min(Z, 0) + L.y
        };
        return o ? V : this._transformedRect(V, w);
      }
      drawScene(E, N, F) {
        var o = this.getLayer(), w = E || o.getCanvas(), L = w.getContext(), O = this._getCanvasCache(), I = this.getSceneFunc(), H = this.hasShadow(), B, $, z = w.isCache, Z = N === this;
        if (!this.isVisible() && !Z)
          return this;
        if (O) {
          L.save();
          var W = this.getAbsoluteTransform(N).getMatrix();
          return L.transform(W[0], W[1], W[2], W[3], W[4], W[5]), this._drawCachedSceneCanvas(L), L.restore(), this;
        }
        if (!I)
          return this;
        if (L.save(), this._useBufferCanvas() && !z) {
          B = this.getStage();
          const J = F || B.bufferCanvas;
          $ = J.getContext(), $.clear(), $.save(), $._applyLineJoin(this);
          var j = this.getAbsoluteTransform(N).getMatrix();
          $.transform(j[0], j[1], j[2], j[3], j[4], j[5]), I.call(this, $, this), $.restore();
          var q = J.pixelRatio;
          H && L._applyShadow(this), L._applyOpacity(this), L._applyGlobalCompositeOperation(this), L.drawImage(J._canvas, 0, 0, J.width / q, J.height / q);
        } else {
          if (L._applyLineJoin(this), !Z) {
            var j = this.getAbsoluteTransform(N).getMatrix();
            L.transform(j[0], j[1], j[2], j[3], j[4], j[5]), L._applyOpacity(this), L._applyGlobalCompositeOperation(this);
          }
          H && L._applyShadow(this), I.call(this, L, this);
        }
        return L.restore(), this;
      }
      drawHit(E, N, F = !1) {
        if (!this.shouldDrawHit(N, F))
          return this;
        var o = this.getLayer(), w = E || o.hitCanvas, L = w && w.getContext(), O = this.hitFunc() || this.sceneFunc(), I = this._getCanvasCache(), H = I && I.hit;
        if (this.colorKey || A.Util.warn("Looks like your canvas has a destroyed shape in it. Do not reuse shape after you destroyed it. If you want to reuse shape you should call remove() instead of destroy()"), H) {
          L.save();
          var B = this.getAbsoluteTransform(N).getMatrix();
          return L.transform(B[0], B[1], B[2], B[3], B[4], B[5]), this._drawCachedHitCanvas(L), L.restore(), this;
        }
        if (!O)
          return this;
        if (L.save(), L._applyLineJoin(this), !(this === N)) {
          var z = this.getAbsoluteTransform(N).getMatrix();
          L.transform(z[0], z[1], z[2], z[3], z[4], z[5]);
        }
        return O.call(this, L, this), L.restore(), this;
      }
      drawHitFromCache(E = 0) {
        var N = this._getCanvasCache(), F = this._getCachedSceneCanvas(), o = N.hit, w = o.getContext(), L = o.getWidth(), O = o.getHeight(), I, H, B, $, z, Z;
        w.clear(), w.drawImage(F._canvas, 0, 0, L, O);
        try {
          for (I = w.getImageData(0, 0, L, O), H = I.data, B = H.length, $ = A.Util._hexToRgb(this.colorKey), z = 0; z < B; z += 4)
            Z = H[z + 3], Z > E ? (H[z] = $.r, H[z + 1] = $.g, H[z + 2] = $.b, H[z + 3] = 255) : H[z + 3] = 0;
          w.putImageData(I, 0, 0);
        } catch (W) {
          A.Util.error("Unable to draw hit graph from cached scene canvas. " + W.message);
        }
        return this;
      }
      hasPointerCapture(E) {
        return i.hasPointerCapture(E, this);
      }
      setPointerCapture(E) {
        i.setPointerCapture(E, this);
      }
      releaseCapture(E) {
        i.releaseCapture(E, this);
      }
    }
    t.Shape = x, x.prototype._fillFunc = m, x.prototype._strokeFunc = y, x.prototype._fillFuncHit = P, x.prototype._strokeFuncHit = h, x.prototype._centroid = !1, x.prototype.nodeType = "Shape", (0, d._registerNode)(x), x.prototype.eventListeners = {}, x.prototype.on.call(x.prototype, "shadowColorChange.konva shadowBlurChange.konva shadowOffsetChange.konva shadowOpacityChange.konva shadowEnabledChange.konva", n), x.prototype.on.call(x.prototype, "shadowColorChange.konva shadowOpacityChange.konva shadowEnabledChange.konva", T), x.prototype.on.call(x.prototype, "fillPriorityChange.konva fillPatternImageChange.konva fillPatternRepeatChange.konva fillPatternScaleXChange.konva fillPatternScaleYChange.konva fillPatternOffsetXChange.konva fillPatternOffsetYChange.konva fillPatternXChange.konva fillPatternYChange.konva fillPatternRotationChange.konva", R), x.prototype.on.call(x.prototype, "fillPriorityChange.konva fillLinearGradientColorStopsChange.konva fillLinearGradientStartPointXChange.konva fillLinearGradientStartPointYChange.konva fillLinearGradientEndPointXChange.konva fillLinearGradientEndPointYChange.konva", D), x.prototype.on.call(x.prototype, "fillPriorityChange.konva fillRadialGradientColorStopsChange.konva fillRadialGradientStartPointXChange.konva fillRadialGradientStartPointYChange.konva fillRadialGradientEndPointXChange.konva fillRadialGradientEndPointYChange.konva fillRadialGradientStartRadiusChange.konva fillRadialGradientEndRadiusChange.konva", k), f.Factory.addGetterSetter(x, "stroke", void 0, (0, g.getStringOrGradientValidator)()), f.Factory.addGetterSetter(x, "strokeWidth", 2, (0, g.getNumberValidator)()), f.Factory.addGetterSetter(x, "fillAfterStrokeEnabled", !1), f.Factory.addGetterSetter(x, "hitStrokeWidth", "auto", (0, g.getNumberOrAutoValidator)()), f.Factory.addGetterSetter(x, "strokeHitEnabled", !0, (0, g.getBooleanValidator)()), f.Factory.addGetterSetter(x, "perfectDrawEnabled", !0, (0, g.getBooleanValidator)()), f.Factory.addGetterSetter(x, "shadowForStrokeEnabled", !0, (0, g.getBooleanValidator)()), f.Factory.addGetterSetter(x, "lineJoin"), f.Factory.addGetterSetter(x, "lineCap"), f.Factory.addGetterSetter(x, "sceneFunc"), f.Factory.addGetterSetter(x, "hitFunc"), f.Factory.addGetterSetter(x, "dash"), f.Factory.addGetterSetter(x, "dashOffset", 0, (0, g.getNumberValidator)()), f.Factory.addGetterSetter(x, "shadowColor", void 0, (0, g.getStringValidator)()), f.Factory.addGetterSetter(x, "shadowBlur", 0, (0, g.getNumberValidator)()), f.Factory.addGetterSetter(x, "shadowOpacity", 1, (0, g.getNumberValidator)()), f.Factory.addComponentsGetterSetter(x, "shadowOffset", ["x", "y"]), f.Factory.addGetterSetter(x, "shadowOffsetX", 0, (0, g.getNumberValidator)()), f.Factory.addGetterSetter(x, "shadowOffsetY", 0, (0, g.getNumberValidator)()), f.Factory.addGetterSetter(x, "fillPatternImage"), f.Factory.addGetterSetter(x, "fill", void 0, (0, g.getStringOrGradientValidator)()), f.Factory.addGetterSetter(x, "fillPatternX", 0, (0, g.getNumberValidator)()), f.Factory.addGetterSetter(x, "fillPatternY", 0, (0, g.getNumberValidator)()), f.Factory.addGetterSetter(x, "fillLinearGradientColorStops"), f.Factory.addGetterSetter(x, "strokeLinearGradientColorStops"), f.Factory.addGetterSetter(x, "fillRadialGradientStartRadius", 0), f.Factory.addGetterSetter(x, "fillRadialGradientEndRadius", 0), f.Factory.addGetterSetter(x, "fillRadialGradientColorStops"), f.Factory.addGetterSetter(x, "fillPatternRepeat", "repeat"), f.Factory.addGetterSetter(x, "fillEnabled", !0), f.Factory.addGetterSetter(x, "strokeEnabled", !0), f.Factory.addGetterSetter(x, "shadowEnabled", !0), f.Factory.addGetterSetter(x, "dashEnabled", !0), f.Factory.addGetterSetter(x, "strokeScaleEnabled", !0), f.Factory.addGetterSetter(x, "fillPriority", "color"), f.Factory.addComponentsGetterSetter(x, "fillPatternOffset", ["x", "y"]), f.Factory.addGetterSetter(x, "fillPatternOffsetX", 0, (0, g.getNumberValidator)()), f.Factory.addGetterSetter(x, "fillPatternOffsetY", 0, (0, g.getNumberValidator)()), f.Factory.addComponentsGetterSetter(x, "fillPatternScale", ["x", "y"]), f.Factory.addGetterSetter(x, "fillPatternScaleX", 1, (0, g.getNumberValidator)()), f.Factory.addGetterSetter(x, "fillPatternScaleY", 1, (0, g.getNumberValidator)()), f.Factory.addComponentsGetterSetter(x, "fillLinearGradientStartPoint", [
      "x",
      "y"
    ]), f.Factory.addComponentsGetterSetter(x, "strokeLinearGradientStartPoint", [
      "x",
      "y"
    ]), f.Factory.addGetterSetter(x, "fillLinearGradientStartPointX", 0), f.Factory.addGetterSetter(x, "strokeLinearGradientStartPointX", 0), f.Factory.addGetterSetter(x, "fillLinearGradientStartPointY", 0), f.Factory.addGetterSetter(x, "strokeLinearGradientStartPointY", 0), f.Factory.addComponentsGetterSetter(x, "fillLinearGradientEndPoint", [
      "x",
      "y"
    ]), f.Factory.addComponentsGetterSetter(x, "strokeLinearGradientEndPoint", [
      "x",
      "y"
    ]), f.Factory.addGetterSetter(x, "fillLinearGradientEndPointX", 0), f.Factory.addGetterSetter(x, "strokeLinearGradientEndPointX", 0), f.Factory.addGetterSetter(x, "fillLinearGradientEndPointY", 0), f.Factory.addGetterSetter(x, "strokeLinearGradientEndPointY", 0), f.Factory.addComponentsGetterSetter(x, "fillRadialGradientStartPoint", [
      "x",
      "y"
    ]), f.Factory.addGetterSetter(x, "fillRadialGradientStartPointX", 0), f.Factory.addGetterSetter(x, "fillRadialGradientStartPointY", 0), f.Factory.addComponentsGetterSetter(x, "fillRadialGradientEndPoint", [
      "x",
      "y"
    ]), f.Factory.addGetterSetter(x, "fillRadialGradientEndPointX", 0), f.Factory.addGetterSetter(x, "fillRadialGradientEndPointY", 0), f.Factory.addGetterSetter(x, "fillPatternRotation", 0), f.Factory.addGetterSetter(x, "fillRule", void 0, (0, g.getStringValidator)()), f.Factory.backCompat(x, {
      dashArray: "dash",
      getDashArray: "getDash",
      setDashArray: "getDash",
      drawFunc: "sceneFunc",
      getDrawFunc: "getSceneFunc",
      setDrawFunc: "setSceneFunc",
      drawHitFunc: "hitFunc",
      getDrawHitFunc: "getHitFunc",
      setDrawHitFunc: "setHitFunc"
    });
  }(Vi)), Vi;
}
var ha;
function ws() {
  if (ha) return er;
  ha = 1, Object.defineProperty(er, "__esModule", { value: !0 }), er.Layer = void 0;
  const t = Re(), l = gi(), A = Me(), f = le(), C = fi(), g = he(), d = Ie(), i = oe();
  var c = "#", v = "beforeDraw", S = "draw", p = [
    { x: 0, y: 0 },
    { x: -1, y: -1 },
    { x: 1, y: -1 },
    { x: 1, y: 1 },
    { x: -1, y: 1 }
  ], b = p.length;
  let u = class extends l.Container {
    constructor(m) {
      super(m), this.canvas = new C.SceneCanvas(), this.hitCanvas = new C.HitCanvas({
        pixelRatio: 1
      }), this._waitingForDraw = !1, this.on("visibleChange.konva", this._checkVisibility), this._checkVisibility(), this.on("imageSmoothingEnabledChange.konva", this._setSmoothEnabled), this._setSmoothEnabled();
    }
    createPNGStream() {
      return this.canvas._canvas.createPNGStream();
    }
    getCanvas() {
      return this.canvas;
    }
    getNativeCanvasElement() {
      return this.canvas._canvas;
    }
    getHitCanvas() {
      return this.hitCanvas;
    }
    getContext() {
      return this.getCanvas().getContext();
    }
    clear(m) {
      return this.getContext().clear(m), this.getHitCanvas().getContext().clear(m), this;
    }
    setZIndex(m) {
      super.setZIndex(m);
      var y = this.getStage();
      return y && y.content && (y.content.removeChild(this.getNativeCanvasElement()), m < y.children.length - 1 ? y.content.insertBefore(this.getNativeCanvasElement(), y.children[m + 1].getCanvas()._canvas) : y.content.appendChild(this.getNativeCanvasElement())), this;
    }
    moveToTop() {
      A.Node.prototype.moveToTop.call(this);
      var m = this.getStage();
      return m && m.content && (m.content.removeChild(this.getNativeCanvasElement()), m.content.appendChild(this.getNativeCanvasElement())), !0;
    }
    moveUp() {
      var m = A.Node.prototype.moveUp.call(this);
      if (!m)
        return !1;
      var y = this.getStage();
      return !y || !y.content ? !1 : (y.content.removeChild(this.getNativeCanvasElement()), this.index < y.children.length - 1 ? y.content.insertBefore(this.getNativeCanvasElement(), y.children[this.index + 1].getCanvas()._canvas) : y.content.appendChild(this.getNativeCanvasElement()), !0);
    }
    moveDown() {
      if (A.Node.prototype.moveDown.call(this)) {
        var m = this.getStage();
        if (m) {
          var y = m.children;
          m.content && (m.content.removeChild(this.getNativeCanvasElement()), m.content.insertBefore(this.getNativeCanvasElement(), y[this.index + 1].getCanvas()._canvas));
        }
        return !0;
      }
      return !1;
    }
    moveToBottom() {
      if (A.Node.prototype.moveToBottom.call(this)) {
        var m = this.getStage();
        if (m) {
          var y = m.children;
          m.content && (m.content.removeChild(this.getNativeCanvasElement()), m.content.insertBefore(this.getNativeCanvasElement(), y[1].getCanvas()._canvas));
        }
        return !0;
      }
      return !1;
    }
    getLayer() {
      return this;
    }
    remove() {
      var m = this.getNativeCanvasElement();
      return A.Node.prototype.remove.call(this), m && m.parentNode && t.Util._isInDocument(m) && m.parentNode.removeChild(m), this;
    }
    getStage() {
      return this.parent;
    }
    setSize({ width: m, height: y }) {
      return this.canvas.setSize(m, y), this.hitCanvas.setSize(m, y), this._setSmoothEnabled(), this;
    }
    _validateAdd(m) {
      var y = m.getType();
      y !== "Group" && y !== "Shape" && t.Util.throw("You may only add groups and shapes to a layer.");
    }
    _toKonvaCanvas(m) {
      return m = m || {}, m.width = m.width || this.getWidth(), m.height = m.height || this.getHeight(), m.x = m.x !== void 0 ? m.x : this.x(), m.y = m.y !== void 0 ? m.y : this.y(), A.Node.prototype._toKonvaCanvas.call(this, m);
    }
    _checkVisibility() {
      this.visible() ? this.canvas._canvas.style.display = "block" : this.canvas._canvas.style.display = "none";
    }
    _setSmoothEnabled() {
      this.getContext()._context.imageSmoothingEnabled = this.imageSmoothingEnabled();
    }
    getWidth() {
      if (this.parent)
        return this.parent.width();
    }
    setWidth() {
      t.Util.warn('Can not change width of layer. Use "stage.width(value)" function instead.');
    }
    getHeight() {
      if (this.parent)
        return this.parent.height();
    }
    setHeight() {
      t.Util.warn('Can not change height of layer. Use "stage.height(value)" function instead.');
    }
    batchDraw() {
      return this._waitingForDraw || (this._waitingForDraw = !0, t.Util.requestAnimFrame(() => {
        this.draw(), this._waitingForDraw = !1;
      })), this;
    }
    getIntersection(m) {
      if (!this.isListening() || !this.isVisible())
        return null;
      for (var y = 1, P = !1; ; ) {
        for (let h = 0; h < b; h++) {
          const n = p[h], T = this._getIntersection({
            x: m.x + n.x * y,
            y: m.y + n.y * y
          }), R = T.shape;
          if (R)
            return R;
          if (P = !!T.antialiased, !T.antialiased)
            break;
        }
        if (P)
          y += 1;
        else
          return null;
      }
    }
    _getIntersection(m) {
      const y = this.hitCanvas.pixelRatio, P = this.hitCanvas.context.getImageData(Math.round(m.x * y), Math.round(m.y * y), 1, 1).data, h = P[3];
      if (h === 255) {
        const n = t.Util._rgbToHex(P[0], P[1], P[2]), T = d.shapes[c + n];
        return T ? {
          shape: T
        } : {
          antialiased: !0
        };
      } else if (h > 0)
        return {
          antialiased: !0
        };
      return {};
    }
    drawScene(m, y) {
      var P = this.getLayer(), h = m || P && P.getCanvas();
      return this._fire(v, {
        node: this
      }), this.clearBeforeDraw() && h.getContext().clear(), l.Container.prototype.drawScene.call(this, h, y), this._fire(S, {
        node: this
      }), this;
    }
    drawHit(m, y) {
      var P = this.getLayer(), h = m || P && P.hitCanvas;
      return P && P.clearBeforeDraw() && P.getHitCanvas().getContext().clear(), l.Container.prototype.drawHit.call(this, h, y), this;
    }
    enableHitGraph() {
      return this.hitGraphEnabled(!0), this;
    }
    disableHitGraph() {
      return this.hitGraphEnabled(!1), this;
    }
    setHitGraphEnabled(m) {
      t.Util.warn("hitGraphEnabled method is deprecated. Please use layer.listening() instead."), this.listening(m);
    }
    getHitGraphEnabled(m) {
      return t.Util.warn("hitGraphEnabled method is deprecated. Please use layer.listening() instead."), this.listening();
    }
    toggleHitCanvas() {
      if (!(!this.parent || !this.parent.content)) {
        var m = this.parent, y = !!this.hitCanvas._canvas.parentNode;
        y ? m.content.removeChild(this.hitCanvas._canvas) : m.content.appendChild(this.hitCanvas._canvas);
      }
    }
    destroy() {
      return t.Util.releaseCanvas(this.getNativeCanvasElement(), this.getHitCanvas()._canvas), super.destroy();
    }
  };
  return er.Layer = u, u.prototype.nodeType = "Layer", (0, i._registerNode)(u), f.Factory.addGetterSetter(u, "imageSmoothingEnabled", !0), f.Factory.addGetterSetter(u, "clearBeforeDraw", !0), f.Factory.addGetterSetter(u, "hitGraphEnabled", !0, (0, g.getBooleanValidator)()), er;
}
var tr = {}, da;
function Ad() {
  if (da) return tr;
  da = 1, Object.defineProperty(tr, "__esModule", { value: !0 }), tr.FastLayer = void 0;
  const t = Re(), l = ws(), A = oe();
  let f = class extends l.Layer {
    constructor(g) {
      super(g), this.listening(!1), t.Util.warn('Konva.Fast layer is deprecated. Please use "new Konva.Layer({ listening: false })" instead.');
    }
  };
  return tr.FastLayer = f, f.prototype.nodeType = "FastLayer", (0, A._registerNode)(f), tr;
}
var rr = {}, ua;
function an() {
  if (ua) return rr;
  ua = 1, Object.defineProperty(rr, "__esModule", { value: !0 }), rr.Group = void 0;
  const t = Re(), l = gi(), A = oe();
  let f = class extends l.Container {
    _validateAdd(g) {
      var d = g.getType();
      d !== "Group" && d !== "Shape" && t.Util.throw("You may only add groups and shapes to groups.");
    }
  };
  return rr.Group = f, f.prototype.nodeType = "Group", (0, A._registerNode)(f), rr;
}
var ir = {}, ca;
function sn() {
  if (ca) return ir;
  ca = 1, Object.defineProperty(ir, "__esModule", { value: !0 }), ir.Animation = void 0;
  const t = oe(), l = Re(), A = function() {
    return t.glob.performance && t.glob.performance.now ? function() {
      return t.glob.performance.now();
    } : function() {
      return (/* @__PURE__ */ new Date()).getTime();
    };
  }();
  let f = class Gt {
    constructor(g, d) {
      this.id = Gt.animIdCounter++, this.frame = {
        time: 0,
        timeDiff: 0,
        lastTime: A(),
        frameRate: 0
      }, this.func = g, this.setLayers(d);
    }
    setLayers(g) {
      let d = [];
      return g && (d = Array.isArray(g) ? g : [g]), this.layers = d, this;
    }
    getLayers() {
      return this.layers;
    }
    addLayer(g) {
      const d = this.layers, i = d.length;
      for (let c = 0; c < i; c++)
        if (d[c]._id === g._id)
          return !1;
      return this.layers.push(g), !0;
    }
    isRunning() {
      const d = Gt.animations, i = d.length;
      for (let c = 0; c < i; c++)
        if (d[c].id === this.id)
          return !0;
      return !1;
    }
    start() {
      return this.stop(), this.frame.timeDiff = 0, this.frame.lastTime = A(), Gt._addAnimation(this), this;
    }
    stop() {
      return Gt._removeAnimation(this), this;
    }
    _updateFrameObject(g) {
      this.frame.timeDiff = g - this.frame.lastTime, this.frame.lastTime = g, this.frame.time += this.frame.timeDiff, this.frame.frameRate = 1e3 / this.frame.timeDiff;
    }
    static _addAnimation(g) {
      this.animations.push(g), this._handleAnimation();
    }
    static _removeAnimation(g) {
      const d = g.id, i = this.animations, c = i.length;
      for (let v = 0; v < c; v++)
        if (i[v].id === d) {
          this.animations.splice(v, 1);
          break;
        }
    }
    static _runFrames() {
      const g = {}, d = this.animations;
      for (let i = 0; i < d.length; i++) {
        const c = d[i], v = c.layers, S = c.func;
        c._updateFrameObject(A());
        const p = v.length;
        let b;
        if (S ? b = S.call(c, c.frame) !== !1 : b = !0, !!b)
          for (let u = 0; u < p; u++) {
            const s = v[u];
            s._id !== void 0 && (g[s._id] = s);
          }
      }
      for (let i in g)
        g.hasOwnProperty(i) && g[i].batchDraw();
    }
    static _animationLoop() {
      const g = Gt;
      g.animations.length ? (g._runFrames(), l.Util.requestAnimFrame(g._animationLoop)) : g.animRunning = !1;
    }
    static _handleAnimation() {
      this.animRunning || (this.animRunning = !0, l.Util.requestAnimFrame(this._animationLoop));
    }
  };
  return ir.Animation = f, f.animations = [], f.animIdCounter = 0, f.animRunning = !1, ir;
}
var Hi = {}, fa;
function Rd() {
  return fa || (fa = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.Easings = t.Tween = void 0;
    const l = Re(), A = sn(), f = Me(), C = oe();
    var g = {
      node: 1,
      duration: 1,
      easing: 1,
      onFinish: 1,
      yoyo: 1
    }, d = 1, i = 2, c = 3, v = 0, S = ["fill", "stroke", "shadowColor"];
    class p {
      constructor(s, m, y, P, h, n, T) {
        this.prop = s, this.propFunc = m, this.begin = P, this._pos = P, this.duration = n, this._change = 0, this.prevPos = 0, this.yoyo = T, this._time = 0, this._position = 0, this._startTime = 0, this._finish = 0, this.func = y, this._change = h - this.begin, this.pause();
      }
      fire(s) {
        var m = this[s];
        m && m();
      }
      setTime(s) {
        s > this.duration ? this.yoyo ? (this._time = this.duration, this.reverse()) : this.finish() : s < 0 ? this.yoyo ? (this._time = 0, this.play()) : this.reset() : (this._time = s, this.update());
      }
      getTime() {
        return this._time;
      }
      setPosition(s) {
        this.prevPos = this._pos, this.propFunc(s), this._pos = s;
      }
      getPosition(s) {
        return s === void 0 && (s = this._time), this.func(s, this.begin, this._change, this.duration);
      }
      play() {
        this.state = i, this._startTime = this.getTimer() - this._time, this.onEnterFrame(), this.fire("onPlay");
      }
      reverse() {
        this.state = c, this._time = this.duration - this._time, this._startTime = this.getTimer() - this._time, this.onEnterFrame(), this.fire("onReverse");
      }
      seek(s) {
        this.pause(), this._time = s, this.update(), this.fire("onSeek");
      }
      reset() {
        this.pause(), this._time = 0, this.update(), this.fire("onReset");
      }
      finish() {
        this.pause(), this._time = this.duration, this.update(), this.fire("onFinish");
      }
      update() {
        this.setPosition(this.getPosition(this._time)), this.fire("onUpdate");
      }
      onEnterFrame() {
        var s = this.getTimer() - this._startTime;
        this.state === i ? this.setTime(s) : this.state === c && this.setTime(this.duration - s);
      }
      pause() {
        this.state = d, this.fire("onPause");
      }
      getTimer() {
        return (/* @__PURE__ */ new Date()).getTime();
      }
    }
    class b {
      constructor(s) {
        var m = this, y = s.node, P = y._id, h, n = s.easing || t.Easings.Linear, T = !!s.yoyo, R;
        typeof s.duration > "u" ? h = 0.3 : s.duration === 0 ? h = 1e-3 : h = s.duration, this.node = y, this._id = v++;
        var D = y.getLayer() || (y instanceof C.Konva.Stage ? y.getLayers() : null);
        D || l.Util.error("Tween constructor have `node` that is not in a layer. Please add node into layer first."), this.anim = new A.Animation(function() {
          m.tween.onEnterFrame();
        }, D), this.tween = new p(R, function(k) {
          m._tweenFunc(k);
        }, n, 0, 1, h * 1e3, T), this._addListeners(), b.attrs[P] || (b.attrs[P] = {}), b.attrs[P][this._id] || (b.attrs[P][this._id] = {}), b.tweens[P] || (b.tweens[P] = {});
        for (R in s)
          g[R] === void 0 && this._addAttr(R, s[R]);
        this.reset(), this.onFinish = s.onFinish, this.onReset = s.onReset, this.onUpdate = s.onUpdate;
      }
      _addAttr(s, m) {
        var y = this.node, P = y._id, h, n, T, R, D, k, x, G;
        if (T = b.tweens[P][s], T && delete b.attrs[P][T][s], h = y.getAttr(s), l.Util._isArray(m))
          if (n = [], D = Math.max(m.length, h.length), s === "points" && m.length !== h.length && (m.length > h.length ? (x = h, h = l.Util._prepareArrayForTween(h, m, y.closed())) : (k = m, m = l.Util._prepareArrayForTween(m, h, y.closed()))), s.indexOf("fill") === 0)
            for (R = 0; R < D; R++)
              if (R % 2 === 0)
                n.push(m[R] - h[R]);
              else {
                var E = l.Util.colorToRGBA(h[R]);
                G = l.Util.colorToRGBA(m[R]), h[R] = E, n.push({
                  r: G.r - E.r,
                  g: G.g - E.g,
                  b: G.b - E.b,
                  a: G.a - E.a
                });
              }
          else
            for (R = 0; R < D; R++)
              n.push(m[R] - h[R]);
        else S.indexOf(s) !== -1 ? (h = l.Util.colorToRGBA(h), G = l.Util.colorToRGBA(m), n = {
          r: G.r - h.r,
          g: G.g - h.g,
          b: G.b - h.b,
          a: G.a - h.a
        }) : n = m - h;
        b.attrs[P][this._id][s] = {
          start: h,
          diff: n,
          end: m,
          trueEnd: k,
          trueStart: x
        }, b.tweens[P][s] = this._id;
      }
      _tweenFunc(s) {
        var m = this.node, y = b.attrs[m._id][this._id], P, h, n, T, R, D, k, x;
        for (P in y) {
          if (h = y[P], n = h.start, T = h.diff, x = h.end, l.Util._isArray(n))
            if (R = [], k = Math.max(n.length, x.length), P.indexOf("fill") === 0)
              for (D = 0; D < k; D++)
                D % 2 === 0 ? R.push((n[D] || 0) + T[D] * s) : R.push("rgba(" + Math.round(n[D].r + T[D].r * s) + "," + Math.round(n[D].g + T[D].g * s) + "," + Math.round(n[D].b + T[D].b * s) + "," + (n[D].a + T[D].a * s) + ")");
            else
              for (D = 0; D < k; D++)
                R.push((n[D] || 0) + T[D] * s);
          else S.indexOf(P) !== -1 ? R = "rgba(" + Math.round(n.r + T.r * s) + "," + Math.round(n.g + T.g * s) + "," + Math.round(n.b + T.b * s) + "," + (n.a + T.a * s) + ")" : R = n + T * s;
          m.setAttr(P, R);
        }
      }
      _addListeners() {
        this.tween.onPlay = () => {
          this.anim.start();
        }, this.tween.onReverse = () => {
          this.anim.start();
        }, this.tween.onPause = () => {
          this.anim.stop();
        }, this.tween.onFinish = () => {
          var s = this.node, m = b.attrs[s._id][this._id];
          m.points && m.points.trueEnd && s.setAttr("points", m.points.trueEnd), this.onFinish && this.onFinish.call(this);
        }, this.tween.onReset = () => {
          var s = this.node, m = b.attrs[s._id][this._id];
          m.points && m.points.trueStart && s.points(m.points.trueStart), this.onReset && this.onReset();
        }, this.tween.onUpdate = () => {
          this.onUpdate && this.onUpdate.call(this);
        };
      }
      play() {
        return this.tween.play(), this;
      }
      reverse() {
        return this.tween.reverse(), this;
      }
      reset() {
        return this.tween.reset(), this;
      }
      seek(s) {
        return this.tween.seek(s * 1e3), this;
      }
      pause() {
        return this.tween.pause(), this;
      }
      finish() {
        return this.tween.finish(), this;
      }
      destroy() {
        var s = this.node._id, m = this._id, y = b.tweens[s], P;
        this.pause();
        for (P in y)
          delete b.tweens[s][P];
        delete b.attrs[s][m];
      }
    }
    t.Tween = b, b.attrs = {}, b.tweens = {}, f.Node.prototype.to = function(u) {
      var s = u.onFinish;
      u.node = this, u.onFinish = function() {
        this.destroy(), s && s();
      };
      var m = new b(u);
      m.play();
    }, t.Easings = {
      BackEaseIn(u, s, m, y) {
        var P = 1.70158;
        return m * (u /= y) * u * ((P + 1) * u - P) + s;
      },
      BackEaseOut(u, s, m, y) {
        var P = 1.70158;
        return m * ((u = u / y - 1) * u * ((P + 1) * u + P) + 1) + s;
      },
      BackEaseInOut(u, s, m, y) {
        var P = 1.70158;
        return (u /= y / 2) < 1 ? m / 2 * (u * u * (((P *= 1.525) + 1) * u - P)) + s : m / 2 * ((u -= 2) * u * (((P *= 1.525) + 1) * u + P) + 2) + s;
      },
      ElasticEaseIn(u, s, m, y, P, h) {
        var n = 0;
        return u === 0 ? s : (u /= y) === 1 ? s + m : (h || (h = y * 0.3), !P || P < Math.abs(m) ? (P = m, n = h / 4) : n = h / (2 * Math.PI) * Math.asin(m / P), -(P * Math.pow(2, 10 * (u -= 1)) * Math.sin((u * y - n) * (2 * Math.PI) / h)) + s);
      },
      ElasticEaseOut(u, s, m, y, P, h) {
        var n = 0;
        return u === 0 ? s : (u /= y) === 1 ? s + m : (h || (h = y * 0.3), !P || P < Math.abs(m) ? (P = m, n = h / 4) : n = h / (2 * Math.PI) * Math.asin(m / P), P * Math.pow(2, -10 * u) * Math.sin((u * y - n) * (2 * Math.PI) / h) + m + s);
      },
      ElasticEaseInOut(u, s, m, y, P, h) {
        var n = 0;
        return u === 0 ? s : (u /= y / 2) === 2 ? s + m : (h || (h = y * (0.3 * 1.5)), !P || P < Math.abs(m) ? (P = m, n = h / 4) : n = h / (2 * Math.PI) * Math.asin(m / P), u < 1 ? -0.5 * (P * Math.pow(2, 10 * (u -= 1)) * Math.sin((u * y - n) * (2 * Math.PI) / h)) + s : P * Math.pow(2, -10 * (u -= 1)) * Math.sin((u * y - n) * (2 * Math.PI) / h) * 0.5 + m + s);
      },
      BounceEaseOut(u, s, m, y) {
        return (u /= y) < 1 / 2.75 ? m * (7.5625 * u * u) + s : u < 2 / 2.75 ? m * (7.5625 * (u -= 1.5 / 2.75) * u + 0.75) + s : u < 2.5 / 2.75 ? m * (7.5625 * (u -= 2.25 / 2.75) * u + 0.9375) + s : m * (7.5625 * (u -= 2.625 / 2.75) * u + 0.984375) + s;
      },
      BounceEaseIn(u, s, m, y) {
        return m - t.Easings.BounceEaseOut(y - u, 0, m, y) + s;
      },
      BounceEaseInOut(u, s, m, y) {
        return u < y / 2 ? t.Easings.BounceEaseIn(u * 2, 0, m, y) * 0.5 + s : t.Easings.BounceEaseOut(u * 2 - y, 0, m, y) * 0.5 + m * 0.5 + s;
      },
      EaseIn(u, s, m, y) {
        return m * (u /= y) * u + s;
      },
      EaseOut(u, s, m, y) {
        return -m * (u /= y) * (u - 2) + s;
      },
      EaseInOut(u, s, m, y) {
        return (u /= y / 2) < 1 ? m / 2 * u * u + s : -m / 2 * (--u * (u - 2) - 1) + s;
      },
      StrongEaseIn(u, s, m, y) {
        return m * (u /= y) * u * u * u * u + s;
      },
      StrongEaseOut(u, s, m, y) {
        return m * ((u = u / y - 1) * u * u * u * u + 1) + s;
      },
      StrongEaseInOut(u, s, m, y) {
        return (u /= y / 2) < 1 ? m / 2 * u * u * u * u * u + s : m / 2 * ((u -= 2) * u * u * u * u + 2) + s;
      },
      Linear(u, s, m, y) {
        return m * u / y + s;
      }
    };
  }(Hi)), Hi;
}
var ga;
function Ld() {
  return ga || (ga = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.Konva = void 0;
    const l = oe(), A = Re(), f = Me(), C = gi(), g = Ed(), d = ws(), i = Ad(), c = an(), v = nn(), S = Ie(), p = sn(), b = Rd(), u = bs(), s = fi();
    t.Konva = A.Util._assign(l.Konva, {
      Util: A.Util,
      Transform: A.Transform,
      Node: f.Node,
      Container: C.Container,
      Stage: g.Stage,
      stages: g.stages,
      Layer: d.Layer,
      FastLayer: i.FastLayer,
      Group: c.Group,
      DD: v.DD,
      Shape: S.Shape,
      shapes: S.shapes,
      Animation: p.Animation,
      Tween: b.Tween,
      Easings: b.Easings,
      Context: u.Context,
      Canvas: s.Canvas
    }), t.default = t.Konva;
  }(Ii)), Ii;
}
var nr = {}, _a;
function Md() {
  if (_a) return nr;
  _a = 1, Object.defineProperty(nr, "__esModule", { value: !0 }), nr.Arc = void 0;
  const t = le(), l = Ie(), A = oe(), f = he(), C = oe();
  let g = class extends l.Shape {
    _sceneFunc(i) {
      var c = A.Konva.getAngle(this.angle()), v = this.clockwise();
      i.beginPath(), i.arc(0, 0, this.outerRadius(), 0, c, v), i.arc(0, 0, this.innerRadius(), c, 0, !v), i.closePath(), i.fillStrokeShape(this);
    }
    getWidth() {
      return this.outerRadius() * 2;
    }
    getHeight() {
      return this.outerRadius() * 2;
    }
    setWidth(i) {
      this.outerRadius(i / 2);
    }
    setHeight(i) {
      this.outerRadius(i / 2);
    }
    getSelfRect() {
      const i = this.innerRadius(), c = this.outerRadius(), v = this.clockwise(), S = A.Konva.getAngle(v ? 360 - this.angle() : this.angle()), p = Math.cos(Math.min(S, Math.PI)), b = 1, u = Math.sin(Math.min(Math.max(Math.PI, S), 3 * Math.PI / 2)), s = Math.sin(Math.min(S, Math.PI / 2)), m = p * (p > 0 ? i : c), y = b * c, P = u * (u > 0 ? i : c), h = s * (s > 0 ? c : i);
      return {
        x: m,
        y: v ? -1 * h : P,
        width: y - m,
        height: h - P
      };
    }
  };
  return nr.Arc = g, g.prototype._centroid = !0, g.prototype.className = "Arc", g.prototype._attrsAffectingSize = ["innerRadius", "outerRadius"], (0, C._registerNode)(g), t.Factory.addGetterSetter(g, "innerRadius", 0, (0, f.getNumberValidator)()), t.Factory.addGetterSetter(g, "outerRadius", 0, (0, f.getNumberValidator)()), t.Factory.addGetterSetter(g, "angle", 0, (0, f.getNumberValidator)()), t.Factory.addGetterSetter(g, "clockwise", !1, (0, f.getBooleanValidator)()), nr;
}
var ar = {}, sr = {}, va;
function Cs() {
  if (va) return sr;
  va = 1, Object.defineProperty(sr, "__esModule", { value: !0 }), sr.Line = void 0;
  const t = le(), l = Ie(), A = he(), f = oe();
  function C(i, c, v, S, p, b, u) {
    var s = Math.sqrt(Math.pow(v - i, 2) + Math.pow(S - c, 2)), m = Math.sqrt(Math.pow(p - v, 2) + Math.pow(b - S, 2)), y = u * s / (s + m), P = u * m / (s + m), h = v - y * (p - i), n = S - y * (b - c), T = v + P * (p - i), R = S + P * (b - c);
    return [h, n, T, R];
  }
  function g(i, c) {
    var v = i.length, S = [], p, b;
    for (p = 2; p < v - 2; p += 2)
      b = C(i[p - 2], i[p - 1], i[p], i[p + 1], i[p + 2], i[p + 3], c), !isNaN(b[0]) && (S.push(b[0]), S.push(b[1]), S.push(i[p]), S.push(i[p + 1]), S.push(b[2]), S.push(b[3]));
    return S;
  }
  let d = class extends l.Shape {
    constructor(c) {
      super(c), this.on("pointsChange.konva tensionChange.konva closedChange.konva bezierChange.konva", function() {
        this._clearCache("tensionPoints");
      });
    }
    _sceneFunc(c) {
      var v = this.points(), S = v.length, p = this.tension(), b = this.closed(), u = this.bezier(), s, m, y;
      if (S) {
        if (c.beginPath(), c.moveTo(v[0], v[1]), p !== 0 && S > 4) {
          for (s = this.getTensionPoints(), m = s.length, y = b ? 0 : 4, b || c.quadraticCurveTo(s[0], s[1], s[2], s[3]); y < m - 2; )
            c.bezierCurveTo(s[y++], s[y++], s[y++], s[y++], s[y++], s[y++]);
          b || c.quadraticCurveTo(s[m - 2], s[m - 1], v[S - 2], v[S - 1]);
        } else if (u)
          for (y = 2; y < S; )
            c.bezierCurveTo(v[y++], v[y++], v[y++], v[y++], v[y++], v[y++]);
        else
          for (y = 2; y < S; y += 2)
            c.lineTo(v[y], v[y + 1]);
        b ? (c.closePath(), c.fillStrokeShape(this)) : c.strokeShape(this);
      }
    }
    getTensionPoints() {
      return this._getCache("tensionPoints", this._getTensionPoints);
    }
    _getTensionPoints() {
      return this.closed() ? this._getTensionPointsClosed() : g(this.points(), this.tension());
    }
    _getTensionPointsClosed() {
      var c = this.points(), v = c.length, S = this.tension(), p = C(c[v - 2], c[v - 1], c[0], c[1], c[2], c[3], S), b = C(c[v - 4], c[v - 3], c[v - 2], c[v - 1], c[0], c[1], S), u = g(c, S), s = [p[2], p[3]].concat(u).concat([
        b[0],
        b[1],
        c[v - 2],
        c[v - 1],
        b[2],
        b[3],
        p[0],
        p[1],
        c[0],
        c[1]
      ]);
      return s;
    }
    getWidth() {
      return this.getSelfRect().width;
    }
    getHeight() {
      return this.getSelfRect().height;
    }
    getSelfRect() {
      var c = this.points();
      if (c.length < 4)
        return {
          x: c[0] || 0,
          y: c[1] || 0,
          width: 0,
          height: 0
        };
      this.tension() !== 0 ? c = [
        c[0],
        c[1],
        ...this._getTensionPoints(),
        c[c.length - 2],
        c[c.length - 1]
      ] : c = this.points();
      for (var v = c[0], S = c[0], p = c[1], b = c[1], u, s, m = 0; m < c.length / 2; m++)
        u = c[m * 2], s = c[m * 2 + 1], v = Math.min(v, u), S = Math.max(S, u), p = Math.min(p, s), b = Math.max(b, s);
      return {
        x: v,
        y: p,
        width: S - v,
        height: b - p
      };
    }
  };
  return sr.Line = d, d.prototype.className = "Line", d.prototype._attrsAffectingSize = ["points", "bezier", "tension"], (0, f._registerNode)(d), t.Factory.addGetterSetter(d, "closed", !1), t.Factory.addGetterSetter(d, "bezier", !1), t.Factory.addGetterSetter(d, "tension", 0, (0, A.getNumberValidator)()), t.Factory.addGetterSetter(d, "points", [], (0, A.getNumberArrayValidator)()), sr;
}
var or = {}, Wi = {}, pa;
function Pd() {
  return pa || (pa = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.t2length = t.getQuadraticArcLength = t.getCubicArcLength = t.binomialCoefficients = t.cValues = t.tValues = void 0, t.tValues = [
      [],
      [],
      [
        -0.5773502691896257,
        0.5773502691896257
      ],
      [
        0,
        -0.7745966692414834,
        0.7745966692414834
      ],
      [
        -0.33998104358485626,
        0.33998104358485626,
        -0.8611363115940526,
        0.8611363115940526
      ],
      [
        0,
        -0.5384693101056831,
        0.5384693101056831,
        -0.906179845938664,
        0.906179845938664
      ],
      [
        0.6612093864662645,
        -0.6612093864662645,
        -0.2386191860831969,
        0.2386191860831969,
        -0.932469514203152,
        0.932469514203152
      ],
      [
        0,
        0.4058451513773972,
        -0.4058451513773972,
        -0.7415311855993945,
        0.7415311855993945,
        -0.9491079123427585,
        0.9491079123427585
      ],
      [
        -0.1834346424956498,
        0.1834346424956498,
        -0.525532409916329,
        0.525532409916329,
        -0.7966664774136267,
        0.7966664774136267,
        -0.9602898564975363,
        0.9602898564975363
      ],
      [
        0,
        -0.8360311073266358,
        0.8360311073266358,
        -0.9681602395076261,
        0.9681602395076261,
        -0.3242534234038089,
        0.3242534234038089,
        -0.6133714327005904,
        0.6133714327005904
      ],
      [
        -0.14887433898163122,
        0.14887433898163122,
        -0.4333953941292472,
        0.4333953941292472,
        -0.6794095682990244,
        0.6794095682990244,
        -0.8650633666889845,
        0.8650633666889845,
        -0.9739065285171717,
        0.9739065285171717
      ],
      [
        0,
        -0.26954315595234496,
        0.26954315595234496,
        -0.5190961292068118,
        0.5190961292068118,
        -0.7301520055740494,
        0.7301520055740494,
        -0.8870625997680953,
        0.8870625997680953,
        -0.978228658146057,
        0.978228658146057
      ],
      [
        -0.1252334085114689,
        0.1252334085114689,
        -0.3678314989981802,
        0.3678314989981802,
        -0.5873179542866175,
        0.5873179542866175,
        -0.7699026741943047,
        0.7699026741943047,
        -0.9041172563704749,
        0.9041172563704749,
        -0.9815606342467192,
        0.9815606342467192
      ],
      [
        0,
        -0.2304583159551348,
        0.2304583159551348,
        -0.44849275103644687,
        0.44849275103644687,
        -0.6423493394403402,
        0.6423493394403402,
        -0.8015780907333099,
        0.8015780907333099,
        -0.9175983992229779,
        0.9175983992229779,
        -0.9841830547185881,
        0.9841830547185881
      ],
      [
        -0.10805494870734367,
        0.10805494870734367,
        -0.31911236892788974,
        0.31911236892788974,
        -0.5152486363581541,
        0.5152486363581541,
        -0.6872929048116855,
        0.6872929048116855,
        -0.827201315069765,
        0.827201315069765,
        -0.9284348836635735,
        0.9284348836635735,
        -0.9862838086968123,
        0.9862838086968123
      ],
      [
        0,
        -0.20119409399743451,
        0.20119409399743451,
        -0.3941513470775634,
        0.3941513470775634,
        -0.5709721726085388,
        0.5709721726085388,
        -0.7244177313601701,
        0.7244177313601701,
        -0.8482065834104272,
        0.8482065834104272,
        -0.937273392400706,
        0.937273392400706,
        -0.9879925180204854,
        0.9879925180204854
      ],
      [
        -0.09501250983763744,
        0.09501250983763744,
        -0.2816035507792589,
        0.2816035507792589,
        -0.45801677765722737,
        0.45801677765722737,
        -0.6178762444026438,
        0.6178762444026438,
        -0.755404408355003,
        0.755404408355003,
        -0.8656312023878318,
        0.8656312023878318,
        -0.9445750230732326,
        0.9445750230732326,
        -0.9894009349916499,
        0.9894009349916499
      ],
      [
        0,
        -0.17848418149584785,
        0.17848418149584785,
        -0.3512317634538763,
        0.3512317634538763,
        -0.5126905370864769,
        0.5126905370864769,
        -0.6576711592166907,
        0.6576711592166907,
        -0.7815140038968014,
        0.7815140038968014,
        -0.8802391537269859,
        0.8802391537269859,
        -0.9506755217687678,
        0.9506755217687678,
        -0.9905754753144174,
        0.9905754753144174
      ],
      [
        -0.0847750130417353,
        0.0847750130417353,
        -0.2518862256915055,
        0.2518862256915055,
        -0.41175116146284263,
        0.41175116146284263,
        -0.5597708310739475,
        0.5597708310739475,
        -0.6916870430603532,
        0.6916870430603532,
        -0.8037049589725231,
        0.8037049589725231,
        -0.8926024664975557,
        0.8926024664975557,
        -0.9558239495713977,
        0.9558239495713977,
        -0.9915651684209309,
        0.9915651684209309
      ],
      [
        0,
        -0.16035864564022537,
        0.16035864564022537,
        -0.31656409996362983,
        0.31656409996362983,
        -0.46457074137596094,
        0.46457074137596094,
        -0.600545304661681,
        0.600545304661681,
        -0.7209661773352294,
        0.7209661773352294,
        -0.8227146565371428,
        0.8227146565371428,
        -0.9031559036148179,
        0.9031559036148179,
        -0.96020815213483,
        0.96020815213483,
        -0.9924068438435844,
        0.9924068438435844
      ],
      [
        -0.07652652113349734,
        0.07652652113349734,
        -0.22778585114164507,
        0.22778585114164507,
        -0.37370608871541955,
        0.37370608871541955,
        -0.5108670019508271,
        0.5108670019508271,
        -0.636053680726515,
        0.636053680726515,
        -0.7463319064601508,
        0.7463319064601508,
        -0.8391169718222188,
        0.8391169718222188,
        -0.912234428251326,
        0.912234428251326,
        -0.9639719272779138,
        0.9639719272779138,
        -0.9931285991850949,
        0.9931285991850949
      ],
      [
        0,
        -0.1455618541608951,
        0.1455618541608951,
        -0.2880213168024011,
        0.2880213168024011,
        -0.4243421202074388,
        0.4243421202074388,
        -0.5516188358872198,
        0.5516188358872198,
        -0.6671388041974123,
        0.6671388041974123,
        -0.7684399634756779,
        0.7684399634756779,
        -0.8533633645833173,
        0.8533633645833173,
        -0.9200993341504008,
        0.9200993341504008,
        -0.9672268385663063,
        0.9672268385663063,
        -0.9937521706203895,
        0.9937521706203895
      ],
      [
        -0.06973927331972223,
        0.06973927331972223,
        -0.20786042668822127,
        0.20786042668822127,
        -0.34193582089208424,
        0.34193582089208424,
        -0.469355837986757,
        0.469355837986757,
        -0.5876404035069116,
        0.5876404035069116,
        -0.6944872631866827,
        0.6944872631866827,
        -0.7878168059792081,
        0.7878168059792081,
        -0.8658125777203002,
        0.8658125777203002,
        -0.926956772187174,
        0.926956772187174,
        -0.9700604978354287,
        0.9700604978354287,
        -0.9942945854823992,
        0.9942945854823992
      ],
      [
        0,
        -0.1332568242984661,
        0.1332568242984661,
        -0.26413568097034495,
        0.26413568097034495,
        -0.3903010380302908,
        0.3903010380302908,
        -0.5095014778460075,
        0.5095014778460075,
        -0.6196098757636461,
        0.6196098757636461,
        -0.7186613631319502,
        0.7186613631319502,
        -0.8048884016188399,
        0.8048884016188399,
        -0.8767523582704416,
        0.8767523582704416,
        -0.9329710868260161,
        0.9329710868260161,
        -0.9725424712181152,
        0.9725424712181152,
        -0.9947693349975522,
        0.9947693349975522
      ],
      [
        -0.06405689286260563,
        0.06405689286260563,
        -0.1911188674736163,
        0.1911188674736163,
        -0.3150426796961634,
        0.3150426796961634,
        -0.4337935076260451,
        0.4337935076260451,
        -0.5454214713888396,
        0.5454214713888396,
        -0.6480936519369755,
        0.6480936519369755,
        -0.7401241915785544,
        0.7401241915785544,
        -0.820001985973903,
        0.820001985973903,
        -0.8864155270044011,
        0.8864155270044011,
        -0.9382745520027328,
        0.9382745520027328,
        -0.9747285559713095,
        0.9747285559713095,
        -0.9951872199970213,
        0.9951872199970213
      ]
    ], t.cValues = [
      [],
      [],
      [1, 1],
      [
        0.8888888888888888,
        0.5555555555555556,
        0.5555555555555556
      ],
      [
        0.6521451548625461,
        0.6521451548625461,
        0.34785484513745385,
        0.34785484513745385
      ],
      [
        0.5688888888888889,
        0.47862867049936647,
        0.47862867049936647,
        0.23692688505618908,
        0.23692688505618908
      ],
      [
        0.3607615730481386,
        0.3607615730481386,
        0.46791393457269104,
        0.46791393457269104,
        0.17132449237917036,
        0.17132449237917036
      ],
      [
        0.4179591836734694,
        0.3818300505051189,
        0.3818300505051189,
        0.27970539148927664,
        0.27970539148927664,
        0.1294849661688697,
        0.1294849661688697
      ],
      [
        0.362683783378362,
        0.362683783378362,
        0.31370664587788727,
        0.31370664587788727,
        0.22238103445337448,
        0.22238103445337448,
        0.10122853629037626,
        0.10122853629037626
      ],
      [
        0.3302393550012598,
        0.1806481606948574,
        0.1806481606948574,
        0.08127438836157441,
        0.08127438836157441,
        0.31234707704000286,
        0.31234707704000286,
        0.26061069640293544,
        0.26061069640293544
      ],
      [
        0.29552422471475287,
        0.29552422471475287,
        0.26926671930999635,
        0.26926671930999635,
        0.21908636251598204,
        0.21908636251598204,
        0.1494513491505806,
        0.1494513491505806,
        0.06667134430868814,
        0.06667134430868814
      ],
      [
        0.2729250867779006,
        0.26280454451024665,
        0.26280454451024665,
        0.23319376459199048,
        0.23319376459199048,
        0.18629021092773426,
        0.18629021092773426,
        0.1255803694649046,
        0.1255803694649046,
        0.05566856711617366,
        0.05566856711617366
      ],
      [
        0.24914704581340277,
        0.24914704581340277,
        0.2334925365383548,
        0.2334925365383548,
        0.20316742672306592,
        0.20316742672306592,
        0.16007832854334622,
        0.16007832854334622,
        0.10693932599531843,
        0.10693932599531843,
        0.04717533638651183,
        0.04717533638651183
      ],
      [
        0.2325515532308739,
        0.22628318026289723,
        0.22628318026289723,
        0.2078160475368885,
        0.2078160475368885,
        0.17814598076194574,
        0.17814598076194574,
        0.13887351021978725,
        0.13887351021978725,
        0.09212149983772845,
        0.09212149983772845,
        0.04048400476531588,
        0.04048400476531588
      ],
      [
        0.2152638534631578,
        0.2152638534631578,
        0.2051984637212956,
        0.2051984637212956,
        0.18553839747793782,
        0.18553839747793782,
        0.15720316715819355,
        0.15720316715819355,
        0.12151857068790319,
        0.12151857068790319,
        0.08015808715976021,
        0.08015808715976021,
        0.03511946033175186,
        0.03511946033175186
      ],
      [
        0.2025782419255613,
        0.19843148532711158,
        0.19843148532711158,
        0.1861610000155622,
        0.1861610000155622,
        0.16626920581699392,
        0.16626920581699392,
        0.13957067792615432,
        0.13957067792615432,
        0.10715922046717194,
        0.10715922046717194,
        0.07036604748810812,
        0.07036604748810812,
        0.03075324199611727,
        0.03075324199611727
      ],
      [
        0.1894506104550685,
        0.1894506104550685,
        0.18260341504492358,
        0.18260341504492358,
        0.16915651939500254,
        0.16915651939500254,
        0.14959598881657674,
        0.14959598881657674,
        0.12462897125553388,
        0.12462897125553388,
        0.09515851168249279,
        0.09515851168249279,
        0.062253523938647894,
        0.062253523938647894,
        0.027152459411754096,
        0.027152459411754096
      ],
      [
        0.17944647035620653,
        0.17656270536699264,
        0.17656270536699264,
        0.16800410215645004,
        0.16800410215645004,
        0.15404576107681028,
        0.15404576107681028,
        0.13513636846852548,
        0.13513636846852548,
        0.11188384719340397,
        0.11188384719340397,
        0.08503614831717918,
        0.08503614831717918,
        0.0554595293739872,
        0.0554595293739872,
        0.02414830286854793,
        0.02414830286854793
      ],
      [
        0.1691423829631436,
        0.1691423829631436,
        0.16427648374583273,
        0.16427648374583273,
        0.15468467512626524,
        0.15468467512626524,
        0.14064291467065065,
        0.14064291467065065,
        0.12255520671147846,
        0.12255520671147846,
        0.10094204410628717,
        0.10094204410628717,
        0.07642573025488905,
        0.07642573025488905,
        0.0497145488949698,
        0.0497145488949698,
        0.02161601352648331,
        0.02161601352648331
      ],
      [
        0.1610544498487837,
        0.15896884339395434,
        0.15896884339395434,
        0.15276604206585967,
        0.15276604206585967,
        0.1426067021736066,
        0.1426067021736066,
        0.12875396253933621,
        0.12875396253933621,
        0.11156664554733399,
        0.11156664554733399,
        0.09149002162245,
        0.09149002162245,
        0.06904454273764123,
        0.06904454273764123,
        0.0448142267656996,
        0.0448142267656996,
        0.019461788229726478,
        0.019461788229726478
      ],
      [
        0.15275338713072584,
        0.15275338713072584,
        0.14917298647260374,
        0.14917298647260374,
        0.14209610931838204,
        0.14209610931838204,
        0.13168863844917664,
        0.13168863844917664,
        0.11819453196151841,
        0.11819453196151841,
        0.10193011981724044,
        0.10193011981724044,
        0.08327674157670475,
        0.08327674157670475,
        0.06267204833410907,
        0.06267204833410907,
        0.04060142980038694,
        0.04060142980038694,
        0.017614007139152118,
        0.017614007139152118
      ],
      [
        0.14608113364969041,
        0.14452440398997005,
        0.14452440398997005,
        0.13988739479107315,
        0.13988739479107315,
        0.13226893863333747,
        0.13226893863333747,
        0.12183141605372853,
        0.12183141605372853,
        0.10879729916714838,
        0.10879729916714838,
        0.09344442345603386,
        0.09344442345603386,
        0.0761001136283793,
        0.0761001136283793,
        0.057134425426857205,
        0.057134425426857205,
        0.036953789770852494,
        0.036953789770852494,
        0.016017228257774335,
        0.016017228257774335
      ],
      [
        0.13925187285563198,
        0.13925187285563198,
        0.13654149834601517,
        0.13654149834601517,
        0.13117350478706238,
        0.13117350478706238,
        0.12325237681051242,
        0.12325237681051242,
        0.11293229608053922,
        0.11293229608053922,
        0.10041414444288096,
        0.10041414444288096,
        0.08594160621706773,
        0.08594160621706773,
        0.06979646842452049,
        0.06979646842452049,
        0.052293335152683286,
        0.052293335152683286,
        0.03377490158481415,
        0.03377490158481415,
        0.0146279952982722,
        0.0146279952982722
      ],
      [
        0.13365457218610619,
        0.1324620394046966,
        0.1324620394046966,
        0.12890572218808216,
        0.12890572218808216,
        0.12304908430672953,
        0.12304908430672953,
        0.11499664022241136,
        0.11499664022241136,
        0.10489209146454141,
        0.10489209146454141,
        0.09291576606003515,
        0.09291576606003515,
        0.07928141177671895,
        0.07928141177671895,
        0.06423242140852585,
        0.06423242140852585,
        0.04803767173108467,
        0.04803767173108467,
        0.030988005856979445,
        0.030988005856979445,
        0.013411859487141771,
        0.013411859487141771
      ],
      [
        0.12793819534675216,
        0.12793819534675216,
        0.1258374563468283,
        0.1258374563468283,
        0.12167047292780339,
        0.12167047292780339,
        0.1155056680537256,
        0.1155056680537256,
        0.10744427011596563,
        0.10744427011596563,
        0.09761865210411388,
        0.09761865210411388,
        0.08619016153195327,
        0.08619016153195327,
        0.0733464814110803,
        0.0733464814110803,
        0.05929858491543678,
        0.05929858491543678,
        0.04427743881741981,
        0.04427743881741981,
        0.028531388628933663,
        0.028531388628933663,
        0.0123412297999872,
        0.0123412297999872
      ]
    ], t.binomialCoefficients = [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1]];
    const l = (d, i, c) => {
      let v, S, p;
      v = c / 2, S = 0;
      for (let u = 0; u < 20; u++)
        p = v * t.tValues[20][u] + v, S += t.cValues[20][u] * f(d, i, p);
      return v * S;
    };
    t.getCubicArcLength = l;
    const A = (d, i, c) => {
      c === void 0 && (c = 1);
      const v = d[0] - 2 * d[1] + d[2], S = i[0] - 2 * i[1] + i[2], p = 2 * d[1] - 2 * d[0], b = 2 * i[1] - 2 * i[0], u = 4 * (v * v + S * S), s = 4 * (v * p + S * b), m = p * p + b * b;
      if (u === 0)
        return c * Math.sqrt(Math.pow(d[2] - d[0], 2) + Math.pow(i[2] - i[0], 2));
      const y = s / (2 * u), P = m / u, h = c + y, n = P - y * y, T = h * h + n > 0 ? Math.sqrt(h * h + n) : 0, R = y * y + n > 0 ? Math.sqrt(y * y + n) : 0, D = y + Math.sqrt(y * y + n) !== 0 ? n * Math.log(Math.abs((h + T) / (y + R))) : 0;
      return Math.sqrt(u) / 2 * (h * T - y * R + D);
    };
    t.getQuadraticArcLength = A;
    function f(d, i, c) {
      const v = C(1, c, d), S = C(1, c, i), p = v * v + S * S;
      return Math.sqrt(p);
    }
    const C = (d, i, c) => {
      const v = c.length - 1;
      let S, p;
      if (v === 0)
        return 0;
      if (d === 0) {
        p = 0;
        for (let b = 0; b <= v; b++)
          p += t.binomialCoefficients[v][b] * Math.pow(1 - i, v - b) * Math.pow(i, b) * c[b];
        return p;
      } else {
        S = new Array(v);
        for (let b = 0; b < v; b++)
          S[b] = v * (c[b + 1] - c[b]);
        return C(d - 1, i, S);
      }
    }, g = (d, i, c) => {
      let v = 1, S = d / i, p = (d - c(S)) / i, b = 0;
      for (; v > 1e-3; ) {
        const u = c(S + p), s = Math.abs(d - u) / i;
        if (s < v)
          v = s, S += p;
        else {
          const m = c(S - p), y = Math.abs(d - m) / i;
          y < v ? (v = y, S -= p) : p /= 2;
        }
        if (b++, b > 500)
          break;
      }
      return S;
    };
    t.t2length = g;
  }(Wi)), Wi;
}
var ma;
function on() {
  if (ma) return or;
  ma = 1, Object.defineProperty(or, "__esModule", { value: !0 }), or.Path = void 0;
  const t = le(), l = Ie(), A = oe(), f = Pd();
  let C = class Ke extends l.Shape {
    constructor(d) {
      super(d), this.dataArray = [], this.pathLength = 0, this._readDataAttribute(), this.on("dataChange.konva", function() {
        this._readDataAttribute();
      });
    }
    _readDataAttribute() {
      this.dataArray = Ke.parsePathData(this.data()), this.pathLength = Ke.getPathLength(this.dataArray);
    }
    _sceneFunc(d) {
      var i = this.dataArray;
      d.beginPath();
      for (var c = !1, v = 0; v < i.length; v++) {
        var S = i[v].command, p = i[v].points;
        switch (S) {
          case "L":
            d.lineTo(p[0], p[1]);
            break;
          case "M":
            d.moveTo(p[0], p[1]);
            break;
          case "C":
            d.bezierCurveTo(p[0], p[1], p[2], p[3], p[4], p[5]);
            break;
          case "Q":
            d.quadraticCurveTo(p[0], p[1], p[2], p[3]);
            break;
          case "A":
            var b = p[0], u = p[1], s = p[2], m = p[3], y = p[4], P = p[5], h = p[6], n = p[7], T = s > m ? s : m, R = s > m ? 1 : s / m, D = s > m ? m / s : 1;
            d.translate(b, u), d.rotate(h), d.scale(R, D), d.arc(0, 0, T, y, y + P, 1 - n), d.scale(1 / R, 1 / D), d.rotate(-h), d.translate(-b, -u);
            break;
          case "z":
            c = !0, d.closePath();
            break;
        }
      }
      !c && !this.hasFill() ? d.strokeShape(this) : d.fillStrokeShape(this);
    }
    getSelfRect() {
      var d = [];
      this.dataArray.forEach(function(s) {
        if (s.command === "A") {
          var m = s.points[4], y = s.points[5], P = s.points[4] + y, h = Math.PI / 180;
          if (Math.abs(m - P) < h && (h = Math.abs(m - P)), y < 0)
            for (let n = m - h; n > P; n -= h) {
              const T = Ke.getPointOnEllipticalArc(s.points[0], s.points[1], s.points[2], s.points[3], n, 0);
              d.push(T.x, T.y);
            }
          else
            for (let n = m + h; n < P; n += h) {
              const T = Ke.getPointOnEllipticalArc(s.points[0], s.points[1], s.points[2], s.points[3], n, 0);
              d.push(T.x, T.y);
            }
        } else if (s.command === "C")
          for (let n = 0; n <= 1; n += 0.01) {
            const T = Ke.getPointOnCubicBezier(n, s.start.x, s.start.y, s.points[0], s.points[1], s.points[2], s.points[3], s.points[4], s.points[5]);
            d.push(T.x, T.y);
          }
        else
          d = d.concat(s.points);
      });
      for (var i = d[0], c = d[0], v = d[1], S = d[1], p, b, u = 0; u < d.length / 2; u++)
        p = d[u * 2], b = d[u * 2 + 1], isNaN(p) || (i = Math.min(i, p), c = Math.max(c, p)), isNaN(b) || (v = Math.min(v, b), S = Math.max(S, b));
      return {
        x: i,
        y: v,
        width: c - i,
        height: S - v
      };
    }
    getLength() {
      return this.pathLength;
    }
    getPointAtLength(d) {
      return Ke.getPointAtLengthOfDataArray(d, this.dataArray);
    }
    static getLineLength(d, i, c, v) {
      return Math.sqrt((c - d) * (c - d) + (v - i) * (v - i));
    }
    static getPathLength(d) {
      let i = 0;
      for (var c = 0; c < d.length; ++c)
        i += d[c].pathLength;
      return i;
    }
    static getPointAtLengthOfDataArray(d, i) {
      var c, v = 0, S = i.length;
      if (!S)
        return null;
      for (; v < S && d > i[v].pathLength; )
        d -= i[v].pathLength, ++v;
      if (v === S)
        return c = i[v - 1].points.slice(-2), {
          x: c[0],
          y: c[1]
        };
      if (d < 0.01)
        return c = i[v].points.slice(0, 2), {
          x: c[0],
          y: c[1]
        };
      var p = i[v], b = p.points;
      switch (p.command) {
        case "L":
          return Ke.getPointOnLine(d, p.start.x, p.start.y, b[0], b[1]);
        case "C":
          return Ke.getPointOnCubicBezier((0, f.t2length)(d, Ke.getPathLength(i), (T) => (0, f.getCubicArcLength)([p.start.x, b[0], b[2], b[4]], [p.start.y, b[1], b[3], b[5]], T)), p.start.x, p.start.y, b[0], b[1], b[2], b[3], b[4], b[5]);
        case "Q":
          return Ke.getPointOnQuadraticBezier((0, f.t2length)(d, Ke.getPathLength(i), (T) => (0, f.getQuadraticArcLength)([p.start.x, b[0], b[2]], [p.start.y, b[1], b[3]], T)), p.start.x, p.start.y, b[0], b[1], b[2], b[3]);
        case "A":
          var u = b[0], s = b[1], m = b[2], y = b[3], P = b[4], h = b[5], n = b[6];
          return P += h * d / p.pathLength, Ke.getPointOnEllipticalArc(u, s, m, y, P, n);
      }
      return null;
    }
    static getPointOnLine(d, i, c, v, S, p, b) {
      p = p ?? i, b = b ?? c;
      const u = this.getLineLength(i, c, v, S);
      if (u < 1e-10)
        return { x: i, y: c };
      if (v === i)
        return { x: p, y: b + (S > c ? d : -d) };
      const s = (S - c) / (v - i), m = Math.sqrt(d * d / (1 + s * s)) * (v < i ? -1 : 1), y = s * m;
      if (Math.abs(b - c - s * (p - i)) < 1e-10)
        return { x: p + m, y: b + y };
      const P = ((p - i) * (v - i) + (b - c) * (S - c)) / (u * u), h = i + P * (v - i), n = c + P * (S - c), T = this.getLineLength(p, b, h, n), R = Math.sqrt(d * d - T * T), D = Math.sqrt(R * R / (1 + s * s)) * (v < i ? -1 : 1), k = s * D;
      return { x: h + D, y: n + k };
    }
    static getPointOnCubicBezier(d, i, c, v, S, p, b, u, s) {
      function m(R) {
        return R * R * R;
      }
      function y(R) {
        return 3 * R * R * (1 - R);
      }
      function P(R) {
        return 3 * R * (1 - R) * (1 - R);
      }
      function h(R) {
        return (1 - R) * (1 - R) * (1 - R);
      }
      var n = u * m(d) + p * y(d) + v * P(d) + i * h(d), T = s * m(d) + b * y(d) + S * P(d) + c * h(d);
      return {
        x: n,
        y: T
      };
    }
    static getPointOnQuadraticBezier(d, i, c, v, S, p, b) {
      function u(h) {
        return h * h;
      }
      function s(h) {
        return 2 * h * (1 - h);
      }
      function m(h) {
        return (1 - h) * (1 - h);
      }
      var y = p * u(d) + v * s(d) + i * m(d), P = b * u(d) + S * s(d) + c * m(d);
      return {
        x: y,
        y: P
      };
    }
    static getPointOnEllipticalArc(d, i, c, v, S, p) {
      var b = Math.cos(p), u = Math.sin(p), s = {
        x: c * Math.cos(S),
        y: v * Math.sin(S)
      };
      return {
        x: d + (s.x * b - s.y * u),
        y: i + (s.x * u + s.y * b)
      };
    }
    static parsePathData(d) {
      if (!d)
        return [];
      var i = d, c = [
        "m",
        "M",
        "l",
        "L",
        "v",
        "V",
        "h",
        "H",
        "z",
        "Z",
        "c",
        "C",
        "q",
        "Q",
        "t",
        "T",
        "s",
        "S",
        "a",
        "A"
      ];
      i = i.replace(new RegExp(" ", "g"), ",");
      for (var v = 0; v < c.length; v++)
        i = i.replace(new RegExp(c[v], "g"), "|" + c[v]);
      var S = i.split("|"), p = [], b = [], u = 0, s = 0, m = /([-+]?((\d+\.\d+)|((\d+)|(\.\d+)))(?:e[-+]?\d+)?)/gi, y;
      for (v = 1; v < S.length; v++) {
        var P = S[v], h = P.charAt(0);
        for (P = P.slice(1), b.length = 0; y = m.exec(P); )
          b.push(y[0]);
        for (var n = [], T = 0, R = b.length; T < R; T++) {
          if (b[T] === "00") {
            n.push(0, 0);
            continue;
          }
          var D = parseFloat(b[T]);
          isNaN(D) ? n.push(0) : n.push(D);
        }
        for (; n.length > 0 && !isNaN(n[0]); ) {
          var k = "", x = [], G = u, E = s, N, F, o, w, L, O, I, H, B, $;
          switch (h) {
            case "l":
              u += n.shift(), s += n.shift(), k = "L", x.push(u, s);
              break;
            case "L":
              u = n.shift(), s = n.shift(), x.push(u, s);
              break;
            case "m":
              var z = n.shift(), Z = n.shift();
              if (u += z, s += Z, k = "M", p.length > 2 && p[p.length - 1].command === "z") {
                for (var W = p.length - 2; W >= 0; W--)
                  if (p[W].command === "M") {
                    u = p[W].points[0] + z, s = p[W].points[1] + Z;
                    break;
                  }
              }
              x.push(u, s), h = "l";
              break;
            case "M":
              u = n.shift(), s = n.shift(), k = "M", x.push(u, s), h = "L";
              break;
            case "h":
              u += n.shift(), k = "L", x.push(u, s);
              break;
            case "H":
              u = n.shift(), k = "L", x.push(u, s);
              break;
            case "v":
              s += n.shift(), k = "L", x.push(u, s);
              break;
            case "V":
              s = n.shift(), k = "L", x.push(u, s);
              break;
            case "C":
              x.push(n.shift(), n.shift(), n.shift(), n.shift()), u = n.shift(), s = n.shift(), x.push(u, s);
              break;
            case "c":
              x.push(u + n.shift(), s + n.shift(), u + n.shift(), s + n.shift()), u += n.shift(), s += n.shift(), k = "C", x.push(u, s);
              break;
            case "S":
              F = u, o = s, N = p[p.length - 1], N.command === "C" && (F = u + (u - N.points[2]), o = s + (s - N.points[3])), x.push(F, o, n.shift(), n.shift()), u = n.shift(), s = n.shift(), k = "C", x.push(u, s);
              break;
            case "s":
              F = u, o = s, N = p[p.length - 1], N.command === "C" && (F = u + (u - N.points[2]), o = s + (s - N.points[3])), x.push(F, o, u + n.shift(), s + n.shift()), u += n.shift(), s += n.shift(), k = "C", x.push(u, s);
              break;
            case "Q":
              x.push(n.shift(), n.shift()), u = n.shift(), s = n.shift(), x.push(u, s);
              break;
            case "q":
              x.push(u + n.shift(), s + n.shift()), u += n.shift(), s += n.shift(), k = "Q", x.push(u, s);
              break;
            case "T":
              F = u, o = s, N = p[p.length - 1], N.command === "Q" && (F = u + (u - N.points[0]), o = s + (s - N.points[1])), u = n.shift(), s = n.shift(), k = "Q", x.push(F, o, u, s);
              break;
            case "t":
              F = u, o = s, N = p[p.length - 1], N.command === "Q" && (F = u + (u - N.points[0]), o = s + (s - N.points[1])), u += n.shift(), s += n.shift(), k = "Q", x.push(F, o, u, s);
              break;
            case "A":
              w = n.shift(), L = n.shift(), O = n.shift(), I = n.shift(), H = n.shift(), B = u, $ = s, u = n.shift(), s = n.shift(), k = "A", x = this.convertEndpointToCenterParameterization(B, $, u, s, I, H, w, L, O);
              break;
            case "a":
              w = n.shift(), L = n.shift(), O = n.shift(), I = n.shift(), H = n.shift(), B = u, $ = s, u += n.shift(), s += n.shift(), k = "A", x = this.convertEndpointToCenterParameterization(B, $, u, s, I, H, w, L, O);
              break;
          }
          p.push({
            command: k || h,
            points: x,
            start: {
              x: G,
              y: E
            },
            pathLength: this.calcLength(G, E, k || h, x)
          });
        }
        (h === "z" || h === "Z") && p.push({
          command: "z",
          points: [],
          start: void 0,
          pathLength: 0
        });
      }
      return p;
    }
    static calcLength(d, i, c, v) {
      var S, p, b, u, s = Ke;
      switch (c) {
        case "L":
          return s.getLineLength(d, i, v[0], v[1]);
        case "C":
          return (0, f.getCubicArcLength)([d, v[0], v[2], v[4]], [i, v[1], v[3], v[5]], 1);
        case "Q":
          return (0, f.getQuadraticArcLength)([d, v[0], v[2]], [i, v[1], v[3]], 1);
        case "A":
          S = 0;
          var m = v[4], y = v[5], P = v[4] + y, h = Math.PI / 180;
          if (Math.abs(m - P) < h && (h = Math.abs(m - P)), p = s.getPointOnEllipticalArc(v[0], v[1], v[2], v[3], m, 0), y < 0)
            for (u = m - h; u > P; u -= h)
              b = s.getPointOnEllipticalArc(v[0], v[1], v[2], v[3], u, 0), S += s.getLineLength(p.x, p.y, b.x, b.y), p = b;
          else
            for (u = m + h; u < P; u += h)
              b = s.getPointOnEllipticalArc(v[0], v[1], v[2], v[3], u, 0), S += s.getLineLength(p.x, p.y, b.x, b.y), p = b;
          return b = s.getPointOnEllipticalArc(v[0], v[1], v[2], v[3], P, 0), S += s.getLineLength(p.x, p.y, b.x, b.y), S;
      }
      return 0;
    }
    static convertEndpointToCenterParameterization(d, i, c, v, S, p, b, u, s) {
      var m = s * (Math.PI / 180), y = Math.cos(m) * (d - c) / 2 + Math.sin(m) * (i - v) / 2, P = -1 * Math.sin(m) * (d - c) / 2 + Math.cos(m) * (i - v) / 2, h = y * y / (b * b) + P * P / (u * u);
      h > 1 && (b *= Math.sqrt(h), u *= Math.sqrt(h));
      var n = Math.sqrt((b * b * (u * u) - b * b * (P * P) - u * u * (y * y)) / (b * b * (P * P) + u * u * (y * y)));
      S === p && (n *= -1), isNaN(n) && (n = 0);
      var T = n * b * P / u, R = n * -u * y / b, D = (d + c) / 2 + Math.cos(m) * T - Math.sin(m) * R, k = (i + v) / 2 + Math.sin(m) * T + Math.cos(m) * R, x = function(L) {
        return Math.sqrt(L[0] * L[0] + L[1] * L[1]);
      }, G = function(L, O) {
        return (L[0] * O[0] + L[1] * O[1]) / (x(L) * x(O));
      }, E = function(L, O) {
        return (L[0] * O[1] < L[1] * O[0] ? -1 : 1) * Math.acos(G(L, O));
      }, N = E([1, 0], [(y - T) / b, (P - R) / u]), F = [(y - T) / b, (P - R) / u], o = [(-1 * y - T) / b, (-1 * P - R) / u], w = E(F, o);
      return G(F, o) <= -1 && (w = Math.PI), G(F, o) >= 1 && (w = 0), p === 0 && w > 0 && (w = w - 2 * Math.PI), p === 1 && w < 0 && (w = w + 2 * Math.PI), [D, k, b, u, N, w, m, p];
    }
  };
  return or.Path = C, C.prototype.className = "Path", C.prototype._attrsAffectingSize = ["data"], (0, A._registerNode)(C), t.Factory.addGetterSetter(C, "data"), or;
}
var ya;
function xd() {
  if (ya) return ar;
  ya = 1, Object.defineProperty(ar, "__esModule", { value: !0 }), ar.Arrow = void 0;
  const t = le(), l = Cs(), A = he(), f = oe(), C = on();
  let g = class extends l.Line {
    _sceneFunc(i) {
      super._sceneFunc(i);
      var c = Math.PI * 2, v = this.points(), S = v, p = this.tension() !== 0 && v.length > 4;
      p && (S = this.getTensionPoints());
      var b = this.pointerLength(), u = v.length, s, m;
      if (p) {
        const h = [
          S[S.length - 4],
          S[S.length - 3],
          S[S.length - 2],
          S[S.length - 1],
          v[u - 2],
          v[u - 1]
        ], n = C.Path.calcLength(S[S.length - 4], S[S.length - 3], "C", h), T = C.Path.getPointOnQuadraticBezier(Math.min(1, 1 - b / n), h[0], h[1], h[2], h[3], h[4], h[5]);
        s = v[u - 2] - T.x, m = v[u - 1] - T.y;
      } else
        s = v[u - 2] - v[u - 4], m = v[u - 1] - v[u - 3];
      var y = (Math.atan2(m, s) + c) % c, P = this.pointerWidth();
      this.pointerAtEnding() && (i.save(), i.beginPath(), i.translate(v[u - 2], v[u - 1]), i.rotate(y), i.moveTo(0, 0), i.lineTo(-b, P / 2), i.lineTo(-b, -P / 2), i.closePath(), i.restore(), this.__fillStroke(i)), this.pointerAtBeginning() && (i.save(), i.beginPath(), i.translate(v[0], v[1]), p ? (s = (S[0] + S[2]) / 2 - v[0], m = (S[1] + S[3]) / 2 - v[1]) : (s = v[2] - v[0], m = v[3] - v[1]), i.rotate((Math.atan2(-m, -s) + c) % c), i.moveTo(0, 0), i.lineTo(-b, P / 2), i.lineTo(-b, -P / 2), i.closePath(), i.restore(), this.__fillStroke(i));
    }
    __fillStroke(i) {
      var c = this.dashEnabled();
      c && (this.attrs.dashEnabled = !1, i.setLineDash([])), i.fillStrokeShape(this), c && (this.attrs.dashEnabled = !0);
    }
    getSelfRect() {
      const i = super.getSelfRect(), c = this.pointerWidth() / 2;
      return {
        x: i.x - c,
        y: i.y - c,
        width: i.width + c * 2,
        height: i.height + c * 2
      };
    }
  };
  return ar.Arrow = g, g.prototype.className = "Arrow", (0, f._registerNode)(g), t.Factory.addGetterSetter(g, "pointerLength", 10, (0, A.getNumberValidator)()), t.Factory.addGetterSetter(g, "pointerWidth", 10, (0, A.getNumberValidator)()), t.Factory.addGetterSetter(g, "pointerAtBeginning", !1), t.Factory.addGetterSetter(g, "pointerAtEnding", !0), ar;
}
var lr = {}, Sa;
function Nd() {
  if (Sa) return lr;
  Sa = 1, Object.defineProperty(lr, "__esModule", { value: !0 }), lr.Circle = void 0;
  const t = le(), l = Ie(), A = he(), f = oe();
  let C = class extends l.Shape {
    _sceneFunc(d) {
      d.beginPath(), d.arc(0, 0, this.attrs.radius || 0, 0, Math.PI * 2, !1), d.closePath(), d.fillStrokeShape(this);
    }
    getWidth() {
      return this.radius() * 2;
    }
    getHeight() {
      return this.radius() * 2;
    }
    setWidth(d) {
      this.radius() !== d / 2 && this.radius(d / 2);
    }
    setHeight(d) {
      this.radius() !== d / 2 && this.radius(d / 2);
    }
  };
  return lr.Circle = C, C.prototype._centroid = !0, C.prototype.className = "Circle", C.prototype._attrsAffectingSize = ["radius"], (0, f._registerNode)(C), t.Factory.addGetterSetter(C, "radius", 0, (0, A.getNumberValidator)()), lr;
}
var hr = {}, ba;
function Od() {
  if (ba) return hr;
  ba = 1, Object.defineProperty(hr, "__esModule", { value: !0 }), hr.Ellipse = void 0;
  const t = le(), l = Ie(), A = he(), f = oe();
  let C = class extends l.Shape {
    _sceneFunc(d) {
      var i = this.radiusX(), c = this.radiusY();
      d.beginPath(), d.save(), i !== c && d.scale(1, c / i), d.arc(0, 0, i, 0, Math.PI * 2, !1), d.restore(), d.closePath(), d.fillStrokeShape(this);
    }
    getWidth() {
      return this.radiusX() * 2;
    }
    getHeight() {
      return this.radiusY() * 2;
    }
    setWidth(d) {
      this.radiusX(d / 2);
    }
    setHeight(d) {
      this.radiusY(d / 2);
    }
  };
  return hr.Ellipse = C, C.prototype.className = "Ellipse", C.prototype._centroid = !0, C.prototype._attrsAffectingSize = ["radiusX", "radiusY"], (0, f._registerNode)(C), t.Factory.addComponentsGetterSetter(C, "radius", ["x", "y"]), t.Factory.addGetterSetter(C, "radiusX", 0, (0, A.getNumberValidator)()), t.Factory.addGetterSetter(C, "radiusY", 0, (0, A.getNumberValidator)()), hr;
}
var dr = {}, Ta;
function Dd() {
  if (Ta) return dr;
  Ta = 1, Object.defineProperty(dr, "__esModule", { value: !0 }), dr.Image = void 0;
  const t = Re(), l = le(), A = Ie(), f = oe(), C = he();
  class g extends A.Shape {
    constructor(i) {
      super(i), this.on("imageChange.konva", () => {
        this._setImageLoad();
      }), this._setImageLoad();
    }
    _setImageLoad() {
      const i = this.image();
      i && i.complete || i && i.readyState === 4 || i && i.addEventListener && i.addEventListener("load", () => {
        this._requestDraw();
      });
    }
    _useBufferCanvas() {
      const i = !!this.cornerRadius(), c = this.hasShadow();
      return i && c ? !0 : super._useBufferCanvas(!0);
    }
    _sceneFunc(i) {
      const c = this.getWidth(), v = this.getHeight(), S = this.cornerRadius(), p = this.attrs.image;
      let b;
      if (p) {
        const u = this.attrs.cropWidth, s = this.attrs.cropHeight;
        u && s ? b = [
          p,
          this.cropX(),
          this.cropY(),
          u,
          s,
          0,
          0,
          c,
          v
        ] : b = [p, 0, 0, c, v];
      }
      (this.hasFill() || this.hasStroke() || S) && (i.beginPath(), S ? t.Util.drawRoundedRectPath(i, c, v, S) : i.rect(0, 0, c, v), i.closePath(), i.fillStrokeShape(this)), p && (S && i.clip(), i.drawImage.apply(i, b));
    }
    _hitFunc(i) {
      var c = this.width(), v = this.height(), S = this.cornerRadius();
      i.beginPath(), S ? t.Util.drawRoundedRectPath(i, c, v, S) : i.rect(0, 0, c, v), i.closePath(), i.fillStrokeShape(this);
    }
    getWidth() {
      var i, c;
      return (i = this.attrs.width) !== null && i !== void 0 ? i : (c = this.image()) === null || c === void 0 ? void 0 : c.width;
    }
    getHeight() {
      var i, c;
      return (i = this.attrs.height) !== null && i !== void 0 ? i : (c = this.image()) === null || c === void 0 ? void 0 : c.height;
    }
    static fromURL(i, c, v = null) {
      var S = t.Util.createImageElement();
      S.onload = function() {
        var p = new g({
          image: S
        });
        c(p);
      }, S.onerror = v, S.crossOrigin = "Anonymous", S.src = i;
    }
  }
  return dr.Image = g, g.prototype.className = "Image", (0, f._registerNode)(g), l.Factory.addGetterSetter(g, "cornerRadius", 0, (0, C.getNumberOrArrayOfNumbersValidator)(4)), l.Factory.addGetterSetter(g, "image"), l.Factory.addComponentsGetterSetter(g, "crop", ["x", "y", "width", "height"]), l.Factory.addGetterSetter(g, "cropX", 0, (0, C.getNumberValidator)()), l.Factory.addGetterSetter(g, "cropY", 0, (0, C.getNumberValidator)()), l.Factory.addGetterSetter(g, "cropWidth", 0, (0, C.getNumberValidator)()), l.Factory.addGetterSetter(g, "cropHeight", 0, (0, C.getNumberValidator)()), dr;
}
var At = {}, wa;
function kd() {
  if (wa) return At;
  wa = 1, Object.defineProperty(At, "__esModule", { value: !0 }), At.Tag = At.Label = void 0;
  const t = le(), l = Ie(), A = an(), f = he(), C = oe();
  var g = [
    "fontFamily",
    "fontSize",
    "fontStyle",
    "padding",
    "lineHeight",
    "text",
    "width",
    "height",
    "pointerDirection",
    "pointerWidth",
    "pointerHeight"
  ], d = "Change.konva", i = "none", c = "up", v = "right", S = "down", p = "left", b = g.length;
  let u = class extends A.Group {
    constructor(y) {
      super(y), this.on("add.konva", function(P) {
        this._addListeners(P.child), this._sync();
      });
    }
    getText() {
      return this.find("Text")[0];
    }
    getTag() {
      return this.find("Tag")[0];
    }
    _addListeners(y) {
      var P = this, h, n = function() {
        P._sync();
      };
      for (h = 0; h < b; h++)
        y.on(g[h] + d, n);
    }
    getWidth() {
      return this.getText().width();
    }
    getHeight() {
      return this.getText().height();
    }
    _sync() {
      var y = this.getText(), P = this.getTag(), h, n, T, R, D, k, x;
      if (y && P) {
        switch (h = y.width(), n = y.height(), T = P.pointerDirection(), R = P.pointerWidth(), x = P.pointerHeight(), D = 0, k = 0, T) {
          case c:
            D = h / 2, k = -1 * x;
            break;
          case v:
            D = h + R, k = n / 2;
            break;
          case S:
            D = h / 2, k = n + x;
            break;
          case p:
            D = -1 * R, k = n / 2;
            break;
        }
        P.setAttrs({
          x: -1 * D,
          y: -1 * k,
          width: h,
          height: n
        }), y.setAttrs({
          x: -1 * D,
          y: -1 * k
        });
      }
    }
  };
  At.Label = u, u.prototype.className = "Label", (0, C._registerNode)(u);
  class s extends l.Shape {
    _sceneFunc(y) {
      var P = this.width(), h = this.height(), n = this.pointerDirection(), T = this.pointerWidth(), R = this.pointerHeight(), D = this.cornerRadius();
      let k = 0, x = 0, G = 0, E = 0;
      typeof D == "number" ? k = x = G = E = Math.min(D, P / 2, h / 2) : (k = Math.min(D[0] || 0, P / 2, h / 2), x = Math.min(D[1] || 0, P / 2, h / 2), E = Math.min(D[2] || 0, P / 2, h / 2), G = Math.min(D[3] || 0, P / 2, h / 2)), y.beginPath(), y.moveTo(k, 0), n === c && (y.lineTo((P - T) / 2, 0), y.lineTo(P / 2, -1 * R), y.lineTo((P + T) / 2, 0)), y.lineTo(P - x, 0), y.arc(P - x, x, x, Math.PI * 3 / 2, 0, !1), n === v && (y.lineTo(P, (h - R) / 2), y.lineTo(P + T, h / 2), y.lineTo(P, (h + R) / 2)), y.lineTo(P, h - E), y.arc(P - E, h - E, E, 0, Math.PI / 2, !1), n === S && (y.lineTo((P + T) / 2, h), y.lineTo(P / 2, h + R), y.lineTo((P - T) / 2, h)), y.lineTo(G, h), y.arc(G, h - G, G, Math.PI / 2, Math.PI, !1), n === p && (y.lineTo(0, (h + R) / 2), y.lineTo(-1 * T, h / 2), y.lineTo(0, (h - R) / 2)), y.lineTo(0, k), y.arc(k, k, k, Math.PI, Math.PI * 3 / 2, !1), y.closePath(), y.fillStrokeShape(this);
    }
    getSelfRect() {
      var y = 0, P = 0, h = this.pointerWidth(), n = this.pointerHeight(), T = this.pointerDirection(), R = this.width(), D = this.height();
      return T === c ? (P -= n, D += n) : T === S ? D += n : T === p ? (y -= h * 1.5, R += h) : T === v && (R += h * 1.5), {
        x: y,
        y: P,
        width: R,
        height: D
      };
    }
  }
  return At.Tag = s, s.prototype.className = "Tag", (0, C._registerNode)(s), t.Factory.addGetterSetter(s, "pointerDirection", i), t.Factory.addGetterSetter(s, "pointerWidth", 0, (0, f.getNumberValidator)()), t.Factory.addGetterSetter(s, "pointerHeight", 0, (0, f.getNumberValidator)()), t.Factory.addGetterSetter(s, "cornerRadius", 0, (0, f.getNumberOrArrayOfNumbersValidator)(4)), At;
}
var ur = {}, Ca;
function Es() {
  if (Ca) return ur;
  Ca = 1, Object.defineProperty(ur, "__esModule", { value: !0 }), ur.Rect = void 0;
  const t = le(), l = Ie(), A = oe(), f = Re(), C = he();
  let g = class extends l.Shape {
    _sceneFunc(i) {
      var c = this.cornerRadius(), v = this.width(), S = this.height();
      i.beginPath(), c ? f.Util.drawRoundedRectPath(i, v, S, c) : i.rect(0, 0, v, S), i.closePath(), i.fillStrokeShape(this);
    }
  };
  return ur.Rect = g, g.prototype.className = "Rect", (0, A._registerNode)(g), t.Factory.addGetterSetter(g, "cornerRadius", 0, (0, C.getNumberOrArrayOfNumbersValidator)(4)), ur;
}
var cr = {}, Ea;
function Id() {
  if (Ea) return cr;
  Ea = 1, Object.defineProperty(cr, "__esModule", { value: !0 }), cr.RegularPolygon = void 0;
  const t = le(), l = Ie(), A = he(), f = oe();
  let C = class extends l.Shape {
    _sceneFunc(d) {
      const i = this._getPoints();
      d.beginPath(), d.moveTo(i[0].x, i[0].y);
      for (var c = 1; c < i.length; c++)
        d.lineTo(i[c].x, i[c].y);
      d.closePath(), d.fillStrokeShape(this);
    }
    _getPoints() {
      const d = this.attrs.sides, i = this.attrs.radius || 0, c = [];
      for (var v = 0; v < d; v++)
        c.push({
          x: i * Math.sin(v * 2 * Math.PI / d),
          y: -1 * i * Math.cos(v * 2 * Math.PI / d)
        });
      return c;
    }
    getSelfRect() {
      const d = this._getPoints();
      var i = d[0].x, c = d[0].y, v = d[0].x, S = d[0].y;
      return d.forEach((p) => {
        i = Math.min(i, p.x), c = Math.max(c, p.x), v = Math.min(v, p.y), S = Math.max(S, p.y);
      }), {
        x: i,
        y: v,
        width: c - i,
        height: S - v
      };
    }
    getWidth() {
      return this.radius() * 2;
    }
    getHeight() {
      return this.radius() * 2;
    }
    setWidth(d) {
      this.radius(d / 2);
    }
    setHeight(d) {
      this.radius(d / 2);
    }
  };
  return cr.RegularPolygon = C, C.prototype.className = "RegularPolygon", C.prototype._centroid = !0, C.prototype._attrsAffectingSize = ["radius"], (0, f._registerNode)(C), t.Factory.addGetterSetter(C, "radius", 0, (0, A.getNumberValidator)()), t.Factory.addGetterSetter(C, "sides", 0, (0, A.getNumberValidator)()), cr;
}
var fr = {}, Aa;
function Fd() {
  if (Aa) return fr;
  Aa = 1, Object.defineProperty(fr, "__esModule", { value: !0 }), fr.Ring = void 0;
  const t = le(), l = Ie(), A = he(), f = oe();
  var C = Math.PI * 2;
  let g = class extends l.Shape {
    _sceneFunc(i) {
      i.beginPath(), i.arc(0, 0, this.innerRadius(), 0, C, !1), i.moveTo(this.outerRadius(), 0), i.arc(0, 0, this.outerRadius(), C, 0, !0), i.closePath(), i.fillStrokeShape(this);
    }
    getWidth() {
      return this.outerRadius() * 2;
    }
    getHeight() {
      return this.outerRadius() * 2;
    }
    setWidth(i) {
      this.outerRadius(i / 2);
    }
    setHeight(i) {
      this.outerRadius(i / 2);
    }
  };
  return fr.Ring = g, g.prototype.className = "Ring", g.prototype._centroid = !0, g.prototype._attrsAffectingSize = ["innerRadius", "outerRadius"], (0, f._registerNode)(g), t.Factory.addGetterSetter(g, "innerRadius", 0, (0, A.getNumberValidator)()), t.Factory.addGetterSetter(g, "outerRadius", 0, (0, A.getNumberValidator)()), fr;
}
var gr = {}, Ra;
function Gd() {
  if (Ra) return gr;
  Ra = 1, Object.defineProperty(gr, "__esModule", { value: !0 }), gr.Sprite = void 0;
  const t = le(), l = Ie(), A = sn(), f = he(), C = oe();
  let g = class extends l.Shape {
    constructor(i) {
      super(i), this._updated = !0, this.anim = new A.Animation(() => {
        var c = this._updated;
        return this._updated = !1, c;
      }), this.on("animationChange.konva", function() {
        this.frameIndex(0);
      }), this.on("frameIndexChange.konva", function() {
        this._updated = !0;
      }), this.on("frameRateChange.konva", function() {
        this.anim.isRunning() && (clearInterval(this.interval), this._setInterval());
      });
    }
    _sceneFunc(i) {
      var c = this.animation(), v = this.frameIndex(), S = v * 4, p = this.animations()[c], b = this.frameOffsets(), u = p[S + 0], s = p[S + 1], m = p[S + 2], y = p[S + 3], P = this.image();
      if ((this.hasFill() || this.hasStroke()) && (i.beginPath(), i.rect(0, 0, m, y), i.closePath(), i.fillStrokeShape(this)), P)
        if (b) {
          var h = b[c], n = v * 2;
          i.drawImage(P, u, s, m, y, h[n + 0], h[n + 1], m, y);
        } else
          i.drawImage(P, u, s, m, y, 0, 0, m, y);
    }
    _hitFunc(i) {
      var c = this.animation(), v = this.frameIndex(), S = v * 4, p = this.animations()[c], b = this.frameOffsets(), u = p[S + 2], s = p[S + 3];
      if (i.beginPath(), b) {
        var m = b[c], y = v * 2;
        i.rect(m[y + 0], m[y + 1], u, s);
      } else
        i.rect(0, 0, u, s);
      i.closePath(), i.fillShape(this);
    }
    _useBufferCanvas() {
      return super._useBufferCanvas(!0);
    }
    _setInterval() {
      var i = this;
      this.interval = setInterval(function() {
        i._updateIndex();
      }, 1e3 / this.frameRate());
    }
    start() {
      if (!this.isRunning()) {
        var i = this.getLayer();
        this.anim.setLayers(i), this._setInterval(), this.anim.start();
      }
    }
    stop() {
      this.anim.stop(), clearInterval(this.interval);
    }
    isRunning() {
      return this.anim.isRunning();
    }
    _updateIndex() {
      var i = this.frameIndex(), c = this.animation(), v = this.animations(), S = v[c], p = S.length / 4;
      i < p - 1 ? this.frameIndex(i + 1) : this.frameIndex(0);
    }
  };
  return gr.Sprite = g, g.prototype.className = "Sprite", (0, C._registerNode)(g), t.Factory.addGetterSetter(g, "animation"), t.Factory.addGetterSetter(g, "animations"), t.Factory.addGetterSetter(g, "frameOffsets"), t.Factory.addGetterSetter(g, "image"), t.Factory.addGetterSetter(g, "frameIndex", 0, (0, f.getNumberValidator)()), t.Factory.addGetterSetter(g, "frameRate", 17, (0, f.getNumberValidator)()), t.Factory.backCompat(g, {
    index: "frameIndex",
    getIndex: "getFrameIndex",
    setIndex: "setFrameIndex"
  }), gr;
}
var _r = {}, La;
function Ud() {
  if (La) return _r;
  La = 1, Object.defineProperty(_r, "__esModule", { value: !0 }), _r.Star = void 0;
  const t = le(), l = Ie(), A = he(), f = oe();
  let C = class extends l.Shape {
    _sceneFunc(d) {
      var i = this.innerRadius(), c = this.outerRadius(), v = this.numPoints();
      d.beginPath(), d.moveTo(0, 0 - c);
      for (var S = 1; S < v * 2; S++) {
        var p = S % 2 === 0 ? c : i, b = p * Math.sin(S * Math.PI / v), u = -1 * p * Math.cos(S * Math.PI / v);
        d.lineTo(b, u);
      }
      d.closePath(), d.fillStrokeShape(this);
    }
    getWidth() {
      return this.outerRadius() * 2;
    }
    getHeight() {
      return this.outerRadius() * 2;
    }
    setWidth(d) {
      this.outerRadius(d / 2);
    }
    setHeight(d) {
      this.outerRadius(d / 2);
    }
  };
  return _r.Star = C, C.prototype.className = "Star", C.prototype._centroid = !0, C.prototype._attrsAffectingSize = ["innerRadius", "outerRadius"], (0, f._registerNode)(C), t.Factory.addGetterSetter(C, "numPoints", 5, (0, A.getNumberValidator)()), t.Factory.addGetterSetter(C, "innerRadius", 0, (0, A.getNumberValidator)()), t.Factory.addGetterSetter(C, "outerRadius", 0, (0, A.getNumberValidator)()), _r;
}
var Rt = {}, Ma;
function As() {
  if (Ma) return Rt;
  Ma = 1, Object.defineProperty(Rt, "__esModule", { value: !0 }), Rt.Text = Rt.stringToArray = void 0;
  const t = Re(), l = le(), A = Ie(), f = oe(), C = he(), g = oe();
  function d(Z) {
    return [...Z].reduce((W, j, q, J) => (new RegExp("\\p{Emoji_Modifier_Base}\\p{Emoji_Modifier}?(?:\\u200D\\p{Emoji_Presentation})+", "u").test(j) ? W.push(j) : new RegExp("\\p{Regional_Indicator}{2}", "u").test(j + (J[q + 1] || "")) ? W.push(j + J[q + 1]) : q > 0 && new RegExp("\\p{Mn}|\\p{Me}|\\p{Mc}", "u").test(j) ? W[W.length - 1] += j : W.push(j), W), []);
  }
  Rt.stringToArray = d;
  var i = "auto", c = "center", v = "inherit", S = "justify", p = "Change.konva", b = "2d", u = "-", s = "left", m = "text", y = "Text", P = "top", h = "bottom", n = "middle", T = "normal", R = "px ", D = " ", k = "right", x = "rtl", G = "word", E = "char", N = "none", F = "…", o = [
    "direction",
    "fontFamily",
    "fontSize",
    "fontStyle",
    "fontVariant",
    "padding",
    "align",
    "verticalAlign",
    "lineHeight",
    "text",
    "width",
    "height",
    "wrap",
    "ellipsis",
    "letterSpacing"
  ], w = o.length;
  function L(Z) {
    return Z.split(",").map((W) => {
      W = W.trim();
      const j = W.indexOf(" ") >= 0, q = W.indexOf('"') >= 0 || W.indexOf("'") >= 0;
      return j && !q && (W = `"${W}"`), W;
    }).join(", ");
  }
  var O;
  function I() {
    return O || (O = t.Util.createCanvasElement().getContext(b), O);
  }
  function H(Z) {
    Z.fillText(this._partialText, this._partialTextX, this._partialTextY);
  }
  function B(Z) {
    Z.setAttr("miterLimit", 2), Z.strokeText(this._partialText, this._partialTextX, this._partialTextY);
  }
  function $(Z) {
    return Z = Z || {}, !Z.fillLinearGradientColorStops && !Z.fillRadialGradientColorStops && !Z.fillPatternImage && (Z.fill = Z.fill || "black"), Z;
  }
  let z = class extends A.Shape {
    constructor(W) {
      super($(W)), this._partialTextX = 0, this._partialTextY = 0;
      for (var j = 0; j < w; j++)
        this.on(o[j] + p, this._setTextData);
      this._setTextData();
    }
    _sceneFunc(W) {
      var j = this.textArr, q = j.length;
      if (this.text()) {
        var J = this.padding(), Y = this.fontSize(), V = this.lineHeight() * Y, X = this.verticalAlign(), re = this.direction(), ie = 0, ne = this.align(), pe = this.getWidth(), me = this.letterSpacing(), se = this.fill(), De = this.textDecoration(), ve = De.indexOf("underline") !== -1, be = De.indexOf("line-through") !== -1, Je;
        re = re === v ? W.direction : re;
        var Fe = V / 2, Ne = n;
        if (f.Konva._fixTextRendering) {
          var Ae = this.measureSize("M");
          Ne = "alphabetic", Fe = (Ae.fontBoundingBoxAscent - Ae.fontBoundingBoxDescent) / 2 + V / 2;
        }
        var Pe = 0, Ve = 0;
        for (re === x && W.setAttr("direction", re), W.setAttr("font", this._getContextFont()), W.setAttr("textBaseline", Ne), W.setAttr("textAlign", s), X === n ? ie = (this.getHeight() - q * V - J * 2) / 2 : X === h && (ie = this.getHeight() - q * V - J * 2), W.translate(J, ie + J), Je = 0; Je < q; Je++) {
          var Pe = 0, Ve = 0, et = j[Je], fe = et.text, je = et.width, $e = et.lastInParagraph, We, ge, ze;
          if (W.save(), ne === k ? Pe += pe - je - J * 2 : ne === c && (Pe += (pe - je - J * 2) / 2), ve) {
            W.save(), W.beginPath();
            let at = f.Konva._fixTextRendering ? Math.round(Y / 4) : Math.round(Y / 2);
            const Pt = Pe, Tt = Fe + Ve + at;
            W.moveTo(Pt, Tt), We = fe.split(" ").length - 1, ge = We === 0, ze = ne === S && !$e ? pe - J * 2 : je, W.lineTo(Pt + Math.round(ze), Tt), W.lineWidth = Y / 15;
            const _i = this._getLinearGradient();
            W.strokeStyle = _i || se, W.stroke(), W.restore();
          }
          if (be) {
            W.save(), W.beginPath();
            let at = f.Konva._fixTextRendering ? -Math.round(Y / 4) : 0;
            W.moveTo(Pe, Fe + Ve + at), We = fe.split(" ").length - 1, ge = We === 0, ze = ne === S && $e && !ge ? pe - J * 2 : je, W.lineTo(Pe + Math.round(ze), Fe + Ve + at), W.lineWidth = Y / 15;
            const Pt = this._getLinearGradient();
            W.strokeStyle = Pt || se, W.stroke(), W.restore();
          }
          if (re !== x && (me !== 0 || ne === S)) {
            We = fe.split(" ").length - 1;
            for (var mt = d(fe), tt = 0; tt < mt.length; tt++) {
              var nt = mt[tt];
              nt === " " && !$e && ne === S && (Pe += (pe - J * 2 - je) / We), this._partialTextX = Pe, this._partialTextY = Fe + Ve, this._partialText = nt, W.fillStrokeShape(this), Pe += this.measureSize(nt).width + me;
            }
          } else
            me !== 0 && W.setAttr("letterSpacing", `${me}px`), this._partialTextX = Pe, this._partialTextY = Fe + Ve, this._partialText = fe, W.fillStrokeShape(this);
          W.restore(), q > 1 && (Fe += V);
        }
      }
    }
    _hitFunc(W) {
      var j = this.getWidth(), q = this.getHeight();
      W.beginPath(), W.rect(0, 0, j, q), W.closePath(), W.fillStrokeShape(this);
    }
    setText(W) {
      var j = t.Util._isString(W) ? W : W == null ? "" : W + "";
      return this._setAttr(m, j), this;
    }
    getWidth() {
      var W = this.attrs.width === i || this.attrs.width === void 0;
      return W ? this.getTextWidth() + this.padding() * 2 : this.attrs.width;
    }
    getHeight() {
      var W = this.attrs.height === i || this.attrs.height === void 0;
      return W ? this.fontSize() * this.textArr.length * this.lineHeight() + this.padding() * 2 : this.attrs.height;
    }
    getTextWidth() {
      return this.textWidth;
    }
    getTextHeight() {
      return t.Util.warn("text.getTextHeight() method is deprecated. Use text.height() - for full height and text.fontSize() - for one line height."), this.textHeight;
    }
    measureSize(W) {
      var j, q, J, Y, V, X, re, ie, ne, pe, me, se = I(), De = this.fontSize(), ve;
      se.save(), se.font = this._getContextFont(), ve = se.measureText(W), se.restore();
      const be = De / 100;
      return {
        actualBoundingBoxAscent: (j = ve.actualBoundingBoxAscent) !== null && j !== void 0 ? j : 71.58203125 * be,
        actualBoundingBoxDescent: (q = ve.actualBoundingBoxDescent) !== null && q !== void 0 ? q : 0,
        actualBoundingBoxLeft: (J = ve.actualBoundingBoxLeft) !== null && J !== void 0 ? J : -7.421875 * be,
        actualBoundingBoxRight: (Y = ve.actualBoundingBoxRight) !== null && Y !== void 0 ? Y : 75.732421875 * be,
        alphabeticBaseline: (V = ve.alphabeticBaseline) !== null && V !== void 0 ? V : 0,
        emHeightAscent: (X = ve.emHeightAscent) !== null && X !== void 0 ? X : 100 * be,
        emHeightDescent: (re = ve.emHeightDescent) !== null && re !== void 0 ? re : -20 * be,
        fontBoundingBoxAscent: (ie = ve.fontBoundingBoxAscent) !== null && ie !== void 0 ? ie : 91 * be,
        fontBoundingBoxDescent: (ne = ve.fontBoundingBoxDescent) !== null && ne !== void 0 ? ne : 21 * be,
        hangingBaseline: (pe = ve.hangingBaseline) !== null && pe !== void 0 ? pe : 72.80000305175781 * be,
        ideographicBaseline: (me = ve.ideographicBaseline) !== null && me !== void 0 ? me : -21 * be,
        width: ve.width,
        height: De
      };
    }
    _getContextFont() {
      return this.fontStyle() + D + this.fontVariant() + D + (this.fontSize() + R) + L(this.fontFamily());
    }
    _addTextLine(W) {
      this.align() === S && (W = W.trim());
      var q = this._getTextWidth(W);
      return this.textArr.push({
        text: W,
        width: q,
        lastInParagraph: !1
      });
    }
    _getTextWidth(W) {
      var j = this.letterSpacing(), q = W.length;
      return I().measureText(W).width + (q ? j * (q - 1) : 0);
    }
    _setTextData() {
      var W = this.text().split(`
`), j = +this.fontSize(), q = 0, J = this.lineHeight() * j, Y = this.attrs.width, V = this.attrs.height, X = Y !== i && Y !== void 0, re = V !== i && V !== void 0, ie = this.padding(), ne = Y - ie * 2, pe = V - ie * 2, me = 0, se = this.wrap(), De = se !== N, ve = se !== E && De, be = this.ellipsis();
      this.textArr = [], I().font = this._getContextFont();
      for (var Je = be ? this._getTextWidth(F) : 0, Fe = 0, Ne = W.length; Fe < Ne; ++Fe) {
        var Ae = W[Fe], Pe = this._getTextWidth(Ae);
        if (X && Pe > ne)
          for (; Ae.length > 0; ) {
            for (var Ve = 0, et = Ae.length, fe = "", je = 0; Ve < et; ) {
              var $e = Ve + et >>> 1, We = Ae.slice(0, $e + 1), ge = this._getTextWidth(We) + Je;
              ge <= ne ? (Ve = $e + 1, fe = We, je = ge) : et = $e;
            }
            if (fe) {
              if (ve) {
                var ze, mt = Ae[fe.length], tt = mt === D || mt === u;
                tt && je <= ne ? ze = fe.length : ze = Math.max(fe.lastIndexOf(D), fe.lastIndexOf(u)) + 1, ze > 0 && (Ve = ze, fe = fe.slice(0, Ve), je = this._getTextWidth(fe));
              }
              fe = fe.trimRight(), this._addTextLine(fe), q = Math.max(q, je), me += J;
              var nt = this._shouldHandleEllipsis(me);
              if (nt) {
                this._tryToAddEllipsisToLastLine();
                break;
              }
              if (Ae = Ae.slice(Ve), Ae = Ae.trimLeft(), Ae.length > 0 && (Pe = this._getTextWidth(Ae), Pe <= ne)) {
                this._addTextLine(Ae), me += J, q = Math.max(q, Pe);
                break;
              }
            } else
              break;
          }
        else
          this._addTextLine(Ae), me += J, q = Math.max(q, Pe), this._shouldHandleEllipsis(me) && Fe < Ne - 1 && this._tryToAddEllipsisToLastLine();
        if (this.textArr[this.textArr.length - 1] && (this.textArr[this.textArr.length - 1].lastInParagraph = !0), re && me + J > pe)
          break;
      }
      this.textHeight = j, this.textWidth = q;
    }
    _shouldHandleEllipsis(W) {
      var j = +this.fontSize(), q = this.lineHeight() * j, J = this.attrs.height, Y = J !== i && J !== void 0, V = this.padding(), X = J - V * 2, re = this.wrap(), ie = re !== N;
      return !ie || Y && W + q > X;
    }
    _tryToAddEllipsisToLastLine() {
      var W = this.attrs.width, j = W !== i && W !== void 0, q = this.padding(), J = W - q * 2, Y = this.ellipsis(), V = this.textArr[this.textArr.length - 1];
      if (!(!V || !Y)) {
        if (j) {
          var X = this._getTextWidth(V.text + F) < J;
          X || (V.text = V.text.slice(0, V.text.length - 3));
        }
        this.textArr.splice(this.textArr.length - 1, 1), this._addTextLine(V.text + F);
      }
    }
    getStrokeScaleEnabled() {
      return !0;
    }
    _useBufferCanvas() {
      const W = this.textDecoration().indexOf("underline") !== -1 || this.textDecoration().indexOf("line-through") !== -1, j = this.hasShadow();
      return W && j ? !0 : super._useBufferCanvas();
    }
  };
  return Rt.Text = z, z.prototype._fillFunc = H, z.prototype._strokeFunc = B, z.prototype.className = y, z.prototype._attrsAffectingSize = [
    "text",
    "fontSize",
    "padding",
    "wrap",
    "lineHeight",
    "letterSpacing"
  ], (0, g._registerNode)(z), l.Factory.overWriteSetter(z, "width", (0, C.getNumberOrAutoValidator)()), l.Factory.overWriteSetter(z, "height", (0, C.getNumberOrAutoValidator)()), l.Factory.addGetterSetter(z, "direction", v), l.Factory.addGetterSetter(z, "fontFamily", "Arial"), l.Factory.addGetterSetter(z, "fontSize", 12, (0, C.getNumberValidator)()), l.Factory.addGetterSetter(z, "fontStyle", T), l.Factory.addGetterSetter(z, "fontVariant", T), l.Factory.addGetterSetter(z, "padding", 0, (0, C.getNumberValidator)()), l.Factory.addGetterSetter(z, "align", s), l.Factory.addGetterSetter(z, "verticalAlign", P), l.Factory.addGetterSetter(z, "lineHeight", 1, (0, C.getNumberValidator)()), l.Factory.addGetterSetter(z, "wrap", G), l.Factory.addGetterSetter(z, "ellipsis", !1, (0, C.getBooleanValidator)()), l.Factory.addGetterSetter(z, "letterSpacing", 0, (0, C.getNumberValidator)()), l.Factory.addGetterSetter(z, "text", "", (0, C.getStringValidator)()), l.Factory.addGetterSetter(z, "textDecoration", ""), Rt;
}
var vr = {}, Pa;
function Yd() {
  if (Pa) return vr;
  Pa = 1, Object.defineProperty(vr, "__esModule", { value: !0 }), vr.TextPath = void 0;
  const t = Re(), l = le(), A = Ie(), f = on(), C = As(), g = he(), d = oe();
  var i = "", c = "normal";
  function v(b) {
    b.fillText(this.partialText, 0, 0);
  }
  function S(b) {
    b.strokeText(this.partialText, 0, 0);
  }
  let p = class extends A.Shape {
    constructor(u) {
      super(u), this.dummyCanvas = t.Util.createCanvasElement(), this.dataArray = [], this._readDataAttribute(), this.on("dataChange.konva", function() {
        this._readDataAttribute(), this._setTextData();
      }), this.on("textChange.konva alignChange.konva letterSpacingChange.konva kerningFuncChange.konva fontSizeChange.konva fontFamilyChange.konva", this._setTextData), this._setTextData();
    }
    _getTextPathLength() {
      return f.Path.getPathLength(this.dataArray);
    }
    _getPointAtLength(u) {
      if (!this.attrs.data)
        return null;
      const s = this.pathLength;
      return u - 1 > s ? null : f.Path.getPointAtLengthOfDataArray(u, this.dataArray);
    }
    _readDataAttribute() {
      this.dataArray = f.Path.parsePathData(this.attrs.data), this.pathLength = this._getTextPathLength();
    }
    _sceneFunc(u) {
      u.setAttr("font", this._getContextFont()), u.setAttr("textBaseline", this.textBaseline()), u.setAttr("textAlign", "left"), u.save();
      var s = this.textDecoration(), m = this.fill(), y = this.fontSize(), P = this.glyphInfo;
      s === "underline" && u.beginPath();
      for (var h = 0; h < P.length; h++) {
        u.save();
        var n = P[h].p0;
        u.translate(n.x, n.y), u.rotate(P[h].rotation), this.partialText = P[h].text, u.fillStrokeShape(this), s === "underline" && (h === 0 && u.moveTo(0, y / 2 + 1), u.lineTo(y, y / 2 + 1)), u.restore();
      }
      s === "underline" && (u.strokeStyle = m, u.lineWidth = y / 20, u.stroke()), u.restore();
    }
    _hitFunc(u) {
      u.beginPath();
      var s = this.glyphInfo;
      if (s.length >= 1) {
        var m = s[0].p0;
        u.moveTo(m.x, m.y);
      }
      for (var y = 0; y < s.length; y++) {
        var P = s[y].p1;
        u.lineTo(P.x, P.y);
      }
      u.setAttr("lineWidth", this.fontSize()), u.setAttr("strokeStyle", this.colorKey), u.stroke();
    }
    getTextWidth() {
      return this.textWidth;
    }
    getTextHeight() {
      return t.Util.warn("text.getTextHeight() method is deprecated. Use text.height() - for full height and text.fontSize() - for one line height."), this.textHeight;
    }
    setText(u) {
      return C.Text.prototype.setText.call(this, u);
    }
    _getContextFont() {
      return C.Text.prototype._getContextFont.call(this);
    }
    _getTextSize(u) {
      var s = this.dummyCanvas, m = s.getContext("2d");
      m.save(), m.font = this._getContextFont();
      var y = m.measureText(u);
      return m.restore(), {
        width: y.width,
        height: parseInt(`${this.fontSize()}`, 10)
      };
    }
    _setTextData() {
      const { width: u, height: s } = this._getTextSize(this.attrs.text);
      if (this.textWidth = u, this.textHeight = s, this.glyphInfo = [], !this.attrs.data)
        return null;
      const m = this.letterSpacing(), y = this.align(), P = this.kerningFunc(), h = Math.max(this.textWidth + ((this.attrs.text || "").length - 1) * m, 0);
      let n = 0;
      y === "center" && (n = Math.max(0, this.pathLength / 2 - h / 2)), y === "right" && (n = Math.max(0, this.pathLength - h));
      const T = (0, C.stringToArray)(this.text());
      let R = n;
      for (var D = 0; D < T.length; D++) {
        const k = this._getPointAtLength(R);
        if (!k)
          return;
        let x = this._getTextSize(T[D]).width + m;
        if (T[D] === " " && y === "justify") {
          const w = this.text().split(" ").length - 1;
          x += (this.pathLength - h) / w;
        }
        const G = this._getPointAtLength(R + x);
        if (!G)
          return;
        const E = f.Path.getLineLength(k.x, k.y, G.x, G.y);
        let N = 0;
        if (P)
          try {
            N = P(T[D - 1], T[D]) * this.fontSize();
          } catch {
            N = 0;
          }
        k.x += N, G.x += N, this.textWidth += N;
        const F = f.Path.getPointOnLine(N + E / 2, k.x, k.y, G.x, G.y), o = Math.atan2(G.y - k.y, G.x - k.x);
        this.glyphInfo.push({
          transposeX: F.x,
          transposeY: F.y,
          text: T[D],
          rotation: o,
          p0: k,
          p1: G
        }), R += x;
      }
    }
    getSelfRect() {
      if (!this.glyphInfo.length)
        return {
          x: 0,
          y: 0,
          width: 0,
          height: 0
        };
      var u = [];
      this.glyphInfo.forEach(function(D) {
        u.push(D.p0.x), u.push(D.p0.y), u.push(D.p1.x), u.push(D.p1.y);
      });
      for (var s = u[0] || 0, m = u[0] || 0, y = u[1] || 0, P = u[1] || 0, h, n, T = 0; T < u.length / 2; T++)
        h = u[T * 2], n = u[T * 2 + 1], s = Math.min(s, h), m = Math.max(m, h), y = Math.min(y, n), P = Math.max(P, n);
      var R = this.fontSize();
      return {
        x: s - R / 2,
        y: y - R / 2,
        width: m - s + R,
        height: P - y + R
      };
    }
    destroy() {
      return t.Util.releaseCanvas(this.dummyCanvas), super.destroy();
    }
  };
  return vr.TextPath = p, p.prototype._fillFunc = v, p.prototype._strokeFunc = S, p.prototype._fillFuncHit = v, p.prototype._strokeFuncHit = S, p.prototype.className = "TextPath", p.prototype._attrsAffectingSize = ["text", "fontSize", "data"], (0, d._registerNode)(p), l.Factory.addGetterSetter(p, "data"), l.Factory.addGetterSetter(p, "fontFamily", "Arial"), l.Factory.addGetterSetter(p, "fontSize", 12, (0, g.getNumberValidator)()), l.Factory.addGetterSetter(p, "fontStyle", c), l.Factory.addGetterSetter(p, "align", "left"), l.Factory.addGetterSetter(p, "letterSpacing", 0, (0, g.getNumberValidator)()), l.Factory.addGetterSetter(p, "textBaseline", "middle"), l.Factory.addGetterSetter(p, "fontVariant", c), l.Factory.addGetterSetter(p, "text", i), l.Factory.addGetterSetter(p, "textDecoration", null), l.Factory.addGetterSetter(p, "kerningFunc", null), vr;
}
var pr = {}, xa;
function Bd() {
  if (xa) return pr;
  xa = 1, Object.defineProperty(pr, "__esModule", { value: !0 }), pr.Transformer = void 0;
  const t = Re(), l = le(), A = Me(), f = Ie(), C = Es(), g = an(), d = oe(), i = he(), c = oe();
  var v = "tr-konva", S = [
    "resizeEnabledChange",
    "rotateAnchorOffsetChange",
    "rotateEnabledChange",
    "enabledAnchorsChange",
    "anchorSizeChange",
    "borderEnabledChange",
    "borderStrokeChange",
    "borderStrokeWidthChange",
    "borderDashChange",
    "anchorStrokeChange",
    "anchorStrokeWidthChange",
    "anchorFillChange",
    "anchorCornerRadiusChange",
    "ignoreStrokeChange",
    "anchorStyleFuncChange"
  ].map((G) => G + `.${v}`).join(" "), p = "nodesRect", b = [
    "widthChange",
    "heightChange",
    "scaleXChange",
    "scaleYChange",
    "skewXChange",
    "skewYChange",
    "rotationChange",
    "offsetXChange",
    "offsetYChange",
    "transformsEnabledChange",
    "strokeWidthChange"
  ], u = {
    "top-left": -45,
    "top-center": 0,
    "top-right": 45,
    "middle-right": -90,
    "middle-left": 90,
    "bottom-left": -135,
    "bottom-center": 180,
    "bottom-right": 135
  };
  const s = "ontouchstart" in d.Konva._global;
  function m(G, E, N) {
    if (G === "rotater")
      return N;
    E += t.Util.degToRad(u[G] || 0);
    var F = (t.Util.radToDeg(E) % 360 + 360) % 360;
    return t.Util._inRange(F, 315 + 22.5, 360) || t.Util._inRange(F, 0, 22.5) ? "ns-resize" : t.Util._inRange(F, 45 - 22.5, 45 + 22.5) ? "nesw-resize" : t.Util._inRange(F, 90 - 22.5, 90 + 22.5) ? "ew-resize" : t.Util._inRange(F, 135 - 22.5, 135 + 22.5) ? "nwse-resize" : t.Util._inRange(F, 180 - 22.5, 180 + 22.5) ? "ns-resize" : t.Util._inRange(F, 225 - 22.5, 225 + 22.5) ? "nesw-resize" : t.Util._inRange(F, 270 - 22.5, 270 + 22.5) ? "ew-resize" : t.Util._inRange(F, 315 - 22.5, 315 + 22.5) ? "nwse-resize" : (t.Util.error("Transformer has unknown angle for cursor detection: " + F), "pointer");
  }
  var y = [
    "top-left",
    "top-center",
    "top-right",
    "middle-right",
    "middle-left",
    "bottom-left",
    "bottom-center",
    "bottom-right"
  ], P = 1e8;
  function h(G) {
    return {
      x: G.x + G.width / 2 * Math.cos(G.rotation) + G.height / 2 * Math.sin(-G.rotation),
      y: G.y + G.height / 2 * Math.cos(G.rotation) + G.width / 2 * Math.sin(G.rotation)
    };
  }
  function n(G, E, N) {
    const F = N.x + (G.x - N.x) * Math.cos(E) - (G.y - N.y) * Math.sin(E), o = N.y + (G.x - N.x) * Math.sin(E) + (G.y - N.y) * Math.cos(E);
    return {
      ...G,
      rotation: G.rotation + E,
      x: F,
      y: o
    };
  }
  function T(G, E) {
    const N = h(G);
    return n(G, E, N);
  }
  function R(G, E, N) {
    let F = E;
    for (let o = 0; o < G.length; o++) {
      const w = d.Konva.getAngle(G[o]), L = Math.abs(w - E) % (Math.PI * 2);
      Math.min(L, Math.PI * 2 - L) < N && (F = w);
    }
    return F;
  }
  let D = 0, k = class extends g.Group {
    constructor(E) {
      super(E), this._movingAnchorName = null, this._transforming = !1, this._createElements(), this._handleMouseMove = this._handleMouseMove.bind(this), this._handleMouseUp = this._handleMouseUp.bind(this), this.update = this.update.bind(this), this.on(S, this.update), this.getNode() && this.update();
    }
    attachTo(E) {
      return this.setNode(E), this;
    }
    setNode(E) {
      return t.Util.warn("tr.setNode(shape), tr.node(shape) and tr.attachTo(shape) methods are deprecated. Please use tr.nodes(nodesArray) instead."), this.setNodes([E]);
    }
    getNode() {
      return this._nodes && this._nodes[0];
    }
    _getEventNamespace() {
      return v + this._id;
    }
    setNodes(E = []) {
      this._nodes && this._nodes.length && this.detach();
      const N = E.filter((o) => o.isAncestorOf(this) ? (t.Util.error("Konva.Transformer cannot be an a child of the node you are trying to attach"), !1) : !0);
      this._nodes = E = N, E.length === 1 && this.useSingleNodeRotation() ? this.rotation(E[0].getAbsoluteRotation()) : this.rotation(0), this._nodes.forEach((o) => {
        const w = () => {
          this.nodes().length === 1 && this.useSingleNodeRotation() && this.rotation(this.nodes()[0].getAbsoluteRotation()), this._resetTransformCache(), !this._transforming && !this.isDragging() && this.update();
        }, L = o._attrsAffectingSize.map((O) => O + "Change." + this._getEventNamespace()).join(" ");
        o.on(L, w), o.on(b.map((O) => O + `.${this._getEventNamespace()}`).join(" "), w), o.on(`absoluteTransformChange.${this._getEventNamespace()}`, w), this._proxyDrag(o);
      }), this._resetTransformCache();
      var F = !!this.findOne(".top-left");
      return F && this.update(), this;
    }
    _proxyDrag(E) {
      let N;
      E.on(`dragstart.${this._getEventNamespace()}`, (F) => {
        N = E.getAbsolutePosition(), !this.isDragging() && E !== this.findOne(".back") && this.startDrag(F, !1);
      }), E.on(`dragmove.${this._getEventNamespace()}`, (F) => {
        if (!N)
          return;
        const o = E.getAbsolutePosition(), w = o.x - N.x, L = o.y - N.y;
        this.nodes().forEach((O) => {
          if (O === E || O.isDragging())
            return;
          const I = O.getAbsolutePosition();
          O.setAbsolutePosition({
            x: I.x + w,
            y: I.y + L
          }), O.startDrag(F);
        }), N = null;
      });
    }
    getNodes() {
      return this._nodes || [];
    }
    getActiveAnchor() {
      return this._movingAnchorName;
    }
    detach() {
      this._nodes && this._nodes.forEach((E) => {
        E.off("." + this._getEventNamespace());
      }), this._nodes = [], this._resetTransformCache();
    }
    _resetTransformCache() {
      this._clearCache(p), this._clearCache("transform"), this._clearSelfAndDescendantCache("absoluteTransform");
    }
    _getNodeRect() {
      return this._getCache(p, this.__getNodeRect);
    }
    __getNodeShape(E, N = this.rotation(), F) {
      var o = E.getClientRect({
        skipTransform: !0,
        skipShadow: !0,
        skipStroke: this.ignoreStroke()
      }), w = E.getAbsoluteScale(F), L = E.getAbsolutePosition(F), O = o.x * w.x - E.offsetX() * w.x, I = o.y * w.y - E.offsetY() * w.y;
      const H = (d.Konva.getAngle(E.getAbsoluteRotation()) + Math.PI * 2) % (Math.PI * 2), B = {
        x: L.x + O * Math.cos(H) + I * Math.sin(-H),
        y: L.y + I * Math.cos(H) + O * Math.sin(H),
        width: o.width * w.x,
        height: o.height * w.y,
        rotation: H
      };
      return n(B, -d.Konva.getAngle(N), {
        x: 0,
        y: 0
      });
    }
    __getNodeRect() {
      var E = this.getNode();
      if (!E)
        return {
          x: -P,
          y: -P,
          width: 0,
          height: 0,
          rotation: 0
        };
      const N = [];
      this.nodes().map((H) => {
        const B = H.getClientRect({
          skipTransform: !0,
          skipShadow: !0,
          skipStroke: this.ignoreStroke()
        });
        var $ = [
          { x: B.x, y: B.y },
          { x: B.x + B.width, y: B.y },
          { x: B.x + B.width, y: B.y + B.height },
          { x: B.x, y: B.y + B.height }
        ], z = H.getAbsoluteTransform();
        $.forEach(function(Z) {
          var W = z.point(Z);
          N.push(W);
        });
      });
      const F = new t.Transform();
      F.rotate(-d.Konva.getAngle(this.rotation()));
      var o = 1 / 0, w = 1 / 0, L = -1 / 0, O = -1 / 0;
      N.forEach(function(H) {
        var B = F.point(H);
        o === void 0 && (o = L = B.x, w = O = B.y), o = Math.min(o, B.x), w = Math.min(w, B.y), L = Math.max(L, B.x), O = Math.max(O, B.y);
      }), F.invert();
      const I = F.point({ x: o, y: w });
      return {
        x: I.x,
        y: I.y,
        width: L - o,
        height: O - w,
        rotation: d.Konva.getAngle(this.rotation())
      };
    }
    getX() {
      return this._getNodeRect().x;
    }
    getY() {
      return this._getNodeRect().y;
    }
    getWidth() {
      return this._getNodeRect().width;
    }
    getHeight() {
      return this._getNodeRect().height;
    }
    _createElements() {
      this._createBack(), y.forEach((E) => {
        this._createAnchor(E);
      }), this._createAnchor("rotater");
    }
    _createAnchor(E) {
      var N = new C.Rect({
        stroke: "rgb(0, 161, 255)",
        fill: "white",
        strokeWidth: 1,
        name: E + " _anchor",
        dragDistance: 0,
        draggable: !0,
        hitStrokeWidth: s ? 10 : "auto"
      }), F = this;
      N.on("mousedown touchstart", function(o) {
        F._handleMouseDown(o);
      }), N.on("dragstart", (o) => {
        N.stopDrag(), o.cancelBubble = !0;
      }), N.on("dragend", (o) => {
        o.cancelBubble = !0;
      }), N.on("mouseenter", () => {
        var o = d.Konva.getAngle(this.rotation()), w = this.rotateAnchorCursor(), L = m(E, o, w);
        N.getStage().content && (N.getStage().content.style.cursor = L), this._cursorChange = !0;
      }), N.on("mouseout", () => {
        N.getStage().content && (N.getStage().content.style.cursor = ""), this._cursorChange = !1;
      }), this.add(N);
    }
    _createBack() {
      var E = new f.Shape({
        name: "back",
        width: 0,
        height: 0,
        draggable: !0,
        sceneFunc(N, F) {
          var o = F.getParent(), w = o.padding();
          N.beginPath(), N.rect(-w, -w, F.width() + w * 2, F.height() + w * 2), N.moveTo(F.width() / 2, -w), o.rotateEnabled() && o.rotateLineVisible() && N.lineTo(F.width() / 2, -o.rotateAnchorOffset() * t.Util._sign(F.height()) - w), N.fillStrokeShape(F);
        },
        hitFunc: (N, F) => {
          if (this.shouldOverdrawWholeArea()) {
            var o = this.padding();
            N.beginPath(), N.rect(-o, -o, F.width() + o * 2, F.height() + o * 2), N.fillStrokeShape(F);
          }
        }
      });
      this.add(E), this._proxyDrag(E), E.on("dragstart", (N) => {
        N.cancelBubble = !0;
      }), E.on("dragmove", (N) => {
        N.cancelBubble = !0;
      }), E.on("dragend", (N) => {
        N.cancelBubble = !0;
      }), this.on("dragmove", (N) => {
        this.update();
      });
    }
    _handleMouseDown(E) {
      if (!this._transforming) {
        this._movingAnchorName = E.target.name().split(" ")[0];
        var N = this._getNodeRect(), F = N.width, o = N.height, w = Math.sqrt(Math.pow(F, 2) + Math.pow(o, 2));
        this.sin = Math.abs(o / w), this.cos = Math.abs(F / w), typeof window < "u" && (window.addEventListener("mousemove", this._handleMouseMove), window.addEventListener("touchmove", this._handleMouseMove), window.addEventListener("mouseup", this._handleMouseUp, !0), window.addEventListener("touchend", this._handleMouseUp, !0)), this._transforming = !0;
        var L = E.target.getAbsolutePosition(), O = E.target.getStage().getPointerPosition();
        this._anchorDragOffset = {
          x: O.x - L.x,
          y: O.y - L.y
        }, D++, this._fire("transformstart", { evt: E.evt, target: this.getNode() }), this._nodes.forEach((I) => {
          I._fire("transformstart", { evt: E.evt, target: I });
        });
      }
    }
    _handleMouseMove(E) {
      var N, F, o, w = this.findOne("." + this._movingAnchorName), L = w.getStage();
      L.setPointersPositions(E);
      const O = L.getPointerPosition();
      let I = {
        x: O.x - this._anchorDragOffset.x,
        y: O.y - this._anchorDragOffset.y
      };
      const H = w.getAbsolutePosition();
      this.anchorDragBoundFunc() && (I = this.anchorDragBoundFunc()(H, I, E)), w.setAbsolutePosition(I);
      const B = w.getAbsolutePosition();
      if (!(H.x === B.x && H.y === B.y)) {
        if (this._movingAnchorName === "rotater") {
          var $ = this._getNodeRect();
          N = w.x() - $.width / 2, F = -w.y() + $.height / 2;
          let be = Math.atan2(-F, N) + Math.PI / 2;
          $.height < 0 && (be -= Math.PI);
          var z = d.Konva.getAngle(this.rotation());
          const Je = z + be, Fe = d.Konva.getAngle(this.rotationSnapTolerance()), Ae = R(this.rotationSnaps(), Je, Fe) - $.rotation, Pe = T($, Ae);
          this._fitNodesInto(Pe, E);
          return;
        }
        var Z = this.shiftBehavior(), W;
        Z === "inverted" ? W = this.keepRatio() && !E.shiftKey : Z === "none" ? W = this.keepRatio() : W = this.keepRatio() || E.shiftKey;
        var V = this.centeredScaling() || E.altKey;
        if (this._movingAnchorName === "top-left") {
          if (W) {
            var j = V ? {
              x: this.width() / 2,
              y: this.height() / 2
            } : {
              x: this.findOne(".bottom-right").x(),
              y: this.findOne(".bottom-right").y()
            };
            o = Math.sqrt(Math.pow(j.x - w.x(), 2) + Math.pow(j.y - w.y(), 2));
            var q = this.findOne(".top-left").x() > j.x ? -1 : 1, J = this.findOne(".top-left").y() > j.y ? -1 : 1;
            N = o * this.cos * q, F = o * this.sin * J, this.findOne(".top-left").x(j.x - N), this.findOne(".top-left").y(j.y - F);
          }
        } else if (this._movingAnchorName === "top-center")
          this.findOne(".top-left").y(w.y());
        else if (this._movingAnchorName === "top-right") {
          if (W) {
            var j = V ? {
              x: this.width() / 2,
              y: this.height() / 2
            } : {
              x: this.findOne(".bottom-left").x(),
              y: this.findOne(".bottom-left").y()
            };
            o = Math.sqrt(Math.pow(w.x() - j.x, 2) + Math.pow(j.y - w.y(), 2));
            var q = this.findOne(".top-right").x() < j.x ? -1 : 1, J = this.findOne(".top-right").y() > j.y ? -1 : 1;
            N = o * this.cos * q, F = o * this.sin * J, this.findOne(".top-right").x(j.x + N), this.findOne(".top-right").y(j.y - F);
          }
          var Y = w.position();
          this.findOne(".top-left").y(Y.y), this.findOne(".bottom-right").x(Y.x);
        } else if (this._movingAnchorName === "middle-left")
          this.findOne(".top-left").x(w.x());
        else if (this._movingAnchorName === "middle-right")
          this.findOne(".bottom-right").x(w.x());
        else if (this._movingAnchorName === "bottom-left") {
          if (W) {
            var j = V ? {
              x: this.width() / 2,
              y: this.height() / 2
            } : {
              x: this.findOne(".top-right").x(),
              y: this.findOne(".top-right").y()
            };
            o = Math.sqrt(Math.pow(j.x - w.x(), 2) + Math.pow(w.y() - j.y, 2));
            var q = j.x < w.x() ? -1 : 1, J = w.y() < j.y ? -1 : 1;
            N = o * this.cos * q, F = o * this.sin * J, w.x(j.x - N), w.y(j.y + F);
          }
          Y = w.position(), this.findOne(".top-left").x(Y.x), this.findOne(".bottom-right").y(Y.y);
        } else if (this._movingAnchorName === "bottom-center")
          this.findOne(".bottom-right").y(w.y());
        else if (this._movingAnchorName === "bottom-right") {
          if (W) {
            var j = V ? {
              x: this.width() / 2,
              y: this.height() / 2
            } : {
              x: this.findOne(".top-left").x(),
              y: this.findOne(".top-left").y()
            };
            o = Math.sqrt(Math.pow(w.x() - j.x, 2) + Math.pow(w.y() - j.y, 2));
            var q = this.findOne(".bottom-right").x() < j.x ? -1 : 1, J = this.findOne(".bottom-right").y() < j.y ? -1 : 1;
            N = o * this.cos * q, F = o * this.sin * J, this.findOne(".bottom-right").x(j.x + N), this.findOne(".bottom-right").y(j.y + F);
          }
        } else
          console.error(new Error("Wrong position argument of selection resizer: " + this._movingAnchorName));
        var V = this.centeredScaling() || E.altKey;
        if (V) {
          var X = this.findOne(".top-left"), re = this.findOne(".bottom-right"), ie = X.x(), ne = X.y(), pe = this.getWidth() - re.x(), me = this.getHeight() - re.y();
          re.move({
            x: -ie,
            y: -ne
          }), X.move({
            x: pe,
            y: me
          });
        }
        var se = this.findOne(".top-left").getAbsolutePosition();
        N = se.x, F = se.y;
        var De = this.findOne(".bottom-right").x() - this.findOne(".top-left").x(), ve = this.findOne(".bottom-right").y() - this.findOne(".top-left").y();
        this._fitNodesInto({
          x: N,
          y: F,
          width: De,
          height: ve,
          rotation: d.Konva.getAngle(this.rotation())
        }, E);
      }
    }
    _handleMouseUp(E) {
      this._removeEvents(E);
    }
    getAbsoluteTransform() {
      return this.getTransform();
    }
    _removeEvents(E) {
      var N;
      if (this._transforming) {
        this._transforming = !1, typeof window < "u" && (window.removeEventListener("mousemove", this._handleMouseMove), window.removeEventListener("touchmove", this._handleMouseMove), window.removeEventListener("mouseup", this._handleMouseUp, !0), window.removeEventListener("touchend", this._handleMouseUp, !0));
        var F = this.getNode();
        D--, this._fire("transformend", { evt: E, target: F }), (N = this.getLayer()) === null || N === void 0 || N.batchDraw(), F && this._nodes.forEach((o) => {
          var w;
          o._fire("transformend", { evt: E, target: o }), (w = o.getLayer()) === null || w === void 0 || w.batchDraw();
        }), this._movingAnchorName = null;
      }
    }
    _fitNodesInto(E, N) {
      var F = this._getNodeRect();
      const o = 1;
      if (t.Util._inRange(E.width, -this.padding() * 2 - o, o)) {
        this.update();
        return;
      }
      if (t.Util._inRange(E.height, -this.padding() * 2 - o, o)) {
        this.update();
        return;
      }
      var w = new t.Transform();
      if (w.rotate(d.Konva.getAngle(this.rotation())), this._movingAnchorName && E.width < 0 && this._movingAnchorName.indexOf("left") >= 0) {
        const z = w.point({
          x: -this.padding() * 2,
          y: 0
        });
        E.x += z.x, E.y += z.y, E.width += this.padding() * 2, this._movingAnchorName = this._movingAnchorName.replace("left", "right"), this._anchorDragOffset.x -= z.x, this._anchorDragOffset.y -= z.y;
      } else if (this._movingAnchorName && E.width < 0 && this._movingAnchorName.indexOf("right") >= 0) {
        const z = w.point({
          x: this.padding() * 2,
          y: 0
        });
        this._movingAnchorName = this._movingAnchorName.replace("right", "left"), this._anchorDragOffset.x -= z.x, this._anchorDragOffset.y -= z.y, E.width += this.padding() * 2;
      }
      if (this._movingAnchorName && E.height < 0 && this._movingAnchorName.indexOf("top") >= 0) {
        const z = w.point({
          x: 0,
          y: -this.padding() * 2
        });
        E.x += z.x, E.y += z.y, this._movingAnchorName = this._movingAnchorName.replace("top", "bottom"), this._anchorDragOffset.x -= z.x, this._anchorDragOffset.y -= z.y, E.height += this.padding() * 2;
      } else if (this._movingAnchorName && E.height < 0 && this._movingAnchorName.indexOf("bottom") >= 0) {
        const z = w.point({
          x: 0,
          y: this.padding() * 2
        });
        this._movingAnchorName = this._movingAnchorName.replace("bottom", "top"), this._anchorDragOffset.x -= z.x, this._anchorDragOffset.y -= z.y, E.height += this.padding() * 2;
      }
      if (this.boundBoxFunc()) {
        const z = this.boundBoxFunc()(F, E);
        z ? E = z : t.Util.warn("boundBoxFunc returned falsy. You should return new bound rect from it!");
      }
      const L = 1e7, O = new t.Transform();
      O.translate(F.x, F.y), O.rotate(F.rotation), O.scale(F.width / L, F.height / L);
      const I = new t.Transform(), H = E.width / L, B = E.height / L;
      this.flipEnabled() === !1 ? (I.translate(E.x, E.y), I.rotate(E.rotation), I.translate(E.width < 0 ? E.width : 0, E.height < 0 ? E.height : 0), I.scale(Math.abs(H), Math.abs(B))) : (I.translate(E.x, E.y), I.rotate(E.rotation), I.scale(H, B));
      const $ = I.multiply(O.invert());
      this._nodes.forEach((z) => {
        var Z;
        const W = z.getParent().getAbsoluteTransform(), j = z.getTransform().copy();
        j.translate(z.offsetX(), z.offsetY());
        const q = new t.Transform();
        q.multiply(W.copy().invert()).multiply($).multiply(W).multiply(j);
        const J = q.decompose();
        z.setAttrs(J), (Z = z.getLayer()) === null || Z === void 0 || Z.batchDraw();
      }), this.rotation(t.Util._getRotation(E.rotation)), this._nodes.forEach((z) => {
        this._fire("transform", { evt: N, target: z }), z._fire("transform", { evt: N, target: z });
      }), this._resetTransformCache(), this.update(), this.getLayer().batchDraw();
    }
    forceUpdate() {
      this._resetTransformCache(), this.update();
    }
    _batchChangeChild(E, N) {
      this.findOne(E).setAttrs(N);
    }
    update() {
      var E, N = this._getNodeRect();
      this.rotation(t.Util._getRotation(N.rotation));
      var F = N.width, o = N.height, w = this.enabledAnchors(), L = this.resizeEnabled(), O = this.padding(), I = this.anchorSize();
      const H = this.find("._anchor");
      H.forEach(($) => {
        $.setAttrs({
          width: I,
          height: I,
          offsetX: I / 2,
          offsetY: I / 2,
          stroke: this.anchorStroke(),
          strokeWidth: this.anchorStrokeWidth(),
          fill: this.anchorFill(),
          cornerRadius: this.anchorCornerRadius()
        });
      }), this._batchChangeChild(".top-left", {
        x: 0,
        y: 0,
        offsetX: I / 2 + O,
        offsetY: I / 2 + O,
        visible: L && w.indexOf("top-left") >= 0
      }), this._batchChangeChild(".top-center", {
        x: F / 2,
        y: 0,
        offsetY: I / 2 + O,
        visible: L && w.indexOf("top-center") >= 0
      }), this._batchChangeChild(".top-right", {
        x: F,
        y: 0,
        offsetX: I / 2 - O,
        offsetY: I / 2 + O,
        visible: L && w.indexOf("top-right") >= 0
      }), this._batchChangeChild(".middle-left", {
        x: 0,
        y: o / 2,
        offsetX: I / 2 + O,
        visible: L && w.indexOf("middle-left") >= 0
      }), this._batchChangeChild(".middle-right", {
        x: F,
        y: o / 2,
        offsetX: I / 2 - O,
        visible: L && w.indexOf("middle-right") >= 0
      }), this._batchChangeChild(".bottom-left", {
        x: 0,
        y: o,
        offsetX: I / 2 + O,
        offsetY: I / 2 - O,
        visible: L && w.indexOf("bottom-left") >= 0
      }), this._batchChangeChild(".bottom-center", {
        x: F / 2,
        y: o,
        offsetY: I / 2 - O,
        visible: L && w.indexOf("bottom-center") >= 0
      }), this._batchChangeChild(".bottom-right", {
        x: F,
        y: o,
        offsetX: I / 2 - O,
        offsetY: I / 2 - O,
        visible: L && w.indexOf("bottom-right") >= 0
      }), this._batchChangeChild(".rotater", {
        x: F / 2,
        y: -this.rotateAnchorOffset() * t.Util._sign(o) - O,
        visible: this.rotateEnabled()
      }), this._batchChangeChild(".back", {
        width: F,
        height: o,
        visible: this.borderEnabled(),
        stroke: this.borderStroke(),
        strokeWidth: this.borderStrokeWidth(),
        dash: this.borderDash(),
        x: 0,
        y: 0
      });
      const B = this.anchorStyleFunc();
      B && H.forEach(($) => {
        B($);
      }), (E = this.getLayer()) === null || E === void 0 || E.batchDraw();
    }
    isTransforming() {
      return this._transforming;
    }
    stopTransform() {
      if (this._transforming) {
        this._removeEvents();
        var E = this.findOne("." + this._movingAnchorName);
        E && E.stopDrag();
      }
    }
    destroy() {
      return this.getStage() && this._cursorChange && this.getStage().content && (this.getStage().content.style.cursor = ""), g.Group.prototype.destroy.call(this), this.detach(), this._removeEvents(), this;
    }
    toObject() {
      return A.Node.prototype.toObject.call(this);
    }
    clone(E) {
      var N = A.Node.prototype.clone.call(this, E);
      return N;
    }
    getClientRect() {
      return this.nodes().length > 0 ? super.getClientRect() : { x: 0, y: 0, width: 0, height: 0 };
    }
  };
  pr.Transformer = k, k.isTransforming = () => D > 0;
  function x(G) {
    return G instanceof Array || t.Util.warn("enabledAnchors value should be an array"), G instanceof Array && G.forEach(function(E) {
      y.indexOf(E) === -1 && t.Util.warn("Unknown anchor name: " + E + ". Available names are: " + y.join(", "));
    }), G || [];
  }
  return k.prototype.className = "Transformer", (0, c._registerNode)(k), l.Factory.addGetterSetter(k, "enabledAnchors", y, x), l.Factory.addGetterSetter(k, "flipEnabled", !0, (0, i.getBooleanValidator)()), l.Factory.addGetterSetter(k, "resizeEnabled", !0), l.Factory.addGetterSetter(k, "anchorSize", 10, (0, i.getNumberValidator)()), l.Factory.addGetterSetter(k, "rotateEnabled", !0), l.Factory.addGetterSetter(k, "rotateLineVisible", !0), l.Factory.addGetterSetter(k, "rotationSnaps", []), l.Factory.addGetterSetter(k, "rotateAnchorOffset", 50, (0, i.getNumberValidator)()), l.Factory.addGetterSetter(k, "rotateAnchorCursor", "crosshair"), l.Factory.addGetterSetter(k, "rotationSnapTolerance", 5, (0, i.getNumberValidator)()), l.Factory.addGetterSetter(k, "borderEnabled", !0), l.Factory.addGetterSetter(k, "anchorStroke", "rgb(0, 161, 255)"), l.Factory.addGetterSetter(k, "anchorStrokeWidth", 1, (0, i.getNumberValidator)()), l.Factory.addGetterSetter(k, "anchorFill", "white"), l.Factory.addGetterSetter(k, "anchorCornerRadius", 0, (0, i.getNumberValidator)()), l.Factory.addGetterSetter(k, "borderStroke", "rgb(0, 161, 255)"), l.Factory.addGetterSetter(k, "borderStrokeWidth", 1, (0, i.getNumberValidator)()), l.Factory.addGetterSetter(k, "borderDash"), l.Factory.addGetterSetter(k, "keepRatio", !0), l.Factory.addGetterSetter(k, "shiftBehavior", "default"), l.Factory.addGetterSetter(k, "centeredScaling", !1), l.Factory.addGetterSetter(k, "ignoreStroke", !1), l.Factory.addGetterSetter(k, "padding", 0, (0, i.getNumberValidator)()), l.Factory.addGetterSetter(k, "node"), l.Factory.addGetterSetter(k, "nodes"), l.Factory.addGetterSetter(k, "boundBoxFunc"), l.Factory.addGetterSetter(k, "anchorDragBoundFunc"), l.Factory.addGetterSetter(k, "anchorStyleFunc"), l.Factory.addGetterSetter(k, "shouldOverdrawWholeArea", !1), l.Factory.addGetterSetter(k, "useSingleNodeRotation", !0), l.Factory.backCompat(k, {
    lineEnabled: "borderEnabled",
    rotateHandlerOffset: "rotateAnchorOffset",
    enabledHandlers: "enabledAnchors"
  }), pr;
}
var mr = {}, Na;
function Vd() {
  if (Na) return mr;
  Na = 1, Object.defineProperty(mr, "__esModule", { value: !0 }), mr.Wedge = void 0;
  const t = le(), l = Ie(), A = oe(), f = he(), C = oe();
  let g = class extends l.Shape {
    _sceneFunc(i) {
      i.beginPath(), i.arc(0, 0, this.radius(), 0, A.Konva.getAngle(this.angle()), this.clockwise()), i.lineTo(0, 0), i.closePath(), i.fillStrokeShape(this);
    }
    getWidth() {
      return this.radius() * 2;
    }
    getHeight() {
      return this.radius() * 2;
    }
    setWidth(i) {
      this.radius(i / 2);
    }
    setHeight(i) {
      this.radius(i / 2);
    }
  };
  return mr.Wedge = g, g.prototype.className = "Wedge", g.prototype._centroid = !0, g.prototype._attrsAffectingSize = ["radius"], (0, C._registerNode)(g), t.Factory.addGetterSetter(g, "radius", 0, (0, f.getNumberValidator)()), t.Factory.addGetterSetter(g, "angle", 0, (0, f.getNumberValidator)()), t.Factory.addGetterSetter(g, "clockwise", !1), t.Factory.backCompat(g, {
    angleDeg: "angle",
    getAngleDeg: "getAngle",
    setAngleDeg: "setAngle"
  }), mr;
}
var yr = {}, Oa;
function Hd() {
  if (Oa) return yr;
  Oa = 1, Object.defineProperty(yr, "__esModule", { value: !0 }), yr.Blur = void 0;
  const t = le(), l = Me(), A = he();
  function f() {
    this.r = 0, this.g = 0, this.b = 0, this.a = 0, this.next = null;
  }
  var C = [
    512,
    512,
    456,
    512,
    328,
    456,
    335,
    512,
    405,
    328,
    271,
    456,
    388,
    335,
    292,
    512,
    454,
    405,
    364,
    328,
    298,
    271,
    496,
    456,
    420,
    388,
    360,
    335,
    312,
    292,
    273,
    512,
    482,
    454,
    428,
    405,
    383,
    364,
    345,
    328,
    312,
    298,
    284,
    271,
    259,
    496,
    475,
    456,
    437,
    420,
    404,
    388,
    374,
    360,
    347,
    335,
    323,
    312,
    302,
    292,
    282,
    273,
    265,
    512,
    497,
    482,
    468,
    454,
    441,
    428,
    417,
    405,
    394,
    383,
    373,
    364,
    354,
    345,
    337,
    328,
    320,
    312,
    305,
    298,
    291,
    284,
    278,
    271,
    265,
    259,
    507,
    496,
    485,
    475,
    465,
    456,
    446,
    437,
    428,
    420,
    412,
    404,
    396,
    388,
    381,
    374,
    367,
    360,
    354,
    347,
    341,
    335,
    329,
    323,
    318,
    312,
    307,
    302,
    297,
    292,
    287,
    282,
    278,
    273,
    269,
    265,
    261,
    512,
    505,
    497,
    489,
    482,
    475,
    468,
    461,
    454,
    447,
    441,
    435,
    428,
    422,
    417,
    411,
    405,
    399,
    394,
    389,
    383,
    378,
    373,
    368,
    364,
    359,
    354,
    350,
    345,
    341,
    337,
    332,
    328,
    324,
    320,
    316,
    312,
    309,
    305,
    301,
    298,
    294,
    291,
    287,
    284,
    281,
    278,
    274,
    271,
    268,
    265,
    262,
    259,
    257,
    507,
    501,
    496,
    491,
    485,
    480,
    475,
    470,
    465,
    460,
    456,
    451,
    446,
    442,
    437,
    433,
    428,
    424,
    420,
    416,
    412,
    408,
    404,
    400,
    396,
    392,
    388,
    385,
    381,
    377,
    374,
    370,
    367,
    363,
    360,
    357,
    354,
    350,
    347,
    344,
    341,
    338,
    335,
    332,
    329,
    326,
    323,
    320,
    318,
    315,
    312,
    310,
    307,
    304,
    302,
    299,
    297,
    294,
    292,
    289,
    287,
    285,
    282,
    280,
    278,
    275,
    273,
    271,
    269,
    267,
    265,
    263,
    261,
    259
  ], g = [
    9,
    11,
    12,
    13,
    13,
    14,
    14,
    15,
    15,
    15,
    15,
    16,
    16,
    16,
    16,
    17,
    17,
    17,
    17,
    17,
    17,
    17,
    18,
    18,
    18,
    18,
    18,
    18,
    18,
    18,
    18,
    19,
    19,
    19,
    19,
    19,
    19,
    19,
    19,
    19,
    19,
    19,
    19,
    19,
    19,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24
  ];
  function d(c, v) {
    var S = c.data, p = c.width, b = c.height, u, s, m, y, P, h, n, T, R, D, k, x, G, E, N, F, o, w, L, O, I, H, B, $, z = v + v + 1, Z = p - 1, W = b - 1, j = v + 1, q = j * (j + 1) / 2, J = new f(), Y = null, V = J, X = null, re = null, ie = C[v], ne = g[v];
    for (m = 1; m < z; m++)
      V = V.next = new f(), m === j && (Y = V);
    for (V.next = J, n = h = 0, s = 0; s < b; s++) {
      for (F = o = w = L = T = R = D = k = 0, x = j * (O = S[h]), G = j * (I = S[h + 1]), E = j * (H = S[h + 2]), N = j * (B = S[h + 3]), T += q * O, R += q * I, D += q * H, k += q * B, V = J, m = 0; m < j; m++)
        V.r = O, V.g = I, V.b = H, V.a = B, V = V.next;
      for (m = 1; m < j; m++)
        y = h + ((Z < m ? Z : m) << 2), T += (V.r = O = S[y]) * ($ = j - m), R += (V.g = I = S[y + 1]) * $, D += (V.b = H = S[y + 2]) * $, k += (V.a = B = S[y + 3]) * $, F += O, o += I, w += H, L += B, V = V.next;
      for (X = J, re = Y, u = 0; u < p; u++)
        S[h + 3] = B = k * ie >> ne, B !== 0 ? (B = 255 / B, S[h] = (T * ie >> ne) * B, S[h + 1] = (R * ie >> ne) * B, S[h + 2] = (D * ie >> ne) * B) : S[h] = S[h + 1] = S[h + 2] = 0, T -= x, R -= G, D -= E, k -= N, x -= X.r, G -= X.g, E -= X.b, N -= X.a, y = n + ((y = u + v + 1) < Z ? y : Z) << 2, F += X.r = S[y], o += X.g = S[y + 1], w += X.b = S[y + 2], L += X.a = S[y + 3], T += F, R += o, D += w, k += L, X = X.next, x += O = re.r, G += I = re.g, E += H = re.b, N += B = re.a, F -= O, o -= I, w -= H, L -= B, re = re.next, h += 4;
      n += p;
    }
    for (u = 0; u < p; u++) {
      for (o = w = L = F = R = D = k = T = 0, h = u << 2, x = j * (O = S[h]), G = j * (I = S[h + 1]), E = j * (H = S[h + 2]), N = j * (B = S[h + 3]), T += q * O, R += q * I, D += q * H, k += q * B, V = J, m = 0; m < j; m++)
        V.r = O, V.g = I, V.b = H, V.a = B, V = V.next;
      for (P = p, m = 1; m <= v; m++)
        h = P + u << 2, T += (V.r = O = S[h]) * ($ = j - m), R += (V.g = I = S[h + 1]) * $, D += (V.b = H = S[h + 2]) * $, k += (V.a = B = S[h + 3]) * $, F += O, o += I, w += H, L += B, V = V.next, m < W && (P += p);
      for (h = u, X = J, re = Y, s = 0; s < b; s++)
        y = h << 2, S[y + 3] = B = k * ie >> ne, B > 0 ? (B = 255 / B, S[y] = (T * ie >> ne) * B, S[y + 1] = (R * ie >> ne) * B, S[y + 2] = (D * ie >> ne) * B) : S[y] = S[y + 1] = S[y + 2] = 0, T -= x, R -= G, D -= E, k -= N, x -= X.r, G -= X.g, E -= X.b, N -= X.a, y = u + ((y = s + j) < W ? y : W) * p << 2, T += F += X.r = S[y], R += o += X.g = S[y + 1], D += w += X.b = S[y + 2], k += L += X.a = S[y + 3], X = X.next, x += O = re.r, G += I = re.g, E += H = re.b, N += B = re.a, F -= O, o -= I, w -= H, L -= B, re = re.next, h += p;
    }
  }
  const i = function(v) {
    var S = Math.round(this.blurRadius());
    S > 0 && d(v, S);
  };
  return yr.Blur = i, t.Factory.addGetterSetter(l.Node, "blurRadius", 0, (0, A.getNumberValidator)(), t.Factory.afterSetFilter), yr;
}
var Sr = {}, Da;
function Wd() {
  if (Da) return Sr;
  Da = 1, Object.defineProperty(Sr, "__esModule", { value: !0 }), Sr.Brighten = void 0;
  const t = le(), l = Me(), A = he(), f = function(C) {
    var g = this.brightness() * 255, d = C.data, i = d.length, c;
    for (c = 0; c < i; c += 4)
      d[c] += g, d[c + 1] += g, d[c + 2] += g;
  };
  return Sr.Brighten = f, t.Factory.addGetterSetter(l.Node, "brightness", 0, (0, A.getNumberValidator)(), t.Factory.afterSetFilter), Sr;
}
var br = {}, ka;
function Kd() {
  if (ka) return br;
  ka = 1, Object.defineProperty(br, "__esModule", { value: !0 }), br.Contrast = void 0;
  const t = le(), l = Me(), A = he(), f = function(C) {
    var g = Math.pow((this.contrast() + 100) / 100, 2), d = C.data, i = d.length, c = 150, v = 150, S = 150, p;
    for (p = 0; p < i; p += 4)
      c = d[p], v = d[p + 1], S = d[p + 2], c /= 255, c -= 0.5, c *= g, c += 0.5, c *= 255, v /= 255, v -= 0.5, v *= g, v += 0.5, v *= 255, S /= 255, S -= 0.5, S *= g, S += 0.5, S *= 255, c = c < 0 ? 0 : c > 255 ? 255 : c, v = v < 0 ? 0 : v > 255 ? 255 : v, S = S < 0 ? 0 : S > 255 ? 255 : S, d[p] = c, d[p + 1] = v, d[p + 2] = S;
  };
  return br.Contrast = f, t.Factory.addGetterSetter(l.Node, "contrast", 0, (0, A.getNumberValidator)(), t.Factory.afterSetFilter), br;
}
var Tr = {}, Ia;
function jd() {
  if (Ia) return Tr;
  Ia = 1, Object.defineProperty(Tr, "__esModule", { value: !0 }), Tr.Emboss = void 0;
  const t = le(), l = Me(), A = Re(), f = he(), C = function(g) {
    var d = this.embossStrength() * 10, i = this.embossWhiteLevel() * 255, c = this.embossDirection(), v = this.embossBlend(), S = 0, p = 0, b = g.data, u = g.width, s = g.height, m = u * 4, y = s;
    switch (c) {
      case "top-left":
        S = -1, p = -1;
        break;
      case "top":
        S = -1, p = 0;
        break;
      case "top-right":
        S = -1, p = 1;
        break;
      case "right":
        S = 0, p = 1;
        break;
      case "bottom-right":
        S = 1, p = 1;
        break;
      case "bottom":
        S = 1, p = 0;
        break;
      case "bottom-left":
        S = 1, p = -1;
        break;
      case "left":
        S = 0, p = -1;
        break;
      default:
        A.Util.error("Unknown emboss direction: " + c);
    }
    do {
      var P = (y - 1) * m, h = S;
      y + h < 1 && (h = 0), y + h > s && (h = 0);
      var n = (y - 1 + h) * u * 4, T = u;
      do {
        var R = P + (T - 1) * 4, D = p;
        T + D < 1 && (D = 0), T + D > u && (D = 0);
        var k = n + (T - 1 + D) * 4, x = b[R] - b[k], G = b[R + 1] - b[k + 1], E = b[R + 2] - b[k + 2], N = x, F = N > 0 ? N : -N, o = G > 0 ? G : -G, w = E > 0 ? E : -E;
        if (o > F && (N = G), w > F && (N = E), N *= d, v) {
          var L = b[R] + N, O = b[R + 1] + N, I = b[R + 2] + N;
          b[R] = L > 255 ? 255 : L < 0 ? 0 : L, b[R + 1] = O > 255 ? 255 : O < 0 ? 0 : O, b[R + 2] = I > 255 ? 255 : I < 0 ? 0 : I;
        } else {
          var H = i - N;
          H < 0 ? H = 0 : H > 255 && (H = 255), b[R] = b[R + 1] = b[R + 2] = H;
        }
      } while (--T);
    } while (--y);
  };
  return Tr.Emboss = C, t.Factory.addGetterSetter(l.Node, "embossStrength", 0.5, (0, f.getNumberValidator)(), t.Factory.afterSetFilter), t.Factory.addGetterSetter(l.Node, "embossWhiteLevel", 0.5, (0, f.getNumberValidator)(), t.Factory.afterSetFilter), t.Factory.addGetterSetter(l.Node, "embossDirection", "top-left", null, t.Factory.afterSetFilter), t.Factory.addGetterSetter(l.Node, "embossBlend", !1, null, t.Factory.afterSetFilter), Tr;
}
var wr = {}, Fa;
function qd() {
  if (Fa) return wr;
  Fa = 1, Object.defineProperty(wr, "__esModule", { value: !0 }), wr.Enhance = void 0;
  const t = le(), l = Me(), A = he();
  function f(g, d, i, c, v) {
    var S = i - d, p = v - c, b;
    return S === 0 ? c + p / 2 : p === 0 ? c : (b = (g - d) / S, b = p * b + c, b);
  }
  const C = function(g) {
    var d = g.data, i = d.length, c = d[0], v = c, S, p = d[1], b = p, u, s = d[2], m = s, y, P, h = this.enhance();
    if (h !== 0) {
      for (P = 0; P < i; P += 4)
        S = d[P + 0], S < c ? c = S : S > v && (v = S), u = d[P + 1], u < p ? p = u : u > b && (b = u), y = d[P + 2], y < s ? s = y : y > m && (m = y);
      v === c && (v = 255, c = 0), b === p && (b = 255, p = 0), m === s && (m = 255, s = 0);
      var n, T, R, D, k, x, G, E, N;
      for (h > 0 ? (T = v + h * (255 - v), R = c - h * (c - 0), k = b + h * (255 - b), x = p - h * (p - 0), E = m + h * (255 - m), N = s - h * (s - 0)) : (n = (v + c) * 0.5, T = v + h * (v - n), R = c + h * (c - n), D = (b + p) * 0.5, k = b + h * (b - D), x = p + h * (p - D), G = (m + s) * 0.5, E = m + h * (m - G), N = s + h * (s - G)), P = 0; P < i; P += 4)
        d[P + 0] = f(d[P + 0], c, v, R, T), d[P + 1] = f(d[P + 1], p, b, x, k), d[P + 2] = f(d[P + 2], s, m, N, E);
    }
  };
  return wr.Enhance = C, t.Factory.addGetterSetter(l.Node, "enhance", 0, (0, A.getNumberValidator)(), t.Factory.afterSetFilter), wr;
}
var Cr = {}, Ga;
function zd() {
  if (Ga) return Cr;
  Ga = 1, Object.defineProperty(Cr, "__esModule", { value: !0 }), Cr.Grayscale = void 0;
  const t = function(l) {
    var A = l.data, f = A.length, C, g;
    for (C = 0; C < f; C += 4)
      g = 0.34 * A[C] + 0.5 * A[C + 1] + 0.16 * A[C + 2], A[C] = g, A[C + 1] = g, A[C + 2] = g;
  };
  return Cr.Grayscale = t, Cr;
}
var Er = {}, Ua;
function Xd() {
  if (Ua) return Er;
  Ua = 1, Object.defineProperty(Er, "__esModule", { value: !0 }), Er.HSL = void 0;
  const t = le(), l = Me(), A = he();
  t.Factory.addGetterSetter(l.Node, "hue", 0, (0, A.getNumberValidator)(), t.Factory.afterSetFilter), t.Factory.addGetterSetter(l.Node, "saturation", 0, (0, A.getNumberValidator)(), t.Factory.afterSetFilter), t.Factory.addGetterSetter(l.Node, "luminance", 0, (0, A.getNumberValidator)(), t.Factory.afterSetFilter);
  const f = function(C) {
    var g = C.data, d = g.length, i = 1, c = Math.pow(2, this.saturation()), v = Math.abs(this.hue() + 360) % 360, S = this.luminance() * 127, p, b = i * c * Math.cos(v * Math.PI / 180), u = i * c * Math.sin(v * Math.PI / 180), s = 0.299 * i + 0.701 * b + 0.167 * u, m = 0.587 * i - 0.587 * b + 0.33 * u, y = 0.114 * i - 0.114 * b - 0.497 * u, P = 0.299 * i - 0.299 * b - 0.328 * u, h = 0.587 * i + 0.413 * b + 0.035 * u, n = 0.114 * i - 0.114 * b + 0.293 * u, T = 0.299 * i - 0.3 * b + 1.25 * u, R = 0.587 * i - 0.586 * b - 1.05 * u, D = 0.114 * i + 0.886 * b - 0.2 * u, k, x, G, E;
    for (p = 0; p < d; p += 4)
      k = g[p + 0], x = g[p + 1], G = g[p + 2], E = g[p + 3], g[p + 0] = s * k + m * x + y * G + S, g[p + 1] = P * k + h * x + n * G + S, g[p + 2] = T * k + R * x + D * G + S, g[p + 3] = E;
  };
  return Er.HSL = f, Er;
}
var Ar = {}, Ya;
function $d() {
  if (Ya) return Ar;
  Ya = 1, Object.defineProperty(Ar, "__esModule", { value: !0 }), Ar.HSV = void 0;
  const t = le(), l = Me(), A = he(), f = function(C) {
    var g = C.data, d = g.length, i = Math.pow(2, this.value()), c = Math.pow(2, this.saturation()), v = Math.abs(this.hue() + 360) % 360, S, p = i * c * Math.cos(v * Math.PI / 180), b = i * c * Math.sin(v * Math.PI / 180), u = 0.299 * i + 0.701 * p + 0.167 * b, s = 0.587 * i - 0.587 * p + 0.33 * b, m = 0.114 * i - 0.114 * p - 0.497 * b, y = 0.299 * i - 0.299 * p - 0.328 * b, P = 0.587 * i + 0.413 * p + 0.035 * b, h = 0.114 * i - 0.114 * p + 0.293 * b, n = 0.299 * i - 0.3 * p + 1.25 * b, T = 0.587 * i - 0.586 * p - 1.05 * b, R = 0.114 * i + 0.886 * p - 0.2 * b, D, k, x, G;
    for (S = 0; S < d; S += 4)
      D = g[S + 0], k = g[S + 1], x = g[S + 2], G = g[S + 3], g[S + 0] = u * D + s * k + m * x, g[S + 1] = y * D + P * k + h * x, g[S + 2] = n * D + T * k + R * x, g[S + 3] = G;
  };
  return Ar.HSV = f, t.Factory.addGetterSetter(l.Node, "hue", 0, (0, A.getNumberValidator)(), t.Factory.afterSetFilter), t.Factory.addGetterSetter(l.Node, "saturation", 0, (0, A.getNumberValidator)(), t.Factory.afterSetFilter), t.Factory.addGetterSetter(l.Node, "value", 0, (0, A.getNumberValidator)(), t.Factory.afterSetFilter), Ar;
}
var Rr = {}, Ba;
function Qd() {
  if (Ba) return Rr;
  Ba = 1, Object.defineProperty(Rr, "__esModule", { value: !0 }), Rr.Invert = void 0;
  const t = function(l) {
    var A = l.data, f = A.length, C;
    for (C = 0; C < f; C += 4)
      A[C] = 255 - A[C], A[C + 1] = 255 - A[C + 1], A[C + 2] = 255 - A[C + 2];
  };
  return Rr.Invert = t, Rr;
}
var Lr = {}, Va;
function Zd() {
  if (Va) return Lr;
  Va = 1, Object.defineProperty(Lr, "__esModule", { value: !0 }), Lr.Kaleidoscope = void 0;
  const t = le(), l = Me(), A = Re(), f = he();
  var C = function(i, c, v) {
    var S = i.data, p = c.data, b = i.width, u = i.height, s = v.polarCenterX || b / 2, m = v.polarCenterY || u / 2, y, P, h, n = 0, T = 0, R = 0, D = 0, k, x = Math.sqrt(s * s + m * m);
    P = b - s, h = u - m, k = Math.sqrt(P * P + h * h), x = k > x ? k : x;
    var G = u, E = b, N, F, o = 360 / E * Math.PI / 180, w, L;
    for (F = 0; F < E; F += 1)
      for (w = Math.sin(F * o), L = Math.cos(F * o), N = 0; N < G; N += 1)
        P = Math.floor(s + x * N / G * L), h = Math.floor(m + x * N / G * w), y = (h * b + P) * 4, n = S[y + 0], T = S[y + 1], R = S[y + 2], D = S[y + 3], y = (F + N * b) * 4, p[y + 0] = n, p[y + 1] = T, p[y + 2] = R, p[y + 3] = D;
  }, g = function(i, c, v) {
    var S = i.data, p = c.data, b = i.width, u = i.height, s = v.polarCenterX || b / 2, m = v.polarCenterY || u / 2, y, P, h, n, T, R = 0, D = 0, k = 0, x = 0, G, E = Math.sqrt(s * s + m * m);
    P = b - s, h = u - m, G = Math.sqrt(P * P + h * h), E = G > E ? G : E;
    var N = u, F = b, o, w, L = 0, O, I;
    for (P = 0; P < b; P += 1)
      for (h = 0; h < u; h += 1)
        n = P - s, T = h - m, o = Math.sqrt(n * n + T * T) * N / E, w = (Math.atan2(T, n) * 180 / Math.PI + 360 + L) % 360, w = w * F / 360, O = Math.floor(w), I = Math.floor(o), y = (I * b + O) * 4, R = S[y + 0], D = S[y + 1], k = S[y + 2], x = S[y + 3], y = (h * b + P) * 4, p[y + 0] = R, p[y + 1] = D, p[y + 2] = k, p[y + 3] = x;
  };
  const d = function(i) {
    var c = i.width, v = i.height, S, p, b, u, s, m, y, P, h, n, T = Math.round(this.kaleidoscopePower()), R = Math.round(this.kaleidoscopeAngle()), D = Math.floor(c * (R % 360) / 360);
    if (!(T < 1)) {
      var k = A.Util.createCanvasElement();
      k.width = c, k.height = v;
      var x = k.getContext("2d").getImageData(0, 0, c, v);
      A.Util.releaseCanvas(k), C(i, x, {
        polarCenterX: c / 2,
        polarCenterY: v / 2
      });
      for (var G = c / Math.pow(2, T); G <= 8; )
        G = G * 2, T -= 1;
      G = Math.ceil(G);
      var E = G, N = 0, F = E, o = 1;
      for (D + G > c && (N = E, F = 0, o = -1), p = 0; p < v; p += 1)
        for (S = N; S !== F; S += o)
          b = Math.round(S + D) % c, h = (c * p + b) * 4, s = x.data[h + 0], m = x.data[h + 1], y = x.data[h + 2], P = x.data[h + 3], n = (c * p + S) * 4, x.data[n + 0] = s, x.data[n + 1] = m, x.data[n + 2] = y, x.data[n + 3] = P;
      for (p = 0; p < v; p += 1)
        for (E = Math.floor(G), u = 0; u < T; u += 1) {
          for (S = 0; S < E + 1; S += 1)
            h = (c * p + S) * 4, s = x.data[h + 0], m = x.data[h + 1], y = x.data[h + 2], P = x.data[h + 3], n = (c * p + E * 2 - S - 1) * 4, x.data[n + 0] = s, x.data[n + 1] = m, x.data[n + 2] = y, x.data[n + 3] = P;
          E *= 2;
        }
      g(x, i, { polarRotation: 0 });
    }
  };
  return Lr.Kaleidoscope = d, t.Factory.addGetterSetter(l.Node, "kaleidoscopePower", 2, (0, f.getNumberValidator)(), t.Factory.afterSetFilter), t.Factory.addGetterSetter(l.Node, "kaleidoscopeAngle", 0, (0, f.getNumberValidator)(), t.Factory.afterSetFilter), Lr;
}
var Mr = {}, Ha;
function Jd() {
  if (Ha) return Mr;
  Ha = 1, Object.defineProperty(Mr, "__esModule", { value: !0 }), Mr.Mask = void 0;
  const t = le(), l = Me(), A = he();
  function f(b, u, s) {
    var m = (s * b.width + u) * 4, y = [];
    return y.push(b.data[m++], b.data[m++], b.data[m++], b.data[m++]), y;
  }
  function C(b, u) {
    return Math.sqrt(Math.pow(b[0] - u[0], 2) + Math.pow(b[1] - u[1], 2) + Math.pow(b[2] - u[2], 2));
  }
  function g(b) {
    for (var u = [0, 0, 0], s = 0; s < b.length; s++)
      u[0] += b[s][0], u[1] += b[s][1], u[2] += b[s][2];
    return u[0] /= b.length, u[1] /= b.length, u[2] /= b.length, u;
  }
  function d(b, u) {
    var s = f(b, 0, 0), m = f(b, b.width - 1, 0), y = f(b, 0, b.height - 1), P = f(b, b.width - 1, b.height - 1), h = u || 10;
    if (C(s, m) < h && C(m, P) < h && C(P, y) < h && C(y, s) < h) {
      for (var n = g([m, s, P, y]), T = [], R = 0; R < b.width * b.height; R++) {
        var D = C(n, [
          b.data[R * 4],
          b.data[R * 4 + 1],
          b.data[R * 4 + 2]
        ]);
        T[R] = D < h ? 0 : 255;
      }
      return T;
    }
  }
  function i(b, u) {
    for (var s = 0; s < b.width * b.height; s++)
      b.data[4 * s + 3] = u[s];
  }
  function c(b, u, s) {
    for (var m = [1, 1, 1, 1, 0, 1, 1, 1, 1], y = Math.round(Math.sqrt(m.length)), P = Math.floor(y / 2), h = [], n = 0; n < s; n++)
      for (var T = 0; T < u; T++) {
        for (var R = n * u + T, D = 0, k = 0; k < y; k++)
          for (var x = 0; x < y; x++) {
            var G = n + k - P, E = T + x - P;
            if (G >= 0 && G < s && E >= 0 && E < u) {
              var N = G * u + E, F = m[k * y + x];
              D += b[N] * F;
            }
          }
        h[R] = D === 255 * 8 ? 255 : 0;
      }
    return h;
  }
  function v(b, u, s) {
    for (var m = [1, 1, 1, 1, 1, 1, 1, 1, 1], y = Math.round(Math.sqrt(m.length)), P = Math.floor(y / 2), h = [], n = 0; n < s; n++)
      for (var T = 0; T < u; T++) {
        for (var R = n * u + T, D = 0, k = 0; k < y; k++)
          for (var x = 0; x < y; x++) {
            var G = n + k - P, E = T + x - P;
            if (G >= 0 && G < s && E >= 0 && E < u) {
              var N = G * u + E, F = m[k * y + x];
              D += b[N] * F;
            }
          }
        h[R] = D >= 255 * 4 ? 255 : 0;
      }
    return h;
  }
  function S(b, u, s) {
    for (var m = [0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111], y = Math.round(Math.sqrt(m.length)), P = Math.floor(y / 2), h = [], n = 0; n < s; n++)
      for (var T = 0; T < u; T++) {
        for (var R = n * u + T, D = 0, k = 0; k < y; k++)
          for (var x = 0; x < y; x++) {
            var G = n + k - P, E = T + x - P;
            if (G >= 0 && G < s && E >= 0 && E < u) {
              var N = G * u + E, F = m[k * y + x];
              D += b[N] * F;
            }
          }
        h[R] = D;
      }
    return h;
  }
  const p = function(b) {
    var u = this.threshold(), s = d(b, u);
    return s && (s = c(s, b.width, b.height), s = v(s, b.width, b.height), s = S(s, b.width, b.height), i(b, s)), b;
  };
  return Mr.Mask = p, t.Factory.addGetterSetter(l.Node, "threshold", 0, (0, A.getNumberValidator)(), t.Factory.afterSetFilter), Mr;
}
var Pr = {}, Wa;
function eu() {
  if (Wa) return Pr;
  Wa = 1, Object.defineProperty(Pr, "__esModule", { value: !0 }), Pr.Noise = void 0;
  const t = le(), l = Me(), A = he(), f = function(C) {
    var g = this.noise() * 255, d = C.data, i = d.length, c = g / 2, v;
    for (v = 0; v < i; v += 4)
      d[v + 0] += c - 2 * c * Math.random(), d[v + 1] += c - 2 * c * Math.random(), d[v + 2] += c - 2 * c * Math.random();
  };
  return Pr.Noise = f, t.Factory.addGetterSetter(l.Node, "noise", 0.2, (0, A.getNumberValidator)(), t.Factory.afterSetFilter), Pr;
}
var xr = {}, Ka;
function tu() {
  if (Ka) return xr;
  Ka = 1, Object.defineProperty(xr, "__esModule", { value: !0 }), xr.Pixelate = void 0;
  const t = le(), l = Re(), A = Me(), f = he(), C = function(g) {
    var d = Math.ceil(this.pixelSize()), i = g.width, c = g.height, v, S, p, b, u, s, m, y = Math.ceil(i / d), P = Math.ceil(c / d), h, n, T, R, D, k, x, G = g.data;
    if (d <= 0) {
      l.Util.error("pixelSize value can not be <= 0");
      return;
    }
    for (D = 0; D < y; D += 1)
      for (k = 0; k < P; k += 1) {
        for (b = 0, u = 0, s = 0, m = 0, h = D * d, n = h + d, T = k * d, R = T + d, x = 0, v = h; v < n; v += 1)
          if (!(v >= i))
            for (S = T; S < R; S += 1)
              S >= c || (p = (i * S + v) * 4, b += G[p + 0], u += G[p + 1], s += G[p + 2], m += G[p + 3], x += 1);
        for (b = b / x, u = u / x, s = s / x, m = m / x, v = h; v < n; v += 1)
          if (!(v >= i))
            for (S = T; S < R; S += 1)
              S >= c || (p = (i * S + v) * 4, G[p + 0] = b, G[p + 1] = u, G[p + 2] = s, G[p + 3] = m);
      }
  };
  return xr.Pixelate = C, t.Factory.addGetterSetter(A.Node, "pixelSize", 8, (0, f.getNumberValidator)(), t.Factory.afterSetFilter), xr;
}
var Nr = {}, ja;
function ru() {
  if (ja) return Nr;
  ja = 1, Object.defineProperty(Nr, "__esModule", { value: !0 }), Nr.Posterize = void 0;
  const t = le(), l = Me(), A = he(), f = function(C) {
    var g = Math.round(this.levels() * 254) + 1, d = C.data, i = d.length, c = 255 / g, v;
    for (v = 0; v < i; v += 1)
      d[v] = Math.floor(d[v] / c) * c;
  };
  return Nr.Posterize = f, t.Factory.addGetterSetter(l.Node, "levels", 0.5, (0, A.getNumberValidator)(), t.Factory.afterSetFilter), Nr;
}
var Or = {}, qa;
function iu() {
  if (qa) return Or;
  qa = 1, Object.defineProperty(Or, "__esModule", { value: !0 }), Or.RGB = void 0;
  const t = le(), l = Me(), A = he(), f = function(C) {
    var g = C.data, d = g.length, i = this.red(), c = this.green(), v = this.blue(), S, p;
    for (S = 0; S < d; S += 4)
      p = (0.34 * g[S] + 0.5 * g[S + 1] + 0.16 * g[S + 2]) / 255, g[S] = p * i, g[S + 1] = p * c, g[S + 2] = p * v, g[S + 3] = g[S + 3];
  };
  return Or.RGB = f, t.Factory.addGetterSetter(l.Node, "red", 0, function(C) {
    return this._filterUpToDate = !1, C > 255 ? 255 : C < 0 ? 0 : Math.round(C);
  }), t.Factory.addGetterSetter(l.Node, "green", 0, function(C) {
    return this._filterUpToDate = !1, C > 255 ? 255 : C < 0 ? 0 : Math.round(C);
  }), t.Factory.addGetterSetter(l.Node, "blue", 0, A.RGBComponent, t.Factory.afterSetFilter), Or;
}
var Dr = {}, za;
function nu() {
  if (za) return Dr;
  za = 1, Object.defineProperty(Dr, "__esModule", { value: !0 }), Dr.RGBA = void 0;
  const t = le(), l = Me(), A = he(), f = function(C) {
    var g = C.data, d = g.length, i = this.red(), c = this.green(), v = this.blue(), S = this.alpha(), p, b;
    for (p = 0; p < d; p += 4)
      b = 1 - S, g[p] = i * S + g[p] * b, g[p + 1] = c * S + g[p + 1] * b, g[p + 2] = v * S + g[p + 2] * b;
  };
  return Dr.RGBA = f, t.Factory.addGetterSetter(l.Node, "red", 0, function(C) {
    return this._filterUpToDate = !1, C > 255 ? 255 : C < 0 ? 0 : Math.round(C);
  }), t.Factory.addGetterSetter(l.Node, "green", 0, function(C) {
    return this._filterUpToDate = !1, C > 255 ? 255 : C < 0 ? 0 : Math.round(C);
  }), t.Factory.addGetterSetter(l.Node, "blue", 0, A.RGBComponent, t.Factory.afterSetFilter), t.Factory.addGetterSetter(l.Node, "alpha", 1, function(C) {
    return this._filterUpToDate = !1, C > 1 ? 1 : C < 0 ? 0 : C;
  }), Dr;
}
var kr = {}, Xa;
function au() {
  if (Xa) return kr;
  Xa = 1, Object.defineProperty(kr, "__esModule", { value: !0 }), kr.Sepia = void 0;
  const t = function(l) {
    var A = l.data, f = A.length, C, g, d, i;
    for (C = 0; C < f; C += 4)
      g = A[C + 0], d = A[C + 1], i = A[C + 2], A[C + 0] = Math.min(255, g * 0.393 + d * 0.769 + i * 0.189), A[C + 1] = Math.min(255, g * 0.349 + d * 0.686 + i * 0.168), A[C + 2] = Math.min(255, g * 0.272 + d * 0.534 + i * 0.131);
  };
  return kr.Sepia = t, kr;
}
var Ir = {}, $a;
function su() {
  if ($a) return Ir;
  $a = 1, Object.defineProperty(Ir, "__esModule", { value: !0 }), Ir.Solarize = void 0;
  const t = function(l) {
    var A = l.data, f = l.width, C = l.height, g = f * 4, d = C;
    do {
      var i = (d - 1) * g, c = f;
      do {
        var v = i + (c - 1) * 4, S = A[v], p = A[v + 1], b = A[v + 2];
        S > 127 && (S = 255 - S), p > 127 && (p = 255 - p), b > 127 && (b = 255 - b), A[v] = S, A[v + 1] = p, A[v + 2] = b;
      } while (--c);
    } while (--d);
  };
  return Ir.Solarize = t, Ir;
}
var Fr = {}, Qa;
function ou() {
  if (Qa) return Fr;
  Qa = 1, Object.defineProperty(Fr, "__esModule", { value: !0 }), Fr.Threshold = void 0;
  const t = le(), l = Me(), A = he(), f = function(C) {
    var g = this.threshold() * 255, d = C.data, i = d.length, c;
    for (c = 0; c < i; c += 1)
      d[c] = d[c] < g ? 0 : 255;
  };
  return Fr.Threshold = f, t.Factory.addGetterSetter(l.Node, "threshold", 0.5, (0, A.getNumberValidator)(), t.Factory.afterSetFilter), Fr;
}
var Za;
function lu() {
  if (Za) return Qt;
  Za = 1, Object.defineProperty(Qt, "__esModule", { value: !0 }), Qt.Konva = void 0;
  const t = Ld(), l = Md(), A = xd(), f = Nd(), C = Od(), g = Dd(), d = kd(), i = Cs(), c = on(), v = Es(), S = Id(), p = Fd(), b = Gd(), u = Ud(), s = As(), m = Yd(), y = Bd(), P = Vd(), h = Hd(), n = Wd(), T = Kd(), R = jd(), D = qd(), k = zd(), x = Xd(), G = $d(), E = Qd(), N = Zd(), F = Jd(), o = eu(), w = tu(), L = ru(), O = iu(), I = nu(), H = au(), B = su(), $ = ou();
  return Qt.Konva = t.Konva.Util._assign(t.Konva, {
    Arc: l.Arc,
    Arrow: A.Arrow,
    Circle: f.Circle,
    Ellipse: C.Ellipse,
    Image: g.Image,
    Label: d.Label,
    Tag: d.Tag,
    Line: i.Line,
    Path: c.Path,
    Rect: v.Rect,
    RegularPolygon: S.RegularPolygon,
    Ring: p.Ring,
    Sprite: b.Sprite,
    Star: u.Star,
    Text: s.Text,
    TextPath: m.TextPath,
    Transformer: y.Transformer,
    Wedge: P.Wedge,
    Filters: {
      Blur: h.Blur,
      Brighten: n.Brighten,
      Contrast: T.Contrast,
      Emboss: R.Emboss,
      Enhance: D.Enhance,
      Grayscale: k.Grayscale,
      HSL: x.HSL,
      HSV: G.HSV,
      Invert: E.Invert,
      Kaleidoscope: N.Kaleidoscope,
      Mask: F.Mask,
      Noise: o.Noise,
      Pixelate: w.Pixelate,
      Posterize: L.Posterize,
      RGB: O.RGB,
      RGBA: I.RGBA,
      Sepia: H.Sepia,
      Solarize: B.Solarize,
      Threshold: $.Threshold
    }
  }), Qt;
}
var hu = di.exports, Ja;
function du() {
  if (Ja) return di.exports;
  Ja = 1, Object.defineProperty(hu, "__esModule", { value: !0 });
  const t = lu();
  return di.exports = t.Konva, di.exports;
}
/*!
 * vue-konva v2.1.7 - https://github.com/konvajs/vue-konva#readme
 * MIT Licensed
 */
(function(t, l) {
  (function(f, C) {
    t.exports = C(Ji, du());
  })(ci, function(A, f) {
    return (
      /******/
      function(C) {
        var g = {};
        function d(i) {
          if (g[i])
            return g[i].exports;
          var c = g[i] = {
            /******/
            i,
            /******/
            l: !1,
            /******/
            exports: {}
            /******/
          };
          return C[i].call(c.exports, c, c.exports, d), c.l = !0, c.exports;
        }
        return d.m = C, d.c = g, d.d = function(i, c, v) {
          d.o(i, c) || Object.defineProperty(i, c, { enumerable: !0, get: v });
        }, d.r = function(i) {
          typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(i, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(i, "__esModule", { value: !0 });
        }, d.t = function(i, c) {
          if (c & 1 && (i = d(i)), c & 8 || c & 4 && typeof i == "object" && i && i.__esModule) return i;
          var v = /* @__PURE__ */ Object.create(null);
          if (d.r(v), Object.defineProperty(v, "default", { enumerable: !0, value: i }), c & 2 && typeof i != "string") for (var S in i) d.d(v, S, (function(p) {
            return i[p];
          }).bind(null, S));
          return v;
        }, d.n = function(i) {
          var c = i && i.__esModule ? (
            /******/
            function() {
              return i.default;
            }
          ) : (
            /******/
            function() {
              return i;
            }
          );
          return d.d(c, "a", c), c;
        }, d.o = function(i, c) {
          return Object.prototype.hasOwnProperty.call(i, c);
        }, d.p = "", d(d.s = 1);
      }([
        /* 0 */
        /***/
        function(C, g) {
          C.exports = A;
        },
        /* 1 */
        /***/
        function(C, g, d) {
          C.exports = d(3);
        },
        /* 2 */
        /***/
        function(C, g) {
          C.exports = f;
        },
        /* 3 */
        /***/
        function(C, g, d) {
          d.r(g);
          var i = d(0), c = /* @__PURE__ */ d.n(i);
          function v(F) {
            var o = F.getLayer() || F.getStage();
            o && o.batchDraw();
          }
          var S = {
            key: !0,
            style: !0,
            elm: !0,
            isRootInsert: !0
          }, p = ".vue-konva-event";
          function b(F, o, w, L) {
            o === void 0 && (o = {}), w === void 0 && (w = {});
            var O = F._konvaNode, I = {}, H = !1;
            for (var B in w)
              if (!S[B]) {
                var $ = B.slice(0, 2) === "on", z = w[B] !== o[B];
                if ($ && z) {
                  var Z = B.substr(2).toLowerCase();
                  Z.substr(0, 7) === "content" && (Z = "content" + Z.substr(7, 1).toUpperCase() + Z.substr(8)), O.off(Z + p, w[B]);
                }
                var W = !o.hasOwnProperty(B);
                W && O.setAttr(B, void 0);
              }
            for (var j in o)
              if (!S[j]) {
                var q = j.slice(0, 2) === "on", J = w[j] !== o[j];
                if (q && J) {
                  var Y = j.substr(2).toLowerCase();
                  Y.substr(0, 7) === "content" && (Y = "content" + Y.substr(7, 1).toUpperCase() + Y.substr(8)), o[j] && (O.off(Y + p), O.on(Y + p, o[j]));
                }
                !q && (o[j] !== w[j] || L && o[j] !== O.getAttr(j)) && (H = !0, I[j] = o[j]);
              }
            H && (O.setAttrs(I), v(O));
          }
          var u = "v", s = "_konvaNode";
          function m(F) {
            var o = {};
            return Object.keys(F).forEach(function(w) {
              o["on" + w] = F[w];
            }), o;
          }
          function y(F) {
            function o(w) {
              return w._konvaNode ? w : w.$parent ? o(w.$parent) : {};
            }
            return o(F.$parent);
          }
          function P(F) {
            return F ? F.$options[s] ? F.getNode() : F.$children.length === 0 ? null : P(F.$children[0]) : null;
          }
          function h(F, o) {
            var w = !1, L = F.componentOptions.children || [], O = [];
            L.forEach(function(I) {
              var H = P(I.componentInstance);
              H && O.push(H);
              var B = I.elm, $ = I.componentInstance;
              if (B && B.tagName && $ && !H) {
                var z = B && B.tagName.toLowerCase();
                console.error('vue-konva error: You are trying to render "' + z + '" inside your component tree. Looks like it is not a Konva node. You can render only Konva components inside the Stage.');
              }
            }), O.forEach(function(I, H) {
              I.getZIndex() !== H && (I.setZIndex(H), w = !0);
            }), w && v(o);
          }
          function n() {
            return n = Object.assign || function(F) {
              for (var o = 1; o < arguments.length; o++) {
                var w = arguments[o];
                for (var L in w)
                  Object.prototype.hasOwnProperty.call(w, L) && (F[L] = w[L]);
              }
              return F;
            }, n.apply(this, arguments);
          }
          var T = c.a.component("v-stage", {
            render: function(o) {
              return o("div", this.$slots.default);
            },
            watch: {
              config: {
                handler: function(o) {
                  this.uploadKonva();
                },
                deep: !0
              }
            },
            props: {
              config: {
                type: Object,
                default: function() {
                  return {};
                }
              },
              __useStrictMode: {
                type: Boolean
              }
            },
            created: function() {
              this._konvaNode = new window.Konva.Stage({
                width: this.config.width,
                height: this.config.height,
                // create fake container, later it will be replaced with real div on the page
                container: document.createElement("div")
              });
            },
            mounted: function() {
              this.$el.innerHTML = "", this._konvaNode.container(this.$el), this.uploadKonva(), this.validateChildren();
            },
            updated: function() {
              this.uploadKonva(), this.uploadKonva(), h(this.$vnode, this._konvaNode);
            },
            beforeDestroy: function() {
              this._konvaNode.destroy();
            },
            methods: {
              getNode: function() {
                return this._konvaNode;
              },
              getStage: function() {
                return this._konvaNode;
              },
              uploadKonva: function() {
                var o = this.oldProps || {}, w = n({}, this.$attrs, this.config, m(this.$listeners));
                b(this, w, o, this.__useStrictMode), this.oldProps = w;
              },
              validateChildren: function() {
              }
            }
          });
          function R() {
            return R = Object.assign || function(F) {
              for (var o = 1; o < arguments.length; o++) {
                var w = arguments[o];
                for (var L in w)
                  Object.prototype.hasOwnProperty.call(w, L) && (F[L] = w[L]);
              }
              return F;
            }, R.apply(this, arguments);
          }
          var D = ".vue-konva-event", k = {
            Group: !0,
            Layer: !0,
            FastLayer: !0,
            Label: !0
          }, x = function(F) {
            var o;
            return o = {}, o[s] = !0, o.render = function(L) {
              var O = k[F];
              return O ? L("template", this.$slots.default) : null;
            }, o.watch = {
              config: {
                handler: function(L) {
                  this.uploadKonva();
                },
                deep: !0
              }
            }, o.props = {
              config: {
                type: Object,
                default: function() {
                  return {};
                }
              },
              __useStrictMode: {
                type: Boolean
              }
            }, o.created = function() {
              this.initKonva();
            }, o.mounted = function() {
              var L = y(this), O = L._konvaNode;
              O.add(this._konvaNode), v(this._konvaNode);
            }, o.updated = function() {
              this.uploadKonva(), h(this.$vnode, this._konvaNode);
            }, o.destroyed = function() {
              v(this._konvaNode), this._konvaNode.destroy(), this._konvaNode.off(D);
            }, o.methods = {
              getNode: function() {
                return this._konvaNode;
              },
              getStage: function() {
                return this._konvaNode;
              },
              initKonva: function() {
                var L = window.Konva[F];
                if (!L) {
                  console.error("vue-konva error: Can not find node " + F);
                  return;
                }
                this._konvaNode = new L(), this._konvaNode.VueComponent = this, this.uploadKonva();
              },
              uploadKonva: function() {
                var L = this.oldProps || {}, O = R({}, this.$attrs, this.config, m(this.$listeners));
                b(this, O, L, this.__useStrictMode), this.oldProps = O;
              }
            }, o;
          };
          typeof window < "u" && !window.Konva && d(2);
          var G = ["Layer", "FastLayer", "Group", "Label", "Rect", "Circle", "Ellipse", "Wedge", "Line", "Sprite", "Image", "Text", "TextPath", "Star", "Ring", "Arc", "Tag", "Path", "RegularPolygon", "Arrow", "Shape", "Transformer"], E = [{
            name: "Stage",
            component: T
          }].concat(G.map(function(F) {
            return {
              name: F,
              component: x(F)
            };
          })), N = {
            install: function(o, w) {
              var L = u;
              w && w.prefix && (L = w.prefix), E.forEach(function(O) {
                o.component("" + L + O.name, O.component);
              });
            }
          };
          g.default = N, typeof window < "u" && window.Vue && window.Vue.use(N);
        }
        /******/
      ]).default
    );
  });
})(Ss);
var uu = Ss.exports;
const cu = /* @__PURE__ */ Cd(uu), Ut = {}, fu = function() {
  cu.install(
    {
      component(t, l) {
        Ut[t] = l;
      }
    },
    { prefix: "K" }
  );
};
fu();
const gu = function(t, l) {
  for (; t; ) {
    if (l(t))
      return t;
    t = t.parent;
  }
  return t;
}, _u = {
  findParent: gu
};
let es;
Ji.config.devtools = !0;
const Ki = typeof navigator < "u" ? navigator.userAgent.toLowerCase().indexOf("firefox") > 0 : !1;
function ji(t, l, A, f) {
  t.addEventListener ? t.addEventListener(l, A, f) : t.attachEvent && t.attachEvent("on".concat(l), A);
}
function Gr(t, l, A, f) {
  t.removeEventListener ? t.removeEventListener(l, A, f) : t.detachEvent && t.detachEvent("on".concat(l), A);
}
function Rs(t, l) {
  const A = l.slice(0, l.length - 1);
  for (let f = 0; f < A.length; f++) A[f] = t[A[f].toLowerCase()];
  return A;
}
function Ls(t) {
  typeof t != "string" && (t = ""), t = t.replace(/\s/g, "");
  const l = t.split(",");
  let A = l.lastIndexOf("");
  for (; A >= 0; )
    l[A - 1] += ",", l.splice(A, 1), A = l.lastIndexOf("");
  return l;
}
function vu(t, l) {
  const A = t.length >= l.length ? t : l, f = t.length >= l.length ? l : t;
  let C = !0;
  for (let g = 0; g < A.length; g++)
    f.indexOf(A[g]) === -1 && (C = !1);
  return C;
}
const Vr = {
  backspace: 8,
  "⌫": 8,
  tab: 9,
  clear: 12,
  enter: 13,
  "↩": 13,
  return: 13,
  esc: 27,
  escape: 27,
  space: 32,
  left: 37,
  up: 38,
  right: 39,
  down: 40,
  del: 46,
  delete: 46,
  ins: 45,
  insert: 45,
  home: 36,
  end: 35,
  pageup: 33,
  pagedown: 34,
  capslock: 20,
  num_0: 96,
  num_1: 97,
  num_2: 98,
  num_3: 99,
  num_4: 100,
  num_5: 101,
  num_6: 102,
  num_7: 103,
  num_8: 104,
  num_9: 105,
  num_multiply: 106,
  num_add: 107,
  num_enter: 108,
  num_subtract: 109,
  num_decimal: 110,
  num_divide: 111,
  "⇪": 20,
  ",": 188,
  ".": 190,
  "/": 191,
  "`": 192,
  "-": Ki ? 173 : 189,
  "=": Ki ? 61 : 187,
  ";": Ki ? 59 : 186,
  "'": 222,
  "[": 219,
  "]": 221,
  "\\": 220
}, it = {
  // shiftKey
  "⇧": 16,
  shift: 16,
  // altKey
  "⌥": 18,
  alt: 18,
  option: 18,
  // ctrlKey
  "⌃": 17,
  ctrl: 17,
  control: 17,
  // metaKey
  "⌘": 91,
  cmd: 91,
  command: 91
}, $i = {
  16: "shiftKey",
  18: "altKey",
  17: "ctrlKey",
  91: "metaKey",
  shiftKey: 16,
  ctrlKey: 17,
  altKey: 18,
  metaKey: 91
}, Ue = {
  16: !1,
  18: !1,
  17: !1,
  91: !1
}, Ee = {};
for (let t = 1; t < 20; t++)
  Vr["f".concat(t)] = 111 + t;
let Se = [], Br = null, Ms = "all";
const pt = /* @__PURE__ */ new Map(), Kr = (t) => Vr[t.toLowerCase()] || it[t.toLowerCase()] || t.toUpperCase().charCodeAt(0), pu = (t) => Object.keys(Vr).find((l) => Vr[l] === t), mu = (t) => Object.keys(it).find((l) => it[l] === t);
function Ps(t) {
  Ms = t || "all";
}
function Hr() {
  return Ms || "all";
}
function yu() {
  return Se.slice(0);
}
function Su() {
  return Se.map((t) => pu(t) || mu(t) || String.fromCharCode(t));
}
function bu() {
  const t = [];
  return Object.keys(Ee).forEach((l) => {
    Ee[l].forEach((A) => {
      let {
        key: f,
        scope: C,
        mods: g,
        shortcut: d
      } = A;
      t.push({
        scope: C,
        shortcut: d,
        mods: g,
        keys: f.split("+").map((i) => Kr(i))
      });
    });
  }), t;
}
function Tu(t) {
  const l = t.target || t.srcElement, {
    tagName: A
  } = l;
  let f = !0;
  const C = A === "INPUT" && !["checkbox", "radio", "range", "button", "file", "reset", "submit", "color"].includes(l.type);
  return (l.isContentEditable || (C || A === "TEXTAREA" || A === "SELECT") && !l.readOnly) && (f = !1), f;
}
function wu(t) {
  return typeof t == "string" && (t = Kr(t)), Se.indexOf(t) !== -1;
}
function Cu(t, l) {
  let A, f;
  t || (t = Hr());
  for (const C in Ee)
    if (Object.prototype.hasOwnProperty.call(Ee, C))
      for (A = Ee[C], f = 0; f < A.length; )
        A[f].scope === t ? A.splice(f, 1).forEach((d) => {
          let {
            element: i
          } = d;
          return ln(i);
        }) : f++;
  Hr() === t && Ps(l || "all");
}
function Eu(t) {
  let l = t.keyCode || t.which || t.charCode;
  const A = Se.indexOf(l);
  if (A >= 0 && Se.splice(A, 1), t.key && t.key.toLowerCase() === "meta" && Se.splice(0, Se.length), (l === 93 || l === 224) && (l = 91), l in Ue) {
    Ue[l] = !1;
    for (const f in it) it[f] === l && (xe[f] = !1);
  }
}
function xs(t) {
  if (typeof t > "u")
    Object.keys(Ee).forEach((C) => {
      Array.isArray(Ee[C]) && Ee[C].forEach((g) => li(g)), delete Ee[C];
    }), ln(null);
  else if (Array.isArray(t))
    t.forEach((C) => {
      C.key && li(C);
    });
  else if (typeof t == "object")
    t.key && li(t);
  else if (typeof t == "string") {
    for (var l = arguments.length, A = new Array(l > 1 ? l - 1 : 0), f = 1; f < l; f++)
      A[f - 1] = arguments[f];
    let [C, g] = A;
    typeof C == "function" && (g = C, C = ""), li({
      key: t,
      scope: C,
      method: g,
      splitKey: "+"
    });
  }
}
const li = (t) => {
  let {
    key: l,
    scope: A,
    method: f,
    splitKey: C = "+"
  } = t;
  Ls(l).forEach((d) => {
    const i = d.split(C), c = i.length, v = i[c - 1], S = v === "*" ? "*" : Kr(v);
    if (!Ee[S]) return;
    A || (A = Hr());
    const p = c > 1 ? Rs(it, i) : [], b = [];
    Ee[S] = Ee[S].filter((u) => {
      const m = (f ? u.method === f : !0) && u.scope === A && vu(u.mods, p);
      return m && b.push(u.element), !m;
    }), b.forEach((u) => ln(u));
  });
};
function ts(t, l, A, f) {
  if (l.element !== f)
    return;
  let C;
  if (l.scope === A || l.scope === "all") {
    C = l.mods.length > 0;
    for (const g in Ue)
      Object.prototype.hasOwnProperty.call(Ue, g) && (!Ue[g] && l.mods.indexOf(+g) > -1 || Ue[g] && l.mods.indexOf(+g) === -1) && (C = !1);
    (l.mods.length === 0 && !Ue[16] && !Ue[18] && !Ue[17] && !Ue[91] || C || l.shortcut === "*") && (l.keys = [], l.keys = l.keys.concat(Se), l.method(t, l) === !1 && (t.preventDefault ? t.preventDefault() : t.returnValue = !1, t.stopPropagation && t.stopPropagation(), t.cancelBubble && (t.cancelBubble = !0)));
  }
}
function rs(t, l) {
  const A = Ee["*"];
  let f = t.keyCode || t.which || t.charCode;
  if (!xe.filter.call(this, t)) return;
  if ((f === 93 || f === 224) && (f = 91), Se.indexOf(f) === -1 && f !== 229 && Se.push(f), ["ctrlKey", "altKey", "shiftKey", "metaKey"].forEach((i) => {
    const c = $i[i];
    t[i] && Se.indexOf(c) === -1 ? Se.push(c) : !t[i] && Se.indexOf(c) > -1 ? Se.splice(Se.indexOf(c), 1) : i === "metaKey" && t[i] && Se.length === 3 && (t.ctrlKey || t.shiftKey || t.altKey || (Se = Se.slice(Se.indexOf(c))));
  }), f in Ue) {
    Ue[f] = !0;
    for (const i in it)
      it[i] === f && (xe[i] = !0);
    if (!A) return;
  }
  for (const i in Ue)
    Object.prototype.hasOwnProperty.call(Ue, i) && (Ue[i] = t[$i[i]]);
  t.getModifierState && !(t.altKey && !t.ctrlKey) && t.getModifierState("AltGraph") && (Se.indexOf(17) === -1 && Se.push(17), Se.indexOf(18) === -1 && Se.push(18), Ue[17] = !0, Ue[18] = !0);
  const C = Hr();
  if (A)
    for (let i = 0; i < A.length; i++)
      A[i].scope === C && (t.type === "keydown" && A[i].keydown || t.type === "keyup" && A[i].keyup) && ts(t, A[i], C, l);
  if (!(f in Ee)) return;
  const g = Ee[f], d = g.length;
  for (let i = 0; i < d; i++)
    if ((t.type === "keydown" && g[i].keydown || t.type === "keyup" && g[i].keyup) && g[i].key) {
      const c = g[i], {
        splitKey: v
      } = c, S = c.key.split(v), p = [];
      for (let b = 0; b < S.length; b++)
        p.push(Kr(S[b]));
      p.sort().join("") === Se.sort().join("") && ts(t, c, C, l);
    }
}
function xe(t, l, A) {
  Se = [];
  const f = Ls(t);
  let C = [], g = "all", d = document, i = 0, c = !1, v = !0, S = "+", p = !1, b = !1;
  for (A === void 0 && typeof l == "function" && (A = l), Object.prototype.toString.call(l) === "[object Object]" && (l.scope && (g = l.scope), l.element && (d = l.element), l.keyup && (c = l.keyup), l.keydown !== void 0 && (v = l.keydown), l.capture !== void 0 && (p = l.capture), typeof l.splitKey == "string" && (S = l.splitKey), l.single === !0 && (b = !0)), typeof l == "string" && (g = l), b && xs(t, g); i < f.length; i++)
    t = f[i].split(S), C = [], t.length > 1 && (C = Rs(it, t)), t = t[t.length - 1], t = t === "*" ? "*" : Kr(t), t in Ee || (Ee[t] = []), Ee[t].push({
      keyup: c,
      keydown: v,
      scope: g,
      mods: C,
      shortcut: f[i],
      method: A,
      key: f[i],
      splitKey: S,
      element: d
    });
  if (typeof d < "u" && window) {
    if (!pt.has(d)) {
      const u = function() {
        let m = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window.event;
        return rs(m, d);
      }, s = function() {
        let m = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window.event;
        rs(m, d), Eu(m);
      };
      pt.set(d, {
        keydownListener: u,
        keyupListenr: s,
        capture: p
      }), ji(d, "keydown", u, p), ji(d, "keyup", s, p);
    }
    if (!Br) {
      const u = () => {
        Se = [];
      };
      Br = {
        listener: u,
        capture: p
      }, ji(window, "focus", u, p);
    }
  }
}
function Au(t) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "all";
  Object.keys(Ee).forEach((A) => {
    Ee[A].filter((C) => C.scope === l && C.shortcut === t).forEach((C) => {
      C && C.method && C.method();
    });
  });
}
function ln(t) {
  const l = Object.values(Ee).flat();
  if (l.findIndex((f) => {
    let {
      element: C
    } = f;
    return C === t;
  }) < 0) {
    const {
      keydownListener: f,
      keyupListenr: C,
      capture: g
    } = pt.get(t) || {};
    f && C && (Gr(t, "keyup", C, g), Gr(t, "keydown", f, g), pt.delete(t));
  }
  if ((l.length <= 0 || pt.size <= 0) && (Object.keys(pt).forEach((C) => {
    const {
      keydownListener: g,
      keyupListenr: d,
      capture: i
    } = pt.get(C) || {};
    g && d && (Gr(C, "keyup", d, i), Gr(C, "keydown", g, i), pt.delete(C));
  }), pt.clear(), Object.keys(Ee).forEach((C) => delete Ee[C]), Br)) {
    const {
      listener: C,
      capture: g
    } = Br;
    Gr(window, "focus", C, g), Br = null;
  }
}
const qi = {
  getPressedKeyString: Su,
  setScope: Ps,
  getScope: Hr,
  deleteScope: Cu,
  getPressedKeyCodes: yu,
  getAllKeyCodes: bu,
  isPressed: wu,
  filter: Tu,
  trigger: Au,
  unbind: xs,
  keyMap: Vr,
  modifier: it,
  modifierMap: $i
};
for (const t in qi)
  Object.prototype.hasOwnProperty.call(qi, t) && (xe[t] = qi[t]);
if (typeof window < "u") {
  const t = window.hotkeys;
  xe.noConflict = (l) => (l && window.hotkeys === xe && (window.hotkeys = t), xe), window.hotkeys = xe;
}
new Ji();
xe.filter = function(t) {
  const l = t.target || t.srcElement, A = l.tagName, f = l.type;
  return !(l.isContentEditable || (A === "INPUT" && f === "text" || A === "TEXTAREA") && !l.readOnly);
};
xe("ctrl,shift,command,opt", () => {
});
xe.setScope(
  "page"
  /* page */
);
const is = xe.unbind;
xe.unbind = function(...t) {
  let [l, A, f] = t;
  return l && typeof A != "string" && (typeof A == "function" && (f = A), A = "all"), is.call(xe, l, A, f);
};
const Ur = {}, Yr = {};
window.addEventListener("message", async (t) => {
  var g, d, i;
  const { data: l } = t, { extData: A, eventName: f, params: C } = l || {};
  if (A) {
    if (A.type === "EXT_REQ" && Ur[f]) {
      const c = await ((g = Ur[f]) == null ? void 0 : g.call(Ur, C));
      return (d = t.source) == null ? void 0 : d.postMessage({
        params: C,
        extData: {
          ...A,
          type: "EXT_RES"
          /* res */
        },
        response: c
      });
    }
    if (A.type === "EXT_RES") {
      const { resolveKey: c } = A, { response: v } = l;
      (i = Yr[c]) == null || i.call(Yr, v), Reflect.deleteProperty(Yr, c);
    }
  }
});
const ns = {
  send(t, l) {
    return new Promise((A) => {
      const f = Date.now() + "";
      Yr[f] = A, window.postMessage({
        eventName: t,
        params: l,
        extData: {
          resolveKey: f,
          type: "EXT_REQ"
          /* req */
        }
      });
    });
  },
  on(t, l) {
    Ur[t] = l;
  }
}, Ru = "awebExtension", as = {
  left: { key: "left", buttons: 1 },
  right: { key: "right", buttons: 2 },
  middle: { key: "middle", buttons: 4 }
};
let ss;
const Lu = function() {
  document.documentElement.classList.contains(Ru) && (ss = {
    call(t, l) {
      return ns.send(t, l);
    },
    on(t, l) {
      return ns.on(t, l);
    }
  }, globalThis.animalExt = ss);
};
Lu();
function Mu(t = 100) {
  return new Promise((l) => setTimeout(l, t));
}
const os = function(t) {
  return t.constructor.name === "PointerEvent" ? t : t.evt;
}, Pu = function({
  targetEl: t,
  targetKonvaEl: l,
  pressButton: A = as.left.key,
  onPressStart: f,
  onPressMove: C,
  onPressEnd: g
}) {
  let d;
  async function i() {
    if (d)
      return;
    if (t != null && t.value.addEventListener) {
      d = {
        on: (...m) => {
          var y;
          return ((y = t.value) == null ? void 0 : y.addEventListener).call(y, ...m);
        },
        off: (...m) => {
          var y;
          return ((y = t.value) == null ? void 0 : y.removeEventListener).call(y, ...m);
        }
      };
      return;
    }
    const s = await (l == null ? void 0 : l());
    s != null && s.on && (d = {
      on: s.on.bind(s),
      off: s.off.bind(s)
    });
  }
  let c;
  const v = as[A].buttons, S = {
    isPressing: !1,
    start: { x: 0, y: 0 }
  }, p = function(s) {
    const m = os(s);
    Object.assign(S, {
      isPressing: !1,
      start: { x: m.clientX, y: m.clientY }
    }), m.buttons === v && (f == null || f(s), d.on("pointermove", b), d.on("pointerup", u), c = function() {
      d.off("pointermove", b), d.off("pointerup", u), document.removeEventListener("pointerup", c), c = null;
    }, document.addEventListener("pointerup", c));
  }, b = function(s) {
    const m = os(s);
    if (!S.isPressing) {
      if (Math.abs(m.clientX - S.start.x) < 5 && Math.abs(m.clientY - S.start.y) < 5)
        return;
      S.isPressing = !0;
    }
    C == null || C(s);
  }, u = function(s) {
    c == null || c(), g == null || g(s);
  };
  return _s(async () => {
    await i(), d.on("pointerdown", p);
  }), en(() => {
    d.off("pointerdown", p);
  }), {};
}, xu = function({ arr: t }) {
  const l = /* @__PURE__ */ new WeakMap(), A = function(g) {
    let d = l.get(g);
    return d || (d = ys(), l.set(g, d), d);
  };
  return { id2Idx: function(g) {
    return t.value.findIndex((d) => A(d) === g);
  }, idx2Id: function(g) {
    return t.value[g] ? A(t.value[g]) : "";
  }, getId: A };
};
let Qi = document.createElement("div");
Qi.innerHTML = '<div style="border: 2px dashed #222; position: absolute; z-index: 2000; pointer-events: none;"></div>';
Qi = Qi.children[0];
var ls;
(function(t) {
  t.header = "header", t.undefined = "undefined", t.boolean = "boolean", t.number = "number", t.bigint = "bigint", t.string = "string", t.symbol = "symbol", t.function = "function", t.object = "object";
})(ls || (ls = {}));
var ke;
(function(t) {
  t[t.BACKSPACE = 8] = "BACKSPACE", t[t.FORM_FEED = 12] = "FORM_FEED", t[t.NEWLINE = 10] = "NEWLINE", t[t.CARRIAGE_RETURN = 13] = "CARRIAGE_RETURN", t[t.TAB = 9] = "TAB", t[t.SPACE = 32] = "SPACE", t[t.EXCLAMATION_MARK = 33] = "EXCLAMATION_MARK", t[t.QUOTATION_MARK = 34] = "QUOTATION_MARK", t[t.NUMBER_SIGN = 35] = "NUMBER_SIGN", t[t.DOLLAR_SIGN = 36] = "DOLLAR_SIGN", t[t.PERCENT_SIGN = 37] = "PERCENT_SIGN", t[t.AMPERSAND = 38] = "AMPERSAND", t[t.APOSTROPHE = 39] = "APOSTROPHE", t[t.LEFT_PARENTHESIS = 40] = "LEFT_PARENTHESIS", t[t.RIGHT_PARENTHESIS = 41] = "RIGHT_PARENTHESIS", t[t.ASTERISK = 42] = "ASTERISK", t[t.PLUS_SIGN = 43] = "PLUS_SIGN", t[t.COMMA = 44] = "COMMA", t[t.HYPHEN_MINUS = 45] = "HYPHEN_MINUS", t[t.FULL_STOP = 46] = "FULL_STOP", t[t.SOLIDUS = 47] = "SOLIDUS", t[t.DIGIT_ZERO = 48] = "DIGIT_ZERO", t[t.DIGIT_ONE = 49] = "DIGIT_ONE", t[t.DIGIT_TWO = 50] = "DIGIT_TWO", t[t.DIGIT_THREE = 51] = "DIGIT_THREE", t[t.DIGIT_FOUR = 52] = "DIGIT_FOUR", t[t.DIGIT_FIVE = 53] = "DIGIT_FIVE", t[t.DIGIT_SIX = 54] = "DIGIT_SIX", t[t.DIGIT_SEVEN = 55] = "DIGIT_SEVEN", t[t.DIGIT_EIGHT = 56] = "DIGIT_EIGHT", t[t.DIGIT_NINE = 57] = "DIGIT_NINE", t[t.COLON = 58] = "COLON", t[t.SEMICOLON = 59] = "SEMICOLON", t[t.LESS_THAN_SIGN = 60] = "LESS_THAN_SIGN", t[t.EQUALS_SIGN = 61] = "EQUALS_SIGN", t[t.GREATER_THAN_SIGN = 62] = "GREATER_THAN_SIGN", t[t.QUESTION_MARK = 63] = "QUESTION_MARK", t[t.COMMERCIAL_AT = 64] = "COMMERCIAL_AT", t[t.LATIN_CAPITAL_LETTER_A = 65] = "LATIN_CAPITAL_LETTER_A", t[t.LATIN_CAPITAL_LETTER_B = 66] = "LATIN_CAPITAL_LETTER_B", t[t.LATIN_CAPITAL_LETTER_C = 67] = "LATIN_CAPITAL_LETTER_C", t[t.LATIN_CAPITAL_LETTER_D = 68] = "LATIN_CAPITAL_LETTER_D", t[t.LATIN_CAPITAL_LETTER_E = 69] = "LATIN_CAPITAL_LETTER_E", t[t.LATIN_CAPITAL_LETTER_F = 70] = "LATIN_CAPITAL_LETTER_F", t[t.LATIN_CAPITAL_LETTER_G = 71] = "LATIN_CAPITAL_LETTER_G", t[t.LATIN_CAPITAL_LETTER_H = 72] = "LATIN_CAPITAL_LETTER_H", t[t.LATIN_CAPITAL_LETTER_I = 73] = "LATIN_CAPITAL_LETTER_I", t[t.LATIN_CAPITAL_LETTER_J = 74] = "LATIN_CAPITAL_LETTER_J", t[t.LATIN_CAPITAL_LETTER_K = 75] = "LATIN_CAPITAL_LETTER_K", t[t.LATIN_CAPITAL_LETTER_L = 76] = "LATIN_CAPITAL_LETTER_L", t[t.LATIN_CAPITAL_LETTER_M = 77] = "LATIN_CAPITAL_LETTER_M", t[t.LATIN_CAPITAL_LETTER_N = 78] = "LATIN_CAPITAL_LETTER_N", t[t.LATIN_CAPITAL_LETTER_O = 79] = "LATIN_CAPITAL_LETTER_O", t[t.LATIN_CAPITAL_LETTER_P = 80] = "LATIN_CAPITAL_LETTER_P", t[t.LATIN_CAPITAL_LETTER_Q = 81] = "LATIN_CAPITAL_LETTER_Q", t[t.LATIN_CAPITAL_LETTER_R = 82] = "LATIN_CAPITAL_LETTER_R", t[t.LATIN_CAPITAL_LETTER_S = 83] = "LATIN_CAPITAL_LETTER_S", t[t.LATIN_CAPITAL_LETTER_T = 84] = "LATIN_CAPITAL_LETTER_T", t[t.LATIN_CAPITAL_LETTER_U = 85] = "LATIN_CAPITAL_LETTER_U", t[t.LATIN_CAPITAL_LETTER_V = 86] = "LATIN_CAPITAL_LETTER_V", t[t.LATIN_CAPITAL_LETTER_W = 87] = "LATIN_CAPITAL_LETTER_W", t[t.LATIN_CAPITAL_LETTER_X = 88] = "LATIN_CAPITAL_LETTER_X", t[t.LATIN_CAPITAL_LETTER_Y = 89] = "LATIN_CAPITAL_LETTER_Y", t[t.LATIN_CAPITAL_LETTER_Z = 90] = "LATIN_CAPITAL_LETTER_Z", t[t.LEFT_SQUARE_BRACKET = 91] = "LEFT_SQUARE_BRACKET", t[t.REVERSE_SOLIDUS = 92] = "REVERSE_SOLIDUS", t[t.RIGHT_SQUARE_BRACKET = 93] = "RIGHT_SQUARE_BRACKET", t[t.CIRCUMFLEX_ACCENT = 94] = "CIRCUMFLEX_ACCENT", t[t.LOW_LINE = 95] = "LOW_LINE", t[t.GRAVE_ACCENT = 96] = "GRAVE_ACCENT", t[t.LATIN_SMALL_LETTER_A = 97] = "LATIN_SMALL_LETTER_A", t[t.LATIN_SMALL_LETTER_B = 98] = "LATIN_SMALL_LETTER_B", t[t.LATIN_SMALL_LETTER_C = 99] = "LATIN_SMALL_LETTER_C", t[t.LATIN_SMALL_LETTER_D = 100] = "LATIN_SMALL_LETTER_D", t[t.LATIN_SMALL_LETTER_E = 101] = "LATIN_SMALL_LETTER_E", t[t.LATIN_SMALL_LETTER_F = 102] = "LATIN_SMALL_LETTER_F", t[t.LATIN_SMALL_LETTER_G = 103] = "LATIN_SMALL_LETTER_G", t[t.LATIN_SMALL_LETTER_H = 104] = "LATIN_SMALL_LETTER_H", t[t.LATIN_SMALL_LETTER_I = 105] = "LATIN_SMALL_LETTER_I", t[t.LATIN_SMALL_LETTER_J = 106] = "LATIN_SMALL_LETTER_J", t[t.LATIN_SMALL_LETTER_K = 107] = "LATIN_SMALL_LETTER_K", t[t.LATIN_SMALL_LETTER_L = 108] = "LATIN_SMALL_LETTER_L", t[t.LATIN_SMALL_LETTER_M = 109] = "LATIN_SMALL_LETTER_M", t[t.LATIN_SMALL_LETTER_N = 110] = "LATIN_SMALL_LETTER_N", t[t.LATIN_SMALL_LETTER_O = 111] = "LATIN_SMALL_LETTER_O", t[t.LATIN_SMALL_LETTER_P = 112] = "LATIN_SMALL_LETTER_P", t[t.LATIN_SMALL_LETTER_Q = 113] = "LATIN_SMALL_LETTER_Q", t[t.LATIN_SMALL_LETTER_R = 114] = "LATIN_SMALL_LETTER_R", t[t.LATIN_SMALL_LETTER_S = 115] = "LATIN_SMALL_LETTER_S", t[t.LATIN_SMALL_LETTER_T = 116] = "LATIN_SMALL_LETTER_T", t[t.LATIN_SMALL_LETTER_U = 117] = "LATIN_SMALL_LETTER_U", t[t.LATIN_SMALL_LETTER_V = 118] = "LATIN_SMALL_LETTER_V", t[t.LATIN_SMALL_LETTER_W = 119] = "LATIN_SMALL_LETTER_W", t[t.LATIN_SMALL_LETTER_X = 120] = "LATIN_SMALL_LETTER_X", t[t.LATIN_SMALL_LETTER_Y = 121] = "LATIN_SMALL_LETTER_Y", t[t.LATIN_SMALL_LETTER_Z = 122] = "LATIN_SMALL_LETTER_Z", t[t.LEFT_CURLY_BRACKET = 123] = "LEFT_CURLY_BRACKET", t[t.VERTICAL_LINE = 124] = "VERTICAL_LINE", t[t.RIGHT_CURLY_BRACKET = 125] = "RIGHT_CURLY_BRACKET", t[t.TILDE = 126] = "TILDE";
})(ke || (ke = {}));
ke.QUOTATION_MARK + "", ke.QUOTATION_MARK, ke.REVERSE_SOLIDUS + "", ke.REVERSE_SOLIDUS, ke.SOLIDUS + "", ke.SOLIDUS, ke.LATIN_SMALL_LETTER_B + "", ke.BACKSPACE, ke.LATIN_SMALL_LETTER_F + "", ke.FORM_FEED, ke.LATIN_SMALL_LETTER_N + "", ke.NEWLINE, ke.LATIN_SMALL_LETTER_R + "", ke.CARRIAGE_RETURN, ke.LATIN_SMALL_LETTER_T + "", ke.TAB;
var hs;
(function(t) {
  t[t.LEFT_BRACE = 0] = "LEFT_BRACE", t[t.RIGHT_BRACE = 1] = "RIGHT_BRACE", t[t.LEFT_BRACKET = 2] = "LEFT_BRACKET", t[t.RIGHT_BRACKET = 3] = "RIGHT_BRACKET", t[t.COLON = 4] = "COLON", t[t.COMMA = 5] = "COMMA", t[t.TRUE = 6] = "TRUE", t[t.FALSE = 7] = "FALSE", t[t.NULL = 8] = "NULL", t[t.STRING = 9] = "STRING", t[t.NUMBER = 10] = "NUMBER", t[t.SEPARATOR = 11] = "SEPARATOR";
})(hs || (hs = {}));
var ds;
(function(t) {
  t[t.START = 0] = "START", t[t.ENDED = 1] = "ENDED", t[t.ERROR = 2] = "ERROR", t[t.TRUE1 = 3] = "TRUE1", t[t.TRUE2 = 4] = "TRUE2", t[t.TRUE3 = 5] = "TRUE3", t[t.FALSE1 = 6] = "FALSE1", t[t.FALSE2 = 7] = "FALSE2", t[t.FALSE3 = 8] = "FALSE3", t[t.FALSE4 = 9] = "FALSE4", t[t.NULL1 = 10] = "NULL1", t[t.NULL2 = 11] = "NULL2", t[t.NULL3 = 12] = "NULL3", t[t.STRING_DEFAULT = 13] = "STRING_DEFAULT", t[t.STRING_AFTER_BACKSLASH = 14] = "STRING_AFTER_BACKSLASH", t[t.STRING_UNICODE_DIGIT_1 = 15] = "STRING_UNICODE_DIGIT_1", t[t.STRING_UNICODE_DIGIT_2 = 16] = "STRING_UNICODE_DIGIT_2", t[t.STRING_UNICODE_DIGIT_3 = 17] = "STRING_UNICODE_DIGIT_3", t[t.STRING_UNICODE_DIGIT_4 = 18] = "STRING_UNICODE_DIGIT_4", t[t.STRING_INCOMPLETE_CHAR = 19] = "STRING_INCOMPLETE_CHAR", t[t.NUMBER_AFTER_INITIAL_MINUS = 20] = "NUMBER_AFTER_INITIAL_MINUS", t[t.NUMBER_AFTER_INITIAL_ZERO = 21] = "NUMBER_AFTER_INITIAL_ZERO", t[t.NUMBER_AFTER_INITIAL_NON_ZERO = 22] = "NUMBER_AFTER_INITIAL_NON_ZERO", t[t.NUMBER_AFTER_FULL_STOP = 23] = "NUMBER_AFTER_FULL_STOP", t[t.NUMBER_AFTER_DECIMAL = 24] = "NUMBER_AFTER_DECIMAL", t[t.NUMBER_AFTER_E = 25] = "NUMBER_AFTER_E", t[t.NUMBER_AFTER_E_AND_SIGN = 26] = "NUMBER_AFTER_E_AND_SIGN", t[t.NUMBER_AFTER_E_AND_DIGIT = 27] = "NUMBER_AFTER_E_AND_DIGIT", t[t.SEPARATOR = 28] = "SEPARATOR", t[t.BOM_OR_START = 29] = "BOM_OR_START", t[t.BOM = 30] = "BOM";
})(ds || (ds = {}));
var us;
(function(t) {
  t[t.OBJECT = 0] = "OBJECT", t[t.ARRAY = 1] = "ARRAY";
})(us || (us = {}));
var cs;
(function(t) {
  t[t.VALUE = 0] = "VALUE", t[t.KEY = 1] = "KEY", t[t.COLON = 2] = "COLON", t[t.COMMA = 3] = "COMMA", t[t.ENDED = 4] = "ENDED", t[t.ERROR = 5] = "ERROR", t[t.SEPARATOR = 6] = "SEPARATOR";
})(cs || (cs = {}));
class Nu {
  constructor({ storeKey: l } = {}) {
    this.storeKey = "", this._snap = null, l && (this.storeKey = l);
    const A = this.set;
    this.set = function(f, C = {}, g = {}) {
      this._snap || (this._snap = {
        storeKey: this.storeKey,
        snapshot: null,
        options: C
      }), Object.assign(this._snap, {
        snapshot: this.toSnap(f, { ...C, accSnapshot: this._snap.snapshot, ...g }),
        options: { ...this._snap.options, ...C }
      }), A.call(this, f, C);
    };
  }
  get() {
  }
  // 获取store具体内容
  set(l, A) {
  }
  // 修改store
  toSnap(l, A) {
  }
  // 转化为snap
  fromSnap(l) {
  }
  // snap转化为数据
  clearSnap() {
    this._snap = null;
  }
}
class Ou {
  constructor() {
    this.step = 0, this.records = [], this.status = {
      canUndo: !1,
      canRedo: !1
    }, this.updateStatus();
  }
  // 清空
  clear() {
    this.records = [], this.step = -1;
  }
  canUndo() {
    return !(this.step - 1 < 0);
  }
  canRedo() {
    return !(this.step + 1 > this.records.length - 1);
  }
  updateStatus() {
    Object.assign(this.status, {
      canUndo: this.canUndo(),
      canRedo: this.canRedo()
    });
  }
}
class Du extends Ou {
  constructor({ stores: l, maxSize: A }) {
    super(), this.recordStores = [], this.step = 0, this.maxSize = Number.MAX_SAFE_INTEGER, this.batchProduceData = { stores: [] }, l && (this.recordStores = l), A && (this.maxSize = A);
  }
  onBeforeProduce() {
  }
  // 生成记录之前
  onAfterProduce() {
  }
  onBeforeDo(l) {
  }
  // undo/redo 之前
  onAfterDo(l) {
  }
  async produce(l, A) {
    var f, C;
    (f = this.onBeforeProduce) == null || f.call(this), await A(...this.recordStores), this.records.length >= this.maxSize && this.records.shift(), this.save(l), this.updateStatus(), (C = this.onAfterProduce) == null || C.call(this);
  }
  // 增加1条恢复记录
  save(l) {
    this.step < this.records.length - 1 && (this.records = this.records.slice(0, this.step + 1));
    const A = this.recordStores.filter((f) => !!f._snap).map((f) => {
      const C = f._snap;
      return f.clearSnap(), C;
    });
    this.records.push({
      time: Date.now(),
      op: l,
      patches: A
    }), this.step = this.records.length - 1;
  }
  // 使用一条记录
  load(l, A) {
    const { patches: f } = this.records[l];
    f.forEach(({ storeKey: C, snapshot: g, options: d }) => {
      const i = this.getStore(C);
      i == null || i.fromSnap({ snap: g, isUndo: A, editRecord: this, options: d });
    });
  }
  undo() {
    var l, A;
    if ((l = this.onBeforeDo) == null || l.call(this, !0), !this.canUndo())
      return es.warn("已到底，无法undo");
    this.load(this.step, !0), this.step--, this.updateStatus(), console.log("undo success"), (A = this.onAfterDo) == null || A.call(this, !0);
  }
  redo() {
    var A, f;
    (A = this.onBeforeDo) == null || A.call(this, !1);
    const l = this.step + 1;
    if (!this.canRedo())
      return es.warn("已到顶，无法redo");
    this.load(l, !1), this.step = l, this.updateStatus(), console.log("redo success"), (f = this.onAfterDo) == null || f.call(this, !1);
  }
  getStore(l) {
    return this.recordStores.find((A) => A.storeKey === l);
  }
  produceBatch(l, { onStartProduce: A, onEndProduce: f, onEach: C }) {
    this.batchProduceData.stores.length || this.produce(l, async (...g) => {
      Object.assign(this.batchProduceData, {
        stores: g
      }), A(...g), await Mu(300), f(...g), Object.assign(this.batchProduceData, {
        stores: []
      });
    }), C(...this.batchProduceData.stores);
  }
  // 获取指定state
  getRecord({ step: l, key: A }) {
    var C;
    return (C = this.records[l].patches) == null ? void 0 : C.find(({ storeKey: g, snapshot: d, options: i }) => A === g);
  }
}
var gs;
const zi = ((gs = navigator.userAgentData) == null ? void 0 : gs.platform) || navigator.platform, ku = zi == null ? void 0 : zi.toLowerCase().includes("mac"), Iu = {
  alt: { text: "Opt", hotkey: "option" },
  ctrl: { text: "Command", hotkey: "command" },
  redo: { text: "Command + Shift + Z" }
}, Fu = {
  alt: { text: "Alt", hotkey: "alt" },
  ctrl: { text: "Ctrl", hotkey: "ctrl" },
  redo: { text: "Ctrl + Y" }
}, fs = ku ? Iu : Fu, Gu = function({
  editRecord: t,
  isEnable: l,
  undo: A,
  redo: f
}) {
  const C = tn({
    status: t.status
  }), g = Be(() => C.status.canUndo), d = Be(() => C.status.canRedo);
  A = A || function() {
    g.value && t.undo();
  }, f = f || function() {
    d.value && t.redo();
  };
  const i = Be(() => {
    const s = `撤销 ${fs.ctrl.text}+Z`;
    return {
      tip: g.value && l.value ? s : "无法撤销",
      disabled: l.value ? !g.value : !0
    };
  }), c = Be(() => {
    const s = `重做 ${fs.ctrl.text}+Shift+Z`;
    return {
      tip: d.value && l.value ? s : "无法重做",
      disabled: l.value ? !d.value : !0
    };
  }), v = function(s) {
    return s.preventDefault(), A(), !1;
  }, S = function(s) {
    return s.preventDefault(), f(), !1;
  }, p = xe.getScope(), b = () => {
    xe("command+z,ctrl+z", { scope: p }, v), xe("command+shift+z,ctrl+y", { scope: p }, S);
  }, u = () => {
    xe.unbind("command+z,ctrl+z", p, v), xe.unbind("command+shift+z,ctrl+y", p, S);
  };
  return rn(
    () => l.value,
    function(s) {
      s ? b() : u();
    },
    { immediate: !0 }
  ), en(() => {
    u();
  }), { canUndo: g, canRedo: d, undoStatus: i, redoStatus: c };
};
function Uu(t) {
  throw new Error('Could not dynamically require "' + t + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Yu = { exports: {} };
(function(t, l) {
  (function(A, f) {
    t.exports = f();
  })(ci, function() {
    var A;
    function f() {
      return A.apply(null, arguments);
    }
    function C(e) {
      A = e;
    }
    function g(e) {
      return e instanceof Array || Object.prototype.toString.call(e) === "[object Array]";
    }
    function d(e) {
      return e != null && Object.prototype.toString.call(e) === "[object Object]";
    }
    function i(e, r) {
      return Object.prototype.hasOwnProperty.call(e, r);
    }
    function c(e) {
      if (Object.getOwnPropertyNames)
        return Object.getOwnPropertyNames(e).length === 0;
      var r;
      for (r in e)
        if (i(e, r))
          return !1;
      return !0;
    }
    function v(e) {
      return e === void 0;
    }
    function S(e) {
      return typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]";
    }
    function p(e) {
      return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
    }
    function b(e, r) {
      var a = [], _, M = e.length;
      for (_ = 0; _ < M; ++_)
        a.push(r(e[_], _));
      return a;
    }
    function u(e, r) {
      for (var a in r)
        i(r, a) && (e[a] = r[a]);
      return i(r, "toString") && (e.toString = r.toString), i(r, "valueOf") && (e.valueOf = r.valueOf), e;
    }
    function s(e, r, a, _) {
      return An(e, r, a, _, !0).utc();
    }
    function m() {
      return {
        empty: !1,
        unusedTokens: [],
        unusedInput: [],
        overflow: -2,
        charsLeftOver: 0,
        nullInput: !1,
        invalidEra: null,
        invalidMonth: null,
        invalidFormat: !1,
        userInvalidated: !1,
        iso: !1,
        parsedDateParts: [],
        era: null,
        meridiem: null,
        rfc2822: !1,
        weekdayMismatch: !1
      };
    }
    function y(e) {
      return e._pf == null && (e._pf = m()), e._pf;
    }
    var P;
    Array.prototype.some ? P = Array.prototype.some : P = function(e) {
      var r = Object(this), a = r.length >>> 0, _;
      for (_ = 0; _ < a; _++)
        if (_ in r && e.call(this, r[_], _, r))
          return !0;
      return !1;
    };
    function h(e) {
      var r = null, a = !1, _ = e._d && !isNaN(e._d.getTime());
      if (_ && (r = y(e), a = P.call(r.parsedDateParts, function(M) {
        return M != null;
      }), _ = r.overflow < 0 && !r.empty && !r.invalidEra && !r.invalidMonth && !r.invalidWeekday && !r.weekdayMismatch && !r.nullInput && !r.invalidFormat && !r.userInvalidated && (!r.meridiem || r.meridiem && a), e._strict && (_ = _ && r.charsLeftOver === 0 && r.unusedTokens.length === 0 && r.bigHour === void 0)), Object.isFrozen == null || !Object.isFrozen(e))
        e._isValid = _;
      else
        return _;
      return e._isValid;
    }
    function n(e) {
      var r = s(NaN);
      return e != null ? u(y(r), e) : y(r).userInvalidated = !0, r;
    }
    var T = f.momentProperties = [], R = !1;
    function D(e, r) {
      var a, _, M, U = T.length;
      if (v(r._isAMomentObject) || (e._isAMomentObject = r._isAMomentObject), v(r._i) || (e._i = r._i), v(r._f) || (e._f = r._f), v(r._l) || (e._l = r._l), v(r._strict) || (e._strict = r._strict), v(r._tzm) || (e._tzm = r._tzm), v(r._isUTC) || (e._isUTC = r._isUTC), v(r._offset) || (e._offset = r._offset), v(r._pf) || (e._pf = y(r)), v(r._locale) || (e._locale = r._locale), U > 0)
        for (a = 0; a < U; a++)
          _ = T[a], M = r[_], v(M) || (e[_] = M);
      return e;
    }
    function k(e) {
      D(this, e), this._d = new Date(e._d != null ? e._d.getTime() : NaN), this.isValid() || (this._d = /* @__PURE__ */ new Date(NaN)), R === !1 && (R = !0, f.updateOffset(this), R = !1);
    }
    function x(e) {
      return e instanceof k || e != null && e._isAMomentObject != null;
    }
    function G(e) {
      f.suppressDeprecationWarnings === !1 && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + e);
    }
    function E(e, r) {
      var a = !0;
      return u(function() {
        if (f.deprecationHandler != null && f.deprecationHandler(null, e), a) {
          var _ = [], M, U, K, ee = arguments.length;
          for (U = 0; U < ee; U++) {
            if (M = "", typeof arguments[U] == "object") {
              M += `
[` + U + "] ";
              for (K in arguments[0])
                i(arguments[0], K) && (M += K + ": " + arguments[0][K] + ", ");
              M = M.slice(0, -2);
            } else
              M = arguments[U];
            _.push(M);
          }
          G(
            e + `
Arguments: ` + Array.prototype.slice.call(_).join("") + `
` + new Error().stack
          ), a = !1;
        }
        return r.apply(this, arguments);
      }, r);
    }
    var N = {};
    function F(e, r) {
      f.deprecationHandler != null && f.deprecationHandler(e, r), N[e] || (G(r), N[e] = !0);
    }
    f.suppressDeprecationWarnings = !1, f.deprecationHandler = null;
    function o(e) {
      return typeof Function < "u" && e instanceof Function || Object.prototype.toString.call(e) === "[object Function]";
    }
    function w(e) {
      var r, a;
      for (a in e)
        i(e, a) && (r = e[a], o(r) ? this[a] = r : this["_" + a] = r);
      this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp(
        (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
      );
    }
    function L(e, r) {
      var a = u({}, e), _;
      for (_ in r)
        i(r, _) && (d(e[_]) && d(r[_]) ? (a[_] = {}, u(a[_], e[_]), u(a[_], r[_])) : r[_] != null ? a[_] = r[_] : delete a[_]);
      for (_ in e)
        i(e, _) && !i(r, _) && d(e[_]) && (a[_] = u({}, a[_]));
      return a;
    }
    function O(e) {
      e != null && this.set(e);
    }
    var I;
    Object.keys ? I = Object.keys : I = function(e) {
      var r, a = [];
      for (r in e)
        i(e, r) && a.push(r);
      return a;
    };
    var H = {
      sameDay: "[Today at] LT",
      nextDay: "[Tomorrow at] LT",
      nextWeek: "dddd [at] LT",
      lastDay: "[Yesterday at] LT",
      lastWeek: "[Last] dddd [at] LT",
      sameElse: "L"
    };
    function B(e, r, a) {
      var _ = this._calendar[e] || this._calendar.sameElse;
      return o(_) ? _.call(r, a) : _;
    }
    function $(e, r, a) {
      var _ = "" + Math.abs(e), M = r - _.length, U = e >= 0;
      return (U ? a ? "+" : "" : "-") + Math.pow(10, Math.max(0, M)).toString().substr(1) + _;
    }
    var z = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, Z = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, W = {}, j = {};
    function q(e, r, a, _) {
      var M = _;
      typeof _ == "string" && (M = function() {
        return this[_]();
      }), e && (j[e] = M), r && (j[r[0]] = function() {
        return $(M.apply(this, arguments), r[1], r[2]);
      }), a && (j[a] = function() {
        return this.localeData().ordinal(
          M.apply(this, arguments),
          e
        );
      });
    }
    function J(e) {
      return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
    }
    function Y(e) {
      var r = e.match(z), a, _;
      for (a = 0, _ = r.length; a < _; a++)
        j[r[a]] ? r[a] = j[r[a]] : r[a] = J(r[a]);
      return function(M) {
        var U = "", K;
        for (K = 0; K < _; K++)
          U += o(r[K]) ? r[K].call(M, e) : r[K];
        return U;
      };
    }
    function V(e, r) {
      return e.isValid() ? (r = X(r, e.localeData()), W[r] = W[r] || Y(r), W[r](e)) : e.localeData().invalidDate();
    }
    function X(e, r) {
      var a = 5;
      function _(M) {
        return r.longDateFormat(M) || M;
      }
      for (Z.lastIndex = 0; a >= 0 && Z.test(e); )
        e = e.replace(
          Z,
          _
        ), Z.lastIndex = 0, a -= 1;
      return e;
    }
    var re = {
      LTS: "h:mm:ss A",
      LT: "h:mm A",
      L: "MM/DD/YYYY",
      LL: "MMMM D, YYYY",
      LLL: "MMMM D, YYYY h:mm A",
      LLLL: "dddd, MMMM D, YYYY h:mm A"
    };
    function ie(e) {
      var r = this._longDateFormat[e], a = this._longDateFormat[e.toUpperCase()];
      return r || !a ? r : (this._longDateFormat[e] = a.match(z).map(function(_) {
        return _ === "MMMM" || _ === "MM" || _ === "DD" || _ === "dddd" ? _.slice(1) : _;
      }).join(""), this._longDateFormat[e]);
    }
    var ne = "Invalid date";
    function pe() {
      return this._invalidDate;
    }
    var me = "%d", se = /\d{1,2}/;
    function De(e) {
      return this._ordinal.replace("%d", e);
    }
    var ve = {
      future: "in %s",
      past: "%s ago",
      s: "a few seconds",
      ss: "%d seconds",
      m: "a minute",
      mm: "%d minutes",
      h: "an hour",
      hh: "%d hours",
      d: "a day",
      dd: "%d days",
      w: "a week",
      ww: "%d weeks",
      M: "a month",
      MM: "%d months",
      y: "a year",
      yy: "%d years"
    };
    function be(e, r, a, _) {
      var M = this._relativeTime[a];
      return o(M) ? M(e, r, a, _) : M.replace(/%d/i, e);
    }
    function Je(e, r) {
      var a = this._relativeTime[e > 0 ? "future" : "past"];
      return o(a) ? a(r) : a.replace(/%s/i, r);
    }
    var Fe = {
      D: "date",
      dates: "date",
      date: "date",
      d: "day",
      days: "day",
      day: "day",
      e: "weekday",
      weekdays: "weekday",
      weekday: "weekday",
      E: "isoWeekday",
      isoweekdays: "isoWeekday",
      isoweekday: "isoWeekday",
      DDD: "dayOfYear",
      dayofyears: "dayOfYear",
      dayofyear: "dayOfYear",
      h: "hour",
      hours: "hour",
      hour: "hour",
      ms: "millisecond",
      milliseconds: "millisecond",
      millisecond: "millisecond",
      m: "minute",
      minutes: "minute",
      minute: "minute",
      M: "month",
      months: "month",
      month: "month",
      Q: "quarter",
      quarters: "quarter",
      quarter: "quarter",
      s: "second",
      seconds: "second",
      second: "second",
      gg: "weekYear",
      weekyears: "weekYear",
      weekyear: "weekYear",
      GG: "isoWeekYear",
      isoweekyears: "isoWeekYear",
      isoweekyear: "isoWeekYear",
      w: "week",
      weeks: "week",
      week: "week",
      W: "isoWeek",
      isoweeks: "isoWeek",
      isoweek: "isoWeek",
      y: "year",
      years: "year",
      year: "year"
    };
    function Ne(e) {
      return typeof e == "string" ? Fe[e] || Fe[e.toLowerCase()] : void 0;
    }
    function Ae(e) {
      var r = {}, a, _;
      for (_ in e)
        i(e, _) && (a = Ne(_), a && (r[a] = e[_]));
      return r;
    }
    var Pe = {
      date: 9,
      day: 11,
      weekday: 11,
      isoWeekday: 11,
      dayOfYear: 4,
      hour: 13,
      millisecond: 16,
      minute: 14,
      month: 8,
      quarter: 7,
      second: 15,
      weekYear: 1,
      isoWeekYear: 1,
      week: 5,
      isoWeek: 5,
      year: 1
    };
    function Ve(e) {
      var r = [], a;
      for (a in e)
        i(e, a) && r.push({ unit: a, priority: Pe[a] });
      return r.sort(function(_, M) {
        return _.priority - M.priority;
      }), r;
    }
    var et = /\d/, fe = /\d\d/, je = /\d{3}/, $e = /\d{4}/, We = /[+-]?\d{6}/, ge = /\d\d?/, ze = /\d\d\d\d?/, mt = /\d\d\d\d\d\d?/, tt = /\d{1,3}/, nt = /\d{1,4}/, qr = /[+-]?\d{1,6}/, Mt = /\d+/, at = /[+-]?\d+/, Pt = /Z|[+-]\d\d:?\d\d/gi, Tt = /Z|[+-]\d\d(?::?\d\d)?/gi, _i = /[+-]?\d+(\.\d{1,3})?/, Vt = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, xt = /^[1-9]\d?/, vi = /^([1-9]\d|\d)/, zr;
    zr = {};
    function te(e, r, a) {
      zr[e] = o(r) ? r : function(_, M) {
        return _ && a ? a : r;
      };
    }
    function ks(e, r) {
      return i(zr, e) ? zr[e](r._strict, r._locale) : new RegExp(Is(e));
    }
    function Is(e) {
      return st(
        e.replace("\\", "").replace(
          /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
          function(r, a, _, M, U) {
            return a || _ || M || U;
          }
        )
      );
    }
    function st(e) {
      return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
    }
    function Xe(e) {
      return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
    }
    function de(e) {
      var r = +e, a = 0;
      return r !== 0 && isFinite(r) && (a = Xe(r)), a;
    }
    var pi = {};
    function ye(e, r) {
      var a, _ = r, M;
      for (typeof e == "string" && (e = [e]), S(r) && (_ = function(U, K) {
        K[r] = de(U);
      }), M = e.length, a = 0; a < M; a++)
        pi[e[a]] = _;
    }
    function Ht(e, r) {
      ye(e, function(a, _, M, U) {
        M._w = M._w || {}, r(a, M._w, M, U);
      });
    }
    function Fs(e, r, a) {
      r != null && i(pi, e) && pi[e](r, a._a, a, e);
    }
    function Xr(e) {
      return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0;
    }
    var Ye = 0, ot = 1, rt = 2, Oe = 3, Qe = 4, lt = 5, wt = 6, Gs = 7, Us = 8;
    q("Y", 0, 0, function() {
      var e = this.year();
      return e <= 9999 ? $(e, 4) : "+" + e;
    }), q(0, ["YY", 2], 0, function() {
      return this.year() % 100;
    }), q(0, ["YYYY", 4], 0, "year"), q(0, ["YYYYY", 5], 0, "year"), q(0, ["YYYYYY", 6, !0], 0, "year"), te("Y", at), te("YY", ge, fe), te("YYYY", nt, $e), te("YYYYY", qr, We), te("YYYYYY", qr, We), ye(["YYYYY", "YYYYYY"], Ye), ye("YYYY", function(e, r) {
      r[Ye] = e.length === 2 ? f.parseTwoDigitYear(e) : de(e);
    }), ye("YY", function(e, r) {
      r[Ye] = f.parseTwoDigitYear(e);
    }), ye("Y", function(e, r) {
      r[Ye] = parseInt(e, 10);
    });
    function Wt(e) {
      return Xr(e) ? 366 : 365;
    }
    f.parseTwoDigitYear = function(e) {
      return de(e) + (de(e) > 68 ? 1900 : 2e3);
    };
    var dn = Nt("FullYear", !0);
    function Ys() {
      return Xr(this.year());
    }
    function Nt(e, r) {
      return function(a) {
        return a != null ? (un(this, e, a), f.updateOffset(this, r), this) : Kt(this, e);
      };
    }
    function Kt(e, r) {
      if (!e.isValid())
        return NaN;
      var a = e._d, _ = e._isUTC;
      switch (r) {
        case "Milliseconds":
          return _ ? a.getUTCMilliseconds() : a.getMilliseconds();
        case "Seconds":
          return _ ? a.getUTCSeconds() : a.getSeconds();
        case "Minutes":
          return _ ? a.getUTCMinutes() : a.getMinutes();
        case "Hours":
          return _ ? a.getUTCHours() : a.getHours();
        case "Date":
          return _ ? a.getUTCDate() : a.getDate();
        case "Day":
          return _ ? a.getUTCDay() : a.getDay();
        case "Month":
          return _ ? a.getUTCMonth() : a.getMonth();
        case "FullYear":
          return _ ? a.getUTCFullYear() : a.getFullYear();
        default:
          return NaN;
      }
    }
    function un(e, r, a) {
      var _, M, U, K, ee;
      if (!(!e.isValid() || isNaN(a))) {
        switch (_ = e._d, M = e._isUTC, r) {
          case "Milliseconds":
            return void (M ? _.setUTCMilliseconds(a) : _.setMilliseconds(a));
          case "Seconds":
            return void (M ? _.setUTCSeconds(a) : _.setSeconds(a));
          case "Minutes":
            return void (M ? _.setUTCMinutes(a) : _.setMinutes(a));
          case "Hours":
            return void (M ? _.setUTCHours(a) : _.setHours(a));
          case "Date":
            return void (M ? _.setUTCDate(a) : _.setDate(a));
          case "FullYear":
            break;
          default:
            return;
        }
        U = a, K = e.month(), ee = e.date(), ee = ee === 29 && K === 1 && !Xr(U) ? 28 : ee, M ? _.setUTCFullYear(U, K, ee) : _.setFullYear(U, K, ee);
      }
    }
    function Bs(e) {
      return e = Ne(e), o(this[e]) ? this[e]() : this;
    }
    function Vs(e, r) {
      if (typeof e == "object") {
        e = Ae(e);
        var a = Ve(e), _, M = a.length;
        for (_ = 0; _ < M; _++)
          this[a[_].unit](e[a[_].unit]);
      } else if (e = Ne(e), o(this[e]))
        return this[e](r);
      return this;
    }
    function Hs(e, r) {
      return (e % r + r) % r;
    }
    var Le;
    Array.prototype.indexOf ? Le = Array.prototype.indexOf : Le = function(e) {
      var r;
      for (r = 0; r < this.length; ++r)
        if (this[r] === e)
          return r;
      return -1;
    };
    function mi(e, r) {
      if (isNaN(e) || isNaN(r))
        return NaN;
      var a = Hs(r, 12);
      return e += (r - a) / 12, a === 1 ? Xr(e) ? 29 : 28 : 31 - a % 7 % 2;
    }
    q("M", ["MM", 2], "Mo", function() {
      return this.month() + 1;
    }), q("MMM", 0, 0, function(e) {
      return this.localeData().monthsShort(this, e);
    }), q("MMMM", 0, 0, function(e) {
      return this.localeData().months(this, e);
    }), te("M", ge, xt), te("MM", ge, fe), te("MMM", function(e, r) {
      return r.monthsShortRegex(e);
    }), te("MMMM", function(e, r) {
      return r.monthsRegex(e);
    }), ye(["M", "MM"], function(e, r) {
      r[ot] = de(e) - 1;
    }), ye(["MMM", "MMMM"], function(e, r, a, _) {
      var M = a._locale.monthsParse(e, _, a._strict);
      M != null ? r[ot] = M : y(a).invalidMonth = e;
    });
    var Ws = "January_February_March_April_May_June_July_August_September_October_November_December".split(
      "_"
    ), cn = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), fn = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, Ks = Vt, js = Vt;
    function qs(e, r) {
      return e ? g(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || fn).test(r) ? "format" : "standalone"][e.month()] : g(this._months) ? this._months : this._months.standalone;
    }
    function zs(e, r) {
      return e ? g(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[fn.test(r) ? "format" : "standalone"][e.month()] : g(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
    }
    function Xs(e, r, a) {
      var _, M, U, K = e.toLocaleLowerCase();
      if (!this._monthsParse)
        for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], _ = 0; _ < 12; ++_)
          U = s([2e3, _]), this._shortMonthsParse[_] = this.monthsShort(
            U,
            ""
          ).toLocaleLowerCase(), this._longMonthsParse[_] = this.months(U, "").toLocaleLowerCase();
      return a ? r === "MMM" ? (M = Le.call(this._shortMonthsParse, K), M !== -1 ? M : null) : (M = Le.call(this._longMonthsParse, K), M !== -1 ? M : null) : r === "MMM" ? (M = Le.call(this._shortMonthsParse, K), M !== -1 ? M : (M = Le.call(this._longMonthsParse, K), M !== -1 ? M : null)) : (M = Le.call(this._longMonthsParse, K), M !== -1 ? M : (M = Le.call(this._shortMonthsParse, K), M !== -1 ? M : null));
    }
    function $s(e, r, a) {
      var _, M, U;
      if (this._monthsParseExact)
        return Xs.call(this, e, r, a);
      for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), _ = 0; _ < 12; _++) {
        if (M = s([2e3, _]), a && !this._longMonthsParse[_] && (this._longMonthsParse[_] = new RegExp(
          "^" + this.months(M, "").replace(".", "") + "$",
          "i"
        ), this._shortMonthsParse[_] = new RegExp(
          "^" + this.monthsShort(M, "").replace(".", "") + "$",
          "i"
        )), !a && !this._monthsParse[_] && (U = "^" + this.months(M, "") + "|^" + this.monthsShort(M, ""), this._monthsParse[_] = new RegExp(U.replace(".", ""), "i")), a && r === "MMMM" && this._longMonthsParse[_].test(e))
          return _;
        if (a && r === "MMM" && this._shortMonthsParse[_].test(e))
          return _;
        if (!a && this._monthsParse[_].test(e))
          return _;
      }
    }
    function gn(e, r) {
      if (!e.isValid())
        return e;
      if (typeof r == "string") {
        if (/^\d+$/.test(r))
          r = de(r);
        else if (r = e.localeData().monthsParse(r), !S(r))
          return e;
      }
      var a = r, _ = e.date();
      return _ = _ < 29 ? _ : Math.min(_, mi(e.year(), a)), e._isUTC ? e._d.setUTCMonth(a, _) : e._d.setMonth(a, _), e;
    }
    function _n(e) {
      return e != null ? (gn(this, e), f.updateOffset(this, !0), this) : Kt(this, "Month");
    }
    function Qs() {
      return mi(this.year(), this.month());
    }
    function Zs(e) {
      return this._monthsParseExact ? (i(this, "_monthsRegex") || vn.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (i(this, "_monthsShortRegex") || (this._monthsShortRegex = Ks), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
    }
    function Js(e) {
      return this._monthsParseExact ? (i(this, "_monthsRegex") || vn.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (i(this, "_monthsRegex") || (this._monthsRegex = js), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
    }
    function vn() {
      function e(ae, ue) {
        return ue.length - ae.length;
      }
      var r = [], a = [], _ = [], M, U, K, ee;
      for (M = 0; M < 12; M++)
        U = s([2e3, M]), K = st(this.monthsShort(U, "")), ee = st(this.months(U, "")), r.push(K), a.push(ee), _.push(ee), _.push(K);
      r.sort(e), a.sort(e), _.sort(e), this._monthsRegex = new RegExp("^(" + _.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp(
        "^(" + a.join("|") + ")",
        "i"
      ), this._monthsShortStrictRegex = new RegExp(
        "^(" + r.join("|") + ")",
        "i"
      );
    }
    function eo(e, r, a, _, M, U, K) {
      var ee;
      return e < 100 && e >= 0 ? (ee = new Date(e + 400, r, a, _, M, U, K), isFinite(ee.getFullYear()) && ee.setFullYear(e)) : ee = new Date(e, r, a, _, M, U, K), ee;
    }
    function jt(e) {
      var r, a;
      return e < 100 && e >= 0 ? (a = Array.prototype.slice.call(arguments), a[0] = e + 400, r = new Date(Date.UTC.apply(null, a)), isFinite(r.getUTCFullYear()) && r.setUTCFullYear(e)) : r = new Date(Date.UTC.apply(null, arguments)), r;
    }
    function $r(e, r, a) {
      var _ = 7 + r - a, M = (7 + jt(e, 0, _).getUTCDay() - r) % 7;
      return -M + _ - 1;
    }
    function pn(e, r, a, _, M) {
      var U = (7 + a - _) % 7, K = $r(e, _, M), ee = 1 + 7 * (r - 1) + U + K, ae, ue;
      return ee <= 0 ? (ae = e - 1, ue = Wt(ae) + ee) : ee > Wt(e) ? (ae = e + 1, ue = ee - Wt(e)) : (ae = e, ue = ee), {
        year: ae,
        dayOfYear: ue
      };
    }
    function qt(e, r, a) {
      var _ = $r(e.year(), r, a), M = Math.floor((e.dayOfYear() - _ - 1) / 7) + 1, U, K;
      return M < 1 ? (K = e.year() - 1, U = M + ht(K, r, a)) : M > ht(e.year(), r, a) ? (U = M - ht(e.year(), r, a), K = e.year() + 1) : (K = e.year(), U = M), {
        week: U,
        year: K
      };
    }
    function ht(e, r, a) {
      var _ = $r(e, r, a), M = $r(e + 1, r, a);
      return (Wt(e) - _ + M) / 7;
    }
    q("w", ["ww", 2], "wo", "week"), q("W", ["WW", 2], "Wo", "isoWeek"), te("w", ge, xt), te("ww", ge, fe), te("W", ge, xt), te("WW", ge, fe), Ht(
      ["w", "ww", "W", "WW"],
      function(e, r, a, _) {
        r[_.substr(0, 1)] = de(e);
      }
    );
    function to(e) {
      return qt(e, this._week.dow, this._week.doy).week;
    }
    var ro = {
      dow: 0,
      // Sunday is the first day of the week.
      doy: 6
      // The week that contains Jan 6th is the first week of the year.
    };
    function io() {
      return this._week.dow;
    }
    function no() {
      return this._week.doy;
    }
    function ao(e) {
      var r = this.localeData().week(this);
      return e == null ? r : this.add((e - r) * 7, "d");
    }
    function so(e) {
      var r = qt(this, 1, 4).week;
      return e == null ? r : this.add((e - r) * 7, "d");
    }
    q("d", 0, "do", "day"), q("dd", 0, 0, function(e) {
      return this.localeData().weekdaysMin(this, e);
    }), q("ddd", 0, 0, function(e) {
      return this.localeData().weekdaysShort(this, e);
    }), q("dddd", 0, 0, function(e) {
      return this.localeData().weekdays(this, e);
    }), q("e", 0, 0, "weekday"), q("E", 0, 0, "isoWeekday"), te("d", ge), te("e", ge), te("E", ge), te("dd", function(e, r) {
      return r.weekdaysMinRegex(e);
    }), te("ddd", function(e, r) {
      return r.weekdaysShortRegex(e);
    }), te("dddd", function(e, r) {
      return r.weekdaysRegex(e);
    }), Ht(["dd", "ddd", "dddd"], function(e, r, a, _) {
      var M = a._locale.weekdaysParse(e, _, a._strict);
      M != null ? r.d = M : y(a).invalidWeekday = e;
    }), Ht(["d", "e", "E"], function(e, r, a, _) {
      r[_] = de(e);
    });
    function oo(e, r) {
      return typeof e != "string" ? e : isNaN(e) ? (e = r.weekdaysParse(e), typeof e == "number" ? e : null) : parseInt(e, 10);
    }
    function lo(e, r) {
      return typeof e == "string" ? r.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e;
    }
    function yi(e, r) {
      return e.slice(r, 7).concat(e.slice(0, r));
    }
    var ho = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), mn = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), uo = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), co = Vt, fo = Vt, go = Vt;
    function _o(e, r) {
      var a = g(this._weekdays) ? this._weekdays : this._weekdays[e && e !== !0 && this._weekdays.isFormat.test(r) ? "format" : "standalone"];
      return e === !0 ? yi(a, this._week.dow) : e ? a[e.day()] : a;
    }
    function vo(e) {
      return e === !0 ? yi(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
    }
    function po(e) {
      return e === !0 ? yi(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
    }
    function mo(e, r, a) {
      var _, M, U, K = e.toLocaleLowerCase();
      if (!this._weekdaysParse)
        for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], _ = 0; _ < 7; ++_)
          U = s([2e3, 1]).day(_), this._minWeekdaysParse[_] = this.weekdaysMin(
            U,
            ""
          ).toLocaleLowerCase(), this._shortWeekdaysParse[_] = this.weekdaysShort(
            U,
            ""
          ).toLocaleLowerCase(), this._weekdaysParse[_] = this.weekdays(U, "").toLocaleLowerCase();
      return a ? r === "dddd" ? (M = Le.call(this._weekdaysParse, K), M !== -1 ? M : null) : r === "ddd" ? (M = Le.call(this._shortWeekdaysParse, K), M !== -1 ? M : null) : (M = Le.call(this._minWeekdaysParse, K), M !== -1 ? M : null) : r === "dddd" ? (M = Le.call(this._weekdaysParse, K), M !== -1 || (M = Le.call(this._shortWeekdaysParse, K), M !== -1) ? M : (M = Le.call(this._minWeekdaysParse, K), M !== -1 ? M : null)) : r === "ddd" ? (M = Le.call(this._shortWeekdaysParse, K), M !== -1 || (M = Le.call(this._weekdaysParse, K), M !== -1) ? M : (M = Le.call(this._minWeekdaysParse, K), M !== -1 ? M : null)) : (M = Le.call(this._minWeekdaysParse, K), M !== -1 || (M = Le.call(this._weekdaysParse, K), M !== -1) ? M : (M = Le.call(this._shortWeekdaysParse, K), M !== -1 ? M : null));
    }
    function yo(e, r, a) {
      var _, M, U;
      if (this._weekdaysParseExact)
        return mo.call(this, e, r, a);
      for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), _ = 0; _ < 7; _++) {
        if (M = s([2e3, 1]).day(_), a && !this._fullWeekdaysParse[_] && (this._fullWeekdaysParse[_] = new RegExp(
          "^" + this.weekdays(M, "").replace(".", "\\.?") + "$",
          "i"
        ), this._shortWeekdaysParse[_] = new RegExp(
          "^" + this.weekdaysShort(M, "").replace(".", "\\.?") + "$",
          "i"
        ), this._minWeekdaysParse[_] = new RegExp(
          "^" + this.weekdaysMin(M, "").replace(".", "\\.?") + "$",
          "i"
        )), this._weekdaysParse[_] || (U = "^" + this.weekdays(M, "") + "|^" + this.weekdaysShort(M, "") + "|^" + this.weekdaysMin(M, ""), this._weekdaysParse[_] = new RegExp(U.replace(".", ""), "i")), a && r === "dddd" && this._fullWeekdaysParse[_].test(e))
          return _;
        if (a && r === "ddd" && this._shortWeekdaysParse[_].test(e))
          return _;
        if (a && r === "dd" && this._minWeekdaysParse[_].test(e))
          return _;
        if (!a && this._weekdaysParse[_].test(e))
          return _;
      }
    }
    function So(e) {
      if (!this.isValid())
        return e != null ? this : NaN;
      var r = Kt(this, "Day");
      return e != null ? (e = oo(e, this.localeData()), this.add(e - r, "d")) : r;
    }
    function bo(e) {
      if (!this.isValid())
        return e != null ? this : NaN;
      var r = (this.day() + 7 - this.localeData()._week.dow) % 7;
      return e == null ? r : this.add(e - r, "d");
    }
    function To(e) {
      if (!this.isValid())
        return e != null ? this : NaN;
      if (e != null) {
        var r = lo(e, this.localeData());
        return this.day(this.day() % 7 ? r : r - 7);
      } else
        return this.day() || 7;
    }
    function wo(e) {
      return this._weekdaysParseExact ? (i(this, "_weekdaysRegex") || Si.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (i(this, "_weekdaysRegex") || (this._weekdaysRegex = co), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
    }
    function Co(e) {
      return this._weekdaysParseExact ? (i(this, "_weekdaysRegex") || Si.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (i(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = fo), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
    }
    function Eo(e) {
      return this._weekdaysParseExact ? (i(this, "_weekdaysRegex") || Si.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (i(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = go), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
    }
    function Si() {
      function e(He, gt) {
        return gt.length - He.length;
      }
      var r = [], a = [], _ = [], M = [], U, K, ee, ae, ue;
      for (U = 0; U < 7; U++)
        K = s([2e3, 1]).day(U), ee = st(this.weekdaysMin(K, "")), ae = st(this.weekdaysShort(K, "")), ue = st(this.weekdays(K, "")), r.push(ee), a.push(ae), _.push(ue), M.push(ee), M.push(ae), M.push(ue);
      r.sort(e), a.sort(e), _.sort(e), M.sort(e), this._weekdaysRegex = new RegExp("^(" + M.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp(
        "^(" + _.join("|") + ")",
        "i"
      ), this._weekdaysShortStrictRegex = new RegExp(
        "^(" + a.join("|") + ")",
        "i"
      ), this._weekdaysMinStrictRegex = new RegExp(
        "^(" + r.join("|") + ")",
        "i"
      );
    }
    function bi() {
      return this.hours() % 12 || 12;
    }
    function Ao() {
      return this.hours() || 24;
    }
    q("H", ["HH", 2], 0, "hour"), q("h", ["hh", 2], 0, bi), q("k", ["kk", 2], 0, Ao), q("hmm", 0, 0, function() {
      return "" + bi.apply(this) + $(this.minutes(), 2);
    }), q("hmmss", 0, 0, function() {
      return "" + bi.apply(this) + $(this.minutes(), 2) + $(this.seconds(), 2);
    }), q("Hmm", 0, 0, function() {
      return "" + this.hours() + $(this.minutes(), 2);
    }), q("Hmmss", 0, 0, function() {
      return "" + this.hours() + $(this.minutes(), 2) + $(this.seconds(), 2);
    });
    function yn(e, r) {
      q(e, 0, 0, function() {
        return this.localeData().meridiem(
          this.hours(),
          this.minutes(),
          r
        );
      });
    }
    yn("a", !0), yn("A", !1);
    function Sn(e, r) {
      return r._meridiemParse;
    }
    te("a", Sn), te("A", Sn), te("H", ge, vi), te("h", ge, xt), te("k", ge, xt), te("HH", ge, fe), te("hh", ge, fe), te("kk", ge, fe), te("hmm", ze), te("hmmss", mt), te("Hmm", ze), te("Hmmss", mt), ye(["H", "HH"], Oe), ye(["k", "kk"], function(e, r, a) {
      var _ = de(e);
      r[Oe] = _ === 24 ? 0 : _;
    }), ye(["a", "A"], function(e, r, a) {
      a._isPm = a._locale.isPM(e), a._meridiem = e;
    }), ye(["h", "hh"], function(e, r, a) {
      r[Oe] = de(e), y(a).bigHour = !0;
    }), ye("hmm", function(e, r, a) {
      var _ = e.length - 2;
      r[Oe] = de(e.substr(0, _)), r[Qe] = de(e.substr(_)), y(a).bigHour = !0;
    }), ye("hmmss", function(e, r, a) {
      var _ = e.length - 4, M = e.length - 2;
      r[Oe] = de(e.substr(0, _)), r[Qe] = de(e.substr(_, 2)), r[lt] = de(e.substr(M)), y(a).bigHour = !0;
    }), ye("Hmm", function(e, r, a) {
      var _ = e.length - 2;
      r[Oe] = de(e.substr(0, _)), r[Qe] = de(e.substr(_));
    }), ye("Hmmss", function(e, r, a) {
      var _ = e.length - 4, M = e.length - 2;
      r[Oe] = de(e.substr(0, _)), r[Qe] = de(e.substr(_, 2)), r[lt] = de(e.substr(M));
    });
    function Ro(e) {
      return (e + "").toLowerCase().charAt(0) === "p";
    }
    var Lo = /[ap]\.?m?\.?/i, Mo = Nt("Hours", !0);
    function Po(e, r, a) {
      return e > 11 ? a ? "pm" : "PM" : a ? "am" : "AM";
    }
    var bn = {
      calendar: H,
      longDateFormat: re,
      invalidDate: ne,
      ordinal: me,
      dayOfMonthOrdinalParse: se,
      relativeTime: ve,
      months: Ws,
      monthsShort: cn,
      week: ro,
      weekdays: ho,
      weekdaysMin: uo,
      weekdaysShort: mn,
      meridiemParse: Lo
    }, Ce = {}, zt = {}, Xt;
    function xo(e, r) {
      var a, _ = Math.min(e.length, r.length);
      for (a = 0; a < _; a += 1)
        if (e[a] !== r[a])
          return a;
      return _;
    }
    function Tn(e) {
      return e && e.toLowerCase().replace("_", "-");
    }
    function No(e) {
      for (var r = 0, a, _, M, U; r < e.length; ) {
        for (U = Tn(e[r]).split("-"), a = U.length, _ = Tn(e[r + 1]), _ = _ ? _.split("-") : null; a > 0; ) {
          if (M = Qr(U.slice(0, a).join("-")), M)
            return M;
          if (_ && _.length >= a && xo(U, _) >= a - 1)
            break;
          a--;
        }
        r++;
      }
      return Xt;
    }
    function Oo(e) {
      return !!(e && e.match("^[^/\\\\]*$"));
    }
    function Qr(e) {
      var r = null, a;
      if (Ce[e] === void 0 && t && t.exports && Oo(e))
        try {
          r = Xt._abbr, a = Uu, a("./locale/" + e), yt(r);
        } catch {
          Ce[e] = null;
        }
      return Ce[e];
    }
    function yt(e, r) {
      var a;
      return e && (v(r) ? a = dt(e) : a = Ti(e, r), a ? Xt = a : typeof console < "u" && console.warn && console.warn(
        "Locale " + e + " not found. Did you forget to load it?"
      )), Xt._abbr;
    }
    function Ti(e, r) {
      if (r !== null) {
        var a, _ = bn;
        if (r.abbr = e, Ce[e] != null)
          F(
            "defineLocaleOverride",
            "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
          ), _ = Ce[e]._config;
        else if (r.parentLocale != null)
          if (Ce[r.parentLocale] != null)
            _ = Ce[r.parentLocale]._config;
          else if (a = Qr(r.parentLocale), a != null)
            _ = a._config;
          else
            return zt[r.parentLocale] || (zt[r.parentLocale] = []), zt[r.parentLocale].push({
              name: e,
              config: r
            }), null;
        return Ce[e] = new O(L(_, r)), zt[e] && zt[e].forEach(function(M) {
          Ti(M.name, M.config);
        }), yt(e), Ce[e];
      } else
        return delete Ce[e], null;
    }
    function Do(e, r) {
      if (r != null) {
        var a, _, M = bn;
        Ce[e] != null && Ce[e].parentLocale != null ? Ce[e].set(L(Ce[e]._config, r)) : (_ = Qr(e), _ != null && (M = _._config), r = L(M, r), _ == null && (r.abbr = e), a = new O(r), a.parentLocale = Ce[e], Ce[e] = a), yt(e);
      } else
        Ce[e] != null && (Ce[e].parentLocale != null ? (Ce[e] = Ce[e].parentLocale, e === yt() && yt(e)) : Ce[e] != null && delete Ce[e]);
      return Ce[e];
    }
    function dt(e) {
      var r;
      if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e)
        return Xt;
      if (!g(e)) {
        if (r = Qr(e), r)
          return r;
        e = [e];
      }
      return No(e);
    }
    function ko() {
      return I(Ce);
    }
    function wi(e) {
      var r, a = e._a;
      return a && y(e).overflow === -2 && (r = a[ot] < 0 || a[ot] > 11 ? ot : a[rt] < 1 || a[rt] > mi(a[Ye], a[ot]) ? rt : a[Oe] < 0 || a[Oe] > 24 || a[Oe] === 24 && (a[Qe] !== 0 || a[lt] !== 0 || a[wt] !== 0) ? Oe : a[Qe] < 0 || a[Qe] > 59 ? Qe : a[lt] < 0 || a[lt] > 59 ? lt : a[wt] < 0 || a[wt] > 999 ? wt : -1, y(e)._overflowDayOfYear && (r < Ye || r > rt) && (r = rt), y(e)._overflowWeeks && r === -1 && (r = Gs), y(e)._overflowWeekday && r === -1 && (r = Us), y(e).overflow = r), e;
    }
    var Io = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Fo = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Go = /Z|[+-]\d\d(?::?\d\d)?/, Zr = [
      ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
      ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
      ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
      ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
      ["YYYY-DDD", /\d{4}-\d{3}/],
      ["YYYY-MM", /\d{4}-\d\d/, !1],
      ["YYYYYYMMDD", /[+-]\d{10}/],
      ["YYYYMMDD", /\d{8}/],
      ["GGGG[W]WWE", /\d{4}W\d{3}/],
      ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
      ["YYYYDDD", /\d{7}/],
      ["YYYYMM", /\d{6}/, !1],
      ["YYYY", /\d{4}/, !1]
    ], Ci = [
      ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
      ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
      ["HH:mm:ss", /\d\d:\d\d:\d\d/],
      ["HH:mm", /\d\d:\d\d/],
      ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
      ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
      ["HHmmss", /\d\d\d\d\d\d/],
      ["HHmm", /\d\d\d\d/],
      ["HH", /\d\d/]
    ], Uo = /^\/?Date\((-?\d+)/i, Yo = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, Bo = {
      UT: 0,
      GMT: 0,
      EDT: -4 * 60,
      EST: -5 * 60,
      CDT: -5 * 60,
      CST: -6 * 60,
      MDT: -6 * 60,
      MST: -7 * 60,
      PDT: -7 * 60,
      PST: -8 * 60
    };
    function wn(e) {
      var r, a, _ = e._i, M = Io.exec(_) || Fo.exec(_), U, K, ee, ae, ue = Zr.length, He = Ci.length;
      if (M) {
        for (y(e).iso = !0, r = 0, a = ue; r < a; r++)
          if (Zr[r][1].exec(M[1])) {
            K = Zr[r][0], U = Zr[r][2] !== !1;
            break;
          }
        if (K == null) {
          e._isValid = !1;
          return;
        }
        if (M[3]) {
          for (r = 0, a = He; r < a; r++)
            if (Ci[r][1].exec(M[3])) {
              ee = (M[2] || " ") + Ci[r][0];
              break;
            }
          if (ee == null) {
            e._isValid = !1;
            return;
          }
        }
        if (!U && ee != null) {
          e._isValid = !1;
          return;
        }
        if (M[4])
          if (Go.exec(M[4]))
            ae = "Z";
          else {
            e._isValid = !1;
            return;
          }
        e._f = K + (ee || "") + (ae || ""), Ai(e);
      } else
        e._isValid = !1;
    }
    function Vo(e, r, a, _, M, U) {
      var K = [
        Ho(e),
        cn.indexOf(r),
        parseInt(a, 10),
        parseInt(_, 10),
        parseInt(M, 10)
      ];
      return U && K.push(parseInt(U, 10)), K;
    }
    function Ho(e) {
      var r = parseInt(e, 10);
      return r <= 49 ? 2e3 + r : r <= 999 ? 1900 + r : r;
    }
    function Wo(e) {
      return e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
    }
    function Ko(e, r, a) {
      if (e) {
        var _ = mn.indexOf(e), M = new Date(
          r[0],
          r[1],
          r[2]
        ).getDay();
        if (_ !== M)
          return y(a).weekdayMismatch = !0, a._isValid = !1, !1;
      }
      return !0;
    }
    function jo(e, r, a) {
      if (e)
        return Bo[e];
      if (r)
        return 0;
      var _ = parseInt(a, 10), M = _ % 100, U = (_ - M) / 100;
      return U * 60 + M;
    }
    function Cn(e) {
      var r = Yo.exec(Wo(e._i)), a;
      if (r) {
        if (a = Vo(
          r[4],
          r[3],
          r[2],
          r[5],
          r[6],
          r[7]
        ), !Ko(r[1], a, e))
          return;
        e._a = a, e._tzm = jo(r[8], r[9], r[10]), e._d = jt.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), y(e).rfc2822 = !0;
      } else
        e._isValid = !1;
    }
    function qo(e) {
      var r = Uo.exec(e._i);
      if (r !== null) {
        e._d = /* @__PURE__ */ new Date(+r[1]);
        return;
      }
      if (wn(e), e._isValid === !1)
        delete e._isValid;
      else
        return;
      if (Cn(e), e._isValid === !1)
        delete e._isValid;
      else
        return;
      e._strict ? e._isValid = !1 : f.createFromInputFallback(e);
    }
    f.createFromInputFallback = E(
      "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
      function(e) {
        e._d = /* @__PURE__ */ new Date(e._i + (e._useUTC ? " UTC" : ""));
      }
    );
    function Ot(e, r, a) {
      return e ?? r ?? a;
    }
    function zo(e) {
      var r = new Date(f.now());
      return e._useUTC ? [
        r.getUTCFullYear(),
        r.getUTCMonth(),
        r.getUTCDate()
      ] : [r.getFullYear(), r.getMonth(), r.getDate()];
    }
    function Ei(e) {
      var r, a, _ = [], M, U, K;
      if (!e._d) {
        for (M = zo(e), e._w && e._a[rt] == null && e._a[ot] == null && Xo(e), e._dayOfYear != null && (K = Ot(e._a[Ye], M[Ye]), (e._dayOfYear > Wt(K) || e._dayOfYear === 0) && (y(e)._overflowDayOfYear = !0), a = jt(K, 0, e._dayOfYear), e._a[ot] = a.getUTCMonth(), e._a[rt] = a.getUTCDate()), r = 0; r < 3 && e._a[r] == null; ++r)
          e._a[r] = _[r] = M[r];
        for (; r < 7; r++)
          e._a[r] = _[r] = e._a[r] == null ? r === 2 ? 1 : 0 : e._a[r];
        e._a[Oe] === 24 && e._a[Qe] === 0 && e._a[lt] === 0 && e._a[wt] === 0 && (e._nextDay = !0, e._a[Oe] = 0), e._d = (e._useUTC ? jt : eo).apply(
          null,
          _
        ), U = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[Oe] = 24), e._w && typeof e._w.d < "u" && e._w.d !== U && (y(e).weekdayMismatch = !0);
      }
    }
    function Xo(e) {
      var r, a, _, M, U, K, ee, ae, ue;
      r = e._w, r.GG != null || r.W != null || r.E != null ? (U = 1, K = 4, a = Ot(
        r.GG,
        e._a[Ye],
        qt(Te(), 1, 4).year
      ), _ = Ot(r.W, 1), M = Ot(r.E, 1), (M < 1 || M > 7) && (ae = !0)) : (U = e._locale._week.dow, K = e._locale._week.doy, ue = qt(Te(), U, K), a = Ot(r.gg, e._a[Ye], ue.year), _ = Ot(r.w, ue.week), r.d != null ? (M = r.d, (M < 0 || M > 6) && (ae = !0)) : r.e != null ? (M = r.e + U, (r.e < 0 || r.e > 6) && (ae = !0)) : M = U), _ < 1 || _ > ht(a, U, K) ? y(e)._overflowWeeks = !0 : ae != null ? y(e)._overflowWeekday = !0 : (ee = pn(a, _, M, U, K), e._a[Ye] = ee.year, e._dayOfYear = ee.dayOfYear);
    }
    f.ISO_8601 = function() {
    }, f.RFC_2822 = function() {
    };
    function Ai(e) {
      if (e._f === f.ISO_8601) {
        wn(e);
        return;
      }
      if (e._f === f.RFC_2822) {
        Cn(e);
        return;
      }
      e._a = [], y(e).empty = !0;
      var r = "" + e._i, a, _, M, U, K, ee = r.length, ae = 0, ue, He;
      for (M = X(e._f, e._locale).match(z) || [], He = M.length, a = 0; a < He; a++)
        U = M[a], _ = (r.match(ks(U, e)) || [])[0], _ && (K = r.substr(0, r.indexOf(_)), K.length > 0 && y(e).unusedInput.push(K), r = r.slice(
          r.indexOf(_) + _.length
        ), ae += _.length), j[U] ? (_ ? y(e).empty = !1 : y(e).unusedTokens.push(U), Fs(U, _, e)) : e._strict && !_ && y(e).unusedTokens.push(U);
      y(e).charsLeftOver = ee - ae, r.length > 0 && y(e).unusedInput.push(r), e._a[Oe] <= 12 && y(e).bigHour === !0 && e._a[Oe] > 0 && (y(e).bigHour = void 0), y(e).parsedDateParts = e._a.slice(0), y(e).meridiem = e._meridiem, e._a[Oe] = $o(
        e._locale,
        e._a[Oe],
        e._meridiem
      ), ue = y(e).era, ue !== null && (e._a[Ye] = e._locale.erasConvertYear(ue, e._a[Ye])), Ei(e), wi(e);
    }
    function $o(e, r, a) {
      var _;
      return a == null ? r : e.meridiemHour != null ? e.meridiemHour(r, a) : (e.isPM != null && (_ = e.isPM(a), _ && r < 12 && (r += 12), !_ && r === 12 && (r = 0)), r);
    }
    function Qo(e) {
      var r, a, _, M, U, K, ee = !1, ae = e._f.length;
      if (ae === 0) {
        y(e).invalidFormat = !0, e._d = /* @__PURE__ */ new Date(NaN);
        return;
      }
      for (M = 0; M < ae; M++)
        U = 0, K = !1, r = D({}, e), e._useUTC != null && (r._useUTC = e._useUTC), r._f = e._f[M], Ai(r), h(r) && (K = !0), U += y(r).charsLeftOver, U += y(r).unusedTokens.length * 10, y(r).score = U, ee ? U < _ && (_ = U, a = r) : (_ == null || U < _ || K) && (_ = U, a = r, K && (ee = !0));
      u(e, a || r);
    }
    function Zo(e) {
      if (!e._d) {
        var r = Ae(e._i), a = r.day === void 0 ? r.date : r.day;
        e._a = b(
          [r.year, r.month, a, r.hour, r.minute, r.second, r.millisecond],
          function(_) {
            return _ && parseInt(_, 10);
          }
        ), Ei(e);
      }
    }
    function Jo(e) {
      var r = new k(wi(En(e)));
      return r._nextDay && (r.add(1, "d"), r._nextDay = void 0), r;
    }
    function En(e) {
      var r = e._i, a = e._f;
      return e._locale = e._locale || dt(e._l), r === null || a === void 0 && r === "" ? n({ nullInput: !0 }) : (typeof r == "string" && (e._i = r = e._locale.preparse(r)), x(r) ? new k(wi(r)) : (p(r) ? e._d = r : g(a) ? Qo(e) : a ? Ai(e) : el(e), h(e) || (e._d = null), e));
    }
    function el(e) {
      var r = e._i;
      v(r) ? e._d = new Date(f.now()) : p(r) ? e._d = new Date(r.valueOf()) : typeof r == "string" ? qo(e) : g(r) ? (e._a = b(r.slice(0), function(a) {
        return parseInt(a, 10);
      }), Ei(e)) : d(r) ? Zo(e) : S(r) ? e._d = new Date(r) : f.createFromInputFallback(e);
    }
    function An(e, r, a, _, M) {
      var U = {};
      return (r === !0 || r === !1) && (_ = r, r = void 0), (a === !0 || a === !1) && (_ = a, a = void 0), (d(e) && c(e) || g(e) && e.length === 0) && (e = void 0), U._isAMomentObject = !0, U._useUTC = U._isUTC = M, U._l = a, U._i = e, U._f = r, U._strict = _, Jo(U);
    }
    function Te(e, r, a, _) {
      return An(e, r, a, _, !1);
    }
    var tl = E(
      "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
      function() {
        var e = Te.apply(null, arguments);
        return this.isValid() && e.isValid() ? e < this ? this : e : n();
      }
    ), rl = E(
      "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
      function() {
        var e = Te.apply(null, arguments);
        return this.isValid() && e.isValid() ? e > this ? this : e : n();
      }
    );
    function Rn(e, r) {
      var a, _;
      if (r.length === 1 && g(r[0]) && (r = r[0]), !r.length)
        return Te();
      for (a = r[0], _ = 1; _ < r.length; ++_)
        (!r[_].isValid() || r[_][e](a)) && (a = r[_]);
      return a;
    }
    function il() {
      var e = [].slice.call(arguments, 0);
      return Rn("isBefore", e);
    }
    function nl() {
      var e = [].slice.call(arguments, 0);
      return Rn("isAfter", e);
    }
    var al = function() {
      return Date.now ? Date.now() : +/* @__PURE__ */ new Date();
    }, $t = [
      "year",
      "quarter",
      "month",
      "week",
      "day",
      "hour",
      "minute",
      "second",
      "millisecond"
    ];
    function sl(e) {
      var r, a = !1, _, M = $t.length;
      for (r in e)
        if (i(e, r) && !(Le.call($t, r) !== -1 && (e[r] == null || !isNaN(e[r]))))
          return !1;
      for (_ = 0; _ < M; ++_)
        if (e[$t[_]]) {
          if (a)
            return !1;
          parseFloat(e[$t[_]]) !== de(e[$t[_]]) && (a = !0);
        }
      return !0;
    }
    function ol() {
      return this._isValid;
    }
    function ll() {
      return Ze(NaN);
    }
    function Jr(e) {
      var r = Ae(e), a = r.year || 0, _ = r.quarter || 0, M = r.month || 0, U = r.week || r.isoWeek || 0, K = r.day || 0, ee = r.hour || 0, ae = r.minute || 0, ue = r.second || 0, He = r.millisecond || 0;
      this._isValid = sl(r), this._milliseconds = +He + ue * 1e3 + // 1000
      ae * 6e4 + // 1000 * 60
      ee * 1e3 * 60 * 60, this._days = +K + U * 7, this._months = +M + _ * 3 + a * 12, this._data = {}, this._locale = dt(), this._bubble();
    }
    function ei(e) {
      return e instanceof Jr;
    }
    function Ri(e) {
      return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e);
    }
    function hl(e, r, a) {
      var _ = Math.min(e.length, r.length), M = Math.abs(e.length - r.length), U = 0, K;
      for (K = 0; K < _; K++)
        de(e[K]) !== de(r[K]) && U++;
      return U + M;
    }
    function Ln(e, r) {
      q(e, 0, 0, function() {
        var a = this.utcOffset(), _ = "+";
        return a < 0 && (a = -a, _ = "-"), _ + $(~~(a / 60), 2) + r + $(~~a % 60, 2);
      });
    }
    Ln("Z", ":"), Ln("ZZ", ""), te("Z", Tt), te("ZZ", Tt), ye(["Z", "ZZ"], function(e, r, a) {
      a._useUTC = !0, a._tzm = Li(Tt, e);
    });
    var dl = /([\+\-]|\d\d)/gi;
    function Li(e, r) {
      var a = (r || "").match(e), _, M, U;
      return a === null ? null : (_ = a[a.length - 1] || [], M = (_ + "").match(dl) || ["-", 0, 0], U = +(M[1] * 60) + de(M[2]), U === 0 ? 0 : M[0] === "+" ? U : -U);
    }
    function Mi(e, r) {
      var a, _;
      return r._isUTC ? (a = r.clone(), _ = (x(e) || p(e) ? e.valueOf() : Te(e).valueOf()) - a.valueOf(), a._d.setTime(a._d.valueOf() + _), f.updateOffset(a, !1), a) : Te(e).local();
    }
    function Pi(e) {
      return -Math.round(e._d.getTimezoneOffset());
    }
    f.updateOffset = function() {
    };
    function ul(e, r, a) {
      var _ = this._offset || 0, M;
      if (!this.isValid())
        return e != null ? this : NaN;
      if (e != null) {
        if (typeof e == "string") {
          if (e = Li(Tt, e), e === null)
            return this;
        } else Math.abs(e) < 16 && !a && (e = e * 60);
        return !this._isUTC && r && (M = Pi(this)), this._offset = e, this._isUTC = !0, M != null && this.add(M, "m"), _ !== e && (!r || this._changeInProgress ? Nn(
          this,
          Ze(e - _, "m"),
          1,
          !1
        ) : this._changeInProgress || (this._changeInProgress = !0, f.updateOffset(this, !0), this._changeInProgress = null)), this;
      } else
        return this._isUTC ? _ : Pi(this);
    }
    function cl(e, r) {
      return e != null ? (typeof e != "string" && (e = -e), this.utcOffset(e, r), this) : -this.utcOffset();
    }
    function fl(e) {
      return this.utcOffset(0, e);
    }
    function gl(e) {
      return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(Pi(this), "m")), this;
    }
    function _l() {
      if (this._tzm != null)
        this.utcOffset(this._tzm, !1, !0);
      else if (typeof this._i == "string") {
        var e = Li(Pt, this._i);
        e != null ? this.utcOffset(e) : this.utcOffset(0, !0);
      }
      return this;
    }
    function vl(e) {
      return this.isValid() ? (e = e ? Te(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0) : !1;
    }
    function pl() {
      return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
    }
    function ml() {
      if (!v(this._isDSTShifted))
        return this._isDSTShifted;
      var e = {}, r;
      return D(e, this), e = En(e), e._a ? (r = e._isUTC ? s(e._a) : Te(e._a), this._isDSTShifted = this.isValid() && hl(e._a, r.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted;
    }
    function yl() {
      return this.isValid() ? !this._isUTC : !1;
    }
    function Sl() {
      return this.isValid() ? this._isUTC : !1;
    }
    function Mn() {
      return this.isValid() ? this._isUTC && this._offset === 0 : !1;
    }
    var bl = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, Tl = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
    function Ze(e, r) {
      var a = e, _ = null, M, U, K;
      return ei(e) ? a = {
        ms: e._milliseconds,
        d: e._days,
        M: e._months
      } : S(e) || !isNaN(+e) ? (a = {}, r ? a[r] = +e : a.milliseconds = +e) : (_ = bl.exec(e)) ? (M = _[1] === "-" ? -1 : 1, a = {
        y: 0,
        d: de(_[rt]) * M,
        h: de(_[Oe]) * M,
        m: de(_[Qe]) * M,
        s: de(_[lt]) * M,
        ms: de(Ri(_[wt] * 1e3)) * M
        // the millisecond decimal point is included in the match
      }) : (_ = Tl.exec(e)) ? (M = _[1] === "-" ? -1 : 1, a = {
        y: Ct(_[2], M),
        M: Ct(_[3], M),
        w: Ct(_[4], M),
        d: Ct(_[5], M),
        h: Ct(_[6], M),
        m: Ct(_[7], M),
        s: Ct(_[8], M)
      }) : a == null ? a = {} : typeof a == "object" && ("from" in a || "to" in a) && (K = wl(
        Te(a.from),
        Te(a.to)
      ), a = {}, a.ms = K.milliseconds, a.M = K.months), U = new Jr(a), ei(e) && i(e, "_locale") && (U._locale = e._locale), ei(e) && i(e, "_isValid") && (U._isValid = e._isValid), U;
    }
    Ze.fn = Jr.prototype, Ze.invalid = ll;
    function Ct(e, r) {
      var a = e && parseFloat(e.replace(",", "."));
      return (isNaN(a) ? 0 : a) * r;
    }
    function Pn(e, r) {
      var a = {};
      return a.months = r.month() - e.month() + (r.year() - e.year()) * 12, e.clone().add(a.months, "M").isAfter(r) && --a.months, a.milliseconds = +r - +e.clone().add(a.months, "M"), a;
    }
    function wl(e, r) {
      var a;
      return e.isValid() && r.isValid() ? (r = Mi(r, e), e.isBefore(r) ? a = Pn(e, r) : (a = Pn(r, e), a.milliseconds = -a.milliseconds, a.months = -a.months), a) : { milliseconds: 0, months: 0 };
    }
    function xn(e, r) {
      return function(a, _) {
        var M, U;
        return _ !== null && !isNaN(+_) && (F(
          r,
          "moment()." + r + "(period, number) is deprecated. Please use moment()." + r + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
        ), U = a, a = _, _ = U), M = Ze(a, _), Nn(this, M, e), this;
      };
    }
    function Nn(e, r, a, _) {
      var M = r._milliseconds, U = Ri(r._days), K = Ri(r._months);
      e.isValid() && (_ = _ ?? !0, K && gn(e, Kt(e, "Month") + K * a), U && un(e, "Date", Kt(e, "Date") + U * a), M && e._d.setTime(e._d.valueOf() + M * a), _ && f.updateOffset(e, U || K));
    }
    var Cl = xn(1, "add"), El = xn(-1, "subtract");
    function On(e) {
      return typeof e == "string" || e instanceof String;
    }
    function Al(e) {
      return x(e) || p(e) || On(e) || S(e) || Ll(e) || Rl(e) || e === null || e === void 0;
    }
    function Rl(e) {
      var r = d(e) && !c(e), a = !1, _ = [
        "years",
        "year",
        "y",
        "months",
        "month",
        "M",
        "days",
        "day",
        "d",
        "dates",
        "date",
        "D",
        "hours",
        "hour",
        "h",
        "minutes",
        "minute",
        "m",
        "seconds",
        "second",
        "s",
        "milliseconds",
        "millisecond",
        "ms"
      ], M, U, K = _.length;
      for (M = 0; M < K; M += 1)
        U = _[M], a = a || i(e, U);
      return r && a;
    }
    function Ll(e) {
      var r = g(e), a = !1;
      return r && (a = e.filter(function(_) {
        return !S(_) && On(e);
      }).length === 0), r && a;
    }
    function Ml(e) {
      var r = d(e) && !c(e), a = !1, _ = [
        "sameDay",
        "nextDay",
        "lastDay",
        "nextWeek",
        "lastWeek",
        "sameElse"
      ], M, U;
      for (M = 0; M < _.length; M += 1)
        U = _[M], a = a || i(e, U);
      return r && a;
    }
    function Pl(e, r) {
      var a = e.diff(r, "days", !0);
      return a < -6 ? "sameElse" : a < -1 ? "lastWeek" : a < 0 ? "lastDay" : a < 1 ? "sameDay" : a < 2 ? "nextDay" : a < 7 ? "nextWeek" : "sameElse";
    }
    function xl(e, r) {
      arguments.length === 1 && (arguments[0] ? Al(arguments[0]) ? (e = arguments[0], r = void 0) : Ml(arguments[0]) && (r = arguments[0], e = void 0) : (e = void 0, r = void 0));
      var a = e || Te(), _ = Mi(a, this).startOf("day"), M = f.calendarFormat(this, _) || "sameElse", U = r && (o(r[M]) ? r[M].call(this, a) : r[M]);
      return this.format(
        U || this.localeData().calendar(M, this, Te(a))
      );
    }
    function Nl() {
      return new k(this);
    }
    function Ol(e, r) {
      var a = x(e) ? e : Te(e);
      return this.isValid() && a.isValid() ? (r = Ne(r) || "millisecond", r === "millisecond" ? this.valueOf() > a.valueOf() : a.valueOf() < this.clone().startOf(r).valueOf()) : !1;
    }
    function Dl(e, r) {
      var a = x(e) ? e : Te(e);
      return this.isValid() && a.isValid() ? (r = Ne(r) || "millisecond", r === "millisecond" ? this.valueOf() < a.valueOf() : this.clone().endOf(r).valueOf() < a.valueOf()) : !1;
    }
    function kl(e, r, a, _) {
      var M = x(e) ? e : Te(e), U = x(r) ? r : Te(r);
      return this.isValid() && M.isValid() && U.isValid() ? (_ = _ || "()", (_[0] === "(" ? this.isAfter(M, a) : !this.isBefore(M, a)) && (_[1] === ")" ? this.isBefore(U, a) : !this.isAfter(U, a))) : !1;
    }
    function Il(e, r) {
      var a = x(e) ? e : Te(e), _;
      return this.isValid() && a.isValid() ? (r = Ne(r) || "millisecond", r === "millisecond" ? this.valueOf() === a.valueOf() : (_ = a.valueOf(), this.clone().startOf(r).valueOf() <= _ && _ <= this.clone().endOf(r).valueOf())) : !1;
    }
    function Fl(e, r) {
      return this.isSame(e, r) || this.isAfter(e, r);
    }
    function Gl(e, r) {
      return this.isSame(e, r) || this.isBefore(e, r);
    }
    function Ul(e, r, a) {
      var _, M, U;
      if (!this.isValid())
        return NaN;
      if (_ = Mi(e, this), !_.isValid())
        return NaN;
      switch (M = (_.utcOffset() - this.utcOffset()) * 6e4, r = Ne(r), r) {
        case "year":
          U = ti(this, _) / 12;
          break;
        case "month":
          U = ti(this, _);
          break;
        case "quarter":
          U = ti(this, _) / 3;
          break;
        case "second":
          U = (this - _) / 1e3;
          break;
        case "minute":
          U = (this - _) / 6e4;
          break;
        case "hour":
          U = (this - _) / 36e5;
          break;
        case "day":
          U = (this - _ - M) / 864e5;
          break;
        case "week":
          U = (this - _ - M) / 6048e5;
          break;
        default:
          U = this - _;
      }
      return a ? U : Xe(U);
    }
    function ti(e, r) {
      if (e.date() < r.date())
        return -ti(r, e);
      var a = (r.year() - e.year()) * 12 + (r.month() - e.month()), _ = e.clone().add(a, "months"), M, U;
      return r - _ < 0 ? (M = e.clone().add(a - 1, "months"), U = (r - _) / (_ - M)) : (M = e.clone().add(a + 1, "months"), U = (r - _) / (M - _)), -(a + U) || 0;
    }
    f.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", f.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
    function Yl() {
      return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
    }
    function Bl(e) {
      if (!this.isValid())
        return null;
      var r = e !== !0, a = r ? this.clone().utc() : this;
      return a.year() < 0 || a.year() > 9999 ? V(
        a,
        r ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
      ) : o(Date.prototype.toISOString) ? r ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", V(a, "Z")) : V(
        a,
        r ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
      );
    }
    function Vl() {
      if (!this.isValid())
        return "moment.invalid(/* " + this._i + " */)";
      var e = "moment", r = "", a, _, M, U;
      return this.isLocal() || (e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", r = "Z"), a = "[" + e + '("]', _ = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", M = "-MM-DD[T]HH:mm:ss.SSS", U = r + '[")]', this.format(a + _ + M + U);
    }
    function Hl(e) {
      e || (e = this.isUtc() ? f.defaultFormatUtc : f.defaultFormat);
      var r = V(this, e);
      return this.localeData().postformat(r);
    }
    function Wl(e, r) {
      return this.isValid() && (x(e) && e.isValid() || Te(e).isValid()) ? Ze({ to: this, from: e }).locale(this.locale()).humanize(!r) : this.localeData().invalidDate();
    }
    function Kl(e) {
      return this.from(Te(), e);
    }
    function jl(e, r) {
      return this.isValid() && (x(e) && e.isValid() || Te(e).isValid()) ? Ze({ from: this, to: e }).locale(this.locale()).humanize(!r) : this.localeData().invalidDate();
    }
    function ql(e) {
      return this.to(Te(), e);
    }
    function Dn(e) {
      var r;
      return e === void 0 ? this._locale._abbr : (r = dt(e), r != null && (this._locale = r), this);
    }
    var kn = E(
      "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
      function(e) {
        return e === void 0 ? this.localeData() : this.locale(e);
      }
    );
    function In() {
      return this._locale;
    }
    var ri = 1e3, Dt = 60 * ri, ii = 60 * Dt, Fn = (365 * 400 + 97) * 24 * ii;
    function kt(e, r) {
      return (e % r + r) % r;
    }
    function Gn(e, r, a) {
      return e < 100 && e >= 0 ? new Date(e + 400, r, a) - Fn : new Date(e, r, a).valueOf();
    }
    function Un(e, r, a) {
      return e < 100 && e >= 0 ? Date.UTC(e + 400, r, a) - Fn : Date.UTC(e, r, a);
    }
    function zl(e) {
      var r, a;
      if (e = Ne(e), e === void 0 || e === "millisecond" || !this.isValid())
        return this;
      switch (a = this._isUTC ? Un : Gn, e) {
        case "year":
          r = a(this.year(), 0, 1);
          break;
        case "quarter":
          r = a(
            this.year(),
            this.month() - this.month() % 3,
            1
          );
          break;
        case "month":
          r = a(this.year(), this.month(), 1);
          break;
        case "week":
          r = a(
            this.year(),
            this.month(),
            this.date() - this.weekday()
          );
          break;
        case "isoWeek":
          r = a(
            this.year(),
            this.month(),
            this.date() - (this.isoWeekday() - 1)
          );
          break;
        case "day":
        case "date":
          r = a(this.year(), this.month(), this.date());
          break;
        case "hour":
          r = this._d.valueOf(), r -= kt(
            r + (this._isUTC ? 0 : this.utcOffset() * Dt),
            ii
          );
          break;
        case "minute":
          r = this._d.valueOf(), r -= kt(r, Dt);
          break;
        case "second":
          r = this._d.valueOf(), r -= kt(r, ri);
          break;
      }
      return this._d.setTime(r), f.updateOffset(this, !0), this;
    }
    function Xl(e) {
      var r, a;
      if (e = Ne(e), e === void 0 || e === "millisecond" || !this.isValid())
        return this;
      switch (a = this._isUTC ? Un : Gn, e) {
        case "year":
          r = a(this.year() + 1, 0, 1) - 1;
          break;
        case "quarter":
          r = a(
            this.year(),
            this.month() - this.month() % 3 + 3,
            1
          ) - 1;
          break;
        case "month":
          r = a(this.year(), this.month() + 1, 1) - 1;
          break;
        case "week":
          r = a(
            this.year(),
            this.month(),
            this.date() - this.weekday() + 7
          ) - 1;
          break;
        case "isoWeek":
          r = a(
            this.year(),
            this.month(),
            this.date() - (this.isoWeekday() - 1) + 7
          ) - 1;
          break;
        case "day":
        case "date":
          r = a(this.year(), this.month(), this.date() + 1) - 1;
          break;
        case "hour":
          r = this._d.valueOf(), r += ii - kt(
            r + (this._isUTC ? 0 : this.utcOffset() * Dt),
            ii
          ) - 1;
          break;
        case "minute":
          r = this._d.valueOf(), r += Dt - kt(r, Dt) - 1;
          break;
        case "second":
          r = this._d.valueOf(), r += ri - kt(r, ri) - 1;
          break;
      }
      return this._d.setTime(r), f.updateOffset(this, !0), this;
    }
    function $l() {
      return this._d.valueOf() - (this._offset || 0) * 6e4;
    }
    function Ql() {
      return Math.floor(this.valueOf() / 1e3);
    }
    function Zl() {
      return new Date(this.valueOf());
    }
    function Jl() {
      var e = this;
      return [
        e.year(),
        e.month(),
        e.date(),
        e.hour(),
        e.minute(),
        e.second(),
        e.millisecond()
      ];
    }
    function eh() {
      var e = this;
      return {
        years: e.year(),
        months: e.month(),
        date: e.date(),
        hours: e.hours(),
        minutes: e.minutes(),
        seconds: e.seconds(),
        milliseconds: e.milliseconds()
      };
    }
    function th() {
      return this.isValid() ? this.toISOString() : null;
    }
    function rh() {
      return h(this);
    }
    function ih() {
      return u({}, y(this));
    }
    function nh() {
      return y(this).overflow;
    }
    function ah() {
      return {
        input: this._i,
        format: this._f,
        locale: this._locale,
        isUTC: this._isUTC,
        strict: this._strict
      };
    }
    q("N", 0, 0, "eraAbbr"), q("NN", 0, 0, "eraAbbr"), q("NNN", 0, 0, "eraAbbr"), q("NNNN", 0, 0, "eraName"), q("NNNNN", 0, 0, "eraNarrow"), q("y", ["y", 1], "yo", "eraYear"), q("y", ["yy", 2], 0, "eraYear"), q("y", ["yyy", 3], 0, "eraYear"), q("y", ["yyyy", 4], 0, "eraYear"), te("N", xi), te("NN", xi), te("NNN", xi), te("NNNN", vh), te("NNNNN", ph), ye(
      ["N", "NN", "NNN", "NNNN", "NNNNN"],
      function(e, r, a, _) {
        var M = a._locale.erasParse(e, _, a._strict);
        M ? y(a).era = M : y(a).invalidEra = e;
      }
    ), te("y", Mt), te("yy", Mt), te("yyy", Mt), te("yyyy", Mt), te("yo", mh), ye(["y", "yy", "yyy", "yyyy"], Ye), ye(["yo"], function(e, r, a, _) {
      var M;
      a._locale._eraYearOrdinalRegex && (M = e.match(a._locale._eraYearOrdinalRegex)), a._locale.eraYearOrdinalParse ? r[Ye] = a._locale.eraYearOrdinalParse(e, M) : r[Ye] = parseInt(e, 10);
    });
    function sh(e, r) {
      var a, _, M, U = this._eras || dt("en")._eras;
      for (a = 0, _ = U.length; a < _; ++a) {
        switch (typeof U[a].since) {
          case "string":
            M = f(U[a].since).startOf("day"), U[a].since = M.valueOf();
            break;
        }
        switch (typeof U[a].until) {
          case "undefined":
            U[a].until = 1 / 0;
            break;
          case "string":
            M = f(U[a].until).startOf("day").valueOf(), U[a].until = M.valueOf();
            break;
        }
      }
      return U;
    }
    function oh(e, r, a) {
      var _, M, U = this.eras(), K, ee, ae;
      for (e = e.toUpperCase(), _ = 0, M = U.length; _ < M; ++_)
        if (K = U[_].name.toUpperCase(), ee = U[_].abbr.toUpperCase(), ae = U[_].narrow.toUpperCase(), a)
          switch (r) {
            case "N":
            case "NN":
            case "NNN":
              if (ee === e)
                return U[_];
              break;
            case "NNNN":
              if (K === e)
                return U[_];
              break;
            case "NNNNN":
              if (ae === e)
                return U[_];
              break;
          }
        else if ([K, ee, ae].indexOf(e) >= 0)
          return U[_];
    }
    function lh(e, r) {
      var a = e.since <= e.until ? 1 : -1;
      return r === void 0 ? f(e.since).year() : f(e.since).year() + (r - e.offset) * a;
    }
    function hh() {
      var e, r, a, _ = this.localeData().eras();
      for (e = 0, r = _.length; e < r; ++e)
        if (a = this.clone().startOf("day").valueOf(), _[e].since <= a && a <= _[e].until || _[e].until <= a && a <= _[e].since)
          return _[e].name;
      return "";
    }
    function dh() {
      var e, r, a, _ = this.localeData().eras();
      for (e = 0, r = _.length; e < r; ++e)
        if (a = this.clone().startOf("day").valueOf(), _[e].since <= a && a <= _[e].until || _[e].until <= a && a <= _[e].since)
          return _[e].narrow;
      return "";
    }
    function uh() {
      var e, r, a, _ = this.localeData().eras();
      for (e = 0, r = _.length; e < r; ++e)
        if (a = this.clone().startOf("day").valueOf(), _[e].since <= a && a <= _[e].until || _[e].until <= a && a <= _[e].since)
          return _[e].abbr;
      return "";
    }
    function ch() {
      var e, r, a, _, M = this.localeData().eras();
      for (e = 0, r = M.length; e < r; ++e)
        if (a = M[e].since <= M[e].until ? 1 : -1, _ = this.clone().startOf("day").valueOf(), M[e].since <= _ && _ <= M[e].until || M[e].until <= _ && _ <= M[e].since)
          return (this.year() - f(M[e].since).year()) * a + M[e].offset;
      return this.year();
    }
    function fh(e) {
      return i(this, "_erasNameRegex") || Ni.call(this), e ? this._erasNameRegex : this._erasRegex;
    }
    function gh(e) {
      return i(this, "_erasAbbrRegex") || Ni.call(this), e ? this._erasAbbrRegex : this._erasRegex;
    }
    function _h(e) {
      return i(this, "_erasNarrowRegex") || Ni.call(this), e ? this._erasNarrowRegex : this._erasRegex;
    }
    function xi(e, r) {
      return r.erasAbbrRegex(e);
    }
    function vh(e, r) {
      return r.erasNameRegex(e);
    }
    function ph(e, r) {
      return r.erasNarrowRegex(e);
    }
    function mh(e, r) {
      return r._eraYearOrdinalRegex || Mt;
    }
    function Ni() {
      var e = [], r = [], a = [], _ = [], M, U, K, ee, ae, ue = this.eras();
      for (M = 0, U = ue.length; M < U; ++M)
        K = st(ue[M].name), ee = st(ue[M].abbr), ae = st(ue[M].narrow), r.push(K), e.push(ee), a.push(ae), _.push(K), _.push(ee), _.push(ae);
      this._erasRegex = new RegExp("^(" + _.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp(
        "^(" + a.join("|") + ")",
        "i"
      );
    }
    q(0, ["gg", 2], 0, function() {
      return this.weekYear() % 100;
    }), q(0, ["GG", 2], 0, function() {
      return this.isoWeekYear() % 100;
    });
    function ni(e, r) {
      q(0, [e, e.length], 0, r);
    }
    ni("gggg", "weekYear"), ni("ggggg", "weekYear"), ni("GGGG", "isoWeekYear"), ni("GGGGG", "isoWeekYear"), te("G", at), te("g", at), te("GG", ge, fe), te("gg", ge, fe), te("GGGG", nt, $e), te("gggg", nt, $e), te("GGGGG", qr, We), te("ggggg", qr, We), Ht(
      ["gggg", "ggggg", "GGGG", "GGGGG"],
      function(e, r, a, _) {
        r[_.substr(0, 2)] = de(e);
      }
    ), Ht(["gg", "GG"], function(e, r, a, _) {
      r[_] = f.parseTwoDigitYear(e);
    });
    function yh(e) {
      return Yn.call(
        this,
        e,
        this.week(),
        this.weekday() + this.localeData()._week.dow,
        this.localeData()._week.dow,
        this.localeData()._week.doy
      );
    }
    function Sh(e) {
      return Yn.call(
        this,
        e,
        this.isoWeek(),
        this.isoWeekday(),
        1,
        4
      );
    }
    function bh() {
      return ht(this.year(), 1, 4);
    }
    function Th() {
      return ht(this.isoWeekYear(), 1, 4);
    }
    function wh() {
      var e = this.localeData()._week;
      return ht(this.year(), e.dow, e.doy);
    }
    function Ch() {
      var e = this.localeData()._week;
      return ht(this.weekYear(), e.dow, e.doy);
    }
    function Yn(e, r, a, _, M) {
      var U;
      return e == null ? qt(this, _, M).year : (U = ht(e, _, M), r > U && (r = U), Eh.call(this, e, r, a, _, M));
    }
    function Eh(e, r, a, _, M) {
      var U = pn(e, r, a, _, M), K = jt(U.year, 0, U.dayOfYear);
      return this.year(K.getUTCFullYear()), this.month(K.getUTCMonth()), this.date(K.getUTCDate()), this;
    }
    q("Q", 0, "Qo", "quarter"), te("Q", et), ye("Q", function(e, r) {
      r[ot] = (de(e) - 1) * 3;
    });
    function Ah(e) {
      return e == null ? Math.ceil((this.month() + 1) / 3) : this.month((e - 1) * 3 + this.month() % 3);
    }
    q("D", ["DD", 2], "Do", "date"), te("D", ge, xt), te("DD", ge, fe), te("Do", function(e, r) {
      return e ? r._dayOfMonthOrdinalParse || r._ordinalParse : r._dayOfMonthOrdinalParseLenient;
    }), ye(["D", "DD"], rt), ye("Do", function(e, r) {
      r[rt] = de(e.match(ge)[0]);
    });
    var Bn = Nt("Date", !0);
    q("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), te("DDD", tt), te("DDDD", je), ye(["DDD", "DDDD"], function(e, r, a) {
      a._dayOfYear = de(e);
    });
    function Rh(e) {
      var r = Math.round(
        (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
      ) + 1;
      return e == null ? r : this.add(e - r, "d");
    }
    q("m", ["mm", 2], 0, "minute"), te("m", ge, vi), te("mm", ge, fe), ye(["m", "mm"], Qe);
    var Lh = Nt("Minutes", !1);
    q("s", ["ss", 2], 0, "second"), te("s", ge, vi), te("ss", ge, fe), ye(["s", "ss"], lt);
    var Mh = Nt("Seconds", !1);
    q("S", 0, 0, function() {
      return ~~(this.millisecond() / 100);
    }), q(0, ["SS", 2], 0, function() {
      return ~~(this.millisecond() / 10);
    }), q(0, ["SSS", 3], 0, "millisecond"), q(0, ["SSSS", 4], 0, function() {
      return this.millisecond() * 10;
    }), q(0, ["SSSSS", 5], 0, function() {
      return this.millisecond() * 100;
    }), q(0, ["SSSSSS", 6], 0, function() {
      return this.millisecond() * 1e3;
    }), q(0, ["SSSSSSS", 7], 0, function() {
      return this.millisecond() * 1e4;
    }), q(0, ["SSSSSSSS", 8], 0, function() {
      return this.millisecond() * 1e5;
    }), q(0, ["SSSSSSSSS", 9], 0, function() {
      return this.millisecond() * 1e6;
    }), te("S", tt, et), te("SS", tt, fe), te("SSS", tt, je);
    var St, Vn;
    for (St = "SSSS"; St.length <= 9; St += "S")
      te(St, Mt);
    function Ph(e, r) {
      r[wt] = de(("0." + e) * 1e3);
    }
    for (St = "S"; St.length <= 9; St += "S")
      ye(St, Ph);
    Vn = Nt("Milliseconds", !1), q("z", 0, 0, "zoneAbbr"), q("zz", 0, 0, "zoneName");
    function xh() {
      return this._isUTC ? "UTC" : "";
    }
    function Nh() {
      return this._isUTC ? "Coordinated Universal Time" : "";
    }
    var Q = k.prototype;
    Q.add = Cl, Q.calendar = xl, Q.clone = Nl, Q.diff = Ul, Q.endOf = Xl, Q.format = Hl, Q.from = Wl, Q.fromNow = Kl, Q.to = jl, Q.toNow = ql, Q.get = Bs, Q.invalidAt = nh, Q.isAfter = Ol, Q.isBefore = Dl, Q.isBetween = kl, Q.isSame = Il, Q.isSameOrAfter = Fl, Q.isSameOrBefore = Gl, Q.isValid = rh, Q.lang = kn, Q.locale = Dn, Q.localeData = In, Q.max = rl, Q.min = tl, Q.parsingFlags = ih, Q.set = Vs, Q.startOf = zl, Q.subtract = El, Q.toArray = Jl, Q.toObject = eh, Q.toDate = Zl, Q.toISOString = Bl, Q.inspect = Vl, typeof Symbol < "u" && Symbol.for != null && (Q[Symbol.for("nodejs.util.inspect.custom")] = function() {
      return "Moment<" + this.format() + ">";
    }), Q.toJSON = th, Q.toString = Yl, Q.unix = Ql, Q.valueOf = $l, Q.creationData = ah, Q.eraName = hh, Q.eraNarrow = dh, Q.eraAbbr = uh, Q.eraYear = ch, Q.year = dn, Q.isLeapYear = Ys, Q.weekYear = yh, Q.isoWeekYear = Sh, Q.quarter = Q.quarters = Ah, Q.month = _n, Q.daysInMonth = Qs, Q.week = Q.weeks = ao, Q.isoWeek = Q.isoWeeks = so, Q.weeksInYear = wh, Q.weeksInWeekYear = Ch, Q.isoWeeksInYear = bh, Q.isoWeeksInISOWeekYear = Th, Q.date = Bn, Q.day = Q.days = So, Q.weekday = bo, Q.isoWeekday = To, Q.dayOfYear = Rh, Q.hour = Q.hours = Mo, Q.minute = Q.minutes = Lh, Q.second = Q.seconds = Mh, Q.millisecond = Q.milliseconds = Vn, Q.utcOffset = ul, Q.utc = fl, Q.local = gl, Q.parseZone = _l, Q.hasAlignedHourOffset = vl, Q.isDST = pl, Q.isLocal = yl, Q.isUtcOffset = Sl, Q.isUtc = Mn, Q.isUTC = Mn, Q.zoneAbbr = xh, Q.zoneName = Nh, Q.dates = E(
      "dates accessor is deprecated. Use date instead.",
      Bn
    ), Q.months = E(
      "months accessor is deprecated. Use month instead",
      _n
    ), Q.years = E(
      "years accessor is deprecated. Use year instead",
      dn
    ), Q.zone = E(
      "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
      cl
    ), Q.isDSTShifted = E(
      "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
      ml
    );
    function Oh(e) {
      return Te(e * 1e3);
    }
    function Dh() {
      return Te.apply(null, arguments).parseZone();
    }
    function Hn(e) {
      return e;
    }
    var _e = O.prototype;
    _e.calendar = B, _e.longDateFormat = ie, _e.invalidDate = pe, _e.ordinal = De, _e.preparse = Hn, _e.postformat = Hn, _e.relativeTime = be, _e.pastFuture = Je, _e.set = w, _e.eras = sh, _e.erasParse = oh, _e.erasConvertYear = lh, _e.erasAbbrRegex = gh, _e.erasNameRegex = fh, _e.erasNarrowRegex = _h, _e.months = qs, _e.monthsShort = zs, _e.monthsParse = $s, _e.monthsRegex = Js, _e.monthsShortRegex = Zs, _e.week = to, _e.firstDayOfYear = no, _e.firstDayOfWeek = io, _e.weekdays = _o, _e.weekdaysMin = po, _e.weekdaysShort = vo, _e.weekdaysParse = yo, _e.weekdaysRegex = wo, _e.weekdaysShortRegex = Co, _e.weekdaysMinRegex = Eo, _e.isPM = Ro, _e.meridiem = Po;
    function ai(e, r, a, _) {
      var M = dt(), U = s().set(_, r);
      return M[a](U, e);
    }
    function Wn(e, r, a) {
      if (S(e) && (r = e, e = void 0), e = e || "", r != null)
        return ai(e, r, a, "month");
      var _, M = [];
      for (_ = 0; _ < 12; _++)
        M[_] = ai(e, _, a, "month");
      return M;
    }
    function Oi(e, r, a, _) {
      typeof e == "boolean" ? (S(r) && (a = r, r = void 0), r = r || "") : (r = e, a = r, e = !1, S(r) && (a = r, r = void 0), r = r || "");
      var M = dt(), U = e ? M._week.dow : 0, K, ee = [];
      if (a != null)
        return ai(r, (a + U) % 7, _, "day");
      for (K = 0; K < 7; K++)
        ee[K] = ai(r, (K + U) % 7, _, "day");
      return ee;
    }
    function kh(e, r) {
      return Wn(e, r, "months");
    }
    function Ih(e, r) {
      return Wn(e, r, "monthsShort");
    }
    function Fh(e, r, a) {
      return Oi(e, r, a, "weekdays");
    }
    function Gh(e, r, a) {
      return Oi(e, r, a, "weekdaysShort");
    }
    function Uh(e, r, a) {
      return Oi(e, r, a, "weekdaysMin");
    }
    yt("en", {
      eras: [
        {
          since: "0001-01-01",
          until: 1 / 0,
          offset: 1,
          name: "Anno Domini",
          narrow: "AD",
          abbr: "AD"
        },
        {
          since: "0000-12-31",
          until: -1 / 0,
          offset: 1,
          name: "Before Christ",
          narrow: "BC",
          abbr: "BC"
        }
      ],
      dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
      ordinal: function(e) {
        var r = e % 10, a = de(e % 100 / 10) === 1 ? "th" : r === 1 ? "st" : r === 2 ? "nd" : r === 3 ? "rd" : "th";
        return e + a;
      }
    }), f.lang = E(
      "moment.lang is deprecated. Use moment.locale instead.",
      yt
    ), f.langData = E(
      "moment.langData is deprecated. Use moment.localeData instead.",
      dt
    );
    var ut = Math.abs;
    function Yh() {
      var e = this._data;
      return this._milliseconds = ut(this._milliseconds), this._days = ut(this._days), this._months = ut(this._months), e.milliseconds = ut(e.milliseconds), e.seconds = ut(e.seconds), e.minutes = ut(e.minutes), e.hours = ut(e.hours), e.months = ut(e.months), e.years = ut(e.years), this;
    }
    function Kn(e, r, a, _) {
      var M = Ze(r, a);
      return e._milliseconds += _ * M._milliseconds, e._days += _ * M._days, e._months += _ * M._months, e._bubble();
    }
    function Bh(e, r) {
      return Kn(this, e, r, 1);
    }
    function Vh(e, r) {
      return Kn(this, e, r, -1);
    }
    function jn(e) {
      return e < 0 ? Math.floor(e) : Math.ceil(e);
    }
    function Hh() {
      var e = this._milliseconds, r = this._days, a = this._months, _ = this._data, M, U, K, ee, ae;
      return e >= 0 && r >= 0 && a >= 0 || e <= 0 && r <= 0 && a <= 0 || (e += jn(Di(a) + r) * 864e5, r = 0, a = 0), _.milliseconds = e % 1e3, M = Xe(e / 1e3), _.seconds = M % 60, U = Xe(M / 60), _.minutes = U % 60, K = Xe(U / 60), _.hours = K % 24, r += Xe(K / 24), ae = Xe(qn(r)), a += ae, r -= jn(Di(ae)), ee = Xe(a / 12), a %= 12, _.days = r, _.months = a, _.years = ee, this;
    }
    function qn(e) {
      return e * 4800 / 146097;
    }
    function Di(e) {
      return e * 146097 / 4800;
    }
    function Wh(e) {
      if (!this.isValid())
        return NaN;
      var r, a, _ = this._milliseconds;
      if (e = Ne(e), e === "month" || e === "quarter" || e === "year")
        switch (r = this._days + _ / 864e5, a = this._months + qn(r), e) {
          case "month":
            return a;
          case "quarter":
            return a / 3;
          case "year":
            return a / 12;
        }
      else
        switch (r = this._days + Math.round(Di(this._months)), e) {
          case "week":
            return r / 7 + _ / 6048e5;
          case "day":
            return r + _ / 864e5;
          case "hour":
            return r * 24 + _ / 36e5;
          case "minute":
            return r * 1440 + _ / 6e4;
          case "second":
            return r * 86400 + _ / 1e3;
          case "millisecond":
            return Math.floor(r * 864e5) + _;
          default:
            throw new Error("Unknown unit " + e);
        }
    }
    function ct(e) {
      return function() {
        return this.as(e);
      };
    }
    var zn = ct("ms"), Kh = ct("s"), jh = ct("m"), qh = ct("h"), zh = ct("d"), Xh = ct("w"), $h = ct("M"), Qh = ct("Q"), Zh = ct("y"), Jh = zn;
    function ed() {
      return Ze(this);
    }
    function td(e) {
      return e = Ne(e), this.isValid() ? this[e + "s"]() : NaN;
    }
    function Et(e) {
      return function() {
        return this.isValid() ? this._data[e] : NaN;
      };
    }
    var rd = Et("milliseconds"), id = Et("seconds"), nd = Et("minutes"), ad = Et("hours"), sd = Et("days"), od = Et("months"), ld = Et("years");
    function hd() {
      return Xe(this.days() / 7);
    }
    var ft = Math.round, It = {
      ss: 44,
      // a few seconds to seconds
      s: 45,
      // seconds to minute
      m: 45,
      // minutes to hour
      h: 22,
      // hours to day
      d: 26,
      // days to month/week
      w: null,
      // weeks to month
      M: 11
      // months to year
    };
    function dd(e, r, a, _, M) {
      return M.relativeTime(r || 1, !!a, e, _);
    }
    function ud(e, r, a, _) {
      var M = Ze(e).abs(), U = ft(M.as("s")), K = ft(M.as("m")), ee = ft(M.as("h")), ae = ft(M.as("d")), ue = ft(M.as("M")), He = ft(M.as("w")), gt = ft(M.as("y")), bt = U <= a.ss && ["s", U] || U < a.s && ["ss", U] || K <= 1 && ["m"] || K < a.m && ["mm", K] || ee <= 1 && ["h"] || ee < a.h && ["hh", ee] || ae <= 1 && ["d"] || ae < a.d && ["dd", ae];
      return a.w != null && (bt = bt || He <= 1 && ["w"] || He < a.w && ["ww", He]), bt = bt || ue <= 1 && ["M"] || ue < a.M && ["MM", ue] || gt <= 1 && ["y"] || ["yy", gt], bt[2] = r, bt[3] = +e > 0, bt[4] = _, dd.apply(null, bt);
    }
    function cd(e) {
      return e === void 0 ? ft : typeof e == "function" ? (ft = e, !0) : !1;
    }
    function fd(e, r) {
      return It[e] === void 0 ? !1 : r === void 0 ? It[e] : (It[e] = r, e === "s" && (It.ss = r - 1), !0);
    }
    function gd(e, r) {
      if (!this.isValid())
        return this.localeData().invalidDate();
      var a = !1, _ = It, M, U;
      return typeof e == "object" && (r = e, e = !1), typeof e == "boolean" && (a = e), typeof r == "object" && (_ = Object.assign({}, It, r), r.s != null && r.ss == null && (_.ss = r.s - 1)), M = this.localeData(), U = ud(this, !a, _, M), a && (U = M.pastFuture(+this, U)), M.postformat(U);
    }
    var ki = Math.abs;
    function Ft(e) {
      return (e > 0) - (e < 0) || +e;
    }
    function si() {
      if (!this.isValid())
        return this.localeData().invalidDate();
      var e = ki(this._milliseconds) / 1e3, r = ki(this._days), a = ki(this._months), _, M, U, K, ee = this.asSeconds(), ae, ue, He, gt;
      return ee ? (_ = Xe(e / 60), M = Xe(_ / 60), e %= 60, _ %= 60, U = Xe(a / 12), a %= 12, K = e ? e.toFixed(3).replace(/\.?0+$/, "") : "", ae = ee < 0 ? "-" : "", ue = Ft(this._months) !== Ft(ee) ? "-" : "", He = Ft(this._days) !== Ft(ee) ? "-" : "", gt = Ft(this._milliseconds) !== Ft(ee) ? "-" : "", ae + "P" + (U ? ue + U + "Y" : "") + (a ? ue + a + "M" : "") + (r ? He + r + "D" : "") + (M || _ || e ? "T" : "") + (M ? gt + M + "H" : "") + (_ ? gt + _ + "M" : "") + (e ? gt + K + "S" : "")) : "P0D";
    }
    var ce = Jr.prototype;
    ce.isValid = ol, ce.abs = Yh, ce.add = Bh, ce.subtract = Vh, ce.as = Wh, ce.asMilliseconds = zn, ce.asSeconds = Kh, ce.asMinutes = jh, ce.asHours = qh, ce.asDays = zh, ce.asWeeks = Xh, ce.asMonths = $h, ce.asQuarters = Qh, ce.asYears = Zh, ce.valueOf = Jh, ce._bubble = Hh, ce.clone = ed, ce.get = td, ce.milliseconds = rd, ce.seconds = id, ce.minutes = nd, ce.hours = ad, ce.days = sd, ce.weeks = hd, ce.months = od, ce.years = ld, ce.humanize = gd, ce.toISOString = si, ce.toString = si, ce.toJSON = si, ce.locale = Dn, ce.localeData = In, ce.toIsoString = E(
      "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
      si
    ), ce.lang = kn, q("X", 0, 0, "unix"), q("x", 0, 0, "valueOf"), te("x", at), te("X", _i), ye("X", function(e, r, a) {
      a._d = new Date(parseFloat(e) * 1e3);
    }), ye("x", function(e, r, a) {
      a._d = new Date(de(e));
    });
    //! moment.js
    return f.version = "2.30.1", C(Te), f.fn = Q, f.min = il, f.max = nl, f.now = al, f.utc = s, f.unix = Oh, f.months = kh, f.isDate = p, f.locale = yt, f.invalid = n, f.duration = Ze, f.isMoment = x, f.weekdays = Fh, f.parseZone = Dh, f.localeData = dt, f.isDuration = ei, f.monthsShort = Ih, f.weekdaysMin = Uh, f.defineLocale = Ti, f.updateLocale = Do, f.locales = ko, f.weekdaysShort = Gh, f.normalizeUnits = Ne, f.relativeTimeRounding = cd, f.relativeTimeThreshold = fd, f.calendarFormat = Pl, f.prototype = Q, f.HTML5_FMT = {
      DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
      // <input type="datetime-local" />
      DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
      // <input type="datetime-local" step="1" />
      DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
      // <input type="datetime-local" step="0.001" />
      DATE: "YYYY-MM-DD",
      // <input type="date" />
      TIME: "HH:mm",
      // <input type="time" />
      TIME_SECONDS: "HH:mm:ss",
      // <input type="time" step="1" />
      TIME_MS: "HH:mm:ss.SSS",
      // <input type="time" step="0.001" />
      WEEK: "GGGG-[W]WW",
      // <input type="week" />
      MONTH: "YYYY-MM"
      // <input type="month" />
    }, f;
  });
})(Yu);
const hi = {}, Yt = function({ id: t } = {}) {
  var C, g;
  let l = t || "";
  return l || (l = vs("pixelPaletteId", "")), l || (l = (g = (C = ps()) == null ? void 0 : C.proxy) == null ? void 0 : g.$props.id), { getData: function(d) {
    var i;
    return (i = hi[l]) == null ? void 0 : i[d];
  }, setData: function(d, i) {
    hi[l] || (hi[l] = {}), hi[l][d] = i;
  } };
}, Bu = {
  grid: { size: 20, render: null },
  border: {
    size: 1,
    color: "#595959",
    groupColor: "#bfbfbf"
  },
  board: { backLayerRender: null, foreLayerRender: null },
  groupInfo: { row: 0, col: 0 },
  rowNum: 0,
  colNum: 0
}, Bt = function({ id: t } = {}) {
  const { getData: l, setData: A } = Yt({ id: t });
  let f = l("config");
  f || (f = tn(ui(Bu)), A("config", f));
  const C = function(d) {
    md(f, d);
  }, g = Be(() => {
    const { colNum: d, rowNum: i, grid: c, border: v } = f;
    return {
      width: d * c.size + (d + 1) * v.size,
      height: i * c.size + (i + 1) * v.size
    };
  });
  return { ...ms(f), setConfig: C, boardRect: g };
}, hn = function({ id: t } = {}) {
  const { getData: l, setData: A } = Yt({ id: t });
  return l("renderFlags") || A("renderFlags", []), { isRenderred: function() {
    const g = l("renderFlags");
    return Promise.all(g.map((d) => d.done));
  }, addRenderFlag: function(g) {
    let d = l("renderFlags");
    const i = d.findIndex((S) => S.key === g);
    i >= 0 && d.splice(i, 1);
    let c;
    const v = new Promise((S) => {
      c = S;
    });
    return d.push({
      key: g,
      done: v,
      resolve: c
    }), { resolve: c };
  } };
}, Vu = function({
  x: t,
  y: l,
  newScale: A,
  stage: f
}) {
  var C = f.scaleX(), g = { x: t, y: l }, d = {
    x: (g.x - f.x()) / C,
    y: (g.y - f.y()) / C
  };
  f.scale({ x: A, y: A });
  var i = {
    x: g.x - d.x * A,
    y: g.y - d.y * A
  };
  f.position(i);
}, Hu = function({ id: t } = {}) {
  let l = _d(null);
  const { getData: A } = Yt({ id: t }), f = function() {
    var u, s;
    return l.value || (l.value = (s = (u = A("component")) == null ? void 0 : u.stage) == null ? void 0 : s.getNode()), l.value;
  }, { rowNum: C, colNum: g, grid: d, border: i } = Bt({ id: t }), c = async function() {
    const u = f();
    u.scale({ x: 1, y: 1 }), u.position({ x: 0, y: 0 });
    const { size: s } = d.value, { size: m } = i.value, y = (s + m) * g.value + m, P = (s + m) * C.value + m, h = u.width(), n = u.height(), T = { x: 100, y: 100 }, R = +Math.min((h - T.x) / y, (u.height() - T.y) / P).toFixed(1);
    u.scale({ x: R, y: R }), u.position({
      x: Math.round(Math.abs(h - y * R) / 2),
      y: Math.round(Math.abs(n - P * R) / 2)
    });
  }, v = function({ newScale: u }) {
    const s = f();
    return Vu({ x: s.width() / 2, y: s.height() / 2, newScale: u, stage: s });
  }, S = function({ deltaX: u = 0, deltaY: s = 0 }) {
    const m = f(), { x: y, y: P } = m.position();
    m.position({ x: y + u, y: P + s });
  }, { isRenderred: p } = hn({ id: t });
  return { getStage: f, stage: l, centerAndPosition: c, scaleByCenter: v, positionByDelta: S, exportImage: async function(...u) {
    return await p(), f().find("#pixelBoardArea")[0].toDataURL(...u);
  }, isRenderred: p };
};
class Wu extends Nu {
  constructor(l, A) {
    super(), this.storeKey = "pixelEditState", this.fromSnap = ({ isUndo: f, editRecord: C }) => {
      const { step: g } = C, d = f ? C.getRecord({ key: this.storeKey, step: g - 1 }) : C.getRecord({ key: this.storeKey, step: g + 1 });
      this.pixelData.set(ui(d == null ? void 0 : d.snapshot));
    }, this.editRecord = l, this.pixelData = A;
  }
  get() {
    return this.pixelData.get().value;
  }
  set() {
  }
  toSnap(l) {
    return ui(l);
  }
}
class Ku extends Du {
  constructor({ pixelData: l }) {
    super({ maxSize: 30 }), this.recordStores = [], this.step = 0, this.onBeforeDo = function() {
    }, this.recordStores = [new Wu(this, l)];
  }
  // 清空record，并增加初始数据
  init() {
    this.clear(), this.record("init");
  }
  async onAfterDo(l) {
    Zi = !0, setTimeout(() => {
      Zi = !1;
    }, 0);
  }
  onAfterProduce() {
  }
  record(l) {
    this.produce(l, (A) => {
      A.set(A.get());
    });
  }
}
let Zi = !1;
const ju = function() {
  const { getData: t, setData: l } = Yt(), A = t("pixelData"), f = new Ku({ pixelData: A });
  f.record("pixelRecord"), l("pixelHistory", f);
  const C = yd(() => {
    f.record("pixelRecord");
  }, 500);
  return rn(
    () => A.get().value,
    function(g, d) {
      Zi || C();
    },
    { deep: !0 }
  ), { pixelHistory: f };
}, qu = {
  onGridPressed: [],
  // 按下格子，Press和Pressmove都算，可以通过type判断类型
  onGridHover: []
}, Ns = function({ id: t } = {}) {
  const { getData: l, setData: A } = Yt({ id: t });
  let f = l("when");
  f || (f = tn(ui(qu)), A("when", f));
  const C = [], g = function(i) {
    Object.entries(i).forEach(([c, v]) => {
      const S = f[c];
      S.includes(v) || S.push(v);
    }), C.push(() => {
      Object.entries(i).forEach(([c, v]) => {
        const S = f[c];
        S.includes(v) && (f[c] = S.filter((p) => p !== v));
      });
    });
  };
  en(() => {
    C.forEach((i) => i());
  });
  const d = function(i, ...c) {
    const v = f[i];
    v == null || v.forEach((S) => S(...c));
  };
  return { ...ms(f), call: d, when: g };
}, { KLayer: zu, KGroup: Xu, KRect: $u } = Ut, Qu = Wr({
  name: "PixelGrid",
  components: { KLayer: zu, KGroup: Xu, KRect: $u },
  props: {
    grid: { type: Object, required: !0 },
    row: { type: Number, required: !0 },
    col: { type: Number, required: !0 },
    id: String,
    layerId: { type: String }
  },
  setup(t, { emit: l }) {
    const A = vs("stageRef"), { grid: f, border: C } = Bt(), { call: g } = Ns(), d = Be(() => {
      const b = f.value.size, u = C.value.size, { col: s, row: m } = t;
      return {
        x: b * s + u * (s + 1),
        y: b * m + u * (m + 1),
        width: b,
        height: b
      };
    }), i = Be(() => f.value.size);
    Be(() => {
    });
    const c = Lt(!1), v = function(b) {
      if (t.grid.disabled) {
        const u = A.value.getStage().container();
        u.style.cursor = "not-allowed";
        return;
      }
      c.value = !0, g("onGridHover", { r: t.row, c: t.col, grid: t.grid, layerId: t.layerId });
    }, S = function(b) {
      if (t.grid.disabled) {
        const u = A.value.getStage().container();
        u.style.cursor = "";
      }
      c.value = !1;
    }, p = Be(() => t.grid.disabled ? {
      fill: "#ededed",
      strokeWidth: 1,
      stroke: "#fff"
    } : {
      fill: t.grid.color,
      strokeWidth: c.value ? 2 : 0,
      stroke: "#fffb8f"
    });
    return {
      layout: d,
      gridSize: i,
      onPointerEnter: v,
      onPointerLeave: S,
      isHover: c,
      rectConfig: p,
      gridRender: f.value.render
    };
  }
});
function jr(t, l, A, f, C, g, d, i) {
  var c = typeof t == "function" ? t.options : t;
  return l && (c.render = l, c.staticRenderFns = A, c._compiled = !0), {
    exports: t,
    options: c
  };
}
var Zu = function() {
  var l = this, A = l._self._c;
  return l._self._setupProxy, A("KGroup", { attrs: { x: l.layout.x, y: l.layout.y, width: l.gridSize, height: l.gridSize, name: "pixelGridGroup", id: l.id }, on: { pointerenter: l.onPointerEnter, pointerleave: l.onPointerLeave } }, [!l.gridRender || l.grid.disabled ? A("KRect", { attrs: { config: l.rectConfig, x: 0, y: 0, width: l.gridSize, height: l.gridSize } }) : A(l.gridRender, { tag: "component", attrs: { grid: l.grid, gridSize: l.gridSize, isHover: l.isHover, row: l.row, col: l.col } })], 1);
}, Ju = [], e0 = /* @__PURE__ */ jr(
  Qu,
  Zu,
  Ju
);
const Os = e0.exports, { KLayer: t0, KGroup: r0, KRect: i0 } = Ut, n0 = Wr({
  name: "PixelGrids",
  components: { KLayer: t0, KGroup: r0, KRect: i0, PixelGrid: Os },
  props: {
    grids: { type: Array, required: !0 },
    layerId: { type: String, required: !0 }
  },
  setup(t, { emit: l }) {
    const A = Be(() => t.grids.flat()), { id2Idx: f, idx2Id: C, getId: g } = xu({ arr: A }), { rowNum: d, colNum: i } = Bt(), c = function(b) {
      const u = _u.findParent(b, function(h) {
        return h.name() === "pixelGridGroup";
      });
      if (!u)
        return;
      const s = u.id(), m = f(s), y = Math.floor(m / i.value), P = m % i.value;
      return {
        r: y,
        c: P,
        grid: A.value[m]
      };
    }, v = Lt(null), { call: S } = Ns();
    let p = [];
    return Pu({
      targetKonvaEl: async function() {
        return v.value.getNode();
      },
      onPressStart({ target: b, evt: u }) {
        var h;
        const s = c(b);
        if (!s || (h = s == null ? void 0 : s.grid) != null && h.disabled) return;
        p = [s];
        const { r: m, c: y, grid: P } = s;
        S("onGridPressed", { evt: u, r: m, c: y, currGrid: P, passByGrids: p, layerId: t.layerId });
      },
      onPressMove({ target: b, evt: u }) {
        var h;
        const s = c(b);
        if (!s || (h = s == null ? void 0 : s.grid) != null && h.disabled) return;
        p.includes(s) || p.push(s);
        const { r: m, c: y, grid: P } = s;
        S("onGridPressed", { evt: u, r: m, c: y, currGrid: P, passByGrids: p, layerId: t.layerId });
      },
      onPressEnd({ target: b, evt: u }) {
        var m;
        const s = c(b);
        if (!((m = s == null ? void 0 : s.grid) != null && m.disabled)) {
          if (s) {
            p.includes(s) || p.push(s);
            const { r: y, c: P, grid: h } = s;
            S("onGridPressed", { evt: u, r: y, c: P, currGrid: h, passByGrids: p, layerId: t.layerId });
          }
          p = [];
        }
      }
    }), {
      getId: g,
      layer: v
    };
  }
});
var a0 = function() {
  var l = this, A = l._self._c;
  return l._self._setupProxy, A("KGroup", { ref: "layer" }, l._l(l.grids, function(f, C) {
    return A("KGroup", l._l(f, function(g, d) {
      return A("PixelGrid", { key: `${C}_${d}`, attrs: { grid: g, row: C, col: d, id: l.getId(g), layerId: l.layerId } });
    }), 1);
  }), 1);
}, s0 = [], o0 = /* @__PURE__ */ jr(
  n0,
  a0,
  s0
);
const l0 = o0.exports, { KLayer: h0, KGroup: d0, KImage: u0 } = Ut, c0 = Wr({
  name: "PixelBackgroundLayer",
  components: { KLayer: h0, KGroup: d0, KImage: u0 },
  props: {},
  setup(t, { emit: l }) {
    const { board: A, boardRect: f } = Bt(), { addRenderFlag: C } = hn(), { resolve: g } = C("background"), d = Lt(null), i = new Image();
    i.src = new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAk8AAAJPAQMAAABfCaItAAAABlBMVEXi4uL9/f0Pi++YAAAA/klEQVR42u3WsQ1AABiE0ROF0ghGMRqjGcUISoX4LaAiGnnlNa+8fKkjXW0ZaslUaV7MoFCo31Bpa09fa8aaU+fzeaJQKNQN5ZBRKJSSQaFQSsa3o1AoJYNCoZQMCoVSMr4dhUIpGRQKpWRQKJSSccgoFErJoFAoJYNCoZSMQ0ahUEoGhUIpGRQKhVIyKBRKyaBQKCXj21EolJJBoVBKBoVCKRmHjEKhlAwKhVIyKBRKyThkFAqlZFAolJJBoVAoJYNCoZQMCoVSMr4dhUIpGRQKpWRQKJSS8e0oFErJoFAoJYNCoZSMQ0ahUEoGhUIpGRQKpWQcMgqFUjKoj6kLvu8XE5xj268AAAAASUVORK5CYII=", import.meta.url).toString(), i.onload = function() {
      g();
    };
    const c = Be(() => ({
      x: 0,
      y: 0,
      width: f.value.width,
      height: f.value.height,
      image: i,
      listening: !1
    }));
    return { backGroup: d, backLayerRender: A.value.backLayerRender, boardRect: f, backConfig: c };
  }
});
var f0 = function() {
  var l = this, A = l._self._c;
  return l._self._setupProxy, A("KGroup", { ref: "backGroup" }, [l.backLayerRender ? A(l.backLayerRender, { tag: "component", attrs: { rect: l.boardRect } }) : A("KImage", { attrs: { id: "backImage", config: l.backConfig } })], 1);
}, g0 = [], _0 = /* @__PURE__ */ jr(
  c0,
  f0,
  g0
);
const Ds = _0.exports, { KLayer: v0, KText: p0, KLine: m0, KGroup: y0 } = Ut, S0 = Wr({
  name: "PixelBaseLine",
  components: { KLayer: v0, KGroup: y0, KText: p0, KLine: m0, PixelGrid: Os, PixelBackground: Ds },
  props: {},
  setup(t, { emit: l }) {
    const { grid: A, border: f, rowNum: C, colNum: g, groupInfo: d } = Bt(), i = Be(() => {
      const p = new Array(C.value + 1).fill(0), b = f.value.size, u = A.value.size, { row: s, col: m } = d.value || {};
      return p.map((y, P) => {
        const h = { x: 0, y: (b + u) * P };
        h.y = h.y + b / 2;
        const n = g.value * (u + b) + b, T = { x: h.x + n, y: h.y }, R = P > 0 && P < p.length - 1 && m && P % m === 0;
        return {
          points: [h.x, h.y, T.x, T.y],
          color: R ? f.value.groupColor : f.value.color
        };
      });
    }), c = Be(() => {
      const p = new Array(g.value + 1).fill(0), b = f.value.size, u = A.value.size, { row: s, col: m } = d.value || {};
      return p.map((y, P) => {
        const h = { x: (b + u) * P, y: 0 };
        h.x = h.x + b / 2;
        const n = C.value * (u + b) + b, T = { x: h.x, y: h.y + n }, R = P > 0 && P < p.length - 1 && s && P % s === 0;
        return {
          points: [h.x, h.y, T.x, T.y],
          color: R ? f.value.groupColor : f.value.color
        };
      });
    }), v = Be(() => {
      const p = new Array(C.value).fill(0), b = f.value.size, u = A.value.size;
      return p.map((s, m) => ({
        x: -8,
        y: m * (u + b) + b,
        text: m + 1
      }));
    }), S = Be(() => {
      const p = new Array(g.value).fill(0), b = f.value.size, u = A.value.size;
      return p.map((s, m) => ({
        x: m * (u + b) + b,
        y: -10,
        text: m + 1
      }));
    });
    return { rowLines: i, colLines: c, border: f, rowIndexes: v, colIndexes: S, grid: A };
  }
});
var b0 = function() {
  var l = this, A = l._self._c;
  return l._self._setupProxy, A("KGroup", [l._l(l.rowLines, function(f) {
    return A("KLine", { attrs: { points: f.points, stroke: f.color, strokeWidth: l.border.size } });
  }), l._l(l.colLines, function(f) {
    return A("KLine", { attrs: { points: f.points, stroke: f.color, strokeWidth: l.border.size } });
  }), l._l(l.rowIndexes, function(f) {
    return A("KText", { attrs: { text: f.text, x: f.x, y: f.y, fontSize: 8, fill: "#444", verticalAlign: "middle", height: l.grid.size } });
  }), l._l(l.colIndexes, function(f) {
    return A("KText", { attrs: { text: f.text, x: f.x, y: f.y, fontSize: 8, fill: "#444", align: "center", width: l.grid.size } });
  })], 2);
}, T0 = [], w0 = /* @__PURE__ */ jr(
  S0,
  b0,
  T0
);
const C0 = w0.exports, { KStage: E0, KLayer: A0, KGroup: R0, KRect: L0 } = Ut, M0 = Wr({
  name: "PixelPalette",
  components: { KStage: E0, KLayer: A0, KGroup: R0, KRect: L0, PixelLayer: l0, PixelBaseLine: C0, PixelBackground: Ds },
  props: {
    id: { type: String, default: ys() },
    // 必须有，兼容多实例
    pixelData: { type: Array, required: !0 },
    grid: { type: Object },
    border: { type: Object },
    groupInfo: { type: Object },
    layout: { type: Object },
    showBaseline: { type: Boolean, default: !0 },
    enableUndo: { type: Boolean, default: !1 }
  },
  model: {
    prop: "pixelData",
    event: "change"
  },
  emits: ["change"],
  setup(t, { emit: l }) {
    var n, T, R;
    const A = t.id;
    Xn("pixelPaletteId", A);
    const f = (n = ps()) == null ? void 0 : n.proxy, { setData: C } = Yt({ id: t.id });
    C("component", f);
    const g = vd(t, "pixelData");
    C("pixelData", {
      get: () => g,
      set: (D) => l("change", D)
    });
    const { setConfig: d, grid: i, border: c, colNum: v, rowNum: S } = Bt({ id: t.id }), { addRenderFlag: p } = hn({ id: t.id }), { resolve: b } = p("palette"), u = Be(() => {
      var D;
      return (D = t.pixelData) != null && D.length ? t.pixelData[0].grids ? t.pixelData : [
        {
          id: "1",
          name: "layer0",
          zIndex: 0,
          grids: t.pixelData
        }
      ] : [];
    });
    d({
      grid: t.grid,
      border: t.border
    });
    const { centerAndPosition: s } = Hu({ id: t.id }), m = async function() {
      var D, k, x;
      d({
        rowNum: ((D = u.value[0]) == null ? void 0 : D.grids.length) || 0,
        colNum: ((x = (k = u.value[0]) == null ? void 0 : k.grids[0]) == null ? void 0 : x.length) || 0
      }), S.value !== 0 && (await pd(), s(), b());
    };
    rn(
      () => t.pixelData,
      function() {
        m();
      },
      { immediate: !0 }
    );
    const y = Lt({
      width: ((T = t.layout) == null ? void 0 : T.width) || 500,
      height: ((R = t.layout) == null ? void 0 : R.height) || 500
    }), P = Lt(null), h = Lt(null);
    if (Xn("stageRef", h), _s(async () => {
      if (!t.layout) {
        const D = P.value.getBoundingClientRect();
        D.width && Object.assign(y.value, {
          width: D.width,
          height: D.height
        });
      }
      m();
    }), t.enableUndo) {
      const { pixelHistory: D } = ju();
      Gu({ editRecord: D, isEnable: Lt(!0) });
    }
    return { wrapperRef: P, innerLayers: u, stageConfig: y, stage: h, pixelPaletteId: A };
  }
});
var P0 = function() {
  var l = this, A = l._self._c;
  return l._self._setupProxy, A("div", { ref: "wrapperRef", staticClass: "palette", staticStyle: { width: "100%", height: "100%" } }, [A("KStage", { ref: "stage", attrs: { config: l.stageConfig } }, [A("KLayer", [A("KGroup", { attrs: { id: "pixelBoardArea" } }, [A("PixelBackground"), l.showBaseline ? A("PixelBaseLine") : l._e(), l._l(l.innerLayers, function(f) {
    return A("PixelLayer", { key: f.id, attrs: { layerId: f.id, grids: f.grids } });
  })], 2)], 1)], 1)], 1);
}, x0 = [], N0 = /* @__PURE__ */ jr(
  M0,
  P0,
  x0
);
const rc = N0.exports;
export {
  rc as PixelPalette,
  Ns as usePixEvent,
  Hu as usePixFunc
};
