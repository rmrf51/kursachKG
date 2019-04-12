(function(){var script=document.createElement('script');script.onload=function(){var stats=new Stats();document.body.appendChild(stats.dom);requestAnimationFrame(function loop(){stats.update();requestAnimationFrame(loop)});};script.src='//rawgit.com/mrdoob/stats.js/master/build/stats.min.js';document.head.appendChild(script);})();

let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );


let renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// При изменении размера окна, адаптивность
window.addEventListener('resize', function(){
  let width = window.innerWidth;
  let height = window.innerHeight;
  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
});

//Управление камерой
controls = new THREE.OrbitControls( camera, renderer.domElement );
//controls = new THREE.PointerLockControls( camera, renderer.domElement );

// Создание сферы
let geomerty = new THREE.BoxGeometry ( 1, 1, 1 );

// Создание материала, цвет и текстура

let cubeMaterials = [
  new THREE.MeshLambertMaterial( { map: new THREE.TextureLoader().load('textures/block.png'), side: THREE.DoubleSide } ), //правая
  new THREE.MeshPhongMaterial( { map: new THREE.TextureLoader().load('textures/block.png'), side: THREE.DoubleSide } ), //левая
  new THREE.MeshLambertMaterial( { map: new THREE.TextureLoader().load('textures/block.png'), side: THREE.DoubleSide } ), // верхняя
  new THREE.MeshPhongMaterial( { map: new THREE.TextureLoader().load('textures/block.png'), side: THREE.DoubleSide } ), // нижняя
  new THREE.MeshLambertMaterial( { map: new THREE.TextureLoader().load('textures/block.png'), side: THREE.DoubleSide } ), // передняя
  new THREE.MeshPhongMaterial( { map: new THREE.TextureLoader().load('textures/block.png'), side: THREE.DoubleSide } ) // задняя
];

// let material = new THREE.MeshBasicMaterial( { color: 0xFFFFFF });
// let cube = new THREE.Mesh( geomerty, material );

let material = new THREE.MeshFaceMaterial( cubeMaterials )
let cube = new THREE.Mesh( geomerty, material );
let cube1 = new THREE.Mesh( geomerty, material );

// test
// let wireframecube = new THREE.WireframeGeometry( geomerty );
// let cubeline = new THREE.LineSegments( wireflamecube );


scene.add( cube );
scene.add( cube1 );

// изменение позиции камеры
camera.position.z = -10;
camera.position.x = -10;
camera.position.y = 10;


// camera.position.x = cube.position.x + 3;
// camera.position.y = cube.position.y + 3;

// Create First Person Controls
// controls = new THREE.PointerLockControls(camera);
// scene.add( controls.getObject() );

//Загрузка моделей
let OBJLoader = new THREE.OBJLoader();  //рыцарь левый
OBJLoader.setPath('models/')
OBJLoader.load('knight.obj', function(object) {
  object.position.y = -1;
  object.position.x = 20;
  object.position.z = 20;
  object.rotation.y = 3.5;

  scene.add( object );

});

let OBJLoader1 = new THREE.OBJLoader(); //рыцарь правый
OBJLoader.setPath('models/')
OBJLoader.load('knight.obj', function(object) {
  object.position.y = -1;
  object.position.x = -20;
  object.position.z = 20;
  object.rotation.y = 3.5;

  scene.add( object );

});

let OBJLoader2 = new THREE.OBJLoader(); // дьявольская хрень посередине
OBJLoader2.setPath('models/')
OBJLoader2.load('diablo.obj', function(object) {
  object.position.y = 4;
  object.position.x = 0;
  object.position.z = 13;
  object.scale.x = 3;
  object.scale.y = 3;
  object.scale.z = 3;
  object.rotation.y = 3.4;

  scene.add( object );

});

let OBJLoader3 = new THREE.OBJLoader(); // левый меч l
OBJLoader3.setPath('models/')
OBJLoader3.load('Sword_04.obj', function(object) {
  object.position.y = 5;
  object.position.x = -6;
  object.position.z = 16;
  object.scale.x = 1;
  object.scale.y = 1;
  object.scale.z = 1;
  object.rotation.y = 3.4;
  object.rotation.z = 2.9;

  scene.add( object );

});

let OBJLoader4 = new THREE.OBJLoader(); // правый меч r
OBJLoader4.setPath('models/')
OBJLoader4.load('Sword_08.obj', function(object) {
  object.position.y = 5;
  object.position.x = 6;
  object.position.z = 16;
  object.scale.x = 1;
  object.scale.y = 1;
  object.scale.z = 1;
  object.rotation.y = 3.4;
  object.rotation.z = 3.4;

  scene.add( object );

});

let OBJLoader5 = new THREE.OBJLoader(); // герой h
OBJLoader2.setPath('models/')
OBJLoader2.load('Black_Knight.obj', function(object) {
  object.position.y = -1;
  object.position.x = 0;
  object.position.z = 4;
  object.scale.x = 0.3;
  object.scale.y = 0.3;
  object.scale.z = 0.3;
  object.rotation.y = 0;

  scene.add( object );

});


