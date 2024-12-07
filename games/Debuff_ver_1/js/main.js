'use strict';
{ 
  // loading処理
  //#region loading
const preImages=[
  "img/atariHantei.png",
  "img/back00.png",
  "img/back01.png",
  "img/back02.png",
  "img/back02a.png",
  "img/back03.png",
  "img/back04.png",
  "img/back05.png",
  "img/blackOut.png",
  "img/charm.png",
  "img/charm00.png",
  "img/charm01.png",
  "img/charm02.png",
  "img/charm03.png",
  "img/charm04.png",
  "img/charm05.png",
  "img/charm06.png",
  "img/charm07.png",
  "img/charm08.png",
  "img/charm09.png",
  "img/charm10.png",
  "img/charm11.png",
  "img/charm12.png",
  "img/charm13.png",
  "img/charm14.png",
  "img/charm15.png",
  "img/charm16.png",
  "img/charm17.png",
  "img/clickNext.png",
  "img/face00.png",
  "img/face01.png",
  "img/face02.png",
  "img/face03.png",
  "img/face04.png",
  "img/face05.png",
  "img/face06.png",
  "img/face07.png",
  "img/face08.png",
  "img/face09.png",
  "img/face10.png",
  "img/face11.png",
  "img/faceY00.png",
  "img/kemoshota00.png",
  "img/poison.png",
  "img/poison00.png",
  "img/poison00a.png",
  "img/poison01.png",
  "img/poison01a.png",
  "img/poison02.png",
  "img/poison03.png",
  "img/poison04.png",
  "img/reset.png",
  "img/sleep.png",
  "img/sleep00.png",
  "img/sleepC00.png",
  "img/sleepC01.png",
  "img/sleepC02.png",
  "img/sleepC03.png",
  "img/sleepC04.png",
  "img/sleepC05.png",
  "img/sleepCEnd00.png",
  "img/sleepCEnd01.png",
  "img/sleepCEnd02.png",
  "img/sleepCEnd03.png",
  "img/sleepCEnd04.png",
  "img/sleepCEnd05.png",
  "img/sleepCEnd06.png",
  "img/sleepCEnd07.png",
  "img/sleepCEnd08.png",
  "img/sleepCEnd09.png",
  "img/sleepCEnd10.png",
  "img/sleepCEnd11.png",
  "img/sleepCEnd11a.png",
  "img/sleepP00.png",
  "img/sleepP01.png",
  "img/sleepP02.png",
  "img/sleepPEnd00.png",
  "img/sleepPEnd01.png",
  "img/sleepPEnd02.png",
  "img/sleepPEnd03.png",
  "img/status00.png",
  "img/stone.png",
  "img/stone00.png",
  "img/stone01.png",
  "img/stone02.png",
  "img/stone03.png",
  "img/stone04.png",
  "img/stone05.png",
  "img/stone06.png",
  "img/stone07.png",
  "img/stone08.png",
  "img/stone09.png",
  "img/stoneC00.png",
  "img/stoneC01.png",
  "img/stoneC02.png",
  "img/stoneC03.png",
  "img/stoneC04.png",
  "img/stoneC05.png",
  "img/stoneC06.png",
  "img/stoneC07.png",
  "img/stoneC08.png",
  "img/stoneC09.png",
  "img/stoneC10.png",
  "img/stoneC11.png",
  "img/stoneC12.png",
  "img/stoneC12a.png",
]

  const prepare=document.getElementById("prepare");
  const preImage =document.getElementById("preImage");
  const load =document.getElementById("load");
  let imageIndex=0;
  preImage.src=preImages[imageIndex];
  
  preImage.addEventListener('load',()=>{if(imageIndex< preImages.length-1){imageIndex++;
    preImage.src = preImages[imageIndex];
    load.textContent=`加载资源(${imageIndex+1}/${preImages.length})`; 
    if(imageIndex===preImages.length-1){
      load.textContent="点击启动"
      load.classList.add("active");
      prepare.style.pointerEvents="auto"
      prepare.addEventListener("click",()=>{
        load.style.display="none"
        prepare.style.opacity="0";
        prepare.style.userSelect="none";
        prepare.style.pointerEvents="none"
        let i=0
        function ClickEvent(){
        nextMouse.style.opacity="0";
        const textbox1=[
        ["欢迎来到小狗玩偶剧院！","あり"],
        ["今天的节目是《初出茅庐的英雄的Debuff庆典！》享受吧！","あり"],
        ["(通过拖放即可施展b魔法！)","なし"],
      ];
        
        clickToNext.style.pointerEvents="none"
        textOrder(textbox1[i][0],textbox1[i][1])
        i++
        if(i===3){face.src="img/face09.png"        
        clickToNext.style.display="none"
        setTimeout(()=>{
        clickToNext.removeEventListener('click',ClickEvent) },1500)  
        }
          
        }
        setTimeout(() => {textOrder("嘿！b你就是传闻中的勇者君？","あり");
        clickToNext.addEventListener('click',ClickEvent);
        }, 1000)
        // 上の1000秒はメッセージスピードによって変えるべき
      })
      
    }   
  }


})
//#endregion


//背景の定義
  const back02=document.getElementById("back02");
  const back03=document.getElementById("back03");


//オーディオを定義
//#region audio
  const voice1 = document.getElementById("voice1");
  voice1.volume =0.01
  const voice2 = document.getElementById("voice2");
  voice2.volume =0.01
  const poisonSound = document.getElementById("poisonSound");
  poisonSound.volume =0.01
  const sleepSound = document.getElementById("sleepSound");
  sleepSound.volume =0.01
  const stoneSound = document.getElementById("stoneSound");
  stoneSound.volume =0.01
  const charmSound = document.getElementById("charmSound");
  charmSound.volume =0.01
  const resetSound = document.getElementById("resetSound");
  resetSound.volume =0.01
//#endregion
  
//テキストの処理
  //#region text
  const guard=document.getElementById("guard");
  const guard2=document.getElementById("guard2");

  const clickToNext=document.getElementById("clickToNext");
   const text=document.getElementById("text");
   const nextMouse=document.getElementById("nextMouse") ;
  

   function textOrder(rawText,nextText,specialTime){
      text.innerHTML="";
      let str =`${rawText}`;
      const arr =[...str];
      let i=0;
      let TimeLength
      if(specialTime===1500){TimeLength=1500}else{TimeLength=arr.length*50};
      // ガードが出現
      guard.style.display="block";
      // 続きの文章が無い場合、arr.length秒後、ガードが解除
      // 続きの文章がある場合、クリックイベントを追加
      setTimeout(() => {if(nextText==="あり"){
      clickToNext.style.display="block"
      clickToNext.style.pointerEvents="auto"
      nextMouse.style.opacity="1";
      }else{
        guard.style.display="none";
      }
     }, TimeLength);
    let showText =()=>{
    if(arr[i]!=="b"){text.innerHTML +=`${arr[i]}`};
    if(arr[i]==="b"){text.innerHTML+="<br>"}
    if(i>=arr.length-1){clearInterval(id)}
    i++;
    if(rawText!==" " &&
      rawText!=="…。"&&
      rawText!=="                                                       "&&
      rawText!=="                               "
      )
      {
    voice1.currentTime=0;
    voice1.play()
    }
    
    }
    let id =setInterval(showText,50);
    }

    //#endregion

 // フラッシュの定義
 //#region flash
    const flash=document.getElementById("flash");
    const flash1=document.getElementById("flash1");
    const flash2=document.getElementById("flash2");
    const flash3=document.getElementById("flash3");
    const flash4=document.getElementById("flash4");
    const flash5=document.getElementById("flash5");
    function useSpecialFlash(num,color) {
      flash1.style.backgroundColor=`${color}`
      flash2.style.backgroundColor=`${color}`
      flash3.style.backgroundColor=`${color}`
      flash4.style.backgroundColor=`${color}`
      flash5.style.backgroundColor=`${color}`
      if(num===1){flash1.classList.add("active")}
      if(num===2){flash2.classList.add("active")}
      if(num===3){flash3.classList.add("active")}
      if(num===4){flash4.classList.add("active")}
      if(num===5){flash5.classList.add("active")}
      
    }
    function useFlash(){
      flash.classList.add("active")
      
      setTimeout(()=>{flash.classList.remove("active")},1500)  
     }

     const black=document.getElementById("black");
    function useblack(){
      black.classList.add("active")
      
      setTimeout(()=>{black.classList.remove("active")},4000)  
     }
//#endregion

  // ステータス欄の定義
  //#region status
  const statusBox=document.getElementById("status");
  let poisonNum =0 
  let poisonStatusNum= document.getElementById("poisonNum");
  let sleepNum =0 
  let sleepStatusNum= document.getElementById("sleepNum");
  let stoneNum =0 
  let stoneStatusNum= document.getElementById("stoneNum");
  let charmNum =0 
  let charmStatusNum= document.getElementById("charmNum");
//#endregion

  // 顔グラの定義
  const face=document.getElementById("face");

  //  アイコンの定義
 //#region icon
  const poison_back = document.getElementById("poison_back");
  const poison= document.getElementById("poison");
  const poison_back2= document.getElementById("poison_back2");
  const poison2= document.getElementById("poison2");
  const sleep_back = document.getElementById("sleep_back")
  const sleep= document.getElementById("sleep");
  const stone_back= document.getElementById("stone_back");
  const stone= document.getElementById("stone");
  const charm_back= document.getElementById("charm_back");
  const charm= document.getElementById("charm");
  const charm_back2= document.getElementById("charm_back2");
  const charm2= document.getElementById("charm2");
  const charm_back3= document.getElementById("charm_back3");
  const charm3= document.getElementById("charm3");
  const reset= document.getElementById("reset");
  const reset_back= document.getElementById("reset_back");
  //#endregion

  //毒の処理 
//  #region posion
  {
    
    const images = [
    'img/kemoshota00.png',
    'img/poison00.png',
    'img/poison00a.png',
    'img/poison01.png',
    'img/poison01a.png',
    'img/poison02.png',
    'img/poison03.png',
    'img/poison04.png',
  ];
   // デフォルトのドラッグ機能をオフ
  
   poison_back.ondragstart = e=>{
    return false;
    }

  // マウスダウンでマウスムーブ時に”onMouseMove”を呼び出す
  
  poison_back.onmousedown = e=>{
   if(poisonNum>=4){poison.style.display="none"};
   document.addEventListener("mousemove",onMouseMove);
    }
  
   // clientX,clientYで画面左端、上端からのマウスの位置を取得。
  // offsetWidth,offsetHeightで要素のサイズを取得できる。
  //下の処理で、マウスに画像が追随する。
  const onMouseMove = e=>{
    poison.style.display=null;
    let x = e.clientX;
    let y = e.clientY;
    let width = poison_back.offsetWidth;
    let height = poison_back.offsetHeight;
    poison.style.top = (y-height/2) + "px";
    poison.style.left = (x-width/2) + "px";
    poison.style.opacity = "1"
    if(poisonNum<4){
      poison_back.style.opacity="0.5"
    }   
    }

 

   // 下は、マウスを放したときの処理
   
   poison.onmouseup = e=>{
      document.removeEventListener("mousemove",onMouseMove);
      poison.style.opacity ="0";
      poison_back.style.opacity="1";


      let x = e.clientX;
      let y = e.clientY;
      const kemoshota =document.getElementById("kemoshota")
      const atari =document.getElementById("atariHantei");
      const atariRect =atari.getBoundingClientRect();
     
      if((x>=atariRect.left && x<=(atariRect.left+atariRect.width)) && (y>=atariRect.top && y<=(atariRect.top+atariRect.height))){
      
       poisonSound.currentTime= 0;
       poisonSound.play()     
       useFlash();
       poisonNum++
       kemoshota.src = images[poisonNum];
       poisonStatusNum.textContent=`${poisonNum}`;
            
      if(poisonNum===1){
        reset_back.style.opacity="1"
        reset_back.style.pointerEvents="all"
        sleep_back.style.opacity="0.2"
        sleep_back.style.pointerEvents="none"
        stone_back.style.opacity="0.2"
        stone_back.style.pointerEvents="none"
        charm_back.style.opacity="0.2"
        charm_back.style.pointerEvents="none"
        face.src="img/face00.png";
        textOrder("呵呵呵呵……b毒魔法怎么样？");
      }
      if(poisonNum===2){textOrder("看起来很痛苦。 b 可以投降吗？")}
      if(poisonNum===3){face.src="img/face07.png";
        textOrder("不要立即投降。再这样下去，你真的会死掉吧？")}
      if(poisonNum===4){textOrder("…。")}
      if(poisonNum===5){
        face.src="img/face08.png";
        guard.style.display="block";
        setTimeout(()=>{
         textOrder("啊～啊b真的死掉了……。","あり"); 
        },1000)
        
      face.src="img/face08.png";
        poison_back.style.pointerEvents="none"
        let i=0
        function ClickEvent(){
        nextMouse.style.opacity="0"
        clickToNext.style.pointerEvents="none"
        i++
        if(i===1){
          face.src="img/face00.png";
          kemoshota.src = images[poisonNum+1]
          textOrder("呵呵…b不用那么着急，没关系的。","あり");
          }
        if(i===2){
          textOrder("我会为你准备b最合适的身体！","あり");
          }
        if(i===3){
          text.textContent=" ";
          text.style.left="100px"
          face.style.opacity="0"
          useblack();
          statusBox.style.opacity="0"
          poisonStatusNum.style.opacity="0"
          sleepStatusNum.style.opacity="0"
          stoneStatusNum.style.opacity="0"
          charmStatusNum.style.opacity="0"
          clickToNext.style.display="none"
          setTimeout(()=>{
            incbus="did"
            textOrder("结局1b～转生后变成淫魔的事情～","なし");},3500)  
          setTimeout(()=>{kemoshota.src = images[poisonNum+2]
          clickToNext.removeEventListener('click',ClickEvent)
          
        },1500)  
         } 
        }
        
          
          clickToNext.addEventListener('click',ClickEvent);
       }
      if(poisonNum>=5){
              poison.style.display="none"
        poison_back.style.opacity="0.2"
      }
        poison.style.top="800px"
        poison.style.left="985px"
        poison.style.display="none"
  
      
    
      }else{
      poison.style.display="none";
    
    }
  
  }
}
 
//  #endregion
 
//眠りの処理
 //#region  sleep
 {
   const images = [
  'img/kemoshota00.png',
  'img/sleep00.png',
  'img/sleepP00.png',
  'img/sleepP01.png',
  'img/sleepP02.png',
  'img/sleepPEnd00.png',
  'img/sleepPEnd01.png',
  'img/sleepPEnd02.png',
  'img/sleepPEnd03.png',
];



 // デフォルトのドラッグ機能をオフ
 sleep_back.ondragstart = e=>{
  return false;
  }

// マウスダウンでマウスムーブ時に”onMouseMove”を呼び出す
sleep_back.onmousedown = e=>{
 if(sleepNum>=1){sleep.style.display="none"};
 document.addEventListener("mousemove",onMouseMove);
  }

 // clientX,clientYで画面左端、上端からのマウスの位置を取得。
// offsetWidth,offsetHeightで要素のサイズを取得できる。
//下の処理で、マウスに画像が追随する。
const onMouseMove = e=>{
  sleep.style.display=null;
  let x = e.clientX;
  let y = e.clientY;
  let width = sleep_back.offsetWidth;
  let height = sleep_back.offsetHeight;
  sleep.style.top = (y-height/2) + "px";
  sleep.style.left = (x-width/2) + "px";
  sleep.style.opacity = "1"
  if(sleepNum<1){
    sleep_back.style.opacity="0.5"
  }   
  }



 // 下は、マウスを放したときの処理
 
 sleep.onmouseup = e=>{
    document.removeEventListener("mousemove",onMouseMove);
    sleep.style.opacity ="0";
    sleep_back.style.opacity="1";


    let x = e.clientX;
    let y = e.clientY;
    const kemoshota =document.getElementById("kemoshota")
    const atari =document.getElementById("atariHantei");
    const atariRect =atari.getBoundingClientRect();
   
    if((x>=atariRect.left && x<=(atariRect.left+atariRect.width)) && (y>=atariRect.top && y<=(atariRect.top+atariRect.height))){
    
     sleepSound.currentTime= 0;
     sleepSound.play() ;
     flash.style.backgroundColor="aqua" ;
     useFlash();
     sleepNum++
     kemoshota.src = images[sleepNum];
     sleepStatusNum.textContent=`${sleepNum}`;
    
    if(sleepNum===1){
      reset_back.style.opacity="1"
      reset_back.style.pointerEvents="all"
      stone_back.style.opacity="0.2"
      stone_back.style.pointerEvents="none"
      face.src="img/face00.png";
      back02.src="img/back03.png";
      textOrder("喂喂~，勇者君~？呵呵……毫无防备的睡脸也很可爱呢。")
      }
      sleep.style.top="800px"
      sleep.style.left="985px"
      
      sleep.style.display="none"
      sleep_back.style.opacity="0.2"
      sleep_back.style.pointerEvents="none"
      poison.style.display="none";
      poison_back.style.display="none";
      poison2.style.display="none";
      poison_back2.style.display="block";
      charm.style.display="none";
      charm_back.style.display="none";
      charm2.style.display="none";
      charm_back2.style.display="block";

    }else{
      sleep.style.display="none";
    }
      
    }
  }
//#endregion

//眠り毒の処理
 //#region  sleep&poison
 {
  const images = [
 'img/kemoshota00.png',
 'img/sleep00.png',
 'img/sleepP00.png',
 'img/sleepP01.png',
 'img/sleepP02.png',
 'img/sleepPEnd00.png',
 'img/sleepPEnd01.png',
 'img/sleepPEnd02.png',
 'img/sleepPEnd03.png',
];



// デフォルトのドラッグ機能をオフ
poison_back2.ondragstart = e=>{
 return false;
 }

// マウスダウンでマウスムーブ時に”onMouseMove”を呼び出す
poison_back2.onmousedown = e=>{
if(poisonNum>=3){poison2.style.display="none"};
document.addEventListener("mousemove",onMouseMove);
 }

// clientX,clientYで画面左端、上端からのマウスの位置を取得。
// offsetWidth,offsetHeightで要素のサイズを取得できる。
//下の処理で、マウスに画像が追随する。
const onMouseMove = e=>{
 poison2.style.display="block";
 let x = e.clientX;
 let y = e.clientY;
 let width = poison_back2.offsetWidth;
 let height = poison_back2.offsetHeight;
 poison2.style.top = (y-height/2) + "px";
 poison2.style.left = (x-width/2) + "px";
 poison2.style.display = "block"
 poison2.style.opacity ="1"
 if(poisonNum<3){
   poison_back2.style.opacity="0.5"
 }   
 }



// 下は、マウスを放したときの処理

poison2.onmouseup = e=>{
   document.removeEventListener("mousemove",onMouseMove);
   
   poison_back2.style.opacity="1";


   let x = e.clientX;
   let y = e.clientY;
   const kemoshota =document.getElementById("kemoshota")
   const atari =document.getElementById("atariHantei");
   const atariRect =atari.getBoundingClientRect();
  
   if((x>=atariRect.left && x<=(atariRect.left+atariRect.width)) && (y>=atariRect.top && y<=(atariRect.top+atariRect.height))){
    poison2.style.display ="none"
    poisonSound.currentTime= 0;
    poisonSound.play() ;
    flash.style.backgroundColor="green" ;
    useFlash();
    poisonNum++
    kemoshota.src = images[poisonNum+1];
    poisonStatusNum.textContent=`${poisonNum}`;
   
   if(poisonNum===1){
        charm_back2.style.opacity="0.2"
        charm_back2.style.pointerEvents="none"
     face.src="img/face00.png";
     textOrder("呵呵...b 我会给你看一场噩梦的。")};
    if(poisonNum===2){
      textOrder("快，快！再不快点醒过来，你就死定了！")
    };
    if(poisonNum===3){
      
      face.src="img/face07.png";
      textOrder("嗯～，让你死掉也有点，太可惜了……","あり");
      let i=0
        function ClickEvent(){
        nextMouse.style.opacity="0";
        const textbox1=[
          ["对了…你真可爱，b既然如此，我就把你加到我的收藏里吧。", "あり"], // 1
          ["那么，在你睡着的时候，我就来修补一下吧。", "あり"], // 2
          ["                                                       ", "あり"], // 3
          ["嗯～", "あり"], // 4
          ["哎呀，醒了啊…。", "あり"], // 5
          ["早上好，勇者君。b感觉怎么样？", "あり"], // 6
          ["这是什么啊！？", "あり"], // 7
          ["还给我！b还给我啊！", "あり"], // 8
          ["可以啊…。b", "あり"], // 9
          ["真的要还给你吗？", "あり"], // 10
          ["啊，啊…啊……。", "あり"], // 11
          ["呵呵…b很快就好了，b乖乖的等着吧。", "あり"], // 12
          ["                               ", "あり"], // 13
          ["好了，做好了。", "あり"], // 14
          ["呵呵呵…b真可爱，勇者君。", "あり"], // 15
          ["软绵绵的，而且还特别香…b正好可以做抱枕呢。", "あり"], // 16
          ["呵呵…摸摸下体时，b轻微地颤抖了呢…", "あり"], // 17
          ["别担心。b即使你不再是勇者，b我也会一直爱你很多。", "あり"], // 18
          ["从今以后，我们每天一起睡吧。", "あり"], // 19
          [" ", ""]
      ]
      ;
        
        clickToNext.style.pointerEvents="none"
        textOrder(textbox1[i][0],textbox1[i][1])
        i++
        if(i===1){face.src="img/face00.png"};
        if(i===2){};
        if(i===3){
        face.style.opacity="0";
        black.classList.add("active2")
        statusBox.style.opacity="0"
        poisonStatusNum.style.opacity="0"
        sleepStatusNum.style.opacity="0"
        stoneStatusNum.style.opacity="0"
        charmStatusNum.style.opacity="0"
        };
        if(i===4){
        text.style.left="100px"
        text.style.color="yellow";
        poisonNum++
        kemoshota.src = images[poisonNum+1];
        };
        if(i===5){
          text.style.color="white"
        };
        if(i===6){
        text.style.left= null;
        black.classList.add("active3");
        face.style.opacity="1";
        }
        if(i===7){
          face.style.opacity="0"
        text.style.left="100px"
        text.style.color="yellow"};
        
        if(i===9){
          face.src="img/face07.png";
          face.style.opacity="1"
          text.style.left=null;
          text.style.color="white"};
        if(i===10){
          face.src="img/face08.png";
          }

        if(i===11){
          face.style.opacity="0"
          text.style.left="100px"
        text.style.color="yellow";
        poisonNum++
        kemoshota.src = images[poisonNum+1];
        }
        if(i===12){
          face.src="img/face00.png";
          face.style.opacity="1"
          text.style.left=null;
          text.style.color="white"};
        if(i===13){
        black.classList.remove("active2");
        black.classList.remove("active3");
        setTimeout(() => {
        black.classList.add("active4")       
        }, 100);
        setTimeout(() => {poisonNum++
          kemoshota.src = images[poisonNum+1];          
        }, 1000);
        }
        if(i===14){console.log(i)}
        if(i===15){console.log(i)}
        if(i===16){console.log(i)}
        if(i===17){
          face.src="img/face02.png";
          poisonNum++
          kemoshota.src = images[poisonNum+1];            
        }
        if(i===18){
          guard2.style.display="block"
          face.src="img/face00.png";
        }
        if(i===20){
          
          black.classList.remove("active4") ;
          black.classList.add("active2");
          text.style.left="100px"
          face.style.opacity="0"
          
          setTimeout(()=>{
            nuigurumi="did";
            
            guard2.style.display="none";
            textOrder("结局2b～人偶使者的最爱～","なし");},2000)        
            clickToNext.style.display="none"
        setTimeout(()=>{clickToNext.removeEventListener("click",ClickEvent);
         },2000)  
        }
       };
        clickToNext.addEventListener('click',ClickEvent);
        
      poison2.style.top="800px"
      poison2.style.left="985px"
        
     poison2.style.display="none"
     poison_back2.style.opacity="0.2"
     poison_back2.style.pointerEvents="none"
     
     

   }
   }else{
     poison2.style.display="none";
     
   }
 }}
//#endregion

//眠り魅了の処理
 //#region  sleep&poison
 {
  const images = [
 'img/kemoshota00.png',
 'img/sleep00.png',
 'img/sleepC00.png',
 'img/sleepC01.png',
 'img/sleepC02.png',
 'img/sleepC02.png',
 'img/sleepC03.png',
 'img/sleepC04.png',
 'img/sleepC05.png',
 'img/sleepCEnd00.png',
 'img/sleepCEnd01.png',
 'img/sleepCEnd02.png',
 'img/sleepCEnd03.png',
 'img/sleepCEnd04.png',
 'img/sleepCEnd05.png',
 'img/sleepCEnd06.png',
 'img/sleepCEnd07.png',
 'img/sleepCEnd08.png',
 'img/sleepCEnd09.png',
 'img/sleepCEnd10.png',
 'img/sleepCEnd11a.png',
 'img/sleepCEnd11.png',
];



// デフォルトのドラッグ機能をオフ
charm_back2.ondragstart = e=>{
 return false;
 }

// マウスダウンでマウスムーブ時に”onMouseMove”を呼び出す
charm_back2.onmousedown = e=>{
if(charmNum>=3){charm2.style.display="none"};
document.addEventListener("mousemove",onMouseMove);
 }

// clientX,clientYで画面左端、上端からのマウスの位置を取得。
// offsetWidth,offsetHeightで要素のサイズを取得できる。
//下の処理で、マウスに画像が追随する。
const onMouseMove = e=>{
 charm2.style.display="block";
 let x = e.clientX;
 let y = e.clientY;
 let width = charm_back2.offsetWidth;
 let height = charm_back2.offsetHeight;
 charm2.style.top = (y-height/2) + "px";
 charm2.style.left = (x-width/2) + "px";
 charm2.style.display = "block"
 charm2.style.opacity ="1"
 if(charmNum<3){
   charm_back2.style.opacity="0.5"
 }   
 }



// 下は、マウスを放したときの処理

charm2.onmouseup = e=>{
   document.removeEventListener("mousemove",onMouseMove);
   
   charm_back2.style.opacity="1";


   let x = e.clientX;
   let y = e.clientY;
   const kemoshota =document.getElementById("kemoshota")
   const atari =document.getElementById("atariHantei");
   const atariRect =atari.getBoundingClientRect();
  
   if((x>=atariRect.left && x<=(atariRect.left+atariRect.width)) && (y>=atariRect.top && y<=(atariRect.top+atariRect.height))){
    charm2.style.display ="none"
    charmSound.currentTime= 0;
    charmSound.play() ;
    flash.style.backgroundColor="fuchsia" ;
    useFlash();
    charmNum++
    kemoshota.src = images[charmNum+1];
    charmStatusNum.textContent=`${charmNum}`;
   
   if(charmNum===1){
      poison_back2.style.opacity="0.2"
      poison_back2.style.pointerEvents="none"
        
     face.src="img/face00.png";
     textOrder("我会给你一个美梦作为礼物！")};
    if(charmNum===2){
      textOrder("好吧，好吧……看起来魔法正在发挥作用。")
    };
    if(charmNum===3){
      textOrder("怎么样，勇者君？b快要来了？b快要高潮了吗？","");}
    if(charmNum===4){
        guard2.style.display="block"
        charm_back2.style.opacity="0.2"
        charm_back2.style.pointerEvents="none"
      
      setTimeout(() => {
        charmNum++
        kemoshota.src = images[charmNum+1];
      face.src="img/face06.png";
      text.textContent="~♪"
        useSpecialFlash(1,"white");
        poisonSound.currentTime= 0;
        poisonSound.play()    
      }, 1200*1);
      setTimeout(() => {
        useSpecialFlash(2,"white");
        poisonSound.currentTime= 0;
        poisonSound.play()    
      }, 1200*2);
      setTimeout(() => {
        useSpecialFlash(3,"white");
        poisonSound.currentTime= 0;
        poisonSound.play()    
      charmNum++
        kemoshota.src = images[charmNum+1];
      }, 1200*3);
      setTimeout(() => {
        
        face.src="img/face00.png"
        textOrder("啊～啊，裤子和内裤b都湿透了呢。","あり");
      
      
        let i=0
        function ClickEvent(){
        nextMouse.style.opacity="0";
        
        clickToNext.style.pointerEvents="none"
        i++
        if(i===1){
          charmNum++
          kemoshota.src = images[charmNum+1];
          textOrder("哇…好大的量……。","あり");
        };
        if(i===2){textOrder("既然这样，那我就把b这些有效利用一下。","あり");;}
        if(i===3){
          textOrder("将勇者君的精子和b魔物的卵混合在一起……","あり");
        face.src="img/face05.png";
        black.classList.add("active2")
        statusBox.style.opacity="0"
        poisonStatusNum.style.opacity="0"
        sleepStatusNum.style.opacity="0"
        stoneStatusNum.style.opacity="0"
        charmStatusNum.style.opacity="0"
        };
        if(i===4){
          textOrder("呵呵…我是不是天才。","あり");
          face.src="img/face04.png";
        
        };
        if(i===5){
        text.style.opacity="0"
        face.style.opacity="0"
        charmNum++
        kemoshota.src = images[charmNum+1];
        setTimeout(() => {
              text.style.opacity="1"
              face.style.opacity="1"
              face.src="img/face00.png";
              textOrder("早上好，勇者君b，感觉怎么样？","あり");;
              black.classList.add("active3");
          }, 1000);
        
        };
        if(i===6){
          charmNum++
          kemoshota.src=images[charmNum+1]
          face.style.opacity="0"
          text.style.color="yellow";
          text.style.left="100px";
          textOrder("呜呜呜……。","あり");;
        }
        if(i===7){
          charmNum++
          kemoshota.src=images[charmNum+1]
          textOrder("！？","あり");;         
        }
        if(i===8){
          charmNum++
          kemoshota.src=images[charmNum+1]
          textOrder("这是什么？b放开！b我的衣服呢！？","あり");;         
        }
        if(i===9){
          face.style.opacity="1"
          text.style.left=null;
          text.style.color="white"
          textOrder("因为碍事所以处理掉了。b你没发现身体上的异变吗？","あり");
          };
        if(i===10){
          face.style.opacity="0"
          text.style.left="100px";
          text.style.color="yellow"
          charmNum++
          kemoshota.src=images[charmNum+1]
          textOrder("这是什么……。b肚子里有什么东西在动……。","あり");
          }

        if(i===11){
          face.style.opacity="1"
          text.style.left=null;
          text.style.color="white"
          textOrder("在你睡觉时，b我把魔物的卵植入了b你的体内。","あり");;
        }
        if(i===12){
          textOrder("这是吸取宿主魔力而b成长的卵。","あり");
          flash1.classList.remove("active");
          flash2.classList.remove("active");
          flash3.classList.remove("active");
          flash4.classList.remove("active");
          flash5.classList.remove("active");
          };
        if(i===13){
          useSpecialFlash(1,"fuchsia");
          poisonSound.currentTime= 0;
          poisonSound.play()
          charmNum++
          kemoshota.src=images[charmNum+1]
          textOrder("看吧，好像开始了？","あり");;
        }
        if(i===14){
          useSpecialFlash(2,"fuchsia");
          poisonSound.currentTime= 0;
          poisonSound.play()
          charmNum++
          kemoshota.src=images[charmNum+1]

          face.src="img/face01.png";
          textOrder("明白吗？勇者君？","あり");
        
        }
        if(i===15){
          useSpecialFlash(3,"fuchsia");
          poisonSound.currentTime= 0;
          poisonSound.play()
          charmNum++
          kemoshota.src=images[charmNum+1]

          face.src="img/face01.png";
          textOrder("你曾经为了保护人们免受魔物侵害，而b现在你将成为魔物的温床，b孕育出魔物。","あり");
        }

        if(i===16){
          flash1.classList.remove("active");
          flash2.classList.remove("active");
          useSpecialFlash(4,"fuchsia");
          poisonSound.currentTime= 0;
          poisonSound.play()
          charmNum++
          kemoshota.src=images[charmNum+1]
          face.style.opacity="0"
          text.style.color="yellow";
          text.style.left="100px"
          textOrder("呜呜呜……")
         setTimeout(()=>{ 
          flash3.classList.remove("active");
            useSpecialFlash(1,"fuchsia");
            poisonSound.currentTime= 0;
            poisonSound.play()
            charmNum++
            kemoshota.src=images[charmNum+1]

          },1200*1)
          setTimeout(()=>{ 
            useSpecialFlash(2,"fuchsia");
            poisonSound.currentTime= 0;
            poisonSound.play()
            charmNum++
            kemoshota.src=images[charmNum+1]
            textOrder("啊啊…")

          },1200*2)
          setTimeout(()=>{ 
            useSpecialFlash(3,"fuchsia");
            poisonSound.currentTime= 0;
            poisonSound.play()
            charmNum++
            kemoshota.src=images[charmNum+1]
          },1200*3)
          setTimeout(()=>{
            charmNum++
            kemoshota.src=images[charmNum+1]
            face.style.opacity="1";
            text.style.left=null;
            text.style.color="white";
            textOrder("呵呵…辛苦了","あり");;
          },1200*4)

        }
        if(i===17){
          textOrder("勇者和魔物之间，b诞生的孩子……","あり");;
        }
        if(i===18){
          face.src="img/face06.png"
          textOrder("真期待卵孵化的时刻呢。","あり");;
          black.classList.remove("active2");
          black.classList.remove("active3");
        }
        if(i===19){
          text.style.opacity="0"
          face.style.opacity="0"
          text.style.left="100px"
          black.classList.add("active2");
          setTimeout(()=>{
            text.style.opacity="1"
            egg="laid"
            guard2.style.display="none"
            textOrder("结局5b～魔物的温床～","なし");;
            clickToNext.removeEventListener('click',ClickEvent);  

          },2000)
        }

        
        
       };
        
      clickToNext.addEventListener('click',ClickEvent);
      
    
    },1200*4);
    }
    
    charm2.style.top="800px"
    charm2.style.left="985px"
        
    charm2.style.display="none"
     
     

   
   }else{
     charm2.style.display="none";
     
   }
 }}
//#endregion


  //石化の処理 
//  #region posion
{
    
  const images = [
  'img/kemoshota00.png',
  'img/stone00.png',
  'img/stone01.png',
  'img/stone02.png',
  'img/stone03.png',
  'img/stone04.png',
  'img/stone05.png',
  'img/stone06.png',
  'img/stone07.png',
  'img/stone08.png',
  'img/stone09.png',
];
 // デフォルトのドラッグ機能をオフ

 stone_back.ondragstart = e=>{
  return false;
  }

// マウスダウンでマウスムーブ時に”onMouseMove”を呼び出す

stone_back.onmousedown = e=>{
 if(stoneNum>=4){stone.style.display="none"};
 document.addEventListener("mousemove",onMouseMove);
  }

 // clientX,clientYで画面左端、上端からのマウスの位置を取得。
// offsetWidth,offsetHeightで要素のサイズを取得できる。
//下の処理で、マウスに画像が追随する。
const onMouseMove = e=>{
  stone.style.display=null;
  let x = e.clientX;
  let y = e.clientY;
  let width = stone_back.offsetWidth;
  let height = stone_back.offsetHeight;
  stone.style.top = (y-height/2) + "px";
  stone.style.left = (x-width/2) + "px";
  stone.style.opacity = "1"
  if(stoneNum<4){
    stone_back.style.opacity="0.5"
  }   
  }



 // 下は、マウスを放したときの処理
 
 stone.onmouseup = e=>{
    document.removeEventListener("mousemove",onMouseMove);
    stone.style.opacity ="0";
    stone_back.style.opacity="1";


    let x = e.clientX;
    let y = e.clientY;
    const kemoshota =document.getElementById("kemoshota")
    const atari =document.getElementById("atariHantei");
    const atariRect =atari.getBoundingClientRect();
   
    if((x>=atariRect.left && x<=(atariRect.left+atariRect.width)) && (y>=atariRect.top && y<=(atariRect.top+atariRect.height))){
    
     stoneSound.currentTime= 0;
     stoneSound.play()
     flash.style.backgroundColor="silver";
     useFlash();
     stoneNum++
     kemoshota.src = images[stoneNum];
     stoneStatusNum.textContent=`${stoneNum}`;
          
    if(stoneNum===1){
      reset_back.style.opacity="1"
      reset_back.style.pointerEvents="all"
        sleep_back.style.opacity="0.2"
        sleep_back.style.pointerEvents="none"
        poison_back.style.opacity="0.2"
        poison_back.style.pointerEvents="none"
        charm_back.style.opacity="0.2"
        charm_back.style.pointerEvents="none"
      face.src="img/face03.png";
      textOrder("出来吧、モノリス（这里不太会翻译x，或许是“石化君”?）！");}
    if(stoneNum===2){
      back02.src="img/back02.png";
      face.src="img/face00.png";
      textOrder("呵呵…抓住了。","あり");;
      let i=0
      function ClickEvent(){
      nextMouse.style.opacity="0"
      clickToNext.style.pointerEvents="none"
      i++
      if(i===1){
        textOrder("嘿，勇者君b，感到兴奋了吗？","あり");;
        }
      if(i===2){
        textOrder("我会把你变成b最棒的艺术品！","なし");;
        }}
        clickToNext.addEventListener('click',ClickEvent);
        charm3.style.display="none"
        charm2.style.display="none"    
        charm.style.display="none"
        charm_back3.style.display="block"   
        charm_back2.style.display="none"   
        charm_back.style.display="none"   
      }
    if(stoneNum===3){textOrder("石鬼面……b不，狐妖石像怎么样？")
      charm_back3.style.opacity="0.2";
      charm_back3.style.pointerEvents="none";
    }
    if(stoneNum===4){textOrder("你明白吗？你将成为守护我的城堡的B石头怪物。")}
    if(stoneNum===5){textOrder("你看，你看，变化越来越大吧？")}
    if(stoneNum===6){textOrder("呵呵…b已经一动不动了呢。","あり");;
      stone_back.style.pointerEvents="none"
      let i=0
      function ClickEvent(){
      nextMouse.style.opacity="0"
      clickToNext.style.pointerEvents="none"
      i++
      if(i===1){useFlash();
        poisonSound.currentTime= 0;
        poisonSound.play()
        face.src="img/face02.png";
        kemoshota.src = images[stoneNum+i]
        textOrder("把它连接起来，固定住，b一点一点地改变你的身体和心灵。","あり");
        }
      if(i===2){
        statusBox.style.opacity="0"
        poisonStatusNum.style.opacity="0"
        sleepStatusNum.style.opacity="0"
        stoneStatusNum.style.opacity="0"
        charmStatusNum.style.opacity="0"
        useFlash();
        face.src="img/face03.png";
        textOrder("来吧！b重新诞生吧！"," ");
        guard2.style.display="block";
        setTimeout(()=>{
          poisonSound.currentTime= 0;
          poisonSound.play()
          useFlash();
          kemoshota.src = images[stoneNum+i]},1550);
          setTimeout(()=>{
            poisonSound.currentTime= 0;
            poisonSound.play()
            useFlash();
            kemoshota.src = images[stoneNum+i+1]},3100);
            setTimeout(()=>{
              
              poisonSound.currentTime= 0;
              poisonSound.play()
              useFlash();
              kemoshota.src = images[stoneNum+i+2];
              textOrder(" ","あり");},4650);
        
        
        }
      if(i===3){
        face.src="img/face00.png";
        textOrder("嗯嗯！b真帅！","あり");;
        guard2.style.display="none"
      }
      if(i===4){
        textOrder("你的工作是b守卫大门，b消除入侵者。","あり");;
      }
      if(i===5){
        textOrder("啊，等等……b如果有可爱的女孩，b希望你不杀她，b活捉她。","あり");;
      }
      if(i===6){
        guard2.style.display="block"
        face.src="img/face08.png";
        textOrder("那就拜托了，b\"前进！\"勇者君♪","あり");}
      if (i===7){
        textOrder(" ");
        text.style.left="100px"
        face.style.opacity="0"
        useblack();
        clickToNext.style.display="none"
        setTimeout(()=>{back02.src="img/blackOut.png";
        kemoshota.style.opacity="0.5"
        console.log(stoneNum)
        },1500)  

        setTimeout(()=>{
          youko="did"
          guard2.style.display="none"
          textOrder("结局3b～无言的门卫～","なし");},4000)  
        setTimeout(()=>{clickToNext.removeEventListener('click',ClickEvent)
       },2000)  }
       
        
  };  
   clickToNext.addEventListener('click',ClickEvent);  
    }
    if(stoneNum>=6){
            stone.style.display="none"
      stone_back.style.opacity="0.2"
    }
      
      stone.style.top="800px" 
      stone.style.left="985px"
      stone.style.display="none"

    
  
  }else{
    stone.style.display="none";
  
  }

}
}

//  #endregion


  //石化魅了の処理 
//  #region posionblack
{
    
  const images = [
  'img/kemoshota00.png',
  'img/stoneC00.png',
  'img/stoneC01.png',
  'img/stoneC02.png',
  'img/stoneC03.png',
  'img/stoneC04.png',
  'img/stoneC05.png',
  'img/stoneC06.png',
  'img/stoneC07.png',
  'img/stoneC08.png',
  'img/stoneC09.png',
  'img/stoneC10.png',
  'img/stoneC11.png',
  'img/stoneC12.png',
];
 // デフォルトのドラッグ機能をオフ

 charm_back3.ondragstart = e=>{
  return false;
  }

// マウスダウンでマウスムーブ時に”onMouseMove”を呼び出す

charm_back3.onmousedown = e=>{
 if(charmNum>=4){charm3.style.display="none"};
 document.addEventListener("mousemove",onMouseMove);
  }

 // clientX,clientYで画面左端、上端からのマウスの位置を取得。
// offsetWidth,offsetHeightで要素のサイズを取得できる。
//下の処理で、マウスに画像が追随する。
const onMouseMove = e=>{
  charm3.style.display="block";
  let x = e.clientX;
  let y = e.clientY;
  let width = charm_back3.offsetWidth;
  let height = charm_back3.offsetHeight;
  charm3.style.top = (y-height/2) + "px";
  charm3.style.left = (x-width/2) + "px";
  charm3.style.opacity = "1"
  if(charmNum<4){
    charm_back3.style.opacity="0.5"
  }   
  }



 // 下は、マウスを放したときの処理
 
 charm3.onmouseup = e=>{
    document.removeEventListener("mousemove",onMouseMove);
    charm3.style.opacity ="0";
    charm_back3.style.opacity="1";


    let x = e.clientX;
    let y = e.clientY;
    const kemoshota =document.getElementById("kemoshota")
    const atari =document.getElementById("atariHantei");
    const atariRect =atari.getBoundingClientRect();
   
    if((x>=atariRect.left && x<=(atariRect.left+atariRect.width)) && (y>=atariRect.top && y<=(atariRect.top+atariRect.height))){
    
     charmSound.currentTime= 0;
     charmSound.play()
     flash.style.backgroundColor="fuchsia";
     useFlash();
     charmNum++
     kemoshota.src = images[charmNum];
     charmStatusNum.textContent=`${charmNum}`;
          
    if(charmNum===1){
      stone_back.style.opacity="0.2";
      stone_back.style.pointerEvents="none";
      textOrder("主题是“性觉醒”……毕竟爱欲和艺术是密不可分的。"); }
      
    if(charmNum===2){textOrder("结界的魔力正在发挥作用。 b这气氛真的很好。")}
    if(charmNum===3){
      face.src="img/face11.png";
      textOrder("来吧，脱下衣服吧。","");;      
     } 
     if(charmNum===4){
      face.src="img/face00.png";
      textOrder("呵呵…好色情呢。b然后，我们还得稍微b改变一下姿势。","");;      
     }
     if(charmNum===5){
      face.src="img/face00.png";
      textOrder("来吧……给我看更可耻的模样。","");;      
     } 
     if(charmNum===6){
      guard2.style.display="block"
      charm_back3.style.opacity="0.2"
      charm_back3.style.pointerEvents="none"
      face.src="img/face02.png";
      stoneNum++
      stoneStatusNum.textContent=`${stoneNum}`;
      textOrder("更多…",);      
      setTimeout(()=>{
        poisonSound.currentTime= 0;
        poisonSound.play()
        useSpecialFlash(1,"fuchsia")
        stoneNum++
        stoneStatusNum.textContent=`${stoneNum}`;
        charmNum++
        kemoshota.src=images[charmNum]
        textOrder("还要更多!!",);    
        },1200*1)
        setTimeout(()=>{
          poisonSound.currentTime= 0;
          poisonSound.play()
          useSpecialFlash(2,"fuchsia")
          stoneNum++
          stoneStatusNum.textContent=`${stoneNum}`;
          charmNum++
          kemoshota.src=images[charmNum]
          textOrder("现在…!",);    
          },1200*2)
          setTimeout(()=>{
            poisonSound.currentTime= 0;
            poisonSound.play()
            useSpecialFlash(3,"fuchsia")
            stoneNum++
            stoneStatusNum.textContent=`${stoneNum}`;
            charmNum++
            kemoshota.src=images[charmNum]
            face.src="img/face03.png";
            textOrder("疯狂吧!!",);    
            },1200*3)
        setTimeout(()=>{
          poisonSound.currentTime= 0;
          poisonSound.play()
          useSpecialFlash(4,"fuchsia")
          charmNum++
          kemoshota.src = images[charmNum];
          charmStatusNum.textContent=`${charmNum}`;
          stoneNum++
          stoneStatusNum.textContent=`${stoneNum}`;
        },1200*4)
      setTimeout(()=>{
        flash1.classList.remove("active");
        flash2.classList.remove("active");
        flash3.classList.remove("active");
        poisonSound.currentTime= 0;
        poisonSound.play()
        useSpecialFlash(5,"fuchsia")
        charmNum++
        kemoshota.src = images[charmNum];
        stoneNum++
        stoneStatusNum.textContent=`${stoneNum}`;
      },1200*5)
      setTimeout(()=>{
        poisonSound.currentTime= 0;
        poisonSound.play()
        useSpecialFlash(1,"fuchsia")
        charmNum++
        kemoshota.src = images[charmNum];
        stoneNum++
        stoneStatusNum.textContent=`${stoneNum}`;
      },1200*6)
      setTimeout(()=>{
        poisonSound.currentTime= 0;
        poisonSound.play()
        useSpecialFlash(2,"fuchsia")
        charmNum++
        kemoshota.src = images[charmNum];
        stoneNum++
        stoneStatusNum.textContent=`${stoneNum}`;
      },1200*7)
      setTimeout(()=>{
        face.src="img/face00.png"
        textOrder("哎呀…b快要到达时居然僵硬了。","あり");;
        
        let i=0
        function ClickEvent(){
        nextMouse.style.opacity="0"
        clickToNext.style.pointerEvents="none"
        i++
        if(i===1){
          face.src="img/face04.png"
          textOrder("真厉害……b擦掉也擦掉不完，b不停地溢出来……","あり");}
        if(i===2){
          face.src="img/face00.png"
          textOrder("太好了，勇者君。b那种快要到达的感觉，b将会永远持续下去。","あり");}
        if(i===3){
          face.src="img/face08.png"
          textOrder("不……虽然想要去，但b还是无法到达，b是不是应该叫做生死地狱才对……。","あり");}
        if(i===4){
          face.src="img/face00.png"
          textOrder("算了，没关系。b我会把你摆在展览厅最显眼的地方。","あり");}
        if(i===5){
          face.src="img/face00.png"
          textOrder("勇者君的羞耻模样……b让大家好好看看吧。","あり");} 
        if(i===6){
          textOrder(" ")
          face.style.opacity="0"
          
          useblack()
          setTimeout(()=>{
            statusBox.style.opacity="0"
            poisonStatusNum.style.opacity="0"
            sleepStatusNum.style.opacity="0"
            stoneStatusNum.style.opacity="0"
            charmStatusNum.style.opacity="0"
            back02.src="img/blackOut.png"
            kemoshota.style.opacity="0.5"
            kemoshota.src="img/stoneC12a.png"},1500)
            setTimeout(()=>{
              guard2.style.display="none";
              relief="did"
              text.style.left="100px"
              textOrder("结局6b～淫乱勇者的浮雕～","なし");},3500)
        }
        }
        
        clickToNext.addEventListener('click',ClickEvent);


      },1200*8)

      } 
      
      charm3.style.top="800px"
      charm3.style.left="985px"
      charm3.style.display="none"

    
  
  }else{
    charm3.style.display="none";
  
  }

}
}

//  #endregion


  // 魅了の自動カウントアップ
  //#region 
let charmSpecialCount=0
  function charmCountUp(){
    charmSpecialCount++
    if(charmSpecialCount+10<100){
      charmStatusNum.textContent=`${charmSpecialCount+10}`
    }
    if(charmSpecialCount+10>=100){
      charmStatusNum.textContent="∞"
    }
  }
  let countStop="go"
 //#endregion


  //魅了の処理 
//  #region posion
{
    
  const images = [
  'img/kemoshota00.png',
  'img/charm00.png',
  'img/charm03.png',
  'img/charm04.png',
  'img/charm05.png',
  'img/charm06.png',
  'img/charm07.png',
  'img/charm08.png',
  'img/charm09.png',
  'img/charm10.png',
  'img/charm11.png',
  'img/charm12.png',
  'img/charm13.png',
  'img/charm14.png',
  'img/charm15.png',
  'img/charm16.png',
  'img/charm17.png',
];
 // デフォルトのドラッグ機能をオフ

 charm_back.ondragstart = e=>{
  return false;
  }

// マウスダウンでマウスムーブ時に”onMouseMove”を呼び出す

charm_back.onmousedown = e=>{
 if(charmNum>=4){charm.style.display="none"};
 document.addEventListener("mousemove",onMouseMove);
  }

 // clientX,clientYで画面左端、上端からのマウスの位置を取得。
// offsetWidth,offsetHeightで要素のサイズを取得できる。
//下の処理で、マウスに画像が追随する。
const onMouseMove = e=>{
  charm.style.display=null;
  let x = e.clientX;
  let y = e.clientY;
  let width = charm_back.offsetWidth;
  let height = charm_back.offsetHeight;
  charm.style.top = (y-height/2) + "px";
  charm.style.left = (x-width/2) + "px";
  charm.style.opacity = "1"
  if(charmNum<4){
    charm_back.style.opacity="0.5"
  }   
  }



 // 下は、マウスを放したときの処理
 
 charm.onmouseup = e=>{
    document.removeEventListener("mousemove",onMouseMove);
    charm.style.opacity ="0";
    charm_back.style.opacity="1";


    let x = e.clientX;
    let y = e.clientY;
    const kemoshota =document.getElementById("kemoshota")
    const atari =document.getElementById("atariHantei");
    const atariRect =atari.getBoundingClientRect();
   
    if((x>=atariRect.left && x<=(atariRect.left+atariRect.width)) && (y>=atariRect.top && y<=(atariRect.top+atariRect.height))){
    
     charmSound.currentTime= 0;
     charmSound.play()
     flash.style.backgroundColor="fuchsia";
     useFlash();
     charmNum++
     kemoshota.src = images[charmNum];
     charmStatusNum.textContent=`${charmNum}`;
          
    if(charmNum===1){
      reset_back.style.opacity="1"
      reset_back.style.pointerEvents="all"
      poison_back.style.opacity="0.2"
      poison_back.style.pointerEvents="none"
      sleep_back.style.opacity="0.2"
      sleep_back.style.pointerEvents="none"
      stone_back.style.opacity="0.2"
      stone_back.style.pointerEvents="none"

      face.src="img/face07.png";
      textOrder("嘿……b打扰你们的战斗真是抱歉……","あり");;
      
      
      let i=0
      function ClickEvent(){
      nextMouse.style.opacity="0"
      clickToNext.style.pointerEvents="none"
      i++
      if(i===1){
        kemoshota.src="img/charm01.png";
        face.src="img/face00.png";
        textOrder("竖起来了。","あり");;
        }
      if(i===2){
        kemoshota.src="img/charm02.png";
        textOrder("啊哈，不要躲藏哦。b我更想看你勇者君的羞耻模样呢～。","なし");;
        }}
        clickToNext.addEventListener('click',ClickEvent);    
    } 
    if(charmNum===2){textOrder("看起来很痛苦。如果我停下自慰可以吗？")}
    if(charmNum===3){
      face.src="img/face07.png";
      textOrder("哎……b你居然能忍耐住。","あり");;
      let i=0
      function ClickEvent(){
      nextMouse.style.opacity="0"
      clickToNext.style.pointerEvents="none"
      i++
      if(i===1){
        face.src="img/face10.png";
        textOrder("那么，我就对你施展b更强大的咒语b吧。",);
        }
      }
        clickToNext.addEventListener('click',ClickEvent);      
    }
    if(charmNum===4){
      charm_back.style.opacity="0.2"
      charm_back.style.pointerEvents="none"
      back02.src="img/back02.png"
      face.style.opacity="0";
      text.style.left="100px"
      textOrder("来，勇者君…b给我好好看看你的脸。","あり");
      
      charm_back.style.pointerEvents="none"
      let i=0
      function ClickEvent(){
      nextMouse.style.opacity="0"
      clickToNext.style.pointerEvents="none"
      i++
      if(i===1){
        charmNum++
        kemoshota.src = images[charmNum];
        textOrder("呵呵…b真可爱呢。","あり");;
        

        }
      if(i===2){
        text.style.display="none"
        text.style.color="yellow"
        back02.style.opacity="0"
        kemoshota.style.opacity="0"
        setTimeout(()=>{
          charmNum++
          kemoshota.src=images[charmNum];
          kemoshota.style.opacity="1"
          charmStatusNum.textContent=`${charmNum-1}`;
          },1000);
          setTimeout(()=>{
            text.style.display=null;
            textOrder("……啊！？","あり");;
          },2000);
        }  
        
      if(i===3){
        useSpecialFlash(1,"fuchsia");
        poisonSound.currentTime= 0;
        poisonSound.play()
        charmNum++
        charmStatusNum.textContent=`${charmNum-1}`;
        kemoshota.src = images[charmNum]
        textOrder("嗯咕~呜… b 嗯 ゛嗯゛嗯゛嗯゛~啊呜…!","あり",);
      };
      if(i===4){
        useSpecialFlash(2,"fuchsia");
        poisonSound.currentTime= 0;
        poisonSound.play()
        charmNum++
        charmStatusNum.textContent=`${charmNum-1}`;
        kemoshota.src = images[charmNum]
        textOrder("嗯咻…嗯咻…呜嗯嗯…","あり",);
      }; 
      if(i===5){
        useSpecialFlash(3,"fuchsia");
        
        poisonSound.currentTime= 0;
        poisonSound.play()
        charmNum++
        charmStatusNum.textContent=`${charmNum-1}`;
        kemoshota.src = images[charmNum]
        textOrder("（啪嚓…b啪嚓……b啾咻咻~~………）","あり",);
      }; 
      if(i===6){
        useSpecialFlash(4,"fuchsia");
        poisonSound.currentTime= 0;
        poisonSound.play()
        charmNum++
        charmStatusNum.textContent=`${charmNum-1}`;
        kemoshota.src = images[charmNum]
        textOrder("（我想要……更多……）","あり",);
      }; 
      if(i===7){
        useSpecialFlash(5,"fuchsia");
        charmNum++
        charmStatusNum.textContent=`${charmNum-1}`;
        kemoshota.src = images[charmNum]
        textOrder("（啊……）","あり",);
      }; 
      if(i===8){
        
        charmNum++
        charmStatusNum.textContent=`${charmNum-1}`;
        kemoshota.src = images[charmNum];
        text.style.color="white"
        textOrder("我喜欢你，勇者君。","あり");;
      }; 
      if(i===9){
        let id2 =setInterval(()=>{charmCountUp();
        if(countStop ==="yay"){clearInterval(id2)}
        },125)
        back02.style.opacity="1"
        kemoshota.style.opacity="0"
        setTimeout(()=>{
          charmNum++
          kemoshota.src=images[charmNum];
          kemoshota.style.opacity="1"
          },1000);
          setTimeout(()=>{
            text.style.color="yellow";
            textOrder("什……！？","あり");;
          },2000);
      }; 
      if(i===10){
        textOrder("不可能吧…！b因为我们刚才还……b是敌人啊……。","あり");;
      }; 
      if(i===11){
        
        text.style.left=null;
        text.style.color="white";
        face.style.opacity="1"
        face.src="img/face00.png";
        textOrder("不是假的。","あり");;
      }; 
      if(i===12){
        charmNum++;
        kemoshota.src=images[charmNum];
        text.style.color="white";
        textOrder("来，手放在我的胸口。b我都快跳出来了。","あり");;
      };
      if(i===13){
        face.style.opacity="0"
        text.style.color="yellow";
        text.style.left="100px"
        textOrder("啊……b啊……啊……。","あり");;
       }
       if(i===14){
        charmNum++;
        kemoshota.src=images[charmNum];
        textOrder("呜呜……。b人偶使者大人……","あり");;
       }
       if(i===15){
        face.style.opacity="1"
        text.style.color="white"
        text.style.left=null;
        face.src="img/face00.png";
        textOrder("是帕普。","あり");;
       }
       if(i===16){
        charmNum++;
        kemoshota.src=images[charmNum];
        face.style.opacity="0"
        text.style.color="yellow"
        text.style.left="100px"
        textOrder("帕普大人……b我也……我也……想要……帕普大人……","あり");;
       }
       if(i===17){
        face.style.opacity="1"
        text.style.color="white"
        text.style.left=null
        face.src="img/face00.png";
        textOrder("呵呵呵…b我明白了。","あり");;
       }
       if(i===18){guard2.style.display="block"
        face.src="img/face10.png";
        textOrder("要不要在我房间继续呢。","あり");;
       }
       if (i===19){
        
        textOrder(" ");
        text.style.left="100px"
        face.style.opacity="0"
        useblack();
        kemoshota.style.opacity="0"
        clickToNext.style.display="none"
        setTimeout(()=>{back02.src="img/blackOut.png";
        statusBox.style.opacity="0"
        poisonStatusNum.style.opacity="0"
        sleepStatusNum.style.opacity="0"
        stoneStatusNum.style.opacity="0"
        charmStatusNum.style.opacity="0"
        },1500)  

        setTimeout(()=>{
          charmEnd="did"
          countStop="yay"
          guard2.style.display="none"
          textOrder("结局4b～魅惑的魔法～","なし");},3000)  
        setTimeout(()=>{clickToNext.removeEventListener('click',ClickEvent)
       },2000)  }
    }
    
   clickToNext.addEventListener('click',ClickEvent);  
    }
    
    if(charmNum>=7){
            charm.style.display="none"
      charm_back.style.opacity="0.2"
    }
      charm.style.top="800px"
      charm.style.left="985px"
      charm.style.display="none"

    
  
  }else{
    charm.style.display="none";
  
  }

}
}

//  #endregion


// リセットを定義
//#region reset
let done= "false";
let incbus="not";
let egg = "notLay";
let charmEnd ="not";
let relief="not";
let nuigurumi="not"
let youko="not"
function resetAll(){
  kemoshota.src="img/kemoshota00.png";
  kemoshota.style.opacity="1"
  back02.src="img/back02a.png";
  poisonNum=0
  poisonStatusNum.textContent="0"
  sleepNum=0
  sleepStatusNum.textContent="0"
  stoneNum=0
  stoneStatusNum.textContent="0"
  charmNum=0
  charmStatusNum.textContent="0"
  
  statusBox.style.opacity=null;
  poisonStatusNum.style.opacity=null;
  sleepStatusNum.style.opacity=null;
  stoneStatusNum.style.opacity=null;
  charmStatusNum.style.opacity=null;

  flash.classList.remove("active");
  flash1.classList.remove("active");
  flash2.classList.remove("active");
  flash3.classList.remove("active");
  flash4.classList.remove("active");
  flash5.classList.remove("active");

  poison.style.opacity=null;
  poison.style.display="none";
  poison.style.pointerEvents=null;
  poison_back.style.opacity=null;
  poison_back.style.display=null;
  poison_back.style.pointerEvents=null;

  poison2.style.opacity=null;
  poison2.style.display="none";
  poison2.style.pointerEvents=null;
  poison_back2.style.opacity=null;
  poison_back2.style.display=null;
  poison_back2.style.pointerEvents=null;

  sleep.style.opacity=null;
  sleep.style.display="none";
  sleep.style.pointerEvents=null;
  sleep_back.style.opacity=null;
  sleep_back.style.display=null;
  sleep_back.style.pointerEvents=null;

  stone.style.opacity=null;
  stone.style.display="none";
  stone.style.pointerEvents=null;
  stone_back.style.opacity=null;
  stone_back.style.display=null;
  stone_back.style.pointerEvents=null;

  charm.style.opacity=null;
  charm.style.display="none";
  charm.style.pointerEvents=null;
  charm_back.style.opacity=null;
  charm_back.style.display=null;
  charm_back.style.pointerEvents=null;

  charm2.style.opacity=null;
  charm2.style.display="none";
  charm2.style.pointerEvents=null;
  charm_back2.style.opacity=null;
  charm_back2.style.display=null;
  charm_back2.style.pointerEvents=null;

  charm3.style.opacity=null;
  charm3.style.display="none";
  charm3.style.pointerEvents=null;
  charm_back3.style.opacity=null;
  charm_back3.style.display=null;
  charm_back3.style.pointerEvents=null;

  reset.style.opacity=null;
  reset.style.display=null;
  reset.style.pointerEvents=null;
  reset_back.style.opacity=null;
  reset_back.style.display=null;
  reset_back.style.pointerEvents=null;
  

  text.style.left=null;
  text.style.color="white"
  // text.style.opacity="1";

  black.classList.remove("active");
  black.classList.remove("active2");
  black.classList.remove("active3");
  black.classList.remove("active4");

  incbus="not";
  egg="notLay"
  charmEnd="not"
  relief="not";
  nuigurumi="not";
  youko="not";

}
//#endregion


  //リセットの処理
//  #region posion
{
    
 // デフォルトのドラッグ機能をオフ

 reset_back.ondragstart = e=>{
  return false;
  }

// マウスダウンでマウスムーブ時に”onMouseMove”を呼び出す

reset_back.onmousedown = e=>{
  document.addEventListener("mousemove",onMouseMove);
  }

 // clientX,clientYで画面左端、上端からのマウスの位置を取得。
// offsetWidth,offsetHeightで要素のサイズを取得できる。
//下の処理で、マウスに画像が追随する。
const onMouseMove = e=>{
  reset.style.display="block";
  reset_back.style.opacity="0.5"
  let x = e.clientX;
  let y = e.clientY;
  let width = reset_back.offsetWidth;
  let height = reset_back.offsetHeight;
  reset.style.top = (y-height/2) + "px";
  reset.style.left = (x-width/2) + "px";
  reset.style.opacity = "1"
  }



 // 下は、マウスを放したときの処理
 
 reset.onmouseup = e=>{
    document.removeEventListener("mousemove",onMouseMove);
    reset.style.opacity ="0";
    reset.style.display ="none"
    reset_back.style.opacity="1";


    let x = e.clientX;
    let y = e.clientY;
    const atari =document.getElementById("atariHantei");
    const atariRect =atari.getBoundingClientRect();
   
    if((x>=atariRect.left && x<=(atariRect.left+atariRect.width)) && (y>=atariRect.top && y<=(atariRect.top+atariRect.height))){
    
     resetSound.currentTime= 0;
     resetSound.play()
     useSpecialFlash(1,"white");
     
     reset.style.top="800px"
     reset.style.left="985px"
     reset.style.display="none"
     reset_back.style.opacity=null;
     reset_back.style.pointerEvents=null;
     
     
     
  //#region first
     if(done!=="true" && incbus!=="did" && nuigurumi!=="did" && youko!=="did" && charmEnd!=="did" &&         egg!=="laid" && relief!=="did"){

       face.src="img/face09.png"
       textOrder("（好，时间倒回！）","あり");
       let i=0
       function ClickEvent(){
       nextMouse.style.opacity="0"
       clickToNext.style.pointerEvents="none"
       i++
       if(i===1){
        resetAll();
       resetSound.currentTime= 0;
       resetSound.play()
         useSpecialFlash(2,"white");
       face.src="img/face00.png";
       textOrder("嘿，勇者君。b又见面了。","あり");;
       }
       if(i===2){
         face.style.opacity="0"
         text.style.color="yellow"
         text.style.left="100px"
         textOrder("？？？","あり");;
         }
       if(i===3){
         face.src="img/face00.png";
         face.style.opacity="1"
         text.style.color="white";
         text.style.left=null;
         textOrder("呵呵呵，这是我的事情。","あり");;
       }
        if(i===4){
          face.src="img/face06.png";
          face.style.opacity="1"
          text.style.color="white";
          text.style.left=null;
          textOrder("来，开始吧。","");;
         done="true";
         setTimeout(()=>{flash2.classList.remove("active")},100)
          }    
      }
       clickToNext.addEventListener('click',ClickEvent); 
    }
      //#endregion
    
  //#region from second
      if(done==="true"&& incbus!=="did" && nuigurumi!=="did" && youko!=="did" && charmEnd!=="did" && egg!=="laid" && relief!=="did"){
        face.src="img/face03.png"
        textOrder("（明白了，时间倒回！）","あり");
        let i=0
        function ClickEvent(){
        nextMouse.style.opacity="0"
        clickToNext.style.pointerEvents="none"
        i++
        if(i===1){
         resetAll();
         resetSound.currentTime= 0;
         resetSound.play()
          useSpecialFlash(2,"white");
          face.src="img/face00.png";
          textOrder("来，开始吧？","");;
          setTimeout(()=>{flash2.classList.remove("active")},1500)
          }
          
        }clickToNext.addEventListener('click',ClickEvent);
      }
      //#endregion
 
  //#region  posionEnd
    if(incbus==="did"){
      text.style.opacity="1"

      guard.style.display="block"
      setTimeout(()=>{
        resetAll();
      },500)
      setTimeout(()=>{face.src="img/face00.png"
      text.style.opacity="1"

      face.style.opacity="1"
      textOrder("嘿，勇者君。b作为淫魔的生活怎么样？","あり");
      },1000)
      
      let i=0
      function ClickEvent(){
      nextMouse.style.opacity="0"
      clickToNext.style.pointerEvents="none"
      i++
     if(i===1){
       face.src="img/face00.png";
       textOrder("对我来说，b看你为了食物不顾一切地奔波，b真的很有趣。","あり");;
       }
       if(i===2){
         face.style.opacity="0"
         text.style.color="yellow"
         text.style.left="100px"
         textOrder("？？？","あり");;
         }
       if(i===3){
         face.src="img/face00.png";
         face.style.opacity="1"
         text.style.color="white";
         text.style.left=null;
         textOrder("唉，跟你说也没什么用啊…。","あり");;
       }
        if(i===4){
          face.src="img/face06.png";
          face.style.opacity="1"
          text.style.color="white";
          text.style.left=null;
          textOrder("那么，这次我们玩什么呢？","");;
         done="true";
         setTimeout(()=>{flash2.classList.remove("active")},100)
          }    
      }
       clickToNext.addEventListener('click',ClickEvent); }
  //#endregion
      
   //#region  sleepPoisonEnd
   if(nuigurumi==="did"){
   text.style.opacity="0"

    kemoshota.style.opacity="0"
    guard.style.display="block"
    black.classList.add("active3");
    setTimeout(()=>{
      resetAll();
    },500)
    setTimeout(()=>{face.src="img/face08.png"
    face.style.opacity="1"
    text.style.opacity="1"

    textOrder("你好啊，勇者君。b我可爱的玩偶。","あり");
    },1000)
    
    let i=0
    function ClickEvent(){
    nextMouse.style.opacity="0"
    clickToNext.style.pointerEvents="none"
    i++
   if(i===1){
     face.src="img/face00.png";
     textOrder("多亏了你，我终于能睡个好觉了。","あり");;
     }
     if(i===2){
      face.src="img/face00.png";
      textOrder("唉，虽然最后把它抱得破破烂烂的扔掉了，但总归是被抱过一阵子。","あり");;
      }
     if(i===3){
       face.style.opacity="0"
       text.style.color="yellow"
       text.style.left="100px"
       textOrder("？？？","あり");;
       }
     if(i===4){
       face.src="img/face00.png";
       face.style.opacity="1"
       text.style.color="white";
       text.style.left=null;
       textOrder("呵呵…你真是可爱呢。","あり");;
     }
      if(i===5){
        face.src="img/face06.png";
        face.style.opacity="1"
        text.style.color="white";
        text.style.left=null;
        textOrder("那么，这次我们玩什么呢？","");;
       done="true";
       setTimeout(()=>{flash2.classList.remove("active")},100)
        }    
    }
     clickToNext.addEventListener('click',ClickEvent); }
//#endregion

    //#region  sleepCharmEnd
if(egg==="laid"){
  text.style.opacity="0"

  kemoshota.style.opacity="0"
  guard.style.display="block"
  setTimeout(()=>{
    black.classList.add("active3");
    resetAll();
  },500)
  setTimeout(()=>{
  face.src="img/face09.png"
  face.style.opacity="1"
  text.style.opacity="1"
  
  textOrder("你好啊，勇者君。b当妈妈是什么感觉？","あり");
  },1000)
  
  let i=0
  function ClickEvent(){
  nextMouse.style.opacity="0"
  clickToNext.style.pointerEvents="none"
  i++
 if(i===1){
   face.src="img/face00.png";
   textOrder("你生下的蛋里，诞生了既拥有圣魔又强大的新种。","あり");;
   }
   if(i===2){
    face.src="img/face00.png";
    textOrder("你被孩子和孙子要求交配和哺乳时，带着陶醉的表情，继续下蛋。","あり");;
    }
   if(i===3){
     face.style.opacity="0"
     text.style.color="yellow"
     text.style.left="100px"
     textOrder("？？？b到底在说什么？","あり");;
     }
   if(i===4){
     face.src="img/face09.png";
     face.style.opacity="1"
     text.style.color="white";
     text.style.left=null;
     textOrder("呵呵呵…这是另一条世界线的故事。","あり");;
   }
    if(i===5){
      face.src="img/face06.png";
      face.style.opacity="1"
      text.style.color="white";
      text.style.left=null;
      textOrder("那么，这次我们玩什么呢？","");;
     done="true";
     setTimeout(()=>{flash2.classList.remove("active")},100)
      }    
  }
   clickToNext.addEventListener('click',ClickEvent); }
//#endregion


   //#region  stoneEnd
if(youko==="did"){
  text.style.opacity="0"

  kemoshota.style.opacity="0"
  guard.style.display="block"
  setTimeout(()=>{
    resetAll();
  },500)
  setTimeout(()=>{face.src="img/face09.png"
  face.style.opacity="1"
  text.style.opacity="1"

  textOrder("你好啊，勇者君。b辛苦了。","あり");
  },1000)
  
  let i=0
  function ClickEvent(){
  nextMouse.style.opacity="0"
  clickToNext.style.pointerEvents="none"
  i++
 if(i===1){
   face.src="img/face00.png";
   textOrder("你毫不犹豫地残杀了前来帮忙的伙伴，真是太棒了。","あり");;
   }
 if(i===2){
     face.style.opacity="0"
     text.style.color="yellow"
     text.style.left="100px"
     textOrder("？？？b你到底做了什么…？","あり");;
     }
   if(i===3){
     face.src="img/face00.png";
     face.style.opacity="1"
     text.style.color="white";
     text.style.left=null;
     textOrder("呵呵…b只是一点小预言而已。","あり");;
   }
    if(i===4){
      face.src="img/face06.png";
      face.style.opacity="1"
      text.style.color="white";
      text.style.left=null;
      textOrder("那么，这次我们玩什么呢？","");;
     done="true";
     setTimeout(()=>{flash2.classList.remove("active")},100)
      }    
  }
   clickToNext.addEventListener('click',ClickEvent); }
//#endregion

   //#region  stoneCharmEnd
if(relief==="did"){
  kemoshota.style.opacity="0"
  guard.style.display="block"
  text.style.opacity="0"
  setTimeout(()=>{
    resetAll();
  },500)
  setTimeout(()=>{face.src="img/face00.png"
  face.style.opacity="1"
  text.style.opacity="1"
  textOrder("你好啊，勇者君。b真是让我怀念啊。b","あり");
  },1000)
  
  let i=0
  function ClickEvent(){
  nextMouse.style.opacity="0"
  clickToNext.style.pointerEvents="none"
  i++
 if(i===1){
   face.src="img/face00.png";
   textOrder("大概是你想去也去不了的那种感觉吧，已经过了一百年左右。b突然想起了你，解开了石化，结果…","あり");;
   }
   if(i===2){
    face.src="img/face00.png";
    textOrder("不，真的…b太棒了…b真的是…。","あり");;
    }
   if(i===3){
     face.style.opacity="0"
     text.style.color="yellow"
     text.style.left="100px"
     textOrder("？？？","あり");;
     }
   if(i===4){
     face.src="img/face00.png";
     face.style.opacity="1"
     text.style.color="white";
     text.style.left=null;
     textOrder("呵呵呵…b希望这次能去到另一个世界线。","あり");;
   }
    if(i===5){
      face.src="img/face06.png";
      face.style.opacity="1"
      text.style.color="white";
      text.style.left=null;
      textOrder("那么，这次我们玩什么呢？","");;
     done="true";
     setTimeout(()=>{flash2.classList.remove("active")},100)
      }    
  }
   clickToNext.addEventListener('click',ClickEvent); }
//#endregion



   //#region  charmEnd
if(charmEnd==="did"){
  text.style.opacity="0"
  kemoshota.style.opacity="0"
  guard.style.display="block"
  black.classList.add("active3");
  setTimeout(()=>{
    resetAll();
  },500)
  setTimeout(()=>{face.src="img/face09.png"
  face.style.opacity="1"
  text.style.opacity="1"
  textOrder("你好啊，勇者君。b昨晚真是享受啊。","あり");
  },1000)
  
  let i=0
  function ClickEvent(){
  nextMouse.style.opacity="0"
  clickToNext.style.pointerEvents="none"
  i++
 if(i===1){
   face.src="img/face00.png";
   textOrder("你真是太专注了，b为我奉献自己，甚至让我感动。","あり");;
   }
 if(i===2){
     face.style.opacity="0"
     text.style.color="yellow"
     text.style.left="100px"
     textOrder("？？？","あり");;
     }
   if(i===3){
     face.src="img/face00.png";
     face.style.opacity="1"
     text.style.color="white";
     text.style.left=null;
     textOrder("唉，不过b从玩法来看，可能有些普通吧。","あり");;
   }
    if(i===4){
      face.src="img/face06.png";
      face.style.opacity="1"
      text.style.color="white";
      text.style.left=null;
      textOrder("那么，这次我们玩什么呢？","");;
     done="true";
     setTimeout(()=>{flash2.classList.remove("active")},100)
      }    
  }
   clickToNext.addEventListener('click',ClickEvent); }
//#endregion
  
    

  }else{
    reset.style.display="none";
  
  }

}
}

//  #endregion


}