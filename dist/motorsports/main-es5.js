(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/admin.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/admin.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <!-- Sidebar  -->\n  <nav id=\"sidebar\">\n    <div class=\"sidebar-header\">\n      <!-- <img src=\"../assets/vserve.png\" alt=\"\" class=\"img-fluid\" width=\"90px\"> <br> -->\n      <span style=\"font-size: 16px; letter-spacing: 3px;\">Motorsports</span>\n    </div>\n\n    <ul class=\"list-unstyled components\">\n      <li>\n        <a [routerLink]=\"['/admin/dashboard']\" routerLinkActive=\"router-link-active\"><img src=\"../assets/dashboard.png\"\n            class=\"mr-3\" width=\"20\" alt=\"\"> Dashboard</a>\n      </li>\n      <li>\n        <a [routerLink]=\"['/admin/news']\" routerLinkActive=\"router-link-active\"><img src=\"../../assets/news.png\"\n            class=\"mr-3\" width=\"20\" alt=\"\"> News</a>\n      </li>\n      <li>\n        <a [routerLink]=\"['/admin/series']\" routerLinkActive=\"router-link-active\"><img src=\"../../assets/series_logo.png\"\n            class=\"mr-3\" width=\"20\" alt=\"\"> Series</a>\n      </li>\n      <li>\n        <a [routerLink]=\"['/admin/author']\" routerLinkActive=\"router-link-active\"><img src=\"../../assets/author.png\"\n            class=\"mr-3\" width=\"20\" alt=\"\"> Publisher</a>\n      </li>\n      <li>\n        <a [routerLink]=\"['/admin/vidoes']\" routerLinkActive=\"router-link-active\"><img src=\"../../assets/play-button.png\"\n            class=\"mr-3\" width=\"20\" alt=\"\"> Videos</a>\n      </li>\n      <li>\n        <a [routerLink]=\"['/admin/audios']\" routerLinkActive=\"router-link-active\"><img src=\"../../assets/audio.png\"\n            class=\"mr-3\" width=\"20\" alt=\"\"> Audios</a>\n      </li>\n      <li>\n        <a [routerLink]=\"['/admin/drivers']\" routerLinkActive=\"router-link-active\"><img src=\"../../assets/drivers.png\"\n            class=\"mr-3\" width=\"20\" alt=\"\"> Drivers/Events/Team</a>\n      </li>\n      <li>\n        <a href=\"#homeSubmenu\" data-toggle=\"collapse\" aria-expanded=\"false\" class=\"dropdown-toggle\"><img src=\"../../assets/tiles.png\"\n            class=\"mr-3\" width=\"20\" alt=\"\"> Tiles</a>\n        <ul class=\"collapse list-unstyled\" id=\"homeSubmenu\">\n          <li>\n            <a [routerLink]=\"['/admin/vidoes-tiles']\" routerLinkActive=\"router-link-active\">Videos</a>\n          </li>\n          <li>\n            <a [routerLink]=\"['/admin/audio-tiles']\" routerLinkActive=\"router-link-active\">Audios</a>\n          </li>\n        </ul>\n      </li>\n    </ul>\n\n    <ul class=\"list-unstyled CTAs\">\n      <button type=\"button\" class=\"btn btn-outline-light\" (click)=\"logout()\">Logout</button>\n    </ul>\n  </nav>\n\n  <!-- Page Content  -->\n  <div id=\"content\">\n\n    <!-- <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n      <div class=\"container-fluid\">\n\n        <button type=\"button\" id=\"sidebarCollapse\" class=\"btn btn-info\">\n          <i class=\"fas fa-align-left\"></i>\n        </button>\n        <h4><img src=\"../assets/vserve.png\" alt=\"\" class=\"img-fluid\" width=\"50px\"></h4>\n      </div>\n    </nav> -->\n\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/audios/audios.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/audios/audios.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-toast></p-toast>\n<div class=\"row\">\n  <h4 class=\"mb-5\"><img src=\"../../../assets/audio.png\" width=\"40\" alt=\"motorsports_news\"> Motorsports360 Audios\n  </h4>\n</div>\n<div class=\"row mb-3\" [hidden]=\"addBtn === false\">\n  <button nz-button nzType=\"primary\" (click)=\"addBtnClicked()\" nzShape=\"round\"><i nz-icon nzType=\"plus\"></i> Add\n    Audio</button>\n</div>\n\n<div class=\"addNewsForm mb-5\" [hidden]=\"showAddNewsForm === false\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <h5>Please enter all the information before publish. <small class=\"text-muted\">( *all fields are mandatory !\n          )</small> </h5>\n      <hr class=\"mb-4\">\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <nz-tooltip nzTrigger=\"focus\" nzPlacement=\"bottom\" [nzTitle]=\"headlineTitle\">\n        <label for=\"\">Title</label>\n        <input nz-input nz-tooltip placeholder=\"title\" style=\"width: 100%\" [(ngModel)]=\"audioHeadline\"\n          (ngModelChange)=\"onHeadlineChange($event)\" />\n      </nz-tooltip>\n    </div>\n    <div class=\"col-md-4\">\n      <label>Audio URL</label>\n      <input nz-input nz-tooltip placeholder=\"url\" style=\"width: 100%\" [(ngModel)]=\"audioUrl\" />\n    </div>\n    <div class=\"col-md-4\">\n      <label>Image URL</label>\n      <input nz-input nz-tooltip placeholder=\"url\" style=\"width: 100%\" [(ngModel)]=\"audioImageUrl\" />\n    </div>\n  </div>\n\n  <div class=\"row my-3\">\n    <div class=\"col-md-2\">\n      <label>DATE</label>\n      <nz-date-picker style=\"width: 100%;\" [(ngModel)]=\"audioDate\"></nz-date-picker>\n    </div>\n    <div class=\"col-md-3\">\n      <label>TIME</label>\n      <nz-time-picker style=\"width: 100%;\" [(ngModel)]=\"audioTime\" [nzUse12Hours]=\"true\" nzFormat=\"h:mm a\">\n      </nz-time-picker>\n    </div>\n    <div class=\"col-md-3\">\n      <label>SERIES</label>\n      <nz-select style=\"width: 100%;\" nzShowSearch nzAllowClear nzPlaceHolder=\"Select a series\" [(ngModel)]=\"seriesID\">\n        <nz-option *ngFor=\"let series of seriesIDs\" [nzLabel]=\"series.name\" [nzValue]=\"series.id\"></nz-option>\n      </nz-select>\n    </div>\n    <div class=\"col-md-3\">\n      <label>AUTHOR</label>\n      <!-- <input nz-input nz-tooltip placeholder=\"Author\" style=\"width: 100%\" [(ngModel)]=\"newsAuthor\" /> -->\n      <nz-select style=\"width: 100%;\" nzShowSearch nzAllowClear nzPlaceHolder=\"Select author\" [(ngModel)]=\"audioAuthor\">\n        <nz-option *ngFor=\"let author of authorsIDs\" [nzLabel]=\"author.name\" [nzValue]=\"author.id\"></nz-option>\n      </nz-select>\n    </div>\n  </div>\n   <div class=\"row\">\n    <div class=\"col-md-10\">\n      <nz-tooltip nzTrigger=\"focus\" nzPlacement=\"bottom\" [nzTitle]=\"descriptionTitle\">\n        <label for=\"\">DESCRIPTION</label>\n        <textarea rows=\"3\" nz-input nz-tooltip placeholder=\"Description\" style=\"width: 100%\"\n          [(ngModel)]=\"audioDescription\" (ngModelChange)=\"onDescriptionChange($event)\"></textarea>\n      </nz-tooltip>\n    </div>\n  </div>\n  <div class=\"row mt-3\">\n    <div class=\"col-md-6\">\n      <button nz-button nzType=\"dashed\" (click)=\"addNewsCancel()\" class=\"mr-3\">Cancel</button>\n      <button nz-button nzType=\"primary\" (click)=\"publishAudio()\" [nzLoading]=\"isLoadingTwo\">\n        <i nz-icon type=\"plus\"></i>Publish\n      </button>\n    </div>\n  </div>\n</div>\n\n<nz-spin [nzSpinning]=\"isSpinning\">\n  <div class=\"row\">\n    <ng2-smart-table class=\"table table-responsive\" (deleteConfirm)=\"onDeleteConfirm($event)\" (edit)=\"onEditRow($event)\"\n      (editConfirm)=\"onSaveConfirm($event)\" [settings]=\"settings\" [source]=\"data\">\n    </ng2-smart-table>\n  </div>\n</nz-spin>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/author/author.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/author/author.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-toast></p-toast>\n<div class=\"row\">\n  <h4 class=\"mb-5\"><img src=\"../../../assets/author.png\" width=\"40\" alt=\"motorsports\"> Motorsports360 Publisher</h4>\n</div>\n<div class=\"row mb-3\" [hidden]=\"addBtn === false\">\n  <button nz-button nzType=\"primary\" (click)=\"addBtnClicked()\" nzShape=\"round\"><i nz-icon nzType=\"plus\"></i> Add\n    Publisher</button>\n</div>\n\n<div class=\"addNewsForm mb-5\" [hidden]=\"showAddSeriesForm === false\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <h5>Please enter all the information before publish. <small class=\"text-muted\">( *all fields are mandatory\n          !)</small> </h5>\n      <hr class=\"mb-4\">\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <label for=\"\">NAME</label>\n      <input nz-input nz-tooltip placeholder=\"Name\" style=\"width: 100%\" [(ngModel)]=\"name\" />\n    </div>\n  </div>\n\n  <div class=\"row mt-3\">\n    <div class=\"col-md-6\">\n      <nz-upload class=\"avatar-uploader\" nzName=\"avatar\" nzListType=\"picture-card\" [nzShowUploadList]=\"false\"\n        (nzChange)=\"handleChange($event)\">\n        <ng-container *ngIf=\"!avatarUrl\">\n          <i class=\"upload-icon\" nz-icon [nzType]=\"loading ? 'loading' : 'plus'\"></i>\n          <div class=\"ant-upload-text\">Upload</div>\n        </ng-container>\n        <img *ngIf=\"avatarUrl\" [src]=\"avatarUrl\" class=\"avatar\" />\n      </nz-upload>\n    </div>\n  </div>\n\n  <div class=\"row mt-3\">\n    <div class=\"col-md-6\">\n      <button nz-button nzType=\"dashed\" (click)=\"addNewsCancel()\" class=\"mr-3\">Cancel</button>\n      <button nz-button nzType=\"primary\" (click)=\"publishAuthor()\" [nzLoading]=\"isLoadingTwo\">\n        <i nz-icon type=\"plus\"></i>Publish\n      </button>\n    </div>\n  </div>\n</div>\n\n<nz-spin [nzSpinning]=\"isSpinning\">\n  <div class=\"row\">\n    <ng2-smart-table class=\"table table-responsive\" (delete)=\"authorDelete($event)\" (edit)=\"onEditRow($event)\"\n      (edit)=\"onEditRow($event)\" (custom)=\"customAction($event)\" [settings]=\"settings\" [source]=\"data\">\n    </ng2-smart-table>\n  </div>\n</nz-spin>\n\n\n<nz-modal [(nzVisible)]=\"isVisible\" nzTitle=\"EDIT AUTHOR\" (nzOnCancel)=\"handleCancel()\" (nzOnOk)=\"handleOk()\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <p><b>ID:</b> {{authorID}}</p>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <label for=\"\">NAME</label>\n      <input nz-input nz-tooltip placeholder=\"Name\" style=\"width: 100%\" [(ngModel)]=\"name\" />\n    </div>\n  </div>\n\n  <div class=\"row mt-3\">\n    <div class=\"col-md-6\">\n      <nz-upload class=\"avatar-uploader\" nzName=\"avatar\" nzListType=\"picture-card\" [nzShowUploadList]=\"false\"\n        (nzChange)=\"handleChange($event)\">\n        <ng-container *ngIf=\"!avatarUrl\">\n          <i class=\"upload-icon\" nz-icon [nzType]=\"loading ? 'loading' : 'plus'\"></i>\n          <div class=\"ant-upload-text\">Upload</div>\n        </ng-container>\n        <img *ngIf=\"avatarUrl\" [src]=\"avatarUrl\" class=\"avatar\" />\n      </nz-upload>\n    </div>\n  </div>\n</nz-modal>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/dashboard/dashboard.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/dashboard/dashboard.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <h4 class=\"mb-5\"><img src=\"../../../assets/dashboard.png\" width=\"30\" alt=\"motorsports_news\"> Motorsports360 Dashboard</h4>\n</div>\n\n<div class=\"dashboardInfo mb-5\">\n  <nz-descriptions nzTitle=\"INFORMATION\">\n    <nz-descriptions-item nzTitle=\"Total Users\">167</nz-descriptions-item>\n    <nz-descriptions-item nzTitle=\"Users Online\">53</nz-descriptions-item>\n    <nz-descriptions-item nzTitle=\"News Published\">356</nz-descriptions-item>\n    <nz-descriptions-item nzTitle=\"Trending News\">\n      <a href=\"https://www.supercars.com/news/championship/mclaughlin-impresses-in-karting-cameo/\">McLaughlin impresses in karting cameo</a>\n    </nz-descriptions-item>\n    <nz-descriptions-item nzTitle=\"Trending Video\">\n      <a href=\"http://youtube.com/watch?v=WTmX420cb7A\">The Evolution of Formula 1 | Race 1000</a>\n    </nz-descriptions-item>\n  </nz-descriptions>\n</div>\n\n\n<div class=\"trandingNewsCards\">\n  <h5><img src=\"../../../assets/popular.png\" width=\"28\" alt=\"tranding_news\"> TRENDING NEWS</h5>\n  <nz-card style=\"width: 100%;margin-top: 16px\" [nzLoading]=\"loading\">\n    <nz-list [nzDataSource]=\"data\" [nzItemLayout]=\"'vertical'\" [nzRenderItem]=\"item\">\n      <ng-template #item let-item>\n        <nz-list-item [nzExtra]=\"extra\">\n          <nz-list-item-meta [nzAvatar]=\"item.image_url\" [nzTitle]=\"nzTitle\" [nzDescription]=\"item.description\">\n            <ng-template #nzTitle><a href=\"{{ item.news_url }}\">{{ item.title }}</a></ng-template>\n          </nz-list-item-meta>\n          <ng-template #extra>\n            <img width=\"100\" alt=\"newsImg\" [src]=\"item.image_url\" style=\"border-radius: 5px\" />\n            <p class=\"mt-2\">Published on {{item.news_date}} {{item.news_time}}</p>\n          </ng-template>\n        </nz-list-item>\n      </ng-template>\n    </nz-list>\n  </nz-card>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/drivers/drivers.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/drivers/drivers.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-toast></p-toast>\n<div class=\"row\">\n  <h4><img src=\"../../../assets/drivers.png\" width=\"40\" alt=\"motorsports\"> Motorsports360 Drivers/Events/Teams</h4>\n</div>\n\n<div class=\"my-5 bannerAvatarWrap\">\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <label for=\"\">Driver Banner Image</label>\n      <nz-upload class=\"avatar-uploader\" nzName=\"avatar\" nzListType=\"picture-card\" [nzShowUploadList]=\"false\"\n        (nzChange)=\"driverAvatarChange($event)\">\n        <ng-container *ngIf=\"!driverAvatarUrl\">\n          <i class=\"upload-icon\" nz-icon [nzType]=\"loading ? 'loading' : 'plus'\"></i>\n          <div class=\"ant-upload-text\">Upload</div>\n        </ng-container>\n        <img *ngIf=\"driverAvatarUrl\" [src]=\"driverAvatarUrl\" class=\"avatar\" />\n      </nz-upload>\n    </div>\n\n    <div class=\"col-md-4\">\n      <label for=\"\">Team Banner Image</label>\n      <nz-upload class=\"avatar-uploader\" nzName=\"avatar\" nzListType=\"picture-card\" [nzShowUploadList]=\"false\"\n        (nzChange)=\"teamAvatarChange($event)\">\n        <ng-container *ngIf=\"!teamAvatarUrl\">\n          <i class=\"upload-icon\" nz-icon [nzType]=\"loading ? 'loading' : 'plus'\"></i>\n          <div class=\"ant-upload-text\">Upload</div>\n        </ng-container>\n        <img *ngIf=\"teamAvatarUrl\" [src]=\"teamAvatarUrl\" class=\"avatar\" />\n      </nz-upload>\n    </div>\n\n    <div class=\"col-md-4\">\n      <label for=\"\">Event Banner Image</label>\n      <nz-upload class=\"avatar-uploader\" nzName=\"avatar\" nzListType=\"picture-card\" [nzShowUploadList]=\"false\"\n        (nzChange)=\"eventAvatarChange($event)\">\n        <ng-container *ngIf=\"!eventAvatarUrl\">\n          <i class=\"upload-icon\" nz-icon [nzType]=\"loading ? 'loading' : 'plus'\"></i>\n          <div class=\"ant-upload-text\">Upload</div>\n        </ng-container>\n        <img *ngIf=\"eventAvatarUrl\" [src]=\"eventAvatarUrl\" class=\"avatar\" />\n      </nz-upload>\n    </div>\n  </div>\n\n  <div class=\"row mt-4\">\n    <div class=\"col-md-4\">\n      <label for=\"\">Leader Banner Image</label>\n      <nz-upload class=\"avatar-uploader\" nzName=\"avatar\" nzListType=\"picture-card\" [nzShowUploadList]=\"false\"\n        (nzChange)=\"leaderAvatarChange($event)\">\n        <ng-container *ngIf=\"!leaderAvatarUrl\">\n          <i class=\"upload-icon\" nz-icon [nzType]=\"loading ? 'loading' : 'plus'\"></i>\n          <div class=\"ant-upload-text\">Upload</div>\n        </ng-container>\n        <img *ngIf=\"leaderAvatarUrl\" [src]=\"leaderAvatarUrl\" class=\"avatar\" />\n      </nz-upload>\n    </div>\n\n    <div class=\"col-md-4\">\n      <label for=\"\">My Series Banner Image</label>\n      <nz-upload class=\"avatar-uploader\" nzName=\"avatar\" nzListType=\"picture-card\" [nzShowUploadList]=\"false\"\n        (nzChange)=\"seriesAvatarChange($event)\">\n        <ng-container *ngIf=\"!seriesAvatarUrl\">\n          <i class=\"upload-icon\" nz-icon [nzType]=\"loading ? 'loading' : 'plus'\"></i>\n          <div class=\"ant-upload-text\">Upload</div>\n        </ng-container>\n        <img *ngIf=\"seriesAvatarUrl\" [src]=\"seriesAvatarUrl\" class=\"avatar\" />\n      </nz-upload>\n    </div>\n\n    <div class=\"col-md-4\">\n      <label for=\"\">Saved Stories Banner Image</label>\n      <nz-upload class=\"avatar-uploader\" nzName=\"avatar\" nzListType=\"picture-card\" [nzShowUploadList]=\"false\"\n        (nzChange)=\"savedStoriesAvatarChange($event)\">\n        <ng-container *ngIf=\"!savedStoriesAvatarUrl\">\n          <i class=\"upload-icon\" nz-icon [nzType]=\"loading ? 'loading' : 'plus'\"></i>\n          <div class=\"ant-upload-text\">Upload</div>\n        </ng-container>\n        <img *ngIf=\"savedStoriesAvatarUrl\" [src]=\"savedStoriesAvatarUrl\" class=\"avatar\" />\n      </nz-upload>\n    </div>\n  </div>\n</div>\n\n\n<nz-spin [nzSpinning]=\"isSpinning\">\n  <div class=\"row\">\n    <ng2-smart-table class=\"table table-responsive\"\n        (editConfirm)=\"onSaveConfirm($event)\"\n       [settings]=\"settings\" [source]=\"data\">\n    </ng2-smart-table>\n  </div>\n</nz-spin>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/extra-component/checkbox-component/checkbox-component.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/extra-component/checkbox-component/checkbox-component.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  checkbox-component works!\n</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/news/news.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/news/news.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-toast></p-toast>\n<div class=\"row\">\n  <h4 class=\"mb-5\"><img src=\"../../../assets/news.png\" width=\"40\" alt=\"motorsports_news\"> Motorsports360 News</h4>\n</div>\n<div class=\"row mb-3\" [hidden]=\"addBtn === false\">\n  <button nz-button nzType=\"primary\" (click)=\"addBtnClicked()\" nzShape=\"round\"><i nz-icon nzType=\"plus\"></i> Add News</button>\n</div>\n\n<div class=\"addNewsForm mb-5\" [hidden]=\"showAddNewsForm === false\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <h5>Please enter all the information before publish. <small class=\"text-muted\">( *all fields are mandatory ! )</small> </h5>\n      <hr class=\"mb-4\">\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <nz-tooltip nzTrigger=\"focus\" nzPlacement=\"bottom\" [nzTitle]=\"headlineTitle\">\n        <label for=\"\">HEADLINE</label>\n        <input nz-input nz-tooltip placeholder=\"Headline\" style=\"width: 100%\" [(ngModel)]=\"newsHeadline\"\n          (ngModelChange)=\"onHeadlineChange($event)\" />\n      </nz-tooltip>\n    </div>\n    <div class=\"col-md-3\">\n      <label>AUTHOR</label>\n      <!-- <input nz-input nz-tooltip placeholder=\"Author\" style=\"width: 100%\" [(ngModel)]=\"newsAuthor\" /> -->\n      <nz-select style=\"width: 100%;\" nzShowSearch nzAllowClear nzPlaceHolder=\"Select author\" [(ngModel)]=\"newsAuthor\">\n        <nz-option *ngFor=\"let author of authorsIDs\" [nzLabel]=\"author.name\" [nzValue]=\"author.id\"></nz-option>\n      </nz-select>\n    </div>\n    <div class=\"col-md-2\">\n      <label>NEWS DATE</label>\n      <!-- <input nz-input nz-tooltip placeholder=\"Date\" style=\"width: 100%\" [(ngModel)]=\"newsDate\" /> -->\n      <nz-date-picker [(ngModel)]=\"newsDate\"></nz-date-picker>\n    </div>\n    <div class=\"col-md-2\">\n      <label>NEWS TIME</label>\n      <!-- <input nz-input nz-tooltip placeholder=\"Time\"  style=\"width: 100%\" [(ngModel)]=\"newsTime\" /> -->\n      <nz-time-picker [(ngModel)]=\"newsTime\" [nzUse12Hours]=\"true\" nzFormat=\"h:mm a\"></nz-time-picker>\n    </div>\n  </div>\n\n  <div class=\"row my-3\">\n    <div class=\"col-md-4\">\n        <label for=\"\">IMAGE URL</label>\n        <input nz-input placeholder=\"url\" style=\"width: 100%\" [(ngModel)]=\"newsImgUrl\"/>\n    </div>\n    <div class=\"col-md-3\">\n      <label>NEWS URL</label>\n      <input nz-input placeholder=\"url\" style=\"width: 100%\" [(ngModel)]=\"newsUrl\" />\n    </div>\n    <div class=\"col-md-4\">\n      <label>SERIES</label>\n      <!-- <input nz-input placeholder=\"Series ID\" style=\"width: 100%\" [(ngModel)]=\"newsSeriesID\" /> -->\n      <nz-select style=\"width: 100%;\" nzShowSearch nzAllowClear nzPlaceHolder=\"Select a series\" [(ngModel)]=\"newsSeriesID\">\n        <nz-option *ngFor=\"let series of seriesIDs\" [nzLabel]=\"series.name\" [nzValue]=\"series.id\"></nz-option>\n      </nz-select>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-10\">\n      <nz-tooltip nzTrigger=\"focus\" nzPlacement=\"bottom\" [nzTitle]=\"descriptionTitle\">\n        <label for=\"\">DESCRIPTION</label>\n        <textarea rows=\"3\" nz-input nz-tooltip placeholder=\"Description\" style=\"width: 100%\" [(ngModel)]=\"newsDescription\"\n          (ngModelChange)=\"onDescriptionChange($event)\"></textarea>\n      </nz-tooltip>\n    </div>\n  </div>\n  <div class=\"row mt-3\">\n    <div class=\"col-md-6\">\n      <button nz-button nzType=\"dashed\" (click)=\"addNewsCancel()\" class=\"mr-3\">Cancel</button>\n      <button nz-button nzType=\"primary\" (click)=\"publishNews()\" [nzLoading]=\"isLoadingTwo\">\n        <i nz-icon type=\"plus\"></i>Publish\n      </button>\n    </div>\n  </div>\n</div>\n\n<!-- <div class=\"row mb-2\">\n  <nz-select style=\"width: 20%\" nzShowSearch nzPlaceHolder=\"\" [(ngModel)]=\"rowCount\">\n    <nz-option *ngFor=\"let number of dataRow\" [nzLabel]=\"number.rowCounts\" [nzValue]=\"number.rowCounts\"></nz-option>\n  </nz-select>\n</div> -->\n<nz-spin [nzSpinning]=\"isSpinning\">\n  <div class=\"row\">\n    <ng2-smart-table class=\"table table-responsive\" (deleteConfirm)=\"onDeleteConfirm($event)\" (edit)=\"onEditRow($event)\"\n      (editConfirm)=\"onSaveConfirm($event)\" (custom)=\"customAction($event)\" [settings]=\"settings\" [source]=\"data\">\n    </ng2-smart-table>\n  </div>\n</nz-spin>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/series/series.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/series/series.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-toast></p-toast>\n<div class=\"row\">\n  <h4 class=\"mb-5\"><img src=\"../../../assets/series_logo.png\" width=\"40\" alt=\"motorsports\"> Motorsports360 Series</h4>\n</div>\n<div class=\"row mb-3\" [hidden]=\"addBtn === false\">\n  <button nz-button nzType=\"primary\" (click)=\"addBtnClicked()\" nzShape=\"round\"><i nz-icon nzType=\"plus\"></i> Add\n    Series</button>\n</div>\n\n<div class=\"addNewsForm mb-5\" [hidden]=\"showAddSeriesForm === false\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <h5>Please enter all the information before publish. <small class=\"text-muted\">( *all fields are mandatory !)</small> </h5>\n      <hr class=\"mb-4\">\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n        <label for=\"\">NAME</label>\n        <input nz-input nz-tooltip placeholder=\"Name\" style=\"width: 100%\" [(ngModel)]=\"name\" />\n    </div>\n    <div class=\"col-md-6\">\n      <label for=\"\">Team Url</label>\n      <input nz-input nz-tooltip placeholder=\"Team url\" style=\"width: 100%\" [(ngModel)]=\"team_url\" />\n    </div>\n  </div>\n\n  <div class=\"row mt-3\">\n    <div class=\"col-md-6\">\n      <label for=\"\">Event url</label>\n      <input nz-input nz-tooltip placeholder=\"Event url\" style=\"width: 100%\" [(ngModel)]=\"event_url\" />\n    </div>\n    <div class=\"col-md-6\">\n      <label for=\"\">Driver Url</label>\n      <input nz-input nz-tooltip placeholder=\"Driver url\" style=\"width: 100%\" [(ngModel)]=\"driver_url\" />\n    </div>\n  </div>\n\n  <div class=\"row mt-3\">\n    <div class=\"col-md-6\">\n      <label for=\"\">Leader Url</label>\n      <input nz-input nz-tooltip placeholder=\"Leader url\" style=\"width: 100%\" [(ngModel)]=\"leader_url\" />\n    </div>\n    <div class=\"col-md-6\">\n      <nz-upload class=\"avatar-uploader\" nzName=\"avatar\"\n        nzListType=\"picture-card\" [nzShowUploadList]=\"false\"\n        (nzChange)=\"handleChange($event)\">\n        <ng-container *ngIf=\"!avatarUrl\">\n          <i class=\"upload-icon\" nz-icon [nzType]=\"loading ? 'loading' : 'plus'\"></i>\n          <div class=\"ant-upload-text\">Upload</div>\n        </ng-container>\n        <img *ngIf=\"avatarUrl\" [src]=\"avatarUrl\" class=\"avatar\" />\n      </nz-upload>\n    </div>\n  </div>\n\n  <div class=\"row mt-3\">\n    <div class=\"col-md-6\">\n      <button nz-button nzType=\"dashed\" (click)=\"addNewsCancel()\" class=\"mr-3\">Cancel</button>\n      <button nz-button nzType=\"primary\" (click)=\"publishSeries()\" [nzLoading]=\"isLoadingTwo\">\n        <i nz-icon type=\"plus\"></i>Publish\n      </button>\n    </div>\n  </div>\n</div>\n\n<nz-spin [nzSpinning]=\"isSpinning\">\n  <div class=\"row\">\n    <ng2-smart-table class=\"table table-responsive\" (delete)=\"seriesDelete($event)\" (edit)=\"onEditRow($event)\"\n      [settings]=\"settings\" [source]=\"data\">\n    </ng2-smart-table>\n  </div>\n</nz-spin>\n\n\n\n<nz-modal [(nzVisible)]=\"isVisible\" nzTitle=\"EDIT AUTHOR\" (nzOnCancel)=\"handleCancel()\" (nzOnOk)=\"handleOk()\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <p><b>ID:</b> {{authorID}}</p>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <label for=\"\">NAME</label>\n      <input nz-input nz-tooltip placeholder=\"Name\" style=\"width: 100%\" [(ngModel)]=\"name\" />\n    </div>\n  </div>\n\n  <div class=\"row mt-3\">\n    <div class=\"col-md-6\">\n      <nz-upload class=\"avatar-uploader\" nzName=\"avatar\" nzListType=\"picture-card\" [nzShowUploadList]=\"false\"\n        (nzChange)=\"handleChange($event)\">\n        <ng-container *ngIf=\"!avatarUrl\">\n          <i class=\"upload-icon\" nz-icon [nzType]=\"loading ? 'loading' : 'plus'\"></i>\n          <div class=\"ant-upload-text\">Upload</div>\n        </ng-container>\n        <img *ngIf=\"avatarUrl\" [src]=\"avatarUrl\" class=\"avatar\" />\n      </nz-upload>\n    </div>\n  </div>\n</nz-modal>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/tiles/audio-tiles/audio-tiles.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/tiles/audio-tiles/audio-tiles.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-toast></p-toast>\n<div class=\"row\">\n  <h4 class=\"mb-5\"><img src=\"../../../assets/audioTilesIcon.png\" width=\"40\" alt=\"motorsports_news\"> Motorsports360 Audios Tiles\n  </h4>\n</div>\n<div class=\"row mb-3\" [hidden]=\"addBtn === false\">\n  <button nz-button nzType=\"primary\" (click)=\"addBtnClicked()\" nzShape=\"round\"><i nz-icon nzType=\"plus\"></i> Add\n    Audio Tiles</button>\n</div>\n\n<div class=\"addNewsForm mb-5\" [hidden]=\"showAddNewsForm === false\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <h5>Please enter all the information before publish. <small class=\"text-muted\">( *all fields are mandatory !\n          )</small> </h5>\n      <hr class=\"mb-4\">\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <label for=\"\">Name</label>\n      <input nz-input nz-tooltip placeholder=\"Name\" style=\"width: 100%\" [(ngModel)]=\"name\" />\n    </div>\n    <div class=\"col-md-4\">\n      <label>URL</label>\n      <input nz-input nz-tooltip placeholder=\"url\" style=\"width: 100%\" [(ngModel)]=\"url\" />\n    </div>\n  </div>\n  <div class=\"row mt-3\">\n    <div class=\"col-md-3\">\n      <nz-upload class=\"avatar-uploader\" nzName=\"avatar\" nzListType=\"picture-card\" [nzShowUploadList]=\"false\"\n        (nzChange)=\"handleChange($event)\">\n        <ng-container *ngIf=\"!avatarUrl\">\n          <i class=\"upload-icon\" nz-icon [nzType]=\"loading ? 'loading' : 'plus'\"></i>\n          <div class=\"ant-upload-text\">Upload</div>\n        </ng-container>\n        <img *ngIf=\"avatarUrl\" [src]=\"avatarUrl\" class=\"avatar\" />\n      </nz-upload>\n    </div>\n    <div class=\"col-md-2\">\n      <label nz-checkbox [(ngModel)]=\"checked\">Main</label>\n    </div>\n  </div>\n  <div class=\"row mt-3\">\n    <div class=\"col-md-6\">\n      <button nz-button nzType=\"dashed\" (click)=\"addNewsCancel()\" class=\"mr-3\">Cancel</button>\n      <button nz-button nzType=\"primary\" (click)=\"publishAudio()\" [nzLoading]=\"isLoadingTwo\">\n        <i nz-icon type=\"plus\"></i>Publish\n      </button>\n    </div>\n  </div>\n</div>\n\n<nz-spin [nzSpinning]=\"isSpinning\">\n  <div class=\"row\">\n    <ng2-smart-table class=\"table table-responsive\" (deleteConfirm)=\"onDeleteConfirm($event)\" (edit)=\"onEditRow($event)\"\n      (editConfirm)=\"onSaveConfirm($event)\" [settings]=\"settings\" [source]=\"data\">\n    </ng2-smart-table>\n  </div>\n</nz-spin>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/tiles/vidoes-tiles/vidoes-tiles.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/tiles/vidoes-tiles/vidoes-tiles.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-toast></p-toast>\n<div class=\"row\">\n  <h4 class=\"mb-5\"><img src=\"../../../assets/play-button.png\" width=\"40\" alt=\"motorsports_news\"> Motorsports360 Videos Tiles\n  </h4>\n</div>\n<div class=\"row mb-3\" [hidden]=\"addBtn === false\">\n  <button nz-button nzType=\"primary\" (click)=\"addBtnClicked()\" nzShape=\"round\"><i nz-icon nzType=\"plus\"></i> Add\n    Video Tiles</button>\n</div>\n\n<div class=\"addNewsForm mb-5\" [hidden]=\"showAddNewsForm === false\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <h5>Please enter all the information before publish. <small class=\"text-muted\">( *all fields are mandatory !\n          )</small> </h5>\n      <hr class=\"mb-4\">\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <label for=\"\">Name</label>\n      <input nz-input nz-tooltip placeholder=\"Name\" style=\"width: 100%\" [(ngModel)]=\"name\" />\n    </div>\n    <div class=\"col-md-4\">\n      <label>URL</label>\n      <input nz-input nz-tooltip placeholder=\"url\" style=\"width: 100%\" [(ngModel)]=\"url\" />\n    </div>\n  </div>\n  <div class=\"row mt-3\">\n    <div class=\"col-md-3\">\n      <nz-upload class=\"avatar-uploader\" nzName=\"avatar\" nzListType=\"picture-card\" [nzShowUploadList]=\"false\"\n        (nzChange)=\"handleChange($event)\">\n        <ng-container *ngIf=\"!avatarUrl\">\n          <i class=\"upload-icon\" nz-icon [nzType]=\"loading ? 'loading' : 'plus'\"></i>\n          <div class=\"ant-upload-text\">Upload</div>\n        </ng-container>\n        <img *ngIf=\"avatarUrl\" [src]=\"avatarUrl\" class=\"avatar\" />\n      </nz-upload>\n    </div>\n    <div class=\"col-md-2\">\n      <label nz-checkbox [(ngModel)]=\"checked\">Main</label>\n    </div>\n  </div>\n  <div class=\"row mt-3\">\n    <div class=\"col-md-6\">\n      <button nz-button nzType=\"dashed\" (click)=\"addNewsCancel()\" class=\"mr-3\">Cancel</button>\n      <button nz-button nzType=\"primary\" (click)=\"publishVideo()\" [nzLoading]=\"isLoadingTwo\">\n        <i nz-icon type=\"plus\"></i>Publish\n      </button>\n    </div>\n  </div>\n</div>\n\n<nz-spin [nzSpinning]=\"isSpinning\">\n  <div class=\"row\">\n    <ng2-smart-table class=\"table table-responsive\" (deleteConfirm)=\"onDeleteConfirm($event)\" (edit)=\"onEditRow($event)\"\n      (editConfirm)=\"onSaveConfirm($event)\" [settings]=\"settings\" [source]=\"data\">\n    </ng2-smart-table>\n  </div>\n</nz-spin>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/vidoes/vidoes.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/vidoes/vidoes.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-toast></p-toast>\n<div class=\"row\">\n  <h4 class=\"mb-5\"><img src=\"../../../assets/play-button.png\" width=\"40\" alt=\"motorsports_news\"> Motorsports360 Videos</h4>\n</div>\n<div class=\"row mb-3\" [hidden]=\"addBtn === false\">\n  <button nz-button nzType=\"primary\" (click)=\"addBtnClicked()\" nzShape=\"round\"><i nz-icon nzType=\"plus\"></i> Add\n    Video</button>\n</div>\n\n<div class=\"addNewsForm mb-5\" [hidden]=\"showAddNewsForm === false\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <h5>Please enter all the information before publish. <small class=\"text-muted\">( *all fields are mandatory !\n          )</small> </h5>\n      <hr class=\"mb-4\">\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <nz-tooltip nzTrigger=\"focus\" nzPlacement=\"bottom\" [nzTitle]=\"headlineTitle\">\n        <label for=\"\">HEADLINE</label>\n        <input nz-input nz-tooltip placeholder=\"Headline\" style=\"width: 100%\" [(ngModel)]=\"videoHeadline\"\n          (ngModelChange)=\"onHeadlineChange($event)\" />\n      </nz-tooltip>\n    </div>\n    <div class=\"col-md-4\">\n      <label>URL</label>\n      <input nz-input nz-tooltip placeholder=\"url\" style=\"width: 100%\" [(ngModel)]=\"videoUrl\" />\n    </div>\n    <div class=\"col-md-4\">\n      <label>Image URL</label>\n      <input nz-input nz-tooltip placeholder=\"url\" style=\"width: 100%\" [(ngModel)]=\"videoImageUrl\" />\n    </div>\n  </div>\n\n   <div class=\"row my-3\">\n    <div class=\"col-md-2\">\n      <label>DATE</label>\n      <nz-date-picker style=\"width: 100%;\" [(ngModel)]=\"videoDate\"></nz-date-picker>\n    </div>\n    <div class=\"col-md-3\">\n      <label>TIME</label>\n      <nz-time-picker style=\"width: 100%;\" [(ngModel)]=\"videoTime\" [nzUse12Hours]=\"true\" nzFormat=\"h:mm a\"></nz-time-picker>\n    </div>\n    <div class=\"col-md-3\">\n      <label>SERIES</label>\n      <nz-select style=\"width: 100%;\" nzShowSearch nzAllowClear nzPlaceHolder=\"Select a series\"\n        [(ngModel)]=\"seriesID\">\n        <nz-option *ngFor=\"let series of seriesIDs\" [nzLabel]=\"series.name\" [nzValue]=\"series.id\"></nz-option>\n      </nz-select>\n    </div>\n    <div class=\"col-md-3\">\n      <label>AUTHOR</label>\n      <!-- <input nz-input nz-tooltip placeholder=\"Author\" style=\"width: 100%\" [(ngModel)]=\"newsAuthor\" /> -->\n      <nz-select style=\"width: 100%;\" nzShowSearch nzAllowClear nzPlaceHolder=\"Select author\" [(ngModel)]=\"videoAuthor\">\n        <nz-option *ngFor=\"let author of authorsIDs\" [nzLabel]=\"author.name\" [nzValue]=\"author.id\"></nz-option>\n      </nz-select>\n    </div>\n  </div>\n <div class=\"row\">\n    <div class=\"col-md-10\">\n      <nz-tooltip nzTrigger=\"focus\" nzPlacement=\"bottom\" [nzTitle]=\"descriptionTitle\">\n        <label for=\"\">DESCRIPTION</label>\n        <textarea rows=\"3\" nz-input nz-tooltip placeholder=\"Description\" style=\"width: 100%\"\n          [(ngModel)]=\"videoDescription\" (ngModelChange)=\"onDescriptionChange($event)\"></textarea>\n      </nz-tooltip>\n    </div>\n  </div>\n  <div class=\"row mt-3\">\n    <div class=\"col-md-6\">\n      <button nz-button nzType=\"dashed\" (click)=\"addNewsCancel()\" class=\"mr-3\">Cancel</button>\n      <button nz-button nzType=\"primary\" (click)=\"publishVideo()\" [nzLoading]=\"isLoadingTwo\">\n        <i nz-icon type=\"plus\"></i>Publish\n      </button>\n    </div>\n  </div>\n</div>\n\n<nz-spin [nzSpinning]=\"isSpinning\">\n  <div class=\"row\">\n    <ng2-smart-table class=\"table table-responsive\" (deleteConfirm)=\"onDeleteConfirm($event)\" (edit)=\"onEditRow($event)\"\n      (editConfirm)=\"onSaveConfirm($event)\" [settings]=\"settings\"\n      [source]=\"data\">\n    </ng2-smart-table>\n  </div>\n</nz-spin>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-wrapper-main\">\n  <p-toast></p-toast>\n  <div class=\"login-screen\">\n    <div class=\"left-item\">\n      <div class=\"login-panel\">\n        <div class=\"inner-login-panel\">\n          <div class=\"content-panel\">\n            <!-- <img src=\"../../assets/vserve.png\" width=\"80\" alt=\"\"> -->\n            <h2 style=\"color: #B52F31\">MOTORSPORT</h2>\n            <h3 class=\"title mt-4\">Sign In</h3>\n            <form>\n              <input type=\"text\" placeholder=\"USERNAME\" [(ngModel)]=\"username\" [ngModelOptions]=\"{standalone: true}\" />\n              <input type=\"password\" placeholder=\"PASSWORD\" [(ngModel)]=\"password\" [ngModelOptions]=\"{standalone: true}\" />\n              <button type=\"button\" nz-button (click)=\"userLogin()\" [nzLoading]=\"isLoading\">Let's Go</button>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"right-item\">\n      <div class=\"slider-panel\">\n        <div class=\"inner-slider-panel\">\n          \n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body .ui-widget {\n    font-size: 14px;\n    text-decoration: none;\n}\n\n.ui-card-title {\n    font-size: 1.5em;\n    font-weight: bold;\n    margin-bottom: .5em;\n}\n\nbody .ui-card {\n    background-color: #ffffff;\n    color: #333333;\n    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n}\n\np {\n    font-family: Ulm Grotesk;\n    font-size: 1.1em;\n    font-weight: 300;\n    line-height: 1.7em;\n    color: #999;\n}\n\na,\na:hover,\na:focus {\n    color: inherit;\n    text-decoration: none;\n    transition: all 0.3s;\n}\n\n.navbar {\n    padding: 15px 10px;\n    background: #fff;\n    border: none;\n    border-radius: 0;\n    margin-bottom: 40px;\n    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);\n}\n\n.navbar-btn {\n    box-shadow: none;\n    outline: none !important;\n    border: none;\n}\n\n.line {\n    width: 100%;\n    height: 1px;\n    border-bottom: 1px dashed #ddd;\n    margin: 40px 0;\n}\n\n/* ---------------------------------------------------\n    SIDEBAR STYLE\n----------------------------------------------------- */\n\n.wrapper {\n    display: flex;\n    width: 100%;\n}\n\n#sidebar {\n    width: 210px;\n    position: fixed;\n    top: 0;\n    left: 0;\n    height: 100vh;\n    z-index: 999;\n    background: #3e4288;\n    /* background-image: url(bgs01.jpg); */\n    background-blend-mode: multiply;\n    color: #fff;\n    transition: all 0.3s;\n    background-position: right;\n    background-repeat: no-repeat;\n    background-position: center center;\n    background-image: linear-gradient(to right bottom, #050d37, #1b205a, #36327e, #5346a4, #7359cb);\n}\n\n#sidebar.active {\n    margin-left: -250px;\n}\n\n#sidebar .sidebar-header {\n    padding: 10px 20px;\n    background: #151846;\n}\n\n#sidebar ul.components {\n    padding: 20px 0;\n}\n\n#sidebar ul p {\n    color: #fff;\n    padding: 10px;\n}\n\n#sidebar ul li a {\n    padding: 10px;\n    font-size: .9em;\n    display: block;\n}\n\n#sidebar ul li a:hover {\n    color: #7386D5;\n    background: #fff;\n}\n\n#sidebar ul li.active>a,\na[aria-expanded=\"true\"] {\n    color: #fff;\n    background: #6d7fcc;\n}\n\na[data-toggle=\"collapse\"] {\n    position: relative;\n}\n\n.dropdown-toggle::after {\n    display: block;\n    position: absolute;\n    top: 50%;\n    right: 20px;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n}\n\nul ul a {\n    font-size: 0.9em !important;\n    padding-left: 30px !important;\n    background: #6d7fcc;\n}\n\nul.CTAs {\n    padding: 20px;\n}\n\nul.CTAs a {\n    text-align: center;\n    font-size: 0.9em !important;\n    display: block;\n    border-radius: 5px;\n    margin-bottom: 5px;\n}\n\na.download {\n    background: #fff;\n    color: #7386D5;\n}\n\na.article,\na.article:hover {\n    background: #6d7fcc !important;\n    color: #fff !important;\n}\n\n/* ---------------------------------------------------\n    CONTENT STYLE\n----------------------------------------------------- */\n\n#content {\n    width: calc(100% - 205px);\n    padding: 40px;\n    min-height: 100vh;\n    transition: all 0.3s;\n    position: absolute;\n    top: 0;\n    right: 0;\n}\n\n#content.active {\n    width: 100%;\n}\n\n/* ---------------------------------------------------\n    MEDIAQUERIES\n----------------------------------------------------- */\n\n@media (max-width: 768px) {\n    #sidebar {\n        margin-left: -250px;\n    }\n    #sidebar.active {\n        margin-left: 0;\n    }\n    #content {\n        width: 100%;\n    }\n    #content.active {\n        width: calc(100% - 250px);\n    }\n    #sidebarCollapse span {\n        display: none;\n    }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsK0dBQStHO0FBQ25IOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFFQTs7O0lBR0ksY0FBYztJQUNkLHFCQUFxQjtJQUNyQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLDBDQUEwQztBQUM5Qzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQix3QkFBd0I7SUFDeEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsOEJBQThCO0lBQzlCLGNBQWM7QUFDbEI7O0FBRUE7O3VEQUV1RDs7QUFFdkQ7SUFDSSxhQUFhO0lBQ2IsV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTztJQUNQLGFBQWE7SUFDYixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHNDQUFzQztJQUN0QywrQkFBK0I7SUFDL0IsV0FBVztJQUNYLG9CQUFvQjtJQUNwQiwwQkFBMEI7SUFDMUIsNEJBQTRCO0lBQzVCLGtDQUFrQztJQUNsQywrRkFBK0Y7QUFDbkc7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsV0FBVztJQUNYLG1DQUEyQjtZQUEzQiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsNkJBQTZCO0lBQzdCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsMkJBQTJCO0lBQzNCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7O0FBRUE7O0lBRUksOEJBQThCO0lBQzlCLHNCQUFzQjtBQUMxQjs7QUFFQTs7dURBRXVEOztBQUV2RDtJQUNJLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFFBQVE7QUFDWjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTs7dURBRXVEOztBQUV2RDtJQUNJO1FBQ0ksbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxjQUFjO0lBQ2xCO0lBQ0E7UUFDSSxXQUFXO0lBQ2Y7SUFDQTtRQUNJLHlCQUF5QjtJQUM3QjtJQUNBO1FBQ0ksYUFBYTtJQUNqQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vYWRtaW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkgLnVpLXdpZGdldCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLnVpLWNhcmQtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luLWJvdHRvbTogLjVlbTtcbn1cblxuYm9keSAudWktY2FyZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICBjb2xvcjogIzMzMzMzMztcbiAgICBib3gtc2hhZG93OiAwIDFweCAzcHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMnB4IDFweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbnAge1xuICAgIGZvbnQtZmFtaWx5OiBVbG0gR3JvdGVzaztcbiAgICBmb250LXNpemU6IDEuMWVtO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuN2VtO1xuICAgIGNvbG9yOiAjOTk5O1xufVxuXG5hLFxuYTpob3ZlcixcbmE6Zm9jdXMge1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cblxuLm5hdmJhciB7XG4gICAgcGFkZGluZzogMTVweCAxMHB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5uYXZiYXItYnRuIHtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgICBib3JkZXI6IG5vbmU7XG59XG5cbi5saW5lIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICNkZGQ7XG4gICAgbWFyZ2luOiA0MHB4IDA7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIFNJREVCQVIgU1RZTEVcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi53cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4jc2lkZWJhciB7XG4gICAgd2lkdGg6IDIxMHB4O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHotaW5kZXg6IDk5OTtcbiAgICBiYWNrZ3JvdW5kOiAjM2U0Mjg4O1xuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybChiZ3MwMS5qcGcpOyAqL1xuICAgIGJhY2tncm91bmQtYmxlbmQtbW9kZTogbXVsdGlwbHk7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQ7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCBib3R0b20sICMwNTBkMzcsICMxYjIwNWEsICMzNjMyN2UsICM1MzQ2YTQsICM3MzU5Y2IpO1xufVxuXG4jc2lkZWJhci5hY3RpdmUge1xuICAgIG1hcmdpbi1sZWZ0OiAtMjUwcHg7XG59XG5cbiNzaWRlYmFyIC5zaWRlYmFyLWhlYWRlciB7XG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgIGJhY2tncm91bmQ6ICMxNTE4NDY7XG59XG5cbiNzaWRlYmFyIHVsLmNvbXBvbmVudHMge1xuICAgIHBhZGRpbmc6IDIwcHggMDtcbn1cblxuI3NpZGViYXIgdWwgcCB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuI3NpZGViYXIgdWwgbGkgYSB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBmb250LXNpemU6IC45ZW07XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbiNzaWRlYmFyIHVsIGxpIGE6aG92ZXIge1xuICAgIGNvbG9yOiAjNzM4NkQ1O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbiNzaWRlYmFyIHVsIGxpLmFjdGl2ZT5hLFxuYVthcmlhLWV4cGFuZGVkPVwidHJ1ZVwiXSB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZDogIzZkN2ZjYztcbn1cblxuYVtkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJdIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgcmlnaHQ6IDIwcHg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG51bCB1bCBhIHtcbiAgICBmb250LXNpemU6IDAuOWVtICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4ICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZDogIzZkN2ZjYztcbn1cblxudWwuQ1RBcyB7XG4gICAgcGFkZGluZzogMjBweDtcbn1cblxudWwuQ1RBcyBhIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAwLjllbSAhaW1wb3J0YW50O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbmEuZG93bmxvYWQge1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgY29sb3I6ICM3Mzg2RDU7XG59XG5cbmEuYXJ0aWNsZSxcbmEuYXJ0aWNsZTpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogIzZkN2ZjYyAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIENPTlRFTlQgU1RZTEVcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbiNjb250ZW50IHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMjA1cHgpO1xuICAgIHBhZGRpbmc6IDQwcHg7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbn1cblxuI2NvbnRlbnQuYWN0aXZlIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgTUVESUFRVUVSSUVTXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAjc2lkZWJhciB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMjUwcHg7XG4gICAgfVxuICAgICNzaWRlYmFyLmFjdGl2ZSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIH1cbiAgICAjY29udGVudCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICAjY29udGVudC5hY3RpdmUge1xuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMjUwcHgpO1xuICAgIH1cbiAgICAjc2lkZWJhckNvbGxhcHNlIHNwYW4ge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AdminComponent = /** @class */ (function () {
    function AdminComponent(route, router) {
        this.route = route;
        this.router = router;
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent.prototype.logout = function () {
        localStorage.removeItem('access_token');
        this.router.navigate(['/login']);
    };
    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! raw-loader!./admin.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/admin/audios/audios.component.css":
/*!***************************************************!*\
  !*** ./src/app/admin/audios/audios.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".addNewsForm {\n    background: #f2f2f2;\n    padding: 30px 20px;\n    border-radius: 5px;\n}\n\nlabel {\n    color: #777;\n    font-size: 12px;\n    text-transform: uppercase\n}\n\ntd img {\n  border-radius: 5px;\n}\n\nthead {\n  background: #f2f2f2;\n}\n\nng2-smart-table table {\n    line-height: 1.5em;\n    border-collapse: collapse;\n    border-spacing: 0;\n    display: table;\n    width: 100%;\n    max-width: 100%;\n    overflow: auto;\n    word-break: normal;\n    word-break: keep-all;\n    border: 1px solid #f2f2f2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYXVkaW9zL2F1ZGlvcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZUFBZTtJQUNmO0FBQ0o7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsV0FBVztJQUNYLGVBQWU7SUFDZixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQix5QkFBeUI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9hdWRpb3MvYXVkaW9zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRkTmV3c0Zvcm0ge1xuICAgIGJhY2tncm91bmQ6ICNmMmYyZjI7XG4gICAgcGFkZGluZzogMzBweCAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxubGFiZWwge1xuICAgIGNvbG9yOiAjNzc3O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlXG59XG5cbnRkIGltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxudGhlYWQge1xuICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xufVxuXG5uZzItc21hcnQtdGFibGUgdGFibGUge1xuICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xuICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICB3b3JkLWJyZWFrOiBub3JtYWw7XG4gICAgd29yZC1icmVhazoga2VlcC1hbGw7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2YyZjJmMjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/admin/audios/audios.component.ts":
/*!**************************************************!*\
  !*** ./src/app/admin/audios/audios.component.ts ***!
  \**************************************************/
/*! exports provided: AudiosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudiosComponent", function() { return AudiosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_components_common_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/components/common/api */ "./node_modules/primeng/components/common/api.js");
/* harmony import */ var primeng_components_common_api__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_components_common_api__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_service_api_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/api-service.service */ "./src/app/service/api-service.service.ts");




