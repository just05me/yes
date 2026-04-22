/** Статика из public/images с учётом Vite base (например /yes/ на GitHub Pages). */
export function publicImage(filename) {
  return `${import.meta.env.BASE_URL}images/${filename}`;
}
