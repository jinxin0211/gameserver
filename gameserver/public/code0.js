gdjs._23553_38754Code = {};
gdjs._23553_38754Code.localVariables = [];
gdjs._23553_38754Code.GDQUITObjects1_1final = [];

gdjs._23553_38754Code.GDaimObjects1_1final = [];

gdjs._23553_38754Code.GDaimObjects2_2final = [];

gdjs._23553_38754Code.GDcaptionObjects1_1final = [];

gdjs._23553_38754Code.GDstartObjects1_1final = [];

gdjs._23553_38754Code.GDstartObjects2_2final = [];

gdjs._23553_38754Code.GDNewSpriteObjects1= [];
gdjs._23553_38754Code.GDNewSpriteObjects2= [];
gdjs._23553_38754Code.GDNewSpriteObjects3= [];
gdjs._23553_38754Code.GDNewSprite2Objects1= [];
gdjs._23553_38754Code.GDNewSprite2Objects2= [];
gdjs._23553_38754Code.GDNewSprite2Objects3= [];
gdjs._23553_38754Code.GDstartObjects1= [];
gdjs._23553_38754Code.GDstartObjects2= [];
gdjs._23553_38754Code.GDstartObjects3= [];
gdjs._23553_38754Code.GDQUITObjects1= [];
gdjs._23553_38754Code.GDQUITObjects2= [];
gdjs._23553_38754Code.GDQUITObjects3= [];
gdjs._23553_38754Code.GDaimObjects1= [];
gdjs._23553_38754Code.GDaimObjects2= [];
gdjs._23553_38754Code.GDaimObjects3= [];
gdjs._23553_38754Code.GDcaptionObjects1= [];
gdjs._23553_38754Code.GDcaptionObjects2= [];
gdjs._23553_38754Code.GDcaptionObjects3= [];
gdjs._23553_38754Code.GD_9525490_9534892Objects1= [];
gdjs._23553_38754Code.GD_9525490_9534892Objects2= [];
gdjs._23553_38754Code.GD_9525490_9534892Objects3= [];


