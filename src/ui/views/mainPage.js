import { createHeader } from '../share/bar';
import createEnjoySection from '../sections/enjoy';
import createFavoriteSection from '../sections/favorite';
import createAboutSection from '../sections/about';
import createMobileSection from '../sections/mobile';
import createFooter from '../share/footer';

export default function createMainPage() {
  createHeader();
  createEnjoySection();
  createFavoriteSection();
  createAboutSection();
  createMobileSection();
  createFooter();
}
