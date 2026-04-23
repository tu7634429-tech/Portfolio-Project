import { useEffect, useRef } from "react";
import "./HyperspeedCanvas.scss";

const HyperspeedCanvas = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let width = 0;
    let height = 0;
    let stars = [];
    const STAR_COUNT = 180;

    const resize = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;

      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      stars = Array.from({ length: STAR_COUNT }, () => ({
        x: Math.random() * width - width / 2,
        y: Math.random() * height - height / 2,
        z: Math.random() * width,
        o: Math.random() * 0.8 + 0.2,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      ctx.fillStyle = "#050505";
      ctx.fillRect(0, 0, width, height);

      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        s.z -= 10;

        if (s.z <= 0) {
          s.x = Math.random() * width - width / 2;
          s.y = Math.random() * height - height / 2;
          s.z = width;
          s.o = Math.random() * 0.8 + 0.2;
        }

        const k = 128 / s.z;
        const px = s.x * k + width / 2;
        const py = s.y * k + height / 2;

        if (px < 0 || px >= width || py < 0 || py >= height) {
          s.x = Math.random() * width - width / 2;
          s.y = Math.random() * height - height / 2;
          s.z = width;
          continue;
        }

        const size = (1 - s.z / width) * 2.4;
        const tailX = px - (s.x * 0.015);
        const tailY = py - (s.y * 0.015);

        ctx.beginPath();
        ctx.strokeStyle = `rgba(249, 115, 22, ${s.o * 0.35})`;
        ctx.lineWidth = Math.max(size, 0.4);
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(px, py);
        ctx.stroke();

        ctx.beginPath();
        ctx.fillStyle = `rgba(255,255,255,${s.o})`;
        ctx.arc(px, py, Math.max(size, 0.6), 0, Math.PI * 2);
        ctx.fill();
      }

      animationRef.current = requestAnimationFrame(draw);
    };

    resize();
    draw();

    const handleResize = () => resize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <div className="hyperspeed-canvas">
      <canvas ref={canvasRef} />
    </div>
  );
};

export default HyperspeedCanvas;