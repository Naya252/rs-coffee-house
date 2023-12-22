export function toInert(modal) {
  const body = document.querySelector('body');
  for (const child of body.children) {
    if (child !== modal) {
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