//сцена
let floorGeometry = new THREE.CubeGeometry(64, 1, 64);
let floorMaterial = new THREE.MeshLambertMaterial( { map: new THREE.TextureLoader().load( 'textures/2.jpg' ), side: THREE.DoubleSide } );
let floorCube = new THREE.Mesh( floorGeometry, floorMaterial );
floorCube.position.y = -1;
scene.add( floorCube );

let floorGeometry1 = new THREE.CubeGeometry(1, 64, 64);
let floorMaterial1 = new THREE.MeshLambertMaterial( { map: new THREE.TextureLoader().load( 'textures/1.jpg' ), side: THREE.DoubleSide } );
let floorCube1 = new THREE.Mesh( floorGeometry1, floorMaterial1 );
floorCube1.position.x = 31;
floorCube1.position.y = 30;
scene.add( floorCube1 );

let floorGeometry2 = new THREE.CubeGeometry(1, 64, 64);
let floorMaterial2 = new THREE.MeshLambertMaterial( { map: new THREE.TextureLoader().load( 'textures/1.jpg' ), side: THREE.DoubleSide } );
let floorCube2 = new THREE.Mesh( floorGeometry1, floorMaterial1 );
floorCube2.position.x = -31;
floorCube2.position.y = 30;
scene.add( floorCube2 );

let floorGeometry3 = new THREE.CubeGeometry(1, 64, 64);
let floorMaterial3 = new THREE.MeshLambertMaterial( { map: new THREE.TextureLoader().load( 'textures/1.jpg' ), side: THREE.DoubleSide } );
let floorCube3 = new THREE.Mesh( floorGeometry1, floorMaterial1 );
floorCube3.position.z = 31;
floorCube3.position.y = 30;
floorCube3.rotation.y = 1.5;
scene.add( floorCube3 );

let floorGeometry4 = new THREE.CubeGeometry(1, 64, 64);
let floorMaterial4 = new THREE.MeshLambertMaterial( { map: new THREE.TextureLoader().load( 'textures/1.jpg' ), side: THREE.DoubleSide } );
let floorCube4 = new THREE.Mesh( floorGeometry1, floorMaterial1 );
floorCube4.position.z = -31;
floorCube4.position.y = 30;
floorCube4.rotation.y = 1.5;
scene.add( floorCube4 );



//ходьба и поворот камеры
document.onkeydown = function(e) {
    if (e.keyCode == 27) {
        alert('404');
    }
    switch ( e.keyCode ) {
						case 38: // up
						case 87: // w
							cube.position.z += 0.5;
              break;
						case 37: // left
						case 65: // a
							cube.position.x -= 0.5;
              break;
						case 40: // down
						case 83: // s
							cube.position.z -= 0.5;
							break;
						case 39: // right
						case 68: // d
							cube.position.x += 0.5;
							break;
						case 32: // space
              console.log("space");
							break;
					}
}




// Свет
let ambientLight = new THREE.AmbientLight( 0x150000, 3.0 );
scene.add( ambientLight );

let light1 = new THREE.PointLight( 0xFFFFFF, 4, 50 );
//scene.add( light1 );

let directionLight = new THREE.DirectionalLight( 0xFFFFFF, 15 );
directionLight.position.set( 0, 0, 15 );
scene.add( directionLight );

let directionLight1 = new THREE.DirectionalLight( 0x220000, 1 );
directionLight1.position.set( 0, 15, 0 );
scene.add( directionLight1 );

let spotLight = new THREE.SpotLight( 0xFF1010, 3 );
spotLight.position.set( 0, -1, 0 );
scene.add( spotLight );

// let spotL = new THREE.SpotLight (0xFF1010, 1);
// spotL.position.y = 5;
// spotL.position.x = 23;
// spotL.position.z = 23;
// scene.add( spotL );



let x = 20;
let z = 20;
let flagmove = true;
let camflag = true;
// игровая логика
let update = function() {
  // cube.rotation.x += 0.01;
  // cube.rotation.y += 0.005;
  //camera.position.x = cube.position.x + 1;
  //camera.position.z = cube.position.z + 1;
  //camera.position.z = cube.position.z + 1;




      cube.position.x = x;
      cube.position.z = z;
      cube1.position.x = x * (-1);
      cube1.position.z = z;
      if( x < 20 && z < 20 && flagmove ){
        x+=0.05;
        z+=0.05;
      } else if ( x > 0 && z > 0 && !flagmove ) {
        x-=0.05;
        z-=0.05;
      };
      if( x >= 20 && z >= 20 ) {
        flagmove = !flagmove;
      };
      if( x <= 0 && z <= 0 ) {
        flagmove = !flagmove;
      };
      if( camera.rotation.y < 4 && camflag){
        camera.rotation.y += 0.01;
        console.log(camera.rotation.y);
      } else {
        camflag = false;
      };


  light1.rotation.x += 0.1;
  light1.rotation.y += 0.1;
  // floorCube3.rotation.y += 0.01;
  // console.log(floorCube3.rotation.y);
};


// Отрисовка сцены
let render = function() {
  renderer.render( scene, camera );
};

// Запуск обозревателя за update, render, repeat или что-то такое
let GameLoop = function(){
  requestAnimationFrame ( GameLoop );

  update();
  render();
}

GameLoop();


scene.background = new THREE.Color( 0x100000 );
