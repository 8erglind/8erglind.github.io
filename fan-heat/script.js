/* THIS IS FOR THE TEXT TO SHOW MORE WHEN CLICKED ON */
        $(document).ready(function(){
            $(".bachelors").click(function(){
                $(".bachelorsfurther").show();
                $(".bachelors").addClass("active");
             });
            $(".closeBachelors").click(function(){
                $(".bachelorsfurther").hide();
                $(".bachelors").removeClass("active");
             });


            $(".masters").click(function(){
                $(".mastersfurther").show();
                $(".masters").addClass("active");
             });
            $(".closeMasters").click(function(){
                $(".mastersfurther").hide();
                $(".masters").removeClass("active");
             });


            $(".RAD").click(function(){
                $(".RADfurther").show();
                $(".RAD").addClass("active");
             });
            $(".closeRAD").click(function(){
                $(".RADfurther").hide();
                $(".RAD").removeClass("active");
             });


            $(".DD").click(function(){
                $(".DDfurther").show();
                $(".DD").addClass("active");
             });
            $(".closeDD").click(function(){
                $(".DDfurther").hide();
                $(".DD").removeClass("active");
             });


            $(".Lectorates").click(function(){
                $(".Lectoratesfurther").show();
                $(".Lectorates").addClass("active");
             });
            $(".closeLectorates").click(function(){
                $(".Lectoratesfurther").hide();
                $(".Lectorates").removeClass("active");
             });


            $(".AWE").click(function(){
                $(".AWEfurther").show();
                $(".AWE").addClass("active");
             });
            $(".closeAWE").click(function(){
                $(".AWEfurther").hide();
                $(".AWE").removeClass("active");
             });


            $(".Leiden").click(function(){
                $(".Leidenfurther").show();
                $(".Leiden").addClass("active");
             });
            $(".closeLeiden").click(function(){
                $(".Leidenfurther").hide();
                $(".Leiden").removeClass("active");
             });
        });
        /* --------- */



        if (!Detector.webgl) {
            Detector.addGetWebGLMessage();
        }

        var container;

        var camera, controls, scene, renderer;
        var lighting, ambient, keyLight, fillLight, backLight;

        var windowHalfX = window.innerWidth / 2;
        var windowHalfY = window.innerHeight / 2;

        init();
        animate();

        function init() {

            container = document.createElement('div');
            document.body.appendChild(container);

            /* Camera */

            camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
            camera.position.z = 5;

            /* Scene */

            scene = new THREE.Scene();
            lighting = false;

            ambient = new THREE.AmbientLight(0xffffff, 1.0);
            scene.add(ambient);

            keyLight = new THREE.DirectionalLight(new THREE.Color('hsl(30, 100%, 75%)'), 1.0);
            keyLight.position.set(-100, 0, 100);

            fillLight = new THREE.DirectionalLight(new THREE.Color('hsl(240, 100%, 75%)'), 0.75);
            fillLight.position.set(100, 0, 100);

            backLight = new THREE.DirectionalLight(0xffffff, 1.0);
            backLight.position.set(100, 0, -100).normalize();

            /* CUBEs  -------    1st STEP, ALWAYS SHOWING*/

                var cubeGeometry = new THREE.BoxGeometry (.01,.01,.01);
                cubeGeometry.computeBoundingBox();
                var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xFFFFFF});
                cube = new THREE.Mesh (cubeGeometry, cubeMaterial);

                cube.position.set ('-0.5', '-0.18', 0.18);
                scene.add (cube);

                        var cubeGeometry = new THREE.BoxGeometry (.01,.01,.01);
                        cubeGeometry.computeBoundingBox();
                        var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xFFFFFF});
                        cube14 = new THREE.Mesh (cubeGeometry, cubeMaterial);

                        cube14.position.set ('-0.65', 0.45, 0.55);
                        scene.add (cube14);


                        var cubeGeometry = new THREE.BoxGeometry (.01,.01,.01);
                        cubeGeometry.computeBoundingBox();
                        var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xFFFFFF});
                        cube15 = new THREE.Mesh (cubeGeometry, cubeMaterial);

                        cube15.position.set ('-0.87', 0.35, 0.35);
                        scene.add (cube15);


                        var cubeGeometry = new THREE.BoxGeometry (.01,.01,.01);
                        cubeGeometry.computeBoundingBox();
                        var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xFFFFFF});
                        cube16 = new THREE.Mesh (cubeGeometry, cubeMaterial);

                        cube16.position.set ('-0.93', 0.16, 0.2);
                        scene.add (cube16);


                        var cubeGeometry = new THREE.BoxGeometry (.01,.01,.01);
                        cubeGeometry.computeBoundingBox();
                        var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xFFFFFF});
                        cube17 = new THREE.Mesh (cubeGeometry, cubeMaterial);

                        cube17.position.set ('-0.95', '-0.05', 0.1);
                        scene.add (cube17);


                        var cubeGeometry = new THREE.BoxGeometry (.01,.01,.01);
                        cubeGeometry.computeBoundingBox();
                        var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xFFFFFF});
                        cube18 = new THREE.Mesh (cubeGeometry, cubeMaterial);

                        cube18.position.set ('-0.96', '-0.25', 0);
                        scene.add (cube18);


                        var cubeGeometry = new THREE.BoxGeometry (.01,.01,.01);
                        cubeGeometry.computeBoundingBox();
                        var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xFFFFFF});
                        cube19 = new THREE.Mesh (cubeGeometry, cubeMaterial);

                        cube19.position.set ('-0.92', '-0.45', '-0.17');
                        scene.add (cube19);


                        var cubeGeometry = new THREE.BoxGeometry (.01,.01,.01);
                        cubeGeometry.computeBoundingBox();
                        var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xFFFFFF});
                        cube20 = new THREE.Mesh (cubeGeometry, cubeMaterial);

                        cube20.position.set ('-0.72', '-0.59', '-0.28');
                        scene.add (cube20);


                var cubeGeometry = new THREE.BoxGeometry (.01,.01,.01);
                cubeGeometry.computeBoundingBox();
                var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xFFFFFF});
                cube2 = new THREE.Mesh (cubeGeometry, cubeMaterial);

                cube2.position.set (0.5, '-0.18', 0.18);  
                scene.add (cube2);

                        var cubeGeometry = new THREE.BoxGeometry (.01,.01,.01);
                        cubeGeometry.computeBoundingBox();
                        var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xFFFFFF});
                        cube21 = new THREE.Mesh (cubeGeometry, cubeMaterial);

                        cube21.position.set (0.59, 0.43, 0.55);
                        scene.add (cube21);


                        var cubeGeometry = new THREE.BoxGeometry (.01,.01,.01);
                        cubeGeometry.computeBoundingBox();
                        var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xFFFFFF});
                        cube22 = new THREE.Mesh (cubeGeometry, cubeMaterial);

                        cube22.position.set (0.83, 0.27, 0.35);
                        scene.add (cube22);


                        var cubeGeometry = new THREE.BoxGeometry (.01,.01,.01);
                        cubeGeometry.computeBoundingBox();
                        var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xFFFFFF});
                        cube23 = new THREE.Mesh (cubeGeometry, cubeMaterial);

                        cube23.position.set (0.88, 0, 0.2);
                        scene.add (cube23);


                        var cubeGeometry = new THREE.BoxGeometry (.01,.01,.01);
                        cubeGeometry.computeBoundingBox();
                        var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xFFFFFF});
                        cube24 = new THREE.Mesh (cubeGeometry, cubeMaterial);

                        cube24.position.set (0.83, '-0.25', 0);
                        scene.add (cube24);


                        var cubeGeometry = new THREE.BoxGeometry (.01,.01,.01);
                        cubeGeometry.computeBoundingBox();
                        var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xFFFFFF});
                        cube25 = new THREE.Mesh (cubeGeometry, cubeMaterial);

                        cube25.position.set (0.75, '-0.45', '-0.17');
                        scene.add (cube25);


                        var cubeGeometry = new THREE.BoxGeometry (.01,.01,.01);
                        cubeGeometry.computeBoundingBox();
                        var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xFFFFFF});
                        cube26 = new THREE.Mesh (cubeGeometry, cubeMaterial);

                        cube26.position.set (0.52, '-0.59', '-0.3');
                        scene.add (cube26);


                var cubeGeometry = new THREE.BoxGeometry (.01,.01,.01);
                cubeGeometry.computeBoundingBox();
                var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xFFFFFF});
                cube3 = new THREE.Mesh (cubeGeometry, cubeMaterial);

                cube3.position.set ('-0.2', '-0.9', 0.2); 
                scene.add (cube3);


                var cubeGeometry = new THREE.BoxGeometry (.01,.01,.01);
                cubeGeometry.computeBoundingBox();
                var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xFFFFFF});
                cube4 = new THREE.Mesh (cubeGeometry, cubeMaterial);

                cube4.position.set ('-1.4', 0.7, '-0.9');
                scene.add (cube4);


                var cubeGeometry = new THREE.BoxGeometry (.01,.01,.01);
                cubeGeometry.computeBoundingBox();
                var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xFFFFFF});
                cube5 = new THREE.Mesh (cubeGeometry, cubeMaterial);

                cube5.position.set (0.5, 1.4, '-0.4');  
                scene.add (cube5);


                var cubeGeometry = new THREE.BoxGeometry (.01,.01,.01);
                cubeGeometry.computeBoundingBox();
                var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xFFFFFF});
                cube6 = new THREE.Mesh (cubeGeometry, cubeMaterial);

                cube6.position.set ('-0.52', 1.28, '-0.15');
                scene.add (cube6);


                var cubeGeometry = new THREE.BoxGeometry (.01,.01,.01);
                cubeGeometry.computeBoundingBox();
                var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xFFFFFF});
                cube7 = new THREE.Mesh (cubeGeometry, cubeMaterial);

                cube7.position.set ('0', 0.4, 0.3);
                scene.add (cube7);


                var cubeGeometry = new THREE.BoxGeometry (.01,.01,.01);
                cubeGeometry.computeBoundingBox();
                var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xFFFFFF});
                cube8 = new THREE.Mesh (cubeGeometry, cubeMaterial);

                cube8.position.set (2, 0.36, '-0.53');
                scene.add (cube8);


                var cubeGeometry = new THREE.BoxGeometry (.01,.01,.01);
                cubeGeometry.computeBoundingBox();
                var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xFFFFFF});
                cube9 = new THREE.Mesh (cubeGeometry, cubeMaterial);

                cube9.position.set (0.8, '-0.5', 0.9);
                scene.add (cube9);


                var cubeGeometry = new THREE.BoxGeometry (.01,.01,.01);
                cubeGeometry.computeBoundingBox();
                var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xFFFFFF});
                cube10 = new THREE.Mesh (cubeGeometry, cubeMaterial);

                cube10.position.set ('0', '-0.75', '0.6');
                scene.add (cube10);


                var cubeGeometry = new THREE.BoxGeometry (.01,.01,.01);
                cubeGeometry.computeBoundingBox();
                var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0x4F7942});
                cube11 = new THREE.Mesh (cubeGeometry, cubeMaterial);

                cube11.position.set ('0.4', 0.8, 0.2);
                scene.add (cube11);


                var cubeGeometry = new THREE.BoxGeometry (.01,.01,.01);
                cubeGeometry.computeBoundingBox();
                var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xFFFFFF});
                cube12 = new THREE.Mesh (cubeGeometry, cubeMaterial);

                cube12.position.set (0, 0, 0);
                scene.add (cube12);


                var cubeGeometry = new THREE.BoxGeometry (.01,.01,.01);
                cubeGeometry.computeBoundingBox();
                var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xFFFFFF});
                cube13 = new THREE.Mesh (cubeGeometry, cubeMaterial);

                cube13.position.set ('-0.65', 1.1, '-0.13');
                scene.add (cube13);



            /* Model */

            var mtlLoader = new THREE.MTLLoader();
            mtlLoader.setBaseUrl('assets/');
            mtlLoader.setPath('assets/');
            mtlLoader.load('model.mtl', function (materials) {

                materials.preload();

    /*            materials.materials.default.map.magFilter = THREE.NearestFilter;  */
    /*            materials.materials.default.map.minFilter = THREE.LinearFilter; */

                var objLoader = new THREE.OBJLoader();
                objLoader.setMaterials(materials);
                objLoader.setPath('assets/');
                objLoader.load('model.obj', function (object) {


                    scene.add(object);
                    object.scale.set(1,1,1);
                });

            });

            /* Renderer */

            renderer = new THREE.WebGLRenderer();
    /*       renderer.setPixelRatio(window.devicePixelRatio);*/
            renderer.setSize(window.innerWidth, window.innerHeight);
    /*       renderer.setClearColor(new THREE.Color("hsl(0, 0%, 10%)"));*/

            container.appendChild(renderer.domElement);

            /* Controls */

            controls = new THREE.OrbitControls(camera, renderer.domElement);
            controls.enableDamping = true;
            controls.dampingFactor = 0.25;
            controls.enableZoom = true;

            /* Events */

    /*        window.addEventListener('resize', onWindowResize, false);
    /*        window.addEventListener('keydown', onKeyboardEvent, false); */

       
            var gridXZ = new THREE.GridHelper(50, 0.5);
     //       gridXZ.setColors( new THREE.Color(0xff0000), new THREE.Color(//0xffffff) );
            scene.add(gridXZ);
  

        }

        function onWindowResize() {

    /*        windowHalfX = window.innerWidth / 2;
    /*        windowHalfY = window.innerHeight / 2;    */

            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();

            renderer.setSize(window.innerWidth, window.innerHeight);

        }


        ambient.intensity = 0.25;
        scene.add(keyLight);
        scene.add(fillLight);
        scene.add(backLight);




        function animate() {

            requestAnimationFrame(animate);

            controls.update();

            render();

            /* Labels on CUBEs */
            var pos = getScreenTranslation(cube);
            console.log(pos);
            document.getElementById("label").style.left = pos.x+"px";
            document.getElementById("label").style.top = pos.y+"px";

            var pos = getScreenTranslation(cube2);
            console.log(pos);
            document.getElementById("label2").style.left = pos.x+"px";
            document.getElementById("label2").style.top = pos.y+"px";

            var pos = getScreenTranslation(cube3);
            console.log(pos);
            document.getElementById("label3").style.left = pos.x+"px";
            document.getElementById("label3").style.top = pos.y+"px";

            var pos = getScreenTranslation(cube4);
            console.log(pos);
            document.getElementById("label4").style.left = pos.x+"px";
            document.getElementById("label4").style.top = pos.y+"px";

            var pos = getScreenTranslation(cube5);
            console.log(pos);
            document.getElementById("label5").style.left = pos.x+"px";
            document.getElementById("label5").style.top = pos.y+"px";

            var pos = getScreenTranslation(cube6);
            console.log(pos);
            document.getElementById("label6").style.left = pos.x+"px";
            document.getElementById("label6").style.top = pos.y+"px";

            var pos = getScreenTranslation(cube7);
            console.log(pos);
            document.getElementById("label7").style.left = pos.x+"px";
            document.getElementById("label7").style.top = pos.y+"px";

            var pos = getScreenTranslation(cube8);
            console.log(pos);
            document.getElementById("label8").style.left = pos.x+"px";
            document.getElementById("label8").style.top = pos.y+"px";

            var pos = getScreenTranslation(cube9);
            console.log(pos);
            document.getElementById("label9").style.left = pos.x+"px";
            document.getElementById("label9").style.top = pos.y+"px";

            var pos = getScreenTranslation(cube10);
            console.log(pos);
            document.getElementById("label10").style.left = pos.x+"px";
            document.getElementById("label10").style.top = pos.y+"px";

            var pos = getScreenTranslation(cube11);
            console.log(pos);
            document.getElementById("label11").style.left = pos.x+"px";
            document.getElementById("label11").style.top = pos.y+"px";

            var pos = getScreenTranslation(cube12);
            console.log(pos);
            document.getElementById("label12").style.left = pos.x+"px";
            document.getElementById("label12").style.top = pos.y+"px";

            var pos = getScreenTranslation(cube13);
            console.log(pos);
            document.getElementById("label13").style.left = pos.x+"px";
            document.getElementById("label13").style.top = pos.y+"px";

            var pos = getScreenTranslation(cube14);
            console.log(pos);
            document.getElementById("label14").style.left = pos.x+"px";
            document.getElementById("label14").style.top = pos.y+"px";

            var pos = getScreenTranslation(cube15);
            console.log(pos);
            document.getElementById("label15").style.left = pos.x+"px";
            document.getElementById("label15").style.top = pos.y+"px";

            var pos = getScreenTranslation(cube16);
            console.log(pos);
            document.getElementById("label16").style.left = pos.x+"px";
            document.getElementById("label16").style.top = pos.y+"px";

            var pos = getScreenTranslation(cube17);
            console.log(pos);
            document.getElementById("label17").style.left = pos.x+"px";
            document.getElementById("label17").style.top = pos.y+"px";

            var pos = getScreenTranslation(cube18);
            console.log(pos);
            document.getElementById("label18").style.left = pos.x+"px";
            document.getElementById("label18").style.top = pos.y+"px";

            var pos = getScreenTranslation(cube19);
            console.log(pos);
            document.getElementById("label19").style.left = pos.x+"px";
            document.getElementById("label19").style.top = pos.y+"px";

            var pos = getScreenTranslation(cube20);
            console.log(pos);
            document.getElementById("label20").style.left = pos.x+"px";
            document.getElementById("label20").style.top = pos.y+"px";

            var pos = getScreenTranslation(cube21);
            console.log(pos);
            document.getElementById("label21").style.left = pos.x+"px";
            document.getElementById("label21").style.top = pos.y+"px";

            var pos = getScreenTranslation(cube22);
            console.log(pos);
            document.getElementById("label22").style.left = pos.x+"px";
            document.getElementById("label22").style.top = pos.y+"px";

            var pos = getScreenTranslation(cube23);
            console.log(pos);
            document.getElementById("label23").style.left = pos.x+"px";
            document.getElementById("label23").style.top = pos.y+"px";

            var pos = getScreenTranslation(cube24);
            console.log(pos);
            document.getElementById("label24").style.left = pos.x+"px";
            document.getElementById("label24").style.top = pos.y+"px";

            var pos = getScreenTranslation(cube25);
            console.log(pos);
            document.getElementById("label25").style.left = pos.x+"px";
            document.getElementById("label25").style.top = pos.y+"px";

            var pos = getScreenTranslation(cube26);
            console.log(pos);
            document.getElementById("label26").style.left = pos.x+"px";
            document.getElementById("label26").style.top = pos.y+"px";
        }

        /* BBJ ADDED WITH CUBE */

        function getScreenTranslation (obj) {

        var vector = new THREE.Vector3();
        var widthHalf = 0.5 * renderer.context.canvas.width;
        var heightHalf = 0.5 * renderer.context.canvas.height;

        var bbox = new THREE.BoundingBoxHelper(obj, 0xFFFFFF);
 
        bbox.update();
 
                bbox.updateMatrixWorld();
                bbox.updateMatrix();
        
        vector.setFromMatrixPosition(bbox.matrixWorld);
        vector.project(camera);
        vector.x = vector.x * widthHalf + widthHalf;
        vector.y = -(vector.y * heightHalf) + heightHalf;
        return {
                x: vector.x,
                y: vector.y
        };
};

        function render() {

            renderer.render(scene, camera);

             console.log( camera.position );

     //       if ( camera.position.x > 0 && camera.position.x < 180
     //           && camera.position.y > 0 && camera.position.y < 180 ) {
//
       //         console.log( 'show text' );
     //           document.getElementById( 'popup' ).style[ 'display' ] = 'inline-block';
//
      //      } else {
      //          console.log( 'hide text' );
      //          document.getElementById( 'popup' ).style[ 'display' ] = 'none';
      //      }
//
//
      //      if ( camera.position.x > 180 && camera.position.x < 360
      //          && camera.position.y > 180 && camera.position.y < 360 ) {
//
      //          console.log( 'show text' );
      //          document.getElementById( 'popup2' ).style[ 'display' ] = 'inline-block';
//
      //      } else {
      //          console.log( 'hide text' );
      //         document.getElementById( 'popup2' ).style[ 'display' ] = 'none';
      //      }

//
        }

