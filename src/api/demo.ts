import { http } from "@/utils/http";

// 请求样例
export const getDemo = (params?: object) => {
  return http.request("get", "/getDemoData", { params });
};

export const getDemo2 = (params?: object) => {
  return http.request("post", "/getDemoData2", { params });
};
