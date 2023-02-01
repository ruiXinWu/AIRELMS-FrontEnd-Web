<template>
  <div class="course_detail">
    <y-watch-video
      v-if="courseInfo.isPay"
      :courseInfo="courseInfo"
      @debug="getVideoInstance"
      @playfunc="videoPlay"
      :nowNo="nowPeriodNo"
      ref="watchVideo"
    ></y-watch-video>
    <y-display v-else :courseInfo="courseInfo" ref="watchVideo"></y-display>

    <div class="detail_info detail_box clearfix">
      <div class="layout_left">
        <ul class="course_tab clearfix">
          <li :class="{ on: tab == 'info' }">
            <a href="javascript:" @click="tab = 'info'">About</a>
          </li>
          <!-- <li :class="{on: tab == 'info'}"><a href="javascript:" @click="tab = 'info'">课程介绍</a></li> -->
          <li :class="{ on: tab == 'big' }">
            <a href="javascript:" @click="tab = 'big'">Syllabus</a>
          </li>
          <!--<li :class="{on: tab == 'big'}"><a href="javascript:" @click="tab = 'big'">录播课程</a></li>-->
          <li :class="{ on: tab == 'quiz' }">
            <a href="javascript:" @click="tab = 'quiz'">Quiz</a>
          </li>
          <li :class="{ on: tab == 'project' }">
            <a href="javascript:" @click="tab = 'project'">Project</a>
          </li>
        </ul>
        <div class="content_info" v-if="tab == 'info'">
          <div class="introduce" v-html="courseInfo.introduce"></div>
          <!--<y-syllabus @playfunc="videoPlay" :list="courseInfo.chapterList" :nowNo="nowPeriodNo"></y-syllabus>-->
        </div>

        <div class="content_info" v-if="tab == 'big'">
          <y-syllabus
            @playfunc="videoPlay"
            :list="courseInfo.chapterList"
            :nowNo="nowPeriodNo"
          ></y-syllabus>
        </div>
        <div class="content_info" v-if="tab == 'quiz'">
          <!-- here this is only for demo, in real case,我上次在这里 we need to subsitute this -->
          <!--src="https://airobotoedu.wispform.com/6f47dd49"-->
          <!--上面链接是最终要达到的效果，下面src部分是从后端拿的数据-->
          <!--<div class="quiz" v-html="courseInfo.quiz"></div>-->
          <iframe
            v-bind:src="courseInfo.quiz"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            style="height: 840px; width: 640px"
          >
            Loading...
          </iframe>
        </div>
        <div class="content_info" v-if="tab == 'project'">
          <!--<vs-button color="primary" type="relief" icon="star" target :href="{url: project}">Click Here to see project</vs-button>-->
          <button style="background-color: blue; width: 100px; height: 40px">
            <a
              style="color: white"
              href="https://colab.research.google.com/drive/1wS8DC7dcJhV_f3fcDIxwfZGz28z37YQH"
              role="button"
              >Open Project</a
            >
          </button>
          <!--<div class="project_introduce" v-html="'if you meet any question, pay to see me in office hour'"></div>-->
        </div>
      </div>
      <div class="layout_right">
        <div class="teacher_info clearfix">
          <span class="head">Instructor</span>
          <!--<span class="head">讲师简介</span>-->
          <div class="teacher_msg">
            <div class="teacher_msg_right">
              <!--<img class="teacher_phone" v-if="teacherInfo.headImgUrl" :src="teacherInfo.headImgUrl" alt="">-->
              <!--<img class="teacher_phone" v-else src="~/assets/image/friend.jpg" alt="">-->
              <img
                class="teacher_phone"
                src="~/assets/image/logo1.png"
                alt=""
              />
              <div class="teacher_name">
                {{ teacherInfo.lecturerName }}
              </div>
              <div v-html="teacherInfo.introduce" class="info_box"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <y-footer></y-footer>
  </div>
