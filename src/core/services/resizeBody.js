import { watchActiveSection, unWatchSections } from './watchSection';

const resizeObserver = new ResizeObserver((entries) => {
  const [{ inlineSize }] = entries[0].borderBoxSize;
  if (inlineSize > 1024) {
    watchActiveSection();
  } else {
    unWatchSections();
  }
});

export default resizeObserver;
