function rectifyImageDiv() {
    document.getElementById("image").style.height = window.innerHeight + "px";
    document.getElementById("image").style.width = window.innerWidth + "px";
}

var blurValueTarget = 0;
var blurValueNow = 0;

window.onload = function () {
    console.log('%c __  __     ______     ______  \n/\\ \\_\\ \\   /\\  __ \\   /\\__  _\\ \n\\ \\  __ \\  \\ \\  __ \\  \\/_/\\ \\/ \n \\ \\_\\ \\_\\  \\ \\_\\ \\_\\    \\ \\_\\ \n  \\/_/\\/_/   \\/_/\\/_/     \\/_/ \n                               \n%cDEBUG CONSOLE\tDEBUG MODE = %cDISABLED\n%cGithub: @StevenArai',"color:orange","color:skyblue","color:orange","color:violet;font-size:24px");
/*    for (let i = 0; i < 175; i++) {
        var direction;
        if (i < 43) {
            direction = "portrait";
        }
        else {
            direction = "landscape";
        }
        document.getElementById(direction).innerHTML += `<img src=\"./${direction}/thumb/${i}.jpg\" alt=\"Image ${i}\" id=\"img${i}\" onclick="showImage(${i})">`;
    }
    setInterval(() => {
        blurDOM = document.getElementById("image");
        blurValueNow = (blurValueTarget + blurValueNow * 9) / 10;
        blurDOM.style.backdropFilter = `blur(${blurValueNow}px) brightness(${1-blurValueNow * 0.05})`;
    }, 20)*/

    const totalImages = 175;
    let loadedImages = 0;

    const loadingBar = document.getElementById("loading-bar");
    const loadingPercentage = document.getElementById("loading-percentage");
    const loadingMask = document.getElementById("loading-mask");

    function updateProgress() {
        loadedImages++;
        const progress = Math.floor((loadedImages / totalImages) * 100);
        loadingBar.style.width = `${progress}%`;
        loadingPercentage.innerText = `${progress}%`;

        if (loadedImages === totalImages) {
            setTimeout(() => {
                loadingMask.style.opacity = 0;
                loadingMask.style.pointerEvents = "none";
                setTimeout(() => loadingMask.remove(), 500); // 移除遮罩
            }, 500); // 进度条显示100%后延迟移除
        }
    }

    for (let i = 0; i < totalImages; i++) {
        var direction = i < 43 ? "portrait" : "landscape";
        const img = document.createElement("img");
        img.src = `./${direction}/thumb/${i}.jpg`;
        img.alt = `Image ${i}`;
        img.id = `img${i}`;
        img.onclick = () => showImage(i);
        img.onload = updateProgress;
        img.onerror = updateProgress;
        document.getElementById(direction).appendChild(img);
    }

    setInterval(() => {
        const blurDOM = document.getElementById("image");
        blurValueNow = (blurValueTarget + blurValueNow * 9) / 10;
        blurDOM.style.backdropFilter = `blur(${blurValueNow}px) brightness(${1-blurValueNow * 0.05}) saturate(${1+blurValueNow * 0.1})`;
    }, 20);
}

function showImage(id) {
    rectifyImageDiv();
    warpDOM = document.getElementById("gallery-warp");
    imageOnList = document.getElementById("img" + id);
    imagePosition = imageOnList.getBoundingClientRect(); // Get the position of the image on the page
    imageOnList.style.opacity = 0;
    if (id < 43) document.getElementById("image").innerHTML = `<img src=\"./portrait/thumb/${id}.jpg\" alt=\"Image ${id}\" id="showing" onclick="hideImage(${id})"><a id="download" download="picture_${id}.png" href="./rawimg/${id}.png"> ▼ 下载原图 </a>`;
    else document.getElementById("image").innerHTML = `<img src=\"./landscape/thumb/${id}.jpg\" alt=\"Image ${id}\" id="showing" onclick="hideImage(${id})"><a id="download" download="picture_${id}.png" href="./rawimg/${id}.png"> ▼ 下载原图 </a>`;

    document.getElementById("showing").style.maxWidth = "40%";
    document.getElementById("showing").style.top = imagePosition.y + "px";
    document.getElementById("showing").style.left = imagePosition.x + "px";
    document.getElementById("showing").style.transform = "rotateZ(5deg)";
    document.getElementById("image").style.display = "block";
    
    document.getElementById("download").style.transform = "translate(-50%, -50%) rotateX(90deg)";
    document.getElementById("download").style.bottom = "-10vh";
    // Trigger the transition
    setTimeout(() => {
        document.getElementById("showing").style.maxWidth = "100%";
        document.getElementById("showing").style.top = 0 + "px";
        document.getElementById("showing").style.left = 0 + "px";
        if (id % 2) document.getElementById("showing").style.transform = "rotateZ(0deg) rotateY(360deg)";
        else document.getElementById("showing").style.transform = "rotateZ(0deg) rotateY(-360deg)";
        warpDOM.style.transform = "translateZ(-200px)";
        blurValueTarget = 10;
        document.getElementById("download").style.transform = "translate(-50%, -50%) rotateX(0deg)";
        document.getElementById("download").style.bottom = "5vh";
    }, 10);
}
function hideImage(id) {
    imageOnList = document.getElementById("img" + id);
    imagePosition = imageOnList.getBoundingClientRect(); // Get the position of the image on the page
    imageOnList.style.opacity = 1;
    document.getElementById("showing").style.opacity = 0;
    document.getElementById("showing").style.maxWidth = "40%";
    document.getElementById("showing").style.top = imagePosition.y + "px";
    document.getElementById("showing").style.left = imagePosition.x + "px";
    document.getElementById("showing").style.transform = "rotateZ(5deg)";
    warpDOM.style.transform = "translateZ(0px)";
    blurValueTarget = 0;
    document.getElementById("download").style.transform = "translate(-50%, -50%) rotateX(90deg)";
    document.getElementById("download").style.bottom = "-10vh";
    setTimeout(() => {
        document.getElementById("image").style.display = "none";
    }, 400);
    // imageOnList.style.display = "block"
}

function downloadImage(id) {
    
}