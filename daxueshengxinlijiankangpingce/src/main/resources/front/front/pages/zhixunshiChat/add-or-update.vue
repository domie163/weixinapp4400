<template>
    <view class="content">
        <form class="app-update-pv">
<!-- text后缀 -->
            <view
                    :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"210rpx"}'
                    class="cu-form-group">
                <view :style='{"width":"160rpx","fontSize":"28rpx","color":"var(--publicMainColor)","textAlign":"left"}'
                      class="title">问题</view>
                <textarea :style='{"padding":"0 30rpx","boxShadow":"0 0 0px rgba(0,0,0,.6) inset","margin":"0","borderColor":"var(--publicMainColor)","backgroundColor":"#fff","color":"rgba(161, 161, 161, 1)","textAlign":"left","borderRadius":"40rpx","borderWidth":"3rpx","fontSize":"28rpx","borderStyle":"dashed ","height":"88rpx","marginTop":"7rpx","height":"200rpx"}'
                          :disabled="ro.zhixunshiChatIssueText" v-model="ruleForm.zhixunshiChatIssueText" placeholder="问题"/>
            </view>
            <view
                    :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"100rpx"}'
                    class="cu-form-group">
                <view :style='{"width":"160rpx","fontSize":"28rpx","color":"var(--publicMainColor)","textAlign":"left"}'
                      class="title">问题时间</view>
                <input
                        :style='{"padding":"0 30rpx","boxShadow":"0 0 0px rgba(0,0,0,.6) inset","margin":"0","borderColor":"var(--publicMainColor)","backgroundColor":"#fff","color":"rgba(161, 161, 161, 1)","textAlign":"left","borderRadius":"40rpx","borderWidth":"3rpx","fontSize":"28rpx","borderStyle":"dashed ","height":"88rpx","marginTop":"7rpx"}'
                        v-model="ruleForm.issueTime" placeholder="问题时间" :readonly="ro.issueTime"
                        @tap="toggleTab('issueTime')"></input>
            </view>
					<!-- text后缀 -->
            <view
                    :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"210rpx"}'
                    class="cu-form-group">
                <view :style='{"width":"160rpx","fontSize":"28rpx","color":"var(--publicMainColor)","textAlign":"left"}'
                      class="title">回复</view>
                <textarea :style='{"padding":"0 30rpx","boxShadow":"0 0 0px rgba(0,0,0,.6) inset","margin":"0","borderColor":"var(--publicMainColor)","backgroundColor":"#fff","color":"rgba(161, 161, 161, 1)","textAlign":"left","borderRadius":"40rpx","borderWidth":"3rpx","fontSize":"28rpx","borderStyle":"dashed ","height":"88rpx","marginTop":"7rpx","height":"200rpx"}'
                          :disabled="ro.zhixunshiChatReplyText" v-model="ruleForm.zhixunshiChatReplyText" placeholder="回复"/>
            </view>
            <view
                    :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"100rpx"}'
                    class="cu-form-group">
                <view :style='{"width":"160rpx","fontSize":"28rpx","color":"var(--publicMainColor)","textAlign":"left"}'
                      class="title">回复时间</view>
                <input
                        :style='{"padding":"0 30rpx","boxShadow":"0 0 0px rgba(0,0,0,.6) inset","margin":"0","borderColor":"var(--publicMainColor)","backgroundColor":"#fff","color":"rgba(161, 161, 161, 1)","textAlign":"left","borderRadius":"40rpx","borderWidth":"3rpx","fontSize":"28rpx","borderStyle":"dashed ","height":"88rpx","marginTop":"7rpx"}'
                        v-model="ruleForm.replyTime" placeholder="回复时间" :readonly="ro.replyTime"
                        @tap="toggleTab('replyTime')"></input>
            </view>
					                <view :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"100rpx"}'
                      class="cu-form-group">
                    <view :style='{"width":"160rpx","fontSize":"28rpx","color":"var(--publicMainColor)","textAlign":"left"}'
                          class="title">状态</view>
                    <picker @change="zhuangtaiTypesChange" :value="zhuangtaiTypesIndex" :range="zhuangtaiTypesOptions" range-key="indexName">
                        <view
                                :style='{"padding":"0 30rpx","boxShadow":"0 0 0px rgba(0,0,0,.6) inset","margin":"0","borderColor":"var(--publicMainColor)","backgroundColor":"#fff","color":"rgba(161, 161, 161, 1)","textAlign":"left","borderRadius":"40rpx","borderWidth":"3rpx","fontSize":"28rpx","borderStyle":"dashed ","height":"88rpx","marginTop":"7rpx"}'
                                class="uni-input">{{ruleForm.zhuangtaiTypes?ruleForm.zhuangtaiValue:"请选择状态"}}</view>
                    </picker>
                </view>
                <view :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"100rpx"}'
                      class="cu-form-group">
                    <view :style='{"width":"160rpx","fontSize":"28rpx","color":"var(--publicMainColor)","textAlign":"left"}'
                          class="title">数据类型</view>
                    <picker @change="zhixunshiChatTypesChange" :value="zhixunshiChatTypesIndex" :range="zhixunshiChatTypesOptions" range-key="indexName">
                        <view
                                :style='{"padding":"0 30rpx","boxShadow":"0 0 0px rgba(0,0,0,.6) inset","margin":"0","borderColor":"var(--publicMainColor)","backgroundColor":"#fff","color":"rgba(161, 161, 161, 1)","textAlign":"left","borderRadius":"40rpx","borderWidth":"3rpx","fontSize":"28rpx","borderStyle":"dashed ","height":"88rpx","marginTop":"7rpx"}'
                                class="uni-input">{{ruleForm.zhixunshiChatTypes?ruleForm.zhixunshiChatValue:"请选择数据类型"}}</view>
                    </picker>
                </view>

            <view class="btn">
                <button
                        :style='{"boxShadow":"0 0 16rpx rgba(0,0,0,0) inset","backgroundColor":"var(--publicMainColor)","borderColor":"#409EFF","borderRadius":"8rpx","color":"rgba(255, 255, 255, 1)","borderWidth":"0","width":"70%","fontSize":"32rpx","borderStyle":"solid","height":"80rpx"}'
                        @tap="onSubmitTap" class="bg-red">提交</button>
            </view>
        </form>

					<w-picker mode="dateTime" step="1" :current="false" :hasSecond="false" @confirm="issueTimeConfirm"
                              ref="issueTime" themeColor="#333333"></w-picker>
					<w-picker mode="dateTime" step="1" :current="false" :hasSecond="false" @confirm="replyTimeConfirm"
                              ref="replyTime" themeColor="#333333"></w-picker>
					<w-picker mode="dateTime" step="1" :current="false" :hasSecond="false" @confirm="insertTimeConfirm"
                              ref="insertTime" themeColor="#333333"></w-picker>
					<w-picker mode="dateTime" step="1" :current="false" :hasSecond="false" @confirm="createTimeConfirm"
                              ref="createTime" themeColor="#333333"></w-picker>


    </view>
