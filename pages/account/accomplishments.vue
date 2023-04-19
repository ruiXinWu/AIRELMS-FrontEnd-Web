<template>
  <div>
    <y-header></y-header>
    <div class="container account_cont clearfix">
      <!-- <y-side :type="'wddd'"></y-side> -->
      <h2 class="program_title">Accomplishments</h2>
      <div class="main_box">
        <ul class="tabs clearfix">
          <h4 style="color: blue; font-weight: bolder">Earned Skill Badges</h4>
        </ul>
        <div class="person_info_up">
          <ul class="image_set horizontal-list">
            <li>
              <img
                src="https://cdn.contexttravel.com/image/upload/c_fill,h_840,q_60/wqiiygvbfs6zijao6hed.jpg"
                class="img-fluid round"
                alt="..."
              />
            </li>
            <li>
              <img
                src="https://cdn.contexttravel.com/image/upload/c_fill,h_840,q_60/wqiiygvbfs6zijao6hed.jpg"
                class="img-fluid round"
                alt="..."
              />
            </li>
            <li>
              <img
                src="https://cdn.contexttravel.com/image/upload/c_fill,h_840,q_60/wqiiygvbfs6zijao6hed.jpg"
                class="img-fluid round"
                alt="..."
              />
            </li>
            <li>
              <img
                src="https://cdn.contexttravel.com/image/upload/c_fill,h_840,q_60/wqiiygvbfs6zijao6hed.jpg"
                class="img-fluid round"
                alt="..."
              />
            </li>
            <li>
              <img
                src="https://cdn.contexttravel.com/image/upload/c_fill,h_840,q_60/wqiiygvbfs6zijao6hed.jpg"
                class="img-fluid round"
                alt="..."
              />
            </li>
            <li>
              <img
                src="https://cdn.contexttravel.com/image/upload/c_fill,h_840,q_60/wqiiygvbfs6zijao6hed.jpg"
                class="img-fluid round"
                alt="..."
              />
            </li>
          </ul>
        </div>
      </div>
      <div class="main_box">
        <ul class="tabs clearfix">
          <h4 style="color: blue; font-weight: bolder">Completed Programs</h4>
        </ul>
        <div class="person_info_down">
          <ul>
            <li>
              <div class="card mb-3" style="min-width: 80%">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img
                      src="https://img.ltn.com.tw/Upload/news/600/2023/02/04/phpcarjdT.jpg"
                      class="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">Machine Learning Engineer</h5>
                      <p class="card-text">
                        <small class="text-body-secondary">Dr. Jared Yu</small>
                      </p>
                      <button type="button" class="btn btn-primary btn-lg">
                        Download Certificate
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="card mb-3" style="min-width: 80%">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img
                      src="https://n.sinaimg.cn/spider20230208/316/w564h552/20230208/366a-2f6ac2f168ab6538cc7ba81615c7a220.jpg"
                      class="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">Machine Learning Engineer</h5>
                      <p class="card-text">
                        <small class="text-body-secondary">Dr. Jared Yu</small>
                      </p>
                      <button type="button" class="btn btn-primary btn-lg">
                        Download Certificate
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <y-footer></y-footer>
  </div>