var AudiosComponent = /** @class */ (function () {
    function AudiosComponent(messageService, api) {
        var _this = this;
        this.messageService = messageService;
        this.api = api;
        this.isSpinning = false;
        this.headlineTitle = 'Enter News Headline';
        this.descriptionTitle = 'Enter News Description';
        this.seriesID = null;
        this.showAddNewsForm = false;
        this.isLoadingTwo = false;
        this.addBtn = true;
        this.dataMsg = 'Please Wait while data is loading ...';
        this.settings = {
            columns: {
                id: {
                    title: 'S.No.',
                    editable: false,
                    filter: false,
                    sortDirection: 'desc',
                    width: '8%'
                },
                image_url: {
                    title: 'Image',
                    type: 'html',
                    filter: false,
                    valuePrepareFunction: function (value) { return "<img src=\"" + value + "\" width=\"80\" style=\"border-radius: 22px;\" />"; }
                },
                headline: {
                    title: 'Headline',
                    editor: {
                        type: 'textarea'
                    }
                },
                series_id: {
                    title: 'Series',
                    editable: false,
                    type: 'html',
                    valuePrepareFunction: function (value) { return "" + value.name; }
                },
                author_id: {
                    title: 'Author',
                    editable: false,
                    type: 'html',
                    valuePrepareFunction: function (value) { return "" + value.name; }
                },
                url: {
                    title: 'Url',
                    editable: false,
                    type: 'html',
                    valuePrepareFunction: function (value) { return "<a href=\"" + value + "\" target=\"_blank\">Url</a>"; },
                    filter: false
                },
                description: {
                    title: 'Description',
                    editor: {
                        type: 'textarea'
                    }
                },
                date: {
                    title: 'Date',
                    editable: false,
                    width: '9%'
                },
                time: {
                    title: 'Time',
                    editable: false,
                    width: '9%'
                }
            },
            add: {
                addButtonContent: 'Add',
                confirmCreate: true
            },
            edit: {
                editButtonContent: '<img src="../../../assets/edit.png" width="20"/>',
                saveButtonContent: '<img src="../../../assets/check-mark.png" width="22"/>',
                cancelButtonContent: '<img src="../../../assets/close-cross.png" width="22"/>',
                confirmCreate: true,
                confirmSave: true,
            },
            delete: {
                deleteButtonContent: '<img src="../../../assets/delete.png" width="20"/>',
                confirmDelete: true
            },
            actions: {
                position: 'right'
            },
            pager: {
                display: true,
                perPage: 10
            },
            hideSubHeader: true
        };
        this.isSpinning = true;
        this.api.listAudios().subscribe(function (resp) {
            console.log(resp);
            if (resp.status === 200) {
                _this.data = resp.body.results;
                _this.isSpinning = false;
            }
        }, function (error) {
            console.log(error);
            _this.isSpinning = false;
        });
        this.api.listSeries().subscribe(function (resp) {
            if (resp.status === 200) {
                console.log(resp);
                _this.seriesIDs = resp.body.results;
            }
        }, function (error) {
            console.log(error);
        });
        this.api.listAuthor().subscribe(function (resp) {
            if (resp.status === 200) {
                console.log(resp);
                _this.authorsIDs = resp.body.results;
            }
        }, function (error) {
            console.log(error);
        });
    }
    AudiosComponent.prototype.ngOnInit = function () {
    };
    AudiosComponent.prototype.onSaveConfirm = function (event) {
        var _this = this;
        var data = {
            author_id: event.newData.author_id.id,
            description: event.newData.description,
            headline: event.newData.headline,
            id: event.newData.id,
            image_url: event.newData.image_url,
            date: event.newData.date,
            time: event.newData.time,
            news_url: event.newData.news_url,
            series_id: event.newData.series_id.id
        };
        this.api.updateAudio(event.newData.id, data).subscribe(function (resp) {
            console.log(resp);
            if (resp.status === 200) {
                event.confirm.resolve(_this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Updated Successfully' }));
            }
        }, function (error) {
            console.log(error);
            event.confirm.reject(_this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong!' }));
        });
    };
    AudiosComponent.prototype.onDeleteConfirm = function (event) {
        var _this = this;
        this.api.deleteAudio(event.data.id).subscribe(function (resp) {
            console.log(resp);
            if (resp.status === 204) {
                event.confirm.resolve(_this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Updated Successfully' }));
            }
        }, function (error) {
            console.log(error);
            event.confirm.reject(_this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong!' }));
        });
    };
    AudiosComponent.prototype.onCreateConfirm = function (event) {
    };
    AudiosComponent.prototype.onEditRow = function (event) {
        console.log('Editing');
    };
    AudiosComponent.prototype.onHeadlineChange = function (value) {
        this.updateValue(value);
    };
    AudiosComponent.prototype.onDescriptionChange = function (value) {
        this.updateDescValue(value);
    };
    AudiosComponent.prototype.updateDescValue = function (value) {
        this.audioDescription = value;
        this.updateDesc();
    };
    AudiosComponent.prototype.updateValue = function (value) {
        this.audioHeadline = value;
        this.updateTitle();
    };
    AudiosComponent.prototype.updateDesc = function () {
        this.descriptionTitle = this.audioDescription;
    };
    AudiosComponent.prototype.updateTitle = function () {
        this.headlineTitle = this.audioHeadline;
    };
    AudiosComponent.prototype.addBtnClicked = function () {
        this.addBtn = false;
        this.showAddNewsForm = true;
    };
    AudiosComponent.prototype.changeDate = function (date) {
        return new Date(date).toDateString();
    };
    AudiosComponent.prototype.changeTime = function (time) {
        return new Date(time).toLocaleTimeString();
    };
    AudiosComponent.prototype.publishAudio = function () {
        var _this = this;
        var data = {
            headline: this.audioHeadline,
            date: this.changeDate(this.audioDate),
            time: this.changeTime(this.audioTime),
            image_url: this.audioImageUrl,
            series_id: this.seriesID,
            url: this.audioUrl,
            description: this.audioDescription,
            author_id: this.audioAuthor
        };
        this.isLoadingTwo = true;
        console.log(data);
        this.api.addAudio(data).subscribe(function (resp) {
            console.log(resp);
            if (resp.status === 201) {
                _this.api.listAudios().subscribe(function (resp) {
                    console.log(resp);
                    if (resp.status === 200) {
                        _this.data = resp.body.results;
                        _this.isLoadingTwo = false;
                        _this.addBtn = true;
                        _this.showAddNewsForm = false;
                        _this.messageService.add({ severity: 'success', summary: 'Congratulations', detail: 'Audio published successfully!' });
                    }
                }, function (error) {
                    console.log(error);
                });
            }
        }, function (error) {
            console.log(error);
            _this.isLoadingTwo = false;
            _this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong. Please try after sometime.' });
        });
    };
    AudiosComponent.prototype.addNewsCancel = function () {
        this.addBtn = true;
        this.showAddNewsForm = false;
    };
    AudiosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-audios',
            template: __webpack_require__(/*! raw-loader!./audios.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/audios/audios.component.html"),
            styles: [__webpack_require__(/*! ./audios.component.css */ "./src/app/admin/audios/audios.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [primeng_components_common_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"], src_app_service_api_service_service__WEBPACK_IMPORTED_MODULE_3__["ApiServiceService"]])
    ], AudiosComponent);
    return AudiosComponent;
}());



