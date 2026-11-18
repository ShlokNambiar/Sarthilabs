/* Sarthi Labs site settings shared by every page.
   SARTHI_ENGINE_ENDPOINT: where the Sarthi engine API (drawing review,
   tracing, enquiry forms) lives. '' = same origin, for a local copy served
   by the engine itself; any hosted copy (sarthilabs.in, the staging site)
   uses the engine hosted on Render. */
window.SARTHI_ENGINE_ENDPOINT = /^(localhost|127\.0\.0\.1|\[::1\])$/.test(location.hostname)
  ? ''
  : 'https://sarthi-cad-engine.onrender.com';
