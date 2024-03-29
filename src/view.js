import * as THREE from 'three';
import Geometry from './geometry';
import Environment from './environment';
import CameraController from './camera';
import settings from './settings';

module.exports = function(canvas, data) {
  var width = data.width;
  var height = data.height;

  data.scene = createScene();
  data.container = createContainer(data.scene);
  data.cameraController = new CameraController(width, height);
  data.renderer = createRenderer(canvas);

  data.env = new Environment(data);

  var scene = data.scene;
  var cameraController = data.cameraController;
  var renderer = data.renderer;

  data.render = () => {
    data.renderer.render(data.scene,
                         data.cameraController.camera);
  };
  
  data.renderRAF = function() {
    window.requestAnimationFrame(data.render);
  };

  return {
    scene,
    cameraController,
    renderer
  };
};


function createContainer(scene) {
  var gameContainer = new THREE.Object3D();
  scene.add(gameContainer);
  return gameContainer;
}

function createScene() {
  var scene = new THREE.Scene();
  return scene;
}

function createRenderer(canvas) {
  var w = canvas.width,
      h = canvas.height;

  var precision = 'highp';
  var renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: settings.data.antialias,
    precision: precision,
    alpha: false
  });
  renderer.sortObjects = false;
  renderer.autoClear = false;
  renderer.setSize(w, h);

  return renderer;
}
