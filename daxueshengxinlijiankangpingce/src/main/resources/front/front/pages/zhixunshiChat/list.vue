<template>
    <view>
        <view class="cu-chat" style="margin-bottom: 280rpx;">
            <view v-for="(item,index) in zhixunshiChatList" v-bind:key="index">
                <view v-if="item.zhixunshiChatIssueText" class="cu-item self">
                    <view class="main">
                        <view class="content bg-green shadow" style="display:flex;flex-direction: column">
                            <text>{{item.zhixunshiChatIssueText}}</text>
                            <image v-if="item.zhixunshiChatIssuePhoto"
                                   :src="baseUrl+item.zhixunshiChatIssuePhoto"></image>
                        </view>
                    </view>
                    <view class="cu-avatar radius" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big107000.jpg);"></view>
                    <view class="date">{{item.insertTime}}</view>
                </view>
                <view v-if="item.zhixunshiChatReplyText" class="cu-item">
                    <view class="cu-avatar radius" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big143004.jpg);"></view>
                    <view class="main">
                        <view class="content shadow" style="display:flex;flex-direction: column">
                            <text>{{item.zhixunshiChatReplyText}}</text>
                            <image v-if="item.zhixunshiChatReplyPhoto"
                                   :src="baseUrl+item.zhixunshiChatReplyPhoto"></image>
                        </view>
                    </view>
                    <view class="date ">{{item.updateTime}}</view>
                </view>
            </view>
        </view>
        <view class="cu-bar foot input" style="display: flex;flex-direction: column;padding: 10rpx;">
            <view style="width:100%;height:80rpx;padding: 0 10rpx;display: flex;justify-content: space-between;">
                <button @tap="onSendTap" class="cu-btn bg-green shadow" style="margin-top: 4px;">发送</button>
            </view>
            <view style="width: 100%;">
                <textarea v-model="zhixunshiChatIssueText" placeholder="开始输入..."/>
            </view>
        </view>

    </view>
</template>

<script>
    export default {
        data() {
            return {
                // 定时器
                inter: {},
                zhixunshiChatList: [],
                zhixunshiChatIssueText: '',
                zhixunshiChatIssuePhoto:""
            };
        },
        computed: {
            baseUrl() {
                return this.$base.url;
            }
        },
        onLoad() {
            let _this = this;
            let inter = setInterval(function() {
                _this.init();
            }, 3000)
            this.inter = inter
        },
        onUnload() {
            if (this.inter) {
                // 清除定时器
                clearInterval(this.inter);
            }
        },
        methods: {
            zhixunshiChatIssuePhotoTap() {
                let _this = this;
                this.$api.upload(function(res) {
                    console.log(res.file)
                    _this.zhixunshiChatIssuePhoto = 'upload/' + res.file;
                    _this.$forceUpdate();
                    _this.$nextTick(() => {
                        // _this.styleChange()
                    })
                });
            },
            async onSendTap() {
                let _this = this
                await _this.$api.save('zhixunshiChat', {
                    zhixunshiChatIssueText: _this.zhixunshiChatIssueText,
                    zhuangtaiTypes: 1,
                    zhixunshiId:uni.getStorageSync('zhixunshiId'),
                    zhixunshiChatTypes: 1,
                    zhixunshiChatIssuePhoto:_this.zhixunshiChatIssuePhoto,
                    issueTime:new Date().getTime()
                });
                _this.zhixunshiChatIssueText = '';
                _this.zhixunshiChatIssuePhoto = '';
                _this.init();
            },
            async init() {
                let res = await this.$api.page('zhixunshiChat', {
                    page: 1,
                    limit: 999,
                    order:"asc",
                    zhixunshiId:uni.getStorageSync('zhixunshiId')
                });
                this.zhixunshiChatList = res.data.list;
            }
        }
    }
</script>

