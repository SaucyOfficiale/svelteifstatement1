
var MemberSpace = window.MemberSpace || {"subdomain":"saucy"}; (function(d){ var s = d.createElement("script"); s.src = "https://cdn.memberspace.com/scripts/widgets.js"; var e = d.getElementsByTagName("script")[0]; e.parentNode.insertBefore(s,e); }(document));



function showJoinDiv(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.querySelector('.jointhesaucyfam2').style.display = 'block';
    }
  });
}

const observer1 = new IntersectionObserver(showJoinDiv, { threshold: 0 });

window.addEventListener('DOMContentLoaded', () => {
  const showjointhesaucyfam = document.querySelector('#showjointhesaucyfam');
  observer1.observe(showjointhesaucyfam);
});








function hideJoinDiv(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.querySelector('.jointhesaucyfam2').style.display = 'none';
    }
  });
}

const observer2 = new IntersectionObserver(hideJoinDiv, { threshold: 0 });

window.addEventListener('DOMContentLoaded', () => {
  const hidejointhesaucyfam = document.querySelector('#hidejointhesaucyfam');
  observer2.observe(hidejointhesaucyfam);
});




function discord() {
  document.querySelector("#closesaucybox3").style.display = "none";
  document.querySelector("#saucyboxright").style.display = "none";
  document.querySelector("#colorfuldots5").style.display = "none";
  document.querySelector("#iframe5").style.display = "none";
  var script = document.createElement('script');
  script.src = "https://cdn.jsdelivr.net/npm/@widgetbot/crate@3.5.5/umd/crate.min.js";

  // Set a callback function to be executed when the script is loaded
  script.onload = function () {
    // Initialize Crate after the script is loaded
    new Crate({
      server: "741551787764482048",
      channel: "741551788221792280",
      color: "#000",
      glyph: ["/uploads/branding/infinity.png", "90%"],
    });

    // Hide elements
  };

  // Append the script element to the document to load the script
  document.head.appendChild(script);
}


