import http from "./method.js";

// Program列表
export const programList = (params = {}) => {
  return http().post("/course/api/program/list", params);
};

// // Program详情(未登录)(go to backend and find the return type)
// export const programDetail = (params = {}) => {
//   return http().post("/course/api/program/view", params);
// };

// Program详情(登录后)
export const ProgramCourseList = (params = {}) => {
  return http().post("/course/api/course/programsearch", params);
};
