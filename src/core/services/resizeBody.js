import { watchActiveSection, unWatchSections } from './watchSection';
import { changeActiveTab } from '../../ui/components/sections/menu';

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
      if ((cur && pre !== cur) || cur === null) {
        changeActiveTab(curSize);
      }
    }

    if (inlineSize > 768) {
      editDevice('desktop');
    }
    if (inlineSize <= 768) {
      editDevice('mobile');
    }
  }
  checkDevice(prewSize, curSize);
});

export default resizeObserver;
