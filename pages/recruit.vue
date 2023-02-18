<template>
  <div>
    <y-header :active="'zmzx'"></y-header>
    <div class="person_body clearfix">
      <!--<y-side :type="'jszm'" :showSide="'zm'"></y-side>-->
      <div class="person_content">
        <div>
          <h1 class="title_AIRE">Our Programs</h1>
        </div>
        <hr class="hr_program" />
        <form>
          <div>
            <input type="search" id="mySearch" placeholder="Search" />
          </div>
        </form>
        <!--这里是模拟后端拿到搜索预设值list数据-->
        <ul class="link_list">
          <li style="display: inline; margin: 10px; color: #ede4e4">
            <a style="color: #390ee6" href="/">All</a>
          </li>
          <li style="display: inline; margin: 10px">
            <a href="/">Advanced Robotics</a>
          </li>
          <li style="display: inline; margin: 10px">
            <a href="/">Artificial Intelligence</a>
          </li>
          <li style="display: inline; margin: 10px">
            <a href="/">Autonomous Driving</a>
          </li>
          <li style="display: inline; margin: 10px">
            <a href="/">Electric Vehicles</a>
          </li>
        </ul>
        <ul class="link_list">
          <li style="display: inline; margin: 10px; color: #ede4e4">
            <a style="color: #390ee6" href="/">All</a>
          </li>
          <li style="display: inline; margin: 10px">
            <a href="/">Machine Learning Engineer</a>
          </li>
          <li style="display: inline; margin: 10px">
            <a href="/">Deep Learning Engineer</a>
          </li>
          <li style="display: inline; margin: 10px">
            <a href="/">Software Engineer</a>
          </li>
          <li style="display: inline; margin: 10px">
            <a href="/">Machanial Engineer</a>
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
            <p>{{ item.programLogo }}</p>
            <!--<nuxt-link target="_self" :to="{name: 'view-id', params: {id: item.id}}" class="course_info">-->
            <div class="align_right">
              <span style="float: left; margin-left: 18px">
                <span>
                  <button class="small_button" type="button">
                    {{ item.id }}
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
import { programList } from "~/api/program.js";
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
    //let classObj = {
    //  categoryType: 5,
    //  orgNo: clientNo
    //}
    try {
      let allData = await Promise.all([programList(obj)]);
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
  font-color: blue;
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
  background-color: #dcdcdc;
  border-radius: 5px;
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
      margin-inline: auto;
      color: #ffffff;
      background-color: #007fff;
      width: 150px;
      height: 30px;
      border-radius: 5px;
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
