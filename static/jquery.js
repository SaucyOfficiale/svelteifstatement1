

!function(g){function h(e,a){if(!(1<e.originalEvent.touches.length)){e.preventDefault();var b=e.originalEvent.changedTouches[0],c=document.createEvent("MouseEvents");c.initMouseEvent(a,!0,!0,window,1,b.screenX,b.screenY,b.clientX,b.clientY,!1,!1,!1,!1,0,null),e.target.dispatchEvent(c)}}if(g.support.touch="ontouchend"in document,g.support.touch){var f,a=g.ui.mouse.prototype,i=a._mouseInit,c=a._mouseDestroy;a._touchStart=function(c){var a=this;!f&&a._mouseCapture(c.originalEvent.changedTouches[0])&&(f=!0,a._touchMoved=!1,h(c,"mouseover"),h(c,"mousemove"),h(c,"mousedown"))},a._touchMove=function(b){f&&(this._touchMoved=!0,h(b,"mousemove"))},a._touchEnd=function(b){f&&(h(b,"mouseup"),h(b,"mouseout"),this._touchMoved||h(b,"click"),f=!1)},a._mouseInit=function(){var a=this;a.element.bind({touchstart:g.proxy(a,"_touchStart"),touchmove:g.proxy(a,"_touchMove"),touchend:g.proxy(a,"_touchEnd")}),i.call(a)},a._mouseDestroy=function(){var a=this;a.element.unbind({touchstart:g.proxy(a,"_touchStart"),touchmove:g.proxy(a,"_touchMove"),touchend:g.proxy(a,"_touchEnd")}),c.call(a)}}}(jQuery);



    $("#saucy_box").click(function() {
        $("#iframe3").length || $("#colorfuldots3").html('<iframe id="iframe3" style="opacity: 0;" onload="this.style.opacity = 1;" src="https://etyre.csb.app" width="100%" frameborder="0" frameborder="none"></iframe>')
    });

    $("#saucy_box2").click(function() {
        $("#iframe4").length || $("#colorfuldots4").html('<iframe id="iframe4" style="opacity: 0;" onload="this.style.opacity = 1;" src="https://etyre.csb.app" width="100%" frameborder="0" frameborder="none"></iframe>')
    });
    
    $("#saucy_box3").click(function() {
        $("#iframe5").length || $("#colorfuldots5").html('<iframe id="iframe5" style="opacity: 1;" onload="this.style.opacity = 1;" src="https://etyre.csb.app" width="100%" frameborder="0" frameborder="none"></iframe>')
    });

  
// Function to check if a click occurred outside of #saucy_box3
$(document).on("click", function(event) {
    if (!$(event.target).closest("#saucy_box3").length) {
        closesaucybox3(); // Close the saucy box if clicked outside
    }
});


  
// Function to check if a click occurred outside of #saucy_box3
$(document).on("click", function(event) {
    if (!$(event.target).closest("#saucy_box2").length) {
        closesaucybox2(); // Close the saucy box if clicked outside
    }
});






function handleHamburgerClickTwo() {
    const iframe1 = document.getElementById('iframe1');
    const stars = document.getElementById('stars');
  
    if (!iframe1) {
      const newIframe = document.createElement('embed');
      newIframe.id = 'iframe1';
      newIframe.style.opacity = 0;
      newIframe.onload = function () {
        this.style.opacity = 1;
      };
      newIframe.src = 'https://p61q9.csb.app/';
      newIframe.width = '100%';
      newIframe.frameBorder = '0';
      newIframe.frameBorder = 'none';
  
      stars.innerHTML = '';
      stars.appendChild(newIframe);
    }
  }
  

  const hamburgertwo = document.getElementById('hamburger');

  hamburgertwo.addEventListener('click', handleHamburgerClickTwo);
  

$(function() {
    $("#hide").click(function() {
        $("section").css("top", "0px")
    })
}), $(function() {
    $("#show").click(function() {
        $("section").css("top", "50px")
    })
}),
function() {
    var s, t, n, e, a, i;

    function o(n) {
        for (var e = (this.el = n).className.replace(/^\s+|\s+$/g, "").split(/\s+/), t = 0; t < e.length; t++) s.call(this, e[t])
    }
    void 0 === window.Element || "classList" in document.documentElement || (i = Array.prototype, s = i.push, t = i.splice, n = i.join, o.prototype = {
        add: function(n) {
            this.contains(n) || (s.call(this, n), this.el.className = this.toString())
        },
        contains: function(n) {
            return -1 != this.el.className.indexOf(n)
        },
        item: function(n) {
            return this[n] || null
        },
        remove: function(n) {
            if (this.contains(n)) {
                for (var e = 0; e < this.length && this[e] != n; e++);
                t.call(this, e, 1), this.el.className = this.toString()
            }
        },
        toString: function() {
            return n.call(this, " ")
        },
        toggle: function(n) {
            return this.contains(n) ? this.remove(n) : this.add(n), this.contains(n)
        }
    }, window.DOMTokenList = o, e = Element.prototype, a = "classList", i = function() {
        return new o(this)
    }, Object.defineProperty ? Object.defineProperty(e, a, {
        get: i
    }) : e.__defineGetter__(a, i))
}();
var ddfullscreenmenu = function() {
var e, t, s, a, i = 100;

function o(n, e, t) {
    n.classList.remove("hidemenu"), n.classList.remove("showmenu"), e.classList.remove("hidemenu"), e.classList.remove("showmenu"), "forward" == t && e.classList.add("hidemenu"), n.classList.add("showmenu"), n.style.zIndex = i++
}
return {
    togglemenu: function(n) {
        void 0 === n ? e.classList.toggle("openmenu") : e.classList["open" == n ? "add" : "remove"]("openmenu")
    },
    init: function() {
        e = document.getElementById("ddfullscreenmenu"), t = document.getElementById("ulwrapper"), s = document.getElementById("fullscreenmenu-ul"), document.getElementById("closex").addEventListener("click", function(n) {
            ddfullscreenmenu.togglemenu("close"), n.preventDefault()
        }, !1);
        var n = function(n, e, t) {
            for (var e = e || function() {}, t = t || function() {}, s = document.createDocumentFragment(), a = n.getElementsByTagName("ul"), i = a.length - 1; 0 <= i; i--) {
                var o = a[i],
                    l = a[i].parentNode;
                s.appendChild(a[i]), e(i, l, o)
            }
            return s.appendChild(n), t(n), s
        }(s, function(n, e, t) {
            e.className = "header", (e._submenuref = t).className = "submenu2";
            var s = document.createElement("li");
            s.className = "breadcrumb", s.innerHTML = e.getElementsByTagName("a")[0].firstChild.nodeValue, s._headerref = e, t.insertBefore(s, t.getElementsByTagName("li")[0]), e.addEventListener("click", function(n) {
                var e = this.parentNode;
                o(this._submenuref, e, "forward"), n.stopPropagation(), n.preventDefault()
            }, !1), s.addEventListener("click", function(n) {
                o(this._headerref.parentNode, this._headerref._submenuref, "backwards"), n.stopPropagation(), n.preventDefault()
            }, !1)
        }, function(n) {
            n.style.zIndex = i++
        });
        t.appendChild(n), t.addEventListener("click", function() {
            clearTimeout(a), a = setTimeout(function() {
                ddfullscreenmenu.togglemenu("close")
            }, 100)
        }, !1)
    }
}
}();

