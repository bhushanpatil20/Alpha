import "./ConfirmationModel.css";

function ConfirmationModal({

    isOpen,

    title,

    message,

    confirmText = "Confirm",

    cancelText = "Cancel",

    onConfirm,

    onCancel

}) {

    if (!isOpen) return null;

    return (

        <div
            className="confirmation-backdrop"
            onClick={onCancel}
        >

            <div
                className="confirmation-modal"
                onClick={(e) => e.stopPropagation()}
            >

                <div className="confirmation-icon">

                    🚪

                </div>

                <h2>{title}</h2>

                <p>{message}</p>

                <div className="confirmation-actions">

                    <button
                        className="cancel-btn"
                        onClick={onCancel}
                    >

                        {cancelText}

                    </button>

                    <button
                        className="confirm-btn"
                        onClick={onConfirm}
                    >

                        {confirmText}

                    </button>

                </div>

            </div>

        </div>

    );

}

export default ConfirmationModal;