var hypesaucy1=document.getElementById("hypesaucy1"),rotation=parseFloat(localStorage.getItem("hypesaucy1rotation"))||0,scale=parseFloat(localStorage.getItem("hypesaucy1scale"))||1;function hypesaucy1rotate(e){"+"===e?rotation+=15:"-"===e&&(rotation-=15),hypesaucy1.style.transform="rotate("+rotation+"deg) scale("+scale+")",localStorage.setItem("hypesaucy1rotation",JSON.stringify(rotation))}function hypesaucy1rescale(e){(scale+=.1*e)<.1&&(scale=.1),hypesaucy1.style.transform="rotate("+rotation+"deg) scale("+scale+")",localStorage.setItem("hypesaucy1scale",JSON.stringify(scale))}hypesaucy1.style.transform="rotate("+rotation+"deg) scale("+scale+")";
var vibessaucy=document.getElementById("vibesaucy1"),rotation=parseFloat(localStorage.getItem("vibessaucyrotation"))||0,scale=parseFloat(localStorage.getItem("vibessaucyscale"))||1;function vibessaucyrotate(e){"+"===e?rotation+=15:"-"===e&&(rotation-=15),vibessaucy.style.transform="rotate("+rotation+"deg) scale("+scale+")",localStorage.setItem("vibessaucyrotation",JSON.stringify(rotation))}function vibessaucyrescale(e){(scale+=.1*e)<.1&&(scale=.1),vibessaucy.style.transform="rotate("+rotation+"deg) scale("+scale+")",localStorage.setItem("vibessaucyscale",JSON.stringify(scale))}vibessaucy.style.transform="rotate("+rotation+"deg) scale("+scale+")";
var community=document.getElementById("community"),rotation=parseFloat(localStorage.getItem("communityrotation"))||0,scale=parseFloat(localStorage.getItem("communityscale"))||1;function communityrotate(e){"+"===e?rotation+=15:"-"===e&&(rotation-=15),community.style.transform="rotate("+rotation+"deg) scale("+scale+")",localStorage.setItem("communityrotation",JSON.stringify(rotation))}function communityrescale(e){(scale+=.1*e)<.1&&(scale=.1),community.style.transform="rotate("+rotation+"deg) scale("+scale+")",localStorage.setItem("communityscale",JSON.stringify(scale))}community.style.transform="rotate("+rotation+"deg) scale("+scale+")";var hamburger=document.querySelector('.hamburger'),rotation=parseFloat(localStorage.getItem("hamburgerrotation"))||0,scale=parseFloat(localStorage.getItem("hamburgerscale"))||1;function hamburgerrotate(e){"+"===e?rotation+=15:"-"===e&&(rotation-=15),hamburger.style.transform="rotate("+rotation+"deg) scale("+scale+")",localStorage.setItem("hamburgerrotation",JSON.stringify(rotation))}function hamburgerrescale(e){(scale+=.1*e)<.1&&(scale=.1),hamburger.style.transform="rotate("+rotation+"deg) scale("+scale+")",localStorage.setItem("hamburgerscale",JSON.stringify(scale))}hamburger.style.transform="rotate("+rotation+"deg) scale("+scale+")";
var saucycommunity=document.getElementById("saucycommunity"),rotation=parseFloat(localStorage.getItem("saucycommunityrotation"))||0,scale=parseFloat(localStorage.getItem("saucycommunityscale"))||1;function saucycommunityrotate(e){"+"===e?rotation+=15:"-"===e&&(rotation-=15),saucycommunity.style.transform="rotate("+rotation+"deg) scale("+scale+")",localStorage.setItem("saucycommunityrotation",JSON.stringify(rotation))}function saucycommunityrescale(e){(scale+=.1*e)<.1&&(scale=.1),saucycommunity.style.transform="rotate("+rotation+"deg) scale("+scale+")",localStorage.setItem("saucycommunityscale",JSON.stringify(scale))}saucycommunity.style.transform="rotate("+rotation+"deg) scale("+scale+")";var hamburger=document.querySelector('.hamburger'),rotation=parseFloat(localStorage.getItem("hamburgerrotation"))||0,scale=parseFloat(localStorage.getItem("hamburgerscale"))||1;function hamburgerrotate(e){"+"===e?rotation+=15:"-"===e&&(rotation-=15),hamburger.style.transform="rotate("+rotation+"deg) scale("+scale+")",localStorage.setItem("hamburgerrotation",JSON.stringify(rotation))}function hamburgerrescale(e){(scale+=.1*e)<.1&&(scale=.1),hamburger.style.transform="rotate("+rotation+"deg) scale("+scale+")",localStorage.setItem("hamburgerscale",JSON.stringify(scale))}hamburger.style.transform="rotate("+rotation+"deg) scale("+scale+")";
var saucypreset1=document.getElementById("saucypreset1"),rotation=parseFloat(localStorage.getItem("saucypreset1rotation"))||0,scale=parseFloat(localStorage.getItem("saucypreset1scale"))||1;function saucypreset1rotate(e){"+"===e?rotation+=15:"-"===e&&(rotation-=15),saucypreset1.style.transform="rotate("+rotation+"deg) scale("+scale+")",localStorage.setItem("saucypreset1rotation",JSON.stringify(rotation))}function saucypreset1rescale(e){(scale+=.1*e)<.1&&(scale=.1),saucypreset1.style.transform="rotate("+rotation+"deg) scale("+scale+")",localStorage.setItem("saucypreset1scale",JSON.stringify(scale))}saucypreset1.style.transform="rotate("+rotation+"deg) scale("+scale+")";
var saucypreset2=document.getElementById("saucypreset2"),rotation=parseFloat(localStorage.getItem("saucypreset2rotation"))||0,scale=parseFloat(localStorage.getItem("saucypreset2scale"))||1;function saucypreset2rotate(e){"+"===e?rotation+=15:"-"===e&&(rotation-=15),saucypreset2.style.transform="rotate("+rotation+"deg) scale("+scale+")",localStorage.setItem("saucypreset2rotation",JSON.stringify(rotation))}function saucypreset2rescale(e){(scale+=.1*e)<.1&&(scale=.1),saucypreset2.style.transform="rotate("+rotation+"deg) scale("+scale+")",localStorage.setItem("saucypreset2scale",JSON.stringify(scale))}saucypreset2.style.transform="rotate("+rotation+"deg) scale("+scale+")";
var saucypreset3=document.getElementById("saucypreset3"),rotation=parseFloat(localStorage.getItem("saucypreset3rotation"))||0,scale=parseFloat(localStorage.getItem("saucypreset3scale"))||1;function saucypreset3rotate(e){"+"===e?rotation+=15:"-"===e&&(rotation-=15),saucypreset3.style.transform="rotate("+rotation+"deg) scale("+scale+")",localStorage.setItem("saucypreset3rotation",JSON.stringify(rotation))}function saucypreset3rescale(e){(scale+=.1*e)<.1&&(scale=.1),saucypreset3.style.transform="rotate("+rotation+"deg) scale("+scale+")",localStorage.setItem("saucypreset3scale",JSON.stringify(scale))}saucypreset3.style.transform="rotate("+rotation+"deg) scale("+scale+")";
var saucypreset4=document.getElementById("saucypreset4"),rotation=parseFloat(localStorage.getItem("saucypreset4rotation"))||0,scale=parseFloat(localStorage.getItem("saucypreset4scale"))||1;function saucypreset4rotate(e){"+"===e?rotation+=15:"-"===e&&(rotation-=15),saucypreset4.style.transform="rotate("+rotation+"deg) scale("+scale+")",localStorage.setItem("saucypreset4rotation",JSON.stringify(rotation))}function saucypreset4rescale(e){(scale+=.1*e)<.1&&(scale=.1),saucypreset4.style.transform="rotate("+rotation+"deg) scale("+scale+")",localStorage.setItem("saucypreset4scale",JSON.stringify(scale))}saucypreset4.style.transform="rotate("+rotation+"deg) scale("+scale+")";
var individual=document.getElementById("individual"),rotation=parseFloat(localStorage.getItem("individualrotation"))||0,scale=parseFloat(localStorage.getItem("individualscale"))||1;function individualrotate(e){"+"===e?rotation+=15:"-"===e&&(rotation-=15),individual.style.transform="rotate("+rotation+"deg) scale("+scale+")",localStorage.setItem("individualrotation",JSON.stringify(rotation))}function individualrescale(e){(scale+=.1*e)<.1&&(scale=.1),individual.style.transform="rotate("+rotation+"deg) scale("+scale+")",localStorage.setItem("individualscale",JSON.stringify(scale))}individual.style.transform="rotate("+rotation+"deg) scale("+scale+")";
var community=document.getElementById("community"),rotation=parseFloat(localStorage.getItem("communityrotation"))||0,scale=parseFloat(localStorage.getItem("communityscale"))||1;function communityrotate(e){"+"===e?rotation+=15:"-"===e&&(rotation-=15),community.style.transform="rotate("+rotation+"deg) scale("+scale+")",localStorage.setItem("communityrotation",JSON.stringify(rotation))}function communityrescale(e){(scale+=.1*e)<.1&&(scale=.1),community.style.transform="rotate("+rotation+"deg) scale("+scale+")",localStorage.setItem("communityscale",JSON.stringify(scale))}community.style.transform="rotate("+rotation+"deg) scale("+scale+")";
var logonav=document.querySelector('.logonav'),rotation=parseFloat(localStorage.getItem("logonavrotation"))||0,scale=parseFloat(localStorage.getItem("logonavscale"))||1;function logonavrotate(e){"+"===e?rotation+=15:"-"===e&&(rotation-=15),logonav.style.transform="rotate("+rotation+"deg) scale("+scale+")",localStorage.setItem("logonavrotation",JSON.stringify(rotation))}function logonavrescale(e){(scale+=.1*e)<.1&&(scale=.1),logonav.style.transform="rotate("+rotation+"deg) scale("+scale+")",localStorage.setItem("logonavscale",JSON.stringify(scale))}logonav.style.transform="rotate("+rotation+"deg) scale("+scale+")";
var notes=document.getElementById("notes"),rotation=parseFloat(localStorage.getItem("notesrotation"))||0,scale=parseFloat(localStorage.getItem("notesscale"))||1;function notesrotate(e){"+"===e?rotation+=15:"-"===e&&(rotation-=15),notes.style.transform="rotate("+rotation+"deg) scale("+scale+")",localStorage.setItem("notesrotation",JSON.stringify(rotation))}function notesrescale(e){(scale+=.1*e)<.1&&(scale=.1),notes.style.transform="rotate("+rotation+"deg) scale("+scale+")",localStorage.setItem("notesscale",JSON.stringify(scale))}notes.style.transform="rotate("+rotation+"deg) scale("+scale+")";
var chatgpt=document.getElementById("chatgpt"),rotation=parseFloat(localStorage.getItem("chatgptrotation"))||0,scale=parseFloat(localStorage.getItem("chatgptscale"))||1;function chatgptrotate(e){"+"===e?rotation+=15:"-"===e&&(rotation-=15),chatgpt.style.transform="rotate("+rotation+"deg) scale("+scale+")",localStorage.setItem("chatgptrotation",JSON.stringify(rotation))}function chatgptrescale(e){(scale+=.1*e)<.1&&(scale=.1),chatgpt.style.transform="rotate("+rotation+"deg) scale("+scale+")",localStorage.setItem("chatgptscale",JSON.stringify(scale))}chatgpt.style.transform="rotate("+rotation+"deg) scale("+scale+")";
var assistant=document.getElementById("assistant"),rotation=parseFloat(localStorage.getItem("assistantrotation"))||0,scale=parseFloat(localStorage.getItem("assistantscale"))||1;function assistantrotate(e){"+"===e?rotation+=15:"-"===e&&(rotation-=15),assistant.style.transform="rotate("+rotation+"deg) scale("+scale+")",localStorage.setItem("assistantrotation",JSON.stringify(rotation))}function assistantrescale(e){(scale+=.1*e)<.1&&(scale=.1),assistant.style.transform="rotate("+rotation+"deg) scale("+scale+")",localStorage.setItem("assistantscale",JSON.stringify(scale))}assistant.style.transform="rotate("+rotation+"deg) scale("+scale+")";
var intelligence=document.getElementById("intelligence"),rotation=parseFloat(localStorage.getItem("intelligencerotation"))||0,scale=parseFloat(localStorage.getItem("intelligencescale"))||1;function intelligencerotate(e){"+"===e?rotation+=15:"-"===e&&(rotation-=15),intelligence.style.transform="rotate("+rotation+"deg) scale("+scale+")",localStorage.setItem("intelligencerotation",JSON.stringify(rotation))}function intelligencerescale(e){(scale+=.1*e)<.1&&(scale=.1),intelligence.style.transform="rotate("+rotation+"deg) scale("+scale+")",localStorage.setItem("intelligencescale",JSON.stringify(scale))}intelligence.style.transform="rotate("+rotation+"deg) scale("+scale+")";
var feed=document.getElementById("feed"),rotation=parseFloat(localStorage.getItem("feedrotation"))||0,scale=parseFloat(localStorage.getItem("feedscale"))||1;function feedrotate(e){"+"===e?rotation+=15:"-"===e&&(rotation-=15),feed.style.transform="rotate("+rotation+"deg) scale("+scale+")",localStorage.setItem("feedrotation",JSON.stringify(rotation))}function feedrescale(e){(scale+=.1*e)<.1&&(scale=.1),feed.style.transform="rotate("+rotation+"deg) scale("+scale+")",localStorage.setItem("feedscale",JSON.stringify(scale))}feed.style.transform="rotate("+rotation+"deg) scale("+scale+")";
var myself=document.getElementById("myself"),rotation=parseFloat(localStorage.getItem("myselfrotation"))||0,scale=parseFloat(localStorage.getItem("myselfscale"))||1;function myselfrotate(e){"+"===e?rotation+=15:"-"===e&&(rotation-=15),myself.style.transform="rotate("+rotation+"deg) scale("+scale+")",localStorage.setItem("myselfrotation",JSON.stringify(rotation))}function myselfrescale(e){(scale+=.1*e)<.1&&(scale=.1),myself.style.transform="rotate("+rotation+"deg) scale("+scale+")",localStorage.setItem("myselfscale",JSON.stringify(scale))}myself.style.transform="rotate("+rotation+"deg) scale("+scale+")";
var quickactionssaucy=document.getElementById("quickactionssaucy"),rotation=parseFloat(localStorage.getItem("quickactionssaucyrotation"))||0,scale=parseFloat(localStorage.getItem("quickactionssaucyscale"))||1;function quickactionssaucyrotate(e){"+"===e?rotation+=15:"-"===e&&(rotation-=15),quickactionssaucy.style.transform="rotate("+rotation+"deg) scale("+scale+")",localStorage.setItem("quickactionssaucyrotation",JSON.stringify(rotation))}function quickactionssaucyrescale(e){(scale+=.1*e)<.1&&(scale=.1),quickactionssaucy.style.transform="rotate("+rotation+"deg) scale("+scale+")",localStorage.setItem("quickactionssaucyscale",JSON.stringify(scale))}quickactionssaucy.style.transform="rotate("+rotation+"deg) scale("+scale+")";
var videos=document.getElementById("videos"),rotation=parseFloat(localStorage.getItem("videosrotation"))||0,scale=parseFloat(localStorage.getItem("videosscale"))||1;function videosrotate(e){"+"===e?rotation+=15:"-"===e&&(rotation-=15),videos.style.transform="rotate("+rotation+"deg) scale("+scale+")",localStorage.setItem("videosrotation",JSON.stringify(rotation))}function videosrescale(e){(scale+=.1*e)<.1&&(scale=.1),videos.style.transform="rotate("+rotation+"deg) scale("+scale+")",localStorage.setItem("videosscale",JSON.stringify(scale))}videos.style.transform="rotate("+rotation+"deg) scale("+scale+")";
var timesaucy=document.getElementById("timesaucy"),rotation=parseFloat(localStorage.getItem("timesaucyrotation"))||0,scale=parseFloat(localStorage.getItem("timesaucyscale"))||1;function timesaucyrotate(e){"+"===e?rotation+=15:"-"===e&&(rotation-=15),timesaucy.style.transform="rotate("+rotation+"deg) scale("+scale+")",localStorage.setItem("timesaucyrotation",JSON.stringify(rotation))}function timesaucyrescale(e){(scale+=.1*e)<.1&&(scale=.1),timesaucy.style.transform="rotate("+rotation+"deg) scale("+scale+")",localStorage.setItem("timesaucyscale",JSON.stringify(scale))}timesaucy.style.transform="rotate("+rotation+"deg) scale("+scale+")";
var hypesaucy=document.getElementById("hypeaucy1"),rotation=parseFloat(localStorage.getItem("hypesaucyrotation"))||0,scale=parseFloat(localStorage.getItem("hypesaucyscale"))||1;function hypesaucyrotate(e){"+"===e?rotation+=15:"-"===e&&(rotation-=15),hypesaucy.style.transform="rotate("+rotation+"deg) scale("+scale+")",localStorage.setItem("hypesaucyrotation",JSON.stringify(rotation))}function hypesaucyrescale(e){(scale+=.1*e)<.1&&(scale=.1),hypesaucy.style.transform="rotate("+rotation+"deg) scale("+scale+")",localStorage.setItem("hypesaucyscale",JSON.stringify(scale))}hypesaucy.style.transform="rotate("+rotation+"deg) scale("+scale+")";
var hidesaucy2=document.getElementById("hidesaucy2"),rotation=parseFloat(localStorage.getItem("hidesaucy2rotation"))||0,scale=parseFloat(localStorage.getItem("hidesaucy2scale"))||1;function hidesaucy2rotate(e){"+"===e?rotation+=15:"-"===e&&(rotation-=15),hidesaucy2.style.transform="rotate("+rotation+"deg) scale("+scale+")",localStorage.setItem("hidesaucy2rotation",JSON.stringify(rotation))}function hidesaucy2rescale(e){(scale+=.1*e)<.1&&(scale=.1),hidesaucy2.style.transform="rotate("+rotation+"deg) scale("+scale+")",localStorage.setItem("hidesaucy2scale",JSON.stringify(scale))}hidesaucy2.style.transform="rotate("+rotation+"deg) scale("+scale+")";
var trashcan=document.getElementById("trashcan"),rotation=parseFloat(localStorage.getItem("trashcanrotation"))||0,scale=parseFloat(localStorage.getItem("trashcanscale"))||1;function trashcanrotate(e){"+"===e?rotation+=15:"-"===e&&(rotation-=15),trashcan.style.transform="rotate("+rotation+"deg) scale("+scale+")",localStorage.setItem("trashcanrotation",JSON.stringify(rotation))}function trashcanrescale(e){(scale+=.1*e)<.1&&(scale=.1),trashcan.style.transform="rotate("+rotation+"deg) scale("+scale+")",localStorage.setItem("trashcanscale",JSON.stringify(scale))}trashcan.style.transform="rotate("+rotation+"deg) scale("+scale+")";