/***/ }),

/***/ "./src/app/admin/author/author.component.css":
/*!***************************************************!*\
  !*** ./src/app/admin/author/author.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".addNewsForm {\n    background: #f2f2f2;\n    padding: 30px 20px;\n    border-radius: 5px;\n}\n\nlabel {\n    color: #777;\n    font-size: 12px;\n    text-transform: uppercase\n}\n\ntd img {\n  border-radius: 5px;\n}\n\nthead {\n  background: #f2f2f2;\n}\n\nng2-smart-table table {\n    line-height: 1.5em;\n    border-collapse: collapse;\n    border-spacing: 0;\n    display: table;\n    width: 100%;\n    max-width: 100%;\n    overflow: auto;\n    word-break: normal;\n    word-break: keep-all;\n    border: 1px solid #f2f2f2;\n}\n\n.avatar {\n  width: 128px;\n  height: 128px;\n}\n\n.upload-icon {\n  font-size: 32px;\n  color: #999;\n}\n\n.ant-upload-text {\n  margin-top: 8px;\n  color: #666;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYXV0aG9yL2F1dGhvci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZUFBZTtJQUNmO0FBQ0o7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsV0FBVztJQUNYLGVBQWU7SUFDZixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQix5QkFBeUI7QUFDN0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUNBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7QUFDYjs7QUFDQTtFQUNFLGVBQWU7RUFDZixXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9hdXRob3IvYXV0aG9yLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRkTmV3c0Zvcm0ge1xuICAgIGJhY2tncm91bmQ6ICNmMmYyZjI7XG4gICAgcGFkZGluZzogMzBweCAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxubGFiZWwge1xuICAgIGNvbG9yOiAjNzc3O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlXG59XG5cbnRkIGltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxudGhlYWQge1xuICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xufVxuXG5uZzItc21hcnQtdGFibGUgdGFibGUge1xuICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xuICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICB3b3JkLWJyZWFrOiBub3JtYWw7XG4gICAgd29yZC1icmVhazoga2VlcC1hbGw7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2YyZjJmMjtcbn1cblxuLmF2YXRhciB7XG4gIHdpZHRoOiAxMjhweDtcbiAgaGVpZ2h0OiAxMjhweDtcbn1cbi51cGxvYWQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgY29sb3I6ICM5OTk7XG59XG4uYW50LXVwbG9hZC10ZXh0IHtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBjb2xvcjogIzY2Njtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/admin/author/author.component.ts":
/*!**************************************************!*\
  !*** ./src/app/admin/author/author.component.ts ***!
  \**************************************************/
/*! exports provided: AuthorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorComponent", function() { return AuthorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_components_common_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/components/common/api */ "./node_modules/primeng/components/common/api.js");
/* harmony import */ var primeng_components_common_api__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_components_common_api__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_service_api_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/api-service.service */ "./src/app/service/api-service.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");