function changepic(n) {
document.getElementById(n).src = "/uploads/branding/saucy.png"
}
ddfullscreenmenu.init(), $(function() {
var n;

function e(n, e, t, s) {
    this.el = n, this.main = e, this.trigger = t, this.options = function(n, e) {
        for (var t in e) e.hasOwnProperty(t) && (n[t] = e[t]);
        return n
    }(this.defaults, s), this._init()
}
n = "#navigation", $(".hamburger").on("click", function() {
    $(n).toggleClass("open"), $(n).hasClass("open") ? ($(n).css("transform", "translateX(0)"), $("#main").css("transform", "translateX(-300px)")) : ($(n).css("transform", "translateX(300px)"), $("#main").css("transform", "translateX(0)"), $("#navigation").width(), $(".nav-overlay").removeClass("nav-overlay"), $(".submenu").removeClass("open")), $("#main").toggleClass("nav-open")
}), $("#navigation"), $("#main"), $("nav").width(), e.prototype = {
    defaults: {
        backClass: ".back",
        navLevel: ".nav-level"
    },
    _init: function() {
        this.level = 1, this.menuOpen = !1, this.navTranslate = 40, this.navPosition = 0, this.navWidth = $(this.el).width(), this._openMenu(), this._toggleLevels(), this._toggleLevels2(), this._toggleLevels3(), this._toggleLevels4(), this._toggleLevels5(), this._toggleLevels6(), this._toggleLevels7(), this._toggleLevels8(), this._toggleLevels9(), this._toggleLevels10(), this._toggleLevels11(), this._toggleLevels12(), this._toggleLevels13(), this._toggleLevels14(), this._toggleLevels15(), this._toggleLevels16(), this._toggleLevels17(), this._toggleLevels18(), this._toggleLevels19(), this._toggleLevels20(), this._toggleLevels21(), this._toggleLevels22(), this._toggleLevels23(), this._toggleLevels24(), this._toggleLevels25(), this._toggleLevels26(), this._toggleLevels27(), this._toggleLevels28(), this._toggleLevels29(), this._toggleLevels30(), this._toggleBack(), this._setLevels(this.defaults.navLevel)
    },
    _toggleLevels: function() {
        var e = this;
        $("#saucysidemenu").on("click", function() {
            document.querySelector(".gtranslate_wrapper").style.display = "none";
            let n = $(this).closest("div.nav-level");
            $(this).next().hasClass("submenu") && ($(this).next().toggleClass("open"), n.toggleClass("nav-overlay nav-covered"), e.navWidth = e.navWidth + e.navTranslate, e.navPosition = e.navPosition + e.navTranslate, e._transform(e.navWidth, e.main), e._transform(e.navPosition, e.el))
        })
    },
    _toggleLevels2: function() {
        var e = this;
        $("#saucysidemenu2").on("click", function() {
            document.querySelector(".gtranslate_wrapper").style.display = "none";
            let n = $(this).closest("div.nav-level");
            $(this).next().hasClass("submenu") && ($(this).next().toggleClass("open"), n.toggleClass("nav-overlay nav-covered"), e.navWidth = e.navWidth + e.navTranslate, e.navPosition = e.navPosition + e.navTranslate, e._transform(e.navWidth, e.main), e._transform(e.navPosition, e.el))
        })
    },
    _toggleLevels3: function() {
        var e = this;
        $("#saucysidemenu3").on("click", function() {
            let n = $(this).closest("div.nav-level");
            $(this).next().hasClass("submenu") && ($(this).next().toggleClass("open"), n.toggleClass("nav-overlay nav-covered"), e.navWidth = e.navWidth + e.navTranslate, e.navPosition = e.navPosition + e.navTranslate, e._transform(e.navWidth, e.main), e._transform(e.navPosition, e.el))
        })
    },
    _toggleLevels4: function() {
        var e = this;
        $("#saucysidemenu4").on("click", function() {
            let n = $(this).closest("div.nav-level");
            $(this).next().hasClass("submenu") && ($(this).next().toggleClass("open"), n.toggleClass("nav-overlay nav-covered"), e.navWidth = e.navWidth + e.navTranslate, e.navPosition = e.navPosition + e.navTranslate, e._transform(e.navWidth, e.main), e._transform(e.navPosition, e.el))
        })
    },
    _toggleLevels5: function() {
        var e = this;
        $("#saucysidemenu5").on("click", function() {
            let n = $(this).closest("div.nav-level");
            $(this).next().hasClass("submenu") && ($(this).next().toggleClass("open"), n.toggleClass("nav-overlay nav-covered"), e.navWidth = e.navWidth + e.navTranslate, e.navPosition = e.navPosition + e.navTranslate, e._transform(e.navWidth, e.main), e._transform(e.navPosition, e.el))
        })
    },
    _toggleLevels6: function() {
        var e = this;
        $("#saucysidemenu6").on("click", function() {
            let n = $(this).closest("div.nav-level");
            $(this).next().hasClass("submenu") && ($(this).next().toggleClass("open"), n.toggleClass("nav-overlay nav-covered"), e.navWidth = e.navWidth + e.navTranslate, e.navPosition = e.navPosition + e.navTranslate, e._transform(e.navWidth, e.main), e._transform(e.navPosition, e.el))
        })
    },
    _toggleLevels7: function() {
        var e = this;
        $("#saucysidemenu7").on("click", function() {
            let n = $(this).closest("div.nav-level");
            $(this).next().hasClass("submenu") && ($(this).next().toggleClass("open"), n.toggleClass("nav-overlay nav-covered"), e.navWidth = e.navWidth + e.navTranslate, e.navPosition = e.navPosition + e.navTranslate, e._transform(e.navWidth, e.main), e._transform(e.navPosition, e.el))
        })
    },
    _toggleLevels8: function() {
        var e = this;
        $("#saucysidemenu8").on("click", function() {
            let n = $(this).closest("div.nav-level");
            $(this).next().hasClass("submenu") && ($(this).next().toggleClass("open"), n.toggleClass("nav-overlay nav-covered"), e.navWidth = e.navWidth + e.navTranslate, e.navPosition = e.navPosition + e.navTranslate, e._transform(e.navWidth, e.main), e._transform(e.navPosition, e.el))
        })
    },
    _toggleLevels9: function() {
        var e = this;
        $("#saucysidemenu9").on("click", function() {
            let n = $(this).closest("div.nav-level");
            $(this).next().hasClass("submenu") && ($(this).next().toggleClass("open"), n.toggleClass("nav-overlay nav-covered"), e.navWidth = e.navWidth + e.navTranslate, e.navPosition = e.navPosition + e.navTranslate, e._transform(e.navWidth, e.main), e._transform(e.navPosition, e.el))
        })
    },
    _toggleLevels10: function() {
        var e = this;
        $("#saucysidemenu10").on("click", function() {
            let n = $(this).closest("div.nav-level");
            $(this).next().hasClass("submenu") && ($(this).next().toggleClass("open"), n.toggleClass("nav-overlay nav-covered"), e.navWidth = e.navWidth + e.navTranslate, e.navPosition = e.navPosition + e.navTranslate, e._transform(e.navWidth, e.main), e._transform(e.navPosition, e.el))
        })
    },
    _toggleLevels11: function() {
        var e = this;
        $("#saucysidemenu11").on("click", function() {
            let n = $(this).closest("div.nav-level");
            $(this).next().hasClass("submenu") && ($(this).next().toggleClass("open"), n.toggleClass("nav-overlay nav-covered"), e.navWidth = e.navWidth + e.navTranslate, e.navPosition = e.navPosition + e.navTranslate, e._transform(e.navWidth, e.main), e._transform(e.navPosition, e.el))
        })
    },
    _toggleLevels12: function() {
        var e = this;
        $("#saucysidemenu12").on("click", function() {
            let n = $(this).closest("div.nav-level");
            $(this).next().hasClass("submenu") && ($(this).next().toggleClass("open"), n.toggleClass("nav-overlay nav-covered"), e.navWidth = e.navWidth + e.navTranslate, e.navPosition = e.navPosition + e.navTranslate, e._transform(e.navWidth, e.main), e._transform(e.navPosition, e.el))
        })
    },
    _toggleLevels13: function() {
        var e = this;
        $("#saucysidemenu13").on("click", function() {
            document.querySelector(".gtranslate_wrapper").style.display = "none";
            let n = $(this).closest("div.nav-level");
            $(this).next().hasClass("submenu") && ($(this).next().toggleClass("open"), n.toggleClass("nav-overlay nav-covered"), e.navWidth = e.navWidth + e.navTranslate, e.navPosition = e.navPosition + e.navTranslate, e._transform(e.navWidth, e.main), e._transform(e.navPosition, e.el))
        })
    },
    _toggleLevels14: function() {
        var e = this;
        $("#saucysidemenu14").on("click", function() {
            let n = $(this).closest("div.nav-level");
            $(this).next().hasClass("submenu") && ($(this).next().toggleClass("open"), n.toggleClass("nav-overlay nav-covered"), e.navWidth = e.navWidth + e.navTranslate, e.navPosition = e.navPosition + e.navTranslate, e._transform(e.navWidth, e.main), e._transform(e.navPosition, e.el))
        })
    },
    _toggleLevels15: function() {
        var e = this;
        $("#saucysidemenu15").on("click", function() {
            document.querySelector(".gtranslate_wrapper").style.display = "none";
            let n = $(this).closest("div.nav-level");
            $(this).next().hasClass("submenu") && ($(this).next().toggleClass("open"), n.toggleClass("nav-overlay nav-covered"), e.navWidth = e.navWidth + e.navTranslate, e.navPosition = e.navPosition + e.navTranslate, e._transform(e.navWidth, e.main), e._transform(e.navPosition, e.el))
        })
    },
    _toggleLevels16: function() {
        var e = this;
        $("#saucysidemenu16").on("click", function() {
            let n = $(this).closest("div.nav-level");
            $(this).next().hasClass("submenu") && ($(this).next().toggleClass("open"), n.toggleClass("nav-overlay nav-covered"), e.navWidth = e.navWidth + e.navTranslate, e.navPosition = e.navPosition + e.navTranslate, e._transform(e.navWidth, e.main), e._transform(e.navPosition, e.el))
        })
    },
    _toggleLevels17: function() {
        var e = this;
        $("#saucysidemenu17").on("click", function() {
            let n = $(this).closest("div.nav-level");
            $(this).next().hasClass("submenu") && ($(this).next().toggleClass("open"), n.toggleClass("nav-overlay nav-covered"), e.navWidth = e.navWidth + e.navTranslate, e.navPosition = e.navPosition + e.navTranslate, e._transform(e.navWidth, e.main), e._transform(e.navPosition, e.el))
        })
    },
    _toggleLevels18: function() {
        var e = this;
        $("#saucysidemenu18").on("click", function() {
            let n = $(this).closest("div.nav-level");
            $(this).next().hasClass("submenu") && ($(this).next().toggleClass("open"), n.toggleClass("nav-overlay nav-covered"), e.navWidth = e.navWidth + e.navTranslate, e.navPosition = e.navPosition + e.navTranslate, e._transform(e.navWidth, e.main), e._transform(e.navPosition, e.el))
        })
    },
    _toggleLevels19: function() {
        var e = this;
        $("#saucysidemenu19").on("click", function() {
            let n = $(this).closest("div.nav-level");
            $(this).next().hasClass("submenu") && ($(this).next().toggleClass("open"), n.toggleClass("nav-overlay nav-covered"), e.navWidth = e.navWidth + e.navTranslate, e.navPosition = e.navPosition + e.navTranslate, e._transform(e.navWidth, e.main), e._transform(e.navPosition, e.el))
        })
    },
    _toggleLevels20: function() {
        var e = this;
        $("#saucysidemenu20").on("click", function() {
            let n = $(this).closest("div.nav-level");
            $(this).next().hasClass("submenu") && ($(this).next().toggleClass("open"), n.toggleClass("nav-overlay nav-covered"), e.navWidth = e.navWidth + e.navTranslate, e.navPosition = e.navPosition + e.navTranslate, e._transform(e.navWidth, e.main), e._transform(e.navPosition, e.el))
        })
    },
    _toggleLevels21: function() {
        var e = this;
        $("#saucysidemenu21").on("click", function() {
            let n = $(this).closest("div.nav-level");
            $(this).next().hasClass("submenu") && ($(this).next().toggleClass("open"), n.toggleClass("nav-overlay nav-covered"), e.navWidth = e.navWidth + e.navTranslate, e.navPosition = e.navPosition + e.navTranslate, e._transform(e.navWidth, e.main), e._transform(e.navPosition, e.el))
        })
    },
    _toggleLevels22: function() {
        var e = this;
        $("#saucysidemenu22").on("click", function() {
            let n = $(this).closest("div.nav-level");
            $(this).next().hasClass("submenu") && ($(this).next().toggleClass("open"), n.toggleClass("nav-overlay nav-covered"), e.navWidth = e.navWidth + e.navTranslate, e.navPosition = e.navPosition + e.navTranslate, e._transform(e.navWidth, e.main), e._transform(e.navPosition, e.el))
        })
    },
    _toggleLevels23: function() {
        var e = this;
        $("#saucysidemenu23").on("click", function() {
            let n = $(this).closest("div.nav-level");
            $(this).next().hasClass("submenu") && ($(this).next().toggleClass("open"), n.toggleClass("nav-overlay nav-covered"), e.navWidth = e.navWidth + e.navTranslate, e.navPosition = e.navPosition + e.navTranslate, e._transform(e.navWidth, e.main), e._transform(e.navPosition, e.el))
        })
    },
    _toggleLevels24: function() {
        var e = this;
        $("#saucysidemenu24").on("click", function() {
            let n = $(this).closest("div.nav-level");
            $(this).next().hasClass("submenu") && ($(this).next().toggleClass("open"), n.toggleClass("nav-overlay nav-covered"), e.navWidth = e.navWidth + e.navTranslate, e.navPosition = e.navPosition + e.navTranslate, e._transform(e.navWidth, e.main), e._transform(e.navPosition, e.el))
        })
    },
    _toggleLevels25: function() {
        var e = this;
        $("#saucysidemenu25").on("click", function() {
            let n = $(this).closest("div.nav-level");
            $(this).next().hasClass("submenu") && ($(this).next().toggleClass("open"), n.toggleClass("nav-overlay nav-covered"), e.navWidth = e.navWidth + e.navTranslate, e.navPosition = e.navPosition + e.navTranslate, e._transform(e.navWidth, e.main), e._transform(e.navPosition, e.el))
        })
    },
    _toggleLevels26: function() {
        var e = this;
        $("#saucysidemenu26").on("click", function() {
            let n = $(this).closest("div.nav-level");
            $(this).next().hasClass("submenu") && ($(this).next().toggleClass("open"), n.toggleClass("nav-overlay nav-covered"), e.navWidth = e.navWidth + e.navTranslate, e.navPosition = e.navPosition + e.navTranslate, e._transform(e.navWidth, e.main), e._transform(e.navPosition, e.el))
        })
    },
    _toggleLevels27: function() {
        var e = this;
        $("#saucysidemenu27").on("click", function() {
            let n = $(this).closest("div.nav-level");
            $(this).next().hasClass("submenu") && ($(this).next().toggleClass("open"), n.toggleClass("nav-overlay nav-covered"), e.navWidth = e.navWidth + e.navTranslate, e.navPosition = e.navPosition + e.navTranslate, e._transform(e.navWidth, e.main), e._transform(e.navPosition, e.el))
        })
    },
    _toggleLevels28: function() {
        var e = this;
        $("#saucysidemenu28").on("click", function() {
            let n = $(this).closest("div.nav-level");
            $(this).next().hasClass("submenu") && ($(this).next().toggleClass("open"), n.toggleClass("nav-overlay nav-covered"), e.navWidth = e.navWidth + e.navTranslate, e.navPosition = e.navPosition + e.navTranslate, e._transform(e.navWidth, e.main), e._transform(e.navPosition, e.el))
        })
    },
    _toggleLevels29: function() {
        var e = this;
        $("#saucysidemenu29").on("click", function() {
            let n = $(this).closest("div.nav-level");
            $(this).next().hasClass("submenu") && ($(this).next().toggleClass("open"), n.toggleClass("nav-overlay nav-covered"), e.navWidth = e.navWidth + e.navTranslate, e.navPosition = e.navPosition + e.navTranslate, e._transform(e.navWidth, e.main), e._transform(e.navPosition, e.el))
        })
    },
    _toggleLevels30: function() {
        var e = this;
        $("#saucysidemenu30").on("click", function() {
            let n = $(this).closest("div.nav-level");
            $(this).next().hasClass("submenu") && ($(this).next().toggleClass("open"), n.toggleClass("nav-overlay nav-covered"), e.navWidth = e.navWidth + e.navTranslate, e.navPosition = e.navPosition + e.navTranslate, e._transform(e.navWidth, e.main), e._transform(e.navPosition, e.el))
        })
    },
    _toggleBack: function() {
        let t = this,
            n = $(t.defaults.backClass);
        n.on("click", function() {
            let n = $(this).closest(t.defaults.navLevel),
                e = $(this).closest(".nav-overlay.nav-covered");
            e.toggleClass("nav-overlay nav-covered"), t.navWidth = t.navWidth - t.navTranslate, t.navPosition = t.navPosition - t.navTranslate, t._transform(t.navWidth, t.main), t._transform(t.navPosition, t.el), n.hasClass("open") && n.toggleClass("open")
        })
    },
    _transform: function(n, e) {
        $(e).css("transform", "translate3d(-" + n + "px,0,0)")
    },
    _openMenu: function() {
        var n = this;
        $(n.trigger).on("click", function() {
            $(n.trigger).toggleClass("is-active"), $(n.trigger).hasClass("is-active") ? (n.menuOpen = !0, n._resetMenu()) : (n.menuOpen = !1, n.level = 0)
        })
    },
    _resetMenu: function() {
        this.navWidth = $(this.el).width(), this.navPosition = 0, $(".nav-overlay").removeClass("nav-overlay"), $(".submenu").removeClass("open")
    },
    _setLevels: function(n) {
        $(n).each(function(n) {
            $(this).attr("data-level", n + 1)
        })
    }
}, new e("nav", "#main", ".hamburger")
}), $(".back-icon1").click(function() {
document.getElementById("navigation").style.display = "none";

}), 

