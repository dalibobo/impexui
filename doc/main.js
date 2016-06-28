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
		if (window.impex) initImpex();
	}, 100);
});

if (window.impex) {
	impex.component("x-doc-table", {
		$template: '<table class="doc-table">\
					<tbody>\
					<tr x-if="item.type">\
					<th><strong>名称</strong></th>\
					<th><strong>类型</strong></th>\
					<th><strong>描述</strong></th>\
					<th><strong>默认值</strong></th>\
					</tr>\
					<tr x-if="!item.type">\
					<th><strong>名称</strong></th>\
					<th><strong>参数</strong></th>\
					<th><strong>描述</strong></th>\
					</tr>\
					<tr x-each="datas as d">\
					<td>{{d.name}}</td>\
					<td x-if="item.type">{{d.type}}</td>\
					<td x-if="!item.type">{{d.parameter}}</td>\
					<td>{{# d.descr}}</td>\
					<td x-if="item.type">{{d.default}}</td>\
					</tr>\
					</table>',
		onInit: function() {
			if (this.rows) {
				this.datas = this.closest(this.rows)[this.rows] || [];
				if (this.datas.length > 0) {
					this.item = this.datas[0];
				}
			}
		}
	});	
}