Vue.prototype.$ELEMENT = { size: 'mini', zIndex: 3000 };
const vscode = acquireVsCodeApi();



let rootApp = new Vue({
  el: '#app',
  data: function() {
    return {
      msgResolvers:[],//{msgType:"",data:{}}
      config:{
        mysql:[
          {label:"主机",fieldName:"mysql.host",value:""},
          {label:"数据库名称",fieldName:"mysql.database",value:""},
          {label:"用户名",fieldName:"mysql.user",value:""},
          {label:"密码",fieldName:"mysql.password",value:""},
        ]
      }
    }
  },
  methods:{
    send(msg){
      return new Promise(resolve => {
        let msgResolve = {
          msgType:"msg"+Date.now(),
          data:msg
        }
        vscode.postMessage(msgResolve);
        msgResolve.resolve = resolve;
        this.msgResolvers.push(msgResolve);
      })
    },
    onmessage({data}){
      if(data.type == "initFrame"){
        this.initFrame(data);
      }
      let curRes = this.msgResolvers.find(v => v.msgType==data.msgType);
      if(curRes){
        curRes.resolve(data);
        this.msgResolvers = this.msgResolvers.filter(v => v!=curRes);
      }else{
        console.log("不存在",data)
      }
    },
    initFrame(data){
      this.config = data.config
    },
    async saveAllConfig(){
      let res = await this.send({
        type:"refresh",
        config:this.config
      })
      this.$message({type:"success",message:"更新配置成功"});
    },




    async sendmsg(){
      let res = await this.send({
        type:"refresh",
        a:1,
        b:2
      })
      this.$alert(JSON.stringify(res.data))
    },








  },
  
})

window.onmessage = rootApp.onmessage;