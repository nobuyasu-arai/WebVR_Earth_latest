class App {
	constructor(scene) {
		this.scene = scene;
	}


	init() {

/*
		var light = new THREE.DirectionalLight(0xFFFFFF);
//		light.position.set(2, 2, 0);
		light.position.set(0, 100, 100);
		this.scene.add( light );

		var ambientLight = new THREE.AmbientLight(0x888888);
		this.scene.add( ambientLight );
*/

		this.meshSora = new THREE.Mesh();
		var loaderSora = new THREE.TextureLoader();
		var textureSora = loaderSora.load( './img/sora2.png');
//		var materialSora = new THREE.MeshBasicMaterial({ map:textureSora, side:THREE.DoubleSide});
		var materialSora = new THREE.MeshBasicMaterial({ map:textureSora, side:THREE.BackSide});
//		var geometrySora = new THREE.SphereGeometry(8900,32,32);
		var geometrySora = new THREE.SphereGeometry(9000,32,32);
		this.meshSora = new THREE.Mesh( geometrySora, materialSora );
		this.meshSora.position.set(0, 0, -4500);
		this.scene.add( this.meshSora );

//		this.sceneCenterSora = new THREE.Scene();

//		this.sceneCenterSora.position.set(0, 10, 50);
//		this.sceneCenterSora.add( this.meshSora );
//		this.meshSora.position.set(0, 10, 50);
//		this.scene.add( this.sceneCenterSora );



		this.meshEarth = new THREE.Mesh();
		var loaderEarth = new THREE.TextureLoader();
		var textureEarth = loaderEarth.load( './img/earth.png');
//		var textureEarth = loaderEarth.load( './img/kasei.png');
		var materialEarth = new THREE.MeshBasicMaterial({ map:textureEarth });
		var geometryEarth = new THREE.SphereGeometry(9000,32,32);
//		var geometryEarth = new THREE.SphereGeometry(3000,32,32);	//（半径, 経度分割数, 緯度分割数, 開始経度, 経線中心角, 開始緯度, 緯線中心角）
		this.meshEarth = new THREE.Mesh( geometryEarth, materialEarth );
//		this.meshEarth.position.set(0, 0, 50);
		this.meshEarth.position.set(0, 0, -4500);
		this.scene.add( this.meshEarth );


		this.meshCloud = new THREE.Mesh();
		var loaderCloud = new THREE.TextureLoader();
		var textureCloud = loaderCloud.load( './img/cloud.png');
		var materialCloud = new THREE.MeshBasicMaterial({ map:textureCloud, transparent:true, side:THREE.DoubleSide });
		var geometryCloud = new THREE.SphereGeometry(9300,32,32);
		this.meshCloud = new THREE.Mesh( geometryCloud, materialCloud );
		this.meshCloud.position.set(0, 0, -4500);
		this.scene.add( this.meshCloud );

//		this.meshCloud2 = new THREE.Mesh();
//		var loaderCloud2 = new THREE.TextureLoader();
//		var textureCloud2 = loaderCloud2.load( './img/cloud.png');
//		var materialCloud2 = new THREE.MeshBasicMaterial({ map:textureCloud2, transparent:true, side:THREE.BackSide });
//		var geometryCloud2 = new THREE.SphereGeometry(8999.9,32,32);
//		this.meshCloud2 = new THREE.Mesh( geometryCloud2, materialCloud2 );
//		this.meshCloud2.position.set(0, 0, 5000);
//		this.scene.add( this.meshCloud2 );


		//月
		this.meshMoon = new THREE.Mesh();
		var loaderMoon = new THREE.TextureLoader();
		var textureMoon = loaderMoon.load( './img/moon.png');
		var materialMoon = new THREE.MeshBasicMaterial({ map:textureMoon});
//		var geometryMoon = new THREE.SphereGeometry(6,32,32);
//		var geometryMoon = new THREE.SphereGeometry(90,90,90);
		var geometryMoon = new THREE.SphereGeometry(100,32,32);
		this.meshMoon = new THREE.Mesh( geometryMoon, materialMoon );
		this.sceneCenterMoon = new THREE.Scene();

//		this.sceneCenterMoon.position.set(0, 10, 50);
//		this.sceneCenterMoon.position.set(0, 0, 1500);
		this.sceneCenterMoon.position.set(0, 0, 1300);
		this.sceneCenterMoon.add( this.meshMoon );
//		this.meshMoon.position.set(0, 10, 50)
		this.meshMoon.position.set(0, 0, 1300);
//		this.scene.add( this.meshMoon );
		this.scene.add( this.sceneCenterMoon );





		//火星
		this.meshMars = new THREE.Mesh();
		var loaderMars = new THREE.TextureLoader();
		var textureMars = loaderMars.load( './img/kasei.png');
		var materialMars = new THREE.MeshBasicMaterial({ map:textureMars });
//		var geometryMars = new THREE.SphereGeometry(200,32,32);
//		var geometryMars = new THREE.SphereGeometry(250,32,32);
		var geometryMars = new THREE.SphereGeometry(250,32,32);
		this.meshMars = new THREE.Mesh( geometryMars, materialMars );
//		this.meshMars.position.set(0, 0, 8000);
		this.meshMars.position.set(0, 0, 8000);
		this.scene.add( this.meshMars );



		//木星
		this.meshJupiter = new THREE.Mesh();
		var loaderJupiter = new THREE.TextureLoader();
		var textureJupiter = loaderMars.load( './img/jupiter.png');
		var materialJupiter = new THREE.MeshBasicMaterial({ map:textureJupiter });
		var geometryJupiter = new THREE.SphereGeometry(30,32,32);
		this.meshJupiter = new THREE.Mesh( geometryJupiter, materialJupiter );
		this.meshJupiter.position.set(0, 0, 9000);
		this.scene.add( this.meshJupiter );








//		this.meshMoon2 = new THREE.Mesh();
//		var loaderMoon2 = new THREE.TextureLoader();
//		var textureMoon2 = loaderMoon2.load( './img/earth.png');
//		var materialMoon2 = new THREE.MeshBasicMaterial({ map:textureMoon2});
///		var geometryMoon2 = new THREE.SphereGeometry(2,32,32);
//		this.meshMoon2 = new THREE.Mesh( geometryMoon2, materialMoon2 );
//		this.sceneCenter2 = new THREE.Scene();

//		this.sceneCenter2.position.set(0, 0, 50);
//		this.sceneCenter2.add( this.meshMoon2 );
//		this.meshMoon2.position.set(0, 0, 50);
//		this.scene.add( this.sceneCenter2 );



		this.meshCube  = new THREE.Scene();
//		var geometryCube = new THREE.BoxGeometry(1, 4, 4);
		var geometryCube = new THREE.BoxGeometry(1, 1, 4);
		var loaderCube = new THREE.TextureLoader();
//		var textureMoonCube = loaderMoon.load( './img/moon.png');
		var textureMoonCube = loaderCube.load( './img/hayabusa2.png');
		var materialMoonCube = new THREE.MeshBasicMaterial({ map:textureMoonCube});
		var geometryMoonCube = new THREE.SphereGeometry(2,32,32);
		this.meshCube	= new THREE.Mesh( geometryCube, materialMoonCube );
		this.sceneCenterCube = new THREE.Scene();

		this.sceneCenterCube.position.set(0, 0, -950);
//		this.sceneCenterCube.position.set(0, 0, 0);
//		this.sceneCenterCube.rotation.set(0, 0, 130);/*(,,傾き?)*/
		this.sceneCenterCube.rotation.set(0, 0, 135);/*(,,傾き?)*/
		this.sceneCenterCube.add( this.meshCube );
		this.meshCube.position.set(0, 0, 50);
		this.scene.add( this.sceneCenterCube );


		//円錐
//		const geometryCone = new THREE.ConeGeometry( 1, 5, 30 );//(下半径,高さ,画数？)
		const geometryCone = new THREE.CylinderGeometry( 0.5, 0.5, 4, 32 );//(上半径, 下半径, 高さ, 画数？)
		var loaderCone = new THREE.TextureLoader();
		var textureCone = loaderCone.load( './img/hayabusa2.png');
		const materialCone = new THREE.MeshBasicMaterial( {map:textureCone} );
		this.meshCone = new THREE.Mesh( geometryCone, materialCone );
		this.sceneCenterCone = new THREE.Scene();

		this.sceneCenterCone.position.set(0,0,-950);
//		this.sceneCenterCone.position.set(0,0,0);
		this.sceneCenterCone.rotation.set(0, 0, 131);/*(,,傾き?)*/
		this.sceneCenterCone.add( this.meshCone );
		this.meshCone.position.set(0, 0, 50);
		this.scene.add( this.sceneCenterCone );


//文字
//import fontJson = require("/fonts/helvetiker_regular.typeface.json");

// FontLoaderを使って、フォント取得
//let font = new THREE.FontLoader().parse(fontJson);

// 取得したフォントを、TextGeometryのパラメータに渡す。
//let textGeometry = new THREE.TextGeometry("Hello World!", {
//    font: font,
//    size: 30,
//    height: 3
//});

// シーンに追加
//textGeometry.center();
//let textObject = new THREE.Mesh(textGeometry, material);
//scene.add(textObject);

var scene = new THREE.Scene();
var aspect = window.innerWidth / window.innerHeight;
//var camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);
var camera = new THREE.PerspectiveCamera(75, aspect, 0.1, -1000);
var renderer = new THREE.WebGLRenderer();
var controls = new THREE.OrbitControls(camera);
var axis = new THREE.AxisHelper(1000);
var light = new THREE.DirectionalLight(0xb4e7f2, 1.5);
light.position.set(1,1,1);
//light.target.position.set(0,0,0);
light.target.position.set(0,0,-1000);
scene.add(axis);
scene.add(light);
scene.add(light.target);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
//camera.position.set(50, 50, 200);
camera.position.set(0, 0, -1000);

var loader = new THREE.FontLoader();

var textureFonts = loader.load( './fonts/helvetiker_regular.typeface.json', function ( font ) {
	var geometry = new THREE.TextGeometry( 'Hello three.js!', {
		font: font,
		size: 80,
		height: 5,
		curveSegments: 12,
		bevelEnabled: true,
		bevelThickness: 10,
		bevelSize: 8,
		bevelSegments: 5
	} );

	geometry.center();

	var textObject = new THREE.Mesh(geometry, material);
	this.scene.add(textObject);

} );

		var materialFonts = new THREE.MeshBasicMaterial({ map:textureFonts });
		var geometryFonts = new THREE.SphereGeometry(90,32,32);
		this.meshFonts = new THREE.Mesh( textureFonts, materialFonts );
		this.meshFonts.position.set(0, 0, -800);
		this.scene.add( this.meshFonts );



var render = function () {
	requestAnimationFrame(render);
	controls.update();
	renderer.setClearColor(0xaabbcc, 1.0);
	renderer.render(scene, camera);
};
render();



	}



	//回転
	update(dt) {
		this.meshSora.position.z		 += dt * -430;

		this.meshCloud.rotation.y		 += dt * 0.05;
		this.meshCloud.position.z		 += dt * -430;
//		this.meshCloud2.rotation.y		 += dt * 0.1;
//		this.meshCloud2.position.z		 += dt * -600;

		this.meshEarth.rotation.y		 += dt * 0.08;
		this.meshEarth.position.z		 += dt * -430;

		//火星
//		this.meshMars.rotation.x		 += dt * 0.02;
//		this.meshMarsrotation.x			 += dt * 0.03;
//		this.meshMars.rotation.y		 += dt * 0.4;
		this.meshMars.rotation.y		 += dt * 0.2;
//		this.meshMars.position.z		 += dt * -140;
		this.meshMars.position.x		 += dt * -2.5;
		this.meshMars.position.z		 += dt * -160;

//		this.sceneCenter.rotation.x		 += dt * 0.3;

		//木星
		this.meshJupiter.rotation.x		 += dt * -15;
		this.meshJupiter.rotation.y		 += dt * -3;
		this.meshJupiter.position.x		 += dt * 0.3;
		this.meshJupiter.position.y		 += dt * -0.1;
		this.meshJupiter.position.z		 += dt * -110;



		//月の周回
//		this.sceneCenterMoon.rotation.x	 += dt * 0.3;
		this.sceneCenterMoon.rotation.y	 += dt * -0.04;
		this.sceneCenterMoon.rotation.x	 += dt * -0.02;
		this.sceneCenterMoon.position.x  += dt * -20;
//		this.sceneCenterMoon.position.x  += dt * -10;
//		this.sceneCenterMoon.position.x  += dt * -1;
		this.sceneCenterMoon.position.y  += dt * 15;
//		this.sceneCenterMoon.position.y  += dt * -1;
//		this.sceneCenterMoon.position.y  += dt * 15;
//		this.sceneCenterMoon.position.z  += dt * -300;
		this.sceneCenterMoon.position.z  += dt * -170;

		//月の回転
		this.meshMoon.rotation.x  += dt * 0.1;
//		this.meshMoon.position.z  += dt * -100;
//		this.meshMoon.position.z  += dt * 20;

		//人工衛星

//		this.sceneCenter2.rotation.y	 += dt * 0.4;
//		this.sceneCenterCube.rotation.y	 += dt * 0.25;
//		this.sceneCenterCone.rotation.y	 += dt * 0.25;


		this.sceneCenterCube.rotation.y	 += dt * 0.25;
		this.sceneCenterCone.rotation.y	 += dt * 0.25;
//		this.sceneCenterCube.position.x	 += dt * -5;
//		this.sceneCenterCone.position.x	 += dt * -5;
//		this.sceneCenterCube.position.y	 += dt * -5;
//		this.sceneCenterCone.position.y	 += dt * -5;

//		this.meshCube.position.x  += dt * 1;
//		this.meshCube.position.y  += dt * 1;
//		this.meshCone.position.x  += dt * 1;



	}






	render(dt) {

	}
}