gdjs._23553_38754Code.mapOfGDgdjs_9546_959523553_959538754Code_9546GDstartObjects3Objects = Hashtable.newFrom({"start": gdjs._23553_38754Code.GDstartObjects3});
gdjs._23553_38754Code.mapOfGDgdjs_9546_959523553_959538754Code_9546GDaimObjects3Objects = Hashtable.newFrom({"aim": gdjs._23553_38754Code.GDaimObjects3});
gdjs._23553_38754Code.eventsList0 = function(runtimeScene) {

{

gdjs._23553_38754Code.GDaimObjects1.length = 0;

gdjs._23553_38754Code.GDstartObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs._23553_38754Code.GDaimObjects1_1final.length = 0;
gdjs._23553_38754Code.GDstartObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("start"), gdjs._23553_38754Code.GDstartObjects2);
for (var i = 0, k = 0, l = gdjs._23553_38754Code.GDstartObjects2.length;i<l;++i) {
    if ( gdjs._23553_38754Code.GDstartObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs._23553_38754Code.GDstartObjects2[k] = gdjs._23553_38754Code.GDstartObjects2[i];
        ++k;
    }
}
gdjs._23553_38754Code.GDstartObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs._23553_38754Code.GDstartObjects2.length; j < jLen ; ++j) {
        if ( gdjs._23553_38754Code.GDstartObjects1_1final.indexOf(gdjs._23553_38754Code.GDstartObjects2[j]) === -1 )
            gdjs._23553_38754Code.GDstartObjects1_1final.push(gdjs._23553_38754Code.GDstartObjects2[j]);
    }
}
}
{
gdjs._23553_38754Code.GDaimObjects2.length = 0;

gdjs._23553_38754Code.GDstartObjects2.length = 0;

{gdjs._23553_38754Code.GDaimObjects2_2final.length = 0;
gdjs._23553_38754Code.GDstartObjects2_2final.length = 0;
let isConditionTrue_2 = false;
isConditionTrue_1 = false;
{
gdjs.copyArray(runtimeScene.getObjects("aim"), gdjs._23553_38754Code.GDaimObjects3);
gdjs.copyArray(runtimeScene.getObjects("start"), gdjs._23553_38754Code.GDstartObjects3);
isConditionTrue_2 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._23553_38754Code.mapOfGDgdjs_9546_959523553_959538754Code_9546GDstartObjects3Objects, gdjs._23553_38754Code.mapOfGDgdjs_9546_959523553_959538754Code_9546GDaimObjects3Objects, false, runtimeScene, false);
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
    for (let j = 0, jLen = gdjs._23553_38754Code.GDaimObjects3.length; j < jLen ; ++j) {
        if ( gdjs._23553_38754Code.GDaimObjects2_2final.indexOf(gdjs._23553_38754Code.GDaimObjects3[j]) === -1 )
            gdjs._23553_38754Code.GDaimObjects2_2final.push(gdjs._23553_38754Code.GDaimObjects3[j]);
    }
    for (let j = 0, jLen = gdjs._23553_38754Code.GDstartObjects3.length; j < jLen ; ++j) {
        if ( gdjs._23553_38754Code.GDstartObjects2_2final.indexOf(gdjs._23553_38754Code.GDstartObjects3[j]) === -1 )
            gdjs._23553_38754Code.GDstartObjects2_2final.push(gdjs._23553_38754Code.GDstartObjects3[j]);
    }
}
}
{
isConditionTrue_2 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "X", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
}
}
{
gdjs.copyArray(gdjs._23553_38754Code.GDaimObjects2_2final, gdjs._23553_38754Code.GDaimObjects2);
gdjs.copyArray(gdjs._23553_38754Code.GDstartObjects2_2final, gdjs._23553_38754Code.GDstartObjects2);
}
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs._23553_38754Code.GDaimObjects2.length; j < jLen ; ++j) {
        if ( gdjs._23553_38754Code.GDaimObjects1_1final.indexOf(gdjs._23553_38754Code.GDaimObjects2[j]) === -1 )
            gdjs._23553_38754Code.GDaimObjects1_1final.push(gdjs._23553_38754Code.GDaimObjects2[j]);
    }
    for (let j = 0, jLen = gdjs._23553_38754Code.GDstartObjects2.length; j < jLen ; ++j) {
        if ( gdjs._23553_38754Code.GDstartObjects1_1final.indexOf(gdjs._23553_38754Code.GDstartObjects2[j]) === -1 )
            gdjs._23553_38754Code.GDstartObjects1_1final.push(gdjs._23553_38754Code.GDstartObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs._23553_38754Code.GDaimObjects1_1final, gdjs._23553_38754Code.GDaimObjects1);
gdjs.copyArray(gdjs._23553_38754Code.GDstartObjects1_1final, gdjs._23553_38754Code.GDstartObjects1);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "游戲内容", false);
}{gdjs.evtsExt__Gamepads__A_Vibrate_controller.func(runtimeScene, 1, 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{

gdjs._23553_38754Code.GDQUITObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs._23553_38754Code.GDQUITObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("QUIT"), gdjs._23553_38754Code.GDQUITObjects2);
for (var i = 0, k = 0, l = gdjs._23553_38754Code.GDQUITObjects2.length;i<l;++i) {
    if ( gdjs._23553_38754Code.GDQUITObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs._23553_38754Code.GDQUITObjects2[k] = gdjs._23553_38754Code.GDQUITObjects2[i];
        ++k;
    }
}
gdjs._23553_38754Code.GDQUITObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs._23553_38754Code.GDQUITObjects2.length; j < jLen ; ++j) {
        if ( gdjs._23553_38754Code.GDQUITObjects1_1final.indexOf(gdjs._23553_38754Code.GDQUITObjects2[j]) === -1 )
            gdjs._23553_38754Code.GDQUITObjects1_1final.push(gdjs._23553_38754Code.GDQUITObjects2[j]);
    }
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "LT", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(gdjs._23553_38754Code.GDQUITObjects1_1final, gdjs._23553_38754Code.GDQUITObjects1);
}
}
if (isConditionTrue_0) {
{gdjs.evtsExt__BackButton__doDefault.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{

gdjs._23553_38754Code.GDcaptionObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs._23553_38754Code.GDcaptionObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("caption"), gdjs._23553_38754Code.GDcaptionObjects2);
for (var i = 0, k = 0, l = gdjs._23553_38754Code.GDcaptionObjects2.length;i<l;++i) {
    if ( gdjs._23553_38754Code.GDcaptionObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs._23553_38754Code.GDcaptionObjects2[k] = gdjs._23553_38754Code.GDcaptionObjects2[i];
        ++k;
    }
}
gdjs._23553_38754Code.GDcaptionObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs._23553_38754Code.GDcaptionObjects2.length; j < jLen ; ++j) {
        if ( gdjs._23553_38754Code.GDcaptionObjects1_1final.indexOf(gdjs._23553_38754Code.GDcaptionObjects2[j]) === -1 )
            gdjs._23553_38754Code.GDcaptionObjects1_1final.push(gdjs._23553_38754Code.GDcaptionObjects2[j]);
    }
}
}
{
{let isConditionTrue_2 = false;
isConditionTrue_1 = false;
{
isConditionTrue_2 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "Y", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
}
}
{
}
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(gdjs._23553_38754Code.GDcaptionObjects1_1final, gdjs._23553_38754Code.GDcaptionObjects1);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "教學", false);
}{gdjs.evtsExt__BackButton__doDefault.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("排行"), gdjs._23553_38754Code.GD_9525490_9534892Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._23553_38754Code.GD_9525490_9534892Objects1.length;i<l;++i) {
    if ( gdjs._23553_38754Code.GD_9525490_9534892Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._23553_38754Code.GD_9525490_9534892Objects1[k] = gdjs._23553_38754Code.GD_9525490_9534892Objects1[i];
        ++k;
    }
}
gdjs._23553_38754Code.GD_9525490_9534892Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "排行", false);
}}

}


};

