export function toInert(value, value2) {
  const body = document.querySelector('body');
  for (const child of body.children) {
    if (child !== value && child !== value2) {
      child.setAttribute('inert', true);
    }
  }
}

export function fromInert() {
  const body = document.querySelector('body');
  for (const child of body.children) {
    child.removeAttribute('inert');
  }
}
