const btnEncriptar = document.querySelector("#btnEncriptar");
const btnDesencriptar = document.querySelector("#btnDesencriptar");
const msgEncript = document.querySelector("#msgEncript");
const btnCopiar = document.querySelector(".main__der__copiar");
const derImg = document.querySelector(".main__der__img");
const derH5 = document.querySelector(".main__der__h5");
const derP = document.querySelector(".main__der__p");
const alerta = document.querySelector(".main__izq__alert");
const textArea = document.querySelector("#msgUsuario");
const textoCopiado = document.querySelector(".main__der__copiado");
const themeBody = document.querySelector("#themeBody");
const checkbox = document.querySelector(".checkbox");

const claves = {
    a: "ai",
    e: "enter",
    i: "imes",
    o: "ober",
    u: "ufat",
};

btnEncriptar.addEventListener("click", () => {
    textoCopiado.style.display = "none";
    const msgUsuario = textArea.value.trim();
    let encriptado = "";
    idem(msgUsuario);

    for (let j = 0; j < msgUsuario.length; j++) {
        if (claves.hasOwnProperty(msgUsuario[j])) {
            encriptado += claves[msgUsuario[j]];
        } else {
            encriptado += msgUsuario[j];
        }
    }
    msgEncript.value = encriptado;
    textArea.value = "";
});

btnCopiar.addEventListener("click", () => {
    const aCopiar = msgEncript.value;
    copiarMsg(aCopiar);
    textoCopiado.style.display = "block";
    msgEncript.value = "";
});

btnDesencriptar.addEventListener("click", () => {
    textoCopiado.style.display = "none";

    let msgUsuario = textArea.value.trim();

    idem(msgUsuario);

    Object.entries(claves).forEach(([key, value]) => {
        msgUsuario = msgUsuario.split(value).join(key);
    });

    msgEncript.value = msgUsuario;
    textArea.value = "";
});

function idem(msgUsuario) {
    const regex = /^[a-z\s]+$/;
    if (!msgUsuario || !regex.test(msgUsuario)) {
        alerta.style.display = "block";
        return;
    } else {
        alerta.style.display = "none";
    }

    msgEncript.style.display = "block";
    btnCopiar.style.display = "block";
    derImg.style.display = "none";
    derH5.style.display = "none";
    derP.style.display = "none";
}

const copiarMsg = async (aCopiar) => {
    try {
        await navigator.clipboard.writeText(aCopiar);
    } catch (error) {
        console.log(error);
        alert("Algo salió mal");
    }
};

checkbox.addEventListener("change", () => {
    themeBody.className.indexOf("dark__theme") === -1
        ? themeBody.classList.add("dark__theme")
        : themeBody.classList.remove("dark__theme");
});
