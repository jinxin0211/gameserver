gdjs._25945_23416Code = {};
gdjs._25945_23416Code.localVariables = [];
gdjs._25945_23416Code.GDYellowJellyButtonObjects1_1final = [];

gdjs._25945_23416Code.GD_9525945_9523416Objects1= [];
gdjs._25945_23416Code.GD_9525945_9523416Objects2= [];
gdjs._25945_23416Code.GD_9525945_9523416Objects3= [];
gdjs._25945_23416Code.GDNewButtonObjects1= [];
gdjs._25945_23416Code.GDNewButtonObjects2= [];
gdjs._25945_23416Code.GDNewButtonObjects3= [];
gdjs._25945_23416Code.GDYellowJellyButtonObjects1= [];
gdjs._25945_23416Code.GDYellowJellyButtonObjects2= [];
gdjs._25945_23416Code.GDYellowJellyButtonObjects3= [];


gdjs._25945_23416Code.eventsList0 = function(runtimeScene) {

{

gdjs._25945_23416Code.GDYellowJellyButtonObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs._25945_23416Code.GDYellowJellyButtonObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("YellowJellyButton"), gdjs._25945_23416Code.GDYellowJellyButtonObjects2);
for (var i = 0, k = 0, l = gdjs._25945_23416Code.GDYellowJellyButtonObjects2.length;i<l;++i) {
    if ( gdjs._25945_23416Code.GDYellowJellyButtonObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs._25945_23416Code.GDYellowJellyButtonObjects2[k] = gdjs._25945_23416Code.GDYellowJellyButtonObjects2[i];
        ++k;
    }
}
gdjs._25945_23416Code.GDYellowJellyButtonObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs._25945_23416Code.GDYellowJellyButtonObjects2.length; j < jLen ; ++j) {
        if ( gdjs._25945_23416Code.GDYellowJellyButtonObjects1_1final.indexOf(gdjs._25945_23416Code.GDYellowJellyButtonObjects2[j]) === -1 )
            gdjs._25945_23416Code.GDYellowJellyButtonObjects1_1final.push(gdjs._25945_23416Code.GDYellowJellyButtonObjects2[j]);
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
gdjs.copyArray(gdjs._25945_23416Code.GDYellowJellyButtonObjects1_1final, gdjs._25945_23416Code.GDYellowJellyButtonObjects1);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "封面", false);
}{gdjs.evtsExt__BackButton__doDefault.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};

gdjs._25945_23416Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._25945_23416Code.GD_9525945_9523416Objects1.length = 0;
gdjs._25945_23416Code.GD_9525945_9523416Objects2.length = 0;
gdjs._25945_23416Code.GD_9525945_9523416Objects3.length = 0;
gdjs._25945_23416Code.GDNewButtonObjects1.length = 0;
gdjs._25945_23416Code.GDNewButtonObjects2.length = 0;
gdjs._25945_23416Code.GDNewButtonObjects3.length = 0;
gdjs._25945_23416Code.GDYellowJellyButtonObjects1.length = 0;
gdjs._25945_23416Code.GDYellowJellyButtonObjects2.length = 0;
gdjs._25945_23416Code.GDYellowJellyButtonObjects3.length = 0;

gdjs._25945_23416Code.eventsList0(runtimeScene);
gdjs._25945_23416Code.GD_9525945_9523416Objects1.length = 0;
gdjs._25945_23416Code.GD_9525945_9523416Objects2.length = 0;
gdjs._25945_23416Code.GD_9525945_9523416Objects3.length = 0;
gdjs._25945_23416Code.GDNewButtonObjects1.length = 0;
gdjs._25945_23416Code.GDNewButtonObjects2.length = 0;
gdjs._25945_23416Code.GDNewButtonObjects3.length = 0;
gdjs._25945_23416Code.GDYellowJellyButtonObjects1.length = 0;
gdjs._25945_23416Code.GDYellowJellyButtonObjects2.length = 0;
gdjs._25945_23416Code.GDYellowJellyButtonObjects3.length = 0;


return;

}

gdjs['_25945_23416Code'] = gdjs._25945_23416Code;