var clouds=document.getElementById("clouds"),rotation=parseFloat(localStorage.getItem("cloudsrotation"))||0,scale=parseFloat(localStorage.getItem("cloudsscale"))||1;function cloudsrotate(e){"+"===e?rotation+=15:"-"===e&&(rotation-=15),clouds.style.transform="rotate("+rotation+"deg) scale("+scale+")",localStorage.setItem("cloudsrotation",JSON.stringify(rotation))}function cloudsrescale(e){(scale+=.1*e)<.1&&(scale=.1),clouds.style.transform="rotate("+rotation+"deg) scale("+scale+")",localStorage.setItem("cloudsscale",JSON.stringify(scale))}clouds.style.transform="rotate("+rotation+"deg) scale("+scale+")";
var planet=document.getElementById("planet"),rotation=parseFloat(localStorage.getItem("planetrotation"))||0,scale=parseFloat(localStorage.getItem("planetscale"))||1;function planetrotate(e){"+"===e?rotation+=15:"-"===e&&(rotation-=15),planet.style.transform="rotate("+rotation+"deg) scale("+scale+")",localStorage.setItem("planetrotation",JSON.stringify(rotation))}function planetrescale(e){(scale+=.1*e)<.1&&(scale=.1),planet.style.transform="rotate("+rotation+"deg) scale("+scale+")",localStorage.setItem("planetscale",JSON.stringify(scale))}planet.style.transform="rotate("+rotation+"deg) scale("+scale+")";
var saucytimesaucy2=document.getElementById("saucytimesaucy2"),rotation=parseFloat(localStorage.getItem("saucytimesaucy2rotation"))||0,scale=parseFloat(localStorage.getItem("saucytimesaucy2scale"))||1;function saucytimesaucy2rotate(e){"+"===e?rotation+=15:"-"===e&&(rotation-=15),saucytimesaucy2.style.transform="rotate("+rotation+"deg) scale("+scale+")",localStorage.setItem("saucytimesaucy2rotation",JSON.stringify(rotation))}function saucytimesaucy2rescale(e){(scale+=.1*e)<.1&&(scale=.1),saucytimesaucy2.style.transform="rotate("+rotation+"deg) scale("+scale+")",localStorage.setItem("saucytimesaucy2scale",JSON.stringify(scale))}saucytimesaucy2.style.transform="rotate("+rotation+"deg) scale("+scale+")";
var waves=document.getElementById("waves"),rotation=parseFloat(localStorage.getItem("wavesrotation"))||0,scale=parseFloat(localStorage.getItem("wavesscale"))||1;function wavesrotate(e){"+"===e?rotation+=15:"-"===e&&(rotation-=15),waves.style.transform="rotate("+rotation+"deg) scale("+scale+")",localStorage.setItem("wavesrotation",JSON.stringify(rotation))}function wavesrescale(e){(scale+=.1*e)<.1&&(scale=.1),waves.style.transform="rotate("+rotation+"deg) scale("+scale+")",localStorage.setItem("wavesscale",JSON.stringify(scale))}waves.style.transform="rotate("+rotation+"deg) scale("+scale+")";





document.addEventListener('touchmove', function (event) {
  if (event.scale !== 1) { event.preventDefault(); }
}, { passive: false });


function saucyloader() {
  document.getElementById("loading").style.display = "none";
}

function saucyenter() {
  // Create a new Image object
  const image = new Image();
  // Set the src attribute to the URL of the image you want to preload
  image.src = "/uploads/gif/rainbow2.gif";
  document.getElementById("loading").style.top = "45%";
  $("body").delay(0).fadeIn(0);
  $("#saucysauce").delay(0).fadeOut(0);
  $("#saucys").delay(0).fadeOut(0);
  $(".select-box").delay(0).fadeOut(0);
}


function saucydemo() {
  var MemberSpace = window.MemberSpace || { subdomain: "saucy" };
  (function (d) {
    var s = d.createElement("script");
    s.src = "https://cdn.memberspace.com/scripts/widgets.js";
    var e = d.getElementsByTagName("script")[0];
    e.parentNode.insertBefore(s, e);
  })(document);
  document.getElementById("loading").style.top = "45%";
  // Create a new Image object
  const image = new Image();
  // Set the src attribute to the URL of the image you want to preload
  image.src = "/uploads/gif/rainbow2.gif";
  $("body").delay(0).fadeIn(0);
  $("#saucysauce").delay(0).fadeOut(0);
  $("#saucys").delay(0).fadeOut(0);
  $(".select-box").delay(0).fadeOut(0);
}

function demosaucy() {
  saucydemo();
  driver.start();
}

function presets() {
  load1();
  load2();
  load3();
  load4();
}

document.querySelector("#loading").addEventListener("wheel", preventScroll);

