export let addClass = (e, classes) => {
  e.classList && e.classList.add(...classes.split(" "));
};
export let removeClass = (e, classes) => {
  e.classList && e.classList.remove(...classes.split(" "));
};
