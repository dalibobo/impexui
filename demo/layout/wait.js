// 待办事项组件
impex.component("impex-com-wait", {
	templateURL: "wait.html",
	data: {
		cols: [
			{code: "eventNo", title: "事件编号", align: "center", width: 40, checkbox: true},
			{code: "eventName", title: "事件名称"},
			{code: "flowName", title: "流程名称"},
			{code: "flowNode", title: "流程当前节点"},
			{code: "creator", title: "创建人"},
			{code: "createTime", title: "创建时间"}
		]
	}
});