import * as THREE from 'three';
import settings from './settings';
import Themes from './themes';

module.exports = function Materials(data) {

  this.overlay = createOverlayMaterial();


  this.terrain1 = new THREE.MeshLambertMaterial({
    color: settings.theme.terrainColor1,
    shading: THREE.FlatShading
  });

  this.terrain2 = new THREE.MeshLambertMaterial({
    color: settings.theme.terrainColor2,
    shading: THREE.FlatShading
  });

  this.arenaGrid = createArenaGrid(data);

  this.arenaBoardWrapper = createArenaBoardWrapper(data);

  this.boardTile = createBoardTile(data);
  this.boardTile2 = createBoardTile2(data);
  this.boardTile3 = createBoardTile3(data);

  this.player = new THREE.MeshLambertMaterial({ color: Themes.yellow });
};

function createOverlayMaterial() {
  return new THREE.MeshBasicMaterial({
    color: 0x00ffff
  });
}

function createArenaGrid(data) {
  var gridTexture = data.textures.wood1;
  gridTexture.mapping = THREE.UVMapping;
  gridTexture.minFilter = THREE.LinearMipMapLinearFilter;
  gridTexture.magFilter = THREE.LineraFilter;
  gridTexture.wrapS = gridTexture.wrapT = THREE.RepeatWrapping;

  return new THREE.MeshLambertMaterial({
    map: gridTexture
  });
}

function createArenaBoardWrapper(data) {
  return new THREE.MeshStandardMaterial({
    color: 0xf4a460
  });
}

function createBoardTile(data) {
  return new THREE.MeshLambertMaterial({
    color: 0xff0000
  });
}

function createBoardTile2(data) {
  return new THREE.MeshLambertMaterial({
    color: 0xffffff
  });
}
function createBoardTile3(data) {
  return new THREE.MeshLambertMaterial({
    color: 0x00ff00
  });
}