</template>
<script>
import YDisplay from "~/components/course/Display";
import YFooter from "~/components/common/Footer";
//import VimeoPlayer from '~/components/common/VimeoPlayer'
//import YvueVideo from '~/components/common/vueVideo'
import Artplayer from "~/components/Artplayer";
import YSyllabus from "~/components/course/Syllabus";
import YWatchVideo from "~/components/course/WatchVideo";
import { courseDetail, userCourseDetail, chapterSign } from "~/api/course.js";
export default {
  components: {
    YFooter,
    YDisplay,
    YSyllabus,
    YWatchVideo,
    Artplayer,
    //    YvueVideo
    //    VimeoPlayer,
  },
  head() {
    return {
      title: "课程详情",
    };
  },
  props: {},
  data() {
    return {
      art: null,
      tab: "info",
      nowPeriodNo: "", //当前播放章节
      //当前播放Vimeo视频id
      videolink: "", //当前播放Vimeo视频link
      //videoid:'',
    };
  },
  validate({ params }) {
    // 必须是number类型
    return /^\d+$/.test(params.id);
  },
  async asyncData(context) {
    console.log(3333);
    //我觉得这里是拿数据的关键，asyncData 获取到从了userCourseDetail 的数据变为了courseInfo 和 teacherinfo（很可能是这里全局变量）
    let tk = context.store.state.tokenInfo;
    try {
      let result = new Object();
      if (tk) {
        //有token info
        let { data } = await userCourseDetail(
          { courseId: context.params.id },
          tk
        );
        if (data.code == 200) {
          result.courseInfo = data.data;
          result.project =
            "https://colab.research.google.com/drive/1wS8DC7dcJhV_f3fcDIxwfZGz28z37YQH";
          console.log(result.courseInfo.quiz);
          console.log(result.courseInfo.quiz);
          result.teacherInfo = data.data.lecturer;
          result.isbuy = false;
          result.isLogin = false;
        } else if (data.code >= 300 && data.code <= 400) {
          // context.redirect('login');
          context.store.dispatch("REDIRECT_LOGIN");
        } else {
          result.courseInfo = null;
        }
      } else {
        //be careful, 这里是courseDetail, 不是userCourseDetail， 和上面不太一样
        let { data } = await courseDetail({ courseId: context.params.id });
        if (data.code == 200) {
          result.courseInfo = data.data;
          result.teacherInfo = data.data.lecturer;
          result.isbuy = false;
          result.isLogin = false;
        } else {
          result.courseInfo = null;
        }
      }
      console.log(result.courseInfo.quiz);

      console.log("AAAAAAAAAAAAAAAAAAAAA");
      console.log(result.courseInfo);
      return result;
    } catch (e) {
      context.error({ message: "User not found", statusCode: 404 });
    }
  },
  methods: {
    videoPlay(data) {
      console.log(data);
      if (this.courseInfo.isPay || data.isFree) {
        window.scrollTo(0, 0);
        this.nowPeriodNo = data.id;
        console.log("12345");
        chapterSign({
          ip: "string",
          periodId: data.id,
          videoVid: data.videoVid,
        })
          .then((res) => {
            res = res.data;
            console.log(res);
            this.isResetVideo = false;
            if (res.code === 200) {
              this.play(Object.assign({ vid: data.videoVid }, res.data));
            } else if (res.code === 402) {
              this.$msgBox({
                content: "购买后才可以观看",
                isShowCancelBtn: false,
              });
            }
          })
          .catch(() => {
            this.isResetVideo = false;
          });
      } else {
        this.$msgBox({
          content: "购买后才可以播放",
          isShowCancelBtn: false,
        });
        return false;
      }
    },
    play(data) {
      console.log(data);
      console.log(data.sign);
      console.log(data.vid);
      this.videoid = data.vid;
      this.videolink = data.sign;

      //this.art.url = 'http://techslides.com/demos/sample-videos/small.mp4';
      this.art.url = data.sign;
      this.art.play();

      //var options = {
      //  url: data.sign,name
      //  width: 800
      //};
      //var videoPlayer = new Vimeo.Player('Vimeoplay', options);
      //videoPlayer.setVolume(0);
      //videoPlayer.on('play', function() {
      //console.log('Played the video');
      //});
      //console.log(data.sign);
      //window.open('https://bucket1654575383716.s3.us-west-1.amazonaws.com/testUpload/RCNN.mp4', "_blank", "fullscreen=yes");
      //let box = this.$refs.watchVideo.$refs.videobox;
      //if (this.player) {
      //  this.player.changeVid({
      //    vid:data.vid,
      //    playsafe: data.token,
      //    ts: data.ts,
      //    sign: data.sign,
      //    autoplay: true
      //  });
      //} else {
      //  this.player = polyvObject('#player').videoPlayer({
      //      'width': box.offsetWidth,
      //      'height': box.offsetHeight,
      //      'forceH5': true,
      //      'code': data.code,
      //      'playsafe': data.token,
      //      'ts': data.ts,
      //      'sign': data.sign,
      //      'vid': data.vid
      //  });
      //  console.log(this.player);
      //}
    },
    getVideoInstance(data) {
      this.art = data.art;
    },
  },
  mounted() {},
};
</script>
<style lang="scss" rel="stylesheet/scss">
.course_detail {
  .detail_info {
    margin: 20px auto 60px;
    width: 1200px;
  }
  .layout_left {
    width: 920px;
    float: left;
    .info_body {
      margin-bottom: 30px;
    }
  }
  .course_tab {
    padding-left: 30px;
    background: #fff;
    border-radius: 8px;
    margin-bottom: 20px;
    li {
      float: left;
      height: 66px;
      line-height: 66px;
      margin-right: 80px;
      &.on {
        border-bottom: 2px solid #d51423;
        a {
          color: #d51423;
        }
      }
      a {
        color: #000;
        font-size: 14px;
        font-weight: 700;
        &:hover {
          text-decoration: none;
          color: #d51423;
        }
      }
    }
  }
  .content_info {
    padding: 30px;
    background: #fff;
    border-radius: 8px;
    min-height: 400px;
    .title {
      border-left: 3px solid #000;
      padding-left: 12px;
      font-size: 16px;
      color: #000;
      font-weight: 700;
      margin-bottom: 25px;
    }
    .introduce {
      font-size: 14px;
      line-height: 30px;
      color: #333;
      padding-left: 8px;
    }
  }
  .layout_right {
    width: 260px;
    float: right;
  }
  .teacher_info {
    background: #fff;
    border-radius: 8px;
    position: relative;
    min-height: 480px;
    .head {
      display: block;
      line-height: 60px;
      height: 60px;
      padding-left: 20px;
      font-size: 14px;
      color: #333;
      border-bottom: 1px solid rgb(228, 228, 228);
    }
    .teacher_phone {
      width: 46px;
      height: 46px;
      border-radius: 50%;
      background: rgb(228, 228, 228);
      text-align: center;
      line-height: 46px;
      font-size: 13px;
      color: #999;
      float: left;
      margin: 0px 10px 0 10px;
      img {
        width: 46px;
        height: 46px;
        border-radius: 50%;
      }
    }
    .teacher_msg_right {
      width: 235px;
      float: right;
      margin: 12px 15px 12px 12px;
      line-height: 20px;
    }
    .teacher_name {
      font-size: 14px;
      font-weight: 700;
      color: #333;
      margin-bottom: 10px;
    }
  }
}
</style>
