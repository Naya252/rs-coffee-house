import { createHeader } from '../components/share/bar';
import createMenuSection from '../components/sections/menu';
import createFooter from '../components/share/footer';

export default function createMenuPage() {
  createHeader();
  createMenuSection();
  createFooter();
}
