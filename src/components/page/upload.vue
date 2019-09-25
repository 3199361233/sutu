<template>
	<div id="upload">
	<el-upload
		class="upload-img"
		drag
		action="http://106.13.211.14/apis/uploadimg.php"
		multiple
		:on-success="upSuccess"
		:on-error="uperror"
		:auto-upload="false"
		ref="upload">
		<i class="el-icon-upload"></i>
		<div class="el-upload__text">将文件拖到此处，或<em>点击选择图片</em></div>
		<div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>

	</el-upload>
	<div class="input-box">
	<el-row type="flex" justify="center">
  <el-col :span="6">
  	<p><el-input v-model="imginfo.name" placeholder="请输入上传者"></el-input></p>
  	
  	<p>
  		<el-date-picker
      v-model="imginfo.datetime"
      type="date"
      placeholder="选择上传日期"
       value-format="yyyy-MM-dd">
    </el-date-picker>
  	</p>

  	<p><el-input v-model="imginfo.labels" placeholder="请输入图片标签"></el-input></p>

  	<p class="tips"><strong>* 标签用空格分隔为一个</strong></p>
  <p><el-button type="success" @click="submitUpload">点击上传</el-button></p>
  </el-col>
  
  
</el-row>
	</div>
</div>
</template>

<script>
	// import axios from 'axios'
	
	export default{
		name:'upload',
		data(){
			return{
				imginfo:{
					name:'',
					datetime:'',
					labels:'',
					imgname:'',
					imgsize:0,
					imgsrc:''
				}
			}
		},
		methods:{
			
			submitUpload(){
				
				if(this.imginfo.name==''){
					this.$notify.error({
						title: '错误信息',
						message: '请输入上传者！'
					});
				}else if(this.imginfo.datetime==''){
					this.$notify.error({
						title: '错误信息',
						message: '请输入上传日期！'
					});
				}else if(this.imginfo.labels==''){
					this.$notify.error({
						title: '错误信息',
						message: '请输入上传图片的标签！'
					});
				}else{
					this.$refs.upload.submit();
					
				}
			},
			upSuccess(response, file, fileList){
				
				if(response.code==0){
					this.imginfo.imgname=response.imgname
					this.imginfo.imgsize=response.imgsize
					this.imginfo.imgsrc=response.imgsrc
					// console.log(this.imginfo)
					this.axios.post('/api/apis/uploadimginfo.php',this.imginfo).then((res)=>{
					if(res.data.code==1){
						//如果图片上传之后成功保存在数据库就提示
						this.$message({
							message: res.data.msg,
							type: 'success'
						});
					}else if(res.data.code==2){
						this.$message({
							message: res.data.msg,
							type: 'warning'
				});
					}
						

					// console.log(res.data)
				})
					//成功消息提示
					this.$message({
					message: response.msg,
					type: 'success'
				});
				}else if(response.code==1){
					this.$message({
					message: response.msg,
					type: 'warning'
				});
				}
				
				
			},
			uperror(err){
				this.$message({
					message: err,
					type: 'warning'
				});
			}
			
		},
		
	}
</script>

<style scoped>
	.upload-img{
		margin-top: 50px;
	}
	.input-box{
		margin-top: 20px;
	}
	.tips{
		color: #F56C6C;
	}
</style>