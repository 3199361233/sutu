<template>
	<div id="imglabel">
		
		<el-tag type="danger" effect="plain" v-for="(item,index) in imglabels" :key="index">{{item}}</el-tag>
		<!-- 使用v-for 循环的时候记得加上index  和  ：key="index" -->
		<!-- <el-tag type="info" effect="plain">{{item}}</el-tag> -->
		<!-- <el-tag type="warning" effect="plain">萌系</el-tag> -->
	</div>
</template>
<script>
	export default{
		name:'imglabel',
		data(){
			return{
				imgid:this.$route.params.id,
				imglabels:[]
			}
		},
		created(){
			this.axios({url:'/api/apis/getlabels.php?id='+ this.imgid,method:'get'}).then((res)=>{
				// console.log(this.imgid)
				
				//接收到了res.data数据
				let {labels}=res.data[0]//用解构赋值把labels的字符串获取出来进行下一步操作

				this.imglabels=labels.split(' ')//把值用空格分隔后存进imglabels数组里
				// console.log(this.imglabels)
			})
		}
	}
</script>
<style scoped></style>