var AuthorComponent = /** @class */ (function () {
    function AuthorComponent(messageService, api, msg, modalService) {
        var _this = this;
        this.messageService = messageService;
        this.api = api;
        this.msg = msg;
        this.modalService = modalService;
        this.isSpinning = false;
        this.isVisible = false;
        this.loading = false;
        this.showAddSeriesForm = false;
        this.isLoadingTwo = false;
        this.addBtn = true;
        this.dataMsg = 'Please Wait while data is loading ...';
        this.settings = {
            columns: {
                id: {
                    title: 'S.No.',
                    sortDirection: 'desc',
                },
                image_url: {
                    title: 'Image',
                    type: 'html',
                    valuePrepareFunction: function (value) { return "<img src=\"" + value + "\" width=\"80\" style=\"border-radius: 5px;\" />"; },
                },
                name: {
                    title: 'Name'
                },
            },
            add: {
                addButtonContent: 'Add',
                confirmCreate: true
            },
            edit: {
                editButtonContent: '<img src="../../../assets/edit.png" class="mr-2" width="20"/>',
                saveButtonContent: '<img src="../../../assets/check-mark.png" class="mr-2" width="22"/>',
                cancelButtonContent: '<img src="../../../assets/close-cross.png" width="22"/>',
                confirmCreate: true,
                confirmSave: true,
            },
            delete: {
                deleteButtonContent: '<img src="../../../assets/delete.png" width="20"/>',
                confirmDelete: true
            },
            actions: {
                position: 'right',
                custom: [
                    { name: 'scrapAuthor', title: "<img data-toggle=\"tooltip\" data-placement=\"top\" title=\"Scrap\" src=\"../../../assets/scraping.png\" class=\"mr-2 mb-2\" width=\"20\"/>" },
                ]
            },
            pager: {
                display: true,
                perPage: 15
            },
            hideSubHeader: true,
            mode: 'external'
        };
        this.isSpinning = true;
        this.api.listAuthor().subscribe(function (resp) {
            if (resp.status === 200) {
                console.log(resp);
                _this.data = resp.body.results;
                _this.isSpinning = false;
            }
        }, function (error) {
            console.log(error);
            _this.isSpinning = false;
        });
    }
    // beforeUpload = (file: File) => {
    //   return new Observable((observer: Observer<boolean>) => {
    //     const isJPG = file.type === 'image/jpeg';
    //     if (!isJPG) {
    //       this.msg.error('You can only upload JPG file!');
    //       observer.complete();
    //       return;
    //     }
    //   });
    // };
    AuthorComponent.prototype.getBase64 = function (img, callback) {
        var reader = new FileReader();
        reader.addEventListener('load', function () { return callback(reader.result.toString()); });
        reader.readAsDataURL(img);
    };
    AuthorComponent.prototype.handleChange = function (info) {
        var _this = this;
        this.getBase64(info.file.originFileObj, function (img) {
            _this.loading = false;
            _this.avatarUrl = img;
            _this.avatarFile = info.file.originFileObj;
            _this.avatarFileName = info.file.name;
            console.log(_this.avatarFile);
        });
    };
    AuthorComponent.prototype.ngOnInit = function () {
    };
    AuthorComponent.prototype.showConfirm = function (event) {
        var _this = this;
        this.modalService.confirm({
            nzTitle: 'Confirm',
            nzContent: 'Do you really want to delete?',
            nzOkText: 'OK',
            nzCancelText: 'Cancel',
            nzOkLoading: false,
            nzOnOk: function () {
                _this.api.deleteAuthor(event.data.id).subscribe(function (resp) {
                    if (resp.status === 204) {
                        _this.api.listAuthor().subscribe(function (resp) {
                            if (resp.status === 200) {
                                console.log(resp);
                                _this.data = resp.body.results;
                                _this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Deleted Successfully' });
                            }
                        }, function (error) {
                            console.log(error);
                        });
                    }
                }, function (error) {
                    console.log(error);
                    _this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong!' });
                });
            }
        });
    };
    AuthorComponent.prototype.authorDelete = function (event) {
        this.showConfirm(event);
    };
    AuthorComponent.prototype.showModal = function () {
        this.isVisible = true;
    };
    AuthorComponent.prototype.handleOk = function () {
        var _this = this;
        var formData = new FormData();
        formData.append('image_url', this.avatarFile);
        formData.append('name', this.name);
        formData.append('id', this.authorID);
        this.api.updateAuthor(this.authorID, formData).subscribe(function (resp) {
            console.log(resp);
            if (resp.status === 200) {
                _this.api.listAuthor().subscribe(function (resp) {
                    if (resp.status === 200) {
                        console.log(resp);
                        _this.data = resp.body.results;
                        _this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Updated Successfully' });
                        _this.addNewsCancel();
                        _this.handleCancel();
                    }
                }, function (error) {
                    console.log(error);
                });
            }
        }, function (error) {
            console.log(error);
            _this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong!' });
        });
    };
    AuthorComponent.prototype.handleCancel = function () {
        this.isVisible = false;
        this.addNewsCancel();
    };
    AuthorComponent.prototype.showScrappingConfirm = function (event) {
        var _this = this;
        this.modalService.confirm({
            nzTitle: 'Confirm',
            nzContent: 'Do you really want to scrap this author?',
            nzOkText: 'OK',
            nzCancelText: 'Cancel',
            nzOkLoading: false,
            nzOnOk: function () {
                console.log(event.data);
                var formData = new FormData();
                formData.append('author_id', event.data.id);
                _this.isSpinning = true;
                _this.api.scrapAuthor(formData).subscribe(function (resp) {
                    console.log(formData, resp);
                    if (resp.status === 200) {
                        _this.isSpinning = false;
                        _this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Scrap Successful' });
                    }
                    else {
                        _this.isSpinning = false;
                        _this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong!' });
                    }
                }, function (error) {
                    _this.isSpinning = false;
                    console.log(error);
                });
            }
        });
    };
    AuthorComponent.prototype.customAction = function (event) {
        console.log(event);
        if (event.action === 'scrapAuthor') {
            this.showScrappingConfirm(event);
        }
    };
    AuthorComponent.prototype.onEditRow = function (event) {
        this.showModal();
        console.log(event);
        this.name = event.data.name;
        this.avatarUrl = event.data.image_url;
        this.authorID = event.data.id;
    };
    AuthorComponent.prototype.addBtnClicked = function () {
        this.addBtn = false;
        this.showAddSeriesForm = true;
    };
    AuthorComponent.prototype.publishAuthor = function () {
        var _this = this;
        var formData = new FormData();
        formData.append('image_url', this.avatarFile);
        formData.append('name', this.name);
        this.isLoadingTwo = true;
        this.api.addAuthor(formData).subscribe(function (resp) {
            console.log(resp);
            if (resp.status === 201) {
                _this.api.listAuthor().subscribe(function (resp) {
                    if (resp.status === 200) {
                        console.log(resp);
                        _this.data = resp.body.results;
                        _this.isLoadingTwo = false;
                        _this.addBtn = true;
                        _this.showAddSeriesForm = false;
                        _this.messageService.add({ severity: 'success', summary: 'Congratulations', detail: 'Series added successfully!' });
                    }
                }, function (error) {
                    console.log(error);
                });
            }
        }, function (error) {
            console.log(error);
            _this.isLoadingTwo = false;
            _this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong. Please try after sometime.' });
        });
    };
    AuthorComponent.prototype.addNewsCancel = function () {
        this.addBtn = true;
        this.showAddSeriesForm = false;
        this.name = '';
        this.avatarUrl = '';
        this.avatarFileName = '';
    };
    AuthorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-author',
            template: __webpack_require__(/*! raw-loader!./author.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/author/author.component.html"),
            styles: [__webpack_require__(/*! ./author.component.css */ "./src/app/admin/author/author.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [primeng_components_common_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"], src_app_service_api_service_service__WEBPACK_IMPORTED_MODULE_3__["ApiServiceService"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzModalService"]])
    ], AuthorComponent);
    return AuthorComponent;
}());



/***/ }),

/***/ "./src/app/admin/dashboard/dashboard.component.css":
/*!*********************************************************!*\
  !*** ./src/app/admin/dashboard/dashboard.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dashboardInfo {\n  background: #f2f2f2;\n  padding: 30px 20px;\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGFzaGJvYXJkSW5mbyB7XG4gIGJhY2tncm91bmQ6ICNmMmYyZjI7XG4gIHBhZGRpbmc6IDMwcHggMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/admin/dashboard/dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/admin/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_components_common_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/components/common/api */ "./node_modules/primeng/components/common/api.js");
/* harmony import */ var primeng_components_common_api__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_components_common_api__WEBPACK_IMPORTED_MODULE_2__);



var count = 5;
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(messageService) {
        this.messageService = messageService;
        this.loading = true;
        this.initLoading = true; // bug
        this.loadingMore = false;
        this.data = [
            {
                image_url: 'https://dscxx9mer61ho.cloudfront.net/wp-content/uploads/58376170_2106097679438695_7221677939866206208_o.jpg',
                title: 'McLaughlin impresses in karting cameo',
                description: "Supercars champion Scott McLaughlin shone on and off the track at Easter's New Zealand Kart Championships, concluding his return to competitive karting with a runner-up finish.",
                news_date: '12 June 2019',
                news_time: '06:48 PM',
                news_link: 'https://www.supercars.com/news/championship/mclaughlin-impresses-in-karting-cameo/'
            },
            {
                image_url: 'https://dscxx9mer61ho.cloudfront.net/wp-content/uploads/2019VASCR1_ADL500_DKIMG7922.jpg',
                title: 'Klimenko’s relaxed approach to driver deals',
                description: "Penrite Racing owner Betty Klimenko is keen to keep David Reynolds and Anton De Pasquale for 2020, but is in no rush to lock them into new contracts.",
                news_date: '18 June 2019',
                news_time: '04:38 PM',
                news_link: 'https://www.supercars.com/news/championship/klimenkos-relaxed-approach-to-driver-deals/'
            },
            {
                image_url: 'https://dscxx9mer61ho.cloudfront.net/wp-content/uploads/VASC-ADL500-Super2-056.jpg',
                title: 'GRM rookie relishing fierce Super2 fight',
                description: "Dylan O'Keeffe says he was shocked by how fierce the Dunlop Super2 Series competition was during his debut at the Superloop Adelaide 500.",
                news_date: '18 June 2019',
                news_time: '04:22 PM',
                news_link: 'https://www.supercars.com/news/super2/grm-rookie-relishing-fierce-super2-fight/'
            },
            {
                image_url: 'https://dscxx9mer61ho.cloudfront.net/wp-content/uploads/17-McLaughlin-EV03-19-MH1_4940-1800x1200.jpg',
                title: "'Fire in the belly': McLaughlin reacts to Mustang changes",
                description: "Shell V-Power Racing’s Scott McLaughlin says the latest changes to the Ford Mustang will serve as extra motivation in his quest for a second consecutive Supercars title.",
                news_date: '19 June 2019',
                news_time: '08:01 AM',
                news_link: 'https://www.supercars.com/news/championship/fire-in-the-belly-mclaughlin-reacts-to-mustang-changes/'
            },
            {
                image_url: 'https://dscxx9mer61ho.cloudfront.net/wp-content/uploads/VASCR10_DKIMG_16251-1800x1200.jpg',
                title: 'More light for SuperNight in 2019',
                description: "Supercars will incorporate key lessons from last year’s Sydney SuperNight as it prepares to light up Barbagallo Raceway for the first time next week.",
                news_date: '22 June 2019',
                news_time: '11:56 PM',
                news_link: 'https://www.supercars.com/news/championship/more-light-for-supernight-in-2019/'
            }
        ];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.loading = false;
        }, 4000);
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/admin/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [primeng_components_common_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/admin/drivers/drivers.component.css":
/*!*****************************************************!*\
  !*** ./src/app/admin/drivers/drivers.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".addNewsForm {\n    background: #f2f2f2;\n    padding: 30px 20px;\n    border-radius: 5px;\n}\n\nlabel {\n    color: #777;\n    font-size: 14px;\n    text-transform: uppercase\n}\n\ntd img {\n  border-radius: 5px;\n}\n\nthead {\n  background: #f2f2f2;\n}\n\nng2-smart-table table {\n    line-height: 1.5em;\n    border-collapse: collapse;\n    border-spacing: 0;\n    display: table;\n    width: 100%;\n    max-width: 100%;\n    overflow: auto;\n    word-break: normal;\n    word-break: keep-all;\n    border: 1px solid #f2f2f2;\n}\n\n.bannerAvatarWrap{\n  background: #f2f2f2;\n  padding: 60px;\n  border-radius: 8px;\n}\n\n.avatar {\n  width: 200px;\n}\n\n.upload-icon {\n  font-size: 32px;\n  color: #999;\n}\n\n.ant-upload-text {\n  margin-top: 8px;\n  color: #666;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vZHJpdmVycy9kcml2ZXJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2Y7QUFDSjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxXQUFXO0lBQ1gsZUFBZTtJQUNmLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLHlCQUF5QjtBQUM3Qjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUNBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7QUFDYjs7QUFDQTtFQUNFLGVBQWU7RUFDZixXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9kcml2ZXJzL2RyaXZlcnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZGROZXdzRm9ybSB7XG4gICAgYmFja2dyb3VuZDogI2YyZjJmMjtcbiAgICBwYWRkaW5nOiAzMHB4IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG5sYWJlbCB7XG4gICAgY29sb3I6ICM3Nzc7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2Vcbn1cblxudGQgaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG50aGVhZCB7XG4gIGJhY2tncm91bmQ6ICNmMmYyZjI7XG59XG5cbm5nMi1zbWFydC10YWJsZSB0YWJsZSB7XG4gICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gICAgZGlzcGxheTogdGFibGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIHdvcmQtYnJlYWs6IG5vcm1hbDtcbiAgICB3b3JkLWJyZWFrOiBrZWVwLWFsbDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjJmMmYyO1xufVxuXG4uYmFubmVyQXZhdGFyV3JhcHtcbiAgYmFja2dyb3VuZDogI2YyZjJmMjtcbiAgcGFkZGluZzogNjBweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG4uYXZhdGFyIHtcbiAgd2lkdGg6IDIwMHB4O1xufVxuLnVwbG9hZC1pY29uIHtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBjb2xvcjogIzk5OTtcbn1cbi5hbnQtdXBsb2FkLXRleHQge1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIGNvbG9yOiAjNjY2O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/admin/drivers/drivers.component.ts":
/*!****************************************************!*\
  !*** ./src/app/admin/drivers/drivers.component.ts ***!
  \****************************************************/
/*! exports provided: DriversComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriversComponent", function() { return DriversComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_components_common_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/components/common/api */ "./node_modules/primeng/components/common/api.js");
/* harmony import */ var primeng_components_common_api__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_components_common_api__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_service_api_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/api-service.service */ "./src/app/service/api-service.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");





var DriversComponent = /** @class */ (function () {
    // tslint:disable-next-line: max-line-length
    function DriversComponent(messageService, api, msg, modalService) {
        var _this = this;
        this.messageService = messageService;
        this.api = api;
        this.msg = msg;
        this.modalService = modalService;
        this.isSpinning = false;
        this.loading = false;
        this.showAddSeriesForm = false;
        this.isLoadingTwo = false;
        this.addBtn = true;
        this.dataMsg = 'Please Wait while data is loading ...';
        this.settings = {
            columns: {
                id: {
                    title: 'S.No.',
                    sortDirection: 'desc',
                    editable: false
                },
                name: {
                    title: 'Name',
                    editable: false
                },
                driver_url: {
                    title: 'Driver Url',
                    type: 'html',
                    valuePrepareFunction: function (value) { return "<a href=\"" + value + "\" target=\"_blank\">Driver Link</a>"; },
                },
                event_url: {
                    title: 'Event Url',
                    type: 'html',
                    valuePrepareFunction: function (value) { return "<a href=\"" + value + "\" target=\"_blank\">Event Link</a>"; },
                },
                team_url: {
                    title: 'Team Url',
                    type: 'html',
                    valuePrepareFunction: function (value) { return "<a href=\"" + value + "\" target=\"_blank\">Team Link</a>"; },
                },
                leader_url: {
                    title: 'Leader Url',
                    type: 'html',
                    valuePrepareFunction: function (value) { return "<a href=\"" + value + "\" target=\"_blank\">Leader Link</a>"; },
                },
            },
            add: {
                addButtonContent: 'Add',
                confirmCreate: true
            },
            edit: {
                editButtonContent: '<img src="../../../assets/edit.png" class="ml-3" width="20"/>',
                saveButtonContent: '<img src="../../../assets/check-mark.png" class="mr-2" width="22"/>',
                cancelButtonContent: '<img src="../../../assets/close-cross.png" width="22"/>',
                confirmCreate: true,
                confirmSave: true,
            },
            delete: {
                deleteButtonContent: '',
                confirmDelete: true
            },
            actions: {
                position: 'right'
            },
            pager: {
                display: true,
                perPage: 15
            },
            hideSubHeader: true,
        };
        this.api.getBannerImages().subscribe(function (resp) {
            console.log(resp);
            _this.driverAvatarUrl = resp.body.results[0].driver_banner_image;
            _this.eventAvatarUrl = resp.body.results[0].event_banner_image;
            _this.teamAvatarUrl = resp.body.results[0].team_banner_image;
            _this.leaderAvatarUrl = resp.body.results[0].leader_banner_image;
            _this.seriesAvatarUrl = resp.body.results[0].my_series_banner_image;
            _this.savedStoriesAvatarUrl = resp.body.results[0].saved_series_banner_image;
        }, function (error) {
            console.log(error);
        });
    }
    DriversComponent.prototype.getBase64 = function (img, callback) {
        var reader = new FileReader();
        // tslint:disable-next-line: no-non-null-assertion
        reader.addEventListener('load', function () { return callback(reader.result.toString()); });
        reader.readAsDataURL(img);
    };
    DriversComponent.prototype.driverAvatarChange = function (info) {
        var _this = this;
        // tslint:disable-next-line: no-non-null-assertion
        this.getBase64(info.file.originFileObj, function (img) {
            _this.loading = false;
            _this.driverAvatarUrl = img;
            // tslint:disable-next-line: no-non-null-assertion
            _this.driverAvatarFile = info.file.originFileObj;
            console.log(_this.driverAvatarFile);
            var data = new FormData();
            data.append('driver_banner_image', _this.driverAvatarFile);
            _this.api.updateDriverBanner(1, data).subscribe(function (resp) {
                console.log(resp, _this.driverAvatarFile);
                _this.driverAvatarUrl = resp.body.driver_banner_image;
                _this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Driver Banner changed Successfully!' });
            }, function (error) {
                console.log(error, _this.driverAvatarFile);
                _this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong!' });
            });
        });
    };
    DriversComponent.prototype.teamAvatarChange = function (info) {
        var _this = this;
        // tslint:disable-next-line: no-non-null-assertion
        this.getBase64(info.file.originFileObj, function (img) {
            _this.loading = false;
            _this.teamAvatarUrl = img;
            // tslint:disable-next-line: no-non-null-assertion
            _this.teamAvatarFile = info.file.originFileObj;
            console.log(_this.teamAvatarFile);
            var data = new FormData();
            data.append('team_banner_image', _this.teamAvatarFile);
            _this.api.updateTeamBanner(1, data).subscribe(function (resp) {
                console.log(resp, _this.teamAvatarFile);
                _this.teamAvatarUrl = resp.body.team_banner_image;
                _this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Team Banner changed Successfully!' });
            }, function (error) {
                console.log(error, _this.teamAvatarFile);
                _this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong!' });
            });
        });
    };
    DriversComponent.prototype.eventAvatarChange = function (info) {
        var _this = this;
        // tslint:disable-next-line: no-non-null-assertion
        this.getBase64(info.file.originFileObj, function (img) {
            _this.loading = false;
            _this.eventAvatarUrl = img;
            // tslint:disable-next-line: no-non-null-assertion
            _this.eventAvatarFile = info.file.originFileObj;
            console.log(_this.eventAvatarFile);
            var data = new FormData();
            data.append('event_banner_image', _this.eventAvatarFile);
            // const data = {
            //   event_banner_image: this.eventAvatarFile
            // };
            _this.api.updateEventBanner(1, data).subscribe(function (resp) {
                console.log(resp, _this.eventAvatarFile);
                _this.eventAvatarUrl = resp.body.event_banner_image;
                _this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Event Banner changed Successfully!' });
            }, function (error) {
                console.log(error, _this.eventAvatarFile);
                _this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong!' });
            });
        });
    };
    DriversComponent.prototype.leaderAvatarChange = function (info) {
        var _this = this;
        // tslint:disable-next-line: no-non-null-assertion
        this.getBase64(info.file.originFileObj, function (img) {
            _this.loading = false;
            _this.leaderAvatarUrl = img;
            // tslint:disable-next-line: no-non-null-assertion
            _this.leaderAvatarFile = info.file.originFileObj;
            console.log(_this.eventAvatarFile);
            var data = new FormData();
            data.append('leader_banner_image', _this.leaderAvatarFile);
            // const data = {
            //   event_banner_image: this.eventAvatarFile
            // };
            _this.api.updateLeaderBanner(1, data).subscribe(function (resp) {
                console.log(resp, _this.leaderAvatarFile);
                _this.eventAvatarUrl = resp.body.leader_banner_image;
                _this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Leader Banner changed Successfully!' });
            }, function (error) {
                console.log(error, _this.leaderAvatarFile);
                _this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong!' });
            });
        });
    };
    DriversComponent.prototype.seriesAvatarChange = function (info) {
        var _this = this;
        // tslint:disable-next-line: no-non-null-assertion
        this.getBase64(info.file.originFileObj, function (img) {
            _this.loading = false;
            _this.seriesAvatarUrl = img;
            // tslint:disable-next-line: no-non-null-assertion
            _this.seriesAvatarFile = info.file.originFileObj;
            var data = new FormData();
            data.append('my_series_banner_image', _this.seriesAvatarFile);
            _this.api.updateSeriesBanner(1, data).subscribe(function (resp) {
                console.log(resp, _this.seriesAvatarFile);
                _this.eventAvatarUrl = resp.body.my_series_banner_image;
                _this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Series Banner changed Successfully!' });
            }, function (error) {
                console.log(error, _this.seriesAvatarFile);
                _this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong!' });
            });
        });
    };
    DriversComponent.prototype.savedStoriesAvatarChange = function (info) {
        var _this = this;
        // tslint:disable-next-line: no-non-null-assertion
        this.getBase64(info.file.originFileObj, function (img) {
            _this.loading = false;
            _this.savedStoriesAvatarUrl = img;
            // tslint:disable-next-line: no-non-null-assertion
            _this.savedStoriesAvatarFile = info.file.originFileObj;
            var data = new FormData();
            data.append('saved_series_banner_image', _this.savedStoriesAvatarFile);
            _this.api.updateLeaderBanner(1, data).subscribe(function (resp) {
                console.log(resp, _this.savedStoriesAvatarFile);
                _this.eventAvatarUrl = resp.body.saved_series_banner_image;
                _this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Saved Stories Banner changed Successfully!' });
            }, function (error) {
                console.log(error, _this.savedStoriesAvatarFile);
                _this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong!' });
            });
        });
    };
    DriversComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isSpinning = true;
        this.api.listDrivers().subscribe(function (resp) {
            if (resp.status === 200) {
                console.log(resp);
                _this.data = resp.body.results;
                _this.isSpinning = false;
            }
        }, function (error) {
            console.log(error);
            _this.isSpinning = false;
        });
    };
    DriversComponent.prototype.onSaveConfirm = function (event) {
        var _this = this;
        var data = {
            driver_url: event.newData.driver_url,
            event_url: event.newData.event_url,
            leader_url: event.newData.leader_url,
            name: event.newData.name,
            team_url: event.newData.team_url
        };
        this.api.updateDrivers(event.newData.id, data).subscribe(function (resp) {
            console.log(resp);
            if (resp.status === 200) {
                event.confirm.resolve(_this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Updated Successfully' }));
            }
        }, function (error) {
            console.log(error);
            event.confirm.reject(_this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong!' }));
        });
    };
    DriversComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-drivers',
            template: __webpack_require__(/*! raw-loader!./drivers.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/drivers/drivers.component.html"),
            styles: [__webpack_require__(/*! ./drivers.component.css */ "./src/app/admin/drivers/drivers.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [primeng_components_common_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"], src_app_service_api_service_service__WEBPACK_IMPORTED_MODULE_3__["ApiServiceService"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzModalService"]])
    ], DriversComponent);
    return DriversComponent;
}());



