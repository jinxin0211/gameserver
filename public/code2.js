gdjs._32080_31639Code = {};
gdjs._32080_31639Code.localVariables = [];
gdjs._32080_31639Code.GDBackObjects1_1final = [];

gdjs._32080_31639Code.GDPlayAgainObjects1_1final = [];

gdjs._32080_31639Code.GDPlayAgainObjects2_2final = [];

gdjs._32080_31639Code.GDaimObjects1_1final = [];

gdjs._32080_31639Code.GDaimObjects2_2final = [];

gdjs._32080_31639Code.GDNewSpriteObjects1= [];
gdjs._32080_31639Code.GDNewSpriteObjects2= [];
gdjs._32080_31639Code.GDNewSpriteObjects3= [];
gdjs._32080_31639Code.GDNewTextObjects1= [];
gdjs._32080_31639Code.GDNewTextObjects2= [];
gdjs._32080_31639Code.GDNewTextObjects3= [];
gdjs._32080_31639Code.GDNewSprite2Objects1= [];
gdjs._32080_31639Code.GDNewSprite2Objects2= [];
gdjs._32080_31639Code.GDNewSprite2Objects3= [];
gdjs._32080_31639Code.GDPlayAgainObjects1= [];
gdjs._32080_31639Code.GDPlayAgainObjects2= [];
gdjs._32080_31639Code.GDPlayAgainObjects3= [];
gdjs._32080_31639Code.GDBackObjects1= [];
gdjs._32080_31639Code.GDBackObjects2= [];
gdjs._32080_31639Code.GDBackObjects3= [];
gdjs._32080_31639Code.GDaimObjects1= [];
gdjs._32080_31639Code.GDaimObjects2= [];
gdjs._32080_31639Code.GDaimObjects3= [];


