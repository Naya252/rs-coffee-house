import { watchActiveSection, unWatchSections } from './watchSection';
import { changeDevice } from '../ui/components/sections/menu';
import { CURRENT_PATH } from '../share/constants';

let prewSize = null;
let curSize = null;

const resizeObserver = new ResizeObserver((entries) => {
  const [{ inlineSize }] = entries[0].borderBoxSize;
  if (inlineSize > 1024) {
    watchActiveSection();
  }
  if (inlineSize <= 1024) {
    unWatchSections();
  }

  function checkDevice(pre, cur) {
    function editDevice(val) {
      if (cur) {
        prewSize = cur;
        curSize = val;
      } else {
        curSize = val;
      }
      if ((cur && pre !== cur && pre !== null) || cur === null) {
        changeDevice(curSize);
      }
    }
    if (inlineSize > 768) {
      editDevice('desktop');
    }
    if (inlineSize <= 768) {
      editDevice('mobile');
    }
  }
  if (CURRENT_PATH.includes('menu')) {
    checkDevice(prewSize, curSize);
  }
});

export default resizeObserver;