/***/ }),

/***/ "./src/app/admin/extra-component/checkbox-component/checkbox-component.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/admin/extra-component/checkbox-component/checkbox-component.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2V4dHJhLWNvbXBvbmVudC9jaGVja2JveC1jb21wb25lbnQvY2hlY2tib3gtY29tcG9uZW50LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/extra-component/checkbox-component/checkbox-component.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/admin/extra-component/checkbox-component/checkbox-component.component.ts ***!
  \******************************************************************************************/
/*! exports provided: CheckboxComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxComponentComponent", function() { return CheckboxComponentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CheckboxComponentComponent = /** @class */ (function () {
    function CheckboxComponentComponent() {
    }
    CheckboxComponentComponent.prototype.ngOnInit = function () {
    };
    CheckboxComponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-checkbox-component',
            template: __webpack_require__(/*! raw-loader!./checkbox-component.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/extra-component/checkbox-component/checkbox-component.component.html"),
            styles: [__webpack_require__(/*! ./checkbox-component.component.css */ "./src/app/admin/extra-component/checkbox-component/checkbox-component.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CheckboxComponentComponent);
    return CheckboxComponentComponent;
}());



/***/ }),

/***/ "./src/app/admin/news/news.component.css":
/*!***********************************************!*\
  !*** ./src/app/admin/news/news.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".addNewsForm {\n    background: #f2f2f2;\n    padding: 30px 20px;\n    border-radius: 5px;\n}\n\nlabel {\n    color: #777;\n    font-size: 12px;\n    text-transform: uppercase\n}\n\ntd img {\n  border-radius: 5px;\n}\n\nthead {\n  background: #f2f2f2;\n}\n\nng2-smart-table table {\n    line-height: 1.5em;\n    border-collapse: collapse;\n    border-spacing: 0;\n    display: table;\n    width: 100%;\n    max-width: 100%;\n    overflow: auto;\n    word-break: normal;\n    word-break: keep-all;\n    border: 1px solid #f2f2f2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vbmV3cy9uZXdzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2Y7QUFDSjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxXQUFXO0lBQ1gsZUFBZTtJQUNmLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLHlCQUF5QjtBQUM3QiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL25ld3MvbmV3cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFkZE5ld3NGb3JtIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xuICAgIHBhZGRpbmc6IDMwcHggMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbmxhYmVsIHtcbiAgICBjb2xvcjogIzc3NztcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZVxufVxuXG50ZCBpbWcge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbnRoZWFkIHtcbiAgYmFja2dyb3VuZDogI2YyZjJmMjtcbn1cblxubmcyLXNtYXJ0LXRhYmxlIHRhYmxlIHtcbiAgICBsaW5lLWhlaWdodDogMS41ZW07XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICBib3JkZXItc3BhY2luZzogMDtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgd29yZC1icmVhazogbm9ybWFsO1xuICAgIHdvcmQtYnJlYWs6IGtlZXAtYWxsO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmMmYyZjI7XG59Il19 */"

/***/ }),

/***/ "./src/app/admin/news/news.component.ts":
/*!**********************************************!*\
  !*** ./src/app/admin/news/news.component.ts ***!
  \**********************************************/
/*! exports provided: NewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsComponent", function() { return NewsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_components_common_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/components/common/api */ "./node_modules/primeng/components/common/api.js");
/* harmony import */ var primeng_components_common_api__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_components_common_api__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_service_api_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/api-service.service */ "./src/app/service/api-service.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");





var NewsComponent = /** @class */ (function () {
    function NewsComponent(messageService, api, modalService) {
        var _this = this;
        this.messageService = messageService;
        this.api = api;
        this.modalService = modalService;
        this.isSpinning = false;
        this.dataRow = [{ rowCounts: 10 }, { rowCounts: 20 }, { rowCounts: 50 }, { rowCounts: 100 }];
        this.rowCount = 10;
        this.headlineTitle = 'Enter News Headline';
        this.descriptionTitle = 'Enter News Description';
        this.newsSeriesID = null;
        this.showAddNewsForm = false;
        this.isLoadingTwo = false;
        this.addBtn = true;
        this.dataMsg = 'Please Wait while data is loading ...';
        this.settings = {
            columns: {
                id: {
                    title: 'S.No.',
                    editable: false,
                    filter: false,
                    sortDirection: 'desc',
                    width: '8%'
                },
                image_url: {
                    title: 'Image',
                    type: 'html',
                    filter: false,
                    valuePrepareFunction: function (value) { return "<img src=\"" + value + "\" width=\"80\" style=\"border-radius: 22px;\" />"; }
                },
                headline: {
                    title: 'Headline',
                    editor: {
                        type: 'textarea'
                    },
                    width: '15%'
                },
                author_id: {
                    title: 'Author',
                    editable: false,
                    type: 'html',
                    valuePrepareFunction: function (value) { return "" + value.name; }
                },
                series_id: {
                    title: 'Series',
                    editable: false,
                    type: 'html',
                    valuePrepareFunction: function (value) { return "" + value.name; }
                },
                trending: {
                    title: 'Trending',
                    type: 'html',
                    editable: false,
                    valuePrepareFunction: function (value) {
                        function showTrending() {
                            if (value === false) {
                                return 'NO';
                            }
                            else if (value === true) {
                                return 'YES';
                            }
                        }
                        return "" + showTrending();
                    }
                },
                top: {
                    title: 'Top_Story',
                    type: 'html',
                    editable: false,
                    valuePrepareFunction: function (value) {
                        function showTop() {
                            if (value === false) {
                                return 'NO';
                            }
                            else if (value === true) {
                                return 'YES';
                            }
                        }
                        return "" + showTop();
                    }
                },
                news_url: {
                    title: 'News_Url',
                    editable: false,
                    type: 'html',
                    valuePrepareFunction: function (value) { return "<a href=\"" + value + "\" target=\"_blank\">News_Link</a>"; },
                    filter: false
                },
                description: {
                    title: 'Description',
                    editor: {
                        type: 'textarea'
                    },
                    width: '40%'
                }
            },
            add: {
                addButtonContent: 'Add'
            },
            edit: {
                editButtonContent: '<img src="../../../assets/edit.png" class="mr-2" width="20"/>',
                saveButtonContent: '<img src="../../../assets/check-mark.png" class="mr-2" width="22"/>',
                cancelButtonContent: '<img src="../../../assets/close-cross.png" width="22"/>',
                confirmCreate: true,
                confirmSave: true,
            },
            delete: {
                deleteButtonContent: '<img src="../../../assets/delete.png" (click)="showConfirm()" width="20"/>',
                confirmDelete: true
            },
            actions: {
                position: 'right',
                custom: [
                    { name: 'trendNews', title: "<img data-toggle=\"tooltip\" data-placement=\"top\" title=\"Trending\" src=\"../../../assets/trending.png\" class=\"mr-2 mb-2\" width=\"20\"/>" },
                    { name: 'topStory', title: "<img data-toggle=\"tooltip\" data-placement=\"top\" title=\"Top Story\" src=\"../../../assets/top-story.png\" class=\"mr-2 mb-2\" width=\"20\"/>" }
                ]
            },
            pager: {
                display: true,
                perPage: 10
            },
            hideSubHeader: true
        };
        this.isSpinning = true;
        this.api.listNews().subscribe(function (resp) {
            if (resp.status === 200) {
                console.log(resp);
                _this.data = resp.body.results;
                _this.isSpinning = false;
            }
        }, function (error) {
            console.log(error);
            _this.isSpinning = false;
        });
        this.api.listSeries().subscribe(function (resp) {
            if (resp.status === 200) {
                console.log(resp);
                _this.seriesIDs = resp.body.results;
            }
        }, function (error) {
            console.log(error);
        });
        this.api.listAuthor().subscribe(function (resp) {
            if (resp.status === 200) {
                console.log(resp);
                _this.authorsIDs = resp.body.results;
            }
        }, function (error) {
            console.log(error);
        });
    }
    NewsComponent.prototype.ngOnInit = function () {
    };
    NewsComponent.prototype.onSaveConfirm = function (event) {
        var _this = this;
        var data = {
            author_id: event.newData.author_id.id,
            description: event.newData.description,
            headline: event.newData.headline,
            id: event.newData.id,
            image_url: event.newData.image_url,
            news_date: event.newData.news_date,
            news_time: event.newData.news_time,
            news_url: event.newData.news_url,
            series_id: event.newData.series_id.id
        };
        this.isSpinning = true;
        this.api.updateNews(event.newData.id, data).subscribe(function (resp) {
            if (resp.status === 200) {
                _this.isSpinning = false;
                event.confirm.resolve(_this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Updated Successfully' }));
            }
        }, function (error) {
            console.log(error);
            _this.isSpinning = false;
            event.confirm.reject(_this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong!' }));
        });
    };
    NewsComponent.prototype.showTrendingConfirm = function (event) {
        var _this = this;
        function showTrending() {
            if (event.data.trending === false) {
                return 'Do you really want make this news trending?';
            }
            else if (event.data.trending === true) {
                return 'Do you really want remove this news from trending?';
            }
        }
        this.modalService.confirm({
            nzTitle: 'Confirm',
            nzContent: showTrending(),
            nzOkText: 'OK',
            nzCancelText: 'Cancel',
            nzOkLoading: false,
            nzOnOk: function () {
                function toggleTrending() {
                    if (event.data.trending === false) {
                        return true;
                    }
                    else if (event.data.trending === true) {
                        return false;
                    }
                }
                var data = {
                    author_id: event.data.author_id.id,
                    description: event.data.description,
                    headline: event.data.headline,
                    id: event.data.id,
                    image_url: event.data.image_url,
                    news_date: event.data.news_date,
                    news_time: event.data.news_time,
                    news_url: event.data.news_url,
                    series_id: event.data.series_id.id,
                    trending: toggleTrending(),
                    top: event.data.top
                };
                _this.api.updateNews(event.data.id, data).subscribe(function (resp) {
                    if (resp.status === 200) {
                        _this.api.listNews().subscribe(
                        // tslint:disable-next-line: no-shadowed-variable
                        function (resp) {
                            if (resp.status === 200) {
                                console.log(resp);
                                _this.data = resp.body.results;
                                _this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Updated Successfully' });
                            }
                        }, function (error) {
                            console.log(error);
                        });
                    }
                }, function (error) {
                    console.log(error);
                    _this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong!' });
                });
            }
        });
    };
    NewsComponent.prototype.showTopStoryConfirm = function (event) {
        var _this = this;
        function showTop() {
            if (event.data.top === false) {
                return 'Do you really want make this news top story?';
            }
            else if (event.data.top === true) {
                return 'Do you really want remove this news from top story?';
            }
        }
        this.modalService.confirm({
            nzTitle: 'Confirm',
            nzContent: showTop(),
            nzOkText: 'OK',
            nzCancelText: 'Cancel',
            nzOkLoading: false,
            nzOnOk: function () {
                function toggleTop() {
                    if (event.data.top === false) {
                        return true;
                    }
                    else if (event.data.top === true) {
                        return false;
                    }
                }
                var data = {
                    author_id: event.data.author_id.id,
                    description: event.data.description,
                    headline: event.data.headline,
                    id: event.data.id,
                    image_url: event.data.image_url,
                    news_date: event.data.news_date,
                    news_time: event.data.news_time,
                    news_url: event.data.news_url,
                    series_id: event.data.series_id.id,
                    trending: event.data.trending,
                    top: toggleTop()
                };
                _this.api.updateNews(event.data.id, data).subscribe(function (resp) {
                    if (resp.status === 200) {
                        _this.api.listNews().subscribe(
                        // tslint:disable-next-line: no-shadowed-variable
                        function (resp) {
                            if (resp.status === 200) {
                                console.log(resp);
                                _this.data = resp.body.results;
                                _this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Updated Successfully' });
                            }
                        }, function (error) {
                            console.log(error);
                        });
                    }
                }, function (error) {
                    console.log(error);
                    _this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong!' });
                });
            }
        });
    };
    NewsComponent.prototype.customAction = function (event) {
        console.log(event);
        if (event.action === "trendNews") {
            this.showTrendingConfirm(event);
        }
        else if (event.action === "topStory") {
            this.showTopStoryConfirm(event);
        }
    };
    NewsComponent.prototype.showConfirm = function (event) {
        var _this = this;
        this.modalService.confirm({
            nzTitle: 'Confirm',
            nzContent: 'Do you really want to delete?',
            nzOkText: 'OK',
            nzCancelText: 'Cancel',
            nzOkLoading: false,
            nzOnOk: function () {
                _this.api.deleteNews(event.data.id).subscribe(function (resp) {
                    console.log(resp);
                    if (resp.status === 204) {
                        console.log(resp);
                        event.confirm.resolve(_this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Deleted Successfully' }));
                    }
                }, function (error) {
                    console.log(error);
                    event.confirm.reject(_this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong!' }));
                });
            }
        });
    };
    NewsComponent.prototype.onDeleteConfirm = function (event) {
        console.log(event);
        this.showConfirm(event);
    };
    NewsComponent.prototype.onEditRow = function (event) {
        console.log('Editing');
    };
    NewsComponent.prototype.onHeadlineChange = function (value) {
        this.updateValue(value);
    };
    NewsComponent.prototype.onDescriptionChange = function (value) {
        this.updateDescValue(value);
    };
    NewsComponent.prototype.updateDescValue = function (value) {
        this.newsDescription = value;
        this.updateDesc();
    };
    NewsComponent.prototype.updateValue = function (value) {
        this.newsHeadline = value;
        this.updateTitle();
    };
    NewsComponent.prototype.updateDesc = function () {
        this.descriptionTitle = this.newsDescription;
    };
    NewsComponent.prototype.updateTitle = function () {
        this.headlineTitle = this.newsHeadline;
    };
    NewsComponent.prototype.addBtnClicked = function () {
        this.addBtn = false;
        this.showAddNewsForm = true;
    };
    NewsComponent.prototype.changeDate = function (date) {
        return new Date(date).toDateString();
    };
    NewsComponent.prototype.changeTime = function (time) {
        return new Date(time).toLocaleTimeString();
    };
    NewsComponent.prototype.publishNews = function () {
        var _this = this;
        var newsData = {
            headline: this.newsHeadline,
            description: this.newsDescription,
            author_id: this.newsAuthor,
            news_date: this.changeDate(this.newsDate),
            news_time: this.changeTime(this.newsTime),
            image_url: this.newsImgUrl,
            news_url: this.newsUrl,
            series_id: this.newsSeriesID
        };
        this.isLoadingTwo = true;
        console.log(newsData);
        this.api.addNews(newsData).subscribe(function (resp) {
            console.log(resp);
            if (resp.status === 201) {
                _this.api.listNews().subscribe(function (resp) {
                    if (resp.status === 200) {
                        console.log(resp);
                        _this.data = resp.body.results;
                        _this.isLoadingTwo = false;
                        _this.addBtn = true;
                        _this.showAddNewsForm = false;
                        _this.messageService.add({ severity: 'success', summary: 'Congratulations', detail: 'News published successfully!' });
                    }
                }, function (error) {
                    console.log(error);
                });
            }
        }, function (error) {
            console.log(error);
            _this.isLoadingTwo = false;
            _this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong. Please try after sometime.' });
        });
    };
    NewsComponent.prototype.addNewsCancel = function () {
        this.addBtn = true;
        this.showAddNewsForm = false;
    };
    NewsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-news',
            template: __webpack_require__(/*! raw-loader!./news.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/news/news.component.html"),
            styles: [__webpack_require__(/*! ./news.component.css */ "./src/app/admin/news/news.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [primeng_components_common_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"], src_app_service_api_service_service__WEBPACK_IMPORTED_MODULE_3__["ApiServiceService"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzModalService"]])
    ], NewsComponent);
    return NewsComponent;
}());



/***/ }),

/***/ "./src/app/admin/series/series.component.css":
/*!***************************************************!*\
  !*** ./src/app/admin/series/series.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".addNewsForm {\n    background: #f2f2f2;\n    padding: 30px 20px;\n    border-radius: 5px;\n}\n\nlabel {\n    color: #777;\n    font-size: 12px;\n    text-transform: uppercase\n}\n\ntd img {\n  border-radius: 5px;\n}\n\nthead {\n  background: #f2f2f2;\n}\n\nng2-smart-table table {\n    line-height: 1.5em;\n    border-collapse: collapse;\n    border-spacing: 0;\n    display: table;\n    width: 100%;\n    max-width: 100%;\n    overflow: auto;\n    word-break: normal;\n    word-break: keep-all;\n    border: 1px solid #f2f2f2;\n}\n\n.avatar {\n  width: 128px;\n  height: 128px;\n}\n\n.upload-icon {\n  font-size: 32px;\n  color: #999;\n}\n\n.ant-upload-text {\n  margin-top: 8px;\n  color: #666;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vc2VyaWVzL3Nlcmllcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZUFBZTtJQUNmO0FBQ0o7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsV0FBVztJQUNYLGVBQWU7SUFDZixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQix5QkFBeUI7QUFDN0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUNBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7QUFDYjs7QUFDQTtFQUNFLGVBQWU7RUFDZixXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9zZXJpZXMvc2VyaWVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRkTmV3c0Zvcm0ge1xuICAgIGJhY2tncm91bmQ6ICNmMmYyZjI7XG4gICAgcGFkZGluZzogMzBweCAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxubGFiZWwge1xuICAgIGNvbG9yOiAjNzc3O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlXG59XG5cbnRkIGltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxudGhlYWQge1xuICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xufVxuXG5uZzItc21hcnQtdGFibGUgdGFibGUge1xuICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xuICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICB3b3JkLWJyZWFrOiBub3JtYWw7XG4gICAgd29yZC1icmVhazoga2VlcC1hbGw7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2YyZjJmMjtcbn1cblxuLmF2YXRhciB7XG4gIHdpZHRoOiAxMjhweDtcbiAgaGVpZ2h0OiAxMjhweDtcbn1cbi51cGxvYWQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgY29sb3I6ICM5OTk7XG59XG4uYW50LXVwbG9hZC10ZXh0IHtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBjb2xvcjogIzY2Njtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/admin/series/series.component.ts":
/*!**************************************************!*\
  !*** ./src/app/admin/series/series.component.ts ***!
  \**************************************************/
/*! exports provided: SeriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeriesComponent", function() { return SeriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_components_common_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/components/common/api */ "./node_modules/primeng/components/common/api.js");
/* harmony import */ var primeng_components_common_api__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_components_common_api__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_service_api_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/api-service.service */ "./src/app/service/api-service.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");





