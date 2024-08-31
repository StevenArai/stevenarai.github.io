function setImageStyle(img, props) {
    for (const [key, value] of Object.entries(props)) {
        img.style[key] = value;
    }
}

function rectifyImageDiv() {
    setImageStyle(document.getElementById("image"), {
        height: window.innerHeight + "px",
        width: window.innerWidth + "px",
    });
}

var blurValueTarget = 20;
var blurValueNow = 20;
var lightUpCount = 0;


window.onload = function () {
    console.log('%c __  __     ______     ______  \n/\\ \\_\\ \\   /\\  __ \\   /\\__  _\\ \n\\ \\  __ \\  \\ \\  __ \\  \\/_/\\ \\/ \n \\ \\_\\ \\_\\  \\ \\_\\ \\_\\    \\ \\_\\ \n  \\/_/\\/_/   \\/_/\\/_/     \\/_/ \n                               \n%cDEBUG CONSOLE\tDEBUG MODE = %cDISABLED\n%cGithub: @StevenArai', "color:orange", "color:skyblue", "color:orange", "color:violet;font-size:24px");

    document.getElementById("square").style.display = "flex";
    const totalImages = 175;
    let loadedImages = 0;
    const loadingBar = document.getElementById("loading-bar");
    const loadingMask = document.getElementById("loading-mask");
    const background = document.getElementById("body");

    function updateProgress() {
        const loadingCover = document.getElementById("loading-cover");
        this.id.replace(/[^\d]/g, " ")<6?lightUpCount++:0;
        loadedImages++;
        const progress = Math.floor((loadedImages / totalImages) * 100);
        loadingCover.style.filter = `sepia(${1 - progress / 100})`;
        setImageStyle(loadingBar, { width: `${progress}%` });
        document.title = `正在加载 - ${progress}%`;
        if(lightUpCount < 6){
            blurValueTarget = 20;
        }
        else if (loadedImages === totalImages) {
            blurValueTarget = 0;
            background.style.backgroundColor = "#222";
            setImageStyle(loadingMask, { opacity: 0, pointerEvents: "none" });
            document.title = "永不消逝的回忆";
            setTimeout(() => loadingMask.remove(), 500);
        }
        else {
            blurValueTarget = 15-progress*0.1;
        }
    }

    for (let i = 0; i < totalImages; i++) {
        const direction = i < 43 ? "portrait" : "landscape";
        const img = document.createElement("img");
        img.src = `./${direction}/thumb/${i}.webp`;
        img.alt = `Image ${i}`;
        img.id = `img${i}`;
        img.onclick = () => showImage(i);
        img.onload = img.onerror = updateProgress;
        document.getElementById(direction).appendChild(img);
    }

    setInterval(() => {
        const blurDOM = document.getElementById("gallery-slink");
        blurValueNow = (blurValueTarget + blurValueNow * 9) / 10;
        setImageStyle(blurDOM, {
            filter: `blur(${blurValueNow}px) brightness(${1 - blurValueNow * 0.05}) saturate(${1 + blurValueNow * 0.1})`,
        });
    }, 20);
}

function showImage(id) {
    rectifyImageDiv();
    const warpDOM = document.getElementById("gallery-warp");
    const imageOnList = document.getElementById("img" + id);
    const imagePosition = imageOnList.getBoundingClientRect();
    setImageStyle(imageOnList, { opacity: 0 });

    const imgSrc = id < 43 ? `./portrait/thumb/${id}.webp` : `./landscape/thumb/${id}.webp`;
    document.getElementById("image").innerHTML = `<img src="${imgSrc}" alt="Image ${id}" id="showing" onclick="hideImage(${id})"><a id="download" download="picture_${id}.webp" href="./rawimg/${id}.webp"> ▼ 下载原图 </a>`;

    const showing = document.getElementById("showing");
    const download = document.getElementById("download");
    setImageStyle(showing, {
        maxWidth: "40%",
        top: imagePosition.y + "px",
        left: imagePosition.x + "px",
        transform: "rotateZ(5deg)",
    });
    setImageStyle(download, { transform: "translate3d(-50%, -50%, -200px) rotateX(90deg)", bottom: "-10vh" });
    setImageStyle(document.getElementById("image"), { display: "block" });

    setTimeout(() => {
        setImageStyle(showing, {
            maxWidth: "100%",
            top: "0px",
            left: "0px",
            transform: id % 2 ? "rotateZ(0deg) rotateY(360deg)" : "rotateZ(0deg) rotateY(-360deg)",
        });
        setImageStyle(warpDOM, { transform: "translateZ(-200px)" });
        blurValueTarget = 10;
        setImageStyle(download, { transform: "translate3d(-50%, -50%, 0)", bottom: "5vh" });
    }, 10);
}

function hideImage(id) {
    const imageOnList = document.getElementById("img" + id);
    const imagePosition = imageOnList.getBoundingClientRect();
    const showing = document.getElementById("showing");
    const download = document.getElementById("download");

    setImageStyle(imageOnList, { opacity: 1 });
    setImageStyle(showing, {
        opacity: 0,
        maxWidth: "40%",
        top: imagePosition.y + "px",
        left: imagePosition.x + "px",
        transform: "rotateZ(5deg)",
    });
    setImageStyle(document.getElementById("gallery-warp"), { transform: "translateZ(0px)" });
    blurValueTarget = 0;
    setImageStyle(download, { transform: "translate3d(-50%, 20vh, -200px)", bottom: "-10vh" });

    setTimeout(() => {
        setImageStyle(document.getElementById("image"), { display: "none" });
    }, 400);
}