$("#hamburger").click(function() {
var n = $(this).data("img");
$(this).children("img").attr("src", n)
});
var dropdown = document.querySelectorAll(".dropdown"),
dropdownArray = Array.prototype.slice.call(dropdown, 0);

function myFunction() {
for (var n = document.getElementById("mySearch").value.toUpperCase(), e = document.getElementById("myMenu").getElementsByTagName("li"), t = 0; t < e.length; t++) - 1 < e[t].getElementsByTagName("a")[0].innerHTML.toUpperCase().indexOf(n) ? e[t].style.display = "" : e[t].style.display = "none"
}
dropdownArray.forEach(function(n) {
var e = n.querySelector('a[data-toggle="dropdown"]'),
    t = n.querySelector(".dropdown-menu"),
    s = e.querySelector("i.icon-arrow");
e.onclick = function(n) {
    t.hasClass("show") ? (t.classList.remove("show"), t.classList.add("hide"), s.classList.remove("open"), s.classList.add("close")) : (t.classList.add("show"), t.classList.remove("hide"), s.classList.add("open"), s.classList.remove("close")), n.preventDefault()
}
}), Element.prototype.hasClass = function(n) {
return this.className && new RegExp("(^|\\s)" + n + "(\\s|$)").test(this.className)
}, $("#searchimg").click(function() {
$("#mySearch").focus()
}), $(".item").click(function() {
$("li.dropdown").not(this).find("ul").hide(), $(this).find("ul").toggle()
}), $("#shopsaucy").click(function() {
$("li.dropdown").not(this).find("ul").show(), $(this).find("ul").toggle()
});



























