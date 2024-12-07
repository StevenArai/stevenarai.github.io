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
        ["パップの人形劇場へbようこそ！","あり"],
        ["本日の演目はb「駆け出し勇者のデバフ祭り！」b楽しんでいってね！","あり"],
        ["(ドラッグ＆ドロップでb魔法を唱えることができるよ！)","なし"],
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
        setTimeout(() => {textOrder("やぁ！bキミが噂の勇者クン？","あり")
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
        textOrder("ふふふ…b毒の魔法はいかがかな？");
      }
      if(poisonNum===2){textOrder("苦しそうだね。b降参しちゃってもいいんだよ？")}
      if(poisonNum===3){face.src="img/face07.png";
        textOrder("さっさと降参しちゃいなよ。bこのままだとb本当に死んじゃうよ？")}
      if(poisonNum===4){textOrder("…。")}
      if(poisonNum===5){
        face.src="img/face08.png";
        guard.style.display="block";
        setTimeout(()=>{
         textOrder("あ～あb本当に死んじゃった…。","あり") 
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
          textOrder("ふふ…bそんなに焦らなくても大丈夫だよ。","あり")
          }
        if(i===2){
          textOrder("ボクがキミにbぴったりの肉体をb用意してあげる！","あり")
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
            textOrder("Ending1b～転生したら淫魔だった件～","なし")},3500)  
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
      textOrder("もしも～し、勇者クン～？bふふ…無防備な寝顔も可愛いなぁ。")
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
     textOrder("ふふふ…b悪夢を見せてあげるよ。")};
    if(poisonNum===2){
      textOrder("ほらほらb早く起きないとb死んじゃうよ～？")
    };
    if(poisonNum===3){
      
      face.src="img/face07.png";
      textOrder("う～ん、このまま死なせちゃうのもbちょっと、もったいないかも…","あり")
      let i=0
        function ClickEvent(){
        nextMouse.style.opacity="0";
        const textbox1=[
         ["そうだ…キミ、可愛いしbせっかくだからbボクのコレクションにb加えてあげるよ。","あり"],//1
        ["それじゃ、眠ってる間にb繕っちゃおうかな。","あり"],//2
        ["                                                       ","あり"],//3
        ["う～ん","あり"],//4
        ["あらら、起きちゃったか…。","あり"],//5
        ["おはよう勇者クン。b気分はどうかな？","あり"],//6
        ["何これぇぇ！？","あり"],//7
        ["戻して！b戻してぇぇ！","あり"],//8
        ["いいけど…。b","あり"],//9
        ["本当に戻しちゃっていいの？","あり"],//10
        ["あっ、あっ…あっ……。","あり"],//11
        ["ふふ…bすぐ終わるからbいい子にしててね。","あり"],//12
        ["                               ","あり"],//13
        ["はいできた。","あり"],//14
        ["ふふふ…bかわいいね、勇者クン。","あり"],//15
        ["ふわふわでbそれにとってもいい匂い…b抱き枕にちょうどいいや。","あり"],//16
        ["ふふ…お股を撫でるとb微かに震えるね…","あり"],//17
        ["心配しないで。bたとえ勇者じゃなくなってもbボクがキミのことbいっぱい愛してあげる。","あり"],//18
        ["これから毎日一緒に寝ようね。","あり"],//19
        [" ",""]
        
      ];
        
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
            textOrder("Ending2b～人形使いのお気に入り～","なし")},2000)        
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
     textOrder("僕が素敵な夢をbプレゼントしてあげる！")};
    if(charmNum===2){
      textOrder("よしよし…bしっかり魔法がb効いてるようだね。")
    };
    if(charmNum===3){
      textOrder("どうかな、勇者クン？bイきそう？bもうすぐ、イきそう？","")}
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
        textOrder("あ～あ、パンツもズボンもbびちょびちょにbなっちゃったねぇ。","あり")
      
      
        let i=0
        function ClickEvent(){
        nextMouse.style.opacity="0";
        
        clickToNext.style.pointerEvents="none"
        i++
        if(i===1){
          charmNum++
          kemoshota.src = images[charmNum+1];
          textOrder("うわ…すごい量…。","あり")
        };
        if(i===2){textOrder("せっかくだしbこれ、有効活用させてbもらおうかな。","あり");}
        if(i===3){
          textOrder("勇者クンの精子とb魔物の卵を混ぜ合わせて…","あり")
        face.src="img/face05.png";
        black.classList.add("active2")
        statusBox.style.opacity="0"
        poisonStatusNum.style.opacity="0"
        sleepStatusNum.style.opacity="0"
        stoneStatusNum.style.opacity="0"
        charmStatusNum.style.opacity="0"
        };
        if(i===4){
          textOrder("ふふ…ボクって天才かも。","あり")
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
              textOrder("おはよう勇者クンb気分はどうかな？","あり");
              black.classList.add("active3");
          }, 1000);
        
        };
        if(i===6){
          charmNum++
          kemoshota.src=images[charmNum+1]
          face.style.opacity="0"
          text.style.color="yellow";
          text.style.left="100px";
          textOrder("うぅぅ…。","あり");
        }
        if(i===7){
          charmNum++
          kemoshota.src=images[charmNum+1]
          textOrder("！？","あり");         
        }
        if(i===8){
          charmNum++
          kemoshota.src=images[charmNum+1]
          textOrder("何これ？b放して！bというか僕の服は！？","あり");         
        }
        if(i===9){
          face.style.opacity="1"
          text.style.left=null;
          text.style.color="white"
          textOrder("邪魔だから処分しちゃった。bそれより体の異変に気づかない？","あり")
          };
        if(i===10){
          face.style.opacity="0"
          text.style.left="100px";
          text.style.color="yellow"
          charmNum++
          kemoshota.src=images[charmNum+1]
          textOrder("何だこれ…。bお腹の中で何か動いて…。","あり")
          }

        if(i===11){
          face.style.opacity="1"
          text.style.left=null;
          text.style.color="white"
          textOrder("キミが寝てる間にb魔物の卵を植え付けてbおいたんだ。","あり");
        }
        if(i===12){
          textOrder("宿主の魔力を吸ってb成長する卵だよ。","あり")
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
          textOrder("ほら、始まったみたいだよ？","あり");
        }
        if(i===14){
          useSpecialFlash(2,"fuchsia");
          poisonSound.currentTime= 0;
          poisonSound.play()
          charmNum++
          kemoshota.src=images[charmNum+1]

          face.src="img/face01.png";
          textOrder("分かる？勇者クン？","あり")
        
        }
        if(i===15){
          useSpecialFlash(3,"fuchsia");
          poisonSound.currentTime= 0;
          poisonSound.play()
          charmNum++
          kemoshota.src=images[charmNum+1]

          face.src="img/face01.png";
          textOrder("魔物から人々を守ってきたキミがb今度は魔物を産み出す苗床にbなるんだ。","あり")
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
          textOrder("ううう…")
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
            textOrder("あああ…")

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
            textOrder("ふふ…お疲れ様","あり");
          },1200*4)

        }
        if(i===17){
          textOrder("勇者と魔物の間にb産まれた子ども…","あり");
        }
        if(i===18){
          face.src="img/face06.png"
          textOrder("卵が孵るのが楽しみだなぁ。","あり");
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
            textOrder("Ending5b～魔物の苗床～","なし");
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
      textOrder("出でよ、モノリス！");}
    if(stoneNum===2){
      back02.src="img/back02.png";
      face.src="img/face00.png";
      textOrder("ふふ…捕まえた。","あり");
      let i=0
      function ClickEvent(){
      nextMouse.style.opacity="0"
      clickToNext.style.pointerEvents="none"
      i++
      if(i===1){
        textOrder("ねぇ、勇者クンbゾクゾクするでしょう？","あり");
        }
      if(i===2){
        textOrder("ボクがキミをb最高の芸術作品にしてあげる！","なし");
        }}
        clickToNext.addEventListener('click',ClickEvent);
        charm3.style.display="none"
        charm2.style.display="none"    
        charm.style.display="none"
        charm_back3.style.display="block"   
        charm_back2.style.display="none"   
        charm_back.style.display="none"   
      }
    if(stoneNum===3){textOrder("ガーゴイル…bいや、妖狐の石像なんてどうかな？")
      charm_back3.style.opacity="0.2";
      charm_back3.style.pointerEvents="none";
    }
    if(stoneNum===4){textOrder("分かる？bキミはボクの居城を守るb石の怪物になるんだよ。")}
    if(stoneNum===5){textOrder("ほらほらbどんどん変わってしまうよ？")}
    if(stoneNum===6){textOrder("ふふ…bもうピクリとも動けないね。","あり");
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
        textOrder("コネて固めてb身も心も少しずつb作り変えてあげる。","あり")
        }
      if(i===2){
        statusBox.style.opacity="0"
        poisonStatusNum.style.opacity="0"
        sleepStatusNum.style.opacity="0"
        stoneStatusNum.style.opacity="0"
        charmStatusNum.style.opacity="0"
        useFlash();
        face.src="img/face03.png";
        textOrder("さぁ！b生まれ変わろうね！"," ")
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
              textOrder(" ","あり")},4650);
        
        
        }
      if(i===3){
        face.src="img/face00.png";
        textOrder("うんうん！bとっても格好いいよ！","あり");
        guard2.style.display="none"
      }
      if(i===4){
        textOrder("キミのお仕事はb門の見張りについてb侵入者を排除すること。","あり");
      }
      if(i===5){
        textOrder("あっ、でも…b可愛い子がいたらb殺さず生け捕りにしてbほしいかな。","あり");
      }
      if(i===6){
        guard2.style.display="block"
        face.src="img/face08.png";
        textOrder("それじゃ、よろしく頼むよ。b\"元\"勇者クン♪","あり");}
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
          textOrder("Ending3b～物言わぬ門番～","なし")},4000)  
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
      textOrder("テーマは「性の目覚め」…bやっぱりエロスと芸術はb切っても切り離せないよね。"); }
      
    if(charmNum===2){textOrder("魅了の魔法が効いてるね。bとってもいい雰囲気だよ～。")}
    if(charmNum===3){
      face.src="img/face11.png";
      textOrder("さぁ、服も脱いじゃおうか。","");      
     } 
     if(charmNum===4){
      face.src="img/face00.png";
      textOrder("ふふ…えっちだねぇ。bあとは、ポーズもちょっとb変えないとね。","");      
     }
     if(charmNum===5){
      face.src="img/face00.png";
      textOrder("さぁ…もっとあさましい姿をbボクにみせてよ。","");      
     } 
     if(charmNum===6){
      guard2.style.display="block"
      charm_back3.style.opacity="0.2"
      charm_back3.style.pointerEvents="none"
      face.src="img/face02.png";
      stoneNum++
      stoneStatusNum.textContent=`${stoneNum}`;
      textOrder("もっと…",);      
      setTimeout(()=>{
        poisonSound.currentTime= 0;
        poisonSound.play()
        useSpecialFlash(1,"fuchsia")
        stoneNum++
        stoneStatusNum.textContent=`${stoneNum}`;
        charmNum++
        kemoshota.src=images[charmNum]
        textOrder("もっとだ!!",);    
        },1200*1)
        setTimeout(()=>{
          poisonSound.currentTime= 0;
          poisonSound.play()
          useSpecialFlash(2,"fuchsia")
          stoneNum++
          stoneStatusNum.textContent=`${stoneNum}`;
          charmNum++
          kemoshota.src=images[charmNum]
          textOrder("さぁ…!",);    
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
            textOrder("よがり狂え!!",);    
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
        textOrder("あらら…bイく寸前に固まっちゃったね。","あり");
        
        let i=0
        function ClickEvent(){
        nextMouse.style.opacity="0"
        clickToNext.style.pointerEvents="none"
        i++
        if(i===1){
          face.src="img/face04.png"
          textOrder("すごいや…。bぬぐっても、ぬぐってもb溢れてくる…","あり")}
        if(i===2){
          face.src="img/face00.png"
          textOrder("よかったね勇者クン。bイく直前の気持ち良さがbこれから永遠に続くんだよ。","あり")}
        if(i===3){
          face.src="img/face08.png"
          textOrder("いや…イきたくてもbイけないままだからb生き地獄と言った方がbいいのかな…。","あり")}
        if(i===4){
          face.src="img/face00.png"
          textOrder("まぁ、いいや。bキミは展示ルームのb一番目立つ場所に飾ってあげる。","あり")}
        if(i===5){
          face.src="img/face00.png"
          textOrder("勇者クンの恥ずかしい姿…b皆にいっぱい見てもらおうね。","あり")} 
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
              textOrder("Ending6b～淫乱勇者のレリーフ～","なし")},3500)
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
      textOrder("ねぇ…b勝負の最中に悪いんだけど…","あり");
      
      
      let i=0
      function ClickEvent(){
      nextMouse.style.opacity="0"
      clickToNext.style.pointerEvents="none"
      i++
      if(i===1){
        kemoshota.src="img/charm01.png";
        face.src="img/face00.png";
        textOrder("勃ってるよ。","あり");
        }
      if(i===2){
        kemoshota.src="img/charm02.png";
        textOrder("あはは、隠さないでよ。b勇者クンの恥ずかしいところbもっと見たいなぁ～。","なし");
        }}
        clickToNext.addEventListener('click',ClickEvent);    
    } 
    if(charmNum===2){textOrder("苦しそうだね。bオナニーしちゃってもbいいんだよ？")}
    if(charmNum===3){
      face.src="img/face07.png";
      textOrder("へぇ…b意外と耐えるねぇ。","あり");
      let i=0
      function ClickEvent(){
      nextMouse.style.opacity="0"
      clickToNext.style.pointerEvents="none"
      i++
      if(i===1){
        face.src="img/face10.png";
        textOrder("それじゃbもっと強力な魔法をbかけてあげる。",);
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
      textOrder("さ、勇者クン…b顔をよく見せて。","あり")
      
      charm_back.style.pointerEvents="none"
      let i=0
      function ClickEvent(){
      nextMouse.style.opacity="0"
      clickToNext.style.pointerEvents="none"
      i++
      if(i===1){
        charmNum++
        kemoshota.src = images[charmNum];
        textOrder("ふふ…b本当に可愛いね。","あり");
        

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
            textOrder("…っ!?","あり");
          },2000);
        }  
        
      if(i===3){
        useSpecialFlash(1,"fuchsia");
        poisonSound.currentTime= 0;
        poisonSound.play()
        charmNum++
        charmStatusNum.textContent=`${charmNum-1}`;
        kemoshota.src = images[charmNum]
        textOrder("んぐっ…bん゛ん゛ん゛ん゛っ…！","あり",);
      };
      if(i===4){
        useSpecialFlash(2,"fuchsia");
        poisonSound.currentTime= 0;
        poisonSound.play()
        charmNum++
        charmStatusNum.textContent=`${charmNum-1}`;
        kemoshota.src = images[charmNum]
        textOrder("んっ…んっ…ぅんん…","あり",);
      }; 
      if(i===5){
        useSpecialFlash(3,"fuchsia");
        
        poisonSound.currentTime= 0;
        poisonSound.play()
        charmNum++
        charmStatusNum.textContent=`${charmNum-1}`;
        kemoshota.src = images[charmNum]
        textOrder("（ぴちゃ…bぴちゃ……bｼﾞｭﾙ………）","あり",);
      }; 
      if(i===6){
        useSpecialFlash(4,"fuchsia");
        poisonSound.currentTime= 0;
        poisonSound.play()
        charmNum++
        charmStatusNum.textContent=`${charmNum-1}`;
        kemoshota.src = images[charmNum]
        textOrder("（ほしい…bもっと…）","あり",);
      }; 
      if(i===7){
        useSpecialFlash(5,"fuchsia");
        charmNum++
        charmStatusNum.textContent=`${charmNum-1}`;
        kemoshota.src = images[charmNum]
        textOrder("（あ……）","あり",);
      }; 
      if(i===8){
        
        charmNum++
        charmStatusNum.textContent=`${charmNum-1}`;
        kemoshota.src = images[charmNum];
        text.style.color="white"
        textOrder("好きだよ、勇者クン。","あり");
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
            textOrder("なっ…!?","あり");
          },2000);
      }; 
      if(i===10){
        textOrder("嘘だっ…！bだって僕たち…bさっきまで敵どうしで…。","あり");
      }; 
      if(i===11){
        
        text.style.left=null;
        text.style.color="white";
        face.style.opacity="1"
        face.src="img/face00.png";
        textOrder("嘘じゃないよ。","あり");
      }; 
      if(i===12){
        charmNum++;
        kemoshota.src=images[charmNum];
        text.style.color="white";
        textOrder("ほら、ボクの胸に手を当てて。bこんなにドキドキしてる。","あり");
      };
      if(i===13){
        face.style.opacity="0"
        text.style.color="yellow";
        text.style.left="100px"
        textOrder("あっ…bあっ…あっ……。","あり");
       }
       if(i===14){
        charmNum++;
        kemoshota.src=images[charmNum];
        textOrder("うぅぅ……。b人形使い様…","あり");
       }
       if(i===15){
        face.style.opacity="1"
        text.style.color="white"
        text.style.left=null;
        face.src="img/face00.png";
        textOrder("パップだよ。","あり");
       }
       if(i===16){
        charmNum++;
        kemoshota.src=images[charmNum];
        face.style.opacity="0"
        text.style.color="yellow"
        text.style.left="100px"
        textOrder("パップ様…b僕も…パップ様のことが…","あり");
       }
       if(i===17){
        face.style.opacity="1"
        text.style.color="white"
        text.style.left=null
        face.src="img/face00.png";
        textOrder("ふふふ…b分かってるよ。","あり");
       }
       if(i===18){guard2.style.display="block"
        face.src="img/face10.png";
        textOrder("続きはボクの部屋でしようか。","あり");
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
          textOrder("Ending4b～魅了の魔法～","なし")},3000)  
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
       textOrder("（ＯＫ、時間を戻すよ！）","あり")
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
       textOrder("やぁ、勇者クン。bさっきぶりだね。","あり");
       }
       if(i===2){
         face.style.opacity="0"
         text.style.color="yellow"
         text.style.left="100px"
         textOrder("？？？","あり");
         }
       if(i===3){
         face.src="img/face00.png";
         face.style.opacity="1"
         text.style.color="white";
         text.style.left=null;
         textOrder("ふふふ、こっちの話。","あり");
       }
        if(i===4){
          face.src="img/face06.png";
          face.style.opacity="1"
          text.style.color="white";
          text.style.left=null;
          textOrder("さ、始めようか。","");
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
        textOrder("（わかった、時間を戻すよ！）","あり")
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
          textOrder("さ、始めようか？","");
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
      textOrder("やぁ、勇者クン。b淫魔としての暮らしはどうだった？","あり")
      },1000)
      
      let i=0
      function ClickEvent(){
      nextMouse.style.opacity="0"
      clickToNext.style.pointerEvents="none"
      i++
     if(i===1){
       face.src="img/face00.png";
       textOrder("ボクとしては…b食事のために、なりふり構わずb奔走するキミの姿が見られてbすごく愉快だったよ。","あり");
       }
       if(i===2){
         face.style.opacity="0"
         text.style.color="yellow"
         text.style.left="100px"
         textOrder("？？？","あり");
         }
       if(i===3){
         face.src="img/face00.png";
         face.style.opacity="1"
         text.style.color="white";
         text.style.left=null;
         textOrder("まぁbこっちのキミに話してもb仕方ないか…。","あり");
       }
        if(i===4){
          face.src="img/face06.png";
          face.style.opacity="1"
          text.style.color="white";
          text.style.left=null;
          textOrder("さ、今度は何して遊ぼうか。","");
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

    textOrder("やぁ、勇者クン。bボクの、かわいいお人形さん。","あり")
    },1000)
    
    let i=0
    function ClickEvent(){
    nextMouse.style.opacity="0"
    clickToNext.style.pointerEvents="none"
    i++
   if(i===1){
     face.src="img/face00.png";
     textOrder("キミのおかげでbぐっすり眠れるようになったよ。","あり");
     }
     if(i===2){
      face.src="img/face00.png";
      textOrder("まぁ、ボロボロになるまで抱き潰してb結局、捨てちゃったんだけどね。","あり");
      }
     if(i===3){
       face.style.opacity="0"
       text.style.color="yellow"
       text.style.left="100px"
       textOrder("？？？","あり");
       }
     if(i===4){
       face.src="img/face00.png";
       face.style.opacity="1"
       text.style.color="white";
       text.style.left=null;
       textOrder("ふふ…bキミは本当にかわいいね。","あり");
     }
      if(i===5){
        face.src="img/face06.png";
        face.style.opacity="1"
        text.style.color="white";
        text.style.left=null;
        textOrder("さ、今度は何して遊ぼうか。","");
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
  
  textOrder("やぁ、勇者クン。bママになってみて、どうだった？。","あり")
  },1000)
  
  let i=0
  function ClickEvent(){
  nextMouse.style.opacity="0"
  clickToNext.style.pointerEvents="none"
  i++
 if(i===1){
   face.src="img/face00.png";
   textOrder("キミが産んだ卵からはb聖魔を合わせ持った強力な新種がb産まれたよ。","あり");
   }
   if(i===2){
    face.src="img/face00.png";
    textOrder("君は子供や孫にすらb交尾と授乳を求められb恍惚とした表情でb卵を産み続けていたよ。","あり");
    }
   if(i===3){
     face.style.opacity="0"
     text.style.color="yellow"
     text.style.left="100px"
     textOrder("？？？bいったい何の話？","あり");
     }
   if(i===4){
     face.src="img/face09.png";
     face.style.opacity="1"
     text.style.color="white";
     text.style.left=null;
     textOrder("ふふふ…b違う世界線の話。","あり");
   }
    if(i===5){
      face.src="img/face06.png";
      face.style.opacity="1"
      text.style.color="white";
      text.style.left=null;
      textOrder("さ、今度は何して遊ぼうか。","");
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

  textOrder("やぁ、勇者クン。bお勤めご苦労様。","あり")
  },1000)
  
  let i=0
  function ClickEvent(){
  nextMouse.style.opacity="0"
  clickToNext.style.pointerEvents="none"
  i++
 if(i===1){
   face.src="img/face00.png";
   textOrder("キミが助けに来た仲間をb何の躊躇いもなく惨殺していく様はb最高だったよ。","あり");
   }
 if(i===2){
     face.style.opacity="0"
     text.style.color="yellow"
     text.style.left="100px"
     textOrder("？？？bいったい何を…？","あり");
     }
   if(i===3){
     face.src="img/face00.png";
     face.style.opacity="1"
     text.style.color="white";
     text.style.left=null;
     textOrder("ふふ…bちょっとした予言だよ。","あり");
   }
    if(i===4){
      face.src="img/face06.png";
      face.style.opacity="1"
      text.style.color="white";
      text.style.left=null;
      textOrder("さ、今度は何して遊ぼうか。","");
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
  textOrder("やあ、勇者クン。bなんだかすごく懐かしいや。b","あり")
  },1000)
  
  let i=0
  function ClickEvent(){
  nextMouse.style.opacity="0"
  clickToNext.style.pointerEvents="none"
  i++
 if(i===1){
   face.src="img/face00.png";
   textOrder("キミがイきたくてもイけないままb100年ぐらいたった頃かな。bふと思い出してb石化を解いてみたんだけど…","あり");
   }
   if(i===2){
    face.src="img/face00.png";
    textOrder("いや、もう…bすごかったよ…bホント…。","あり");
    }
   if(i===3){
     face.style.opacity="0"
     text.style.color="yellow"
     text.style.left="100px"
     textOrder("？？？","あり");
     }
   if(i===4){
     face.src="img/face00.png";
     face.style.opacity="1"
     text.style.color="white";
     text.style.left=null;
     textOrder("ふふふ…b今度は違う世界線にb行けるといいね。","あり");
   }
    if(i===5){
      face.src="img/face06.png";
      face.style.opacity="1"
      text.style.color="white";
      text.style.left=null;
      textOrder("さ、今度は何して遊ぼうか。","");
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
  textOrder("やぁ、勇者クン。b昨晩はお愉しみだったね。","あり")
  },1000)
  
  let i=0
  function ClickEvent(){
  nextMouse.style.opacity="0"
  clickToNext.style.pointerEvents="none"
  i++
 if(i===1){
   face.src="img/face00.png";
   textOrder("キミは本当に献身的でb夢中になってボクに奉仕する様にはb感動すら覚えたよ。","あり");
   }
 if(i===2){
     face.style.opacity="0"
     text.style.color="yellow"
     text.style.left="100px"
     textOrder("？？？","あり");
     }
   if(i===3){
     face.src="img/face00.png";
     face.style.opacity="1"
     text.style.color="white";
     text.style.left=null;
     textOrder("まぁ、でもbプレイとしては普通過ぎたかな。","あり");
   }
    if(i===4){
      face.src="img/face06.png";
      face.style.opacity="1"
      text.style.color="white";
      text.style.left=null;
      textOrder("さ、今度は何して遊ぼうか。","");
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