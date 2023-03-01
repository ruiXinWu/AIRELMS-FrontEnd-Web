import http from "./method.js";

// Program列表(recruit page)
export const programList = (params = {}) => {
  return http().post("/course/api/program/list", params);
};

// Program searchbyname
export const ProgramSearch = (params = {}) => {
  return http().post("/course/api/program/searchbyname", params);
};

// Program detail详情(无需登录)
export const ProgramDetail = (params = {}) => {
  return http().post("/course/api/program/searchbyid", params);
};

// Program courseList详情(无需登录)
export const ProgramCourseList = (params = {}) => {
  return http().post("/course/api/course/programsearch", params);
};