</template>

<script>
    import wPicker from "@/components/w-picker/w-picker.vue";

    export default {
        data() {
            return {
                cross: '',
                ro:{
					yonghuId: false,
					zhixunshiId: false,
					zhixunshiChatIssueText: false,
					issueTime: false,
					zhixunshiChatReplyText: false,
					replyTime: false,
					zhuangtaiTypes: false,
					zhixunshiChatTypes: false,
					insertTime: false,
					createTime: false,
        },
            ruleForm: {
					yonghuId: '',
					zhixunshiId: '',
					zhixunshiChatIssueText: '',
					issueTime: '',
					zhixunshiChatReplyText: '',
					replyTime: '',
					zhuangtaiTypes: '',//数字
					zhuangtaiValue: '',//数字对应的值
					zhixunshiChatTypes: '',//数字
					zhixunshiChatValue: '',//数字对应的值
					insertTime: '',
					createTime: '',
            },
            // 登陆用户信息
            user: {},
				zhuangtaiTypesOptions: [],
							zhuangtaiTypesIndex : 0,
				zhixunshiChatTypesOptions: [],
							zhixunshiChatTypesIndex : 0,

        }
        },
        components: {
            wPicker
        },
        computed: {
            baseUrl() {
                return this.$base.url;
            },
        },
        async onLoad(options) {

		/*下拉框*/
			let zhuangtaiTypesParams = {
                page: 1,
                limit: 100,
                dicCode: 'zhuangtai_types',
            }
			let zhuangtaiTypes = await this.$api.page(`dictionary`, zhuangtaiTypesParams);
			this.zhuangtaiTypesOptions = zhuangtaiTypes.data.list
		/*下拉框*/
			let zhixunshiChatTypesParams = {
                page: 1,
                limit: 100,
                dicCode: 'zhixunshi_chat_types',
            }
			let zhixunshiChatTypes = await this.$api.page(`dictionary`, zhixunshiChatTypesParams);
			this.zhixunshiChatTypesOptions = zhixunshiChatTypes.data.list


            // 如果是更新操作
            if (options.id) {
                this.ruleForm.id = options.id;
                // 获取信息
                let res = await this.$api.info(`zhixunshiChat`, this.ruleForm.id);
                this.ruleForm = res.data;
            }
            if(options.zhixunshiChatId){
                this.ruleForm.zhixunshiChatId = options.zhixunshiChatId;
            }
            // 跨表
            // this.styleChange()
        },
        methods: {
            // 下拉变化
            zhuangtaiTypesChange(e) {
                this.zhuangtaiTypesIndex = e.target.value
                this.ruleForm.zhuangtaiValue = this.zhuangtaiTypesOptions[this.zhuangtaiTypesIndex].indexName
                this.ruleForm.zhuangtaiTypes = this.zhuangtaiTypesOptions[this.zhuangtaiTypesIndex].codeIndex
            },
            zhixunshiChatTypesChange(e) {
                this.zhixunshiChatTypesIndex = e.target.value
                this.ruleForm.zhixunshiChatValue = this.zhixunshiChatTypesOptions[this.zhixunshiChatTypesIndex].indexName
                this.ruleForm.zhixunshiChatTypes = this.zhixunshiChatTypesOptions[this.zhixunshiChatTypesIndex].codeIndex
            },


            // styleChange() {
            // 	this.$nextTick(() => {
            // 		// document.querySelectorAll('.app-update-pv .cu-form-group .uni-yaoxianStyle-yaoxianStyle').forEach(el=>{
            // 		//   el.style.backgroundColor = this.addUpdateForm.yaoxianStyle.content.backgroundColor
            // 		// })
            // 	})
            // },


			// 日期控件
			issueTimeConfirm(val) {
                this.ruleForm.issueTime = val.result;
                this.$forceUpdate();
            },
			// 日期控件
			replyTimeConfirm(val) {
                this.ruleForm.replyTime = val.result;
                this.$forceUpdate();
            },
			// 日期控件
			insertTimeConfirm(val) {
                this.ruleForm.insertTime = val.result;
                this.$forceUpdate();
            },
			// 日期控件
			createTimeConfirm(val) {
                this.ruleForm.createTime = val.result;
                this.$forceUpdate();
            },




            getUUID() {
                return new Date().getTime();
            },
            async onSubmitTap() {
				if ((!this.ruleForm.zhixunshiChatIssueText)) {
                    this.$utils.msg(`问题不能为空`);
                    return
                }
				if ((!this.ruleForm.issueTime)) {
                    this.$utils.msg(`问题时间不能为空`);
                    return
                }
				if ((!this.ruleForm.zhixunshiChatReplyText)) {
                    this.$utils.msg(`回复不能为空`);
                    return
                }
				if ((!this.ruleForm.replyTime)) {
                    this.$utils.msg(`回复时间不能为空`);
                    return
                }
				if ((!this.ruleForm.zhuangtaiTypes)) {
                    this.$utils.msg(`状态不能为空`);
                    return
                }
                if (this.ruleForm.id) {
                    await this.$api.update(`zhixunshiChat`, this.ruleForm);
                } else {
                    await this.$api.save(`zhixunshiChat`, this.ruleForm);
                }
                uni.setStorageSync('pingluenStateState', true);
                this.$utils.msgBack('提交成功');
            },
            getDate(type) {
                const date = new Date();
                let year = date.getFullYear();
                let month = date.getMonth() + 1;
                let day = date.getDate();
                if (type === 'start') {
                    year = year - 60;
                } else if (type === 'end') {
                    year = year + 2;
                }
                month = month > 9 ? month : '0' + month;;
                day = day > 9 ? day : '0' + day;
                return `${year}-${month}-${day}`;
            },
            toggleTab(str) {
                this.$refs[str].show();
            }
        }
    }
