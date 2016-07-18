/**
 * 模版配置文件
 */

// 当前选择的panel
var CURRENT_PANEL = "home";

// 当前选择的左侧菜单的链接
var CURRENT_LINK = "/home";

// 功能集合
var FUNCTIONS = [
	{name: "首页", code: "home"},
	{name: "日常办公", code: "daily"},
	{name: "故障缺陷管理", code: "bug", link: "/bug", component: "impex-com-bug", componentjs: "bug.js"},
	{name: "交接班管理", code: "exchange_class"},
	{name: "两票管理", code: "tiket"},
	{name: "运行记录", code: "run"},
	{name: "安全管理", code: "safe"},
	{name: "检修管理", code: "repair"},
	{name: "设备管理", code: "eq"},
	{name: "物资管理", code: "device"},
	{name: "生产日报报表", code: "report"},
	{name: "文档管理", code: "doc"},
	{name: "基础信息", code: "base"}
];

// 菜单集合
var MENUS = {
	"home": [
		{name: "主页", link: "/home", component: "impex-com-home", componentjs: "home.js"}
	],
	"daily": [
		{name: "待办事项", link: "/wait", component: "impex-com-wait", componentjs: "wait.js"},
		{name: "已办事项"},
		{name: "日报"}
	]
};