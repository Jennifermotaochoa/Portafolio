console.log("Hola")
const {createApp} = Vue;

const app = createApp({
    data(){
        return{

        }
    },
    created(){
        // Agregar animaciones después de que la página haya cargado completamente
        window.addEventListener('load', function() {
            var elements = document.getElementsByClassName('animated');
            for (var i = 0; i < elements.length; i++) {
                var animationClass = elements[i].dataset.animation;
                elements[i].classList.add(animationClass);
            }
        });
    },
})
app.mount("#app");