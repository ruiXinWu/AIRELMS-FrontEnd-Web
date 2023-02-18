<template>
  <div>
    <y-header :active="'zmzx'"></y-header>
    <div class="person_body clearfix">
      <div class="person_content">
        <div>
          <!--<i class="arrow left"></i>-->
          <h1 class="title_AIRE">Machine Learning Engineer</h1>
        </div>
        <div>
          <h2 class="sub_title_AIRE">
            Machine Learning Engineer is the best, the best of best, You’ll
            master the skills needed to design better data models, build data
            infrastructures. Get the Skills You Need to Launch Your Career.
            Apply for the Data Engineering Bootcamp! Scholarship
            Opportunities。Become a Data Engineer。Last Week to Apply the best
            of the best
          </h2>
        </div>
        <ul class="link_list">
          <li style="display: inline; margin: 3px; color: #ffffff">
            <button class="small_button" type="button">Machine Learning</button>
          </li>
          <li style="display: inline; margin: 3px; color: #ede4e4">
            <button class="small_button" type="button">NLP</button>
          </li>
          <li style="display: inline; margin: 3px; color: #ede4e4">
            <button class="small_button" type="button">Deep Learning</button>
          </li>
          <li style="display: inline; margin: 3px; color: #ede4e4">
            <button class="small_button" type="button">
              Artificial Intelligence
            </button>
          </li>
          <li style="display: inline; margin: 3px; color: #ede4e4">
            <button class="small_button" type="button">Face recruitInfo</button>
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
.link_list {
  text-align: center;
  margin-top: 0px;
  margin-bottom: 30px;
  display: block;
  font-weight: bold;
  font: 15px Arial;
  font-color: blue;
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
  margin-top: 20px;
  margin-bottom: 10px;
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
  margin-inline: auto;
  color: #ffffff;
  background-color: #007fff;
  width: 150px;
  height: 30px;
  border-radius: 5px;
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
