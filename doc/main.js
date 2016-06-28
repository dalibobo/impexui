var page;
$(document).ready(function() {
	$(".prettyprint.linenums").each(function(){
		var html = $(this).html();
		html = html.replace(/</g, "&lt;");
		html = html.replace(/>/g, "&gt;");
		$(this).html(html);
	});
	prettyPrint();
	
	setTimeout(function() {
		initImpex();
	}, 100);
});

// 初始化impex
function initImpex() {
	page = impex.render(document.body, {
		proRows: [
			{name: "id", type: "String", descr: "id属性，通过该属性可获取组件的数据模型", default: ""}
		]
	});
}

impex.component("x-doc-table", {
	$template: '<table class="doc-table">\
				<tbody><tr>\
				<th><strong>名称</strong></th>\
				<th><strong>类型</strong></th>\
				<th><strong>描述</strong></th>\
				<th><strong>默认值</strong></th>\
				</tr>\
				<tr x-each="datas as d">\
				<td>{{d.name}}</td>\
				<td>{{d.type}}</td>\
				<td>{{d.descr}}</td>\
				<td>{{d.default}}</td>\
				</tr>\
				</table>',
	onInit: function() {
		if (this.rows) {
			this.datas = this.closest(this.rows)[this.rows];
		}
	}
});