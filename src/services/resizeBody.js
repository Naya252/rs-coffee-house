import { watchActiveSection, unWatchSections } from './watchSection';
import { cancelBurgerModal } from './setupBurger';
import { changeDevice } from '../ui/components/sections/menu';
import { CURRENT_PATH } from '../share/constants';

let prewSize = null;
let curSize = null;
let prewInline = null;
let curInline = null;

export function getCurrentDevice() {
  return curSize;
}

const resizeObserver = new ResizeObserver((entries) => {
  const [{ inlineSize }] = entries[0].borderBoxSize;

  // drow underline for the active section
  if (inlineSize > 1024) {
    watchActiveSection();
  }
  if (inlineSize <= 1024) {
    unWatchSections();
  }

  // check current size of device
  function checkDevice(pre, cur) {
    // change values of size & device
    function editDevice(val) {
      if (cur) {
        prewSize = cur;
        curSize = val;
      } else {
        curSize = val;
      }
      if ((cur && pre !== cur && pre !== null) || cur === null) {
        // close burger modal with change device
        if (document.querySelector('.side-container')) {
          cancelBurgerModal(document.querySelector('#burger-btn'));
        }
        if (CURRENT_PATH.includes('menu')) {
          changeDevice(curSize);
        }
      }
    }
    if (inlineSize > 768) {
      editDevice('desktop');
    }
    if (inlineSize <= 768) {
      editDevice('mobile');
    }
  }

  function saveSizes(pre, cur, size) {
    prewInline = cur;

    curInline = size;

    if (curInline && prewInline && curInline !== prewInline) {
      // close burger modal with resize
      if (document.querySelector('.side-container')) {
        cancelBurgerModal(document.querySelector('#burger-btn'));
      }
    }
  }

  checkDevice(prewSize, curSize);
  saveSizes(prewInline, curInline, inlineSize);
});

export default resizeObserver;
