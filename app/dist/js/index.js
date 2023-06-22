(function () {
  var Fe = document.createElement('style');
  (Fe.textContent = `:root{--color-black: #000000;--color-white: #ffffff;--color-dark: #0f172a;--color-red: #dc2626;--color-orange: #fb923c;--color-yellow: #facc15;--color-green: #84cc16;--color-blue: #38bdf8;--color-purple: #c084fc;--color-gray: #94a3b8;--color-gray-light: #cbd5e1;--color-primary: var(--color-dark);--color-secondary: var(--color-white);--color-error: var(--color-red);--color-success: var(--color-green);--color-warning: var(--color-yellow);--color-info: var(--color-blue);--screen-xs: 36em;--screen-sm: 48em;--screen-md: 62em;--screen-lg: 75em;--screen-xl: 88em;--space-4: .25rem;--space-8: .5rem;--space-10: .625rem;--space-12: .75rem;--space-16: 1rem;--space-20: 1.25rem;--space-24: 1.5rem;--space-32: 2rem;--fz-xs: .75rem;--fz-sm: .875rem;--fz-md: 1rem;--fz-lg: 1.125rem;--fz-xl: 1.5rem;--fz-h1: 2.125rem;--fz-h2: 1.625rem;--fz-h3: 1.375;--fz-h4: 1.125rem;--fz-h5: 1rem;--fz-h6: .875rem}#slider{padding-top:var(--space-32)}#slider .swiper{width:61.25rem;height:26.25rem}#slider .swiper-slide{background:var(--color-gray-light);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}#slider .swiper-pagination-bullet{width:.5rem;height:.5rem;color:var(--color-info);opacity:1;background:var(--color-gray)}#slider .swiper-pagination-bullet-active{color:#fff;background:var(--color-info)}#slider .swiper-button-next:after,#slider .swiper-button-prev:after{font-size:var(--fz-xl)}#slider .error{padding:var(--space-16) var(--space-24);background-color:var(--color-error);color:var(--color-white);border-radius:var(--space-8);font-weight:100}.user{width:480px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative}.user__avatar{width:150px;height:150px;position:absolute;top:-5rem;right:-2rem;object-fit:cover;border-radius:50%;border:2px solid var(--color-dark);background-color:var(--color-info)}@font-face{font-family:swiper-icons;src:url(data:application/font-woff;charset=utf-8;base64,\\ d09GRgABAAAAAAZgABAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAGRAAAABoAAAAci6qHkUdERUYAAAWgAAAAIwAAACQAYABXR1BPUwAABhQAAAAuAAAANuAY7+xHU1VCAAAFxAAAAFAAAABm2fPczU9TLzIAAAHcAAAASgAAAGBP9V5RY21hcAAAAkQAAACIAAABYt6F0cBjdnQgAAACzAAAAAQAAAAEABEBRGdhc3AAAAWYAAAACAAAAAj//wADZ2x5ZgAAAywAAADMAAAD2MHtryVoZWFkAAABbAAAADAAAAA2E2+eoWhoZWEAAAGcAAAAHwAAACQC9gDzaG10eAAAAigAAAAZAAAArgJkABFsb2NhAAAC0AAAAFoAAABaFQAUGG1heHAAAAG8AAAAHwAAACAAcABAbmFtZQAAA/gAAAE5AAACXvFdBwlwb3N0AAAFNAAAAGIAAACE5s74hXjaY2BkYGAAYpf5Hu/j+W2+MnAzMYDAzaX6QjD6/4//Bxj5GA8AuRwMYGkAPywL13jaY2BkYGA88P8Agx4j+/8fQDYfA1AEBWgDAIB2BOoAeNpjYGRgYNBh4GdgYgABEMnIABJzYNADCQAACWgAsQB42mNgYfzCOIGBlYGB0YcxjYGBwR1Kf2WQZGhhYGBiYGVmgAFGBiQQkOaawtDAoMBQxXjg/wEGPcYDDA4wNUA2CCgwsAAAO4EL6gAAeNpj2M0gyAACqxgGNWBkZ2D4/wMA+xkDdgAAAHjaY2BgYGaAYBkGRgYQiAHyGMF8FgYHIM3DwMHABGQrMOgyWDLEM1T9/w8UBfEMgLzE////P/5//f/V/xv+r4eaAAeMbAxwIUYmIMHEgKYAYjUcsDAwsLKxc3BycfPw8jEQA/gZBASFhEVExcQlJKWkZWTl5BUUlZRVVNXUNTQZBgMAAMR+E+gAEQFEAAAAKgAqACoANAA+AEgAUgBcAGYAcAB6AIQAjgCYAKIArAC2AMAAygDUAN4A6ADyAPwBBgEQARoBJAEuATgBQgFMAVYBYAFqAXQBfgGIAZIBnAGmAbIBzgHsAAB42u2NMQ6CUAyGW568x9AneYYgm4MJbhKFaExIOAVX8ApewSt4Bic4AfeAid3VOBixDxfPYEza5O+Xfi04YADggiUIULCuEJK8VhO4bSvpdnktHI5QCYtdi2sl8ZnXaHlqUrNKzdKcT8cjlq+rwZSvIVczNiezsfnP/uznmfPFBNODM2K7MTQ45YEAZqGP81AmGGcF3iPqOop0r1SPTaTbVkfUe4HXj97wYE+yNwWYxwWu4v1ugWHgo3S1XdZEVqWM7ET0cfnLGxWfkgR42o2PvWrDMBSFj/IHLaF0zKjRgdiVMwScNRAoWUoH78Y2icB/yIY09An6AH2Bdu/UB+yxopYshQiEvnvu0dURgDt8QeC8PDw7Fpji3fEA4z/PEJ6YOB5hKh4dj3EvXhxPqH/SKUY3rJ7srZ4FZnh1PMAtPhwP6fl2PMJMPDgeQ4rY8YT6Gzao0eAEA409DuggmTnFnOcSCiEiLMgxCiTI6Cq5DZUd3Qmp10vO0LaLTd2cjN4fOumlc7lUYbSQcZFkutRG7g6JKZKy0RmdLY680CDnEJ+UMkpFFe1RN7nxdVpXrC4aTtnaurOnYercZg2YVmLN/d/gczfEimrE/fs/bOuq29Zmn8tloORaXgZgGa78yO9/cnXm2BpaGvq25Dv9S4E9+5SIc9PqupJKhYFSSl47+Qcr1mYNAAAAeNptw0cKwkAAAMDZJA8Q7OUJvkLsPfZ6zFVERPy8qHh2YER+3i/BP83vIBLLySsoKimrqKqpa2hp6+jq6RsYGhmbmJqZSy0sraxtbO3sHRydnEMU4uR6yx7JJXveP7WrDycAAAAAAAH//wACeNpjYGRgYOABYhkgZgJCZgZNBkYGLQZtIJsFLMYAAAw3ALgAeNolizEKgDAQBCchRbC2sFER0YD6qVQiBCv/H9ezGI6Z5XBAw8CBK/m5iQQVauVbXLnOrMZv2oLdKFa8Pjuru2hJzGabmOSLzNMzvutpB3N42mNgZGBg4GKQYzBhYMxJLMlj4GBgAYow/P/PAJJhLM6sSoWKfWCAAwDAjgbRAAB42mNgYGBkAIIbCZo5IPrmUn0hGA0AO8EFTQAA);font-weight:400;font-style:normal}:root{--swiper-theme-color:#007aff}.swiper,swiper-container{margin-left:auto;margin-right:auto;position:relative;overflow:hidden;list-style:none;padding:0;z-index:1;display:block}.swiper-vertical>.swiper-wrapper{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform;-webkit-transition-timing-function:var(--swiper-wrapper-transition-timing-function,initial);transition-timing-function:var(--swiper-wrapper-transition-timing-function,initial);-webkit-box-sizing:content-box;box-sizing:content-box}.swiper-android .swiper-slide,.swiper-wrapper{-webkit-transform:translate3d(0px,0,0);transform:translateZ(0)}.swiper-horizontal{-ms-touch-action:pan-y;touch-action:pan-y}.swiper-vertical{-ms-touch-action:pan-x;touch-action:pan-x}.swiper-slide,swiper-slide{-ms-flex-negative:0;flex-shrink:0;width:100%;height:100%;position:relative;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform;display:block}.swiper-slide-invisible-blank{visibility:hidden}.swiper-autoheight,.swiper-autoheight .swiper-slide{height:auto}.swiper-autoheight .swiper-wrapper{-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-transition-property:height,-webkit-transform;transition-property:height,-webkit-transform;transition-property:transform,height;transition-property:transform,height,-webkit-transform}.swiper-backface-hidden .swiper-slide{-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-3d.swiper-css-mode .swiper-wrapper{-webkit-perspective:1200px;perspective:1200px}.swiper-3d .swiper-wrapper{-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.swiper-3d{-webkit-perspective:1200px;perspective:1200px}.swiper-3d .swiper-cube-shadow,.swiper-3d .swiper-slide,.swiper-3d .swiper-slide-shadow,.swiper-3d .swiper-slide-shadow-bottom,.swiper-3d .swiper-slide-shadow-left,.swiper-3d .swiper-slide-shadow-right,.swiper-3d .swiper-slide-shadow-top{-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.swiper-3d .swiper-slide-shadow,.swiper-3d .swiper-slide-shadow-bottom,.swiper-3d .swiper-slide-shadow-left,.swiper-3d .swiper-slide-shadow-right,.swiper-3d .swiper-slide-shadow-top{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}.swiper-3d .swiper-slide-shadow{background:rgba(0,0,0,.15)}.swiper-3d .swiper-slide-shadow-left{background-image:-webkit-gradient(linear,right top,left top,from(rgba(0,0,0,.5)),to(rgba(0,0,0,0)));background-image:linear-gradient(to left,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-3d .swiper-slide-shadow-right{background-image:-webkit-gradient(linear,left top,right top,from(rgba(0,0,0,.5)),to(rgba(0,0,0,0)));background-image:linear-gradient(to right,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-3d .swiper-slide-shadow-top{background-image:-webkit-gradient(linear,left bottom,left top,from(rgba(0,0,0,.5)),to(rgba(0,0,0,0)));background-image:linear-gradient(to top,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-3d .swiper-slide-shadow-bottom{background-image:-webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,.5)),to(rgba(0,0,0,0)));background-image:linear-gradient(to bottom,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-css-mode>.swiper-wrapper{overflow:auto;scrollbar-width:none;-ms-overflow-style:none}.swiper-css-mode>.swiper-wrapper::-webkit-scrollbar{display:none}.swiper-css-mode>.swiper-wrapper>.swiper-slide{scroll-snap-align:start start}.swiper-horizontal.swiper-css-mode>.swiper-wrapper{-ms-scroll-snap-type:x mandatory;scroll-snap-type:x mandatory}.swiper-vertical.swiper-css-mode>.swiper-wrapper{-ms-scroll-snap-type:y mandatory;scroll-snap-type:y mandatory}.swiper-css-mode.swiper-free-mode>.swiper-wrapper{-ms-scroll-snap-type:none;scroll-snap-type:none}.swiper-css-mode.swiper-free-mode>.swiper-wrapper>.swiper-slide{scroll-snap-align:none}.swiper-centered>.swiper-wrapper:before{content:"";-ms-flex-negative:0;flex-shrink:0;-webkit-box-ordinal-group:10000;-ms-flex-order:9999;order:9999}.swiper-centered>.swiper-wrapper>.swiper-slide{scroll-snap-align:center center;scroll-snap-stop:always}.swiper-centered.swiper-horizontal>.swiper-wrapper>.swiper-slide:first-child{-webkit-margin-start:var(--swiper-centered-offset-before);margin-inline-start:var(--swiper-centered-offset-before)}.swiper-centered.swiper-horizontal>.swiper-wrapper:before{height:100%;min-height:1px;width:var(--swiper-centered-offset-after)}.swiper-centered.swiper-vertical>.swiper-wrapper>.swiper-slide:first-child{-webkit-margin-before:var(--swiper-centered-offset-before);margin-block-start:var(--swiper-centered-offset-before)}.swiper-centered.swiper-vertical>.swiper-wrapper:before{width:100%;min-width:1px;height:var(--swiper-centered-offset-after)}.swiper-lazy-preloader{width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;-webkit-transform-origin:50%;-ms-transform-origin:50%;transform-origin:50%;-webkit-box-sizing:border-box;box-sizing:border-box;border:4px solid var(--swiper-preloader-color,var(--swiper-theme-color));border-radius:50%;border-top-color:transparent}.swiper-watch-progress .swiper-slide-visible .swiper-lazy-preloader,.swiper:not(.swiper-watch-progress) .swiper-lazy-preloader,swiper-container:not(.swiper-watch-progress) .swiper-lazy-preloader{-webkit-animation:swiper-preloader-spin 1s infinite linear;animation:swiper-preloader-spin 1s infinite linear}.swiper-lazy-preloader-white{--swiper-preloader-color:#fff}.swiper-lazy-preloader-black{--swiper-preloader-color:#000}@-webkit-keyframes swiper-preloader-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes swiper-preloader-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}:root{--swiper-navigation-size:44px}.swiper-button-next,.swiper-button-prev{position:absolute;top:var(--swiper-navigation-top-offset,50%);width:calc(var(--swiper-navigation-size)/ 44 * 27);height:var(--swiper-navigation-size);margin-top:calc(0px - (var(--swiper-navigation-size)/ 2));z-index:10;cursor:pointer;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;color:var(--swiper-navigation-color,var(--swiper-theme-color))}.swiper-button-next.swiper-button-disabled,.swiper-button-prev.swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}.swiper-button-next.swiper-button-hidden,.swiper-button-prev.swiper-button-hidden{opacity:0;cursor:auto;pointer-events:none}.swiper-navigation-disabled .swiper-button-next,.swiper-navigation-disabled .swiper-button-prev{display:none!important}.swiper-button-next:after,.swiper-button-prev:after{font-family:swiper-icons;font-size:var(--swiper-navigation-size);text-transform:none!important;letter-spacing:0;font-variant:initial;line-height:1}.swiper-button-prev,.swiper-rtl .swiper-button-next{left:var(--swiper-navigation-sides-offset,10px);right:auto}.swiper-button-prev:after,.swiper-rtl .swiper-button-next:after{content:"prev"}.swiper-button-next,.swiper-rtl .swiper-button-prev{right:var(--swiper-navigation-sides-offset,10px);left:auto}.swiper-button-next:after,.swiper-rtl .swiper-button-prev:after{content:"next"}.swiper-button-lock{display:none}.swiper-pagination{position:absolute;text-align:center;-webkit-transition:.3s opacity;transition:.3s opacity;-webkit-transform:translate3d(0,0,0);transform:translateZ(0);z-index:10}.swiper-pagination.swiper-pagination-hidden{opacity:0}.swiper-pagination-disabled>.swiper-pagination,.swiper-pagination.swiper-pagination-disabled{display:none!important}.swiper-horizontal>.swiper-pagination-bullets,.swiper-pagination-bullets.swiper-pagination-horizontal,.swiper-pagination-custom,.swiper-pagination-fraction{bottom:var(--swiper-pagination-bottom,8px);top:var(--swiper-pagination-top,auto);left:0;width:100%}.swiper-pagination-bullets-dynamic{overflow:hidden;font-size:0}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{-webkit-transform:scale(.33);-ms-transform:scale(.33);transform:scale(.33);position:relative}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active,.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev{-webkit-transform:scale(.66);-ms-transform:scale(.66);transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev{-webkit-transform:scale(.33);-ms-transform:scale(.33);transform:scale(.33)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next{-webkit-transform:scale(.66);-ms-transform:scale(.66);transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next{-webkit-transform:scale(.33);-ms-transform:scale(.33);transform:scale(.33)}.swiper-pagination-bullet{width:var(--swiper-pagination-bullet-width,var(--swiper-pagination-bullet-size,8px));height:var(--swiper-pagination-bullet-height,var(--swiper-pagination-bullet-size,8px));display:inline-block;border-radius:var(--swiper-pagination-bullet-border-radius,50%);background:var(--swiper-pagination-bullet-inactive-color,#000);opacity:var(--swiper-pagination-bullet-inactive-opacity, .2)}button.swiper-pagination-bullet{border:none;margin:0;padding:0;-webkit-box-shadow:none;box-shadow:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}.swiper-pagination-bullet:only-child{display:none!important}.swiper-pagination-bullet-active{opacity:var(--swiper-pagination-bullet-opacity, 1);background:var(--swiper-pagination-color,var(--swiper-theme-color))}.swiper-pagination-vertical.swiper-pagination-bullets,.swiper-vertical>.swiper-pagination-bullets{right:var(--swiper-pagination-right,8px);left:var(--swiper-pagination-left,auto);top:50%;-webkit-transform:translate3d(0px,-50%,0);transform:translate3d(0,-50%,0)}.swiper-pagination-vertical.swiper-pagination-bullets .swiper-pagination-bullet,.swiper-vertical>.swiper-pagination-bullets .swiper-pagination-bullet{margin:var(--swiper-pagination-bullet-vertical-gap,6px) 0;display:block}.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,.swiper-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);width:8px}.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,.swiper-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{display:inline-block;-webkit-transition:.2s transform,.2s top;transition:.2s transform,.2s top}.swiper-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet,.swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 var(--swiper-pagination-bullet-horizontal-gap,4px)}.swiper-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translate(-50%);white-space:nowrap}.swiper-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{-webkit-transition:.2s transform,.2s left;transition:.2s transform,.2s left}.swiper-horizontal.swiper-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,:host(.swiper-horizontal.swiper-rtl) .swiper-pagination-bullets-dynamic .swiper-pagination-bullet{-webkit-transition:.2s transform,.2s right;transition:.2s transform,.2s right}.swiper-pagination-fraction{color:var(--swiper-pagination-fraction-color,inherit)}.swiper-pagination-progressbar{background:var(--swiper-pagination-progressbar-bg-color,rgba(0,0,0,.25));position:absolute}.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:var(--swiper-pagination-color,var(--swiper-theme-color));position:absolute;left:0;top:0;width:100%;height:100%;-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);-webkit-transform-origin:left top;-ms-transform-origin:left top;transform-origin:left top}.swiper-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{-webkit-transform-origin:right top;-ms-transform-origin:right top;transform-origin:right top}.swiper-horizontal>.swiper-pagination-progressbar,.swiper-pagination-progressbar.swiper-pagination-horizontal,.swiper-pagination-progressbar.swiper-pagination-vertical.swiper-pagination-progressbar-opposite,.swiper-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite{width:100%;height:var(--swiper-pagination-progressbar-size,4px);left:0;top:0}.swiper-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-horizontal.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-vertical,.swiper-vertical>.swiper-pagination-progressbar{width:var(--swiper-pagination-progressbar-size,4px);height:100%;left:0;top:0}.swiper-pagination-lock{display:none}
`),
    document.head.appendChild(Fe);
  const xs = '',
    Ss = '',
    Es = '',
    Ts = '';

  function Ge(e) {
    return e !== null && typeof e == 'object' && 'constructor' in e && e.constructor === Object;
  }

  function he(e = {}, t = {}) {
    Object.keys(t).forEach((i) => {
      typeof e[i] > 'u' ? (e[i] = t[i]) : Ge(t[i]) && Ge(e[i]) && Object.keys(t[i]).length > 0 && he(e[i], t[i]);
    });
  }

  const _e = {
    body: {},
    addEventListener() {},
    removeEventListener() {},
    activeElement: {
      blur() {},
      nodeName: '',
    },
    querySelector() {
      return null;
    },
    querySelectorAll() {
      return [];
    },
    getElementById() {
      return null;
    },
    createEvent() {
      return {
        initEvent() {},
      };
    },
    createElement() {
      return {
        children: [],
        childNodes: [],
        style: {},
        setAttribute() {},
        getElementsByTagName() {
          return [];
        },
      };
    },
    createElementNS() {
      return {};
    },
    importNode() {
      return null;
    },
    location: { hash: '', host: '', hostname: '', href: '', origin: '', pathname: '', protocol: '', search: '' },
  };

  function Y() {
    const e = typeof document < 'u' ? document : {};
    return he(e, _e), e;
  }

  const Bt = {
    document: _e,
    navigator: { userAgent: '' },
    location: { hash: '', host: '', hostname: '', href: '', origin: '', pathname: '', protocol: '', search: '' },
    history: {
      replaceState() {},
      pushState() {},
      go() {},
      back() {},
    },
    CustomEvent: function () {
      return this;
    },
    addEventListener() {},
    removeEventListener() {},
    getComputedStyle() {
      return {
        getPropertyValue() {
          return '';
        },
      };
    },
    Image() {},
    Date() {},
    screen: {},
    setTimeout() {},
    clearTimeout() {},
    matchMedia() {
      return {};
    },
    requestAnimationFrame(e) {
      return typeof setTimeout > 'u' ? (e(), null) : setTimeout(e, 0);
    },
    cancelAnimationFrame(e) {
      typeof setTimeout > 'u' || clearTimeout(e);
    },
  };

  function I() {
    const e = typeof window < 'u' ? window : {};
    return he(e, Bt), e;
  }

  function It(e) {
    const t = e;
    Object.keys(t).forEach((i) => {
      try {
        t[i] = null;
      } catch {}
      try {
        delete t[i];
      } catch {}
    });
  }

  function ge(e, t = 0) {
    return setTimeout(e, t);
  }

  function Z() {
    return Date.now();
  }

  function Rt(e) {
    const t = I();
    let i;
    return (
      t.getComputedStyle && (i = t.getComputedStyle(e, null)),
      !i && e.currentStyle && (i = e.currentStyle),
      i || (i = e.style),
      i
    );
  }

  function Nt(e, t = 'x') {
    const i = I();
    let r, s, n;
    const a = Rt(e);
    return (
      i.WebKitCSSMatrix
        ? ((s = a.transform || a.webkitTransform),
          s.split(',').length > 6 &&
            (s = s
              .split(', ')
              .map((o) => o.replace(',', '.'))
              .join(', ')),
          (n = new i.WebKitCSSMatrix(s === 'none' ? '' : s)))
        : ((n =
            a.MozTransform ||
            a.OTransform ||
            a.MsTransform ||
            a.msTransform ||
            a.transform ||
            a.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,')),
          (r = n.toString().split(','))),
      t === 'x' &&
        (i.WebKitCSSMatrix ? (s = n.m41) : r.length === 16 ? (s = parseFloat(r[12])) : (s = parseFloat(r[4]))),
      t === 'y' &&
        (i.WebKitCSSMatrix ? (s = n.m42) : r.length === 16 ? (s = parseFloat(r[13])) : (s = parseFloat(r[5]))),
      s || 0
    );
  }

  function ee(e) {
    return (
      typeof e == 'object' && e !== null && e.constructor && Object.prototype.toString.call(e).slice(8, -1) === 'Object'
    );
  }

  function Dt(e) {
    return typeof window < 'u' && typeof window.HTMLElement < 'u'
      ? e instanceof HTMLElement
      : e && (e.nodeType === 1 || e.nodeType === 11);
  }

  function R(...e) {
    const t = Object(e[0]),
      i = ['__proto__', 'constructor', 'prototype'];
    for (let r = 1; r < e.length; r += 1) {
      const s = e[r];
      if (s != null && !Dt(s)) {
        const n = Object.keys(Object(s)).filter((a) => i.indexOf(a) < 0);
        for (let a = 0, o = n.length; a < o; a += 1) {
          const l = n[a],
            c = Object.getOwnPropertyDescriptor(s, l);
          c !== void 0 &&
            c.enumerable &&
            (ee(t[l]) && ee(s[l])
              ? s[l].__swiper__
                ? (t[l] = s[l])
                : R(t[l], s[l])
              : !ee(t[l]) && ee(s[l])
              ? ((t[l] = {}), s[l].__swiper__ ? (t[l] = s[l]) : R(t[l], s[l]))
              : (t[l] = s[l]));
        }
      }
    }
    return t;
  }

  function te(e, t, i) {
    e.style.setProperty(t, i);
  }

  function He({ swiper: e, targetPosition: t, side: i }) {
    const r = I(),
      s = -e.translate;
    let n = null,
      a;
    const o = e.params.speed;
    (e.wrapperEl.style.scrollSnapType = 'none'), r.cancelAnimationFrame(e.cssModeFrameID);
    const l = t > s ? 'next' : 'prev',
      c = (u, b) => (l === 'next' && u >= b) || (l === 'prev' && u <= b),
      p = () => {
        (a = new Date().getTime()), n === null && (n = a);
        const u = Math.max(Math.min((a - n) / o, 1), 0),
          b = 0.5 - Math.cos(u * Math.PI) / 2;
        let h = s + b * (t - s);
        if ((c(h, t) && (h = t), e.wrapperEl.scrollTo({ [i]: h }), c(h, t))) {
          (e.wrapperEl.style.overflow = 'hidden'),
            (e.wrapperEl.style.scrollSnapType = ''),
            setTimeout(() => {
              (e.wrapperEl.style.overflow = ''), e.wrapperEl.scrollTo({ [i]: h });
            }),
            r.cancelAnimationFrame(e.cssModeFrameID);
          return;
        }
        e.cssModeFrameID = r.requestAnimationFrame(p);
      };
    p();
  }

  function F(e, t = '') {
    return [...e.children].filter((i) => i.matches(t));
  }

  function je(e, t = []) {
    const i = document.createElement(e);
    return i.classList.add(...(Array.isArray(t) ? t : [t])), i;
  }

  function Ft(e, t) {
    const i = [];
    for (; e.previousElementSibling; ) {
      const r = e.previousElementSibling;
      t ? r.matches(t) && i.push(r) : i.push(r), (e = r);
    }
    return i;
  }

  function Gt(e, t) {
    const i = [];
    for (; e.nextElementSibling; ) {
      const r = e.nextElementSibling;
      t ? r.matches(t) && i.push(r) : i.push(r), (e = r);
    }
    return i;
  }

  function $(e, t) {
    return I().getComputedStyle(e, null).getPropertyValue(t);
  }

  function ie(e) {
    let t = e,
      i;
    if (t) {
      for (i = 0; (t = t.previousSibling) !== null; ) t.nodeType === 1 && (i += 1);
      return i;
    }
  }

  function $e(e, t) {
    const i = [];
    let r = e.parentElement;
    for (; r; ) t ? r.matches(t) && i.push(r) : i.push(r), (r = r.parentElement);
    return i;
  }

  function we(e, t, i) {
    const r = I();
    return i
      ? e[t === 'width' ? 'offsetWidth' : 'offsetHeight'] +
          parseFloat(r.getComputedStyle(e, null).getPropertyValue(t === 'width' ? 'margin-right' : 'margin-top')) +
          parseFloat(r.getComputedStyle(e, null).getPropertyValue(t === 'width' ? 'margin-left' : 'margin-bottom'))
      : e.offsetWidth;
  }

  let be;

  function _t() {
    const e = I(),
      t = Y();
    return {
      smoothScroll: t.documentElement && t.documentElement.style && 'scrollBehavior' in t.documentElement.style,
      touch: !!('ontouchstart' in e || (e.DocumentTouch && t instanceof e.DocumentTouch)),
    };
  }

  function Ve() {
    return be || (be = _t()), be;
  }

  let ve;

  function Ht({ userAgent: e } = {}) {
    const t = Ve(),
      i = I(),
      r = i.navigator.platform,
      s = e || i.navigator.userAgent,
      n = { ios: !1, android: !1 },
      a = i.screen.width,
      o = i.screen.height,
      l = s.match(/(Android);?[\s\/]+([\d.]+)?/);
    let c = s.match(/(iPad).*OS\s([\d_]+)/);
    const p = s.match(/(iPod)(.*OS\s([\d_]+))?/),
      u = !c && s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
      b = r === 'Win32';
    let h = r === 'MacIntel';
    const f = [
      '1024x1366',
      '1366x1024',
      '834x1194',
      '1194x834',
      '834x1112',
      '1112x834',
      '768x1024',
      '1024x768',
      '820x1180',
      '1180x820',
      '810x1080',
      '1080x810',
    ];
    return (
      !c &&
        h &&
        t.touch &&
        f.indexOf(`${a}x${o}`) >= 0 &&
        ((c = s.match(/(Version)\/([\d.]+)/)), c || (c = [0, 1, '13_0_0']), (h = !1)),
      l && !b && ((n.os = 'android'), (n.android = !0)),
      (c || u || p) && ((n.os = 'ios'), (n.ios = !0)),
      n
    );
  }

  function jt(e = {}) {
    return ve || (ve = Ht(e)), ve;
  }

  let ye;

  function $t() {
    const e = I();
    let t = !1;

    function i() {
      const r = e.navigator.userAgent.toLowerCase();
      return r.indexOf('safari') >= 0 && r.indexOf('chrome') < 0 && r.indexOf('android') < 0;
    }

    if (i()) {
      const r = String(e.navigator.userAgent);
      if (r.includes('Version/')) {
        const [s, n] = r
          .split('Version/')[1]
          .split(' ')[0]
          .split('.')
          .map((a) => Number(a));
        t = s < 16 || (s === 16 && n < 2);
      }
    }
    return {
      isSafari: t || i(),
      needPerspectiveFix: t,
      isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),
    };
  }

  function Vt() {
    return ye || (ye = $t()), ye;
  }

  function Yt({ swiper: e, on: t, emit: i }) {
    const r = I();
    let s = null,
      n = null;
    const a = () => {
        !e || e.destroyed || !e.initialized || (i('beforeResize'), i('resize'));
      },
      o = () => {
        !e ||
          e.destroyed ||
          !e.initialized ||
          ((s = new ResizeObserver((p) => {
            n = r.requestAnimationFrame(() => {
              const { width: u, height: b } = e;
              let h = u,
                f = b;
              p.forEach(({ contentBoxSize: g, contentRect: A, target: d }) => {
                (d && d !== e.el) ||
                  ((h = A ? A.width : (g[0] || g).inlineSize), (f = A ? A.height : (g[0] || g).blockSize));
              }),
                (h !== u || f !== b) && a();
            });
          })),
          s.observe(e.el));
      },
      l = () => {
        n && r.cancelAnimationFrame(n), s && s.unobserve && e.el && (s.unobserve(e.el), (s = null));
      },
      c = () => {
        !e || e.destroyed || !e.initialized || i('orientationchange');
      };
    t('init', () => {
      if (e.params.resizeObserver && typeof r.ResizeObserver < 'u') {
        o();
        return;
      }
      r.addEventListener('resize', a), r.addEventListener('orientationchange', c);
    }),
      t('destroy', () => {
        l(), r.removeEventListener('resize', a), r.removeEventListener('orientationchange', c);
      });
  }

  function Ut({ swiper: e, extendParams: t, on: i, emit: r }) {
    const s = [],
      n = I(),
      a = (c, p = {}) => {
        const u = n.MutationObserver || n.WebkitMutationObserver,
          b = new u((h) => {
            if (e.__preventObserver__) return;
            if (h.length === 1) {
              r('observerUpdate', h[0]);
              return;
            }
            const f = function () {
              r('observerUpdate', h[0]);
            };
            n.requestAnimationFrame ? n.requestAnimationFrame(f) : n.setTimeout(f, 0);
          });
        b.observe(c, {
          attributes: typeof p.attributes > 'u' ? !0 : p.attributes,
          childList: typeof p.childList > 'u' ? !0 : p.childList,
          characterData: typeof p.characterData > 'u' ? !0 : p.characterData,
        }),
          s.push(b);
      },
      o = () => {
        if (e.params.observer) {
          if (e.params.observeParents) {
            const c = $e(e.el);
            for (let p = 0; p < c.length; p += 1) a(c[p]);
          }
          a(e.el, { childList: e.params.observeSlideChildren }), a(e.wrapperEl, { attributes: !1 });
        }
      },
      l = () => {
        s.forEach((c) => {
          c.disconnect();
        }),
          s.splice(0, s.length);
      };
    t({ observer: !1, observeParents: !1, observeSlideChildren: !1 }), i('init', o), i('destroy', l);
  }

  const qt = {
    on(e, t, i) {
      const r = this;
      if (!r.eventsListeners || r.destroyed || typeof t != 'function') return r;
      const s = i ? 'unshift' : 'push';
      return (
        e.split(' ').forEach((n) => {
          r.eventsListeners[n] || (r.eventsListeners[n] = []), r.eventsListeners[n][s](t);
        }),
        r
      );
    },
    once(e, t, i) {
      const r = this;
      if (!r.eventsListeners || r.destroyed || typeof t != 'function') return r;

      function s(...n) {
        r.off(e, s), s.__emitterProxy && delete s.__emitterProxy, t.apply(r, n);
      }

      return (s.__emitterProxy = t), r.on(e, s, i);
    },
    onAny(e, t) {
      const i = this;
      if (!i.eventsListeners || i.destroyed || typeof e != 'function') return i;
      const r = t ? 'unshift' : 'push';
      return i.eventsAnyListeners.indexOf(e) < 0 && i.eventsAnyListeners[r](e), i;
    },
    offAny(e) {
      const t = this;
      if (!t.eventsListeners || t.destroyed || !t.eventsAnyListeners) return t;
      const i = t.eventsAnyListeners.indexOf(e);
      return i >= 0 && t.eventsAnyListeners.splice(i, 1), t;
    },
    off(e, t) {
      const i = this;
      return (
        !i.eventsListeners ||
          i.destroyed ||
          !i.eventsListeners ||
          e.split(' ').forEach((r) => {
            typeof t > 'u'
              ? (i.eventsListeners[r] = [])
              : i.eventsListeners[r] &&
                i.eventsListeners[r].forEach((s, n) => {
                  (s === t || (s.__emitterProxy && s.__emitterProxy === t)) && i.eventsListeners[r].splice(n, 1);
                });
          }),
        i
      );
    },
    emit(...e) {
      const t = this;
      if (!t.eventsListeners || t.destroyed || !t.eventsListeners) return t;
      let i, r, s;
      return (
        typeof e[0] == 'string' || Array.isArray(e[0])
          ? ((i = e[0]), (r = e.slice(1, e.length)), (s = t))
          : ((i = e[0].events), (r = e[0].data), (s = e[0].context || t)),
        r.unshift(s),
        (Array.isArray(i) ? i : i.split(' ')).forEach((a) => {
          t.eventsAnyListeners &&
            t.eventsAnyListeners.length &&
            t.eventsAnyListeners.forEach((o) => {
              o.apply(s, [a, ...r]);
            }),
            t.eventsListeners &&
              t.eventsListeners[a] &&
              t.eventsListeners[a].forEach((o) => {
                o.apply(s, r);
              });
        }),
        t
      );
    },
  };

  function Wt() {
    const e = this;
    let t, i;
    const r = e.el;
    typeof e.params.width < 'u' && e.params.width !== null ? (t = e.params.width) : (t = r.clientWidth),
      typeof e.params.height < 'u' && e.params.height !== null ? (i = e.params.height) : (i = r.clientHeight),
      !((t === 0 && e.isHorizontal()) || (i === 0 && e.isVertical())) &&
        ((t = t - parseInt($(r, 'padding-left') || 0, 10) - parseInt($(r, 'padding-right') || 0, 10)),
        (i = i - parseInt($(r, 'padding-top') || 0, 10) - parseInt($(r, 'padding-bottom') || 0, 10)),
        Number.isNaN(t) && (t = 0),
        Number.isNaN(i) && (i = 0),
        Object.assign(e, {
          width: t,
          height: i,
          size: e.isHorizontal() ? t : i,
        }));
  }

  function Xt() {
    const e = this;

    function t(S) {
      return e.isHorizontal()
        ? S
        : {
            width: 'height',
            'margin-top': 'margin-left',
            'margin-bottom ': 'margin-right',
            'margin-left': 'margin-top',
            'margin-right': 'margin-bottom',
            'padding-left': 'padding-top',
            'padding-right': 'padding-bottom',
            marginRight: 'marginBottom',
          }[S];
    }

    function i(S, x) {
      return parseFloat(S.getPropertyValue(t(x)) || 0);
    }

    const r = e.params,
      { wrapperEl: s, slidesEl: n, size: a, rtlTranslate: o, wrongRTL: l } = e,
      c = e.virtual && r.virtual.enabled,
      p = c ? e.virtual.slides.length : e.slides.length,
      u = F(n, `.${e.params.slideClass}, swiper-slide`),
      b = c ? e.virtual.slides.length : u.length;
    let h = [];
    const f = [],
      g = [];
    let A = r.slidesOffsetBefore;
    typeof A == 'function' && (A = r.slidesOffsetBefore.call(e));
    let d = r.slidesOffsetAfter;
    typeof d == 'function' && (d = r.slidesOffsetAfter.call(e));
    const m = e.snapGrid.length,
      v = e.slidesGrid.length;
    let y = r.spaceBetween,
      E = -A,
      T = 0,
      z = 0;
    if (typeof a > 'u') return;
    typeof y == 'string' && y.indexOf('%') >= 0
      ? (y = (parseFloat(y.replace('%', '')) / 100) * a)
      : typeof y == 'string' && (y = parseFloat(y)),
      (e.virtualSize = -y),
      u.forEach((S) => {
        o ? (S.style.marginLeft = '') : (S.style.marginRight = ''),
          (S.style.marginBottom = ''),
          (S.style.marginTop = '');
      }),
      r.centeredSlides &&
        r.cssMode &&
        (te(s, '--swiper-centered-offset-before', ''), te(s, '--swiper-centered-offset-after', ''));
    const P = r.grid && r.grid.rows > 1 && e.grid;
    P && e.grid.initSlides(b);
    let O;
    const B =
      r.slidesPerView === 'auto' &&
      r.breakpoints &&
      Object.keys(r.breakpoints).filter((S) => typeof r.breakpoints[S].slidesPerView < 'u').length > 0;
    for (let S = 0; S < b; S += 1) {
      O = 0;
      let x;
      if ((u[S] && (x = u[S]), P && e.grid.updateSlide(S, x, b, t), !(u[S] && $(x, 'display') === 'none'))) {
        if (r.slidesPerView === 'auto') {
          B && (u[S].style[t('width')] = '');
          const C = getComputedStyle(x),
            M = x.style.transform,
            H = x.style.webkitTransform;
          if ((M && (x.style.transform = 'none'), H && (x.style.webkitTransform = 'none'), r.roundLengths))
            O = e.isHorizontal() ? we(x, 'width', !0) : we(x, 'height', !0);
          else {
            const Ot = i(C, 'width'),
              bs = i(C, 'padding-left'),
              vs = i(C, 'padding-right'),
              Mt = i(C, 'margin-left'),
              Lt = i(C, 'margin-right'),
              zt = C.getPropertyValue('box-sizing');
            if (zt && zt === 'border-box') O = Ot + Mt + Lt;
            else {
              const { clientWidth: ys, offsetWidth: As } = x;
              O = Ot + bs + vs + Mt + Lt + (As - ys);
            }
          }
          M && (x.style.transform = M), H && (x.style.webkitTransform = H), r.roundLengths && (O = Math.floor(O));
        } else
          (O = (a - (r.slidesPerView - 1) * y) / r.slidesPerView),
            r.roundLengths && (O = Math.floor(O)),
            u[S] && (u[S].style[t('width')] = `${O}px`);
        u[S] && (u[S].swiperSlideSize = O),
          g.push(O),
          r.centeredSlides
            ? ((E = E + O / 2 + T / 2 + y),
              T === 0 && S !== 0 && (E = E - a / 2 - y),
              S === 0 && (E = E - a / 2 - y),
              Math.abs(E) < 1 / 1e3 && (E = 0),
              r.roundLengths && (E = Math.floor(E)),
              z % r.slidesPerGroup === 0 && h.push(E),
              f.push(E))
            : (r.roundLengths && (E = Math.floor(E)),
              (z - Math.min(e.params.slidesPerGroupSkip, z)) % e.params.slidesPerGroup === 0 && h.push(E),
              f.push(E),
              (E = E + O + y)),
          (e.virtualSize += O + y),
          (T = O),
          (z += 1);
      }
    }
    if (
      ((e.virtualSize = Math.max(e.virtualSize, a) + d),
      o && l && (r.effect === 'slide' || r.effect === 'coverflow') && (s.style.width = `${e.virtualSize + y}px`),
      r.setWrapperSize && (s.style[t('width')] = `${e.virtualSize + y}px`),
      P && e.grid.updateWrapperSize(O, h, t),
      !r.centeredSlides)
    ) {
      const S = [];
      for (let x = 0; x < h.length; x += 1) {
        let C = h[x];
        r.roundLengths && (C = Math.floor(C)), h[x] <= e.virtualSize - a && S.push(C);
      }
      (h = S), Math.floor(e.virtualSize - a) - Math.floor(h[h.length - 1]) > 1 && h.push(e.virtualSize - a);
    }
    if (c && r.loop) {
      const S = g[0] + y;
      if (r.slidesPerGroup > 1) {
        const x = Math.ceil((e.virtual.slidesBefore + e.virtual.slidesAfter) / r.slidesPerGroup),
          C = S * r.slidesPerGroup;
        for (let M = 0; M < x; M += 1) h.push(h[h.length - 1] + C);
      }
      for (let x = 0; x < e.virtual.slidesBefore + e.virtual.slidesAfter; x += 1)
        r.slidesPerGroup === 1 && h.push(h[h.length - 1] + S), f.push(f[f.length - 1] + S), (e.virtualSize += S);
    }
    if ((h.length === 0 && (h = [0]), y !== 0)) {
      const S = e.isHorizontal() && o ? 'marginLeft' : t('marginRight');
      u.filter((x, C) => (!r.cssMode || r.loop ? !0 : C !== u.length - 1)).forEach((x) => {
        x.style[S] = `${y}px`;
      });
    }
    if (r.centeredSlides && r.centeredSlidesBounds) {
      let S = 0;
      g.forEach((C) => {
        S += C + (y || 0);
      }),
        (S -= y);
      const x = S - a;
      h = h.map((C) => (C <= 0 ? -A : C > x ? x + d : C));
    }
    if (r.centerInsufficientSlides) {
      let S = 0;
      if (
        (g.forEach((x) => {
          S += x + (y || 0);
        }),
        (S -= y),
        S < a)
      ) {
        const x = (a - S) / 2;
        h.forEach((C, M) => {
          h[M] = C - x;
        }),
          f.forEach((C, M) => {
            f[M] = C + x;
          });
      }
    }
    if (
      (Object.assign(e, {
        slides: u,
        snapGrid: h,
        slidesGrid: f,
        slidesSizesGrid: g,
      }),
      r.centeredSlides && r.cssMode && !r.centeredSlidesBounds)
    ) {
      te(s, '--swiper-centered-offset-before', `${-h[0]}px`),
        te(s, '--swiper-centered-offset-after', `${e.size / 2 - g[g.length - 1] / 2}px`);
      const S = -e.snapGrid[0],
        x = -e.slidesGrid[0];
      (e.snapGrid = e.snapGrid.map((C) => C + S)), (e.slidesGrid = e.slidesGrid.map((C) => C + x));
    }
    if (
      (b !== p && e.emit('slidesLengthChange'),
      h.length !== m && (e.params.watchOverflow && e.checkOverflow(), e.emit('snapGridLengthChange')),
      f.length !== v && e.emit('slidesGridLengthChange'),
      r.watchSlidesProgress && e.updateSlidesOffset(),
      !c && !r.cssMode && (r.effect === 'slide' || r.effect === 'fade'))
    ) {
      const S = `${r.containerModifierClass}backface-hidden`,
        x = e.el.classList.contains(S);
      b <= r.maxBackfaceHiddenSlides ? x || e.el.classList.add(S) : x && e.el.classList.remove(S);
    }
  }

  function Jt(e) {
    const t = this,
      i = [],
      r = t.virtual && t.params.virtual.enabled;
    let s = 0,
      n;
    typeof e == 'number' ? t.setTransition(e) : e === !0 && t.setTransition(t.params.speed);
    const a = (o) => (r ? t.slides[t.getSlideIndexByData(o)] : t.slides[o]);
    if (t.params.slidesPerView !== 'auto' && t.params.slidesPerView > 1)
      if (t.params.centeredSlides)
        (t.visibleSlides || []).forEach((o) => {
          i.push(o);
        });
      else
        for (n = 0; n < Math.ceil(t.params.slidesPerView); n += 1) {
          const o = t.activeIndex + n;
          if (o > t.slides.length && !r) break;
          i.push(a(o));
        }
    else i.push(a(t.activeIndex));
    for (n = 0; n < i.length; n += 1)
      if (typeof i[n] < 'u') {
        const o = i[n].offsetHeight;
        s = o > s ? o : s;
      }
    (s || s === 0) && (t.wrapperEl.style.height = `${s}px`);
  }

  function Kt() {
    const e = this,
      t = e.slides,
      i = e.isElement ? (e.isHorizontal() ? e.wrapperEl.offsetLeft : e.wrapperEl.offsetTop) : 0;
    for (let r = 0; r < t.length; r += 1)
      t[r].swiperSlideOffset = (e.isHorizontal() ? t[r].offsetLeft : t[r].offsetTop) - i - e.cssOverflowAdjustment();
  }

  function Qt(e = (this && this.translate) || 0) {
    const t = this,
      i = t.params,
      { slides: r, rtlTranslate: s, snapGrid: n } = t;
    if (r.length === 0) return;
    typeof r[0].swiperSlideOffset > 'u' && t.updateSlidesOffset();
    let a = -e;
    s && (a = e),
      r.forEach((l) => {
        l.classList.remove(i.slideVisibleClass);
      }),
      (t.visibleSlidesIndexes = []),
      (t.visibleSlides = []);
    let o = i.spaceBetween;
    typeof o == 'string' && o.indexOf('%') >= 0
      ? (o = (parseFloat(o.replace('%', '')) / 100) * t.size)
      : typeof o == 'string' && (o = parseFloat(o));
    for (let l = 0; l < r.length; l += 1) {
      const c = r[l];
      let p = c.swiperSlideOffset;
      i.cssMode && i.centeredSlides && (p -= r[0].swiperSlideOffset);
      const u = (a + (i.centeredSlides ? t.minTranslate() : 0) - p) / (c.swiperSlideSize + o),
        b = (a - n[0] + (i.centeredSlides ? t.minTranslate() : 0) - p) / (c.swiperSlideSize + o),
        h = -(a - p),
        f = h + t.slidesSizesGrid[l];
      ((h >= 0 && h < t.size - 1) || (f > 1 && f <= t.size) || (h <= 0 && f >= t.size)) &&
        (t.visibleSlides.push(c), t.visibleSlidesIndexes.push(l), r[l].classList.add(i.slideVisibleClass)),
        (c.progress = s ? -u : u),
        (c.originalProgress = s ? -b : b);
    }
  }

  function Zt(e) {
    const t = this;
    if (typeof e > 'u') {
      const p = t.rtlTranslate ? -1 : 1;
      e = (t && t.translate && t.translate * p) || 0;
    }
    const i = t.params,
      r = t.maxTranslate() - t.minTranslate();
    let { progress: s, isBeginning: n, isEnd: a, progressLoop: o } = t;
    const l = n,
      c = a;
    if (r === 0) (s = 0), (n = !0), (a = !0);
    else {
      s = (e - t.minTranslate()) / r;
      const p = Math.abs(e - t.minTranslate()) < 1,
        u = Math.abs(e - t.maxTranslate()) < 1;
      (n = p || s <= 0), (a = u || s >= 1), p && (s = 0), u && (s = 1);
    }
    if (i.loop) {
      const p = t.getSlideIndexByData(0),
        u = t.getSlideIndexByData(t.slides.length - 1),
        b = t.slidesGrid[p],
        h = t.slidesGrid[u],
        f = t.slidesGrid[t.slidesGrid.length - 1],
        g = Math.abs(e);
      g >= b ? (o = (g - b) / f) : (o = (g + f - h) / f), o > 1 && (o -= 1);
    }
    Object.assign(t, {
      progress: s,
      progressLoop: o,
      isBeginning: n,
      isEnd: a,
    }),
      (i.watchSlidesProgress || (i.centeredSlides && i.autoHeight)) && t.updateSlidesProgress(e),
      n && !l && t.emit('reachBeginning toEdge'),
      a && !c && t.emit('reachEnd toEdge'),
      ((l && !n) || (c && !a)) && t.emit('fromEdge'),
      t.emit('progress', s);
  }

  function ei() {
    const e = this,
      { slides: t, params: i, slidesEl: r, activeIndex: s } = e,
      n = e.virtual && i.virtual.enabled,
      a = (l) => F(r, `.${i.slideClass}${l}, swiper-slide${l}`)[0];
    t.forEach((l) => {
      l.classList.remove(i.slideActiveClass, i.slideNextClass, i.slidePrevClass);
    });
    let o;
    if (n)
      if (i.loop) {
        let l = s - e.virtual.slidesBefore;
        l < 0 && (l = e.virtual.slides.length + l),
          l >= e.virtual.slides.length && (l -= e.virtual.slides.length),
          (o = a(`[data-swiper-slide-index="${l}"]`));
      } else o = a(`[data-swiper-slide-index="${s}"]`);
    else o = t[s];
    if (o) {
      o.classList.add(i.slideActiveClass);
      let l = Gt(o, `.${i.slideClass}, swiper-slide`)[0];
      i.loop && !l && (l = t[0]), l && l.classList.add(i.slideNextClass);
      let c = Ft(o, `.${i.slideClass}, swiper-slide`)[0];
      i.loop && !c === 0 && (c = t[t.length - 1]), c && c.classList.add(i.slidePrevClass);
    }
    e.emitSlidesClasses();
  }

  const re = (e, t) => {
      if (!e || e.destroyed || !e.params) return;
      const i = () => (e.isElement ? 'swiper-slide' : `.${e.params.slideClass}`),
        r = t.closest(i());
      if (r) {
        const s = r.querySelector(`.${e.params.lazyPreloaderClass}`);
        s && s.remove();
      }
    },
    Ae = (e, t) => {
      if (!e.slides[t]) return;
      const i = e.slides[t].querySelector('[loading="lazy"]');
      i && i.removeAttribute('loading');
    },
    xe = (e) => {
      if (!e || e.destroyed || !e.params) return;
      let t = e.params.lazyPreloadPrevNext;
      const i = e.slides.length;
      if (!i || !t || t < 0) return;
      t = Math.min(t, i);
      const r = e.params.slidesPerView === 'auto' ? e.slidesPerViewDynamic() : Math.ceil(e.params.slidesPerView),
        s = e.activeIndex;
      if (e.params.grid && e.params.grid.rows > 1) {
        const a = s,
          o = [a - t];
        o.push(...Array.from({ length: t }).map((l, c) => a + r + c)),
          e.slides.forEach((l, c) => {
            o.includes(l.column) && Ae(e, c);
          });
        return;
      }
      const n = s + r - 1;
      if (e.params.rewind || e.params.loop)
        for (let a = s - t; a <= n + t; a += 1) {
          const o = ((a % i) + i) % i;
          (o < s || o > n) && Ae(e, o);
        }
      else
        for (let a = Math.max(s - t, 0); a <= Math.min(n + t, i - 1); a += 1) a !== s && (a > n || a < s) && Ae(e, a);
    };

  function ti(e) {
    const { slidesGrid: t, params: i } = e,
      r = e.rtlTranslate ? e.translate : -e.translate;
    let s;
    for (let n = 0; n < t.length; n += 1)
      typeof t[n + 1] < 'u'
        ? r >= t[n] && r < t[n + 1] - (t[n + 1] - t[n]) / 2
          ? (s = n)
          : r >= t[n] && r < t[n + 1] && (s = n + 1)
        : r >= t[n] && (s = n);
    return i.normalizeSlideIndex && (s < 0 || typeof s > 'u') && (s = 0), s;
  }

  function ii(e) {
    const t = this,
      i = t.rtlTranslate ? t.translate : -t.translate,
      { snapGrid: r, params: s, activeIndex: n, realIndex: a, snapIndex: o } = t;
    let l = e,
      c;
    const p = (b) => {
      let h = b - t.virtual.slidesBefore;
      return (
        h < 0 && (h = t.virtual.slides.length + h), h >= t.virtual.slides.length && (h -= t.virtual.slides.length), h
      );
    };
    if ((typeof l > 'u' && (l = ti(t)), r.indexOf(i) >= 0)) c = r.indexOf(i);
    else {
      const b = Math.min(s.slidesPerGroupSkip, l);
      c = b + Math.floor((l - b) / s.slidesPerGroup);
    }
    if ((c >= r.length && (c = r.length - 1), l === n)) {
      c !== o && ((t.snapIndex = c), t.emit('snapIndexChange')),
        t.params.loop && t.virtual && t.params.virtual.enabled && (t.realIndex = p(l));
      return;
    }
    let u;
    t.virtual && s.virtual.enabled && s.loop
      ? (u = p(l))
      : t.slides[l]
      ? (u = parseInt(t.slides[l].getAttribute('data-swiper-slide-index') || l, 10))
      : (u = l),
      Object.assign(t, {
        previousSnapIndex: o,
        snapIndex: c,
        previousRealIndex: a,
        realIndex: u,
        previousIndex: n,
        activeIndex: l,
      }),
      t.initialized && xe(t),
      t.emit('activeIndexChange'),
      t.emit('snapIndexChange'),
      a !== u && t.emit('realIndexChange'),
      (t.initialized || t.params.runCallbacksOnInit) && t.emit('slideChange');
  }

  function ri(e) {
    const t = this,
      i = t.params,
      r = e.closest(`.${i.slideClass}, swiper-slide`);
    let s = !1,
      n;
    if (r) {
      for (let a = 0; a < t.slides.length; a += 1)
        if (t.slides[a] === r) {
          (s = !0), (n = a);
          break;
        }
    }
    if (r && s)
      (t.clickedSlide = r),
        t.virtual && t.params.virtual.enabled
          ? (t.clickedIndex = parseInt(r.getAttribute('data-swiper-slide-index'), 10))
          : (t.clickedIndex = n);
    else {
      (t.clickedSlide = void 0), (t.clickedIndex = void 0);
      return;
    }
    i.slideToClickedSlide && t.clickedIndex !== void 0 && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide();
  }

  const si = {
    updateSize: Wt,
    updateSlides: Xt,
    updateAutoHeight: Jt,
    updateSlidesOffset: Kt,
    updateSlidesProgress: Qt,
    updateProgress: Zt,
    updateSlidesClasses: ei,
    updateActiveIndex: ii,
    updateClickedSlide: ri,
  };

  function ni(e = this.isHorizontal() ? 'x' : 'y') {
    const t = this,
      { params: i, rtlTranslate: r, translate: s, wrapperEl: n } = t;
    if (i.virtualTranslate) return r ? -s : s;
    if (i.cssMode) return s;
    let a = Nt(n, e);
    return (a += t.cssOverflowAdjustment()), r && (a = -a), a || 0;
  }

  function ai(e, t) {
    const i = this,
      { rtlTranslate: r, params: s, wrapperEl: n, progress: a } = i;
    let o = 0,
      l = 0;
    const c = 0;
    i.isHorizontal() ? (o = r ? -e : e) : (l = e),
      s.roundLengths && ((o = Math.floor(o)), (l = Math.floor(l))),
      (i.previousTranslate = i.translate),
      (i.translate = i.isHorizontal() ? o : l),
      s.cssMode
        ? (n[i.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = i.isHorizontal() ? -o : -l)
        : s.virtualTranslate ||
          (i.isHorizontal() ? (o -= i.cssOverflowAdjustment()) : (l -= i.cssOverflowAdjustment()),
          (n.style.transform = `translate3d(${o}px, ${l}px, ${c}px)`));
    let p;
    const u = i.maxTranslate() - i.minTranslate();
    u === 0 ? (p = 0) : (p = (e - i.minTranslate()) / u),
      p !== a && i.updateProgress(e),
      i.emit('setTranslate', i.translate, t);
  }

  function oi() {
    return -this.snapGrid[0];
  }

  function li() {
    return -this.snapGrid[this.snapGrid.length - 1];
  }

  function ci(e = 0, t = this.params.speed, i = !0, r = !0, s) {
    const n = this,
      { params: a, wrapperEl: o } = n;
    if (n.animating && a.preventInteractionOnTransition) return !1;
    const l = n.minTranslate(),
      c = n.maxTranslate();
    let p;
    if ((r && e > l ? (p = l) : r && e < c ? (p = c) : (p = e), n.updateProgress(p), a.cssMode)) {
      const u = n.isHorizontal();
      if (t === 0) o[u ? 'scrollLeft' : 'scrollTop'] = -p;
      else {
        if (!n.support.smoothScroll) return He({ swiper: n, targetPosition: -p, side: u ? 'left' : 'top' }), !0;
        o.scrollTo({ [u ? 'left' : 'top']: -p, behavior: 'smooth' });
      }
      return !0;
    }
    return (
      t === 0
        ? (n.setTransition(0), n.setTranslate(p), i && (n.emit('beforeTransitionStart', t, s), n.emit('transitionEnd')))
        : (n.setTransition(t),
          n.setTranslate(p),
          i && (n.emit('beforeTransitionStart', t, s), n.emit('transitionStart')),
          n.animating ||
            ((n.animating = !0),
            n.onTranslateToWrapperTransitionEnd ||
              (n.onTranslateToWrapperTransitionEnd = function (b) {
                !n ||
                  n.destroyed ||
                  (b.target === this &&
                    (n.wrapperEl.removeEventListener('transitionend', n.onTranslateToWrapperTransitionEnd),
                    (n.onTranslateToWrapperTransitionEnd = null),
                    delete n.onTranslateToWrapperTransitionEnd,
                    i && n.emit('transitionEnd')));
              }),
            n.wrapperEl.addEventListener('transitionend', n.onTranslateToWrapperTransitionEnd))),
      !0
    );
  }

  const di = { getTranslate: ni, setTranslate: ai, minTranslate: oi, maxTranslate: li, translateTo: ci };

  function fi(e, t) {
    const i = this;
    i.params.cssMode || (i.wrapperEl.style.transitionDuration = `${e}ms`), i.emit('setTransition', e, t);
  }

  function Ye({ swiper: e, runCallbacks: t, direction: i, step: r }) {
    const { activeIndex: s, previousIndex: n } = e;
    let a = i;
    if ((a || (s > n ? (a = 'next') : s < n ? (a = 'prev') : (a = 'reset')), e.emit(`transition${r}`), t && s !== n)) {
      if (a === 'reset') {
        e.emit(`slideResetTransition${r}`);
        return;
      }
      e.emit(`slideChangeTransition${r}`),
        a === 'next' ? e.emit(`slideNextTransition${r}`) : e.emit(`slidePrevTransition${r}`);
    }
  }

  function ui(e = !0, t) {
    const i = this,
      { params: r } = i;
    r.cssMode ||
      (r.autoHeight && i.updateAutoHeight(), Ye({ swiper: i, runCallbacks: e, direction: t, step: 'Start' }));
  }

  function pi(e = !0, t) {
    const i = this,
      { params: r } = i;
    (i.animating = !1),
      !r.cssMode && (i.setTransition(0), Ye({ swiper: i, runCallbacks: e, direction: t, step: 'End' }));
  }

  const mi = { setTransition: fi, transitionStart: ui, transitionEnd: pi };

  function hi(e = 0, t = this.params.speed, i = !0, r, s) {
    typeof e == 'string' && (e = parseInt(e, 10));
    const n = this;
    let a = e;
    a < 0 && (a = 0);
    const {
      params: o,
      snapGrid: l,
      slidesGrid: c,
      previousIndex: p,
      activeIndex: u,
      rtlTranslate: b,
      wrapperEl: h,
      enabled: f,
    } = n;
    if ((n.animating && o.preventInteractionOnTransition) || (!f && !r && !s)) return !1;
    const g = Math.min(n.params.slidesPerGroupSkip, a);
    let A = g + Math.floor((a - g) / n.params.slidesPerGroup);
    A >= l.length && (A = l.length - 1);
    const d = -l[A];
    if (o.normalizeSlideIndex)
      for (let v = 0; v < c.length; v += 1) {
        const y = -Math.floor(d * 100),
          E = Math.floor(c[v] * 100),
          T = Math.floor(c[v + 1] * 100);
        typeof c[v + 1] < 'u'
          ? y >= E && y < T - (T - E) / 2
            ? (a = v)
            : y >= E && y < T && (a = v + 1)
          : y >= E && (a = v);
      }
    if (
      n.initialized &&
      a !== u &&
      ((!n.allowSlideNext && (b ? d > n.translate && d > n.minTranslate() : d < n.translate && d < n.minTranslate())) ||
        (!n.allowSlidePrev && d > n.translate && d > n.maxTranslate() && (u || 0) !== a))
    )
      return !1;
    a !== (p || 0) && i && n.emit('beforeSlideChangeStart'), n.updateProgress(d);
    let m;
    if (
      (a > u ? (m = 'next') : a < u ? (m = 'prev') : (m = 'reset'),
      (b && -d === n.translate) || (!b && d === n.translate))
    )
      return (
        n.updateActiveIndex(a),
        o.autoHeight && n.updateAutoHeight(),
        n.updateSlidesClasses(),
        o.effect !== 'slide' && n.setTranslate(d),
        m !== 'reset' && (n.transitionStart(i, m), n.transitionEnd(i, m)),
        !1
      );
    if (o.cssMode) {
      const v = n.isHorizontal(),
        y = b ? d : -d;
      if (t === 0) {
        const E = n.virtual && n.params.virtual.enabled;
        E && ((n.wrapperEl.style.scrollSnapType = 'none'), (n._immediateVirtual = !0)),
          E && !n._cssModeVirtualInitialSet && n.params.initialSlide > 0
            ? ((n._cssModeVirtualInitialSet = !0),
              requestAnimationFrame(() => {
                h[v ? 'scrollLeft' : 'scrollTop'] = y;
              }))
            : (h[v ? 'scrollLeft' : 'scrollTop'] = y),
          E &&
            requestAnimationFrame(() => {
              (n.wrapperEl.style.scrollSnapType = ''), (n._immediateVirtual = !1);
            });
      } else {
        if (!n.support.smoothScroll) return He({ swiper: n, targetPosition: y, side: v ? 'left' : 'top' }), !0;
        h.scrollTo({ [v ? 'left' : 'top']: y, behavior: 'smooth' });
      }
      return !0;
    }
    return (
      n.setTransition(t),
      n.setTranslate(d),
      n.updateActiveIndex(a),
      n.updateSlidesClasses(),
      n.emit('beforeTransitionStart', t, r),
      n.transitionStart(i, m),
      t === 0
        ? n.transitionEnd(i, m)
        : n.animating ||
          ((n.animating = !0),
          n.onSlideToWrapperTransitionEnd ||
            (n.onSlideToWrapperTransitionEnd = function (y) {
              !n ||
                n.destroyed ||
                (y.target === this &&
                  (n.wrapperEl.removeEventListener('transitionend', n.onSlideToWrapperTransitionEnd),
                  (n.onSlideToWrapperTransitionEnd = null),
                  delete n.onSlideToWrapperTransitionEnd,
                  n.transitionEnd(i, m)));
            }),
          n.wrapperEl.addEventListener('transitionend', n.onSlideToWrapperTransitionEnd)),
      !0
    );
  }

  function gi(e = 0, t = this.params.speed, i = !0, r) {
    typeof e == 'string' && (e = parseInt(e, 10));
    const s = this;
    let n = e;
    return (
      s.params.loop &&
        (s.virtual && s.params.virtual.enabled ? (n = n + s.virtual.slidesBefore) : (n = s.getSlideIndexByData(n))),
      s.slideTo(n, t, i, r)
    );
  }

  function wi(e = this.params.speed, t = !0, i) {
    const r = this,
      { enabled: s, params: n, animating: a } = r;
    if (!s) return r;
    let o = n.slidesPerGroup;
    n.slidesPerView === 'auto' &&
      n.slidesPerGroup === 1 &&
      n.slidesPerGroupAuto &&
      (o = Math.max(r.slidesPerViewDynamic('current', !0), 1));
    const l = r.activeIndex < n.slidesPerGroupSkip ? 1 : o,
      c = r.virtual && n.virtual.enabled;
    if (n.loop) {
      if (a && !c && n.loopPreventsSliding) return !1;
      r.loopFix({ direction: 'next' }), (r._clientLeft = r.wrapperEl.clientLeft);
    }
    return n.rewind && r.isEnd ? r.slideTo(0, e, t, i) : r.slideTo(r.activeIndex + l, e, t, i);
  }

  function bi(e = this.params.speed, t = !0, i) {
    const r = this,
      { params: s, snapGrid: n, slidesGrid: a, rtlTranslate: o, enabled: l, animating: c } = r;
    if (!l) return r;
    const p = r.virtual && s.virtual.enabled;
    if (s.loop) {
      if (c && !p && s.loopPreventsSliding) return !1;
      r.loopFix({ direction: 'prev' }), (r._clientLeft = r.wrapperEl.clientLeft);
    }
    const u = o ? r.translate : -r.translate;

    function b(d) {
      return d < 0 ? -Math.floor(Math.abs(d)) : Math.floor(d);
    }

    const h = b(u),
      f = n.map((d) => b(d));
    let g = n[f.indexOf(h) - 1];
    if (typeof g > 'u' && s.cssMode) {
      let d;
      n.forEach((m, v) => {
        h >= m && (d = v);
      }),
        typeof d < 'u' && (g = n[d > 0 ? d - 1 : d]);
    }
    let A = 0;
    if (
      (typeof g < 'u' &&
        ((A = a.indexOf(g)),
        A < 0 && (A = r.activeIndex - 1),
        s.slidesPerView === 'auto' &&
          s.slidesPerGroup === 1 &&
          s.slidesPerGroupAuto &&
          ((A = A - r.slidesPerViewDynamic('previous', !0) + 1), (A = Math.max(A, 0)))),
      s.rewind && r.isBeginning)
    ) {
      const d =
        r.params.virtual && r.params.virtual.enabled && r.virtual ? r.virtual.slides.length - 1 : r.slides.length - 1;
      return r.slideTo(d, e, t, i);
    }
    return r.slideTo(A, e, t, i);
  }

  function vi(e = this.params.speed, t = !0, i) {
    const r = this;
    return r.slideTo(r.activeIndex, e, t, i);
  }

  function yi(e = this.params.speed, t = !0, i, r = 0.5) {
    const s = this;
    let n = s.activeIndex;
    const a = Math.min(s.params.slidesPerGroupSkip, n),
      o = a + Math.floor((n - a) / s.params.slidesPerGroup),
      l = s.rtlTranslate ? s.translate : -s.translate;
    if (l >= s.snapGrid[o]) {
      const c = s.snapGrid[o],
        p = s.snapGrid[o + 1];
      l - c > (p - c) * r && (n += s.params.slidesPerGroup);
    } else {
      const c = s.snapGrid[o - 1],
        p = s.snapGrid[o];
      l - c <= (p - c) * r && (n -= s.params.slidesPerGroup);
    }
    return (n = Math.max(n, 0)), (n = Math.min(n, s.slidesGrid.length - 1)), s.slideTo(n, e, t, i);
  }

  function Ai() {
    const e = this,
      { params: t, slidesEl: i } = e,
      r = t.slidesPerView === 'auto' ? e.slidesPerViewDynamic() : t.slidesPerView;
    let s = e.clickedIndex,
      n;
    const a = e.isElement ? 'swiper-slide' : `.${t.slideClass}`;
    if (t.loop) {
      if (e.animating) return;
      (n = parseInt(e.clickedSlide.getAttribute('data-swiper-slide-index'), 10)),
        t.centeredSlides
          ? s < e.loopedSlides - r / 2 || s > e.slides.length - e.loopedSlides + r / 2
            ? (e.loopFix(),
              (s = e.getSlideIndex(F(i, `${a}[data-swiper-slide-index="${n}"]`)[0])),
              ge(() => {
                e.slideTo(s);
              }))
            : e.slideTo(s)
          : s > e.slides.length - r
          ? (e.loopFix(),
            (s = e.getSlideIndex(F(i, `${a}[data-swiper-slide-index="${n}"]`)[0])),
            ge(() => {
              e.slideTo(s);
            }))
          : e.slideTo(s);
    } else e.slideTo(s);
  }

  const xi = {
    slideTo: hi,
    slideToLoop: gi,
    slideNext: wi,
    slidePrev: bi,
    slideReset: vi,
    slideToClosest: yi,
    slideToClickedSlide: Ai,
  };

  function Si(e) {
    const t = this,
      { params: i, slidesEl: r } = t;
    if (!i.loop || (t.virtual && t.params.virtual.enabled)) return;
    F(r, `.${i.slideClass}, swiper-slide`).forEach((n, a) => {
      n.setAttribute('data-swiper-slide-index', a);
    }),
      t.loopFix({ slideRealIndex: e, direction: i.centeredSlides ? void 0 : 'next' });
  }

  function Ei({
    slideRealIndex: e,
    slideTo: t = !0,
    direction: i,
    setTranslate: r,
    activeSlideIndex: s,
    byController: n,
    byMousewheel: a,
  } = {}) {
    const o = this;
    if (!o.params.loop) return;
    o.emit('beforeLoopFix');
    const { slides: l, allowSlidePrev: c, allowSlideNext: p, slidesEl: u, params: b } = o;
    if (((o.allowSlidePrev = !0), (o.allowSlideNext = !0), o.virtual && b.virtual.enabled)) {
      t &&
        (!b.centeredSlides && o.snapIndex === 0
          ? o.slideTo(o.virtual.slides.length, 0, !1, !0)
          : b.centeredSlides && o.snapIndex < b.slidesPerView
          ? o.slideTo(o.virtual.slides.length + o.snapIndex, 0, !1, !0)
          : o.snapIndex === o.snapGrid.length - 1 && o.slideTo(o.virtual.slidesBefore, 0, !1, !0)),
        (o.allowSlidePrev = c),
        (o.allowSlideNext = p),
        o.emit('loopFix');
      return;
    }
    const h = b.slidesPerView === 'auto' ? o.slidesPerViewDynamic() : Math.ceil(parseFloat(b.slidesPerView, 10));
    let f = b.loopedSlides || h;
    f % b.slidesPerGroup !== 0 && (f += b.slidesPerGroup - (f % b.slidesPerGroup)), (o.loopedSlides = f);
    const g = [],
      A = [];
    let d = o.activeIndex;
    typeof s > 'u'
      ? (s = o.getSlideIndex(o.slides.filter((T) => T.classList.contains(b.slideActiveClass))[0]))
      : (d = s);
    const m = i === 'next' || !i,
      v = i === 'prev' || !i;
    let y = 0,
      E = 0;
    if (s < f) {
      y = Math.max(f - s, b.slidesPerGroup);
      for (let T = 0; T < f - s; T += 1) {
        const z = T - Math.floor(T / l.length) * l.length;
        g.push(l.length - z - 1);
      }
    } else if (s > o.slides.length - f * 2) {
      E = Math.max(s - (o.slides.length - f * 2), b.slidesPerGroup);
      for (let T = 0; T < E; T += 1) {
        const z = T - Math.floor(T / l.length) * l.length;
        A.push(z);
      }
    }
    if (
      (v &&
        g.forEach((T) => {
          (o.slides[T].swiperLoopMoveDOM = !0), u.prepend(o.slides[T]), (o.slides[T].swiperLoopMoveDOM = !1);
        }),
      m &&
        A.forEach((T) => {
          (o.slides[T].swiperLoopMoveDOM = !0), u.append(o.slides[T]), (o.slides[T].swiperLoopMoveDOM = !1);
        }),
      o.recalcSlides(),
      b.slidesPerView === 'auto' && o.updateSlides(),
      b.watchSlidesProgress && o.updateSlidesOffset(),
      t)
    ) {
      if (g.length > 0 && v)
        if (typeof e > 'u') {
          const T = o.slidesGrid[d],
            P = o.slidesGrid[d + y] - T;
          a
            ? o.setTranslate(o.translate - P)
            : (o.slideTo(d + y, 0, !1, !0), r && (o.touches[o.isHorizontal() ? 'startX' : 'startY'] += P));
        } else r && o.slideToLoop(e, 0, !1, !0);
      else if (A.length > 0 && m)
        if (typeof e > 'u') {
          const T = o.slidesGrid[d],
            P = o.slidesGrid[d - E] - T;
          a
            ? o.setTranslate(o.translate - P)
            : (o.slideTo(d - E, 0, !1, !0), r && (o.touches[o.isHorizontal() ? 'startX' : 'startY'] += P));
        } else o.slideToLoop(e, 0, !1, !0);
    }
    if (((o.allowSlidePrev = c), (o.allowSlideNext = p), o.controller && o.controller.control && !n)) {
      const T = {
        slideRealIndex: e,
        slideTo: !1,
        direction: i,
        setTranslate: r,
        activeSlideIndex: s,
        byController: !0,
      };
      Array.isArray(o.controller.control)
        ? o.controller.control.forEach((z) => {
            !z.destroyed && z.params.loop && z.loopFix(T);
          })
        : o.controller.control instanceof o.constructor &&
          o.controller.control.params.loop &&
          o.controller.control.loopFix(T);
    }
    o.emit('loopFix');
  }

  function Ti() {
    const e = this,
      { params: t, slidesEl: i } = e;
    if (!t.loop || (e.virtual && e.params.virtual.enabled)) return;
    e.recalcSlides();
    const r = [];
    e.slides.forEach((s) => {
      const n = typeof s.swiperSlideIndex > 'u' ? s.getAttribute('data-swiper-slide-index') * 1 : s.swiperSlideIndex;
      r[n] = s;
    }),
      e.slides.forEach((s) => {
        s.removeAttribute('data-swiper-slide-index');
      }),
      r.forEach((s) => {
        i.append(s);
      }),
      e.recalcSlides(),
      e.slideTo(e.realIndex, 0);
  }

  const Ci = { loopCreate: Si, loopFix: Ei, loopDestroy: Ti };

  function ki(e) {
    const t = this;
    if (!t.params.simulateTouch || (t.params.watchOverflow && t.isLocked) || t.params.cssMode) return;
    const i = t.params.touchEventsTarget === 'container' ? t.el : t.wrapperEl;
    t.isElement && (t.__preventObserver__ = !0),
      (i.style.cursor = 'move'),
      (i.style.cursor = e ? 'grabbing' : 'grab'),
      t.isElement &&
        requestAnimationFrame(() => {
          t.__preventObserver__ = !1;
        });
  }

  function Pi() {
    const e = this;
    (e.params.watchOverflow && e.isLocked) ||
      e.params.cssMode ||
      (e.isElement && (e.__preventObserver__ = !0),
      (e[e.params.touchEventsTarget === 'container' ? 'el' : 'wrapperEl'].style.cursor = ''),
      e.isElement &&
        requestAnimationFrame(() => {
          e.__preventObserver__ = !1;
        }));
  }

  const Oi = { setGrabCursor: ki, unsetGrabCursor: Pi };

  function Mi(e, t = this) {
    function i(r) {
      if (!r || r === Y() || r === I()) return null;
      r.assignedSlot && (r = r.assignedSlot);
      const s = r.closest(e);
      return !s && !r.getRootNode ? null : s || i(r.getRootNode().host);
    }

    return i(t);
  }

  function Li(e) {
    const t = this,
      i = Y(),
      r = I(),
      s = t.touchEventsData;
    s.evCache.push(e);
    const { params: n, touches: a, enabled: o } = t;
    if (!o || (!n.simulateTouch && e.pointerType === 'mouse') || (t.animating && n.preventInteractionOnTransition))
      return;
    !t.animating && n.cssMode && n.loop && t.loopFix();
    let l = e;
    l.originalEvent && (l = l.originalEvent);
    let c = l.target;
    if (
      (n.touchEventsTarget === 'wrapper' && !t.wrapperEl.contains(c)) ||
      ('which' in l && l.which === 3) ||
      ('button' in l && l.button > 0) ||
      (s.isTouched && s.isMoved)
    )
      return;
    const p = !!n.noSwipingClass && n.noSwipingClass !== '',
      u = e.composedPath ? e.composedPath() : e.path;
    p && l.target && l.target.shadowRoot && u && (c = u[0]);
    const b = n.noSwipingSelector ? n.noSwipingSelector : `.${n.noSwipingClass}`,
      h = !!(l.target && l.target.shadowRoot);
    if (n.noSwiping && (h ? Mi(b, c) : c.closest(b))) {
      t.allowClick = !0;
      return;
    }
    if (n.swipeHandler && !c.closest(n.swipeHandler)) return;
    (a.currentX = l.pageX), (a.currentY = l.pageY);
    const f = a.currentX,
      g = a.currentY,
      A = n.edgeSwipeDetection || n.iOSEdgeSwipeDetection,
      d = n.edgeSwipeThreshold || n.iOSEdgeSwipeThreshold;
    if (A && (f <= d || f >= r.innerWidth - d))
      if (A === 'prevent') e.preventDefault();
      else return;
    Object.assign(s, {
      isTouched: !0,
      isMoved: !1,
      allowTouchCallbacks: !0,
      isScrolling: void 0,
      startMoving: void 0,
    }),
      (a.startX = f),
      (a.startY = g),
      (s.touchStartTime = Z()),
      (t.allowClick = !0),
      t.updateSize(),
      (t.swipeDirection = void 0),
      n.threshold > 0 && (s.allowThresholdMove = !1);
    let m = !0;
    c.matches(s.focusableElements) && ((m = !1), c.nodeName === 'SELECT' && (s.isTouched = !1)),
      i.activeElement &&
        i.activeElement.matches(s.focusableElements) &&
        i.activeElement !== c &&
        i.activeElement.blur();
    const v = m && t.allowTouchMove && n.touchStartPreventDefault;
    (n.touchStartForcePreventDefault || v) && !c.isContentEditable && l.preventDefault(),
      n.freeMode && n.freeMode.enabled && t.freeMode && t.animating && !n.cssMode && t.freeMode.onTouchStart(),
      t.emit('touchStart', l);
  }

  function zi(e) {
    const t = Y(),
      i = this,
      r = i.touchEventsData,
      { params: s, touches: n, rtlTranslate: a, enabled: o } = i;
    if (!o || (!s.simulateTouch && e.pointerType === 'mouse')) return;
    let l = e;
    if ((l.originalEvent && (l = l.originalEvent), !r.isTouched)) {
      r.startMoving && r.isScrolling && i.emit('touchMoveOpposite', l);
      return;
    }
    const c = r.evCache.findIndex((T) => T.pointerId === l.pointerId);
    c >= 0 && (r.evCache[c] = l);
    const p = r.evCache.length > 1 ? r.evCache[0] : l,
      u = p.pageX,
      b = p.pageY;
    if (l.preventedByNestedSwiper) {
      (n.startX = u), (n.startY = b);
      return;
    }
    if (!i.allowTouchMove) {
      l.target.matches(r.focusableElements) || (i.allowClick = !1),
        r.isTouched &&
          (Object.assign(n, {
            startX: u,
            startY: b,
            prevX: i.touches.currentX,
            prevY: i.touches.currentY,
            currentX: u,
            currentY: b,
          }),
          (r.touchStartTime = Z()));
      return;
    }
    if (s.touchReleaseOnEdges && !s.loop) {
      if (i.isVertical()) {
        if ((b < n.startY && i.translate <= i.maxTranslate()) || (b > n.startY && i.translate >= i.minTranslate())) {
          (r.isTouched = !1), (r.isMoved = !1);
          return;
        }
      } else if ((u < n.startX && i.translate <= i.maxTranslate()) || (u > n.startX && i.translate >= i.minTranslate()))
        return;
    }
    if (t.activeElement && l.target === t.activeElement && l.target.matches(r.focusableElements)) {
      (r.isMoved = !0), (i.allowClick = !1);
      return;
    }
    if ((r.allowTouchCallbacks && i.emit('touchMove', l), l.targetTouches && l.targetTouches.length > 1)) return;
    (n.currentX = u), (n.currentY = b);
    const h = n.currentX - n.startX,
      f = n.currentY - n.startY;
    if (i.params.threshold && Math.sqrt(h ** 2 + f ** 2) < i.params.threshold) return;
    if (typeof r.isScrolling > 'u') {
      let T;
      (i.isHorizontal() && n.currentY === n.startY) || (i.isVertical() && n.currentX === n.startX)
        ? (r.isScrolling = !1)
        : h * h + f * f >= 25 &&
          ((T = (Math.atan2(Math.abs(f), Math.abs(h)) * 180) / Math.PI),
          (r.isScrolling = i.isHorizontal() ? T > s.touchAngle : 90 - T > s.touchAngle));
    }
    if (
      (r.isScrolling && i.emit('touchMoveOpposite', l),
      typeof r.startMoving > 'u' && (n.currentX !== n.startX || n.currentY !== n.startY) && (r.startMoving = !0),
      r.isScrolling || (i.zoom && i.params.zoom && i.params.zoom.enabled && r.evCache.length > 1))
    ) {
      r.isTouched = !1;
      return;
    }
    if (!r.startMoving) return;
    (i.allowClick = !1),
      !s.cssMode && l.cancelable && l.preventDefault(),
      s.touchMoveStopPropagation && !s.nested && l.stopPropagation();
    let g = i.isHorizontal() ? h : f,
      A = i.isHorizontal() ? n.currentX - n.previousX : n.currentY - n.previousY;
    s.oneWayMovement && ((g = Math.abs(g) * (a ? 1 : -1)), (A = Math.abs(A) * (a ? 1 : -1))),
      (n.diff = g),
      (g *= s.touchRatio),
      a && ((g = -g), (A = -A));
    const d = i.touchesDirection;
    (i.swipeDirection = g > 0 ? 'prev' : 'next'), (i.touchesDirection = A > 0 ? 'prev' : 'next');
    const m = i.params.loop && !s.cssMode;
    if (!r.isMoved) {
      if (
        (m && i.loopFix({ direction: i.swipeDirection }),
        (r.startTranslate = i.getTranslate()),
        i.setTransition(0),
        i.animating)
      ) {
        const T = new window.CustomEvent('transitionend', { bubbles: !0, cancelable: !0 });
        i.wrapperEl.dispatchEvent(T);
      }
      (r.allowMomentumBounce = !1),
        s.grabCursor && (i.allowSlideNext === !0 || i.allowSlidePrev === !0) && i.setGrabCursor(!0),
        i.emit('sliderFirstMove', l);
    }
    let v;
    r.isMoved &&
      d !== i.touchesDirection &&
      m &&
      Math.abs(g) >= 1 &&
      (i.loopFix({
        direction: i.swipeDirection,
        setTranslate: !0,
      }),
      (v = !0)),
      i.emit('sliderMove', l),
      (r.isMoved = !0),
      (r.currentTranslate = g + r.startTranslate);
    let y = !0,
      E = s.resistanceRatio;
    if (
      (s.touchReleaseOnEdges && (E = 0),
      g > 0
        ? (m &&
            !v &&
            r.currentTranslate > (s.centeredSlides ? i.minTranslate() - i.size / 2 : i.minTranslate()) &&
            i.loopFix({
              direction: 'prev',
              setTranslate: !0,
              activeSlideIndex: 0,
            }),
          r.currentTranslate > i.minTranslate() &&
            ((y = !1),
            s.resistance &&
              (r.currentTranslate = i.minTranslate() - 1 + (-i.minTranslate() + r.startTranslate + g) ** E)))
        : g < 0 &&
          (m &&
            !v &&
            r.currentTranslate < (s.centeredSlides ? i.maxTranslate() + i.size / 2 : i.maxTranslate()) &&
            i.loopFix({
              direction: 'next',
              setTranslate: !0,
              activeSlideIndex:
                i.slides.length -
                (s.slidesPerView === 'auto' ? i.slidesPerViewDynamic() : Math.ceil(parseFloat(s.slidesPerView, 10))),
            }),
          r.currentTranslate < i.maxTranslate() &&
            ((y = !1),
            s.resistance &&
              (r.currentTranslate = i.maxTranslate() + 1 - (i.maxTranslate() - r.startTranslate - g) ** E))),
      y && (l.preventedByNestedSwiper = !0),
      !i.allowSlideNext &&
        i.swipeDirection === 'next' &&
        r.currentTranslate < r.startTranslate &&
        (r.currentTranslate = r.startTranslate),
      !i.allowSlidePrev &&
        i.swipeDirection === 'prev' &&
        r.currentTranslate > r.startTranslate &&
        (r.currentTranslate = r.startTranslate),
      !i.allowSlidePrev && !i.allowSlideNext && (r.currentTranslate = r.startTranslate),
      s.threshold > 0)
    )
      if (Math.abs(g) > s.threshold || r.allowThresholdMove) {
        if (!r.allowThresholdMove) {
          (r.allowThresholdMove = !0),
            (n.startX = n.currentX),
            (n.startY = n.currentY),
            (r.currentTranslate = r.startTranslate),
            (n.diff = i.isHorizontal() ? n.currentX - n.startX : n.currentY - n.startY);
          return;
        }
      } else {
        r.currentTranslate = r.startTranslate;
        return;
      }
    !s.followFinger ||
      s.cssMode ||
      (((s.freeMode && s.freeMode.enabled && i.freeMode) || s.watchSlidesProgress) &&
        (i.updateActiveIndex(), i.updateSlidesClasses()),
      s.freeMode && s.freeMode.enabled && i.freeMode && i.freeMode.onTouchMove(),
      i.updateProgress(r.currentTranslate),
      i.setTranslate(r.currentTranslate));
  }

  function Bi(e) {
    const t = this,
      i = t.touchEventsData,
      r = i.evCache.findIndex((v) => v.pointerId === e.pointerId);
    if (
      (r >= 0 && i.evCache.splice(r, 1),
      ['pointercancel', 'pointerout', 'pointerleave'].includes(e.type) &&
        !(e.type === 'pointercancel' && (t.browser.isSafari || t.browser.isWebView)))
    )
      return;
    const { params: s, touches: n, rtlTranslate: a, slidesGrid: o, enabled: l } = t;
    if (!l || (!s.simulateTouch && e.pointerType === 'mouse')) return;
    let c = e;
    if (
      (c.originalEvent && (c = c.originalEvent),
      i.allowTouchCallbacks && t.emit('touchEnd', c),
      (i.allowTouchCallbacks = !1),
      !i.isTouched)
    ) {
      i.isMoved && s.grabCursor && t.setGrabCursor(!1), (i.isMoved = !1), (i.startMoving = !1);
      return;
    }
    s.grabCursor &&
      i.isMoved &&
      i.isTouched &&
      (t.allowSlideNext === !0 || t.allowSlidePrev === !0) &&
      t.setGrabCursor(!1);
    const p = Z(),
      u = p - i.touchStartTime;
    if (t.allowClick) {
      const v = c.path || (c.composedPath && c.composedPath());
      t.updateClickedSlide((v && v[0]) || c.target),
        t.emit('tap click', c),
        u < 300 && p - i.lastClickTime < 300 && t.emit('doubleTap doubleClick', c);
    }
    if (
      ((i.lastClickTime = Z()),
      ge(() => {
        t.destroyed || (t.allowClick = !0);
      }),
      !i.isTouched || !i.isMoved || !t.swipeDirection || n.diff === 0 || i.currentTranslate === i.startTranslate)
    ) {
      (i.isTouched = !1), (i.isMoved = !1), (i.startMoving = !1);
      return;
    }
    (i.isTouched = !1), (i.isMoved = !1), (i.startMoving = !1);
    let b;
    if ((s.followFinger ? (b = a ? t.translate : -t.translate) : (b = -i.currentTranslate), s.cssMode)) return;
    if (s.freeMode && s.freeMode.enabled) {
      t.freeMode.onTouchEnd({ currentPos: b });
      return;
    }
    let h = 0,
      f = t.slidesSizesGrid[0];
    for (let v = 0; v < o.length; v += v < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup) {
      const y = v < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
      typeof o[v + y] < 'u'
        ? b >= o[v] && b < o[v + y] && ((h = v), (f = o[v + y] - o[v]))
        : b >= o[v] && ((h = v), (f = o[o.length - 1] - o[o.length - 2]));
    }
    let g = null,
      A = null;
    s.rewind &&
      (t.isBeginning
        ? (A = s.virtual && s.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1)
        : t.isEnd && (g = 0));
    const d = (b - o[h]) / f,
      m = h < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
    if (u > s.longSwipesMs) {
      if (!s.longSwipes) {
        t.slideTo(t.activeIndex);
        return;
      }
      t.swipeDirection === 'next' &&
        (d >= s.longSwipesRatio ? t.slideTo(s.rewind && t.isEnd ? g : h + m) : t.slideTo(h)),
        t.swipeDirection === 'prev' &&
          (d > 1 - s.longSwipesRatio
            ? t.slideTo(h + m)
            : A !== null && d < 0 && Math.abs(d) > s.longSwipesRatio
            ? t.slideTo(A)
            : t.slideTo(h));
    } else {
      if (!s.shortSwipes) {
        t.slideTo(t.activeIndex);
        return;
      }
      t.navigation && (c.target === t.navigation.nextEl || c.target === t.navigation.prevEl)
        ? c.target === t.navigation.nextEl
          ? t.slideTo(h + m)
          : t.slideTo(h)
        : (t.swipeDirection === 'next' && t.slideTo(g !== null ? g : h + m),
          t.swipeDirection === 'prev' && t.slideTo(A !== null ? A : h));
    }
  }

  function Ue() {
    const e = this,
      { params: t, el: i } = e;
    if (i && i.offsetWidth === 0) return;
    t.breakpoints && e.setBreakpoint();
    const { allowSlideNext: r, allowSlidePrev: s, snapGrid: n } = e,
      a = e.virtual && e.params.virtual.enabled;
    (e.allowSlideNext = !0), (e.allowSlidePrev = !0), e.updateSize(), e.updateSlides(), e.updateSlidesClasses();
    const o = a && t.loop;
    (t.slidesPerView === 'auto' || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides && !o
      ? e.slideTo(e.slides.length - 1, 0, !1, !0)
      : e.params.loop && !a
      ? e.slideToLoop(e.realIndex, 0, !1, !0)
      : e.slideTo(e.activeIndex, 0, !1, !0),
      e.autoplay &&
        e.autoplay.running &&
        e.autoplay.paused &&
        (clearTimeout(e.autoplay.resizeTimeout),
        (e.autoplay.resizeTimeout = setTimeout(() => {
          e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume();
        }, 500))),
      (e.allowSlidePrev = s),
      (e.allowSlideNext = r),
      e.params.watchOverflow && n !== e.snapGrid && e.checkOverflow();
  }

  function Ii(e) {
    const t = this;
    t.enabled &&
      (t.allowClick ||
        (t.params.preventClicks && e.preventDefault(),
        t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())));
  }

  function Ri() {
    const e = this,
      { wrapperEl: t, rtlTranslate: i, enabled: r } = e;
    if (!r) return;
    (e.previousTranslate = e.translate),
      e.isHorizontal() ? (e.translate = -t.scrollLeft) : (e.translate = -t.scrollTop),
      e.translate === 0 && (e.translate = 0),
      e.updateActiveIndex(),
      e.updateSlidesClasses();
    let s;
    const n = e.maxTranslate() - e.minTranslate();
    n === 0 ? (s = 0) : (s = (e.translate - e.minTranslate()) / n),
      s !== e.progress && e.updateProgress(i ? -e.translate : e.translate),
      e.emit('setTranslate', e.translate, !1);
  }

  function Ni(e) {
    const t = this;
    re(t, e.target), !(t.params.cssMode || (t.params.slidesPerView !== 'auto' && !t.params.autoHeight)) && t.update();
  }

  let qe = !1;

  function Di() {}

  const We = (e, t) => {
    const i = Y(),
      { params: r, el: s, wrapperEl: n, device: a } = e,
      o = !!r.nested,
      l = t === 'on' ? 'addEventListener' : 'removeEventListener',
      c = t;
    s[l]('pointerdown', e.onTouchStart, { passive: !1 }),
      i[l]('pointermove', e.onTouchMove, {
        passive: !1,
        capture: o,
      }),
      i[l]('pointerup', e.onTouchEnd, { passive: !0 }),
      i[l]('pointercancel', e.onTouchEnd, { passive: !0 }),
      i[l]('pointerout', e.onTouchEnd, { passive: !0 }),
      i[l]('pointerleave', e.onTouchEnd, { passive: !0 }),
      (r.preventClicks || r.preventClicksPropagation) && s[l]('click', e.onClick, !0),
      r.cssMode && n[l]('scroll', e.onScroll),
      r.updateOnWindowResize
        ? e[c](a.ios || a.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', Ue, !0)
        : e[c]('observerUpdate', Ue, !0),
      s[l]('load', e.onLoad, { capture: !0 });
  };

  function Fi() {
    const e = this,
      t = Y(),
      { params: i } = e;
    (e.onTouchStart = Li.bind(e)),
      (e.onTouchMove = zi.bind(e)),
      (e.onTouchEnd = Bi.bind(e)),
      i.cssMode && (e.onScroll = Ri.bind(e)),
      (e.onClick = Ii.bind(e)),
      (e.onLoad = Ni.bind(e)),
      qe || (t.addEventListener('touchstart', Di), (qe = !0)),
      We(e, 'on');
  }

  function Gi() {
    We(this, 'off');
  }

  const _i = { attachEvents: Fi, detachEvents: Gi },
    Xe = (e, t) => e.grid && t.grid && t.grid.rows > 1;

  function Hi() {
    const e = this,
      { realIndex: t, initialized: i, params: r, el: s } = e,
      n = r.breakpoints;
    if (!n || (n && Object.keys(n).length === 0)) return;
    const a = e.getBreakpoint(n, e.params.breakpointsBase, e.el);
    if (!a || e.currentBreakpoint === a) return;
    const l = (a in n ? n[a] : void 0) || e.originalParams,
      c = Xe(e, r),
      p = Xe(e, l),
      u = r.enabled;
    c && !p
      ? (s.classList.remove(`${r.containerModifierClass}grid`, `${r.containerModifierClass}grid-column`),
        e.emitContainerClasses())
      : !c &&
        p &&
        (s.classList.add(`${r.containerModifierClass}grid`),
        ((l.grid.fill && l.grid.fill === 'column') || (!l.grid.fill && r.grid.fill === 'column')) &&
          s.classList.add(`${r.containerModifierClass}grid-column`),
        e.emitContainerClasses()),
      ['navigation', 'pagination', 'scrollbar'].forEach((g) => {
        if (typeof l[g] > 'u') return;
        const A = r[g] && r[g].enabled,
          d = l[g] && l[g].enabled;
        A && !d && e[g].disable(), !A && d && e[g].enable();
      });
    const b = l.direction && l.direction !== r.direction,
      h = r.loop && (l.slidesPerView !== r.slidesPerView || b);
    b && i && e.changeDirection(), R(e.params, l);
    const f = e.params.enabled;
    Object.assign(e, {
      allowTouchMove: e.params.allowTouchMove,
      allowSlideNext: e.params.allowSlideNext,
      allowSlidePrev: e.params.allowSlidePrev,
    }),
      u && !f ? e.disable() : !u && f && e.enable(),
      (e.currentBreakpoint = a),
      e.emit('_beforeBreakpoint', l),
      h && i && (e.loopDestroy(), e.loopCreate(t), e.updateSlides()),
      e.emit('breakpoint', l);
  }

  function ji(e, t = 'window', i) {
    if (!e || (t === 'container' && !i)) return;
    let r = !1;
    const s = I(),
      n = t === 'window' ? s.innerHeight : i.clientHeight,
      a = Object.keys(e).map((o) => {
        if (typeof o == 'string' && o.indexOf('@') === 0) {
          const l = parseFloat(o.substr(1));
          return { value: n * l, point: o };
        }
        return { value: o, point: o };
      });
    a.sort((o, l) => parseInt(o.value, 10) - parseInt(l.value, 10));
    for (let o = 0; o < a.length; o += 1) {
      const { point: l, value: c } = a[o];
      t === 'window' ? s.matchMedia(`(min-width: ${c}px)`).matches && (r = l) : c <= i.clientWidth && (r = l);
    }
    return r || 'max';
  }

  const $i = { setBreakpoint: Hi, getBreakpoint: ji };

  function Vi(e, t) {
    const i = [];
    return (
      e.forEach((r) => {
        typeof r == 'object'
          ? Object.keys(r).forEach((s) => {
              r[s] && i.push(t + s);
            })
          : typeof r == 'string' && i.push(t + r);
      }),
      i
    );
  }

  function Yi() {
    const e = this,
      { classNames: t, params: i, rtl: r, el: s, device: n } = e,
      a = Vi(
        [
          'initialized',
          i.direction,
          { 'free-mode': e.params.freeMode && i.freeMode.enabled },
          { autoheight: i.autoHeight },
          { rtl: r },
          { grid: i.grid && i.grid.rows > 1 },
          { 'grid-column': i.grid && i.grid.rows > 1 && i.grid.fill === 'column' },
          { android: n.android },
          { ios: n.ios },
          { 'css-mode': i.cssMode },
          { centered: i.cssMode && i.centeredSlides },
          { 'watch-progress': i.watchSlidesProgress },
        ],
        i.containerModifierClass,
      );
    t.push(...a), s.classList.add(...t), e.emitContainerClasses();
  }

  function Ui() {
    const e = this,
      { el: t, classNames: i } = e;
    t.classList.remove(...i), e.emitContainerClasses();
  }

  const qi = { addClasses: Yi, removeClasses: Ui };

  function Wi() {
    const e = this,
      { isLocked: t, params: i } = e,
      { slidesOffsetBefore: r } = i;
    if (r) {
      const s = e.slides.length - 1,
        n = e.slidesGrid[s] + e.slidesSizesGrid[s] + r * 2;
      e.isLocked = e.size > n;
    } else e.isLocked = e.snapGrid.length === 1;
    i.allowSlideNext === !0 && (e.allowSlideNext = !e.isLocked),
      i.allowSlidePrev === !0 && (e.allowSlidePrev = !e.isLocked),
      t && t !== e.isLocked && (e.isEnd = !1),
      t !== e.isLocked && e.emit(e.isLocked ? 'lock' : 'unlock');
  }

  const Xi = { checkOverflow: Wi },
    Je = {
      init: !0,
      direction: 'horizontal',
      oneWayMovement: !1,
      touchEventsTarget: 'wrapper',
      initialSlide: 0,
      speed: 300,
      cssMode: !1,
      updateOnWindowResize: !0,
      resizeObserver: !0,
      nested: !1,
      createElements: !1,
      enabled: !0,
      focusableElements: 'input, select, option, textarea, button, video, label',
      width: null,
      height: null,
      preventInteractionOnTransition: !1,
      userAgent: null,
      url: null,
      edgeSwipeDetection: !1,
      edgeSwipeThreshold: 20,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: 'slide',
      breakpoints: void 0,
      breakpointsBase: 'window',
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerGroup: 1,
      slidesPerGroupSkip: 0,
      slidesPerGroupAuto: !1,
      centeredSlides: !1,
      centeredSlidesBounds: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      centerInsufficientSlides: !1,
      watchOverflow: !0,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: 0.5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 5,
      touchMoveStopPropagation: !1,
      touchStartPreventDefault: !0,
      touchStartForcePreventDefault: !1,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: 0.85,
      watchSlidesProgress: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      loop: !1,
      loopedSlides: null,
      loopPreventsSliding: !0,
      rewind: !1,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: 'swiper-no-swiping',
      noSwipingSelector: null,
      passiveListeners: !0,
      maxBackfaceHiddenSlides: 10,
      containerModifierClass: 'swiper-',
      slideClass: 'swiper-slide',
      slideActiveClass: 'swiper-slide-active',
      slideVisibleClass: 'swiper-slide-visible',
      slideNextClass: 'swiper-slide-next',
      slidePrevClass: 'swiper-slide-prev',
      wrapperClass: 'swiper-wrapper',
      lazyPreloaderClass: 'swiper-lazy-preloader',
      lazyPreloadPrevNext: 0,
      runCallbacksOnInit: !0,
      _emitClasses: !1,
    };

  function Ji(e, t) {
    return function (r = {}) {
      const s = Object.keys(r)[0],
        n = r[s];
      if (typeof n != 'object' || n === null) {
        R(t, r);
        return;
      }
      if (
        (['navigation', 'pagination', 'scrollbar'].indexOf(s) >= 0 && e[s] === !0 && (e[s] = { auto: !0 }),
        !(s in e && 'enabled' in n))
      ) {
        R(t, r);
        return;
      }
      e[s] === !0 && (e[s] = { enabled: !0 }),
        typeof e[s] == 'object' && !('enabled' in e[s]) && (e[s].enabled = !0),
        e[s] || (e[s] = { enabled: !1 }),
        R(t, r);
    };
  }

  const Se = {
      eventsEmitter: qt,
      update: si,
      translate: di,
      transition: mi,
      slide: xi,
      loop: Ci,
      grabCursor: Oi,
      events: _i,
      breakpoints: $i,
      checkOverflow: Xi,
      classes: qi,
    },
    Ee = {};

  class N {
    constructor(...t) {
      let i, r;
      t.length === 1 && t[0].constructor && Object.prototype.toString.call(t[0]).slice(8, -1) === 'Object'
        ? (r = t[0])
        : ([i, r] = t),
        r || (r = {}),
        (r = R({}, r)),
        i && !r.el && (r.el = i);
      const s = Y();
      if (r.el && typeof r.el == 'string' && s.querySelectorAll(r.el).length > 1) {
        const l = [];
        return (
          s.querySelectorAll(r.el).forEach((c) => {
            const p = R({}, r, { el: c });
            l.push(new N(p));
          }),
          l
        );
      }
      const n = this;
      (n.__swiper__ = !0),
        (n.support = Ve()),
        (n.device = jt({ userAgent: r.userAgent })),
        (n.browser = Vt()),
        (n.eventsListeners = {}),
        (n.eventsAnyListeners = []),
        (n.modules = [...n.__modules__]),
        r.modules && Array.isArray(r.modules) && n.modules.push(...r.modules);
      const a = {};
      n.modules.forEach((l) => {
        l({
          params: r,
          swiper: n,
          extendParams: Ji(r, a),
          on: n.on.bind(n),
          once: n.once.bind(n),
          off: n.off.bind(n),
          emit: n.emit.bind(n),
        });
      });
      const o = R({}, Je, a);
      return (
        (n.params = R({}, o, Ee, r)),
        (n.originalParams = R({}, n.params)),
        (n.passedParams = R({}, r)),
        n.params &&
          n.params.on &&
          Object.keys(n.params.on).forEach((l) => {
            n.on(l, n.params.on[l]);
          }),
        n.params && n.params.onAny && n.onAny(n.params.onAny),
        Object.assign(n, {
          enabled: n.params.enabled,
          el: i,
          classNames: [],
          slides: [],
          slidesGrid: [],
          snapGrid: [],
          slidesSizesGrid: [],
          isHorizontal() {
            return n.params.direction === 'horizontal';
          },
          isVertical() {
            return n.params.direction === 'vertical';
          },
          activeIndex: 0,
          realIndex: 0,
          isBeginning: !0,
          isEnd: !1,
          translate: 0,
          previousTranslate: 0,
          progress: 0,
          velocity: 0,
          animating: !1,
          cssOverflowAdjustment() {
            return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
          },
          allowSlideNext: n.params.allowSlideNext,
          allowSlidePrev: n.params.allowSlidePrev,
          touchEventsData: {
            isTouched: void 0,
            isMoved: void 0,
            allowTouchCallbacks: void 0,
            touchStartTime: void 0,
            isScrolling: void 0,
            currentTranslate: void 0,
            startTranslate: void 0,
            allowThresholdMove: void 0,
            focusableElements: n.params.focusableElements,
            lastClickTime: 0,
            clickTimeout: void 0,
            velocities: [],
            allowMomentumBounce: void 0,
            startMoving: void 0,
            evCache: [],
          },
          allowClick: !0,
          allowTouchMove: n.params.allowTouchMove,
          touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
          imagesToLoad: [],
          imagesLoaded: 0,
        }),
        n.emit('_swiper'),
        n.params.init && n.init(),
        n
      );
    }

    static get extendedDefaults() {
      return Ee;
    }

    static get defaults() {
      return Je;
    }

    static extendDefaults(t) {
      R(Ee, t);
    }

    static installModule(t) {
      N.prototype.__modules__ || (N.prototype.__modules__ = []);
      const i = N.prototype.__modules__;
      typeof t == 'function' && i.indexOf(t) < 0 && i.push(t);
    }

    static use(t) {
      return Array.isArray(t) ? (t.forEach((i) => N.installModule(i)), N) : (N.installModule(t), N);
    }

    getSlideIndex(t) {
      const { slidesEl: i, params: r } = this,
        s = F(i, `.${r.slideClass}, swiper-slide`),
        n = ie(s[0]);
      return ie(t) - n;
    }

    getSlideIndexByData(t) {
      return this.getSlideIndex(this.slides.filter((i) => i.getAttribute('data-swiper-slide-index') * 1 === t)[0]);
    }

    recalcSlides() {
      const t = this,
        { slidesEl: i, params: r } = t;
      t.slides = F(i, `.${r.slideClass}, swiper-slide`);
    }

    enable() {
      const t = this;
      t.enabled || ((t.enabled = !0), t.params.grabCursor && t.setGrabCursor(), t.emit('enable'));
    }

    disable() {
      const t = this;
      t.enabled && ((t.enabled = !1), t.params.grabCursor && t.unsetGrabCursor(), t.emit('disable'));
    }

    setProgress(t, i) {
      const r = this;
      t = Math.min(Math.max(t, 0), 1);
      const s = r.minTranslate(),
        a = (r.maxTranslate() - s) * t + s;
      r.translateTo(a, typeof i > 'u' ? 0 : i), r.updateActiveIndex(), r.updateSlidesClasses();
    }

    emitContainerClasses() {
      const t = this;
      if (!t.params._emitClasses || !t.el) return;
      const i = t.el.className
        .split(' ')
        .filter((r) => r.indexOf('swiper') === 0 || r.indexOf(t.params.containerModifierClass) === 0);
      t.emit('_containerClasses', i.join(' '));
    }

    getSlideClasses(t) {
      const i = this;
      return i.destroyed
        ? ''
        : t.className
            .split(' ')
            .filter((r) => r.indexOf('swiper-slide') === 0 || r.indexOf(i.params.slideClass) === 0)
            .join(' ');
    }

    emitSlidesClasses() {
      const t = this;
      if (!t.params._emitClasses || !t.el) return;
      const i = [];
      t.slides.forEach((r) => {
        const s = t.getSlideClasses(r);
        i.push({ slideEl: r, classNames: s }), t.emit('_slideClass', r, s);
      }),
        t.emit('_slideClasses', i);
    }

    slidesPerViewDynamic(t = 'current', i = !1) {
      const r = this,
        { params: s, slides: n, slidesGrid: a, slidesSizesGrid: o, size: l, activeIndex: c } = r;
      let p = 1;
      if (s.centeredSlides) {
        let u = n[c] ? n[c].swiperSlideSize : 0,
          b;
        for (let h = c + 1; h < n.length; h += 1)
          n[h] && !b && ((u += n[h].swiperSlideSize), (p += 1), u > l && (b = !0));
        for (let h = c - 1; h >= 0; h -= 1) n[h] && !b && ((u += n[h].swiperSlideSize), (p += 1), u > l && (b = !0));
      } else if (t === 'current')
        for (let u = c + 1; u < n.length; u += 1) (i ? a[u] + o[u] - a[c] < l : a[u] - a[c] < l) && (p += 1);
      else for (let u = c - 1; u >= 0; u -= 1) a[c] - a[u] < l && (p += 1);
      return p;
    }

    update() {
      const t = this;
      if (!t || t.destroyed) return;
      const { snapGrid: i, params: r } = t;
      r.breakpoints && t.setBreakpoint(),
        [...t.el.querySelectorAll('[loading="lazy"]')].forEach((a) => {
          a.complete && re(t, a);
        }),
        t.updateSize(),
        t.updateSlides(),
        t.updateProgress(),
        t.updateSlidesClasses();

      function s() {
        const a = t.rtlTranslate ? t.translate * -1 : t.translate,
          o = Math.min(Math.max(a, t.maxTranslate()), t.minTranslate());
        t.setTranslate(o), t.updateActiveIndex(), t.updateSlidesClasses();
      }

      let n;
      if (r.freeMode && r.freeMode.enabled && !r.cssMode) s(), r.autoHeight && t.updateAutoHeight();
      else {
        if ((r.slidesPerView === 'auto' || r.slidesPerView > 1) && t.isEnd && !r.centeredSlides) {
          const a = t.virtual && r.virtual.enabled ? t.virtual.slides : t.slides;
          n = t.slideTo(a.length - 1, 0, !1, !0);
        } else n = t.slideTo(t.activeIndex, 0, !1, !0);
        n || s();
      }
      r.watchOverflow && i !== t.snapGrid && t.checkOverflow(), t.emit('update');
    }

    changeDirection(t, i = !0) {
      const r = this,
        s = r.params.direction;
      return (
        t || (t = s === 'horizontal' ? 'vertical' : 'horizontal'),
        t === s ||
          (t !== 'horizontal' && t !== 'vertical') ||
          (r.el.classList.remove(`${r.params.containerModifierClass}${s}`),
          r.el.classList.add(`${r.params.containerModifierClass}${t}`),
          r.emitContainerClasses(),
          (r.params.direction = t),
          r.slides.forEach((n) => {
            t === 'vertical' ? (n.style.width = '') : (n.style.height = '');
          }),
          r.emit('changeDirection'),
          i && r.update()),
        r
      );
    }

    changeLanguageDirection(t) {
      const i = this;
      (i.rtl && t === 'rtl') ||
        (!i.rtl && t === 'ltr') ||
        ((i.rtl = t === 'rtl'),
        (i.rtlTranslate = i.params.direction === 'horizontal' && i.rtl),
        i.rtl
          ? (i.el.classList.add(`${i.params.containerModifierClass}rtl`), (i.el.dir = 'rtl'))
          : (i.el.classList.remove(`${i.params.containerModifierClass}rtl`), (i.el.dir = 'ltr')),
        i.update());
    }

    mount(t) {
      const i = this;
      if (i.mounted) return !0;
      let r = t || i.params.el;
      if ((typeof r == 'string' && (r = document.querySelector(r)), !r)) return !1;
      (r.swiper = i), r.shadowEl && (i.isElement = !0);
      const s = () => `.${(i.params.wrapperClass || '').trim().split(' ').join('.')}`;
      let a = (() =>
        r && r.shadowRoot && r.shadowRoot.querySelector ? r.shadowRoot.querySelector(s()) : F(r, s())[0])();
      return (
        !a &&
          i.params.createElements &&
          ((a = je('div', i.params.wrapperClass)),
          r.append(a),
          F(r, `.${i.params.slideClass}`).forEach((o) => {
            a.append(o);
          })),
        Object.assign(i, {
          el: r,
          wrapperEl: a,
          slidesEl: i.isElement ? r : a,
          mounted: !0,
          rtl: r.dir.toLowerCase() === 'rtl' || $(r, 'direction') === 'rtl',
          rtlTranslate:
            i.params.direction === 'horizontal' && (r.dir.toLowerCase() === 'rtl' || $(r, 'direction') === 'rtl'),
          wrongRTL: $(a, 'display') === '-webkit-box',
        }),
        !0
      );
    }

    init(t) {
      const i = this;
      return (
        i.initialized ||
          i.mount(t) === !1 ||
          (i.emit('beforeInit'),
          i.params.breakpoints && i.setBreakpoint(),
          i.addClasses(),
          i.updateSize(),
          i.updateSlides(),
          i.params.watchOverflow && i.checkOverflow(),
          i.params.grabCursor && i.enabled && i.setGrabCursor(),
          i.params.loop && i.virtual && i.params.virtual.enabled
            ? i.slideTo(i.params.initialSlide + i.virtual.slidesBefore, 0, i.params.runCallbacksOnInit, !1, !0)
            : i.slideTo(i.params.initialSlide, 0, i.params.runCallbacksOnInit, !1, !0),
          i.params.loop && i.loopCreate(),
          i.attachEvents(),
          [...i.el.querySelectorAll('[loading="lazy"]')].forEach((s) => {
            s.complete
              ? re(i, s)
              : s.addEventListener('load', (n) => {
                  re(i, n.target);
                });
          }),
          xe(i),
          (i.initialized = !0),
          xe(i),
          i.emit('init'),
          i.emit('afterInit')),
        i
      );
    }

    destroy(t = !0, i = !0) {
      const r = this,
        { params: s, el: n, wrapperEl: a, slides: o } = r;
      return (
        typeof r.params > 'u' ||
          r.destroyed ||
          (r.emit('beforeDestroy'),
          (r.initialized = !1),
          r.detachEvents(),
          s.loop && r.loopDestroy(),
          i &&
            (r.removeClasses(),
            n.removeAttribute('style'),
            a.removeAttribute('style'),
            o &&
              o.length &&
              o.forEach((l) => {
                l.classList.remove(s.slideVisibleClass, s.slideActiveClass, s.slideNextClass, s.slidePrevClass),
                  l.removeAttribute('style'),
                  l.removeAttribute('data-swiper-slide-index');
              })),
          r.emit('destroy'),
          Object.keys(r.eventsListeners).forEach((l) => {
            r.off(l);
          }),
          t !== !1 && ((r.el.swiper = null), It(r)),
          (r.destroyed = !0)),
        null
      );
    }
  }

  Object.keys(Se).forEach((e) => {
    Object.keys(Se[e]).forEach((t) => {
      N.prototype[t] = Se[e][t];
    });
  }),
    N.use([Yt, Ut]);

  function Ke(e, t, i, r) {
    return (
      e.params.createElements &&
        Object.keys(r).forEach((s) => {
          if (!i[s] && i.auto === !0) {
            let n = F(e.el, `.${r[s]}`)[0];
            n || ((n = je('div', r[s])), (n.className = r[s]), e.el.append(n)), (i[s] = n), (t[s] = n);
          }
        }),
      i
    );
  }

  function Ki({ swiper: e, extendParams: t, on: i, emit: r }) {
    t({
      navigation: {
        nextEl: null,
        prevEl: null,
        hideOnClick: !1,
        disabledClass: 'swiper-button-disabled',
        hiddenClass: 'swiper-button-hidden',
        lockClass: 'swiper-button-lock',
        navigationDisabledClass: 'swiper-navigation-disabled',
      },
    }),
      (e.navigation = { nextEl: null, prevEl: null });
    const s = (f) => (Array.isArray(f) || (f = [f].filter((g) => !!g)), f);

    function n(f) {
      let g;
      return f && typeof f == 'string' && e.isElement && ((g = e.el.shadowRoot.querySelector(f)), g)
        ? g
        : (f &&
            (typeof f == 'string' && (g = [...document.querySelectorAll(f)]),
            e.params.uniqueNavElements &&
              typeof f == 'string' &&
              g.length > 1 &&
              e.el.querySelectorAll(f).length === 1 &&
              (g = e.el.querySelector(f))),
          f && !g ? f : g);
    }

    function a(f, g) {
      const A = e.params.navigation;
      (f = s(f)),
        f.forEach((d) => {
          d &&
            (d.classList[g ? 'add' : 'remove'](...A.disabledClass.split(' ')),
            d.tagName === 'BUTTON' && (d.disabled = g),
            e.params.watchOverflow && e.enabled && d.classList[e.isLocked ? 'add' : 'remove'](A.lockClass));
        });
    }

    function o() {
      const { nextEl: f, prevEl: g } = e.navigation;
      if (e.params.loop) {
        a(g, !1), a(f, !1);
        return;
      }
      a(g, e.isBeginning && !e.params.rewind), a(f, e.isEnd && !e.params.rewind);
    }

    function l(f) {
      f.preventDefault(),
        !(e.isBeginning && !e.params.loop && !e.params.rewind) && (e.slidePrev(), r('navigationPrev'));
    }

    function c(f) {
      f.preventDefault(), !(e.isEnd && !e.params.loop && !e.params.rewind) && (e.slideNext(), r('navigationNext'));
    }

    function p() {
      const f = e.params.navigation;
      if (
        ((e.params.navigation = Ke(e, e.originalParams.navigation, e.params.navigation, {
          nextEl: 'swiper-button-next',
          prevEl: 'swiper-button-prev',
        })),
        !(f.nextEl || f.prevEl))
      )
        return;
      let g = n(f.nextEl),
        A = n(f.prevEl);
      Object.assign(e.navigation, { nextEl: g, prevEl: A }), (g = s(g)), (A = s(A));
      const d = (m, v) => {
        m && m.addEventListener('click', v === 'next' ? c : l),
          !e.enabled && m && m.classList.add(...f.lockClass.split(' '));
      };
      g.forEach((m) => d(m, 'next')), A.forEach((m) => d(m, 'prev'));
    }

    function u() {
      let { nextEl: f, prevEl: g } = e.navigation;
      (f = s(f)), (g = s(g));
      const A = (d, m) => {
        d.removeEventListener('click', m === 'next' ? c : l),
          d.classList.remove(...e.params.navigation.disabledClass.split(' '));
      };
      f.forEach((d) => A(d, 'next')), g.forEach((d) => A(d, 'prev'));
    }

    i('init', () => {
      e.params.navigation.enabled === !1 ? h() : (p(), o());
    }),
      i('toEdge fromEdge lock unlock', () => {
        o();
      }),
      i('destroy', () => {
        u();
      }),
      i('enable disable', () => {
        let { nextEl: f, prevEl: g } = e.navigation;
        (f = s(f)),
          (g = s(g)),
          [...f, ...g]
            .filter((A) => !!A)
            .forEach((A) => A.classList[e.enabled ? 'remove' : 'add'](e.params.navigation.lockClass));
      }),
      i('click', (f, g) => {
        let { nextEl: A, prevEl: d } = e.navigation;
        (A = s(A)), (d = s(d));
        const m = g.target;
        if (e.params.navigation.hideOnClick && !d.includes(m) && !A.includes(m)) {
          if (
            e.pagination &&
            e.params.pagination &&
            e.params.pagination.clickable &&
            (e.pagination.el === m || e.pagination.el.contains(m))
          )
            return;
          let v;
          A.length
            ? (v = A[0].classList.contains(e.params.navigation.hiddenClass))
            : d.length && (v = d[0].classList.contains(e.params.navigation.hiddenClass)),
            r(v === !0 ? 'navigationShow' : 'navigationHide'),
            [...A, ...d].filter((y) => !!y).forEach((y) => y.classList.toggle(e.params.navigation.hiddenClass));
        }
      });
    const b = () => {
        e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(' ')), p(), o();
      },
      h = () => {
        e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(' ')), u();
      };
    Object.assign(e.navigation, { enable: b, disable: h, update: o, init: p, destroy: u });
  }

  function W(e = '') {
    return `.${e
      .trim()
      .replace(/([\.:!+\/])/g, '\\$1')
      .replace(/ /g, '.')}`;
  }

  function Qi({ swiper: e, extendParams: t, on: i, emit: r }) {
    const s = 'swiper-pagination';
    t({
      pagination: {
        el: null,
        bulletElement: 'span',
        clickable: !1,
        hideOnClick: !1,
        renderBullet: null,
        renderProgressbar: null,
        renderFraction: null,
        renderCustom: null,
        progressbarOpposite: !1,
        type: 'bullets',
        dynamicBullets: !1,
        dynamicMainBullets: 1,
        formatFractionCurrent: (d) => d,
        formatFractionTotal: (d) => d,
        bulletClass: `${s}-bullet`,
        bulletActiveClass: `${s}-bullet-active`,
        modifierClass: `${s}-`,
        currentClass: `${s}-current`,
        totalClass: `${s}-total`,
        hiddenClass: `${s}-hidden`,
        progressbarFillClass: `${s}-progressbar-fill`,
        progressbarOppositeClass: `${s}-progressbar-opposite`,
        clickableClass: `${s}-clickable`,
        lockClass: `${s}-lock`,
        horizontalClass: `${s}-horizontal`,
        verticalClass: `${s}-vertical`,
        paginationDisabledClass: `${s}-disabled`,
      },
    }),
      (e.pagination = { el: null, bullets: [] });
    let n,
      a = 0;
    const o = (d) => (Array.isArray(d) || (d = [d].filter((m) => !!m)), d);

    function l() {
      return (
        !e.params.pagination.el || !e.pagination.el || (Array.isArray(e.pagination.el) && e.pagination.el.length === 0)
      );
    }

    function c(d, m) {
      const { bulletActiveClass: v } = e.params.pagination;
      d &&
        ((d = d[`${m === 'prev' ? 'previous' : 'next'}ElementSibling`]),
        d &&
          (d.classList.add(`${v}-${m}`),
          (d = d[`${m === 'prev' ? 'previous' : 'next'}ElementSibling`]),
          d && d.classList.add(`${v}-${m}-${m}`)));
    }

    function p(d) {
      const m = d.target.closest(W(e.params.pagination.bulletClass));
      if (!m) return;
      d.preventDefault();
      const v = ie(m) * e.params.slidesPerGroup;
      if (e.params.loop) {
        if (e.realIndex === v) return;
        const y = e.getSlideIndexByData(v),
          E = e.getSlideIndexByData(e.realIndex);
        y > e.slides.length - e.loopedSlides &&
          e.loopFix({
            direction: y > E ? 'next' : 'prev',
            activeSlideIndex: y,
            slideTo: !1,
          }),
          e.slideToLoop(v);
      } else e.slideTo(v);
    }

    function u() {
      const d = e.rtl,
        m = e.params.pagination;
      if (l()) return;
      let v = e.pagination.el;
      v = o(v);
      let y, E;
      const T = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
        z = e.params.loop ? Math.ceil(T / e.params.slidesPerGroup) : e.snapGrid.length;
      if (
        (e.params.loop
          ? ((E = e.previousRealIndex || 0),
            (y = e.params.slidesPerGroup > 1 ? Math.floor(e.realIndex / e.params.slidesPerGroup) : e.realIndex))
          : typeof e.snapIndex < 'u'
          ? ((y = e.snapIndex), (E = e.previousSnapIndex))
          : ((E = e.previousIndex || 0), (y = e.activeIndex || 0)),
        m.type === 'bullets' && e.pagination.bullets && e.pagination.bullets.length > 0)
      ) {
        const P = e.pagination.bullets;
        let O, B, S;
        if (
          (m.dynamicBullets &&
            ((n = we(P[0], e.isHorizontal() ? 'width' : 'height', !0)),
            v.forEach((x) => {
              x.style[e.isHorizontal() ? 'width' : 'height'] = `${n * (m.dynamicMainBullets + 4)}px`;
            }),
            m.dynamicMainBullets > 1 &&
              E !== void 0 &&
              ((a += y - (E || 0)), a > m.dynamicMainBullets - 1 ? (a = m.dynamicMainBullets - 1) : a < 0 && (a = 0)),
            (O = Math.max(y - a, 0)),
            (B = O + (Math.min(P.length, m.dynamicMainBullets) - 1)),
            (S = (B + O) / 2)),
          P.forEach((x) => {
            const C = [
              ...['', '-next', '-next-next', '-prev', '-prev-prev', '-main'].map((M) => `${m.bulletActiveClass}${M}`),
            ]
              .map((M) => (typeof M == 'string' && M.includes(' ') ? M.split(' ') : M))
              .flat();
            x.classList.remove(...C);
          }),
          v.length > 1)
        )
          P.forEach((x) => {
            const C = ie(x);
            C === y
              ? x.classList.add(...m.bulletActiveClass.split(' '))
              : e.isElement && x.setAttribute('part', 'bullet'),
              m.dynamicBullets &&
                (C >= O && C <= B && x.classList.add(...`${m.bulletActiveClass}-main`.split(' ')),
                C === O && c(x, 'prev'),
                C === B && c(x, 'next'));
          });
        else {
          const x = P[y];
          if (
            (x && x.classList.add(...m.bulletActiveClass.split(' ')),
            e.isElement &&
              P.forEach((C, M) => {
                C.setAttribute('part', M === y ? 'bullet-active' : 'bullet');
              }),
            m.dynamicBullets)
          ) {
            const C = P[O],
              M = P[B];
            for (let H = O; H <= B; H += 1) P[H] && P[H].classList.add(...`${m.bulletActiveClass}-main`.split(' '));
            c(C, 'prev'), c(M, 'next');
          }
        }
        if (m.dynamicBullets) {
          const x = Math.min(P.length, m.dynamicMainBullets + 4),
            C = (n * x - n) / 2 - S * n,
            M = d ? 'right' : 'left';
          P.forEach((H) => {
            H.style[e.isHorizontal() ? M : 'top'] = `${C}px`;
          });
        }
      }
      v.forEach((P, O) => {
        if (
          (m.type === 'fraction' &&
            (P.querySelectorAll(W(m.currentClass)).forEach((B) => {
              B.textContent = m.formatFractionCurrent(y + 1);
            }),
            P.querySelectorAll(W(m.totalClass)).forEach((B) => {
              B.textContent = m.formatFractionTotal(z);
            })),
          m.type === 'progressbar')
        ) {
          let B;
          m.progressbarOpposite
            ? (B = e.isHorizontal() ? 'vertical' : 'horizontal')
            : (B = e.isHorizontal() ? 'horizontal' : 'vertical');
          const S = (y + 1) / z;
          let x = 1,
            C = 1;
          B === 'horizontal' ? (x = S) : (C = S),
            P.querySelectorAll(W(m.progressbarFillClass)).forEach((M) => {
              (M.style.transform = `translate3d(0,0,0) scaleX(${x}) scaleY(${C})`),
                (M.style.transitionDuration = `${e.params.speed}ms`);
            });
        }
        m.type === 'custom' && m.renderCustom
          ? ((P.innerHTML = m.renderCustom(e, y + 1, z)), O === 0 && r('paginationRender', P))
          : (O === 0 && r('paginationRender', P), r('paginationUpdate', P)),
          e.params.watchOverflow && e.enabled && P.classList[e.isLocked ? 'add' : 'remove'](m.lockClass);
      });
    }

    function b() {
      const d = e.params.pagination;
      if (l()) return;
      const m = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length;
      let v = e.pagination.el;
      v = o(v);
      let y = '';
      if (d.type === 'bullets') {
        let E = e.params.loop ? Math.ceil(m / e.params.slidesPerGroup) : e.snapGrid.length;
        e.params.freeMode && e.params.freeMode.enabled && E > m && (E = m);
        for (let T = 0; T < E; T += 1)
          d.renderBullet
            ? (y += d.renderBullet.call(e, T, d.bulletClass))
            : (y += `<${d.bulletElement} ${e.isElement ? 'part="bullet"' : ''} class="${d.bulletClass}"></${
                d.bulletElement
              }>`);
      }
      d.type === 'fraction' &&
        (d.renderFraction
          ? (y = d.renderFraction.call(e, d.currentClass, d.totalClass))
          : (y = `<span class="${d.currentClass}"></span> / <span class="${d.totalClass}"></span>`)),
        d.type === 'progressbar' &&
          (d.renderProgressbar
            ? (y = d.renderProgressbar.call(e, d.progressbarFillClass))
            : (y = `<span class="${d.progressbarFillClass}"></span>`)),
        (e.pagination.bullets = []),
        v.forEach((E) => {
          d.type !== 'custom' && (E.innerHTML = y || ''),
            d.type === 'bullets' && e.pagination.bullets.push(...E.querySelectorAll(W(d.bulletClass)));
        }),
        d.type !== 'custom' && r('paginationRender', v[0]);
    }

    function h() {
      e.params.pagination = Ke(e, e.originalParams.pagination, e.params.pagination, { el: 'swiper-pagination' });
      const d = e.params.pagination;
      if (!d.el) return;
      let m;
      typeof d.el == 'string' && e.isElement && (m = e.el.shadowRoot.querySelector(d.el)),
        !m && typeof d.el == 'string' && (m = [...document.querySelectorAll(d.el)]),
        m || (m = d.el),
        !(!m || m.length === 0) &&
          (e.params.uniqueNavElements &&
            typeof d.el == 'string' &&
            Array.isArray(m) &&
            m.length > 1 &&
            ((m = [...e.el.querySelectorAll(d.el)]),
            m.length > 1 && (m = m.filter((v) => $e(v, '.swiper')[0] === e.el)[0])),
          Array.isArray(m) && m.length === 1 && (m = m[0]),
          Object.assign(e.pagination, { el: m }),
          (m = o(m)),
          m.forEach((v) => {
            d.type === 'bullets' && d.clickable && v.classList.add(d.clickableClass),
              v.classList.add(d.modifierClass + d.type),
              v.classList.add(e.isHorizontal() ? d.horizontalClass : d.verticalClass),
              d.type === 'bullets' &&
                d.dynamicBullets &&
                (v.classList.add(`${d.modifierClass}${d.type}-dynamic`),
                (a = 0),
                d.dynamicMainBullets < 1 && (d.dynamicMainBullets = 1)),
              d.type === 'progressbar' && d.progressbarOpposite && v.classList.add(d.progressbarOppositeClass),
              d.clickable && v.addEventListener('click', p),
              e.enabled || v.classList.add(d.lockClass);
          }));
    }

    function f() {
      const d = e.params.pagination;
      if (l()) return;
      let m = e.pagination.el;
      m &&
        ((m = o(m)),
        m.forEach((v) => {
          v.classList.remove(d.hiddenClass),
            v.classList.remove(d.modifierClass + d.type),
            v.classList.remove(e.isHorizontal() ? d.horizontalClass : d.verticalClass),
            d.clickable && v.removeEventListener('click', p);
        })),
        e.pagination.bullets &&
          e.pagination.bullets.forEach((v) => v.classList.remove(...d.bulletActiveClass.split(' ')));
    }

    i('changeDirection', () => {
      if (!e.pagination || !e.pagination.el) return;
      const d = e.params.pagination;
      let { el: m } = e.pagination;
      (m = o(m)),
        m.forEach((v) => {
          v.classList.remove(d.horizontalClass, d.verticalClass),
            v.classList.add(e.isHorizontal() ? d.horizontalClass : d.verticalClass);
        });
    }),
      i('init', () => {
        e.params.pagination.enabled === !1 ? A() : (h(), b(), u());
      }),
      i('activeIndexChange', () => {
        typeof e.snapIndex > 'u' && u();
      }),
      i('snapIndexChange', () => {
        u();
      }),
      i('snapGridLengthChange', () => {
        b(), u();
      }),
      i('destroy', () => {
        f();
      }),
      i('enable disable', () => {
        let { el: d } = e.pagination;
        d && ((d = o(d)), d.forEach((m) => m.classList[e.enabled ? 'remove' : 'add'](e.params.pagination.lockClass)));
      }),
      i('lock unlock', () => {
        u();
      }),
      i('click', (d, m) => {
        const v = m.target;
        let { el: y } = e.pagination;
        if (
          (Array.isArray(y) || (y = [y].filter((E) => !!E)),
          e.params.pagination.el &&
            e.params.pagination.hideOnClick &&
            y &&
            y.length > 0 &&
            !v.classList.contains(e.params.pagination.bulletClass))
        ) {
          if (
            e.navigation &&
            ((e.navigation.nextEl && v === e.navigation.nextEl) || (e.navigation.prevEl && v === e.navigation.prevEl))
          )
            return;
          const E = y[0].classList.contains(e.params.pagination.hiddenClass);
          r(E === !0 ? 'paginationShow' : 'paginationHide'),
            y.forEach((T) => T.classList.toggle(e.params.pagination.hiddenClass));
        }
      });
    const g = () => {
        e.el.classList.remove(e.params.pagination.paginationDisabledClass);
        let { el: d } = e.pagination;
        d && ((d = o(d)), d.forEach((m) => m.classList.remove(e.params.pagination.paginationDisabledClass))),
          h(),
          b(),
          u();
      },
      A = () => {
        e.el.classList.add(e.params.pagination.paginationDisabledClass);
        let { el: d } = e.pagination;
        d && ((d = o(d)), d.forEach((m) => m.classList.add(e.params.pagination.paginationDisabledClass))), f();
      };
    Object.assign(e.pagination, { enable: g, disable: A, render: b, update: u, init: h, destroy: f });
  }

  function Qe(e, t) {
    return function () {
      return e.apply(t, arguments);
    };
  }

  const { toString: Zi } = Object.prototype,
    { getPrototypeOf: Te } = Object,
    se = ((e) => (t) => {
      const i = Zi.call(t);
      return e[i] || (e[i] = i.slice(8, -1).toLowerCase());
    })(Object.create(null)),
    G = (e) => ((e = e.toLowerCase()), (t) => se(t) === e),
    ne = (e) => (t) => typeof t === e,
    { isArray: U } = Array,
    X = ne('undefined');

  function er(e) {
    return (
      e !== null &&
      !X(e) &&
      e.constructor !== null &&
      !X(e.constructor) &&
      D(e.constructor.isBuffer) &&
      e.constructor.isBuffer(e)
    );
  }

  const Ze = G('ArrayBuffer');

  function tr(e) {
    let t;
    return (
      typeof ArrayBuffer < 'u' && ArrayBuffer.isView
        ? (t = ArrayBuffer.isView(e))
        : (t = e && e.buffer && Ze(e.buffer)),
      t
    );
  }

  const ir = ne('string'),
    D = ne('function'),
    et = ne('number'),
    ae = (e) => e !== null && typeof e == 'object',
    rr = (e) => e === !0 || e === !1,
    oe = (e) => {
      if (se(e) !== 'object') return !1;
      const t = Te(e);
      return (
        (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) &&
        !(Symbol.toStringTag in e) &&
        !(Symbol.iterator in e)
      );
    },
    sr = G('Date'),
    nr = G('File'),
    ar = G('Blob'),
    or = G('FileList'),
    lr = (e) => ae(e) && D(e.pipe),
    cr = (e) => {
      let t;
      return (
        e &&
        ((typeof FormData == 'function' && e instanceof FormData) ||
          (D(e.append) &&
            ((t = se(e)) === 'formdata' || (t === 'object' && D(e.toString) && e.toString() === '[object FormData]'))))
      );
    },
    dr = G('URLSearchParams'),
    fr = (e) => (e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ''));

  function J(e, t, { allOwnKeys: i = !1 } = {}) {
    if (e === null || typeof e > 'u') return;
    let r, s;
    if ((typeof e != 'object' && (e = [e]), U(e))) for (r = 0, s = e.length; r < s; r++) t.call(null, e[r], r, e);
    else {
      const n = i ? Object.getOwnPropertyNames(e) : Object.keys(e),
        a = n.length;
      let o;
      for (r = 0; r < a; r++) (o = n[r]), t.call(null, e[o], o, e);
    }
  }

  function tt(e, t) {
    t = t.toLowerCase();
    const i = Object.keys(e);
    let r = i.length,
      s;
    for (; r-- > 0; ) if (((s = i[r]), t === s.toLowerCase())) return s;
    return null;
  }

  const it = (() =>
      typeof globalThis < 'u' ? globalThis : typeof self < 'u' ? self : typeof window < 'u' ? window : global)(),
    rt = (e) => !X(e) && e !== it;

  function Ce() {
    const { caseless: e } = (rt(this) && this) || {},
      t = {},
      i = (r, s) => {
        const n = (e && tt(t, s)) || s;
        oe(t[n]) && oe(r) ? (t[n] = Ce(t[n], r)) : oe(r) ? (t[n] = Ce({}, r)) : U(r) ? (t[n] = r.slice()) : (t[n] = r);
      };
    for (let r = 0, s = arguments.length; r < s; r++) arguments[r] && J(arguments[r], i);
    return t;
  }

  const ur = (e, t, i, { allOwnKeys: r } = {}) => (
      J(
        t,
        (s, n) => {
          i && D(s) ? (e[n] = Qe(s, i)) : (e[n] = s);
        },
        { allOwnKeys: r },
      ),
      e
    ),
    pr = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
    mr = (e, t, i, r) => {
      (e.prototype = Object.create(t.prototype, r)),
        (e.prototype.constructor = e),
        Object.defineProperty(e, 'super', { value: t.prototype }),
        i && Object.assign(e.prototype, i);
    },
    hr = (e, t, i, r) => {
      let s, n, a;
      const o = {};
      if (((t = t || {}), e == null)) return t;
      do {
        for (s = Object.getOwnPropertyNames(e), n = s.length; n-- > 0; )
          (a = s[n]), (!r || r(a, e, t)) && !o[a] && ((t[a] = e[a]), (o[a] = !0));
        e = i !== !1 && Te(e);
      } while (e && (!i || i(e, t)) && e !== Object.prototype);
      return t;
    },
    gr = (e, t, i) => {
      (e = String(e)), (i === void 0 || i > e.length) && (i = e.length), (i -= t.length);
      const r = e.indexOf(t, i);
      return r !== -1 && r === i;
    },
    wr = (e) => {
      if (!e) return null;
      if (U(e)) return e;
      let t = e.length;
      if (!et(t)) return null;
      const i = new Array(t);
      for (; t-- > 0; ) i[t] = e[t];
      return i;
    },
    br = (
      (e) => (t) =>
        e && t instanceof e
    )(typeof Uint8Array < 'u' && Te(Uint8Array)),
    vr = (e, t) => {
      const r = (e && e[Symbol.iterator]).call(e);
      let s;
      for (; (s = r.next()) && !s.done; ) {
        const n = s.value;
        t.call(e, n[0], n[1]);
      }
    },
    yr = (e, t) => {
      let i;
      const r = [];
      for (; (i = e.exec(t)) !== null; ) r.push(i);
      return r;
    },
    Ar = G('HTMLFormElement'),
    xr = (e) =>
      e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (i, r, s) {
        return r.toUpperCase() + s;
      }),
    st = (
      ({ hasOwnProperty: e }) =>
      (t, i) =>
        e.call(t, i)
    )(Object.prototype),
    Sr = G('RegExp'),
    nt = (e, t) => {
      const i = Object.getOwnPropertyDescriptors(e),
        r = {};
      J(i, (s, n) => {
        t(s, n, e) !== !1 && (r[n] = s);
      }),
        Object.defineProperties(e, r);
    },
    Er = (e) => {
      nt(e, (t, i) => {
        if (D(e) && ['arguments', 'caller', 'callee'].indexOf(i) !== -1) return !1;
        const r = e[i];
        if (D(r)) {
          if (((t.enumerable = !1), 'writable' in t)) {
            t.writable = !1;
            return;
          }
          t.set ||
            (t.set = () => {
              throw Error("Can not rewrite read-only method '" + i + "'");
            });
        }
      });
    },
    Tr = (e, t) => {
      const i = {},
        r = (s) => {
          s.forEach((n) => {
            i[n] = !0;
          });
        };
      return U(e) ? r(e) : r(String(e).split(t)), i;
    },
    Cr = () => {},
    kr = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
    ke = 'abcdefghijklmnopqrstuvwxyz',
    at = '0123456789',
    ot = { DIGIT: at, ALPHA: ke, ALPHA_DIGIT: ke + ke.toUpperCase() + at },
    Pr = (e = 16, t = ot.ALPHA_DIGIT) => {
      let i = '';
      const { length: r } = t;
      for (; e--; ) i += t[(Math.random() * r) | 0];
      return i;
    };

  function Or(e) {
    return !!(e && D(e.append) && e[Symbol.toStringTag] === 'FormData' && e[Symbol.iterator]);
  }

  const Mr = (e) => {
      const t = new Array(10),
        i = (r, s) => {
          if (ae(r)) {
            if (t.indexOf(r) >= 0) return;
            if (!('toJSON' in r)) {
              t[s] = r;
              const n = U(r) ? [] : {};
              return (
                J(r, (a, o) => {
                  const l = i(a, s + 1);
                  !X(l) && (n[o] = l);
                }),
                (t[s] = void 0),
                n
              );
            }
          }
          return r;
        };
      return i(e, 0);
    },
    Lr = G('AsyncFunction'),
    w = {
      isArray: U,
      isArrayBuffer: Ze,
      isBuffer: er,
      isFormData: cr,
      isArrayBufferView: tr,
      isString: ir,
      isNumber: et,
      isBoolean: rr,
      isObject: ae,
      isPlainObject: oe,
      isUndefined: X,
      isDate: sr,
      isFile: nr,
      isBlob: ar,
      isRegExp: Sr,
      isFunction: D,
      isStream: lr,
      isURLSearchParams: dr,
      isTypedArray: br,
      isFileList: or,
      forEach: J,
      merge: Ce,
      extend: ur,
      trim: fr,
      stripBOM: pr,
      inherits: mr,
      toFlatObject: hr,
      kindOf: se,
      kindOfTest: G,
      endsWith: gr,
      toArray: wr,
      forEachEntry: vr,
      matchAll: yr,
      isHTMLForm: Ar,
      hasOwnProperty: st,
      hasOwnProp: st,
      reduceDescriptors: nt,
      freezeMethods: Er,
      toObjectSet: Tr,
      toCamelCase: xr,
      noop: Cr,
      toFiniteNumber: kr,
      findKey: tt,
      global: it,
      isContextDefined: rt,
      ALPHABET: ot,
      generateString: Pr,
      isSpecCompliantForm: Or,
      toJSONObject: Mr,
      isAsyncFn: Lr,
      isThenable: (e) => e && (ae(e) || D(e)) && D(e.then) && D(e.catch),
    };

  function k(e, t, i, r, s) {
    Error.call(this),
      Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : (this.stack = new Error().stack),
      (this.message = e),
      (this.name = 'AxiosError'),
      t && (this.code = t),
      i && (this.config = i),
      r && (this.request = r),
      s && (this.response = s);
  }

  w.inherits(k, Error, {
    toJSON: function () {
      return {
        message: this.message,
        name: this.name,
        description: this.description,
        number: this.number,
        fileName: this.fileName,
        lineNumber: this.lineNumber,
        columnNumber: this.columnNumber,
        stack: this.stack,
        config: w.toJSONObject(this.config),
        code: this.code,
        status: this.response && this.response.status ? this.response.status : null,
      };
    },
  });
  const lt = k.prototype,
    ct = {};
  [
    'ERR_BAD_OPTION_VALUE',
    'ERR_BAD_OPTION',
    'ECONNABORTED',
    'ETIMEDOUT',
    'ERR_NETWORK',
    'ERR_FR_TOO_MANY_REDIRECTS',
    'ERR_DEPRECATED',
    'ERR_BAD_RESPONSE',
    'ERR_BAD_REQUEST',
    'ERR_CANCELED',
    'ERR_NOT_SUPPORT',
    'ERR_INVALID_URL',
  ].forEach((e) => {
    ct[e] = { value: e };
  }),
    Object.defineProperties(k, ct),
    Object.defineProperty(lt, 'isAxiosError', { value: !0 }),
    (k.from = (e, t, i, r, s, n) => {
      const a = Object.create(lt);
      return (
        w.toFlatObject(
          e,
          a,
          function (l) {
            return l !== Error.prototype;
          },
          (o) => o !== 'isAxiosError',
        ),
        k.call(a, e.message, t, i, r, s),
        (a.cause = e),
        (a.name = e.name),
        n && Object.assign(a, n),
        a
      );
    });
  const zr = null;

  function Pe(e) {
    return w.isPlainObject(e) || w.isArray(e);
  }

  function dt(e) {
    return w.endsWith(e, '[]') ? e.slice(0, -2) : e;
  }

  function ft(e, t, i) {
    return e
      ? e
          .concat(t)
          .map(function (s, n) {
            return (s = dt(s)), !i && n ? '[' + s + ']' : s;
          })
          .join(i ? '.' : '')
      : t;
  }

  function Br(e) {
    return w.isArray(e) && !e.some(Pe);
  }

  const Ir = w.toFlatObject(w, {}, null, function (t) {
    return /^is[A-Z]/.test(t);
  });

  function le(e, t, i) {
    if (!w.isObject(e)) throw new TypeError('target must be an object');
    (t = t || new FormData()),
      (i = w.toFlatObject(i, { metaTokens: !0, dots: !1, indexes: !1 }, !1, function (g, A) {
        return !w.isUndefined(A[g]);
      }));
    const r = i.metaTokens,
      s = i.visitor || p,
      n = i.dots,
      a = i.indexes,
      l = (i.Blob || (typeof Blob < 'u' && Blob)) && w.isSpecCompliantForm(t);
    if (!w.isFunction(s)) throw new TypeError('visitor must be a function');

    function c(f) {
      if (f === null) return '';
      if (w.isDate(f)) return f.toISOString();
      if (!l && w.isBlob(f)) throw new k('Blob is not supported. Use a Buffer instead.');
      return w.isArrayBuffer(f) || w.isTypedArray(f)
        ? l && typeof Blob == 'function'
          ? new Blob([f])
          : Buffer.from(f)
        : f;
    }

    function p(f, g, A) {
      let d = f;
      if (f && !A && typeof f == 'object') {
        if (w.endsWith(g, '{}')) (g = r ? g : g.slice(0, -2)), (f = JSON.stringify(f));
        else if ((w.isArray(f) && Br(f)) || ((w.isFileList(f) || w.endsWith(g, '[]')) && (d = w.toArray(f))))
          return (
            (g = dt(g)),
            d.forEach(function (v, y) {
              !(w.isUndefined(v) || v === null) && t.append(a === !0 ? ft([g], y, n) : a === null ? g : g + '[]', c(v));
            }),
            !1
          );
      }
      return Pe(f) ? !0 : (t.append(ft(A, g, n), c(f)), !1);
    }

    const u = [],
      b = Object.assign(Ir, { defaultVisitor: p, convertValue: c, isVisitable: Pe });

    function h(f, g) {
      if (!w.isUndefined(f)) {
        if (u.indexOf(f) !== -1) throw Error('Circular reference detected in ' + g.join('.'));
        u.push(f),
          w.forEach(f, function (d, m) {
            (!(w.isUndefined(d) || d === null) && s.call(t, d, w.isString(m) ? m.trim() : m, g, b)) === !0 &&
              h(d, g ? g.concat(m) : [m]);
          }),
          u.pop();
      }
    }

    if (!w.isObject(e)) throw new TypeError('data must be an object');
    return h(e), t;
  }

  function ut(e) {
    const t = { '!': '%21', "'": '%27', '(': '%28', ')': '%29', '~': '%7E', '%20': '+', '%00': '\0' };
    return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
      return t[r];
    });
  }

  function Oe(e, t) {
    (this._pairs = []), e && le(e, this, t);
  }

  const pt = Oe.prototype;
  (pt.append = function (t, i) {
    this._pairs.push([t, i]);
  }),
    (pt.toString = function (t) {
      const i = t
        ? function (r) {
            return t.call(this, r, ut);
          }
        : ut;
      return this._pairs
        .map(function (s) {
          return i(s[0]) + '=' + i(s[1]);
        }, '')
        .join('&');
    });

  function Rr(e) {
    return encodeURIComponent(e)
      .replace(/%3A/gi, ':')
      .replace(/%24/g, '$')
      .replace(/%2C/gi, ',')
      .replace(/%20/g, '+')
      .replace(/%5B/gi, '[')
      .replace(/%5D/gi, ']');
  }

  function mt(e, t, i) {
    if (!t) return e;
    const r = (i && i.encode) || Rr,
      s = i && i.serialize;
    let n;
    if ((s ? (n = s(t, i)) : (n = w.isURLSearchParams(t) ? t.toString() : new Oe(t, i).toString(r)), n)) {
      const a = e.indexOf('#');
      a !== -1 && (e = e.slice(0, a)), (e += (e.indexOf('?') === -1 ? '?' : '&') + n);
    }
    return e;
  }

  class Nr {
    constructor() {
      this.handlers = [];
    }

    use(t, i, r) {
      return (
        this.handlers.push({
          fulfilled: t,
          rejected: i,
          synchronous: r ? r.synchronous : !1,
          runWhen: r ? r.runWhen : null,
        }),
        this.handlers.length - 1
      );
    }

    eject(t) {
      this.handlers[t] && (this.handlers[t] = null);
    }

    clear() {
      this.handlers && (this.handlers = []);
    }

    forEach(t) {
      w.forEach(this.handlers, function (r) {
        r !== null && t(r);
      });
    }
  }

  const ht = Nr,
    gt = { silentJSONParsing: !0, forcedJSONParsing: !0, clarifyTimeoutError: !1 },
    Dr = typeof URLSearchParams < 'u' ? URLSearchParams : Oe,
    Fr = typeof FormData < 'u' ? FormData : null,
    Gr = typeof Blob < 'u' ? Blob : null,
    _r = (() => {
      let e;
      return typeof navigator < 'u' && ((e = navigator.product) === 'ReactNative' || e === 'NativeScript' || e === 'NS')
        ? !1
        : typeof window < 'u' && typeof document < 'u';
    })(),
    Hr = (() =>
      typeof WorkerGlobalScope < 'u' && self instanceof WorkerGlobalScope && typeof self.importScripts == 'function')(),
    _ = {
      isBrowser: !0,
      classes: { URLSearchParams: Dr, FormData: Fr, Blob: Gr },
      isStandardBrowserEnv: _r,
      isStandardBrowserWebWorkerEnv: Hr,
      protocols: ['http', 'https', 'file', 'blob', 'url', 'data'],
    };

  function jr(e, t) {
    return le(
      e,
      new _.classes.URLSearchParams(),
      Object.assign(
        {
          visitor: function (i, r, s, n) {
            return _.isNode && w.isBuffer(i)
              ? (this.append(r, i.toString('base64')), !1)
              : n.defaultVisitor.apply(this, arguments);
          },
        },
        t,
      ),
    );
  }

  function $r(e) {
    return w.matchAll(/\w+|\[(\w*)]/g, e).map((t) => (t[0] === '[]' ? '' : t[1] || t[0]));
  }

  function Vr(e) {
    const t = {},
      i = Object.keys(e);
    let r;
    const s = i.length;
    let n;
    for (r = 0; r < s; r++) (n = i[r]), (t[n] = e[n]);
    return t;
  }

  function wt(e) {
    function t(i, r, s, n) {
      let a = i[n++];
      const o = Number.isFinite(+a),
        l = n >= i.length;
      return (
        (a = !a && w.isArray(s) ? s.length : a),
        l
          ? (w.hasOwnProp(s, a) ? (s[a] = [s[a], r]) : (s[a] = r), !o)
          : ((!s[a] || !w.isObject(s[a])) && (s[a] = []), t(i, r, s[a], n) && w.isArray(s[a]) && (s[a] = Vr(s[a])), !o)
      );
    }

    if (w.isFormData(e) && w.isFunction(e.entries)) {
      const i = {};
      return (
        w.forEachEntry(e, (r, s) => {
          t($r(r), s, i, 0);
        }),
        i
      );
    }
    return null;
  }

  const Yr = { 'Content-Type': void 0 };

  function Ur(e, t, i) {
    if (w.isString(e))
      try {
        return (t || JSON.parse)(e), w.trim(e);
      } catch (r) {
        if (r.name !== 'SyntaxError') throw r;
      }
    return (i || JSON.stringify)(e);
  }

  const ce = {
    transitional: gt,
    adapter: ['xhr', 'http'],
    transformRequest: [
      function (t, i) {
        const r = i.getContentType() || '',
          s = r.indexOf('application/json') > -1,
          n = w.isObject(t);
        if ((n && w.isHTMLForm(t) && (t = new FormData(t)), w.isFormData(t))) return s && s ? JSON.stringify(wt(t)) : t;
        if (w.isArrayBuffer(t) || w.isBuffer(t) || w.isStream(t) || w.isFile(t) || w.isBlob(t)) return t;
        if (w.isArrayBufferView(t)) return t.buffer;
        if (w.isURLSearchParams(t))
          return i.setContentType('application/x-www-form-urlencoded;charset=utf-8', !1), t.toString();
        let o;
        if (n) {
          if (r.indexOf('application/x-www-form-urlencoded') > -1) return jr(t, this.formSerializer).toString();
          if ((o = w.isFileList(t)) || r.indexOf('multipart/form-data') > -1) {
            const l = this.env && this.env.FormData;
            return le(o ? { 'files[]': t } : t, l && new l(), this.formSerializer);
          }
        }
        return n || s ? (i.setContentType('application/json', !1), Ur(t)) : t;
      },
    ],
    transformResponse: [
      function (t) {
        const i = this.transitional || ce.transitional,
          r = i && i.forcedJSONParsing,
          s = this.responseType === 'json';
        if (t && w.isString(t) && ((r && !this.responseType) || s)) {
          const a = !(i && i.silentJSONParsing) && s;
          try {
            return JSON.parse(t);
          } catch (o) {
            if (a) throw o.name === 'SyntaxError' ? k.from(o, k.ERR_BAD_RESPONSE, this, null, this.response) : o;
          }
        }
        return t;
      },
    ],
    timeout: 0,
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',
    maxContentLength: -1,
    maxBodyLength: -1,
    env: { FormData: _.classes.FormData, Blob: _.classes.Blob },
    validateStatus: function (t) {
      return t >= 200 && t < 300;
    },
    headers: { common: { Accept: 'application/json, text/plain, */*' } },
  };
  w.forEach(['delete', 'get', 'head'], function (t) {
    ce.headers[t] = {};
  }),
    w.forEach(['post', 'put', 'patch'], function (t) {
      ce.headers[t] = w.merge(Yr);
    });
  const Me = ce,
    qr = w.toObjectSet([
      'age',
      'authorization',
      'content-length',
      'content-type',
      'etag',
      'expires',
      'from',
      'host',
      'if-modified-since',
      'if-unmodified-since',
      'last-modified',
      'location',
      'max-forwards',
      'proxy-authorization',
      'referer',
      'retry-after',
      'user-agent',
    ]),
    Wr = (e) => {
      const t = {};
      let i, r, s;
      return (
        e &&
          e
            .split(
              `
`,
            )
            .forEach(function (a) {
              (s = a.indexOf(':')),
                (i = a.substring(0, s).trim().toLowerCase()),
                (r = a.substring(s + 1).trim()),
                !(!i || (t[i] && qr[i])) &&
                  (i === 'set-cookie' ? (t[i] ? t[i].push(r) : (t[i] = [r])) : (t[i] = t[i] ? t[i] + ', ' + r : r));
            }),
        t
      );
    },
    bt = Symbol('internals');

  function K(e) {
    return e && String(e).trim().toLowerCase();
  }

  function de(e) {
    return e === !1 || e == null ? e : w.isArray(e) ? e.map(de) : String(e);
  }

  function Xr(e) {
    const t = Object.create(null),
      i = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let r;
    for (; (r = i.exec(e)); ) t[r[1]] = r[2];
    return t;
  }

  const Jr = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());

  function Le(e, t, i, r, s) {
    if (w.isFunction(r)) return r.call(this, t, i);
    if ((s && (t = i), !!w.isString(t))) {
      if (w.isString(r)) return t.indexOf(r) !== -1;
      if (w.isRegExp(r)) return r.test(t);
    }
  }

  function Kr(e) {
    return e
      .trim()
      .toLowerCase()
      .replace(/([a-z\d])(\w*)/g, (t, i, r) => i.toUpperCase() + r);
  }

  function Qr(e, t) {
    const i = w.toCamelCase(' ' + t);
    ['get', 'set', 'has'].forEach((r) => {
      Object.defineProperty(e, r + i, {
        value: function (s, n, a) {
          return this[r].call(this, t, s, n, a);
        },
        configurable: !0,
      });
    });
  }

  class fe {
    constructor(t) {
      t && this.set(t);
    }

    get [Symbol.toStringTag]() {
      return 'AxiosHeaders';
    }

    static from(t) {
      return t instanceof this ? t : new this(t);
    }

    static concat(t, ...i) {
      const r = new this(t);
      return i.forEach((s) => r.set(s)), r;
    }

    static accessor(t) {
      const r = (this[bt] = this[bt] = { accessors: {} }).accessors,
        s = this.prototype;

      function n(a) {
        const o = K(a);
        r[o] || (Qr(s, a), (r[o] = !0));
      }

      return w.isArray(t) ? t.forEach(n) : n(t), this;
    }

    set(t, i, r) {
      const s = this;

      function n(o, l, c) {
        const p = K(l);
        if (!p) throw new Error('header name must be a non-empty string');
        const u = w.findKey(s, p);
        (!u || s[u] === void 0 || c === !0 || (c === void 0 && s[u] !== !1)) && (s[u || l] = de(o));
      }

      const a = (o, l) => w.forEach(o, (c, p) => n(c, p, l));
      return (
        w.isPlainObject(t) || t instanceof this.constructor
          ? a(t, i)
          : w.isString(t) && (t = t.trim()) && !Jr(t)
          ? a(Wr(t), i)
          : t != null && n(i, t, r),
        this
      );
    }

    get(t, i) {
      if (((t = K(t)), t)) {
        const r = w.findKey(this, t);
        if (r) {
          const s = this[r];
          if (!i) return s;
          if (i === !0) return Xr(s);
          if (w.isFunction(i)) return i.call(this, s, r);
          if (w.isRegExp(i)) return i.exec(s);
          throw new TypeError('parser must be boolean|regexp|function');
        }
      }
    }

    has(t, i) {
      if (((t = K(t)), t)) {
        const r = w.findKey(this, t);
        return !!(r && this[r] !== void 0 && (!i || Le(this, this[r], r, i)));
      }
      return !1;
    }

    delete(t, i) {
      const r = this;
      let s = !1;

      function n(a) {
        if (((a = K(a)), a)) {
          const o = w.findKey(r, a);
          o && (!i || Le(r, r[o], o, i)) && (delete r[o], (s = !0));
        }
      }

      return w.isArray(t) ? t.forEach(n) : n(t), s;
    }

    clear(t) {
      const i = Object.keys(this);
      let r = i.length,
        s = !1;
      for (; r--; ) {
        const n = i[r];
        (!t || Le(this, this[n], n, t, !0)) && (delete this[n], (s = !0));
      }
      return s;
    }

    normalize(t) {
      const i = this,
        r = {};
      return (
        w.forEach(this, (s, n) => {
          const a = w.findKey(r, n);
          if (a) {
            (i[a] = de(s)), delete i[n];
            return;
          }
          const o = t ? Kr(n) : String(n).trim();
          o !== n && delete i[n], (i[o] = de(s)), (r[o] = !0);
        }),
        this
      );
    }

    concat(...t) {
      return this.constructor.concat(this, ...t);
    }

    toJSON(t) {
      const i = Object.create(null);
      return (
        w.forEach(this, (r, s) => {
          r != null && r !== !1 && (i[s] = t && w.isArray(r) ? r.join(', ') : r);
        }),
        i
      );
    }

    [Symbol.iterator]() {
      return Object.entries(this.toJSON())[Symbol.iterator]();
    }

    toString() {
      return Object.entries(this.toJSON()).map(([t, i]) => t + ': ' + i).join(`
`);
    }
  }

  fe.accessor(['Content-Type', 'Content-Length', 'Accept', 'Accept-Encoding', 'User-Agent', 'Authorization']),
    w.freezeMethods(fe.prototype),
    w.freezeMethods(fe);
  const j = fe;

  function ze(e, t) {
    const i = this || Me,
      r = t || i,
      s = j.from(r.headers);
    let n = r.data;
    return (
      w.forEach(e, function (o) {
        n = o.call(i, n, s.normalize(), t ? t.status : void 0);
      }),
      s.normalize(),
      n
    );
  }

  function vt(e) {
    return !!(e && e.__CANCEL__);
  }

  function Q(e, t, i) {
    k.call(this, e ?? 'canceled', k.ERR_CANCELED, t, i), (this.name = 'CanceledError');
  }

  w.inherits(Q, k, { __CANCEL__: !0 });

  function Zr(e, t, i) {
    const r = i.config.validateStatus;
    !i.status || !r || r(i.status)
      ? e(i)
      : t(
          new k(
            'Request failed with status code ' + i.status,
            [k.ERR_BAD_REQUEST, k.ERR_BAD_RESPONSE][Math.floor(i.status / 100) - 4],
            i.config,
            i.request,
            i,
          ),
        );
  }

  const es = _.isStandardBrowserEnv
    ? (function () {
        return {
          write: function (i, r, s, n, a, o) {
            const l = [];
            l.push(i + '=' + encodeURIComponent(r)),
              w.isNumber(s) && l.push('expires=' + new Date(s).toGMTString()),
              w.isString(n) && l.push('path=' + n),
              w.isString(a) && l.push('domain=' + a),
              o === !0 && l.push('secure'),
              (document.cookie = l.join('; '));
          },
          read: function (i) {
            const r = document.cookie.match(new RegExp('(^|;\\s*)(' + i + ')=([^;]*)'));
            return r ? decodeURIComponent(r[3]) : null;
          },
          remove: function (i) {
            this.write(i, '', Date.now() - 864e5);
          },
        };
      })()
    : (function () {
        return {
          write: function () {},
          read: function () {
            return null;
          },
          remove: function () {},
        };
      })();

  function ts(e) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
  }

  function is(e, t) {
    return t ? e.replace(/\/+$/, '') + '/' + t.replace(/^\/+/, '') : e;
  }

  function yt(e, t) {
    return e && !ts(t) ? is(e, t) : t;
  }

  const rs = _.isStandardBrowserEnv
    ? (function () {
        const t = /(msie|trident)/i.test(navigator.userAgent),
          i = document.createElement('a');
        let r;

        function s(n) {
          let a = n;
          return (
            t && (i.setAttribute('href', a), (a = i.href)),
            i.setAttribute('href', a),
            {
              href: i.href,
              protocol: i.protocol ? i.protocol.replace(/:$/, '') : '',
              host: i.host,
              search: i.search ? i.search.replace(/^\?/, '') : '',
              hash: i.hash ? i.hash.replace(/^#/, '') : '',
              hostname: i.hostname,
              port: i.port,
              pathname: i.pathname.charAt(0) === '/' ? i.pathname : '/' + i.pathname,
            }
          );
        }

        return (
          (r = s(window.location.href)),
          function (a) {
            const o = w.isString(a) ? s(a) : a;
            return o.protocol === r.protocol && o.host === r.host;
          }
        );
      })()
    : (function () {
        return function () {
          return !0;
        };
      })();

  function ss(e) {
    const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
    return (t && t[1]) || '';
  }

  function ns(e, t) {
    e = e || 10;
    const i = new Array(e),
      r = new Array(e);
    let s = 0,
      n = 0,
      a;
    return (
      (t = t !== void 0 ? t : 1e3),
      function (l) {
        const c = Date.now(),
          p = r[n];
        a || (a = c), (i[s] = l), (r[s] = c);
        let u = n,
          b = 0;
        for (; u !== s; ) (b += i[u++]), (u = u % e);
        if (((s = (s + 1) % e), s === n && (n = (n + 1) % e), c - a < t)) return;
        const h = p && c - p;
        return h ? Math.round((b * 1e3) / h) : void 0;
      }
    );
  }

  function At(e, t) {
    let i = 0;
    const r = ns(50, 250);
    return (s) => {
      const n = s.loaded,
        a = s.lengthComputable ? s.total : void 0,
        o = n - i,
        l = r(o),
        c = n <= a;
      i = n;
      const p = {
        loaded: n,
        total: a,
        progress: a ? n / a : void 0,
        bytes: o,
        rate: l || void 0,
        estimated: l && a && c ? (a - n) / l : void 0,
        event: s,
      };
      (p[t ? 'download' : 'upload'] = !0), e(p);
    };
  }

  const ue = {
    http: zr,
    xhr:
      typeof XMLHttpRequest < 'u' &&
      function (e) {
        return new Promise(function (i, r) {
          let s = e.data;
          const n = j.from(e.headers).normalize(),
            a = e.responseType;
          let o;

          function l() {
            e.cancelToken && e.cancelToken.unsubscribe(o), e.signal && e.signal.removeEventListener('abort', o);
          }

          w.isFormData(s) &&
            (_.isStandardBrowserEnv || _.isStandardBrowserWebWorkerEnv
              ? n.setContentType(!1)
              : n.setContentType('multipart/form-data;', !1));
          let c = new XMLHttpRequest();
          if (e.auth) {
            const h = e.auth.username || '',
              f = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : '';
            n.set('Authorization', 'Basic ' + btoa(h + ':' + f));
          }
          const p = yt(e.baseURL, e.url);
          c.open(e.method.toUpperCase(), mt(p, e.params, e.paramsSerializer), !0), (c.timeout = e.timeout);

          function u() {
            if (!c) return;
            const h = j.from('getAllResponseHeaders' in c && c.getAllResponseHeaders()),
              g = {
                data: !a || a === 'text' || a === 'json' ? c.responseText : c.response,
                status: c.status,
                statusText: c.statusText,
                headers: h,
                config: e,
                request: c,
              };
            Zr(
              function (d) {
                i(d), l();
              },
              function (d) {
                r(d), l();
              },
              g,
            ),
              (c = null);
          }

          if (
            ('onloadend' in c
              ? (c.onloadend = u)
              : (c.onreadystatechange = function () {
                  !c ||
                    c.readyState !== 4 ||
                    (c.status === 0 && !(c.responseURL && c.responseURL.indexOf('file:') === 0)) ||
                    setTimeout(u);
                }),
            (c.onabort = function () {
              c && (r(new k('Request aborted', k.ECONNABORTED, e, c)), (c = null));
            }),
            (c.onerror = function () {
              r(new k('Network Error', k.ERR_NETWORK, e, c)), (c = null);
            }),
            (c.ontimeout = function () {
              let f = e.timeout ? 'timeout of ' + e.timeout + 'ms exceeded' : 'timeout exceeded';
              const g = e.transitional || gt;
              e.timeoutErrorMessage && (f = e.timeoutErrorMessage),
                r(new k(f, g.clarifyTimeoutError ? k.ETIMEDOUT : k.ECONNABORTED, e, c)),
                (c = null);
            }),
            _.isStandardBrowserEnv)
          ) {
            const h = (e.withCredentials || rs(p)) && e.xsrfCookieName && es.read(e.xsrfCookieName);
            h && n.set(e.xsrfHeaderName, h);
          }
          s === void 0 && n.setContentType(null),
            'setRequestHeader' in c &&
              w.forEach(n.toJSON(), function (f, g) {
                c.setRequestHeader(g, f);
              }),
            w.isUndefined(e.withCredentials) || (c.withCredentials = !!e.withCredentials),
            a && a !== 'json' && (c.responseType = e.responseType),
            typeof e.onDownloadProgress == 'function' && c.addEventListener('progress', At(e.onDownloadProgress, !0)),
            typeof e.onUploadProgress == 'function' &&
              c.upload &&
              c.upload.addEventListener('progress', At(e.onUploadProgress)),
            (e.cancelToken || e.signal) &&
              ((o = (h) => {
                c && (r(!h || h.type ? new Q(null, e, c) : h), c.abort(), (c = null));
              }),
              e.cancelToken && e.cancelToken.subscribe(o),
              e.signal && (e.signal.aborted ? o() : e.signal.addEventListener('abort', o)));
          const b = ss(p);
          if (b && _.protocols.indexOf(b) === -1) {
            r(new k('Unsupported protocol ' + b + ':', k.ERR_BAD_REQUEST, e));
            return;
          }
          c.send(s || null);
        });
      },
  };
  w.forEach(ue, (e, t) => {
    if (e) {
      try {
        Object.defineProperty(e, 'name', { value: t });
      } catch {}
      Object.defineProperty(e, 'adapterName', { value: t });
    }
  });
  const as = {
    getAdapter: (e) => {
      e = w.isArray(e) ? e : [e];
      const { length: t } = e;
      let i, r;
      for (let s = 0; s < t && ((i = e[s]), !(r = w.isString(i) ? ue[i.toLowerCase()] : i)); s++);
      if (!r)
        throw r === !1
          ? new k(`Adapter ${i} is not supported by the environment`, 'ERR_NOT_SUPPORT')
          : new Error(w.hasOwnProp(ue, i) ? `Adapter '${i}' is not available in the build` : `Unknown adapter '${i}'`);
      if (!w.isFunction(r)) throw new TypeError('adapter is not a function');
      return r;
    },
    adapters: ue,
  };

  function Be(e) {
    if ((e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)) throw new Q(null, e);
  }

  function xt(e) {
    return (
      Be(e),
      (e.headers = j.from(e.headers)),
      (e.data = ze.call(e, e.transformRequest)),
      ['post', 'put', 'patch'].indexOf(e.method) !== -1 &&
        e.headers.setContentType('application/x-www-form-urlencoded', !1),
      as
        .getAdapter(e.adapter || Me.adapter)(e)
        .then(
          function (r) {
            return Be(e), (r.data = ze.call(e, e.transformResponse, r)), (r.headers = j.from(r.headers)), r;
          },
          function (r) {
            return (
              vt(r) ||
                (Be(e),
                r &&
                  r.response &&
                  ((r.response.data = ze.call(e, e.transformResponse, r.response)),
                  (r.response.headers = j.from(r.response.headers)))),
              Promise.reject(r)
            );
          },
        )
    );
  }

  const St = (e) => (e instanceof j ? e.toJSON() : e);

  function q(e, t) {
    t = t || {};
    const i = {};

    function r(c, p, u) {
      return w.isPlainObject(c) && w.isPlainObject(p)
        ? w.merge.call({ caseless: u }, c, p)
        : w.isPlainObject(p)
        ? w.merge({}, p)
        : w.isArray(p)
        ? p.slice()
        : p;
    }

    function s(c, p, u) {
      if (w.isUndefined(p)) {
        if (!w.isUndefined(c)) return r(void 0, c, u);
      } else return r(c, p, u);
    }

    function n(c, p) {
      if (!w.isUndefined(p)) return r(void 0, p);
    }

    function a(c, p) {
      if (w.isUndefined(p)) {
        if (!w.isUndefined(c)) return r(void 0, c);
      } else return r(void 0, p);
    }

    function o(c, p, u) {
      if (u in t) return r(c, p);
      if (u in e) return r(void 0, c);
    }

    const l = {
      url: n,
      method: n,
      data: n,
      baseURL: a,
      transformRequest: a,
      transformResponse: a,
      paramsSerializer: a,
      timeout: a,
      timeoutMessage: a,
      withCredentials: a,
      adapter: a,
      responseType: a,
      xsrfCookieName: a,
      xsrfHeaderName: a,
      onUploadProgress: a,
      onDownloadProgress: a,
      decompress: a,
      maxContentLength: a,
      maxBodyLength: a,
      beforeRedirect: a,
      transport: a,
      httpAgent: a,
      httpsAgent: a,
      cancelToken: a,
      socketPath: a,
      responseEncoding: a,
      validateStatus: o,
      headers: (c, p) => s(St(c), St(p), !0),
    };
    return (
      w.forEach(Object.keys(Object.assign({}, e, t)), function (p) {
        const u = l[p] || s,
          b = u(e[p], t[p], p);
        (w.isUndefined(b) && u !== o) || (i[p] = b);
      }),
      i
    );
  }

  const Et = '1.4.0',
    Ie = {};
  ['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach((e, t) => {
    Ie[e] = function (r) {
      return typeof r === e || 'a' + (t < 1 ? 'n ' : ' ') + e;
    };
  });
  const Tt = {};
  Ie.transitional = function (t, i, r) {
    function s(n, a) {
      return '[Axios v' + Et + "] Transitional option '" + n + "'" + a + (r ? '. ' + r : '');
    }

    return (n, a, o) => {
      if (t === !1) throw new k(s(a, ' has been removed' + (i ? ' in ' + i : '')), k.ERR_DEPRECATED);
      return (
        i &&
          !Tt[a] &&
          ((Tt[a] = !0),
          console.warn(s(a, ' has been deprecated since v' + i + ' and will be removed in the near future'))),
        t ? t(n, a, o) : !0
      );
    };
  };

  function os(e, t, i) {
    if (typeof e != 'object') throw new k('options must be an object', k.ERR_BAD_OPTION_VALUE);
    const r = Object.keys(e);
    let s = r.length;
    for (; s-- > 0; ) {
      const n = r[s],
        a = t[n];
      if (a) {
        const o = e[n],
          l = o === void 0 || a(o, n, e);
        if (l !== !0) throw new k('option ' + n + ' must be ' + l, k.ERR_BAD_OPTION_VALUE);
        continue;
      }
      if (i !== !0) throw new k('Unknown option ' + n, k.ERR_BAD_OPTION);
    }
  }

  const Re = { assertOptions: os, validators: Ie },
    V = Re.validators;

  class pe {
    constructor(t) {
      (this.defaults = t), (this.interceptors = { request: new ht(), response: new ht() });
    }

    request(t, i) {
      typeof t == 'string' ? ((i = i || {}), (i.url = t)) : (i = t || {}), (i = q(this.defaults, i));
      const { transitional: r, paramsSerializer: s, headers: n } = i;
      r !== void 0 &&
        Re.assertOptions(
          r,
          {
            silentJSONParsing: V.transitional(V.boolean),
            forcedJSONParsing: V.transitional(V.boolean),
            clarifyTimeoutError: V.transitional(V.boolean),
          },
          !1,
        ),
        s != null &&
          (w.isFunction(s)
            ? (i.paramsSerializer = { serialize: s })
            : Re.assertOptions(
                s,
                {
                  encode: V.function,
                  serialize: V.function,
                },
                !0,
              )),
        (i.method = (i.method || this.defaults.method || 'get').toLowerCase());
      let a;
      (a = n && w.merge(n.common, n[i.method])),
        a &&
          w.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], (f) => {
            delete n[f];
          }),
        (i.headers = j.concat(a, n));
      const o = [];
      let l = !0;
      this.interceptors.request.forEach(function (g) {
        (typeof g.runWhen == 'function' && g.runWhen(i) === !1) ||
          ((l = l && g.synchronous), o.unshift(g.fulfilled, g.rejected));
      });
      const c = [];
      this.interceptors.response.forEach(function (g) {
        c.push(g.fulfilled, g.rejected);
      });
      let p,
        u = 0,
        b;
      if (!l) {
        const f = [xt.bind(this), void 0];
        for (f.unshift.apply(f, o), f.push.apply(f, c), b = f.length, p = Promise.resolve(i); u < b; )
          p = p.then(f[u++], f[u++]);
        return p;
      }
      b = o.length;
      let h = i;
      for (u = 0; u < b; ) {
        const f = o[u++],
          g = o[u++];
        try {
          h = f(h);
        } catch (A) {
          g.call(this, A);
          break;
        }
      }
      try {
        p = xt.call(this, h);
      } catch (f) {
        return Promise.reject(f);
      }
      for (u = 0, b = c.length; u < b; ) p = p.then(c[u++], c[u++]);
      return p;
    }

    getUri(t) {
      t = q(this.defaults, t);
      const i = yt(t.baseURL, t.url);
      return mt(i, t.params, t.paramsSerializer);
    }
  }

  w.forEach(['delete', 'get', 'head', 'options'], function (t) {
    pe.prototype[t] = function (i, r) {
      return this.request(q(r || {}, { method: t, url: i, data: (r || {}).data }));
    };
  }),
    w.forEach(['post', 'put', 'patch'], function (t) {
      function i(r) {
        return function (n, a, o) {
          return this.request(
            q(o || {}, { method: t, headers: r ? { 'Content-Type': 'multipart/form-data' } : {}, url: n, data: a }),
          );
        };
      }

      (pe.prototype[t] = i()), (pe.prototype[t + 'Form'] = i(!0));
    });
  const me = pe;

  class Ne {
    constructor(t) {
      if (typeof t != 'function') throw new TypeError('executor must be a function.');
      let i;
      this.promise = new Promise(function (n) {
        i = n;
      });
      const r = this;
      this.promise.then((s) => {
        if (!r._listeners) return;
        let n = r._listeners.length;
        for (; n-- > 0; ) r._listeners[n](s);
        r._listeners = null;
      }),
        (this.promise.then = (s) => {
          let n;
          const a = new Promise((o) => {
            r.subscribe(o), (n = o);
          }).then(s);
          return (
            (a.cancel = function () {
              r.unsubscribe(n);
            }),
            a
          );
        }),
        t(function (n, a, o) {
          r.reason || ((r.reason = new Q(n, a, o)), i(r.reason));
        });
    }

    throwIfRequested() {
      if (this.reason) throw this.reason;
    }

    subscribe(t) {
      if (this.reason) {
        t(this.reason);
        return;
      }
      this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
    }

    unsubscribe(t) {
      if (!this._listeners) return;
      const i = this._listeners.indexOf(t);
      i !== -1 && this._listeners.splice(i, 1);
    }

    static source() {
      let t;
      return {
        token: new Ne(function (s) {
          t = s;
        }),
        cancel: t,
      };
    }
  }

  const ls = Ne;

  function cs(e) {
    return function (i) {
      return e.apply(null, i);
    };
  }

  function ds(e) {
    return w.isObject(e) && e.isAxiosError === !0;
  }

  const De = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511,
  };
  Object.entries(De).forEach(([e, t]) => {
    De[t] = e;
  });
  const fs = De;

  function Ct(e) {
    const t = new me(e),
      i = Qe(me.prototype.request, t);
    return (
      w.extend(i, me.prototype, t, { allOwnKeys: !0 }),
      w.extend(i, t, null, { allOwnKeys: !0 }),
      (i.create = function (s) {
        return Ct(q(e, s));
      }),
      i
    );
  }

  const L = Ct(Me);
  (L.Axios = me),
    (L.CanceledError = Q),
    (L.CancelToken = ls),
    (L.isCancel = vt),
    (L.VERSION = Et),
    (L.toFormData = le),
    (L.AxiosError = k),
    (L.Cancel = L.CanceledError),
    (L.all = function (t) {
      return Promise.all(t);
    }),
    (L.spread = cs),
    (L.isAxiosError = ds),
    (L.mergeConfig = q),
    (L.AxiosHeaders = j),
    (L.formToJSON = (e) => wt(w.isHTMLForm(e) ? new FormData(e) : e)),
    (L.HttpStatusCode = fs),
    (L.default = L);
  const kt = L,
    us = (...e) => {},
    ps = async ({ debug: e = !1, ...t }) => {
      var i, r;
      try {
        const { method: s = 'post', ...n } = t,
          a = await kt({ method: s, ...n });
        return e && us(a), a.data;
      } catch (s) {
        let n;
        if (kt.isAxiosError(s)) {
          const a = (i = s.response) == null ? void 0 : i.data;
          n =
            (a == null ? void 0 : a.code) ||
            (a == null ? void 0 : a.error) ||
            (a == null ? void 0 : a.message) ||
            ((r = s.response) == null ? void 0 : r.status) ||
            s.message;
        } else n = s.message;
        throw n;
      }
    },
    ms = () => {
      new N('.swiper', {
        loop: !0,
        pagination: { clickable: !0, el: '.swiper-pagination' },
        navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
        scrollbar: { el: '.swiper-scrollbar' },
        modules: [Ki, Qi],
      });
    },
    hs = (e) => `<div class="swiper-slide">
            <div class="user">
                <div class="user__name">Full Name: ${e.firstName} ${e.lastName}</div>
                <div class="user__nick">Nickname: ${e.username}</div>
                <div class="user__age">Age: ${e.age}</div>
                <div class="user__email">Email: ${e.email}</div>
                <div class="user__birth">Birthday: ${e.birthDate}</div>
                <img class="user__avatar" src="${e.image}" alt="${e.firstName} ${e.lastName}">
            </div>
           </div>`,
    gs = (e, t) => {
      const { users: i } = t;
      e.innerHTML = Object.values(i)
        .map((r) => hs(r))
        .join('');
    },
    Pt = (e, t) => {
      e.innerHTML = `<p class="error">Something went wrong. ${t}<p>`;
    },
    ws = async (e) => {
      try {
        return await await ps({ url: e, method: 'get', debug: !0 });
      } catch (t) {
        throw Error(t);
      }
    };
  (() => {
    const e = 'https://dummyjson.com/users',
      t = document.getElementById('slider');
    if (!t) return !1;
    const i = t.querySelector('.swiper-wrapper');
    if (!i) {
      Pt(t, 'No swiper wrapper');
      return;
    }
    ws(e)
      .then((r) => gs(i, r))
      .then(ms)
      .catch((r) => Pt(t, r));
  })();
})();
