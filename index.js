import {getAnimation,PIXI_LOADER,createSprite} from '../../loader';
import {Application, Container, Graphics, Sprite,Texture, ParticleContainer} from 'pixi.js';
import {getParameter,AnimationFrame} from '../../fps'
const answer = new AnswerInfo();
export const createApp =() =>{
    return new Application({
        width: 1920,
        height: 1080,
        autoSize: true,
        transparent: true ,//背景是否设为透明
        autoStart:false
    })
}
window.app = createApp();
app.view.style.width = '19.2rem';
app.view.style.height = '10.8rem';
const stage = app.stage;
document.getElementsByClassName('container')[0].appendChild(app.view);
stage.interactive = true;
 //开启ticker
 let gl_fps = getParameter('gl_fps') || 25;
 console.log("%c"+"fps:"+gl_fps, "color:deeppink;font-size:24px");
 let animationFrame = new AnimationFrame(gl_fps, function () {
     app.render(app.stage);
 });
 animationFrame.start();
 //重写暂停方法
 app.stop = function () {
     animationFrame.stop();
 };
PIXI_LOADER().then(res => {
    console.log("%c资源加载完成", "color:#FF323B;font-weight:bold;");

    // 调用端loading接口，重要勿删
    answer.loading();
    /*
    * 在这code相应的业务逻辑吧
    * 示例背景
    */
    let GAME_BG = createSprite('image_bg');
    stage.addChild(GAME_BG);
})