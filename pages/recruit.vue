<template>
  <div>
    <y-header :active="'zmzx'"></y-header>
    <div class="person_body clearfix">
      <!--<y-side :type="'jszm'" :showSide="'zm'"></y-side>-->
      <div class="person_content">
        <button
          class="back_button"
          style="position: absolute; left: 5px; top: 5px"
          @click="refreshPage"
        >
          Go Back
        </button>
        <div>
          <h1 class="title_AIRE">Our Programs</h1>
        </div>
        <hr class="hr_program" />
        <form @submit.prevent="submitForm">
          <div class="input-group mb-3">
            <div class="input-group-prepend" @click="submitForm">
              <span class="input-group-text">
                <font-awesome-icon
                  icon="fa-solid fa-magnifying-glass"
                  class="img-magnifier"
                />
              </span>
            </div>
            <input type="text" class="form-control" v-model="inputContent" />
          </div>
        </form>
        <!--这里是模拟后端拿到搜索预设值list数据-->
        <!-- category list -->
        <ul id="category_list" class="link_list">
          <li
            v-for="(item, index) in cateObj.list"
            :key="index"
            class="subList"
          >
            <button
              class="buttonToLink"
              style="
                color: blue;
                background-color: white;
                border: none;
                text-decoration: none;
              "
              @click="handleCategoryButtonClick(item.id)"
            >
              {{ item.categoryName }}
            </button>
          </li>
        </ul>
        <ul id="program_List" class="link_list">
          <li
            v-for="(item, index) in pageObj.list"
            :key="index"
            class="subList"
          >
            <nuxt-link
              target="_self"
              :to="{ name: 'ProgramView-id', params: { id: item.id } }"
              class="button_link"
              >{{ item.programName }}</nuxt-link
            >
          </li>
        </ul>
        <ul id="skill_List" class="link_list">
          <li
            v-for="(item, index) in listObj.list"
            :key="index"
            class="subList"
          >
            <button @click="handleSkillButtonClick(item.skillId)">
              {{ item.skillName }}
            </button>
          </li>
        </ul>
      </div>
      <div class="person_content1">
        <ul>
          <li
            v-for="(item, index) in pageObj.list"
            :key="index"
            class="article_List"
          >
            <h2>{{ item.programName }}</h2>
            <p>{{ item.description.slice(0, 150) + "..." }}</p>
            <!--<nuxt-link target="_self" :to="{name: 'view-id', params: {id: item.id}}" class="course_info">-->
            <div class="align_right">
              <!-- put skillList here -->
              <span style="float: left; margin-left: 18px">
                <span>
                  <button
                    class="small_button"
                    type="button"
                    v-for="(skillItem, index) in item.skillDTOList"
                    @click="handleSkillButtonClick(skillItem.id)"
                  >
                    {{ skillItem.name }}
                  </button>
                </span>
              </span>
              <button class="View_Program_button" type="button">
                <nuxt-link
                  target="_self"
                  :to="{ name: 'ProgramView-id', params: { id: item.id } }"
                  class="button_link"
                  >View Program</nuxt-link
                >
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <y-footer></y-footer>
  </div>