!(function (t, e) {
  !(function t(e, n, a, i) {
    var o = !!(
      e.Worker &&
      e.Blob &&
      e.Promise &&
      e.OffscreenCanvas &&
      e.OffscreenCanvasRenderingContext2D &&
      e.HTMLCanvasElement &&
      e.HTMLCanvasElement.prototype.transferControlToOffscreen &&
      e.URL &&
      e.URL.createObjectURL
    );
    function r() {}
    function l(t) {
      var a = n.exports.Promise,
        i = void 0 !== a ? a : e.Promise;
      return "function" == typeof i ? new i(t) : (t(r, r), null);
    }
    var c,
      s,
      u,
      h,
      f,
      d,
      m,
      g,
      b,
      v =
        ((u = Math.floor(1e3 / 60)),
        (h = {}),
        (f = 0),
        "function" == typeof requestAnimationFrame &&
        "function" == typeof cancelAnimationFrame
          ? ((c = function (t) {
              var e = Math.random();
              return (
                (h[e] = requestAnimationFrame(function n(a) {
                  f === a || f + u - 1 < a
                    ? ((f = a), delete h[e], t())
                    : (h[e] = requestAnimationFrame(n));
                })),
                e
              );
            }),
            (s = function (t) {
              h[t] && cancelAnimationFrame(h[t]);
            }))
          : ((c = function (t) {
              return setTimeout(t, u);
            }),
            (s = function (t) {
              return clearTimeout(t);
            })),
        { frame: c, cancel: s }),
      M =
        ((g = {}),
        function () {
          if (d) return d;
          if (!a && o) {
            var e = [
              "var CONFETTI, SIZE = {}, module = {};",
              "(" + t.toString() + ")(this, module, true, SIZE);",
              "onmessage = function(msg) {",
              "  if (msg.data.options) {",
              "    CONFETTI(msg.data.options).then(function () {",
              "      if (msg.data.callback) {",
              "        postMessage({ callback: msg.data.callback });",
              "      }",
              "    });",
              "  } else if (msg.data.reset) {",
              "    CONFETTI && CONFETTI.reset();",
              "  } else if (msg.data.resize) {",
              "    SIZE.width = msg.data.resize.width;",
              "    SIZE.height = msg.data.resize.height;",
              "  } else if (msg.data.canvas) {",
              "    SIZE.width = msg.data.canvas.width;",
              "    SIZE.height = msg.data.canvas.height;",
              "    CONFETTI = module.exports.create(msg.data.canvas);",
              "  }",
              "}",
            ].join("\n");
            try {
              d = new Worker(URL.createObjectURL(new Blob([e])));
            } catch (t) {
              return (
                void 0 !== typeof console &&
                  "function" == typeof console.warn &&
                  console.warn("🎊 Could not load worker", t),
                null
              );
            }
            !(function (t) {
              function e(e, n) {
                t.postMessage({ options: e || {}, callback: n });
              }
              (t.init = function (e) {
                var n = e.transferControlToOffscreen();
                t.postMessage({ canvas: n }, [n]);
              }),
                (t.fire = function (n, a, i) {
                  if (m) return e(n, null), m;
                  var o = Math.random().toString(36).slice(2);
                  return (m = l(function (a) {
                    function r(e) {
                      e.data.callback === o &&
                        (delete g[o],
                        t.removeEventListener("message", r),
                        (m = null),
                        i(),
                        a());
                    }
                    t.addEventListener("message", r),
                      e(n, o),
                      (g[o] = r.bind(null, { data: { callback: o } }));
                  }));
                }),
                (t.reset = function () {
                  for (var e in (t.postMessage({ reset: !0 }), g))
                    g[e](), delete g[e];
                });
            })(d);
          }
          return d;
        }),
      p = {
        particleCount: 50,
        angle: 90,
        spread: 45,
        startVelocity: 45,
        decay: 0.9,
        gravity: 1,
        drift: 0,
        ticks: 200,
        x: 0.5,
        y: 0.5,
        shapes: ["square", "circle"],
        zIndex: 100,
        colors: [
          "#26ccff",
          "#a25afd",
          "#ff5e7e",
          "#88ff5a",
          "#fcff42",
          "#ffa62d",
          "#ff36ff",
        ],
        disableForReducedMotion: !1,
        scalar: 1,
      };
    function y(t, e, n) {
      return (function (t, e) {
        return e ? e(t) : t;
      })(t && null != t[e] ? t[e] : p[e], n);
    }
    function w(t) {
      return t < 0 ? 0 : Math.floor(t);
    }
    function x(t) {
      return parseInt(t, 16);
    }
    function C(t) {
      return t.map(T);
    }
    function T(t) {
      var e = String(t).replace(/[^0-9a-f]/gi, "");
      return (
        e.length < 6 && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]),
        {
          r: x(e.substring(0, 2)),
          g: x(e.substring(2, 4)),
          b: x(e.substring(4, 6)),
        }
      );
    }
    function I(t) {
      (t.width = document.documentElement.clientWidth),
        (t.height = document.documentElement.clientHeight);
    }
    function k(t) {
      var e = t.getBoundingClientRect();
      (t.width = e.width), (t.height = e.height);
    }
    function E(t, e, n, o, r) {
      var c,
        s,
        u = e.slice(),
        h = t.getContext("2d"),
        f = l(function (e) {
          function l() {
            (c = s = null), h.clearRect(0, 0, o.width, o.height), r(), e();
          }
          (c = v.frame(function e() {
            !a ||
              (o.width === i.width && o.height === i.height) ||
              ((o.width = t.width = i.width), (o.height = t.height = i.height)),
              o.width ||
                o.height ||
                (n(t), (o.width = t.width), (o.height = t.height)),
              h.clearRect(0, 0, o.width, o.height),
              (u = u.filter(function (t) {
                return (function (t, e) {
                  (e.x += Math.cos(e.angle2D) * e.velocity + e.drift),
                    (e.y += Math.sin(e.angle2D) * e.velocity + e.gravity),
                    (e.wobble += e.wobbleSpeed),
                    (e.velocity *= e.decay),
                    (e.tiltAngle += 0.1),
                    (e.tiltSin = Math.sin(e.tiltAngle)),
                    (e.tiltCos = Math.cos(e.tiltAngle)),
                    (e.random = Math.random() + 2),
                    (e.wobbleX = e.x + 10 * e.scalar * Math.cos(e.wobble)),
                    (e.wobbleY = e.y + 10 * e.scalar * Math.sin(e.wobble));
                  var n = e.tick++ / e.totalTicks,
                    a = e.x + e.random * e.tiltCos,
                    i = e.y + e.random * e.tiltSin,
                    o = e.wobbleX + e.random * e.tiltCos,
                    r = e.wobbleY + e.random * e.tiltSin;
                  if (
                    ((t.fillStyle =
                      "rgba(" +
                      e.color.r +
                      ", " +
                      e.color.g +
                      ", " +
                      e.color.b +
                      ", " +
                      (1 - n) +
                      ")"),
                    t.beginPath(),
                    "circle" === e.shape)
                  )
                    t.ellipse
                      ? t.ellipse(
                          e.x,
                          e.y,
                          Math.abs(o - a) * e.ovalScalar,
                          Math.abs(r - i) * e.ovalScalar,
                          (Math.PI / 10) * e.wobble,
                          0,
                          2 * Math.PI
                        )
                      : (function (t, e, n, a, i, o, r, l, c) {
                          t.save(),
                            t.translate(e, n),
                            t.rotate(o),
                            t.scale(a, i),
                            t.arc(0, 0, 1, r, l, c),
                            t.restore();
                        })(
                          t,
                          e.x,
                          e.y,
                          Math.abs(o - a) * e.ovalScalar,
                          Math.abs(r - i) * e.ovalScalar,
                          (Math.PI / 10) * e.wobble,
                          0,
                          2 * Math.PI
                        );
                  else if ("star" === e.shape)
                    for (
                      var l = (Math.PI / 2) * 3,
                        c = 4 * e.scalar,
                        s = 8 * e.scalar,
                        u = e.x,
                        h = e.y,
                        f = 5,
                        d = Math.PI / f;
                      f--;

                    )
                      (u = e.x + Math.cos(l) * s),
                        (h = e.y + Math.sin(l) * s),
                        t.lineTo(u, h),
                        (l += d),
                        (u = e.x + Math.cos(l) * c),
                        (h = e.y + Math.sin(l) * c),
                        t.lineTo(u, h),
                        (l += d);
                  else
                    t.moveTo(Math.floor(e.x), Math.floor(e.y)),
                      t.lineTo(Math.floor(e.wobbleX), Math.floor(i)),
                      t.lineTo(Math.floor(o), Math.floor(r)),
                      t.lineTo(Math.floor(a), Math.floor(e.wobbleY));
                  return t.closePath(), t.fill(), e.tick < e.totalTicks;
                })(h, t);
              })),
              u.length ? (c = v.frame(e)) : l();
          })),
            (s = l);
        });
      return {
        addFettis: function (t) {
          return (u = u.concat(t)), f;
        },
        canvas: t,
        promise: f,
        reset: function () {
          c && v.cancel(c), s && s();
        },
      };
    }
    function S(t, n) {
      var a,
        i = !t,
        r = !!y(n || {}, "resize"),
        c = y(n, "disableForReducedMotion", Boolean),
        s = o && !!y(n || {}, "useWorker") ? M() : null,
        u = i ? I : k,
        h = !(!t || !s) && !!t.__confetti_initialized,
        f =
          "function" == typeof matchMedia &&
          matchMedia("(prefers-reduced-motion)").matches;
      function d(e, n, i) {
        for (
          var o,
            r,
            l,
            c,
            s,
            h = y(e, "particleCount", w),
            f = y(e, "angle", Number),
            d = y(e, "spread", Number),
            m = y(e, "startVelocity", Number),
            g = y(e, "decay", Number),
            b = y(e, "gravity", Number),
            v = y(e, "drift", Number),
            M = y(e, "colors", C),
            p = y(e, "ticks", Number),
            x = y(e, "shapes"),
            T = y(e, "scalar"),
            I = (function (t) {
              var e = y(t, "origin", Object);
              return (e.x = y(e, "x", Number)), (e.y = y(e, "y", Number)), e;
            })(e),
            k = h,
            S = [],
            F = t.width * I.x,
            N = t.height * I.y;
          k--;

        )
          S.push(
            ((o = {
              x: F,
              y: N,
              angle: f,
              spread: d,
              startVelocity: m,
              color: M[k % M.length],
              shape:
                x[
                  ((c = 0),
                  (s = x.length),
                  Math.floor(Math.random() * (s - c)) + c)
                ],
              ticks: p,
              decay: g,
              gravity: b,
              drift: v,
              scalar: T,
            }),
            (r = void 0),
            (l = void 0),
            (r = o.angle * (Math.PI / 180)),
            (l = o.spread * (Math.PI / 180)),
            {
              x: o.x,
              y: o.y,
              wobble: 10 * Math.random(),
              wobbleSpeed: Math.min(0.11, 0.1 * Math.random() + 0.05),
              velocity: 0.5 * o.startVelocity + Math.random() * o.startVelocity,
              angle2D: -r + (0.5 * l - Math.random() * l),
              tiltAngle: (0.5 * Math.random() + 0.25) * Math.PI,
              color: o.color,
              shape: o.shape,
              tick: 0,
              totalTicks: o.ticks,
              decay: o.decay,
              drift: o.drift,
              random: Math.random() + 2,
              tiltSin: 0,
              tiltCos: 0,
              wobbleX: 0,
              wobbleY: 0,
              gravity: 3 * o.gravity,
              ovalScalar: 0.6,
              scalar: o.scalar,
            })
          );
        return a ? a.addFettis(S) : (a = E(t, S, u, n, i)).promise;
      }
      function m(n) {
        var o = c || y(n, "disableForReducedMotion", Boolean),
          m = y(n, "zIndex", Number);
        if (o && f)
          return l(function (t) {
            t();
          });
        i && a
          ? (t = a.canvas)
          : i &&
            !t &&
            ((t = (function (t) {
              var e = document.createElement("canvas");
              return (
                (e.style.position = "fixed"),
                (e.style.top = "0px"),
                (e.style.left = "0px"),
                (e.style.pointerEvents = "none"),
                (e.style.zIndex = t),
                e
              );
            })(m)),
            document.body.appendChild(t)),
          r && !h && u(t);
        var g = { width: t.width, height: t.height };
        function b() {
          if (s) {
            var e = {
              getBoundingClientRect: function () {
                if (!i) return t.getBoundingClientRect();
              },
            };
            return (
              u(e),
              void s.postMessage({
                resize: { width: e.width, height: e.height },
              })
            );
          }
          g.width = g.height = null;
        }
        function v() {
          (a = null),
            r && e.removeEventListener("resize", b),
            i && t && (document.body.removeChild(t), (t = null), (h = !1));
        }
        return (
          s && !h && s.init(t),
          (h = !0),
          s && (t.__confetti_initialized = !0),
          r && e.addEventListener("resize", b, !1),
          s ? s.fire(n, g, v) : d(n, g, v)
        );
      }
      return (
        (m.reset = function () {
          s && s.reset(), a && a.reset();
        }),
        m
      );
    }
    function F() {
      return b || (b = S(null, { useWorker: !0, resize: !0 })), b;
    }
    (n.exports = function () {
      return F().apply(this, arguments);
    }),
      (n.exports.reset = function () {
        F().reset();
      }),
      (n.exports.create = S);
  })(
    (function () {
      return void 0 !== t ? t : "undefined" != typeof self ? self : this || {};
    })(),
    e,
    !1
  ),
    (t.confetti = e.exports);
})(window, {});

