/**
 * MAIN.JS
 * Funcionalidad nativa para el sitio Inmobiliaria Aurora.
 * Requiere: data.js cargado previamente.
 */

(function () {
  "use strict";

  /* Marcar que JS está activo ANTES de cualquier otra cosa.
     Esto activa las animaciones .reveal; sin JS el contenido se muestra normal. */
  document.documentElement.classList.add("js-ready");

  /* =========================================================
     HELPERS
     ========================================================= */
  const $  = (sel, ctx) => (ctx || document).querySelector(sel);
  const $$ = (sel, ctx) => Array.from((ctx || document).querySelectorAll(sel));

  const fmtCLP = (n) => {
    if (typeof n !== "number") return n;
    if (n >= 1000000) return "$ " + (n / 1000000).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " M";
    return "$ " + n.toLocaleString("es-CL");
  };

  const iconoServicios = (key) => {
    const icons = {
      home: "🏠", tag: "🏷️", key: "🔑", chart: "📊",
      scales: "⚖️", building: "🏢", eye: "👁️",
      handshake: "🤝", star: "⭐", heart: "❤️"
    };
    return icons[key] || "✦";
  };

  window.fmtCLP = fmtCLP;
  window.iconoServicios = iconoServicios;

  /* =========================================================
     RENDERIZADO DE TARJETA DE PROPIEDAD
     ========================================================= */
  const renderPropCard = (p, opts) => {
    opts = opts || {};
    const tags = [];
    if (p.destacada) tags.push('<span class="absolute top-3 left-3 bg-amber-500 text-slate-900 text-xs font-bold px-2.5 py-1 rounded">DESTACADA</span>');
    tags.push('<span class="absolute top-3 right-3 bg-slate-900/80 text-white text-xs font-semibold px-2.5 py-1 rounded">' + p.operacion + '</span>');

    const iconos = [];
    if (p.habitaciones) iconos.push('<span class="flex items-center gap-1.5"><svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M3 12l9-9 9 9M5 10v10h14V10"/></svg>' + p.habitaciones + ' dorm.</span>');
    if (p.banos)       iconos.push('<span class="flex items-center gap-1.5"><svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 12h16M5 12V7a2 2 0 012-2h10a2 2 0 012 2v5"/></svg>' + p.banos + ' baños</span>');
    iconos.push('<span class="flex items-center gap-1.5"><svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 6h16v12H4z M4 6l8 7 8-7"/></svg>' + p.m2 + ' m²</span>');

    return ''
      + '<article class="gallery-item card-hover bg-white rounded-xl overflow-hidden shadow-md reveal ' + (opts.revealClass || "") + '" data-tipo="' + p.tipo + '" data-id="' + p.id + '">'
      +   '<div class="relative image-zoom h-56 overflow-hidden">'
      +     '<img src="' + p.imagen + '" alt="' + p.titulo + '" loading="lazy" class="w-full h-full object-cover"/>'
      +   '</div>'
      +   '<div class="p-5">'
      +     '<p class="text-xs uppercase tracking-wider text-amber-600 font-semibold mb-1">' + p.operacion + '</p>'
      +     '<h3 class="text-lg font-bold text-slate-900 mb-1">' + p.titulo + '</h3>'
      +     '<p class="text-sm text-slate-500 mb-3 flex items-center gap-1">'
      +       '<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 22s-8-7-8-13a8 8 0 1116 0c0 6-8 13-8 13z"/><circle cx="12" cy="9" r="3"/></svg>'
      +       ' ' + p.ubicacion
      +     '</p>'
      +     '<div class="flex items-center gap-4 text-sm text-slate-600 border-t border-slate-100 pt-3 mt-3">'
      +        iconos.join("")
      +     '</div>'
      +     '<div class="mt-4 flex items-center justify-between">'
      +       '<span class="text-2xl font-bold text-slate-900">' + fmtCLP(p.precio) + '</span>'
      +       '<a href="contacto.html?prop=' + p.id + '" class="text-amber-600 hover:text-amber-500 font-semibold text-sm">Ver más →</a>'
      +     '</div>'
      +   '</div>'
      + '</article>';
  };

  /* =========================================================
     INIT
     ========================================================= */
  document.addEventListener("DOMContentLoaded", function () {

    /* ---------- 1. NAVBAR: scroll + menú móvil ---------- */
    const navbar  = $("[data-navbar]");
    const burger  = $("[data-burger]");
    const navMenus = $$("[data-navmenu]"); // Ambos: <nav> y <div> móvil

    if (navbar) {
      const onScroll = () => navbar.classList.toggle("scrolled", window.scrollY > 30);
      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();
    }

    if (burger && navMenus.length) {
      const mobileMenu = navMenus[navMenus.length - 1]; // El último es el panel móvil
      burger.addEventListener("click", function () {
        burger.classList.toggle("is-open");
        mobileMenu.classList.toggle("is-open");
        document.body.style.overflow = mobileMenu.classList.contains("is-open") ? "hidden" : "";
      });
      $$("a", mobileMenu).forEach(function (a) {
        a.addEventListener("click", function () {
          if (window.innerWidth < 1024) {
            burger.classList.remove("is-open");
            mobileMenu.classList.remove("is-open");
            document.body.style.overflow = "";
          }
        });
      });
    }

    /* ---------- 2. Active link ---------- */
    const current = window.location.pathname.split("/").pop() || "index.html";
    $$("[data-navlink]").forEach(function (link) {
      const href = link.getAttribute("href");
      if (href === current || (current === "" && href === "index.html")) {
        link.classList.add("is-active");
      }
    });

    /* ---------- 3. Reveal on scroll ---------- */
    const revealTargets = $$(".reveal, .reveal-left, .reveal-right, .reveal-scale");
    if ("IntersectionObserver" in window && revealTargets.length) {
      const io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.08, rootMargin: "0px 0px -40px 0px" });
      revealTargets.forEach(function (el) { io.observe(el); });
    } else {
      revealTargets.forEach(function (el) { el.classList.add("is-visible"); });
    }

    /* ---------- 4. Contadores animados ---------- */
    const counters = $$("[data-counter]");
    const animateCounter = function (el) {
      const target = parseInt(el.dataset.counter, 10) || 0;
      const duration = 1600;
      const start = performance.now();
      const step = function (now) {
        const t = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - t, 3);
        el.textContent = Math.floor(eased * target).toLocaleString("es-CL");
        if (t < 1) requestAnimationFrame(step);
        else el.textContent = target.toLocaleString("es-CL");
      };
      requestAnimationFrame(step);
    };
    if ("IntersectionObserver" in window && counters.length) {
      const cIO = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) {
            animateCounter(en.target);
            cIO.unobserve(en.target);
          }
        });
      }, { threshold: 0.4 });
      counters.forEach(function (c) { cIO.observe(c); });
    } else {
      counters.forEach(function (c) { animateCounter(c); });
    }

    /* ---------- 5. HOME: propiedades destacadas ---------- */
    const homeGrid = $("[data-home-propiedades]");
    if (homeGrid && typeof propiedades !== "undefined") {
      const destacadas = propiedades.filter(function (p) { return p.destacada; }).slice(0, 6);
      homeGrid.innerHTML = destacadas.map(function (p, i) {
        return renderPropCard(p, { revealClass: "reveal-delay-" + ((i % 5) + 1) });
      }).join("");
    }

    /* ---------- 6. HOME: servicios top ---------- */
    const homeServicios = $("[data-home-servicios]");
    if (homeServicios && typeof servicios !== "undefined") {
      homeServicios.innerHTML = servicios.slice(0, 3).map(function (s, i) {
        return ''
          + '<div class="card-hover bg-white p-8 rounded-2xl shadow-md reveal reveal-delay-' + (i+1) + '">'
          +   '<div class="w-14 h-14 bg-amber-500/10 rounded-xl flex items-center justify-center mb-5">'
          +     '<span class="text-3xl">' + iconoServicios(s.icono) + '</span>'
          +   '</div>'
          +   '<h3 class="text-xl font-bold text-slate-900 mb-3">' + s.titulo + '</h3>'
          +   '<p class="text-slate-600 leading-relaxed mb-4">' + s.descripcion + '</p>'
          +   '<a href="servicios.html" class="text-amber-600 hover:text-amber-500 font-semibold inline-flex items-center gap-1">'
          +     'Conocer más <span>→</span>'
          +   '</a>'
          + '</div>';
      }).join("");
    }

    /* ---------- 7. HOME: stats ---------- */
    const homeStats = $("[data-home-stats]");
    if (homeStats && typeof stats !== "undefined") {
      homeStats.innerHTML = stats.map(function (s, i) {
        return ''
          + '<div class="text-center reveal reveal-delay-' + (i+1) + '">'
          +   '<div class="text-5xl lg:text-6xl font-bold gold-text counter" data-counter="' + s.numero + '">0</div>'
          +   '<p class="text-slate-300 mt-2 text-lg">' + s.label + '</p>'
          + '</div>';
      }).join("");
      // Re-observar los nuevos counters
      $$("[data-counter]", homeStats).forEach(function (c) {
        if ("IntersectionObserver" in window) {
          const o = new IntersectionObserver(function (e) {
            if (e[0].isIntersecting) {
              animateCounter(c);
              o.unobserve(c);
            }
          }, { threshold: 0.4 });
          o.observe(c);
        } else {
          animateCounter(c);
        }
      });
    }

    /* ---------- 8. HOME: testimonios ---------- */
    const homeTest = $("[data-home-testimonios]");
    if (homeTest && typeof testimonios !== "undefined") {
      homeTest.innerHTML = testimonios.map(function (t, i) {
        return ''
          + '<div class="bg-white p-8 rounded-2xl shadow-md card-hover reveal reveal-delay-' + (i+1) + '">'
          +   '<div class="flex text-amber-500 mb-3">' + '\u2605'.repeat(t.rating) + '</div>'
          +   '<p class="text-slate-700 italic mb-5 leading-relaxed">"' + t.comentario + '"</p>'
          +   '<div class="flex items-center gap-3 border-t border-slate-100 pt-4">'
          +     '<div class="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-white font-bold text-lg">'
          +       t.nombre.charAt(0)
          +     '</div>'
          +     '<div>'
          +       '<p class="font-bold text-slate-900">' + t.nombre + '</p>'
          +       '<p class="text-xs text-slate-500">' + t.fecha + '</p>'
          +     '</div>'
          +   '</div>'
          + '</div>';
      }).join("");
    }

    /* ---------- 9. NOSOTROS: equipo ---------- */
    const eqGrid = $("[data-equipo]");
    if (eqGrid && typeof equipo !== "undefined") {
      eqGrid.innerHTML = equipo.map(function (m, i) {
        return ''
          + '<div class="card-hover bg-white rounded-2xl overflow-hidden shadow-md reveal reveal-delay-' + (i+1) + '">'
          +   '<div class="image-zoom h-64 overflow-hidden">'
          +     '<img src="' + m.foto + '" alt="' + m.nombre + '" loading="lazy" class="w-full h-full object-cover"/>'
          +   '</div>'
          +   '<div class="p-6">'
          +     '<h3 class="text-xl font-bold text-slate-900">' + m.nombre + '</h3>'
          +     '<p class="text-amber-600 font-semibold text-sm mb-3">' + m.cargo + '</p>'
          +     '<p class="text-slate-600 text-sm leading-relaxed">' + m.bio + '</p>'
          +   '</div>'
          + '</div>';
      }).join("");
    }

    /* ---------- 10. NOSOTROS: valores ---------- */
    const valGrid = $("[data-valores]");
    if (valGrid && typeof valores !== "undefined") {
      valGrid.innerHTML = valores.map(function (v, i) {
        return ''
          + '<div class="bg-slate-50 p-8 rounded-2xl reveal reveal-delay-' + (i+1) + ' card-hover">'
          +   '<div class="text-4xl mb-4">' + iconoServicios(v.icono) + '</div>'
          +   '<h3 class="text-xl font-bold text-slate-900 mb-2">' + v.titulo + '</h3>'
          +   '<p class="text-slate-600">' + v.descripcion + '</p>'
          + '</div>';
      }).join("");
    }

    /* ---------- 11. NOSOTROS: timeline ---------- */
    const tlEl = $("[data-timeline]");
    if (tlEl && typeof historia !== "undefined") {
      tlEl.innerHTML = '<div class="timeline">' + historia.map(function (h, i) {
        return ''
          + '<div class="timeline-item reveal reveal-delay-' + ((i % 4) + 1) + '">'
          +   '<span class="text-amber-500 font-bold text-xl">' + h.anio + '</span>'
          +   '<h4 class="text-lg font-bold text-slate-900 mt-1">' + h.titulo + '</h4>'
          +   '<p class="text-slate-600 mt-1">' + h.descripcion + '</p>'
          + '</div>';
      }).join("") + '</div>';
    }

    /* ---------- 12. SERVICIOS: lista completa ---------- */
    const servGrid = $("[data-servicios]");
    if (servGrid && typeof servicios !== "undefined") {
      servGrid.innerHTML = servicios.map(function (s, i) {
        return ''
          + '<div class="bg-white rounded-2xl overflow-hidden shadow-md card-hover reveal reveal-delay-' + ((i % 4) + 1) + '">'
          +   '<div class="image-zoom h-48 overflow-hidden">'
          +     '<img src="' + s.imagen + '" alt="' + s.titulo + '" loading="lazy" class="w-full h-full object-cover"/>'
          +   '</div>'
          +   '<div class="p-7">'
          +     '<div class="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center mb-4">'
          +       '<span class="text-2xl">' + iconoServicios(s.icono) + '</span>'
          +     '</div>'
          +     '<h3 class="text-2xl font-bold text-slate-900 mb-3">' + s.titulo + '</h3>'
          +     '<p class="text-slate-600 leading-relaxed">' + s.descripcion + '</p>'
          +   '</div>'
          + '</div>';
      }).join("");
    }

    /* ---------- 13. GALERÍA: render + filtros + lightbox ---------- */
    const galGrid = $("[data-galeria]");
    if (galGrid && typeof propiedades !== "undefined") {
      galGrid.innerHTML = propiedades.map(function (p, i) {
        return renderPropCard(p, { revealClass: "reveal-delay-" + ((i % 4) + 1) });
      }).join("");

      const filterBtns = $$("[data-filter]");
      filterBtns.forEach(function (btn) {
        btn.addEventListener("click", function () {
          filterBtns.forEach(function (b) { b.classList.remove("is-active"); });
          btn.classList.add("is-active");
          const tipo = btn.dataset.filter;
          $$(".gallery-item").forEach(function (el) { el.classList.remove("is-hidden"); });
          if (tipo !== "todos") {
            $$('.gallery-item[data-tipo]:not([data-tipo="' + tipo + '"])').forEach(function (el) {
              el.classList.add("is-hidden");
            });
          }
        });
      });
    }

    /* ---------- 14. Lightbox (instancia única) ---------- */
    const initLightbox = function () {
      if ($(".lightbox")) return;
      const lb = document.createElement("div");
      lb.className = "lightbox";
      lb.innerHTML = '<button class="lightbox-close" aria-label="Cerrar">&times;</button><img alt="Imagen ampliada"/>';
      document.body.appendChild(lb);
      const lbImg = lb.querySelector("img");
      const close = function () { lb.classList.remove("is-open"); };
      lb.querySelector(".lightbox-close").addEventListener("click", close);
      lb.addEventListener("click", function (e) { if (e.target === lb) close(); });
      document.addEventListener("keydown", function (e) { if (e.key === "Escape") close(); });
      return lb;
    };
    const lbEl = initLightbox();
    document.addEventListener("click", function (e) {
      const img = e.target.closest("[data-galeria] .image-zoom img");
      if (img && lbEl) {
        lbEl.querySelector("img").src = img.src;
        lbEl.classList.add("is-open");
      }
    });

    /* ---------- 15. PRECIOS: planes ---------- */
    const planGrid = $("[data-planes]");
    if (planGrid && typeof planes !== "undefined") {
      planGrid.innerHTML = planes.map(function (p, i) {
        const car = p.caracteristicas.map(function (c) {
          return '<li class="flex items-start gap-2 text-slate-700">'
               +   '<svg class="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>'
               +   '<span>' + c + '</span>'
               + '</li>';
        }).join("");
        const noInc = p.noIncluye.map(function (c) {
          return '<li class="flex items-start gap-2 text-slate-400">'
               +   '<svg class="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12"/></svg>'
               +   '<span>' + c + '</span>'
               + '</li>';
        }).join("");
        return ''
          + '<div class="pricing-card bg-white rounded-2xl p-8 border-2 border-slate-100 reveal reveal-delay-' + (i+1) + ' ' + (p.destacado ? 'is-highlight' : '') + '">'
          +   '<h3 class="text-2xl font-bold text-slate-900 mb-2">' + p.nombre + '</h3>'
          +   '<p class="text-slate-600 text-sm mb-6">' + p.descripcion + '</p>'
          +   '<div class="mb-6">'
          +     '<span class="text-5xl font-bold text-slate-900">' + p.precio + '</span>'
          +     '<span class="text-slate-500 text-sm ml-2">' + p.periodo + '</span>'
          +   '</div>'
          +   '<ul class="space-y-3 mb-8">' + car + noInc + '</ul>'
          +   '<a href="contacto.html" class="' + (p.destacado ? 'btn-primary' : 'btn-outline') + ' w-full">Contratar plan</a>'
          + '</div>';
      }).join("");
    }

    /* ---------- 16. TALLERES (cards con barra de progreso) ---------- */
    const tallGrid = $("[data-talleres]");
    if (tallGrid && typeof talleres !== "undefined") {
      tallGrid.innerHTML = talleres.map(function (t, i) {
        const pct = Math.round((t.inscritos / t.cupos) * 100);
        const lleno = pct >= 95;
        return ''
          + '<article class="taller-card bg-white border-2 border-slate-100 rounded-2xl p-7 reveal reveal-delay-' + ((i % 4) + 1) + '">'
          +   '<div class="flex items-start justify-between mb-4">'
          +     '<span class="bg-slate-900 text-amber-400 text-xs font-bold tracking-wider px-3 py-1 rounded-full uppercase">' + t.dia + '</span>'
          +     '<span class="text-sm font-bold text-slate-700">' + t.hora + '</span>'
          +   '</div>'
          +   '<h3 class="text-xl font-bold text-slate-900 mb-3">' + t.titulo + '</h3>'
          +   '<p class="text-slate-600 mb-4 text-sm leading-relaxed">' + t.descripcion + '</p>'
          +   '<div class="space-y-2 text-sm text-slate-600 mb-5">'
          +     '<p class="flex items-center gap-2">'
          +       '<svg class="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>'
          +       ' ' + t.expositor
          +     '</p>'
          +     '<p class="flex items-center gap-2">'
          +       '<svg class="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 8v4l3 2M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>'
          +       ' ' + t.duracion
          +     '</p>'
          +     '<p class="flex items-center gap-2">'
          +       '<svg class="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>'
          +       ' ' + t.modalidad
          +     '</p>'
          +   '</div>'
          +   '<div class="mb-4">'
          +     '<div class="flex justify-between text-xs text-slate-600 mb-1.5">'
          +       '<span>' + t.inscritos + '/' + t.cupos + ' cupos</span>'
          +       '<span class="font-semibold" data-progress>' + pct + '%</span>'
          +     '</div>'
          +     '<div class="progress-bar">'
          +       '<div class="progress-fill" style="width:0%"></div>'
          +     '</div>'
          +   '</div>'
          +   '<button ' + (lleno ? 'disabled' : '') + ' class="w-full ' + (lleno ? 'bg-slate-200 text-slate-500 cursor-not-allowed' : 'btn-primary') + '">'
          +     (lleno ? 'Cupos agotados' : 'Reservar mi cupo')
          +   '</button>'
          + '</article>';
      }).join("");

      // Animar barras de progreso
      setTimeout(function () {
        $$("[data-talleres] .progress-fill").forEach(function (fill, idx) {
          const card = fill.closest(".taller-card");
          const span = card ? card.querySelector("[data-progress]") : null;
          const pct  = span ? parseInt(span.textContent, 10) : 0;
          fill.style.width = pct + "%";
        });
      }, 300);
    }

    /* ---------- 17. Formulario de contacto ---------- */
    const form = $("[data-contact-form]");
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        let ok = true;
        $$("[data-validate]", form).forEach(function (input) {
          input.classList.remove("is-invalid");
          const v = input.value.trim();
          let invalid = !v;
          if (!invalid && input.type === "email" && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v)) invalid = true;
          if (!invalid && input.type === "tel" && !/^[0-9+\s\-]{8,}$/.test(v)) invalid = true;
          if (invalid) { input.classList.add("is-invalid"); ok = false; }
        });
        if (!ok) return;
        const toast = $("[data-toast]");
        if (toast) {
          toast.classList.add("is-visible");
          setTimeout(function () { toast.classList.remove("is-visible"); }, 4000);
        }
        form.reset();
      });
      $$("input, textarea", form).forEach(function (i) {
        i.addEventListener("input", function () { i.classList.remove("is-invalid"); });
      });
    }

    /* ---------- 18. Año dinámico ---------- */
    const yearEl = $("[data-year]");
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    /* ---------- 19. Re-observar todos los .reveal que aún no tienen .is-visible ---------- */
    if ("IntersectionObserver" in window) {
      $$(".reveal:not(.is-visible), .reveal-left:not(.is-visible), .reveal-right:not(.is-visible), .reveal-scale:not(.is-visible)").forEach(function (el) {
        const io = new IntersectionObserver(function (entries) {
          if (entries[0].isIntersecting) {
            el.classList.add("is-visible");
            io.unobserve(el);
          }
        }, { threshold: 0.08, rootMargin: "0px 0px -40px 0px" });
        io.observe(el);
      });
    } else {
      $$(".reveal, .reveal-left, .reveal-right, .reveal-scale").forEach(function (el) {
        el.classList.add("is-visible");
      });
    }
  });

})();