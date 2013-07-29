/*
 * File: app/controller/Place.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.2.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.controller.Place', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            mainView: '#MainView',
            placeList: '#PlaceList',
            placeDetail: '#PlaceDetail'
        },

        control: {
            "#PlaceList": {
                itemtap: 'onListItemTap'
            },
            "[action=ViewMap]": {
                tap: 'onButtonTap'
            }
        }
    },

    onListItemTap: function(dataview, index, target, record, e, eOpts) {
        var form = Ext.create("MyApp.view.PlaceDetail",
            {
                title: record.data.name,
                record: record
            });

        this.getMainView().push(form);

        var me = this;

        Ext.Function.defer(function(){
            me.getPlaceList().deselectAll();
        }, 100);
    },

    onButtonTap: function(button, e, eOpts) {
        var record = this.getPlaceDetail().getRecord();

        var map = Ext.create("MyApp.view.PlaceMap", {
            title: record.data.name,
            mapOptions: {
                center: new google.maps.LatLng(record.data.lat, record.data.lng),
                zoom: 12
            }
        });

        this.getMainView().push(map);
    }

});