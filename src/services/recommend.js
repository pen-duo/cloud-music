import request from "./axios";
export function getTopBanner() {
  return request({
    url: "/banner",
  });
}
export function getHotRecommends(limit) {
  return request({
    url: "/personalized",
    params: {
      limit: limit,
    },
  });
}
