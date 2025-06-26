/**
 * For now, we rely on the router.js script tag to be included
 * in the layout. This is just a helper module to get that object.
 *
 * https://github.com/symfony/webpack-encore/issues/97
 */
export default window.Routing;
//module.exports = window.Routing;