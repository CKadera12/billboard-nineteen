(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"index_atlas_P_", frames: [[0,0,246,169],[0,171,238,126]]},
		{name:"index_atlas_NP_", frames: [[0,0,970,250],[0,252,218,126],[220,252,95,69]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.fourteentable = function() {
	this.spriteSheet = ss["index_atlas_NP_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.nineteenbottomleft = function() {
	this.spriteSheet = ss["index_atlas_NP_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.nineteenbottomright = function() {
	this.spriteSheet = ss["index_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.nineteencookies = function() {
	this.spriteSheet = ss["index_atlas_NP_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.nineteentopright = function() {
	this.spriteSheet = ss["index_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.topcookiesnineteen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.nineteencookies();
	this.instance.parent = this;
	this.instance.setTransform(-47.5,-34.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.topcookiesnineteen, new cjs.Rectangle(-47.5,-34.5,95,69), null);


(lib.readyserveshrimp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006E47").s().p("AiFC7QgOgEAAgMQAAgJAMgEIAOgHQAGgHACgVQACgVAAhFIAAgsQAAhLgCgVQgDgVgGgFIgNgEQgRgFAAgKQAAgGAFgFQAFgFALgEIAngMQASgFAKAAQAIAAADAEQADAEAAAKIAAAOIABAEIABACIALgHIAKgIQARgNAPgFQAQgHAQABQAzgBAgAmQAhAlAAA8QAABAgkArQglAqg4ABQgXAAgJgHQgJgHAAgLQAAgFAEgFQAEgEAJgBIAHABIAJABQAeABATgZQASgaAAgqQAAgvgUgcQgUgdgfgBQgcAAgQAQQgRAQAAAqIAACuIACAbQABAMADADQAEAEAMAEIALADIAGAFIACAIQAAAKgQAEQgQAEgnAAQgoABgOgFg");
	this.shape.setTransform(-26.4,43.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006E47").s().p("AjeCIQgOgEAAgMQAAgJAOgGIAHgCQAHgEADgKQADgJAAgVIAAgTIAAgVIAAgQQAAgygCgQQgDgPgGgEIgNgEQgQgFAAgKQAAgFAFgFIARgKIAogOIAbgEQAIAAAEAEQADAEABAKIAAAPIAAADIAAADIACAAIABAAIACgBIAGgFIADgEQAhgdAhAAQANAAAMADQAMAEALAIQAKAGAKANQALAMABAAQAFAAAGgIIANgMQARgQAOgFQANgFAQAAQAgAAAYAMQAYANAKAXQANAaAABPIAAAbIAAAQIAAAMQAAAPACAIQADAHAHAEIAHACQAOAGAAAJQAAAMgNAEQgNAEgqAAQgoAAgNgEQgOgEAAgLQAAgKAPgGIAKgEQAGgEADgNQADgOAAggQAAhRgLgWQgLgWgdABQgggBgNAcQgOAcgBBCIAAAPQAAAdAEAKQACAKAIAEIAGACQAOAGAAAJQAAAMgMAEQgNAEgrAAQglAAgNgEQgOgEAAgLQABgKAOgFIAKgEQAGgEADgLQACgMAAgfQAAhXgLgWQgLgVgeAAQgPgBgMAKQgNAIgIAOQgGANgCAXQgDAVAAA0QAAAZACAJQADAKAGAEIAKAEQAOAFABAKQAAALgOAFQgOADgkAAQgqAAgNgEg");
	this.shape_1.setTransform(-67.6,38.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006E47").s().p("AgwDEQgOgEAAgMQAAgJAOgGIAHgCQAHgEADgKQADgJAAgVIgBgTIAAgVIAAgdQAAgrgCgNQgCgMgGgEIgMgEQgRgFAAgKQAAgGAFgFQAFgEAMgFIApgOIAdgEQAHAAAEAEQADAGAAAMIAAARIgBAMIgCBFIAAACIgBBDQAAAaACALQADALAGAEIAKAEQAOAFAAAKQAAALgNAFQgOADgkAAQgpAAgNgEgAghiKQgMgJAAgOQAAgQANgLQANgLASAAQARAAAMAKQAMAJAAAPQAAAQgNAKQgNALgSAAQgSAAgLgKg");
	this.shape_2.setTransform(-100.9,32.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#006E47").s().p("AhTCIQgNgEAAgMQAAgJANgGIAHgCQAIgEACgKQADgJAAgVIAAgTIAAgVIAAgQQAAgygCgQQgDgPgGgEIgMgEQgRgFAAgKQAAgGAGgFQAEgEANgFIAlgMIAYgFQANAAAFAlIAAAGIADABQAOgWAPgMQAPgLAPAAQAUAAALALQALALAAAUQABATgKALQgIAKgQAAIgNgCIgMgIIgGgLQgDgHgEAAQgSAAgIAaQgGAagBBTQAAAYADAMQADAMAIAEIAKADQARAFAAALQAAALgPAEQgPAEgmAAQgpAAgOgEg");
	this.shape_3.setTransform(-118.8,38.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#006E47").s().p("AAmDGQgOgFAAgLQABgKAOgFIAKgEQAGgFADgLQACgMAAgdQAAhYgLgWQgLgVgdAAQgOgBgNAKQgNAIgIANQgFAMgDAWQgDAVABA1QgBAcADAJQACAJAGAEIAKAEQAOAFAAAKQAAALgOAFQgNADgjAAQgrAAgNgEQgNgEgBgMQABgJANgGIAHgCQAHgFAEgLQADgMAAgeIAAgsIAAgqIgCh9QgCgegFgGQgCgDgQgFQgRgEAAgKQAAgHAHgGQAHgEAYgKIAbgHIAagEQAJAAAEAGQADAFAAANIAAALIgCBtIAAAOIACAHIADACIAGgHIAKgKQAOgOAPgHQAPgGARAAQAvAAAXAeQAXAeAAA+IAAAZIABAxIAAAQQAAANADAHQACAGAHAEIAGACQAOAGAAAJQAAAMgNAEQgNAEgsAAQgjAAgOgDg");
	this.shape_4.setTransform(-147.1,32.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#006E47").s().p("AhEDGQgegGgUgMQgKgGgIgYQgGgXAAgfQAAgNAEgGQAFgHAJAAQANAAAOAZIAGALQASAfAUAOQAUANAdAAQAeAAAVgRQAUgSAAgaQAAgnhRgjIgJgEQhCgcgWgZQgWgYABgnQgBgxAlggQAkggA6AAIAgADIAlAJIAMgHIAJgDQAHAAAGAFQAFAEAFAKQAJARAHASQAEASAAAOQAAAJgDAFQgFAFgIAAQgPAAgOgUIgDgFQgQgVgSgJQgSgKgXAAQgeAAgSAOQgSAPAAAZQAAAWAPAPQAOAPA7AZIALAFQAxAVAWASQAPAOAJATQAHASABAWQAAA4goAgQgnAfhFAAQgiAAgegHg");
	this.shape_5.setTransform(-179.4,32.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#006E47").s().p("AhYBoQgogoAAg8QAAg/ApgqQAogpA9AAQA1AAAgAeQAeAeAAA0QAAAQgFAGQgFAFgUABIhpAAQgJgBgFgEQgFgEAAgIQAAgHAFgEQAEgEAKAAIA4AAIAPgCQADgDAAgGQAAgagSgSQgSgSgYAAQgiAAgPAcQgQAdAAAoQAAArAWAfQAWAfAiAAQAUAAAOgFQAOgEAOgJIAJgIQAOgLAHAAQAHAAADADQAFAEAAAGQgBAHgGAJQgHAKgMAJQgYAUgWAIQgWAJgaAAQg5AAgngng");
	this.shape_6.setTransform(180.2,-26.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#006E47").s().p("AgdBzQgQgbgmhaIgQgpQgUg0gMgGIgIgEQgQgGAAgKQAAgLAOgEQAOgFAsAAQAmAAANAFQANAEAAALIgCAJIgFAFIgJAEQgLAEAAAGIAGAWIAVA1IAXA1QAGAMADAAQAEAAAFgHIAMgYIAehFQAKgaAAgKIgCgJIgHgHIgHgDQgNgFAAgJQAAgKANgEQAMgFAiAAQAdAAALAFQAMAEAAAKQAAALgOAFIgKADQgMAGgYA2IgHASIgLAZQg+COgSAAQgMAAgPgbg");
	this.shape_7.setTransform(151.2,-25.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#006E47").s().p("AhTCIQgNgEAAgMQAAgJANgGIAHgCQAIgEACgKQADgJABgVIgBgTIAAgVIAAgQQAAgygCgQQgCgPgHgEIgMgEQgRgFAAgKQAAgGAGgFQAEgEANgFIAlgMIAYgFQAOAAAEAlIAAAGIADABQANgWAQgMQAPgLAPAAQATAAAMALQALALAAAUQABATgKALQgIAKgQAAIgNgCIgMgIIgGgLQgDgHgEAAQgSAAgIAaQgGAagBBTQAAAYADAMQAEAMAHAEIAKADQARAFAAALQAAALgPAEQgPAEgmAAQgpAAgOgEg");
	this.shape_8.setTransform(126.6,-26.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#006E47").s().p("AhZBoQgngoAAg8QAAg/AogqQAogpA/AAQA1AAAeAeQAfAeAAA0QAAAQgFAGQgFAFgVABIhoAAQgJgBgFgEQgFgEAAgIQAAgHAFgEQAFgEAIAAIA6AAIANgCQAEgDAAgGQAAgagSgSQgSgSgYAAQgiAAgPAcQgQAdAAAoQAAArAWAfQAWAfAiAAQAUAAAOgFQAOgEANgJIAKgIQAOgLAIAAQAGAAAEADQADAEAAAGQABAHgHAJQgHAKgLAJQgYAUgXAIQgWAJgaAAQg6AAgngng");
	this.shape_9.setTransform(100.5,-26.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#006E47").s().p("AhEDGQgegGgTgMQgLgGgHgYQgIgXABgfQAAgNAEgGQAFgHAJAAQANAAAOAZIAGALQARAfAVAOQAVANAcAAQAeAAAVgRQAUgSAAgaQAAgnhRgjIgJgEQhCgcgWgZQgWgYABgnQgBgxAkggQAlggA6AAIAgADIAlAJIAMgHIAKgDQAGAAAGAFQAEAEAGAKQAJARAHASQAEASAAAOQAAAJgEAFQgEAFgIAAQgPAAgOgUIgDgFQgQgVgSgJQgSgKgXAAQgeAAgSAOQgSAPAAAZQAAAWAPAPQAPAPA6AZIALAFQAyAVAVASQAPAOAJATQAHASABAWQgBA4gnAgQgnAfhFAAQgiAAgegHg");
	this.shape_10.setTransform(69.6,-32.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#006E47").s().p("AhBAZQgFgDAAgHIADgNIAGgPQAEgIAEgCQAEgDAMAAIANAAIAYAAIAugBIAIgBQAJAAADADQAFAEAAAHQAAAPgJANQgJANgNAAIgNgBIgPAAIg8ACIgFABQgJAAgDgEg");
	this.shape_11.setTransform(44.1,-26.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#006E47").s().p("AhjBnQgngpAAg9QAAg9ApgpQApgpA8AAQA8AAAmAnQAlAmAAA8QAAA/goAqQgpArg7AAQg7AAgngogAg0hSQgQAXAAAlQAAA2AXAkQAXAlAgAAQAbAAARgXQAQgXAAglQAAg1gXgkQgXgkggAAQgbgBgRAWg");
	this.shape_12.setTransform(18.8,-26.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#006E47").s().p("AgOClQgOgFgJgIQgKgJgEgQQgEgOAAgpIAAiTIgZAAIgIgCIgDgIIAAgGQAAgJAdgYIALgKIALgJQAcgaALAAIAIADQADADAAADIAAA0IA9AAQAHAAADACQACADAAAIIAAAHQAAAGgCADQgDAEgHAAIg4AAIgFADIgBAFIAACIQAAAkAGAIQAGAJAQAAQAIABAOgFIATgFQAGAAAEAEQAEAEAAAGQAAAOgXAOQgYAPgdAAQgQAAgOgFg");
	this.shape_13.setTransform(-6.6,-28.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#006E47").s().p("AhBAZQgFgDAAgHIADgNIAGgPQAEgIAEgCQAEgDAMAAIANAAIAYAAIAugBIAIgBQAJAAADADQAFAEAAAHQAAAPgJANQgJANgNAAIgNgBIgPAAIg8ACIgFABQgJAAgDgEg");
	this.shape_14.setTransform(-26.1,-26.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#006E47").s().p("Ah+C1QgNgLAAgSQAAgNAJgKQAKgKAOAAIAMACIAIAGIAIAKQAHALAFAAQAOAAAOgUQAPgUAAgWQAAgXgUgsIgCgGIgshgIgag1QgEgKgQgHIgBAAQgJgEgDgEQgEgDAAgGQAAgMAPgFQAOgFAoAAQAoAAAOAFQANAEAAALIgBAIIgFAGIgKAEQgLAEAAAFIAGAVIAWA3IAWAzQAHANAEAAQADAAAGgNIASgrIAUg2QAGgUAAgHQAAgIgPgIQgPgJAAgHQAAgKAMgEQANgEAfAAQAhAAALAFQAMAEAAALQAAAKgQAEIgLAEQgQAIgRAvIgIAVIgjBYQgtBygdAiQgdAjgoAAQgUAAgNgMg");
	this.shape_15.setTransform(-49.5,-20.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#006E47").s().p("Ah3CmQghglAAg7QAAhDAlgpQAlgqA7AAIATACQAIACAGAGQAEAGAAAIQAAAOgSAAIgIAAIgHgBQgeAAgSAZQgTAYAAArQAAAuAUAdQAUAdAfAAQAcAAAQgPQAPgQAAgfIAAhLIAAh+QAAgTgDgIQgEgHgJgEIgIgCQgRgFAAgKQAAgHAHgFQAGgFAVgIIAegJIAbgDQAJAAAEAFQAEAGAAAMIAAAOIgECoIADBzQABAbAEADIATAHQAPADAAAJQAAANgnANIgcAHIgVADQgIAAgDgFQgEgEABgJIAAgOIgBgFIgCgCIgIAGIgMAJQgRANgOAGQgQAFgRAAQgzAAggglg");
	this.shape_16.setTransform(-79.1,-32.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#006E47").s().p("AAxCBIgPgOIgMAGQghAWgiAAQgoAAgZgXQgZgXAAgmQAAgsAggYQAggYA5AAQAOAAAHAEQAHAEAAAKQAAAQgTAAQgbAAgRANQgQANAAAXQAAAWAOANQAPAOAYAAQAaAAALgMQAMgMAAgdIAAhoQAAgYgLgNQgKgNgTAAQgNAAgMAGQgMAGgKAMIgGAHQgRAWgTAAQgKAAgHgHQgGgHAAgMQAAgaAggSQAggRAyAAQAdAAAWAIQAWAIAMAPQAIAKAEARQADARAAAoIAABXQAAAQADAHQACAIAGACIAIACQASAFAAAJQAAANgTALQgSAKgZAAQgMAAgNgOg");
	this.shape_17.setTransform(-111.1,-26.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#006E47").s().p("AhZBoQgngoAAg8QAAg/AogqQAogpA/AAQA1AAAeAeQAfAeAAA0QAAAQgFAGQgFAFgVABIhoAAQgJgBgFgEQgFgEAAgIQAAgHAFgEQAFgEAIAAIA6AAIANgCQAEgDAAgGQAAgagSgSQgSgSgZAAQggAAgQAcQgQAdAAAoQAAArAWAfQAWAfAiAAQAUAAAOgFQAOgEANgJIALgIQANgLAIAAQAFAAAEADQAEAEAAAGQABAHgHAJQgHAKgLAJQgYAUgXAIQgWAJgaAAQg6AAgngng");
	this.shape_18.setTransform(-141,-26.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#006E47").s().p("AA7CJQgahXgTgSQgTgSgcAAQgWAAAAgRQAAgRASAAQAuAAAWgSQAVgSAAglQAAgkgWgTQgWgSgqAAQgWAAgIADQgIADgCAHIgDAZIgCA3IAAB5IACBSQACATAFAEIAMAGQARAGAAALQAAAMgPAFQgPAFgsAAQgqAAgQgFQgPgFAAgMQAAgLARgGIAMgGQAGgFACghQADggAAhWIgChnQgDgpgDgFQgDgDgPgHQgOgGAAgKQAAgKAIgFQAIgEASAAIA8AAIA3gCIAsgBQA7AAAgAaQAgAZAAAxQAAAkgVAaQgVAbgmALIAAADQAdAFARATQARASANAsIAHAcQALAqAQAAIAIAAIAKgBQAFAAAEAEQAEAFAAAFQAAANgPAIQgQAIgaAAQg2AAgThAg");
	this.shape_19.setTransform(-175,-32.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.readyserveshrimp, new cjs.Rectangle(-197.3,-67.2,394.6,134.5), null);


(lib.partyreadyrecipes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006E47").s().p("AgUCPIgdgFIgJAFIgIABIgGgBIgFgEQgJgHgIgWQgIgXAAgUQAAgJAEgFQAFgGAHAAQANAAANAWIAKAQQAIALAPAGQAOAHAPAAQASAAALgJQAKgJAAgQQAAgXgtgWIgPgIQgrgVgPgRQgQgSAAgaQAAgkAZgWQAZgXAoAAIATABIATAEIANgFIAJgCQANAAANAWQANAVAAAYQAAAKgFAFQgEAFgIAAQgGAAgGgFQgGgFgJgNQgKgRgLgHQgLgHgPAAQgPAAgKAJQgKAJAAAPQAAAMAKAKQAKAKAiARIADABQBMAlAAAtQAAAmgdAaQgeAZgsAAg");
	this.shape.setTransform(210.4,32.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006E47").s().p("AhTCIQgNgEAAgNQAAgJANgEIAIgEQAGgDAEgKQACgJAAgVIAAgTIAAgVIAAgRQAAgygCgOQgDgQgGgDIgMgFQgQgGAAgIQAAgIAEgEQAGgFAMgEIAkgMIAZgFQANAAAFAlIAAAFIADABQAOgVAPgMQAPgMAPAAQAUAAALAMQAMALAAAUQAAASgJAMQgJALgQgBIgNgCIgMgIIgGgLQgDgHgEAAQgSAAgIAaQgGAbgBBSQABAYACAMQADAMAIADIALAEQAQAGAAAKQAAALgPAEQgPAFgmgBQgpABgOgFg");
	this.shape_1.setTransform(188.5,32.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006E47").s().p("AhZBnQgngoAAg7QAAg/AogqQAogpA/AAQA0AAAgAeQAeAeAAAzQAAARgFAGQgFAGgUgBIhpAAQgKABgEgFQgFgFAAgHQAAgIAFgDQAEgEAJAAIA6AAIANgCQAEgCAAgGQAAgbgSgSQgSgSgYAAQgiAAgPAdQgQAcAAAoQAAArAWAfQAWAfAiAAQAUAAAOgEQAOgFANgKIAKgHQAOgLAIAAQAFgBAFAEQADAFAAAFQAAAHgGAJQgHAKgMAJQgXAUgXAJQgWAIgaAAQg5AAgogog");
	this.shape_2.setTransform(162.4,33);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#006E47").s().p("AgOClQgOgEgJgJQgKgJgEgQQgEgPAAgpIAAiSIgZAAIgIgCIgDgHIAAgHQAAgJAdgZIALgJIALgKQAcgZALAAIAIADQADACAAAEIAAA0IA9AAQAHAAADACQACADAAAIIAAAGQAAAIgCACQgDAEgHAAIg4AAIgFACIgBAHIAACHQAAAjAGAKQAGAIAQABQAIgBAOgEIATgEQAGgBAEAEQAEAEAAAFQAAAPgXAOQgYAOgdABQgQgBgOgEg");
	this.shape_3.setTransform(137.9,30.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#006E47").s().p("AgOClQgOgEgJgJQgKgJgEgQQgEgPAAgpIAAiSIgZAAIgIgCIgDgHIAAgHQAAgJAdgZIALgJIALgKQAcgZALAAIAIADQADACAAAEIAAA0IA9AAQAHAAADACQACADAAAIIAAAGQAAAIgCACQgDAEgHAAIg4AAIgFACIgBAHIAACHQAAAjAGAKQAGAIAQABQAIgBAOgEIATgEQAGgBAEAEQAEAEAAAFQAAAPgXAOQgYAOgdABQgQgBgOgEg");
	this.shape_4.setTransform(118.1,30.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#006E47").s().p("AAxCBIgPgOIgMAGQghAWgiAAQgoAAgZgXQgZgXAAgmQAAgsAggYQAggYA5AAQAOAAAHAEQAHAEAAAKQAAAQgTAAQgbAAgRANQgQANAAAXQAAAWAOANQAPAOAYAAQAaAAALgMQAMgMAAgdIAAhoQAAgYgLgNQgKgNgTAAQgNAAgMAGQgMAGgKAMIgGAHQgRAWgTAAQgKAAgHgHQgGgHAAgMQAAgaAggSQAggRAyAAQAdAAAWAIQAWAIAMAPQAIAKAEARQADARAAAoIAABXQAAAQADAHQACAIAGACIAIACQASAFAAAJQAAANgTALQgSAKgZAAQgMAAgNgOg");
	this.shape_5.setTransform(93.5,33);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#006E47").s().p("AgtDFQgOgEAAgMQAAgJALgFIAOgHQAFgFACgQIACg3IAAgqIAAg0IAAgVQgBhFgCgUQgCgUgGgDIgRgGQgRgFAAgKQgBgGAGgFQAFgFAUgGIAlgLIAbgEQAJAAADAGQADAFAAANIAAAVQgEBiABBjIACBdQABAUAFAFIAPAIQANAFAAALQAAAKgOAFQgOAEgjAAQgpAAgNgFg");
	this.shape_6.setTransform(70,26.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#006E47").s().p("AiODDQgPgFAAgMQgBgLASgHIAMgGQAFgEADghQADghgBhWIgBhmQgDgpgEgFQgCgEgPgGQgOgGAAgKQgBgKAJgFQAJgFAQAAIAdAAIAfAAIA3gBIAsgCQA+ABAfAaQAeAaABA1QgBA5glAfQgnAdhIAAQgbAAgBgSQABgUAXABQAjgBAUgSQAWgSAAgpQAAglgWgSQgWgSgrAAQgUAAgJADQgIADgDAHIgDAZIgBA6IAAB4IACBPQACAUAFAEIAMAFQARAHAAALQAAAMgPAFQgPAFgsgBQgrABgPgFg");
	this.shape_7.setTransform(46.6,26.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#006E47").s().p("AhYBnQgogoAAg7QAAg/ApgqQAogpA9AAQA1AAAgAeQAeAeAAAzQAAARgFAGQgFAGgUgBIhpAAQgJABgFgFQgFgFAAgHQAAgIAFgDQAEgEAKAAIA4AAIAPgCQADgCAAgGQAAgbgSgSQgSgSgYAAQgiAAgPAdQgQAcAAAoQAAArAWAfQAWAfAiAAQAUAAAOgEQAOgFAOgKIAJgHQAOgLAHAAQAHgBADAEQAFAFAAAFQgBAHgGAJQgHAKgMAJQgYAUgWAJQgWAIgaAAQg5AAgngog");
	this.shape_8.setTransform(-1.1,33);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#006E47").s().p("AgUCPIgdgFIgJAFIgIABIgGgBIgFgEQgJgHgIgWQgIgXAAgUQAAgJAEgFQAFgGAHAAQANAAANAWIAKAQQAIALAPAGQAOAHAPAAQASAAALgJQAKgJAAgQQAAgXgtgWIgPgIQgrgVgPgRQgQgSAAgaQAAgkAZgWQAZgXAoAAIATABIATAEIANgFIAJgCQANAAANAWQANAVAAAYQAAAKgFAFQgEAFgIAAQgGAAgGgFQgGgFgJgNQgKgRgLgHQgLgHgPAAQgPAAgKAJQgKAJAAAPQAAAMAKAKQAKAKAiARIADABQBMAlAAAtQAAAmgdAaQgeAZgsAAg");
	this.shape_9.setTransform(-28.1,32.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#006E47").s().p("AhYBnQgogoAAg7QAAg/ApgqQAogpA9AAQA1AAAgAeQAeAeAAAzQAAARgFAGQgFAGgUgBIhpAAQgJABgFgFQgFgFAAgHQAAgIAFgDQAEgEAKAAIA4AAIAPgCQADgCAAgGQAAgbgSgSQgSgSgYAAQgiAAgPAdQgQAcAAAoQAAArAWAfQAWAfAiAAQAUAAAOgEQAOgFAOgKIAJgHQAOgLAHAAQAHgBADAEQAFAFAAAFQgBAHgGAJQgHAKgMAJQgYAUgWAJQgWAIgaAAQg5AAgngog");
	this.shape_10.setTransform(-54.7,33);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#006E47").s().p("AhZBnQgngoAAg7QAAg/AogqQAogpA/AAQA1AAAeAeQAfAeAAAzQAAARgFAGQgFAGgVgBIhoAAQgJABgFgFQgFgFAAgHQAAgIAFgDQAFgEAIAAIA6AAIANgCQAEgCAAgGQAAgbgSgSQgSgSgYAAQgiAAgPAdQgQAcAAAoQAAArAWAfQAWAfAiAAQAUAAAOgEQAOgFANgKIAKgHQAOgLAIAAQAFgBAFAEQADAFAAAFQAAAHgGAJQgHAKgMAJQgYAUgWAJQgWAIgaAAQg5AAgogog");
	this.shape_11.setTransform(-84.1,33);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#006E47").s().p("AAmDFQgNgEAAgLQAAgKANgFIALgFQAGgDACgMQADgMAAgdQAAhYgLgVQgLgXgdAAQgOAAgNAJQgNAJgIAOQgGAMgCAUQgCAWgBA2QABAcACAIQACAJAGADIAKAFQAOAFAAAKQAAALgNAEQgOAEgjAAQgsABgMgFQgOgEAAgNQAAgJAOgEIAHgEQAIgEADgLQACgMAAgeIAAgsIAAgrIgBh8QgCgdgFgHQgCgDgRgFQgQgEAAgKQAAgHAHgGQAGgEAZgKIAcgIIAZgCQAJgBAEAGQAEAFgBAMIAAAMIgCBuIAAANIABAHIAFABIAFgGIAKgLQAOgNAQgHQAOgGARgBQAvABAXAeQAXAeABA+IAAAZIAAAxIAAAQQAAAOACAFQADAHAGADIAIAEQANAEAAAJQAAANgNAEQgNAFgrgBQgkAAgOgEg");
	this.shape_12.setTransform(-115.8,26.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#006E47").s().p("AgqDAQgkgOgdgZQgfgdgRgpQgRgoAAgwQAAgmALghQALghAWgbQAbghAngRQAmgSAtAAIAiADIA1ALIAFgCIAWgEIAJADIAHAHQAJAPAGAVQAGAVAAAQQAAAMgFAGQgEAGgJAAQgMAAgVgZIgRgUQgOgPgXgIQgWgIgaAAQg1AAgfAlQgeAkAABAQgBBRAnA0QAoA1A7AAQAYAAAWgIQAVgIAOgOIANgQQAMgQAJAAQAHAAAEAIQAFAHAAANQAAAagHAOQgIAPgMAAIgCAAIgFgBQgZAOgaAGQgZAHgdAAQgoAAgkgNg");
	this.shape_13.setTransform(-150.6,27);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#006E47").s().p("AhlCzQgjgVAAgfQAAgNAIgJQAHgJAPAAQAMAAAFAGQAHAHADANQAHAUASALQARAMAhAAQAkAAAYgOQAZgPgBgUQABgNgKgHQgJgIgRAAIgfADIgqACQgxAAgbgRQgZgQAAgWQgBgOAKgNQAJgNAVgMQgRgOgIgRQgIgSAAgVQAAgtAigeQAigdAzAAIAdACIApAIQAKAAANgFQAMgFAQgMIAJAJIADAJQABAMgJALQgJAKgQAJIAJAWIACAWQAAAughAdQgiAbg0AAIgegCIgagGIgIALIgDAKQAAANANAGQANAGAbAAIAqgCIArgEQAlAAAVAQQAUAPAAAdQAAAsgrAeQgrAdhBAAQg0AAgjgWgAgsiIQgPASAAAbQAAAcAOARQAOARAWAAQAXAAAPgRQAQgRAAgcQgBgcgPgRQgPgSgWAAQgWAAgOASg");
	this.shape_14.setTransform(215.6,-27.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#006E47").s().p("AiGCIQgOgEAAgNQAAgJAOgEIAGgEQAIgDACgKQAEgJAAgVIgBgTIAAgVIAAgcQAAgrgCgOQgCgNgGgCIgNgFQgRgGAAgIQAAgGAGgGQAFgFAMgEIAngNIAdgFQAHAAAEAFQADADAAAKIAAASIABADIABABIACgBIABAAIAGgGIAGgGQAegbAigBQATAAATAJQASAIANAPQANAPAFAVQAFAVAAAsIAAAkIAAASIgBAQQAAATAEAJQACAHAHAEIAHAEQAOAEAAAJQAAANgNAEQgNAEgqAAQgmAAgNgEQgNgEgBgLQAAgKAOgFIALgFQAFgDAEgMQACgMAAgeQAAhXgLgVQgLgXgeAAQgNAAgOAJQgNAJgHAPQgGALgDAWQgBAVAAA2QAAAaABAKQADAIAFADIALAFQAOAFAAAKQAAALgOAEQgNAEgkAAQgqABgNgFg");
	this.shape_15.setTransform(183.3,-32.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#006E47").s().p("AgwDEQgOgEAAgNQAAgJAOgEIAHgEQAHgDADgKQADgJAAgVIgBgTIAAgVIAAgdQAAgrgCgNQgCgNgGgCIgMgFQgRgGAAgIQAAgGAFgGQAFgFAMgEIApgNIAdgGQAHAAAEAGQADAFAAANIAAAQIgBAMIgCBGIAAABIgBBDQAAAaACAMQADAKAGADIAKAFQAOAFAAAKQAAALgNAEQgOAEgkAAQgpABgNgFgAghiJQgMgKAAgPQAAgPANgMQANgLASABQARgBAMAKQAMALAAAPQAAAOgNALQgNALgSAAQgSAAgLgJg");
	this.shape_16.setTransform(158.6,-38.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#006E47").s().p("AgUCPIgdgFIgJAFIgIABIgGgBIgFgEQgJgHgIgWQgIgXAAgUQAAgJAEgFQAFgGAHAAQANAAANAWIAKAQQAIALAPAGQAOAHAPAAQASAAALgJQAKgJAAgQQAAgXgtgWIgPgIQgrgVgPgRQgQgSAAgaQAAgkAZgWQAZgXAoAAIATABIATAEIANgFIAJgCQANAAANAWQANAVAAAYQAAAKgFAFQgEAFgIAAQgGAAgGgFQgGgFgJgNQgKgRgLgHQgLgHgPAAQgPAAgKAJQgKAJAAAPQAAAMAKAKQAKAKAiARIADABQBMAlAAAtQAAAmgdAaQgeAZgsAAg");
	this.shape_17.setTransform(138.5,-32.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#006E47").s().p("AAxCBIgPgOIgMAGQghAWgiAAQgoAAgZgXQgZgXAAgmQAAgsAggYQAggYA5AAQAOAAAHAEQAHAEAAAKQAAAQgTAAQgbAAgRANQgQANAAAXQAAAWAOANQAPAOAYAAQAaAAALgMQAMgMAAgdIAAhoQAAgYgLgNQgKgNgTAAQgNAAgMAGQgMAGgKAMIgGAHQgRAWgTAAQgKAAgHgHQgGgHAAgMQAAgaAggSQAggRAyAAQAdAAAWAIQAWAIAMAPQAIAKAEARQADARAAAoIAABXQAAAQADAHQACAIAGACIAIACQASAFAAAJQAAANgTALQgSAKgZAAQgMAAgNgOg");
	this.shape_18.setTransform(112.1,-32.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#006E47").s().p("AhZBnQgngoAAg7QAAg/AogqQAogpA/AAQA1AAAeAeQAfAeAAAzQAAARgFAGQgFAGgVgBIhoAAQgJABgFgFQgFgFAAgHQAAgIAFgDQAFgEAIAAIA6AAIANgCQAEgCAAgGQAAgbgSgSQgSgSgZAAQggAAgQAdQgQAcAAAoQAAArAWAfQAWAfAiAAQAUAAAOgEQAOgFANgKIALgHQANgMAIAAQAFAAAEAEQAEAFAAAFQABAHgHAJQgHAKgLAJQgYAUgXAJQgWAIgaAAQg6AAgngog");
	this.shape_19.setTransform(82.2,-32.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#006E47").s().p("AgtDFQgOgEAAgMQAAgJALgFIAOgHQAFgFACgQIACg3IAAgqIAAg0IAAgVQgBhFgCgUQgCgUgGgDIgRgGQgRgFAAgKQgBgGAGgFQAFgFAUgGIAlgLIAbgEQAJAAADAGQADAFAAANIAAAVQgEBiABBjIACBdQABAUAFAFIAPAIQANAFAAALQAAAKgOAFQgOAEgjAAQgpAAgNgFg");
	this.shape_20.setTransform(59.2,-38.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#006E47").s().p("AiODDQgPgFAAgMQgBgLASgHIAMgGQAFgEADghQADghgBhWIgBhmQgDgpgEgFQgCgEgPgGQgOgGAAgKQgBgKAJgFQAJgFAQAAIAdAAIAfAAIA3gBIAsgCQA+ABAfAaQAeAaABA1QgBA5glAfQgnAdhIAAQgbAAgBgSQABgUAXABQAjgBAUgSQAWgSAAgpQAAglgWgSQgWgSgrAAQgUAAgJADQgIADgDAHIgDAZIgBA6IAAB4IACBPQACAUAFAEIAMAFQARAHAAALQAAAMgPAFQgPAFgsgBQgrABgPgFg");
	this.shape_21.setTransform(35.8,-38.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#006E47").s().p("AhCAZQgEgDAAgHIADgNIAHgPQADgIAEgCQAEgDAMAAIANAAIAYAAIAvgBIAHgBQAJAAADADQAFAEAAAHQAAAPgJANQgJANgNAAIgMgBIgQAAIg8ACIgFABQgJAAgEgEg");
	this.shape_22.setTransform(8.9,-32.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#006E47").s().p("Ah4CmQggglAAg7QAAhDAlgpQAlgqA7AAIATACQAJACAFAGQAEAGAAAIQAAAOgSAAIgIAAIgHgBQgeAAgTAZQgSAYAAArQAAAuAUAdQAUAdAfAAQAcAAAQgPQAQgQAAgfIAAhLIAAh+QAAgTgEgIQgDgHgKgEIgIgCQgRgFAAgKQAAgHAHgFQAGgFAVgIIAegJIAagDQAKAAAEAFQAEAGAAAMIgBAOIgCCoIABBzQACAbAFADIATAHQAOADAAAJQAAANgoANIgbAHIgVADQgHAAgEgFQgDgEgBgJIAAgOIAAgFIgBgCIgJAGIgMAJQgQANgPAGQgQAFgRAAQg0AAggglg");
	this.shape_23.setTransform(-16.3,-38.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#006E47").s().p("AAQAdIghhVQgPgngOgGIgIgEQgPgGAAgKQAAgLAOgEQANgFArAAQAmAAANAFQAOAEAAALIgCAIIgFAGIgJAEQgMAEAAAGIAFASIAXA5IAXA1QAHAMADAAQAEAAAFgHIANgYIAdhFQAKgaAAgKIgCgJIgHgHIgIgDQgMgFAAgJQAAgKAMgEQANgFAhAAQAdAAANAFQALAEAAAKQAAALgPAFIgJADQgNAHgZA5IgFAOIgMAZQg+COgTAAQgSAAgwhxgAihAPIgIgRIgSguQgSgvgMgGIgIgEQgQgGAAgKQAAgLAOgEQAOgFAsAAQAmAAANAFQANAEAAALIgCAJIgEAFIgJAEQgMAEAAAGIAGAXIAVA0IAXAzQAHAOADAAQAJAAAIgQIAJgUIAGgIQADgDAHAAQAGAAAEAEQAEAEAAAGQAAAIgIAPQgdA/gMAVQgNAVgKAAQgSAAg3h/g");
	this.shape_24.setTransform(-56.1,-31.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#006E47").s().p("AhjBnQgngoAAg+QAAg9ApgpQApgpA8AAQA8AAAmAmQAlAnAAA8QAAA/goArQgpAqg7AAQg7AAgngogAg0hSQgQAXAAAlQAAA2AXAkQAXAkAgAAQAbABARgXQAQgWAAgmQAAg1gXgkQgXglggAAQgbABgRAVg");
	this.shape_25.setTransform(-94.9,-32.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#006E47").s().p("AhSCIQgOgEAAgNQAAgJANgEIAIgEQAGgDAEgKQACgJAAgVIAAgTIAAgVIAAgRQAAgygCgOQgDgQgFgDIgNgFQgQgGAAgIQAAgIAEgEQAFgFANgEIAkgMIAagFQANAAAEAlIABAFIABABQAOgVAQgMQAPgMAQAAQASAAAMAMQAMALAAAUQgBASgIAMQgJALgPgBIgPgCIgLgIIgGgLQgDgHgDAAQgUAAgGAaQgIAbABBSQAAAYACAMQAEAMAGADIAMAEQAQAGAAAKQAAALgPAEQgPAFglgBQgqABgNgFg");
	this.shape_26.setTransform(-120.5,-32.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#006E47").s().p("AgqDAQgkgOgdgZQgfgdgRgpQgRgoAAgwQAAgmALghQALghAWgbQAbghAngRQAmgSAtAAIAiADIA1ALIAFgCIAWgEIAJADIAHAHQAJAPAGAVQAGAVAAAQQAAAMgFAGQgEAGgJAAQgMAAgVgZIgRgUQgOgPgXgIQgWgIgaAAQg1AAgfAlQgeAkAABAQgBBRAnA0QAoA1A7AAQAYAAAWgIQAVgIAOgOIANgQQAMgQAJAAQAHAAAEAIQAFAHAAANQAAAagHAOQgIAPgMAAIgCAAIgFgBQgZAOgaAGQgZAHgdAAQgoAAgkgNg");
	this.shape_27.setTransform(-150.6,-38.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.partyreadyrecipes, new cjs.Rectangle(-171.8,-73.2,403.5,134.5), null);


(lib.partyperfectnineteen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006E47").s().p("AgUCPIgdgFIgJAFIgIABIgGgBIgFgEQgJgHgIgWQgIgXAAgUQAAgJAEgFQAFgGAHAAQANAAANAWIAKAQQAIALAPAGQAOAHAPAAQASAAALgJQAKgJAAgQQAAgXgtgWIgPgIQgrgVgPgRQgQgSAAgaQAAgkAZgWQAZgXAoAAIATABIATAEIANgFIAJgCQANAAANAWQANAVAAAYQAAAKgFAFQgEAFgIAAQgGAAgGgFQgGgFgJgNQgKgRgLgHQgLgHgPAAQgPAAgKAJQgKAJAAAPQAAAMAKAKQAKAKAiARIADABQBMAlAAAtQAAAmgdAaQgeAZgsAAg");
	this.shape.setTransform(168,38.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006E47").s().p("AgtDFQgOgEAAgMQAAgJALgFIAOgHQAFgFACgQIACg3IAAgqIAAg0IAAgVQgBhFgCgUQgCgUgGgDIgRgGQgRgFAAgKQgBgGAGgFQAFgFAUgGIAlgLIAbgEQAJAAADAGQADAFAAANIAAAVQgEBiABBjIACBdQABAUAFAFIAPAIQANAFAAALQAAAKgOAFQgOAEgjAAQgpAAgNgFg");
	this.shape_1.setTransform(147.8,32.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006E47").s().p("AAQAdIghhVQgQgngNgGIgHgEQgQgGAAgKQAAgLANgEQAOgFAsAAQAlAAANAFQAOAEAAALIgCAIIgFAGIgKAEQgLAEABAGIAEASIAXA5IAYA1QAGAMAEAAQADAAAFgHIANgYIAdhFQAKgaAAgKIgDgJIgGgHIgHgDQgNgFAAgJQAAgKANgEQALgFAjAAQAcAAAMAFQAMAEAAAKQAAALgOAFIgKADQgMAHgZA5IgHAOIgKAZQg/COgSAAQgTAAgwhxgAigAPIgIgRIgTguQgSgvgMgGIgIgEQgQgGAAgKQAAgLAOgEQAOgFAtAAQAlAAANAFQANAEAAALIgBAJIgGAFIgJAEQgLAEABAGIAGAXIAUA0IAXAzQAHAOAEAAQAIAAAHgQIAJgUIAHgIQADgDAGAAQAHAAAEAEQAEAEAAAGQAAAIgHAPQgdA/gNAVQgMAVgKAAQgUAAg1h/g");
	this.shape_2.setTransform(118,39.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#006E47").s().p("AhjBnQgngpAAg9QAAg9ApgpQApgpA8AAQA8AAAmAnQAlAmAAA8QAAA/goAqQgpArg7AAQg7AAgngogAg0hSQgQAXAAAlQAAA2AXAkQAXAlAgAAQAbAAARgXQAQgXAAglQAAg1gXgkQgXgkggAAQgbgBgRAWg");
	this.shape_3.setTransform(79.2,39);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#006E47").s().p("AgUDGIg2gCIgaABIgfABQgTAAgKgFQgKgFAAgLQAAgKAPgGQAOgGADgEQAEgGACgoIAChrIgChnQgCgogEgFQgDgEgOgGQgPgGAAgKQAAgLAJgEQAIgFARAAIAdAAIAfAAIA3gBIAsgCQA7AAAgAZQAgAZAAAuQAAAlgXAYQgXAXgrAIQA3AFAdAZQAeAbAAAuQAAAzglAcQgkAdhCAAgAgqieQgJACgCAEQgEAIgCAZIgCBPIAAByIACA2QACAPAEAHQADAGAOAEQANADAXAAQAtAAAXgTQAYgTAAgkQAAgngbgSQgagTgzAAQgXAAAAgQQAAgTAXAAQAlAAAXgQQAXgRAAgkQAAgkgWgRQgWgRgsAAg");
	this.shape_4.setTransform(44.3,32.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#006E47").s().p("AhZClQgngoAAg8QAAhAAogoQAogqA/AAQA1AAAeAeQAfAeAAAzQAAARgFAFQgFAGgVAAIhoAAQgJAAgFgFQgFgEAAgIQAAgHAFgEQAFgEAIAAIA6AAIANgCQAEgCAAgGQAAgagSgSQgSgSgZAAQggAAgQAdQgQAbAAAoQAAAsAWAfQAWAfAiAAQAUAAAOgEQAOgFANgJIALgIQANgLAIAAQAFAAAFAEQADAEAAAFQABAHgHAKQgHAJgLAJQgYAUgXAJQgWAIgaAAQg6AAgngngAggh1QgGgIAAgHIABgEIAHgFIBcg4IAIgFIAHgBQAHAAAJALQAHALAAAKQAAAJgQAHIgBAAIhhAtIgFABIgDABQgEAAgGgJg");
	this.shape_5.setTransform(-4.7,32.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#006E47").s().p("AgOClQgOgFgJgIQgKgJgEgQQgEgOAAgpIAAiTIgZAAIgIgCIgDgIIAAgGQAAgJAdgYIALgKIALgJQAcgaALABIAIACQADADAAAEIAAAzIA9AAQAHAAADACQACADAAAIIAAAHQAAAGgCAEQgDADgHAAIg4AAIgFADIgBAFIAACIQAAAkAGAIQAGAJAQAAQAIABAOgFIATgFQAGAAAEAEQAEAEAAAGQAAAOgXAOQgYAPgdAAQgQAAgOgFg");
	this.shape_6.setTransform(-29.2,36.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#006E47").s().p("AgwDEQgOgEAAgMQAAgJAOgGIAHgCQAHgEADgKQADgJAAgVIgBgTIAAgVIAAgdQAAgrgCgNQgCgMgGgEIgMgEQgRgFAAgKQAAgGAFgFQAFgEAMgFIApgOIAdgEQAHAAAEAEQADAGAAAMIAAARIgBAMIgCBFIAAACIgBBDQAAAaACALQADALAGAEIAKAEQAOAFAAAKQAAALgNAFQgOADgkAAQgpAAgNgEgAghiKQgMgJAAgOQAAgQANgLQANgLASAAQARAAAMAKQAMAJAAAPQAAAQgNAKQgNALgSAAQgSAAgLgKg");
	this.shape_7.setTransform(-47.4,32.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#006E47").s().p("Ah4CmQggglAAg7QAAhDAlgpQAlgqA7AAIAUACQAHACAFAGQAFAGAAAIQAAAOgSAAIgIAAIgHgBQgfAAgRAZQgTAYAAArQAAAuAUAdQAUAdAfAAQAcAAAQgPQAPgQAAgfIAAhLIAAh+QAAgTgCgIQgEgHgLgEIgHgCQgRgFAAgKQAAgHAGgFQAHgFAVgIIAfgJIAagDQAIAAAFAFQAEAGAAAMIAAAOIgECoIACBzQACAbAEADIATAHQAPADAAAJQAAANgoANIgbAHIgVADQgHAAgEgFQgEgEAAgJIAAgOIAAgFIgCgCIgIAGIgMAJQgQANgQAGQgPAFgRAAQg0AAggglg");
	this.shape_8.setTransform(-70.8,32.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#006E47").s().p("AA7CLQgDgEAAgJIAAgTIgBgCIgBAAQgDAAgHAHIgDAEQgNANgRAHQgPAGgVAAQgVAAgRgHQgTgIgMgOQgNgQgFgWQgGgWAAg6IABgTIAAgUIAAgGQAAgWgDgGQgDgHgKgDIgLgEQgQgEAAgKQAAgHAGgEQAFgFAUgGIAlgKIAdgEQAHAAAEAFQADAGAAAMIgBALIgCBmQAAA3ALAWQAMAVAcAAQAfAAANgcQAOgbAAhDIAAgVQAAgVgDgGQgDgHgKgDIgLgEQgPgEAAgKQAAgGAFgFQAGgFATgGIAlgKIAcgEQAJAAADAFQADAFAAANIAAAPIgDBwIAAAvIACASQACALAOAGIAAAAIAFABQAQAGAAAJQAAAGgFAFQgFAEgMAFIgnANQgTAEgKAAQgIAAgEgEg");
	this.shape_9.setTransform(-105,39);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#006E47").s().p("AhTCIQgNgEAAgMQAAgJANgGIAHgCQAIgEACgKQADgJAAgVIAAgTIAAgVIAAgQQAAgygCgQQgDgPgGgEIgMgEQgRgFAAgKQAAgGAGgFQAEgEANgFIAlgMIAYgFQANAAAFAlIAAAGIADABQAOgWAPgMQAPgLAPAAQAUAAALALQALALAAAUQABATgKALQgIAKgQAAIgNgCIgMgIIgGgLQgDgHgEAAQgSAAgIAaQgGAagBBTQAAAYADAMQADAMAIAEIAKADQARAFAAALQAAALgPAEQgPAEgmAAQgpAAgOgEg");
	this.shape_10.setTransform(-131.4,38.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#006E47").s().p("AgqDAQgkgOgdgZQgggdgQgpQgRgoAAgwQAAgmALghQALghAXgbQAaghAmgRQAngSAtAAIAiADIA1ALIAGgCIAUgEIAKADIAIAHQAIAPAGAVQAFAVAAAQQAAAMgEAGQgEAGgJAAQgMAAgUgZIgSgUQgPgPgVgIQgWgIgbAAQg1AAgeAlQggAkAABAQAABRAoA0QAnA1A8AAQAYAAAVgIQAWgIAOgOIAMgQQAMgQAJAAQAHAAAFAIQAEAHAAANQAAAagHAOQgIAPgMAAIgDAAIgDgBQgaAOgZAGQgbAHgbAAQgpAAgkgNg");
	this.shape_11.setTransform(-161.5,33);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#006E47").s().p("AgOClQgOgFgJgIQgKgJgEgQQgEgOAAgpIAAiTIgZAAIgIgCIgDgIIAAgGQAAgJAdgYIALgKIALgJQAcgaALAAIAIADQADADAAADIAAA0IA9AAQAHAAADACQACADAAAIIAAAHQAAAGgCADQgDAEgHAAIg4AAIgFADIgBAFIAACIQAAAkAGAIQAGAJAQAAQAIABAOgFIATgFQAGAAAEAEQAEAEAAAGQAAAOgXAOQgYAPgdAAQgQAAgOgFg");
	this.shape_12.setTransform(138.7,-28.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#006E47").s().p("AhXBoQgmgogBg8QAAg+AqgrQApgpA9AAQAtAAAgAXQAgAYgBAfQABAOgKAHQgIAIgOAAQgOABgJgHQgIgHgKgWQgIgUgLgIQgKgHgRgBQgfAAgRAYQgTAXABArQAAAwAZAfQAZAfAnAAQAOAAAMgEQAMgDALgIIAKgIQAPgLAIAAQAGAAADADQADAEAAAFQABAHgHAKQgFAJgJAIQgWATgXAJQgXAJgcAAQg5AAgngng");
	this.shape_13.setTransform(114.5,-26.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#006E47").s().p("AhZBoQgngoAAg8QAAg/AogqQAogpA/AAQA1AAAeAeQAfAeAAA0QAAAQgFAGQgFAFgVABIhoAAQgJgBgFgEQgFgEAAgIQAAgHAFgEQAFgEAIAAIA6AAIANgCQAEgDAAgGQAAgagSgSQgSgSgZAAQggAAgQAcQgQAdAAAoQAAArAWAfQAWAfAiAAQAUAAAOgFQAOgEANgJIALgIQANgLAIAAQAFAAAFADQADAEAAAGQABAHgHAJQgHAKgLAJQgYAUgXAIQgWAJgaAAQg6AAgngng");
	this.shape_14.setTransform(85.3,-26.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#006E47").s().p("AhNDFQgNgEAAgLQAAgJAMgFIAIgDQAGgDADgJQADgJAAgYIAAgaIAAiEIgfAAQgHAAgCgDQgDgDABgHIAAgHQAAgHACgDQADgDAGAAIAdAAIgDgVIAAgUQgBgqAagXQAZgXAtAAQAeAAAUAOQATAOAAAWQAAANgGAHQgIAGgNAAQgJAAgGgEQgIgEgEgHIgFgKQgLgUgPAAQgLAAgFAHQgHAHAAALIAGAeQAGAYABATIAnAAQAHAAADADQACACAAAIIAAAHQAAAHgDADQgCADgHAAIgnAAIAACMQAAAkACALQADAKAFADIAKAEQAQAGABALQgBAKgNAEQgNAEgnAAQgpAAgNgEg");
	this.shape_15.setTransform(65,-32.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#006E47").s().p("AhTCIQgNgEAAgMQAAgJANgGIAHgCQAIgEACgKQADgJAAgVIAAgTIAAgVIAAgQQAAgygCgQQgDgPgGgEIgMgEQgQgFAAgKQgBgGAGgFQAEgEANgFIAlgMIAYgFQANAAAFAlIAAAGIADABQAOgWAPgMQAPgLAPAAQAUAAALALQALALAAAUQABATgJALQgJAKgQAAIgNgCIgMgIIgGgLQgDgHgEAAQgSAAgIAaQgGAagBBTQAAAYADAMQADAMAIAEIAKADQARAFAAALQAAALgPAEQgPAEgmAAQgpAAgOgEg");
	this.shape_16.setTransform(44.6,-26.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#006E47").s().p("AhZBoQgngoAAg8QAAg/AogqQAogpA/AAQA1AAAfAeQAeAeAAA0QAAAQgFAGQgFAFgUABIhpAAQgJgBgFgEQgFgEAAgIQAAgHAFgEQAFgEAIAAIA6AAIANgCQAEgDAAgGQAAgagSgSQgSgSgYAAQgiAAgPAcQgQAdAAAoQAAArAWAfQAWAfAiAAQAUAAAOgFQAOgEANgJIAKgIQAOgLAIAAQAFAAAFADQADAEAAAGQAAAHgGAJQgHAKgMAJQgYAUgWAIQgWAJgaAAQg5AAgogng");
	this.shape_17.setTransform(18.5,-26.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#006E47").s().p("AiODDQgPgFgBgMQAAgLARgGIANgHQAFgEADghQACghABhVIgChoQgDgogEgFQgCgEgPgGQgPgGAAgKQAAgKAJgFQAJgFAQAAIAdAAIAgAAIA2gBIAsgBQA+gBAfAbQAfAaAAA0QAAA6gnAeQgmAehIAAQgbAAgBgSQAAgUAYAAQAiAAAWgSQAVgSAAgoQAAgmgVgSQgWgSgtAAQgUAAgIADQgIADgDAHIgCAaIgCA4IAAB5IACBOQACAVAFAEIAMAGQARAFAAAMQAAAMgPAFQgPAEgsAAQgqAAgQgEg");
	this.shape_18.setTransform(-12.1,-32.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#006E47").s().p("AhCAZQgDgDAAgHIACgNIAHgPQADgIAEgCQAEgDALAAIAOAAIAYAAIAvgBIAHgBQAJAAADADQAEAEAAAHQABAPgJANQgJANgNAAIgMgBIgQAAIg8ACIgFABQgJAAgEgEg");
	this.shape_19.setTransform(-39,-26.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#006E47").s().p("Ah+C1QgNgLAAgSQAAgNAJgKQAKgKAOAAIAMACIAIAGIAIAKQAHALAFAAQAOAAAOgUQAPgUAAgWQAAgXgUgsIgCgGIgshgIgag1QgEgKgQgHIgBAAQgJgEgDgEQgEgDAAgGQAAgMAPgFQAOgFAoAAQAoAAAOAFQANAEAAALIgBAIIgFAGIgKAEQgLAEAAAFIAGAVIAWA3IAWAzQAHANAEAAQADAAAGgNIASgrIAUg2QAGgUAAgHQAAgIgPgIQgPgJAAgHQAAgKAMgEQANgEAfAAQAhAAALAFQAMAEAAALQAAAKgQAEIgLAEQgQAIgRAvIgIAVIgjBYQgtBygdAiQgdAjgoAAQgUAAgNgMg");
	this.shape_20.setTransform(-62.4,-20.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#006E47").s().p("AgOClQgOgFgJgIQgKgJgEgQQgEgOAAgpIAAiTIgZAAIgIgCIgDgIIAAgGQAAgJAdgYIALgKIALgJQAcgaALAAIAIADQADADAAADIAAA0IA9AAQAHAAADACQACADAAAIIAAAHQAAAGgCADQgDAEgHAAIg4AAIgFADIgBAFIAACIQAAAkAGAIQAGAJAQAAQAIABAOgFIATgFQAGAAAEAEQAEAEAAAGQAAAOgXAOQgYAPgdAAQgQAAgOgFg");
	this.shape_21.setTransform(-86.3,-28.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#006E47").s().p("AhTCIQgNgEAAgMQAAgJANgGIAIgCQAGgEAEgKQACgJAAgVIAAgTIAAgVIAAgQQAAgygCgQQgDgPgGgEIgMgEQgQgFAAgKQAAgGAEgFQAGgEAMgFIAkgMIAZgFQANAAAFAlIAAAGIACABQAOgWAQgMQAPgLAPAAQAUAAALALQAMALAAAUQgBATgIALQgJAKgQAAIgNgCIgMgIIgGgLQgDgHgDAAQgUAAgHAaQgHAaAABTQABAYACAMQADAMAIAEIALADQAQAFAAALQAAALgPAEQgQAEglAAQgpAAgOgEg");
	this.shape_22.setTransform(-106.4,-26.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#006E47").s().p("AAxCBIgPgOIgMAGQghAWgiAAQgoAAgZgXQgZgXAAgmQAAgsAggYQAggYA5AAQAOAAAHAEQAHAEAAAKQAAAQgTAAQgbAAgRANQgQANAAAXQAAAWAOANQAPAOAYAAQAaAAALgMQAMgMAAgdIAAhoQAAgYgLgNQgKgNgTAAQgNAAgMAGQgMAGgKAMIgGAHQgRAWgTAAQgKAAgHgHQgGgHAAgMQAAgaAggSQAggRAyAAQAdAAAWAIQAWAIAMAPQAIAKAEARQADARAAAoIAABXQAAAQADAHQACAIAGACIAIACQASAFAAAJQAAANgTALQgSAKgZAAQgMAAgNgOg");
	this.shape_23.setTransform(-132.3,-26.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#006E47").s().p("AiODDQgQgFAAgMQAAgLARgGIANgHQAGgEACghQACghABhVIgChoQgDgogDgFQgDgEgPgGQgPgGAAgKQAAgKAJgFQAIgFARAAIAdAAIAgAAIA3gBIAsgBQA9gBAfAbQAfAaAAA0QAAA6gnAeQgmAehIAAQgcAAABgSQgBgUAYAAQAjAAAVgSQAVgSAAgoQAAgmgVgSQgWgSgtAAQgUAAgIADQgIADgDAHIgCAaIgCA4IAAB5IACBOQACAVAEAEIANAGQARAFAAAMQAAAMgPAFQgPAEgsAAQgqAAgQgEg");
	this.shape_24.setTransform(-163.4,-32.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.partyperfectnineteen, new cjs.Rectangle(-182.6,-67.2,365.3,134.5), null);


(lib.nineteentopright_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.nineteentopright();
	this.instance.parent = this;
	this.instance.setTransform(-119,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.nineteentopright_1, new cjs.Rectangle(-119,-63,238,126), null);


(lib.nineteenbottomright_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.nineteenbottomright();
	this.instance.parent = this;
	this.instance.setTransform(-123,-84.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.nineteenbottomright_1, new cjs.Rectangle(-123,-84.5,246,169), null);


(lib.nineteenbottomleft_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.nineteenbottomleft();
	this.instance.parent = this;
	this.instance.setTransform(-109,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.nineteenbottomleft_1, new cjs.Rectangle(-109,-63,218,126), null);


(lib.mainbutton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006F46").s().p("EgQFAzRMAAAhmhMAgLAAAMAAABmhg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.kalelogo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgeAfQgNgNAAgSQAAgRANgNQANgNARAAQASAAANANQANANAAARQAAASgNANQgNANgSAAQgRAAgNgNgAgYgYQgKAKAAAOQAAAQAKAKQAKAKAOAAQAPAAAKgKQAKgKAAgQQAAgOgKgKQgKgKgPAAQgOAAgKAKgAAMAZIgOgVIgFAAIAAAVIgJAAIAAgzIATAAQARAAAAAPQAAANgNABIAPAWgAgHgDIAGAAQANAAAAgIQAAgHgMAAIgHAAg");
	this.shape.setTransform(54,24.5,0.414,0.414);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjnEaQgUgDgIgEQgJgFAAgNQAAgKAGgHQAFgHAJAAIARAAQAKAAAFgLQADgKgBgXIAAl5QABgXgDgKQgFgLgKAAIgRAAQgJAAgFgHQgGgHAAgKQAAgNAJgFQAIgEAUgDQBegNBrAAQBNAAA1ASQA1ASAnAoQAlAlAVA5QATA4AABEQAABNgZA9QgZA+gwAlQglAegvAOQgxAOhEAAQhrAAhegNgAgvjrQgcAFgKALQgKAMAAAhIAAFjQAAAhAVALQANAHAnADQBNAEAshAQAqg/ABhwQAAhwgrg/Qgrg/hKAAIgdADg");
	this.shape_1.setTransform(25.8,12.5,0.414,0.414);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgNBlQgFgDAAgHIAAiTQAAgKgMAAIgyAAQgKAAAAgPIABgNQACgIAHAAICfAAQAMAAAAASQAAASgLAAIgyAAQgMAAAAAKIABCTQAAAHgFADQgEACgKAAQgJAAgEgCg");
	this.shape_2.setTransform(33.7,36.6,0.414,0.414);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhMBmQgNAAAAgPIAAiuQAAgOANAAICbAAQAGAAADAFQACADAAAJQAAAKgCADQgDAGgHAAIh5AAQgIAAAAAJIAAAbQAAAKAKAAIBFAAQALAAAAASQAAAQgKAAIhFAAQgLAAAAALIAAAeQAAAKAKAAIB4AAQAKAAAAATQAAARgKAAg");
	this.shape_3.setTransform(21.7,36.6,0.414,0.414);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAxBgIhAhGQgLgJgTAAQgFAAgEAEQgDAFAAAGIAAA8QAAAMgVAAQgRAAAAgNIAAi0QAAgIAFgCQAEgCALAAQASAAAAAMIAAA3QAAANAJAAQALAAAFgDQAEgBAFgFIBJhDQANgLAMAMQAMALgKAKIhAA6QgJAIAJAJIBOBWQAIAIgGAFQgFAFgNAAQgTAAgHgIg");
	this.shape_4.setTransform(9.4,36.6,0.414,0.414);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAvBeIghgxQgFgJgKAAIgtAAQgEAAgDADQgDACgBAFIABAwQAAAHgKACIgPAAQgNAAAAgLIAAi6QAAgIAJAAIBrAAQAgAAAUASQAVAUgBAgQAAAXgOAPQgIAJgPAJQgHAIAEAFIAiAyQAFAHgFAFQgEAEgPAAQgRAAgFgJgAg5g4IAAAuQABAFAEADQAEACAFAAIA+AAQAQAAALgHQALgKAAgPQAAgRgLgJQgLgJgQAAIg+AAQgOAAAAALg");
	this.shape_5.setTransform(-4.6,36.6,0.414,0.414);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ABCBgIgOgbQgCgHgHAAIhTAAQgJAAgEALIgMAXQgDAHgSAAQgWAAAFgMIBZi4QAFgKAKAAQALAAAFAJIBXC6QADAGgJAEQgGACgIAAQgPAAgDgIgAgEgdIgYAyQgDAIAIAAIAwAAQABAAABAAQAAgBABAAQABAAAAAAQAAgBABAAQACgCgCgDIgZgzQgBgDgEAAQgCAAgCADg");
	this.shape_6.setTransform(-18.4,36.6,0.414,0.414);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ABZBlQgFgDAAgFIgOhrQgCgHgFAAQgDAAgDAEIgxA+QgEAFgFAAQgHAAgEgHIgtg7QgCgDgEAAQgFAAgBAHIgOBpQgCAKgTAAQgGAAgFgCQgGgDAAgGIAVixQACgJADgCQAEgFALAAQAKAAAFAIIA4BPQAFAIAEAAQAEAAAHgIIA7hQQAEgIALAAQAGAAADACQAEADACAJIAVC1QABAKgXAAQgFAAgFgCg");
	this.shape_7.setTransform(-32.4,36.6,0.414,0.414);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AipF/QhPhTAAiLQAAhZAghEQAghCA6gnQAZgTAmgTQAmgTAngOQAKgDgDgJQgCgKgNADQg7ALgrgSQgWgJgdgRQghgUgJgEQgvgWg6AZQgVAJgMgLQgLgLAGgXQAXhWBDg3QBKg9BQAXQA0APAlA0QAmA2AfALQATAGgBAPQAAAOgRADQgaAFgjgRQgggPgdgbQgfgcgvgCQgsgCgbAVQgLAIADAHQAEAHAKgDQAggHAdAGQAoAIAbAgQAkAoAuAPQA4ASAugfIAZgWQANgNAMAEQAPAEgBAUQgBAUgTAZQgiAsg+AeQhFAjgeAdQgwAwgTA9QgPAzAABQQAAByAqBAQAqBABKAAQBKAAArhCQAqhBAAhwQAAhfgXg4QgZg6g2gVQgbgKAFgTQAFgUAhgEQA3gGA8AsQBoBOAACjQAACOhPBVQhQBUiHAAQiDAAhPhUg");
	this.shape_8.setTransform(6.1,-22.5,0.414,0.414);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ABnDxQhFg2gYheIgBgDQgCgLgHABQgGgBgCALIgBABQgYBghGA2QhIA2hoAAQh+AAhMhQQhMhRAAiFQAAiGBMhRQBLhQCAAAQBpAABHA2QBHA3AXBgQACALAGgBQAHAAACgLIABAAQAXhgBGg2QBHg2BoAAQB/AABNBPQBMBQAACGQAACHhMBRQhNBQiBAAQhmAAhHg2gACniqQgpA/AABtQAABtApA9QAoA+BIAAQBGAAApg/QAphAAAhrQAAhqgqhAQgpg/hHAAQhGAAgoA/gAmFiqQgoA/AABtQAABtAoA9QAoA+BIAAQBGAAApg/QAphAAAhrQAAhqgqhAQgpg/hHAAQhGAAgoA/g");
	this.shape_9.setTransform(-8.7,12.5,0.414,0.414);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ai5EbQgWAAgJgFQgIgFAAgOQAAgKAGgHQAHgHAJAAIARAAQAKAAAEgLQADgJAAgYIAAl7QAAgXgDgKQgCgGgEgDQgEgEgEAAIgRAAQgJAAgHgHQgGgHAAgJQAAgOAJgGQAIgFAWAAIFvAAQAaAAAEAVIAMA7QAEAQgFAJQgFAJgMAAQgPAAgHgOQgEgFgFgNQgFgQgPgFQgNgEggAAIhtAAQghAAgJAJQgIAJAAAiIAABkQAAAaAIAFQAFADAdAAIBFAAQAbAAAIgDQAHgDACgNIAAgFQAEgWATAAQAOAAAFAJQAFAJAAAWIAABHQAAAWgFAJQgFAJgOAAQgTAAgEgXIAAgFQgCgNgIgDQgHgEgbAAIhFAAQgeAAgEAEQgIAFAAAZIAACLQAAAbACAGQAGALAMAAIATAAQAKAAAGAHQAGAHAAAKQAAAOgJAFQgIAFgYAAg");
	this.shape_10.setTransform(-40.8,12.5,0.414,0.414);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhTEbIgTgEQgIAAgKAJQgKAIgJAAQgLAAgGgHQgGgGgEgQIgVhUQgCgIAAgJQAAgMAHgIQAIgHAMAAQAMAAAJALIAMARQAWAfAhASQAiASAkAAQApAAAagVQAZgUAAgiQAAghgbgfQgbgdg/gsIhNg2QgSgPgTgWQgggmAAgzQAAg9ArgmQArgmBGAAQAlAAAjAIIAWAFIALACQAJAAALgIQAKgHAIAAQASAAAGAYIAUBcQABAEAAAIQAAAIgHAGQgHAGgKAAQgMAAgLgOQgNgVgHgIQgGgGgOgLQgjgbgtAAQgcAAgSAPQgRAQAAAaQAAAXAJALQAMASAbAWIApAdQAzAkAWARQAXASAUAUQAWAWAMAfQAMAeAAAhQAABJgyAtQgzAthUAAQgzAAglgNg");
	this.shape_11.setTransform(45.6,12.5,0.414,0.414);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ah+EYQgLgJgHgYIhJjYQgBgFgEAAQgFAAgBAFIhNDYQgKAagHAIQgNAIgQABQgTgBgKgIQgLgKgJgYIimm+QgKgZgHgIQgHgHgUgFQgOgBgFgGQgFgFAAgKQAAgXAdAAICvAAQAcAAAAAXQAAAMgHAEQgHAFgRABQgOACgGAEQgGAFAAALQAAAIADALIBzFGQACAFAFAAQAEgBACgFIA/i1QAIgZgHgYIglhuQgEgJgHgFQgGgEgPgEQgNgEgGgEQgFgGAAgJQAAgaAdAAICnAAQAdAAAAAXQAAATgcAFQgRABgFAFQgGAFAAALQAAALAIAZIBfEsQACAFAEAAQAFgBABgFIBdk6QAEgLAAgJQAAgTgdgDQgbgCAAgWQAAgMAHgGQAIgGARAAIElAAQAVAAAIAGQAIAFAAAOQAAAKgGAHQgGAHgJAAIgQAAQgLAAgFAKQgCAJAAAZIAABuQAAAdAFAHQAGAGAXAAIB0AAQAXAAAHgHQADgEAAgGIABgfIAAhoQAAgbgDgHQgFgKgKAAIgQAAQgKAAgHgHQgGgHAAgKQAAgOAIgFQAJgGAWAAICaAAQAWAAAJAGQAJAFAAAOQAAAKgHAHQgGAHgJAAIgSAAQgEAAgEADQgFAEgBADQgDAKAAAYIAAF8QAAAYADALQABADAFAEQAEACAEAAIASAAQAJAAAGAIQAHAGAAAKQAAAOgJAGQgIAEgXAAIiaAAQgWAAgIgEQgIgGAAgOQAAgKAGgGQAHgIAJAAIAQAAQAKABAFgKQADgIAAgbIAAh8IgBgdQAAgHgDgDQgHgIgXAAIh0AAQgXAAgGAHQgFAGAAAeIAACAQAAAZACAKQAFAKALgBIAQAAQAJAAAGAIQAGAGAAALQAAANgIAGQgIAEgVAAIiaAAQgWAAgJgEQgIgGAAgOQAAgKAGgGQAHgIAJAAIARAAQAEAAAFgCQAEgEABgDQADgIAAgbIAAl8QAAgwgkAEQgLABgHAJQgIAKgGAVIiHGzQgJAfgKAMQgLAKgTABQgTAAgLgKg");
	this.shape_12.setTransform(-30.9,-15.2,0.414,0.414);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AihEbQgWAAgIgFQgIgGAAgOQAAgJAGgHQAGgGAJAAIARAAQAEAAAEgEQAEgDACgEQADgIAAgXIAAmAQAAgZgDgHQgDgMgLAAIgRAAQgKABgGgHQgHgHAAgKQAAgOAJgFQAJgGAWAAICcAAQAWAAAJAGQAJAFAAAOQAAAKgGAHQgHAHgJgBIgSAAQgOAAgDAMQgDAFAAAbIAAFkQAAAdACAJQACAJAIAFQAGAFALABQALACAaAAIAwAAQAvAAAPggIAIgQQAIgPAPAAQAMgBAFAJQAFAJgEAQIgNBCQgEAVgaAAg");
	this.shape_13.setTransform(28.7,-15.5,0.414,0.414);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AjREWQgIgGAAgOQAAgJAGgHQAGgGAJAAIARAAQAEAAAEgEQAEgDABgEQAEgIAAgaIAAl7QAAgZgEgIQgBgGgEgDQgEgEgEAAIgRAAQgJAAgHgHQgGgHAAgKQAAgNAJgGQAIgFAWAAIFSAAQAZAAAFAVIAMA7QADAQgFAJQgFAIgMAAQgPAAgGgNQgDgCgGgQQgGgQgPgFQgMgEggAAIhQAAQghAAgJAJQgIAJAAAiIAABkQAAAaAIAFQAEADAeAAIAmAAQAbAAAIgDQAHgDACgNIAAgFQAEgWATAAQAOAAAFAJQAFAJAAAWIAABHQAAAWgFAJQgFAIgOAAQgTAAgEgWIAAgFQgCgNgIgDQgHgEgbAAIgmAAQgeAAgEAEQgIAFAAAZIAABsQAAAiADALQADALAKAEQAPAFAiAAIBVAAQAvAAAPgfIAHgQQAIgQAPAAQAMAAAFAJQAFAJgDAQIgNBCQgFAVgaAAIlhAAQgWAAgIgFg");
	this.shape_14.setTransform(47.4,-15.4,0.414,0.414);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0C6E47").s().p("AqoZMQk7iEjyjzQjxjxiFk6QiKlGAAljQAAljCKlGQCFk6DxjzQDzjxE6iFQFFiKFjAAQFkAAFFCKQE7CFDxDxQDyDzCFE6QCKFGAAFjQAAFjiKFGQiFE6jyDxQjxDzk7CEQlFCKlkAAQljAAlFiKg");
	this.shape_15.setTransform(0,0,0.414,0.414);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.kalelogo, new cjs.Rectangle(-72.5,-72.5,145,145), null);


(lib.holidaysmallbites = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006E47").s().p("AhTBhQgmglAAg4QAAg8AngnQAlgnA6AAQAzAAAdAdQAdAcAAAwQAAAQgFAFQgEAGgUAAIhjAAQgIgBgFgDQgEgFgBgHQABgHAEgEQAFgDAIAAIA1AAIAOgCQADgCAAgGQAAgZgRgRQgQgRgYAAQgfAAgPAbQgPAbAAAmQAAAoAVAdQAVAdAfAAQAUAAANgDQANgFANgJIAJgHQANgLAIAAQAFABAEAEQAEADgBAFQABAHgHAJQgHAIgKAKQgXASgVAJQgVAHgYAAQg3AAgkgmg");
	this.shape.setTransform(124.6,36.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006E47").s().p("AhOCBQgNgFAAgLQAAgJANgEIAHgDQAHgEACgJQADgJAAgTIAAgSIAAgVIAAgPQAAgvgCgOQgDgPgFgDIgMgEQgQgFAAgJQAAgGAFgFQAFgEALgFIAjgLIAXgEQANAAAEAjIABAFIABABQAOgVAOgLQAPgLAOAAQASAAALALQALALAAASQAAASgJALQgIAKgOAAIgOgDIgKgHIgGgLQgDgGgDAAQgSAAgHAYQgGAZAABOQAAAXACALQADAMAHADIAKADQAQAFAAALQAAAJgPAFQgOAEgjAAQgnAAgNgEg");
	this.shape_1.setTransform(101.2,36.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006E47").s().p("AheBhQglgmAAg6QAAg5AngnQAngnA5AAQA4AAAkAkQAkAlAAA5QAAA6gnApQgmAog4AAQg4AAglgmgAgxhMQgQAUAAAjQAAAyAWAkQAWAiAeAAQAaAAAQgWQAPgVAAgjQAAgygVgiQgXgjgeAAQgZAAgQAWg");
	this.shape_2.setTransform(75.7,36.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#006E47").s().p("ABhC3QgOgFAAgLQAAgLAQgGIALgGQAFgDABgMQACgLABgjIAAgNIgBhuIgBhBIggBVQhMDHgSAAQgHAAgPgcQgQgbgkhUIg4iCIgDBmIgBBGIACAwQABALAEADIAMAGQAQAGAAALQAAALgNAFQgOAEgfAAQgcAAgOgFQgNgFABgLQAAgJAOgGQAOgHABgFQAEgNAEhDQAEhBgBhSIAAgIQAAgcgCgJQgCgJgGgEIgMgFQgRgGAAgLQAAgKAMgEQAMgEAmAAIAlABIAKACQAFADASAvIAOAlIAIASQA/CbAFAAQAFAAAYg4QAXg2AfhcIAGgQQAJgcAIgJQAEgEALgCIAjgCQAjAAALAEQAMAEAAAKQAAALgOAFIgIADQgHAFgDAKQgDAKAAAoIADCTQADBCACAKQACAGALAEIAGACIAKAHQACADAAAGQAAALgOAFQgOAEgrAAQgnAAgOgEg");
	this.shape_3.setTransform(37.3,31.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#006E47").s().p("AicCdQgwglAAg8QAAgiAPgZQAQgZAigXIABgCQgMgMgFgMQgGgNAAgOQAAgoAegbQAegaAvAAQAgAAAWANQAVAMAAARQAAAFgFAEQgFAFgHAAIgVgHQgSgHgPAAQgVAAgNAOQgMANAAAXQAAAKADAHQADAIAHAGQAGAGAMAFIAPAGIAFACIADAEQAAAGgKAKQgKALgIAAIgMgCIgRgHQgPANgHASQgIASAAAYQAAAxAgAgQAhAgAyAAQAqAAAagWQAZgVAAgjQAAgWgKgNQgLgNgRAAQgSAAgMAKQgLALAAAQIAAAFIAAADIgEABIgEABQgJAAgGgHQgFgIAAgMQAAgmByg0IAHgEQAegOAPgQQAQgQAAgSQAAgMgHgGQgGgGgOAAIgKABIgKABQgFAAgEgDQgDgEAAgGQAAgLAOgHQAOgIAWAAQAcAAAQAPQAQAPAAAaQAAAhgcAaQgbAbg7AVQAZAKAMATQANATAAAbQAAATgIATQgIATgPAPQgXAagkANQgjANguAAQhPAAgvglg");
	this.shape_4.setTransform(-22,31.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#006E47").s().p("AgTCGIgbgEIgIAEIgIACIgFgBIgGgDQgJgIgHgUQgIgVAAgUQAAgIAFgFQAFgGAGAAQAMAAANAVIAJAPQAIALANAFQAOAGAPABQARAAAKgJQAJgIABgPQAAgWgrgVIgPgHQgogUgPgQQgOgRAAgZQAAghAXgWQAYgVAmAAIARABIASADIAMgFIAIgBQANAAAMAUQAMAUAAAXQAAAJgDAGQgEAEgIAAQgGAAgGgEQgGgFgHgNQgKgQgKgGQgLgHgOABQgOgBgKAJQgJAJAAANQAAAMAJAJQAKAJAgAQIACACQBIAjAAApQABAkgcAZQgcAYgqAAg");
	this.shape_5.setTransform(-71.7,36.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#006E47").s().p("AhOCBQgNgFAAgLQAAgJANgEIAHgDQAHgEACgJQADgJAAgTIAAgSIAAgVIAAgPQAAgvgCgOQgDgPgFgDIgMgEQgQgFAAgJQAAgGAFgFQAFgEALgFIAjgLIAXgEQANAAAEAjIABAFIABABQAOgVAOgLQAPgLAOAAQASAAALALQALALAAASQAAASgJALQgIAKgOAAIgOgDIgKgHIgGgLQgDgGgDAAQgSAAgHAYQgGAZAABOQAAAXACALQADAMAHADIAKADQAQAFAAALQAAAJgPAFQgOAEgjAAQgnAAgNgEg");
	this.shape_6.setTransform(-92.5,36.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#006E47").s().p("AhTBhQgmglAAg4QAAg8AngnQAlgnA6AAQAzAAAdAdQAdAcAAAwQAAAQgFAFQgEAGgUAAIhjAAQgIgBgFgDQgEgFgBgHQABgHAEgEQAFgDAIAAIA1AAIAOgCQADgCAAgGQAAgZgRgRQgQgRgYAAQgfAAgPAbQgPAbAAAmQAAAoAVAdQAVAdAfAAQAUAAANgDQANgFANgJIAJgHQANgLAIAAQAFABAEAEQAEADgBAFQABAHgHAJQgHAIgKAKQgXASgVAJQgVAHgYAAQg3AAgkgmg");
	this.shape_7.setTransform(-117,36.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#006E47").s().p("AgNCcQgNgEgJgIQgJgJgEgPQgEgOAAgnIAAiKIgYAAIgHgCIgDgGIAAgHQAAgIAcgYIAKgJIAKgJQAbgXAKAAIAHACQADACAAAFIAAAwIA6AAQAHAAACACQADADAAAHIAAAGQAAAHgDADQgDADgGAAIg1AAIgEADIgCAGIAACAQAAAgAGAJQAGAJAPgBQAIAAANgDIASgFQAFAAAEAEQAEADAAAGQAAANgWAOQgWANgcAAQgPAAgNgEg");
	this.shape_8.setTransform(-140.2,34.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#006E47").s().p("AgNCcQgNgEgJgIQgJgJgEgPQgEgOAAgnIAAiKIgYAAIgHgCIgDgGIAAgHQAAgIAcgYIAKgJIAKgJQAbgXAKAAIAHACQADACAAAFIAAAwIA6AAQAHAAACACQADADAAAHIAAAGQAAAHgDADQgDADgGAAIg1AAIgEADIgCAGIAACAQAAAgAGAJQAGAJAPgBQAIAAANgDIASgFQAFAAAEAEQAEADAAAGQAAANgWAOQgWANgcAAQgPAAgNgEg");
	this.shape_9.setTransform(-159,34.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#006E47").s().p("AAuB6IgNgOIgMAGQggAVgfAAQgmAAgYgVQgXgXAAgjQAAgqAegWQAegXA2AAQANAAAHAEQAGADAAAKQAAAPgSAAQgZAAgQAMQgPANAAAWQAAAUANANQAOAMAXAAQAYAAALgLQALgLAAgbIAAhiQAAgXgKgMQgKgNgSAAQgMAAgLAGQgLAFgKAMIgGAHQgQAUgRAAQgKAAgGgHQgHgGAAgMQAAgYAfgRQAegQAvAAQAcAAAVAHQAUAIAMAOQAHAKAEAQQADAQAAAlIAABTQAAAOACAIQADAHAFABIAIADQAQAEAAAJQAAAMgRALQgRAJgYAAQgLAAgNgNg");
	this.shape_10.setTransform(-182.3,36.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#006E47").s().p("AgrC6QgNgEAAgLQAAgJALgEIANgIQAEgEACgQIADgyIgBgpIAAgwIAAgVQAAhAgDgTQgCgTgFgDIgQgGQgQgEAAgKQAAgGAEgFQAGgEASgGIAjgKIAagDQAHAAAEAEQADAFAAAMIgBAUQgDBcAABeIACBYQACATAEAFIAPAHQAMAGAAAKQAAAKgNADQgNAFgiAAQgmAAgNgFg");
	this.shape_11.setTransform(-204.5,30.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#006E47").s().p("AiGC4QgPgEAAgMQAAgLARgFIALgHQAGgDACggQACgeAAhRIgChiQgCglgDgGQgDgDgOgGQgOgGAAgKQAAgJAIgEQAIgGARAAIAaABIAeAAIA0gBIApgCQA7AAAdAaQAdAYAAAxQAAA3gkAdQgkAbhEAAQgaAAAAgRQAAgSAWAAQAgAAAUgRQAVgRAAgnQAAgjgVgRQgVgRgpAAQgTAAgIADQgHADgDAHIgDAYIgBA2IAABxIACBKQACATAEAEIAMAGQAQAFAAALQAAAMgPAEQgOAEgpABQgogBgPgEg");
	this.shape_12.setTransform(-226.6,31);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#006E47").s().p("AgbBPQgFgDgBgDIAGgKIAEgHIAPgdQAHgNAAgGIgCgGIgJgFQgNgFgHgKQgGgJAAgNQAAgSALgLQALgMAQAAQAQAAALAPQAMAPAAAYQAAARgHASQgHAUgRAbIgNAVQgGAFgEABQgIAAgEgDg");
	this.shape_13.setTransform(235.9,-11.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#006E47").s().p("AgTCGIgbgEIgIAEIgIACIgFgBIgGgDQgJgIgHgUQgIgVAAgUQAAgIAFgFQAFgGAGAAQAMAAANAVIAJAPQAIALANAFQAOAGAPABQARAAAKgJQAJgIABgPQAAgWgrgVIgPgHQgogUgPgQQgOgRAAgZQAAghAXgWQAYgVAmAAIARABIASADIAMgFIAIgBQANAAAMAUQAMAUAAAXQAAAJgDAGQgEAEgIAAQgGAAgGgEQgGgFgHgNQgKgQgKgGQgLgHgOABQgOgBgKAJQgJAJAAANQAAAMAJAJQAKAJAgAQIACACQBIAjAAApQABAkgcAZQgcAYgqAAg");
	this.shape_14.setTransform(216.3,-24.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#006E47").s().p("AhUBhQglglAAg4QAAg8AmgnQAmgnA7AAQAyAAAdAdQAdAcAAAwQAAAQgFAFQgEAGgUgBIhjAAQgJAAgEgDQgFgFABgHQgBgHAFgEQAEgDAJAAIA2AAIAMgCQAEgCAAgGQAAgZgQgRQgSgRgXAAQgfAAgPAbQgPAbAAAmQAAAoAVAdQAVAdAgAAQATAAANgDQANgFAMgJIAKgHQANgLAHAAQAGABAEAEQADADABAFQgBAHgGAJQgHAIgLAKQgWASgVAJQgVAHgZAAQg2AAglgmg");
	this.shape_15.setTransform(191.2,-24.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#006E47").s().p("AgNCcQgNgEgJgIQgJgJgEgPQgEgOAAgnIAAiKIgYAAIgHgCIgDgGIAAgHQAAgIAcgYIAKgJIAKgJQAbgXAKAAIAHACQADACAAAFIAAAwIA6AAQAHAAACACQADADAAAHIAAAGQAAAHgDADQgDADgGAAIg1AAIgEADIgCAGIAACAQAAAgAGAJQAGAJAPgBQAIAAANgEIASgEQAFAAAEAEQAEADAAAGQAAANgWAOQgWANgcAAQgPAAgNgEg");
	this.shape_16.setTransform(168,-27.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#006E47").s().p("AgtC5QgNgEAAgLQAAgJANgFIAGgCQAHgEADgJQADgJAAgUIgBgRIAAgVIAAgbQAAgogCgMQgCgNgFgCIgMgFQgQgEAAgKQAAgFAFgFQAFgFALgEIAngMIAbgFQAHAAADAFQADAFAAAMIAAAPIgBAMIgCBBIAAABIgBBAQAAAZADAKQACALAGADIAJADQANAGAAAKQAAAKgMADQgNAFgiAAQgmAAgNgFgAgfiCQgLgJAAgNQAAgPAMgLQAMgKASAAQAQAAALAJQALAKAAAOQAAAOgMAKQgMAKgSAAQgQAAgLgJg");
	this.shape_17.setTransform(150.8,-30.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#006E47").s().p("AgSC7IgzgCIgZABIgeABQgSAAgJgFQgJgFAAgKQAAgJAOgGQANgFADgEQAEgGACgmIAChlIgChhQgCgmgEgFQgDgDgNgGQgOgGAAgKQAAgJAIgFQAIgFAQAAIAbABIAeAAIA0gBIApgCQA4AAAeAYQAeAXAAAsQAAAjgWAWQgVAWgpAHQA0AFAcAYQAbAZAAArQAAAxgiAbQgjAbg+AAgAgniWQgJADgCAEQgEAHgBAYIgCBKIAABsIACAzQABAOAEAHQADAGANADQANADAVAAQAqAAAXgSQAWgSAAgiQAAglgZgRQgZgSgwAAQgWAAAAgPQAAgSAWAAQAiAAAWgPQAWgQAAgiQAAgigUgQQgVgQgqAAg");
	this.shape_18.setTransform(125.1,-30.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#006E47").s().p("AgrC6QgNgEAAgLQAAgJALgEIANgIQAEgEACgQIADgyIgBgpIAAgwIAAgVQAAhAgDgUQgCgSgFgDIgQgGQgQgEAAgKQAAgGAEgFQAGgEASgGIAjgKIAagDQAHAAAEAEQADAFAAAMIgBAUQgDBcAABeIACBYQACATAEAFIAPAHQAMAGAAAKQAAAKgNADQgNAFgiAAQgmAAgNgFg");
	this.shape_19.setTransform(84.9,-30.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#006E47").s().p("AgrC6QgNgEAAgLQAAgJALgEIANgIQAFgEACgQIABgyIAAgpIAAgwIAAgVQAAhAgCgUQgCgSgGgDIgQgGQgRgEAAgKQAAgGAGgFQAFgEASgGIAjgKIAagDQAHAAAEAEQADAFAAAMIAAAUQgDBcgBBeIADBYQABATAEAFIAPAHQALAGAAAKQAAAKgMADQgNAFgiAAQgnAAgMgFg");
	this.shape_20.setTransform(70,-30.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#006E47").s().p("AAuB6IgNgOIgMAGQggAVgfAAQgmAAgYgVQgXgXAAgjQAAgqAegWQAegXA2AAQANAAAHAEQAGADAAAKQAAAPgSAAQgZAAgQAMQgPANAAAWQAAAUANANQAOAMAXAAQAYAAALgLQALgLAAgbIAAhiQAAgXgKgMQgKgNgSAAQgMAAgLAGQgLAFgKAMIgGAHQgQAUgRAAQgKAAgGgHQgHgGAAgMQAAgYAfgRQAegQAvAAQAcAAAVAHQAUAIAMAOQAHAKAEAQQADAQAAAlIAABTQAAAOACAIQADAHAFABIAIADQAQAEAAAJQAAAMgRALQgRAJgYAAQgLAAgNgNg");
	this.shape_21.setTransform(49.2,-24.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#006E47").s().p("AjRCBQgOgFAAgLQAAgJAOgFIAGgCQAHgEADgJQACgJAAgTIAAgSIAAgVIAAgPQAAgvgCgOQgCgPgGgDIgMgEQgPgFAAgJQAAgGAEgEIAQgJIAmgNIAagFQAHAAADAFQAEAEABAJIAAAOIAAADIAAACIABABIACAAIABgBIAGgGIADgCQAfgdAgAAQAMAAALAEQALADALAHQAJAHAJAMQAKALADAAQADAAAHgIIALgLQARgPANgFQAMgFAPAAQAeAAAXAMQAXAMAKAWQALAYAABLIAAAaIAAAOIAAAMQAAAPADAGQADAHAGAEIAGACQANAFABAJQgBALgMAEQgLAEgpAAQglAAgNgDQgMgEAAgKQAAgKANgGIAJgEQAHgDADgNQADgNAAgfQAAhMgLgUQgKgVgcAAQgeAAgNAaQgNAbAAA+IAAAOQAAAcACAJQADAJAHAEIAHACQAMAFAAAJQAAALgMAEQgMAEgoAAQgjAAgMgDQgMgEAAgKQAAgKAMgFIAKgEQAGgEADgKQABgLAAgdQAAhSgKgVQgLgVgbAAQgOAAgMAJQgMAIgHAOQgGALgCAWQgDAUAAAxQAAAYADAJQABAIAHAEIAJAEQANAFAAAKQAAAKgMAEQgOAEghAAQgoAAgMgEg");
	this.shape_22.setTransform(10.6,-25.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#006E47").s().p("AhAC7QgcgGgTgLQgKgGgHgWQgGgWgBgeQAAgMAFgGQAFgGAIAAQANAAAMAXIAHALQAPAdAVANQATANAbAAQAbAAAUgRQATgQAAgZQAAgkhMgiIgIgDQg/gbgUgXQgVgXAAglQAAguAigeQAjgeA2AAIAfACIAjAIIALgGIAJgDQAGAAAFAEQAFAEAFAKQAJAQAGARQAEARAAANQAAAJgDAFQgFAEgHAAQgOAAgNgSIgEgFQgOgUgRgJQgSgJgWAAQgcAAgRAOQgQANAAAYQAAAVAOAOQANAOA4AYIALAEQAuAUAUARQAPANAHASQAIASgBAUQABA1glAeQglAdhBAAQggAAgdgGg");
	this.shape_23.setTransform(-28.4,-30.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#006E47").s().p("Ah3CrQgNgLAAgQQAAgMAJgKQAJgJANAAIAMACIAIAGIAHAJQAHAKAEAAQAOAAANgSQAOgUAAgVQAAgVgSgqIgDgFIgphbIgYgyQgFgKgPgGIAAgBQgJgDgDgEQgDgDAAgGQAAgLANgFQAOgEAmAAQAmAAAMAEQANAEAAAKIgBAJIgFAEIgKAFQgKAEAAAFIAGATIAVA0IAUAwQAHANAEAAQACAAAGgNIARgoIATg0QAGgSAAgHQAAgHgOgJQgPgIAAgGQAAgKAMgDQAMgEAdAAQAfAAALAEQALAEAAAKQAAAKgPAEIgKAEQgPAHgRAtIgHAUIghBSQgrBsgaAhQgcAggmAAQgTAAgMgLg");
	this.shape_24.setTransform(-71.3,-19.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#006E47").s().p("AAuB6IgNgOIgMAGQggAVgfAAQgmAAgYgVQgXgXAAgjQAAgqAegWQAegXA2AAQANAAAHAEQAGADAAAKQAAAPgSAAQgZAAgQAMQgPANAAAWQAAAUANANQAOAMAXAAQAYAAALgLQALgLAAgbIAAhiQAAgXgKgMQgKgNgSAAQgMAAgLAGQgLAFgKAMIgGAHQgQAUgRAAQgKAAgGgHQgHgGAAgMQAAgYAfgRQAegQAvAAQAcAAAVAHQAUAIAMAOQAHAKAEAQQADAQAAAlIAABTQAAAOACAIQADAHAFABIAIADQAQAEAAAJQAAAMgRALQgRAJgYAAQgLAAgNgNg");
	this.shape_25.setTransform(-98.4,-24.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#006E47").s().p("AhxCdQgfgjAAg4QABg/AignQAkgoA3AAIASACQAIADAFAFQAEAGAAAHQAAANgRAAIgIAAIgGgBQgdAAgRAYQgRAXAAApQgBArAUAcQASAbAdAAQAbAAAPgPQAPgPAAgdIAAhHIAAh3QAAgSgEgHQgDgHgJgEIgHgCQgQgEgBgJQABgHAGgFQAGgFAUgIIAdgIIAYgDQAJAAADAFQAEAFAAAMIAAANIgDCfIACBtQACAZAEADIASAGQANADAAAJQABAMgmAMIgaAHIgUACQgHAAgDgEQgEgEABgIIAAgNIgBgFIgCgCIgHAGIgMAIQgPAMgOAFQgPAGgQAAQgxAAgegjg");
	this.shape_26.setTransform(-127.4,-30.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#006E47").s().p("AgtC5QgNgEAAgLQAAgJANgFIAGgCQAHgEADgJQADgJAAgUIgBgRIAAgVIAAgbQAAgogCgMQgCgNgFgCIgMgFQgQgEAAgKQAAgFAFgFQAFgFALgEIAngMIAbgFQAHAAADAFQADAFAAAMIAAAPIgBAMIgCBBIAAABIgBBAQAAAZADAKQACALAGADIAJADQANAGAAAKQAAAKgMADQgNAFgiAAQgmAAgNgFgAgfiCQgLgJAAgNQAAgPAMgLQAMgKASAAQAQAAALAJQALAKAAAOQAAAOgMAKQgMAKgSAAQgQAAgLgJg");
	this.shape_27.setTransform(-151.6,-30.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#006E47").s().p("AgrC6QgNgEAAgLQAAgJALgEIANgIQAEgEACgQIACgyIAAgpIAAgwIAAgVQAAhAgDgUQgCgSgFgDIgQgGQgQgEAAgKQAAgGAEgFQAFgEATgGIAjgKIAagDQAIAAADAEQADAFAAAMIgBAUQgCBcAABeIABBYQACATAEAFIAPAHQAMAGAAAKQAAAKgNADQgNAFgiAAQgmAAgNgFg");
	this.shape_28.setTransform(-166.9,-30.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#006E47").s().p("AheBhQglgmAAg6QAAg5AngnQAngnA5AAQA4AAAkAkQAkAlAAA5QAAA6gnApQgmAog4AAQg4AAglgmgAgxhMQgQAUAAAjQAAAyAWAkQAWAiAeAAQAaAAAQgWQAPgVAAgjQAAgygVgiQgXgjgeAAQgZAAgQAWg");
	this.shape_29.setTransform(-188.7,-24.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#006E47").s().p("AA6C3QgOgFAAgLQAAgLAQgGIALgGQAFgDABgQIACg9IAAgkIgCgKQgDgFgNgCQgMgCgxAAIg3ABQgOACgEADIgDAIIgBAUIAAAVIABA9QACAQAEADIAMAGQAQAGAAALQAAALgPAFQgOAEgpAAQgoAAgPgEQgPgFAAgLQAAgLARgGIALgGQAGgEACggQACghAAhOIgChgQgCgngDgFQgDgDgOgGQgOgGAAgKQAAgKAMgEQAMgEAuAAQAuAAAMAEQAMAEAAAKQAAAKgQAHIgMAFQgEAEgCAQIgCBMQAAALAKADQAJAEAmAAIAVAAIA3gBQAQgCAEgEIADgFIABgKIAAgMIgCg/QgBgOgFgDIgLgFQgQgHAAgKQAAgKAMgEQAMgEAtAAQAvAAALAEQAMADAAALQAAALgQAGIgMAFQgFAEgDAjQgCAjAABFIACBlQACAnAEAFQACAEAOAFQAOAGAAAKQAAALgPAFQgOAEgpAAQgpAAgOgEg");
	this.shape_30.setTransform(-223.3,-30.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.holidaysmallbites, new cjs.Rectangle(-244.9,-63.6,489.9,127.3), null);


(lib.greyrectangle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(1,1,1).p("EhKEgThMCUJAAAMAAAAnDMiUJAAAg");
	this.shape.setTransform(0,0,1.022,0.996);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.greyrectangle, new cjs.Rectangle(-485.5,-125.5,971,251), null);


(lib.getpartystartednineteen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006E47").s().p("Ag/BLQgDAAgCgBQgDgCAAgDIAAiIQAAgDACgCQACgCAEAAIA4AAIAPABIAPAEQAPAFALAKQALAKAGAOQADAHACAIQABAHAAAIQAAARgGAOQgDAHgFAGIgKALIgMAJIgNAGQgPAFgPAAgAgpgtQgCACAAAEIAABSQAAACADACQADACACAAIAcAAQAJAAAKgDQAKgEAHgGQAHgHAEgJQAEgJAAgLQAAgKgEgJQgEgJgHgGQgHgHgKgDQgKgEgJAAIgbAAQgEAAgDADg");
	this.shape.setTransform(136.1,-0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006E47").s().p("AgzBLIgEgBQgDgCAAgCIAAiLQAAAAAAgBQAAAAAAgBQABAAAAgBQABAAAAgBIAFgBIBpAAQAAAAABAAQAAAAABABQAAAAABAAQAAABAAAAIACAFIAAAFIAAAFIgBAFQgBADgDABIhOAAQgBAAAAAAQgBABAAAAQgBAAAAABQgBAAAAABQgBAAAAABQAAAAgBABQAAAAAAABQAAAAAAABIAAAUQAAAEACABQACACADAAIAyAAQAAAAABAAQAAAAABABQAAAAABAAQAAABAAAAIACAGIAAAGIAAADQAAAHgGABIgwAAQgDAAgDADQgCACAAADIAAAXQAAADACACQACACADAAIBNAAQAEADAAAGIABAEIgBAGIgBAFQgBABAAAAQAAAAgBABQAAAAgBAAQgBAAAAAAg");
	this.shape_1.setTransform(119.8,-0.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006E47").s().p("AgCBMIgHgBQgEgCAAgFIAAhuQAAgEgCgCQgBgBgGAAIgMAAIgLAAIgGAAQgFAAgBgDIgCgHIAAgGIABgEIACgFQABAAAAAAQABAAAAgBQABAAAAAAQABAAABAAIBoAAQAEAAABADQACADAAAEIAAAFIgBAEIgCAFQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAIgeAAQgDAAgDABQgCACAAAFIAABtQAAAEgCACIgEACIgFAAg");
	this.shape_2.setTransform(105.1,-0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#006E47").s().p("AAmBMIgEgBIgCgBIgCgCIgagoIgEgFQgDgCgEAAIgTAAQgDAAgCADQgDACAAADIABAlQAAABgBAAQAAABAAABQAAAAgBAAQAAABgBAAIgFACIgHAAIgEAAQgEAAgDgCQgCgBAAgFIAAiKQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAgBABAAQAAAAABAAQAAgBABAAQABAAAAAAIBAAAQALAAALAEQAJADAIAHQAGAGAEAKQAEAJAAAMQABANgFAIQgFAHgFAFIgLAIQgFADAAADIAAAEIAGAIIAJAMIAIAMQADAGAAACQAAABAAAAQAAABgBABQAAAAAAABQgBAAAAABIgFADIgFACIgFABgAgfgwQgDACAAAEIAAAiQAAAEADACQADACAEAAIAeAAQAHAAAEgBQAGgCADgDQAFgDACgEQACgFAAgHQAAgMgJgGQgDgEgGgBQgEgCgHAAIgeAAQgEAAgDACg");
	this.shape_3.setTransform(91.4,-0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#006E47").s().p("AA8BMIgFAAIgIgBQgEgBgCgEIgIgUIgDgDIgEgCIgyAAIgCABIgCABIgDACIgBABIgIAUIgDADIgEACIgFABIgEAAIgEAAIgEgBIgEgBQgBgBAAAAQAAAAgBAAQAAgBAAAAQAAgBAAAAIA+iOQAAgBAAAAQABgBAAAAQABgBAAAAQABAAABAAIAEgBIAGAAQAFABABADIA7CNIAAABQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABIgFABgAgBgXIgBACIgCAEIgDAHIgEAJIgDAHIgDAHIgBADIABAEIADABIAeAAIADgBIABgDIgCgHIgFgLIgGgNIgDgIQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAAAgBAAg");
	this.shape_4.setTransform(75.2,-0.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#006E47").s().p("AgCBMIgHgBQgEgCAAgFIAAhuQAAgEgCgCQgBgBgGAAIgMAAIgLAAIgGAAQgFAAgBgDIgCgHIAAgGIABgEIACgFQABAAAAAAQABAAAAgBQABAAAAAAQABAAABAAIBoAAQAEAAABADQACADAAAEIAAAFIgBAEIgCAFQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAIgeAAQgDAAgDABQgCACAAAFIAABtQAAAEgCACIgEACIgFAAg");
	this.shape_5.setTransform(61.3,-0.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#006E47").s().p("AghBIQgQgFgMgMIgCgDIgBgDQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAgBIAFgEIAFgFIAFgBQAEAAADACIAKAHIANAHQAHACAKAAIALgBQAGgBAGgCQAFgDAEgEQAEgFAAgGQAAgHgFgDQgEgEgHgCIgPgCIgRgDIgSgEQgJgDgGgDQgHgFgFgHQgEgHAAgMQAAgMAGgJQAGgIAJgGQAKgFALgDQALgCAJAAIAOABIAPADQAIACAHAEQAHAEAFAFIABACIAAACQAAAEgCACIgEAFIgGADIgGABIgEAAQgIgHgJgEQgJgEgKAAIgKABQgGABgEADQgFABgDAEQgDAFAAAGQAAAIAHAEQAHADALACIAWADQANABALAEQAKAFAIAHQAHAJAAAPQAAANgGAKQgHAJgJAHQgKAGgMADQgLACgLAAQgQABgQgHg");
	this.shape_6.setTransform(47.3,-0.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#006E47").s().p("AgFBPIgEgBIgDgCIgBgDIAAg2QAAgDgCgFIgDgIIgshCIAAgCQAAgBAAAAQAAgBABgBQAAAAAAgBQABAAAAgBIAFgEIAFgCIAGgBIAEABIAEADIAeAxIADADIADABIADgCIADgCIAegxQACgDACgBIAGgBIAEABIAGACIAFAEQAAAAABABQAAAAAAABQABAAAAABQAAABAAAAIAAACIgBACIgrBCIgEAJIgBAEIgBADIAAA1QgCAGgFAAIgIABg");
	this.shape_7.setTransform(25.9,-0.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#006E47").s().p("AgCBMIgHgBQgEgCAAgFIAAhuQAAgEgCgCQgBgBgGAAIgMAAIgLAAIgGAAQgFAAgBgDIgCgHIAAgGIABgEIACgFQABAAAAAAQABAAAAgBQABAAAAAAQABAAABAAIBoAAQAEAAABADQACADAAAEIAAAFIgBAEIgCAFQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAIgeAAQgDAAgDABQgCACAAAFIAABtQAAAEgCACIgEACIgFAAg");
	this.shape_8.setTransform(12.4,-0.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#006E47").s().p("AAmBMIgEgBIgDgBIgBgCIgagoIgEgFQgDgCgEAAIgTAAQgDAAgCADQgDACAAADIABAlQAAABgBAAQAAABAAABQAAAAgBAAQAAABgBAAIgFACIgHAAIgEAAQgEAAgDgCQgCgBAAgFIAAiKQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAgBABAAQAAAAABAAQAAgBABAAQABAAAAAAIBAAAQALAAALAEQAJADAIAHQAGAGAFAKQADAJAAAMQABANgFAIQgFAHgFAFIgLAIQgFADAAADIAAAEIAGAIIAJAMIAIAMQADAGAAACQAAABAAAAQAAABgBABQAAAAAAABQgBAAAAABIgFADIgFACIgFABgAgfgwQgDACAAAEIAAAiQAAAEADACQADACAEAAIAeAAQAHAAAEgBQAGgCADgDQAFgDACgEQACgFAAgHQAAgMgJgGQgDgEgGgBQgEgCgHAAIgeAAQgEAAgDACg");
	this.shape_9.setTransform(-1.3,-0.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#006E47").s().p("AA8BMIgFAAIgIgBQgEgBgCgEIgIgUIgDgDIgEgCIgyAAIgCABIgCABIgDACIgBABIgIAUIgDADIgEACIgFABIgEAAIgEAAIgEgBIgEgBQgBgBAAAAQAAAAgBAAQAAgBAAAAQAAgBAAAAIA+iOQAAgBAAAAQABgBAAAAQABgBAAAAQABAAABAAIAEgBIAGAAQAFABABADIA7CNIAAABQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABIgFABgAgBgXIgBACIgCAEIgDAHIgEAJIgDAHIgDAHIgBADIABAEIADABIAeAAIADgBIABgDIgCgHIgFgLIgGgNIgDgIQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAAAgBAAg");
	this.shape_10.setTransform(-17.5,-0.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#006E47").s().p("Ag1BNQgGAAgDgGIAAiOQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAABgBIAEgBIBBAAQAKAAAKADQAJAEAIAGQAHAGAFAJQAEAJAAALIgBAHIgCAHQgFAOgKAGQgKAHgNACQgMADgMgBIgaAAIgCABIgCABQgCADAAADIAAAuIgDAEIgFABIgGABgAgggvQgCADAAADIAAAaQAAAAAAABQAAABAAAAQABABAAAAQAAABABAAQACACADAAIAlAAIAJgBQAEgBAEgDQADgDACgEQACgEAAgFQAAgEgCgEQgCgDgDgDIgHgEIgIgBIgmAAQgEAAgCACg");
	this.shape_11.setTransform(-31.9,-0.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#006E47").s().p("AgzBLIgEgBQgDgCAAgCIAAiLQAAAAAAgBQAAAAAAgBQABAAAAgBQABAAAAgBIAFgBIBpAAQAAAAABAAQAAAAABABQAAAAABAAQAAABAAAAIACAFIAAAFIAAAFIgBAFQgBADgDABIhOAAQgBAAAAAAQAAABgBAAQAAAAgBABQgBAAAAABQgBAAAAABQAAAAgBABQAAAAAAABQAAAAAAABIAAAUQAAAEACABQACACADAAIAyAAQAAAAABAAQAAAAABABQAAAAABAAQAAABAAAAIACAGIAAAGIAAADQAAAHgGABIgwAAQgDAAgDADQgCACAAADIAAAXQAAADACACQACACADAAIBNAAQAEADAAAGIABAEIgBAGIgBAFQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAg");
	this.shape_12.setTransform(-54.1,-0.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#006E47").s().p("Ag1BNIgFgBQgCgBgBgDIAAiQIADgDIAFgBIAGgBIAFAAQAGAAADAGIAAAwQAAADACADQACACADAAIA0AAQADAAADgCQACgCAAgEIAAgwQADgFAFAAIAJAAIAGABQADABACADIAACPQgCAFgFAAIgJAAIgGgBQgDgBgDgCIAAg2QAAgDgCgDQgCgCgEAAIgyAAQgEAAgCADQgDADAAADIAAA0QAAADgDABIgFABIgGABg");
	this.shape_13.setTransform(-70.6,-0.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#006E47").s().p("AgCBMIgHgBQgEgCAAgFIAAhuQAAgEgCgCQgBgBgGAAIgMAAIgLAAIgGAAQgFAAgBgDIgCgHIAAgGIABgEIACgFQABAAAAAAQABAAAAgBQABAAAAAAQABAAABAAIBoAAQAEAAABADQACADAAAEIAAAFIgBAEIgCAFQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAIgeAAQgDAAgDABQgCACAAAFIAABtQAAAEgCACIgEACIgFAAg");
	this.shape_14.setTransform(-85.6,-0.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#006E47").s().p("AgCBMIgHgBQgEgCAAgFIAAhuQAAgEgCgCQgBgBgGAAIgMAAIgLAAIgGAAQgFAAgBgDIgCgHIAAgGIABgEIACgFQABAAAAAAQABAAAAgBQABAAAAAAQABAAABAAIBoAAQAEAAABADQACADAAAEIAAAFIgBAEIgCAFQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAIgeAAQgDAAgDABQgCACAAAFIAABtQAAAEgCACIgEACIgFAAg");
	this.shape_15.setTransform(-105.2,-0.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#006E47").s().p("AgzBLIgEgBQgDgCAAgCIAAiLQAAAAAAgBQAAAAAAgBQABAAAAgBQABAAAAgBIAFgBIBpAAQAAAAABAAQAAAAABABQAAAAABAAQAAABAAAAIACAFIAAAFIAAAFIgBAFQgBADgDABIhOAAQgBAAAAAAQAAABgBAAQAAAAgBABQgBAAAAABQgBAAAAABQAAAAgBABQAAAAAAABQAAAAAAABIAAAUQAAAEACABQACACADAAIAyAAQAAAAABAAQAAAAABABQAAAAABAAQAAABAAAAIACAGIAAAGIAAADQAAAHgGABIgwAAQgDAAgDADQgCACAAADIAAAXQAAADACACQACACADAAIBNAAQAEADAAAGIABAEIgBAGIgBAFQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAg");
	this.shape_16.setTransform(-118.4,-0.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#006E47").s().p("AgMBNIgPgEIgOgHIgMgKIgJgLIgIgOQgHgOAAgRQAAgIACgHIAFgPQAGgPALgKIAMgJQAHgFAHgDIAPgEQAIgCAIAAQAJAAAIACQAJACAIAEQAPAHAMANIABADQAAACgCADIgFAFIgGAFIgFABQgDAAgDgDIgJgHQgEgEgIgDQgHgDgKAAQgKAAgJAEQgKAEgHAHQgHAHgEAKQgEAJAAAKQAAAKAEAKQAEAJAHAIQAHAHAKAEQAJAEAKAAIAKgBIALgCQAFgCAEgDQAEgDADgFIAAgDQAAAAAAgBQAAgBAAAAQAAgBgBAAQAAgBgBAAIgFgCIgbAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAgBIgCgEIgBgGIAAgFIABgFQACgDADgBIA/AAIACABIADACQADAHAAAHIgBAHIgBAGQgFALgHAJQgHAJgKAGQgJAGgLADQgLAEgMAAQgIAAgIgCg");
	this.shape_17.setTransform(-136.1,-0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.getpartystartednineteen, new cjs.Rectangle(-146.6,-13,293.4,26.1), null);


(lib.getinspired = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAVArIgVg/IAAAAIgUA/IgSAAIgchVIASAAIATBBIABAAIAUhBIARAAIAVBBIAAAAIAThBIASAAIgcBVg");
	this.shape.setTransform(33.5,2.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgSAqQgHgEgHgGQgGgGgDgIQgEgIAAgKQAAgJAEgJQADgIAGgGQAGgGAIgDQAJgDAJAAQAJAAAJADQAJADAFAGQAHAGADAIQAEAJAAAJQAAAKgEAIQgDAIgHAGQgFAGgJAEQgJADgJAAQgJAAgJgDgAgMgbQgEACgEAEQgEAEgBAGQgDAGAAAFQAAAGADAFQABAGAEAEQAEAEAEADQAGACAGAAQAHAAAFgCQAGgDADgEQAEgEABgGQADgFAAgGQAAgFgDgGQgBgGgEgEQgDgEgGgCQgGgDgGAAQgGAAgGADg");
	this.shape_1.setTransform(20.7,2.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAWAsIAAgvIgBgJIgDgJQgCgDgEgDQgEgCgGAAQgJAAgGAIQgHAIAAAMIAAAtIgRAAIAAhCIAAgJIAAgKIAQAAIAAAIIAAAGIABAAIAEgGIAHgFIAIgEIAIgBQAIAAAGADQAGADAEAEQAEAFACAGQABAHAAAHIAAA0g");
	this.shape_2.setTransform(9.6,2.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgsBBIAAh/IAQAAIAAANIABAAQAEgHAIgEQAIgEAKAAQAJAAAIADQAIADAGAHQAFAGADAIQADAIAAAJQAAAKgDAIQgDAHgFAGQgGAHgIADQgIAEgKAAQgIAAgIgEQgIgEgFgHIAAAAIAAA3gAgLgwQgGADgDAEQgEAEgCAGQgCAFAAAHQAAAGACAFQACAGAEADQADAEAGADQAFACAGAAQAHAAAFgCQAFgDAEgEQADgEACgFQACgGAAgGQAAgGgCgFQgCgGgDgEQgEgEgFgDQgFgCgHAAQgGAAgFACg");
	this.shape_3.setTransform(-6.4,4.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgSAqQgHgEgHgGQgGgGgDgIQgEgIAAgKQAAgJAEgJQADgIAGgGQAGgGAIgDQAJgDAJAAQAJAAAJADQAIADAHAGQAGAGADAIQAEAJAAAJQAAAKgEAIQgDAIgGAGQgHAGgIAEQgJADgJAAQgJAAgJgDgAgLgbQgFACgEAEQgEAEgCAGQgCAGAAAFQAAAGACAFQACAGAEAEQAEAEAFADQAFACAGAAQAHAAAFgCQAGgDADgEQADgEACgGQACgFAAgGQAAgFgCgGQgCgGgDgEQgDgEgGgCQgGgDgGAAQgGAAgFADg");
	this.shape_4.setTransform(-18.2,2.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAVBEIAAgvIgBgKIgCgIQgDgDgEgCQgDgCgGgBQgEAAgFACQgDACgEAEQgGAHAAANIAAAtIgRAAIAAiHIARAAIAAA/IABAAQACgFAIgFIAIgDIAHgBQAJAAAFACQAHADADAFQAFAEABAGQACAGAAAHIAAA1g");
	this.shape_5.setTransform(-29.3,-0.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgXA+QgLgFgIgJIAOgLQAEAGAIAEQAIAEAIAAIAIgBQAFgBADgDQAEgDADgEQACgEAAgGQAAgFgCgEQgDgEgEgDIgKgEIgKgEIgMgEQgGgCgFgEQgEgEgEgGQgDgGAAgJQAAgKAEgGQAFgHAGgFQAGgEAHgCQAIgCAIAAIAKABIAKADQAKADAGAIIgMALQgFgEgGgEQgHgDgHAAQgFgBgDACQgEABgEACQgEADgCAEQgCAEgBAFQAAAFACAEIAHAGIAIAEIAJAEIANAEQAGADAGADQAGAEADAGQADAHAAAJQAAAKgDAHQgEAIgGAEQgGAFgJADQgIACgHAAQgMAAgLgFg");
	this.shape_6.setTransform(-40.2,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.getinspired, new cjs.Rectangle(-47.2,-13,90.3,26.1), null);


(lib.fourteentable_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.fourteentable();
	this.instance.parent = this;
	this.instance.setTransform(-485,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.fourteentable_1, new cjs.Rectangle(-485,-125,970,250), null);


(lib.fourteenrectangle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D63900").s().p("AqJDXQhZAAg/g/Qg/g/AAhZQAAhYA/g/QA/g/BZAAIUTAAQBZAAA/A/QA/A/AABYQAABZg/A/Qg/A/hZAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fourteenrectangle, new cjs.Rectangle(-86.5,-21.5,173.1,43), null);


(lib.ctavideorollover = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B63100").s().p("AqJDXQhZAAg/g/Qg/g/AAhZQAAhYA/g/QA/g/BZAAIUTAAQBZAAA/A/QA/A/AABYQAABZg/A/Qg/A/hZAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ctavideorollover, new cjs.Rectangle(-86.5,-21.5,173.1,43), null);


(lib.blackwideskyscraper = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgRBA2FMAAAhsJMAiDAAAMAAABsJg");
	this.shape.setTransform(0,0,0.753,0.867);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.blackwideskyscraper, new cjs.Rectangle(-82.1,-300,164.3,600.1), null);


(lib.fourteenrollover = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(29));

	// cta-rollover
	this.instance = new lib.ctavideorollover();
	this.instance.parent = this;
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:1},9).wait(2).to({alpha:0},10).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86.5,-21.5,173.1,43);


// stage content:
(lib.billboardnineteen = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_49 = function() {
		//onhover event to reveal green cta rectangle over orange rectangle
		this.btn_main.addEventListener("mouseover", fl_MouseOverHandler.bind(this));
		this.btn_main.addEventListener("mouseout", fl_MouseOutHandler.bind(this));
		
		function fl_MouseOverHandler()
		{
			this.cta_rollover.gotoAndPlay(2);
		}
		
		function fl_MouseOutHandler()
		{
		this.cta_rollover.gotoAndPlay(13);
		}
	}
	this.frame_228 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(49).call(this.frame_49).wait(179).call(this.frame_228).wait(4));

	// button
	this.btn_main = new lib.mainbutton();
	this.btn_main.parent = this;
	this.btn_main.setTransform(486.2,125.3,4.708,0.381,0,0,0,0.3,0.8);
	new cjs.ButtonHelper(this.btn_main, 0, 1, 2, false, new lib.mainbutton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_main).wait(232));

	// grey-rectangle
	this.instance = new lib.greyrectangle();
	this.instance.parent = this;
	this.instance.setTransform(485,125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(232));

	// fade-from-white
	this.instance_1 = new lib.blackwideskyscraper();
	this.instance_1.parent = this;
	this.instance_1.setTransform(486.8,125.1,5.906,0.417,0,0,0,0.4,0.2);
	this.instance_1.filters = [new cjs.ColorFilter(1, 1, 1, 1, 255, 255, 255, 0)];
	this.instance_1.cache(-84,-302,168,604);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:0.1,regY:0.4,x:488.7,alpha:0},9).wait(223));

	// kale-logo
	this.instance_2 = new lib.kalelogo();
	this.instance_2.parent = this;
	this.instance_2.setTransform(851.8,56.7);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({scaleX:0.05,scaleY:0.05},0).to({scaleX:1.14,scaleY:1.14,alpha:1},6,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},7,cjs.Ease.get(1)).wait(210));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Eg1DAhIMAAAhCQMBx2AAAMAAABCQg");
	mask.setTransform(389.1,132.1);

	// get-party-started
	this.instance_3 = new lib.getpartystartednineteen();
	this.instance_3.parent = this;
	this.instance_3.setTransform(196.2,30.5);
	this.instance_3.alpha = 0;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(207).to({x:-303.8},0).to({x:216.2,alpha:1},10,cjs.Ease.get(1)).to({x:196.2},8,cjs.Ease.get(1)).wait(7));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("Eg1DAhIMAAAhCQMBx2AAAMAAABCQg");
	mask_1.setTransform(389.1,132.1);

	// holiday-platters-small-bites
	this.instance_4 = new lib.holidaysmallbites();
	this.instance_4.parent = this;
	this.instance_4.setTransform(294.4,108.2);
	this.instance_4.alpha = 0;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(207).to({x:-205.6},0).to({x:314.4,alpha:1},10,cjs.Ease.get(1)).to({x:294.4},8,cjs.Ease.get(1)).wait(7));

	// ready-to-serve
	this.instance_5 = new lib.readyserveshrimp();
	this.instance_5.parent = this;
	this.instance_5.setTransform(246.8,85.7);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(147).to({alpha:1},10).wait(40).to({alpha:0},5).wait(30));

	// party-perfect-
	this.instance_6 = new lib.partyperfectnineteen();
	this.instance_6.parent = this;
	this.instance_6.setTransform(232.2,85.7);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(97).to({alpha:1},10).wait(40).to({alpha:0},5).wait(80));

	// mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("Eg1DAhIMAAAhCQMBx2AAAMAAABCQg");
	mask_2.setTransform(389.1,132.1);

	// crowd-pleasing-cheese
	this.instance_7 = new lib.partyreadyrecipes();
	this.instance_7.parent = this;
	this.instance_7.setTransform(221.3,91.7);
	this.instance_7.alpha = 0;

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(39).to({x:-188.7},0).to({x:241.3,alpha:1},10,cjs.Ease.get(1)).to({x:221.3},8,cjs.Ease.get(1)).wait(40).to({alpha:0},5).wait(130));

	// mask (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("EguvAhIMAAAhCQMBp3AAAMAAABCQg");
	mask_3.setTransform(378.4,132.1);

	// shop-now
	this.instance_8 = new lib.getinspired();
	this.instance_8.parent = this;
	this.instance_8.setTransform(135.3,206.5);
	this.instance_8.alpha = 0;

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(49).to({x:-104.7},0).to({x:155.3,alpha:1},10,cjs.Ease.get(1)).to({x:135.3},8,cjs.Ease.get(1)).wait(165));

	// mask (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("Eg1DAhIMAAAhCQMBx2AAAMAAABCQg");
	mask_4.setTransform(389.1,132.1);

	// cta-rollover
	this.cta_rollover = new lib.fourteenrollover();
	this.cta_rollover.parent = this;
	this.cta_rollover.setTransform(136,207.6);
	this.cta_rollover.alpha = 0;

	var maskedShapeInstanceList = [this.cta_rollover];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.cta_rollover).wait(49).to({x:-104},0).to({x:156,alpha:1},10,cjs.Ease.get(1)).to({x:136},8,cjs.Ease.get(1)).wait(165));

	// mask (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	mask_5.graphics.p("Eg1DAhIMAAAhCQMBx2AAAMAAABCQg");
	mask_5.setTransform(389.1,132.1);

	// cta-rectangle
	this.cta_rollover_1 = new lib.fourteenrectangle();
	this.cta_rollover_1.parent = this;
	this.cta_rollover_1.setTransform(136,207.6);
	this.cta_rollover_1.alpha = 0;

	var maskedShapeInstanceList = [this.cta_rollover_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.cta_rollover_1).wait(49).to({x:-104},0).to({x:156,alpha:1},10,cjs.Ease.get(1)).to({x:136},8,cjs.Ease.get(1)).wait(165));

	// bottom-left
	this.instance_9 = new lib.nineteenbottomleft_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(550.1,187);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(18).to({alpha:1},10).wait(204));

	// top-right
	this.instance_10 = new lib.nineteentopright_1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(697,63);
	this.instance_10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(23).to({alpha:1},10).wait(199));

	// bottom-right
	this.instance_11 = new lib.nineteenbottomright_1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(847,165.5);
	this.instance_11.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(28).to({alpha:1},10).wait(194));

	// top-cookies
	this.instance_12 = new lib.topcookiesnineteen();
	this.instance_12.parent = this;
	this.instance_12.setTransform(922.5,34.5);
	this.instance_12.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(33).to({alpha:1},10).wait(189));

	// table
	this.instance_13 = new lib.fourteentable_1();
	this.instance_13.parent = this;
	this.instance_13.setTransform(485,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(232));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(484.6,109.2,970.4,265.9);
// library properties:
lib.properties = {
	id: '85088BD5353243C8B4895C262600CED3',
	width: 970,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/index_atlas_P_.png", id:"index_atlas_P_"},
		{src:"images/index_atlas_NP_.jpg", id:"index_atlas_NP_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['85088BD5353243C8B4895C262600CED3'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;