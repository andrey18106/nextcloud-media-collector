"use strict";(self.webpackChunkmediadc=self.webpackChunkmediadc||[]).push([["src_views_Configuration_vue"],{41575:(t,n,e)=>{e.d(n,{Z:()=>s});var i=e(23645),a=e.n(i)()(!0);a.push([t.id,"\n.mediadc-configuration[data-v-50e2e8b1] {\n\tpadding: 20px;\n\ttext-align: center;\n}\na[data-v-50e2e8b1] {\n\ttext-decoration: underline;\n}\n.installed[data-v-50e2e8b1] {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n}\n.installed input[data-v-50e2e8b1] {\n\tmargin: 0 10px;\n}\n.dependencies-table[data-v-50e2e8b1] {\n\twidth: 100%;\n\toverflow-x: scroll;\n\tmargin: 20px auto;\n}\n.dependencies-table table[data-v-50e2e8b1] {\n\tmargin: 0 auto;\n\tposition: relative;\n}\n.dependencies-table table caption[data-v-50e2e8b1] {\n\tpadding: 5px 10px;\n\tborder-bottom: 1px solid #dadada;\n}\n.dependencies-table table th[data-v-50e2e8b1], .dependencies-table table td[data-v-50e2e8b1] {\n\tpadding: 5px 10px;\n\tborder-bottom: 1px solid #dadada;\n\tborder-right: 1px solid #dadada;\n}\n.dependencies-table table th[data-v-50e2e8b1]:last-child, .dependencies-table table td[data-v-50e2e8b1]:last-child {\n\tborder-right: none;\n}\n.package[data-v-50e2e8b1] {\n\tposition: relative;\n}\n.package-tooltip[data-v-50e2e8b1] {\n\tdisplay: none;\n\tpadding: 0 5px;\n\tborder-radius: 5px;\n\tbackground-color: #000;\n\tcolor: #fff;\n\tposition: absolute;\n\ttop: calc(-100% - 5px);\n\tleft: 50%;\n\ttransform: translateX(-50%);\n\tfont-size: 12px;\n\tbox-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);\n}\n.package-tooltip[data-v-50e2e8b1]:before {\n\tcontent: '';\n\tposition: absolute;\n\tleft: 50%;\n\ttransform: translateX(-50%) rotateZ(45deg);\n\tbottom: -3px;\n\twidth: 10px;\n\theight: 10px;\n\tbackground-color: #000;\n\tz-index: -1;\n}\n.package:hover .package-tooltip[data-v-50e2e8b1] {\n\tdisplay: block;\n}\n.action-blackout[data-v-50e2e8b1] {\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\tright: 0;\n\tbottom: 0;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tbackground-color: rgba(0, 0, 0, 0.3);\n\tz-index: 10;\n\tborder-radius: 10px;\n}\n.install-errors[data-v-50e2e8b1] {\n\tmax-height: 50vh;\n\toverflow-y: scroll;\n\tborder: 1px solid #ff3333;\n\tborder-radius: 5px;\n\tpadding: 0 10px 10px;\n\tmargin: 10px auto;\n}\n.errors-list-item[data-v-50e2e8b1] {\n\tborder-bottom: 1px solid #ffcccc;\n\tpadding: 5px;\n\ttext-align-last: left;\n}\n.install-warnings[data-v-50e2e8b1] {\n\tmax-height: 50vh;\n\toverflow-y: scroll;\n\tborder: 1px solid #ffc629;\n\tborder-radius: 5px;\n\tpadding: 0 10px 10px;\n\tmargin: 10px auto;\n}\n.warnings-list-item[data-v-50e2e8b1] {\n\tborder-bottom: 1px solid #f7ffcc;\n\tpadding: 5px;\n\ttext-align-last: left;\n}\n","",{version:3,sources:["webpack://src/views/Configuration.vue"],names:[],mappings:";AAoMA;CACA,aAAA;CACA,kBAAA;AACA;AAEA;CACA,0BAAA;AACA;AAEA;CACA,aAAA;CACA,mBAAA;CACA,uBAAA;AACA;AAEA;CACA,cAAA;AACA;AAEA;CACA,WAAA;CACA,kBAAA;CACA,iBAAA;AACA;AAEA;CACA,cAAA;CACA,kBAAA;AACA;AAEA;CACA,iBAAA;CACA,gCAAA;AACA;AAEA;CACA,iBAAA;CACA,gCAAA;CACA,+BAAA;AACA;AAEA;CACA,kBAAA;AACA;AAEA;CACA,kBAAA;AACA;AAEA;CACA,aAAA;CACA,cAAA;CACA,kBAAA;CACA,sBAAA;CACA,WAAA;CACA,kBAAA;CACA,sBAAA;CACA,SAAA;CACA,2BAAA;CACA,eAAA;CACA,yCAAA;AACA;AAEA;CACA,WAAA;CACA,kBAAA;CACA,SAAA;CACA,0CAAA;CACA,YAAA;CACA,WAAA;CACA,YAAA;CACA,sBAAA;CACA,WAAA;AACA;AAEA;CACA,cAAA;AACA;AAEA;CACA,kBAAA;CACA,MAAA;CACA,OAAA;CACA,QAAA;CACA,SAAA;CACA,aAAA;CACA,mBAAA;CACA,uBAAA;CACA,oCAAA;CACA,WAAA;CACA,mBAAA;AACA;AAEA;CACA,gBAAA;CACA,kBAAA;CACA,yBAAA;CACA,kBAAA;CACA,oBAAA;CACA,iBAAA;AACA;AAEA;CACA,gCAAA;CACA,YAAA;CACA,qBAAA;AACA;AAEA;CACA,gBAAA;CACA,kBAAA;CACA,yBAAA;CACA,kBAAA;CACA,oBAAA;CACA,iBAAA;AACA;AAEA;CACA,gCAAA;CACA,YAAA;CACA,qBAAA;AACA",sourcesContent:["\x3c!--\n - @copyright Copyright (c) 2021 Andrey Borysenko <andrey18106x@gmail.com>\n -\n - @copyright Copyright (c) 2021 Alexander Piskun <bigcat88@icloud.com>\n -\n - @author Andrey Borysenko <andrey18106x@gmail.com>\n -\n - @license AGPL-3.0-or-later\n -\n - This program is free software: you can redistribute it and/or modify\n - it under the terms of the GNU Affero General Public License as\n - published by the Free Software Foundation, either version 3 of the\n - License, or (at your option) any later version.\n -\n - This program is distributed in the hope that it will be useful,\n - but WITHOUT ANY WARRANTY; without even the implied warranty of\n - MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the\n - GNU Affero General Public License for more details.\n -\n - You should have received a copy of the GNU Affero General Public License\n - along with this program. If not, see <http://www.gnu.org/licenses/>.\n -\n --\x3e\n\n<template>\n\t<div v-if=\"!loading\" class=\"mediadc-configuration\">\n\t\t<h2>{{ rootTitle }}</h2>\n\t\t<div v-if=\"isAdmin\" class=\"configuration\">\n\t\t\t<p>\n\t\t\t\t{{ t('mediadc', 'Welcome to MediaDC. You almost there! The last setup step - installation of Python dependencies.') }}\n\t\t\t\t<br>\n\t\t\t\t{{ t('mediadc', 'Here you can run automatic installation of Python MediaDC dependencies.') }}\n\t\t\t\t<br>\n\t\t\t\t{{ t('mediadc', 'This may take a few minutes (regarding on your system config).') }}\n\t\t\t\t<br>\n\t\t\t\t{{ t('mediadc', 'After checking or installing you can see the results below in a detailed table (installed packages, errors, requirements overview).') }}\n\t\t\t\t<br>\n\t\t\t\t{{ t('mediadc', 'You can install all dependencies with hands, please refer documentation for your OS how to do this:') }}\n\t\t\t\t<a href=\"https://github.com/andrey18106/mediadc/wiki\">{{ t('mediadc', 'wikis') }}</a>.\n\t\t\t\t<br>\n\t\t\t\t{{ t('mediadc', 'If you have any additional questions contact us in') }} <a href=\"https://t.me/mediadc_support\">{{ t('mediadc', 'Telegram chat') }}</a>.\n\t\t\t</p>\n\t\t\t<div class=\"installed\">\n\t\t\t\t<input id=\"installed\"\n\t\t\t\t\ttype=\"checkbox\"\n\t\t\t\t\tname=\"installed\"\n\t\t\t\t\t:v-model=\"installed\"\n\t\t\t\t\t:checked=\"installed\"\n\t\t\t\t\tdisabled>\n\t\t\t\t<label for=\"installed\">\n\t\t\t\t\t{{ t('mediadc', 'Installed:') }} {{ installed }}\n\t\t\t\t</label>\n\t\t\t</div>\n\t\t\t<button v-if=\"!installing\" @click=\"install\">\n\t\t\t\t{{ !installed ? t('mediadc', 'Install') : t('mediadc', 'Reinstall') }}\n\t\t\t</button>\n\t\t\t<button v-else disabled>\n\t\t\t\t<span class=\"icon-loading\" />\n\t\t\t</button>\n\t\t\t<button v-if=\"!checking && !installing\" @click=\"check\">\n\t\t\t\t{{ t('mediadc', 'Check installation') }}\n\t\t\t</button>\n\t\t\t<button v-else disabled>\n\t\t\t\t<span class=\"icon-loading\" />\n\t\t\t</button>\n\t\t\t<button v-if=\"installed\" @click=\"finishConfiguration\">\n\t\t\t\t{{ t('mediadc', 'Install finished') }}\n\t\t\t</button>\n\t\t</div>\n\t\t<div v-else-if=\"!isAdmin && !installed && !loading\">\n\t\t\t<p>{{ t('mediadc', 'MediaDC application can be configured only by Administrator.') }}</p>\n\t\t\t<p>{{ t('mediadc', 'Please, contact your cloud Administrator.') }}</p>\n\t\t</div>\n\t\t<div v-else>\n\t\t\t<button v-if=\"installed\" @click=\"finishConfiguration\">\n\t\t\t\t{{ t('mediadc', 'Go to Collector') }}\n\t\t\t</button>\n\t\t</div>\n\t\t<div class=\"install-details\">\n\t\t\t<div v-if=\"available_algorithms && installed\"\n\t\t\t\tclass=\"available_algorithms\"\n\t\t\t\tstyle=\"margin: 20px 0 10px;\">\n\t\t\t\t{{ t('mediadc', 'Available algorithms: ') }} {{ available_algorithms.join(', ') }}\n\t\t\t</div>\n\t\t\t<div v-if=\"installed && video_required.length > 0\">\n\t\t\t\t<strong>{{ t('mediadc', 'Video processing won\\'t work, video_required packages not installed.') }}</strong>\n\t\t\t\t<p>{{ t('mediadc', 'Not installed video_required packages:') }} {{ video_required }}</p>\n\t\t\t\t<p>{{ t('mediadc', 'video_required packages can\\'t be installed automatically, this should be done by administrator manually and then recheck installation on this page.') }}</p>\n\t\t\t</div>\n\t\t\t<div v-if=\"Object.keys(installed_list).length > 0\" class=\"dependencies-table\">\n\t\t\t\t<table>\n\t\t\t\t\t<div v-show=\"updating\" class=\"action-blackout\">\n\t\t\t\t\t\t<span class=\"icon-loading\" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<caption>{{ t('mediadc', 'Python dependecies list') }}</caption>\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th><b>{{ t('mediadc', 'Type') }}</b></th>\n\t\t\t\t\t\t\t<th><b>{{ t('mediadc', 'Packages') }}</b></th>\n\t\t\t\t\t\t\t<th><b>{{ t('mediadc', 'Installed') }}</b></th>\n\t\t\t\t\t\t\t<th><b>{{ t('mediadc', 'Actions') }}</b></th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr v-for=\"listName in Object.keys(installed_list).sort((first, second) => first > second)\" :key=\"listName\">\n\t\t\t\t\t\t\t<td>{{ listName }}</td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t<span v-for=\"(packageName, index) in Object.keys(installed_list[listName])\" :key=\"packageName\" class=\"package\">\n\t\t\t\t\t\t\t\t\t<span class=\"package-title\">\n\t\t\t\t\t\t\t\t\t\t{{ installed_list[listName][packageName].package }}{{ (index !== Object.keys(installed_list[listName]).length - 1) ? ', ' : '' }}\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t<div class=\"package-tooltip\">\n\t\t\t\t\t\t\t\t\t\t<span v-if=\"installed_list[listName][packageName].version !== 'none'\"\n\t\t\t\t\t\t\t\t\t\t\tclass=\"tooltip-content\">\n\t\t\t\t\t\t\t\t\t\t\t{{ installed_list[listName][packageName].location }}:\n\t\t\t\t\t\t\t\t\t\t\t{{ installed_list[listName][packageName].version }}\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t<span v-else class=\"tooltip-content\">\n\t\t\t\t\t\t\t\t\t\t\t{{ t('mediadc', 'Not installed') }}\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td>{{ not_installed_list[listName].length === 0 }}</td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t<button :disabled=\"Object.keys(not_installed_list[listName]).length === 0\"\n\t\t\t\t\t\t\t\t\t@click=\"installDepsList(listName)\">\n\t\t\t\t\t\t\t\t\t{{ t('mediadc', 'Install') }}\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t<button :disabled=\"Object.keys(not_installed_list[listName]).length > 0\"\n\t\t\t\t\t\t\t\t\t@click=\"updateDepsList(listName)\">\n\t\t\t\t\t\t\t\t\t{{ t('mediadc', 'Update') }}\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t<button :disabled=\"Object.keys(not_installed_list[listName]).length > 0\"\n\t\t\t\t\t\t\t\t\t@click=\"deleteDepsList(listName)\">\n\t\t\t\t\t\t\t\t\t{{ t('mediadc', 'Delete') }}\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t</div>\n\t\t</div>\n\t\t<div v-if=\"errors.length > 0\" class=\"install-errors\">\n\t\t\t<h3>\n\t\t\t\t<span class=\"icon-error\" />\n\t\t\t\t{{ t('mediadc', 'Configuration errors') }}\n\t\t\t</h3>\n\t\t\t<div class=\"errors-list\">\n\t\t\t\t<div v-for=\"error in errors\" :key=\"error\" class=\"errors-list-item\">\n\t\t\t\t\t<pre>{{ error }}</pre>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div v-if=\"warnings.length > 0\" class=\"install-warnings\">\n\t\t\t<h3>\n\t\t\t\t<span class=\"icon-alert-outline\" />\n\t\t\t\t{{ t('mediadc', 'Configuration warnings') }}\n\t\t\t</h3>\n\t\t\t<div class=\"warnings-list\">\n\t\t\t\t<div v-for=\"warning in warnings\" :key=\"warning\" class=\"warnings-list-item\">\n\t\t\t\t\t<pre>{{ warning }}</pre>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</template>\n\n<script>\nimport { getCurrentUser } from '@nextcloud/auth'\nimport Configure from '../mixins/Configure'\n\nexport default {\n\tname: 'Configuration',\n\tmixins: [\n\t\tConfigure,\n\t],\n\tprops: {\n\t\trootTitle: {\n\t\t\ttype: String,\n\t\t\trequired: true,\n\t\t},\n\t\tloading: {\n\t\t\ttype: Boolean,\n\t\t\trequired: true,\n\t\t},\n\t},\n\tdata() {\n\t\treturn {\n\t\t\tisAdmin: getCurrentUser() === null ? false : getCurrentUser().isAdmin,\n\t\t}\n\t},\n}\n<\/script>\n\n<style scoped>\n.mediadc-configuration {\n\tpadding: 20px;\n\ttext-align: center;\n}\n\na {\n\ttext-decoration: underline;\n}\n\n.installed {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n}\n\n.installed input {\n\tmargin: 0 10px;\n}\n\n.dependencies-table {\n\twidth: 100%;\n\toverflow-x: scroll;\n\tmargin: 20px auto;\n}\n\n.dependencies-table table {\n\tmargin: 0 auto;\n\tposition: relative;\n}\n\n.dependencies-table table caption {\n\tpadding: 5px 10px;\n\tborder-bottom: 1px solid #dadada;\n}\n\n.dependencies-table table th, .dependencies-table table td {\n\tpadding: 5px 10px;\n\tborder-bottom: 1px solid #dadada;\n\tborder-right: 1px solid #dadada;\n}\n\n.dependencies-table table th:last-child, .dependencies-table table td:last-child {\n\tborder-right: none;\n}\n\n.package {\n\tposition: relative;\n}\n\n.package-tooltip {\n\tdisplay: none;\n\tpadding: 0 5px;\n\tborder-radius: 5px;\n\tbackground-color: #000;\n\tcolor: #fff;\n\tposition: absolute;\n\ttop: calc(-100% - 5px);\n\tleft: 50%;\n\ttransform: translateX(-50%);\n\tfont-size: 12px;\n\tbox-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);\n}\n\n.package-tooltip:before {\n\tcontent: '';\n\tposition: absolute;\n\tleft: 50%;\n\ttransform: translateX(-50%) rotateZ(45deg);\n\tbottom: -3px;\n\twidth: 10px;\n\theight: 10px;\n\tbackground-color: #000;\n\tz-index: -1;\n}\n\n.package:hover .package-tooltip {\n\tdisplay: block;\n}\n\n.action-blackout {\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\tright: 0;\n\tbottom: 0;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tbackground-color: rgba(0, 0, 0, 0.3);\n\tz-index: 10;\n\tborder-radius: 10px;\n}\n\n.install-errors {\n\tmax-height: 50vh;\n\toverflow-y: scroll;\n\tborder: 1px solid #ff3333;\n\tborder-radius: 5px;\n\tpadding: 0 10px 10px;\n\tmargin: 10px auto;\n}\n\n.errors-list-item {\n\tborder-bottom: 1px solid #ffcccc;\n\tpadding: 5px;\n\ttext-align-last: left;\n}\n\n.install-warnings {\n\tmax-height: 50vh;\n\toverflow-y: scroll;\n\tborder: 1px solid #ffc629;\n\tborder-radius: 5px;\n\tpadding: 0 10px 10px;\n\tmargin: 10px auto;\n}\n\n.warnings-list-item {\n\tborder-bottom: 1px solid #f7ffcc;\n\tpadding: 5px;\n\ttext-align-last: left;\n}\n</style>\n"],sourceRoot:""}]);const s=a},32025:(t,n,e)=>{e.r(n),e.d(n,{default:()=>r});var i=e(22200);const a={name:"Configuration",mixins:[e(96679).Z],props:{rootTitle:{type:String,required:!0},loading:{type:Boolean,required:!0}},data:function(){return{isAdmin:null!==(0,i.getCurrentUser)()&&(0,i.getCurrentUser)().isAdmin}}};var s=e(93379),l=e.n(s),d=e(41575),o={insert:"head",singleton:!1};l()(d.Z,o);d.Z.locals;const r=(0,e(51900).Z)(a,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.loading?t._e():e("div",{staticClass:"mediadc-configuration"},[e("h2",[t._v(t._s(t.rootTitle))]),t._v(" "),t.isAdmin?e("div",{staticClass:"configuration"},[e("p",[t._v("\n\t\t\t"+t._s(t.t("mediadc","Welcome to MediaDC. You almost there! The last setup step - installation of Python dependencies."))+"\n\t\t\t"),e("br"),t._v("\n\t\t\t"+t._s(t.t("mediadc","Here you can run automatic installation of Python MediaDC dependencies."))+"\n\t\t\t"),e("br"),t._v("\n\t\t\t"+t._s(t.t("mediadc","This may take a few minutes (regarding on your system config)."))+"\n\t\t\t"),e("br"),t._v("\n\t\t\t"+t._s(t.t("mediadc","After checking or installing you can see the results below in a detailed table (installed packages, errors, requirements overview)."))+"\n\t\t\t"),e("br"),t._v("\n\t\t\t"+t._s(t.t("mediadc","You can install all dependencies with hands, please refer documentation for your OS how to do this:"))+"\n\t\t\t"),e("a",{attrs:{href:"https://github.com/andrey18106/mediadc/wiki"}},[t._v(t._s(t.t("mediadc","wikis")))]),t._v(".\n\t\t\t"),e("br"),t._v("\n\t\t\t"+t._s(t.t("mediadc","If you have any additional questions contact us in"))+" "),e("a",{attrs:{href:"https://t.me/mediadc_support"}},[t._v(t._s(t.t("mediadc","Telegram chat")))]),t._v(".\n\t\t")]),t._v(" "),e("div",{staticClass:"installed"},[e("input",{attrs:{id:"installed",type:"checkbox",name:"installed","v-model":t.installed,disabled:""},domProps:{checked:t.installed}}),t._v(" "),e("label",{attrs:{for:"installed"}},[t._v("\n\t\t\t\t"+t._s(t.t("mediadc","Installed:"))+" "+t._s(t.installed)+"\n\t\t\t")])]),t._v(" "),t.installing?e("button",{attrs:{disabled:""}},[e("span",{staticClass:"icon-loading"})]):e("button",{on:{click:t.install}},[t._v("\n\t\t\t"+t._s(t.installed?t.t("mediadc","Reinstall"):t.t("mediadc","Install"))+"\n\t\t")]),t._v(" "),t.checking||t.installing?e("button",{attrs:{disabled:""}},[e("span",{staticClass:"icon-loading"})]):e("button",{on:{click:t.check}},[t._v("\n\t\t\t"+t._s(t.t("mediadc","Check installation"))+"\n\t\t")]),t._v(" "),t.installed?e("button",{on:{click:t.finishConfiguration}},[t._v("\n\t\t\t"+t._s(t.t("mediadc","Install finished"))+"\n\t\t")]):t._e()]):t.isAdmin||t.installed||t.loading?e("div",[t.installed?e("button",{on:{click:t.finishConfiguration}},[t._v("\n\t\t\t"+t._s(t.t("mediadc","Go to Collector"))+"\n\t\t")]):t._e()]):e("div",[e("p",[t._v(t._s(t.t("mediadc","MediaDC application can be configured only by Administrator.")))]),t._v(" "),e("p",[t._v(t._s(t.t("mediadc","Please, contact your cloud Administrator.")))])]),t._v(" "),e("div",{staticClass:"install-details"},[t.available_algorithms&&t.installed?e("div",{staticClass:"available_algorithms",staticStyle:{margin:"20px 0 10px"}},[t._v("\n\t\t\t"+t._s(t.t("mediadc","Available algorithms: "))+" "+t._s(t.available_algorithms.join(", "))+"\n\t\t")]):t._e(),t._v(" "),t.installed&&t.video_required.length>0?e("div",[e("strong",[t._v(t._s(t.t("mediadc","Video processing won't work, video_required packages not installed.")))]),t._v(" "),e("p",[t._v(t._s(t.t("mediadc","Not installed video_required packages:"))+" "+t._s(t.video_required))]),t._v(" "),e("p",[t._v(t._s(t.t("mediadc","video_required packages can't be installed automatically, this should be done by administrator manually and then recheck installation on this page.")))])]):t._e(),t._v(" "),Object.keys(t.installed_list).length>0?e("div",{staticClass:"dependencies-table"},[e("table",[e("div",{directives:[{name:"show",rawName:"v-show",value:t.updating,expression:"updating"}],staticClass:"action-blackout"},[e("span",{staticClass:"icon-loading"})]),t._v(" "),e("caption",[t._v(t._s(t.t("mediadc","Python dependecies list")))]),t._v(" "),e("thead",[e("tr",[e("th",[e("b",[t._v(t._s(t.t("mediadc","Type")))])]),t._v(" "),e("th",[e("b",[t._v(t._s(t.t("mediadc","Packages")))])]),t._v(" "),e("th",[e("b",[t._v(t._s(t.t("mediadc","Installed")))])]),t._v(" "),e("th",[e("b",[t._v(t._s(t.t("mediadc","Actions")))])])])]),t._v(" "),e("tbody",t._l(Object.keys(t.installed_list).sort((function(t,n){return t>n})),(function(n){return e("tr",{key:n},[e("td",[t._v(t._s(n))]),t._v(" "),e("td",t._l(Object.keys(t.installed_list[n]),(function(i,a){return e("span",{key:i,staticClass:"package"},[e("span",{staticClass:"package-title"},[t._v("\n\t\t\t\t\t\t\t\t\t"+t._s(t.installed_list[n][i].package)+t._s(a!==Object.keys(t.installed_list[n]).length-1?", ":"")+"\n\t\t\t\t\t\t\t\t")]),t._v(" "),e("div",{staticClass:"package-tooltip"},["none"!==t.installed_list[n][i].version?e("span",{staticClass:"tooltip-content"},[t._v("\n\t\t\t\t\t\t\t\t\t\t"+t._s(t.installed_list[n][i].location)+":\n\t\t\t\t\t\t\t\t\t\t"+t._s(t.installed_list[n][i].version)+"\n\t\t\t\t\t\t\t\t\t")]):e("span",{staticClass:"tooltip-content"},[t._v("\n\t\t\t\t\t\t\t\t\t\t"+t._s(t.t("mediadc","Not installed"))+"\n\t\t\t\t\t\t\t\t\t")])])])})),0),t._v(" "),e("td",[t._v(t._s(0===t.not_installed_list[n].length))]),t._v(" "),e("td",[e("button",{attrs:{disabled:0===Object.keys(t.not_installed_list[n]).length},on:{click:function(e){return t.installDepsList(n)}}},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(t.t("mediadc","Install"))+"\n\t\t\t\t\t\t\t")]),t._v(" "),e("button",{attrs:{disabled:Object.keys(t.not_installed_list[n]).length>0},on:{click:function(e){return t.updateDepsList(n)}}},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(t.t("mediadc","Update"))+"\n\t\t\t\t\t\t\t")]),t._v(" "),e("button",{attrs:{disabled:Object.keys(t.not_installed_list[n]).length>0},on:{click:function(e){return t.deleteDepsList(n)}}},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(t.t("mediadc","Delete"))+"\n\t\t\t\t\t\t\t")])])])})),0)])]):t._e()]),t._v(" "),t.errors.length>0?e("div",{staticClass:"install-errors"},[e("h3",[e("span",{staticClass:"icon-error"}),t._v("\n\t\t\t"+t._s(t.t("mediadc","Configuration errors"))+"\n\t\t")]),t._v(" "),e("div",{staticClass:"errors-list"},t._l(t.errors,(function(n){return e("div",{key:n,staticClass:"errors-list-item"},[e("pre",[t._v(t._s(n))])])})),0)]):t._e(),t._v(" "),t.warnings.length>0?e("div",{staticClass:"install-warnings"},[e("h3",[e("span",{staticClass:"icon-alert-outline"}),t._v("\n\t\t\t"+t._s(t.t("mediadc","Configuration warnings"))+"\n\t\t")]),t._v(" "),e("div",{staticClass:"warnings-list"},t._l(t.warnings,(function(n){return e("div",{key:n,staticClass:"warnings-list-item"},[e("pre",[t._v(t._s(n))])])})),0)]):t._e()])}),[],!1,null,"50e2e8b1",null).exports}}]);
//# sourceMappingURL=mediadc-src_views_Configuration_vue.js.map?v=6b92036402be78931600