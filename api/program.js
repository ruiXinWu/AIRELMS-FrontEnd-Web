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
//4.4
// Program getfullbyskillid
export const getfullbyskillid = (params = {}) => {
  return http().post("/course/api/programskill/getfullbyskillid", params);
};

// Program searchfullbyname
export const searchfullbyname = (params = {}) => {
  return http().post("/course/api/program/searchfullbyname", params);
};

// Program getprojectbyprogram
export const getprojectbyprogram = (params = {}) => {
  return http().post("/course/api/project/getprojectbyprogram", params);
};

// Program searchbyprojectid
export const searchbyprojectid = (params = {}) => {
  return http().post("/course/api/project/searchbyprojectid", params);
};

// Program getofficehourbyprogramid
export const getofficehourbyprogramid = (params = {}) => {
  return http().post("/course/api/program/getofficehourbyprogramid", params);
};
