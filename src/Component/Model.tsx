// Modal.tsx
import React from 'react';

interface ModalProps {
    show: boolean;
    onClose: () => void;
    content: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ show, onClose, content }) => {
    if (!show) return null;

    return (
        <div style={styles.backdrop}>
            <div style={styles.modal}>
                <button style={styles.closeBtn} onClick={onClose}>×</button>
                {content}
            </div>
        </div>
    );
};

const styles: any = {
    backdrop: {
        position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        zIndex: 999,
    },
    modal: {
        backgroundColor: 'white', padding: 20, borderRadius: 8,
        minWidth: '300px', maxWidth: '80%', position: 'relative',
    },
    closeBtn: {
        position: 'absolute', top: 10, right: 15, fontSize: 18, cursor: 'pointer',
        background: 'none', border: 'none'
    }
};

export default Modal;
