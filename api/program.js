import http from "./method.js";

// Program列表(recruit page)
export const programList = (params = {}) => {
  return http().post("/course/api/program/list", params);
};

//skill列表(recruit page)
export const skillList = (params = {}) => {
  return http().post("/course/api/programskill/listskill", params);
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

// Program getbyskillname
export const getbyskillname = (params = {}) => {
  return http().post("/course/api/programskill/getbyskillname", params);
};
// Program List Category
export const categoryList = (params = {}) => {
  return http().post("/course/api/CategoryProgram/listcategory", params);
};
// Program getByCategoryId
export const getByCategoryId = (params = {}) => {
  return http().post("/course/api/CategoryProgram/getbycategoryid", params);
};
