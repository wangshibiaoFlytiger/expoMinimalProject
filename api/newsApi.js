import axiosInstance from "./axiosRequestNews";

// 查询新闻列表
export const findNewsList = function(params) {
  return axiosInstance({
    url: "/api/news/findDetailFeedNewsList",
    params: params
  });
};

// 查询某条新闻
export const getNewsById = function(params) {
  return axiosInstance({
    url: "/api/news/getNewsById",
    params: params
  });
};
