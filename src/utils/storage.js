const getJson = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

const setJson = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export default {
  getItem: localStorage.getItem.bind(localStorage),
  getJson,
  setItem: localStorage.setItem.bind(localStorage),
  setJson,
  removeItem: localStorage.removeItem.bind(localStorage),
};
