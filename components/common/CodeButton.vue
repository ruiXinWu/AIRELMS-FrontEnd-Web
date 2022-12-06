<template>
  <button class="yzm_btn" type="button" :disabled="disabled" @click="getCode">{{txt}}</button>
</template>
<script>
import {getMobileCode} from '~/api/user.js'
export default {
  props: {
    mobile: {
      // 手机号
      type: [String, Number],
      default: 1
    }
  },
  data () {
    return {
      txt: 'Get',
      disabled: false
    }
  },
  computed: {
    // ...mapState(['clientData'])
  },
  methods: {
    getCode (event) {
      if (!(/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/).test(this.mobile)) {
        this.$msgBox({
          content: '请输入正确的邮箱号码',
          isShowCancelBtn: false
        })
        return false;
      }
      this.$emit('cb', event)
      // 获取验证码
      getMobileCode({
        clientId: this.$store.state.clientData.id,
        mobile: this.mobile
      }).then(res => {
        if (res.data.code === 200) {
          this.timeOut();
        } else {
          this.$msgBox({
            content: res.data.msg,
            isShowCancelBtn: false
          })
        }
      })
    },
    timeOut () {
      this.disabled = true;
      let num = 60;
      this.txt = num;
      let nt = setInterval(() => {
        if (num <= 0) {
          clearInterval(nt);
          this.txt = '重新获取';
          this.disabled = false;
        } else {
          num--;
          this.txt = num + 's';
        }
      }, 1000)
    }
  }
}
</script>
<style lang="scss" scoped>
  button{
    line-height: 33px;
    padding: 0;
    width: 50px;
    background-color: #107bc5;
    border: 1px solid #0f75bb;
    color: #fff;
    border-radius: 3px;
    &:disabled{
      background-color: #ccc;
      border-color: #ddd;
      color: #aaa;
    }
  }
</style>
