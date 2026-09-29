import {
  c,
  l
} from "./chunk-XX6VK44Q.js";
import {
  t
} from "./chunk-PZ3UOULX.js";
import {
  J,
  z
} from "./chunk-EUZTI6ZJ.js";
import "./chunk-46DXP6YY.js";

// node_modules/@ionic/core/components/p-BT9-hMMz.js
var n = () => {
  const n2 = window;
  n2.addEventListener("statusTap", (() => {
    z((() => {
      const o = document.elementFromPoint(n2.innerWidth / 2, n2.innerHeight / 2);
      if (!o) return;
      const e = l(o);
      e && new Promise(((o2) => t(e, o2))).then((() => {
        J((async () => {
          e.style.setProperty("--overflow", "hidden"), await c(e, 300), e.style.removeProperty("--overflow");
        }));
      }));
    }));
  }));
};
export {
  n as startStatusTap
};
//# sourceMappingURL=p-BT9-hMMz-OJOQDULV.js.map
