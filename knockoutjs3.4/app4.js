'use strict';

function KoApp() {
    var self = this;
    self.items = ko.observableArray([]);
    self.fill = function (n, callback) {
        var i,
        items = [];
        for (i = 0; i < n; i += 1) {
            items.push(new item(i));
        }
        self.items(items);
        callback();
    };
    self.update = function (n, callback) {
        var i;
        ko.utils.arrayForEach(self.items(), function (item) {
            item.val(item.val() + ' ' + item.val());
        });
        callback();
    };
    self.clear = function (callback) {
        self.items([]);
        callback();
    };

    self.insert = function (n, callback) {
        self.items.splice(n, 0, new item('xx') )
    
        callback();
    };
}


function item(i){
    this.num = ko.observable(i);
    this.val = ko.observable(i);
    this.val3 = ko.observable(i);
}

ko.components.register('list', {
    template: '<ul data-bind="foreach: items"><!-- ko component: {name:\'item\', params:$data } --><!-- /ko --></ul>'
});

ko.components.register('item', {
    template: '<li><div><h3>Item #<span data-bind="text: num"></span></h3> <span data-bind="text: val"></span> &mdash; <strong data-bind="text: val3"></strong></div></li>'
});


var koApp = new KoApp();
ko.options.deferUpdates = true;

$(function() {
  ko.applyBindings(koApp, $('body').get(0));
});

ENV.append({
    code: 'knockoutjs34-4',
    clear: koApp.clear,
    fill: koApp.fill,
    update: koApp.update,
    insert: koApp.insert

})