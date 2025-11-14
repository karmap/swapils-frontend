import { sendSearchEvent } from "./sendEventBeacon";

export function searchWithTrackingStats(apiFn) {
  return async function (type, query) {
    const start = performance.now();

    const data = await apiFn(type, query);

    const duration = Math.round(performance.now() - start);

    sendSearchEvent({
      query,
      type,
      duration,
      clientId: "react-app"
    });

    return data;
  };
}