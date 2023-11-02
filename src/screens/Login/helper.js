/**
 * Watches screen size and updates returns icon size per calculation
 *
 * @param {Number} windowWidth Integer width of screen
 * @param {Number} windowHeight Integer height of screen
 *
 * @returns {Number} items per row
 */
export const calculateIconSize = (windowWidth, windowHeight) => {
  return windowHeight * 0.4 < 0.6 * windowWidth
    ? windowHeight * 0.4
    : 0.6 * windowWidth;
};
