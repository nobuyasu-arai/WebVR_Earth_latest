var camera, renderer;
var effect, controls;
var element, container;

var g_cnt = 0;
var g_requestId;


var clock = new THREE.Clock();
var scene = new THREE.Scene();
var app = new App(scene);


init();
animate();




function init() {
	renderer = new THREE.WebGLRenderer();
	element = renderer.domElement;

	renderer.setClearColor(0x000000);
	renderer.autoClear = false;


	container = document.getElementById('example');
	container.appendChild(element);

	effect = new THREE.StereoEffect(renderer);

//	camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 10000 );
	camera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 0.1, 10000 );
//	camera.position.set(0, 0, 0);
	camera.position.set(0, 0, -1000);
	scene.add(camera);

	controls = new THREE.OrbitControls(camera, element);
	controls.target.set(
		camera.position.x,
		camera.position.y,
		camera.position.z+0.1
	);
	controls.noZoom = true;
	controls.noPan = true;

	function setOrientationControls(e) {
		if (!e.alpha) {
			return;
		}

		controls = new THREE.DeviceOrientationControls(camera, true);
		controls.connect();
		controls.update();

		element.addEventListener('click', fullscreen, false);

		window.removeEventListener('deviceorientation', setOrientationControls, true);
	}
	window.addEventListener('deviceorientation', setOrientationControls, true);
	window.addEventListener('resize', resize, false);
	setTimeout(resize, 1);
	app.init();
}

var width = 0;
var height = 0;

function resize() {
	width = container.offsetWidth;
	height = container.offsetHeight;

	camera.aspect = width / height;
	camera.updateProjectionMatrix();

	renderer.setSize(width, height);

	effect.setSize(width, height);
}

function update(dt) {
	resize();

	camera.updateProjectionMatrix();

	controls.update(dt);
	app.update(dt);
}

function render(dt) {
	app.render(dt);
	effect.render(scene, camera);
}

function animate(t) {
	requestAnimationFrame(animate);

	update(clock.getDelta());
	render(clock.getDelta());

	renderer.clearDepth();

//	if( g_cnt < 2000 ){
//		g_cnt++;
//		g_requestId = requestAnimationFrame(animate);

//		update(clock.getDelta());
//		render(clock.getDelta());
//	}
//	else{
//		g_cnt = 0;
//	}

	g_cnt++;
	switch(g_cnt){
//	case 280:
	case 350:
		createStarField(0xffffff);	//白色
		break;
	case 2500:
		createStarField(0xFFD700);	//Gold
		break;
	case 4000:
		createStarField(0xFFC0CB);	//ピンク
		break;
	case 5500:
		createStarField(0x00FFFF);	//水色
		break;
	case 6000:
		g_cnt = 0;
		break;
	}

}

function fullscreen() {
	if (container.requestFullscreen) {
		container.requestFullscreen();
	} else if (container.msRequestFullscreen) {
		container.msRequestFullscreen();
	} else if (container.mozRequestFullScreen) {
		container.mozRequestFullScreen();
	} else if (container.webkitRequestFullscreen) {
		container.webkitRequestFullscreen();
	}
}


function createStarField(_col) {
	// 形状データを作成
	const geometry = new THREE.Geometry();

	//配置する個数
//	for (let i = 0; i < 1000; i++) {
	for (let i = 0; i < 300; i++) {
		geometry.vertices.push(
			new THREE.Vector3(
				//配置する範囲
				3000 * (Math.random() - 0.5),
				3000 * (Math.random() - 0.5),
				3000 * (Math.random() - 0.5)
			)
		);
	}

	// マテリアルを作成
	const material = new THREE.PointsMaterial({
		size: 5,
//		color: 0xffffff
		color: _col
	});

	// 物体を作成
	const mesh = new THREE.Points(geometry, material);
	scene.add(mesh);
}