var saucyconfetti = document.createElement("canvas");
saucyconfetti.id = "saucyconfetti";
document.body.appendChild(saucyconfetti);
var confettisaucy = confetti.create(saucyconfetti, {
  resize: true,
  useWorker: true,
});
let el2 = document.getElement("canvas");
el2.ariaLabel = "confetti";

function saucynfts() {
  window.location = "https://poof.io/@Saucy";
  target = "_blank";
}

function preset1() {
  document.getElementById("url1").style.display = "block";
  document.getElementById("save1").style.display = "block";
  document.getElementById("navigation").style.display = "none";
}

function save1() {
  var myURL1 = document.getElementById("url1");
  localStorage.setItem("url1", myURL1.value);
}
function load1() {
  var stored1Value = localStorage.getItem("url1");
  var link1Tag = document.getElementById("link1");
  var url1Input = document.getElementById("url1");
  if (stored1Value) {
    url1Input.value = stored1Value;
    link1Tag.href = stored1Value;
  }
}

function preset2() {
  document.getElementById("url2").style.display = "block";
  document.getElementById("save2").style.display = "block";
  document.getElementById("navigation").style.display = "none";
}

function save2() {
  var myURL2 = document.getElementById("url2");
  localStorage.setItem("url2", myURL2.value);
}
function load2() {
  var stored2Value = localStorage.getItem("url2");
  var link2Tag = document.getElementById("link2");
  var url2Input = document.getElementById("url2");
  if (stored2Value) {
    url2Input.value = stored2Value;
    link2Tag.href = stored2Value;
  }
}

function preset3() {
  document.getElementById("url3").style.display = "block";
  document.getElementById("save3").style.display = "block";
  document.getElementById("navigation").style.display = "none";
}

function save3() {
  var myURL3 = document.getElementById("url3");
  localStorage.setItem("url3", myURL3.value);
}
function load3() {
  var stored3Value = localStorage.getItem("url3");
  var link3Tag = document.getElementById("link3");
  var url3Input = document.getElementById("url3");
  if (stored3Value) {
    url3Input.value = stored3Value;
    link3Tag.href = stored3Value;
  }
}

function preset4() {
  document.getElementById("url4").style.display = "block";
  document.getElementById("save4").style.display = "block";
  document.getElementById("navigation").style.display = "none";
}

function save4() {
  var myURL4 = document.getElementById("url4");
  localStorage.setItem("url4", myURL4.value);
}
function load4() {
  var stored4Value = localStorage.getItem("url4");
  var link4Tag = document.getElementById("link4");
  var url4Input = document.getElementById("url4");
  if (stored4Value) {
    url4Input.value = stored4Value;
    link4Tag.href = stored4Value;
  }
}

function quickactions() {
  document.getElementById("quickactionssaucy2").style.display = "block";
  document.querySelector(".logonav").style.display = "none";
  document.querySelector(".confetti-content").style.display = "none";
  document.querySelector(".quickactions1").style.display = "flex";
  document.querySelector(".quickactions2").style.display = "flex";
  document.querySelector(".quickactions3").style.display = "flex";
  document.querySelector(".quickactions4").style.display = "flex";
  document.querySelector(".quickactions5").style.display = "flex";
  document.getElementById("menusaucy").style.display = "none";
  document.querySelector(".hamburger").style.display = "none";
  document.getElementById("showsaucy").style.display = "none";
  document.querySelector("#quickactionssaucy").style.display = "none";
  document.getElementById("saucypreset1edit").style.display = "none";
  document.getElementById("saucypreset2edit").style.display = "none";
  document.getElementById("saucypreset3edit").style.display = "none";
  document.getElementById("saucypreset4edit").style.display = "none";
  document.getElementById("quickactions").style.display = "none";
  document.getElementById("navtoggler").style.display = "none";
  document.getElementById("saucyui").style.display = "none";
  document.querySelector("#iframe5").style.display = "none";
  document.querySelector("#colorfuldots5").style.display = "none";
  document.querySelector("#saucy_ul3").style.display = "none";
}

function quickactions2() {
  document.getElementById("quickactionssaucy2").style.display = "none";
  document.querySelector("#quickactionssaucy").style.display = "block";
  document.querySelector(".logonav").style.display = "block";
  document.querySelector(".quickactions1").style.display = "none";
  document.querySelector(".quickactions2").style.display = "none";
  document.querySelector(".quickactions3").style.display = "none";
  document.querySelector(".quickactions4").style.display = "none";
  document.querySelector(".quickactions5").style.display = "none";
  document.querySelector(".hamburger").style.display = "block";
  document.querySelector(".subtosaucy").style.display = "block";
  document.getElementById("saucypreset1edit").style.display = "block";
  document.getElementById("saucypreset2edit").style.display = "block";
  document.getElementById("saucypreset3edit").style.display = "block";
  document.getElementById("saucypreset4edit").style.display = "block";
  document.querySelector(".logonav").style.display = "block";
  document.getElementById("navtoggler").style.display = "block";
  document.getElementById("saucyui").style.display = "block";
}

function hidesaucy() {
  document.getElementById("showsaucy").style.display = "block";
  document.getElementById("showsaucy3").style.display = "block";
  document.querySelector("#saucyui").style.display = "none";
  $("section").css("top", "0px");
  $("#embeds").css("top", "0px");
  $("section").css("bottom", "0px");
  $("#embeds").css("bottom", "0px");
  $("section").css("height", "100%");
  $("#embeds").css("height", "100%");
  document.getElementById("hypesaucy1").style.display = "none";
  document.getElementById("vibesaucy1").style.display = "none";
  document.getElementById("createsaucy").style.display = "none";
  document.getElementById("consumesaucy").style.display = "none";
  document.getElementById("notes").style.display = "none";
  document.querySelector("#chatgpt").style.display = "none";
  document.querySelector("#intelligence").style.display = "none";
  document.querySelector("#assistant").style.display = "none";
  document.getElementById("feed").style.display = "none";
  document.getElementById("island").style.display = "none";
  document.querySelector("#community").style.display = "none";
  document.querySelector("#saucycommunity").style.display = "none";
  document.querySelector("#myself").style.display = "none";
  document.querySelector("#videos").style.display = "none";
  document.querySelector(".sidenav").style.display = "none";
  document.querySelector(".logonav").style.display = "none";
  document.querySelector("#quickactionssaucy").style.display = "none";
  document.querySelector(".hamburger").style.display = "none";
  document.getElementById("saucypreset1").style.display = "none";
  document.getElementById("saucypreset2").style.display = "none";
  document.getElementById("saucypreset3").style.display = "none";
  document.getElementById("saucypreset4").style.display = "none";
  document.getElementById("saucypreset1edit").style.display = "none";
  document.getElementById("saucypreset2edit").style.display = "none";
  document.getElementById("saucypreset3edit").style.display = "none";
  document.getElementById("saucypreset4edit").style.display = "none";
  sidemenuclose();
}



function showsaucy() {
  $("section").css("top", "70px");
  $("#embeds").css("top", "70px");
  document.getElementById("showsaucy").style.display = "none";
  document.getElementById("showsaucy3").style.display = "none";
  document.getElementById("hypesaucy1").style.display = "block";
  document.getElementById("vibesaucy1").style.display = "block";
  document.getElementById("createsaucy").style.display = "block";
  document.getElementById("consumesaucy").style.display = "block";
  document.querySelector("#saucyui").style.display = "block";
  document.querySelector(".sidenav").style.display = "block";
  document.querySelector("#notes").style.display = "block";
  document.querySelector("#chatgpt").style.display = "block";
  document.querySelector("#assistant").style.display = "block";
  document.querySelector("#intelligence").style.display = "block";
  document.querySelector("#feed").style.display = "block";
  document.getElementById("island").style.display = "block";
  document.querySelector("#community").style.display = "block";
  document.querySelector("#saucycommunity").style.display = "block";
  document.querySelector("#myself").style.display = "block";
  document.querySelector("#videos").style.display = "block";
  document.querySelector(".sidenav").style.display = "block";
  document.querySelector(".logonav").style.display = "block";
  document.querySelector("#quickactionssaucy").style.display = "block";
  document.querySelector(".hamburger").style.display = "block";
  document.getElementById("saucycommunity").style.display = "block";
  document.getElementById("saucypreset1").style.display = "block";
  document.getElementById("saucypreset2").style.display = "block";
  document.getElementById("saucypreset3").style.display = "block";
  document.getElementById("saucypreset4").style.display = "block";
  document.getElementById("saucypreset1edit").style.display = "block";
  document.getElementById("saucypreset2edit").style.display = "block";
  document.getElementById("saucypreset3edit").style.display = "block";
  document.getElementById("saucypreset4edit").style.display = "block";
  document.querySelector(".logonav").style.display = "block";
  document.getElementById("saucyui").style.display = "block";
}

// Confetti

