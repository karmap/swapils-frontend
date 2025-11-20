import { searchWithTrackingStats } from "./trackingStats";

const API_URL = `${import.meta.env.VITE_API_BASE}${"/api/swapi"}`;

export const getPeople = async (query) => {
  const res = await fetch(`${API_URL}/people/?search=${encodeURIComponent(query)}`);
  if (!res.ok) throw new Error("Network error");
  return res.json();
};

export const getPerson = async (id) => {
  const res = await fetch(`${API_URL}/people/${id}/`);
  if (!res.ok) throw new Error("Network error");
  return res.json();
};

export const getMovies = async (query) => {
  const res = await fetch(`${API_URL}/films/?search=${encodeURIComponent(query)}`);
  if (!res.ok) throw new Error("Network error");
  return res.json();
};

export const getMovie = async (id) => {
  const res = await fetch(`${API_URL}/films/${id}/`);
  if (!res.ok) throw new Error("Network error");
  return res.json();
};

export function getDetail(type, id) {
  switch (type) {
    case "people":
      return getPerson(id);
    case "movies":
      return getMovie(id);
    default:
      throw new Error(`Unknown detail type: ${type}`);
  }
}

export function getSearch(type, query) {
  switch (type) {
    case "people":
      return getPeople(query);
    case "movies":
      return getMovies(query);
    default:
      throw new Error(`Unknown search type: ${type}`);
  }
}

export const getSearchTracked = searchWithTrackingStats(getSearch);