/* THIS IS FOR THE TEXT TO SHOW MORE WHEN CLICKED ON */
            $(document).ready(function(){
                $(".closeBachelors").click(function(){
                    $(".closeBachelors").hide();
                 });
                $(".closeBachelors").click(function(){
                    $(".bachelorsfurther").hide();
                    $(".bachelors").removeClass("active");
                 });

            });
        /* --------- */


        $('a[href^="#"]').click(function( ) {
              $('html, body').animate({
                  'scrollTop': $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
              }, 500);

              $('html, body').animate({
                  'scrollLeft': $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().left
              }, 500);

              return false;
          });






        /* ------------ */



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

            camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
            camera.position.z = 13;
            camera.position.x = 1;
            camera.position.y = 6;

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





            /* FAN AND POINTS ON IT  -------  */


                var cubeGeometry = new THREE.BoxGeometry (.03,9,.03);
                cubeGeometry.translate( 0, 3.5, 0 );
                var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0x22222222});
                cube1 = new THREE.Mesh (cubeGeometry, cubeMaterial);

                cube1.position.set (0, 0, 0);
                cube1.rotation.z=0.4*Math.PI;
                scene.add (cube1);

                        var cubeGeometry = new THREE.BoxGeometry (0.01,0.01,0.01);
                        cubeGeometry.translate( 0, -1, 0 );
                        var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xFFFFFF});
                        cube1a = new THREE.Mesh (cubeGeometry, cubeMaterial);

                        cube1a.position.set (0, 0, 0);
                        cube1a.rotation.z=0.4*Math.PI;
                        scene.add (cube1a);


                        var cubeGeometry = new THREE.BoxGeometry (0.1,0.1,0.1);
                        cubeGeometry.translate( 0, 0, 0 );
                        var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0x6666FF});
                        cube12020 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                        cube12020.position.set (0, 0, 0);
                        cube12020.rotation.z=0.4*Math.PI;
                        scene.add (cube12020);

                        var cubeGeometry = new THREE.BoxGeometry (0.1,0.1,0.1);
                        cubeGeometry.translate( 0, 1, 0 );
                        var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0x6666FF});
                        cube12010 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                        cube12010.position.set (0, 0, 0);
                        cube12010.rotation.z=0.4*Math.PI;
                        scene.add (cube12010);

                        var cubeGeometry = new THREE.BoxGeometry (0.1,0.1,0.1);
                        cubeGeometry.translate( 0, 2, 0 );
                        var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0x6666FF});
                        cube12000 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                        cube12000.position.set (0, 0, 0);
                        cube12000.rotation.z=0.4*Math.PI;
                        scene.add (cube12000);

                        var cubeGeometry = new THREE.BoxGeometry (0.1,0.1,0.1);
                        cubeGeometry.translate( 0, 3, 0 );
                        var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0x6666FF});
                        cube11990 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                        cube11990.position.set (0, 0, 0);
                        cube11990.rotation.z=0.4*Math.PI;
                        scene.add (cube11990);

                        var cubeGeometry = new THREE.BoxGeometry (0.1,0.1,0.1);
                        cubeGeometry.translate( 0, 4, 0 );
                        var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0x6666FF});
                        cube11980 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                        cube11980.position.set (0, 0, 0);
                        cube11980.rotation.z=0.4*Math.PI;
                        scene.add (cube11980);

                        var cubeGeometry = new THREE.BoxGeometry (0.1,0.1,0.1);
                        cubeGeometry.translate( 0, 5, 0 );
                        var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0x6666FF});
                        cube11970 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                        cube11970.position.set (0, 0, 0);
                        cube11970.rotation.z=0.4*Math.PI;
                        scene.add (cube11970);

                        var cubeGeometry = new THREE.BoxGeometry (0.1,0.1,0.1);
                        cubeGeometry.translate( 0, 6, 0 );
                        var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0x6666FF});
                        cube11960 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                        cube11960.position.set (0, 0, 0);
                        cube11960.rotation.z=0.4*Math.PI;
                        scene.add (cube11960);

                        var cubeGeometry = new THREE.BoxGeometry (0.1,0.1,0.1);
                        cubeGeometry.translate( 0, 7, 0 );
                        var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0x6666FF});
                        cube11950 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                        cube11950.position.set (0, 0, 0);
                        cube11950.rotation.z=0.4*Math.PI;
                        scene.add (cube11950);

                        var cubeGeometry = new THREE.BoxGeometry (0.1,0.1,0.1);
                        cubeGeometry.translate( 0, 8, 0 );
                        var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0x6666FF});
                        cube11940 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                        cube11940.position.set (0, 0, 0);
                        cube11940.rotation.z=0.4*Math.PI;
                        scene.add (cube11940);



                        var cubeGeometry = new THREE.BoxGeometry (1.29,0.01,0.01);
                        cubeGeometry.translate( 0, 7.98, 0 );
                        var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0x22222222});
                        cube1top = new THREE.Mesh (cubeGeometry, cubeMaterial);
                        cube1top.position.set (0, 0, 0);
                        cube1top.rotation.z=0.375*Math.PI;
                        scene.add (cube1top);


                var cubeGeometry = new THREE.BoxGeometry (.01,9,.01);
                cubeGeometry.translate( 0, 3.5, 0 );
                var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0x22222222});
                cube2 = new THREE.Mesh (cubeGeometry, cubeMaterial);

                cube2.position.set (0, 0, 0);
                cube2.rotation.z=0.35*Math.PI;
                scene.add (cube2);
                            var cubeGeometry = new THREE.BoxGeometry (1.29,0.01,0.01);
                            cubeGeometry.translate( 0, 7.98, 0 );
                            var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0x22222222});
                            cube2top = new THREE.Mesh (cubeGeometry, cubeMaterial);
                            cube2top.position.set (0, 0, 0);
                            cube2top.rotation.z=0.325*Math.PI;
                            scene.add (cube2top);




                            var cubeGeometry = new THREE.BoxGeometry (0.01,0.01,0.01);
                            cubeGeometry.translate( 0, 3.5, 0 );
                            var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xFFFFFF});
                            cube2raindrop = new THREE.Mesh (cubeGeometry, cubeMaterial);
                            cube2raindrop.position.set (0, 0, 0);
                            cube2raindrop.rotation.z=0.35*Math.PI;
                            scene.add (cube2raindrop);

                            var cubeGeometry = new THREE.BoxGeometry (0.01,0.01,0.01);
                            cubeGeometry.translate( 0, 7, 0 );
                            var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xFFFFFF});
                            cube2raindrop2 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                            cube2raindrop2.position.set (0, 0, 0);
                            cube2raindrop2.rotation.z=0.35*Math.PI;
                            scene.add (cube2raindrop2);


                var cubeGeometry = new THREE.BoxGeometry (.01,9,.01);
                cubeGeometry.translate( 0, 3.5, 0 );
                var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0x22222222});
                cube3 = new THREE.Mesh (cubeGeometry, cubeMaterial);

                cube3.position.set (0, 0, 0);
                cube3.rotation.z=0.3*Math.PI;
                scene.add (cube3);
                            var cubeGeometry = new THREE.BoxGeometry (1.29,0.01,0.01);
                            cubeGeometry.translate( 0, 7.98, 0 );
                            var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0x22222222});
                            cube3top = new THREE.Mesh (cubeGeometry, cubeMaterial);
                            cube3top.position.set (0, 0, 0);
                            cube3top.rotation.z=0.275*Math.PI;
                            scene.add (cube3top);


                var cubeGeometry = new THREE.BoxGeometry (.01,9,.01);
                cubeGeometry.translate( 0, 3.5, 0 );
                var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0x22222222});
                cube4 = new THREE.Mesh (cubeGeometry, cubeMaterial);

                cube4.position.set (0, 0, 0);
                cube4.rotation.z=0.25*Math.PI;
                scene.add (cube4);
                            var cubeGeometry = new THREE.BoxGeometry (1.29,0.01,0.01);
                            cubeGeometry.translate( 0, 7.98, 0 );
                            var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0x22222222});
                            cube4top = new THREE.Mesh (cubeGeometry, cubeMaterial);
                            cube4top.position.set (0, 0, 0);
                            cube4top.rotation.z=0.225*Math.PI;
                            scene.add (cube4top);


                var cubeGeometry = new THREE.BoxGeometry (.01,9,.01);
                cubeGeometry.translate( 0, 3.5, 0 );
                var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0x22222222});
                cube5 = new THREE.Mesh (cubeGeometry, cubeMaterial);

                cube5.position.set (0, 0, 0);
                cube5.rotation.z=0.2*Math.PI;
                scene.add (cube5);

                        var cubeGeometry = new THREE.BoxGeometry (0.01,0.01,0.01);
                        cubeGeometry.translate( 0, -1, 0 );
                        var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xFFFFFF});
                        cube5a = new THREE.Mesh (cubeGeometry, cubeMaterial);

                        cube5a.position.set (0, 0, 0);
                        cube5a.rotation.z=0.2*Math.PI;
                        scene.add (cube5a);

                            var cubeGeometry = new THREE.BoxGeometry (1.29,0.01,0.01);
                            cubeGeometry.translate( 0, 7.98, 0 );
                            var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0x22222222});
                            cube5top = new THREE.Mesh (cubeGeometry, cubeMaterial);
                            cube5top.position.set (0, 0, 0);
                            cube5top.rotation.z=0.175*Math.PI;
                            scene.add (cube5top);


                var cubeGeometry = new THREE.BoxGeometry (.01,9,.01);
                cubeGeometry.translate( 0, 3.5, 0 );
                var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0x22222222});
                cube6 = new THREE.Mesh (cubeGeometry, cubeMaterial);

                cube6.position.set (0, 0, 0);
                cube6.rotation.z=0.15*Math.PI;
                scene.add (cube6);
                            var cubeGeometry = new THREE.BoxGeometry (1.29,0.01,0.01);
                            cubeGeometry.translate( 0, 7.98, 0 );
                            var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0x22222222});
                            cube6top = new THREE.Mesh (cubeGeometry, cubeMaterial);
                            cube6top.position.set (0, 0, 0);
                            cube6top.rotation.z=0.125*Math.PI;
                            scene.add (cube6top);


                var cubeGeometry = new THREE.BoxGeometry (.01,9,.01);
                cubeGeometry.translate( 0, 3.5, 0 );
                var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0x22222222});
                cube7 = new THREE.Mesh (cubeGeometry, cubeMaterial);

                cube7.position.set (0, 0, 0);
                cube7.rotation.z=0.1*Math.PI;
                scene.add (cube7);
                            var cubeGeometry = new THREE.BoxGeometry (1.29,0.01,0.01);
                            cubeGeometry.translate( 0, 7.98, 0 );
                            var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0x22222222});
                            cube7top = new THREE.Mesh (cubeGeometry, cubeMaterial);
                            cube7top.position.set (0, 0, 0);
                            cube7top.rotation.z=0.075*Math.PI;
                            scene.add (cube7top);


                var cubeGeometry = new THREE.BoxGeometry (.01,9,.01);
                cubeGeometry.translate( 0, 3.5, 0 );
                var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0x22222222});
                cube8 = new THREE.Mesh (cubeGeometry, cubeMaterial);

                cube8.position.set (0, 0, 0);
                cube8.rotation.z=0.05*Math.PI;
                scene.add (cube8);
                            var cubeGeometry = new THREE.BoxGeometry (1.29,0.01,0.01);
                            cubeGeometry.translate( 0, 7.98, 0 );
                            var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0x22222222});
                            cube8top = new THREE.Mesh (cubeGeometry, cubeMaterial);
                            cube8top.position.set (0, 0, 0);
                            cube8top.rotation.z=0.025*Math.PI;
                            scene.add (cube8top);


                var cubeGeometry = new THREE.BoxGeometry (.01,9,.01);
                cubeGeometry.translate( 0, 3.5, 0 );
                var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0x22222222});
                cube9 = new THREE.Mesh (cubeGeometry, cubeMaterial);

                cube9.position.set (0, 0, 0);
                cube9.rotation.z=0*Math.PI;
                scene.add (cube9);
                            var cubeGeometry = new THREE.BoxGeometry (1.29,0.01,0.01);
                            cubeGeometry.translate( 0, 7.98, 0 );
                            var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0x22222222});
                            cube9top = new THREE.Mesh (cubeGeometry, cubeMaterial);
                            cube9top.position.set (0, 0, 0);
                            cube9top.rotation.z=-0.025*Math.PI;
                            scene.add (cube9top);

                        
                var cubeGeometry = new THREE.BoxGeometry (.01,9,.01);
                cubeGeometry.translate( 0, 3.5, 0 );
                var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0x22222222});
                cube10 = new THREE.Mesh (cubeGeometry, cubeMaterial);

                cube10.position.set (0, 0, 0);
                cube10.rotation.z=-0.05*Math.PI;
                scene.add (cube10);
                            var cubeGeometry = new THREE.BoxGeometry (1.29,0.01,0.01);
                            cubeGeometry.translate( 0, 7.98, 0 );
                            var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0x22222222});
                            cube10top = new THREE.Mesh (cubeGeometry, cubeMaterial);
                            cube10top.position.set (0, 0, 0);
                            cube10top.rotation.z=-0.075*Math.PI;
                            scene.add (cube10top);


                var cubeGeometry = new THREE.BoxGeometry (.01,9,.01);
                cubeGeometry.translate( 0, 3.5, 0 );
                var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0x22222222});
                cube11 = new THREE.Mesh (cubeGeometry, cubeMaterial);

                cube11.position.set (0, 0, 0);
                cube11.rotation.z=-0.1*Math.PI;
                scene.add (cube11);
                            var cubeGeometry = new THREE.BoxGeometry (1.29,0.01,0.01);
                            cubeGeometry.translate( 0, 7.98, 0 );
                            var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0x22222222});
                            cube12top = new THREE.Mesh (cubeGeometry, cubeMaterial);
                            cube12top.position.set (0, 0, 0);
                            cube12top.rotation.z=-0.125*Math.PI;
                            scene.add (cube12top);


                var cubeGeometry = new THREE.BoxGeometry (.01,9,.01);
                cubeGeometry.translate( 0, 3.5, 0 );
                var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0x22222222});
                cube12 = new THREE.Mesh (cubeGeometry, cubeMaterial);

                cube12.position.set (0, 0, 0);
                cube12.rotation.z=-0.15*Math.PI;
                scene.add (cube12);
                            var cubeGeometry = new THREE.BoxGeometry (1.29,0.01,0.01);
                            cubeGeometry.translate( 0, 7.98, 0 );
                            var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0x22222222});
                            cube13top = new THREE.Mesh (cubeGeometry, cubeMaterial);
                            cube13top.position.set (0, 0, 0);
                            cube13top.rotation.z=-0.175*Math.PI;
                            scene.add (cube13top);


                var cubeGeometry = new THREE.BoxGeometry (.01,9,.01);
                cubeGeometry.translate( 0, 3.5, 0 );
                var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0x22222222});
                cube13 = new THREE.Mesh (cubeGeometry, cubeMaterial);

                cube13.position.set (0, 0, 0);
                cube13.rotation.z=-0.2*Math.PI;
                scene.add (cube13);
                            var cubeGeometry = new THREE.BoxGeometry (1.29,0.01,0.01);
                            cubeGeometry.translate( 0, 7.98, 0 );
                            var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0x22222222});
                            cube14top = new THREE.Mesh (cubeGeometry, cubeMaterial);
                            cube14top.position.set (0, 0, 0);
                            cube14top.rotation.z=-0.225*Math.PI;
                            scene.add (cube14top);


                var cubeGeometry = new THREE.BoxGeometry (.01,9,.01);
                cubeGeometry.translate( 0, 3.5, 0 );
                var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0x22222222});
                cube14 = new THREE.Mesh (cubeGeometry, cubeMaterial);

                cube14.position.set (0, 0, 0);
                cube14.rotation.z=-0.25*Math.PI;
                scene.add (cube14);
                            var cubeGeometry = new THREE.BoxGeometry (1.29,0.01,0.01);
                            cubeGeometry.translate( 0, 7.98, 0 );
                            var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0x22222222});
                            cube15top = new THREE.Mesh (cubeGeometry, cubeMaterial);
                            cube15top.position.set (0, 0, 0);
                            cube15top.rotation.z=-0.275*Math.PI;
                            scene.add (cube15top);


                var cubeGeometry = new THREE.BoxGeometry (.01,9,.01);
                cubeGeometry.translate( 0, 3.5, 0 );
                var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0x22222222});
                cube16 = new THREE.Mesh (cubeGeometry, cubeMaterial);

                cube16.position.set (0, 0, 0);
                cube16.rotation.z=-0.3*Math.PI;
                scene.add (cube16);
                            var cubeGeometry = new THREE.BoxGeometry (1.29,0.01,0.01);
                            cubeGeometry.translate( 0, 7.98, 0 );
                            var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0x22222222});
                            cube16top = new THREE.Mesh (cubeGeometry, cubeMaterial);
                            cube16top.position.set (0, 0, 0);
                            cube16top.rotation.z=-0.325*Math.PI;
                            scene.add (cube16top);


                var cubeGeometry = new THREE.BoxGeometry (.01,9,.01);
                cubeGeometry.translate( 0, 3.5, 0 );
                var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0x22222222});
                cube17 = new THREE.Mesh (cubeGeometry, cubeMaterial);

                cube17.position.set (0, 0, 0);
                cube17.rotation.z=-0.35*Math.PI;
                scene.add (cube17);
                            var cubeGeometry = new THREE.BoxGeometry (1.29,0.01,0.01);
                            cubeGeometry.translate( 0, 7.98, 0 );
                            var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0x22222222});
                            cube17top = new THREE.Mesh (cubeGeometry, cubeMaterial);
                            cube17top.position.set (0, 0, 0);
                            cube17top.rotation.z=-0.375*Math.PI;
                            scene.add (cube17top);


                var cubeGeometry = new THREE.BoxGeometry (.03,9,.03);
                cubeGeometry.translate( 0, 3.5, 0 );
                var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0x22222222});
                cube18 = new THREE.Mesh (cubeGeometry, cubeMaterial);

                cube18.position.set (0, 0, 0);
                cube18.rotation.z=-0.4*Math.PI;
                scene.add (cube18);





                    /* notFAN */



