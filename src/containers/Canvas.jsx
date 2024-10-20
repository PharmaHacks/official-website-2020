import React, { useRef, useEffect, useState, useCallback } from "react";

const Canvas = (props) => {
    const { 
        draw, 
        fps = 30, 
        establishContext, 
        establishCanvasHeight,
        establishCanvasWidth, 
        width = "100%", 
        height = "100%", 
        ...rest 
    } = props;
    const canvasRef = useRef(null);
    const [context, setContext] = useState(null);

    const resizeCanvas = useCallback((context) => {
        const canvas = context.canvas;
        const { width, height } = canvas.getBoundingClientRect();

        if (canvas.width !== width || canvas.height !== height) {
            // const { devicePixelRatio: ratio = 1 } = window;
            canvas.width = width;
            canvas.height = height;
      
            if (establishCanvasWidth) {
                establishCanvasWidth(canvas.width);
            }
            if (establishCanvasHeight) {
                establishCanvasHeight(canvas.height);
            }
            // context.scale(ratio, ratio);
            return true;
        }
        return false;
    }, [establishCanvasWidth, establishCanvasHeight]);

    useEffect(() => {
        //i.e. value other than null or undefined
        if (canvasRef.current) {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext("2d");
            setContext(ctx);
            resizeCanvas(ctx);
            if (establishContext) {
                establishContext(ctx);
            }
        } else {
            // if canvasRef set to null, keep state variable consistent with this
            setContext(null);
        }
    }, [resizeCanvas, establishContext]);

    useEffect(() => {
        let animationFrameId, fpsInterval, now, then, elapsed;

        if (context) {
            const render = () => {
                animationFrameId = window.requestAnimationFrame(render);
                now = Date.now();
                elapsed = now - then;
                if (elapsed > fpsInterval) {
                    // Get ready for next frame by setting then=now, but also adjust for your
                    // specified fpsInterval not being a multiple of RAF's interval (16.7ms)
                    then = now - (elapsed % fpsInterval);
                    draw();
                }
            };
            const startRendering = (fps) => {
                fpsInterval = 1000 / fps;
                then = Date.now();
                render();
            };
            startRendering(fps);
        }
        return () => {
            window.cancelAnimationFrame(animationFrameId);
        };
    }, [fps, draw, context, resizeCanvas]);


    return (
        <canvas ref={canvasRef} {...rest} style={{ backgroundColor: '#000D1B', width, height }} />
    );
};

export default Canvas;