var SeriesComponent = /** @class */ (function () {
    // tslint:disable-next-line: max-line-length
    function SeriesComponent(messageService, api, msg, modalService) {
        var _this = this;
        this.messageService = messageService;
        this.api = api;
        this.msg = msg;
        this.modalService = modalService;
        this.isSpinning = false;
        this.isVisible = false;
        this.loading = false;
        this.showAddSeriesForm = false;
        this.isLoadingTwo = false;
        this.addBtn = true;
        this.dataMsg = 'Please Wait while data is loading ...';
        this.settings = {
            columns: {
                id: {
                    title: 'S.No.',
                    sortDirection: 'desc',
                },
                image_url: {
                    title: 'Image',
                    type: 'html',
                    valuePrepareFunction: function (value) { return "<img src=\"" + value + "\" width=\"80\" style=\"border-radius: 22px;\" />"; },
                },
                name: {
                    title: 'Name'
                },
            },
            add: {
                addButtonContent: 'Add',
                confirmCreate: true
            },
            edit: {
                editButtonContent: '<img src="../../../assets/edit.png" class="mr-2" width="20"/>',
                saveButtonContent: '<img src="../../../assets/check-mark.png" class="mr-2" width="22"/>',
                cancelButtonContent: '<img src="../../../assets/close-cross.png" width="22"/>',
                confirmCreate: true,
                confirmSave: true,
            },
            delete: {
                deleteButtonContent: '<img src="../../../assets/delete.png" width="20"/>',
                confirmDelete: true
            },
            actions: {
                position: 'right'
            },
            pager: {
                display: true,
                perPage: 15
            },
            hideSubHeader: true,
            mode: 'external'
        };
        this.isSpinning = true;
        this.api.listSeries().subscribe(function (resp) {
            if (resp.status === 200) {
                console.log(resp);
                _this.data = resp.body.results;
                _this.isSpinning = false;
            }
        }, function (error) {
            _this.isSpinning = false;
            console.log(error);
        });
    }
    SeriesComponent.prototype.getBase64 = function (img, callback) {
        var reader = new FileReader();
        // tslint:disable-next-line: no-non-null-assertion
        reader.addEventListener('load', function () { return callback(reader.result.toString()); });
        reader.readAsDataURL(img);
    };
    SeriesComponent.prototype.handleChange = function (info) {
        var _this = this;
        // tslint:disable-next-line: no-non-null-assertion
        this.getBase64(info.file.originFileObj, function (img) {
            _this.loading = false;
            _this.avatarUrl = img;
            // tslint:disable-next-line: no-non-null-assertion
            _this.avatarFile = info.file.originFileObj;
            // tslint:disable-next-line: no-non-null-assertion
            _this.avatarFileName = info.file.name;
            // tslint:disable-next-line: no-non-null-assertion
            console.log(info.file);
        });
    };
    SeriesComponent.prototype.ngOnInit = function () {
    };
    SeriesComponent.prototype.showConfirm = function (event) {
        var _this = this;
        this.modalService.confirm({
            nzTitle: 'Confirm',
            nzContent: 'Do you really want to delete?',
            nzOkText: 'OK',
            nzCancelText: 'Cancel',
            nzOkLoading: false,
            nzOnOk: function () {
                _this.api.deleteSeries(event.data.id).subscribe(function (resp) {
                    console.log(resp);
                    if (resp.status === 204) {
                        _this.api.listSeries().subscribe(
                        // tslint:disable-next-line: no-shadowed-variable
                        function (resp) {
                            if (resp.status === 200) {
                                console.log(resp);
                                _this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Deleted Successfully' });
                                _this.data = resp.body.results;
                            }
                        }, function (error) {
                            console.log(error);
                        });
                    }
                }, function (error) {
                    console.log(error);
                    _this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong!' });
                });
            }
        });
    };
    SeriesComponent.prototype.seriesDelete = function (event) {
        this.showConfirm(event);
    };
    SeriesComponent.prototype.showModal = function () {
        this.isVisible = true;
    };
    SeriesComponent.prototype.handleOk = function () {
        var _this = this;
        var formData = new FormData();
        formData.append('image_url', this.avatarFile);
        formData.append('name', this.name);
        formData.append('id', this.authorID);
        this.api.updateSeries(this.authorID, formData).subscribe(function (resp) {
            console.log(resp);
            if (resp.status === 200) {
                _this.api.listSeries().subscribe(
                // tslint:disable-next-line: no-shadowed-variable
                function (resp) {
                    if (resp.status === 200) {
                        _this.data = resp.body.results;
                        _this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Updated Successfully' });
                        _this.addNewsCancel();
                        _this.handleCancel();
                    }
                }, function (error) {
                    console.log(error);
                });
            }
        }, function (error) {
            console.log(error);
            _this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong!' });
        });
    };
    SeriesComponent.prototype.handleCancel = function () {
        this.isVisible = false;
        this.addNewsCancel();
    };
    SeriesComponent.prototype.onEditRow = function (event) {
        this.showModal();
        console.log(event);
        this.name = event.data.name;
        this.avatarUrl = event.data.image_url;
        this.authorID = event.data.id;
    };
    SeriesComponent.prototype.addBtnClicked = function () {
        this.addBtn = false;
        this.showAddSeriesForm = true;
    };
    SeriesComponent.prototype.publishSeries = function () {
        var _this = this;
        var formData = new FormData();
        formData.append('image_url', this.avatarFile);
        formData.append('name', this.name);
        formData.append('event_url', this.event_url);
        formData.append('team_url', this.team_url);
        formData.append('driver_url', this.driver_url);
        formData.append('leader_url', this.leader_url);
        this.isLoadingTwo = true;
        this.api.addSeries(formData).subscribe(function (resp) {
            console.log(resp);
            if (resp.status === 201) {
                _this.api.listSeries().subscribe(
                // tslint:disable-next-line: no-shadowed-variable
                function (resp) {
                    if (resp.status === 200) {
                        _this.data = resp.body.results;
                        _this.isLoadingTwo = false;
                        _this.addBtn = true;
                        _this.showAddSeriesForm = false;
                        _this.messageService.add({ severity: 'success', summary: 'Congratulations', detail: 'Series added successfully!' });
                    }
                }, function (error) {
                    console.log(error);
                });
            }
        }, function (error) {
            console.log(error);
            _this.isLoadingTwo = false;
            _this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong. Please try after sometime.' });
        });
    };
    SeriesComponent.prototype.addNewsCancel = function () {
        this.addBtn = true;
        this.showAddSeriesForm = false;
        this.name = '';
        this.avatarUrl = '';
    };
    SeriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-series',
            template: __webpack_require__(/*! raw-loader!./series.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/series/series.component.html"),
            styles: [__webpack_require__(/*! ./series.component.css */ "./src/app/admin/series/series.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [primeng_components_common_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"], src_app_service_api_service_service__WEBPACK_IMPORTED_MODULE_3__["ApiServiceService"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzModalService"]])
    ], SeriesComponent);
    return SeriesComponent;
}());



/***/ }),

/***/ "./src/app/admin/tiles/audio-tiles/audio-tiles.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/admin/tiles/audio-tiles/audio-tiles.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".addNewsForm {\n    background: #f2f2f2;\n    padding: 30px 20px;\n    border-radius: 5px;\n}\n\nlabel {\n    color: #777;\n    font-size: 12px;\n    text-transform: uppercase\n}\n\ntd img {\n  border-radius: 5px;\n}\n\nthead {\n  background: #f2f2f2;\n}\n\nng2-smart-table table {\n    line-height: 1.5em;\n    border-collapse: collapse;\n    border-spacing: 0;\n    display: table;\n    width: 100%;\n    max-width: 100%;\n    overflow: auto;\n    word-break: normal;\n    word-break: keep-all;\n    border: 1px solid #f2f2f2;\n}\n\n.avatar {\n  width: 128px;\n  height: 128px;\n}\n\n.upload-icon {\n  font-size: 32px;\n  color: #999;\n}\n\n.ant-upload-text {\n  margin-top: 8px;\n  color: #666;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vdGlsZXMvYXVkaW8tdGlsZXMvYXVkaW8tdGlsZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGVBQWU7SUFDZjtBQUNKOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsY0FBYztJQUNkLFdBQVc7SUFDWCxlQUFlO0lBQ2YsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIseUJBQXlCO0FBQzdCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFDQTtFQUNFLGVBQWU7RUFDZixXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxlQUFlO0VBQ2YsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vdGlsZXMvYXVkaW8tdGlsZXMvYXVkaW8tdGlsZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZGROZXdzRm9ybSB7XG4gICAgYmFja2dyb3VuZDogI2YyZjJmMjtcbiAgICBwYWRkaW5nOiAzMHB4IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG5sYWJlbCB7XG4gICAgY29sb3I6ICM3Nzc7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2Vcbn1cblxudGQgaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG50aGVhZCB7XG4gIGJhY2tncm91bmQ6ICNmMmYyZjI7XG59XG5cbm5nMi1zbWFydC10YWJsZSB0YWJsZSB7XG4gICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gICAgZGlzcGxheTogdGFibGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIHdvcmQtYnJlYWs6IG5vcm1hbDtcbiAgICB3b3JkLWJyZWFrOiBrZWVwLWFsbDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjJmMmYyO1xufVxuXG4uYXZhdGFyIHtcbiAgd2lkdGg6IDEyOHB4O1xuICBoZWlnaHQ6IDEyOHB4O1xufVxuLnVwbG9hZC1pY29uIHtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBjb2xvcjogIzk5OTtcbn1cbi5hbnQtdXBsb2FkLXRleHQge1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIGNvbG9yOiAjNjY2O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/admin/tiles/audio-tiles/audio-tiles.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/admin/tiles/audio-tiles/audio-tiles.component.ts ***!
  \******************************************************************/
/*! exports provided: AudioTilesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioTilesComponent", function() { return AudioTilesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_components_common_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/components/common/api */ "./node_modules/primeng/components/common/api.js");
/* harmony import */ var primeng_components_common_api__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_components_common_api__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_service_api_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/api-service.service */ "./src/app/service/api-service.service.ts");




var AudioTilesComponent = /** @class */ (function () {
    function AudioTilesComponent(messageService, api) {
        var _this = this;
        this.messageService = messageService;
        this.api = api;
        this.isSpinning = false;
        this.checked = false;
        this.loading = false;
        this.showAddNewsForm = false;
        this.isLoadingTwo = false;
        this.addBtn = true;
        this.dataMsg = 'Please Wait while data is loading ...';
        this.settings = {
            columns: {
                id: {
                    title: 'S.No.',
                    editable: false,
                    filter: false,
                    sortDirection: 'desc',
                    width: '8%'
                },
                image_url: {
                    title: 'Image',
                    type: 'html',
                    filter: false,
                    valuePrepareFunction: function (value) { return "<img src=\"" + value + "\" width=\"80\" style=\"border-radius: 22px;\" />"; }
                },
                name: {
                    title: 'Name',
                    editor: {
                        type: 'textarea'
                    }
                },
                url: {
                    title: 'Url',
                    editable: true,
                    type: 'html',
                    valuePrepareFunction: function (value) { return "<a href=\"" + value + "\" target=\"_blank\">Url</a>"; },
                    filter: false
                },
                main: {
                    title: 'Main',
                    editable: true,
                    type: 'text',
                    defaultValue: false,
                    editor: {
                        type: 'checkbox'
                    }
                }
            },
            add: {
                addButtonContent: 'Add',
                confirmCreate: true
            },
            edit: {
                editButtonContent: '<img src="../../../assets/edit.png" width="20"/>',
                saveButtonContent: '<img src="../../../assets/check-mark.png" width="22"/>',
                cancelButtonContent: '<img src="../../../assets/close-cross.png" width="22"/>',
                confirmCreate: true,
                confirmSave: true,
            },
            delete: {
                deleteButtonContent: '<img src="../../../assets/delete.png" width="20"/>',
                confirmDelete: true
            },
            actions: {
                position: 'right'
            },
            pager: {
                display: true,
                perPage: 10
            },
            hideSubHeader: true
        };
        this.isSpinning = true;
        this.api.listAudioTiles().subscribe(function (resp) {
            console.log(resp);
            if (resp.status === 200) {
                _this.data = resp.body.results;
                _this.isSpinning = false;
            }
        }, function (error) {
            console.log(error);
            _this.isSpinning = false;
        });
    }
    AudioTilesComponent.prototype.getBase64 = function (img, callback) {
        var reader = new FileReader();
        reader.addEventListener('load', function () { return callback(reader.result.toString()); });
        reader.readAsDataURL(img);
    };
    AudioTilesComponent.prototype.handleChange = function (info) {
        var _this = this;
        this.getBase64(info.file.originFileObj, function (img) {
            _this.loading = false;
            _this.avatarUrl = img;
            _this.avatarFile = info.file.originFileObj;
            _this.avatarFileName = info.file.name;
            console.log(_this.avatarFile);
        });
    };
    AudioTilesComponent.prototype.ngOnInit = function () {
    };
    AudioTilesComponent.prototype.onSaveConfirm = function (event) {
        var _this = this;
        var data = {
            name: event.newData.name,
            id: event.newData.id,
            image_url: event.newData.image_url,
            url: event.newData.url,
            main: event.newData.main
        };
        console.log(event);
        this.api.updateAudioTiles(event.newData.id, data).subscribe(function (resp) {
            console.log(resp);
            if (resp.status === 200) {
                event.confirm.resolve(_this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Updated Successfully' }));
            }
        }, function (error) {
            console.log(error);
            event.confirm.reject(_this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong!' }));
        });
    };
    AudioTilesComponent.prototype.onDeleteConfirm = function (event) {
        var _this = this;
        this.api.deleteAudioTiles(event.data.id).subscribe(function (resp) {
            console.log(resp);
            if (resp.status === 204) {
                event.confirm.resolve(_this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Updated Successfully' }));
            }
        }, function (error) {
            console.log(error);
            event.confirm.reject(_this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong!' }));
        });
    };
    AudioTilesComponent.prototype.onCreateConfirm = function (event) {
    };
    AudioTilesComponent.prototype.onEditRow = function (event) {
        console.log('Editing');
    };
    AudioTilesComponent.prototype.addBtnClicked = function () {
        this.addBtn = false;
        this.showAddNewsForm = true;
    };
    AudioTilesComponent.prototype.publishAudio = function () {
        var _this = this;
        var formData = new FormData();
        formData.append('image_url', this.avatarFile);
        formData.append('name', this.name);
        formData.append('url', this.url);
        formData.append('main', this.checked);
        this.isLoadingTwo = true;
        console.log(formData);
        this.api.addAudioTiles(formData).subscribe(function (resp) {
            console.log(resp);
            if (resp.status === 201) {
                _this.api.listAudioTiles().subscribe(function (resp) {
                    console.log(resp);
                    if (resp.status === 200) {
                        _this.data = resp.body.results;
                        _this.isLoadingTwo = false;
                        _this.addBtn = true;
                        _this.showAddNewsForm = false;
                        _this.messageService.add({ severity: 'success', summary: 'Congratulations', detail: 'Audio published successfully!' });
                    }
                }, function (error) {
                    console.log(error);
                });
            }
        }, function (error) {
            console.log(error);
            _this.isLoadingTwo = false;
            _this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong. Please try after sometime.' });
        });
    };
    AudioTilesComponent.prototype.addNewsCancel = function () {
        this.addBtn = true;
        this.showAddNewsForm = false;
    };
    AudioTilesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-audio-tiles',
            template: __webpack_require__(/*! raw-loader!./audio-tiles.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/tiles/audio-tiles/audio-tiles.component.html"),
            styles: [__webpack_require__(/*! ./audio-tiles.component.css */ "./src/app/admin/tiles/audio-tiles/audio-tiles.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [primeng_components_common_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"], src_app_service_api_service_service__WEBPACK_IMPORTED_MODULE_3__["ApiServiceService"]])
    ], AudioTilesComponent);
    return AudioTilesComponent;
}());



/***/ }),

/***/ "./src/app/admin/tiles/vidoes-tiles/vidoes-tiles.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/admin/tiles/vidoes-tiles/vidoes-tiles.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".addNewsForm {\n    background: #f2f2f2;\n    padding: 30px 20px;\n    border-radius: 5px;\n}\n\nlabel {\n    color: #777;\n    font-size: 12px;\n    text-transform: uppercase\n}\n\ntd img {\n  border-radius: 5px;\n}\n\nthead {\n  background: #f2f2f2;\n}\n\nng2-smart-table table {\n    line-height: 1.5em;\n    border-collapse: collapse;\n    border-spacing: 0;\n    display: table;\n    width: 100%;\n    max-width: 100%;\n    overflow: auto;\n    word-break: normal;\n    word-break: keep-all;\n    border: 1px solid #f2f2f2;\n}\n\n.avatar {\n  width: 128px;\n  height: 128px;\n}\n\n.upload-icon {\n  font-size: 32px;\n  color: #999;\n}\n\n.ant-upload-text {\n  margin-top: 8px;\n  color: #666;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vdGlsZXMvdmlkb2VzLXRpbGVzL3ZpZG9lcy10aWxlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZUFBZTtJQUNmO0FBQ0o7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsV0FBVztJQUNYLGVBQWU7SUFDZixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQix5QkFBeUI7QUFDN0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUNBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7QUFDYjs7QUFDQTtFQUNFLGVBQWU7RUFDZixXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi90aWxlcy92aWRvZXMtdGlsZXMvdmlkb2VzLXRpbGVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRkTmV3c0Zvcm0ge1xuICAgIGJhY2tncm91bmQ6ICNmMmYyZjI7XG4gICAgcGFkZGluZzogMzBweCAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxubGFiZWwge1xuICAgIGNvbG9yOiAjNzc3O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlXG59XG5cbnRkIGltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxudGhlYWQge1xuICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xufVxuXG5uZzItc21hcnQtdGFibGUgdGFibGUge1xuICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xuICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICB3b3JkLWJyZWFrOiBub3JtYWw7XG4gICAgd29yZC1icmVhazoga2VlcC1hbGw7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2YyZjJmMjtcbn1cblxuLmF2YXRhciB7XG4gIHdpZHRoOiAxMjhweDtcbiAgaGVpZ2h0OiAxMjhweDtcbn1cbi51cGxvYWQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgY29sb3I6ICM5OTk7XG59XG4uYW50LXVwbG9hZC10ZXh0IHtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBjb2xvcjogIzY2Njtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/admin/tiles/vidoes-tiles/vidoes-tiles.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/admin/tiles/vidoes-tiles/vidoes-tiles.component.ts ***!
  \********************************************************************/
/*! exports provided: VidoesTilesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VidoesTilesComponent", function() { return VidoesTilesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_components_common_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/components/common/api */ "./node_modules/primeng/components/common/api.js");
/* harmony import */ var primeng_components_common_api__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_components_common_api__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_service_api_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/api-service.service */ "./src/app/service/api-service.service.ts");




var VidoesTilesComponent = /** @class */ (function () {
    function VidoesTilesComponent(messageService, api) {
        var _this = this;
        this.messageService = messageService;
        this.api = api;
        this.isSpinning = false;
        this.checked = false;
        this.loading = false;
        this.showAddNewsForm = false;
        this.isLoadingTwo = false;
        this.addBtn = true;
        this.dataMsg = 'Please Wait while data is loading ...';
        this.settings = {
            columns: {
                id: {
                    title: 'S.No.',
                    editable: false,
                    filter: false,
                    sortDirection: 'desc',
                    width: '8%'
                },
                image_url: {
                    title: 'Image',
                    type: 'html',
                    filter: false,
                    valuePrepareFunction: function (value) { return "<img src=\"" + value + "\" width=\"80\" style=\"border-radius: 22px;\" />"; }
                },
                name: {
                    title: 'Name',
                    editor: {
                        type: 'textarea'
                    }
                },
                url: {
                    title: 'Url',
                    editable: true,
                    type: 'html',
                    valuePrepareFunction: function (value) { return "<a href=\"" + value + "\" target=\"_blank\">Url</a>"; },
                    filter: false
                },
                main: {
                    title: 'Main',
                    editable: true,
                    type: 'text',
                    defaultValue: false,
                    editor: {
                        type: 'checkbox'
                    }
                }
            },
            add: {
                addButtonContent: 'Add',
                confirmCreate: true
            },
            edit: {
                editButtonContent: '<img src="../../../assets/edit.png" width="20"/>',
                saveButtonContent: '<img src="../../../assets/check-mark.png" width="22"/>',
                cancelButtonContent: '<img src="../../../assets/close-cross.png" width="22"/>',
                confirmCreate: true,
                confirmSave: true,
            },
            delete: {
                deleteButtonContent: '<img src="../../../assets/delete.png" width="20"/>',
                confirmDelete: true
            },
            actions: {
                position: 'right'
            },
            pager: {
                display: true,
                perPage: 10
            },
            hideSubHeader: true
        };
        this.isSpinning = true;
        this.api.listVideoTiles().subscribe(function (resp) {
            console.log(resp);
            if (resp.status === 200) {
                _this.data = resp.body.results;
                _this.isSpinning = false;
            }
        }, function (error) {
            console.log(error);
            _this.isSpinning = false;
        });
    }
    VidoesTilesComponent.prototype.getBase64 = function (img, callback) {
        var reader = new FileReader();
        reader.addEventListener('load', function () { return callback(reader.result.toString()); });
        reader.readAsDataURL(img);
    };
    VidoesTilesComponent.prototype.handleChange = function (info) {
        var _this = this;
        this.getBase64(info.file.originFileObj, function (img) {
            _this.loading = false;
            _this.avatarUrl = img;
            _this.avatarFile = info.file.originFileObj;
            _this.avatarFileName = info.file.name;
            console.log(_this.avatarFile);
        });
    };
    VidoesTilesComponent.prototype.ngOnInit = function () {
    };
    VidoesTilesComponent.prototype.onSaveConfirm = function (event) {
        var _this = this;
        var data = {
            name: event.newData.name,
            id: event.newData.id,
            image_url: event.newData.image_url,
            url: event.newData.url,
            main: event.newData.main
        };
        this.api.updateVideoTiles(event.newData.id, data).subscribe(function (resp) {
            console.log(resp);
            if (resp.status === 200) {
                event.confirm.resolve(_this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Updated Successfully' }));
            }
        }, function (error) {
            console.log(error);
            event.confirm.reject(_this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong!' }));
        });
    };
    VidoesTilesComponent.prototype.onDeleteConfirm = function (event) {
        var _this = this;
        this.api.deleteVideoTiles(event.data.id).subscribe(function (resp) {
            console.log(resp);
            if (resp.status === 204) {
                event.confirm.resolve(_this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Updated Successfully' }));
            }
        }, function (error) {
            console.log(error);
            event.confirm.reject(_this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong!' }));
        });
    };
    VidoesTilesComponent.prototype.onCreateConfirm = function (event) {
    };
    VidoesTilesComponent.prototype.onEditRow = function (event) {
        console.log('Editing');
    };
    VidoesTilesComponent.prototype.addBtnClicked = function () {
        this.addBtn = false;
        this.showAddNewsForm = true;
    };
    VidoesTilesComponent.prototype.publishVideo = function () {
        var _this = this;
        var formData = new FormData();
        formData.append('image_url', this.avatarFile);
        formData.append('name', this.name);
        formData.append('url', this.url);
        formData.append('main', this.checked);
        this.isLoadingTwo = true;
        console.log(formData);
        this.api.addVideoTiles(formData).subscribe(function (resp) {
            console.log(resp);
            if (resp.status === 201) {
                _this.api.listVideoTiles().subscribe(function (resp) {
                    console.log(resp);
                    if (resp.status === 200) {
                        _this.data = resp.body.results;
                        _this.isLoadingTwo = false;
                        _this.addBtn = true;
                        _this.showAddNewsForm = false;
                        _this.messageService.add({ severity: 'success', summary: 'Congratulations', detail: 'Video published successfully!' });
                    }
                }, function (error) {
                    console.log(error);
                });
            }
        }, function (error) {
            console.log(error);
            _this.isLoadingTwo = false;
            _this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong. Please try after sometime.' });
        });
    };
    VidoesTilesComponent.prototype.addNewsCancel = function () {
        this.addBtn = true;
        this.showAddNewsForm = false;
    };
    VidoesTilesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vidoes-tiles',
            template: __webpack_require__(/*! raw-loader!./vidoes-tiles.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/tiles/vidoes-tiles/vidoes-tiles.component.html"),
            styles: [__webpack_require__(/*! ./vidoes-tiles.component.css */ "./src/app/admin/tiles/vidoes-tiles/vidoes-tiles.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [primeng_components_common_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"], src_app_service_api_service_service__WEBPACK_IMPORTED_MODULE_3__["ApiServiceService"]])
    ], VidoesTilesComponent);
    return VidoesTilesComponent;
}());