/*                var cubeGeometry = new THREE.BoxGeometry (.1,.1,.1);
                cubeGeometry.translate( 12, -1, -0.8 );
                var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0x22222222});
                juikbuinstadscube = new THREE.Mesh (cubeGeometry, cubeMaterial);
                scene.add (juikbuinstadscube);


                var cubeGeometry = new THREE.BoxGeometry (.1,.1,.1);
                cubeGeometry.translate( -12, 7, -0.8 );
                var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0x22222222});
                iyeolchiyeolstadscube = new THREE.Mesh (cubeGeometry, cubeMaterial);
                scene.add (iyeolchiyeolstadscube);
*/










/*                            /* Model */
/*
/*                            var mtlLoader = new THREE.MTLLoader();
/*                            mtlLoader.setBaseUrl('assets/');
/*                            mtlLoader.setPath('assets/');
/*                            mtlLoader.load('model.mtl', function (materials) {
/*
/*                                materials.preload();
/*
/*                    /*            materials.materials.default.map.magFilter = THREE.NearestFilter;  */
/*                    /*            materials.materials.default.map.minFilter = THREE.LinearFilter; */
/*
/*                                var objLoader = new THREE.OBJLoader();
/*                                objLoader.setMaterials(materials);
/*                                objLoader.setPath('assets/');
/*                                objLoader.load('model.obj', function (object) {
/*
/*
/*                                    scene.add(object);
/*                                    object.scale.set(1,1,1);
/*                                });
/*
/*                            });

            /* Renderer */

            renderer = new THREE.WebGLRenderer({ alpha: true });
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.setSize(window.innerWidth, window.innerHeight);
    /*       renderer.setClearColor(new THREE.Color("hsl(0, 0%, 10%)"));*/
            renderer.setClearColor( 0xffffff, 0 ); // second param is opacity, 0 => transparent

            container.appendChild(renderer.domElement);


            /* Controls */

            controls = new THREE.OrbitControls(camera, renderer.domElement);
            controls.enableDamping = true;
            controls.dampingFactor = 0.25;
            controls.enableZoom = false;




            

            /* Events */

    /*        window.addEventListener('resize', onWindowResize, false);
    /*        window.addEventListener('keydown', onKeyboardEvent, false); */

       
            /* Grid */
            
    //        var gridXZ = new THREE.GridHelper(50, 0.5);
    //        gridXZ.setColors( new THREE.Color(0x99999999), new THREE.Color(0xffffff) );
    //        scene.add(gridXZ);
  

        }

        function onWindowResize() {

            windowHalfX = window.innerWidth / 2;
            windowHalfY = window.innerHeight / 2;    

            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();

            renderer.setPixelRatio(window.devicePixelRatio);
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
            var pos = getScreenTranslation(cube5a);
            console.log(pos);
            document.getElementById("reykjavikperson").style.left = pos.x - 20 + 200 +"px";
            document.getElementById("reykjavikperson").style.top = pos.y - 20 + 400 +"px";

            var pos = getScreenTranslation(cube12010);
            console.log(pos);
            document.getElementById("2010").style.left = pos.x + 200 +"px";
            document.getElementById("2010").style.top = pos.y + 400 +"px";

            var pos = getScreenTranslation(cube12000);
            console.log(pos);
            document.getElementById("2000").style.left = pos.x + 200 +"px";
            document.getElementById("2000").style.top = pos.y + 400 +"px";

            var pos = getScreenTranslation(cube11990);
            console.log(pos);
            document.getElementById("1990").style.left = pos.x + 200 +"px";
            document.getElementById("1990").style.top = pos.y + 400 +"px";

            var pos = getScreenTranslation(cube11980);
            console.log(pos);
            document.getElementById("1980").style.left = pos.x + 200 +"px";
            document.getElementById("1980").style.top = pos.y + 400 +"px";

            var pos = getScreenTranslation(cube11970);
            console.log(pos);
            document.getElementById("1970").style.left = pos.x + 200 +"px";
            document.getElementById("1970").style.top = pos.y + 400 +"px";

            var pos = getScreenTranslation(cube11960);
            console.log(pos);
            document.getElementById("1960").style.left = pos.x + 200 +"px";
            document.getElementById("1960").style.top = pos.y + 400 +"px";

            var pos = getScreenTranslation(cube11950);
            console.log(pos);
            document.getElementById("1950").style.left = pos.x + 200 +"px";
            document.getElementById("1950").style.top = pos.y + 400 +"px";

            var pos = getScreenTranslation(cube11940);
            console.log(pos);
            document.getElementById("1940").style.left = pos.x + 200 +"px";
            document.getElementById("1940").style.top = pos.y + 400 +"px";




            var pos = getScreenTranslation(cube2raindrop);
            console.log(pos);
            document.getElementById("raindroponfanid").style.left = pos.x - 10 + 200 +"px";
            document.getElementById("raindroponfanid").style.top = pos.y - 10 + 400 +"px";

            var pos = getScreenTranslation(cube2raindrop2);
            console.log(pos);
            document.getElementById("raindroponfanid2").style.left = pos.x - 10 + 200 +"px";
            document.getElementById("raindroponfanid2").style.top = pos.y - 10 + 400 +"px";





            var pos = getScreenTranslation(cube1a);
            console.log(pos);
            document.getElementById("tryoutperson").style.left = pos.x - 25 + 200 +"px";
            document.getElementById("tryoutperson").style.top = pos.y - 15 + 400 +"px";



/*            var pos = getScreenTranslation(juikbuinstadscube);
            console.log(pos);
            document.getElementById("juikbuinstads").style.left = pos.x - 200 + 200 +"px";
            document.getElementById("juikbuinstads").style.top = pos.y + 15 + 400 +"px";

            var pos = getScreenTranslation(iyeolchiyeolstadscube);
            console.log(pos);
            document.getElementById("iyeolchiyeolstads").style.left = pos.x - 200 + 200 +"px";
            document.getElementById("iyeolchiyeolstads").style.top = pos.y + 15 + 400 +"px";
*/

    
        }

        /* BBJ ADDED WITH CUBE */

        function getScreenTranslation (obj) {

        var vector = new THREE.Vector3();
        var widthHalf = 0.28 * renderer.context.canvas.width;
        var heightHalf = 0.28 * renderer.context.canvas.height;

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



var $draggable = $('.draga').draggabilly();


	$('p').each(function(i, item){
		var top = $(item).offset().top;
		console.log(top, i, item);

		$(this).css({
			top: top,
	
		});
	});

	$('p').css({
		position: 'absolute' 
	});

	$(".draga").on("click",function(){
		$(this).parent().append(this);
	});




        }


















var object = document.getElementById('element'),
initY, firstY;

object.addEventListener('mousedown', function(e) {

    e.preventDefault();
    initY = this.offsetTop;
    firstY = e.pageY;

    this.addEventListener('mousemove', dragIt, false);

    window.addEventListener('mouseup', function() {
        object.removeEventListener('mousemove', dragIt, false);
    }, false);

}, false);

object.addEventListener('touchstart', function(e) {

    e.preventDefault();
    initY = this.offsetTop;
    var touch = e.touches;
    firstY = touch[0].pageY;

    this.addEventListener('touchmove', swipeIt, false);

    window.addEventListener('touchend', function(e) {
        e.preventDefault();
        object.removeEventListener('touchmove', swipeIt, false);
    }, false);

}, false);

function dragIt(e) {
    this.style.top = initY+e.pageY-firstY + 'px';
}

function swipeIt(e) {
    var contact = e.touches;
    this.style.top = initY+contact[0].pageY-firstY + 'px';
}

	
