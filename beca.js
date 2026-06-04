const form = document.getElementById("becaForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const button = document.querySelector(".btn-submit");

    button.innerHTML = "Enviando...";
    button.style.opacity = ".8";

    setTimeout(()=>{

        button.innerHTML = "✓ Solicitud Enviada";
        button.style.background = "linear-gradient(45deg,#00b09b,#96c93d)";

        alert("Tu solicitud fue enviada correctamente. Pronto nos comunicaremos contigo.");

        form.reset();

    },2000);

});