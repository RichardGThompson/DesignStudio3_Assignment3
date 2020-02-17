AFRAME.registerComponent('teleport', {
    init : function(){
        const Context_AF = this;

        Context_AF.el.addEventListener('click', function(event){
            console.log('Clicked.');
            const cameraHeight = document.getElementById('playerCamera').getAttribute('position');
            const position = Context_AF.el.getAttribute('position');
            //console.log(position.y);
            document.getElementById('cameraGroup').object3D.position.set(position.x, position.y + 1.6, position.z);
        });
        
        //Scale up the teleport pad when the mouse hovers over it.
        Context_AF.el.addEventListener('mouseenter', function(event){
            //Context_AF.el.object3D.scale.set(1.1, 1.0, 1.1);
            let teleElem = Context_AF.el;
            teleElem.setAttribute('animation', 'property: scale; to: 1.1 1.0 1.1; loop: false; dur: 200;');
        });

        //Scale down the teleport pad when the mouse leaves the area.
        Context_AF.el.addEventListener('mouseleave', function(event){
            //Context_AF.el.object3D.scale.set(1.0, 1.0, 1.0);
            let teleElem = Context_AF.el;
            teleElem.setAttribute('animation', 'property: scale; to: 1.0 1.0 1.0; loop: false; dur: 200;');
        });
    }
});