gdjs._23553_38754Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._23553_38754Code.GDNewSpriteObjects1.length = 0;
gdjs._23553_38754Code.GDNewSpriteObjects2.length = 0;
gdjs._23553_38754Code.GDNewSpriteObjects3.length = 0;
gdjs._23553_38754Code.GDNewSprite2Objects1.length = 0;
gdjs._23553_38754Code.GDNewSprite2Objects2.length = 0;
gdjs._23553_38754Code.GDNewSprite2Objects3.length = 0;
gdjs._23553_38754Code.GDstartObjects1.length = 0;
gdjs._23553_38754Code.GDstartObjects2.length = 0;
gdjs._23553_38754Code.GDstartObjects3.length = 0;
gdjs._23553_38754Code.GDQUITObjects1.length = 0;
gdjs._23553_38754Code.GDQUITObjects2.length = 0;
gdjs._23553_38754Code.GDQUITObjects3.length = 0;
gdjs._23553_38754Code.GDaimObjects1.length = 0;
gdjs._23553_38754Code.GDaimObjects2.length = 0;
gdjs._23553_38754Code.GDaimObjects3.length = 0;
gdjs._23553_38754Code.GDcaptionObjects1.length = 0;
gdjs._23553_38754Code.GDcaptionObjects2.length = 0;
gdjs._23553_38754Code.GDcaptionObjects3.length = 0;
gdjs._23553_38754Code.GD_9525490_9534892Objects1.length = 0;
gdjs._23553_38754Code.GD_9525490_9534892Objects2.length = 0;
gdjs._23553_38754Code.GD_9525490_9534892Objects3.length = 0;

gdjs._23553_38754Code.eventsList0(runtimeScene);
gdjs._23553_38754Code.GDNewSpriteObjects1.length = 0;
gdjs._23553_38754Code.GDNewSpriteObjects2.length = 0;
gdjs._23553_38754Code.GDNewSpriteObjects3.length = 0;
gdjs._23553_38754Code.GDNewSprite2Objects1.length = 0;
gdjs._23553_38754Code.GDNewSprite2Objects2.length = 0;
gdjs._23553_38754Code.GDNewSprite2Objects3.length = 0;
gdjs._23553_38754Code.GDstartObjects1.length = 0;
gdjs._23553_38754Code.GDstartObjects2.length = 0;
gdjs._23553_38754Code.GDstartObjects3.length = 0;
gdjs._23553_38754Code.GDQUITObjects1.length = 0;
gdjs._23553_38754Code.GDQUITObjects2.length = 0;
gdjs._23553_38754Code.GDQUITObjects3.length = 0;
gdjs._23553_38754Code.GDaimObjects1.length = 0;
gdjs._23553_38754Code.GDaimObjects2.length = 0;
gdjs._23553_38754Code.GDaimObjects3.length = 0;
gdjs._23553_38754Code.GDcaptionObjects1.length = 0;
gdjs._23553_38754Code.GDcaptionObjects2.length = 0;
gdjs._23553_38754Code.GDcaptionObjects3.length = 0;
gdjs._23553_38754Code.GD_9525490_9534892Objects1.length = 0;
gdjs._23553_38754Code.GD_9525490_9534892Objects2.length = 0;
gdjs._23553_38754Code.GD_9525490_9534892Objects3.length = 0;


return;

}

gdjs['_23553_38754Code'] = gdjs._23553_38754Code;
