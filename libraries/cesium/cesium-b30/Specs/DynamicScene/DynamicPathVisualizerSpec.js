/*global defineSuite*/
defineSuite([
        'DynamicScene/DynamicPathVisualizer',
        'Core/Cartesian3',
        'Core/Color',
        'Core/JulianDate',
        'Core/ReferenceFrame',
        'Core/TimeInterval',
        'DynamicScene/CompositePositionProperty',
        'DynamicScene/ConstantPositionProperty',
        'DynamicScene/ConstantProperty',
        'DynamicScene/DynamicObjectCollection',
        'DynamicScene/DynamicPath',
        'DynamicScene/PolylineGlowMaterialProperty',
        'DynamicScene/PolylineOutlineMaterialProperty',
        'DynamicScene/ReferenceProperty',
        'DynamicScene/SampledPositionProperty',
        'DynamicScene/TimeIntervalCollectionPositionProperty',
        'Specs/createScene',
        'Specs/destroyScene'
    ], function(
        DynamicPathVisualizer,
        Cartesian3,
        Color,
        JulianDate,
        ReferenceFrame,
        TimeInterval,
        CompositePositionProperty,
        ConstantPositionProperty,
        ConstantProperty,
        DynamicObjectCollection,
        DynamicPath,
        PolylineGlowMaterialProperty,
        PolylineOutlineMaterialProperty,
        ReferenceProperty,
        SampledPositionProperty,
        TimeIntervalCollectionPositionProperty,
        createScene,
        destroyScene) {
    "use strict";
    /*global jasmine,describe,xdescribe,it,xit,expect,beforeEach,afterEach,beforeAll,afterAll,spyOn,runs,waits,waitsFor*/

    var scene;
    var visualizer;

    beforeAll(function() {
        scene = createScene();
    });

    afterAll(function() {
        destroyScene(scene);
    });

    afterEach(function() {
        visualizer = visualizer && visualizer.destroy();
    });

    it('constructor throws if no scene is passed.', function() {
        expect(function() {
            return new DynamicPathVisualizer();
        }).toThrowDeveloperError();
    });

    it('update throws if no time specified.', function() {
        var dynamicObjectCollection = new DynamicObjectCollection();
        visualizer = new DynamicPathVisualizer(scene, dynamicObjectCollection);
        expect(function() {
            visualizer.update();
        }).toThrowDeveloperError();
    });

    it('isDestroy returns false until destroyed.', function() {
        var dynamicObjectCollection = new DynamicObjectCollection();
        visualizer = new DynamicPathVisualizer(scene, dynamicObjectCollection);
        expect(visualizer.isDestroyed()).toEqual(false);
        visualizer.destroy();
        expect(visualizer.isDestroyed()).toEqual(true);
        visualizer = undefined;
    });

    it('object with no path does not create one.', function() {
        var dynamicObjectCollection = new DynamicObjectCollection();
        visualizer = new DynamicPathVisualizer(scene, dynamicObjectCollection);

        var testObject = dynamicObjectCollection.getOrCreateObject('test');
        testObject.position = new ConstantProperty([new Cartesian3(1234, 5678, 9101112), new Cartesian3(5678, 1234, 1101112)]);
        visualizer.update(JulianDate.now());
        expect(scene.primitives.length).toEqual(0);
    });

    it('object with no position does not create a polyline.', function() {
        var dynamicObjectCollection = new DynamicObjectCollection();
        visualizer = new DynamicPathVisualizer(scene, dynamicObjectCollection);

        var testObject = dynamicObjectCollection.getOrCreateObject('test');
        var path = testObject.path = new DynamicPath();
        path.show = new ConstantProperty(true);

        visualizer.update(JulianDate.now());
        expect(scene.primitives.length).toEqual(0);
    });

    it('A DynamicPath causes a primtive to be created and updated.', function() {
        var times = [new JulianDate(0, 0), new JulianDate(1, 0)];
        var updateTime = new JulianDate(0.5, 0);
        var positions = [new Cartesian3(1234, 5678, 9101112), new Cartesian3(5678, 1234, 1101112)];

        var dynamicObjectCollection = new DynamicObjectCollection();
        visualizer = new DynamicPathVisualizer(scene, dynamicObjectCollection);

        expect(scene.primitives.length).toEqual(0);

        var testObject = dynamicObjectCollection.getOrCreateObject('test');
        var position = new SampledPositionProperty();
        testObject.position = position;
        position.addSamples(times, positions);

        var path = testObject.path = new DynamicPath();
        path.show = new ConstantProperty(true);
        path.material = new PolylineOutlineMaterialProperty();
        path.material.color = new ConstantProperty(new Color(0.8, 0.7, 0.6, 0.5));
        path.material.outlineColor = new ConstantProperty(new Color(0.1, 0.2, 0.3, 0.4));
        path.material.outlineWidth = new ConstantProperty(2.5);
        path.width = new ConstantProperty(12.5);
        path.leadTime = new ConstantProperty(25);
        path.trailTime = new ConstantProperty(10);

        visualizer.update(updateTime);

        expect(scene.primitives.length).toEqual(1);

        var polylineCollection = scene.primitives.get(0);
        var primitive = polylineCollection.get(0);
        expect(primitive.positions[0]).toEqual(testObject.position.getValue(JulianDate.addSeconds(updateTime, -path.trailTime.getValue(), new JulianDate())));
        expect(primitive.positions[1]).toEqual(testObject.position.getValue(updateTime));
        expect(primitive.positions[2]).toEqual(testObject.position.getValue(JulianDate.addSeconds(updateTime, path.leadTime.getValue(), new JulianDate())));
        expect(primitive.show).toEqual(testObject.path.show.getValue(updateTime));
        expect(primitive.width).toEqual(testObject.path.width.getValue(updateTime));

        var material = primitive.material;
        expect(material.uniforms.color).toEqual(testObject.path.material.color.getValue(updateTime));
        expect(material.uniforms.outlineColor).toEqual(testObject.path.material.outlineColor.getValue(updateTime));
        expect(material.uniforms.outlineWidth).toEqual(testObject.path.material.outlineWidth.getValue(updateTime));

        path.show = new ConstantProperty(false);
        visualizer.update(updateTime);
        expect(primitive.show).toEqual(testObject.path.show.getValue(updateTime));
    });

    it('A custom material can be used.', function() {
        var times = [new JulianDate(0, 0), new JulianDate(1, 0)];
        var updateTime = new JulianDate(0.5, 0);
        var positions = [new Cartesian3(1234, 5678, 9101112), new Cartesian3(5678, 1234, 1101112)];

        var dynamicObjectCollection = new DynamicObjectCollection();
        visualizer = new DynamicPathVisualizer(scene, dynamicObjectCollection);

        expect(scene.primitives.length).toEqual(0);

        var testObject = dynamicObjectCollection.getOrCreateObject('test');
        var position = new SampledPositionProperty();
        testObject.position = position;
        position.addSamples(times, positions);

        var path = testObject.path = new DynamicPath();
        path.show = new ConstantProperty(true);
        path.material = new PolylineGlowMaterialProperty();
        path.material.color = new ConstantProperty(new Color(0.8, 0.7, 0.6, 0.5));
        path.material.glowPower = new ConstantProperty(0.2);
        path.width = new ConstantProperty(12.5);
        path.leadTime = new ConstantProperty(25);
        path.trailTime = new ConstantProperty(10);

        visualizer.update(updateTime);

        expect(scene.primitives.length).toEqual(1);

        var polylineCollection = scene.primitives.get(0);
        var primitive = polylineCollection.get(0);

        var material = primitive.material;
        expect(material.uniforms.color).toEqual(testObject.path.material.color.getValue(updateTime));
        expect(material.uniforms.glowPower).toEqual(testObject.path.material.glowPower.getValue(updateTime));
    });

    it('clear hides primitives.', function() {
        var times = [new JulianDate(0, 0), new JulianDate(1, 0)];
        var updateTime = new JulianDate(0.5, 0);
        var positions = [new Cartesian3(1234, 5678, 9101112), new Cartesian3(5678, 1234, 1101112)];

        var dynamicObjectCollection = new DynamicObjectCollection();
        visualizer = new DynamicPathVisualizer(scene, dynamicObjectCollection);

        expect(scene.primitives.length).toEqual(0);

        var testObject = dynamicObjectCollection.getOrCreateObject('test');
        var position = new SampledPositionProperty();
        testObject.position = position;
        position.addSamples(times, positions);

        var path = testObject.path = new DynamicPath();
        path.show = new ConstantProperty(true);
        path.color = new ConstantProperty(new Color(0.8, 0.7, 0.6, 0.5));
        path.width = new ConstantProperty(12.5);
        path.outlineColor = new ConstantProperty(new Color(0.1, 0.2, 0.3, 0.4));
        path.outlineWidth = new ConstantProperty(2.5);
        path.leadTime = new ConstantProperty(25);
        path.trailTime = new ConstantProperty(10);

        visualizer.update(updateTime);

        expect(scene.primitives.length).toEqual(1);

        var polylineCollection = scene.primitives.get(0);
        var primitive = polylineCollection.get(0);

        visualizer.update(updateTime);
        //Clearing won't actually remove the primitive because of the
        //internal cache used by the visualizer, instead it just hides it.
        dynamicObjectCollection.removeAll();
        expect(primitive.show).toEqual(false);
    });

    it('Visualizer sets dynamicObject property.', function() {
        var times = [new JulianDate(0, 0), new JulianDate(1, 0)];
        var updateTime = new JulianDate(0.5, 0);
        var positions = [new Cartesian3(1234, 5678, 9101112), new Cartesian3(5678, 1234, 1101112)];

        var dynamicObjectCollection = new DynamicObjectCollection();
        visualizer = new DynamicPathVisualizer(scene, dynamicObjectCollection);

        expect(scene.primitives.length).toEqual(0);

        var testObject = dynamicObjectCollection.getOrCreateObject('test');
        var position = new SampledPositionProperty();
        testObject.position = position;
        position.addSamples(times, positions);

        var path = testObject.path = new DynamicPath();
        path.show = new ConstantProperty(true);
        path.color = new ConstantProperty(new Color(0.8, 0.7, 0.6, 0.5));
        path.width = new ConstantProperty(12.5);
        path.outlineColor = new ConstantProperty(new Color(0.1, 0.2, 0.3, 0.4));
        path.outlineWidth = new ConstantProperty(2.5);
        path.leadTime = new ConstantProperty(25);
        path.trailTime = new ConstantProperty(10);

        visualizer.update(updateTime);
        var polylineCollection = scene.primitives.get(0);
        var primitive = polylineCollection.get(0);
        expect(primitive.id).toEqual(testObject);
    });

    it('subSample works for constant properties', function() {
        var property = new ConstantPositionProperty(new Cartesian3(1000, 2000, 3000));
        var start = new JulianDate(0, 0);
        var stop = new JulianDate(1, 0);
        var updateTime = new JulianDate(1, 43200);
        var referenceFrame = ReferenceFrame.FIXED;
        var maximumStep = 10;
        var result = DynamicPathVisualizer._subSample(property, start, stop, updateTime, referenceFrame, maximumStep);
        expect(result).toEqual([property._value]);
    });

    it('subSample works for reference properties', function() {
        var property = new ConstantPositionProperty(new Cartesian3(1000, 2000, 3000));
        var start = new JulianDate(0, 0);
        var stop = new JulianDate(1, 0);
        var updateTime = new JulianDate(1, 43200);
        var referenceFrame = ReferenceFrame.FIXED;
        var maximumStep = 10;

        var dynamicObjects = new DynamicObjectCollection();
        var targetObject = dynamicObjects.getOrCreateObject('target');
        targetObject.position = property;

        var referenceProperty = new ReferenceProperty(dynamicObjects, 'target', ['position']);

        var result = DynamicPathVisualizer._subSample(referenceProperty, start, stop, updateTime, referenceFrame, maximumStep);
        expect(result).toEqual([property._value]);
    });

    it('subSample works for sampled properties', function() {
        var property = new SampledPositionProperty();

        var start = new JulianDate(0, 0);
        var stop = new JulianDate(1, 0);

        property.addSample(start, new Cartesian3(0, 0, 0));
        property.addSample(stop, new Cartesian3(0, 0, 100));

        var updateTime = new JulianDate(0, 43200);
        var referenceFrame = ReferenceFrame.FIXED;
        var maximumStep = 86400;
        var result = [];

        //A large maximum step causes no sub-smapling.
        DynamicPathVisualizer._subSample(property, start, stop, updateTime, referenceFrame, maximumStep, result);
        expect(result).toEqual([property.getValue(start), property.getValue(updateTime), property.getValue(stop)]);

        //An evenly spaced maximum step causes equal steps from start to stop
        maximumStep = 28800;
        var expectedStep = 28800;
        DynamicPathVisualizer._subSample(property, start, stop, updateTime, referenceFrame, maximumStep, result);
        expect(result).toEqual([property.getValue(start), property.getValue(JulianDate.addSeconds(start, expectedStep, new JulianDate())), property.getValue(updateTime), property.getValue(JulianDate.addSeconds(start, expectedStep * 2, new JulianDate())), property.getValue(stop)]);

        //An maximum step size that is slightly more than halfway between points causes a single step halfway between points
        maximumStep = 43201;
        expectedStep = 43200;
        updateTime = new JulianDate(0, 64800);
        DynamicPathVisualizer._subSample(property, start, stop, updateTime, referenceFrame, maximumStep, result);
        expect(result).toEqual([property.getValue(start), property.getValue(JulianDate.addSeconds(start, expectedStep, new JulianDate())), property.getValue(updateTime), property.getValue(stop)]);

        //An maximum step size that is slightly less than halfway between points causes two steps of the eqaul size to be taken between points
        maximumStep = 43199;
        expectedStep = 28800;
        updateTime = new JulianDate(0, 21600);
        DynamicPathVisualizer._subSample(property, start, stop, updateTime, referenceFrame, maximumStep, result);
        expect(result).toEqual([property.getValue(start), property.getValue(updateTime), property.getValue(JulianDate.addSeconds(start, expectedStep, new JulianDate())), property.getValue(JulianDate.addSeconds(start, expectedStep * 2, new JulianDate())), property.getValue(stop)]);
    });

    it('subSample works for interval properties', function() {
        var t1 = new JulianDate(0, 0);
        var t2 = new JulianDate(1, 0);
        var t3 = new JulianDate(2, 0);
        var t4 = new JulianDate(3, 0);

        var property = new TimeIntervalCollectionPositionProperty();
        property.intervals.addInterval(new TimeInterval({
            start : t1,
            stop : t2,
            data : new Cartesian3(0, 0, 1)
        }));
        property.intervals.addInterval(new TimeInterval({
            start : t2,
            stop : t3,
            isStartIncluded : false,
            isStopIncluded : false,
            data : new Cartesian3(0, 0, 2)
        }));
        property.intervals.addInterval(new TimeInterval({
            start : t3,
            stop : t4,
            data : new Cartesian3(0, 0, 3)
        }));

        var updateTime = new JulianDate(1, 43200);
        var referenceFrame = ReferenceFrame.FIXED;
        var maximumStep = 10;
        var result = [];
        DynamicPathVisualizer._subSample(property, t1, t4, updateTime, referenceFrame, maximumStep, result);
        expect(result).toEqual([new Cartesian3(0, 0, 1), new Cartesian3(0, 0, 2), new Cartesian3(0, 0, 3)]);

        DynamicPathVisualizer._subSample(property, t2, t3, updateTime, referenceFrame, maximumStep, result);
        expect(result).toEqual([new Cartesian3(0, 0, 1), new Cartesian3(0, 0, 2), new Cartesian3(0, 0, 3)]);

        DynamicPathVisualizer._subSample(property, t1, t2, updateTime, referenceFrame, maximumStep, result);
        expect(result).toEqual([new Cartesian3(0, 0, 1)]);

        DynamicPathVisualizer._subSample(property, t3, t4, updateTime, referenceFrame, maximumStep, result);
        expect(result).toEqual([new Cartesian3(0, 0, 3)]);
    });

    var CustomPositionProperty = function(innerProperty) {
        this.SampledProperty = innerProperty;
        this.isConstant = innerProperty.isConstant;
        this.definitionChanged = innerProperty.definitionChanged;
        this.referenceFrame = innerProperty.referenceFrame;

        this.getValue = function(time, result) {
            return innerProperty.getValue(time, result);
        };

        this.getValueInReferenceFrame = function(time, referenceFrame, result) {
            return innerProperty.getValueInReferenceFrame(time, referenceFrame, result);
        };

        this.equals = function(other) {
            return innerProperty.equals(other);
        };
    };

    it('subSample works for custom properties', function() {
        var t1 = new JulianDate(0, 0);
        var t2 = new JulianDate(1, 0);
        var t3 = new JulianDate(2, 0);
        var t4 = new JulianDate(3, 0);
        var updateTime = new JulianDate(1, 1);

        var sampledProperty = new SampledPositionProperty();
        sampledProperty.addSample(t1, new Cartesian3(0, 0, 1));
        sampledProperty.addSample(t2, new Cartesian3(0, 0, 2));
        sampledProperty.addSample(t3, new Cartesian3(0, 0, 3));
        sampledProperty.addSample(t4, new Cartesian3(0, 0, 4));

        var property = new CustomPositionProperty(sampledProperty);

        var referenceFrame = ReferenceFrame.FIXED;
        var maximumStep = 43200;
        var result = [];
        DynamicPathVisualizer._subSample(property, t1, t4, updateTime, referenceFrame, maximumStep, result);
        expect(result).toEqual([sampledProperty.getValue(t1), sampledProperty.getValue(JulianDate.addSeconds(t1, maximumStep, new JulianDate())), sampledProperty.getValue(JulianDate.addSeconds(t1, maximumStep * 2, new JulianDate())), sampledProperty.getValue(updateTime), sampledProperty.getValue(JulianDate.addSeconds(t1, maximumStep * 3, new JulianDate())), sampledProperty.getValue(JulianDate.addSeconds(t1, maximumStep * 4, new JulianDate())), sampledProperty.getValue(JulianDate.addSeconds(t1, maximumStep * 5, new JulianDate())), sampledProperty.getValue(JulianDate.addSeconds(t1, maximumStep * 6, new JulianDate()))]);
    });

    it('subSample works for composite properties', function() {
        var t1 = new JulianDate(0, 0);
        var t2 = new JulianDate(1, 0);
        var t3 = new JulianDate(2, 0);
        var t4 = new JulianDate(3, 0);
        var t5 = new JulianDate(4, 0);

        var constantProperty = new ConstantPositionProperty(new Cartesian3(0, 0, 1));

        var intervalProperty = new TimeIntervalCollectionPositionProperty();
        intervalProperty.intervals.addInterval(new TimeInterval({
            start : t1,
            stop : t2,
            data : new Cartesian3(0, 0, 1)
        }));
        intervalProperty.intervals.addInterval(new TimeInterval({
            start : t2,
            stop : t3,
            isStartIncluded : false,
            isStopIncluded : false,
            data : new Cartesian3(0, 0, 2)
        }));
        intervalProperty.intervals.addInterval(new TimeInterval({
            start : t1,
            stop : t2,
            data : new Cartesian3(0, 0, 3)
        }));

        var sampledProperty = new SampledPositionProperty();
        sampledProperty.addSample(t1, new Cartesian3(0, 0, 1));
        sampledProperty.addSample(t2, new Cartesian3(0, 0, 2));
        sampledProperty.addSample(t3, new Cartesian3(0, 0, 3));
        sampledProperty.addSample(t4, new Cartesian3(0, 0, 4));

        var dynamicObjects = new DynamicObjectCollection();
        var targetObject = dynamicObjects.getOrCreateObject('target');
        targetObject.position = new ConstantPositionProperty(new Cartesian3(0, 0, 5));
        var referenceProperty = new ReferenceProperty(dynamicObjects, 'target', ['position']);

        var property = new CompositePositionProperty();
        property.intervals.addInterval(new TimeInterval({
            start : t1,
            stop : t2,
            data : intervalProperty
        }));
        property.intervals.addInterval(new TimeInterval({
            start : t2,
            stop : t3,
            isStartIncluded : false,
            isStopIncluded : false,
            data : constantProperty
        }));
        property.intervals.addInterval(new TimeInterval({
            start : t3,
            stop : t4,
            data : sampledProperty
        }));
        property.intervals.addInterval(new TimeInterval({
            start : t4,
            stop : t5,
            isStartIncluded : false,
            isStopIncluded : true,
            data : referenceProperty
        }));

        var updateTime = new JulianDate(0, 0);
        var referenceFrame = ReferenceFrame.FIXED;
        var maximumStep = 43200;
        var result = [];
        DynamicPathVisualizer._subSample(property, t1, t5, updateTime, referenceFrame, maximumStep, result);
        expect(result).toEqual([intervalProperty.intervals.get(0).data,
                                constantProperty.getValue(t1),
                                sampledProperty.getValue(t3),
                                sampledProperty.getValue(JulianDate.addSeconds(t3, maximumStep, new JulianDate())),
                                sampledProperty.getValue(t4),
                                targetObject.position.getValue(t5)]);
    });

}, 'WebGL');
