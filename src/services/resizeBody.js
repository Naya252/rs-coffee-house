import { watchActiveSection, unWatchSections } from './watchSection';
import { cancelBurgerModal } from './components/setupBurgerMenu';
import { removeModal } from './components/setupModal';
import { changeDevice } from '../ui/components/sections/menu';
import { CURRENT_PATH } from '../share/constants';

class Size {
  constructor(prewSize, curSize, prewInline, curInline) {
    this.prewSize = prewSize;
    this.curSize = curSize;
    this.prewInline = prewInline;
    this.curInline = curInline;
  }
}

export const size = new Size(null, null, null, null);

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
        size.prewSize = cur;
        size.curSize = val;
      } else {
        size.curSize = val;
      }
      if ((cur && pre !== cur && pre !== null) || cur === null) {
        // close burger modal with change device
        if (document.querySelector('.side-container')) {
          cancelBurgerModal(document.querySelector('#burger-btn'));
        }
        if (CURRENT_PATH.includes('menu')) {
          changeDevice(size.curSize, size.curInline);
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

  function saveSizes(pre, cur, inline) {
    size.prewInline = cur;

    size.curInline = inline;

    if (size.curInline && size.prewInline && size.curInline !== size.prewInline) {
      // close burger modal with resize
      if (document.querySelector('.side-container')) {
        cancelBurgerModal(document.querySelector('#burger-btn'));
      }
      if (document.querySelector('.modal__content.content--active')) {
        removeModal();
      }
    }
  }

  checkDevice(size.prewSize, size.curSize);
  saveSizes(size.prewInline, size.curInline, inlineSize);
});

export default resizeObserver;
