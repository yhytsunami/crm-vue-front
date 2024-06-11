import axios from "axios"

export default {
    name:"msg-templates",
    data(){
        return {
            axios,
            datatext:'datatext',
            formData:{
                templateContent:'',
            },
            rules:{

            },
            queryId:'',
            resultString:''
        }
    },
    comments:[],
    methods:{
        onSubmit(){
            this.$message({type:'success',message:'ok'})
            let req ={
                method:'post',
                url:'http://localhost:8643/messageTemplate',
                data:this.formData
            }
            this.axios(req).then((e) =>{
                console.log(e)
            })
        },
        queryById(){
            let req ={
                method:'get',
                url:'http://localhost:8643/messageTemplate?id='+this.queryId,
                data:{
                    id:this.queryId
                }
            }
            this.axios(req).then((e) =>{
                console.log(e)
                this.resultString = JSON.stringify(e)
            })
        }
    }
}