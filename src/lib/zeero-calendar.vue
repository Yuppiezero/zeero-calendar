<template>
<!--待封装插件-->
  <div class="zeero-calendar"  :style="zcposition" >
    <div class="zc-head">
      <i class="previousyear" @click='preyear()'><svg t="1546574535892" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1446" xmlns:xlink="http://www.w3.org/1999/xlink" width="26" height="26"><path d="M561.92 192a47.36 47.36 0 0 1 0 64l-256 256 256 256a47.36 47.36 0 0 1-64 64L206.08 545.92A50.56 50.56 0 0 1 192 512a47.36 47.36 0 0 1 14.08-33.28L494.72 192a47.36 47.36 0 0 1 67.2 0z" p-id="1447" fill="#1296db"></path><path d="M817.92 192a47.36 47.36 0 0 1 0 64l-256 256 256 256a47.36 47.36 0 0 1-64 64L462.08 545.92A50.56 50.56 0 0 1 448 512a47.36 47.36 0 0 1 14.08-33.28L750.72 192a47.36 47.36 0 0 1 67.2 0z" p-id="1448" fill="#1296db"></path></svg></i>
      <i class="previousmonth"  @click='premonth()'><svg class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1111" xmlns:xlink="http://www.w3.org/1999/xlink" width="26" height="26"><path d="M689.92 192a47.36 47.36 0 0 1 0 64l-256 256 256 256a47.36 47.36 0 0 1-64 64L334.08 545.92A50.56 50.56 0 0 1 320 512a47.36 47.36 0 0 1 14.08-33.28L622.72 192a47.36 47.36 0 0 1 67.2 0z" p-id="1112" fill="#1296db"></path></svg></i>
      <span class="zeero-select-year" @click="yearshow()">{{setyear}}<i>年</i></span>
      <span  @click="monthshow()">{{setmonth+1}}<i>月</i></span>
      <i class="nextmonth" @click='ntmonth()'><svg class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1295" xmlns:xlink="http://www.w3.org/1999/xlink" width="26" height="26"><path d="M334.08 192a47.36 47.36 0 0 0 0 64l256 256-256 256a47.36 47.36 0 1 0 64 64l288.64-288.64A50.56 50.56 0 0 0 704 512a47.36 47.36 0 0 0-14.08-33.28L401.28 192a47.36 47.36 0 0 0-67.2 0z" p-id="1296" fill="#1296db"></path></svg></i>
      <i class="nextyear"  @click='ntyear()'><svg t="1546574723607" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1564" xmlns:xlink="http://www.w3.org/1999/xlink" width="26" height="26"><path d="M462.08 192a47.36 47.36 0 0 0 0 64l256 256-256 256a47.36 47.36 0 1 0 64 64l288.64-288.64A50.56 50.56 0 0 0 832 512a47.36 47.36 0 0 0-14.08-33.28L529.28 192a47.36 47.36 0 0 0-67.2 0z" p-id="1565" fill="#1296db"></path><path d="M206.08 192a47.36 47.36 0 0 0 0 64l256 256-256 256a47.36 47.36 0 1 0 64 64l291.84-286.08A50.56 50.56 0 0 0 576 512a47.36 47.36 0 0 0-14.08-33.28L273.28 192a47.36 47.36 0 0 0-67.2 0z" p-id="1566" fill="#1296db"></path></svg></i></div>
    <table class="zc-content">
      <thead>
        <tr><th>日</th><th>一</th><th>二</th><th>三</th><th>四</th><th>五</th><th>六</th></tr>
      </thead>
      <tbody>
        <tr v-for="(week,index) in dateitem" v-bind:key="index">
          <td v-for="(nowday,index) in week" v-bind:key="index" :class="nowday.month!=setmonth?'zeero-othermonth':''||(nowday.day==today&&nowday.month==tomonth)?'zeero-tdmark':''" @click="bearfruit(nowday)">{{nowday.day}}</td>
        </tr>
      </tbody>
    </table>
    <ul class="zeero-year-list" v-if="yeartab">
      <li v-for="(yearnum,index) in yearlist" v-bind:key="index" :class="yearnum==toyear?'zeero-tdmark':''"  @click="selectyear(yearnum)">{{yearnum}}</li>
    </ul>
    <ul class="zeero-month-list" v-if="monthtab">
      <li v-for="(monthnum,index) in 12" v-bind:key="index" :class="monthnum==tomonth+1?'zeero-tdmark':''" @click="selectmonth(monthnum)">{{monthnum}}月</li>
    </ul>
    <div class="zeero-footool">
      <div class="zeero-footer-btns"><span @click="bearfruit('长期')">长期</span><span @click="bearfruit(toyear+'-'+Number(tomonth+1)+'-'+today)">现在</span><span @click="bearfruit(toyear+'-'+Number(tomonth+1)+'-'+today)">确定</span><span @click="bearfruit('')">清除</span></div>
    </div>
  </div>
