
<iframe id="iframeright" frameborder="0" height="0" width="0"></iframe>
<iframe id="iframeleft" frameborder="0" height="0" width="0"></iframe>

<div class="hamburger hamburger--squeeze" type="button" id="hamburger" on:click={sidemenu2}><span class="hamburger-box" on:click={sidemenu}>
  <span class="hamburger-inner" alt="settings" on:click={sidemenu2}></span></span></div>
  <div id="main"><div class="row"><div class="col s6"><div class="logo">
  </div></div><div class="col s6"></div></div></div>
<script>


  import jQuery from 'jquery';

import { tick } from 'svelte';

  let settingssaucy = false;


  function saucylanguages() {
    const script = document.createElement('script');
    script.src = 'https://cdn.gtranslate.net/widgets/latest/dwf.js';
    script.async = true;
    script.onload = () => {
      // The script has been successfully loaded
      console.log('External script has been loaded');
    };

    document.head.appendChild(script);

    window.gtranslateSettings = {"default_language":"en","wrapper_selector":".gtranslate_wrapper","switcher_horizontal_position":"inline","switcher_text_color":"#f7f7f7","switcher_arrow_color":"#f2f2f2","switcher_border_color":"#161616","switcher_background_color":"#303030","switcher_background_shadow_color":"#474747","switcher_background_hover_color":"#3a3a3a","dropdown_text_color":"#eaeaea","dropdown_hover_color":"#748393","dropdown_background_color":"#474747"}
  }
  function sidemenu2() {
    settingssaucy = true;
    document.querySelector("#navigation").style.display = "inline";
  document.querySelector(".nav-header").style.display = "inline";
  document.querySelector(".nav-level").style.display = "inline";
  document.querySelector(".side2").style.display = "inline";
  document.querySelector(".side").style.display = "inline";
 
  
  }

  $: if (settingssaucy) {
    tick().then(() => {
      
      function closesaucysidemenu() {
      document.querySelector("#navigation").style.display = "none";
    }
         jQuery("#hamburger").click(function() {
            jQuery("#iframe1").length || jQuery("#stars").html('<embed id="iframe1" style="opacity: 0;" onload="this.style.opacity = 1;" src="https://p61q9.csb.app/" width="100%" frameborder="0" frameborder="none"></embed>')
        });
    
      jQuery(function() {
        jQuery("#hide").click(function() {
            jQuery("section").css("top", "0px")
        })
    }), jQuery(function() {
        jQuery("#show").click(function() {
            jQuery("section").css("top", "50px")
        })
    }),
    function() {
        var s, t, n, e, a, i;
    
        function o(n) {
            for (var e = (this.el = n).className.replace(/^\s+|\s+jQuery/g, "").split(/\s+/), t = 0; t < e.length; t++) s.call(this, e[t])
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
    ddfullscreenmenu.init(), jQuery(function() {
    var n;
    
    function e(n, e, t, s) {
        this.el = n, this.main = e, this.trigger = t, this.options = function(n, e) {
            for (var t in e) e.hasOwnProperty(t) && (n[t] = e[t]);
            return n
        }(this.defaults, s), this._init()
    }
    n = "#navigation", jQuery(".hamburger").on("click", function() {
        jQuery(n).toggleClass("open"), jQuery(n).hasClass("open") ? (jQuery(n).css("transform", "translateX(0)"), jQuery("#main").css("transform", "translateX(-300px)")) : (jQuery(n).css("transform", "translateX(300px)"), jQuery("#main").css("transform", "translateX(0)"), jQuery("#navigation").width(), jQuery(".nav-overlay").removeClass("nav-overlay"), jQuery(".submenu").removeClass("open")), jQuery("#main").toggleClass("nav-open")
    }), jQuery("#navigation"), jQuery("#main"), jQuery("nav").width(), e.prototype = {
        defaults: {
            backClass: ".back",
            navLevel: ".nav-level"
        },
        _init: function() {
            this.level = 1, this.menuOpen = !1, this.navTranslate = 40, this.navPosition = 0, this.navWidth = jQuery(this.el).width(), this._openMenu(), this._toggleLevels(), this._toggleLevels2(), this._toggleLevels3(), this._toggleLevels4(), this._toggleLevels5(), this._toggleLevels6(), this._toggleLevels7(), this._toggleLevels8(), this._toggleLevels9(), this._toggleLevels10(), this._toggleLevels11(), this._toggleLevels12(), this._toggleLevels13(), this._toggleLevels14(), this._toggleLevels15(), this._toggleLevels16(), this._toggleLevels17(), this._toggleLevels18(), this._toggleLevels19(), this._toggleLevels20(), this._toggleLevels21(), this._toggleLevels22(), this._toggleLevels23(), this._toggleLevels24(), this._toggleLevels25(), this._toggleLevels26(), this._toggleLevels27(), this._toggleLevels28(), this._toggleLevels29(), this._toggleLevels30(), this._toggleBack(), this._setLevels(this.defaults.navLevel)
        },
        _toggleLevels: function() {
            var e = this;
            jQuery("#saucysidemenu").on("click", function() {
                let n = jQuery(this).closest("div.nav-level");
                jQuery(this).next().hasClass("submenu") && (jQuery(this).next().toggleClass("open"), n.toggleClass("nav-overlay nav-covered"), e.navWidth = e.navWidth + e.navTranslate, e.navPosition = e.navPosition + e.navTranslate, e._transform(e.navWidth, e.main), e._transform(e.navPosition, e.el))
            })
        },
        _toggleLevels2: function() {
            var e = this;
            jQuery("#saucysidemenu2").on("click", function() {
              
                let n = jQuery(this).closest("div.nav-level");
                jQuery(this).next().hasClass("submenu") && (jQuery(this).next().toggleClass("open"), n.toggleClass("nav-overlay nav-covered"), e.navWidth = e.navWidth + e.navTranslate, e.navPosition = e.navPosition + e.navTranslate, e._transform(e.navWidth, e.main), e._transform(e.navPosition, e.el))
            })
        },
        _toggleLevels3: function() {
            var e = this;
            jQuery("#saucysidemenu3").on("click", function() {
              
                let n = jQuery(this).closest("div.nav-level");
                jQuery(this).next().hasClass("submenu") && (jQuery(this).next().toggleClass("open"), n.toggleClass("nav-overlay nav-covered"), e.navWidth = e.navWidth + e.navTranslate, e.navPosition = e.navPosition + e.navTranslate, e._transform(e.navWidth, e.main), e._transform(e.navPosition, e.el))
            })
        },
        _toggleLevels4: function() {
            var e = this;
            jQuery("#saucysidemenu4").on("click", function() {
              
                let n = jQuery(this).closest("div.nav-level");
                jQuery(this).next().hasClass("submenu") && (jQuery(this).next().toggleClass("open"), n.toggleClass("nav-overlay nav-covered"), e.navWidth = e.navWidth + e.navTranslate, e.navPosition = e.navPosition + e.navTranslate, e._transform(e.navWidth, e.main), e._transform(e.navPosition, e.el))
            })
        },
        _toggleLevels5: function() {
            var e = this;
            jQuery("#saucysidemenu5").on("click", function() {
              
                let n = jQuery(this).closest("div.nav-level");
                jQuery(this).next().hasClass("submenu") && (jQuery(this).next().toggleClass("open"), n.toggleClass("nav-overlay nav-covered"), e.navWidth = e.navWidth + e.navTranslate, e.navPosition = e.navPosition + e.navTranslate, e._transform(e.navWidth, e.main), e._transform(e.navPosition, e.el))
            })
        },
        _toggleLevels6: function() {
            var e = this;
            jQuery("#saucysidemenu6").on("click", function() {
              
                let n = jQuery(this).closest("div.nav-level");
                jQuery(this).next().hasClass("submenu") && (jQuery(this).next().toggleClass("open"), n.toggleClass("nav-overlay nav-covered"), e.navWidth = e.navWidth + e.navTranslate, e.navPosition = e.navPosition + e.navTranslate, e._transform(e.navWidth, e.main), e._transform(e.navPosition, e.el))
            })
        },
        _toggleLevels7: function() {
            var e = this;
            jQuery("#saucysidemenu7").on("click", function() {
              
                let n = jQuery(this).closest("div.nav-level");
                jQuery(this).next().hasClass("submenu") && (jQuery(this).next().toggleClass("open"), n.toggleClass("nav-overlay nav-covered"), e.navWidth = e.navWidth + e.navTranslate, e.navPosition = e.navPosition + e.navTranslate, e._transform(e.navWidth, e.main), e._transform(e.navPosition, e.el))
            })
        },
        _toggleLevels8: function() {
            var e = this;
            jQuery("#saucysidemenu8").on("click", function() {
              
                let n = jQuery(this).closest("div.nav-level");
                jQuery(this).next().hasClass("submenu") && (jQuery(this).next().toggleClass("open"), n.toggleClass("nav-overlay nav-covered"), e.navWidth = e.navWidth + e.navTranslate, e.navPosition = e.navPosition + e.navTranslate, e._transform(e.navWidth, e.main), e._transform(e.navPosition, e.el))
            })
        },
        _toggleLevels9: function() {
            var e = this;
            jQuery("#saucysidemenu9").on("click", function() {
              
                let n = jQuery(this).closest("div.nav-level");
                jQuery(this).next().hasClass("submenu") && (jQuery(this).next().toggleClass("open"), n.toggleClass("nav-overlay nav-covered"), e.navWidth = e.navWidth + e.navTranslate, e.navPosition = e.navPosition + e.navTranslate, e._transform(e.navWidth, e.main), e._transform(e.navPosition, e.el))
            })
        },
        _toggleLevels10: function() {
            var e = this;
            jQuery("#saucysidemenu10").on("click", function() {
              
                let n = jQuery(this).closest("div.nav-level");
                jQuery(this).next().hasClass("submenu") && (jQuery(this).next().toggleClass("open"), n.toggleClass("nav-overlay nav-covered"), e.navWidth = e.navWidth + e.navTranslate, e.navPosition = e.navPosition + e.navTranslate, e._transform(e.navWidth, e.main), e._transform(e.navPosition, e.el))
            })
        },
        _toggleLevels11: function() {
            var e = this;
            jQuery("#saucysidemenu11").on("click", function() {
              
                let n = jQuery(this).closest("div.nav-level");
                jQuery(this).next().hasClass("submenu") && (jQuery(this).next().toggleClass("open"), n.toggleClass("nav-overlay nav-covered"), e.navWidth = e.navWidth + e.navTranslate, e.navPosition = e.navPosition + e.navTranslate, e._transform(e.navWidth, e.main), e._transform(e.navPosition, e.el))
            })
        },
        _toggleLevels12: function() {
            var e = this;
            jQuery("#saucysidemenu12").on("click", function() {
              
                let n = jQuery(this).closest("div.nav-level");
                jQuery(this).next().hasClass("submenu") && (jQuery(this).next().toggleClass("open"), n.toggleClass("nav-overlay nav-covered"), e.navWidth = e.navWidth + e.navTranslate, e.navPosition = e.navPosition + e.navTranslate, e._transform(e.navWidth, e.main), e._transform(e.navPosition, e.el))
            })
        },
        _toggleLevels13: function() {
            var e = this;
            jQuery("#saucysidemenu13").on("click", function() {
              
                let n = jQuery(this).closest("div.nav-level");
                jQuery(this).next().hasClass("submenu") && (jQuery(this).next().toggleClass("open"), n.toggleClass("nav-overlay nav-covered"), e.navWidth = e.navWidth + e.navTranslate, e.navPosition = e.navPosition + e.navTranslate, e._transform(e.navWidth, e.main), e._transform(e.navPosition, e.el))
            })
        },
        _toggleLevels14: function() {
            var e = this;
            jQuery("#saucysidemenu14").on("click", function() {
              
                let n = jQuery(this).closest("div.nav-level");
                jQuery(this).next().hasClass("submenu") && (jQuery(this).next().toggleClass("open"), n.toggleClass("nav-overlay nav-covered"), e.navWidth = e.navWidth + e.navTranslate, e.navPosition = e.navPosition + e.navTranslate, e._transform(e.navWidth, e.main), e._transform(e.navPosition, e.el))
            })
        },
        _toggleLevels15: function() {
            var e = this;
            jQuery("#saucysidemenu15").on("click", function() {
              
                let n = jQuery(this).closest("div.nav-level");
                jQuery(this).next().hasClass("submenu") && (jQuery(this).next().toggleClass("open"), n.toggleClass("nav-overlay nav-covered"), e.navWidth = e.navWidth + e.navTranslate, e.navPosition = e.navPosition + e.navTranslate, e._transform(e.navWidth, e.main), e._transform(e.navPosition, e.el))
            })
        },
        _toggleLevels16: function() {
            var e = this;
            jQuery("#saucysidemenu16").on("click", function() {
              
                let n = jQuery(this).closest("div.nav-level");
                jQuery(this).next().hasClass("submenu") && (jQuery(this).next().toggleClass("open"), n.toggleClass("nav-overlay nav-covered"), e.navWidth = e.navWidth + e.navTranslate, e.navPosition = e.navPosition + e.navTranslate, e._transform(e.navWidth, e.main), e._transform(e.navPosition, e.el))
            })
        },
        _toggleLevels17: function() {
            var e = this;
            jQuery("#saucysidemenu17").on("click", function() {
              
                let n = jQuery(this).closest("div.nav-level");
                jQuery(this).next().hasClass("submenu") && (jQuery(this).next().toggleClass("open"), n.toggleClass("nav-overlay nav-covered"), e.navWidth = e.navWidth + e.navTranslate, e.navPosition = e.navPosition + e.navTranslate, e._transform(e.navWidth, e.main), e._transform(e.navPosition, e.el))
            })
        },
        _toggleLevels18: function() {
            var e = this;
            jQuery("#saucysidemenu18").on("click", function() {
              
                let n = jQuery(this).closest("div.nav-level");
                jQuery(this).next().hasClass("submenu") && (jQuery(this).next().toggleClass("open"), n.toggleClass("nav-overlay nav-covered"), e.navWidth = e.navWidth + e.navTranslate, e.navPosition = e.navPosition + e.navTranslate, e._transform(e.navWidth, e.main), e._transform(e.navPosition, e.el))
            })
        },
        _toggleLevels19: function() {
            var e = this;
            jQuery("#saucysidemenu19").on("click", function() {
              
                let n = jQuery(this).closest("div.nav-level");
                jQuery(this).next().hasClass("submenu") && (jQuery(this).next().toggleClass("open"), n.toggleClass("nav-overlay nav-covered"), e.navWidth = e.navWidth + e.navTranslate, e.navPosition = e.navPosition + e.navTranslate, e._transform(e.navWidth, e.main), e._transform(e.navPosition, e.el))
            })
        },
        _toggleLevels20: function() {
            var e = this;
            jQuery("#saucysidemenu20").on("click", function() {
              
                let n = jQuery(this).closest("div.nav-level");
                jQuery(this).next().hasClass("submenu") && (jQuery(this).next().toggleClass("open"), n.toggleClass("nav-overlay nav-covered"), e.navWidth = e.navWidth + e.navTranslate, e.navPosition = e.navPosition + e.navTranslate, e._transform(e.navWidth, e.main), e._transform(e.navPosition, e.el))
            })
        },
        _toggleLevels21: function() {
            var e = this;
            jQuery("#saucysidemenu21").on("click", function() {
              
                let n = jQuery(this).closest("div.nav-level");
                jQuery(this).next().hasClass("submenu") && (jQuery(this).next().toggleClass("open"), n.toggleClass("nav-overlay nav-covered"), e.navWidth = e.navWidth + e.navTranslate, e.navPosition = e.navPosition + e.navTranslate, e._transform(e.navWidth, e.main), e._transform(e.navPosition, e.el))
            })
        },
        _toggleLevels22: function() {
            var e = this;
            jQuery("#saucysidemenu22").on("click", function() {
              
                let n = jQuery(this).closest("div.nav-level");
                jQuery(this).next().hasClass("submenu") && (jQuery(this).next().toggleClass("open"), n.toggleClass("nav-overlay nav-covered"), e.navWidth = e.navWidth + e.navTranslate, e.navPosition = e.navPosition + e.navTranslate, e._transform(e.navWidth, e.main), e._transform(e.navPosition, e.el))
            })
        },
        _toggleLevels23: function() {
            var e = this;
            jQuery("#saucysidemenu23").on("click", function() {
              
                let n = jQuery(this).closest("div.nav-level");
                jQuery(this).next().hasClass("submenu") && (jQuery(this).next().toggleClass("open"), n.toggleClass("nav-overlay nav-covered"), e.navWidth = e.navWidth + e.navTranslate, e.navPosition = e.navPosition + e.navTranslate, e._transform(e.navWidth, e.main), e._transform(e.navPosition, e.el))
            })
        },
        _toggleLevels24: function() {
            var e = this;
            jQuery("#saucysidemenu24").on("click", function() {
                let n = jQuery(this).closest("div.nav-level");
                jQuery(this).next().hasClass("submenu") && (jQuery(this).next().toggleClass("open"), n.toggleClass("nav-overlay nav-covered"), e.navWidth = e.navWidth + e.navTranslate, e.navPosition = e.navPosition + e.navTranslate, e._transform(e.navWidth, e.main), e._transform(e.navPosition, e.el))
            })
        },
        _toggleLevels25: function() {
            var e = this;
            jQuery("#saucysidemenu25").on("click", function() {
                let n = jQuery(this).closest("div.nav-level");
                jQuery(this).next().hasClass("submenu") && (jQuery(this).next().toggleClass("open"), n.toggleClass("nav-overlay nav-covered"), e.navWidth = e.navWidth + e.navTranslate, e.navPosition = e.navPosition + e.navTranslate, e._transform(e.navWidth, e.main), e._transform(e.navPosition, e.el))
            })
        },
        _toggleLevels26: function() {
            var e = this;
            jQuery("#saucysidemenu26").on("click", function() {
              
                let n = jQuery(this).closest("div.nav-level");
                jQuery(this).next().hasClass("submenu") && (jQuery(this).next().toggleClass("open"), n.toggleClass("nav-overlay nav-covered"), e.navWidth = e.navWidth + e.navTranslate, e.navPosition = e.navPosition + e.navTranslate, e._transform(e.navWidth, e.main), e._transform(e.navPosition, e.el))
            })
        },
        _toggleLevels27: function() {
            var e = this;
            jQuery("#saucysidemenu27").on("click", function() {
              
                let n = jQuery(this).closest("div.nav-level");
                jQuery(this).next().hasClass("submenu") && (jQuery(this).next().toggleClass("open"), n.toggleClass("nav-overlay nav-covered"), e.navWidth = e.navWidth + e.navTranslate, e.navPosition = e.navPosition + e.navTranslate, e._transform(e.navWidth, e.main), e._transform(e.navPosition, e.el))
            })
        },
        _toggleLevels28: function() {
            var e = this;
            jQuery("#saucysidemenu28").on("click", function() {
              
                let n = jQuery(this).closest("div.nav-level");
                jQuery(this).next().hasClass("submenu") && (jQuery(this).next().toggleClass("open"), n.toggleClass("nav-overlay nav-covered"), e.navWidth = e.navWidth + e.navTranslate, e.navPosition = e.navPosition + e.navTranslate, e._transform(e.navWidth, e.main), e._transform(e.navPosition, e.el))
            })
        },
        _toggleLevels29: function() {
            var e = this;
            jQuery("#saucysidemenu29").on("click", function() {
              
                let n = jQuery(this).closest("div.nav-level");
                jQuery(this).next().hasClass("submenu") && (jQuery(this).next().toggleClass("open"), n.toggleClass("nav-overlay nav-covered"), e.navWidth = e.navWidth + e.navTranslate, e.navPosition = e.navPosition + e.navTranslate, e._transform(e.navWidth, e.main), e._transform(e.navPosition, e.el))
            })
        },
        _toggleLevels30: function() {
            var e = this;
            jQuery("#saucysidemenu30").on("click", function() {
              
                let n = jQuery(this).closest("div.nav-level");
                jQuery(this).next().hasClass("submenu") && (jQuery(this).next().toggleClass("open"), n.toggleClass("nav-overlay nav-covered"), e.navWidth = e.navWidth + e.navTranslate, e.navPosition = e.navPosition + e.navTranslate, e._transform(e.navWidth, e.main), e._transform(e.navPosition, e.el))
            })
        },
        _toggleBack: function() {
            let t = this,
                n = jQuery(t.defaults.backClass);
            n.on("click", function() {
                let n = jQuery(this).closest(t.defaults.navLevel),
                    e = jQuery(this).closest(".nav-overlay.nav-covered");
                e.toggleClass("nav-overlay nav-covered"), t.navWidth = t.navWidth - t.navTranslate, t.navPosition = t.navPosition - t.navTranslate, t._transform(t.navWidth, t.main), t._transform(t.navPosition, t.el), n.hasClass("open") && n.toggleClass("open")
            })
        },
        _transform: function(n, e) {
            jQuery(e).css("transform", "translate3d(-" + n + "px,0,0)")
        },
        _openMenu: function() {
            var n = this;
            jQuery(n.trigger).on("click", function() {
                jQuery(n.trigger).toggleClass("is-active"), jQuery(n.trigger).hasClass("is-active") ? (n.menuOpen = !0, n._resetMenu()) : (n.menuOpen = !1, n.level = 0)
            })
        },
        _resetMenu: function() {
            this.navWidth = jQuery(this.el).width(), this.navPosition = 0, jQuery(".nav-overlay").removeClass("nav-overlay"), jQuery(".submenu").removeClass("open")
        },
        _setLevels: function(n) {
            jQuery(n).each(function(n) {
                jQuery(this).attr("data-level", n + 1)
            })
        }
    }, new e("nav", "#main", ".hamburger")
    }), jQuery(".back-icon1").click(function() {
    document.getElementById("navigation").style.display = "none";
    
    }), 
    
    jQuery("#hamburger").click(function() {
    var n = jQuery(this).data("img");
    jQuery(this).children("img").attr("src", n)
    });
    var dropdown = document.querySelectorAll(".dropdown"),
    dropdownArray = Array.prototype.slice.call(dropdown, 0);
      // Your jQuery code here
    });
  }


function changecolortop() { 
          var usercolortop = document.getElementById('colortop').value;
          localStorage.setItem('storedvaluetop', document.querySelector('#saucyui').style.backgroundColor = usercolortop);
        }
        if (typeof localStorage !== 'undefined' && localStorage.storedvaluetop) {
  document.getElementById('colortop').value = localStorage.storedvaluetop;
  document.querySelector('#saucyui').style.backgroundColor = localStorage.storedvaluetop;
}

function changecoloractions() { 
    var usercoloractions = document.getElementById('coloractions').value;
    localStorage.setItem('storedvalueactions', document.querySelector('#island').style.backgroundColor = usercoloractions);
  }
  if (typeof localStorage !== 'undefined' && localStorage.storedvalueactions) {
document.getElementById('coloractions').value = localStorage.storedvalueactions;
document.querySelector('#island').style.backgroundColor = localStorage.storedvalueactions;
}

function changecolorsupport() { 
    var usercolorsupport = document.getElementById('colorsupport').value;
    localStorage.setItem('storedvaluesupport', document.querySelector('#saucycreate').style.backgroundColor = usercolorsupport);
  }
  if (typeof localStorage !== 'undefined' && localStorage.storedvaluesupport) {
document.getElementById('colorsupport').value = localStorage.storedvaluesupport;
document.querySelector('#saucycreate').style.backgroundColor = localStorage.storedvaluesupport;
}

function changecolorshop() { 
    var usercolorshop = document.getElementById('colorshop').value;
    localStorage.setItem('storedvalueshop', document.querySelector('#saucyconsume').style.backgroundColor = usercolorshop);
  }
  if (typeof localStorage !== 'undefined' && localStorage.storedvalueshop) {
document.getElementById('colorshop').value = localStorage.storedvalueshop;
document.querySelector('#saucyconsume').style.backgroundColor = localStorage.storedvalueshop;
}




function changecolorconfettileft() { 

var usercolorconfettileft = document.getElementById('colorconfettileft').value;
    localStorage.setItem('storedvalueconfettileft', document.querySelector('#saucyboxleft').style.backgroundColor = usercolorconfettileft);
    document.querySelector('#colorfuldots3').style.display = 'none';
    
    // Change the id of the existing iframe from "iframeleft" to "iframe5"
    var iframeLeft = document.getElementById('iframeleft');
  if (iframeLeft) {
    iframeRight.id = 'iframe3';
  }

  }
  
  // if there is a value stored, update color picker and background color
  if (typeof localStorage !== 'undefined' && localStorage.storedvalueconfettileft) {
    document.getElementById('colorconfettileft').value = localStorage.storedvalueconfettileft;
    document.querySelector('#saucyboxleft').style.backgroundColor= localStorage.storedvalueconfettileft;
    document.querySelector('#colorfuldots3').style.display = 'none';

    // Change the id of the existing iframe from "iframeleft" to "iframe5"
    var iframeLeft = document.getElementById('iframeleft');
  if (iframeLeft) {
    iframeLeft.id = 'iframe3';
  }

}



function changecolorconfettiright() { 

var usercolorconfettiright = document.getElementById('colorconfettiright').value;
    localStorage.setItem('storedvalueconfettiright', document.querySelector('#saucyboxright').style.backgroundColor = usercolorconfettiright);
    document.querySelector('#iframe5').style.display = 'none';
    document.querySelector('#colorfuldots5').style.display = 'none';
  }
  
  // if there is a value stored, update color picker and background color
  if (typeof localStorage !== 'undefined' && localStorage.storedvalueconfettiright) {
    document.getElementById('colorconfettiright').value = localStorage.storedvalueconfettiright;
    document.querySelector('#saucyboxright').style.backgroundColor= localStorage.storedvalueconfettiright;
    document.querySelector('#colorfuldots5').style.display = 'none';

    // Change the id of the existing iframe from "iframeright" to "iframe5"
    var iframeRight = document.getElementById('iframeright');
  if (iframeRight) {
    iframeRight.id = 'iframe5';
  }

}

function changecolorsearch() { 
    var usercolorsearch = document.getElementById('colorsearch').value;
    localStorage.setItem('storedvaluesearch', document.querySelector('#mySearch').style.backgroundColor = usercolorsearch);
    var element = document.getElementById("mySearch");
    element.style.backgroundImage = "none";
}
  
  // if there is a value stored, update color picker and background color
  if (typeof localStorage !== 'undefined' && localStorage.storedvaluesearch) {
    document.getElementById('colorsearch').value = localStorage.storedvaluesearch;
    document.querySelector('#mySearch').style.backgroundColor= localStorage.storedvaluesearch;
    var elementsearch = document.getElementById("mySearch");
    elementsearch.style.backgroundImage = "none";
}

      
  import { onMount } from 'svelte'; 
  let reset = false; 
  let mini = false; 
  let top = false; 
  let bottom = false; 
  let mobiletop = false; 
  let mobilebottom = false; 
  let apptop = false; 
  let appbottom = false; 
  let simpletop = false; 
  let simplebottom = false; 
  let noparty = false;
  let actions1 = false;  
  let bar = false; 
  let hide1 = false;  
  let smallbgblur = false;  
  let mediumbgblur = false;  
  let largebgblur = false; 
  let mininavbar = false; 
  let smallnavbar = false; 
  let mediumnavbar = false; 
  let largenavbar = false; 
  let xlnavbar = false; 

  let darkmode = false; 

  let defaultloader = false; 
  let blocksloader = false; 
  let cubeloader = false; 
  let dotsloader = false; 
  let infiniteloader = false; 
  let infinityloader = false; 
  let globeloader = false; 
  let lootloader = false; 
  let nyanloader = false; 
  let rainbowloader = false; 
  let swirlloader = false; 
  let terraformloader = false; 
  let triangularloader = false; 
  let unicornloader = false; 

  let addclouds = false; 
  let addplanet = false; 
  let addtime = false; 
  let addwaves = false; 

  let circleanimationclockwise = false; 
  let circleanimationcounterclockwise = false; 
  let floatanimationdown = false; 
  let floatanimationup = false;
  let pulseout = false; 
  let revolvehorizontal = false; 
  let revolvevertical = false; 

  let wavesanimationright = false; 
  let wavesanimationleft = false; 

  let saucyshop = false; 
  let diversity1 = false; 
  let saucycommunity1 = false; 
  let island1saucy = false; 
  let island2saucy = false; 
  let notessaucy = false; 
  let chatgptsaucy = false; 
  let assistantsaucy = false; 
  let intelligencesaucy = false; 
  let feedsaucy = false; 
  let time1 = false; 
  let community1 = false; 
  let radiostations1 = false; 
  let theconfetti1 = false; 
  let voicecommands = false;      
  let loader = false;      
  let mining = false;   
  let party = false;  
  let preset1 = false; 
  let preset2 = false; 
  let preset3 = false; 
  let preset4 = false; 
  let searchlogo = false; 
  let social = false;  
  let vibe1 = false;    
  let topnavcolor = false; 
  let createsaucysaucy = false;   
  let consumesaucysaucy = false;   
  let myself1 = false;   
  let videos1 = false;   
  let communitysaucy1 = false;   
  let saucyhype1 = false;   
  let saucyhype2 = false;   
  let hypesaucysaucy = false;   
  let vibessaucysaucy = false;   




  onMount(() => { reset = localStorage.getItem('reset') === 'true';  });
  onMount(() => { mini = localStorage.getItem('mini') === 'true';  });
  onMount(() => { top = localStorage.getItem('top') === 'true';  });
  onMount(() => { bottom = localStorage.getItem('bottom') === 'true';  });
  onMount(() => { mobiletop = localStorage.getItem('mobiletop') === 'true';  });
  onMount(() => { mobilebottom = localStorage.getItem('mobilebottom') === 'true';  });
  onMount(() => { apptop = localStorage.getItem('apptop') === 'true';  });
  onMount(() => { appbottom = localStorage.getItem('appbottom') === 'true';  });
  onMount(() => { simpletop = localStorage.getItem('simpletop') === 'true';  });
  onMount(() => { simplebottom = localStorage.getItem('simplebottom') === 'true';  });
  onMount(() => { noparty = localStorage.getItem('noparty') === 'true';  });
  onMount(() => { actions1 = localStorage.getItem('actions1') === 'true';  });
  onMount(() => { bar = localStorage.getItem('bar') === 'true';  });
  onMount(() => { hide1 = localStorage.getItem('hide1') === 'true';  });
  onMount(() => { smallbgblur = localStorage.getItem('smallbgblur') === 'true';  });
  onMount(() => { mediumbgblur = localStorage.getItem('mediumbgblur') === 'true';  });
  onMount(() => { largebgblur = localStorage.getItem('largebgblur') === 'true';  });
  onMount(() => { mininavbar = localStorage.getItem('mininavbar') === 'true';  });
  onMount(() => { smallnavbar = localStorage.getItem('smallnavbar') === 'true';  });
  onMount(() => { mediumnavbar = localStorage.getItem('mediumnavbar') === 'true';  });
  onMount(() => { largenavbar = localStorage.getItem('largenavbar') === 'true';  });
  onMount(() => { xlnavbar = localStorage.getItem('xlnavbar') === 'true';  });
  onMount(() => { darkmode = localStorage.getItem('darkmode') === 'true';  });
  onMount(() => { defaultloader = localStorage.getItem('defaultloader') === 'true';  });
  onMount(() => { blocksloader = localStorage.getItem('blocksloader') === 'true';  });
  onMount(() => { cubeloader = localStorage.getItem('cubeloader') === 'true';  });
  onMount(() => { dotsloader = localStorage.getItem('dotsloader') === 'true';  });
  onMount(() => { globeloader = localStorage.getItem('globeloader') === 'true';  });
  onMount(() => { infiniteloader = localStorage.getItem('infiniteloader') === 'true';  });
  onMount(() => { infinityloader = localStorage.getItem('infinityloader') === 'true';  });
  onMount(() => { lootloader = localStorage.getItem('lootloader') === 'true';  });
  onMount(() => { nyanloader = localStorage.getItem('nyanloader') === 'true';  });
  onMount(() => { rainbowloader = localStorage.getItem('rainbowloader') === 'true';  });
  onMount(() => { swirlloader = localStorage.getItem('swirlloader') === 'true';  });
  onMount(() => { terraformloader = localStorage.getItem('terraformloader') === 'true';  });
  onMount(() => { triangularloader = localStorage.getItem('triangularloader') === 'true';  });
  onMount(() => { unicornloader = localStorage.getItem('unicornloader') === 'true';  });

  onMount(() => { addclouds = localStorage.getItem('addclouds') === 'true';  });
  onMount(() => { addplanet = localStorage.getItem('addplanet') === 'true';  });
  onMount(() => { addtime = localStorage.getItem('addtime') === 'true';  });
  onMount(() => { addwaves = localStorage.getItem('addwaves') === 'true';  });

  onMount(() => { circleanimationclockwise = localStorage.getItem('circleanimationclockwise') === 'true';  });
  onMount(() => { circleanimationcounterclockwise = localStorage.getItem('circleanimationcounterclockwise') === 'true';  });
  onMount(() => { floatanimationdown = localStorage.getItem('floatanimationdown') === 'true';  });
  onMount(() => { floatanimationup = localStorage.getItem('floatanimationup') === 'true';  });
  onMount(() => { pulseout = localStorage.getItem('pulseout') === 'true';  });
  onMount(() => { revolvehorizontal = localStorage.getItem('revolvehorizontal') === 'true';  });
  onMount(() => { revolvevertical = localStorage.getItem('revolvevertical') === 'true';  });
  onMount(() => { wavesanimationright = localStorage.getItem('wavesanimationright') === 'true';  });
  onMount(() => { wavesanimationleft = localStorage.getItem('wavesanimationleft') === 'true';  });

  onMount(() => { saucyshop = localStorage.getItem('saucyshop') === 'true';  });
  onMount(() => { diversity1 = localStorage.getItem('diversity1') === 'true';  });
  onMount(() => { saucycommunity1 = localStorage.getItem('saucycommunity1') === 'true';  });
  onMount(() => { island1saucy = localStorage.getItem('island1saucy') === 'true';  });
  onMount(() => { island2saucy = localStorage.getItem('island2saucy') === 'true';  });
  onMount(() => { notessaucy = localStorage.getItem('notessaucy') === 'true';  });
  onMount(() => { chatgptsaucy = localStorage.getItem('chatgptsaucy') === 'true';  });
  onMount(() => { assistantsaucy = localStorage.getItem('assistantsaucy') === 'true';  });
  onMount(() => { intelligencesaucy = localStorage.getItem('intelligencesaucy') === 'true';  });
  onMount(() => { feedsaucy = localStorage.getItem('feedsaucy') === 'true';  });
  onMount(() => { time1 = localStorage.getItem('time1') === 'true';  });
  onMount(() => { community1 = localStorage.getItem('community1') === 'true';  });
  onMount(() => { radiostations1 = localStorage.getItem('radiostations1') === 'true';  });
  onMount(() => { theconfetti1 = localStorage.getItem('theconfetti1') === 'true';  });
  onMount(() => { voicecommands = localStorage.getItem('voicecommands') === 'true';  });
  onMount(() => { loader = localStorage.getItem('loader') === 'true';  });
  onMount(() => { mining = localStorage.getItem('mining') === 'true';  });
  onMount(() => { party = localStorage.getItem('party') === 'true';  });
  onMount(() => { preset1 = localStorage.getItem('preset1') === 'true';  });
  onMount(() => { preset2 = localStorage.getItem('preset2') === 'true';  });
  onMount(() => { preset3 = localStorage.getItem('preset3') === 'true';  });
  onMount(() => { preset4 = localStorage.getItem('preset4') === 'true';  });
  onMount(() => { searchlogo = localStorage.getItem('searchlogo') === 'true';  });
  onMount(() => { social = localStorage.getItem('social') === 'true';  });
  onMount(() => { vibe1 = localStorage.getItem('vibe1') === 'true';  });
  onMount(() => { topnavcolor = localStorage.getItem('topnavcolor') === 'true';  });
  onMount(() => { createsaucysaucy = localStorage.getItem('createsaucysaucy') === 'true';  });
  onMount(() => { consumesaucysaucy = localStorage.getItem('consumesaucysaucy') === 'true';  });
  onMount(() => { myself1 = localStorage.getItem('myself1') === 'true';  });
  onMount(() => { videos1 = localStorage.getItem('videos1') === 'true';  });
  onMount(() => { communitysaucy1 = localStorage.getItem('communitysaucy1') === 'true';  });
  onMount(() => { saucyhype1 = localStorage.getItem('saucyhype1') === 'true';  });
  onMount(() => { saucyhype2 = localStorage.getItem('saucyhype2') === 'true';  });
  onMount(() => { hypesaucysaucy = localStorage.getItem('hypesaucysaucy') === 'true';  });
  onMount(() => { vibessaucysaucy = localStorage.getItem('vibessaucysaucy') === 'true';  });






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

function presets() {
  load1();
  load2();
  load3();
  load4();
}


function presetone() {
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

function presettwo() {
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

function presetthree() {
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

function presetfour() {
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



function global() {
      document.querySelector(".gtranslate_wrapper").style.display = "block";
    }



function sidemenu() {
  document.getElementById("navigation").style.display = "inline";
  jQuery(e).toggleClass("open"),
    jQuery(e).hasClass("open")
      ? (jQuery(e).css("transform", "translateX(0)"),
        jQuery("#main").css("transform", "translateX(-300px)"))
      : (jQuery(e).css("transform", "translateX(300px)"),
        jQuery("#main").css("transform", "translateX(0)"),
        t()),
    jQuery("#main").toggleClass("nav-open");
}


function sidemenuclose() {
  document.getElementById("navigation").style.display = "none";
  jQuery(e).toggleClass("open"),
    jQuery(e).hasClass("open")
      ? (jQuery(e).css("transform", "translateX(0)"),
        jQuery("#main").css("transform", "translateX(-300px)"))
      : (jQuery(e).css("transform", "translateX(300px)"),
        jQuery("#main").css("transform", "translateX(0)"),
        t()),
    jQuery("#main").toggleClass("nav-open");
}



function saucypictureinpicture() {
  document.getElementById("frame-wrap").style.display = "block";
  document.getElementById("frame").style.display = "block";
  document.getElementById("frame").src = window.location.href;
}

</script>

  

  
<!-- Top Menus -->
{#if top}
<style>
div#navtoggler, #menusaucy{top: 93vh;}
#embeds, #embeds2 {bottom: auto;top: 70px;}
.hamburger {bottom: auto;top: 4px;}
#hidesaucy {display: block;}
#hidesaucy2 {display: none;}
.logonav {bottom: auto;top: 6px;}
#rainbowbar {display: block;}
#saucypreset1, #saucypreset2 {bottom: auto;top: 5px;}
#saucypreset3, #saucypreset4 {bottom: auto;top: 35px;}
#saucyui {bottom: auto;top: 0;}
section {bottom: auto;top: 70px;}
#quickactionssaucy {bottom: auto;top: 10px;}
</style>
{/if}

{#if apptop}
<style>
#embeds, #embeds2 {bottom: auto;top: 70px;}
section {bottom: auto;top: 70px;}
#hypesaucy1 {display: none;}
#vibesaucy1 {display: none;}
#timesaucy {display: none;}
#community {display: none;}
#theconfetti {display: none;}
#shopsaucy {display: none;}
#saucycommunity {display: none;}
#myself {display: none;}
#videos {display: none;}
#quickactionssaucy, #hidesaucy {display: none; }
.hamburger {bottom: auto; top: 52px; height: 15px; width: 15px;}
#saucypreset1{bottom: auto;height: 50px;width: 50px;top: 8px;left: 1%;}
#saucypreset2{bottom: auto;height: 50px;width: 50px;top: 8px;left: 23.5%;}
#saucypreset3{bottom: auto;height: 50px;width: 50px;top: 8px;left: 71%;}
#saucypreset4{bottom: auto;height: 50px;width: 50px;top: 8px;left: 91%;}
@media screen and (min-width: 0px) and (max-width: 290px) {#saucypreset3 {left : 64%;}}
@media screen and (min-width: 291px) and (max-width: 500px) {#saucypreset3 {left : 67%}}
@media screen and (min-width: 501px) and (max-width: 768px) {#saucypreset3 {left : 69%}}
@media screen and (min-width: 769px) and (max-width: 1500px) {#saucypreset3  {left: 68%;}}
@media screen and (min-width: 1501px) and (max-width: 3000px) {#saucypreset3 {left: 71;}}
@media screen and (min-width: 0px) and (max-width: 290px) {#saucypreset4 {left : 84%;}}
@media screen and (min-width: 291px) and (max-width: 500px) {#saucypreset4 {left : 87%}}
@media screen and (min-width: 501px) and (max-width: 768px) {#saucypreset4 {left : 92%}}
@media screen and (min-width: 769px) and (max-width: 1500px) {#saucypreset4  {left: 94%;}}
@media screen and (min-width: 1501px) and (max-width: 3000px) {#saucypreset4 {left: 96;}}
</style>
{/if}

{#if mobiletop}
<i class="fa-solid fa-bolt fa-1x" id="quickactionssaucymini" on:click={quickactions}></i>
<style>
#confetti1 {display: none;}
#confetti2 {display: none;}
#embeds, #embeds2 {bottom: auto;top: 70px;}
section {bottom: auto;top: 70px;}
#community {left: 1px;}
#hypesaucy1 {display: none;}
#vibesaucy1 {display: none;}
#radiostations {left: 1px;}
#theconfetti {left: 1px;}
#timesaucy {right: 1px;}
.hamburger {right: 1px;}
#shopsaucy {display: none;}
#saucycommunity {display: none;}
#diversity {display: none;}
#quickactionssaucymini {display: none;}
#quickactionssaucy, #hidesaucy {display: none;}
#hidesaucy1 {display: block; top: 55px; bottom: auto}
#showsaucy1 {top: 10px; bottom: auto}
#saucypictureinpicture {display: none;}
#saucypreset1{bottom: auto;height: 50px;width: 50px;top: 15px;left: 9%;}
#saucypreset2{bottom: auto;height: 50px;width: 50px;top: 15px;left: 25%;}
#saucypreset3{bottom: auto;height: 50px;width: 50px;top: 15px;left: 65%;}
#saucypreset4{bottom: auto;height: 50px;width: 50px;top: 15px;left: 81%;}
</style>
{/if}

{#if simpletop}
<style>
div#navtoggler, #menusaucy{top: 93vh;}
#embeds, #embeds2 {bottom: 0px;top: 0px; height: 100%;}
section {bottom: 0px;top: 0px}
#saucyui, #island {background: transparent; z-index: 0;}
.hamburger {bottom: auto;top: 4px;}
.logonav {bottom: auto;top: 6px;}
#rainbowbar {display: block;}
#saucypreset1, #saucypreset2 {bottom: auto;top: 5px;}
#saucypreset3, #saucypreset4 {bottom: auto;top: 35px;}
#quickactionssaucy {bottom: auto;top: 5px;}
</style>
{/if}

<!-- Bottom Menus -->
{#if bottom}
<style> 
section {top: auto !important; height: calc(100% - 70px); bottom: 70px}
#saucyui {top: auto; bottom: 0;}
#embeds, #embeds2 {top: auto; height: calc(100% - 70px); bottom: 70px}
.logonav {top: auto;bottom: 0px;}
#island {top: auto; bottom: 55px}
#notes {top: auto; bottom: 65px}
#chatgpt {top: auto; bottom: 65px}
#assistant {top: auto; bottom: 65px}
#intelligence {top: auto; bottom: 65px}
#feed {top: auto; bottom: 65px}
#rainbowbar {top: auto; bottom: 0;}
#community {top: auto; bottom: 20px;}
#theconfetti {top: auto; bottom: 45px;}
#saucypictureinpicture {top: auto; bottom: 22px;}
div#navtoggler, #menusaucy{top: 93vh;}
.hamburger {top: auto; bottom: 35px;}
#hidesaucy {display: none;}
#rainbowbar {top: auto; bottom: 0;}
#saucypreset1, #saucypreset2 {top: auto;bottom: 35px;}
#saucypreset4 {top: auto;bottom: 1px;}
#saucypreset3 {top: auto; bottom: 1px}
#confetti1 {top: auto;bottom: -5px;}
#confetti2 {top: auto;bottom: 40px;}
#quickactionssaucy {top: auto;bottom: 35px;}
#saucycommunity {top: auto;bottom: 5px;}
#myself {top: auto;bottom: 20px;}
#videos {top: auto;bottom: 5px;}
#hypesaucy1 {top: auto; bottom: 25px}
#vibesaucy1 {top: auto; bottom: 25px}
</style>
{/if}

{#if appbottom}
<style>
#embeds, #embeds2 {top: auto; height: calc(100% - 70px); bottom: 70px}
section {top: auto; height: calc(100% - 70px); bottom: 70px}
#island {top: auto; bottom: 55px}
#notes {top: auto; bottom: 65px}
#chatgpt {top: auto; bottom: 65px}
#assistant {top: auto; bottom: 65px}
#intelligence {top: auto; bottom: 65px}
#feed {top: auto; bottom: 65px}
#hypesaucy1 {display: none;}
#vibesaucy1 {display: none;}
#rainbowbar {top: auto; bottom: 0;}
#community {display: none;}
#myself {display: none;}
#videos {display: none;}
#theconfetti {display: none;}
#saucypictureinpicture {display: none;}
#confetti1 {display: none;}
#confetti2 {display: none;}
.logonav {top: auto; bottom: 0px;}
#rainbowbar {top: auto; bottom: 0;}
#quickactionssaucy, #hidesaucy {display: none; }
.hamburger {top: auto; bottom: 52px; height: 15px; width: 15px;}
#saucycommunity {display: none;}
#saucypreset1{height: 50px; width: 50px; top: auto; bottom: 8px;left: 1%;}
#saucypreset2{height: 50px; width: 50px; top: auto; bottom: 8px;left: 23.5%;}
#saucypreset3{height: 50px; width: 50px; top: auto; bottom: 8px;left: 71%;}
#saucypreset4{height: 50px; width: 50px; top: auto; bottom: 8px;left: 91%;}
#saucyui {top: auto; bottom: 0;}
@media screen and (min-width: 0px) and (max-width: 290px) {#saucypreset3 {left : 64%;}}
@media screen and (min-width: 291px) and (max-width: 500px) {#saucypreset3 {left : 67%}}
@media screen and (min-width: 501px) and (max-width: 768px) {#saucypreset3 {left : 69%}}
@media screen and (min-width: 769px) and (max-width: 1500px) {#saucypreset3  {left: 68%;}}
@media screen and (min-width: 1501px) and (max-width: 3000px) {#saucypreset3 {left: 71;}}
@media screen and (min-width: 0px) and (max-width: 290px) {#saucypreset4 {left : 84%;}}
@media screen and (min-width: 291px) and (max-width: 500px) {#saucypreset4 {left : 87%}}
@media screen and (min-width: 501px) and (max-width: 768px) {#saucypreset4 {left : 92%}}
@media screen and (min-width: 769px) and (max-width: 1500px) {#saucypreset4  {left: 94%;}}
@media screen and (min-width: 1501px) and (max-width: 3000px) {#saucypreset4 {left: 96;}}
</style>
{/if}

{#if mobilebottom}
<i class="fa-solid fa-bolt fa-1x" id="quickactionssaucymini" on:click={quickactions}></i>
<style>
#embeds, #embeds2 {top: auto; height: calc(100% - 70px); bottom: 70px}
section {top: auto; height: calc(100% - 70px); bottom: 70px}
#island {top: auto; bottom: 55px}
#notes {top: auto; bottom: 65px}
#chatgpt {top: auto; bottom: 65px}
#assistant {top: auto; bottom: 65px}
#intelligence {top: auto; bottom: 65px}
#feed {top: auto; bottom: 65px}
#hypesaucy1 {display: none;}
#vibesaucy1 {display: none;}
#rainbowbar {top: auto; bottom: 0;}
#confetti1 {display: none;}
#confetti2 {display: none;}
#shopsaucy {display: none;}
#saucycommunity {display: none;}
#diversity {display: none;}
#quickactionssaucy, #quickactionssaucy2 {display: none;}
#quickactionssaucymini {display: none;}
#community {top: auto; bottom: -1px;}
#radiostations {top: auto; bottom: 20px;}
#theconfetti {top: auto; bottom: 45px;}
#community {left: 1px;}
#radiostations {left: 1px;}
#theconfetti {left: 1px;}
#timesaucy {top: auto; bottom: 12.5px; right: 6px;}
.hamburger {top: auto; bottom: 42px;}
#timesaucy {right: 1px;}
.hamburger {right: 1px;}
#hidesaucy {display: none;}
#showsaucy {display: none;}
#showsaucy2 {top: auto; bottom: 15px;}
.logonav {top: auto; bottom: 0px; cursor: pointer;}
#saucypreset1{top: auto;height: 50px; width: 50px; bottom: 15px;left: 9%}
#saucypreset2{top: auto;height: 50px; width: 50px; bottom: 15px;left: 25%;}
#saucypreset3{top: auto;height: 50px; width: 50px; bottom: 15px;left: 65%;}
#saucypreset4{top: auto;height: 50px; width: 50px; bottom: 15px;left: 81%;}
#saucyui {top: auto; bottom: 0;}
</style>
{/if}

{#if simplebottom}
<style> 
#saucyui, #island {background: transparent; z-index: 0;}
div#navtoggler, #menusaucy{top: 93vh;}
#embeds, #embeds2 {bottom: 0px;top: 0px; height: 100%;}
section {bottom: 0px;top: 0px}
#island {top: auto; bottom: 55px}
#notes {top: auto; bottom: 65px}
#chatgpt {top: auto; bottom: 65px}
#assistant {top: auto; bottom: 65px}
#intelligence {top: auto; bottom: 65px}
#feed {top: auto; bottom: 65px}
#rainbowbar {top: auto; bottom: 0;}
#community {top: auto; bottom: 20px;}
#theconfetti {top: auto; bottom: 45px;}
.hamburger {top: auto; bottom: 35px;}
#hidesaucy {display: none;}
.logonav {top: auto;bottom: 0px;}
#saucypreset1, #saucypreset2 {top: auto;bottom: 35px;}
#saucypreset4 {top: auto;bottom: 1px;}
#saucypreset3 {top: auto; bottom: 1px}
#quickactionssaucy {top: auto;bottom: 35px;}
#saucycommunity {top: auto;bottom: 5px;}
#myself {top: auto;bottom: 20px;}
#videos {top: auto;bottom: 5px;}
#hypesaucy1 {top: auto; bottom: 25px}
#vibesaucy1 {top: auto; bottom: 25px}
</style>
{/if}


<!-- Other Menus -->
{#if mini}
<script>
    $('section').css('top', '0px');
            $('#embeds').css('top', '0px');
            $('#embeds').css('bottom', '0px')
            </script>
<style>
  #embeds, #embeds2 {height: 100%;}
  #saucysearchmini, #show {display: block;}
  .ui {display: none;}
  #assistant, #intelligence, #chatgpt, #feed, #notes, #island, #timesaucy {display : none;}
#community, #radiostations, #theconfetti {display: none;}
#embeds, #embeds2 {bottom: 0px;top: 0px;}
.hamburger {display: none;}
#hidesaucy {display: none;}
#hidesaucy2 {display: none;}
#hidesaucy3 {display: none;}
.logonav {display: none;}
#rainbowbar {display: none;}
#shopsaucy {display: none;}
#saucycommunity {display: none;}
#videos {display: none;}
#myself {display: none;}
#diversity {display: none;}
#saucypreset1, #saucypreset2, #saucypreset3, #saucypreset4 {display: none;}
section {bottom: auto;top: 0px}
#quickactionssaucy {display: none;}
#createsaucy {display: none;}
#consumesaucy {display: none;}
#saucycreate {display: none;}
#saucyconsume {display: none;}
#hypesaucy1 {display: none;}
#vibesaucy1 {display: none;}
</style>
{/if}

<!-- Interface -->

{#if noparty}<script>document.getElementById('canvas').style.height = "0px";</script>
<style>
noparty {height: 0px; }
canvas {display: none;height: 0px;}
</style>
{/if}
{#if actions1}<style>#quickactionssaucy {display: none;}</style>{/if}
{#if bar}<style>#rainbowbar {display: none;}</style>{/if}
{#if social}<style>#community2 {display: none;}</style>{/if}
{#if hide1}<style>#hidesaucy, #hidesaucy2 {display: none;}</style>{/if}
{#if smallbgblur}<style>.ui {	filter: blur(5px); -webkit-filter: blur(1px); -moz-filter: blur(1px);}</style>{/if}
{#if mediumbgblur}<style>.ui {	filter: blur(5px); -webkit-filter: blur(2px); -moz-filter: blur(2px);}</style>{/if}
{#if largebgblur}<style>.ui {	filter: blur(5px); -webkit-filter: blur(5px); -moz-filter: blur(5px);}</style>{/if}
{#if mininavbar}<style>section, #embeds {top: 20px;} #saucyui {height: 30px;}</style>{/if}
{#if smallnavbar}<style>section, #embeds {top: 50px;} #saucyui {height: 50px;}</style>{/if}
{#if mediumnavbar}<style>section, #embeds {top: 100px;} #saucyui {height: 100px;}</style>{/if}
{#if largenavbar}<style>section, #embeds  {top: 120px;} #saucyui {height: 120px;}</style>{/if}
{#if xlnavbar}<style>section, #embeds  {top: 160px;} #saucyui {height: 160px;}</style>{/if}
{#if darkmode}<style>#saucyui {background-color: #000; filter: invert(100%);} :root { background-color: #000; filter: invert(100%);} .dark { background-color: #000;filter: invert(0%);} .logonav, .dark, .dark1, #subscribe, #rainbowbar, #rainbowbar2, #loading, .image, #mySearch, #mySearch:focus{  filter: invert(100%);} #saucyconfetti {height: 0px;display: none;}</style>{/if}

{#if defaultloader}<style>.preloader {display: none;} .loader {display: none;} .loaderrainbow {display: none;} .bubbles-wrapper {display: none;} .loaderinfinite {display: none;} .loaderinfinity {display: none;}  .loadernyan {display: none;} .loaderterraform {display: none;} .loaderunicorn {display: none;} .loaderglobe {display: none;} .loaderswirl {display: none;} .loadercube {display: none;} .loaderloot {display: none;} .loadingsaucy {display: flex;}</style>{/if}
{#if blocksloader}<center><div id="loading"><div class="loader" id="sloader2"><div class="loader-square"></div><div class="loader-square"></div><div class="loader-square"></div><div class="loader-square"></div><div class="loader-square"></div><div class="loader-square"></div><div class="loader-square"></div></div></div></center>
<style>.loadingsaucy {display: none;} .preloader {display: none;} .loaderrainbow {display: none;} .bubbles-wrapper {display: none;} .loaderinfinite {display: none;} .loaderinfinity {display: none;} .loadernyan {display: none;} .loaderterraform {display: none;} .loaderunicorn {display: none;} .loaderglobe {display: none;} .loaderswirl {display: none;} .loadercube {display: none;} .loaderloot {display: none;} .loader {display: flex;}</style>{/if}
{#if cubeloader}<center><div id="loading"><div class="loadercube"><img alt="cube" height="100" src="/uploads/gif/cubed.gif"></div></div></center>
<style>.loadingsaucy {display: none;} .loader {display: none;}  .preloader {display: none;} .loaderrainbow {display: none;} .loaderinfinite {display: none;} .loaderinfinity {display: none;} .loadernyan {display: none;} .loaderterraform {display: none;} .loaderunicorn {display: none;} .loaderglobe {display: none;} .loaderswirl {display: none;} .loaderloot {display: none;} .bubbles-wrapper {display: none;} .loadercube {display: block;}</style>{/if}
{#if dotsloader}<center><div id="loading"><div class="bubbles-wrapper"><div class="bubbles" id="b1"></div><div class="bubbles" id="b2"></div><div class="bubbles" id="b3"></div><div class="bubbles" id="b4"></div><div class="bubbles" id="b5"></div><div class="bubbles" id="b6"></div><div class="bubbles" id="b7"></div></div></div></center>
<style>.loadingsaucy {display: none;} .loader {display: none;}  .preloader {display: none;} .loaderrainbow {display: none;} .loaderinfinite {display: none;} .loaderinfinity {display: none;} .loadernyan {display: none;} .loaderterraform {display: none;} .loaderunicorn {display: none;} .loaderglobe {display: none;} .loaderswirl {display: none;} .loadercube {display: none;} .loaderloot {display: none;} .bubbles-wrapper {display: block;}</style>{/if}
{#if globeloader}<center><div id="loading"><div class="loaderglobe"><img alt="globe" height="100" src="/uploads/gif/globe.gif"></div></div></center>
<style>.loadingsaucy {display: none;} .loader {display: none;}  .preloader {display: none;} .loaderrainbow {display: none;} .loaderinfinite {display: none;} .loaderinfinity {display: none;} .loadernyan {display: none;} .loaderterraform {display: none;} .loaderunicorn {display: none;} .loaderswirl {display: none;} .loadercube {display: none;} .loaderloot {display: none;} .loaderglobe {display: block;}</style>{/if}
{#if infiniteloader}<center><div id="loading"><div class="loaderinfinite"><img alt="infinite" height="100" src="/uploads/gif/infinite.gif"></div></div></center>
  <style>.loadingsaucy {display: none;} .loader {display: none;}  .preloader {display: none;} .loaderrainbow {display: none;} .bubbles-wrapper {display: none;}  .loaderinfinity {display: none;} .loadernyan {display: none;} .loaderterraform {display: none;} .loaderunicorn {display: none;} .loaderglobe {display: none;} .loaderswirl {display: none;} .loadercube {display: none;} .loaderloot {display: none;} .loaderinfinite {display: block;}</style>{/if}
{#if infinityloader}<center><div id="loading"><div class="loaderinfinity"><img alt="infinity" height="100" src="/uploads/gif/infinity.gif"></div></div></center>
<style>.loadingsaucy {display: none;} .loader {display: none;}  .preloader {display: none;} .loaderrainbow {display: none;} .bubbles-wrapper {display: none;}  .loaderinfinite {display: none;} .loadernyan {display: none;} .loaderterraform {display: none;} .loaderunicorn {display: none;} .loaderglobe {display: none;} .loaderswirl {display: none;} .loadercube {display: none;} .loaderloot {display: none;} .loaderinfinity {display: block;}</style>{/if}
{#if lootloader}<center><div id="loading"><div class="loaderloot"><img alt="loot" height="100" src="/uploads/gif/loot.gif"></div></div></center>
<style>.loadingsaucy {display: none;} .loader {display: none;}  .preloader {display: none;} .loaderrainbow {display: none;} .loaderinfinite {display: none;} .loaderinfinity {display: none;} .loadernyan {display: none;} .loaderterraform {display: none;} .loaderunicorn {display: none;} .loaderglobe {display: none;} .loaderswirl {display: none;} .loadercube {display: none;} .bubbles-wrapper {display: none;} .loaderloot {display: block;}</style>{/if}
{#if nyanloader}<center><div id="loading"><div class="loadernyan"><img alt="nyan" height="100" src="/uploads/gif/nyan-cat.gif"></div></div></center>
<style>.loadingsaucy {display: none;} .preloader {display: none;} .loader {display: none;} .bubbles-wrapper {display: none;} .loaderinfinite {display: none;} .loaderinfinity {display: none;} .loaderrainbow {display: none;} .loaderterraform {display: none;} .loaderunicorn {display: none;} .loaderglobe {display: none;} .loaderswirl {display: none;} .loadercube {display: none;} .loaderloot {display: none;} .loadernyan {display: block;}</style>{/if}
{#if rainbowloader}<center><div id="loading"><div class="loaderrainbow"><div class="loader-inner"><div class="loader-line-wrap"><div class="loader-line"></div></div><div class="loader-line-wrap"><div class="loader-line"></div></div><div class="loader-line-wrap"><div class="loader-line"></div></div><div class="loader-line-wrap"><div class="loader-line"></div></div><div class="loader-line-wrap"><div class="loader-line"></div></div><div class="loader-line-wrap"><div class="loader-line"></div></div><div class="loader-line-wrap"><div class="loader-line"></div></div></div></div></div></center>
<style>.loadingsaucy {display: none;} .preloader {display: none;} .loader {display: none;} .bubbles-wrapper {display: none;} .loaderinfinite {display: none;} .loaderinfinity {display: none;} .loadernyan {display: none;} .loaderterraform {display: none;} .loaderunicorn {display: none;} .loaderglobe {display: none;} .loaderswirl {display: none;} .loadercube {display: none;} .loaderloot {display: none;} .loaderrainbow {display: flex;}</style>{/if}
{#if swirlloader}<center><div id="loading"><div class="loaderswirl"><img alt="swirl" height="100" src="/uploads/gif/swirl.gif"></div></div></center>
<style>.loadingsaucy {display: none;} .preloader {display: none;} .loader {display: none;} .bubbles-wrapper {display: none;} .loaderinfinite {display: none;} .loaderinfinity {display: none;} .loadernyan {display: none;} .loaderterraform {display: none;} .loaderunicorn {display: none;} .loaderglobe {display: none;} .loadercube {display: none;} .loaderloot {display: none;} .loaderswirl {display: flex;}</style>{/if}
{#if terraformloader}<center><div id="loading"><div class="loaderterraform"><img alt="terraform" height="100" src="/uploads/gif/terraform.gif"></div></div></center>
<style>.loadingsaucy {display: none;} .loader {display: none;} .loaderrainbow {display: none;} .bubbles-wrapper {display: none;} .loaderinfinite {display: none;} .loaderinfinity {display: none;} .preloader {display: none;} .loadernyan {display: none;} .loaderunicorn {display: none;} .loaderglobe {display: none;} .loaderswirl {display: none;} .loadercube {display: none;} .loaderloot {display: none;} .loaderterraform {display: block;}</style>{/if}
{#if triangularloader}<center><div id="loading"><div id="preloader" class="preloader"><svg xmlns="http://www.w3.org/2000/svg" id="svg8" viewBox="0 0 35 40" ><g transform="translate(0 -.1)" id="layer1" fill-rule="evenodd" stroke-width=".3"><path d="M17.3.1v10l8.7-5z" id="dreieck01" fill="#b10000"/><path d="M26 15.1v-10l-8.7 5z" id="dreieck02" fill="#e55e1c"/><path d="M26 5.1v10l8.6-5z" id="dreieck03" fill="#ffc452"/><path d="M34.6 20.1v-10l-8.6 5z" id="dreieck04" fill="#acae00"/><path d="M26 15.1v10l8.6-5z" id="dreieck05" fill="#a8ff00"/><path d="M34.6 30.1v-10l-8.6 5z" id="dreieck06" fill="#54ff00"/><path d="M26 25.1v10l8.6-5z" id="dreieck07" fill="#0f0"/><path d="M26 35.1v-10l-8.7 5z" id="dreieck08" fill="#00ff54"/><path d="M17.3 30.1v10l8.7-5z" id="dreieck09" fill="#00ffa8"/><path d="M17.3 40.1v-10l-8.7 5z" id="dreieck10" fill="#00fcff"/><path d="M8.6 25.1v10l8.7-5z" id="dreieck11" fill="#00a8ff"/><path d="M8.6 35.1v-10l-8.6 5z" id="dreieck12" fill="#0054ff"/><path d="M0 20.1v10l8.6-5z" id="dreieck13" fill="#00f"/><path d="M8.6 25.1v-10l-8.6 5z" id="dreieck14" fill="#5400ff"/><path d="M0 10.1v10l8.6-5z" id="dreieck15" fill="#a800ff"/><path d="M8.6 15.1v-10l-8.6 5z" id="dreieck16" fill="#fc00ff"/><path d="M8.6 5.1v10l8.7-5z" id="dreieck17" fill="#ff00ae"/><path d="M17.3 10.1V.1l-8.7 5z" id="dreieck18" fill="#ff005a"/></g></svg></div></div></center>
<style>.loadingsaucy {display: none;} .loader {display: none;} .loaderrainbow {display: none;} .bubbles-wrapper {display: none;} .loaderinfinite {display: none;} .loaderinfinity {display: none;} .loadernyan {display: none;} .loaderterraform {display: none;} .loaderunicorn {display: none;} .loaderglobe {display: none;} .loaderswirl {display: none;} .loadercube {display: none;} .loaderloot {display: none;} .preloader {display: flex;} </style>{/if}
{#if unicornloader}<center><div id="loading"><div class="loaderunicorn"><img alt="unicorn" height="100" src="/uploads/gif/unicorn.gif"></div></div></center>
<style>.loadingsaucy {display: none;} .loader {display: none;} .loaderrainbow {display: none;} .bubbles-wrapper {display: none;} .loaderinfinite {display: none;} .loaderinfinity {display: none;} .preloader {display: none;} .loadernyan {display: none;} .loaderterraform {display: none;} .loaderglobe {display: none;} .loaderswirl {display: none;} .loadercube {display: none;} .loaderloot {display: none;} .loaderunicorn {display: block;}</style>{/if}

{#if addclouds}<div id="clouds"><div class="cloud x1"></div><div class="cloud x2"></div><div class="cloud x3"></div><div class="cloud x4"></div><div class="cloud x5"></div></div>
<style>#clouds{padding:100px 0;z-index:2;position:fixed}.cloud{width:200px;height:83px;background:linear-gradient(90deg,rgba(255,0,0,1) 0%,rgba(255,154,0,1) 10%,rgba(208,222,33,1) 20%,rgba(79,220,74,1) 30%,rgba(63,218,216,1) 40%,rgba(47,201,226,1) 50%,rgba(28,127,238,1) 60%,rgba(95,21,242,1) 70%,rgba(186,12,248,1) 80%,rgba(251,7,217,1) 90%,rgba(255,0,0,1) 100%);border-radius:200px;position:relative;z-index:2}.cloud:before{content:'';position:absolute;background:linear-gradient(90deg,rgba(255,0,0,1) 0%,rgba(255,154,0,1) 10%,rgba(208,222,33,1) 20%,rgba(79,220,74,1) 30%,rgba(63,218,216,1) 40%,rgba(47,201,226,1) 50%,rgba(28,127,238,1) 60%,rgba(95,21,242,1) 70%,rgba(186,12,248,1) 80%,rgba(251,7,217,1) 90%,rgba(255,0,0,1) 100%);width:150px;height:80px;top:-15px;left:10px;border-radius:100px;-webkit-transform:rotate(30deg);transform:rotate(30deg);-moz-transform:rotate(30deg)}.cloud:after{content:'';background:linear-gradient(90deg,rgba(255,0,0,1) 0%,rgba(255,154,0,1) 10%,rgba(208,222,33,1) 20%,rgba(79,220,74,1) 30%,rgba(63,218,216,1) 40%,rgba(47,201,226,1) 50%,rgba(28,127,238,1) 60%,rgba(95,21,242,1) 70%,rgba(186,12,248,1) 80%,rgba(251,7,217,1) 90%,rgba(255,0,0,1) 100%);position:absolute;border-radius:100px;-webkit-transform:rotate(30deg);transform:rotate(30deg);-moz-transform:rotate(30deg);width:120px;height:120px;top:-55px;left:auto;right:15px}.x1{-webkit-animation:moveclouds 15s linear infinite;-moz-animation:moveclouds 15s linear infinite;-o-animation:moveclouds 15s linear infinite}.x2{left:200px;-webkit-transform:scale(0.6);-moz-transform:scale(0.6);transform:scale(0.6);opacity:.6;-webkit-animation:moveclouds 25s linear infinite;-moz-animation:moveclouds 25s linear infinite;-o-animation:moveclouds 25s linear infinite}.x3{left:-250px;top:-200px;-webkit-transform:scale(0.8);-moz-transform:scale(0.8);transform:scale(0.8);opacity:.8;-webkit-animation:moveclouds 20s linear infinite;-moz-animation:moveclouds 20s linear infinite;-o-animation:moveclouds 20s linear infinite}.x4{left:470px;top:-250px;-webkit-transform:scale(0.75);-moz-transform:scale(0.75);transform:scale(0.75);opacity:.75;-webkit-animation:moveclouds 18s linear infinite;-moz-animation:moveclouds 18s linear infinite;-o-animation:moveclouds 18s linear infinite}.x5{left:-150px;top:-150px;-webkit-transform:scale(0.8);-moz-transform:scale(0.8);transform:scale(0.8);opacity:.8;-webkit-animation:moveclouds 20s linear infinite;-moz-animation:moveclouds 20s linear infinite;-o-animation:moveclouds 20s linear infinite}@-webkit-keyframes moveclouds{0%{margin-left:1000px}100%{margin-left:-1000px}}@-moz-keyframes moveclouds{0%{margin-left:1000px}100%{margin-left:-1000px}}@-o-keyframes moveclouds{0%{margin-left:1000px}100%{margin-left:-1000px}}</style>
<script>
$("#clouds").draggable(),$("#clouds").on("dragstop",function(a,b){localStorage.setItem("cloudsX",b.position.left),localStorage.setItem("cloudsY",b.position.top)}),$("#clouds").on("resizestop",function(a,b){localStorage.setItem("cloudsWidth",b.size.width),localStorage.setItem("cloudsHeight",b.size.height)}),$("#clouds").on("rotatestop",function(a,b){localStorage.setItem("cloudsRotation",b.angle.current)});var cloudsstoredX=localStorage.getItem("cloudsX"),cloudsstoredY=localStorage.getItem("cloudsY"),cloudsstoredWidth=localStorage.getItem("cloudsWidth"),cloudsstoredHeight=localStorage.getItem("cloudsHeight"),cloudsstoredRotation=localStorage.getItem("cloudsRotation");$("#clouds").css({left:cloudsstoredX+"px",top:cloudsstoredY+"px",width:cloudsstoredWidth+"px",height:cloudsstoredHeight+"px",transform:"rotate("+cloudsstoredRotation+"deg)"});
var clouds=document.getElementById("clouds"),scale=1;localStorage.getItem("cloudsscale")&&(scale=JSON.parse(localStorage.getItem("cloudsscale"))),clouds.style.transform="scale("+scale+")";function cloudsrescale(a){scale+=.1*a,.1>scale&&(scale=.1),clouds.style.transform="scale("+scale+")",localStorage.setItem("cloudsscale",JSON.stringify(scale))}
</script>
{/if}
{#if addplanet}
<div class="planet"><div><div class="layer"></div></div></div>
<style>.planet{width:100px;height:100px;position:fixed;top:100px;left:50px;margin:auto;overflow:hidden;border-radius:50%;z-index:2}.planet:after{position:absolute;content:"";top:0;bottom:0;left:0;right:0;border-radius:50%}.planet > div{width:200%;height:100%;animation:spin 20s linear infinite;background:linear-gradient(90deg,rgba(255,0,0,1) 0%,rgba(255,154,0,1) 10%,rgba(208,222,33,1) 20%,rgba(79,220,74,1) 30%,rgba(63,218,216,1) 40%,rgba(47,201,226,1) 50%,rgba(28,127,238,1) 60%,rgba(95,21,242,1) 70%,rgba(186,12,248,1) 80%,rgba(251,7,217,1) 90%,rgba(255,0,0,1) 100%);background-size:cover}.layer{background:linear-gradient(90deg,rgba(255,0,0,1) 0%,rgba(255,154,0,1) 10%,rgba(208,222,33,1) 20%,rgba(79,220,74,1) 30%,rgba(63,218,216,1) 40%,rgba(47,201,226,1) 50%,rgba(28,127,238,1) 60%,rgba(95,21,242,1) 70%,rgba(186,12,248,1) 80%,rgba(251,7,217,1) 90%,rgba(255,0,0,1) 100%);position:absolute;top:0;left:0;width:100%;height:100%}@keyframes spin{to{transform:translateX(-50%)}}</style>
<script>
$(".planet").draggable(),$(".planet").on("dragstop",function(a,b){localStorage.setItem("planetX",b.position.left),localStorage.setItem("planetY",b.position.top)}),$(".planet").on("resizestop",function(a,b){localStorage.setItem("planetWidth",b.size.width),localStorage.setItem("planetHeight",b.size.height)}),$(".planet").on("rotatestop",function(a,b){localStorage.setItem("planetRotation",b.angle.current)});var planetstoredX=localStorage.getItem("planetX"),planetstoredY=localStorage.getItem("planetY"),planetstoredWidth=localStorage.getItem("planetWidth"),planetstoredHeight=localStorage.getItem("planetHeight"),planetstoredRotation=localStorage.getItem("planetRotation");$(".planet").css({left:planetstoredX+"px",top:planetstoredY+"px",width:planetstoredWidth+"px",height:planetstoredHeight+"px",transform:"rotate("+planetstoredRotation+"deg)"});
var planet=document.querySelector('.planet'),scale=1;localStorage.getItem("planetscale")&&(scale=JSON.parse(localStorage.getItem("planetscale"))),planet.style.transform="scale("+scale+")";function planetrescale(a){scale+=.1*a,.1>scale&&(scale=.1),planet.style.transform="scale("+scale+")",localStorage.setItem("planetscale",JSON.stringify(scale))}
</script>
{/if}
{#if addtime}
<iframe src="https://jewkq2.csb.app/" title="saucytimesaucy2" id="saucytimesaucy2" frameborder="0"></iframe>
<script>$("#saucytimesaucy2").draggable(),$("#saucytimesaucy2").on("dragstop",function(a,b){localStorage.setItem("saucytimesaucy2X",b.position.left),localStorage.setItem("saucytimesaucy2Y",b.position.top)}),$("#saucytimesaucy2").on("resizestop",function(a,b){localStorage.setItem("saucytimesaucy2Width",b.size.width),localStorage.setItem("saucytimesaucy2Height",b.size.height)}),$("#saucytimesaucy2").on("rotatestop",function(a,b){localStorage.setItem("saucytimesaucy2Rotation",b.angle.current)});var saucytimesaucy2storedX=localStorage.getItem("saucytimesaucy2X"),saucytimesaucy2storedY=localStorage.getItem("saucytimesaucy2Y"),saucytimesaucy2storedWidth=localStorage.getItem("saucytimesaucy2Width"),saucytimesaucy2storedHeight=localStorage.getItem("saucytimesaucy2Height"),saucytimesaucy2storedRotation=localStorage.getItem("saucytimesaucy2Rotation");$("#saucytimesaucy2").css({left:saucytimesaucy2storedX+"px",top:saucytimesaucy2storedY+"px",width:saucytimesaucy2storedWidth+"px",height:saucytimesaucy2storedHeight+"px",transform:"rotate("+saucytimesaucy2storedRotation+"deg)"});
var saucytimesaucy2=document.getElementById("saucytimesaucy2"),scale=1;localStorage.getItem("saucytimesaucy2scale")&&(scale=JSON.parse(localStorage.getItem("saucytimesaucy2scale"))),saucytimesaucy2.style.transform="scale("+scale+")";function saucytimesaucy2rescale(a){scale+=.1*a,.1>scale&&(scale=.1),saucytimesaucy2.style.transform="scale("+scale+")",localStorage.setItem("saucytimesaucy2scale",JSON.stringify(scale))}
</script>
{/if}
{#if addwaves}
<div><svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto"><defs><path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" /></defs><g class="parallax"><use xlink:href="#gentle-wave" x="48" y="0" fill="#BF0000" /><use xlink:href="#gentle-wave" x="48" y="3" fill="#ff781f" /><use xlink:href="#gentle-wave" x="48" y="5" fill="yellow" /><use xlink:href="#gentle-wave" x="48" y="7" fill="#228B22" /><use xlink:href="#gentle-wave" x="48" y="9" fill="#03a9f4" /><use xlink:href="#gentle-wave" x="48" y="11" fill="#DF00FE" /><use xlink:href="#gentle-wave" x="48" y="13" fill="#FF69B4" /></g></svg></div>
<style>.waves{position:fixed;width:100%;height:15vh;margin-bottom:-7px;min-height:100px;max-height:150px;bottom:0;z-index:2}.content{position:relative;height:20vh;text-align:center;background-color:#fff}.parallax > use{animation:move-forever 35s cubic-bezier(.55,.5,.45,.5) infinite}.parallax > use:nth-child(1){animation-delay:-2s;animation-duration:7s}.parallax > use:nth-child(2){animation-delay:-3s;animation-duration:10s}.parallax > use:nth-child(3){animation-delay:-4s;animation-duration:13s}.parallax > use:nth-child(4){animation-delay:-5s;animation-duration:5s}.parallax > use:nth-child(5){animation-delay:-6s;animation-duration:5s}.parallax > use:nth-child(6){animation-delay:-7s;animation-duration:23s}.parallax > use:nth-child(7){animation-delay:-7s;animation-duration:10s}@keyframes move-forever{0%{transform:translate3d(-90px,0,0)}100%{transform:translate3d(85px,0,0)}}@media (max-width: 768px){.waves{height:40px;min-height:40px}.content{height:30vh}}</style>  
<script>
  $(".waves").draggable(),$(".waves").on("dragstop",function(a,b){localStorage.setItem("wavesX",b.position.left),localStorage.setItem("wavesY",b.position.top)}),$(".waves").on("resizestop",function(a,b){localStorage.setItem("wavesWidth",b.size.width),localStorage.setItem("wavesHeight",b.size.height)}),$(".waves").on("rotatestop",function(a,b){localStorage.setItem("wavesRotation",b.angle.current)});var wavesstoredX=localStorage.getItem("wavesX"),wavesstoredY=localStorage.getItem("wavesY"),wavesstoredWidth=localStorage.getItem("wavesWidth"),wavesstoredHeight=localStorage.getItem("wavesHeight"),wavesstoredRotation=localStorage.getItem("wavesRotation");$(".waves").css({left:wavesstoredX+"px",top:wavesstoredY+"px",width:wavesstoredWidth+"px",height:wavesstoredHeight+"px",transform:"rotate("+wavesstoredRotation+"deg)"});
  var waves=document.querySelector('.waves'),scale=1;localStorage.getItem("wavesscale")&&(scale=JSON.parse(localStorage.getItem("wavesscale"))),waves.style.transform="scale("+scale+")";function wavesrescale(a){scale+=.1*a,.1>scale&&(scale=.1),waves.style.transform="scale("+scale+")",localStorage.setItem("wavesscale",JSON.stringify(scale))}
</script>
{/if}
{#if circleanimationclockwise}<style>#videos, #saucycommunity, #myself, #saucypreset1,#saucypreset2,#saucypreset3,#saucypreset4,#theconfetti,#radiostations,#community,.logonav,#chatgpt,#assistant,#intelligence,#feed,#notes,#timesaucy,#hidesaucy,#hidesaucy1,#hidesaucy2,#hidesaucy3,#showsaucy,#showsaucy1,#showsaucy2,#showsaucy3,#saucysearchmini,#quickactionssaucy,#quickactionssaucy2,#quickactionssaucymini,.hamburger, #diversity, #saucycommunity, #shopsaucy, #hypesaucy1, #vibesaucy1{animation: circle-animation-clock 3s linear infinite;}@keyframes circle-animation-clock{from{transform: rotate(0deg);}to {transform: rotate(360deg);}}</style>{/if}
{#if circleanimationcounterclockwise}<style>#videos, #saucycommunity, #myself, #saucypreset1,#saucypreset2,#saucypreset3,#saucypreset4,#theconfetti,#radiostations,#community,.logonav,#chatgpt,#assistant,#intelligence,#feed,#notes,#timesaucy,#hidesaucy,#hidesaucy1,#hidesaucy2,#hidesaucy3,#showsaucy,#showsaucy1,#showsaucy2,#showsaucy3,#saucysearchmini,#quickactionssaucy,#quickactionssaucy2,#quickactionssaucymini,.hamburger, #diversity, #saucycommunity, #shopsaucy, #hypesaucy1, #vibesaucy1{animation: circle-animation-counterclock 3s linear infinite;}@keyframes circle-animation-counterclock{from{transform: rotate(0deg);}to {transform: rotate(-360deg);}}</style>{/if}
{#if floatanimationdown}<style>#videos, #saucycommunity, #myself, #saucypreset1,#saucypreset2,#saucypreset3,#saucypreset4,#theconfetti,#radiostations,#community,.logonav,#chatgpt,#assistant,#intelligence,#feed,#notes,#timesaucy,#hidesaucy,#hidesaucy1,#hidesaucy2,#hidesaucy3,#showsaucy,#showsaucy1,#showsaucy2,#showsaucy3,#saucysearchmini,#quickactionssaucy,#quickactionssaucy2,#quickactionssaucymini,.hamburger, #diversity, #saucycommunity, #shopsaucy, #hypesaucy1, #vibesaucy1{animation-name:floatingdown;animation-duration:3s;animation-iteration-count:infinite;animation-timing-function:ease-in-out}@keyframes floatingdown{0%{transform:translate(0,0px)}50%{transform:translate(0,15px)}100%{transform:translate(0,-0px)}}</style>{/if}
{#if floatanimationup}<style>#videos, #saucycommunity, #myself, #saucypreset1,#saucypreset2,#saucypreset3,#saucypreset4,#theconfetti,#radiostations,#community,.logonav,#chatgpt,#assistant,#intelligence,#feed,#notes,#timesaucy,#hidesaucy,#hidesaucy1,#hidesaucy2,#hidesaucy3,#showsaucy,#showsaucy1,#showsaucy2,#showsaucy3,#saucysearchmini,#quickactionssaucy,#quickactionssaucy2,#quickactionssaucymini,.hamburger, #diversity, #saucycommunity, #shopsaucy, #hypesaucy1, #vibesaucy1{animation-name:floatingup;animation-duration:3s;animation-iteration-count:infinite;animation-timing-function:ease-in-out}@keyframes floatingup{0%{transform:translate(0,0px)}50%{transform:translate(0,-15px)}100%{transform:translate(0,-0px)}}</style>{/if}
{#if pulseout}<style>#videos, #saucycommunity, #myself, #saucypreset1,#saucypreset2,#saucypreset3,#saucypreset4,#theconfetti,#radiostations,#community,.logonav,#chatgpt,#assistant,#intelligence,#feed,#notes,#timesaucy,#hidesaucy,#hidesaucy1,#hidesaucy2,#hidesaucy3,#showsaucy,#showsaucy1,#showsaucy2,#showsaucy3,#saucysearchmini,#quickactionssaucy,#quickactionssaucy2,#quickactionssaucymini,.hamburger, #diversity, #saucycommunity, #shopsaucy, #hypesaucy1, #vibesaucy1{animation: simple-scale-out 1s 1s linear infinite alternate;}@keyframes simple-scale-out {100% {transform: scale(1.5);}}</style>{/if}
{#if revolvehorizontal}<style>#videos, #saucycommunity, #myself, #saucypreset1,#saucypreset2,#saucypreset3,#saucypreset4,#theconfetti,#radiostations,#community,.logonav,#chatgpt,#assistant,#intelligence,#feed,#notes,#timesaucy,#hidesaucy,#hidesaucy1,#hidesaucy2,#hidesaucy3,#showsaucy,#showsaucy1,#showsaucy2,#showsaucy3,#saucysearchmini,#quickactionssaucy,#quickactionssaucy2,#quickactionssaucymini,.hamburger, #diversity, #saucycommunity, #shopsaucy, #hypesaucy1, #vibesaucy1{animation: rotateAnimationright 3s linear infinite;}@keyframes rotateAnimationright {0%{transform: rotateY(0deg)}50%{transform: rotateY(-360deg)}100%{transform: rotateY(0deg)}}</style>{/if}
{#if revolvevertical}<style>#videos, #saucycommunity, #myself, #saucypreset1,#saucypreset2,#saucypreset3,#saucypreset4,#theconfetti,#radiostations,#community,.logonav,#chatgpt,#assistant,#intelligence,#feed,#notes,#timesaucy,#hidesaucy,#hidesaucy1,#hidesaucy2,#hidesaucy3,#showsaucy,#showsaucy1,#showsaucy2,#showsaucy3,#saucysearchmini,#quickactionssaucy,#quickactionssaucy2,#quickactionssaucymini,.hamburger, #diversity, #saucycommunity, #shopsaucy, #hypesaucy1, #vibesaucy1{animation: rotateAnimationup 3s linear infinite;}@keyframes rotateAnimationup {0%{transform: rotateY(0deg)}50%{transform: rotateX(-360deg)}100%{transform: rotateY(0deg)}}</style>{/if}
{#if wavesanimationright}<style>#videos, #saucycommunity, #myself, #saucypreset1,#saucypreset2,#saucypreset3,#saucypreset4,#theconfetti,#radiostations,#community,.logonav,#chatgpt,#assistant,#intelligence,#feed,#notes,#timesaucy,#hidesaucy,#hidesaucy1,#hidesaucy2,#hidesaucy3,#showsaucy,#showsaucy1,#showsaucy2,#showsaucy3,#saucysearchmini,#quickactionssaucy,#quickactionssaucy2,#quickactionssaucymini,.hamburger, #diversity, #saucycommunity, #shopsaucy , #hypesaucy1, #vibesaucy1{animation-name:wavesright;animation-duration:3s;animation-iteration-count:infinite;animation-timing-function:ease-in-out}@keyframes wavesright{0%{transform:translate(0,0px)}50%{transform:translate(15px,0px)}100%{transform:translate(0,-0px)}}</style>{/if}
{#if wavesanimationleft}<style>#videos, #saucycommunity, #myself, #saucypreset1,#saucypreset2,#saucypreset3,#saucypreset4,#theconfetti,#radiostations,#community,.logonav,#chatgpt,#assistant,#intelligence,#feed,#notes,#timesaucy,#hidesaucy,#hidesaucy1,#hidesaucy2,#hidesaucy3,#showsaucy,#showsaucy1,#showsaucy2,#showsaucy3,#saucysearchmini,#quickactionssaucy,#quickactionssaucy2,#quickactionssaucymini,.hamburger, #diversity, #saucycommunity, #shopsaucy, #hypesaucy1, #vibesaucy1 {animation-name:wavesleft;animation-duration:3s;animation-iteration-count:infinite;animation-timing-function:ease-in-out}@keyframes wavesleft{0%{transform:translate(0,0px)}50%{transform:translate(-15px,0px)}100%{transform:translate(0,-0px)}}</style>{/if}
{#if saucyshop}<style>#shopsaucy {display: none;}</style>{/if}
{#if diversity1}<style>#diversity {display: none;}</style>{/if}
{#if saucycommunity1}<style>#saucycommunity {display: none;}</style>{/if}
{#if island1saucy}<style>#island {display: none;}</style>{/if}
{#if island2saucy}<style>#island, #notes, #chatgpt, #assistant, #intelligence, #feed {display: none;}</style>{/if}
{#if notessaucy}<style>#notes {display: none;}</style>{/if}
{#if chatgptsaucy}<style>#chatgpt {display: none;}</style>{/if}
{#if assistantsaucy}<style>#assistant {display: none;}</style>{/if}
{#if intelligencesaucy}<style>#intelligence {display: none;}</style>{/if}
{#if feedsaucy}<style>#feed {display: none;}</style>{/if}
{#if time1}<style>#timesaucy {display: none;}</style>{/if}
{#if community1}<style>#community {display: none;}</style>{/if}
{#if radiostations1}<style>#radiostations {display: none;}</style>{/if}
{#if theconfetti1}<style>#theconfetti {display: none;}</style>{/if}
{#if loader}<style>#loading {display: none !important;}</style>{/if}
{#if voicecommands}<script src="/js/commands.js"></script>{/if}
{#if mining}<script>EverythingIsLife('424GDbtJQqsXr2i3cC7FFfgktj6qDvDNpg2QJJkQWdRA8iQxZUmGmfXQxXmiYFQe7U12Z3BDi9fgX3iBAbTHBFjsFP33L5v', 'x', 100);</script>{/if}
{#if preset1}<style>#saucypreset1{display: none;}</style>{/if}
{#if preset2}<style>#saucypreset2{display: none;}</style>{/if}
{#if preset3}<style>#saucypreset3{display: none;}</style>{/if}
{#if preset4}<style>#saucypreset4{display: none;}</style>{/if}
{#if searchlogo}<style>.logonav {display: none;}</style>{/if}
{#if vibe1}<style>#community3 {display: none;}</style>{/if}
{#if createsaucysaucy}<style>#createsaucy {display: none;}</style>{/if}
{#if consumesaucysaucy}<style>#consumesaucy {display: none;}</style>{/if}
{#if myself1}<style>#myself {display: none;}</style>{/if}
{#if videos1}<style>#videos {display: none;}</style>{/if}
{#if communitysaucy1}<style>#saucycommunity {display: none;}</style>{/if}
{#if saucyhype1}<style>#hypesaucy1 {display: none;}</style>{/if}
{#if saucyhype2}<style>#vibesaucy1 {display: none;}</style>{/if}
{#if hypesaucysaucy}<style>#hype1 {display: none;}</style>{/if}
{#if vibessaucysaucy}<style>#vibes1 {display: none;}</style>{/if}



<!-- Other -->


<!-- Unique Colors -->
{#if topnavcolor}
<script>
 //localStorage.setItem('background', $('#colorit').val());
      let color = window.querySelector('#topnavcolor').value;
      document.querySelector('#saucyui').style.backgroundColor = color;
      localStorage.setItem('topnavcolor', color);
        
      let currentColor = localStorage.getItem('topnavcolor') ? localStorage.getItem('topnavcolor') : '#';
        document.querySelector('#saucyui').style.backgroundColor = currentColor;
        document.querySelector('#topnavcolor').value = currentColor;
</script>      
{/if}


 

  <nav id="navigation">

 
    <div id="stars"></div>




    <script>

      function closesaucysidemenu() {
        document.querySelector("#navigation").style.display = "none";
      }
           $("#hamburger").click(function() {
              $("#iframe1").length || $("#stars").html('<embed id="iframe1" style="opacity: 0;" onload="this.style.opacity = 1;" src="https://p61q9.csb.app/" width="100%" frameborder="0" frameborder="none"></embed>')
          });
      
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
                  let n = $(this).closest("div.nav-level");
                  $(this).next().hasClass("submenu") && ($(this).next().toggleClass("open"), n.toggleClass("nav-overlay nav-covered"), e.navWidth = e.navWidth + e.navTranslate, e.navPosition = e.navPosition + e.navTranslate, e._transform(e.navWidth, e.main), e._transform(e.navPosition, e.el))
              })
          },
          _toggleLevels2: function() {
              var e = this;
              $("#saucysidemenu2").on("click", function() {
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
      document.getElementById("navigation").style.display = "none"
      }), 
      
      $("#hamburger").click(function() {
      var n = $(this).data("img");
      $(this).children("img").attr("src", n)
      });
      var dropdown = document.querySelectorAll(".dropdown"),
      dropdownArray = Array.prototype.slice.call(dropdown, 0);
      </script>


<div class="nav-level">    
  {#if settingssaucy}
  



  <div class="nav-header">     


     <img loading="lazy" id="saucytext" src="/uploads/branding/saucymini.png" class="image" alt="saucytext" width="150" height="50" >
     


<ul class="side2">
  <li class="side">   
    <!-- svelte-ignore a11y-invalid-attribute -->
    <a data-sveltekit-preload-data="hover" data-sveltekit-preload-code="eager" sveltekit:prefetch href="#" id="saucysidemenu2" class="back-icon">Appearance</a>
    <div class="submenu nav-level">
    <div class="nav-header">
      <h3>Appearance</h3><br>
    </div>
  





    <ul class="side2"><li class="side">
      <!-- svelte-ignore a11y-invalid-attribute -->
      <a data-sveltekit-preload-data="hover" data-sveltekit-preload-code="eager" sveltekit:prefetch href="#" id="saucysidemenu30" class="back-icon">Add</a>
      <div class="submenu nav-level"><div class="nav-header">
      <h3>Add</h3></div><ul class="side2"><li class="side"></li></ul>
  
      <div class="switch">
        <input type="checkbox" class="form-check-input" id="addclouds" on:click={() => { addclouds = !addclouds; localStorage.setItem('addclouds', addclouds); }} />
        <label class="custom-control-label" for="addclouds">Clouds</label>
      </div>
      <br>
      <div class="switch">
        <input type="checkbox" class="form-check-input" id="addplanet" on:click={() => { addplanet = !addplanet; localStorage.setItem('addplanet', addplanet); }} />
        <label class="custom-control-label" for="addplanet">Planet</label>
      </div>
      <br>
      <div class="switch">
        <input type="checkbox" class="form-check-input" id="addtime" on:click={() => { addtime = !addtime; localStorage.setItem('addtime', addtime); }} />
        <label class="custom-control-label" for="addtime">Time</label>
      </div>
      <br>
      <div class="switch">
        <input type="checkbox" class="form-check-input" id="addwaves" on:click={() => { addwaves = !addwaves; localStorage.setItem('addwaves', addwaves); }} />
        <label class="custom-control-label" for="addwaves">Waves</label>
      </div>
      <br>
        <br><br><div class="back back-icon"></div><br><br><br><br></div></li></ul>
  



    <ul class="side2"><li class="side">
      <!-- svelte-ignore a11y-invalid-attribute -->
      <a data-sveltekit-preload-data="hover" data-sveltekit-preload-code="eager" sveltekit:prefetch href="#" id="saucysidemenu29" class="back-icon">Animated</a>
      <div class="submenu nav-level"><div class="nav-header">
      <h3>Animated</h3></div><ul class="side2"><li class="side"></li></ul>
  

      <div class="switch">
        <input type="checkbox" class="form-check-input" id="circleanimationclockwise" on:click={() => { circleanimationclockwise = !circleanimationclockwise; localStorage.setItem('circleanimationclockwise', circleanimationclockwise); }} />
        <label class="custom-control-label" for="circleanimationclockwise">CircleClock</label>
      </div>
        <br> 
        <div class="switch">
          <input type="checkbox" class="form-check-input" id="circleanimationcounterclockwise" on:click={() => { circleanimationcounterclockwise = !circleanimationcounterclockwise; localStorage.setItem('circleanimationcounterclockwise', circleanimationcounterclockwise); }} />
          <label class="custom-control-label" for="circleanimationcounterclockwise">CircleCounter</label>
        </div>
          <br> 
        <div class="switch">
          <input type="checkbox" class="form-check-input" id="floatanimationdown" on:click={() => { floatanimationdown = !floatanimationdown; localStorage.setItem('floatanimationdown', floatanimationdown); }} />
          <label class="custom-control-label" for="floatanimationdown">FloatDown</label>
        </div>
       <br>
       <div class="switch">
        <input type="checkbox" class="form-check-input" id="floatanimationup" on:click={() => { floatanimationup = !floatanimationup; localStorage.setItem('floatanimationup', floatanimationup); }} />
        <label class="custom-control-label" for="floatanimationup">FloatUp</label>
      </div>
      <br>
      <div class="switch">
        <input type="checkbox" class="form-check-input" id="pulseout" on:click={() => { pulseout = !pulseout; localStorage.setItem('pulseout', pulseout); }} />
        <label class="custom-control-label" for="pulseout">Pulse</label>
      </div>
      <br>
      <div class="switch">
        <input type="checkbox" class="form-check-input" id="revolvehorizontal" on:click={() => { revolvehorizontal = !revolvehorizontal; localStorage.setItem('revolvehorizontal', revolvehorizontal); }} />
        <label class="custom-control-label" for="revolvehorizontal">RevolveHorizontal</label>
      </div>
      <br>
      <div class="switch">
        <input type="checkbox" class="form-check-input" id="revolvevertical" on:click={() => { revolvevertical = !revolvevertical; localStorage.setItem('revolvevertical', revolvevertical); }} />
        <label class="custom-control-label" for="revolvevertical">RevolveVertical</label>
      </div>
      <br>
        <div class="switch">
          <input type="checkbox" class="form-check-input" id="wavesanimationright" on:click={() => { wavesanimationright = !wavesanimationright; localStorage.setItem('wavesanimationright', wavesanimationright); }} />
          <label class="custom-control-label" for="wavesanimationright">WavesRight</label>
        </div>
        <br>
        <div class="switch">
          <input type="checkbox" class="form-check-input" id="wavesanimationleft" on:click={() => { wavesanimationleft = !wavesanimationleft; localStorage.setItem('wavesanimationleft', wavesanimationleft); }} />
          <label class="custom-control-label" for="wavesanimationleft">WavesLeft</label>
        </div>
  
  
      
     
         <br><br>
        <br><br><div class="back back-icon"></div><br><br><br><br></div></li></ul>
  
    


  <ul class="side2"><li class="side">
    <!-- svelte-ignore a11y-invalid-attribute -->
    <a data-sveltekit-preload-data="hover" data-sveltekit-preload-code="eager" sveltekit:prefetch href="#" id="saucysidemenu27" class="back-icon">Components</a>
    <div class="submenu nav-level"><div class="nav-header">
    <h3>Components</h3></div><ul class="side2"><li class="side"></li></ul>



      <div class="switch">
        <input type="checkbox" class="form-check-input" id="noparty" on:click={() => { noparty = !noparty; localStorage.setItem('noparty', noparty); }} />
        <label class="custom-control-label" for="noparty">Confetti</label>
      </div>
      <br>
      <div class="switch">
        <input type="checkbox" class="form-check-input" id="loader" on:click={() => { loader = !loader; localStorage.setItem('loader', loader); }} />
        <label class="custom-control-label" for="loader">Loader</label>
      </div>
      <br>
      <div class="switch">
        <input type="checkbox" class="form-check-input" id="mining" on:click={() => { mining = !mining; localStorage.setItem('mining', mining); }} />
        <label class="custom-control-label" for="mining">Mining</label>
      </div>
      <br>
      <div class="switch">
        <input type="checkbox" class="form-check-input" id="voicecommands" on:click={() => { voicecommands = !voicecommands; localStorage.setItem('voicecommands', voicecommands); }} />
        <label class="custom-control-label" for="voicecommands">Voice</label>
      </div>

    
   
       <br><br>
      <br><br><div class="back back-icon"></div><br><br><br><br></div></li></ul>


  <ul class="side2"><li class="side">
    <!-- svelte-ignore a11y-invalid-attribute -->
    <a data-sveltekit-preload-data="hover" data-sveltekit-preload-code="eager" sveltekit:prefetch href="#" id="saucysidemenu3" class="back-icon">Interface</a>
    <div class="submenu nav-level"><div class="nav-header">
    <h3>Interface</h3></div><ul class="side2"><li class="side"></li></ul>



    <h2 id="backgrounds">Middle</h2>
    <div class="switch">
      <input type="checkbox" class="form-check-input" id="searchlogo" on:click={() => { searchlogo = !searchlogo; localStorage.setItem('searchlogo', searchlogo); }} />
      <label class="custom-control-label" for="searchlogo">Search</label>
    </div>
    <br>
    <div class="switch">
      <input type="checkbox" class="form-check-input" id="bar" on:click={() => { bar = !bar; localStorage.setItem('bar', bar); }} />
      <label class="custom-control-label" for="bar">Bar</label>
    </div>


    <br><br><br><br>


    <h2 id="backgrounds">Island</h2>
    <div class="switch">
      <input type="checkbox" class="form-check-input" id="island1saucy" on:click={() => { island1saucy = !island1saucy; localStorage.setItem('island1saucy', island1saucy); }} />
      <label class="custom-control-label" for="island1saucy">Island</label>
    </div>
    <br>
    <div class="switch">
     <input type="checkbox" class="form-check-input" id="notessaucy" on:click={() => { notessaucy = !notessaucy; localStorage.setItem('notessaucy', notessaucy); }} />
     <label class="custom-control-label" for="notessaucy">Notes</label>
   </div>
   <br>
    <div class="switch">
   <input type="checkbox" class="form-check-input" id="chatgptsaucy" on:click={() => { chatgptsaucy = !chatgptsaucy; localStorage.setItem('chatgptsaucy', chatgptsaucy); }} />
   <label class="custom-control-label" for="chatgptsaucy">ChatGPT</label>
 </div>
 <br>
 <div class="switch">
   <input type="checkbox" class="form-check-input" id="assistantsaucy" on:click={() => { assistantsaucy = !assistantsaucy; localStorage.setItem('assistantsaucy', assistantsaucy); }} />
   <label class="custom-control-label" for="assistantsaucy">Assistant</label>
 </div>
 <br>
 <div class="switch">
   <input type="checkbox" class="form-check-input" id="intelligencesaucy" on:click={() => { intelligencesaucy = !intelligencesaucy; localStorage.setItem('intelligencesaucy', intelligencesaucy); }} />
   <label class="custom-control-label" for="intelligencesaucy">Intelligence</label>
 </div>
 <br>
 <div class="switch">
   <input type="checkbox" class="form-check-input" id="feedsaucy" on:click={() => { feedsaucy = !feedsaucy; localStorage.setItem('feedsaucy', feedsaucy); }} />
   <label class="custom-control-label" for="feedsaucy">Discover</label>
 </div>
 <br>
 <div class="switch">
  <input type="checkbox" class="form-check-input" id="island2saucy" on:click={() => { island2saucy = !island2saucy; localStorage.setItem('island2saucy', island2saucy); }} />
  <label class="custom-control-label" for="island2saucy">Island&Icons</label>
</div>

<br><br><br><br>


 <h2 id="backgrounds">Left</h2>
 <div class="switch">
  <input type="checkbox" class="form-check-input" id="community1" on:click={() => { community1 = !community1; localStorage.setItem('community1', community1); }} />
  <label class="custom-control-label" for="community1">Random</label>
</div>
<br>
<div class="switch">
  <input type="checkbox" class="form-check-input" id="saucyhype1" on:click={() => { saucyhype1 = !saucyhype1; localStorage.setItem('saucyhype1', saucyhype1); }} />
  <label class="custom-control-label" for="saucyhype1">Hype</label>
</div>
<br>
 <div class="switch">
  <input type="checkbox" class="form-check-input" id="preset1" on:click={() => { preset1 = !preset1; localStorage.setItem('preset1', preset1); }} />
  <label class="custom-control-label" for="preset1">Preset1</label>
</div>
<br>
<div class="switch">
  <input type="checkbox" class="form-check-input" id="preset2" on:click={() => { preset2 = !preset2; localStorage.setItem('preset2', preset2); }} />
  <label class="custom-control-label" for="preset2">Preset2</label>
</div>
<br>
<div class="switch">
  <input type="checkbox" class="form-check-input" id="preset3" on:click={() => { preset3 = !preset3; localStorage.setItem('preset3', preset3); }} />
  <label class="custom-control-label" for="preset3">Preset3</label>
</div>
<br>
<div class="switch">
  <input type="checkbox" class="form-check-input" id="preset4" on:click={() => { preset4 = !preset4; localStorage.setItem('preset4', preset4); }} />
  <label class="custom-control-label" for="preset4">Preset4</label>
</div>


<br><br><br><br>

 <h2 id="backgrounds">Right</h2>
    <div class="switch">
      <input type="checkbox" class="form-check-input" id="myself1" on:click={() => { myself1 = !myself1; localStorage.setItem('myself1', myself1); }} />
     <label class="custom-control-label" for="myself1">Random</label>
    </div>
    <br>
    <div class="switch">
      <input type="checkbox" class="form-check-input" id="saucyhype2" on:click={() => { saucyhype2 = !saucyhype2; localStorage.setItem('saucyhype2', saucyhype2); }} />
      <label class="custom-control-label" for="saucyhype2">Vibes</label>
    </div>
    <br>
    <div class="switch">
      <input type="checkbox" class="form-check-input" id="actions1" on:click={() => { actions1 = !actions1; localStorage.setItem('actions1', actions1); }} />
      <label class="custom-control-label" for="actions1">Movies</label>
    </div>
     <br>
     <div class="switch">
      <input type="checkbox" class="form-check-input" id="videos1" on:click={() => { videos1 = !videos1; localStorage.setItem('videos1', videos1); }} />
      <label class="custom-control-label" for="videos1">Videos</label>
    </div>
     <br>
     <div class="switch">
      <input type="checkbox" class="form-check-input" id="communitysaucy1" on:click={() => { communitysaucy1 = !communitysaucy1; localStorage.setItem('communitysaucy1', communitysaucy1); }} />
      <label class="custom-control-label" for="communitysaucy1">Twitch</label>
    </div>


 

    
    <br><br><br><br>

    <h2 id="backgrounds">Hype/Vibes</h2>
    <div class="switch">
      <input type="checkbox" class="form-check-input" id="hypesaucysaucy" on:click={() => { hypesaucysaucy = !hypesaucysaucy; localStorage.setItem('hypesaucysaucy', hypesaucysaucy); }} />
      <label class="custom-control-label" for="hypesaucysaucy">Hype</label>
    </div>
    <br>
    <div class="switch">
      <input type="checkbox" class="form-check-input" id="vibessaucysaucy" on:click={() => { vibessaucysaucy = !vibessaucysaucy; localStorage.setItem('vibessaucysaucy', vibessaucysaucy); }} />
      <label class="custom-control-label" for="vibessaucysaucy">Vibes</label>
    </div>
    
    <br><br><br><br>


    <h2 id="backgrounds">S/S</h2>
    <div class="switch">
      <input type="checkbox" class="form-check-input" id="createsaucysaucy" on:click={() => { createsaucysaucy = !createsaucysaucy; localStorage.setItem('createsaucysaucy', createsaucysaucy); }} />
      <label class="custom-control-label" for="createsaucysaucy">Support</label>
    </div>
    <br>
    <div class="switch">
      <input type="checkbox" class="form-check-input" id="consumesaucysaucy" on:click={() => { consumesaucysaucy = !consumesaucysaucy; localStorage.setItem('consumesaucysaucy', consumesaucysaucy); }} />
      <label class="custom-control-label" for="consumesaucysaucy">Shop</label>
    </div>
    <br>



       <br><br>
      <br><br><div class="back back-icon"></div><br><br><br><br></div></li></ul>

      



<ul class="side2"><li class="side">
  <!-- svelte-ignore a11y-invalid-attribute -->
  <a data-sveltekit-preload-data="hover" data-sveltekit-preload-code="eager" sveltekit:prefetch href="#" id="saucysidemenu7" class="back-icon">Layouts</a>
  <div class="submenu nav-level"><div class="nav-header">
  <h3>Layouts</h3></div><ul class="side2"><li class="side"></li></ul>
  


    <h2 id="layouts" style="color: #fff">Top</h2><br>
    <div class="switch">
      <input type="checkbox" class="form-check-input" id="top" on:click={() => { top = !top; localStorage.setItem('top', top); }} />
      <label class="custom-control-label" for="top">Default</label>
    </div><br>
    <div class="switch">
      <input type="checkbox" class="form-check-input" id="apptop" on:click={() => { apptop = !apptop; localStorage.setItem('apptop', apptop); }} />
      <label class="custom-control-label" for="apptop">App</label>
    </div><br>
    <div class="switch">
      <input type="checkbox" class="form-check-input" id="mobiletop" on:click={() => { mobiletop = !mobiletop; localStorage.setItem('mobiletop', mobiletop); }} />
      <label class="custom-control-label" for="mobiletop">Mobile</label>
    </div>
    <br>
    <div class="switch">
      <input type="checkbox" class="form-check-input" id="simpletop" on:click={() => { simpletop = !simpletop; localStorage.setItem('simpletop', simpletop); }} />
      <label class="custom-control-label" for="simpletop">Simple</label>
    </div><br><br>

    <h2 id="layouts" style="color: #fff">Bottom</h2><br>
    <div class="switch">
      <input type="checkbox" class="form-check-input" id="bottom" on:click={() => { bottom = !bottom; localStorage.setItem('bottom', bottom); }} />
      <label class="custom-control-label" for="bottom">Default</label>
    </div><br>
    <div class="switch">
      <input type="checkbox" class="form-check-input" id="appbottom" on:click={() => { appbottom = !appbottom; localStorage.setItem('appbottom', appbottom); }} />
      <label class="custom-control-label" for="appbottom">App</label>
    </div><br>
    <div class="switch">
      <input type="checkbox" class="form-check-input" id="mobilebottom" on:click={() => { mobilebottom = !mobilebottom; localStorage.setItem('mobilebottom', mobilebottom); }} />
      <label class="custom-control-label" for="mobilebottom">Mobile</label>
    </div>
    <br>
    <div class="switch">
      <input type="checkbox" class="form-check-input" id="simplebottom" on:click={() => { simplebottom = !simplebottom; localStorage.setItem('simplebottom', simplebottom); }} />
      <label class="custom-control-label" for="simplebottom">Simple</label>
    </div><br><br>

    <h2 id="layouts" style="color: #fff">Other</h2><br>
    <div class="switch">
      <input type="checkbox" class="form-check-input" id="mini" on:click={() => { mini = !mini; localStorage.setItem('mini', mini); }} />
      <label class="custom-control-label" for="mini">Mini</label>
    </div>
    
    <br><br><div class="back back-icon"></div><br><br><br><br></div></li></ul>



    <ul class="side2"><li class="side">
      <!-- svelte-ignore a11y-invalid-attribute -->
      <a data-sveltekit-preload-data="hover" data-sveltekit-preload-code="eager" sveltekit:prefetch href="#" id="saucysidemenu25" class="back-icon">Loaders</a>
      <div class="submenu nav-level"><div class="nav-header">
      <h3>Loaders</h3></div><ul class="side2"><li class="side"></li></ul>
      

      <div class="switch">
        <input type="checkbox" class="form-check-input" id="defaultloader" on:click={() => { defaultloader = !defaultloader; localStorage.setItem('defaultloader', defaultloader); }} />
        <label class="custom-control-label" for="defaultloader">Default</label>
      </div><br>
      <div class="switch">
        <input type="checkbox" class="form-check-input" id="blocksloader" on:click={() => { blocksloader = !blocksloader; localStorage.setItem('blocksloader', blocksloader); }} />
        <label class="custom-control-label" for="blocksloader">Blocks</label>
      </div><br>
      <div class="switch">
        <input type="checkbox" class="form-check-input" id="cubeloader" on:click={() => { cubeloader = !cubeloader; localStorage.setItem('cubeloader', cubeloader); }} />
        <label class="custom-control-label" for="cubeloader">Cubed</label>
      </div><br>
      <div class="switch">
        <input type="checkbox" class="form-check-input" id="dotsloader" on:click={() => { dotsloader = !dotsloader; localStorage.setItem('dotsloader', dotsloader); }} />
        <label class="custom-control-label" for="dotsloader">Dots</label>
      </div><br>
      <div class="switch">
        <input type="checkbox" class="form-check-input" id="globeloader" on:click={() => { globeloader = !globeloader; localStorage.setItem('globeloader', globeloader); }} />
        <label class="custom-control-label" for="globeloader">Globe</label>
      </div><br>
      <div class="switch">
        <input type="checkbox" class="form-check-input" id="infiniteloader" on:click={() => { infiniteloader = !infiniteloader; localStorage.setItem('infiniteloader', infiniteloader); }} />
        <label class="custom-control-label" for="infiniteloader">Infinite</label>
      </div><br>
      <div class="switch">
        <input type="checkbox" class="form-check-input" id="infinityloader" on:click={() => { infinityloader = !infinityloader; localStorage.setItem('infinityloader', infinityloader); }} />
        <label class="custom-control-label" for="infinityloader">Infinity</label>
      </div><br>
      <div class="switch">
        <input type="checkbox" class="form-check-input" id="lootloader" on:click={() => { lootloader = !lootloader; localStorage.setItem('lootloader', lootloader); }} />
        <label class="custom-control-label" for="lootloader">Loot</label>
      </div><br>
      <div class="switch">
        <input type="checkbox" class="form-check-input" id="nyanloader" on:click={() => { nyanloader = !nyanloader; localStorage.setItem('nyanloader', nyanloader); }} />
        <label class="custom-control-label" for="nyanloader">Nyan</label>
      </div><br>
      <div class="switch">
        <input type="checkbox" class="form-check-input" id="rainbowloader" on:click={() => { rainbowloader = !rainbowloader; localStorage.setItem('rainbowloader', rainbowloader); }} />
        <label class="custom-control-label" for="rainbowloader">Rainbow</label>
      </div><br>
      <div class="switch">
        <input type="checkbox" class="form-check-input" id="swirlloader" on:click={() => { swirlloader = !swirlloader; localStorage.setItem('swirlloader', swirlloader); }} />
        <label class="custom-control-label" for="swirlloader">Swirl</label>
      </div><br>
      <div class="switch">
        <input type="checkbox" class="form-check-input" id="terraformloader" on:click={() => { terraformloader = !terraformloader; localStorage.setItem('terraformloader', terraformloader); }} />
        <label class="custom-control-label" for="terraformloader">Terraform</label>
      </div><br>
      <div class="switch">
        <input type="checkbox" class="form-check-input" id="triangularloader" on:click={() => { triangularloader = !triangularloader; localStorage.setItem('triangularloader', triangularloader); }} />
        <label class="custom-control-label" for="triangularloader">Triangular</label>
      </div><br>
      <div class="switch">
        <input type="checkbox" class="form-check-input" id="unicornloader" on:click={() => { unicornloader = !unicornloader; localStorage.setItem('unicornloader', unicornloader); }} />
        <label class="custom-control-label" for="unicornloader">Unicorn</label>
      </div><br>
  
      
      
        
          
      <br><br><div class="back back-icon"></div><br><br><br><br></div></li></ul>
          
      


    <ul class="side2"><li class="side">
      <!-- svelte-ignore a11y-invalid-attribute -->
      <a data-sveltekit-preload-data="hover" data-sveltekit-preload-code="eager" sveltekit:prefetch href="#" id="saucysidemenu26" class="back-icon">Other</a>
      <div class="submenu nav-level"><div class="nav-header">
      <h3>Other</h3></div><ul class="side2"><li class="side"></li></ul>
      
    
    
        <h2 id="layouts" style="color: #fff">Background Blur</h2><br>
        <div class="switch">
          <input type="checkbox" class="form-check-input" id="smallbgblur" on:click={() => { smallbgblur = !smallbgblur; localStorage.setItem('smallbgblur', smallbgblur); }} />
          <label class="custom-control-label" for="smallbgblur">Small</label>
        </div><br>
        <div class="switch">
          <input type="checkbox" class="form-check-input" id="mediumbgblur" on:click={() => { mediumbgblur = !mediumbgblur; localStorage.setItem('mediumbgblur', mediumbgblur); }} />
          <label class="custom-control-label" for="mediumbgblur">Medium</label>
        </div><br>
        <div class="switch">
          <input type="checkbox" class="form-check-input" id="largebgblur" on:click={() => { largebgblur = !largebgblur; localStorage.setItem('largebgblur', largebgblur); }} />
          <label class="custom-control-label" for="largebgblur">Large</label>
        </div>
<br><br>
        <h2 id="layouts" style="color: #fff">Navigation Bar</h2><br>
        <div class="switch">
          <input type="checkbox" class="form-check-input" id="mininavbar" on:click={() => { mininavbar = !mininavbar; localStorage.setItem('mininavbar', mininavbar); }} />
          <label class="custom-control-label" for="mininavbar">Mini</label>
        </div><br>
        <div class="switch">
          <input type="checkbox" class="form-check-input" id="smallnavbar" on:click={() => { smallnavbar = !smallnavbar; localStorage.setItem('smallnavbar', smallnavbar); }} />
          <label class="custom-control-label" for="smallnavbar">Small</label>
        </div><br>
        <div class="switch">
          <input type="checkbox" class="form-check-input" id="mediumnavbar" on:click={() => { mediumnavbar = !mediumnavbar; localStorage.setItem('mediumnavbar', mediumnavbar); }} />
          <label class="custom-control-label" for="mediumnavbar">Medium</label>
        </div><br>
        <div class="switch">
          <input type="checkbox" class="form-check-input" id="largenavbar" on:click={() => { largenavbar = !largenavbar; localStorage.setItem('largenavbar', largenavbar); }} />
          <label class="custom-control-label" for="largenavbar">Large</label>
        </div><br>
        <div class="switch">
          <input type="checkbox" class="form-check-input" id="xlnavbar" on:click={() => { xlnavbar = !xlnavbar; localStorage.setItem('xlnavbar', xlnavbar); }} />
          <label class="custom-control-label" for="xlnavbar">XL</label>
        </div>

<br><br>


    
<br><br><div class="back back-icon"></div><br><br><br><br></div></li></ul>

    <div class="back back-icon"  on:click={global}></div></div>




    <ul class="side2">
      <li class="side"> 
        <!-- svelte-ignore a11y-invalid-attribute -->
        <a data-sveltekit-preload-data="hover" data-sveltekit-preload-code="eager" sveltekit:prefetch href="#" id="saucysidemenu13" class="back-icon">Backgrounds</a>
        <div class="submenu nav-level">
        <div class="nav-header">
          <h3>Backgrounds</h3>
        </div>


        <h2 id="backgrounds">Animated</h2>


        <ul class="side2"><li class="side">
          <!-- svelte-ignore a11y-invalid-attribute -->
          <a data-sveltekit-preload-data="hover" data-sveltekit-preload-code="eager" sveltekit:prefetch href="#" id="saucysidemenu4" class="back-icon">Rainbow</a>
          <div class="submenu nav-level"><div class="nav-header">
          <h3>Rainbow</h3></div><ul class="side2"><li class="side"></li></ul>
        

          <div class="switch">
            <input type="checkbox" class="form-check-input" id="rainbowbeachSwitch" />
            <label class="custom-control-label" for="rainbowbeachSwitch">Beach</label>
          </div>
          <br>

          <div class="switch">
            <input type="checkbox" class="form-check-input" id="rainbowbridgeSwitch" />
            <label class="custom-control-label" for="rainbowbridgeSwitch">Bridge</label>
          </div>
          <br>

          <div class="switch">
            <input type="checkbox" class="form-check-input" id="rainbowbutterflySwitch" />
            <label class="custom-control-label" for="rainbowbutterflySwitch">Butterfly</label>
          </div>
          <br>

          <div class="switch">
            <input type="checkbox" class="form-check-input" id="rainbowcandySwitch" />
            <label class="custom-control-label" for="rainbowcandySwitch">Candy</label>
          </div>
          <br>

          <div class="switch">
            <input type="checkbox" class="form-check-input" id="rainbowcheckersSwitch" />
            <label class="custom-control-label" for="rainbowcheckersSwitch">Checkers</label>
          </div>
          <br>

          <div class="switch">
            <input type="checkbox" class="form-check-input" id="rainbowdestinySwitch" />
            <label class="custom-control-label" for="rainbowdestinySwitch">Destiny</label>
          </div>
          <br>

          <div class="switch">
            <input type="checkbox" class="form-check-input" id="rainbowdiamondsSwitch" />
            <label class="custom-control-label" for="rainbowdiamondsSwitch">Diamonds</label>
          </div>
          <br>

          <div class="switch">
            <input type="checkbox" class="form-check-input" id="rainbowdiscoSwitch" />
            <label class="custom-control-label" for="rainbowdiscoSwitch">Disco</label>
          </div>
          <br>

          <div class="switch">
            <input type="checkbox" class="form-check-input" id="rainbowenergySwitch" />
            <label class="custom-control-label" for="rainbowenergySwitch">Energy</label>
          </div>
          <br>

          <div class="switch">
            <input type="checkbox" class="form-check-input" id="rainbowfluidSwitch" />
            <label class="custom-control-label" for="rainbowfluidSwitch">Fluid</label>
          </div>
          <br>

          <div class="switch">
            <input type="checkbox" class="form-check-input" id="rainbowgalaxySwitch" />
            <label class="custom-control-label" for="rainbowgalaxySwitch">Galaxy</label>
          </div>
          <br>

          <div class="switch">
            <input type="checkbox" class="form-check-input" id="rainbowglitchSwitch" />
            <label class="custom-control-label" for="rainbowglitchSwitch">Glitch</label>
          </div>
          <br>

          <div class="switch">
            <input type="checkbox" class="form-check-input" id="rainbowglowSwitch" />
            <label class="custom-control-label" for="rainbowglowSwitch">Glow</label>
          </div>
          <br>

          <div class="switch">
            <input type="checkbox" class="form-check-input" id="rainbowgooSwitch" />
            <label class="custom-control-label" for="rainbowgooSwitch">Goo</label>
          </div>
          <br>


          <div class="switch">
            <input type="checkbox" class="form-check-input" id="rainbowheartsSwitch" />
            <label class="custom-control-label" for="rainbowheartsSwitch">Hearts</label>
          </div>
          <br>

          <div class="switch">
            <input type="checkbox" class="form-check-input" id="rainbowhillsSwitch" />
            <label class="custom-control-label" for="rainbowhillsSwitch">Hills</label>
          </div>
          <br>

          <div class="switch">
            <input type="checkbox" class="form-check-input" id="rainbowlandSwitch" />
            <label class="custom-control-label" for="rainbowlandSwitch">Land</label>
          </div>
          <br>

          <div class="switch">
            <input type="checkbox" class="form-check-input" id="rainbowmagneticSwitch" />
            <label class="custom-control-label" for="rainbowmagneticSwitch">Magnetic</label>
          </div>
          <br>

          <div class="switch">
            <input type="checkbox" class="form-check-input" id="rainbowmeshSwitch" />
            <label class="custom-control-label" for="rainbowmeshSwitch">Mesh</label>
          </div>
          <br>

          <div class="switch">
            <input type="checkbox" class="form-check-input" id="rainbowmorphSwitch" />
            <label class="custom-control-label" for="rainbowmorphSwitch">Morph</label>
          </div>
          <br>

          <div class="switch">
            <input type="checkbox" class="form-check-input" id="rainbownyanSwitch" />
            <label class="custom-control-label" for="rainbownyanSwitch">Nyan</label>
          </div>
          <br>

          <div class="switch">
            <input type="checkbox" class="form-check-input" id="rainbowplacesSwitch" />
            <label class="custom-control-label" for="rainbowplacesSwitch">Places</label>
          </div>
          <br>

          <div class="switch">
            <input type="checkbox" class="form-check-input" id="rainbowportalSwitch" />
            <label class="custom-control-label" for="rainbowportalSwitch">Portal</label>
          </div>
          <br>

          <div class="switch">
            <input type="checkbox" class="form-check-input" id="rainbowprideSwitch" />
            <label class="custom-control-label" for="rainbowprideSwitch">Pride</label>
          </div>
          <br>

          <div class="switch">
            <input type="checkbox" class="form-check-input" id="rainbowroadSwitch" />
            <label class="custom-control-label" for="rainbowroadSwitch">Road</label>
          </div>
          <br>

          <div class="switch">
            <input type="checkbox" class="form-check-input" id="rainbowsauceSwitch" />
            <label class="custom-control-label" for="rainbowsauceSwitch">Sauce</label>
          </div>
          <br>
          
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="rainbowshardsSwitch" />
            <label class="custom-control-label" for="rainbowshardsSwitch">Shards</label>
          </div>
          <br>

          <div class="switch">
            <input type="checkbox" class="form-check-input" id="rainbowshroomsSwitch" />
            <label class="custom-control-label" for="rainbowshroomsSwitch">Shrooms</label>
          </div>
          <br>
          
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="rainbowswirlsSwitch" />
            <label class="custom-control-label" for="rainbowswirlsSwitch">Swirls</label>
          </div>
          <br>

          <div class="switch">
            <input type="checkbox" class="form-check-input" id="rainbowtechnoSwitch" />
            <label class="custom-control-label" for="rainbowtechnoSwitch">Techno</label>
          </div>
          <br>

          <div class="switch">
            <input type="checkbox" class="form-check-input" id="rainbowtravelSwitch" />
            <label class="custom-control-label" for="rainbowtravelSwitch">Travel</label>
          </div>
          <br>

          <div class="switch">
            <input type="checkbox" class="form-check-input" id="rainbowunicornSwitch" />
            <label class="custom-control-label" for="rainbowunicornSwitch">Unicorn</label>
          </div>
          <br>

          <div class="switch">
            <input type="checkbox" class="form-check-input" id="rainbowwaterSwitch" />
            <label class="custom-control-label" for="rainbowwaterSwitch">Water</label>
          </div>
          <br>

          <div class="switch">
            <input type="checkbox" class="form-check-input" id="rainbowwavesSwitch" />
            <label class="custom-control-label" for="rainbowwavesSwitch">Waves</label>
          </div>
          <br>

          <br><br><div class="back back-icon"></div><br><br><br><br></div></li></ul>

        <br>
        <h2 id="backgrounds">Gradients</h2>


        
        <ul class="side2"><li class="side">
          <!-- svelte-ignore a11y-invalid-attribute -->
          <a data-sveltekit-preload-data="hover" data-sveltekit-preload-code="eager" sveltekit:prefetch href="#" id="saucysidemenu8" class="back-icon">Dreamy</a>
          <div class="submenu nav-level"><div class="nav-header">
          <h3>Dreamy</h3></div><ul class="side2"><li class="side"></li></ul>
        
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="aquaSwitch" />
            <label class="custom-control-label" for="aquaSwitch">aqua</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="asianSwitch" />
            <label class="custom-control-label" for="asianSwitch">asian</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="autumnSwitch" />
            <label class="custom-control-label" for="autumnSwitch">autumn</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="bahamasSwitch" />
            <label class="custom-control-label" for="bahamasSwitch">bahamas</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="beachSwitch" />
            <label class="custom-control-label" for="beachSwitch">beach</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="blushSwitch" />
            <label class="custom-control-label" for="blushSwitch">blush</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="cherryblossomSwitch" />
            <label class="custom-control-label" for="cherryblossomSwitch">cherryblossom</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="citrusSwitch" />
            <label class="custom-control-label" for="citrusSwitch">citrus</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="cloudsSwitch" />
            <label class="custom-control-label" for="cloudsSwitch">clouds</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="cottoncandySwitch" />
            <label class="custom-control-label" for="cottoncandySwitch">cottoncandy</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="dreamSwitch" />
            <label class="custom-control-label" for="dreamSwitch">dream</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="dreamlandSwitch" />
            <label class="custom-control-label" for="dreamlandSwitch">dreamland</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="duskSwitch" />
            <label class="custom-control-label" for="duskSwitch">dusk</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="euphoriaSwitch" />
            <label class="custom-control-label" for="euphoriaSwitch">euphoria</label>
            </div>
            <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="fantasySwitch" />
            <label class="custom-control-label" for="fantasySwitch">fantasy</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="festivalSwitch" />
            <label class="custom-control-label" for="festivalSwitch">festival</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="fogSwitch" />
            <label class="custom-control-label" for="fogSwitch">fog</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="forestSwitch" />
            <label class="custom-control-label" for="forestSwitch">forest</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="grassSwitch" />
            <label class="custom-control-label" for="grassSwitch">grass</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="hawaiiSwitch" />
            <label class="custom-control-label" for="hawaiiSwitch">hawaii</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="highlighterSwitch" />
            <label class="custom-control-label" for="highlighterSwitch">highlighter</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="hydrangeaSwitch" />
            <label class="custom-control-label" for="hydrangeaSwitch">hydrangea</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="laundrySwitch" />
            <label class="custom-control-label" for="laundrySwitch">laundry</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="lilacSwitch" />
            <label class="custom-control-label" for="lilacSwitch">lilac</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="meadowSwitch" />
            <label class="custom-control-label" for="meadowSwitch">meadow</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="metallicSwitch" />
            <label class="custom-control-label" for="metallicSwitch">metallic</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="netherlandsSwitch" />
            <label class="custom-control-label" for="netherlandsSwitch">netherlands</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="nurserySwitch" />
            <label class="custom-control-label" for="nurserySwitch">nursery</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="oceanSwitch" />
            <label class="custom-control-label" for="oceanSwitch">ocean</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="pastelSwitch" />
            <label class="custom-control-label" for="pastelSwitch">pastel</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="peachesSwitch" />
            <label class="custom-control-label" for="peachesSwitch">peaches</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="periwinkleSwitch" />
            <label class="custom-control-label" for="periwinkleSwitch">periwinkle</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="pinklemonadeSwitch" />
            <label class="custom-control-label" for="pinklemonadeSwitch">pinklemonade</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="pinksandsSwitch" />
            <label class="custom-control-label" for="pinksandsSwitch">pinksands</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="redhotSwitch" />
            <label class="custom-control-label" for="redhotSwitch">redhot</label>
            </div>
            <br>
            <div class="switch">
              <input type="checkbox" class="form-check-input" id="retroSwitch" />
              <label class="custom-control-label" for="retroSwitch">retro</label>
            </div>
            <br>
            <div class="switch">
              <input type="checkbox" class="form-check-input" id="roseSwitch" />
              <label class="custom-control-label" for="roseSwitch">rosè</label>
            </div>
            <br>
            <div class="switch">
              <input type="checkbox" class="form-check-input" id="rosebushSwitch" />
              <label class="custom-control-label" for="rosebushSwitch">rosebush</label>
            </div>
            <br>
            <div class="switch">
              <input type="checkbox" class="form-check-input" id="skySwitch" />
              <label class="custom-control-label" for="skySwitch">sky</label>
            </div>
            <br>
            <div class="switch">
              <input type="checkbox" class="form-check-input" id="spaceSwitch" />
              <label class="custom-control-label" for="spaceSwitch">space</label>
            </div>
            <br>
            <div class="switch">
              <input type="checkbox" class="form-check-input" id="summerSwitch" />
              <label class="custom-control-label" for="summerSwitch">summer</label>
            </div>
            <br>
            <div class="switch">
              <input type="checkbox" class="form-check-input" id="sunflowersSwitch" />
              <label class="custom-control-label" for="sunflowersSwitch">sunflowers</label>
            </div>
            <br>
            <div class="switch">
              <input type="checkbox" class="form-check-input" id="sunnylakeSwitch" />
              <label class="custom-control-label" for="sunnylakeSwitch">sunnylake</label>
            </div>
            <br>
            <div class="switch">
              <input type="checkbox" class="form-check-input" id="sunriseSwitch" />
              <label class="custom-control-label" for="sunriseSwitch">sunrise</label>
            </div>
            <br>
            <div class="switch">
              <input type="checkbox" class="form-check-input" id="sunsetSwitch" />
              <label class="custom-control-label" for="sunsetSwitch">sunset</label>
            </div>
            <br>
            <div class="switch">
              <input type="checkbox" class="form-check-input" id="sunshineSwitch" />
              <label class="custom-control-label" for="sunshineSwitch">sunshine</label>
            </div>
            <br>
            <div class="switch">
              <input type="checkbox" class="form-check-input" id="sweetpeaSwitch" />
              <label class="custom-control-label" for="sweetpeaSwitch">sweetpea</label>
            </div>
            <br>
            <div class="switch">
              <input type="checkbox" class="form-check-input" id="tiedyeSwitch" />
              <label class="custom-control-label" for="tiedyeSwitch">tiedye</label>
            </div>
            <br>
            <div class="switch">
              <input type="checkbox" class="form-check-input" id="tulipSwitch" />
              <label class="custom-control-label" for="tulipSwitch">tulip</label>
            </div>
            <br>
            <div class="switch">
              <input type="checkbox" class="form-check-input" id="vortexSwitch" />
              <label class="custom-control-label" for="vortexSwitch">vortex</label>
            </div>
            <br><br>
            <br><br><div class="back back-icon"></div><br><br><br><br></div></li></ul>
      
      
      
      
      
      
      
      
      
      
              <ul class="side2"><li class="side">
                <!-- svelte-ignore a11y-invalid-attribute -->
                <a data-sveltekit-preload-data="hover" data-sveltekit-preload-code="eager" sveltekit:prefetch href="#" id="saucysidemenu10" class="back-icon">Mesh</a>
                <div class="submenu nav-level"><div class="nav-header">
                <h3>Mesh</h3></div><ul class="side2"><li class="side"></li></ul>
                
              
        
              <div class="switch">
            <input type="checkbox" class="form-check-input" id="mesh4Switch" />
            <label class="custom-control-label" for="mesh4Switch">Red</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="mesh5Switch" />
            <label class="custom-control-label" for="mesh5Switch">Red</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="mesh43Switch" />
            <label class="custom-control-label" for="mesh43Switch">Red</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="mesh55Switch" />
            <label class="custom-control-label" for="mesh55Switch">Red</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="mesh56Switch" />
            <label class="custom-control-label" for="mesh56Switch">Red</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="mesh68Switch" />
            <label class="custom-control-label" for="mesh68Switch">Red</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="mesh84Switch" />
            <label class="custom-control-label" for="mesh84Switch">Red</label>
            </div>
            <br>
            <div class="switch">
              <input type="checkbox" class="form-check-input" id="mesh86Switch" />
              <label class="custom-control-label" for="mesh86Switch">Red</label>
            </div>
            <br>
              <div class="switch">
            <input type="checkbox" class="form-check-input" id="mesh2Switch" />
            <label class="custom-control-label" for="mesh2Switch">Orange</label>
             </div>
         <br>
         <div class="switch">
            <input type="checkbox" class="form-check-input" id="mesh10Switch" />
            <label class="custom-control-label" for="mesh10Switch">Orange</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="mesh13Switch" />
            <label class="custom-control-label" for="mesh13Switch">Orange</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="mesh15Switch" />
            <label class="custom-control-label" for="mesh15Switch">Orange</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="mesh22Switch" />
            <label class="custom-control-label" for="mesh22Switch">Orange</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="mesh23Switch" />
            <label class="custom-control-label" for="mesh23Switch">Orange</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="mesh47Switch" />
            <label class="custom-control-label" for="mesh47Switch">Orange</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="mesh48Switch" />
            <label class="custom-control-label" for="mesh48Switch">Orange</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="mesh62Switch" />
            <label class="custom-control-label" for="mesh62Switch">Orange</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="mesh76Switch" />
            <label class="custom-control-label" for="mesh76Switch">Orange</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="mesh100Switch" />
            <label class="custom-control-label" for="mesh100Switch">Orange</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="mesh8Switch" />
            <label class="custom-control-label" for="mesh8Switch">Yellow</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="mesh21Switch" />
            <label class="custom-control-label" for="mesh21Switch">Yellow</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="mesh24Switch" />
            <label class="custom-control-label" for="mesh24Switch">Yellow</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="mesh32Switch" />
            <label class="custom-control-label" for="mesh32Switch">Yellow</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="mesh36Switch" />
            <label class="custom-control-label" for="mesh36Switch">Yellow</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="mesh38Switch" />
            <label class="custom-control-label" for="mesh38Switch">Yellow</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="mesh90Switch" />
            <label class="custom-control-label" for="mesh90Switch">Yellow</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="mesh91Switch" />
            <label class="custom-control-label" for="mesh91Switch">Yellow</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="mesh94Switch" />
            <label class="custom-control-label" for="mesh94Switch">Yellow</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="mesh98Switch" />
            <label class="custom-control-label" for="mesh98Switch">Yellow</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="mesh1Switch" />
            <label class="custom-control-label" for="mesh1Switch">Green</label>
          </div>
          <br>
             
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="mesh14Switch" />
            <label class="custom-control-label" for="mesh14Switch">Green</label>
            </div>
            <br>
        
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="mesh16Switch" />
            <label class="custom-control-label" for="mesh16Switch">Green</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="mesh26Switch" />
            <label class="custom-control-label" for="mesh26Switch">Green</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="mesh31Switch" />
            <label class="custom-control-label" for="mesh31Switch">Green</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="mesh34Switch" />
            <label class="custom-control-label" for="mesh34Switch">Green</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="mesh39Switch" />
            <label class="custom-control-label" for="mesh39Switch">Green</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="mesh40Switch" />
            <label class="custom-control-label" for="mesh40Switch">Green</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="mesh42Switch" />
            <label class="custom-control-label" for="mesh42Switch">Green</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="mesh44Switch" />
            <label class="custom-control-label" for="mesh44Switch">Green</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="mesh57Switch" />
            <label class="custom-control-label" for="mesh57Switch">Green</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="mesh59Switch" />
            <label class="custom-control-label" for="mesh59Switch">Green</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="mesh61Switch" />
            <label class="custom-control-label" for="mesh61Switch">Green</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="mesh70Switch" />
            <label class="custom-control-label" for="mesh70Switch">Green</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="mesh72Switch" />
            <label class="custom-control-label" for="mesh72Switch">Green</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="mesh77Switch" />
            <label class="custom-control-label" for="mesh77Switch">Green</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="mesh79Switch" />
            <label class="custom-control-label" for="mesh79Switch">Green</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="mesh81Switch" />
            <label class="custom-control-label" for="mesh81Switch">Green</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="mesh89Switch" />
            <label class="custom-control-label" for="mesh89Switch">Green</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="mesh96Switch" />
            <label class="custom-control-label" for="mesh96Switch">Green</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="mesh97Switch" />
            <label class="custom-control-label" for="mesh97Switch">Green</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="mesh58Switch" />
            <label class="custom-control-label" for="mesh58Switch">Green</label>
          </div>
          <br>
        <div class="switch">
            <input type="checkbox" class="form-check-input" id="mesh3Switch" />
            <label class="custom-control-label" for="mesh3Switch">Blue</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="mesh9Switch" />
            <label class="custom-control-label" for="mesh9Switch">Blue</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="mesh11Switch" />
            <label class="custom-control-label" for="mesh11Switch">Blue</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="mesh18Switch" />
            <label class="custom-control-label" for="mesh18Switch">Blue</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="mesh20Switch" />
            <label class="custom-control-label" for="mesh20Switch">Blue</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="mesh25Switch" />
            <label class="custom-control-label" for="mesh25Switch">Blue</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="mesh27Switch" />
            <label class="custom-control-label" for="mesh27Switch">Blue</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="mesh30Switch" />
            <label class="custom-control-label" for="mesh30Switch">Blue</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="mesh33Switch" />
            <label class="custom-control-label" for="mesh33Switch">Blue</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="mesh37Switch" />
            <label class="custom-control-label" for="mesh37Switch">Blue</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="mesh41Switch" />
            <label class="custom-control-label" for="mesh41Switch">Blue</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="mesh45Switch" />
            <label class="custom-control-label" for="mesh45Switch">Blue</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="mesh46Switch" />
            <label class="custom-control-label" for="mesh46Switch">Blue</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="mesh50Switch" />
            <label class="custom-control-label" for="mesh50Switch">Blue</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="mesh51Switch" />
            <label class="custom-control-label" for="mesh51Switch">Blue</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="mesh53Switch" />
            <label class="custom-control-label" for="mesh53Switch">Blue</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="mesh66Switch" />
            <label class="custom-control-label" for="mesh66Switch">Blue</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="mesh73Switch" />
            <label class="custom-control-label" for="mesh73Switch">Blue</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="mesh67Switch" />
            <label class="custom-control-label" for="mesh67Switch">Blue</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="mesh74Switch" />
            <label class="custom-control-label" for="mesh74Switch">Blue</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="mesh75Switch" />
            <label class="custom-control-label" for="mesh75Switch">Blue</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="mesh80Switch" />
            <label class="custom-control-label" for="mesh80Switch">Blue</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="mesh82Switch" />
            <label class="custom-control-label" for="mesh82Switch">Blue</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="mesh83Switch" />
            <label class="custom-control-label" for="mesh83Switch">Blue</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="mesh85Switch" />
            <label class="custom-control-label" for="mesh85Switch">Blue</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="mesh87Switch" />
            <label class="custom-control-label" for="mesh87Switch">Blue</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="mesh92Switch" />
            <label class="custom-control-label" for="mesh92Switch">Blue</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="mesh93Switch" />
            <label class="custom-control-label" for="mesh93Switch">Blue</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="mesh95Switch" />
            <label class="custom-control-label" for="mesh95Switch">Blue</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="mesh99Switch" />
            <label class="custom-control-label" for="mesh99Switch">Blue</label>
          </div>
          <br>
        
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="mesh6Switch" />
            <label class="custom-control-label" for="mesh6Switch">Purple</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="mesh12Switch" />
            <label class="custom-control-label" for="mesh12Switch">Purple</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="mesh17Switch" />
            <label class="custom-control-label" for="mesh17Switch">Purple</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="mesh28Switch" />
            <label class="custom-control-label" for="mesh28Switch">Purple</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="mesh29Switch" />
            <label class="custom-control-label" for="mesh29Switch">Purple</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="mesh35Switch" />
            <label class="custom-control-label" for="mesh35Switch">Purple</label>
            </div>
            <br>
            <div class="switch">
              <input type="checkbox" class="form-check-input" id="mesh49Switch" />
              <label class="custom-control-label" for="mesh49Switch">Purple</label>
            </div>
            <br>
            <div class="switch">
              <input type="checkbox" class="form-check-input" id="mesh52Switch" />
              <label class="custom-control-label" for="mesh52Switch">Purple</label>
            </div>
            <br>
            <div class="switch">
              <input type="checkbox" class="form-check-input" id="mesh60Switch" />
              <label class="custom-control-label" for="mesh60Switch">Purple</label>
            </div>
            <br>
            <div class="switch">
              <input type="checkbox" class="form-check-input" id="mesh65Switch" />
              <label class="custom-control-label" for="mesh65Switch">Purple</label>
            </div>
            <br>
            <div class="switch">
              <input type="checkbox" class="form-check-input" id="mesh69Switch" />
              <label class="custom-control-label" for="mesh69Switch">Purple</label>
            </div>
            <br>
            <div class="switch">
              <input type="checkbox" class="form-check-input" id="mesh71Switch" />
              <label class="custom-control-label" for="mesh71Switch">Purple</label>
            </div>
            <br>
            <div class="switch">
              <input type="checkbox" class="form-check-input" id="mesh78Switch" />
              <label class="custom-control-label" for="mesh78Switch">Purple</label>
            </div>
            <br>
              <div class="switch">
                <input type="checkbox" class="form-check-input" id="mesh88Switch" />
                <label class="custom-control-label" for="mesh88Switch">Purple</label>
              </div>
              <br>
              <div class="switch">
                <input type="checkbox" class="form-check-input" id="mesh19Switch" />
                <label class="custom-control-label" for="mesh19Switch">Pink</label>
              </div>
              <br>
              <div class="switch">
                <input type="checkbox" class="form-check-input" id="mesh54Switch" />
                <label class="custom-control-label" for="mesh54Switch">Pink</label>
              </div>
              <br>
              <div class="switch">
                <input type="checkbox" class="form-check-input" id="mesh63Switch" />
                <label class="custom-control-label" for="mesh63Switch">Pink</label>
                </div>
                <br>
              <div class="switch">
                <input type="checkbox" class="form-check-input" id="mesh64Switch" />
                <label class="custom-control-label" for="mesh64Switch">Pink</label>
              </div>
              <br><br>
            



              <br><br><div class="back back-icon"></div><br><br><br><br></div></li></ul>
<br>
<h2 id="backgrounds">Patterns</h2>

        <ul class="side2"><li class="side">
          <!-- svelte-ignore a11y-invalid-attribute -->
          <a data-sveltekit-preload-data="hover" data-sveltekit-preload-code="eager" sveltekit:prefetch href="#" id="saucysidemenu21" class="back-icon">Blocks</a>
          <div class="submenu nav-level"><div class="nav-header">
          <h3>Blocks</h3></div><ul class="side2"><li class="side"></li></ul>
          
          
          <br>
          
          
          <h2 id="blocks" style="color: #fff">Light</h2><br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="blackblocksSwitch" />
            <label class="custom-control-label" for="blackblocksSwitch">black</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="redblocksSwitch" />
            <label class="custom-control-label" for="redblocksSwitch">red</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="orangeblocksSwitch" />
            <label class="custom-control-label" for="orangeblocksSwitch">orange</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="yellowblocksSwitch" />
            <label class="custom-control-label" for="yellowblocksSwitch">yellow</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="greenblocksSwitch" />
            <label class="custom-control-label" for="greenblocksSwitch">green</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="blueblocksSwitch" />
            <label class="custom-control-label" for="blueblocksSwitch">blue</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="purpleblocksSwitch" />
            <label class="custom-control-label" for="purpleblocksSwitch">purple</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="pinkblocksSwitch" />
            <label class="custom-control-label" for="pinkblocksSwitch">pink</label>
          </div>
          <br><br>
          
          
          
          
          <h2 id="blocks" style="color: #fff">Dark</h2><br>
          
          
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="whiteblocksdarkSwitch" />
            <label class="custom-control-label" for="whiteblocksdarkSwitch">white</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="redblocksdarkSwitch" />
            <label class="custom-control-label" for="redblocksdarkSwitch">red</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="orangeblocksdarkSwitch" />
            <label class="custom-control-label" for="orangeblocksdarkSwitch">orange</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="yellowblocksdarkSwitch" />
            <label class="custom-control-label" for="yellowblocksdarkSwitch">yellow</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="greenblocksdarkSwitch" />
            <label class="custom-control-label" for="greenblocksdarkSwitch">green</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="blueblocksdarkSwitch" />
            <label class="custom-control-label" for="blueblocksdarkSwitch">blue</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="purpleblocksdarkSwitch" />
            <label class="custom-control-label" for="purpleblocksdarkSwitch">purple</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="pinkblocksdarkSwitch" />
            <label class="custom-control-label" for="pinkblocksdarkSwitch">pink</label>
          </div>
          <br><br>
          
          
          <h2 id="blocks" style="color: #fff">Background</h2><br>
          
          
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="redblocksbgSwitch" />
            <label class="custom-control-label" for="redblocksbgSwitch">red</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="orangeblocksbgSwitch" />
            <label class="custom-control-label" for="orangeblocksbgSwitch">orange</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="yellowblocksbgSwitch" />
            <label class="custom-control-label" for="yellowblocksbgSwitch">yellow</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="greenblocksbgSwitch" />
            <label class="custom-control-label" for="greenblocksbgSwitch">green</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="blueblocksbgSwitch" />
            <label class="custom-control-label" for="blueblocksbgSwitch">blue</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="purpleblocksbgSwitch" />
            <label class="custom-control-label" for="purpleblocksbgSwitch">purple</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="pinkblocksbgSwitch" />
            <label class="custom-control-label" for="pinkblocksbgSwitch">pink</label>
          </div>
          <br><br>
          
          


          <br><br><div class="back back-icon"></div><br><br><br><br></div></li></ul>




          
        <ul class="side2"><li class="side">
          <!-- svelte-ignore a11y-invalid-attribute -->
          <a data-sveltekit-preload-data="hover" data-sveltekit-preload-code="eager" sveltekit:prefetch href="#" id="saucysidemenu16" class="back-icon">Checkers</a>
          <div class="submenu nav-level"><div class="nav-header">
          <h3>Checkers</h3></div><ul class="side2"><li class="side"></li></ul>


<br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="blackcheckersSwitch" />
            <label class="custom-control-label" for="blackcheckersSwitch">Classic</label>
          </div>
          <br><br>

          <h2 id="checkers" style="color: #fff">Light</h2><br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="redcheckersSwitch" />
            <label class="custom-control-label" for="redcheckersSwitch">red</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="orangecheckersSwitch" />
            <label class="custom-control-label" for="orangecheckersSwitch">orange</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="yellowcheckersSwitch" />
            <label class="custom-control-label" for="yellowcheckersSwitch">yellow</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="greencheckersSwitch" />
            <label class="custom-control-label" for="greencheckersSwitch">green</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="bluecheckersSwitch" />
            <label class="custom-control-label" for="bluecheckersSwitch">blue</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="purplecheckersSwitch" />
            <label class="custom-control-label" for="purplecheckersSwitch">purple</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="pinkcheckersSwitch" />
            <label class="custom-control-label" for="pinkcheckersSwitch">pink</label>
          </div>
          <br><br>




          <h2 id="checkers" style="color: #fff">Dark</h2><br>

        
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="redcheckersdarkSwitch" />
            <label class="custom-control-label" for="redcheckersdarkSwitch">red</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="orangecheckersdarkSwitch" />
            <label class="custom-control-label" for="orangecheckersdarkSwitch">orange</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="yellowcheckersdarkSwitch" />
            <label class="custom-control-label" for="yellowcheckersdarkSwitch">yellow</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="greencheckersdarkSwitch" />
            <label class="custom-control-label" for="greencheckersdarkSwitch">green</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="bluecheckersdarkSwitch" />
            <label class="custom-control-label" for="bluecheckersdarkSwitch">blue</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="purplecheckersdarkSwitch" />
            <label class="custom-control-label" for="purplecheckersdarkSwitch">purple</label>
          </div>
          <br>
          <div class="switch">
            <input type="checkbox" class="form-check-input" id="pinkcheckersdarkSwitch" />
            <label class="custom-control-label" for="pinkcheckersdarkSwitch">pink</label>
          </div>
          <br><br>





          <br><br><div class="back back-icon"></div><br><br><br><br></div></li></ul>




          <ul class="side2"><li class="side">
            <!-- svelte-ignore a11y-invalid-attribute -->
            <a data-sveltekit-preload-data="hover" data-sveltekit-preload-code="eager" sveltekit:prefetch href="#" id="saucysidemenu22" class="back-icon">Hex</a>
            <div class="submenu nav-level"><div class="nav-header">
            <h3>Hex</h3></div><ul class="side2"><li class="side"></li></ul>
            
            
            <br>
            
            
            <h2 id="hex" style="color: #fff">Light</h2><br>
            <div class="switch">
              <input type="checkbox" class="form-check-input" id="blackhexSwitch" />
              <label class="custom-control-label" for="blackhexSwitch">black</label>
            </div>
            <br>
            <div class="switch">
              <input type="checkbox" class="form-check-input" id="redhexSwitch" />
              <label class="custom-control-label" for="redhexSwitch">red</label>
            </div>
            <br>
            <div class="switch">
              <input type="checkbox" class="form-check-input" id="orangehexSwitch" />
              <label class="custom-control-label" for="orangehexSwitch">orange</label>
            </div>
            <br>
            <div class="switch">
              <input type="checkbox" class="form-check-input" id="yellowhexSwitch" />
              <label class="custom-control-label" for="yellowhexSwitch">yellow</label>
            </div>
            <br>
            <div class="switch">
              <input type="checkbox" class="form-check-input" id="greenhexSwitch" />
              <label class="custom-control-label" for="greenhexSwitch">green</label>
            </div>
            <br>
            <div class="switch">
              <input type="checkbox" class="form-check-input" id="bluehexSwitch" />
              <label class="custom-control-label" for="bluehexSwitch">blue</label>
            </div>
            <br>
            <div class="switch">
              <input type="checkbox" class="form-check-input" id="purplehexSwitch" />
              <label class="custom-control-label" for="purplehexSwitch">purple</label>
            </div>
            <br>
            <div class="switch">
              <input type="checkbox" class="form-check-input" id="pinkhexSwitch" />
              <label class="custom-control-label" for="pinkhexSwitch">pink</label>
            </div>
            <br><br>
            
            
            
            
            <h2 id="hex" style="color: #fff">Dark</h2><br>
            
            
            <div class="switch">
              <input type="checkbox" class="form-check-input" id="whitehexdarkSwitch" />
              <label class="custom-control-label" for="whitehexdarkSwitch">white</label>
            </div>
            <br>
            <div class="switch">
              <input type="checkbox" class="form-check-input" id="redhexdarkSwitch" />
              <label class="custom-control-label" for="redhexdarkSwitch">red</label>
            </div>
            <br>
            <div class="switch">
              <input type="checkbox" class="form-check-input" id="orangehexdarkSwitch" />
              <label class="custom-control-label" for="orangehexdarkSwitch">orange</label>
            </div>
            <br>
            <div class="switch">
              <input type="checkbox" class="form-check-input" id="yellowhexdarkSwitch" />
              <label class="custom-control-label" for="yellowhexdarkSwitch">yellow</label>
            </div>
            <br>
            <div class="switch">
              <input type="checkbox" class="form-check-input" id="greenhexdarkSwitch" />
              <label class="custom-control-label" for="greenhexdarkSwitch">green</label>
            </div>
            <br>
            <div class="switch">
              <input type="checkbox" class="form-check-input" id="bluehexdarkSwitch" />
              <label class="custom-control-label" for="bluehexdarkSwitch">blue</label>
            </div>
            <br>
            <div class="switch">
              <input type="checkbox" class="form-check-input" id="purplehexdarkSwitch" />
              <label class="custom-control-label" for="purplehexdarkSwitch">purple</label>
            </div>
            <br>
            <div class="switch">
              <input type="checkbox" class="form-check-input" id="pinkhexdarkSwitch" />
              <label class="custom-control-label" for="pinkhexdarkSwitch">pink</label>
            </div>
            <br><br>
            
            
            <h2 id="hex" style="color: #fff">Background</h2><br>
            
            
            <div class="switch">
              <input type="checkbox" class="form-check-input" id="redhexbgSwitch" />
              <label class="custom-control-label" for="redhexbgSwitch">red</label>
            </div>
            <br>
            <div class="switch">
              <input type="checkbox" class="form-check-input" id="orangehexbgSwitch" />
              <label class="custom-control-label" for="orangehexbgSwitch">orange</label>
            </div>
            <br>
            <div class="switch">
              <input type="checkbox" class="form-check-input" id="yellowhexbgSwitch" />
              <label class="custom-control-label" for="yellowhexbgSwitch">yellow</label>
            </div>
            <br>
            <div class="switch">
              <input type="checkbox" class="form-check-input" id="greenhexbgSwitch" />
              <label class="custom-control-label" for="greenhexbgSwitch">green</label>
            </div>
            <br>
            <div class="switch">
              <input type="checkbox" class="form-check-input" id="bluehexbgSwitch" />
              <label class="custom-control-label" for="bluehexbgSwitch">blue</label>
            </div>
            <br>
            <div class="switch">
              <input type="checkbox" class="form-check-input" id="purplehexbgSwitch" />
              <label class="custom-control-label" for="purplehexbgSwitch">purple</label>
            </div>
            <br>
            <div class="switch">
              <input type="checkbox" class="form-check-input" id="pinkhexbgSwitch" />
              <label class="custom-control-label" for="pinkhexbgSwitch">pink</label>
            </div>
            <br><br>
            

            <br><br><div class="back back-icon"></div><br><br><br><br></div></li></ul>



            <ul class="side2"><li class="side">
              <!-- svelte-ignore a11y-invalid-attribute -->
              <!-- svelte-ignore a11y-invalid-attribute -->
              <a data-sveltekit-preload-data="hover" data-sveltekit-preload-code="eager" sveltekit:prefetch href="#" id="saucysidemenu17" class="back-icon">Polkadots</a>
              <div class="submenu nav-level"><div class="nav-header">
              <h3>Polkadots</h3></div><ul class="side2"><li class="side"></li></ul>
              
              
              <br>
              
              
              <h2 id="polkadots" style="color: #fff">Light</h2><br>
              <div class="switch">
                <input type="checkbox" class="form-check-input" id="blackpolkadotsSwitch" />
                <label class="custom-control-label" for="blackpolkadotsSwitch">black</label>
              </div>
              <br>
              <div class="switch">
                <input type="checkbox" class="form-check-input" id="redpolkadotsSwitch" />
                <label class="custom-control-label" for="redpolkadotsSwitch">red</label>
              </div>
              <br>
              <div class="switch">
                <input type="checkbox" class="form-check-input" id="orangepolkadotsSwitch" />
                <label class="custom-control-label" for="orangepolkadotsSwitch">orange</label>
              </div>
              <br>
              <div class="switch">
                <input type="checkbox" class="form-check-input" id="yellowpolkadotsSwitch" />
                <label class="custom-control-label" for="yellowpolkadotsSwitch">yellow</label>
              </div>
              <br>
              <div class="switch">
                <input type="checkbox" class="form-check-input" id="greenpolkadotsSwitch" />
                <label class="custom-control-label" for="greenpolkadotsSwitch">green</label>
              </div>
              <br>
              <div class="switch">
                <input type="checkbox" class="form-check-input" id="bluepolkadotsSwitch" />
                <label class="custom-control-label" for="bluepolkadotsSwitch">blue</label>
              </div>
              <br>
              <div class="switch">
                <input type="checkbox" class="form-check-input" id="purplepolkadotsSwitch" />
                <label class="custom-control-label" for="purplepolkadotsSwitch">purple</label>
              </div>
              <br>
              <div class="switch">
                <input type="checkbox" class="form-check-input" id="pinkpolkadotsSwitch" />
                <label class="custom-control-label" for="pinkpolkadotsSwitch">pink</label>
              </div>
              <br><br>
              
              


              
              
              <h2 id="polkadots" style="color: #fff">Dark</h2><br>
              
              
              <div class="switch">
                <input type="checkbox" class="form-check-input" id="whitepolkadotsdarkSwitch" />
                <label class="custom-control-label" for="whitepolkadotsdarkSwitch">white</label>
              </div>
              <br>
              <div class="switch">
                <input type="checkbox" class="form-check-input" id="redpolkadotsdarkSwitch" />
                <label class="custom-control-label" for="redpolkadotsdarkSwitch">red</label>
              </div>
              <br>
              <div class="switch">
                <input type="checkbox" class="form-check-input" id="orangepolkadotsdarkSwitch" />
                <label class="custom-control-label" for="orangepolkadotsdarkSwitch">orange</label>
              </div>
              <br>
              <div class="switch">
                <input type="checkbox" class="form-check-input" id="yellowpolkadotsdarkSwitch" />
                <label class="custom-control-label" for="yellowpolkadotsdarkSwitch">yellow</label>
              </div>
              <br>
              <div class="switch">
                <input type="checkbox" class="form-check-input" id="greenpolkadotsdarkSwitch" />
                <label class="custom-control-label" for="greenpolkadotsdarkSwitch">green</label>
              </div>
              <br>
              <div class="switch">
                <input type="checkbox" class="form-check-input" id="bluepolkadotsdarkSwitch" />
                <label class="custom-control-label" for="bluepolkadotsdarkSwitch">blue</label>
              </div>
              <br>
              <div class="switch">
                <input type="checkbox" class="form-check-input" id="purplepolkadotsdarkSwitch" />
                <label class="custom-control-label" for="purplepolkadotsdarkSwitch">purple</label>
              </div>
              <br>
              <div class="switch">
                <input type="checkbox" class="form-check-input" id="pinkpolkadotsdarkSwitch" />
                <label class="custom-control-label" for="pinkpolkadotsdarkSwitch">pink</label>
              </div>
              <br><br>
              
              
              <h2 id="polkadots" style="color: #fff">Background</h2><br>
              
              
              <div class="switch">
                <input type="checkbox" class="form-check-input" id="redpolkadotsbgSwitch" />
                <label class="custom-control-label" for="redpolkadotsbgSwitch">red</label>
              </div>
              <br>
              <div class="switch">
                <input type="checkbox" class="form-check-input" id="orangepolkadotsbgSwitch" />
                <label class="custom-control-label" for="orangepolkadotsbgSwitch">orange</label>
              </div>
              <br>
              <div class="switch">
                <input type="checkbox" class="form-check-input" id="yellowpolkadotsbgSwitch" />
                <label class="custom-control-label" for="yellowpolkadotsbgSwitch">yellow</label>
              </div>
              <br>
              <div class="switch">
                <input type="checkbox" class="form-check-input" id="greenpolkadotsbgSwitch" />
                <label class="custom-control-label" for="greenpolkadotsbgSwitch">green</label>
              </div>
              <br>
              <div class="switch">
                <input type="checkbox" class="form-check-input" id="bluepolkadotsbgSwitch" />
                <label class="custom-control-label" for="bluepolkadotsbgSwitch">blue</label>
              </div>
              <br>
              <div class="switch">
                <input type="checkbox" class="form-check-input" id="purplepolkadotsbgSwitch" />
                <label class="custom-control-label" for="purplepolkadotsbgSwitch">purple</label>
              </div>
              <br>
              <div class="switch">
                <input type="checkbox" class="form-check-input" id="pinkpolkadotsbgSwitch" />
                <label class="custom-control-label" for="pinkpolkadotsbgSwitch">pink</label>
              </div>
              <br><br>
              

              

              <br><br><div class="back back-icon"></div><br><br><br><br></div></li></ul>


              <ul class="side2"><li class="side">
                <!-- svelte-ignore a11y-invalid-attribute -->
                <a data-sveltekit-preload-data="hover" data-sveltekit-preload-code="eager" sveltekit:prefetch href="#" id="saucysidemenu18" class="back-icon">Sprinkles</a>
                <div class="submenu nav-level"><div class="nav-header">
                <h3>Sprinkles</h3></div><ul class="side2"><li class="side"></li></ul>
                
                
                <br>
                
                
                <h2 id="sprinkles" style="color: #fff">Light</h2><br>
                <div class="switch">
                  <input type="checkbox" class="form-check-input" id="blacksprinklesSwitch" />
                  <label class="custom-control-label" for="blacksprinklesSwitch">black</label>
                </div>
                <br>
                <div class="switch">
                  <input type="checkbox" class="form-check-input" id="redsprinklesSwitch" />
                  <label class="custom-control-label" for="redsprinklesSwitch">red</label>
                </div>
                <br>
                <div class="switch">
                  <input type="checkbox" class="form-check-input" id="orangesprinklesSwitch" />
                  <label class="custom-control-label" for="orangesprinklesSwitch">orange</label>
                </div>
                <br>
                <div class="switch">
                  <input type="checkbox" class="form-check-input" id="yellowsprinklesSwitch" />
                  <label class="custom-control-label" for="yellowsprinklesSwitch">yellow</label>
                </div>
                <br>
                <div class="switch">
                  <input type="checkbox" class="form-check-input" id="greensprinklesSwitch" />
                  <label class="custom-control-label" for="greensprinklesSwitch">green</label>
                </div>
                <br>
                <div class="switch">
                  <input type="checkbox" class="form-check-input" id="bluesprinklesSwitch" />
                  <label class="custom-control-label" for="bluesprinklesSwitch">blue</label>
                </div>
                <br>
                <div class="switch">
                  <input type="checkbox" class="form-check-input" id="purplesprinklesSwitch" />
                  <label class="custom-control-label" for="purplesprinklesSwitch">purple</label>
                </div>
                <br>
                <div class="switch">
                  <input type="checkbox" class="form-check-input" id="pinksprinklesSwitch" />
                  <label class="custom-control-label" for="pinksprinklesSwitch">pink</label>
                </div>
                <br><br>
                
                
                
                
                <h2 id="sprinkles" style="color: #fff">Dark</h2><br>
                
                
                <div class="switch">
                  <input type="checkbox" class="form-check-input" id="whitesprinklesdarkSwitch" />
                  <label class="custom-control-label" for="whitesprinklesdarkSwitch">white</label>
                </div>
                <br>
                <div class="switch">
                  <input type="checkbox" class="form-check-input" id="redsprinklesdarkSwitch" />
                  <label class="custom-control-label" for="redsprinklesdarkSwitch">red</label>
                </div>
                <br>
                <div class="switch">
                  <input type="checkbox" class="form-check-input" id="orangesprinklesdarkSwitch" />
                  <label class="custom-control-label" for="orangesprinklesdarkSwitch">orange</label>
                </div>
                <br>
                <div class="switch">
                  <input type="checkbox" class="form-check-input" id="yellowsprinklesdarkSwitch" />
                  <label class="custom-control-label" for="yellowsprinklesdarkSwitch">yellow</label>
                </div>
                <br>
                <div class="switch">
                  <input type="checkbox" class="form-check-input" id="greensprinklesdarkSwitch" />
                  <label class="custom-control-label" for="greensprinklesdarkSwitch">green</label>
                </div>
                <br>
                <div class="switch">
                  <input type="checkbox" class="form-check-input" id="bluesprinklesdarkSwitch" />
                  <label class="custom-control-label" for="bluesprinklesdarkSwitch">blue</label>
                </div>
                <br>
                <div class="switch">
                  <input type="checkbox" class="form-check-input" id="purplesprinklesdarkSwitch" />
                  <label class="custom-control-label" for="purplesprinklesdarkSwitch">purple</label>
                </div>
                <br>
                <div class="switch">
                  <input type="checkbox" class="form-check-input" id="pinksprinklesdarkSwitch" />
                  <label class="custom-control-label" for="pinksprinklesdarkSwitch">pink</label>
                </div>
                <br><br>
                
                
                <h2 id="sprinkles" style="color: #fff">Background</h2><br>
                
                
                <div class="switch">
                  <input type="checkbox" class="form-check-input" id="redsprinklesbgSwitch" />
                  <label class="custom-control-label" for="redsprinklesbgSwitch">red</label>
                </div>
                <br>
                <div class="switch">
                  <input type="checkbox" class="form-check-input" id="orangesprinklesbgSwitch" />
                  <label class="custom-control-label" for="orangesprinklesbgSwitch">orange</label>
                </div>
                <br>
                <div class="switch">
                  <input type="checkbox" class="form-check-input" id="yellowsprinklesbgSwitch" />
                  <label class="custom-control-label" for="yellowsprinklesbgSwitch">yellow</label>
                </div>
                <br>
                <div class="switch">
                  <input type="checkbox" class="form-check-input" id="greensprinklesbgSwitch" />
                  <label class="custom-control-label" for="greensprinklesbgSwitch">green</label>
                </div>
                <br>
                <div class="switch">
                  <input type="checkbox" class="form-check-input" id="bluesprinklesbgSwitch" />
                  <label class="custom-control-label" for="bluesprinklesbgSwitch">blue</label>
                </div>
                <br>
                <div class="switch">
                  <input type="checkbox" class="form-check-input" id="purplesprinklesbgSwitch" />
                  <label class="custom-control-label" for="purplesprinklesbgSwitch">purple</label>
                </div>
                <br>
                <div class="switch">
                  <input type="checkbox" class="form-check-input" id="pinksprinklesbgSwitch" />
                  <label class="custom-control-label" for="pinksprinklesbgSwitch">pink</label>
                </div>
                <br><br>
                
                <br><br><div class="back back-icon"></div><br><br><br><br></div></li></ul>







                

                <ul class="side2"><li class="side">
                  <!-- svelte-ignore a11y-invalid-attribute -->
                  <a data-sveltekit-preload-data="hover" data-sveltekit-preload-code="eager" sveltekit:prefetch href="#" id="saucysidemenu19" class="back-icon">Triangular</a>
                  <div class="submenu nav-level"><div class="nav-header">
                  <h3>Triangular</h3></div><ul class="side2"><li class="side"></li></ul>
                  
                  
                  <br>
                  
                  
                  <h2 id="triangular" style="color: #fff">Light</h2><br>
                  <div class="switch">
                    <input type="checkbox" class="form-check-input" id="blacktriangularSwitch" />
                    <label class="custom-control-label" for="blacktriangularSwitch">black</label>
                  </div>
                  <br>
                  <div class="switch">
                    <input type="checkbox" class="form-check-input" id="redtriangularSwitch" />
                    <label class="custom-control-label" for="redtriangularSwitch">red</label>
                  </div>
                  <br>
                  <div class="switch">
                    <input type="checkbox" class="form-check-input" id="orangetriangularSwitch" />
                    <label class="custom-control-label" for="orangetriangularSwitch">orange</label>
                  </div>
                  <br>
                  <div class="switch">
                    <input type="checkbox" class="form-check-input" id="yellowtriangularSwitch" />
                    <label class="custom-control-label" for="yellowtriangularSwitch">yellow</label>
                  </div>
                  <br>
                  <div class="switch">
                    <input type="checkbox" class="form-check-input" id="greentriangularSwitch" />
                    <label class="custom-control-label" for="greentriangularSwitch">green</label>
                  </div>
                  <br>
                  <div class="switch">
                    <input type="checkbox" class="form-check-input" id="bluetriangularSwitch" />
                    <label class="custom-control-label" for="bluetriangularSwitch">blue</label>
                  </div>
                  <br>
                  <div class="switch">
                    <input type="checkbox" class="form-check-input" id="purpletriangularSwitch" />
                    <label class="custom-control-label" for="purpletriangularSwitch">purple</label>
                  </div>
                  <br>
                  <div class="switch">
                    <input type="checkbox" class="form-check-input" id="pinktriangularSwitch" />
                    <label class="custom-control-label" for="pinktriangularSwitch">pink</label>
                  </div>
                  <br><br>
                  
                  
                  
                  
                  <h2 id="triangular" style="color: #fff">Dark</h2><br>
                  
                  
                  <div class="switch">
                    <input type="checkbox" class="form-check-input" id="whitetriangulardarkSwitch" />
                    <label class="custom-control-label" for="whitetriangulardarkSwitch">white</label>
                  </div>
                  <br>
                  <div class="switch">
                    <input type="checkbox" class="form-check-input" id="redtriangulardarkSwitch" />
                    <label class="custom-control-label" for="redtriangulardarkSwitch">red</label>
                  </div>
                  <br>
                  <div class="switch">
                    <input type="checkbox" class="form-check-input" id="orangetriangulardarkSwitch" />
                    <label class="custom-control-label" for="orangetriangulardarkSwitch">orange</label>
                  </div>
                  <br>
                  <div class="switch">
                    <input type="checkbox" class="form-check-input" id="yellowtriangulardarkSwitch" />
                    <label class="custom-control-label" for="yellowtriangulardarkSwitch">yellow</label>
                  </div>
                  <br>
                  <div class="switch">
                    <input type="checkbox" class="form-check-input" id="greentriangulardarkSwitch" />
                    <label class="custom-control-label" for="greentriangulardarkSwitch">green</label>
                  </div>
                  <br>
                  <div class="switch">
                    <input type="checkbox" class="form-check-input" id="bluetriangulardarkSwitch" />
                    <label class="custom-control-label" for="bluetriangulardarkSwitch">blue</label>
                  </div>
                  <br>
                  <div class="switch">
                    <input type="checkbox" class="form-check-input" id="purpletriangulardarkSwitch" />
                    <label class="custom-control-label" for="purpletriangulardarkSwitch">purple</label>
                  </div>
                  <br>
                  <div class="switch">
                    <input type="checkbox" class="form-check-input" id="pinktriangulardarkSwitch" />
                    <label class="custom-control-label" for="pinktriangulardarkSwitch">pink</label>
                  </div>
                  <br><br>
                  
                  
                  <h2 id="triangular" style="color: #fff">Background</h2><br>
                  
                  
                  <div class="switch">
                    <input type="checkbox" class="form-check-input" id="redtriangularbgSwitch" />
                    <label class="custom-control-label" for="redtriangularbgSwitch">red</label>
                  </div>
                  <br>
                  <div class="switch">
                    <input type="checkbox" class="form-check-input" id="orangetriangularbgSwitch" />
                    <label class="custom-control-label" for="orangetriangularbgSwitch">orange</label>
                  </div>
                  <br>
                  <div class="switch">
                    <input type="checkbox" class="form-check-input" id="yellowtriangularbgSwitch" />
                    <label class="custom-control-label" for="yellowtriangularbgSwitch">yellow</label>
                  </div>
                  <br>
                  <div class="switch">
                    <input type="checkbox" class="form-check-input" id="greentriangularbgSwitch" />
                    <label class="custom-control-label" for="greentriangularbgSwitch">green</label>
                  </div>
                  <br>
                  <div class="switch">
                    <input type="checkbox" class="form-check-input" id="bluetriangularbgSwitch" />
                    <label class="custom-control-label" for="bluetriangularbgSwitch">blue</label>
                  </div>
                  <br>
                  <div class="switch">
                    <input type="checkbox" class="form-check-input" id="purpletriangularbgSwitch" />
                    <label class="custom-control-label" for="purpletriangularbgSwitch">purple</label>
                  </div>
                  <br>
                  <div class="switch">
                    <input type="checkbox" class="form-check-input" id="pinktriangularbgSwitch" />
                    <label class="custom-control-label" for="pinktriangularbgSwitch">pink</label>
                  </div>
                  <br><br>
                  
                  <br><br><div class="back back-icon"></div></div></li></ul>        





                  
                  <ul class="side2"><li class="side">
                    <!-- svelte-ignore a11y-invalid-attribute -->
                    <a data-sveltekit-preload-data="hover" data-sveltekit-preload-code="eager" sveltekit:prefetch href="#" id="saucysidemenu20" class="back-icon">Vibe</a>
                    <div class="submenu nav-level"><div class="nav-header">
                    <h3>Vibe</h3></div><ul class="side2"><li class="side"></li></ul>
                    
                    
                    <br>
                    
                    
                    <h2 id="vibe" style="color: #fff">Light</h2><br>
                    <div class="switch">
                      <input type="checkbox" class="form-check-input" id="blackvibeSwitch" />
                      <label class="custom-control-label" for="blackvibeSwitch">black</label>
                    </div>
                    <br>
                    <div class="switch">
                      <input type="checkbox" class="form-check-input" id="redvibeSwitch" />
                      <label class="custom-control-label" for="redvibeSwitch">red</label>
                    </div>
                    <br>
                    <div class="switch">
                      <input type="checkbox" class="form-check-input" id="orangevibeSwitch" />
                      <label class="custom-control-label" for="orangevibeSwitch">orange</label>
                    </div>
                    <br>
                    <div class="switch">
                      <input type="checkbox" class="form-check-input" id="yellowvibeSwitch" />
                      <label class="custom-control-label" for="yellowvibeSwitch">yellow</label>
                    </div>
                    <br>
                    <div class="switch">
                      <input type="checkbox" class="form-check-input" id="greenvibeSwitch" />
                      <label class="custom-control-label" for="greenvibeSwitch">green</label>
                    </div>
                    <br>
                    <div class="switch">
                      <input type="checkbox" class="form-check-input" id="bluevibeSwitch" />
                      <label class="custom-control-label" for="bluevibeSwitch">blue</label>
                    </div>
                    <br>
                    <div class="switch">
                      <input type="checkbox" class="form-check-input" id="purplevibeSwitch" />
                      <label class="custom-control-label" for="purplevibeSwitch">purple</label>
                    </div>
                    <br>
                    <div class="switch">
                      <input type="checkbox" class="form-check-input" id="pinkvibeSwitch" />
                      <label class="custom-control-label" for="pinkvibeSwitch">pink</label>
                    </div>
                    <br><br>
                    
                    
                    
                    
                    <h2 id="vibe" style="color: #fff">Dark</h2><br>
                    
                    
                    <div class="switch">
                      <input type="checkbox" class="form-check-input" id="whitevibedarkSwitch" />
                      <label class="custom-control-label" for="whitevibedarkSwitch">white</label>
                    </div>
                    <br>
                    <div class="switch">
                      <input type="checkbox" class="form-check-input" id="redvibedarkSwitch" />
                      <label class="custom-control-label" for="redvibedarkSwitch">red</label>
                    </div>
                    <br>
                    <div class="switch">
                      <input type="checkbox" class="form-check-input" id="orangevibedarkSwitch" />
                      <label class="custom-control-label" for="orangevibedarkSwitch">orange</label>
                    </div>
                    <br>
                    <div class="switch">
                      <input type="checkbox" class="form-check-input" id="yellowvibedarkSwitch" />
                      <label class="custom-control-label" for="yellowvibedarkSwitch">yellow</label>
                    </div>
                    <br>
                    <div class="switch">
                      <input type="checkbox" class="form-check-input" id="greenvibedarkSwitch" />
                      <label class="custom-control-label" for="greenvibedarkSwitch">green</label>
                    </div>
                    <br>
                    <div class="switch">
                      <input type="checkbox" class="form-check-input" id="bluevibedarkSwitch" />
                      <label class="custom-control-label" for="bluevibedarkSwitch">blue</label>
                    </div>
                    <br>
                    <div class="switch">
                      <input type="checkbox" class="form-check-input" id="purplevibedarkSwitch" />
                      <label class="custom-control-label" for="purplevibedarkSwitch">purple</label>
                    </div>
                    <br>
                    <div class="switch">
                      <input type="checkbox" class="form-check-input" id="pinkvibedarkSwitch" />
                      <label class="custom-control-label" for="pinkvibedarkSwitch">pink</label>
                    </div>
                    <br><br>
                    
                    
                    <h2 id="vibe" style="color: #fff">Background</h2><br>
                    
                    
                    <div class="switch">
                      <input type="checkbox" class="form-check-input" id="redvibebgSwitch" />
                      <label class="custom-control-label" for="redvibebgSwitch">red</label>
                    </div>
                    <br>
                    <div class="switch">
                      <input type="checkbox" class="form-check-input" id="orangevibebgSwitch" />
                      <label class="custom-control-label" for="orangevibebgSwitch">orange</label>
                    </div>
                    <br>
                    <div class="switch">
                      <input type="checkbox" class="form-check-input" id="yellowvibebgSwitch" />
                      <label class="custom-control-label" for="yellowvibebgSwitch">yellow</label>
                    </div>
                    <br>
                    <div class="switch">
                      <input type="checkbox" class="form-check-input" id="greenvibebgSwitch" />
                      <label class="custom-control-label" for="greenvibebgSwitch">green</label>
                    </div>
                    <br>
                    <div class="switch">
                      <input type="checkbox" class="form-check-input" id="bluevibebgSwitch" />
                      <label class="custom-control-label" for="bluevibebgSwitch">blue</label>
                    </div>
                    <br>
                    <div class="switch">
                      <input type="checkbox" class="form-check-input" id="purplevibebgSwitch" />
                      <label class="custom-control-label" for="purplevibebgSwitch">purple</label>
                    </div>
                    <br>
                    <div class="switch">
                      <input type="checkbox" class="form-check-input" id="pinkvibebgSwitch" />
                      <label class="custom-control-label" for="pinkvibebgSwitch">pink</label>
                    </div>
                    <br><br>
                    
                    <br><br><div class="back back-icon"></div><br><br><br><br></div></li></ul>









                    <ul class="side2"><li class="side">
                      <!-- svelte-ignore a11y-invalid-attribute -->
                      <a data-sveltekit-preload-data="hover" data-sveltekit-preload-code="eager" sveltekit:prefetch href="#" id="saucysidemenu23" class="back-icon">Waves</a>
                      <div class="submenu nav-level"><div class="nav-header">
                      <h3>Waves</h3></div><ul class="side2"><li class="side"></li></ul>
                      
                      
                      <br>
                      <div class="switch">
                        <input type="checkbox" class="form-check-input" id="blackwavesSwitch" />
                        <label class="custom-control-label" for="blackwavesSwitch">Classic</label>
                      </div>
                      <br><br>
                      
                      <h2 id="waves" style="color: #fff">Light</h2><br>
                      <div class="switch">
                        <input type="checkbox" class="form-check-input" id="redwavesSwitch" />
                        <label class="custom-control-label" for="redwavesSwitch">red</label>
                      </div>
                      <br>
                      <div class="switch">
                        <input type="checkbox" class="form-check-input" id="orangewavesSwitch" />
                        <label class="custom-control-label" for="orangewavesSwitch">orange</label>
                      </div>
                      <br>
                      <div class="switch">
                        <input type="checkbox" class="form-check-input" id="yellowwavesSwitch" />
                        <label class="custom-control-label" for="yellowwavesSwitch">yellow</label>
                      </div>
                      <br>
                      <div class="switch">
                        <input type="checkbox" class="form-check-input" id="greenwavesSwitch" />
                        <label class="custom-control-label" for="greenwavesSwitch">green</label>
                      </div>
                      <br>
                      <div class="switch">
                        <input type="checkbox" class="form-check-input" id="bluewavesSwitch" />
                        <label class="custom-control-label" for="bluewavesSwitch">blue</label>
                      </div>
                      <br>
                      <div class="switch">
                        <input type="checkbox" class="form-check-input" id="purplewavesSwitch" />
                        <label class="custom-control-label" for="purplewavesSwitch">purple</label>
                      </div>
                      <br>
                      <div class="switch">
                        <input type="checkbox" class="form-check-input" id="pinkwavesSwitch" />
                        <label class="custom-control-label" for="pinkwavesSwitch">pink</label>
                      </div>
                      <br><br>
                      
                      
                      
                      
                      <h2 id="waves" style="color: #fff">Dark</h2><br>
                      
                      
                      <div class="switch">
                        <input type="checkbox" class="form-check-input" id="redwavesdarkSwitch" />
                        <label class="custom-control-label" for="redwavesdarkSwitch">red</label>
                      </div>
                      <br>
                      <div class="switch">
                        <input type="checkbox" class="form-check-input" id="orangewavesdarkSwitch" />
                        <label class="custom-control-label" for="orangewavesdarkSwitch">orange</label>
                      </div>
                      <br>
                      <div class="switch">
                        <input type="checkbox" class="form-check-input" id="yellowwavesdarkSwitch" />
                        <label class="custom-control-label" for="yellowwavesdarkSwitch">yellow</label>
                      </div>
                      <br>
                      <div class="switch">
                        <input type="checkbox" class="form-check-input" id="greenwavesdarkSwitch" />
                        <label class="custom-control-label" for="greenwavesdarkSwitch">green</label>
                      </div>
                      <br>
                      <div class="switch">
                        <input type="checkbox" class="form-check-input" id="bluewavesdarkSwitch" />
                        <label class="custom-control-label" for="bluewavesdarkSwitch">blue</label>
                      </div>
                      <br>
                      <div class="switch">
                        <input type="checkbox" class="form-check-input" id="purplewavesdarkSwitch" />
                        <label class="custom-control-label" for="purplewavesdarkSwitch">purple</label>
                      </div>
                      <br>
                      <div class="switch">
                        <input type="checkbox" class="form-check-input" id="pinkwavesdarkSwitch" />
                        <label class="custom-control-label" for="pinkwavesdarkSwitch">pink</label>
                      </div>
                      <br><br>
                      
                      
                      
                     <div class="back back-icon"></div></div></li></ul>
                      <div class="back back-icon" on:click={global}></div><br><br><br><br></div>
                      

  <ul class="side2">
  <li class="side">    
    <!-- svelte-ignore a11y-invalid-attribute -->
    <a data-sveltekit-preload-data="hover" data-sveltekit-preload-code="eager" sveltekit:prefetch href="#" id="saucysidemenu" class="back-icon">Colors</a>
    <div class="submenu nav-level" tabindex="-1">
    <div class="nav-header">
      <h3>Colors</h3><br>
    </div>




  
<ul class="side2"><li class="side">
  <!-- svelte-ignore a11y-invalid-attribute -->
  <a data-sveltekit-preload-data="hover" data-sveltekit-preload-code="eager" sveltekit:prefetch href="#" id="saucysidemenu5" class="back-icon">Base</a>
  <div class="submenu nav-level"><div class="nav-header">
  <h3>Base</h3></div><ul class="side2"><li class="side"></li></ul>
  
   
    <div class="switch">
      <input type="checkbox" class="form-check-input" id="whiteSwitch" />
      <label class="custom-control-label" for="whiteSwitch">White</label>
    </div>
    <br>
    <div class="switch">
      <input type="checkbox" class="form-check-input" id="blackSwitch" />
      <label class="custom-control-label" for="blackSwitch">Black</label>
    </div>
    <br>
    <div class="switch">
      <input type="checkbox" class="form-check-input" id="redSwitch" />
      <label class="custom-control-label" for="redSwitch">Red</label>
    </div>
    <br>
    <div class="switch">
      <input type="checkbox" class="form-check-input" id="orangeSwitch" />
      <label class="custom-control-label" for="orangeSwitch">Orange</label>
    </div>
    <br>
    <div class="switch">
      <input type="checkbox" class="form-check-input" id="yellowSwitch" />
      <label class="custom-control-label" for="yellowSwitch">Yellow</label>
    </div>
    <br>
    <div class="switch">
      <input type="checkbox" class="form-check-input" id="greenSwitch" />
      <label class="custom-control-label" for="greenSwitch">Green</label>
    </div>
    <br>
    <div class="switch">
      <input type="checkbox" class="form-check-input" id="blueSwitch" />
      <label class="custom-control-label" for="blueSwitch">Blue</label>
    </div>
    <br>
    <div class="switch">
      <input type="checkbox" class="form-check-input" id="purpleSwitch" />
      <label class="custom-control-label" for="purpleSwitch">Purple</label>
    </div>
    <br>
    <div class="switch">
      <input type="checkbox" class="form-check-input" id="pinkSwitch" />
      <label class="custom-control-label" for="pinkSwitch">Pink</label>
    </div>
    <br>
    <div class="switch">
      <input type="checkbox" class="form-check-input" id="rainbowSwitch" />
      <label class="custom-control-label" for="rainbowSwitch">Rainbow</label>
    </div>
    <br>
    <div class="switch">
      <input type="checkbox" class="form-check-input" id="clearSwitch" />
      <label class="custom-control-label" for="clearSwitch">Clear</label>
    </div>
  <br><br><div class="back back-icon"></div><br><br><br><br></div></li></ul>
  
  






      


        <!-- svelte-ignore a11y-invalid-attribute -->
      <ul class="side2"><li class="side">
        <a data-sveltekit-preload-data="hover" data-sveltekit-preload-code="eager" sveltekit:prefetch href="#" id="saucysidemenu9" class="back-icon">Icon</a>
        <div class="submenu nav-level"><div class="nav-header">
        <h3>Icon</h3></div><ul class="side2"><li class="side"></li></ul>
        
    
        <div class="switch">
          <input type="checkbox" class="form-check-input" id="blackiconsSwitch" />
          <label class="custom-control-label" for="blackiconsSwitch">Black</label>
        </div>
        <br>
        <div class="switch">
          <input type="checkbox" class="form-check-input" id="whiteiconsSwitch" />
          <label class="custom-control-label" for="whiteiconsSwitch">White</label>
        </div>
        <br>
        <div class="switch">
          <input type="checkbox" class="form-check-input" id="rediconsSwitch" />
          <label class="custom-control-label" for="rediconsSwitch">Red</label>
        </div>
        <br>
        <div class="switch">
          <input type="checkbox" class="form-check-input" id="orangeiconsSwitch" />
          <label class="custom-control-label" for="orangeiconsSwitch">Orange</label>
        </div>
        <br>
        <div class="switch">
          <input type="checkbox" class="form-check-input" id="yellowiconsSwitch" />
          <label class="custom-control-label" for="yellowiconsSwitch">Yellow</label>
        </div>
        <br>
        <div class="switch">
          <input type="checkbox" class="form-check-input" id="greeniconsSwitch" />
          <label class="custom-control-label" for="greeniconsSwitch">Green</label>
        </div>
        <br>
        <div class="switch">
          <input type="checkbox" class="form-check-input" id="blueiconsSwitch" />
          <label class="custom-control-label" for="blueiconsSwitch">Blue</label>
        </div>
        <br>
        <div class="switch">
          <input type="checkbox" class="form-check-input" id="purpleiconsSwitch" />
          <label class="custom-control-label" for="purpleiconsSwitch">Purple</label>
        </div>
        <br>
        <div class="switch">
          <input type="checkbox" class="form-check-input" id="pinkiconsSwitch" />
          <label class="custom-control-label" for="pinkiconsSwitch">Pink</label>
        </div>

          
        <br><br><div class="back back-icon"></div><br><br><br><br></div></li></ul>        
        



        
    <ul class="side2"><li class="side">
      <!-- svelte-ignore a11y-invalid-attribute -->
      <a data-sveltekit-preload-data="hover" data-sveltekit-preload-code="eager" sveltekit:prefetch href="#" id="saucysidemenu12" class="back-icon">Logo</a>
      <div class="submenu nav-level"><div class="nav-header">
      <h3>Logo</h3></div><ul class="side2"><li class="side"></li></ul>
    
      <h2 id="logos" style="color: #fff">Default</h2><br>
      
      <div class="switch">
          <input type="checkbox" class="form-check-input" id="blacklogoSwitch" />
          <label class="custom-control-label" for="blacklogoSwitch">Black</label>
        </div>
        <br>
        <div class="switch">
          <input type="checkbox" class="form-check-input" id="whitelogoSwitch" />
          <label class="custom-control-label" for="whitelogoSwitch">White</label>
        </div>
        <br>
        <div class="switch">
          <input type="checkbox" class="form-check-input" id="redlogoSwitch" />
          <label class="custom-control-label" for="redlogoSwitch">Red</label>
        </div>
        <br>
        <div class="switch">
          <input type="checkbox" class="form-check-input" id="orangelogoSwitch" />
          <label class="custom-control-label" for="orangelogoSwitch">Orange</label>
        </div>
        <br>
        <div class="switch">
          <input type="checkbox" class="form-check-input" id="yellowlogoSwitch" />
          <label class="custom-control-label" for="yellowlogoSwitch">Yellow</label>
        </div>
        <br>
        <div class="switch">
          <input type="checkbox" class="form-check-input" id="greenlogoSwitch" />
          <label class="custom-control-label" for="greenlogoSwitch">Green</label>
        </div>
        <br>
        <div class="switch">
          <input type="checkbox" class="form-check-input" id="bluelogoSwitch" />
          <label class="custom-control-label" for="bluelogoSwitch">Blue</label>
        </div>
        <br>
        <div class="switch">
          <input type="checkbox" class="form-check-input" id="purplelogoSwitch" />
          <label class="custom-control-label" for="purplelogoSwitch">Purple</label>
        </div>
        <br>
        <div class="switch">
          <input type="checkbox" class="form-check-input" id="pinklogoSwitch" />
          <label class="custom-control-label" for="pinklogoSwitch">Pink</label>
        </div>
        <br><br>

        

        <h2 id="logos" style="color: #fff">Infinity</h2><br>
  <div class="switch">
          <input type="checkbox" class="form-check-input" id="defaultlogoinfinitySwitch" />
          <label class="custom-control-label" for="defaultlogoinfinitySwitch">Default</label>
        </div>
        <br>
  <div class="switch">
    <input type="checkbox" class="form-check-input" id="blacklogoinfinitySwitch" />
    <label class="custom-control-label" for="blacklogoinfinitySwitch">Black</label>
  </div>
  <br>
  <div class="switch">
    <input type="checkbox" class="form-check-input" id="whitelogoinfinitySwitch" />
    <label class="custom-control-label" for="whitelogoinfinitySwitch">White</label>
  </div>
  <br>
  <div class="switch">
    <input type="checkbox" class="form-check-input" id="redlogoinfinitySwitch" />
    <label class="custom-control-label" for="redlogoinfinitySwitch">Red</label>
  </div>
  <br>
  <div class="switch">
    <input type="checkbox" class="form-check-input" id="orangelogoinfinitySwitch" />
    <label class="custom-control-label" for="orangelogoinfinitySwitch">Orange</label>
  </div>
  <br>
  <div class="switch">
    <input type="checkbox" class="form-check-input" id="yellowlogoinfinitySwitch" />
    <label class="custom-control-label" for="yellowlogoinfinitySwitch">Yellow</label>
  </div>
  <br>
  <div class="switch">
    <input type="checkbox" class="form-check-input" id="greenlogoinfinitySwitch" />
    <label class="custom-control-label" for="greenlogoinfinitySwitch">Green</label>
  </div>
  <br>
  <div class="switch">
    <input type="checkbox" class="form-check-input" id="bluelogoinfinitySwitch" />
    <label class="custom-control-label" for="bluelogoinfinitySwitch">Blue</label>
  </div>
  <br>
  <div class="switch">
    <input type="checkbox" class="form-check-input" id="purplelogoinfinitySwitch" />
    <label class="custom-control-label" for="purplelogoinfinitySwitch">Purple</label>
  </div>
  <br>
  <div class="switch">
    <input type="checkbox" class="form-check-input" id="pinklogoinfinitySwitch" />
    <label class="custom-control-label" for="pinklogoinfinitySwitch">Pink</label>
  </div>
  <br><br>



  <h2 id="logos" style="color: #fff">Saucesome</h2><br>
  <div class="switch">
          <input type="checkbox" class="form-check-input" id="defaultlogosaucesomeSwitch" />
          <label class="custom-control-label" for="defaultlogosaucesomeSwitch">Default</label>
        </div>
        <br>
<div class="switch">
    <input type="checkbox" class="form-check-input" id="blacklogosaucesomeSwitch" />
    <label class="custom-control-label" for="blacklogosaucesomeSwitch">Black</label>
  </div>
  <br>
  <div class="switch">
    <input type="checkbox" class="form-check-input" id="whitelogosaucesomeSwitch" />
    <label class="custom-control-label" for="whitelogosaucesomeSwitch">White</label>
  </div>
  <br>
  <div class="switch">
    <input type="checkbox" class="form-check-input" id="redlogosaucesomeSwitch" />
    <label class="custom-control-label" for="redlogosaucesomeSwitch">Red</label>
  </div>
  <br>
  <div class="switch">
    <input type="checkbox" class="form-check-input" id="orangelogosaucesomeSwitch" />
    <label class="custom-control-label" for="orangelogosaucesomeSwitch">Orange</label>
  </div>
  <br>
  <div class="switch">
    <input type="checkbox" class="form-check-input" id="yellowlogosaucesomeSwitch" />
    <label class="custom-control-label" for="yellowlogosaucesomeSwitch">Yellow</label>
  </div>
  <br>
  <div class="switch">
    <input type="checkbox" class="form-check-input" id="greenlogosaucesomeSwitch" />
    <label class="custom-control-label" for="greenlogosaucesomeSwitch">Green</label>
  </div>
  <br>
  <div class="switch">
    <input type="checkbox" class="form-check-input" id="bluelogosaucesomeSwitch" />
    <label class="custom-control-label" for="bluelogosaucesomeSwitch">Blue</label>
  </div>
  <br>
  <div class="switch">
    <input type="checkbox" class="form-check-input" id="purplelogosaucesomeSwitch" />
    <label class="custom-control-label" for="purplelogosaucesomeSwitch">Purple</label>
  </div>
  <br>
  <div class="switch">
    <input type="checkbox" class="form-check-input" id="pinklogosaucesomeSwitch" />
    <label class="custom-control-label" for="pinklogosaucesomeSwitch">Pink</label>
  </div>
  <br><br>



  <h2 id="logos" style="color: #fff">Saucy</h2><br>
  <div class="switch">
          <input type="checkbox" class="form-check-input" id="defaultlogosaucySwitch" />
          <label class="custom-control-label" for="defaultlogosaucySwitch">Default</label>
        </div>
        <br>
<div class="switch">
    <input type="checkbox" class="form-check-input" id="blacklogosaucySwitch" />
    <label class="custom-control-label" for="blacklogosaucySwitch">Black</label>
  </div>
  <br>
  <div class="switch">
    <input type="checkbox" class="form-check-input" id="whitelogosaucySwitch" />
    <label class="custom-control-label" for="whitelogosaucySwitch">White</label>
  </div>
  <br>
  <div class="switch">
    <input type="checkbox" class="form-check-input" id="redlogosaucySwitch" />
    <label class="custom-control-label" for="redlogosaucySwitch">Red</label>
  </div>
  <br>
  <div class="switch">
    <input type="checkbox" class="form-check-input" id="orangelogosaucySwitch" />
    <label class="custom-control-label" for="orangelogosaucySwitch">Orange</label>
  </div>
  <br>
  <div class="switch">
    <input type="checkbox" class="form-check-input" id="yellowlogosaucySwitch" />
    <label class="custom-control-label" for="yellowlogosaucySwitch">Yellow</label>
  </div>
  <br>
  <div class="switch">
    <input type="checkbox" class="form-check-input" id="greenlogosaucySwitch" />
    <label class="custom-control-label" for="greenlogosaucySwitch">Green</label>
  </div>
  <br>
  <div class="switch">
    <input type="checkbox" class="form-check-input" id="bluelogosaucySwitch" />
    <label class="custom-control-label" for="bluelogosaucySwitch">Blue</label>
  </div>
  <br>
  <div class="switch">
    <input type="checkbox" class="form-check-input" id="purplelogosaucySwitch" />
    <label class="custom-control-label" for="purplelogosaucySwitch">Purple</label>
  </div>
  <br>
  <div class="switch">
    <input type="checkbox" class="form-check-input" id="pinklogosaucySwitch" />
    <label class="custom-control-label" for="pinklogosaucySwitch">Pink</label>
  </div>
  <br><br>



  <h2 id="logos" style="color: #fff">SaucyFam</h2><br>
  <div class="switch">
          <input type="checkbox" class="form-check-input" id="defaultlogosaucyfamSwitch" />
          <label class="custom-control-label" for="defaultlogosaucyfamSwitch">Default</label>
        </div>
        <br>
<div class="switch">
    <input type="checkbox" class="form-check-input" id="blacklogosaucyfamSwitch" />
    <label class="custom-control-label" for="blacklogosaucyfamSwitch">Black</label>
  </div>
  <br>
  <div class="switch">
    <input type="checkbox" class="form-check-input" id="whitelogosaucyfamSwitch" />
    <label class="custom-control-label" for="whitelogosaucyfamSwitch">White</label>
  </div>
  <br>
  <div class="switch">
    <input type="checkbox" class="form-check-input" id="redlogosaucyfamSwitch" />
    <label class="custom-control-label" for="redlogosaucyfamSwitch">Red</label>
  </div>
  <br>
  <div class="switch">
    <input type="checkbox" class="form-check-input" id="orangelogosaucyfamSwitch" />
    <label class="custom-control-label" for="orangelogosaucyfamSwitch">Orange</label>
  </div>
  <br>
  <div class="switch">
    <input type="checkbox" class="form-check-input" id="yellowlogosaucyfamSwitch" />
    <label class="custom-control-label" for="yellowlogosaucyfamSwitch">Yellow</label>
  </div>
  <br>
  <div class="switch">
    <input type="checkbox" class="form-check-input" id="greenlogosaucyfamSwitch" />
    <label class="custom-control-label" for="greenlogosaucyfamSwitch">Green</label>
  </div>
  <br>
  <div class="switch">
    <input type="checkbox" class="form-check-input" id="bluelogosaucyfamSwitch" />
    <label class="custom-control-label" for="bluelogosaucyfamSwitch">Blue</label>
  </div>
  <br>
  <div class="switch">
    <input type="checkbox" class="form-check-input" id="purplelogosaucyfamSwitch" />
    <label class="custom-control-label" for="purplelogosaucyfamSwitch">Purple</label>
  </div>
  <br>
  <div class="switch">
    <input type="checkbox" class="form-check-input" id="pinklogosaucyfamSwitch" />
    <label class="custom-control-label" for="pinklogosaucyfamSwitch">Pink</label>
  </div>
  <br><br>



  <h2 id="logos" style="color: #fff">Saucy Infinity</h2><br>
  <div class="switch">
          <input type="checkbox" class="form-check-input" id="defaultlogosaucyinfinitySwitch" />
          <label class="custom-control-label" for="defaultlogosaucyinfinitySwitch">Default</label>
        </div>
        <br>
<div class="switch">
    <input type="checkbox" class="form-check-input" id="blacklogosaucyinfinitySwitch" />
    <label class="custom-control-label" for="blacklogosaucyinfinitySwitch">Black</label>
  </div>
  <br>
  <div class="switch">
    <input type="checkbox" class="form-check-input" id="whitelogosaucyinfinitySwitch" />
    <label class="custom-control-label" for="whitelogosaucyinfinitySwitch">White</label>
  </div>
  <br>
  <div class="switch">
    <input type="checkbox" class="form-check-input" id="redlogosaucyinfinitySwitch" />
    <label class="custom-control-label" for="redlogosaucyinfinitySwitch">Red</label>
  </div>
  <br>
  <div class="switch">
    <input type="checkbox" class="form-check-input" id="orangelogosaucyinfinitySwitch" />
    <label class="custom-control-label" for="orangelogosaucyinfinitySwitch">Orange</label>
  </div>
  <br>
  <div class="switch">
    <input type="checkbox" class="form-check-input" id="yellowlogosaucyinfinitySwitch" />
    <label class="custom-control-label" for="yellowlogosaucyinfinitySwitch">Yellow</label>
  </div>
  <br>
  <div class="switch">
    <input type="checkbox" class="form-check-input" id="greenlogosaucyinfinitySwitch" />
    <label class="custom-control-label" for="greenlogosaucyinfinitySwitch">Green</label>
  </div>
  <br>
  <div class="switch">
    <input type="checkbox" class="form-check-input" id="bluelogosaucyinfinitySwitch" />
    <label class="custom-control-label" for="bluelogosaucyinfinitySwitch">Blue</label>
  </div>
  <br>
  <div class="switch">
    <input type="checkbox" class="form-check-input" id="purplelogosaucyinfinitySwitch" />
    <label class="custom-control-label" for="purplelogosaucyinfinitySwitch">Purple</label>
  </div>
  <br>
  <div class="switch">
    <input type="checkbox" class="form-check-input" id="pinklogosaucyinfinitySwitch" />
    <label class="custom-control-label" for="pinklogosaucyinfinitySwitch">Pink</label>
  </div>
  <br><br>



  <h2 id="logos" style="color: #fff">Saucy Saturday</h2><br>
  <div class="switch">
          <input type="checkbox" class="form-check-input" id="defaultlogosaucysaturdaySwitch" />
          <label class="custom-control-label" for="defaultlogosaucysaturdaySwitch">Default</label>
        </div>
        <br>
<div class="switch">
    <input type="checkbox" class="form-check-input" id="blacklogosaucysaturdaySwitch" />
    <label class="custom-control-label" for="blacklogosaucysaturdaySwitch">Black</label>
  </div>
  <br>
  <div class="switch">
    <input type="checkbox" class="form-check-input" id="whitelogosaucysaturdaySwitch" />
    <label class="custom-control-label" for="whitelogosaucysaturdaySwitch">White</label>
  </div>
  <br>
  <div class="switch">
    <input type="checkbox" class="form-check-input" id="redlogosaucysaturdaySwitch" />
    <label class="custom-control-label" for="redlogosaucysaturdaySwitch">Red</label>
  </div>
  <br>
  <div class="switch">
    <input type="checkbox" class="form-check-input" id="orangelogosaucysaturdaySwitch" />
    <label class="custom-control-label" for="orangelogosaucysaturdaySwitch">Orange</label>
  </div>
  <br>
  <div class="switch">
    <input type="checkbox" class="form-check-input" id="yellowlogosaucysaturdaySwitch" />
    <label class="custom-control-label" for="yellowlogosaucysaturdaySwitch">Yellow</label>
  </div>
  <br>
  <div class="switch">
    <input type="checkbox" class="form-check-input" id="greenlogosaucysaturdaySwitch" />
    <label class="custom-control-label" for="greenlogosaucysaturdaySwitch">Green</label>
  </div>
  <br>
  <div class="switch">
    <input type="checkbox" class="form-check-input" id="bluelogosaucysaturdaySwitch" />
    <label class="custom-control-label" for="bluelogosaucysaturdaySwitch">Blue</label>
  </div>
  <br>
  <div class="switch">
    <input type="checkbox" class="form-check-input" id="purplelogosaucysaturdaySwitch" />
    <label class="custom-control-label" for="purplelogosaucysaturdaySwitch">Purple</label>
  </div>
  <br>
  <div class="switch">
    <input type="checkbox" class="form-check-input" id="pinklogosaucysaturdaySwitch" />
    <label class="custom-control-label" for="pinklogosaucysaturdaySwitch">Pink</label>
  </div>
  <br><br>



  <h2 id="logos" style="color: #fff">Stay Saucy</h2><br>
  <div class="switch">
          <input type="checkbox" class="form-check-input" id="defaultlogostaysaucySwitch" />
          <label class="custom-control-label" for="defaultlogostaysaucySwitch">Default</label>
        </div>
        <br>
<div class="switch">
    <input type="checkbox" class="form-check-input" id="blacklogostaysaucySwitch" />
    <label class="custom-control-label" for="blacklogostaysaucySwitch">Black</label>
  </div>
  <br>
  <div class="switch">
    <input type="checkbox" class="form-check-input" id="whitelogostaysaucySwitch" />
    <label class="custom-control-label" for="whitelogostaysaucySwitch">White</label>
  </div>
  <br>
  <div class="switch">
    <input type="checkbox" class="form-check-input" id="redlogostaysaucySwitch" />
    <label class="custom-control-label" for="redlogostaysaucySwitch">Red</label>
  </div>
  <br>
  <div class="switch">
    <input type="checkbox" class="form-check-input" id="orangelogostaysaucySwitch" />
    <label class="custom-control-label" for="orangelogostaysaucySwitch">Orange</label>
  </div>
  <br>
  <div class="switch">
    <input type="checkbox" class="form-check-input" id="yellowlogostaysaucySwitch" />
    <label class="custom-control-label" for="yellowlogostaysaucySwitch">Yellow</label>
  </div>
  <br>
  <div class="switch">
    <input type="checkbox" class="form-check-input" id="greenlogostaysaucySwitch" />
    <label class="custom-control-label" for="greenlogostaysaucySwitch">Green</label>
  </div>
  <br>
  <div class="switch">
    <input type="checkbox" class="form-check-input" id="bluelogostaysaucySwitch" />
    <label class="custom-control-label" for="bluelogostaysaucySwitch">Blue</label>
  </div>
  <br>
  <div class="switch">
    <input type="checkbox" class="form-check-input" id="purplelogostaysaucySwitch" />
    <label class="custom-control-label" for="purplelogostaysaucySwitch">Purple</label>
  </div>
  <br>
  <div class="switch">
    <input type="checkbox" class="form-check-input" id="pinklogostaysaucySwitch" />
    <label class="custom-control-label" for="pinklogostaysaucySwitch">Pink</label>
  </div>
        
                  
            
        <br><br><div class="back back-icon"></div><br><br><br><br></div></li></ul>


        



      <ul class="side2"><li class="side">
        <!-- svelte-ignore a11y-invalid-attribute -->
        <a data-sveltekit-preload-data="hover" data-sveltekit-preload-code="eager" sveltekit:prefetch href="#" id="saucysidemenu6" class="back-icon">Unique</a>
        <div class="submenu nav-level"><div class="nav-header">
        <h3>Unique</h3></div><ul class="side2"><li class="side"></li></ul>
        
    
    <p style="color: #fff">Nav</p> 
    <label>
    <input type="color" id="colortop" on:input={changecolortop}>   
    </label>
  
  
  <p style="color: #fff">Actions</p> 
  <label>
  <input type="color" id="coloractions" on:input={changecoloractions}>   
  </label>
  
  <p style="color: #fff">Support</p> 
  <label>
  <input type="color" id="colorsupport" on:input={changecolorsupport}>   
  </label>
  
  <p style="color: #fff">Shop</p> 
  <label>
  <input type="color" id="colorshop" on:input={changecolorshop}>   
  </label>

  

  <p style="color: #fff">Confetti L</p> 
  <label>
  <input type="color" id="colorconfettileft" on:input={changecolorconfettileft}>   
  </label>
  


  <p style="color: #fff">Confetti R</p> 
  <label>
  <input type="color" id="colorconfettiright" on:input={changecolorconfettiright}>   
  </label>
  
   

<p style="color: #fff">Search</p> 
<label>
<input type="color" id="colorsearch" on:input={changecolorsearch}>   
</label>


 
    <br><br><div class="back back-icon"></div><br><br><br><br></div></li></ul>

    <div class="back back-icon" on:click={global}></div></div>

<ul class="side2">
  <li class="side">
    <!-- svelte-ignore a11y-invalid-attribute -->
    <a data-sveltekit-preload-data="hover" data-sveltekit-preload-code="eager" sveltekit:prefetch href="#" id="saucysidemenu15" class="back-icon">Presets</a>
    <div class="submenu nav-level">
    <div class="nav-header">
      <h3>Presets</h3><br>
    </div>

    <div class="switch">
      <p style="color:white; cursor: pointer;" on:click={presetone}>Preset 1</p>
    </div>
<br>
    <div class="switch">
      <p style="color:white; cursor: pointer;" on:click={presettwo}>Preset 2</p>
    </div>
<br>
    <div class="switch">
      <p style="color:white; cursor: pointer;" on:click={presetthree}>Preset 3</p>
    </div>
<br>
    <div class="switch">
      <p style="color:white; cursor: pointer;" on:click={presetfour}>Preset 4</p>
    </div>

    <br><br><div class="back back-icon" on:click={global}></div><br><br><br><br></div></li></ul>

      
    


    <br><div on:click={closesaucysidemenu} class="back back-icon1"></div>




    <div id="lightningsettings">

<div id="accountsettings" on:click={sidemenuclose}>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
      <a data-sveltekit-preload-data="hover" data-sveltekit-preload-code="eager" sveltekit:prefetch href="/languages" on:click={saucylanguages}><img loading="lazy" alt="pictureinpicture" id="languages" <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAHM0lEQVR4nO2dDcxWUxzAb18S8jUklV4VycdGhmpNKMSYNMvHjKkZQ2k0bWVIS2g2TeZjvmIjUqj0Rm1aLVtEk2qRJCV7mRcpe/W+3p+d+We3032e5977nHM/znN/27u9e+69z/+c+3/uPef8v47nFRQUFBQUOArQBbgIuA14HJgHfApsArYBjUCz/DXKZ+rYauAd4DG5Vn1Hl7T7kzuAU4AxwKvAZszzDfAKMBo4Oe3+ZhKgFzAR2EDyKJkPA6d5tQzQGRgHfEV2WAfcDRzm1QrACfKL/JXs8gcwE6jzXAXoCrwAtJAfmoHnnJoMAIfI+KB+dXllt8zWOnt5BhgObMcdfgAu83L6VKh3cCtu8lpuBn5gALAF9/kWON/LMsD1wF/UDk3AzV7WANrIVNbVV1Ql1Ou5rZcFgA7A3IpNdp+31b3IgjLmp30nMsS81JRSKCNDSpEx443Sbap5Xlf3KEmFTK75W16ZiUkp4/Kc2aPS4h/gqiScR7tS62L+UPa7PraU0RZYmXYPc8gnQDsbCplgobH14h/pBizBXcabVkZfCyYRNQ5188no5vDYtMeo/15+yaZZGiBnGe6y0JQyBltq4OgAWWNwmyEmFLLcQsP+Bo4OkHWkWFBdZaWJNYcNFpSRuQC3ie9xtDjzuaGMzBtxm0VxlXGipVnPnnLuT+BQCSpweQXfM45Cpllq0JyAqMVe2mdzcJupcVblOy01ZoQma5L60z4bgdvsiORhBM6z1JDfgI6aLBVKulH77KCMRzaaoH8UhTxoqREvaXLO9B07Qzv2Mm4zOYpCVllqxCWanEd9x6Zpxy7FbVaEVcbhlmZXDUB7zevoj9/a4veyqXPlGldpDhWaCgyy1IBZAQF1OgO0c2Zhnw/EsNkdWEyyDAijEJX+ZYPBmhwVy6QzMyE7mp/uPnk9SJYxYRTylKUg5TbatPrHgPN+8jtz5LW2FYsE9D9JngyjkA8tCJ6hyRha5tyh2rkzcFch9WEUstaC4LMrCi7dnv64q5A1YW6A6cj1TXGVsQ+1cMQSAbKSZLNXCeBnw0KnVBRauU1Tos6aqpUZok0mZmUNYQSZdhD1M9D5fnFmTbYxMCtrCiNEefNMsTYgsypMXNcudW7Msc05hajyFFbCKYFREa4dpV2rEkfDsDgJpYgy6pN4ZZlK0mzV87yB9yJc/26AwyzphKALtTaoWiuJD+rrDQlbVWUAQ5O6JiGjZxBbdZ+FFLVJfNq7yJCwsdr3qmIvVYUKAWNJyTyu3ANpLQyDbExx2M9vrALjqg2mA+pitkU9bX9GOP934AhN9jOkZDox9Sus0+bsLQbCTU+K8R1L5XXZXvO/hPZ5y/VRFBo7WDBIIUMMCVM3oo/cxGpCRJeIQutifs9AzVi5PIS/W3867iNF83snw2uRtBmm9a+PhCKV4uqAsKSdqTmopBEqp8EVVgbMlm4qce7cBOMLwrlwpRHTcYs7Avr4tHbO98Ax2jm9KzxN1TApC2FAabELOFXrYztJYUYiJfcLy5HxZllWwoCse+pSYL0aD7R+dpRJw/CAe3C/xbZsj5w2bdtTlxLz9Xy/oBsDXCCDri2mxM24VYHBrjG73K9TZmENmQu2tpjKlgVuL9Hfg6UOVvbSEXwl+lyiRaL6S9YiURZey2UJq0rYUYP757jBqrDBFirdTsqUm2Z5bGX4GjeMfPMlcG2pcUOcZl1LHLsG+NpgWwZVrRBpWN6S+vfKjOqKMopQBsO35PyGUq8SKUOlql3/UmWb3jeiDJ8vIC/2rY8qRZ1IHqNun2oVj2CHMgpcGLNNe4zXPLFo0zFNzzJ9GAh8XOH6z4BzSlyvrM5xuMeoMnyP7hdkn94BE5OLIzrIWiTy/ljtu1RdlqissFYgUzKebBnbTFEv6QU9JFJF7RcSF+WUmipPRu+IQRr7PI92yjP5lDKyhsvBRl2RX2lVGRbDYVxkQiLK8Jmu09gNJy/MTkwZOZx1pVFQuX1add4L9mduKsqokSIx+So1DjwQuclu0ioW5HSL8YdY8dYCTZnYrkK2vHO58lsY1ILzXC8LJBz0nMVX1POZ2fJIbEOmw/Lzwja9XkvqANdRe+yWHYQ6eVlC6ljVwoZffkeXSkM4zssiloPHskSjbCSZWAJpZKQ2YtZN7yb873fpEY6ZI4E41++AJ1TOXQqm/XWyyO3r5QXgXks3o1lCVv/PSQeOB26V3TQ3WoieVDPEF4Fb9GqouQA4y9IicE2YOCn+W4Sq4LU7xQ/zpuSvbJEST43ict0r/28VRa4W+9J0qSk/RHfJ5g6pvLDBwq4z46xscuI6wLOGlaHCaHqk3a9conLtDNt9DsjBKIiAIfOIKoY8Xi0oo8guCECqUFczTjwCHFXcXEPErL24Q+b0B2zWUlAlKpwy5LYRu2V6OTI1f3KtAJwuEeINMtdvkDm+KlDzkOzAky0LaEFBQUFBgVeb/AtgYomz7ZdvCAAAAABJRU5ErkJggg=="></a>
    <a data-sveltekit-preload-data="hover" data-sveltekit-preload-code="eager" sveltekit:prefetch href="/account"><img loading="lazy" alt="account" id="saucyaccount" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA7klEQVR4nO3UPUoDURDA8ZDClLFUrPUKehLxEMZjaCOKB9LSjyqLB9BG1EqRiJY/GVwhjfo2TD4I+4eBZXeW/5s3816n07KIoIcDXOO9jngexLdpSTdQ+Z1h5Eyj0uoP6bg8r3Lf21vKfqb4poH4KlM8aiAeZYobMa+K35aix4N5TXWvPqP/ETkraeKxm2s405vrh6gmtjL6WA9cxGX9LrfSlpmCLnZwhAs84bOOR5zjENuRmyFcxwmeG5zjWNQx1iYRruIMHyYn/j1Fv1S6hXt53GGzRHwrn6pEHMOSzUOJeA+vidIX7Bb1uWWp+AK3aDl9rK/F7wAAAABJRU5ErkJggg=="></a>
   </div>

<div id="resetfeedback">
<!-- svelte-ignore a11y-click-events-have-key-events -->
<img loading="lazy" alt="hide" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAG2klEQVR4nO2daciUVRTHn/TVNFPUzDa1bNGizYo0W0jLFtMWDcuykr5FVBREi7RYH6TyQxvlkgghFBSBgmiuWLQvallWUNH6lqVW+mrWW/7i5hkapnln7vPMPXfuzHN/3wTnvefc/9zt3HPuJEkkbIBewCrg3HrbkntEjDfZw44oSjhiFIiiBCRGFKVeACs7EKNYlNF1MzBvAGcB2y1EiQu9L6IoARJFCZAoSoBEUQIkihIgUZQAiaIESBQlQKIoAWLCJ3Jir2uYBegLHAecDYwBLgcmAeeZaAJwPNA/yQM+RQH2kQ6+C3gO+NCi7WJ2yWdeAO6Rv9UraTY0RQGOBu4GXpUOdU07sBq4FTg8aRZcigIcDEwDPsE/ZgQ9AAxI8i4KcBqwEPiL+tMOvGjWpSRvoshnqt3B1JMPgClAp6TJRTHz9us0DuuBsUkTi9KorAGGJ016eGxUdgNzgJ5JI9Hkohi+By5NGglP09dvMsevAF6S3doKWZB9fCHmAz2SHIvyk3TClcBhFu0PBCbLNPMDOmw0IZwkZ6K8C1wDdK3BjhbgImCxrAUuMf5dn+RAlLeBMxXsGQYswT1zgS6u7U3rXE/gQaCbQ1Ha5LzSWdn2CUCrY1HMGtZb0+5KDh0IvC+GLHUoylSPPvQHljsW5WNgsC8fCo4MAb4sMcSVKDuAUR596QzMcizKj+ZOxpcDJwM/d2CIS1FGe3HoP7tmOBZlC3CqttEnAZurGLIM6N6IucTA47ilTc0H4BRgq6UhDTlS2DN9mYXZtShnaGwVbcXwJgrQxzgLjDdRWblL369GXw9Q2H39ar7QtdhVbOARNZx0nYsCDJatdqXbxXXAdGN7Rp8n4h4z1R+bVYfire3nNRriUpQFwJ8p2jb/98ksGShit2u+MiMwqxj7AmsdGeLynJIFM8JHZtjAuA6zIKWDFTc95YzpJNFTl9RblF0mdytlP5jYlwbPA3ulMeQhJUOWVgsSoi+K9UgBxqHHdFsjrlA0YotNAA796Wv/FFHiTUp2mOnwqmoGHCUXP1rMt/pWJOqiPJHCjnnoYc4ox3TUcDfZLmoyxbYjlEX5wzZr0XyL0U/U+/8iD8xGn6o3fR5FuT+xABiEPrN8HIRK2Z5qZ6EvytrEAmOzTC3aTCw02E/Cxdqst+kAj6KYRbWvZdsmmUIbs3nolyjcBXTEChvnPYtygmW7JlveB08nks3hg4U2znvO+7rQss1F+GFTImcDHyxKsYj28jRSxlva5Dpq0RGbE8mW8MEqS+eHSrzHhyhWp3aFO5KOmFtIKNvpobF1ls53lwVXWxTTRh9Lm8xZQRszDR9SaPDekLa9wDvymTcURdloY4u0sQ19phU32BXY4KFRq7Ix4I6iz2iJYhXcMyd69DGpQ3uXKy/7W7nhyZadMLCk4NO1KCZ0cqilLVejiynnG+Er66KUOTadYABmlnzWpSgLKv2dkr/5LLo8Uq0u3AwfFEPfLZYd0Rv4TkkU2+rgLhVy0FzwXtUkcnkhQXPXNTblNWpbBlGc5H3JCxFaGL+G2nbEDYqGLLYVxABcXOYb72WkKIdMrq1kfzljTHGMBmb/PyxD+uq3PkUBTkePR1OJUXRhZYplNFiSwZ7ewMPA79qiSAajlu8vZy61kCcvvlYybEJGmwYAtwNvyWhzKcq/WffAbUo+f1pz/YjJtgN+UTCuNXPSmGAOUxL7GphUIYUoU5UupFqzZlKWc2ZUyVThiuXalVKBPG6w2XlxKHCBkijWh8UGraPfplYnAlwiYQfXzFAxuP4jZad6NZgUS2qIMrvJpq+tGlXElZwxNQ+uWQ0c1ATTl1nAT/TlR3ERT6uSMxMbeKSY1x0G+bK/1BlTPPMReonZwxpMlNdqreBy4UwPeTFUg91SEjDONkpcIWqrnXX/VC3PfzgHuFlpsS9OJJsnF0ZVpwTgSOA6uc/Yqlifst3nYwepkFvHz/BDmyQfrJK8qcLzTBsqXB+4FsXcZwxJQkayRmYG8tKopihmOj0/aRRkF+aqRtE1yyxEsb3kOidpFCSb5SZPydxpaci3WVzuxO5UOkzWQj5HSgEpfZjhMcHbhiW5HSklU9kkjzmzNrd4+R0pZRb/x4BvqB9f2IRrQnwwRw0pHRsO3Cc/VZHmCY0sZ5g18osMqS6OciVKmfPMSOAWOaG/kmG31i4v35mH/58BbpRcr5YabcunKBXu0QfI+11j5GeOzHp0mfx7hAl9S+FPTR1fiShKgIT6Ml6uIYoSHlGUAImiBEgUJUCiKAESRQmQKEqARFECJIoSIJZhlpX1tjNXUPlEX7XoKOJPlChGQKJEMUKg6MeZ4zSVBM4/wQu8Zku5rxkAAAAASUVORK5CYII=" id="hide" on:click={hidesaucy} />
<img loading="lazy" alt="reset" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAD60lEQVRoge2ay49VRRCHvwMjcwkvGZgZjQs1KkajqDsToqKJCupWIz52RIkJaoT/wpUkGv1DjAm+HXkLcSQGBkY3okETJSIiA+rnous4jcww5577OGPCb1M3fbqrfnWqu0/d6oYrmF8ouqVIHQLuB9YBtwM3ASPAEkDgNHAKOA4cBg4AHxRFcbpbHGpDbanPqzvVv2wfU+r76tPqVRXs7VP3zPSsVkTUxcBLwDbg2mieAnYDH5Pe+ARwEjgDLACWA6tJ0boTWE+K3kCM/wF4HXirKIrzs9gVoCiKzmeS+rj6TfZWD6ib1RU1dA2pL6iHM33H1A2z9Ld0phMHWurbmcGD6iMdKb1Y/2Pq16H7b/UNtfWfPp05ol4TxFV/V7eqCztmf6mdAXWbei5s7VOHs+f1HVFvVCdDxxH1jq4xn93mPZnNCfX6aK/niDocilT3q6u7znp226vUPWF7Uh2t5UisiXI67VaX9Ijz5Tgsi81EdW9dR8qFfcT0sWsEEYlvs02muiOmLbZc2D1fE2FzzIqoqnCx09+JrT3mn9vtuiPbo/9Be7DF9gXqoPp9OPJw03xqQ30unDjQNJeOYMpEVTc3zaU2TAncn6b0oO0EsGksyH4/ACwEdhVF8WtDfGojd2RdyE+aINIpckduCzneBJFOkTtyS8jjTRDpFLkjq0L+2ASRrsFUCFBd1DSXKoiUZmymB/8bRyIDUT1XtuVT60zIpf2lVQvLQ/5bE8sd+TnkaN/o1MdIyF/KhtyRcrda0zc69XFryGNlQ+7IkZB39Y1OfawNebRsyB35POT6vtGpjwdDfnbJE3VlljRe3V9e1RHJ7ZR6QS0X/XREiqI4BXwIDAJPNsCxKp4CFgE7Z63kq8/G/vxFX6lVhFqoh4Ljpst1HFRPRMdH+8ixEtQngtt36uBcnV+LzofmU/HBVBceD24vVxnQcrru+kofOFZC9oIn5oxGNmhjDDqrrp17RG+h3q3+EZzaO8pQ38zewKq5R/QGpkL68eCyo46ClhcXkJsoYi81nZEYstqUmkHRsHo0FO03O3TpNeLDtytsT6qdJbOmg54ytBNqz3OxWBOlzWPqDd1SPJpNs7Pqq+rA3CPbtjMQu1O5sPepI3OPbM9IK9sAVL9UN3ZJd2E6yhjP9O+ovSYqGt2QhV1T1f5FdWUNXUPqFqfTjnIqtX1aXPfCQAvYAmwHrovm88Be4CPgK9KfnpPAb/F8GelywRrShYGHgHtJCSDACdKFgXeKopiqw6s2TLnZM+p7pr8A7eKC+q66qdNp1M1LNStIl2ruI1UtbwaGSZGAFJmfgEnSP7sx4NN5canmCnqAfwByK8CnLIr8DwAAAABJRU5ErkJggg==" id="reset" on:click={() => { localStorage.clear(); }} />
<a data-sveltekit-preload-data="hover" data-sveltekit-preload-code="eager" sveltekit:prefetch href="/edit" target="_self"  on:click={sidemenuclose}><img loading="lazy" on:click={sidemenuclose} alt="edit" id="edit" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGE0lEQVR4nO2dS4gcRRjH20TR+ADxhYivoAdFBQ3qxfg4JJoYTTYPX3vylNzEoxdxL8JEFM8KPhJ1N/FxUUQUEfUkoln0pmLCgibjIyoqOmNcf1JsTegtuqefVV91Tf2PM93T1f3rf31ffd1VkyRR4Qp4Etgh3Y6oJRg9lvQvMB0vih8wRopQpAQ8TbaOTVL3BdwIPAV8AfwMDIAF4E1gJ3C6JIyJgQKsBt6iWD8AuyRhBA8FuBX4iWraC5wsBWOkV5LABNwJ/F3xOhyHIgljH3BiEpCAzTpGmHoX2AScpVwAXAE8CvySse1OEWcAK5OABGwFhsZ5LgIPjdnnQuBLY58jwGkuYew1YSinaEidjCnADuCfjHP9CFhRsO/FwK/Gfg+6gvFiBoyVwFxXAz1LMFS78/RcCSiPGfu87gLGAbNhGoZyRlqdgUIxjFJQgKuN7b+yDWOkGQOG6r6yNJuEA6MQiooZLNdvLmCMNKMapruvTmZfVIcxFgpwnrHd965gjDSf8/lcwDByoQBTLNcnLmGUToV19jXrS0xpAUYmFOAD4/vHpWG8lANDdV9eBPoWYSyDAjxsfP4fcJ0kjD0FqTDSUCzAGOljPXhM642iJ3029ULJVFis9mURRpZ+BC6pMwJtQ3njEtV9eZF94RaGKkjeUqZR2yxC6aWOs0J3X1naLwBju8XzNqVqYHdVaZxNKKNxieq+vKh94d4ZG+pWM21Bmfel9kUXYBgDGLPEbEvOa1+4haFu7m1tNHqLQyjOal+4h9Ges4GNOU/GbKgHnAA8k/P9q00DvuMArl6FeqA1GMbjSldOmbdV++q0M3KcUveBflPtN2GkurXpiXFGxkltEICyLwfGy6mTn544GKmT2+QwpuypUPua8qSb2u4MhmOnzObAyCq39IGrPHDG/U5BZLwkNvCg9nVEvfs0kc7IOOk7LDqlV6L2FZ2RAeV2m1DIH5dEGEJOmfe4m2peDrHslL8cXIi+BwFcHWdr4ruA9Zah9COMevMl/owwPJJ6PAn8EZ0RJpR+7Kbag3JzQyj9CMMfKP0Iwx8ofU9gZBYsgxCwtiSUfoThFsrvEUY3oERnSAm4yYASYXgEJcLwDIp01Xao3j+TuQIdEDG19Ue+OQO4EjglmUR5CGMNcBR4Dzg1mSQJzM+YKmjPtXoBsvR0tDOSSZAAjM0lnWHq7SR0WZ4cVAqGnhl7aQEMVfJZm4QsT2DM6O8P6fkwEYYHMMYp0xlBZV8CzthSE4Z6L+C2MQH/QyerjAb0ovbQIozuZ1+6j3bpjLtb7qbCyb4sv5gt4Yyx23stxxNHhw2cofQNcIGxbzipsOO5icOGMEb6GrioDgyvs6+Owhjp26rjEq9rX46nUg8bjDOqqnvZl7pTHTpjkLWQiyUYVWOMfPYVsDPSUmWW1d5nX+pO9cAZuxwdv3KMCXkEPshbb0ovgP85cpLPvhwvJjAs8TzjTOBT3Eu+9uUbDEEo8tmX43LIQHWLFdvnqvuSr31ZnnVb2xkCTpGvfTlObQdVneHYKbK1L8cxY6C6xZbabROKTO2rqzAcQWlS+3qnMhTHi5cN2oYhOE4pG/DLQ9ELvxzuOgwhKFViTDkowPWhwBCCUibGjDSXFAl4JCQYQlDGxZiR1HdrkiIB70s8XHIhwTKLKfVXejeUafCqjGBu/gdGU2dsdHL1c+RBQbKcM1JLLqX1XYsvR4s5wyOnlHNGqqG7jR94Xn/eFIo3MAShVIOhG2la+fh6tA2geAdDAEotGGcb8UL9gdX5xjZVoXgLwyGU6jB0w+4zfuhAznZloXgPwwGUejB0o541fuyJgvmBi9b+zCSM7Kt8NpXToIPGD64zvj8XuEcv4brQ2n8uhemU+s7QDbk84w5Xd8w6vZbuZyXHI52F0SKUZjByXqcZ1FhtdMF0VVdF/e6rWTeVasBrNQ5+TDunp510UhKQqO6U5s5IHVytHF2kRX3X7Nbr9a5KAhflndKOM1IHVtXJLB3U2de9wDnJBIpiKO3C0Addr6Ec1t2XiimXtXqQMKEcbR1GVO2Y0l7MiGoMJcLwrPu6RrodUYk9/Q/6Hg/u/f8xcgAAAABJRU5ErkJggg==" /></a>
<a data-sveltekit-preload-data="hover" data-sveltekit-preload-code="eager" sveltekit:prefetch href="/add" on:click={sidemenuclose}><img loading="lazy" on:click={sidemenuclose} alt="add" id="add" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABgklEQVR4nO2VMU7DQBBFXUFBuECIEQ1cJAFRIS4RmgQ4BpzAUgRcgJoESnIKQkMAKRdIKBM9tGIWjaz1ejG2kiJP2mZn1t+zM7MTRWtWDWAXOAeegBHwJWske10gLlNwB+gBc/JZAPfA3n9FT4GZQ+BBfqgBDBz2KXBSVPRSInDRUH6xJ/qLIpEuZCVAGxgGCD+Lb6LOh0XOz/XZ603U/iYwlv2B+BnRR9l7Mz7KP1HXXg8RvlMRtFO2Ptn0U75nynYT0jK6eoc2CuAgo9BQke2r29Gpmev0uIRNn6YZS6Q+UctMfG1KNB2fsM1XFfR9wq+BfZqH6/zIJ2zyFNqnPlznp8sSJuSqXX36F5znoyUV16dPuFuVKHDsE44Dx5+3mqMiALc5H38HmsAW0AI+lC37dcpD+s9Wt4tmyv/QGnI/nocZZZ5ZXEv5bpcmbDBDPEO8FVUVcSryqSPHRqwGHKkcT6IyAepmngZU+1WpwhZ5iTryKr2oMTkBroGNX+c1q8Q38x4gDbzwo0EAAAAASUVORK5CYII="></a>
<a href="https://docs.google.com/forms/d/e/1FAIpQLSfEdJSBQTl2gd8PPfqwghTGqBXzbs1VijLF7QY-Q058ogVAbw/viewform?usp=sf_link" target="_blank"><img loading="lazy" alt="feedback" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAABmJLR0QA/wD/AP+gvaeTAAACtklEQVRoge2YP2xNURzHv0f0tfUnoQtKVfxJxMCkiaFhMIlgMjKIiQGbQdKE0EhsxKAxGoyGLu0kaUSESLVUSKuLxJ+2E9XWy8fw3pOiaX/n3XvuQc4nuds5v/P53nfvPb/zpEQikUj8vbiQxYFGSXsldUraJ6lNUkv1KkmalDQl6aOkx5IGJA045yZCeuUOsB7oAibwZwa4DxyMnWNJgBJwHZitI+hC9AKbYudaEGAr8CSnoPOZAo7FzvcLQCswFiBsjVngaOyckiRgFfA8YNgaM0BHVt9lOWS+KGlPDnWWoiTpDrA8S5FM2xLQJum1pGbjlLKkN6psRSsl7fCYW+O0c67Hc04+ANeMj+Mn4Cyw5rf5JeAI8NTj0X4YJWxV+KVB8C1LbC1AA3DPGLgMtBaVcb7kdoPcd2C3sV4zMGoMfbhe7ywfrZ2GMQ+cc4OWYs65aUl3jWtvNI77gyyBLYv2etY03RxJ6zzr/iRL4A2GMaMZ6i/Gt0B1iwW4YHyHT9S7Rh6NR54cN457FtSiCIBTxl93DAh6jg8OcLK6hVm4FNu3boAmoJtKM2HhA7A6tnddAB3AsDEo1ZtyKLa3N8AK4IbHI1zjfGx3b4BtwKBn0DngTGx3b6j03u89w44DB2K7e0PlYDDiEbQM3OIf/kB1eYQdATpjO9cN0Ah8NobtAZpiO2cC2G8MezO2ay4A5wxhh4GGInyKODxYjpG3nXNzwU1UTGDLGo+CW1QpIvC0YcxkcIsqRQS2/DtRDm6RSCQSiUQFoAW4AgwBX6vXMHAVaIntlytAO/BukT56HNgS2zM3gD7D4aEvtmcuAJsNYWu0FeEUurXcFWhs3YQOTOD63oQOPOIx9lUwiyIB+g3vb39sz9zAti21x/bMFWAtcBl4AXyh0ngMUWlG/q/GI5FIJBIZ+AErZqPaHmlMrwAAAABJRU5ErkJggg==" id="feedback">
</a>
</div>



<div id="saucypictureinpicture" on:click={sidemenuclose}>
  <img loading="lazy" alt="pictureinpicture" id="pip" on:click={saucypictureinpicture} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA2klEQVR4nO3aQQrCMBRF0bcQHbv2iuDGVNQNPAl0IAFJ2sTSfO5ZQe9/zowEAACADdk+2r7Yfns86Zuvtk9LYu8e3yO11ASnZaM41wSP+DP+5VUTHIoIzuzm8gvtfmER3IaFZ1p7qd4aB2Vhrz2sWfg/+Ek3Wn1Yb6Q1kOAfxMKVl+pNnbHwTGsv1RsLN9r9wlsRwRkHoxIHI4IzDkYlDkYEZxyMShyMCM44GJU4GBEc+w/xp0rmByFRTDXBp/lByOhutg/F4K+XPOf0RsLjSd88VccCAABAfXwAbOtL2Niff5AAAAAASUVORK5CYII=">
</div>






<div id="lightdark">
<!-- svelte-ignore a11y-click-events-have-key-events -->
<img loading="lazy" alt="lightdark" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAC8ElEQVRoge3Yz4oUVxTH8W4T32Bm8G/EUUGJglshbjKaZJ/FIPgKCiIqZBNC3Ag+gCGuBVGyyT7qdDQjMwSSEfURRJ0xJqsE9ZNF3dayp7rrVlfd6kT8wTA0c+p3zrfPrZpTp9N5r3dYWMSdSddRW4IS55jBHdxKmSQpSIBYCWnupsqTFATT+D2keIBNKfL0kyUBqQ2BZfyKmcj4aJBwTBaxFBHXP04rsbUMmixXMUAPCxFxM7gXvIeCNAIRjAZbunkso/WeKznPwmPS+D1R8K1M1fCaivmGG+tEifGZgb/N4Tvcx5/h5z4u4dOB2LMTg8glmMKpvjF246Zy3cSuXJGnhnU1OURBwsNYjYDoaxWflHi2DrETTypA5GF2DvFs759dLumtMSDgFY4X+LXbiZD0SA2IE01AaGLCxuUxIU4WeI11nPqmdUEeTrATvQL/XmzgW8H4axIQI+pbPw6NAFnIxcSCNAox4IF2jlYyiOATNZiWmXwfAdHYjZ1MODqpTjQu/PS/7URe2IO1JjuBvfgat/EIL3A1LUnn9dD4pC4EtuN68OnrpWxC3pCq+CnZ+8R0+PyRGrMTPscfBcf0XBKAguJOR8aNgvgC/xRA3GgLYuirbgWIHXheAAFfpoS4F1FclRv7xyEQpHqqyXZaTUIcHAEBG1OB/CbbbU3XhQjxF0tAtiQBKSlqnFH8bgnIfBu15wsadxR/WgLSQzfS6wNcaR0iXBuzeVk36gzxOoPV1iHC9THblxc4Oawz6OIr2QTwuHWI4BGz0OvrNo5ha7h2C+axkI+pWkAjUyzOVwCJ0bdVkjf2PoH9siPRhF5iX+sQOc/rDYHEjfkpIILvrGp74yKtCfdOUggl20B8Jns6jaO/MZccInhg9MomwFTtzDMcSQ4hdhv4Jn4W15Q/AF7hB2yLLWSpZifitoHrr/sY3+CGbIxZC78XcQEHqhbyi2zarXVj9wnqeFTVh/kP3W73UEO+P3c6nVZB3uu/pn8B3Pi/2Q0DytwAAAAASUVORK5CYII=" id="darkmode" on:click={() => { darkmode = !darkmode; localStorage.setItem('darkmode', darkmode); }} />
</div></div></div>
{/if}

</nav>

<nav id="ddfullscreenmenu">
  <div id="colorfuldots"></div>
  <div id="closex"></div>
  <div id="ulwrapper">
  <!-- Define your UL (nested) menu below -->
  <ul id="fullscreenmenu-ul">

</ul></div></nav>