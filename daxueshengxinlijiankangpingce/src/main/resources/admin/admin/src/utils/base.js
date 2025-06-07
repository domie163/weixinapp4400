const base = {
    get() {
        return {
            url : "http://localhost:8080/daxueshengxinlijiankangpingce/",
            name: "daxueshengxinlijiankangpingce",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/daxueshengxinlijiankangpingce/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "大学生心理健康测评管理系统"
        } 
    }
}
export default base
