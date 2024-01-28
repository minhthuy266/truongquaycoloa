import GhostContentAPI from "@tryghost/content-api";

export const api = new GhostContentAPI({
  url: import.meta.env.VITE_API_URL,
  key: import.meta.env.VITE_APP_KEY,
  version: "v5.0",
});

export const removeAccents = (str) => {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D");
};
