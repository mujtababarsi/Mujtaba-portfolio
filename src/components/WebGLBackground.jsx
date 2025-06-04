import React, { useEffect, useRef } from "react";

export default function WebGLBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Load Three.js from CDN
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/three@latest/build/three.min.js";
    document.body.appendChild(script);

    script.onload = () => {
      // Initialize Three.js Scene
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 5;

      const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);

      // Create DNA Helix using Cylinder Geometry
      const helixGroup = new THREE.Group();
      const material = new THREE.MeshBasicMaterial({ color: 0x00d4ff });

      for (let i = 0; i < 20; i++) {
        const cylinder = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 0.5, 32), material);
        cylinder.position.y = i * 0.3 - 3;
        cylinder.position.x = Math.sin(i * 0.5) * 1.5;
        cylinder.position.z = Math.cos(i * 0.5) * 1.5;
        helixGroup.add(cylinder);
      }
      scene.add(helixGroup);

      // Create Data Flow Particles
      const particleGeometry = new THREE.BufferGeometry();
      const particlesCount = 100;
      const positions = new Float32Array(particlesCount * 3);

      for (let i = 0; i < particlesCount * 3; i++) {
        positions[i] = (Math.random() - 0.5) * 10; // Spread particles randomly
      }

      particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      const particleMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.05 });
      const particles = new THREE.Points(particleGeometry, particleMaterial);
      scene.add(particles);

      // Animation Loop
      const animate = () => {
        requestAnimationFrame(animate);
        helixGroup.rotation.y += 0.01; // Rotate DNA helix
        particles.rotation.y -= 0.002; // Slight particle movement
        renderer.render(scene, camera);
      };
      animate();

      // Resize Handling
      window.addEventListener("resize", () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      });
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-[-1]" />;
}

