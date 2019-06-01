<template>
    <div class="comp-navbar">
        <!-- 占位栏 -->
        <cover-view class="placeholder-bar" :style="{height: navBarHeight + 'px'}"> </cover-view>
        <!-- 导航栏主体 -->
        <cover-view class="navbar" :style="{height: navBarHeight + 'px',backgroundColor:navBackgroundColor}">
            <!-- 状态栏 -->
            <cover-view class="nav-statusbar" :style="{height: statusBarHeight + 'px'}"></cover-view>
            <!-- 标题栏 -->
            <cover-view class="nav-titlebar" :style="{height: titleBarHeight + 'px' }">
                <!-- home及后退键 -->
                <cover-view class="bar-options">
                    <cover-view v-if="backVisible" class="opt opt-back" @click="backClick()">
                    <cover-image class="back-image" src="/static/images/back.png"></cover-image>
                    </cover-view>
                    <cover-view class="line" v-if="backVisible && homePath"></cover-view>
                    <cover-view v-if="homePath" class="opt opt-home" @click="homeClick()">
                    <cover-image class="home-image" src="/static/images/home.png"></cover-image>
                    </cover-view>
                </cover-view>
                <!-- 标题 -->
                <cover-view class="bar-title" :style="[{color:titleColor}]">{{title}}</cover-view>
            </cover-view>
        </cover-view>
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },methods:{
        beforeMount() {
        const self = this;
        wx.getSystemInfo({
            success(system) {
                console.log(`system:`, system);
                self.statusBarHeight = system.statusBarHeight;
                self.platform = system.platform;

                let platformReg = /ios/i;
                if (platformReg.test(system.platform)) {
                    self.titleBarHeight = 44;
                } else {
                    self.titleBarHeight = 48;
                }

                self.navBarHeight = self.statusBarHeight + self.titleBarHeight;
            }
        });
    },
    }
}
</script>
