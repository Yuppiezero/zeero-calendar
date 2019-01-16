## 安装:
```
  npm install zeero-calendar --save 
```
## 全局引用或在使用页面引入
```
  import ZeeroCalendar from 'zeero-calendar' 
```
## 在页面注册使用

```
  export default {
    components: { 
      ZeeroCalendar 
    }, 
    data () { 
      return { 
        scope:'',
        evocation:false 
      }
    } 
  } 
```
 
这样可以在页面中添加HTML 标签 

``` 
  <ZeeroCalendar :zcbox='ptt' :inputname="selectinput" @zeerodate="setdata"> 
```
事件说明： 

zcbox 这个需要传送需要使用日期的输入框的OBJECT信息回到插件中 

如何获取输入框input的object? 

在需要获得日期的输入框 增加 $ref 并添加输入框的点击 或者焦点事件（推荐点击）

例如：@click="demo()"  具体看下面的两个示例

示例：  

1、(外部点击打开） <div class="dateicon" @click="demo()"> 

2、输入框点击打开 <input type="text" ref="inputj" v-model="scope" @click="demo()"/>

在methods: 中定义点击函数事件 

```
demo(){

  //使用时先获取需要插入的输入框的v-model名称

  this.selectinput='scope'
  
  //根据$ref来定位显示的位置

  let  st=new  Object(JSON.parse(JSON.stringify(this.$refs.inputa.getBoundingClientRect())))

  this.ptt=st//把定位传给子组件

  this.evocation=true//显示出来 然后执行自定义点击事件setdata 通过判断nm来识别val 插入的输入框是哪个

} 
```

插件上的自定义函数事件会给与你需要的日期 

继续在函数里定义一个 setdata(val,nm) 带参函数事件

```
setdata(val,nm){
	if(nm=='scope'){
		this.scope=val
	}
	this.evocation=false
}
```
val 是日期; nm 是需要给那个input 的 v-model 如果有多个输入框使用在此判断就好了，可以使用switch case……
