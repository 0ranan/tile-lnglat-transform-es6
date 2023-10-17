var L = Object.defineProperty;
var w = (n, t, i) => t in n ? L(n, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : n[t] = i;
var T = (n, t, i) => (w(n, typeof t != "symbol" ? t + "" : t, i), i);
function S(n) {
  return (Math.exp(n) - Math.exp(-n)) / 2;
}
class x {
  constructor(t, i) {
    T(this, "levelMax");
    T(this, "levelMin");
    this.levelMax = t, this.levelMin = i;
  }
  /*
   * 某一瓦片等级下瓦片地图X轴(Y轴)上的瓦片数目
   */
  _getMapSize(t) {
    return 2 ** t;
  }
  /*
   * 分辨率，表示水平方向上一个像素点代表的真实距离(m)
   */
  getResolution(t, i) {
    return 12756274 * Math.PI * Math.cos(t) / 256 / this._getMapSize(i);
  }
  _lngToTileX(t, i) {
    const e = (t + 180) / 360;
    let o = Math.floor(e * this._getMapSize(i));
    return o = Math.min(o, 2 ** i - 1), o;
  }
  _latToTileY(t, i) {
    const e = t * Math.PI / 180, o = (1 - Math.log(Math.tan(e) + 1 / Math.cos(e)) / Math.PI) / 2;
    return Math.floor(o * this._getMapSize(i));
  }
  /*
   * 从经纬度获取某一级别瓦片坐标编号
   */
  lnglatToTile(t, i, e) {
    const o = this._lngToTileX(t, e), l = this._latToTileY(i, e);
    return {
      tileX: o,
      tileY: l
    };
  }
  _lngToPixelX(t, i) {
    const e = (t + 180) / 360;
    return Math.floor(e * this._getMapSize(i) * 256 % 256);
  }
  _latToPixelY(t, i) {
    const e = Math.sin(t * Math.PI / 180), o = 0.5 - Math.log((1 + e) / (1 - e)) / (4 * Math.PI);
    return Math.floor(o * this._getMapSize(i) * 256 % 256);
  }
  /*
   * 从经纬度获取点在某一级别瓦片中的像素坐标
   */
  lnglatToPixel(t, i, e) {
    const o = this._lngToPixelX(t, e), l = this._latToPixelY(i, e);
    return {
      pixelX: o,
      pixelY: l
    };
  }
  _pixelXTolng(t, i, e) {
    const o = t / 256;
    return (i + o) / this._getMapSize(e) * 360 - 180;
  }
  _pixelYToLat(t, i, e) {
    const o = t / 256;
    return Math.atan(S(Math.PI * (1 - 2 * (i + o) / this._getMapSize(e)))) * 180 / Math.PI;
  }
  /*
   * 从某一瓦片的某一像素点到经纬度
   */
  pixelToLnglat(t, i, e, o, l) {
    const r = this._pixelXTolng(t, e, l), u = this._pixelYToLat(i, o, l);
    return {
      lng: r,
      lat: u
    };
  }
}
function y(n, t) {
  for (var i in t)
    t.hasOwnProperty(i) && (n[i] = t[i]);
  return n;
}
function I(n, t) {
  for (var i in t)
    n[i] = t[i];
}
function X(n) {
  return typeof n == "string";
}
var Y = void 0, p = null;
function a(n, t) {
  isNaN(n) && (n = Ib(n), n = isNaN(n) ? 0 : n), X(n) && (n = parseFloat(n)), isNaN(t) && (t = Ib(t), t = isNaN(t) ? 0 : t), X(t) && (t = parseFloat(t)), this.lng = n, this.lat = t;
}
a.TL = function(n) {
  return n && 180 >= n.lng && -180 <= n.lng && 74 >= n.lat && -74 <= n.lat;
};
a.prototype.lb = function(n) {
  return n && this.lat == n.lat && this.lng == n.lng;
};
function M(n, t) {
  this.x = n || 0, this.y = t || 0, this.x = this.x, this.y = this.y;
}
M.prototype.lb = function(n) {
  return n && n.x == this.x && n.y == this.y;
};
function P() {
}
P.prototype.nh = function() {
  aa("lngLatToPoint方法未实现");
};
P.prototype.wi = function() {
  aa("pointToLngLat方法未实现");
};
function c() {
}
c.prototype = new P();
y(c, {
  $O: 637099681e-2,
  lG: [1289059486e-2, 836237787e-2, 5591021, 348198983e-2, 167804312e-2, 0],
  Au: [75, 60, 45, 30, 15, 0],
  fP: [
    [
      1410526172116255e-23,
      898305509648872e-20,
      -1.9939833816331,
      200.9824383106796,
      -187.2403703815547,
      91.6087516669843,
      -23.38765649603339,
      2.57121317296198,
      -0.03801003308653,
      173379812e-1
    ],
    [
      -7435856389565537e-24,
      8983055097726239e-21,
      -0.78625201886289,
      96.32687599759846,
      -1.85204757529826,
      -59.36935905485877,
      47.40033549296737,
      -16.50741931063887,
      2.28786674699375,
      1026014486e-2
    ],
    [
      -3030883460898826e-23,
      898305509983578e-20,
      0.30071316287616,
      59.74293618442277,
      7.357984074871,
      -25.38371002664745,
      13.45380521110908,
      -3.29883767235584,
      0.32710905363475,
      685681737e-2
    ],
    [
      -1981981304930552e-23,
      8983055099779535e-21,
      0.03278182852591,
      40.31678527705744,
      0.65659298677277,
      -4.44255534477492,
      0.85341911805263,
      0.12923347998204,
      -0.04625736007561,
      448277706e-2
    ],
    [
      309191371068437e-23,
      8983055096812155e-21,
      6995724062e-14,
      23.10934304144901,
      -23663490511e-14,
      -0.6321817810242,
      -0.00663494467273,
      0.03430082397953,
      -0.00466043876332,
      25551644e-1
    ],
    [
      2890871144776878e-24,
      8983055095805407e-21,
      -3068298e-14,
      7.47137025468032,
      -353937994e-14,
      -0.02145144861037,
      -1234426596e-14,
      10322952773e-14,
      -323890364e-14,
      826088.5
    ]
  ],
  iG: [
    [
      -0.0015702102444,
      111320.7020616939,
      1704480524535203,
      -10338987376042340,
      26112667856603880,
      -35149669176653700,
      26595700718403920,
      -10725012454188240,
      1800819912950474,
      82.5
    ],
    [
      8277824516172526e-19,
      111320.7020463578,
      6477955746671607e-7,
      -4082003173641316e-6,
      1077490566351142e-5,
      -1517187553151559e-5,
      1205306533862167e-5,
      -5124939663577472e-6,
      9133119359512032e-7,
      67.5
    ],
    [
      0.00337398766765,
      111320.7020202162,
      4481351045890365e-9,
      -2339375119931662e-8,
      7968221547186455e-8,
      -1159649932797253e-7,
      9723671115602145e-8,
      -4366194633752821e-8,
      8477230501135234e-9,
      52.5
    ],
    [
      0.00220636496208,
      111320.7020209128,
      51751.86112841131,
      3796837749470245e-9,
      992013.7397791013,
      -122195221711287e-8,
      1340652697009075e-9,
      -620943.6990984312,
      144416.9293806241,
      37.5
    ],
    [
      -3441963504368392e-19,
      111320.7020576856,
      278.2353980772752,
      2485758690035394e-9,
      6070.750963243378,
      54821.18345352118,
      9540.606633304236,
      -2710.55326746645,
      1405.483844121726,
      22.5
    ],
    [
      -3218135878613132e-19,
      111320.7020701615,
      0.00369383431289,
      823725.6402795718,
      0.46104986909093,
      2351.343141331292,
      1.58060784298199,
      8.77738589078284,
      0.37238884252424,
      7.45
    ]
  ],
  Z1: function(o, t) {
    if (!o || !t)
      return 0;
    var i, e, o = this.Fb(o);
    return o ? (i = this.Tk(o.lng), e = this.Tk(o.lat), t = this.Fb(t), t ? this.Pe(i, this.Tk(t.lng), e, this.Tk(t.lat)) : 0) : 0;
  },
  Vo: function(n, t) {
    return !n || !t ? 0 : (n.lng = this.JD(n.lng, -180, 180), n.lat = this.ND(n.lat, -74, 74), t.lng = this.JD(t.lng, -180, 180), t.lat = this.ND(t.lat, -74, 74), this.Pe(this.Tk(n.lng), this.Tk(t.lng), this.Tk(n.lat), this.Tk(t.lat)));
  },
  Fb: function(n) {
    if (n === p || n === Y)
      return new a(0, 0);
    var t, i;
    t = new a(Math.abs(n.lng), Math.abs(n.lat));
    for (var e = 0; e < this.lG.length; e++)
      if (t.lat >= this.lG[e]) {
        i = this.fP[e];
        break;
      }
    return n = this.gK(n, i), n = new a(n.lng.toFixed(6), n.lat.toFixed(6));
  },
  Eb: function(n) {
    if (n === p || n === Y || 180 < n.lng || -180 > n.lng || 90 < n.lat || -90 > n.lat)
      return new a(0, 0);
    var t, i;
    n.lng = this.JD(n.lng, -180, 180), n.lat = this.ND(n.lat, -74, 74), t = new a(n.lng, n.lat);
    for (var e = 0; e < this.Au.length; e++)
      if (t.lat >= this.Au[e]) {
        i = this.iG[e];
        break;
      }
    if (!i) {
      for (e = 0; e < this.Au.length; e++)
        if (t.lat <= -this.Au[e]) {
          i = this.iG[e];
          break;
        }
    }
    return n = this.gK(n, i), n = new a(n.lng.toFixed(2), n.lat.toFixed(2));
  },
  gK: function(n, t) {
    if (n && t) {
      var i = t[0] + t[1] * Math.abs(n.lng), e = Math.abs(n.lat) / t[9], e = t[2] + t[3] * e + t[4] * e * e + t[5] * e * e * e + t[6] * e * e * e * e + t[7] * e * e * e * e * e + t[8] * e * e * e * e * e * e, i = i * (0 > n.lng ? -1 : 1), e = e * (0 > n.lat ? -1 : 1);
      return new a(i, e);
    }
  },
  Pe: function(n, t, i, e) {
    return this.$O * Math.acos(Math.sin(i) * Math.sin(e) + Math.cos(i) * Math.cos(e) * Math.cos(t - n));
  },
  Tk: function(n) {
    return Math.PI * n / 180;
  },
  Z3: function(n) {
    return 180 * n / Math.PI;
  },
  ND: function(n, t, i) {
    return t != p && (n = Math.max(n, t)), i != p && (n = Math.min(n, i)), n;
  },
  JD: function(n, t, i) {
    for (; n > i; )
      n -= i - t;
    for (; n < t; )
      n += i - t;
    return n;
  }
});
y(c.prototype, {
  Jm: function(n) {
    return c.Eb(n);
  },
  nh: function(n) {
    return n = c.Eb(n), new M(n.lng, n.lat);
  },
  qh: function(n) {
    return c.Fb(n);
  },
  wi: function(n) {
    return n = new a(n.x, n.y), c.Fb(n);
  },
  fc: function(n, t, i, e, o) {
    if (n)
      return n = this.Jm(n, o), t = this.Lc(t), new M(Math.round((n.lng - i.lng) / t + e.width / 2), Math.round((i.lat - n.lat) / t + e.height / 2));
  },
  zb: function(n, t, i, e, o) {
    if (n)
      return t = this.Lc(t), this.qh(new a(i.lng + t * (n.x - e.width / 2), i.lat - t * (n.y - e.height / 2)), o);
  },
  Lc: function(n) {
    return Math.pow(2, 18 - n);
  }
});
var f = c.prototype;
I(f, {
  lngLatToPoint: f.nh,
  pointToLngLat: f.wi
});
let _ = {
  Point: a,
  Pixel: M,
  MercatorProjection: c
};
class k {
  constructor(t, i) {
    T(this, "levelMax");
    T(this, "levelMin");
    T(this, "projection");
    this.levelMax = t, this.levelMin = i, this.projection = new _.MercatorProjection();
  }
  _getRetain(t) {
    return 2 ** (t - 18);
  }
  /*
   * 分辨率，表示水平方向上一个像素点代表的真实距离(m)
   * 百度地图18级时的平面坐标就是地图距离原点的距离(m)
   * 使用{lng:180, lat:0}时候的pointX是否等于地球赤道长一半来验证
   */
  getResolution(t, i) {
    return 2 ** (18 - i) * Math.cos(t);
  }
  /*
   * 从经纬度到百度平面坐标
   */
  lnglatToPoint(t, i) {
    const e = new _.Point(t, i), o = this.projection.lngLatToPoint(e);
    return {
      pointX: o.x,
      pointY: o.y
    };
  }
  /*
   * 从百度平面坐标到经纬度
   */
  pointToLnglat(t, i) {
    const e = new _.Pixel(t, i), o = this.projection.pointToLngLat(e);
    return {
      lng: o.lng,
      lat: o.lat
    };
  }
  _lngToTileX(t, i) {
    const e = this.lnglatToPoint(t, 0);
    return Math.floor(e.pointX * this._getRetain(i) / 256);
  }
  _latToTileY(t, i) {
    const e = this.lnglatToPoint(0, t);
    return Math.floor(e.pointY * this._getRetain(i) / 256);
  }
  /*
   * 从经纬度获取某一级别瓦片编号
   */
  lnglatToTile(t, i, e) {
    const o = this._lngToTileX(t, e), l = this._latToTileY(i, e);
    return {
      tileX: o,
      tileY: l
    };
  }
  _lngToPixelX(t, i) {
    const e = this._lngToTileX(t, i), o = this.lnglatToPoint(t, 0);
    return Math.floor(o.pointX * this._getRetain(i) - e * 256);
  }
  _latToPixelY(t, i) {
    const e = this._latToTileY(t, i), o = this.lnglatToPoint(0, t);
    return Math.floor(o.pointY * this._getRetain(i) - e * 256);
  }
  /*
   * 从经纬度到瓦片的像素坐标
   */
  lnglatToPixel(t, i, e) {
    const o = this._lngToPixelX(t, e), l = this._latToPixelY(i, e);
    return {
      pixelX: o,
      pixelY: l
    };
  }
  _pixelXToLng(t, i, e) {
    const o = (i * 256 + t) / this._getRetain(e);
    return this.pointToLnglat(o, 0).lng;
  }
  _pixelYToLat(t, i, e) {
    const o = (i * 256 + t) / this._getRetain(e);
    return this.pointToLnglat(0, o).lat;
  }
  /*
   * 从某一瓦片的某一像素点到经纬度
   */
  pixelToLnglat(t, i, e, o, l) {
    const r = (e * 256 + t) / this._getRetain(l), u = (o * 256 + i) / this._getRetain(l);
    return this.pointToLnglat(r, u);
  }
}
function d(n) {
  return (Math.exp(n) - Math.exp(-n)) / 2;
}
class G {
  constructor(t, i) {
    T(this, "levelMax");
    T(this, "levelMin");
    this.levelMax = t, this.levelMin = i;
  }
  /*
   * 某一瓦片等级下瓦片地图X轴(Y轴)上的瓦片数目
   */
  _getMapSize(t) {
    return 2 ** t;
  }
  /*
   * 分辨率，表示水平方向上一个像素点代表的真实距离(m)
   */
  getResolution(t, i) {
    return 12756274 * Math.PI * Math.cos(t) / 256 / this._getMapSize(i);
  }
  _lngToTileX(t, i) {
    const e = (t + 180) / 360;
    let o = Math.floor(e * this._getMapSize(i));
    return o = Math.min(o, 2 ** i - 1), o;
  }
  _latToTileY(t, i) {
    const e = t * Math.PI / 180, o = (1 + Math.log(Math.tan(e) + 1 / Math.cos(e)) / Math.PI) / 2;
    return Math.floor(o * this._getMapSize(i));
  }
  /*
   * 从经纬度获取某一级别瓦片坐标编号
   */
  lnglatToTile(t, i, e) {
    const o = this._lngToTileX(t, e), l = this._latToTileY(i, e);
    return {
      tileX: o,
      tileY: l
    };
  }
  _lngToPixelX(t, i) {
    const e = (t + 180) / 360;
    return Math.floor(e * this._getMapSize(i) * 256 % 256);
  }
  _latToPixelY(t, i) {
    const e = Math.sin(t * Math.PI / 180), o = 0.5 + Math.log((1 + e) / (1 - e)) / (4 * Math.PI);
    return 255 - Math.floor(o * this._getMapSize(i) * 256 % 256);
  }
  /*
   * 从经纬度获取点在某一级别瓦片中的像素坐标
   */
  lnglatToPixel(t, i, e) {
    const o = this._lngToPixelX(t, e), l = this._latToPixelY(i, e);
    return {
      pixelX: o,
      pixelY: l
    };
  }
  _pixelXTolng(t, i, e) {
    const o = t / 256;
    return (i + o) / this._getMapSize(e) * 360 - 180;
  }
  _pixelYToLat(t, i, e) {
    const o = t / 256;
    return Math.atan(d(Math.PI * (-1 + 2 * (i + 1 - o) / this._getMapSize(e)))) * 180 / Math.PI;
  }
  /*
   * 从某一瓦片的某一像素点到经纬度
   */
  pixelToLnglat(t, i, e, o, l) {
    const r = this._pixelXTolng(t, e, l), u = this._pixelYToLat(i, o, l);
    return {
      lng: r,
      lat: u
    };
  }
}
class z extends x {
  constructor(t, i) {
    super(t, i);
  }
  lnglatToQuadkey(t, i, e) {
    let o = t.toString(2), l = i.toString(2);
    o = "0".repeat(e - o.length) + o, l = "0".repeat(e - l.length) + l;
    let r = "";
    for (let g = 0; g < e; g++)
      r = r + l[g] + o[g];
    return r = r.replace(/^0*/, ""), Number.parseInt(r, 2).toString(4);
  }
  quadkeyToLnglat(t) {
    const i = t.length;
    let o = Number.parseInt(t, 4).toString(2);
    o.length % 2 !== 0 && (o = `0${o}`);
    let l = "", r = "";
    for (let g = 0; g < o.length; g++)
      g % 2 === 0 ? l = l + o[g] : r = r + o[g];
    const u = Number.parseInt(l, 2);
    return {
      tileX: Number.parseInt(r, 2),
      tileY: u,
      level: i
    };
  }
}
const s = {
  Gaode: "Gaode",
  Google: "Google",
  Baidu: "Baidu",
  OSM: "OSM",
  Tencent: "Tencent",
  Bing: "Bing"
}, h = {
  [s.Gaode]: {
    min: 1,
    max: 19
  },
  [s.Google]: {
    min: 0,
    max: 21
  },
  [s.OSM]: {
    min: 0,
    max: 19
  },
  [s.Baidu]: {
    min: 3,
    max: 18
  },
  [s.Tencent]: {
    min: 3,
    max: 19
  },
  [s.Bing]: {
    min: 3,
    max: 19
  }
}, N = new x(
  h[s.Gaode].max,
  h[s.Gaode].min
), B = new x(
  h[s.Google].max,
  h[s.Google].min
), R = new x(
  h[s.OSM].max,
  h[s.OSM].min
), F = new k(
  h[s.Baidu].max,
  h[s.Baidu].min
), v = new G(
  h[s.Tencent].max,
  h[s.Tencent].min
), A = new z(
  h[s.Bing].max,
  h[s.Bing].min
), D = {
  TileLnglatTransformGaode: N,
  TileLnglatTransformGoogle: B,
  TileLnglatTransformOSM: R,
  TileLnglatTransformBaidu: F,
  TileLnglatTransformTencent: v,
  TileLnglatTransformBing: A
};
export {
  D as default
};