/***/ }),

/***/ "./src/app/admin/vidoes/vidoes.component.css":
/*!***************************************************!*\
  !*** ./src/app/admin/vidoes/vidoes.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".addNewsForm {\n    background: #f2f2f2;\n    padding: 30px 20px;\n    border-radius: 5px;\n}\n\nlabel {\n    color: #777;\n    font-size: 12px;\n    text-transform: uppercase\n}\n\ntd img {\n  border-radius: 5px;\n}\n\nthead {\n  background: #f2f2f2;\n}\n\nng2-smart-table table {\n    line-height: 1.5em;\n    border-collapse: collapse;\n    border-spacing: 0;\n    display: table;\n    width: 100%;\n    max-width: 100%;\n    overflow: auto;\n    word-break: normal;\n    word-break: keep-all;\n    border: 1px solid #f2f2f2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vdmlkb2VzL3ZpZG9lcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZUFBZTtJQUNmO0FBQ0o7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsV0FBVztJQUNYLGVBQWU7SUFDZixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQix5QkFBeUI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi92aWRvZXMvdmlkb2VzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRkTmV3c0Zvcm0ge1xuICAgIGJhY2tncm91bmQ6ICNmMmYyZjI7XG4gICAgcGFkZGluZzogMzBweCAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxubGFiZWwge1xuICAgIGNvbG9yOiAjNzc3O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlXG59XG5cbnRkIGltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxudGhlYWQge1xuICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xufVxuXG5uZzItc21hcnQtdGFibGUgdGFibGUge1xuICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xuICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICB3b3JkLWJyZWFrOiBub3JtYWw7XG4gICAgd29yZC1icmVhazoga2VlcC1hbGw7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2YyZjJmMjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/admin/vidoes/vidoes.component.ts":
/*!**************************************************!*\
  !*** ./src/app/admin/vidoes/vidoes.component.ts ***!
  \**************************************************/
/*! exports provided: VidoesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VidoesComponent", function() { return VidoesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_components_common_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/components/common/api */ "./node_modules/primeng/components/common/api.js");
/* harmony import */ var primeng_components_common_api__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_components_common_api__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_service_api_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/api-service.service */ "./src/app/service/api-service.service.ts");




var VidoesComponent = /** @class */ (function () {
    function VidoesComponent(messageService, api) {
        var _this = this;
        this.messageService = messageService;
        this.api = api;
        this.isSpinning = false;
        this.headlineTitle = 'Enter News Headline';
        this.descriptionTitle = 'Enter News Description';
        this.seriesID = null;
        this.showAddNewsForm = false;
        this.isLoadingTwo = false;
        this.addBtn = true;
        this.dataMsg = 'Please Wait while data is loading ...';
        this.settings = {
            columns: {
                id: {
                    title: 'S.No.',
                    editable: false,
                    filter: false,
                    sortDirection: 'desc',
                    width: '8%'
                },
                image_url: {
                    title: 'Image',
                    type: 'html',
                    filter: false,
                    valuePrepareFunction: function (value) { return "<img src=\"" + value + "\" width=\"80\" style=\"border-radius: 22px;\" />"; }
                },
                headline: {
                    title: 'Headline',
                    editor: {
                        type: 'textarea'
                    }
                },
                series_id: {
                    title: 'Series',
                    editable: false,
                    type: 'html',
                    valuePrepareFunction: function (value) { return "" + value.name; }
                },
                author_id: {
                    title: 'Author',
                    editable: false,
                    type: 'html',
                    valuePrepareFunction: function (value) { return "" + value.name; }
                },
                url: {
                    title: 'Video Url',
                    editable: false,
                    type: 'html',
                    valuePrepareFunction: function (value) { return "<a href=\"" + value + "\" target=\"_blank\">Video_Link</a>"; },
                    filter: false
                },
                description: {
                    title: 'Description',
                    editor: {
                        type: 'textarea'
                    }
                },
                date: {
                    title: 'Date',
                    editable: false,
                    width: '9%'
                },
                time: {
                    title: 'Time',
                    editable: false,
                    width: '9%'
                }
            },
            add: {
                addButtonContent: 'Add',
                confirmCreate: true
            },
            edit: {
                editButtonContent: '<img src="../../../assets/edit.png" width="20"/>',
                saveButtonContent: '<img src="../../../assets/check-mark.png" width="22"/>',
                cancelButtonContent: '<img src="../../../assets/close-cross.png" width="22"/>',
                confirmCreate: true,
                confirmSave: true,
            },
            delete: {
                deleteButtonContent: '<img src="../../../assets/delete.png" width="20"/>',
                confirmDelete: true
            },
            actions: {
                position: 'right'
            },
            pager: {
                display: true,
                perPage: 10
            },
            hideSubHeader: true
        };
        this.isSpinning = true;
        this.api.listVidoes().subscribe(function (resp) {
            console.log(resp);
            if (resp.status === 200) {
                _this.data = resp.body.results;
                _this.isSpinning = false;
            }
        }, function (error) {
            console.log(error);
            _this.isSpinning = false;
        });
        this.api.listSeries().subscribe(function (resp) {
            if (resp.status === 200) {
                console.log(resp);
                _this.seriesIDs = resp.body.results;
            }
        }, function (error) {
            console.log(error);
        });
        this.api.listAuthor().subscribe(function (resp) {
            if (resp.status === 200) {
                console.log(resp);
                _this.authorsIDs = resp.body.results;
            }
        }, function (error) {
            console.log(error);
        });
    }
    VidoesComponent.prototype.ngOnInit = function () {
    };
    VidoesComponent.prototype.onSaveConfirm = function (event) {
        var _this = this;
        var data = {
            author_id: event.newData.author_id.id,
            description: event.newData.description,
            headline: event.newData.headline,
            id: event.newData.id,
            image_url: event.newData.image_url,
            date: event.newData.date,
            time: event.newData.time,
            news_url: event.newData.news_url,
            series_id: event.newData.series_id.id
        };
        this.api.updateVideo(event.newData.id, data).subscribe(function (resp) {
            console.log(resp);
            if (resp.status === 200) {
                event.confirm.resolve(_this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Updated Successfully' }));
            }
        }, function (error) {
            console.log(error);
            event.confirm.reject(_this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong!' }));
        });
    };
    VidoesComponent.prototype.onDeleteConfirm = function (event) {
        var _this = this;
        this.api.deleteVideo(event.data.id).subscribe(function (resp) {
            console.log(resp);
            if (resp.status === 204) {
                event.confirm.resolve(_this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Updated Successfully' }));
            }
        }, function (error) {
            console.log(error);
            event.confirm.reject(_this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong!' }));
        });
    };
    VidoesComponent.prototype.onCreateConfirm = function (event) {
    };
    VidoesComponent.prototype.onEditRow = function (event) {
        console.log('Editing');
    };
    VidoesComponent.prototype.onHeadlineChange = function (value) {
        this.updateValue(value);
    };
    VidoesComponent.prototype.onDescriptionChange = function (value) {
        this.updateDescValue(value);
    };
    VidoesComponent.prototype.updateDescValue = function (value) {
        this.videoDescription = value;
        this.updateDesc();
    };
    VidoesComponent.prototype.updateValue = function (value) {
        this.videoHeadline = value;
        this.updateTitle();
    };
    VidoesComponent.prototype.updateDesc = function () {
        this.descriptionTitle = this.videoDescription;
    };
    VidoesComponent.prototype.updateTitle = function () {
        this.headlineTitle = this.videoHeadline;
    };
    VidoesComponent.prototype.addBtnClicked = function () {
        this.addBtn = false;
        this.showAddNewsForm = true;
    };
    VidoesComponent.prototype.changeDate = function (date) {
        return new Date(date).toDateString();
    };
    VidoesComponent.prototype.changeTime = function (time) {
        return new Date(time).toLocaleTimeString();
    };
    VidoesComponent.prototype.publishVideo = function () {
        var _this = this;
        var data = {
            headline: this.videoHeadline,
            date: this.changeDate(this.videoDate),
            time: this.changeTime(this.videoTime),
            url: this.videoUrl,
            series_id: this.seriesID,
            image_url: this.videoImageUrl,
            description: this.videoDescription,
            author_id: this.videoAuthor
        };
        this.isLoadingTwo = true;
        console.log(data);
        this.api.addVideo(data).subscribe(function (resp) {
            console.log(resp);
            if (resp.status === 201) {
                _this.api.listVidoes().subscribe(function (resp) {
                    console.log(resp);
                    if (resp.status === 200) {
                        _this.data = resp.body.results;
                        _this.isLoadingTwo = false;
                        _this.addBtn = true;
                        _this.showAddNewsForm = false;
                        _this.messageService.add({ severity: 'success', summary: 'Congratulations', detail: 'Video published successfully!' });
                    }
                }, function (error) {
                    console.log(error);
                });
            }
        }, function (error) {
            console.log(error);
            _this.isLoadingTwo = false;
            _this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong. Please try after sometime.' });
        });
    };
    VidoesComponent.prototype.addNewsCancel = function () {
        this.addBtn = true;
        this.showAddNewsForm = false;
    };
    VidoesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vidoes',
            template: __webpack_require__(/*! raw-loader!./vidoes.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/vidoes/vidoes.component.html"),
            styles: [__webpack_require__(/*! ./vidoes.component.css */ "./src/app/admin/vidoes/vidoes.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [primeng_components_common_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"], src_app_service_api_service_service__WEBPACK_IMPORTED_MODULE_3__["ApiServiceService"]])
    ], VidoesComponent);
    return VidoesComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin/dashboard/dashboard.component */ "./src/app/admin/dashboard/dashboard.component.ts");
/* harmony import */ var _admin_news_news_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin/news/news.component */ "./src/app/admin/news/news.component.ts");
/* harmony import */ var _admin_series_series_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin/series/series.component */ "./src/app/admin/series/series.component.ts");
/* harmony import */ var _admin_vidoes_vidoes_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./admin/vidoes/vidoes.component */ "./src/app/admin/vidoes/vidoes.component.ts");
/* harmony import */ var _admin_audios_audios_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin/audios/audios.component */ "./src/app/admin/audios/audios.component.ts");
/* harmony import */ var _admin_author_author_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admin/author/author.component */ "./src/app/admin/author/author.component.ts");
/* harmony import */ var _admin_drivers_drivers_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./admin/drivers/drivers.component */ "./src/app/admin/drivers/drivers.component.ts");
/* harmony import */ var _admin_tiles_vidoes_tiles_vidoes_tiles_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./admin/tiles/vidoes-tiles/vidoes-tiles.component */ "./src/app/admin/tiles/vidoes-tiles/vidoes-tiles.component.ts");
/* harmony import */ var _admin_tiles_audio_tiles_audio_tiles_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./admin/tiles/audio-tiles/audio-tiles.component */ "./src/app/admin/tiles/audio-tiles/audio-tiles.component.ts");














var routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'admin', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_4__["AdminComponent"], children: [
            { path: '', redirectTo: '/admin/dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: _admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"] },
            { path: 'news', component: _admin_news_news_component__WEBPACK_IMPORTED_MODULE_6__["NewsComponent"] },
            { path: 'series', component: _admin_series_series_component__WEBPACK_IMPORTED_MODULE_7__["SeriesComponent"] },
            { path: 'vidoes', component: _admin_vidoes_vidoes_component__WEBPACK_IMPORTED_MODULE_8__["VidoesComponent"] },
            { path: 'audios', component: _admin_audios_audios_component__WEBPACK_IMPORTED_MODULE_9__["AudiosComponent"] },
            { path: 'author', component: _admin_author_author_component__WEBPACK_IMPORTED_MODULE_10__["AuthorComponent"] },
            { path: 'drivers', component: _admin_drivers_drivers_component__WEBPACK_IMPORTED_MODULE_11__["DriversComponent"] },
            { path: 'vidoes-tiles', component: _admin_tiles_vidoes_tiles_vidoes_tiles_component__WEBPACK_IMPORTED_MODULE_12__["VidoesTilesComponent"] },
            { path: 'audio-tiles', component: _admin_tiles_audio_tiles_audio_tiles_component__WEBPACK_IMPORTED_MODULE_13__["AudioTilesComponent"] },
        ] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"], useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'motorsports';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/toast.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_toast__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/messages */ "./node_modules/primeng/messages.js");
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_messages__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/message */ "./node_modules/primeng/message.js");
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_message__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/inputtextarea */ "./node_modules/primeng/inputtextarea.js");
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/components/common/messageservice */ "./node_modules/primeng/components/common/messageservice.js");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/calendar */ "./node_modules/primeng/calendar.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(primeng_calendar__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/fesm5/ng2-smart-table.js");
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd-checkbox.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./admin/dashboard/dashboard.component */ "./src/app/admin/dashboard/dashboard.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _admin_news_news_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./admin/news/news.component */ "./src/app/admin/news/news.component.ts");
/* harmony import */ var _service_api_service_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./service/api-service.service */ "./src/app/service/api-service.service.ts");
/* harmony import */ var _admin_series_series_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./admin/series/series.component */ "./src/app/admin/series/series.component.ts");
/* harmony import */ var _admin_vidoes_vidoes_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./admin/vidoes/vidoes.component */ "./src/app/admin/vidoes/vidoes.component.ts");
/* harmony import */ var _admin_audios_audios_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./admin/audios/audios.component */ "./src/app/admin/audios/audios.component.ts");
/* harmony import */ var _admin_author_author_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./admin/author/author.component */ "./src/app/admin/author/author.component.ts");
/* harmony import */ var _admin_drivers_drivers_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./admin/drivers/drivers.component */ "./src/app/admin/drivers/drivers.component.ts");
/* harmony import */ var _admin_tiles_vidoes_tiles_vidoes_tiles_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./admin/tiles/vidoes-tiles/vidoes-tiles.component */ "./src/app/admin/tiles/vidoes-tiles/vidoes-tiles.component.ts");
/* harmony import */ var _admin_tiles_audio_tiles_audio_tiles_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./admin/tiles/audio-tiles/audio-tiles.component */ "./src/app/admin/tiles/audio-tiles/audio-tiles.component.ts");
/* harmony import */ var _admin_extra_component_checkbox_component_checkbox_component_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./admin/extra-component/checkbox-component/checkbox-component.component */ "./src/app/admin/extra-component/checkbox-component/checkbox-component.component.ts");







// Prime NG








// Others Import