</template>
<script>
import YHeader from "~/components/common/Header";
import YFooter from "~/components/common/Footer";
import YSide from "~/components/account/Side";
import DPaymodal from "~/components/account/PayModal";
import { orderList, orderClose } from "~/api/account/course.js";
import DPage from "~/components/Page";
import { myHttp } from "~/utils/myhttp.js";
export default {
  data() {
    return {
      num: 0,
      showPay: false,
      payData: null,
      notdata: true,
      obj: {
        orderStatus: 0,
        pageCurrent: 1,
        pageSize: 20,
      },
      pageObj: {
        pageCurrent: "",
        pageSize: "",
        totalCount: "",
        totalPage: "",
      },
    };
  },
  methods: {
    pay(item) {
      this.payData = item;
      this.showPay = true;
    },
    clicktab(int) {
      this.num = int;
      this.obj.orderStatus = int;
      this.obj.pageCurrent = 1;
      this.getOrderList();
    },
    getPage: function (int) {
      this.obj.pageCurrent = int;
      this.getOrderList();
    },
    getOrderList() {
      this.obj.lecturerUserNo = this.$store.state.userInfo.userNo;
      myHttp
        .call(this, {
          method: orderList,
          params: this.obj,
        })
        .then((res) => {
          this.pageObj = res.data;
          if (res.data.list.length > 0) {
            this.notdata = false;
          } else {
            this.notdata = true;
          }
        });
    },
    closeOrder(orderNo) {
      myHttp
        .call(this, {
          method: orderClose,
          params: { orderNo },
        })
        .then((res) => {
          this.$msgBox({
            content: "取消成功",
            isShowCancelBtn: false,
            edit: false,
          })
            .then(async (val) => {
              this.getOrderList();
            })
            .catch(() => {
              this.getOrderList();
            });
        });
    },
  },
  mounted() {
    this.obj = {
      orderStatus: 0,
      pageCurrent: 1,
      pageSize: 10,
    };
    this.getOrderList();
  },
  components: {
    YHeader,
    YFooter,
    YSide,
    DPage,
    DPaymodal,
  },
};
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
@import "~/assets/css/account.scss";
a {
  text-decoration: none;
  color: black;
}
.card-body {
  margin-top: 7%;
  color: black;
  .card-text {
    margin-top: 5%;
  }
  button {
    position: absolute;
    right: 5%;
    bottom: 5%;
  }
}
.card {
  position: relative;
}
.horizontal-list {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
  margin: 0;
  li {
    flex-basis: calc(100% / 4);
    max-width: calc(100% / 4);
    padding: 5px; /* Adjust this value for desired spacing between images */
    box-sizing: border-box;
  }
}
.img-fluid {
  width: 200px;
  height: 160px;
  margin: 10%;
  // max-width: 80%;
}
.round {
  height: 200px;
  width: 200px;
  border-radius: 50%;
  display: inline-block;
}
.program_title {
  color: blue;
  font-weight: bolder;
  margin-left: 6%;
  margin-bottom: 5%;
  padding-left: 15px;
}
.person_info_up {
  padding: 25px;
  min-height: 200px;
}
.person_info_down {
  padding: 25px;
  min-height: 150px;
}
.order_content {
  border-bottom: 2px solid rgba(245, 245, 245, 1);
  margin-top: 20px;
  position: relative;
  &:first-child {
    margin-top: 0;
  }
}
.order_title {
  line-height: 36px;
  padding-left: 20px;
  background: rgba(245, 245, 245, 1);
  font-size: 14px;
  color: #999;
  .order_type {
    margin-right: 10px;
    color: #0099ff;
  }
  .time {
    margin-left: 30px;
  }
}
.order_body {
  margin: 15px 0;
}
.body_left {
  padding: 0 20px;
  float: left;
  // position: relative;
  .img_box {
    width: 120px;
    height: 59px;
    display: inline-block;
  }
  img {
    width: 120px;
    height: 59px;
  }
  p {
    // position: absolute;
    width: 336px;
    white-space: inherit;
    margin-left: 10px;
    // left: 160px;
    font-size: 14px;
    color: #999;
  }
}
.body_right {
  float: right;
  li {
    float: left;
    height: 59px;
    width: 100px;
    text-align: center;
    border-left: 2px solid rgba(245, 245, 245, 1);
    font-size: 14px;
    color: #999;
    &.alipay {
      color: #0099ff;
    }
    &.money {
      color: #d51423;
    }
    .cancel {
      display: block;
      text-align: center;
      margin-top: 5px;
      color: #999;
      &:hover {
        color: #d51423;
      }
    }
    .go_btn {
      display: block;
      width: 76px;
      height: 30px;
      margin-left: 10px;
      line-height: 30px;
      background: #fff;
      border-radius: 6px;
      font-size: 14px;
      cursor: pointer;
      color: #999;
      border: 1px solid #999;
      &.go_pay {
        border-color: orange;
        color: orange;
      }
      &:hover {
        color: #d51423;
        border-color: #d51423;
      }
    }
  }
}
.notdata {
  text-align: center;
  padding: 60px 0;
  font-size: 30px;
  color: #999;
  min-height: 400px;
  i {
    font-size: 30px;
    padding-right: 12px;
  }
}
.page {
  margin-bottom: 20px;
  margin-top: 10px;
}
</style>
