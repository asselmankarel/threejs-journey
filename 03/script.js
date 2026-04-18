import * as THREE from "three";

const canvas = document.querySelector("canvas.webgl");
const scene = new THREE.Scene();
const mesh = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: "red" }),
);

scene.add(mesh);

const size = {
  width: 800,
  height: 600,
  aspect: () => size.width / size.height,
};

const camera = new THREE.PerspectiveCamera(75, size.aspect());
camera.position.z = 3;

scene.add(camera);

const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});

renderer.setSize(size.width, size.height);

renderer.render(scene, camera);
