'use strict'

AFRAME.registerComponent('create-custom-component',{
    schema: { },
    init: function(){
        const Context_AF = this; //refers to "this" component

        //add event listener for "click" event on whatever entity has this component
        Context_AF.el.addEventListener('click',function(event){
            console.log("clicked!!");
            Context_AF.createAcorns(); 
        });
    },

    //custom functions
    createAcorns :function(){
        const Context_AF = this;

        //create an html element/entity that loads 3D model
        let acornElem = document.createElement('a-entity');
        acornElem.setAttribute('id', 'acorns');
        acornElem.setAttribute('class', 'clickable');
        acornElem.setAttribute('gltf-model', '#acorn_model');
        acornElem.setAttribute('delete-custom-component',{});

        //random transforms
        acornElem.setAttribute('position', {x:-1 + (Math.random()*6.0), y:0, z:4.0 - (Math.random()*3.0)});
        acornElem.setAttribute('scale', {x:20, y:20, z:20}); 
        //acornElem.setAttribute('rotation', {x:-1, y:Math.random()* 360.0, z:0}); //random y rotation
        
        //rotation animation
        //acornElem.setAttribute('animation', {property: 'rotation'});
        //acornElem.setAttribute('to', {x:-1, y:360, z:0});
        
        //attach to scene
        let scene = document.querySelector('a-scene');
        scene.appendChild(acornElem);
    }, 
});