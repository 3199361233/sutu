<template>
	<div id="navs">
		
  	
 		<el-menu :default-active="activeIndex" class="el-menu-nav" mode="horizontal"  text-color="#303133">

  			<el-menu-item index="1"><router-link to="/">首页</router-link></el-menu-item>
  			<el-menu-item index="2"><router-link to="/upload">上传</router-link></el-menu-item>
  			<el-menu-item index="3">后台管理</el-menu-item>
  			<el-menu-item index="4">我的博客</el-menu-item>
  			
  			
		</el-menu>
	</div>
</template>

<script>
	export default{
		name:'navs',
		data(){
			return{
 				activeIndex: '1',
        		input:''
			}
		},
		methods:{
			
		}
	}
</script>
<style scoped>
.el-menu-nav{
	display: flex;
	justify-content: center;
}
a{
	text-decoration: none;
}
</style>