<template>
	<div id="home">
		<el-row :gutter="10">
			<el-col :xs="8" :sm="6" :md="6" :lg="4" :xl="2"
			v-for="(fit,index) in fits" :key="index">

			<div class="block img-box">
				<!-- fit：是显示方式->cover:自适应 -->
				<router-link v-bind:to="'/lookpic/'+ fit.id">
					<el-image  style="width: 100%; height: 100%" :src="fit.imgsrc" :fit="ft" lazy>
						<div slot="placeholder" class="image-slot">
							加载中<span class="dot">...</span>
						</div>
					</el-image>
				</router-link>
			</div>
		</el-col>
		
	</el-row>
	<p v-show="isload">图片加载中...</p>
	<p v-show="isimg">已经没有图片啦^_^</p>
</div>
</template>

<script>
	// import axios from 'axios'
	import {getScrollHeight,getScrollTop,getWindowHeight} from '../../loading'
	export default{
		name:'home',
		data(){
			return{
				fits: [],
        		ft:'fill',
        		page:20,
        		Totalnumber:40,//图片总个数
        		isload:false,//判断是否显示加载标签
        		isimg:false//判断所有图片是否显示完成
			}	
		},
		mounted(){
			let vm=this;
			window.onscroll = function(){
        if(getScrollTop() + getWindowHeight() == getScrollHeight()){   //此时滚动条已经下拉到底部啦
           if(vm.page >= vm.Totalnumber){
           	vm.isimg=true
           }else{
           	vm.page=vm.page+5
           	vm.isload=true
           	//拉取数据的方法
           	vm.axios({url:'/api/apis/gettwenty.php?page='+vm.page,method:'get'}).then((res)=>{
           		vm.fits=res.data
           		vm.isload=false
           	})
           }
          
        		}
      		}
		},
		methods:{
		
		},
		created(){
			this.axios({url:'/api/apis/gettwenty.php?page='+this.page,method:'get'}).then((res)=>{
				this.fits=res.data
				// console.log(res.data)
			})

		}

	}
</script>

<style scoped>
	#home{
		margin: 30px 20px;
		/*background-color: #E4E7ED;*/
	}
	.img-box{
		height: 100px;
		background-color: #fff;
		padding: 10px 10px;
		margin-bottom: 30px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
	}
	
</style>