<template>
  <div>
    <y-header :active="'zmzx'"></y-header>
    <div class="person_body clearfix">
      <div class="person_content">
        <div>
          <!--<i class="arrow left"></i>-->
          <h1 class="title_AIRE">{{ programObj.programName }}</h1>
        </div>
        <div>
          <h2 class="sub_title_AIRE">
            {{ programObj.description }}
          </h2>
        </div>
        <ul class="link_list">
          <li
            style="display: inline; margin: 3px; color: #ffffff"
            v-for="(skillItem, index) in programObj.skillDTOList"
            :key="index"
          >
            <button class="small_button" type="button">
              {{ skillItem.name }}
            </button>
          </li>
        </ul>
        <hr class="hr_program" />
        <!--这里是模拟后端拿到button预设值list数据-->
      </div>
      <div class="person_content1">
        <article class="super_Article">
          <h1 class="blue_subtitle">Office Hour</h1>
          <p style="margin-left: 30px; margin-bottom: 40px; font-size: 15px">
            Machine learning engineers act as critical members of the data
            science team. Their tasks involve researching, building, and
            designing
          </p>
          <ul class="article_List">
            <li>
              <article class="sub_Article">
                <h2>Professor Alex Ling</h2>
                <div style="margin-left: 20px; position: relative">
                  <span style="display: inline-block">
                    <img
                      class="circle_pic"
                      src="https://csci571.com/hw/hw3/images/shark.jpg"
                    />
                  </span>
                  <span class="introduction">
                    Machine learning engineers act as critical members of the
                    data science team. Their tasks involve researching,
                    building, and designing the artificial intelligence
                    responsible for machine learning and maintaining and
                    improving existing artificial intelligence systems.
                  </span>
                  <span class="align_right">
                    <button class="View_Program_button" type="button">
                      <nuxt-link
                        :to="{ name: 'companyInfo' }"
                        class="button_link"
                        >Sign Up</nuxt-link
                      >
                    </button>
                  </span>
                </div>
              </article>
            </li>
            <li>
              <article class="sub_Article">
                <h2>Professor Jared Yu</h2>
                <div style="margin-left: 20px; position: relative">
                  <span style="display: inline-block">
                    <img
                      class="circle_pic"
                      src="https://csci571.com/hw/hw3/images/lake.jpg"
                    />
                  </span>
                  <span class="introduction">
                    Machine learning engineers act as critical members of the
                    data science team. Their tasks involve researching,
                    building, and designing the artificial intelligence
                    responsible for machine learning and maintaining and
                    improving existing artificial intelligence systems.
                  </span>
                  <span class="align_right">
                    <button class="View_Program_button" type="button">
                      <nuxt-link
                        :to="{ name: 'companyInfo' }"
                        class="button_link"
                        >Sign Up</nuxt-link
                      >
                    </button>
                  </span>
                </div>
              </article>
            </li>
          </ul>
          <hr class="hr_program" />
          <div class="course_content">
            <h1 class="blue_subtitle1">Courses</h1>
            <ul class="clearfix">
              <li v-for="(item, index) in courseObj.list" :key="index">
                <nuxt-link
                  target="_blank"
                  :to="{ name: 'view-id', params: { id: item.id } }"
                  class="course_info"
                >
                  <div class="img_box">
                    <img class="course_img" :src="item.courseLogo" alt="" />
                  </div>
                  <p>{{ item.courseName }}</p>
                </nuxt-link>
              </li>
            </ul>
          </div>
          <hr class="hr_program" />
          <div class="course_content">
            <h1 class="blue_subtitle1">Projects</h1>
            <ul class="clearfix">
              <li>
                <nuxt-link
                  target="_self"
                  :to="{ name: 'projectview-id', params: { id: 12345 } }"
                  class="course_info"
                >
                  <div class="img_box">
                    <img
                      class="course_img"
                      src="https://csci571.com/hw/hw3/images/mountain.jpg"
                      alt=""
                    />
                  </div>
                  <p>Project1</p>
                </nuxt-link>
              </li>

              <!-- <li v-for="(item, index) in projectObj.list" :key="index">
                <nuxt-link
                  target="_blank"
                  :to="{ name: 'view-id', params: { id: item.id } }"
                  class="course_info"
                >
                  <div class="img_box">
                    <img
                      class="course_img"
                      src=""
                      alt=""
                    />
                  </div>
                  <p>{{item.projectName}}</p>
                </nuxt-link>
              </li> -->
            </ul>
          </div>
        </article>
      </div>
    </div>
    <y-footer></y-footer>
  </div>
