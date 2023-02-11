'use strict'

AFRAME.registerComponent('delete-custom-component',{
    schema: {},
    init: function(){
        const Context_AF = this; //refers to "this" component

        //add event listener for "click" event on whatever entity has this component
        Context_AF.el.addEventListener('click',function(event){
            console.log("Acorn clicked!");
            //delete function
            Context_AF.deleteAcorns();
        });

        //when "hovering" make larger
        Context_AF.el.addEventListener('mouseenter', function(event){
            Context_AF.el.object3D.scale.set(30, 30, 30);
        });

        Context_AF.el.addEventListener('mouseleave', function(event){
            Context_AF.el.object3D.scale.set(20, 20, 20);
        });  
    },
    
    //custom delete function
    deleteAcorns : function(){
       const Context_AF = this;
       //only a parentNode can delete childNodes    
       Context_AF.el.parentNode.removeChild(Context_AF.el);  
   }
});