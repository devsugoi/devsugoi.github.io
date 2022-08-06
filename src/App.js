import "./App.css";
import SideBar from "./components/SideBar";
import ContentContainer from "./components/ContentContainer";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useState } from "react";
import { GiWhiteBook } from "react-icons/gi";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

// codes are messy, will be cleaned soon

function App() {
  let scene = new THREE.Scene();
  let camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  let renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector("#bg"),
  });

  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0xffffff);
  camera.position.z = 0.01;
  camera.position.x = 0.0002;
  camera.rotation.y = 0.0002;

  renderer.render(scene, camera);

  let geometry = new THREE.TorusGeometry(10, 3, 16, 100);
  let material = new THREE.MeshStandardMaterial({ color: 0x000000 }); //#FF0000
  let torus = new THREE.Mesh(geometry, material);

  window.addEventListener("resize", onWindowResize, false);

  let pointLight = new THREE.PointLight(0xffffff);
  pointLight.position.set(5, 5, 5);

  let ambientLight = new THREE.AmbientLight(0xffffff);

  let lightHelper = new THREE.PointLightHelper(pointLight);

  let gridHelper = new THREE.GridHelper(200, 50);

  let controls = new OrbitControls(camera, renderer.domElement);

  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;

    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    setbackgroundsize();
  }

  function addStar() {
    let geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
    let material = new THREE.MeshStandardMaterial({ color: 0xffffff });
    let star = new THREE.Mesh(geometry, material);

    let [x, y, z] = Array(3)
      .fill()
      .map(() => THREE.MathUtils.randFloatSpread(400));
    star.position.set(x, y, z);
    star.rotation.x = x;
    star.rotation.y = y;
    star.rotation.z = z;
    scene.add(star);
  }

  Array(1000).fill().forEach(addStar);

  // adds background
  let image = new Image("space.jpg");
  let spaceTexture = new THREE.TextureLoader().load("space.jpg");
  scene.background = spaceTexture;

  function setbackgroundsize() {
    const targetAspect = window.innerWidth / window.innerHeight;
    const imageAspect = 1 / 1;
    const factor = imageAspect / targetAspect;
    scene.background.offset.x = factor > 1 ? (1 - 1 / factor) / 2 : 0;
    scene.background.repeat.x = factor > 1 ? 1 / factor : 1;
    scene.background.offset.y = factor > 1 ? 0 : (1 - factor) / 2;
    scene.background.repeat.y = factor > 1 ? 1 : factor;
  }

  function moveCamera() {
    let t = document.body.getBoundingClientRect().top;
    moon.rotation.x += 0.005;
    moon.rotation.y += 0.0075;
    moon.rotation.z += 0.005;

    skye.rotation.y += 0.01;
    skye.rotation.z += 0.01;

    if (t === 0) {
      camera.position.z = 0.01;
      camera.position.x = 0.0002;
      camera.rotation.y = 0.0002;
    } else {
      camera.position.z = t * -0.01;
      camera.position.x = t * -0.0002;
      camera.rotation.y = t * -0.0002;
    }
  }

  document.body.onscroll = moveCamera;

  function animate() {
    requestAnimationFrame(animate);

    torus.rotation.x += 0.01;
    torus.rotation.y += 0.005;
    torus.rotation.z += 0.01;

    controls.update();

    renderer.render(scene, camera);
  }
  animate();

  let skyeTexture = new THREE.TextureLoader().load("skye.png");

  let skye = new THREE.Mesh(
    new THREE.BoxGeometry(3, 3, 3),
    new THREE.MeshBasicMaterial({ map: skyeTexture })
  );

  let moonTexture = new THREE.TextureLoader().load("moon.jpg");
  let normalTexture = new THREE.TextureLoader().load("normal.jpg");

  let moon = new THREE.Mesh(
    new THREE.SphereGeometry(3, 32, 32),
    new THREE.MeshStandardMaterial({
      map: moonTexture,
      normalMap: normalTexture,
    })
  );

  // for importing blend object
  // const loader = new GLTFLoader();

  // loader.load(
  //     // resource URL
  //     'rem.gltf',
  //     // called when the resource is loaded
  //     function (gltf) {

  //         scene.add(gltf.scene);

  //         gltf.animations; // Array<THREE.AnimationClip>
  //         gltf.scene; // THREE.Group
  //         gltf.scenes; // Array<THREE.Group>
  //         gltf.cameras; // Array<THREE.Camera>
  //         gltf.asset; // Object

  //         var mroot = gltf.scene;
  //         var bbox = new THREE.Box3().setFromObject(mroot);
  //         var cent = bbox.getCenter(new THREE.Vector3());
  //         var size = bbox.getSize(new THREE.Vector3());
  //         //Rescale the object to normalized space
  //         var maxAxis = Math.max(size.x, size.y, size.z);
  //         mroot.scale.multiplyScalar(10.0 / maxAxis);
  //         bbox.setFromObject(mroot);
  //         bbox.getCenter(cent);
  //         bbox.getSize(size);
  //         //Reposition to 0,halfY,0
  //         mroot.position.copy(cent).multiplyScalar(2);
  //         mroot.position.y-= (size.y * 0.5);
  //         mroot.position.z-= (size.z * -0.5);

  //     },
  //     // called while loading is progressing
  //     function (xhr) {

  //         console.log((xhr.loaded / xhr.total * 100) + '% loaded');

  //     },
  //     // called when loading has errors
  //     function (error) {

  //         console.log('An error happened');

  //     }
  // );

  // scene.add(torus)
  scene.add(pointLight, ambientLight);
  // scene.add(skye)
  // scene.add(moon);




  const [myName, setMyName] = useState("Matthew Perez");
  function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }
  function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  }
  function getRandomNumber() {
    return String.fromCharCode(Math.floor(secureMathRandom() * 10) + 48);
  }
  function getRandomSymbol() {
    const symbols = '~!@#$%^&*()_+{}":?><;.,';
    return symbols[Math.floor(Math.random() * symbols.length)];
  }
  function secureMathRandom() {
    return (
      window.crypto.getRandomValues(new Uint32Array(1))[0] /
      (Math.pow(2, 32) - 1)
    );
  }

  const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol,
  };

  function generaterandom() {
    var lower = true;
    var upper = true;
    var number = true;
    var symbol = true;
    let generatedPassword = "";
    const typesCount = lower + upper + number + symbol;
    const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
      (item) => Object.values(item)[0]
    );
    if (typesCount === 0) {
      return "";
    }
    for (let i = 0; i < myName.length; i++) {
      typesArr.forEach((type) => {
        const funcName = Object.keys(type)[0];
        generatedPassword += randomFunc[funcName]();
      });
    }
    return generatedPassword.slice(0, myName.length);
  }

  const randomizer = () => {
    setInterval(() => setMyName(generaterandom()), 100);
  };
  // randomizer();

  return (
    <HelmetProvider>
      <Helmet>
        <title>Matt's Portfolio</title>
      </Helmet>
      <canvas id="bg"></canvas>
      <div className="flex-col">
        <SideBar />
        <ContentContainer myName={myName} />
      </div>
    </HelmetProvider>
  );
}

export default App;