</template>
<script>
import YHeader from "~/components/common/Header";
import YFooter from "~/components/common/Footer";
import YSide from "~/components/TerraceSide";
import { ProgramCourseList, ProgramDetail } from "~/api/program.js";
export default {
  head() {
    return {
      title: this.$store.state.clientData.name + "-Hiring Instructors",
      meta: [
        {
          hid: "keywords",
          name: "keywords",
          content: this.$store.state.webInfo.websiteKeyword,
        },
        {
          hid: "description",
          name: "description",
          content: this.$store.state.webInfo.websiteDesc,
        },
      ],
    };
  },
  data() {
    return {
      webInfo: this.$store.state.webInfo,
    };
  },
  async asyncData(context) {
    console.log("first render the page");
    let tk = context.store.state.tokenInfo;
    let dataObj = {};
    let clientNo = context.store.state.clientData.no;
    dataObj.clientNo = clientNo;
    dataObj.webInfo = context.store.state.webInfo;
    let obj = {
      pageCurrent: 3,
      pageSize: 30,
      programId: context.params.id,
    };
    let objDetail = {
      id: context.params.id,
    };
    let courseObj = {
      courselist: [],
      pageCurrent: "",
      pageSize: "",
      totalCount: "",
      totalPage: "",
    };
    try {
      console.log("enter try");
      console.log("has token");
      console.log(context.params.id);
      //有token info
      try {
        let programDetailData = await Promise.all([ProgramDetail(objDetail)]);
        console.log("programDetailData returned from backend");
        console.log(programDetailData[0]);
        let programObj = "";
        if (programDetailData[0].data.data !== undefined) {
          programObj = programDetailData[0].data.data;
          console.log("This is programObj");
          console.log(programObj);
        }
        dataObj.programObj = programObj;
      } catch (e) {
        console.log("we catched error when fetching programDetailData");
      }
      let courseData = await Promise.all([ProgramCourseList(obj)]);
      console.log("courseData returned from backend");
      console.log(courseData);
      let programCourseData = courseData[0];
      if (programCourseData.data.data.list.length > 0) {
        courseObj = programCourseData.data.data;
        console.log("This is courseObj");
        console.log(courseObj);
      }
      console.log("This is courseObj");
      console.log(courseObj);
      dataObj.obj = obj;
      dataObj.courseObj = courseObj;
      console.log("This is dataObj");
      console.log(dataObj);
      return dataObj;
    } catch (e) {
      console.log("we catched error");
      context.error({ message: "User not found", statusCode: 404 });
    }
  },
  methods: {
    goApply() {
      this.$router.push({ name: "apply" });
    },
  },
  mounted() {
    this.webInfo = this.$store.state.webInfo;
  },
  components: {
    YHeader,
    YFooter,
    YSide,
  },
};
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
.person_body {
  width: 1200px;
  margin: 30px auto 0;
  min-height: 1200px;
}
.person_content {
  width: 1152px;
  float: right;
  background: #f7dada;
  border-radius: 6px;
  min-height: 250px;
  .person_title {
    font-size: 14px;
    font-weight: 700;
    color: #333;
    text-align: center;
    line-height: 100px;
  }
  .hr_program {
    background-color: #0000ff;
    color: #0000ff;
    border-color: #0000ff;
    border-width: 1px;
    margin-bottom: 0px;
  }
}
.course_content {
  border-radius: 5px;
  background: rgb(243 231 231);
  padding: 30px 0 10px 0;
  margin-top: 10px;
  ul {
    width: 1200px;
    margin: 0 auto;
  }
  li {
    float: left;
    border-radius: 6px;
    background: #fff;
    margin: 0px 20px 20px 0px;
    &:nth-child(4n) {
      margin-right: 0px;
    }
  }
}
.course_info {
  display: block;
  width: 270px;
  height: 220px;
  border-radius: 6px;
  position: relative;
  &:hover {
    text-decoration: none;
    color: #000;
    box-shadow: 0px 3px 18px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
    transition: all 0.3s;
  }
  .img_box {
    position: relative;
    width: 270px;
    height: 140px;
    .course_img {
      width: 285px;
      height: 140px;
      border-radius: 6px 6px 0 0;
    }
  }
  p {
    font-size: 16px;
    margin-top: 5px;
    padding: 0 10px;
    word-break: break-all;
  }
  .price_box {
    font-size: 16px;
    position: absolute;
    bottom: 15px;
    left: 10px;
    color: red;
  }
}
.link_list {
  text-align: center;
  margin-top: 0px;
  margin-bottom: 30px;
  display: block;
  font-weight: bold;
  font: 15px Arial;
  color: blue;
}
.person_content1 {
  width: 1152px;
  margin: 15px auto 0;
  float: right;
  background: #fff;
  border-radius: 6px;
  min-height: 900px;
}
.title_AIRE {
  width: fit-content;
  padding: 30px 50px 30px;
  margin-inline: auto;
  min-height: 80px;
  color: #333;
  line-height: 28px;
  font-size: 38px;
  text-align: center;
}
.blue_subtitle {
  color: #2359d7;
  font-size: 28px;
  margin-left: 30px;
  margin-top: 20px;
  margin-bottom: 10px;
}
.blue_subtitle1 {
  color: #2359d7;
  font-size: 28px;
  margin-left: 10px;
  margin-bottom: 25px;
}
.sub_title_AIRE {
  padding: 30px 100px 30px;
  font-weight: 550;
  color: #333;
  line-height: 28px;
  font-size: 18px;
  text-align: center;
}
.arrow {
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
}
.left {
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
}
.sub_Article {
  margin: 10px;
  margin-top: 20px;
  border-radius: 5px;
  > h2 {
    margin: 20px;
    font-size: 20px;
  }
  .circle_pic {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
  .introduction {
    display: inline-block;
    font-size: 15px;
    width: 600px;
    height: 100px;
    padding-left: 40px;
  }
  p {
    margin: 20px;
    font-size: 15px;
    max-width: 600px;
  }
  .align_right {
    display: inline-block;
    position: absolute;
    bottom: 30px;
    right: 40px;
  }
  .View_Program_button {
    float: right;
    font-size: 15px;
    background-color: #0000ff;
    width: 120px;
    height: 50px;
    color: #ffffff;
    border-radius: 5px;
    .button_link {
      color: #ffffff;
    }
  }
}
.small_button {
  margin-right: 15px;
  color: #ffffff;
  background-color: #007fff;
  min-width: fit-content;
  height: 30px;
  border-radius: 5px;
  font-size: small;
}
.recruit_info {
  margin-top: 40px;
  .recruit_title {
    .cols {
      display: inline-block;
      width: 4px;
      height: 14px;
      background: rgba(51, 51, 51, 1);
      position: relative;
      top: 2px;
      margin-right: 4px;
    }
    font-weight: 700;
  }
  .msg_rows {
    margin-top: 10px;
    padding-left: 10px;
  }
}
.apply_btn {
  display: inline-block;
  width: 160px;
  line-height: 36px;
  color: #fff;
  background: rgba(213, 20, 35, 1);
  text-align: center;
  border-radius: 6px;
  position: relative;
  left: 50%;
  margin-left: -80px;
  margin-top: 10px;
  &:hover {
    text-decoration: none;
  }
}
</style>
