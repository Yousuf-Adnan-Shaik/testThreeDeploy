// import "./style.css";
import * as THREE from "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.module.js";
// import { OrbitControls } from "";
// import * as dat from "dat.gui";
// import { SpotLightHelper } from "three";

// Debug
// const gui = new dat.GUI();

// Canvas
const canvas = document.querySelector(".webgl");

// Scene
const scene = new THREE.Scene();

// Objects
const geometry = new THREE.TorusGeometry(0.7, 0.2, 16, 100);

const particlesGeometry = new THREE.BufferGeometry();
const particleCnt = 400;

const posArray = new Float32Array(particleCnt * 3);

for (let i = 0; i < particleCnt * 3; i++) {
  posArray[i] = (Math.random() - 0.5) * (Math.random() * 5);
}

particlesGeometry.setAttribute(
  "position",
  new THREE.BufferAttribute(posArray, 3)
);

const material = new THREE.PointsMaterial({
  size: 0.005,
  // map: cross,
  transparent: true,
});

const particlematerial = new THREE.PointsMaterial({
  size: 0.004,
  transparent: true,
});

const sphere = new THREE.Points(geometry, material);
const particleMesh = new THREE.Points(particlesGeometry, particlematerial);
scene.add(sphere, particleMesh);

// Materials

// const material = new THREE.MeshBasicMaterial()
// material.color = new THREE.Color(0xff0000)

// // Mesh
// const sphere = new THREE.Mesh(geometry,material)
// scene.add(sphere)

// Lights

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.x = 2;
pointLight.position.y = 3;
pointLight.position.z = 4;
scene.add(pointLight);

/**
 * Sizes
 */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

window.addEventListener("resize", () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100
);
camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 2;
scene.add(camera);

// Controls
// const controls = new OrbitControls(camera, canvas)
// controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// MOUSE MOVES

document.addEventListener("mousemove", animateParticles);

let mouseX = 0;
let mouseY = 0;

function animateParticles(event) {
  mouseY = event.clientX;
  mouseX = event.clientY;
}

// GRID HELPER
// const lightHelper = new THREE.PointLightHelper(pointLight)
// const gridHelper = new THREE.gridHelper(200, 50)
// scene.add(lightHelper, gridHelper)

// SETTING UP ORBITAL CONTROLS

// const controls = new OrbitControls(camera, renderer.domElement);

// POPULATING SPACE WITH RANDOM MATERIALS

// function addStar() {
//   const geometry = new THREE.SphereGeometry(0.25, 24, 24);
//   const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
//   const star = new THREE.Mesh(geometry, material);

//   const [x, y, z] = Array(3)
//     .fill()
//     .map(() => THREE.MathUtils.randFloatSpread(100));

//   star.position.set(x, y, z);
//   scene.add(star);
// }

// Array(200).fill().forEach(addStar);

// const textureLoader = new THREE.TextureLoader();
// const spaceTexture = textureLoader.load("");

const spaceTexture = new THREE.TextureLoader().load('space.jpg')
scene.background = spaceTexture;

// MOON

// const moonTexture = new THREE.TextureLoader().load("moon.jpg");

// Texture mapping

/**
 * Animate
 */

const clock = new THREE.Clock();

const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  // Update objects
  sphere.rotation.y = 0.4 * elapsedTime;
  // sphere.rotation.x = .5 * elapsedTime
  particleMesh.rotation.y = -mouseY * (elapsedTime * 0.0001);
  particleMesh.rotation.x = -mouseX * (elapsedTime * 0.0001);
  particleMesh.rotation.z = mouseY * (elapsedTime * 0.0001);
  // Update Orbital Controls
  //   controls.update();

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);

  // Render
  renderer.render(scene, camera);
};

tick();

// const scene = new THREE.Scene();

/**
 * Sizes
 */
// const sizes = {
//     width: window.innerWidth,
//     height: window.innerHeight
// }

// window.addEventListener('resize', () =>
// {
//     // Update sizes
//     sizes.width = window.innerWidth
//     sizes.height = window.innerHeight

//     // Update camera
//     camera.aspect = sizes.width / sizes.height
//     camera.updateProjectionMatrix()

//     // Update renderer
//     renderer.setSize(sizes.width, sizes.height)
//     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
// })

// /**
//  * Camera
//  */
// // Base camera
// const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
// camera.position.x = 0
// camera.position.y = 0
// camera.position.z = 2
// scene.add(camera)

// /**
//  * Renderer
//  */
// const renderer = new THREE.WebGLRenderer({
//   canvas: document.querySelector(".webgl"),
// });
// renderer.setSize(sizes.width, sizes.height)
// renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))space

// renderer.setPixelRatio(window.devicePixelRatio);
// renderer.setSize(window.innerWidth, window.innerHeight);

// camera.position.setZ(30);

// const geometry = new THREE.TorusGeometry(.7, .2, 16, 100);

// const particlesGeometry = new THREE.BufferGeometry();
// const particleCnt = 500;

// const posArray = new Float32Array(particleCnt * 3);

// for (let i = 0; i < particleCnt * 3; i++) {
//   posArray[i] = (Math.random() - 0.5) * (Math.random() * 5);
// }

// particlesGeometry.setAttribute(
//   "position",
//   new THREE.BufferAttribute(posArray, 3)
// );

// const material = new THREE.PointsMaterial({
//     size: 0.005,
//     // map: cross,
//     transparent: true
// })

// const particlematerial = new THREE.PointsMaterial({
//     size: 0.05,
//     transparent: true
// })

// const sphere = new THREE.Points(geometry, material)
// const particleMesh = new THREE.Points(particlesGeometry, particlematerial);
// scene.add(sphere, particleMesh)

// // const material = new THREE.MeshBasicMaterial({color: 0xFF6347, wireframe: true});
// const torus = new THREE.Mesh(geometry, material)

// // scene.add(torus)

// function animate() {
//   requestAnimationFrame(animate);

// //   torus.rotation.x += 0.01
//   torus.rotation.y += 0.01
// //   torus.rotation.z += 0.01

//   renderer.render(scene, camera);
// }
// animate();
