var wms_layers = [];


        var lyr_GooglecnNormal_0 = new ol.layer.Tile({
            'title': 'Google.cn Normal',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.com/intl/zh-CN_cn/permissions/geoguidelines/attr-guide.html">地图数据 ©2016 Google</a>',
                url: 'http://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_wave_H_max_building_1 = new ol.format.GeoJSON();
var features_wave_H_max_building_1 = format_wave_H_max_building_1.readFeatures(json_wave_H_max_building_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_wave_H_max_building_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_wave_H_max_building_1.addFeatures(features_wave_H_max_building_1);
var lyr_wave_H_max_building_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_wave_H_max_building_1, 
                style: style_wave_H_max_building_1,
                interactive: true,
    title: 'wave_H_max_building<br />\
    <img src="styles/legend/wave_H_max_building_1_0.png" /> -0.68 - 0.86<br />\
    <img src="styles/legend/wave_H_max_building_1_1.png" /> 0.86 - 2.78<br />\
    <img src="styles/legend/wave_H_max_building_1_2.png" /> 2.78 - 4.08<br />\
    <img src="styles/legend/wave_H_max_building_1_3.png" /> 4.08 - 4.45<br />\
    <img src="styles/legend/wave_H_max_building_1_4.png" /> 4.45 - 5.18<br />'
        });

lyr_GooglecnNormal_0.setVisible(true);lyr_wave_H_max_building_1.setVisible(true);
var layersList = [lyr_GooglecnNormal_0,lyr_wave_H_max_building_1];
lyr_wave_H_max_building_1.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'Long': 'Long', 'Lat': 'Lat', 'Height_ft': 'Height_ft', 'Cons_year': 'Cons_year', 'Age_Group': 'Age_Group', 'Elev_m': 'Elev_m', 'Price': 'Price', 'wave_H_max_rastervalue1': 'wave_H_max_rastervalue1', });
lyr_wave_H_max_building_1.set('fieldImages', {'fid': 'TextEdit', 'ID': 'Range', 'Long': 'TextEdit', 'Lat': 'TextEdit', 'Height_ft': 'Range', 'Cons_year': 'Range', 'Age_Group': 'Range', 'Elev_m': 'TextEdit', 'Price': 'TextEdit', 'wave_H_max_rastervalue1': 'TextEdit', });
lyr_wave_H_max_building_1.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'Long': 'no label', 'Lat': 'no label', 'Height_ft': 'no label', 'Cons_year': 'no label', 'Age_Group': 'no label', 'Elev_m': 'no label', 'Price': 'no label', 'wave_H_max_rastervalue1': 'no label', });
lyr_wave_H_max_building_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});