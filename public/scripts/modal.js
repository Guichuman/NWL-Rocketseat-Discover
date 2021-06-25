export default function Modal() {

    const modalWrappeer = document.querySelector('.modal-wrapper')
    const cancelButton = document.querySelector('.button.cancel')

    cancelButton.addEventListener("click", close)

    function open() {
        //funcionalidade de atribuir a classe active para modal
        modalWrappeer.classList.add("active")
    }

    function close() {
        //funcionalidade de remover a classe active da modal
        modalWrappeer.classList.remove("active")
    }

    return {
        open,
        close
    }
}