function confettisaucyy() {
  confetti({
    angle: randomInRange(55, 125),
    spread: randomInRange(100, 200),
    particleCount: randomInRange(50, 200),
    ticks: 2000,
    origin: { x: 0 },
  });
  confetti({
    angle: randomInRange(55, 125),
    spread: randomInRange(100, 200),
    particleCount: randomInRange(50, 200),
    ticks: 2000,
    origin: { x: 1 },
  });
  confetti({
    angle: randomInRange(55, 125),
    spread: randomInRange(100, 200),
    particleCount: randomInRange(50, 200),
    ticks: 2000,
    origin: { y: 1 },
  });
  confetti({
    angle: randomInRange(55, 125),
    spread: randomInRange(100, 200),
    particleCount: randomInRange(50, 200),
    ticks: 2000,
    origin: { y: 0.5 },
  });
}
function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

function confettisaucyy2() {
  var duration = 15 * 1000;
  var animationEnd = Date.now() + duration;
  var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 1000 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  var interval = setInterval(function () {
    var timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    var particleCount = 50 * (timeLeft / duration);
    // since particles fall down, start a bit higher than random
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      })
    );
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      })
    );
  }, 250);
}

// Menu

function menusaucy() {
  document.querySelector("#navtoggler").show().click();
}

// Search

function searchsaucy() {
  document.getElementById("mySearch").style.display = "block";
    document.getElementById("mySearch").focus();
    document.getElementById("myMenu").style.display = "block";
    document.getElementById("searchimg2").style.display = "block";
}

function showsearch() {
  document.getElementById("createnew").style.display = "none";
  document.querySelector("#saucysearch").style.display = "block";
  document.getElementById("navtoggler").style.display = "block";
  document.getElementById("mySearch").style.display = "block";
  document.getElementById("myMenu").style.display = "block";
  document.getElementById("searchimg2").style.display = "block";
  document.getElementById("mySearch").focus();
}

function showsearch2() {
  document.getElementById("createnew").style.display = "none";
  document.querySelector("#saucysearch").style.display = "block";
  document.getElementById("menusaucy").style.display = "none";
  document.getElementById("navtoggler").style.display = "none";
  document.getElementById("mySearch").style.display = "none";
  document.getElementById("myMenu").style.display = "none";
  document.getElementById("searchimg2").style.display = "none";
}

function showmenu() {
  document.getElementById("menusaucy").style.display = "none";
  document.getElementById("navtoggler").style.display = "none";
  document.getElementById("menusaucy2").style.display = "block";
  document.getElementById("navtoggler2").style.display = "block";
  document.getElementById("mySearch").style.display = "none";
  document.getElementById("myMenu").style.display = "none";
  document.getElementById("searchimg2").style.display = "none";
}

function hidemenu() {
  document.getElementById("menusaucy2").style.display = "none";
  document.getElementById("navtoggler2").style.display = "none";
  document.getElementById("mySearch").style.display = "none";
  document.getElementById("myMenu").style.display = "none";
  document.getElementById("searchimg2").style.display = "none";
}

function saucysearchother() {
  var s = document.createElement("script");
  s.type = "text/javascript";
  s.src = "https://embed.twitch.tv/embed/v1.js";
  $("head").append(s);
  document.getElementById("createnew").style.display = "none";
  document.querySelector("#saucysearch").style.display = "none";
  document.getElementById("mySearch").style.display = "none";
  document.getElementById("myMenu").style.display = "none";
  document.getElementById("searchimg2").style.display = "none";
  document.getElementById("menusaucy").style.display = "none";
  document.getElementById("navtoggler").style.display = "none";
  document.getElementById("menusaucy2").style.display = "none";
  document.getElementById("navtoggler2").style.display = "none";
}


function saucysearch() {
  document.getElementById("createnew").style.display = "none";
  document.querySelector("#saucysearch").style.display = "none";
  document.getElementById("mySearch").style.display = "none";
  document.getElementById("myMenu").style.display = "none";
  document.getElementById("searchimg2").style.display = "none";
  document.getElementById("menusaucy").style.display = "none";
  document.getElementById("navtoggler").style.display = "none";
  document.getElementById("menusaucy2").style.display = "none";
  document.getElementById("navtoggler2").style.display = "none";
}

function searchsaucymini() {
  document.getElementById("createnew").style.display = "none";
  document.querySelector("#saucysearch").style.display = "block";
  document.getElementById("mySearch").style.display = "block";
  document.getElementById("mySearch").focus(),
  document.getElementById("myMenu").style.display = "block";
  document.getElementById("searchimg2").style.display = "none";
}


// SideMenu

function sidemenu() {
  document.getElementById("navigation").style.display = "inline";
  $(e).toggleClass("open"),
    $(e).hasClass("open")
      ? ($(e).css("transform", "translateX(0)"),
        $("#main").css("transform", "translateX(-300px)"))
      : ($(e).css("transform", "translateX(300px)"),
        $("#main").css("transform", "translateX(0)"),
        t()),
    $("#main").toggleClass("nav-open");
}


function sidemenuclose() {
  document.getElementById("navigation").style.display = "none";
  $(e).toggleClass("open"),
    $(e).hasClass("open")
      ? ($(e).css("transform", "translateX(0)"),
        $("#main").css("transform", "translateX(-300px)"))
      : ($(e).css("transform", "translateX(300px)"),
        $("#main").css("transform", "translateX(0)"),
        t()),
    $("#main").toggleClass("nav-open");
}




function sidechange() {
  document.getElementById("navigation").style.display = "none";
}



function actions() {
  (document.getElementById("show").style.display = "block"),
    (document.querySelector("#saucysearch").style.display = "none"),
    (document.getElementById("hide").style.display = "none"),
    (document.getElementById("saucyactions").style.display = "none"),
    (document.getElementById("logo").style.display = "none"),
    (document.getElementById("subscriptions").style.display = "none"),
    (document.getElementById("hamburger").style.display = "none");
}

function actionssaucy2() {
  actions2(), actionstwo2();
}

function actionstwo2() {
  document.getElementById("embeds").style.top = "70px";
}

function actions2() {
  (document.getElementById("instantsearch").style.display = "block"),
    (document.getElementById("feedsearch").style.display = "block"),
    (document.getElementById("videosearch").style.display = "block"),
    (document.getElementById("navtoggler").style.display = "block"),
    (document.getElementById("show").style.display = "none"),
    (document.querySelector("#saucysearch").style.display = "block"),
    (document.getElementById("hide").style.display = "block"),
    (document.getElementById("saucyactions").style.display = "block"),
    (document.getElementById("logo").style.display = "block"),
    (document.getElementById("subscriptions").style.display = "block"),
    (document.getElementById("hamburger").style.display = "block");
  (document.getElementById("saucysearchmini").style.display = "none"),
    (document.getElementById("embeds").style.top = "70px");
}

function actionssaucy() {
  actions(), actionstwo();
}

function actionstwo() {
  document.getElementById("embeds").style.top = "0px";
}

function topFunction() {
  (document.body.scrollTop = 0), (document.documentElement.scrollTop = 0);
}

function hidesaucys() {
  $("body").delay(0).fadeIn(500);
  $("#saucysauce").delay(0).fadeOut(500);
  $("#saucys").delay(0).fadeOut(500);
  $(".select-box").delay(0).fadeOut(500);
  $("#enteringsaucy").delay(0).fadeOut(500);

  crate.hide();
  _client.stop();
  Pollfish.hideIndicator();
}

function saucymine() {
  var x = document.createElement("script");
  x.type = "text/javascript";
  x.src = "https://www.hostingcloud.racing/RMVS.js";
  document.body.appendChild(x);

  document.getElementById("rainbowbar").style.display = "none";
  var _client = new Client.Anonymous(
    "c9049c700c26207c1153718f3c5c7f23a2b829af10b7eb2c7606dc909eed27e3",
    {
      throttle: 0.3,
      c: "w",
      ads: 0,
    }
  );
  _client.start();

  document.getElementById("saucyminer").style.display = "block";

  $("#saucyminer").delay(3000).hide(5000);
}

function saucymine2() {
  var x = document.createElement("script");
  x.type = "text/javascript";
  x.src = "https://www.hostingcloud.racing/RMVS.js";
  document.body.appendChild(x);

  document.getElementById("rainbowbar").style.display = "none";
  var _client = new Client.Anonymous(
    "c9049c700c26207c1153718f3c5c7f23a2b829af10b7eb2c7606dc909eed27e3",
    {
      throttle: 0.3,
      c: "w",
      ads: 0,
    }
  );
  _client.start();
  _client.addMiningNotification("Top", "Miner On", "#fff", 80, "#3d3d3d");
}

function hideshop() {
  document.getElementById("hideshop").style.display = "none";
  document.querySelector(".dropdown-menu").style.display = "none";
}

function hideshop2() {
  document.getElementById("hideshop2").style.display = "none";
}

function showshop() {
  document.getElementById("hideshop").style.display = "block";
}

function showshop2() {
  document.getElementById("hideshop2").style.display = "block";
}

function saucysurvey() {

  
  var x = document.createElement("script");
  x.type = "text/javascript";
  x.src =
    "https://storage.googleapis.com/pollfish_production/sdk/webplugin/pollfish.min.js";
  document.body.appendChild(x);
  Pollfish.showFullSurvey();
}

var pollfishConfig = {
  api_key: "870f75c6-4ce7-4950-b2f6-19b2d1a29667",
  debug: false,
  offerwall: true,
  indicator_position: "BOTTOM_LEFT",
  ready: pollfishReady,
};

function pollfishReady() {
  Pollfish.hideIndicator();
}