// Components














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_18__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_19__["LoginComponent"],
                _admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_20__["DashboardComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_21__["AdminComponent"],
                _admin_news_news_component__WEBPACK_IMPORTED_MODULE_22__["NewsComponent"],
                _admin_series_series_component__WEBPACK_IMPORTED_MODULE_24__["SeriesComponent"],
                _admin_vidoes_vidoes_component__WEBPACK_IMPORTED_MODULE_25__["VidoesComponent"],
                _admin_audios_audios_component__WEBPACK_IMPORTED_MODULE_26__["AudiosComponent"],
                _admin_author_author_component__WEBPACK_IMPORTED_MODULE_27__["AuthorComponent"],
                _admin_drivers_drivers_component__WEBPACK_IMPORTED_MODULE_28__["DriversComponent"],
                _admin_tiles_vidoes_tiles_vidoes_tiles_component__WEBPACK_IMPORTED_MODULE_29__["VidoesTilesComponent"],
                _admin_tiles_audio_tiles_audio_tiles_component__WEBPACK_IMPORTED_MODULE_30__["AudioTilesComponent"],
                _admin_extra_component_checkbox_component_checkbox_component_component__WEBPACK_IMPORTED_MODULE_31__["CheckboxComponentComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                primeng_toast__WEBPACK_IMPORTED_MODULE_7__["ToastModule"],
                primeng_messages__WEBPACK_IMPORTED_MODULE_8__["MessagesModule"],
                primeng_message__WEBPACK_IMPORTED_MODULE_9__["MessageModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_10__["TableModule"],
                primeng_dropdown__WEBPACK_IMPORTED_MODULE_11__["DropdownModule"],
                primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_12__["InputTextareaModule"],
                ng2_smart_table__WEBPACK_IMPORTED_MODULE_15__["Ng2SmartTableModule"],
                primeng_calendar__WEBPACK_IMPORTED_MODULE_14__["CalendarModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_17__["NgZorroAntdModule"],
                ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_16__["NzCheckboxModule"]
            ],
            providers: [_service_api_service_service__WEBPACK_IMPORTED_MODULE_23__["ApiServiceService"], primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_13__["MessageService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], { provide: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_17__["NZ_I18N"], useValue: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_17__["en_US"] }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_18__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-wrapper-main {\n  position: relative;\n  height: 100vh;\n  /* background-color: #51326a; */\n  background-image: linear-gradient(to bottom, #151647, #0b8ac5);\n  margin: 0;\n}\n\n::-webkit-input-placeholder {\n  /* Chrome/Opera/Safari */\n  color: rgba(0, 0, 0, 0.38);\n  font-weight: 500;\n}\n\n::-moz-placeholder {\n  /* Firefox 19+ */\n  color: rgba(0, 0, 0, 0.38);\n  font-weight: 500;\n}\n\n:-ms-input-placeholder {\n  /* IE 10+ */\n  color: rgba(0, 0, 0, 0.38);\n  font-weight: 500;\n}\n\n:-moz-placeholder {\n  /* Firefox 18- */\n  color: rgba(0, 0, 0, 0.38);\n  font-weight: 500;\n}\n\n.login-screen {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 800px;\n  height: 450px;\n  margin: -225px 0 0 -400px;\n  background-color: #fff;\n  border-radius: 7px;\n}\n\n.login-screen .left-item,\n.login-screen .right-item {\n  width: 40%;\n  height: 100%;\n  float: left;\n}\n\n.login-screen .right-item {\n  position: relative;\n  width: 60%;\n  border-bottom-right-radius: 7px;\n  border-top-right-radius: 7px;\n  background-image: url('bgs01.jpg');\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  z-index: 1;\n  background-color: #d8d8e2;\n  background-blend-mode: multiply;\n}\n\n.login-screen .right-item:before {\n  position: absolute;\n  z-index: -1;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n\n  content: \"\";\n\n  opacity: 0.8;\n  border-bottom-right-radius: 7px;\n  border-top-right-radius: 7px;\n  background-image: -ms-linear-gradient(45deg, #51326a 0%, #c24581 100%);\n}\n\n.login-screen .left-item .login-panel {\n  position: relative;\n  display: table;\n  width: 100%;\n  height: 100%;\n}\n\n.login-screen .left-item .login-panel .inner-login-panel {\n  display: table-cell;\n  vertical-align: middle;\n}\n\n.login-screen .left-item .login-panel .inner-login-panel .content-panel {\n  padding: 0 30px;\n  text-align: center;\n}\n\n.login-screen .left-item .login-panel .inner-login-panel .content-panel .title {\n  margin: 0 0 40px 0;\n  text-transform: uppercase;\n  font-size: 1em;\n  color: #51326a;\n}\n\n.login-screen .left-item .login-panel .inner-login-panel .content-panel input {\n  border: 0;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n  outline: none;\n  width: 100%;\n  padding: 6px 0;\n  color: #51326a;\n  font-weight: 500;\n}\n\n.login-screen\n  .left-item\n  .login-panel\n  .inner-login-panel\n  .content-panel\n  input\n  + input {\n  margin-top: 20px;\n}\n\n.login-screen .left-item .login-panel .inner-login-panel .content-panel button {\n  background-color: #51326a;\n  border: 0;\n  outline: none;\n  color: #fff;\n  text-transform: uppercase;\n  padding: 12px 15px 30px;\n  font-weight: 500;\n  border-radius: 10px;\n  width: 100%;\n  margin-top: 40px;\n  box-shadow: 0px 17px 10px -10px rgba(0, 0, 0, 0.3);\n  cursor: pointer;\n}\n\n.login-screen .right-item .slider-panel {\n  display: table;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  color: #fff;\n}\n\n.login-screen .right-item .slider-panel .inner-slider-panel {\n  display: table-cell;\n  vertical-align: middle;\n}\n\n.login-screen .right-item .slider-panel .inner-slider-panel h1 {\n  margin: 0 0 7px 0;\n  text-transform: uppercase;\n}\n\n.login-screen .right-item .slider-panel .inner-slider-panel p {\n  margin: 0;\n  text-transform: uppercase;\n  font-size: 13px;\n  opacity: 0.7;\n}\n\n/* Responsive */\n\n@media (max-width: 768px) {\n  .login-screen {\n    width: 700px;\n    margin: -225px 0 0 -350px;\n  }\n}\n\n@media (max-width: 767px) {\n  .login-screen {\n    width: 300px;\n    margin: -225px 0 0 -150px;\n  }\n  .login-screen .right-item {\n    display: none;\n  }\n  .login-screen .left-item {\n    width: 100%;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsK0JBQStCO0VBQy9CLDhEQUE4RDtFQUM5RCxTQUFTO0FBQ1g7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsMEJBQTBCO0VBQzFCLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQiwwQkFBMEI7RUFDMUIsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsV0FBVztFQUNYLDBCQUEwQjtFQUMxQixnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsMEJBQTBCO0VBQzFCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULFlBQVk7RUFDWixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7O0FBRUE7O0VBRUUsVUFBVTtFQUNWLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLCtCQUErQjtFQUMvQiw0QkFBNEI7RUFDNUIsa0NBQStDO0VBQy9DLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLFVBQVU7RUFDVix5QkFBeUI7RUFDekIsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxNQUFNO0VBQ04sUUFBUTtFQUNSLFNBQVM7RUFDVCxPQUFPOztFQUVQLFdBQVc7O0VBRVgsWUFBWTtFQUNaLCtCQUErQjtFQUMvQiw0QkFBNEI7RUFHNUIsc0VBQXNFO0FBQ3hFOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsU0FBUztFQUNULDRDQUE0QztFQUM1QyxhQUFhO0VBQ2IsV0FBVztFQUNYLGNBQWM7RUFDZCxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBOzs7Ozs7O0VBT0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFNBQVM7RUFDVCxhQUFhO0VBQ2IsV0FBVztFQUNYLHlCQUF5QjtFQUN6Qix1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGtEQUFrRDtFQUNsRCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsU0FBUztFQUNULHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBLGVBQWU7O0FBQ2Y7RUFDRTtJQUNFLFlBQVk7SUFDWix5QkFBeUI7RUFDM0I7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsWUFBWTtJQUNaLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxXQUFXO0VBQ2I7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4td3JhcHBlci1tYWluIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjNTEzMjZhOyAqL1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMTUxNjQ3LCAjMGI4YWM1KTtcbiAgbWFyZ2luOiAwO1xufVxuXG46Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAvKiBDaHJvbWUvT3BlcmEvU2FmYXJpICovXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzgpO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuOjotbW96LXBsYWNlaG9sZGVyIHtcbiAgLyogRmlyZWZveCAxOSsgKi9cbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zOCk7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG46LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgLyogSUUgMTArICovXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzgpO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuOi1tb3otcGxhY2Vob2xkZXIge1xuICAvKiBGaXJlZm94IDE4LSAqL1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM4KTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmxvZ2luLXNjcmVlbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgd2lkdGg6IDgwMHB4O1xuICBoZWlnaHQ6IDQ1MHB4O1xuICBtYXJnaW46IC0yMjVweCAwIDAgLTQwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG59XG5cbi5sb2dpbi1zY3JlZW4gLmxlZnQtaXRlbSxcbi5sb2dpbi1zY3JlZW4gLnJpZ2h0LWl0ZW0ge1xuICB3aWR0aDogNDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4ubG9naW4tc2NyZWVuIC5yaWdodC1pdGVtIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogNjAlO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogN3B4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogN3B4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9iZ3MwMS5qcGcnKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICB6LWluZGV4OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDhkOGUyO1xuICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IG11bHRpcGx5O1xufVxuXG4ubG9naW4tc2NyZWVuIC5yaWdodC1pdGVtOmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogLTE7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcblxuICBjb250ZW50OiBcIlwiO1xuXG4gIG9wYWNpdHk6IDAuODtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDdweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDdweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQoNDVkZWcsICM1MTMyNmEgMCUsICNjMjQ1ODEgMTAwJSk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjNTEzMjZhIDAlLCAjYzI0NTgxIDEwMCUpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtbXMtbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjNTEzMjZhIDAlLCAjYzI0NTgxIDEwMCUpO1xufVxuXG4ubG9naW4tc2NyZWVuIC5sZWZ0LWl0ZW0gLmxvZ2luLXBhbmVsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmxvZ2luLXNjcmVlbiAubGVmdC1pdGVtIC5sb2dpbi1wYW5lbCAuaW5uZXItbG9naW4tcGFuZWwge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4ubG9naW4tc2NyZWVuIC5sZWZ0LWl0ZW0gLmxvZ2luLXBhbmVsIC5pbm5lci1sb2dpbi1wYW5lbCAuY29udGVudC1wYW5lbCB7XG4gIHBhZGRpbmc6IDAgMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubG9naW4tc2NyZWVuIC5sZWZ0LWl0ZW0gLmxvZ2luLXBhbmVsIC5pbm5lci1sb2dpbi1wYW5lbCAuY29udGVudC1wYW5lbCAudGl0bGUge1xuICBtYXJnaW46IDAgMCA0MHB4IDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBjb2xvcjogIzUxMzI2YTtcbn1cblxuLmxvZ2luLXNjcmVlbiAubGVmdC1pdGVtIC5sb2dpbi1wYW5lbCAuaW5uZXItbG9naW4tcGFuZWwgLmNvbnRlbnQtcGFuZWwgaW5wdXQge1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBvdXRsaW5lOiBub25lO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogNnB4IDA7XG4gIGNvbG9yOiAjNTEzMjZhO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4ubG9naW4tc2NyZWVuXG4gIC5sZWZ0LWl0ZW1cbiAgLmxvZ2luLXBhbmVsXG4gIC5pbm5lci1sb2dpbi1wYW5lbFxuICAuY29udGVudC1wYW5lbFxuICBpbnB1dFxuICArIGlucHV0IHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmxvZ2luLXNjcmVlbiAubGVmdC1pdGVtIC5sb2dpbi1wYW5lbCAuaW5uZXItbG9naW4tcGFuZWwgLmNvbnRlbnQtcGFuZWwgYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUxMzI2YTtcbiAgYm9yZGVyOiAwO1xuICBvdXRsaW5lOiBub25lO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgcGFkZGluZzogMTJweCAxNXB4IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICBib3gtc2hhZG93OiAwcHggMTdweCAxMHB4IC0xMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubG9naW4tc2NyZWVuIC5yaWdodC1pdGVtIC5zbGlkZXItcGFuZWwge1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmxvZ2luLXNjcmVlbiAucmlnaHQtaXRlbSAuc2xpZGVyLXBhbmVsIC5pbm5lci1zbGlkZXItcGFuZWwge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4ubG9naW4tc2NyZWVuIC5yaWdodC1pdGVtIC5zbGlkZXItcGFuZWwgLmlubmVyLXNsaWRlci1wYW5lbCBoMSB7XG4gIG1hcmdpbjogMCAwIDdweCAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4ubG9naW4tc2NyZWVuIC5yaWdodC1pdGVtIC5zbGlkZXItcGFuZWwgLmlubmVyLXNsaWRlci1wYW5lbCBwIHtcbiAgbWFyZ2luOiAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDEzcHg7XG4gIG9wYWNpdHk6IDAuNztcbn1cblxuLyogUmVzcG9uc2l2ZSAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5sb2dpbi1zY3JlZW4ge1xuICAgIHdpZHRoOiA3MDBweDtcbiAgICBtYXJnaW46IC0yMjVweCAwIDAgLTM1MHB4O1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAubG9naW4tc2NyZWVuIHtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgbWFyZ2luOiAtMjI1cHggMCAwIC0xNTBweDtcbiAgfVxuICAubG9naW4tc2NyZWVuIC5yaWdodC1pdGVtIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5sb2dpbi1zY3JlZW4gLmxlZnQtaXRlbSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var primeng_components_common_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/components/common/api */ "./node_modules/primeng/components/common/api.js");
/* harmony import */ var primeng_components_common_api__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_components_common_api__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _service_api_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/api-service.service */ "./src/app/service/api-service.service.ts");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(route, router, messageService, api) {
        this.route = route;
        this.router = router;
        this.messageService = messageService;
        this.api = api;
        this.isLoading = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.userLogin = function () {
        var _this = this;
        var loginData = {
            username: this.username,
            password: this.password
        };
        if (this.username == '' || this.username == undefined) {
            this.messageService.add({ severity: 'error', summary: 'Invalid Credentials!', detail: 'username and password is required!' });
        }
        else if (this.password == '' || this.password == undefined) {
            this.messageService.add({ severity: 'error', summary: 'Invalid Credentials!', detail: 'username and password is required!' });
        }
        else {
            this.isLoading = true;
            this.api.login(loginData).subscribe(function (resp) {
                console.log(resp);
                if (resp.status === 200) {
                    _this.isLoading = false;
                    localStorage.setItem('access_token', resp.body.token);
                    _this.router.navigate(['/admin/dashboard']);
                }
            }, function (error) {
                console.log(error);
                if (error.status === 400) {
                    _this.isLoading = false;
                    _this.messageService.add({ severity: 'error', summary: 'Invalid Credentials!', detail: error.error.non_field_errors[0] });
                }
                else {
                    _this.isLoading = false;
                    _this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong. Please try after sometime!' });
                }
            });
        }
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], primeng_components_common_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"], _service_api_service_service__WEBPACK_IMPORTED_MODULE_4__["ApiServiceService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/service/api-service.service.ts":
/*!************************************************!*\
  !*** ./src/app/service/api-service.service.ts ***!
  \************************************************/
/*! exports provided: ApiServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiServiceService", function() { return ApiServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ApiServiceService = /** @class */ (function () {
    function ApiServiceService(http) {
        this.http = http;
        this.url = 'http://52.62.164.210/';
        // tslint:disable-next-line: variable-name
        this.access_token = localStorage.getItem('access_token');
    }
    ApiServiceService.prototype.login = function (loginData) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Accept: 'application/json',
        });
        return this.http.post(this.url + 'api-token-auth/', loginData, {
            observe: 'response',
            responseType: 'json',
            headers: headers,
            withCredentials: true
        });
    };
    ApiServiceService.prototype.listNews = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: "Token " + this.access_token
        });
        return this.http.get(this.url + 'news_full/', {
            observe: 'response',
            responseType: 'json',
            headers: headers,
            withCredentials: true
        });
    };
    ApiServiceService.prototype.updateNews = function (newsId, newsData) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: "Token " + this.access_token
        });
        return this.http.patch(this.url + "news/" + newsId + "/", newsData, {
            observe: 'response',
            responseType: 'json',
            headers: headers,
            withCredentials: true
        });
    };
    ApiServiceService.prototype.deleteNews = function (newsId) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: "Token " + this.access_token
        });
        return this.http.delete(this.url + "news/" + newsId + "/", {
            observe: 'response',
            responseType: 'json',
            headers: headers,
            withCredentials: true
        });
    };
    ApiServiceService.prototype.addNews = function (newsData) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: "Token " + this.access_token
        });
        return this.http.post(this.url + 'news/', newsData, {
            observe: 'response',
            responseType: 'json',
            headers: headers,
            withCredentials: true
        });
    };
    ApiServiceService.prototype.listVidoes = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: "Token " + this.access_token
        });
        return this.http.get(this.url + 'videos_full', {
            observe: 'response',
            responseType: 'json',
            headers: headers,
            withCredentials: true
        });
    };
    ApiServiceService.prototype.addVideo = function (data) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: "Token " + this.access_token
        });
        return this.http.post(this.url + 'videos/', data, {
            observe: 'response',
            responseType: 'json',
            headers: headers,
            withCredentials: true
        });
    };
    ApiServiceService.prototype.updateVideo = function (id, data) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: "Token " + this.access_token
        });
        return this.http.patch(this.url + "videos/" + id + "/", data, {
            observe: 'response',
            responseType: 'json',
            headers: headers,
            withCredentials: true
        });
    };
    ApiServiceService.prototype.deleteVideo = function (id) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: "Token " + this.access_token
        });
        return this.http.delete(this.url + "videos/" + id + "/", {
            observe: 'response',
            responseType: 'json',
            headers: headers,
            withCredentials: true
        });
    };
    ApiServiceService.prototype.listAudios = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: "Token " + this.access_token
        });
        return this.http.get(this.url + 'audios_full', {
            observe: 'response',
            responseType: 'json',
            headers: headers,
            withCredentials: true
        });
    };
    ApiServiceService.prototype.addAudio = function (data) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: "Token " + this.access_token
        });
        return this.http.post(this.url + 'audios/', data, {
            observe: 'response',
            responseType: 'json',
            headers: headers,
            withCredentials: true
        });
    };
    ApiServiceService.prototype.deleteAudio = function (id) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: "Token " + this.access_token
        });
        return this.http.delete(this.url + "audios/" + id + "/", {
            observe: 'response',
            responseType: 'json',
            headers: headers,
            withCredentials: true
        });
    };
    ApiServiceService.prototype.updateAudio = function (id, data) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: "Token " + this.access_token
        });
        return this.http.patch(this.url + "audios/" + id + "/", data, {
            observe: 'response',
            responseType: 'json',
            headers: headers,
            withCredentials: true
        });
    };
    ApiServiceService.prototype.listSeries = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: "Token " + this.access_token
        });
        return this.http.get(this.url + 'series/', {
            observe: 'response',
            responseType: 'json',
            headers: headers,
            withCredentials: true
        });
    };
    ApiServiceService.prototype.addSeries = function (data) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            Authorization: "Token " + this.access_token
        });
        return this.http.post(this.url + 'series/', data, {
            observe: 'response',
            responseType: 'json',
            headers: headers,
            withCredentials: true
        });
    };
    ApiServiceService.prototype.updateSeries = function (id, data) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            Authorization: "Token " + this.access_token
        });
        return this.http.patch(this.url + "series/" + id + "/", data, {
            observe: 'response',
            responseType: 'json',
            headers: headers,
            withCredentials: true
        });
    };
    ApiServiceService.prototype.deleteSeries = function (id) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: "Token " + this.access_token
        });
        return this.http.delete(this.url + "series/" + id + "/", {
            observe: 'response',
            responseType: 'json',
            headers: headers,
            withCredentials: true
        });
    };
    ApiServiceService.prototype.listAuthor = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: "Token " + this.access_token
        });
        return this.http.get(this.url + 'author/', {
            observe: 'response',
            responseType: 'json',
            headers: headers,
            withCredentials: true
        });
    };
    ApiServiceService.prototype.addAuthor = function (data) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            Authorization: "Token " + this.access_token
        });
        return this.http.post(this.url + 'author/', data, {
            observe: 'response',
            responseType: 'json',
            headers: headers,
            withCredentials: true
        });
    };
    ApiServiceService.prototype.updateAuthor = function (id, data) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            Authorization: "Token " + this.access_token
        });
        return this.http.patch(this.url + "author/" + id + "/", data, {
            observe: 'response',
            responseType: 'json',
            headers: headers,
            withCredentials: true
        });
    };
    ApiServiceService.prototype.deleteAuthor = function (id) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: "Token " + this.access_token
        });
        return this.http.delete(this.url + "author/" + id + "/", {
            observe: 'response',
            responseType: 'json',
            headers: headers,
            withCredentials: true
        });
    };
    ApiServiceService.prototype.listDrivers = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: "Token " + this.access_token
        });
        return this.http.get(this.url + 'drivers/', {
            observe: 'response',
            responseType: 'json',
            headers: headers,
            withCredentials: true
        });
    };
    ApiServiceService.prototype.updateDrivers = function (id, data) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            Authorization: "Token " + this.access_token
        });
        return this.http.patch(this.url + "drivers/" + id + "/", data, {
            observe: 'response',
            responseType: 'json',
            headers: headers,
            withCredentials: true
        });
    };
    ApiServiceService.prototype.getBannerImages = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: "Token " + this.access_token
        });
        return this.http.get(this.url + 'variables/', {
            observe: 'response',
            responseType: 'json',
            headers: headers,
            withCredentials: true
        });
    };
    ApiServiceService.prototype.updateDriverBanner = function (id, data) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            Authorization: "Token " + this.access_token
        });
        return this.http.patch(this.url + "variables/" + id + "/", data, {
            observe: 'response',
            responseType: 'json',
            headers: headers,
            withCredentials: true
        });
    };
    ApiServiceService.prototype.updateTeamBanner = function (id, data) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            Authorization: "Token " + this.access_token
        });
        return this.http.patch(this.url + "variables/" + id + "/", data, {
            observe: 'response',
            responseType: 'json',
            headers: headers,
            withCredentials: true
        });
    };
    ApiServiceService.prototype.updateEventBanner = function (id, data) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            Authorization: "Token " + this.access_token
        });
        return this.http.patch(this.url + "variables/" + id + "/", data, {
            observe: 'response',
            responseType: 'json',
            headers: headers,
            withCredentials: true
        });
    };
    ApiServiceService.prototype.updateLeaderBanner = function (id, data) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            Authorization: "Token " + this.access_token
        });
        return this.http.patch(this.url + "variables/" + id + "/", data, {
            observe: 'response',
            responseType: 'json',
            headers: headers,
            withCredentials: true
        });
    };
    ApiServiceService.prototype.updateSeriesBanner = function (id, data) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            Authorization: "Token " + this.access_token
        });
        return this.http.patch(this.url + "variables/" + id + "/", data, {
            observe: 'response',
            responseType: 'json',
            headers: headers,
            withCredentials: true
        });
    };
    ApiServiceService.prototype.updateSavedStoryBanner = function (id, data) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            Authorization: "Token " + this.access_token
        });
        return this.http.patch(this.url + "variables/" + id + "/", data, {
            observe: 'response',
            responseType: 'json',
            headers: headers,
            withCredentials: true
        });
    };
    ApiServiceService.prototype.listVideoTiles = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: "Token " + this.access_token
        });
        return this.http.get(this.url + 'video_tiles/', {
            observe: 'response',
            responseType: 'json',
            headers: headers,
            withCredentials: true
        });
    };
    ApiServiceService.prototype.updateVideoTiles = function (id, data) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: "Token " + this.access_token
        });
        return this.http.patch(this.url + "video_tiles/" + id + "/", data, {
            observe: 'response',
            responseType: 'json',
            headers: headers,
            withCredentials: true
        });
    };
    ApiServiceService.prototype.deleteVideoTiles = function (id) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: "Token " + this.access_token
        });
        return this.http.delete(this.url + "video_tiles/" + id + "/", {
            observe: 'response',
            responseType: 'json',
            headers: headers,
            withCredentials: true
        });
    };
    ApiServiceService.prototype.addVideoTiles = function (data) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            Authorization: "Token " + this.access_token
        });
        return this.http.post(this.url + 'video_tiles/', data, {
            observe: 'response',
            responseType: 'json',
            headers: headers,
            withCredentials: true
        });
    };
    ApiServiceService.prototype.scrapAuthor = function (data) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            Authorization: "Token " + this.access_token
        });
        return this.http.post(this.url + 'scraping/', data, {
            observe: 'response',
            responseType: 'json',
            headers: headers,
            withCredentials: true
        });
    };
    ApiServiceService.prototype.listAudioTiles = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: "Token " + this.access_token
        });
        return this.http.get(this.url + 'audio_tiles/', {
            observe: 'response',
            responseType: 'json',
            headers: headers,
            withCredentials: true
        });
    };
    ApiServiceService.prototype.updateAudioTiles = function (id, data) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: "Token " + this.access_token
        });
        return this.http.patch(this.url + "audio_tiles/" + id + "/", data, {
            observe: 'response',
            responseType: 'json',
            headers: headers,
            withCredentials: true
        });
    };
    ApiServiceService.prototype.deleteAudioTiles = function (id) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: "Token " + this.access_token
        });
        return this.http.delete(this.url + "audio_tiles/" + id + "/", {
            observe: 'response',
            responseType: 'json',
            headers: headers,
            withCredentials: true
        });
    };
    ApiServiceService.prototype.addAudioTiles = function (data) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            Authorization: "Token " + this.access_token
        });
        return this.http.post(this.url + 'audio_tiles/', data, {
            observe: 'response',
            responseType: 'json',
            headers: headers,
            withCredentials: true
        });
    };
    ApiServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ApiServiceService);
    return ApiServiceService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/veersingh/Desktop/My Projects/motorsports/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map