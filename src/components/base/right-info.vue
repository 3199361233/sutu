<template>
	<div id="right-info">
		<p><el-tag><span>上传者：</span>{{upname}}</el-tag></p>
    	<p><el-tag type="success"><span>上传日期：</span>{{uptime}}</el-tag></p>
    	<p><el-tag type="danger"><span>图片大小：</span>{{imgsize}}<span>KB</span></el-tag></p>
  		<p>
  			<el-input
  				type="textarea"
  				autosize
  				placeholder="图片URIL地址"
  				v-model="imgsrc"
  				id="copy_imgsrc"
  				>
			</el-input>
			
  		</p>
		<p>
			<el-button type="primary" data-clipboard-target="#copy_imgsrc" @click="copyimgsrc" class="btns">复制图片地址</el-button>
		</p>
	</div>
</template>
<script >
	import Clipboard from 'clipboard'
	export default{
		name:'right-info',
		data(){
			return{
				imgid:this.$route.params.id,
				imgsrc:'',
				upname:'',
				uptime:'',
				imgsize:''
			}
		},
		created(){
			this.axios({url:'/api/apis/getimgotherinfo.php?id='+this.imgid,method:'get'}).then((res)=>{
				let imgotherinfo = res.data//定义一个变量表示获取到的json数据对象
				let{imgsize,imgsrc,upname,uptime}=imgotherinfo //使用es6语法中的解构赋值

				this.imgsize=imgsize
				this.imgsrc=imgsrc
				this.upname=upname
				this.uptime=uptime
				// console.log(res.data)
			})
		},
		methods:{
			
			copyimgsrc:function(){
				let this_ = this;
				this.clipboard = new Clipboard('.btns');
				
				this.clipboard.on('success', function (e) {

          		this_.$message({
							message: "图片路径复制成功！",
							type: 'success'
						});

          		e.clearSelection();
      			});

				this.clipboard.on('error', function (e) {

					this_.$message({
							message: "图片路径复制失败！请刷新重试",
							type: 'warning'
					});

				});

			}
		}
	}
</script>
<style scoped>
	#right-info{
		/*background-color: #d0d0d0;*/
	}

</style>