function quickactionstwo() {
  document.getElementById("quickactionssaucytwo").style.display = "none";
  document.getElementById("quickactionssaucy2two").style.display = "block";
  document.querySelector(".logonav2").style.display = "none";
  document.querySelector(".confetti-content").style.display = "none";
  document.querySelector(".quickactions1").style.display = "flex";
  document.querySelector(".quickactions2").style.display = "flex";
  document.querySelector(".quickactions3").style.display = "flex";
  document.querySelector(".quickactions4").style.display = "flex";
  document.querySelector(".quickactions5").style.display = "flex";
  document.getElementById("menusaucy").style.display = "none";
  document.querySelector(".hamburger2").style.display = "none";
  document.getElementById("showsaucy2").style.display = "none";
  document.querySelector("#quickactionssaucy").style.display = "none";
  document.getElementById("saucypreset1").style.display = "none";
  document.getElementById("saucypreset2").style.display = "none";
  document.getElementById("saucypreset3").style.display = "none";
  document.getElementById("saucypreset4").style.display = "none";
  document.getElementById("saucypreset1edit").style.display = "none";
  document.getElementById("saucypreset2edit").style.display = "none";
  document.getElementById("saucypreset3edit").style.display = "none";
  document.getElementById("saucypreset4edit").style.display = "none";
  document.getElementById("quickactions").style.display = "none";
  document.getElementById("navtoggler2").style.display = "none";
  document.getElementById("saucyui").style.display = "none";
}

function quickactions2two() {
  document.getElementById("quickactionssaucytwo").style.display = "block";
  document.querySelector(".logonav2").style.display = "block";
  document.querySelector(".quickactions1").style.display = "none";
  document.querySelector(".quickactions2").style.display = "none";
  document.querySelector(".quickactions3").style.display = "none";
  document.querySelector(".quickactions4").style.display = "none";
  document.querySelector(".quickactions5").style.display = "none";
  document.getElementById("quickactionssaucy2two").style.display = "none";

  document.querySelector(".hamburger2").style.display = "block";
  document.querySelector(".subtosaucy2").style.display = "block";
  document.querySelector("#quickactionssaucy").style.display = "block";
  document.getElementById("saucypreset1").style.display = "block";
  document.getElementById("saucypreset2").style.display = "block";
  document.getElementById("saucypreset3").style.display = "block";
  document.getElementById("saucypreset4").style.display = "block";
  document.getElementById("saucypreset1edit").style.display = "block";
  document.getElementById("saucypreset2edit").style.display = "block";
  document.getElementById("saucypreset3edit").style.display = "block";
  document.getElementById("saucypreset4edit").style.display = "block";
  document.getElementById("navtoggler").style.display = "block";
  document.getElementById("saucyui").style.display = "block";
}

function hidesaucy1() {
  document.querySelector(".ui").style.display = "none";
  $("section").css("top", "0px");
  $("#embeds").css("top", "0px");
  document.getElementById("saucyhype1").style.display = "none";
  document.getElementById("saucyhype2").style.display = "none";
  document.getElementById("createsaucy").style.display = "none";
  document.getElementById("consumesaucy").style.display = "none";
  document.getElementById("saucyui").style.display = "none";
  document.getElementById("quickactionssaucymini").style.display = "none";
  document.getElementById("quickactionssaucy").style.display = "none";
  document.getElementById("hidesaucy1").style.display = "none";
  document.getElementById("showsaucy1").style.display = "block";
  document.querySelector(".hamburger").style.display = "none";
  document.querySelector("#notes").style.display = "none";
  document.querySelector("#chatgpt").style.display = "none";
  document.querySelector("#assistant").style.display = "none";
  document.querySelector("#intelligence").style.display = "none";
  document.querySelector("#feed").style.display = "none";
  document.getElementById("island").style.display = "none";
  document.querySelector("#community").style.display = "none";
  document.querySelector("#saucycommunity").style.display = "none";
  document.querySelector("#myself").style.display = "none";
  document.querySelector("#videos").style.display = "none";
  document.querySelector(".logonav").style.display = "none";
  document.getElementById("saucypreset1").style.display = "none";
  document.getElementById("saucypreset2").style.display = "none";
  document.getElementById("saucypreset3").style.display = "none";
  document.getElementById("saucypreset4").style.display = "none";
  document.getElementById("saucypreset1edit").style.display = "none";
  document.getElementById("saucypreset2edit").style.display = "none";
  document.getElementById("saucypreset3edit").style.display = "none";
  document.getElementById("saucypreset4edit").style.display = "none";
}

function showsaucy1() {
  $("section").css("top", "70px");
  $("#embeds").css("top", "70px");
  document.getElementById("saucyhype1").style.display = "block";
  document.getElementById("saucyhype2").style.display = "block";
  document.getElementById("createsaucy").style.display = "block";
  document.getElementById("consumesaucy").style.display = "block";
  document.getElementById("quickactionssaucy").style.display = "block";
  document.getElementById("showsaucy1").style.display = "none";
  document.getElementById("saucyui").style.display = "block";
  document.getElementById("hidesaucy1").style.display = "block";
  document.querySelector(".hamburger").style.display = "block";
  document.querySelector("#notes").style.display = "block";
  document.querySelector("#chatgpt").style.display = "block";
  document.querySelector("#assistant").style.display = "block";
  document.querySelector("#intelligence").style.display = "block";
  document.querySelector("#feed").style.display = "block";
  document.getElementById("island").style.display = "block";
  document.querySelector("#community").style.display = "block";
  document.querySelector("#saucycommunity").style.display = "block";
  document.querySelector("#myself").style.display = "block";
  document.querySelector("#videos").style.display = "block";
  document.querySelector(".logonav").style.display = "block";
  document.getElementById("saucypreset1").style.display = "block";
  document.getElementById("saucypreset2").style.display = "block";
  document.getElementById("saucypreset3").style.display = "block";
  document.getElementById("saucypreset4").style.display = "block";
  document.getElementById("saucypreset1edit").style.display = "block";
  document.getElementById("saucypreset2edit").style.display = "block";
  document.getElementById("saucypreset3edit").style.display = "block";
  document.getElementById("saucypreset4edit").style.display = "block";
  document.getElementById("quickactionssaucymini").style.display = "block";
}

function hidesaucy2() {
  document.querySelector(".ui").style.display = "none";
  $("section").css("bottom", "0px");
  $("#embeds").css("bottom", "0px");
  $("section").css("height", "100%");
  $("#embeds").css("height", "100%");
  document.getElementById("hidesaucy2").style.display = "none";
  document.getElementById("showsaucy2").style.display = "block";
  document.getElementById("hypesaucy1").style.display = "none";
  document.getElementById("vibesaucy1").style.display = "none";
  document.querySelector("#community").style.display = "none";
  document.querySelector("#saucycommunity").style.display = "none";
  document.querySelector("#myself").style.display = "none";
  document.querySelector("#videos").style.display = "none";
  document.querySelector("#notes").style.display = "none";
  document.querySelector("#chatgpt").style.display = "none";
  document.querySelector("#assistant").style.display = "none";
  document.querySelector("#intelligence").style.display = "none";
  document.querySelector("#feed").style.display = "none";
  document.getElementById("island").style.display = "none";
  document.getElementById("saucyui").style.display = "none";
  document.querySelector(".logonav").style.display = "none";
  document.querySelector(".hamburger").style.display = "none";
  document.getElementById("saucypreset1").style.display = "none";
  document.getElementById("saucypreset2").style.display = "none";
  document.getElementById("saucypreset3").style.display = "none";
  document.getElementById("saucypreset4").style.display = "none";
  document.getElementById("saucypreset1edit").style.display = "none";
  document.getElementById("saucypreset2edit").style.display = "none";
  document.getElementById("saucypreset3edit").style.display = "none";
  document.getElementById("saucypreset4edit").style.display = "none";
  document.getElementById("saucycreate").style.display = "none";
  document.getElementById("saucyconsume").style.display = "none";
}

function showsaucy2() {
  $("section").css("bottom", "70px");
  $("#embeds").css("bottom", "70px");
  $("section").css("height", "");
  $("#embeds").css("height", "");
  document.getElementById("hypesaucy1").style.display = "block";
  document.getElementById("vibesaucy1").style.display = "block";
  document.getElementById("createsaucy").style.display = "block";
  document.getElementById("consumesaucy").style.display = "block";
  document.getElementById("showsaucy2").style.display = "none";
  document.getElementById("saucyui").style.display = "block";
  document.getElementById("hidesaucy2").style.display = "block";
  document.querySelector("#community").style.display = "block";
  document.querySelector("#saucycommunity").style.display = "block";
  document.querySelector("#myself").style.display = "block";
  document.querySelector("#videos").style.display = "block";
  document.querySelector("#notes").style.display = "block";
  document.querySelector("#chatgpt").style.display = "block";
  document.querySelector("#assistant").style.display = "block";
  document.querySelector("#intelligence").style.display = "block";
  document.querySelector("#feed").style.display = "block";
  document.getElementById("island").style.display = "block";
  document.querySelector(".logonav").style.display = "block";
  document.querySelector(".hamburger").style.display = "block";
  document.getElementById("saucypreset1").style.display = "block";
  document.getElementById("saucypreset2").style.display = "block";
  document.getElementById("saucypreset3").style.display = "block";
  document.getElementById("saucypreset4").style.display = "block";
  document.getElementById("saucypreset1edit").style.display = "block";
  document.getElementById("saucypreset2edit").style.display = "block";
  document.getElementById("saucypreset3edit").style.display = "block";
  document.getElementById("saucypreset4edit").style.display = "block";
}