</template>
<script>
import YHeader from "~/components/common/Header";
import YFooter from "~/components/common/Footer";
import YSide from "~/components/TerraceSide";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  programList,
  ProgramSearch,
  skillList,
  getbyskillname,
  categoryList,
  getByCategoryId,
  getfullbyskillid,
  searchfullbyname,
} from "~/api/program.js";
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
      inputContent: "",
    };
  },
  async asyncData(context) {
    //In Vue.js, asyncData is a special method that is used for loading
    //asynchronous data for a page or component before it is rendered
    let dataObj = {};
    let clientNo = context.store.state.clientData.no;
    dataObj.clientNo = clientNo;
    dataObj.webInfo = context.store.state.webInfo;
    let obj = {
      pageCurrent: 1,
      pageSize: 20,
    };
    let pageObj = {
      list: [],
      pageCurrent: "",
      pageSize: "",
      totalCount: "",
      totalPage: "",
    };
    let listObj = {
      list: [],
    };
    let cateObj = {
      list: [],
    };
    //let classObj = {
    //  categoryType: 5,
    //  orgNo: clientNo
    //}
    try {
      let allData = await Promise.all([
        programList(obj),
        skillList(),
        categoryList(),
      ]);
      console.log("This is allData");
      console.log(allData);
      // Program列表
      let programData = allData[0];
      console.log("This is programData");
      console.log(programData);
      if (programData.data.data.list.length > 0) {
        pageObj = programData.data.data;
        console.log("This is pageObj");
        console.log(pageObj);
      }
      // 分类
      //let classData = await allData[1];
      //let classList = classData.data.data.courseCategoryList || [];
      // category
      let categoryData = allData[2];
      console.log("This is CategoryData");
      console.log(categoryData);
      if (categoryData.data.data.list.length > 0) {
        cateObj = categoryData.data.data;
        console.log("This is cateObj");
        console.log(cateObj);
      }
      //skill 列表
      let skillData = allData[1];
      console.log("This is skillData");
      console.log(skillData);
      if (skillData.data.data.list.length > 0) {
        listObj = skillData.data.data;
        console.log("This is listObj");
        console.log(listObj);
      }
      dataObj.cateObj = cateObj;
      dataObj.listObj = listObj;
      dataObj.obj = obj;
      dataObj.pageObj = pageObj;
      console.log("This is dataObj");
      console.log(dataObj);
      return dataObj;
    } catch (e) {
      context.error({ message: "User not found", statusCode: 404 });
    }
  },
  methods: {
    submitForm() {
      // Your submit form logic here
      console.log(this.inputContent);
      let searchObj = {
        programName: this.inputContent,
      };
      console.log(searchObj);
      this.$nuxt.$loading.start();
      searchfullbyname(searchObj)
        .then((res) => {
          this.$nuxt.$loading.finish();
          let searchResult = res.data;
          console.log(searchResult);
          if (searchResult.code === 200) {
            if (searchResult.data.list.length > 0) {
              this.pageObj = searchResult.data;
            } else {
              this.pageObj = {};
            }
          } else {
            this.$msgBox({
              content: "error occur in ProgramSearch",
              isShowCancelBtn: false,
            });
            this.pageObj = {};
          }
        })
        .catch(() => {
          this.$nuxt.$loading.finish();
          this.$msgBox({
            content: "error occur in ProgramSearch",
            isShowCancelBtn: false,
          });
        });
    },
    handleSkillButtonClick(skillId) {
      // 等吴睿昕后端getByskillId实现
      console.log(skillId);
      let skillObj = {
        skillId: skillId,
      };
      console.log(skillObj);
      this.$nuxt.$loading.start();
      getfullbyskillid(skillObj)
        .then((res) => {
          this.$nuxt.$loading.finish();
          let searchResult = res.data;
          console.log(searchResult);
          if (searchResult.code === 200) {
            if (searchResult.data.list.length > 0) {
              this.pageObj = searchResult.data;
            } else {
              this.pageObj = {};
            }
          } else {
            this.$msgBox({
              content: "error occur in getbyskillname",
              isShowCancelBtn: false,
            });
            this.pageObj = {};
          }
        })
        .catch(() => {
          this.$nuxt.$loading.finish();
          this.$msgBox({
            content: "error occur in getbyskillname",
            isShowCancelBtn: false,
          });
        });
    },
    // the getByCategoryId method
    handleCategoryButtonClick(categoryId) {
      console.log(categoryId);
      let categoryObj = {
        categoryId: categoryId,
      };
      console.log(categoryObj);
      this.$nuxt.$loading.start();
      getByCategoryId(categoryObj)
        .then((res) => {
          this.$nuxt.$loading.finish();
          let searchResult = res.data;
          console.log(searchResult);
          if (searchResult.code === 200) {
            if (searchResult.data.list.length > 0) {
              this.pageObj = searchResult.data;
            } else {
              this.pageObj = {};
            }
          } else {
            this.$msgBox({
              content: "error occur in getByCategoryId method",
              isShowCancelBtn: false,
            });
            this.pageObj = {};
          }
        })
        .catch(() => {
          this.$nuxt.$loading.finish();
          this.$msgBox({
            content: "error occur in getbyskillname",
            isShowCancelBtn: false,
          });
        });
    },
    refreshPage() {
      console.log("refresh the page");
      location.reload();
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
a {
  text-decoration: none;
}
.person_body {
  width: 1200px;
  margin: 30px auto 0;
  min-height: 1200px;
}
.person_content {
  position: relative;
  width: 1152px;
  float: right;
  background: #fff;
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
  }
}
#mySearch {
  width: 800px;
  height: 25px;
  margin: auto;
  margin-top: 20px;
  display: block;
  background-color: #ede4e4;
  border-radius: 40px;
  border-color: blue;
  text-align: center;
  padding: 10px;
}
#searchButton {
  margin: auto;
  display: block;
}
.link_list {
  text-align: center;
  margin-top: 15px;
  display: block;
  font-weight: bold;
  font: 15px Arial;
  color: blue;
}
.buttonToLink {
  color: #0000ff;
  background-color: white;
  border: none;
}
// .buttonToLink:hover {
//   background: none;
//   text-decoration: underline;
// }
.subList {
  display: inline;
  margin: 10px;
  button {
    color: #ffffff;
    background-color: #4f82e1;
    padding: 3px;
    border-radius: 1px;
  }
}
.person_content1 {
  width: 1152px;
  margin: 30px auto 0;
  float: right;
  background: #fff;
  border-radius: 6px;
  min-height: 900px;
}
.title_AIRE {
  padding: 30px 50px 30px;
  min-height: 80px;
  color: #333;
  line-height: 28px;
  font-size: 38px;
  text-align: center;
}
.article_List {
  margin: 10px;
  padding: 20px;
  background-color: rgb(213, 188, 234);
  border-radius: 6px;
  border-color: #070709;
  border-width: 10px;
  h2 {
    margin: 20px;
    font: 2rem "Fira Sans", sans-serif;
  }
  p {
    margin: 20px;
    font-size: 15px;
    max-width: 600px;
  }
  .align_right {
    text-align: right;
    .View_Program_button {
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
    .small_button {
      margin-right: 15px;
      color: #ffffff;
      background-color: #007fff;
      min-width: fit-content;
      height: 30px;
      border-radius: 5px;
      font-size: small;
    }
  }
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
.img-magnifier {
  width: 20px;
}
.input-group-text {
  padding-bottom: 10px;
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
