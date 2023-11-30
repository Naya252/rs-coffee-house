import { createHeader } from '../share/bar';
import createMenuSection from '../sections/menu';
import createFooter from '../share/footer';

export default function createMenuPage() {
  createHeader();
  createMenuSection();
  createFooter();
}
