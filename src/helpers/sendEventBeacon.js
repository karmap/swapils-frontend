export function sendSearchEvent({ query, type, duration, clientId }) {
  try {
    const payload = JSON.stringify({
      query,
      type,
      timestamp: Date.now(),
      duration,
      clientId
    });
    const URL = `${import.meta.env.VITE_API_BASE}/api/events`;
    navigator.sendBeacon(
      URL,
      new Blob([payload], { type: "application/json" })
    );
  } catch (error) {
    console.log("Failed to send event beacon", error);
  }
}