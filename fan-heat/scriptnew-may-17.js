




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





        // imagemaps are not responsive (because they are so old!), but this script makes them act as such
    //    $('map').imageMapResize();



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

            ambient = new THREE.AmbientLight(0xf5F5F5, 1.0);
            scene.add(ambient);

            keyLight = new THREE.DirectionalLight(new THREE.Color('hsl(30, 100%, 75%)'), 1.0);
            keyLight.position.set(-100, 0, 100);

            fillLight = new THREE.DirectionalLight(new THREE.Color('hsl(240, 100%, 75%)'), 0.75);
            fillLight.position.set(100, 0, 100);

            backLight = new THREE.DirectionalLight(0xf5F5F5, 1.0);
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
                        var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                        cube1a = new THREE.Mesh (cubeGeometry, cubeMaterial);
                        cube1a.position.set (0, 0, 0);
                        cube1a.rotation.z=0.4*Math.PI;
                        scene.add (cube1a);

                    /* YEARS */
                        var cubeGeometry = new THREE.BoxGeometry (0.01,0.01,0.01);
                        cubeGeometry.translate( 0, 0, 0 );
                        var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0x6666FF});
                        cube12020 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                        cube12020.position.set (0, 0, 0);
                        cube12020.rotation.z=0.4*Math.PI;
                        scene.add (cube12020);

                        var cubeGeometry = new THREE.BoxGeometry (0.01,0.01,0.01);
                        cubeGeometry.translate( 0, 1, 0 );
                        var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0x6666FF});
                        cube12010 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                        cube12010.position.set (0, 0, 0);
                        cube12010.rotation.z=0.4*Math.PI;
                        scene.add (cube12010);

                        var cubeGeometry = new THREE.BoxGeometry (0.01,0.01,0.01);
                        cubeGeometry.translate( 0, 2, 0 );
                        var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0x6666FF});
                        cube12000 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                        cube12000.position.set (0, 0, 0);
                        cube12000.rotation.z=0.4*Math.PI;
                        scene.add (cube12000);

                        var cubeGeometry = new THREE.BoxGeometry (0.01,0.01,0.01);
                        cubeGeometry.translate( 0, 3, 0 );
                        var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0x6666FF});
                        cube11990 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                        cube11990.position.set (0, 0, 0);
                        cube11990.rotation.z=0.4*Math.PI;
                        scene.add (cube11990);

                        var cubeGeometry = new THREE.BoxGeometry (0.01,0.01,0.01);
                        cubeGeometry.translate( 0, 4, 0 );
                        var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0x6666FF});
                        cube11980 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                        cube11980.position.set (0, 0, 0);
                        cube11980.rotation.z=0.4*Math.PI;
                        scene.add (cube11980);

                        var cubeGeometry = new THREE.BoxGeometry (0.01,0.01,0.01);
                        cubeGeometry.translate( 0, 5, 0 );
                        var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0x6666FF});
                        cube11970 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                        cube11970.position.set (0, 0, 0);
                        cube11970.rotation.z=0.4*Math.PI;
                        scene.add (cube11970);

                        var cubeGeometry = new THREE.BoxGeometry (0.01,0.01,0.01);
                        cubeGeometry.translate( 0, 6, 0 );
                        var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0x6666FF});
                        cube11960 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                        cube11960.position.set (0, 0, 0);
                        cube11960.rotation.z=0.4*Math.PI;
                        scene.add (cube11960);

                        var cubeGeometry = new THREE.BoxGeometry (0.01,0.01,0.01);
                        cubeGeometry.translate( 0, 7, 0 );
                        var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0x6666FF});
                        cube11950 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                        cube11950.position.set (0, 0, 0);
                        cube11950.rotation.z=0.4*Math.PI;
                        scene.add (cube11950);

                        var cubeGeometry = new THREE.BoxGeometry (0.01,0.01,0.01);
                        cubeGeometry.translate( 0, 8, 0 );
                        var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0x6666FF});
                        cube11940 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                        cube11940.position.set (0, 0, 0);
                        cube11940.rotation.z=0.4*Math.PI;
                        scene.add (cube11940);



                        var cubeGeometry = new THREE.BoxGeometry (1.29,0.01,0.01);
                        cubeGeometry.translate( 0, 7.98, 0 );
                        var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                        cube1top = new THREE.Mesh (cubeGeometry, cubeMaterial);
                        cube1top.position.set (0, 0, 0);
                        cube1top.rotation.z=0.375*Math.PI;
                        scene.add (cube1top);
                /*  FILLING  */

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.99,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube16f1 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube16f1.position.set (0, 0, 0);
                    cube16f1.rotation.z=0.3985*Math.PI;
                    scene.add (cube16f1);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.9875,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube16f2 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube16f2.position.set (0, 0, 0);
                    cube16f2.rotation.z=0.397*Math.PI;
                    scene.add (cube16f2);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.985,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube16f3 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube16f3.position.set (0, 0, 0);
                    cube16f3.rotation.z=0.3955*Math.PI;
                    scene.add (cube16f3);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.9825,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube16f4 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube16f4.position.set (0, 0, 0);
                    cube16f4.rotation.z=0.394*Math.PI;
                    scene.add (cube16f4);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.98,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube16f5 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube16f5.position.set (0, 0, 0);
                    cube16f5.rotation.z=0.3925*Math.PI;
                    scene.add (cube16f5);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.9775,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube16f6 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube16f6.position.set (0, 0, 0);
                    cube16f6.rotation.z=0.391*Math.PI;
                    scene.add (cube16f6);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.975,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube16f7 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube16f7.position.set (0, 0, 0);
                    cube16f7.rotation.z=0.3895*Math.PI;
                    scene.add (cube16f7);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.9725,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube16f8 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube16f8.position.set (0, 0, 0);
                    cube16f8.rotation.z=0.388*Math.PI;
                    scene.add (cube16f8);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.97,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube16f9 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube16f9.position.set (0, 0, 0);
                    cube16f9.rotation.z=0.3865*Math.PI;
                    scene.add (cube16f9);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.9675,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube16f10 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube16f10.position.set (0, 0, 0);
                    cube16f10.rotation.z=0.385*Math.PI;
                    scene.add (cube16f10);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.965,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube16f11 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube16f11.position.set (0, 0, 0);
                    cube16f11.rotation.z=0.3835*Math.PI;
                    scene.add (cube16f11);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.9625,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube16f12 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube16f12.position.set (0, 0, 0);
                    cube16f12.rotation.z=0.382*Math.PI;
                    scene.add (cube16f12);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.96,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube16f13 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube16f13.position.set (0, 0, 0);
                    cube16f13.rotation.z=0.3805*Math.PI;
                    scene.add (cube16f13);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.9575,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube16f14 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube16f14.position.set (0, 0, 0);
                    cube16f14.rotation.z=0.379*Math.PI;
                    scene.add (cube16f14);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.955,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube16f15 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube16f15.position.set (0, 0, 0);
                    cube16f15.rotation.z=0.3775*Math.PI;
                    scene.add (cube16f15);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.9525,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube16f16 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube16f16.position.set (0, 0, 0);
                    cube16f16.rotation.z=0.376*Math.PI;
                    scene.add (cube16f16);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.95,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube16f17 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube16f17.position.set (0, 0, 0);
                    cube16f17.rotation.z=0.3745*Math.PI;
                    scene.add (cube16f17);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.9525,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube16f18 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube16f18.position.set (0, 0, 0);
                    cube16f18.rotation.z=0.373*Math.PI;
                    scene.add (cube16f18);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.955,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube16f19 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube16f19.position.set (0, 0, 0);
                    cube16f19.rotation.z=0.3715*Math.PI;
                    scene.add (cube16f19);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.9575,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube16f20 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube16f20.position.set (0, 0, 0);
                    cube16f20.rotation.z=0.37*Math.PI;
                    scene.add (cube16f20);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.96,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube16f21 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube16f21.position.set (0, 0, 0);
                    cube16f21.rotation.z=0.3685*Math.PI;
                    scene.add (cube16f21);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.9625,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube16f22 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube16f22.position.set (0, 0, 0);
                    cube16f22.rotation.z=0.367*Math.PI;
                    scene.add (cube16f22);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.965,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube16f23 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube16f23.position.set (0, 0, 0);
                    cube16f23.rotation.z=0.3655*Math.PI;
                    scene.add (cube16f23);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.9675,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube16f24 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube16f24.position.set (0, 0, 0);
                    cube16f24.rotation.z=0.364*Math.PI;
                    scene.add (cube16f24);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.97,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube16f25 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube16f25.position.set (0, 0, 0);
                    cube16f25.rotation.z=0.3625*Math.PI;
                    scene.add (cube16f25);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.9725,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube16f26 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube16f26.position.set (0, 0, 0);
                    cube16f26.rotation.z=0.361*Math.PI;
                    scene.add (cube16f26);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.975,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube16f27 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube16f27.position.set (0, 0, 0);
                    cube16f27.rotation.z=0.3595*Math.PI;
                    scene.add (cube16f27);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.9775,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube16f28 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube16f28.position.set (0, 0, 0);
                    cube16f28.rotation.z=0.358*Math.PI;
                    scene.add (cube16f28);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.98,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube16f29 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube16f29.position.set (0, 0, 0);
                    cube16f29.rotation.z=0.3565*Math.PI;
                    scene.add (cube16f29);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.9825,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube16f30 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube16f30.position.set (0, 0, 0);
                    cube16f30.rotation.z=0.355*Math.PI;
                    scene.add (cube16f30);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.985,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube16f31 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube16f31.position.set (0, 0, 0);
                    cube16f31.rotation.z=0.3535*Math.PI;
                    scene.add (cube16f31);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.9875,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube16f32 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube16f32.position.set (0, 0, 0);
                    cube16f32.rotation.z=0.352*Math.PI;
                    scene.add (cube16f32);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.99,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube16f33 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube16f33.position.set (0, 0, 0);
                    cube16f33.rotation.z=0.3505*Math.PI;
                    scene.add (cube16f33);

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
                            cubeGeometry.translate( 0, -1, 0 );
                            var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                            cube2a = new THREE.Mesh (cubeGeometry, cubeMaterial);
                            cube2a.position.set (0, 0, 0);
                            cube2a.rotation.z=0.35*Math.PI;
                            scene.add (cube2a);



                            var cubeGeometry = new THREE.BoxGeometry (0.01,0.01,0.01);
                            cubeGeometry.translate( 0, 3.5, 0 );
                            var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                            cube2raindrop = new THREE.Mesh (cubeGeometry, cubeMaterial);
                            cube2raindrop.position.set (0, 0, 0);
                            cube2raindrop.rotation.z=0.35*Math.PI;
                            scene.add (cube2raindrop);

                            var cubeGeometry = new THREE.BoxGeometry (0.01,0.01,0.01);
                            cubeGeometry.translate( 0, 7.1, 0 );
                            var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
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


                            var cubeGeometry = new THREE.BoxGeometry (0.01,0.01,0.01);
                            cubeGeometry.translate( 0, 7, 0 );
                            var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                            cube3raindrop2 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                            cube3raindrop2.position.set (0, 0, 0);
                            cube3raindrop2.rotation.z=0.3*Math.PI;
                            scene.add (cube3raindrop2);



                            
                            var cubeGeometry = new THREE.BoxGeometry (0.01,0.01,0.01);
                            cubeGeometry.translate( 0, -1, 0 );
                            var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                            cube3a = new THREE.Mesh (cubeGeometry, cubeMaterial);
                            cube3a.position.set (0, 0, 0);
                            cube3a.rotation.z=0.3*Math.PI;
                            scene.add (cube3a);


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



                            var cubeGeometry = new THREE.BoxGeometry (0.01,0.01,0.01);
                            cubeGeometry.translate( 0, -1, 0 );
                            var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                            cube4a = new THREE.Mesh (cubeGeometry, cubeMaterial);
                            cube4a.position.set (0, 0, 0);
                            cube4a.rotation.z=0.25*Math.PI;
                            scene.add (cube4a);


                var cubeGeometry = new THREE.BoxGeometry (.01,9,.01);
                cubeGeometry.translate( 0, 3.5, 0 );
                var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0x22222222});
                cube5 = new THREE.Mesh (cubeGeometry, cubeMaterial);

                cube5.position.set (0, 0, 0);
                cube5.rotation.z=0.2*Math.PI;
                scene.add (cube5);

                        var cubeGeometry = new THREE.BoxGeometry (0.01,0.01,0.01);
                        cubeGeometry.translate( 0, -1, 0 );
                        var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
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




                            var cubeGeometry = new THREE.BoxGeometry (0.01,0.01,0.01);
                            cubeGeometry.translate( 0, -1, 0 );
                            var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                            cube6a = new THREE.Mesh (cubeGeometry, cubeMaterial);
                            cube6a.position.set (0, 0, 0);
                            cube6a.rotation.z=0.15*Math.PI;
                            scene.add (cube6a);


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



                            var cubeGeometry = new THREE.BoxGeometry (0.01,0.01,0.01);
                            cubeGeometry.translate( 0, -1, 0 );
                            var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                            cube7a = new THREE.Mesh (cubeGeometry, cubeMaterial);
                            cube7a.position.set (0, 0, 0);
                            cube7a.rotation.z=0.1*Math.PI;
                            scene.add (cube7a);


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


                            var cubeGeometry = new THREE.BoxGeometry (0.01,0.01,0.01);
                            cubeGeometry.translate( 0, -1, 0 );
                            var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                            cube8a = new THREE.Mesh (cubeGeometry, cubeMaterial);
                            cube8a.position.set (0, 0, 0);
                            cube8a.rotation.z=0.05*Math.PI;
                            scene.add (cube8a);


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


                            var cubeGeometry = new THREE.BoxGeometry (0.01,0.01,0.01);
                            cubeGeometry.translate( 0, -1, 0 );
                            var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                            cube9a = new THREE.Mesh (cubeGeometry, cubeMaterial);
                            cube9a.position.set (0, 0, 0);
                            cube9a.rotation.z=0*Math.PI;
                            scene.add (cube9a);

                        
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


                            var cubeGeometry = new THREE.BoxGeometry (0.01,0.01,0.01);
                            cubeGeometry.translate( 0, -1, 0 );
                            var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                            cube10a = new THREE.Mesh (cubeGeometry, cubeMaterial);
                            cube10a.position.set (0, 0, 0);
                            cube10a.rotation.z=-0.05*Math.PI;
                            scene.add (cube10a);


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

                            var cubeGeometry = new THREE.BoxGeometry (0.01,0.01,0.01);
                            cubeGeometry.translate( 0, -1, 0 );
                            var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                            cube11a = new THREE.Mesh (cubeGeometry, cubeMaterial);
                            cube11a.position.set (0, 0, 0);
                            cube11a.rotation.z=-0.1*Math.PI;
                            scene.add (cube11a);


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

                            var cubeGeometry = new THREE.BoxGeometry (0.01,0.01,0.01);
                            cubeGeometry.translate( 0, -1, 0 );
                            var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0x22222222});
                            cube12raindrop = new THREE.Mesh (cubeGeometry, cubeMaterial);
                            cube12raindrop.position.set (0, 0, 0);
                            cube12raindrop.rotation.z=-0.15*Math.PI;
                            scene.add (cube12raindrop);


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
                /*  FILLING  */

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.99,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube16f1 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube16f1.position.set (0, 0, 0);
                    cube16f1.rotation.z=-0.201*Math.PI;
                    scene.add (cube16f1);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.9875,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube16f2 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube16f2.position.set (0, 0, 0);
                    cube16f2.rotation.z=-0.2025*Math.PI;
                    scene.add (cube16f2);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.985,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube16f3 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube16f3.position.set (0, 0, 0);
                    cube16f3.rotation.z=-0.204*Math.PI;
                    scene.add (cube16f3);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.9825,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube16f4 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube16f4.position.set (0, 0, 0);
                    cube16f4.rotation.z=-0.2055*Math.PI;
                    scene.add (cube16f4);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.98,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube16f5 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube16f5.position.set (0, 0, 0);
                    cube16f5.rotation.z=-0.207*Math.PI;
                    scene.add (cube16f5);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.9775,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube16f6 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube16f6.position.set (0, 0, 0);
                    cube16f6.rotation.z=-0.2085*Math.PI;
                    scene.add (cube16f6);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.975,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube16f7 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube16f7.position.set (0, 0, 0);
                    cube16f7.rotation.z=-0.21*Math.PI;
                    scene.add (cube16f7);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.9725,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube16f8 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube16f8.position.set (0, 0, 0);
                    cube16f8.rotation.z=-0.2115*Math.PI;
                    scene.add (cube16f8);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.97,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube16f9 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube16f9.position.set (0, 0, 0);
                    cube16f9.rotation.z=-0.213*Math.PI;
                    scene.add (cube16f9);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.9675,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube16f10 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube16f10.position.set (0, 0, 0);
                    cube16f10.rotation.z=-0.2145*Math.PI;
                    scene.add (cube16f10);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.965,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube16f11 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube16f11.position.set (0, 0, 0);
                    cube16f11.rotation.z=-0.216*Math.PI;
                    scene.add (cube16f11);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.9625,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube16f12 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube16f12.position.set (0, 0, 0);
                    cube16f12.rotation.z=-0.2175*Math.PI;
                    scene.add (cube16f12);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.96,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube16f13 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube16f13.position.set (0, 0, 0);
                    cube16f13.rotation.z=-0.219*Math.PI;
                    scene.add (cube16f13);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.9575,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube16f14 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube16f14.position.set (0, 0, 0);
                    cube16f14.rotation.z=-0.2205*Math.PI;
                    scene.add (cube16f14);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.955,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube16f15 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube16f15.position.set (0, 0, 0);
                    cube16f15.rotation.z=-0.222*Math.PI;
                    scene.add (cube16f15);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.9525,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube16f16 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube16f16.position.set (0, 0, 0);
                    cube16f16.rotation.z=-0.2235*Math.PI;
                    scene.add (cube16f16);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.95,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube16f17 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube16f17.position.set (0, 0, 0);
                    cube16f17.rotation.z=-0.225*Math.PI;
                    scene.add (cube16f17);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.9525,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube16f18 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube16f18.position.set (0, 0, 0);
                    cube16f18.rotation.z=-0.2265*Math.PI;
                    scene.add (cube16f18);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.955,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube16f19 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube16f19.position.set (0, 0, 0);
                    cube16f19.rotation.z=-0.228*Math.PI;
                    scene.add (cube16f19);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.9575,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube16f20 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube16f20.position.set (0, 0, 0);
                    cube16f20.rotation.z=-0.2295*Math.PI;
                    scene.add (cube16f20);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.96,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube16f21 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube16f21.position.set (0, 0, 0);
                    cube16f21.rotation.z=-0.231*Math.PI;
                    scene.add (cube16f21);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.9625,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube16f22 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube16f22.position.set (0, 0, 0);
                    cube16f22.rotation.z=-0.2325*Math.PI;
                    scene.add (cube16f22);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.965,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube16f23 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube16f23.position.set (0, 0, 0);
                    cube16f23.rotation.z=-0.234*Math.PI;
                    scene.add (cube16f23);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.9675,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube16f24 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube16f24.position.set (0, 0, 0);
                    cube16f24.rotation.z=-0.2355*Math.PI;
                    scene.add (cube16f24);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.97,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube16f25 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube16f25.position.set (0, 0, 0);
                    cube16f25.rotation.z=-0.237*Math.PI;
                    scene.add (cube16f25);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.9725,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube16f26 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube16f26.position.set (0, 0, 0);
                    cube16f26.rotation.z=-0.2385*Math.PI;
                    scene.add (cube16f26);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.975,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube16f27 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube16f27.position.set (0, 0, 0);
                    cube16f27.rotation.z=-0.24*Math.PI;
                    scene.add (cube16f27);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.9775,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube16f28 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube16f28.position.set (0, 0, 0);
                    cube16f28.rotation.z=-0.2415*Math.PI;
                    scene.add (cube16f28);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.98,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube16f29 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube16f29.position.set (0, 0, 0);
                    cube16f29.rotation.z=-0.243*Math.PI;
                    scene.add (cube16f29);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.9825,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube16f30 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube16f30.position.set (0, 0, 0);
                    cube16f30.rotation.z=-0.2445*Math.PI;
                    scene.add (cube16f30);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.985,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube16f31 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube16f31.position.set (0, 0, 0);
                    cube16f31.rotation.z=-0.246*Math.PI;
                    scene.add (cube16f31);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.9875,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube16f32 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube16f32.position.set (0, 0, 0);
                    cube16f32.rotation.z=-0.2475*Math.PI;
                    scene.add (cube16f32);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.99,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube16f33 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube16f33.position.set (0, 0, 0);
                    cube16f33.rotation.z=-0.249*Math.PI;
                    scene.add (cube16f33);


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
                /*  FILLING  */

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.99,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube17f1 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube17f1.position.set (0, 0, 0);
                    cube17f1.rotation.z=-0.251*Math.PI;
                    scene.add (cube17f1);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.9875,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube17f2 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube17f2.position.set (0, 0, 0);
                    cube17f2.rotation.z=-0.2525*Math.PI;
                    scene.add (cube17f2);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.985,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube17f3 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube17f3.position.set (0, 0, 0);
                    cube17f3.rotation.z=-0.254*Math.PI;
                    scene.add (cube17f3);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.9825,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube17f4 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube17f4.position.set (0, 0, 0);
                    cube17f4.rotation.z=-0.2555*Math.PI;
                    scene.add (cube17f4);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.98,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube17f5 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube17f5.position.set (0, 0, 0);
                    cube17f5.rotation.z=-0.257*Math.PI;
                    scene.add (cube17f5);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.9775,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube17f6 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube17f6.position.set (0, 0, 0);
                    cube17f6.rotation.z=-0.2585*Math.PI;
                    scene.add (cube17f6);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.975,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube17f7 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube17f7.position.set (0, 0, 0);
                    cube17f7.rotation.z=-0.26*Math.PI;
                    scene.add (cube17f7);


                    var cubeGeometry = new THREE.BoxGeometry (.03,8.9725,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube17f8 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube17f8.position.set (0, 0, 0);
                    cube17f8.rotation.z=-0.2615*Math.PI;
                    scene.add (cube17f8);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.97,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube17f9 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube17f9.position.set (0, 0, 0);
                    cube17f9.rotation.z=-0.263*Math.PI;
                    scene.add (cube17f9);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.9675,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube17f10 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube17f10.position.set (0, 0, 0);
                    cube17f10.rotation.z=-0.2645*Math.PI;
                    scene.add (cube17f10);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.965,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube17f11 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube17f11.position.set (0, 0, 0);
                    cube17f11.rotation.z=-0.266*Math.PI;
                    scene.add (cube17f11);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.9625,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube17f12 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube17f12.position.set (0, 0, 0);
                    cube17f12.rotation.z=-0.2675*Math.PI;
                    scene.add (cube17f12);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.96,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube17f13 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube17f13.position.set (0, 0, 0);
                    cube17f13.rotation.z=-0.269*Math.PI;
                    scene.add (cube17f13);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.9575,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube17f14 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube17f14.position.set (0, 0, 0);
                    cube17f14.rotation.z=-0.2705*Math.PI;
                    scene.add (cube17f14);


                    var cubeGeometry = new THREE.BoxGeometry (.03,8.955,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube17f15 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube17f15.position.set (0, 0, 0);
                    cube17f15.rotation.z=-0.272*Math.PI;
                    scene.add (cube17f15);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.9525,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube17f16 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube17f16.position.set (0, 0, 0);
                    cube17f16.rotation.z=-0.2735*Math.PI;
                    scene.add (cube17f16);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.95,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube17f17 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube17f17.position.set (0, 0, 0);
                    cube17f17.rotation.z=-0.275*Math.PI;
                    scene.add (cube17f17);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.9525,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube17f18 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube17f18.position.set (0, 0, 0);
                    cube17f18.rotation.z=-0.2765*Math.PI;
                    scene.add (cube17f18);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.955,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube17f19 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube17f19.position.set (0, 0, 0);
                    cube17f19.rotation.z=-0.278*Math.PI;
                    scene.add (cube17f19);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.9575,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube17f20 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube17f20.position.set (0, 0, 0);
                    cube17f20.rotation.z=-0.2795*Math.PI;
                    scene.add (cube17f20);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.96,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube17f21 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube17f21.position.set (0, 0, 0);
                    cube17f21.rotation.z=-0.281*Math.PI;
                    scene.add (cube17f21);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.9625,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube17f22 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube17f22.position.set (0, 0, 0);
                    cube17f22.rotation.z=-0.2825*Math.PI;
                    scene.add (cube17f22);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.965,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube17f23 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube17f23.position.set (0, 0, 0);
                    cube17f23.rotation.z=-0.284*Math.PI;
                    scene.add (cube17f23);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.9675,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube17f24 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube17f24.position.set (0, 0, 0);
                    cube17f24.rotation.z=-0.2855*Math.PI;
                    scene.add (cube17f24);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.97,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube17f25 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube17f25.position.set (0, 0, 0);
                    cube17f25.rotation.z=-0.287*Math.PI;
                    scene.add (cube17f25);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.9725,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube17f26 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube17f26.position.set (0, 0, 0);
                    cube17f26.rotation.z=-0.2885*Math.PI;
                    scene.add (cube17f26);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.975,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube17f27 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube17f27.position.set (0, 0, 0);
                    cube17f27.rotation.z=-0.29*Math.PI;
                    scene.add (cube17f27);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.9775,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube17f28 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube17f28.position.set (0, 0, 0);
                    cube17f28.rotation.z=-0.2915*Math.PI;
                    scene.add (cube17f28);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.98,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube17f29 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube17f29.position.set (0, 0, 0);
                    cube17f29.rotation.z=-0.293*Math.PI;
                    scene.add (cube17f29);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.9825,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube17f30 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube17f30.position.set (0, 0, 0);
                    cube17f30.rotation.z=-0.2945*Math.PI;
                    scene.add (cube17f30);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.985,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube17f31 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube17f31.position.set (0, 0, 0);
                    cube17f31.rotation.z=-0.296*Math.PI;
                    scene.add (cube17f31);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.9875,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube17f32 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube17f32.position.set (0, 0, 0);
                    cube17f32.rotation.z=-0.2975*Math.PI;
                    scene.add (cube17f32);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.99,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube17f33 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube17f33.position.set (0, 0, 0);
                    cube17f33.rotation.z=-0.299*Math.PI;
                    scene.add (cube17f33);


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
                /*  FILLING  */

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.99,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube16f1 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube16f1.position.set (0, 0, 0);
                    cube16f1.rotation.z=-0.301*Math.PI;
                    scene.add (cube16f1);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.9875,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube16f2 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube16f2.position.set (0, 0, 0);
                    cube16f2.rotation.z=-0.3025*Math.PI;
                    scene.add (cube16f2);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.985,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube16f3 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube16f3.position.set (0, 0, 0);
                    cube16f3.rotation.z=-0.304*Math.PI;
                    scene.add (cube16f3);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.9825,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube16f4 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube16f4.position.set (0, 0, 0);
                    cube16f4.rotation.z=-0.3055*Math.PI;
                    scene.add (cube16f4);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.98,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube16f5 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube16f5.position.set (0, 0, 0);
                    cube16f5.rotation.z=-0.307*Math.PI;
                    scene.add (cube16f5);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.9775,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube16f6 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube16f6.position.set (0, 0, 0);
                    cube16f6.rotation.z=-0.3085*Math.PI;
                    scene.add (cube16f6);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.975,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube16f7 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube16f7.position.set (0, 0, 0);
                    cube16f7.rotation.z=-0.31*Math.PI;
                    scene.add (cube16f7);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.9725,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube16f8 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube16f8.position.set (0, 0, 0);
                    cube16f8.rotation.z=-0.3115*Math.PI;
                    scene.add (cube16f8);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.97,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube16f9 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube16f9.position.set (0, 0, 0);
                    cube16f9.rotation.z=-0.313*Math.PI;
                    scene.add (cube16f9);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.9675,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube16f10 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube16f10.position.set (0, 0, 0);
                    cube16f10.rotation.z=-0.3145*Math.PI;
                    scene.add (cube16f10);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.965,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube16f11 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube16f11.position.set (0, 0, 0);
                    cube16f11.rotation.z=-0.316*Math.PI;
                    scene.add (cube16f11);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.9625,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube16f12 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube16f12.position.set (0, 0, 0);
                    cube16f12.rotation.z=-0.3175*Math.PI;
                    scene.add (cube16f12);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.96,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube16f13 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube16f13.position.set (0, 0, 0);
                    cube16f13.rotation.z=-0.319*Math.PI;
                    scene.add (cube16f13);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.9575,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube16f14 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube16f14.position.set (0, 0, 0);
                    cube16f14.rotation.z=-0.3205*Math.PI;
                    scene.add (cube16f14);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.955,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube16f15 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube16f15.position.set (0, 0, 0);
                    cube16f15.rotation.z=-0.322*Math.PI;
                    scene.add (cube16f15);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.9525,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube16f16 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube16f16.position.set (0, 0, 0);
                    cube16f16.rotation.z=-0.3235*Math.PI;
                    scene.add (cube16f16);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.95,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube16f17 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube16f17.position.set (0, 0, 0);
                    cube16f17.rotation.z=-0.325*Math.PI;
                    scene.add (cube16f17);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.9525,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube16f18 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube16f18.position.set (0, 0, 0);
                    cube16f18.rotation.z=-0.3265*Math.PI;
                    scene.add (cube16f18);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.955,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube16f19 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube16f19.position.set (0, 0, 0);
                    cube16f19.rotation.z=-0.328*Math.PI;
                    scene.add (cube16f19);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.9575,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube16f20 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube16f20.position.set (0, 0, 0);
                    cube16f20.rotation.z=-0.3295*Math.PI;
                    scene.add (cube16f20);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.96,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube16f21 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube16f21.position.set (0, 0, 0);
                    cube16f21.rotation.z=-0.331*Math.PI;
                    scene.add (cube16f21);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.9625,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube16f22 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube16f22.position.set (0, 0, 0);
                    cube16f22.rotation.z=-0.3325*Math.PI;
                    scene.add (cube16f22);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.965,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube16f23 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube16f23.position.set (0, 0, 0);
                    cube16f23.rotation.z=-0.334*Math.PI;
                    scene.add (cube16f23);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.9675,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube16f24 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube16f24.position.set (0, 0, 0);
                    cube16f24.rotation.z=-0.3355*Math.PI;
                    scene.add (cube16f24);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.97,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube16f25 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube16f25.position.set (0, 0, 0);
                    cube16f25.rotation.z=-0.337*Math.PI;
                    scene.add (cube16f25);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.9725,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube16f26 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube16f26.position.set (0, 0, 0);
                    cube16f26.rotation.z=-0.3385*Math.PI;
                    scene.add (cube16f26);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.975,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube16f27 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube16f27.position.set (0, 0, 0);
                    cube16f27.rotation.z=-0.34*Math.PI;
                    scene.add (cube16f27);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.9775,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube16f28 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube16f28.position.set (0, 0, 0);
                    cube16f28.rotation.z=-0.3415*Math.PI;
                    scene.add (cube16f28);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.98,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube16f29 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube16f29.position.set (0, 0, 0);
                    cube16f29.rotation.z=-0.343*Math.PI;
                    scene.add (cube16f29);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.9825,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube16f30 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube16f30.position.set (0, 0, 0);
                    cube16f30.rotation.z=-0.3445*Math.PI;
                    scene.add (cube16f30);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.985,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube16f31 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube16f31.position.set (0, 0, 0);
                    cube16f31.rotation.z=-0.346*Math.PI;
                    scene.add (cube16f31);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.9875,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube16f32 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube16f32.position.set (0, 0, 0);
                    cube16f32.rotation.z=-0.3475*Math.PI;
                    scene.add (cube16f32);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.99,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube16f33 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube16f33.position.set (0, 0, 0);
                    cube16f33.rotation.z=-0.349*Math.PI;
                    scene.add (cube16f33);


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
                /*  FILLING  */

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.99,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube17f1 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube17f1.position.set (0, 0, 0);
                    cube17f1.rotation.z=-0.351*Math.PI;
                    scene.add (cube17f1);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.9875,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube17f2 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube17f2.position.set (0, 0, 0);
                    cube17f2.rotation.z=-0.3525*Math.PI;
                    scene.add (cube17f2);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.985,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube17f3 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube17f3.position.set (0, 0, 0);
                    cube17f3.rotation.z=-0.354*Math.PI;
                    scene.add (cube17f3);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.9825,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube17f4 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube17f4.position.set (0, 0, 0);
                    cube17f4.rotation.z=-0.3555*Math.PI;
                    scene.add (cube17f4);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.98,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube17f5 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube17f5.position.set (0, 0, 0);
                    cube17f5.rotation.z=-0.357*Math.PI;
                    scene.add (cube17f5);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.9775,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube17f6 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube17f6.position.set (0, 0, 0);
                    cube17f6.rotation.z=-0.3585*Math.PI;
                    scene.add (cube17f6);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.975,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube17f7 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube17f7.position.set (0, 0, 0);
                    cube17f7.rotation.z=-0.36*Math.PI;
                    scene.add (cube17f7);


                    var cubeGeometry = new THREE.BoxGeometry (.03,8.9725,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube17f8 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube17f8.position.set (0, 0, 0);
                    cube17f8.rotation.z=-0.3615*Math.PI;
                    scene.add (cube17f8);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.97,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube17f9 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube17f9.position.set (0, 0, 0);
                    cube17f9.rotation.z=-0.363*Math.PI;
                    scene.add (cube17f9);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.9675,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube17f10 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube17f10.position.set (0, 0, 0);
                    cube17f10.rotation.z=-0.3645*Math.PI;
                    scene.add (cube17f10);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.965,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube17f11 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube17f11.position.set (0, 0, 0);
                    cube17f11.rotation.z=-0.366*Math.PI;
                    scene.add (cube17f11);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.9625,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube17f12 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube17f12.position.set (0, 0, 0);
                    cube17f12.rotation.z=-0.3675*Math.PI;
                    scene.add (cube17f12);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.96,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube17f13 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube17f13.position.set (0, 0, 0);
                    cube17f13.rotation.z=-0.369*Math.PI;
                    scene.add (cube17f13);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.9575,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube17f14 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube17f14.position.set (0, 0, 0);
                    cube17f14.rotation.z=-0.3705*Math.PI;
                    scene.add (cube17f14);


                    var cubeGeometry = new THREE.BoxGeometry (.03,8.955,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube17f15 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube17f15.position.set (0, 0, 0);
                    cube17f15.rotation.z=-0.372*Math.PI;
                    scene.add (cube17f15);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.9525,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube17f16 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube17f16.position.set (0, 0, 0);
                    cube17f16.rotation.z=-0.3735*Math.PI;
                    scene.add (cube17f16);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.95,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube17f17 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube17f17.position.set (0, 0, 0);
                    cube17f17.rotation.z=-0.375*Math.PI;
                    scene.add (cube17f17);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.9525,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube17f18 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube17f18.position.set (0, 0, 0);
                    cube17f18.rotation.z=-0.3765*Math.PI;
                    scene.add (cube17f18);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.955,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube17f19 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube17f19.position.set (0, 0, 0);
                    cube17f19.rotation.z=-0.378*Math.PI;
                    scene.add (cube17f19);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.9575,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube17f20 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube17f20.position.set (0, 0, 0);
                    cube17f20.rotation.z=-0.3795*Math.PI;
                    scene.add (cube17f20);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.96,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube17f21 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube17f21.position.set (0, 0, 0);
                    cube17f21.rotation.z=-0.381*Math.PI;
                    scene.add (cube17f21);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.9625,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube17f22 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube17f22.position.set (0, 0, 0);
                    cube17f22.rotation.z=-0.3825*Math.PI;
                    scene.add (cube17f22);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.965,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube17f23 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube17f23.position.set (0, 0, 0);
                    cube17f23.rotation.z=-0.384*Math.PI;
                    scene.add (cube17f23);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.9675,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube17f24 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube17f24.position.set (0, 0, 0);
                    cube17f24.rotation.z=-0.3855*Math.PI;
                    scene.add (cube17f24);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.97,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube17f25 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube17f25.position.set (0, 0, 0);
                    cube17f25.rotation.z=-0.387*Math.PI;
                    scene.add (cube17f25);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.9725,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube17f26 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube17f26.position.set (0, 0, 0);
                    cube17f26.rotation.z=-0.3885*Math.PI;
                    scene.add (cube17f26);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.975,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube17f27 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube17f27.position.set (0, 0, 0);
                    cube17f27.rotation.z=-0.39*Math.PI;
                    scene.add (cube17f27);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.9775,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube17f28 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube17f28.position.set (0, 0, 0);
                    cube17f28.rotation.z=-0.3915*Math.PI;
                    scene.add (cube17f28);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.98,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube17f29 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube17f29.position.set (0, 0, 0);
                    cube17f29.rotation.z=-0.393*Math.PI;
                    scene.add (cube17f29);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.9825,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube17f30 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube17f30.position.set (0, 0, 0);
                    cube17f30.rotation.z=-0.3945*Math.PI;
                    scene.add (cube17f30);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.985,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube17f31 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube17f31.position.set (0, 0, 0);
                    cube17f31.rotation.z=-0.396*Math.PI;
                    scene.add (cube17f31);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.9875,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube17f32 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube17f32.position.set (0, 0, 0);
                    cube17f32.rotation.z=-0.3975*Math.PI;
                    scene.add (cube17f32);

                    var cubeGeometry = new THREE.BoxGeometry (.03,8.99,.03);
                    cubeGeometry.translate( 0, 3.5, 0 );
                    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 0xF5F5F5});
                    cube17f33 = new THREE.Mesh (cubeGeometry, cubeMaterial);
                    cube17f33.position.set (0, 0, 0);
                    cube17f33.rotation.z=-0.399*Math.PI;
                    scene.add (cube17f33);

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
            renderer.setClearColor( 0xf5F5F5, 0 ); // second param is opacity, 0 => transparent

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
    //        gridXZ.setColors( new THREE.Color(0x99999999), new THREE.Color(0xf5F5F5) );
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

            var pos = getScreenTranslation(cube12010);
            console.log(pos);
            document.getElementById("2010").style.left = pos.x - 20 +"px";
            document.getElementById("2010").style.top = pos.y + 100 +"px";

            var pos = getScreenTranslation(cube12000);
            console.log(pos);
            document.getElementById("2000").style.left = pos.x - 20 +"px";
            document.getElementById("2000").style.top = pos.y + 100 +"px";

            var pos = getScreenTranslation(cube11990);
            console.log(pos);
            document.getElementById("1990").style.left = pos.x - 20 +"px";
            document.getElementById("1990").style.top = pos.y + 100 +"px";

            var pos = getScreenTranslation(cube11980);
            console.log(pos);
            document.getElementById("1980").style.left = pos.x - 20 +"px";
            document.getElementById("1980").style.top = pos.y + 100 +"px";

            var pos = getScreenTranslation(cube11970);
            console.log(pos);
            document.getElementById("1970").style.left = pos.x - 20 +"px";
            document.getElementById("1970").style.top = pos.y + 100 +"px";

            var pos = getScreenTranslation(cube11960);
            console.log(pos);
            document.getElementById("1960").style.left = pos.x - 20 +"px";
            document.getElementById("1960").style.top = pos.y + 100 +"px";

            var pos = getScreenTranslation(cube11950);
            console.log(pos);
            document.getElementById("1950").style.left = pos.x - 20 +"px";
            document.getElementById("1950").style.top = pos.y + 100 +"px";

            var pos = getScreenTranslation(cube11940);
            console.log(pos); 
            document.getElementById("1940").style.left = pos.x - 20 +"px";
            document.getElementById("1940").style.top = pos.y + 100 +"px";




            var pos = getScreenTranslation(cube2raindrop);
            console.log(pos);
            document.getElementById("raindroponfanid").style.left = pos.x - 10 +"px";
            document.getElementById("raindroponfanid").style.top = pos.y - 10 + 100 +"px";

            var pos = getScreenTranslation(cube2raindrop2);
            console.log(pos);
            document.getElementById("raindroponfan2id").style.left = pos.x - 10 +"px";
            document.getElementById("raindroponfan2id").style.top = pos.y - 10 + 100 +"px";




            var pos = getScreenTranslation(cube3raindrop2);
            console.log(pos);
            document.getElementById("raindroponfanid2").style.left = pos.x - 10 +"px";
            document.getElementById("raindroponfanid2").style.top = pos.y - 10 + 100 +"px";




            var pos = getScreenTranslation(cube2a);
            console.log(pos);
            document.getElementById("brazilflag").style.left = pos.x - 10 +"px";
            document.getElementById("brazilflag").style.top = pos.y - 10 + 100 +"px";           

            var pos = getScreenTranslation(cube3a);
            console.log(pos);
            document.getElementById("3flag").style.left = pos.x - 10 +"px";
            document.getElementById("3flag").style.top = pos.y - 10 + 100 +"px"; 

            var pos = getScreenTranslation(cube4a);
            console.log(pos);
            document.getElementById("4flag").style.left = pos.x - 10 +"px";
            document.getElementById("4flag").style.top = pos.y - 10 + 100 +"px"; 

            var pos = getScreenTranslation(cube5a);
            console.log(pos);
            document.getElementById("norwayflag").style.left = pos.x - 10 +"px";
            document.getElementById("norwayflag").style.top = pos.y - 10 + 100 +"px";

            var pos = getScreenTranslation(cube6a);
            console.log(pos);
            document.getElementById("6flag").style.left = pos.x - 10 +"px";
            document.getElementById("6flag").style.top = pos.y - 10 + 100 +"px"; 

            var pos = getScreenTranslation(cube7a);
            console.log(pos);
            document.getElementById("7flag").style.left = pos.x - 10 +"px";
            document.getElementById("7flag").style.top = pos.y - 10 + 100 +"px"; 

            var pos = getScreenTranslation(cube8a);
            console.log(pos);
            document.getElementById("8flag").style.left = pos.x - 10 +"px";
            document.getElementById("8flag").style.top = pos.y - 10 + 100 +"px"; 

            var pos = getScreenTranslation(cube9a);
            console.log(pos);
            document.getElementById("9flag").style.left = pos.x - 10 +"px";
            document.getElementById("9flag").style.top = pos.y - 10 + 100 +"px"; 

            var pos = getScreenTranslation(cube10a);
            console.log(pos);
            document.getElementById("10flag").style.left = pos.x - 10 +"px";
            document.getElementById("10flag").style.top = pos.y - 10 + 100 +"px"; 

            var pos = getScreenTranslation(cube11a);
            console.log(pos);
            document.getElementById("11flag").style.left = pos.x - 10 +"px";
            document.getElementById("11flag").style.top = pos.y - 10 + 100 +"px"; 


            var pos = getScreenTranslation(cube12raindrop);
            console.log(pos);
            document.getElementById("skflag").style.left = pos.x - 10 +"px";
            document.getElementById("skflag").style.top = pos.y - 10 + 100 +"px";



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
        var widthHalf = 0.25 * renderer.context.canvas.width;
        var heightHalf = 0.25 * renderer.context.canvas.height;

        var bbox = new THREE.BoundingBoxHelper(obj, 0xF5F5F5);
 
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








            /* DRAG DROPS ON VERTICAL */   
//    $( function() {
//        $( ".draga2" ).draggable({ axis: "y" });
     //   $( "#draggable2" ).draggable({ axis: "x" });
     
     //   $( "#draggable3" ).draggable({ containment: "#containment-wrapper", scroll: false });
     //   $( "#draggable4" ).draggable({ containment: "parent" });
//      } );




/*  change background pic  */

//$(".writer").hover(function() {
//        $(this).closest(".bls1").toggleClass("country-background-image");
//        $(this).closest(".a1").toggleClass("white-text");
//    });





/*  scroll hijack  */

//(function() {
//    function scrollHorizontally(e) {
//        e = window.event || e;
//        var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
//        document.getElementById('mainparent').scrollLeft -= (delta*27); // Multiplied by 40
//        e.preventDefault();
//    }
//    if (document.getElementById('mainparent').addEventListener) {
//        // IE9, Chrome, Safari, Opera
//        document.getElementById('mainparent').addEventListener("mousewheel", scrollHorizontally, false);
//        // Firefox
//        document.getElementById('mainparent').addEventListener("DOMMouseScroll", scrollHorizontally, false);
//    } else {
//        // IE 6/7/8
//        document.getElementById('mainparent').attachEvent("onmousewheel", scrollHorizontally);
//    }
//})();