</template>
<script>
//解决定位以及吐出数据问题 this.$refs.inputa.getBoundingClientRect()
var d= new Date();
export default {
  props: {
    zcbox:{
      type: Object,
      default:function(){
        return {x:0,y: 0,width:'270',height:'auto',top:0,left:0,bottom:0,right:0}
      } 
    },
    inputname:{
      type:String,
      default:""
    }
  },
  watch:{
    zcbox:{
      handler: function (val, oldVal) {
        if(val){
          var vw= document.body.clientWidth
          var vh= document.body.clientHeight
          var bw= 270
          var bh= 400
          if(Number(val.left)+bw>vw&&Number(val.top)+bh>vh){
            this.zcposition="max-width:270px;left:"+(Number(val.left)-bw-20)+"px;top:"+(Number(val.top)-Number(val.height)*2-bh-23)+"px;"
          }
          else if(Number(val.left)+bw>vw){
            this.zcposition="max-width:270px;left:"+(Number(val.left)-bw-20)+"px;top:"+(Number(val.top)-Number(val.height)-23)+"px;"
          }
          else if(Number(val.top)+bh>vh)
          {
            this.zcposition="max-width:270px;left:"+(Number(val.left)-Number(val.width)-20)+"px;top:"+(Number(val.top)-Number(val.height)*2-bh-23)+"px;"            
          }
          else{
            this.zcposition="max-width:270px;left:"+(Number(val.left)-Number(val.width)-20)+"px;top:"+(Number(val.top)-Number(val.height)-23)+"px;"
          }
        }
        
      },
      immediate: true
    }
  },
  data () {
    return {
      setyear:d.getFullYear(),
      setmonth:d.getMonth(),
      datamonth:d.getMonth(),
      dateitem:[],
      today:d.getDate(),
      tomonth:d.getMonth(),
      toyear:d.getFullYear(),
      yearlist:[],
      yeartab:false,
      monthtab:false,
      zcposition:''
    }
  },
  mounted: function() {
    this.alculation()
  },
  methods: {
    alculation(){
      let ms = new Date(this.setyear,this.datamonth,'01').getDay()//获取当前月第一天是第周几
      let py = this.setyear//获取当前年份
      let pm = this.datamonth+1//获取当前月份
      if(pm == 1){
        pm = 12
        py = py-1
      }
      let pmd=this.days(py,pm)//上个月最大天数
      let nmd=this.days(this.setyear,this.datamonth+1)//当前月最大天数
      var basedata=pmd//前一月
      var basedatb=0//当前月
      var basedatc=0
      if(ms>0){
        basedata=pmd-ms+1
      }
      let allday=new Array()
      let groupday=new Array()
      let ob=new Object()
      let vn=0
      let guide=0
      let annual=0
      for(let i=1;i<43;i++){
        if(basedata<=pmd){
          if(this.datamonth==0){
            guide=11
            annual=this.setyear-1
          }
          else{
            guide=this.datamonth-1
            annual=this.setyear
          }
          groupday.push({year:annual,month:guide,day:basedata})
          basedata=basedata+1
        }
        else if(basedatb<nmd){
          basedatb=basedatb+1
          annual=this.setyear
          groupday.push({year:annual,month:this.datamonth,day:basedatb})
        }
        else{
          if(this.datamonth==11){
            annual=this.setyear+1
            guide=0
          }
          else{
            guide=this.datamonth+1
            annual=this.setyear
          }
          basedatc=basedatc+1
          groupday.push({year:annual,month:guide,day:basedatc})
        }
        if(i%7==0){
          allday[vn]=groupday
          vn=vn+1
          groupday=new Array()
        }
      }
      this.dateitem=allday
    },
    days(year,month){
        var dayCount;
        let now = new Date(year,month, 0);
        dayCount = now.getDate();
        return dayCount;
    },
    preyear(){
      this.setyear=this.setyear-1
      this.alculation()
    },
    premonth(){
      if(this.setmonth==0||this.datamonth==0){
        this.setmonth=11
        this.datamonth=11
        this.setyear=this.setyear-1
      }
      else{
         this.setmonth=this.setmonth-1
         this.datamonth=this.datamonth-1
      }
      this.alculation()
    },
    ntmonth(){
      if(this.setmonth==11||this.datamonth==11){
        this.setmonth=0
        this.datamonth=0
        this.setyear=this.setyear+1
      }
      else{
         this.setmonth=this.setmonth+1
         this.datamonth=this.datamonth+1
      }
      this.alculation()
    },
    ntyear(){
      this.setyear=this.setyear+1
      this.alculation()
    },
    selectyear(val){
      this.setyear=val
      console.log(this.setyear)
      this.yeartab=false
      //this.datamonth=this.datamonth+1
      this.alculation()
    },
    selectmonth(val){
      this.setmonth=val-1
      this.datamonth=val-1
      this.monthtab=false
      this.alculation()
    },
    yearshow(){
      let yearstar=this.setyear-7
      this.yearlist=new Array()
      for(let i=0;i<15;i++){
        this.yearlist.push(yearstar)
        yearstar=yearstar+1
      }
      this.yeartab=!this.yeartab
    },
    monthshow(){
      this.monthtab=!this.monthtab
    },
    bearfruit(val){
      //吐结果
      if(typeof(val)=='object'){
        let assemble=this.$options.filters.formatDate(val.year+'-'+Number(val.month+1)+'-'+val.day)
        this.$emit('zeerodate',assemble,this.inputname)
      }
      else if(typeof(val)=='string'){
        if(val.indexOf('-')!=-1){
          let assemble=this.$options.filters.formatDate(val)
          this.$emit('zeerodate',assemble,this.inputname)
        }
        else{
          this.$emit('zeerodate',val,this.inputname)
        }
      }
      else{

      }
    }
  },
  filters: {
    formatDate: function (value) {
      let date = new Date(value);
      let y = date.getFullYear();
      let MM = date.getMonth() + 1;
      MM = MM < 10 ? ('0' + MM) : MM;
      let d = date.getDate();
      d = d < 10 ? ('0' + d) : d;
      return y + '-' + MM + '-' + d;
    }
  }
}
</script>
<style>
.zeero-calendar{
  display: table;
  width: auto;
  color: #666;
  font-size: 14px;
  position: absolute;
  box-shadow: 0px 10px 20px 0px rgba(31, 93, 234, .16);
  border-radius: 6px;
  border: 1px solid #efeef5;
  background-color: #fff;
  z-index:999999
}
.zeero-calendar i{
  font-style: normal;
}
.zc-content td,.zc-content th{
  width: 36px;
  height: 30px;
  padding: 5px;
  text-align: center;
  cursor: pointer;
  transition-duration: .3s;
  -webkit-transition-duration: .3s;
}
.zc-content td:hover,.zeero-year-list li:hover,.zeero-month-list li:hover {
    background-color: #eaeaea;
    color: #333;
}
.zc-head{
  position: relative;
  line-height: 30px;
  padding: 10px;
  text-align: center;
}
.zc-head span{font-weight:500;}
.zc-head span i{margin:0 5px}
.zc-head span:hover{
  color:#0097FB;
  cursor: pointer;
}
.previousyear,.previousmonth,.nextmonth,.nextyear{
  position: absolute;
  top:12px;
}
.previousyear{
  left:5px
}
.previousmonth{
  left:35px;
}
.nextmonth{
 right: 35px;
}
.nextyear{
   right:5px;
}
.zeero-select-year{ margin-right:4px;margin-left:4px;}
.zeero-othermonth{color:#ccc;}
.zeero-footool{
  position: relative;
  height: 26px;
  line-height: 26px;
  padding: 10px 10px;
}
.zeero-footer-btns{
    position: absolute;
    right: 10px;
    top: 10px;
}
.zeero-footer-btns span {
    height: 26px;
    line-height: 26px;
    margin: 0 0 0 -1px;
    padding: 0 10px;
    border: 1px solid #C9C9C9;
    background: linear-gradient(to bottom,white 60%,rgba(204, 204, 204, 0.596));
    white-space: nowrap;
    vertical-align: top;
    border-radius: 2px;
}
.zeero-footer-btns span:hover {
  color:rgb(33, 150, 243);
  cursor: pointer;
}
.zeero-tdmark{
  background:#0097FB;
  color: #fff
}
.zc-content td.zeero-tdmark:hover,.zeero-year-list li.zeero-tdmark:hover,.zeero-month-list li.zeero-tdmark:hover{
  background:#0097FB;
  color: #fff
}
.zeero-year-list,.zeero-month-list{
  position: absolute;
  left: 0;
  top: 50px;
  width: 100%;
  height: 100%;
  padding: 10px;
  background-color: #fff;
}
.zeero-year-list>li,.zeero-month-list>li {
  position: relative;
  width: 33.3%;
  height: 42px;
  line-height: 42px;
  margin: 3px 0;
  text-align: center;
  display: inline-block;
  vertical-align: middle;
  cursor: pointer;
}
</style>

