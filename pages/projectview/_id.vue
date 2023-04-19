<template>
  <div>
    <y-header :active="'zmzx'"></y-header>
    <div
      class="container"
      :style="{ backgroundImage: 'url(' + projectObj.projectPicture + ')' }"
    >
      <h1>{{ projectObj.projectName }}</h1>
      <p class="description">{{ projectObj.projectDescription }}</p>
      <button class="View_Program_button" type="button">
        <a target="_blank" :href="projectObj.projectUrl" class="button_link"
          >Start this project
        </a>
      </button>
    </div>
    <y-footer></y-footer>
  </div>
</template>
<script>
import YHeader from "~/components/common/Header";
import YFooter from "~/components/common/Footer";
import YSide from "~/components/TerraceSide";
import { searchbyprojectid } from "~/api/program.js";
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
    // generate projectObj
    console.log("first render the page");
    let tk = context.store.state.tokenInfo;
    let dataObj = {};
    let clientNo = context.store.state.clientData.no;
    dataObj.clientNo = clientNo;
    dataObj.webInfo = context.store.state.webInfo;
    let projectId = {
      projectId: context.params.id,
    };
    console.log("enter try");
    console.log(context.params.id);
    try {
      let projectDetailData = await Promise.all([searchbyprojectid(projectId)]);
      console.log("projectDetailData returned from backend");
      console.log(projectDetailData[0]);
      let projectObj = "";
      if (projectDetailData[0].data.data !== undefined) {
        projectObj = projectDetailData[0].data.data;
        console.log("This is projectObj");
        console.log(projectObj);
      }
      dataObj.projectObj = projectObj;
    } catch (e) {
      console.log("we catched error when fetching projectDetailData");
    }
    console.log("This is dataObj");
    console.log(dataObj);
    return dataObj;
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
.container {
  // display: flex;
  // justify-content: space-between;
  // align-items: flex-start;
  position: relative;
  height: 100vh;
  padding: 20px;
  // background-color: rgb(210, 203, 203);
  h1 {
    position: absolute;
    top: 0px;
    left: 70px;
    margin: 80px 0 0 30px;
  }
  p {
    position: absolute;
    top: 35%;
    left: 100px;
    max-width: 30%;
  }
  button {
    position: absolute;
    right: 50px;
    bottom: 20px;
    margin: 0 20px 20px 0;
    // align-self: flex-end;
    font-size: 15px;
    background-color: #0000ff;
    width: 180px;
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
