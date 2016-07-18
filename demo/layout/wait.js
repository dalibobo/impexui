impex.component("impex-window", impex.extend(impex.coms.base, {
	template:  '<div id="{{id}}" x-show="opened" class="impex-window {{=class}}" style="width:100%;height:100%;">\
					<div class="content" style="{{=style}}">\
						<div class="title" x-show="hasHeader">\
							<table>\
								<tr>\
									<td class="iocn-container"><i class="icon {{=iconcls}}"></i></td>\
									<td><span>{{title}}</span>\</td>\
									<td class="right"><i :click="close()" title="关闭窗口" class="close icon icon-no"></i></td>\
								</tr>\
							</table>\
						</div>\
						<div class="body">##body</div>\
						<div class="footer" x-show="hasFooter">##footer</div>\
					</div>\
				</div>',
	data: {
		title: "窗口",
		modal: true,
		hasHeader: true,
		hasFooter: true
	},
	onBeforeCompile:function(str) {					
		var target = this.view.__target;
		console.log(target);
		var footer = target.querySelector("footer");
		var footerHtml = (null != footer) ? footer.innerHTML : "";
		if (null != footer) {
			target.removeChild(footer);
		}
		var bodyHtml = target.innerHTML;
		return str.replace(/##footer/g, footerHtml).replace(/##body/g, bodyHtml);
	},
	onDisplay: function() {
		console.log("window");
		if (_.isString(this.data.show)) {
			if ("true" == this.data.show) this.data.open();
		}else{
			this.$open();
		}
		if (_.isString(this.data.hasfooter)) {
			this.data.hasFooter = ("true" == this.data.hasfooter);
		}
		if (_.isString(this.data.hasheader)) {
			this.data.hasHeader = ("true" == this.data.hasheader);
		}
		this._setBodySize();
		this._setPosition();
	},
	_setBodySize: function() {
		var content = $(this.view.el).find(".content");
		var h = content.height();					
		var body = content.find(".body");
		var offset = this.data.hasHeader ? 30 : 0;
		offset += this.data.hasFooter ? 44 : 0;
		body.height(h - offset);
	},
	_setPosition: function() {
		var content = $(this.view.el).find(".content");
		var h = content.height();
		var w = content.width();
		content.css({
			marginLeft: -w/2 + "px",
			marginTop: -h/2 + "px"
		});
	},
	methods: {
		close: function() {
			if (!this.data.opened) return;
			this.data.opened = false;
			this.emit("window.close");
		},
		open: function() {
			if (this.data.opened) return;
			this.data.opened = true;
			this._setBodySize();
			this._setPosition();
			this.emit("window.opened");
		}
	}
}));

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
		],
		flowList: [
			{value: 1, text: "流程1"},
			{value: 2, text: "流程2"},
			{value: 3, text: "流程3"},
			{value: 4, text: "流程4"}
		],
		flowList1: [
			{value: 1, text: "流程1"},
			{value: 2, text: "流程2"},
			{value: 3, text: "流程3"},
			{value: 4, text: "流程4"}
		]
	},
	methods: {
		openAddWindow: function() {
			impex.cget("addWindow").$open();
		},
		save: function() {
			impex.cget("addEventForm").submit();
		}
	},
	events: {
		"form.success": function(rs) {
			Messager.success("添加成功", 2000);
			impex.cget("addWindow").$close();
		}
	}
});