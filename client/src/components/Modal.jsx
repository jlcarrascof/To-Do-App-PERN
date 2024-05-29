const Modal = () => {

    const mode = "edit"

    return (
      <div className="overlay">
        <div className="modal">
          <div>
            <h3>Let's {mode} you task</h3>
            <button>X</button>
          </div>
        </div>
      </div>
    )
}

export default Modal
