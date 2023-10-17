<script setup lang='ts'>
    import { onMounted, reactive } from 'vue';
    import { useRouter, NavigationGuard,RouteLocationMatched, RouteRecordNormalized } from 'vue-router';



    const router = useRouter();
    const levelList: RouteRecordNormalized[] = reactive([]);

    function getBreadcrumb(){
        let matched = router.currentRoute.value.matched.filter((item) => {item.meta && item.meta.title});
        const first = matched[0];

        if(!isDashboard(first)) {
            const matchedItem: RouteLocationMatched = {
                aliasOf: undefined,
                path: '/dashboard',
                name: 'dashboard',
                meta: { title: "Dashboard" },
                components: {},
                redirect: '',
                children: [],
                props: {},
                beforeEnter: () => {
                },
                leaveGuards: new Set<NavigationGuard>(),
                updateGuards: new Set<NavigationGuard>(),
                enterCallbacks: {},
                instances: {}
            };

            matched = [
                matchedItem,
                ...matched,
            ];
        }

        levelList.length = 0; //清空 levelList
        levelList.push(
            ...matched.filter(
                (item) => {
                    item.meta && item.meta.title && item.meta.breadcrumb !== false
                }
            )
        );
    }

    function isDashboard(route: RouteRecordNormalized): boolean {
        return route.path === '/dashboard';
    }

    function handleLink(item: RouteRecordNormalized) {
        if(item.redirect) {
            item.redirect;
            router.push(item);
            return;
        }
    }

    onMounted(() => getBreadcrumb());

</script>

<template>
     <el-breadcrumb class="app-breadcrumb" spellcheck="/">
        <TransitionGroup name="breadcrumb">
            <el-breadcrumb-item v-for="(item, index) in levelList" :key="item.path" >
                <span v-if="item.redirect === 'noRedirect' || index == levelList.length - 1" class="no-redirect">{{ item.meta.title }}</span>
                <a v-else @click.prevent="handleLink(item)">{{ item.meta.title }}</a>
            </el-breadcrumb-item>
        </TransitionGroup>
    </el-breadcrumb>
</template>

<style lang='scss' scoped>
    .app-breadcrumb.el-breadcrumb {
        display: inline-block;
        font-size: 14px;
        line-height: 50px;
        margin-left: 8px;

        .no-redirect {
        color: #97a8be;
        cursor: text;
        }
    }
</style>