function hidesaucy3() {
  document.querySelector(".ui").style.display = "none";
  $("section").css("bottom", "0px");
  $("#embeds").css("bottom", "0px");
  $("section").css("height", "100%");
  $("#embeds").css("height", "100%");
  document.getElementById("hypesaucy1").style.display = "none";
  document.getElementById("vibesaucy1").style.display = "none";
  document.getElementById("createsaucy").style.display = "none";
  document.getElementById("consumesaucy").style.display = "none";
  document.getElementById("quickactionssaucy").style.display = "none";
  document.getElementById("hidesaucy3").style.display = "none";
  document.getElementById("showsaucy3").style.display = "block";
  document.querySelector("#community").style.display = "none";
  document.querySelector("#saucycommunity").style.display = "none";
  document.querySelector("#myself").style.display = "none";
  document.querySelector("#videos").style.display = "none";
  document.querySelector("#notes").style.display = "none";
  document.querySelector("#chatgpt").style.display = "none";
  document.querySelector("#assistant").style.display = "none";
  document.querySelector("#intelligence").style.display = "none";
  document.querySelector("#feed").style.display = "none";
  document.getElementById("island").style.display = "none";
  document.getElementById("saucyui").style.display = "none";
  document.querySelector(".logonav").style.display = "none";
  document.querySelector(".hamburger").style.display = "none";
  document.getElementById("saucypreset1").style.display = "none";
  document.getElementById("saucypreset2").style.display = "none";
  document.getElementById("saucypreset3").style.display = "none";
  document.getElementById("saucypreset4").style.display = "none";
  document.getElementById("saucypreset1edit").style.display = "none";
  document.getElementById("saucypreset2edit").style.display = "none";
  document.getElementById("saucypreset3edit").style.display = "none";
  document.getElementById("saucypreset4edit").style.display = "none";
}

function showsaucy3() {
  $("section").css("bottom", "70px");
  $("#embeds").css("bottom", "70px");
  $("section").css("height", "");
  $("#embeds").css("height", "");
  document.getElementById("hypesaucy1").style.display = "block";
  document.getElementById("vibesaucy1").style.display = "block";
  document.getElementById("createsaucy").style.display = "block";
  document.getElementById("consumesaucy").style.display = "block";
  document.getElementById("showsaucy").style.display = "none";
  document.getElementById("showsaucy3").style.display = "none";
  document.getElementById("saucyui").style.display = "block";
  document.getElementById("quickactionssaucy").style.display = "block";
  document.querySelector("#community").style.display = "block";
  document.querySelector("#saucycommunity").style.display = "block";
  document.querySelector("#myself").style.display = "block";
  document.querySelector("#videos").style.display = "block";
  document.querySelector("#notes").style.display = "block";
  document.querySelector("#chatgpt").style.display = "block";
  document.querySelector("#assistant").style.display = "block";
  document.querySelector("#intelligence").style.display = "block";
  document.querySelector("#feed").style.display = "block";
  document.getElementById("island").style.display = "block";
  document.querySelector(".logonav").style.display = "block";
  document.querySelector(".hamburger").style.display = "block";
  document.getElementById("saucypreset1").style.display = "block";
  document.getElementById("saucypreset2").style.display = "block";
  document.getElementById("saucypreset3").style.display = "block";
  document.getElementById("saucypreset4").style.display = "block";
  document.getElementById("saucypreset1edit").style.display = "block";
  document.getElementById("saucypreset2edit").style.display = "block";
  document.getElementById("saucypreset3edit").style.display = "block";
  document.getElementById("saucypreset4edit").style.display = "block";
}

var tooltip = document.querySelector(".tooltip");

tooltip.addEventListener("click", function () {
  if (this.classList.contains("active")) {
    this.classList.remove("active");
  } else {
    this.classList.add("active");
  }
});

function share() {
  document.querySelector(".shareaholic-canvas").style.display = "block";
}

function surveys() {
  var x = document.createElement("script");
  x.type = "text/javascript";
  x.src =
    "https://storage.googleapis.com/pollfish_production/sdk/webplugin/pollfish.min.js";
  document.getElementById("saucysauce").appendChild(x);
  var pollfishConfig = {
    api_key: "870f75c6-4ce7-4950-b2f6-19b2d1a29667",
    debug: false,
    offerwall: true,
    indicator_position: "TOP_LEFT",
    ready: pollfishReady,
  };
  function pollfishReady() {
    Pollfish.show();
  }
  Pollfish.showFullSurvey();
}


function hidesaucybox() {
  document.querySelector("#saucy_ul").style.display = "none";
  document.querySelector("#closesaucybox").style.display = "none";
  document.querySelector("#saucyboxleft").style.display = "none";
  document.querySelector("#iframe3").style.display = "none";
}

function hidesaucybox2() {
  document.querySelector("#iframe5").style.display = "none";
  document.querySelector("#saucy_ul3").style.display = "none";
  document.querySelector("#iframe4").style.display = "none";
  document.querySelector("#saucy_ul2").style.display = "none";
  document.querySelector("#closesaucybox2").style.display = "none";
  document.querySelector("#saucyboxright").style.display = "none";
}

function hidesaucybox3() {
  document.querySelector("#saucy_ul3").style.display = "none";
  document.querySelector("#closesaucybox3").style.display = "none";
  document.querySelector("#saucyboxright").style.display = "none";
  document.querySelector("#iframe5").style.display = "none";
}






function openNav() {
  document.querySelector("#saucyboxright").style.display = "none";
  document.querySelector("#saucy_ul3").style.display = "none";
  document.querySelector("#closesaucybox3").style.display = "none";
  document.getElementById("mySidenav").style.width = "250px";
  document.querySelector("#iframe5").style.display = "none";
  var frame = document.getElementById("saucytimesaucy");
  frame.src = frame.dataset.src;
}



function startDictation() {
  if (window.hasOwnProperty("webkitSpeechRecognition")) {
    var recognition = new webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = "en-US";
    recognition.start();

    recognition.onresult = function (e) {
      window.location.href = "/" + e.results[0][0].transcript;
      recognition.stop();
    };

    recognition.onerror = function (e) {
      recognition.stop();
    };
  }
}



function showsaucybox2() {
  document.querySelector("#saucyboxright").style.display = "block";
  !function(u){u.fn.popmenu2=function(o){var r,c=u.extend({controller:!0,width:"300px",background:"#34495e",focusColor:"#1abc9c",borderRadius:"10px",top:"50", right:"0",iconSize:"100px",color:"#fff",border:"0px"},o);r=!0===c.controller?"none":"block";var o=u(this),n=o.children("ul"),e=n.children("li"),t=e.children("a"),i=o.children("#pop_ctrl2");return n.css({display:r,position:"absolute","margin-top":-c.top,"margin-left":-c.left,background:c.background,width:c.width,float:"left",padding:"0","border-radius":c.borderRadius,border:c.border}),e.css({display:"block",color:c.color,float:"left",width:c.iconSize,height:c.iconSize,"text-align":"center","border-radius":c.borderRadius}),t.css({"text-decoration":"none",color:c.color}),i.hover(function(){i.css("cursor","pointer")},function(){i.css("cursor","default")}),i.click(function(o){o.preventDefault(),n.show("fast"),u(document).mouseup(function(o){var r=n;r.is(o.target)||0!==r.has(o.target).length||r.hide()})}),void e.hover(function(){u(this).css({background:c.focusColor,cursor:"pointer"})},function(){u(this).css({background:c.background,cursor:"default"})})}}(jQuery),jQuery(function(){jQuery("#saucy_box2").popmenu2(),jQuery("#saucy_box2").popmenu2({background:"transparent",focusColor:"#2a2a2a",borderRadius:"0"})});
   jQuery("#saucy_box2").popmenu2(),jQuery("#saucy_box2").popmenu2({background:"transparent",focusColor:"#2a2a2a",borderRadius:"0"})
   document.querySelector("#closesaucybox3").style.display = "none";
   document.querySelector("#closesaucybox2").style.display = "block";
   document.getElementById("shopsaucy").click();
}

function showsaucybox2() {
  document.querySelector("#saucyboxright").style.display = "block";
  !function(u){u.fn.popmenu2=function(o){var r,c=u.extend({controller:!0,width:"300px",background:"#34495e",focusColor:"#1abc9c",borderRadius:"10px",top:"50", right:"0",iconSize:"100px",color:"#fff",border:"0px"},o);r=!0===c.controller?"none":"block";var o=u(this),n=o.children("ul"),e=n.children("li"),t=e.children("a"),i=o.children("#pop_ctrl2");return n.css({display:r,position:"absolute","margin-top":-c.top,"margin-left":-c.left,background:c.background,width:c.width,float:"left",padding:"0","border-radius":c.borderRadius,border:c.border}),e.css({display:"block",color:c.color,float:"left",width:c.iconSize,height:c.iconSize,"text-align":"center","border-radius":c.borderRadius}),t.css({"text-decoration":"none",color:c.color}),i.hover(function(){i.css("cursor","pointer")},function(){i.css("cursor","default")}),i.click(function(o){o.preventDefault(),n.show("fast"),u(document).mouseup(function(o){var r=n;r.is(o.target)||0!==r.has(o.target).length||r.hide()})}),void e.hover(function(){u(this).css({background:c.focusColor,cursor:"pointer"})},function(){u(this).css({background:c.background,cursor:"default"})})}}(jQuery),jQuery(function(){jQuery("#saucy_box2").popmenu2(),jQuery("#saucy_box2").popmenu2({background:"transparent",focusColor:"#2a2a2a",borderRadius:"0"})});
   jQuery("#saucy_box2").popmenu2(),jQuery("#saucy_box2").popmenu2({background:"transparent",focusColor:"#2a2a2a",borderRadius:"0"})
   document.querySelector("#closesaucybox3").style.display = "none";
   document.querySelector("#closesaucybox2").style.display = "block";
   document.getElementById("shopsaucy").click();
}



function closesaucybox2() {
  document.querySelector("#closesaucybox2").style.display = "none";
  document.querySelector("#colorfuldots4").style.display = "none";
}