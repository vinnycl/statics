(function(e) {
    function t(t) {
        for (var r, s, i = t[0], c = t[1], l = t[2], d = 0, h = []; d < i.length; d++) s = i[d], o[s] && h.push(o[s][0]), o[s] = 0;
        for (r in c) Object.prototype.hasOwnProperty.call(c, r) && (e[r] = c[r]);
        u && u(t);
        while (h.length) h.shift()();
        return n.push.apply(n, l || []), a()
    }

    function a() {
        for (var e, t = 0; t < n.length; t++) {
            for (var a = n[t], r = !0, i = 1; i < a.length; i++) {
                var c = a[i];
                0 !== o[c] && (r = !1)
            }
            r && (n.splice(t--, 1), e = s(s.s = a[0]))
        }
        return e
    }
    var r = {},
        o = { app: 0 },
        n = [];

    function s(t) { if (r[t]) return r[t].exports; var a = r[t] = { i: t, l: !1, exports: {} }; return e[t].call(a.exports, a, a.exports, s), a.l = !0, a.exports }
    s.m = e, s.c = r, s.d = function(e, t, a) { s.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: a }) }, s.r = function(e) { "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, s.t = function(e, t) {
        if (1 & t && (e = s(e)), 8 & t) return e;
        if (4 & t && "object" === typeof e && e && e.__esModule) return e;
        var a = Object.create(null);
        if (s.r(a), Object.defineProperty(a, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e)
            for (var r in e) s.d(a, r, function(t) { return e[t] }.bind(null, r));
        return a
    }, s.n = function(e) { var t = e && e.__esModule ? function() { return e["default"] } : function() { return e }; return s.d(t, "a", t), t }, s.o = function(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, s.p = "";
    var i = window["webpackJsonp"] = window["webpackJsonp"] || [],
        c = i.push.bind(i);
    i.push = t, i = i.slice();
    for (var l = 0; l < i.length; l++) t(i[l]);
    var u = c;
    n.push([0, "chunk-vendors"]), a()
})({
    0: function(e, t, a) { e.exports = a("56d7") },
    "034f": function(e, t, a) {
        "use strict";
        var r = a("85ec"),
            o = a.n(r);
        o.a
    },
    "12d7": function(e, t, a) {
        "use strict";
        var r = a("9503"),
            o = a.n(r);
        o.a
    },
    "2d51": function(e, t, a) {
        "use strict";
        var r = a("ae8d"),
            o = a.n(r);
        t["default"] = o.a
    },
    "56d7": function(e, t, a) {
        "use strict";
        a.r(t);
        var r = a("2b0e"),
            o = function() {
                var e = this,
                    t = e.$createElement,
                    a = e._self._c || t;
                return a("div", { attrs: { id: "app" } }, [a("router-view")], 1)
            },
            n = [],
            s = (a("034f"), a("2877")),
            i = {},
            c = Object(s["a"])(i, o, n, !1, null, null, null),
            l = c.exports,
            u = a("8c4f"),
            d = function() {
                var e = this,
                    t = e.$createElement,
                    a = e._self._c || t;
                return a("div", { staticClass: "home" }, [a("wallPaper"), a("weather")], 1)
            },
            h = [],
            b = function() {
                var e = this,
                    t = e.$createElement;
                e._self._c;
                return e._m(0)
            },
            f = [function() {
                var e = this,
                    t = e.$createElement,
                    a = e._self._c || t;
                return a("div", { staticClass: "mainsite" }, [a("h1", [e._v("Main site")])])
            }],
            p = { name: "Mainsite" },
            m = p,
            w = Object(s["a"])(m, b, f, !1, null, null, null),
            v = (w.exports, function() {
                var e = this,
                    t = e.$createElement,
                    a = e._self._c || t;
                return a("div")
            }),
            k = [],
            g = a("bc3a"),
            C = a.n(g),
            y = a("3452"),
            S = {
                getWallpaper() { return C.a.get("http://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1").then(e => { return e.data }) },
                getClimate(e, t) {
                    let a = "https://weather-ydn-yql.media.yahoo.com/forecastrss",
                        r = "GET",
                        o = "ASpGMX54",
                        n = "dj0yJmk9eWt4QjNlbjVVZmJZJnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PTUy",
                        s = "9bf04d1c4b1f102de53a56822f16ecdb608554ba",
                        i = "&",
                        c = { lat: `${e}`, lon: `${t}`, format: "json" },
                        l = { oauth_consumer_key: n, oauth_nonce: Math.random().toString(36).substring(2), oauth_signature_method: "HMAC-SHA1", oauth_timestamp: parseInt((new Date).getTime() / 1e3).toString(), oauth_version: "1.0" },
                        u = {};
                    var d = function(e) {
                        e = e || {};
                        for (var t = 1; t < arguments.length; t++)
                            if (arguments[t])
                                for (var a in arguments[t]) arguments[t].hasOwnProperty(a) && (e[a] = arguments[t][a]);
                        return e
                    };
                    d(u, c, l);
                    let h = Object.keys(u).sort().map(function(e) { return [e + "=" + encodeURIComponent(u[e])] }),
                        b = r + i + encodeURIComponent(a) + i + encodeURIComponent(h.join(i)),
                        f = encodeURIComponent(s) + i,
                        p = y["HmacSHA1"](b, f),
                        m = p.toString(y["enc"].Base64);
                    l["oauth_signature"] = m;
                    let w = "OAuth " + Object.keys(l).map(function(e) { return [e + '="' + l[e] + '"'] }).join(","),
                        v = { headers: { Authorization: w, "Yahoo-App-Id": o } };
                    return C.a.get(a + "?" + `lat=${c.lat}&lon=${c.lon}&format=${c.format}`, v).then(e => { return e.data })
                }
            },
            _ = { name: "Wallpaper", data() { return { errorWallpaper: !1 } }, beforeMount() { this.getWallpaper() }, methods: { getWallpaper() { return S.getWallpaper().then(e => { this.setWallpaper(e) }).catch(() => this.errorWallpaper = !0) }, setWallpaper(e) { document.body.style.backgroundImage = `url(http://www.bing.com${e.images[0].url})` } } },
            T = _,
            P = Object(s["a"])(T, v, k, !1, null, null, null),
            O = P.exports,
            M = function() {
                var e = this,
                    t = e.$createElement,
                    a = e._self._c || t;
                return a("main", { staticClass: "content" }, [a("h1", { staticClass: "colors", on: { click: function(t) { return e.showMenuOtherPlaces() } } }, [a("span", { staticClass: "icon-font" }, [e._v("( ")]), e._v(" " + e._s(e.weather.city) + ", " + e._s(e.weather.region))]), a("ul", { staticClass: "other-places colors" }, [a("li", { on: { click: function(t) { return e.getSaoPauloPosition() } } }, [e._v("São Paulo, SP")]), a("li", { on: { click: function(t) { return e.getVitoriaPosition() } } }, [e._v("Vitoria, ES")]), a("li", { on: { click: function(t) { return e.getBeloHorizontePosition() } } }, [e._v("Belo Horizonte, MG")])]), a("div", { staticClass: "box-condition colors todayC" }, [a("span", { staticClass: "icon-font" }, [e._v("\n            " + e._s(e._f("iconWeather")(e.weather.condition)) + "\n        ")]), a("span", { staticClass: "data" }, [e._v("Hoje")]), a("span", { staticClass: "converter", on: { click: function(t) { return e.convertTemperature() } } }, [a("span", { staticClass: "celsius" }, [e._v(e._s(e.weather.todayC) + "˚C")]), a("span", { staticClass: "fahrenheit" }, [e._v(e._s(e.weather.today) + "˚F")])]), a("span", { staticClass: "weather" }, [e._v(e._s(e._f("translate")(e.weather.condition)))]), a("ul", { staticClass: "wind-list" }, [a("li", [e._v("Vento: " + e._s(e.weather.windDirection) + " " + e._s(e.weather.windSpeed) + " km/h")]), a("li", [e._v("Humidade: " + e._s(e.weather.humidity) + "%")]), a("li", [e._v("Pressão: " + e._s(e.weather.pressure) + "hPA")])])]), a("div", { staticClass: "box-condition colors tomorrowC" }, [a("span", { staticClass: "data" }, [e._v("Amanhã")]), a("span", { staticClass: "celsius" }, [e._v(e._s(e.weather.tomorrowC) + "˚C")]), a("span", { staticClass: "fahrenheit" }, [e._v(e._s(e.weather.tomorrow) + "˚F")])]), a("div", { staticClass: "box-condition colors afterC" }, [a("span", { staticClass: "data" }, [e._v("Depois de amanhã")]), a("span", { staticClass: "celsius" }, [e._v(e._s(e.weather.afterC) + "˚C")]), a("span", { staticClass: "fahrenheit" }, [e._v(e._s(e.weather.after) + "˚F")])])])
            },
            N = [],
            E = {
                data() { return { lat: "", long: "", errorLocation: !1 } },
                computed: { weather() { return this.$store.state.weather } },
                beforeMount() { this.getGeolocation() },
                updated() { this.setGradient(this.weather) },
                methods: {
                    getGeolocation() { navigator.geolocation ? navigator.geolocation.getCurrentPosition(e => { this.lat = e.coords.latitude, this.long = e.coords.longitude, this.getClimate(this.lat, this.long), this.errorLocation = !1 }, e => { e.code === e.PERMISSION_DENIED && (this.errorLocation = !0) }) : this.errorLocation = !0 },
                    getClimate(e, t) { return S.getClimate(e, t).then(e => { this.$store.commit("SET_WEATHER", e) }).catch().finally() },
                    setGradient(e) {
                        let t = document.querySelector(".colors.todayC"),
                            a = document.querySelector(".colors.tomorrowC"),
                            r = document.querySelector(".colors.afterC"),
                            o = 15,
                            n = 35;
                        e.todayC < o ? t.classList.add("background-blue") : e.todayC > n ? t.classList.add("background-red") : t.classList.add("background-yellow"), e.tomorrowC < o ? a.classList.add("background-blue") : e.tomorrowC > n ? a.classList.add("background-red") : a.classList.add("background-yellow"), e.afterC < o ? r.classList.add("background-blue") : e.afterC > n ? r.classList.add("background-red") : r.classList.add("background-yellow")
                    },
                    convertTemperature() {
                        let e = document.querySelector(".content");
                        e.classList.toggle("fahrenheit")
                    },
                    showMenuOtherPlaces() {
                        let e = document.querySelector(".other-places");
                        e.classList.toggle("show")
                    },
                    getSaoPauloPosition() { this.getClimate("-23.533773", "-46.625290"), this.showMenuOtherPlaces() },
                    getVitoriaPosition() { this.getClimate("-20.2976", "-40.2958"), this.showMenuOtherPlaces() },
                    getBeloHorizontePosition() { this.getClimate("-19.8157", "-43.9542"), this.showMenuOtherPlaces() }
                }
            },
            L = E,
            $ = (a("12d7"), Object(s["a"])(L, M, N, !1, null, "6db728aa", null)),
            j = $.exports,
            x = { name: "Home", components: { Weather: j, WallPaper: O } },
            z = x,
            W = (a("cccb"), Object(s["a"])(z, d, h, !1, null, null, null)),
            H = W.exports,
            F = a("dda8");
        r["a"].use(u["a"]);
        var I = new u["a"]({ routes: [{ path: "/", name: "home", component: H }, { path: "/error", name: "error", component: F["default"] }] }),
            R = a("2f62");

        function D(e) { return e >= 0 && e <= 11.25 ? "N" : e > 11.25 && e <= 33.75 ? "NNE" : e > 33.75 && e <= 56.25 ? "NE" : e > 56.25 && e <= 78.75 ? "LNE" : e > 78.75 && e <= 101.25 ? "L" : e > 101.25 && e <= 123.75 ? "LSE" : e > 123.75 && e <= 146.25 ? "SE" : e > 146.25 && e <= 168.75 ? "SSE" : e > 168.75 && e <= 191.25 ? "S" : e > 191.25 && e <= 213.75 ? "SSO" : e > 213.75 && e <= 236.25 ? "SO" : e > 236.25 && e <= 258.75 ? "OSE" : e > 258.75 && e <= 281.25 ? "O" : e > 281.25 && e <= 303.75 ? "ONO" : e > 303.75 && e <= 326.25 ? "NO" : e > 326.25 && e <= 348.75 ? "NNO" : void 0 }

        function A(e) { var t = 5 * (e - 32) / 9; return Math.round(t) }

        function G(e, t) { return (e + t) / 2 }

        function B(e) { return Math.round(33.863886666667 * e) }

        function V(e) { return Math.round(3.6 * e) }

        function X(e) { return Math.round(e) }
        r["a"].use(R["a"]);
        var Z = new R["a"].Store({
                state: { weather: { city: "", region: "", condition: "", country: "", today: "", todayC: "", tomorrow: "", after: "", tomorrowC: "", afterC: "", windSpeed: "", windDirection: "", humidity: "", pressure: "" } },
                mutations: {
                    SET_WEATHER(e, t) {
                        let a = t;
                        e.weather.country = a.location.country, e.weather.city = a.location.city, e.weather.region = a.location.region, e.weather.condition = a.current_observation.condition.text, e.weather.today = `${X(a.current_observation.condition.temperature)}`, e.weather.tomorrow = `${X(G(a.forecasts[1].high,a.forecasts[1].low))}`, e.weather.after = `${X(G(a.forecasts[2].high,a.forecasts[2].low))}`, e.weather.todayC = `${A(a.current_observation.condition.temperature)}`, e.weather.tomorrowC = `${A(G(a.forecasts[1].high,a.forecasts[1].low))}`, e.weather.afterC = `${A(G(a.forecasts[2].high,a.forecasts[2].low))}`, e.weather.windSpeed = `${V(a.current_observation.wind.speed)}`, e.weather.windDirection = `${D(a.current_observation.wind.direction)}`, e.weather.humidity = a.current_observation.atmosphere.humidity, e.weather.pressure = `${B(a.current_observation.atmosphere.pressure)}`
                    }
                }
            }),
            q = {
                filters: {
                    translate: function(e) {
                        let t = "";
                        switch (e) {
                            case "Tornado":
                                t = "Tornado";
                                break;
                            case "Tropical Storm":
                                t = "Temp. Tropical";
                                break;
                            case "Hurricane":
                                t = "Furacão";
                                break;
                            case "Severe Thunderstorms":
                                t = "Temp. Severas";
                                break;
                            case "Thunderstorms":
                                t = "Trovoadas";
                                break;
                            case "Mixed Rain and Snow":
                                t = "Chuva e Neve";
                                break;
                            case "Mixed Rain and Sleet":
                                t = "Chuva e Granizo";
                                break;
                            case "Mixed Snow and Sleet":
                                t = "Neve e Granizo";
                                break;
                            case "Freezing Drizzle":
                                t = "Chuvisco Cong.";
                                break;
                            case "Drizzle":
                                t = "Chuvisco";
                                break;
                            case "Freezing Rain":
                                t = "Chuva Congelante";
                                break;
                            case "Showers":
                                t = "Chuva Forte";
                                break;
                            case "Snow Flurries":
                                t = "Flocos de Neve";
                                break;
                            case "Light Snow Showers":
                                t = "Nevasca Leve";
                                break;
                            case "Blowing Snow":
                                t = "Temp. de Neve";
                                break;
                            case "Snow":
                                t = "Neve";
                                break;
                            case "Hail":
                                t = "Granizo";
                                break;
                            case "Sleet":
                                t = "Granizo";
                                break;
                            case "Foggy":
                                t = "Nebuloso";
                                break;
                            case "Haze":
                                t = "Neblina";
                                break;
                            case "Smoky":
                                t = "Nevoeiro";
                                break;
                            case "Blustery":
                                t = "Tempestade";
                                break;
                            case "Windy":
                                t = "Ventania";
                                break;
                            case "Cold":
                                t = "Frio";
                                break;
                            case "Cloudy":
                                t = "Nublado";
                                break;
                            case "Mostly Cloudy":
                                t = "Pred. Nublado";
                                break;
                            case "Partly Cloudy":
                                t = "Parc. Nublado";
                                break;
                            case "Clear":
                                t = "Céu Limpo";
                                break;
                            case "Sunny":
                                t = "Ensolarado";
                                break;
                            case "Fair":
                                t = "Bom";
                                break;
                            case "Hot":
                                t = "Calor";
                                break;
                            case "Isolated Thunderstorms":
                                t = "Temp. Isoladas";
                                break;
                            case "Scattered Thunderstorms":
                                t = "Temp. Dispersas";
                                break;
                            case "Scattered Showers":
                                t = "Chuvas Isoladas";
                                break;
                            case "Heavy Snow":
                                t = "Neve Pesada";
                                break;
                            case "Thundershowers":
                                t = "Trovoadas";
                                break;
                            case "Isolated Thundershowers":
                                t = "Trov. Isoladas";
                                break;
                            default:
                                t = "Não Disponível"
                        }
                        return t
                    },
                    iconWeather: function(e) {
                        let t = "";
                        switch (e) {
                            case "Tornado":
                                t = "F";
                                break;
                            case "Tropical Storm":
                                t = "Z";
                                break;
                            case "Severe Thunderstorms":
                                t = "&";
                                break;
                            case "Thunderstorms":
                                t = "0";
                                break;
                            case "Mixed Rain and Snow":
                                t = "X";
                                break;
                            case "Mixed Rain and Sleet":
                                t = "R";
                                break;
                            case "Mixed Snow and Sleet":
                                t = "W";
                                break;
                            case "Freezing Drizzle":
                                t = "X";
                                break;
                            case "Drizzle":
                                t = "Q";
                                break;
                            case "Freezing Rain":
                                t = "X";
                                break;
                            case "Showers":
                                t = "R";
                                break;
                            case "Snow Flurries":
                                t = "U";
                                break;
                            case "Light Snow Showers":
                                t = "W";
                                break;
                            case "Blowing Snow":
                                t = "W";
                                break;
                            case "Snow":
                                t = "V";
                                break;
                            case "Hail":
                                t = "X";
                                break;
                            case "Sleet":
                                t = "X";
                                break;
                            case "Foggy":
                                t = "Y";
                                break;
                            case "Haze":
                                t = "L";
                                break;
                            case "Smoky":
                                t = "L";
                                break;
                            case "Blustery":
                                t = "0";
                                break;
                            case "Windy":
                                t = "F";
                                break;
                            case "Cold":
                                t = "G";
                                break;
                            case "Cloudy":
                                t = "L";
                                break;
                            case "Mostly Cloudy":
                                t = "%";
                                break;
                            case "Partly Cloudy":
                                t = "Y";
                                break;
                            case "Clear":
                                t = "N";
                                break;
                            case "Sunny":
                                t = "B";
                                break;
                            case "Fair":
                                t = "N";
                                break;
                            case "Hot":
                                t = "B";
                                break;
                            case "Isolated Thunderstorms":
                                t = "P";
                                break;
                            case "Scattered Thunderstorms":
                                t = "R";
                                break;
                            case "Scattered Showers":
                                t = "T";
                                break;
                            case "Heavy Snow":
                                t = "W";
                                break;
                            case "Thundershowers":
                                t = "0";
                                break;
                            case "Isolated Thundershowers":
                                t = "0";
                                break;
                            case "Location":
                                t = "(";
                                break;
                            default:
                                t = ")"
                        }
                        return `${t}`
                    }
                },
                create: function(e) { Object.keys(this.filters).forEach(function(t) { e.filter(t, this.filters[t]) }.bind(this)) }
            };
        r["a"].config.productionTip = !1, q.create(r["a"]), new r["a"]({ router: I, store: Z, render: e => e(l) }).$mount("#app")
    },
    "5ced": function(e, t, a) {},
    "85ec": function(e, t, a) {},
    "919b": function(e, t, a) {
        "use strict";
        var r = function() {
                var e = this,
                    t = e.$createElement,
                    a = e._self._c || t;
                return a("div", { staticClass: "error" }, [a("h1", [e._v(" error ")]), a("universe")], 1)
            },
            o = [];
        a.d(t, "a", function() { return r }), a.d(t, "b", function() { return o })
    },
    9503: function(e, t, a) {},
    ae8d: function(e, t) {},
    cccb: function(e, t, a) {
        "use strict";
        var r = a("5ced"),
            o = a.n(r);
        o.a
    },
    dda8: function(e, t, a) {
        "use strict";
        var r = a("919b"),
            o = a("2d51"),
            n = a("2877"),
            s = Object(n["a"])(o["default"], r["a"], r["b"], !1, null, null, null);
        t["default"] = s.exports
    }
});
//# sourceMappingURL=app.70de12ed.js.map