</script>
<style lang="scss" scoped>
    .container {
        padding: 20upx;
    }

    .content:after {
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        content: '';
        background-attachment: fixed;
        background-size: cover;
        background-position: center;
    }

    textarea {
        border: 1upx solid #EEEEEE;
        border-radius: 20upx;
        padding: 20upx;
    }

    .title {
        width: 180upx;
    }

    .avator {
        width: 150upx;
        height: 60upx;
    }

    .right-input {
        flex: 1;
        text-align: left;
        padding: 0 24upx;
    }

    .cu-form-group.active {
        justify-content: space-between;
    }

    .cu-form-group .title {
        height: auto;
        line-height:30rpx
    }

    .btn {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        padding: 20upx 0;
    }

    .cu-form-group {
        padding: 0 24upx;
        background-color: transparent;
        min-height: inherit;
    }

    .cu-form-group+.cu-form-group {
        border: 0;
    }

    .cu-form-group uni-input {
        padding: 0 30upx;
    }

    .uni-input {
        padding: 0 30upx;
    }

    .cu-form-group uni-textarea {
        padding: 30upx;
        margin: 0;
    }

    .cu-form-group uni-picker::after {
        line-height: 80rpx;
    }

    .select .uni-input {
        line-height: 80rpx;
    }

    .input .right-input {
        line-height: 88rpx;
    }
</style>