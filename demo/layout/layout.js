// 根据路径查找组件
function findComponentByPathInMenu(path) {
	for (var k in MENUS) {
		var items = MENUS[k];
		if (_.isArray(items) && items.length > 0) {
			for (var i = items.length; i--;) {
				var menu = items[i];
				if (menu.link && path == menu.link) {
					return menu;
				}
			}
		}
	}
	return null;
}

// 根据路径查找组件
function findComponentByPathInFunction(path) {
	for (var i = 0; i < FUNCTIONS.length; i++) {
		var fn = FUNCTIONS[i];
		if (fn.link && fn.link == path) {
			return fn;
		}
	}
	return null;
}

// 获取javascrit
function getScript(url) {
	$.ajax({
		url: url,
		async: false,	// 同步加载
		success: function(rs) {
			var oHead = document.getElementsByTagName('HEAD').item(0); 
			var oScript = document.createElement( "script" ); 
			oScript.language = "javascript"; 
			oScript.type = "text/javascript"; 
			oScript.defer = true; 
			oScript.text = rs; 
			oHead.appendChild(oScript); 
		},
		error: function(rs) {
			console.log(rs);
		}
	});
}

var PANELS = [];	// 存储着所有的panel组件
var PANEL_HTML = "";	// 动态构建panel组件
var RS = {};	// 路由地址配置
var PANEL_HIS = {};	// 记录每个panel最新的路由地址，可以用来保持切换tab页时已打开页面的状态
var LOADED_JS = {};	// 已经加载过的组件js
for (var i = 0; i < FUNCTIONS.length; i++) {
	var fn = FUNCTIONS[i];
	if (fn.link && fn.component) {
		var rs = {};
		rs["^("+ fn.link +")$"] = function(path) {
			var c = findComponentByPathInFunction(path);
			if (null != c) {
				if (c.componentjs && !LOADED_JS[c.componentjs]) {	// 远程加载js
					getScript(c.componentjs);
					LOADED_JS[c.componentjs] = true;
				}
				if (PANEL_HIS[this.host.code] != path) {
					PANEL_HIS[this.host.code] = path;
					return c.component;
				}
			}
		}
		RS[fn.code] = rs;
		var n = "impex-"+ fn.code +"-panel";
		var params = {
			code: fn.code,
			template: '<div class="'+ n +' panel active" {{=BINDPROPS}}><x-router-view></x-router-view></div>',
			onCreate:function(router){
				router.when(RS[this.code]).onRoute(this.cbk);
				PANELS.push(this);						
			},
			cbk:function(path){
				this.host.emit("panel.route", path);
			}
		};
		PANEL_HTML += "<" + n + "></" + n + ">";
		impex.component(n, params, ['XRouter']);
	}
}
for (var k in MENUS) {
	var items = MENUS[k];
	if (_.isArray(items) && items.length > 0) {
		var rs = {};
		for (var i = items.length; i--;) {
			var menu = items[i];
			if (menu.link && menu.component) {
				rs["^("+ menu.link +")$"] = function(path) {
					var c = findComponentByPathInMenu(path);
					console.log(path);
					if (null != c) {
						if (c.componentjs && !LOADED_JS[c.componentjs]) {	// 远程加载js
							getScript(c.componentjs);
							LOADED_JS[c.componentjs] = true;
						}
						if (PANEL_HIS[this.host.code] != path) {
							PANEL_HIS[this.host.code] = path;
							return c.component;
						}
					}								
				}
			}
		}
		
		if (!_.isEmpty(rs)) {
			RS[k] = rs;
			var n = "impex-"+ k +"-panel";
			var params = {
				code: k,
				template: '<div class="'+ n +' panel active" {{=BINDPROPS}}><x-router-view></x-router-view></div>',
				onCreate:function(router){
					router.when(RS[this.code]).onRoute(this.cbk);
					PANELS.push(this);						
				},
				cbk:function(path){
					this.host.emit("panel.route", path);
				}
			};
			PANEL_HTML += "<" + n + "></" + n + ">";
			impex.component(n, params, ['XRouter']);
		}
	}
}

// 页面模型
var model = {
	data: {
		currentPanel: CURRENT_PANEL,
		currentLink: CURRENT_LINK,
		currentMenus: [],
		functions: FUNCTIONS,
		menus: MENUS,
		panelHtml: ""
	},
	onDisplay: function() {
		this.$setCurrentLeftMenu();
		this.loadLink(this.data.currentLink);
	},
	events: {
		"panel.route": function(panel, path) {
			this.data.currentLink = path;
			this.data.currentPanel = panel.code;
			this.$setCurrentLeftMenu();
			this.showPanel(panel.code);
		}
	},
	showPanel: function(code) {	// 显示当前panel
		for (var i = PANELS.length; i--;) {
			PANELS[i].view.hide();
			if (PANELS[i].code === code) {
				PANELS[i].view.show();
			}
		}
	},
	loadLink: function(link) {
		var href = location.href;
		if (href.indexOf("#!") != -1) {
			location.href = href.split("#!")[0] + "#!" + link;
		}else{
			location.href += "#!" + link;
		}
	},
	onBeforeCompile:function(str){
		return str.replace(/##PANEL_HTML/g, PANEL_HTML);
	},
	methods: {
		tabChange: function(code, fun) {
			this.data.lastPanel = this.data.currentPanel;
			this.data.currentPanel = code;
			this.showPanel(code);
			if (fun.link && fun.component && !PANEL_HIS[code]) {
				this.loadLink(fun.link);
			}
			if (PANEL_HIS[code]) {
				this.data.currentLink = PANEL_HIS[code];
				this.loadLink(this.data.currentLink);
			}
			if (_.isArray(MENUS[code]) && MENUS[code].length > 0 && !PANEL_HIS[code]) {
				var menu = MENUS[code][0];
				this.loadLink(menu.link);
			}
			this.$setCurrentLeftMenu();
		},
		setCurrentLeftMenu: function() {
			if (_.isArray(this.data.menus[this.data.currentPanel])) {
				this.data.currentMenus = this.data.menus[this.data.currentPanel];
			}else{
				this.data.currentMenus = [];
			}
		},
		clickLeftMenu: function(menu) {
			var fn = this.getFn(this.data.currentPanel);
			fn.html = '<div class="panel-loading">页面加载中...</div>';
			if (_.isString(menu.html)) {
				fn.html = menu.html;
			}else{
				if (_.isString(menu.link)) {
					this.loadUrl(menu.link, {
						success: function(html) {
							fn.html = html;
						},
						error: function(html) {
							fn.html = '<div class="panel-error">页面加载出错了...</div>';
						}
					});
				}else{
					fn.html = '<div class="panel-blank">没有可显示内容...</div>';
				}
			}
		}
	},
	getFn: function(code) {
		var fns = this.data.functions;
		for (var i = fns.length; i--;) {
			if (fns[i].code == code) {
				return fns[i];
			}
		}
		return null;
	}
}

$(document).ready(function() {
	$('#leftNav').perfectScrollbar();
});

var page = impex.render(document.body, model);