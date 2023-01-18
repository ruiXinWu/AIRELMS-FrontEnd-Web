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
        <ul class="article_List">
          <li>
            <article class="sub_Article">
              <h2>Machine Learning Engineer</h2>
              <p>
                Machine learning engineers act as critical members of the data
                science team. Their tasks involve researching, building, and
                designing the artificial intelligence responsible for machine
                learning and maintaining and improving existing artificial
                intelligence systems.
              </p>
              <button class="View_Program_button" type="button">
                View Program
              </button>
            </article>
          </li>
          <li>
            <article class="sub_Article">
              <h2>AI Robotics Engineer</h2>
              <p>
                Machine learning engineers act as critical members of the data
                science team. Their tasks involve researching, building, and
                designing the artificial intelligence responsible for machine
                learning and maintaining and improving existing artificial
                intelligence systems.
              </p>
              <button class="View_Program_button" type="button">
                View Program
              </button>
            </article>
          </li>
          <li>
            <article class="sub_Article">
              <h2>Deep Learning Engineer</h2>
              <p>
                Machine learning engineers act as critical members of the data
                science team. Their tasks involve researching, building, and
                designing the artificial intelligence responsible for machine
                learning and maintaining and improving existing artificial
                intelligence systems.
              </p>
              <button class="View_Program_button" type="button">
                View Program
              </button>
            </article>
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
//import { Button } from "ant-design-vue";
//import "ant-design-vue/dist/antd.css";
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
  font-size: 14px;
  color: #333;
  line-height: 28px;
  font-size: 38px;
  text-align: center;
}
.sub_Article {
  margin: 10px;
  padding: 20px;
  background-color: #dcdcdc;
  border-radius: 5px;
  > h2 {
    margin: 20px;
    font: 2rem "Fira Sans", sans-serif;
  }
  > p {
    margin: 20px;
    font-size: 15px;
    max-width: 600px;
  }
  .View_Program_button {
    margin-left: 20px;
    font-size: 15px;
    background-color: #ffffff;
    width: 120px;
    height: 50px;
    font-color: #ffffff;
    border-radius: 5px;
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
