define([
    "oskari",
    "jquery",
    "bundles/framework/bundle/mapwfs2/comp",
    "libraries/jquery/plugins/jquery.cookie",
    "bundles/framework/bundle/mapwfs2/service/Connection",
    "bundles/framework/bundle/mapwfs2/service/Mediator",
    "bundles/framework/bundle/mapwfs2/plugin/QueuedTilesGrid",
    "bundles/framework/bundle/mapwfs2/plugin/QueuedTilesStrategy",
    "bundles/framework/bundle/mapwfs2/plugin/TileCache",
    "bundles/framework/bundle/mapwfs2/plugin/WfsLayerPlugin",
    "bundles/framework/bundle/mapwfs2/event/WFSFeatureEvent",
    "bundles/framework/bundle/mapwfs2/event/WFSFeaturesSelectedEvent",
    "bundles/framework/bundle/mapwfs2/event/WFSFeatureGeometriesEvent",
    "bundles/framework/bundle/mapwfs2/event/WFSImageEvent",
    "bundles/framework/bundle/mapwfs2/event/WFSPropertiesEvent",
    "bundles/framework/bundle/mapwfs2/request/ShowOwnStyleRequest",
    "bundles/framework/bundle/mapwfs2/request/ShowOwnStyleRequestHandler",
    "bundles/framework/bundle/mapwfs2/request/ActivateHighlightRequest",
    "bundles/framework/bundle/mapwfs2/request/ActivateHighlightRequestHandler",
    "bundles/framework/bundle/mapwfs2/domain/QueuedTile",
    "bundles/framework/bundle/mapwfs2/domain/TileQueue",
    "bundles/framework/bundle/mapwfs2/domain/WFSLayer",
    "bundles/framework/bundle/mapwfs2/domain/WfsLayerModelBuilder",
    "bundles/framework/bundle/divmanazer/component/VisualizationForm",
    "bundles/framework/bundle/divmanazer/component/visualization-form/DotForm",
    "bundles/framework/bundle/divmanazer/component/visualization-form/LineForm",
    "bundles/framework/bundle/divmanazer/component/visualization-form/AreaForm",
    "bundles/framework/bundle/mapwfs2/locale/fi",
    "bundles/framework/bundle/mapwfs2/locale/sv",
    "bundles/framework/bundle/mapwfs2/locale/en",
    "bundles/framework/bundle/mapwfs2/locale/es",
    "bundles/framework/bundle/mapwfs2/locale/de",
    "bundles/framework/bundle/mapwfs2/locale/cs"
], function(Oskari,jQuery) {
    return Oskari.bundleCls("mapwfs2").category({create: function () {
        return this;
    },update: function (manager, bundle, bi, info) {

    }})
});