/**
 * Minified by jsDelivr using Terser v5.15.1.
 * Original file: /npm/canvas-confetti@1.6.0/dist/confetti.browser.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
!function(t,e){!function t(e,n,a,i){var o=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL);function r(){}function l(t){var a=n.exports.Promise,i=void 0!==a?a:e.Promise;return"function"==typeof i?new i(t):(t(r,r),null)}var c,s,u,h,f,d,m,g,b,v=(u=Math.floor(1e3/60),h={},f=0,"function"==typeof requestAnimationFrame&&"function"==typeof cancelAnimationFrame?(c=function(t){var e=Math.random();return h[e]=requestAnimationFrame((function n(a){f===a||f+u-1<a?(f=a,delete h[e],t()):h[e]=requestAnimationFrame(n)})),e},s=function(t){h[t]&&cancelAnimationFrame(h[t])}):(c=function(t){return setTimeout(t,u)},s=function(t){return clearTimeout(t)}),{frame:c,cancel:s}),M=(g={},function(){if(d)return d;if(!a&&o){var e=["var CONFETTI, SIZE = {}, module = {};","("+t.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join("\n");try{d=new Worker(URL.createObjectURL(new Blob([e])))}catch(t){return void 0!==typeof console&&"function"==typeof console.warn&&console.warn("🎊 Could not load worker",t),null}!function(t){function e(e,n){t.postMessage({options:e||{},callback:n})}t.init=function(e){var n=e.transferControlToOffscreen();t.postMessage({canvas:n},[n])},t.fire=function(n,a,i){if(m)return e(n,null),m;var o=Math.random().toString(36).slice(2);return m=l((function(a){function r(e){e.data.callback===o&&(delete g[o],t.removeEventListener("message",r),m=null,i(),a())}t.addEventListener("message",r),e(n,o),g[o]=r.bind(null,{data:{callback:o}})}))},t.reset=function(){for(var e in t.postMessage({reset:!0}),g)g[e](),delete g[e]}}(d)}return d}),p={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function y(t,e,n){return function(t,e){return e?e(t):t}(t&&null!=t[e]?t[e]:p[e],n)}function w(t){return t<0?0:Math.floor(t)}function x(t){return parseInt(t,16)}function C(t){return t.map(T)}function T(t){var e=String(t).replace(/[^0-9a-f]/gi,"");return e.length<6&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),{r:x(e.substring(0,2)),g:x(e.substring(2,4)),b:x(e.substring(4,6))}}function I(t){t.width=document.documentElement.clientWidth,t.height=document.documentElement.clientHeight}function k(t){var e=t.getBoundingClientRect();t.width=e.width,t.height=e.height}function E(t,e,n,o,r){var c,s,u=e.slice(),h=t.getContext("2d"),f=l((function(e){function l(){c=s=null,h.clearRect(0,0,o.width,o.height),r(),e()}c=v.frame((function e(){!a||o.width===i.width&&o.height===i.height||(o.width=t.width=i.width,o.height=t.height=i.height),o.width||o.height||(n(t),o.width=t.width,o.height=t.height),h.clearRect(0,0,o.width,o.height),u=u.filter((function(t){return function(t,e){e.x+=Math.cos(e.angle2D)*e.velocity+e.drift,e.y+=Math.sin(e.angle2D)*e.velocity+e.gravity,e.wobble+=e.wobbleSpeed,e.velocity*=e.decay,e.tiltAngle+=.1,e.tiltSin=Math.sin(e.tiltAngle),e.tiltCos=Math.cos(e.tiltAngle),e.random=Math.random()+2,e.wobbleX=e.x+10*e.scalar*Math.cos(e.wobble),e.wobbleY=e.y+10*e.scalar*Math.sin(e.wobble);var n=e.tick++/e.totalTicks,a=e.x+e.random*e.tiltCos,i=e.y+e.random*e.tiltSin,o=e.wobbleX+e.random*e.tiltCos,r=e.wobbleY+e.random*e.tiltSin;if(t.fillStyle="rgba("+e.color.r+", "+e.color.g+", "+e.color.b+", "+(1-n)+")",t.beginPath(),"circle"===e.shape)t.ellipse?t.ellipse(e.x,e.y,Math.abs(o-a)*e.ovalScalar,Math.abs(r-i)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI):function(t,e,n,a,i,o,r,l,c){t.save(),t.translate(e,n),t.rotate(o),t.scale(a,i),t.arc(0,0,1,r,l,c),t.restore()}(t,e.x,e.y,Math.abs(o-a)*e.ovalScalar,Math.abs(r-i)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI);else if("star"===e.shape)for(var l=Math.PI/2*3,c=4*e.scalar,s=8*e.scalar,u=e.x,h=e.y,f=5,d=Math.PI/f;f--;)u=e.x+Math.cos(l)*s,h=e.y+Math.sin(l)*s,t.lineTo(u,h),l+=d,u=e.x+Math.cos(l)*c,h=e.y+Math.sin(l)*c,t.lineTo(u,h),l+=d;else t.moveTo(Math.floor(e.x),Math.floor(e.y)),t.lineTo(Math.floor(e.wobbleX),Math.floor(i)),t.lineTo(Math.floor(o),Math.floor(r)),t.lineTo(Math.floor(a),Math.floor(e.wobbleY));return t.closePath(),t.fill(),e.tick<e.totalTicks}(h,t)})),u.length?c=v.frame(e):l()})),s=l}));return{addFettis:function(t){return u=u.concat(t),f},canvas:t,promise:f,reset:function(){c&&v.cancel(c),s&&s()}}}function S(t,n){var a,i=!t,r=!!y(n||{},"resize"),c=y(n,"disableForReducedMotion",Boolean),s=o&&!!y(n||{},"useWorker")?M():null,u=i?I:k,h=!(!t||!s)&&!!t.__confetti_initialized,f="function"==typeof matchMedia&&matchMedia("(prefers-reduced-motion)").matches;function d(e,n,i){for(var o,r,l,c,s,h=y(e,"particleCount",w),f=y(e,"angle",Number),d=y(e,"spread",Number),m=y(e,"startVelocity",Number),g=y(e,"decay",Number),b=y(e,"gravity",Number),v=y(e,"drift",Number),M=y(e,"colors",C),p=y(e,"ticks",Number),x=y(e,"shapes"),T=y(e,"scalar"),I=function(t){var e=y(t,"origin",Object);return e.x=y(e,"x",Number),e.y=y(e,"y",Number),e}(e),k=h,S=[],F=t.width*I.x,N=t.height*I.y;k--;)S.push((o={x:F,y:N,angle:f,spread:d,startVelocity:m,color:M[k%M.length],shape:x[(c=0,s=x.length,Math.floor(Math.random()*(s-c))+c)],ticks:p,decay:g,gravity:b,drift:v,scalar:T},r=void 0,l=void 0,r=o.angle*(Math.PI/180),l=o.spread*(Math.PI/180),{x:o.x,y:o.y,wobble:10*Math.random(),wobbleSpeed:Math.min(.11,.1*Math.random()+.05),velocity:.5*o.startVelocity+Math.random()*o.startVelocity,angle2D:-r+(.5*l-Math.random()*l),tiltAngle:(.5*Math.random()+.25)*Math.PI,color:o.color,shape:o.shape,tick:0,totalTicks:o.ticks,decay:o.decay,drift:o.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:3*o.gravity,ovalScalar:.6,scalar:o.scalar}));return a?a.addFettis(S):(a=E(t,S,u,n,i)).promise}function m(n){var o=c||y(n,"disableForReducedMotion",Boolean),m=y(n,"zIndex",Number);if(o&&f)return l((function(t){t()}));i&&a?t=a.canvas:i&&!t&&(t=function(t){var e=document.createElement("canvas");return e.style.position="fixed",e.style.top="0px",e.style.left="0px",e.style.pointerEvents="none",e.style.zIndex=t,e}(m),document.body.appendChild(t)),r&&!h&&u(t);var g={width:t.width,height:t.height};function b(){if(s){var e={getBoundingClientRect:function(){if(!i)return t.getBoundingClientRect()}};return u(e),void s.postMessage({resize:{width:e.width,height:e.height}})}g.width=g.height=null}function v(){a=null,r&&e.removeEventListener("resize",b),i&&t&&(document.body.removeChild(t),t=null,h=!1)}return s&&!h&&s.init(t),h=!0,s&&(t.__confetti_initialized=!0),r&&e.addEventListener("resize",b,!1),s?s.fire(n,g,v):d(n,g,v)}return m.reset=function(){s&&s.reset(),a&&a.reset()},m}function F(){return b||(b=S(null,{useWorker:!0,resize:!0})),b}n.exports=function(){return F().apply(this,arguments)},n.exports.reset=function(){F().reset()},n.exports.create=S}(function(){return void 0!==t?t:"undefined"!=typeof self?self:this||{}}(),e,!1),t.confetti=e.exports}(window,{});
//# sourceMappingURL=/sm/6de00f2697a1683b235e589897df757a94e6809643432a9e3ad259420752442d.map







"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};
//! annyang
//! version : 2.6.1
//! author  : Tal Ater @TalAter
//! license : MIT
//! https://www.TalAter.com/annyang/
//! annyang
//! version : 2.6.1
//! author  : Tal Ater @TalAter
//! license : MIT
//! https://www.TalAter.com/annyang/
!function(e,n){"function"==typeof define&&define.amd?define([],function(){return e.annyang=n(e)}):"object"===("undefined"==typeof module?"undefined":_typeof(module))&&module.exports?module.exports=n(e):e.annyang=n(e)}("undefined"!=typeof window?window:void 0,function(r,i){var t,o=r.SpeechRecognition||r.webkitSpeechRecognition||r.mozSpeechRecognition||r.msSpeechRecognition||r.oSpeechRecognition;if(!o)return null;var a,c,s=[],u={start:[],error:[],end:[],soundstart:[],result:[],resultMatch:[],resultNoMatch:[],errorNetwork:[],errorPermissionBlocked:[],errorPermissionDenied:[]},f=0,l=0,d=!1,p="font-weight: bold; color: #00f;",g=!1,m=!1,h=/\s*\((.*?)\)\s*/g,y=/(\(\?:[^)]+\))\?/g,b=/(\(\?)?:\w+/g,v=/\*\w+/g,w=/[\-{}\[\]+?.,\\\^$|#]/g,S=function(e){for(var n=arguments.length,t=Array(1<n?n-1:0),o=1;o<n;o++)t[o-1]=arguments[o];e.forEach(function(e){e.callback.apply(e.context,t)})},e=function(){return a!==i},k=function(e,n){-1!==e.indexOf("%c")||n?console.log(e,n||p):console.log(e)},x=function(){e()||t.init({},!1)},R=function(e,n,t){s.push({command:e,callback:n,originalPhrase:t}),d&&k("Command successfully loaded: %c"+t,p)},P=function(e){var n;S(u.result,e);for(var t=0;t<e.length;t++){n=e[t].trim(),d&&k("Speech recognized: %c"+n,p);for(var o=0,r=s.length;o<r;o++){var i=s[o],a=i.command.exec(n);if(a){var c=a.slice(1);return d&&(k("command matched: %c"+i.originalPhrase,p),c.length&&k("with parameters",c)),i.callback.apply(this,c),void S(u.resultMatch,n,i.originalPhrase,e)}}}S(u.resultNoMatch,e)};return t={init:function(e){var n=!(1<arguments.length&&arguments[1]!==i)||arguments[1];a&&a.abort&&a.abort(),(a=new o).maxAlternatives=5,a.continuous="http:"===r.location.protocol,a.lang="en-US",a.onstart=function(){m=!0,S(u.start)},a.onsoundstart=function(){S(u.soundstart)},a.onerror=function(e){switch(S(u.error,e),e.error){case"network":S(u.errorNetwork,e);break;case"not-allowed":case"service-not-allowed":c=!1,(new Date).getTime()-f<200?S(u.errorPermissionBlocked,e):S(u.errorPermissionDenied,e)}},a.onend=function(){if(m=!1,S(u.end),c){var e=(new Date).getTime()-f;(l+=1)%10==0&&d&&k("Speech Recognition is repeatedly stopping and starting. See http://is.gd/annyang_restarts for tips."),e<1e3?setTimeout(function(){t.start({paused:g})},1e3-e):t.start({paused:g})}},a.onresult=function(e){if(g)return d&&k("Speech heard, but annyang is paused"),!1;for(var n=e.results[e.resultIndex],t=[],o=0;o<n.length;o++)t[o]=n[o].transcript;P(t)},n&&(s=[]),e.length&&this.addCommands(e)},start:function(e){x(),g=(e=e||{}).paused!==i&&!!e.paused,c=e.autoRestart===i||!!e.autoRestart,e.continuous!==i&&(a.continuous=!!e.continuous),f=(new Date).getTime();try{a.start()}catch(e){d&&k(e.message)}},abort:function(){c=!1,l=0,e()&&a.abort()},pause:function(){g=!0},resume:function(){t.start()},debug:function(){var e=!(0<arguments.length&&arguments[0]!==i)||arguments[0];d=!!e},setLanguage:function(e){x(),a.lang=e},addCommands:function(e){var n,t;for(var o in x(),e)if(e.hasOwnProperty(o))if("function"==typeof(n=r[e[o]]||e[o]))R((t=(t=o).replace(w,"\\$&").replace(h,"(?:$1)?").replace(b,function(e,n){return n?e:"([^\\s]+)"}).replace(v,"(.*?)").replace(y,"\\s*$1?\\s*"),new RegExp("^"+t+"$","i")),n,o);else{if(!("object"===(void 0===n?"undefined":_typeof(n))&&n.regexp instanceof RegExp)){d&&k("Can not register command: %c"+o,p);continue}R(new RegExp(n.regexp.source,"i"),n.callback,o)}},removeCommands:function(t){t===i?s=[]:(t=Array.isArray(t)?t:[t],s=s.filter(function(e){for(var n=0;n<t.length;n++)if(t[n]===e.originalPhrase)return!1;return!0}))},addCallback:function(e,n,t){var o=r[n]||n;"function"==typeof o&&u[e]!==i&&u[e].push({callback:o,context:t||this})},removeCallback:function(e,n){var t=function(e){return e.callback!==n};for(var o in u)u.hasOwnProperty(o)&&(e!==i&&e!==o||(u[o]=n===i?[]:u[o].filter(t)))},isListening:function(){return m&&!g},getSpeechRecognizer:function(){return a},trigger:function(e){t.isListening()?(Array.isArray(e)||(e=[e]),P(e)):d&&k(m?"Speech heard, but annyang is paused":"Cannot trigger while annyang is aborted")}}});




document.addEventListener("DOMContentLoaded", function() {


/* eslint-disable no-unused-expressions, no-var, prefer-template, vars-on-top, no-console, no-template-curly-in-string */

!(function () {
    if (!window.MemberSpace) {
      window.MemberSpace = {};
    }
  
    var currentBundleSource = 'PROD';
    var ENTRY_POINTS = {
      DEV: 'http://localhost:3000/static/js/bundle.js',
      STAGING: '//cdn.memberspace-staging.com/scripts/widgets.js',
      PROD: '//cdn.memberspace.com/scripts/widgets.js',
    };
  
    window.MemberSpace.overrideBundle = function (rawSrc, rawEnvSet) {
      if (!rawSrc) {
        // Clear previous overrides
        sessionStorage.removeItem('ms-bundleSource');
        sessionStorage.removeItem('ms-envSet');
  
        window.location.reload();
        return 'CLEARED';
      }
  
      var src = rawSrc.toUpperCase();
      var envSet = rawEnvSet && rawEnvSet.toUpperCase();
  
      if (src !== 'DEV' && src !== 'STAGING' && src !== 'PROD')
        return "bundleSource must be one of [ 'DEV' / 'STAGING' / 'PROD' ]";
  
      if (envSet && envSet !== 'DEV' && envSet !== 'STAGING' && envSet !== 'PROD')
        return "envSet must be one of [ undef / 'DEV' / 'STAGING' / 'PROD' ]";
  
      // store bundleSource in LS
      sessionStorage.setItem('ms-bundleSource', src);
  
      // store envSet in LS
      if (envSet) {
        sessionStorage.setItem('ms-envSet', envSet);
      } else {
        sessionStorage.removeItem('ms-envSet');
      }
  
      window.location.reload();
      return 'OK';
    };
  
    function init() {
      var cdnBaseUrl = '//cdn.memberspace.com/widget/20230928T190717X377543476';
  
      var scriptEl = document.createElement('script');
      scriptEl.setAttribute('src', cdnBaseUrl + '/scripts/main.js');
      document.getElementsByTagName('head')[0].appendChild(scriptEl);
  
      var linkEl = document.createElement('link');
      linkEl.setAttribute('rel', 'stylesheet');
      linkEl.setAttribute('type', 'text/css');
      linkEl.setAttribute('href', cdnBaseUrl + '/styles/widget.css');
      document.getElementsByTagName('head')[0].appendChild(linkEl);
    }
  
    function alternateInit(source) {
      // Inject the loader of another bundle
      console.warn(
        'Loading alternate (' + source + ') bundle from: ' + ENTRY_POINTS[source]
      );
  
      var scriptEl = document.createElement('script');
      scriptEl.setAttribute('src', ENTRY_POINTS[source]);
      document.getElementsByTagName('head')[0].appendChild(scriptEl);
    }
  
    function testCapabilities() {
      // Do not redirect if check is disabled
      if (window.MemberSpace.disableOldBrowserRedirect) {
        return;
      }
  
      // Fail gracefully on "less than modern" browsers
      try {
        // Test global capabilities
        if (!Array.prototype.includes)
          throw new Error('Browser is not Array includes capable');
        if (!window.fetch) throw new Error('Browser is not fetch capable');
        if (!window.MutationObserver)
          throw new Error('Browser is not MutationObserver capable');
        if (!window.URL) throw new Error('Browser is not URL capable');
        if (!window.URLSearchParams)
          throw new Error('Browser is not URLSearchParams capable');
        if (!window.CustomEvent)
          throw new Error('Browser is not CustomEvent capable');
        if (!document.evaluate) throw new Error('Browser is not xpath capable');
  
        // if (!window.ResizeObserver)
        //  throw new Error('Browser is not ResizeObserver capable');
  
        if (!window.Intl)
          // https://formatjs.io/docs/react-intl/#runtime-requirements
          throw new Error('Browser is not Intl capable');
        if (!window.Intl.NumberFormat)
          throw new Error('Browser is not Intl.NumberFormat capable');
        if (!window.Intl.DateTimeFormat)
          throw new Error('Browser is not Intl.DateTimeFormat capable');
  
        // Test element capabilities
        var testEl = document.createElement('ms-test');
        if (!testEl.replaceWith)
          throw new Error('Browser is not element.replaceWith capable');
  
        if (!testEl.remove)
          throw new Error('Browser is not element.remove capable');
  
        // Test localStorage and sessionStorage (will throw if cookies are disabled)
        window.localStorage.setItem('ms-cap-test', true);
        window.localStorage.getItem('ms-cap-test');
        window.localStorage.removeItem('ms-cap-test');
        window.sessionStorage.setItem('ms-cap-test', true);
        window.sessionStorage.getItem('ms-cap-test');
        window.sessionStorage.removeItem('ms-cap-test');
      } catch (e) {
        console.error(
          'Memberspace widget: UA failed capabilities check: ' + e.message
        );
        var fallback = 'https://outdated-browser.com';
        if (window.MemberSpace && window.MemberSpace.subdomain) {
          fallback = fallback + '?subdomain=' + window.MemberSpace.subdomain;
        }
        window.location.href = fallback;
      }
    }
  
    // Check if bundle source is overridden. May throw if access is denied to sessionStorage
    try {
      var overrideBundleSource = sessionStorage.getItem('ms-bundleSource');
      if (overrideBundleSource && overrideBundleSource !== currentBundleSource) {
        alternateInit(overrideBundleSource);
        return;
      }
    } catch (e) {
      // noop
    }
  
    init();
    testCapabilities();
  })();

});



function saucysearch() {
    document.getElementById("mySearch").style.display = "none";
    document.getElementById("myMenu").style.display = "none";
    document.getElementById("searchimg2").style.display = "none";
  }

  // Adding a click event listener to the li element
  document.getElementById("saucysearchsaucy").addEventListener("click", saucysearch);