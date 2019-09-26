
// https://fontawesome.com/how-to-use/on-the-web/setup/hosting-font-awesome-yourself

(function() {
  "use strict";

  var _WINDOW = {};
  var _DOCUMENT = {};

  try {
    if (typeof window !== "undefined") _WINDOW = window;
    if (typeof document !== "undefined") _DOCUMENT = document;
  } catch (e) {}

  var _ref = _WINDOW.navigator || {},
    _ref$userAgent = _ref.userAgent,
    userAgent = _ref$userAgent === void 0 ? "" : _ref$userAgent;

  var WINDOW = _WINDOW;
  var DOCUMENT = _DOCUMENT;
  var IS_BROWSER = !!WINDOW.document;
  var IS_DOM =
    !!DOCUMENT.documentElement &&
    !!DOCUMENT.head &&
    typeof DOCUMENT.addEventListener === "function" &&
    typeof DOCUMENT.createElement === "function";
  var IS_IE = ~userAgent.indexOf("MSIE") || ~userAgent.indexOf("Trident/");

  var NAMESPACE_IDENTIFIER = "___FONT_AWESOME___";
  var PRODUCTION = (function() {
    try {
      return "production" === "production";
    } catch (e) {
      return false;
    }
  })();

  function bunker(fn) {
    try {
      fn();
    } catch (e) {
      if (!PRODUCTION) {
        throw e;
      }
    }
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      var ownKeys = Object.keys(source);

      if (typeof Object.getOwnPropertySymbols === "function") {
        ownKeys = ownKeys.concat(
          Object.getOwnPropertySymbols(source).filter(function(sym) {
            return Object.getOwnPropertyDescriptor(source, sym).enumerable;
          })
        );
      }

      ownKeys.forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    }

    return target;
  }

  var w = WINDOW || {};
  if (!w[NAMESPACE_IDENTIFIER]) w[NAMESPACE_IDENTIFIER] = {};
  if (!w[NAMESPACE_IDENTIFIER].styles) w[NAMESPACE_IDENTIFIER].styles = {};
  if (!w[NAMESPACE_IDENTIFIER].hooks) w[NAMESPACE_IDENTIFIER].hooks = {};
  if (!w[NAMESPACE_IDENTIFIER].shims) w[NAMESPACE_IDENTIFIER].shims = [];
  var namespace = w[NAMESPACE_IDENTIFIER];

  function defineIcons(prefix, icons) {
    var params =
      arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var _params$skipHooks = params.skipHooks,
      skipHooks = _params$skipHooks === void 0 ? false : _params$skipHooks;
    var normalized = Object.keys(icons).reduce(function(acc, iconName) {
      var icon = icons[iconName];
      var expanded = !!icon.icon;

      if (expanded) {
        acc[icon.iconName] = icon.icon;
      } else {
        acc[iconName] = icon;
      }

      return acc;
    }, {});

    if (typeof namespace.hooks.addPack === "function" && !skipHooks) {
      namespace.hooks.addPack(prefix, normalized);
    } else {
      namespace.styles[prefix] = _objectSpread(
        {},
        namespace.styles[prefix] || {},
        normalized
      );
    }
  }

  var icons = {
    "arrow-left": [
      448,
      512,
      [],
      "",
      "M424.637,227.631H73.168L216.845,70.639c7.825-8.552,7.23-21.815-1.312-29.64c-8.561-7.855-21.836-7.22-29.64,1.311L13.765,230.416c-1.393,0.728-2.868,1.229-4.097,2.284c-8.768,7.558-9.75,20.802-2.212,29.589l178.007,206.931c4.138,4.814,10.017,7.292,15.917,7.292c4.854,0,9.708-1.659,13.662-5.08c8.788-7.56,9.792-20.791,2.232-29.579L69.072,269.582h355.564c11.594,0,20.975-9.381,20.975-20.976C445.611,237.023,436.23,227.631,424.637,227.631z"
    ],
    bars: [
      448,
      512,
      [],
      "",
      "M1.25,264.5c0-10.251,8.311-18.562,18.562-18.562h259.875c10.261,0,18.561,8.311,18.561,18.562c0,10.258-8.3,18.563-18.561,18.563H19.812C9.561,283.063,1.25,274.758,1.25,264.5z M428.188,394.438H19.812c-10.251,0-18.562,8.301-18.562,18.562c0,10.262,8.311,18.563,18.562,18.563h408.375c10.26,0,18.562-8.302,18.562-18.563C446.75,402.738,438.447,394.438,428.188,394.438z M353.937,97.438H182.082h-13.86H19.812c-10.251,0-18.562,8.302-18.562,18.562c0,10.262,8.311,18.563,18.562,18.563h148.41h13.86h171.855c10.263,0,18.565-8.302,18.565-18.563C372.502,105.739,364.199,97.438,353.937,97.438z"
    ],
    bell: [
      512,
      512,
      [],
      "",
      "M440.06,428.6l-34.35-68.76V185.38C405.71,83,322.79,0,220.5,0S35.29,83,35.29,185.38V359.85L.94,428.6a8.83,8.83,0,0,0,7.89,12.78H141.62a79.36,79.36,0,0,0,157.75,0H432.17A8.83,8.83,0,0,0,440.06,428.6ZM52.93,185.38c0-92.63,75-167.72,167.57-167.72S388.07,92.75,388.07,185.38V353.1H52.93Zm167.57,309a61.77,61.77,0,0,1-61.11-53H281.61A61.77,61.77,0,0,1,220.5,494.34Zm70.56-70.62H23.1l26.46-53H391.44l26.46,53Z"
    ],
    book: [
      448,
      512,
      [],
      "",
      "M464.24,0H43.82A43.78,43.78,0,0,0,0,43.75V441.13c0,.29,0,.57,0,.86s0,.28,0,.42c0,1.19,0,2.4,0,3.62v.27H0c0,.05,0,.11,0,.16a10.11,10.11,0,0,0,.31,2.31A70.05,70.05,0,0,0,70.07,512H464.24a8.76,8.76,0,0,0,8.76-8.75V8.75A8.76,8.76,0,0,0,464.24,0ZM105.11,17.5H192.7V144.61l-36.88-38.15a8.76,8.76,0,0,0-12.53-.07L105.11,145ZM455.48,431.75H359.13a8.75,8.75,0,1,0,0,17.5h96.35V494.5H70.07a52.52,52.52,0,0,1-52.53-51.65v-.64q0-2.54.2-4.94A52.53,52.53,0,0,1,48.86,394a75.58,75.58,0,0,1,16.26-3.17l195.26,0h195.1Zm0-59.77H70.07a69.86,69.86,0,0,0-28.18,5.91,61.71,61.71,0,0,0-24.35,14.91V43.75A26.27,26.27,0,0,1,43.82,17.5H87.59V166.27a8.76,8.76,0,0,0,15,6.15l46.87-47.36,45.71,47.29a8.76,8.76,0,0,0,15.06-6.08V17.5H455.48Z"
    ],
    calendar: [
      448,
      512,
      [],
      "",
      "M248.5,391.53a22.59,22.59,0,1,0-22.59-22.59A22.59,22.59,0,0,0,248.5,391.53Zm0,15.06a37.65,37.65,0,1,1,37.65-37.65A37.65,37.65,0,0,1,248.5,406.59ZM128,391.53a22.59,22.59,0,1,0-22.59-22.59A22.59,22.59,0,0,0,128,391.53Zm0,15.06a37.65,37.65,0,1,1,37.65-37.65A37.65,37.65,0,0,1,128,406.59ZM369,301.18a22.59,22.59,0,1,0-22.59-22.59A22.59,22.59,0,0,0,369,301.18Zm0,15.06a37.65,37.65,0,1,1,37.65-37.65A37.65,37.65,0,0,1,369,316.24ZM248.5,301.18a22.59,22.59,0,1,0-22.59-22.59A22.59,22.59,0,0,0,248.5,301.18Zm0,15.06a37.65,37.65,0,1,1,37.65-37.65A37.65,37.65,0,0,1,248.5,316.24ZM128,301.18a22.59,22.59,0,1,0-22.59-22.59A22.59,22.59,0,0,0,128,301.18Zm0,15.06a37.65,37.65,0,1,1,37.65-37.65A37.65,37.65,0,0,1,128,316.24ZM481.94,165.65H15.06V489.41a7.53,7.53,0,0,0,7.53,7.53H474.41a7.53,7.53,0,0,0,7.53-7.53ZM376.52,30.12h97.89A22.59,22.59,0,0,1,497,52.71V489.41A22.59,22.59,0,0,1,474.41,512H22.59A22.59,22.59,0,0,1,0,489.41V52.71A22.59,22.59,0,0,1,22.59,30.12h97.89V7.53a7.53,7.53,0,0,1,15.06,0V30.12H361.45V7.53a7.53,7.53,0,0,1,15.06,0ZM361.45,45.18H135.55V67.76a7.53,7.53,0,0,1-15.06,0V45.18H22.59a7.53,7.53,0,0,0-7.53,7.53v97.88H481.94V52.71a7.53,7.53,0,0,0-7.53-7.53H376.52V67.76a7.53,7.53,0,0,1-15.06,0Z"
    ],
    download: [
      448,
      512,
      [],
      "",
      "M398.88,300.39,260.11,439.16c-.06.06-.14.1-.2.16a8.2,8.2,0,0,1-1,.85,8,8,0,0,1-.71.39c-.23.12-.45.27-.7.37a8.07,8.07,0,0,1-.88.27c-.22.06-.42.15-.65.19a8.22,8.22,0,0,1-1.6.16h0a8.21,8.21,0,0,1-1.6-.16c-.24,0-.45-.14-.68-.2a4.76,4.76,0,0,1-1.6-.66c-.22-.12-.44-.21-.65-.35a8.21,8.21,0,0,1-1.19-1l-.05,0h0L109.76,300.39a8.18,8.18,0,0,1,11.56-11.56L246.15,413.64V8.18a8.18,8.18,0,0,1,16.35,0V413.64L387.32,288.83a8.18,8.18,0,0,1,11.56,11.56Zm91.76,195.25H16.35V405.7A8.18,8.18,0,0,0,0,405.7v98.12A8.18,8.18,0,0,0,8.18,512H498.82a8.18,8.18,0,0,0,8.18-8.18V405.7a8.18,8.18,0,0,0-16.35,0Z"
    ],
    envelope: [
      605,
      512,
      [],
      "",
      "M579.2,16.45a9.37,9.37,0,0,1,9.36,9.37V486.18a9.37,9.37,0,0,1-9.36,9.37H25.8a9.37,9.37,0,0,1-9.36-9.37V25.82a9.37,9.37,0,0,1,9.36-9.37H579.2M579.2,0H25.8A25.81,25.81,0,0,0,0,25.82V486.18A25.81,25.81,0,0,0,25.8,512H579.2A25.81,25.81,0,0,0,605,486.18V25.82A25.81,25.81,0,0,0,579.2,0ZM307.76,268.67,558,60.61A8.23,8.23,0,0,0,547.46,48l-245,203.69L57.54,48A8.23,8.23,0,0,0,47,60.61L297.24,268.67a8.22,8.22,0,0,0,10.51,0Z"
    ],
    exclamation: [
      225,
      512,
      [],
      "",
      "M150,0H75A75.15,75.15,0,0,0,0,75.29V436.71A75.15,75.15,0,0,0,75,512h75a75.15,75.15,0,0,0,75-75.29V75.29A75.15,75.15,0,0,0,150,0ZM110,90.44q1.24-.08,2.48-.08a37.42,37.42,0,0,1,37.35,37.5q0,1.25-.08,2.49l-13.32,201H88.55l-13.32-201A37.45,37.45,0,0,1,110,90.44Zm2.48,346.27A37.65,37.65,0,1,1,150,399.06,37.57,37.57,0,0,1,112.5,436.71Z"
    ],
    "file-chart-line": [
      448,
      512,
      [],
      "",
      "M358.68,29.26H248.88V7.31A7.32,7.32,0,0,0,241.56,0H124.44a7.32,7.32,0,0,0-7.32,7.31V29.26H7.32A7.32,7.32,0,0,0,0,36.57V504.69A7.32,7.32,0,0,0,7.32,512H358.68a7.32,7.32,0,0,0,7.32-7.31V36.57A7.32,7.32,0,0,0,358.68,29.26ZM131.76,14.63H234.24V29.26H131.76Zm219.6,482.74H14.64V43.89H351.36ZM241.56,95.09a7.31,7.31,0,1,1,0,14.63H65.88a7.31,7.31,0,1,1,0-14.63Zm-183,65.83a7.32,7.32,0,0,1,7.32-7.31H183a7.31,7.31,0,1,1,0,14.63H65.88A7.32,7.32,0,0,1,58.56,160.91Zm148.3,231.15L280,309.66a7.32,7.32,0,0,1,11,9.71l-77.9,87.77a7.32,7.32,0,0,1-10.22.71l-66.1-56.29-66.1,56.29a7.32,7.32,0,1,1-9.5-11.13L132,336.38a7.32,7.32,0,0,1,9.5,0Z"
    ],
    filter: [
      448,
      512,
      [],
      "",
      "M481,0H31.05C17.88,0,8.09,6.5,2.73,18.8-2.52,31.47-.15,43.39,9.41,52.34L180.15,223.29l.19.19V391.16a29.72,29.72,0,0,0,9.08,21.64l89.82,89.93A29.29,29.29,0,0,0,301,512a33.2,33.2,0,0,0,12.09-2.46c12.16-5.31,18.61-15.08,18.61-28.27V223.48l.19-.19L502.41,52.57c9.71-9.09,12.14-21.14,6.84-33.93C503.94,6.45,494.17,0,481,0Zm10,40.78L317.72,214.29a8.28,8.28,0,0,0-2.39,5.8V481.27c0,6.51-2.6,10.55-8.43,13.1a18,18,0,0,1-6.45,1.34c-3.54,0-6.63-1.45-9.45-4.42l-90-90.08a13.5,13.5,0,0,1-4.29-10.05V220.09a8.28,8.28,0,0,0-2.39-5.8L20.82,40.57c-4.72-4.43-5.62-9-3-15.36C20.52,19,24.47,16.4,31.05,16.4H481c6.49,0,10.56,2.67,13.17,8.65C496.87,31.59,496,36.14,491,40.78Z"
    ],
    home: [
      448,
      512,
      [],
      "",
      "M215.09,503.47a8.41,8.41,0,0,1-8.27,8.53H74.46a8.41,8.41,0,0,1-8.27-8.53V230.4a8.28,8.28,0,1,1,16.55,0V494.93H198.55V349.87a8.41,8.41,0,0,1,8.27-8.53H339.18a8.41,8.41,0,0,1,8.27,8.53V494.93H463.27V230.4a8.28,8.28,0,1,1,16.55,0V503.47a8.41,8.41,0,0,1-8.27,8.53H339.18a8.41,8.41,0,0,1-8.27-8.53V358.4H215.09ZM273,19.53,532.51,237a8.1,8.1,0,0,0,11.64-1.24,8.72,8.72,0,0,0-1.2-12L278.22,1.91a8.08,8.08,0,0,0-10.43,0L3.06,223.78a8.72,8.72,0,0,0-1.2,12A8.1,8.1,0,0,0,13.49,237ZM463.27,51.2v79.86a8.28,8.28,0,1,0,16.55,0V42.67a8.41,8.41,0,0,0-8.27-8.53H372.27a8.54,8.54,0,0,0,0,17.07Z"
    ],
    invoice: [
      448,
      512,
      [],
      "",
      "M521.22,423.72H464.14V61.89A61.7,61.7,0,0,0,402.62,0h-337q-2.09,0-4.38,0h-.06L60.16,0A60.33,60.33,0,0,0,0,60.5V97.1a8.8,8.8,0,0,0,8.78,8.83h94.43c0,16.22,0,37.64,0,83.91V451.59C103.2,485.3,128.14,512,161,512H451c43.63,0,79-35.57,79-79.45A8.8,8.8,0,0,0,521.22,423.72ZM102.77,88.28H17.56V60.5A42.56,42.56,0,0,1,95.24,36.18c3.74,6,6.24,13.44,7.49,22.4,0,.64,0,1.28,0,1.92Zm18,363.31V62.22c-.14-1.56-.31-3.08-.5-4.58a60.39,60.39,0,0,0-10.54-31.43,55.7,55.7,0,0,0-6.66-8.53H402.62a44.09,44.09,0,0,1,44,44.21V423.72H219.31a8.8,8.8,0,0,0-8.78,8.83v17.8a43.87,43.87,0,0,1-43.75,44H161C138.09,494.34,120.76,475.79,120.76,451.59ZM451,494.34H209.73a61.64,61.64,0,0,0,18.36-44v-9H511.82A61.57,61.57,0,0,1,451,494.34Zm-224.85-291A41,41,0,0,1,267,162.3h7.77v-7.8a8.44,8.44,0,1,1,16.88,0v7.8h32.07a8.49,8.49,0,0,1,0,17H267a24.11,24.11,0,0,0,0,48.21h32.41a41.08,41.08,0,0,1,0,82.16h-7.77v7.79a8.44,8.44,0,1,1-16.88,0v-7.79H242.69a8.49,8.49,0,0,1,0-17h56.72a24.11,24.11,0,0,0,0-48.21H267A41,41,0,0,1,226.15,203.38Z"
    ],
    link: [
      448,
      512,
      [],
      "",
      "M202.17,408.84a8,8,0,0,1-.65,6.46l-41.91,72.54C150.87,503,134.57,512,116,512a57.83,57.83,0,0,1-28.83-7.83l-58.8-33.92A56.53,56.53,0,0,1,2.33,438.13a48.12,48.12,0,0,1,4-38.73l157.16-272c8.74-15.13,25-24.16,43.6-24.16A57.83,57.83,0,0,1,235.91,111L294.7,145c24.89,14.36,35.24,44.25,23.57,68l-.66,1.36-42.75,74a8.28,8.28,0,0,1-7.32,4,10,10,0,0,1-5-1.35,9.7,9.7,0,0,1-4.48-5.5,8,8,0,0,1,.65-6.46l41.91-72.54a32.06,32.06,0,0,0,2.68-25.81,37.13,37.13,0,0,0-17.1-21.11l-58.8-33.92a37.93,37.93,0,0,0-18.91-5.13c-12.3,0-23.13,6-29,16.11l-157.16,272a32.06,32.06,0,0,0-2.68,25.81,37.13,37.13,0,0,0,17.1,21.11l58.8,33.92a37.93,37.93,0,0,0,18.91,5.13c12.3,0,23.13-6,29-16.11L185.41,406a8.28,8.28,0,0,1,7.32-4,10,10,0,0,1,5,1.35A9.7,9.7,0,0,1,202.17,408.84ZM463.62,41.75,404.82,7.83A57.83,57.83,0,0,0,376,0c-18.56,0-34.86,9-43.6,24.16L290.48,96.7a8,8,0,0,0-.65,6.46,9.7,9.7,0,0,0,4.48,5.5,10,10,0,0,0,5,1.35,8.28,8.28,0,0,0,7.32-4l41.91-72.54c5.83-10.09,16.65-16.11,29-16.11a37.93,37.93,0,0,1,18.91,5.13l58.8,33.92a37.13,37.13,0,0,1,17.1,21.11,32.06,32.06,0,0,1-2.68,25.81l-157.16,272c-5.83,10.09-16.65,16.11-29,16.11a37.93,37.93,0,0,1-18.91-5.13l-58.8-33.92a37.13,37.13,0,0,1-17.1-21.11,32.06,32.06,0,0,1,2.68-25.81l41.91-72.54a8,8,0,0,0,.65-6.46,9.7,9.7,0,0,0-4.48-5.5,10,10,0,0,0-5-1.35,8.28,8.28,0,0,0-7.32,4L173.7,299.06c-11.63,23.78-1.28,53.63,23.6,68L256.09,401a57.83,57.83,0,0,0,28.83,7.83c18.56,0,34.86-9,43.6-24.16l157.16-272a48.12,48.12,0,0,0,4-38.73A56.53,56.53,0,0,0,463.62,41.75Z"
    ],
    "new-note": [
      448,
      512,
      [],
      "",
      "M512,8.21V396.9a8.22,8.22,0,0,1-8.21,8.21H462.15a8.21,8.21,0,1,1,0-16.42h33.44V16.42H123.31V49.85a8.21,8.21,0,1,1-16.42,0V8.21A8.22,8.22,0,0,1,115.1,0H503.79A8.22,8.22,0,0,1,512,8.21ZM426.05,77.74H37.36a8.22,8.22,0,0,0-8.21,8.21V366.36a8.21,8.21,0,1,0,16.42,0V94.16H417.84V466.43H145.64a8.21,8.21,0,0,0,0,16.42H426.05a8.22,8.22,0,0,0,8.21-8.21V85.95A8.22,8.22,0,0,0,426.05,77.74Zm-273.59,358a8.22,8.22,0,0,0-8.21-8.21H84.44V367.75a8.21,8.21,0,1,0-16.42,0v59.81H8.21a8.21,8.21,0,0,0,0,16.42H68v59.81a8.21,8.21,0,1,0,16.42,0V444h59.81A8.22,8.22,0,0,0,152.46,435.77Z"
    ],
    "paper-plane": [
      448,
      512,
      [],
      "",
      "M499.79,1,4.35,267.8a8.26,8.26,0,0,0,2.3,15.37l185.24,36.95,36.95,185.24a8.26,8.26,0,0,0,15.37,2.3L511,12.21A8.26,8.26,0,0,0,499.79,1ZM32.38,271.46,458.1,42.23,196.18,304.14ZM240.53,479.62l-32.67-163.8L469.75,53.94Z"
    ],
    print: [
      592,
      512,
      [],
      "",
      "M527.71,246.81a7.94,7.94,0,0,1-7.93,7.93H473.86a7.93,7.93,0,0,1,0-15.86h45.92A7.94,7.94,0,0,1,527.71,246.81ZM401,431.82H209.33c-4,0-7.27,3.56-7.27,7.93s3.26,7.93,7.27,7.93H401c4,0,7.27-3.56,7.27-7.93S405.05,431.82,401,431.82Zm0-36.75H209.33c-4,0-7.27,3.56-7.27,7.93s3.26,7.93,7.27,7.93H401c4,0,7.27-3.56,7.27-7.93S405.05,395.07,401,395.07ZM592,228.44v147a81.51,81.51,0,0,1-81.4,81.43H481.79v47.19a7.94,7.94,0,0,1-7.93,7.93H136.51a7.94,7.94,0,0,1-7.93-7.93V456.87H81.4A81.51,81.51,0,0,1,0,375.44v-147A81.51,81.51,0,0,1,81.4,147h47.18V26.31A26.33,26.33,0,0,1,154.88,0H455.49a26.33,26.33,0,0,1,26.3,26.31V147H510.6A81.51,81.51,0,0,1,592,228.44ZM144.44,147H465.93V26.31a10.45,10.45,0,0,0-10.44-10.44H154.88a10.45,10.45,0,0,0-10.44,10.44ZM465.22,495.78l-.15-149.52-320.64.35-.71,149.16ZM576.14,228.44a65.63,65.63,0,0,0-65.55-65.57H81.4a65.63,65.63,0,0,0-65.55,65.57v147A65.63,65.63,0,0,0,81.4,441h47.18V346.62H81.4a7.93,7.93,0,0,1,0-15.86H529a7.93,7.93,0,0,1,0,15.86l-48-.35.15,94.39h28.81c36.14,0,66.25-29.06,66.25-65.22Z"
    ],
    "ruler-pencil": [
      448,
      512,
      [],
      "",
      "M115.64,99.1a33,33,0,1,0-33-33A33,33,0,0,0,115.64,99.1Zm0-49.55A16.52,16.52,0,1,1,99.12,66.06,16.52,16.52,0,0,1,115.64,49.55ZM173.46,0H8.26A8.26,8.26,0,0,0,0,8.26V503.74A8.26,8.26,0,0,0,8.26,512h165.2a8.26,8.26,0,0,0,8.26-8.26V8.26A8.26,8.26,0,0,0,173.46,0ZM165.2,495.48H16.52V462.72H42.45a8.26,8.26,0,1,0,0-16.52H16.52V400.1H42.45a8.26,8.26,0,1,0,0-16.52H16.52V337.47H42.45a8.26,8.26,0,1,0,0-16.52H16.52V274.85H42.45a8.26,8.26,0,1,0,0-16.52H16.52V212.22H42.45a8.26,8.26,0,1,0,0-16.52H16.52V16.52H165.2ZM412.83,89.18s0-.08,0-.11A8.25,8.25,0,0,0,410.58,85L328,2.42a8.26,8.26,0,0,0-11.68,0L233.7,85a8.25,8.25,0,0,0-2.21,4.07s0,.08,0,.11a8.25,8.25,0,0,0-.17,1.66v412.9a8.26,8.26,0,0,0,8.26,8.26h165.2a8.26,8.26,0,0,0,8.26-8.26V90.84A8.25,8.25,0,0,0,412.83,89.18ZM396.48,99.1V429.42H247.8V99.1ZM247.8,445.94H396.48v16.52H247.8Zm74.34-426L384.8,82.58H259.48ZM247.8,495.48V479H396.48v16.52Z"
    ],
    share: [
      512,
      512,
      [],
      "",
      "M497.6,375.38a71.23,71.23,0,0,0-88.13,27.68L137.13,272.56A70.84,70.84,0,0,0,140.4,229L409.79,107.82a71.11,71.11,0,1,0-8.19-20L132.21,209.09A71.09,71.09,0,1,0,126,291.15L400.91,422.86a71.18,71.18,0,1,0,96.69-47.49ZM452.21,25.18a49.58,49.58,0,1,1-27.42,64.54A49.63,49.63,0,0,1,452.21,25.18ZM89.79,291.72a49.58,49.58,0,1,1,27.42-64.54A49.63,49.63,0,0,1,89.79,291.72Zm425.66,168.5a49.61,49.61,0,1,1-26.29-65A49.63,49.63,0,0,1,515.45,460.22Z"
    ],
    trash: [
      448,
      512,
      [],
      "",
      "M384,0H8A8.06,8.06,0,0,0,0,8v85.5a8.06,8.06,0,0,0,8,8H34.17V486.85A25.17,25.17,0,0,0,59.3,512H332.7a25.17,25.17,0,0,0,25.13-25.15V101.6H384a8.06,8.06,0,0,0,8-8V8A8.06,8.06,0,0,0,384,0ZM341.74,102.1V486.85a9.06,9.06,0,0,1-9,9.05H59.3a9.06,9.06,0,0,1-9-9.05V101.6H341.74Zm34.17-85.5V85.5H16.09V16.1H375.91Zm-231.68,384c0,4.83-3.61,8.76-8,8.76s-8-3.93-8-8.76V196.86c0-4.83,3.61-8.76,8-8.76s8,3.93,8,8.76Zm68.35-203.77V400.64c0,4.83-3.61,8.76-8,8.76s-8-3.93-8-8.76V196.86c0-4.83,3.61-8.76,8-8.76S212.59,192,212.59,196.86Zm59.8,0V400.64c0,4.83-3.61,8.76-8,8.76s-8-3.93-8-8.76V196.86c0-4.83,3.61-8.76,8-8.76S272.39,192,272.39,196.86Z"
    ],
    "user-circle": [
      448,
      512,
      [],
      "",
      "M257,279.27A100.85,100.85,0,1,0,156.15,178.42,100.85,100.85,0,0,0,257,279.27Zm0-186.18a85.33,85.33,0,1,1-85.33,85.33A85.33,85.33,0,0,1,257,93.09ZM257,0C115.62,0,1,114.62,1,256S115.62,512,257,512,513,397.38,513,256,398.38,0,257,0Zm0,15.52c132.82,0,240.48,107.67,240.48,240.48a239.41,239.41,0,0,1-49.15,145.67c-28.3-62.14-98.49-91.37-191-91.37-92.83,0-163.15,29.44-191.25,92A239.42,239.42,0,0,1,16.52,256C16.52,123.18,124.18,15.52,257,15.52Zm0,481A239.88,239.88,0,0,1,77.15,415.62,7.74,7.74,0,0,0,78,414c23.36-59.43,89.25-88.17,179.34-88.17,89.14,0,154.68,28.18,178.63,86.39a7.73,7.73,0,0,0,1.65,2.5A239.9,239.9,0,0,1,257,496.48Z"
    ],
    workspace: [
      512,
      512,
      [],
      "",
      "M500.5,0H11.5A11.44,11.44,0,0,0,0,11.5V500.6a11.5,11.5,0,0,0,11.5,11.5H500.6a11.5,11.5,0,0,0,11.5-11.5V11.5A11.59,11.59,0,0,0,500.5,0ZM105.9,489.1h-83V22.9h83Zm383.2,0H128.8V22.9H489V489.1ZM52.5,57.5h21a11.5,11.5,0,0,0,0-23h-21a11.5,11.5,0,0,0,0,23Zm0,37.1h2.7a11.5,11.5,0,0,0,0-23H52.5a11.5,11.5,0,1,0,0,23Zm0,123.4h21a11.5,11.5,0,0,0,0-23h-21a11.5,11.5,0,0,0,0,23Zm0,38.1h21a11.5,11.5,0,1,0,0-23h-21a11.5,11.5,0,0,0,0,23Zm146.8,2.7h84.8a11.5,11.5,0,0,0,11.5-11.5V162.5A11.48,11.48,0,0,0,284.2,151H199.4a11.5,11.5,0,0,0-11.5,11.5v84.8A11.35,11.35,0,0,0,199.3,258.8Zm11.4-84.9h61.9v61.9H210.7Zm114.6,84.9h84.8a11.5,11.5,0,0,0,11.5-11.5V162.5A11.48,11.48,0,0,0,410.2,151H325.4a11.5,11.5,0,0,0-11.5,11.5v84.8A11.42,11.42,0,0,0,325.3,258.8Zm11.5-84.9h61.9v61.9H336.8Zm-137.5,205h84.8a11.5,11.5,0,0,0,11.5-11.5V282.6a11.5,11.5,0,0,0-11.5-11.5H199.3a11.5,11.5,0,0,0-11.5,11.5v84.8A11.44,11.44,0,0,0,199.3,378.9Zm11.4-84.8h61.9V356H210.7Zm114.6,84.8h84.8a11.5,11.5,0,0,0,11.5-11.5V282.6a11.5,11.5,0,0,0-11.5-11.5H325.3a11.5,11.5,0,0,0-11.5,11.5v84.8A11.5,11.5,0,0,0,325.3,378.9Zm11.5-84.8h61.9V356H336.8Z"
    ],
    request: [
      512,
      512,
      [],
      "",
      "M512,155.29v345.1A11.54,11.54,0,0,1,500.54,512H11.46A11.54,11.54,0,0,1,0,500.38V11.61A11.54,11.54,0,0,1,11.46,0H348.74A11.54,11.54,0,0,1,360.2,11.61a11.54,11.54,0,0,1-11.46,11.61H22.93V488.77H489.07V155.29a11.46,11.46,0,1,1,22.93,0ZM151.95,289.82l222.83-225a11.35,11.35,0,0,1,16.25,0L448.21,123a11.86,11.86,0,0,1,0,16.46l-222.83,225A11.43,11.43,0,0,1,220,367.6S142.27,387,141.36,387c-7.27,0-12.88-7.3-11.16-14.42l18.7-77.25A11.66,11.66,0,0,1,151.95,289.82ZM157,359.38l54.36-13.61L423.82,131.22l-41-41.72L170.46,304ZM508.64,78,473.44,113.8a11.38,11.38,0,0,1-16.28,0L400,55.57a11.74,11.74,0,0,1,0-16.43L435.17,3.3a11.69,11.69,0,0,1,16.28,0l57.18,58.23A11.74,11.74,0,0,1,508.64,78Zm-24.34-8.22L443.32,28l-19,19.33,41,41.72Z"
    ],
    messages: [
      512,
      512,
      [],
      "",
      "M368.27,270.55a11.46,11.46,0,0,0,11.46-11.46V11.46A11.46,11.46,0,0,0,368.27,0H11.46A11.46,11.46,0,0,0,0,11.46V259.09a11.46,11.46,0,0,0,11.46,11.46h54v46a11.46,11.46,0,0,0,18.42,9.1l72.19-55.09ZM145.28,250,88.43,293.37V259.09A11.47,11.47,0,0,0,77,247.63h-54V22.92H356.8v224.7H152.24A11.41,11.41,0,0,0,145.28,250ZM512,195.46V443.09a11.46,11.46,0,0,1-11.46,11.46h-54v46a11.46,11.46,0,0,1-18.42,9.1l-72.2-55.09H143.71a11.46,11.46,0,0,1-11.46-11.46V320.75a11.46,11.46,0,1,1,22.93,0V431.63H359.76a11.41,11.41,0,0,1,7,2.36l56.85,43.39V443.09A11.47,11.47,0,0,1,435,431.63h54V206.92H401.21a11.46,11.46,0,0,1,0-22.92h99.33A11.46,11.46,0,0,1,512,195.46Z"
    ],
    "log-out": [
      512,
      512,
      [],
      "",
      "M500.5,0H11.5C5.1,0,0,5.1,0,11.5v489.1c0,6.3,5.1,11.5,11.5,11.5h489.1c6.3,0,11.5-5.1,11.5-11.5v-87.4c0-6.3-5.1-11.5-11.5-11.5s-11.5,5.1-11.5,11.5v75.9H22.9V22.9h466.1v76c0,6.3,5.1,11.5,11.5,11.5s11.5-5.1,11.5-11.5V11.5C512,5.1,506.9,0,500.5,0z M362.1,416.2c5,4.3,12.6,3.8,16.9-1.2c0,0,0,0,0,0l130.1-151.1c3.9-4.5,3.9-11.2,0-15.7L379,97.1c-4.3-5-11.9-5.6-16.9-1.3c-5,4.3-5.6,11.9-1.3,16.9l113,131.3H100c-6.6,0-12,5.4-12,12s5.4,12,12,12h373.8l-113,131.3C356.5,404.3,357.1,411.9,362.1,416.2z"
    ],
    "alert-warning": [
      595,
      518,
      [],
      "",
      "M589.73,457.56,332.09,19.22c-15.14-25.76-54.18-25.48-69.15,0L5.31,457.56C-10.07,483.73,10,518,39.89,518H555.15C585.51,518,604.89,483.36,589.73,457.56Zm-34.58,33.7H39.89c-9.77,0-16.31-12-11.53-20.15L286,32.77c4.88-8.3,18.34-8,23.05,0L566.68,471.11C571.63,479.54,564.58,491.26,555.15,491.26ZM279.78,415.49a17.72,17.72,0,1,1,17.72,17.72A17.72,17.72,0,0,1,279.78,415.49Zm35.55-44.57H279.67l-14.87-178.4a32.81,32.81,0,0,1,30-35.42q1.36-.11,2.72-.11a32.81,32.81,0,0,1,32.81,32.81q0,1.36-.11,2.72Z"
    ],
    "alert-info": [
      512,
      512,
      [],
      "",
      "M256,512C114.84,512,0,397.16,0,256S114.84,0,256,0,512,114.84,512,256,397.16,512,256,512Zm0-486C129.19,26,26,129.19,26,256S129.19,486,256,486,486,382.81,486,256,382.81,26,256,26Zm0,91.12a17.36,17.36,0,1,0,17.36,17.36A17.36,17.36,0,0,0,256,117.15Zm-17.36,86.78V377.49a17.36,17.36,0,1,0,34.71,0V203.93a17.36,17.36,0,1,0-34.71,0Z"
    ],
    "alert-error": [
      512,
      512,
      [],
      "",
      "M446.77,85.53l.32-.32L426.41,64.52l-.34.34A254.91,254.91,0,0,0,256,0C114.84,0,0,114.84,0,256S114.84,512,256,512,512,397.16,512,256A254.94,254.94,0,0,0,446.77,85.53ZM256,29.25A225.74,225.74,0,0,1,405.34,85.59L85.59,405.34A225.74,225.74,0,0,1,29.25,256C29.25,131,131,29.25,256,29.25Zm0,453.49a225.76,225.76,0,0,1-149.75-56.69l319.8-319.8A225.76,225.76,0,0,1,482.75,256C482.75,381,381,482.75,256,482.75Z"
    ],
    users: [
      512,
      512,
      [],
      "",
      "M432.48,348.33A81.14,81.14,0,0,0,459.39,288c0-44.73-37.4-81-82.15-81a132.94,132.94,0,0,0-67-65.61,81.16,81.16,0,1,0-108.51,0,132.89,132.89,0,0,0-67,65.61c-44.76,0-82.16,36.3-82.16,81a81.15,81.15,0,0,0,26.93,60.28A133.08,133.08,0,0,0,0,470.55v30a11.46,11.46,0,1,0,22.93,0v-30a110.3,110.3,0,0,1,85.15-107.73,11.46,11.46,0,0,0,2-21.63,58,58,0,0,1,16.55-110.64,55.49,55.49,0,0,1,23.3,1.87,58,58,0,0,1,7.4,108.77,11.46,11.46,0,0,0,2,21.63,110.3,110.3,0,0,1,85.15,107.73v30a11.46,11.46,0,0,0,22.93,0v-30a110.3,110.3,0,0,1,85.15-107.73,11.46,11.46,0,0,0,2-21.63A58,58,0,0,1,362,232.42a55.5,55.5,0,0,1,23.3-1.87,58,58,0,0,1,16.56,110.64,11.46,11.46,0,0,0,2,21.63,110.34,110.34,0,0,1,85.19,107.73v30a11.46,11.46,0,1,0,22.93,0v-30A133.07,133.07,0,0,0,432.48,348.33ZM297.07,288A81.14,81.14,0,0,0,324,348.33a132.74,132.74,0,0,0-68,68.25,132.74,132.74,0,0,0-68-68.25A81.15,81.15,0,0,0,214.88,288c0-36.08-23.85-66.39-56.5-76.89a110.21,110.21,0,0,1,71.93-55.26,11.46,11.46,0,0,0,2-21.63,58.22,58.22,0,1,1,47.25,0,11.46,11.46,0,0,0,2,21.63,110.25,110.25,0,0,1,72,55.26C320.92,221.66,297.07,252,297.07,288Z"
    ],
    user: [
      512,
      512,
      [],
      "",
      "M500.54,512a11.47,11.47,0,0,1-11.46-11.46c0-104.07-68.64-185-179.13-211.17a11.46,11.46,0,0,1-2-21.63,127.94,127.94,0,1,0-103.85,0,11.46,11.46,0,0,1-2,21.63C91.57,315.54,22.93,396.45,22.93,500.52a11.46,11.46,0,0,1-22.93,0C0,395.75,65.81,309.6,169.94,274.69a151,151,0,0,1-64.81-123.82C105.13,67.68,172.81,0,256,0S406.87,67.68,406.87,150.88a151,151,0,0,1-64.81,123.82C446.19,309.6,512,395.75,512,500.52A11.47,11.47,0,0,1,500.54,512Z"
    ],
    ship: [
      512,
      512,
      [],
      "",
      "M508.52,480.27a12.18,12.18,0,0,0-16.8,0,32.13,32.13,0,0,1-44.23,0,54.7,54.7,0,0,0-17.2-11.15l80.8-187.39a11.24,11.24,0,0,0-4.22-13.84L360,170.26V76.54a11.68,11.68,0,0,0-11.88-11.46H324.86V11.46A11.68,11.68,0,0,0,313,0H199a11.68,11.68,0,0,0-11.88,11.46V65.08H163.93a11.68,11.68,0,0,0-11.88,11.46v93.7L5.14,267.87A11.26,11.26,0,0,0,.91,281.73L88.74,485.41a30.81,30.81,0,0,1-7.43-5.14c-21.44-20.69-56.36-20.69-77.83,0a11.18,11.18,0,0,0,0,16.21,12.18,12.18,0,0,0,16.8,0,32.13,32.13,0,0,1,44.23,0,56.55,56.55,0,0,0,77.84,0,32.13,32.13,0,0,1,44.23,0,56.54,56.54,0,0,0,77.83,0,32.13,32.13,0,0,1,44.23,0,56.54,56.54,0,0,0,77.83,0,32.13,32.13,0,0,1,44.23,0,56.54,56.54,0,0,0,77.83,0A11.18,11.18,0,0,0,508.52,480.27ZM485.45,281.5l-27.63,64.08L267.89,221.94v-85ZM210.91,22.93H301.1V65.08H210.91ZM244.13,483a32.08,32.08,0,0,1-40.75-2.74c-21.47-20.69-56.39-20.69-77.83,0a31.18,31.18,0,0,1-10.43,6.64l-51.4-119.2,180.41-119.9Zm0-263L54.39,346.06,26.55,281.5l217.58-144.6Zm18.63-114.32a11.83,11.83,0,0,0-1.38-.65,11.67,11.67,0,0,0-1.23-.58,12.11,12.11,0,0,0-8.28,0,11.49,11.49,0,0,0-1.16.54,11.76,11.76,0,0,0-1.43.67l-73.45,48.81V88H336.2v66.46ZM406.36,464.93a55.61,55.61,0,0,0-36.69,15.33,32.13,32.13,0,0,1-44.23,0c-15.55-15-38.12-19-57.55-12.23V249.6L448.5,367.19Z"
    ],
    review: [
      512,
      512,
      [],
      "",
      "M432.48,348.33A81.14,81.14,0,0,0,459.39,288c0-44.73-37.4-81-82.15-81a132.94,132.94,0,0,0-67-65.61,81.16,81.16,0,1,0-108.51,0,132.89,132.89,0,0,0-67,65.61c-44.76,0-82.16,36.3-82.16,81a81.15,81.15,0,0,0,26.93,60.28A133.08,133.08,0,0,0,0,470.55v30a11.46,11.46,0,1,0,22.93,0v-30a110.3,110.3,0,0,1,85.15-107.73,11.46,11.46,0,0,0,2-21.63,58,58,0,0,1,16.55-110.64,55.49,55.49,0,0,1,23.3,1.87,58,58,0,0,1,7.4,108.77,11.46,11.46,0,0,0,2,21.63,110.3,110.3,0,0,1,85.15,107.73v30a11.46,11.46,0,0,0,22.93,0v-30a110.3,110.3,0,0,1,85.15-107.73,11.46,11.46,0,0,0,2-21.63A58,58,0,0,1,362,232.42a55.5,55.5,0,0,1,23.3-1.87,58,58,0,0,1,16.56,110.64,11.46,11.46,0,0,0,2,21.63,110.34,110.34,0,0,1,85.19,107.73v30a11.46,11.46,0,1,0,22.93,0v-30A133.07,133.07,0,0,0,432.48,348.33ZM297.07,288A81.14,81.14,0,0,0,324,348.33a132.74,132.74,0,0,0-68,68.25,132.74,132.74,0,0,0-68-68.25A81.15,81.15,0,0,0,214.88,288c0-36.08-23.85-66.39-56.5-76.89a110.21,110.21,0,0,1,71.93-55.26,11.46,11.46,0,0,0,2-21.63,58.22,58.22,0,1,1,47.25,0,11.46,11.46,0,0,0,2,21.63,110.25,110.25,0,0,1,72,55.26C320.92,221.66,297.07,252,297.07,288Z"
    ],
    file: [
      512,
      512,
      [],
      "",
      "M22.92,489.08H356.1V367.57a11.47,11.47,0,0,1,11.46-11.46H489.08V22.93H22.92ZM169,187.13H343a11.46,11.46,0,0,1,0,22.93H169a11.46,11.46,0,0,1,0-22.93Zm0,53.55H343a11.46,11.46,0,0,1,0,22.92H169a11.46,11.46,0,0,1,0-22.92Zm0,53.55h116.7a11.46,11.46,0,0,1,0,22.93H169a11.46,11.46,0,0,1,0-22.93Z"
    ],
    "exclamation-circle": [
      512,
      512,
      [],
      "",
      "M256,0C114.61,0,0,114.61,0,256S114.61,512,256,512,512,397.39,512,256,397.39,0,256,0Zm0,450.19a36.52,36.52,0,1,1,36.52-36.52A36.52,36.52,0,0,1,256,450.19Zm47.26-315.89L269.45,337.19H244L210.21,134.31V66.68h93.05Z"
    ]
  };

  bunker(function() {
    defineIcons("sds", icons);
  });
})();
