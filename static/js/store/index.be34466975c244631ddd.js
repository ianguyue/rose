webpackJsonp([4,5,6],{"9djp":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("IHPB"),r=n.n(o),i=(n("ZLEe"),n("aA9S")),a=n.n(i),u=n("3cXf"),p=n.n(u),d=n("aozt"),c=n.n(d);var s=["https://www.easy-mock.com/mock/5c6ead0e37202863fa565925"],v=function(t,e){return function(n){return(n=n||{}).opts&&n.opts.data&&n.opts.data.experiment_id&&(n.opts.data.hash=CryptoJS.AES.encrypt(p()(n.opts.data),key).toString()),c()(a()({},{url:n.url,baseURL:t,method:n.method,withCredentials:!0,Authorization:e},n.opts)).then(function(t){return t.data})}}.apply(void 0,r()(s));function l(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return v({method:"get",url:"/api/v1/page/detail",opts:t})}function g(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return v({method:"get",url:"/api/v1/page/list",opts:t})}function f(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return v({method:"get",url:"/api/v1/component/detail",opts:t})}function _(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return v({method:"post",url:"/api/v1/page/operate",opts:t})}function m(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return v({method:"get",url:"/api/v1/tpl/detail",opts:t})}function h(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return v({method:"get",url:"/api/v1/tpl/list",opts:t})}function y(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return v({method:"post",url:"/api/login",opts:t})}function S(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return v({method:"get",url:"/ssoagentlogin/logoutAndGetLoginUrl",opts:t})}function P(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return v({method:"get",url:"/api/getUserInfo",opts:t})}function C(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return v({method:"post",url:"/api/v1/image/upload",opts:t})}function I(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return v({method:"get",url:"/api/v1/page/releaseResult",opts:t})}function w(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return v({method:"get",url:"/api/v1/page/delete",opts:t})}function U(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return v({method:"post",url:"/api/v1/page/clone",opts:t})}function E(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return v({method:"post",url:"/api/v1/page/forceSSR",opts:t})}function b(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return v({method:"post",url:"/api/v1/page/update",opts:t})}function k(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return v({method:"post",url:"/api/v1/channel/addRecord",opts:t})}function R(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return v({method:"get",url:"/api/v1/channel/list",opts:t})}function A(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return v({method:"post",url:"/api/v1/channel/delete",opts:t})}function j(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return v({method:"get",url:"/api/v2/view/list",opts:t})}function L(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return v({method:"get",url:"/api/v2/view/detail",opts:t})}function O(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return v({method:"get",url:"/api/v1/page/allList",opts:t})}function z(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return v({method:"post",url:"/api/v1/admin/add",opts:t})}function J(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return v({method:"get",url:"/api/v1/admin/list",opts:t})}function M(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return v({method:"get",url:"/api/v1/admin/delete",opts:t})}function x(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return v({method:"get",url:"/api/v1/analysis/list",opts:t})}function W(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return v({method:"post",url:"/api/v1/group/add",opts:t})}function Z(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return v({method:"get",url:"/api/v1/group/list",opts:t})}function N(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return v({method:"post",url:"/api/v1/group/update",opts:t})}function V(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return v({method:"get",url:"/api/v1/group/groupPages",opts:t})}function X(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return v({method:"post",url:"/api/v1/group/delete",opts:t})}function q(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return v({method:"get",url:"/api/v1/es/list",opts:t})}function B(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return v({method:"get",url:"/api/v1/es/log",opts:t})}function G(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return v({method:"get",url:"/api/v2/compadmin/complist",opts:t})}function H(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return v({method:"post",url:"/api/v2/compadmin/adddependence",opts:t})}function K(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return v({method:"get",url:"/api/v2/compadmin/getdependence",opts:t})}function Q(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return v({method:"post",url:"/api/v2/compadmin/updatecompdependence",opts:t})}function D(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return v({method:"get",url:"/api/v2/compadmin/templatelist",opts:t})}function F(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return v({method:"post",url:"/api/v2/compadmin/updatetemplatecomp",opts:t})}n.d(e,"api_v1_page_clone_post",function(){return U}),n.d(e,"rose_page_detail_get",function(){return l}),n.d(e,"rose_page_list_get",function(){return g}),n.d(e,"rose_component_detail_get",function(){return f}),n.d(e,"rose_page_operate_post",function(){return _}),n.d(e,"rose_tpl_detail_get",function(){return m}),n.d(e,"rose_tpl_list_get",function(){return h}),n.d(e,"api_v1_login_post",function(){return y}),n.d(e,"api_v1_image_upload_post",function(){return C}),n.d(e,"api_v1_page_release_result_get",function(){return I}),n.d(e,"api_v1_page_delete_get",function(){return w}),n.d(e,"api_v1_channel_addRecord_post",function(){return k}),n.d(e,"api_v1_channel_list_get",function(){return R}),n.d(e,"api_v1_channel_delete_post",function(){return A}),n.d(e,"api_v2_view_list_get",function(){return j}),n.d(e,"api_v2_view_detail_get",function(){return L}),n.d(e,"api_v1_page_allList_get",function(){return O}),n.d(e,"api_v1_admin_add_post",function(){return z}),n.d(e,"api_v1_admin_list_get",function(){return J}),n.d(e,"api_v1_admin_delete_get",function(){return M}),n.d(e,"api_v1_analysis_list_get",function(){return x}),n.d(e,"api_v1_group_add_post",function(){return W}),n.d(e,"api_v1_group_list_get",function(){return Z}),n.d(e,"api_v1_es_list_get",function(){return q}),n.d(e,"api_v1_es_log_get",function(){return B}),n.d(e,"api_v1_group_update_post",function(){return N}),n.d(e,"api_v1_group_groupPages_get",function(){return V}),n.d(e,"api_v1_group_delete_post",function(){return X}),n.d(e,"api_v1_page_update_post",function(){return b}),n.d(e,"api_v1_getUserInfo_get",function(){return P}),n.d(e,"api_v1_logout_post",function(){return S}),n.d(e,"api_v2_compadmin_complist",function(){return G}),n.d(e,"api_v2_compadmin_adddependence",function(){return H}),n.d(e,"api_v2_compadmin_getdependence",function(){return K}),n.d(e,"api_v2_compadmin_updatecompdependence",function(){return Q}),n.d(e,"api_v2_compadmin_templatelist",function(){return D}),n.d(e,"api_v2_compadmin_updatetemplatecomp",function(){return F}),n.d(e,"api_v1_page_forceSSR",function(){return E})},RgZf:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("9djp");n.d(e,"roseApi",function(){return o})},hVI7:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("R4Sj"),r=n("3cXf"),i=n.n(r),a={setCurrentPage:function(t,e){t.currentPage=e,t.currentEditor=-1},saveConfig:function(t,e){t.save=e},currentEditor:function(t,e){t.currentEditor=e},addComponent:function(t,e){t.currentEditor>=0?t.sortUI[t.currentPage].components.splice(t.currentEditor+1,0,JSON.parse(i()(e))):t.sortUI[t.currentPage].components.push(JSON.parse(i()(e))),t.currentEditor=t.currentEditor>=0?t.currentEditor+1:t.sortUI[t.currentPage].components.length-1},updateSortUIProps:function(t,e){var n=e.key,o=e.value;t.sortUI[t.currentPage][n]=o},removeComponent:function(t,e){t.currentEditor=-1,t.sortUI[t.currentPage].components.splice(e,1)},syncState:function(t,e){void 0!==e.currentPage&&(t.currentPage=e.currentPage),void 0!==e.currentEditor&&(t.currentEditor=e.currentEditor),void 0!==e.sortUI&&(t.sortUI=e.sortUI)},clearWorkbench:function(t){t.currentEditor=-1,t.save=!0,t.currentPage=0,t.sortUI=[{title:"标题",bgColor:"#fe2f41",bgImage:"",bgSize:null,service:"",channel:"",components:[]}]},addConfig:function(t){t.sortUI.push({title:"标题",bgColor:"#fe2f41",bgImage:"",bgSize:null,service:"",channel:"",components:[]})}},u=n("lC5x"),p=n.n(u),d=n("aA9S"),c=n.n(d),s=n("J0Oq"),v=n.n(s),l=function(t){window.parent.postMessage(t,location.origin+"/")},g=function(t){window.frames[0]&&window.frames[0].postMessage(t,location.origin)},f=n("RgZf"),_={setCurrentPage:function(t,e){var n=t.commit,o=t.state;n("setCurrentPage",e),g({type:"syncState",value:o})},saveConfig:function(t){var e=t.commit;t.state;e("saveConfig",!(arguments.length>1&&void 0!==arguments[1])||arguments[1])},clearWorkbench:function(t){(0,t.commit)("clearWorkbench")},selectComponent:function(t,e){var n=t.commit,o=t.state;n("currentEditor",e),n("saveConfig",!1),l({type:"syncState",value:o})},addComponent:function(t,e){var n=this,o=t.commit,r=t.state;return v()(p.a.mark(function t(){var i;return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.roseApi.rose_component_detail_get({params:{name:e.name}});case 2:(i=t.sent).data.data.style=i.data.data.style||{container:{}},o("addComponent",c()({},e,i.data)),o("saveConfig",!1),g({type:"syncState",value:r});case 7:case"end":return t.stop()}},t,n)}))()},removeComponent:function(t,e){var n=t.commit,o=t.state;n("removeComponent",e),n("saveConfig",!1),l({type:"syncState",value:o})},updateSortUIProps:function(t,e){var n=t.commit,o=t.state;n("updateSortUIProps",{key:e.key,value:e.value}),n("saveConfig",!1),g({type:"syncState",value:o})},syncState:function(t,e){var n=t.commit,o=t.state;n("syncState",e),n("saveConfig",!1),g({type:"syncState",value:o})},addConfig:function(t){var e=t.commit,n=t.state;e("addConfig"),g({type:"syncState",value:n})}};n("KQ6f").default.use(o.a);var m=new o.a.Store({state:{save:!0,currentEditor:-1,currentPage:0,sortUI:[{title:"标题",bgColor:"#fe2f41",bgImage:"",bgSize:null,service:"",components:[]}]},mutations:a,actions:_,getters:{currentEditor:function(t){return t.currentEditor},components:function(t){return t.sortUI[t.currentPage]?t.sortUI[t.currentPage].components:[]},sortUI:function(t){return t.sortUI[t.currentPage]},state:function(t){return t},currentPage:function(t){return t.currentPage},save:function(t){return t.save}}});e.default=m;window.addEventListener("message",function(t){t.source!==window&&"loaded"!==t.data&&m.dispatch(t.data.type,t.data.value)})}},["hVI7"]);
//# sourceMappingURL=index.be34466975c244631ddd.js.map