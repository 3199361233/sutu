<template>
	<div id="lookpic">
	<!-- 	图片详情页 -->
	<el-row :gutter="0">
  <el-col :xs="24" :sm="15" :md="15" :lg="18">
  	<div class="left-block">
    	<!-- fit：是显示方式->cover:自适应 -->
    			<el-image
      				:src="imgsrc"
      				:fit="fit"
      				v-model="imgsrc">
      			</el-image>
  		</div>

  </el-col>
  <el-col :xs="24" :sm="8" :md="9" :lg="6">
  	<div class="right-block">
  			<rightinfo></rightinfo>
  	</div>
  	<div class="img-label">
  		<imglabel></imglabel>
  	</div>
  </el-col>
</el-row>
		
  		
  		
	</div>
</template>

<script>
	// import axios from 'axios'
	import rightinfo from '../base/right-info.vue'
	import imglabel from '../base/imglabel.vue'
	export default{
		name:'lookpic',
		data(){
			return{
				id:this.$route.params.id,
				fit:"cover",
				imgsrc:''
			}
		},
		created(){
			
			this.axios({url:'/api/apis/getoneimg.php?id='+this.id,method:'get'}).then((res)=>{//出现状态码404
				this.imgsrc=res.data.imgsrc
				// console.log(res.data.imgsrc)
			})
		
		},
		watch:{
			imginfo(){
				return this.imginfo
			}
		},
		components:{
			rightinfo,imglabel
		}
	}
</script>




<style scoped>
	.left-block{
		margin: 10px 10px;
		padding: 10px 10px;
		/*width: 100%;*/
		background-color: #fff;
	}
	.right-block{
		margin: 10px 10px;
		padding: 10px 10px;
		/*width: 20%;*/
		background-color: #fff;
	}
	.img-label{
		margin: 10px 10px;
		padding: 10px 10px;
		background-color: #fff;
	}
</style>