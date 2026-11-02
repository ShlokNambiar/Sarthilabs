/* Sarthi Labs site settings shared by every page.
   SARTHI_ENGINE_ENDPOINT: where the Sarthi engine API (drawing check, tracing,
   enquiry forms) lives. '' = same origin (local demo, where the engine serves
   the site). On sarthilabs.in it is the hosted engine on Render. */
window.SARTHI_ENGINE_ENDPOINT = /(^|\.)sarthilabs\.in$/.test(location.hostname)
  ? 'https://sarthi-cad-engine.onrender.com'
  : '';
