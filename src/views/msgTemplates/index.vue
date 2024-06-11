<script >
import { RouterLink } from 'vue-router';
import msgTemplateS from './msg-template-s';


export default {
    name:"msg-templates",
    mixins:[msgTemplateS],
    data(){
        return {}
    },
    comments:[RouterLink],
    methods:{

    }
}
</script>

<template>
    <div class="app-container">
        this is msgTemplate page  {{ datatext }}
        <RouterLink to="/">home</RouterLink>
        <el-form :model="formData" ref="form" :rules="rules" label-width="80px" :inline="false" size="normal">
            <el-form-item label="模板内容">
                <el-input v-model="formData.templateContent"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">立即创建</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>
        <el-row :gutter="20">
            <el-col :span="12" :offset="0">
                <el-input v-model="queryId" placeholder="输入查询id" size="normal" clearable ></el-input>
                <el-button type="primary" size="default" @click="queryById">查询</el-button>
            </el-col>
            <el-col :span="12" :offset="0">
                <el-input v-model="resultString" placeholder="" size="normal" clearable type="textarea"></el-input>
            </el-col>
        </el-row>
        
    </div>
</template>