import { useEffect, useRef } from "react";
import * as THREE from "three";

const STAR_COUNT = 1400;
const FIELD_SPREAD = 400;

/**
 * Decorative parallax starfield.
 *
 * Everything lives inside a single effect so the scene is created once and
 * torn down properly. The previous implementation ran in the component body,
 * which built a fresh WebGLRenderer, 1000 meshes and an extra animation loop
 * on every render — doubled by StrictMode, and never disposed.
 *
 * The stars are one Points object rather than 1000 individual meshes: one draw
 * call instead of a thousand.
 */
const Starfield = ({ dark = true }) => {
  const canvasRef = useRef(null);
  // Handles the theme effect needs, without rebuilding the scene.
  const sceneRef = useRef(null);
  // Read inside the setup effect, which deliberately does not depend on `dark`.
  const darkRef = useRef(dark);
  darkRef.current = dark;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    // Bail out rather than throw on machines with no WebGL at all.
    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        alpha: true,
      });
    } catch {
      return undefined;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.set(0, 0, 1);

    // --- stars: a single BufferGeometry of points -------------------------
    const positions = new Float32Array(STAR_COUNT * 3);
    for (let i = 0; i < positions.length; i += 1) {
      positions[i] = THREE.MathUtils.randFloatSpread(FIELD_SPREAD);
    }
    const starGeometry = new THREE.BufferGeometry();
    starGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3),
    );
    const starMaterial = new THREE.PointsMaterial({
      size: 0.7,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.9,
    });
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    scene.add(new THREE.AmbientLight(0xffffff, 1.5));

    const applyTheme = (isDark) => {
      // Stars invert in light mode: dark points on a pale sky. The clear
      // colour must track `primary` in tailwind.config.js or a seam appears
      // where the canvas meets the page.
      starMaterial.color.set(isDark ? 0xffffff : 0x64748b);
      starMaterial.opacity = isDark ? 0.9 : 0.55;
      renderer.setClearColor(isDark ? 0x0b1120 : 0xf8fafc, 1);
    };
    applyTheme(darkRef.current);

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    // --- interaction ------------------------------------------------------
    let scrollTarget = 0;
    const onScroll = () => {
      scrollTarget = window.scrollY;
    };

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    // --- render loop ------------------------------------------------------
    let frameId = null;
    let scrollCurrent = 0;

    const renderFrame = () => {
      // Ease toward the scroll position so the parallax feels weighted.
      scrollCurrent += (scrollTarget - scrollCurrent) * 0.06;
      camera.position.z = 1 + scrollCurrent * 0.012;
      camera.position.x = scrollCurrent * 0.0004;
      stars.rotation.y += 0.0002;
      renderer.render(scene, camera);
    };

    const animate = () => {
      frameId = window.requestAnimationFrame(animate);
      renderFrame();
    };

    const start = () => {
      if (frameId === null && !reduceMotion) animate();
    };
    const stop = () => {
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
        frameId = null;
      }
    };

    // Don't burn a GPU loop on a tab nobody is looking at.
    const onVisibility = () => (document.hidden ? stop() : start());
    document.addEventListener("visibilitychange", onVisibility);

    if (reduceMotion) {
      renderFrame(); // one static frame, no animation
    } else {
      start();
    }

    sceneRef.current = { applyTheme, renderFrame };

    return () => {
      stop();
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      sceneRef.current = null;
      starGeometry.dispose();
      starMaterial.dispose();
      scene.clear();
      renderer.dispose();
      renderer.forceContextLoss();
    };
  }, []);

  // Recolour in place when the theme flips — no scene rebuild.
  useEffect(() => {
    if (!sceneRef.current) return;
    sceneRef.current.applyTheme(dark);
    // Repaint immediately in case the loop is paused (reduced motion / hidden).
    sceneRef.current.renderFrame();
  }, [dark]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      // z-0, not a negative index: it must paint *above* the body background
      // (which is the reduced-motion fallback) but below the content wrapper.
      className="fixed inset-0 z-0 h-full w-full"
    />
  );
};

export default Starfield;
