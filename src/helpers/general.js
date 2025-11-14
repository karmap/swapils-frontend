
const getLastSegment = (url) => {
  return url.replace(/\/$/, "").split("/").pop();
}

export default getLastSegment