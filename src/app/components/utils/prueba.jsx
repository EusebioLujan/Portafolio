"use client";
import React, { useEffect, useRef } from "react";
import "../../style.css";

export default function Prueba() {
  const STAR_COLOR = "#fff";
  const STAR_SIZE = 3;
  const STAR_MIN_SCALE = 0.2;
  const OVERFLOW_THRESHOLD = 50;
  const STAR_COUNT =
    (typeof window !== "undefined"
      ? window.innerWidth + window.innerHeight
      : 0) / 8;

  const canvasRef = useRef(null);
  const contextRef = useRef(null);

  let scale = 1, // device pixel ratio
    width,
    height;

  let stars = [];

  let pointerX, pointerY;

  let velocity = { x: 0, y: 0, tx: 0, ty: 0, z: 0.0009 };

  let touchInput = false;

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    contextRef.current = context;

    generate();
    resize();
    step();

    window.onresize = resize;
    canvas.onmousemove = onMouseMove;
    canvas.ontouchmove = onTouchMove;
    canvas.ontouchend = onMouseLeave;
    document.onmouseleave = onMouseLeave;

    // Clean up event listeners on unmount
    return () => {
      window.onresize = null;
      canvas.onmousemove = null;
      canvas.ontouchmove = null;
      canvas.ontouchend = null;
      document.onmouseleave = null;
    };
  }, []);

  function generate() {
    for (let i = 0; i < STAR_COUNT; i++) {
      stars.push({
        x: 0,
        y: 0,
        z: STAR_MIN_SCALE + Math.random() * (1 - STAR_MIN_SCALE),
      });
    }
  }

  function placeStar(star) {
    star.x = Math.random() * width;
    star.y = Math.random() * height;
  }

  function recycleStar(star) {
    let direction = "z";

    let vx = Math.abs(velocity.x),
      vy = Math.abs(velocity.y);

    if (vx > 1 || vy > 1) {
      let axis;

      if (vx > vy) {
        axis = Math.random() < vx / (vx + vy) ? "h" : "v";
      } else {
        axis = Math.random() < vy / (vx + vy) ? "v" : "h";
      }

      if (axis === "h") {
        direction = velocity.x > 0 ? "l" : "r";
      } else {
        direction = velocity.y > 0 ? "t" : "b";
      }
    }

    star.z = STAR_MIN_SCALE + Math.random() * (1 - STAR_MIN_SCALE);

    if (direction === "z") {
      star.z = 0.1;
      star.x = Math.random() * width;
      star.y = Math.random() * height;
    } else if (direction === "l") {
      star.x = -OVERFLOW_THRESHOLD;
      star.y = height * Math.random();
    } else if (direction === "r") {
      star.x = width + OVERFLOW_THRESHOLD;
      star.y = height * Math.random();
    } else if (direction === "t") {
      star.x = width * Math.random();
      star.y = -OVERFLOW_THRESHOLD;
    } else if (direction === "b") {
      star.x = width * Math.random();
      star.y = height + OVERFLOW_THRESHOLD;
    }
  }

  function resize() {
    scale = window.devicePixelRatio || 1;

    width = window.innerWidth * scale;
    height = window.innerHeight * scale;

    canvasRef.current.width = width;
    canvasRef.current.height = height;

    stars.forEach(placeStar);
  }

  function step() {
    contextRef.current.clearRect(0, 0, width, height);

    update();
    render();

    requestAnimationFrame(step);
  }

  function update() {
    velocity.tx *= 0.96;
    velocity.ty *= 0.96;

    velocity.x += (velocity.tx - velocity.x) * 0.1;
    velocity.y += (velocity.ty - velocity.y) * 0.1;

    stars.forEach((star) => {
      star.x += velocity.x * star.z;
      star.y += velocity.y * star.z;

      star.x += (star.x - width / 2) * velocity.z * star.z;
      star.y += (star.y - height / 2) * velocity.z * star.z;
      star.z += velocity.z;

      // recycle when out of bounds
      if (
        star.x < -OVERFLOW_THRESHOLD ||
        star.x > width + OVERFLOW_THRESHOLD ||
        star.y < -OVERFLOW_THRESHOLD ||
        star.y > height + OVERFLOW_THRESHOLD
      ) {
        recycleStar(star);
      }
    });
  }

  function render() {
    stars.forEach((star) => {
      contextRef.current.beginPath();
      contextRef.current.lineCap = "round";
      contextRef.current.lineWidth = STAR_SIZE * star.z * scale;
      contextRef.current.globalAlpha = 0.5 + 0.5 * Math.random();
      contextRef.current.strokeStyle = STAR_COLOR;

      contextRef.current.beginPath();
      contextRef.current.moveTo(star.x, star.y);

      var tailX = velocity.x * 2,
        tailY = velocity.y * 2;

      // stroke() wont work on an invisible line
      if (Math.abs(tailX) < 0.1) tailX = 0.5;
      if (Math.abs(tailY) < 0.1) tailY = 0.5;

      contextRef.current.lineTo(star.x + tailX, star.y + tailY);

      contextRef.current.stroke();
    });
  }

  function movePointer(x, y) {
    if (typeof pointerX === "number" && typeof pointerY === "number") {
      let ox = x - pointerX,
        oy = y - pointerY;

      velocity.tx = velocity.tx + (ox / 50) * scale * (touchInput ? 1 : -1);
      velocity.ty = velocity.ty + (oy / 50) * scale * (touchInput ? 1 : -1);
    }

    pointerX = x;
    pointerY = y;
  }

  function onMouseMove(event) {
    touchInput = false;

    movePointer(event.clientX, event.clientY);
  }

  function onTouchMove(event) {
    touchInput = true;

    movePointer(event.touches[0].clientX, event.touches[0].clientY, true);

    event.preventDefault();
  }

  function onMouseLeave() {
    pointerX = null;
    pointerY = null;
  }

  return (
    <>
      <div className="relative z-10">
        {typeof window !== "undefined" && <canvas ref={canvasRef}></canvas>}
      </div>
    </>
  );
}