gdjs._32080_31639Code.mapOfGDgdjs_9546_959532080_959531639Code_9546GDPlayAgainObjects3Objects = Hashtable.newFrom({"PlayAgain": gdjs._32080_31639Code.GDPlayAgainObjects3});
gdjs._32080_31639Code.mapOfGDgdjs_9546_959532080_959531639Code_9546GDaimObjects3Objects = Hashtable.newFrom({"aim": gdjs._32080_31639Code.GDaimObjects3});
gdjs._32080_31639Code.eventsList0 = function(runtimeScene) {

{

gdjs._32080_31639Code.GDPlayAgainObjects1.length = 0;

gdjs._32080_31639Code.GDaimObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs._32080_31639Code.GDPlayAgainObjects1_1final.length = 0;
gdjs._32080_31639Code.GDaimObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("PlayAgain"), gdjs._32080_31639Code.GDPlayAgainObjects2);
for (var i = 0, k = 0, l = gdjs._32080_31639Code.GDPlayAgainObjects2.length;i<l;++i) {
    if ( gdjs._32080_31639Code.GDPlayAgainObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs._32080_31639Code.GDPlayAgainObjects2[k] = gdjs._32080_31639Code.GDPlayAgainObjects2[i];
        ++k;
    }
}
gdjs._32080_31639Code.GDPlayAgainObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs._32080_31639Code.GDPlayAgainObjects2.length; j < jLen ; ++j) {
        if ( gdjs._32080_31639Code.GDPlayAgainObjects1_1final.indexOf(gdjs._32080_31639Code.GDPlayAgainObjects2[j]) === -1 )
            gdjs._32080_31639Code.GDPlayAgainObjects1_1final.push(gdjs._32080_31639Code.GDPlayAgainObjects2[j]);
    }
}
}
{
gdjs._32080_31639Code.GDPlayAgainObjects2.length = 0;

gdjs._32080_31639Code.GDaimObjects2.length = 0;

{gdjs._32080_31639Code.GDPlayAgainObjects2_2final.length = 0;
gdjs._32080_31639Code.GDaimObjects2_2final.length = 0;
let isConditionTrue_2 = false;
isConditionTrue_1 = false;
{
gdjs.copyArray(runtimeScene.getObjects("PlayAgain"), gdjs._32080_31639Code.GDPlayAgainObjects3);
gdjs.copyArray(runtimeScene.getObjects("aim"), gdjs._32080_31639Code.GDaimObjects3);
isConditionTrue_2 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._32080_31639Code.mapOfGDgdjs_9546_959532080_959531639Code_9546GDPlayAgainObjects3Objects, gdjs._32080_31639Code.mapOfGDgdjs_9546_959532080_959531639Code_9546GDaimObjects3Objects, false, runtimeScene, false);
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
    for (let j = 0, jLen = gdjs._32080_31639Code.GDPlayAgainObjects3.length; j < jLen ; ++j) {
        if ( gdjs._32080_31639Code.GDPlayAgainObjects2_2final.indexOf(gdjs._32080_31639Code.GDPlayAgainObjects3[j]) === -1 )
            gdjs._32080_31639Code.GDPlayAgainObjects2_2final.push(gdjs._32080_31639Code.GDPlayAgainObjects3[j]);
    }
    for (let j = 0, jLen = gdjs._32080_31639Code.GDaimObjects3.length; j < jLen ; ++j) {
        if ( gdjs._32080_31639Code.GDaimObjects2_2final.indexOf(gdjs._32080_31639Code.GDaimObjects3[j]) === -1 )
            gdjs._32080_31639Code.GDaimObjects2_2final.push(gdjs._32080_31639Code.GDaimObjects3[j]);
    }
}
}
{
isConditionTrue_2 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "A", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
}
}
{
gdjs.copyArray(gdjs._32080_31639Code.GDPlayAgainObjects2_2final, gdjs._32080_31639Code.GDPlayAgainObjects2);
gdjs.copyArray(gdjs._32080_31639Code.GDaimObjects2_2final, gdjs._32080_31639Code.GDaimObjects2);
}
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs._32080_31639Code.GDPlayAgainObjects2.length; j < jLen ; ++j) {
        if ( gdjs._32080_31639Code.GDPlayAgainObjects1_1final.indexOf(gdjs._32080_31639Code.GDPlayAgainObjects2[j]) === -1 )
            gdjs._32080_31639Code.GDPlayAgainObjects1_1final.push(gdjs._32080_31639Code.GDPlayAgainObjects2[j]);
    }
    for (let j = 0, jLen = gdjs._32080_31639Code.GDaimObjects2.length; j < jLen ; ++j) {
        if ( gdjs._32080_31639Code.GDaimObjects1_1final.indexOf(gdjs._32080_31639Code.GDaimObjects2[j]) === -1 )
            gdjs._32080_31639Code.GDaimObjects1_1final.push(gdjs._32080_31639Code.GDaimObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs._32080_31639Code.GDPlayAgainObjects1_1final, gdjs._32080_31639Code.GDPlayAgainObjects1);
gdjs.copyArray(gdjs._32080_31639Code.GDaimObjects1_1final, gdjs._32080_31639Code.GDaimObjects1);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "游戲内容", false);
}{gdjs.evtsExt__Gamepads__A_Vibrate_controller.func(runtimeScene, 1, 0.5, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{

gdjs._32080_31639Code.GDBackObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs._32080_31639Code.GDBackObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs._32080_31639Code.GDBackObjects2);
for (var i = 0, k = 0, l = gdjs._32080_31639Code.GDBackObjects2.length;i<l;++i) {
    if ( gdjs._32080_31639Code.GDBackObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs._32080_31639Code.GDBackObjects2[k] = gdjs._32080_31639Code.GDBackObjects2[i];
        ++k;
    }
}
gdjs._32080_31639Code.GDBackObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs._32080_31639Code.GDBackObjects2.length; j < jLen ; ++j) {
        if ( gdjs._32080_31639Code.GDBackObjects1_1final.indexOf(gdjs._32080_31639Code.GDBackObjects2[j]) === -1 )
            gdjs._32080_31639Code.GDBackObjects1_1final.push(gdjs._32080_31639Code.GDBackObjects2[j]);
    }
}
}
{
{let isConditionTrue_2 = false;
isConditionTrue_1 = false;
{
isConditionTrue_2 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "B", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
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
gdjs.copyArray(gdjs._32080_31639Code.GDBackObjects1_1final, gdjs._32080_31639Code.GDBackObjects1);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "封面", false);
}{gdjs.evtsExt__BackButton__doDefault.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};

gdjs._32080_31639Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._32080_31639Code.GDNewSpriteObjects1.length = 0;
gdjs._32080_31639Code.GDNewSpriteObjects2.length = 0;
gdjs._32080_31639Code.GDNewSpriteObjects3.length = 0;
gdjs._32080_31639Code.GDNewTextObjects1.length = 0;
gdjs._32080_31639Code.GDNewTextObjects2.length = 0;
gdjs._32080_31639Code.GDNewTextObjects3.length = 0;
gdjs._32080_31639Code.GDNewSprite2Objects1.length = 0;
gdjs._32080_31639Code.GDNewSprite2Objects2.length = 0;
gdjs._32080_31639Code.GDNewSprite2Objects3.length = 0;
gdjs._32080_31639Code.GDPlayAgainObjects1.length = 0;
gdjs._32080_31639Code.GDPlayAgainObjects2.length = 0;
gdjs._32080_31639Code.GDPlayAgainObjects3.length = 0;
gdjs._32080_31639Code.GDBackObjects1.length = 0;
gdjs._32080_31639Code.GDBackObjects2.length = 0;
gdjs._32080_31639Code.GDBackObjects3.length = 0;
gdjs._32080_31639Code.GDaimObjects1.length = 0;
gdjs._32080_31639Code.GDaimObjects2.length = 0;
gdjs._32080_31639Code.GDaimObjects3.length = 0;

gdjs._32080_31639Code.eventsList0(runtimeScene);
gdjs._32080_31639Code.GDNewSpriteObjects1.length = 0;
gdjs._32080_31639Code.GDNewSpriteObjects2.length = 0;
gdjs._32080_31639Code.GDNewSpriteObjects3.length = 0;
gdjs._32080_31639Code.GDNewTextObjects1.length = 0;
gdjs._32080_31639Code.GDNewTextObjects2.length = 0;
gdjs._32080_31639Code.GDNewTextObjects3.length = 0;
gdjs._32080_31639Code.GDNewSprite2Objects1.length = 0;
gdjs._32080_31639Code.GDNewSprite2Objects2.length = 0;
gdjs._32080_31639Code.GDNewSprite2Objects3.length = 0;
gdjs._32080_31639Code.GDPlayAgainObjects1.length = 0;
gdjs._32080_31639Code.GDPlayAgainObjects2.length = 0;
gdjs._32080_31639Code.GDPlayAgainObjects3.length = 0;
gdjs._32080_31639Code.GDBackObjects1.length = 0;
gdjs._32080_31639Code.GDBackObjects2.length = 0;
gdjs._32080_31639Code.GDBackObjects3.length = 0;
gdjs._32080_31639Code.GDaimObjects1.length = 0;
gdjs._32080_31639Code.GDaimObjects2.length = 0;
gdjs._32080_31639Code.GDaimObjects3.length = 0;


return;

}

gdjs['_32080_31639Code'] = gdjs._32080_31639Code;
