"use strict";var cartList=JSON.parse(localStorage.getItem("cartList"));function bindHtml(){var t=cartList.every(function(t){return!0===t.isSelect}),i='\n    <div class="top">\n    <div class="all">\n        <input class="selectAll" type="checkbox" '.concat(t?"checked":"",'>全选\n    </div>\n    <div class="pic">&nbsp;</div>\n    <p>商品名称</p>\n    <p>单价</p>\n    <p>数量</p>\n    <p>小计</p>\n    <p>操作</p>\n</div>\n<div class="center">\n    <ul class="shop">\n     ');cartList.forEach(function(t){i+='\n        <li>\n        <div class="select">\n            <input data-id='.concat(t.list_id,' class="smallSelect" type="checkbox" ').concat(t.isSelect?"checked":"",'>\n        </div>  \n        <div class="info">\n            <img src="').concat(t.list_url,'" alt="">\n        </div>\n        <div class="name">').concat(t.list_name,'</div> \n        <div class="price">').concat(t.list_price,'</div>\n        <div class="num">\n            <button data-id="').concat(t.list_id,'" class="sub">-</button>\n            <input type="text" value="').concat(t.number,'">\n            <button data-id="').concat(t.list_id,'" class="add">+</button>\n        </div>\n        <div class="tit">￥：').concat(t.xiaoji.toFixed(2),'</div>\n        <div class="del_1" data-id="').concat(t.list_id,'" >删除</div>\n       </li>               \n        ')});var n=cartList.filter(function(t){return!0===t.isSelect}),c=0,a=0;n.forEach(function(t){c+=t.number,a+=t.xiaoji}),i+='\n    </ul>\n</div>\n<div class="bottom">\n    <p><a class="tz" >继续选购</a> <em>|</em> 选择 <span> '.concat(c,"</span>件商品 </p>\n    <span>合计：").concat(a,' 元</span>\n    <button class="pay" ').concat(n.length?"":"disabled",'>去结算</button>\n    <button class="del" >清空购物车</button>\n</div>    \n    '),$(".cart").html(i)}function bindEvent(){$(".cart").on("change",".selectAll",function(){var i=this;cartList.forEach(function(t){t.isSelect=i.checked}),bindHtml(),localStorage.setItem("cartList",JSON.stringify(cartList))}),$(".cart").on("change",".smallSelect",function(){var i=$(this).data("id");cartList.forEach(function(t){t.list_id===i&&(t.isSelect=!t.isSelect)}),bindHtml(),localStorage.setItem("cartList",JSON.stringify(cartList))}),$(".cart").on("click",".sub",function(){var i=$(this).data("id");cartList.forEach(function(t){t.list_id===i&&(1<t.number&&t.number--,t.xiaoji=t.list_price*t.number)}),bindHtml(),localStorage.setItem("cartList",JSON.stringify(cartList))}),$(".cart").on("click",".add",function(){var i=$(this).data("id");cartList.forEach(function(t){t.list_id===i&&(t.number++,t.xiaoji=t.list_price*t.number)}),bindHtml(),localStorage.setItem("cartList",JSON.stringify(cartList))}),$(".cart").on("click",".del_1",function(){var i=$(this).data("id"),t=JSON.parse(localStorage.getItem("cartList"));t=t.filter(function(t){return t.list_id!==i}),localStorage.setItem("cartList",JSON.stringify(t)),bindHtml(),window.location.reload()}),$(".cart").on("click",".del",function(){localStorage.removeItem("cartList"),bindHtml(),window.location.reload()})}cartList?(bindHtml(),bindEvent()):alert("您的购物车为空"),$(".cart").on("click",".tz",function(){window.location.href="../pages/list.html"});