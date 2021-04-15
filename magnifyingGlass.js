export default function addMagnigyingGlass(map) {

    let img;
    let cursorPos = [];
    let bgSize = 2;
    let imgZoom = 2;
    let glassSize = 120;
    let canvas = document.getElementsByClassName("mapboxgl-canvas")[0];

    //insert Magnifying div into body


    map.on("load", () => {
        captureCanvas(map)

        canvas.addEventListener("mousemove", mouseMove);
        canvas.addEventListener("touchstart", mouseMove);
        canvas.addEventListener("touchmove", mouseMove);


        map.on("movestart", () => {
            captureCanvas(map)
        })

        map.on("moveend", () => {
            captureCanvas(map)
        })

    })

    const mouseMove = (e) => {
        let x, y;
        if (e.type === 'touchmove' || e.type === 'touchstart') {
            var touch = e.touches[0];
            x = touch.pageX;
            y = touch.pageY;
        } else {
            x = e.offsetX;
            y = e.offsetY;
        }
        cursorPos = [x, y]
        updateGlass()
    };
    const isloaded = false;
    const updateGlass = () => {
        if (img && cursorPos.length > 0) {
            document.getElementsByClassName("mapboxgl-canvas-container")[0].style.cursor = 'none'
            const magnifyingGlass = document.getElementById("magnifying-glass-tool")
            magnifyingGlass.style.top = `${(cursorPos[1]) - (glassSize / 2)}px`;
            magnifyingGlass.style.left = `${(cursorPos[0]) - (glassSize / 2)}px`;
            magnifyingGlass.style.backgroundImage = 'url(' + img + ')'
            magnifyingGlass.style.height = glassSize
            magnifyingGlass.style.width = glassSize
            magnifyingGlass.style.backgroundPosition = `-${(cursorPos[0] * imgZoom) - (glassSize / 2)}px -${(cursorPos[1] * imgZoom) - (glassSize / 2)}px`;
            magnifyingGlass.style.backgroundSize = `${bgSize}px`

        }
    }


    const captureCanvas = (map) => {
        console.log('here');
        if (!map.isStyleLoaded()) {
            setTimeout(() => {
                captureCanvas();
            }, 200);
        } else {
            // const canvas = document.getElementsByClassName("mapboxgl-canvas")[0];
            bgSize = (canvas.getAttribute("width") / window.devicePixelRatio) * imgZoom;
            img = canvas.toDataURL("image/png")
            console.log(img);
            // updateGlass()
        }
    }
}