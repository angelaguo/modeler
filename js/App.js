// var renderer = new THREE.WebGLRenderer();
// renderer.setSize(600,600);
// document.body.appendChild(renderer.domElement);
//
// var renderer = Detector.webgl? new THREE.WebGLRenderer(): new THREE.CanvasRenderer();
// var scene = new THREE.Scene();
// var camera = new THREE.PerspectiveCamera(45, 600/600 , 0.1, 1000);
// camera.position.z = 400;
// var geometry = new THREE.SphereGeometry(70,10,10);
// var material = new THREE.MeshPhongMaterial( { color: 0xe4e4e4 } );
// var sphere = new THREE.Mesh(geometry, material);
// scene.add(sphere);
// var pointerOne = new THREE.PointLight(0xffffff);
// pointerOne.position.set(-100,-90,130);
// scene.add(pointerOne);
//
// var render = function () {
//   // console.log("hi")
//   requestAnimationFrame(render);
//
//   sphere.position.x += 1; // Move along x-axis towards the right side of the screen
//   sphere.position.y -= 1; // Move along y-axis towards the bottom of the screen
//
//   sphere.rotation.x += .1; // Spin left to right on the x-axis
//   sphere.rotation.y -= .1; // Spin top to bottom on the y-axis
//
//   renderer.render(scene, camera);
//
// };
//
// render();
$(document).ready(function(){
  // Set the scene size.
  const WIDTH = 400;
  const HEIGHT = 300;

  // Set some camera attributes.
  const VIEW_ANGLE = 45;
  const ASPECT = WIDTH / HEIGHT;
  const NEAR = 0.1;
  const FAR = 10000;

  // Get the DOM element to attach to
  const container =
      document.querySelector('.container');
  // Create a WebGL renderer, camera
  // and a scene
  const renderer = new THREE.WebGLRenderer();
  const camera =
      new THREE.PerspectiveCamera(
          VIEW_ANGLE,
          ASPECT,
          NEAR,
          FAR
      );

  var scene = new THREE.Scene();

  // Add the camera to the scene.
  scene.add(camera);
  // Start the renderer.
  renderer.setSize(WIDTH, HEIGHT);

    // Set up the sphere vars
  var RADIUS = 50;
  var SEGMENTS = 16;
  var RINGS = 16;

  // Create a new mesh with
  // sphere geometry - we will cover
  // the sphereMaterial next!
  const sphereMaterial =
    new THREE.MeshLambertMaterial(
      {
        color: 0xCC0000
      });
      
  const sphere = new THREE.Mesh(
    // create the sphere's material

    new THREE.SphereGeometry(
      RADIUS,
      SEGMENTS,
      RINGS),

    sphereMaterial);

  // Move the Sphere back in Z so we
  // can see it.
  sphere.position.z = -300;

  // Finally, add the sphere to the scene.
  scene.add(sphere);

  // create a point light
  var pointLight =
    new THREE.PointLight(0xFFFFFF);

  // set its position
  pointLight.position.x = 10;
  pointLight.position.y = 50;
  pointLight.position.z = 130;

  // add to the scene
  scene.add(pointLight);

    // Draw!
  renderer.render(scene, camera);

  function update () {
    // Draw!
    renderer.render(scene, camera);
    // Schedule the next frame.
    requestAnimationFrame(update);
  }

  // Schedule the first frame.
  requestAnimationFrame(update);
  // Attach the renderer-supplied
  // DOM element.
  container.appendChild(renderer.domElement);
});
