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
    this.val = ko.observable(i);
}



ko.components.register('item', {
    template: '<li>jj: <span data-bind="text: val"></span></li>'
});


var koApp = new KoApp();
$(function() {
  ko.applyBindings(koApp, $('body').get(0));
});

ENV.append({
    code: 'knockoutjs34-1',
    clear: koApp.clear,
    fill: koApp.fill,
    update: koApp.update,
    insert: koApp.insert

})